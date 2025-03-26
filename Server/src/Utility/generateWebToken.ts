import jwt, { SignOptions } from "jsonwebtoken";
import { TokenPayload } from "../Models/Interfaces";

export const generateToken = (
  email: string,
  username: string,
  userid: number,
  role: string,
  jobPosition: string,
  phone: string,
  name: string
): string | null => {
  const payload: TokenPayload = {
    email,
    username,
    userid,
    role,
    jobPosition,
    phone,
    name,
  };

  const secretKey = process.env.JWT_SECRET;
  if (!secretKey) {
    console.error("JWT_SECRET is not defined in environment variables.");
    return null;
  }

  const signOptions: SignOptions = {
    expiresIn: process.env.JWT_EXPIRES_IN
      ? parseInt(process.env.JWT_EXPIRES_IN)
      : 36000,
  };

  const token = jwt.sign(payload, secretKey, signOptions);

  return token;
};
