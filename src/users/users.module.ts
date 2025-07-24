import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],      // <-- Aquí debe ir UsersService
  exports: [UsersService],        // <-- Y aquí exportas para que otros módulos puedan usarlo
})
export class UsersModule {}
