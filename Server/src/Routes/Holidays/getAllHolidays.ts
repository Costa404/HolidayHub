import { Router } from "express";
import pool from "../../Database/db";

const getAllHolidaysRouter = Router();

getAllHolidaysRouter.get("/getAllHolidays", async (req, res) => {
  try {
    const client = await pool.connect();

    const result = await client.query(
      `SELECT u.username, h.id, h.startdate AS "startDate", h.enddate AS "endDate", h.* 
       FROM holidays h
       JOIN users u ON h.userid = u.userid
       ORDER BY h.startdate DESC`
    );

    if (result.rows.length === 0) {
      console.warn("No holidays found for any user");
      client.release();
      res.status(404).json({ error: "No holidays found for any user" });
      return;
    }

    console.log("Fetched holidays for all users");
    client.release();

    res.status(200).json({ holidays: result.rows });
  } catch (error) {
    console.error("Error fetching all holidays:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default getAllHolidaysRouter;
