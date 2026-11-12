# Comparing career opportunities

**Question:** Which documented employer expectations should guide an early web-development portfolio?

## Role comparison

| Dimension | NYT Frontend Intern | Priceline Junior Frontend Engineer |
|---|---|---|
| Career stage | 10-week summer internship | Full-time junior role |
| Work | Frontend products, cross-functional collaboration | High-traffic travel applications, performance, APIs |
| Technologies | React, GraphQL, CSS Modules | JavaScript/TypeScript, client-side frameworks, Node.js, REST/GraphQL |
| Qualifications | Six months educational or professional frontend experience | CS bachelor's degree and early JavaScript/TypeScript experience |
| Deadline | Not stated | Not stated |
| Original source | [NYT employer posting](https://job-boards.greenhouse.io/thenewyorktimes/jobs/4751909005) | [Priceline employer posting](https://priceline.wd1.myworkdayjobs.com/en-US/priceline/job/New-York/Junior-Software-Engineer_R5885) |

**Source date:** November 12, 2026. See [role cards and availability caveats](./roles).

## Trace each finding into a decision

| Employer evidence (dated observation) | Interpretation / assumption (ours) | Proposed portfolio decision | Planned verification |
|---|---|---|---|
| [NYT posting](https://job-boards.greenhouse.io/thenewyorktimes/jobs/4751909005) lists React; Priceline describes modern client-side framework experience | A reusable React interface can demonstrate relevant framework practice, but cannot guarantee hiring readiness | Implement a small React component with clear inputs and outputs | Exercise the component and document expected vs actual behavior |
| [Priceline posting](https://priceline.wd1.myworkdayjobs.com/en-US/priceline/job/New-York/Junior-Software-Engineer_R5885) mentions REST/GraphQL APIs | An API integration is a reasonable portfolio demonstration; the employer does not prescribe this specific project | Add an API-backed feature with loading, success and error states | Simulate successful, slow and failed requests |
| [Priceline posting](https://priceline.wd1.myworkdayjobs.com/en-US/priceline/job/New-York/Junior-Software-Engineer_R5885) mentions responsive design | Usability at different screen widths is important for frontend work | Use responsive layout and keyboard-accessible controls | Check phone and desktop widths and keyboard operation |
| Both researched roles describe cross-functional collaboration | Public issue/PR history can show an inspectable collaboration process | Keep peer-review issues and decisions linked to code/docs | Reviewer traces one issue to a commit, verification and retry |

## Decision and evidence status

**Decision:** Start with an accessible responsive interface, then add React and an API-backed feature. These are **proposed features**, not completed implementations.

**Verification status:** Planned; no tests are claimed as performed. See [feature plan and proposed test cases](../portfolio/plan) and [peer-review log](../review/log).
