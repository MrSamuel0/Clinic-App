import { z } from "zod"

// env variables centralization

const envModel = z.object({
    ACCESS_SECRET: z.string().min(32),
    DATABASE_URL: z.url(),
    PORT: z.coerce.number().default(3000),
})

const parsed = envModel.safeParse(process.env)
if (!parsed.success) {
    console.error("Invalid .env variables", z.treeifyError(parsed.error))
    process.exit(1)
}

export const envConfig = parsed.data