# FerriteMC Rebranding Plan — PaperMC → FerriteMC

## Mapping Reference
| PaperMC → | FerriteMC |
|---|---|
| Paper | Papercut |
| Folia | Blocklest |
| Velocity | Relay (Ferrite Relay) |
| Waterfall | Velonation |
| (new) | Void (NanoLimbo replacement, fork of Blocklest) |
| PaperMC org | FerriteMC |
| Brand color #2CC2A0 | #E85D3A (rust orange) |
| Tagline: any | "Rust-powered Minecraft" |
| github.com/PaperMC | github.com/FerriteMC |
| discord.gg/papermc | discord.gg/ferritemc |
| docs.papermc.io | docs.ferritemc.io |
| hangar.papermc.io | hangar.ferritemc.io |
| jd.papermc.io | jd.ferritemc.io |
| fill.papermc.io | fill.ferritemc.io |
| forums.papermc.io | forums.ferritemc.io |
| assets.papermc.io | assets.ferritemc.io |
| paper-playercount API | ferritemc-playercount API |
| paper.astro (package name) | ferritemc-astro |

---

## 1. CONFIG FILES

### `astro.config.mjs`
| Line | Current | Change to |
|---|---|---|
| 29 | `site: "https://papermc.io"` | `site: "https://ferritemc.io"` |

### `package.json`
| Line | Current | Change to |
|---|---|---|
| 2 | `"name": "paper-astro"` | `"name": "ferritemc-astro"` |

### `src/content.config.ts`
| Line | Current | Change to |
|---|---|---|
| 6 | `const DEFAULT_AUTHOR = "Paper Team"` | `const DEFAULT_AUTHOR = "FerriteMC Team"` |
| 7 | `const DEFAULT_AVATAR = "https://assets.papermc.io/brand/papermc_logo.min.svg"` | `const DEFAULT_AVATAR = "https://assets.ferritemc.io/brand/ferritemc_logo.min.svg"` |

### `wrangler.jsonc`
| Line | Current | Change to |
|---|---|---|
| 3 | `"name": "papermc-website"` | `"name": "ferritemc-website"` |

---

## 2. STYLES — `src/styles/global.css`

No PaperMC brand color `#2CC2A0` directly present. The blue-500 is used as accent. Replace blue-500 with `#E85D3A` (rust orange).

| Lines | Current | Change to |
|---|---|---|
| 235 | `--btn-color: var(--color-blue-500)` | `--btn-color: #E85D3A` |
| Every `.text-blue-500` usage | Various | Replace `text-blue-500` with appropriate rust orange. **Note**: Use a Tailwind approach — either define a custom `--color-rust` or replace all instances. Since `text-blue-500` is used extensively across the codebase, the cleanest approach is adding `--color-rust: #E85D3A` to `@theme` in global.css, and replacing `text-blue-500` with `text-rust` across all files. |

**Alternative approach**: Add `--color-rust-500: #E85D3A` to the `@theme` block, then either:

1. Change `text-blue-500` → `text-rust-500` everywhere (preferred for clean semantics)
2. Or override `color-blue-500` = `#E85D3A` (but this would break any true-blue usage)

Recommend: Option 1.

### New CSS variable in `src/styles/global.css`
Add to `@theme` block (after line 60):
```
--color-rust-500: #E85D3A;
--color-rust-400: #eb7a52;
--color-rust-600: #d04a2a;
```

---

## 3. LAYOUT — `src/layouts/Layout.astro`

| Line | Current | Change to |
|---|---|---|
| 26 | `content="PaperMC"` (og:site_name) | `content="FerriteMC"` |
| 28 | `content="PaperMC"` (twitter:title) → match title var | `content={title}` (use dynamic title, not hardcoded) |
| 33 | `href="https://papermc.io"` (canonical URL pattern) | `href="https://ferritemc.io"` |
| 36 | `<title>{\`$\{title} \| PaperMC\`}</title>` | `<title>{\`$\{title} \| FerriteMC\`}</title>` |

---

## 4. COMPONENTS

### `src/components/layout/NavBar.astro`
| Line | Current | Change to |
|---|---|---|
| 21 | `alt="PaperMC"` | `alt="FerriteMC"` |
| 29 | `Paper` | `Papercut` |
| 30 | `Folia` | `Blocklest` |
| 31 | `Velocity` | `Relay` |
| 32 | `Waterfall` (eol) | `Velonation` (eol) |
| 34 | `href="https://hangar.papermc.io/"` | `href="https://hangar.ferritemc.io/"` |
| 38 | `href="https://docs.papermc.io/"` | `href="https://docs.ferritemc.io/"` |
| 49 | `href="https://discord.gg/papermc"` | `href="https://discord.gg/ferritemc"` |
| 50 | `href="https://github.com/PaperMC"` | `href="https://github.com/FerriteMC"` |

