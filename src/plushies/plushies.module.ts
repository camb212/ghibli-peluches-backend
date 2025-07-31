import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlushiesController } from './plushies.controller';
import { PlushiesService } from './plushies.service';
import { Plushie, PlushieSchema } from './plushie.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Plushie.name, schema: PlushieSchema }])],
  controllers: [PlushiesController],
  providers: [PlushiesService],
})
export class PlushiesModule {}
