// // src/middlewares/auth.middleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { secretKey } from '../utils/jwt';

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Token não fornecido' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded: any = jwt.verify(token, secretKey);

    req.user = {
      id: decoded.id,
      email: decoded.email,
    };

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token inválido' });
  }
}