**Add** a new dropdown entry for Void after Blocklest (line 30):
`<NavDropDownLink href="/software/void">Void</NavDropDownLink>`

### `src/components/layout/Footer.astro`
| Line | Current | Change to |
|---|---|---|
| 17 | `href="https://docs.papermc.io"` | `href="https://docs.ferritemc.io"` |
| 31 | `href="https://github.com/PaperMC"` | `href="https://github.com/FerriteMC"` |
| 34 | `href="https://discord.gg/papermc"` | `href="https://discord.gg/ferritemc"` |
| 37 | `href="https://forums.papermc.io/"` | `href="https://forums.ferritemc.io/"` |
| 42 | `<span class="font-semibold">PaperMC</span>` | `<span class="font-semibold">FerriteMC</span>` |
| 57 | `href="https://hangar.papermc.io"` | `href="https://hangar.ferritemc.io"` |
| 65 | `href="https://forums.papermc.io/help/terms/"` | `href="https://forums.ferritemc.io/help/terms/"` |
| 68 | `href="https://forums.papermc.io/help/privacy-policy/"` | `href="https://forums.ferritemc.io/help/privacy-policy/"` |
| 71 | `href="https://forums.papermc.io/help/legal-notice/"` | `href="https://forums.ferritemc.io/help/legal-notice/"` |
| 74 | `href="https://hangar.papermc.io/terms"` | `href="https://hangar.ferritemc.io/terms"` |
| 77 | `href="https://hangar.papermc.io/privacy"` | `href="https://hangar.ferritemc.io/privacy"` |
| 90 | `© {new Date().getFullYear()} The PaperMC Team` | `© {new Date().getFullYear()} The FerriteMC Team` |
| 93 | `href="https://github.com/PaperMC/website/"` | `href="https://github.com/FerriteMC/website/"` |
| 93 | `PaperMC/website` | `FerriteMC/website` |
| 95 | `href="https://github.com/PaperMC/website/commit/$\{hash}"` | `href="https://github.com/FerriteMC/website/commit/$\{hash}"` |

### `src/components/layout/SoftwareHeader.astro`
| Line | Current | Change to |
|---|---|---|
| 45 | `href="https://docs.papermc.io/$\{id}"` | `href="https://docs.ferritemc.io/$\{id}"` |
| 72 | `href="https://jd.papermc.io/$\{software}/$\{latest}"` | `href="https://jd.ferritemc.io/$\{software}/$\{latest}"` |

### `src/components/data/SoftwarePreview.astro`
| Line | Current | Change to |
|---|---|---|
| 61 | `anchor.href = \`https://jd.papermc.io/$\{software}\`` | `anchor.href = \`https://jd.ferritemc.io/$\{software}\`` |

### `src/components/data/SoftwareDownload.svelte`
| Line | Current | Change to |
|---|---|---|
| 128 | `href="https://fill-ui.papermc.io/projects/$\{id}"` | `href="https://fill-ui.ferritemc.io/projects/$\{id}"` |

### `src/components/data/SoftwareBuildChanges.svelte`
| Line | Current | Change to |
|---|---|---|
| 35 | `url: \`https://github.com/PaperMC/$\{project}/issues/$\{n}\`` | `url: \`https://github.com/FerriteMC/$\{project}/issues/$\{n}\`` |

### `src/components/layout/NavDropDown.astro`
Review this file — if it contains any PaperMC reference, update.

### `src/components/layout/NavDropDownLink.astro`
Review this file.

### `src/components/PlayersCount.svelte`
| Line | Current | Change to |
|---|---|---|
| 34 | `/internal-api/paper-playercount` | `/internal-api/ferritemc-playercount` |

### `src/components/Terminal.svelte`
| Line | Current | Change to |
|---|---|---|
| 42 | `window.location.href = "https://hangar.papermc.io"` | `window.location.href = "https://hangar.ferritemc.io"` |
| 46 | `window.location.href = "https://docs.papermc.io"` | `window.location.href = "https://docs.ferritemc.io"` |
| 100 | `for (const ch of " -jar paper.jar")` | Keep as `paper.jar` (the jar filename could remain `paper.jar` for backwards compat, OR change to `papercut.jar` — decide) |

---

## 5. PAGES

