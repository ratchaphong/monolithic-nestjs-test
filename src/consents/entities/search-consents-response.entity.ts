import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { SearchConsentsEntity } from './search-consents.entity';

export class SearchConsentsResponseEntity {
  @ApiProperty({
    description: 'find all consents',
    type: [SearchConsentsEntity],
  })
  @Type(() => SearchConsentsEntity)
  consents: SearchConsentsEntity[];
}
