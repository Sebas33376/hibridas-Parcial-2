import { Router } from "express";
import * as controllers from "../controllers/controller.api.auth.js"
import { validateAccount } from "../../middleware/auth.validate.js";

const route = Router()

route.post("/auth",[validateAccount],controllers.addAccount)

route.post("/auth/login",[validateAccount],controllers.login)

export default route