'use client';

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
