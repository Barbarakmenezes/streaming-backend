import { Table, Column, Model, ForeignKey, DataType, BelongsTo } from 'sequelize-typescript';
import User from './user.model';

@Table
export class UserFavorite extends Model {
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  userId!: number;

  @BelongsTo(() => User)
  user!: User;

  @Column({ type: DataType.INTEGER, allowNull: false })
  mediaId!: number; 

  @Column({ type: DataType.ENUM('movie', 'series'), allowNull: false })
  mediaType!: 'movie' | 'series';

  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  liked!: boolean;
}
