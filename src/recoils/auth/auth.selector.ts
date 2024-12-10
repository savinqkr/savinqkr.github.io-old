import { DefaultValue, selector } from "recoil";
import { secureTokenAtom, userIdAtom } from "./auth.atom";
import parseJwt from "@common/utils/parse-jwt";

export interface TokenData {
  accessToken: string;
}

export const userIdSelector = selector<string | null>({
  key: "userIdSelector",
  get: ({ get }) => {
    const userId = get(userIdAtom);
    if (userId) return userId;

    const tokenData = get(tokenDataSelector);
    if (!tokenData || !tokenData.accessToken) return null;

    try {
      const result = parseJwt(tokenData.accessToken);

      if (result) {
        return result.user_id;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Failed to decode access token:", error);
      return null;
    }
  },
});

export const tokenDataSelector = selector<TokenData | null>({
  key: "tokenDataSelector",
  get: ({ get }) => {
    try {
      const encryptedData = get(secureTokenAtom);
      if (!encryptedData) return null;

      return JSON.parse(encryptedData);
    } catch (error) {
      console.error("Failed to decrypt token data:", error);
      return null;
    }
  },
  set: ({ set }, newValue: TokenData | DefaultValue | null) => {
    if (newValue instanceof DefaultValue || newValue === null) {
      set(secureTokenAtom, null);
      set(userIdAtom, null);
    } else {
      set(secureTokenAtom, newValue.accessToken);

      try {
        const result = parseJwt(newValue.accessToken);

        if (result) {
          set(userIdAtom, result.user_id);
        }
      } catch (error) {
        console.error("Failed to decode access token:", error);
        set(secureTokenAtom, null);
        set(userIdAtom, null);
      }
    }
  },
});
