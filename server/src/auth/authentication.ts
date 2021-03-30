import { User, Guest } from "models";

export async function authenticate( token: string ): Promise<User | Guest> {
    token; // temp
    return await User.findOne({ where: { id: 3 } }) || new Guest(); // TODO: replace mock
}
