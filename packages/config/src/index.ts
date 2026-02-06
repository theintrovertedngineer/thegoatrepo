import { env } from "./env.schema";

export const config = {
	database: {
    prodUrl: env.DATABASE_URL,
    devUrl: env.DEV_DATABASE_URL,
	},
	server: {
		port: env.SERVER_PORT,
		isDev: env.BUN_ENV === "development",
		isProd: env.BUN_ENV === "production",
		isTest: env.BUN_ENV === "test",
	},
} as const;


export type Config = typeof config;
