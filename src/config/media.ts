import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';

class Media {
  private _upload;
  private _storage;
  constructor() {
    this._upload = multer({ storage: multer.memoryStorage() });
    cloudinary.config({
      cloud_name: 'drmf1woku',
      api_key: '173446257541337',
      api_secret: 'tFYHheuFr78npgtGrEl4ozQSWUM',
    });
    this._storage = cloudinary;
  }

  get upload() {
    return this._upload;
  }

  get storage() {
    return this._storage;
  }
}

export default new Media();