### `src/pages/index.astro`
| Line | Current | Change to |
|---|---|---|
| 16 | `description={"PaperMC is a Minecraft..."}` | `description={"FerriteMC is a Rust-powered Minecraft software organization..."}` |
| 17 | `keywords={["papermc", "paper", ...]}` | `keywords={["ferritemc", "papercut", "rust", "minecraft", "performance"]}` |
| 23-24 | `Modern software. <br /> Built to perform.` | `Rust-powered software. <br /> Built to perform.` |
| 27-28 | `PaperMC improves Minecraft's ecosystem...` | `FerriteMC improves Minecraft's ecosystem with Rust-powered, fast, and secure software...` |
| 32 | `href="https://docs.papermc.io"` | `href="https://docs.ferritemc.io"` |
| 47 | `name="Paper"` | `name="Papercut"` |
| 48 | `icon="brand/paper"` | `icon="brand/papercut"` |
| 50 | `description="Paper is a Minecraft..."` | `description="Papercut is a Rust-powered Minecraft game server based on Paper, designed to greatly improve performance..."` |
| 53 | `name="Velocity"` | `name="Relay"` |
| 54 | `icon="brand/velocity"` | `icon="brand/relay"` |
| 56-57 | `Velocity is a high-performance...` | `Relay (Ferrite Relay) is a high-performance, scalable Minecraft proxy server...` |
| 60 | `name="Folia"` | `name="Blocklest"` |
| 61 | `icon="brand/folia"` | `icon="brand/blocklest"` |
| 63-64 | `Folia is a new fork of Paper that adds...` | `Blocklest is a new fork of Papercut that adds regionized multithreading...` |
| 77 | `Crafted by the PaperMC team & contributors` | `Crafted by the FerriteMC team & contributors` |
| 82 | `href="https://hangar.papermc.io/"` | `href="https://hangar.ferritemc.io/"` |
| 95 | `PaperMC's software powers` | `FerriteMC's software powers` |
| 108 | `PaperMC software is a good choice.` | `FerriteMC software is a good choice.` |

**Add** a 4th SoftwarePreview card for Void below the Folia entry.

### `src/pages/downloads/index.astro`
| Line | Current | Change to |
|---|---|---|
| 8 | `keywords={["papermc", ...]}` | `keywords={["ferritemc", ...]}` |
| 21 | `name="Paper"` | `name="Papercut"` |
| 22 | `icon="brand/paper"` | `icon="brand/papercut"` |
| 23 | `description="Paper is a Minecraft..."` | `description="Papercut is a Rust-powered Minecraft game server..."` |
| 28 | `name="Folia"` | `name="Blocklest"` |
| 29 | `icon="brand/folia"` | `icon="brand/blocklest"` |
| 30 | `description="Folia is a new fork..."` | `description="Blocklest is a new fork of Papercut..."` |
| 35 | `<h2 class="...">Proxy Software</h2>` | Keep |
| 37 | `name="Velocity"` | `name="Relay"` |
| 38 | `icon="brand/velocity"` | `icon="brand/relay"` |
| 39 | `description="Velocity is the modern..."` | `description="Relay is the modern, high-performance Minecraft server proxy."` |
| 44 | `name="Waterfall"` | `name="Velonation"` |
| 45 | `icon="brand/waterfall"` | `icon="brand/velonation"` |
| 46 | `description="Waterfall is a legacy..."` | `description="Velonation is a legacy drop-in BungeeCord replacement..."` |

**Add** Void under "Server Software" section.

### `src/pages/downloads/paper.astro`
| Line | Current | Change to |
|---|---|---|
| 14 | `title="Paper"` | `title="Papercut"` |
| 15 | `description="Download Paper..."` | `description="Download Papercut..."` |
| 16 | `keywords={["papermc", ...]}` | `keywords={["ferritemc", ...]}` |
| 20 | `id="paper"` | Keep `id="paper"` if API still uses "paper" as project ID, or change to `id="papercut"` |
| 21 | `description="Download Paper..."` | `description="Download Papercut..."` |
| 22 | `experimentalWarning="Download experimental builds of Paper..."` | `experimentalWarning="Download experimental builds of Papercut..."` |

**Decision needed**: Does the download API use project IDs like "paper" or "papercut"? If the API stays as "paper", keep IDs matching the API and just change display names.

### `src/pages/downloads/folia.astro`
Same pattern — rename `Folia` → `Blocklest` in titles/descriptions/keywords.

### `src/pages/downloads/velocity.astro`
Same pattern — rename `Velocity` → `Relay`.

