import express from "express";
import route from "../routes/route.js";
import apiRoute from "../api/routes/api.route.js";
import apiRouteAuth from "../api/routes/api.route.auth.js"
import cors from "cors"

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use(route);
app.use("/api", apiRoute);
app.use("/api", apiRouteAuth);


app.listen(2023);