"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generateWebToken_1 = require("../Utility/generateWebToken");
const db_1 = __importDefault(require("../Database/db"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const express_1 = require("express");
const loginRouter = (0, express_1.Router)();
loginRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const client = await db_1.default.connect();
        const result = await client.query("SELECT * FROM users WHERE email = $1", [
            email,
        ]);
        const user = result.rows[0];
        if (!user || !(await bcrypt_1.default.compare(password, user.password))) {
            console.warn("Invalid login attempt for email:", email);
            client.release();
            return res.status(401).json({ error: "Invalid credentials" });
        }
        const token = (0, generateWebToken_1.generateToken)(user.email, user.username, user.id);
        console.log("User logged in successfully:", user.email);
        client.release();
        res.json({ token });
    }
    catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.default = loginRouter;
