"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generateWebToken_1 = require("../Utility/generateWebToken");
const bcrypt_1 = __importDefault(require("bcrypt"));
const express_1 = require("express");
const db_js_1 = __importDefault(require("../Database/db.js"));
const signupRouter = (0, express_1.Router)();
signupRouter.post("/signup", async (req, res) => {
    const { email, password, username, name, phone, role, jobPosition } = req.body;
    console.log("Received data: ", {
        email,
        password,
        username,
        name,
        phone,
        role,
        jobPosition,
    });
    // // Validação do email
    // if (!isValidEmail(email)) {
    //   return res.status(400).json({ error: "Invalid email format" });
    // }
    // Verificando se a senha tem pelo menos 6 caracteres
    if (password.length < 6) {
        return res
            .status(400)
            .json({ error: "Password must be at least 6 characters" });
    }
    // Verificando se todos os campos essenciais foram preenchidos
    if (!email ||
        !password ||
        !username ||
        !name ||
        !phone ||
        !role ||
        !jobPosition) {
        return res.status(400).json({ error: "All fields must be filled" });
    }
    try {
        const client = await db_js_1.default.connect();
        // Verificando se o e-mail ou nome de usuário já existem
        const userCheck = await client.query("SELECT * FROM users WHERE email = $1 OR username = $2", [email, username]);
        if (userCheck.rows.length > 0) {
            client.release();
            return res
                .status(400)
                .json({ error: "E-mail or Username already in use" });
        }
        // Criptografando a senha
        const hashedPassword = await bcrypt_1.default.hash(password, 4);
        // Inserindo o novo usuário no banco de dados
        await client.query("INSERT INTO users (email, password, username, name, phone, role, joBPosition) VALUES ($1, $2, $3, $4, $5, $6, $7)", [email, hashedPassword, username, name, phone, role, jobPosition]);
        // Buscando o usuário recém-criado
        const newUserResult = await client.query("SELECT * FROM users WHERE email = $1", [email]);
        const newUser = newUserResult.rows[0];
        // Gerando o token de autenticação
        const token = (0, generateWebToken_1.generateToken)(newUser.email, newUser.username, newUser.id);
        client.release();
        // Retornando a resposta com sucesso e o token
        res.json({ message: "User created successfully", token });
    }
    catch (error) {
        console.error("Error in the signup", error);
        res.status(500).json({ error: "Error in the server" });
    }
});
exports.default = signupRouter;
