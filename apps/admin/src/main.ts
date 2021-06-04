import { NestFactory } from '@nestjs/core';
import { AdminModule } from './admin.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AdminModule);
  const config = new DocumentBuilder()
      .setTitle('全栈之巅-后台管理API')
      .setDescription('供后台管理界面的服务端APi')
      .setVersion('1.0')
      .addTag('博客test')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
  await app.listen(3001);
}
bootstrap();
