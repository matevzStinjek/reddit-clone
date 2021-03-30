import { getRepository, SelectQueryBuilder } from "typeorm";
import { User, Guest } from "models";
import { RoleQBConditions, addQueryBuilderConditions } from "modules/shared/util/qb.util";

export const getUserQB = ( user: User | Guest ) : SelectQueryBuilder<User> => {
    const qb = getRepository( User ).createQueryBuilder( "user" );
    addQueryBuilderConditions( qb, user.roles, roleSpecificQueryBuilderConditions );
    return qb;
};

const roleSpecificQueryBuilderConditions: RoleQBConditions = {
    admin: ( qb: SelectQueryBuilder<User> ): void => {
        qb.orWhere( "1=1" );
    },
    moderator: ( qb: SelectQueryBuilder<User> ): void => {
        qb.orWhere( "1=1" );
    },
    user: ( qb: SelectQueryBuilder<User> ): void => {
        qb.orWhere( "1=1" );
    },
    guest: ( qb: SelectQueryBuilder<User> ): void => {
        qb.orWhere( "1=1" );
    },
} as const;
