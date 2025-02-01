(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function x(){}function Te(t,e){for(const n in e)t[n]=e[n];return t}function Oe(t){return t()}function we(){return Object.create(null)}function P(t){t.forEach(Oe)}function he(t){return typeof t=="function"}function U(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let se;function V(t,e){return se||(se=document.createElement("a")),se.href=e,t===se.href}function He(t){return Object.keys(t).length===0}function Se(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ne(t,e,n){t.$$.on_destroy.push(Se(e,n))}const Ie=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function f(t,e){t.appendChild(e)}function L(t,e,n){t.insertBefore(e,n||null)}function y(t){t.parentNode&&t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function Z(t){return document.createTextNode(t)}function E(){return Z(" ")}function pe(){return Z("")}function A(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function a(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ue(t){return Array.from(t.childNodes)}function De(t,e){e=""+e,t.data!==e&&(t.data=e)}function ke(t,e){t.value=e??""}function k(t,e,n,s){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function Be(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}function oe(t,e){return new t(e)}let te;function ee(t){te=t}function me(){if(!te)throw new Error("Function called outside component initialization");return te}function Fe(t){me().$$.after_update.push(t)}function Ye(t){me().$$.on_destroy.push(t)}function We(){const t=me();return(e,n,{cancelable:s=!1}={})=>{const i=t.$$.callbacks[e];if(i){const l=Be(e,n,{cancelable:s});return i.slice().forEach(u=>{u.call(t,l)}),!l.defaultPrevented}return!0}}function $e(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const Y=[],je=[];let W=[];const Ee=[],Ce=Promise.resolve();let ue=!1;function ze(){ue||(ue=!0,Ce.then(Me))}function Xe(){return ze(),Ce}function fe(t){W.push(t)}const le=new Set;let B=0;function Me(){if(B!==0)return;const t=te;do{try{for(;B<Y.length;){const e=Y[B];B++,ee(e),Ke(e.$$)}}catch(e){throw Y.length=0,B=0,e}for(ee(null),Y.length=0,B=0;je.length;)je.pop()();for(let e=0;e<W.length;e+=1){const n=W[e];le.has(n)||(le.add(n),n())}W.length=0}while(Y.length);for(;Ee.length;)Ee.pop()();ue=!1,le.clear(),ee(t)}function Ke(t){if(t.fragment!==null){t.update(),P(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(fe)}}function Ge(t){const e=[],n=[];W.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),W=e}const re=new Set;let H;function _e(){H={r:0,c:[],p:H}}function ge(){H.r||P(H.c),H=H.p}function q(t,e){t&&t.i&&(re.delete(t),t.i(e))}function I(t,e,n,s){if(t&&t.o){if(re.has(t))return;re.add(t),H.c.push(()=>{re.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function Pe(t,e){const n={},s={},i={$$scope:1};let l=t.length;for(;l--;){const u=t[l],r=e[l];if(r){for(const o in u)o in r||(s[o]=1);for(const o in r)i[o]||(n[o]=r[o],i[o]=1);t[l]=r}else for(const o in u)i[o]=1}for(const u in s)u in n||(n[u]=void 0);return n}function Ae(t){return typeof t=="object"&&t!==null?t:{}}function ne(t){t&&t.c()}function X(t,e,n,s){const{fragment:i,after_update:l}=t.$$;i&&i.m(e,n),s||fe(()=>{const u=t.$$.on_mount.map(Oe).filter(he);t.$$.on_destroy?t.$$.on_destroy.push(...u):P(u),t.$$.on_mount=[]}),l.forEach(fe)}function K(t,e){const n=t.$$;n.fragment!==null&&(Ge(n.after_update),P(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Je(t,e){t.$$.dirty[0]===-1&&(Y.push(t),ze(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function G(t,e,n,s,i,l,u,r=[-1]){const o=te;ee(t);const c=t.$$={fragment:null,ctx:[],props:l,update:x,not_equal:i,bound:we(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:we(),dirty:r,skip_bound:!1,root:e.target||o.$$.root};u&&u(c.root);let d=!1;if(c.ctx=n?n(t,e.props||{},(b,T,...v)=>{const $=v.length?v[0]:T;return c.ctx&&i(c.ctx[b],c.ctx[b]=$)&&(!c.skip_bound&&c.bound[b]&&c.bound[b]($),d&&Je(t,b)),T}):[],c.update(),d=!0,P(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const b=Ue(e.target);c.fragment&&c.fragment.l(b),b.forEach(y)}else c.fragment&&c.fragment.c();e.intro&&q(t.$$.fragment),X(t,e.target,e.anchor,e.customElement),Me()}ee(o)}class J{$destroy(){K(this,1),this.$destroy=x}$on(e,n){if(!he(n))return x;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!He(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const F=[];function qe(t,e){return{subscribe:ye(t,e).subscribe}}function ye(t,e=x){let n;const s=new Set;function i(r){if(U(t,r)&&(t=r,n)){const o=!F.length;for(const c of s)c[1](),F.push(c,t);if(o){for(let c=0;c<F.length;c+=2)F[c][0](F[c+1]);F.length=0}}}function l(r){i(r(t))}function u(r,o=x){const c=[r,o];return s.add(c),s.size===1&&(n=e(i)||x),r(t),()=>{s.delete(c),s.size===0&&n&&(n(),n=null)}}return{set:i,update:l,subscribe:u}}function Re(t,e,n){const s=!Array.isArray(t),i=s?[t]:t,l=e.length<2;return qe(n,u=>{let r=!1;const o=[];let c=0,d=x;const b=()=>{if(c)return;d();const v=e(s?o[0]:o,u);l?u(v):d=he(v)?v:x},T=i.map((v,$)=>Se(v,C=>{o[$]=C,c&=~(1<<$),r&&b()},()=>{c|=1<<$}));return r=!0,b(),function(){P(T),d(),r=!1}})}const de=ye("error T-T");function Qe(t){let e,n,s,i,l,u,r,o,c,d,b,T,v,$,C;return{c(){e=p("link"),n=p("link"),s=p("link"),i=E(),l=p("div"),l.innerHTML=`<div style="display:flex; font-size: 1rem"><h1 style="color: var(--primary); font-weight: 300;text-decoration: underline;">this website is only for smaller screens</h1> 
        <h1 style="color: var(--primary); font-weight: 300; margin-left: 0.5rem">:)</h1></div>`,u=E(),r=p("main"),o=p("p"),o.innerHTML='this is a <span style="font-size:1.2rem; font-weight: 700; color: var(--accent)" class="svelte-10z96nv">super secret</span>  virtual letter 👩‍💻, identify yourself to open it 🍨',c=E(),d=p("div"),b=p("input"),T=E(),v=p("button"),v.textContent="📬",a(e,"rel","preconnect"),a(e,"href","https://fonts.googleapis.com"),a(n,"rel","preconnect"),a(n,"href","https://fonts.gstatic.com"),a(s,"href","https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"),a(s,"rel","stylesheet"),a(l,"id","desktop"),a(l,"class","svelte-10z96nv"),k(o,"margin-bottom","0"),a(o,"class","svelte-10z96nv"),a(b,"type","text"),a(b,"placeholder"," your name ;)"),a(b,"class","svelte-10z96nv"),a(v,"class","svelte-10z96nv"),k(d,"display","flex"),k(d,"flex-direction","column"),k(d,"justify-content","center"),k(d,"align-items","center"),k(d,"gap","0.5rem"),a(r,"class","svelte-10z96nv")},m(_,N){f(document.head,e),f(document.head,n),f(document.head,s),L(_,i,N),L(_,l,N),L(_,u,N),L(_,r,N),f(r,o),f(r,c),f(r,d),f(d,b),ke(b,t[0]),f(d,T),f(d,v),$||(C=[A(b,"input",t[2]),A(v,"click",t[3])],$=!0)},p(_,[N]){N&1&&b.value!==_[0]&&ke(b,_[0])},i:x,o:x,d(_){y(e),y(n),y(s),_&&y(i),_&&y(l),_&&y(u),_&&y(r),$=!1,P(C)}}}function Ve(t,e,n){let s;Ne(t,de,r=>n(1,s=r));let i;function l(){i=this.value,n(0,i)}return[i,s,l,()=>{de.set(i),console.log(s),setTimeout(()=>{window.location.href="/#/namee"})}]}class Ze extends J{constructor(e){super(),G(this,e,Ve,Qe,U,{})}}function et(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,s,i,l,u=[],r="",o=t.split("/");for(o[0]||o.shift();i=o.shift();)n=i[0],n==="*"?(u.push("wild"),r+="/(.*)"):n===":"?(s=i.indexOf("?",1),l=i.indexOf(".",1),u.push(i.substring(1,~s?s:~l?l:i.length)),r+=~s&&!~l?"(?:/([^/]+?))?":"/([^/]+?)",~l&&(r+=(~s?"?":"")+"\\"+i.substring(l))):r+="/"+i;return{keys:u,pattern:new RegExp("^"+r+(e?"(?=$|/)":"/?$"),"i")}}function tt(t){let e,n,s;const i=[t[2]];var l=t[0];function u(r){let o={};for(let c=0;c<i.length;c+=1)o=Te(o,i[c]);return{props:o}}return l&&(e=oe(l,u()),e.$on("routeEvent",t[7])),{c(){e&&ne(e.$$.fragment),n=pe()},m(r,o){e&&X(e,r,o),L(r,n,o),s=!0},p(r,o){const c=o&4?Pe(i,[Ae(r[2])]):{};if(o&1&&l!==(l=r[0])){if(e){_e();const d=e;I(d.$$.fragment,1,0,()=>{K(d,1)}),ge()}l?(e=oe(l,u()),e.$on("routeEvent",r[7]),ne(e.$$.fragment),q(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else l&&e.$set(c)},i(r){s||(e&&q(e.$$.fragment,r),s=!0)},o(r){e&&I(e.$$.fragment,r),s=!1},d(r){r&&y(n),e&&K(e,r)}}}function nt(t){let e,n,s;const i=[{params:t[1]},t[2]];var l=t[0];function u(r){let o={};for(let c=0;c<i.length;c+=1)o=Te(o,i[c]);return{props:o}}return l&&(e=oe(l,u()),e.$on("routeEvent",t[6])),{c(){e&&ne(e.$$.fragment),n=pe()},m(r,o){e&&X(e,r,o),L(r,n,o),s=!0},p(r,o){const c=o&6?Pe(i,[o&2&&{params:r[1]},o&4&&Ae(r[2])]):{};if(o&1&&l!==(l=r[0])){if(e){_e();const d=e;I(d.$$.fragment,1,0,()=>{K(d,1)}),ge()}l?(e=oe(l,u()),e.$on("routeEvent",r[6]),ne(e.$$.fragment),q(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else l&&e.$set(c)},i(r){s||(e&&q(e.$$.fragment,r),s=!0)},o(r){e&&I(e.$$.fragment,r),s=!1},d(r){r&&y(n),e&&K(e,r)}}}function st(t){let e,n,s,i;const l=[nt,tt],u=[];function r(o,c){return o[1]?0:1}return e=r(t),n=u[e]=l[e](t),{c(){n.c(),s=pe()},m(o,c){u[e].m(o,c),L(o,s,c),i=!0},p(o,[c]){let d=e;e=r(o),e===d?u[e].p(o,c):(_e(),I(u[d],1,1,()=>{u[d]=null}),ge(),n=u[e],n?n.p(o,c):(n=u[e]=l[e](o),n.c()),q(n,1),n.m(s.parentNode,s))},i(o){i||(q(n),i=!0)},o(o){I(n),i=!1},d(o){u[e].d(o),o&&y(s)}}}function xe(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let s="";return n>-1&&(s=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:s}}const ve=qe(null,function(e){e(xe());const n=()=>{e(xe())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}});Re(ve,t=>t.location);Re(ve,t=>t.querystring);const Le=ye(void 0);function rt(t){t?window.scrollTo(t.__svelte_spa_router_scrollX,t.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function ot(t,e,n){let{routes:s={}}=e,{prefix:i=""}=e,{restoreScrollState:l=!1}=e;class u{constructor(m,h){if(!h||typeof h!="function"&&(typeof h!="object"||h._sveltesparouter!==!0))throw Error("Invalid component object");if(!m||typeof m=="string"&&(m.length<1||m.charAt(0)!="/"&&m.charAt(0)!="*")||typeof m=="object"&&!(m instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:O,keys:w}=et(m);this.path=m,typeof h=="object"&&h._sveltesparouter===!0?(this.component=h.component,this.conditions=h.conditions||[],this.userData=h.userData,this.props=h.props||{}):(this.component=()=>Promise.resolve(h),this.conditions=[],this.props={}),this._pattern=O,this._keys=w}match(m){if(i){if(typeof i=="string")if(m.startsWith(i))m=m.substr(i.length)||"/";else return null;else if(i instanceof RegExp){const j=m.match(i);if(j&&j[0])m=m.substr(j[0].length)||"/";else return null}}const h=this._pattern.exec(m);if(h===null)return null;if(this._keys===!1)return h;const O={};let w=0;for(;w<this._keys.length;){try{O[this._keys[w]]=decodeURIComponent(h[w+1]||"")||null}catch{O[this._keys[w]]=null}w++}return O}async checkConditions(m){for(let h=0;h<this.conditions.length;h++)if(!await this.conditions[h](m))return!1;return!0}}const r=[];s instanceof Map?s.forEach((g,m)=>{r.push(new u(m,g))}):Object.keys(s).forEach(g=>{r.push(new u(g,s[g]))});let o=null,c=null,d={};const b=We();async function T(g,m){await Xe(),b(g,m)}let v=null,$=null;l&&($=g=>{g.state&&(g.state.__svelte_spa_router_scrollY||g.state.__svelte_spa_router_scrollX)?v=g.state:v=null},window.addEventListener("popstate",$),Fe(()=>{rt(v)}));let C=null,_=null;const N=ve.subscribe(async g=>{C=g;let m=0;for(;m<r.length;){const h=r[m].match(g.location);if(!h){m++;continue}const O={route:r[m].path,location:g.location,querystring:g.querystring,userData:r[m].userData,params:h&&typeof h=="object"&&Object.keys(h).length?h:null};if(!await r[m].checkConditions(O)){n(0,o=null),_=null,T("conditionsFailed",O);return}T("routeLoading",Object.assign({},O));const w=r[m].component;if(_!=w){w.loading?(n(0,o=w.loading),_=w,n(1,c=w.loadingParams),n(2,d={}),T("routeLoaded",Object.assign({},O,{component:o,name:o.name,params:c}))):(n(0,o=null),_=null);const j=await w();if(g!=C)return;n(0,o=j&&j.default||j),_=w}h&&typeof h=="object"&&Object.keys(h).length?n(1,c=h):n(1,c=null),n(2,d=r[m].props),T("routeLoaded",Object.assign({},O,{component:o,name:o.name,params:c})).then(()=>{Le.set(c)});return}n(0,o=null),_=null,Le.set(void 0)});Ye(()=>{N(),$&&window.removeEventListener("popstate",$)});function M(g){$e.call(this,t,g)}function S(g){$e.call(this,t,g)}return t.$$set=g=>{"routes"in g&&n(3,s=g.routes),"prefix"in g&&n(4,i=g.prefix),"restoreScrollState"in g&&n(5,l=g.restoreScrollState)},t.$$.update=()=>{t.$$.dirty&32&&(history.scrollRestoration=l?"manual":"auto")},[o,c,d,s,i,l,M,S]}class it extends J{constructor(e){super(),G(this,e,ot,st,U,{routes:3,prefix:4,restoreScrollState:5})}}function lt(t){let e,n,s,i,l,u,r,o,c,d,b,T,v,$,C,_,N,M,S,g,m,h,O,w,j,R,Q,ie,be;return{c(){e=p("link"),n=p("link"),s=p("link"),i=E(),l=p("div"),l.innerHTML=`<div style="display:flex; font-size: 1rem"><h1 style="color: var(--primary); font-weight: 300;text-decoration: underline;">this website is only for smaller screens</h1> 
        <h1 style="color: var(--primary); font-weight: 300; margin-left: 0.5rem">:)</h1></div>`,u=E(),r=p("main"),o=p("div"),c=p("p"),d=Z("hii :3 "),b=Z(t[0]),T=Z(", that's a kool name but ..."),v=E(),$=p("p"),$.innerHTML='ill just call you <span style="font-size:1.2rem; font-weight: 700; color: var(--accent)" class="svelte-8h450p">darsh 🎀</span> , is that okay?',C=E(),_=p("div"),_.innerHTML='<span class="svelte-8h450p">(😈)</span>',N=E(),M=p("div"),S=p("img"),m=E(),h=p("p"),h.textContent=`youuu have TWO options now, so chose\r
                carefully:`,O=E(),w=p("div"),j=p("button"),j.textContent="yesss, i love the name 🔥😍",R=E(),Q=p("button"),Q.textContent="YESS (BUT IN CAPS) 🎉🍨",a(e,"rel","preconnect"),a(e,"href","https://fonts.googleapis.com"),a(n,"rel","preconnect"),a(n,"href","https://fonts.gstatic.com"),a(s,"href","https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"),a(s,"rel","stylesheet"),a(l,"id","desktop"),a(l,"class","svelte-8h450p"),a(c,"class","svelte-8h450p"),k($,"margin-bottom","0"),a($,"class","svelte-8h450p"),k(_,"display","flex"),k(_,"justify-content","center"),k(_,"align-items","center"),k(_,"margin","1rem"),V(S.src,g=t[1])||a(S,"src",g),a(S,"alt","A thinking cat"),a(S,"class","svelte-8h450p"),k(h,"color","var(--secondary)"),k(h,"margin-top","1rem"),a(h,"class","svelte-8h450p"),k(o,"display","flex"),k(o,"flex-direction","column"),k(o,"justify-content","center"),k(o,"align-items","center"),k(o,"gap","0.5rem"),a(j,"class","svelte-8h450p"),a(Q,"class","svelte-8h450p"),k(w,"display","flex"),k(w,"flex-direction","column"),k(w,"justify-content","center"),k(w,"align-items","center"),k(w,"gap","0.5rem"),a(r,"class","svelte-8h450p")},m(z,D){f(document.head,e),f(document.head,n),f(document.head,s),L(z,i,D),L(z,l,D),L(z,u,D),L(z,r,D),f(r,o),f(o,c),f(c,d),f(c,b),f(c,T),f(o,v),f(o,$),f(o,C),f(o,_),f(o,N),f(o,M),f(M,S),f(M,m),f(M,h),f(r,O),f(r,w),f(w,j),f(w,R),f(w,Q),ie||(be=[A(j,"click",t[2]),A(Q,"click",t[3])],ie=!0)},p(z,[D]){D&1&&De(b,z[0])},i:x,o:x,d(z){y(e),y(n),y(s),z&&y(i),z&&y(l),z&&y(u),z&&y(r),ie=!1,P(be)}}}function ct(t,e,n){let s;Ne(t,de,r=>n(0,s=r));const i=new URL("/darshhh/assets/cat-thinking-b8120e59.jpg",self.location).href;return[s,i,()=>{setTimeout(()=>{window.location.href="/#/chocs"})},()=>{setTimeout(()=>{window.location.href="/#/chocs"})}]}class at extends J{constructor(e){super(),G(this,e,ct,lt,U,{})}}const{document:ce}=Ie;function ut(t){let e,n,s,i,l,u,r,o,c,d,b,T,v,$,C,_,N,M,S,g,m,h,O,w;return{c(){e=p("link"),n=p("link"),s=p("link"),i=E(),l=p("div"),l.innerHTML=`<div style="display:flex; font-size: 1rem"><h1 style="color: var(--primary); font-weight: 300;text-decoration: underline;">this website is only for smaller screens</h1> 
        <h1 style="color: var(--primary); font-weight: 300; margin-left: 0.5rem">:)</h1></div>`,u=E(),r=p("main"),o=p("p"),o.textContent="jokes aside, here's the chocolates that you didnt want 🍰:",c=E(),d=p("img"),T=E(),v=p("img"),C=E(),_=p("img"),M=E(),S=p("img"),m=E(),h=p("div"),h.innerHTML=`<p style="color: var(--secondary)" class="svelte-1m95dj3">*click to eat the chocolates* 😋</p> 
        <p style="color: var(--secondary)" class="svelte-1m95dj3">(also there is a another message beneath the cocoa)</p>`,a(e,"rel","preconnect"),a(e,"href","https://fonts.googleapis.com"),a(n,"rel","preconnect"),a(n,"href","https://fonts.gstatic.com"),a(s,"href","https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"),a(s,"rel","stylesheet"),a(l,"id","desktop"),a(l,"class","svelte-1m95dj3"),k(o,"margin-bottom","auto"),a(o,"class","svelte-1m95dj3"),a(d,"id","one"),V(d.src,b=t[0])||a(d,"src",b),a(d,"alt","cat shaped chocolate"),a(d,"class","svelte-1m95dj3"),a(v,"id","two"),V(v.src,$=t[0])||a(v,"src",$),a(v,"alt","cat shaped chocolate"),a(v,"class","svelte-1m95dj3"),a(_,"id","three"),V(_.src,N=t[0])||a(_,"src",N),a(_,"alt","cat shaped chocolate"),a(_,"class","svelte-1m95dj3"),V(S.src,g=t[1])||a(S,"src",g),a(S,"id","letter"),a(S,"alt","cat shaped letter"),a(S,"class","svelte-1m95dj3"),k(h,"margin-top","40svh"),a(r,"class","svelte-1m95dj3")},m(j,R){f(ce.head,e),f(ce.head,n),f(ce.head,s),L(j,i,R),L(j,l,R),L(j,u,R),L(j,r,R),f(r,o),f(r,c),f(r,d),f(r,T),f(r,v),f(r,C),f(r,_),f(r,M),f(r,S),f(r,m),f(r,h),O||(w=[A(d,"click",t[2]),A(v,"click",t[3]),A(_,"click",t[4]),A(S,"click",t[5])],O=!0)},p:x,i:x,o:x,d(j){y(e),y(n),y(s),j&&y(i),j&&y(l),j&&y(u),j&&y(r),O=!1,P(w)}}}function ae(t){document.getElementById(t).remove()}function ft(t){const e=new URL("/darshhh/assets/cat-chocolate-rbg-1559e0fd.png",self.location).href,n=new URL("/darshhh/assets/cat-letter-rbg-4d7bc699.png",self.location).href;return[e,n,()=>{ae("one")},()=>{ae("two")},()=>{ae("three")},()=>{setTimeout(()=>{window.location.href="/#/message"})}]}class dt extends J{constructor(e){super(),G(this,e,ft,ut,U,{})}}function ht(t){let e,n,s,i,l,u,r;return{c(){e=p("link"),n=p("link"),s=p("link"),i=E(),l=p("div"),l.innerHTML=`<div style="display:flex; font-size: 1rem"><h1 style="color: var(--primary); font-weight: 300;text-decoration: underline;">this website is only for smaller screens</h1> 
        <h1 style="color: var(--primary); font-weight: 300; margin-left: 0.5rem">:)</h1></div>`,u=E(),r=p("main"),r.innerHTML=`<p class="svelte-njaar6">chocolates aside, mai aapko reallly janna chahta hu, i want to talk to you, i made all of this just to try to get rid of
        the akward convos, ik its really annoying to put up with a younger guy like me, but i am really serious abt you, romantic
        things ko chod ke bhi, i want us to be friends... i hope that&#39;s not a lot to ask for and that all of this doesnt make you
        uncomfortable</p> 
    <a href="/#" style="color: var(--accent)" class="svelte-njaar6">byeeeee :3</a>`,a(e,"rel","preconnect"),a(e,"href","https://fonts.googleapis.com"),a(n,"rel","preconnect"),a(n,"href","https://fonts.gstatic.com"),a(s,"href","https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"),a(s,"rel","stylesheet"),a(l,"id","desktop"),a(l,"class","svelte-njaar6"),a(r,"class","svelte-njaar6")},m(o,c){f(document.head,e),f(document.head,n),f(document.head,s),L(o,i,c),L(o,l,c),L(o,u,c),L(o,r,c)},p:x,i:x,o:x,d(o){y(e),y(n),y(s),o&&y(i),o&&y(l),o&&y(u),o&&y(r)}}}function pt(t){return[]}class mt extends J{constructor(e){super(),G(this,e,pt,ht,U,{})}}function _t(t){let e,n;return e=new it({props:{routes:t[0]}}),{c(){ne(e.$$.fragment)},m(s,i){X(e,s,i),n=!0},p:x,i(s){n||(q(e.$$.fragment,s),n=!0)},o(s){I(e.$$.fragment,s),n=!1},d(s){K(e,s)}}}function gt(t){return[{"/":Ze,"/namee":at,"/chocs":dt,"/message":mt}]}class yt extends J{constructor(e){super(),G(this,e,gt,_t,U,{})}}new yt({target:document.querySelector("body")});
