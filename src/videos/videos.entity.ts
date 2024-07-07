import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Video {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    url: string;
}
