"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Login_1 = __importDefault(require("./../Auth/Login"));
const Signup_1 = __importDefault(require("./../Auth/Signup"));
const UsersInfo_1 = __importDefault(require("../UsersInfo/UsersInfo"));
const getCurrentUser_1 = __importDefault(require("./getCurrentUser"));
const apiRouter = (0, express_1.Router)();
// auth
apiRouter.use("/", Login_1.default);
apiRouter.use("/", Signup_1.default);
apiRouter.use("/", UsersInfo_1.default);
apiRouter.use("/", getCurrentUser_1.default);
exports.default = apiRouter;
