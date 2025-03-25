import { Router } from "express";
import loginRouter from "./../Auth/Login";
import signupRouter from "./../Auth/Signup";
import usersInfoRouter from "../UsersInfo/UsersInfo";
import getCurrentUserRouter from "./getCurrentUser";

const apiRouter = Router();

// auth
apiRouter.use("/", loginRouter);
apiRouter.use("/", signupRouter);
apiRouter.use("/", usersInfoRouter);
apiRouter.use("/", getCurrentUserRouter);

export default apiRouter;
