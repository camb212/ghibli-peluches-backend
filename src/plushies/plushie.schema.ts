import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PlushieDocument = Plushie & Document;

@Schema()
export class Plushie {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  image: string;
}

export const PlushieSchema = SchemaFactory.createForClass(Plushie);
