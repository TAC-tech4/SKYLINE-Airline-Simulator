// Reproducible glTF1 -> glTF2 conversion. Original GPLv2 assets remain in assets/flight/source/.
import fs from 'node:fs/promises';
import pipeline from 'gltf-pipeline';
for(const name of ['e190','b738','b789','a359','a321']){
 const source=await fs.readFile('public/assets/flight/source/'+name+'.glb');
 const result=await pipeline.glbToGltf(source);
 const gltf=result.gltf;
 // Convert legacy technique uniforms to standard PBR material parameters.
 for(const material of gltf.materials||[]){if(material.pbrMetallicRoughness){material.pbrMetallicRoughness.metallicFactor=.1;material.pbrMetallicRoughness.roughnessFactor=.65;continue;}const values=material.extensions?.KHR_techniques_webgl?.values||material.values||{};const diffuse=values.u_diffuse||values.diffuse||[.85,.86,.88,1];material.pbrMetallicRoughness={metallicFactor:.1,roughnessFactor:.65};if(Array.isArray(diffuse))material.pbrMetallicRoughness.baseColorFactor=diffuse;else if(typeof diffuse==='object')material.pbrMetallicRoughness.baseColorTexture=diffuse;else if(Number.isInteger(diffuse))material.pbrMetallicRoughness.baseColorTexture={index:diffuse};delete material.extensions;delete material.values;material.doubleSided=true;}
 delete gltf.extensions;delete gltf.extensionsRequired;delete gltf.extensionsUsed;
 const converted=await pipeline.gltfToGlb(gltf);
 await fs.writeFile('public/assets/flight/'+name+'.glb',converted.glb);
 console.log(name,source.length,'->',converted.glb.length);
}
