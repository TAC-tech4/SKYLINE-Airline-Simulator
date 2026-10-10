// Download GPLv2 originals at build time, verify pinned SHA-256, then convert.
import fs from 'node:fs/promises';import {createHash} from 'node:crypto';
const revision='dd53267690c6a4ecbb290a3acf0284333a5d68a9';
const hashes=JSON.parse(await fs.readFile(new URL('../public/assets/flight/model-hashes.json',import.meta.url)));
await fs.mkdir('public/assets/flight/source',{recursive:true});
for(const [name,hash] of Object.entries(hashes)){const file='public/assets/flight/source/'+name+'.glb';let data;try{data=await fs.readFile(file)}catch{}if(!data||createHash('sha256').update(data).digest('hex')!==hash){const r=await fetch(`https://raw.githubusercontent.com/Flightradar24/fr24-3d-models/${revision}/models/${name}.glb`,{signal:AbortSignal.timeout(60000)});if(!r.ok)throw Error('Model download: '+name+' '+r.status);data=Buffer.from(await r.arrayBuffer());if(createHash('sha256').update(data).digest('hex')!==hash)throw Error('Model checksum: '+name);await fs.writeFile(file+'.tmp',data);await fs.rename(file+'.tmp',file)}console.log('Verified model:',name)}
await import('./convert-flight-models.mjs');
