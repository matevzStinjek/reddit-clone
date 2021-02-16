import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { config } from "./config";
import { resolvers } from "./resolvers";

async function bootstrap() {
    await createConnection( config.database );
    const schema = await buildSchema({ resolvers });
    const server = new ApolloServer({ schema });
    const { url } = await server.listen();
    console.log( `🚀 Server ready at ${url}` );
}

bootstrap();
