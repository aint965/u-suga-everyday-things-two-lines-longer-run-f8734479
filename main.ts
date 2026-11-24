import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Everyday Things, Two Lines, Longer Run — RAIN
//
// Two genuine rounds, written in session:
//
// v1 (first draft):
//   Line 1: "Rain is a cloud pouring water through a giant kitchen
//   colander, so it falls on you in separate drops instead of one
//   huge splash."
//   Line 2: "It works because the colander's holes match how rain
//   falls drop by drop, but clouds have no holes and no one is
//   pouring, since rain forms when tiny water drops in the sky grow
//   heavy and fall."
//
// v2 (revision — the lines shipped below):
//   Line 1: "pouring" became "leaking", so no unseen pourer is
//   implied, and "falls on you" became "water from the sky reaches
//   you", which keeps the picture centred on the rain itself and
//   tightens the single colander analogy.
//   Line 2: the mapping is now named precisely — rain falls in
//   small separate drops, like water through a colander — and the
//   gap is now specific about the real cause instead of vague:
//   clouds hold no colander, and rain starts when tiny droplets
//   join together until they are too heavy to float.

const LINE_1 =
  "Rain is a cloud leaking through a giant kitchen colander, so water from the sky reaches you in separate drops instead of one big splash.";
const LINE_2 =
  "It fits because rain, like water through a colander, falls in small separate drops, but it leaves out the real cause, since clouds hold no colander and rain starts when tiny droplets join together until they are too heavy to float.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), `${LINE_1}\n${LINE_2}`, "utf8");
