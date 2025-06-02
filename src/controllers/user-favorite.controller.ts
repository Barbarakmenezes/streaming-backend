import { Response } from 'express';
import { AuthenticatedRequest } from '../types/express';
import { UserFavoriteService } from '../services/user-favorite.service';

const userFavoriteService = new UserFavoriteService();

export class FavoritesController {
  static async listFavorites(req: AuthenticatedRequest, res: Response): Promise<void> {
    const userId = req.user.id;
    const { mediaType } = req.query;

    if (mediaType && mediaType !== 'movie' && mediaType !== 'series') {
      res.status(400).json({ message: 'mediaType inválido. Use "movie" ou "series".' });
      return;
    }

    try {
      const favorites = await userFavoriteService.listFavorites(
        userId,
        mediaType as 'movie' | 'series' | undefined
      );
      res.status(200).json(favorites);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async toggleFavorite(req: AuthenticatedRequest, res: Response): Promise<void> {
    const userId = req.user.id;
    const { mediaId, mediaType, liked } = req.body;

    if (!mediaId || !mediaType || typeof liked !== 'boolean') {
      res.status(400).json({ message: 'Dados inválidos.' });
      return;
    }

    try {
      const result = await userFavoriteService.toggleFavorite({
        userId,
        mediaId,
        mediaType,
        liked,
      });

      res.status(200).json(result);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async removeFavorite(req: AuthenticatedRequest, res: Response): Promise<void> {
    const userId = req.user.id;
    const mediaId = parseInt(req.params.id);
    const mediaType = req.query.mediaType as 'movie' | 'series';

    if (!mediaId || !mediaType) {
      res.status(400).json({ message: 'Parâmetros inválidos.' });
      return;
    }

    try {
      const removed = await userFavoriteService.removeFavorite(userId, mediaId, mediaType);
      if (!removed) {
        res.status(404).json({ message: 'Favorito não encontrado' });
        return;
      }

      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
