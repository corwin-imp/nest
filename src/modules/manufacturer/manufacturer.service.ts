import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Manufacturer } from './manufacturer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ManufacturersService extends TypeOrmCrudService<Manufacturer>{
  constructor(@InjectRepository(Manufacturer) manufacturerRepository: Repository<Manufacturer>){
    super(manufacturerRepository);
  }
  async applyDiscount() {

  }
}
