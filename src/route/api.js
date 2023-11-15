import express from "express";
import userController from "../controller/user-controller.js";
import menuController from "../controller/menu-controller.js";
import { authentication } from "../middleware/auth-middleware.js";
import { upload } from "../middleware/upload-middleware.js";

const uploadImage = upload.single('image');

const userRouter = new express.Router();
userRouter.use(authentication)

// User API
userRouter.get('/api/users/current', userController.getUser);
userRouter.delete('/api/users/logout', userController.logout);

// Menu API
userRouter.post('/api/menu', uploadImage, menuController.createMenu);

export {
    userRouter
}
