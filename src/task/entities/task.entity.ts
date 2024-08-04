import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class TaskEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    deadline: Date
}
