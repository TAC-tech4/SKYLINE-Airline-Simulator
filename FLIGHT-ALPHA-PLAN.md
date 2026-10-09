# SAS 3.0 Flight Alpha — implementation contract

Development branch: `feature/sas-3d-flight-alpha`. Keep `main` production untouched until testing.

## Compatibility first
- Preserve `skyline-save-v1`, its backup/snapshots, save VERSION=1, existing localStorage migration and all company/fleet/route/economic fields.
- Never reset, replace or silently migrate player data. Never mutate production saves in flight tests.
- Flight sessions are separate from management saves; write results only through validated integration commands and prevent duplicate rewards.
- Render remains a static site; use browser-side rendering/physics. Avoid requiring a new backend or secrets for the alpha.

## Deliverable A — flyable browser prototype
- Create an isolated `src/flight/` module with a deterministic fixed-timestep flight model (6DOF orientation, airspeed, lift, drag, thrust, gravity, stall response, runway contact).
- Render a 3D airport/runway and an aircraft with a legitimate distributable asset or clearly marked procedural fallback. No unauthorized copyrighted aircraft models.
- Provide working takeoff, turns, descent and landing, HUD for IAS/altitude/heading/VS, chase and cockpit-view camera.
- Controls: keyboard, Android tablet landscape touch (pitch/roll virtual stick, throttle, gear, flaps, brakes), mobile responsive quality presets. Respect reduced motion and context-loss recovery.
- Lazy-load the flight bundle; avoid increasing initial management dashboard load significantly.

## Deliverable B — safe integration
- Offer `Fly` only for owned, serviceable aircraft on valid routes. Keep route/aircraft IDs stable.
- During flight, isolate/pause accelerated management time; do not award normal automatic daily flight income twice.
- Use feature flags and sandbox save for end-to-end checks; add unit tests for save invariants and flight state.
- Run `npm test` and `npm run build`, plus a real mobile browser smoke test before any production merge.

## Longer term
Aircraft-specific aerodynamics and systems; independent exterior and cockpit GLB assets; working flight deck; FMS/autopilot/ILS; weather/terrain/ATC. X-Plane/MSFS-level fidelity is a long-term research goal, not a claim for the alpha.
