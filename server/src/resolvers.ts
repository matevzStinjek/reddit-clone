import { UserResolver } from "modules/user/resolvers/UserResolver";
import { PostResolver } from "modules/post/resolvers/PostResolver";
import { SubredditResolver } from "modules/subreddit/resolvers/SubredditResolver";

export const resolvers = [
    UserResolver,
    PostResolver,
    SubredditResolver,
] as const;
