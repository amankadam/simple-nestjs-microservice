import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ["localhost:9092"],
      },
      consumer: {
        groupId: "hero-consumer",
      },
    },
  });
  await app.listen(() => console.log("Microservice is listening"));
}
bootstrap();
