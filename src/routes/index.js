import { Router } from "express";
import UserController from "../controllers/userController";
import Validator from"../middlewares/validator";
import Datacheker  from "../middlewares/Datacheker";
import verifyacess from "../middlewares/verifyacess";
import verifytoken from "../middlewares/verifytoken";

const route=Router();
route.post("/user/login",UserController.loginUserController);
route.post("/user/create",UserController.registerUser);
route.get("/user/getAll",UserController.getAll);
route.get("/user/getOne/:id",UserController.getOneUser);
route.delete("/user/:id",UserController.deleteUser);

export default route;