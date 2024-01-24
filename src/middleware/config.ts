import { v2 as cloudinaryV2 } from 'cloudinary';

cloudinaryV2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'ddzo9brne',
  api_key: process.env.CLOUDINARY_API_KEY || '626391368456686',
  api_secret: process.env.CLOUDINARY_API_SECRET || 'MIJVH1OhAZngYr6oRSYGlm5i6vc',
});

export default cloudinaryV2;