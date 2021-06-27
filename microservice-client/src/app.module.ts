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
              "localhost:9094",
              "localhost:9094",
              "localhost:9094",
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
