if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>a(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(n(...e),c)))}}define(["./workbox-d62e0b8a"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/151-94812bf0da5ae7f1.js",revision:"rLg5ckoTEzx9YzMiNEWqC"},{url:"/_next/static/chunks/231-7a262d2d690995cf.js",revision:"rLg5ckoTEzx9YzMiNEWqC"},{url:"/_next/static/chunks/879-75408c50ba5ca1f3.js",revision:"rLg5ckoTEzx9YzMiNEWqC"},{url:"/_next/static/chunks/974-c4e4de65806626ab.js",revision:"rLg5ckoTEzx9YzMiNEWqC"},{url:"/_next/static/chunks/app/_not-found/page-3b59d54195e99df9.js",revision:"rLg5ckoTEzx9YzMiNEWqC"},{url:"/_next/static/chunks/app/char/%5Bid%5D/page-457f30e4cb61498a.js",revision:"rLg5ckoTEzx9YzMiNEWqC"},{url:"/_next/static/chunks/app/layout-1029a6040f86fa87.js",revision:"rLg5ckoTEzx9YzMiNEWqC"},{url:"/_next/static/chunks/app/page-604c95b561effd7b.js",revision:"rLg5ckoTEzx9YzMiNEWqC"},{url:"/_next/static/chunks/app/query/page-ed64208932fc88ba.js",revision:"rLg5ckoTEzx9YzMiNEWqC"},{url:"/_next/static/chunks/app/zustand/page-b708559196f7f810.js",revision:"rLg5ckoTEzx9YzMiNEWqC"},{url:"/_next/static/chunks/fd9d1056-a666f982625f97b6.js",revision:"rLg5ckoTEzx9YzMiNEWqC"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"rLg5ckoTEzx9YzMiNEWqC"},{url:"/_next/static/chunks/main-94e361dfb464e73b.js",revision:"rLg5ckoTEzx9YzMiNEWqC"},{url:"/_next/static/chunks/main-app-7632627d8a4783b3.js",revision:"rLg5ckoTEzx9YzMiNEWqC"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"rLg5ckoTEzx9YzMiNEWqC"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"rLg5ckoTEzx9YzMiNEWqC"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-365fe83a4310541d.js",revision:"rLg5ckoTEzx9YzMiNEWqC"},{url:"/_next/static/css/620a77403637c84e.css",revision:"620a77403637c84e"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/media/notfound.1f89034c.gif",revision:"52bed46ce7ce51077d2460f892eaac5e"},{url:"/_next/static/media/searching.22165f98.gif",revision:"bff2ed3aaba2515c896e9c9601c3994f"},{url:"/_next/static/rLg5ckoTEzx9YzMiNEWqC/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/rLg5ckoTEzx9YzMiNEWqC/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!!e&&!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
