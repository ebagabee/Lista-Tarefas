import { Injectable, HttpException, Inject } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task-dto';
import { UpdateTaskDto } from './dto/update-task-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskEntity } from './entities/task.entity'

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(TaskEntity)
        private readonly taskRepository: Repository<TaskEntity>,
    ) { }

    async create(
        createTaskDto: CreateTaskDto,
    ): Promise<TaskEntity> {
        const taskData = this.taskRepository.create(createTaskDto);
        return await this.taskRepository.save(taskData);
    }

    async findAll(): Promise<TaskEntity[]> {
        return await this.taskRepository.find();
    }

    async findOne(id: number): Promise<TaskEntity> {
        const taskData = await this.taskRepository.findOneBy({ id });

        if (!taskData) {
            throw new HttpException('Usuário não encontrado', 404);
        }

        return taskData;
    }

    async update(id: number, UpdateTaskDto: UpdateTaskDto,): Promise<TaskEntity> {
        const existingTask = await this.findOne(id);
        const taskData = this.taskRepository.merge(existingTask, UpdateTaskDto);

        return await this.taskRepository.save(taskData);
    }

    async remove(id: number): Promise<TaskEntity> {
        const existingTask = await this.findOne(id);
        return await this.taskRepository.remove(existingTask);
    }
}
