import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';



export type MessagenDocument = Messagen & Document;

@Schema()
export class Messagen {
  @Prop()
  messagem: string;

  @Prop()
  autor: string;

  @Prop()
  data: string;
}

export const MessagenSchema = SchemaFactory.createForClass(Messagen);
