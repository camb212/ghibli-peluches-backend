import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PlushiesModule } from './plushies/plushies.module';
import { CartModule } from './cart/cart.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    // PostgreSQL con TypeORM
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASS ? String(process.env.DB_PASS) : 'postgres',
      database: process.env.DB_NAME || 'ghibli_db',
      entities: [__dirname + '../src/**/*.entity{.ts,.js}'],
      synchronize: true,
      ssl: false,
    }),

    // MongoDB con Mongoose (YA CORREGIDO)
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost/ghibli'),

    // Módulos de tu app
    AuthModule,
    UsersModule,
    PlushiesModule,
    CartModule,
    WishlistModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
