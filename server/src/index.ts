import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { config } from "./config";
import { resolvers } from "./resolvers";
import { authorization as authChecker } from "./auth";
import { contextProvider as context } from "./context";

async function bootstrap() {
    await createConnection( config.database );

    const schema = await buildSchema({ resolvers, authChecker });

    const server = new ApolloServer({ schema, context });

    const { url } = await server.listen();
    console.log( `🚀 Server ready at ${url}` );
}

bootstrap().catch( console.error );
