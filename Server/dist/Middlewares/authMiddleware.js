"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMiddleware = (req, res, next) => {
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
        const decoded = jsonwebtoken_1.default.verify(token, secret);
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
    }
    catch (error) {
        const err = error;
        console.warn("Invalid or expired token:", err.message);
        return res.status(401).json({ error: "Invalid or expired token" });
    }
};
exports.authMiddleware = authMiddleware;
