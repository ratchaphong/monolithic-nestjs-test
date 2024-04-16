import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateConsentDto } from './create-consent.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateConsentDto extends PartialType(CreateConsentDto) {
  @ApiProperty({
    description: 'uuid',
    example: '939765c4-bcab-4c4b-96db-23fc7bc1071c',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  id: string;
}
