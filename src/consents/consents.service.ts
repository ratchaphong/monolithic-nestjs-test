import { Injectable } from '@nestjs/common';
import { CreateConsentDto } from './dto/create-consent.dto';
import { UpdateConsentDto } from './dto/update-consent.dto';
import { CreateConsentResponseEntity } from './entities/create-consent-response.entity';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, PrismaClient } from '@prisma/client';
import { CreateConsentEntity } from './entities/create-consent.entity';
import { SearchConsentsResponseEntity } from './entities/search-consents-response.entity';
import { SearchConsentsQueryDto } from './dto/query-search-consents.dto';
import { SearchConsentsEntity } from './entities/search-consents.entity';

@Injectable()
export class ConsentsService {
  constructor(private prismaService: PrismaService) {}

  async create(
    customerId: string,
    createConsentDto: CreateConsentDto,
  ): Promise<CreateConsentResponseEntity> {
    const sequence = await this.prismaService.consent.count();

    const consent = await this.prismaService.$transaction(
      async (prisma: PrismaClient) => {
        const e = await prisma.consent.create({
          data: {
            ...createConsentDto,
            sequence: sequence + 1,
            actionUserId: customerId,
          },
        });

        // const consentHistoryData = {
        //   modelName: Prisma.ModelName.Consent,
        //   modelId: consent.id,
        //   actionType: ActionType.CREATE,
        //   actionUserId: user.userUuid,
        //   actionBy: props.actionBy,
        //   remark: 'สร้าง consent ใหม่',
        // };

        // await this.actionHistoryService.create(consentHistoryData, prisma);

        return e;
      },
    );

    const { deletedAt, createdAt, ...newValues } = consent;

    return {
      // consent: new CreateConsentEntity(newValues),
      consent: new CreateConsentEntity(consent),
    };
  }

  async findAll(
    query: SearchConsentsQueryDto,
  ): Promise<SearchConsentsResponseEntity> {
    const where: Prisma.ConsentWhereInput = {};

    if (query.category) {
      where.category = query.category;
    }

    if (query.state) {
      where.state = query.state;
    }

    const consents = await this.prismaService.consent.findMany({
      where: where,
      orderBy: {
        sequence: 'asc',
      },
      // include: {
      //   consentContents: true,
      // },
    });
    return {
      consents: consents.map((e) => new SearchConsentsEntity(e)),
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} consent`;
  }

  update(id: number, updateConsentDto: UpdateConsentDto) {
    return `This action updates a #${id} consent`;
  }

  remove(id: number) {
    return `This action removes a #${id} consent`;
  }

  // async getHistory(id: Consent['id']) {
  //   return await this.actionHistoryService.findMany(
  //     Prisma.ModelName.Consent,
  //     id,
  //   );
  // }
}
