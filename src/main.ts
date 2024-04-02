import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  ClassSerializerInterceptor,
  ValidationPipe,
  VersioningType,
} from '@nestjs/common';
import * as bodyParser from 'body-parser';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { config } from 'dotenv';
import { TransformInterceptor } from './interceptor/transform.interceptor';
import { ErrorsInterceptor } from './interceptor/errors.interceptor';
import { INTERNAL_API_KEY } from './shares/constant';

async function bootstrap() {
  config();

  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(
    new ClassSerializerInterceptor(app.get(Reflector)),
    new TransformInterceptor(),
    new ErrorsInterceptor(),
  );
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  //  บรรทัดนี้ใช้สำหรับกำหนดการใช้งาน global pipe ใน NestJS โดย ValidationPipe จะทำหน้าที่ตรวจสอบและแปลงข้อมูลที่เข้ามาให้ตรงตามรูปแบบที่กำหนดใน DTO(Data Transfer Object) ของคุณ โดยการใช้ transform: true จะทำให้ ValidationPipe แปลงข้อมูลเข้ามาให้อยู่ในรูปแบบที่ถูกต้องตามรูปแบบของ DTO

  app.setGlobalPrefix('master_data/api');
  // บรรทัดนี้ใช้เพื่อกำหนด prefix ในการเรียก API ทั้งหมดของแอปพลิเคชัน NestJS ให้เป็น '/master_data/api' นั่นหมายความว่า API ของคุณจะถูกเรียกผ่านเส้นทางที่เริ่มต้นด้วย '/master_data/api'

  app.enableVersioning({ type: VersioningType.URI, prefix: 'v' });
  // บรรทัดนี้ใช้เปิดใช้งานการเวอร์ชันใน API โดยใช้ URI เป็นวิธีการแสดงเวอร์ชัน นั่นหมายความว่า API ของคุณจะมีการระบุเวอร์ชันใน URI และใช้คำว่า 'v' เป็น prefix สำหรับเวอร์ชัน เช่น '/v1/users'

  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  // บรรทัดทั้งสองนี้ใช้เพื่อกำหนดการใช้งาน body parser ใน NestJS เพื่อรับข้อมูลที่ส่งมาในรูปแบบ JSON และข้อมูลแบบ urlencoded โดยกำหนดขนาดสูงสุดของข้อมูลที่ยอมรับเป็น 50mb และใช้งานโหมด extended เพื่ออนุญาตให้รับข้อมูลแบบ extended URL - encoded ที่มีความซับซ้อนได้

  if (process.env.NODE_ENV !== 'production') {
    app.enableCors();

    // Swagger config
    const config = new DocumentBuilder()
      .setTitle('RVP Master Data APIs.')
      .setVersion('1.0')
      .addBearerAuth()
      // .addApiKey(
      //   { type: 'apiKey', in: 'header', name: INTERNAL_API_KEY },
      //   INTERNAL_API_KEY,
      // )
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('master_data/api_documents', app, document);
  }

  await app.listen(process.env.PORT);
}
bootstrap();
