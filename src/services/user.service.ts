import { UserRepository } from '../repositories/user.repository';
import User from '../models/user.model';

const userRepository = new UserRepository();

export class UserService {
  async createUser(data: any) {
    return await userRepository.create(data);
  }

  async listUsers() {
    return await userRepository.findAll();
  }

  async getUserById(id: number) {
    return await userRepository.findById(id);
  }

  
  async updateUser(id: number, data: Partial<User>) {
    return await userRepository.update(id, data);
  }

  async deleteUser(id: number) {
    return await userRepository.delete(id);
  }
}
