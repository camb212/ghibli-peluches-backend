import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  createOrder(@Body() data: any) {
    return this.ordersService.createOrder(data);
  }

  @Get(':userId')
  getOrders(@Param('userId') userId: string) {
    return this.ordersService.getOrders(userId);
  }
}
