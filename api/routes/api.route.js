import { Router } from "express"
import * as controller from "../controllers/controller.js"

const apiRoute = Router();

apiRoute.get("/proyects", controller.getProyects);
apiRoute.get("/proyects/:id", controller.getProyectById);
apiRoute.post("/proyects", controller.addProyect);
apiRoute.put("/proyects/:id", controller.replaceProyect);
apiRoute.patch("/proyects/:id", controller.editProyect);
apiRoute.delete("/proyects/:id", controller.deletProyect);


export default apiRoute