import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { RouteModule } from './route.module';
import { VerifyCardsModule } from './verify-cards/verify-cards.module';
import { VehicleRegistrationTypesModule } from './vehicle-registration-types/vehicle-registration-types.module';
import { ConsentsModule } from './consents/consents.module';
import { CustomerModule } from './customer/customer.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './guards/jwt-auth.guard.utils';

@Module({
  imports: [
    PrismaModule,
    RouteModule,
    // VerifyCardsModule,
    // VehicleRegistrationTypesModule,
    // ConsentsModule
    // CustomerModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    // {
    //   provide: APP_GUARD,
    //   useClass: RoleGuard,
    // },
    // {
    //   provide: APP_GUARD,
    //   useClass: ResourceGuard,
    // },
  ],
})
export class AppModule {}
