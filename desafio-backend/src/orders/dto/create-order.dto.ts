import { IsArray, IsNotEmpty, ValidateNested, IsString, IsNumber, Min } from 'class-validator';
import { Type } from 'class-transformer';
 
export class OrderItemDto {
  @IsString()
  @IsNotEmpty()
  produtoId: string;
 
  @IsNumber()
  @Min(1, { message: 'A quantidade deve ser de pelo menos 1' })
  quantidade: number;
}
 
export class CreateOrderDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  items: OrderItemDto[];
}
