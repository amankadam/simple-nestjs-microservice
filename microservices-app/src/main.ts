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
          "b-3.demo.ltcml0.c6.kafka.us-east-1.amazonaws.com:9092",
          "b-2.demo.ltcml0.c6.kafka.us-east-1.amazonaws.com:9092",
          "b-1.demo.ltcml0.c6.kafka.us-east-1.amazonaws.com:9092",
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
