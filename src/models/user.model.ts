// Modelo de usuário
import { Table, Column, Model, DataType, HasMany, BeforeCreate } from 'sequelize-typescript';
import bcrypt from 'bcrypt';
//import { Playlist } from './playlist.model';
import { UserFavorite } from './user_favorites.model';
@Table
export default class User extends Model {
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email!: string;

   @Column({ type: DataType.STRING, unique: true, allowNull: true })
  nome!: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: true })
  telefone!: string;

   
  @Column({ type: DataType.STRING, allowNull: false })
  password!: string;

  // @HasMany(() => Playlist)
  // playlists!: Playlist[];

  @HasMany(() => UserFavorite)
favorites!: UserFavorite[];

  @Column({ type: DataType.STRING, allowNull: true })
  profilePictureUrl?: string;


  @BeforeCreate
  static async hashPassword(user: User) {
    user.password = await bcrypt.hash(user.password, 10);
  }

  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}
