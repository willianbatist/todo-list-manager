import { NextFunction, Request, Response } from 'express';
import { getTasks } from "../services/service.tasks";

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tasks = await getTasks();
    if (tasks.length === 0) res.status(404).json({ message: 'Not Found' });
    return res.status(200).json(tasks);
  } catch (error) {
    return next(error);
  }
};

export const g = {};