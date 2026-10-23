import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
 
@Entity('products')
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;
 
  @Column()
  nome: string;
 
  @Column()
  categoria: string;
 
  @Column()
  descricao: string;
 
  @Column('decimal', { precision: 10, scale: 2 })
  preco: number;
 
  @Column('int')
  quantidade_estoque: number;
}