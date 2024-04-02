import { HttpStatus, applyDecorators } from '@nestjs/common';
import {
  ApiResponse,
  ApiResponseOptions,
  getSchemaPath,
} from '@nestjs/swagger';
import { SwaggerHttpErrorResponse } from '../swaggers/response-error.swagger';

export function ApiErrorRes(
  statusCode: HttpStatus,
  code: string,
  message: string,
  description?: string,
  options?: ApiResponseOptions,
) {
  return applyDecorators(
    ApiResponse({
      ...options,
      status: statusCode,
      description: description,
      schema: {
        default: {
          statusCode: statusCode,
          code: code,
          message: message,
        },
        type: getSchemaPath(SwaggerHttpErrorResponse),
      },
    }),
  );
}