### `src/pages/downloads/waterfall.astro`
Same pattern — rename `Waterfall` → `Velonation`.

### `src/pages/software/paper.astro`
| Line | Current | Change to |
|---|---|---|
| 19 | `title="Paper"` | `title="Papercut"` |
| 20 | Description text | Replace "Paper" with "Papercut" |
| 21 | `keywords={["papermc", ...]}` | `keywords={["ferritemc", ...]}` |
| 24 | `id="paper" name="Paper" icon="brand/paper"` | `id="papercut" name="Papercut" icon="brand/papercut"` |
| 26-27 | `The blazing fast<br />Minecraft server` | Change |
| 29 | Description text | Replace "Paper" → "Papercut" |
| 34 | `Why Paper?` | `Why Papercut?` |
| 62 | `Crafted by the PaperMC team` | `Crafted by the FerriteMC team` |
| 67 | `href="https://hangar.papermc.io/"` | `href="https://hangar.ferritemc.io/"` |
| 83-84 | `href="https://docs.papermc.io/paper/getting-started"` | `href="https://docs.ferritemc.io/papercut/getting-started"` |
| 98 | `href="https://discord.gg/papermc"` | `href="https://discord.gg/ferritemc"` |

### `src/pages/software/folia.astro`
Replace `Folia` → `Blocklest` throughout.

### `src/pages/software/velocity.astro`
Replace `Velocity` → `Relay` throughout.

### `src/pages/software/waterfall.astro`
Replace `Waterfall` → `Velonation` throughout. 
Replace `href="/software/velocity"` → `href="/software/relay"` (lines 21, 40).
Replace `discord.gg/papermc` → `discord.gg/ferritemc`.

### New page: `src/pages/software/void.astro`
Create new software page for Void, following the same pattern as paper.astro.

### New page: `src/pages/downloads/void.astro`
Create new downloads page for Void.

### `src/pages/team.astro`
| Line | Current | Change to |
|---|---|---|
| 18 | `description="Meet the team behind PaperMC..."` | `description="Meet the team behind FerriteMC..."` |
| 19 | `keywords={["papermc", ...]}` | `keywords={["ferritemc", ...]}` |
| 26-27 | `Meet the members behind PaperMC...` | `Meet the members behind FerriteMC...` |
| 31 | `href="https://github.com/PaperMC"` | `href="https://github.com/FerriteMC"` |

### `src/pages/sponsors.astro`
| Line | Current | Change to |
|---|---|---|
| 14 | `keywords={["papermc", ...]}` | `keywords={["ferritemc", ...]}` |
| 21-22 | `PaperMC is an open community...` | `FerriteMC is an open community...` |
| 25 | `href="https://opencollective.com/papermc"` | `href="https://opencollective.com/ferritemc"` |
| 26 | `href="https://github.com/sponsors/PaperMC"` | `href="https://github.com/sponsors/FerriteMC"` |
| 38 | `Donations help keep PaperMC sustainable` | `Donations help keep FerriteMC sustainable` |

**Note**: If PaperMC-specific Open Collective / GitHub Sponsors pages don't exist for FerriteMC, update links or remove sections.

### `src/pages/contribute.astro`
| Line | Current | Change to |
|---|---|---|
| 14 | `keywords={["papermc", ...]}` | `keywords={["ferritemc", ...]}` |
| 33 | `PaperMC uses Open Collective...` | `FerriteMC uses Open Collective...` |
| 51 | `href="https://github.com/PaperMC/Paper/blob/master/CONTRIBUTING.md"` | `href="https://github.com/FerriteMC/Papercut/blob/main/CONTRIBUTING.md"` |
| 66 | Discord link (no hardcoded URL) | Check for any |
| 81 | `href="https://github.com/PaperMC/docs"` | `href="https://github.com/FerriteMC/docs"` |

### `src/pages/404.astro`
Probably no changes needed beyond layout inheriting the FerriteMC title.

### `src/pages/javadocs.astro`
| Line | Current | Change to |
|---|---|---|
| 8 | `description="Find javadocs for our software – including Paper, Folia, Velocity, and Waterfall."` | `description="Find javadocs for our software – including Papercut, Blocklest, Relay, and Velonation."` |
| 9 | `keywords={["papermc", ...]}` | `keywords={["ferritemc", ...]}` |
| 20 | `id="paper" name="Paper" icon="brand/paper"` | `id="papercut" name="Papercut" icon="brand/papercut"` |
| 21 | `id="folia" name="Folia" icon="brand/folia"` | `id="blocklest" name="Blocklest" icon="brand/blocklest"` |
| 26 | `id="velocity" name="Velocity" icon="brand/velocity"` | `id="relay" name="Relay" icon="brand/relay"` |
| 27 | `id="waterfall" name="Waterfall" icon="brand/waterfall" eol` | `id="velonation" name="Velonation" icon="brand/velonation" eol` |

