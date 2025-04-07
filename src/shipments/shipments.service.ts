import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateShipmentDto } from './dto/create-shipment.dto';

@Injectable()
export class ShipmentsService {
  constructor(private prisma: PrismaService) {}

  async create(createShipmentDto: CreateShipmentDto) {
    const {
      pickupAddress,
      scheduledDate,
      firstName,
      lastName,
      email,
      phone,
      deliveryAddress,
      department,
      municipality,
      referencePoint,
      instructions,
      packages,
    } = createShipmentDto;

    return this.prisma.shipment.create({
      data: {
        pickupAddress,
        scheduledDate: new Date(scheduledDate),
        firstName,
        lastName,
        email,
        phone,
        deliveryAddress,
        department,
        municipality,
        referencePoint,
        instructions,
        packages,
      },
    });
  }
}
