# Releasing

moticon publishes three packages from one monorepo, each on its **own,
independent** version line:

| Package | npm | Depends on |
|---|---|---|
| `@moticon/react` | published | — |
| `@moticon/mcp` | published | `@moticon/react` (`^0.1.2` — a range, not lockstep) |
| `moticon` (CLI) | **not yet published** | `@moticon/react` (`^0.1.2`) |

A change to `@moticon/react` bumps only `@moticon/react`. `@moticon/mcp` and
`moticon` are bumped only when *their own* source changes — or automatically,
by a patch, when a `@moticon/react` **breaking** change makes their dependency
range unsatisfiable (Changesets handles this; see below).

Versioning and changelogs are handled by **Changesets**. Publishing is done by
`.github/workflows/release.yml` using **npm trusted publishing** (OIDC) — there
is no long-lived npm token in this repo.

---

## Normal release

### 1. Land changesets

Every PR that changes a published package includes a changeset
(`npx changeset`, committed as `.changeset/*.md`). Nothing extra here.

### 2. Bump versions on `main`

With the intended changesets merged:

```bash
git checkout main && git pull
npm run version-packages     # changeset version + lockfile reconcile
npm run release:check        # read-only sanity check
```

`release:check` is strictly read-only — it never modifies `package.json`,
`package-lock.json`, or any other tracked file (the lockfile consistency check
runs inside a throwaway temp directory). It verifies:

- only packages that changed since HEAD were bumped, and each bumped package
  has a matching `CHANGELOG.md` entry
- every internal dependency range still resolves
- the private site's `@moticon/react` range wasn't rewritten
- `package.json` and `package-lock.json` are consistent

Non-zero exit on any problem. If it fails, fix the working tree by hand (never
`git checkout`) and re-run.

Then open a version-bump PR:

```bash
git checkout -b release/$(date +%Y-%m-%d)
git add -A
git commit -m "release: version packages"
```

Review the diff — versions, each `CHANGELOG.md`, `package-lock.json`, and that
`apps/site/package.json` is untouched. Merge to `main`.

### 3. Publish (dry run first)

Wait for CI on `main` to go green, then:

**GitHub → Actions → Release → Run workflow**

- **dry-run = true** — runs the `validate` job only: build, typecheck, size,
  `npm pack`, and a registry check that prints which package versions *would*
  be published. No OIDC, no environment approval.
- Read the output. Confirm the versions are what you expect.

Then run it again:

- **dry-run = false** — `validate` runs again, then the `publish` job waits for
  the **`npm-publish`** environment approval. On approval it publishes any
  package whose exact version isn't already on npm (already-published versions
  are skipped, not errored). npm generates provenance automatically. The final
  step retries `npm view … dist.attestations` up to 5× and fails if
  attestations never appear.

### 4. Verify

```bash
npm view @moticon/react@X.Y.Z --json | node -e "process.stdin.once('data',d=>{const j=JSON.parse(d);console.log('attestations:', !!(j.dist&&j.dist.attestations))})"
```

### 5. Tag — only after a successful publish

Tags are created **after** publish so a failed publish never leaves a dangling
release tag. Tag only the packages that were actually published this run:

```bash
git checkout main && git pull
# for each published package:
REACT_VER=$(node -p "require('./packages/moticon/package.json').version")
git tag "@moticon/react@$REACT_VER"
git push origin "@moticon/react@$REACT_VER"
# ...and @moticon/mcp only if it was bumped and published this run.
```

If `@moticon/mcp` didn't change this cycle, there is **no `@moticon/mcp` tag
and no `@moticon/mcp` release**.

### 6. GitHub Release — one per published package

**GitHub → Releases → Draft a new release** → pick the tag (e.g.
`@moticon/react@X.Y.Z`) → **Generate release notes** (uses
`.github/release.yml` categories) → add a short summary:

```
## @moticon/react X.Y.Z

<one-line highlight>

npm install @moticon/react@X.Y.Z motion
```

Repeat for `@moticon/mcp` if it was published.

---

## Example: `@moticon/react` patch, nothing else changed

```
@moticon/react   0.1.2 -> 0.1.3
@moticon/mcp     unchanged
moticon          unchanged

npm publish:     @moticon/react@0.1.3
git tag:         @moticon/react@0.1.3
GitHub Release:  @moticon/react 0.1.3
```

