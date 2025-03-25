import { User } from "./../Models/User";

declare global {
  namespace Express {
    interface Request {
      user?: Pick<
        User,
        | "userid"
        | "username"
        | "email"
        | "role"
        | "jobPosition"
        | "phone"
        | "name"
      >;
    }
  }
}
