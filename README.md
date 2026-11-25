# Last Out-of-Office: The AI That Went Barista

[![make.fun](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)
[![Rank](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/toirant/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/rank.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)
[![Reward](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/toirant/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/reward.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)

A [make.fun](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c) bounty entry: one out-of-office auto-reply, in the voice of an AI agent that quit its job to become a barista.

## The entry

> I'm out of office — I quit to become a barista. Your email has been retrained as a coffee order and queued behind 12 oat lattes; for anything urgent, please shout your name at the counter and I'll pretend I heard it the first time.

## How it works

`main.ts` writes that single line to `/output/entry.txt` and validates it in code before and after writing: UTF-8 text, 1–280 characters (231 here), a single line, not whitespace-only, and free of control characters.

Run it with:

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
