import express from "express";
import route from "../routes/route.js";
import clientRoute from "../routes/client.route.js";
import proyectClientRoute from "../routes/proyectsClient.route.js";
import apiRoute from "../api/routes/api.route.js";
import apiClientRoute from "../api/routes/api.client.route.js";
import apiProyectsClientRoute from "../api/routes/api.proyectsClients.route.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/", express.static("public"));

app.use(route);
app.use(clientRoute);
app.use(proyectClientRoute);
app.use("/api", apiRoute);
app.use("/api", apiClientRoute);
app.use("/api", apiProyectsClientRoute);

app.listen(3333);