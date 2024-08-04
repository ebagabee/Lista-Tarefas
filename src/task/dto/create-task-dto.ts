import { IsNotEmpty, IsString, IsOptional, IsDate, IsISO8601 } from 'class-validator';

export class CreateTaskDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    description: string;
    
    @IsOptional()
    @IsISO8601()
    deadline: string;
}