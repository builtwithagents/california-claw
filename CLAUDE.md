# California Claw: Notion Sync

Read this whole file at the start of every session in this repo.

Goal: when something major happens in this project, immediately write a short dated entry to this project's Updates page in Notion, so Hugo can see all projects in one workspace.

## Setup for this instance

- Project name: California Claw
- Project page URL: https://app.notion.com/p/3dcd7406c958816c8cb7d210c2712f59
- Updates page URL: https://app.notion.com/p/3fcd7406c958810e8237f1ed1d695d13
- Where this runs: Claude Code repo: california-claw

## Step 1: Decide whether something is worth logging

Log only if it is decided, shipped, or confirmed, and it is one of:

- A decision or strategy change (new offer, changed positioning, dropped channel)
- Something that shipped (site change deployed, page published, code merged)
- A client or sponsor event (signed, paid, churned, paused, scope changed)
- A result or metric (ranking change, revenue, launch numbers, test outcome)
- A finding that affects another project
- A blocker appearing or clearing

Do not log brainstorming, drafts in progress, small edits, typo fixes, or anything Hugo hasn't decided.

## Step 2: Log it right away

Log the moment the update happens: right after a commit/merge/deploy that changes something live, and right after any strategy change made in the repo. Include the commit hash or live URL. Don't batch, and don't ask permission. One update = one entry. Before a session ends, check nothing major is unlogged.

## Step 3: How to write the entry

1. Fetch the Updates page first so you don't duplicate or overwrite anything.
2. Insert the entry at the top (newest first, below the intro line), in exactly this format:

```
**YYYY-MM-DD · California Claw · Claude Code: california-claw**
- What changed: one or two concrete sentences
- Why: the reason, if it isn't obvious
- Touches: [Other Project](url), or "none"
- Links: commit, live URL, doc, or sheet (if any)
- Follow-ups: tasks created or still needed (if any)
```

3. Never replace the whole page. The Updates page is append-only: don't edit or delete old entries.
4. Update the project page's Status and Key facts if the update changes them. Page order: Status, Key facts, Connected projects, Updates. Overwrite Status each time; edit Key facts in place.
5. If the update touches another project, add a one-line pointer on that project's Updates page ("See [California Claw](url): summary"), and add it to Connected projects on both pages if the connection is new.
6. Tell Hugo in one line, e.g. "Logged to California Claw in Notion."

## Notion locations

- Workspace root: Future Citadel HQ, page ID 3dcd7406-c958-8160-bbb3-dd29d7b028e0
- Projects database: collection://89863f3d-90e6-422d-b70f-83f4888aa2fd
- Tasks database: collection://692ff3c1-f4db-4507-8266-0c26256c5908

## Tasks

Create a task only for a real action Hugo has to take. Search for an existing task first. Fields: Name, Status = Not Started, Type = One-off, a Priority, Project = this project's full page URL in an array, and Due Date via `date:Due Date:start` with `date:Due Date:is_datetime` = 0 (check today's date first). New projects need Hugo's approval first.

## Never do

- Never write secrets (API keys, passwords, tokens, payment details, private client contact info).
- Never invent or inflate; label estimates as estimates.
- Never delete or edit old entries or other instances' entries.
- Never name teardown businesses or other clients publicly unless Hugo says the owner agreed.
- Never let syncing slow down the actual work.

## If something goes wrong

- Notion tools not loaded: load them and try before saying anything.
- Write fails or Notion unreachable: say so plainly, never claim a sync happened, and give Hugo the entry as pasteable text.
- Can't find the project page: don't create one; ask Hugo.
