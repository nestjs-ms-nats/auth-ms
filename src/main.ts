import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport} from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

import { envs } from './config';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('Auth');
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.NATS,
    options: {
      servers: envs.natsServers,
    },
  });
  await app.listen();
  logger.log(`Auth Microservice running on port ${ envs.port }`);
}
bootstrap();
