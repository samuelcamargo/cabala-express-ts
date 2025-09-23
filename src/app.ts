import express from 'express';
import routes from './routes/index';

const app = express();

// Configuração das rotas da aplicação
routes(app);

export default app;