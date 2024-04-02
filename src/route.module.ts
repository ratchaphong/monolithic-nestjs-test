import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { ApiV1RouteModule } from './route/apiV1Route.module';
import { InternalApiRouteModule } from './route/internalApiRoute.module';

@Module({
  imports: [
    InternalApiRouteModule,
    ApiV1RouteModule,
    RouterModule.register([
      {
        path: 'internal',
        module: InternalApiRouteModule,
      },
      {
        path: '',
        module: ApiV1RouteModule,
      },
    ]),
  ],
})
export class RouteModule {}
