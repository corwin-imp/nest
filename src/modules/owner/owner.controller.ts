import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Owner } from './owner.entity';
import { OwnerService } from './owner.service';

@Crud({
  model: {
    type: Owner,
  },
})
@Controller('owners')
export class OwnerController implements CrudController<Owner>{
  constructor(public service: OwnerService){}
}
