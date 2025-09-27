import dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import { authRouter } from './api/auth/routes.js';
import { requireAuth } from './middleware/errorMiddleware.js';
import { fileURLToPath } from 'url';


dotenv.config();
 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

console.log("__filename:", __filename);
console.log("__dirname:", __dirname);

app.use('/api/auth', authRouter);
app.get('/api/me', requireAuth, (req: Request, res: Response) => {
  const user = (req as any).user;
  res.json({ user });
});

 
const distPath = path.join(__dirname, '../dist');
app.use(express.static(distPath));

app.get('*', (req: Request, res: Response, next: NextFunction) => {
  if (req.path.startsWith('/api')) return next();
  res.sendFile(path.join(distPath, 'index.html'));
});

 
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error('Error:', err);
  const status = err.statusCode ?? 500;
  const message = err.message ?? 'Internal server error';
  res.status(status).json({ error: message });
});

 
const port = process.env.PORT ?? '4000';
app.listen(Number(port), () => {
  console.log(`Server listening on port ${port}`);
});
