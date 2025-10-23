// src/functions.ts
import { app } from "../firebase";
import { getFunctions, httpsCallable } from "firebase/functions";

const functions = getFunctions(app);

export async function callHello(name: string) {
  const fn = httpsCallable(functions, "helloYurica");
  const res = await fn({ name });
  return res.data; // {message: "..."}
}
