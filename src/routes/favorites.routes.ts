// import { Router } from 'express';
// import { FavoritesController } from '../controllers/user-favorite.controller';
// import { authMiddleware } from '../middlewares/auth.middleware';
// import { RequestHandler } from 'express';

// const router = Router();

//  router.use(authMiddleware);

// router.get('/listfavorites', FavoritesController.listFavorites);
// router.post('/toggle', FavoritesController.toggleFavorite);
// //router.delete('/remove:id', FavoritesController.removeFavorite);
// router.delete('/remove/:id', FavoritesController.removeFavorite);



import { Router, Request, Response } from 'express';
import { FavoritesController } from '../controllers/user-favorite.controller';
import { AuthenticatedRequest } from '../types/express';

const router = Router();

router.get('/listfavorites', (req: Request, res: Response) => 
  FavoritesController.listFavorites(req as AuthenticatedRequest, res)
);

router.post('/toggle', (req: Request, res: Response) => 
  FavoritesController.toggleFavorite(req as AuthenticatedRequest, res)
);

router.delete('/remove/:id', (req: Request, res: Response) => 
  FavoritesController.removeFavorite(req as AuthenticatedRequest, res)
);

export default router;
