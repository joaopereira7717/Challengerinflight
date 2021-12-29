/* eslint-disable prettier/prettier */
import {  Body, Controller, Get, Post } from "@nestjs/common";
import { Customer } from "./schemas/customer.schema";
import { CustomersService } from "./customer.service";
import { CreateCustomerDto } from "./dto/create-customer.dto";

@Controller('/api/v0/getNextCustomer')
class CustomersControllerGet {
    constructor(private readonly customersService: CustomersService) {}

    @Get()
    async getCustomers(): Promise<Customer[]> {
        return this.customersService.getCustomers();
    }
}

@Controller('/api/v0/addCustomer')
class CustomersControllerCreate {
    constructor(private readonly customersService: CustomersService) {}

    @Post()
    async createCustomer(@Body() createCustomerDto: CreateCustomerDto): Promise<boolean | string> {
       const resp = this.customersService.createCustomer(createCustomerDto.name, createCustomerDto.priority);
        return resp
    }
}

export { CustomersControllerGet, CustomersControllerCreate }