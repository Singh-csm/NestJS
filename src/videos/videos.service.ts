import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Video } from "./videos.entity";

@Injectable()

export class VideosService{
    constructor(
        @InjectRepository(Video)
        private videosRepository: Repository<Video>,
    ){}

    findAll(): Promise<Video[]>{
        return this.videosRepository.find();
    }

    findOne(id: number): Promise<Video>{
        return this.videosRepository.findOne({ where: { id}});
    }

    create(video: Video): Promise<Video>{
        return this.videosRepository.save(video);
    }
}