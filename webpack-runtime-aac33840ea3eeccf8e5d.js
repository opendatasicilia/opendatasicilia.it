!function(){"use strict";var e,t,n,r,o,c={},i={};function a(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={exports:{}};return c[e].call(n.exports,n,n.exports,a),n.exports}a.m=c,e=[],a.O=function(t,n,r,o){if(!n){var c=1/0;for(s=0;s<e.length;s++){n=e[s][0],r=e[s][1],o=e[s][2];for(var i=!0,f=0;f<n.length;f++)(!1&o||c>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[f])}))?n.splice(f--,1):(i=!1,o<c&&(c=o));if(i){e.splice(s--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[n,r,o]},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},a.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);a.r(o);var c={};t=t||[null,n({}),n([]),n(n)];for(var i=2&r&&e;"object"==typeof i&&!~t.indexOf(i);i=n(i))Object.getOwnPropertyNames(i).forEach((function(t){c[t]=function(){return e[t]}}));return c.default=function(){return e},a.d(o,c),o},a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))},a.u=function(e){return({7:"component---src-pages-blog-js",194:"gatsby-plugin-image",198:"component---src-pages-chi-siamo-js",351:"commons",445:"1bfc9850",539:"component---src-pages-eventi-js",571:"component---src-pages-cose-nostre-js",678:"component---src-pages-index-js",728:"c0324ade441959f98315ea8dfbae23ab72394342",774:"framework",851:"component---src-templates-post-js",874:"1a48c3c1",883:"component---src-pages-404-js",937:"78e521c3"}[e]||e)+"-"+{7:"f53c96cbea15e547b7ea",175:"a84e6e46a5d9edfb79d2",194:"5bf88659e0690decec1b",198:"7e83483550821b381178",231:"1c819721a3e097625183",351:"1d02c337c606c401b05c",445:"2ac817ffe0ed2db70caf",503:"c1824a885aa3f2542b2c",539:"75a214b7620c5909ae0c",571:"eb1e5f6ab210d40fc699",678:"34e8fb22ebc3cdb3f109",728:"a2489804392a8417f566",774:"b1e064791ebc747ed14a",851:"4c997aab98a807200cb8",874:"c681c70e3fce2502991f",883:"295d567d2c6d8ae2e568",937:"145d84e1491551595012"}[e]+".js"},a.miniCssF=function(e){return"styles.77b1c73aad55b3611a92.css"},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},o="opendatasicilia.it:",a.l=function(e,t,n,c){if(r[e])r[e].push(t);else{var i,f;if(void 0!==n)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var d=u[s];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==o+n){i=d;break}}i||(f=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",o+n),i.src=e),r[e]=[t];var l=function(t,n){i.onerror=i.onload=null,clearTimeout(b);var o=r[e];if(delete r[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(n)})),t)return t(n)},b=setTimeout(l.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=l.bind(null,i.onerror),i.onload=l.bind(null,i.onload),f&&document.head.appendChild(i)}},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="/",function(){var e={658:0,532:0};a.f.j=function(t,n){var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^(532|658)$/.test(t))e[t]=0;else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var c=a.p+a.u(t),i=new Error;a.l(c,(function(n){if(a.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+c+")",i.name="ChunkLoadError",i.type=o,i.request=c,r[1](i)}}),"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,c=n[0],i=n[1],f=n[2],u=0;if(c.some((function(t){return 0!==e[t]}))){for(r in i)a.o(i,r)&&(a.m[r]=i[r]);if(f)var s=f(a)}for(t&&t(n);u<c.length;u++)o=c[u],a.o(e,o)&&e[o]&&e[o][0](),e[c[u]]=0;return a.O(s)},n=self.webpackChunkopendatasicilia_it=self.webpackChunkopendatasicilia_it||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();