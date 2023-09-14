import { getEnvVariable } from "./helpers";
import { SignJWT, jwtVerify, JWTPayload } from "jose";

interface Payload extends JWTPayload {
  sub: string;
}

interface Options {
  exp: string;
}

export const signJWT = async (payload: Payload, options: Options) => {
  try {
    const secret = new TextEncoder().encode(getEnvVariable("JWT_SECRET_KEY"));
    const alg = "HS256";
    return new SignJWT(payload)
      .setProtectedHeader({ alg })
      .setExpirationTime(options.exp)
      .setIssuedAt()
      .setSubject(payload.sub)
      .sign(secret);
  } catch (error) {
    throw error;
  }
};

export const verifyJWT = async <T>(token: string): Promise<T> => {
  try {
    const secret = new TextEncoder().encode(getEnvVariable("JWT_SECRET_KEY"));
    return (await jwtVerify(token, secret)).payload as T;
  } catch (error) {
    console.error(error);
    throw new Error("Token verification failed.");
  }
};
