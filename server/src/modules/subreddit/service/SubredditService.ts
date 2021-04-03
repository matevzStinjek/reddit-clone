import { Subreddit, User, Guest } from "models";
import { CreateSubreddit, FindSubreddit } from "../signatures";
import { getSubredditQB } from "./subreddit.qb";

export class SubredditService {

    static async readAll( user: User | Guest ): Promise<Subreddit[]> {
        return await getSubredditQB( user ).getMany();
    }

    static async readOne( user: User | Guest, params: FindSubreddit ): Promise<Subreddit | undefined> {
        return await getSubredditQB( user ).where( params ).getOne();
    }

    static async createSubreddit( subredditData: CreateSubreddit, creator: User ): Promise<Subreddit> {
        const subreddit = new Subreddit();
        subreddit.assign( subredditData, creator );
        await subreddit.save();
        return subreddit;
    }

    // util
    static async doesSubredditExist( name: string ): Promise<boolean> {
        const subreddit = await Subreddit.findOne({ where: { id: name.toLowerCase() } });
        return Boolean( subreddit );
    }
}
