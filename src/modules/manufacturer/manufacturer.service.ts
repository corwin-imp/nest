import * as crypto from 'crypto';
import { Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Manufacturer, ManufacturerFillableFields } from './manufacturer.entity';

@Injectable()
export class ManufacturersService {

  constructor(
    @InjectRepository(Manufacturer)
    private readonly manufacturerRepository: Repository<Manufacturer>,
  ) { }

  async get(id: number) {
    return this.manufacturerRepository.findOne(id);
  }

  async getByEmail(email: string) {
    return await this.manufacturerRepository.createQueryBuilder('manufacturers')
      .where('users.email = :email')
      .setParameter('email', email)
      .getOne();
  }

  async getByEmailAndPass(email: string, password: string) {
    const passHash = crypto.createHmac('sha256', password).digest('hex');
    return await this.manufacturerRepository.createQueryBuilder('users')
      .where('users.email = :email and users.password = :password')
      .setParameter('email', email)
      .setParameter('password', passHash)
      .getOne();
  }

  async create(
    payload: ManufacturerFillableFields,
  ) {
    const user = await this.getByEmail(payload.email);

    if (user) {
      throw new NotAcceptableException(
        'User with provided email already created.',
      );
    }

    return await this.manufacturerRepository.save(
      this.manufacturerRepository.create(payload),
    );
  }
}
