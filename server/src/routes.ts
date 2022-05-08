import { Router, Request, Response } from 'express';
import multer from 'multer';
import { MovieController } from './controllers/MovieController';
import { multerConfig } from './config/multer';

export const routes = Router();

const upload = multer(multerConfig);

routes.get('/', (req: Request, res: Response) => {
  return res.status(200).json({ title: 'Server is running' });
});

routes
  .get('/movies', MovieController.index)
  .post('/movies', upload.single('image'), MovieController.store);