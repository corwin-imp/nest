import * as crypto from 'crypto';
import { Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Owner, OwnerFillableFields } from './owner.entity';

@Injectable()
export class OwnersService {

  constructor(
    @InjectRepository(Owner)
    private readonly ownerRepository: Repository<Owner>,
  ) { }

  async get(id: number) {
    return this.ownerRepository.findOne(id);
  }

  async getByEmail(email: string) {
    return await this.ownerRepository.createQueryBuilder('owners')
      .where('users.email = :email')
      .setParameter('email', email)
      .getOne();
  }

  async getByEmailAndPass(email: string, password: string) {
    const passHash = crypto.createHmac('sha256', password).digest('hex');
    return await this.ownerRepository.createQueryBuilder('users')
      .where('users.email = :email and users.password = :password')
      .setParameter('email', email)
      .setParameter('password', passHash)
      .getOne();
  }

  async create(
    payload: OwnerFillableFields,
  ) {
    const user = await this.getByEmail(payload.email);

    if (user) {
      throw new NotAcceptableException(
        'User with provided email already created.',
      );
    }

    return await this.ownerRepository.save(
      this.ownerRepository.create(payload),
    );
  }
}
