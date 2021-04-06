import { PostResolver } from "modules/post/resolvers/PostResolver";
import { SubredditResolver } from "modules/subreddit/resolvers/SubredditResolver";
import { UserResolver } from "modules/user/resolvers/UserResolver";

export const resolvers = [
    PostResolver,
    SubredditResolver,
    UserResolver,
] as const;
