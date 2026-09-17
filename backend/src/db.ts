import { createDb } from "@mega-header-mega-header-verity/db";
import { env } from "./config/env.js";

export const db = createDb(env.DATABASE_URL);