### `src/pages/community/index.astro`
| Line | Current | Change to |
|---|---|---|
| 8 | `description="We're happy to have you as a part of the PaperMC community!"` | `description="We're happy to have you as a part of the FerriteMC community!"` |
| 9 | `keywords={["papermc", ...]}` | `keywords={["ferritemc", ...]}` |
| 16 | `We're happy to have you as a part of the PaperMC community!` | `We're happy to have you as a part of the FerriteMC community!` |
| 31 | `href="https://discord.gg/papermc"` | `href="https://discord.gg/ferritemc"` |
| 43 | `href="https://forums.papermc.io/"` | `href="https://forums.ferritemc.io/"` |

### `src/pages/community/guidelines.astro`
| Line | Current | Change to |
|---|---|---|
| 9 | `description="Community Guidelines for the PaperMC community."` | `description="Community Guidelines for the FerriteMC community."` |
| 10 | `keywords={["papermc", ...]}` | `keywords={["ferritemc", ...]}` |
| 14 | `<h1>PaperMC Community Guidelines</h1>` | `<h1>FerriteMC Community Guidelines</h1>` |
| 19-25 | `PaperMC has grown...` | Replace all "PaperMC" references with "FerriteMC" |
| 29 | `<h2>The PaperMC Community</h2>` | `<h2>The FerriteMC Community</h2>` |
| 31-39 | All "PaperMC community" refs | Change to "FerriteMC community" |
| 36-38 | Discord, IRC, forums, GitHub | Update to FerriteMC equivalents |
| 45-55 | All "PaperMC" refs | Change |
| 161-162 | Discord mods references | Update |
| 168 | `PaperMC in any way` | `FerriteMC in any way` |
| 197-201 | Channel names (paper-help, folia-help, velocity-help, etc.) | Update to papercut-help, blocklest-help, relay-help |
| 213 | `#folia-help` | `#blocklest-help` |
| 219 | `#velocity-help` | `#relay-help` |
| 244 | `#paper-help`, `#folia-help`, `#velocity-help` | `#papercut-help`, `#blocklest-help`, `#relay-help` |
| 259 | `PaperMC does not officially support` | `FerriteMC does not officially support` |
| 264 | Discord ban appeal link | Update if needed |
| 277-281 | CC licensing | Probably keep |

---

## 6. DATA & UTILITIES

### `src/assets/data/team.json`
This file contains team member data. No PaperMC-specific branding in team member names, but the descriptions reference "PaperMC". These will be updated by the guidelines page changes. The team structure itself can stay — just need FerriteMC equivalents for roles.

**Note**: Team members are the PaperMC team. For FerriteMC, either:
- Keep the file as-is (if same team)
- Replace with FerriteMC team members

### `src/utils/fill.ts`
| Line | Current | Change to |
|---|---|---|
| 3 | `const API_ENDPOINT = "https://fill.papermc.io/v3"` | `const API_ENDPOINT = "https://fill.ferritemc.io/v3"` |

### `src/utils/github.ts`
| Line | Current | Change to |
|---|---|---|
| 8 | `const CONTRIBUTORS_DATA_URL = "https://raw.githubusercontent.com/PaperMC/website/data/contributors.json"` | `const CONTRIBUTORS_DATA_URL = "https://raw.githubusercontent.com/FerriteMC/website/data/contributors.json"` |
| 21 | `return \`https://github.com/PaperMC/$\{project}\`` | `return \`https://github.com/FerriteMC/$\{project}\`` |
| 22 | `return "https://github.com/PaperMC/Paper-1.7"` | `return "https://github.com/FerriteMC/Papercut-1.7"` |
| 26 | `return isVersionBelow(version, baseVersion) ? "https://github.com/PaperMC/Paper-Archive" : "https://github.com/PaperMC/Paper"` | `return isVersionBelow(version, baseVersion) ? "https://github.com/FerriteMC/Papercut-Archive" : "https://github.com/FerriteMC/Papercut"` |

### `src/utils/hangar.ts`
| Line | Current | Change to |
|---|---|---|
| 12 | `fetch(\`https://hangar.papermc.io/api/v1/projects?...\`)` | `fetch(\`https://hangar.ferritemc.io/api/v1/projects?...\`)` |

