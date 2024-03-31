import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqps://qgezmimv:8aI_INTmDlEokw8uDnrGVujsahjJ_Bqg@rattlesnake.rmq.cloudamqp.com/qgezmimv',
      ],
      queue: 'auth_queue',
      queueOptions: {
        durable: false,
      },
    },
  });

  await app.startAllMicroservices();
  // await app.listen(3001);
  console.log('start app Auth');

  // app.enableCors({
  //   origin: true,
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  //   credentials: true,
  // });

  // const config = new DocumentBuilder()
  //   .setTitle('Swimming app API')
  //   .setDescription('Documentation REST API')
  //   .setVersion('1.0.0')
  //   .addTag('swim_serve')
  //   .build();

  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('/api/docs', app, document);

  // await app.listen(3005, () => {
  //   console.log('start appA');
  // });
}
bootstrap();
