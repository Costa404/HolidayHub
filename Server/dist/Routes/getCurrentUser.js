"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = require("../Middlewares/authMiddleware");
const getCurrentUserRouter = express_1.default.Router();
getCurrentUserRouter.get("/currentUser", authMiddleware_1.authMiddleware, async (req, res) => {
    if (!req.user) {
        return res.status(401).json({ error: "User not authenticated" });
    }
    const { userid, username, email, role, jobPosition, phone, name } = req.user;
    res.json({ userid, username, email, role, jobPosition, phone, name });
});
exports.default = getCurrentUserRouter;
