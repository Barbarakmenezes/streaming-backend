// Modelo de playlist
import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import User from '../models/user.model';
import { Track } from './track.modelo';

@Table
export class Playlist extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  name!: string;

  @ForeignKey(() => User)
  @Column
  userId!: number;

  @BelongsTo(() => User)
  user!: User;

  @HasMany(() => Track)
  tracks!: Track[];
}
