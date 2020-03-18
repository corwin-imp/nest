import { ApiModelProperty } from '@nestjs/swagger';

export class AddCarPayload {
  @ApiModelProperty({
    required: true,
  })
  manufacturerId: number;
  ownerId: number;
  firstRegistrationDate: string;
  price: number;
}
