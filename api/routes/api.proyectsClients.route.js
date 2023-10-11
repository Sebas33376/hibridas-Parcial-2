import { Router } from "express"
import * as controller from "../controllers/proyectsClients.controller.js"

const apiProyectsClientRoute = Router();

apiProyectsClientRoute.get("/client/:id/proyectsClient", controller.getProyectsByClient);

export default apiProyectsClientRoute