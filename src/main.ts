import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Log all available endpoints
  const server = app.getHttpServer();
  const router = server._events.request._router;
  if (router && router.stack) {
    console.log('Available endpoints:');
    router.stack
      .filter((layer) => layer.route)
      .forEach((layer) => {
        const route = layer.route;
        const methods = Object.keys(route.methods).join(', ').toUpperCase();
        console.log(`${methods} ${route.path}`);
      });
  } else {
    console.log('No endpoints found or router not available.');
  }

  await app.listen(3000, '0.0.0.0');
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap(); 