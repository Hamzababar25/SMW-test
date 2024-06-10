import { Controller, Post, Get, Body } from '@nestjs/common';
import { NumbersService } from './numbers.service';

@Controller('numbers')
export class NumbersController {
  constructor(private readonly numbersService: NumbersService) {}

  @Post()
  addNumber(@Body('number') number: number): void {
    this.numbersService.addNumber(number);
  }

  @Get('min')
  getMin(): { min: number } {
    return { min: this.numbersService.getMin() };
  }

  @Get('max')
  getMax(): { max: number } {
    return { max: this.numbersService.getMax() };
  }

  @Get()
  getAllNumbers(): { numbers: number[] } {
    return { numbers: this.numbersService.getAllNumbers() };
  }
}