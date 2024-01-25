import request from 'supertest';
import express, { Express } from 'express';
import multer from 'multer';
import path from 'path';
import ControllerUpload from '../controllers/api/ControllerUpload';

describe('ControllerUpload', () => {
  let app: Express;

  beforeEach(() => {
    app = express();
    const upload = multer();
    const controllerUpload = new ControllerUpload();

    app.post('/upload', upload.single('file'), controllerUpload.upload());
  });

  it('should respond with 200 and upload result when file is provided', async () => {
    const response = await request(app)
      .post('/upload')
      .attach('file', path.join(__dirname, '../../logos_netflix.png'));

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
  });

  it('should respond with 404 when no file is provided', async () => {
    const response = await request(app).post('/upload');

    expect(response.status).toBe(404);
  });
});
