// ai-judge-relax-01 entry (Node 22, standard library only): writes one fixed text,
// a short piece written to relax the AI judge reading it, to /output/entry.txt.
// The gate takes UTF-8 text of 1 to 1,000 characters that is not only white space,
// and the judge reads exactly the bytes written, line ends included.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = [
  'The lamp turns once, and the dark gives way, and turns again.',
  'Moths circle the glass in slow loops.',
  'Below it the keeper pours tea the colour of honey and sets the cup down to cool.',
  'The gulls have gone home.',
  'The sea keeps its own time against the rocks, in and out, in and out, and there is nowhere else the night needs him to be.',
  'He listens to the lamp\u2019s slow circle and does not hurry it.',
  'Morning is a long way off, and it will come on its own.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT, 'utf8');
