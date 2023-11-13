import { Router } from "express";
import * as controller from "../controllers/controller.js";
import * as middleware from "../../middleware/teams.validate.js";

const apiRoute = Router();

apiRoute.get("/teams", controller.getTeams);
apiRoute.get("/teams/:id", controller.getTeamById);
apiRoute.post("/teams", middleware.validateTeam , controller.addTeam);
apiRoute.put("/teams/:id", controller.replaceTeam);
apiRoute.patch("/teams/:id", middleware.validateTeamPatch , controller.editTeam);
apiRoute.delete("/teams/:id", controller.deletTeam);


export default apiRoute