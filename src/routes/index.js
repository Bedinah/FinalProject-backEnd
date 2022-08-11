import { Router } from "express";
import UserController from "../controllers/userController";
const route=Router();
route.post("/user/login",UserController.loginUserController);
route.post("/user/create",UserController.registerUser);
route.get("/user/getAll",UserController.getAll);
route.delete("/user/:id",UserController.deleteUser);
route.patch("/user/:id",UserController.updateUser);
export default route;