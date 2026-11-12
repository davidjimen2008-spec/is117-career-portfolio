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


## Alternatives considered and why the plan prioritizes frontend evidence

The research audience is **an early-career student exploring frontend internships and junior developer positions**, and a secondary audience is **a classmate or instructor who needs to inspect the reasoning**. This is not a claim that every employer uses the same hiring criteria.

| Possible portfolio direction | Evidence or rationale | Benefit | Tradeoff | Decision |
|---|---|---|---|---|
| Static HTML/CSS landing page | Demonstrates page structure and basic visual design, but does not directly demonstrate the React and API experience mentioned in the researched roles | Small scope and easy to inspect | Limited evidence of application behavior | Use as a starting point, not the sole portfolio artifact |
| Responsive interactive JavaScript interface | Responsive design is mentioned in the Priceline research; a working UI can be inspected on multiple screen sizes | Shows user interaction, layout, and accessibility decisions | Requires real device/keyboard verification | **First implementation priority** |
| React component with documented states | NYT research mentions React; Priceline mentions modern client-side frameworks | More directly connected to framework experience | More setup and learning; a component alone does not prove professional readiness | **Second implementation priority** |
| API-backed interface | Priceline research mentions REST/GraphQL familiarity | Demonstrates data handling and error states | External services can be unreliable; tests need stubs or controlled responses | **Third implementation priority** |
| Backend-only application | Could build general engineering skills | Useful later for broader software roles | Less directly connected to the specific frontend research question | Defer for this research checkpoint |

**Reasoning:** The recommended order starts with a usable responsive interface, then adds React and an API-backed feature. This sequence balances beginner scope against the employer requirements actually recorded. It is a **research-informed choice**, not a promise that an employer would select the candidate.

## Audience needs and honest presentation

- **Student audience:** needs a manageable sequence of skills to learn, a concrete project idea, and observable success criteria.
- **Reviewer audience:** needs original employer links, dated evidence, clearly labeled assumptions, and an issue-to-change-to-check trail.
- **Communication choice:** use plain-language labels and concise navigation so readers can distinguish the employer's wording from our proposed project.
- **Honest persuasion:** do not imply the skills illustration is a measured statistic, that the roles are currently open, or that planned software tests have passed.

## One inspectable evidence-to-decision walkthrough

1. **Original evidence:** The New York Times posting recorded in the [role cards](./roles) lists React among its technologies.
2. **Interpretation:** A small React component may provide a concrete example of relevant practice; the employer did not require this particular project.
3. **Decision:** The [portfolio roadmap](../portfolio/plan) proposes a reusable React component after the initial responsive interface.
4. **Planned check:** Test C1 specifies changing the component input twice and observing matching output without console errors.
5. **Actual result:** **Not run**. A future tester must record a date, environment, result, and evidence before this can be marked verified.

This trace is designed so another person can challenge the source, interpretation, decision, or test separately.
