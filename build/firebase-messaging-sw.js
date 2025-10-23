/* eslint-disable no-undef */
importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js");

// 여기에 동일한 firebaseConfig를 넣거나, 메시징용 최소 값만 삽입
firebase.initializeApp({
  apiKey: "…",
  authDomain: "…",
  projectId: "…",
  messagingSenderId: "…",
  appId: "…"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  // 백그라운드 알림 표시
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/icons/icon-192.png"
  });
});
