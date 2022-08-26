import { Router } from 'express';
import { getAll, create } from '../controllers/controller.task';

const taskRouter = Router();

taskRouter.get('/tasks', getAll);
taskRouter.post('/tasks', create)

export default taskRouter;