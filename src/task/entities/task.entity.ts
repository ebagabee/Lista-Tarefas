import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('task')
export class TaskEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({ type: 'timestamptz', nullable: true })
    deadline: Date
}
