# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A personal web resume site (single page, Korean content) built with React 18 + TypeScript on Create React App, styled with styled-components, and hosted on GitHub Pages at https://seraleedev.github.io/resume/.

## Commands

```bash
npm start            # dev server (react-app-rewired start)
npm run build        # production build into build/
npm test             # Jest in watch mode (react-app-rewired test)
npm test -- -t "name" --watchAll=false   # run a single test by name, once
npm run deploy       # builds (predeploy), then publishes build/ to the gh-pages branch
```

There are currently no test files besides `src/setupTests.ts`. ESLint runs through CRA's `react-app` config during start and build. There is no separate lint script.

## Build configuration

- CRA is wrapped with `react-app-rewired`. `config-overrides.js` uses `react-app-rewire-alias` to load the path aliases from `tsconfig.paths.json`: `@/*` → `src/*`, `@styles/*`, `@components/*`. When you add an alias, add it to `tsconfig.paths.json` (tsconfig.json extends it).
- `.prettierrc` sets `singleQuote: true` and `printWidth: 120`, but most existing code still uses double quotes because the config file was misnamed until recently. Files are converted only when they get formatted.

## Architecture

**Content is data-driven.** All resume text lives in `src/data/static.ts`: header intro, `careerData`, `directionData`, `contactData`, `projectDetailData` and `aboutMe`, together with their TypeScript interfaces. Most content edits only touch this file. Components render these arrays and contain no copy of their own.

**Career ↔ project-detail modal linkage.** Each `careerData` entry's `company` string must exactly match the `company` of an entry in `projectDetailData`. Modal names are derived with `getProjectDetailModalName(company)` (`projectDetail-${company}`). `MainLayout` renders one `Modal` per `projectDetailData` entry, and the "About project" `DetailButton` in a career item calls `openModal` with the same derived name. The "about me" modal uses the literal name `"aboutMe"`.

**Modal state.** `src/context/ModalContext.tsx` (`ModalProvider` / `useModal`) holds `isOpen: Record<string, boolean>`. Opening a modal replaces the whole map, so only one modal is open at a time, and it locks body scroll by setting `document.body.style`.

**Responsive split via a prop, not CSS.** `App.tsx` computes `isMobile` with `react-responsive` (`max-width: 1023px`) and passes it down as a prop through every layer. Many components have a separate mobile variant (`Mobile*.tsx`, `mobile.tsx`) and choose between the two with `isMobile ? <Mobile... /> : <...>`. When you change a component's UI, check whether it has a mobile twin that needs the same change.

**Atomic design layout** under `src/components/system/`: `atoms` → `molecules` → `organisms` → `templates`. `templates/MainLayout.tsx` is the single page and composes Header, CareerSection, DirectionSection, Footer and the modals. `src/components/common/` holds shared styled primitives (`component/` for layout boxes such as `Container` and FlexBox, `typography/` for text).

**Styling.** styled-components v6, with colors in `src/styles/theme.ts` (imported directly as `theme.colors.*` rather than read through the ThemeProvider props), and global and reset styles in `src/styles/`. Styles usually sit next to the component in `styles.ts`. Style-only props use the `$`-prefixed transient-prop convention, and `StyleProps<T>` in `src/type/index.ts` maps an object type to `$`-prefixed keys.

## Commit conventions

Commit messages use a Korean description with a type prefix: `design:`, `fix:`, `docs:`, `feat:` and so on (for example `design: 스크롤 ux 방식 변경`).
