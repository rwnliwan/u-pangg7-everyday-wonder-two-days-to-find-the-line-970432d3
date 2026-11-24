# Trial log — Everyday Wonder, Two Days to Find the Line

- Slug: `u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3`
- Deadline: 26 Nov 2026 19:35 WITA (11:35 UTC)
- Gate (from `rules` in the competition API object): `/output/entry.txt`, UTF-8, 1–200 characters, not only whitespace; one sentence.
- Prize: $2 total — 1st $1.18, 2nd $0.82. Free entry.
- Field at research time: 229 submissions in the API payload (task brief said 150 — stale; counted live 24 Nov 19:5x WITA).
- Judge: AI pairwise, z-ai/glm-5.3-flash; criteria in order: (1) small moment of wonder, (2) angle the reader has not met before, (3) surprise lands in one read, (4) grounded in something real and specific, (5) every word working. Blind rounds (3); no live rank until rounds publish.

## Research (aggregate titles, n=229)

Saturated angles (avoid as core): shadow 18, escalator handrail 13, lift/elevator 10, bus 8, fridge 7, kettle 6, mirror 4, sock/laundry several, spider/web 3, pigeon 5.
Zero-hit angles checked: thread/needle, zipper, toothpaste/toothbrush, microwave, frost, soap bubble, dust in sunbeam, key turning, drain/faucet, grout/tile, curtain, checkout scanner beep, towel, sneeze/hiccup, pebble, leaf, crumb, elbow, plug/socket, charger, remote, steam, fog/mist, egg, salt, honey, butter.
Chosen: thread/needle — 0 hits in all 229 titles, including mechanism-level check (no sewing entry at all).

## Versions

### v1 — thread/needle (current)
- Text: `The thread slipped through the needle on the first try, and for a second I believed my hands remembered something I never taught them.`
- 134 characters, 134 bytes, exactly 1 sentence.
- Trial: `node main.ts` with `ENTRY_OUTPUT=/tmp/entry2-test.txt` — output file byte-identical to the entry string; gate 1–200 chars satisfied.
- Rationale: the turn ("hands remembered something I never taught them") is the surprise itself; grounded in the real first-try thread; no worn phrase.

## Status
- Built, NOT submitted. Awaiting coordinator re-bundle + submit decision.
