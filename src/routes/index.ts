import express, { Request, Response } from "express";
import { Express } from "express-serve-static-core";
import cabala from "./CabalaRoutes";


const routes = (app: Express) => {
  app.route("/").get((req: Request, res: Response) => {
    res.status(200).json("tudo ok");
  });
  app.use(express.json(), cabala);
}
export default routes;