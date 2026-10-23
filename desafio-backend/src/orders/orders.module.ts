import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { Order } from './entities/order.entity';
import { ProductsModule } from '../products/products.module';
 
@Module({
  imports: [
    TypeOrmModule.forFeature([Order]),
    ProductsModule, // Importa o módulo de produtos para verificar e dar baixa no estoque
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}