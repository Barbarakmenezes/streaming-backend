import { Request, Response } from 'express';
import { UserService } from '../services/user.service';
import jwt from 'jsonwebtoken';
import { secretKey } from '../utils/jwt'; 

const userService = new UserService();

export const UserController = {
  async createUser(req: Request, res: Response) {
    try {
      const user = await userService.createUser(req.body);
      res.status(201).json(user);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  async listUsers(req: Request, res: Response) {
    try {
      const users = await userService.listUsers();
      res.status(200).json(users);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  async getUser(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const user = await userService.getUserById(id);
    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

    res.json(user);
  },




async updateUser(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const updateData = req.body;


  if (req.file) {
    const filePath = `/uploads/users/${req.file.filename}`;
    updateData.profilePictureUrl = filePath;
  }

  try {
    const updatedUser = await userService.updateUser(id, updateData);
    if (!updatedUser) return res.status(404).json({ message: 'Usuário não encontrado' });

    res.json(updatedUser);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
},



  async deleteUser(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const deleted = await userService.deleteUser(id);
    if (!deleted) return res.status(404).json({ message: 'Usuário não encontrado' });

    res.status(204).send();
  },

   uploadPhoto: (req: Request, res: Response) => {
    if (!req.file) {
      return res.status(400).json({ error: 'Nenhum arquivo enviado.' });
    }

    const filePath = `/uploads/${req.file.filename}`;
    return res.status(200).json({ message: 'Foto enviada com sucesso.', path: filePath });
  },




  async me(req: Request, res: Response) {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ message: 'Token não fornecido.' });

  const token = authHeader.split(' ')[1];

  try {
    const decoded: any = jwt.verify(token, secretKey);
    const user = await userService.getUserById(decoded.id);

    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

    res.json(user);
  } catch (err) {
    res.status(401).json({ message: 'Token inválido.' });
  }
}





  
};
