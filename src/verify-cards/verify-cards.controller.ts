import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { VerifyCardsService } from './verify-cards.service';
import { CreateVerifyCardDto } from './dto/create-verify-card.dto';
import { UpdateVerifyCardDto } from './dto/update-verify-card.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { OptionResponseEntity } from './entities/option-response.entity';
import { OptionEntity } from './entities/options.entity';
import { VerifyCardOptionQueryDto } from './dto/verify-card-option-query.dto';
import { VerifyCard } from '@prisma/client';
import { VerifyCardEntity } from './entities/verify-card.entity';
import { VerifyCardQueryDto } from './dto/verify-card-query.dto';
// import { ApiOkRes } from 'src/decorators/api-ok.decorator';
import { ApiOkRes } from '../decorators/api-ok.decorator';
import { ApiErrorRes } from '../decorators/api-error.decorator';
import { HTTP_BAD_REQUEST } from '../shares/constant';
import { Public } from '../guards/jwt-auth.guard.utils';

// @Controller('verify-cards')
@Controller({ version: '1', path: 'verify_cards' })
@ApiTags('Options')
@Public()
export class VerifyCardsController {
  constructor(private readonly verifyCardsService: VerifyCardsService) {}

  // @Post()
  // create(@Body() createVerifyCardDto: CreateVerifyCardDto) {
  //   return this.verifyCardsService.create(createVerifyCardDto);
  // }

  // @Get()
  // @HttpCode(200)
  // @ApiResponse({
  //   status: 200,
  //   description: 'Successful operation',
  //   // type: OptionResponseEntity,
  // })
  // @ApiResponse({
  //   status: 400,
  //   description: 'Bad Request',
  // })
  // findAll() {
  //   return this.verifyCardsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.verifyCardsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateVerifyCardDto: UpdateVerifyCardDto,
  // ) {
  //   return this.verifyCardsService.update(+id, updateVerifyCardDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.verifyCardsService.remove(+id);
  // }

  @Get('options')
  // @LanguageApiHeader()
  @ApiOkRes(OptionResponseEntity)
  async options(
    @Query() query: VerifyCardOptionQueryDto,
  ): Promise<OptionResponseEntity> {
    // const { platform = Platform.DIRECT_WEB } = query;
    const { platform = 'DIRECT_WEB' } = query;

    const verifyCards: Array<VerifyCard> =
      await this.verifyCardsService.findEffectiveByPlatform(platform);

    return {
      options: verifyCards.map(
        (veCards: VerifyCard) => new OptionEntity(veCards),
      ),
    };
  }

  @Get('options/:code')
  @ApiOkRes(VerifyCardEntity, {
    status: HttpStatus.OK,
    description: 'Successful',
  })
  @ApiErrorRes(
    HttpStatus.BAD_REQUEST,
    HTTP_BAD_REQUEST,
    'Taxpayer ID has been blacklisted.',
    'Bad Request',
  )
  async getById(@Param('code') code: string): Promise<VerifyCardEntity> {
    const verifyCards = await this.verifyCardsService.findByCode(code);
    return {
      verifyCard: new OptionEntity(verifyCards),
    };
  }
}
