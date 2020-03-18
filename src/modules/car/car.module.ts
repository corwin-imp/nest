import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './car.entity';
import { CarsService } from './car.service';
import { CarController } from './car.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Car]),
  ],
  controllers: [CarController],
  exports: [CarsService],
  providers: [
    CarsService,
  ],
})
export class CarModule { }
