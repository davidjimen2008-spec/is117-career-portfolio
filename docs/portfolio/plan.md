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
