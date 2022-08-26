import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { getTasks, createTask } from "../services/service.tasks";

export const getAll = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const tasks = await getTasks();
    if (tasks.length === 0) res.status(StatusCodes.NOT_FOUND).json({ message: 'Not Found' });
    return res.status(StatusCodes.OK).json(tasks);
  } catch (error) {
    return next(error);
  }
};

export const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const task = await createTask(req.body);
    return res.status(StatusCodes.CREATED).json(task);
  } catch (error) {
    return next(error);
  }
}
