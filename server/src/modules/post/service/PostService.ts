import { Post, User } from "models";
import { Guest } from "modules/user/models/Guest";
import { CreatePost, FindPost } from "../signatures";
import { getPostQB } from "./post.qb";

export class PostService {

    static async readAll( user: User | Guest ): Promise<Post[]> {
        return await getPostQB( user ).getMany();
    }

    static async readOne( user: User | Guest, { id }: FindPost ): Promise<Post | undefined> {
        return await getPostQB( user ).where({ id }).getOne();
    }

    static async create( postData: CreatePost, user: User ): Promise<Post> {
        const post = new Post();
        post.assign( postData, user );
        await post.save();
        return post;
    }
}