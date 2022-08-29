import { Router } from 'express';
import { TasksFactory } from '../factory';

const taskRouter = Router();

taskRouter.get('/tasks',(req, res, next) => {
  TasksFactory().findAll(req, res, next);
});

taskRouter.post('/tasks', (req, res, next) => {
  TasksFactory().create(req, res, next);
})

taskRouter.put('/tasks/:id', (req, res, next) => {
  TasksFactory().update(req, res, next);
})

taskRouter.delete('/tasks/:id', (req, res, next) => {
  TasksFactory().delete(req, res, next);
})

export default taskRouter;