import { InputType, Field } from "type-graphql";
import { Length, MaxLength } from "class-validator";
import { DoesSubredditExist } from "../validators";

export interface CreatePost {

    title: string;

    content: string;

    subredditId: string;
}

@InputType()
export class CreatePostInput implements CreatePost {

    @Field()
    @Length( 1, 256 )
    title: string;

    @Field()
    @MaxLength( 1020 )
    content: string;

    @Field()
    @DoesSubredditExist()
    subredditId: string;
}
