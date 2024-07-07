import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { VideosModule } from './videos/videos.module';
import { OrdersModule } from './orders/orders.module';
import { User } from './users/users.entity';
import { Video } from './videos/videos.entity';
import { Order } from './orders/orders.entity';

@Module({
  
  imports: [ 
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: "root",
    database: 'nesttest',
    entities: [User, Video, Order],
    synchronize: true,
  }), 
  
  AuthModule, UsersModule, VideosModule, OrdersModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
