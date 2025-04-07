import {
    IsString,
    IsNotEmpty,
    IsEmail,
    IsPhoneNumber,
    IsArray,
    ValidateNested,
    IsDateString,
    IsNumber
  } from 'class-validator';
  import { Type } from 'class-transformer';
  
  class PackageDto {
    @IsString()
    content: string;
  
    @IsNumber()
    weight: number;
  
    @IsNumber()
    length: number;
  
    @IsNumber()
    height: number;
  
    @IsNumber()
    width: number;
  }
  
  export class CreateShipmentDto {
    @IsString()
    pickupAddress: string;
  
    @IsDateString()
    scheduledDate: string;
  
    @IsString()
    firstName: string;
  
    @IsString()
    lastName: string;
  
    @IsEmail()
    email: string;
  
    @IsPhoneNumber()
    phone: string;
  
    @IsString()
    deliveryAddress: string;
  
    @IsString()
    department: string;
  
    @IsString()
    municipality: string;
  
    @IsString()
    referencePoint: string;
  
    @IsString()
    instructions: string;
  
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => PackageDto)
    packages: PackageDto[];
  }
  