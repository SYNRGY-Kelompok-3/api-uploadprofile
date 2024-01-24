import { Request, Response, NextFunction } from 'express';
import cloudinary from './config';

declare global {
  namespace Express {
    interface Request {
      cloudinary: typeof cloudinary;
    }
  }
}

export const cloudinaryMiddleware = (req: Request, res: Response, next: NextFunction) => {
  req.cloudinary = cloudinary;
  next();
};
