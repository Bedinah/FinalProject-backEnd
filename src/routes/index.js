import { Router } from "express";
import UserController from "../controllers/userController";
import Validator from"../middlewares/validator";
import Datacheker  from "../middlewares/Datacheker";
import Verifyacess from "../middlewares/verifyacess";
import Verifytoken from "../middlewares/verifytoken";



const route=Router();

route.post("/user/login",UserController.loginUserController);

route.post("/user/create",

Validator.newAccountRules(),
Validator.validateInput,
Datacheker.validateEmailDuplication,
UserController.registerUser);

route.get("/user/getAll",UserController.getAll);

route.get("/user/getOne/:id",UserController.getOneUser);
route.delete("/user/:id" ,Validator.checkId(), Validator.validateInput,UserController);;

export default route;