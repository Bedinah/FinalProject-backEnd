import { Router } from "express";
import UserController from "../controllers/userController";



const route=Router();
route.post("/user/login",UserController.loginUserController);
route.post("/user/create",UserController.registerUser);
route.get("/user/getAll",UserController.getAll);
route.get("/user/getOne/:id",UserController.getOneUser);
route.delete("/user/:id",UserController.deleteUser);

export default route;