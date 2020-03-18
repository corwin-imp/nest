
import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Car } from './car.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {  Between } from 'typeorm';

@Injectable()
export class CarsService extends TypeOrmCrudService<Car> {
  constructor(@InjectRepository(Car) repo) {
    super(repo);
  }
  async applyDiscount() {
    const first = new Date();
    const second = new Date();
    first.setMonth(first.getMonth() - 12);
    second.setMonth(second.getMonth() - 18);
    return this.repo.update({ firstRegistrationDate: Between(second, first ), withDiscount: false}, { price: () => 'price * 0.8', withDiscount: true  });
  }
}
