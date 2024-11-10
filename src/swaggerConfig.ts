// src/swaggerConfig.ts

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentação Cabala Express",
      version: "1.0.0",
      description: "Documentação da API do projeto Cabala usando Swagger",
    },
    components: {
      schemas: {
        Orixa: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              description: "ID do Orixá",
              example: 1,
            },
            name: {
              type: "string",
              description: "Nome do Orixá",
              example: "Exu",
            },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.ts"], // Caminho para as anotações dos endpoints
};

export default options;