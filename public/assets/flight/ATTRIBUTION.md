# SAS Flight Alpha aircraft assets

## Source and license

These are freely redistributable FlightGear community aircraft exterior assets, not assets extracted from Microsoft Flight Simulator, X-Plane, or paid add-ons.

Provider: FlightGear contributors / FGMEMBERS, converted for distribution by Flightradar24.
Source repository: https://github.com/Flightradar24/fr24-3d-models
Pinned source revision: dd53267690c6a4ecbb290a3acf0284333a5d68a9
All five selected models are GPLv2 according to that repository's README License section.
The complete license is available alongside this document as COPYING.

| File | Exterior used | Upstream original project | Alpha use |
| --- | --- | --- | --- |
| e190.glb | Embraer E190 | https://github.com/FGMEMBERS/E-jet-family | Explicit E190 substitute for E195-E2; not an exact E2 model |
| b738.glb | Boeing 737-800 | https://github.com/FGMEMBERS/737-800 | 737-800 exterior |
| b789.glb | Boeing 787-9 | https://github.com/FGMEMBERS/787-9 | 787-9 exterior |
| a359.glb | Airbus A350 | https://github.com/FGMEMBERS/A350XWB | A350-900 exterior |
| a321.glb | Airbus A321 | https://github.com/FGMEMBERS/A320-family | Older A321 substitute for A321neo; not exact neo engines |

## Corresponding source and modifications

Original GLB 1.0 files are supplied unchanged in `source/` beside the distributed models on the Preview. Build downloads the pinned originals and checks their SHA-256 against model-hashes.json. These are the original model artifacts supplied by the provider. The original editable upstream aircraft projects are linked above; the provider's source README is included as SOURCE-README.md. Pinned checksums, download script and conversion script are publicly available on the SAS feature branch.

SAS changes, 2026-10-09: converted GLB 1.0 to GLB 2.0 using Cesium's gltf-pipeline; converted legacy material diffuse uniforms to standard PBR materials. Geometry is unchanged. Runtime normalizes scale and orientation and adds a simplified cockpit and gear. Reproduce with `npm ci && npm run build` from the development branch.

Source code and modified assets: https://github.com/TAC-tech4/SKYLINE-Airline-Simulator/tree/feature/sas-3d-flight-alpha
Conversion script: scripts/convert-flight-models.mjs
Flight Alpha code in src/flight and its original cockpit/airport scenery are GPL-2.0-or-later. Existing SAS photo attributions remain independently applicable.

These are community exterior models, not high fidelity interactive flight decks. The alpha uses an original simplified, interactive cockpit with functional gear/flap/brake controls and HUD/PFD/ND instrumentation. It does not claim commercial simulator fidelity.

Three.js: MIT, copyright Three.js authors, see THREE-LICENSE.
Cesium gltf-pipeline: Apache-2.0 (build-time asset conversion only).
