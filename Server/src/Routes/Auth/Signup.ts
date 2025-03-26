import { generateToken } from "../../Utility/generateWebToken";
import bcrypt from "bcrypt";
import { Router } from "express";
import pool from "../../Database/db.js";
import { isValidEmail } from "../../Utility/emailValidation";

const signupRouter = Router();

signupRouter.post("/signup", async (req, res) => {
  const { userid, email, password, username, name, phone, role, jobPosition } =
    req.body;
  console.log("Received data: ", {
    userid,
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

  if (password.length < 6) {
    return res
      .status(400)
      .json({ error: "Password must be at least 6 characters" });
  }

  if (
    !userid ||
    !email ||
    !password ||
    !username ||
    !name ||
    !phone ||
    !role ||
    !jobPosition
  ) {
    return res.status(400).json({ error: "All fields must be filled" });
  }

  try {
    const client = await pool.connect();

    const userCheck = await client.query(
      "SELECT * FROM users WHERE email = $1 OR username = $2",
      [email, username]
    );

    if (userCheck.rows.length > 0) {
      client.release();
      return res
        .status(400)
        .json({ error: "E-mail or Username already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 4);

    await client.query(
      "INSERT INTO users (email, password, username, name, phone, role, jobPosition) VALUES ($1, $2, $3, $4, $5, $6, $7)",
      [email, hashedPassword, username, name, phone, role, jobPosition]
    );

    const newUserResult = await client.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );
    const newUser = newUserResult.rows[0];
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
