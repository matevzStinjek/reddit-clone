import { Query, Resolver, FieldResolver, Root, Mutation, Arg, Ctx, ResolverInterface } from "type-graphql";
import { User } from "models";
import { CreateUserInput, FindUserInput } from "../signatures";
import { UserService } from "../service";

@Resolver( () => User )
export class UserResolver implements ResolverInterface<User>  {

    @Query( () => [User] )
    async findUsers( @Ctx() { user }: { user: User }): Promise<User[]> {
        return await UserService.findAll( user );
    }

    @Query( () => User )
    async findUser( @Arg( "params" ) params: FindUserInput, @Ctx() { user }: { user: User }): Promise<User | undefined> {
        return await UserService.findOne( user, params );
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
