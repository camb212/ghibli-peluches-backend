import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Wishlist, WishlistDocument } from './entities/wishlist.entity';

@Injectable()
export class WishlistService {
  constructor(@InjectModel(Wishlist.name) private wishlistModel: Model<WishlistDocument>) {}

  async addToWishlist(data: any): Promise<Wishlist> {
    let wishlist = await this.wishlistModel.findOne({ userId: data.userId }).exec();
    if (!wishlist) {
      wishlist = new this.wishlistModel({ userId: data.userId, items: [] });
    }
    wishlist.items.push({ plushieId: data.plushieId });
    return wishlist.save();
  }

  async getWishlist(userId: string): Promise<Wishlist | null> {
    return this.wishlistModel.findOne({ userId }).exec();
  }
}