### `src/utils/bstats.ts`
| Line | Current | Change to |
|---|---|---|
| 3 | `export const PAPER_PLAYERCOUNT_KEY = "paper-playercount"` | `export const FERRITEMC_PLAYERCOUNT_KEY = "ferritemc-playercount"` |

### `src/utils/sponsors.ts`
| Line | Current | Change to |
|---|---|---|
| 45 | `const SPONSORS_DATA_URL = "https://raw.githubusercontent.com/PaperMC/website/data/sponsors.json"` | `const SPONSORS_DATA_URL = "https://raw.githubusercontent.com/FerriteMC/website/data/sponsors.json"` |

### `src/utils/download.ts`
No direct PaperMC URL refs. Uses `fill.ts` endpoint indirectly.

### `src/utils/types.ts`
No PaperMC references — pure type definitions. No changes needed.

### `src/utils/versions.ts`
No changes needed.

### `src/utils/content.ts`
No changes needed.

### `src/utils/time.ts`
No changes needed.

---

## 7. INTERNAL API PAGES

### `src/pages/internal-api/paper-playercount.ts`
| Line | Current | Change to |
|---|---|---|
| File name | `paper-playercount.ts` | Rename to `ferritemc-playercount.ts` |
| 2 | `import { fetchPaperBstatsPlayerCount, PAPER_PLAYERCOUNT_KEY }` | `import { fetchFerriteMCBstatsPlayerCount, FERRITEMC_PLAYERCOUNT_KEY }` |

**Note**: The internal API route changes from `/internal-api/paper-playercount` to `/internal-api/ferritemc-playercount`. Update all references:
- `src/components/PlayersCount.svelte` line 34
- `src/worker.ts` line 3, 31

### `src/pages/internal-api/terminal.ts`
No PaperMC-specific refs beyond the `paper` project ID in the KV lookup (line 10). This can stay if the project ID remains "paper".

---

## 8. WORKER

### `src/worker.ts`
| Line | Current | Change to |
|---|---|---|
| 3 | `import { PAPER_PLAYERCOUNT_KEY, fetchPaperBstatsPlayerCount }` | `import { FERRITEMC_PLAYERCOUNT_KEY, fetchFerriteMCBstatsPlayerCount }` |
| 16 | `const projects = ["paper", "velocity", "waterfall", "folia"]` | Update project IDs — needs decision based on API |
| 31 | `const { players, error } = await fetchPaperBstatsPlayerCount()` | `const { players, error } = await fetchFerriteMCBstatsPlayerCount()` |
| 33 | `await env.WEBSITE_CACHE.put(PAPER_PLAYERCOUNT_KEY, ...)` | `await env.WEBSITE_CACHE.put(FERRITEMC_PLAYERCOUNT_KEY, ...)` |

---

## 9. CONTENT POSTS (MDX)

### Posts to delete (PaperMC-specific news that won't apply to FerriteMC):
These contain specific PaperMC announcements that don't apply:
- `welcome-to-papermc.mdx` — "Welcome to PaperMC"
- `hangar-papermcs-plugin-repository.mdx` — "Hangar - PaperMC's Plugin Repository"
- `malware-announcement.mdx` — Malware announcement (generic, could keep)
- `its-hacktoberfest.mdx` — Hacktoberfest (generic, could keep)
- `the-future-of-paper-hard-fork.mdx` — Paper hard fork announcement
- `announcing-the-end-of-life-of-waterfall.mdx` — Waterfall EOL (but mentions Velocity migration)
- `important-dev-psa-future-removal-of-cb-package-relocation.mdx` — CB relocation PSA
- `new-years-post.mdx` — New Year post (generic, could keep with edits)

### Posts to keep with edits:
- `1-21-3.mdx` through `26-2.mdx` — Version release posts. These reference Paper/Velocity/Folia by name. Change references:
  - "Paper" → "Papercut"
  - "Velocity" → "Relay"
  - "Folia" → "Blocklest"  
  - "Waterfall" → "Velonation"
  - "PaperMC" → "FerriteMC"
  - "papermc.io/sponsors" → "ferritemc.io/sponsors"
  - "discord.gg/papermc" → "discord.gg/ferritemc"
  - "github.com/PaperMC" → "github.com/FerriteMC"

