import { Router } from "express"
import * as controller from "../controllers/controller.js"

const route = Router();

route.get("/proyects", controller.getProyects);
route.get("/proyects/:id", controller.getProyectById);
route.post("/proyects", controller.addProyect);
route.put("/proyects/:id", controller.replaceProyect);
route.patch("/proyects/:id", controller.editProyect);
route.delete("/proyects/:id", controller.deletProyect);


export default route