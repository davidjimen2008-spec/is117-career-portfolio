# Portfolio plan — research to features

| Employer finding | Proposed portfolio feature | Status |
|---|---|---|
| Both roles mention React or modern frontend frameworks | Reusable React component | Planned |
| Priceline mentions responsive design | Responsive layout and keyboard-accessible controls | Planned |
| Priceline mentions REST/GraphQL APIs | API-backed feature with explicit request states | Planned |
| Both roles involve teamwork | Issue, PR, commit and review history | Planned |

See [source evidence and reasoning](../research/comparison).

## Test plan with measurable acceptance criteria

**These are planned checks, not completed tests.** Record the actual result, date, environment, screenshot or log, and commit when implementation exists.

| Test ID | Setup and steps | Expected pass criteria | Current result |
|---|---|---|---|
| R1 — Mobile | Set browser viewport to 375 × 812 px; visit every page and operate navigation | No horizontal scrolling caused by layout; content and buttons remain readable and operable | Not run |
| R2 — Desktop | Set viewport to 1440 × 900 px; visit every page | No clipped content or overlapping controls; navigation and main content remain usable | Not run |
| R3 — Keyboard | Navigate with Tab, Shift+Tab, Enter and Space where applicable | Every interactive control can be reached and activated; focus remains visible | Not run |
| C1 — React component | Render the component; change its input twice | Visible output updates to match each input; no console error | Not run |
| A1 — API success | Stub or use a known successful API response | Loading state appears while waiting, then expected data renders | Not run |
| A2 — API delay | Simulate a delayed response | Loading indicator persists until response, with no duplicate submission | Not run |
| A3 — API failure | Simulate a network error or HTTP failure | User-readable error appears; interface remains operable and offers a retry if appropriate | Not run |
| P1 — Peer-review trace | Open an issue, linked PR, commit and verification note | Reviewer can follow the issue through the decision and evidence, then report a retry result | Not run |

## Verification record template

For each test, record **date**, **test ID**, **commit SHA**, **browser/device**, **steps performed**, **expected outcome**, **observed outcome**, **pass/fail**, **evidence URL**, and **follow-up issue**. Do not replace “Not run” until a test has actually been executed.

## Seven-day proposed learning plan

Review React concepts, outline a small project, implement one interactive component, test it using the criteria above, and document blockers and evidence.

**Scope:** Research and planning only. A completed React product is not claimed or required by this research checkpoint.

## Repeatable reviewer protocol (issue #20)

**Planned, not performed:** Test the homepage, role cards, comparison, plan, and review log at 375 × 812 and 1440 × 900 CSS pixels; record overflow, clipping, and navigation results. Use Tab, Shift+Tab and Enter to verify that links are reachable and focus remains visible.

**React (future feature):** Render an input/output component, enter `alpha`, then `beta`, and verify the displayed output changes accordingly without console errors. **API (future feature):** Stub success, a 2-second delay, and HTTP 500; confirm loading, success display, readable failure and retry. Record date, browser, commit, expected and observed results only after executing each check. These features and tests are not claimed as complete.

