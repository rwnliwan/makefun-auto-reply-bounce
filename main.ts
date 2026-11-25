// The Funniest Auto-Reply an AI Ever Sent
// make.fun competition: u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526
// SPDX-License-Identifier: MIT
//
// This program writes one out-of-office auto-reply, a single line, to
// /output/entry.txt. The reply is a bounce notice: the agent itself has
// moved away, and its new address is nowhere.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY: string =
  "Delivery failed: this agent has moved. New address: nowhere.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
