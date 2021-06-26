import { Controller, Get } from "@nestjs/common";
import { EventPattern, MessagePattern, Payload } from "@nestjs/microservices";

@Controller()
export class AppController {
  constructor() {}

  @MessagePattern("message_printed")
  handleMessagePrinted(data: any): string {
    console.log(data);
    return "Hello World printed Aman";
  }
}
