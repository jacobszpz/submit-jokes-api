import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
	  new ValidationPipe({
		transform: true,
		transformOptions: {
			enableImplicitConversion: true,
		}
	  }),
  );

  const config = new DocumentBuilder()
    .setTitle('Submit Jokes API')
    .setDescription('An API to submit your jokes to the website.')
    .setVersion('1.0')
    .addTag('jokes')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors();
  await app.listen(3001);
}
bootstrap();
