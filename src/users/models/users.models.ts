import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<Users> 

@Schema()
export class Users {
    @Prop()
    id: string;

    @Prop()
    firstname: string;

    @Prop()
    lastname: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    phone: string;
}

export const UserSchema = SchemaFactory.createForClass(Users);