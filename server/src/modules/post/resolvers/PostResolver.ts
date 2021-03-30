import { Query, Resolver, Arg, Mutation, Ctx, Root, FieldResolver } from "type-graphql";
import { Post, User } from "models";
import { CreatePostInput, FindPostInput } from "../signatures";
import { PostService } from "../service";
import { IContext } from "context";

@Resolver( () => Post )
export class PostResolver {

    @Query( () => [Post] )
    async getPosts( @Ctx() { user }: IContext ): Promise<Post[]> {
        return await PostService.readAll( user );
    }

    @Query( () => Post, { nullable: true })
    async getPost( @Arg( "params" ) params: FindPostInput, @Ctx() { user }: IContext ): Promise<Post | undefined> {
        return await PostService.readOne( user, params );
    }

    // @Authorize()
    @Mutation( () => Post )
    async createPost( @Arg( "data" ) postData: CreatePostInput, @Ctx() { user }: IContext ): Promise<Post> {
        return await PostService.create( postData, user as User );
    }

    /**
     * Field resolvers
     */

    @FieldResolver()
    async author( @Root() post: Post ): Promise<User> {
        return await post.author;
    }
}
