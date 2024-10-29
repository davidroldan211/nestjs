import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { envs } from './productos/config/envs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Poner como prefijo global 'API'
  app.setGlobalPrefix('api')
  //Validacion global de las entradas 
  app.useGlobalPipes(
    new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    })
  );
  await app.listen(envs.port ?? 3000);
  console.log({port: envs.port})
  console.log(`Server running on port ${process.env.PORT}`);
}
bootstrap();
