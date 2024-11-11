import "reflect-metadata";
import 'dotenv/config';
import app from './app';
import { createConnection } from "typeorm";
import swaggerConfig from "./swaggerConfig";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

const PORT = process.env.PORT || 3000;

// Configuração do Swagger
const swaggerSpec = swaggerJsDoc(swaggerConfig);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Conecte ao banco de dados com o TypeORM
createConnection().then(() => {
  console.log("Conectado ao banco de dados SQLite com TypeORM");
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
  });
}).catch(error => console.log("Erro ao conectar ao banco de dados", error));