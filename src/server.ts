import 'dotenv/config';
import app from './app';
import swaggerConfig from "./swaggerConfig";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

const PORT = process.env.PORT || 3000;

// Configuração do Swagger
const swaggerSpec = swaggerJsDoc(swaggerConfig);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});