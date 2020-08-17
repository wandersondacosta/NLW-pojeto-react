import express from "express";
import classesController from "./controllers/classesController";
import ConnectionController from "./controllers/connectionController";

const routes = express.Router();
const classesControllers = new classesController();
const connectionsController = new ConnectionController();

routes.get("/classes", classesControllers.index);
routes.post("/classes", classesControllers.create);

routes.get("/connections", connectionsController.index);
routes.post("/connections", connectionsController.create);

export default routes;
