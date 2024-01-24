import { NextFunction, Request, Response } from 'express';
import ResponseBuilder from '../../utils/ResponseBuilder';
import media from '../../config/media';

class ControllerUpload {
  upload() {
    return async (req: Request, res: Response, _: NextFunction) => {
      try {
        if (req.file) {
          const fileBase64 = req.file.buffer.toString('base64');
          const file = `data:${req.file.mimetype};base64,${fileBase64}`;
          const resultUpload = await media.storage.uploader.upload(
            file,
            (err: any, result: any) => {
              if (err) {
                return ResponseBuilder.response({
                  code: 403,
                  res,
                  data: 'failed upload to storage',
                });
              }
              return result;
            }
          );

          return ResponseBuilder.response({
            code: 200,
            res,
            data: resultUpload,
          });
        }

        ResponseBuilder.response({
          code: 404,
          res,
          data: 'file not found',
        });
      } catch (error) {
        ResponseBuilder.response({
          code: 500,
          data: 'upload failed',
          res,
        });
      }
    };
  }
}

export default ControllerUpload;