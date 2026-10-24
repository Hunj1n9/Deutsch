'use client';

import { useSyncExternalStore } from 'react';

/**
 * Đọc to tiếng Đức bằng giọng có sẵn của trình duyệt (Web Speech API), không cần lưu file âm thanh (DECISIONS.md).
 */
let cachedVoice: SpeechSynthesisVoice | null | undefined;

function germanVoice(): SpeechSynthesisVoice | null {
  if (cachedVoice !== undefined && cachedVoice !== null) return cachedVoice;
  const voices = window.speechSynthesis.getVoices();
  cachedVoice = voices.find((v) => v.lang === 'de-DE' && v.localService) ?? voices.find((v) => v.lang.startsWith('de')) ?? null;
  return cachedVoice;
}

export function canSpeak(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

const noopSubscribe = () => () => {};

/** Dùng khi giá trị ảnh hưởng tới markup: server và lần hydrate đầu luôn là `false`, tránh lệch hydration. */
export function useCanSpeak(): boolean {
  return useSyncExternalStore(noopSubscribe, canSpeak, () => false);
}

export function speakGerman(text: string, rate = 0.9): void {
  if (!canSpeak() || !text) return;
  const synth = window.speechSynthesis;
  synth.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'de-DE';
  utterance.rate = rate;
  const voice = germanVoice();
  if (voice) utterance.voice = voice;
  synth.speak(utterance);
}

/**
 * Đọc nối tiếp nhiều câu (hội thoại bài học): hai người nói dùng hai giọng de-DE nếu trình duyệt có,
 * không thì đổi cao độ để phân biệt. `onLine` báo dòng đang đọc (-1 khi xong).
 */
export function speakDialogue(lines: { text: string; speaker: 'A' | 'B' }[], onLine?: (index: number) => void, rate = 0.85): void {
  if (!canSpeak() || lines.length === 0) return;
  const synth = window.speechSynthesis;
  synth.cancel();
  const voices = synth.getVoices().filter((v) => v.lang.startsWith('de'));
  lines.forEach((line, i) => {
    const u = new SpeechSynthesisUtterance(line.text);
    u.lang = 'de-DE';
    u.rate = rate;
    const voice = voices.length > 1 ? voices[line.speaker === 'A' ? 0 : 1] : voices[0];
    if (voice) u.voice = voice;
    if (voices.length < 2) u.pitch = line.speaker === 'A' ? 1 : 1.35;
    u.onstart = () => onLine?.(i);
    if (i === lines.length - 1) u.onend = () => onLine?.(-1);
    synth.speak(u);
  });
}

export function stopSpeaking(): void {
  if (canSpeak()) window.speechSynthesis.cancel();
}
