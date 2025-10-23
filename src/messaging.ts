// src/messaging.ts
import { app } from "../firebase";
import { getMessaging, getToken, onMessage, isSupported } from "firebase/messaging";

export async function initMessaging() {
  if (!(await isSupported())) return null;

  // 서비스워커 등록(호스팅 루트에 sw가 있어야 함)
  const reg = await navigator.serviceWorker.register("/firebase-messaging-sw.js");

  const messaging = getMessaging(app);
  // 콘솔에서 복사한 Public VAPID Key 삽입
  const token = await getToken(messaging, {
    vapidKey: "BPojh8VzKhRW0kZGg_WJJIv5bcV-nZ39gyOOxecnT3T-yB0CgMknllHozV7VvJ9BoyZbGIuEPLC_mTaLXYfwPQ8",
    serviceWorkerRegistration: reg
  });
  console.log("FCM token", token);

  onMessage(messaging, (payload) => {
    console.log("Foreground message", payload);
    // 토스트/알림 UI 처리
  });

  return token;
}
