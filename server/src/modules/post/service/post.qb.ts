import { getRepository, SelectQueryBuilder } from "typeorm";
import { RoleQBConditions, addQueryBuilderConditions } from "modules/shared/util/qb.util";
import { Post, User, Guest } from "models";

export const getPostQB = ( user: User | Guest ) : SelectQueryBuilder<Post> => {
    const qb = getRepository( Post ).createQueryBuilder( "post" );
    addQueryBuilderConditions( qb, user.roles, roleSpecificQueryBuilderConditions );
    return qb;
};

const roleSpecificQueryBuilderConditions: RoleQBConditions = {
    admin: ( qb: SelectQueryBuilder<Post> ): void => {
        qb.orWhere( "1=1" );
    },
    moderator: ( qb: SelectQueryBuilder<Post> ): void => {
        qb.orWhere( "1=1" );
    },
    user: ( qb: SelectQueryBuilder<Post> ): void => {
        qb.orWhere( "1=1" );
    },
    guest: ( qb: SelectQueryBuilder<Post> ): void => {
        qb.orWhere( "1=1" );
    },
} as const;
