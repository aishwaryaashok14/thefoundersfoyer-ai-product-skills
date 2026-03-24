# Growth Loop Diagnostics

A Claude Code skill that diagnoses why you're not growing — using Casey Winters' frameworks from scaling Pinterest, GrubHub, and Eventbrite.

## When to use this skill

Use this when:
- **"We have product-market fit but aren't growing"** — Casey's response: then you don't have PMF
- **Paid acquisition is your only channel** and costs are rising — you may be in a structural death spiral
- **You're measuring the wrong thing** — tracking signups when you should track the moment users receive value
- **You've built features expecting growth** but nothing moved the needle
- **You need to pick your primary growth loop** — sales, paid, UGC/content, or virality
- **You're configuring your retention dashboard** and aren't sure what to put on the axes

Don't use this when:
- You don't have a product yet — you need to build before you can grow
- Prospects can't understand what you do — that's a positioning problem (use Positioning Autopsy)

### False positives — when NOT to trigger

- **"Help me run Facebook ads"** — This skill diagnoses growth strategy, not ad execution. If paid is your loop, it tells you that — but it won't write ad copy or set up campaigns.
- **"How do I get more followers on Twitter/LinkedIn?"** — Social media tactics are not growth loops. This skill operates at the product and acquisition architecture level.
- **"Help me with SEO keywords"** — SEO may be part of a content loop, but keyword research is a tactic, not a diagnostic. This skill identifies WHETHER content/SEO is your loop.
- **"We need a referral program"** — Virality is one of 4 loops, but jumping to "referral program" skips the diagnostic. This skill determines if virality is even the right loop first.
- **"Help me build a landing page"** — Conversion optimization is downstream of growth strategy. This skill tells you which page matters most and what to measure.

## What it does

Walks you through a 6-step diagnostic:

1. **PMF Validation** — Tests both parts: Is a target customer satisfied? AND does that satisfaction create a sustainable acquisition loop?
2. **Loop Identification** — Determines which of the 4 sustainable loops (Sales, Paid, UGC/Content, Virality) fits your product
3. **Measurement Audit** — Configures your retention graph correctly (right frequency on X-axis, right value metric on Y-axis)
4. **Leak Diagnosis** — Finds where users drop off and what's blocking the loop from compounding
5. **Intervention Design** — Applies the "effort ≠ impact" principle to find highest-leverage changes
6. **Stage Alignment** — Maps your growth strategy to your company stage and next fundraising milestone

Includes the Pinterest lesson: a 2-day conversion test drove 50% growth lift, while 3 new products built over a year had zero impact.

## Featuring

- **[Casey Winters](https://caseyaccidental.com/)** — CPO at Eventbrite, former growth lead at Pinterest & GrubHub, Reforge instructor

## Install

```bash
npx skills add https://github.com/aishwaryaashok14/thefoundersfoyer-ai-product-skills/tree/main/skills/growth-loop-diagnostics
```

Distributed via [skills.sh](https://skills.sh).

## Part of [The Founders Foyer AI Product Skills](https://github.com/aishwaryaashok14/thefoundersfoyer-ai-product-skills)

From [The Founders Foyer](https://thefoundersfoyer.com) podcast, hosted by [Aishwarya Ashok](https://www.linkedin.com/in/aishwaryaashok/).
