// Configuração do banco de dados
import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import User from '../models/user.model';
import { Playlist } from '../models/playlist.model';
import { Track } from '../models/track.modelo'; 
import { UserFavorite } from '../models/user_favorites.model';

dotenv.config();

export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
 // models: [__dirname + '/../models'],
   models: [User, Playlist, Track, UserFavorite],
  logging: false
});
