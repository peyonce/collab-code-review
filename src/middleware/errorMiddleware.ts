import { Request, Response, NextFunction } from 'express';

export function errorMiddleware(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(err);

  const status = err.status ||  500;
  const message = err.message || 'Internal Server Error';

  res.status(status).json({
     success: false,
     status,
     message,
  });
};
