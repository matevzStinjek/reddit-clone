import { UserResolver } from "modules/user/resolvers/UserResolver";
import { PostResolver } from "modules/post/resolvers/PostResolver";

export const resolvers = [
    UserResolver,
    PostResolver,
] as const;
