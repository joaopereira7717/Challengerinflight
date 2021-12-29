/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { Customer, CustomerDocument } from "./schemas/customer.schema";
import * as _ from 'lodash';

@Injectable()
export class CustomersRepository {
   constructor(@InjectModel(Customer.name) private customerModel: Model<CustomerDocument>){}
   
   async find(customersFilterQuery: FilterQuery<Customer>): Promise<Customer[]> {
      const customer = _.orderBy(await this.customerModel.find(customersFilterQuery), ['priority'], ['desc']);

      const firstCustomer = _.first(customer);

      if(firstCustomer) {
         await this.customerModel.deleteOne({_id: firstCustomer._id});
         return {
            name: firstCustomer.name, 
            priority: firstCustomer.priority
         } as any;
      } else {
         return "null" as any;
      }
   }

  async create(customer: Customer): Promise<Customer> {
     const newCustomer = new this.customerModel(customer);
     return newCustomer.save()
  }

  async delete() : Promise<boolean> {
     if(await this.customerModel.deleteMany()){
        return true;
     } else {
        return false;
     };
   }
}