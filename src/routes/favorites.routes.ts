

// import { Router, Request, Response } from 'express';
// import { FavoritesController } from '../controllers/user-favorite.controller';
// import { AuthenticatedRequest } from '../types/express';
// import { authMiddleware } from '../middlewares/auth.middleware';

// const router = Router();

// router.get('/listfavorites', (req: Request, res: Response) => 
//   FavoritesController.listFavorites(req as AuthenticatedRequest, res)
// );

// router.post('/toggle', (req: Request, res: Response) => 
//   FavoritesController.toggleFavorite(req as AuthenticatedRequest, res)
// );




// router.delete('/remove/:id', (req: Request, res: Response) => 
//   FavoritesController.removeFavorite(req as AuthenticatedRequest, res)
// );

// export default router;
// src/routes/favorites.routes.ts
import { Router } from 'express';
import { FavoritesController } from '../controllers/user-favorite.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();

router.get('/listfavorites', authMiddleware, FavoritesController.listFavorites);
router.post('/toggle', authMiddleware, FavoritesController.toggleFavorite);
router.delete('/remove/:id', authMiddleware, FavoritesController.removeFavorite);

export default router;
