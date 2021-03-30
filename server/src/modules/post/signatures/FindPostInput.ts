import { Field, InputType } from "type-graphql";

export interface FindPost {

    id: string;
}

@InputType()
export class FindPostInput implements FindPost {

    @Field()
    id: string;
}
