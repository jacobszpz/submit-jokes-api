import { Controller, Post, Body } from '@nestjs/common';
import { JokesService } from './jokes.service';
import { CreateJokeDto } from './dto/create-joke.dto';

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
}
