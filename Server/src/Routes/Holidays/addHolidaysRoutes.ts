import { Router } from "express";
import pool from "../../Database/db";
import { authMiddleware } from "../../Middlewares/authMiddleware";

const addHolidaysRouter = Router();

addHolidaysRouter.post("/addHolidays", authMiddleware, async (req, res) => {
  const { startDate, endDate } = req.body;
  const userId = req.user?.userid;

  try {
    const client = await pool.connect();

    const result = await client.query("SELECT * FROM users WHERE userid = $1", [
      userId,
    ]);
    const user = result.rows[0];

    if (!user) {
      console.warn("User not found with ID:", userId);
      client.release();
      res.status(404).json({ error: "User not found" });
      return;
    }

    const insertQuery =
      "INSERT INTO holidays (userid, startdate, enddate) VALUES ($1, $2, $3) RETURNING *";
    const insertResult = await client.query(insertQuery, [
      userId,
      startDate,
      endDate,
    ]);

    console.log("Holiday added successfully for user:", userId);
    client.release();

    res.status(201).json({
      message: "Holiday added successfully",
      holiday: insertResult.rows[0],
    });
  } catch (error) {
    console.error("Error adding holiday:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default addHolidaysRouter;
