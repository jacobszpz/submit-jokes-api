import { Controller, Post, Body, Get, Delete } from '@nestjs/common';
import { JokesService } from './jokes.service';
import { CreateJokeDto } from './dto/create-joke.dto';
import { Joke } from './schemas/joke.schema';

@Controller('jokes')
export class JokesController {
  constructor(private readonly jokesService: JokesService) {}

  @Post('submit')
  async create(@Body() createJokeDto: CreateJokeDto) {
    const newJoke = this.jokesService.create(createJokeDto);
    if (newJoke) {
      return {
        statusCode: 200,
        message: 'Operation succeeded'
      };
    } else {
      return {
        statusCode: 500,
        message: 'Operation failed'
      };
    }
  }

  // Joke moderation works on a FIFO basis
  @Get('oldest')
  async getOldest() : Promise<Joke> {
    return this.jokesService.oldest();
  }

  // Joke moderation works on a FIFO basis
  @Delete('oldest')
  async deleteOldest() : Promise<Joke> {
    return this.jokesService.deleteOldest();
  }
}
