# Security Policy

## Supported versions

Only the latest published version of each moticon package receives security
fixes. There is no backport policy for older versions — upgrade to the latest
release.

| Package | Fixes land in |
|---|---|
| `@moticon/react` | latest published release |
| `@moticon/mcp` | latest published release |

## Reporting a vulnerability

**Do not disclose a security vulnerability in a public issue, discussion, or
pull request.**

### Preferred

If the repository has GitHub Private Vulnerability Reporting enabled, use the
**"Report a vulnerability"** button on the repository's **Security** tab. That
gives you a private thread with the maintainer.

### If that option isn't available

GitHub Private Vulnerability Reporting may not be enabled yet. In that case:

1. Open a **minimal** public issue that contains **no vulnerability details** —
   just ask the maintainer to open a private channel for a security report.
2. Wait for the maintainer to respond with a private way to share the details
   (a GitHub Security Advisory draft, or another private channel).
3. Share the full details only through that private channel.

Never put reproduction steps, proof-of-concept code, or affected-code
specifics in the public issue.

### What to include (once you have a private channel)

- affected package and version
- a description of the issue and its impact
- steps to reproduce, or a proof of concept
- any suggested fix

You'll get an initial response as soon as the maintainer is able to review it.
There is no formal SLA on a project this size, but reports are triaged in order
of severity.

## Scope

In scope:

- the published `@moticon/react` and `@moticon/mcp` packages
- the build and release tooling in this repository
- a compromised or malicious published release / supply-chain issue

Out of scope:

- vulnerabilities in `motion`, `react`, or other third-party dependencies —
  report those to their maintainers (a heads-up here is welcome if it affects
  moticon users)
- the showcase site's hosting infrastructure
- issues that require an already-compromised developer machine

## Dependencies

moticon keeps its runtime surface small: `@moticon/react` ships no runtime
dependencies and declares `motion` and `react` as peer dependencies. If you
find a dependency-related security issue, include which package and version
introduces it.

## For the maintainer

- **Enable private reporting:** Settings → Code security → *Private vulnerability
  reporting* → **Enable**. Until then the "Report a vulnerability" button is not
  available and reporters must use the fallback above.
- **Enable Dependabot alerts and security updates:** Settings → Code security.
  The `.github/dependabot.yml` in this repo configures *version* update PRs only;
  it does **not** turn on security alerts or automated security-fix PRs — those
  are separate repository settings.
