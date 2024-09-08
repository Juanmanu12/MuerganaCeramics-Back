export class CreatUserDto {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    phone: string;
}

export class UpdateUserDto {
    firstname?: string;
    lastname?: string;
    email?: string;
    password?: string;
    phone?: string;
}