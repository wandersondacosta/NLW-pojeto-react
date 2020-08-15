import express from "express";
import classesController from "./controllers/classesController";

const routes = express.Router();
const classesControllers = new classesController();

routes.post("/classes");

export default routes;
