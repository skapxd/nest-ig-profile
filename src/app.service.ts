import { Injectable } from '@nestjs/common';
import { getInstagramImage } from './get-instagram-image';

@Injectable()
export class AppService {
  async getIgProfile(instagram: string) {
    const instagramImage = await getInstagramImage(instagram);

    return {
      instagramImage,
    };
  }
}
