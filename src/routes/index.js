import { Router } from "express";
import UserController from "../controllers/userController";
import homeController from "../controllers/homepagesController";
import lessonsController from "../controllers/lessonsController";
import nutritionController from "../controllers/nutritionController";
import Validator from "../middlewares/validator";
import Datacheker from "../middlewares/Datacheker";
import Verifyacess from "../middlewares/verifyacess";
import Verifytoken from "../middlewares/verifytoken";

const route = Router();

route.post("/user/login", UserController.loginUserController);

route.post( "/user/create",

  Validator.newAccountRules(),
  Validator.validateInput,
  Datacheker.validateEmailDuplication,
  UserController.registerUser
);

route.post("/homepage/create", homeController.createHome);
route.post("/nutrition/create", nutritionController.createNutrition);
route.patch("/home/:id", homeController.updateHome);

route.post("/nutrition/:id", nutritionController.updateNutrition);


route.post("/lessons/create", lessonsController.LessonsCreate);

route.patch("/homepage/update", homeController.updateHome);
route.patch("/lesson/update/:id", lessonsController.updateLessons);



route.get("/user/getAll", UserController.getAll);
route.get("/nutrition/getAll", nutritionController.getAll);
route.get("/lesson/getAll", lessonsController.getAll);
route.get("/home/getAll", homeController.getAll);

route.get("/home/:id", homeController.getOnehomepage);

route.delete("/home/:id", homeController.deleteHomepage);

route.get("/user/getOne/:id", UserController.getOneUser);
route.get("/Lessons/getOne/:id", lessonsController.getOnelessons);

route.delete(
  "/user/:id",
  Validator.checkId(),
  Validator.validateInput,
  UserController
);


export default route;

