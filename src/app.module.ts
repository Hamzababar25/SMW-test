import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NumbersController } from './Numbers/numbers.controller';
import { NumbersService } from './Numbers/numbers.service';

@Module({
  imports: [],
  controllers: [AppController,NumbersController],
  providers: [AppService,NumbersService],
})
export class AppModule {}
