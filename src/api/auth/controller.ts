import { Request, Response, NextFunction } from 'express';
import * as authService from '../auth/service.js';

export async function registerHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { name, email, password } = req.body;

    if (!email || !password || !name) {
      return res
        .status(400)
        .json({ success: false, error: 'name, email, and password are required' });
    }

    const result = await authService.register({ name, email, password });

    return res.status(201).json({
      success: true,
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
}

export async function loginHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, error: 'email and password are required' });
    }

    const result = await authService.login({ email, password });

    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
}
