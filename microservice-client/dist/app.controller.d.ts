import { ClientKafka } from '@nestjs/microservices';
export declare class AppController {
    private readonly client;
    constructor(client: ClientKafka);
    onModuleInit(): Promise<void>;
    getHello(): import("rxjs").Observable<string>;
}
