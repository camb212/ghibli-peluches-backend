import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PlushieDocument = Plushie & Document;

@Schema()
export class Plushie {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  color: string;

  @Prop({ required: true })
  size: 'small' | 'medium' | 'large';

  @Prop({ required: true })
  material: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  image: string;
}

export const PlushieSchema = SchemaFactory.createForClass(Plushie);
