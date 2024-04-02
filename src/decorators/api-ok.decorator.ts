import { HttpCode, HttpStatus, Type, applyDecorators } from '@nestjs/common';
import {
  ApiExtraModels,
  ApiResponse,
  ApiResponseOptions,
  getSchemaPath,
} from '@nestjs/swagger';
import { SwaggerHttpResponse } from '../swaggers/response.swagger';

export const ApiOkRes = <DataDto extends Type<unknown>>(
  dataDto: DataDto,
  options: ApiResponseOptions = {},
  example?: string | number | boolean,
) => {
  const dataOption = {
    default: example ? example : undefined,
    $ref: example ? undefined : getSchemaPath(dataDto),
  };

  // return applyDecorators(
  //   HttpCode(HttpStatus.OK), // ระบุ HTTP status code ที่คาดหวังในการตอบกลับ
  //   ApiResponse({
  //     ...options,
  //     status: HttpStatus.OK,
  //     description: options.description,
  //     type: dataDto, // ระบุประเภทของข้อมูลที่คาดหวังในการรับคืน
  //   }),
  // );

  return applyDecorators(
    ApiExtraModels(SwaggerHttpResponse, dataDto),
    ApiResponse({
      ...options,
      status: options.status || HttpStatus.OK,
      description: options.description,
      schema: {
        allOf: [
          // { $ref: getSchemaPath(SwaggerHttpResponse) },
          {
            properties: {
              statusCode: { default: options.status || HttpStatus.OK },
              data: dataOption,
            },
          },
        ],
      },
    }),
  );
};
