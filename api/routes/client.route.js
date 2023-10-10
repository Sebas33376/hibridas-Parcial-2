import { Router } from "express"
import * as controller from "../controllers/client.controller.js"

const clientRoute = Router();

clientRoute.get("/client", controller.getClients);
clientRoute.post("/client", controller.createClient);


export default clientRoute