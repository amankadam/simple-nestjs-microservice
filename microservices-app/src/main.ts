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
          "ip-10-0-2-180.ec2.internal:9094",
          "ip-10-0-0-138.ec2.internal:9094",
          "ip-10-0-1-117.ec2.internal:9094",
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
