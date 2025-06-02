import { Router } from 'express';
import { FavoritesController } from '../controllers/user-favorite.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();

 router.use(authMiddleware);

router.get('/listfavorites', FavoritesController.listFavorites);
router.post('/toggle', FavoritesController.toggleFavorite);
router.delete('/remove:id', FavoritesController.removeFavorite);





export default router;
