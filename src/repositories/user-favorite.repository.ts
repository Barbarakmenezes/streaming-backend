import { UserFavorite } from '../models/user_favorites.model';

export class UserFavoriteRepository {
  async findOrCreateFavorite(userId: number, mediaId: number, mediaType: 'movie' | 'series', liked: boolean) {
    const [favorite, created] = await UserFavorite.findOrCreate({
      where: { userId, mediaId, mediaType },
      defaults: { liked },
    });

    if (!created) {
      favorite.liked = liked;
      await favorite.save();
    }

    return favorite;
  }

  async listFavorites(userId: number, mediaType?: 'movie' | 'series') {
    const where: any = { userId, liked: true };
    if (mediaType) {
      where.mediaType = mediaType;
    }
    return await UserFavorite.findAll({ where });
  }

  async removeFavorite(userId: number, mediaId: number, mediaType: 'movie' | 'series') {
    const deleted = await UserFavorite.destroy({
      where: { userId, mediaId, mediaType },
    });
    return deleted > 0;
  }

  async isFavorite(userId: number, mediaId: number, mediaType: 'movie' | 'series') {
    const favorite = await UserFavorite.findOne({
      where: { userId, mediaId, mediaType, liked: true },
    });
    return !!favorite;
  }
}
