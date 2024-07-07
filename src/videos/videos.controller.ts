import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { VideosService } from "./videos.service";
import { Video } from "./videos.entity";

@Controller('videos')
export class VideosController {
    constructor(private videosService: VideosService){}

        @Get()
        findAll(){
            return this.videosService.findAll();
        }

        @Get(':id')
        findOne(@Param('id') id:number){
            return this.videosService.findOne(id);
        }

        @Post()
        create(@Body() video: Video){
            return this.videosService.create(video);
        }
}