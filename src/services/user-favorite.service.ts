import { UserFavoriteRepository } from '../repositories/user-favorite.repository';

const userFavoriteRepository = new UserFavoriteRepository();

interface FavoriteInput {
  userId: number;
  mediaId: number;
  mediaType: 'movie' | 'series';
  liked: boolean;
}

export class UserFavoriteService {
  async toggleFavorite(input: FavoriteInput) {
    return await userFavoriteRepository.findOrCreateFavorite(
      input.userId,
      input.mediaId,
      input.mediaType,
      input.liked
    );
  }

  async listFavorites(userId: number, mediaType?: 'movie' | 'series') {
    return await userFavoriteRepository.listFavorites(userId, mediaType);
  }

  async removeFavorite(userId: number, mediaId: number, mediaType: 'movie' | 'series') {
    return await userFavoriteRepository.removeFavorite(userId, mediaId, mediaType);
  }

  async isFavorite(userId: number, mediaId: number, mediaType: 'movie' | 'series') {
    return await userFavoriteRepository.isFavorite(userId, mediaId, mediaType);
  }
}
