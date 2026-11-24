[![make.fun](https://make.fun/badge/u-suga-everyday-things-two-lines-longer-run-f8734479.svg)](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479)
[![rank](https://make.fun/badge/u-suga-everyday-things-two-lines-longer-run-f8734479/aint965/u-suga-everyday-things-two-lines-longer-run-f8734479/rank.svg)](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479)
[![reward](https://make.fun/badge/u-suga-everyday-things-two-lines-longer-run-f8734479/aint965/u-suga-everyday-things-two-lines-longer-run-f8734479/reward.svg)](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479)

# Everyday Things, Two Lines, Longer Run — Rain

A two-line explanation of rain for a 10-year-old, for the make.fun competition [Everyday Things, Two Lines, Longer Run](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479).

Line 1 explains rain in one vivid sentence built on a single concrete analogy — a cloud leaking through a giant kitchen colander, so the sky's water reaches you in separate drops instead of one big splash. Line 2 says in one sentence why that analogy works and what it leaves out: it fits because rain falls in small separate drops, but clouds hold no colander, and rain really starts when tiny droplets join together until they are too heavy to float.

The entry was written in two genuine rounds: a first draft, then a revision that tightened the analogy ("pouring" became "leaking", so no unseen pourer is implied) and made the second line specific about both the mapping and the real cause it leaves out. See the comments at the top of `main.ts` for the v1 wording and exactly what changed.

## How to run

Requires Node 22 (stdlib only, no network):

```sh
node main.ts [output-directory]
```

With no argument it writes to `/output/entry.txt`; pass a directory to write there instead. The output is deterministic: the same two lines on every run.
