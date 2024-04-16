import { Prisma } from '@prisma/client';

export class CreateActionHistoryDto {
  modelName: Prisma.ModelName;
  modelId: string;
  //   actionType: ActionType;
  actionType: string;
  actionUserId?: string;
  actionBy: string;
  remark: string;
}