**Posts to edit specifically:**
| File | Key changes needed |
|---|---|
| `1-21-3.mdx` | Line 9: `Paper and Velocity` → `Papercut and Relay`; Line 31: `papermc.io/sponsors` |
| `1-21-7.mdx` | References to Paper, Velocity, PaperMC |
| `1-21-9-and-10.mdx` | Line 23: `papermc.io/sponsors`; References to PaperMC team |
| `1-21-11.mdx` | Line 25: `papermc.io/sponsors` |
| `1-21.mdx` | Line 9: `Paper and Velocity`; PaperMC team refs |
| `26-1.mdx` | Line 26: `papermc.io/sponsors` |
| `26-2.mdx` | Line 27: `papermc.io/sponsors` |
| `paper-1-18-2.mdx` | Line 26: `papermc.io/sponsors`; References to Paper |
| `paper-1-18-and-more.mdx` | PaperMC refs |
| `paper-1-19-1.mdx` | Lines 25, 29: `papermc.io/sponsors`, `discord.gg/papermc`, `github.com/PaperMC` |
| `paper-1-19.mdx` | PaperMC refs, `papermc.io/sponsors` |
| `paper-velocity-1-19-3.mdx` | `Paper` → `Papercut`, `Velocity` → `Relay` |
| `paper-velocity-1-19-4.mdx` | Line 30: `https://papermc.io/`, `github.com/PaperMC/website` |
| `paper-velocity-1-20-1.mdx` | Line 26: `papermc.io/sponsors` |
| `paper-velocity-1-20-2.mdx` | PaperMC refs |
| `paper-velocity-1-20-4.mdx` | Line 30: `papermc.io/sponsors` |
| `paper-velocity-1-20-6.mdx` | Line 13: `github.com/PaperMC/Paper/issues` |

---

## 10. BRAND ASSETS

### `src/assets/brand/`
Current files:
| File | Action |
|---|---|
| `adventure.svg` | Keep (library, not PaperMC-specific) |
| `paper.svg` | Replace with Papercut logo |
| `folia.svg` | Replace with Blocklest logo |
| `velocity.svg` | Replace with Relay logo |
| `waterfall-white.svg` | Replace with Velonation logo |
| `waterfall.svg` | Replace with Velonation logo |
| `logo.svg` | Replace with FerriteMC logo |
| `logo-marker-dark.svg` | Replace with FerriteMC logo marker (dark) |
| `logo-marker-light.svg` | Replace with FerriteMC logo marker (light) |

**New brand assets needed:**
| New File | Description |
|---|---|
| `papercut.svg` | Papercut icon |
| `blocklest.svg` | Blocklest icon |
| `relay.svg` | Relay icon |
| `velonation.svg` | Velonation icon |
| `void.svg` | Void icon |

### `public/assets/logo/`
| File | Action |
|---|---|
| `256x.png` | Replace with FerriteMC 256x logo |

### `public/favicon.ico`
Replace with FerriteMC favicon.

---

## 11. RENAMED FILES

The following files need renaming/recreation to match new software names:

| Old Path | New Path |
|---|---|
| `src/pages/software/paper.astro` | `src/pages/software/papercut.astro` (or keep slug as `/software/paper` with updated content — decision needed) |
| `src/pages/software/folia.astro` | `src/pages/software/blocklest.astro` |
| `src/pages/software/velocity.astro` | `src/pages/software/relay.astro` |
| `src/pages/software/waterfall.astro` | `src/pages/software/velonation.astro` |
| `src/pages/downloads/paper.astro` | `src/pages/downloads/papercut.astro` |
| `src/pages/downloads/folia.astro` | `src/pages/downloads/blocklest.astro` |
| `src/pages/downloads/velocity.astro` | `src/pages/downloads/relay.astro` |
| `src/pages/downloads/waterfall.astro` | `src/pages/downloads/velonation.astro` |
| `src/pages/internal-api/paper-playercount.ts` | `src/pages/internal-api/ferritemc-playercount.ts` |

**Decision point**: If the download API and Fill API still use "paper", "velocity", etc. as project IDs, then the page routes (`/downloads/paper`, etc.) and internal IDs might need to remain the same for API compatibility. In that case, keep the file names but update display text. OR forward old URLs with redirects.

---

## 12. NEW FILES TO CREATE

### `src/pages/software/void.astro`
New software page for Void (NanoLimbo replacement, fork of Blocklest).

### `src/pages/downloads/void.astro`
New downloads page for Void.

### Void brand SVG
`src/assets/brand/void.svg`

---

## 13. GLOBAL SEARCH-AND-REPLACE SUMMARY

Do these across ALL files:

