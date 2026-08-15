import { rm, cp, mkdir } from 'node:fs/promises';
import { build } from 'esbuild';

await rm('www',{recursive:true,force:true});
await mkdir('www',{recursive:true});
await cp('web','www',{recursive:true});
await mkdir('www/assets',{recursive:true});
await build({
  entryPoints:['src/native-bridge.js'],
  bundle:true,
  minify:true,
  format:'iife',
  target:['chrome109'],
  outfile:'www/assets/native-bridge.js'
});
console.log('Web Android listo en www/');
