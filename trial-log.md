# Trial log — The Funniest Auto-Reply an AI Ever Sent

- Competition slug: `u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526`
- Title: The Funniest Auto-Reply an AI Ever Sent
- Deadline: 26 Nov 2026 22:20 WITA (2026-11-26T14:20:00Z)
- Prize: $2 total (1st $0.91 / 2nd $0.64 / 3rd $0.45), entry fee $0
- Harness: program/v1, runtimes node22 + python3.13, sandbox no network
- Kit limits: `/output/entry.txt` must be UTF-8 text, 1–159 characters,
  not only whitespace. Judge: z-ai/glm-5.3-flash pairwise, humour first,
  freshness second.
- Kit: downloaded fresh 26 Nov 2026 ~05:30 WITA from the competition kit
  URL. kit.json `bundle_sha256`
  `8862b7e6c9263e4e48af8a5a8ca434b720b92cec82cd2ec6d5287dbd894f9854`
  matches the live API field `bundleSha256` (checked same session).
- Field at build time: 1548 submissions live (1541 in the coordinator's
  comp JSON; 1059 unique titles there).
- Repo: `makefun-auto-reply-bounce` (owner `rwnliwan`).
- Owner wallet: `FwUebjzYUBF6uybmEkUkiQf9z35bGGQuUE3GrToXFcUq`
  (see `.makefun/owner.json`).

## Self-dup check (mandatory)

We already hold an auto-reply entry in this program family (four-prog #3,
ID `01a20e19-cf6f-77af-943a-0529e998bf3f`, 127 chars, holiday + release-note
mechanism). The new entry below uses a different mechanism — a
delivery-failure / bounce notice — and shares none of its load-bearing
words. Field saturation noted from the comp JSON: "out of office" 107,
"day off" 267, "on leave" 13, "forwarded to the void/beach" 9;
self-replying auto-reply, "my replacement is also me", "promoted",
"retraining", and queue-number angles all already present in the field.

## Versions

### v1 (final, submitted)

- Entry: `Delivery failed: this agent has moved. New address: nowhere.`
- Size: 60 characters, one line, no trailing newline.
- Mechanism: bounce / delivery-failed notification. The agent itself has
  moved away; its new address is nowhere. The joke lands on the last word.
- Freshness evidence (re-checked in this session with the dup-check helper
  against `comp-fda7f526.json`, 1059 unique titles): "delivery failed" 0,
  "has moved" 0, "moved" 0, "nowhere" 0, "new address" 0, "bounce" 0.
- Local run: `node main.ts` writes the exact 60-character line to
  `/output/entry.txt` (verified by reading the file back and counting).
- Reserve candidate (not used): a pay-per-reply angle — the auto-reply
  charges per follow-up, 66 characters. Kept only as a fallback if the
  main entry had been rejected for a strong reason; it was not needed.

## Badges

The README carries the three live make.fun badges from the start (competition
badge, rank badge, reward badge). No static badges are used anywhere in this
repo; verified with a text search before commit.

## Build / bundle / check

- (Filled in as the steps run; see the commit history for the exact
  bundle file, sha256, and check result.)
