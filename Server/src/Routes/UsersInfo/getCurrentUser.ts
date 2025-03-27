import express, { Request, Response } from "express";
import { authMiddleware } from "../../Middlewares/authMiddleware";

const getCurrentUserRouter = express.Router();

getCurrentUserRouter.get(
  "/currentUser",
  authMiddleware,
  async (req: Request, res: Response) => {
    if (!req.user) {
      res.status(401).json({ error: "User not authenticated" });
      return;
    }

    // if (!req.user) {
    //   return res.status(401).json({ error: "User not authenticated" });
    // }
    // o return tem que estar smepre depois da reposta res porquue nao devolve nada

    const { userid, username, email, role, jobPosition, phone, name } =
      req.user;
    res.json({ userid, username, email, role, jobPosition, phone, name }); // ✅ SEM "return"!
  }
);

export default getCurrentUserRouter;
