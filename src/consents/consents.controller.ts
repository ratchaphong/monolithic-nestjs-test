import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  Request,
  Query,
} from '@nestjs/common';
import { ConsentsService } from './consents.service';
import { CreateConsentDto } from './dto/create-consent.dto';
import { UpdateConsentDto } from './dto/update-consent.dto';
import { ApiBearerAuth, ApiTags, ApiBody } from '@nestjs/swagger';
import { CreateConsentResponseEntity } from './entities/create-consent-response.entity';
import { ApiOkRes } from '../decorators/api-ok.decorator';
import { SearchConsentsResponseEntity } from './entities/search-consents-response.entity';
import { SearchConsentsQueryDto } from './dto/query-search-consents.dto';
import { Public } from '../guards/jwt-auth.guard.utils';

@Controller({ version: '1', path: 'consents' })
@ApiTags('Consents')
@ApiBearerAuth()
export class ConsentsController {
  constructor(private readonly consentsService: ConsentsService) {}

  @Post()
  @ApiBody({ type: CreateConsentDto, description: 'request body' })
  @ApiOkRes(CreateConsentResponseEntity, {
    description: 'The data has been successfully created.',
    status: HttpStatus.CREATED,
  })
  async create(
    @Request() req,
    @Body() createConsentDto: CreateConsentDto,
  ): Promise<CreateConsentResponseEntity> {
    const { customerId } = req.user;

    return await this.consentsService.create(customerId, createConsentDto);
  }

  @Get()
  @Public()
  @ApiOkRes(SearchConsentsResponseEntity, {
    description: '',
    status: HttpStatus.OK,
  })
  async findAll(@Query() query: SearchConsentsQueryDto) {
    return await this.consentsService.findAll(query);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.consentsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateConsentDto: UpdateConsentDto) {
  //   return this.consentsService.update(+id, updateConsentDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.consentsService.remove(+id);
  // }
}
