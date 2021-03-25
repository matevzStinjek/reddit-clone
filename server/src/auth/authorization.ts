import { AuthChecker } from "type-graphql";
import { User } from "models";
import { intersection } from "lodash";

interface ContextType {
    user: User;
}

export const authorization: AuthChecker<ContextType> = (
    { context },
    authorizedRoles,
) => {
    const userRoles = context?.user.roles || [];
    const matchingRoles = intersection( authorizedRoles, userRoles );
    if ( !matchingRoles.length ) {
        return false;
    }

    // todo: lookup in authorization system
    return Boolean( matchingRoles.length );
};
