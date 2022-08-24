import { Body, Controller, Get, Post } from '@nestjs/common';
import { createTaskDto } from './dto/create-task-dto';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(@Body() createTaskdto: createTaskDto): Task {
    return this.tasksService.createTask(createTaskdto);
  }
}
