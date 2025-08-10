## Korff Strafanwalt – Next.js Webseite

Eine statisch exportierte Next.js-Website (Pages Router) mit Tailwind CSS, optimiert für das Hosting auf GitHub Pages.

### Tech-Stack
- **Framework**: Next.js 15 (Pages Router)
- **Sprache**: TypeScript
- **UI**: Tailwind CSS (+ PostCSS)
- **Linting**: ESLint (next/core-web-vitals, TypeScript)
- **Package Manager**: pnpm

## Voraussetzungen
- Node.js 18+ (empfohlen: 20 LTS)
- pnpm installiert: `npm i -g pnpm`

## Installation
```bash
pnpm install
```

## Entwicklung starten
```bash
pnpm dev
```
- Lokale URL: `http://localhost:3000`
- Hot Reloading ist aktiviert.

## Build & Start (Produktion)
```bash
pnpm build   # erzeugt statischen Export nach ./out dank output: "export"
pnpm start   # optional: Next.js Produktionsserver (für Node-Hosting; für GitHub Pages nicht nötig)
```

## Nützliche Skripte
```bash
pnpm dev     # Entwicklungsserver (Turbopack)
pnpm build   # Produktionsbuild mit statischem Export nach ./out
pnpm start   # Startet den Produktionsserver (nicht für GitHub Pages erforderlich)
pnpm lint    # Linting ausführen
pnpm deploy  # Alias für 'next build' (nutzt die Export-Einstellungen)
```

## Projektstruktur
```text
/pages               # Seiten (Pages Router)
  _app.tsx           # Globale App-Komponente (Lade-Overlay, Fonts)
  _document.tsx      # <Html>/<Head> inkl. Meta-Tags & Fonts
  index.tsx          # Startseite
  ...                # Unterseiten (z. B. /informationen, /strafrecht/...)
/components         # Layout, Header, Footer, Sections
/styles             # Tailwind & globale Styles (globals.css)
/public             # Statische Assets (z. B. favicon)
/next.config.ts     # BasePath/Asset-Prefix, static export
/tailwind.config.ts # Tailwind-Konfiguration
/postcss.config.mjs # PostCSS Plugins
```

## Styling
- Tailwind ist in `styles/globals.css` aktiviert (`@tailwind base; components; utilities;`).
- Farb- und Font-Variablen sind als CSS-Variablen in `:root` definiert (z. B. `--korff-primary`).
- Die Google-Font „Inter“ wird via `next/font` in `pages/_app.tsx` und als Fallback in `pages/_document.tsx` eingebunden.

## Linting
```bash
pnpm lint
```
Die Konfiguration befindet sich in `eslint.config.mjs` (Next.js + TypeScript).

## SEO-Hinweise
- In `pages/_document.tsx` Meta-Tags wie `description`, `keywords`, Open-Graph, `canonical` anpassen.
- `lang="de"` ist bereits gesetzt.

## Deployment auf GitHub Pages
Dieses Projekt ist für einen statischen Export konfiguriert und nutzt GitHub Actions, um den Inhalt des Ordners `out/` auf den Branch `gh-pages` zu veröffentlichen.

1) BasePath/Asset-Prefix prüfen/anpassen:
- In `next.config.ts` wird für Produktion folgendes gesetzt:
  - `basePath: "/Korff-Strafanwalt-Webseite"`
  - `assetPrefix: "/Korff-Strafanwalt-Webseite/"`
- Wenn sich der Repository-Name ändert (z. B. bei einem Fork), diese Werte entsprechend anpassen: `"/NEUER-REPO-NAME"`.

2) Build lokal erzeugen und committen:
```bash
pnpm install
pnpm build      # erzeugt ./out
```
- Den generierten Ordner `out/` im Repo versionieren und pushen (dieses Setup erwartet `out/` im Haupt-Branch).

3) Automatische Veröffentlichung (GitHub Action):
- Workflow: `.github/workflows/deploy.yml`
- Trigger: Push auf `main`
- Aktion: Kopiert `out/` nach `gh-pages` mittels `peaceiris/actions-gh-pages`

Hinweis: Alternativ kann der Workflow so erweitert werden, dass der Build auf CI läuft (pnpm i && pnpm build). Das aktuelle Setup deployt, was bereits als `out/` im Repo liegt.

4) Live-URL
- GitHub Pages (User/Org): `https://<username>.github.io/Korff-Strafanwalt-Webseite/`
  - Die URL muss mit dem `basePath` übereinstimmen.

## Häufige Stolpersteine
- Leere Seite auf GitHub Pages: Meist stimmt `basePath/assetPrefix` nicht mit dem Repo-Namen überein.
- 404 bei direktem Aufruf tiefer Routen: GitHub Pages ist „static hosting“. Achte darauf, dass alle Seiten statisch exportierbar sind.
- Fehlende Assets (CSS/JS/Images): Prüfe `assetPrefix` und ob der `out/`-Ordner vollständig ist.

## Lizenz
Noch keine Lizenz hinterlegt. Falls Open-Source geplant ist, eine passende Lizenzdatei (`LICENSE`) ergänzen.
