'use client';

import { useEffect } from 'react';
import { heartbeatAction } from '@/app/(app)/actions';
import { BEAT_INTERVAL_MS, shouldBeat } from '@/lib/heartbeat';

const EVENTS = ['pointerdown', 'keydown', 'input', 'scroll', 'touchstart'] as const;

/**
 * Đo giờ học thật trên màn Ôn, Viết, Gia sư, Bài học (SPEC F8, F11): gửi nhịp ngay khi bắt đầu thao tác,
 * rồi mỗi 30 giây nếu còn thao tác trong 120 giây gần nhất. Không render gì.
 */
export function ActivityTracker({ activity }: { activity: 'review' | 'writing' | 'tutor' | 'lesson' }) {
  useEffect(() => {
    let lastInteraction = 0;
    let lastBeat = 0;

    const beat = () => {
      lastBeat = Date.now();
      void heartbeatAction(activity).catch(() => undefined);
    };
    const onActivity = () => {
      const now = Date.now();
      const wasIdle = !shouldBeat(now, lastInteraction);
      lastInteraction = now;
      // Quay lại sau khi nghỉ: gửi nhịp mở phiên ngay, không đợi tới lượt 30 giây.
      if (wasIdle && now - lastBeat > BEAT_INTERVAL_MS) beat();
    };

    EVENTS.forEach((e) => window.addEventListener(e, onActivity, { passive: true }));
    const timer = window.setInterval(() => {
      if (document.visibilityState === 'visible' && shouldBeat(Date.now(), lastInteraction)) beat();
    }, BEAT_INTERVAL_MS);

    return () => {
      EVENTS.forEach((e) => window.removeEventListener(e, onActivity));
      window.clearInterval(timer);
    };
  }, [activity]);

  return null;
}
