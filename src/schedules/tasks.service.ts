import { Injectable } from '@nestjs/common';
import { OwnerService } from '../modules/owner/owner.service';
import { CarsService } from '../modules/car/car.service';
import { Interval, Timeout, Cron, NestSchedule } from 'nest-schedule';

@Injectable()
export class ScheduleService extends NestSchedule {
  constructor(private readonly ownerService: OwnerService,
              private readonly carService: CarsService) {
    super();
  }

  @Cron('1 * * * * *', { key: 'schedule-cron' })
  cron() {
    this.carService.applyDiscount();
    this.ownerService.removeOldOwners();
  }
}
