import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { Transport, ClientsModule } from "@nestjs/microservices";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "HELLO_SERVICE",
        transport: Transport.KAFKA,
        options: {
          client: {
            ssl: true,
            clientId: "hero",
            brokers: [
              "b-3.demo.ltcml0.c6.kafka.us-east-1.amazonaws.com:9094",
              "b-2.demo.ltcml0.c6.kafka.us-east-1.amazonaws.com:9094",
              "b-1.demo.ltcml0.c6.kafka.us-east-1.amazonaws.com:9094",
            ],
          },
          consumer: {
            groupId: "hero-consumer",
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
