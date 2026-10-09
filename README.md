# SKYLINE — Airline Simulator

Traditional Chinese, single-player airline management game. Start in Taipei with an E195-E2, build routes, set fares, grow your fleet and open an intercontinental network.

## Play loop

- 32 airports and 8 aircraft tiers, from ATR 72 to A350-1000.
- Distance and range validation, round-trip rotations, demand-sensitive fares.
- Daily fuel, crew, fleet overhead, loan interest and wear.
- Research, milestones, deterministic market events and optional contracts.
- 30 seconds per simulation day; pause or play at 4× / 12×.
- Automatic browser saves with backup, import/export and up to 180 offline days.
- Responsive desktop/mobile operations interface with a Pacific-centered route map.

## Run

Node.js 20+; no package dependencies.

```sh
npm test
npm run build
npm start
```

Open http://localhost:3000. `PORT` is supported.

## Render

Use a Render Static Site, connect this repository, build command `npm run build`, publish directory `dist`. A static deployment needs no application server or secrets. `render.yaml` also supports the Blueprint route.

## Architecture

`src/data.js`: airports, game-balanced aircraft, research, missions and events.

`src/engine.js`: pure simulation and commands, seeded PRNG, save validation and bounded offline calculation. The UI applies commands to a copy, committing only successful commands.

`src/app.js`: responsive interface, save adapter, single-tab simulation lock, dialog actions and timer.

`src/map.js`: geographic canvas route map; decorative aircraft positions represent route activity, not precise scheduled movements.

`build.mjs`: deterministic static output. `server.mjs`: zero-dependency local server.

## Save semantics and limits

This release is single-player and local-first. Saves are held in this browser's localStorage, not a server. Export before changing devices or clearing browser data. It has no online accounts, cross-device sync or competitive leaderboard. Save imports are validated, but a local game cannot prevent deliberate editing of saves. `navigator.locks` prevents multiple active simulators in supported browsers; browsers without that API should use one game tab. Offline earnings stop if a company is paused or becomes insolvent. Aircraft below 20% condition stop flying; manual maintenance restores them. Data/economics are designed for gameplay and are not real aircraft operating quotations.

## Asset credits

`public/assets/land.json`: Natural Earth 1:110m land data, public domain, from https://github.com/nvkelso/natural-earth-vector. https://www.naturalearthdata.com/about/terms-of-use/

Optional Google Fonts: DM Sans / Space Grotesk (system fonts are used if unavailable).

## Version 1.1
31 aircraft models with local Wikimedia Commons photographs; airline founding with 3 strategies, name, code, hub and brand color; four staff roles, payroll, salary policy and training; 12 incidents with timed decisions. Version 1 saves migrate in place with sufficient initial staff. Aircraft economics and staffing are balanced game values. Photographs depict the same aircraft family, not necessarily the exact variant.

Photo attribution: `public/assets/aircraft/credits.json`, also accessible in the aircraft market. Images are cropped by CSS; original files are unmodified. Each image retains its respective license. Source code license does not replace third-party image licenses.
