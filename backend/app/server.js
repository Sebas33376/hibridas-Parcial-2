import express from "express";
import route from "../routes/route.js";
import apiRoute from "../api/routes/api.route.js";


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/", express.static("public"));

app.use(route);
app.use("/api", apiRoute);


app.listen(2023);