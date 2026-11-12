# Peer review and decision history

**Updated:** November 12, 2026.

Four proposed documentation improvements were recorded as issues, implemented in separate branches, and merged via pull requests. Review notes were posted on the PRs on November 12, 2026 **by the repository owner's account (`davidjimen2008-spec`)**. These are owner-posted verification notes, **not independently attributable classmate feedback**. The owner reports classmate approval, but the classmate's own GitHub review and retry are not yet documented.

## Issue-to-fix and verification register

| Improvement issue | Decision and linked change | Recorded owner verification | Remaining work |
|---|---|---|---|
| [#1 — Employer source verification](https://github.com/davidjimen2008-spec/is117-career-portfolio/issues/1) | Implemented dated source register and availability caveats in [PR #5](https://github.com/davidjimen2008-spec/is117-career-portfolio/pull/5), merged | [Owner's PR review note](https://github.com/davidjimen2008-spec/is117-career-portfolio/pull/5): NYT employer page reportedly rechecked; Priceline original Workday page was not readable | Record source recheck outcome in the role register; find a readable original Priceline source before claiming independent verification |
| [#2 — Research-to-feature traceability](https://github.com/davidjimen2008-spec/is117-career-portfolio/issues/2) | Implemented evidence → interpretation → feature → planned verification in [PR #6](https://github.com/davidjimen2008-spec/is117-career-portfolio/pull/6), merged | [Owner's PR review note](https://github.com/davidjimen2008-spec/is117-career-portfolio/pull/6): documentation criteria passed using NYT source | Priceline claims were not independently reconfirmed in that review; classmate retry pending |
| [#3 — Measurable test criteria](https://github.com/davidjimen2008-spec/is117-career-portfolio/issues/3) | Added specific viewport, keyboard, React and API test cases in [PR #7](https://github.com/davidjimen2008-spec/is117-career-portfolio/pull/7), merged | [Owner's PR review note](https://github.com/davidjimen2008-spec/is117-career-portfolio/pull/7): test-plan documentation passed | All actual software tests remain **Not run**; classmate retry pending |
| [#4 — Research navigation](https://github.com/davidjimen2008-spec/is117-career-portfolio/issues/4) | Added homepage source → comparison → plan → review trail in [PR #8](https://github.com/davidjimen2008-spec/is117-career-portfolio/pull/8), merged | [Owner's PR review note](https://github.com/davidjimen2008-spec/is117-career-portfolio/pull/8): Markdown navigation structure passed | Published-site navigation was **not** independently verified; classmate retry pending |

**Issue state:** Issues #1–#4 are closed following merges. Closure does not mean the pending checks above were completed.

## Original employer source and review request

A reviewer should open the [NYT original employer posting](https://job-boards.greenhouse.io/thenewyorktimes/jobs/4751909005) or the [Priceline original employer posting](https://priceline.wd1.myworkdayjobs.com/en-US/priceline/job/New-York/Junior-Software-Engineer_R5885), identify one documented requirement, and follow it through the [comparison](../research/comparison) to the [portfolio plan](../portfolio/plan). The reviewer should say which original source they could read, what requirement they confirmed, whether the proposed decision follows, and what check would verify it.

## Independent classmate review and retry

**Status: pending.** Ask the classmate to leave comments from their own GitHub account on [PRs #5–#8](https://github.com/davidjimen2008-spec/is117-career-portfolio/pulls?q=is%3Apr+is%3Amerged) or the corresponding issues, describing their actual findings and retry results. Record the reviewer's username, comment URL, date, outcome and any remaining concern here. Do not attribute owner comments to the classmate.

## Outstanding verification

- Open the [published VitePress site](https://davidjimen2008-spec.github.io/is117-career-portfolio/) and follow its source → comparison → plan → review links. Record observed results, date and any broken links.
- Recheck Priceline against a readable employer-controlled posting and update the dated source register. Do not assume the listing remains open.
- Keep planned React, API and responsive tests labeled **Not run** until those features exist and tests are performed. Record evidence and commit IDs when completed.
- For peer-review credit, also create **3–5 constructive issues in each classmate's repository** based on actual inspection, as required by the assignment.

## Review record format for future feedback

For each new review, record **reviewer and comment link**, **exact feedback**, **decision and reason**, **linked commit/PR**, **observed verification evidence**, **reviewer retry and result**, and **final resolution**. Avoid recording planned checks as observed results.


## Peer feedback, change, and retest: completion record

**Do not mark this cycle complete until a real classmate has checked the result.** The four improvement descriptions are documented, but the repository's existing PR notes are from the repository owner. If Shakti provided verbal feedback, record the actual date and wording with Shakti's agreement; do not present owner-posted notes as Shakti's GitHub comments.

| Requirement | Current evidence | Status / next action |
|---|---|---|
| Peer feedback on understanding and use | Four improvement topics have been documented; independent reviewer comment or contemporaneous feedback record not yet linked | **Needs evidence:** ask reviewer to explain the research question and follow one source-to-feature trail |
| Response and change | Issues #1–#4, merged PRs #5–#8; redesign PR #9 | **Documented** |
| Verification of changed documentation | Owner-posted PR notes describe documentation checks, with limits | **Partially documented** |
| Reviewer retry after change | No independent reviewer retry result linked | **Pending** |
| Live-site navigation and search | Deployment success does not itself prove browser functionality | **Not independently recorded** |

### Practical reviewer script

Ask the reviewer to:
1. Open the published site and explain in their own words what the research question asks and who the site helps.
2. Follow **Career Paths → Compare Roles → Portfolio Roadmap** and identify one requirement from an original employer posting that leads to a proposed feature and a test.
3. Use the search bar to locate a term such as `React`; try desktop and narrow mobile widths.
4. Report the exact steps taken, what worked or failed, and whether the original concern is resolved after the changes.
5. Leave their actual feedback on a GitHub issue/PR, or provide a dated note that can be accurately attributed.

### Copyable observed-result record (fill in only after testing)

- **Reviewer and review date:** Pending
- **Original concern / issue:** Pending
- **Source opened and specific finding:** Pending
- **Linked change / PR:** Pending
- **Retest environment and steps:** Pending
- **Expected result:** Pending
- **Observed result:** Pending
- **Pass / fail / remaining concern:** Pending
- **Reviewer comment or evidence URL:** Pending

### Site owner verification checklist

- [ ] Open the public homepage and confirm the title reads **Frontend Futures**, not the older design.
- [ ] Navigate to all four research and review sections using the top navigation.
- [ ] Search for `React` and open a relevant result.
- [ ] At 375px and 1440px viewport widths, check for clipped content and horizontal overflow.
- [ ] Use keyboard Tab and Enter to navigate links and search.
- [ ] Record browser, date, observed result, and screenshot/issue link for each test.

**Important:** These unchecked items are instructions for future testing, not evidence that the tests have passed.
