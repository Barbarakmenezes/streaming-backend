
import { sequelize } from './config/database';
import express from 'express';
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes';
import authRoutes from './routes/auth.routes';
import favoritesRoutes from './routes/favorites.routes';
import User from './models/user.model'; 


declare module 'express-serve-static-core' {
  interface Request {
    user?: {
      id: number;
      email?: string;
    };
  }
}

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// app.use('/api', routes);
app.use('/users', userRoutes);
app.use('/auth', authRoutes);
app.use('/favorites', favoritesRoutes); 




sequelize.sync({ alter: true }).then(() => {
  console.log('🎲 Database synced');
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
});


export default app;
