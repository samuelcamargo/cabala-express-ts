import express from "express";
import CabalaController from "../controllers/CabalaControlle";

const routes = express.Router();
routes.get("/cabala", CabalaController.listarOrixas);
routes.get("/cabala/:id", (req, res) => CabalaController.getOrixaNameById(req, res));
routes.post("/cabala", CabalaController.calculaCabala);

export default routes;