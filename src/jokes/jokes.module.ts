import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JokesController } from './jokes.controller';
import { JokesService } from './jokes.service';
import { Joke, JokeSchema } from './schemas/joke.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Joke.name, schema: JokeSchema }])],
  controllers: [JokesController],
  providers: [JokesService]
})
export class JokesModule {}
