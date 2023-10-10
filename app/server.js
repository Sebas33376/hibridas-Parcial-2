import express from "express";
import route from "../api/routes/route.js";
import clientRoute from "../api/routes/client.route.js";
import proyectsClientRoute from "../api/routes/proyectsClients.route.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api", route)
app.use("/api", clientRoute)
app.use("/api", proyectsClientRoute)

app.listen(3333)