import { Controller, Post, Body, Get } from '@nestjs/common';
import { ShipmentsService } from './shipments.service';
import { CreateShipmentDto } from './dto/create-shipment.dto';

@Controller('shipments')
export class ShipmentsController {
  constructor(private readonly shipmentsService: ShipmentsService) {}

  //  Prueba básica para saber si el backend está vivo
  @Get('ping')
  ping() {
    return { status: 'OK 🟢 Postman funciona' };
  }

  //  Crea un nuevo envío
  @Post()
  create(@Body() createShipmentDto: CreateShipmentDto) {
    return this.shipmentsService.create(createShipmentDto);
  }
}
