import { IsNotEmpty, IsString, IsOptional, IsDate, IsISO8601 } from 'class-validator';

export class CreateTaskDto {
    // titulo
    @IsNotEmpty()
    @IsString()
    title: string;

    // descricao
    @IsOptional()
    @IsString()
    description: string;
    
    // deadline
    @IsOptional()
    @IsISO8601()
    deadline: string;
}