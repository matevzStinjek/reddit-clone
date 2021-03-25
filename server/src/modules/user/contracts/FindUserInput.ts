import { InputType, Field } from "type-graphql";

@InputType()
export class FindUserInput {

    @Field({  nullable: true })
    id?: string
    
    @Field({  nullable: true })
    username?: string
}
