import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

interface DatabaseConfig extends PostgresConnectionOptions {
    type: any; // eslint-disable-line @typescript-eslint/no-explicit-any
    ssl: boolean;
}
interface Config {
    port: number;
    debugLogging: boolean;
    database: DatabaseConfig;
    cronJobExpression: string;
    costumerPlatformUrl: string;
}

const isDevMode = process.env.NODE_ENV == "development";
isDevMode && console.log( "🔧 development mode" );

const config: Config = {
    debugLogging: isDevMode,
    port: +( process.env.DB_PORT || 5432 ),
    database: {
        type: process.env.DB_TYPE || "postgres",
        host: process.env.DB_HOST || "localhost",
        username: process.env.DB_USERNAME || "postgres",
        password: process.env.DB_PASSWORD || "postgres",
        database: process.env.DB_NAME || "reddit_clone",
        entities: isDevMode ? [ "src/modules/**/models/*.ts" ] : [ `${ __dirname }/dist/modules/**/models/*.js` ],
        migrations: isDevMode ? [ "src/db/migrations/**/*.ts" ] : [ `${ __dirname }/dist/db/migrations/**/*.js` ],
        synchronize: true, // temp
        ssl: !isDevMode,
        migrationsRun: !isDevMode || process.env.MAKE_MIGRATIONS == "true" || true,
        logging: false,
        cli: {
            migrationsDir: !isDevMode ? "./src/db/migrations" : `${ __dirname }/dist/db/migrations/**/*.js`,
        },
    },
    cronJobExpression: "0 * * * *",
    costumerPlatformUrl: process.env.COSTUMER_PLATFORM_URL || "http://localhost:3001/",   // This should point to our gui url where we serve data for costumers of services
};

export { config };
