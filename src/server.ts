import dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import authRoutes from './api/auth/routes.js';
import projectsRoutes from './api/projects/routes.js';
import submissionsRoutes from './submmissions/routes.js'
import commentsRoutes from './comments/routes.js';

import { requireAuth } from './middleware/requireAuth.js';
import errorHandler from './middleware/errorMiddleware.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// Logging (helpful for debugging)
console.log("__filename:", __filename);
console.log("__dirname:", __dirname);

// 1. API routes — before static / fallback
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/submissions', submissionsRoutes);
app.use('/api/comments', commentsRoutes);

app.get('/api/me', requireAuth, (req: Request, res: Response) => {
  const user = (req as any).user;
  res.json({ user });
});

// 2. Serve static frontend files (build output)
const distPath = path.join(__dirname, '../dist');
app.use(express.static(distPath));

// 3. Fallback for client-side routing (SPA)
//    Only handle routes *not* starting with /api
app.get('*', (req: Request, res: Response, next: NextFunction) => {
  if (req.path.startsWith('/api')) {
    // Let API routes (or 404) handle this
    return next();
  }

  // For all others, send index.html (so the frontend router can take over)
  res.sendFile(path.join(distPath, 'index.html'), err => {
    if (err) {
      // If there’s an error sending file (e.g. file not found), delegate to error handler
      next(err);
    }
  });
});

// 4. Error handling (this should be last)
app.use(errorHandler);

const port = process.env.PORT ?? '4000';
app.listen(Number(port), () => {
  console.log(`Server listening on port ${port}`);
});
