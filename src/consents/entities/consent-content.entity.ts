import { ApiProperty } from '@nestjs/swagger';
import { ConsentContent } from '@prisma/client';

export class ConsentContentEntity implements ConsentContent {
  constructor(partial: Partial<ConsentContentEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty({
    description: 'Consent Content ID',
    example: 'Consent Content ID',
    type: String,
  })
  id: string;

  @ApiProperty({
    description: 'Consent Content Header',
    example: 'Header',
    type: String,
  })
  header: string;

  @ApiProperty({
    description: 'Consent Content',
    example: 'Content',
    type: String,
  })
  content: string;

  @ApiProperty({
    description: 'Consent Accept Message',
    example: 'Accept',
    type: String,
  })
  acceptMsg: string;

  @ApiProperty({
    description: 'Consent Require Accepted',
    example: true,
    type: Boolean,
  })
  isRequireAccepted: boolean;

  @ApiProperty({
    description: 'Consent Created At',
    example: new Date(),
    type: Date,
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Consent Updated At',
    example: new Date(),
    type: Date,
  })
  updatedAt: Date;

  @ApiProperty({
    description: 'Consent Deleted At',
    example: new Date(),
    type: Date,
  })
  deletedAt: Date;

  @ApiProperty({
    description: 'Consent Id',
    example: 'uuid-uuid-uuid-uuid',
    type: String,
  })
  consentId: string;
}
