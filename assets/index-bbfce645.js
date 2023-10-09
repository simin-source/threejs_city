var Ld=Object.defineProperty;var Id=(n,e,t)=>e in n?Ld(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Ie=(n,e,t)=>(Id(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function dl(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const at={},kr=[],mn=()=>{},Dd=()=>!1,Ud=/^on[^a-z]/,_o=n=>Ud.test(n),pl=n=>n.startsWith("onUpdate:"),wt=Object.assign,ml=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Fd=Object.prototype.hasOwnProperty,Ze=(n,e)=>Fd.call(n,e),He=Array.isArray,Vr=n=>vo(n)==="[object Map]",Nd=n=>vo(n)==="[object Set]",We=n=>typeof n=="function",Ct=n=>typeof n=="string",gl=n=>typeof n=="symbol",vt=n=>n!==null&&typeof n=="object",Oh=n=>vt(n)&&We(n.then)&&We(n.catch),Od=Object.prototype.toString,vo=n=>Od.call(n),Bd=n=>vo(n).slice(8,-1),zd=n=>vo(n)==="[object Object]",_l=n=>Ct(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Qs=dl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Hd=/-(\w)/g,dr=xo(n=>n.replace(Hd,(e,t)=>t?t.toUpperCase():"")),kd=/\B([A-Z])/g,Mr=xo(n=>n.replace(kd,"-$1").toLowerCase()),Bh=xo(n=>n.charAt(0).toUpperCase()+n.slice(1)),zo=xo(n=>n?`on${Bh(n)}`:""),so=(n,e)=>!Object.is(n,e),Ho=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},oo=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Vd=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let cc;const za=()=>cc||(cc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function vl(n){if(He(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Ct(i)?jd(i):vl(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(Ct(n))return n;if(vt(n))return n}}const Gd=/;(?![^(]*\))/g,Wd=/:([^]+)/,Xd=/\/\*[^]*?\*\//g;function jd(n){const e={};return n.replace(Xd,"").split(Gd).forEach(t=>{if(t){const i=t.split(Wd);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function xl(n){let e="";if(Ct(n))e=n;else if(He(n))for(let t=0;t<n.length;t++){const i=xl(n[t]);i&&(e+=i+" ")}else if(vt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const qd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Yd=dl(qd);function zh(n){return!!n||n===""}let fn;class Kd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=fn,!e&&fn&&(this.index=(fn.scopes||(fn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=fn;try{return fn=this,e()}finally{fn=t}}}on(){fn=this}off(){fn=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Zd(n,e=fn){e&&e.active&&e.effects.push(n)}function $d(){return fn}const yl=n=>{const e=new Set(n);return e.w=0,e.n=0,e},Hh=n=>(n.w&oi)>0,kh=n=>(n.n&oi)>0,Jd=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=oi},Qd=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];Hh(r)&&!kh(r)?r.delete(n):e[t++]=r,r.w&=~oi,r.n&=~oi}e.length=t}},Ha=new WeakMap;let Or=0,oi=1;const ka=30;let dn;const Si=Symbol(""),Va=Symbol("");class Ml{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Zd(this,i)}run(){if(!this.active)return this.fn();let e=dn,t=ti;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=dn,dn=this,ti=!0,oi=1<<++Or,Or<=ka?Jd(this):uc(this),this.fn()}finally{Or<=ka&&Qd(this),oi=1<<--Or,dn=this.parent,ti=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){dn===this?this.deferStop=!0:this.active&&(uc(this),this.onStop&&this.onStop(),this.active=!1)}}function uc(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let ti=!0;const Vh=[];function Sr(){Vh.push(ti),ti=!1}function Er(){const n=Vh.pop();ti=n===void 0?!0:n}function Xt(n,e,t){if(ti&&dn){let i=Ha.get(n);i||Ha.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=yl()),Gh(r)}}function Gh(n,e){let t=!1;Or<=ka?kh(n)||(n.n|=oi,t=!Hh(n)):t=!n.has(dn),t&&(n.add(dn),dn.deps.push(n))}function kn(n,e,t,i,r,s){const o=Ha.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&He(n)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":He(n)?_l(t)&&a.push(o.get("length")):(a.push(o.get(Si)),Vr(n)&&a.push(o.get(Va)));break;case"delete":He(n)||(a.push(o.get(Si)),Vr(n)&&a.push(o.get(Va)));break;case"set":Vr(n)&&a.push(o.get(Si));break}if(a.length===1)a[0]&&Ga(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Ga(yl(l))}}function Ga(n,e){const t=He(n)?n:[...n];for(const i of t)i.computed&&hc(i);for(const i of t)i.computed||hc(i)}function hc(n,e){(n!==dn||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const ep=dl("__proto__,__v_isRef,__isVue"),Wh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(gl)),tp=Sl(),np=Sl(!1,!0),ip=Sl(!0),fc=rp();function rp(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=tt(this);for(let s=0,o=this.length;s<o;s++)Xt(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(tt)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Sr();const i=tt(this)[e].apply(this,t);return Er(),i}}),n}function sp(n){const e=tt(this);return Xt(e,"has",n),e.hasOwnProperty(n)}function Sl(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?Mp:Kh:e?Yh:qh).get(i))return i;const o=He(i);if(!n){if(o&&Ze(fc,r))return Reflect.get(fc,r,s);if(r==="hasOwnProperty")return sp}const a=Reflect.get(i,r,s);return(gl(r)?Wh.has(r):ep(r))||(n||Xt(i,"get",r),e)?a:Ht(a)?o&&_l(r)?a:a.value:vt(a)?n?Zh(a):Tl(a):a}}const op=Xh(),ap=Xh(!0);function Xh(n=!1){return function(t,i,r,s){let o=t[i];if(Zr(o)&&Ht(o)&&!Ht(r))return!1;if(!n&&(!Wa(r)&&!Zr(r)&&(o=tt(o),r=tt(r)),!He(t)&&Ht(o)&&!Ht(r)))return o.value=r,!0;const a=He(t)&&_l(i)?Number(i)<t.length:Ze(t,i),l=Reflect.set(t,i,r,s);return t===tt(s)&&(a?so(r,o)&&kn(t,"set",i,r):kn(t,"add",i,r)),l}}function lp(n,e){const t=Ze(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&kn(n,"delete",e,void 0),i}function cp(n,e){const t=Reflect.has(n,e);return(!gl(e)||!Wh.has(e))&&Xt(n,"has",e),t}function up(n){return Xt(n,"iterate",He(n)?"length":Si),Reflect.ownKeys(n)}const jh={get:tp,set:op,deleteProperty:lp,has:cp,ownKeys:up},hp={get:ip,set(n,e){return!0},deleteProperty(n,e){return!0}},fp=wt({},jh,{get:np,set:ap}),El=n=>n,yo=n=>Reflect.getPrototypeOf(n);function ms(n,e,t=!1,i=!1){n=n.__v_raw;const r=tt(n),s=tt(e);t||(e!==s&&Xt(r,"get",e),Xt(r,"get",s));const{has:o}=yo(r),a=i?El:t?Rl:Al;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function gs(n,e=!1){const t=this.__v_raw,i=tt(t),r=tt(n);return e||(n!==r&&Xt(i,"has",n),Xt(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function _s(n,e=!1){return n=n.__v_raw,!e&&Xt(tt(n),"iterate",Si),Reflect.get(n,"size",n)}function dc(n){n=tt(n);const e=tt(this);return yo(e).has.call(e,n)||(e.add(n),kn(e,"add",n,n)),this}function pc(n,e){e=tt(e);const t=tt(this),{has:i,get:r}=yo(t);let s=i.call(t,n);s||(n=tt(n),s=i.call(t,n));const o=r.call(t,n);return t.set(n,e),s?so(e,o)&&kn(t,"set",n,e):kn(t,"add",n,e),this}function mc(n){const e=tt(this),{has:t,get:i}=yo(e);let r=t.call(e,n);r||(n=tt(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&kn(e,"delete",n,void 0),s}function gc(){const n=tt(this),e=n.size!==0,t=n.clear();return e&&kn(n,"clear",void 0,void 0),t}function vs(n,e){return function(i,r){const s=this,o=s.__v_raw,a=tt(o),l=e?El:n?Rl:Al;return!n&&Xt(a,"iterate",Si),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function xs(n,e,t){return function(...i){const r=this.__v_raw,s=tt(r),o=Vr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?El:e?Rl:Al;return!e&&Xt(s,"iterate",l?Va:Si),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Wn(n){return function(...e){return n==="delete"?!1:this}}function dp(){const n={get(s){return ms(this,s)},get size(){return _s(this)},has:gs,add:dc,set:pc,delete:mc,clear:gc,forEach:vs(!1,!1)},e={get(s){return ms(this,s,!1,!0)},get size(){return _s(this)},has:gs,add:dc,set:pc,delete:mc,clear:gc,forEach:vs(!1,!0)},t={get(s){return ms(this,s,!0)},get size(){return _s(this,!0)},has(s){return gs.call(this,s,!0)},add:Wn("add"),set:Wn("set"),delete:Wn("delete"),clear:Wn("clear"),forEach:vs(!0,!1)},i={get(s){return ms(this,s,!0,!0)},get size(){return _s(this,!0)},has(s){return gs.call(this,s,!0)},add:Wn("add"),set:Wn("set"),delete:Wn("delete"),clear:Wn("clear"),forEach:vs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=xs(s,!1,!1),t[s]=xs(s,!0,!1),e[s]=xs(s,!1,!0),i[s]=xs(s,!0,!0)}),[n,t,e,i]}const[pp,mp,gp,_p]=dp();function bl(n,e){const t=e?n?_p:gp:n?mp:pp;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Ze(t,r)&&r in i?t:i,r,s)}const vp={get:bl(!1,!1)},xp={get:bl(!1,!0)},yp={get:bl(!0,!1)},qh=new WeakMap,Yh=new WeakMap,Kh=new WeakMap,Mp=new WeakMap;function Sp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ep(n){return n.__v_skip||!Object.isExtensible(n)?0:Sp(Bd(n))}function Tl(n){return Zr(n)?n:wl(n,!1,jh,vp,qh)}function bp(n){return wl(n,!1,fp,xp,Yh)}function Zh(n){return wl(n,!0,hp,yp,Kh)}function wl(n,e,t,i,r){if(!vt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=Ep(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function ar(n){return Zr(n)?ar(n.__v_raw):!!(n&&n.__v_isReactive)}function Zr(n){return!!(n&&n.__v_isReadonly)}function Wa(n){return!!(n&&n.__v_isShallow)}function $h(n){return ar(n)||Zr(n)}function tt(n){const e=n&&n.__v_raw;return e?tt(e):n}function Jh(n){return oo(n,"__v_skip",!0),n}const Al=n=>vt(n)?Tl(n):n,Rl=n=>vt(n)?Zh(n):n;function Tp(n){ti&&dn&&(n=tt(n),Gh(n.dep||(n.dep=yl())))}function wp(n,e){n=tt(n);const t=n.dep;t&&Ga(t)}function Ht(n){return!!(n&&n.__v_isRef===!0)}function Ap(n){return Ht(n)?n.value:n}const Rp={get:(n,e,t)=>Ap(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Ht(r)&&!Ht(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Qh(n){return ar(n)?n:new Proxy(n,Rp)}class Cp{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ml(e,()=>{this._dirty||(this._dirty=!0,wp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=tt(this);return Tp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Pp(n,e,t=!1){let i,r;const s=We(n);return s?(i=n,r=mn):(i=n.get,r=n.set),new Cp(i,r,s||!r,t)}function ni(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){Mo(s,e,t)}return r}function gn(n,e,t,i){if(We(n)){const s=ni(n,e,t,i);return s&&Oh(s)&&s.catch(o=>{Mo(o,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(gn(n[s],e,t,i));return r}function Mo(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){ni(l,null,10,[n,o,a]);return}}Lp(n,t,r,i)}function Lp(n,e,t,i=!0){console.error(n)}let $r=!1,Xa=!1;const It=[];let Sn=0;const lr=[];let Nn=null,xi=0;const ef=Promise.resolve();let Cl=null;function Ip(n){const e=Cl||ef;return n?e.then(this?n.bind(this):n):e}function Dp(n){let e=Sn+1,t=It.length;for(;e<t;){const i=e+t>>>1;Jr(It[i])<n?e=i+1:t=i}return e}function Pl(n){(!It.length||!It.includes(n,$r&&n.allowRecurse?Sn+1:Sn))&&(n.id==null?It.push(n):It.splice(Dp(n.id),0,n),tf())}function tf(){!$r&&!Xa&&(Xa=!0,Cl=ef.then(rf))}function Up(n){const e=It.indexOf(n);e>Sn&&It.splice(e,1)}function Fp(n){He(n)?lr.push(...n):(!Nn||!Nn.includes(n,n.allowRecurse?xi+1:xi))&&lr.push(n),tf()}function _c(n,e=$r?Sn+1:0){for(;e<It.length;e++){const t=It[e];t&&t.pre&&(It.splice(e,1),e--,t())}}function nf(n){if(lr.length){const e=[...new Set(lr)];if(lr.length=0,Nn){Nn.push(...e);return}for(Nn=e,Nn.sort((t,i)=>Jr(t)-Jr(i)),xi=0;xi<Nn.length;xi++)Nn[xi]();Nn=null,xi=0}}const Jr=n=>n.id==null?1/0:n.id,Np=(n,e)=>{const t=Jr(n)-Jr(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function rf(n){Xa=!1,$r=!0,It.sort(Np);const e=mn;try{for(Sn=0;Sn<It.length;Sn++){const t=It[Sn];t&&t.active!==!1&&ni(t,null,14)}}finally{Sn=0,It.length=0,nf(),$r=!1,Cl=null,(It.length||lr.length)&&rf()}}function Op(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||at;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=i[u]||at;f&&(r=t.map(d=>Ct(d)?d.trim():d)),h&&(r=t.map(Vd))}let a,l=i[a=zo(e)]||i[a=zo(dr(e))];!l&&s&&(l=i[a=zo(Mr(e))]),l&&gn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,gn(c,n,6,r)}}function sf(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!We(n)){const l=c=>{const u=sf(c,e,!0);u&&(a=!0,wt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(vt(n)&&i.set(n,null),null):(He(s)?s.forEach(l=>o[l]=null):wt(o,s),vt(n)&&i.set(n,o),o)}function So(n,e){return!n||!_o(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ze(n,e[0].toLowerCase()+e.slice(1))||Ze(n,Mr(e))||Ze(n,e))}let En=null,of=null;function ao(n){const e=En;return En=n,of=n&&n.type.__scopeId||null,e}function Bp(n,e=En,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Ac(-1);const s=ao(e);let o;try{o=n(...r)}finally{ao(s),i._d&&Ac(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function ko(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:g,inheritAttrs:_}=n;let m,p;const b=ao(n);try{if(t.shapeFlag&4){const M=r||i;m=yn(u.call(M,M,h,s,d,f,g)),p=l}else{const M=e;m=yn(M.length>1?M(s,{attrs:l,slots:a,emit:c}):M(s,null)),p=e.props?l:zp(l)}}catch(M){Mo(M,n,1),m=Hn(Qr)}let x=m;if(p&&_!==!1){const M=Object.keys(p),{shapeFlag:A}=x;M.length&&A&7&&(o&&M.some(pl)&&(p=Hp(p,o)),x=pr(x,p))}return t.dirs&&(x=pr(x),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&(x.transition=t.transition),m=x,ao(b),m}const zp=n=>{let e;for(const t in n)(t==="class"||t==="style"||_o(t))&&((e||(e={}))[t]=n[t]);return e},Hp=(n,e)=>{const t={};for(const i in n)(!pl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function kp(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?vc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!So(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?vc(i,o,c):!0:!!o;return!1}function vc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!So(t,s))return!0}return!1}function Vp({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const Gp=n=>n.__isSuspense;function Wp(n,e){e&&e.pendingBranch?He(n)?e.effects.push(...n):e.effects.push(n):Fp(n)}const ys={};function Vo(n,e,t){return af(n,e,t)}function af(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:o}=at){var a;const l=$d()===((a=Dt)==null?void 0:a.scope)?Dt:null;let c,u=!1,h=!1;if(Ht(n)?(c=()=>n.value,u=Wa(n)):ar(n)?(c=()=>n,i=!0):He(n)?(h=!0,u=n.some(M=>ar(M)||Wa(M)),c=()=>n.map(M=>{if(Ht(M))return M.value;if(ar(M))return tr(M);if(We(M))return ni(M,l,2)})):We(n)?e?c=()=>ni(n,l,2):c=()=>{if(!(l&&l.isUnmounted))return f&&f(),gn(n,l,3,[d])}:c=mn,e&&i){const M=c;c=()=>tr(M())}let f,d=M=>{f=b.onStop=()=>{ni(M,l,4)}},g;if(es)if(d=mn,e?t&&gn(e,l,3,[c(),h?[]:void 0,d]):c(),r==="sync"){const M=zm();g=M.__watcherHandles||(M.__watcherHandles=[])}else return mn;let _=h?new Array(n.length).fill(ys):ys;const m=()=>{if(b.active)if(e){const M=b.run();(i||u||(h?M.some((A,P)=>so(A,_[P])):so(M,_)))&&(f&&f(),gn(e,l,3,[M,_===ys?void 0:h&&_[0]===ys?[]:_,d]),_=M)}else b.run()};m.allowRecurse=!!e;let p;r==="sync"?p=m:r==="post"?p=()=>Vt(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),p=()=>Pl(m));const b=new Ml(c,p);e?t?m():_=b.run():r==="post"?Vt(b.run.bind(b),l&&l.suspense):b.run();const x=()=>{b.stop(),l&&l.scope&&ml(l.scope.effects,b)};return g&&g.push(x),x}function Xp(n,e,t){const i=this.proxy,r=Ct(n)?n.includes(".")?lf(i,n):()=>i[n]:n.bind(i,i);let s;We(e)?s=e:(s=e.handler,t=e);const o=Dt;mr(this);const a=af(r,s.bind(i),t);return o?mr(o):Ei(),a}function lf(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function tr(n,e){if(!vt(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),Ht(n))tr(n.value,e);else if(He(n))for(let t=0;t<n.length;t++)tr(n[t],e);else if(Nd(n)||Vr(n))n.forEach(t=>{tr(t,e)});else if(zd(n))for(const t in n)tr(n[t],e);return n}function fi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Sr(),gn(l,t,8,[n.el,a,n,e]),Er())}}function jp(n,e){return We(n)?(()=>wt({name:n.name},e,{setup:n}))():n}const eo=n=>!!n.type.__asyncLoader,cf=n=>n.type.__isKeepAlive;function qp(n,e){uf(n,"a",e)}function Yp(n,e){uf(n,"da",e)}function uf(n,e,t=Dt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Eo(e,i,t),t){let r=t.parent;for(;r&&r.parent;)cf(r.parent.vnode)&&Kp(i,e,t,r),r=r.parent}}function Kp(n,e,t,i){const r=Eo(e,n,i,!0);hf(()=>{ml(i[e],r)},t)}function Eo(n,e,t=Dt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Sr(),mr(t);const a=gn(e,t,n,o);return Ei(),Er(),a});return i?r.unshift(s):r.push(s),s}}const Vn=n=>(e,t=Dt)=>(!es||n==="sp")&&Eo(n,(...i)=>e(...i),t),Zp=Vn("bm"),$p=Vn("m"),Jp=Vn("bu"),Qp=Vn("u"),em=Vn("bum"),hf=Vn("um"),tm=Vn("sp"),nm=Vn("rtg"),im=Vn("rtc");function rm(n,e=Dt){Eo("ec",n,e)}const sm=Symbol.for("v-ndc"),ja=n=>n?Sf(n)?Nl(n)||n.proxy:ja(n.parent):null,Gr=wt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ja(n.parent),$root:n=>ja(n.root),$emit:n=>n.emit,$options:n=>Ll(n),$forceUpdate:n=>n.f||(n.f=()=>Pl(n.update)),$nextTick:n=>n.n||(n.n=Ip.bind(n.proxy)),$watch:n=>Xp.bind(n)}),Go=(n,e)=>n!==at&&!n.__isScriptSetup&&Ze(n,e),om={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Go(i,e))return o[e]=1,i[e];if(r!==at&&Ze(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&Ze(c,e))return o[e]=3,s[e];if(t!==at&&Ze(t,e))return o[e]=4,t[e];qa&&(o[e]=0)}}const u=Gr[e];let h,f;if(u)return e==="$attrs"&&Xt(n,"get",e),u(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==at&&Ze(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,Ze(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Go(r,e)?(r[e]=t,!0):i!==at&&Ze(i,e)?(i[e]=t,!0):Ze(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==at&&Ze(n,o)||Go(e,o)||(a=s[0])&&Ze(a,o)||Ze(i,o)||Ze(Gr,o)||Ze(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ze(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function xc(n){return He(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let qa=!0;function am(n){const e=Ll(n),t=n.proxy,i=n.ctx;qa=!1,e.beforeCreate&&yc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:b,destroyed:x,unmounted:M,render:A,renderTracked:P,renderTriggered:w,errorCaptured:B,serverPrefetch:S,expose:T,inheritAttrs:ee,components:ae,directives:z,filters:k}=e;if(c&&lm(c,i,null),o)for(const j in o){const K=o[j];We(K)&&(i[j]=K.bind(t))}if(r){const j=r.call(t,t);vt(j)&&(n.data=Tl(j))}if(qa=!0,s)for(const j in s){const K=s[j],he=We(K)?K.bind(t,t):We(K.get)?K.get.bind(t,t):mn,le=!We(K)&&We(K.set)?K.set.bind(t):mn,H=Om({get:he,set:le});Object.defineProperty(i,j,{enumerable:!0,configurable:!0,get:()=>H.value,set:W=>H.value=W})}if(a)for(const j in a)ff(a[j],i,t,j);if(l){const j=We(l)?l.call(t):l;Reflect.ownKeys(j).forEach(K=>{pm(K,j[K])})}u&&yc(u,n,"c");function J(j,K){He(K)?K.forEach(he=>j(he.bind(t))):K&&j(K.bind(t))}if(J(Zp,h),J($p,f),J(Jp,d),J(Qp,g),J(qp,_),J(Yp,m),J(rm,B),J(im,P),J(nm,w),J(em,b),J(hf,M),J(tm,S),He(T))if(T.length){const j=n.exposed||(n.exposed={});T.forEach(K=>{Object.defineProperty(j,K,{get:()=>t[K],set:he=>t[K]=he})})}else n.exposed||(n.exposed={});A&&n.render===mn&&(n.render=A),ee!=null&&(n.inheritAttrs=ee),ae&&(n.components=ae),z&&(n.directives=z)}function lm(n,e,t=mn){He(n)&&(n=Ya(n));for(const i in n){const r=n[i];let s;vt(r)?"default"in r?s=to(r.from||i,r.default,!0):s=to(r.from||i):s=to(r),Ht(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function yc(n,e,t){gn(He(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function ff(n,e,t,i){const r=i.includes(".")?lf(t,i):()=>t[i];if(Ct(n)){const s=e[n];We(s)&&Vo(r,s)}else if(We(n))Vo(r,n.bind(t));else if(vt(n))if(He(n))n.forEach(s=>ff(s,e,t,i));else{const s=We(n.handler)?n.handler.bind(t):e[n.handler];We(s)&&Vo(r,s,n)}}function Ll(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>lo(l,c,o,!0)),lo(l,e,o)),vt(e)&&s.set(e,l),l}function lo(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&lo(n,s,t,!0),r&&r.forEach(o=>lo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=cm[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const cm={data:Mc,props:Sc,emits:Sc,methods:Br,computed:Br,beforeCreate:Nt,created:Nt,beforeMount:Nt,mounted:Nt,beforeUpdate:Nt,updated:Nt,beforeDestroy:Nt,beforeUnmount:Nt,destroyed:Nt,unmounted:Nt,activated:Nt,deactivated:Nt,errorCaptured:Nt,serverPrefetch:Nt,components:Br,directives:Br,watch:hm,provide:Mc,inject:um};function Mc(n,e){return e?n?function(){return wt(We(n)?n.call(this,this):n,We(e)?e.call(this,this):e)}:e:n}function um(n,e){return Br(Ya(n),Ya(e))}function Ya(n){if(He(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Nt(n,e){return n?[...new Set([].concat(n,e))]:e}function Br(n,e){return n?wt(Object.create(null),n,e):e}function Sc(n,e){return n?He(n)&&He(e)?[...new Set([...n,...e])]:wt(Object.create(null),xc(n),xc(e??{})):e}function hm(n,e){if(!n)return e;if(!e)return n;const t=wt(Object.create(null),n);for(const i in e)t[i]=Nt(n[i],e[i]);return t}function df(){return{app:null,config:{isNativeTag:Dd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let fm=0;function dm(n,e){return function(i,r=null){We(i)||(i=wt({},i)),r!=null&&!vt(r)&&(r=null);const s=df(),o=new Set;let a=!1;const l=s.app={_uid:fm++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Hm,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&We(c.install)?(o.add(c),c.install(l,...u)):We(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const f=Hn(i,r);return f.appContext=s,u&&e?e(f,c):n(f,c,h),a=!0,l._container=c,c.__vue_app__=l,Nl(f.component)||f.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){co=l;try{return c()}finally{co=null}}};return l}}let co=null;function pm(n,e){if(Dt){let t=Dt.provides;const i=Dt.parent&&Dt.parent.provides;i===t&&(t=Dt.provides=Object.create(i)),t[n]=e}}function to(n,e,t=!1){const i=Dt||En;if(i||co){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:co._context.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&We(e)?e.call(i&&i.proxy):e}}function mm(n,e,t,i=!1){const r={},s={};oo(s,To,1),n.propsDefaults=Object.create(null),pf(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:bp(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function gm(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=tt(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(So(n.emitsOptions,f))continue;const d=e[f];if(l)if(Ze(s,f))d!==s[f]&&(s[f]=d,c=!0);else{const g=dr(f);r[g]=Ka(l,a,g,d,n,!1)}else d!==s[f]&&(s[f]=d,c=!0)}}}else{pf(n,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!Ze(e,h)&&((u=Mr(h))===h||!Ze(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(r[h]=Ka(l,a,h,void 0,n,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!Ze(e,h))&&(delete s[h],c=!0)}c&&kn(n,"set","$attrs")}function pf(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Qs(l))continue;const c=e[l];let u;r&&Ze(r,u=dr(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:So(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=tt(t),c=a||at;for(let u=0;u<s.length;u++){const h=s[u];t[h]=Ka(r,l,h,c[h],n,!Ze(c,h))}}return o}function Ka(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Ze(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&We(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(mr(r),i=c[t]=l.call(null,e),Ei())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Mr(t))&&(i=!0))}return i}function mf(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!We(n)){const u=h=>{l=!0;const[f,d]=mf(h,e,!0);wt(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return vt(n)&&i.set(n,kr),kr;if(He(s))for(let u=0;u<s.length;u++){const h=dr(s[u]);Ec(h)&&(o[h]=at)}else if(s)for(const u in s){const h=dr(u);if(Ec(h)){const f=s[u],d=o[h]=He(f)||We(f)?{type:f}:wt({},f);if(d){const g=wc(Boolean,d.type),_=wc(String,d.type);d[0]=g>-1,d[1]=_<0||g<_,(g>-1||Ze(d,"default"))&&a.push(h)}}}const c=[o,a];return vt(n)&&i.set(n,c),c}function Ec(n){return n[0]!=="$"}function bc(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function Tc(n,e){return bc(n)===bc(e)}function wc(n,e){return He(e)?e.findIndex(t=>Tc(t,n)):We(e)&&Tc(e,n)?0:-1}const gf=n=>n[0]==="_"||n==="$stable",Il=n=>He(n)?n.map(yn):[yn(n)],_m=(n,e,t)=>{if(e._n)return e;const i=Bp((...r)=>Il(e(...r)),t);return i._c=!1,i},_f=(n,e,t)=>{const i=n._ctx;for(const r in n){if(gf(r))continue;const s=n[r];if(We(s))e[r]=_m(r,s,i);else if(s!=null){const o=Il(s);e[r]=()=>o}}},vf=(n,e)=>{const t=Il(e);n.slots.default=()=>t},vm=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=tt(e),oo(e,"_",t)):_f(e,n.slots={})}else n.slots={},e&&vf(n,e);oo(n.slots,To,1)},xm=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=at;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(wt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,_f(e,r)),o=e}else e&&(vf(n,e),o={default:1});if(s)for(const a in r)!gf(a)&&!(a in o)&&delete r[a]};function Za(n,e,t,i,r=!1){if(He(n)){n.forEach((f,d)=>Za(f,e&&(He(e)?e[d]:e),t,i,r));return}if(eo(i)&&!r)return;const s=i.shapeFlag&4?Nl(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===at?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Ct(c)?(u[c]=null,Ze(h,c)&&(h[c]=null)):Ht(c)&&(c.value=null)),We(l))ni(l,a,12,[o,u]);else{const f=Ct(l),d=Ht(l);if(f||d){const g=()=>{if(n.f){const _=f?Ze(h,l)?h[l]:u[l]:l.value;r?He(_)&&ml(_,s):He(_)?_.includes(s)||_.push(s):f?(u[l]=[s],Ze(h,l)&&(h[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else f?(u[l]=o,Ze(h,l)&&(h[l]=o)):d&&(l.value=o,n.k&&(u[n.k]=o))};o?(g.id=-1,Vt(g,t)):g()}}}const Vt=Wp;function ym(n){return Mm(n)}function Mm(n,e){const t=za();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=mn,insertStaticContent:g}=n,_=(v,C,L,O=null,U=null,Z=null,$=!1,G=null,ne=!!C.dynamicChildren)=>{if(v===C)return;v&&!Lr(v,C)&&(O=Ce(v),W(v,U,Z,!0),v=null),C.patchFlag===-2&&(ne=!1,C.dynamicChildren=null);const{type:te,ref:ye,shapeFlag:E}=C;switch(te){case bo:m(v,C,L,O);break;case Qr:p(v,C,L,O);break;case Wo:v==null&&b(C,L,O,$);break;case On:ae(v,C,L,O,U,Z,$,G,ne);break;default:E&1?A(v,C,L,O,U,Z,$,G,ne):E&6?z(v,C,L,O,U,Z,$,G,ne):(E&64||E&128)&&te.process(v,C,L,O,U,Z,$,G,ne,ze)}ye!=null&&U&&Za(ye,v&&v.ref,Z,C||v,!C)},m=(v,C,L,O)=>{if(v==null)i(C.el=a(C.children),L,O);else{const U=C.el=v.el;C.children!==v.children&&c(U,C.children)}},p=(v,C,L,O)=>{v==null?i(C.el=l(C.children||""),L,O):C.el=v.el},b=(v,C,L,O)=>{[v.el,v.anchor]=g(v.children,C,L,O,v.el,v.anchor)},x=({el:v,anchor:C},L,O)=>{let U;for(;v&&v!==C;)U=f(v),i(v,L,O),v=U;i(C,L,O)},M=({el:v,anchor:C})=>{let L;for(;v&&v!==C;)L=f(v),r(v),v=L;r(C)},A=(v,C,L,O,U,Z,$,G,ne)=>{$=$||C.type==="svg",v==null?P(C,L,O,U,Z,$,G,ne):S(v,C,U,Z,$,G,ne)},P=(v,C,L,O,U,Z,$,G)=>{let ne,te;const{type:ye,props:E,shapeFlag:y,transition:N,dirs:ie}=v;if(ne=v.el=o(v.type,Z,E&&E.is,E),y&8?u(ne,v.children):y&16&&B(v.children,ne,null,O,U,Z&&ye!=="foreignObject",$,G),ie&&fi(v,null,O,"created"),w(ne,v,v.scopeId,$,O),E){for(const ce in E)ce!=="value"&&!Qs(ce)&&s(ne,ce,null,E[ce],Z,v.children,O,U,we);"value"in E&&s(ne,"value",null,E.value),(te=E.onVnodeBeforeMount)&&xn(te,O,v)}ie&&fi(v,null,O,"beforeMount");const oe=(!U||U&&!U.pendingBranch)&&N&&!N.persisted;oe&&N.beforeEnter(ne),i(ne,C,L),((te=E&&E.onVnodeMounted)||oe||ie)&&Vt(()=>{te&&xn(te,O,v),oe&&N.enter(ne),ie&&fi(v,null,O,"mounted")},U)},w=(v,C,L,O,U)=>{if(L&&d(v,L),O)for(let Z=0;Z<O.length;Z++)d(v,O[Z]);if(U){let Z=U.subTree;if(C===Z){const $=U.vnode;w(v,$,$.scopeId,$.slotScopeIds,U.parent)}}},B=(v,C,L,O,U,Z,$,G,ne=0)=>{for(let te=ne;te<v.length;te++){const ye=v[te]=G?$n(v[te]):yn(v[te]);_(null,ye,C,L,O,U,Z,$,G)}},S=(v,C,L,O,U,Z,$)=>{const G=C.el=v.el;let{patchFlag:ne,dynamicChildren:te,dirs:ye}=C;ne|=v.patchFlag&16;const E=v.props||at,y=C.props||at;let N;L&&di(L,!1),(N=y.onVnodeBeforeUpdate)&&xn(N,L,C,v),ye&&fi(C,v,L,"beforeUpdate"),L&&di(L,!0);const ie=U&&C.type!=="foreignObject";if(te?T(v.dynamicChildren,te,G,L,O,ie,Z):$||K(v,C,G,null,L,O,ie,Z,!1),ne>0){if(ne&16)ee(G,C,E,y,L,O,U);else if(ne&2&&E.class!==y.class&&s(G,"class",null,y.class,U),ne&4&&s(G,"style",E.style,y.style,U),ne&8){const oe=C.dynamicProps;for(let ce=0;ce<oe.length;ce++){const xe=oe[ce],fe=E[xe],q=y[xe];(q!==fe||xe==="value")&&s(G,xe,fe,q,U,v.children,L,O,we)}}ne&1&&v.children!==C.children&&u(G,C.children)}else!$&&te==null&&ee(G,C,E,y,L,O,U);((N=y.onVnodeUpdated)||ye)&&Vt(()=>{N&&xn(N,L,C,v),ye&&fi(C,v,L,"updated")},O)},T=(v,C,L,O,U,Z,$)=>{for(let G=0;G<C.length;G++){const ne=v[G],te=C[G],ye=ne.el&&(ne.type===On||!Lr(ne,te)||ne.shapeFlag&70)?h(ne.el):L;_(ne,te,ye,null,O,U,Z,$,!0)}},ee=(v,C,L,O,U,Z,$)=>{if(L!==O){if(L!==at)for(const G in L)!Qs(G)&&!(G in O)&&s(v,G,L[G],null,$,C.children,U,Z,we);for(const G in O){if(Qs(G))continue;const ne=O[G],te=L[G];ne!==te&&G!=="value"&&s(v,G,te,ne,$,C.children,U,Z,we)}"value"in O&&s(v,"value",L.value,O.value)}},ae=(v,C,L,O,U,Z,$,G,ne)=>{const te=C.el=v?v.el:a(""),ye=C.anchor=v?v.anchor:a("");let{patchFlag:E,dynamicChildren:y,slotScopeIds:N}=C;N&&(G=G?G.concat(N):N),v==null?(i(te,L,O),i(ye,L,O),B(C.children,L,ye,U,Z,$,G,ne)):E>0&&E&64&&y&&v.dynamicChildren?(T(v.dynamicChildren,y,L,U,Z,$,G),(C.key!=null||U&&C===U.subTree)&&xf(v,C,!0)):K(v,C,L,ye,U,Z,$,G,ne)},z=(v,C,L,O,U,Z,$,G,ne)=>{C.slotScopeIds=G,v==null?C.shapeFlag&512?U.ctx.activate(C,L,O,$,ne):k(C,L,O,U,Z,$,ne):Y(v,C,ne)},k=(v,C,L,O,U,Z,$)=>{const G=v.component=Lm(v,O,U);if(cf(v)&&(G.ctx.renderer=ze),Im(G),G.asyncDep){if(U&&U.registerDep(G,J),!v.el){const ne=G.subTree=Hn(Qr);p(null,ne,C,L)}return}J(G,v,C,L,U,Z,$)},Y=(v,C,L)=>{const O=C.component=v.component;if(kp(v,C,L))if(O.asyncDep&&!O.asyncResolved){j(O,C,L);return}else O.next=C,Up(O.update),O.update();else C.el=v.el,O.vnode=C},J=(v,C,L,O,U,Z,$)=>{const G=()=>{if(v.isMounted){let{next:ye,bu:E,u:y,parent:N,vnode:ie}=v,oe=ye,ce;di(v,!1),ye?(ye.el=ie.el,j(v,ye,$)):ye=ie,E&&Ho(E),(ce=ye.props&&ye.props.onVnodeBeforeUpdate)&&xn(ce,N,ye,ie),di(v,!0);const xe=ko(v),fe=v.subTree;v.subTree=xe,_(fe,xe,h(fe.el),Ce(fe),v,U,Z),ye.el=xe.el,oe===null&&Vp(v,xe.el),y&&Vt(y,U),(ce=ye.props&&ye.props.onVnodeUpdated)&&Vt(()=>xn(ce,N,ye,ie),U)}else{let ye;const{el:E,props:y}=C,{bm:N,m:ie,parent:oe}=v,ce=eo(C);if(di(v,!1),N&&Ho(N),!ce&&(ye=y&&y.onVnodeBeforeMount)&&xn(ye,oe,C),di(v,!0),E&&Le){const xe=()=>{v.subTree=ko(v),Le(E,v.subTree,v,U,null)};ce?C.type.__asyncLoader().then(()=>!v.isUnmounted&&xe()):xe()}else{const xe=v.subTree=ko(v);_(null,xe,L,O,v,U,Z),C.el=xe.el}if(ie&&Vt(ie,U),!ce&&(ye=y&&y.onVnodeMounted)){const xe=C;Vt(()=>xn(ye,oe,xe),U)}(C.shapeFlag&256||oe&&eo(oe.vnode)&&oe.vnode.shapeFlag&256)&&v.a&&Vt(v.a,U),v.isMounted=!0,C=L=O=null}},ne=v.effect=new Ml(G,()=>Pl(te),v.scope),te=v.update=()=>ne.run();te.id=v.uid,di(v,!0),te()},j=(v,C,L)=>{C.component=v;const O=v.vnode.props;v.vnode=C,v.next=null,gm(v,C.props,O,L),xm(v,C.children,L),Sr(),_c(),Er()},K=(v,C,L,O,U,Z,$,G,ne=!1)=>{const te=v&&v.children,ye=v?v.shapeFlag:0,E=C.children,{patchFlag:y,shapeFlag:N}=C;if(y>0){if(y&128){le(te,E,L,O,U,Z,$,G,ne);return}else if(y&256){he(te,E,L,O,U,Z,$,G,ne);return}}N&8?(ye&16&&we(te,U,Z),E!==te&&u(L,E)):ye&16?N&16?le(te,E,L,O,U,Z,$,G,ne):we(te,U,Z,!0):(ye&8&&u(L,""),N&16&&B(E,L,O,U,Z,$,G,ne))},he=(v,C,L,O,U,Z,$,G,ne)=>{v=v||kr,C=C||kr;const te=v.length,ye=C.length,E=Math.min(te,ye);let y;for(y=0;y<E;y++){const N=C[y]=ne?$n(C[y]):yn(C[y]);_(v[y],N,L,null,U,Z,$,G,ne)}te>ye?we(v,U,Z,!0,!1,E):B(C,L,O,U,Z,$,G,ne,E)},le=(v,C,L,O,U,Z,$,G,ne)=>{let te=0;const ye=C.length;let E=v.length-1,y=ye-1;for(;te<=E&&te<=y;){const N=v[te],ie=C[te]=ne?$n(C[te]):yn(C[te]);if(Lr(N,ie))_(N,ie,L,null,U,Z,$,G,ne);else break;te++}for(;te<=E&&te<=y;){const N=v[E],ie=C[y]=ne?$n(C[y]):yn(C[y]);if(Lr(N,ie))_(N,ie,L,null,U,Z,$,G,ne);else break;E--,y--}if(te>E){if(te<=y){const N=y+1,ie=N<ye?C[N].el:O;for(;te<=y;)_(null,C[te]=ne?$n(C[te]):yn(C[te]),L,ie,U,Z,$,G,ne),te++}}else if(te>y)for(;te<=E;)W(v[te],U,Z,!0),te++;else{const N=te,ie=te,oe=new Map;for(te=ie;te<=y;te++){const de=C[te]=ne?$n(C[te]):yn(C[te]);de.key!=null&&oe.set(de.key,te)}let ce,xe=0;const fe=y-ie+1;let q=!1,D=0;const ue=new Array(fe);for(te=0;te<fe;te++)ue[te]=0;for(te=N;te<=E;te++){const de=v[te];if(xe>=fe){W(de,U,Z,!0);continue}let me;if(de.key!=null)me=oe.get(de.key);else for(ce=ie;ce<=y;ce++)if(ue[ce-ie]===0&&Lr(de,C[ce])){me=ce;break}me===void 0?W(de,U,Z,!0):(ue[me-ie]=te+1,me>=D?D=me:q=!0,_(de,C[me],L,null,U,Z,$,G,ne),xe++)}const Ee=q?Sm(ue):kr;for(ce=Ee.length-1,te=fe-1;te>=0;te--){const de=ie+te,me=C[de],Fe=de+1<ye?C[de+1].el:O;ue[te]===0?_(null,me,L,Fe,U,Z,$,G,ne):q&&(ce<0||te!==Ee[ce]?H(me,L,Fe,2):ce--)}}},H=(v,C,L,O,U=null)=>{const{el:Z,type:$,transition:G,children:ne,shapeFlag:te}=v;if(te&6){H(v.component.subTree,C,L,O);return}if(te&128){v.suspense.move(C,L,O);return}if(te&64){$.move(v,C,L,ze);return}if($===On){i(Z,C,L);for(let E=0;E<ne.length;E++)H(ne[E],C,L,O);i(v.anchor,C,L);return}if($===Wo){x(v,C,L);return}if(O!==2&&te&1&&G)if(O===0)G.beforeEnter(Z),i(Z,C,L),Vt(()=>G.enter(Z),U);else{const{leave:E,delayLeave:y,afterLeave:N}=G,ie=()=>i(Z,C,L),oe=()=>{E(Z,()=>{ie(),N&&N()})};y?y(Z,ie,oe):oe()}else i(Z,C,L)},W=(v,C,L,O=!1,U=!1)=>{const{type:Z,props:$,ref:G,children:ne,dynamicChildren:te,shapeFlag:ye,patchFlag:E,dirs:y}=v;if(G!=null&&Za(G,null,L,v,!0),ye&256){C.ctx.deactivate(v);return}const N=ye&1&&y,ie=!eo(v);let oe;if(ie&&(oe=$&&$.onVnodeBeforeUnmount)&&xn(oe,C,v),ye&6)Te(v.component,L,O);else{if(ye&128){v.suspense.unmount(L,O);return}N&&fi(v,null,C,"beforeUnmount"),ye&64?v.type.remove(v,C,L,U,ze,O):te&&(Z!==On||E>0&&E&64)?we(te,C,L,!1,!0):(Z===On&&E&384||!U&&ye&16)&&we(ne,C,L),O&&_e(v)}(ie&&(oe=$&&$.onVnodeUnmounted)||N)&&Vt(()=>{oe&&xn(oe,C,v),N&&fi(v,null,C,"unmounted")},L)},_e=v=>{const{type:C,el:L,anchor:O,transition:U}=v;if(C===On){Me(L,O);return}if(C===Wo){M(v);return}const Z=()=>{r(L),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(v.shapeFlag&1&&U&&!U.persisted){const{leave:$,delayLeave:G}=U,ne=()=>$(L,Z);G?G(v.el,Z,ne):ne()}else Z()},Me=(v,C)=>{let L;for(;v!==C;)L=f(v),r(v),v=L;r(C)},Te=(v,C,L)=>{const{bum:O,scope:U,update:Z,subTree:$,um:G}=v;O&&Ho(O),U.stop(),Z&&(Z.active=!1,W($,v,C,L)),G&&Vt(G,C),Vt(()=>{v.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},we=(v,C,L,O=!1,U=!1,Z=0)=>{for(let $=Z;$<v.length;$++)W(v[$],C,L,O,U)},Ce=v=>v.shapeFlag&6?Ce(v.component.subTree):v.shapeFlag&128?v.suspense.next():f(v.anchor||v.el),Pe=(v,C,L)=>{v==null?C._vnode&&W(C._vnode,null,null,!0):_(C._vnode||null,v,C,null,null,null,L),_c(),nf(),C._vnode=v},ze={p:_,um:W,m:H,r:_e,mt:k,mc:B,pc:K,pbc:T,n:Ce,o:n};let Je,Le;return e&&([Je,Le]=e(ze)),{render:Pe,hydrate:Je,createApp:dm(Pe,Je)}}function di({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function xf(n,e,t=!1){const i=n.children,r=e.children;if(He(i)&&He(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=$n(r[s]),a.el=o.el),t||xf(o,a)),a.type===bo&&(a.el=o.el)}}function Sm(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const Em=n=>n.__isTeleport,On=Symbol.for("v-fgt"),bo=Symbol.for("v-txt"),Qr=Symbol.for("v-cmt"),Wo=Symbol.for("v-stc");let nr=null,Dl=1;function Ac(n){Dl+=n}function bm(n){return n?n.__v_isVNode===!0:!1}function Lr(n,e){return n.type===e.type&&n.key===e.key}const To="__vInternal",yf=({key:n})=>n??null,no=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ct(n)||Ht(n)||We(n)?{i:En,r:n,k:e,f:!!t}:n:null);function Tm(n,e=null,t=null,i=0,r=null,s=n===On?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&yf(e),ref:e&&no(e),scopeId:of,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:En};return a?(Ul(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Ct(t)?8:16),Dl>0&&!o&&nr&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&nr.push(l),l}const Hn=wm;function wm(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===sm)&&(n=Qr),bm(n)){const a=pr(n,e,!0);return t&&Ul(a,t),Dl>0&&!s&&nr&&(a.shapeFlag&6?nr[nr.indexOf(n)]=a:nr.push(a)),a.patchFlag|=-2,a}if(Nm(n)&&(n=n.__vccOpts),e){e=Am(e);let{class:a,style:l}=e;a&&!Ct(a)&&(e.class=xl(a)),vt(l)&&($h(l)&&!He(l)&&(l=wt({},l)),e.style=vl(l))}const o=Ct(n)?1:Gp(n)?128:Em(n)?64:vt(n)?4:We(n)?2:0;return Tm(n,e,t,i,r,o,s,!0)}function Am(n){return n?$h(n)||To in n?wt({},n):n:null}function pr(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:o}=n,a=e?Rm(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&yf(a),ref:e&&e.ref?t&&r?He(r)?r.concat(no(e)):[r,no(e)]:no(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==On?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&pr(n.ssContent),ssFallback:n.ssFallback&&pr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function Mf(n=" ",e=0){return Hn(bo,null,n,e)}function yn(n){return n==null||typeof n=="boolean"?Hn(Qr):He(n)?Hn(On,null,n.slice()):typeof n=="object"?$n(n):Hn(bo,null,String(n))}function $n(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:pr(n)}function Ul(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(He(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Ul(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(To in e)?e._ctx=En:r===3&&En&&(En.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else We(e)?(e={default:e,_ctx:En},t=32):(e=String(e),i&64?(t=16,e=[Mf(e)]):t=8);n.children=e,n.shapeFlag|=t}function Rm(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=xl([e.class,i.class]));else if(r==="style")e.style=vl([e.style,i.style]);else if(_o(r)){const s=e[r],o=i[r];o&&s!==o&&!(He(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function xn(n,e,t,i=null){gn(n,e,7,[t,i])}const Cm=df();let Pm=0;function Lm(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Cm,s={uid:Pm++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Kd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mf(i,r),emitsOptions:sf(i,r),emit:null,emitted:null,propsDefaults:at,inheritAttrs:i.inheritAttrs,ctx:at,data:at,props:at,attrs:at,slots:at,refs:at,setupState:at,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Op.bind(null,s),n.ce&&n.ce(s),s}let Dt=null,Fl,Ii,Rc="__VUE_INSTANCE_SETTERS__";(Ii=za()[Rc])||(Ii=za()[Rc]=[]),Ii.push(n=>Dt=n),Fl=n=>{Ii.length>1?Ii.forEach(e=>e(n)):Ii[0](n)};const mr=n=>{Fl(n),n.scope.on()},Ei=()=>{Dt&&Dt.scope.off(),Fl(null)};function Sf(n){return n.vnode.shapeFlag&4}let es=!1;function Im(n,e=!1){es=e;const{props:t,children:i}=n.vnode,r=Sf(n);mm(n,t,r,e),vm(n,i);const s=r?Dm(n,e):void 0;return es=!1,s}function Dm(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Jh(new Proxy(n.ctx,om));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?Fm(n):null;mr(n),Sr();const s=ni(i,n,0,[n.props,r]);if(Er(),Ei(),Oh(s)){if(s.then(Ei,Ei),e)return s.then(o=>{Cc(n,o,e)}).catch(o=>{Mo(o,n,0)});n.asyncDep=s}else Cc(n,s,e)}else Ef(n,e)}function Cc(n,e,t){We(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:vt(e)&&(n.setupState=Qh(e)),Ef(n,t)}let Pc;function Ef(n,e,t){const i=n.type;if(!n.render){if(!e&&Pc&&!i.render){const r=i.template||Ll(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=wt(wt({isCustomElement:s,delimiters:a},o),l);i.render=Pc(r,c)}}n.render=i.render||mn}mr(n),Sr(),am(n),Er(),Ei()}function Um(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return Xt(n,"get","$attrs"),e[t]}}))}function Fm(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return Um(n)},slots:n.slots,emit:n.emit,expose:e}}function Nl(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Qh(Jh(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Gr)return Gr[t](n)},has(e,t){return t in e||t in Gr}}))}function Nm(n){return We(n)&&"__vccOpts"in n}const Om=(n,e)=>Pp(n,e,es),Bm=Symbol.for("v-scx"),zm=()=>to(Bm),Hm="3.3.4",km="http://www.w3.org/2000/svg",yi=typeof document<"u"?document:null,Lc=yi&&yi.createElement("template"),Vm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?yi.createElementNS(km,n):yi.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>yi.createTextNode(n),createComment:n=>yi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>yi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Lc.innerHTML=i?`<svg>${n}</svg>`:n;const a=Lc.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Gm(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function Wm(n,e,t){const i=n.style,r=Ct(t);if(t&&!r){if(e&&!Ct(e))for(const s in e)t[s]==null&&$a(i,s,"");for(const s in t)$a(i,s,t[s])}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const Ic=/\s*!important$/;function $a(n,e,t){if(He(t))t.forEach(i=>$a(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Xm(n,e);Ic.test(t)?n.setProperty(Mr(i),t.replace(Ic,""),"important"):n[i]=t}}const Dc=["Webkit","Moz","ms"],Xo={};function Xm(n,e){const t=Xo[e];if(t)return t;let i=dr(e);if(i!=="filter"&&i in n)return Xo[e]=i;i=Bh(i);for(let r=0;r<Dc.length;r++){const s=Dc[r]+i;if(s in n)return Xo[e]=s}return e}const Uc="http://www.w3.org/1999/xlink";function jm(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Uc,e.slice(6,e.length)):n.setAttributeNS(Uc,e,t);else{const s=Yd(e);t==null||s&&!zh(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function qm(n,e,t,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){n._value=t;const c=a==="OPTION"?n.getAttribute("value"):n.value,u=t??"";c!==u&&(n.value=u),t==null&&n.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=zh(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function Ym(n,e,t,i){n.addEventListener(e,t,i)}function Km(n,e,t,i){n.removeEventListener(e,t,i)}function Zm(n,e,t,i,r=null){const s=n._vei||(n._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=$m(e);if(i){const c=s[e]=eg(i,r);Ym(n,a,c,l)}else o&&(Km(n,a,o,l),s[e]=void 0)}}const Fc=/(?:Once|Passive|Capture)$/;function $m(n){let e;if(Fc.test(n)){e={};let i;for(;i=n.match(Fc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Mr(n.slice(2)),e]}let jo=0;const Jm=Promise.resolve(),Qm=()=>jo||(Jm.then(()=>jo=0),jo=Date.now());function eg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;gn(tg(i,t.value),e,5,[i])};return t.value=n,t.attached=Qm(),t}function tg(n,e){if(He(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Nc=/^on[a-z]/,ng=(n,e,t,i,r=!1,s,o,a,l)=>{e==="class"?Gm(n,i,r):e==="style"?Wm(n,t,i):_o(e)?pl(e)||Zm(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ig(n,e,i,r))?qm(n,e,i,s,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),jm(n,e,i,r))};function ig(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&Nc.test(e)&&We(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||Nc.test(e)&&Ct(t)?!1:e in n}const rg=wt({patchProp:ng},Vm);let Oc;function sg(){return Oc||(Oc=ym(rg))}const og=(...n)=>{const e=sg().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=ag(i);if(!r)return;const s=e._component;!We(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function ag(n){return Ct(n)?document.querySelector(n):n}const lg="_draw_1eeqt_1";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ol="156",Di={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ui={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cg=0,Bc=1,ug=2,bf=1,hg=2,Fn=3,ai=0,Wt=1,Zt=2,ii=0,cr=1,zc=2,Hc=3,kc=4,fg=5,Qi=100,dg=101,pg=102,Vc=103,Gc=104,mg=200,gg=201,_g=202,vg=203,Tf=204,wf=205,xg=206,yg=207,Mg=208,Sg=209,Eg=210,bg=0,Tg=1,wg=2,Ja=3,Ag=4,Rg=5,Cg=6,Pg=7,wo=0,Lg=1,Ig=2,ri=0,Dg=1,Ug=2,Fg=3,Ng=4,Og=5,Af=300,gr=301,_r=302,uo=303,Qa=304,Ao=306,ts=1e3,$t=1001,el=1002,At=1003,Wc=1004,qo=1005,en=1006,Bg=1007,ns=1008,si=1009,zg=1010,Hg=1011,Bl=1012,Rf=1013,Qn=1014,Bn=1015,is=1016,Cf=1017,Pf=1018,bi=1020,kg=1021,nn=1023,Vg=1024,Gg=1025,Ti=1026,vr=1027,Wg=1028,Lf=1029,Xg=1030,If=1031,Df=1033,Yo=33776,Ko=33777,Zo=33778,$o=33779,Xc=35840,jc=35841,qc=35842,Yc=35843,jg=36196,Kc=37492,Zc=37496,$c=37808,Jc=37809,Qc=37810,eu=37811,tu=37812,nu=37813,iu=37814,ru=37815,su=37816,ou=37817,au=37818,lu=37819,cu=37820,uu=37821,Jo=36492,hu=36494,fu=36495,qg=36283,du=36284,pu=36285,mu=36286,ho=2300,fo=2301,Qo=2302,gu=2400,_u=2401,vu=2402,Yg=2500,Uf=3e3,wi=3001,Kg=3200,Zg=3201,zl=0,$g=1,Ai="",nt="srgb",bn="srgb-linear",Ro="display-p3",ea=7680,Jg=519,Qg=512,e_=513,t_=514,n_=515,i_=516,r_=517,s_=518,o_=519,xu=35044,yu="300 es",tl=1035,zn=2e3,po=2001;class Pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Mu=1234567;const ur=Math.PI/180,xr=180/Math.PI;function Gn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]).toLowerCase()}function bt(n,e,t){return Math.max(e,Math.min(t,n))}function Hl(n,e){return(n%e+e)%e}function a_(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function l_(n,e,t){return n!==e?(t-n)/(e-n):0}function Wr(n,e,t){return(1-t)*n+t*e}function c_(n,e,t,i){return Wr(n,e,1-Math.exp(-t*i))}function u_(n,e=1){return e-Math.abs(Hl(n,e*2)-e)}function h_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function f_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function d_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function p_(n,e){return n+Math.random()*(e-n)}function m_(n){return n*(.5-Math.random())}function g_(n){n!==void 0&&(Mu=n);let e=Mu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function __(n){return n*ur}function v_(n){return n*xr}function nl(n){return(n&n-1)===0&&n!==0}function Ff(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function mo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function x_(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),f=o((e-i)/2),d=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function er(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const pn={DEG2RAD:ur,RAD2DEG:xr,generateUUID:Gn,clamp:bt,euclideanModulo:Hl,mapLinear:a_,inverseLerp:l_,lerp:Wr,damp:c_,pingpong:u_,smoothstep:h_,smootherstep:f_,randInt:d_,randFloat:p_,randFloatSpread:m_,seededRandom:g_,degToRad:__,radToDeg:v_,isPowerOfTwo:nl,ceilPowerOfTwo:Ff,floorPowerOfTwo:mo,setQuaternionFromProperEuler:x_,normalize:Ot,denormalize:er};class ge{constructor(e=0,t=0){ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,r,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],_=r[0],m=r[3],p=r[6],b=r[1],x=r[4],M=r[7],A=r[2],P=r[5],w=r[8];return s[0]=o*_+a*b+l*A,s[3]=o*m+a*x+l*P,s[6]=o*p+a*M+l*w,s[1]=c*_+u*b+h*A,s[4]=c*m+u*x+h*P,s[7]=c*p+u*M+h*w,s[2]=f*_+d*b+g*A,s[5]=f*m+d*x+g*P,s[8]=f*p+d*M+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,g=t*h+i*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ta.makeScale(e,t)),this}rotate(e){return this.premultiply(ta.makeRotation(-e)),this}translate(e,t){return this.premultiply(ta.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ta=new Ge;function Nf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function rs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function y_(){const n=rs("canvas");return n.style.display="block",n}const Su={};function Xr(n){n in Su||(Su[n]=!0,console.warn(n))}function hr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function na(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const M_=new Ge().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),S_=new Ge().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function E_(n){return n.convertSRGBToLinear().applyMatrix3(S_)}function b_(n){return n.applyMatrix3(M_).convertLinearToSRGB()}const T_={[bn]:n=>n,[nt]:n=>n.convertSRGBToLinear(),[Ro]:E_},w_={[bn]:n=>n,[nt]:n=>n.convertLinearToSRGB(),[Ro]:b_},an={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return bn},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=T_[e],r=w_[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let Fi;class Of{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fi===void 0&&(Fi=rs("canvas")),Fi.width=e.width,Fi.height=e.height;const i=Fi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Fi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=rs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=hr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(hr(t[i]/255)*255):t[i]=hr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let A_=0;class Bf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=Gn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ia(r[o].image)):s.push(ia(r[o]))}else s=ia(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ia(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Of.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let R_=0;class Rt extends Pi{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,i=$t,r=$t,s=en,o=ns,a=nn,l=si,c=Rt.DEFAULT_ANISOTROPY,u=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=Gn(),this.name="",this.source=new Bf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Xr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===wi?nt:Ai),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Af)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ts:e.x=e.x-Math.floor(e.x);break;case $t:e.x=e.x<0?0:1;break;case el:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ts:e.y=e.y-Math.floor(e.y);break;case $t:e.y=e.y<0?0:1;break;case el:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Xr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===nt?wi:Uf}set encoding(e){Xr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===wi?nt:Ai}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=Af;Rt.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,t=0,i=0,r=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,M=(d+1)/2,A=(p+1)/2,P=(u+f)/4,w=(h+_)/4,B=(g+m)/4;return x>M&&x>A?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=P/i,s=w/i):M>A?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=P/r,s=B/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=w/s,r=B/s),this.set(i,r,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-_)/b,this.z=(f-u)/b,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class C_ extends Pi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Xr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===wi?nt:Ai),this.texture=new Rt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:en,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Bf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends C_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class zf extends Rt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class P_ extends Rt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-a;const p=l*f+c*d+u*g+h*_,b=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const A=Math.sqrt(x),P=Math.atan2(A,p*b);m=Math.sin(m*P)/A,a=Math.sin(a*P)/A}const M=a*b;if(l=l*m+f*M,c=c*m+d*M,u=u*m+g*M,h=h*m+_*M,m===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Eu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Eu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*i,u=l*i+a*t-s*r,h=l*r+s*i-o*t,f=-s*t-o*i-a*r;return this.x=c*l+f*-s+u*-a-h*-o,this.y=u*l+f*-o+h*-s-c*-a,this.z=h*l+f*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ra.copy(this).projectOnVector(e),this.sub(ra)}reflect(e){return this.sub(ra.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ra=new I,Eu=new sn;class br{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ni.copy(e.boundingBox),Ni.applyMatrix4(e.matrixWorld),this.union(Ni);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)Cn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Cn)}else r.boundingBox===null&&r.computeBoundingBox(),Ni.copy(r.boundingBox),Ni.applyMatrix4(e.matrixWorld),this.union(Ni)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ir),Ms.subVectors(this.max,Ir),Oi.subVectors(e.a,Ir),Bi.subVectors(e.b,Ir),zi.subVectors(e.c,Ir),Xn.subVectors(Bi,Oi),jn.subVectors(zi,Bi),pi.subVectors(Oi,zi);let t=[0,-Xn.z,Xn.y,0,-jn.z,jn.y,0,-pi.z,pi.y,Xn.z,0,-Xn.x,jn.z,0,-jn.x,pi.z,0,-pi.x,-Xn.y,Xn.x,0,-jn.y,jn.x,0,-pi.y,pi.x,0];return!sa(t,Oi,Bi,zi,Ms)||(t=[1,0,0,0,1,0,0,0,1],!sa(t,Oi,Bi,zi,Ms))?!1:(Ss.crossVectors(Xn,jn),t=[Ss.x,Ss.y,Ss.z],sa(t,Oi,Bi,zi,Ms))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Rn=[new I,new I,new I,new I,new I,new I,new I,new I],Cn=new I,Ni=new br,Oi=new I,Bi=new I,zi=new I,Xn=new I,jn=new I,pi=new I,Ir=new I,Ms=new I,Ss=new I,mi=new I;function sa(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){mi.fromArray(n,s);const a=r.x*Math.abs(mi.x)+r.y*Math.abs(mi.y)+r.z*Math.abs(mi.z),l=e.dot(mi),c=t.dot(mi),u=i.dot(mi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const L_=new br,Dr=new I,oa=new I;class Li{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):L_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Dr.subVectors(e,this.center);const t=Dr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Dr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Dr.copy(e.center).add(oa)),this.expandByPoint(Dr.copy(e.center).sub(oa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pn=new I,aa=new I,Es=new I,qn=new I,la=new I,bs=new I,ca=new I;class Tr{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pn.copy(this.origin).addScaledVector(this.direction,t),Pn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){aa.copy(e).add(t).multiplyScalar(.5),Es.copy(t).sub(e).normalize(),qn.copy(this.origin).sub(aa);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Es),a=qn.dot(this.direction),l=-qn.dot(Es),c=qn.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(aa).addScaledVector(Es,f),d}intersectSphere(e,t){Pn.subVectors(e.center,this.origin);const i=Pn.dot(this.direction),r=Pn.dot(Pn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,t,i,r,s){la.subVectors(t,e),bs.subVectors(i,e),ca.crossVectors(la,bs);let o=this.direction.dot(ca),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qn.subVectors(this.origin,e);const l=a*this.direction.dot(bs.crossVectors(qn,bs));if(l<0)return null;const c=a*this.direction.dot(la.cross(qn));if(c<0||l+c>o)return null;const u=-a*qn.dot(ca);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class De{constructor(e,t,i,r,s,o,a,l,c,u,h,f,d,g,_,m){De.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,h,f,d,g,_,m)}set(e,t,i,r,s,o,a,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new De().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Hi.setFromMatrixColumn(e,0).length(),s=1/Hi.setFromMatrixColumn(e,1).length(),o=1/Hi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(I_,e,D_)}lookAt(e,t,i){const r=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Yn.crossVectors(i,Yt),Yn.lengthSq()===0&&(Math.abs(i.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Yn.crossVectors(i,Yt)),Yn.normalize(),Ts.crossVectors(Yt,Yn),r[0]=Yn.x,r[4]=Ts.x,r[8]=Yt.x,r[1]=Yn.y,r[5]=Ts.y,r[9]=Yt.y,r[2]=Yn.z,r[6]=Ts.z,r[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],b=i[3],x=i[7],M=i[11],A=i[15],P=r[0],w=r[4],B=r[8],S=r[12],T=r[1],ee=r[5],ae=r[9],z=r[13],k=r[2],Y=r[6],J=r[10],j=r[14],K=r[3],he=r[7],le=r[11],H=r[15];return s[0]=o*P+a*T+l*k+c*K,s[4]=o*w+a*ee+l*Y+c*he,s[8]=o*B+a*ae+l*J+c*le,s[12]=o*S+a*z+l*j+c*H,s[1]=u*P+h*T+f*k+d*K,s[5]=u*w+h*ee+f*Y+d*he,s[9]=u*B+h*ae+f*J+d*le,s[13]=u*S+h*z+f*j+d*H,s[2]=g*P+_*T+m*k+p*K,s[6]=g*w+_*ee+m*Y+p*he,s[10]=g*B+_*ae+m*J+p*le,s[14]=g*S+_*z+m*j+p*H,s[3]=b*P+x*T+M*k+A*K,s[7]=b*w+x*ee+M*Y+A*he,s[11]=b*B+x*ae+M*J+A*le,s[15]=b*S+x*z+M*j+A*H,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*d-i*l*d)+_*(+t*l*d-t*c*f+s*o*f-r*o*d+r*c*u-s*l*u)+m*(+t*c*h-t*a*d-s*o*h+i*o*d+s*a*u-i*c*u)+p*(-r*a*u-t*l*h+t*a*f+r*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],b=h*m*c-_*f*c+_*l*d-a*m*d-h*l*p+a*f*p,x=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,M=u*_*c-g*h*c+g*a*d-o*_*d-u*a*p+o*h*p,A=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,P=t*b+i*x+r*M+s*A;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/P;return e[0]=b*w,e[1]=(_*f*s-h*m*s-_*r*d+i*m*d+h*r*p-i*f*p)*w,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*p+i*l*p)*w,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*d-i*l*d)*w,e[4]=x*w,e[5]=(u*m*s-g*f*s+g*r*d-t*m*d-u*r*p+t*f*p)*w,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*p-t*l*p)*w,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*d+t*l*d)*w,e[8]=M*w,e[9]=(g*h*s-u*_*s-g*i*d+t*_*d+u*i*p-t*h*p)*w,e[10]=(o*_*s-g*a*s+g*i*c-t*_*c-o*i*p+t*a*p)*w,e[11]=(u*a*s-o*h*s-u*i*c+t*h*c+o*i*d-t*a*d)*w,e[12]=A*w,e[13]=(u*_*r-g*h*r+g*i*f-t*_*f-u*i*m+t*h*m)*w,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*m-t*a*m)*w,e[15]=(o*h*r-u*a*r+u*i*l-t*h*l-o*i*f+t*a*f)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,g=s*h,_=o*u,m=o*h,p=a*h,b=l*c,x=l*u,M=l*h,A=i.x,P=i.y,w=i.z;return r[0]=(1-(_+p))*A,r[1]=(d+M)*A,r[2]=(g-x)*A,r[3]=0,r[4]=(d-M)*P,r[5]=(1-(f+p))*P,r[6]=(m+b)*P,r[7]=0,r[8]=(g+x)*w,r[9]=(m-b)*w,r[10]=(1-(f+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Hi.set(r[0],r[1],r[2]).length();const o=Hi.set(r[4],r[5],r[6]).length(),a=Hi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ln.copy(this);const c=1/s,u=1/o,h=1/a;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=u,ln.elements[5]*=u,ln.elements[6]*=u,ln.elements[8]*=h,ln.elements[9]*=h,ln.elements[10]*=h,t.setFromRotationMatrix(ln),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=zn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let d,g;if(a===zn)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===po)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=zn){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(o-s),f=(t+e)*c,d=(i+r)*u;let g,_;if(a===zn)g=(o+s)*h,_=-2*h;else if(a===po)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Hi=new I,ln=new De,I_=new I(0,0,0),D_=new I(1,1,1),Yn=new I,Ts=new I,Yt=new I,bu=new De,Tu=new sn;class on{constructor(e=0,t=0,i=0,r=on.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(bt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return bu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tu.setFromEuler(this),this.setFromQuaternion(Tu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}on.DEFAULT_ORDER="XYZ";class kl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let U_=0;const wu=new I,ki=new sn,Ln=new De,ws=new I,Ur=new I,F_=new I,N_=new sn,Au=new I(1,0,0),Ru=new I(0,1,0),Cu=new I(0,0,1),O_={type:"added"},B_={type:"removed"};class lt extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=lt.DEFAULT_UP.clone();const e=new I,t=new on,i=new sn,r=new I(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new De},normalMatrix:{value:new Ge}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new kl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.multiply(ki),this}rotateOnWorldAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.premultiply(ki),this}rotateX(e){return this.rotateOnAxis(Au,e)}rotateY(e){return this.rotateOnAxis(Ru,e)}rotateZ(e){return this.rotateOnAxis(Cu,e)}translateOnAxis(e,t){return wu.copy(e).applyQuaternion(this.quaternion),this.position.add(wu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Au,e)}translateY(e){return this.translateOnAxis(Ru,e)}translateZ(e){return this.translateOnAxis(Cu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ws.copy(e):ws.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Ur,ws,this.up):Ln.lookAt(ws,Ur,this.up),this.quaternion.setFromRotationMatrix(Ln),r&&(Ln.extractRotation(r.matrixWorld),ki.setFromRotationMatrix(Ln),this.quaternion.premultiply(ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(O_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(B_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,e,F_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,N_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}lt.DEFAULT_UP=new I(0,1,0);lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new I,In=new I,ua=new I,Dn=new I,Vi=new I,Gi=new I,Pu=new I,ha=new I,fa=new I,da=new I;let As=!1;class tn{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),cn.subVectors(e,t),r.cross(cn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){cn.subVectors(r,t),In.subVectors(i,t),ua.subVectors(e,t);const o=cn.dot(cn),a=cn.dot(In),l=cn.dot(ua),c=In.dot(In),u=In.dot(ua),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Dn),Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getUV(e,t,i,r,s,o,a,l){return As===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),As=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Dn),l.setScalar(0),l.addScaledVector(s,Dn.x),l.addScaledVector(o,Dn.y),l.addScaledVector(a,Dn.z),l}static isFrontFacing(e,t,i,r){return cn.subVectors(i,t),In.subVectors(e,t),cn.cross(In).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),cn.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return As===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),As=!0),tn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return tn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Vi.subVectors(r,i),Gi.subVectors(s,i),ha.subVectors(e,i);const l=Vi.dot(ha),c=Gi.dot(ha);if(l<=0&&c<=0)return t.copy(i);fa.subVectors(e,r);const u=Vi.dot(fa),h=Gi.dot(fa);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Vi,o);da.subVectors(e,s);const d=Vi.dot(da),g=Gi.dot(da);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Gi,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Pu.subVectors(s,r),a=(h-u)/(h-u+(d-g)),t.copy(r).addScaledVector(Pu,a);const p=1/(m+_+f);return o=_*p,a=f*p,t.copy(i).addScaledVector(Vi,o).addScaledVector(Gi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let z_=0;class ci extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=cr,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tf,this.blendDst=wf,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ja,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ea,this.stencilZFail=ea,this.stencilZPass=ea,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==cr&&(i.blending=this.blending),this.side!==ai&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Hf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},un={h:0,s:0,l:0},Rs={h:0,s:0,l:0};function pa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Re{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,an.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=an.workingColorSpace){return this.r=e,this.g=t,this.b=i,an.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=an.workingColorSpace){if(e=Hl(e,1),t=bt(t,0,1),i=bt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=pa(o,s,e+1/3),this.g=pa(o,s,e),this.b=pa(o,s,e-1/3)}return an.toWorkingColorSpace(this,r),this}setStyle(e,t=nt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nt){const i=Hf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}copyLinearToSRGB(e){return this.r=na(e.r),this.g=na(e.g),this.b=na(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nt){return an.fromWorkingColorSpace(Lt.copy(this),e),Math.round(bt(Lt.r*255,0,255))*65536+Math.round(bt(Lt.g*255,0,255))*256+Math.round(bt(Lt.b*255,0,255))}getHexString(e=nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=an.workingColorSpace){an.fromWorkingColorSpace(Lt.copy(this),t);const i=Lt.r,r=Lt.g,s=Lt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=an.workingColorSpace){return an.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=nt){an.fromWorkingColorSpace(Lt.copy(this),e);const t=Lt.r,i=Lt.g,r=Lt.b;return e!==nt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(un),un.h+=e,un.s+=t,un.l+=i,this.setHSL(un.h,un.s,un.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(un),e.getHSL(Rs);const i=Wr(un.h,Rs.h,t),r=Wr(un.s,Rs.s,t),s=Wr(un.l,Rs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new Re;Re.NAMES=Hf;class kf extends ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new I,Cs=new ge;class Gt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=xu,this.updateRange={offset:0,count:-1},this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Cs.fromBufferAttribute(this,t),Cs.applyMatrix3(e),this.setXY(t,Cs.x,Cs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=er(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=er(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=er(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=er(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=er(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Vl extends Gt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Vf extends Gt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class st extends Gt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let H_=0;const Qt=new De,ma=new lt,Wi=new I,Kt=new br,Fr=new br,Et=new I;class yt extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nf(e)?Vf:Vl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,i){return Qt.makeTranslation(e,t,i),this.applyMatrix4(Qt),this}scale(e,t,i){return Qt.makeScale(e,t,i),this.applyMatrix4(Qt),this}lookAt(e){return ma.lookAt(e),ma.updateMatrix(),this.applyMatrix4(ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new st(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Kt.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Fr.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(Kt.min,Fr.min),Kt.expandByPoint(Et),Et.addVectors(Kt.max,Fr.max),Kt.expandByPoint(Et)):(Kt.expandByPoint(Fr.min),Kt.expandByPoint(Fr.max))}Kt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Et.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Et));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Et.fromBufferAttribute(a,c),l&&(Wi.fromBufferAttribute(e,c),Et.add(Wi)),r=Math.max(r,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<a;T++)c[T]=new I,u[T]=new I;const h=new I,f=new I,d=new I,g=new ge,_=new ge,m=new ge,p=new I,b=new I;function x(T,ee,ae){h.fromArray(r,T*3),f.fromArray(r,ee*3),d.fromArray(r,ae*3),g.fromArray(o,T*2),_.fromArray(o,ee*2),m.fromArray(o,ae*2),f.sub(h),d.sub(h),_.sub(g),m.sub(g);const z=1/(_.x*m.y-m.x*_.y);isFinite(z)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-_.y).multiplyScalar(z),b.copy(d).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(z),c[T].add(p),c[ee].add(p),c[ae].add(p),u[T].add(b),u[ee].add(b),u[ae].add(b))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let T=0,ee=M.length;T<ee;++T){const ae=M[T],z=ae.start,k=ae.count;for(let Y=z,J=z+k;Y<J;Y+=3)x(i[Y+0],i[Y+1],i[Y+2])}const A=new I,P=new I,w=new I,B=new I;function S(T){w.fromArray(s,T*3),B.copy(w);const ee=c[T];A.copy(ee),A.sub(w.multiplyScalar(w.dot(ee))).normalize(),P.crossVectors(B,ee);const z=P.dot(u[T])<0?-1:1;l[T*4]=A.x,l[T*4+1]=A.y,l[T*4+2]=A.z,l[T*4+3]=z}for(let T=0,ee=M.length;T<ee;++T){const ae=M[T],z=ae.start,k=ae.count;for(let Y=z,J=z+k;Y<J;Y+=3)S(i[Y+0]),S(i[Y+1]),S(i[Y+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Gt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lu=new De,gi=new Tr,Ps=new Li,Iu=new I,Xi=new I,ji=new I,qi=new I,ga=new I,Ls=new I,Is=new ge,Ds=new ge,Us=new ge,Du=new I,Uu=new I,Fu=new I,Fs=new I,Ns=new I;class Tt extends lt{constructor(e=new yt,t=new kf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ls.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(ga.fromBufferAttribute(h,e),o?Ls.addScaledVector(ga,u):Ls.addScaledVector(ga.sub(t),u))}t.add(Ls)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ps.copy(i.boundingSphere),Ps.applyMatrix4(s),gi.copy(e.ray).recast(e.near),!(Ps.containsPoint(gi.origin)===!1&&(gi.intersectSphere(Ps,Iu)===null||gi.origin.distanceToSquared(Iu)>(e.far-e.near)**2))&&(Lu.copy(s).invert(),gi.copy(e.ray).applyMatrix4(Lu),!(i.boundingBox!==null&&gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,gi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],b=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=b,A=x;M<A;M+=3){const P=a.getX(M),w=a.getX(M+1),B=a.getX(M+2);r=Os(this,p,e,i,c,u,h,P,w,B),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const b=a.getX(m),x=a.getX(m+1),M=a.getX(m+2);r=Os(this,o,e,i,c,u,h,b,x,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],b=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=b,A=x;M<A;M+=3){const P=M,w=M+1,B=M+2;r=Os(this,p,e,i,c,u,h,P,w,B),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const b=m,x=m+1,M=m+2;r=Os(this,o,e,i,c,u,h,b,x,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function k_(n,e,t,i,r,s,o,a){let l;if(e.side===Wt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ai,a),l===null)return null;Ns.copy(a),Ns.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ns);return c<t.near||c>t.far?null:{distance:c,point:Ns.clone(),object:n}}function Os(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Xi),n.getVertexPosition(l,ji),n.getVertexPosition(c,qi);const u=k_(n,e,t,i,Xi,ji,qi,Fs);if(u){r&&(Is.fromBufferAttribute(r,a),Ds.fromBufferAttribute(r,l),Us.fromBufferAttribute(r,c),u.uv=tn.getInterpolation(Fs,Xi,ji,qi,Is,Ds,Us,new ge)),s&&(Is.fromBufferAttribute(s,a),Ds.fromBufferAttribute(s,l),Us.fromBufferAttribute(s,c),u.uv1=tn.getInterpolation(Fs,Xi,ji,qi,Is,Ds,Us,new ge),u.uv2=u.uv1),o&&(Du.fromBufferAttribute(o,a),Uu.fromBufferAttribute(o,l),Fu.fromBufferAttribute(o,c),u.normal=tn.getInterpolation(Fs,Xi,ji,qi,Du,Uu,Fu,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new I,materialIndex:0};tn.getNormal(Xi,ji,qi,h.normal),u.face=h}return u}class us extends yt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(u,3)),this.setAttribute("uv",new st(h,2));function g(_,m,p,b,x,M,A,P,w,B,S){const T=M/w,ee=A/B,ae=M/2,z=A/2,k=P/2,Y=w+1,J=B+1;let j=0,K=0;const he=new I;for(let le=0;le<J;le++){const H=le*ee-z;for(let W=0;W<Y;W++){const _e=W*T-ae;he[_]=_e*b,he[m]=H*x,he[p]=k,c.push(he.x,he.y,he.z),he[_]=0,he[m]=0,he[p]=P>0?1:-1,u.push(he.x,he.y,he.z),h.push(W/w),h.push(1-le/B),j+=1}}for(let le=0;le<B;le++)for(let H=0;H<w;H++){const W=f+H+Y*le,_e=f+H+Y*(le+1),Me=f+(H+1)+Y*(le+1),Te=f+(H+1)+Y*le;l.push(W,_e,Te),l.push(_e,Me,Te),K+=6}a.addGroup(d,K,S),d+=K,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new us(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Bt(n){const e={};for(let t=0;t<n.length;t++){const i=yr(n[t]);for(const r in i)e[r]=i[r]}return e}function V_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Gf(n){return n.getRenderTarget()===null?n.outputColorSpace:bn}const G_={clone:yr,merge:Bt};var W_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,X_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _t extends ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=W_,this.fragmentShader=X_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yr(e.uniforms),this.uniformsGroups=V_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Wf extends lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=zn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class zt extends Wf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ur*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xr*2*Math.atan(Math.tan(ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ur*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Yi=-90,Ki=1;class j_ extends lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new zt(Yi,Ki,e,t);r.layers=this.layers,this.add(r);const s=new zt(Yi,Ki,e,t);s.layers=this.layers,this.add(s);const o=new zt(Yi,Ki,e,t);o.layers=this.layers,this.add(o);const a=new zt(Yi,Ki,e,t);a.layers=this.layers,this.add(a);const l=new zt(Yi,Ki,e,t);l.layers=this.layers,this.add(l);const c=new zt(Yi,Ki,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===zn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===po)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.xr.enabled;e.xr.enabled=!1;const f=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=f,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class Xf extends Rt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:gr,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class q_ extends Ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Xr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===wi?nt:Ai),this.texture=new Xf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:en}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new us(5,5,5),s=new _t({name:"CubemapFromEquirect",uniforms:yr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wt,blending:ii});s.uniforms.tEquirect.value=t;const o=new Tt(r,s),a=t.minFilter;return t.minFilter===ns&&(t.minFilter=en),new j_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const _a=new I,Y_=new I,K_=new Ge;class Jn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=_a.subVectors(i,t).cross(Y_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(_a),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||K_.getNormalMatrix(e),r=this.coplanarPoint(_a).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new Li,Bs=new I;class Gl{constructor(e=new Jn,t=new Jn,i=new Jn,r=new Jn,s=new Jn,o=new Jn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=zn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],d=r[8],g=r[9],_=r[10],m=r[11],p=r[12],b=r[13],x=r[14],M=r[15];if(i[0].setComponents(l-s,f-c,m-d,M-p).normalize(),i[1].setComponents(l+s,f+c,m+d,M+p).normalize(),i[2].setComponents(l+o,f+u,m+g,M+b).normalize(),i[3].setComponents(l-o,f-u,m-g,M-b).normalize(),i[4].setComponents(l-a,f-h,m-_,M-x).normalize(),t===zn)i[5].setComponents(l+a,f+h,m+_,M+x).normalize();else if(t===po)i[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(e){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(e.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Bs.x=r.normal.x>0?e.max.x:e.min.x,Bs.y=r.normal.y>0?e.max.y:e.min.y,Bs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Bs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jf(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Z_(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const h=c.array,f=c.usage,d=n.createBuffer();n.bindBuffer(u,d),n.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=n.SHORT;else if(h instanceof Uint32Array)g=n.UNSIGNED_INT;else if(h instanceof Int32Array)g=n.INT;else if(h instanceof Int8Array)g=n.BYTE;else if(h instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,d=u.updateRange;n.bindBuffer(h,c),d.count===-1?n.bufferSubData(h,0,f):(t?n.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):n.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h===void 0?i.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class Co extends yt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const b=p*f-o;for(let x=0;x<c;x++){const M=x*h-s;g.push(M,-b,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const x=b+c*p,M=b+c*(p+1),A=b+1+c*(p+1),P=b+1+c*p;d.push(x,M,P),d.push(M,A,P)}this.setIndex(d),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(_,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Co(e.width,e.height,e.widthSegments,e.heightSegments)}}var $_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,J_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Q_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ev=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,nv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ov=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,av=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,uv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,hv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_v=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yv=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Mv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ev=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tv="gl_FragColor = linearToOutputTexel( gl_FragColor );",wv=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Av=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Rv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Iv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ov=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Bv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Vv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Gv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Yv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Kv=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$v=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Jv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,t0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,n0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,i0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,s0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,a0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,l0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,c0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,u0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,h0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,f0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,d0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,p0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,v0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,x0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,M0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,S0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,E0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,b0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,T0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,w0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,A0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,R0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,C0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,P0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,L0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,I0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,D0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,U0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,F0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,N0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,O0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,B0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,z0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,H0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,k0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,V0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,G0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,W0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,X0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,q0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Y0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ex=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,nx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ix=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ox=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ax=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lx=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ux=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,px=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_x=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ex=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bx=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ax=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:$_,alphahash_pars_fragment:J_,alphamap_fragment:Q_,alphamap_pars_fragment:ev,alphatest_fragment:tv,alphatest_pars_fragment:nv,aomap_fragment:iv,aomap_pars_fragment:rv,begin_vertex:sv,beginnormal_vertex:ov,bsdfs:av,iridescence_fragment:lv,bumpmap_pars_fragment:cv,clipping_planes_fragment:uv,clipping_planes_pars_fragment:hv,clipping_planes_pars_vertex:fv,clipping_planes_vertex:dv,color_fragment:pv,color_pars_fragment:mv,color_pars_vertex:gv,color_vertex:_v,common:vv,cube_uv_reflection_fragment:xv,defaultnormal_vertex:yv,displacementmap_pars_vertex:Mv,displacementmap_vertex:Sv,emissivemap_fragment:Ev,emissivemap_pars_fragment:bv,colorspace_fragment:Tv,colorspace_pars_fragment:wv,envmap_fragment:Av,envmap_common_pars_fragment:Rv,envmap_pars_fragment:Cv,envmap_pars_vertex:Pv,envmap_physical_pars_fragment:Vv,envmap_vertex:Lv,fog_vertex:Iv,fog_pars_vertex:Dv,fog_fragment:Uv,fog_pars_fragment:Fv,gradientmap_pars_fragment:Nv,lightmap_fragment:Ov,lightmap_pars_fragment:Bv,lights_lambert_fragment:zv,lights_lambert_pars_fragment:Hv,lights_pars_begin:kv,lights_toon_fragment:Gv,lights_toon_pars_fragment:Wv,lights_phong_fragment:Xv,lights_phong_pars_fragment:jv,lights_physical_fragment:qv,lights_physical_pars_fragment:Yv,lights_fragment_begin:Kv,lights_fragment_maps:Zv,lights_fragment_end:$v,logdepthbuf_fragment:Jv,logdepthbuf_pars_fragment:Qv,logdepthbuf_pars_vertex:e0,logdepthbuf_vertex:t0,map_fragment:n0,map_pars_fragment:i0,map_particle_fragment:r0,map_particle_pars_fragment:s0,metalnessmap_fragment:o0,metalnessmap_pars_fragment:a0,morphcolor_vertex:l0,morphnormal_vertex:c0,morphtarget_pars_vertex:u0,morphtarget_vertex:h0,normal_fragment_begin:f0,normal_fragment_maps:d0,normal_pars_fragment:p0,normal_pars_vertex:m0,normal_vertex:g0,normalmap_pars_fragment:_0,clearcoat_normal_fragment_begin:v0,clearcoat_normal_fragment_maps:x0,clearcoat_pars_fragment:y0,iridescence_pars_fragment:M0,opaque_fragment:S0,packing:E0,premultiplied_alpha_fragment:b0,project_vertex:T0,dithering_fragment:w0,dithering_pars_fragment:A0,roughnessmap_fragment:R0,roughnessmap_pars_fragment:C0,shadowmap_pars_fragment:P0,shadowmap_pars_vertex:L0,shadowmap_vertex:I0,shadowmask_pars_fragment:D0,skinbase_vertex:U0,skinning_pars_vertex:F0,skinning_vertex:N0,skinnormal_vertex:O0,specularmap_fragment:B0,specularmap_pars_fragment:z0,tonemapping_fragment:H0,tonemapping_pars_fragment:k0,transmission_fragment:V0,transmission_pars_fragment:G0,uv_pars_fragment:W0,uv_pars_vertex:X0,uv_vertex:j0,worldpos_vertex:q0,background_vert:Y0,background_frag:K0,backgroundCube_vert:Z0,backgroundCube_frag:$0,cube_vert:J0,cube_frag:Q0,depth_vert:ex,depth_frag:tx,distanceRGBA_vert:nx,distanceRGBA_frag:ix,equirect_vert:rx,equirect_frag:sx,linedashed_vert:ox,linedashed_frag:ax,meshbasic_vert:lx,meshbasic_frag:cx,meshlambert_vert:ux,meshlambert_frag:hx,meshmatcap_vert:fx,meshmatcap_frag:dx,meshnormal_vert:px,meshnormal_frag:mx,meshphong_vert:gx,meshphong_frag:_x,meshphysical_vert:vx,meshphysical_frag:xx,meshtoon_vert:yx,meshtoon_frag:Mx,points_vert:Sx,points_frag:Ex,shadow_vert:bx,shadow_frag:Tx,sprite_vert:wx,sprite_frag:Ax},Se={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Mn={basic:{uniforms:Bt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Bt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Re(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Bt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Bt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Bt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Re(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Bt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Bt([Se.points,Se.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Bt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Bt([Se.common,Se.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Bt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Bt([Se.sprite,Se.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Bt([Se.common,Se.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Bt([Se.lights,Se.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Mn.physical={uniforms:Bt([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const zs={r:0,b:0,g:0};function Rx(n,e,t,i,r,s,o){const a=new Re(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(m,p){let b=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),b=!0);const M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ao)?(u===void 0&&(u=new Tt(new us(1,1,1),new _t({name:"BackgroundCubeMaterial",uniforms:yr(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,P,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=x.colorSpace!==nt,(h!==x||f!==x.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,d=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Tt(new Co(2,2),new _t({name:"BackgroundMaterial",uniforms:yr(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=x.colorSpace!==nt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,d=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(zs,Gf(n)),i.buffers.color.setClear(zs.r,zs.g,zs.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function Cx(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function h(k,Y,J,j,K){let he=!1;if(o){const le=_(j,J,Y);c!==le&&(c=le,d(c.object)),he=p(k,j,J,K),he&&b(k,j,J,K)}else{const le=Y.wireframe===!0;(c.geometry!==j.id||c.program!==J.id||c.wireframe!==le)&&(c.geometry=j.id,c.program=J.id,c.wireframe=le,he=!0)}K!==null&&t.update(K,n.ELEMENT_ARRAY_BUFFER),(he||u)&&(u=!1,B(k,Y,J,j),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function d(k){return i.isWebGL2?n.bindVertexArray(k):s.bindVertexArrayOES(k)}function g(k){return i.isWebGL2?n.deleteVertexArray(k):s.deleteVertexArrayOES(k)}function _(k,Y,J){const j=J.wireframe===!0;let K=a[k.id];K===void 0&&(K={},a[k.id]=K);let he=K[Y.id];he===void 0&&(he={},K[Y.id]=he);let le=he[j];return le===void 0&&(le=m(f()),he[j]=le),le}function m(k){const Y=[],J=[],j=[];for(let K=0;K<r;K++)Y[K]=0,J[K]=0,j[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:J,attributeDivisors:j,object:k,attributes:{},index:null}}function p(k,Y,J,j){const K=c.attributes,he=Y.attributes;let le=0;const H=J.getAttributes();for(const W in H)if(H[W].location>=0){const Me=K[W];let Te=he[W];if(Te===void 0&&(W==="instanceMatrix"&&k.instanceMatrix&&(Te=k.instanceMatrix),W==="instanceColor"&&k.instanceColor&&(Te=k.instanceColor)),Me===void 0||Me.attribute!==Te||Te&&Me.data!==Te.data)return!0;le++}return c.attributesNum!==le||c.index!==j}function b(k,Y,J,j){const K={},he=Y.attributes;let le=0;const H=J.getAttributes();for(const W in H)if(H[W].location>=0){let Me=he[W];Me===void 0&&(W==="instanceMatrix"&&k.instanceMatrix&&(Me=k.instanceMatrix),W==="instanceColor"&&k.instanceColor&&(Me=k.instanceColor));const Te={};Te.attribute=Me,Me&&Me.data&&(Te.data=Me.data),K[W]=Te,le++}c.attributes=K,c.attributesNum=le,c.index=j}function x(){const k=c.newAttributes;for(let Y=0,J=k.length;Y<J;Y++)k[Y]=0}function M(k){A(k,0)}function A(k,Y){const J=c.newAttributes,j=c.enabledAttributes,K=c.attributeDivisors;J[k]=1,j[k]===0&&(n.enableVertexAttribArray(k),j[k]=1),K[k]!==Y&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,Y),K[k]=Y)}function P(){const k=c.newAttributes,Y=c.enabledAttributes;for(let J=0,j=Y.length;J<j;J++)Y[J]!==k[J]&&(n.disableVertexAttribArray(J),Y[J]=0)}function w(k,Y,J,j,K,he,le){le===!0?n.vertexAttribIPointer(k,Y,J,K,he):n.vertexAttribPointer(k,Y,J,j,K,he)}function B(k,Y,J,j){if(i.isWebGL2===!1&&(k.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const K=j.attributes,he=J.getAttributes(),le=Y.defaultAttributeValues;for(const H in he){const W=he[H];if(W.location>=0){let _e=K[H];if(_e===void 0&&(H==="instanceMatrix"&&k.instanceMatrix&&(_e=k.instanceMatrix),H==="instanceColor"&&k.instanceColor&&(_e=k.instanceColor)),_e!==void 0){const Me=_e.normalized,Te=_e.itemSize,we=t.get(_e);if(we===void 0)continue;const Ce=we.buffer,Pe=we.type,ze=we.bytesPerElement,Je=i.isWebGL2===!0&&(Pe===n.INT||Pe===n.UNSIGNED_INT||_e.gpuType===Rf);if(_e.isInterleavedBufferAttribute){const Le=_e.data,v=Le.stride,C=_e.offset;if(Le.isInstancedInterleavedBuffer){for(let L=0;L<W.locationSize;L++)A(W.location+L,Le.meshPerAttribute);k.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let L=0;L<W.locationSize;L++)M(W.location+L);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let L=0;L<W.locationSize;L++)w(W.location+L,Te/W.locationSize,Pe,Me,v*ze,(C+Te/W.locationSize*L)*ze,Je)}else{if(_e.isInstancedBufferAttribute){for(let Le=0;Le<W.locationSize;Le++)A(W.location+Le,_e.meshPerAttribute);k.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Le=0;Le<W.locationSize;Le++)M(W.location+Le);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let Le=0;Le<W.locationSize;Le++)w(W.location+Le,Te/W.locationSize,Pe,Me,Te*ze,Te/W.locationSize*Le*ze,Je)}}else if(le!==void 0){const Me=le[H];if(Me!==void 0)switch(Me.length){case 2:n.vertexAttrib2fv(W.location,Me);break;case 3:n.vertexAttrib3fv(W.location,Me);break;case 4:n.vertexAttrib4fv(W.location,Me);break;default:n.vertexAttrib1fv(W.location,Me)}}}}P()}function S(){ae();for(const k in a){const Y=a[k];for(const J in Y){const j=Y[J];for(const K in j)g(j[K].object),delete j[K];delete Y[J]}delete a[k]}}function T(k){if(a[k.id]===void 0)return;const Y=a[k.id];for(const J in Y){const j=Y[J];for(const K in j)g(j[K].object),delete j[K];delete Y[J]}delete a[k.id]}function ee(k){for(const Y in a){const J=a[Y];if(J[k.id]===void 0)continue;const j=J[k.id];for(const K in j)g(j[K].object),delete j[K];delete J[k.id]}}function ae(){z(),u=!0,c!==l&&(c=l,d(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:ae,resetDefaultState:z,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:ee,initAttributes:x,enableAttribute:M,disableUnusedAttributes:P}}function Px(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,d;if(r)f=n,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,c,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function Lx(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,M=o||e.has("OES_texture_float"),A=x&&M,P=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:b,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:A,maxSamples:P}}function Ix(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Jn,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||r;return r=f,i=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const b=s?0:i,x=b*4;let M=p.clippingState||null;l.value=M,M=u(g,f,x,d);for(let A=0;A!==x;++A)M[A]=t[A];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,M=d;x!==_;++x,M+=4)o.copy(h[x]).applyMatrix4(b,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Dx(n){let e=new WeakMap;function t(o,a){return a===uo?o.mapping=gr:a===Qa&&(o.mapping=_r),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===uo||a===Qa)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new q_(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Wl extends Wf{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ir=4,Nu=[.125,.215,.35,.446,.526,.582],Mi=20,va=new Wl,Ou=new Re;let xa=null;const vi=(1+Math.sqrt(5))/2,Zi=1/vi,Bu=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,vi,Zi),new I(0,vi,-Zi),new I(Zi,0,vi),new I(-Zi,0,vi),new I(vi,Zi,0),new I(-vi,Zi,0)];class zu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){xa=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xa),e.scissorTest=!1,Hs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gr||e.mapping===_r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xa=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:en,minFilter:en,generateMipmaps:!1,type:is,format:nn,colorSpace:bn,depthBuffer:!1},r=Hu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ux(s)),this._blurMaterial=Fx(s,e,t)}return r}_compileMaterial(e){const t=new Tt(this._lodPlanes[0],e);this._renderer.compile(t,va)}_sceneToCubeUV(e,t,i,r){const a=new zt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Ou),u.toneMapping=ri,u.autoClear=!1;const d=new kf({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),g=new Tt(new us,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Ou),_=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;Hs(r,b*x,p>2?x:0,x,x),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===gr||e.mapping===_r;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ku());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Tt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Hs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,va)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Bu[(r-1)%Bu.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Tt(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Mi-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Mi;m>Mi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mi}`);const p=[];let b=0;for(let w=0;w<Mi;++w){const B=w/_,S=Math.exp(-B*B/2);p.push(S),w===0?b+=S:w<m&&(b+=2*S)}for(let w=0;w<p.length;w++)p[w]=p[w]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const M=this._sizeLods[r],A=3*M*(r>x-ir?r-x+ir:0),P=4*(this._cubeSize-M);Hs(t,A,P,3*M,2*M),l.setRenderTarget(t),l.render(h,va)}}function Ux(n){const e=[],t=[],i=[];let r=n;const s=n-ir+1+Nu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-ir?l=Nu[o-n+ir-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*d),x=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let P=0;P<d;P++){const w=P%3*2/3-1,B=P>2?0:-1,S=[w,B,0,w+2/3,B,0,w+2/3,B+1,0,w,B,0,w+2/3,B+1,0,w,B+1,0];b.set(S,_*g*P),x.set(f,m*g*P);const T=[P,P,P,P,P,P];M.set(T,p*g*P)}const A=new yt;A.setAttribute("position",new Gt(b,_)),A.setAttribute("uv",new Gt(x,m)),A.setAttribute("faceIndex",new Gt(M,p)),e.push(A),r>ir&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Hu(n,e,t){const i=new Ri(n,e,t);return i.texture.mapping=Ao,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Fx(n,e,t){const i=new Float32Array(Mi),r=new I(0,1,0);return new _t({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function ku(){return new _t({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Vu(){return new _t({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Xl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Nx(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===uo||l===Qa,u=l===gr||l===_r;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new zu(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new zu(n));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Ox(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Bx(n,e,t,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const b=d.array;_=d.version;for(let x=0,M=b.length;x<M;x+=3){const A=b[x+0],P=b[x+1],w=b[x+2];f.push(A,P,P,w,w,A)}}else if(g!==void 0){const b=g.array;_=g.version;for(let x=0,M=b.length/3-1;x<M;x+=3){const A=x+0,P=x+1,w=x+2;f.push(A,P,P,w,w,A)}}else return;const m=new(Nf(f)?Vf:Vl)(f,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function zx(n,e,t,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,d){n.drawElements(s,d,a,f*l),t.update(d,s,1)}function h(f,d,g){if(g===0)return;let _,m;if(r)_=n,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](s,d,a,f*l,g),t.update(d,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function Hx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function kx(n,e){return n[0]-e[0]}function Vx(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Gx(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new Qe,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==_){let Y=function(){z.dispose(),s.delete(u),u.removeEventListener("dispose",Y)};var d=Y;m!==void 0&&m.texture.dispose();const x=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],B=u.morphAttributes.color||[];let S=0;x===!0&&(S=1),M===!0&&(S=2),A===!0&&(S=3);let T=u.attributes.position.count*S,ee=1;T>e.maxTextureSize&&(ee=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const ae=new Float32Array(T*ee*4*_),z=new zf(ae,T,ee,_);z.type=Bn,z.needsUpdate=!0;const k=S*4;for(let J=0;J<_;J++){const j=P[J],K=w[J],he=B[J],le=T*ee*4*J;for(let H=0;H<j.count;H++){const W=H*k;x===!0&&(o.fromBufferAttribute(j,H),ae[le+W+0]=o.x,ae[le+W+1]=o.y,ae[le+W+2]=o.z,ae[le+W+3]=0),M===!0&&(o.fromBufferAttribute(K,H),ae[le+W+4]=o.x,ae[le+W+5]=o.y,ae[le+W+6]=o.z,ae[le+W+7]=0),A===!0&&(o.fromBufferAttribute(he,H),ae[le+W+8]=o.x,ae[le+W+9]=o.y,ae[le+W+10]=o.z,ae[le+W+11]=he.itemSize===4?o.w:1)}}m={count:_,texture:z,size:new ge(T,ee)},s.set(u,m),u.addEventListener("dispose",Y)}let p=0;for(let x=0;x<f.length;x++)p+=f[x];const b=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(n,"morphTargetBaseInfluence",b),h.getUniforms().setValue(n,"morphTargetInfluences",f),h.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let _=i[u.id];if(_===void 0||_.length!==g){_=[];for(let M=0;M<g;M++)_[M]=[M,0];i[u.id]=_}for(let M=0;M<g;M++){const A=_[M];A[0]=M,A[1]=f[M]}_.sort(Vx);for(let M=0;M<8;M++)M<g&&_[M][1]?(a[M][0]=_[M][0],a[M][1]=_[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(kx);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let b=0;for(let M=0;M<8;M++){const A=a[M],P=A[0],w=A[1];P!==Number.MAX_SAFE_INTEGER&&w?(m&&u.getAttribute("morphTarget"+M)!==m[P]&&u.setAttribute("morphTarget"+M,m[P]),p&&u.getAttribute("morphNormal"+M)!==p[P]&&u.setAttribute("morphNormal"+M,p[P]),r[M]=w,b+=w):(m&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),p&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),r[M]=0)}const x=u.morphTargetsRelative?1:1-b;h.getUniforms().setValue(n,"morphTargetBaseInfluence",x),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Wx(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const qf=new Rt,Yf=new zf,Kf=new P_,Zf=new Xf,Gu=[],Wu=[],Xu=new Float32Array(16),ju=new Float32Array(9),qu=new Float32Array(4);function wr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Gu[r];if(s===void 0&&(s=new Float32Array(r),Gu[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function St(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Po(n,e){let t=Wu[e];t===void 0&&(t=new Int32Array(e),Wu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Xx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function jx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2fv(this.addr,e),St(t,e)}}function qx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;n.uniform3fv(this.addr,e),St(t,e)}}function Yx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4fv(this.addr,e),St(t,e)}}function Kx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,i))return;qu.set(i),n.uniformMatrix2fv(this.addr,!1,qu),St(t,i)}}function Zx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,i))return;ju.set(i),n.uniformMatrix3fv(this.addr,!1,ju),St(t,i)}}function $x(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,i))return;Xu.set(i),n.uniformMatrix4fv(this.addr,!1,Xu),St(t,i)}}function Jx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Qx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2iv(this.addr,e),St(t,e)}}function ey(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3iv(this.addr,e),St(t,e)}}function ty(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4iv(this.addr,e),St(t,e)}}function ny(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function iy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2uiv(this.addr,e),St(t,e)}}function ry(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3uiv(this.addr,e),St(t,e)}}function sy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4uiv(this.addr,e),St(t,e)}}function oy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||qf,r)}function ay(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Kf,r)}function ly(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Zf,r)}function cy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Yf,r)}function uy(n){switch(n){case 5126:return Xx;case 35664:return jx;case 35665:return qx;case 35666:return Yx;case 35674:return Kx;case 35675:return Zx;case 35676:return $x;case 5124:case 35670:return Jx;case 35667:case 35671:return Qx;case 35668:case 35672:return ey;case 35669:case 35673:return ty;case 5125:return ny;case 36294:return iy;case 36295:return ry;case 36296:return sy;case 35678:case 36198:case 36298:case 36306:case 35682:return oy;case 35679:case 36299:case 36307:return ay;case 35680:case 36300:case 36308:case 36293:return ly;case 36289:case 36303:case 36311:case 36292:return cy}}function hy(n,e){n.uniform1fv(this.addr,e)}function fy(n,e){const t=wr(e,this.size,2);n.uniform2fv(this.addr,t)}function dy(n,e){const t=wr(e,this.size,3);n.uniform3fv(this.addr,t)}function py(n,e){const t=wr(e,this.size,4);n.uniform4fv(this.addr,t)}function my(n,e){const t=wr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function gy(n,e){const t=wr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function _y(n,e){const t=wr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function vy(n,e){n.uniform1iv(this.addr,e)}function xy(n,e){n.uniform2iv(this.addr,e)}function yy(n,e){n.uniform3iv(this.addr,e)}function My(n,e){n.uniform4iv(this.addr,e)}function Sy(n,e){n.uniform1uiv(this.addr,e)}function Ey(n,e){n.uniform2uiv(this.addr,e)}function by(n,e){n.uniform3uiv(this.addr,e)}function Ty(n,e){n.uniform4uiv(this.addr,e)}function wy(n,e,t){const i=this.cache,r=e.length,s=Po(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||qf,s[o])}function Ay(n,e,t){const i=this.cache,r=e.length,s=Po(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Kf,s[o])}function Ry(n,e,t){const i=this.cache,r=e.length,s=Po(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Zf,s[o])}function Cy(n,e,t){const i=this.cache,r=e.length,s=Po(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Yf,s[o])}function Py(n){switch(n){case 5126:return hy;case 35664:return fy;case 35665:return dy;case 35666:return py;case 35674:return my;case 35675:return gy;case 35676:return _y;case 5124:case 35670:return vy;case 35667:case 35671:return xy;case 35668:case 35672:return yy;case 35669:case 35673:return My;case 5125:return Sy;case 36294:return Ey;case 36295:return by;case 36296:return Ty;case 35678:case 36198:case 36298:case 36306:case 35682:return wy;case 35679:case 36299:case 36307:return Ay;case 35680:case 36300:case 36308:case 36293:return Ry;case 36289:case 36303:case 36311:case 36292:return Cy}}class Ly{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=uy(t.type)}}class Iy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Py(t.type)}}class Dy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const ya=/(\w+)(\])?(\[|\.)?/g;function Yu(n,e){n.seq.push(e),n.map[e.id]=e}function Uy(n,e,t){const i=n.name,r=i.length;for(ya.lastIndex=0;;){const s=ya.exec(i),o=ya.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Yu(t,c===void 0?new Ly(a,n,e):new Iy(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Dy(a),Yu(t,h)),t=h}}}class io{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Uy(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Ku(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let Fy=0;function Ny(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Oy(n){switch(n){case bn:return["Linear","( value )"];case nt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function Zu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Ny(n.getShaderSource(e),o)}else return r}function By(n,e){const t=Oy(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function zy(n,e){let t;switch(e){case Dg:t="Linear";break;case Ug:t="Reinhard";break;case Fg:t="OptimizedCineon";break;case Ng:t="ACESFilmic";break;case Og:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Hy(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zr).join(`
`)}function ky(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Vy(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function zr(n){return n!==""}function $u(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ju(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Gy=/^[ \t]*#include +<([\w\d./]+)>/gm;function il(n){return n.replace(Gy,Xy)}const Wy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Xy(n,e){let t=Ve[e];if(t===void 0){const i=Wy.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return il(t)}const jy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qu(n){return n.replace(jy,qy)}function qy(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function eh(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Yy(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===bf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===hg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Fn&&(e="SHADOWMAP_TYPE_VSM"),e}function Ky(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case gr:case _r:e="ENVMAP_TYPE_CUBE";break;case Ao:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Zy(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case _r:e="ENVMAP_MODE_REFRACTION";break}return e}function $y(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case wo:e="ENVMAP_BLENDING_MULTIPLY";break;case Lg:e="ENVMAP_BLENDING_MIX";break;case Ig:e="ENVMAP_BLENDING_ADD";break}return e}function Jy(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Qy(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Yy(t),c=Ky(t),u=Zy(t),h=$y(t),f=Jy(t),d=t.isWebGL2?"":Hy(t),g=ky(s),_=r.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(zr).join(`
`),m.length>0&&(m+=`
`),p=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(zr).join(`
`),p.length>0&&(p+=`
`)):(m=[eh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zr).join(`
`),p=[d,eh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?Ve.tonemapping_pars_fragment:"",t.toneMapping!==ri?zy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,By("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zr).join(`
`)),o=il(o),o=$u(o,t),o=Ju(o,t),a=il(a),a=$u(a,t),a=Ju(a,t),o=Qu(o),a=Qu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===yu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=b+m+o,M=b+p+a,A=Ku(r,r.VERTEX_SHADER,x),P=Ku(r,r.FRAGMENT_SHADER,M);if(r.attachShader(_,A),r.attachShader(_,P),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),n.debug.checkShaderErrors){const S=r.getProgramInfoLog(_).trim(),T=r.getShaderInfoLog(A).trim(),ee=r.getShaderInfoLog(P).trim();let ae=!0,z=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(ae=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,A,P);else{const k=Zu(r,A,"vertex"),Y=Zu(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+k+`
`+Y)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(T===""||ee==="")&&(z=!1);z&&(this.diagnostics={runnable:ae,programLog:S,vertexShader:{log:T,prefix:m},fragmentShader:{log:ee,prefix:p}})}r.deleteShader(A),r.deleteShader(P);let w;this.getUniforms=function(){return w===void 0&&(w=new io(r,_)),w};let B;return this.getAttributes=function(){return B===void 0&&(B=Vy(r,_)),B},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Fy++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=P,this}let eM=0;class tM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new nM(e),t.set(e,i)),i}}class nM{constructor(e){this.id=eM++,this.code=e,this.usedTimes=0}}function iM(n,e,t,i,r,s,o){const a=new kl,l=new tM,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function m(S,T,ee,ae,z){const k=ae.fog,Y=z.geometry,J=S.isMeshStandardMaterial?ae.environment:null,j=(S.isMeshStandardMaterial?t:e).get(S.envMap||J),K=j&&j.mapping===Ao?j.image.height:null,he=g[S.type];S.precision!==null&&(d=r.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const le=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,H=le!==void 0?le.length:0;let W=0;Y.morphAttributes.position!==void 0&&(W=1),Y.morphAttributes.normal!==void 0&&(W=2),Y.morphAttributes.color!==void 0&&(W=3);let _e,Me,Te,we;if(he){const rt=Mn[he];_e=rt.vertexShader,Me=rt.fragmentShader}else _e=S.vertexShader,Me=S.fragmentShader,l.update(S),Te=l.getVertexShaderID(S),we=l.getFragmentShaderID(S);const Ce=n.getRenderTarget(),Pe=z.isInstancedMesh===!0,ze=!!S.map,Je=!!S.matcap,Le=!!j,v=!!S.aoMap,C=!!S.lightMap,L=!!S.bumpMap,O=!!S.normalMap,U=!!S.displacementMap,Z=!!S.emissiveMap,$=!!S.metalnessMap,G=!!S.roughnessMap,ne=S.anisotropy>0,te=S.clearcoat>0,ye=S.iridescence>0,E=S.sheen>0,y=S.transmission>0,N=ne&&!!S.anisotropyMap,ie=te&&!!S.clearcoatMap,oe=te&&!!S.clearcoatNormalMap,ce=te&&!!S.clearcoatRoughnessMap,xe=ye&&!!S.iridescenceMap,fe=ye&&!!S.iridescenceThicknessMap,q=E&&!!S.sheenColorMap,D=E&&!!S.sheenRoughnessMap,ue=!!S.specularMap,Ee=!!S.specularColorMap,de=!!S.specularIntensityMap,me=y&&!!S.transmissionMap,Fe=y&&!!S.thicknessMap,Ke=!!S.gradientMap,F=!!S.alphaMap,be=S.alphaTest>0,Q=!!S.alphaHash,pe=!!S.extensions,ve=!!Y.attributes.uv1,Xe=!!Y.attributes.uv2,et=!!Y.attributes.uv3;let it=ri;return S.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(it=n.toneMapping),{isWebGL2:u,shaderID:he,shaderType:S.type,shaderName:S.name,vertexShader:_e,fragmentShader:Me,defines:S.defines,customVertexShaderID:Te,customFragmentShaderID:we,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,instancing:Pe,instancingColor:Pe&&z.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Ce===null?n.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:bn,map:ze,matcap:Je,envMap:Le,envMapMode:Le&&j.mapping,envMapCubeUVHeight:K,aoMap:v,lightMap:C,bumpMap:L,normalMap:O,displacementMap:f&&U,emissiveMap:Z,normalMapObjectSpace:O&&S.normalMapType===$g,normalMapTangentSpace:O&&S.normalMapType===zl,metalnessMap:$,roughnessMap:G,anisotropy:ne,anisotropyMap:N,clearcoat:te,clearcoatMap:ie,clearcoatNormalMap:oe,clearcoatRoughnessMap:ce,iridescence:ye,iridescenceMap:xe,iridescenceThicknessMap:fe,sheen:E,sheenColorMap:q,sheenRoughnessMap:D,specularMap:ue,specularColorMap:Ee,specularIntensityMap:de,transmission:y,transmissionMap:me,thicknessMap:Fe,gradientMap:Ke,opaque:S.transparent===!1&&S.blending===cr,alphaMap:F,alphaTest:be,alphaHash:Q,combine:S.combine,mapUv:ze&&_(S.map.channel),aoMapUv:v&&_(S.aoMap.channel),lightMapUv:C&&_(S.lightMap.channel),bumpMapUv:L&&_(S.bumpMap.channel),normalMapUv:O&&_(S.normalMap.channel),displacementMapUv:U&&_(S.displacementMap.channel),emissiveMapUv:Z&&_(S.emissiveMap.channel),metalnessMapUv:$&&_(S.metalnessMap.channel),roughnessMapUv:G&&_(S.roughnessMap.channel),anisotropyMapUv:N&&_(S.anisotropyMap.channel),clearcoatMapUv:ie&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:oe&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:q&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:D&&_(S.sheenRoughnessMap.channel),specularMapUv:ue&&_(S.specularMap.channel),specularColorMapUv:Ee&&_(S.specularColorMap.channel),specularIntensityMapUv:de&&_(S.specularIntensityMap.channel),transmissionMapUv:me&&_(S.transmissionMap.channel),thicknessMapUv:Fe&&_(S.thicknessMap.channel),alphaMapUv:F&&_(S.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(O||ne),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,vertexUv1s:ve,vertexUv2s:Xe,vertexUv3s:et,pointsUvs:z.isPoints===!0&&!!Y.attributes.uv&&(ze||F),fog:!!k,useFog:S.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:z.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:W,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&ee.length>0,shadowMapType:n.shadowMap.type,toneMapping:it,useLegacyLights:n._useLegacyLights,decodeVideoTexture:ze&&S.map.isVideoTexture===!0&&S.map.colorSpace===nt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Zt,flipSided:S.side===Wt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:pe&&S.extensions.derivatives===!0,extensionFragDepth:pe&&S.extensions.fragDepth===!0,extensionDrawBuffers:pe&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const ee in S.defines)T.push(ee),T.push(S.defines[ee]);return S.isRawShaderMaterial===!1&&(b(T,S),x(T,S),T.push(n.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function b(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function x(S,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),S.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function M(S){const T=g[S.type];let ee;if(T){const ae=Mn[T];ee=G_.clone(ae.uniforms)}else ee=S.uniforms;return ee}function A(S,T){let ee;for(let ae=0,z=c.length;ae<z;ae++){const k=c[ae];if(k.cacheKey===T){ee=k,++ee.usedTimes;break}}return ee===void 0&&(ee=new Qy(n,T,S,s),c.push(ee)),ee}function P(S){if(--S.usedTimes===0){const T=c.indexOf(S);c[T]=c[c.length-1],c.pop(),S.destroy()}}function w(S){l.remove(S)}function B(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:A,releaseProgram:P,releaseShaderCache:w,programs:c,dispose:B}}function rM(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function sM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function th(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function nh(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,f,d,g,_,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||sM),i.length>1&&i.sort(f||th),r.length>1&&r.sort(f||th)}function u(){for(let h=e,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function oM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new nh,n.set(i,[o])):r>=s.length?(o=new nh,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function aM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Re};break;case"SpotLight":t={position:new I,direction:new I,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function lM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let cM=0;function uM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function hM(n,e){const t=new aM,i=lM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new I);const s=new I,o=new De,a=new De;function l(u,h){let f=0,d=0,g=0;for(let ee=0;ee<9;ee++)r.probe[ee].set(0,0,0);let _=0,m=0,p=0,b=0,x=0,M=0,A=0,P=0,w=0,B=0;u.sort(uM);const S=h===!0?Math.PI:1;for(let ee=0,ae=u.length;ee<ae;ee++){const z=u[ee],k=z.color,Y=z.intensity,J=z.distance,j=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)f+=k.r*Y*S,d+=k.g*Y*S,g+=k.b*Y*S;else if(z.isLightProbe)for(let K=0;K<9;K++)r.probe[K].addScaledVector(z.sh.coefficients[K],Y);else if(z.isDirectionalLight){const K=t.get(z);if(K.color.copy(z.color).multiplyScalar(z.intensity*S),z.castShadow){const he=z.shadow,le=i.get(z);le.shadowBias=he.bias,le.shadowNormalBias=he.normalBias,le.shadowRadius=he.radius,le.shadowMapSize=he.mapSize,r.directionalShadow[_]=le,r.directionalShadowMap[_]=j,r.directionalShadowMatrix[_]=z.shadow.matrix,M++}r.directional[_]=K,_++}else if(z.isSpotLight){const K=t.get(z);K.position.setFromMatrixPosition(z.matrixWorld),K.color.copy(k).multiplyScalar(Y*S),K.distance=J,K.coneCos=Math.cos(z.angle),K.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),K.decay=z.decay,r.spot[p]=K;const he=z.shadow;if(z.map&&(r.spotLightMap[w]=z.map,w++,he.updateMatrices(z),z.castShadow&&B++),r.spotLightMatrix[p]=he.matrix,z.castShadow){const le=i.get(z);le.shadowBias=he.bias,le.shadowNormalBias=he.normalBias,le.shadowRadius=he.radius,le.shadowMapSize=he.mapSize,r.spotShadow[p]=le,r.spotShadowMap[p]=j,P++}p++}else if(z.isRectAreaLight){const K=t.get(z);K.color.copy(k).multiplyScalar(Y),K.halfWidth.set(z.width*.5,0,0),K.halfHeight.set(0,z.height*.5,0),r.rectArea[b]=K,b++}else if(z.isPointLight){const K=t.get(z);if(K.color.copy(z.color).multiplyScalar(z.intensity*S),K.distance=z.distance,K.decay=z.decay,z.castShadow){const he=z.shadow,le=i.get(z);le.shadowBias=he.bias,le.shadowNormalBias=he.normalBias,le.shadowRadius=he.radius,le.shadowMapSize=he.mapSize,le.shadowCameraNear=he.camera.near,le.shadowCameraFar=he.camera.far,r.pointShadow[m]=le,r.pointShadowMap[m]=j,r.pointShadowMatrix[m]=z.shadow.matrix,A++}r.point[m]=K,m++}else if(z.isHemisphereLight){const K=t.get(z);K.skyColor.copy(z.color).multiplyScalar(Y*S),K.groundColor.copy(z.groundColor).multiplyScalar(Y*S),r.hemi[x]=K,x++}}b>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Se.LTC_FLOAT_1,r.rectAreaLTC2=Se.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Se.LTC_HALF_1,r.rectAreaLTC2=Se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=d,r.ambient[2]=g;const T=r.hash;(T.directionalLength!==_||T.pointLength!==m||T.spotLength!==p||T.rectAreaLength!==b||T.hemiLength!==x||T.numDirectionalShadows!==M||T.numPointShadows!==A||T.numSpotShadows!==P||T.numSpotMaps!==w)&&(r.directional.length=_,r.spot.length=p,r.rectArea.length=b,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=P+w-B,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=B,T.directionalLength=_,T.pointLength=m,T.spotLength=p,T.rectAreaLength=b,T.hemiLength=x,T.numDirectionalShadows=M,T.numPointShadows=A,T.numSpotShadows=P,T.numSpotMaps=w,r.version=cM++)}function c(u,h){let f=0,d=0,g=0,_=0,m=0;const p=h.matrixWorldInverse;for(let b=0,x=u.length;b<x;b++){const M=u[b];if(M.isDirectionalLight){const A=r.directional[f];A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),f++}else if(M.isSpotLight){const A=r.spot[g];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),g++}else if(M.isRectAreaLight){const A=r.rectArea[_];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(p),a.identity(),o.copy(M.matrixWorld),o.premultiply(p),a.extractRotation(o),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const A=r.point[d];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){const A=r.hemi[m];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:r}}function ih(n,e){const t=new hM(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function fM(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new ih(n,e),t.set(s,[l])):o>=a.length?(l=new ih(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class dM extends ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pM extends ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const mM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _M(n,e,t){let i=new Gl;const r=new ge,s=new ge,o=new Qe,a=new dM({depthPacking:Zg}),l=new pM,c={},u=t.maxTextureSize,h={[ai]:Wt,[Wt]:ai,[Zt]:Zt},f=new _t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:mM,fragmentShader:gM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new yt;g.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Tt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bf;let p=this.type;this.render=function(A,P,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const B=n.getRenderTarget(),S=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),ee=n.state;ee.setBlending(ii),ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const ae=p!==Fn&&this.type===Fn,z=p===Fn&&this.type!==Fn;for(let k=0,Y=A.length;k<Y;k++){const J=A[k],j=J.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const K=j.getFrameExtents();if(r.multiply(K),s.copy(j.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/K.x),r.x=s.x*K.x,j.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/K.y),r.y=s.y*K.y,j.mapSize.y=s.y)),j.map===null||ae===!0||z===!0){const le=this.type!==Fn?{minFilter:At,magFilter:At}:{};j.map!==null&&j.map.dispose(),j.map=new Ri(r.x,r.y,le),j.map.texture.name=J.name+".shadowMap",j.camera.updateProjectionMatrix()}n.setRenderTarget(j.map),n.clear();const he=j.getViewportCount();for(let le=0;le<he;le++){const H=j.getViewport(le);o.set(s.x*H.x,s.y*H.y,s.x*H.z,s.y*H.w),ee.viewport(o),j.updateMatrices(J,le),i=j.getFrustum(),M(P,w,j.camera,J,this.type)}j.isPointLightShadow!==!0&&this.type===Fn&&b(j,w),j.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(B,S,T)};function b(A,P){const w=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ri(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(P,null,w,f,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(P,null,w,d,_,null)}function x(A,P,w,B){let S=null;const T=w.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(T!==void 0)S=T;else if(S=w.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const ee=S.uuid,ae=P.uuid;let z=c[ee];z===void 0&&(z={},c[ee]=z);let k=z[ae];k===void 0&&(k=S.clone(),z[ae]=k),S=k}if(S.visible=P.visible,S.wireframe=P.wireframe,B===Fn?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:h[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,w.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const ee=n.properties.get(S);ee.light=w}return S}function M(A,P,w,B,S){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Fn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,A.matrixWorld);const ae=e.update(A),z=A.material;if(Array.isArray(z)){const k=ae.groups;for(let Y=0,J=k.length;Y<J;Y++){const j=k[Y],K=z[j.materialIndex];if(K&&K.visible){const he=x(A,K,B,S);n.renderBufferDirect(w,null,ae,he,A,j)}}}else if(z.visible){const k=x(A,z,B,S);n.renderBufferDirect(w,null,ae,k,A,null)}}const ee=A.children;for(let ae=0,z=ee.length;ae<z;ae++)M(ee[ae],P,w,B,S)}}function vM(n,e,t){const i=t.isWebGL2;function r(){let F=!1;const be=new Qe;let Q=null;const pe=new Qe(0,0,0,0);return{setMask:function(ve){Q!==ve&&!F&&(n.colorMask(ve,ve,ve,ve),Q=ve)},setLocked:function(ve){F=ve},setClear:function(ve,Xe,et,it,jt){jt===!0&&(ve*=it,Xe*=it,et*=it),be.set(ve,Xe,et,it),pe.equals(be)===!1&&(n.clearColor(ve,Xe,et,it),pe.copy(be))},reset:function(){F=!1,Q=null,pe.set(-1,0,0,0)}}}function s(){let F=!1,be=null,Q=null,pe=null;return{setTest:function(ve){ve?Ce(n.DEPTH_TEST):Pe(n.DEPTH_TEST)},setMask:function(ve){be!==ve&&!F&&(n.depthMask(ve),be=ve)},setFunc:function(ve){if(Q!==ve){switch(ve){case bg:n.depthFunc(n.NEVER);break;case Tg:n.depthFunc(n.ALWAYS);break;case wg:n.depthFunc(n.LESS);break;case Ja:n.depthFunc(n.LEQUAL);break;case Ag:n.depthFunc(n.EQUAL);break;case Rg:n.depthFunc(n.GEQUAL);break;case Cg:n.depthFunc(n.GREATER);break;case Pg:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=ve}},setLocked:function(ve){F=ve},setClear:function(ve){pe!==ve&&(n.clearDepth(ve),pe=ve)},reset:function(){F=!1,be=null,Q=null,pe=null}}}function o(){let F=!1,be=null,Q=null,pe=null,ve=null,Xe=null,et=null,it=null,jt=null;return{setTest:function(rt){F||(rt?Ce(n.STENCIL_TEST):Pe(n.STENCIL_TEST))},setMask:function(rt){be!==rt&&!F&&(n.stencilMask(rt),be=rt)},setFunc:function(rt,vn,Ut){(Q!==rt||pe!==vn||ve!==Ut)&&(n.stencilFunc(rt,vn,Ut),Q=rt,pe=vn,ve=Ut)},setOp:function(rt,vn,Ut){(Xe!==rt||et!==vn||it!==Ut)&&(n.stencilOp(rt,vn,Ut),Xe=rt,et=vn,it=Ut)},setLocked:function(rt){F=rt},setClear:function(rt){jt!==rt&&(n.clearStencil(rt),jt=rt)},reset:function(){F=!1,be=null,Q=null,pe=null,ve=null,Xe=null,et=null,it=null,jt=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},d={},g=new WeakMap,_=[],m=null,p=!1,b=null,x=null,M=null,A=null,P=null,w=null,B=null,S=!1,T=null,ee=null,ae=null,z=null,k=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,j=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(K)[1]),J=j>=1):K.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),J=j>=2);let he=null,le={};const H=n.getParameter(n.SCISSOR_BOX),W=n.getParameter(n.VIEWPORT),_e=new Qe().fromArray(H),Me=new Qe().fromArray(W);function Te(F,be,Q,pe){const ve=new Uint8Array(4),Xe=n.createTexture();n.bindTexture(F,Xe),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let et=0;et<Q;et++)i&&(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)?n.texImage3D(be,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(be+et,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return Xe}const we={};we[n.TEXTURE_2D]=Te(n.TEXTURE_2D,n.TEXTURE_2D,1),we[n.TEXTURE_CUBE_MAP]=Te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(we[n.TEXTURE_2D_ARRAY]=Te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),we[n.TEXTURE_3D]=Te(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ce(n.DEPTH_TEST),l.setFunc(Ja),U(!1),Z(Bc),Ce(n.CULL_FACE),L(ii);function Ce(F){f[F]!==!0&&(n.enable(F),f[F]=!0)}function Pe(F){f[F]!==!1&&(n.disable(F),f[F]=!1)}function ze(F,be){return d[F]!==be?(n.bindFramebuffer(F,be),d[F]=be,i&&(F===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=be),F===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=be)),!0):!1}function Je(F,be){let Q=_,pe=!1;if(F)if(Q=g.get(be),Q===void 0&&(Q=[],g.set(be,Q)),F.isWebGLMultipleRenderTargets){const ve=F.texture;if(Q.length!==ve.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let Xe=0,et=ve.length;Xe<et;Xe++)Q[Xe]=n.COLOR_ATTACHMENT0+Xe;Q.length=ve.length,pe=!0}}else Q[0]!==n.COLOR_ATTACHMENT0&&(Q[0]=n.COLOR_ATTACHMENT0,pe=!0);else Q[0]!==n.BACK&&(Q[0]=n.BACK,pe=!0);pe&&(t.isWebGL2?n.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function Le(F){return m!==F?(n.useProgram(F),m=F,!0):!1}const v={[Qi]:n.FUNC_ADD,[dg]:n.FUNC_SUBTRACT,[pg]:n.FUNC_REVERSE_SUBTRACT};if(i)v[Vc]=n.MIN,v[Gc]=n.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(v[Vc]=F.MIN_EXT,v[Gc]=F.MAX_EXT)}const C={[mg]:n.ZERO,[gg]:n.ONE,[_g]:n.SRC_COLOR,[Tf]:n.SRC_ALPHA,[Eg]:n.SRC_ALPHA_SATURATE,[Mg]:n.DST_COLOR,[xg]:n.DST_ALPHA,[vg]:n.ONE_MINUS_SRC_COLOR,[wf]:n.ONE_MINUS_SRC_ALPHA,[Sg]:n.ONE_MINUS_DST_COLOR,[yg]:n.ONE_MINUS_DST_ALPHA};function L(F,be,Q,pe,ve,Xe,et,it){if(F===ii){p===!0&&(Pe(n.BLEND),p=!1);return}if(p===!1&&(Ce(n.BLEND),p=!0),F!==fg){if(F!==b||it!==S){if((x!==Qi||P!==Qi)&&(n.blendEquation(n.FUNC_ADD),x=Qi,P=Qi),it)switch(F){case cr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zc:n.blendFunc(n.ONE,n.ONE);break;case Hc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case kc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case cr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Hc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case kc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}M=null,A=null,w=null,B=null,b=F,S=it}return}ve=ve||be,Xe=Xe||Q,et=et||pe,(be!==x||ve!==P)&&(n.blendEquationSeparate(v[be],v[ve]),x=be,P=ve),(Q!==M||pe!==A||Xe!==w||et!==B)&&(n.blendFuncSeparate(C[Q],C[pe],C[Xe],C[et]),M=Q,A=pe,w=Xe,B=et),b=F,S=!1}function O(F,be){F.side===Zt?Pe(n.CULL_FACE):Ce(n.CULL_FACE);let Q=F.side===Wt;be&&(Q=!Q),U(Q),F.blending===cr&&F.transparent===!1?L(ii):L(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),a.setMask(F.colorWrite);const pe=F.stencilWrite;c.setTest(pe),pe&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),G(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Ce(n.SAMPLE_ALPHA_TO_COVERAGE):Pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function U(F){T!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),T=F)}function Z(F){F!==cg?(Ce(n.CULL_FACE),F!==ee&&(F===Bc?n.cullFace(n.BACK):F===ug?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pe(n.CULL_FACE),ee=F}function $(F){F!==ae&&(J&&n.lineWidth(F),ae=F)}function G(F,be,Q){F?(Ce(n.POLYGON_OFFSET_FILL),(z!==be||k!==Q)&&(n.polygonOffset(be,Q),z=be,k=Q)):Pe(n.POLYGON_OFFSET_FILL)}function ne(F){F?Ce(n.SCISSOR_TEST):Pe(n.SCISSOR_TEST)}function te(F){F===void 0&&(F=n.TEXTURE0+Y-1),he!==F&&(n.activeTexture(F),he=F)}function ye(F,be,Q){Q===void 0&&(he===null?Q=n.TEXTURE0+Y-1:Q=he);let pe=le[Q];pe===void 0&&(pe={type:void 0,texture:void 0},le[Q]=pe),(pe.type!==F||pe.texture!==be)&&(he!==Q&&(n.activeTexture(Q),he=Q),n.bindTexture(F,be||we[F]),pe.type=F,pe.texture=be)}function E(){const F=le[he];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function y(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function N(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function q(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function D(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ue(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(F){_e.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),_e.copy(F))}function de(F){Me.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Me.copy(F))}function me(F,be){let Q=h.get(be);Q===void 0&&(Q=new WeakMap,h.set(be,Q));let pe=Q.get(F);pe===void 0&&(pe=n.getUniformBlockIndex(be,F.name),Q.set(F,pe))}function Fe(F,be){const pe=h.get(be).get(F);u.get(be)!==pe&&(n.uniformBlockBinding(be,pe,F.__bindingPointIndex),u.set(be,pe))}function Ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},he=null,le={},d={},g=new WeakMap,_=[],m=null,p=!1,b=null,x=null,M=null,A=null,P=null,w=null,B=null,S=!1,T=null,ee=null,ae=null,z=null,k=null,_e.set(0,0,n.canvas.width,n.canvas.height),Me.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ce,disable:Pe,bindFramebuffer:ze,drawBuffers:Je,useProgram:Le,setBlending:L,setMaterial:O,setFlipSided:U,setCullFace:Z,setLineWidth:$,setPolygonOffset:G,setScissorTest:ne,activeTexture:te,bindTexture:ye,unbindTexture:E,compressedTexImage2D:y,compressedTexImage3D:N,texImage2D:D,texImage3D:ue,updateUBOMapping:me,uniformBlockBinding:Fe,texStorage2D:fe,texStorage3D:q,texSubImage2D:ie,texSubImage3D:oe,compressedTexSubImage2D:ce,compressedTexSubImage3D:xe,scissor:Ee,viewport:de,reset:Ke}}function xM(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(E,y){return p?new OffscreenCanvas(E,y):rs("canvas")}function x(E,y,N,ie){let oe=1;if((E.width>ie||E.height>ie)&&(oe=ie/Math.max(E.width,E.height)),oe<1||y===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const ce=y?mo:Math.floor,xe=ce(oe*E.width),fe=ce(oe*E.height);_===void 0&&(_=b(xe,fe));const q=N?b(xe,fe):_;return q.width=xe,q.height=fe,q.getContext("2d").drawImage(E,0,0,xe,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+xe+"x"+fe+")."),q}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function M(E){return nl(E.width)&&nl(E.height)}function A(E){return a?!1:E.wrapS!==$t||E.wrapT!==$t||E.minFilter!==At&&E.minFilter!==en}function P(E,y){return E.generateMipmaps&&y&&E.minFilter!==At&&E.minFilter!==en}function w(E){n.generateMipmap(E)}function B(E,y,N,ie,oe=!1){if(a===!1)return y;if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ce=y;return y===n.RED&&(N===n.FLOAT&&(ce=n.R32F),N===n.HALF_FLOAT&&(ce=n.R16F),N===n.UNSIGNED_BYTE&&(ce=n.R8)),y===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(ce=n.R8UI),N===n.UNSIGNED_SHORT&&(ce=n.R16UI),N===n.UNSIGNED_INT&&(ce=n.R32UI),N===n.BYTE&&(ce=n.R8I),N===n.SHORT&&(ce=n.R16I),N===n.INT&&(ce=n.R32I)),y===n.RG&&(N===n.FLOAT&&(ce=n.RG32F),N===n.HALF_FLOAT&&(ce=n.RG16F),N===n.UNSIGNED_BYTE&&(ce=n.RG8)),y===n.RGBA&&(N===n.FLOAT&&(ce=n.RGBA32F),N===n.HALF_FLOAT&&(ce=n.RGBA16F),N===n.UNSIGNED_BYTE&&(ce=ie===nt&&oe===!1?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(ce=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(ce=n.RGB5_A1)),(ce===n.R16F||ce===n.R32F||ce===n.RG16F||ce===n.RG32F||ce===n.RGBA16F||ce===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function S(E,y,N){return P(E,N)===!0||E.isFramebufferTexture&&E.minFilter!==At&&E.minFilter!==en?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function T(E){return E===At||E===Wc||E===qo?n.NEAREST:n.LINEAR}function ee(E){const y=E.target;y.removeEventListener("dispose",ee),z(y),y.isVideoTexture&&g.delete(y)}function ae(E){const y=E.target;y.removeEventListener("dispose",ae),Y(y)}function z(E){const y=i.get(E);if(y.__webglInit===void 0)return;const N=E.source,ie=m.get(N);if(ie){const oe=ie[y.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&k(E),Object.keys(ie).length===0&&m.delete(N)}i.remove(E)}function k(E){const y=i.get(E);n.deleteTexture(y.__webglTexture);const N=E.source,ie=m.get(N);delete ie[y.__cacheKey],o.memory.textures--}function Y(E){const y=E.texture,N=i.get(E),ie=i.get(y);if(ie.__webglTexture!==void 0&&(n.deleteTexture(ie.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(N.__webglFramebuffer[oe]))for(let ce=0;ce<N.__webglFramebuffer[oe].length;ce++)n.deleteFramebuffer(N.__webglFramebuffer[oe][ce]);else n.deleteFramebuffer(N.__webglFramebuffer[oe]);N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer[oe])}else{if(Array.isArray(N.__webglFramebuffer))for(let oe=0;oe<N.__webglFramebuffer.length;oe++)n.deleteFramebuffer(N.__webglFramebuffer[oe]);else n.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&n.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let oe=0;oe<N.__webglColorRenderbuffer.length;oe++)N.__webglColorRenderbuffer[oe]&&n.deleteRenderbuffer(N.__webglColorRenderbuffer[oe]);N.__webglDepthRenderbuffer&&n.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let oe=0,ce=y.length;oe<ce;oe++){const xe=i.get(y[oe]);xe.__webglTexture&&(n.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(y[oe])}i.remove(y),i.remove(E)}let J=0;function j(){J=0}function K(){const E=J;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),J+=1,E}function he(E){const y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function le(E,y){const N=i.get(E);if(E.isVideoTexture&&te(E),E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){const ie=E.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ze(N,E,y);return}}t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+y)}function H(E,y){const N=i.get(E);if(E.version>0&&N.__version!==E.version){ze(N,E,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+y)}function W(E,y){const N=i.get(E);if(E.version>0&&N.__version!==E.version){ze(N,E,y);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+y)}function _e(E,y){const N=i.get(E);if(E.version>0&&N.__version!==E.version){Je(N,E,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+y)}const Me={[ts]:n.REPEAT,[$t]:n.CLAMP_TO_EDGE,[el]:n.MIRRORED_REPEAT},Te={[At]:n.NEAREST,[Wc]:n.NEAREST_MIPMAP_NEAREST,[qo]:n.NEAREST_MIPMAP_LINEAR,[en]:n.LINEAR,[Bg]:n.LINEAR_MIPMAP_NEAREST,[ns]:n.LINEAR_MIPMAP_LINEAR},we={[Qg]:n.NEVER,[o_]:n.ALWAYS,[e_]:n.LESS,[n_]:n.LEQUAL,[t_]:n.EQUAL,[s_]:n.GEQUAL,[i_]:n.GREATER,[r_]:n.NOTEQUAL};function Ce(E,y,N){if(N?(n.texParameteri(E,n.TEXTURE_WRAP_S,Me[y.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,Me[y.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,Me[y.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,Te[y.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,Te[y.minFilter])):(n.texParameteri(E,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(E,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(y.wrapS!==$t||y.wrapT!==$t)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(E,n.TEXTURE_MAG_FILTER,T(y.magFilter)),n.texParameteri(E,n.TEXTURE_MIN_FILTER,T(y.minFilter)),y.minFilter!==At&&y.minFilter!==en&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,we[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===At||y.minFilter!==qo&&y.minFilter!==ns||y.type===Bn&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===is&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(n.texParameterf(E,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function Pe(E,y){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",ee));const ie=y.source;let oe=m.get(ie);oe===void 0&&(oe={},m.set(ie,oe));const ce=he(y);if(ce!==E.__cacheKey){oe[ce]===void 0&&(oe[ce]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),oe[ce].usedTimes++;const xe=oe[E.__cacheKey];xe!==void 0&&(oe[E.__cacheKey].usedTimes--,xe.usedTimes===0&&k(y)),E.__cacheKey=ce,E.__webglTexture=oe[ce].texture}return N}function ze(E,y,N){let ie=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ie=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ie=n.TEXTURE_3D);const oe=Pe(E,y),ce=y.source;t.bindTexture(ie,E.__webglTexture,n.TEXTURE0+N);const xe=i.get(ce);if(ce.version!==xe.__version||oe===!0){t.activeTexture(n.TEXTURE0+N),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const fe=A(y)&&M(y.image)===!1;let q=x(y.image,fe,!1,u);q=ye(y,q);const D=M(q)||a,ue=s.convert(y.format,y.colorSpace);let Ee=s.convert(y.type),de=B(y.internalFormat,ue,Ee,y.colorSpace,y.isVideoTexture);Ce(ie,y,D);let me;const Fe=y.mipmaps,Ke=a&&y.isVideoTexture!==!0,F=xe.__version===void 0||oe===!0,be=S(y,q,D);if(y.isDepthTexture)de=n.DEPTH_COMPONENT,a?y.type===Bn?de=n.DEPTH_COMPONENT32F:y.type===Qn?de=n.DEPTH_COMPONENT24:y.type===bi?de=n.DEPTH24_STENCIL8:de=n.DEPTH_COMPONENT16:y.type===Bn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Ti&&de===n.DEPTH_COMPONENT&&y.type!==Bl&&y.type!==Qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Qn,Ee=s.convert(y.type)),y.format===vr&&de===n.DEPTH_COMPONENT&&(de=n.DEPTH_STENCIL,y.type!==bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=bi,Ee=s.convert(y.type))),F&&(Ke?t.texStorage2D(n.TEXTURE_2D,1,de,q.width,q.height):t.texImage2D(n.TEXTURE_2D,0,de,q.width,q.height,0,ue,Ee,null));else if(y.isDataTexture)if(Fe.length>0&&D){Ke&&F&&t.texStorage2D(n.TEXTURE_2D,be,de,Fe[0].width,Fe[0].height);for(let Q=0,pe=Fe.length;Q<pe;Q++)me=Fe[Q],Ke?t.texSubImage2D(n.TEXTURE_2D,Q,0,0,me.width,me.height,ue,Ee,me.data):t.texImage2D(n.TEXTURE_2D,Q,de,me.width,me.height,0,ue,Ee,me.data);y.generateMipmaps=!1}else Ke?(F&&t.texStorage2D(n.TEXTURE_2D,be,de,q.width,q.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,q.width,q.height,ue,Ee,q.data)):t.texImage2D(n.TEXTURE_2D,0,de,q.width,q.height,0,ue,Ee,q.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ke&&F&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,de,Fe[0].width,Fe[0].height,q.depth);for(let Q=0,pe=Fe.length;Q<pe;Q++)me=Fe[Q],y.format!==nn?ue!==null?Ke?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,me.width,me.height,q.depth,ue,me.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,de,me.width,me.height,q.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,me.width,me.height,q.depth,ue,Ee,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,de,me.width,me.height,q.depth,0,ue,Ee,me.data)}else{Ke&&F&&t.texStorage2D(n.TEXTURE_2D,be,de,Fe[0].width,Fe[0].height);for(let Q=0,pe=Fe.length;Q<pe;Q++)me=Fe[Q],y.format!==nn?ue!==null?Ke?t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,me.width,me.height,ue,me.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,de,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage2D(n.TEXTURE_2D,Q,0,0,me.width,me.height,ue,Ee,me.data):t.texImage2D(n.TEXTURE_2D,Q,de,me.width,me.height,0,ue,Ee,me.data)}else if(y.isDataArrayTexture)Ke?(F&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,de,q.width,q.height,q.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,ue,Ee,q.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,de,q.width,q.height,q.depth,0,ue,Ee,q.data);else if(y.isData3DTexture)Ke?(F&&t.texStorage3D(n.TEXTURE_3D,be,de,q.width,q.height,q.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,ue,Ee,q.data)):t.texImage3D(n.TEXTURE_3D,0,de,q.width,q.height,q.depth,0,ue,Ee,q.data);else if(y.isFramebufferTexture){if(F)if(Ke)t.texStorage2D(n.TEXTURE_2D,be,de,q.width,q.height);else{let Q=q.width,pe=q.height;for(let ve=0;ve<be;ve++)t.texImage2D(n.TEXTURE_2D,ve,de,Q,pe,0,ue,Ee,null),Q>>=1,pe>>=1}}else if(Fe.length>0&&D){Ke&&F&&t.texStorage2D(n.TEXTURE_2D,be,de,Fe[0].width,Fe[0].height);for(let Q=0,pe=Fe.length;Q<pe;Q++)me=Fe[Q],Ke?t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ue,Ee,me):t.texImage2D(n.TEXTURE_2D,Q,de,ue,Ee,me);y.generateMipmaps=!1}else Ke?(F&&t.texStorage2D(n.TEXTURE_2D,be,de,q.width,q.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue,Ee,q)):t.texImage2D(n.TEXTURE_2D,0,de,ue,Ee,q);P(y,D)&&w(ie),xe.__version=ce.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function Je(E,y,N){if(y.image.length!==6)return;const ie=Pe(E,y),oe=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+N);const ce=i.get(oe);if(oe.version!==ce.__version||ie===!0){t.activeTexture(n.TEXTURE0+N),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const xe=y.isCompressedTexture||y.image[0].isCompressedTexture,fe=y.image[0]&&y.image[0].isDataTexture,q=[];for(let Q=0;Q<6;Q++)!xe&&!fe?q[Q]=x(y.image[Q],!1,!0,c):q[Q]=fe?y.image[Q].image:y.image[Q],q[Q]=ye(y,q[Q]);const D=q[0],ue=M(D)||a,Ee=s.convert(y.format,y.colorSpace),de=s.convert(y.type),me=B(y.internalFormat,Ee,de,y.colorSpace),Fe=a&&y.isVideoTexture!==!0,Ke=ce.__version===void 0||ie===!0;let F=S(y,D,ue);Ce(n.TEXTURE_CUBE_MAP,y,ue);let be;if(xe){Fe&&Ke&&t.texStorage2D(n.TEXTURE_CUBE_MAP,F,me,D.width,D.height);for(let Q=0;Q<6;Q++){be=q[Q].mipmaps;for(let pe=0;pe<be.length;pe++){const ve=be[pe];y.format!==nn?Ee!==null?Fe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe,0,0,ve.width,ve.height,Ee,ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe,me,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe,0,0,ve.width,ve.height,Ee,de,ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe,me,ve.width,ve.height,0,Ee,de,ve.data)}}}else{be=y.mipmaps,Fe&&Ke&&(be.length>0&&F++,t.texStorage2D(n.TEXTURE_CUBE_MAP,F,me,q[0].width,q[0].height));for(let Q=0;Q<6;Q++)if(fe){Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,q[Q].width,q[Q].height,Ee,de,q[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,me,q[Q].width,q[Q].height,0,Ee,de,q[Q].data);for(let pe=0;pe<be.length;pe++){const Xe=be[pe].image[Q].image;Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe+1,0,0,Xe.width,Xe.height,Ee,de,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe+1,me,Xe.width,Xe.height,0,Ee,de,Xe.data)}}else{Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ee,de,q[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,me,Ee,de,q[Q]);for(let pe=0;pe<be.length;pe++){const ve=be[pe];Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe+1,0,0,Ee,de,ve.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe+1,me,Ee,de,ve.image[Q])}}}P(y,ue)&&w(n.TEXTURE_CUBE_MAP),ce.__version=oe.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function Le(E,y,N,ie,oe,ce){const xe=s.convert(N.format,N.colorSpace),fe=s.convert(N.type),q=B(N.internalFormat,xe,fe,N.colorSpace);if(!i.get(y).__hasExternalTextures){const ue=Math.max(1,y.width>>ce),Ee=Math.max(1,y.height>>ce);oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,ce,q,ue,Ee,y.depth,0,xe,fe,null):t.texImage2D(oe,ce,q,ue,Ee,0,xe,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),ne(y)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,oe,i.get(N).__webglTexture,0,G(y)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ie,oe,i.get(N).__webglTexture,ce),t.bindFramebuffer(n.FRAMEBUFFER,null)}function v(E,y,N){if(n.bindRenderbuffer(n.RENDERBUFFER,E),y.depthBuffer&&!y.stencilBuffer){let ie=n.DEPTH_COMPONENT16;if(N||ne(y)){const oe=y.depthTexture;oe&&oe.isDepthTexture&&(oe.type===Bn?ie=n.DEPTH_COMPONENT32F:oe.type===Qn&&(ie=n.DEPTH_COMPONENT24));const ce=G(y);ne(y)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,ie,y.width,y.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,ie,y.width,y.height)}else n.renderbufferStorage(n.RENDERBUFFER,ie,y.width,y.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,E)}else if(y.depthBuffer&&y.stencilBuffer){const ie=G(y);N&&ne(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,n.DEPTH24_STENCIL8,y.width,y.height):ne(y)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,n.DEPTH24_STENCIL8,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,E)}else{const ie=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let oe=0;oe<ie.length;oe++){const ce=ie[oe],xe=s.convert(ce.format,ce.colorSpace),fe=s.convert(ce.type),q=B(ce.internalFormat,xe,fe,ce.colorSpace),D=G(y);N&&ne(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,D,q,y.width,y.height):ne(y)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,D,q,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,q,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function C(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),le(y.depthTexture,0);const ie=i.get(y.depthTexture).__webglTexture,oe=G(y);if(y.depthTexture.format===Ti)ne(y)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0);else if(y.depthTexture.format===vr)ne(y)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function L(E){const y=i.get(E),N=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");C(y.__webglFramebuffer,E)}else if(N){y.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[ie]),y.__webglDepthbuffer[ie]=n.createRenderbuffer(),v(y.__webglDepthbuffer[ie],E,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=n.createRenderbuffer(),v(y.__webglDepthbuffer,E,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function O(E,y,N){const ie=i.get(E);y!==void 0&&Le(ie.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&L(E)}function U(E){const y=E.texture,N=i.get(E),ie=i.get(y);E.addEventListener("dispose",ae),E.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture()),ie.__version=y.version,o.memory.textures++);const oe=E.isWebGLCubeRenderTarget===!0,ce=E.isWebGLMultipleRenderTargets===!0,xe=M(E)||a;if(oe){N.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(a&&y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer[fe]=[];for(let q=0;q<y.mipmaps.length;q++)N.__webglFramebuffer[fe][q]=n.createFramebuffer()}else N.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer=[];for(let fe=0;fe<y.mipmaps.length;fe++)N.__webglFramebuffer[fe]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(ce)if(r.drawBuffers){const fe=E.texture;for(let q=0,D=fe.length;q<D;q++){const ue=i.get(fe[q]);ue.__webglTexture===void 0&&(ue.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&ne(E)===!1){const fe=ce?y:[y];N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let q=0;q<fe.length;q++){const D=fe[q];N.__webglColorRenderbuffer[q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[q]);const ue=s.convert(D.format,D.colorSpace),Ee=s.convert(D.type),de=B(D.internalFormat,ue,Ee,D.colorSpace,E.isXRRenderTarget===!0),me=G(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,me,de,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+q,n.RENDERBUFFER,N.__webglColorRenderbuffer[q])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),v(N.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),Ce(n.TEXTURE_CUBE_MAP,y,xe);for(let fe=0;fe<6;fe++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let q=0;q<y.mipmaps.length;q++)Le(N.__webglFramebuffer[fe][q],E,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,q);else Le(N.__webglFramebuffer[fe],E,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);P(y,xe)&&w(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){const fe=E.texture;for(let q=0,D=fe.length;q<D;q++){const ue=fe[q],Ee=i.get(ue);t.bindTexture(n.TEXTURE_2D,Ee.__webglTexture),Ce(n.TEXTURE_2D,ue,xe),Le(N.__webglFramebuffer,E,ue,n.COLOR_ATTACHMENT0+q,n.TEXTURE_2D,0),P(ue,xe)&&w(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?fe=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,ie.__webglTexture),Ce(fe,y,xe),a&&y.mipmaps&&y.mipmaps.length>0)for(let q=0;q<y.mipmaps.length;q++)Le(N.__webglFramebuffer[q],E,y,n.COLOR_ATTACHMENT0,fe,q);else Le(N.__webglFramebuffer,E,y,n.COLOR_ATTACHMENT0,fe,0);P(y,xe)&&w(fe),t.unbindTexture()}E.depthBuffer&&L(E)}function Z(E){const y=M(E)||a,N=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ie=0,oe=N.length;ie<oe;ie++){const ce=N[ie];if(P(ce,y)){const xe=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,fe=i.get(ce).__webglTexture;t.bindTexture(xe,fe),w(xe),t.unbindTexture()}}}function $(E){if(a&&E.samples>0&&ne(E)===!1){const y=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],N=E.width,ie=E.height;let oe=n.COLOR_BUFFER_BIT;const ce=[],xe=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=i.get(E),q=E.isWebGLMultipleRenderTargets===!0;if(q)for(let D=0;D<y.length;D++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+D,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+D,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let D=0;D<y.length;D++){ce.push(n.COLOR_ATTACHMENT0+D),E.depthBuffer&&ce.push(xe);const ue=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(ue===!1&&(E.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),q&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[D]),ue===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[xe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[xe])),q){const Ee=i.get(y[D]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ee,0)}n.blitFramebuffer(0,0,N,ie,0,0,N,ie,oe,n.NEAREST),d&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),q)for(let D=0;D<y.length;D++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+D,n.RENDERBUFFER,fe.__webglColorRenderbuffer[D]);const ue=i.get(y[D]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+D,n.TEXTURE_2D,ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function G(E){return Math.min(h,E.samples)}function ne(E){const y=i.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function te(E){const y=o.render.frame;g.get(E)!==y&&(g.set(E,y),E.update())}function ye(E,y){const N=E.colorSpace,ie=E.format,oe=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===tl||N!==bn&&N!==Ai&&(N===nt||N===Ro?a===!1?e.has("EXT_sRGB")===!0&&ie===nn?(E.format=tl,E.minFilter=en,E.generateMipmaps=!1):y=Of.sRGBToLinear(y):(ie!==nn||oe!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),y}this.allocateTextureUnit=K,this.resetTextureUnits=j,this.setTexture2D=le,this.setTexture2DArray=H,this.setTexture3D=W,this.setTextureCube=_e,this.rebindTextures=O,this.setupRenderTarget=U,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=L,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=ne}const yM=0,xt=1;function MM(n,e,t){const i=t.isWebGL2;function r(s,o=Ai){let a;const l=o===nt||o===Ro?xt:yM;if(s===si)return n.UNSIGNED_BYTE;if(s===Cf)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Pf)return n.UNSIGNED_SHORT_5_5_5_1;if(s===zg)return n.BYTE;if(s===Hg)return n.SHORT;if(s===Bl)return n.UNSIGNED_SHORT;if(s===Rf)return n.INT;if(s===Qn)return n.UNSIGNED_INT;if(s===Bn)return n.FLOAT;if(s===is)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===kg)return n.ALPHA;if(s===nn)return n.RGBA;if(s===Vg)return n.LUMINANCE;if(s===Gg)return n.LUMINANCE_ALPHA;if(s===Ti)return n.DEPTH_COMPONENT;if(s===vr)return n.DEPTH_STENCIL;if(s===tl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Wg)return n.RED;if(s===Lf)return n.RED_INTEGER;if(s===Xg)return n.RG;if(s===If)return n.RG_INTEGER;if(s===Df)return n.RGBA_INTEGER;if(s===Yo||s===Ko||s===Zo||s===$o)if(l===xt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Yo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ko)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===$o)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Yo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ko)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===$o)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Xc||s===jc||s===qc||s===Yc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Xc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===jc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===qc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Yc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===jg)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Kc||s===Zc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Kc)return l===xt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Zc)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===$c||s===Jc||s===Qc||s===eu||s===tu||s===nu||s===iu||s===ru||s===su||s===ou||s===au||s===lu||s===cu||s===uu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===$c)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Jc)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Qc)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===eu)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===tu)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===nu)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===iu)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ru)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===su)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ou)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===au)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===lu)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===cu)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===uu)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Jo||s===hu||s===fu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Jo)return l===xt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===hu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===fu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===qg||s===du||s===pu||s===mu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Jo)return a.COMPRESSED_RED_RGTC1_EXT;if(s===du)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===pu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===mu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===bi?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class SM extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let rr=class extends lt{constructor(){super(),this.isGroup=!0,this.type="Group"}};const EM={type:"move"};class Ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(EM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new rr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class bM extends Rt{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Ti,u!==Ti&&u!==vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ti&&(i=Qn),i===void 0&&u===vr&&(i=bi),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:At,this.minFilter=l!==void 0?l:At,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class TM extends Pi{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=t.getContextAttributes();let m=null,p=null;const b=[],x=[],M=new zt;M.layers.enable(1),M.viewport=new Qe;const A=new zt;A.layers.enable(2),A.viewport=new Qe;const P=[M,A],w=new SM;w.layers.enable(1),w.layers.enable(2);let B=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let W=b[H];return W===void 0&&(W=new Ma,b[H]=W),W.getTargetRaySpace()},this.getControllerGrip=function(H){let W=b[H];return W===void 0&&(W=new Ma,b[H]=W),W.getGripSpace()},this.getHand=function(H){let W=b[H];return W===void 0&&(W=new Ma,b[H]=W),W.getHandSpace()};function T(H){const W=x.indexOf(H.inputSource);if(W===-1)return;const _e=b[W];_e!==void 0&&(_e.update(H.inputSource,H.frame,c||o),_e.dispatchEvent({type:H.type,data:H.inputSource}))}function ee(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",ae);for(let H=0;H<b.length;H++){const W=x[H];W!==null&&(x[H]=null,b[H].disconnect(W))}B=null,S=null,e.setRenderTarget(m),d=null,f=null,h=null,r=null,p=null,le.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",ae),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const W={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,W),r.updateRenderState({baseLayer:d}),p=new Ri(d.framebufferWidth,d.framebufferHeight,{format:nn,type:si,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let W=null,_e=null,Me=null;_.depth&&(Me=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,W=_.stencil?vr:Ti,_e=_.stencil?bi:Qn);const Te={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(Te),r.updateRenderState({layers:[f]}),p=new Ri(f.textureWidth,f.textureHeight,{format:nn,type:si,depthTexture:new bM(f.textureWidth,f.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const we=e.properties.get(p);we.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),le.setContext(r),le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function ae(H){for(let W=0;W<H.removed.length;W++){const _e=H.removed[W],Me=x.indexOf(_e);Me>=0&&(x[Me]=null,b[Me].disconnect(_e))}for(let W=0;W<H.added.length;W++){const _e=H.added[W];let Me=x.indexOf(_e);if(Me===-1){for(let we=0;we<b.length;we++)if(we>=x.length){x.push(_e),Me=we;break}else if(x[we]===null){x[we]=_e,Me=we;break}if(Me===-1)break}const Te=b[Me];Te&&Te.connect(_e)}}const z=new I,k=new I;function Y(H,W,_e){z.setFromMatrixPosition(W.matrixWorld),k.setFromMatrixPosition(_e.matrixWorld);const Me=z.distanceTo(k),Te=W.projectionMatrix.elements,we=_e.projectionMatrix.elements,Ce=Te[14]/(Te[10]-1),Pe=Te[14]/(Te[10]+1),ze=(Te[9]+1)/Te[5],Je=(Te[9]-1)/Te[5],Le=(Te[8]-1)/Te[0],v=(we[8]+1)/we[0],C=Ce*Le,L=Ce*v,O=Me/(-Le+v),U=O*-Le;W.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(U),H.translateZ(O),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const Z=Ce+O,$=Pe+O,G=C-U,ne=L+(Me-U),te=ze*Pe/$*Z,ye=Je*Pe/$*Z;H.projectionMatrix.makePerspective(G,ne,te,ye,Z,$),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function J(H,W){W===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(W.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;w.near=A.near=M.near=H.near,w.far=A.far=M.far=H.far,(B!==w.near||S!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),B=w.near,S=w.far);const W=H.parent,_e=w.cameras;J(w,W);for(let Me=0;Me<_e.length;Me++)J(_e[Me],W);_e.length===2?Y(w,M,A):w.projectionMatrix.copy(M.projectionMatrix),j(H,w,W)};function j(H,W,_e){_e===null?H.matrix.copy(W.matrixWorld):(H.matrix.copy(_e.matrixWorld),H.matrix.invert(),H.matrix.multiply(W.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(W.projectionMatrix),H.projectionMatrixInverse.copy(W.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=xr*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=H)};let K=null;function he(H,W){if(u=W.getViewerPose(c||o),g=W,u!==null){const _e=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let Me=!1;_e.length!==w.cameras.length&&(w.cameras.length=0,Me=!0);for(let Te=0;Te<_e.length;Te++){const we=_e[Te];let Ce=null;if(d!==null)Ce=d.getViewport(we);else{const ze=h.getViewSubImage(f,we);Ce=ze.viewport,Te===0&&(e.setRenderTargetTextures(p,ze.colorTexture,f.ignoreDepthValues?void 0:ze.depthStencilTexture),e.setRenderTarget(p))}let Pe=P[Te];Pe===void 0&&(Pe=new zt,Pe.layers.enable(Te),Pe.viewport=new Qe,P[Te]=Pe),Pe.matrix.fromArray(we.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(we.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),Te===0&&(w.matrix.copy(Pe.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Me===!0&&w.cameras.push(Pe)}}for(let _e=0;_e<b.length;_e++){const Me=x[_e],Te=b[_e];Me!==null&&Te!==void 0&&Te.update(Me,W,c||o)}K&&K(H,W),W.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:W}),g=null}const le=new jf;le.setAnimationLoop(he),this.setAnimationLoop=function(H){K=H},this.dispose=function(){}}}function wM(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Gf(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,b,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Wt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Wt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p).envMap;if(b&&(m.envMap.value=b,m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const x=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Wt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function AM(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,x){const M=x.program;i.uniformBlockBinding(b,M)}function c(b,x){let M=r[b.id];M===void 0&&(g(b),M=u(b),r[b.id]=M,b.addEventListener("dispose",m));const A=x.program;i.updateUBOMapping(b,A);const P=e.render.frame;s[b.id]!==P&&(f(b),s[b.id]=P)}function u(b){const x=h();b.__bindingPointIndex=x;const M=n.createBuffer(),A=b.__size,P=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,A,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,M),M}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const x=r[b.id],M=b.uniforms,A=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let P=0,w=M.length;P<w;P++){const B=M[P];if(d(B,P,A)===!0){const S=B.__offset,T=Array.isArray(B.value)?B.value:[B.value];let ee=0;for(let ae=0;ae<T.length;ae++){const z=T[ae],k=_(z);typeof z=="number"?(B.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,S+ee,B.__data)):z.isMatrix3?(B.__data[0]=z.elements[0],B.__data[1]=z.elements[1],B.__data[2]=z.elements[2],B.__data[3]=z.elements[0],B.__data[4]=z.elements[3],B.__data[5]=z.elements[4],B.__data[6]=z.elements[5],B.__data[7]=z.elements[0],B.__data[8]=z.elements[6],B.__data[9]=z.elements[7],B.__data[10]=z.elements[8],B.__data[11]=z.elements[0]):(z.toArray(B.__data,ee),ee+=k.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,S,B.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(b,x,M){const A=b.value;if(M[x]===void 0){if(typeof A=="number")M[x]=A;else{const P=Array.isArray(A)?A:[A],w=[];for(let B=0;B<P.length;B++)w.push(P[B].clone());M[x]=w}return!0}else if(typeof A=="number"){if(M[x]!==A)return M[x]=A,!0}else{const P=Array.isArray(M[x])?M[x]:[M[x]],w=Array.isArray(A)?A:[A];for(let B=0;B<P.length;B++){const S=P[B];if(S.equals(w[B])===!1)return S.copy(w[B]),!0}}return!1}function g(b){const x=b.uniforms;let M=0;const A=16;let P=0;for(let w=0,B=x.length;w<B;w++){const S=x[w],T={boundary:0,storage:0},ee=Array.isArray(S.value)?S.value:[S.value];for(let ae=0,z=ee.length;ae<z;ae++){const k=ee[ae],Y=_(k);T.boundary+=Y.boundary,T.storage+=Y.storage}if(S.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=M,w>0){P=M%A;const ae=A-P;P!==0&&ae-T.boundary<0&&(M+=A-P,S.__offset=M)}M+=T.storage}return P=M%A,P>0&&(M+=A-P),b.__size=M,b.__cache={},this}function _(b){const x={boundary:0,storage:0};return typeof b=="number"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function m(b){const x=b.target;x.removeEventListener("dispose",m);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class $f{constructor(e={}){const{canvas:t=y_(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=nt,this._useLegacyLights=!1,this.toneMapping=ri,this.toneMappingExposure=1;const x=this;let M=!1,A=0,P=0,w=null,B=-1,S=null;const T=new Qe,ee=new Qe;let ae=null;const z=new Re(0);let k=0,Y=t.width,J=t.height,j=1,K=null,he=null;const le=new Qe(0,0,Y,J),H=new Qe(0,0,Y,J);let W=!1;const _e=new Gl;let Me=!1,Te=!1,we=null;const Ce=new De,Pe=new ge,ze=new I,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Le(){return w===null?j:1}let v=i;function C(R,V){for(let re=0;re<R.length;re++){const X=R[re],se=t.getContext(X,V);if(se!==null)return se}return null}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ol}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",Q,!1),t.addEventListener("webglcontextcreationerror",pe,!1),v===null){const V=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&V.shift(),v=C(V,R),v===null)throw C(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&v instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),v.getShaderPrecisionFormat===void 0&&(v.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let L,O,U,Z,$,G,ne,te,ye,E,y,N,ie,oe,ce,xe,fe,q,D,ue,Ee,de,me,Fe;function Ke(){L=new Ox(v),O=new Lx(v,L,e),L.init(O),de=new MM(v,L,O),U=new vM(v,L,O),Z=new Hx(v),$=new rM,G=new xM(v,L,U,$,O,de,Z),ne=new Dx(x),te=new Nx(x),ye=new Z_(v,O),me=new Cx(v,L,ye,O),E=new Bx(v,ye,Z,me),y=new Wx(v,E,ye,Z),D=new Gx(v,O,G),xe=new Ix($),N=new iM(x,ne,te,L,O,me,xe),ie=new wM(x,$),oe=new oM,ce=new fM(L,O),q=new Rx(x,ne,te,U,y,f,l),fe=new _M(x,y,O),Fe=new AM(v,Z,O,U),ue=new Px(v,L,Z,O),Ee=new zx(v,L,Z,O),Z.programs=N.programs,x.capabilities=O,x.extensions=L,x.properties=$,x.renderLists=oe,x.shadowMap=fe,x.state=U,x.info=Z}Ke();const F=new TM(x,v);this.xr=F,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){const R=L.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=L.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(Y,J,!1))},this.getSize=function(R){return R.set(Y,J)},this.setSize=function(R,V,re=!0){if(F.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=R,J=V,t.width=Math.floor(R*j),t.height=Math.floor(V*j),re===!0&&(t.style.width=R+"px",t.style.height=V+"px"),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(Y*j,J*j).floor()},this.setDrawingBufferSize=function(R,V,re){Y=R,J=V,j=re,t.width=Math.floor(R*re),t.height=Math.floor(V*re),this.setViewport(0,0,R,V)},this.getCurrentViewport=function(R){return R.copy(T)},this.getViewport=function(R){return R.copy(le)},this.setViewport=function(R,V,re,X){R.isVector4?le.set(R.x,R.y,R.z,R.w):le.set(R,V,re,X),U.viewport(T.copy(le).multiplyScalar(j).floor())},this.getScissor=function(R){return R.copy(H)},this.setScissor=function(R,V,re,X){R.isVector4?H.set(R.x,R.y,R.z,R.w):H.set(R,V,re,X),U.scissor(ee.copy(H).multiplyScalar(j).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(R){U.setScissorTest(W=R)},this.setOpaqueSort=function(R){K=R},this.setTransparentSort=function(R){he=R},this.getClearColor=function(R){return R.copy(q.getClearColor())},this.setClearColor=function(){q.setClearColor.apply(q,arguments)},this.getClearAlpha=function(){return q.getClearAlpha()},this.setClearAlpha=function(){q.setClearAlpha.apply(q,arguments)},this.clear=function(R=!0,V=!0,re=!0){let X=0;if(R){let se=!1;if(w!==null){const Ae=w.texture.format;se=Ae===Df||Ae===If||Ae===Lf}if(se){const Ae=w.texture.type,Ue=Ae===si||Ae===Qn||Ae===Bl||Ae===bi||Ae===Cf||Ae===Pf,Oe=q.getClearColor(),Be=q.getClearAlpha(),je=Oe.r,Ne=Oe.g,ke=Oe.b;Ue?(d[0]=je,d[1]=Ne,d[2]=ke,d[3]=Be,v.clearBufferuiv(v.COLOR,0,d)):(g[0]=je,g[1]=Ne,g[2]=ke,g[3]=Be,v.clearBufferiv(v.COLOR,0,g))}else X|=v.COLOR_BUFFER_BIT}V&&(X|=v.DEPTH_BUFFER_BIT),re&&(X|=v.STENCIL_BUFFER_BIT),v.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",Q,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),oe.dispose(),ce.dispose(),$.dispose(),ne.dispose(),te.dispose(),y.dispose(),me.dispose(),Fe.dispose(),N.dispose(),F.dispose(),F.removeEventListener("sessionstart",rt),F.removeEventListener("sessionend",vn),we&&(we.dispose(),we=null),Ut.stop()};function be(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const R=Z.autoReset,V=fe.enabled,re=fe.autoUpdate,X=fe.needsUpdate,se=fe.type;Ke(),Z.autoReset=R,fe.enabled=V,fe.autoUpdate=re,fe.needsUpdate=X,fe.type=se}function pe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ve(R){const V=R.target;V.removeEventListener("dispose",ve),Xe(V)}function Xe(R){et(R),$.remove(R)}function et(R){const V=$.get(R).programs;V!==void 0&&(V.forEach(function(re){N.releaseProgram(re)}),R.isShaderMaterial&&N.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,re,X,se,Ae){V===null&&(V=Je);const Ue=se.isMesh&&se.matrixWorld.determinant()<0,Oe=Ad(R,V,re,X,se);U.setMaterial(X,Ue);let Be=re.index,je=1;if(X.wireframe===!0){if(Be=E.getWireframeAttribute(re),Be===void 0)return;je=2}const Ne=re.drawRange,ke=re.attributes.position;let ut=Ne.start*je,ht=(Ne.start+Ne.count)*je;Ae!==null&&(ut=Math.max(ut,Ae.start*je),ht=Math.min(ht,(Ae.start+Ae.count)*je)),Be!==null?(ut=Math.max(ut,0),ht=Math.min(ht,Be.count)):ke!=null&&(ut=Math.max(ut,0),ht=Math.min(ht,ke.count));const Jt=ht-ut;if(Jt<0||Jt===1/0)return;me.setup(se,X,Oe,re,Be);let An,pt=ue;if(Be!==null&&(An=ye.get(Be),pt=Ee,pt.setIndex(An)),se.isMesh)X.wireframe===!0?(U.setLineWidth(X.wireframeLinewidth*Le()),pt.setMode(v.LINES)):pt.setMode(v.TRIANGLES);else if(se.isLine){let Ye=X.linewidth;Ye===void 0&&(Ye=1),U.setLineWidth(Ye*Le()),se.isLineSegments?pt.setMode(v.LINES):se.isLineLoop?pt.setMode(v.LINE_LOOP):pt.setMode(v.LINE_STRIP)}else se.isPoints?pt.setMode(v.POINTS):se.isSprite&&pt.setMode(v.TRIANGLES);if(se.isInstancedMesh)pt.renderInstances(ut,Jt,se.count);else if(re.isInstancedBufferGeometry){const Ye=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Fo=Math.min(re.instanceCount,Ye);pt.renderInstances(ut,Jt,Fo)}else pt.render(ut,Jt)},this.compile=function(R,V){function re(X,se,Ae){X.transparent===!0&&X.side===Zt&&X.forceSinglePass===!1?(X.side=Wt,X.needsUpdate=!0,ps(X,se,Ae),X.side=ai,X.needsUpdate=!0,ps(X,se,Ae),X.side=Zt):ps(X,se,Ae)}m=ce.get(R),m.init(),b.push(m),R.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights(x._useLegacyLights),R.traverse(function(X){const se=X.material;if(se)if(Array.isArray(se))for(let Ae=0;Ae<se.length;Ae++){const Ue=se[Ae];re(Ue,R,X)}else re(se,R,X)}),b.pop(),m=null};let it=null;function jt(R){it&&it(R)}function rt(){Ut.stop()}function vn(){Ut.start()}const Ut=new jf;Ut.setAnimationLoop(jt),typeof self<"u"&&Ut.setContext(self),this.setAnimationLoop=function(R){it=R,F.setAnimationLoop(R),R===null?Ut.stop():Ut.start()},F.addEventListener("sessionstart",rt),F.addEventListener("sessionend",vn),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),F.enabled===!0&&F.isPresenting===!0&&(F.cameraAutoUpdate===!0&&F.updateCamera(V),V=F.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,V,w),m=ce.get(R,b.length),m.init(),b.push(m),Ce.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),_e.setFromProjectionMatrix(Ce),Te=this.localClippingEnabled,Me=xe.init(this.clippingPlanes,Te),_=oe.get(R,p.length),_.init(),p.push(_),ic(R,V,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(K,he),this.info.render.frame++,Me===!0&&xe.beginShadows();const re=m.state.shadowsArray;if(fe.render(re,R,V),Me===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),q.render(_,R),m.setupLights(x._useLegacyLights),V.isArrayCamera){const X=V.cameras;for(let se=0,Ae=X.length;se<Ae;se++){const Ue=X[se];rc(_,R,Ue,Ue.viewport)}}else rc(_,R,V);w!==null&&(G.updateMultisampleRenderTarget(w),G.updateRenderTargetMipmap(w)),R.isScene===!0&&R.onAfterRender(x,R,V),me.resetDefaultState(),B=-1,S=null,b.pop(),b.length>0?m=b[b.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function ic(R,V,re,X){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)re=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||_e.intersectsSprite(R)){X&&ze.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ce);const Ue=y.update(R),Oe=R.material;Oe.visible&&_.push(R,Ue,Oe,re,ze.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||_e.intersectsObject(R))){const Ue=y.update(R),Oe=R.material;if(X&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ze.copy(R.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),ze.copy(Ue.boundingSphere.center)),ze.applyMatrix4(R.matrixWorld).applyMatrix4(Ce)),Array.isArray(Oe)){const Be=Ue.groups;for(let je=0,Ne=Be.length;je<Ne;je++){const ke=Be[je],ut=Oe[ke.materialIndex];ut&&ut.visible&&_.push(R,Ue,ut,re,ze.z,ke)}}else Oe.visible&&_.push(R,Ue,Oe,re,ze.z,null)}}const Ae=R.children;for(let Ue=0,Oe=Ae.length;Ue<Oe;Ue++)ic(Ae[Ue],V,re,X)}function rc(R,V,re,X){const se=R.opaque,Ae=R.transmissive,Ue=R.transparent;m.setupLightsView(re),Me===!0&&xe.setGlobalState(x.clippingPlanes,re),Ae.length>0&&wd(se,Ae,V,re),X&&U.viewport(T.copy(X)),se.length>0&&ds(se,V,re),Ae.length>0&&ds(Ae,V,re),Ue.length>0&&ds(Ue,V,re),U.buffers.depth.setTest(!0),U.buffers.depth.setMask(!0),U.buffers.color.setMask(!0),U.setPolygonOffset(!1)}function wd(R,V,re,X){const se=O.isWebGL2;we===null&&(we=new Ri(1,1,{generateMipmaps:!0,type:L.has("EXT_color_buffer_half_float")?is:si,minFilter:ns,samples:se?4:0})),x.getDrawingBufferSize(Pe),se?we.setSize(Pe.x,Pe.y):we.setSize(mo(Pe.x),mo(Pe.y));const Ae=x.getRenderTarget();x.setRenderTarget(we),x.getClearColor(z),k=x.getClearAlpha(),k<1&&x.setClearColor(16777215,.5),x.clear();const Ue=x.toneMapping;x.toneMapping=ri,ds(R,re,X),G.updateMultisampleRenderTarget(we),G.updateRenderTargetMipmap(we);let Oe=!1;for(let Be=0,je=V.length;Be<je;Be++){const Ne=V[Be],ke=Ne.object,ut=Ne.geometry,ht=Ne.material,Jt=Ne.group;if(ht.side===Zt&&ke.layers.test(X.layers)){const An=ht.side;ht.side=Wt,ht.needsUpdate=!0,sc(ke,re,X,ut,ht,Jt),ht.side=An,ht.needsUpdate=!0,Oe=!0}}Oe===!0&&(G.updateMultisampleRenderTarget(we),G.updateRenderTargetMipmap(we)),x.setRenderTarget(Ae),x.setClearColor(z,k),x.toneMapping=Ue}function ds(R,V,re){const X=V.isScene===!0?V.overrideMaterial:null;for(let se=0,Ae=R.length;se<Ae;se++){const Ue=R[se],Oe=Ue.object,Be=Ue.geometry,je=X===null?Ue.material:X,Ne=Ue.group;Oe.layers.test(re.layers)&&sc(Oe,V,re,Be,je,Ne)}}function sc(R,V,re,X,se,Ae){R.onBeforeRender(x,V,re,X,se,Ae),R.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),se.onBeforeRender(x,V,re,X,R,Ae),se.transparent===!0&&se.side===Zt&&se.forceSinglePass===!1?(se.side=Wt,se.needsUpdate=!0,x.renderBufferDirect(re,V,X,se,R,Ae),se.side=ai,se.needsUpdate=!0,x.renderBufferDirect(re,V,X,se,R,Ae),se.side=Zt):x.renderBufferDirect(re,V,X,se,R,Ae),R.onAfterRender(x,V,re,X,se,Ae)}function ps(R,V,re){V.isScene!==!0&&(V=Je);const X=$.get(R),se=m.state.lights,Ae=m.state.shadowsArray,Ue=se.state.version,Oe=N.getParameters(R,se.state,Ae,V,re),Be=N.getProgramCacheKey(Oe);let je=X.programs;X.environment=R.isMeshStandardMaterial?V.environment:null,X.fog=V.fog,X.envMap=(R.isMeshStandardMaterial?te:ne).get(R.envMap||X.environment),je===void 0&&(R.addEventListener("dispose",ve),je=new Map,X.programs=je);let Ne=je.get(Be);if(Ne!==void 0){if(X.currentProgram===Ne&&X.lightsStateVersion===Ue)return oc(R,Oe),Ne}else Oe.uniforms=N.getUniforms(R),R.onBuild(re,Oe,x),R.onBeforeCompile(Oe,x),Ne=N.acquireProgram(Oe,Be),je.set(Be,Ne),X.uniforms=Oe.uniforms;const ke=X.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ke.clippingPlanes=xe.uniform),oc(R,Oe),X.needsLights=Cd(R),X.lightsStateVersion=Ue,X.needsLights&&(ke.ambientLightColor.value=se.state.ambient,ke.lightProbe.value=se.state.probe,ke.directionalLights.value=se.state.directional,ke.directionalLightShadows.value=se.state.directionalShadow,ke.spotLights.value=se.state.spot,ke.spotLightShadows.value=se.state.spotShadow,ke.rectAreaLights.value=se.state.rectArea,ke.ltc_1.value=se.state.rectAreaLTC1,ke.ltc_2.value=se.state.rectAreaLTC2,ke.pointLights.value=se.state.point,ke.pointLightShadows.value=se.state.pointShadow,ke.hemisphereLights.value=se.state.hemi,ke.directionalShadowMap.value=se.state.directionalShadowMap,ke.directionalShadowMatrix.value=se.state.directionalShadowMatrix,ke.spotShadowMap.value=se.state.spotShadowMap,ke.spotLightMatrix.value=se.state.spotLightMatrix,ke.spotLightMap.value=se.state.spotLightMap,ke.pointShadowMap.value=se.state.pointShadowMap,ke.pointShadowMatrix.value=se.state.pointShadowMatrix);const ut=Ne.getUniforms(),ht=io.seqWithValue(ut.seq,ke);return X.currentProgram=Ne,X.uniformsList=ht,Ne}function oc(R,V){const re=$.get(R);re.outputColorSpace=V.outputColorSpace,re.instancing=V.instancing,re.instancingColor=V.instancingColor,re.skinning=V.skinning,re.morphTargets=V.morphTargets,re.morphNormals=V.morphNormals,re.morphColors=V.morphColors,re.morphTargetsCount=V.morphTargetsCount,re.numClippingPlanes=V.numClippingPlanes,re.numIntersection=V.numClipIntersection,re.vertexAlphas=V.vertexAlphas,re.vertexTangents=V.vertexTangents,re.toneMapping=V.toneMapping}function Ad(R,V,re,X,se){V.isScene!==!0&&(V=Je),G.resetTextureUnits();const Ae=V.fog,Ue=X.isMeshStandardMaterial?V.environment:null,Oe=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:bn,Be=(X.isMeshStandardMaterial?te:ne).get(X.envMap||Ue),je=X.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Ne=!!re.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),ke=!!re.morphAttributes.position,ut=!!re.morphAttributes.normal,ht=!!re.morphAttributes.color;let Jt=ri;X.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Jt=x.toneMapping);const An=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,pt=An!==void 0?An.length:0,Ye=$.get(X),Fo=m.state.lights;if(Me===!0&&(Te===!0||R!==S)){const qt=R===S&&X.id===B;xe.setState(X,R,qt)}let mt=!1;X.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Fo.state.version||Ye.outputColorSpace!==Oe||se.isInstancedMesh&&Ye.instancing===!1||!se.isInstancedMesh&&Ye.instancing===!0||se.isSkinnedMesh&&Ye.skinning===!1||!se.isSkinnedMesh&&Ye.skinning===!0||se.isInstancedMesh&&Ye.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&Ye.instancingColor===!1&&se.instanceColor!==null||Ye.envMap!==Be||X.fog===!0&&Ye.fog!==Ae||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==xe.numPlanes||Ye.numIntersection!==xe.numIntersection)||Ye.vertexAlphas!==je||Ye.vertexTangents!==Ne||Ye.morphTargets!==ke||Ye.morphNormals!==ut||Ye.morphColors!==ht||Ye.toneMapping!==Jt||O.isWebGL2===!0&&Ye.morphTargetsCount!==pt)&&(mt=!0):(mt=!0,Ye.__version=X.version);let ui=Ye.currentProgram;mt===!0&&(ui=ps(X,V,se));let ac=!1,Pr=!1,No=!1;const Ft=ui.getUniforms(),hi=Ye.uniforms;if(U.useProgram(ui.program)&&(ac=!0,Pr=!0,No=!0),X.id!==B&&(B=X.id,Pr=!0),ac||S!==R){Ft.setValue(v,"projectionMatrix",R.projectionMatrix),Ft.setValue(v,"viewMatrix",R.matrixWorldInverse);const qt=Ft.map.cameraPosition;qt!==void 0&&qt.setValue(v,ze.setFromMatrixPosition(R.matrixWorld)),O.logarithmicDepthBuffer&&Ft.setValue(v,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ft.setValue(v,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,Pr=!0,No=!0)}if(se.isSkinnedMesh){Ft.setOptional(v,se,"bindMatrix"),Ft.setOptional(v,se,"bindMatrixInverse");const qt=se.skeleton;qt&&(O.floatVertexTextures?(qt.boneTexture===null&&qt.computeBoneTexture(),Ft.setValue(v,"boneTexture",qt.boneTexture,G),Ft.setValue(v,"boneTextureSize",qt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Oo=re.morphAttributes;if((Oo.position!==void 0||Oo.normal!==void 0||Oo.color!==void 0&&O.isWebGL2===!0)&&D.update(se,re,ui),(Pr||Ye.receiveShadow!==se.receiveShadow)&&(Ye.receiveShadow=se.receiveShadow,Ft.setValue(v,"receiveShadow",se.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(hi.envMap.value=Be,hi.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),Pr&&(Ft.setValue(v,"toneMappingExposure",x.toneMappingExposure),Ye.needsLights&&Rd(hi,No),Ae&&X.fog===!0&&ie.refreshFogUniforms(hi,Ae),ie.refreshMaterialUniforms(hi,X,j,J,we),io.upload(v,Ye.uniformsList,hi,G)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(io.upload(v,Ye.uniformsList,hi,G),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ft.setValue(v,"center",se.center),Ft.setValue(v,"modelViewMatrix",se.modelViewMatrix),Ft.setValue(v,"normalMatrix",se.normalMatrix),Ft.setValue(v,"modelMatrix",se.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const qt=X.uniformsGroups;for(let Bo=0,Pd=qt.length;Bo<Pd;Bo++)if(O.isWebGL2){const lc=qt[Bo];Fe.update(lc,ui),Fe.bind(lc,ui)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ui}function Rd(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function Cd(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(R,V,re){$.get(R.texture).__webglTexture=V,$.get(R.depthTexture).__webglTexture=re;const X=$.get(R);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=re===void 0,X.__autoAllocateDepthBuffer||L.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,V){const re=$.get(R);re.__webglFramebuffer=V,re.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(R,V=0,re=0){w=R,A=V,P=re;let X=!0,se=null,Ae=!1,Ue=!1;if(R){const Be=$.get(R);Be.__useDefaultFramebuffer!==void 0?(U.bindFramebuffer(v.FRAMEBUFFER,null),X=!1):Be.__webglFramebuffer===void 0?G.setupRenderTarget(R):Be.__hasExternalTextures&&G.rebindTextures(R,$.get(R.texture).__webglTexture,$.get(R.depthTexture).__webglTexture);const je=R.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ue=!0);const Ne=$.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ne[V])?se=Ne[V][re]:se=Ne[V],Ae=!0):O.isWebGL2&&R.samples>0&&G.useMultisampledRTT(R)===!1?se=$.get(R).__webglMultisampledFramebuffer:Array.isArray(Ne)?se=Ne[re]:se=Ne,T.copy(R.viewport),ee.copy(R.scissor),ae=R.scissorTest}else T.copy(le).multiplyScalar(j).floor(),ee.copy(H).multiplyScalar(j).floor(),ae=W;if(U.bindFramebuffer(v.FRAMEBUFFER,se)&&O.drawBuffers&&X&&U.drawBuffers(R,se),U.viewport(T),U.scissor(ee),U.setScissorTest(ae),Ae){const Be=$.get(R.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+V,Be.__webglTexture,re)}else if(Ue){const Be=$.get(R.texture),je=V||0;v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,Be.__webglTexture,re||0,je)}B=-1},this.readRenderTargetPixels=function(R,V,re,X,se,Ae,Ue){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=$.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ue!==void 0&&(Oe=Oe[Ue]),Oe){U.bindFramebuffer(v.FRAMEBUFFER,Oe);try{const Be=R.texture,je=Be.format,Ne=Be.type;if(je!==nn&&de.convert(je)!==v.getParameter(v.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Ne===is&&(L.has("EXT_color_buffer_half_float")||O.isWebGL2&&L.has("EXT_color_buffer_float"));if(Ne!==si&&de.convert(Ne)!==v.getParameter(v.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===Bn&&(O.isWebGL2||L.has("OES_texture_float")||L.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-X&&re>=0&&re<=R.height-se&&v.readPixels(V,re,X,se,de.convert(je),de.convert(Ne),Ae)}finally{const Be=w!==null?$.get(w).__webglFramebuffer:null;U.bindFramebuffer(v.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(R,V,re=0){const X=Math.pow(2,-re),se=Math.floor(V.image.width*X),Ae=Math.floor(V.image.height*X);G.setTexture2D(V,0),v.copyTexSubImage2D(v.TEXTURE_2D,re,0,0,R.x,R.y,se,Ae),U.unbindTexture()},this.copyTextureToTexture=function(R,V,re,X=0){const se=V.image.width,Ae=V.image.height,Ue=de.convert(re.format),Oe=de.convert(re.type);G.setTexture2D(re,0),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,re.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,re.unpackAlignment),V.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,X,R.x,R.y,se,Ae,Ue,Oe,V.image.data):V.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,X,R.x,R.y,V.mipmaps[0].width,V.mipmaps[0].height,Ue,V.mipmaps[0].data):v.texSubImage2D(v.TEXTURE_2D,X,R.x,R.y,Ue,Oe,V.image),X===0&&re.generateMipmaps&&v.generateMipmap(v.TEXTURE_2D),U.unbindTexture()},this.copyTextureToTexture3D=function(R,V,re,X,se=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=R.max.x-R.min.x+1,Ue=R.max.y-R.min.y+1,Oe=R.max.z-R.min.z+1,Be=de.convert(X.format),je=de.convert(X.type);let Ne;if(X.isData3DTexture)G.setTexture3D(X,0),Ne=v.TEXTURE_3D;else if(X.isDataArrayTexture)G.setTexture2DArray(X,0),Ne=v.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,X.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,X.unpackAlignment);const ke=v.getParameter(v.UNPACK_ROW_LENGTH),ut=v.getParameter(v.UNPACK_IMAGE_HEIGHT),ht=v.getParameter(v.UNPACK_SKIP_PIXELS),Jt=v.getParameter(v.UNPACK_SKIP_ROWS),An=v.getParameter(v.UNPACK_SKIP_IMAGES),pt=re.isCompressedTexture?re.mipmaps[0]:re.image;v.pixelStorei(v.UNPACK_ROW_LENGTH,pt.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,pt.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,R.min.x),v.pixelStorei(v.UNPACK_SKIP_ROWS,R.min.y),v.pixelStorei(v.UNPACK_SKIP_IMAGES,R.min.z),re.isDataTexture||re.isData3DTexture?v.texSubImage3D(Ne,se,V.x,V.y,V.z,Ae,Ue,Oe,Be,je,pt.data):re.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),v.compressedTexSubImage3D(Ne,se,V.x,V.y,V.z,Ae,Ue,Oe,Be,pt.data)):v.texSubImage3D(Ne,se,V.x,V.y,V.z,Ae,Ue,Oe,Be,je,pt),v.pixelStorei(v.UNPACK_ROW_LENGTH,ke),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,ut),v.pixelStorei(v.UNPACK_SKIP_PIXELS,ht),v.pixelStorei(v.UNPACK_SKIP_ROWS,Jt),v.pixelStorei(v.UNPACK_SKIP_IMAGES,An),se===0&&X.generateMipmaps&&v.generateMipmap(Ne),U.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?G.setTextureCube(R,0):R.isData3DTexture?G.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?G.setTexture2DArray(R,0):G.setTexture2D(R,0),U.unbindTexture()},this.resetState=function(){A=0,P=0,w=null,U.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===nt?wi:Uf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===wi?nt:bn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class RM extends $f{}RM.prototype.isWebGL1Renderer=!0;class CM extends lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}const rh=new I,sh=new Qe,oh=new Qe,PM=new I,ah=new De,$i=new I,Sa=new Li,lh=new De,Ea=new Tr;class LM extends Tt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new De,this.bindMatrixInverse=new De,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new br),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)$i.fromBufferAttribute(t,i),this.applyBoneTransform(i,$i),this.boundingBox.expandByPoint($i)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Li),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)$i.fromBufferAttribute(t,i),this.applyBoneTransform(i,$i),this.boundingSphere.expandByPoint($i)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sa.copy(this.boundingSphere),Sa.applyMatrix4(r),e.ray.intersectsSphere(Sa)!==!1&&(lh.copy(r).invert(),Ea.copy(e.ray).applyMatrix4(lh),!(this.boundingBox!==null&&Ea.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ea)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Qe,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;sh.fromBufferAttribute(r.attributes.skinIndex,e),oh.fromBufferAttribute(r.attributes.skinWeight,e),rh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=oh.getComponent(s);if(o!==0){const a=sh.getComponent(s);ah.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(PM.copy(rh).applyMatrix4(ah),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class rl extends lt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class IM extends Rt{constructor(e=null,t=1,i=1,r,s,o,a,l,c=At,u=At,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ch=new De,DM=new De;class jl{constructor(e=[],t=[]){this.uuid=Gn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new De)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new De;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:DM;ch.multiplyMatrices(a,t[s]),ch.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new jl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Ff(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new IM(t,e,e,nn,Bn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new rl),this.bones.push(o),this.boneInverses.push(new De().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class Jf extends ci{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const uh=new I,hh=new I,fh=new De,ba=new Tr,ks=new Li;class Qf extends lt{constructor(e=new yt,t=new Jf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)uh.fromBufferAttribute(t,r-1),hh.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=uh.distanceTo(hh);e.setAttribute("lineDistance",new st(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ks.copy(i.boundingSphere),ks.applyMatrix4(r),ks.radius+=s,e.ray.intersectsSphere(ks)===!1)return;fh.copy(r).invert(),ba.copy(e.ray).applyMatrix4(fh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new I,u=new I,h=new I,f=new I,d=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const p=Math.max(0,o.start),b=Math.min(g.count,o.start+o.count);for(let x=p,M=b-1;x<M;x+=d){const A=g.getX(x),P=g.getX(x+1);if(c.fromBufferAttribute(m,A),u.fromBufferAttribute(m,P),ba.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const B=e.ray.origin.distanceTo(f);B<e.near||B>e.far||t.push({distance:B,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),b=Math.min(m.count,o.start+o.count);for(let x=p,M=b-1;x<M;x+=d){if(c.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),ba.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(f);P<e.near||P>e.far||t.push({distance:P,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const dh=new I,ph=new I;class Ta extends Qf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)dh.fromBufferAttribute(t,r),ph.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+dh.distanceTo(ph);e.setAttribute("lineDistance",new st(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ql extends ci{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const mh=new De,sl=new Tr,Vs=new Li,Gs=new I;let Lo=class extends lt{constructor(e=new yt,t=new ql){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vs.copy(i.boundingSphere),Vs.applyMatrix4(r),Vs.radius+=s,e.ray.intersectsSphere(Vs)===!1)return;mh.copy(r).invert(),sl.copy(e.ray).applyMatrix4(mh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);Gs.fromBufferAttribute(h,m),gh(Gs,m,l,r,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)Gs.fromBufferAttribute(h,g),gh(Gs,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function gh(n,e,t,i,r,s,o){const a=sl.distanceSqToPoint(n);if(a<t){const l=new I;sl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class _n{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],f=i[r+1]-u,d=(o-u)/f;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new ge:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new I,r=[],s=[],o=[],a=new I,l=new De;for(let d=0;d<=e;d++){const g=d/e;r[d]=this.getTangentAt(g,new I)}s[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(bt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(bt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Yl extends _n{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const i=t||new ge,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class UM extends Yl{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Kl(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,r(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const Ws=new I,wa=new Kl,Aa=new Kl,Ra=new Kl;class ed extends _n{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new I){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Ws.subVectors(r[0],r[1]).add(r[0]),c=Ws);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Ws.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Ws),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),wa.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,_,m),Aa.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,_,m),Ra.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(wa.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Aa.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Ra.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(wa.calc(l),Aa.calc(l),Ra.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new I().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function _h(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function FM(n,e){const t=1-n;return t*t*e}function NM(n,e){return 2*(1-n)*n*e}function OM(n,e){return n*n*e}function jr(n,e,t,i){return FM(n,e)+NM(n,t)+OM(n,i)}function BM(n,e){const t=1-n;return t*t*t*e}function zM(n,e){const t=1-n;return 3*t*t*n*e}function HM(n,e){return 3*(1-n)*n*n*e}function kM(n,e){return n*n*n*e}function qr(n,e,t,i,r){return BM(n,e)+zM(n,t)+HM(n,i)+kM(n,r)}class td extends _n{constructor(e=new ge,t=new ge,i=new ge,r=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ge){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(qr(e,r.x,s.x,o.x,a.x),qr(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class VM extends _n{constructor(e=new I,t=new I,i=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new I){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(qr(e,r.x,s.x,o.x,a.x),qr(e,r.y,s.y,o.y,a.y),qr(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Zl extends _n{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class GM extends _n{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nd extends _n{constructor(e=new ge,t=new ge,i=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ge){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(jr(e,r.x,s.x,o.x),jr(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class id extends _n{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(jr(e,r.x,s.x,o.x),jr(e,r.y,s.y,o.y),jr(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rd extends _n{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(_h(a,l.x,c.x,u.x,h.x),_h(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new ge().fromArray(r))}return this}}var sd=Object.freeze({__proto__:null,ArcCurve:UM,CatmullRomCurve3:ed,CubicBezierCurve:td,CubicBezierCurve3:VM,EllipseCurve:Yl,LineCurve:Zl,LineCurve3:GM,QuadraticBezierCurve:nd,QuadraticBezierCurve3:id,SplineCurve:rd});class WM extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Zl(t,e))}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new sd[r.type]().fromJSON(r))}return this}}class ol extends WM{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Zl(this.currentPoint.clone(),new ge(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new nd(this.currentPoint.clone(),new ge(e,t),new ge(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new td(this.currentPoint.clone(),new ge(e,t),new ge(i,r),new ge(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new rd(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const c=new Yl(e,t,i,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class hs extends yt{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],d=[];let g=0;const _=[],m=i/2;let p=0;b(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new st(h,3)),this.setAttribute("normal",new st(f,3)),this.setAttribute("uv",new st(d,2));function b(){const M=new I,A=new I;let P=0;const w=(t-e)/i;for(let B=0;B<=s;B++){const S=[],T=B/s,ee=T*(t-e)+e;for(let ae=0;ae<=r;ae++){const z=ae/r,k=z*l+a,Y=Math.sin(k),J=Math.cos(k);A.x=ee*Y,A.y=-T*i+m,A.z=ee*J,h.push(A.x,A.y,A.z),M.set(Y,w,J).normalize(),f.push(M.x,M.y,M.z),d.push(z,1-T),S.push(g++)}_.push(S)}for(let B=0;B<r;B++)for(let S=0;S<s;S++){const T=_[S][B],ee=_[S+1][B],ae=_[S+1][B+1],z=_[S][B+1];u.push(T,ee,z),u.push(ee,ae,z),P+=6}c.addGroup(p,P,0),p+=P}function x(M){const A=g,P=new ge,w=new I;let B=0;const S=M===!0?e:t,T=M===!0?1:-1;for(let ae=1;ae<=r;ae++)h.push(0,m*T,0),f.push(0,T,0),d.push(.5,.5),g++;const ee=g;for(let ae=0;ae<=r;ae++){const k=ae/r*l+a,Y=Math.cos(k),J=Math.sin(k);w.x=S*J,w.y=m*T,w.z=S*Y,h.push(w.x,w.y,w.z),f.push(0,T,0),P.x=Y*.5+.5,P.y=J*.5*T+.5,d.push(P.x,P.y),g++}for(let ae=0;ae<r;ae++){const z=A+ae,k=ee+ae;M===!0?u.push(k,k+1,z):u.push(k+1,k,z),B+=3}c.addGroup(p,B,M===!0?1:2),p+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $l extends hs{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new $l(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Xs=new I,js=new I,Ca=new I,qs=new tn;class Pa extends yt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(ur*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:p}=qs;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),qs.getNormal(Ca),h[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,h[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,h[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let b=0;b<3;b++){const x=(b+1)%3,M=h[b],A=h[x],P=qs[u[b]],w=qs[u[x]],B=`${M}_${A}`,S=`${A}_${M}`;S in f&&f[S]?(Ca.dot(f[S].normal)<=s&&(d.push(P.x,P.y,P.z),d.push(w.x,w.y,w.z)),f[S]=null):B in f||(f[B]={index0:c[b],index1:c[x],normal:Ca.clone()})}}for(const g in f)if(f[g]){const{index0:_,index1:m}=f[g];Xs.fromBufferAttribute(a,_),js.fromBufferAttribute(a,m),d.push(Xs.x,Xs.y,Xs.z),d.push(js.x,js.y,js.z)}this.setAttribute("position",new st(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ro extends ol{constructor(e){super(e),this.uuid=Gn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new ol().fromJSON(r))}return this}}const XM={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=od(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,f,d;if(i&&(s=ZM(n,e,s,t)),n.length>80*t){a=c=n[0],l=u=n[1];for(let g=t;g<r;g+=t)h=n[g],f=n[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return ss(s,o,t,a,l,d,0),o}};function od(n,e,t,i,r){let s,o;if(r===aS(n,e,t,i)>0)for(s=e;s<t;s+=i)o=vh(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=vh(s,n[s],n[s+1],o);return o&&Io(o,o.next)&&(as(o),o=o.next),o}function Ci(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Io(t,t.next)||ct(t.prev,t,t.next)===0)){if(as(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ss(n,e,t,i,r,s,o){if(!n)return;!o&&s&&tS(n,i,r,s);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?qM(n,i,r,s):jM(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),as(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=YM(Ci(n),e,t),ss(n,e,t,i,r,s,2)):o===2&&KM(n,e,t,i,r,s):ss(Ci(n),e,t,i,r,s,1);break}}}function jM(n){const e=n.prev,t=n,i=n.next;if(ct(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=r>s?r>o?r:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&sr(r,a,s,l,o,c,g.x,g.y)&&ct(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function qM(n,e,t,i){const r=n.prev,s=n,o=n.next;if(ct(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,_=a>l?a>c?a:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,p=al(d,g,e,t,i),b=al(_,m,e,t,i);let x=n.prevZ,M=n.nextZ;for(;x&&x.z>=p&&M&&M.z<=b;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&sr(a,u,l,h,c,f,x.x,x.y)&&ct(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==r&&M!==o&&sr(a,u,l,h,c,f,M.x,M.y)&&ct(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&sr(a,u,l,h,c,f,x.x,x.y)&&ct(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=b;){if(M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==r&&M!==o&&sr(a,u,l,h,c,f,M.x,M.y)&&ct(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function YM(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!Io(r,s)&&ad(r,i,i.next,s)&&os(r,s)&&os(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),as(i),as(i.next),i=n=s),i=i.next}while(i!==n);return Ci(i)}function KM(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&rS(o,a)){let l=ld(o,a);o=Ci(o,o.next),l=Ci(l,l.next),ss(o,e,t,i,r,s,0),ss(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function ZM(n,e,t,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=od(n,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(iS(c));for(r.sort($M),s=0;s<r.length;s++)t=JM(r[s],t);return t}function $M(n,e){return n.x-e.x}function JM(n,e){const t=QM(n,e);if(!t)return e;const i=ld(t,n);return Ci(i,i.next),Ci(t,t.next)}function QM(n,e){let t=e,i=-1/0,r;const s=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>i&&(i=f,r=t.x<t.next.x?t:t.next,f===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,h;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&sr(o<c?s:i,o,l,c,o<c?i:s,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(s-t.x),os(t,n)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&eS(r,t)))&&(r=t,u=h)),t=t.next;while(t!==a);return r}function eS(n,e){return ct(n.prev,n,e.prev)<0&&ct(e.next,n,n.next)<0}function tS(n,e,t,i){let r=n;do r.z===0&&(r.z=al(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,nS(r)}function nS(n){let e,t,i,r,s,o,a,l,c=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,c*=2}while(o>1);return n}function al(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function iS(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function sr(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function rS(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!sS(n,e)&&(os(n,e)&&os(e,n)&&oS(n,e)&&(ct(n.prev,n,e.prev)||ct(n,e.prev,e))||Io(n,e)&&ct(n.prev,n,n.next)>0&&ct(e.prev,e,e.next)>0)}function ct(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Io(n,e){return n.x===e.x&&n.y===e.y}function ad(n,e,t,i){const r=Ks(ct(n,e,t)),s=Ks(ct(n,e,i)),o=Ks(ct(t,i,n)),a=Ks(ct(t,i,e));return!!(r!==s&&o!==a||r===0&&Ys(n,t,e)||s===0&&Ys(n,i,e)||o===0&&Ys(t,n,i)||a===0&&Ys(t,e,i))}function Ys(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ks(n){return n>0?1:n<0?-1:0}function sS(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&ad(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function os(n,e){return ct(n.prev,n,n.next)<0?ct(n,e,n.next)>=0&&ct(n,n.prev,e)>=0:ct(n,e,n.prev)<0||ct(n,n.next,e)<0}function oS(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function ld(n,e){const t=new ll(n.i,n.x,n.y),i=new ll(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function vh(n,e,t,i){const r=new ll(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function as(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ll(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function aS(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class fr{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return fr.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];xh(e),yh(i,e);let o=e.length;t.forEach(xh);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,yh(i,t[l]);const a=XM.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function xh(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function yh(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Jl extends yt{constructor(e=new ro([new ge(.5,.5),new ge(-.5,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new st(r,3)),this.setAttribute("uv",new st(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:lS;let x,M=!1,A,P,w,B;p&&(x=p.getSpacedPoints(u),M=!0,f=!1,A=p.computeFrenetFrames(u,!1),P=new I,w=new I,B=new I),f||(m=0,d=0,g=0,_=0);const S=a.extractPoints(c);let T=S.shape;const ee=S.holes;if(!fr.isClockWise(T)){T=T.reverse();for(let v=0,C=ee.length;v<C;v++){const L=ee[v];fr.isClockWise(L)&&(ee[v]=L.reverse())}}const z=fr.triangulateShape(T,ee),k=T;for(let v=0,C=ee.length;v<C;v++){const L=ee[v];T=T.concat(L)}function Y(v,C,L){return C||console.error("THREE.ExtrudeGeometry: vec does not exist"),v.clone().addScaledVector(C,L)}const J=T.length,j=z.length;function K(v,C,L){let O,U,Z;const $=v.x-C.x,G=v.y-C.y,ne=L.x-v.x,te=L.y-v.y,ye=$*$+G*G,E=$*te-G*ne;if(Math.abs(E)>Number.EPSILON){const y=Math.sqrt(ye),N=Math.sqrt(ne*ne+te*te),ie=C.x-G/y,oe=C.y+$/y,ce=L.x-te/N,xe=L.y+ne/N,fe=((ce-ie)*te-(xe-oe)*ne)/($*te-G*ne);O=ie+$*fe-v.x,U=oe+G*fe-v.y;const q=O*O+U*U;if(q<=2)return new ge(O,U);Z=Math.sqrt(q/2)}else{let y=!1;$>Number.EPSILON?ne>Number.EPSILON&&(y=!0):$<-Number.EPSILON?ne<-Number.EPSILON&&(y=!0):Math.sign(G)===Math.sign(te)&&(y=!0),y?(O=-G,U=$,Z=Math.sqrt(ye)):(O=$,U=G,Z=Math.sqrt(ye/2))}return new ge(O/Z,U/Z)}const he=[];for(let v=0,C=k.length,L=C-1,O=v+1;v<C;v++,L++,O++)L===C&&(L=0),O===C&&(O=0),he[v]=K(k[v],k[L],k[O]);const le=[];let H,W=he.concat();for(let v=0,C=ee.length;v<C;v++){const L=ee[v];H=[];for(let O=0,U=L.length,Z=U-1,$=O+1;O<U;O++,Z++,$++)Z===U&&(Z=0),$===U&&($=0),H[O]=K(L[O],L[Z],L[$]);le.push(H),W=W.concat(H)}for(let v=0;v<m;v++){const C=v/m,L=d*Math.cos(C*Math.PI/2),O=g*Math.sin(C*Math.PI/2)+_;for(let U=0,Z=k.length;U<Z;U++){const $=Y(k[U],he[U],O);Ce($.x,$.y,-L)}for(let U=0,Z=ee.length;U<Z;U++){const $=ee[U];H=le[U];for(let G=0,ne=$.length;G<ne;G++){const te=Y($[G],H[G],O);Ce(te.x,te.y,-L)}}}const _e=g+_;for(let v=0;v<J;v++){const C=f?Y(T[v],W[v],_e):T[v];M?(w.copy(A.normals[0]).multiplyScalar(C.x),P.copy(A.binormals[0]).multiplyScalar(C.y),B.copy(x[0]).add(w).add(P),Ce(B.x,B.y,B.z)):Ce(C.x,C.y,0)}for(let v=1;v<=u;v++)for(let C=0;C<J;C++){const L=f?Y(T[C],W[C],_e):T[C];M?(w.copy(A.normals[v]).multiplyScalar(L.x),P.copy(A.binormals[v]).multiplyScalar(L.y),B.copy(x[v]).add(w).add(P),Ce(B.x,B.y,B.z)):Ce(L.x,L.y,h/u*v)}for(let v=m-1;v>=0;v--){const C=v/m,L=d*Math.cos(C*Math.PI/2),O=g*Math.sin(C*Math.PI/2)+_;for(let U=0,Z=k.length;U<Z;U++){const $=Y(k[U],he[U],O);Ce($.x,$.y,h+L)}for(let U=0,Z=ee.length;U<Z;U++){const $=ee[U];H=le[U];for(let G=0,ne=$.length;G<ne;G++){const te=Y($[G],H[G],O);M?Ce(te.x,te.y+x[u-1].y,x[u-1].x+L):Ce(te.x,te.y,h+L)}}}Me(),Te();function Me(){const v=r.length/3;if(f){let C=0,L=J*C;for(let O=0;O<j;O++){const U=z[O];Pe(U[2]+L,U[1]+L,U[0]+L)}C=u+m*2,L=J*C;for(let O=0;O<j;O++){const U=z[O];Pe(U[0]+L,U[1]+L,U[2]+L)}}else{for(let C=0;C<j;C++){const L=z[C];Pe(L[2],L[1],L[0])}for(let C=0;C<j;C++){const L=z[C];Pe(L[0]+J*u,L[1]+J*u,L[2]+J*u)}}i.addGroup(v,r.length/3-v,0)}function Te(){const v=r.length/3;let C=0;we(k,C),C+=k.length;for(let L=0,O=ee.length;L<O;L++){const U=ee[L];we(U,C),C+=U.length}i.addGroup(v,r.length/3-v,1)}function we(v,C){let L=v.length;for(;--L>=0;){const O=L;let U=L-1;U<0&&(U=v.length-1);for(let Z=0,$=u+m*2;Z<$;Z++){const G=J*Z,ne=J*(Z+1),te=C+O+G,ye=C+U+G,E=C+U+ne,y=C+O+ne;ze(te,ye,E,y)}}}function Ce(v,C,L){l.push(v),l.push(C),l.push(L)}function Pe(v,C,L){Je(v),Je(C),Je(L);const O=r.length/3,U=b.generateTopUV(i,r,O-3,O-2,O-1);Le(U[0]),Le(U[1]),Le(U[2])}function ze(v,C,L,O){Je(v),Je(C),Je(O),Je(C),Je(L),Je(O);const U=r.length/3,Z=b.generateSideWallUV(i,r,U-6,U-3,U-2,U-1);Le(Z[0]),Le(Z[1]),Le(Z[3]),Le(Z[1]),Le(Z[2]),Le(Z[3])}function Je(v){r.push(l[v*3+0]),r.push(l[v*3+1]),r.push(l[v*3+2])}function Le(v){s.push(v.x),s.push(v.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return cS(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new sd[r.type]().fromJSON(r)),new Jl(i,e.options)}}const lS={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new ge(s,o),new ge(a,l),new ge(c,u)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],f=e[r*3],d=e[r*3+1],g=e[r*3+2],_=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ge(o,1-l),new ge(c,1-h),new ge(f,1-g),new ge(_,1-p)]:[new ge(a,1-l),new ge(u,1-h),new ge(d,1-g),new ge(m,1-p)]}};function cS(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class La extends ci{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Re(16777215),this.specular=new Re(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zl,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class uS extends ci{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zl,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Kn(n,e,t){return cd(n)?new n.constructor(n.subarray(e,t!==void 0?t:n.length)):n.slice(e,t)}function Zs(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function cd(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function hS(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function Mh(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function ud(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class Do{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class fS extends Do{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gu,endingEnd:gu}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case _u:s=e,a=2*t-i;break;case vu:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case _u:o=e,l=2*i-t;break;case vu:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-t)/(r-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,b=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-d)*m+(1.5+d)*_+.5*g,M=d*m-d*_;for(let A=0;A!==a;++A)s[A]=p*o[u+A]+b*o[c+A]+x*o[l+A]+M*o[h+A];return s}}class dS extends Do{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class pS extends Do{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class wn{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Zs(t,this.TimeBufferType),this.values=Zs(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Zs(e.times,Array),values:Zs(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new pS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new dS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fS(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ho:t=this.InterpolantFactoryMethodDiscrete;break;case fo:t=this.InterpolantFactoryMethodLinear;break;case Qo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ho;case this.InterpolantFactoryMethodLinear:return fo;case this.InterpolantFactoryMethodSmooth:return Qo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=Kn(i,s,o),this.values=Kn(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&cd(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=Kn(this.times),t=Kn(this.values),i=this.getValueSize(),r=this.getInterpolation()===Qo,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const h=a*i,f=h-i,d=h+i;for(let g=0;g!==i;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=Kn(e,0,o),this.values=Kn(t,0,o*i)):(this.times=e,this.values=t),this}clone(){const e=Kn(this.times,0),t=Kn(this.values,0),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=fo;class Ar extends wn{}Ar.prototype.ValueTypeName="bool";Ar.prototype.ValueBufferType=Array;Ar.prototype.DefaultInterpolation=ho;Ar.prototype.InterpolantFactoryMethodLinear=void 0;Ar.prototype.InterpolantFactoryMethodSmooth=void 0;class hd extends wn{}hd.prototype.ValueTypeName="color";class ls extends wn{}ls.prototype.ValueTypeName="number";class mS extends Do{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)sn.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Rr extends wn{InterpolantFactoryMethodLinear(e){return new mS(this.times,this.values,this.getValueSize(),e)}}Rr.prototype.ValueTypeName="quaternion";Rr.prototype.DefaultInterpolation=fo;Rr.prototype.InterpolantFactoryMethodSmooth=void 0;class Cr extends wn{}Cr.prototype.ValueTypeName="string";Cr.prototype.ValueBufferType=Array;Cr.prototype.DefaultInterpolation=ho;Cr.prototype.InterpolantFactoryMethodLinear=void 0;Cr.prototype.InterpolantFactoryMethodSmooth=void 0;class cs extends wn{}cs.prototype.ValueTypeName="vector";class gS{constructor(e,t=-1,i,r=Yg){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Gn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(vS(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(wn.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=hS(l);l=Mh(l,1,u),c=Mh(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new ls(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=r[h];f||(r[h]=f=[]),f.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,f,d,g,_){if(d.length!==0){const m=[],p=[];ud(d,m,p,g),m.length!==0&&_.push(new h(f,m,p))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let b=0;b!==f[g].morphTargets.length;++b){const x=f[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}r.push(new ls(".morphTargetInfluence["+_+"]",m,p))}l=d.length*o}else{const d=".bones["+t[h].name+"]";i(cs,d+".position",f,"pos",r),i(Rr,d+".quaternion",f,"rot",r),i(cs,d+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function _S(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ls;case"vector":case"vector2":case"vector3":case"vector4":return cs;case"color":return hd;case"quaternion":return Rr;case"bool":case"boolean":return Ar;case"string":return Cr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function vS(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=_S(n.type);if(n.times===void 0){const t=[],i=[];ud(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const go={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class xS{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const yS=new xS;class li{constructor(e){this.manager=e!==void 0?e:yS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}li.DEFAULT_MATERIAL_NAME="__DEFAULT";const Un={};class MS extends Error{constructor(e,t){super(e),this.response=t}}class fd extends li{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=go.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Un[e]!==void 0){Un[e].push({onLoad:t,onProgress:i,onError:r});return}Un[e]=[],Un[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Un[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){b();function b(){h.read().then(({done:x,value:M})=>{if(x)p.close();else{_+=M.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let P=0,w=u.length;P<w;P++){const B=u[P];B.onProgress&&B.onProgress(A)}p.enqueue(M),b()}})}}});return new Response(m)}else throw new MS(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{go.add(e,c);const u=Un[e];delete Un[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Un[e];if(u===void 0)throw this.manager.itemError(e),c;delete Un[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class SS extends li{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=go.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=rs("img");function l(){u(),go.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Ql extends li{constructor(e){super(e)}load(e,t,i,r){const s=new Rt,o=new SS(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Uo extends lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ia=new De,Sh=new I,Eh=new I;class ec{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gl,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Sh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Sh),Eh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Eh),t.updateMatrixWorld(),Ia.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ia),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ia)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ES extends ec{constructor(){super(new zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=xr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class bS extends Uo{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new ES}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const bh=new De,Nr=new I,Da=new I;class TS extends ec{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ge(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Nr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Nr),Da.copy(i.position),Da.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Da),i.updateMatrixWorld(),r.makeTranslation(-Nr.x,-Nr.y,-Nr.z),bh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bh)}}class Th extends Uo{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new TS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class wS extends ec{constructor(){super(new Wl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dd extends Uo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.shadow=new wS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class pd extends Uo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class AS{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class RS{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=wh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=wh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function wh(){return(typeof performance>"u"?Date:performance).now()}const tc="\\[\\]\\.:\\/",CS=new RegExp("["+tc+"]","g"),nc="[^"+tc+"]",PS="[^"+tc.replace("\\.","")+"]",LS=/((?:WC+[\/:])*)/.source.replace("WC",nc),IS=/(WCOD+)?/.source.replace("WCOD",PS),DS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nc),US=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nc),FS=new RegExp("^"+LS+IS+DS+US+"$"),NS=["material","materials","bones","map"];class OS{constructor(e,t,i){const r=i||$e.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class $e{constructor(e,t,i){this.path=t,this.parsedPath=i||$e.parseTrackName(t),this.node=$e.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new $e.Composite(e,t,i):new $e(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(CS,"")}static parseTrackName(e){const t=FS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);NS.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=$e.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}$e.Composite=OS;$e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$e.prototype.GetterByBindingType=[$e.prototype._getValue_direct,$e.prototype._getValue_array,$e.prototype._getValue_arrayElement,$e.prototype._getValue_toArray];$e.prototype.SetterByBindingTypeAndVersioning=[[$e.prototype._setValue_direct,$e.prototype._setValue_direct_setNeedsUpdate,$e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_array,$e.prototype._setValue_array_setNeedsUpdate,$e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_arrayElement,$e.prototype._setValue_arrayElement_setNeedsUpdate,$e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_fromArray,$e.prototype._setValue_fromArray_setNeedsUpdate,$e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class BS{constructor(e,t,i=0,r=1/0){this.ray=new Tr(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new kl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return cl(e,this,i,t),i.sort(Ah),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)cl(e[r],this,i,t);return i.sort(Ah),i}}function Ah(n,e){return n.distance-e.distance}function cl(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)cl(r[s],e,t,!0)}}class Rh{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class zS{constructor(){this.type="ShapePath",this.color=new Re,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new ol,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,s,o){return this.currentPath.bezierCurveTo(e,t,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const b=[];for(let x=0,M=p.length;x<M;x++){const A=p[x],P=new ro;P.curves=A.curves,b.push(P)}return b}function i(p,b){const x=b.length;let M=!1;for(let A=x-1,P=0;P<x;A=P++){let w=b[A],B=b[P],S=B.x-w.x,T=B.y-w.y;if(Math.abs(T)>Number.EPSILON){if(T<0&&(w=b[P],S=-S,B=b[A],T=-T),p.y<w.y||p.y>B.y)continue;if(p.y===w.y){if(p.x===w.x)return!0}else{const ee=T*(p.x-w.x)-S*(p.y-w.y);if(ee===0)return!0;if(ee<0)continue;M=!M}}else{if(p.y!==w.y)continue;if(B.x<=p.x&&p.x<=w.x||w.x<=p.x&&p.x<=B.x)return!0}}return M}const r=fr.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new ro,l.curves=a.curves,c.push(l),c;let u=!r(s[0].getPoints());u=e?!u:u;const h=[],f=[];let d=[],g=0,_;f[g]=void 0,d[g]=[];for(let p=0,b=s.length;p<b;p++)a=s[p],_=a.getPoints(),o=r(_),o=e?!o:o,o?(!u&&f[g]&&g++,f[g]={s:new ro,p:_},f[g].s.curves=a.curves,u&&g++,d[g]=[]):d[g].push({h:a,p:_[0]});if(!f[0])return t(s);if(f.length>1){let p=!1,b=0;for(let x=0,M=f.length;x<M;x++)h[x]=[];for(let x=0,M=f.length;x<M;x++){const A=d[x];for(let P=0;P<A.length;P++){const w=A[P];let B=!0;for(let S=0;S<f.length;S++)i(w.p,f[S].p)&&(x!==S&&b++,B?(B=!1,h[S].push(w)):p=!0);B&&h[x].push(w)}}b>0&&p===!1&&(d=h)}let m;for(let p=0,b=f.length;p<b;p++){l=f[p].s,c.push(l),m=d[p];for(let x=0,M=m.length;x<M;x++)l.holes.push(m[x].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ol}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ol);/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var Ch=function(n){return URL.createObjectURL(new Blob([n],{type:"text/javascript"}))};try{URL.revokeObjectURL(Ch(""))}catch{Ch=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)}}var rn=Uint8Array,ei=Uint16Array,ul=Uint32Array,md=new rn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),gd=new rn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),HS=new rn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),_d=function(n,e){for(var t=new ei(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var r=new ul(t[30]),i=1;i<30;++i)for(var s=t[i];s<t[i+1];++s)r[s]=s-t[i]<<5|i;return[t,r]},vd=_d(md,2),xd=vd[0],kS=vd[1];xd[28]=258,kS[258]=28;var VS=_d(gd,0),GS=VS[0],hl=new ei(32768);for(var ot=0;ot<32768;++ot){var Zn=(ot&43690)>>>1|(ot&21845)<<1;Zn=(Zn&52428)>>>2|(Zn&13107)<<2,Zn=(Zn&61680)>>>4|(Zn&3855)<<4,hl[ot]=((Zn&65280)>>>8|(Zn&255)<<8)>>>1}var Yr=function(n,e,t){for(var i=n.length,r=0,s=new ei(e);r<i;++r)++s[n[r]-1];var o=new ei(e);for(r=0;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(t){a=new ei(1<<e);var l=15-e;for(r=0;r<i;++r)if(n[r])for(var c=r<<4|n[r],u=e-n[r],h=o[n[r]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)a[hl[h]>>>l]=c}else for(a=new ei(i),r=0;r<i;++r)n[r]&&(a[r]=hl[o[n[r]-1]++]>>>15-n[r]);return a},fs=new rn(288);for(var ot=0;ot<144;++ot)fs[ot]=8;for(var ot=144;ot<256;++ot)fs[ot]=9;for(var ot=256;ot<280;++ot)fs[ot]=7;for(var ot=280;ot<288;++ot)fs[ot]=8;var yd=new rn(32);for(var ot=0;ot<32;++ot)yd[ot]=5;var WS=Yr(fs,9,1),XS=Yr(yd,5,1),Ua=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},hn=function(n,e,t){var i=e/8|0;return(n[i]|n[i+1]<<8)>>(e&7)&t},Fa=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},jS=function(n){return(n/8|0)+(n&7&&1)},qS=function(n,e,t){(e==null||e<0)&&(e=0),(t==null||t>n.length)&&(t=n.length);var i=new(n instanceof ei?ei:n instanceof ul?ul:rn)(t-e);return i.set(n.subarray(e,t)),i},YS=function(n,e,t){var i=n.length;if(!i||t&&!t.l&&i<5)return e||new rn(0);var r=!e||t,s=!t||t.i;t||(t={}),e||(e=new rn(i*3));var o=function(we){var Ce=e.length;if(we>Ce){var Pe=new rn(Math.max(Ce*2,we));Pe.set(e),e=Pe}},a=t.f||0,l=t.p||0,c=t.b||0,u=t.l,h=t.d,f=t.m,d=t.n,g=i*8;do{if(!u){t.f=a=hn(n,l,1);var _=hn(n,l+1,3);if(l+=3,_)if(_==1)u=WS,h=XS,f=9,d=5;else if(_==2){var x=hn(n,l,31)+257,M=hn(n,l+10,15)+4,A=x+hn(n,l+5,31)+1;l+=14;for(var P=new rn(A),w=new rn(19),B=0;B<M;++B)w[HS[B]]=hn(n,l+B*3,7);l+=M*3;for(var S=Ua(w),T=(1<<S)-1,ee=Yr(w,S,1),B=0;B<A;){var ae=ee[hn(n,l,T)];l+=ae&15;var m=ae>>>4;if(m<16)P[B++]=m;else{var z=0,k=0;for(m==16?(k=3+hn(n,l,3),l+=2,z=P[B-1]):m==17?(k=3+hn(n,l,7),l+=3):m==18&&(k=11+hn(n,l,127),l+=7);k--;)P[B++]=z}}var Y=P.subarray(0,x),J=P.subarray(x);f=Ua(Y),d=Ua(J),u=Yr(Y,f,1),h=Yr(J,d,1)}else throw"invalid block type";else{var m=jS(l)+4,p=n[m-4]|n[m-3]<<8,b=m+p;if(b>i){if(s)throw"unexpected EOF";break}r&&o(c+p),e.set(n.subarray(m,b),c),t.b=c+=p,t.p=l=b*8;continue}if(l>g){if(s)throw"unexpected EOF";break}}r&&o(c+131072);for(var j=(1<<f)-1,K=(1<<d)-1,he=l;;he=l){var z=u[Fa(n,l)&j],le=z>>>4;if(l+=z&15,l>g){if(s)throw"unexpected EOF";break}if(!z)throw"invalid length/literal";if(le<256)e[c++]=le;else if(le==256){he=l,u=null;break}else{var H=le-254;if(le>264){var B=le-257,W=md[B];H=hn(n,l,(1<<W)-1)+xd[B],l+=W}var _e=h[Fa(n,l)&K],Me=_e>>>4;if(!_e)throw"invalid distance";l+=_e&15;var J=GS[Me];if(Me>3){var W=gd[Me];J+=Fa(n,l)&(1<<W)-1,l+=W}if(l>g){if(s)throw"unexpected EOF";break}r&&o(c+131072);for(var Te=c+H;c<Te;c+=4)e[c]=e[c-J],e[c+1]=e[c+1-J],e[c+2]=e[c+2-J],e[c+3]=e[c+3-J];c=Te}}t.l=u,t.p=he,t.b=c,u&&(a=1,t.m=f,t.d=h,t.n=d)}while(!a);return c==e.length?e:qS(e,0,c)},KS=new rn(0),ZS=function(n){if((n[0]&15)!=8||n[0]>>>4>7||(n[0]<<8|n[1])%31)throw"invalid zlib data";if(n[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function $S(n,e){return YS((ZS(n),n.subarray(2,-4)),e)}var JS=typeof TextDecoder<"u"&&new TextDecoder,QS=0;try{JS.decode(KS,{stream:!0}),QS=1}catch{}function Md(n,e,t){const i=t.length-n-1;if(e>=t[i])return i-1;if(e<=t[n])return n;let r=n,s=i,o=Math.floor((r+s)/2);for(;e<t[o]||e>=t[o+1];)e<t[o]?s=o:r=o,o=Math.floor((r+s)/2);return o}function eE(n,e,t,i){const r=[],s=[],o=[];r[0]=1;for(let a=1;a<=t;++a){s[a]=e-i[n+1-a],o[a]=i[n+a]-e;let l=0;for(let c=0;c<a;++c){const u=o[c+1],h=s[a-c],f=r[c]/(u+h);r[c]=l+u*f,l=h*f}r[a]=l}return r}function tE(n,e,t,i){const r=Md(n,i,e),s=eE(r,i,n,e),o=new Qe(0,0,0,0);for(let a=0;a<=n;++a){const l=t[r-n+a],c=s[a],u=l.w*c;o.x+=l.x*u,o.y+=l.y*u,o.z+=l.z*u,o.w+=l.w*c}return o}function nE(n,e,t,i,r){const s=[];for(let h=0;h<=t;++h)s[h]=0;const o=[];for(let h=0;h<=i;++h)o[h]=s.slice(0);const a=[];for(let h=0;h<=t;++h)a[h]=s.slice(0);a[0][0]=1;const l=s.slice(0),c=s.slice(0);for(let h=1;h<=t;++h){l[h]=e-r[n+1-h],c[h]=r[n+h]-e;let f=0;for(let d=0;d<h;++d){const g=c[d+1],_=l[h-d];a[h][d]=g+_;const m=a[d][h-1]/a[h][d];a[d][h]=f+g*m,f=_*m}a[h][h]=f}for(let h=0;h<=t;++h)o[0][h]=a[h][t];for(let h=0;h<=t;++h){let f=0,d=1;const g=[];for(let _=0;_<=t;++_)g[_]=s.slice(0);g[0][0]=1;for(let _=1;_<=i;++_){let m=0;const p=h-_,b=t-_;h>=_&&(g[d][0]=g[f][0]/a[b+1][p],m=g[d][0]*a[p][b]);const x=p>=-1?1:-p,M=h-1<=b?_-1:t-h;for(let P=x;P<=M;++P)g[d][P]=(g[f][P]-g[f][P-1])/a[b+1][p+P],m+=g[d][P]*a[p+P][b];h<=b&&(g[d][_]=-g[f][_-1]/a[b+1][h],m+=g[d][_]*a[h][b]),o[_][h]=m;const A=f;f=d,d=A}}let u=t;for(let h=1;h<=i;++h){for(let f=0;f<=t;++f)o[h][f]*=u;u*=t-h}return o}function iE(n,e,t,i,r){const s=r<n?r:n,o=[],a=Md(n,i,e),l=nE(a,i,n,s,e),c=[];for(let u=0;u<t.length;++u){const h=t[u].clone(),f=h.w;h.x*=f,h.y*=f,h.z*=f,c[u]=h}for(let u=0;u<=s;++u){const h=c[a-n].clone().multiplyScalar(l[u][0]);for(let f=1;f<=n;++f)h.add(c[a-n+f].clone().multiplyScalar(l[u][f]));o[u]=h}for(let u=s+1;u<=r+1;++u)o[u]=new Qe(0,0,0);return o}function rE(n,e){let t=1;for(let r=2;r<=n;++r)t*=r;let i=1;for(let r=2;r<=e;++r)i*=r;for(let r=2;r<=n-e;++r)i*=r;return t/i}function sE(n){const e=n.length,t=[],i=[];for(let s=0;s<e;++s){const o=n[s];t[s]=new I(o.x,o.y,o.z),i[s]=o.w}const r=[];for(let s=0;s<e;++s){const o=t[s].clone();for(let a=1;a<=s;++a)o.sub(r[s-a].clone().multiplyScalar(rE(s,a)*i[a]));r[s]=o.divideScalar(i[0])}return r}function oE(n,e,t,i,r){const s=iE(n,e,t,i,r);return sE(s)}class aE extends _n{constructor(e,t,i,r,s){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=r||0,this.endKnot=s||this.knots.length-1;for(let o=0;o<i.length;++o){const a=i[o];this.controlPoints[o]=new Qe(a.x,a.y,a.z,a.w)}}getPoint(e,t=new I){const i=t,r=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),s=tE(this.degree,this.knots,this.controlPoints,r);return s.w!==1&&s.divideScalar(s.w),i.set(s.x,s.y,s.z)}getTangent(e,t=new I){const i=t,r=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),s=oE(this.degree,this.knots,this.controlPoints,r,1);return i.copy(s[1]).normalize(),i}}let qe,dt,kt;class lE extends li{constructor(e){super(e)}load(e,t,i,r){const s=this,o=s.path===""?AS.extractUrlBase(e):s.path,a=new fd(this.manager);a.setPath(s.path),a.setResponseType("arraybuffer"),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(l){try{t(s.parse(l,o))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},i,r)}parse(e,t){if(pE(e))qe=new dE().parse(e);else{const r=Td(e);if(!mE(r))throw new Error("THREE.FBXLoader: Unknown format.");if(Lh(r)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+Lh(r));qe=new fE().parse(r)}const i=new Ql(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new cE(i,this.manager).parse(qe)}}class cE{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){dt=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),i=this.parseMaterials(t),r=this.parseDeformers(),s=new uE().parse(r);return this.parseScene(r,s,i),kt}parseConnections(){const e=new Map;return"Connections"in qe&&qe.Connections.connections.forEach(function(i){const r=i[0],s=i[1],o=i[2];e.has(r)||e.set(r,{parents:[],children:[]});const a={ID:s,relationship:o};e.get(r).parents.push(a),e.has(s)||e.set(s,{parents:[],children:[]});const l={ID:r,relationship:o};e.get(s).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in qe.Objects){const i=qe.Objects.Video;for(const r in i){const s=i[r],o=parseInt(r);if(e[o]=s.RelativeFilename||s.Filename,"Content"in s){const a=s.Content instanceof ArrayBuffer&&s.Content.byteLength>0,l=typeof s.Content=="string"&&s.Content!=="";if(a||l){const c=this.parseImage(i[r]);t[s.RelativeFilename||s.Filename]=c}}}}for(const i in e){const r=e[i];t[r]!==void 0?e[i]=t[r]:e[i]=e[i].split("\\").pop()}return e}parseImage(e){const t=e.Content,i=e.RelativeFilename||e.Filename,r=i.slice(i.lastIndexOf(".")+1).toLowerCase();let s;switch(r){case"bmp":s="image/bmp";break;case"jpg":case"jpeg":s="image/jpeg";break;case"png":s="image/png";break;case"tif":s="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",i),s="image/tga";break;default:console.warn('FBXLoader: Image type "'+r+'" is not supported.');return}if(typeof t=="string")return"data:"+s+";base64,"+t;{const o=new Uint8Array(t);return window.URL.createObjectURL(new Blob([o],{type:s}))}}parseTextures(e){const t=new Map;if("Texture"in qe.Objects){const i=qe.Objects.Texture;for(const r in i){const s=this.parseTexture(i[r],e);t.set(parseInt(r),s)}}return t}parseTexture(e,t){const i=this.loadTexture(e,t);i.ID=e.id,i.name=e.attrName;const r=e.WrapModeU,s=e.WrapModeV,o=r!==void 0?r.value:0,a=s!==void 0?s.value:0;if(i.wrapS=o===0?ts:$t,i.wrapT=a===0?ts:$t,"Scaling"in e){const l=e.Scaling.value;i.repeat.x=l[0],i.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;i.offset.x=l[0],i.offset.y=l[1]}return i}loadTexture(e,t){let i;const r=this.textureLoader.path,s=dt.get(e.id).children;s!==void 0&&s.length>0&&t[s[0].ID]!==void 0&&(i=t[s[0].ID],(i.indexOf("blob:")===0||i.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let o;const a=e.FileName.slice(-3).toLowerCase();if(a==="tga"){const l=this.manager.getHandler(".tga");l===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",e.RelativeFilename),o=new Rt):(l.setPath(this.textureLoader.path),o=l.load(i))}else a==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",e.RelativeFilename),o=new Rt):o=this.textureLoader.load(i);return this.textureLoader.setPath(r),o}parseMaterials(e){const t=new Map;if("Material"in qe.Objects){const i=qe.Objects.Material;for(const r in i){const s=this.parseMaterial(i[r],e);s!==null&&t.set(parseInt(r),s)}}return t}parseMaterial(e,t){const i=e.id,r=e.attrName;let s=e.ShadingModel;if(typeof s=="object"&&(s=s.value),!dt.has(i))return null;const o=this.parseParameters(e,t,i);let a;switch(s.toLowerCase()){case"phong":a=new La;break;case"lambert":a=new uS;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',s),a=new La;break}return a.setValues(o),a.name=r,a}parseParameters(e,t,i){const r={};e.BumpFactor&&(r.bumpScale=e.BumpFactor.value),e.Diffuse?r.color=new Re().fromArray(e.Diffuse.value).convertSRGBToLinear():e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(r.color=new Re().fromArray(e.DiffuseColor.value).convertSRGBToLinear()),e.DisplacementFactor&&(r.displacementScale=e.DisplacementFactor.value),e.Emissive?r.emissive=new Re().fromArray(e.Emissive.value).convertSRGBToLinear():e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(r.emissive=new Re().fromArray(e.EmissiveColor.value).convertSRGBToLinear()),e.EmissiveFactor&&(r.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(r.opacity=parseFloat(e.Opacity.value)),r.opacity<1&&(r.transparent=!0),e.ReflectionFactor&&(r.reflectivity=e.ReflectionFactor.value),e.Shininess&&(r.shininess=e.Shininess.value),e.Specular?r.specular=new Re().fromArray(e.Specular.value).convertSRGBToLinear():e.SpecularColor&&e.SpecularColor.type==="Color"&&(r.specular=new Re().fromArray(e.SpecularColor.value).convertSRGBToLinear());const s=this;return dt.get(i).children.forEach(function(o){const a=o.relationship;switch(a){case"Bump":r.bumpMap=s.getTexture(t,o.ID);break;case"Maya|TEX_ao_map":r.aoMap=s.getTexture(t,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":r.map=s.getTexture(t,o.ID),r.map!==void 0&&(r.map.colorSpace=nt);break;case"DisplacementColor":r.displacementMap=s.getTexture(t,o.ID);break;case"EmissiveColor":r.emissiveMap=s.getTexture(t,o.ID),r.emissiveMap!==void 0&&(r.emissiveMap.colorSpace=nt);break;case"NormalMap":case"Maya|TEX_normal_map":r.normalMap=s.getTexture(t,o.ID);break;case"ReflectionColor":r.envMap=s.getTexture(t,o.ID),r.envMap!==void 0&&(r.envMap.mapping=uo,r.envMap.colorSpace=nt);break;case"SpecularColor":r.specularMap=s.getTexture(t,o.ID),r.specularMap!==void 0&&(r.specularMap.colorSpace=nt);break;case"TransparentColor":case"TransparencyFactor":r.alphaMap=s.getTexture(t,o.ID),r.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),r}getTexture(e,t){return"LayeredTexture"in qe.Objects&&t in qe.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=dt.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in qe.Objects){const i=qe.Objects.Deformer;for(const r in i){const s=i[r],o=dt.get(parseInt(r));if(s.attrType==="Skin"){const a=this.parseSkeleton(o,i);a.ID=r,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,e[r]=a}else if(s.attrType==="BlendShape"){const a={id:r};a.rawTargets=this.parseMorphTargets(o,i),a.id=r,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[r]=a}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const i=[];return e.children.forEach(function(r){const s=t[r.ID];if(s.attrType!=="Cluster")return;const o={ID:r.ID,indices:[],weights:[],transformLink:new De().fromArray(s.TransformLink.a)};"Indexes"in s&&(o.indices=s.Indexes.a,o.weights=s.Weights.a),i.push(o)}),{rawBones:i,bones:[]}}parseMorphTargets(e,t){const i=[];for(let r=0;r<e.children.length;r++){const s=e.children[r],o=t[s.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=dt.get(parseInt(s.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,i.push(a)}return i}parseScene(e,t,i){kt=new rr;const r=this.parseModels(e.skeletons,t,i),s=qe.Objects.Model,o=this;r.forEach(function(l){const c=s[l.ID];o.setLookAtProperties(l,c),dt.get(l.ID).parents.forEach(function(h){const f=r.get(h.ID);f!==void 0&&f.add(l)}),l.parent===null&&kt.add(l)}),this.bindSkeleton(e.skeletons,t,r),this.createAmbientLight(),kt.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=Ed(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const a=new hE().parse();kt.children.length===1&&kt.children[0].isGroup&&(kt.children[0].animations=a,kt=kt.children[0]),kt.animations=a}parseModels(e,t,i){const r=new Map,s=qe.Objects.Model;for(const o in s){const a=parseInt(o),l=s[o],c=dt.get(a);let u=this.buildSkeleton(c,e,a,l.attrName);if(!u){switch(l.attrType){case"Camera":u=this.createCamera(c);break;case"Light":u=this.createLight(c);break;case"Mesh":u=this.createMesh(c,t,i);break;case"NurbsCurve":u=this.createCurve(c,t);break;case"LimbNode":case"Root":u=new rl;break;case"Null":default:u=new rr;break}u.name=l.attrName?$e.sanitizeNodeName(l.attrName):"",u.userData.originalName=l.attrName,u.ID=a}this.getTransformData(u,l),r.set(a,u)}return r}buildSkeleton(e,t,i,r){let s=null;return e.parents.forEach(function(o){for(const a in t){const l=t[a];l.rawBones.forEach(function(c,u){if(c.ID===o.ID){const h=s;s=new rl,s.matrixWorld.copy(c.transformLink),s.name=r?$e.sanitizeNodeName(r):"",s.userData.originalName=r,s.ID=i,l.bones[u]=s,h!==null&&s.add(h)}})}}),s}createCamera(e){let t,i;if(e.children.forEach(function(r){const s=qe.Objects.NodeAttribute[r.ID];s!==void 0&&(i=s)}),i===void 0)t=new lt;else{let r=0;i.CameraProjectionType!==void 0&&i.CameraProjectionType.value===1&&(r=1);let s=1;i.NearPlane!==void 0&&(s=i.NearPlane.value/1e3);let o=1e3;i.FarPlane!==void 0&&(o=i.FarPlane.value/1e3);let a=window.innerWidth,l=window.innerHeight;i.AspectWidth!==void 0&&i.AspectHeight!==void 0&&(a=i.AspectWidth.value,l=i.AspectHeight.value);const c=a/l;let u=45;i.FieldOfView!==void 0&&(u=i.FieldOfView.value);const h=i.FocalLength?i.FocalLength.value:null;switch(r){case 0:t=new zt(u,c,s,o),h!==null&&t.setFocalLength(h);break;case 1:t=new Wl(-a/2,a/2,l/2,-l/2,s,o);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+r+"."),t=new lt;break}}return t}createLight(e){let t,i;if(e.children.forEach(function(r){const s=qe.Objects.NodeAttribute[r.ID];s!==void 0&&(i=s)}),i===void 0)t=new lt;else{let r;i.LightType===void 0?r=0:r=i.LightType.value;let s=16777215;i.Color!==void 0&&(s=new Re().fromArray(i.Color.value).convertSRGBToLinear());let o=i.Intensity===void 0?1:i.Intensity.value/100;i.CastLightOnObject!==void 0&&i.CastLightOnObject.value===0&&(o=0);let a=0;i.FarAttenuationEnd!==void 0&&(i.EnableFarAttenuation!==void 0&&i.EnableFarAttenuation.value===0?a=0:a=i.FarAttenuationEnd.value);const l=1;switch(r){case 0:t=new Th(s,o,a,l);break;case 1:t=new dd(s,o);break;case 2:let c=Math.PI/3;i.InnerAngle!==void 0&&(c=pn.degToRad(i.InnerAngle.value));let u=0;i.OuterAngle!==void 0&&(u=pn.degToRad(i.OuterAngle.value),u=Math.max(u,1)),t=new bS(s,o,a,c,u,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+i.LightType.value+", defaulting to a PointLight."),t=new Th(s,o);break}i.CastShadows!==void 0&&i.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,i){let r,s=null,o=null;const a=[];return e.children.forEach(function(l){t.has(l.ID)&&(s=t.get(l.ID)),i.has(l.ID)&&a.push(i.get(l.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new La({name:li.DEFAULT_MATERIAL_NAME,color:13421772}),a.push(o)),"color"in s.attributes&&a.forEach(function(l){l.vertexColors=!0}),s.FBX_Deformer?(r=new LM(s,o),r.normalizeSkinWeights()):r=new Tt(s,o),r}createCurve(e,t){const i=e.children.reduce(function(s,o){return t.has(o.ID)&&(s=t.get(o.ID)),s},null),r=new Jf({name:li.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new Qf(i,r)}getTransformData(e,t){const i={};"InheritType"in t&&(i.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?i.eulerOrder=bd(t.RotationOrder.value):i.eulerOrder="ZYX","Lcl_Translation"in t&&(i.translation=t.Lcl_Translation.value),"PreRotation"in t&&(i.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(i.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(i.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(i.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(i.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(i.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(i.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(i.rotationPivot=t.RotationPivot.value),e.userData.transformData=i}setLookAtProperties(e,t){"LookAtProperty"in t&&dt.get(e.ID).children.forEach(function(r){if(r.relationship==="LookAtProperty"){const s=qe.Objects.Model[r.ID];if("Lcl_Translation"in s){const o=s.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(o),kt.add(e.target)):e.lookAt(new I().fromArray(o))}}})}bindSkeleton(e,t,i){const r=this.parsePoseNodes();for(const s in e){const o=e[s];dt.get(parseInt(o.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;dt.get(c).parents.forEach(function(h){i.has(h.ID)&&i.get(h.ID).bind(new jl(o.bones),r[h.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in qe.Objects){const t=qe.Objects.Pose;for(const i in t)if(t[i].attrType==="BindPose"&&t[i].NbPoseNodes>0){const r=t[i].PoseNode;Array.isArray(r)?r.forEach(function(s){e[s.Node]=new De().fromArray(s.Matrix.a)}):e[r.Node]=new De().fromArray(r.Matrix.a)}}return e}createAmbientLight(){if("GlobalSettings"in qe&&"AmbientColor"in qe.GlobalSettings){const e=qe.GlobalSettings.AmbientColor.value,t=e[0],i=e[1],r=e[2];if(t!==0||i!==0||r!==0){const s=new Re(t,i,r).convertSRGBToLinear();kt.add(new pd(s,1))}}}}class uE{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in qe.Objects){const i=qe.Objects.Geometry;for(const r in i){const s=dt.get(parseInt(r)),o=this.parseGeometry(s,i[r],e);t.set(parseInt(r),o)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,i){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,i);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,i){const r=i.skeletons,s=[],o=e.parents.map(function(h){return qe.Objects.Model[h.ID]});if(o.length===0)return;const a=e.children.reduce(function(h,f){return r[f.ID]!==void 0&&(h=r[f.ID]),h},null);e.children.forEach(function(h){i.morphTargets[h.ID]!==void 0&&s.push(i.morphTargets[h.ID])});const l=o[0],c={};"RotationOrder"in l&&(c.eulerOrder=bd(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const u=Ed(c);return this.genGeometry(t,a,s,u)}genGeometry(e,t,i,r){const s=new yt;e.attrName&&(s.name=e.attrName);const o=this.parseGeoNode(e,t),a=this.genBuffers(o),l=new st(a.vertex,3);if(l.applyMatrix4(r),s.setAttribute("position",l),a.colors.length>0&&s.setAttribute("color",new st(a.colors,3)),t&&(s.setAttribute("skinIndex",new Vl(a.weightsIndices,4)),s.setAttribute("skinWeight",new st(a.vertexWeights,4)),s.FBX_Deformer=t),a.normal.length>0){const c=new Ge().getNormalMatrix(r),u=new st(a.normal,3);u.applyNormalMatrix(c),s.setAttribute("normal",u)}if(a.uvs.forEach(function(c,u){const h=u===0?"uv":`uv${u}`;s.setAttribute(h,new st(a.uvs[u],2))}),o.material&&o.material.mappingType!=="AllSame"){let c=a.materialIndex[0],u=0;if(a.materialIndex.forEach(function(h,f){h!==c&&(s.addGroup(u,f-u,c),c=h,u=f)}),s.groups.length>0){const h=s.groups[s.groups.length-1],f=h.start+h.count;f!==a.materialIndex.length&&s.addGroup(f,a.materialIndex.length-f,c)}s.groups.length===0&&s.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(s,e,i,r),s}parseGeoNode(e,t){const i={};if(i.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],i.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(i.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(i.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(i.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){i.uv=[];let r=0;for(;e.LayerElementUV[r];)e.LayerElementUV[r].UV&&i.uv.push(this.parseUVs(e.LayerElementUV[r])),r++}return i.weightTable={},t!==null&&(i.skeleton=t,t.rawBones.forEach(function(r,s){r.indices.forEach(function(o,a){i.weightTable[o]===void 0&&(i.weightTable[o]=[]),i.weightTable[o].push({id:s,weight:r.weights[a]})})})),i}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let i=0,r=0,s=!1,o=[],a=[],l=[],c=[],u=[],h=[];const f=this;return e.vertexIndices.forEach(function(d,g){let _,m=!1;d<0&&(d=d^-1,m=!0);let p=[],b=[];if(o.push(d*3,d*3+1,d*3+2),e.color){const x=$s(g,i,d,e.color);l.push(x[0],x[1],x[2])}if(e.skeleton){if(e.weightTable[d]!==void 0&&e.weightTable[d].forEach(function(x){b.push(x.weight),p.push(x.id)}),b.length>4){s||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),s=!0);const x=[0,0,0,0],M=[0,0,0,0];b.forEach(function(A,P){let w=A,B=p[P];M.forEach(function(S,T,ee){if(w>S){ee[T]=w,w=S;const ae=x[T];x[T]=B,B=ae}})}),p=x,b=M}for(;b.length<4;)b.push(0),p.push(0);for(let x=0;x<4;++x)u.push(b[x]),h.push(p[x])}if(e.normal){const x=$s(g,i,d,e.normal);a.push(x[0],x[1],x[2])}e.material&&e.material.mappingType!=="AllSame"&&(_=$s(g,i,d,e.material)[0],_<0&&(f.negativeMaterialIndices=!0,_=0)),e.uv&&e.uv.forEach(function(x,M){const A=$s(g,i,d,x);c[M]===void 0&&(c[M]=[]),c[M].push(A[0]),c[M].push(A[1])}),r++,m&&(r>4&&console.warn("THREE.FBXLoader: Polygons with more than four sides are not supported. Make sure to triangulate the geometry during export."),f.genFace(t,e,o,_,a,l,c,u,h,r),i++,r=0,o=[],a=[],l=[],c=[],u=[],h=[])}),t}genFace(e,t,i,r,s,o,a,l,c,u){for(let h=2;h<u;h++)e.vertex.push(t.vertexPositions[i[0]]),e.vertex.push(t.vertexPositions[i[1]]),e.vertex.push(t.vertexPositions[i[2]]),e.vertex.push(t.vertexPositions[i[(h-1)*3]]),e.vertex.push(t.vertexPositions[i[(h-1)*3+1]]),e.vertex.push(t.vertexPositions[i[(h-1)*3+2]]),e.vertex.push(t.vertexPositions[i[h*3]]),e.vertex.push(t.vertexPositions[i[h*3+1]]),e.vertex.push(t.vertexPositions[i[h*3+2]]),t.skeleton&&(e.vertexWeights.push(l[0]),e.vertexWeights.push(l[1]),e.vertexWeights.push(l[2]),e.vertexWeights.push(l[3]),e.vertexWeights.push(l[(h-1)*4]),e.vertexWeights.push(l[(h-1)*4+1]),e.vertexWeights.push(l[(h-1)*4+2]),e.vertexWeights.push(l[(h-1)*4+3]),e.vertexWeights.push(l[h*4]),e.vertexWeights.push(l[h*4+1]),e.vertexWeights.push(l[h*4+2]),e.vertexWeights.push(l[h*4+3]),e.weightsIndices.push(c[0]),e.weightsIndices.push(c[1]),e.weightsIndices.push(c[2]),e.weightsIndices.push(c[3]),e.weightsIndices.push(c[(h-1)*4]),e.weightsIndices.push(c[(h-1)*4+1]),e.weightsIndices.push(c[(h-1)*4+2]),e.weightsIndices.push(c[(h-1)*4+3]),e.weightsIndices.push(c[h*4]),e.weightsIndices.push(c[h*4+1]),e.weightsIndices.push(c[h*4+2]),e.weightsIndices.push(c[h*4+3])),t.color&&(e.colors.push(o[0]),e.colors.push(o[1]),e.colors.push(o[2]),e.colors.push(o[(h-1)*3]),e.colors.push(o[(h-1)*3+1]),e.colors.push(o[(h-1)*3+2]),e.colors.push(o[h*3]),e.colors.push(o[h*3+1]),e.colors.push(o[h*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(r),e.materialIndex.push(r),e.materialIndex.push(r)),t.normal&&(e.normal.push(s[0]),e.normal.push(s[1]),e.normal.push(s[2]),e.normal.push(s[(h-1)*3]),e.normal.push(s[(h-1)*3+1]),e.normal.push(s[(h-1)*3+2]),e.normal.push(s[h*3]),e.normal.push(s[h*3+1]),e.normal.push(s[h*3+2])),t.uv&&t.uv.forEach(function(f,d){e.uvs[d]===void 0&&(e.uvs[d]=[]),e.uvs[d].push(a[d][0]),e.uvs[d].push(a[d][1]),e.uvs[d].push(a[d][(h-1)*2]),e.uvs[d].push(a[d][(h-1)*2+1]),e.uvs[d].push(a[d][h*2]),e.uvs[d].push(a[d][h*2+1])})}addMorphTargets(e,t,i,r){if(i.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const s=this;i.forEach(function(o){o.rawTargets.forEach(function(a){const l=qe.Objects.Geometry[a.geoID];l!==void 0&&s.genMorphGeometry(e,t,l,r,a.name)})})}genMorphGeometry(e,t,i,r,s){const o=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],a=i.Vertices!==void 0?i.Vertices.a:[],l=i.Indexes!==void 0?i.Indexes.a:[],c=e.attributes.position.count*3,u=new Float32Array(c);for(let g=0;g<l.length;g++){const _=l[g]*3;u[_]=a[g*3],u[_+1]=a[g*3+1],u[_+2]=a[g*3+2]}const h={vertexIndices:o,vertexPositions:u},f=this.genBuffers(h),d=new st(f.vertex,3);d.name=s||i.attrName,d.applyMatrix4(r),e.morphAttributes.position.push(d)}parseNormals(e){const t=e.MappingInformationType,i=e.ReferenceInformationType,r=e.Normals.a;let s=[];return i==="IndexToDirect"&&("NormalIndex"in e?s=e.NormalIndex.a:"NormalsIndex"in e&&(s=e.NormalsIndex.a)),{dataSize:3,buffer:r,indices:s,mappingType:t,referenceType:i}}parseUVs(e){const t=e.MappingInformationType,i=e.ReferenceInformationType,r=e.UV.a;let s=[];return i==="IndexToDirect"&&(s=e.UVIndex.a),{dataSize:2,buffer:r,indices:s,mappingType:t,referenceType:i}}parseVertexColors(e){const t=e.MappingInformationType,i=e.ReferenceInformationType,r=e.Colors.a;let s=[];i==="IndexToDirect"&&(s=e.ColorIndex.a);for(let o=0,a=new Re;o<r.length;o+=4)a.fromArray(r,o).convertSRGBToLinear().toArray(r,o);return{dataSize:4,buffer:r,indices:s,mappingType:t,referenceType:i}}parseMaterialIndices(e){const t=e.MappingInformationType,i=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:i};const r=e.Materials.a,s=[];for(let o=0;o<r.length;++o)s.push(o);return{dataSize:1,buffer:r,indices:s,mappingType:t,referenceType:i}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new yt;const i=t-1,r=e.KnotVector.a,s=[],o=e.Points.a;for(let h=0,f=o.length;h<f;h+=4)s.push(new Qe().fromArray(o,h));let a,l;if(e.Form==="Closed")s.push(s[0]);else if(e.Form==="Periodic"){a=i,l=r.length-1-a;for(let h=0;h<i;++h)s.push(s[h])}const u=new aE(i,r,s,a,l).getPoints(s.length*12);return new yt().setFromPoints(u)}}class hE{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const i in t){const r=t[i],s=this.addClip(r);e.push(s)}return e}parseClips(){if(qe.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=qe.Objects.AnimationCurveNode,t=new Map;for(const i in e){const r=e[i];if(r.attrName.match(/S|R|T|DeformPercent/)!==null){const s={id:r.id,attr:r.attrName,curves:{}};t.set(s.id,s)}}return t}parseAnimationCurves(e){const t=qe.Objects.AnimationCurve;for(const i in t){const r={id:t[i].id,times:t[i].KeyTime.a.map(gE),values:t[i].KeyValueFloat.a},s=dt.get(r.id);if(s!==void 0){const o=s.parents[0].ID,a=s.parents[0].relationship;a.match(/X/)?e.get(o).curves.x=r:a.match(/Y/)?e.get(o).curves.y=r:a.match(/Z/)?e.get(o).curves.z=r:a.match(/DeformPercent/)&&e.has(o)&&(e.get(o).curves.morph=r)}}}parseAnimationLayers(e){const t=qe.Objects.AnimationLayer,i=new Map;for(const r in t){const s=[],o=dt.get(parseInt(r));o!==void 0&&(o.children.forEach(function(l,c){if(e.has(l.ID)){const u=e.get(l.ID);if(u.curves.x!==void 0||u.curves.y!==void 0||u.curves.z!==void 0){if(s[c]===void 0){const h=dt.get(l.ID).parents.filter(function(f){return f.relationship!==void 0})[0].ID;if(h!==void 0){const f=qe.Objects.Model[h.toString()];if(f===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const d={modelName:f.attrName?$e.sanitizeNodeName(f.attrName):"",ID:f.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};kt.traverse(function(g){g.ID===f.id&&(d.transform=g.matrix,g.userData.transformData&&(d.eulerOrder=g.userData.transformData.eulerOrder))}),d.transform||(d.transform=new De),"PreRotation"in f&&(d.preRotation=f.PreRotation.value),"PostRotation"in f&&(d.postRotation=f.PostRotation.value),s[c]=d}}s[c]&&(s[c][u.attr]=u)}else if(u.curves.morph!==void 0){if(s[c]===void 0){const h=dt.get(l.ID).parents.filter(function(p){return p.relationship!==void 0})[0].ID,f=dt.get(h).parents[0].ID,d=dt.get(f).parents[0].ID,g=dt.get(d).parents[0].ID,_=qe.Objects.Model[g],m={modelName:_.attrName?$e.sanitizeNodeName(_.attrName):"",morphName:qe.Objects.Deformer[h].attrName};s[c]=m}s[c][u.attr]=u}}}),i.set(parseInt(r),s))}return i}parseAnimStacks(e){const t=qe.Objects.AnimationStack,i={};for(const r in t){const s=dt.get(parseInt(r)).children;s.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const o=e.get(s[0].ID);i[r]={name:t[r].attrName,layer:o}}return i}addClip(e){let t=[];const i=this;return e.layer.forEach(function(r){t=t.concat(i.generateTracks(r))}),new gS(e.name,-1,t)}generateTracks(e){const t=[];let i=new I,r=new sn,s=new I;if(e.transform&&e.transform.decompose(i,r,s),i=i.toArray(),r=new on().setFromQuaternion(r,e.eulerOrder).toArray(),s=s.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const o=this.generateVectorTrack(e.modelName,e.T.curves,i,"position");o!==void 0&&t.push(o)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const o=this.generateRotationTrack(e.modelName,e.R.curves,r,e.preRotation,e.postRotation,e.eulerOrder);o!==void 0&&t.push(o)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const o=this.generateVectorTrack(e.modelName,e.S.curves,s,"scale");o!==void 0&&t.push(o)}if(e.DeformPercent!==void 0){const o=this.generateMorphTrack(e);o!==void 0&&t.push(o)}return t}generateVectorTrack(e,t,i,r){const s=this.getTimesForAllAxes(t),o=this.getKeyframeTrackValues(s,t,i);return new cs(e+"."+r,s,o)}generateRotationTrack(e,t,i,r,s,o){t.x!==void 0&&(this.interpolateRotations(t.x),t.x.values=t.x.values.map(pn.degToRad)),t.y!==void 0&&(this.interpolateRotations(t.y),t.y.values=t.y.values.map(pn.degToRad)),t.z!==void 0&&(this.interpolateRotations(t.z),t.z.values=t.z.values.map(pn.degToRad));const a=this.getTimesForAllAxes(t),l=this.getKeyframeTrackValues(a,t,i);r!==void 0&&(r=r.map(pn.degToRad),r.push(o),r=new on().fromArray(r),r=new sn().setFromEuler(r)),s!==void 0&&(s=s.map(pn.degToRad),s.push(o),s=new on().fromArray(s),s=new sn().setFromEuler(s).invert());const c=new sn,u=new on,h=[];for(let f=0;f<l.length;f+=3)u.set(l[f],l[f+1],l[f+2],o),c.setFromEuler(u),r!==void 0&&c.premultiply(r),s!==void 0&&c.multiply(s),c.toArray(h,f/3*4);return new Rr(e+".quaternion",a,h)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,i=t.values.map(function(s){return s/100}),r=kt.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new ls(e.modelName+".morphTargetInfluences["+r+"]",t.times,i)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(i,r){return i-r}),t.length>1){let i=1,r=t[0];for(let s=1;s<t.length;s++){const o=t[s];o!==r&&(t[i]=o,r=o,i++)}t=t.slice(0,i)}return t}getKeyframeTrackValues(e,t,i){const r=i,s=[];let o=-1,a=-1,l=-1;return e.forEach(function(c){if(t.x&&(o=t.x.times.indexOf(c)),t.y&&(a=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),o!==-1){const u=t.x.values[o];s.push(u),r[0]=u}else s.push(r[0]);if(a!==-1){const u=t.y.values[a];s.push(u),r[1]=u}else s.push(r[1]);if(l!==-1){const u=t.z.values[l];s.push(u),r[2]=u}else s.push(r[2])}),s}interpolateRotations(e){for(let t=1;t<e.values.length;t++){const i=e.values[t-1],r=e.values[t]-i,s=Math.abs(r);if(s>=180){const o=s/180,a=r/o;let l=i+a;const c=e.times[t-1],h=(e.times[t]-c)/o;let f=c+h;const d=[],g=[];for(;f<e.times[t];)d.push(f),f+=h,g.push(l),l+=a;e.times=Ih(e.times,t,d),e.values=Ih(e.values,t,g)}}}}class fE{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new Sd,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,i=e.split(/[\r\n]+/);return i.forEach(function(r,s){const o=r.match(/^[\s\t]*;/),a=r.match(/^[\s\t]*$/);if(o||a)return;const l=r.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=r.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),u=r.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(r,l):c?t.parseNodeProperty(r,c,i[++s]):u?t.popStack():r.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(r)}),this.allNodes}parseNodeBegin(e,t){const i=t[1].trim().replace(/^"/,"").replace(/"$/,""),r=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),s={name:i},o=this.parseNodeAttr(r),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(i,s):i in a?(i==="PoseNode"?a.PoseNode.push(s):a[i].id!==void 0&&(a[i]={},a[i][a[i].id]=a[i]),o.id!==""&&(a[i][o.id]=s)):typeof o.id=="number"?(a[i]={},a[i][o.id]=s):i!=="Properties70"&&(i==="PoseNode"?a[i]=[s]:a[i]=s),typeof o.id=="number"&&(s.id=o.id),o.name!==""&&(s.attrName=o.name),o.type!==""&&(s.attrType=o.type),this.pushStack(s)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let i="",r="";return e.length>1&&(i=e[1].replace(/^(\w+)::/,""),r=e[2]),{id:t,name:i,type:r}}parseNodeProperty(e,t,i){let r=t[1].replace(/^"/,"").replace(/"$/,"").trim(),s=t[2].replace(/^"/,"").replace(/"$/,"").trim();r==="Content"&&s===","&&(s=i.replace(/"/g,"").replace(/,$/,"").trim());const o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(e,r,s);return}if(r==="C"){const l=s.split(",").slice(1),c=parseInt(l[0]),u=parseInt(l[1]);let h=s.split(",").slice(3);h=h.map(function(f){return f.trim().replace(/^"/,"")}),r="connections",s=[c,u],vE(s,h),o[r]===void 0&&(o[r]=[])}r==="Node"&&(o.id=s),r in o&&Array.isArray(o[r])?o[r].push(s):r!=="a"?o[r]=s:o.a=s,this.setCurrentProp(o,r),r==="a"&&s.slice(-1)!==","&&(o.a=Oa(s))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=Oa(t.a))}parseNodeSpecialProperty(e,t,i){const r=i.split('",').map(function(u){return u.trim().replace(/^\"/,"").replace(/\s/,"_")}),s=r[0],o=r[1],a=r[2],l=r[3];let c=r[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=Oa(c);break}this.getPrevNode()[s]={type:o,type2:a,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),s)}}class dE{parse(e){const t=new Ph(e);t.skip(23);const i=t.getUint32();if(i<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+i);const r=new Sd;for(;!this.endOfContent(t);){const s=this.parseNode(t,i);s!==null&&r.add(s.name,s)}return r}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const i={},r=t>=7500?e.getUint64():e.getUint32(),s=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const o=e.getUint8(),a=e.getString(o);if(r===0)return null;const l=[];for(let f=0;f<s;f++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",u=l.length>1?l[1]:"",h=l.length>2?l[2]:"";for(i.singleProperty=s===1&&e.getOffset()===r;r>e.getOffset();){const f=this.parseNode(e,t);f!==null&&this.parseSubNode(a,i,f)}return i.propertyList=l,typeof c=="number"&&(i.id=c),u!==""&&(i.attrName=u),h!==""&&(i.attrType=h),a!==""&&(i.name=a),i}parseSubNode(e,t,i){if(i.singleProperty===!0){const r=i.propertyList[0];Array.isArray(r)?(t[i.name]=i,i.a=r):t[i.name]=r}else if(e==="Connections"&&i.name==="C"){const r=[];i.propertyList.forEach(function(s,o){o!==0&&r.push(s)}),t.connections===void 0&&(t.connections=[]),t.connections.push(r)}else if(i.name==="Properties70")Object.keys(i).forEach(function(s){t[s]=i[s]});else if(e==="Properties70"&&i.name==="P"){let r=i.propertyList[0],s=i.propertyList[1];const o=i.propertyList[2],a=i.propertyList[3];let l;r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),s==="Color"||s==="ColorRGB"||s==="Vector"||s==="Vector3D"||s.indexOf("Lcl_")===0?l=[i.propertyList[4],i.propertyList[5],i.propertyList[6]]:l=i.propertyList[4],t[r]={type:s,type2:o,flag:a,value:l}}else t[i.name]===void 0?typeof i.id=="number"?(t[i.name]={},t[i.name][i.id]=i):t[i.name]=i:i.name==="PoseNode"?(Array.isArray(t[i.name])||(t[i.name]=[t[i.name]]),t[i.name].push(i)):t[i.name][i.id]===void 0&&(t[i.name][i.id]=i)}parseProperty(e){const t=e.getString(1);let i;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return i=e.getUint32(),e.getArrayBuffer(i);case"S":return i=e.getUint32(),e.getString(i);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const r=e.getUint32(),s=e.getUint32(),o=e.getUint32();if(s===0)switch(t){case"b":case"c":return e.getBooleanArray(r);case"d":return e.getFloat64Array(r);case"f":return e.getFloat32Array(r);case"i":return e.getInt32Array(r);case"l":return e.getInt64Array(r)}const a=$S(new Uint8Array(e.getArrayBuffer(o))),l=new Ph(a.buffer);switch(t){case"b":case"c":return l.getBooleanArray(r);case"d":return l.getFloat64Array(r);case"f":return l.getFloat32Array(r);case"i":return l.getInt32Array(r);case"l":return l.getInt64Array(r)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class Ph{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let i=0;i<e;i++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let i=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const r=i.indexOf(0);return r>=0&&(i=new Uint8Array(this.dv.buffer,t,r)),this._textDecoder.decode(i)}}class Sd{add(e,t){this[e]=t}}function pE(n){const e="Kaydara FBX Binary  \0";return n.byteLength>=e.length&&e===Td(n,0,e.length)}function mE(n){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function i(r){const s=n[r-1];return n=n.slice(t+r),t++,s}for(let r=0;r<e.length;++r)if(i(1)===e[r])return!1;return!0}function Lh(n){const e=/FBXVersion: (\d+)/,t=n.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function gE(n){return n/46186158e3}const _E=[];function $s(n,e,t,i){let r;switch(i.mappingType){case"ByPolygonVertex":r=n;break;case"ByPolygon":r=e;break;case"ByVertice":r=t;break;case"AllSame":r=i.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+i.mappingType)}i.referenceType==="IndexToDirect"&&(r=i.indices[r]);const s=r*i.dataSize,o=s+i.dataSize;return xE(_E,i.buffer,s,o)}const Na=new on,Ji=new I;function Ed(n){const e=new De,t=new De,i=new De,r=new De,s=new De,o=new De,a=new De,l=new De,c=new De,u=new De,h=new De,f=new De,d=n.inheritType?n.inheritType:0;if(n.translation&&e.setPosition(Ji.fromArray(n.translation)),n.preRotation){const T=n.preRotation.map(pn.degToRad);T.push(n.eulerOrder||on.DEFAULT_ORDER),t.makeRotationFromEuler(Na.fromArray(T))}if(n.rotation){const T=n.rotation.map(pn.degToRad);T.push(n.eulerOrder||on.DEFAULT_ORDER),i.makeRotationFromEuler(Na.fromArray(T))}if(n.postRotation){const T=n.postRotation.map(pn.degToRad);T.push(n.eulerOrder||on.DEFAULT_ORDER),r.makeRotationFromEuler(Na.fromArray(T)),r.invert()}n.scale&&s.scale(Ji.fromArray(n.scale)),n.scalingOffset&&a.setPosition(Ji.fromArray(n.scalingOffset)),n.scalingPivot&&o.setPosition(Ji.fromArray(n.scalingPivot)),n.rotationOffset&&l.setPosition(Ji.fromArray(n.rotationOffset)),n.rotationPivot&&c.setPosition(Ji.fromArray(n.rotationPivot)),n.parentMatrixWorld&&(h.copy(n.parentMatrix),u.copy(n.parentMatrixWorld));const g=t.clone().multiply(i).multiply(r),_=new De;_.extractRotation(u);const m=new De;m.copyPosition(u);const p=m.clone().invert().multiply(u),b=_.clone().invert().multiply(p),x=s,M=new De;if(d===0)M.copy(_).multiply(g).multiply(b).multiply(x);else if(d===1)M.copy(_).multiply(b).multiply(g).multiply(x);else{const ee=new De().scale(new I().setFromMatrixScale(h)).clone().invert(),ae=b.clone().multiply(ee);M.copy(_).multiply(g).multiply(ae).multiply(x)}const A=c.clone().invert(),P=o.clone().invert();let w=e.clone().multiply(l).multiply(c).multiply(t).multiply(i).multiply(r).multiply(A).multiply(a).multiply(o).multiply(s).multiply(P);const B=new De().copyPosition(w),S=u.clone().multiply(B);return f.copyPosition(S),w=f.clone().multiply(M),w.premultiply(u.invert()),w}function bd(n){n=n||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return n===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[n]}function Oa(n){return n.split(",").map(function(t){return parseFloat(t)})}function Td(n,e,t){return e===void 0&&(e=0),t===void 0&&(t=n.byteLength),new TextDecoder().decode(new Uint8Array(n,e,t))}function vE(n,e){for(let t=0,i=n.length,r=e.length;t<r;t++,i++)n[i]=e[t]}function xE(n,e,t,i){for(let r=t,s=0;r<i;r++,s++)n[s]=e[r];return n}function Ih(n,e,t){return n.slice(0,e).concat(t).concat(n.slice(e))}const yE=new lE,ME=n=>new Promise((e,t)=>{yE.load(n,i=>{e(i)},()=>{},i=>{t(i)})});var Kr=Object.freeze({Linear:Object.freeze({None:function(n){return n},In:function(n){return this.None(n)},Out:function(n){return this.None(n)},InOut:function(n){return this.None(n)}}),Quadratic:Object.freeze({In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}}),Cubic:Object.freeze({In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}}),Quartic:Object.freeze({In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}}),Quintic:Object.freeze({In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}}),Sinusoidal:Object.freeze({In:function(n){return 1-Math.sin((1-n)*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return .5*(1-Math.sin(Math.PI*(.5-n)))}}),Exponential:Object.freeze({In:function(n){return n===0?0:Math.pow(1024,n-1)},Out:function(n){return n===1?1:1-Math.pow(2,-10*n)},InOut:function(n){return n===0?0:n===1?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(-Math.pow(2,-10*(n-1))+2)}}),Circular:Object.freeze({In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}}),Elastic:Object.freeze({In:function(n){return n===0?0:n===1?1:-Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI)},Out:function(n){return n===0?0:n===1?1:Math.pow(2,-10*n)*Math.sin((n-.1)*5*Math.PI)+1},InOut:function(n){return n===0?0:n===1?1:(n*=2,n<1?-.5*Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI):.5*Math.pow(2,-10*(n-1))*Math.sin((n-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(n){var e=1.70158;return n===1?1:n*n*((e+1)*n-e)},Out:function(n){var e=1.70158;return n===0?0:--n*n*((e+1)*n+e)+1},InOut:function(n){var e=2.5949095;return(n*=2)<1?.5*(n*n*((e+1)*n-e)):.5*((n-=2)*n*((e+1)*n+e)+2)}}),Bounce:Object.freeze({In:function(n){return 1-Kr.Bounce.Out(1-n)},Out:function(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},InOut:function(n){return n<.5?Kr.Bounce.In(n*2)*.5:Kr.Bounce.Out(n*2-1)*.5+.5}}),generatePow:function(n){return n===void 0&&(n=4),n=n<Number.EPSILON?Number.EPSILON:n,n=n>1e4?1e4:n,{In:function(e){return Math.pow(e,n)},Out:function(e){return 1-Math.pow(1-e,n)},InOut:function(e){return e<.5?Math.pow(e*2,n)/2:(1-Math.pow(2-e*2,n))/2+.5}}}}),Hr=function(){return performance.now()},SE=function(){function n(){this._tweens={},this._tweensAddedDuringUpdate={}}return n.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},n.prototype.removeAll=function(){this._tweens={}},n.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},n.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},n.prototype.update=function(e,t){e===void 0&&(e=Hr()),t===void 0&&(t=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<i.length;r++){var s=this._tweens[i[r]],o=!t;s&&s.update(e,o)===!1&&!t&&delete this._tweens[i[r]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},n}(),or={Linear:function(n,e){var t=n.length-1,i=t*e,r=Math.floor(i),s=or.Utils.Linear;return e<0?s(n[0],n[1],i):e>1?s(n[t],n[t-1],t-i):s(n[r],n[r+1>t?t:r+1],i-r)},Bezier:function(n,e){for(var t=0,i=n.length-1,r=Math.pow,s=or.Utils.Bernstein,o=0;o<=i;o++)t+=r(1-e,i-o)*r(e,o)*n[o]*s(i,o);return t},CatmullRom:function(n,e){var t=n.length-1,i=t*e,r=Math.floor(i),s=or.Utils.CatmullRom;return n[0]===n[t]?(e<0&&(r=Math.floor(i=t*(1+e))),s(n[(r-1+t)%t],n[r],n[(r+1)%t],n[(r+2)%t],i-r)):e<0?n[0]-(s(n[0],n[0],n[1],n[1],-i)-n[0]):e>1?n[t]-(s(n[t],n[t],n[t-1],n[t-1],i-t)-n[t]):s(n[r?r-1:0],n[r],n[t<r+1?t:r+1],n[t<r+2?t:r+2],i-r)},Utils:{Linear:function(n,e,t){return(e-n)*t+n},Bernstein:function(n,e){var t=or.Utils.Factorial;return t(n)/t(e)/t(n-e)},Factorial:function(){var n=[1];return function(e){var t=1;if(n[e])return n[e];for(var i=e;i>1;i--)t*=i;return n[e]=t,t}}(),CatmullRom:function(n,e,t,i,r){var s=(t-n)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*t+s+o)*l+(-3*e+3*t-2*s-o)*a+s*r+e}}},EE=function(){function n(){}return n.nextId=function(){return n._nextId++},n._nextId=0,n}(),fl=new SE,Dh=function(){function n(e,t){t===void 0&&(t=fl),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Kr.Linear.None,this._interpolationFunction=or.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=EE.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return n.prototype.getId=function(){return this._id},n.prototype.isPlaying=function(){return this._isPlaying},n.prototype.isPaused=function(){return this._isPaused},n.prototype.to=function(e,t){if(t===void 0&&(t=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=t,this},n.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e,this},n.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},n.prototype.start=function(e,t){if(e===void 0&&(e=Hr()),t===void 0&&(t=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var i in this._valuesStartRepeat)this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||t){if(this._propertiesAreSetUp=!0,!this._isDynamic){var r={};for(var s in this._valuesEnd)r[s]=this._valuesEnd[s];this._valuesEnd=r}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,t)}return this},n.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},n.prototype._setupProperties=function(e,t,i,r,s){for(var o in i){var a=e[o],l=Array.isArray(a),c=l?"array":typeof a,u=!l&&Array.isArray(i[o]);if(!(c==="undefined"||c==="function")){if(u){var h=i[o];if(h.length===0)continue;for(var f=[a],d=0,g=h.length;d<g;d+=1){var _=this._handleRelativeValue(a,h[d]);if(isNaN(_)){u=!1,console.warn("Found invalid interpolation list. Skipping.");break}f.push(_)}u&&(i[o]=f)}if((c==="object"||l)&&a&&!u){t[o]=l?[]:{};var m=a;for(var p in m)t[o][p]=m[p];r[o]=l?[]:{};var h=i[o];if(!this._isDynamic){var b={};for(var p in h)b[p]=h[p];i[o]=h=b}this._setupProperties(m,t[o],h,r[o],s)}else(typeof t[o]>"u"||s)&&(t[o]=a),l||(t[o]*=1),u?r[o]=i[o].slice().reverse():r[o]=t[o]||0}}},n.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},n.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},n.prototype.pause=function(e){return e===void 0&&(e=Hr()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},n.prototype.resume=function(e){return e===void 0&&(e=Hr()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},n.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},n.prototype.group=function(e){return e===void 0&&(e=fl),this._group=e,this},n.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},n.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},n.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},n.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},n.prototype.easing=function(e){return e===void 0&&(e=Kr.Linear.None),this._easingFunction=e,this},n.prototype.interpolation=function(e){return e===void 0&&(e=or.Linear),this._interpolationFunction=e,this},n.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},n.prototype.onStart=function(e){return this._onStartCallback=e,this},n.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},n.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},n.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},n.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},n.prototype.onStop=function(e){return this._onStopCallback=e,this},n.prototype.update=function(e,t){if(e===void 0&&(e=Hr()),t===void 0&&(t=!0),this._isPaused)return!0;var i,r,s=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>s)return!1;t&&this.start(e,!0)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0),r=(e-this._startTime)/this._duration,r=this._duration===0||r>1?1:r;var o=this._easingFunction(r);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,o),this._onUpdateCallback&&this._onUpdateCallback(this._object,r),r===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(i in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[i]=="string"&&(this._valuesStartRepeat[i]=this._valuesStartRepeat[i]+parseFloat(this._valuesEnd[i])),this._yoyo&&this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var a=0,l=this._chainedTweens.length;a<l;a++)this._chainedTweens[a].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},n.prototype._updateProperties=function(e,t,i,r){for(var s in i)if(t[s]!==void 0){var o=t[s]||0,a=i[s],l=Array.isArray(e[s]),c=Array.isArray(a),u=!l&&c;u?e[s]=this._interpolationFunction(a,r):typeof a=="object"&&a?this._updateProperties(e[s],o,a,r):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(e[s]=o+(a-o)*r))}},n.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},n.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],i=this._valuesEnd[e];typeof i=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(i):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},n}(),Tn=fl;Tn.getAll.bind(Tn);Tn.removeAll.bind(Tn);Tn.add.bind(Tn);Tn.remove.bind(Tn);Tn.update.bind(Tn);const ft={mesh:"#1B3045",head:"#ffffff",soundLine:"#4f90bb",risingColor:"#5588AA",liveColor:"#ffffff",radarColor:"#ff8800",wall:"#fab73f",circle:"#00bbff",ball:"#fab73f",cone:"#ffff00",fly:"#00bbff"};class bE{constructor(e,t,i,r){Ie(this,"scene");Ie(this,"child");Ie(this,"meshColor");Ie(this,"headColor");Ie(this,"size");Ie(this,"height");Ie(this,"time");this.scene=e,this.child=t,this.meshColor=ft.mesh,this.headColor=ft.head,this.size=180,this.height=i,this.time=r,this.createMesh3(),this.createLine3()}computedMesh(){this.child.geometry.computeBoundingBox(),this.child.geometry.computeBoundingSphere()}createMesh(){this.computedMesh();const{max:e,min:t}=this.child.geometry.boundingBox,i=e.z-t.z,r=new _t({uniforms:{u_city_color:{value:new Re(ft.mesh)},u_head_color:{value:new Re(ft.head)},u_size:{value:i}},vertexShader:`
        varying vec3 v_position;
        
        void main() {
          v_position = position;

          gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(v_position, 1.0);
        }
      `,fragmentShader:`
        varying vec3 v_position;

        uniform vec3 u_city_color;
        uniform vec3 u_head_color;
        uniform float u_size;
        
        void main() {
          vec3 base_color = u_city_color;
          base_color = mix(base_color, u_head_color, v_position.z / u_size);

          gl_FragColor = vec4(base_color, 1.0);
        }
      `}),s=new Tt(this.child.geometry,r);s.position.copy(this.child.position),s.rotation.copy(this.child.rotation),s.scale.copy(this.child.scale),this.scene.add(s)}createMesh2(){this.computedMesh();const{max:e,min:t}=this.child.geometry.boundingBox,i=e.z-t.z,r=new _t({uniforms:{u_city_color:{value:new Re(ft.mesh)},u_head_color:{value:new Re(ft.head)},u_size:{value:i},u_height:this.height,u_up_color:{value:new Re(ft.risingColor)}},vertexShader:`
        varying vec3 v_position;
        
        void main() {
          v_position = position;

          gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(v_position, 1.0);
        }
      `,fragmentShader:`
        varying vec3 v_position;

        uniform vec3 u_city_color;
        uniform vec3 u_head_color;
        uniform float u_size;

        uniform vec3 u_up_color;
        uniform float u_height;
        
        void main() {
          vec3 base_color = u_city_color;
          base_color = mix(base_color, u_head_color, v_position.z / u_size);
        
          // 上升线条的高度是多少,这里是6,越大线条越宽
          if (u_height > v_position.z && u_height < v_position.z + 6.0) {
            float f_index = (u_height - v_position.z) / 3.0; //前提:实现模糊颜色
            base_color = mix(u_up_color, base_color, abs(f_index - 1.0));
          }
        
          gl_FragColor = vec4(base_color, 1.0);
        }
      `}),s=new Tt(this.child.geometry,r);s.position.copy(this.child.position),s.rotation.copy(this.child.rotation),s.scale.copy(this.child.scale),this.scene.add(s)}createMesh3(){this.computedMesh();const{max:e,min:t}=this.child.geometry.boundingBox,i=e.z-t.z,r=new _t({uniforms:{u_city_color:{value:new Re(ft.mesh)},u_head_color:{value:new Re(ft.head)},u_size:{value:i},u_height:this.height,u_up_color:{value:new Re(ft.risingColor)},u_time:this.time},vertexShader:`
        varying vec3 v_position;
        uniform float u_time;
        
        void main() {
          v_position = position;

          //为了使得高度变化更快
          float uMax = 4.0;//变化幅度
          float rate = u_time / uMax * 2.0;
          //边界条件
          if(rate>1.0){
            rate=1.0;
          }
          //position不能直接修改
          // float z = position.z + u_time;
          float z = position.z * rate;

          gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position.x,position.y,z, 1.0);
        }
      `,fragmentShader:`
        varying vec3 v_position;

        uniform vec3 u_city_color;
        uniform vec3 u_head_color;
        uniform float u_size;

        uniform vec3 u_up_color;
        uniform float u_height;
        
        void main() {
          vec3 base_color = u_city_color;
          base_color = mix(base_color, u_head_color, v_position.z / u_size);
        
          // 上升线条的高度是多少,这里是6,越大线条越宽
          if (u_height > v_position.z && u_height < v_position.z + 6.0) {
            float f_index = (u_height - v_position.z) / 3.0; //前提:实现模糊颜色
            base_color = mix(u_up_color, base_color, abs(f_index - 1.0));
          }
        
          gl_FragColor = vec4(base_color, 1.0);
        }
      `}),s=new Tt(this.child.geometry,r);s.position.copy(this.child.position),s.rotation.copy(this.child.rotation),s.scale.copy(this.child.scale),this.scene.add(s)}createLine(){const e=new Pa(this.child.geometry);this.child.geometry.boundingBox;const t=new _t({uniforms:{line_color:{value:new Re(ft.soundLine)}},vertexShader:`
        uniform vec3 line_color;
        varying vec3 v_color;
        
        void main() {
          v_color = line_color;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(vec3(position), 1.0);
        }
      `,fragmentShader:`
        varying vec3 v_color;
      
        void main() {
           gl_FragColor = vec4(v_color, 1.0);
        }
      `}),i=new Ta(e,t);i.scale.copy(this.child.scale),i.rotation.copy(this.child.rotation),i.position.copy(this.child.position),this.scene.add(i)}createLine2(){const e=new Pa(this.child.geometry),{max:t,min:i}=this.child.geometry.boundingBox,r=new _t({uniforms:{line_color:{value:new Re(ft.soundLine)},u_time:this.time,u_max:{value:t},u_min:{value:i},live_color:{value:new Re(ft.liveColor)}},vertexShader:`
        uniform vec3 line_color;
        varying vec3 v_color;

        uniform float u_time;
        uniform vec3 live_color;
        uniform vec3 u_max;
        uniform vec3 u_min;
        
        void main() {
          //当前光带移动速度
          float new_time = mod(u_time * 0.1, 1.0);
          // 扫描的位置,从左到右
          float rangeY = mix(u_min.y, u_max.y, new_time);

          // 当前在这个区间内，显示扫描光带
          if (rangeY < position.y && rangeY > position.y - 200.0) {
            float f_index = 1.0 - sin((position.y - rangeY) / 200.0 * 3.14); //模糊光带
            float r = mix(live_color.r, line_color.r, f_index);
            float g = mix(live_color.g, line_color.g, f_index);
            float b = mix(live_color.b, line_color.b, f_index);
            
            v_color = vec3(r,g,b);
          } else {
            v_color = line_color;
          }
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(vec3(position), 1.0);
        }
      `,fragmentShader:`
        varying vec3 v_color;
      
        void main() {
           gl_FragColor = vec4(v_color, 1.0);
        }
      `}),s=new Ta(e,r);s.scale.copy(this.child.scale),s.rotation.copy(this.child.rotation),s.position.copy(this.child.position),this.scene.add(s)}createLine3(){const e=new Pa(this.child.geometry),{max:t,min:i}=this.child.geometry.boundingBox,r=new _t({uniforms:{line_color:{value:new Re(ft.soundLine)},u_time:this.time,u_max:{value:t},u_min:{value:i},live_color:{value:new Re(ft.liveColor)}},vertexShader:`
        uniform vec3 line_color;
        varying vec3 v_color;

        uniform float u_time;
        uniform vec3 live_color;
        uniform vec3 u_max;
        uniform vec3 u_min;
        
        void main() {

          //为了使得高度变化更快
          float uMax = 4.0;
          float rate = u_time / uMax * 2.0;
          //边界条件
          if(rate>1.0){
            rate=1.0;
          }
          //position不能直接修改
          float z = position.z * rate;
          
          //当前光带移动速度
          float new_time = mod(u_time * 0.1, 1.0);
          // 扫描的位置,从左到右
          float rangeY = mix(u_min.y, u_max.y, new_time);

          // 当前在这个区间内，显示扫描光带
          if (rangeY < position.y && rangeY > position.y - 200.0) {
            float f_index = 1.0 - sin((position.y - rangeY) / 200.0 * 3.14); //模糊光带
            float r = mix(live_color.r, line_color.r, f_index);
            float g = mix(live_color.g, line_color.g, f_index);
            float b = mix(live_color.b, line_color.b, f_index);
            
            v_color = vec3(r,g,b);
          } else {
            v_color = line_color;
          }
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(vec2(position),z, 1.0);
        }
      `,fragmentShader:`
        varying vec3 v_color;
      
        void main() {
           gl_FragColor = vec4(v_color, 1.0);
        }
      `}),s=new Ta(e,r);s.scale.copy(this.child.scale),s.rotation.copy(this.child.rotation),s.position.copy(this.child.position),this.scene.add(s)}}class TE{constructor(e,t){Ie(this,"scene");Ie(this,"time");this.scene=e,this.time=t,this.init()}init(){const t=new Co(100,100,1,1),i=new _t({uniforms:{u_color:{value:new Re(ft.radarColor)},u_time:this.time,u_radius:{value:50}},transparent:!0,side:Zt,vertexShader:`
                varying vec2 v_position;
                
                void main() {
                    v_position = vec2(position);

                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
          `,fragmentShader:`
                precision mediump float;
                uniform vec3 u_color;
                varying vec2 v_position;
                uniform float u_time;
                uniform float u_radius;
            
                void main() {
                    // 运行角度
                    float angle = atan(v_position.x, v_position.y);
                    // 雷达角度(有颜色弧度)
                    float new_angle = mod(angle + u_time, 3.1415926 * 2.0);
                    // 计算距离
                    float dis = distance(vec2(0.0,0.0), v_position);

                    // 外层圆环的宽度
                    float borderWidth = 5.0;
                    
                    float f_opacity = 0.0;
                    
                    // 在圆环上
                    if (dis > u_radius - borderWidth) {
                      f_opacity = 1.0;
                    }

                    // 雷达扫描的显示
                    if (dis < u_radius - borderWidth) {
                      f_opacity = 1.0 - new_angle;
                    }

                    // 处于雷达之外
                    if (dis > u_radius) {
                      f_opacity = 0.0;
                    }

                    gl_FragColor = vec4(u_color, f_opacity);
                }
          `}),r=new Tt(t,i);r.rotateX(-Math.PI/2),r.position.set(300,0,0),this.scene.add(r)}}class wE{constructor(e,t){Ie(this,"scene");Ie(this,"time");Ie(this,"config");this.scene=e,this.time=t,this.config={radius:50,height:50,open:!0,color:ft.wall,opacity:.6},this.init()}init(){const e=new hs(this.config.radius,this.config.radius,this.config.height,32,1,this.config.open);e.translate(0,this.config.height/2,0);const t=new _t({uniforms:{u_color:{value:new Re(this.config.color)},u_opacity:{value:this.config.opacity},u_height:{value:this.config.height},u_time:this.time},vertexShader:`
                uniform float u_time;
                uniform float u_height;

                varying float v_opacity;

                void main() {
                    vec3 v_position=position *mod(u_time,1.0);

                    // 渐变透明度(与高度有关)
                    // v_opacity=position.y / u_height;
                    // 翻转渐变,可旋转几何或者使用mix
                    v_opacity=mix(1.0,0.0,position.y / u_height);

                    gl_Position = projectionMatrix * modelViewMatrix * vec4(v_position, 1.0);
                }
          `,fragmentShader:`
                uniform vec3 u_color;
                uniform float u_opacity;

                varying float v_opacity;
            
                void main() {

                    gl_FragColor = vec4(u_color, u_opacity*v_opacity);
                }
          `,transparent:!0,side:Zt,depthTest:!1}),i=new Tt(e,t);i.position.set(0,0,0),this.scene.add(i)}}class AE{constructor(e,t){Ie(this,"scene");Ie(this,"time");this.scene=e,this.time=t}createCylinder(e){const t=new hs(e.radius,e.radius,e.height,32,1,e.open);t.translate(0,e.height/2,0);const i=new _t({uniforms:{u_color:{value:new Re(e.color)},u_opacity:{value:e.opacity},u_height:{value:e.height},u_time:this.time,u_speed:{value:e.speed?e.speed:1}},vertexShader:`
                uniform float u_time;
                uniform float u_height;
                uniform float u_speed;

                varying float v_opacity;

                void main() {
                    // vec3 v_position=position *mod(u_time,1.0); 
                    vec3 v_position=position *mod(u_time / u_speed,1.0);

                    // 渐变透明度(与高度有关)
                    // v_opacity=position.y / u_height;
                    // 翻转渐变,可旋转几何或者使用mix
                    v_opacity=mix(1.0,0.0,position.y / u_height);

                    gl_Position = projectionMatrix * modelViewMatrix * vec4(v_position, 1.0);
                }
          `,fragmentShader:`
                uniform vec3 u_color;
                uniform float u_opacity;

                varying float v_opacity;
            
                void main() {

                    gl_FragColor = vec4(u_color, u_opacity*v_opacity);
                }
          `,transparent:!0,side:Zt,depthTest:!1}),r=new Tt(t,i);r.position.copy(e.position),this.scene.add(r)}}class RE{constructor(e,t){Ie(this,"config");this.config={radius:50,height:1,open:!1,color:ft.circle,opacity:.6,position:{x:300,y:0,z:300},speed:2},new AE(e,t).createCylinder(this.config)}}class CE{constructor(e,t,i){Ie(this,"scene");Ie(this,"top");Ie(this,"height");this.scene=e,this.top=t,this.height=i,this.createCone({color:ft.cone,height:60,opacity:.6,speed:4,position:{x:0,y:50,z:0}})}createCone(e){const t=new $l(15,30,4),i=new _t({uniforms:{u_color:{value:new Re(e.color)},u_height:this.height,u_top:this.top},vertexShader:`
            uniform float u_top;
            uniform float u_height;
            
            void main() {
                // 旋转公式
                float f_angle = u_height / 10.0;
                float new_x = position.x * cos(f_angle) - position.z * sin(f_angle);
                float new_y = position.y;
                float new_z = position.z * cos(f_angle) + position.x * sin(f_angle);
            
                vec4 v_position = vec4(new_x, new_y + u_top, new_z, 1.0);
            
                // gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                gl_Position = projectionMatrix * modelViewMatrix * v_position;
            }
      `,fragmentShader:`
            uniform vec3 u_color;
            
            void main() {
            gl_FragColor = vec4(u_color, 0.6);
            }
      `,transparent:!0,side:Zt,depthTest:!1}),r=new Tt(t,i);r.position.copy(e.position),r.rotateZ(Math.PI),this.scene.add(r)}}class PE{constructor(e,t){Ie(this,"scene");Ie(this,"time");this.scene=e,this.time=t,this.createFly({source:{x:300,y:0,z:-200},target:{x:-500,y:0,z:-240},range:200,height:300,color:ft.fly,size:30})}createFly(e){const t=new I(e.source.x,e.source.y,e.source.z),i=new I(e.target.x,e.target.y,e.target.z),r=i.clone().lerp(t,.5);r.y+=e.height;const s=parseInt(t.distanceTo(i)),a=new id(t,r,i).getPoints(s),l=[],c=[];a.forEach((d,g)=>{l.push(d.x,d.y,d.z),c.push(g)});const u=new yt;u.setAttribute("position",new st(l,3)),u.setAttribute("a_position",new st(c,1));const h=new _t({uniforms:{u_color:{value:new Re(e.color)},u_range:{value:e.range},u_size:{value:e.size},u_total:{value:s},u_time:this.time},vertexShader:`
                attribute float a_position;
                
                uniform float u_time;
                uniform float u_size;
                uniform float u_range;
                uniform float u_total;
            
                varying float v_opacity;
                
                void main() {
                    float size = u_size;
                    float total_number = u_total * mod(u_time, 1.0);
                    
                    if (total_number > a_position && total_number < a_position + u_range) {
                    
                        // 拖尾效果,超出范围的大小为0
                        float index = (a_position + u_range - total_number) / u_range;
                        size *= index;
                        
                        v_opacity = 1.0;
                    } else {
                        v_opacity = 0.0;
                    }
                    
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    gl_PointSize = size / 10.0;
                }
            `,fragmentShader:`
                uniform vec3 u_color;
                varying float v_opacity;
                
                void main() {
                    gl_FragColor = vec4(u_color, v_opacity);
                }
            `,transparent:!0}),f=new Lo(u,h);this.scene.add(f)}}class LE{constructor(e,t){Ie(this,"scene");Ie(this,"time");this.scene=e,this.time=t,this.createFly({source:{x:300,y:0,z:-200},target:{x:-500,y:0,z:-240},range:200,color:ft.fly,size:30,length:400})}createFly(e){const i=new ed([new I(-320,0,160),new I(-150,0,-40),new I(-10,0,-35),new I(40,0,40),new I(30,0,150),new I(-100,0,310)]).getPoints(e.length),r=[],s=[];i.forEach((c,u)=>{r.push(c.x,c.y,c.z),s.push(u)});const o=new yt;o.setAttribute("position",new st(r,3)),o.setAttribute("a_position",new st(s,1));const a=new _t({uniforms:{u_color:{value:new Re(e.color)},u_range:{value:e.range},u_size:{value:e.size},u_total:{value:e.length},u_time:this.time},vertexShader:`
                attribute float a_position;
                
                uniform float u_time;
                uniform float u_size;
                uniform float u_range;
                uniform float u_total;
            
                varying float v_opacity;
                
                void main() {
                    float size = u_size;
                    float total_number = u_total * mod(u_time, 1.0);
                    
                    if (total_number > a_position && total_number < a_position + u_range) {
                    
                        // 拖尾效果
                        float index = (a_position + u_range - total_number) / u_range;
                        size *= index;
                        
                        v_opacity = 1.0;
                    } else {
                        v_opacity = 0.0;
                    }
                    
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    gl_PointSize = size / 10.0;
                }
            `,fragmentShader:`
                uniform vec3 u_color;
                varying float v_opacity;
                
                void main() {
                    gl_FragColor = vec4(u_color, v_opacity);
                }
            `,transparent:!0}),l=new Lo(o,a);this.scene.add(l)}}class IE extends li{constructor(e){super(e)}load(e,t,i,r){const s=this,o=new fd(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=s.parse(JSON.parse(a));t&&t(l)},i,r)}parse(e){return new DE(e)}}let DE=class{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const i=[],r=UE(e,t,this.data);for(let s=0,o=r.length;s<o;s++)i.push(...r[s].toShapes());return i}};function UE(n,e,t){const i=Array.from(n),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[];let a=0,l=0;for(let c=0;c<i.length;c++){const u=i[c];if(u===`
`)a=0,l-=s;else{const h=FE(u,r,a,l,t);a+=h.offsetX,o.push(h.path)}}return o}function FE(n,e,t,i,r){const s=r.glyphs[n]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+n+'" does not exists in font family '+r.familyName+".");return}const o=new zS;let a,l,c,u,h,f,d,g;if(s.o){const _=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,p=_.length;m<p;)switch(_[m++]){case"m":a=_[m++]*e+t,l=_[m++]*e+i,o.moveTo(a,l);break;case"l":a=_[m++]*e+t,l=_[m++]*e+i,o.lineTo(a,l);break;case"q":c=_[m++]*e+t,u=_[m++]*e+i,h=_[m++]*e+t,f=_[m++]*e+i,o.quadraticCurveTo(h,f,c,u);break;case"b":c=_[m++]*e+t,u=_[m++]*e+i,h=_[m++]*e+t,f=_[m++]*e+i,d=_[m++]*e+t,g=_[m++]*e+i,o.bezierCurveTo(h,f,d,g,c,u);break}}return{offsetX:s.ha*e,path:o}}class NE extends Jl{constructor(e,t={}){const i=t.font;if(i===void 0)super();else{const r=i.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type="TextGeometry"}}class OE{constructor(e){Ie(this,"scene");Ie(this,"font");this.scene=e,this.font=null,this.init()}init(){new IE().load("./font.json",t=>{this.font=t,this.createTextQueue()})}createTextQueue(){[{text:"最高的楼",size:20,position:{x:-10,y:130,z:410},rotate:Math.PI/1.3,color:"#ffffff"},{text:"第二高",size:20,position:{x:180,y:110,z:-70},rotate:Math.PI/2,color:"#ffffff"}].forEach(e=>{this.createText(e)})}createText(e){const t=new NE(e.text,{font:this.font,size:20,height:2}),i=new _t({vertexShader:`
        void main() {
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        void main() {
          gl_FragColor = vec4(1.0,1.0,1.0,1.0);
        }
      `}),r=new Tt(t,i);r.position.copy(e.position),r.rotateY(e.rotate),this.scene.add(r)}}class BE{constructor(e){Ie(this,"scene");Ie(this,"smokes");Ie(this,"geometry");Ie(this,"material");Ie(this,"points");this.scene=e,this.smokes=[],this.init()}init(){this.geometry=new yt,this.material=new ql({size:50,map:new Ql().load("./img/smoke.png"),transparent:!0,depthWrite:!1}),this.material.onBeforeCompile=function(e){const t=`
        attribute float a_opacity;
        attribute float a_size;
        attribute float a_scale;
        varying float v_opacity;

        void main() {
          v_opacity = a_opacity;
      `,i=`
        gl_PointSize = a_size * a_scale;
      `;e.vertexShader=e.vertexShader.replace("void main() {",t),e.vertexShader=e.vertexShader.replace("gl_PointSize = size",i);const r=`
        varying float v_opacity;

        void main() {
      `,s=`
        gl_FragColor = vec4(outgoingLight, diffuseColor.a * v_opacity);
      `;e.fragmentShader=e.fragmentShader.replace("void main() {",r),e.fragmentShader=e.fragmentShader.replace("gl_FragColor = vec4(outgoingLight, diffuseColor.a);",s)},this.points=new Lo(this.geometry,this.material),this.scene.add(this.points)}createParticle(){this.smokes.push({size:50,opacity:1,x:490,y:10,z:353,speed:{x:Math.random(),y:Math.random()+.3,z:Math.random()},scale:1})}setAttribute(e,t,i,r){this.geometry.setAttribute("position",new Gt(new Float32Array(e),3)),this.geometry.setAttribute("a_opacity",new Gt(new Float32Array(t),1)),this.geometry.setAttribute("a_size",new Gt(new Float32Array(i),1)),this.geometry.setAttribute("a_scale",new Gt(new Float32Array(r),1))}update(){const e=[],t=[],i=[],r=[];this.smokes=this.smokes.filter(s=>s.opacity<0?!1:(s.opacity-=.01,s.x=s.x+s.speed.x,s.y=s.y+s.speed.y,s.z=s.z+s.speed.z,s.scale+=.01,e.push(s.x,s.y,s.z),t.push(s.size),i.push(s.scale),r.push(s.opacity),!0)),this.setAttribute(e,r,t,i)}animation(){this.createParticle(),this.update()}}class zE{constructor(e,{size:t,opacity:i,range:r,count:s,setAnimation:o,setPosition:a,url:l}){Ie(this,"scene");Ie(this,"range");Ie(this,"count");Ie(this,"pointList");Ie(this,"size");Ie(this,"opacity");Ie(this,"setAnimation");Ie(this,"setPosition");Ie(this,"url");Ie(this,"material");Ie(this,"geometry");Ie(this,"point");this.scene=e,this.range=r,this.count=s,this.pointList=[],this.size=t,this.opacity=i,this.setAnimation=o,this.setPosition=a,this.url=l,this.init()}init(){this.material=new ql({size:this.size,map:new Ql().load(this.url),transparent:!0,opacity:this.opacity,depthTest:!1}),this.geometry=new yt;for(let e=0;e<this.count;e++){const t=new I(Math.random()*this.range-this.range/2,Math.random()*this.range,Math.random()*this.range-this.range/2);this.setPosition(t),this.pointList.push(t)}this.geometry.setFromPoints(this.pointList),this.point=new Lo(this.geometry,this.material),this.scene.add(this.point)}animation(){this.pointList.forEach(e=>{this.setAnimation(e)}),this.point.geometry.setFromPoints(this.pointList)}}class HE{constructor(e){Ie(this,"points");this.points=new zE(e,{size:10,opacity:.4,range:1e3,count:800,setAnimation(t){t.y-=t.speedY,t.y<=0&&(t.y=this.range/2)},setPosition(t){t.speedY=20},url:"./img/rain.png"})}animation(){this.points.animation()}}class kE{constructor(e,t,i){Ie(this,"scene");Ie(this,"camera");Ie(this,"controls");Ie(this,"tweenPosition");Ie(this,"tweenRotation");Ie(this,"height");Ie(this,"time");Ie(this,"top");Ie(this,"flag");Ie(this,"effect");this.scene=e,this.camera=t,this.controls=i,this.tweenPosition=null,this.tweenRotation=null,this.height={value:5},this.time={value:0},this.top={value:0},this.flag=!1,this.effect={},this.loadCity(),this.addWheel()}loadCity(){ME("./model/beijing.fbx").then(e=>{e.traverse(t=>{t.isMesh&&new bE(this.scene,t,this.height,this.time)}),this.initEffect()})}start(e){this.tweenPosition&&this.tweenRotation&&(this.tweenPosition.update(),this.tweenRotation.update()),this.height.value+=.4,this.height.value>160&&(this.height.value=5),this.time.value+=e,(this.top.value>15||this.top.value<0)&&(this.flag=!this.flag),this.top.value+=this.flag?-.8:.8;for(const t in this.effect)this.effect[t]&&this.effect[t].animation()}initEffect(){new TE(this.scene,this.time),new wE(this.scene,this.time),new RE(this.scene,this.time),new CE(this.scene,this.top,this.height),new PE(this.scene,this.time),new LE(this.scene,this.time),new OE(this.scene),this.effect.smoke=new BE(this.scene),this.effect.rain=new HE(this.scene),this.addClick()}addClick(){let e=!0;document.onmousedown=()=>{e=!0,document.onmousemove=()=>{e=!1}},document.onmouseup=t=>{e&&this.clickEvent(t),document.onmousemove=null}}clickEvent(e){const t=e.clientX/window.innerWidth*2-1,i=-(e.clientY/window.innerHeight)*2+1,o=new I(t,i,.5).unproject(this.camera).sub(this.camera.position).normalize(),l=new BS(this.camera.position,o).intersectObjects(this.scene.children,!0);let c=null;l.length&&(c=l[0]),c&&(this.tweenPosition=new Dh(this.camera.position).to({x:c.point.x*3,y:c.point.y*3,z:c.point.z*3},1e3).start(),this.tweenRotation=new Dh(this.camera.rotation).to({x:this.camera.rotation.x,y:this.camera.rotation.y,z:this.camera.rotation.z},1e3).start())}addWheel(){const e=document.body;e.onmoussewheel=t=>{const r=t.clientX/window.innerWidth*2-1,s=-(t.clientY/window.innerHeight)*2+1,o=new I(r,s,.5);o.unproject(this.camera),o.sub(this.camera.position).normalize(),t.wheelDelta>0?(this.camera.position.x+=o.x*30,this.camera.position.y+=o.y*30,this.camera.position.z+=o.z*30,this.controls.target.x+=o.x*30,this.controls.target.y+=o.y*30,this.controls.target.z+=o.z*30):(this.camera.position.x-=o.x*30,this.camera.position.y-=o.y*30,this.camera.position.z-=o.z*30,this.controls.target.x-=o.x*30,this.controls.target.y-=o.y*30,this.controls.target.z-=o.z*30)}}}const Uh={type:"change"},Ba={type:"start"},Fh={type:"end"},Js=new Tr,Nh=new Jn,VE=Math.cos(70*pn.DEG2RAD);class GE extends Pi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Di.ROTATE,MIDDLE:Di.DOLLY,RIGHT:Di.PAN},this.touches={ONE:Ui.ROTATE,TWO:Ui.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",y),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",y),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Uh),i.update(),s=r.NONE},this.update=function(){const D=new I,ue=new sn().setFromUnitVectors(e.up,new I(0,1,0)),Ee=ue.clone().invert(),de=new I,me=new sn,Fe=new I,Ke=2*Math.PI;return function(be=null){const Q=i.object.position;D.copy(Q).sub(i.target),D.applyQuaternion(ue),a.setFromVector3(D),i.autoRotate&&s===r.NONE&&ee(S(be)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let pe=i.minAzimuthAngle,ve=i.maxAzimuthAngle;isFinite(pe)&&isFinite(ve)&&(pe<-Math.PI?pe+=Ke:pe>Math.PI&&(pe-=Ke),ve<-Math.PI?ve+=Ke:ve>Math.PI&&(ve-=Ke),pe<=ve?a.theta=Math.max(pe,Math.min(ve,a.theta)):a.theta=a.theta>(pe+ve)/2?Math.max(pe,a.theta):Math.min(ve,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.zoomToCursor&&P||i.object.isOrthographicCamera?a.radius=he(a.radius):a.radius=he(a.radius*c),D.setFromSpherical(a),D.applyQuaternion(Ee),Q.copy(i.target).add(D),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let Xe=!1;if(i.zoomToCursor&&P){let et=null;if(i.object.isPerspectiveCamera){const it=D.length();et=he(it*c);const jt=it-et;i.object.position.addScaledVector(M,jt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const it=new I(A.x,A.y,0);it.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Xe=!0;const jt=new I(A.x,A.y,0);jt.unproject(i.object),i.object.position.sub(jt).add(it),i.object.updateMatrixWorld(),et=D.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;et!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(et).add(i.object.position):(Js.origin.copy(i.object.position),Js.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Js.direction))<VE?e.lookAt(i.target):(Nh.setFromNormalAndCoplanarPoint(i.object.up,i.target),Js.intersectPlane(Nh,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Xe=!0);return c=1,P=!1,Xe||de.distanceToSquared(i.object.position)>o||8*(1-me.dot(i.object.quaternion))>o||Fe.distanceToSquared(i.target)>0?(i.dispatchEvent(Uh),de.copy(i.object.position),me.copy(i.object.quaternion),Fe.copy(i.target),Xe=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",oe),i.domElement.removeEventListener("pointerdown",$),i.domElement.removeEventListener("pointercancel",ne),i.domElement.removeEventListener("wheel",E),i.domElement.removeEventListener("pointermove",G),i.domElement.removeEventListener("pointerup",ne),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",y),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Rh,l=new Rh;let c=1;const u=new I,h=new ge,f=new ge,d=new ge,g=new ge,_=new ge,m=new ge,p=new ge,b=new ge,x=new ge,M=new I,A=new ge;let P=!1;const w=[],B={};function S(D){return D!==null?2*Math.PI/60*i.autoRotateSpeed*D:2*Math.PI/60/60*i.autoRotateSpeed}function T(){return Math.pow(.95,i.zoomSpeed)}function ee(D){l.theta-=D}function ae(D){l.phi-=D}const z=function(){const D=new I;return function(Ee,de){D.setFromMatrixColumn(de,0),D.multiplyScalar(-Ee),u.add(D)}}(),k=function(){const D=new I;return function(Ee,de){i.screenSpacePanning===!0?D.setFromMatrixColumn(de,1):(D.setFromMatrixColumn(de,0),D.crossVectors(i.object.up,D)),D.multiplyScalar(Ee),u.add(D)}}(),Y=function(){const D=new I;return function(Ee,de){const me=i.domElement;if(i.object.isPerspectiveCamera){const Fe=i.object.position;D.copy(Fe).sub(i.target);let Ke=D.length();Ke*=Math.tan(i.object.fov/2*Math.PI/180),z(2*Ee*Ke/me.clientHeight,i.object.matrix),k(2*de*Ke/me.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(z(Ee*(i.object.right-i.object.left)/i.object.zoom/me.clientWidth,i.object.matrix),k(de*(i.object.top-i.object.bottom)/i.object.zoom/me.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function J(D){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function j(D){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(D){if(!i.zoomToCursor)return;P=!0;const ue=i.domElement.getBoundingClientRect(),Ee=D.clientX-ue.left,de=D.clientY-ue.top,me=ue.width,Fe=ue.height;A.x=Ee/me*2-1,A.y=-(de/Fe)*2+1,M.set(A.x,A.y,1).unproject(i.object).sub(i.object.position).normalize()}function he(D){return Math.max(i.minDistance,Math.min(i.maxDistance,D))}function le(D){h.set(D.clientX,D.clientY)}function H(D){K(D),p.set(D.clientX,D.clientY)}function W(D){g.set(D.clientX,D.clientY)}function _e(D){f.set(D.clientX,D.clientY),d.subVectors(f,h).multiplyScalar(i.rotateSpeed);const ue=i.domElement;ee(2*Math.PI*d.x/ue.clientHeight),ae(2*Math.PI*d.y/ue.clientHeight),h.copy(f),i.update()}function Me(D){b.set(D.clientX,D.clientY),x.subVectors(b,p),x.y>0?J(T()):x.y<0&&j(T()),p.copy(b),i.update()}function Te(D){_.set(D.clientX,D.clientY),m.subVectors(_,g).multiplyScalar(i.panSpeed),Y(m.x,m.y),g.copy(_),i.update()}function we(D){K(D),D.deltaY<0?j(T()):D.deltaY>0&&J(T()),i.update()}function Ce(D){let ue=!1;switch(D.code){case i.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?ae(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(0,i.keyPanSpeed),ue=!0;break;case i.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?ae(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(0,-i.keyPanSpeed),ue=!0;break;case i.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?ee(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(i.keyPanSpeed,0),ue=!0;break;case i.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?ee(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(-i.keyPanSpeed,0),ue=!0;break}ue&&(D.preventDefault(),i.update())}function Pe(){if(w.length===1)h.set(w[0].pageX,w[0].pageY);else{const D=.5*(w[0].pageX+w[1].pageX),ue=.5*(w[0].pageY+w[1].pageY);h.set(D,ue)}}function ze(){if(w.length===1)g.set(w[0].pageX,w[0].pageY);else{const D=.5*(w[0].pageX+w[1].pageX),ue=.5*(w[0].pageY+w[1].pageY);g.set(D,ue)}}function Je(){const D=w[0].pageX-w[1].pageX,ue=w[0].pageY-w[1].pageY,Ee=Math.sqrt(D*D+ue*ue);p.set(0,Ee)}function Le(){i.enableZoom&&Je(),i.enablePan&&ze()}function v(){i.enableZoom&&Je(),i.enableRotate&&Pe()}function C(D){if(w.length==1)f.set(D.pageX,D.pageY);else{const Ee=q(D),de=.5*(D.pageX+Ee.x),me=.5*(D.pageY+Ee.y);f.set(de,me)}d.subVectors(f,h).multiplyScalar(i.rotateSpeed);const ue=i.domElement;ee(2*Math.PI*d.x/ue.clientHeight),ae(2*Math.PI*d.y/ue.clientHeight),h.copy(f)}function L(D){if(w.length===1)_.set(D.pageX,D.pageY);else{const ue=q(D),Ee=.5*(D.pageX+ue.x),de=.5*(D.pageY+ue.y);_.set(Ee,de)}m.subVectors(_,g).multiplyScalar(i.panSpeed),Y(m.x,m.y),g.copy(_)}function O(D){const ue=q(D),Ee=D.pageX-ue.x,de=D.pageY-ue.y,me=Math.sqrt(Ee*Ee+de*de);b.set(0,me),x.set(0,Math.pow(b.y/p.y,i.zoomSpeed)),J(x.y),p.copy(b)}function U(D){i.enableZoom&&O(D),i.enablePan&&L(D)}function Z(D){i.enableZoom&&O(D),i.enableRotate&&C(D)}function $(D){i.enabled!==!1&&(w.length===0&&(i.domElement.setPointerCapture(D.pointerId),i.domElement.addEventListener("pointermove",G),i.domElement.addEventListener("pointerup",ne)),ce(D),D.pointerType==="touch"?N(D):te(D))}function G(D){i.enabled!==!1&&(D.pointerType==="touch"?ie(D):ye(D))}function ne(D){xe(D),w.length===0&&(i.domElement.releasePointerCapture(D.pointerId),i.domElement.removeEventListener("pointermove",G),i.domElement.removeEventListener("pointerup",ne)),i.dispatchEvent(Fh),s=r.NONE}function te(D){let ue;switch(D.button){case 0:ue=i.mouseButtons.LEFT;break;case 1:ue=i.mouseButtons.MIDDLE;break;case 2:ue=i.mouseButtons.RIGHT;break;default:ue=-1}switch(ue){case Di.DOLLY:if(i.enableZoom===!1)return;H(D),s=r.DOLLY;break;case Di.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(i.enablePan===!1)return;W(D),s=r.PAN}else{if(i.enableRotate===!1)return;le(D),s=r.ROTATE}break;case Di.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(i.enableRotate===!1)return;le(D),s=r.ROTATE}else{if(i.enablePan===!1)return;W(D),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ba)}function ye(D){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;_e(D);break;case r.DOLLY:if(i.enableZoom===!1)return;Me(D);break;case r.PAN:if(i.enablePan===!1)return;Te(D);break}}function E(D){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(D.preventDefault(),i.dispatchEvent(Ba),we(D),i.dispatchEvent(Fh))}function y(D){i.enabled===!1||i.enablePan===!1||Ce(D)}function N(D){switch(fe(D),w.length){case 1:switch(i.touches.ONE){case Ui.ROTATE:if(i.enableRotate===!1)return;Pe(),s=r.TOUCH_ROTATE;break;case Ui.PAN:if(i.enablePan===!1)return;ze(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Ui.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Le(),s=r.TOUCH_DOLLY_PAN;break;case Ui.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;v(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ba)}function ie(D){switch(fe(D),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;C(D),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;L(D),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;U(D),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Z(D),i.update();break;default:s=r.NONE}}function oe(D){i.enabled!==!1&&D.preventDefault()}function ce(D){w.push(D)}function xe(D){delete B[D.pointerId];for(let ue=0;ue<w.length;ue++)if(w[ue].pointerId==D.pointerId){w.splice(ue,1);return}}function fe(D){let ue=B[D.pointerId];ue===void 0&&(ue=new ge,B[D.pointerId]=ue),ue.set(D.pageX,D.pageY)}function q(D){const ue=D.pointerId===w[0].pointerId?w[1]:w[0];return B[ue.pointerId]}i.domElement.addEventListener("contextmenu",oe),i.domElement.addEventListener("pointerdown",$),i.domElement.addEventListener("pointercancel",ne),i.domElement.addEventListener("wheel",E,{passive:!1}),this.update()}}const WE=()=>{const n=document.getElementById("webgl"),e=new CM,t=new zt(45,window.innerWidth/window.innerHeight,1,1e5);t.position.set(1e3,500,100),e.add(t);const i=new GE(t,n);i.enableDamping=!0,i.enableZoom=!1,i.minDistance=100,i.maxDistance=2e3,i.enablePan=!0,e.add(new pd(11382189));const r=new dd(16777215);r.position.set(0,0,0),e.add(r);const s=new $f({canvas:n});s.setSize(window.innerWidth,window.innerHeight),s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.setClearColor(new Re(0),1);const o=new kE(e,t,i),a=new RS,l=()=>{o.start(a.getDelta()),i.update(),s.render(e,t),requestAnimationFrame(l)};l(),window.addEventListener("resize",()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight),s.setPixelRatio(Math.min(window.devicePixelRatio,2))})},XE=jp({name:"CityMap",data(){return{}},mounted(){WE()},render(){return Hn("canvas",{id:"webgl",class:lg},[Mf("浏览器不支持canvas")])}}),jE=()=>Hn(XE,null,null);og(jE).mount("#app");
