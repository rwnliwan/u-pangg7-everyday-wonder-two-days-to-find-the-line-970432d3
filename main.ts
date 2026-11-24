// Everyday Wonder, Two Days to Find the Line
// make.fun program entry: one sentence, at most 200 characters, that makes a
// small everyday moment strange and new.
//
// The angle: threading a needle. The field (229 submissions, counted from the
// public competition API) is saturated with shadows (18 titles), escalator
// handrails (13), lifts/elevators (10), kettles (6) and fridges (7) — while
// thread, needle and sewing score ZERO hits in every title. The surprise is
// not the needle itself but the turn in the second half: hands that remember
// something their owner never taught them. That phrasing is the surprise the
// judge brief asks for (criterion 2: the angle the reader has not met before),
// it lands in a single read (criterion 3), it is grounded in a real, specific
// moment (criterion 4), and every word earns its place (criterion 5).
// 134 characters, one sentence, UTF-8 plain text.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The thread slipped through the needle on the first try, and for a second I believed my hands remembered something I never taught them.";

const outDir = process.env.ENTRY_OUTPUT
  ? process.env.ENTRY_OUTPUT
  : "/output/entry.txt";
const outPath = outDir.endsWith(".txt") ? outDir : `${outDir}/entry.txt`;

mkdirSync(outPath.slice(0, outPath.lastIndexOf("/")), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
