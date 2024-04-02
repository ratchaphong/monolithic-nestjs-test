import { ApiProperty } from '@nestjs/swagger';
import { HTTP_SUCCESS } from '../shares/constant';

export class SwaggerHttpResponse<T> {
  @ApiProperty({
    type: Number,
    description: 'Status code',
  })
  statusCode: number;

  @ApiProperty({
    type: String,
    description: 'Response code',
    example: HTTP_SUCCESS,
  })
  code: string;

  @ApiProperty()
  data: T;
}
