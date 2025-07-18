import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CartDocument = Cart & Document;

@Schema()
export class Cart {
  @Prop({ required: true })
  userId: string;

  @Prop({ type: [{ plushieId: String, quantity: Number }], default: [] })
  items: { plushieId: string; quantity: number }[];
}

export const CartSchema = SchemaFactory.createForClass(Cart);
