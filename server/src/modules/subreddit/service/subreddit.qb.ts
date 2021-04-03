import { getRepository, SelectQueryBuilder } from "typeorm";
import { RoleQBConditions, addQueryBuilderConditions } from "modules/shared/util/qb.util";
import { Subreddit, User, Guest } from "models";

export const getSubredditQB = ( user: User | Guest ) : SelectQueryBuilder<Subreddit> => {
    const qb = getRepository( Subreddit ).createQueryBuilder( "subreddit" );
    addQueryBuilderConditions( qb, user.roles, roleSpecificQueryBuilderConditions );
    return qb;
};

const roleSpecificQueryBuilderConditions: RoleQBConditions = {
    admin: ( qb: SelectQueryBuilder<Subreddit> ): void => {
        qb.orWhere( "1=1" );
    },
    moderator: ( qb: SelectQueryBuilder<Subreddit> ): void => {
        qb.orWhere( "1=1" );
    },
    user: ( qb: SelectQueryBuilder<Subreddit> ): void => {
        qb.orWhere( "1=1" );
    },
    guest: ( qb: SelectQueryBuilder<Subreddit> ): void => {
        qb.orWhere( "1=1" );
    },
} as const;
