import { Injectable } from '@nestjs/common';
import { CreateVerifyCardDto } from './dto/create-verify-card.dto';
import { UpdateVerifyCardDto } from './dto/update-verify-card.dto';
import { VerifyCard } from '@prisma/client';
// import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class VerifyCardsService {
  constructor(private prisma: PrismaService) {}

  // create(createVerifyCardDto: CreateVerifyCardDto) {
  //   return 'This action adds a new verifyCard';
  // }

  // findAll() {
  //   return `This action returns all verifyCards`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} verifyCard`;
  // }

  // update(id: number, updateVerifyCardDto: UpdateVerifyCardDto) {
  //   return `This action updates a #${id} verifyCard`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} verifyCard`;
  // }

  // findEffectiveByPlatform(platform: Platform): Promise<Array<VerifyCard>> {
  //   const currentDate = new Date();
  //   return this.prisma.verifyCard.findMany({
  //     where: {
  //       platforms: {
  //         hasSome: [platform],
  //       },
  //       effectiveStartDate: {
  //         lte: currentDate,
  //       },
  //       OR: [
  //         { effectiveEndDate: null },
  //         { effectiveEndDate: { gte: currentDate } },
  //       ],
  //     },
  //   });
  // }

  findEffectiveByPlatform(platform: string): Promise<Array<VerifyCard>> {
    const currentDate = new Date();
    return this.prisma.verifyCard.findMany({
      where: {
        platforms: {
          equals: [platform],
        },
        effectiveStartDate: {
          lte: currentDate,
        },
        OR: [
          { effectiveEndDate: null },
          { effectiveEndDate: { gte: currentDate } },
        ],
      },
    });
  }

  findByCode(value: string): Promise<VerifyCard> {
    return this.prisma.verifyCard.findFirst({
      where: {
        OR: [{ code: { contains: value } }],
      },
    });
  }
}
