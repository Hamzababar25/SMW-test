import { Injectable } from '@nestjs/common';

@Injectable()
export class NumbersService {
  private numbers: number[] = [];

  addNumber(num: number): void {
    this.numbers.push(num);
  }

  getMin(): number {
    return Math.min(...this.numbers);
  }

  getMax(): number {
    return Math.max(...this.numbers);
  }

  getAllNumbers(): number[] {
    return this.numbers;
  }
}