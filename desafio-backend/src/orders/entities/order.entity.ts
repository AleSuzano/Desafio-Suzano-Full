import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
 
@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;
 
  @Column('simple-json')
  produtos: { produtoId: string; quantidade: number; precoUnitario: number }[];
 
  @Column('decimal', { precision: 10, scale: 2 })
  total_pedido: number;
 
  @Column({ default: 'Pendente' })
  status: string; // 'Pendente' | 'Concluído' | 'Cancelado'
 
  @CreateDateColumn()
  criadoEm: Date;
}