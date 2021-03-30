import { Query, Resolver, Mutation, Arg, Ctx } from "type-graphql";
import { User } from "models";
import { CreateUserInput, FindUserInput } from "../signatures";
import { UserService } from "../service";
import { IContext } from "context";

@Resolver()
export class UserResolver {

    @Query( () => [User] )
    async getUsers( @Ctx() { user }: IContext ): Promise<User[]> {
        return await UserService.readAll( user );
    }

    @Query( () => User, { nullable: true })
    async getUser( @Arg( "params" ) params: FindUserInput, @Ctx() { user }: IContext ): Promise<User | undefined> {
        return await UserService.readOne( user, params );
    }

    @Mutation( () => User )
    async createUser( @Arg( "data" ) userData: CreateUserInput ): Promise<User> {
        return await UserService.create( userData );
    }
}