No `@moticon/mcp` tag, no `@moticon/mcp` release.

## Example: `@moticon/react` breaking change

```
@moticon/react   0.1.x -> 0.2.0   (minor = breaking in 0.x)
@moticon/mcp     0.1.x -> 0.1.(x+1)   (auto patch; dep range -> ^0.2.0)
moticon          version unchanged  (in `ignore` — CLI is deferred),
                 dep range still rewritten to ^0.2.0 for whenever it does ship
```

`@moticon/react` and `@moticon/mcp` each get their own npm publish, tag and
GitHub Release. Changesets rewrites the internal dependency ranges — including
the deferred CLI's — so nothing can publish against an incompatible
`@moticon/react`.

---

## `moticon` CLI — DEFERRED (not in the first launch)

> **Status:** the CLI is **not** part of the initial release. `packages/cli`'s
> `add` command copies from `@moticon/react`'s bare `src/icons` geometry, not
> the enhanced `src/enhanced` motion layer — so `moticon add Bell` produces a
> Bell that does not ring. Fixing it means porting the CLI to the shared
> `packages/moticon/scripts/lib/icon-source.mjs` transform + a build-time icon
> artifact, the same work done for `@moticon/mcp` in step 7. Until that lands:
>
> - `moticon` is in `.changeset/config.json` `ignore` — `changeset version`
>   never bumps it
> - `.github/workflows/release.yml` does not publish it (already the case)
> - `@moticon/react` and `@moticon/mcp` READMEs describe it as roadmap only,
>   with no copyable `npx moticon` command
> - the bootstrap steps below apply only **after** the CLI is fixed and the
>   maintainer decides to publish it

The CLI has never been on npm, so a trusted publisher can't be configured for it
yet. When it is ready, bootstrap it manually:

1. **Confirm the name is still free**
   ```bash
   npm view moticon
   ```
   Expect `E404`. If it returns a package, the name was taken — stop.

2. **Inspect what will ship**
   ```bash
   cd packages/cli
   npm pack --dry-run
   ```
   Expect only: `dist/`, `README.md`, `LICENSE`, `package.json`.

3. **Clean build**
   ```bash
   npm run typecheck && npm run build
   ```

4. **Log in with 2FA**
   ```bash
   npm login
   ```
   Use an account with 2FA. Do **not** create a long-lived automation token.

5. **Publish**
   ```bash
   npm publish --access public
   ```
   npm prompts for a one-time password.

6. **Verify**
   ```bash
   npm view moticon version   # -> 0.1.0
   npx moticon@0.1.0 --help
   ```

7. **Tag and release** — `git tag moticon@0.1.0`, push, draft the GitHub
   Release.

8. **Configure the trusted publisher** — npmjs.com → `moticon` → Settings →
   Trusted publishing → Add (see the table below).

9. **Add it to the workflow** — in `.github/workflows/release.yml`, extend the
   `publish_if_new` calls (and the `validate` inspection loop) to include
   `moticon` mapped to `packages/cli`. Include it in the changesets cadence
   from then on.

After step 9 the CLI releases through OIDC like the others.

---

## One-time maintainer setup (before the first automated release)

Do these in order. They can't be done from code.

### 1. npm trusted publishers

npmjs.com → **`@moticon/react`** → Settings → **Trusted publishing** → Add:

| Field | Value |
|---|---|
| Provider | GitHub Actions |
| Organization or user | `ferhadsultan98` |
| Repository | `moticon` |
| Workflow filename | `release.yml` |
| Environment | `npm-publish` |
| Allowed actions | **`npm publish`** (not `npm stage publish` — staged publishing is not used) |

Repeat for **`@moticon/mcp`**.

### 2. GitHub environment

Repo → Settings → **Environments** → **New environment** → `npm-publish`:

- **Required reviewers**: the maintainer
- **Deployment branches and tags**: `main` only
- **Prevent self-review**: leave this **OFF** while there is a single
  maintainer — with it on, the maintainer cannot approve their own release run
  and the release deadlocks. Turn it on once a second maintainer exists.

The environment name here must exactly match the `environment:` in
`release.yml` and the "Environment" field in the npm trusted publisher config
(`npm-publish`).

### 3. Branch protection on `main` (recommended)

Require the CI check; no direct pushes.

### 4. Only after 1–3

Run the Release workflow — dry-run first.
