// Service worker chỉ để nhận thông báo nhắc học (SPEC F16). Không cache trang.
self.addEventListener('push', (event) => {
  let data = { title: 'Deutsch', body: 'Đến giờ học tiếng Đức.', url: '/' };
  try {
    data = { ...data, ...event.data.json() };
  } catch {
    // Không đọc được nội dung thì dùng câu mặc định.
  }
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: '/icons/icon-192.png',
      badge: '/icons/icon-192.png',
      tag: 'deutsch-reminder',
      renotify: true,
      data: { url: data.url || '/' },
    }),
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const url = new URL(event.notification.data?.url || '/', self.location.origin).href;
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
      for (const c of list) {
        if (c.url.startsWith(self.location.origin) && 'focus' in c) {
          c.navigate(url);
          return c.focus();
        }
      }
      return self.clients.openWindow(url);
    }),
  );
});
