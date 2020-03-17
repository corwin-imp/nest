import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Manufacturer } from './manufacturer.entity';
import { ManufacturersService } from './manufacturer.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Manufacturer]),
  ],
  exports: [ManufacturersService],
  providers: [
    ManufacturersService,
  ],
})
export class ManufacturerModule { }
