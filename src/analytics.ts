// src/analytics.ts
import { app } from "../firebase";
import { getAnalytics, isSupported, logEvent } from "firebase/analytics";

export async function initAnalytics() {
  if (!(await isSupported())) return null;
  const analytics = getAnalytics(app);
  logEvent(analytics, "yurica_app_open");
  return analytics;
}
