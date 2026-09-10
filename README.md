# punktfunk-website

Marketing site for [Punktfunk](https://git.unom.io/unom/punktfunk) — a low-latency
desktop and game-streaming host/client, rebuilt from scratch in Rust, with
first-class Linux and Windows hosts.

Built with **[Astro](https://astro.build) 7.3**, **Tailwind CSS 4**, and
**[Bun](https://bun.sh) 1.4**. The site is fully static and deploys to Cloudflare
on every push to `main`.

## Pages

- `/` — landing page: what it is, why it's different from Sunshine/Moonlight and
  the forks, features in plain language, and a **guided host installer** that
  builds the right install command from the distros/OSes you pick.
- `/install` — short host and client install guides, plus QR codes for the
  Android and Apple apps.

## Develop

Requires Bun ≥ 1.4.

```sh
bun install        # install dependencies
bun run dev        # start the dev server on http://localhost:4321
bun run build      # build the static site to ./dist
bun run preview    # preview the production build
bun run qr         # regenerate the mobile-store QR codes in public/qr
```

## Project layout

```
src/
  components/   Header, Footer, Logo, Icon, CodeBlock, GuidedInstaller
  data/         site.ts (copy + links), installer.ts (host platforms + commands)
  icons/        Lucide (ISC) SVGs used by the Icon component
  brand-icons/  distro / OS / launcher marks (see LICENSES files),
                inlined by the OsIcon component
  layouts/      Base.astro (fonts, meta, header/footer, scroll reveal)
  pages/        index.astro, install.astro
  styles/       global.css (brand tokens, aurora, reveal)
public/
  qr/           generated store QR codes
scripts/
  generate-qr.ts
```

## Deployment

The site outputs static files to `dist/`. Cloudflare Pages is wired to this
repository and rebuilds automatically on pushes to `main`
(build command `bun run build`, output directory `dist`).

The build toolchain is Bun 1.4.x (both locally and on Cloudflare), matching
the v2 `bun.lock`. If Cloudflare ever falls back to its default Bun 1.2.x,
installs fail with `Unknown lockfile version` — either re-pin `BUN_VERSION`
in the project settings or regenerate the lockfile with Bun 1.2.x.

## Branding & licenses

Colors, fonts (Inter + Ubuntu) and the wordmark follow the unom design system so
the site stays consistent with the docs and web console. OS/distro icons keep
their upstream licenses — see `src/brand-icons/os/LICENSES` and
`src/brand-icons/launchers/LICENSES`.
