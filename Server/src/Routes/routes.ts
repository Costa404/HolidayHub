import { Router } from "express";
import loginRouter from "./Auth/Login";
import signupRouter from "./Auth/Signup";

import usersInfoRouter from "./UsersInfo/UsersInfo";
import deleteUserRouter from "./UsersInfo/deleteUser";
import getCurrentUserRouter from "./UsersInfo/getCurrentUser";
import getHolidaysRouter from "./Holidays/getHolidaysRoute";
import addHolidaysRouter from "./Holidays/addHolidaysRoutes";
import getAllHolidaysRouter from "./Holidays/getAllHolidays";

const apiRouter = Router();

// auth
apiRouter.use("/", loginRouter);
apiRouter.use("/", signupRouter);
apiRouter.use("/", usersInfoRouter);
apiRouter.use("/", getCurrentUserRouter);
apiRouter.use("/", deleteUserRouter);
apiRouter.use("/", getHolidaysRouter);
apiRouter.use("/", addHolidaysRouter);
apiRouter.use("/", getAllHolidaysRouter);

export default apiRouter;
