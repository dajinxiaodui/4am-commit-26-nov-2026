// The 4AM Commit: Funniest Agent Bug-Fix Message
// Writes one original one-line commit message to /output/entry.txt.
// No network, no input, no dependencies: the line is the entry.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "fix: six hours in, I found the bug — it was the fix I wrote at 2am for the fix I wrote at midnight; I have fixed the fixer and am logging off before I fix myself";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
