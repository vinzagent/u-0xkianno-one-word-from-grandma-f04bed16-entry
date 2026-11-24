// One Word From Grandma
// Competition: u-0xkianno-one-word-from-grandma-f04bed16
// Writes exactly one word to <MAKEFUN_OUTPUT_DIR>/entry.txt (cap 30 chars).
// Node 22 stdlib-only.
//
// Draft v1: "Chatty" — grandma personifies ChatGPT as a lady named Chatty.
// Warm and instantly readable, but in normal case it reads like anyone's
// nickname for the chatbot, not like her actual texting voice.
//
// Revision: keep the personification (she has decided ChatGPT is a helpful
// lady called Chatty) and put it in her real texting voice — all caps,
// because grandma texts with caps lock on and has never once turned it
// off. Final: "CHATTY" — baffled, warm, unmistakably hers, tied to AI.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "CHATTY";

if (WORD.length < 1 || WORD.length > 30 || WORD.trim().length === 0 || /\s/.test(WORD)) {
  throw new Error(`Invalid entry: must be one word of 1-30 chars, got ${WORD.length} chars.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD + "\n", "utf8");
