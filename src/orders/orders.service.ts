import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Order } from "./orders.entity";

@Injectable()

export class OrdersServices{
    constructor(
        @InjectRepository(Order)
        private ordersRepository: Repository<Order>,
    ){}

    create(order:Order): Promise<Order>{
        return this.ordersRepository.save(order);
    }
}