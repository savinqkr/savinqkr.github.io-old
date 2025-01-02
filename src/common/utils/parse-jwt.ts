export interface IParsedJwt {
  exp: number;
  iat: number;
  email: string;
  sub: string;
  user_id: string;
}

export default function parseJwt(token: string): IParsedJwt | undefined {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join(""),
  );
  const { iat, exp, sub, email, user_id } = JSON.parse(jsonPayload);

  return {
    iat,
    exp,
    sub,
    email,
    user_id,
  };
}
