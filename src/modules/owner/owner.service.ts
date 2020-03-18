import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Owner } from './owner.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { LessThan } from 'typeorm';

@Injectable()
export class OwnerService extends TypeOrmCrudService<Owner>{
  constructor(@InjectRepository(Owner) repo){
    super(repo);
  }
  async removeOldOwners() {
    const d = new Date();
    d.setMonth(d.getMonth() - 18);
    return this.repo.delete({ purchaseDate: LessThan(d.toISOString())});
  }
}
