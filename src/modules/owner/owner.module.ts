import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Owner } from './owner.entity';
import { OwnersService } from './owner.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Owner]),
  ],
  exports: [OwnersService],
  providers: [
    OwnersService,
  ],
})
export class OwnerModule { }
