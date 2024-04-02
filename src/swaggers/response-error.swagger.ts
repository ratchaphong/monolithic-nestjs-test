import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { HTTP_BAD_REQUEST } from '../shares/constant';

export class SwaggerHttpErrorResponse {
  @ApiProperty({
    type: Number,
    description: 'Status code',
    example: HttpStatus.BAD_REQUEST,
  })
  statusCode: number;

  @ApiProperty({
    type: String,
    description: 'Response code',
    example: HTTP_BAD_REQUEST,
  })
  code: string;

  @ApiProperty({
    type: String,
    description: 'Response message',
  })
  message: string;
}
