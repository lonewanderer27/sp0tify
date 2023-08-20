import * as middlewares from './middlewares';

import express, { Request, Response } from 'express';

import MessageResponse from './interfaces/MessageResponse';
import api from './api';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get<{}, MessageResponse>('/', (req: Request, res: Response) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

app.use(api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
