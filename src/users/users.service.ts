import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./users.entity";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ){}

    async create(user: User): Promise<User> {
        return this.usersRepository.save(user);
    }

    async findOneByEmail(email: string): Promise<User> {
        return this.usersRepository.findOne({where: {email}});
    }
}
