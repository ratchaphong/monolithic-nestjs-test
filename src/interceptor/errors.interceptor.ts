import {
  CallHandler,
  ConflictException,
  ExecutionContext,
  HttpStatus,
  Injectable,
  NestInterceptor,
  NotFoundException,
  BadRequestException,
  InternalServerErrorException,
  ServiceUnavailableException,
} from '@nestjs/common';
import { Observable, catchError, throwError } from 'rxjs';
import {
  HTTP_CONFLICT,
  HTTP_NOT_FOUND,
  HTTP_BAD_REQUEST,
  HTTP_INTERNAL_SERVER_ERROR,
  PRISMA_NOT_FOUND,
  PRISMA_CONFLICT,
  HTTP_SERVICE_UNAVAILABLE,
} from '../shares/constant';

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  intercept(_context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        if (
          error.name === NotFoundException.name ||
          error.code === PRISMA_NOT_FOUND
        ) {
          return throwError(
            () =>
              new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                code: HTTP_NOT_FOUND,
                message: error.response?.message || error.message,
              }),
          );
        } else if (
          error.name === ConflictException.name ||
          error.code === PRISMA_CONFLICT
        ) {
          return throwError(
            () =>
              new ConflictException({
                statusCode: HttpStatus.CONFLICT,
                code: HTTP_CONFLICT,
                message: error.response?.message || error.message,
              }),
          );
        } else if (error.name === BadRequestException.name) {
          return throwError(
            () =>
              new BadRequestException({
                statusCode: HttpStatus.BAD_REQUEST,
                code: error.response?.code || HTTP_BAD_REQUEST,
                message: error.response?.message || error.message,
              }),
          );
        } else if (error.name === ServiceUnavailableException.name) {
          return throwError(
            () =>
              new ServiceUnavailableException({
                statusCode: HttpStatus.SERVICE_UNAVAILABLE,
                code: error.response?.code || HTTP_SERVICE_UNAVAILABLE,
                message: error.response?.message || error.message,
                error: error.response || {},
              }),
          );
        } else {
          // log
          console.error(error);

          return throwError(
            () =>
              new InternalServerErrorException({
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                code: HTTP_INTERNAL_SERVER_ERROR,
                message: error.response?.message || error.message,
              }),
          );
        }
      }),
    );
  }
}
