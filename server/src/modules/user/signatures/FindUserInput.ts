import { InputType, Field } from "type-graphql";

export interface FindUser {

    id?: string
    
    username?: string
}

@InputType()
export class FindUserInput implements FindUser {

    @Field({ nullable: true })
    id?: string
    
    @Field({ nullable: true })
    username?: string
}
