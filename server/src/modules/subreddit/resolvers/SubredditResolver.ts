import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Subreddit, User } from "models";
import { CreateSubredditInput, FindSubredditInput } from "../signatures";
import { IContext } from "context";
import { SubredditService } from "../service";

@Resolver()
export class SubredditResolver {

    @Query( () => [Subreddit] )
    async getSubreddits( @Ctx() { user }: IContext ): Promise<Subreddit[]> {
        return await SubredditService.readAll( user );
    }

    @Query( () => Subreddit, { nullable: true })
    async getSubreddit( @Arg( "params" ) params: FindSubredditInput, @Ctx() { user }: IContext ): Promise<Subreddit | undefined> {
        return await SubredditService.readOne( user, params );
    }

    @Mutation( () => Subreddit )
    async createSubreddit( @Arg( "data" ) subredditData: CreateSubredditInput, @Ctx() { user }: IContext ): Promise<Subreddit> {
        return await SubredditService.createSubreddit( subredditData, user as User );
    }
}
