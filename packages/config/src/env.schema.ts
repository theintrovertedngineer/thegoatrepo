import { z } from "zod";

const envSchema = z.object({
  // Database
  DATABASE_URL: z.url().startsWith("postgresql://"),
  DEV_DATABASE_URL: z.url().startsWith("postgresql://"),
  // Server
	SERVER_PORT: z.coerce.number().default(3000),
  BUN_ENV: z.enum(["development", "production", "test"]).default("development"),
});

export type Env = z.infer<typeof envSchema>;

function validateEnv(): Env {
  const result = envSchema.safeParse(Bun.env);

  if (!result.success) {
    console.error("❌ Invalid environment variables:");
    console.error(z.treeifyError(result.error));
    process.exit(1);
  }

  return result.data;
}

export const env = validateEnv();
