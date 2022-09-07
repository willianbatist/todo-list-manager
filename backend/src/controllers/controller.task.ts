import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ITaskService } from '../interfaces/ITask';


export default class TasksController {
  constructor(private service: ITaskService) {
    this.service = service;
  }

  async findAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const tasks = await this.service.findAll();
      return res.status(StatusCodes.OK).json(tasks);
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const task = await this.service.create(req.body);
      return res.status(StatusCodes.CREATED).json(task);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const task = await this.service.update(id, req.body);
      return res.status(StatusCodes.CREATED).json(task);
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const task = await this.service.delete(id);
      return res.status(StatusCodes.OK).json(task);
    } catch (error) {
      next(error);
    }
  }

}
