import 'reflect-metadata';
import { config } from 'dotenv';
import app from './app';
import { connectDatabase } from './database'; // Módulo de conexão com o banco de dados
import swaggerConfig from './swaggerConfig';
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';

config(); // Carrega as variáveis de ambiente
const PORT = process.env.PORT || 3000;

// Configuração do Swagger
const swaggerSpec = swaggerJsDoc(swaggerConfig);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Conecta ao banco de dados e inicia o servidor
connectDatabase()
  .then(() => {
    console.log("Conectado ao banco de dados SQLite com TypeORM");

    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
      console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
    });
  })
  .catch(error => console.log("Erro ao conectar ao banco de dados", error));