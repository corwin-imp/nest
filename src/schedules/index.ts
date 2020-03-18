import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

import { CarsService } from 'modules/car/car.service';
import { OwnersService } from 'modules/owner/owner.service';

@Injectable()
export class TasksService {
  private readonly ownersService: OwnersService; ,
  private readonly carsService: CarsService; ,
  @Cron('45 * * * * *')
  handleCron() {
  this.carsService.applyDiscount();
  }

  @Cron('40 * * * * *')
  handleCron() {
    this.ownersService.removeOwners();
  }
