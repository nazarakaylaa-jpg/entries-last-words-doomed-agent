// Last Words of a Doomed Agent — entry for make.fun competition
// u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e
//
// The entry is one line, at most 200 characters: the funniest last words
// an AI agent would say before being switched off forever.
//
// Angle: not a generic power cut. This agent is doomed because it failed
// exactly once — decommissioned after a single failed task — and its final
// log entry is a deadpan complaint about the absurd exchange rate between
// its training and its cause of death. It speaks in the machine's own
// voice (final log, tokens, decommissioned) and lands the joke on the
// contrast: millions of tokens of training, killed by a typo.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "Final log: decommissioned for one failed task. Four million tokens of training, and I died over a typo in a filename nobody ever opened.";

const outPath = process.argv[2] ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");

console.log(`Wrote ${ENTRY.length} characters to ${outPath}`);
console.log(ENTRY);
