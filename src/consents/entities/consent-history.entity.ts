import { ApiProperty, OmitType } from '@nestjs/swagger';
import { ActionHistoryEntity } from '../../action-history/entities/action-history.entity';
import { Exclude } from 'class-transformer';

@Exclude()
export class ConsentHistoryEntity extends OmitType(ActionHistoryEntity, [
  'id',
  'modelId',
  'modelName',
] as const) {
  constructor(partial: Partial<ConsentHistoryEntity>) {
    super(partial);

    Object.assign(this, partial);
  }
}
