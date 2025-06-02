import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';

export class AuthController {
  static async register(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const user = await AuthService.register(email, password);
      return res.status(201).json(user);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  static async login(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const token = await AuthService.login(email, password);
      return res.json({ token });
    } catch (error: any) {
      return res.status(401).json({ message: error.message });
    }
  }
}
