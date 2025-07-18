import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cart, CartDocument } from './entities/cart.entity';

@Injectable()
export class CartService {
  constructor(@InjectModel(Cart.name) private cartModel: Model<CartDocument>) {}

  async addToCart(data: any): Promise<Cart> {
    let cart = await this.cartModel.findOne({ userId: data.userId }).exec();
    if (!cart) {
      cart = new this.cartModel({ userId: data.userId, items: [] });
    }
    cart.items.push({ plushieId: data.plushieId, quantity: data.quantity });
    return cart.save();
  }

  async getCart(userId: string): Promise<Cart | null> {
    return this.cartModel.findOne({ userId }).exec();
  }
}
