/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './domain/customer/customer.module';
import { QueueModule } from './domain/queue/queue.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://joaopereira:12345@cluster0.1s3qb.mongodb.net/inflight?retryWrites=true&w=majority'), CustomerModule, QueueModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
