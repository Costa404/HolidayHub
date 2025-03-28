import { Router, Request, Response } from "express";
import { authMiddleware } from "../../Middlewares/authMiddleware";
import pool from "../../Database/db";

const deleteUserRouter = Router();

deleteUserRouter.delete(
  "/deleteUser/:userId",
  authMiddleware,
  async (req: Request, res: Response) => {
    const { userId } = req.params;

    const client = await pool.connect();

    try {
      await client.query("DELETE FROM holidays WHERE userid = $1", [userId]);

      const result = await client.query("DELETE FROM users WHERE userid = $1", [
        userId,
      ]);

      if (result.rowCount === 0) {
        res.status(404).json({ message: "User not found" });
        return;
      }

      client.release();

      res.json({ message: "User deleted successfully!" });
    } catch (error) {
      console.error("Error deleting user:", error);
      client.release();
      res.status(500).json({ message: "Server error" });
    }
  }
);

export default deleteUserRouter;
