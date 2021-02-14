import express from "express";
import routes from "../routes";
import {
  users,
  userDetail,
  editProfile,
  changePassword,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.userDetail, users);
userRouter.get(routes.editProfile, users);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;

// app.get("/profile", handleProfile); 같은 router도 저렇게 깔끔하게 변경가능
