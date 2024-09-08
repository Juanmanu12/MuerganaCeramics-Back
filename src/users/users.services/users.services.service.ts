import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserSchema, Users } from '../models/users.models';
import { CreatUserDto, UpdateUserDto } from '../dtos/user.dtos';


@Injectable()
export class UsersServices {
    constructor(@InjectModel(Users.name) private modelUser: Model<Users>) {}

    async create(createUserDto: CreatUserDto): Promise<Users> {
        const newUser = new this.modelUser(createUserDto);
        return newUser.save();
    }

    findAll(): Promise<Users[]> {
        return this.modelUser.find().exec();
    }

    findOne(id: string): Promise<Users> {
        
        return
    }

    update(id: string, updateUserDto: UpdateUserDto) {}

    remove(id: string) {}
}
