import { Router } from "express"
import * as controller from "../controllers/client.controller.js"

const apiClientRoute = Router();

apiClientRoute.get("/client", controller.getClients);
apiClientRoute.get("/client/:id", controller.getClientById);
apiClientRoute.post("/client", controller.createClient);
apiClientRoute.patch("/client/:id", controller.editClient);
apiClientRoute.delete("/client/:id", controller.deletClient);


export default apiClientRoute