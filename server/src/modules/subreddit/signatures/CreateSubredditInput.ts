import { Length, MaxLength } from "class-validator";
import { Field, InputType } from "type-graphql";
import { IsSubredditNameAvailable } from "../validators";

export interface CreateSubreddit {

    name: string;

    topic?: string;
}

@InputType()
export class CreateSubredditInput implements CreateSubreddit {

    @Field()
    @Length( 1, 64 )
    @IsSubredditNameAvailable()
    name: string;

    @Field()
    @MaxLength( 256 )
    topic?: string;
}
