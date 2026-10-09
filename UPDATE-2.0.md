# SKYLINE 2.0 — Empire Update

- 56 airports, up to six hubs and four airport facilities with three upgrade levels.
- 35 aircraft: 31 passenger types plus four freight aircraft. Each aircraft has its own photograph, verified against file descriptions/categories. Attribution is in the aircraft market and `public/assets/aircraft/credits.json`.
- Used market renews every seven game days. Leasing has a 12% nonrefundable entry fee, daily rent and 2% return fee; leased aircraft cannot be sold.
- Four cabin layouts, catering choices, configurable daily frequency, and route aircraft reassignment.
- Dedicated and belly cargo; ancillary services and loyalty programs.
- Seasonal demand and competition, seven-day campaigns, daily fuel prices and fixed-price hedging.
- Automatic maintenance and weather disruption coverage.
- 18 incidents with three decision options each. Smart route pricing/frequency optimization.
- Repeatable enterprise tenders, eight career achievements, and market news.
- Independent sandbox with a separate save and simulation lock.
- Detailed operating cost/revenue breakdowns and fleet photos.

## Save compatibility

The production origin and `skyline-save-v1` key are unchanged. The version remains 1 for compatibility; edition 2 adds fields without dropping existing company, fleet, staffing, research, claimed milestones, route, financial or passenger data. Old routes are grandfathered into hub capacity. New features default to disabled where they incur optional costs.

Before the first v2 write, the original valid save is pinned at `skyline-save-v1-pre-v2`. The prior autosave and three recent-day snapshots are retained. Invalid primary saves are archived before backup recovery; when both saves are unreadable, writes stop and the recovery screen provides original export/import. A future or unknown save version is never silently reset. Browser storage is local; this does not add account or cross-device synchronization. Export files remain necessary for device migration or browser-storage loss.

Code rollback branch: `backup/pre-v2-20261009`. Code rollback is separate from game-save recovery. The old engine cannot operate newly created multi-hub routes; use the pinned pre-v2 save when deliberately rolling back game behavior.

## Verification

Engine tests cover lease resale prevention, migration preserving balances and routes, cargo elasticity, maintenance accounting, facilities, repeatable reward protection and long simulations. Storage tests cover corruption recovery, original preservation and snapshot rotation. Static HTTP build is tested. Live browser checks use the independent sandbox, never reset production saves.

## Aircraft economics

Specs, wages and prices are balanced for a game. Photographs represent the named aircraft variant, with actual airline liveries; custom brand color does not repaint photographs. Photo copyright remains with each author under the attributed license. Original image bytes are preserved; CSS controls presentation.
