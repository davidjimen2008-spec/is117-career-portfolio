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

**Checkpoint:** IS117-005, due November 16, 2026 at 11:30 a.m. ET. This section extends the existing career research rather than repeating a competitor report.

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

1. **ABOVE THE MEAN — T-shirt / Brand Studio:** [Individual repository](https://github.com/davidjimen2008-spec/is117-brand-studio). Story: researching clothing competitors and making brand/site design decisions. **Reported personal contribution:** design work and implementation verification. **Evidence to attach:** specific design or research files, relevant commits, and an observed verification record. Do not claim an online store or production launch without proof.
2. **Student Tutoring Platform — shared group business:** [Shared repository](https://github.com/davidjimen2008-spec/is117-group-business). Story: planning a tutoring platform with a partner. **Reported personal contribution:** design work and implementation verification; specific commits and task ownership still need attribution. **Partners:** David Jimenez (`davidjimen2008-spec`) and Shakti (`Shakti2008`; full name not supplied). Both partners should link the same shared repository. **Evidence to attach:** group decisions, issues, individual commits and reviewer verification; do not claim a finished app.
3. **Career research / portfolio documentation:** [Individual repository](https://github.com/davidjimen2008-spec/is117-career-portfolio). This repository documents employer research, evidence-to-decision trace, the portfolio plan, and review work. **Reported personal contribution:** design and implementation verification; specific authorship and test results require inspection. This is the third required repository, not a substitute for the two featured project stories.

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

**Reviewer:** Not assigned. **Feedback received for this checkpoint:** None claimed. **Status:** Awaiting a real classmate's review. Ask the reviewer to (1) find both featured stories and reported contributions, (2) locate three repositories and professional-link statuses, (3) compare the two approaches and check all five stories, and (4) open at least one evidence source. Record feedback in a GitHub issue.

**Decision workflow:** feedback issue → decide implement / investigate / defer / decline with reason → reference issue number in a documentation or code commit/PR → record actual verification date, steps and result → ask reviewer to retry → close only if resolved. Earlier issues and research work do not count as this checkpoint's peer feedback automatically.

**AI assistance:** AI helped draft and organize this plan and may commit it. The student must inspect links, claims, implementation status, and evidence; AI-generated planning text is not evidence of a completed test or peer review.

## Open questions and next actions

1. Assign a classmate reviewer, obtain feedback, respond and request a retry. If none is available, document the request and contact the instructor.
2. Identify exact design/verification commits for the T-shirt and group projects; distinguish student contributions from collaborators' work.
3. Provide a privacy-reviewed résumé link; create LinkedIn later.
4. Verify published page and links after deployment and record the actual results.
5. Paste this updated record, repository/site URL and feedback issue into the **Canvas Plan checkpoint**; do not treat the GitHub issue as submission.

**Change note:** Added reader and goal, compared two page approaches, chose a project-first structure, specified five checkable user stories, mapped all three repositories and professional materials, and kept unverified contributions, peer feedback and future testing explicitly pending.
