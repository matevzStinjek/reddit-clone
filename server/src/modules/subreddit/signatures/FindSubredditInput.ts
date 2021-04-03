import { Length } from "class-validator";
import { Field, InputType } from "type-graphql";

export interface FindSubreddit {

    id?: string;

    name?: string;
}

@InputType()
export class FindSubredditInput implements FindSubreddit {

    @Field({ nullable: true })
    @Length( 1, 64 )
    id?: string;

    @Field({ nullable: true })
    @Length( 1, 64 )
    name?: string;
}
