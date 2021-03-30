import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { config } from "./config";
import { resolvers } from "./resolvers";
import { authorization as authChecker } from "./auth";
import { contextProvider as context } from "./context";
import { ApolloServerLoaderPlugin } from "type-graphql-dataloader";
import { getConnection } from "typeorm";

async function bootstrap() {
    await createConnection( config.database );

    const schema = await buildSchema({ resolvers, authChecker });
    const plugins = [
        ApolloServerLoaderPlugin({
            typeormGetConnection: getConnection,
        }),
    ];

    const server = new ApolloServer({ schema, context, plugins });

    const { url } = await server.listen();
    console.log( `🚀 Server ready at ${url}` );
}

bootstrap().catch( console.error );
