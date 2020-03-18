
import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Car } from './car.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CarsService extends TypeOrmCrudService<Car>{
  constructor(@InjectRepository(Car) carsRepository: Repository<Car>){
    super(carsRepository);
  }
  async applyDiscount() {

  }
}


/*
import * as crypto from 'crypto';
import { Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Car, CarFillableFields } from './car.entity';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private readonly carRepository: Repository<Car>,
  ) {}

  async update(id: number) {
    return this.carRepository.findOne(id);
  }
  async get(id: number) {
    return this.carRepository.findOne(id);
  }
  async delete(id: number) {
    return this.carRepository.findOne(id);
  }

  async getByEmail(data) {
    return await this.carRepository
      .createQueryBuilder('cars')
      .update(User)
      .set({
        manufacturerId: number,
        ownerId: number,
        firstRegistrationDate: string,
        price: String,
        id: number,
      })
      .where("id = :id", { id: 1 })
  }

  async getByEmailAndPass(email: string, password: string) {
    const passHash = crypto.createHmac('sha256', password).digest('hex');
    return await this.carRepository
      .createQueryBuilder('users')
      .where('users.email = :email and users.password = :password')
      .setParameter('email', email)
      .setParameter('password', passHash)
      .getOne();
  }

  async create(payload: CarFillableFields) {
    const car = 1;
    if (car) {
      throw new NotAcceptableException(
        'Car with provided email already created.',
      );
    }

    return await this.carRepository.save(this.carRepository.create(payload));
  }
}
*/
