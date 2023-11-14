import express from "express";
import userController from "../controller/user-controller.js";
import menuController from "../controller/menu-controller.js";
import { authentication } from "../middleware/auth-middleware.js";

// User API
const userRouter = new express.Router();
userRouter.use(authentication)
userRouter.get('/api/users/current', userController.getUser);
userRouter.delete('/api/users/logout', userController.logout);

// Menu API
userRouter.post('/api/menus', menuController.createMenu);

export {
    userRouter
}
