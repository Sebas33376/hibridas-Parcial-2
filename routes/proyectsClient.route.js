import { Router } from "express"
import * as controller from "../controllers/proyectsClients.controller.js"

const proyectsClientRoute = Router();

proyectsClientRoute.get("/client/:id/proyectsClient", controller.getProyectsByClient);

export default proyectsClientRoute