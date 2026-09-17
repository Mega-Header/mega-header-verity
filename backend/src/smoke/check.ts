import { createDb } from "@mega-header-mega-header-verity/db";
const db = createDb("postgres://mega-header-mega-header-verity:mega-header-mega-header-verity@localhost:5433/mega-header-mega-header-verity");
const rows = await db
  .selectFrom("submission")
  .select(["id", "status", "chain_submission_id", "chain_tx_hash", "updated_at"])
  .orderBy("submitted_at")
  .execute();
console.log(JSON.stringify(rows, null, 2));
await db.destroy();
