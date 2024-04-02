import { applyDecorators } from '@nestjs/common';
import { ApiHeader } from '@nestjs/swagger';

export function LanguageApiHeader() {
  return applyDecorators(
    ApiHeader({
      name: 'x-lang',
      description: 'Language',
      enum: ['en', 'th'],
    }),
  );
}
