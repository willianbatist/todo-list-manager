import { Router } from 'express';
import { getAll } from '../controllers/controller.task';

const taskRouter = Router();

taskRouter.get('/tasks', getAll);

export default taskRouter;