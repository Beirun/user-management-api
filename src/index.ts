import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import user from './routes/user'
import { errorHandler } from './_middleware/error-handler';
const app = express();
dotenv.config();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/users',user)

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    errorHandler(err, req, res, next);
  });
  
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 5000;
app.listen(port, () => console.log(`Server listening on port ${port}`));