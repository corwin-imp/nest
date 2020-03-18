import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Manufacturer } from './manufacturer.entity';
import { ManufacturersService } from './manufacturer.service';
import { ManufacturerController } from './manufacturer.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Manufacturer]),
  ],
  exports: [ManufacturersService],
  controllers: [ManufacturerController],
  providers: [
    ManufacturersService,
  ],
})
export class ManufacturerModule { }
