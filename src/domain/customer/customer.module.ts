/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomersRepository } from './customer.repository';
import { Customer, CustomerSchema } from './schemas/customer.schema';
import { CustomersService } from './customer.service';
import { CustomersControllerGet, CustomersControllerCreate } from './customers.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Customer.name, schema: CustomerSchema }])],
  controllers: [CustomersControllerGet, CustomersControllerCreate ],
  providers: [CustomersService, CustomersRepository],
  exports: [CustomersService],
})
export class CustomerModule {}
