import { SelectQueryBuilder } from "typeorm";
import { Roles } from "modules/shared/signatures/enums";

type RoleQBSignature = ( qb: SelectQueryBuilder<any> ) => void;

export type RoleQBConditions = Record<Roles, RoleQBSignature>;

export const addQueryBuilderConditions = (
    qb: SelectQueryBuilder<any>,
    roles: string[],
    roleSpecificQueryBuilderConditions: RoleQBConditions,
): void => {
    qb.where( "0=1" ); // start with limiting all results and then adding them with roles

    roles.forEach( addRoleSpecificQueryBuilderCondition );

    function addRoleSpecificQueryBuilderCondition( role: string ): void {
        if ( hasKey( roleSpecificQueryBuilderConditions, role ) ) {
            roleSpecificQueryBuilderConditions[role]( qb );
        }
    }
    function hasKey<O>( obj: O, key: keyof any ): key is keyof O {
        return key in obj;
    }
};
