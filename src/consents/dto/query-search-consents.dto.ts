import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class SearchConsentsQueryDto {
  @ApiProperty({
    description: '',
    type: String,
    required: false,
    example: '',
  })
  @IsOptional()
  @IsString()
  category?: string;

  @ApiProperty({
    description: '',
    type: String,
    required: false,
    example: '',
  })
  @IsOptional()
  @IsString()
  state?: string;
}
