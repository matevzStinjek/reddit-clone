import { InputType, Field } from "type-graphql";

@InputType()
export class CreateUserInput {

    @Field()
    username: string;

    @Field()
    password: string;
}
