import { Query, Resolver } from "type-graphql";

@Resolver()
export class UserResolver {
    
    @Query( () => String )
    async  hello(): Promise<string> {
        return "world";
    }
}
