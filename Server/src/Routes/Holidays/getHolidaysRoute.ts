import { Router } from "express";
import pool from "../../Database/db";
import { authMiddleware } from "../../Middlewares/authMiddleware";

const getHolidaysRouter = Router();

getHolidaysRouter.get("/getHolidays", authMiddleware, async (req, res) => {
  const userId = req.user?.userid;
  try {
    const client = await pool.connect();

    const result = await client.query(
      `SELECT startdate AS "startDate", enddate AS "endDate", * FROM holidays WHERE userid = $1 ORDER BY startdate DESC`,
      [userId]
    );

    if (result.rows.length === 0) {
      console.warn("No holidays found for user:", userId);
      client.release();
      res.status(404).json({ error: "No holidays found for this user" });
      return;
    }

    console.log("Fetched holidays for user:", userId);
    client.release();

    res.status(200).json({ holidays: result.rows });
  } catch (error) {
    console.error("Error fetching holidays:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default getHolidaysRouter;
