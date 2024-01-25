import { NextFunction, Request, Response } from 'express';
import ResponseBuilder from '../../utils/ResponseBuilder';
import media from '../../config/media';

class ControllerUpload {
  upload() {
    return async (req: Request, res: Response, _: NextFunction) => {
      try {
        let resultUpload;

        if (req.file) {
          const fileBase64 = req.file.buffer.toString('base64');
          const file = `data:${req.file.mimetype};base64,${fileBase64}`;
          
          resultUpload = await new Promise((resolve, reject) => {
            media.storage.uploader.upload(file, (err: any, result: any) => {
              if (err) {
                reject(err);
              } else {
                resolve(result);
              }
            });
          });

          return ResponseBuilder.response({
            code: 200,
            res,
            data: resultUpload,
          });
        } else {
          return ResponseBuilder.response({
            code: 404,
            res,
            data: 'file not found',
          });
        }
      } catch (error) {
        return ResponseBuilder.response({
          code: 500,
          data: 'upload failed',
          res,
        });
      }
    };
  }
}

export default ControllerUpload;
