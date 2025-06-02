import User from '../models/user.model';

export class UserRepository {
  async create(data: any) {
    return await User.create(data);
  }

  async findAll() {
    return await User.findAll();
  }

  async findById(id: number) {
    return await User.findByPk(id);
  }

  async findByEmail(email: string) {
  return await User.findOne({ where: { email } });
}

async update(id: number, data: Partial<User>) {
    const user = await User.findByPk(id);
    if (!user) return null;

    await user.update(data);
    return user;
  }

  async delete(id: number) {
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();
      return true;
    }
    return false;
  }
}
