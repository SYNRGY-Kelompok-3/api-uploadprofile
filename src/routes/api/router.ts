import { Router } from 'express';

// controllers
import ControllerUpload from '../../controllers/api/ControllerUpload';

import media from '../../config/media';

const router = Router();

const controllerUpload = new ControllerUpload();

router.post(
     '/profil/upload',
     [media.upload.single('profilePicture')],
     controllerUpload.upload()
   );
export default router;