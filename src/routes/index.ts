import { Application, Request, Response } from 'express';

const routes = (app: Application): void => {
  app.route("/").get((req: Request, res: Response) => {
    res.status(200).send("projeto node 30d - d3");
  });
};

export default routes;