import { ApiProperty } from '@nestjs/swagger';
import { ActionHistory } from '@prisma/client';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ActionHistoryEntity implements ActionHistory {
  constructor(partial: Partial<ActionHistoryEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty({
    type: String,
    description: 'uuid',
    example: 'test-uuid',
  })
  @Expose()
  id: string;

  @ApiProperty({
    type: String,
    description: 'model name',
    example: 'test',
  })
  @Expose()
  modelName: string;

  @ApiProperty({
    type: String,
    description: 'model id',
    example: 'test-uuid',
  })
  @Expose()
  modelId: string;

  @ApiProperty({
    type: String,
    description: 'การดำเนินการ',
    example: 'CREATE',
  })
  @Expose()
  actionType: string;

  @ApiProperty({
    type: String,
    description: 'หมายเหตุ',
    example: 'test remark',
  })
  @Expose()
  remark: string;

  @ApiProperty({
    type: String,
    description: 'action user id',
    example: 'test-uuid',
  })
  @Expose()
  actionUserId: string;

  @ApiProperty({
    type: String,
    description: 'ผู้ดำเนินการ',
    example: 'test',
  })
  @Expose()
  actionBy: string;

  @ApiProperty({
    type: Date,
    description: 'วันที่ดำเนินการ ',
    example: new Date(),
  })
  @Expose()
  createdAt: Date;

  @ApiProperty({
    type: Date,
    description: 'updated at',
    example: new Date(),
  })
  @Expose()
  updatedAt: Date;
}
