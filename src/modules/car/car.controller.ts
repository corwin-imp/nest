import { Controller, Body, Post, UseGuards, Get, Request } from '@nestjs/common';
import { ApiResponse, ApiUseTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import {  AddCarPayload, UpdateCarPayload } from './';
import CarsService from './car.service';

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
  async addCar(@Body() payload: CarsService): Promise<any> {
    const car = await this.carsService.create(payload);
    return await 1;
  }

  @Post('delete')
  @ApiResponse({ status: 201, description: 'Successful Registration' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async deleteCar(@Body() payload: RegisterPayload): Promise<any> {
    const car = await this.carsService.create(payload);
    return 1;
  }
}
