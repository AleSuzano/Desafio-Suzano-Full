import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { AppController } from './app.controller'; 
import { AppService } from './app.service'; 
import { LoggerMiddleware } from './common/middleware/logger.middleware'; 
import { ProductsModule } from './products/products.module'; 
import { OrdersModule } from './orders/orders.module'; 

@Module({ 
  imports: [ 
    TypeOrmModule.forRoot({ 
      type: 'better-sqlite3', 
      database: 'database.sqlite', 
      entities: [__dirname + '/**/*.entity{.ts,.js}'], 
      synchronize: true, 
    }), ProductsModule, 
    OrdersModule, 
  ], 
  controllers: [AppController], 
  providers: [AppService], 
}) 
export class AppModule implements NestModule { 
  configure(consumer: MiddlewareConsumer) { 
    consumer.apply(LoggerMiddleware).forRoutes('*'); 
  } 
}