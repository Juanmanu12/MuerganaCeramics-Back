import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersControllers } from './users/users.controllers/users.controllers.controller';
import { UsersServices } from './users/users.services/users.services.service';
import { UsersModule } from './users/module/users.module';

@Module({
  imports: [UsersModule],
  controllers: [AppController, UsersControllers],
  providers: [AppService, UsersServices],
})
export class AppModule {}
