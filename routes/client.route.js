import { Router } from "express"
import * as controller from "../controllers/clients.controller.js"

const route = Router();

route.get("/client", controller.getClients);
route.get("/client/agregar", controller.addClientForm);
route.post("/client/agregar", controller.addClient);
route.get("/client/editar/:id", controller.editClientForm);
route.post("/client/editar/:id", controller.editClient);
route.get("/client/eliminar/:id", controller.deleteClientForm);
route.post("/client/eliminar/:id", controller.deleteClient);
route.get("/client/:id", controller.getClientById);


export default route