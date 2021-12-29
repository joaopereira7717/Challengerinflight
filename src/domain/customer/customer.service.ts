/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { CustomersRepository } from "./customer.repository";
import { Customer } from "./schemas/customer.schema";

@Injectable()
export class CustomersService {
    constructor(private readonly customersReporitory: CustomersRepository) {}

    async getCustomers(): Promise<Customer[]> {
        return this.customersReporitory.find({});
    }

    async createCustomer(name: string, priority: number): Promise<boolean | string> {
        if(!name) return "Name is missing";
        this.customersReporitory.create({
            name,
            priority,
        })
        return true;
    }

    async deleteAllCustomers(): Promise<boolean> {
        this.customersReporitory.delete();
        return true;
    }

}