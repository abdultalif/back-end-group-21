import express from "express";
import userController from "../controller/user-controller.js";
import { authentication } from "../middleware/auth-middleware.js";

const userRouter = new express.Router();
userRouter.use(authentication)
userRouter.get('/api/users/current', userController.getUser);
userRouter.post('/api/login', userController.login);

export {
    userRouter
}
