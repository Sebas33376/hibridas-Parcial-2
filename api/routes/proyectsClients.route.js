import { Router } from "express"
import * as controller from "../controllers/proyectsClients.controller.js"

const proyectsClientRoute = Router();

proyectsClientRoute.get("/client/proyectsClient", controller.getProyectsByClient);
// proyectsClientRoute.post("/client", controller.createClient);
// proyectsClientRoute.patch("/client/proyects", controller.getClientProyects);


export default proyectsClientRoute