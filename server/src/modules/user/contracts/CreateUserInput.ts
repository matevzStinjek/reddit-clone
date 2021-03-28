import { InputType, Field } from "type-graphql";
import { IsString, Length } from "class-validator";
import { IsPasswordValid, IsUsernameAvailable } from "../validators";

@InputType()
export class CreateUserInput {

    @Field()
    @Length( 4, 16 )
    @IsUsernameAvailable()
    username: string;

    @Field()
    @Length( 8, 32 )
    @IsPasswordValid()
    password: string;
}
