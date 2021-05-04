var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let s=!1;const l=new Set;function i(t,e){s&&l.delete(e),e.parentNode!==t&&t.appendChild(e)}function a(t,e,n){s&&l.delete(e),(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function u(t){s?l.add(t):t.parentNode&&t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function p(){return d(" ")}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let m;function $(t){m=t}function y(){if(!m)throw new Error("Function called outside component initialization");return m}const b=[],x=[],k=[],_=[],v=Promise.resolve();let w=!1;function S(t){k.push(t)}let E=!1;const N=new Set;function P(){if(!E){E=!0;do{for(let t=0;t<b.length;t+=1){const e=b[t];$(e),q(e.$$)}for($(null),b.length=0;x.length;)x.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];N.has(e)||(N.add(e),e())}k.length=0}while(b.length);for(;_.length;)_.pop()();w=!1,E=!1,N.clear()}}function q(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const C=new Set;let T;function A(){T={r:0,c:[],p:T}}function M(){T.r||o(T.c),T=T.p}function O(t,e){t&&t.i&&(C.delete(t),t.i(e))}function U(t,e,n,o){if(t&&t.o){if(C.has(t))return;C.add(t),T.c.push((()=>{C.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function j(t,e){U(t,1,1,(()=>{e.delete(t.key)}))}function I(t,n,c,s){const{fragment:l,on_mount:i,on_destroy:a,after_update:u}=t.$$;l&&l.m(n,c),s||S((()=>{const n=i.map(e).filter(r);a?a.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(S)}function B(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function F(t,e){-1===t.$$.dirty[0]&&(b.push(t),w||(w=!0,v.then(P)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function L(e,r,c,i,a,f,d=[-1]){const p=m;$(e);const h=e.$$={fragment:null,ctx:null,props:f,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:r.context||[]),callbacks:n(),dirty:d,skip_bound:!1};let g=!1;if(h.ctx=c?c(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return h.ctx&&a(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),g&&F(e,t)),n})):[],h.update(),g=!0,o(h.before_update),h.fragment=!!i&&i(h.ctx),r.target){if(r.hydrate){s=!0;const t=function(t){return Array.from(t.childNodes)}(r.target);h.fragment&&h.fragment.l(t),t.forEach(u)}else h.fragment&&h.fragment.c();r.intro&&O(e.$$.fragment),I(e,r.target,r.anchor,r.customElement),function(){s=!1;for(const t of l)t.parentNode.removeChild(t);l.clear()}(),P()}$(p)}class z{$destroy(){B(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const J=[];const W=function(e,n=t){let o;const r=[];function s(t){if(c(e,t)&&(e=t,o)){const t=!J.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),J.push(n,e)}if(t){for(let t=0;t<J.length;t+=2)J[t][0](J[t+1]);J.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,l=t){const i=[c,l];return r.push(i),1===r.length&&(o=n(s)||t),c(e),()=>{const t=r.indexOf(i);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}([]),D=new WebSocket("wss://dev.market.spacetraders.stream");D.addEventListener("open",(function(t){console.log("It's open"),G("sync-locations")})),D.addEventListener("message",(function(t){const e=JSON.parse(t.data);if(e.locations){let t=[];e.locations.map((e=>{e.marketplace&&e.marketplace.map((n=>{const o=t.find((t=>t.symbol===n.symbol));n.location=e.symbol,o?o.prices.push(n):t.push({symbol:n.symbol,prices:[n]})}))})),W.set(t)}else W.update((t=>(e.map((e=>{const n=Object.keys(e)[0];e[n].map((e=>{const o=t.findIndex((t=>t.symbol===e.symbol)),r=t[o].prices.findIndex((t=>t.location===n));e.location=n,t[o].prices[r]=e}))})),t)))}));const G=t=>{D.readyState<=1&&D.send(t)};var H={state:W};function K(e){let n,o,r,c,s,l,m;return{c(){var t,i,a;n=f("li"),o=d(e[0]),r=p(),c=d(e[3]),s=p(),l=f("span"),m=d(e[1]),h(l,"class","item-location svelte-l83lxg"),t="text-align",i="right",n.style.setProperty(t,i,a?"important":"")},m(t,u){a(t,n,u),i(n,o),i(n,r),i(n,c),i(n,s),i(n,l),i(l,m),e[4](n)},p(t,[e]){1&e&&g(o,t[0]),8&e&&g(c,t[3]),2&e&&g(m,t[1])},i:t,o:t,d(t){t&&u(n),e[4](null)}}}function Q(t,e,n){let o,r,{price:c}=e,{location:s}=e,l="-";var i;return i=()=>{r?r.unshift(c):r=[]},y().$$.before_update.push(i),function(t){y().$$.after_update.push(t)}((()=>{console.log(r),r[1]&&(r[1]<c?n(3,l="↑"):n(3,l="↓")),r.length>0&&function(t){requestAnimationFrame((()=>{t.style.transition="none",t.style.color="rgba(62,163,130,1)",t.style.backgroundColor="rgba(93,93,93,0.8)",setTimeout((()=>{t.style.transition="color 5s, background 5s",t.style.color="",t.style.backgroundColor=""}))}))}(o)})),t.$$set=t=>{"price"in t&&n(0,c=t.price),"location"in t&&n(1,s=t.location)},[c,s,o,l,function(t){x[t?"unshift":"push"]((()=>{o=t,n(2,o)}))}]}class R extends z{constructor(t){super(),L(this,t,Q,K,c,{price:0,location:1})}}function V(t,e,n){const o=t.slice();return o[1]=e[n],o}function X(t,e,n){const o=t.slice();return o[4]=e[n],o}function Y(t,e){let n,o,r;return o=new R({props:{location:e[4].location,price:e[4].pricePerUnit}}),{key:t,first:null,c(){var t;n=d(""),(t=o.$$.fragment)&&t.c(),this.first=n},m(t,e){a(t,n,e),I(o,t,e),r=!0},p(t,n){e=t;const r={};1&n&&(r.location=e[4].location),1&n&&(r.price=e[4].pricePerUnit),o.$set(r)},i(t){r||(O(o.$$.fragment,t),r=!0)},o(t){U(o.$$.fragment,t),r=!1},d(t){t&&u(n),B(o,t)}}}function Z(t){let e,n,o,r,c,s,l,m=t[1].symbol+"",$=[],y=new Map,b=t[1].prices.sort(et);const x=t=>t[4].location;for(let e=0;e<b.length;e+=1){let n=X(t,b,e),o=x(n);y.set(o,$[e]=Y(o,n))}return{c(){e=f("li"),n=f("span"),o=d(m),r=p(),c=f("ul");for(let t=0;t<$.length;t+=1)$[t].c();s=p(),h(n,"class","item_header svelte-1d1rqrx"),h(c,"class","svelte-1d1rqrx"),h(e,"class","col svelte-1d1rqrx")},m(t,u){a(t,e,u),i(e,n),i(n,o),i(e,r),i(e,c);for(let t=0;t<$.length;t+=1)$[t].m(c,null);i(e,s),l=!0},p(t,e){(!l||1&e)&&m!==(m=t[1].symbol+"")&&g(o,m),1&e&&(b=t[1].prices.sort(et),A(),$=function(t,e,n,o,r,c,s,l,i,a,u,f){let d=t.length,p=c.length,h=d;const g={};for(;h--;)g[t[h].key]=h;const m=[],$=new Map,y=new Map;for(h=p;h--;){const t=f(r,c,h),l=n(t);let i=s.get(l);i?o&&i.p(t,e):(i=a(l,t),i.c()),$.set(l,m[h]=i),l in g&&y.set(l,Math.abs(h-g[l]))}const b=new Set,x=new Set;function k(t){O(t,1),t.m(l,u),s.set(t.key,t),u=t.first,p--}for(;d&&p;){const e=m[p-1],n=t[d-1],o=e.key,r=n.key;e===n?(u=e.first,d--,p--):$.has(r)?!s.has(o)||b.has(o)?k(e):x.has(r)?d--:y.get(o)>y.get(r)?(x.add(o),k(e)):(b.add(r),d--):(i(n,s),d--)}for(;d--;){const e=t[d];$.has(e.key)||i(e,s)}for(;p;)k(m[p-1]);return m}($,e,x,1,t,b,y,c,j,Y,null,X),M())},i(t){if(!l){for(let t=0;t<b.length;t+=1)O($[t]);l=!0}},o(t){for(let t=0;t<$.length;t+=1)U($[t]);l=!1},d(t){t&&u(e);for(let t=0;t<$.length;t+=1)$[t].d()}}}function tt(t){let e,n,o,r,c,s,l,d=t[0],g=[];for(let e=0;e<d.length;e+=1)g[e]=Z(V(t,d,e));const m=t=>U(g[t],1,1,(()=>{g[t]=null}));return{c(){e=f("main"),n=f("h1"),n.textContent="SpaceTraders Market Terminal",o=p(),r=f("h2"),r.textContent="A SpaceTraders Syndicate Tool",c=p(),s=f("ul");for(let t=0;t<g.length;t+=1)g[t].c();h(s,"class","container svelte-1d1rqrx"),h(e,"class","svelte-1d1rqrx")},m(t,u){a(t,e,u),i(e,n),i(e,o),i(e,r),i(e,c),i(e,s);for(let t=0;t<g.length;t+=1)g[t].m(s,null);l=!0},p(t,[e]){if(1&e){let n;for(d=t[0],n=0;n<d.length;n+=1){const o=V(t,d,n);g[n]?(g[n].p(o,e),O(g[n],1)):(g[n]=Z(o),g[n].c(),O(g[n],1),g[n].m(s,null))}for(A(),n=d.length;n<g.length;n+=1)m(n);M()}},i(t){if(!l){for(let t=0;t<d.length;t+=1)O(g[t]);l=!0}},o(t){g=g.filter(Boolean);for(let t=0;t<g.length;t+=1)U(g[t]);l=!1},d(t){t&&u(e),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(g,t)}}}const et=(t,e)=>t.pricePerUnit===e.pricePerUnit?e.location>t.location?-1:1:t.pricePerUnit>e.pricePerUnit?1:-1;function nt(t,e,n){let o=[];var r;return r=()=>{H.state.subscribe((t=>{n(0,o=t),console.log(o)}))},y().$$.on_mount.push(r),[o]}return new class extends z{constructor(t){super(),L(this,t,nt,tt,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map