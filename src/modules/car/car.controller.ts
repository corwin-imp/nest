import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Car } from './car.entity';
import { CarsService } from './car.service';

@Crud({
  model: {
    type: Car,
  },
  query: {
    join: {
      manufacturer: {
        eager: true,
      },
      owners: {
        eager: true,
      },
    },
  },
})
@Controller('cars')
export class CarController implements CrudController<Car>{
  constructor(public service: CarsService, private readonly carsvice: CarsService){}}
