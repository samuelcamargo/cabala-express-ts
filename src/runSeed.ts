import "reflect-metadata";
import { createConnection } from "typeorm";
import { orixasSeed } from "./seeds/orixasSeed";

createConnection()
  .then(async connection => {
    await orixasSeed();
    await connection.close();
    console.log("Seeds executadas com sucesso!");
  })
  .catch(error => console.log(error));