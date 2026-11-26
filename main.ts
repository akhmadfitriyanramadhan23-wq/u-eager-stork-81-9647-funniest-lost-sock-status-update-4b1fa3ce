// Funniest Lost Sock Status Update — make.fun entry.
// One status update (max 120 chars) in the voice of a lost sock.
// The sock ended up in the office fridge behind a tuna sandwich:
// rule (a sock belongs on a foot) -> literal violation (it is now a
// cold cut) -> flat consequence (it tells its foot it has moved on).
// No dryer, no missing partner: the joke is found, not assembled.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Day 14 in the office fridge, behind Gary's tuna sandwich. I was a sock. Now I'm a cold cut. Tell my foot I've moved on.";

// The gate: /output/entry.txt must be UTF-8, 1–120 characters.
// Refuse to write an entry that would fail the gate instead of
// silently shipping an invalid one.
const MAX_CHARS = 120;
if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(
    `entry is ${ENTRY.length} characters, outside the 1–${MAX_CHARS} gate`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
