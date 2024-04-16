import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose, Type } from 'class-transformer';
import { ConsentHistoryEntity } from './consent-history.entity';

@Exclude()
export class ConsentHistoriesResponseEntity {
  constructor(partial: Partial<ConsentHistoriesResponseEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty({
    type: [ConsentHistoryEntity],
  })
  @Type(() => ConsentHistoryEntity)
  @Expose()
  consentHistories: ConsentHistoryEntity[];
}
