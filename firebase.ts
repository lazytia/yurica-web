// src/firebase.ts
import { initializeApp, getApps, getApp, } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// 🔐 콘솔에서 복사한 설정으로 교체
const firebaseConfig = {
  apiKey: "AIzaSyDvHwDOxoZuYv-S80QM1Be7tKzxZFP67fg",
  authDomain: "yurica-b2b.firebaseapp.com",
  projectId: "yurica-b2b",
   storageBucket: "yurica-b2b.firebasestorage.app",
  messagingSenderId: "699122439799",
  appId: "1:699122439799:web:4ab40163e4d5bc16509872",
  measurementId: "G-WBGHDKJ070"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };

// 필요한 서비스는 쓰는 파일에서 가져다 씀 (지연 로딩 추천)
