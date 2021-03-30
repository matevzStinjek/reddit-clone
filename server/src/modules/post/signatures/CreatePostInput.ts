import { InputType, Field } from "type-graphql";
import { Length, MaxLength } from "class-validator";

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
    subredditId: string;
}
