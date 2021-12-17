import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }))
    await app.init();
  });

  afterAll(async () => {
    await app.close()
  })
  describe('/cats (GET)', () => {
    it('/ (GET)', async () => {
      await request(app.getHttpServer())
        .get('/cats')
        .expect(HttpStatus.OK)
    });
  })
});
