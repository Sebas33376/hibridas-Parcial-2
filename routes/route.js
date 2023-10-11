import { Router } from "express"
import * as controller from "../controllers/controller.js"

const route = Router();

route.get("/proyects", controller.getProyects);
route.get("/proyects/agregar", controller.addProyectForm);
route.post("/proyects/agregar", controller.addProyect);
route.get("/proyects/editar/:id", controller.editProyectForm);
route.post("/proyects/editar/:id", controller.editProyect);
route.get("/proyects/eliminar/:id", controller.deletProyectForm);
route.post("/proyects/eliminar/:id", controller.deletProyect);
route.get("/proyects/:id", controller.getProyectById);


export default route