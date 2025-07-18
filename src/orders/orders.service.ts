import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) {}

  async createOrder(data: any): Promise<Order> {
    const newOrder = new this.orderModel(data);
    return newOrder.save();
  }

  async getOrders(userId: string): Promise<Order[]> {
    return this.orderModel.find({ userId }).exec();
  }
}
