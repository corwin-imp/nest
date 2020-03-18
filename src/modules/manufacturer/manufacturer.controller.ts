import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { ManufacturersService } from './manufacturer.service';
import { Manufacturer } from './manufacturer.entity';

@Crud({
  model: {
    type: Manufacturer,
  },
})
@Controller('manufacturers')
export class ManufacturerController implements CrudController<Manufacturer>{
  constructor(public service: ManufacturersService){}
}
