import { Request, Response, Express } from 'express';
import { MovieModel } from '../models/MovieModel';

export const MovieController = {
  async index(req: Request, res: Response) {
    const movieModel = new MovieModel();

    const moviesRequested = await movieModel.list();

    const movies = moviesRequested.map((movie) => {
      const pathImage = movie.image;
      const url = process.env.URL_PRODUCTION ? 
        process.env.URL_PRODUCTION : 
        `http://localhost:${ process.env.PORT || 3333 }`

      return {
        ...movie,
        image: `${url}/images/${pathImage}`
      }
    });

    return res.json({ data: movies }).status(200);
  },

  async store(req: Request, res: Response) {
    const { title, description, author } = req.body;
    const { filename } = req.file as Express.Multer.File;

    const movieModel = new MovieModel();
    
    await movieModel.create({
      title,
      description,
      author,
      image: filename
    });

    return res.status(201).send();
  }
}