import express, { Request, Response } from "express";
import { authMiddleware } from "../Middlewares/authMiddleware";

const getCurrentUserRouter = express.Router();

getCurrentUserRouter.get(
  "/currentUser",
  authMiddleware,
  async (req: Request, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ error: "User not authenticated" });
    }

    const { userid, username, email, role, jobPosition, phone, name } =
      req.user;
    res.json({ userid, username, email, role, jobPosition, phone, name });
  }
);

export default getCurrentUserRouter;
