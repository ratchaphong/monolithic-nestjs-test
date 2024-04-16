import { Injectable } from '@nestjs/common';
import { CreateActionHistoryDto } from './dto/create-action-history.dto';
import { PrismaService } from '../prisma/prisma.service';
import { ActionHistory, Prisma } from '@prisma/client';

@Injectable()
export class ActionHistoryService {
  constructor(private prismaService: PrismaService) {}

  async create(data: CreateActionHistoryDto): Promise<ActionHistory> {
    const history = await this.prismaService.actionHistory.create({
      data,
    });
    return history;
  }

  async findAll(
    modelName: Prisma.ModelName,
    modelId: ActionHistory['modelId'],
    orderBy: Prisma.ActionHistoryOrderByWithAggregationInput = {
      createdAt: 'desc',
    },
  ): Promise<Array<ActionHistory>> {
    const history = await this.prismaService.actionHistory.findMany({
      where: {
        modelName,
        modelId,
      },
      orderBy: orderBy,
    });
    return history;
  }

  async createMany(data: Array<CreateActionHistoryDto>): Promise<void> {
    await this.prismaService.actionHistory.createMany({
      data,
    });
  }
}
