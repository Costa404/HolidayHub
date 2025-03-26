"use strict";
// import { Request, Response, NextFunction } from "express";
// import jwt from "jsonwebtoken";
// const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key";
// // Middleware para verificar o token
// export const verifyToken = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const token = req.headers.authorization?.split(" ")[1];
//   // Verificando se o token foi fornecido
//   if (!token) {
//     console.warn("No token provided");
//     return res.status(401).json({ error: "Access denied, no token provided" });
//   }
//   console.log("Token received:", token);
//   try {
//     // Decodificando o token
//     const decoded = jwt.verify(token, SECRET_KEY) as {
//       userid: number;
//       username: string;
//       email: string;
//       role: string;
//       jobPosition: string;
//       phone: string;
//       name: string;
//     };
//     // Verificando o payload decodificado
//     console.log("Decoded token:", decoded);
//     // Atribuindo os dados do usuário ao objeto `req.user`
//     req.user = decoded;
//     console.log("User information assigned to req.user:", req.user);
//     next();
//   } catch (error) {
//     console.error("Token verification failed:", error);
//     return res.status(403).json({ error: "Invalid token" });
//   }
// };
