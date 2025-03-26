"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../Database/db"));
const express_1 = require("express");
const usersInfoRouter = (0, express_1.Router)();
usersInfoRouter.get("/usersInfo", async (req, res) => {
    try {
        const client = await db_1.default.connect();
        const result = await client.query("SELECT userid, name, email, username, jobPosition, role, phone FROM users");
        client.release();
        res.json(result.rows);
    }
    catch (error) {
        console.error("Error fetching user info:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.default = usersInfoRouter;
