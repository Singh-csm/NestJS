import { Controller, Post, Body } from '@nestjs/common';
import { OrdersServices } from './orders.service';
import { Order } from './orders.entity';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersServices) {}

  @Post()
  create(@Body() order: Order) {
    return this.ordersService.create(order);
  }
}
