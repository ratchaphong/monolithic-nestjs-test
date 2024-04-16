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
import { ApiBearerAuth, ApiTags, ApiBody, ApiParam } from '@nestjs/swagger';
import { CreateConsentResponseEntity } from './entities/create-consent-response.entity';
import { ApiOkRes } from '../decorators/api-ok.decorator';
import { SearchConsentsResponseEntity } from './entities/search-consents-response.entity';
import { SearchConsentsQueryDto } from './dto/query-search-consents.dto';
import { Public } from '../guards/jwt-auth.guard.utils';
import { SearchConsentResponseEntity } from './entities/search-consent-response.entity';
import { UpdateConsentResponseEntity } from './entities/update-consent-response.entity';
import { ConsentHistoriesResponseEntity } from './entities/consent-history-response.entity';

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

  @Get(':id')
  @Public()
  @ApiParam({
    name: 'id',
    description: 'uuid',
    example: '939765c4-bcab-4c4b-96db-23fc7bc1071c',
    type: String,
  })
  @ApiOkRes(SearchConsentResponseEntity, {
    description: 'get consent',
    status: HttpStatus.OK,
  })
  async findOne(@Param('id') id: string): Promise<SearchConsentResponseEntity> {
    return await this.consentsService.findOne(id);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id',
    description: 'uuid',
    example: '939765c4-bcab-4c4b-96db-23fc7bc1071c',
    type: String,
  })
  @ApiBody({ type: UpdateConsentDto, description: 'request body' })
  @ApiOkRes(UpdateConsentResponseEntity, {
    description: 'The data has been successfully updated.',
  })
  update(
    @Request() req,
    @Param('id') id: string,
    @Body() updateConsentDto: UpdateConsentDto,
  ): Promise<SearchConsentResponseEntity> {
    const { customerId } = req.user;

    return this.consentsService.update(id, customerId, updateConsentDto);
  }

  @Delete(':id')
  @ApiOkRes(SearchConsentResponseEntity, { description: 'delete consent' })
  async remove(
    @Param('id') id: string,
    @Body('remark') remark?: string,
  ): Promise<SearchConsentResponseEntity> {
    return await this.consentsService.remove(id, remark);
  }

  @Get(':id/histories')
  @ApiOkRes(ConsentHistoriesResponseEntity, {
    description: 'get consent history',
  })
  async getHistory(
    @Param('id') id: string,
  ): Promise<ConsentHistoriesResponseEntity> {
    return await this.consentsService.getHistory(id);
  }
}
