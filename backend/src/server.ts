import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { StatusCodes } from 'http-status-codes';
import taskRouter from './routes/tasks.routes';
import 'dotenv/config';
import 'express-async-errors';

const app = express();
app.use(cors())
app.use(express.json());

const PORT = process.env.PORT_SERVER;

app.get('/', (_req: Request, res: Response) => {
  res.status(StatusCodes.OK).send('welcome to api todo-list-manager')
});

app.use(taskRouter);

app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
  const { name, message, details } = err as any;
  console.log(`name: ${name}`);

  switch (name) {
    case 'ValidationError':
      res.status(400).json({ message: details[0].message });
      break;
    case 'NotFoundError':
      res.status(404).json({ message });
      break;
    case 'ConflictError':
      res.status(409).json({ message });
      break;
    default:
      console.error(err);
      res.sendStatus(500);
  }

  next();
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});