import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type JokeDocument = HydratedDocument<Joke>;

@Schema({ timestamps: true })
export class Joke {
  @Prop()
  setup: string;

  @Prop()
  punchline: string;

  @Prop({ required: true })
  type: string;
}

export const JokeSchema = SchemaFactory.createForClass(Joke);
