import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WishlistDocument = Wishlist & Document;

@Schema()
export class Wishlist {
  @Prop({ required: true })
  userId: string;

  @Prop({ type: [{ plushieId: String }], default: [] })
  items: { plushieId: string }[];
}

export const WishlistSchema = SchemaFactory.createForClass(Wishlist);
