import multer, { Options } from 'multer';
import path from 'path';

export const multerConfig: Options = {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', 'uploads'),
    filename: (req, file, callback) => {
      callback(null, `${Date.now()}-${file.originalname}`);
    }
  }),

  fileFilter: (req, file, callback) => {
    const mimeTypes = [
      'image/jpeg',
      'image/png'
    ];

    if(!mimeTypes.includes(file.mimetype)) {
      return callback(null, false);
    }

    callback(null, true);
  }
}