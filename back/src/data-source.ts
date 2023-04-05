import "dotenv/config"
import path from "node:path"
import "reflect-metadata"
import { DataSource, DataSourceOptions } from "typeorm"

const dataSourceConfig = (): DataSourceOptions => {

    const entitiesPath: string = path.join(__dirname, "./entities/**.{ts, js}")
    const migrationsPath: string = path.join(__dirname, "./migrations/**.{ts, js}")

    const dbUrl: string | undefined = process.env.DATABASE_URL

    if(!dbUrl) {
        throw new Error("ENV var DATABASE_URL does not exists")
    }

    const nodeEnv: string | undefined  = process.env.NODE_ENV

    if(nodeEnv === "test"){
        return {
            type: "sqlite",
            database: ":memory",
            synchronize: true,
            entities: [entitiesPath]
        }

    }

    return {
        type: "postgres",
        url: process.env.DATABASE_URL!,
        synchronize: false,
        logging: true,
        migrations: [migrationsPath],
        entities: [entitiesPath]
    }
}

const AppDataSource = new DataSource(dataSourceConfig())

export {AppDataSource}