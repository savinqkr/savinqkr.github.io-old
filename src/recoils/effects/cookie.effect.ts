import { AtomEffect, DefaultValue } from "recoil";
import Cookies from "js-cookie";

export function cookieEffect<T>(key: string): AtomEffect<T> {
  return ({ setSelf, onSet }) => {
    const savedValue = Cookies.get(key);
    if (!!savedValue && savedValue !== null) {
      try {
        setSelf(JSON.parse(savedValue));
      } catch (error) {
        console.error(`Error parsing cookie ${key}:`, error);
      }
    } else {
      setSelf(new DefaultValue());
    }

    onSet((newValue, _, isReset) => {
      if (isReset || newValue === null || newValue instanceof DefaultValue) {
        Cookies.remove(key);
      } else {
        Cookies.set(key, JSON.stringify(newValue), {
          secure: true,
          sameSite: "strict",
          // 1년
          expires: 31619000,
        });
      }
    });
  };
}
