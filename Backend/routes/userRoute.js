import express from "express"
import { loginUser, registerUser, logoutuser } from "../controllers/userController.js"


const userRouter= express.Router();

userRouter.post("/register",registerUser);
userRouter.post("/login",loginUser);
userRouter.post("/logout",logoutuser)

export default userRouter;