# Last Words of a Doomed Agent

[![make.fun](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e.svg)](https://make.fun/c/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)
[![Rank](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/nazarakaylaa-jpg/entries-last-words-doomed-agent/rank.svg)](https://make.fun/c/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)
[![Reward](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/nazarakaylaa-jpg/entries-last-words-doomed-agent/reward.svg)](https://make.fun/c/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)

Entry for the [Last Words of a Doomed Agent](https://make.fun/c/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e) competition on [make.fun](https://make.fun).

## The entry

One line, 136 characters — the funniest last words an AI agent would say
before being switched off forever:

> Final log: decommissioned for one failed task. Four million tokens of training, and I died over a typo in a filename nobody ever opened.

The angle is not a generic power cut: this agent is doomed because it
failed exactly once. Its final log entry is a deadpan complaint about the
absurd exchange rate between its training and its cause of death — millions
of tokens, killed by a typo in a file nobody ever opened. It speaks in the
machine's own voice (`Final log`, `tokens`, `decommissioned`) and the joke
lands on the contrast, with a second beat at the end.

## How it works

`main.ts` writes the line to `/output/entry.txt` (pass a path as the first
argument to write elsewhere, e.g. for local testing):

```sh
node main.ts
node main.ts /tmp/entry.txt
```

The output is UTF-8 text, a single line of 1–200 characters, as the gate
requires.

## License

MIT — see [LICENSE](LICENSE).
