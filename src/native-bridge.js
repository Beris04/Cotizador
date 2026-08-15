import { Capacitor } from '@capacitor/core';
import { Preferences } from '@capacitor/preferences';
import { Geolocation } from '@capacitor/geolocation';
import { Share } from '@capacitor/share';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Network } from '@capacitor/network';

const isNative = Capacitor.isNativePlatform();
const MIRROR_INDEX = 'toyo_native_mirror_keys_v1';
const EXCLUDED = new Set(['app_visitas_auth_v2']);
const originalSetItem = Storage.prototype.setItem;
const originalRemoveItem = Storage.prototype.removeItem;
const originalClear = Storage.prototype.clear;
let mirrorKeys = new Set();
let patchInstalled = false;

function shouldMirror(key){
  key = String(key || '');
  return key.startsWith('app_visitas_') && !EXCLUDED.has(key);
}

async function persistIndex(){
  if(!isNative) return;
  try{ await Preferences.set({key:MIRROR_INDEX, value:JSON.stringify([...mirrorKeys])}); }catch(e){}
}

async function restoreStorage(){
  if(!isNative) return;
  try{
    const { value } = await Preferences.get({key:MIRROR_INDEX});
    const keys = value ? JSON.parse(value) : [];
    mirrorKeys = new Set(Array.isArray(keys) ? keys.filter(shouldMirror) : []);
    for(const key of mirrorKeys){
      try{
        const row = await Preferences.get({key});
        if(row.value !== null && row.value !== undefined){
          originalSetItem.call(localStorage, key, row.value);
        }
      }catch(e){}
    }
  }catch(e){ console.warn('ToyoNative restore:',e); }
}

function installStorageMirror(){
  if(!isNative || patchInstalled) return;
  patchInstalled = true;
  Storage.prototype.setItem = function(key, value){
    const result = originalSetItem.call(this, key, value);
    if(this === localStorage && shouldMirror(key)){
      mirrorKeys.add(String(key));
      Preferences.set({key:String(key),value:String(value)}).then(persistIndex).catch(()=>{});
    }
    return result;
  };
  Storage.prototype.removeItem = function(key){
    const result = originalRemoveItem.call(this, key);
    if(this === localStorage && shouldMirror(key)){
      mirrorKeys.delete(String(key));
      Preferences.remove({key:String(key)}).then(persistIndex).catch(()=>{});
    }
    return result;
  };
  Storage.prototype.clear = function(){
    const result = originalClear.call(this);
    if(this === localStorage){
      const keys=[...mirrorKeys]; mirrorKeys.clear();
      Promise.allSettled(keys.map(key=>Preferences.remove({key}))).then(persistIndex);
    }
    return result;
  };
}

function bytesToBase64(bytes){
  let binary='';
  const chunk=0x8000;
  for(let i=0;i<bytes.length;i+=chunk){
    binary += String.fromCharCode(...bytes.subarray(i, i+chunk));
  }
  return btoa(binary);
}

async function blobToBase64(blob){
  const buf = await blob.arrayBuffer();
  return bytesToBase64(new Uint8Array(buf));
}

async function writeBlob(blob, filename, directory){
  const data = await blobToBase64(blob);
  return Filesystem.writeFile({
    path:`ToyoFoods/${filename}`,
    data,
    directory,
    recursive:true
  });
}

async function saveBlob(blob, filename){
  if(!isNative) throw new Error('saveBlob solo está disponible en la app instalada');
  return writeBlob(blob, filename, Directory.Documents);
}

async function shareBlob(blob, filename, options={}){
  if(!isNative) throw new Error('shareBlob solo está disponible en la app instalada');
  const result = await writeBlob(blob, filename, Directory.Cache);
  return Share.share({
    title: options.title || filename,
    text: options.text || '',
    url: result.uri,
    dialogTitle: options.dialogTitle || 'Compartir cotización'
  });
}

async function getCurrentPosition(){
  if(!isNative){
    return new Promise((resolve,reject)=>{
      navigator.geolocation.getCurrentPosition(resolve,reject,{enableHighAccuracy:true,timeout:15000,maximumAge:10000});
    });
  }
  const p = await Geolocation.getCurrentPosition({enableHighAccuracy:true,timeout:15000,maximumAge:10000});
  return {
    coords:{
      latitude:p.coords.latitude,
      longitude:p.coords.longitude,
      accuracy:p.coords.accuracy,
      altitude:p.coords.altitude,
      altitudeAccuracy:p.coords.altitudeAccuracy,
      heading:p.coords.heading,
      speed:p.coords.speed
    },
    timestamp:p.timestamp
  };
}

async function getNetworkStatus(){
  if(!isNative) return {connected:navigator.onLine,connectionType:'unknown'};
  return Network.getStatus();
}

const ready = (async()=>{
  if(!isNative) return;
  await restoreStorage();
  installStorageMirror();
  try{
    Network.addListener('networkStatusChange', status=>{
      window.dispatchEvent(new CustomEvent('toyo-network-status',{detail:status}));
    });
  }catch(e){}
})();

window.ToyoNative = {isNative, ready, getCurrentPosition, getNetworkStatus, saveBlob, shareBlob};
