import { User } from "models";
import { getUserQB }  from "./user.qb";
import { CreateUser, FindUser } from "../contracts";

export class UserService {

    static async findAll( user: User ): Promise<User[]> {
        return await getUserQB( user ).getMany();
    }

    static async findOne( user: User, params: FindUser ): Promise<User | undefined>{
        return await getUserQB( user ).where( params ).getOne();
    }

    static async create( userData: CreateUser ): Promise<User> {
        const user = new User();
        user.assign( userData );
        await user.save();
        return user;
    }

    // util
    static async doesUsernameExist( username: string ): Promise<boolean> {
        const user = await User.findOne({ where: { username } });
        return Boolean( user );
    }
}
