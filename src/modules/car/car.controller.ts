import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Car } from './car.entity';
import { CarsService } from './car.service';

@Crud({
  model: {
    type: Car,
  },
})
@Controller('cars')
export class CarController implements CrudController<Car>{
  constructor(public service: CarsService){}
}
/*

import { Controller, Body, Post, UseGuards, Get, Request } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { ApiResponse, ApiUseTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import {  AddCarPayload, UpdateCarPayload } from './';
import {CarsService} from './car.service';

@Controller('api/auth')
@ApiUseTags('authentication')
export class AuthController {
  constructor(
    private readonly carsService: CarsService,
  ) { }

  @Post('update')
  @ApiResponse({ status: 201, description: 'Successful Login' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async update(@Body() payload: UpdateCarPayload): Promise<any> {
    const car = await this.carsService.update(payload);
    return await 1;
  }

  @Post('add-car')
  @ApiResponse({ status: 201, description: 'Successful Registration' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async addCar(@Body() payload: AddCarPayload): Promise<any> {
    const car = await this.carsService.create(payload);
    return await 1;
  }

  @Post('delete')
  @ApiResponse({ status: 201, description: 'Successful Registration' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async deleteCar(@Body() payload: {}): Promise<any> {
    const car = await this.carsService.delete(payload);
    return 1;
  }
}
*/
