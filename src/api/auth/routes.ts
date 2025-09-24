import { Router } from "express";
import { registerUser, loginUser } from '../auth/contoller';

export const authRouter = Router();

authRouter.post('/register', registerUser)
authRouter.post('/login', loginUser)