import { PartialType } from '@nestjs/swagger';
import { CreateVerifyCardDto } from './create-verify-card.dto';

export class UpdateVerifyCardDto extends PartialType(CreateVerifyCardDto) {}
