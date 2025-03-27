import { generateToken } from "../../Utility/generateWebToken";
import bcrypt from "bcrypt";
import { Router } from "express";
import pool from "../../Database/db.js";
import { isValidEmail } from "../../Utility/emailValidation";

const signupRouter = Router();

signupRouter.post("/signup", async (req, res) => {
  const { email, password, username, name, phone, role, jobPosition } =
    req.body;
  console.log("Received data: ", {
    email,
    password,
    username,
    name,
    phone,
    role,
    jobPosition,
  });

  if (password.length < 6) {
    res.status(400).json({ error: "Password must be at least 6 characters" });
    return;
  }

  if (
    !email ||
    !password ||
    !username ||
    !name ||
    !phone ||
    !role ||
    !jobPosition
  ) {
    res.status(400).json({ error: "All fields must be filled" });
    return;
  }

  try {
    const client = await pool.connect();

    const userCheck = await client.query(
      "SELECT * FROM users WHERE email = $1 OR username = $2",
      [email, username]
    );

    if (userCheck.rows.length > 0) {
      client.release();
      res.status(400).json({ error: "E-mail or Username already in use" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 4);

    const result = await client.query(
      "INSERT INTO users (email, password, username, name, phone, role, jobposition) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING userid, email, username, role, jobposition, phone, name",
      [email, hashedPassword, username, name, phone, role, jobPosition]
    );

    const newUser = result.rows[0];
    const token = generateToken(
      newUser.email,
      newUser.username,
      newUser.userid,
      newUser.role,
      newUser.jobposition,
      newUser.phone,
      newUser.name
    );

    client.release();

    res.json({ message: "User created successfully", token });
  } catch (error) {
    console.error("Error in the signup", error);
    res.status(500).json({ error: "Error in the server" });
  }
});

export default signupRouter;
