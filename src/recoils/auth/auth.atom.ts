import { COOKIE_KEY } from "@constants";
import { cookieEffect } from "@recoils/effects";
import { atom } from "recoil";

export const userIdAtom = atom<string | null>({
  key: "userId",
  default: null,
  effects: [cookieEffect<string | null>(COOKIE_KEY.userId)],
});

export const secureTokenAtom = atom<string | null>({
  key: "secureToken",
  default: null,
  effects: [cookieEffect<string | null>(COOKIE_KEY.secureToken)],
});
