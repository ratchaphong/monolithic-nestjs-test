import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { OptionEntity } from './options.entity';

@Expose()
export class OptionResponseEntity {
  @ApiProperty({
    description: 'ข้อมูล options',
    type: [OptionEntity],
  })
  @Type(() => OptionEntity)
  options: OptionEntity[];
}
