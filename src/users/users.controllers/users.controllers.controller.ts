import { Controller, Body, Param, Post, Put, Delete, Get } from '@nestjs/common';
import { UsersServices } from '../users.services/users.services.service';
import { CreatUserDto, UpdateUserDto } from '../dtos/user.dtos';

@Controller('users')
export class UsersControllers {
constructor(private readonly usersService: UsersServices) {}

@Post('')
    createUser(@Body() createUser: CreatUserDto) {
        return this.usersService.create(createUser);
    }

@Get('')
    findUsers(){
        return this.usersService.findAll()
    }

@Get(':id')
    findUniqueUser(@Param() userId: string){
        return this.usersService.findOne(userId)
    }

@Put(':id')
    updateUser(@Param() userId: string, @Body() updateUser: UpdateUserDto){
        return this.usersService.update(userId, updateUser)
    }


@Delete(':id')
    removeUser(@Param() userId: string){
        return this.usersService.remove(userId)
    }
}
