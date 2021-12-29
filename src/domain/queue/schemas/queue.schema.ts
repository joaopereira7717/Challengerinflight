/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QueueDocument = Queue & Document;

@Schema()
export class Queue {
  @Prop()
  code: string;
}

export const QueueSchema = SchemaFactory.createForClass(Queue)
