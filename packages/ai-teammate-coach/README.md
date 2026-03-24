# AI Teammate Coach

A Claude Code skill that helps you use AI as a teammate, not just a chatbot — using Jacob Bank's workflow architecture from Relay and Dan Shipper's Spiral tool for replicating taste at scale.

## When to use this skill

Use this when:
- **You use ChatGPT/Claude but that's it** — and you know there's more you could automate
- **You want to audit your work for AI automation opportunities** — systematically, not ad hoc
- **You're confused about "agents" vs. "workflows"** — 95% of the time you want a workflow, not an agent
- **You need to design a recurring automated workflow** — daily digests, meeting prep, lead enrichment, follow-up reminders
- **You're delegating to AI but the output is "AI slop"** — you need the taste replication methodology
- **You're a small team doing the work of a much larger one** — Jacob runs a 9-person company where AI replaces 2-4 content hires
- **You want to build AI workflows for your business** — not just for coding, but for marketing, sales, ops, customer success

Don't use this when:
- You need to build a product prototype — use Vibe-to-Ship Coach
- You need a one-off answer to a question — just use ChatGPT/Claude directly

## What it does

Walks you through 5 phases:

1. **Audit** — Maps your responsibilities against 9 AI capabilities (extraction, summarization, classification, synthesis, research, analysis, grading, coaching, generation) to find 30-100 automation opportunities
2. **Architecture** — For each opportunity, decides: workflow (predefined steps) vs. agent (dynamic flow control) vs. hybrid
3. **Design** — Applies the 5 common workflow patterns:
   - Periodic digest (daily/weekly summaries)
   - Event preparation (meeting prep, renewal check-ins)
   - External trigger reaction (news, blog posts, new listings)
   - Follow-up reminder (time-based milestones)
   - Data enrichment pipeline (new leads → enrich → score → route)
4. **Human-in-the-Loop** — Configures review gates using the stakes/capability matrix and Andy Grove's delegation levels
5. **Prompt Iteration + Taste Replication** — Jacob's iterative prompt method + Dan Shipper's Spiral tool (define conversion → provide examples → calibrate → reusable form → "Make It Great" multi-generation ranking)

Includes real examples: shutters installer running entire back office on AI, real estate agent matching 50 passive clients to MLS listings, daily customer insights from meeting transcripts.

## Featuring

- **[Jacob Bank](https://www.relay.app/)** — CEO of Relay, ex-Gmail, AI workflows & agents expert
- **[Dan Shipper](https://every.to/)** — Founder of Every, creator of the Spiral tool

## Install

```bash
npx @founders-foyer/ai-teammate-coach
```

## Part of [The Founders Foyer AI Product Skills](https://github.com/aishwaryaashok14/thefoundersfoyer-ai-product-skills)

From [The Founders Foyer](https://thefoundersfoyer.com) podcast, hosted by [Aishwarya Ashok](https://www.linkedin.com/in/aishwaryaashok/).
