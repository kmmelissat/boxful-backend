import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShipmentsModule } from './shipments/shipments.module';
import { PrismaService } from './prisma/prisma.service'; 

@Module({
  imports: [ShipmentsModule],
  controllers: [AppController],
  providers: [AppService], 
})
export class AppModule {}
