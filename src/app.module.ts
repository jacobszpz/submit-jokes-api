import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppService } from './app.service';
import { JokesModule } from './jokes/jokes.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
	MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('MONGODB_URI'), // Loaded from .ENV
      })
    }),
	JokesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
