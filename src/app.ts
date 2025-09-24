import express, { Application, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { errorMiddleware } from './middleware/errorMiddleware';

export const app: Application = express();
  
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

 
app.get('/api/health', (_req, res: Response) => {
  res.json({ status: 'OK', message: 'Server is running' });
});


app.use(errorMiddleware);


app.use((_req, res) => {
  res.status(404).json({ error: 'Not Found' });
});
