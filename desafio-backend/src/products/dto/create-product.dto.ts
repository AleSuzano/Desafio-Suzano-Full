import { IsString, IsNumber, IsNotEmpty, Min } from 'class-validator';
 
export class CreateProductDto {
  @IsString()
  @IsNotEmpty({ message: 'O nome do produto é obrigatório' })
  nome: string;
 
  @IsString()
  @IsNotEmpty({ message: 'A categoria é obrigatória' })
  categoria: string;
 
  @IsString()
  @IsNotEmpty({ message: 'A descrição é obrigatória' })
  descricao: string;
 
  @IsNumber()
  @Min(0, { message: 'O preço deve ser maior ou igual a zero' })
  preco: number;
 
  @IsNumber()
  @Min(0, { message: 'A quantidade em estoque deve ser maior ou igual a zero' })
  quantidade_estoque: number;
}
