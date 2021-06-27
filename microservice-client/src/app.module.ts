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
              "ip-10-0-2-180.ec2.internal:9094",
              "ip-10-0-0-138.ec2.internal:9094",
              "ip-10-0-1-117.ec2.internal:9094",
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
