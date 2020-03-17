import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './car.entity';
import { CarsService } from './car.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Car]),
  ],
  exports: [CarsService],
  providers: [
    CarsService,
  ],
})
export class CarModule { }
