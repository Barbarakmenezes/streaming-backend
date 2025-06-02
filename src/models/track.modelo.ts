import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Playlist } from './playlist.model';

@Table
export class Track extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  title!: string;

  @Column({ type: DataType.STRING })
  artist!: string;

  @Column({ type: DataType.STRING })
  url!: string;

  @ForeignKey(() => Playlist)
  @Column
  playlistId!: number;

  @BelongsTo(() => Playlist)
  playlist!: Playlist;
}
