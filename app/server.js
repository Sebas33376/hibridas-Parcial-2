import express from "express";
import route from "../api/routes/route.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api", route)

app.listen(3333)