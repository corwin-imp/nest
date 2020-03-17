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
  ) { }

  async get(id: number) {
    return this.carRepository.findOne(id);
  }

  async getByEmail(email: string) {
    return await this.carRepository.createQueryBuilder('cars')
      .where('users.email = :email')
      .setParameter('email', email)
      .getOne();
  }

  async getByEmailAndPass(email: string, password: string) {
    const passHash = crypto.createHmac('sha256', password).digest('hex');
    return await this.carRepository.createQueryBuilder('users')
      .where('users.email = :email and users.password = :password')
      .setParameter('email', email)
      .setParameter('password', passHash)
      .getOne();
  }

  async create(
    payload: CarFillableFields,
  ) {
    const car = await this.getByEmail(payload.email);

    if (car) {
      throw new NotAcceptableException(
        'Car with provided email already created.',
      );
    }

    return await this.carRepository.save(
      this.carRepository.create(payload),
    );
  }
}
