import {cpSync,mkdirSync,rmSync} from 'node:fs';
import {build} from 'esbuild';
await import('./scripts/fetch-flight-models.mjs');
rmSync('dist',{recursive:true,force:true});mkdirSync('dist');cpSync('public','dist',{recursive:true});cpSync('src','dist/src',{recursive:true});
await build({entryPoints:['src/flight/runtime.js'],outfile:'dist/src/flight/runtime.bundle.js',bundle:true,format:'esm',target:['es2022'],minify:true,legalComments:'linked'});
cpSync('node_modules/three/LICENSE','dist/assets/flight/THREE-LICENSE');
console.log('Static management + lazy Flight Alpha build complete');
