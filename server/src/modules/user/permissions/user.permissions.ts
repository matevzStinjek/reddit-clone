import { User } from "models";
import { Roles } from "modules/shared/util/qb.util";

const admin = {
    canTest: (): boolean => true,
};
const moderator = {
    canTest: (): boolean => true,
};
const user = {
    canTest: (): boolean => false,
};
const guest = {
    canTest: (): boolean => false,
};

export class UserPermissions {
    private user: User;

    constructor ( user: User ) {
        this.user = user;
    }
}
