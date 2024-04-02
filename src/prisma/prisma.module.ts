import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

// Global ทำให้ไม่ต้อง import ไปทุก module ที่เรียกใช้งาน PrismaService
// ให้ใช้งานที่เดียวคือ app.module
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
