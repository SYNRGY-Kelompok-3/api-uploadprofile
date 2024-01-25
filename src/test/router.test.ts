import request from 'supertest';
import express, { Express } from 'express';
import multer from 'multer';
import path from 'path';
import media from '../config/media';
import ControllerUpload from '../controllers/api/ControllerUpload';

describe('Profile Upload Route', () => {
  let app: Express;

  beforeEach(() => {
    app = express();
    const upload = multer();
    const controllerUpload = new ControllerUpload();

    app.post(
      '/profil/upload',
      [media.upload.single('profilePicture')],
      controllerUpload.upload()
    );
  });

  it('should respond with 200 and upload result when file is provided', async () => {
    const response = await request(app)
      .post('/profil/upload')
      .attach(
        'profilePicture',
        path.join(__dirname, '../../logos_netflix.png')
      );

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
  });

  it('should respond with 404 when no file is provided', async () => {
    const response = await request(app).post('/profil/upload');

    expect(response.status).toBe(404);
  });
});