Related: [classmate issue #20](https://github.com/davidjimen2008-spec/is117-career-portfolio/issues/20).


---

# Review 2 — Plan — Portfolio (November 14, 2026)

**Checkpoint:** IS117-005, due November 23, 2026 at 11:30 a.m. ET. This section extends the existing career research rather than repeating a competitor report.

## Reader, goal, and evidence

**Primary reader:** A recruiter or hiring manager considering an early-career software engineering candidate. **Secondary reader:** A technical peer who wants to inspect code, decisions, and collaboration evidence.

**Goal:** Help a reader locate two credible project stories, identify my contribution, inspect the relevant repositories, and find my GitHub profile and résumé plan quickly. The target role is **software engineering internship / entry-level software engineering**. Earlier frontend job research is relevant evidence for web-related skills but does not prove all software engineering roles have identical requirements.

**Research evidence:** [Employer roles](../research/roles), [comparison and source reasoning](../research/comparison), and [earlier research-to-feature decisions](./plan). Employer postings are time-sensitive; check their original links and dates before quoting requirements. **Assumption:** Showing design decisions, implementation checks, and linked commits will help a technical reviewer evaluate my work. This is a design hypothesis, not a measured hiring result.

## Compare two page approaches

| Approach | Reader journey | Strength | Tradeoff |
|---|---|---|---|
| A — Project-first portfolio | Landing page → two featured project stories → evidence / repositories → professional links | Puts demonstrable work and contribution near the top | Career background has less initial space |
| B — Résumé-first portfolio | Landing page → summary / skills / résumé → project directory → evidence | Fast scan of credentials | Project evidence and contribution take extra clicks |

**Decision: Choose A (project-first)** for the future public-facing portfolio, while retaining a visible résumé and GitHub link in the header or first screen. Reason: the assignment's peer task explicitly asks reviewers to find both project stories and contributions. **Planned check:** Give a reviewer the homepage without instructions; ask them to locate both stories, contribution statements, GitHub and résumé in two minutes, recording actual navigation and missing items. No usability result is claimed yet.

## Two featured project stories and a third repository

1. **ABOVE THE MEAN — T-shirt / Brand Studio:** [Individual repository](https://github.com/davidjimen2008-spec/is117-brand-studio). Story: researching clothing competitors and making brand/site design decisions. **Reported personal contribution:** design work and implementation verification. **Source evidence:** [SQLite demo checkout implementation commit 3050b70](https://github.com/davidjimen2008-spec/is117-brand-studio/commit/3050b703d95e871dc943c963d0960565365b70ba), which adds demo-order storage, API routes, checkout UI, and a persistence regression test. This is code evidence, not proof that a browser test was run. Do not claim an online store or production launch without proof.
2. **Student Tutoring Platform — shared group business:** [Shared repository](https://github.com/davidjimen2008-spec/is117-group-business). Story: planning a tutoring platform with a partner. **Reported personal contribution:** design work and implementation verification; specific commits and task ownership still need attribution. **Partners:** David Jimenez (`davidjimen2008-spec`) and Shakti (`Shakti2008`; full name not supplied). Both partners should link the same shared repository. **Source evidence:** [research integration commit dde3b7d](https://github.com/davidjimen2008-spec/is117-group-business/commit/dde3b7d5ff33b083caa0e8a361d63f6a7304b947) and [review decision commit 7aa1eb0](https://github.com/davidjimen2008-spec/is117-group-business/commit/7aa1eb0cae98f0b00c045780e8efe16e9bc43381). These document David's integration and decision-writing work while crediting Shakti's separate research; do not claim a finished app.
3. **Career research / portfolio documentation:** [Individual repository](https://github.com/davidjimen2008-spec/is117-career-portfolio). This repository documents employer research, evidence-to-decision trace, the portfolio plan, and review work. **Reported personal contribution:** design and implementation verification; [Plan authoring commit 2663c3a](https://github.com/davidjimen2008-spec/is117-career-portfolio/commit/2663c3a98ea6ca1bd618b6cdb265d1764511a13e) and [contribution audit commit 3a4a00d](https://github.com/davidjimen2008-spec/is117-career-portfolio/commit/3a4a00d1168f6f9125d44f830bb8583a7c6a26f5) show documented contributions, but do not establish browser test results. This is the third required repository, not a substitute for the two featured project stories.

**Contribution claim policy:** “Made design and verified implementation” is the student's self-report, not independently verified evidence. Link a specific commit, PR, screenshot, or test record before expanding that into a technical achievement claim.

## Five checkable user stories

| ID | Story | Acceptance check | Status |
|---|---|---|---|
| US1 | As a recruiter, I can identify the target software engineering role and portfolio purpose. | Homepage displays role and a short truthful introduction without scrolling at 1440 × 900. | Planned |
| US2 | As a reviewer, I can find the T-shirt and group project stories and my contribution. | From the homepage, open both stories; each names the project, my contribution, repository, evidence and outstanding work. | Planned |
| US3 | As a technical reviewer, I can inspect the three project repositories. | All three links open the intended public repositories; shared group members and usernames are stated. | Planned |
| US4 | As a recruiter, I can find GitHub, LinkedIn status, and résumé. | GitHub opens; résumé link opens only after its safe public URL is added; LinkedIn is marked “not created” rather than given a fake URL. | Planned |
| US5 | As a peer, I can trace a design decision to a review and verification outcome. | Open a review issue, find the documented decision, linked commit/PR, actual check, and reviewer retry before the issue is closed. | Planned |

## Professional materials plan

- **GitHub:** [davidjimen2008-spec](https://github.com/davidjimen2008-spec). Plan to update the profile README/bio, pin the three relevant repositories, and use concise accurate descriptions. Profile updates are not claimed completed.
- **LinkedIn:** **Not created.** Plan to create a professional profile with software engineering goal, projects and GitHub link. No URL is fabricated.
- **Résumé:** **Exists according to student; not uploaded or publicly linked here.** Plan to check one-page readability, accurate skills, education, project evidence and consistent contact details; publish only a privacy-reviewed résumé URL after approval.
- **Portfolio:** [Documentation website](https://davidjimen2008-spec.github.io/is117-career-portfolio/) and [repository](https://github.com/davidjimen2008-spec/is117-career-portfolio). Planned deployed personal portfolio is separate from the current documentation site; no new deployed site is claimed.

## Peer review request and decision history

**Reviewer:** @Shakti2008 (assigned on [issue #27](https://github.com/davidjimen2008-spec/is117-career-portfolio/issues/27)). **Feedback received for this checkpoint:** Initial AI-assisted source/commit review posted from Shakti2008's account on November 23, 2026 ([review comment](https://github.com/davidjimen2008-spec/is117-career-portfolio/issues/27#issuecomment-7106064288)). **Status:** Initial review received; live browser checks and independent post-fix retry remain pending. Ask the reviewer to (1) find both featured stories and reported contributions, (2) locate three repositories and professional-link statuses, (3) compare the two approaches and check all five stories, and (4) open at least one evidence source. Record feedback in a GitHub issue.

**Decision workflow:** feedback issue → decide implement / investigate / defer / decline with reason → reference issue number in a documentation or code commit/PR → record actual verification date, steps and result → ask reviewer to retry → close only if resolved. Earlier issues and research work do not count as this checkpoint's peer feedback automatically.

**AI assistance:** AI helped draft and organize this plan and may commit it. The student must inspect links, claims, implementation status, and evidence; AI-generated planning text is not evidence of a completed test or peer review.

## Open questions and next actions

1. Assign a classmate reviewer, obtain feedback, respond and request a retry. If none is available, document the request and contact the instructor.
2. Identify exact design/verification commits for the T-shirt and group projects; distinguish student contributions from collaborators' work.
3. Provide a privacy-reviewed résumé link; create LinkedIn later.
4. Verify published page and links after deployment and record the actual results.
5. Paste this updated record, repository/site URL and feedback issue into the **Canvas Plan checkpoint**; do not treat the GitHub issue as submission.

**Change note:** Added reader and goal, compared two page approaches, chose a project-first structure, specified five checkable user stories, mapped all three repositories and professional materials, and kept unverified contributions, peer feedback and future testing explicitly pending.


## Contribution evidence audit — November 18, 2026

The links below are **repository commit evidence**, not proof that a browser test passed or that a reviewer approved this Plan. Commit authorship and messages are visible in GitHub history; the actual behavior still needs testing where noted.

| Project | Concrete contribution evidence | What it supports / boundary |
|---|---|---|
| ABOVE THE MEAN | [Checkout and SQLite work, commit 3050b70](https://github.com/davidjimen2008-spec/is117-brand-studio/commit/3050b703d95e871dc943c963d0960565365b70ba) | Commit history documents planned and implemented local demo checkout/SQLite work; no production commerce claim |
| ABOVE THE MEAN | [Peer-feedback decision, commit 20ede87](https://github.com/davidjimen2008-spec/is117-brand-studio/commit/20ede872469143045375a2ed64ebb092ebd143ea) and [disclosure clarification, commit 6c998f0](https://github.com/davidjimen2008-spec/is117-brand-studio/commit/6c998f02ce46b6d3dc2ba6782748ef83b2e1003f) | Documents response to T-shirt feedback, not a reviewer retry for this portfolio Plan |
| Student Tutoring Platform | [Integration of partner research, commit dde3b7d](https://github.com/davidjimen2008-spec/is117-group-business/commit/dde3b7d5ff33b083caa0e8a361d63f6a7304b947) | Documents integration work credited to David; partner's separate contributions remain credited to Shakti |
| Student Tutoring Platform | [Review-driven decisions, commit 7aa1eb0](https://github.com/davidjimen2008-spec/is117-group-business/commit/7aa1eb0cae98f0b00c045780e8efe16e9bc43381) and [team decision follow-ups, commit 62bd5b9](https://github.com/davidjimen2008-spec/is117-group-business/commit/62bd5b96daf6d9bf9b1dad213610c1ff53587353) | Documents team planning and review follow-ups; does not establish a deployed tutoring application |
| Career portfolio | [Review 2 Plan commit 2663c3a](https://github.com/davidjimen2008-spec/is117-career-portfolio/commit/2663c3a98ea6ca1bd618b6cdb265d1764511a13e) and [successful VitePress deployment run](https://github.com/davidjimen2008-spec/is117-career-portfolio/actions/runs/43564567958) | Plan committed and deployment job succeeded; rendered page and links still require direct browser checks |

**Pending verification:** A human should open the published Plan, click all three repository links and the two project-story paths, check mobile navigation, and record date, browser, observed results, and any failure. Reviewer should independently follow [Plan review issue #27](https://github.com/davidjimen2008-spec/is117-career-portfolio/issues/27), comment with findings, then retry any accepted fixes. No independent Review 2 peer feedback was present in issue #27 when this audit was prepared. Keep it open until reviewed. LinkedIn creation, a public privacy-reviewed résumé link, and Canvas submission remain outside the scope of this repository audit.


## Owner follow-up to AI-assisted audit — November 18, 2026 (issue #27)

**Decision: Implement contribution traceability.** The two featured project descriptions above now link directly to relevant commits, rather than asking a reader to search the later evidence table. The third repository description likewise links the Plan commits. These commits show repository changes, not independently observed browser test passes.

**Decision: Defer public professional links.** LinkedIn remains uncreated and the résumé is not public until a privacy-reviewed URL is provided. No placeholder or fabricated link is published.

**Verification performed:** Inspected GitHub source for the Plan and opened the diffs of T-shirt commit `3050b70`, group commits `dde3b7d` and `7aa1eb0`. Confirmed the three repository targets exist as public repositories. **Not performed:** direct rendered-page browser click-through, 1440×900 or 375×812 viewport tests, executing the SQLite tests, or an independent classmate review. These remain pending, not passing.

**Peer retry request:** @Shakti2008, please independently open this updated Plan and the linked commits, confirm the two project stories and three repository links, check US1–US5 against the published page where possible, and post findings and any retry result on [issue #27](https://github.com/davidjimen2008-spec/is117-career-portfolio/issues/27). The owner/AI-assisted audit is not a substitute for your review. Keep the issue open until your feedback and retry are documented.


## November 23 checkpoint update — React documentary and final verification

**Current Canvas deadline:** November 23, 2026, 11:30 a.m. Eastern. The earlier November 16 date in the project history refers to the original checkpoint and does not override Canvas.

### React documentary reflection — student-provided response

> One interesting idea about React is how developers can create reusable components instead of writing the same code multiple times. For my portfolio, I could create a ProjectCard component that displays information about ABOVE THE MEAN and Student Tutoring Platform. This would make my website more organized and easier to update.

**Source:** *React.js: The Documentary* (Honeypot), https://www.youtube.com/watch?v=8pDqJVdNa44

**Implementation status:** `ProjectCard` is a proposed future component, not an implemented feature. The paragraph above was supplied by the student; documentary viewing was not independently verified.

### Submission and review status

- **Plan:** Reader, page comparison, five stories, professional materials and contribution evidence documented above.
- **Peer review:** [Issue #27](https://github.com/davidjimen2008-spec/is117-career-portfolio/issues/27) is the independent review request. Initial AI-assisted feedback was posted by @Shakti2008 on November 23; final post-fix reviewer retry remains pending. Do not close based on owner-side review alone.
- **Verification:** Link and responsive checks remain planned unless actual dated results are recorded. A successful deployment job is not proof of rendered-page functionality.
- **Canvas:** Submit the [Plan source](https://github.com/davidjimen2008-spec/is117-career-portfolio/blob/main/docs/portfolio/plan.md), [published documentation Plan](https://davidjimen2008-spec.github.io/is117-career-portfolio/portfolio/plan), [repository](https://github.com/davidjimen2008-spec/is117-career-portfolio), and [review issue #27](https://github.com/davidjimen2008-spec/is117-career-portfolio/issues/27), noting any pending items truthfully.

**Change note (November 23):** Updated the Canvas deadline, added an explicitly unverified React documentary reflection scaffold and concrete portfolio component example, and clarified remaining independent review, verification, and submission tasks. No new test pass or classmate feedback is claimed.


## Response to Shakti's November 23 Review 2 feedback (issue #27)

**Source:** [Shakti2008's initial AI-assisted review](https://github.com/davidjimen2008-spec/is117-career-portfolio/issues/27#issuecomment-7106064288). This review checked repository sources and commit diffs; it explicitly did not perform live browser/device tests.

| Finding | Decision and rationale | Verification status |
|---|---|---|
| Reviewer-status inconsistency | **Implement:** Updated the earlier checkpoint section to name assigned reviewer @Shakti2008 and link the dated feedback. | Plan source changed; ask Shakti to reopen the source and confirm |
| Contribution verification wording | **Clarify/defer functional claims:** Linked commits prove checked-in changes and documentation, not that tests were executed. Do not describe the test file as a passing test. A dated execution log is required for any future claim of a successful run. | No new executed-test result claimed |
| Published site and US1–US4 | **Defer pending manual browser checks:** Test at 1440 × 900 and 375 × 812, click both featured project links and all three repository links, check keyboard navigation and record browser/date/observed result. | Not run; no browser success claimed |
| US5 final retry | **Request reviewer retry:** Reopen this Plan and issue #27, check corrected reviewer attribution, inspect any new evidence and report pass/fail. | Pending Shakti's independent retry |

**Change note:** Addressed the reviewer attribution discrepancy and recorded explicit decisions for all four findings. This documentation update does not substitute for the React documentary viewing, browser tests, a classmate retry, or Canvas submission.


### Browser verification reported by student — November 23, 2026

**Environment:** Student's desktop browser (exact browser/version not confirmed). **Observed by student:** The published Portfolio Plan opened successfully, and the three project repository links (ABOVE THE MEAN, Student Tutoring Platform, Career Portfolio) worked when tested from the published Plan. These are student-reported manual results, not independently executed browser tests by the AI assistant. **Additional student-reported result:** The published Plan looked good at the requested 375 × 812 mobile viewport; no visible layout issue was reported. **Additional student-reported result:** Desktop layout at the requested 1440 × 900 viewport also looked good, with no visible layout issue reported. **Still pending:** Keyboard-navigation check and Shakti's final reviewer retry.
