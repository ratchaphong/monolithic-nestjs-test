import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateConsentDto } from './dto/create-consent.dto';
import { UpdateConsentDto } from './dto/update-consent.dto';
import { CreateConsentResponseEntity } from './entities/create-consent-response.entity';
import { PrismaService } from '../prisma/prisma.service';
import { Consent, Prisma, PrismaClient } from '@prisma/client';
import { CreateConsentEntity } from './entities/create-consent.entity';
import { SearchConsentsResponseEntity } from './entities/search-consents-response.entity';
import { SearchConsentsQueryDto } from './dto/query-search-consents.dto';
import { SearchConsentEntity } from './entities/search-consent.entity';
import { SearchConsentResponseEntity } from './entities/search-consent-response.entity';
import { ActionHistoryService } from '../action-history/action-history.service';
import { ConsentHistoryEntity } from './entities/consent-history.entity';
import { ConsentHistoriesResponseEntity } from './entities/consent-history-response.entity';

@Injectable()
export class ConsentsService {
  constructor(
    private prismaService: PrismaService,
    private actionHistoryService: ActionHistoryService,
  ) {}

  async create(
    customerId: string,
    createConsentDto: CreateConsentDto,
  ): Promise<CreateConsentResponseEntity> {
    const sequence = await this.prismaService.consent.count();

    const { contents, ...createConsent } = createConsentDto;

    const createdConsent = await this.prismaService.$transaction(
      async (prisma: PrismaClient) => {
        const createdData = await prisma.consent.create({
          data: {
            ...createConsent,
            sequence: sequence + 1,
            actionUserId: customerId,
            consentContents: {
              create: contents.map((content) => ({
                header: content.header,
                content: content.content,
                acceptMsg: content.acceptMsg,
                isRequireAccepted: content.isRequireAccepted,
              })),
            },
          },
        });

        const consentHistoryData = {
          modelName: Prisma.ModelName.Consent,
          modelId: createdData.id,
          actionType: 'CREATE',
          actionUserId: customerId,
          actionBy: createConsentDto.actionBy,
          remark: 'สร้าง consent ใหม่',
        };

        await this.actionHistoryService.create(consentHistoryData);

        const existingConsent = await prisma.consent.findFirst({
          where: {
            id: createdData.id,
          },
          include: {
            consentContents: true,
          },
        });

        return existingConsent;
      },
    );

    return {
      consent: new CreateConsentEntity(createdConsent),
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

    const existingConsents = await this.prismaService.consent.findMany({
      where: where,
      orderBy: {
        sequence: 'asc',
      },
      include: {
        consentContents: true,
      },
    });
    return {
      consents: existingConsents.map((e) => new SearchConsentEntity(e)),
    };
  }

  async findOne(id: string): Promise<SearchConsentResponseEntity> {
    const existingConsent = await this.prismaService.consent.findFirst({
      where: {
        id,
      },
      include: {
        consentContents: true,
      },
    });

    return {
      consent: existingConsent
        ? new SearchConsentEntity(existingConsent)
        : null,
    };
  }

  async update(
    id: string,
    customerId: string,
    updateConsentDto: UpdateConsentDto,
  ): Promise<SearchConsentResponseEntity> {
    const existingConsent = await this.prismaService.consent.findFirst({
      where: {
        id,
      },
      include: {
        consentContents: true,
      },
    });

    if (!existingConsent) {
      throw new HttpException(
        'Consent could not be found',
        HttpStatus.NOT_FOUND,
      );
    }

    const deletedContents = existingConsent.consentContents.filter(
      (content) => !updateConsentDto.contents.find((c) => c.id === content.id),
    );

    const createdContents = updateConsentDto.contents.filter(
      (content) => !content.id,
    );

    const updatedContents = updateConsentDto.contents.filter((content) =>
      existingConsent.consentContents.find((c) => c.id === content.id),
    );

    const updatedConsent = await this.prismaService.$transaction(
      async (prisma: PrismaClient) => {
        if (deletedContents.length > 0) {
          await prisma.consentContent.deleteMany({
            where: {
              id: {
                in: deletedContents.map((content) => content.id),
              },
            },
          });
        }

        if (updatedContents.length > 0) {
          await Promise.all(
            updatedContents.map((content) =>
              prisma.consentContent.update({
                where: {
                  id: content.id,
                },
                data: {
                  header: content.header,
                  content: content.content,
                  acceptMsg: content.acceptMsg,
                  isRequireAccepted: content.isRequireAccepted,
                },
              }),
            ),
          );
        }

        if (createdContents.length > 0) {
          await prisma.consentContent.createMany({
            data: createdContents.map((content) => ({
              header: content.header,
              content: content.content,
              acceptMsg: content.acceptMsg,
              isRequireAccepted: content.isRequireAccepted,
              consentId: existingConsent.id,
            })),
          });
        }

        const updatedConsent = await prisma.consent.update({
          where: {
            id: id,
          },
          data: {
            name: updateConsentDto.name,
            category: updateConsentDto.category,
            consentType: updateConsentDto.consentType,
            state: updateConsentDto.state,
            startAt: updateConsentDto.startAt,
            endAt: updateConsentDto.endAt,
          },
          include: {
            consentContents: true,
          },
        });

        //  const consentHistoryData = {
        //    modelName: Prisma.ModelName.Consent,
        //    modelId: consent.id,
        //    actionType: ActionType.UPDATE,
        //    actionUserId: user.userUuid,
        //    actionBy: props.actionBy,
        //    remark: 'แก้ไข consent',
        //  };

        //  await this.actionHistoryService.create(consentHistoryData, prisma);

        return updatedConsent;
      },
    );

    return { consent: new SearchConsentEntity(updatedConsent) };
  }

  async remove(
    id: Consent['id'],
    remark: string = 'ลบ consent',
  ): Promise<SearchConsentResponseEntity> {
    const consent = await this.prismaService.consent.findFirst({
      where: {
        id: id,
      },
      include: {
        consentContents: true,
      },
    });

    if (!consent) {
      return null;
    }

    await this.prismaService.$transaction(async (prisma: PrismaClient) => {
      await prisma.consentContent.deleteMany({
        where: {
          consentId: consent.id,
        },
      });

      await prisma.consent.delete({
        where: {
          id: consent.id,
        },
      });

      await prisma.consent.updateMany({
        where: { sequence: { gt: consent.sequence } },
        data: { sequence: { decrement: 1 } },
      });

      const consentHistoryData = {
        modelName: Prisma.ModelName.Consent,
        modelId: consent.id,
        actionType: 'CANCEL',
        actionUserId: consent.actionUserId,
        actionBy: consent.actionBy,
        remark: remark,
      };

      await this.actionHistoryService.create(consentHistoryData);
    });

    return {
      consent: consent ? new SearchConsentEntity(consent) : null,
    };
  }

  async getHistory(id: Consent['id']): Promise<ConsentHistoriesResponseEntity> {
    const histories = await this.actionHistoryService.findAll(
      Prisma.ModelName.Consent,
      id,
    );

    return {
      consentHistories: histories.map(
        (history) => new ConsentHistoryEntity(history),
      ),
    };
  }
}
