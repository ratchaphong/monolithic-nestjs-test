import { Injectable } from '@nestjs/common';
import { CreateVehicleRegistrationTypeDto } from './dto/create-vehicle-registration-type.dto';
import { UpdateVehicleRegistrationTypeDto } from './dto/update-vehicle-registration-type.dto';
import { PrismaService } from '../prisma/prisma.service';
import { VehicleRegistrationType } from '@prisma/client';

@Injectable()
export class VehicleRegistrationTypesService {
  constructor(private prisma: PrismaService) {}

  findAllEffective(): Promise<Array<VehicleRegistrationType>> {
    const currentDate = new Date();
    return this.prisma.vehicleRegistrationType.findMany({
      where: {
        effectiveStartDate: {
          lte: currentDate,
        },
        OR: [
          { effectiveEndDate: null }, // Filter models with null effectiveEndDate
          { effectiveEndDate: { gte: currentDate } }, // Filter models with effectiveEndDate greater than or equal to currentDate
        ],
      },
    });
  }

  findByCode(code: string): Promise<VehicleRegistrationType> {
    return this.prisma.vehicleRegistrationType.findFirst({
      where: {
        OR: [{ code: { contains: code } }],
      },
    });
  }
}
