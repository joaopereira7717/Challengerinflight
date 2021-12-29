/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { QueuesReporitory } from "./queue.repository";
import { Queue } from "./schemas/queue.schema";

@Injectable()
export class QueuesService {
    constructor(private readonly queuesReporitory: QueuesReporitory) {}
    async getQueues(code: string): Promise<Queue | any> {
        return this.queuesReporitory.findOne({ code });
    }

    async createQueue(code: string): Promise<boolean | string> {
        const codeRes = (await this.queuesReporitory.create({code})).code;
        return {
            code: codeRes
        } as any;
    }
}