'use client';

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react';

/**
 * Ghi âm ngắn bằng MediaRecorder cho phần nói theo (SPEC F15).
 * Bản ghi chỉ là object URL trong bộ nhớ trang: không tải lên, không lưu; đổi bản ghi hoặc rời trang là mất.
 */
export type RecorderState = 'idle' | 'recording' | 'ready' | 'denied' | 'error';

function recordingSupported(): boolean {
  return typeof window !== 'undefined' && typeof window.MediaRecorder !== 'undefined' && Boolean(navigator.mediaDevices?.getUserMedia);
}

const noopSubscribe = () => () => {};

export function useRecorder(maxSeconds: number) {
  // Server coi như hỗ trợ để không nháy thông báo lỗi lúc hydrate.
  const supported = useSyncExternalStore(noopSubscribe, recordingSupported, () => true);
  const [state, setState] = useState<RecorderState>('idle');
  const [url, setUrl] = useState<string | null>(null);
  const [seconds, setSeconds] = useState(0);
  const streamRef = useRef<MediaStream | null>(null);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const timers = useRef<number[]>([]);
  const urlRef = useRef<string | null>(null);

  const clearTimers = () => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  };

  const discard = useCallback(() => {
    if (urlRef.current) URL.revokeObjectURL(urlRef.current);
    urlRef.current = null;
    setUrl(null);
    setSeconds(0);
    setState((s) => (s === 'denied' || s === 'error' ? s : 'idle'));
  }, []);

  const stop = useCallback(() => {
    clearTimers();
    if (recorderRef.current?.state === 'recording') recorderRef.current.stop();
  }, []);

  const start = useCallback(async () => {
    if (!recordingSupported() || recorderRef.current?.state === 'recording') return;
    try {
      // Giữ luồng micro cho cả phần nói theo để không hỏi quyền lại ở mỗi dòng.
      streamRef.current ??= await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch (e) {
      setState((e as DOMException).name === 'NotAllowedError' ? 'denied' : 'error');
      return;
    }
    discard();
    const chunks: Blob[] = [];
    const recorder = new MediaRecorder(streamRef.current);
    recorder.ondataavailable = (ev) => {
      if (ev.data.size > 0) chunks.push(ev.data);
    };
    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: recorder.mimeType || 'audio/webm' });
      urlRef.current = URL.createObjectURL(blob);
      setUrl(urlRef.current);
      setState('ready');
    };
    recorderRef.current = recorder;
    recorder.start();
    setState('recording');
    const startedAt = Date.now();
    for (let s = 1; s <= maxSeconds; s++) {
      timers.current.push(window.setTimeout(() => setSeconds(Math.round((Date.now() - startedAt) / 1000)), s * 1000));
    }
    timers.current.push(window.setTimeout(stop, maxSeconds * 1000));
  }, [discard, maxSeconds, stop]);

  /** Phát bản ghi; `onEnd` khi phát xong. */
  const play = useCallback((onEnd?: () => void) => {
    if (!urlRef.current) return;
    const audio = new Audio(urlRef.current);
    if (onEnd) audio.onended = () => onEnd();
    void audio.play().catch(() => onEnd?.());
  }, []);

  useEffect(
    () => () => {
      clearTimers();
      if (recorderRef.current?.state === 'recording') recorderRef.current.stop();
      streamRef.current?.getTracks().forEach((t) => t.stop());
      if (urlRef.current) URL.revokeObjectURL(urlRef.current);
    },
    [],
  );

  return { supported, state, url, seconds, start, stop, play, discard };
}
