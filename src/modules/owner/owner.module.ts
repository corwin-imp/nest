import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Owner } from './owner.entity';
import { OwnerService } from './owner.service';
import { OwnerController } from './owner.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Owner]),
  ],
  exports: [OwnerService],
  controllers: [OwnerController],
  providers: [
    OwnerService,
  ],
})
export class OwnerModule { }
