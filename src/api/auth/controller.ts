import { Request, Response, NextFunction } from "express";
import * as authService from "../auth/service.js";   

export async function registerHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { email, password, display_name } = req.body;
    const result = await authService.register({ email, password, display_name });
    return res.status(201).json({ success: true, data: result });
  } catch (err: any) {
    return next(err);
  }
}

export async function loginHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { email, password } = req.body;
    const result = await authService.login({ email, password });
    return res.status(200).json({ success: true, data: result });
  } catch (err: any) {
    return next(err);
  }
}
