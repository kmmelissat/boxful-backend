import {
    IsString,
    IsNotEmpty,
    IsEmail,
    IsArray,
    ValidateNested,
    IsDateString,
    IsNumber,
    Min
  } from 'class-validator';
import { Type } from 'class-transformer';
import { Matches } from 'class-validator';
  
  class PackageDto {
    @IsString()
    content: string;
  
    @IsNumber()
    @IsNotEmpty()
    @Min(0.1)
    weight: number;
  
    @IsNumber()
    @IsNotEmpty()
    @Min(0.1)
    length: number;

    @IsNumber()
    @IsNotEmpty()
    @Min(0.1)
    height: number;
  
    @IsNumber()
    @IsNotEmpty()
    @Min(0.1)
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
  
    @IsString()
    @Matches(/^\+503\d{8}$/, {
      message: 'El teléfono debe tener formato +503XXXXXXXX',
    })
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
  