import { Controller, Post, Body } from '@nestjs/common';
import { JokesService } from './jokes.service';
import { CreateJokeDto } from './dto/create-joke.dto';

@Controller('jokes')
export class JokesController {
  constructor(private readonly jokesService: JokesService) {}


}
