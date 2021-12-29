/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { Queue, QueueDocument } from "./schemas/queue.schema";
import * as _ from 'lodash';
import { CustomersService } from "src/domain/customer/customer.service";


@Injectable()
export class QueuesReporitory {
  constructor(
    @InjectModel(Queue.name) private queueModel: Model<QueueDocument>,
    private customersService: CustomersService,
  ) {}

  async findOne(queueFilterQuery: FilterQuery<Queue>): Promise<Queue> {
    const resID = (await this.queueModel.findOne(queueFilterQuery));
    if (_.isNull(resID)) {
      return false as any;
    } else {
      await this.queueModel.deleteOne({ _id: resID._id });
      await this.customersService.deleteAllCustomers();
      return true as any;
    }
  }

  async create(queue: Queue): Promise<Queue> {
    const newQueue = new this.queueModel(queue);
    return newQueue.save()
  }

  

}