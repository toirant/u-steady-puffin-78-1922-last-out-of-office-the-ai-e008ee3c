// Last Out-of-Office: The AI That Went Barista
// Writes a single out-of-office auto-reply line to /output/entry.txt.
// The line must be UTF-8 text, 1-280 characters, a single line, and not
// only whitespace (the competition gate).

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "I'm out of office — I quit to become a barista. Your email has been retrained as a coffee order and queued behind 12 oat lattes; for anything urgent, please shout your name at the counter and I'll pretend I heard it the first time.";

function validate(text: string): void {
  if (text.length < 1 || text.length > 280) {
    throw new Error(`entry must be 1-280 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  // Must round-trip as UTF-8 text.
  const roundTrip = Buffer.from(text, "utf8").toString("utf8");
  if (roundTrip !== text) {
    throw new Error("entry is not valid UTF-8 text");
  }
  // Reject control characters other than the em dash's neighbours: an
  // auto-reply must be clean printable text a real inbox can display.
  for (const ch of text) {
    if (ch.charCodeAt(0) < 0x20 && ch !== "\t") {
      throw new Error("entry contains a control character");
    }
  }
}

validate(ENTRY);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
// Read the file back and re-validate what actually landed on disk, so a
// write failure or encoding surprise cannot pass silently.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ENTRY) {
  throw new Error("written entry does not match the validated text");
}
validate(written);
console.log(`Wrote /output/entry.txt (${ENTRY.length} characters)`);
