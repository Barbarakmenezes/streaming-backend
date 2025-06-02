import User from '../models/user.model';
import { generateToken } from '../utils/jwt';

export class AuthService {
  static async register(email: string, password: string) {
    const exists = await User.findOne({ where: { email } });
    if (exists) throw new Error('Email já registrado');

    const user = await User.create({ email, password });
    return user;
  }

  static async login(email: string, password: string) {
    const user = await User.findOne({ where: { email } });
    if (!user || !(await user.validatePassword(password))) {
      throw new Error('Credenciais inválidas');
    }

    const token = generateToken({ id: user.id, email: user.email });
    return token;
  }
}
