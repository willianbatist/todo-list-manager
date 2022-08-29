import TasksRepository from "../repository/tasks.repository";
import TasksService from "../services/service.tasks";
import TasksController from "../controllers/controller.task";

export const TasksFactory = () => {
  const repository = new TasksRepository();
  const service = new TasksService(repository);
  const controller = new TasksController(service);

  return controller;
}