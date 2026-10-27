'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';
import {
  removePushSubscriptionAction,
  savePushSubscriptionAction,
  saveReminderAction,
  testPushAction,
} from '@/app/(app)/settings/actions';
import { errorBoxClass, fieldClass, labelClass, noticeBoxClass, primaryClass, secondaryClass } from '../ui';

type Initial = { reminder_enabled: boolean; reminder_time: string; nag_time: string | null };

type Support = 'checking' | 'ok' | 'unsupported' | 'ios-browser';

function base64ToBytes(base64: string): Uint8Array<ArrayBuffer> {
  const padded = (base64 + '='.repeat((4 - (base64.length % 4)) % 4)).replace(/-/g, '+').replace(/_/g, '/');
  const raw = atob(padded);
  const out = new Uint8Array(new ArrayBuffer(raw.length));
  for (let i = 0; i < raw.length; i++) out[i] = raw.charCodeAt(i);
  return out;
}

function detectSupport(): Support {
  const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const standalone = window.matchMedia('(display-mode: standalone)').matches;
  if (isIos && !standalone) return 'ios-browser';
  return 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window ? 'ok' : 'unsupported';
}

/** Nhắc học hằng ngày (SPEC F16): bật thông báo trên máy này, đặt giờ nhắc và giờ nhắc lần hai. */
export function ReminderPanel({ initial, vapidKey }: { initial: Initial; vapidKey: string | null }) {
  const router = useRouter();
  const [support, setSupport] = useState<Support>('checking');
  const [device, setDevice] = useState<PushSubscription | null>(null);
  const [time, setTime] = useState(initial.reminder_time);
  const [nagOn, setNagOn] = useState(initial.nag_time !== null);
  const [nagTime, setNagTime] = useState(initial.nag_time ?? '21:30');
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null);
  const [pending, startTransition] = useTransition();

  useEffect(() => {
    // Kiểm hỗ trợ và đăng ký service worker bất đồng bộ, chỉ đặt state trong callback.
    Promise.resolve(detectSupport())
      .then(async (s) => {
        if (s !== 'ok') return setSupport(s);
        const reg = await navigator.serviceWorker.register('/sw.js');
        setDevice(await reg.pushManager.getSubscription());
        setSupport('ok');
      })
      .catch(() => setSupport('unsupported'));
  }, []);

  const enabledHere = initial.reminder_enabled && device !== null;

  function save(enabled: boolean, okText: string) {
    return saveReminderAction({ reminder_enabled: enabled, reminder_time: time, nag_time: nagOn ? nagTime : null }).then((res) => {
      setMessage(res.ok ? { ok: true, text: okText } : { ok: false, text: res.error });
      if (res.ok) router.refresh();
      return res.ok;
    });
  }

  function enable() {
    setMessage(null);
    startTransition(async () => {
      if (!vapidKey) {
        setMessage({ ok: false, text: 'Server chưa có khóa VAPID: thêm NEXT_PUBLIC_VAPID_PUBLIC_KEY và VAPID_PRIVATE_KEY trên Vercel rồi Redeploy (xem docs/nhac-hoc.md).' });
        return;
      }
      const permission = await Notification.requestPermission();
      if (permission !== 'granted') {
        setMessage({ ok: false, text: 'Bạn chưa cho phép thông báo. Mở cài đặt trình duyệt để cho phép rồi thử lại.' });
        return;
      }
      try {
        const reg = await navigator.serviceWorker.ready;
        const sub =
          (await reg.pushManager.getSubscription()) ??
          (await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: base64ToBytes(vapidKey) }));
        const json = sub.toJSON();
        const res = await savePushSubscriptionAction({
          endpoint: sub.endpoint,
          keys: { p256dh: json.keys?.p256dh ?? '', auth: json.keys?.auth ?? '' },
        });
        if (!res.ok) {
          setMessage({ ok: false, text: res.error });
          return;
        }
        setDevice(sub);
        await save(true, `Đã bật nhắc lúc ${time} mỗi ngày.`);
      } catch {
        setMessage({ ok: false, text: 'Không bật được thông báo trên máy này.' });
      }
    });
  }

  function disable() {
    setMessage(null);
    startTransition(async () => {
      if (device) {
        await removePushSubscriptionAction(device.endpoint);
        await device.unsubscribe().catch(() => undefined);
        setDevice(null);
      }
      await save(false, 'Đã tắt nhắc học.');
    });
  }

  function saveTimes() {
    setMessage(null);
    startTransition(async () => {
      await save(initial.reminder_enabled, 'Đã lưu giờ nhắc.');
    });
  }

  function test() {
    setMessage(null);
    startTransition(async () => {
      const res = await testPushAction();
      setMessage(res.ok ? { ok: true, text: 'Đã gửi thông báo thử.' } : { ok: false, text: res.error });
    });
  }

  return (
    <section className="flex flex-col gap-4 rounded-block bg-surface p-5">
      <h2 className="text-[18px] font-bold">Nhắc học hằng ngày</h2>
      <p className="text-[14px] leading-snug text-muted">
        Đúng giờ nhắc, app báo việc cần làm hôm nay. Đến giờ nhắc lần hai mà chưa đạt chỉ tiêu thì nhắc lại kèm phần còn thiếu.
      </p>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="rem-time" className={labelClass}>
            Giờ nhắc
          </label>
          <input id="rem-time" type="time" value={time} onChange={(e) => setTime(e.target.value)} className={fieldClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="rem-nag" className={labelClass}>
            Nhắc lần hai
          </label>
          <input
            id="rem-nag"
            type="time"
            value={nagTime}
            disabled={!nagOn}
            onChange={(e) => setNagTime(e.target.value)}
            className={`${fieldClass} disabled:opacity-50`}
          />
        </div>
      </div>
      <label className="ml-1 flex items-center gap-2 text-[15px]">
        <input type="checkbox" checked={nagOn} onChange={(e) => setNagOn(e.target.checked)} className="size-5" />
        Nhắc lần hai nếu chưa đạt chỉ tiêu
      </label>

      {support === 'ios-browser' && (
        <p className={errorBoxClass}>
          Trên iPhone, thông báo chỉ chạy khi mở app từ Màn hình chính: bấm nút Chia sẻ → “Thêm vào MH chính”, rồi mở app từ biểu tượng đó và bật lại ở đây.
        </p>
      )}
      {support === 'unsupported' && <p className={errorBoxClass}>Trình duyệt này không hỗ trợ thông báo đẩy.</p>}
      {message && <p className={message.ok ? noticeBoxClass : errorBoxClass}>{message.text}</p>}

      {support === 'ok' &&
        (enabledHere ? (
          <>
            <button type="button" onClick={saveTimes} disabled={pending} className={primaryClass}>
              {pending ? 'Đang lưu…' : 'Lưu giờ nhắc'}
            </button>
            <div className="grid grid-cols-2 gap-3">
              <button type="button" onClick={test} disabled={pending} className={secondaryClass}>
                Gửi thử
              </button>
              <button type="button" onClick={disable} disabled={pending} className={secondaryClass}>
                Tắt nhắc
              </button>
            </div>
          </>
        ) : (
          <button type="button" onClick={enable} disabled={pending} className={primaryClass}>
            {pending ? 'Đang bật…' : 'Bật nhắc trên máy này'}
          </button>
        ))}
      {support !== 'ok' && support !== 'checking' && (
        <button type="button" onClick={saveTimes} disabled={pending} className={secondaryClass}>
          Lưu giờ nhắc
        </button>
      )}
    </section>
  );
}
