import dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

 
import authRoutes from './api/auth/routes.js';
import projectsRoutes from './api/projects/routes.js';
import submissionsRoutes from './submmissions/routes.js';
import commentsRoutes from './comments/routes.js';


import { requireAuth } from './middleware/requireAuth.js';
import  errorHandler  from './middleware/errorMiddleware.js';

dotenv.config();

 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());


console.log("__filename:", __filename);
console.log("__dirname:", __dirname);


app.use('/api/auth', authRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/submissions', submissionsRoutes);
app.use('/api/comments', commentsRoutes);

 
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


app.use(errorHandler);

 
const port = process.env.PORT ?? '4000';
app.listen(Number(port), () => {
  console.log(`Server listening on port ${port}`);
});
