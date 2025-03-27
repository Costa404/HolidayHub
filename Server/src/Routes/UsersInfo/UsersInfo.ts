import { Router } from "express";
import pool from "../../Database/db";

const usersInfoRouter = Router();

usersInfoRouter.get("/usersInfo", async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query(
      "SELECT userid, name, email, username, jobPosition, role, phone FROM users"
    );

    client.release();

    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching user info:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default usersInfoRouter;
