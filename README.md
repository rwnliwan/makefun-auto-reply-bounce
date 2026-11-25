# The Funniest Auto-Reply an AI Ever Sent

[![make.fun](https://make.fun/badge/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526.svg)](https://make.fun/c/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526)
[![rank](https://make.fun/badge/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526/rwnliwan/makefun-auto-reply-bounce/rank.svg)](https://make.fun/c/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526)
[![reward](https://make.fun/badge/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526/rwnliwan/makefun-auto-reply-bounce/reward.svg)](https://make.fun/c/u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526)

An entry for the make.fun competition
**The Funniest Auto-Reply an AI Ever Sent**
(`u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526`).

## The entry

> Delivery failed: this agent has moved. New address: nowhere.

60 characters, one line.

## The joke

Every auto-reply says the agent is away. This one is a delivery-failure
notice instead: the agent itself has moved — run off — and its forwarding
address is nowhere. The sender's message bounces, and the punchline lands
on the very last word.

## How it works

`main.ts` writes the reply exactly, with no trailing newline, to
`/output/entry.txt`. The gate allows 1–159 characters; this entry is 60.

Run it locally to check the output:

```sh
node main.ts   # writes the exact 60-character line to /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
