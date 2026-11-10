// 서비스 워커: 한 번 열어두면 오프라인에서도 실행됩니다.
// 앱 파일을 수정해서 다시 올릴 때는 아래 VER 숫자를 올려 주세요.
const VER='ilj-v2';
const CORE=['./','index.html','manifest.webmanifest','icons/icon-192.png','icons/icon-512.png','icons/icon-maskable-192.png','icons/icon-maskable-512.png','icons/apple-touch-icon.png','icons/favicon-32.png'];
const CDN=['https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js'];
self.addEventListener('install',e=>{e.waitUntil((async()=>{
  const c=await caches.open(VER);await c.addAll(CORE);
  await Promise.all(CDN.map(u=>c.add(new Request(u,{mode:'no-cors'})).catch(()=>{})));
  self.skipWaiting()})())});
self.addEventListener('activate',e=>{e.waitUntil((async()=>{
  for(const k of await caches.keys())if(k!==VER)await caches.delete(k);
  await self.clients.claim()})())});
// 캐시 먼저 보여주고, 뒤에서 새 버전을 받아 둠 (다음 실행 때 반영)
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;
  e.respondWith((async()=>{
    const c=await caches.open(VER),hit=await c.match(r,{ignoreSearch:true});
    const net=fetch(r).then(res=>{if(res&&(res.ok||res.type==='opaque'))c.put(r,res.clone());return res}).catch(()=>null);
    if(hit){e.waitUntil(net);return hit}
    return (await net)||new Response('오프라인 상태입니다.',{status:503})})())});
