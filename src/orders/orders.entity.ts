import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from 'src/users/users.entity';
import { Video } from 'src/videos/videos.entity';

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=>User)
    user: User;

    @ManyToOne(()=>Video)
    video:Video;

    @Column()
    purchaseDate: Date;
}