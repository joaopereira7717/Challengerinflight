/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerModule } from 'src/domain/customer/customer.module';
import { QueueControllerCreate, QueueControllerGet } from './queue.controller';
import { QueuesReporitory } from './queue.repository';
import { QueuesService } from './queue.service';
import { QueueSchema } from './schemas/queue.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: "Queue", schema: QueueSchema }]), CustomerModule],
  controllers: [QueueControllerGet, QueueControllerCreate],
  providers: [QueuesService, QueuesReporitory]
})
export class QueueModule {}
