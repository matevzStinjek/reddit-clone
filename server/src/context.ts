import { Request } from "express";
import { User, Guest } from "models";
import { authenticate } from "auth";

export interface IContext {
    user: User | Guest
}

export const contextProvider = async ({ req }: { req: Request }): Promise<IContext> => {
    const token = req?.headers?.authorization || "";
    const user = await authenticate( token );

    const ctx: IContext = {
        user,
    };
    return ctx;
};
