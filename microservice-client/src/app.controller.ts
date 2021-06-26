import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientKafka } from '@nestjs/microservices';
import { Message } from './message.event';

@Controller()
export class AppController {
  constructor(@Inject('HELLO_SERVICE') private readonly client: ClientKafka) { }
  async onModuleInit() {
    try {
    this.client.subscribeToResponseOf('message_printed');
    await this.client.connect();
    } catch(err){
      console.log(err);
    }
  }
  
  // async onApplicationBootstrap() {
  //   try{
  //   await this.client.connect();
  //   }catch(err){
  //     console.log(err);
  //   }
  // }

  @Get()
  getHello() {
    return this.client.send<string>('message_printed', new Message('Hello World'));
  
  }
}
