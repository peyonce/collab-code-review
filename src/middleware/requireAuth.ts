import { Request, Response, NextFunction } from 'express';

export function requireAuth(req: Request, res: Response, next: NextFunction) {
   
  console.log('[middleware.requireAuth] called');
  next();
}
