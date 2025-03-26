import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    console.warn("Access denied: Missing token");
    return res.status(401).json({ error: "Access denied, token missing" });
  }

  const secret = process.env.JWT_SECRET;

  if (!secret) {
    console.error("Critical error: JWT_SECRET is not defined!");
    return res.status(500).json({ error: "Internal server error" });
  }

  try {
    const decoded = jwt.verify(token, secret) as {
      userid: number;
      username: string;
      email: string;
      role: string;
      jobPosition: string;
      phone: string;
      name: string;
    };
    console.log("Decoded token:", decoded);

    req.user = {
      userid: decoded.userid,
      username: decoded.username,
      email: decoded.email,
      role: decoded.role,
      jobPosition: decoded.jobPosition,
      phone: decoded.phone,
      name: decoded.name,
    };

    console.log("Token verified successfully:", req.user);
    next();
  } catch (error) {
    const err = error as Error;
    console.warn("Invalid or expired token:", err.message);
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};
