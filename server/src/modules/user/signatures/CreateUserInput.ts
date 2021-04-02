import { InputType, Field } from "type-graphql";
import { Length } from "class-validator";
import { IsPasswordValid, IsUsernameAvailable } from "../validators";

export interface CreateUser {

    username: string;

    password: string;
}

@InputType()
export class CreateUserInput implements CreateUser {

    @Field()
    @Length( 4, 16 )
    @IsUsernameAvailable()
    username: string;

    @Field()
    @Length( 8, 32 )
    @IsPasswordValid()
    password: string;
}
