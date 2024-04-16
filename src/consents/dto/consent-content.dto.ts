import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class ConsentContentDto {
  @ApiProperty({
    description: 'Id',
    example: 'Id',
    type: String,
  })
  @IsOptional()
  id?: string;

  @ApiProperty({
    description: 'Header',
    example: 'header',
    type: String,
  })
  header: string;

  @ApiProperty({
    description: 'Content',
    example: 'content',
    type: String,
  })
  content: string;

  @ApiProperty({
    description: 'Accept Msg',
    example: 'acceptMsg',
    type: String,
  })
  acceptMsg: string;

  @ApiProperty({
    description: 'IsRequireAccepted',
    example: false,
    type: Boolean,
  })
  isRequireAccepted: boolean;
}
