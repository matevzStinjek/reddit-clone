import { User, Guest } from "models";
import { getUserQB }  from "./user.qb";
import { CreateUser, FindUser } from "../signatures";

export class UserService {

    static async readAll( user: User | Guest ): Promise<User[]> {
        return await getUserQB( user ).getMany();
    }

    static async readOne( user: User | Guest, params: FindUser ): Promise<User | undefined>{
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
