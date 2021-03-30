import { Query, Resolver, FieldResolver, Root, Mutation, Arg, Ctx, ResolverInterface } from "type-graphql";
import { User } from "models";
import { CreateUserInput, FindUserInput } from "../signatures";
import { UserService } from "../service";
import { IContext } from "context";

@Resolver( () => User )
export class UserResolver implements ResolverInterface<User>  {

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

    /**
     * Field resolvers
     */

    @FieldResolver()
    subredditSubscriptions( @Root() user: User ): number[] {
        user;
        return [ 1, 2, 3 ];
    }

    // @FieldResolver()
    // posts(): void {
    //     return;
    // }

    // @FieldResolver()
    // comments(): void {
    //     return;
    // }
}
