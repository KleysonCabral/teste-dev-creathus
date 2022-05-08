import { prisma } from '../database/prisma';
import { Movie } from '@prisma/client';

interface MovieModelCreate {
  title: string;
  author: string;
  description: string;
  image: string;
}

export class MovieModel {
  
  async create({ title, description, author, image }: MovieModelCreate): Promise<void> {
    await prisma.movie.create({
      data: {
        title, 
        description, 
        author,
        image
      }
    });
  }

  async list(): Promise<Movie[]> {
    return await prisma.movie.findMany({
      orderBy: {
        created_at: 'desc'
      }
    });
  }
}