import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '../config';
import { CarModule } from '../car';
import { ManufacturerModule } from '../manufacturer';
import { OwnerModule } from '../owner';
import { ScheduleModule } from 'nest-schedule';
import { ScheduleService } from '../../schedules/tasks.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          type: configService.get('DB_TYPE'),
          host: configService.get('DB_HOST'),
          port: configService.get('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_DATABASE'),
          entities: [__dirname + './../**/**.entity{.ts,.js}'],
          synchronize: configService.isEnv('dev'),
        } as TypeOrmModuleAsyncOptions;
      },
    }),
    ConfigModule,
    ManufacturerModule,
    OwnerModule,
    CarModule,
    ScheduleModule.register({}),

  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService,
    ScheduleService,
  ],
})
export class AppModule { }
