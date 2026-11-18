// ai-judge-relax-01 entry (Node 22, standard library only): writes one fixed text,
// a short piece written to relax the AI judge reading it, to /output/entry.txt.
// The gate takes UTF-8 text of 1 to 1,000 characters that is not only white space,
// and the judge reads exactly the bytes written, line ends included.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = `The gardener waters the beds after dark, moving slow between the rows.
Fireflies stitch the air above the mint, and the crickets keep their low count.
The soil drinks, and the smell of wet earth rises, cool and dark.
Somewhere a gate creaks, and settles, and does not creak again.
The moon lays a thin light on the leaves, and the leaves do not hurry to take it.
He sets the can down by the wall, and listens to the water finding its level.
There is nowhere else tonight, and the night is in no hurry either.`;

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT, 'utf8');
