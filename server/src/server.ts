import express from 'express';
import { routes } from './routes';
import cors from 'cors';
import path from 'path';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/images', express.static(path.join(__dirname, 'uploads')));

app.listen(process.env.PORT || 3333, () => {
  console.log('HTTP server is running in port ' + (process.env.PORT || 3333));
});
