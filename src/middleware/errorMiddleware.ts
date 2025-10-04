import { Request, Response, NextFunction } from "express";
import { supabase } from "../api/auth/supabaseClient.js";

export default async function requireAuth(
  
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return res.status(401).json({ error: "Missing Authorization header" });
    }

    const [scheme, token] = authHeader.split(" ");
    if (scheme !== "Bearer" || !token) {
      return res.status(401).json({ error: "Invalid authorization header format" });
    }

    const { data, error } = await supabase.auth.getUser(token);
    if (error || !data.user) {
      return res.status(401).json({ error: "Invalid token or user not found" });
    }

    (req as any).user = data.user;
    next();
  } catch (err: any) {
    console.error("[requireAuth] Error:", err);
     
    next(err);
  }
}
