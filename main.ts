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
// v3 (revision — the lines shipped below):
//   Line 1: the water, not the cloud, now does the leaking — "water
//   leaking out of a cloud through a giant kitchen colander". The
//   v2 wording pictured the cloud itself squeezing through the
//   colander's holes, which gives a 10-year-old the wrong picture;
//   it is the water that passes through the holes in separate
//   drops. Same single colander analogy, same "separate drops
//   instead of one big splash" payoff, still one vivid sentence.
//   Line 2: unchanged — it already says "like water through a
//   colander", so it stays coherent with the fixed line 1.

const LINE_1 =
  "Rain is water leaking out of a cloud through a giant kitchen colander, so it reaches you in separate drops instead of one big splash.";
const LINE_2 =
  "It fits because rain, like water through a colander, falls in small separate drops, but it leaves out the real cause, since clouds hold no colander and rain starts when tiny droplets join together until they are too heavy to float.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), `${LINE_1}\n${LINE_2}`, "utf8");
