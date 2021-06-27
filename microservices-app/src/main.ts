import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.KAFKA,
    options: {
      client: {
        ssl: true,
        clientId: "hero",
        brokers: [
          "localhost:9094",
          "localhost:9094",
          "localhost:9094",
        ],
      },
      consumer: {
        groupId: "hero-consumer",
      },
    },
  });
  await app.listen(() => console.log("Microservice is listening"));
}
bootstrap();
