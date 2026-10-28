import { NestFactory } from '@nestjs/core'; 
import { ValidationPipe } from '@nestjs/common'; 
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'; 
import { AppModule } from './app.module'; 

async function bootstrap() { 
  const app = await 
  NestFactory.create(AppModule); 

   // Habilita validação global nos DTOs 
   app.useGlobalPipes( 
    new ValidationPipe({ 
      whitelist: true, 
      forbidNonWhitelisted: true, 
      transform: true, 
    }), 
  ); 
  
  // Habilita CORS para conectar com o Frontend se necessário 
    app.enableCors(); 
    
    // Configuração do Swagger 
      const config = new DocumentBuilder() 
      .setTitle('API de Gestão de Produtos e Pedidos') 
      .setDescription('API RESTful desenvolvida com NestJS e TypeORM') 
      .setVersion('1.0') 
      // .addTag('products') 
      // .addTag('orders') 
      .build(); 
      const document = 
      SwaggerModule.createDocument(app, config); 
      SwaggerModule.setup('api/docs', app, document); 
      
      await app.listen(3002); 
      console.log(`🚀 Aplicação rodando em: http://localhost:3002`); 
      console.log(`📚 Documentação Swagger disponível em: http://localhost:3002/api/docs`); 
    }
     bootstrap();