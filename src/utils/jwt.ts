// src/utils/jwt.ts
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const SECRET = process.env.JWT_SECRET!;
const EXPIRES_IN = '1d';  // você pode ajustar para '2h', '7d', etc.

/**
 * Gera um token JWT para o payload passado.
 * @param payload Objeto com os dados que deseja codificar (ex: user id, email).
 * @returns token JWT assinado.
 */
export function generateToken(payload: object): string {
  return jwt.sign(payload, SECRET, { expiresIn: EXPIRES_IN });
}

/**
 * Verifica e decodifica um token JWT.
 * @param token Token JWT (string) recebido na requisição.
 * @returns payload decodificado, ou lança erro se inválido/expirado.
 */
export function verifyToken(token: string): any {
  return jwt.verify(token, SECRET);
}
export const secretKey = SECRET;
