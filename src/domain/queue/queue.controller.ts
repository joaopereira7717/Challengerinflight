/* eslint-disable prettier/prettier */
import {  Controller, Get, Query} from "@nestjs/common";
import { QueuesService } from "./queue.service";
import { Queue } from "./schemas/queue.schema";
import { v4 as uuid } from 'uuid';


@Controller('/api/v0/reset')
class QueueControllerGet {
    constructor(private readonly queuesService: QueuesService) {}

    @Get()
    async getQeueus(@Query('code') code: string): Promise<Queue> {
        return this.queuesService.getQueues(code); 
    }
}

@Controller('/api/v0/ask-to-reset')
class QueueControllerCreate {
    constructor(private readonly queuesService: QueuesService) {}

    @Get()
    async createQeueu(): Promise<boolean | string> {
        const code = uuid();
       const resp = this.queuesService.createQueue(code);
        return resp
    }
}

export { QueueControllerGet, QueueControllerCreate }