1. `papermc.io` → `ferritemc.io` (check context — some are URLs, some are text)
2. `PaperMC` → `FerriteMC` (organization name)
3. `discord.gg/papermc` → `discord.gg/ferritemc`
4. `github.com/PaperMC` → `github.com/FerriteMC`
5. `docs.papermc.io` → `docs.ferritemc.io`
6. `hangar.papermc.io` → `hangar.ferritemc.io`
7. `jd.papermc.io` → `jd.ferritemc.io`
8. `fill.papermc.io` → `fill.ferritemc.io`
9. `forums.papermc.io` → `forums.ferritemc.io`
10. `assets.papermc.io` → `assets.ferritemc.io`
11. `opencollective.com/papermc` → `opencollective.com/ferritemc`
12. `github.com/sponsors/PaperMC` → `github.com/sponsors/FerriteMC`
13. `"Paper"` (as software name) → `"Papercut"` (with context care)
14. `"Folia"` (as software name) → `"Blocklest"`
15. `"Velocity"` (as software name) → `"Relay"`
16. `"Waterfall"` (as software name) → `"Velonation"`

---

## 14. TODO LIST (Execution Order)

### Phase 1: Config & Core
1. Update `astro.config.mjs` site URL
2. Update `package.json` name
3. Update `wrangler.jsonc` name
4. Update `src/content.config.ts` defaults
5. Update `src/styles/global.css` — add rust orange colors, replace blue-500 references

### Phase 2: Brand Assets
6. Create new brand SVGs (papercut, blocklest, relay, velonation, void)
7. Replace logo SVGs
8. Replace favicon
9. Replace 256x.png logo

### Phase 3: Layout & Components
10. Update `src/layouts/Layout.astro` — OG tags, title, canonical URL
11. Update `NavBar.astro` — software names, URLs, add Void
12. Update `Footer.astro` — links, copyright, org name
13. Update `SoftwareHeader.astro` — docs.jd URL
14. Update `SoftwarePreview.astro` — jd URL
15. Update `SoftwareDownload.svelte` — fill URL
16. Update `SoftwareBuildChanges.svelte` — GitHub issue URL
17. Update `PlayersCount.svelte` — API endpoint
18. Update `Terminal.svelte` — URLs

### Phase 4: Pages
19. Update `index.astro` — hero, features, descriptions
20. Update `downloads/index.astro`
21-24. Update `downloads/paper.astro` through `downloads/waterfall.astro`
25-28. Update `software/paper.astro` through `software/waterfall.astro`
29. Create `software/void.astro`
30. Create `downloads/void.astro`
31. Update `team.astro`
32. Update `sponsors.astro`
33. Update `contribute.astro`
34. Update `javadocs.astro`
35. Update `community/index.astro`
36. Update `community/guidelines.astro`

### Phase 5: Utilities & Worker
37. Update `src/utils/fill.ts` — API endpoint
38. Update `src/utils/github.ts` — URLs
39. Update `src/utils/hangar.ts` — API URL
40. Update `src/utils/bstats.ts` — key name
41. Update `src/utils/sponsors.ts` — URL
42. Update `src/worker.ts` — project list, imports
43. Rename `paper-playercount.ts` → `ferritemc-playercount.ts`

### Phase 6: Content Posts
44. Delete PaperMC-specific posts (see list above)
45. Edit remaining posts — replace software names and URLs

### Phase 7: Final Polish
46. Update `AGENTS.md` if needed
47. Update `README.md`
48. Update `_redirects` and `_headers` if needed
49. Global find-replace sweep for any missed `PaperMC`, `papermc.io` references
50. Test build

---

## Key Decisions Needed

1. **Slug URLs**: Keep `/software/paper` or change to `/software/papercut`? If API still uses "paper" as project ID, keeping slugs avoids broken API integration. Recommend: keep internal IDs matching API, change display names only.

2. **Download API project IDs**: Does the downstream API use "paper"/"velocity"/"folia"/"waterfall" as project IDs? If so, the `id="paper"` in download pages must stay for API calls to work.

3. **Void integration**: Is Void ready for release? Does it have a Fill API project ID? If not, add the pages and components but mark as "Coming Soon" or EOL style.

4. **Social links**: Mapping says "keep patreon/paypal if they exist, or remove". Patreon and PayPal icons exist in `src/assets/icons/fontawesome/`. The Contributors component uses them. Decision: keep or remove?

5. **Team data**: Is the FerriteMC team the same as PaperMC team? Update `team.json` accordingly.

6. **Sponsors**: Open Collective and GitHub Sponsors links need FerriteMC equivalents, or remove the sponsors page entirely.
