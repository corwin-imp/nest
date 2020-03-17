import { ApiModelProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class UpdateCarPayload {
  @ApiModelProperty({
    required: true,
  })
  manufacturerId: number;
  ownerId: number;
  firstRegistrationDate: string;
  price: number;

}
