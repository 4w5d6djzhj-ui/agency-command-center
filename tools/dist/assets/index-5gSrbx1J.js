(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function yd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ql={exports:{}},As={},Gl={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pr=Symbol.for("react.element"),gd=Symbol.for("react.portal"),vd=Symbol.for("react.fragment"),wd=Symbol.for("react.strict_mode"),xd=Symbol.for("react.profiler"),kd=Symbol.for("react.provider"),Nd=Symbol.for("react.context"),jd=Symbol.for("react.forward_ref"),Sd=Symbol.for("react.suspense"),bd=Symbol.for("react.memo"),Cd=Symbol.for("react.lazy"),Na=Symbol.iterator;function _d(e){return e===null||typeof e!="object"?null:(e=Na&&e[Na]||e["@@iterator"],typeof e=="function"?e:null)}var Kl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xl=Object.assign,Jl={};function jn(e,t,n){this.props=e,this.context=t,this.refs=Jl,this.updater=n||Kl}jn.prototype.isReactComponent={};jn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};jn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zl(){}Zl.prototype=jn.prototype;function Si(e,t,n){this.props=e,this.context=t,this.refs=Jl,this.updater=n||Kl}var bi=Si.prototype=new Zl;bi.constructor=Si;Xl(bi,jn.prototype);bi.isPureReactComponent=!0;var ja=Array.isArray,eu=Object.prototype.hasOwnProperty,Ci={current:null},tu={key:!0,ref:!0,__self:!0,__source:!0};function nu(e,t,n){var r,s={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)eu.call(t,r)&&!tu.hasOwnProperty(r)&&(s[r]=t[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];s.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:pr,type:e,key:i,ref:a,props:s,_owner:Ci.current}}function Ad(e,t){return{$$typeof:pr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function _i(e){return typeof e=="object"&&e!==null&&e.$$typeof===pr}function Id(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Sa=/\/+/g;function Qs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Id(""+e.key):t.toString(36)}function Wr(e,t,n,r,s){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case pr:case gd:a=!0}}if(a)return a=e,s=s(a),e=r===""?"."+Qs(a,0):r,ja(s)?(n="",e!=null&&(n=e.replace(Sa,"$&/")+"/"),Wr(s,t,n,"",function(c){return c})):s!=null&&(_i(s)&&(s=Ad(s,n+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(Sa,"$&/")+"/")+e)),t.push(s)),1;if(a=0,r=r===""?".":r+":",ja(e))for(var l=0;l<e.length;l++){i=e[l];var u=r+Qs(i,l);a+=Wr(i,t,n,u,s)}else if(u=_d(e),typeof u=="function")for(e=u.call(e),l=0;!(i=e.next()).done;)i=i.value,u=r+Qs(i,l++),a+=Wr(i,t,n,u,s);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function wr(e,t,n){if(e==null)return e;var r=[],s=0;return Wr(e,r,"","",function(i){return t.call(n,i,s++)}),r}function Ed(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},Ur={transition:null},Rd={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:Ur,ReactCurrentOwner:Ci};function ru(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:wr,forEach:function(e,t,n){wr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return wr(e,function(){t++}),t},toArray:function(e){return wr(e,function(t){return t})||[]},only:function(e){if(!_i(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=jn;O.Fragment=vd;O.Profiler=xd;O.PureComponent=Si;O.StrictMode=wd;O.Suspense=Sd;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rd;O.act=ru;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Xl({},e.props),s=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=Ci.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)eu.call(t,u)&&!tu.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:pr,type:e.type,key:s,ref:i,props:r,_owner:a}};O.createContext=function(e){return e={$$typeof:Nd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:kd,_context:e},e.Consumer=e};O.createElement=nu;O.createFactory=function(e){var t=nu.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:jd,render:e}};O.isValidElement=_i;O.lazy=function(e){return{$$typeof:Cd,_payload:{_status:-1,_result:e},_init:Ed}};O.memo=function(e,t){return{$$typeof:bd,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=Ur.transition;Ur.transition={};try{e()}finally{Ur.transition=t}};O.unstable_act=ru;O.useCallback=function(e,t){return fe.current.useCallback(e,t)};O.useContext=function(e){return fe.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};O.useEffect=function(e,t){return fe.current.useEffect(e,t)};O.useId=function(){return fe.current.useId()};O.useImperativeHandle=function(e,t,n){return fe.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return fe.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return fe.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return fe.current.useMemo(e,t)};O.useReducer=function(e,t,n){return fe.current.useReducer(e,t,n)};O.useRef=function(e){return fe.current.useRef(e)};O.useState=function(e){return fe.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return fe.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return fe.current.useTransition()};O.version="18.3.1";Gl.exports=O;var I=Gl.exports;const Pd=yd(I);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Td=I,Md=Symbol.for("react.element"),Od=Symbol.for("react.fragment"),Ld=Object.prototype.hasOwnProperty,Dd=Td.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$d={key:!0,ref:!0,__self:!0,__source:!0};function su(e,t,n){var r,s={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Ld.call(t,r)&&!$d.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:Md,type:e,key:i,ref:a,props:s,_owner:Dd.current}}As.Fragment=Od;As.jsx=su;As.jsxs=su;Ql.exports=As;var o=Ql.exports,Ao={},ou={exports:{}},Ae={},iu={exports:{}},au={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,E){var P=j.length;j.push(E);e:for(;0<P;){var U=P-1>>>1,G=j[U];if(0<s(G,E))j[U]=E,j[P]=G,P=U;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var E=j[0],P=j.pop();if(P!==E){j[0]=P;e:for(var U=0,G=j.length,Je=G>>>1;U<Je;){var Ze=2*(U+1)-1,Qt=j[Ze],ge=Ze+1,Rt=j[ge];if(0>s(Qt,P))ge<G&&0>s(Rt,Qt)?(j[U]=Rt,j[ge]=P,U=ge):(j[U]=Qt,j[Ze]=P,U=Ze);else if(ge<G&&0>s(Rt,P))j[U]=Rt,j[ge]=P,U=ge;else break e}}return E}function s(j,E){var P=j.sortIndex-E.sortIndex;return P!==0?P:j.id-E.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var u=[],c=[],p=1,v=null,f=3,g=!1,w=!1,x=!1,C=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(j){for(var E=n(c);E!==null;){if(E.callback===null)r(c);else if(E.startTime<=j)r(c),E.sortIndex=E.expirationTime,t(u,E);else break;E=n(c)}}function y(j){if(x=!1,m(j),!w)if(n(u)!==null)w=!0,J(N);else{var E=n(c);E!==null&&je(y,E.startTime-j)}}function N(j,E){w=!1,x&&(x=!1,h(A),A=-1),g=!0;var P=f;try{for(m(E),v=n(u);v!==null&&(!(v.expirationTime>E)||j&&!oe());){var U=v.callback;if(typeof U=="function"){v.callback=null,f=v.priorityLevel;var G=U(v.expirationTime<=E);E=e.unstable_now(),typeof G=="function"?v.callback=G:v===n(u)&&r(u),m(E)}else r(u);v=n(u)}if(v!==null)var Je=!0;else{var Ze=n(c);Ze!==null&&je(y,Ze.startTime-E),Je=!1}return Je}finally{v=null,f=P,g=!1}}var S=!1,_=null,A=-1,L=5,T=-1;function oe(){return!(e.unstable_now()-T<L)}function We(){if(_!==null){var j=e.unstable_now();T=j;var E=!0;try{E=_(!0,j)}finally{E?Ue():(S=!1,_=null)}}else S=!1}var Ue;if(typeof d=="function")Ue=function(){d(We)};else if(typeof MessageChannel<"u"){var Yt=new MessageChannel,M=Yt.port2;Yt.port1.onmessage=We,Ue=function(){M.postMessage(null)}}else Ue=function(){C(We,0)};function J(j){_=j,S||(S=!0,Ue())}function je(j,E){A=C(function(){j(e.unstable_now())},E)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){w||g||(w=!0,J(N))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(j){switch(f){case 1:case 2:case 3:var E=3;break;default:E=f}var P=f;f=E;try{return j()}finally{f=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,E){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var P=f;f=j;try{return E()}finally{f=P}},e.unstable_scheduleCallback=function(j,E,P){var U=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?U+P:U):P=U,j){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=P+G,j={id:p++,callback:E,priorityLevel:j,startTime:P,expirationTime:G,sortIndex:-1},P>U?(j.sortIndex=P,t(c,j),n(u)===null&&j===n(c)&&(x?(h(A),A=-1):x=!0,je(y,P-U))):(j.sortIndex=G,t(u,j),w||g||(w=!0,J(N))),j},e.unstable_shouldYield=oe,e.unstable_wrapCallback=function(j){var E=f;return function(){var P=f;f=E;try{return j.apply(this,arguments)}finally{f=P}}}})(au);iu.exports=au;var Hd=iu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd=I,_e=Hd;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lu=new Set,Qn={};function Ut(e,t){yn(e,t),yn(e+"Capture",t)}function yn(e,t){for(Qn[e]=t,e=0;e<t.length;e++)lu.add(t[e])}var ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Io=Object.prototype.hasOwnProperty,Fd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ba={},Ca={};function zd(e){return Io.call(Ca,e)?!0:Io.call(ba,e)?!1:Fd.test(e)?Ca[e]=!0:(ba[e]=!0,!1)}function Bd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Wd(e,t,n,r){if(t===null||typeof t>"u"||Bd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ye(e,t,n,r,s,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];le[t]=new ye(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ai=/[\-:]([a-z])/g;function Ii(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ai,Ii);le[t]=new ye(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ai,Ii);le[t]=new ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ai,Ii);le[t]=new ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new ye(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ei(e,t,n,r){var s=le.hasOwnProperty(t)?le[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Wd(t,n,s,r)&&(n=null),r||s===null?zd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ut=qd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xr=Symbol.for("react.element"),Xt=Symbol.for("react.portal"),Jt=Symbol.for("react.fragment"),Ri=Symbol.for("react.strict_mode"),Eo=Symbol.for("react.profiler"),uu=Symbol.for("react.provider"),cu=Symbol.for("react.context"),Pi=Symbol.for("react.forward_ref"),Ro=Symbol.for("react.suspense"),Po=Symbol.for("react.suspense_list"),Ti=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),du=Symbol.for("react.offscreen"),_a=Symbol.iterator;function Cn(e){return e===null||typeof e!="object"?null:(e=_a&&e[_a]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,Gs;function Mn(e){if(Gs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Gs=t&&t[1]||""}return`
`+Gs+e}var Ks=!1;function Xs(e,t){if(!e||Ks)return"";Ks=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),a=s.length-1,l=i.length-1;1<=a&&0<=l&&s[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(s[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||s[a]!==i[l]){var u=`
`+s[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=l);break}}}finally{Ks=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Mn(e):""}function Ud(e){switch(e.tag){case 5:return Mn(e.type);case 16:return Mn("Lazy");case 13:return Mn("Suspense");case 19:return Mn("SuspenseList");case 0:case 2:case 15:return e=Xs(e.type,!1),e;case 11:return e=Xs(e.type.render,!1),e;case 1:return e=Xs(e.type,!0),e;default:return""}}function To(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Jt:return"Fragment";case Xt:return"Portal";case Eo:return"Profiler";case Ri:return"StrictMode";case Ro:return"Suspense";case Po:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case cu:return(e.displayName||"Context")+".Consumer";case uu:return(e._context.displayName||"Context")+".Provider";case Pi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ti:return t=e.displayName||null,t!==null?t:To(e.type)||"Memo";case ht:t=e._payload,e=e._init;try{return To(e(t))}catch{}}return null}function Vd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return To(t);case 8:return t===Ri?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ct(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Yd(e){var t=hu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function kr(e){e._valueTracker||(e._valueTracker=Yd(e))}function mu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=hu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function rs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Mo(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Aa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ct(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function pu(e,t){t=t.checked,t!=null&&Ei(e,"checked",t,!1)}function Oo(e,t){pu(e,t);var n=Ct(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Lo(e,t.type,n):t.hasOwnProperty("defaultValue")&&Lo(e,t.type,Ct(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ia(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Lo(e,t,n){(t!=="number"||rs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var On=Array.isArray;function cn(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ct(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Do(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ea(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(On(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ct(n)}}function fu(e,t){var n=Ct(t.value),r=Ct(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ra(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function yu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $o(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?yu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Nr,gu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Nr=Nr||document.createElement("div"),Nr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Nr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Gn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Hn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qd=["Webkit","ms","Moz","O"];Object.keys(Hn).forEach(function(e){Qd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Hn[t]=Hn[e]})});function vu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Hn.hasOwnProperty(e)&&Hn[e]?(""+t).trim():t+"px"}function wu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=vu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var Gd=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ho(e,t){if(t){if(Gd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function qo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fo=null;function Mi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zo=null,dn=null,hn=null;function Pa(e){if(e=gr(e)){if(typeof zo!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Ts(t),zo(e.stateNode,e.type,t))}}function xu(e){dn?hn?hn.push(e):hn=[e]:dn=e}function ku(){if(dn){var e=dn,t=hn;if(hn=dn=null,Pa(e),t)for(e=0;e<t.length;e++)Pa(t[e])}}function Nu(e,t){return e(t)}function ju(){}var Js=!1;function Su(e,t,n){if(Js)return e(t,n);Js=!0;try{return Nu(e,t,n)}finally{Js=!1,(dn!==null||hn!==null)&&(ju(),ku())}}function Kn(e,t){var n=e.stateNode;if(n===null)return null;var r=Ts(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Bo=!1;if(ot)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){Bo=!0}}),window.addEventListener("test",_n,_n),window.removeEventListener("test",_n,_n)}catch{Bo=!1}function Kd(e,t,n,r,s,i,a,l,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(p){this.onError(p)}}var qn=!1,ss=null,os=!1,Wo=null,Xd={onError:function(e){qn=!0,ss=e}};function Jd(e,t,n,r,s,i,a,l,u){qn=!1,ss=null,Kd.apply(Xd,arguments)}function Zd(e,t,n,r,s,i,a,l,u){if(Jd.apply(this,arguments),qn){if(qn){var c=ss;qn=!1,ss=null}else throw Error(k(198));os||(os=!0,Wo=c)}}function Vt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function bu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ta(e){if(Vt(e)!==e)throw Error(k(188))}function eh(e){var t=e.alternate;if(!t){if(t=Vt(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Ta(s),e;if(i===r)return Ta(s),t;i=i.sibling}throw Error(k(188))}if(n.return!==r.return)n=s,r=i;else{for(var a=!1,l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Cu(e){return e=eh(e),e!==null?_u(e):null}function _u(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=_u(e);if(t!==null)return t;e=e.sibling}return null}var Au=_e.unstable_scheduleCallback,Ma=_e.unstable_cancelCallback,th=_e.unstable_shouldYield,nh=_e.unstable_requestPaint,Z=_e.unstable_now,rh=_e.unstable_getCurrentPriorityLevel,Oi=_e.unstable_ImmediatePriority,Iu=_e.unstable_UserBlockingPriority,is=_e.unstable_NormalPriority,sh=_e.unstable_LowPriority,Eu=_e.unstable_IdlePriority,Is=null,Ke=null;function oh(e){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(Is,e,void 0,(e.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:lh,ih=Math.log,ah=Math.LN2;function lh(e){return e>>>=0,e===0?32:31-(ih(e)/ah|0)|0}var jr=64,Sr=4194304;function Ln(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function as(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~s;l!==0?r=Ln(l):(i&=a,i!==0&&(r=Ln(i)))}else a=n&~s,a!==0?r=Ln(a):i!==0&&(r=Ln(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,i=t&-t,s>=i||s===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Fe(t),s=1<<n,r|=e[n],t&=~s;return r}function uh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ch(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Fe(i),l=1<<a,u=s[a];u===-1?(!(l&n)||l&r)&&(s[a]=uh(l,t)):u<=t&&(e.expiredLanes|=l),i&=~l}}function Uo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ru(){var e=jr;return jr<<=1,!(jr&4194240)&&(jr=64),e}function Zs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function fr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Fe(t),e[t]=n}function dh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-Fe(n),i=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~i}}function Li(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Fe(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var H=0;function Pu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Tu,Di,Mu,Ou,Lu,Vo=!1,br=[],vt=null,wt=null,xt=null,Xn=new Map,Jn=new Map,pt=[],hh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Oa(e,t){switch(e){case"focusin":case"focusout":vt=null;break;case"dragenter":case"dragleave":wt=null;break;case"mouseover":case"mouseout":xt=null;break;case"pointerover":case"pointerout":Xn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jn.delete(t.pointerId)}}function An(e,t,n,r,s,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},t!==null&&(t=gr(t),t!==null&&Di(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function mh(e,t,n,r,s){switch(t){case"focusin":return vt=An(vt,e,t,n,r,s),!0;case"dragenter":return wt=An(wt,e,t,n,r,s),!0;case"mouseover":return xt=An(xt,e,t,n,r,s),!0;case"pointerover":var i=s.pointerId;return Xn.set(i,An(Xn.get(i)||null,e,t,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Jn.set(i,An(Jn.get(i)||null,e,t,n,r,s)),!0}return!1}function Du(e){var t=Ot(e.target);if(t!==null){var n=Vt(t);if(n!==null){if(t=n.tag,t===13){if(t=bu(n),t!==null){e.blockedOn=t,Lu(e.priority,function(){Mu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Yo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Fo=r,n.target.dispatchEvent(r),Fo=null}else return t=gr(n),t!==null&&Di(t),e.blockedOn=n,!1;t.shift()}return!0}function La(e,t,n){Vr(e)&&n.delete(t)}function ph(){Vo=!1,vt!==null&&Vr(vt)&&(vt=null),wt!==null&&Vr(wt)&&(wt=null),xt!==null&&Vr(xt)&&(xt=null),Xn.forEach(La),Jn.forEach(La)}function In(e,t){e.blockedOn===t&&(e.blockedOn=null,Vo||(Vo=!0,_e.unstable_scheduleCallback(_e.unstable_NormalPriority,ph)))}function Zn(e){function t(s){return In(s,e)}if(0<br.length){In(br[0],e);for(var n=1;n<br.length;n++){var r=br[n];r.blockedOn===e&&(r.blockedOn=null)}}for(vt!==null&&In(vt,e),wt!==null&&In(wt,e),xt!==null&&In(xt,e),Xn.forEach(t),Jn.forEach(t),n=0;n<pt.length;n++)r=pt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<pt.length&&(n=pt[0],n.blockedOn===null);)Du(n),n.blockedOn===null&&pt.shift()}var mn=ut.ReactCurrentBatchConfig,ls=!0;function fh(e,t,n,r){var s=H,i=mn.transition;mn.transition=null;try{H=1,$i(e,t,n,r)}finally{H=s,mn.transition=i}}function yh(e,t,n,r){var s=H,i=mn.transition;mn.transition=null;try{H=4,$i(e,t,n,r)}finally{H=s,mn.transition=i}}function $i(e,t,n,r){if(ls){var s=Yo(e,t,n,r);if(s===null)uo(e,t,r,us,n),Oa(e,r);else if(mh(s,e,t,n,r))r.stopPropagation();else if(Oa(e,r),t&4&&-1<hh.indexOf(e)){for(;s!==null;){var i=gr(s);if(i!==null&&Tu(i),i=Yo(e,t,n,r),i===null&&uo(e,t,r,us,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else uo(e,t,r,null,n)}}var us=null;function Yo(e,t,n,r){if(us=null,e=Mi(r),e=Ot(e),e!==null)if(t=Vt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=bu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return us=e,null}function $u(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rh()){case Oi:return 1;case Iu:return 4;case is:case sh:return 16;case Eu:return 536870912;default:return 16}default:return 16}}var yt=null,Hi=null,Yr=null;function Hu(){if(Yr)return Yr;var e,t=Hi,n=t.length,r,s="value"in yt?yt.value:yt.textContent,i=s.length;for(e=0;e<n&&t[e]===s[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===s[i-r];r++);return Yr=s.slice(e,1<r?1-r:void 0)}function Qr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Cr(){return!0}function Da(){return!1}function Ie(e){function t(n,r,s,i,a){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Cr:Da,this.isPropagationStopped=Da,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Cr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Cr)},persist:function(){},isPersistent:Cr}),t}var Sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qi=Ie(Sn),yr=Q({},Sn,{view:0,detail:0}),gh=Ie(yr),eo,to,En,Es=Q({},yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==En&&(En&&e.type==="mousemove"?(eo=e.screenX-En.screenX,to=e.screenY-En.screenY):to=eo=0,En=e),eo)},movementY:function(e){return"movementY"in e?e.movementY:to}}),$a=Ie(Es),vh=Q({},Es,{dataTransfer:0}),wh=Ie(vh),xh=Q({},yr,{relatedTarget:0}),no=Ie(xh),kh=Q({},Sn,{animationName:0,elapsedTime:0,pseudoElement:0}),Nh=Ie(kh),jh=Q({},Sn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sh=Ie(jh),bh=Q({},Sn,{data:0}),Ha=Ie(bh),Ch={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_h={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ah={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ih(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ah[e])?!!t[e]:!1}function Fi(){return Ih}var Eh=Q({},yr,{key:function(e){if(e.key){var t=Ch[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_h[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fi,charCode:function(e){return e.type==="keypress"?Qr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rh=Ie(Eh),Ph=Q({},Es,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qa=Ie(Ph),Th=Q({},yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fi}),Mh=Ie(Th),Oh=Q({},Sn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lh=Ie(Oh),Dh=Q({},Es,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$h=Ie(Dh),Hh=[9,13,27,32],zi=ot&&"CompositionEvent"in window,Fn=null;ot&&"documentMode"in document&&(Fn=document.documentMode);var qh=ot&&"TextEvent"in window&&!Fn,qu=ot&&(!zi||Fn&&8<Fn&&11>=Fn),Fa=" ",za=!1;function Fu(e,t){switch(e){case"keyup":return Hh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zt=!1;function Fh(e,t){switch(e){case"compositionend":return zu(t);case"keypress":return t.which!==32?null:(za=!0,Fa);case"textInput":return e=t.data,e===Fa&&za?null:e;default:return null}}function zh(e,t){if(Zt)return e==="compositionend"||!zi&&Fu(e,t)?(e=Hu(),Yr=Hi=yt=null,Zt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qu&&t.locale!=="ko"?null:t.data;default:return null}}var Bh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ba(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Bh[e.type]:t==="textarea"}function Bu(e,t,n,r){xu(r),t=cs(t,"onChange"),0<t.length&&(n=new qi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var zn=null,er=null;function Wh(e){ec(e,0)}function Rs(e){var t=nn(e);if(mu(t))return e}function Uh(e,t){if(e==="change")return t}var Wu=!1;if(ot){var ro;if(ot){var so="oninput"in document;if(!so){var Wa=document.createElement("div");Wa.setAttribute("oninput","return;"),so=typeof Wa.oninput=="function"}ro=so}else ro=!1;Wu=ro&&(!document.documentMode||9<document.documentMode)}function Ua(){zn&&(zn.detachEvent("onpropertychange",Uu),er=zn=null)}function Uu(e){if(e.propertyName==="value"&&Rs(er)){var t=[];Bu(t,er,e,Mi(e)),Su(Wh,t)}}function Vh(e,t,n){e==="focusin"?(Ua(),zn=t,er=n,zn.attachEvent("onpropertychange",Uu)):e==="focusout"&&Ua()}function Yh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Rs(er)}function Qh(e,t){if(e==="click")return Rs(t)}function Gh(e,t){if(e==="input"||e==="change")return Rs(t)}function Kh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Be=typeof Object.is=="function"?Object.is:Kh;function tr(e,t){if(Be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Io.call(t,s)||!Be(e[s],t[s]))return!1}return!0}function Va(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ya(e,t){var n=Va(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Va(n)}}function Vu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Yu(){for(var e=window,t=rs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=rs(e.document)}return t}function Bi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Xh(e){var t=Yu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Vu(n.ownerDocument.documentElement,n)){if(r!==null&&Bi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!e.extend&&i>r&&(s=r,r=i,i=s),s=Ya(n,i);var a=Ya(n,r);s&&a&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Jh=ot&&"documentMode"in document&&11>=document.documentMode,en=null,Qo=null,Bn=null,Go=!1;function Qa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Go||en==null||en!==rs(r)||(r=en,"selectionStart"in r&&Bi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bn&&tr(Bn,r)||(Bn=r,r=cs(Qo,"onSelect"),0<r.length&&(t=new qi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=en)))}function _r(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var tn={animationend:_r("Animation","AnimationEnd"),animationiteration:_r("Animation","AnimationIteration"),animationstart:_r("Animation","AnimationStart"),transitionend:_r("Transition","TransitionEnd")},oo={},Qu={};ot&&(Qu=document.createElement("div").style,"AnimationEvent"in window||(delete tn.animationend.animation,delete tn.animationiteration.animation,delete tn.animationstart.animation),"TransitionEvent"in window||delete tn.transitionend.transition);function Ps(e){if(oo[e])return oo[e];if(!tn[e])return e;var t=tn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qu)return oo[e]=t[n];return e}var Gu=Ps("animationend"),Ku=Ps("animationiteration"),Xu=Ps("animationstart"),Ju=Ps("transitionend"),Zu=new Map,Ga="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function At(e,t){Zu.set(e,t),Ut(t,[e])}for(var io=0;io<Ga.length;io++){var ao=Ga[io],Zh=ao.toLowerCase(),em=ao[0].toUpperCase()+ao.slice(1);At(Zh,"on"+em)}At(Gu,"onAnimationEnd");At(Ku,"onAnimationIteration");At(Xu,"onAnimationStart");At("dblclick","onDoubleClick");At("focusin","onFocus");At("focusout","onBlur");At(Ju,"onTransitionEnd");yn("onMouseEnter",["mouseout","mouseover"]);yn("onMouseLeave",["mouseout","mouseover"]);yn("onPointerEnter",["pointerout","pointerover"]);yn("onPointerLeave",["pointerout","pointerover"]);Ut("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ut("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ut("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ut("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dn));function Ka(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Zd(r,t,void 0,e),e.currentTarget=null}function ec(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;Ka(s,l,c),i=u}else for(a=0;a<r.length;a++){if(l=r[a],u=l.instance,c=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;Ka(s,l,c),i=u}}}if(os)throw e=Wo,os=!1,Wo=null,e}function F(e,t){var n=t[ei];n===void 0&&(n=t[ei]=new Set);var r=e+"__bubble";n.has(r)||(tc(t,e,2,!1),n.add(r))}function lo(e,t,n){var r=0;t&&(r|=4),tc(n,e,r,t)}var Ar="_reactListening"+Math.random().toString(36).slice(2);function nr(e){if(!e[Ar]){e[Ar]=!0,lu.forEach(function(n){n!=="selectionchange"&&(tm.has(n)||lo(n,!1,e),lo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ar]||(t[Ar]=!0,lo("selectionchange",!1,t))}}function tc(e,t,n,r){switch($u(t)){case 1:var s=fh;break;case 4:s=yh;break;default:s=$i}n=s.bind(null,t,n,e),s=void 0,!Bo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function uo(e,t,n,r,s){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;a=a.return}for(;l!==null;){if(a=Ot(l),a===null)return;if(u=a.tag,u===5||u===6){r=i=a;continue e}l=l.parentNode}}r=r.return}Su(function(){var c=i,p=Mi(n),v=[];e:{var f=Zu.get(e);if(f!==void 0){var g=qi,w=e;switch(e){case"keypress":if(Qr(n)===0)break e;case"keydown":case"keyup":g=Rh;break;case"focusin":w="focus",g=no;break;case"focusout":w="blur",g=no;break;case"beforeblur":case"afterblur":g=no;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=$a;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=wh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Mh;break;case Gu:case Ku:case Xu:g=Nh;break;case Ju:g=Lh;break;case"scroll":g=gh;break;case"wheel":g=$h;break;case"copy":case"cut":case"paste":g=Sh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=qa}var x=(t&4)!==0,C=!x&&e==="scroll",h=x?f!==null?f+"Capture":null:f;x=[];for(var d=c,m;d!==null;){m=d;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,h!==null&&(y=Kn(d,h),y!=null&&x.push(rr(d,y,m)))),C)break;d=d.return}0<x.length&&(f=new g(f,w,null,n,p),v.push({event:f,listeners:x}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",f&&n!==Fo&&(w=n.relatedTarget||n.fromElement)&&(Ot(w)||w[it]))break e;if((g||f)&&(f=p.window===p?p:(f=p.ownerDocument)?f.defaultView||f.parentWindow:window,g?(w=n.relatedTarget||n.toElement,g=c,w=w?Ot(w):null,w!==null&&(C=Vt(w),w!==C||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=c),g!==w)){if(x=$a,y="onMouseLeave",h="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(x=qa,y="onPointerLeave",h="onPointerEnter",d="pointer"),C=g==null?f:nn(g),m=w==null?f:nn(w),f=new x(y,d+"leave",g,n,p),f.target=C,f.relatedTarget=m,y=null,Ot(p)===c&&(x=new x(h,d+"enter",w,n,p),x.target=m,x.relatedTarget=C,y=x),C=y,g&&w)t:{for(x=g,h=w,d=0,m=x;m;m=Gt(m))d++;for(m=0,y=h;y;y=Gt(y))m++;for(;0<d-m;)x=Gt(x),d--;for(;0<m-d;)h=Gt(h),m--;for(;d--;){if(x===h||h!==null&&x===h.alternate)break t;x=Gt(x),h=Gt(h)}x=null}else x=null;g!==null&&Xa(v,f,g,x,!1),w!==null&&C!==null&&Xa(v,C,w,x,!0)}}e:{if(f=c?nn(c):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var N=Uh;else if(Ba(f))if(Wu)N=Gh;else{N=Yh;var S=Vh}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(N=Qh);if(N&&(N=N(e,c))){Bu(v,N,n,p);break e}S&&S(e,f,c),e==="focusout"&&(S=f._wrapperState)&&S.controlled&&f.type==="number"&&Lo(f,"number",f.value)}switch(S=c?nn(c):window,e){case"focusin":(Ba(S)||S.contentEditable==="true")&&(en=S,Qo=c,Bn=null);break;case"focusout":Bn=Qo=en=null;break;case"mousedown":Go=!0;break;case"contextmenu":case"mouseup":case"dragend":Go=!1,Qa(v,n,p);break;case"selectionchange":if(Jh)break;case"keydown":case"keyup":Qa(v,n,p)}var _;if(zi)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Zt?Fu(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(qu&&n.locale!=="ko"&&(Zt||A!=="onCompositionStart"?A==="onCompositionEnd"&&Zt&&(_=Hu()):(yt=p,Hi="value"in yt?yt.value:yt.textContent,Zt=!0)),S=cs(c,A),0<S.length&&(A=new Ha(A,e,null,n,p),v.push({event:A,listeners:S}),_?A.data=_:(_=zu(n),_!==null&&(A.data=_)))),(_=qh?Fh(e,n):zh(e,n))&&(c=cs(c,"onBeforeInput"),0<c.length&&(p=new Ha("onBeforeInput","beforeinput",null,n,p),v.push({event:p,listeners:c}),p.data=_))}ec(v,t)})}function rr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function cs(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Kn(e,n),i!=null&&r.unshift(rr(e,i,s)),i=Kn(e,t),i!=null&&r.push(rr(e,i,s))),e=e.return}return r}function Gt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xa(e,t,n,r,s){for(var i=t._reactName,a=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,s?(u=Kn(n,i),u!=null&&a.unshift(rr(n,u,l))):s||(u=Kn(n,i),u!=null&&a.push(rr(n,u,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var nm=/\r\n?/g,rm=/\u0000|\uFFFD/g;function Ja(e){return(typeof e=="string"?e:""+e).replace(nm,`
`).replace(rm,"")}function Ir(e,t,n){if(t=Ja(t),Ja(e)!==t&&n)throw Error(k(425))}function ds(){}var Ko=null,Xo=null;function Jo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zo=typeof setTimeout=="function"?setTimeout:void 0,sm=typeof clearTimeout=="function"?clearTimeout:void 0,Za=typeof Promise=="function"?Promise:void 0,om=typeof queueMicrotask=="function"?queueMicrotask:typeof Za<"u"?function(e){return Za.resolve(null).then(e).catch(im)}:Zo;function im(e){setTimeout(function(){throw e})}function co(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),Zn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Zn(t)}function kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function el(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var bn=Math.random().toString(36).slice(2),Qe="__reactFiber$"+bn,sr="__reactProps$"+bn,it="__reactContainer$"+bn,ei="__reactEvents$"+bn,am="__reactListeners$"+bn,lm="__reactHandles$"+bn;function Ot(e){var t=e[Qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[it]||n[Qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=el(e);e!==null;){if(n=e[Qe])return n;e=el(e)}return t}e=n,n=e.parentNode}return null}function gr(e){return e=e[Qe]||e[it],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function nn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Ts(e){return e[sr]||null}var ti=[],rn=-1;function It(e){return{current:e}}function z(e){0>rn||(e.current=ti[rn],ti[rn]=null,rn--)}function q(e,t){rn++,ti[rn]=e.current,e.current=t}var _t={},he=It(_t),xe=It(!1),qt=_t;function gn(e,t){var n=e.type.contextTypes;if(!n)return _t;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function ke(e){return e=e.childContextTypes,e!=null}function hs(){z(xe),z(he)}function tl(e,t,n){if(he.current!==_t)throw Error(k(168));q(he,t),q(xe,n)}function nc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(k(108,Vd(e)||"Unknown",s));return Q({},n,r)}function ms(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_t,qt=he.current,q(he,e),q(xe,xe.current),!0}function nl(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=nc(e,t,qt),r.__reactInternalMemoizedMergedChildContext=e,z(xe),z(he),q(he,e)):z(xe),q(xe,n)}var tt=null,Ms=!1,ho=!1;function rc(e){tt===null?tt=[e]:tt.push(e)}function um(e){Ms=!0,rc(e)}function Et(){if(!ho&&tt!==null){ho=!0;var e=0,t=H;try{var n=tt;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}tt=null,Ms=!1}catch(s){throw tt!==null&&(tt=tt.slice(e+1)),Au(Oi,Et),s}finally{H=t,ho=!1}}return null}var sn=[],on=0,ps=null,fs=0,Ee=[],Re=0,Ft=null,nt=1,rt="";function Pt(e,t){sn[on++]=fs,sn[on++]=ps,ps=e,fs=t}function sc(e,t,n){Ee[Re++]=nt,Ee[Re++]=rt,Ee[Re++]=Ft,Ft=e;var r=nt;e=rt;var s=32-Fe(r)-1;r&=~(1<<s),n+=1;var i=32-Fe(t)+s;if(30<i){var a=s-s%5;i=(r&(1<<a)-1).toString(32),r>>=a,s-=a,nt=1<<32-Fe(t)+s|n<<s|r,rt=i+e}else nt=1<<i|n<<s|r,rt=e}function Wi(e){e.return!==null&&(Pt(e,1),sc(e,1,0))}function Ui(e){for(;e===ps;)ps=sn[--on],sn[on]=null,fs=sn[--on],sn[on]=null;for(;e===Ft;)Ft=Ee[--Re],Ee[Re]=null,rt=Ee[--Re],Ee[Re]=null,nt=Ee[--Re],Ee[Re]=null}var Ce=null,be=null,W=!1,qe=null;function oc(e,t){var n=Pe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function rl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ce=e,be=kt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ce=e,be=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ft!==null?{id:nt,overflow:rt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Pe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ce=e,be=null,!0):!1;default:return!1}}function ni(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ri(e){if(W){var t=be;if(t){var n=t;if(!rl(e,t)){if(ni(e))throw Error(k(418));t=kt(n.nextSibling);var r=Ce;t&&rl(e,t)?oc(r,n):(e.flags=e.flags&-4097|2,W=!1,Ce=e)}}else{if(ni(e))throw Error(k(418));e.flags=e.flags&-4097|2,W=!1,Ce=e}}}function sl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ce=e}function Er(e){if(e!==Ce)return!1;if(!W)return sl(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Jo(e.type,e.memoizedProps)),t&&(t=be)){if(ni(e))throw ic(),Error(k(418));for(;t;)oc(e,t),t=kt(t.nextSibling)}if(sl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){be=kt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}be=null}}else be=Ce?kt(e.stateNode.nextSibling):null;return!0}function ic(){for(var e=be;e;)e=kt(e.nextSibling)}function vn(){be=Ce=null,W=!1}function Vi(e){qe===null?qe=[e]:qe.push(e)}var cm=ut.ReactCurrentBatchConfig;function Rn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var s=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var l=s.refs;a===null?delete l[i]:l[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Rr(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ol(e){var t=e._init;return t(e._payload)}function ac(e){function t(h,d){if(e){var m=h.deletions;m===null?(h.deletions=[d],h.flags|=16):m.push(d)}}function n(h,d){if(!e)return null;for(;d!==null;)t(h,d),d=d.sibling;return null}function r(h,d){for(h=new Map;d!==null;)d.key!==null?h.set(d.key,d):h.set(d.index,d),d=d.sibling;return h}function s(h,d){return h=bt(h,d),h.index=0,h.sibling=null,h}function i(h,d,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<d?(h.flags|=2,d):m):(h.flags|=2,d)):(h.flags|=1048576,d)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,d,m,y){return d===null||d.tag!==6?(d=wo(m,h.mode,y),d.return=h,d):(d=s(d,m),d.return=h,d)}function u(h,d,m,y){var N=m.type;return N===Jt?p(h,d,m.props.children,y,m.key):d!==null&&(d.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===ht&&ol(N)===d.type)?(y=s(d,m.props),y.ref=Rn(h,d,m),y.return=h,y):(y=ts(m.type,m.key,m.props,null,h.mode,y),y.ref=Rn(h,d,m),y.return=h,y)}function c(h,d,m,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=xo(m,h.mode,y),d.return=h,d):(d=s(d,m.children||[]),d.return=h,d)}function p(h,d,m,y,N){return d===null||d.tag!==7?(d=Ht(m,h.mode,y,N),d.return=h,d):(d=s(d,m),d.return=h,d)}function v(h,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=wo(""+d,h.mode,m),d.return=h,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case xr:return m=ts(d.type,d.key,d.props,null,h.mode,m),m.ref=Rn(h,null,d),m.return=h,m;case Xt:return d=xo(d,h.mode,m),d.return=h,d;case ht:var y=d._init;return v(h,y(d._payload),m)}if(On(d)||Cn(d))return d=Ht(d,h.mode,m,null),d.return=h,d;Rr(h,d)}return null}function f(h,d,m,y){var N=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return N!==null?null:l(h,d,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case xr:return m.key===N?u(h,d,m,y):null;case Xt:return m.key===N?c(h,d,m,y):null;case ht:return N=m._init,f(h,d,N(m._payload),y)}if(On(m)||Cn(m))return N!==null?null:p(h,d,m,y,null);Rr(h,m)}return null}function g(h,d,m,y,N){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(m)||null,l(d,h,""+y,N);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case xr:return h=h.get(y.key===null?m:y.key)||null,u(d,h,y,N);case Xt:return h=h.get(y.key===null?m:y.key)||null,c(d,h,y,N);case ht:var S=y._init;return g(h,d,m,S(y._payload),N)}if(On(y)||Cn(y))return h=h.get(m)||null,p(d,h,y,N,null);Rr(d,y)}return null}function w(h,d,m,y){for(var N=null,S=null,_=d,A=d=0,L=null;_!==null&&A<m.length;A++){_.index>A?(L=_,_=null):L=_.sibling;var T=f(h,_,m[A],y);if(T===null){_===null&&(_=L);break}e&&_&&T.alternate===null&&t(h,_),d=i(T,d,A),S===null?N=T:S.sibling=T,S=T,_=L}if(A===m.length)return n(h,_),W&&Pt(h,A),N;if(_===null){for(;A<m.length;A++)_=v(h,m[A],y),_!==null&&(d=i(_,d,A),S===null?N=_:S.sibling=_,S=_);return W&&Pt(h,A),N}for(_=r(h,_);A<m.length;A++)L=g(_,h,A,m[A],y),L!==null&&(e&&L.alternate!==null&&_.delete(L.key===null?A:L.key),d=i(L,d,A),S===null?N=L:S.sibling=L,S=L);return e&&_.forEach(function(oe){return t(h,oe)}),W&&Pt(h,A),N}function x(h,d,m,y){var N=Cn(m);if(typeof N!="function")throw Error(k(150));if(m=N.call(m),m==null)throw Error(k(151));for(var S=N=null,_=d,A=d=0,L=null,T=m.next();_!==null&&!T.done;A++,T=m.next()){_.index>A?(L=_,_=null):L=_.sibling;var oe=f(h,_,T.value,y);if(oe===null){_===null&&(_=L);break}e&&_&&oe.alternate===null&&t(h,_),d=i(oe,d,A),S===null?N=oe:S.sibling=oe,S=oe,_=L}if(T.done)return n(h,_),W&&Pt(h,A),N;if(_===null){for(;!T.done;A++,T=m.next())T=v(h,T.value,y),T!==null&&(d=i(T,d,A),S===null?N=T:S.sibling=T,S=T);return W&&Pt(h,A),N}for(_=r(h,_);!T.done;A++,T=m.next())T=g(_,h,A,T.value,y),T!==null&&(e&&T.alternate!==null&&_.delete(T.key===null?A:T.key),d=i(T,d,A),S===null?N=T:S.sibling=T,S=T);return e&&_.forEach(function(We){return t(h,We)}),W&&Pt(h,A),N}function C(h,d,m,y){if(typeof m=="object"&&m!==null&&m.type===Jt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case xr:e:{for(var N=m.key,S=d;S!==null;){if(S.key===N){if(N=m.type,N===Jt){if(S.tag===7){n(h,S.sibling),d=s(S,m.props.children),d.return=h,h=d;break e}}else if(S.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===ht&&ol(N)===S.type){n(h,S.sibling),d=s(S,m.props),d.ref=Rn(h,S,m),d.return=h,h=d;break e}n(h,S);break}else t(h,S);S=S.sibling}m.type===Jt?(d=Ht(m.props.children,h.mode,y,m.key),d.return=h,h=d):(y=ts(m.type,m.key,m.props,null,h.mode,y),y.ref=Rn(h,d,m),y.return=h,h=y)}return a(h);case Xt:e:{for(S=m.key;d!==null;){if(d.key===S)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(h,d.sibling),d=s(d,m.children||[]),d.return=h,h=d;break e}else{n(h,d);break}else t(h,d);d=d.sibling}d=xo(m,h.mode,y),d.return=h,h=d}return a(h);case ht:return S=m._init,C(h,d,S(m._payload),y)}if(On(m))return w(h,d,m,y);if(Cn(m))return x(h,d,m,y);Rr(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(h,d.sibling),d=s(d,m),d.return=h,h=d):(n(h,d),d=wo(m,h.mode,y),d.return=h,h=d),a(h)):n(h,d)}return C}var wn=ac(!0),lc=ac(!1),ys=It(null),gs=null,an=null,Yi=null;function Qi(){Yi=an=gs=null}function Gi(e){var t=ys.current;z(ys),e._currentValue=t}function si(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function pn(e,t){gs=e,Yi=an=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(we=!0),e.firstContext=null)}function Me(e){var t=e._currentValue;if(Yi!==e)if(e={context:e,memoizedValue:t,next:null},an===null){if(gs===null)throw Error(k(308));an=e,gs.dependencies={lanes:0,firstContext:e}}else an=an.next=e;return t}var Lt=null;function Ki(e){Lt===null?Lt=[e]:Lt.push(e)}function uc(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,Ki(t)):(n.next=s.next,s.next=n),t.interleaved=n,at(e,r)}function at(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var mt=!1;function Xi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function st(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,at(e,n)}return s=r.interleaved,s===null?(t.next=t,Ki(r)):(t.next=s.next,s.next=t),r.interleaved=t,at(e,n)}function Gr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Li(e,n)}}function il(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?s=i=t:i=i.next=t}else s=i=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function vs(e,t,n,r){var s=e.updateQueue;mt=!1;var i=s.firstBaseUpdate,a=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,c=u.next;u.next=null,a===null?i=c:a.next=c,a=u;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==a&&(l===null?p.firstBaseUpdate=c:l.next=c,p.lastBaseUpdate=u))}if(i!==null){var v=s.baseState;a=0,p=c=u=null,l=i;do{var f=l.lane,g=l.eventTime;if((r&f)===f){p!==null&&(p=p.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var w=e,x=l;switch(f=t,g=n,x.tag){case 1:if(w=x.payload,typeof w=="function"){v=w.call(g,v,f);break e}v=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=x.payload,f=typeof w=="function"?w.call(g,v,f):w,f==null)break e;v=Q({},v,f);break e;case 2:mt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=s.effects,f===null?s.effects=[l]:f.push(l))}else g={eventTime:g,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(c=p=g,u=v):p=p.next=g,a|=f;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;f=l,l=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(!0);if(p===null&&(u=v),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=p,t=s.shared.interleaved,t!==null){s=t;do a|=s.lane,s=s.next;while(s!==t)}else i===null&&(s.shared.lanes=0);Bt|=a,e.lanes=a,e.memoizedState=v}}function al(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(k(191,s));s.call(r)}}}var vr={},Xe=It(vr),or=It(vr),ir=It(vr);function Dt(e){if(e===vr)throw Error(k(174));return e}function Ji(e,t){switch(q(ir,t),q(or,e),q(Xe,vr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:$o(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=$o(t,e)}z(Xe),q(Xe,t)}function xn(){z(Xe),z(or),z(ir)}function dc(e){Dt(ir.current);var t=Dt(Xe.current),n=$o(t,e.type);t!==n&&(q(or,e),q(Xe,n))}function Zi(e){or.current===e&&(z(Xe),z(or))}var V=It(0);function ws(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var mo=[];function ea(){for(var e=0;e<mo.length;e++)mo[e]._workInProgressVersionPrimary=null;mo.length=0}var Kr=ut.ReactCurrentDispatcher,po=ut.ReactCurrentBatchConfig,zt=0,Y=null,te=null,re=null,xs=!1,Wn=!1,ar=0,dm=0;function ue(){throw Error(k(321))}function ta(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Be(e[n],t[n]))return!1;return!0}function na(e,t,n,r,s,i){if(zt=i,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Kr.current=e===null||e.memoizedState===null?fm:ym,e=n(r,s),Wn){i=0;do{if(Wn=!1,ar=0,25<=i)throw Error(k(301));i+=1,re=te=null,t.updateQueue=null,Kr.current=gm,e=n(r,s)}while(Wn)}if(Kr.current=ks,t=te!==null&&te.next!==null,zt=0,re=te=Y=null,xs=!1,t)throw Error(k(300));return e}function ra(){var e=ar!==0;return ar=0,e}function Ye(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?Y.memoizedState=re=e:re=re.next=e,re}function Oe(){if(te===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=re===null?Y.memoizedState:re.next;if(t!==null)re=t,te=e;else{if(e===null)throw Error(k(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},re===null?Y.memoizedState=re=e:re=re.next=e}return re}function lr(e,t){return typeof t=="function"?t(e):t}function fo(e){var t=Oe(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=te,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var a=s.next;s.next=i.next,i.next=a}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=a=null,u=null,c=i;do{var p=c.lane;if((zt&p)===p)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var v={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=v,a=r):u=u.next=v,Y.lanes|=p,Bt|=p}c=c.next}while(c!==null&&c!==i);u===null?a=r:u.next=l,Be(r,t.memoizedState)||(we=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do i=s.lane,Y.lanes|=i,Bt|=i,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function yo(e){var t=Oe(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,i=t.memoizedState;if(s!==null){n.pending=null;var a=s=s.next;do i=e(i,a.action),a=a.next;while(a!==s);Be(i,t.memoizedState)||(we=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function hc(){}function mc(e,t){var n=Y,r=Oe(),s=t(),i=!Be(r.memoizedState,s);if(i&&(r.memoizedState=s,we=!0),r=r.queue,sa(yc.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||re!==null&&re.memoizedState.tag&1){if(n.flags|=2048,ur(9,fc.bind(null,n,r,s,t),void 0,null),se===null)throw Error(k(349));zt&30||pc(n,t,s)}return s}function pc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function fc(e,t,n,r){t.value=n,t.getSnapshot=r,gc(t)&&vc(e)}function yc(e,t,n){return n(function(){gc(t)&&vc(e)})}function gc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Be(e,n)}catch{return!0}}function vc(e){var t=at(e,1);t!==null&&ze(t,e,1,-1)}function ll(e){var t=Ye();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:lr,lastRenderedState:e},t.queue=e,e=e.dispatch=pm.bind(null,Y,e),[t.memoizedState,e]}function ur(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function wc(){return Oe().memoizedState}function Xr(e,t,n,r){var s=Ye();Y.flags|=e,s.memoizedState=ur(1|t,n,void 0,r===void 0?null:r)}function Os(e,t,n,r){var s=Oe();r=r===void 0?null:r;var i=void 0;if(te!==null){var a=te.memoizedState;if(i=a.destroy,r!==null&&ta(r,a.deps)){s.memoizedState=ur(t,n,i,r);return}}Y.flags|=e,s.memoizedState=ur(1|t,n,i,r)}function ul(e,t){return Xr(8390656,8,e,t)}function sa(e,t){return Os(2048,8,e,t)}function xc(e,t){return Os(4,2,e,t)}function kc(e,t){return Os(4,4,e,t)}function Nc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function jc(e,t,n){return n=n!=null?n.concat([e]):null,Os(4,4,Nc.bind(null,t,e),n)}function oa(){}function Sc(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ta(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bc(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ta(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Cc(e,t,n){return zt&21?(Be(n,t)||(n=Ru(),Y.lanes|=n,Bt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,we=!0),e.memoizedState=n)}function hm(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=po.transition;po.transition={};try{e(!1),t()}finally{H=n,po.transition=r}}function _c(){return Oe().memoizedState}function mm(e,t,n){var r=St(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ac(e))Ic(t,n);else if(n=uc(e,t,n,r),n!==null){var s=pe();ze(n,e,r,s),Ec(n,t,r)}}function pm(e,t,n){var r=St(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ac(e))Ic(t,s);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,n);if(s.hasEagerState=!0,s.eagerState=l,Be(l,a)){var u=t.interleaved;u===null?(s.next=s,Ki(t)):(s.next=u.next,u.next=s),t.interleaved=s;return}}catch{}finally{}n=uc(e,t,s,r),n!==null&&(s=pe(),ze(n,e,r,s),Ec(n,t,r))}}function Ac(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function Ic(e,t){Wn=xs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ec(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Li(e,n)}}var ks={readContext:Me,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},fm={readContext:Me,useCallback:function(e,t){return Ye().memoizedState=[e,t===void 0?null:t],e},useContext:Me,useEffect:ul,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Xr(4194308,4,Nc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Xr(4,2,e,t)},useMemo:function(e,t){var n=Ye();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ye();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=mm.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=Ye();return e={current:e},t.memoizedState=e},useState:ll,useDebugValue:oa,useDeferredValue:function(e){return Ye().memoizedState=e},useTransition:function(){var e=ll(!1),t=e[0];return e=hm.bind(null,e[1]),Ye().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,s=Ye();if(W){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),se===null)throw Error(k(349));zt&30||pc(r,t,n)}s.memoizedState=n;var i={value:n,getSnapshot:t};return s.queue=i,ul(yc.bind(null,r,i,e),[e]),r.flags|=2048,ur(9,fc.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ye(),t=se.identifierPrefix;if(W){var n=rt,r=nt;n=(r&~(1<<32-Fe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ar++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=dm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ym={readContext:Me,useCallback:Sc,useContext:Me,useEffect:sa,useImperativeHandle:jc,useInsertionEffect:xc,useLayoutEffect:kc,useMemo:bc,useReducer:fo,useRef:wc,useState:function(){return fo(lr)},useDebugValue:oa,useDeferredValue:function(e){var t=Oe();return Cc(t,te.memoizedState,e)},useTransition:function(){var e=fo(lr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:hc,useSyncExternalStore:mc,useId:_c,unstable_isNewReconciler:!1},gm={readContext:Me,useCallback:Sc,useContext:Me,useEffect:sa,useImperativeHandle:jc,useInsertionEffect:xc,useLayoutEffect:kc,useMemo:bc,useReducer:yo,useRef:wc,useState:function(){return yo(lr)},useDebugValue:oa,useDeferredValue:function(e){var t=Oe();return te===null?t.memoizedState=e:Cc(t,te.memoizedState,e)},useTransition:function(){var e=yo(lr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:hc,useSyncExternalStore:mc,useId:_c,unstable_isNewReconciler:!1};function $e(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function oi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ls={isMounted:function(e){return(e=e._reactInternals)?Vt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pe(),s=St(e),i=st(r,s);i.payload=t,n!=null&&(i.callback=n),t=Nt(e,i,s),t!==null&&(ze(t,e,s,r),Gr(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pe(),s=St(e),i=st(r,s);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Nt(e,i,s),t!==null&&(ze(t,e,s,r),Gr(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pe(),r=St(e),s=st(n,r);s.tag=2,t!=null&&(s.callback=t),t=Nt(e,s,r),t!==null&&(ze(t,e,r,n),Gr(t,e,r))}};function cl(e,t,n,r,s,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!tr(n,r)||!tr(s,i):!0}function Rc(e,t,n){var r=!1,s=_t,i=t.contextType;return typeof i=="object"&&i!==null?i=Me(i):(s=ke(t)?qt:he.current,r=t.contextTypes,i=(r=r!=null)?gn(e,s):_t),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ls,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=i),t}function dl(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ls.enqueueReplaceState(t,t.state,null)}function ii(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},Xi(e);var i=t.contextType;typeof i=="object"&&i!==null?s.context=Me(i):(i=ke(t)?qt:he.current,s.context=gn(e,i)),s.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(oi(e,t,i,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Ls.enqueueReplaceState(s,s.state,null),vs(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function kn(e,t){try{var n="",r=t;do n+=Ud(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:s,digest:null}}function go(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ai(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var vm=typeof WeakMap=="function"?WeakMap:Map;function Pc(e,t,n){n=st(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){js||(js=!0,gi=r),ai(e,t)},n}function Tc(e,t,n){n=st(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){ai(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ai(e,t),typeof r!="function"&&(jt===null?jt=new Set([this]):jt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function hl(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new vm;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=Pm.bind(null,e,t,n),t.then(e,e))}function ml(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function pl(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=st(-1,1),t.tag=2,Nt(n,t,1))),n.lanes|=1),e)}var wm=ut.ReactCurrentOwner,we=!1;function me(e,t,n,r){t.child=e===null?lc(t,null,n,r):wn(t,e.child,n,r)}function fl(e,t,n,r,s){n=n.render;var i=t.ref;return pn(t,s),r=na(e,t,n,r,i,s),n=ra(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,lt(e,t,s)):(W&&n&&Wi(t),t.flags|=1,me(e,t,r,s),t.child)}function yl(e,t,n,r,s){if(e===null){var i=n.type;return typeof i=="function"&&!ma(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Mc(e,t,i,r,s)):(e=ts(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&s)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:tr,n(a,r)&&e.ref===t.ref)return lt(e,t,s)}return t.flags|=1,e=bt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Mc(e,t,n,r,s){if(e!==null){var i=e.memoizedProps;if(tr(i,r)&&e.ref===t.ref)if(we=!1,t.pendingProps=r=i,(e.lanes&s)!==0)e.flags&131072&&(we=!0);else return t.lanes=e.lanes,lt(e,t,s)}return li(e,t,n,r,s)}function Oc(e,t,n){var r=t.pendingProps,s=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(un,Se),Se|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,q(un,Se),Se|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,q(un,Se),Se|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,q(un,Se),Se|=r;return me(e,t,s,n),t.child}function Lc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function li(e,t,n,r,s){var i=ke(n)?qt:he.current;return i=gn(t,i),pn(t,s),n=na(e,t,n,r,i,s),r=ra(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,lt(e,t,s)):(W&&r&&Wi(t),t.flags|=1,me(e,t,n,s),t.child)}function gl(e,t,n,r,s){if(ke(n)){var i=!0;ms(t)}else i=!1;if(pn(t,s),t.stateNode===null)Jr(e,t),Rc(t,n,r),ii(t,n,r,s),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var u=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Me(c):(c=ke(n)?qt:he.current,c=gn(t,c));var p=n.getDerivedStateFromProps,v=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";v||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||u!==c)&&dl(t,a,r,c),mt=!1;var f=t.memoizedState;a.state=f,vs(t,r,a,s),u=t.memoizedState,l!==r||f!==u||xe.current||mt?(typeof p=="function"&&(oi(t,n,p,r),u=t.memoizedState),(l=mt||cl(t,n,l,r,f,u,c))?(v||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=c,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,cc(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:$e(t.type,l),a.props=c,v=t.pendingProps,f=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=Me(u):(u=ke(n)?qt:he.current,u=gn(t,u));var g=n.getDerivedStateFromProps;(p=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==v||f!==u)&&dl(t,a,r,u),mt=!1,f=t.memoizedState,a.state=f,vs(t,r,a,s);var w=t.memoizedState;l!==v||f!==w||xe.current||mt?(typeof g=="function"&&(oi(t,n,g,r),w=t.memoizedState),(c=mt||cl(t,n,c,r,f,w,u)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,w,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,w,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),a.props=r,a.state=w,a.context=u,r=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return ui(e,t,n,r,i,s)}function ui(e,t,n,r,s,i){Lc(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return s&&nl(t,n,!1),lt(e,t,i);r=t.stateNode,wm.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=wn(t,e.child,null,i),t.child=wn(t,null,l,i)):me(e,t,l,i),t.memoizedState=r.state,s&&nl(t,n,!0),t.child}function Dc(e){var t=e.stateNode;t.pendingContext?tl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&tl(e,t.context,!1),Ji(e,t.containerInfo)}function vl(e,t,n,r,s){return vn(),Vi(s),t.flags|=256,me(e,t,n,r),t.child}var ci={dehydrated:null,treeContext:null,retryLane:0};function di(e){return{baseLanes:e,cachePool:null,transitions:null}}function $c(e,t,n){var r=t.pendingProps,s=V.current,i=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(s&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),q(V,s&1),e===null)return ri(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Hs(a,r,0,null),e=Ht(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=di(n),t.memoizedState=ci,e):ia(t,a));if(s=e.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return xm(e,t,a,r,l,s,n);if(i){i=r.fallback,a=t.mode,s=e.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=bt(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=bt(l,i):(i=Ht(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?di(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=ci,r}return i=e.child,e=i.sibling,r=bt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ia(e,t){return t=Hs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Pr(e,t,n,r){return r!==null&&Vi(r),wn(t,e.child,null,n),e=ia(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xm(e,t,n,r,s,i,a){if(n)return t.flags&256?(t.flags&=-257,r=go(Error(k(422))),Pr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,s=t.mode,r=Hs({mode:"visible",children:r.children},s,0,null),i=Ht(i,s,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&wn(t,e.child,null,a),t.child.memoizedState=di(a),t.memoizedState=ci,i);if(!(t.mode&1))return Pr(e,t,a,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(k(419)),r=go(i,r,void 0),Pr(e,t,a,r)}if(l=(a&e.childLanes)!==0,we||l){if(r=se,r!==null){switch(a&-a){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|a)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,at(e,s),ze(r,e,s,-1))}return ha(),r=go(Error(k(421))),Pr(e,t,a,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=Tm.bind(null,e),s._reactRetry=t,null):(e=i.treeContext,be=kt(s.nextSibling),Ce=t,W=!0,qe=null,e!==null&&(Ee[Re++]=nt,Ee[Re++]=rt,Ee[Re++]=Ft,nt=e.id,rt=e.overflow,Ft=t),t=ia(t,r.children),t.flags|=4096,t)}function wl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),si(e.return,t,n)}function vo(e,t,n,r,s){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Hc(e,t,n){var r=t.pendingProps,s=r.revealOrder,i=r.tail;if(me(e,t,r.children,n),r=V.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wl(e,n,t);else if(e.tag===19)wl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(q(V,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&ws(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),vo(t,!1,s,n,i);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&ws(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}vo(t,!0,n,null,i);break;case"together":vo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Jr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function lt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Bt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=bt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=bt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function km(e,t,n){switch(t.tag){case 3:Dc(t),vn();break;case 5:dc(t);break;case 1:ke(t.type)&&ms(t);break;case 4:Ji(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;q(ys,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(q(V,V.current&1),t.flags|=128,null):n&t.child.childLanes?$c(e,t,n):(q(V,V.current&1),e=lt(e,t,n),e!==null?e.sibling:null);q(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Hc(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),q(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,Oc(e,t,n)}return lt(e,t,n)}var qc,hi,Fc,zc;qc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hi=function(){};Fc=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,Dt(Xe.current);var i=null;switch(n){case"input":s=Mo(e,s),r=Mo(e,r),i=[];break;case"select":s=Q({},s,{value:void 0}),r=Q({},r,{value:void 0}),i=[];break;case"textarea":s=Do(e,s),r=Do(e,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ds)}Ho(n,r);var a;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var l=s[c];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Qn.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(l=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Qn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&F("scroll",e),i||l===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};zc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Pn(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Nm(e,t,n){var r=t.pendingProps;switch(Ui(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return ke(t.type)&&hs(),ce(t),null;case 3:return r=t.stateNode,xn(),z(xe),z(he),ea(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Er(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qe!==null&&(xi(qe),qe=null))),hi(e,t),ce(t),null;case 5:Zi(t);var s=Dt(ir.current);if(n=t.type,e!==null&&t.stateNode!=null)Fc(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return ce(t),null}if(e=Dt(Xe.current),Er(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Qe]=t,r[sr]=i,e=(t.mode&1)!==0,n){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(s=0;s<Dn.length;s++)F(Dn[s],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":Aa(r,i),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},F("invalid",r);break;case"textarea":Ea(r,i),F("invalid",r)}Ho(n,i),s=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Ir(r.textContent,l,e),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Ir(r.textContent,l,e),s=["children",""+l]):Qn.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&F("scroll",r)}switch(n){case"input":kr(r),Ia(r,i,!0);break;case"textarea":kr(r),Ra(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ds)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=yu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Qe]=t,e[sr]=r,qc(e,t,!1,!1),t.stateNode=e;e:{switch(a=qo(n,r),n){case"dialog":F("cancel",e),F("close",e),s=r;break;case"iframe":case"object":case"embed":F("load",e),s=r;break;case"video":case"audio":for(s=0;s<Dn.length;s++)F(Dn[s],e);s=r;break;case"source":F("error",e),s=r;break;case"img":case"image":case"link":F("error",e),F("load",e),s=r;break;case"details":F("toggle",e),s=r;break;case"input":Aa(e,r),s=Mo(e,r),F("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=Q({},r,{value:void 0}),F("invalid",e);break;case"textarea":Ea(e,r),s=Do(e,r),F("invalid",e);break;default:s=r}Ho(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?wu(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&gu(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Gn(e,u):typeof u=="number"&&Gn(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Qn.hasOwnProperty(i)?u!=null&&i==="onScroll"&&F("scroll",e):u!=null&&Ei(e,i,u,a))}switch(n){case"input":kr(e),Ia(e,r,!1);break;case"textarea":kr(e),Ra(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ct(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?cn(e,!!r.multiple,i,!1):r.defaultValue!=null&&cn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=ds)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)zc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Dt(ir.current),Dt(Xe.current),Er(t)){if(r=t.stateNode,n=t.memoizedProps,r[Qe]=t,(i=r.nodeValue!==n)&&(e=Ce,e!==null))switch(e.tag){case 3:Ir(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ir(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qe]=t,t.stateNode=r}return ce(t),null;case 13:if(z(V),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&be!==null&&t.mode&1&&!(t.flags&128))ic(),vn(),t.flags|=98560,i=!1;else if(i=Er(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[Qe]=t}else vn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),i=!1}else qe!==null&&(xi(qe),qe=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?ne===0&&(ne=3):ha())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return xn(),hi(e,t),e===null&&nr(t.stateNode.containerInfo),ce(t),null;case 10:return Gi(t.type._context),ce(t),null;case 17:return ke(t.type)&&hs(),ce(t),null;case 19:if(z(V),i=t.memoizedState,i===null)return ce(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Pn(i,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ws(e),a!==null){for(t.flags|=128,Pn(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return q(V,V.current&1|2),t.child}e=e.sibling}i.tail!==null&&Z()>Nn&&(t.flags|=128,r=!0,Pn(i,!1),t.lanes=4194304)}else{if(!r)if(e=ws(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Pn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!W)return ce(t),null}else 2*Z()-i.renderingStartTime>Nn&&n!==1073741824&&(t.flags|=128,r=!0,Pn(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Z(),t.sibling=null,n=V.current,q(V,r?n&1|2:n&1),t):(ce(t),null);case 22:case 23:return da(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Se&1073741824&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function jm(e,t){switch(Ui(t),t.tag){case 1:return ke(t.type)&&hs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xn(),z(xe),z(he),ea(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Zi(t),null;case 13:if(z(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));vn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return z(V),null;case 4:return xn(),null;case 10:return Gi(t.type._context),null;case 22:case 23:return da(),null;case 24:return null;default:return null}}var Tr=!1,de=!1,Sm=typeof WeakSet=="function"?WeakSet:Set,b=null;function ln(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function mi(e,t,n){try{n()}catch(r){X(e,t,r)}}var xl=!1;function bm(e,t){if(Ko=ls,e=Yu(),Bi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,l=-1,u=-1,c=0,p=0,v=e,f=null;t:for(;;){for(var g;v!==n||s!==0&&v.nodeType!==3||(l=a+s),v!==i||r!==0&&v.nodeType!==3||(u=a+r),v.nodeType===3&&(a+=v.nodeValue.length),(g=v.firstChild)!==null;)f=v,v=g;for(;;){if(v===e)break t;if(f===n&&++c===s&&(l=a),f===i&&++p===r&&(u=a),(g=v.nextSibling)!==null)break;v=f,f=v.parentNode}v=g}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xo={focusedElem:e,selectionRange:n},ls=!1,b=t;b!==null;)if(t=b,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,b=e;else for(;b!==null;){t=b;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var x=w.memoizedProps,C=w.memoizedState,h=t.stateNode,d=h.getSnapshotBeforeUpdate(t.elementType===t.type?x:$e(t.type,x),C);h.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(y){X(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,b=e;break}b=t.return}return w=xl,xl=!1,w}function Un(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var i=s.destroy;s.destroy=void 0,i!==void 0&&mi(t,n,i)}s=s.next}while(s!==r)}}function Ds(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function pi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Bc(e){var t=e.alternate;t!==null&&(e.alternate=null,Bc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Qe],delete t[sr],delete t[ei],delete t[am],delete t[lm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wc(e){return e.tag===5||e.tag===3||e.tag===4}function kl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ds));else if(r!==4&&(e=e.child,e!==null))for(fi(e,t,n),e=e.sibling;e!==null;)fi(e,t,n),e=e.sibling}function yi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(yi(e,t,n),e=e.sibling;e!==null;)yi(e,t,n),e=e.sibling}var ie=null,He=!1;function ct(e,t,n){for(n=n.child;n!==null;)Uc(e,t,n),n=n.sibling}function Uc(e,t,n){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(Is,n)}catch{}switch(n.tag){case 5:de||ln(n,t);case 6:var r=ie,s=He;ie=null,ct(e,t,n),ie=r,He=s,ie!==null&&(He?(e=ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ie.removeChild(n.stateNode));break;case 18:ie!==null&&(He?(e=ie,n=n.stateNode,e.nodeType===8?co(e.parentNode,n):e.nodeType===1&&co(e,n),Zn(e)):co(ie,n.stateNode));break;case 4:r=ie,s=He,ie=n.stateNode.containerInfo,He=!0,ct(e,t,n),ie=r,He=s;break;case 0:case 11:case 14:case 15:if(!de&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&mi(n,t,a),s=s.next}while(s!==r)}ct(e,t,n);break;case 1:if(!de&&(ln(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){X(n,t,l)}ct(e,t,n);break;case 21:ct(e,t,n);break;case 22:n.mode&1?(de=(r=de)||n.memoizedState!==null,ct(e,t,n),de=r):ct(e,t,n);break;default:ct(e,t,n)}}function Nl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Sm),t.forEach(function(r){var s=Mm.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Le(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:ie=l.stateNode,He=!1;break e;case 3:ie=l.stateNode.containerInfo,He=!0;break e;case 4:ie=l.stateNode.containerInfo,He=!0;break e}l=l.return}if(ie===null)throw Error(k(160));Uc(i,a,s),ie=null,He=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){X(s,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Vc(t,e),t=t.sibling}function Vc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Le(t,e),Ve(e),r&4){try{Un(3,e,e.return),Ds(3,e)}catch(x){X(e,e.return,x)}try{Un(5,e,e.return)}catch(x){X(e,e.return,x)}}break;case 1:Le(t,e),Ve(e),r&512&&n!==null&&ln(n,n.return);break;case 5:if(Le(t,e),Ve(e),r&512&&n!==null&&ln(n,n.return),e.flags&32){var s=e.stateNode;try{Gn(s,"")}catch(x){X(e,e.return,x)}}if(r&4&&(s=e.stateNode,s!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&pu(s,i),qo(l,a);var c=qo(l,i);for(a=0;a<u.length;a+=2){var p=u[a],v=u[a+1];p==="style"?wu(s,v):p==="dangerouslySetInnerHTML"?gu(s,v):p==="children"?Gn(s,v):Ei(s,p,v,c)}switch(l){case"input":Oo(s,i);break;case"textarea":fu(s,i);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?cn(s,!!i.multiple,g,!1):f!==!!i.multiple&&(i.defaultValue!=null?cn(s,!!i.multiple,i.defaultValue,!0):cn(s,!!i.multiple,i.multiple?[]:"",!1))}s[sr]=i}catch(x){X(e,e.return,x)}}break;case 6:if(Le(t,e),Ve(e),r&4){if(e.stateNode===null)throw Error(k(162));s=e.stateNode,i=e.memoizedProps;try{s.nodeValue=i}catch(x){X(e,e.return,x)}}break;case 3:if(Le(t,e),Ve(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Zn(t.containerInfo)}catch(x){X(e,e.return,x)}break;case 4:Le(t,e),Ve(e);break;case 13:Le(t,e),Ve(e),s=e.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(ua=Z())),r&4&&Nl(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(de=(c=de)||p,Le(t,e),de=c):Le(t,e),Ve(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&e.mode&1)for(b=e,p=e.child;p!==null;){for(v=b=p;b!==null;){switch(f=b,g=f.child,f.tag){case 0:case 11:case 14:case 15:Un(4,f,f.return);break;case 1:ln(f,f.return);var w=f.stateNode;if(typeof w.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(x){X(r,n,x)}}break;case 5:ln(f,f.return);break;case 22:if(f.memoizedState!==null){Sl(v);continue}}g!==null?(g.return=f,b=g):Sl(v)}p=p.sibling}e:for(p=null,v=e;;){if(v.tag===5){if(p===null){p=v;try{s=v.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=v.stateNode,u=v.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=vu("display",a))}catch(x){X(e,e.return,x)}}}else if(v.tag===6){if(p===null)try{v.stateNode.nodeValue=c?"":v.memoizedProps}catch(x){X(e,e.return,x)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;p===v&&(p=null),v=v.return}p===v&&(p=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Le(t,e),Ve(e),r&4&&Nl(e);break;case 21:break;default:Le(t,e),Ve(e)}}function Ve(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Wc(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Gn(s,""),r.flags&=-33);var i=kl(e);yi(e,i,s);break;case 3:case 4:var a=r.stateNode.containerInfo,l=kl(e);fi(e,l,a);break;default:throw Error(k(161))}}catch(u){X(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Cm(e,t,n){b=e,Yc(e)}function Yc(e,t,n){for(var r=(e.mode&1)!==0;b!==null;){var s=b,i=s.child;if(s.tag===22&&r){var a=s.memoizedState!==null||Tr;if(!a){var l=s.alternate,u=l!==null&&l.memoizedState!==null||de;l=Tr;var c=de;if(Tr=a,(de=u)&&!c)for(b=s;b!==null;)a=b,u=a.child,a.tag===22&&a.memoizedState!==null?bl(s):u!==null?(u.return=a,b=u):bl(s);for(;i!==null;)b=i,Yc(i),i=i.sibling;b=s,Tr=l,de=c}jl(e)}else s.subtreeFlags&8772&&i!==null?(i.return=s,b=i):jl(e)}}function jl(e){for(;b!==null;){var t=b;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:de||Ds(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!de)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:$e(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&al(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}al(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var v=p.dehydrated;v!==null&&Zn(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}de||t.flags&512&&pi(t)}catch(f){X(t,t.return,f)}}if(t===e){b=null;break}if(n=t.sibling,n!==null){n.return=t.return,b=n;break}b=t.return}}function Sl(e){for(;b!==null;){var t=b;if(t===e){b=null;break}var n=t.sibling;if(n!==null){n.return=t.return,b=n;break}b=t.return}}function bl(e){for(;b!==null;){var t=b;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ds(4,t)}catch(u){X(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(u){X(t,s,u)}}var i=t.return;try{pi(t)}catch(u){X(t,i,u)}break;case 5:var a=t.return;try{pi(t)}catch(u){X(t,a,u)}}}catch(u){X(t,t.return,u)}if(t===e){b=null;break}var l=t.sibling;if(l!==null){l.return=t.return,b=l;break}b=t.return}}var _m=Math.ceil,Ns=ut.ReactCurrentDispatcher,aa=ut.ReactCurrentOwner,Te=ut.ReactCurrentBatchConfig,D=0,se=null,ee=null,ae=0,Se=0,un=It(0),ne=0,cr=null,Bt=0,$s=0,la=0,Vn=null,ve=null,ua=0,Nn=1/0,et=null,js=!1,gi=null,jt=null,Mr=!1,gt=null,Ss=0,Yn=0,vi=null,Zr=-1,es=0;function pe(){return D&6?Z():Zr!==-1?Zr:Zr=Z()}function St(e){return e.mode&1?D&2&&ae!==0?ae&-ae:cm.transition!==null?(es===0&&(es=Ru()),es):(e=H,e!==0||(e=window.event,e=e===void 0?16:$u(e.type)),e):1}function ze(e,t,n,r){if(50<Yn)throw Yn=0,vi=null,Error(k(185));fr(e,n,r),(!(D&2)||e!==se)&&(e===se&&(!(D&2)&&($s|=n),ne===4&&ft(e,ae)),Ne(e,r),n===1&&D===0&&!(t.mode&1)&&(Nn=Z()+500,Ms&&Et()))}function Ne(e,t){var n=e.callbackNode;ch(e,t);var r=as(e,e===se?ae:0);if(r===0)n!==null&&Ma(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ma(n),t===1)e.tag===0?um(Cl.bind(null,e)):rc(Cl.bind(null,e)),om(function(){!(D&6)&&Et()}),n=null;else{switch(Pu(r)){case 1:n=Oi;break;case 4:n=Iu;break;case 16:n=is;break;case 536870912:n=Eu;break;default:n=is}n=td(n,Qc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Qc(e,t){if(Zr=-1,es=0,D&6)throw Error(k(327));var n=e.callbackNode;if(fn()&&e.callbackNode!==n)return null;var r=as(e,e===se?ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=bs(e,r);else{t=r;var s=D;D|=2;var i=Kc();(se!==e||ae!==t)&&(et=null,Nn=Z()+500,$t(e,t));do try{Em();break}catch(l){Gc(e,l)}while(!0);Qi(),Ns.current=i,D=s,ee!==null?t=0:(se=null,ae=0,t=ne)}if(t!==0){if(t===2&&(s=Uo(e),s!==0&&(r=s,t=wi(e,s))),t===1)throw n=cr,$t(e,0),ft(e,r),Ne(e,Z()),n;if(t===6)ft(e,r);else{if(s=e.current.alternate,!(r&30)&&!Am(s)&&(t=bs(e,r),t===2&&(i=Uo(e),i!==0&&(r=i,t=wi(e,i))),t===1))throw n=cr,$t(e,0),ft(e,r),Ne(e,Z()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Tt(e,ve,et);break;case 3:if(ft(e,r),(r&130023424)===r&&(t=ua+500-Z(),10<t)){if(as(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){pe(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Zo(Tt.bind(null,e,ve,et),t);break}Tt(e,ve,et);break;case 4:if(ft(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var a=31-Fe(r);i=1<<a,a=t[a],a>s&&(s=a),r&=~i}if(r=s,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*_m(r/1960))-r,10<r){e.timeoutHandle=Zo(Tt.bind(null,e,ve,et),r);break}Tt(e,ve,et);break;case 5:Tt(e,ve,et);break;default:throw Error(k(329))}}}return Ne(e,Z()),e.callbackNode===n?Qc.bind(null,e):null}function wi(e,t){var n=Vn;return e.current.memoizedState.isDehydrated&&($t(e,t).flags|=256),e=bs(e,t),e!==2&&(t=ve,ve=n,t!==null&&xi(t)),e}function xi(e){ve===null?ve=e:ve.push.apply(ve,e)}function Am(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Be(i(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ft(e,t){for(t&=~la,t&=~$s,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Fe(t),r=1<<n;e[n]=-1,t&=~r}}function Cl(e){if(D&6)throw Error(k(327));fn();var t=as(e,0);if(!(t&1))return Ne(e,Z()),null;var n=bs(e,t);if(e.tag!==0&&n===2){var r=Uo(e);r!==0&&(t=r,n=wi(e,r))}if(n===1)throw n=cr,$t(e,0),ft(e,t),Ne(e,Z()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Tt(e,ve,et),Ne(e,Z()),null}function ca(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(Nn=Z()+500,Ms&&Et())}}function Wt(e){gt!==null&&gt.tag===0&&!(D&6)&&fn();var t=D;D|=1;var n=Te.transition,r=H;try{if(Te.transition=null,H=1,e)return e()}finally{H=r,Te.transition=n,D=t,!(D&6)&&Et()}}function da(){Se=un.current,z(un)}function $t(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,sm(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(Ui(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&hs();break;case 3:xn(),z(xe),z(he),ea();break;case 5:Zi(r);break;case 4:xn();break;case 13:z(V);break;case 19:z(V);break;case 10:Gi(r.type._context);break;case 22:case 23:da()}n=n.return}if(se=e,ee=e=bt(e.current,null),ae=Se=t,ne=0,cr=null,la=$s=Bt=0,ve=Vn=null,Lt!==null){for(t=0;t<Lt.length;t++)if(n=Lt[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=s,r.next=a}n.pending=r}Lt=null}return e}function Gc(e,t){do{var n=ee;try{if(Qi(),Kr.current=ks,xs){for(var r=Y.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}xs=!1}if(zt=0,re=te=Y=null,Wn=!1,ar=0,aa.current=null,n===null||n.return===null){ne=1,cr=t,ee=null;break}e:{var i=e,a=n.return,l=n,u=t;if(t=ae,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,p=l,v=p.tag;if(!(p.mode&1)&&(v===0||v===11||v===15)){var f=p.alternate;f?(p.updateQueue=f.updateQueue,p.memoizedState=f.memoizedState,p.lanes=f.lanes):(p.updateQueue=null,p.memoizedState=null)}var g=ml(a);if(g!==null){g.flags&=-257,pl(g,a,l,i,t),g.mode&1&&hl(i,c,t),t=g,u=c;var w=t.updateQueue;if(w===null){var x=new Set;x.add(u),t.updateQueue=x}else w.add(u);break e}else{if(!(t&1)){hl(i,c,t),ha();break e}u=Error(k(426))}}else if(W&&l.mode&1){var C=ml(a);if(C!==null){!(C.flags&65536)&&(C.flags|=256),pl(C,a,l,i,t),Vi(kn(u,l));break e}}i=u=kn(u,l),ne!==4&&(ne=2),Vn===null?Vn=[i]:Vn.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=Pc(i,u,t);il(i,h);break e;case 1:l=u;var d=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(jt===null||!jt.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=Tc(i,l,t);il(i,y);break e}}i=i.return}while(i!==null)}Jc(n)}catch(N){t=N,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(!0)}function Kc(){var e=Ns.current;return Ns.current=ks,e===null?ks:e}function ha(){(ne===0||ne===3||ne===2)&&(ne=4),se===null||!(Bt&268435455)&&!($s&268435455)||ft(se,ae)}function bs(e,t){var n=D;D|=2;var r=Kc();(se!==e||ae!==t)&&(et=null,$t(e,t));do try{Im();break}catch(s){Gc(e,s)}while(!0);if(Qi(),D=n,Ns.current=r,ee!==null)throw Error(k(261));return se=null,ae=0,ne}function Im(){for(;ee!==null;)Xc(ee)}function Em(){for(;ee!==null&&!th();)Xc(ee)}function Xc(e){var t=ed(e.alternate,e,Se);e.memoizedProps=e.pendingProps,t===null?Jc(e):ee=t,aa.current=null}function Jc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=jm(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,ee=null;return}}else if(n=Nm(n,t,Se),n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);ne===0&&(ne=5)}function Tt(e,t,n){var r=H,s=Te.transition;try{Te.transition=null,H=1,Rm(e,t,n,r)}finally{Te.transition=s,H=r}return null}function Rm(e,t,n,r){do fn();while(gt!==null);if(D&6)throw Error(k(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(dh(e,i),e===se&&(ee=se=null,ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Mr||(Mr=!0,td(is,function(){return fn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Te.transition,Te.transition=null;var a=H;H=1;var l=D;D|=4,aa.current=null,bm(e,n),Vc(n,e),Xh(Xo),ls=!!Ko,Xo=Ko=null,e.current=n,Cm(n),nh(),D=l,H=a,Te.transition=i}else e.current=n;if(Mr&&(Mr=!1,gt=e,Ss=s),i=e.pendingLanes,i===0&&(jt=null),oh(n.stateNode),Ne(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(js)throw js=!1,e=gi,gi=null,e;return Ss&1&&e.tag!==0&&fn(),i=e.pendingLanes,i&1?e===vi?Yn++:(Yn=0,vi=e):Yn=0,Et(),null}function fn(){if(gt!==null){var e=Pu(Ss),t=Te.transition,n=H;try{if(Te.transition=null,H=16>e?16:e,gt===null)var r=!1;else{if(e=gt,gt=null,Ss=0,D&6)throw Error(k(331));var s=D;for(D|=4,b=e.current;b!==null;){var i=b,a=i.child;if(b.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(b=c;b!==null;){var p=b;switch(p.tag){case 0:case 11:case 15:Un(8,p,i)}var v=p.child;if(v!==null)v.return=p,b=v;else for(;b!==null;){p=b;var f=p.sibling,g=p.return;if(Bc(p),p===c){b=null;break}if(f!==null){f.return=g,b=f;break}b=g}}}var w=i.alternate;if(w!==null){var x=w.child;if(x!==null){w.child=null;do{var C=x.sibling;x.sibling=null,x=C}while(x!==null)}}b=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,b=a;else e:for(;b!==null;){if(i=b,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Un(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,b=h;break e}b=i.return}}var d=e.current;for(b=d;b!==null;){a=b;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,b=m;else e:for(a=d;b!==null;){if(l=b,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ds(9,l)}}catch(N){X(l,l.return,N)}if(l===a){b=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,b=y;break e}b=l.return}}if(D=s,Et(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(Is,e)}catch{}r=!0}return r}finally{H=n,Te.transition=t}}return!1}function _l(e,t,n){t=kn(n,t),t=Pc(e,t,1),e=Nt(e,t,1),t=pe(),e!==null&&(fr(e,1,t),Ne(e,t))}function X(e,t,n){if(e.tag===3)_l(e,e,n);else for(;t!==null;){if(t.tag===3){_l(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jt===null||!jt.has(r))){e=kn(n,e),e=Tc(t,e,1),t=Nt(t,e,1),e=pe(),t!==null&&(fr(t,1,e),Ne(t,e));break}}t=t.return}}function Pm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pe(),e.pingedLanes|=e.suspendedLanes&n,se===e&&(ae&n)===n&&(ne===4||ne===3&&(ae&130023424)===ae&&500>Z()-ua?$t(e,0):la|=n),Ne(e,t)}function Zc(e,t){t===0&&(e.mode&1?(t=Sr,Sr<<=1,!(Sr&130023424)&&(Sr=4194304)):t=1);var n=pe();e=at(e,t),e!==null&&(fr(e,t,n),Ne(e,n))}function Tm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Zc(e,n)}function Mm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Zc(e,n)}var ed;ed=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||xe.current)we=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return we=!1,km(e,t,n);we=!!(e.flags&131072)}else we=!1,W&&t.flags&1048576&&sc(t,fs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Jr(e,t),e=t.pendingProps;var s=gn(t,he.current);pn(t,n),s=na(null,t,r,e,s,n);var i=ra();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ke(r)?(i=!0,ms(t)):i=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Xi(t),s.updater=Ls,t.stateNode=s,s._reactInternals=t,ii(t,r,e,n),t=ui(null,t,r,!0,i,n)):(t.tag=0,W&&i&&Wi(t),me(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Jr(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=Lm(r),e=$e(r,e),s){case 0:t=li(null,t,r,e,n);break e;case 1:t=gl(null,t,r,e,n);break e;case 11:t=fl(null,t,r,e,n);break e;case 14:t=yl(null,t,r,$e(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:$e(r,s),li(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:$e(r,s),gl(e,t,r,s,n);case 3:e:{if(Dc(t),e===null)throw Error(k(387));r=t.pendingProps,i=t.memoizedState,s=i.element,cc(e,t),vs(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){s=kn(Error(k(423)),t),t=vl(e,t,r,n,s);break e}else if(r!==s){s=kn(Error(k(424)),t),t=vl(e,t,r,n,s);break e}else for(be=kt(t.stateNode.containerInfo.firstChild),Ce=t,W=!0,qe=null,n=lc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vn(),r===s){t=lt(e,t,n);break e}me(e,t,r,n)}t=t.child}return t;case 5:return dc(t),e===null&&ri(t),r=t.type,s=t.pendingProps,i=e!==null?e.memoizedProps:null,a=s.children,Jo(r,s)?a=null:i!==null&&Jo(r,i)&&(t.flags|=32),Lc(e,t),me(e,t,a,n),t.child;case 6:return e===null&&ri(t),null;case 13:return $c(e,t,n);case 4:return Ji(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=wn(t,null,r,n):me(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:$e(r,s),fl(e,t,r,s,n);case 7:return me(e,t,t.pendingProps,n),t.child;case 8:return me(e,t,t.pendingProps.children,n),t.child;case 12:return me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,i=t.memoizedProps,a=s.value,q(ys,r._currentValue),r._currentValue=a,i!==null)if(Be(i.value,a)){if(i.children===s.children&&!xe.current){t=lt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=st(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?u.next=u:(u.next=p.next,p.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),si(i.return,n,t),l.lanes|=n;break}u=u.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(k(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),si(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}me(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,pn(t,n),s=Me(s),r=r(s),t.flags|=1,me(e,t,r,n),t.child;case 14:return r=t.type,s=$e(r,t.pendingProps),s=$e(r.type,s),yl(e,t,r,s,n);case 15:return Mc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:$e(r,s),Jr(e,t),t.tag=1,ke(r)?(e=!0,ms(t)):e=!1,pn(t,n),Rc(t,r,s),ii(t,r,s,n),ui(null,t,r,!0,e,n);case 19:return Hc(e,t,n);case 22:return Oc(e,t,n)}throw Error(k(156,t.tag))};function td(e,t){return Au(e,t)}function Om(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pe(e,t,n,r){return new Om(e,t,n,r)}function ma(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lm(e){if(typeof e=="function")return ma(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Pi)return 11;if(e===Ti)return 14}return 2}function bt(e,t){var n=e.alternate;return n===null?(n=Pe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ts(e,t,n,r,s,i){var a=2;if(r=e,typeof e=="function")ma(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Jt:return Ht(n.children,s,i,t);case Ri:a=8,s|=8;break;case Eo:return e=Pe(12,n,t,s|2),e.elementType=Eo,e.lanes=i,e;case Ro:return e=Pe(13,n,t,s),e.elementType=Ro,e.lanes=i,e;case Po:return e=Pe(19,n,t,s),e.elementType=Po,e.lanes=i,e;case du:return Hs(n,s,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case uu:a=10;break e;case cu:a=9;break e;case Pi:a=11;break e;case Ti:a=14;break e;case ht:a=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Pe(a,n,t,s),t.elementType=e,t.type=r,t.lanes=i,t}function Ht(e,t,n,r){return e=Pe(7,e,r,t),e.lanes=n,e}function Hs(e,t,n,r){return e=Pe(22,e,r,t),e.elementType=du,e.lanes=n,e.stateNode={isHidden:!1},e}function wo(e,t,n){return e=Pe(6,e,null,t),e.lanes=n,e}function xo(e,t,n){return t=Pe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Dm(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zs(0),this.expirationTimes=Zs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zs(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function pa(e,t,n,r,s,i,a,l,u){return e=new Dm(e,t,n,l,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Pe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xi(i),e}function $m(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function nd(e){if(!e)return _t;e=e._reactInternals;e:{if(Vt(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(ke(n))return nc(e,n,t)}return t}function rd(e,t,n,r,s,i,a,l,u){return e=pa(n,r,!0,e,s,i,a,l,u),e.context=nd(null),n=e.current,r=pe(),s=St(n),i=st(r,s),i.callback=t??null,Nt(n,i,s),e.current.lanes=s,fr(e,s,r),Ne(e,r),e}function qs(e,t,n,r){var s=t.current,i=pe(),a=St(s);return n=nd(n),t.context===null?t.context=n:t.pendingContext=n,t=st(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Nt(s,t,a),e!==null&&(ze(e,s,a,i),Gr(e,s,a)),a}function Cs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Al(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function fa(e,t){Al(e,t),(e=e.alternate)&&Al(e,t)}function Hm(){return null}var sd=typeof reportError=="function"?reportError:function(e){console.error(e)};function ya(e){this._internalRoot=e}Fs.prototype.render=ya.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));qs(e,t,null,null)};Fs.prototype.unmount=ya.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wt(function(){qs(null,e,null,null)}),t[it]=null}};function Fs(e){this._internalRoot=e}Fs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ou();e={blockedOn:null,target:e,priority:t};for(var n=0;n<pt.length&&t!==0&&t<pt[n].priority;n++);pt.splice(n,0,e),n===0&&Du(e)}};function ga(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Il(){}function qm(e,t,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=Cs(a);i.call(c)}}var a=rd(t,r,e,0,null,!1,!1,"",Il);return e._reactRootContainer=a,e[it]=a.current,nr(e.nodeType===8?e.parentNode:e),Wt(),a}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var c=Cs(u);l.call(c)}}var u=pa(e,0,!1,null,null,!1,!1,"",Il);return e._reactRootContainer=u,e[it]=u.current,nr(e.nodeType===8?e.parentNode:e),Wt(function(){qs(t,u,n,r)}),u}function Bs(e,t,n,r,s){var i=n._reactRootContainer;if(i){var a=i;if(typeof s=="function"){var l=s;s=function(){var u=Cs(a);l.call(u)}}qs(t,a,e,s)}else a=qm(n,t,e,s,r);return Cs(a)}Tu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ln(t.pendingLanes);n!==0&&(Li(t,n|1),Ne(t,Z()),!(D&6)&&(Nn=Z()+500,Et()))}break;case 13:Wt(function(){var r=at(e,1);if(r!==null){var s=pe();ze(r,e,1,s)}}),fa(e,1)}};Di=function(e){if(e.tag===13){var t=at(e,134217728);if(t!==null){var n=pe();ze(t,e,134217728,n)}fa(e,134217728)}};Mu=function(e){if(e.tag===13){var t=St(e),n=at(e,t);if(n!==null){var r=pe();ze(n,e,t,r)}fa(e,t)}};Ou=function(){return H};Lu=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};zo=function(e,t,n){switch(t){case"input":if(Oo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=Ts(r);if(!s)throw Error(k(90));mu(r),Oo(r,s)}}}break;case"textarea":fu(e,n);break;case"select":t=n.value,t!=null&&cn(e,!!n.multiple,t,!1)}};Nu=ca;ju=Wt;var Fm={usingClientEntryPoint:!1,Events:[gr,nn,Ts,xu,ku,ca]},Tn={findFiberByHostInstance:Ot,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zm={bundleType:Tn.bundleType,version:Tn.version,rendererPackageName:Tn.rendererPackageName,rendererConfig:Tn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ut.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Cu(e),e===null?null:e.stateNode},findFiberByHostInstance:Tn.findFiberByHostInstance||Hm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Or=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Or.isDisabled&&Or.supportsFiber)try{Is=Or.inject(zm),Ke=Or}catch{}}Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fm;Ae.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ga(t))throw Error(k(200));return $m(e,t,null,n)};Ae.createRoot=function(e,t){if(!ga(e))throw Error(k(299));var n=!1,r="",s=sd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=pa(e,1,!1,null,null,n,!1,r,s),e[it]=t.current,nr(e.nodeType===8?e.parentNode:e),new ya(t)};Ae.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Cu(t),e=e===null?null:e.stateNode,e};Ae.flushSync=function(e){return Wt(e)};Ae.hydrate=function(e,t,n){if(!zs(t))throw Error(k(200));return Bs(null,e,t,!0,n)};Ae.hydrateRoot=function(e,t,n){if(!ga(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",a=sd;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=rd(t,null,e,1,n??null,s,!1,i,a),e[it]=t.current,nr(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new Fs(t)};Ae.render=function(e,t,n){if(!zs(t))throw Error(k(200));return Bs(null,e,t,!1,n)};Ae.unmountComponentAtNode=function(e){if(!zs(e))throw Error(k(40));return e._reactRootContainer?(Wt(function(){Bs(null,null,e,!1,function(){e._reactRootContainer=null,e[it]=null})}),!0):!1};Ae.unstable_batchedUpdates=ca;Ae.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!zs(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Bs(e,t,n,!1,r)};Ae.version="18.3.1-next-f1338f8080-20240426";function od(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(od)}catch(e){console.error(e)}}od(),ou.exports=Ae;var Bm=ou.exports,El=Bm;Ao.createRoot=El.createRoot,Ao.hydrateRoot=El.hydrateRoot;const Wm=[{id:"today",label:"Today"},{id:"compose",label:"Compose"},{id:"coach",label:"Live Coach"},{id:"retention",label:"Retention",grp:"Book"},{id:"triggers",label:"Triggers"},{id:"referrals",label:"Referrals"},{id:"manager",label:"Manager",principalOnly:!0,grp:"Admin"},{id:"discovery",label:"Discovery"}];function Um({active:e,onChange:t,persona:n}){const r=I.useRef([]),s=I.useMemo(()=>Wm.filter(a=>!a.principalOnly||n==="Alex"),[n]);I.useEffect(()=>{r.current.length=s.length},[s.length]),I.useEffect(()=>{const a=s.findIndex(u=>u.id===e),l=r.current[a];l&&typeof l.scrollIntoView=="function"&&l.scrollIntoView({block:"nearest",inline:"center",behavior:"smooth"})},[e,s]);const i=(a,l)=>{var u;let c=null;a.key==="ArrowRight"?c=(l+1)%s.length:a.key==="ArrowLeft"?c=(l-1+s.length)%s.length:a.key==="Home"?c=0:a.key==="End"&&(c=s.length-1),c!==null&&(a.preventDefault(),t(s[c].id),(u=r.current[c])==null||u.focus())};return o.jsxs("div",{className:"tabs-wrap",children:[o.jsx("nav",{className:"tabs",role:"tablist","aria-label":"Sections",children:s.map((a,l)=>{const u=e===a.id;return o.jsx("button",{ref:c=>r.current[l]=c,role:"tab","aria-selected":u,tabIndex:u?0:-1,className:`tab ${u?"active":""} ${a.grp?"tab-group":""}`,"data-group":a.grp||null,onClick:()=>t(a.id),onKeyDown:c=>i(c,l),children:a.label},a.id)})}),o.jsx(XNowBar,{})]})}function Ym({persona:e,onPersonaChange:t}){return o.jsxs("header",{className:"topbar",children:[o.jsxs("div",{className:"brand",children:[o.jsxs("div",{className:"brand-text",children:[o.jsx("div",{className:"name",children:"Agency Command Center"}),o.jsx("div",{className:"sub",children:"Hakobian Strategic Follow-Up · Hakobian Automated Coach"})]}),o.jsx(XBrandTagline,{})]}),o.jsxs("div",{className:"topbar-right",children:[o.jsxs("div",{className:"agency-badge",children:["Sample Agency · Anytown, WA · ",o.jsx("strong",{children:"Office line: (555) 010-0142"})]}),o.jsx(XDemoDrawer,{persona:e,onPersonaChange:t})]})]})}const $n={name:"Sample Agency · Demonstration data",city:"Anytown, WA",phone:"(555) 010-0142",waLicense:"WA-OIC #DEMO-000000",producers:{Alex:{full:"Alex Rivera",license:"WA-OIC #DEMO-AR-001",title:"Agent / Principal"},Maya:{full:"Maya Lindqvist",license:"WA-OIC #DEMO-ML-002",title:"Licensed Sales Producer"}}},ko={web:{label:"Web inquiry",short:"WEB"},referral:{label:"Referral",short:"REF"},walkin:{label:"Walk-in",short:"WALK"},aggregator:{label:"Aggregator",short:"AGG"},winback:{label:"Win-back",short:"WIN"},xdate:{label:"X-date trigger",short:"XDT"},book:{label:"Existing book",short:"BOOK"}},dr={lead:{label:"Lead",order:1},quoted:{label:"Quoted",order:2},proposed:{label:"Proposed",order:3},bound:{label:"Bound",order:4},lapsed:{label:"Lapsed",order:5}},Rl={green:5,amber:15};function Qm(e){const t=(Date.now()-e)/6e4;return t<=Rl.green?"green":t<=Rl.amber?"amber":"red"}function va(e){const t=Math.floor((Date.now()-e)/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;const n=Math.floor(t/60),r=t%60;return n<24?r?`${n}h ${r}m ago`:`${n}h ago`:`${Math.floor(n/24)}d ago`}function Gm(e){return e<12?"Good morning":e<17?"Good afternoon":"Good evening"}function Km(e){return e.toLocaleDateString(void 0,{weekday:"long",month:"long",day:"numeric"})}function Pl(e,t){return`${e} ${t}${e===1?"":"s"}`}function Lr(e){return e<10?`0${e}`:String(e)}function Xm(e){const t=e.map(r=>r.firstSeenAt).filter(Boolean);if(t.length===0)return"";const n=Math.min(...t);return`oldest ${va(n).replace(" ago","")}`}function Jm(e){if(!e.xDateAt||!e.meta)return e;const t=new Date(e.xDateAt).toLocaleDateString(void 0,{month:"short",day:"numeric"}),n=Math.round((e.xDateAt-Date.now())/864e5),r=t+(n===0?" (today)":n===1?" (tomorrow)":""),s=[...e.meta],i=s.findIndex(a=>/^[A-Z][a-z]{2}\s\d/.test(a));return i>=0?s[i]=r:s.splice(1,0,r),{...e,meta:s}}function Zm(e){const t=/[^\x00-\x7F]/.test(e),n=[...e].length;return t?n<=70?{encoding:"UCS-2",len:n,segments:1}:{encoding:"UCS-2",len:n,segments:Math.ceil(n/67)}:n<=160?{encoding:"GSM-7",len:n,segments:1}:{encoding:"GSM-7",len:n,segments:Math.ceil(n/153)}}function ep(e){return String(e).toLowerCase().trim().replace(/\s+/g,"-")}const tp=e=>e>=1e3?`$${(e/1e3).toFixed(e>=1e4?0:1)}k`:`$${e.toLocaleString()}`,ns=e=>`$${e.toLocaleString()}`,np=e=>e>=1e3?`$${(e/1e3).toFixed(e>=1e4?0:1)}k`:`$${e.toLocaleString()}`,ki=e=>`$${e.toLocaleString()}`,hr=e=>e>=1e3?`$${(e/1e3).toFixed(e>=1e4?0:1)}k`:`$${e.toLocaleString()}`,Ni=e=>`$${e.toLocaleString()}`;function id(e){const t=(Date.now()-e)/864e5;return Math.round(t)}function rp(e){const t=id(e);return t<=0?"today":t===1?"1 day ago":t<30?`${t} days ago`:`${Math.round(t/30)}mo ago`}function sp(e){const t=new Date(e).getTime(),n=id(t);if(n===0)return"today";if(n>0)return n===1?"1 day ago":`${n} days ago`;const r=-n;return r===1?"tomorrow":r<30?`in ${r} days`:`in ${Math.round(r/30)}mo`}const Tl=e=>`$${e.toLocaleString()}`,op=e=>e>=1e3?`$${(e/1e3).toFixed(e>=1e4?0:1)}k`:`$${e.toLocaleString()}`;function Ml(e){return e===0?"today":e<30?`${e}d ago`:`${Math.round(e/30)}mo ago`}function Ol(e){return e===0?"today":e<7?`${e}d ago`:e<30?`${e}d ago`:`${Math.round(e/30)}mo ago`}function _s(e){return e==null?"—":Math.abs(e)>=1e6?`$${(e/1e6).toFixed(1)}M`:Math.abs(e)>=1e4?`$${Math.round(e/1e3)}k`:Math.abs(e)>=1e3?`$${(e/1e3).toFixed(1)}k`:`$${e.toLocaleString()}`}function No(e){return e==null?"—":`$${e.toLocaleString()}`}function Mt(e,t=0){return e==null||Number.isNaN(e)?"—":`${(e*100).toFixed(t)}%`}function ip(e){if(e==null||Number.isNaN(e))return"—";const t=e*100;return`${t>0?"+":""}${t.toFixed(1)}%`}function ap(e){return Number.isNaN(e)?0:Math.max(0,Math.min(100,e))}function Dr({label:e,value:t,sub:n,tone:r}){return o.jsxs("div",{className:`card retention-kpi retention-kpi-${r||"neutral"}`,children:[o.jsx("div",{className:"retention-kpi-label",children:e}),o.jsx("div",{className:"retention-kpi-value",children:t}),n&&o.jsx("div",{className:"retention-kpi-sub",children:n})]})}function $r({label:e,value:t,sub:n,tone:r}){return o.jsxs("div",{className:`card retention-kpi retention-kpi-${r||"neutral"}`,children:[o.jsx("div",{className:"retention-kpi-label",children:e}),o.jsx("div",{className:"retention-kpi-value",children:t}),n&&o.jsx("div",{className:"retention-kpi-sub",children:n})]})}function Hr({label:e,value:t,sub:n,tone:r}){return o.jsxs("div",{className:`card retention-kpi retention-kpi-${r||"neutral"}`,children:[o.jsx("div",{className:"retention-kpi-label",children:e}),o.jsx("div",{className:"retention-kpi-value",children:t}),n&&o.jsx("div",{className:"retention-kpi-sub",children:n})]})}function qr({label:e,value:t,sub:n,tone:r}){return o.jsxs("div",{className:`card claims-kpi claims-kpi-${r||"neutral"}`,children:[o.jsx("div",{className:"claims-kpi-label",children:e}),o.jsx("div",{className:"claims-kpi-value",children:t}),n&&o.jsx("div",{className:"claims-kpi-sub",children:n})]})}function ad({pct:e,tone:t}){const n=t||(e>=90?"good":e>=70?"ok":"risk");return o.jsx("div",{className:"mgr-progress",children:o.jsx("div",{className:`mgr-progress-fill mgr-tone-${n}`,style:{width:`${ap(e)}%`}})})}function Fr({label:e,value:t,sub:n,pct:r,tone:s,accent:i}){return o.jsxs("div",{className:`card mgr-hero-kpi mgr-hero-kpi-${i||"neutral"}`,children:[o.jsx("div",{className:"mgr-hero-label",children:e}),o.jsx("div",{className:"mgr-hero-value",children:t}),n&&o.jsx("div",{className:"mgr-hero-sub",children:n}),typeof r=="number"&&o.jsxs("div",{className:"mgr-hero-progress",children:[o.jsx(ad,{pct:r,tone:s}),o.jsxs("span",{className:"mgr-hero-pct mono",children:[Math.round(r),"%"]})]})]})}function Ws({script:e,label:t="Open with"}){return e?o.jsxs("div",{className:"open-with",children:[o.jsx("span",{className:"open-with-label",children:t}),o.jsxs("div",{className:"open-with-line",children:[o.jsxs("span",{className:"open-with-move",children:[o.jsx("b",{children:"1"}),e.pace]})," ",o.jsxs("span",{className:"open-with-move",children:[o.jsx("b",{children:"2"}),e.context]})," ",o.jsxs("span",{className:"open-with-move",children:[o.jsx("b",{children:"3"}),e.green]})]})]}):null}const lp={"Set payment plan":{pace:"Hey {name}, I was reviewing your account and noticed the last payment didn't go through.",context:"That happens. I'd rather fix it than let the policy lapse, and I can set up a payment plan from what I already have on file; nothing to fill out.",green:"AM or PM for a five-minute call?"},"Service-recovery call":{pace:"Hey {name}, I saw the note about what happened, and I'm sorry it went that way.",context:"It sounds like that's really important to you, and it should be. I'd rather hear it from you than guess, and fix what I can before your renewal.",green:"Are you opposed to a quick call this week? You pick the time."},"Save call · re-quote":{pace:"Hey {name}, I was reviewing your account and noticed something kind of… strange: your renewal is coming up and your rate moved.",context:"I re-ran everything with every discount you qualify for, so you can see the real number next to any quote you've pulled.",green:"How much was the other quote? If I can beat it, I'll tell you. If I can't, I'll tell you that too."},"Pre-renewal call":{pace:"Hey {name}, your renewal is {days} days out, and the rate notice is the part nobody explains.",context:"I'd rather walk you through what moved, and what I can do about it, before the renewal than after. That's the one date staying or switching costs nothing.",green:"Is AM or PM better for a ten-minute call?"},"Re-quote home":{pace:"Hey {name}, I noticed the refinance went through. Congratulations.",context:"The new lender will ask for proof of insurance, and a refi is the one time a home re-quote is worth doing. I already ran it from what I have on file.",green:"Want me to send it, or walk you through it? Either works."},"Post-claim check-in":{pace:"Hey {name}, I know the claim was a lot.",context:"No agenda. I want to hear how it went from your side and make sure nothing is still open.",green:"Would it be a terrible idea to take five minutes this week?"},"Cross-sell outreach":{pace:"Hey {name}, I was reviewing your account with us and noticed something kind of… strange…",context:"{opportunity}. My main focus is protecting you and, just as importantly, your income.",green:"Are you opposed to a quick, no-obligation call to look at it together?"},"Annual review":{pace:"Hey {name}, it's been a year since we last looked at everything together.",context:"Things change in a year: cars, jobs, kids, the house. The review takes fifteen minutes and usually finds a discount or a gap.",green:"Is AM or PM better for you?"}},up={mortgage_refi:{pace:"Hey {name}, I noticed the refinance went through. Congratulations.",context:"The new lender will ask for proof of insurance, and a refi is the one time a home re-quote is worth doing. I already ran it from what I have on file.",green:"Want me to send it, or walk you through it? Either works."},teen_driver:{pace:"Hey {name}, I saw the permit turned into a license. Congratulations, and condolences for the insurance bill.",context:"Teen rates are the one place discounts really move the number: safe-driver and good-student together take a real piece off, and I can set both up from here.",green:"Would it be a terrible idea to take ten minutes and walk through it? You pick the time."},new_vehicle:{pace:"Hey {name}, I noticed the new car isn't on the policy yet.",context:"Until it is, a loss on it isn't covered the way you'd expect, and with the umbrella it's worth checking the limits at the same time. I prepared the add-on already.",green:"AM or PM today for a five-minute call?"},new_baby:{pace:"Hey {name}, congratulations on the baby. That changes a lot.",context:"Many families worry they won't have enough protection if something happens. My main focus is protecting you and, just as importantly, your income.",green:"Are you opposed to a quick, no-obligation call this week, with both of you on?"},business_start:{pace:"Hey {name}, I saw the new business is up and running. Congratulations.",context:"A home policy doesn't cover business property or liability, so the first few months are the gap. A business owners policy closes it, and I need ten minutes to confirm what you do and where.",green:"Is AM or PM better for a quick discovery call?"},address_change:{pace:"Hey {name}, I saw the move went through.",context:"Rates are set by address, so the policies need the new one before the next bill. I'll update everything from here and send the confirmation.",green:"Want me to just handle it and confirm by email? Reply YES."},home_purchase:{pace:"Hey {name}, congratulations on the house.",context:"The renters policy ends when the keys change hands, and bundling the home with your auto brings both down. I ran the home quote already.",green:"Is AM or PM better for a quick walk-through before closing?"},marriage:{pace:"Hey {name}, congratulations!",context:"Two households usually mean two of everything: two auto policies, two renters, sometimes two carriers. Combining them is the easiest discount you'll ever get, and the ring is worth scheduling on its own.",green:"Would it be a terrible idea to take ten minutes to combine them? You pick the time."},mvr_violation:{pace:"Hey {name}, I saw the ticket come through on the record. It happens.",context:"Before it reaches the renewal, a defensive-driving course can offset part of it, and I'd rather tell you that now than after the rate notice.",green:"Want the course link? Reply YES and I'll send it today."},claim_other_carrier:{pace:"Hey {name}, I noticed a claim went through on the policy you have elsewhere.",context:"The question that matters now is how that company paid you. Insurance is meant to save you from financial devastation, not aggravation, and full glass is the rider that makes the next one painless.",green:"Out of curiosity, how did the claim go? If it didn't, I'd want to know."},life_event:{pace:"Hey {name}, I heard the news. Congratulations.",context:"Life changes are the moment coverage goes out of date, and a quick review usually finds a gap or a discount; the away-student rating is one of them.",green:"Are you opposed to a quick, no-obligation call this week?"}},cp={closed:{pace:"Hey {name}, the claim is closed, and thank you for your patience through it.",context:"How it was handled matters more to me than the number. If something went wrong, I'd rather hear it than guess.",green:"On a scale of 1 to 10, how did we do? One reply is plenty."},attention:{pace:"Hey {name}, I can see the claim has dragged, and that's not okay.",context:"I'm not the adjuster, but I'm the one who can push the adjuster. I'll call them today and tell you what they say.",green:"Is AM or PM better for me to update you?"},open:{pace:"Hey {name}, checking in on the claim.",context:"You should have heard from the adjuster by now. If you haven't, I'll chase it; if you have, I want to make sure nothing is stuck.",green:"Anything open on your side? A one-word reply is fine."}},dp={new:{pace:"Hey {name}, it's just your local Sample Agency office. {referrer} asked me to reach out.",context:"I'd rather hear what you have now than guess, so I can tell you honestly whether we can do better.",green:"Is AM or PM better for a quick call?"},contacted:{pace:"Hey {name}, thanks for the details on the call.",context:"Your quote is in your email with the limits spelled out, so you can compare it line by line against what you have.",green:"How much are you paying now?"},quoted:{pace:"Hey {name}, did you see my email with the quote?",context:"I'd hate to feel like I'm bothering you.",green:"Should I keep following up?"},bound:{pace:"Hey {referrer}, {name} is all set.",context:"They told me you sent them. That's the best thing anyone can do for a small office, and I don't take it lightly.",green:"Anything on your own policies you'd like me to look at? One word is enough."},lost:{pace:"Hey {name}, I know you went another direction, and that's okay.",context:"Rates move at renewal. I'll check in once before yours, with a real number, and not before.",green:"If you'd rather I didn't, simply reply NO."}};function mr(e){return(e||"").split(/\s|&/)[0]}function Us(e,t){const n=r=>r.replace(/\{name\}/g,t.name||"there").replace(/\{referrer\}/g,t.referrer||"a client").replace(/\{opportunity\}/g,t.opportunity||"there's a gap worth closing").replace(/\{days\}/g,t.days!=null?String(t.days):"a few");return e?{pace:n(e.pace),context:n(e.context),green:n(e.green)}:null}const De=e=>Date.now()-e*60*1e3,$=e=>Date.now()-e*60*60*1e3,zr=e=>Date.now()+e*24*60*60*1e3,B={needsFirstTouch:[{id:"L-001",householdId:"H-SAMPLE",name:"Marcus Sample",meta:["98029","Auto quote","Currently $186/mo Carrier A"],pill:{cls:"asker",label:"Questioner"},source:"web",firstSeenAt:De(14),consent:{sms:!0,email:!0,capturedAt:De(14),basis:"Web form opt-in"},stage:"quoted",quoteNumber:"Q-2026-04-0431",currentPremium:186,proposedPremium:163,policyType:"auto"},{id:"L-002",householdId:"H-EXAMPLE",name:"Anya Example",meta:["98075","Home inquiry","First-time buyer"],pill:{cls:"story",label:"Storyteller"},source:"referral",firstSeenAt:De(32),consent:{sms:!1,email:!0,capturedAt:De(32),basis:"Referrer-shared, no SMS opt-in yet"},stage:"lead",quoteNumber:null,currentPremium:null,proposedPremium:null,policyType:"home"},{id:"L-003",householdId:"H-MOCK",name:"Diego Mock",meta:["98027","Bundle inquiry","Auto + Home"],pill:{cls:"doer",label:"Doer"},source:"aggregator",firstSeenAt:De(72),consent:{sms:!1,email:!1,capturedAt:null,basis:"Aggregator data — no express consent on file"},stage:"lead",quoteNumber:null,currentPremium:null,proposedPremium:null,policyType:"bundle"}],xDates:[{id:"L-101",householdId:"H-DOE",name:"Sarah Doe",meta:["Auto X-date","$186/mo Carrier A"],pill:{cls:"thinker",label:"Thinker"},source:"xdate",firstSeenAt:$(18),xDateAt:zr(0),consent:{sms:!0,email:!0,capturedAt:$(18),basis:"Prior quote opt-in"},stage:"quoted",quoteNumber:"Q-2025-10-1820",currentPremium:186,proposedPremium:168,policyType:"auto"},{id:"L-102",householdId:"H-ROE",name:"James Roe",meta:["Home X-date","May 5","$1,840/yr Carrier E"],pill:{cls:"story",label:"Storyteller"},source:"book",firstSeenAt:$(48),xDateAt:zr(5),consent:{sms:!0,email:!0,capturedAt:$(48),basis:"Existing customer · service-related"},stage:"proposed",quoteNumber:"Q-2026-04-0410",currentPremium:153,proposedPremium:138,policyType:"home"},{id:"L-103",householdId:"H-DEMO",name:"Linh Demo",meta:["Auto X-date","May 8","$211/mo Carrier B"],pill:{cls:"asker",label:"Questioner"},source:"xdate",firstSeenAt:$(2),xDateAt:zr(8),consent:{sms:!1,email:!0,capturedAt:$(2),basis:"Email opt-in only"},stage:"quoted",quoteNumber:"Q-2025-11-2210",currentPremium:211,proposedPremium:192,policyType:"auto"},{id:"L-104",householdId:"H-TEST",name:"Tom Test",meta:["Auto X-date","May 12","$174/mo Carrier C"],pill:{cls:"doer",label:"Doer"},source:"xdate",firstSeenAt:$(120),xDateAt:zr(12),consent:{sms:!0,email:!0,capturedAt:$(120),basis:"Prior quote opt-in"},stage:"quoted",quoteNumber:"Q-2025-09-1505",currentPremium:174,proposedPremium:168,policyType:"auto"}],drafts:[{id:"D-001",householdId:"H-SAMPLE",name:"Follow-up email · Marcus Sample",meta:["Drafted by Live Coach","Auto $163/mo proposal","Wed 3pm meeting"],pill:{cls:"story",label:"Storyteller"},source:"web",firstSeenAt:De(9),consent:{sms:!0,email:!0,capturedAt:De(9),basis:"Web form opt-in"},stage:"proposed",quoteNumber:"Q-2026-04-0431",currentPremium:186,proposedPremium:163,policyType:"auto"},{id:"D-002",householdId:"H-EXAMPLE",name:"Cross-sell SMS · Anya Example",meta:["Drafted by Compose","Life insurance opener"],pill:{cls:"story",label:"Storyteller"},source:"referral",firstSeenAt:De(42),consent:{sms:!1,email:!0,capturedAt:De(42),basis:"Referrer-shared, no SMS opt-in yet"},stage:"lead",quoteNumber:null,currentPremium:null,proposedPremium:null,policyType:"life"}],callQueue:[{id:"C-001",householdId:"H-ROE",name:"James Roe",meta:["Home renewal review","Bring updated valuation"],pill:{cls:"story",label:"Storyteller"},source:"book",firstSeenAt:$(48),consent:{sms:!0,email:!0,capturedAt:$(48),basis:"Existing customer"},stage:"proposed",quoteNumber:"Q-2026-04-0410",currentPremium:153,proposedPremium:138,policyType:"home",scheduledAt:"9:00 AM"},{id:"C-002",householdId:"H-SAMPLE",name:"Marcus Sample",meta:["Callback per Live Coach","Auto + life walkthrough"],pill:{cls:"story",label:"Storyteller"},source:"web",firstSeenAt:De(14),consent:{sms:!0,email:!0,capturedAt:De(14),basis:"Web form opt-in"},stage:"proposed",quoteNumber:"Q-2026-04-0431",currentPremium:186,proposedPremium:163,policyType:"auto",scheduledAt:"11:30 AM"},{id:"C-003",householdId:"H-MOCK",name:"Diego Mock",meta:["Bundle discussion","Auto + Home + Personal Articles"],pill:{cls:"doer",label:"Doer"},source:"aggregator",firstSeenAt:$(2),consent:{sms:!1,email:!1,capturedAt:null,basis:"Aggregator data — no express consent on file"},stage:"lead",quoteNumber:null,currentPremium:null,proposedPremium:null,policyType:"bundle",scheduledAt:"2:00 PM"}]},hp=Object.fromEntries([...B.needsFirstTouch,...B.xDates,...B.drafts,...B.callQueue].map(e=>[e.id,e])),R=e=>Date.now()-e*24*60*60*1e3,mp=()=>[...B.needsFirstTouch,...B.xDates,...B.drafts,...B.callQueue],Ll={lead:"raw",quoted:"following",proposed:"following",bound:"current",lapsed:"winback"},Dl=(()=>{const e=[...B.needsFirstTouch,...B.xDates,...B.callQueue],t=r=>{var s;return((s=dr[r.stage])==null?void 0:s.order)??0},n=new Map;for(const r of e){const s=r.householdId||r.name,i=n.get(s);(!i||t(r)>t(i))&&n.set(s,r)}return[...n.values()]})(),pp=[{id:"CLM-001",claimNumber:"CLM-2026-04-0098",householdId:"H-SAMPLE",customerName:"Marcus Sample",zip:"98029",lineOfBusiness:"auto",kind:"auto-collision",openedAt:R(3),stage:"investigation",daysOpen:3,estimateAmount:null,paidAmount:null,adjusterName:"Diane Whitfield",lastTouchByAgentDays:1,npsRisk:"low",claimantSentiment:"neutral",notes:[{at:R(3),by:"System",text:"FNOL filed via mobile app — rear-end at the Main St. exit"},{at:R(3),by:"Adjuster",text:"Diane W. assigned. Photos requested."},{at:R(1),by:"Maya",text:"Sent check-in text. Marcus replied — rental in place, all set."}]},{id:"CLM-002",claimNumber:"CLM-2026-03-1742",householdId:"H-DATASET",customerName:"Megan Dataset",zip:"98027",lineOfBusiness:"auto",kind:"auto-collision",openedAt:R(38),stage:"estimate",daysOpen:38,estimateAmount:8420,paidAmount:null,adjusterName:"Raymond Cole",lastTouchByAgentDays:22,npsRisk:"high",claimantSentiment:"frustrated",notes:[{at:R(38),by:"System",text:"FNOL — single-vehicle collision, body shop selected."},{at:R(31),by:"Adjuster",text:"Initial estimate $6,200. Supplement requested by shop."},{at:R(22),by:"Alex",text:"Called Megan — she was waiting on rental extension. Promised to follow up."},{at:R(9),by:"Megan",text:'Inbound complaint: "Nobody called back. Shop says claim is stuck."'}]},{id:"CLM-003",claimNumber:"CLM-2026-04-0211",householdId:"H-ROE",customerName:"James Roe",zip:"98029",lineOfBusiness:"home",kind:"home-water",openedAt:R(11),stage:"estimate",daysOpen:11,estimateAmount:18750,paidAmount:null,adjusterName:"Priya Anand",lastTouchByAgentDays:4,npsRisk:"medium",claimantSentiment:"neutral",notes:[{at:R(11),by:"System",text:"FNOL — supply line burst under kitchen sink, water in subfloor."},{at:R(10),by:"Adjuster",text:"Priya A. assigned. Mitigation vendor (ServiceMaster) dispatched same day."},{at:R(7),by:"Adjuster",text:"Drying complete. Estimate $18,750 incl. cabinetry."},{at:R(4),by:"Maya",text:"Walked James through estimate over the phone. He felt heard."}]},{id:"CLM-004",claimNumber:"CLM-2026-02-0904",householdId:"H-DOE",customerName:"Sarah Doe",zip:"98027",lineOfBusiness:"auto",kind:"auto-glass",openedAt:R(46),stage:"closed",daysOpen:9,estimateAmount:612,paidAmount:612,adjusterName:"Auto-glass network",lastTouchByAgentDays:39,npsRisk:"low",claimantSentiment:"positive",notes:[{at:R(46),by:"System",text:"FNOL — windshield crack from highway debris."},{at:R(45),by:"Adjuster",text:"Routed to Safelite. Mobile install scheduled."},{at:R(39),by:"System",text:"Claim closed and paid in full."}]},{id:"CLM-005",claimNumber:"CLM-2026-04-0455",householdId:"H-MOCK",customerName:"Diego Mock",zip:"98027",lineOfBusiness:"home",kind:"home-wind",openedAt:R(6),stage:"fnol",daysOpen:6,estimateAmount:null,paidAmount:null,adjusterName:"Pending assignment",lastTouchByAgentDays:8,npsRisk:"high",claimantSentiment:"frustrated",notes:[{at:R(6),by:"System",text:"FNOL filed — wind damage to fence and shed roof during Apr storm."},{at:R(6),by:"System",text:"Awaiting adjuster assignment (queue backlog noted)."},{at:R(2),by:"Diego",text:'Inbound: "Has anyone been assigned yet? Roofer is asking."'}]},{id:"CLM-006",claimNumber:"CLM-2026-03-2031",householdId:"H-EXAMPLE",customerName:"Anya Example",zip:"98075",lineOfBusiness:"auto",kind:"auto-comprehensive",openedAt:R(20),stage:"repair",daysOpen:20,estimateAmount:4280,paidAmount:null,adjusterName:"Raymond Cole",lastTouchByAgentDays:5,npsRisk:"low",claimantSentiment:"positive",notes:[{at:R(20),by:"System",text:"FNOL — deer strike, front-end damage. No injuries."},{at:R(19),by:"Adjuster",text:"Raymond C. assigned. Vehicle towed to preferred shop."},{at:R(14),by:"Adjuster",text:"Estimate $4,280 approved. Parts on order."},{at:R(5),by:"Alex",text:"Checked in with Anya. Loaner is comfortable, ETA on parts looks good."}]},{id:"CLM-007",claimNumber:"CLM-2026-03-0871",householdId:"H-DEMO",customerName:"Linh Demo",zip:"98029",lineOfBusiness:"renters",kind:"home-theft",openedAt:R(33),stage:"settlement",daysOpen:33,estimateAmount:3150,paidAmount:null,adjusterName:"Priya Anand",lastTouchByAgentDays:12,npsRisk:"medium",claimantSentiment:"neutral",notes:[{at:R(33),by:"System",text:"FNOL — laptop and bike stolen from garage. Police report filed."},{at:R(28),by:"Adjuster",text:"Documentation reviewed. Settlement offer drafted."},{at:R(12),by:"Maya",text:'Sent SMS confirming settlement amount. Linh said "ok, sounds fine".'}]},{id:"CLM-008",claimNumber:"CLM-2026-04-0019",householdId:"H-PLACEHOLDER",customerName:"Patrick Placeholder",zip:"98027",lineOfBusiness:"umbrella",kind:"liability",openedAt:R(14),stage:"investigation",daysOpen:14,estimateAmount:null,paidAmount:null,adjusterName:"Marcus Pseudonym",lastTouchByAgentDays:3,npsRisk:"medium",claimantSentiment:"neutral",notes:[{at:R(14),by:"System",text:"Third-party liability — guest slip-and-fall on driveway."},{at:R(13),by:"Adjuster",text:"Marcus H. (umbrella specialist) assigned. Statement gathering underway."},{at:R(3),by:"Alex",text:"Called Patrick — talked through how umbrella adjusters work, set expectations."}]},{id:"CLM-009",claimNumber:"CLM-2026-04-0388",householdId:"H-SPECIMEN",customerName:"Hiro Specimen",zip:"98074",lineOfBusiness:"home",kind:"home-water",openedAt:R(29),stage:"closed",daysOpen:26,estimateAmount:5640,paidAmount:5640,adjusterName:"Priya Anand",lastTouchByAgentDays:14,npsRisk:"low",claimantSentiment:"positive",notes:[{at:R(29),by:"System",text:"FNOL — washing machine overflow, hardwood floor."},{at:R(28),by:"Adjuster",text:"Mitigation dispatched. Estimate $5,640."},{at:R(20),by:"Adjuster",text:"Floor refinish complete. Final inspection passed."},{at:R(14),by:"System",text:"Claim closed, payment issued."},{at:R(14),by:"Maya",text:'Sent thank-you note. Hiro replied: "team was excellent, thank you."'}]},{id:"CLM-010",claimNumber:"CLM-2026-02-1198",householdId:"H-TEST",customerName:"Tom Test",zip:"98075",lineOfBusiness:"auto",kind:"auto-collision",openedAt:R(57),stage:"settlement",daysOpen:57,estimateAmount:12480,paidAmount:null,adjusterName:"Diane Whitfield",lastTouchByAgentDays:41,npsRisk:"high",claimantSentiment:"frustrated",notes:[{at:R(57),by:"System",text:"FNOL — multi-vehicle, fault contested."},{at:R(50),by:"Adjuster",text:"Liability investigation opened. Other carrier disputing."},{at:R(41),by:"Alex",text:"Called Tom to set expectations on contested liability timeline."},{at:R(18),by:"Adjuster",text:"Liability resolved 70/30. Settlement offer issued."},{at:R(6),by:"Tom",text:'Inbound complaint: "This has gone on too long. Considering switching at renewal."'}]}],fp={auto:"Auto",home:"Home",umbrella:"Umbrella",renters:"Renters",life:"Life"},yp={"auto-collision":"Collision","auto-comprehensive":"Comprehensive","auto-glass":"Glass","home-water":"Water damage","home-wind":"Wind damage","home-theft":"Theft",liability:"Liability"},$l={fnol:"FNOL",investigation:"Investigation",estimate:"Estimate",repair:"Repair",settlement:"Settlement",closed:"Closed"},gp={positive:"Positive",neutral:"Neutral",frustrated:"Frustrated",unknown:"Unknown"},ld=[{id:"BOB-001",householdName:"Roe household",primaryName:"James & Mina Roe",zip:"98029",linesOfBusiness:["auto","home","life","umbrella"],annualPremium:6480,tenureYears:11,persistency:.98,lastTouchDays:18,daysToRenewal:12,churnRiskScore:18,churnSignals:[],openOpportunity:"Personal articles floater for new jewelry on home inventory"},{id:"BOB-002",householdName:"Doe household",primaryName:"Sarah Doe",zip:"98027",linesOfBusiness:["auto"],annualPremium:2232,tenureYears:4,persistency:.92,lastTouchDays:92,daysToRenewal:21,churnRiskScore:78,churnSignals:["Rate increase notice mailed","Competitor quote pulled"],openOpportunity:"Bundle home (currently with Carrier E) — locks in loyalty discount"},{id:"BOB-003",householdName:"Mock household",primaryName:"Diego & Elena Mock",zip:"98027",linesOfBusiness:["auto","home","personalArticles"],annualPremium:4120,tenureYears:7,persistency:1,lastTouchDays:41,daysToRenewal:64,churnRiskScore:32,churnSignals:[],openOpportunity:"Life term-20 quote — second child on the way"},{id:"BOB-004",householdName:"Test household",primaryName:"Tom Test",zip:"98075",linesOfBusiness:["auto"],annualPremium:2088,tenureYears:2,persistency:.85,lastTouchDays:134,daysToRenewal:9,churnRiskScore:84,churnSignals:["Payment NSF last cycle","Rate increase notice mailed","Competitor quote pulled"],openOpportunity:"Save the auto first — payment plan + safe driver discount review"},{id:"BOB-005",householdName:"Demo household",primaryName:"Linh Demo",zip:"98029",linesOfBusiness:["auto","renters"],annualPremium:1640,tenureYears:3,persistency:.96,lastTouchDays:67,daysToRenewal:38,churnRiskScore:48,churnSignals:["Rate increase notice mailed"],openOpportunity:"Rent-to-own conversation — first-time buyer, home quote"},{id:"BOB-006",householdName:"Example household",primaryName:"Anya & Pavel Example",zip:"98075",linesOfBusiness:["home","auto","life"],annualPremium:5240,tenureYears:9,persistency:1,lastTouchDays:22,daysToRenewal:47,churnRiskScore:14,churnSignals:[],openOpportunity:"Umbrella $1M — assets exceed liability limits"},{id:"BOB-007",householdName:"Sample household",primaryName:"Marcus & Priya Sample",zip:"98029",linesOfBusiness:["auto"],annualPremium:1956,tenureYears:1,persistency:1,lastTouchDays:8,daysToRenewal:142,churnRiskScore:36,churnSignals:[],openOpportunity:"Life insurance — new baby trigger flagged on call"},{id:"BOB-008",householdName:"Placeholder household",primaryName:"Patrick & Mary Placeholder",zip:"98027",linesOfBusiness:["auto","home","life","umbrella","personalArticles"],annualPremium:6280,tenureYears:14,persistency:1,lastTouchDays:31,daysToRenewal:88,churnRiskScore:9,churnSignals:[],openOpportunity:null},{id:"BOB-009",householdName:"Specimen household",primaryName:"Hiro Specimen",zip:"98074",linesOfBusiness:["auto","home"],annualPremium:3120,tenureYears:5,persistency:.9,lastTouchDays:78,daysToRenewal:26,churnRiskScore:64,churnSignals:["Recent claim","Mortgage refi detected"],openOpportunity:"Refi triggers home re-quote — get ahead of mortgagee change"},{id:"BOB-010",householdName:"Fictional household",primaryName:"Raj & Anita Fictional",zip:"98029",linesOfBusiness:["auto","home","life"],annualPremium:4680,tenureYears:6,persistency:.97,lastTouchDays:54,daysToRenewal:73,churnRiskScore:28,churnSignals:[],openOpportunity:"Umbrella + personal articles — recent home appraisal up 22%"},{id:"BOB-011",householdName:"Dataset household",primaryName:"Megan Dataset",zip:"98027",linesOfBusiness:["auto"],annualPremium:864,tenureYears:2,persistency:.88,lastTouchDays:119,daysToRenewal:18,churnRiskScore:72,churnSignals:["Complaint logged","Rate increase notice mailed"],openOpportunity:"Service-recovery call before renewal — explain rate drivers"}],dt=e=>new Date(Date.now()+e*24*60*60*1e3).toISOString(),vp=[{id:"REF-001",prospectName:"Hannah Roe",zip:"98029",referrerName:"James & Mina Roe",referrerHouseholdId:"H-ROE",kind:"family",sentAt:$(4),quoteRequested:"auto",status:"new",thankYouSent:!1,estimatedAnnualPremium:1680,notes:"Daughter, just graduated UW. First car policy — Civic."},{id:"REF-002",prospectName:"David Nobody",zip:"98027",referrerName:"Patrick & Mary Placeholder",referrerHouseholdId:"H-PLACEHOLDER",kind:"neighbor",sentAt:$(28),quoteRequested:"bundle",status:"contacted",thankYouSent:!0,estimatedAnnualPremium:4200,notes:"Neighbor on same cul-de-sac. Just bought new home, shopping bundle."},{id:"REF-003",prospectName:"Priscilla Notreal",zip:"98075",referrerName:"Anya & Pavel Example",referrerHouseholdId:"H-EXAMPLE",kind:"friend",sentAt:$(54),quoteRequested:"home",status:"quoted",thankYouSent:!0,estimatedAnnualPremium:2240,notes:"Anya pitched her at book club. Home only — auto stays at Carrier D."},{id:"REF-004",prospectName:"Owen Synthetic",zip:"98027",referrerName:"Diego & Elena Mock",referrerHouseholdId:"H-MOCK",kind:"coworker",sentAt:$(80),quoteRequested:"auto",status:"bound",thankYouSent:!1,estimatedAnnualPremium:1980,notes:"Bound auto last week. Owe Diego a thank-you + $25 gift card."},{id:"REF-005",prospectName:"Bryce Pseudonym",zip:"98029",referrerName:"Karen Faux, CPA",referrerHouseholdId:"PRO-LIU-CPA",kind:"professional",sentAt:$(12),quoteRequested:"life",status:"new",thankYouSent:!1,estimatedAnnualPremium:1320,notes:"Karen sends ~6 referrals/yr. Tax client buying first house, needs term life."},{id:"REF-006",prospectName:"Maya Invented",zip:"98074",referrerName:"Dustin Pretend (Realtor)",referrerHouseholdId:"PRO-PRETEND-RE",kind:"professional",sentAt:$(22),quoteRequested:"home",status:"contacted",thankYouSent:!1,estimatedAnnualPremium:1860,notes:"Closing in 3 weeks. Time-sensitive — needs binder before close."},{id:"REF-007",prospectName:"Jeremy Fictitious",zip:"98027",referrerName:"Raj & Anita Fictional",referrerHouseholdId:"H-FICTIONAL",kind:"friend",sentAt:$(160),quoteRequested:"auto",status:"lost",thankYouSent:!0,estimatedAnnualPremium:2040,notes:"Stayed with Carrier B, $14/mo cheaper. Worth nurturing for x-date."},{id:"REF-008",prospectName:"Sienna Madeup",zip:"98075",referrerName:"James & Mina Roe",referrerHouseholdId:"H-ROE",kind:"family",sentAt:$(96),quoteRequested:"bundle",status:"quoted",thankYouSent:!0,estimatedAnnualPremium:3480,notes:"Niece, just married. Bundle quote out — comparing to the spouse's Carrier D."},{id:"REF-009",prospectName:"Cole Anybody",zip:"98029",referrerName:"Megan Stub (Sample Mortgage Co.)",referrerHouseholdId:"PRO-KIM-MTG",kind:"professional",sentAt:$(7),quoteRequested:"home",status:"new",thankYouSent:!1,estimatedAnnualPremium:1620,notes:"New broker partner — first referral. Make a strong impression."},{id:"REF-010",prospectName:"Tasha Imaginary",zip:"98027",referrerName:"Patrick & Mary Placeholder",referrerHouseholdId:"H-PLACEHOLDER",kind:"coworker",sentAt:$(38),quoteRequested:"unknown",status:"contacted",thankYouSent:!0,estimatedAnnualPremium:1500,notes:"Patrick referred at Boeing softball league. Asked us to reach out cold."}],wp=[{id:"PRO-001",kind:"community_event",title:"Community festival booth",date:dt(95),status:"planned",estimatedReach:1200,leadsGenerated:0,cost:850,owner:"Both"},{id:"PRO-002",kind:"linkedin_post",title:"LinkedIn — Q2 home buyer tips post",date:dt(3),status:"planned",estimatedReach:600,leadsGenerated:0,cost:0,owner:"Maya"},{id:"PRO-003",kind:"small_business_visit",title:"Main Street coffee crawl — 6 small businesses",date:dt(-2),status:"in_progress",estimatedReach:30,leadsGenerated:0,cost:60,owner:"Alex"},{id:"PRO-004",kind:"realtor_partnership",title:"Realtor office lunch & learn",date:dt(-9),status:"completed",estimatedReach:18,leadsGenerated:4,cost:240,owner:"Alex"},{id:"PRO-005",kind:"mortgage_broker_partnership",title:"Sample Mortgage Co. referral agreement kickoff",date:dt(-21),status:"completed",estimatedReach:8,leadsGenerated:3,cost:0,owner:"Alex"},{id:"PRO-006",kind:"sponsorship",title:"Youth baseball league — spring sponsorship",date:dt(-45),status:"completed",estimatedReach:800,leadsGenerated:2,cost:1200,owner:"Alex"},{id:"PRO-007",kind:"linkedin_post",title:"LinkedIn — small business BOP series, post 2/4",date:dt(-6),status:"completed",estimatedReach:920,leadsGenerated:1,cost:0,owner:"Maya"},{id:"PRO-008",kind:"door_knock",title:"New-build neighborhood walk — 24 doors",date:dt(7),status:"planned",estimatedReach:24,leadsGenerated:0,cost:0,owner:"Maya"}],xp={family:"Family",friend:"Friend",coworker:"Coworker",neighbor:"Neighbor",professional:"Professional"},jo=["new","contacted","quoted","bound","lost"],ud={new:"New",contacted:"Contacted",quoted:"Quoted",bound:"Bound",lost:"Lost"},kp={auto:"Auto",home:"Home",life:"Life",bundle:"Bundle",unknown:"TBD"},Np={community_event:"Community event",linkedin_post:"LinkedIn",small_business_visit:"Small biz visit",realtor_partnership:"Realtor partner",mortgage_broker_partnership:"Mortgage partner",sponsorship:"Sponsorship",door_knock:"Door knock"},Hl=["planned","in_progress","completed"],cd={planned:"Planned",in_progress:"In progress",completed:"Completed",cancelled:"Cancelled"},jp={auto:"Auto",home:"Home",life:"Life",umbrella:"Umbrella",renters:"Renters",personalArticles:"Articles"},dd=[{id:"TRG-001",householdId:"H-SAMPLE",customerName:"Marcus Sample",zip:"98029",kind:"mortgage_refi",source:"County records",detectedAt:$(3),signal:"New deed of trust filed in King County — refi closed with Rocket Mortgage.",currentLines:["auto"],opportunity:"Re-quote home",estimatedAnnualPremium:1820,confidence:"high",recommendedAction:"Call within 48h",status:"new"},{id:"TRG-002",householdId:"H-DOE",customerName:"Sarah Doe",zip:"98027",kind:"teen_driver",source:"MVR pull",detectedAt:$(20),signal:"Permit-to-license conversion for 16-year-old in household.",currentLines:["auto"],opportunity:"Add teen safe-driver / good-student discounts",estimatedAnnualPremium:1240,confidence:"high",recommendedAction:"Schedule teen safe-driver program walkthrough",status:"new"},{id:"TRG-003",householdId:"H-ROE",customerName:"James & Mina Roe",zip:"98029",kind:"new_vehicle",source:"LexisNexis enrichment",detectedAt:$(6),signal:"New 2026 Rivian R1S registered to household — not yet on policy.",currentLines:["auto","home","life","umbrella"],opportunity:"Add vehicle + revisit umbrella limits",estimatedAnnualPremium:2380,confidence:"high",recommendedAction:"Call today — coverage gap",status:"new"},{id:"TRG-004",householdId:"H-EXAMPLE",customerName:"Anya & Pavel Example",zip:"98075",kind:"new_baby",source:"Customer self-report",detectedAt:$(36),signal:"Anya mentioned new baby on inbound service call about home policy.",currentLines:["home","auto","life"],opportunity:"Life insurance review · increase term coverage",estimatedAnnualPremium:960,confidence:"high",recommendedAction:"Send life-insurance opener email",status:"in_progress"},{id:"TRG-005",householdId:"H-MOCK",customerName:"Diego & Elena Mock",zip:"98027",kind:"business_start",source:"County records",detectedAt:$(72),signal:'New WA LLC filing — "Mock Custom Cabinetry" registered to home address.',currentLines:["auto","home"],opportunity:"BOP for new business",estimatedAnnualPremium:1450,confidence:"medium",recommendedAction:"Discovery call — confirm operations",status:"new"},{id:"TRG-006",householdId:"H-SPECIMEN",customerName:"Hiro Specimen",zip:"98074",kind:"address_change",source:"NCOA address change",detectedAt:$(50),signal:"USPS forward order to new 98074 address — same zip, new street.",currentLines:["auto","home"],opportunity:"Re-rate home + auto for new address",estimatedAnnualPremium:540,confidence:"medium",recommendedAction:"Email confirmation + portal update link",status:"in_progress"},{id:"TRG-007",householdId:"H-DEMO",customerName:"Linh Demo",zip:"98029",kind:"home_purchase",source:"County records",detectedAt:$(8),signal:"Closing recorded on 2,400sf SFH — currently a renters policy customer.",currentLines:["auto","renters"],opportunity:"Convert renters to home + bundle",estimatedAnnualPremium:2150,confidence:"high",recommendedAction:"Call within 48h · time-sensitive",status:"new"},{id:"TRG-008",householdId:"H-FICTIONAL",customerName:"Raj & Anita Fictional",zip:"98029",kind:"marriage",source:"LexisNexis enrichment",detectedAt:$(96),signal:"Engagement ring scheduled item appeared on home inventory upload.",currentLines:["auto","home","life"],opportunity:"Personal articles for engagement ring",estimatedAnnualPremium:320,confidence:"medium",recommendedAction:"Send personal-articles quick quote",status:"new"},{id:"TRG-009",householdId:"H-TEST",customerName:"Tom Test",zip:"98075",kind:"mvr_violation",source:"MVR pull",detectedAt:$(14),signal:"New moving violation on file — minor, no surcharge yet.",currentLines:["auto"],opportunity:"Defensive driving course offer",estimatedAnnualPremium:380,confidence:"low",recommendedAction:"Schedule annual review",status:"new"},{id:"TRG-010",householdId:"H-DATASET",customerName:"Megan Dataset",zip:"98027",kind:"claim_other_carrier",source:"CLUE report",detectedAt:$(120),signal:"Comp claim filed at prior carrier 9 months ago — windshield, paid out.",currentLines:["auto"],opportunity:"Add full glass coverage rider",estimatedAnnualPremium:240,confidence:"low",recommendedAction:"Mention at next touch",status:"dismissed"},{id:"TRG-011",householdId:"H-PLACEHOLDER",customerName:"Patrick & Mary Placeholder",zip:"98027",kind:"life_event",source:"Inbound chat",detectedAt:$(28),signal:"Mary mentioned daughter starting at UW — dorm + away student rating opportunity.",currentLines:["auto","home","life","umbrella","personalArticles"],opportunity:"Add daughter to auto · away-student discount",estimatedAnnualPremium:680,confidence:"medium",recommendedAction:"Email parents + daughter consent form",status:"new"}],Sp={mortgage_refi:"Mortgage refi",new_vehicle:"New vehicle",address_change:"Address change",life_event:"Life event",teen_driver:"Teen driver",marriage:"Marriage",divorce:"Divorce",new_baby:"New baby",home_purchase:"Home purchase",business_start:"New business",claim_other_carrier:"Claim · other carrier",mvr_violation:"MVR violation"},bp={auto:"Auto",home:"Home",life:"Life",umbrella:"Umbrella",renters:"Renters",personalArticles:"Articles"},Cp=[{val:"all",label:"All"},{val:"new",label:"New"},{val:"in_progress",label:"In progress"},{val:"dismissed",label:"Dismissed"}],_p=[{val:"all",label:"All kinds"},{val:"mortgage_refi",label:"Mortgage"},{val:"new_vehicle",label:"Vehicle"},{val:"home_purchase",label:"Home purchase"},{val:"teen_driver",label:"Teen driver"},{val:"new_baby",label:"New baby"},{val:"life_event",label:"Life event"},{val:"marriage",label:"Marriage"},{val:"business_start",label:"New business"},{val:"address_change",label:"Address"},{val:"mvr_violation",label:"MVR"},{val:"claim_other_carrier",label:"Prior claim"}],Ap=[{key:"today",title:"Today · act now",tier:"risk"},{key:"week",title:"This week · stage outreach",tier:"watch"},{key:"lower",title:"Lower priority · monitor",tier:"healthy"}];function Ip(e,t){const n={};for(const r of t)e[r]!==void 0&&(n[r]=e[r]);return n}function Ep(e){if(!e)return[];const t=mp().filter(a=>a.householdId===e).map(a=>({kind:"lead",...Ip(a,["id","name","stage","policyType","consent"])})),n=(e||"").replace(/^H-/,"").toLowerCase(),r=n?new RegExp(`\\b${n}\\b`,"i"):null,s=(ld||[]).filter(a=>{if(a.householdId===e)return!0;if(!r)return!1;const l=a.householdName||a.primaryName||"";return r.test(l)}).map(a=>({kind:"book",id:a.id,name:a.householdName||a.primaryName,lines:a.linesOfBusiness,annualPremium:a.annualPremium,tenureYears:a.tenureYears})),i=(dd||[]).filter(a=>a.householdId===e).map(a=>({kind:"trigger",id:a.id,name:a.customerName,kindLabel:a.kind,opportunity:a.opportunity}));return[...s,...t,...i]}function hd(e){const t=Ep(e),n=new Set;let r=0;for(const s of t)s.lines&&s.lines.forEach(i=>n.add(i)),s.policyType&&n.add(s.policyType),s.annualPremium&&(r+=s.annualPremium);return{memberCount:new Set(t.map(s=>s.name)).size,linesOfBusiness:[...n],annualPremium:r,members:t}}function Rp({consent:e}){if(!e)return null;const t=e.sms,n=e.email;return o.jsxs("span",{className:"consent-chips",title:e.basis||"",children:[o.jsxs("span",{className:`consent-chip ${n?"ok":"no"}`,children:[o.jsx("span",{className:"consent-dot"})," Email ",n?"OK":"NO"]}),o.jsxs("span",{className:`consent-chip ${t?"ok":"no"}`,children:[o.jsx("span",{className:"consent-dot"})," SMS ",t?"OK":"NO"]})]})}function Pp({stage:e}){return!e||!dr[e]?null:o.jsx("span",{className:`stage-chip stage-${e}`,children:dr[e].label})}function Tp({source:e}){return!e||!ko[e]?null:o.jsx("span",{className:`source-badge source-${e}`,title:ko[e].label,children:ko[e].short})}function Mp({householdId:e,currentLeadId:t}){if(!e)return null;const n=hd(e),r=n.members.filter(i=>i.id!==t).length;if(r===0&&n.linesOfBusiness.length<=1)return null;const s=`${n.linesOfBusiness.join(", ")||"no policies"} · $${n.annualPremium||0}/yr · ${n.members.length} record${n.members.length===1?"":"s"}`;return o.jsxs("span",{className:"household-chip",title:s,children:["⌂ household ",r>0?`+${r}`:""]})}function ql({id:e,options:t,value:n,onChange:r}){return o.jsx("div",{className:"segment",id:e,children:t.map(s=>o.jsx("button",{className:`seg-opt-${s.val}${n===s.val?" active":""}`,"aria-pressed":n===s.val,onClick:()=>r(s.val),children:s.label},s.val))})}function Op({parts:e}){return o.jsx(o.Fragment,{children:e.map((t,n)=>t.strong?o.jsx("strong",{children:t.text},n):o.jsx("span",{children:t.text},n))})}function Lp({lob:e}){return o.jsx("span",{className:`retention-lob retention-lob-${e}`,children:jp[e]||e})}function Dp({text:e}){return o.jsx("span",{className:"retention-signal",children:e})}function Fl({active:e,onClick:t,children:n}){return o.jsx("button",{type:"button",className:`tg-chip${e?" active":""}`,"aria-pressed":e,onClick:t,children:n})}function $p({lob:e}){return o.jsx("span",{className:`retention-lob retention-lob-${e}`,children:bp[e]||e})}function Hp({confidence:e}){return o.jsx("span",{className:`tg-confidence tg-confidence-${e}`,title:"Signal confidence",children:e})}function qp({status:e}){const t=e==="in_progress"?"In progress":e==="dismissed"?"Dismissed":"New";return o.jsx("span",{className:`tg-status tg-status-${e}`,children:t})}function Fp({kind:e}){return o.jsx("span",{className:`tg-kind tg-kind-${e}`,children:Sp[e]||e})}function zp({source:e}){return o.jsx("span",{className:"tg-source",title:"Detection source",children:e})}function md({kind:e}){return o.jsx("span",{className:`ref-kind ref-kind-${e}`,children:xp[e]||e})}function Bp({kind:e}){return e?o.jsx("span",{className:`ref-quote ref-quote-${e}`,children:kp[e]||e}):null}function Wp({status:e}){return o.jsx("span",{className:`ref-status ref-status-${e}`,children:ud[e]||e})}function Up({stage:e}){return!e||!$l[e]?null:o.jsx("span",{className:`stage-chip claims-stage-${e}`,children:$l[e]})}function Vp({lob:e,kind:t}){return o.jsxs("span",{className:`claims-lob claims-lob-${e}`,children:[fp[e]||e,t&&o.jsxs("span",{className:"claims-lob-kind",children:[" · ",yp[t]||t]})]})}function Yp({risk:e}){return o.jsxs("span",{className:`claims-nps claims-nps-${e}`,title:"NPS / loyalty risk if mishandled",children:["NPS ",e]})}function Qp({sentiment:e}){return o.jsx("span",{className:`claims-sentiment claims-sentiment-${e}`,title:"Most recent claimant sentiment",children:gp[e]||e})}function Gp({daysOpen:e,stage:t}){if(t==="closed")return null;const n=t==="fnol"&&e>2||t==="investigation"&&e>14||t==="estimate"&&e>21||t==="settlement"&&e>30;return o.jsxs("span",{className:`claims-timeline-pill ${n?"slow":""}`,title:"Days in this stage (approx.)",children:[e,"d in stage"]})}function Kp(e){return e.stage==="closed"?!1:e.npsRisk==="high"||e.claimantSentiment==="frustrated"||e.lastTouchByAgentDays>7}function Xp(e){if(e.stage!=="closed")return!1;const t=e.openedAt+e.daysOpen*24*60*60*1e3;return(Date.now()-t)/(24*60*60*1e3)<=14}function Jp(e){if(e.stage!=="closed")return!1;const t=e.openedAt+e.daysOpen*24*60*60*1e3,n=new Date(t),r=new Date;return n.getFullYear()===r.getFullYear()&&n.getMonth()===r.getMonth()}function Zp({c:e,tier:t}){var n;const[r,s]=I.useState(!1),i=e.lastTouchByAgentDays>=14,a=i?`no contact ${Ol(e.lastTouchByAgentDays)}`:`last touch ${Ol(e.lastTouchByAgentDays)}`,l=e.stage==="closed",u=t==="attention";return o.jsxs("div",{className:`claims-row claims-row-${t}`,children:[o.jsxs("div",{className:"claims-row-main",children:[o.jsxs("div",{className:"claims-row-headline",children:[o.jsx("span",{className:"claims-name",children:e.customerName}),o.jsx("span",{className:"claims-claimno mono",children:e.claimNumber}),o.jsx("span",{className:"claims-zip mono",children:e.zip})]}),o.jsxs("div",{className:"claims-meta",children:[o.jsx(Vp,{lob:e.lineOfBusiness,kind:e.kind}),o.jsx(Up,{stage:e.stage}),o.jsx(Gp,{daysOpen:e.daysOpen,stage:e.stage})]}),o.jsxs("div",{className:"claims-subline",children:[o.jsxs("span",{className:"claims-sub-item",children:[o.jsx("span",{className:"claims-sub-label",children:"Adjuster"}),o.jsx("span",{className:"claims-sub-val",children:e.adjusterName})]}),o.jsxs("span",{className:`claims-sub-item ${i?"urgent":""}`,children:[o.jsx("span",{className:"claims-sub-label",children:"Agent"}),o.jsx("span",{className:"claims-sub-val",children:a})]}),e.estimateAmount!=null&&o.jsxs("span",{className:"claims-sub-item",children:[o.jsx("span",{className:"claims-sub-label",children:"Estimate"}),o.jsx("span",{className:"claims-sub-val mono",children:Tl(e.estimateAmount)})]}),e.paidAmount!=null&&o.jsxs("span",{className:"claims-sub-item",children:[o.jsx("span",{className:"claims-sub-label",children:"Paid"}),o.jsx("span",{className:"claims-sub-val mono",children:Tl(e.paidAmount)})]})]}),o.jsxs("div",{className:"claims-chips",children:[o.jsx(Yp,{risk:e.npsRisk}),o.jsx(Qp,{sentiment:e.claimantSentiment}),o.jsxs("span",{className:"claims-opened mono",title:"Claim opened",children:["opened ",Ml(e.daysOpen)]})]}),o.jsx(Ws,{script:Us(cp[l?"closed":u?"attention":"open"],{name:mr(e.customerName)}),label:l?"Open with · thank-you / NPS":"Open with · reach out"})]}),o.jsxs("div",{className:"claims-row-actions",children:[l?o.jsxs(o.Fragment,{children:[o.jsx("button",{className:"btn primary",title:"Demo prototype — no action wired up",children:"Send NPS"}),o.jsx("button",{className:"btn",title:"Demo prototype — no action wired up",children:"Thank-you note"})]}):u?o.jsxs(o.Fragment,{children:[o.jsx("button",{className:"btn primary",title:"Demo prototype — no action wired up",children:"Reach out"}),o.jsx("button",{className:"btn",title:"Demo prototype — no action wired up",children:"Escalate to adjuster"})]}):o.jsxs(o.Fragment,{children:[o.jsx("button",{className:"btn",title:"Demo prototype — no action wired up",children:"Reach out"}),o.jsx("button",{className:"btn",title:"Demo prototype — no action wired up",children:"Escalate"})]}),o.jsx("button",{className:"btn claims-timeline-toggle",onClick:()=>s(c=>!c),"aria-expanded":r,children:r?"Hide timeline":"View timeline"})]}),r&&((n=e.notes)==null?void 0:n.length)>0&&o.jsx("div",{className:"claims-timeline",children:e.notes.map((c,p)=>{const v=Math.max(0,Math.round((Date.now()-c.at)/864e5));return o.jsxs("div",{className:"claims-timeline-entry",children:[o.jsx("div",{className:"claims-timeline-stamp mono",children:Ml(v)}),o.jsxs("div",{className:"claims-timeline-body",children:[o.jsx("span",{className:"claims-timeline-by",children:c.by}),o.jsx("span",{className:"claims-timeline-text",children:c.text})]})]},p)})})]})}function So({title:e,sub:t,count:n,rows:r,tier:s,collapsible:i,defaultCollapsed:a}){const[l,u]=I.useState(!!a),c=()=>i&&u(p=>!p);return o.jsxs("div",{className:`card claims-section claims-section-${s}`,children:[o.jsxs("div",{className:`card-head claims-section-head claims-section-head-${s}${i?" clickable":""}`,onClick:c,role:i?"button":void 0,"aria-expanded":i?!l:void 0,children:[o.jsxs("span",{className:"title",children:[e,i&&o.jsx("span",{className:"claims-collapse-caret","aria-hidden":!0,children:l?" ▸":" ▾"})]}),o.jsxs("span",{className:"count",children:[n," claim",n===1?"":"s",t?` · ${t}`:""]})]}),!l&&(r.length===0?o.jsx("div",{className:"claims-empty",children:o.jsx("div",{className:"claims-empty-text",children:"Nothing here right now."})}):r.map(p=>o.jsx(Zp,{c:p,tier:s},p.id)))]})}function ef(){const e=pp,t=I.useMemo(()=>{const n=e.filter(c=>c.stage!=="closed"),r=n.filter(Kp).sort((c,p)=>p.daysOpen-c.daysOpen),s=new Set(r.map(c=>c.id)),i=n.filter(c=>!s.has(c.id)).sort((c,p)=>p.daysOpen-c.daysOpen),a=e.filter(Xp).sort((c,p)=>c.lastTouchByAgentDays-p.lastTouchByAgentDays),l=e.filter(Jp),u=l.reduce((c,p)=>c+(p.paidAmount||0),0);return{open:n,attention:r,active:i,recentlyClosed:a,closedThisMonth:l,paidThisMonth:u}},[e]);return o.jsxs("section",{className:"view active",children:[o.jsxs("div",{className:"page-head",children:[o.jsxs("div",{children:[o.jsx("h1",{children:"Claims advocacy"}),o.jsxs("div",{className:"greeting",children:[t.open.length," open claim",t.open.length===1?"":"s"," ·"," ",t.attention.length," need agent attention ·"," ",t.closedThisMonth.length," closed this month"]})]}),o.jsx("div",{className:"stamp",children:"Carrier corporate processes · local agent advocates"})]}),o.jsxs("div",{className:"claims-kpis",children:[o.jsx(qr,{label:"Open claims",value:t.open.length,sub:"across all lines of business",tone:"neutral"}),o.jsx(qr,{label:"Needs attention",value:t.attention.length,sub:"stalled, frustrated, or no contact > 7d",tone:"risk"}),o.jsx(qr,{label:"Closed this month",value:t.closedThisMonth.length,sub:`${t.recentlyClosed.length} in NPS window`,tone:"good"}),o.jsx(qr,{label:"Paid this month",value:op(t.paidThisMonth),sub:"across closed claims",tone:"neutral"})]}),o.jsxs("div",{className:"claims-sections",children:[o.jsx(So,{title:"Needs attention · advocate today",sub:"stalled, frustrated, or no agent contact > 7d",count:t.attention.length,rows:t.attention,tier:"attention"}),o.jsx(So,{title:"Active · in progress",sub:"standard monitoring cadence",count:t.active.length,rows:t.active,tier:"active"}),o.jsx(So,{title:"Recently closed · NPS window open",sub:"closed in last 14d — send thank-you / NPS ask",count:t.recentlyClosed.length,rows:t.recentlyClosed,tier:"closed",collapsible:!0})]})]})}const tf={raw:{story:{email:{subject:"Your quote, and who's taking care of it",body:`Hey Marcus,

It's just __REP__ from your local Sample Agency office here in town. I'm the one taking care of the quote you requested, and I read your note twice before I ran it.

It's attached, with a short note on what it covers and why. Most people skip that part and find out what they bought when something happens; I'd rather you know now, and I'd rather you know who picks up the phone.

Are you opposed to a quick, no-obligation call this week? You pick the time.`},sms:"Hey Marcus, it's just __REP__ from your local Sample Agency office here in town. I'm the one taking care of the quote you requested; it's in your email with a short note on what it covers and who to call. Are you opposed to a quick call this week? You pick the time. (555) 010-0142"},asker:{email:{subject:"$__PROPOSED__/mo, line by line",body:`Hey Marcus,

It's just __REP__ from your local Sample Agency office. You asked for specifics, so here they are: $__PROPOSED__/mo for the coverage you requested, with every discount you qualify for already applied, and the limits and options spelled out line by line in the attachment.

As much as rate is important, the more important question to ask yourself is: how will the insurance company pay me when something happens? I marked the two places where a lower price usually comes from a coverage cut, so you can see it before you decide.

How much are you paying now? If I can beat it, I'll tell you. If I can't, I'll tell you that too.`},sms:"Hey Marcus, it's just __REP__ from your local Sample Agency office. Your quote came in at $__PROPOSED__/mo for the coverage you requested; the limits and options are in your email, line by line. How much are you paying now? If I can beat it, I'll tell you. If I can't, I'll tell you that too."},doer:{email:{subject:"Your quote is done",body:`Hi Marcus,

It's just __REP__ from your local Sample Agency office. I did the work already: your quote is attached, $__PROPOSED__/mo, nothing to fill out.

If you say yes, we handle the paperwork on our end. If anything looks unclear, five minutes on the phone covers it.

AM or PM?`},sms:"Hey Marcus, it's just __REP__ from your local Sample Agency office. I did the work already: your quote is in your email, $__PROPOSED__/mo, nothing to fill out. If you say yes, we handle the paperwork. AM or PM?"},thinker:{email:{subject:"Your quote, no rush",body:`Hey Marcus,

It's just __REP__ from your local Sample Agency office. I'm the one taking care of the quote you requested; it's attached, with the limits spelled out so you can read it on your own time.

No need to decide anything today. The one date that matters is your renewal, because that's the day switching costs you nothing; I'll check back a week before it.

Would it be a terrible idea to take a closer look before then? You decide.`},sms:"Hey Marcus, it's just __REP__ from your local Sample Agency office. Your quote is in your email, with the limits spelled out so you can read it on your own time. No rush; I'll check back a week before your renewal. Would it be a terrible idea to take a closer look before then? You decide."}},current:{story:{email:{subject:"Something strange on your account",body:`Hey Marcus,

I was reviewing your account with us and noticed something kind of… strange. Your home insurance is elsewhere, and I don't see a life policy.

My main focus is always on protecting you and, just as importantly, your income. Most companies overlook that because it isn't required by the government, like car liability, or by the bank, like homeowners insurance; those policies protect their interests, not necessarily yours.

Are you opposed to a quick, no-obligation call this week to look at it together?`},sms:"Hey Marcus, it's __REP__. I was reviewing your account with us and noticed something kind of… strange… your home insurance is elsewhere, and I don't see a life policy. Are you opposed to a quick, no-obligation call this week to look at it together?"},asker:{email:{subject:"Your account, side by side",body:`Hey Marcus,

I was reviewing your account with us and noticed something kind of… strange: your home insurance is elsewhere.

Bundling home + auto brings the total down by 30%, and the discount applies to both policies, so the auto you already have with us gets cheaper too. I put together a side-by-side: your current limits, the bundled option, and what each one changes. To run the exact number I need two things from your current home policy: the dwelling coverage and the deductible.

How much are you paying on the home now? If I can beat it, I'll tell you.`},sms:"Hey Marcus, it's __REP__. Reviewing your account, I noticed your home insurance is elsewhere. Bundling home + auto brings it down by 30%, and the discount applies to both policies. How much are you paying on the home now? If I can beat it, I'll tell you."},doer:{email:{subject:"One thing I can fix for you",body:`Hi Marcus,

I was reviewing your account with us and noticed your home insurance is elsewhere.

I can quote it from what I already have on file. No forms, nothing to fill out; I'll have it ready before we talk, and if it's a yes we handle the switch on our end.

Want the number? Reply YES and I'll send it today.`},sms:"Hey Marcus, it's __REP__. Reviewing your account, I noticed your home insurance is elsewhere. I can quote it from what I already have on file; no forms. Want the number? Reply YES and I'll send it today."},thinker:{email:{subject:"Your account: something to look at when you have a minute",body:`Hey Marcus,

I was reviewing your account with us and noticed your home insurance is elsewhere.

No action needed today. I put the bundled option next to what you have now, line by line, so you can check it against your current policy on your own time; the discount applies to both policies, and your home renewal is the one day switching costs you nothing.

Would it be a terrible idea to take a closer look before then? I'll answer anything you flag, and you decide.`},sms:"Hey Marcus, it's __REP__. Reviewing your account, I noticed your home insurance is elsewhere. No action needed today; I emailed the bundled option next to what you have now, line by line, for your own time. Would it be a terrible idea to take a closer look before your home renewal? You decide."}},winback:{story:{email:{subject:"Exactly one year since you left",body:`Hey Marcus,

It has been exactly one year since you left. We were sad to see you go, and as promised, we will do everything we can to earn your trust and business back.

I prepared a quote for your cars with the same coverage you had, and it's attached. Thank you for giving us a chance to win your trust and business back.

Out of curiosity, why did you switch?`},sms:"Hey Marcus, it's __REP__. It has been exactly one year since you left, and we were sad to see you go. As promised, I prepared a quote for your cars; it's in your email. Out of curiosity, why did you switch?"},asker:{email:{subject:"Your accident-free discount, back: $__PROPOSED__/mo",body:`Hey Marcus,

It has been exactly one year since you left.

Our rates have changed, and I can give you back your accident-free discount on all of your cars: $__PROPOSED__/mo for the same limits you had. The side-by-side is attached, line by line, so you can compare it against what you have now.

Are you still paying $__CURRENT__/mo? If the reason you switched was price, I think I can fix that.`},sms:"Hey Marcus, it's __REP__. It has been exactly one year since you left. Our rates have changed, and I can give you back your accident-free discount on all cars: $__PROPOSED__/mo for the same limits, side by side in your email. Are you still paying $__CURRENT__/mo?"},doer:{email:{subject:"A year later, the quote is done",body:`Hi Marcus,

It's been a year since you left, and I hope you'll give me a chance to win you back.

I prepared the quote already, with the coverage you had and your accident-free discount back; it's attached. Nothing to fill out, and if you say yes we handle the switch on our end.

Is AM or PM better for a quick call?`},sms:"Hey Marcus, it's __REP__. It's been a year since you left, and I hope you'll give me a chance to win you back. I prepared the quote already, with your accident-free discount back; nothing to fill out. Is AM or PM better for a quick call?"},thinker:{email:{subject:"One year on: your quote, whenever you're ready",body:`Hey Marcus,

It has been exactly one year since you left.

I prepared a quote for your cars with the same limits you had, plus the discount you'd get back. It's attached line by line, so you can compare it against what you have now without talking to anyone, and there's no need to decide before your renewal.

Would it be a terrible idea to compare them? You decide, and I'll check back before that date.`},sms:"Hey Marcus, it's __REP__. It has been exactly one year since you left. I prepared a quote for your cars with the same limits you had, plus the discount you'd get back; it's in your email, line by line, no rush. Would it be a terrible idea to compare it against what you have now? You decide."}},xdate:{story:{email:{subject:"Six months, and a new proposal",body:`Hey Marcus,

It's been 6 months since we last quoted you. You better be staying out of trouble! 😉

Your renewal is coming up, so I prepared a custom proposal for you; it's attached. I'd rather you see it before the renewal than after, because that's the one date switching costs you nothing.

Should I walk you through it, or would you rather read it first?`},sms:"Hey Marcus, it's __REP__. It's been 6 months since we last quoted you. You better be staying out of trouble! 😉 Your renewal is coming up, so I prepared a custom proposal; it's in your email. Should I walk you through it, or read it first?"},asker:{email:{subject:"Our rates have changed: $__PROPOSED__/mo",body:`Hey Marcus,

It's been 6 months since we last quoted you.

I know we weren't able to help you then, but our rates have changed: $__PROPOSED__/mo for the same coverage, with every discount you qualify for applied. The proposal is attached next to what we quoted last time, with the options and what each one covers, so you can compare it against your renewal offer line by line.

Are you still paying $__CURRENT__/mo?`},sms:"Hey Marcus, it's __REP__. It's been 6 months since we last quoted you. I know we weren't able to help you then, but our rates have changed: $__PROPOSED__/mo for the same coverage, line by line in your email. Are you still paying $__CURRENT__/mo?"},doer:{email:{subject:"Nothing to do but yes or no",body:`Hi Marcus,

It's been 6 months since we last quoted you. Staying out of trouble? 😉

Your renewal is coming up, and I prepared a new proposal; it's attached. There's nothing for you to do but say yes or no; if it's yes, we handle the switch on our end.

If no longer interested, simply reply NO. If yes, AM or PM?`},sms:"Hey Marcus, it's __REP__. It's been 6 months since we last quoted you. Staying out of trouble? 😉 Your renewal is coming up, and I prepared a new proposal; it's in your email. If no longer interested, simply reply NO. If yes, AM or PM?"},thinker:{email:{subject:"Before you renew: the options, no rush",body:`Hey Marcus,

It's been 6 months since we last quoted you.

Our rates have changed, so I prepared a detailed proposal with the options and what each one covers. It's attached ahead of your renewal, so you can compare it against your renewal offer on your own time; the renewal date is the one day switching costs you nothing, which is why I'm sending it now rather than later.

Would it be a terrible idea to take a closer look before you renew? You decide.`},sms:"Hey Marcus, it's __REP__. It's been 6 months since we last quoted you. Our rates have changed, so I emailed you a detailed proposal with the options and what each one covers, ahead of your renewal. Would it be a terrible idea to take a closer look before you renew? You decide."}},following:{story:{email:{subject:"Should I keep following up?",body:`Hey Marcus,

This is just __REP__ from your local Sample Agency office here in town. I haven't heard back from you in a while regarding the quote you requested.

I'd hate to feel like I'm bothering you.

If you decided to stay with your previous company or went another direction, that's okay. Just let me know, and I'll remove you from my follow-up list.`},sms:"Hey Marcus, this is just __REP__ from your local Sample Agency office. I haven't heard back from you in a while regarding the quote you requested, and I'd hate to feel like I'm bothering you. If you went another direction, that's okay; just let me know and I'll remove you from my follow-up list."},asker:{email:{subject:"Your $__PROPOSED__/mo quote, still open",body:`Hey Marcus,

Did you see my email with the quote at $__PROPOSED__/mo and the limits line by line?

It's still good for now. Rates move, so I can't promise it past your renewal. If you found a better number, I'd want to see it next to ours; if it's close, I can usually find the difference.

Are you still shopping, or did you go another direction? Either answer is fine; just reply with one line.`},sms:"Hey Marcus, it's __REP__. Did you see my email with the quote at $__PROPOSED__/mo, line by line? It's still good for now. If you found a better number, I'd want to see it next to ours. Still shopping, or went another direction? One line is fine."},doer:{email:{subject:"Am I bugging you?",body:`Hi Marcus,

It's __REP__. Did you see my email with the quote?

I'm starting to feel like I'm bugging you.

Should I keep following up? YES or NO is all I need.`},sms:"Hey Marcus, it's __REP__. Did you see my email with the quote? I'm starting to feel like I'm bugging you. Should I keep following up? YES or NO is all I need."},thinker:{email:{subject:"No rush on the quote",body:`Hey Marcus,

I know this is a big decision, and I sent you a lot to read.

Take your time. There's no need to rush, and I'm not going to chase you; the proposal stays where it is until you decide, and I'll check back a week before your renewal.

What would need to be true for this to make sense for you?`},sms:"Hey Marcus, it's __REP__. I know this is a big decision, and I sent you a lot to read. Take your time; there's no need to rush, and I'll check back before your renewal. What would need to be true for this to make sense for you?"}}},nf={raw:{label:"Raw new",why:"They asked, and now someone fast and real is answering. Move: speed, then one tiny step."},current:{label:"Current customer",why:"A review, not a sale; they already know us. Move: make adding coverage the normal thing a cared-for customer does."},winback:{label:"Win-back",why:"They already decided once; coming back must not feel like admitting a mistake. Move: a new fact, so returning is a fresh decision."},xdate:{label:"X-date · not now",why:"Switching is a chore they keep putting off. Move: do the work for them and put the renewal date in the message."},following:{label:"Following up",why:"They feel guilty for not replying, so they avoid it. Move: remove the social cost of replying."}},rf={story:{label:"Storyteller",why:"You can tell from the first message: it's long and personal, with the family, the backstory, and a question about you. They decide by whether you listened. Match it by answering something they said, and offer a real person to call.",q:"Elicitation",qWhy:"Indirect. Surfaces what they worry about without pressure.",g:"Are you opposed to a quick, no-obligation call this week?",gWhy:"A no-question. Saying no feels safe, and “no, I'm not opposed” is a yes."},asker:{label:"Questioner",why:"You can tell from the first message: it asks for specifics, limits, deductibles, the number next to the number. They decide on the comparison. Match it with figures, line by line, and answer every question they asked before adding anything.",q:"Directional",qWhy:"Moves them to one specific next step.",g:"How much are you paying now? If I can beat it, I'll tell you. If I can't, I'll tell you that too.",gWhy:"One number they can answer in a line, plus candor. It puts their price next to ours."},doer:{label:"Doer",why:"You can tell from the first message: one line, no greeting, “just send me the quote.” They decide on speed and effort. Match it with a short message, the work already done, and one easy choice.",q:"Diagnostic",qWhy:"Soft check on what would help, with no demand attached.",g:"AM or PM? · Simply reply NO.",gWhy:"Two easy choices instead of an open question, and the easiest possible out."},thinker:{label:"Thinker",why:"You can tell from the first reply: slow, careful, or hedged. “Let me think,” “I need to talk to my wife.” They decide on their own schedule. Match it with no pressure, something to think with, and a next touch tied to a date.",q:"Reframe",qWhy:"Turns “let me think” into the one thing they'd need to know to decide.",g:"Would it be a terrible idea to take a closer look? You decide.",gWhy:"A no-question plus explicit control. Nothing is pushed."}},sf={raw:{label:"“It's just [rep] from your local office”",why:"Honors the request they made. No greeting paragraph, no pitch."},current:{label:"“Noticed something kind of… strange”",why:"Something unexpected, plus proof you looked at their file personally."},winback:{label:"“Exactly one year since you left”",why:"A precise anniversary acknowledges the departure without blame."},xdate:{label:"“Six months… staying out of trouble 😉”",why:"Light humor honors the gap; the work is already done."},following:{label:"“I'd hate to feel like I'm bothering you”",why:"Names the awkwardness. The one place an apology is the point."}},of={raw:{label:"What we did, what happens next",why:"“I'm the one taking care of the quote you requested.” Said plainly, with no hedge."},current:{label:"The review is the reason",why:"Protecting them and their income; the policies the bank and the state require protect someone else."},winback:{label:"A new fact",why:"Rates changed, or the discount is back. Returning becomes a fresh decision."},xdate:{label:"The renewal date is the reason",why:"The one day switching costs nothing, and the proposal is already done."},following:{label:"Name the silence",why:"Say it costs nothing to answer. Then make the answer one word."}},af=[{val:"raw",label:"Raw new"},{val:"current",label:"Current customer"},{val:"winback",label:"Win-back"},{val:"xdate",label:"X-date · not now"},{val:"following",label:"Following up"}],lf=[{val:"story",label:"Storyteller"},{val:"asker",label:"Questioner"},{val:"doer",label:"Doer"},{val:"thinker",label:"Thinker"}],uf=[{val:"email",label:"Email"},{val:"sms",label:"SMS"}],cf=`

Reply STOP to opt out, HELP for help. Msg & data rates may apply.`;function zl(e,t){return e.replace(/__REP__/g,t.repName).replace(/__REP_FULL__/g,t.repFull).replace(/__PROPOSED__/g,t.proposed!=null?String(t.proposed):"[quote pending]").replace(/__CURRENT__/g,t.current!=null?String(t.current):"[unknown]")}function Bl(e,t){const n=t.split(" ")[0];return e.replace(/\bMarcus\b/g,n)}function df(e){return["","—",`${e.full} · ${e.title}`,`${$n.name} · ${$n.city} · ${$n.phone}`,`${e.license} · ${$n.waLicense}`,"Discounts and their availability vary by state and individual eligibility."].join(`
`)}function hf(e){return(e==null?void 0:e.proposedPremium)==null?null:e.policyType==="home"||e.policyType==="life"?{value:e.proposedPremium*12,unit:"/yr"}:{value:e.proposedPremium,unit:"/mo"}}function mf(e,t){return e.replace(/__REP__/g,t)}function pf({persona:e}){var t,n,r,s,i;const[a,l]=I.useState("L-001"),[u,c]=I.useState("raw"),[p,v]=I.useState("story"),[f,g]=I.useState("email"),[w,x]=I.useState(!1),[C,h]=I.useState(0),[d,m]=I.useState({}),[xHv,xSetHv]=I.useState(0),y=hp[a]||Dl[0],N=$n.producers[e],S=e,_=N.full;I.useEffect(()=>{var K;(K=y==null?void 0:y.pill)!=null&&K.cls&&v(y.pill.cls),y!=null&&y.stage&&Ll[y.stage]&&c(Ll[y.stage])},[a]),I.useEffect(()=>{x(!0);const K=setTimeout(()=>x(!1),120);return()=>clearTimeout(K)},[u,p,f,e,a,C]);const A=(n=(t=tf[u])==null?void 0:t[p])==null?void 0:n[f],L=f==="email",T=L&&A?A.subject:"",oe=A?L?A.body:A:"",We={repName:S,repFull:_,proposed:y==null?void 0:y.proposedPremium,current:y==null?void 0:y.currentPremium},Ue=Bl(zl(oe,We),y.name),Yt=Bl(zl(T,We),y.name),M=L?Ue+df(N):Ue+cf,J=I.useMemo(()=>L?null:Zm(M),[L,M]),je=`${a}:${f}`,j=!!d[je],E=(L?!!((r=y==null?void 0:y.consent)!=null&&r.email):!!((s=y==null?void 0:y.consent)!=null&&s.sms))||j,P=/__PROPOSED__/.test(oe+T),U=/__CURRENT__/.test(oe+T),G=(!P||(y==null?void 0:y.proposedPremium)!=null)&&(!U||(y==null?void 0:y.currentPremium)!=null),Je=E?G?null:"This template references a premium that is not on file yet.":`No ${L?"email":"SMS"} consent on file for ${y.name}. Capture consent before sending.`,Ze=()=>m(K=>({...K,[je]:!0})),Qt=nf[u],ge=rf[p],Rt=sf[u],xa=of[u],fd=()=>h(K=>K+1),Vs="Demo prototype — no send path is wired up.";return o.jsxs("section",{className:"view active",children:[o.jsxs("div",{className:"page-head x-compose-head",children:[o.jsxs("div",{children:[o.jsx("h1",{children:"Compose"}),o.jsx("div",{className:"greeting",children:"Pick the lead, the scenario, the style and the channel; the draft and its three moves follow. Compliance-checked."})]}),o.jsx("div",{className:"stamp",children:"Match · Fit · Ask, in that order"})]}),o.jsxs("div",{className:"compose-layout",children:[o.jsxs("div",{className:"panel",children:[o.jsxs("div",{className:"panel-head",children:[o.jsx("div",{className:"title",children:"Build the message"}),o.jsx("div",{className:"sub",children:"Pick lead, scenario, style, channel"})]}),o.jsxs("div",{className:"panel-body",children:[o.jsxs("div",{className:"control-group",children:[o.jsx("div",{className:"control-label",children:"Lead"}),o.jsx("select",{className:"lead-select",value:a,onChange:K=>l(K.target.value),"aria-label":"Select lead",children:Dl.map(K=>{var ka;const Ys=hf(K);return o.jsxs("option",{value:K.id,children:[K.name," · ",((ka=dr[K.stage])==null?void 0:ka.label)||"Lead",Ys?` · $${Ys.value}${Ys.unit}`:""]},K.id)})}),o.jsxs("div",{className:"lead-summary",children:[o.jsx("span",{className:`stage-chip stage-${y.stage}`,children:(i=dr[y.stage])==null?void 0:i.label}),o.jsxs("span",{className:`consent-chip ${E?"ok":"no"}`,children:[o.jsx("span",{className:"consent-dot"})," ",L?"Email":"SMS"," ",E?"OK":"NO"]}),j&&o.jsxs("span",{className:"consent-chip ok",title:"Express consent captured this session",children:[o.jsx("span",{className:"consent-dot"})," captured"]}),y.quoteNumber&&o.jsx("span",{className:"qref mono",children:y.quoteNumber})]})]}),o.jsxs("div",{className:"control-group",children:[o.jsx("div",{className:"control-label",children:"Scenario"}),o.jsx(ql,{id:"scenario-seg",options:af,value:u,onChange:c})]}),o.jsxs("div",{className:"control-group",children:[o.jsx("div",{className:"control-label",children:"Communication style"}),o.jsx(ql,{id:"style-seg",options:lf,value:p,onChange:v})]}),o.jsxs("div",{className:"control-group",children:[o.jsx("div",{className:"control-label",children:"Channel"}),o.jsx("div",{className:"channel-toggle",id:"channel-seg",children:uf.map(K=>o.jsx("button",{className:f===K.val?"active":"","aria-pressed":f===K.val,onClick:()=>g(K.val),children:K.label},K.val))})]})]})]}),o.jsxs("div",{className:"panel",children:[o.jsxs("div",{className:"panel-head x-draft-head",children:[o.jsxs("div",{children:[o.jsx("div",{className:"title",children:"Draft"}),o.jsxs("div",{className:"sub",children:["To ",y.name," · From ",o.jsx("span",{children:e})]})]}),o.jsx(XBestNow,{scenario:u,style:p,lead:y,channel:f,setChannel:g})]}),o.jsxs("div",{className:"draft-area",children:[o.jsxs("div",{className:"draft-meta",children:[o.jsxs("div",{className:"field",children:[o.jsx("span",{className:"label",children:"To"}),o.jsx("span",{className:"value",children:y.name})]}),o.jsxs("div",{className:"field",children:[o.jsx("span",{className:"label",children:"From"}),o.jsx("span",{className:"value",children:_})]}),o.jsxs("div",{className:"field",children:[o.jsx("span",{className:"label",children:"Channel"}),o.jsx("span",{className:"value",children:L?"Email":"SMS"})]}),J&&o.jsxs("div",{className:"field sms-stats","aria-live":"polite",children:[o.jsx("span",{className:"label",children:"SMS"}),o.jsxs("span",{className:"value",children:[J.len," chars · ",J.segments," segment",J.segments===1?"":"s"," · ",J.encoding]})]})]}),Je&&o.jsxs("div",{className:"compliance-banner",role:"alert",children:[o.jsx("span",{className:"icon",children:"!"}),o.jsx("span",{children:Je}),!E&&o.jsx("button",{className:"btn ghost",onClick:Ze,title:"Mark express consent captured for this session (demo)",children:"Capture consent"})]}),L&&o.jsx("div",{className:"draft-subject",children:Yt}),o.jsx(XMarkedDraft,{body:Ue,tail:L?df(N):cf,email:L,scenario:u,style:p,refresh:w,hover:xHv,setHover:xSetHv}),o.jsxs("div",{className:"draft-actions",children:[o.jsx("button",{className:"btn primary",disabled:!!Je,title:Je||Vs,children:"Send"}),o.jsx("button",{className:"btn",disabled:!0,title:Vs,children:"Edit"}),o.jsx("button",{className:"btn",disabled:!0,title:Vs,children:"Save for later"}),o.jsx("button",{className:"btn",onClick:fd,children:"Regenerate"})]})]})]}),o.jsx(XWhyPanel,{scenario:u,style:p,email:L,consentOk:E,premiumOk:G,quoteNumber:y.quoteNumber,hover:xHv,setHover:xSetHv,lead:y})]})]})}const bo={client:"Sample Agency (demonstration)",version:"2.0 · April 30, 2026 · Insurance domain expansion",intro:"Alex, please answer in your own words. Skip what you do not know — we will follow up. Where you see checkboxes, mark all that apply. The goal is to capture the truth of how the agency runs today, not how it should run."},Wl=[{id:"A",title:"Users and daily flow",blurb:"Who logs in, when, and what they need to see first. Shapes the Today dashboard and role-based permissions.",questions:[{id:"A1",type:"notes",title:"Who on your team will log into the Command Center?",helper:"List each person, role, and roughly what % of their day is on this system. Producers, support staff, the office manager, yourself."},{id:"A2",type:"notes",title:"When a producer sits down at 8am, what are the first three things they need to see?",helper:"Hot leads, X-dates, drafts, callbacks, something else?"},{id:"A3",type:"notes",title:"What does the team currently miss because info is spread across too many systems?",helper:"Dropped follow-ups, missed X-dates, cross-sell triggers, expiring quotes — what falls through?"},{id:"A4",type:"multi",title:"Which channels does the agency actively use today?",helper:"Mark all and note rough volume per week.",options:["Email","SMS / text","Outbound voice calls","Inbound voice calls","WhatsApp","Facebook Messenger","Instagram DM","Walk-ins","Voicemail"],withOther:!0},{id:"A5",type:"notes",title:"Should the system draft in non-English when a client communicates in their language?",helper:"Six languages in the agency. Russian, Armenian, Spanish, Italian, Ukrainian — rank by volume if yes."}]},{id:"B",title:"Contact and lead data",blurb:"What lives on a contact record, where leads come from, and how data flows in.",questions:[{id:"B1",type:"notes",title:"What attributes need to live on a single contact record?",helper:"Beyond name/phone/email: household members, vehicles, properties, current carriers per line, X-dates, life events, language, opt-out status, referral source, lifetime value."},{id:"B2",type:"multi",title:"Where do new leads come from today?",options:["Website form (quotesfromaaron.com)","Carrier corporate lead bank","Walk-ins","Referrals (existing customers, partners)","Internet aggregators (EverQuote, NetQuote, SmartFinancial)","Google ads","Social media"],withOther:!0},{id:"B2a",type:"notes",title:"Roughly what % of new leads comes from each source?"},{id:"B3",type:"notes",title:"How fast does the team currently respond to a new lead on first touch? What would great look like?",helper:"Today's median, today's slowest case, your target SLA."},{id:"B4",type:"single",title:"Load existing book on day one, or start fresh?",options:["Load existing book on day one","Start fresh, let new interactions populate it","Hybrid — only active prospects + recent customers"]},{id:"B5",type:"notes",title:"Households as the primary unit (with people inside) or individuals (with relationships)?"}]},{id:"C",title:"The four frameworks (the method)",blurb:"Communication styles, lifecycle stages, question types, statement classes. The methodology the system operationalizes.",questions:[{id:"C1",type:"single",title:"Which of the four communication styles is hardest for the team to recognize from a first message without your help?",options:["Storyteller","Questioner","Doer","Thinker"]},{id:"C1a",type:"notes",title:"What signals does that style give in a first message that the team tends to miss?"},{id:"C2",type:"notes",title:"Can a contact be more than one style at once, or only one at a time?"},{id:"C3",type:"notes",title:"Should reps be able to override the style the system suggests, and should the override stick for that customer?"},{id:"C4",type:"multi",title:"Are these the only lifecycle stages, or are there more you use informally?",options:["RAW NEW","CURRENT CUSTOMER","WIN-BACK","X-DATE / NOT NOW","FOLLOWING-UP","Quoted but not bound","Lapsed (different from win-back)","Referral in progress"],withOther:!0},{id:"C5",type:"notes",title:"At what point does a CURRENT CUSTOMER become a WIN-BACK candidate?",helper:"How many days after they leave? Different cadence by line of business?"},{id:"C6",type:"multi",title:"Of the five question types, which two do you use most often, and which one is rarest?",helper:"Mark your two most-used. Use Notes below to call out the rarest.",options:["Directional","Assumptive","Elicitation","Reframe","Diagnostic"]},{id:"C7",type:"notes",title:"Walk us through a recent call where you used a Reframe question successfully.",helper:"Real example, real words. We need 3-5 examples per question type to build the recommendations."},{id:"C8",type:"notes",title:"Magic phrases — openers, closers, transitions, recovery lines — that aren't in the doc you sent?"}]},{id:"D",title:"Live Coach behavior",blurb:"Real-time guidance during calls. The centerpiece of the platform.",questions:[{id:"D1",type:"multi",title:"When does Live Coach activate?",options:["Every outbound call automatically","Every inbound call automatically","Only when the rep clicks a button","Contextually based on caller ID matching a known prospect","Only for unknown callers (potential new leads)"]},{id:"D2",type:"multi",title:"How should the coach surface guidance during a call?",options:["Visual sidebar on the producer's screen","Audio prompts in the producer's earpiece","Both visual and audio","Subtle notifications only at key moments (pushback, reclassifications)"]},{id:"D3",type:"single",title:"When the system recommends a Reframe and the rep does something different, log the deviation?",options:["Yes — log it for coaching review","Yes — and re-recommend on the next turn","No — back off, trust the rep"]},{id:"D4",type:"multi",title:"After a call ends, what should the system produce automatically?",options:["Call summary","Next-action recommendations","Draft follow-up email or SMS","Calendar invite if a meeting was discussed","CRM notes","Cross-sell flags (new LOBs to surface)"]},{id:"D5",type:"multi",title:"Who reviews post-call drafts before they send?",options:["The rep who took the call (auto-queued for them)","You (Alex) for any client-facing message","No one — auto-send if it matches a known safe pattern","Varies by message type"]},{id:"D6",type:"single",title:"Are calls currently recorded? Where does consent disclosure happen?",helper:"WA is a two-party consent state. We need to know the current posture.",options:["Calls are recorded with two-party consent (IVR or rep-stated)","Calls are recorded but consent process is informal","Calls are not recorded today","Not sure"]}]},{id:"E",title:"Compose and orchestration",blurb:"Drafting, sequences, task delegation. 60%+ of the operational time savings live here.",questions:[{id:"E1",type:"multi",title:"When Compose generates a draft, what should happen by default?",options:["Auto-send if it matches a safe pattern (template-driven, no price changes)","Queue for the rep to review and send","Queue for Alex to review for client-facing messages","Vary by message type — let me specify rules"]},{id:"E2",type:"notes",title:"Should every team member's outbound message sound like Alex, or like the team member with Alex's structure?",helper:"When Maya sends a draft, does it say 'It's Maya from Alex's office' or 'It's Maya'?"},{id:"E3",type:"multi",title:"What pre-built sequences do you want on day one?",options:["RAW NEW intake (first touch + follow-up cadence)","Post-quote follow-up (no response yet)","X-DATE 6-month touch","WIN-BACK welcome sequence","Renewal retention (60/30/day-of)","Cross-sell triggers (life events, missing LOBs)"],withOther:!0},{id:"E4",type:"notes",title:"For a typical post-quote follow-up with no response, what is your actual cadence today?",helper:"Day 1, day 3, day 7, day 14, day 30 — channel and tone at each step."},{id:"E5",type:"single",title:"When the system generates a task, who does it route to?",options:["The producer who owns the lead","Round-robin among available producers","Alex, for triage","Support staff (office manager or assigned)","Varies by task type"]}]},{id:"F",title:"Compliance and guardrails",blurb:"TCPA, consent, DNC, audit. The work that protects the agency and keeps corporate happy.",questions:[{id:"F1",type:"notes",title:"Where does explicit SMS consent get captured today, and where is the record kept?"},{id:"F2",type:"notes",title:"What's the current Do Not Contact process? Where does the list live?"},{id:"F3",type:"single",title:"What time-of-day window should the system honor for outbound automation?",options:["Strict 8am-9pm local time","9am-7pm local time","Custom hours (specify in notes)","24/7 with manual review flag"]},{id:"F4",type:"notes",title:"Off-limits words / phrases / claims per carrier corporate policy?",helper:"If there's a published guide, can we get a copy?"},{id:"F5",type:"single",title:"Who should have access to audit logs?",options:["Alex only","Alex and the office manager","All admins","Every rep can see their own activity"]}]},{id:"G",title:"Integrations and infrastructure",blurb:"What the Command Center needs to connect to. Every answer here de-risks the build.",questions:[{id:"G1",type:"multi",title:"What softphone or voice system does the team use today?",options:["RingCentral","Dialpad","Five9","JustCall","Vonage","Carrier corporate-issued"],withOther:!0},{id:"G1a",type:"notes",title:"Who owns the contract — agency or corporate?"},{id:"G2",type:"multi",title:"Which carrier corporate systems does the team interact with daily?",options:["Sales Tracker","Agency CRM","Carrier customer-record system","Carrier quoting system","Agency Office","CIM","AgencyRevolution"],withOther:!0},{id:"G3",type:"notes",title:"Have you ever asked corporate for API access? What was the response?",helper:"Single biggest risk factor. Truth even if 'never asked' or 'told no.'"},{id:"G4",type:"multi",title:"Officially sanctioned third-party tools the agency uses today?",options:["AgencyZoom","BluePrint","Glovebox","Better Agency","AgencyRevolution","None"],withOther:!0},{id:"G5",type:"notes",title:"Email and SMS infrastructure?",helper:"Email domain (quotesfromaaron.com or the carrier domain), SMS provider (corporate, Twilio, third-party), individual vs shared accounts."},{id:"G6",type:"multi",title:"Calendar system?",options:["Google Workspace","Microsoft 365 / Outlook","Carrier corporate-provided"],withOther:!0},{id:"G7",type:"multi",title:"Devices and work patterns?",options:["Office desktops (Windows / Mac)","Personal laptops","Tablets","Mobile phones — agency-issued","Mobile phones — personal","All work happens in the office","Some remote work"]},{id:"G8",type:"notes",title:"SOW says 'primarily local/on-premise.' What's the concern behind that?",helper:"Data sovereignty, cost, latency, corporate policy, something a corporate person told you?"}]},{id:"H",title:"Reporting and baselines",blurb:"Without baselines, we cannot prove the system worked.",questions:[{id:"H1",type:"text",title:"What's the one metric you check first thing every morning?"},{id:"H2",type:"table",title:"Today's baselines — even rough numbers — for these key metrics:",rows:["Lead-to-quote conversion rate","Quote-to-bind rate","Avg time-to-first-response on a website lead","Hours per rep per week on follow-up tasks","Cross-sell rate (avg LOBs per customer)","Annual customer retention rate","Google review velocity (reviews per month)"]},{id:"H3",type:"multi",title:"What does success look like 6 months after launch? Top 2-3 outcomes.",options:["Sales lift (% increase in new business)","Cross-sell lift (avg LOBs per customer)","Faster speed-to-first-response","Reduced manual hours per rep","Improved customer satisfaction (review velocity, retention)","Team consistency (every rep performs near top quartile)"],withOther:!0}]},{id:"I",title:"Build sequencing and Phase 1",blurb:"If we could only ship one thing first, what changes the agency the most?",questions:[{id:"I1",type:"single",title:"If we could only ship one of three surfaces in the first 8 weeks, which one changes the agency the most?",options:["Today dashboard (unified view for the team)","Compose (email and text drafts in your voice)","Live Coach (real-time call guidance)"]},{id:"I1a",type:"notes",title:"Why that one? What's the hour-saved or dollar-impact reason?"},{id:"I2",type:"multi",title:"Who is the right pilot user?",options:["Alex (you)","Maya Lindqvist","Multiple producers in parallel"],withOther:!0},{id:"I3",type:"text",title:"Who on your side is the day-to-day product owner during the build?"},{id:"I4",type:"notes",title:"What's your working assumption on cost and timeline?",helper:"One-time build, or longer-term partnership?"},{id:"I5",type:"notes",title:"Anything else — concerns, must-haves, deal-breakers — that we haven't asked about?"}]},{id:"J",title:"Carrier corporate compliance",blurb:"The compliance envelope inside which the Command Center operates.",questions:[{id:"J1",type:"single",title:"Do you have the current carrier Marketing and Communications Standards (Brand Book)?",options:["Yes — I can share it","Yes — but it's restricted, I can summarize key rules","No, but I know the rules informally","Never seen one"]},{id:"J2",type:"notes",title:"Has corporate published any specific guidance on automated or templated client communications?"},{id:"J3",type:"notes",title:"What are the rules on comparative pricing claims in outbound messages?",helper:"Example: 'beats most carriers in your ZIP.' Allowed? Need to back claims with data?"},{id:"J4",type:"multi",title:"Rules on how corporate lead bank leads must be worked?",options:["Specific contact cadence required (Day 0, Day 1, Day 3, etc.)","Cannot be marketed to outside the lead bank flow","Must be touched within X hours of receipt","Reportable back to corporate (acceptance, conversion)","Don't know the specifics"]},{id:"J5",type:"notes",title:"Anti-rebating rules in WA that affect referral and incentive programs?",helper:"WA RCW 48.30.140 prohibits direct rebates. Carriers typically run sweepstakes-based programs."},{id:"J6",type:"single",title:"Does corporate have an audit / compliance review process for agency communications?",options:["Yes — periodic review of email/SMS samples","Yes — only on complaint","No formal review","Don't know"]}]},{id:"K",title:"E&O and producer licensing",blurb:"The Command Center cannot create exposure for the agency.",questions:[{id:"K1",type:"multi",title:"E&O carrier and policy structure?",options:["Carrier-affiliated E&O coverage","Independent E&O carrier (specify in notes)","Both","Don't know specifics"]},{id:"K2",type:"notes",title:"Has the E&O carrier published any guidance on automated or template-assisted communications?",helper:"If we draft an email that misrepresents coverage and the customer relies on it, who is liable?"},{id:"K3",type:"notes",title:"WA producer license disclosure requirements in client communications?",helper:"RCW 48.17 requires producer license number on certain comms, especially Life and Health."},{id:"K4",type:"multi",title:"Which producers on your team are licensed for which lines?",options:["Property & Casualty (Auto, Home)","Life","Health and Disability","Variable products (securities)","Commercial lines"]},{id:"K4a",type:"notes",title:"List producers and their licensed lines:"},{id:"K5",type:"single",title:"Should the system block a draft if the producer is not licensed for that line?",options:["Yes — hard block","Yes — warn but allow override","No — trust the producer","Route to a licensed producer instead"]}]},{id:"L",title:"Needs analysis and coverage documentation",blurb:"Documenting client needs and coverage decisions is the moat.",questions:[{id:"L1",type:"single",title:"Does the agency use a formal needs analysis / Customer Needs Assessment workflow today?",options:["Yes — corporate Customer Needs Assessment (CNA) tool","Yes — agency-built spreadsheet or template","Yes — informal, in producer notes","No formal process"]},{id:"L2",type:"multi",title:"What does a needs analysis capture today?",options:["Household composition and dependents","Income and replacement value","Existing coverage (all lines, all carriers)","Assets at risk (vehicles, property, savings)","Coverage gaps and recommendations","Decline-of-coverage signatures","Life and health needs (income protection, final expenses)","Liability exposure and umbrella analysis"]},{id:"L3",type:"notes",title:"When a customer declines a coverage recommendation, is that documented?",helper:"Decline-of-coverage records protect the agency in E&O claims later."},{id:"L4",type:"single",title:"Should the Command Center auto-generate a needs analysis after a discovery call?",options:["Yes — auto-generate, route to producer for review","Yes — but only at major milestones (annual review, life event)","No — keep it manual"]},{id:"L5",type:"multi",title:"Where should completed needs analyses be stored?",options:["Inside the Command Center (contact record)","In the carrier's corporate CRM","Both"],withOther:!0}]},{id:"M",title:"Quote, bind, and policy workflows",blurb:"How quotes/binds/policy data flow between the carrier quoting system, the agency CRM, and the Command Center.",questions:[{id:"M1",type:"multi",title:"When a quote is generated in the carrier quoting system, what data should the Command Center pull back?",options:["Premium and term","Line items (coverage, limits, deductibles)","Discounts applied and discounts available but not applied","Quote expiration date","Underwriting flags or restrictions","Just a link out — keep data in the quoting system"]},{id:"M2",type:"notes",title:"How long does a typical carrier quote remain valid?",helper:"30 / 60 days, varies by line? When should we trigger re-quote outreach?"},{id:"M3",type:"single",title:"When a quote expires without binding, what should the system do?",options:["Auto-trigger re-quote outreach (X-DATE style)","Flag the producer to manually decide","Move to FOLLOWING-UP sequence","Archive after N days"]},{id:"M4",type:"notes",title:"For Life and complex products, what does the underwriting workflow look like today?",helper:"Application, medical questions, fluid orders, MIB checks, paramedical scheduling."},{id:"M5",type:"multi",title:"Loss runs and claims history from prior carriers — how does the team get them today?",options:["Customer self-supplies","Agency requests from prior carrier directly","Third-party tool (Canopy Connect, similar)","Skip if not required for the quote"]},{id:"M6",type:"notes",title:"Should the Command Center track loss-run requests and follow up on stale ones?"}]},{id:"N",title:"Renewal, retention, and mid-term service",blurb:"Retaining is worth more than acquiring. Often consumes more team time than new business.",questions:[{id:"N1",type:"notes",title:"Industry premium increases of 8-15% common at renewal. What's your current retention play?",helper:"A magic-phrases gap. We need your actual renewal save scripts."},{id:"N2",type:"notes",title:"When a customer calls to cancel, what's the save sequence?",helper:"First call response, escalation path, what offers can the team make."},{id:"N3",type:"multi",title:"What renewal touchpoints does the team currently run?",options:["60-day pre-renewal proactive call","30-day pre-renewal email","Day-of renewal confirmation","Post-renewal thank-you","Premium increase advance notification","Annual review meeting"]},{id:"N4",type:"notes",title:"Mid-term service interactions — adding teen driver, refinancing, etc. Volume per week?"},{id:"N5",type:"single",title:"Should the Command Center handle service interactions, or only sales?",options:["Service in scope — same system, same workflow","Service in scope — different workflow, lighter touch","Service out of scope — sales-only","Hybrid: capture service signals (life events) but don't process"]},{id:"N6",type:"notes",title:"Non-renewals from corporate — how are these handled today?",helper:"Driver violations, claims history. Heads-up to the team? Save play, or hard cancel?"}]},{id:"O",title:"Cross-sell mechanics and product mix",blurb:"Where the biggest unrealized revenue typically lives in a captive agency.",questions:[{id:"O1",type:"table",title:"Current cross-sell penetration — rough numbers.",rows:["Auto-only customers · Home cross-sell rate","Auto-only customers · Life cross-sell rate","Home-only customers · Auto cross-sell rate","Auto + Home customers · Umbrella attachment rate","Auto + Home customers · Life cross-sell rate","Banking products attached to insurance customers","Avg lines of business per customer (overall)"]},{id:"O2",type:"multi",title:"Which life events should automatically trigger cross-sell outreach?",options:["New baby (Life, Home liability review)","Marriage (Life, joint policy review, household consolidation)","New home purchase (Home, Umbrella, Life)","New vehicle (Auto endorsement, additional vehicle discount)","Job change or income change (Life, Disability)","Kid turning 16 (Auto)","Kid going to college (Auto, Renters)","Kid moving out (Renters, Life beneficiary update)","Divorce or major household change (full coverage review)","Retirement (Life, LTC, annuity)"]},{id:"O3",type:"multi",title:"How does the team learn about life events today?",options:["Customer mentions during a call","Producer asks at annual review","Social media monitoring","Corporate data signals (address changes, etc.)","Mostly we don't catch them"]},{id:"O4",type:"notes",title:"What's the bundling discount math at the carrier today?",helper:"Multi-line discount %, biggest-discount bundles, typical premium drop adding home to auto."}]},{id:"P",title:"Team, commission, and adoption",blurb:"Systems fail in adoption, not in build. Commission structures determine whether the system gets used or sabotaged.",questions:[{id:"P1",type:"multi",title:"How are producers compensated?",options:["Salary only","Salary plus commission","Commission only","Salary plus bonus on team metrics","Varies by producer"]},{id:"P2",type:"single",title:"When the system drafts a message that closes a sale, who gets credit?",options:["The producer who owns the lead","The producer who sent the message (even if the system drafted it)","Split between owner and drafter","House (no individual credit)"]},{id:"P3",type:"notes",title:"If the system routes a lead from one producer to another, how is credit handled?"},{id:"P4",type:"notes",title:"Who on your team is most likely to resist this system, and why?",helper:"Honest answer matters. Adoption design starts here."},{id:"P5",type:"notes",title:"What's the plan if a producer leaves the agency mid-build or post-launch?"},{id:"P6",type:"multi",title:"How does the team currently get trained on new systems?",options:["Alex trains personally","Office manager handles it","Vendor-led training","Self-serve documentation","No formal process"]},{id:"P7",type:"notes",title:"Tolerance for adoption risk in the first 90 days?",helper:"If the first pilot user struggles — push through, slow down, abort?"}]},{id:"Q",title:"Referrals, data ownership, and exit",blurb:"Referrals are an agency growth lever and a regulatory minefield.",questions:[{id:"Q1",type:"text",title:"What % of new business comes from referrals today?"},{id:"Q2",type:"single",title:"Does the agency run a formal referral program?",options:["Yes — sweepstakes-based (anti-rebating compliant)","Yes — informal thank-you gifts","Yes — discounts to referrer (check anti-rebating compliance)","No formal program"]},{id:"Q3",type:"single",title:"Should referrals be a first-class object in the system?",options:["Yes — track who referred whom, status, reward eligibility","Yes — but lightweight, just a tag on the lead","No — out of scope for now"]},{id:"Q4",type:"multi",title:"Data ownership at end of engagement?",options:["Full data export, agency keeps everything","Export under specific format requirements","Joint ownership of what is built from the data (playbook, rules)","Need to discuss further"]},{id:"Q5",type:"notes",title:"If the carrier's corporate office eventually wants to license or acquire the platform, structure expectation?",helper:"The IP and commercialization conversation. Earlier the better."}]},{id:"R",title:"Regulated communications and operational continuity",blurb:"Specific regulated message categories, and what happens when systems are down.",questions:[{id:"R1",type:"multi",title:"Which regulated communication categories should the Command Center handle?",options:["FCRA adverse action notices (quote denied or rated up due to credit)","Insurance score disclosures","GLBA annual privacy notices","WA RCW 48.18.290 cancellation notices","WA 20-day premium increase notifications","Renewal non-renewal notices","All — system handles everything","None — corporate handles all regulated comms"]},{id:"R2",type:"notes",title:"How does the team currently get notified when corporate sends a regulated communication?"},{id:"R3",type:"single",title:"Marketing automation overlap with corporate sends — should the Command Center suppress duplicates?",options:["Yes — full visibility into corporate sends, suppress overlap","Yes — but only if we can get a feed from corporate","Best effort — accept some duplication","No — agency comms run independent of corporate"]},{id:"R4",type:"notes",title:"When the Command Center is down, what's the team's fallback?"},{id:"R5",type:"single",title:"When carrier corporate systems (CRM, customer portal) are down, how should the Command Center degrade?",options:["Continue with cached data, queue writes for sync later","Read-only mode","Block all activity until corporate is back"]},{id:"R6",type:"notes",title:"Disaster recovery — RPO and RTO expectations?",helper:"For a 10-person agency, often 24h RPO and 4h RTO is sufficient. Confirm or adjust."}]}],pd="acc.discovery.v2";function ff(){try{const e=localStorage.getItem(pd);return e?JSON.parse(e):{}}catch{return{}}}function yf(e){try{localStorage.setItem(pd,JSON.stringify(e))}catch{}}function wa(e,t){return t?e.type==="notes"||e.type==="text"?!!(t.text||"").trim():e.type==="multi"||e.type==="single"?(t.checked||[]).length>0:e.type==="table"?Object.values(t.table||{}).some(n=>(n||"").trim()):!1:!1}function gf(e,t){const n=e.questions.length,r=e.questions.filter(s=>wa(s,t[s.id])).length;return{done:r,total:n,pct:n?Math.round(r/n*100):0}}function Ul({value:e,onChange:t,rows:n=3}){return o.jsx("textarea",{className:"dq-textarea",rows:n,value:e,onChange:r=>t(r.target.value),placeholder:"Type your answer..."})}function vf({value:e,onChange:t}){return o.jsx("input",{className:"dq-input",type:"text",value:e,onChange:n=>t(n.target.value),placeholder:"Type your answer..."})}function wf({options:e,checked:t,onToggle:n,single:r,withOther:s,otherText:i,onOtherChange:a}){return o.jsxs("div",{className:"dq-options",children:[e.map(l=>{const u=t.includes(l);return o.jsxs("button",{type:"button",className:`dq-option ${u?"on":""}`,onClick:()=>n(l),"aria-pressed":u,children:[o.jsx("span",{className:`dq-box ${r?"radio":""}`,children:u?"✓":""}),o.jsx("span",{className:"dq-option-label",children:l})]},l)}),s&&o.jsxs("div",{className:"dq-other",children:[o.jsx("span",{className:"dq-option-label dq-other-label",children:"Other"}),o.jsx("input",{type:"text",className:"dq-input",value:i,onChange:l=>a(l.target.value),placeholder:"Specify..."})]})]})}function xf({rows:e,values:t,onChange:n}){return o.jsx("table",{className:"dq-table",children:o.jsx("tbody",{children:e.map(r=>o.jsxs("tr",{children:[o.jsx("td",{className:"dq-table-label",children:r}),o.jsx("td",{className:"dq-table-input",children:o.jsx("input",{type:"text",value:t[r]||"",onChange:s=>n(r,s.target.value),placeholder:"—"})})]},r))})})}function kf({q:e,response:t,onChange:n}){const r=t||{},s=r.checked||[],i=r.text||"",a=r.table||{},l=r.other||"",u=w=>n({...r,checked:w}),c=w=>n({...r,text:w}),p=w=>n({...r,other:w}),v=(w,x)=>n({...r,table:{...a,[w]:x}}),f=w=>{e.type==="single"?u(s[0]===w?[]:[w]):u(s.includes(w)?s.filter(x=>x!==w):[...s,w])},g=wa(e,r);return o.jsxs("div",{className:`dq-question ${g?"dq-answered":""}`,children:[o.jsxs("div",{className:"dq-q-head",children:[o.jsx("span",{className:"dq-q-id mono",children:e.id}),o.jsx("span",{className:"dq-q-title",children:e.title}),g&&o.jsx("span",{className:"dq-q-tick","aria-label":"Answered",children:"✓"})]}),e.helper&&o.jsx("div",{className:"dq-q-helper",children:e.helper}),e.type==="notes"&&o.jsx(Ul,{value:i,onChange:c,rows:3}),e.type==="text"&&o.jsx(vf,{value:i,onChange:c}),(e.type==="multi"||e.type==="single")&&o.jsxs(o.Fragment,{children:[o.jsx(wf,{options:e.options,checked:s,onToggle:f,single:e.type==="single",withOther:!!e.withOther,otherText:l,onOtherChange:p}),o.jsx(Ul,{value:i,onChange:c,rows:2})]}),e.type==="table"&&o.jsx(xf,{rows:e.rows,values:a,onChange:v})]})}function Nf({section:e,responses:t,onChange:n,defaultOpen:r}){const[s,i]=I.useState(!!r),{done:a,total:l,pct:u}=gf(e,t);return o.jsxs("div",{className:`dq-section ${s?"open":""}`,children:[o.jsxs("button",{className:"dq-section-head",onClick:()=>i(c=>!c),"aria-expanded":s,children:[o.jsx("span",{className:"dq-section-id mono",children:e.id}),o.jsx("span",{className:"dq-section-title",children:e.title}),o.jsxs("span",{className:"dq-section-progress",children:[o.jsxs("span",{className:"mono",children:[a,"/",l]}),o.jsx("span",{className:"dq-section-bar",children:o.jsx("span",{className:"dq-section-fill",style:{width:`${u}%`},"data-pct":u})})]}),o.jsx("span",{className:"dq-section-caret",children:s?"▾":"▸"})]}),s&&o.jsxs("div",{className:"dq-section-body",children:[e.blurb&&o.jsx("div",{className:"dq-section-blurb",children:e.blurb}),e.questions.map(c=>o.jsx(kf,{q:c,response:t[c.id],onChange:p=>n(c.id,p)},c.id))]})]})}function jf(){const[e,t]=I.useState(()=>ff()),[n,r]=I.useState(null);I.useEffect(()=>{yf(e),r(new Date)},[e]);const s=(C,h)=>{t(d=>({...d,[C]:h}))},i=(C,h)=>{t(d=>({...d,_meta:{...d._meta||{},[C]:h}}))},a=I.useMemo(()=>{let C=0,h=0;for(const d of Wl)C+=d.questions.length,h+=d.questions.filter(m=>wa(m,e[m.id])).length;return{total:C,done:h,pct:C?Math.round(h/C*100):0}},[e]),l=()=>{const C=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),h=URL.createObjectURL(C),d=document.createElement("a"),m=new Date().toISOString().slice(0,10);d.href=h,d.download=`discovery-${m}.json`,document.body.appendChild(d),d.click(),document.body.removeChild(d),URL.revokeObjectURL(h)},u=()=>{confirm("Clear all discovery responses? This cannot be undone.")&&t({})},c=()=>{f(C=>C+1),w(!0)},p=()=>{f(C=>C+1),w(!1)},[v,f]=I.useState(0),[g,w]=I.useState(!1),x=e._meta||{};return o.jsxs("section",{className:"view active",children:[o.jsxs("div",{className:"page-head",children:[o.jsxs("div",{children:[o.jsx("h1",{children:"Discovery worksheet"}),o.jsxs("div",{className:"greeting",children:[bo.client," · ",bo.version]})]}),o.jsxs("div",{className:"stamp",children:[a.done," / ",a.total," answered · ",a.pct,"%",n&&o.jsxs("span",{className:"dq-saved-stamp",children:[" · saved ",n.toLocaleTimeString()]})]})]}),o.jsxs("div",{className:"card dq-intro",children:[o.jsx("div",{className:"dq-intro-body",children:bo.intro}),o.jsxs("div",{className:"dq-meta-grid",children:[o.jsxs("label",{className:"dq-meta-field",children:[o.jsx("span",{children:"Session date"}),o.jsx("input",{type:"date",value:x.sessionDate||"",onChange:C=>i("sessionDate",C.target.value)})]}),o.jsxs("label",{className:"dq-meta-field",children:[o.jsx("span",{children:"Attendees"}),o.jsx("input",{type:"text",value:x.attendees||"",onChange:C=>i("attendees",C.target.value),placeholder:"Names..."})]})]}),o.jsxs("div",{className:"dq-toolbar",children:[o.jsx("button",{className:"btn",onClick:c,children:"Expand all"}),o.jsx("button",{className:"btn",onClick:p,children:"Collapse all"}),o.jsx("button",{className:"btn primary",onClick:l,disabled:a.done===0,children:"Export JSON"}),o.jsx("button",{className:"btn",onClick:u,disabled:a.done===0,children:"Clear all"})]}),o.jsx("div",{className:"dq-overall-bar",children:o.jsx("div",{className:"dq-overall-fill",style:{width:`${a.pct}%`}})})]}),o.jsx("div",{className:"dq-sections",children:Wl.map((C,h)=>o.jsx(Nf,{section:C,responses:e,onChange:s,defaultOpen:g||h===0},C.id))},v)]})}const Kt=[{transcript:[{speaker:"Rep",text:"Hey Marcus, it's just __REP__ from your local Sample Agency office here in town. Calling regarding the auto quote you requested a few days back. Did you see the email I sent?"},{speaker:"Marcus",text:"Oh yeah, I saw it. Look, I'm honestly just shopping around for the cheapest option. Trying to keep costs down."}],coach:{style:"Questioner",conf:62,dimensions:{asker:62,doer:25,thinker:18,story:15},signal:'Mentioned "shopping around" and "cheapest"',move:"1 · Match",goal:"Match the price focus. Don't argue with it; make it the thing you're both looking at.",pacing:"It sounds like getting the right price is what matters most right now.",qtype:"Diagnostic",sample:"How much are you paying now?",values:["Every discount you qualify for, applied before you ask","For a little bit more than the cheapest number, the actual limits you need","A local office that picks up when something happens"],stamp:"Analysis at turn 1 · 0.8s",objections:["price"]}},{transcript:[{speaker:"Rep",text:"It sounds like getting the right price is what matters most right now. How much are you paying now?"},{speaker:"Marcus",text:"I'm paying $186 with Carrier A. I just want to beat that."}],coach:{style:"Questioner",conf:78,dimensions:{asker:78,doer:35,story:12,thinker:8},objections:["price"],signal:"Specific number anchor: $186",move:"2 · Fit",goal:"Acknowledge the anchor, then move the comparison from price to payout.",pacing:"$186, got it. That's the number to beat.",qtype:"Directional",sample:"As much as rate is important, the more important question to ask yourself is: how will the insurance company pay me when something happens? Is the $186 the same limits as the quote I sent you?",values:["Every discount you qualify for, applied before you ask","For a little bit more than the cheapest number, the actual limits you need","A local office that picks up when something happens"],stamp:"Analysis at turn 2 · 0.7s"}},{transcript:[{speaker:"Rep",text:"$186, got it. As much as rate matters, the bigger question is how the company pays you when something happens. Is the $186 the same limits as the quote I sent?"},{speaker:"Marcus",text:"Look, I really don't want to get into all that. Just give me your best number and I'll compare."}],coach:{style:"Questioner",conf:78,dimensions:{asker:78,doer:30,story:18,thinker:15},objections:["discovery_pushback","price"],signal:"Pushback · deflection from discovery",move:"3 · Ask",goal:"Concede first. Then one tiny ask he can say no to.",pacing:"Fair enough, I won't drag this out.",qtype:"Reframe",sample:"Would it be a terrible idea if I got you under $186 and showed you, in one minute, what you'd actually be paid in a claim? If it's not worth it, say so and I'll stop.",values:["Every discount you qualify for, applied before you ask","For a little bit more than the cheapest number, the actual limits you need","A local office that picks up when something happens"],stamp:"Analysis at turn 3 · 0.9s",alert:{kind:"warning",textParts:[{strong:!0,text:"Pushback detected."},{text:" Marcus is pushing back on discovery. Concede first, then ask the smallest no-question you have."}]}}},{transcript:[{speaker:"Rep",text:"Fair enough, I won't drag this out. Would it be a terrible idea if I got you under $186 and showed you, in one minute, what you'd actually be paid in a claim?"},{speaker:"Marcus",text:"Maybe. I mean... with the baby coming next month, every dollar matters. But also, my wife keeps reminding me we should have someone real to call when stuff happens."}],coach:{style:"Storyteller",conf:84,dimensions:{story:80,asker:70,thinker:25,doer:10},objections:["spousal_decision"],lifeSignal:{kind:"cross_sell",target:"life",intensity:"strong",basis:"New baby + spousal interest"},signal:"Life event · new baby + explicit desire for local service",move:"1 · Match, again",goal:"He just told you what's true for him. Match the baby and the “someone real”, not the price.",pacing:"Congratulations on the baby. That changes a lot.",qtype:"Elicitation",sample:"Many families worry they won't have enough protection if something happens. How are you feeling about your current coverage, with the baby coming?",values:["A person who knows your family by name picks up the phone","Protection for you and, just as importantly, your income","No one else will talk to you about this. I will."],stamp:"Analysis at turn 4 · 1.1s",alert:{kind:"success",textParts:[{strong:!0,text:"Style reclassified."},{text:" Questioner → Storyteller. Trigger: a personal story, a family event, and who to call when something happens. Value statements updated. Cross-sell signal flagged: "},{strong:!0,text:"life insurance"},{text:"."}]},reclassified:!0}},{transcript:[{speaker:"Rep",text:"First, congratulations on the baby. That changes a lot. Many families worry they won't have enough protection if something happens. How are you feeling about your coverage, with the baby coming?"},{speaker:"Marcus",text:"Yeah, honestly. My wife's been asking about life insurance too. We've been putting it off."}],coach:{style:"Storyteller",conf:91,dimensions:{story:91,asker:45,thinker:30,doer:12},objections:["spousal_decision"],lifeSignal:{kind:"cross_sell",target:"life",intensity:"explicit",basis:'Both spouses on board, "putting it off"'},signal:"Explicit life insurance interest, joint decision-making",move:"2 · Fit",goal:"Make the meeting the normal next step for a new parent, with both decision-makers in the room.",pacing:"It's smart that you're both thinking about this together.",qtype:"Assumptive",sample:"I know more than anyone, talking about what happens to your loved ones after you're gone is not easy, but no one will talk to you about it other than me. When we sit down, I'll walk you both through the auto and a quick life overview so you have the full picture. Is Wednesday at 3 better, or Thursday morning?",values:["A person who knows your family by name picks up the phone","Protection for you and, just as importantly, your income","No one else will talk to you about this. I will."],stamp:"Analysis at turn 5 · 0.8s"}},{transcript:[{speaker:"Rep",text:"It's smart you're both thinking about this together. When we sit down, I'll walk you both through the auto and a quick life overview. Is Wednesday at 3 better, or Thursday morning?"},{speaker:"Marcus",text:"Wednesday at 3 works. Should I bring anything?"}],coach:{style:"Storyteller",conf:94,dimensions:{story:94,asker:35,doer:32,thinker:10},objections:[],lifeSignal:{kind:"cross_sell",target:"life",intensity:"committed",basis:"Meeting set to discuss life"},signal:"Meeting confirmed · proactive engagement",move:"3 · Ask",goal:"Lock the time, set expectations, and give him the sentence he'll repeat to his wife.",pacing:"Wednesday at 3, locking it in.",qtype:"Trial close",sample:"Bring your current auto declarations page if you have it handy. When your wife asks what this is about, tell her someone's finally going to walk you both through it. I'll send a calendar invite with my direct number. Sound good?",values:["A person who knows your family by name picks up the phone","Protection for you and, just as importantly, your income","No one else will talk to you about this. I will."],stamp:"Analysis at turn 6 · 0.7s",alert:{kind:"success",textParts:[{strong:!0,text:"Auto-queued for after the call:"},{text:" calendar invite for Wed 3pm, follow-up email confirming meeting + bring-list, life insurance pre-fill draft based on Marcus' age and family signal."}]}}}],Vl=[{val:"appt",label:"Appointment set",followup:!0,kind:"success"},{val:"quote",label:"Quote sent",followup:!0,kind:"success"},{val:"callback",label:"Callback",followup:!0,kind:"neutral"},{val:"voicemail",label:"Left voicemail",followup:!0,kind:"neutral"},{val:"nointerest",label:"Not interested",followup:!1,kind:"fail"},{val:"dnc",label:"Add to DNC",followup:!1,kind:"fail"},{val:"bound",label:"Bound on call",followup:!1,kind:"success"}],Sf={story:"Storyteller",asker:"Questioner",doer:"Doer",thinker:"Thinker"},bf={price:{label:"Price-only fixation",cue:'"Just give me the cheapest" / "I just want to beat $X"',response:"Match the price focus, then move the comparison from price to payout. Then one number question.",sample:"It sounds like getting the right price is what matters most right now. As much as rate is important, the more important question to ask yourself is: how will the insurance company pay me when something happens? How much are you paying now?"},discovery_pushback:{label:"Won't answer discovery questions",cue:'"Just send me the number" / refuses to share details',response:"Concede first. Then the smallest no-question you have.",sample:"Fair enough, I won't drag this out. Would it be a terrible idea if I got you under $X and showed you, in one minute, what you'd actually be paid in a claim?"},bad_claim_history:{label:"Bad claim experience (any carrier)",cue:'"I had a bad claim with [carrier] back in..."',response:"Label it, ask what went wrong, then reframe what insurance is for.",sample:"It sounds like that claim is still really important to you, and it should be. Insurance is meant to save you from financial devastation, not aggravation. What went wrong: the company, or how it was handled?"},friend_agent:{label:"Friend/family is an agent",cue:'"My buddy/cousin is an agent at..."',response:"Don't fight loyalty. Get curious about how they chose.",sample:"Totally respect that. Out of curiosity, how did you choose your current policy? Worth a second set of eyes either way; sometimes ours is lower, sometimes theirs is."},distrust:{label:"Distrusts insurance industry generally",cue:`"All insurance companies are the same" / "It's all a scam"`,response:"Agree, then show the lines. Transparency is the pace.",sample:"I won't argue the industry's earned that view. I'll walk you through every line on the quote: what you're paying for, what you're not, and how it pays you when something happens. Do I have permission to be direct with you?"},spousal_decision:{label:"Joint decision needed",cue:'"I need to talk to my wife/husband first"',response:"Honor it. Get both in the room, and give them the sentence they'll repeat at home.",sample:"Smart; this is the kind of decision worth both of you in the room. Would it be a terrible idea to have the three of us on a ten-minute call? Is AM or PM better for you both?"},time:{label:"No time right now",cue:`"I'm too busy" / "Bad time"`,response:"Don't push. Two easy choices.",sample:"Got it, won't keep you. Is AM or PM better for a five-minute call tomorrow?"},online_only:{label:"Wants to handle entirely online",cue:`"I'd rather do this digitally"`,response:"Honor it. Line by line, their pace, they decide.",sample:"Done. I'll send the quote line by line with the options spelled out, and you decide on your own time. If anything trips you up, I'm a text away."},think_about_it:{label:"Wants to think about it",cue:'"Let me think about it"',response:"They haven't found their reason yet. Find what would need to be true.",sample:"I know this is a big decision. What would need to be true for this to make sense for you?"},no_reply:{label:"Gone quiet after the quote",cue:"No reply to three touches",response:"Remove the social cost of replying.",sample:"I'm starting to feel like I'm bothering you… If you decided to go with another provider, no biggie, just let me know so I can close my tasks. Should I keep following up?"}},Yl=[{id:"existing",label:"Existing life coverage check",detail:"If yes, WA Form 22-0700 (Replacement) required before solicitation.",blocker:!0},{id:"joint",label:"Both decision-makers available",detail:"Spouse signal in this call — schedule the meeting with both, or document spouse unavailable.",blocker:!1},{id:"income",label:"Income + dependents captured",detail:"Drives face amount range (typically 10–12× income for primary breadwinner with dependents).",blocker:!0},{id:"product_fit",label:"Term vs. permanent product fit",detail:"New baby + budget-sensitive → 20-30 yr level term first, permanent as overlay later.",blocker:!1},{id:"health",label:"Health questions readiness",detail:"No medical pre-screen by phone — schedule app appointment with health questionnaire.",blocker:!1},{id:"wa_disclosure",label:"WA disclosure delivered",detail:"Required: producer license, compensation disclosure, Buyer's Guide.",blocker:!0}];function Cf(p){return o.jsx(XStyleRead,p)}function _f({ids:e}){const[t,n]=I.useState(null);return!e||e.length===0?null:o.jsxs("div",{className:"coach-section",children:[o.jsx("div",{className:"label",children:"Likely objections this turn"}),o.jsx("div",{className:"objection-list",children:e.map(r=>{const s=bf[r];if(!s)return null;const i=t===r;return o.jsxs("div",{className:`objection-card ${i?"open":""}`,children:[o.jsxs("button",{className:"objection-head",onClick:()=>n(i?null:r),"aria-expanded":i,children:[o.jsx("span",{className:"objection-label",children:s.label}),o.jsx("span",{className:"objection-cue",children:s.cue}),o.jsx("span",{className:"objection-toggle",children:i?"−":"+"})]}),i&&o.jsxs("div",{className:"objection-body",children:[o.jsx("div",{className:"objection-response",children:s.response}),o.jsxs("div",{className:"objection-sample",children:["“",s.sample,"”"]})]})]},r)})})]})}function Af({signal:e,checks:t,onToggle:n}){if(!e)return null;const r=Yl.filter(s=>s.blocker&&!t[s.id]).length;return o.jsxs("div",{className:`coach-section life-suitability ${r===0?"ready":"gated"}`,children:[o.jsxs("div",{className:"label",children:["Life cross-sell suitability",o.jsxs("span",{className:"mono life-meta",children:[" · ",e.intensity," signal · ",e.basis]})]}),o.jsx("ul",{className:"life-checklist",children:Yl.map(s=>o.jsx("li",{className:t[s.id]?"done":s.blocker?"blocker":"",children:o.jsxs("label",{children:[o.jsx("input",{type:"checkbox",checked:!!t[s.id],onChange:()=>n(s.id)}),o.jsxs("span",{children:[o.jsx("span",{className:"life-item-label",children:s.label}),s.blocker&&!t[s.id]&&o.jsx("span",{className:"life-blocker-tag",children:"Required"}),o.jsx("span",{className:"life-item-detail",children:s.detail})]})]})},s.id))}),o.jsx("div",{className:"life-readiness",children:r===0?"✓ Suitability cleared — proceed to needs analysis and quote":`${r} required item${r===1?"":"s"} outstanding · cannot solicit life until cleared`})]})}function If({persona:e}){var t,n;const[r,s]=I.useState(0),[i,a]=I.useState(null),[l,u]=I.useState(""),[c,p]=I.useState(""),[v,f]=I.useState(!1),[g,w]=I.useState({}),[x,C]=I.useState({}),h=M=>C(J=>({...J,[M]:!J[M]})),d=I.useRef(null),m=(M,J)=>w(je=>({...je,[M]:je[M]===J?null:J})),y=Kt[r].coach,N=r===Kt.length-1,S=Vl.find(M=>M.val===i),_=y.dimensions?Object.entries(y.dimensions).sort((M,J)=>J[1]-M[1])[0][0]:null;I.useEffect(()=>{d.current&&(d.current.scrollTop=d.current.scrollHeight)},[r]);const A=()=>s(M=>Math.min(M+1,Kt.length-1)),L=()=>s(M=>Math.max(M-1,0)),T=()=>{s(0),a(null),u(""),p(""),f(!1),w({}),C({})},oe=()=>f(!0),We=Kt.slice(0,r+1),Ue=y.reclassified&&((t=y.alert)==null?void 0:t.kind)!=="success",Yt=["coach-panel",((n=y.alert)==null?void 0:n.kind)==="warning"?"alert":"",Ue?"reclassified":""].filter(Boolean).join(" ");return o.jsxs("section",{className:"view active",children:[o.jsxs("div",{className:"page-head",children:[o.jsxs("div",{children:[o.jsx("h1",{children:"Live Coach"}),o.jsx("div",{className:"greeting",children:"Real-time guidance · sub-3-second turn analysis"})]}),o.jsx("div",{className:"stamp",children:"Demo: outbound call to Marcus Sample"})]}),o.jsxs("div",{className:"coach-layout",children:[o.jsxs("div",{className:"panel transcript-panel",children:[o.jsxs("div",{className:"transcript-head",children:[o.jsxs("div",{className:"left",children:[o.jsx("div",{className:"live-dot"}),o.jsx("div",{className:"live-label",children:"Live · transcribing"}),o.jsxs("div",{className:"call-info",children:[o.jsx("strong",{children:"Marcus Sample"})," · 98029 · Auto quote requested 2 days ago",(()=>{const M=hd("H-SAMPLE");return!M.linesOfBusiness.length&&!M.annualPremium?null:o.jsxs("span",{className:"household-line",children:[" · ","Household: ",M.linesOfBusiness.length?M.linesOfBusiness.join(" + "):"no policies yet",M.annualPremium?` · $${M.annualPremium}/yr`:""]})})()]})]}),o.jsx("div",{className:"call-info",children:"02:14"})]}),o.jsx("div",{className:"transcript-scroll",ref:d,"aria-live":"polite",children:We.map((M,J)=>M.transcript.map((je,j)=>{const E=je.speaker==="Rep",P=E?e:je.speaker;return o.jsxs("div",{className:`turn ${E?"rep":"marcus"}`,children:[o.jsx("div",{className:"speaker",children:P}),o.jsx("div",{className:"text",children:mf(je.text,e)})]},`${J}-${j}`)}))}),o.jsxs("div",{className:"transcript-footer",children:[o.jsxs("div",{className:"turn-counter",children:["Turn ",r+1," of ",Kt.length]}),o.jsxs("div",{className:"turn-controls",children:[o.jsx("button",{className:"btn",onClick:L,disabled:r===0,children:"Previous"}),o.jsx("button",{className:"btn primary",onClick:A,disabled:r===Kt.length-1,children:"Next turn"}),o.jsx("button",{className:"btn",onClick:T,children:"Reset"})]})]})]}),o.jsxs("div",{className:Yt,children:[o.jsxs("div",{className:"coach-head x-coach-head",children:[o.jsxs("div",{children:[o.jsx("div",{className:"title",children:"Coach · current turn"}),o.jsx("div",{className:"sub",children:y.stamp})]}),o.jsx(XReadLozenge,{turn:r,transcript:We})]}),o.jsxs("div",{className:"coach-body","aria-live":"polite",children:[y.alert&&o.jsxs("div",{className:`alert-banner ${y.alert.kind==="success"?"success":""}`,children:[o.jsx("div",{className:"icon",children:y.alert.kind==="success"?"✓":"!"}),o.jsx("div",{className:"alert-text",children:o.jsx(Op,{parts:y.alert.textParts})})]}),o.jsxs("div",{className:"coach-section",children:[o.jsx("div",{className:"label",children:"Communication style · read from the conversation"}),o.jsx(Cf,{dimensions:y.dimensions,dominant:_,turn:r,transcript:We,signal:y.signal}),null]}),o.jsx(XCoachLife,{turn:r,transcript:We,dominant:_,gate:y.lifeSignal?Yl.filter(q=>q.blocker&&!x[q.id]).length:0}),o.jsxs("div",{className:"coach-section",children:[o.jsxs("div",{className:"label",children:["Goal this turn",y.move?` · ${y.move}`:""]}),o.jsx("div",{className:"goal-text",children:y.goal})]}),o.jsxs("div",{className:"coach-section",children:[o.jsx("div",{className:"label",children:"Open with · match"}),o.jsxs("div",{className:"pacing-quote",children:["“",y.pacing,"”"]})]}),o.jsxs("div",{className:"coach-section",children:[o.jsx("div",{className:"label",children:"Recommended next move"}),o.jsx("div",{className:"question-meta",children:o.jsx("span",{className:"qtype-pill",children:y.qtype})}),o.jsxs("div",{className:"sample-quote",children:["“",y.sample,"”"]}),o.jsxs("div",{className:"advice-feedback",children:[o.jsx("span",{className:"advice-feedback-label",children:"Did this work?"}),o.jsx("button",{className:`advice-btn yes ${g[r]==="yes"?"active":""}`,"aria-pressed":g[r]==="yes",onClick:()=>m(r,"yes"),title:"Logged for closed-loop coaching analytics",children:"✓ Worked"}),o.jsx("button",{className:`advice-btn no ${g[r]==="no"?"active":""}`,"aria-pressed":g[r]==="no",onClick:()=>m(r,"no"),title:"Logged for closed-loop coaching analytics",children:"✗ Missed"}),g[r]&&o.jsxs("span",{className:"advice-saved mono",children:["Logged · advice-id #",ep(y.qtype),"-t",r+1]})]})]}),o.jsx(_f,{ids:y.objections}),o.jsx(Af,{signal:y.lifeSignal,checks:x,onToggle:h}),o.jsxs("div",{className:"coach-section",children:[o.jsx("div",{className:"label",children:"Value statements to lean on"}),o.jsx("ul",{className:"value-statements",children:y.values.map((M,J)=>o.jsx("li",{children:M},J))})]}),o.jsxs("div",{className:"coach-section",children:[o.jsx("div",{className:"label",children:"Quick actions"}),o.jsxs("div",{className:"quick-actions",children:[o.jsx("button",{children:"Save as follow-up draft"}),o.jsx("button",{children:"Schedule callback"}),o.jsxs("button",{children:["Flag for ",e==="Alex"?"team":"Alex"," review"]})]})]}),N&&o.jsxs("div",{className:"coach-section disposition-section",children:[o.jsx("div",{className:"label",children:"Wrap-up · call disposition"}),v?o.jsxs("div",{className:"dispo-summary",children:[o.jsxs("div",{className:"dispo-summary-row",children:[o.jsx("span",{className:"label-inline",children:"Outcome"}),o.jsx("span",{className:`dispo-pill ${S.kind} active`,children:S.label})]}),l&&o.jsxs("div",{className:"dispo-summary-row",children:[o.jsx("span",{className:"label-inline",children:"Follow-up"}),o.jsx("span",{className:"mono",children:l})]}),c&&o.jsxs("div",{className:"dispo-summary-row notes",children:[o.jsx("span",{className:"label-inline",children:"Notes"}),o.jsx("span",{children:c})]}),o.jsxs("div",{className:"dispo-saved",children:["✓ Logged to lead record · CRM updated · queued automation honors ",i==="dnc"?"DNC suppression":"follow-up cadence"]})]}):o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"dispo-grid",role:"radiogroup","aria-label":"Call outcome",children:Vl.map(M=>o.jsx("button",{role:"radio","aria-checked":i===M.val,className:`dispo-pill ${M.kind} ${i===M.val?"active":""}`,onClick:()=>a(M.val),children:M.label},M.val))}),(S==null?void 0:S.followup)&&o.jsx("div",{className:"dispo-followup",children:o.jsxs("label",{className:"dispo-field",children:[o.jsx("span",{children:"Follow-up"}),o.jsx("input",{type:"date",value:l,onChange:M=>u(M.target.value)})]})}),o.jsxs("label",{className:"dispo-field",children:[o.jsx("span",{children:"Notes (logged to lead record)"}),o.jsx("textarea",{rows:"2",value:c,onChange:M=>p(M.target.value),placeholder:"Outcome details, commitments, objections raised..."})]}),o.jsx("div",{className:"dispo-actions",children:o.jsx("button",{className:"btn primary",disabled:!i||(S==null?void 0:S.followup)&&!l,onClick:oe,children:"Save disposition"})})]})]})]})]})]})]})}const Ef={asOf:Date.now(),monthLabel:"April 2026",agency:{nwpMtdGoal:84e3,nwpMtdActual:71240,nwpQtdGoal:252e3,nwpQtdActual:238910,pifTotal:2418,pifMtdNet:41,persistency13mo:.913,persistency25mo:.864,multiLineRatio:.62,lifeAttachRate:.18,npsScore:71},producers:[{id:"PRD-AR",name:"Alex Rivera",role:"Agent / Principal",callsToday:18,contactsToday:11,quotesToday:3,bindsToday:1,quoteToBindRatio:.33,lifeAppointmentsToday:1,monthlyNwpGoal:48e3,monthlyNwpActual:41280,callsThisMonth:312,conversionRate:.11},{id:"PRD-ML",name:"Maya Lindqvist",role:"Licensed Sales Producer",callsToday:27,contactsToday:19,quotesToday:4,bindsToday:1,quoteToBindRatio:.25,lifeAppointmentsToday:2,monthlyNwpGoal:36e3,monthlyNwpActual:29960,callsThisMonth:488,conversionRate:.09}],funnel:{leads:20,quoted:7,apps:4,households:2},lobMix:[{line:"auto",label:"Auto",percentOfBook:.46,growthMtd:.018},{line:"home",label:"Home",percentOfBook:.24,growthMtd:.012},{line:"life",label:"Life",percentOfBook:.11,growthMtd:.024},{line:"umbrella",label:"Umbrella",percentOfBook:.06,growthMtd:.009},{line:"renters",label:"Renters",percentOfBook:.09,growthMtd:-.004},{line:"business",label:"Business",percentOfBook:.04,growthMtd:.031}],lapseRisk:{policiesAtRisk:23,annualPremiumAtRisk:41260,nextActionDays:7}};function Rf({p:e}){const t=e.monthlyNwpActual/e.monthlyNwpGoal*100,n=t>=90?"good":t>=70?"ok":"risk";return o.jsxs("div",{className:"card mgr-producer",children:[o.jsxs("div",{className:"card-head",children:[o.jsx("span",{className:"title",children:e.name}),o.jsx("span",{className:"count",children:e.role})]}),o.jsxs("div",{className:"mgr-producer-body",children:[o.jsxs("div",{className:"mgr-today-strip",children:[o.jsxs("div",{className:"mgr-today-stat",children:[o.jsx("div",{className:"mgr-today-num",children:e.callsToday}),o.jsx("div",{className:"mgr-today-lbl",children:"Calls"})]}),o.jsxs("div",{className:"mgr-today-stat",children:[o.jsx("div",{className:"mgr-today-num",children:e.contactsToday}),o.jsx("div",{className:"mgr-today-lbl",children:"Contacts"})]}),o.jsxs("div",{className:"mgr-today-stat",children:[o.jsx("div",{className:"mgr-today-num",children:e.quotesToday}),o.jsx("div",{className:"mgr-today-lbl",children:"Quotes"})]}),o.jsxs("div",{className:"mgr-today-stat",children:[o.jsx("div",{className:"mgr-today-num",children:e.bindsToday}),o.jsx("div",{className:"mgr-today-lbl",children:"Households"})]}),o.jsxs("div",{className:"mgr-today-stat",children:[o.jsx("div",{className:"mgr-today-num",children:e.lifeAppointmentsToday}),o.jsx("div",{className:"mgr-today-lbl",children:"Life appts"})]})]}),o.jsxs("div",{className:"mgr-producer-section",children:[o.jsxs("div",{className:"mgr-producer-row",children:[o.jsx("span",{className:"mgr-producer-label",children:"MTD NWP"}),o.jsxs("span",{className:"mgr-producer-val mono",children:[_s(e.monthlyNwpActual)," ",o.jsxs("span",{className:"mgr-producer-unit",children:["/ ",_s(e.monthlyNwpGoal)," goal"]})]})]}),o.jsxs("div",{className:"mgr-producer-progress",children:[o.jsx(ad,{pct:t,tone:n}),o.jsxs("span",{className:"mgr-producer-pct mono",children:[Math.round(t),"%"]})]})]}),o.jsxs("div",{className:"mgr-producer-mini-grid",children:[o.jsxs("div",{className:"mgr-producer-mini",children:[o.jsx("div",{className:"mgr-producer-mini-lbl",children:"Quote → household"}),o.jsx("div",{className:"mgr-producer-mini-val mono",children:Mt(e.quoteToBindRatio)})]}),o.jsxs("div",{className:"mgr-producer-mini",children:[o.jsx("div",{className:"mgr-producer-mini-lbl",children:"Lead → household"}),o.jsx("div",{className:"mgr-producer-mini-val mono",children:Mt(e.conversionRate)})]}),o.jsxs("div",{className:"mgr-producer-mini",children:[o.jsx("div",{className:"mgr-producer-mini-lbl",children:"Calls MTD"}),o.jsx("div",{className:"mgr-producer-mini-val mono",children:e.callsThisMonth})]})]})]})]})}function Pf({stage:e,count:t,max:n,prevCount:r,isFirst:s}){const i=n>0?t/n*100:0,a=!s&&r>0?t/r*100:null;return o.jsxs("div",{className:"mgr-funnel-row",children:[o.jsx("div",{className:"mgr-funnel-label",children:e}),o.jsx("div",{className:"mgr-funnel-bar-wrap",children:o.jsx("div",{className:`mgr-funnel-bar mgr-funnel-bar-${e.toLowerCase()}`,style:{width:`${i}%`},children:o.jsx("span",{className:"mgr-funnel-count mono",children:t})})}),o.jsx("div",{className:"mgr-funnel-conv mono",children:a!=null?`${Math.round(a)}%`:"—"})]})}function Tf({row:e}){const t=Math.round(e.percentOfBook*100),n=e.growthMtd>0?"mgr-growth-up":e.growthMtd<0?"mgr-growth-down":"mgr-growth-flat";return o.jsxs("div",{className:"mgr-lob-row",children:[o.jsx("div",{className:"mgr-lob-label",children:e.label}),o.jsx("div",{className:"mgr-lob-bar-wrap",children:o.jsx("div",{className:`mgr-lob-bar mgr-lob-${e.line}`,style:{width:`${t}%`}})}),o.jsxs("div",{className:"mgr-lob-pct mono",children:[t,"%"]}),o.jsx("div",{className:`mgr-lob-growth mono ${n}`,children:ip(e.growthMtd)})]})}function Mf(){const e=Ef,t=I.useMemo(()=>{const r=e.agency.nwpMtdActual/e.agency.nwpMtdGoal*100,s=e.agency.nwpQtdActual/e.agency.nwpQtdGoal*100,i=[{key:"leads",label:"Leads",count:e.funnel.leads},{key:"quoted",label:"Quotes",count:e.funnel.quoted},{key:"households",label:"Households",count:e.funnel.households}],a=e.funnel.leads>0?e.funnel.households/e.funnel.leads:0;return{nwpPctToPlan:r,nwpQtdPct:s,stages:i,leadToBound:a}},[e]),n=t.nwpPctToPlan>=90?"good":t.nwpPctToPlan>=70?"ok":"risk";return o.jsxs("section",{className:"view active",children:[o.jsxs("div",{className:"page-head",children:[o.jsxs("div",{children:[o.jsx("h1",{children:"Manager dashboard"}),o.jsxs("div",{className:"greeting",children:[e.monthLabel," · NWP MTD: ",No(e.agency.nwpMtdActual)," / ",No(e.agency.nwpMtdGoal)," goal · ",Math.round(t.nwpPctToPlan),"% to plan"]})]}),o.jsxs("div",{className:"stamp",children:["QTD ",Math.round(t.nwpQtdPct),"% to plan · ",e.agency.pifTotal.toLocaleString()," PIF · principal view"]})]}),o.jsxs("div",{className:"mgr-hero-grid",children:[o.jsx(Fr,{label:"NWP MTD vs goal",value:_s(e.agency.nwpMtdActual),sub:`of ${_s(e.agency.nwpMtdGoal)} target`,pct:t.nwpPctToPlan,tone:n,accent:n==="risk"?"risk":n==="good"?"good":"neutral"}),o.jsx(Fr,{label:"Conversion rate",value:Mt(t.leadToBound,1),sub:`${e.funnel.households} households · ${e.funnel.leads} leads today`,accent:"neutral"}),o.jsx(Fr,{label:"Multi-line ratio",value:Mt(e.agency.multiLineRatio),sub:`Life attach ${Mt(e.agency.lifeAttachRate)}`,accent:"good"}),o.jsx(Fr,{label:"NPS",value:e.agency.npsScore,sub:`13mo persistency ${Mt(e.agency.persistency13mo,1)}`,accent:"good"})]}),o.jsxs("div",{className:"mgr-section-head",children:[o.jsx("div",{className:"mgr-section-title",children:"Producer scorecards"}),o.jsx("div",{className:"mgr-section-sub",children:"Today's activity · MTD progress against individual quota"})]}),o.jsx("div",{className:"mgr-producer-grid",children:e.producers.map(r=>o.jsx(Rf,{p:r},r.id))}),o.jsxs("div",{className:"mgr-funnel-lob-grid",children:[o.jsxs("div",{className:"card mgr-funnel-card",children:[o.jsxs("div",{className:"card-head",children:[o.jsx("span",{className:"title",children:"Conversion funnel · today"}),o.jsxs("span",{className:"count",children:["lead → household ",Mt(t.leadToBound,1)]})]}),o.jsxs("div",{className:"mgr-funnel-body",children:[o.jsxs("div",{className:"mgr-funnel-header",children:[o.jsx("div",{className:"mgr-funnel-label"}),o.jsx("div",{className:"mgr-funnel-bar-wrap mgr-funnel-bar-head",children:"Stage volume"}),o.jsx("div",{className:"mgr-funnel-conv mgr-funnel-conv-head",children:"Step %"})]}),t.stages.map((r,s)=>o.jsx(Pf,{stage:r.label,count:r.count,max:t.stages[0].count,prevCount:s>0?t.stages[s-1].count:null,isFirst:s===0},r.key))]})]}),o.jsxs("div",{className:"card mgr-lob-card",children:[o.jsxs("div",{className:"card-head",children:[o.jsx("span",{className:"title",children:"Book mix by line"}),o.jsxs("span",{className:"count",children:[e.agency.pifTotal.toLocaleString()," PIF"]})]}),o.jsxs("div",{className:"mgr-lob-body",children:[o.jsxs("div",{className:"mgr-lob-header",children:[o.jsx("div",{className:"mgr-lob-label"}),o.jsx("div",{className:"mgr-lob-bar-wrap mgr-lob-head",children:"% of book"}),o.jsx("div",{className:"mgr-lob-pct"}),o.jsx("div",{className:"mgr-lob-growth mgr-lob-head",children:"MTD"})]}),e.lobMix.map(r=>o.jsx(Tf,{row:r},r.line))]})]})]}),o.jsxs("div",{className:"card mgr-lapse-callout",children:[o.jsx("div",{className:"mgr-lapse-icon","aria-hidden":!0,children:"!"}),o.jsxs("div",{className:"mgr-lapse-body",children:[o.jsxs("div",{className:"mgr-lapse-headline",children:[o.jsx("span",{className:"mgr-lapse-money",children:No(e.lapseRisk.annualPremiumAtRisk)}),o.jsx("span",{className:"mgr-lapse-unit",children:"annual premium at lapse risk"})]}),o.jsxs("div",{className:"mgr-lapse-meta",children:[e.lapseRisk.policiesAtRisk," policies flagged · next save window closes in ",e.lapseRisk.nextActionDays," days"]})]}),o.jsxs("div",{className:"mgr-lapse-actions",children:[o.jsx("button",{className:"btn primary",title:"Demo prototype — no action wired up",children:"Open save list"}),o.jsx("span",{className:"stage-chip stage-lapsed",children:"Lapse risk"})]})]})]})}function Of(e){const t=new Map;for(const n of e){const r=n.referrerHouseholdId||n.referrerName;t.has(r)||t.set(r,{key:r,name:n.referrerName,kind:n.kind,count:0,pipeline:0,bound:0,boundCount:0});const s=t.get(r);s.count+=1,s.pipeline+=n.estimatedAnnualPremium,n.status==="bound"&&(s.bound+=n.estimatedAnnualPremium,s.boundCount+=1)}return[...t.values()].sort((n,r)=>r.bound-n.bound||r.pipeline-n.pipeline||r.count-n.count)}function Lf({r:e}){const t=e.status==="bound"&&!e.thankYouSent,n=e.status==="new"?"Contact":e.status==="contacted"?"Send quote":e.status==="quoted"?"Follow up":e.status==="bound"?t?"Send thank-you":"View policy":"Nurture for x-date",r=e.status==="new"?"Mark contacted":e.status==="contacted"?"Mark quoted":null;return o.jsxs("div",{className:`ref-row ref-row-${e.status}`,children:[o.jsxs("div",{className:"ref-row-main",children:[o.jsxs("div",{className:"ref-row-headline",children:[o.jsx("span",{className:"ref-prospect-name",children:e.prospectName}),o.jsx("span",{className:"retention-zip mono",children:e.zip}),o.jsx(md,{kind:e.kind}),o.jsx(Bp,{kind:e.quoteRequested}),o.jsx(Wp,{status:e.status}),!e.thankYouSent&&e.status==="bound"&&o.jsx("span",{className:"ref-thanks-flag",title:"Referrer thank-you outstanding",children:"thanks owed"})]}),o.jsxs("div",{className:"ref-referrer",children:["Referred by ",o.jsx("span",{className:"ref-referrer-name",children:e.referrerName}),o.jsx("span",{className:"ref-dot",children:"·"}),o.jsx("span",{className:"ref-age",children:rp(e.sentAt)}),o.jsx("span",{className:"ref-dot",children:"·"}),o.jsxs("span",{className:"ref-est mono",children:[Ni(e.estimatedAnnualPremium),"/yr est."]})]}),e.notes&&o.jsx("div",{className:"ref-notes",children:e.notes}),o.jsx(Ws,{script:Us(dp[e.status==="bound"?t?"bound":null:e.status],{name:mr(e.prospectName),referrer:mr(e.referrerName)}),label:e.status==="bound"?"Open with · thank the referrer":`Open with · ${n}`})]}),o.jsxs("div",{className:"ref-row-actions",children:[o.jsx("button",{className:"btn primary",title:"Demo prototype — no action wired up",children:n}),r&&o.jsx("button",{className:"btn",title:"Demo prototype — no action wired up",children:r}),!e.thankYouSent&&e.status!=="lost"&&e.status!=="new"&&!t&&o.jsx("button",{className:"btn",title:"Demo prototype — no action wired up",children:"Thank referrer"})]})]})}function Df({status:e,rows:t}){if(!t.length)return null;const n=t.reduce((r,s)=>r+s.estimatedAnnualPremium,0);return o.jsxs("div",{className:`card ref-section ref-section-${e}`,children:[o.jsxs("div",{className:`card-head ref-section-head ref-section-head-${e}`,children:[o.jsx("span",{className:"title",children:ud[e]}),o.jsxs("span",{className:"count",children:[t.length," · ",hr(n),"/yr"]})]}),t.map(r=>o.jsx(Lf,{r},r.id))]})}function $f({a:e}){const t=e.status==="completed";return o.jsx("div",{className:`prospect-row prospect-row-${e.status}`,children:o.jsxs("div",{className:"prospect-row-main",children:[o.jsxs("div",{className:"prospect-row-headline",children:[o.jsx("span",{className:"prospect-title",children:e.title}),o.jsx("span",{className:`prospect-kind prospect-kind-${e.kind}`,children:Np[e.kind]||e.kind}),o.jsx("span",{className:`prospect-status prospect-status-${e.status}`,children:cd[e.status]||e.status})]}),o.jsxs("div",{className:"prospect-meta",children:[o.jsx("span",{className:"prospect-date",children:sp(e.date)}),o.jsx("span",{className:"ref-dot",children:"·"}),o.jsx("span",{className:"prospect-owner",children:e.owner}),o.jsx("span",{className:"ref-dot",children:"·"}),o.jsxs("span",{className:"prospect-reach mono",children:[e.estimatedReach.toLocaleString()," reach"]}),t&&o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"ref-dot",children:"·"}),o.jsxs("span",{className:"prospect-leads mono",children:[e.leadsGenerated," lead",e.leadsGenerated===1?"":"s"]})]}),o.jsx("span",{className:"ref-dot",children:"·"}),o.jsx("span",{className:"prospect-cost mono",children:e.cost===0?"free":hr(e.cost)})]})]})})}function Hf({status:e,rows:t}){if(!t.length)return null;const n=t.reduce((s,i)=>s+i.cost,0),r=t.reduce((s,i)=>s+i.leadsGenerated,0);return o.jsxs("div",{className:`card prospect-section prospect-section-${e}`,children:[o.jsxs("div",{className:`card-head prospect-section-head prospect-section-head-${e}`,children:[o.jsx("span",{className:"title",children:cd[e]}),o.jsxs("span",{className:"count",children:[t.length," · ",n===0?"free":hr(n),e==="completed"?` · ${r} lead${r===1?"":"s"}`:""]})]}),t.map(s=>o.jsx($f,{a:s},s.id))]})}function qf(){const e=vp,t=wp,{kpis:n,byStatus:r,topReferrers:s}=I.useMemo(()=>{const l=e.filter(w=>w.status!=="bound"&&w.status!=="lost"),u=l.reduce((w,x)=>w+x.estimatedAnnualPremium,0),c=e.filter(w=>w.status==="bound"||w.status==="lost"),p=e.filter(w=>w.status==="bound"),v=c.length>0?p.length/c.length:0,f=e.filter(w=>!w.thankYouSent&&w.status!=="lost"&&w.status!=="new").length,g=Object.fromEntries(jo.map(w=>[w,[]]));for(const w of e)g[w.status]&&g[w.status].push(w);for(const w of jo)g[w].sort((x,C)=>C.sentAt-x.sentAt);return{kpis:{active:l.length,pipeline:u,conversion:v,thanksOutstanding:f,bound:p.length,closed:c.length},byStatus:g,topReferrers:Of(e).slice(0,3)}},[e]),{activitiesByStatus:i,activeProspectCount:a}=I.useMemo(()=>{const l=Object.fromEntries(Hl.map(c=>[c,[]]));for(const c of t)l[c.status]&&l[c.status].push(c);l.planned.sort((c,p)=>new Date(c.date)-new Date(p.date)),l.in_progress.sort((c,p)=>new Date(c.date)-new Date(p.date)),l.completed.sort((c,p)=>new Date(p.date)-new Date(c.date));const u=l.planned.length+l.in_progress.length;return{activitiesByStatus:l,activeProspectCount:u}},[t]);return o.jsxs("section",{className:"view active",children:[o.jsxs("div",{className:"page-head",children:[o.jsxs("div",{children:[o.jsx("h1",{children:"Referrals & prospecting"}),o.jsxs("div",{className:"greeting",children:[n.active," active referrals · ",Ni(n.pipeline)," pipeline ·"," ",t.length," prospecting activities"]})]}),o.jsx("div",{className:"stamp",children:"Cheapest lead source · close the loop"})]}),o.jsxs("div",{className:"retention-kpis",children:[o.jsx(Hr,{label:"Active referrals",value:n.active,sub:`${n.bound} bound MTD`,tone:"good"}),o.jsx(Hr,{label:"Conversion rate",value:n.closed===0?"—":`${Math.round(n.conversion*100)}%`,sub:`${n.bound} of ${n.closed} closed`,tone:"neutral"}),o.jsx(Hr,{label:"Pipeline",value:Ni(n.pipeline),sub:"active referrals · est. annual premium",tone:"good"}),o.jsx(Hr,{label:"Thank-yous outstanding",value:n.thanksOutstanding,sub:"referrers awaiting recognition",tone:n.thanksOutstanding>0?"risk":"good"})]}),o.jsxs("div",{className:"ref-grid",children:[o.jsxs("div",{className:"ref-col",children:[o.jsxs("div",{className:"ref-col-head",children:[o.jsx("span",{className:"ref-col-title",children:"Referral pipeline"}),o.jsxs("span",{className:"ref-col-sub",children:[e.length," total · grouped by stage"]})]}),o.jsx("div",{className:"ref-sections",children:jo.map(l=>o.jsx(Df,{status:l,rows:r[l]},l))})]}),o.jsxs("div",{className:"ref-col",children:[o.jsxs("div",{className:"ref-col-head",children:[o.jsx("span",{className:"ref-col-title",children:"Prospecting activities"}),o.jsxs("span",{className:"ref-col-sub",children:[a," active · ",t.length," total"]})]}),o.jsx("div",{className:"ref-sections",children:Hl.map(l=>o.jsx(Hf,{status:l,rows:i[l]},l))})]})]}),o.jsxs("div",{className:"card ref-leaderboard",children:[o.jsxs("div",{className:"card-head",children:[o.jsx("span",{className:"title",children:"Top referrers"}),o.jsx("span",{className:"count",children:"by bound premium · then pipeline"})]}),o.jsx("div",{className:"ref-leaderboard-body",children:s.map((l,u)=>o.jsxs("div",{className:"ref-leader-row",children:[o.jsxs("div",{className:"ref-leader-rank",children:["#",u+1]}),o.jsxs("div",{className:"ref-leader-main",children:[o.jsxs("div",{className:"ref-leader-name",children:[l.name,o.jsx(md,{kind:l.kind})]}),o.jsxs("div",{className:"ref-leader-meta",children:[l.count," referral",l.count===1?"":"s"," sent · ",l.boundCount," bound"]})]}),o.jsxs("div",{className:"ref-leader-stats",children:[o.jsxs("div",{className:"ref-leader-stat",children:[o.jsx("div",{className:"ref-leader-stat-label",children:"Pipeline"}),o.jsx("div",{className:"ref-leader-stat-val mono",children:hr(l.pipeline)})]}),o.jsxs("div",{className:"ref-leader-stat",children:[o.jsx("div",{className:"ref-leader-stat-label",children:"Bound"}),o.jsx("div",{className:"ref-leader-stat-val mono",children:l.bound===0?"—":hr(l.bound)})]})]})]},l.key))})]})]})}function Co(e){return e>60?"risk":e>=40?"watch":"healthy"}function Ff(e){var t,n,r,s,i,a;return(t=e.churnSignals)!=null&&t.includes("Payment NSF last cycle")?"Set payment plan":(n=e.churnSignals)!=null&&n.includes("Complaint logged")?"Service-recovery call":(r=e.churnSignals)!=null&&r.includes("Competitor quote pulled")?"Save call · re-quote":(s=e.churnSignals)!=null&&s.includes("Rate increase notice mailed")&&e.daysToRenewal<=30?"Pre-renewal call":(i=e.churnSignals)!=null&&i.includes("Mortgage refi detected")?"Re-quote home":(a=e.churnSignals)!=null&&a.includes("Recent claim")?"Post-claim check-in":e.openOpportunity?"Cross-sell outreach":"Annual review"}function zf({h:e,tier:t}){const n=e.lastTouchDays===0?"today":e.lastTouchDays<30?`${e.lastTouchDays}d ago`:`${Math.round(e.lastTouchDays/30)}mo ago`,r=e.daysToRenewal<=14?`Renews in ${e.daysToRenewal}d`:e.daysToRenewal<=60?`Renews in ${e.daysToRenewal}d`:`Renews ${Math.round(e.daysToRenewal/30)}mo`,s=e.daysToRenewal<=30,i=Ff(e),a=e.linesOfBusiness.length>=2,l=Us(lp[i],{name:mr(e.primaryName),opportunity:e.openOpportunity,days:e.daysToRenewal});return o.jsxs("div",{className:`retention-row tier-${t}`,children:[o.jsxs("div",{className:"retention-row-main",children:[o.jsxs("div",{className:"retention-row-headline",children:[o.jsx("span",{className:"retention-name",children:e.primaryName}),o.jsx("span",{className:"retention-zip mono",children:e.zip}),o.jsxs("span",{className:`retention-score retention-score-${t}`,title:"Churn risk score 0-100",children:["risk ",e.churnRiskScore]}),!a&&o.jsx("span",{className:"retention-mono-flag",title:"Mono-line — single-policy household",children:"mono-line"})]}),o.jsx("div",{className:"retention-lobs",children:e.linesOfBusiness.map(u=>o.jsx(Lp,{lob:u},u))}),e.churnSignals.length>0&&o.jsx("div",{className:"retention-signals",children:e.churnSignals.map((u,c)=>o.jsx(Dp,{text:u},c))}),e.openOpportunity&&o.jsxs("div",{className:"retention-opp",children:[o.jsx("span",{className:"retention-opp-label",children:"Opportunity"}),o.jsx("span",{className:"retention-opp-text",children:e.openOpportunity})]}),o.jsx(Ws,{script:l,label:`Open with · ${i}`})]}),o.jsxs("div",{className:"retention-row-stats",children:[o.jsxs("div",{className:"retention-stat",children:[o.jsx("div",{className:"retention-stat-label",children:"Premium"}),o.jsxs("div",{className:"retention-stat-val",children:[ns(e.annualPremium),o.jsx("span",{className:"retention-stat-unit",children:"/yr"})]})]}),o.jsxs("div",{className:"retention-stat",children:[o.jsx("div",{className:"retention-stat-label",children:"Tenure"}),o.jsxs("div",{className:"retention-stat-val",children:[e.tenureYears,o.jsx("span",{className:"retention-stat-unit",children:"yr"})]})]}),o.jsxs("div",{className:"retention-stat",children:[o.jsx("div",{className:"retention-stat-label",children:"Last touch"}),o.jsx("div",{className:"retention-stat-val",children:n})]}),o.jsxs("div",{className:`retention-stat ${s?"urgent":""}`,children:[o.jsx("div",{className:"retention-stat-label",children:"Renewal"}),o.jsx("div",{className:"retention-stat-val",children:r})]})]}),o.jsx("div",{className:"retention-row-action",children:o.jsx("button",{className:"btn primary",title:"Demo prototype — no action wired up",children:i})})]})}function _o({title:e,count:t,premium:n,rows:r,tier:s,collapsible:i,defaultCollapsed:a}){const[l,u]=I.useState(!!a),c=()=>i&&u(p=>!p);return o.jsxs("div",{className:`card retention-section retention-section-${s}`,children:[o.jsxs("div",{className:`card-head retention-section-head retention-section-head-${s}${i?" clickable":""}`,onClick:c,role:i?"button":void 0,"aria-expanded":i?!l:void 0,children:[o.jsxs("span",{className:"title",children:[e,i&&o.jsx("span",{className:"retention-collapse-caret","aria-hidden":!0,children:l?" ▸":" ▾"})]}),o.jsxs("span",{className:"count",children:[t," household",t===1?"":"s"," · ",tp(n),"/yr"]})]}),!l&&r.map(p=>o.jsx(zf,{h:p,tier:s},p.id))]})}function Bf(){const e=ld,{sorted:t,kpis:n,totals:r}=I.useMemo(()=>{const u=[...e].sort((x,C)=>C.churnRiskScore-x.churnRiskScore),c=e.reduce((x,C)=>x+C.annualPremium,0),p=e.filter(x=>x.linesOfBusiness.length>=2).length,v=Math.round(p/e.length*100),f=e.reduce((x,C)=>x+C.persistency,0)/e.length,g=e.filter(x=>x.churnRiskScore>60),w=g.reduce((x,C)=>x+C.annualPremium,0);return{sorted:u,kpis:{totalPremium:c,multiLinePct:v,avgPersistency:f,atRisk:g,atRiskPremium:w},totals:{count:e.length,totalPremium:c,multiLinePct:v}}},[e]),s=t.filter(u=>Co(u.churnRiskScore)==="risk"),i=t.filter(u=>Co(u.churnRiskScore)==="watch"),a=t.filter(u=>Co(u.churnRiskScore)==="healthy"),l=u=>u.reduce((c,p)=>c+p.annualPremium,0);return o.jsxs("section",{className:"view active",children:[o.jsxs("div",{className:"page-head",children:[o.jsxs("div",{children:[o.jsx("h1",{children:"Book retention"}),o.jsxs("div",{className:"greeting",children:[r.count," households · ",ns(r.totalPremium)," annual premium under management · ",r.multiLinePct,"% multi-line"]})]}),o.jsxs("div",{className:"stamp",children:[s.length," at-risk · ",i.length," on watch · sorted by churn score"]})]}),o.jsxs("div",{className:"retention-kpis",children:[o.jsx(Dr,{label:"Total annual premium",value:ns(n.totalPremium),sub:"under management"}),o.jsx(Dr,{label:"Multi-line %",value:`${n.multiLinePct}%`,sub:`${e.filter(u=>u.linesOfBusiness.length>=2).length} of ${e.length} households`,tone:"good"}),o.jsx(Dr,{label:"Avg persistency",value:(n.avgPersistency*100).toFixed(1)+"%",sub:"lifetime, weighted by households",tone:"good"}),o.jsx(Dr,{label:"At-risk premium",value:ns(n.atRiskPremium),sub:`${n.atRisk.length} households · score > 60`,tone:"risk"})]}),o.jsxs("div",{className:"retention-sections",children:[s.length>0&&o.jsx(_o,{title:"At-risk · act this week",count:s.length,premium:l(s),rows:s,tier:"risk"}),i.length>0&&o.jsx(_o,{title:"Watch · monitor and pre-empt",count:i.length,premium:l(i),rows:i,tier:"watch"}),a.length>0&&o.jsx(_o,{title:"Healthy · loyal book",count:a.length,premium:l(a),rows:a,tier:"healthy",collapsible:!0,defaultCollapsed:!0})]})]})}function Wf({row:e,showSla:t}){const{name:n,meta:r,pill:s,source:i,consent:a,stage:l,firstSeenAt:u,scheduledAt:c,householdId:p,id:v}=e,f=t&&u?Qm(u):null,g=c||(u?va(u):"");return o.jsxs("div",{className:"row",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"row-headline",children:[o.jsx("span",{className:"name",children:n}),l&&o.jsx(Pp,{stage:l}),o.jsx(Mp,{householdId:p,currentLeadId:v})]}),o.jsx("div",{className:"meta",children:r.map((w,x)=>o.jsx("span",{className:x===0?"":"dot",children:w},x))}),o.jsxs("div",{className:"row-bottom",children:[o.jsx("span",{className:`style-pill ${s.cls}`,title:"Communication style",children:s.label}),a&&o.jsx(Rp,{consent:a}),o.jsx(XClassicExtras,{name:n})]})]}),o.jsxs("div",{className:"right",children:[f&&o.jsx("div",{className:`sla-pill sla-${f}`,title:"First-touch SLA",children:f==="green"?"< 5m":f==="amber"?"5-15m":"> 15m"}),o.jsx("div",{className:"time",children:g})]})]})}function Br({title:e,count:t,rows:n,showSla:r}){return o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"card-head",children:[o.jsx("span",{className:"title",children:e}),o.jsx("span",{className:"count",children:t})]}),n.map((s,i)=>o.jsx(Wf,{row:s,showSla:r},s.id||i))]})}function Uf({persona:e}){const t=new Date,n=Gm(t.getHours()),r=Km(t),s=B.xDates.map(Jm),i=B.xDates.filter(p=>{if(!p.xDateAt)return!1;const v=(p.xDateAt-Date.now())/864e5;return v>=0&&v<=7}).length,a=[...B.needsFirstTouch,...B.xDates,...B.drafts,...B.callQueue],l=new Set(a.map(p=>p.householdId||p.id||p.name)).size,u=B.needsFirstTouch.length,c=Xm(B.needsFirstTouch);return o.jsxs("section",{className:"view active",children:[o.jsxs("div",{className:"page-head",children:[o.jsxs("div",{children:[o.jsxs("h1",{children:[n,", ",o.jsx("span",{children:e}),"."]}),o.jsx("div",{className:"greeting",children:`${Ef.funnel.leads} prospects · ${Ef.funnel.quoted} quotes · ${Ef.funnel.apps} apps / ${Ef.funnel.households} HH protected`})]}),o.jsx("div",{className:"stamp",children:"Last sync 2 min ago · 5-min SLA active"})]}),o.jsxs("div",{className:"today-grid",children:[o.jsx(Br,{title:"Needs first touch",count:`${Lr(u)}${c?" · "+c:""}`,rows:B.needsFirstTouch,showSla:!0}),o.jsx(Br,{title:"X-dates · next 14 days",count:Lr(s.length),rows:s}),o.jsx(Br,{title:"Drafts pending review",count:Lr(B.drafts.length),rows:B.drafts}),o.jsx(Br,{title:"Today's call queue",count:Lr(B.callQueue.length),rows:B.callQueue})]})]})}function ji(e){if(e.status==="dismissed")return"lower";const t=(e.recommendedAction||"").toLowerCase();return t.includes("today")||t.includes("48h")||t.includes("time-sensitive")||e.confidence==="high"&&e.status==="new"?"today":t.includes("schedule")||t.includes("send")||t.includes("discovery")||t.includes("email")?"week":"lower"}function Vf({t:e,onAct:t,onDismiss:n}){const r=e.status==="dismissed";return o.jsxs("div",{className:`trigger-row tier-${ji(e)}${r?" trigger-row-dismissed":""}`,children:[o.jsxs("div",{className:"trigger-row-main",children:[o.jsxs("div",{className:"trigger-row-headline",children:[o.jsx("span",{className:"trigger-name",children:e.customerName}),o.jsx("span",{className:"retention-zip mono",children:e.zip}),o.jsx(Fp,{kind:e.kind}),o.jsx(qp,{status:e.status})]}),o.jsx("div",{className:"trigger-signal",children:e.signal}),o.jsxs("div",{className:"trigger-meta-row",children:[o.jsx(zp,{source:e.source}),o.jsxs("span",{className:"trigger-detected",title:new Date(e.detectedAt).toLocaleString(),children:["detected ",va(e.detectedAt)]}),o.jsx(Hp,{confidence:e.confidence})]}),o.jsxs("div",{className:"trigger-lobs-row",children:[o.jsx("span",{className:"trigger-lobs-label",children:"Currently"}),o.jsx("span",{className:"retention-lobs trigger-lobs-inline",children:e.currentLines.map(s=>o.jsx($p,{lob:s},s))})]}),o.jsxs("div",{className:"trigger-opp",children:[o.jsx("span",{className:"trigger-opp-label",children:"Opportunity"}),o.jsx("span",{className:"trigger-opp-text",children:e.opportunity}),o.jsxs("span",{className:"trigger-opp-money",children:[ki(e.estimatedAnnualPremium),o.jsx("span",{className:"trigger-opp-unit",children:"/yr est."})]})]}),o.jsx(Ws,{script:Us(up[e.kind],{name:mr(e.customerName)})})]}),o.jsxs("div",{className:"trigger-row-action",children:[o.jsx("button",{className:"btn primary",disabled:r,onClick:()=>t(e.id),title:"Demo prototype — no action wired up",children:e.recommendedAction}),o.jsx("button",{className:"btn",disabled:r,onClick:()=>n(e.id),title:"Demo prototype — no action wired up",children:"Dismiss"})]})]})}function Yf({title:e,tier:t,count:n,premium:r,rows:s,onAct:i,onDismiss:a}){return s.length===0?null:o.jsxs("div",{className:`card retention-section retention-section-${t}`,children:[o.jsxs("div",{className:`card-head retention-section-head retention-section-head-${t}`,children:[o.jsx("span",{className:"title",children:e}),o.jsxs("span",{className:"count",children:[n," trigger",n===1?"":"s"," · ",np(r),"/yr opportunity"]})]}),s.map(l=>o.jsx(Vf,{t:l,onAct:i,onDismiss:a},l.id))]})}function Qf(){const[e,t]=I.useState("all"),[n,r]=I.useState("all"),[s,i]=I.useState({}),a=I.useMemo(()=>dd.map(g=>s[g.id]?{...g,status:s[g.id]}:g),[s]),l=I.useMemo(()=>{const g=a.filter(d=>d.status==="new"),w=a.filter(d=>d.status==="in_progress"),x=a.filter(d=>d.status!=="dismissed"),C=x.reduce((d,m)=>d+m.estimatedAnnualPremium,0),h=x.filter(d=>ji(d)==="today");return{newOnes:g,inProg:w,totalOpportunity:C,todayOnes:h}},[a]),u=I.useMemo(()=>a.filter(g=>!(e!=="all"&&g.status!==e||n!=="all"&&g.kind!==n)),[a,e,n]),c=I.useMemo(()=>{const g={today:[],week:[],lower:[]};for(const x of u)g[ji(x)].push(x);const w=x=>(x.confidence==="high"?2:x.confidence==="medium"?1:0)*1e4+x.estimatedAnnualPremium;for(const x of Object.keys(g))g[x].sort((C,h)=>w(h)-w(C));return g},[u]),p=g=>g.reduce((w,x)=>w+x.estimatedAnnualPremium,0),v=g=>i(w=>({...w,[g]:"in_progress"})),f=g=>i(w=>({...w,[g]:"dismissed"}));return o.jsxs("section",{className:"view active",children:[o.jsxs("div",{className:"page-head",children:[o.jsxs("div",{children:[o.jsx("h1",{children:"Cross-sell triggers"}),o.jsxs("div",{className:"greeting",children:[l.newOnes.length," new signals · ",ki(l.totalOpportunity)," estimated annual premium opportunity"]})]}),o.jsxs("div",{className:"stamp",children:[l.todayOnes.length," need action today · sorted by urgency"]})]}),o.jsxs("div",{className:"retention-kpis",children:[o.jsx($r,{label:"New triggers",value:String(l.newOnes.length),sub:"awaiting first touch",tone:"risk"}),o.jsx($r,{label:"In progress",value:String(l.inProg.length),sub:"outreach started",tone:"neutral"}),o.jsx($r,{label:"Total $ opportunity",value:ki(l.totalOpportunity),sub:"open triggers, est. annual",tone:"good"}),o.jsx($r,{label:"Action today",value:String(l.todayOnes.length),sub:"48h window or high-confidence",tone:"risk"})]}),o.jsxs("div",{className:"trigger-filters",children:[o.jsxs("div",{className:"trigger-filter-group",children:[o.jsx("span",{className:"trigger-filter-label",children:"Status"}),o.jsx("div",{className:"trigger-chip-row",children:Cp.map(g=>o.jsx(Fl,{active:e===g.val,onClick:()=>t(g.val),children:g.label},g.val))})]}),o.jsxs("div",{className:"trigger-filter-group",children:[o.jsx("span",{className:"trigger-filter-label",children:"Kind"}),o.jsx("div",{className:"trigger-chip-row",children:_p.map(g=>o.jsx(Fl,{active:n===g.val,onClick:()=>r(g.val),children:g.label},g.val))})]})]}),u.length===0?o.jsx("div",{className:"card trigger-empty",children:o.jsx("div",{className:"trigger-empty-text",children:"No triggers match the current filters. Try widening the status or kind filter."})}):o.jsx("div",{className:"retention-sections",children:Ap.map(g=>o.jsx(Yf,{title:g.title,tier:g.tier,count:c[g.key].length,premium:p(c[g.key]),rows:c[g.key],onAct:v,onDismiss:f},g.key))})]})}const Ge={owner:"Aaron A. Hakobian",year:new Date().getFullYear(),gateEnabled:!0,storageKey:"acc.confidential.v1",band:"Confidential · Proprietary demonstration · Not for distribution",gate:{title:"Confidential demonstration",intro:"This is a private, proprietary demonstration of the Agency Command Center. It contains unpublished work and trade secrets. By continuing, you agree to the following:",terms:["Keep what you see confidential. Do not share this link, screenshots, recordings or descriptions with anyone without Aaron A. Hakobian's written permission.","Use it only to evaluate this software.","Do not copy, reverse-engineer, or build anything based on what is shown here."],note:"All names, numbers and conversations shown are synthetic. No customer information appears anywhere on this site. This demonstration is not affiliated with, endorsed by, or offered on behalf of any insurance carrier.",accept:"I agree — continue",decline:"If you do not agree, close this page."},footer:"Confidential and proprietary. The methods, sequences, message templates and designs shown here are unpublished work and trade secrets of Aaron A. Hakobian; viewing is permitted only under the terms accepted on entry. All data is synthetic. Communication styles are read from each customer's own messages, not from any insurance carrier's data or segmentation. Not affiliated with, endorsed by, or offered on behalf of any insurance carrier."};function Gf(){try{const e=JSON.parse(localStorage.getItem(Ge.storageKey)||"null");return e&&e.at?e:null}catch{return null}}function Kf(){const[e,t]=I.useState(()=>!!Gf());return[e,()=>{try{localStorage.setItem(Ge.storageKey,JSON.stringify({at:new Date().toISOString(),ua:navigator.userAgent}))}catch{}t(!0)}]}function Xf(){return o.jsx("div",{className:"notice-band",role:"note",children:Ge.band})}function Jf({onAccept:e}){const t=I.useRef(null);I.useEffect(()=>{t.current&&t.current.focus()},[]);const n=Ge.gate;return o.jsx("div",{className:"gate",role:"dialog","aria-modal":"true","aria-labelledby":"gate-title",children:o.jsxs("div",{className:"gate-panel",children:[o.jsx("div",{className:"gate-kicker",children:Ge.band}),o.jsx("h1",{id:"gate-title",className:"serif",children:n.title}),o.jsx("p",{children:n.intro}),o.jsx("ol",{children:n.terms.map((r,s)=>o.jsx("li",{children:r},s))}),o.jsx("p",{className:"gate-note",children:n.note}),o.jsx("button",{ref:t,className:"gate-accept",onClick:e,children:n.accept}),o.jsx("div",{className:"gate-decline",children:n.decline}),o.jsxs("div",{className:"gate-legal",children:["© ",Ge.year," ",Ge.owner,". All rights reserved."]})]})})}function Zf(){return o.jsx("div",{className:"legal",children:o.jsxs("div",{children:["© ",Ge.year," ",Ge.owner,". All rights reserved. ",Ge.footer]})})}function PrincipleBand(){return o.jsxs("div",{className:"principle-band",role:"note","aria-label":"Our communication standard",children:[o.jsx("span",{className:"principle-kicker",children:"Our standard"}),o.jsx("span",{className:"principle-text",children:"Plain, respectful, needs-based communication: meet each customer where they are, explain what’s happening, and ask for one small next step."})]})}const XMOVES = {
  raw: {
    story: {
      m: { label: "\u201CI read your note twice\u201D", why: "A Storyteller wrote you a story. Showing you read it is the match: a person answered, not a form.", say: "Hi {first}, it's {rep} from your local office. I'm the one taking care of your quote, and I read your note twice." },
      f: { label: "What it covers, and who picks up the phone", why: "They buy the relationship. Explain the coverage in plain words, and tell them who they'll talk to when something happens.", say: "I'll walk you through what it covers and why, so you know what you have before you ever need it. And it's me who picks up the phone." },
      a: { label: "\u201CAre you opposed to a quick, no-obligation call this week?\u201D", why: "A no-question. Saying no feels safe, and \u201Cno, I'm not opposed\u201D is a yes. \u201CYou pick the time\u201D keeps it theirs.", say: "Do you have ten minutes now, or is later this week better? You pick the time." }
    },
    asker: {
      m: { label: "\u201CYou asked for specifics, so here they are\u201D", why: "Questioners open with questions. Lead with the number and the line-by-line before anything else.", say: "Hi {first}, it's {rep} from your local office. You asked for specifics, so here's the number first: {proposed} a month for the coverage you asked about." },
      f: { label: "Price next to how it pays", why: "They compare. Mark the two places a lower price usually comes from a coverage cut, so the comparison is fair, not just cheap.", say: "Every discount is already applied, and I marked the two places where a cheaper quote usually cuts coverage, so you can compare fairly." },
      a: { label: "\u201CHow much are you paying now?\u201D", why: "One number they can answer in a line, plus candor: if you can't beat it, you'll say so.", say: "How much are you paying now? If I can beat it, I'll tell you. If I can't, I'll tell you that too." }
    },
    doer: {
      m: { label: "\u201CI did the work already\u201D", why: "Doers write one line. Match it: the quote is done, the price comes first, nothing to fill out.", say: "Hi {first}, it's {rep} from your local office. I did the work already: your quote is ready, nothing to fill out." },
      f: { label: "We handle the paperwork", why: "Effort is what a Doer weighs. Say how little it takes: if it's a yes, the paperwork is on us.", say: "If you say yes, we handle the paperwork on our end. Five minutes covers anything unclear." },
      a: { label: "\u201CAM or PM?\u201D", why: "Two easy choices instead of an open question. The fastest possible yes.", say: "Want to go over it now, or is AM or PM tomorrow better?" }
    },
    thinker: {
      m: { label: "\u201CRead it on your own time\u201D", why: "Thinkers slow down to decide. Hand them the quote and the time to read it.", say: "Hi {first}, it's {rep} from your local office. Your quote is ready, and I'll send it so you can read it on your own time." },
      f: { label: "The one date that matters", why: "No decision today. The renewal date is the reason to look, and you say when you'll check back.", say: "No need to decide anything today. The date that matters is your renewal, because that's the day switching costs nothing. I'll check back a week before." },
      a: { label: "\u201CWould it be a terrible idea to take a closer look before then?\u201D", why: "A no-question with explicit control: \u201CYou decide.\u201D Nothing is pushed.", say: "Would it be a terrible idea to take a closer look before then? You decide." }
    }
  },
  current: {
    story: {
      m: { label: "\u201CNoticed something kind of\u2026 strange\u201D", why: "Something unexpected, plus proof you looked at their file personally. Storytellers notice when someone actually looked.", say: "Hi {first}, it's {rep}. I was reviewing your account and noticed something kind of strange." },
      f: { label: "Protecting you, and your income", why: "Make it about the people they protect. The policies the bank and the state require protect someone else.", say: "Your home is with another company, and I don't see a life policy. The policies the bank and the state require protect them. I want to make sure you and your income are protected." },
      a: { label: "\u201CAre you opposed to a quick, no-obligation call this week to look at it together?\u201D", why: "\u201CTogether\u201D keeps it a conversation, and saying no feels safe.", say: "Are you opposed to looking at it together for ten minutes this week?" }
    },
    asker: {
      m: { label: "\u201CYour home insurance is elsewhere\u201D", why: "State the finding first, plainly. Questioners want the fact before the story.", say: "Hi {first}, it's {rep}. Reviewing your account, I noticed your home insurance is with another company." },
      f: { label: "The bundle math, side by side", why: "The discount applies to both policies. Every figure on one page, plus the two details you need to run the exact number.", say: "The bundle discount applies to both policies, so your auto gets cheaper too. To run the exact number I need two things from your home policy: the dwelling coverage and the deductible." },
      a: { label: "\u201CHow much are you paying on the home now?\u201D", why: "One number to answer, and a promise to tell them if you can't beat it.", say: "How much are you paying on the home now? If I can beat it, I'll tell you." }
    },
    doer: {
      m: { label: "\u201CNoticed your home insurance is elsewhere\u201D", why: "One line, one finding. No preamble.", say: "Hi {first}, it's {rep}. Quick one: your home insurance is elsewhere." },
      f: { label: "Quoted from what's on file", why: "No forms, ready before you talk, and the switch handled on our end. The work is the message.", say: "I can quote it from what I already have on file. No forms, and if it's a yes, we handle the switch." },
      a: { label: "\u201CWant the number? Reply YES\u201D", why: "One word to answer, and the number today.", say: "Want the number? I can have it to you today." }
    },
    thinker: {
      m: { label: "\u201CI was reviewing your account\u201D", why: "Calm and specific: what you noticed, nothing asked yet. Thinkers stay with you when nothing is rushed.", say: "Hi {first}, it's {rep}. I was reviewing your account and noticed your home insurance is elsewhere. Nothing needed today." },
      f: { label: "Line by line, on their own time", why: "Put the bundle next to what they have now, and name the renewal as the one day switching costs nothing.", say: "I'll send the bundled option next to what you have now, line by line, so you can look on your own time before your home renewal." },
      a: { label: "\u201CWould it be a terrible idea to take a closer look before then?\u201D", why: "They answer when they're ready, and you answer anything they flag.", say: "Would it be a terrible idea to take a closer look before then? You decide." }
    }
  },
  winback: {
    story: {
      m: { label: "\u201CIt has been exactly one year since you left\u201D", why: "A precise anniversary and an honest \u201Cwe were sad to see you go.\u201D Storytellers remember how leaving felt.", say: "Hi {first}, it's {rep}. It's been exactly one year since you left, and we were sad to see you go." },
      f: { label: "A promise kept", why: "You said you'd work to earn them back. The quote with the same coverage is the proof, and you thank them for the chance.", say: "As promised, I prepared a quote with the same coverage you had. Thank you for giving us a chance to earn your business back." },
      a: { label: "\u201COut of curiosity, why did you switch?\u201D", why: "An invitation to tell the story. Their answer tells you what would bring them back.", say: "Out of curiosity, why did you switch?" }
    },
    asker: {
      m: { label: "\u201CIt has been exactly one year since you left\u201D", why: "Just the date. Questioners want the facts, not the feelings.", say: "Hi {first}, it's {rep}. It's been a year since you left, and our rates have changed." },
      f: { label: "The discount is back, line by line", why: "The accident-free discount returns at the same limits, side by side with what they have. A new fact makes coming back a fresh decision.", say: "I can give you back your accident-free discount on all your cars: {proposed} a month for the same limits. I'll send it side by side." },
      a: { label: "\u201CAre you still paying {current}/mo?\u201D", why: "Their own number, back to them. If price was why they left, one figure reopens it.", say: "Are you still paying {current} a month?" }
    },
    doer: {
      m: { label: "\u201CI hope you'll give me a chance to win you back\u201D", why: "Short and direct: a year, and an honest ask for another chance.", say: "Hi {first}, it's {rep}. It's been a year since you left, and I'd like a chance to win you back." },
      f: { label: "The quote is done", why: "Same coverage, discount back, nothing to fill out, switch handled. All they do is say yes.", say: "The quote is done, with your discount back. Nothing to fill out, and we handle the switch." },
      a: { label: "\u201CIs AM or PM better for a quick call?\u201D", why: "Two choices, both easy.", say: "Is AM or PM better to go over it?" }
    },
    thinker: {
      m: { label: "\u201CIt has been exactly one year since you left\u201D", why: "A plain date and no pressure. Thinkers need room to reconsider.", say: "Hi {first}, it's {rep}. It's been a year since you left, and I'm not calling to push." },
      f: { label: "Compare it without talking to anyone", why: "Same limits, the discount they'd get back, line by line, and no need to decide before renewal.", say: "I prepared a quote with the same limits you had and the discount you'd get back. I'll send it so you can compare it on your own." },
      a: { label: "\u201CWould it be a terrible idea to compare them?\u201D", why: "Explicit control, and a check-back tied to their date.", say: "Would it be a terrible idea to compare them before your renewal? You decide." }
    }
  },
  xdate: {
    story: {
      m: { label: "\u201CYou better be staying out of trouble! \u{1F609}\u201D", why: "Light humor honors the six months since you talked. Storytellers like being remembered as people.", say: "Hi {first}, it's {rep}. It's been six months since we quoted you. Staying out of trouble?" },
      f: { label: "A custom proposal, before the date", why: "Prepared for them and sent before the renewal, because that's the one date switching costs nothing.", say: "Your renewal is coming up, so I prepared a proposal for you. I'd rather you see it before the renewal than after." },
      a: { label: "\u201CShould I walk you through it, or would you rather read it first?\u201D", why: "Two good options, both theirs. Either answer moves it forward.", say: "Should I walk you through it now, or would you rather read it first?" }
    },
    asker: {
      m: { label: "\u201CIt's been 6 months since we last quoted you\u201D", why: "The fact, no small talk.", say: "Hi {first}, it's {rep}. It's been six months since we quoted you, and our rates have changed." },
      f: { label: "New rates, next to the last quote", why: "The new number with every discount, beside the old quote and their renewal offer, line by line.", say: "It's {proposed} a month for the same coverage, with every discount applied. I'll put it next to your renewal offer, line by line." },
      a: { label: "\u201CAre you still paying {current}/mo?\u201D", why: "Their number, so the comparison is real.", say: "Are you still paying {current} a month?" }
    },
    doer: {
      m: { label: "\u201CStaying out of trouble? \u{1F609}\u201D", why: "One light line, then straight to it.", say: "Hi {first}, it's {rep}. Staying out of trouble? Your renewal's coming up." },
      f: { label: "Nothing to do but yes or no", why: "The proposal is done and the switch is on us. Say how little it takes.", say: "The new proposal is done. Nothing for you to do but say yes or no, and we handle the switch." },
      a: { label: "\u201CIf no longer interested, simply reply NO. If yes, AM or PM?\u201D", why: "The easiest possible out, and the easiest possible yes.", say: "If it's a no, just say so. If yes, AM or PM?" }
    },
    thinker: {
      m: { label: "\u201CIt's been 6 months since we last quoted you\u201D", why: "Calm, factual, no rush.", say: "Hi {first}, it's {rep}. It's been six months since we quoted you. No rush on anything." },
      f: { label: "Why now: the renewal date", why: "A detailed proposal with every option, sent now so they can compare on their own time before the one day switching costs nothing.", say: "Our rates have changed, so I prepared a detailed proposal. I'm sending it now so you have time to compare before your renewal." },
      a: { label: "\u201CWould it be a terrible idea to take a closer look before you renew?\u201D", why: "A no-question, with the decision left with them.", say: "Would it be a terrible idea to take a closer look before you renew? You decide." }
    }
  },
  following: {
    story: {
      m: { label: "\u201CI haven't heard back from you in a while\u201D", why: "Say who you are and name the gap kindly. Storytellers go quiet when they feel they've let you down.", say: "Hi {first}, it's {rep} from your local office. I haven't heard back from you in a while about your quote." },
      f: { label: "\u201CI'd hate to feel like I'm bothering you\u201D", why: "Name the awkwardness. For a Storyteller the relationship is the reason to answer, so here the apology is the point.", say: "I'd hate to feel like I'm bothering you." },
      a: { label: "\u201CJust let me know, and I'll remove you from my follow-up list\u201D", why: "Going another direction is okay, and saying so is easy. Taking away the guilt gets the reply.", say: "If you went another direction, that's okay. Just let me know and I'll take you off my list." }
    },
    asker: {
      m: { label: "\u201CDid you see my email with the quote\u2026?\u201D", why: "Point to the numbers they already have. Questioners stall on details, not feelings.", say: "Hi {first}, it's {rep}. Did you get a chance to see the quote at {proposed} a month, line by line?" },
      f: { label: "Still good, and what would change it", why: "The quote holds for now, rates move, and a better number is welcome next to ours. Candor keeps the comparison open.", say: "It's still good for now. If you found a better number, I'd want to see it next to ours; if it's close, I can usually find the difference." },
      a: { label: "\u201CAre you still shopping, or did you go another direction?\u201D", why: "Either answer is fine, and one line is enough.", say: "Are you still shopping, or did you go another direction? Either answer is fine." }
    },
    doer: {
      m: { label: "\u201CDid you see my email with the quote?\u201D", why: "One line. Doers don't need the backstory.", say: "Hi {first}, it's {rep}. Did you see the quote?" },
      f: { label: "\u201CI'm starting to feel like I'm bugging you\u201D", why: "Name the silence in eight words, then get out of the way.", say: "I'm starting to feel like I'm bugging you." },
      a: { label: "\u201CYES or NO is all I need\u201D", why: "A one-word answer is the easiest reply there is.", say: "Should I keep following up? Yes or no is all I need." }
    },
    thinker: {
      m: { label: "\u201CI know this is a big decision\u201D", why: "Meet the hesitation: a lot to read, and a real decision.", say: "Hi {first}, it's {rep}. I know this is a big decision, and I sent you a lot to read." },
      f: { label: "Take your time; nobody is chasing you", why: "The proposal stays put, there's no pressure, and you'll check back a week before renewal. Space is what a Thinker needs to answer.", say: "Take your time. The proposal stays where it is, and I'll check back a week before your renewal." },
      a: { label: "\u201CWhat would need to be true for this to make sense for you?\u201D", why: "Turns \u201Clet me think\u201D into the one thing they'd need to know.", say: "What would need to be true for this to make sense for you?" }
    }
  }
};
const XSMS = {
  raw: { story: ["it's in your email with a short note", "Are you opposed"], asker: ["the limits and options are in your email", "How much are you paying now?"], doer: ["If you say yes, we handle the paperwork", "AM or PM?"], thinker: ["No rush; I'll check back", "Would it be a terrible idea"] },
  current: { story: ["your home insurance is elsewhere, and I don't see", "Are you opposed"], asker: ["Bundling home + auto", "How much are you paying on the home now?"], doer: ["I can quote it from what I already have", "Want the number?"], thinker: ["No action needed today", "Would it be a terrible idea"] },
  winback: { story: ["As promised, I prepared a quote", "Out of curiosity"], asker: ["Our rates have changed", "Are you still paying"], doer: ["I prepared the quote already", "Is AM or PM better"], thinker: ["I prepared a quote for your cars", "Would it be a terrible idea"] },
  xdate: { story: ["Your renewal is coming up", "Should I walk you through it"], asker: ["I know we weren't able to help you then", "Are you still paying"], doer: ["Your renewal is coming up", "If no longer interested"], thinker: ["Our rates have changed", "Would it be a terrible idea"] },
  following: { story: ["I'd hate to feel", "If you went another direction"], asker: ["It's still good for now", "Still shopping, or went another direction?"], doer: ["I'm starting to feel like I'm bugging you", "Should I keep following up?"], thinker: ["Take your time", "What would need to be true"] }
};
const XVM = {
  raw: "Hi {first}, it's {rep} from your local office. I'm the one taking care of the quote you requested. I'll {send} you so you have my number.",
  current: "Hi {first}, it's {rep} from your office. I was reviewing your account and noticed something worth a quick look. I'll {send} you the details.",
  winback: "Hi {first}, it's {rep}. It's been a year since you left, and I prepared something for you. I'll {send} you so it's easy to reply.",
  xdate: "Hi {first}, it's {rep}. Your renewal is coming up and your proposal is ready. I'll {send} it over; reply whenever it works for you.",
  following: "Hi {first}, it's {rep}. Just making sure you got the quote. No pressure; I'll {send} you so a one-word reply is all it takes."
};
const XESSENCE = {
  story: "Answer something they said. Offer a real person to call.",
  asker: "Figures first, line by line. Answer every question before adding anything.",
  doer: "Short. The work already done. One easy choice.",
  thinker: "No pressure. Something to think with. A date for the next touch."
};
const XLEVER_DEFS = [
  { k: "length", name: "Length", lo: "Short", hi: "Full" },
  { k: "detail", name: "Detail", lo: "Big picture", hi: "Line by line" },
  { k: "warmth", name: "Warmth", lo: "Plain", hi: "Personal" },
  { k: "timing", name: "The ask", lo: "Decide now", hi: "Their time" }
];
const XLEVER_STYLE = {
  story: { length: 70, detail: 34, warmth: 92, timing: 55 },
  asker: { length: 76, detail: 94, warmth: 32, timing: 45 },
  doer: { length: 14, detail: 20, warmth: 28, timing: 8 },
  thinker: { length: 60, detail: 72, warmth: 52, timing: 92 }
};
const XLEVER_SCEN = { raw: {}, current: { warmth: 4, detail: 4 }, winback: { warmth: 6 }, xdate: { timing: 6 }, following: { length: -12, detail: -10 } };
const XLEVER_CH = { email: {}, text: { length: -18, detail: -12 }, call: { length: -8, warmth: 6 } };
function xLeverValues(style, scenario, channel) {
  const base = XLEVER_STYLE[style] || XLEVER_STYLE.story, s = XLEVER_SCEN[scenario] || {}, c = XLEVER_CH[channel] || {};
  const out = {};
  for (const d of XLEVER_DEFS) out[d.k] = Math.max(4, Math.min(96, base[d.k] + (s[d.k] || 0) + (c[d.k] || 0)));
  return out;
}
function xFirst(name) {
  return String(name || "").split(" ")[0];
}
function xMoney(v) {
  return v == null ? null : "$" + v;
}
function xFillSay(text, lead, persona) {
  const p = lead ? lead.proposed != null ? lead.proposed : lead.proposedPremium : null;
  const c = lead ? lead.current != null ? lead.current : lead.currentPremium : null;
  const sms = !lead || !lead.consent || lead.consent.sms;
  return String(text || "").replace(/\{first\}/g, xFirst(lead && lead.name) || "there").replace(/\{rep\}/g, persona || "your agent").replace(/\{proposed\}/g, xMoney(p) || "the new number").replace(/\{current\}/g, xMoney(c) || "$X").replace(/\{send\}/g, sms ? "text" : "email");
}
function xFillLabel(text, lead) {
  return xFillSay(text, lead, null);
}
function xCopy(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).catch(() => {
      });
      return;
    }
  } catch (e) {
  }
  try {
    const t = document.createElement("textarea");
    t.value = text;
    t.setAttribute("readonly", "");
    t.style.position = "fixed";
    t.style.opacity = "0";
    document.body.appendChild(t);
    t.select();
    document.execCommand("copy");
    document.body.removeChild(t);
  } catch (e) {
  }
}
function XLevers({ style, scenario, channel, compact }) {
  const v = xLeverValues(style, scenario, channel);
  return /* @__PURE__ */ I.createElement("div", { className: "x-levers" + (compact ? " compact" : ""), "aria-label": "Style levers" }, /* @__PURE__ */ I.createElement("div", { className: "x-levers-head" }, "Style levers \xB7 ", channel === "call" ? "call" : channel === "text" ? "text" : "email"), XLEVER_DEFS.map((d) => /* @__PURE__ */ I.createElement("div", { key: d.k, className: "x-lever", title: `${d.name}: ${v[d.k] < 34 ? d.lo : v[d.k] > 66 ? d.hi : "between"}` }, /* @__PURE__ */ I.createElement("div", { className: "x-lever-name" }, d.name), /* @__PURE__ */ I.createElement("div", { className: "x-lever-track" }, /* @__PURE__ */ I.createElement("div", { className: "x-lever-fill x-fill-" + style, style: { width: v[d.k] + "%" } }), /* @__PURE__ */ I.createElement("div", { className: "x-lever-knob x-knob-" + style, style: { left: v[d.k] + "%" } })), /* @__PURE__ */ I.createElement("div", { className: "x-lever-ends" }, /* @__PURE__ */ I.createElement("span", null, d.lo), /* @__PURE__ */ I.createElement("span", null, d.hi)))));
}
function xSplit(body, email, scenario, style) {
  if (email) {
    const blocks = body.split("\n\n");
    let head = "", rest = blocks;
    if (/^(Hey|Hi|Hello)\b/.test(blocks[0]) && blocks[0].length < 40) {
      head = blocks[0] + "\n\n";
      rest = blocks.slice(1);
    }
    if (rest.length < 2) return [{ s: body }];
    const out = [{ s: head }, { k: 1, s: rest[0] }];
    const fit = rest.slice(1, -1).join("\n\n");
    if (fit) out.push({ s: "\n\n" }, { k: 2, s: fit });
    out.push({ s: "\n\n" }, { k: 3, s: rest[rest.length - 1] });
    return out;
  }
  const an = XSMS[scenario] && XSMS[scenario][style];
  if (!an) return [{ s: body }];
  const fi = body.indexOf(an[0]), ai = body.indexOf(an[1]);
  if (fi < 0 || ai < 0 || ai < fi) return [{ s: body }];
  const seg = (k, s) => {
    const t = s.replace(/\s+$/, "");
    return [{ k, s: t }, { s: s.slice(t.length) }];
  };
  return [...seg(1, body.slice(0, fi)), ...ai > fi ? seg(2, body.slice(fi, ai)) : [], { k: 3, s: body.slice(ai) }];
}
function XMarkedDraft({ body, tail, email, scenario, style, refresh, hover, setHover }) {
  const parts = xSplit(body, email, scenario, style);
  return /* @__PURE__ */ I.createElement("div", { className: "draft-body x-marked" + (refresh ? " refresh" : ""), onMouseLeave: () => setHover(0) }, parts.map(
    (p, i) => p.k ? /* @__PURE__ */ I.createElement("span", { key: i, className: `x-mv x-mv-${p.k}${hover === p.k ? " is-hot" : ""}`, onMouseEnter: () => setHover(p.k), onClick: () => setHover(hover === p.k ? 0 : p.k) }, /* @__PURE__ */ I.createElement("span", { className: `x-badge x-badge-${p.k} x-mv-n`, "data-n": p.k, "aria-hidden": "true" }), p.s) : /* @__PURE__ */ I.createElement(I.Fragment, { key: i }, p.s)
  ), tail);
}
const XMOVE_NAMES = ["Match", "Fit", "Ask"];
function XWhyPanel({ scenario, style, email, consentOk, premiumOk, quoteNumber, hover, setHover, lead }) {
  const sc = nf[scenario], st = rf[style], cell = XMOVES[scenario] && XMOVES[scenario][style];
  if (!sc || !st || !cell) return null;
  return /* @__PURE__ */ I.createElement("div", { className: "panel x-why" }, /* @__PURE__ */ I.createElement("div", { className: "panel-head" }, /* @__PURE__ */ I.createElement("div", { className: "title" }, "Why this draft"), /* @__PURE__ */ I.createElement("div", { className: "sub" }, "Three moves, in order. Point at one to see it in the draft.")), /* @__PURE__ */ I.createElement("div", { className: "panel-body" }, /* @__PURE__ */ I.createElement("div", { className: "rationale-item" }, /* @__PURE__ */ I.createElement("div", { className: "head" }, "Scenario"), /* @__PURE__ */ I.createElement("div", { className: "val" }, sc.label), /* @__PURE__ */ I.createElement("div", { className: "why" }, sc.why)), /* @__PURE__ */ I.createElement("div", { className: "rationale-item" }, /* @__PURE__ */ I.createElement("div", { className: "head" }, "Communication style \xB7 read from their first message"), /* @__PURE__ */ I.createElement("div", { className: "val" }, st.label), /* @__PURE__ */ I.createElement("div", { className: "why" }, st.why), /* @__PURE__ */ I.createElement(XLevers, { style, scenario, channel: email ? "email" : "text" })), ["m", "f", "a"].map((k, i) => /* @__PURE__ */ I.createElement(
    "div",
    {
      key: `${scenario}-${style}-${k}`,
      className: `rationale-item x-move x-move-${i + 1}${hover === i + 1 ? " is-hot" : ""}`,
      style: { animationDelay: `${i * 89}ms` },
      onMouseEnter: () => setHover(i + 1),
      onMouseLeave: () => setHover(0),
      onClick: () => setHover(hover === i + 1 ? 0 : i + 1)
    },
    /* @__PURE__ */ I.createElement("div", { className: "head" }, /* @__PURE__ */ I.createElement("span", { className: `x-badge x-badge-${i + 1}`, "data-n": i + 1, "aria-hidden": "true" }), XMOVE_NAMES[i]),
    /* @__PURE__ */ I.createElement("div", { className: "val" }, xFillLabel(cell[k].label, lead)),
    /* @__PURE__ */ I.createElement("div", { className: "why" }, cell[k].why)
  )), /* @__PURE__ */ I.createElement("div", { className: "rationale-item" }, /* @__PURE__ */ I.createElement("div", { className: "head" }, "Question type"), /* @__PURE__ */ I.createElement("div", { className: "val" }, st.q), /* @__PURE__ */ I.createElement("div", { className: "why" }, st.qWhy)), /* @__PURE__ */ I.createElement("div", { className: "rationale-item" }, /* @__PURE__ */ I.createElement("div", { className: "head" }, "Compliance check"), /* @__PURE__ */ I.createElement("ul", { className: "compliance-list" }, /* @__PURE__ */ I.createElement("li", { className: consentOk ? "pass" : "fail" }, consentOk ? "\u2713" : "\u2717", " ", email ? "Email" : "SMS", " consent on file"), /* @__PURE__ */ I.createElement("li", { className: "pass" }, "\u2713 Producer license appended"), /* @__PURE__ */ I.createElement("li", { className: premiumOk ? "pass" : "fail" }, premiumOk ? "\u2713" : "\u2717", " Premium pulled from quote ", quoteNumber || ""), /* @__PURE__ */ I.createElement("li", { className: "pass" }, "\u2713 ", email ? "CAN-SPAM unsubscribe via reply" : "STOP/HELP keywords")))));
}
const XSCEN_SRC = { raw: "IL", current: "CC", winback: "WB", xdate: "XD", following: "QN" };
const XSCEN_DAY = { raw: 0, current: 0, winback: 0, xdate: -7, following: 1 };
function xBestNow(scenario, style, lead, now) {
  const src = scenario === "raw" && lead && lead.source === "referral" ? "RF" : XSCEN_SRC[scenario];
  if (!src) return null;
  const contacted = scenario !== "raw";
  const consent = lead && lead.consent || { sms: true, email: true };
  const pseudo = { id: "compose", name: lead ? lead.name : "", style, source: src, day: XSCEN_DAY[scenario], done: src === "RF" ? 1 : 0, contacted, seen: scenario === "raw" ? 0 : null, consent };
  const steps = xDueToday(pseudo).today;
  if (!steps.length) return null;
  const step = steps[0], st = XSTYLE[style] || XSTYLE.story;
  const then = steps[1] ? `${XCH[xPickChannel(steps[1], pseudo, contacted).ch]} \xB7 ${steps[1].what.toLowerCase()}` : null;
  if (step.win === "now" || step.win === "soon") {
    const L = XLEGAL.call, W = XWIN[step.win];
    if (now >= L[0] && now < L[1] - 10) return { ch: "call", when: "Now", why: W.why, ref: W.ref, then: src === "RF" ? "an intro email about 20 minutes after the call, naming who sent them" : "the quote by email at ~20 minutes; call again at 30\u201360 minutes" };
    if (consent.email) return { ch: "email", when: "Now", why: "After 8 pm calls and texts wait for the morning; the quote can still go by email tonight", ref: "T7", then: "Call at 9:00 AM, when the office opens" };
    return { ch: "call", when: "9:00 AM", why: "The office opens at 9; calls are legal from 8 am their time", ref: "T7", then: null };
  }
  let allowed = step.ch.filter((c) => xAllowed(c, pseudo));
  if (!contacted && allowed.length > 1) allowed = allowed.filter((c) => c !== "text");
  if (!allowed.length) return { ch: step.ch[0], when: "Waits", why: "No consent on file for the channels this step uses", ref: "T7", then: null };
  const cands = [];
  for (const c of allowed) for (const wk of XCHWIN[c]) {
    const w = XWIN[wk], L = XLEGAL[c], lo = Math.max(w.lo, L[0]), hi = Math.min(w.hi, L[1]);
    const inNow = now >= lo && now < hi, at = inNow ? now : now < lo ? lo : lo + 1440;
    cands.push({ c, wk, w, inNow, at, rank: st.pref.indexOf(c) });
  }
  cands.sort((a, b2) => b2.inNow - a.inNow || (a.inNow ? a.rank - b2.rank : a.at - b2.at || a.rank - b2.rank));
  const b = cands[0];
  const when = b.inNow ? "Now" : b.at >= 1440 ? `Tomorrow ${xFmt(b.at - 1440)}` : xFmt(b.at);
  const top = st.pref.find((c) => allowed.includes(c));
  const styled = b.c === top ? st.short : `The hour picks ${XCH[b.c].toLowerCase()} ${b.inNow ? "now" : "next"}; a ${rf[style].label}'s first choice is ${XCH[top].toLowerCase()} (${xNextOpen(top, now)})`;
  return { ch: b.c, when, why: b.w.why, ref: b.w.ref, chWhy: styled, then };
}
function xNextOpen(c, now) {
  const opts = XCHWIN[c].map((wk) => {
    const w = XWIN[wk], L = XLEGAL[c], lo = Math.max(w.lo, L[0]), hi = Math.min(w.hi, L[1]);
    return now >= lo && now < hi ? now : now < lo ? lo : lo + 1440;
  });
  const at = Math.min(...opts);
  return at === now ? "open now" : at >= 1440 ? `tomorrow ${xFmt(at - 1440)}` : `best at ${xFmt(at)}`;
}
function XBestNow({ scenario, style, lead, channel, setChannel }) {
  useXS();
  const [, setTick] = I.useState(0);
  I.useEffect(() => {
    const t = setInterval(() => setTick((x) => x + 1), 15e3);
    return () => clearInterval(t);
  }, []);
  const now = xClock();
  const b = xBestNow(scenario, style, lead, now);
  if (!b) return null;
  const draftCh = channel === "sms" ? "text" : "email";
  const canSwitch = b.ch !== "call" && b.ch !== draftCh && setChannel;
  return /* @__PURE__ */ I.createElement("div", { className: `x-best x-best-${b.ch}`, "aria-live": "polite" }, /* @__PURE__ */ I.createElement("div", { className: "x-best-top" }, /* @__PURE__ */ I.createElement("span", { className: "x-best-k" }, b.when === "Now" ? "Now" : `Best at ${b.when}`), /* @__PURE__ */ I.createElement("span", { className: `x-chip x-chip-${b.ch}` }, XCH[b.ch]), /* @__PURE__ */ I.createElement("span", { className: "x-best-clock mono" }, xFmt(now))), /* @__PURE__ */ I.createElement("div", { className: "x-best-why" }, b.why, "."), b.chWhy && /* @__PURE__ */ I.createElement("div", { className: "x-best-then" }, b.chWhy, "."), b.then && /* @__PURE__ */ I.createElement("div", { className: "x-best-then" }, "Then: ", b.then), b.ch === "call" && /* @__PURE__ */ I.createElement("div", { className: "x-best-then" }, "This draft is the follow-up after the call."), canSwitch && /* @__PURE__ */ I.createElement("button", { className: "x-best-switch", onClick: () => setChannel(b.ch === "text" ? "sms" : "email") }, "Show the ", b.ch === "text" ? "text" : "email", " draft"));
}
function xCoachSaved() {
  try {
    const v = window.localStorage.getItem("acc.coach");
    return v == null ? true : v === "1";
  } catch (e) {
    return true;
  }
}
const XFRESH = (() => {
  try {
    return /[?&]fresh=1/.test(window.location.search);
  } catch (e) {
    return false;
  }
})();
const XVIEW0 = (() => {
  try {
    const m = /[?&]view=(workflow|classic|queue)(?=&|#|$)/.exec(window.location.search);
    return m ? m[1] : "workflow";
  } catch (e) {
    return "workflow";
  }
})();
const XS = { state: "US", done: {}, chan: {}, asks: {}, help: {}, miss: {}, pro: {}, cool: {}, open: null, clock: 11 * 60, clockAt: Date.now(), focus: false, bump: {}, view: XVIEW0, home: XVIEW0, wfStrike: {}, wfLast: null, wfScroll: null, seed: 7, coach: xCoachSaved(), seeded: false };
const XSEED_CALLS = ["quoted", "talked", "noanswer", "talked", "quoted", "noanswer", "talked", "noanswer"];
function xSeedUpTo(minutes, silent) {
  const apply = silent ? (patch) => Object.assign(XS, patch) : xSet;
  const base = { chan: {}, asks: {}, help: {}, miss: {}, pro: {}, cool: {}, open: null, bump: {}, wfStrike: {}, wfLast: null };
  if (minutes == null) {
    apply({ ...base, done: {} });
    return;
  }
  const cutoff = minutes - 20;
  let done = {}, asks = {}, ci = 0;
  const talkedLeads = [];
  for (let pass = 0; pass < 2; pass++) {
    XS.done = done;
    const day = xBuildDay(XQ, minutes);
    for (const t of day.touches.slice().sort((a, b) => a.slot - b.slot)) {
      if (t.tomorrow || t.slot > cutoff || done[t.id]) continue;
      if (t.wk === "now" && t.lead.seen != null) continue;
      let k;
      if (t.ch === "call") {
        if (pass === 0) continue;
        k = t.booked ? "talked" : XSEED_CALLS[ci++ % XSEED_CALLS.length];
        if (k === "talked" || k === "quoted") talkedLeads.push(t.lead.id);
      } else k = "sent";
      done = { ...done, [t.id]: { k, ch: t.ch, at: Date.now() - (minutes - t.slot) * 6e4, t: t.slot, by: XS.persona || "Alex", when: t.slot } };
    }
  }
  if (talkedLeads[0]) asks[talkedLeads[0]] = { life: true };
  if (talkedLeads[1]) asks[talkedLeads[1]] = { ref: true };
  const cool = {};
  if (typeof xOpenBlocks === "function" && typeof XCOOL !== "undefined") {
    XS.done = done;
    const blocks = xOpenBlocks(xBuildDay(XQ, minutes)).filter((g) => g[1] <= cutoff);
    blocks.forEach((g, bi) => XCOOL.slice(bi * 2, bi * 2 + 2).forEach((l) => {
      cool[l.id] = g[1] - 5;
    }));
  }
  apply({ ...base, done, asks, cool });
}
function xStartOver() {
  xSet({ clock: 9 * 60, clockAt: Date.now() });
  xSeedUpTo(null, false);
}
function xSetClock(v) {
  xSet({ clock: v, clockAt: Date.now() });
  xSeedUpTo(XFRESH ? null : v == null ? xRealClock() : v, false);
}
function xSetCoach(on) {
  try {
    window.localStorage.setItem("acc.coach", on ? "1" : "0");
  } catch (e) {
  }
  xSet({ coach: on });
}
const XSubs = /* @__PURE__ */ new Set();
function xSet(patch) {
  Object.assign(XS, typeof patch === "function" ? patch(XS) : patch);
  XSubs.forEach((f) => f());
}
function useXS() {
  const [, force] = I.useState(0);
  I.useEffect(() => {
    const f = () => force((x) => x + 1);
    XSubs.add(f);
    return () => {
      XSubs.delete(f);
    };
  }, []);
  return XS;
}
const XNav = { go: null };
function xRealClock() {
  const d = /* @__PURE__ */ new Date();
  return d.getHours() * 60 + d.getMinutes() + d.getSeconds() / 60;
}
function xClock() {
  return XS.clock != null ? XS.clock + (XS.clockAt ? Math.max(0, Date.now() - XS.clockAt) / 6e4 : 0) : xRealClock();
}
const XLOAD = xRealClock();
function xLanded(lead) {
  return (XS.clock != null ? XS.clock : XLOAD) - (lead.seen || 0);
}
function xFmt(min) {
  const m = (Math.round(min) % 1440 + 1440) % 1440, h = Math.floor(m / 60), mm = m % 60;
  return `${(h + 11) % 12 + 1}:${String(mm).padStart(2, "0")} ${h >= 12 ? "PM" : "AM"}`;
}
function xParseAt(s) {
  const m = /(\d+):(\d+)\s*(AM|PM)/i.exec(s || "");
  if (!m) return null;
  let h = +m[1] % 12;
  if (/pm/i.test(m[3])) h += 12;
  return h * 60 + +m[2];
}
const XREF = {};
const XSTATE = {
  US: { label: "Most states", hours: [8 * 60, 20 * 60], textConsent: "prior express written consent for marketing texts", cap: null, note: "The federal TCPA floor most states follow: 8 am\u20138 pm their time, written consent before marketing texts, the Do Not Call list honored. State overlays are a setting, never a change to the plan" },
  WA: { label: "Washington", hours: [8 * 60, 20 * 60], textConsent: "clear, affirmative consent in advance; a quote request is not consent", cap: null, note: "$100 statutory damages per unsolicited commercial text (RCW 19.190, ESHB 2274, from June 11, 2026)" },
  MD: { label: "Maryland", hours: [8 * 60, 20 * 60], textConsent: "prior express written consent", cap: 3, note: "Md. Code Com. Law \xA7 14-3201 et seq., in force since Jan 1, 2024" },
  FL: { label: "Florida", hours: [8 * 60, 20 * 60], textConsent: "written consent, a signature or checkbox", cap: 3, note: "FTSA as amended May 2023; a 15-day cure notice precedes any text suit" },
  OK: { label: "Oklahoma", hours: [8 * 60, 20 * 60], textConsent: "prior express written consent", cap: 3, note: "Okla. Stat. tit. 15 \xA7 775C, in force since Nov 1, 2022" },
  TX: { label: "Texas", hours: [9 * 60, 21 * 60], textConsent: "prior express consent", cap: null, note: "Federal floor; Texas registration for telephone solicitors; 9 am\u20139 pm" }
};
function xState() {
  return XSTATE[XS.state] || XSTATE.WA;
}
const XLEGAL = { get call() {
  return xState().hours;
}, get text() {
  return xState().hours;
}, email: [0, 24 * 60] };
const XDAY = { open: 9 * 60, close: 17 * 60, lunch: [12 * 60, 13 * 60] };
const XOPEN_LABEL = "9:00 AM";
const XWIN = {};
const XSRC = {
  IL: { label: "Internet lead", anchor: "the minute the lead arrives", steps: [
    { n: 1, day: 0, win: "now", ch: ["call"], what: "First call", ref: "T1" },
    { n: 2, day: 0, win: "m20", ch: ["email"], what: "Email the quote", ref: "T2" },
    { n: 3, day: 0, win: "m45", ch: ["call"], what: "Second call", ref: "T2", vm: 15 },
    { n: 4, day: 0, win: "m90", ch: ["call"], what: "Third call", ref: "T2" },
    { n: 5, day: 1, win: "call", ch: ["call"], what: "Fourth call", ref: "T3" },
    { n: 6, day: 4, win: "email", ch: ["email"], what: "Second email", ref: "T3" },
    { n: 7, day: 5, win: "reach", ch: ["call"], what: "Fifth call", ref: "T3" },
    { n: 8, day: 8, win: "emailpm", ch: ["email"], what: "Third email", ref: "T3" },
    { n: 9, day: 14, win: "email", ch: ["email"], what: "Fourth email", ref: "T3" },
    { n: 10, day: 15, win: "reach", ch: ["call"], what: "Sixth and last call", ref: "T3", vm: 30 },
    { n: 11, day: 22, win: "emailpm", ch: ["email"], what: "Last email: an easy out", ref: "T3" },
    { n: 12, day: 45, win: "email", ch: ["email", "text"], what: "Nurture: a short burst again", ref: "T15" },
    { n: 13, day: 180, win: "email", ch: ["email", "text"], what: "Six months: re-quote, or the X-date steps", ref: "T12" }
  ] },
  RF: { label: "Referral", anchor: "the day the referral comes in", steps: [
    { n: 1, day: 0, win: "soon", ch: ["call"], what: "Thank the referrer", ref: "T6", vm: 15 },
    { n: 2, day: 0, win: "soon", ch: ["call"], what: "Call the referral, naming who sent them", ref: "T6" },
    { n: 3, day: 0, win: "m20", ch: ["email"], what: "Intro email, naming who sent them", ref: "T2" },
    { n: 4, day: 0, win: "reach", ch: ["call"], what: "Second call", ref: "T3", vm: 15 },
    { n: 5, day: 1, win: "call", ch: ["call"], what: "Third call", ref: "T3" },
    { n: 6, day: 4, win: "email", ch: ["email"], what: "Second email", ref: "T3" },
    { n: 7, day: 5, win: "reach", ch: ["call"], what: "Fourth call", ref: "T3" },
    { n: 8, day: 8, win: "emailpm", ch: ["email"], what: "Third email", ref: "T3" },
    { n: 9, day: 10, win: "call", ch: ["call"], what: "Fifth call", ref: "T3" },
    { n: 10, day: 14, win: "email", ch: ["email"], what: "Fourth email", ref: "T3" },
    { n: 11, day: 15, win: "reach", ch: ["call"], what: "Sixth and last call", ref: "T3", vm: 30 },
    { n: 12, day: 22, win: "emailpm", ch: ["email"], what: "Last email: an easy out", ref: "T3" }
  ] },
  XD: { label: "X-date", anchor: "their renewal date, counting back", steps: [
    { n: 1, day: -60, win: "call", ch: ["call"], what: "Confirm the date and ask to reach out before it", ref: "T12" },
    { n: 2, day: -45, win: "email", ch: ["email"], what: "Email the proposal", ref: "T12" },
    { n: 3, day: -30, win: "textpm", ch: ["text", "call"], what: "One small ask", ref: "T12" },
    { n: 4, day: -21, win: "reach", ch: ["call"], what: "Call: the proposal is ready", ref: "T12", vm: 15 },
    { n: 5, day: -14, win: "call", ch: ["call"], what: "Their style's question, then the ask", ref: "T12" },
    { n: 6, day: -7, win: "text", ch: ["text", "email"], what: "One small ask", ref: "T12" },
    { n: 7, day: -3, win: "reach", ch: ["call"], what: "Last call before they renew", ref: "T12", vm: 30 },
    { n: 8, day: 1, win: "email", ch: ["text", "email"], what: "No switch: note the next date", ref: "T12" }
  ] },
  WB: { label: "Win-back", anchor: "the anniversary of leaving", steps: [
    { n: 1, day: -21, win: "email", ch: ["email"], what: "Before the anniversary", ref: "T13" },
    { n: 2, day: 0, win: "email", ch: ["email"], what: "Email the quote: the discount back or a bundle", ref: "T13" },
    { n: 3, day: 2, win: "textpm", ch: ["text", "call"], what: "One small ask", ref: "T10" },
    { n: 4, day: 5, win: "reach", ch: ["call"], what: "Ask why they switched", ref: "T13", vm: 15 },
    { n: 5, day: 10, win: "emailpm", ch: ["text", "email"], what: "Easy out", ref: "T9" },
    { n: 6, day: 180, win: "email", ch: ["email"], what: "Before their next renewal", ref: "T12" }
  ] },
  PI: { label: "Phone-in or walk-in", anchor: "the call or visit", steps: [
    { n: 1, day: 0, win: "now", ch: ["call"], what: "Quote while they're with you; ask for their OK to text", ref: "T7" },
    { n: 2, day: 0, win: "m20", ch: ["email"], what: "Email the recap and the quote", ref: "T9" },
    { n: 3, day: 1, win: "text", ch: ["text", "call"], what: "Did the quote come through?", ref: "T10" },
    { n: 4, day: 3, win: "reach", ch: ["call"], what: "Call for the decision", ref: "T10", vm: 15 },
    { n: 5, day: 7, win: "textpm", ch: ["text", "email"], what: "One small ask", ref: "T10" },
    { n: 6, day: 14, win: "emailpm", ch: ["text", "email"], what: "Easy out", ref: "T3" },
    { n: 7, day: 90, win: "email", ch: ["email"], what: "Re-quote at three months", ref: "T12" },
    { n: 8, day: 180, win: "email", ch: ["email", "text"], what: "Six months: re-quote or X-date steps", ref: "T12" }
  ] },
  QN: { label: "Quoted, no decision", anchor: "the day the quote went out", steps: [
    { n: 1, day: 1, win: "textpm", ch: ["text", "call"], what: "Did they see it?", ref: "T10" },
    { n: 2, day: 3, win: "reach", ch: ["call"], what: "Their style's question, then the ask", ref: "T3", vm: 15 },
    { n: 3, day: 5, win: "emailpm", ch: ["email"], what: "One reason to look again", ref: "T9" },
    { n: 4, day: 8, win: "call", ch: ["call"], what: "Find the one concern", ref: "T3" },
    { n: 5, day: 12, win: "emailpm", ch: ["text", "email"], what: "One small ask", ref: "T9" },
    { n: 6, day: 15, win: "reach", ch: ["call"], what: "Last call", ref: "T3", vm: 30 },
    { n: 7, day: 22, win: "email", ch: ["email"], what: "Still shopping?", ref: "T9" },
    { n: 8, day: 90, win: "email", ch: ["email", "text"], what: "Three months: re-quote", ref: "T12" },
    { n: 9, day: 180, win: "email", ch: ["email", "text"], what: "Six months: re-quote or X-date steps", ref: "T12" }
  ] },
  CC: { label: "Current customer", anchor: "the review date", steps: [
    { n: 1, day: 0, win: "call", ch: ["call"], what: "What the review showed", ref: "T12" },
    { n: 2, day: 0, win: "m20", ch: ["email"], what: "Email the proposal", ref: "T2" },
    { n: 3, day: 4, win: "textpm", ch: ["text", "call"], what: "One small ask", ref: "T10" },
    { n: 4, day: 10, win: "reach", ch: ["call"], what: "Find the one concern", ref: "T3", vm: 15 },
    { n: 5, day: 21, win: "emailpm", ch: ["email"], what: "No pressure; the option stays open", ref: "T9" },
    { n: 6, day: 365, win: "call", ch: ["call"], what: "Next review", ref: "T12" }
  ] },
  LE: { label: "Life event", anchor: "the day they told you", steps: [
    { n: 1, day: 0, win: "soon", ch: ["call"], what: "Congratulate, then ask what changed", ref: "T12" },
    { n: 2, day: 1, win: "email", ch: ["email"], what: "What changes, and the options", ref: "T9" },
    { n: 3, day: 4, win: "textpm", ch: ["call", "text"], what: "One small ask, then stop", ref: "T12" }
  ] },
  RI: { label: "Renewal, rate up", anchor: "their renewal date, counting back", steps: [
    { n: 1, day: -35, win: "call", ch: ["call"], what: "Call before the notice lands", ref: "T12" },
    { n: 2, day: -35, win: "m20", ch: ["email"], what: "Options side by side", ref: "T2" },
    { n: 3, day: -21, win: "textpm", ch: ["text", "call"], what: "One small ask", ref: "T12" },
    { n: 4, day: -14, win: "reach", ch: ["call"], what: "Find the one concern", ref: "T12", vm: 15 },
    { n: 5, day: -7, win: "emailpm", ch: ["text", "email"], what: "Last check", ref: "T12" }
  ] }
};
const XSTYLE = {};
function xScaledSteps(src) {
  return XSRC[src].steps.map((s) => ({ ...s, dayS: s.day }));
}
function xDueToday(lead) {
  const steps = xScaledSteps(lead.source, lead.style);
  const pending = steps.filter((s) => s.n > (lead.done || 0));
  const due = pending.filter((s) => s.dayS <= lead.day);
  if (!due.length) return { today: [], next: pending[0] || null, N: steps.length };
  const first = due[0].dayS;
  const today = due.filter((s) => s.dayS === first);
  const next = pending.find((s) => s.n > today[today.length - 1].n) || null;
  return { today, next, N: steps.length };
}
function xAllowed(c, lead) {
  if (c === "call") return !lead.dnc;
  if (c === "text") return !!(lead.consent && lead.consent.sms);
  return !!(lead.consent && lead.consent.email);
}
function xPickChannel(step, lead, contactedSoFar) {
  const st = XSTYLE[lead.style] || XSTYLE.story;
  let allowed = step.ch.filter((c) => xAllowed(c, lead));
  const c0 = step.ch[0];
  if (!allowed.length) return { ch: c0, blocked: true, reason: c0 === "call" ? "On the Do Not Call list; this step waits" : `No ${c0} consent on file; this step waits` };
  if (!contactedSoFar && allowed.includes("text")) {
    if (allowed.length === 1) return { ch: "text", blocked: true, reason: XSTYLE.noTextFirst };
    allowed = allowed.filter((c) => c !== "text");
    return { ch: st.pref.find((c) => allowed.includes(c)) || allowed[0], blocked: false, reason: XSTYLE.noTextFirst };
  }
  if (lead.consent && lead.consent.stop && step.ch.includes("text") && !allowed.includes("text")) {
    const pick2 = st.pref.find((c) => allowed.includes(c)) || allowed[0];
    return { ch: pick2, blocked: false, reason: `They texted STOP at ${lead.consent.stop}; texts are off, so this goes by ${pick2}` };
  }
  if (allowed.length === 1) return { ch: allowed[0], blocked: false, reason: step.ch.length > 1 ? "The one channel this step allows that they have okayed" : null };
  const pick = st.pref.find((c) => allowed.includes(c)) || allowed[0];
  return { ch: pick, blocked: false, reason: st.why ? st.why[pick] : null };
}
function xWindowFor(step, ch) {
  const w = step.win;
  if (w === "now" || w === "soon" || XWIN[w] && XWIN[w].rel) return w;
  if ((XCHWIN[ch] || []).includes(w)) return w;
  const late = w === "reach" || w === "emailpm" || w === "textpm";
  if (ch === "call") return late ? "reach" : "call";
  if (ch === "email") return late ? "emailpm" : "email";
  return late ? "textpm" : "text";
}
const XVM_ANY = { CC: 1, LE: 1, RI: 1 };
function xVoicemail(t) {
  if (!t || t.booked || XVM_ANY[t.lead.source]) return 15;
  return t.step.vm || null;
}
function xFreshKey(lead, now) {
  const w = Math.max(0, now - xLanded(lead));
  return w < 5 ? w : 100 + w;
}
const XPRI = { now: 0, booked: 1, xsoon: 2, referral: 3, due: 4, renew: 5, winback: 6 };
function xPriority(lead) {
  if (lead.seen != null && lead.day === 0) return XPRI.now;
  if (lead.at) return XPRI.booked;
  if ((lead.source === "XD" || lead.source === "RI") && lead.day >= -3) return XPRI.xsoon;
  if (lead.source === "RF" && lead.day === 0) return XPRI.referral;
  if (lead.source === "XD" || lead.source === "RI") return XPRI.renew;
  if (lead.source === "WB") return XPRI.winback;
  return XPRI.due;
}
function xBuildDay(leads, clock) {
  var _a;
  const now = clock == null ? xClock() : clock;
  const busy = /* @__PURE__ */ new Set();
  const key = (t) => Math.round(t / 5) * 5;
  const take = (t, len) => {
    for (let k = 0; k < len; k += 5) busy.add(key(t + k));
  };
  const isFree = (t, len) => {
    for (let k = 0; k < len; k += 5) if (busy.has(key(t + k))) return false;
    return true;
  };
  const dur = { call: 10, text: 5, email: 5 };
  const inLunch = (t, len) => t < XDAY.lunch[1] && t + len > XDAY.lunch[0];
  const place = (lo, hi, edge, len, thruLunch) => {
    const slots = [];
    for (let t = Math.ceil(lo / 5) * 5; t <= hi - len; t += 5) if (thruLunch || !inLunch(t, len)) slots.push(t);
    if (edge === "late") slots.reverse();
    for (const t of slots) if (isFree(t, len)) {
      take(t, len);
      return t;
    }
    return null;
  };
  const open = (ch) => Math.max(XLEGAL[ch][0], XDAY.open), tomorrowLabel = `Tomorrow ${XOPEN_LABEL}`;
  const talked = (lead) => Object.keys(XS.done).some((k) => k.startsWith(lead.id + "#") && /talked|quoted|signed|notnow/.test(XS.done[k].k));
  const doneAt = (lead, step) => {
    const d = XS.done[`${lead.id}#${step.n}`];
    return d && d.t != null ? d.t : null;
  };
  const plan = leads.map((lead) => {
    const d = xDueToday(lead);
    const items = d.today.map((step, i) => ({ step, i, fixed: !!lead.at && i === 0 || step.win === "now" || step.win === "soon" && i === 0 || doneAt(lead, step) != null }));
    return { lead, items, next: d.next, N: d.N, pri: xPriority(lead), style: XSTYLE[lead.style] || XSTYLE.story, anchor: null, contacted: !!lead.contacted || talked(lead) };
  });
  plan.sort((a, b) => a.pri - b.pri || (a.lead.seen != null && b.lead.seen != null ? xFreshKey(a.lead, now) - xFreshKey(b.lead, now) : 0));
  const touches = [];
  const schedule = (p, it) => {
    const lead = p.lead, step = it.step, booked = !!lead.at && it.i === 0, id = `${lead.id}#${step.n}`;
    const pick = booked ? { ch: "call", blocked: false, reason: null } : xPickChannel(step, lead, p.contacted);
    const ch = XS.done[id] && XS.done[id].ch || XS.chan[id] || pick.ch;
    let wk = booked ? "booked" : xWindowFor(step, ch);
    const legal = XLEGAL[ch], dt = booked ? null : doneAt(lead, step);
    let slot = null, label = "", tomorrow = false;
    if (booked) {
      slot = xParseAt(lead.at);
      take(slot, 30);
      label = lead.at;
    } else if (dt != null) {
      slot = dt;
      take(slot, dur[ch]);
      label = xFmt(slot);
    } else if (wk === "now") {
      const arrived = lead.seen != null ? Math.max(0, xLanded(lead)) : now;
      const by = Math.max(arrived, now), op = open(ch);
      if (by >= legal[1] - 10) {
        slot = op;
        tomorrow = true;
        label = tomorrowLabel;
      } else if (by < op) {
        slot = op;
        take(slot, dur[ch]);
        label = xFmt(slot);
      } else {
        slot = Math.max(arrived, op);
        take(Math.max(slot, now), dur[ch]);
        label = "Now";
      }
      if (!tomorrow) {
        p.anchor = Math.max(slot, Math.min(now, legal[1] - 10));
        p.anchorTomorrow = false;
      }
    } else if (wk === "soon") {
      const lo = Math.max(now, open(ch));
      if (lo >= legal[1] - 10) {
        slot = open(ch);
        tomorrow = true;
        label = tomorrowLabel;
      } else {
        slot = place(lo, Math.min(lo + 120, legal[1]), "early", dur[ch]);
        if (slot == null) slot = lo;
        label = xFmt(slot);
      }
    } else if (p.anchorTomorrow) {
      if (ch !== "email") return;
      slot = now;
      label = "Now";
    } else {
      const after = p.anchor != null ? p.anchor + 15 : null;
      const W = XWIN[wk];
      if (W && W.rel) {
        const base = p.anchor != null ? p.anchor : lead.seen != null ? xLanded(lead) : XDAY.open;
        const lo = Math.max(base + W.rel[0], legal[0]), hi = Math.min(base + W.rel[1], legal[1]);
        slot = lo < hi ? place(lo, hi, "early", dur[ch]) : null;
        if (slot == null && lo < hi) slot = place(lo, Math.min(hi + 30, legal[1]), "early", dur[ch]);
        if (slot == null && lo < hi) slot = place(lo, Math.min(hi + 30, legal[1]), "early", dur[ch], true);
        if (slot == null && lo < legal[1]) slot = lo;
        if (slot == null) return;
      } else {
        const from = after != null ? after : 0;
        for (const k of [wk, ...(XCHWIN[ch] || []).filter((x) => x !== wk)]) {
          const w = XWIN[k];
          if (!w || w.lo == null) continue;
          slot = place(Math.max(w.lo, legal[0], from), Math.min(w.hi, legal[1]), p.style.edge, dur[ch]);
          if (slot != null) {
            wk = k;
            break;
          }
        }
        if (slot == null) {
          slot = place(Math.max(XDAY.open, legal[0], from), Math.min(XDAY.close, legal[1]), p.style.edge, dur[ch]);
          if (slot != null) wk = "open";
        }
        if (slot == null) {
          const w = W || XWIN.email;
          slot = Math.max(w.lo, legal[0], from);
        }
      }
      label = xFmt(slot);
    }
    if (p.anchor == null) {
      p.anchor = slot;
      p.anchorTomorrow = tomorrow;
    }
    touches.push({ id, lead, step, i: it.i, ch, wk, slot, label, booked, tomorrow, blocked: pick.blocked, chReason: pick.reason, p, doneAt: dt });
  };
  for (const p of plan) for (const it of p.items) if (it.fixed) schedule(p, it);
  for (const p of plan) for (const it of p.items) if (!it.fixed) schedule(p, it);
  for (const t of touches) {
    if (t.ch === "email" || t.tomorrow || XS.done[t.id]) continue;
    const L = XLEGAL[t.ch];
    if (t.slot >= L[1] || t.slot <= now && now >= L[1] - 10) {
      t.tomorrow = true;
      t.slot = open(t.ch);
      t.label = tomorrowLabel;
      t.late = true;
    }
  }
  const cap = xState().cap;
  if (cap) {
    const byLead = {};
    for (const t of touches) if (t.ch === "call" && !t.tomorrow) (byLead[_a = t.lead.id] || (byLead[_a] = [])).push(t);
    for (const id of Object.keys(byLead)) {
      const calls = byLead[id].sort((a, b) => a.slot - b.slot);
      calls.slice(cap).forEach((t) => {
        if (!XS.done[t.id]) {
          t.tomorrow = true;
          t.slot = open("call");
          t.label = tomorrowLabel;
          t.capped = true;
        }
      });
    }
  }
  touches.sort((a, b) => a.tomorrow - b.tomorrow || a.slot - b.slot || a.p.pri - b.p.pri);
  return { touches, plan, now };
}
function xDayLabel(lead) {
  const d = lead.day || 0, back = lead.source === "XD" || lead.source === "RI";
  if (back) return d === 0 ? "X-date" : d < 0 ? `X \u2212 ${-d}` : `X + ${d}`;
  return `Day ${d}`;
}
function xNextLabel(p) {
  const nx = p.next;
  if (!nx) return "Last step of this plan";
  const back = p.lead.source === "XD" || p.lead.source === "RI", d = nx.dayS;
  const when = back ? d < 0 ? `X \u2212 ${-d}` : "the day after the renewal" : `Day ${d}`;
  return `Next: ${when} \xB7 ${nx.what}`;
}
function xTouchWhy(t) {
  if (t.booked && !t.late) return "They picked this time. Be early.";
  const w = XWIN[t.wk];
  const parts = [t.capped ? `${xState().label} caps calls at ${xState().cap} to one person in 24 hours; this one waits for tomorrow` : t.tomorrow ? "After 8 pm, calls and texts wait for the morning: the office opens at 9" : w ? w.why : ""];
  if (t.chReason) parts.push(t.chReason);
  return parts.filter(Boolean).map((s) => s.replace(/\.$/, "")).join(". ") + ".";
}
function xRand(seed) {
  let a = seed >>> 0;
  return () => {
    a = a + 1831565813 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function xShuffle(arr, r) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(r() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
const XARRIVE = [9 * 60 + 5, 10 * 60 + 40, 13 * 60 + 20];
const XUSUAL = {
  start: 9 * 60 + 15,
  lunch: [12 * 60, 13 * 60],
  stop: 17 * 60,
  checks: [9 * 60 + 15, 11 * 60 + 15, 13 * 60 + 15, 15 * 60 + 15],
  mix: { call: 0.6, email: 0.25, text: 0.15 },
  styleMatch: 0.25,
  attempts: 2
};
function xUsualDay(leads, seed) {
  const r = xRand(seed);
  const newIdx = leads.map((l, i) => l.seen != null && l.day === 0 ? i : -1).filter((i) => i >= 0);
  const arrive = {};
  newIdx.forEach((i, k) => {
    arrive[leads[i].id] = XARRIVE[k % XARRIVE.length];
  });
  const others = xShuffle(leads.filter((l) => arrive[l.id] == null), r);
  const out = [];
  let t = XUSUAL.start;
  const nextFree = (from) => {
    let x = Math.max(from, t);
    if (x >= XUSUAL.lunch[0] && x < XUSUAL.lunch[1]) x = XUSUAL.lunch[1];
    return x;
  };
  const pickCh = () => {
    const x = r();
    return x < XUSUAL.mix.call ? "call" : x < XUSUAL.mix.call + XUSUAL.mix.email ? "email" : "text";
  };
  for (const lead of others) {
    if (lead.at) {
      out.push({ lead, slot: xParseAt(lead.at), ch: "call", fits: r() < XUSUAL.styleMatch, booked: true });
      continue;
    }
    const s = nextFree(t);
    if (s > XUSUAL.stop) {
      out.push({ lead, slot: null });
      continue;
    }
    out.push({ lead, slot: s, ch: pickCh(), fits: r() < XUSUAL.styleMatch });
    t = s + 8 + Math.floor(r() * 15);
  }
  for (const id of Object.keys(arrive)) {
    const lead = leads.find((l) => l.id === id), a = arrive[id];
    const check = XUSUAL.checks.find((c) => c >= a) || XUSUAL.checks[XUSUAL.checks.length - 1] + 120;
    out.push({ lead, slot: check + Math.floor(r() * 21), ch: pickCh(), fits: r() < XUSUAL.styleMatch, arrived: a });
  }
  return out;
}
function xPlanCanon(leads) {
  const k = { i: 0 };
  const arrive = {};
  leads.forEach((l) => {
    if (l.seen != null && l.day === 0) arrive[l.id] = XARRIVE[k.i++ % XARRIVE.length];
  });
  const saved = { done: XS.done, clock: XS.clock, clockAt: XS.clockAt, chan: XS.chan };
  XS.done = {};
  XS.chan = {};
  XS.clock = 8 * 60;
  XS.clockAt = null;
  let day;
  try {
    day = xBuildDay(leads.map((l) => arrive[l.id] != null ? { ...l, seen: 0 } : l), 8 * 60);
  } finally {
    XS.done = saved.done;
    XS.clock = saved.clock;
    XS.clockAt = saved.clockAt;
    XS.chan = saved.chan;
  }
  for (const t of day.touches) {
    const a = arrive[t.lead.id], W = XWIN[t.wk];
    if (a == null) continue;
    if (t.wk === "now" || t.wk === "soon" || W && W.rel) t.slot = t.slot - 8 * 60 + a + 2;
  }
  return { touches: day.touches, arrive };
}
function xCompare(leads, seed) {
  const plan = xPlanCanon(leads), usual = xUsualDay(leads, seed);
  const inBest = (m) => m >= XWIN.call.lo && m < XWIN.call.hi || m >= XWIN.reach.lo && m < XWIN.reach.hi;
  const newIds = Object.keys(plan.arrive).filter((id) => plan.touches.some((t) => t.lead.id === id && t.wk === "now"));
  const planFirst = newIds.map((id) => {
    const c = plan.touches.filter((t) => t.lead.id === id && t.ch === "call").sort((a, b) => a.slot - b.slot)[0];
    return c ? c.slot - plan.arrive[id] : null;
  }).filter((x) => x != null);
  const usualFirst = usual.filter((u) => u.arrived != null && newIds.includes(u.lead.id)).map((u) => u.ch === "call" ? u.slot - u.arrived : null);
  const avg = (a) => a.length ? Math.round(a.reduce((s, x) => s + x, 0) / a.length) : null;
  const usualCalled = usualFirst.filter((x) => x != null);
  const planDayOne = newIds.length ? plan.touches.filter((t) => newIds.includes(t.lead.id)).length / newIds.length : 0;
  const usualFit = usual.filter((u) => u.slot != null).filter((u) => u.fits).length, usualAll = usual.filter((u) => u.slot != null).length;
  const planCalls = plan.touches.filter((t) => t.ch === "call" && !t.booked && t.wk !== "now" && t.wk !== "soon" && !(XWIN[t.wk] && XWIN[t.wk].rel));
  const usualCalls = usual.filter((u) => u.ch === "call" && !u.booked && u.arrived == null && u.slot != null);
  const breaks = (u) => u.ch === "text" && !(u.lead.consent && u.lead.consent.sms) || u.ch === "email" && !(u.lead.consent && u.lead.consent.email);
  const usualBreaks = usual.filter((u) => u.slot != null && breaks(u)).length;
  const planBreaks = plan.touches.filter((t) => breaks(t)).length;
  const usualMissed = usual.filter((u) => u.slot == null).length;
  const planMissed = leads.filter((l) => !plan.touches.some((t) => t.lead.id === l.id)).length;
  const pct = (a, b) => b ? Math.round(a / b * 100) : 0;
  const burst = XSRC.IL.steps.filter((s) => s.day <= 22);
  const callsIL = burst.filter((s) => s.ch[0] === "call").length, emailsIL = burst.filter((s) => s.ch[0] === "email").length;
  return [
    { k: "First call to a new lead", plan: `${avg(planFirst)} min after it lands`, usual: usualCalled.length ? `${avg(usualCalled)} min, for ${usualCalled.length} of ${usualFirst.length}` : `no call today for ${usualFirst.length}`, why: "Speed is the strongest single lever in the lead-response data", ref: ["T1"] },
    { k: "Touches on a new lead's first day", plan: `${planDayOne.toFixed(0)}: a call now, the quote by email at ~20 min, calls at 30\u201360 min and 1\u20132 h`, usual: "1", why: "Three tries on day one is the floor; the emailed quote makes the next call likelier to connect", ref: ["T2", "T3"] },
    { k: "Calls before the plan stops", plan: `${callsIL} calls and ${emailsIL} emails over 22 days, then a short burst at 45`, usual: `about ${XUSUAL.attempts}`, why: "93% of eventual buyers were reached by the sixth call; insurers audited averaged 1.45 attempts", ref: ["T3", "T15"] },
    { k: "Words fitted to the person", plan: "Every draft, for the style on file", usual: `${pct(usualFit, usualAll)}% (one template fits about one style in four)`, why: "Adapting tracks with sales, but a wrong style guess about halves the response: set it on a clear signal", ref: ["T11"] },
    { k: "Later calls in their windows", plan: `${pct(planCalls.filter((t) => inBest(t.slot)).length, planCalls.length)}% at 10\u2013noon or 3\u20135 pm, lunch free`, usual: `${pct(usualCalls.filter((u) => inBest(u.slot)).length, usualCalls.length)}%`, why: "The hour matters least of these (about 2.6 contact points), but it costs nothing", ref: ["T4", "T5"] },
    { k: "Touches that skip consent", plan: `${planBreaks}`, usual: `${usualBreaks}`, why: "Washington: no commercial text without their OK in advance, $100 a text; the plan can't pick a channel they haven't okayed", ref: ["T7"] },
    { k: "People with no touch today", plan: `${planMissed}`, usual: `${usualMissed}`, why: "Without an order, the end of the list is whoever the day runs out on; audits found 39% of leads never called", ref: ["T15"] }
  ];
}
function xSampleSize(p1, p2, power) {
  const za = 1.959964, zb = power >= 0.9 ? 1.281552 : 0.841621;
  const pb = (p1 + p2) / 2, d = Math.abs(p2 - p1);
  if (!(d > 0) || p1 <= 0 || p2 >= 1) return null;
  const num = za * Math.sqrt(2 * pb * (1 - pb)) + zb * Math.sqrt(p1 * (1 - p1) + p2 * (1 - p2));
  return Math.ceil(num * num / (d * d));
}
const TB_PHI = 1.618;
const TB_COLORS = {
  call: { c: "#1F6FD1", top: "#8FB7EA", front: "#E1ECFB", right: "#174F93" },
  text: { c: "#178A5B", top: "#8BC9AC", front: "#DFF3E8", right: "#116543" },
  email: { c: "#B8640F", top: "#DCB086", front: "#FBEBD9", right: "#8A4A0B" },
  ok: { c: "#2E7D4F", top: "#95C2A6", front: "#DFF3E8", right: "#225C3B" },
  bad: { c: "#8C2F39", top: "#C59299", front: "#F6E3E5", right: "#66222A" }
};
const TB_GLYPH = {
  // 24×24 line glyphs, white, 2-px strokes, upright on the top face
  call: '<path d="M6 3h4l2 5-2.5 1.5a11 11 0 0 0 5 5L16 12l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2z"/>',
  text: '<path d="M4 5h16v10H9l-5 4z"/>',
  email: '<path d="M3 6h18v12H3z M3 6l9 7 9-7"/>'
};
function timeBoxSVG(o) {
  const h = o.h || 21, w = Math.round(h * TB_PHI), d = h / TB_PHI, dx = d * 0.5, dy = d * 0.5;
  const st = o.state || "planned";
  const pal = TB_COLORS[st === "done" ? "ok" : st === "blocked" ? "bad" : o.ch || "call"] || TB_COLORS.call;
  const done = st === "done";
  const H = done ? Math.round(h / TB_PHI) : h;
  const W = w + dx, VH = H + dy, x0 = 0, y0 = dy;
  const frac = done || st === "blocked" ? 0 : Math.max(0, Math.min(1, o.frac || 0));
  const fillH = frac * H;
  const top = `${x0},${y0} ${x0 + w},${y0} ${x0 + w + dx},${y0 - dy} ${x0 + dx},${y0 - dy}`;
  const right = `${x0 + w},${y0} ${x0 + w + dx},${y0 - dy} ${x0 + w + dx},${y0 - dy + H} ${x0 + w},${y0 + H}`;
  const small = h <= 21;
  const fs = small ? 9.5 : h <= 34 ? 13 : 21;
  const inkOnFill = !small && frac > 0.55;
  const fillOpacity = small ? 0.38 : 1;
  const labelColor = done || st === "blocked" ? "#fff" : inkOnFill ? "#fff" : "#1A2330";
  const label = done ? "" : st === "blocked" ? "" : o.label || "";
  const sub = done || st === "blocked" ? "" : o.sub || "";
  const glyph = !small && TB_GLYPH[o.ch] ? `<g transform="translate(${x0 + dx / 2 + w / 2 - dy * 0.375},${y0 - dy + dy * 0.125}) scale(${dy * 0.75 / 24})" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round" stroke-linecap="round">${TB_GLYPH[o.ch]}</g>` : "";
  const mark = st === "approved" || done ? "\u2713" : st === "blocked" ? "!" : "";
  const markSize = small ? 9 : h <= 34 ? 13 : 21;
  const markEl = mark ? `<text x="${done ? x0 + w / 2 : x0 + w + dx / 2}" y="${done ? y0 + H / 2 + markSize * 0.36 : y0 + H / 2 + markSize * 0.36 - dy / 2}" text-anchor="middle" font-size="${done ? markSize * 1.3 : markSize}" font-weight="700" fill="#fff" font-family="var(--mono, ui-monospace, monospace)">${mark}</text>` : "";
  const title = o.title || "";
  return `<svg class="tb tb-${st} tb-${o.ch || "call"}" viewBox="0 0 ${W} ${VH}" width="${W}" height="${VH}" role="img" aria-label="${title}"${title ? ` data-title="${title}"` : ""}>${title ? `<title>${title}</title>` : ""}
<polygon class="tb-top" points="${top}" fill="${pal.top}"/>
<polygon class="tb-right" points="${right}" fill="${pal.right}"/>
<rect class="tb-front" x="${x0}" y="${y0}" width="${w}" height="${H}" fill="${done || st === "blocked" ? pal.c : pal.front}"/>
${fillH > 0 ? `<rect class="tb-fill" x="${x0}" y="${y0 + H - fillH}" width="${w}" height="${fillH}" fill="${pal.c}" fill-opacity="${fillOpacity}"/><rect x="${x0}" y="${y0 + H - fillH}" width="${w}" height="1" fill="${pal.right}" opacity=".6"/>` : ""}
<rect class="tb-ring" x="${x0 + 0.5}" y="${y0 + 0.5}" width="${w - 1}" height="${H - 1}" fill="none" stroke="${pal.right}" stroke-opacity=".35"/>
${label ? (() => {
    const lw = label.length * fs * 0.6, sw = sub ? sub.length * fs * 0.55 * 0.6 + fs * 0.2 : 0;
    const start = x0 + w / 2 - (lw + sw) / 2, halo = inkOnFill ? pal.right : "#fff";
    return `<text class="tb-label" x="${start}" y="${y0 + H / 2 + fs * 0.36}" font-size="${fs}" font-weight="500" fill="${labelColor}" stroke="${halo}" stroke-width="${fs * 0.18}" stroke-linejoin="round" paint-order="stroke" font-family="var(--mono, ui-monospace, monospace)">${label}</text>` + (sub ? `<text class="tb-sub" x="${start + lw + fs * 0.2}" y="${y0 + H / 2 + fs * 0.36}" font-size="${fs * 0.55}" fill="${labelColor}" stroke="${halo}" stroke-width="${fs * 0.12}" paint-order="stroke" font-family="var(--mono, ui-monospace, monospace)">${sub}</text>` : "");
  })() : ""}
${glyph}${markEl}</svg>`;
}
function markSVG(o) {
  const h = 8, w = 13, d = 5, dx = 2.5, dy = 2.5, W = w + dx, VH = h + dy, y0 = dy;
  const pal = TB_COLORS[o.kind === "ok" ? "ok" : o.kind] || TB_COLORS.ok;
  const on = !!o.on;
  const top = `0,${y0} ${w},${y0} ${w + dx},${y0 - dy} ${dx},${y0 - dy}`;
  const right = `${w},${y0} ${w + dx},${y0 - dy} ${w + dx},${y0 - dy + h} ${w},${y0 + h}`;
  const body = on ? `<polygon points="${top}" fill="${pal.top}"/><polygon points="${right}" fill="${pal.right}"/><rect x="0" y="${y0}" width="${w}" height="${h}" fill="${pal.c}"/><path d="M3.2 ${y0 + 4.2} l2.4 2.4 l4.4 -4.6" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>` : `<polygon points="${top}" fill="none" stroke="${pal.c}" stroke-width=".9" stroke-opacity=".55"/><polygon points="${right}" fill="none" stroke="${pal.c}" stroke-width=".9" stroke-opacity=".55"/><rect x=".45" y="${y0 + 0.45}" width="${w - 0.9}" height="${h - 0.9}" fill="none" stroke="${pal.c}" stroke-width=".9" stroke-opacity=".7"/>${o.barred ? `<path d="M1.5 ${y0 + h - 1.5} L${w - 1.5} ${y0 + 1.5}" stroke="${pal.c}" stroke-width="1.2" stroke-linecap="round"/>` : ""}`;
  return `<svg class="tbm tbm-${o.kind}${on ? " on" : ""}" viewBox="0 0 ${W} ${VH}" width="${W}" height="${VH}" role="img" aria-label="${o.title || ""}"><title>${o.title || ""}</title>${body}</svg>`;
}
function xTbEsc(s) {
  return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function XTimeBox({ h, ch, label, sub, frac, state, title, badge }) {
  const [still, setStill] = I.useState(false);
  I.useEffect(() => {
    if (state !== "due") return void 0;
    setStill(false);
    const id = setTimeout(() => setStill(true), 1700);
    return () => clearTimeout(id);
  }, [state]);
  const q = Math.round(Math.max(0, Math.min(1, frac || 0)) * 55) / 55;
  const html = timeBoxSVG({ h: h || 21, ch: ch || "call", label: label || "", sub: sub || "", frac: q, state: state || "planned", title: xTbEsc(title) }) + (badge ? `<span class="tb-badge" aria-hidden="true">${xTbEsc(badge)}</span>` : "");
  return /* @__PURE__ */ I.createElement("span", { className: "tb-wrap" + (still ? " tb-still" : ""), dangerouslySetInnerHTML: { __html: html } });
}
function xMarks(lead, v) {
  const c = lead.consent || {};
  const first = xFirst(lead.name);
  const email = c.email ? { kind: "email", on: true, title: "Email ready: OK on file" } : { kind: "email", on: false, title: "Email waits: no OK on file" };
  const talked = !!lead.contacted || !!(v && v.p && v.p.contacted);
  const text = c.stop ? { kind: "text", on: false, barred: true, title: "Texted STOP" } : !c.sms ? { kind: "text", on: false, barred: true, title: "Text waits: no OK on file" } : !talked ? { kind: "text", on: false, title: "Text waits: after the first conversation" } : { kind: "text", on: true, title: "Text ready: OK on file" };
  const ts = v ? v.ts : [];
  const consentOk = ts.filter((t) => t.ch !== "call").every((t) => xAllowed(t.ch, lead));
  const hoursOk = ts.filter((t) => t.ch !== "email" && !t.tomorrow && !XS.done[t.id]).every((t) => t.slot >= XLEGAL[t.ch][0] && t.slot < XLEGAL[t.ch][1]);
  const dncOk = !lead.dnc;
  const okAll = consentOk && hoursOk && dncOk;
  const why = !consentOk ? "a touch has no consent on file" : !hoursOk ? "a touch sits outside the legal hours" : "on the Do Not Call list";
  const comp = okAll ? { kind: "ok", on: true, title: `Compliance \u2713: consent, hours and state rules (${xState().label}) checked for ${first} today` } : { kind: "ok", on: false, title: `Compliance: needs a look, ${why}` };
  return [email, text, comp];
}
function XMarks({ lead, v }) {
  const ms = xMarks(lead, v);
  const html = `<span class="tbm-row">${ms.map((m) => markSVG({ kind: m.kind, on: m.on, barred: m.barred, title: xTbEsc(m.title) })).join("")}</span>`;
  return /* @__PURE__ */ I.createElement("span", { className: "tb-wrap x-marks", role: "group", "aria-label": ms.map((m) => m.title).join(" \xB7 "), dangerouslySetInnerHTML: { __html: html } });
}
try {
  const de = document.documentElement;
  if (!de.hasAttribute("data-theme")) de.setAttribute("data-theme", "light");
} catch (e) {
}
const XLZ_KINDS = ["information", "success", "warning", "danger", "discovery", "story", "asker", "doer", "thinker"];
function Lozenge({ appearance, bold, children, title, className }) {
  const a = XLZ_KINDS.includes(appearance) ? " lz-" + appearance : "";
  return /* @__PURE__ */ I.createElement("span", { className: "lz" + a + (bold ? " bold" : "") + (className ? " " + className : ""), title }, children);
}
function ProgressTracker({ steps, current }) {
  const list = (steps || []).map((s) => Array.isArray(s) ? s : [s, s]);
  return /* @__PURE__ */ I.createElement("ol", { className: "pt", "aria-label": `Step ${(current || 0) + 1} of ${list.length}` }, list.map(([k, label], i) => /* @__PURE__ */ I.createElement("li", { key: k, className: i < current ? "visited" : i === current ? "current" : "", "aria-current": i === current ? "step" : void 0 }, label)));
}
const XSM_ICON = { information: "i", discovery: "?", warning: "!", danger: "!", success: "\u2713" };
function SectionMessage({ appearance, title, children, action }) {
  const a = XSM_ICON[appearance] ? appearance : "information";
  return /* @__PURE__ */ I.createElement("div", { className: "sm sm-" + a, role: a === "warning" || a === "danger" ? "alert" : "note" }, /* @__PURE__ */ I.createElement("span", { className: "sm-icon", "aria-hidden": "true" }, XSM_ICON[a]), /* @__PURE__ */ I.createElement("div", null, title && /* @__PURE__ */ I.createElement("div", { className: "sm-title" }, title), /* @__PURE__ */ I.createElement("div", { className: "sm-body" }, children), action && /* @__PURE__ */ I.createElement("button", { type: "button", className: "sm-action", onClick: action.onClick }, action.label)));
}
function EmptyState({ children, action }) {
  return /* @__PURE__ */ I.createElement("div", { className: "es" }, /* @__PURE__ */ I.createElement("div", null, children), action && /* @__PURE__ */ I.createElement("button", { type: "button", className: "es-action", onClick: action.onClick }, action.label));
}
function XStyleLz({ style, title }) {
  const st = rf[style];
  return /* @__PURE__ */ I.createElement("span", { className: `lz lz-${style} style-pill ${style}`, title: title || "Communication style" }, st ? st.label : style);
}
const LH_EVENTS = [
  ["baby", "the baby"],
  ["pregnant", "the baby"],
  ["expecting", "the baby"],
  ["newborn", "the baby"],
  ["married", "the wedding"],
  ["engaged", "the engagement"],
  ["wedding", "the wedding"],
  ["fianc\xE9", "the engagement"],
  ["fiance", "the engagement"],
  ["bought a house", "the new house"],
  ["new home", "the new house"],
  ["new house", "the new house"],
  ["closing", "the new house"],
  ["mortgage", "the mortgage"],
  ["refinance", "the refinance"],
  ["refinanced", "the refinance"],
  ["refinancing", "the refinance"],
  ["refi", "the refinance"],
  ["new business", "the new business"],
  ["llc", "the new business"],
  ["started a company", "the new business"],
  ["self-employed", "the business"],
  ["self employed", "the business"],
  ["kids", "the kids"],
  ["daughter", "your daughter"],
  ["son", "your son"],
  ["college", "college"],
  ["tuition", "college"],
  ["retire", "retirement"],
  ["retired", "retirement"],
  ["retiring", "retirement"],
  ["retirement", "retirement"],
  ["aging parent", "your parents"],
  ["my mom", "your mom"],
  ["my dad", "your dad"],
  ["moving in with us", "your parents"],
  ["new job", "the new job"],
  ["raise", "the raise"],
  ["promotion", "the promotion"],
  ["promoted", "the promotion"],
  ["children", "the kids"],
  ["kid", "the kids"],
  ["pregnancy", "the baby"],
  ["twins", "the babies"]
];
const LH_PROTECT = ["protect", "protected", "protecting", "protection", "family", "income", "if something happened", "if something happens", "depends on me", "breadwinner", "provide for", "payments", "payment", "loan", "loans", "who would pay", "who pays"];
const LH_COVER = ["life insurance", "term policy", "term life", "through work", "group life", "disability", "health plan", "medical bills", "out of work", "surgery", "hospital", "long-term care", "long term care"];
const LH_PUSH = ["not interested", "too expensive", "stop", "busy", "call me later", "don't need", "do not need", "no thanks", "not right now", "not now", "maybe later"];
const LH_STYLE_MOD = { story: (hasEvent) => hasEvent ? 10 : 0, asker: () => 0, doer: (_, green) => green ? 0 : -10, thinker: () => -10 };
function lhFind(text, list) {
  const t = (text || "").toLowerCase();
  const hits = [];
  for (const item of list) {
    const w = Array.isArray(item) ? item[0] : item;
    const re = new RegExp("(^|[^a-z0-9\xC0-\u017F])" + w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "(?=$|[^a-z0-9\xC0-\u017F])", "i");
    if (re.test(t)) hits.push(Array.isArray(item) ? { w, label: item[1] } : { w, label: null });
  }
  return hits;
}
function readiness(o) {
  const events0 = lhFind(o.text, LH_EVENTS), seen = /* @__PURE__ */ new Set();
  const events = events0.filter((h) => seen.has(h.label) ? false : (seen.add(h.label), true));
  const protect = lhFind(o.text, LH_PROTECT), cover = lhFind(o.text, LH_COVER);
  const push = o.pushback || lhFind(o.latest != null ? o.latest : o.text, LH_PUSH).length > 0;
  let score = Math.min(60, events.length * 30) + Math.min(30, protect.length * 15) + (cover.length ? 10 : 0);
  if (o.greenLight) score += 25;
  else if (o.talked) score += 10;
  if (push) score -= 30;
  const mod = LH_STYLE_MOD[o.style] || LH_STYLE_MOD.story;
  score += mod(events.length > 0, !!o.greenLight);
  if (!o.greenLight && (o.style === "asker" || o.style === "thinker" || o.style === "doer")) score = Math.min(score, 69);
  score = Math.max(0, Math.min(100, Math.round(score)));
  const level = score >= 70 ? "ready" : score >= 40 ? "seed" : "notyet";
  const levelWord = { ready: "READY", seed: "SEED", notyet: "NOT YET" }[level];
  const levelWhy = { ready: "ask now", seed: "one sentence, no ask", notyet: "finish the main ask first" }[level];
  const distinct = events.length + protect.length + cover.length + (o.greenLight ? 1 : 0);
  const confidence = distinct >= 3 ? "Clear" : distinct === 2 ? "Likely" : "Your call";
  const cues = [...events, ...protect, ...cover].map((h) => h.w);
  if (o.greenLight) cues.push("said yes");
  if (push) cues.push("pushback");
  return { score, level, levelWord, levelWhy, confidence, cues, event: events.length ? events[0].label : null, pushback: push };
}
const LH_LINES = {
  open: {
    story: "Can I ask you one thing about {event}? Auto protects the car and home protects the house. Life protects the payments.",
    asker: "One more line for the page: who pays the mortgage and the car if the income stops? I can put a number next to it.",
    doer: "One more thing, thirty seconds. Life protects the payments. Want the number on the same page?",
    thinker: "No decision today. I'll add one line to the page: who pays the payments if the income stops, so you can read it before your renewal."
  },
  gap: {
    story: "Left is what you have, middle is the gap, right is one move now and one later. The gap is the payments: car loan, mortgage, income.",
    asker: "Left is what you have, middle is the gap, right is one move now and one later. Future income that can be claimed: income \xD7 25% \xD7 20 years. The gap is the payments.",
    doer: "What you have, the gap, one move now and one later. The gap is the payments: car loan, mortgage, income.",
    thinker: "Left is what you have, middle is the gap, right is one move now and one later. The gap is the payments; nothing to decide today."
  },
  ask: {
    story: "Which gap would you want handled first? You pick the day.",
    asker: "Which gap first? I'll put the exact number next to it today, ready to sign by {day}.",
    doer: "Life or disability first? Ready to sign by {day}.",
    thinker: "Would it be a terrible idea to fix the first gap before your renewal? You decide."
  }
};
const LH_STEPS = [["open", "Open"], ["gap", "Gap"], ["ask", "Ask"]];
const LH_NOTE = "Illustration only, not a policy or quote, subject to underwriting.";
const LH_WHAT_OPENS = "What would open it: a life event in their words, or a yes on the quote.";
function lhDay(from) {
  const d = new Date(from || Date.now());
  let n = 0;
  while (n < 2) {
    d.setDate(d.getDate() + 1);
    if (d.getDay() !== 0 && d.getDay() !== 6) n++;
  }
  return d.toLocaleDateString("en-US", { weekday: "long" });
}
function lhLine(step, style, r, from) {
  const s = LH_LINES[step][style] || LH_LINES[step].story;
  return s.replace("{event}", r && r.event ? r.event : "what you mentioned").replace("{day}", lhDay(from));
}
const XLH_ON_FILE = {
  Q01: "Two cars, need auto. Just send me the quote.",
  Q02: "Moving into a new place in May. Renters and auto, but I'll want to think it over first.",
  "L-002": "James said you'd look after me. We just bought a house, our first, and I don't know what the lender needs from me.",
  "C-001": "The kitchen is finished, so the valuation is up. Happy to go over it.",
  "C-002": "With the baby coming, every dollar matters. My wife's been asking about life insurance too; we've been putting it off.",
  "C-003": "Auto and home together. Just tell me the total.",
  Q07: "What are the limits on the $142 quote, and is the deductible the same as mine?",
  Q08: "Re-run it from what you have. I'm not filling anything out.",
  Q09: "Let me think. We're refinancing this winter, and I want to know the payments are covered if something happens.",
  Q10: "Two teen drivers now; my daughter just got her license.",
  Q11: "Auto is with you, home is elsewhere. Show me both side by side, line by line.",
  Q12: "Keep it short.",
  Q13: "Price was the only thing. We got married in June, so it's both our cars now.",
  Q14: "Three cars, no accidents. What's the number?",
  Q15: "We had the baby on Sunday. I want the family protected, but I need time to read everything.",
  "L-101": "I'll decide before the renewal. Send it in writing.",
  Q17: "My dad is moving in with us after the holidays, so the house is getting full.",
  "L-103": "Is $192 the same limits as what I have?",
  "L-104": "Fine if it's cheaper. Text me.",
  Q20: "STOP"
};
function xLHInput(lead, v) {
  const words = XLH_ON_FILE[lead.id] || "";
  const outs = v && v.doneTs ? v.doneTs.map((t) => XS.done[t.id] && XS.done[t.id].k).filter(Boolean) : [];
  return {
    text: [words, ...lead.meta || []].filter(Boolean).join(". "),
    latest: words,
    style: lead.style,
    greenLight: !!lead.at || outs.includes("signed"),
    talked: !!lead.contacted || outs.some((k) => /talked|quoted|signed/.test(k)),
    pushback: outs[outs.length - 1] === "notnow",
    words
  };
}
const XLH_LOOK = { ready: ["success", true], seed: ["discovery", false], notyet: [null, false] };
const XLH_CUE = { "said yes": "success", pushback: "warning" };
function xLHTitle(r) {
  return `Life & health: ${r.levelWord}, ${r.levelWhy}. Confidence: ${r.confidence}${r.cues.length ? `. Because: ${r.cues.join(", ")}` : ""}.`;
}
function XLifePanel({ text, latest, style, greenLight, talked, pushback, onOpen, gate, from }) {
  const r = readiness({ text, latest, style, greenLight, pushback, talked });
  const [step, setStep] = I.useState(0);
  I.useEffect(() => {
    setStep(0);
  }, [r.level]);
  I.useEffect(() => {
    if (onOpen && r.level !== "notyet") onOpen(LH_STEPS[step][0]);
  }, [step, r.level]);
  const [ap, bold] = XLH_LOOK[r.level];
  const st = style && LH_LINES.open[style] ? style : "story";
  const line = (k) => lhLine(k, st, r, from);
  const scrollGate = () => {
    try {
      const el = document.querySelector(".life-suitability");
      if (el) el.scrollIntoView({ block: "center", behavior: "smooth" });
    } catch (e) {
    }
  };
  return /* @__PURE__ */ I.createElement("div", { className: "x-lh x-lh-" + r.level, "data-level": r.level, "data-score": r.score }, /* @__PURE__ */ I.createElement("div", { className: "x-lh-head" }, /* @__PURE__ */ I.createElement(Lozenge, { appearance: ap, bold, title: xLHTitle(r) }, r.levelWord), r.level !== "notyet" && /* @__PURE__ */ I.createElement("span", { className: "x-lh-why" }, r.levelWhy), /* @__PURE__ */ I.createElement("span", { className: "x-lh-conf", title: "How sure the read is: Clear \xB7 Likely \xB7 Your call" }, "Confidence \xB7 ", /* @__PURE__ */ I.createElement("b", null, r.confidence))), /* @__PURE__ */ I.createElement("div", { className: "rm", role: "meter", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": r.score, "aria-label": `Readiness ${r.score} of 100: ${r.levelWord}`, title: "Seed from 40, ready from 70" }, /* @__PURE__ */ I.createElement("div", { className: "rm-fill " + r.level, style: { width: r.score + "%" } }), /* @__PURE__ */ I.createElement("div", { className: "rm-ticks" })), r.cues.length > 0 && /* @__PURE__ */ I.createElement("div", { className: "x-lh-cues" }, /* @__PURE__ */ I.createElement("span", { className: "x-lh-k" }, "because:"), r.cues.map((c) => /* @__PURE__ */ I.createElement(Lozenge, { key: c, appearance: XLH_CUE[c] }, c))), r.level === "ready" && /* @__PURE__ */ I.createElement("div", { className: "x-lh-script" }, /* @__PURE__ */ I.createElement(ProgressTracker, { steps: LH_STEPS.map(([k, l]) => [k, l]), current: step }), /* @__PURE__ */ I.createElement("div", { className: "x-lh-line", key: step, "data-step": LH_STEPS[step][0] }, "\u201C", line(LH_STEPS[step][0]), "\u201D"), LH_STEPS[step][0] === "ask" && gate > 0 && /* @__PURE__ */ I.createElement(SectionMessage, { appearance: "warning", title: "Suitability first", action: { label: "Show the checklist", onClick: scrollGate } }, gate, " required item", gate === 1 ? " is" : "s are", " still open in the suitability check below. Clear ", gate === 1 ? "it" : "them", " before the ask."), /* @__PURE__ */ I.createElement("div", { className: "x-lh-nav" }, /* @__PURE__ */ I.createElement("button", { type: "button", className: "btn x-lh-back", disabled: step === 0, onClick: () => setStep(step - 1) }, "\u2190 Back"), /* @__PURE__ */ I.createElement("span", { className: "x-lh-of" }, step + 1, " of ", LH_STEPS.length), /* @__PURE__ */ I.createElement("button", { type: "button", className: "btn x-lh-next", disabled: step === LH_STEPS.length - 1, onClick: () => setStep(step + 1) }, "Next line \u2192"))), r.level === "seed" && /* @__PURE__ */ I.createElement("div", { className: "x-lh-script" }, /* @__PURE__ */ I.createElement("div", { className: "x-lh-k" }, "Open line \xB7 say it once"), /* @__PURE__ */ I.createElement("div", { className: "x-lh-line", "data-step": "open" }, "\u201C", line("open"), "\u201D")), r.level === "notyet" && /* @__PURE__ */ I.createElement("div", { className: "x-lh-script" }, /* @__PURE__ */ I.createElement("div", { className: "x-lh-line x-lh-wait" }, "Not yet \xB7 finish the main ask first"), /* @__PURE__ */ I.createElement(EmptyState, null, LH_WHAT_OPENS)), /* @__PURE__ */ I.createElement("div", { className: "x-lh-note" }, LH_NOTE));
}
function XLifeChip({ lead, v, open, onToggle }) {
  const inp = xLHInput(lead, v), r = readiness(inp), [ap, bold] = XLH_LOOK[r.level];
  return /* @__PURE__ */ I.createElement(
    "button",
    {
      type: "button",
      className: "x-lh-chip",
      "aria-expanded": !!open,
      title: xLHTitle(r) + (open ? " Tap to close." : " Tap for the lines."),
      onClick: (e) => {
        e.stopPropagation();
        onToggle();
      }
    },
    /* @__PURE__ */ I.createElement(Lozenge, { appearance: ap, bold }, "Life & health \xB7 ", r.levelWord)
  );
}
function XLeadLife({ lead, v, onClose }) {
  const inp = xLHInput(lead, v);
  return /* @__PURE__ */ I.createElement("div", { className: "x-lh-card", role: "region", "aria-label": `Life & health readiness: ${lead.name}`, onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ I.createElement("div", { className: "x-lh-cardhead" }, /* @__PURE__ */ I.createElement("span", { className: "x-lh-title" }, "Life & health \xB7 readiness"), inp.words && /* @__PURE__ */ I.createElement("span", { className: "x-lh-src", title: `Their words on file: \u201C${inp.words}\u201D` }, "from their words on file", v && v.doneTs && v.doneTs.length ? " and today's outcomes" : ""), onClose && /* @__PURE__ */ I.createElement("button", { type: "button", className: "x-lh-close", onClick: onClose, "aria-label": "Close the Life & health panel" }, "\xD7")), /* @__PURE__ */ I.createElement(XLifePanel, { ...inp }));
}
const XLH_YES = /\b(yes|let's do it|let’s do it|book|booked|sounds good|go ahead)\b/i;
function xLHTurnYes(t) {
  const c = t && t.coach || {};
  const said = t && t.transcript ? t.transcript.filter((l) => l.speaker !== "Rep").map((l) => l.text).join(" ") : "";
  return XLH_YES.test(said) || !!(c.lifeSignal && c.lifeSignal.intensity === "committed") || /meeting confirmed|booked/i.test(c.signal || "");
}
function XCoachLife({ turn, transcript, dominant, gate }) {
  const turns = (transcript || []).slice(0, (turn != null ? turn : (transcript || []).length - 1) + 1);
  const said = turns.map((t) => (t.transcript || []).filter((l) => l.speaker !== "Rep").map((l) => l.text).join(" "));
  const cur = turns[turns.length - 1] || {}, al = cur.coach && cur.coach.alert;
  const push = !!(al && al.kind === "warning" && /pushback/i.test((al.textParts || []).map((p) => p.text).join(" ")));
  return /* @__PURE__ */ I.createElement("div", { className: "coach-section x-lh-coach" }, /* @__PURE__ */ I.createElement("div", { className: "label" }, "Life & health \xB7 readiness"), /* @__PURE__ */ I.createElement(XLifePanel, { text: said.join(" "), latest: said[said.length - 1] || "", style: dominant || "story", greenLight: turns.some(xLHTurnYes), talked: true, pushback: push, gate }));
}
const XSR_ORDER = [["story", "Storyteller"], ["asker", "Questioner"], ["doer", "Doer"], ["thinker", "Thinker"]];
const XSR_CUES = {
  story: ["baby", "wife", "husband", "family", "kids", "honestly", "someone real", "stuff happens", "putting it off", "every dollar matters", "we've been"],
  asker: ["shopping around", "cheapest", "$", "beat", "best number", "compare", "how much", "limits", "paying"],
  doer: ["just", "works", "bring anything", "send", "quick", "fine", "go ahead"],
  thinker: ["maybe", "i mean", "think", "don't want to get into", "not sure", "later", "talk to my"]
};
function xsrRe(k) {
  const alt = XSR_CUES[k].map((c) => c === "$" ? "\\$\\d[\\d,]*" : "\\b" + c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/'/g, "['\u2019]") + "\\b");
  return new RegExp("(" + alt.join("|") + ")", "gi");
}
function xsrDims(t) {
  return t ? t.coach ? t.coach.dimensions : t.dimensions || null : null;
}
function xsrSaid(t) {
  return t && t.transcript ? t.transcript.filter((l) => l.speaker !== "Rep").map((l) => l.text).join(" ") : "";
}
function xsrClamp(v) {
  return Math.max(0, Math.min(100, Math.round(v || 0)));
}
function xsrTop(d) {
  const rows = XSR_ORDER.map(([k]) => [k, xsrClamp(d[k])]).sort((a, b) => b[1] - a[1]);
  return { k: rows[0][0], v: rows[0][1], gap: rows[0][1] - rows[1][1] };
}
function xsrState(dimsAt, i, dominant) {
  const d = dimsAt(i);
  if (!d) return null;
  const top = xsrTop(d), lead = dominant || top.k, v = xsrClamp(d[lead]);
  const p = i > 0 ? dimsAt(i - 1) : null, pTop = p ? xsrTop(p) : null;
  const word = top.gap <= 10 ? "TIE" : v >= 75 && pTop && pTop.k === lead ? "LOCKED" : v >= 50 ? "READING" : null;
  let moved = null;
  if (p) for (const [k] of XSR_ORDER) {
    const dd = xsrClamp(d[k]) - xsrClamp(p[k]);
    if (dd && (!moved || Math.abs(dd) > Math.abs(moved.d))) moved = { k, d: dd };
  }
  return { lead, v, word, moved, d, p };
}
function xsrLabel(k) {
  return (XSR_ORDER.find((r) => r[0] === k) || [k, k])[1];
}
function xsrHeard(said, k) {
  const ss = String(said || "").split(/(?<=[.!?])\s+(?=[A-Z“"])/).filter(Boolean);
  const count = (s2) => (s2.match(xsrRe(k)) || []).length;
  let best = null;
  for (let i = 0; i < ss.length; i++) for (let n = 1; n <= 2 && i + n <= ss.length; n++) {
    const s2 = ss.slice(i, i + n).join(" "), c = count(s2);
    if (!c || n === 2 && s2.length > 120) continue;
    if (!best || c > best.c || c === best.c && s2.length < best.s.length) best = { s: s2, c };
  }
  if (!best) return null;
  let s = best.s;
  if (s.length > 120) s = s.slice(0, 117).replace(/\s+\S*$/, "") + "\u2026";
  return s.split(xsrRe(k)).map((part, i) => i % 2 ? /* @__PURE__ */ I.createElement("mark", { key: i }, part) : part);
}
function xsrReduced() {
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch (e) {
    return false;
  }
}
function XStyleRead({ dimensions, dominant, turn, transcript, signal }) {
  const turns = Array.isArray(transcript) ? transcript : [];
  const cur = turn != null ? turn : Math.max(0, turns.length - 1);
  const seen = I.useRef({});
  if (dimensions) seen.current[cur] = dimensions;
  const [replay, setReplay] = I.useState(null);
  const [grown, setGrown] = I.useState(false);
  const [flash, setFlash] = I.useState(null);
  const [why, setWhy] = I.useState(false);
  const dt = replay != null ? replay : cur;
  const dimsAt = (i) => i === cur && dimensions || seen.current[i] || xsrDims(turns[i]) || null;
  const st = xsrState(dimsAt, dt, dt === cur ? dominant : null);
  I.useEffect(() => {
    let b = 0;
    const a = requestAnimationFrame(() => {
      b = requestAnimationFrame(() => setGrown(true));
    });
    return () => {
      cancelAnimationFrame(a);
      cancelAnimationFrame(b);
    };
  }, []);
  I.useEffect(() => {
    if (!st || !st.moved) {
      setFlash(null);
      return void 0;
    }
    setFlash({ k: st.moved.k, d: st.moved.d, at: dt, pulse: true });
    const a = setTimeout(() => setFlash((f) => f ? { ...f, pulse: false } : f), 377);
    const b = setTimeout(() => setFlash(null), 1700);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, [dt]);
  I.useEffect(() => {
    setReplay(null);
  }, [cur]);
  I.useEffect(() => {
    if (replay == null) return void 0;
    const id = setTimeout(() => setReplay((r) => r == null || r >= cur ? null : r + 1), 1618);
    return () => clearTimeout(id);
  }, [replay, cur]);
  if (!st) return null;
  const { lead, word, moved, d, p } = st;
  const heardK = moved && moved.d > 0 ? moved.k : lead;
  const said = xsrSaid(turns[dt]);
  const heard = xsrHeard(said, heardK) || (heardK !== lead ? xsrHeard(said, lead) : null);
  const move = moved ? `${xsrLabel(moved.k)} ${moved.d > 0 ? "up" : "down"} ${Math.abs(moved.d)}` : `${xsrLabel(lead)} ${xsrClamp(d[lead])}`;
  const wordTitle = { READING: "Leading at 50 or more", LOCKED: "75 or more, and leading two turns running", TIE: "The top two are within 10 points" }[word];
  return /* @__PURE__ */ I.createElement("div", { className: "x-sr" + (replay != null ? " is-replay" : ""), "data-turn": dt + 1 }, /* @__PURE__ */ I.createElement("div", { className: "sr", role: "group", "aria-label": `Style read at turn ${dt + 1}: ` + XSR_ORDER.map(([k, l]) => `${l} ${xsrClamp(d[k])}%`).join(", ") + (word ? `; ${xsrLabel(lead)} ${word.toLowerCase()}` : "") }, XSR_ORDER.map(([k, label]) => {
    const v = xsrClamp(d[k]), pv = p ? xsrClamp(p[k]) : null, isLead = k === lead, fl = flash && flash.k === k ? flash : null;
    return /* @__PURE__ */ I.createElement("div", { key: k, className: "sr-row" + (isLead ? " lead" : "") + (fl && fl.pulse ? " moved" : ""), "data-style": k, style: { "--sr-color": `var(--style-${k})` } }, /* @__PURE__ */ I.createElement("span", { className: "sr-name" }, label), /* @__PURE__ */ I.createElement("span", { className: "sr-track" }, /* @__PURE__ */ I.createElement("span", { className: "sr-fill", style: { width: (grown ? v : 0) + "%" } }), pv != null && /* @__PURE__ */ I.createElement("span", { className: "sr-ghost", style: { left: pv + "%" }, title: `Turn ${dt}: ${pv}%` }), fl && /* @__PURE__ */ I.createElement(Lozenge, { key: "d" + fl.at, appearance: k, className: "sr-delta", title: `Since turn ${dt}` }, fl.d > 0 ? "+" + fl.d : "\u2212" + Math.abs(fl.d))), /* @__PURE__ */ I.createElement("span", { className: "sr-pct" }, v, "%"), /* @__PURE__ */ I.createElement("span", { className: "sr-word" }, isLead && word && /* @__PURE__ */ I.createElement(Lozenge, { appearance: word === "TIE" ? null : k, bold: word === "LOCKED", title: wordTitle }, word)));
  })), /* @__PURE__ */ I.createElement("div", { className: "sr-heard", title: signal && dt === cur ? `Signal: ${signal}` : void 0 }, /* @__PURE__ */ I.createElement("b", null, "Turn ", dt + 1), " \xB7 ", move, heard ? /* @__PURE__ */ I.createElement(I.Fragment, null, " \xB7 heard: \u201C", heard, "\u201D") : null), /* @__PURE__ */ I.createElement("div", { className: "x-sr-acts" }, /* @__PURE__ */ I.createElement("button", { type: "button", className: "x-sr-link", "aria-expanded": why, onClick: () => setWhy(!why) }, "Why ", xsrLabel(lead), "?"), /* @__PURE__ */ I.createElement("button", { type: "button", className: "x-sr-link x-sr-replay", onClick: () => setReplay(replay != null ? null : 0) }, replay != null ? `\u25A0 Stop \xB7 turn ${replay + 1} of ${cur + 1}` : "\u25B6 Replay the read")), why && rf[lead] && /* @__PURE__ */ I.createElement(SectionMessage, { appearance: "discovery", title: `${xsrLabel(lead)}: how you can tell`, action: { label: "Got it", onClick: () => setWhy(false) } }, rf[lead].why));
}
function XReadLozenge({ turn, transcript }) {
  const turns = Array.isArray(transcript) ? transcript : [];
  const i = turn != null ? turn : turns.length - 1;
  const st = xsrState((j) => xsrDims(turns[j]), i, null);
  if (!st) return null;
  return /* @__PURE__ */ I.createElement(Lozenge, { appearance: st.word === "TIE" ? null : st.lead, bold: st.word === "LOCKED", className: "x-read-lz", title: "The style read from this conversation; the coach's words follow it" }, xsrLabel(st.lead), st.word ? " \xB7 " + st.word : "");
}
const XQ = [
  // New today: the first call goes out inside five minutes
  {
    id: "Q01",
    name: "Priya Placeholder",
    style: "doer",
    source: "IL",
    day: 0,
    done: 0,
    contacted: false,
    seen: 2,
    scenario: "raw",
    stage: "lead",
    reason: "Asked for an auto quote",
    meta: ["98029", "2 cars"],
    consent: { sms: true, email: true, basis: "Quote form opt-in (calls and texts, incl. automated) \xB7 today" },
    lines: 1,
    proposed: 148,
    phone: "(555) 010-0151"
  },
  {
    id: "Q02",
    name: "Ben Fixture",
    style: "thinker",
    source: "IL",
    day: 0,
    done: 0,
    contacted: false,
    seen: 9,
    scenario: "raw",
    stage: "lead",
    reason: "Asked for renters + auto",
    meta: ["98075", "Moving in May"],
    consent: { sms: true, email: true, basis: "Quote form opt-in (calls and texts, incl. automated) \xB7 today" },
    lines: 2,
    proposed: 131,
    phone: "(555) 010-0152"
  },
  {
    id: "L-002",
    name: "Anya Example",
    style: "story",
    source: "RF",
    day: 0,
    done: 1,
    contacted: false,
    seen: 32,
    scenario: "raw",
    stage: "lead",
    reason: "Referred by James Roe \xB7 texted us about a home quote",
    meta: ["98075", "First-time buyer"],
    consent: { sms: true, email: true, basis: "Texted the office first; replied YES to the consent text \xB7 Oct 21" },
    lines: 1,
    phone: "(555) 010-0153",
    say: ["Hi {first}, it's {rep} from your local office. James Roe asked me to reach out; he said you just bought your first home. Congratulations.", "I'll keep the home quote simple: what it covers, what it costs, and who you call when something happens. That's me.", "Do you have ten minutes now, or is later today better? You pick the time."],
    msg: { email: { subject: "James Roe asked me to reach out", body: "Hey Marcus,\n\nIt's just __REP__ from your local Sample Agency office. James Roe asked me to reach out; he said you just bought your first home. Congratulations.\n\nI'll keep the home quote simple: what it covers, what it costs, and who picks up the phone when something happens. That's me, and I'd rather you know that now than find out later.\n\nAre you opposed to a quick, no-obligation call this week? You pick the time." } }
  },
  // Booked: they picked the time
  {
    id: "C-001",
    name: "James Roe",
    style: "story",
    source: "CC",
    day: 0,
    done: 0,
    contacted: true,
    at: "9:00 AM",
    scenario: "current",
    stage: "proposed",
    reason: "Home renewal review",
    meta: ["Bring updated valuation"],
    consent: { sms: true, email: true, basis: "Customer \xB7 written opt-in \xB7 2019" },
    lines: 1,
    proposed: 138,
    current: 153,
    phone: "(555) 010-0154",
    say: ["Hi {first}, it's {rep}. Thanks for making the time. How's everything at the house?", "I brought the updated valuation and put your renewal next to our proposal, so you can see what changes and why.", "Are you opposed to me setting it up today, so it's done before the renewal?"]
  },
  {
    id: "C-002",
    name: "Marcus Sample",
    style: "story",
    source: "QN",
    day: 3,
    done: 1,
    contacted: true,
    at: "3:30 PM",
    scenario: "following",
    stage: "proposed",
    reason: "Callback \xB7 auto + life walkthrough",
    meta: ["Quoted $163/mo", "Pays $186/mo now"],
    consent: { sms: true, email: true, basis: "E-signed text consent after the first call \xB7 Oct 20" },
    lines: 2,
    proposed: 163,
    current: 186,
    phone: "(555) 010-0155",
    say: ["Hi {first}, it's {rep}. Congratulations again on the baby. How's everyone sleeping?", "I'll walk you through the auto at {proposed} a month next to the {current} you pay now, then a quick look at life coverage for the family.", "Would it be a terrible idea to have the three of us on a ten-minute call this week? AM or PM?"]
  },
  {
    id: "C-003",
    name: "Diego Mock",
    style: "doer",
    source: "IL",
    day: 2,
    done: 4,
    contacted: true,
    at: "2:00 PM",
    scenario: "raw",
    stage: "lead",
    reason: "Booked by text \xB7 auto + home bundle",
    meta: ["Bought lead", "Auto + home"],
    consent: { sms: true, email: true, basis: "E-signed text consent after the intro call \xB7 Oct 21" },
    lines: 2,
    proposed: 212,
    phone: "(555) 010-0156",
    say: ["Hi {first}, it's {rep}. I have your auto and home numbers ready.", "Bundle total first, then what changes. Nothing for you to fill out.", "Want me to set it up? I'll text you the next step."]
  },
  // Follow-ups due: today's step from each plan
  {
    id: "Q07",
    name: "Carla Stub",
    style: "asker",
    source: "QN",
    day: 1,
    done: 0,
    contacted: false,
    scenario: "following",
    stage: "quoted",
    reason: "Quoted yesterday by email \xB7 no reply",
    meta: ["Auto", "Pays $171/mo"],
    consent: { sms: true, email: true, basis: "Quote form opt-in \xB7 Oct 22" },
    lines: 1,
    proposed: 142,
    current: 171,
    phone: "(555) 010-0157"
  },
  {
    id: "Q08",
    name: "Omar Pilot",
    style: "doer",
    source: "RI",
    day: -15,
    done: 2,
    contacted: true,
    scenario: "xdate",
    stage: "bound",
    reason: "Customer \xB7 renewal going up $31/mo",
    meta: ["Home", "Renews in 15 days"],
    consent: { sms: true, email: true, basis: "Customer \xB7 written opt-in \xB7 Mar 2023" },
    lines: 1,
    proposed: 96,
    current: 127,
    phone: "(555) 010-0158",
    say: ["Hi {first}, it's {rep}. Quick one: your home renewal is going up about $31 a month.", "I already re-ran it from your file. There's an option at {proposed} a month with the same coverage, and nothing for you to fill out.", "Want me to switch it before the renewal? Yes or no is all I need."],
    msg: { sms: "Hey Marcus, it's __REP__. Your home renewal is going up about $31/mo. I already re-ran it from your file: $__PROPOSED__/mo, same coverage, nothing to fill out. Want me to switch it before the renewal? Reply YES or NO.", email: { subject: "Your renewal, already re-run: $__PROPOSED__/mo", body: "Hi Marcus,\n\nYour home renewal is going up about $31/mo.\n\nI already re-ran it from your file: $__PROPOSED__/mo for the same coverage, nothing to fill out. If you say yes, we handle the change on our end.\n\nWant me to switch it before the renewal? YES or NO is all I need." } }
  },
  {
    id: "Q09",
    name: "Elena Draft",
    style: "thinker",
    source: "QN",
    day: 5,
    done: 1,
    contacted: true,
    scenario: "following",
    stage: "quoted",
    reason: "Said \u201Clet me think\u201D on Monday",
    meta: ["Auto + home"],
    consent: { sms: true, email: true, basis: "E-signed text consent after the first call \xB7 Oct 19" },
    lines: 2,
    proposed: 238,
    phone: "(555) 010-0159"
  },
  {
    id: "Q10",
    name: "Sam Trial",
    style: "story",
    source: "PI",
    day: 14,
    done: 5,
    contacted: true,
    scenario: "following",
    stage: "quoted",
    reason: "Walked in two weeks ago \xB7 quiet since",
    meta: ["Auto", "Two teen drivers"],
    consent: { sms: true, email: true, basis: "Signed the consent form at the office \xB7 Oct 9" },
    lines: 1,
    proposed: 204,
    phone: "(555) 010-0160"
  },
  {
    id: "Q11",
    name: "Rosa Mockup",
    style: "asker",
    source: "CC",
    day: 0,
    done: 1,
    contacted: true,
    scenario: "current",
    stage: "bound",
    reason: "Customer \xB7 home is elsewhere",
    meta: ["Auto with us", "Reviewed this morning"],
    consent: { sms: true, email: true, basis: "Customer \xB7 written opt-in \xB7 Jun 2021" },
    lines: 1,
    proposed: 91,
    current: 118,
    phone: "(555) 010-0161"
  },
  {
    id: "Q12",
    name: "Kai Proto",
    style: "doer",
    source: "CC",
    day: 0,
    done: 0,
    contacted: true,
    scenario: "current",
    stage: "bound",
    reason: "Customer \xB7 home is elsewhere",
    meta: ["Auto with us", "Review day"],
    consent: { sms: true, email: true, basis: "Customer \xB7 written opt-in \xB7 Jan 2024" },
    lines: 1,
    proposed: 87,
    phone: "(555) 010-0162"
  },
  {
    id: "Q13",
    name: "Grace Fiction",
    style: "story",
    source: "WB",
    day: 2,
    done: 2,
    contacted: true,
    scenario: "winback",
    stage: "lapsed",
    reason: "Left a year ago \xB7 price was the reason",
    meta: ["Auto", "Quote sent Tuesday"],
    consent: { sms: true, email: true, basis: "Former customer \xB7 written opt-in renewed by email \xB7 Oct 21" },
    lines: 1,
    proposed: 157,
    current: 181,
    phone: "(555) 010-0163"
  },
  {
    id: "Q14",
    name: "Leo Specimen",
    style: "asker",
    source: "WB",
    day: 0,
    done: 1,
    contacted: true,
    scenario: "winback",
    stage: "lapsed",
    reason: "Left exactly one year ago today",
    meta: ["3 cars", "Accident-free"],
    consent: { sms: true, email: true, basis: "Former customer \xB7 written opt-in renewed by email \xB7 Oct 20" },
    lines: 1,
    proposed: 244,
    current: 276,
    phone: "(555) 010-0164"
  },
  {
    id: "Q15",
    name: "Hana Template",
    style: "thinker",
    source: "LE",
    day: 5,
    done: 2,
    contacted: true,
    scenario: "current",
    stage: "bound",
    reason: "Customer \xB7 new baby, told us Monday",
    meta: ["Auto with us", "Life review"],
    consent: { sms: true, email: true, basis: "Customer \xB7 written opt-in \xB7 Nov 2022" },
    lines: 1,
    proposed: 112,
    phone: "(555) 010-0165",
    say: ["Hi {first}, it's {rep}. Congratulations again on the baby. How are you all doing?", "No rush on anything. I put the life options in your email, side by side, so you can read them on your own time.", "Would it be a terrible idea to look at them together this week? You decide."],
    msg: { sms: "Hey Marcus, it's __REP__. Congratulations again on the baby. No rush on anything; I put the life options in your email, side by side, so you can read them on your own time. Would it be a terrible idea to look at them together this week? You decide.", email: { subject: "The life options, whenever you're ready", body: "Hey Marcus,\n\nCongratulations again on the baby. I know there's a lot going on.\n\nNo action needed today. I put the life options side by side, with what each one covers and costs, so you can read them on your own time; the one question that matters is what your family would need if your income stopped.\n\nWould it be a terrible idea to look at them together this week? You decide." } }
  },
  // Renewal window: X-dates count back from the renewal
  {
    id: "L-101",
    name: "Sarah Doe",
    style: "thinker",
    source: "XD",
    day: -3,
    done: 6,
    contacted: true,
    scenario: "xdate",
    stage: "quoted",
    reason: "Auto renews in 3 days",
    meta: ["Pays $186/mo", "Quoted $168/mo"],
    consent: { sms: true, email: true, basis: "Web form opt-in with her renewal date \xB7 Aug 3" },
    lines: 1,
    proposed: 168,
    current: 186,
    phone: "(555) 010-0166"
  },
  {
    id: "Q17",
    name: "Victor Dummy",
    style: "story",
    source: "XD",
    day: -6,
    done: 5,
    contacted: true,
    scenario: "xdate",
    stage: "quoted",
    reason: "Home renews in 6 days",
    meta: ["Quoted in the spring"],
    consent: { sms: true, email: true, basis: "Quote form opt-in \xB7 Apr 14" },
    lines: 2,
    proposed: 229,
    phone: "(555) 010-0167"
  },
  {
    id: "L-103",
    name: "Linh Demo",
    style: "asker",
    source: "XD",
    day: -14,
    done: 4,
    contacted: true,
    scenario: "xdate",
    stage: "quoted",
    reason: "Auto renews in 14 days",
    meta: ["Pays $211/mo", "Quoted $192/mo"],
    consent: { sms: true, email: true, basis: "E-signed text consent after the first call \xB7 Sep 30" },
    lines: 1,
    proposed: 192,
    current: 211,
    phone: "(555) 010-0168"
  },
  {
    id: "L-104",
    name: "Tom Test",
    style: "doer",
    source: "XD",
    day: -5,
    done: 5,
    contacted: true,
    scenario: "xdate",
    stage: "quoted",
    reason: "Auto renews in 5 days",
    meta: ["Pays $174/mo", "Quoted $168/mo"],
    consent: { sms: true, email: true, basis: "E-signed text consent after the first call \xB7 Sep 12" },
    lines: 1,
    proposed: 168,
    current: 174,
    phone: "(555) 010-0169"
  },
  {
    id: "Q20",
    name: "Nadia Sandbox",
    style: "thinker",
    source: "XD",
    day: -11,
    done: 4,
    contacted: true,
    scenario: "xdate",
    stage: "quoted",
    reason: "Auto renews in 11 days",
    meta: ["Quoted in May", "Texted STOP 7:42 AM"],
    consent: { sms: false, email: true, stop: "7:42 AM", basis: "Replied STOP at 7:42 AM today: texts suppressed in 4 seconds \xB7 email opt-in on file (quote form, May 6)" },
    lines: 1,
    proposed: 139,
    phone: "(555) 010-0170"
  }
];
const XCOOL = [
  {
    id: "K01",
    name: "Nina Lorem",
    style: "asker",
    source: "IL",
    stage: "lead",
    contacted: false,
    phone: "(555) 010-0171",
    consent: { sms: false, email: true, basis: "Quote form opt-in (email) \xB7 Sep 22" },
    why: "Internet lead, day 31: six calls and five emails done, no answer. The 45-day burst is two weeks out.",
    ch: "email",
    say: "Nina, one line: the quote I sent still holds through next month. If the timing's wrong, reply 'later' and I'll check back in the spring."
  },
  {
    id: "K02",
    name: "Felix Ipsum",
    style: "doer",
    source: "QN",
    stage: "proposed",
    contacted: true,
    phone: "(555) 010-0172",
    consent: { sms: true, email: true, basis: "E-signed text consent after the first call \xB7 Sep 12" },
    proposed: 142,
    why: "Quoted $142/mo in September; said 'after the move.' Forty days on, no decision.",
    ch: "text",
    say: "Hi Felix, it's {rep}. Did the move go through? Your auto quote is still {proposed}; two minutes to switch it on."
  },
  {
    id: "K03",
    name: "Ravi Blank",
    style: "thinker",
    source: "XD",
    stage: "lead",
    contacted: true,
    phone: "(555) 010-0173",
    consent: { sms: true, email: true, basis: "Written opt-in at the first call \xB7 Aug 30" },
    why: "X-date December 20, 58 days out. The proposal goes at 45 days; a call now is early, but cheap.",
    ch: "call",
    say: "Ravi, it's {rep}. Quick one: your renewal is December 20. Want me to run the numbers early, so you have them before the notice lands?"
  },
  {
    id: "K04",
    name: "Clara Stencil",
    style: "story",
    source: "WB",
    stage: "lapsed",
    contacted: true,
    phone: "(555) 010-0174",
    consent: { sms: false, email: true, basis: "Former customer \xB7 email opt-in on file \xB7 Nov 2025" },
    why: "Left eleven months ago over price. The anniversary is six weeks out; the win-back plan starts at three.",
    ch: "email",
    say: "Clara, no pitch: a year on, the discount you had is back on the table. One line back and I'll send the numbers."
  },
  {
    id: "K05",
    name: "Jonah Filler",
    style: "doer",
    source: "PI",
    stage: "proposed",
    contacted: true,
    phone: "(555) 010-0175",
    consent: { sms: false, email: true, basis: "Walk-in \xB7 email opt-in on the quote form \xB7 Sep 8" },
    why: "Walked in for a quote in September; two emails since, no reply. Day 45.",
    ch: "call",
    say: "Jonah, it's {rep} from the office you stopped by. Still worth the switch? If not, say so and I'll close the file."
  },
  {
    id: "K06",
    name: "Aisha Scaffold",
    style: "asker",
    source: "RF",
    stage: "lead",
    contacted: false,
    phone: "(555) 010-0176",
    consent: { sms: false, email: true, basis: "Referral \xB7 email opt-in by reply \xB7 Oct 1" },
    why: "Referred by Rosa Mockup; six calls, never reached. Day 23: the plan's last email went out yesterday.",
    ch: "email",
    say: "Aisha, Rosa Mockup asked me to look after you. I'll stop calling; here's the number in writing, and it holds."
  },
  {
    id: "K07",
    name: "Marco Proxy",
    style: "story",
    source: "RI",
    stage: "bound",
    contacted: true,
    phone: "(555) 010-0177",
    consent: { sms: true, email: true, basis: "Customer \xB7 written opt-in \xB7 Mar 2023" },
    proposed: 131,
    current: 155,
    why: "Customer: the renewal goes up in 40 days and the notice lands next week. The plan's first call is at 35 days.",
    ch: "call",
    say: "Marco, heads up before the letter: your renewal goes up about $24. I've re-run it: same coverage, {proposed}. Ten minutes this week?"
  },
  {
    id: "K08",
    name: "Ivy Standin",
    style: "thinker",
    source: "CC",
    stage: "bound",
    contacted: true,
    phone: "(555) 010-0178",
    consent: { sms: true, email: true, basis: "Customer \xB7 written opt-in \xB7 Jul 2022" },
    why: "Customer, auto only; no review in two years and the home is elsewhere.",
    ch: "text",
    say: "Hi Ivy, it's {rep}. Two years since we looked at your coverage together. Want a ten-minute review before the holidays? AM or PM?"
  }
];
function xCoolChannel(l) {
  const order = [l.ch, "call", "email", "text"];
  return order.find((c) => xAllowed(c, l) && (c !== "text" || l.contacted)) || "email";
}
const XQ_GROUPS = [
  { k: "now", tag: "New lead", title: "Right now", rule: "New leads: call inside a minute, five at most. Referrals: today, naming who sent them." },
  { k: "booked", tag: "Booked", title: "Booked", rule: "They picked the time. Be early." },
  { k: "due", tag: "Follow-up", title: "Follow-ups due", rule: "Today's step from each plan, at the hour that works for its channel." },
  { k: "renew", tag: "Renewal", title: "Renewal window", rule: "Counting back from the renewal: before the notice, then the 30 days after it." }
];
const XCH = { call: "Call", text: "Text", email: "Email" };
const XOUT = { talked: "Talked", sent: "Sent", scheduled: "Scheduled", voicemail: "Voicemail", noanswer: "No answer", quoted: "Quoted", signed: "Signed", notnow: "Not now" };
const XOUTBTN = { ...XOUT, sent: "Send now", scheduled: "Approve" };
const XSTOP = /talked|quoted|signed|notnow/;
function xOuts(ch, t) {
  return ch === "call" ? ["talked", xVoicemail(t) ? "voicemail" : "noanswer", "quoted", "signed", "notnow"] : [t && !t.tomorrow && t.slot > xClock() ? "scheduled" : "sent", "quoted", "signed", "notnow"];
}
function xGroupOf(lead) {
  if (lead.seen != null && lead.day === 0) return "now";
  if (lead.at) return "booked";
  if (lead.source === "XD" || lead.source === "RI") return "renew";
  return "due";
}
function xLeadViews(day) {
  const by = {};
  for (const t of day.touches) (by[t.lead.id] = by[t.lead.id] || []).push(t);
  return XQ.map((lead) => {
    const ts = (by[lead.id] || []).slice().sort((a, b) => a.tomorrow - b.tomorrow || a.slot - b.slot);
    const doneTs = ts.filter((t) => XS.done[t.id]).sort((a, b) => XS.done[a.id].at - XS.done[b.id].at);
    const stop = doneTs.some((t) => XSTOP.test(XS.done[t.id].k));
    const current = stop ? null : ts.find((t) => !XS.done[t.id]) || null;
    const p = day.plan.find((x) => x.lead.id === lead.id);
    return { lead, ts, doneTs, current, last: doneTs[doneTs.length - 1] || null, complete: !current, p, group: xGroupOf(lead) };
  });
}
function xIsDue(t, now) {
  return !t.tomorrow && t.slot <= now;
}
function xWorkOrder(views, now) {
  const live = views.filter((v) => v.current);
  const due = live.filter((v) => xIsDue(v.current, now)).sort((a, b) => a.p.pri - b.p.pri || (a.p.pri === XPRI.now ? xFreshKey(a.lead, now) - xFreshKey(b.lead, now) : a.current.slot - b.current.slot));
  const later = live.filter((v) => !xIsDue(v.current, now)).sort((a, b) => a.current.tomorrow - b.current.tomorrow || a.current.slot - b.current.slot);
  return [...due, ...later];
}
function xScore(done) {
  let touched = 0, quotes = 0, apps = 0, hh = 0;
  for (const l of XQ) {
    const ks = Object.keys(done).filter((k) => k.startsWith(l.id + "#")).map((k) => done[k].k);
    if (!ks.length) continue;
    touched++;
    if (ks.some((k) => k === "quoted" || k === "signed")) quotes++;
    if (ks.includes("signed")) {
      apps += l.lines;
      hh++;
    }
  }
  return { touched, quotes, apps, hh };
}
function xMessage(lead, ch, persona) {
  const p = $n.producers && $n.producers[persona] || {};
  const vars = { repName: persona, repFull: p.full || persona, proposed: lead.proposed, current: lead.current };
  const fill = (t) => Bl(zl(t, vars), lead.name);
  if (lead.msg && lead.msg[ch === "email" ? "email" : "sms"]) {
    const m = lead.msg[ch === "email" ? "email" : "sms"];
    return ch === "email" ? { subject: fill(m.subject), body: fill(m.body) } : { body: fill(m) };
  }
  const cell = tf[lead.scenario] && tf[lead.scenario][lead.style];
  if (!cell) return null;
  return ch === "email" ? { subject: fill(cell.email.subject), body: fill(cell.email.body) } : { body: fill(cell.sms) };
}
function xSay(lead, persona) {
  const c = XMOVES[lead.scenario][lead.style];
  return (lead.say || [c.m.say, c.f.say, c.a.say]).map((s) => xFillSay(s, lead, persona));
}
function xSource(lead) {
  const kind = lead.source === "IL" ? lead.seen != null ? "web lead" : "internet lead" : lead.source === "RF" ? "referral" : lead.source === "PI" ? "walk-in" : lead.source === "WB" ? "former customer" : lead.source === "QN" ? "open quote" : "book of business";
  return `ECRM \xB7 ${kind}${lead.seen != null ? ` \xB7 landed ${xFmt(xLanded(lead))}` : ""}`;
}
function xLogged(d) {
  return d && d.t != null ? ` \xB7 logged to ECRM ${xFmt(Math.min(d.t + 1, (d.when != null ? d.when : d.t) + 1))}` : "";
}
function xOutcomeText(v) {
  const d = XS.done[v.last.id], nx = xNextLabel(v.p);
  if (d.k === "signed") return `Signed \xB7 ${v.lead.lines} app${v.lead.lines > 1 ? "s" : ""}, household protected \xB7 welcome call in 7 days`;
  if (d.k === "quoted") return "Quoted \xB7 the quote follow-up plan starts tomorrow" + xLogged(d);
  if (d.k === "notnow") return "Not now \xB7 a reminder is set for their renewal date";
  if (d.k === "talked") return "Talked \xB7 " + nx + xLogged(d);
  if (d.k === "scheduled") return `Approved${d.by ? ` by ${d.by}` : ""} ${xFmt(d.when || d.t)} \xB7 sends ${xFmt(d.t)} \xB7 ${nx}`;
  if (d.k === "sent") return `Sent${d.by ? ` by ${d.by}` : ""} ${xFmt(d.when || d.t)} \xB7 ${nx}`;
  return `${XOUT[d.k]} \xB7 ${nx}`;
}
function xStatusOf(t, now) {
  if (t.tomorrow) return { cls: "", text: "Tomorrow 9:00 AM" };
  if (t.wk === "now" && t.lead.seen != null) {
    const waited = Math.max(0, now - xLanded(t.lead)), left = 5 - waited;
    if (now < XLEGAL.call[0]) return { cls: "", text: `Calls open at ${xFmt(XLEGAL.call[0])}` };
    if (now >= XLEGAL.call[1] - 10) return { cls: "", text: "Calls reopen 9:00 AM" };
    if (left > 0) {
      const sec = Math.floor(left * 60);
      return { cls: "sla-green", text: `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, "0")} left` };
    }
    return { cls: waited < 15 ? "sla-amber" : "sla-red", text: `${Math.round(waited)} min waiting` };
  }
  if (t.slot <= now) return now - t.slot > 30 ? { cls: "sla-amber", text: `Due since ${xFmt(t.slot)}` } : { cls: "x-when-due", text: "Due now" };
  return { cls: "x-when-time", text: t.label };
}
function XViewBar({ view }) {
  return /* @__PURE__ */ I.createElement("div", { className: "x-viewbar" }, /* @__PURE__ */ I.createElement("span", { className: "x-viewbar-label" }, "Today view"), /* @__PURE__ */ I.createElement("div", { className: "x-seg", role: "group", "aria-label": "Today view" }, [["queue", "Action queue"], ["plan", "Day plan"], ["classic", "Classic"]].map(([k, l]) => /* @__PURE__ */ I.createElement("button", { key: k, className: view === k ? "active" : "", "aria-pressed": view === k, onClick: () => xSet({ view: k }) }, l))));
}
function XPath({ v, now }) {
  return /* @__PURE__ */ I.createElement("span", { className: "x-path", "aria-label": "Today's sequence" }, v.ts.map((t, i) => {
    const d = XS.done[t.id], skipped = !d && !v.current ? true : false, cur = v.current && v.current.id === t.id;
    return /* @__PURE__ */ I.createElement("span", { key: t.id, className: `x-path-step x-path-${t.ch}${d ? " is-done" : ""}${cur ? " is-cur" : ""}${skipped ? " is-off" : ""}`, title: `${XCH[t.ch]} \xB7 ${t.label} \xB7 ${t.step.what}` }, i > 0 && /* @__PURE__ */ I.createElement("span", { className: "x-path-arrow", "aria-hidden": "true" }, "\u2192"), /* @__PURE__ */ I.createElement("span", { className: "x-path-ch" }, XCH[t.ch]), /* @__PURE__ */ I.createElement("span", { className: "x-path-t" }, d ? "\u2713" : t.tomorrow ? "9:00 AM" : t.wk === "now" ? "now" : t.label.replace(":00", "")));
  }));
}
function XWhen({ t, now }) {
  const s = xStatusOf(t, now);
  if (s.cls === "x-when-due") return /* @__PURE__ */ I.createElement("span", { className: "x-when lz lz-information" }, s.text);
  return /* @__PURE__ */ I.createElement("span", { className: "x-when " + s.cls }, s.text);
}
function XCallPlan({ lead, persona, t }) {
  const lines = xSay(lead, persona);
  const vm = xFillSay(XVM[lead.scenario], lead, persona);
  const secs = xVoicemail(t);
  const follow = lead.consent.sms && lead.contacted ? xMessage(lead, "text", persona) : lead.consent.email ? xMessage(lead, "email", persona) : null;
  return /* @__PURE__ */ I.createElement("div", { className: "x-call" }, /* @__PURE__ */ I.createElement("div", { className: "x-call-dial" }, "Dial ", /* @__PURE__ */ I.createElement("b", { className: "mono" }, lead.phone), !lead.consent.sms && !lead.consent.email ? /* @__PURE__ */ I.createElement("span", { className: "x-call-note" }, " \xB7 Manual dial only. Ask for their OK to text on the call.") : null), /* @__PURE__ */ I.createElement("ol", { className: "x-say" }, lines.map((s, i) => /* @__PURE__ */ I.createElement("li", { key: i }, /* @__PURE__ */ I.createElement("span", { className: `x-badge x-badge-${i + 1}`, "data-n": i + 1, "aria-hidden": "true" }), /* @__PURE__ */ I.createElement("div", null, /* @__PURE__ */ I.createElement("div", { className: "x-say-k" }, XMOVE_NAMES[i]), /* @__PURE__ */ I.createElement("div", { className: "x-say-t" }, s))))), /* @__PURE__ */ I.createElement("details", { className: "x-vm" }, /* @__PURE__ */ I.createElement("summary", null, secs ? `No answer? Leave a voicemail, ${secs === 30 ? "under 30 seconds" : "about 15 seconds"}` : "No answer? No voicemail on this call"), /* @__PURE__ */ I.createElement("div", { className: "x-vm-body" }, secs ? /* @__PURE__ */ I.createElement(I.Fragment, null, /* @__PURE__ */ I.createElement("div", { className: "x-say-k" }, "Leave this voicemail"), /* @__PURE__ */ I.createElement("div", { className: "x-say-t" }, vm)) : /* @__PURE__ */ I.createElement("div", { className: "x-say-t" }, "Hang up without a message. A new lead gets two voicemails at most: one on the second call, one on a later call. ", /* @__PURE__ */ I.createElement(XRefs, { ids: ["T14"] })), follow && /* @__PURE__ */ I.createElement(I.Fragment, null, /* @__PURE__ */ I.createElement("div", { className: "x-say-k" }, "Then ", lead.consent.sms && lead.contacted ? "text" : "email", " this"), /* @__PURE__ */ I.createElement("div", { className: "x-say-t x-say-sms" }, follow.body)))));
}
function XFiveMin({ mins }) {
  const [t0] = I.useState(Date.now());
  const [, tick] = I.useState(0);
  I.useEffect(() => {
    const h = setInterval(() => tick((x) => x + 1), 1e3);
    return () => clearInterval(h);
  }, []);
  const el = Math.floor((Date.now() - t0) / 1e3), m = Math.floor(el / 60), ss = String(el % 60).padStart(2, "0");
  const over = el > mins * 60;
  return /* @__PURE__ */ I.createElement("span", { className: "x-timer" + (over ? " is-over" : ""), title: `This block is ${mins} minutes; past that, log what you have and move on` }, /* @__PURE__ */ I.createElement("span", { className: "mono" }, m, ":", ss), /* @__PURE__ */ I.createElement("small", null, " of ", mins, ":00"));
}
function XDo({ v, persona, onAct, big }) {
  const [copied, setCopied] = I.useState(false);
  const t = v.current, lead = v.lead, ch = t.ch;
  const okText = !!lead.consent.sms, okEmail = !!lead.consent.email;
  const msg = ch === "call" ? null : xMessage(lead, ch, persona);
  const blocked = ch === "text" && !okText || ch === "email" && !okEmail;
  const outs = xOuts(ch, t);
  const copyText = msg ? ch === "email" ? `Subject: ${msg.subject}

${msg.body}` : msg.body : "";
  return /* @__PURE__ */ I.createElement("div", { className: "x-do" + (big ? " x-do-big" : "") }, XS.coach && /* @__PURE__ */ I.createElement("div", { className: "x-why-now" }, /* @__PURE__ */ I.createElement("span", { className: "x-why-k" }, "Why this, why now"), xTouchWhy(t)), /* @__PURE__ */ I.createElement("div", { className: "x-do-bar" }, /* @__PURE__ */ I.createElement("div", { className: "x-seg x-chan", role: "group", "aria-label": "Channel" }, ["call", "text", "email"].map((c) => {
    const dis = c === "text" && !okText || c === "email" && !okEmail;
    return /* @__PURE__ */ I.createElement("button", { key: c, className: ch === c ? "active" : "", "aria-pressed": ch === c, disabled: dis, title: dis ? `No ${c === "text" ? "text" : "email"} consent on file` : void 0, onClick: () => xSet((s) => ({ chan: { ...s.chan, [t.id]: c } })) }, XCH[c]);
  })), /* @__PURE__ */ I.createElement(Rp, { consent: lead.consent }), /* @__PURE__ */ I.createElement(XFiveMin, { mins: ch === "call" ? 5 : 2 })), ch === "call" && /* @__PURE__ */ I.createElement(XAsks, { lead }), ch === "call" ? /* @__PURE__ */ I.createElement(XCallPlan, { lead, persona, t }) : msg ? /* @__PURE__ */ I.createElement("div", { className: "x-msg" }, ch === "email" && /* @__PURE__ */ I.createElement("div", { className: "x-msg-subject" }, msg.subject), /* @__PURE__ */ I.createElement("div", { className: "x-msg-body" }, msg.body), /* @__PURE__ */ I.createElement("div", { className: "x-msg-foot" }, /* @__PURE__ */ I.createElement("span", { className: "x-msg-note" }, ch === "text" ? `${Zm(msg.body + cf).len} characters with the opt-out line` : "Signature and license line are added on send"), /* @__PURE__ */ I.createElement("button", { className: "btn", onClick: () => {
    xCopy(copyText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1597);
  } }, copied ? "Copied" : "Copy"))) : null, blocked && /* @__PURE__ */ I.createElement("div", { className: "x-blocked" }, "No ", ch === "text" ? "text" : "email", " consent on file. Pick another channel above."), /* @__PURE__ */ I.createElement("div", { className: "x-outs" }, outs.map((k, i) => /* @__PURE__ */ I.createElement("button", { key: k, className: "btn" + (i === 0 ? " primary x-first" : ""), disabled: blocked && k !== "notnow", onClick: () => onAct(k) }, k === "scheduled" ? `Approve \xB7 sends ${t.label}` : XOUTBTN[k], big && i === 0 && /* @__PURE__ */ I.createElement("kbd", null, "Enter"))), /* @__PURE__ */ I.createElement("button", { className: "btn ghost x-skip", onClick: () => onAct("skip") }, "Skip", big && /* @__PURE__ */ I.createElement("kbd", null, "S"))), /* @__PURE__ */ I.createElement(XHelp, { lead, persona }));
}
function XRow({ v, now, isOpen, persona, onToggle, onAct, onUndo }) {
  const lead = v.lead, t = v.current;
  const [lh, setLh] = I.useState(false);
  return /* @__PURE__ */ I.createElement("div", { className: `x-row x-st-${lead.style}${isOpen && t ? " is-open" : ""}${v.complete && v.doneTs.length ? " is-done" : ""}` }, /* @__PURE__ */ I.createElement("div", { className: "x-row-main", onClick: () => t && onToggle() }, /* @__PURE__ */ I.createElement("div", { className: "x-row-text" }, /* @__PURE__ */ I.createElement("div", { className: "x-row-line1" }, /* @__PURE__ */ I.createElement("span", { className: "x-name" }, lead.name), /* @__PURE__ */ I.createElement(XStyleLz, { style: lead.style }), /* @__PURE__ */ I.createElement(Pp, { stage: lead.stage }), /* @__PURE__ */ I.createElement("span", { className: "x-tag" }, XQ_GROUPS.find((g) => g.k === v.group).tag, lead.at ? ` ${lead.at}` : ""), t && /* @__PURE__ */ I.createElement("span", { className: "x-mins", title: "Five minutes: the call, the outcome, the next step is already set" }, "5 min"), lead.consent && lead.consent.stop && /* @__PURE__ */ I.createElement("span", { className: "lz lz-danger x-lz-stop", title: lead.consent.basis }, "Texted STOP ", lead.consent.stop, t ? ` \xB7 now by ${XCH[t.ch].toLowerCase()}` : ""), isOpen && t && /* @__PURE__ */ I.createElement(XLifeChip, { lead, v, open: lh, onToggle: () => setLh(!lh) })), /* @__PURE__ */ I.createElement("div", { className: "x-row-line2" }, /* @__PURE__ */ I.createElement("span", null, lead.reason), lead.meta.map((m, i) => /* @__PURE__ */ I.createElement("span", { key: i, className: "dot" }, m)), /* @__PURE__ */ I.createElement("span", { className: "dot x-src", title: "Where this person comes from in the agency's system" }, xSource(lead))), /* @__PURE__ */ I.createElement("div", { className: "x-row-step" }, t ? /* @__PURE__ */ I.createElement(I.Fragment, null, t.booked ? `Booked call \xB7 ${lead.at}` : `Step ${t.step.n} of ${v.p.N} \xB7 ${xDayLabel(lead)} \xB7 ${t.step.what}`) : v.last ? /* @__PURE__ */ I.createElement(I.Fragment, null, /* @__PURE__ */ I.createElement("span", { className: "x-check" }, "\u2713"), " ", xOutcomeText(v)) : "Nothing due today"), v.ts.length > 0 && /* @__PURE__ */ I.createElement(XPath, { v, now })), /* @__PURE__ */ I.createElement("div", { className: "x-row-side" }, t && /* @__PURE__ */ I.createElement(XWhen, { t, now }), !t ? v.doneTs.length ? /* @__PURE__ */ I.createElement("button", { className: "x-undo", onClick: (e) => {
    e.stopPropagation();
    onUndo();
  } }, "Undo") : null : /* @__PURE__ */ I.createElement("button", { className: "btn x-act x-act-" + t.ch + (isOpen ? " primary" : ""), "aria-expanded": isOpen, onClick: (e) => {
    e.stopPropagation();
    onToggle(true);
  } }, XCH[t.ch]))), isOpen && t && lh && /* @__PURE__ */ I.createElement(XLeadLife, { lead, v, onClose: () => setLh(false) }), isOpen && t && /* @__PURE__ */ I.createElement(XDo, { v, persona, onAct }));
}
function XHowTo({ lead, ch }) {
  if (!lead) return null;
  const cell = XMOVES[lead.scenario][lead.style], st = rf[lead.style];
  return /* @__PURE__ */ I.createElement("div", { className: "card x-howto" }, /* @__PURE__ */ I.createElement("div", { className: "card-head" }, /* @__PURE__ */ I.createElement("span", { className: "title" }, "How to talk to ", xFirst(lead.name)), /* @__PURE__ */ I.createElement(XStyleLz, { style: lead.style })), /* @__PURE__ */ I.createElement("div", { className: "x-howto-body" }, /* @__PURE__ */ I.createElement("div", { className: "x-howto-essence", key: "e" + lead.id }, XESSENCE[lead.style]), /* @__PURE__ */ I.createElement("ol", { className: "x-howto-moves" }, ["m", "f", "a"].map((k, i) => /* @__PURE__ */ I.createElement("li", { key: k + lead.id }, /* @__PURE__ */ I.createElement("span", { className: `x-badge x-badge-${i + 1}`, "data-n": i + 1, "aria-hidden": "true" }), /* @__PURE__ */ I.createElement("div", null, /* @__PURE__ */ I.createElement("div", { className: "x-say-k" }, XMOVE_NAMES[i]), /* @__PURE__ */ I.createElement("div", { className: "x-howto-label" }, xFillLabel(cell[k].label, lead)))))), /* @__PURE__ */ I.createElement(XLevers, { style: lead.style, scenario: lead.scenario, channel: ch, compact: true })));
}
function XFocus({ v, now, persona, score, total, onAct, onClose }) {
  const ref = I.useRef({});
  ref.current = { v, onAct, onClose };
  I.useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const h = (e) => {
      const r = ref.current, tag = e.target && e.target.tagName || "";
      if (e.key === "Escape") {
        r.onClose();
        return;
      }
      if (!r.v || !r.v.current || /INPUT|TEXTAREA|SELECT/.test(tag)) return;
      const outs = xOuts(r.v.current.ch, r.v.current);
      if (e.key === "Enter" && tag !== "BUTTON" && tag !== "SUMMARY") {
        e.preventDefault();
        r.onAct(outs[0]);
      } else if (/^[2-5]$/.test(e.key) && outs[+e.key - 1]) r.onAct(outs[+e.key - 1]);
      else if (e.key === "s" || e.key === "S") r.onAct("skip");
    };
    window.addEventListener("keydown", h);
    return () => {
      window.removeEventListener("keydown", h);
      document.body.style.overflow = prev;
    };
  }, []);
  const g = v ? XQ_GROUPS.find((x) => x.k === v.group) : null;
  return /* @__PURE__ */ I.createElement("div", { className: "x-focus", role: "dialog", "aria-modal": "true", "aria-label": "Start my 20", onClick: (e) => {
    if (e.target === e.currentTarget) onClose();
  } }, /* @__PURE__ */ I.createElement("div", { className: "x-focus-panel" }, /* @__PURE__ */ I.createElement("div", { className: "x-focus-top" }, /* @__PURE__ */ I.createElement("div", { className: "x-focus-progress" }, /* @__PURE__ */ I.createElement("span", null, score.touched, " of ", total, " touched \xB7 ", score.quotes, " quote", score.quotes === 1 ? "" : "s", " \xB7 ", score.apps, " app", score.apps === 1 ? "" : "s", " / ", score.hh, " HH"), /* @__PURE__ */ I.createElement("div", { className: "x-tile-bar" }, /* @__PURE__ */ I.createElement("i", { style: { width: score.touched / total * 100 + "%" } })), /* @__PURE__ */ I.createElement("span", { className: "x-focus-keys" }, "Keys: Enter = first button \xB7 2\u20135 = the others \xB7 S = skip \xB7 Esc = exit")), /* @__PURE__ */ I.createElement("button", { className: "btn ghost", onClick: onClose }, "Exit", /* @__PURE__ */ I.createElement("kbd", null, "Esc"))), v && v.current ? /* @__PURE__ */ I.createElement("div", { className: "x-focus-body", key: v.current.id }, /* @__PURE__ */ I.createElement("div", { className: "x-focus-head" }, /* @__PURE__ */ I.createElement("div", null, /* @__PURE__ */ I.createElement("div", { className: "x-focus-group" }, g ? g.title : "", xIsDue(v.current, now) ? "" : " \xB7 coming up"), /* @__PURE__ */ I.createElement("h2", { className: "x-focus-name" }, v.lead.name), /* @__PURE__ */ I.createElement("div", { className: "x-row-line1" }, /* @__PURE__ */ I.createElement(XStyleLz, { style: v.lead.style }), /* @__PURE__ */ I.createElement(Pp, { stage: v.lead.stage })), /* @__PURE__ */ I.createElement("div", { className: "x-row-line2" }, /* @__PURE__ */ I.createElement("span", null, v.lead.reason), v.lead.meta.map((m, i) => /* @__PURE__ */ I.createElement("span", { key: i, className: "dot" }, m))), /* @__PURE__ */ I.createElement("div", { className: "x-row-step" }, v.current.booked ? `Booked call \xB7 ${v.lead.at}` : `Step ${v.current.step.n} of ${v.p.N} \xB7 ${xDayLabel(v.lead)} \xB7 ${v.current.step.what}`), /* @__PURE__ */ I.createElement(XPath, { v, now })), /* @__PURE__ */ I.createElement(XWhen, { t: v.current, now })), /* @__PURE__ */ I.createElement("div", { className: "x-focus-grid" }, /* @__PURE__ */ I.createElement(XDo, { big: true, v, persona, onAct }), /* @__PURE__ */ I.createElement(XHowTo, { lead: v.lead, ch: v.current.ch }))) : /* @__PURE__ */ I.createElement("div", { className: "x-focus-done" }, /* @__PURE__ */ I.createElement("h2", null, "All ", total, " touched."), /* @__PURE__ */ I.createElement("p", null, score.quotes, " quotes \xB7 ", score.apps, " apps / ", score.hh, " HH protected today."), /* @__PURE__ */ I.createElement("button", { className: "btn primary", onClick: onClose }, "Back to the queue"))));
}
function xAct(v, k, order) {
  if (!v || !v.current) return;
  const ids = order.map((x) => x.lead.id);
  const after = (from) => {
    const i = ids.indexOf(from);
    for (let j = 1; j <= ids.length; j++) {
      const c = ids[(i + j + ids.length) % ids.length];
      if (c !== from) return c;
    }
    return null;
  };
  if (k === "skip") {
    xSet({ open: after(v.lead.id) });
    return;
  }
  const before = xScore(XS.done);
  const done = { ...XS.done, [v.current.id]: { k, ch: v.current.ch, at: Date.now(), t: k === "scheduled" ? v.current.slot : xClock(), by: XS.persona || null, when: xClock() } };
  const b = xScore(done), bump = {};
  for (const key of ["touched", "quotes", "apps", "hh"]) if (b[key] > before[key]) bump[key] = Date.now();
  xSet({ done, bump });
  const views = xLeadViews(xBuildDay(XQ));
  const next = xWorkOrder(views, xClock()).find((x) => x.lead.id !== v.lead.id) || xWorkOrder(views, xClock())[0] || null;
  xSet({ open: next ? next.lead.id : null });
}
function xUndo(v) {
  if (!v.last) return;
  const done = { ...XS.done };
  delete done[v.last.id];
  xSet({ done, open: v.lead.id });
}
function xAsks() {
  let life = 0, ref = 0;
  for (const k of Object.keys(XS.asks)) {
    if (XS.asks[k].life) life++;
    if (XS.asks[k].ref) ref++;
  }
  return { life, ref };
}
function XAsks({ lead }) {
  const s = useXS();
  const a = s.asks[lead.id] || {};
  const flip = (k) => xSet((st) => ({ asks: { ...st.asks, [lead.id]: { ...st.asks[lead.id] || {}, [k]: !a[k] } } }));
  return /* @__PURE__ */ I.createElement("div", { className: "x-asks", role: "group", "aria-label": "On this call" }, /* @__PURE__ */ I.createElement("span", { className: "x-asks-k" }, "On this call"), /* @__PURE__ */ I.createElement("button", { className: "x-ask" + (a.life ? " is-on" : ""), "aria-pressed": !!a.life, onClick: () => flip("life") }, a.life ? "\u2713 " : "", "Asked about life"), /* @__PURE__ */ I.createElement("button", { className: "x-ask" + (a.ref ? " is-on" : ""), "aria-pressed": !!a.ref, onClick: () => flip("ref") }, a.ref ? "\u2713 " : "", "Asked for a referral"));
}
function xWeek(score, F) {
  const wd = (/* @__PURE__ */ new Date()).getDay(), idx = wd === 0 || wd === 6 ? 5 : wd, prior = idx - 1;
  const apps = Math.round(prior * 3.25) + score.apps, hh = Math.round(prior * 1.5) + score.hh;
  return { idx, prior, apps, hh, appsGoal: F.apps * 5, hhGoal: F.households * 5, appsTick: F.apps * prior, hhTick: F.households * prior };
}
function XStatusLine({ pr, next, now, onOpen }) {
  const b = pr.behind;
  const st = b === 0 ? ["ok", "\u2713", pr.doneNow ? "On track" : "Ready"] : b <= 3 ? ["warn", "\u25CF", `${b} running late`] : ["bad", "\u25B2", `${b} late`];
  const open = Math.max(0, pr.dueNow - pr.doneNow);
  return /* @__PURE__ */ I.createElement("div", { className: "x-status", role: "status" }, /* @__PURE__ */ I.createElement("span", { className: `x-andon is-${st[0]}` }, /* @__PURE__ */ I.createElement("span", { "aria-hidden": "true" }, st[1]), st[2]), Object.keys(XS.help).length > 0 && /* @__PURE__ */ I.createElement("span", { className: "x-andon is-help" }, /* @__PURE__ */ I.createElement("span", { "aria-hidden": "true" }, "\u25CF"), Object.keys(XS.help).length, " help asked"), /* @__PURE__ */ I.createElement("span", { className: "x-status-t", title: "Late = more than 30 minutes past its time" }, pr.doneNow, " done \xB7 ", open, " due now \xB7 ", Math.max(0, pr.plan.length - pr.dueNow), " later today", pr.firstsDone ? ` \xB7 first calls inside 5 min: ${pr.fast} of ${pr.firstsDone}` : ""));
}
function XScoreboard({ pr, score, F, bump, onStart, fresh, pro, cool }) {
  const asks = xAsks(), wk = xWeek(score, F);
  const s = useXS();
  const more = !!s.boardOpen;
  return /* @__PURE__ */ I.createElement("div", { className: "x-board" + (more ? " is-more" : "") }, /* @__PURE__ */ I.createElement("div", { className: "x-board-mini" }, /* @__PURE__ */ I.createElement("span", null, /* @__PURE__ */ I.createElement("b", null, pr.handled), "/", pr.plan.length, " touches"), /* @__PURE__ */ I.createElement("span", null, /* @__PURE__ */ I.createElement("b", null, pr.callsDone), "/", pr.calls, " calls"), /* @__PURE__ */ I.createElement("span", null, /* @__PURE__ */ I.createElement("b", null, score.quotes), "/", F.quoted, " quotes"), /* @__PURE__ */ I.createElement("span", null, /* @__PURE__ */ I.createElement("b", null, wk.apps), "/", wk.appsGoal, " apps this week"), /* @__PURE__ */ I.createElement("button", { className: "x-board-more", "aria-expanded": more, onClick: () => xSet({ boardOpen: !more }) }, more ? "Less" : "More")), /* @__PURE__ */ I.createElement("div", { className: "x-board-group x-board-process" }, /* @__PURE__ */ I.createElement("div", { className: "x-board-k" }, "Process", /* @__PURE__ */ I.createElement("span", null, "what you control")), /* @__PURE__ */ I.createElement("div", { className: "x-board-row" }, /* @__PURE__ */ I.createElement(XMeter, { label: "Touches", v: pr.handled, of: pr.plan.length, tick: pr.dueNow, sub: `by now ${pr.dueNow}` }), /* @__PURE__ */ I.createElement(XMeter, { label: "Calls", v: pr.callsDone, of: pr.calls }), /* @__PURE__ */ I.createElement(XMeter, { label: "Life talks", v: asks.life, of: 3 }), /* @__PURE__ */ I.createElement(XMeter, { label: "Referrals", v: asks.ref, of: 3 }), /* @__PURE__ */ I.createElement(XMeter, { label: "Proactive", v: pro.done, of: pro.total }), /* @__PURE__ */ I.createElement(XMeter, { label: "Cooler", v: cool.done, of: cool.total }))), /* @__PURE__ */ I.createElement("div", { className: "x-board-arrow", "aria-hidden": "true" }, "\u2192"), /* @__PURE__ */ I.createElement("div", { className: "x-board-group x-board-results" }, /* @__PURE__ */ I.createElement("div", { className: "x-board-k" }, "Results", /* @__PURE__ */ I.createElement("span", null, "they follow \xB7 apps and households week to date (demo history)")), /* @__PURE__ */ I.createElement("div", { className: "x-board-row" }, /* @__PURE__ */ I.createElement(XUnits, { label: "Quotes today", v: score.quotes, of: F.quoted, bump: bump.quotes }), /* @__PURE__ */ I.createElement(XMeter, { label: "Apps \xB7 week", v: wk.apps, of: wk.appsGoal, tick: wk.appsTick, sub: wk.prior ? `plan so far ${wk.appsTick}` : "week starts today" }), /* @__PURE__ */ I.createElement(XMeter, { label: "HH \xB7 week", v: wk.hh, of: wk.hhGoal, tick: wk.hhTick, sub: wk.prior ? `plan so far ${wk.hhTick}` : "week starts today" }))), /* @__PURE__ */ I.createElement("div", { className: "x-start" }, /* @__PURE__ */ I.createElement("button", { className: "x-start-btn" + (fresh ? " x-first" : ""), onClick: onStart }, fresh ? "Start the next 5 minutes" : "Next 5 minutes", " ", /* @__PURE__ */ I.createElement("span", { "aria-hidden": "true" }, "\u2192")), /* @__PURE__ */ I.createElement("div", { className: "x-start-sub" }, "One at a time, five minutes each; the next one opens by itself.")));
}
function xPeek(body, lead) {
  const first = xFirst(lead.name);
  const text = (body || "").replace(/\s+/g, " ").trim();
  const short = text.length > 190 ? text.slice(0, 187).replace(/\s+\S*$/, "") + "\u2026" : text;
  const parts = short.split(new RegExp(`(\\$\\d[\\d,]*(?:\\/mo\\.?)?|\\b${first}\\b|\\[[^\\]]+\\])`, "g"));
  return parts.map((p, i) => i % 2 ? /* @__PURE__ */ I.createElement("mark", { key: i, className: /^\[/.test(p) ? "x-fill" : "" }, p) : p);
}
function XMsgRow({ v, now, isOpen, persona, onToggle, onAct, onUndo }) {
  const lead = v.lead, t = v.current;
  const [lh, setLh] = I.useState(false);
  const msg = t ? xMessage(lead, t.ch, persona) : null;
  const later = t && !t.tomorrow && t.slot > now;
  return /* @__PURE__ */ I.createElement("div", { className: `x-row x-msgrow x-st-${lead.style}${isOpen && t ? " is-open" : ""}` }, /* @__PURE__ */ I.createElement("div", { className: "x-row-main", onClick: () => t && onToggle() }, /* @__PURE__ */ I.createElement("div", { className: "x-row-text" }, /* @__PURE__ */ I.createElement("div", { className: "x-row-line1" }, /* @__PURE__ */ I.createElement("span", { className: "x-name" }, lead.name), /* @__PURE__ */ I.createElement(XStyleLz, { style: lead.style }), /* @__PURE__ */ I.createElement("span", { className: `x-chip x-chip-${t.ch}` }, XCH[t.ch]), /* @__PURE__ */ I.createElement("span", { className: "x-tag" }, XQ_GROUPS.find((g) => g.k === v.group).tag), /* @__PURE__ */ I.createElement("span", { className: "x-mins", title: "Check the marked facts and approve: about two minutes" }, "2 min"), !xBatchOk(v) && /* @__PURE__ */ I.createElement("span", { className: "x-alone", title: "Life-insurance messages are approved one at a time" }, "Check by itself"), isOpen && t && /* @__PURE__ */ I.createElement(XLifeChip, { lead, v, open: lh, onToggle: () => setLh(!lh) })), /* @__PURE__ */ I.createElement("div", { className: "x-row-step" }, `Step ${t.step.n} of ${v.p.N} \xB7 ${xDayLabel(lead)} \xB7 ${t.step.what}`), msg && /* @__PURE__ */ I.createElement("div", { className: "x-msg-peek" }, t.ch === "email" && /* @__PURE__ */ I.createElement("b", null, /[.?!…]$/.test(msg.subject) ? msg.subject : msg.subject + ".", " "), xPeek(msg.body, lead)), /* @__PURE__ */ I.createElement("div", { className: "x-facts" }, "Check: ", xFacts(lead, t.ch))), /* @__PURE__ */ I.createElement("div", { className: "x-row-side" }, /* @__PURE__ */ I.createElement("div", { className: "x-sends" }, /* @__PURE__ */ I.createElement("span", { className: "x-sends-k" }, "sends"), /* @__PURE__ */ I.createElement(XWhen, { t, now })), /* @__PURE__ */ I.createElement("button", { className: "btn primary x-approve", onClick: (e) => {
    e.stopPropagation();
    onAct(later ? "scheduled" : "sent");
  } }, later ? "Approve" : "Send"))), isOpen && t && lh && /* @__PURE__ */ I.createElement(XLeadLife, { lead, v, onClose: () => setLh(false) }), isOpen && /* @__PURE__ */ I.createElement(XDo, { v, persona, onAct }));
}
function xFacts(lead, ch) {
  const f = [`${xFirst(lead.name)}'s name`];
  if (lead.proposed) f.push(`$${lead.proposed}/mo quote`);
  if (lead.current) f.push(`$${lead.current}/mo today`);
  f.push(ch === "text" ? "text consent on file" : "email consent on file");
  return f.join(" \xB7 ");
}
function XHelp({ lead, persona }) {
  const s = useXS();
  const h = s.help[lead.id];
  const who = persona === "Alex" ? "Maya" : "Alex";
  if (h) return /* @__PURE__ */ I.createElement("div", { className: "x-help is-on" }, /* @__PURE__ */ I.createElement("span", { "aria-hidden": "true" }, "\u25CF"), " Help asked ", xFmt(h.at), " \xB7 ", h.to, " will see it here ", /* @__PURE__ */ I.createElement("button", { className: "x-undo", onClick: () => {
    const n = { ...s.help };
    delete n[lead.id];
    xSet({ help: n });
  } }, "Cancel"));
  return /* @__PURE__ */ I.createElement("div", { className: "x-help" }, /* @__PURE__ */ I.createElement("button", { className: "x-help-btn", onClick: () => xSet((st) => ({ help: { ...st.help, [lead.id]: { at: xClock(), to: who, by: persona } } })) }, "Stuck? Ask ", who));
}
function xBatchOk(v) {
  return !/\blife\b/i.test([v.lead.reason, ...v.lead.meta || []].join(" "));
}
function xApproveAll(rows) {
  const now = xClock(), done = { ...XS.done };
  for (const v of rows) {
    const t = v.current;
    if (!t || t.ch === "call" || t.blocked || !xBatchOk(v)) continue;
    const later = !t.tomorrow && t.slot > now;
    done[t.id] = { k: later ? "scheduled" : "sent", ch: t.ch, at: Date.now(), t: later ? t.slot : now, batch: true, by: XS.persona || null, when: now };
  }
  xSet({ done });
}
function xFold(list, now, row, open) {
  const due = list.filter((v) => xIsDue(v.current, now) || v.lead.id === open);
  const later = list.filter((v) => !due.includes(v));
  const shown = later.slice(0, Math.max(0, 3 - Math.max(0, due.length - 4))), rest = later.slice(shown.length);
  return /* @__PURE__ */ I.createElement(I.Fragment, null, due.map(row), shown.map(row), rest.length > 0 && /* @__PURE__ */ I.createElement("details", { className: "x-later" }, /* @__PURE__ */ I.createElement("summary", null, "Later today \xB7 ", rest.length, " more"), rest.map(row)));
}
function xAllMsgs(list, now, row) {
  const sorted = list.slice().sort((a, b) => a.current.slot - b.current.slot);
  return /* @__PURE__ */ I.createElement(I.Fragment, null, sorted.map(row));
}
function XLane({ title, n, rule, action, children, quiet, sub }) {
  return /* @__PURE__ */ I.createElement("div", { className: "x-lane" + (quiet ? " is-quiet" : "") + (sub ? " is-sub" : "") }, /* @__PURE__ */ I.createElement("div", { className: "x-group-head" }, /* @__PURE__ */ I.createElement("span", { className: "x-group-title" }, title), /* @__PURE__ */ I.createElement("span", { className: "x-group-n" }, n), rule && /* @__PURE__ */ I.createElement("span", { className: "x-group-rule" }, rule), action), children);
}
function XToday({ persona }) {
  const s = useXS();
  const [, setTick] = I.useState(0);
  I.useEffect(() => {
    const t = setInterval(() => setTick((x) => x + 1), 1e3);
    return () => clearInterval(t);
  }, []);
  if (s.view === "workflow") return /* @__PURE__ */ I.createElement(XWorkflow, { persona });
  if (s.view === "classic") return /* @__PURE__ */ I.createElement(XClassic, { persona });
  if (s.view === "plan") {
    const home = s.home === "workflow" || s.home === "classic" ? s.home : "queue";
    return /* @__PURE__ */ I.createElement(I.Fragment, null, /* @__PURE__ */ I.createElement("div", { className: "x-backbar" }, /* @__PURE__ */ I.createElement("button", { className: "x-planlink", onClick: () => xSet({ view: home }) }, home === "workflow" ? "\u2190 Back to Workflow" : home === "classic" ? "\u2190 Back to Classic" : "\u2190 Back to today's queue")), /* @__PURE__ */ I.createElement(XDayPlan, { persona }));
  }
  XS.persona = persona;
  if (!XS.seeded) {
    XS.seeded = true;
    if (!XFRESH) xSeedUpTo(XS.clock, true);
  }
  const now = xClock();
  const day = xBuildDay(XQ, now);
  const pr = xProgress(day, now);
  const views = pr.views;
  const order = xWorkOrder(views, now);
  const F = Ef.funnel;
  const score = xScore(s.done);
  const open = s.open != null ? s.open : order[0] ? order[0].lead.id : null;
  const openV = views.find((v) => v.lead.id === open) || null;
  const sideV = (openV && openV.current ? openV : null) || order[0] || views[0];
  const next = order.find((v) => xIsDue(v.current, now)) || order[0] || null;
  const booked = views.filter((v) => v.lead.at).sort((a, b) => xParseAt(a.lead.at) - xParseAt(b.lead.at));
  const blocked = order.filter((v) => v.current.blocked);
  const calls = order.filter((v) => v.current.ch === "call" && !v.current.blocked);
  const msgs = order.filter((v) => v.current.ch !== "call" && !v.current.blocked);
  const texts = msgs.filter((v) => v.current.ch === "text"), emails = msgs.filter((v) => v.current.ch === "email");
  const msgsDue = msgs.filter((v) => xIsDue(v.current, now));
  const batch = msgs.filter(xBatchOk);
  const handled = views.filter((v) => !v.current && v.doneTs.length);
  const sched = day.touches.filter((t) => XS.done[t.id] && XS.done[t.id].k === "scheduled" && XS.done[t.id].t > now).sort((a, b) => a.slot - b.slot);
  const start = () => {
    if (!openV || !openV.current) xSet({ open: next ? next.lead.id : null });
    xSet({ focus: true });
  };
  const fresh = !Object.keys(s.done).length;
  const mix = { call: 0, text: 0, email: 0 };
  for (const t of pr.plan) mix[t.ch]++;
  const auto = mix.text + mix.email;
  const openLead = (id) => xSet({ open: id });
  const row = (v) => v.current.ch === "call" ? /* @__PURE__ */ I.createElement(XRow, { key: v.lead.id, v, now, isOpen: open === v.lead.id, persona, onToggle: (force) => xSet({ open: force === true ? v.lead.id : open === v.lead.id ? "" : v.lead.id }), onAct: (k) => xAct(v, k, order), onUndo: () => xUndo(v) }) : /* @__PURE__ */ I.createElement(XMsgRow, { key: v.lead.id, v, now, isOpen: open === v.lead.id, persona, onToggle: () => xSet({ open: open === v.lead.id ? "" : v.lead.id }), onAct: (k) => xAct(v, k, order), onUndo: () => xUndo(v) });
  return /* @__PURE__ */ I.createElement("section", { className: "view active x-today x-lean" }, /* @__PURE__ */ I.createElement("div", { className: "x-top" }, /* @__PURE__ */ I.createElement("div", { className: "x-top-left" }, /* @__PURE__ */ I.createElement("h1", null, Gm(Math.floor(now / 60)), ", ", /* @__PURE__ */ I.createElement("span", null, persona), "."), /* @__PURE__ */ I.createElement(XStatusLine, { pr, next, now, onOpen: openLead })), /* @__PURE__ */ I.createElement("div", { className: "x-top-right" }, /* @__PURE__ */ I.createElement(XCompliance, { day }), /* @__PURE__ */ I.createElement(XViewSwitch, { view: "queue" }), /* @__PURE__ */ I.createElement("button", { className: "x-planlink", onClick: () => xSet({ view: "plan" }), title: "The whole day, hour by hour" }, "Day plan \u2192"))), /* @__PURE__ */ I.createElement("div", { className: "x-topgrid" }, /* @__PURE__ */ I.createElement(XLook, { views, order, now, handled, score, onOpen: openLead }), /* @__PURE__ */ I.createElement("div", { className: "x-topright" }, /* @__PURE__ */ I.createElement(XDayStrip, { pr, now, mix, clock: s.clock }), /* @__PURE__ */ I.createElement(XScoreboard, { pr, score, F, bump: s.bump, onStart: start, fresh, pro: xProCount(day), cool: xCoolCount() }))), /* @__PURE__ */ I.createElement("div", { className: "x-grid" }, /* @__PURE__ */ I.createElement("div", { className: "card x-queue" }, /* @__PURE__ */ I.createElement("div", { className: "card-head x-queue-head" }, /* @__PURE__ */ I.createElement("span", { className: "title" }, "Today's prospects \xB7 ", XQ.length, " + ", XCOOL.length, " cooler"), /* @__PURE__ */ I.createElement("div", { className: "x-seg x-coach", role: "group", "aria-label": "Coaching" }, /* @__PURE__ */ I.createElement("span", { className: "x-viewbar-label" }, "Coaching"), [[true, "On"], [false, "Off"]].map(([v, l]) => /* @__PURE__ */ I.createElement("button", { key: l, className: s.coach === v ? "active" : "", "aria-pressed": s.coach === v, onClick: () => xSetCoach(v), title: v ? "Tips and the why on every touch: best for newer team members" : "Just the work: for experienced team members" }, l))), /* @__PURE__ */ I.createElement("span", { className: "count" }, handled.length, " handled \xB7 ", XQ.length - handled.length, " to go")), blocked.length > 0 && /* @__PURE__ */ I.createElement(XLane, { title: /* @__PURE__ */ I.createElement(Lozenge, { appearance: "warning" }, "Needs a decision"), n: blocked.length, rule: "The system stopped these; each says why." }, blocked.map(row)), /* @__PURE__ */ I.createElement(XLane, { title: "Your calls \xB7 at their hour", n: calls.length, rule: s.coach ? "Calls happen at their hour: that is where the contact rate is. Due now first, then by time; your words are on each call." : null }, xFold(calls, now, row, open), !calls.length && /* @__PURE__ */ I.createElement("div", { className: "x-empty" }, "No calls left today."), /* @__PURE__ */ I.createElement(XCoolFold, { ch: "call", coach: s.coach })), /* @__PURE__ */ I.createElement("div", { className: "x-lane-group" }, /* @__PURE__ */ I.createElement("div", { className: "x-group-head x-group-head-msgs" }, /* @__PURE__ */ I.createElement("span", { className: "x-group-title" }, "Messages \xB7 work any time"), /* @__PURE__ */ I.createElement("span", { className: "x-group-n" }, msgs.length), s.coach && /* @__PURE__ */ I.createElement("span", { className: "x-group-rule" }, "Drafted from your templates. Check the marked parts and approve whenever you have a minute, in open time or at a pause point; each one sends by itself at its set hour, and the send records who approved it."), batch.length > 1 ? /* @__PURE__ */ I.createElement("button", { className: "btn x-approve-all", onClick: () => xApproveAll(msgs), title: batch.length < msgs.length ? `${msgs.length - batch.length} marked \u201CCheck by itself\u201D stay for you to approve one at a time` : void 0 }, "Approve ", batch.length === msgs.length ? `all ${batch.length}` : `${batch.length} routine`) : null), /* @__PURE__ */ I.createElement(XLane, { title: "Texts", n: texts.length, sub: true }, xAllMsgs(texts, now, row), !texts.length && /* @__PURE__ */ I.createElement("div", { className: "x-empty" }, "Every text is checked. They send at their hours."), /* @__PURE__ */ I.createElement(XCoolFold, { ch: "text", coach: s.coach })), /* @__PURE__ */ I.createElement(XLane, { title: "Emails", n: emails.length, sub: true }, xAllMsgs(emails, now, row), !emails.length && /* @__PURE__ */ I.createElement("div", { className: "x-empty" }, "Every email is checked. They send at their hours."), /* @__PURE__ */ I.createElement(XCoolFold, { ch: "email", coach: s.coach }))), (sched.length > 0 || handled.length > 0) && /* @__PURE__ */ I.createElement("details", { className: "x-lane x-lane-done" }, /* @__PURE__ */ I.createElement("summary", { className: "x-group-head" }, /* @__PURE__ */ I.createElement("span", { className: "x-group-title" }, "Handled today"), /* @__PURE__ */ I.createElement("span", { className: "x-group-n" }, handled.length), /* @__PURE__ */ I.createElement("span", { className: "x-group-rule" }, sched.length ? `${sched.length} approved message${sched.length === 1 ? "" : "s"} will send on time` : "Tap to see them")), sched.map((t) => /* @__PURE__ */ I.createElement("div", { key: t.id, className: "x-done-row" }, /* @__PURE__ */ I.createElement("span", { className: "mono" }, xFmt(t.slot)), /* @__PURE__ */ I.createElement("span", { className: `x-chip x-chip-${t.ch}` }, XCH[t.ch]), /* @__PURE__ */ I.createElement("span", null, t.lead.name), /* @__PURE__ */ I.createElement("span", { className: "x-done-what" }, t.step.what, " \xB7 ", /* @__PURE__ */ I.createElement(Lozenge, { appearance: "success" }, "Approved"), " sends on time"))), handled.map((v) => /* @__PURE__ */ I.createElement("div", { key: v.lead.id, className: "x-done-row" }, /* @__PURE__ */ I.createElement("span", { className: "x-check" }, "\u2713"), /* @__PURE__ */ I.createElement("span", null, v.lead.name), /* @__PURE__ */ I.createElement("span", { className: "x-done-what" }, xOutcomeText(v)), /* @__PURE__ */ I.createElement("button", { className: "x-undo", onClick: () => xUndo(v) }, "Undo")))), /* @__PURE__ */ I.createElement("div", { className: "x-queue-foot" }, /* @__PURE__ */ I.createElement("span", null, "Every lead comes preset with its step, its channel, its hour and its words. Nothing to set up."), /* @__PURE__ */ I.createElement("button", { className: "btn ghost", onClick: () => xStartOver() }, "Start the day over"))), /* @__PURE__ */ I.createElement("div", { className: "x-side" }, /* @__PURE__ */ I.createElement(XOpenTime, { day, now, coach: s.coach }), s.coach && sideV && /* @__PURE__ */ I.createElement(XHowTo, { lead: sideV.lead, ch: sideV.current ? sideV.current.ch : "call" }), /* @__PURE__ */ I.createElement("div", { className: "card x-agenda" }, /* @__PURE__ */ I.createElement("div", { className: "card-head" }, /* @__PURE__ */ I.createElement("span", { className: "title" }, "Booked today"), /* @__PURE__ */ I.createElement("span", { className: "count" }, String(booked.length).padStart(2, "0"))), booked.map((v) => /* @__PURE__ */ I.createElement("button", { key: v.lead.id, className: "x-agenda-row" + (v.current ? "" : " is-done"), onClick: () => xSet({ open: v.lead.id }) }, /* @__PURE__ */ I.createElement("span", { className: "mono x-agenda-time" }, v.lead.at), /* @__PURE__ */ I.createElement("span", { className: "x-agenda-name" }, v.lead.name), /* @__PURE__ */ I.createElement("span", { className: "x-agenda-what" }, v.lead.reason)))))), s.focus && /* @__PURE__ */ I.createElement(
    XFocus,
    {
      v: openV && openV.current ? openV : next,
      now,
      persona,
      score,
      total: XQ.length,
      onAct: (k) => xAct(openV && openV.current ? openV : next, k, order),
      onClose: () => xSet({ focus: false })
    }
  ));
}
const XCOMP_SCRUB = 7 * 60 + 55;
function xCompliance(day) {
  const n = XQ.length;
  const smsOk = XQ.filter((l) => l.consent && l.consent.sms).length, emailOk = XQ.filter((l) => l.consent && l.consent.email).length;
  const stops = XQ.filter((l) => l.consent && l.consent.stop);
  const msgs = day.touches.filter((t) => t.ch !== "call");
  const msgOk = msgs.every((t) => xAllowed(t.ch, t.lead));
  const live = day.touches.filter((t) => t.ch !== "email" && !t.tomorrow && !XS.done[t.id]);
  const hoursOk = live.every((t) => t.slot >= XLEGAL[t.ch][0] && t.slot < XLEGAL[t.ch][1]);
  const capped = day.touches.filter((t) => t.capped).length, capOk = true;
  const dnc = XQ.filter((l) => l.dnc).length;
  const recs = Object.values(XS.done);
  const sends = recs.filter((d) => d.k === "sent" || d.k === "scheduled");
  const signed = sends.filter((d) => d.by).length;
  return [
    { k: "Consent on file", ok: msgOk, how: "System", t: `Written or e-signed, each with its source and date: ${emailOk} of ${n} for email, ${smsOk} of ${n} for text${stops.length ? ` (${stops.length} texted STOP today, so texts are off for ${stops.length === 1 ? "her" : "them"})` : ""}`, ref: "T7" },
    { k: `Rules: ${xState().label}`, ok: hoursOk && capOk, how: "System \xB7 by state", t: `Calls and texts ${xFmt(XLEGAL.call[0]).replace(":00 ", " ").toLowerCase()}\u2013${xFmt(XLEGAL.call[1]).replace(":00 ", " ").toLowerCase()} their time; texts need ${xState().textConsent}; ${xState().cap ? `no more than ${xState().cap} calls to one person in 24 hours${capped ? ` (${capped} moved to tomorrow)` : ""}` : "no attempt cap, three calls on a new lead's first day"}. ${xState().note}`, ref: "T7" },
    { k: "Do Not Call", ok: dnc === 0, how: `System \xB7 ${xFmt(XCOMP_SCRUB)}`, t: `National and agency lists checked: ${dnc === 0 ? "no matches" : `${dnc} match${dnc === 1 ? "" : "es"}, held back`}`, ref: "T7" },
    { k: "Opt-out and disclosures", ok: true, how: stops.length ? `System \xB7 ${stops[0].consent.stop}` : "System", t: `Opt-out line on every text, and STOP takes effect at once${stops.length ? `: ${stops.length} received today at ${stops[0].consent.stop}, texts suppressed in 4 seconds, the next touch moved to email or a call` : ""} (the federal limit is 10 business days); license line, postal address and unsubscribe on every email`, ref: "T37" },
    { k: "Approvals on record", ok: signed === sends.length, how: "Each send", t: sends.length ? `${signed} of ${sends.length} sends today show who approved them and when` : "Every send will show who approved it and when; opening a message is not approving it", ref: "T37" }
  ];
}
function XCompliance({ day }) {
  useXS();
  const checks = xCompliance(day);
  const pass = checks.filter((c) => c.ok).length, all = checks.length, ok = pass === all;
  return /* @__PURE__ */ I.createElement("details", { className: "x-comp" + (ok ? " is-ok" : " is-warn") }, /* @__PURE__ */ I.createElement("summary", { "aria-label": `Compliance check: ${pass} of ${all} passed. Show the checks.` }, /* @__PURE__ */ I.createElement("span", { className: "x-comp-icon", "aria-hidden": "true" }, ok ? "\u2713" : "!"), /* @__PURE__ */ I.createElement("span", { className: "x-comp-text" }, /* @__PURE__ */ I.createElement("span", { className: "x-comp-k" }, "Compliance check"), /* @__PURE__ */ I.createElement("span", { className: "x-comp-n" }, ok ? "All clear" : `${all - pass} to fix`, " \xB7 ", pass, " of ", all, " passed"))), /* @__PURE__ */ I.createElement("div", { className: "x-comp-body" }, /* @__PURE__ */ I.createElement("div", { className: "x-comp-head" }, "Checked by the system before every touch, not ticked by hand \xB7 last run ", xFmt(xClock())), /* @__PURE__ */ I.createElement("ul", null, checks.map((c) => /* @__PURE__ */ I.createElement("li", { key: c.k, className: c.ok ? "ok" : "warn" }, /* @__PURE__ */ I.createElement("span", { className: "x-comp-mark", "aria-hidden": "true" }, c.ok ? "\u2713" : "!"), /* @__PURE__ */ I.createElement("span", null, /* @__PURE__ */ I.createElement("b", null, c.k, "."), " ", c.t, ". ", /* @__PURE__ */ I.createElement("span", { className: "x-comp-how" }, c.how), " ", c.ref && /* @__PURE__ */ I.createElement(XRefs, { ids: [c.ref] }))))), /* @__PURE__ */ I.createElement("details", { className: "x-comp-recs" }, /* @__PURE__ */ I.createElement("summary", null, "See the ", XQ.length, " consent records"), /* @__PURE__ */ I.createElement("ul", null, XQ.map((l) => /* @__PURE__ */ I.createElement("li", { key: l.id }, /* @__PURE__ */ I.createElement("span", { className: "x-comp-rec-name" }, l.name), /* @__PURE__ */ I.createElement("span", { className: "x-comp-rec-ch" + (l.consent.stop ? " is-stop" : "") }, l.consent.sms ? "\u2713 Text" : l.consent.stop ? `\u2715 Text (STOP ${l.consent.stop})` : "\u2715 Text", " \xB7 ", l.consent.email ? "\u2713 Email" : "\u2715 Email"), /* @__PURE__ */ I.createElement("span", { className: "x-comp-rec-src" }, l.consent.basis))))), /* @__PURE__ */ I.createElement("div", { className: "x-comp-foot" }, "In the live version these come from the phone, email and consent records. Demo people only.")));
}
const XCOL = { call: "#2a78d6", email: "#c8790f", text: "#1baf7a", plan: "#C9D3E3", done: "#1F3864", grid: "#ECE8DE", axis: "#C3C2B7", now: "#8C2F39" };
function xProgress(day, now) {
  const views = xLeadViews(day);
  const stopped = {};
  for (const v of views) stopped[v.lead.id] = !v.current && v.doneTs.some((t) => XSTOP.test(XS.done[t.id].k));
  const plan = day.touches.filter((t) => !t.tomorrow && (XS.done[t.id] || !stopped[t.lead.id]));
  const done = plan.filter((t) => XS.done[t.id]);
  const at = (t) => XS.done[t.id] && XS.done[t.id].t != null ? XS.done[t.id].t : t.slot;
  const dueNow = plan.filter((t) => t.slot <= now).length;
  const doneNow = done.filter((t) => at(t) <= now + 0.01).length;
  const hours = [];
  for (let h = 9; h <= 16; h++) {
    const inH = (m) => h === 9 ? m < 10 * 60 : h === 16 ? m >= 16 * 60 : m >= h * 60 && m < (h + 1) * 60;
    hours.push({ h, plan: plan.filter((t) => inH(t.slot)).length, done: done.filter((t) => inH(at(t))).length });
  }
  const calls = plan.filter((t) => t.ch === "call"), callsDone = calls.filter((t) => XS.done[t.id]);
  const firsts = day.touches.filter((t) => t.wk === "now" && t.lead.seen != null);
  const fast = firsts.filter((t) => XS.done[t.id] && XS.done[t.id].t != null && XS.done[t.id].t - xLanded(t.lead) <= 5).length;
  const behind = plan.filter((t) => !XS.done[t.id] && t.slot < now - 30).length;
  const firstsDone = firsts.filter((t) => XS.done[t.id]).length;
  return { views, plan, done, handled: done.length, at, dueNow, doneNow, behind, hours, calls: calls.length, callsDone: callsDone.length, firsts: firsts.length, firstsDone, fast, stopped };
}
function XMeter({ label, v, of, tick, unit, sub }) {
  const pct = of ? Math.min(1, v / of) : 0, tp = of && tick != null ? Math.min(1, tick / of) : null;
  return /* @__PURE__ */ I.createElement("div", { className: "x-meter", role: "group", "aria-label": `${label}: ${v} of ${of}${tick != null ? `, plan by now ${tick}` : ""}` }, /* @__PURE__ */ I.createElement("div", { className: "x-meter-top" }, /* @__PURE__ */ I.createElement("span", { className: "x-meter-k" }, label), /* @__PURE__ */ I.createElement("span", { className: "x-meter-v" }, v, /* @__PURE__ */ I.createElement("small", null, " / ", of, unit ? ` ${unit}` : ""))), /* @__PURE__ */ I.createElement("div", { className: "x-meter-track" }, /* @__PURE__ */ I.createElement("i", { style: { width: pct * 100 + "%" } }), tp != null && /* @__PURE__ */ I.createElement("b", { className: "x-meter-tick", style: { left: tp * 100 + "%" }, title: `Plan by now: ${tick}` })), /* @__PURE__ */ I.createElement("div", { className: "x-meter-sub" }, of ? pct < 0.5 ? `${v} done` : v >= of ? "Done" : `${of - v} to go` : "", sub ? ` \xB7 ${sub}` : ""));
}
function XUnits({ label, v, of, bump }) {
  return /* @__PURE__ */ I.createElement("div", { className: "x-meter x-units", role: "group", "aria-label": `${label}: ${v} of ${of}` }, /* @__PURE__ */ I.createElement("div", { className: "x-meter-top" }, /* @__PURE__ */ I.createElement("span", { className: "x-meter-k" }, label), /* @__PURE__ */ I.createElement("span", { className: "x-meter-v" }, /* @__PURE__ */ I.createElement("span", { key: bump || 0, className: bump ? "x-pop" : "" }, v), /* @__PURE__ */ I.createElement("small", null, " / ", of))), /* @__PURE__ */ I.createElement("div", { className: "x-units-row", "aria-hidden": "true" }, Array.from({ length: of }, (_, i) => /* @__PURE__ */ I.createElement("i", { key: i, className: i < v ? "is-on" : "" }))), /* @__PURE__ */ I.createElement("div", { className: "x-meter-sub" }, v >= of ? "Goal met" : v / of < 0.5 ? `${v} so far` : `${of - v} to go`));
}
function useBoxWidth(def) {
  const ref = I.useRef(null);
  const [w, setW] = I.useState(def);
  I.useEffect(() => {
    if (!ref.current || typeof ResizeObserver === "undefined") return void 0;
    const ro = new ResizeObserver((es) => {
      const cw = Math.round(es[0].contentRect.width);
      if (cw > 0) setW(cw);
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);
  return [ref, w];
}
function XBurnUp({ pr, now, height }) {
  const [hov, setHov] = I.useState(null);
  const [box, W] = useBoxWidth(610);
  const H = height || 165, L = 34, R = 76, T = 13, B = 26;
  const x0 = XDAY.open, x1 = XDAY.close, total = Math.max(1, pr.plan.length);
  const sx = (m) => L + (Math.max(x0, Math.min(x1, m)) - x0) / (x1 - x0) * (W - L - R);
  const sy = (n) => T + (1 - n / total) * (H - T - B);
  const steps = (times) => {
    const s = times.slice().sort((a, b) => a - b);
    const pts = [[x0, 0]];
    s.forEach((m, i) => {
      pts.push([Math.max(x0, m), i]);
      pts.push([Math.max(x0, m), i + 1]);
    });
    return pts;
  };
  const planPts = steps(pr.plan.map((t) => t.slot));
  planPts.push([x1, pr.plan.length]);
  const donePts = steps(pr.done.map((t) => pr.at(t)).filter((m) => m <= now + 0.01));
  donePts.push([Math.min(Math.max(now, x0), x1), pr.doneNow]);
  const path = (pts) => pts.map(([m, n], i) => `${i ? "L" : "M"}${sx(m).toFixed(1)},${sy(n).toFixed(1)}`).join("");
  const ticks = W < 430 ? [9, 11, 13, 15, 17] : [9, 10, 11, 12, 13, 14, 15, 16, 17];
  const yt = [0, Math.round(total / 2), total];
  const cum = (m) => ({ plan: pr.plan.filter((t) => t.slot <= m).length, done: pr.done.filter((t) => pr.at(t) <= Math.min(m, now)).length });
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect(), px = (e.clientX - r.left) / r.width * W;
    const m = Math.round((x0 + (px - L) / (W - L - R) * (x1 - x0)) / 30) * 30;
    if (m < x0 || m > x1) {
      setHov(null);
      return;
    }
    setHov({ m, ...cum(m) });
  };
  const nowIn = now >= x0 && now <= x1;
  return /* @__PURE__ */ I.createElement("figure", { className: "x-chart x-burn", ref: box }, /* @__PURE__ */ I.createElement("svg", { viewBox: `0 0 ${W} ${H}`, role: "img", "aria-label": `Touches planned vs done by time of day: ${pr.doneNow} done, ${pr.dueNow} planned by now, ${pr.plan.length} today`, onPointerMove: move, onPointerLeave: () => setHov(null) }, yt.map((n) => /* @__PURE__ */ I.createElement("g", { key: n }, /* @__PURE__ */ I.createElement("line", { x1: L, x2: W - R, y1: sy(n), y2: sy(n), stroke: XCOL.grid }), /* @__PURE__ */ I.createElement("text", { x: L - 5, y: sy(n) + 3, textAnchor: "end", className: "x-ax" }, n))), ticks.map((h) => /* @__PURE__ */ I.createElement("text", { key: h, x: sx(h * 60), y: H - 8, textAnchor: "middle", className: "x-ax" }, h === 12 ? "12 PM" : h > 12 ? `${h - 12} PM` : `${h} AM`)), /* @__PURE__ */ I.createElement("path", { d: path(planPts), fill: "none", stroke: XCOL.plan, strokeWidth: "2", strokeLinejoin: "round" }), /* @__PURE__ */ I.createElement("path", { d: path(donePts), fill: "none", stroke: XCOL.done, strokeWidth: "2", strokeLinejoin: "round" }), nowIn && /* @__PURE__ */ I.createElement("g", null, /* @__PURE__ */ I.createElement("line", { x1: sx(now), x2: sx(now), y1: T, y2: H - B, stroke: XCOL.now }), /* @__PURE__ */ I.createElement("text", { x: sx(now) + 4, y: T + 8, className: "x-ax x-ax-now" }, "now")), /* @__PURE__ */ I.createElement("circle", { cx: sx(Math.min(Math.max(now, x0), x1)), cy: sy(pr.doneNow), r: "4.5", fill: XCOL.done, stroke: "#fff", strokeWidth: "2" }), /* @__PURE__ */ I.createElement("text", { x: W - R + 5, y: sy(pr.plan.length) + 4, className: "x-lab" }, pr.plan.length, " planned"), /* @__PURE__ */ I.createElement("text", { x: Math.min(sx(now), W - R) + 8, y: sy(pr.doneNow) + 4, className: "x-lab x-lab-strong" }, pr.doneNow, " done"), hov && /* @__PURE__ */ I.createElement("g", null, /* @__PURE__ */ I.createElement("line", { x1: sx(hov.m), x2: sx(hov.m), y1: T, y2: H - B, stroke: XCOL.axis }))), hov && /* @__PURE__ */ I.createElement("div", { className: "x-tip", style: { left: `${sx(hov.m) / W * 100}%` } }, /* @__PURE__ */ I.createElement("b", null, hov.done), " done \xB7 ", /* @__PURE__ */ I.createElement("b", null, hov.plan), " planned", /* @__PURE__ */ I.createElement("span", null, xFmt(hov.m))), /* @__PURE__ */ I.createElement("figcaption", { className: "x-legend" }, /* @__PURE__ */ I.createElement("span", null, /* @__PURE__ */ I.createElement("i", { className: "x-key-line", style: { background: XCOL.done } }), "Done"), /* @__PURE__ */ I.createElement("span", null, /* @__PURE__ */ I.createElement("i", { className: "x-key-line", style: { background: XCOL.plan } }), "Planned"), /* @__PURE__ */ I.createElement("span", null, /* @__PURE__ */ I.createElement("i", { className: "x-key-line", style: { background: XCOL.now } }), "Now")), /* @__PURE__ */ I.createElement(XTable, { caption: "Touches by the hour", cols: ["Hour", "Planned", "Done"], rows: pr.hours.map((r) => [xFmt(r.h * 60), r.plan, r.done]) }));
}
function XHourBars({ pr, now }) {
  const [hov, setHov] = I.useState(null);
  const [box, W] = useBoxWidth(610);
  const H = 110, L = 8, R = 8, T = 16, B = 22;
  const max = Math.max(1, ...pr.hours.map((r) => r.plan), ...pr.hours.map((r) => r.done));
  const n = pr.hours.length, band = (W - L - R) / n, bw = Math.min(21, band * 0.55);
  const sy = (v) => T + (1 - v / max) * (H - T - B);
  const nowH = Math.floor(now / 60);
  return /* @__PURE__ */ I.createElement("figure", { className: "x-chart x-hours", ref: box }, /* @__PURE__ */ I.createElement("svg", { viewBox: `0 0 ${W} ${H}`, role: "img", "aria-label": "Touches planned and done in each hour", onPointerLeave: () => setHov(null) }, /* @__PURE__ */ I.createElement("line", { x1: L, x2: W - R, y1: sy(0), y2: sy(0), stroke: XCOL.axis }), pr.hours.map((r, i) => {
    const cx = L + band * i + band / 2;
    const bar = (v, w, fill) => v > 0 ? /* @__PURE__ */ I.createElement("path", { d: `M${cx - w / 2},${sy(0)}V${sy(v) + 3}q0,-3 3,-3h${w - 6}q3,0 3,3V${sy(0)}Z`, fill }) : null;
    return /* @__PURE__ */ I.createElement("g", { key: r.h, onPointerEnter: () => setHov(i), tabIndex: "0", onFocus: () => setHov(i), onBlur: () => setHov(null) }, /* @__PURE__ */ I.createElement("rect", { x: cx - band / 2, y: T, width: band, height: H - T - B, fill: "transparent" }), bar(r.plan, bw, XCOL.plan), bar(Math.min(r.done, max), Math.max(5, bw - 8), XCOL.done), /* @__PURE__ */ I.createElement("text", { x: cx, y: H - 8, textAnchor: "middle", className: "x-ax" + (r.h === nowH ? " x-ax-now" : "") }, r.h > 12 ? r.h - 12 : r.h), r.plan > 0 && /* @__PURE__ */ I.createElement("text", { x: cx, y: sy(r.plan) - 4, textAnchor: "middle", className: "x-lab-sm" }, r.done ? `${r.done}/${r.plan}` : r.plan));
  })), hov != null && /* @__PURE__ */ I.createElement("div", { className: "x-tip", style: { left: `${(L + (W - L - R) / n * hov + (W - L - R) / n / 2) / W * 100}%` } }, /* @__PURE__ */ I.createElement("b", null, pr.hours[hov].done), " done of ", /* @__PURE__ */ I.createElement("b", null, pr.hours[hov].plan), /* @__PURE__ */ I.createElement("span", null, xFmt(pr.hours[hov].h * 60), " hour")), /* @__PURE__ */ I.createElement("figcaption", { className: "x-legend" }, /* @__PURE__ */ I.createElement("span", null, /* @__PURE__ */ I.createElement("i", { className: "x-key-box", style: { background: XCOL.done } }), "Done"), /* @__PURE__ */ I.createElement("span", null, /* @__PURE__ */ I.createElement("i", { className: "x-key-box", style: { background: XCOL.plan } }), "Planned")));
}
function XTiles({ pr, onOpen }) {
  const order = pr.views.slice().sort((a, b) => (b.doneTs.length > 0) - (a.doneTs.length > 0));
  const state = (v) => {
    const k = v.doneTs.map((t) => XS.done[t.id].k);
    if (k.includes("signed")) return ["won", "Signed"];
    if (k.includes("quoted")) return ["won", "Quoted"];
    if (!v.current && v.doneTs.length) return ["done", "Done for today"];
    if (v.doneTs.length) return ["part", "Started"];
    return ["todo", "To do"];
  };
  const handled = pr.views.filter((v) => !v.current && v.doneTs.length).length;
  return /* @__PURE__ */ I.createElement("div", { className: "x-tiles-wrap" }, /* @__PURE__ */ I.createElement("div", { className: "x-tiles", role: "list", "aria-label": `${handled} of ${pr.views.length} people handled today` }, order.map((v) => {
    const [s, label] = state(v);
    return /* @__PURE__ */ I.createElement("button", { key: v.lead.id, role: "listitem", className: `x-tile-p is-${s}`, title: `${v.lead.name} \xB7 ${label}`, "aria-label": `${v.lead.name}: ${label}`, onClick: () => onOpen && onOpen(v.lead.id) }, /* @__PURE__ */ I.createElement("span", { "aria-hidden": "true" }, s === "won" ? "\u2605" : s === "done" ? "\u2713" : s === "part" ? "\u2022" : ""));
  })), /* @__PURE__ */ I.createElement("div", { className: "x-tiles-key" }, /* @__PURE__ */ I.createElement("span", null, /* @__PURE__ */ I.createElement("i", { className: "is-won" }), "Quoted or signed"), /* @__PURE__ */ I.createElement("span", null, /* @__PURE__ */ I.createElement("i", { className: "is-done" }), "Done for today"), /* @__PURE__ */ I.createElement("span", null, /* @__PURE__ */ I.createElement("i", { className: "is-part" }), "Started"), /* @__PURE__ */ I.createElement("span", null, /* @__PURE__ */ I.createElement("i", { className: "is-todo" }), "To do")));
}
const XSTRAT_FWD = ["IL", "RF", "PI", "QN", "CC", "LE"], XSTRAT_BACK = ["XD", "RI", "WB"];
function XCadence({ keys, lo, hi, title, sub, zoom, ticks }) {
  const [hov, setHov] = I.useState(null);
  const [box, W] = useBoxWidth(470);
  const narrow = W < 430, rowH = 34, L = narrow ? 92 : 128, R = 44, T = 8, B = 26, H = T + B + rowH * keys.length;
  const Z = zoom ? narrow ? 55 : 89 : 0, a0 = L + (zoom ? Z + 13 : 0), lo2 = zoom ? 1 : lo;
  const sx = (d) => a0 + (d - lo2) / (hi - lo2) * (W - R - a0);
  const tk = ticks || [lo, hi];
  const chOf = (st) => st.ch.length > 1 && st.ch[0] === "text" ? "text" : st.ch[0];
  const mark = (ch, x, y) => {
    const c = XCOL[ch] || XCOL.call;
    if (ch === "email") return /* @__PURE__ */ I.createElement("rect", { x: x - 4.5, y: y - 4.5, width: "9", height: "9", rx: "1.5", fill: c, stroke: "#fff", strokeWidth: "2" });
    if (ch === "text") return /* @__PURE__ */ I.createElement("path", { d: `M${x},${y - 6}L${x + 6},${y + 4.5}L${x - 6},${y + 4.5}Z`, fill: c, stroke: "#fff", strokeWidth: "1.5", strokeLinejoin: "round" });
    return /* @__PURE__ */ I.createElement("circle", { cx: x, cy: y, r: "5", fill: c, stroke: "#fff", strokeWidth: "2" });
  };
  const when = (k, st) => {
    if (st.day > 0) return `day ${st.day}`;
    if (st.day < 0) return `${-st.day} days before`;
    const w = XWIN[st.win];
    return lo < 0 ? "on the date" : w && w.rel ? `day 0, ${w.label}` : st.win === "now" ? "day 0, right away" : st.win === "soon" ? "day 0, first open slot" : `day 0, ${w ? w.label : ""}`;
  };
  return /* @__PURE__ */ I.createElement("figure", { className: "x-chart x-cadence" }, title && /* @__PURE__ */ I.createElement("div", { className: "x-chart-title" }, title, sub && /* @__PURE__ */ I.createElement("span", null, sub)), /* @__PURE__ */ I.createElement("div", { className: "x-chart-box", ref: box }, /* @__PURE__ */ I.createElement("svg", { viewBox: `0 0 ${W} ${H}`, role: "img", "aria-label": `${title}: each lead type's steps by day`, onPointerLeave: () => setHov(null) }, zoom && /* @__PURE__ */ I.createElement("g", null, /* @__PURE__ */ I.createElement("rect", { x: L, y: T, width: Z, height: H - T - B, rx: "3", fill: "#F5F2EB" }), /* @__PURE__ */ I.createElement("text", { x: L + Z / 2, y: H - 9, textAnchor: "middle", className: "x-ax" }, "day 0")), tk.map((d) => /* @__PURE__ */ I.createElement("g", { key: d }, /* @__PURE__ */ I.createElement("line", { x1: sx(d), x2: sx(d), y1: T, y2: H - B, stroke: d === 0 && lo < 0 ? XCOL.axis : XCOL.grid }), /* @__PURE__ */ I.createElement("text", { x: sx(d), y: H - 9, textAnchor: "middle", className: "x-ax" }, d === 0 && lo < 0 ? "date" : d))), keys.map((k, i) => {
    const y = T + rowH * i + rowH / 2, all = XSRC[k].steps;
    const inRange = all.filter((st) => st.day >= lo && st.day <= hi), later = all.filter((st) => st.day > hi);
    const d0 = zoom ? inRange.filter((st) => st.day === 0) : [];
    const byDay = {};
    return /* @__PURE__ */ I.createElement("g", { key: k }, /* @__PURE__ */ I.createElement("text", { x: L - 8, y: y + 4, textAnchor: "end", className: "x-lab" }, XSRC[k].label), /* @__PURE__ */ I.createElement("line", { x1: zoom ? a0 : sx(lo), x2: sx(hi), y1: y, y2: y, stroke: XCOL.grid }), inRange.map((st) => {
      let x;
      if (zoom && st.day === 0) {
        const j = d0.indexOf(st);
        x = L + 11 + (d0.length > 1 ? j / (d0.length - 1) * (Z - 22) : (Z - 22) / 2);
      } else {
        const j = (byDay[st.day] = (byDay[st.day] || 0) + 1) - 1;
        x = sx(st.day) + j * 10;
      }
      const ch = chOf(st), h = { k, st, x, y, ch };
      return /* @__PURE__ */ I.createElement("g", { key: st.n, onPointerEnter: () => setHov(h), onFocus: () => setHov(h), onBlur: () => setHov(null), tabIndex: "0", "aria-label": `${XSRC[k].label}, step ${st.n}: ${XCH[ch]}, ${st.what}, ${when(k, st)}` }, /* @__PURE__ */ I.createElement("circle", { cx: x, cy: y, r: "12", fill: "transparent" }), mark(ch, x, y));
    }), later.length > 0 && /* @__PURE__ */ I.createElement("text", { x: W - R + 6, y: y + 4, className: "x-lab-sm" }, "+", later.length, " later"));
  })), hov && /* @__PURE__ */ I.createElement("div", { className: "x-tip", style: { left: `${hov.x / W * 100}%`, top: `${hov.y / H * 100}%` } }, /* @__PURE__ */ I.createElement("b", null, XCH[hov.ch]), " ", hov.st.what, /* @__PURE__ */ I.createElement("span", null, XSRC[hov.k].label, " \xB7 ", when(hov.k, hov.st), hov.st.vm ? ` \xB7 voicemail ${hov.st.vm} sec` : ""))), /* @__PURE__ */ I.createElement("figcaption", { className: "x-legend" }, /* @__PURE__ */ I.createElement("span", null, /* @__PURE__ */ I.createElement("i", { className: "x-key-dot", style: { background: XCOL.call } }), "Call"), /* @__PURE__ */ I.createElement("span", null, /* @__PURE__ */ I.createElement("i", { className: "x-key-sq", style: { background: XCOL.email } }), "Email"), /* @__PURE__ */ I.createElement("span", null, /* @__PURE__ */ I.createElement("i", { className: "x-key-tri", style: { borderBottomColor: XCOL.text } }), "Text, once they've talked to you")), /* @__PURE__ */ I.createElement(XTable, { caption: title, cols: ["Lead type", "Steps"], rows: keys.map((k) => [XSRC[k].label, XSRC[k].steps.map((st) => `${XCH[chOf(st)]} ${st.day < 0 ? "\u2212" + -st.day : st.day}`).join(" \xB7 ")]) }));
}
function XTable({ caption, cols, rows }) {
  return /* @__PURE__ */ I.createElement("details", { className: "x-table" }, /* @__PURE__ */ I.createElement("summary", null, "Show as a table"), /* @__PURE__ */ I.createElement("table", null, /* @__PURE__ */ I.createElement("caption", null, caption), /* @__PURE__ */ I.createElement("thead", null, /* @__PURE__ */ I.createElement("tr", null, cols.map((c) => /* @__PURE__ */ I.createElement("th", { key: c, scope: "col" }, c)))), /* @__PURE__ */ I.createElement("tbody", null, rows.map((r, i) => /* @__PURE__ */ I.createElement("tr", { key: i }, r.map((c, j) => j ? /* @__PURE__ */ I.createElement("td", { key: j }, c) : /* @__PURE__ */ I.createElement("th", { key: j, scope: "row" }, c)))))));
}
function xOpenBlocks(day) {
  const lo = XDAY.open, hi = XDAY.close;
  const used = day.touches.filter((t) => !t.tomorrow).map((t) => [t.slot, t.slot + 10]).concat([[XDAY.lunch[0], XDAY.lunch[1]], [lo, lo + 10]]).sort((a, b) => a[0] - b[0]);
  const gaps = [];
  let prev = lo;
  for (const [s, e] of used.concat([[hi, hi]])) {
    const end = Math.min(s, hi);
    if (end - prev >= 30) {
      if (end - prev > 110) {
        const mid = Math.round((prev + end) / 2 / 5) * 5;
        gaps.push([prev, mid], [mid, end]);
      } else gaps.push([prev, end]);
    }
    prev = Math.max(prev, Math.min(e, hi));
    if (prev >= hi) break;
  }
  return gaps.slice(0, 3);
}
function xProContext(day) {
  const talked = [], quoted = /* @__PURE__ */ new Set();
  for (const k of Object.keys(XS.done)) {
    const d = XS.done[k];
    const id = k.split("#")[0];
    if (d.k === "talked") talked.push(id);
    if (d.k === "quoted" || d.k === "signed") quoted.add(id);
  }
  const owe = XQ.filter((l) => talked.includes(l.id) && !quoted.has(l.id));
  const renewals = XQ.filter((l) => l.scenario === "xdate").length;
  const stops = XQ.filter((l) => l.consent && l.consent.stop).length;
  const life = XQ.find((l) => l.source === "LE");
  return { owe, renewals, stops, life };
}
function xProTasks(day) {
  const c = xProContext(day);
  const names = c.owe.slice(0, 2).map((l) => xFirst(l.name)).join(" and ");
  const waiting = day.touches.filter((t) => t.ch !== "call" && !t.tomorrow && !XS.done[t.id] && !(t.lead.consent && t.lead.consent.stop && t.ch === "text")).length;
  const lib = [
    ...waiting ? [{ id: "msgs", k: `Check and approve the ${waiting} message${waiting === 1 ? "" : "s"} still waiting`, min: Math.max(2, Math.min(10, waiting * 2)), t: "They send by themselves at their set hours once approved; open time is the place to clear them.", slot: 0 }] : [],
    { id: "quotes", k: c.owe.length ? `Send the quote${c.owe.length === 1 ? "" : "s"} to ${names}` : "Send this morning's quotes", min: 5, t: c.owe.length ? `${c.owe.length === 1 ? xFirst(c.owe[0].name) + " talked this morning and has" : "Both talked this morning and have"} no quote out yet. The follow-up plan starts the moment it goes out.` : "Anyone who talked this morning and has no quote out yet; the plan starts the moment it goes out.", slot: 0 },
    { id: "consent", k: "Consent check, once", min: 2, t: c.stops ? `${c.stops} STOP came in at 7:42 today; texts are off for her and the record shows it. Read the five lines once; nothing to fix.` : "Read the five lines once; nothing to fix.", slot: 0 },
    { id: "tomorrow", k: "Pick tomorrow's first three calls", min: 5, t: "They are already first on tomorrow's plan. Read their words once now, so the first calls at 9 start warm.", slot: 1 },
    { id: "renewals", k: `Next week's renewals: ${c.renewals}`, min: 5, t: `${c.renewals} on your list renew within two weeks. Line up the re-quotes today so each gets its call before the notice lands.`, slot: 1 },
    { id: "referrals", k: "Two referral asks", min: 5, t: "Call two customers who signed this month and ask for one name each. Asked is the measure, not received.", slot: 1 },
    { id: "life", k: c.life ? `Book ${xFirst(c.life.name)}'s life review` : "Book one life review", min: 5, t: c.life ? `${xFirst(c.life.name)} had a baby this month. Ten minutes: auto protects the car, home protects the house, life protects the payments.` : "One household with a new baby, home or driver: ten minutes on what protects the payments.", slot: 2 },
    { id: "story", k: "Story of the week", min: 5, t: "Four lines for Friday's huddle: who they were, what you said, what they said back, what is safe now.", slot: 2 }
  ];
  return lib;
}
function xProCount(day) {
  const tasks = xProTasks(day);
  return { done: tasks.filter((t) => XS.pro[t.id]).length, total: tasks.length };
}
function xCoolCount() {
  return { done: XCOOL.filter((l) => XS.cool[l.id]).length, total: XCOOL.length };
}
function XOpenTime({ day, now, coach }) {
  const s = useXS();
  const gaps = xOpenBlocks(day);
  const tasks = xProTasks(day);
  const byGap = gaps.map((g, i) => ({ g, tasks: tasks.filter((t) => t.slot === Math.min(i, 2)) }));
  if (gaps.length < 3) {
    const spare = tasks.filter((t) => t.slot >= gaps.length);
    if (byGap.length) byGap[byGap.length - 1].tasks.push(...spare);
  }
  const done = tasks.filter((t) => s.pro[t.id]).length;
  const toggle = (id) => xSet((st) => {
    const pro = { ...st.pro };
    if (pro[id]) delete pro[id];
    else pro[id] = xClock();
    return { pro };
  });
  return /* @__PURE__ */ I.createElement("div", { className: "card x-open" }, /* @__PURE__ */ I.createElement("div", { className: "card-head" }, /* @__PURE__ */ I.createElement("span", { className: "title" }, "Open time \xB7 proactive"), /* @__PURE__ */ I.createElement("span", { className: "count" }, done, " of ", tasks.length)), /* @__PURE__ */ I.createElement("div", { className: "x-open-body" }, coach && /* @__PURE__ */ I.createElement("div", { className: "x-open-rule" }, "The hours with no call, text or email planned. Five minutes each, for tomorrow and the week; one tap when it's done."), byGap.map(({ g, tasks: ts }, i) => /* @__PURE__ */ I.createElement("div", { key: i, className: "x-open-block" + (now >= g[0] && now < g[1] ? " is-now" : now >= g[1] ? " is-past" : "") }, /* @__PURE__ */ I.createElement("div", { className: "x-open-when" }, /* @__PURE__ */ I.createElement("span", { className: "mono" }, xFmt(g[0]), "\u2013", xFmt(g[1])), /* @__PURE__ */ I.createElement("span", { className: "x-open-len" }, Math.round((g[1] - g[0]) / 5) * 5, " min open", now >= g[0] && now < g[1] ? " \xB7 now" : "")), /* @__PURE__ */ I.createElement("ul", { className: "x-open-list" }, ts.map((t) => /* @__PURE__ */ I.createElement("li", { key: t.id, className: s.pro[t.id] ? "is-done" : "" }, /* @__PURE__ */ I.createElement("button", { className: "x-open-check", "aria-pressed": !!s.pro[t.id], onClick: () => toggle(t.id), "aria-label": s.pro[t.id] ? `Done: ${t.k}` : `Mark done: ${t.k}` }, s.pro[t.id] ? "\u2713" : ""), /* @__PURE__ */ I.createElement("div", { className: "x-open-text" }, /* @__PURE__ */ I.createElement("div", { className: "x-open-k" }, t.k, " ", /* @__PURE__ */ I.createElement("span", { className: "x-mins" }, t.min, " min")), coach && !s.pro[t.id] && /* @__PURE__ */ I.createElement("div", { className: "x-open-t" }, t.t), s.pro[t.id] && /* @__PURE__ */ I.createElement("div", { className: "x-open-t" }, "Done ", xFmt(s.pro[t.id])))))))), !byGap.length && /* @__PURE__ */ I.createElement("div", { className: "x-empty" }, "No open time today: the plan fills the day.")));
}
function XCoolFold({ ch, coach }) {
  const s = useXS();
  const list = XCOOL.filter((l) => xCoolChannel(l) === ch);
  if (!list.length) return null;
  const done = list.filter((l) => s.cool[l.id]).length;
  const toggle = (id) => xSet((st) => {
    const cool = { ...st.cool };
    if (cool[id]) delete cool[id];
    else cool[id] = xClock();
    return { cool };
  });
  return /* @__PURE__ */ I.createElement("details", { className: "x-later x-cool" }, /* @__PURE__ */ I.createElement("summary", null, "Cooler leads \xB7 any open minute \xB7 ", list.length, done ? ` \xB7 ${done} done` : ""), coach && /* @__PURE__ */ I.createElement("div", { className: "x-open-rule" }, "Not hot and not due by their plan. One suggested channel inside their consent, one opener, five minutes, one tap when it's done."), /* @__PURE__ */ I.createElement("ul", { className: "x-open-list x-cool-list" }, list.map((l) => {
    const d = s.cool[l.id];
    return /* @__PURE__ */ I.createElement("li", { key: l.id, className: d ? "is-done" : "" }, /* @__PURE__ */ I.createElement("button", { className: "x-open-check", "aria-pressed": !!d, onClick: () => toggle(l.id), "aria-label": d ? `Done: ${l.name}` : `Mark done: ${l.name}` }, d ? "\u2713" : ""), /* @__PURE__ */ I.createElement("div", { className: "x-open-text" }, /* @__PURE__ */ I.createElement("div", { className: "x-open-k" }, /* @__PURE__ */ I.createElement("span", { className: "x-cool-name" }, l.name), /* @__PURE__ */ I.createElement("span", { className: `style-pill ${l.style}` }, rf[l.style] ? rf[l.style].label : l.style), /* @__PURE__ */ I.createElement("span", { className: "x-tag" }, XSRC[l.source].label), /* @__PURE__ */ I.createElement("span", { className: `x-chip x-chip-${ch}` }, XCH[ch]), /* @__PURE__ */ I.createElement("span", { className: "x-mins" }, "5 min")), !d && /* @__PURE__ */ I.createElement("div", { className: "x-open-t" }, l.why, coach ? ` Say: "${xFillSay(l.say, l, XS.persona || "Alex")}"` : "", ch === "call" ? ` \xB7 ${l.phone}` : ""), d && /* @__PURE__ */ I.createElement("div", { className: "x-open-t" }, "Done ", xFmt(d))));
  })));
}
function XDayStrip({ pr, now, mix, clock }) {
  const [ref, W] = useBoxWidth(960);
  const H = 72, L = 16, R = 16, top = 14, bottom = 20, lo = XDAY.open, hi = XDAY.close;
  const sx = (m) => L + (Math.min(hi, Math.max(lo, m)) - lo) / (hi - lo) * (W - L - R);
  const touches = pr.plan.slice().sort((a, b) => a.slot - b.slot || a.id.localeCompare(b.id));
  const buckets = {};
  const dots = touches.map((t) => {
    const b = Math.floor(t.slot / 20);
    const i = (buckets[b] = (buckets[b] || 0) + 1) - 1;
    return { t, i };
  });
  const rowH = (H - top - bottom - 10) / 3;
  const y = (i) => H - bottom - 7 - Math.min(i, 3) * rowH;
  const hours = W < 600 ? [9, 11, 13, 15, 17] : [9, 10, 11, 12, 13, 14, 15, 16, 17];
  const inDay = now >= lo && now <= hi;
  return /* @__PURE__ */ I.createElement("div", { className: "x-strip", ref }, /* @__PURE__ */ I.createElement("svg", { viewBox: `0 0 ${W} ${H}`, width: "100%", height: H, role: "img", "aria-label": `${touches.length} touches planned today, ${pr.doneNow} done, ${pr.behind} late`, style: { display: "block" } }, /* @__PURE__ */ I.createElement("defs", null, /* @__PURE__ */ I.createElement("pattern", { id: "x-lunch-hatch", width: "6", height: "6", patternUnits: "userSpaceOnUse", patternTransform: "rotate(45)" }, /* @__PURE__ */ I.createElement("line", { x1: "0", y1: "0", x2: "0", y2: "6", stroke: "var(--line)", strokeWidth: "1.5" }))), /* @__PURE__ */ I.createElement("g", { className: "x-strip-lunch" }, /* @__PURE__ */ I.createElement("rect", { x: sx(XDAY.lunch[0]), y: top - 2, width: Math.max(0, sx(XDAY.lunch[1]) - sx(XDAY.lunch[0])), height: H - bottom - top + 2, fill: "url(#x-lunch-hatch)", rx: "3" }), sx(XDAY.lunch[1]) - sx(XDAY.lunch[0]) > 44 && /* @__PURE__ */ I.createElement("text", { x: (sx(XDAY.lunch[0]) + sx(XDAY.lunch[1])) / 2, y: top + 9, textAnchor: "middle", fontSize: "9.5", fill: "var(--ink-3)", fontFamily: "IBM Plex Mono, monospace", letterSpacing: ".06em" }, "LUNCH")), xOpenBlocks(pr.day || { touches: pr.plan }).map((g, i) => /* @__PURE__ */ I.createElement("g", { key: i, className: "x-strip-open" }, /* @__PURE__ */ I.createElement("rect", { x: sx(g[0]), y: top - 2, width: Math.max(0, sx(g[1]) - sx(g[0])), height: H - bottom - top + 2, fill: "var(--paper-warm)", rx: "3" }), sx(g[1]) - sx(g[0]) > 110 ? /* @__PURE__ */ I.createElement("text", { x: (sx(g[0]) + sx(g[1])) / 2, y: top + 9, textAnchor: "middle", fontSize: "9.5", fill: "var(--ink-3)", fontFamily: "IBM Plex Mono, monospace", letterSpacing: ".06em" }, "OPEN \xB7 5-MIN WORK") : sx(g[1]) - sx(g[0]) > 36 ? /* @__PURE__ */ I.createElement("text", { x: (sx(g[0]) + sx(g[1])) / 2, y: top + 9, textAnchor: "middle", fontSize: "9.5", fill: "var(--ink-3)", fontFamily: "IBM Plex Mono, monospace", letterSpacing: ".06em" }, "OPEN") : null)), /* @__PURE__ */ I.createElement("line", { x1: L, x2: W - R, y1: H - bottom, y2: H - bottom, stroke: "var(--line)" }), hours.map((h) => /* @__PURE__ */ I.createElement("g", { key: h }, /* @__PURE__ */ I.createElement("line", { x1: sx(h * 60), x2: sx(h * 60), y1: H - bottom - 3, y2: H - bottom + 3, stroke: "var(--ink-4)" }), /* @__PURE__ */ I.createElement("text", { x: sx(h * 60), y: H - 5, textAnchor: h === hours[0] ? "start" : h === hours[hours.length - 1] ? "end" : "middle", fontSize: "10", fill: "var(--ink-3)", fontFamily: "IBM Plex Mono, monospace" }, (h > 12 ? h - 12 : h) + (h >= 12 ? " PM" : " AM")))), dots.map(({ t, i }) => {
    const d = XS.done[t.id], late = !d && t.slot <= now - 30, c = XCOL[t.ch];
    return /* @__PURE__ */ I.createElement("circle", { key: t.id, cx: sx(t.slot), cy: y(i), r: 5, fill: d ? c : "var(--surface)", stroke: late ? "var(--signal)" : c, strokeWidth: late ? 2 : 1.5, className: "x-strip-dot" + (d ? " is-done" : late ? " is-late" : "") }, /* @__PURE__ */ I.createElement("title", null, `${xFmt(t.slot)} \xB7 ${XCH[t.ch]} \xB7 ${t.lead.name}${d ? " \xB7 done" : late ? " \xB7 late" : ""}`));
  }), inDay && /* @__PURE__ */ I.createElement("g", { className: "x-strip-now" }, /* @__PURE__ */ I.createElement("line", { x1: sx(now), x2: sx(now), y1: top - 6, y2: H - bottom, stroke: "var(--signal)", strokeWidth: "1.5" }), /* @__PURE__ */ I.createElement("text", { x: sx(now), y: top - 8 + 4, textAnchor: "middle", fontSize: "9.5", fontWeight: "600", fill: "var(--signal)", fontFamily: "IBM Plex Mono, monospace", letterSpacing: ".08em" }, "NOW"))), /* @__PURE__ */ I.createElement("div", { className: "x-strip-cap" }, /* @__PURE__ */ I.createElement("span", null, /* @__PURE__ */ I.createElement("b", null, touches.length), " touches today \xB7 ", mix.call, " calls at their hour \xB7 ", mix.text + mix.email, " messages to check any time, each sends at its hour \xB7 ", XCOOL.length, " cooler leads for open time", clock != null ? ` \xB7 demo clock ${xFmt(now)}` : "", " \xB7 ", /* @__PURE__ */ I.createElement("span", { className: "greeting x-strip-model", title: "The day's model: 20 prospects, 7 quotes, 4 applications, 2 households protected" }, `${Ef.funnel.leads} prospects \xB7 ${Ef.funnel.quoted} quotes \xB7 ${Ef.funnel.apps} apps / ${Ef.funnel.households} HH protected`)), /* @__PURE__ */ I.createElement("span", { className: "x-strip-key" }, /* @__PURE__ */ I.createElement("i", { style: { background: XCOL.call } }), "call ", /* @__PURE__ */ I.createElement("i", { style: { background: XCOL.email } }), "email ", /* @__PURE__ */ I.createElement("i", { style: { background: XCOL.text } }), "text ", /* @__PURE__ */ I.createElement("em", null, "filled = done \xB7 red ring = late"))));
}
const XTAGLINE = "An agent's experience and judgment, at every team member's fingertips.";
const XRULES = [];
const XHOURS = [];
const XTEST = [];
const XDESIGN = [];
const XCLOCKS = [["Live", null], ["9:00 AM", 9 * 60], ["11:00 AM", 11 * 60], ["2:30 PM", 14 * 60 + 30], ["4:30 PM", 16 * 60 + 30], ["8:15 PM", 20 * 60 + 15]];
function XRefs({ ids }) {
  const list = (ids || []).filter((k, i, a) => k && XREF[k] && a.indexOf(k) === i);
  if (!list.length) return null;
  return /* @__PURE__ */ I.createElement("span", { className: "x-refs" }, list.map((k) => /* @__PURE__ */ I.createElement("span", { key: k, className: "x-ref", title: XREF[k].s }, k)));
}
function XClockBar() {
  const s = useXS();
  return /* @__PURE__ */ I.createElement("div", { className: "x-clockbar" }, /* @__PURE__ */ I.createElement("span", { className: "x-viewbar-label" }, "Clock"), /* @__PURE__ */ I.createElement("div", { className: "x-seg", role: "group", "aria-label": "Demo clock" }, XCLOCKS.map(([l, v]) => /* @__PURE__ */ I.createElement("button", { key: l, className: s.clock === v ? "active" : "", "aria-pressed": s.clock === v, onClick: () => xSetClock(v) }, l))));
}
function XPlanRow({ t, now }) {
  const lead = t.lead, d = XS.done[t.id];
  const v = { cls: d ? "is-done" : !t.tomorrow && t.slot <= now ? "is-due" : "" };
  return /* @__PURE__ */ I.createElement("div", { className: `x-plan-row x-st-${lead.style} ${v.cls}` }, /* @__PURE__ */ I.createElement("div", { className: "x-plan-time mono" }, t.tomorrow ? "9:00 AM" : t.doneAt != null ? xFmt(t.slot) : t.wk === "now" ? t.slot <= now ? "Now" : xFmt(t.slot) : t.label), /* @__PURE__ */ I.createElement("div", { className: "x-plan-main" }, /* @__PURE__ */ I.createElement("div", { className: "x-row-line1" }, /* @__PURE__ */ I.createElement("span", { className: `x-chip x-chip-${t.ch}` }, XCH[t.ch]), /* @__PURE__ */ I.createElement("span", { className: "x-name" }, lead.name), /* @__PURE__ */ I.createElement("span", { className: `style-pill ${lead.style}` }, rf[lead.style].label), /* @__PURE__ */ I.createElement("span", { className: "x-plan-src" }, XSRC[lead.source].label), d && /* @__PURE__ */ I.createElement("span", { className: "x-check" }, "\u2713 ", XOUT[d.k]), XS.chan[t.id] && /* @__PURE__ */ I.createElement("span", { className: "x-override", title: "A team member changed the channel; the plan keeps the hour that fits it" }, "changed by you")), /* @__PURE__ */ I.createElement("div", { className: "x-plan-step mono" }, t.booked ? `Booked call \xB7 ${lead.at}` : `Step ${t.step.n} of ${t.p.N} \xB7 ${xDayLabel(lead)} \xB7 ${t.step.what}`), !d && !t.tomorrow && t.slot < now - 30 && /* @__PURE__ */ I.createElement("label", { className: "x-miss" }, "Late \xB7 why?", /* @__PURE__ */ I.createElement("select", { value: XS.miss[t.id] || "", onChange: (e) => xSet((st) => ({ miss: { ...st.miss, [t.id]: e.target.value } })) }, ["", "On another call", "Waiting on them", "Walk-in or service", "Moved it on purpose", "Other"].map((o) => /* @__PURE__ */ I.createElement("option", { key: o, value: o }, o || "Pick one")))), /* @__PURE__ */ I.createElement("div", { className: "x-plan-why" }, xTouchWhy(t), " ", /* @__PURE__ */ I.createElement(XRefs, { ids: [t.step.ref, t.chReason && /style rule/.test(t.chReason) ? t.p.style.ref : null, t.chReason === XSTYLE.noTextFirst ? "T10" : null, t.wk && XWIN[t.wk] && XWIN[t.wk].ref] }))));
}
function XRhythm({ day, now }) {
  const done = (t) => !!XS.done[t.id];
  const views = xLeadViews(day);
  const live = views.filter((v) => v.current);
  const overdue = live.filter((v) => !v.current.tomorrow && v.current.slot < now - 30).length;
  const touched = xScore(XS.done).touched;
  const left = day.touches.filter((t) => !done(t) && !t.tomorrow && t.slot >= now).length;
  const first = day.touches.filter((t) => !t.tomorrow).sort((a, b) => a.slot - b.slot)[0];
  const pts = [
    { at: 9 * 60, k: "Start \xB7 huddle", t: `${day.touches.length} touches planned, the first at ${first ? first.label === "Now" ? xFmt(Math.max(now, 9 * 60)) : first.label : "9:00 AM"}; ${XQ.filter((l) => l.seen != null && l.day === 0).length} new leads, ${XQ.filter((l) => l.at).length} booked calls${Object.keys(XS.help).length ? `, ${Object.keys(XS.help).length} help asked` : ""}. Read your two commitments. Nothing to sort or set up.`, ref: ["T26", "T35"] },
    { at: 12 * 60, k: "Midday check", t: overdue ? `${overdue} lead${overdue === 1 ? "" : "s"} with a touch past due by more than 30 minutes. They are at the top of the queue.` : "Nothing past due. Lunch is off; messages at 1, calls from 3.", ref: ["T18"] },
    { at: 17 * 60, k: "Wrap-up", t: `${touched} of ${XQ.length} touched${left ? `, ${left} touch${left === 1 ? "" : "es"} still ahead today` : ""}. Every lead already has its next step set.`, ref: ["T34"] }
  ];
  return /* @__PURE__ */ I.createElement("div", { className: "card x-rhythm" }, /* @__PURE__ */ I.createElement("div", { className: "card-head" }, /* @__PURE__ */ I.createElement("span", { className: "title" }, "The day's three pause points"), /* @__PURE__ */ I.createElement("span", { className: "count" }, xFmt(now))), /* @__PURE__ */ I.createElement("ol", { className: "x-rhythm-list" }, pts.map((p) => /* @__PURE__ */ I.createElement("li", { key: p.k, className: now >= p.at && (p.at === 17 * 60 || now < p.at + 4 * 60) ? "is-now" : now > p.at ? "is-past" : "" }, /* @__PURE__ */ I.createElement("span", { className: "x-rhythm-at mono" }, xFmt(p.at)), /* @__PURE__ */ I.createElement("span", { className: "x-rhythm-k" }, p.k), /* @__PURE__ */ I.createElement("span", { className: "x-rhythm-t" }, p.t, " ", /* @__PURE__ */ I.createElement(XRefs, { ids: p.ref })), p.at === 17 * 60 && /* @__PURE__ */ I.createElement(XReflect, null)))));
}
function XReflect() {
  const key = "acc.reflect." + (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  const [v, setV] = I.useState(() => {
    try {
      return window.localStorage.getItem(key) || "";
    } catch (e) {
      return "";
    }
  });
  return /* @__PURE__ */ I.createElement("label", { className: "x-reflect" }, "One thing that worked today", /* @__PURE__ */ I.createElement("input", { value: v, maxLength: 140, placeholder: "e.g. calling the new leads before the emails", onChange: (e) => {
    setV(e.target.value);
    try {
      window.localStorage.setItem(key, e.target.value);
    } catch (x) {
    }
  } }));
}
function XTestCalc() {
  const [base, setBase] = I.useState(10), [target, setTarget] = I.useState(15), [perDay, setPerDay] = I.useState(20), [agencies, setAgencies] = I.useState(1), [power, setPower] = I.useState(0.8);
  const n = xSampleSize(base / 100, target / 100, power);
  const rel = xSampleSize(base / 100, base * 1.05 / 100, power);
  const perAll = Math.max(1, perDay * agencies);
  const days = n ? Math.ceil(2 * n / perAll) : null, relDays = rel ? Math.ceil(2 * rel / perAll) : null;
  const span = (d) => d < 10 ? `${d} working day${d === 1 ? "" : "s"}` : d < 520 ? `about ${Math.round(d / 5)} weeks` : `about ${Math.round(d / 250)} years`;
  const num = (v, set, min, max, step) => /* @__PURE__ */ I.createElement("input", { type: "number", className: "x-num", value: v, min, max, step: step || 1, onChange: (e) => {
    const x = parseFloat(e.target.value);
    if (!isNaN(x)) set(Math.min(max, Math.max(min, x)));
  } });
  return /* @__PURE__ */ I.createElement("div", { className: "x-calc" }, /* @__PURE__ */ I.createElement("div", { className: "x-calc-grid" }, /* @__PURE__ */ I.createElement("label", null, "Close rate today (%)", num(base, setBase, 1, 60, 0.5)), /* @__PURE__ */ I.createElement("label", null, "Close rate with the plan (%)", num(target, setTarget, 1, 80, 0.5)), /* @__PURE__ */ I.createElement("label", null, "Leads a day per agency", num(perDay, setPerDay, 1, 500)), /* @__PURE__ */ I.createElement("label", null, "Agencies in the test", num(agencies, setAgencies, 1, 5e3))), /* @__PURE__ */ I.createElement("div", { className: "x-seg x-calc-power", role: "group", "aria-label": "Power" }, [[0.8, "80% power"], [0.9, "90% power"]].map(([v, l]) => /* @__PURE__ */ I.createElement("button", { key: l, className: power === v ? "active" : "", "aria-pressed": power === v, onClick: () => setPower(v) }, l))), n ? /* @__PURE__ */ I.createElement("div", { className: "x-calc-out" }, /* @__PURE__ */ I.createElement("div", null, /* @__PURE__ */ I.createElement("b", { className: "x-calc-big" }, n.toLocaleString()), " leads per arm \xB7 ", /* @__PURE__ */ I.createElement("b", null, (2 * n).toLocaleString()), " in all"), /* @__PURE__ */ I.createElement("div", null, days.toLocaleString(), " working day", days === 1 ? "" : "s", " (", span(days), ") at ", perAll.toLocaleString(), " leads a day, plus 45 days for the last leads to bind"), /* @__PURE__ */ I.createElement("div", { className: "x-calc-rel" }, "\u201C5% better\u201D read as relative (", base, "% \u2192 ", (base * 1.05).toFixed(2).replace(/\.?0+$/, ""), "%): ", /* @__PURE__ */ I.createElement("b", null, rel ? rel.toLocaleString() : "\u2014"), " per arm, ", rel ? (2 * rel).toLocaleString() : "\u2014", " in all", relDays ? `: ${span(relDays)} at this volume` : "", ".")) : /* @__PURE__ */ I.createElement("div", { className: "x-calc-out" }, "Set a plan rate above today's rate."));
}
function XDayPlan({ persona }) {
  const s = useXS();
  if (!XS.seeded) {
    XS.seeded = true;
    if (!XFRESH) xSeedUpTo(XS.clock, true);
  }
  const [seed, setSeed] = I.useState(7);
  const now = xClock();
  const day = xBuildDay(XQ, now);
  const mix = { call: 0, text: 0, email: 0 };
  for (const t of day.touches) mix[t.ch]++;
  const byHour = {};
  const tomorrow = day.touches.filter((t) => t.tomorrow);
  const rightNow = day.touches.filter((t) => !t.tomorrow && t.wk === "now" && !XS.done[t.id]);
  for (const t of day.touches) {
    if (t.tomorrow || rightNow.includes(t)) continue;
    const h = Math.max(8, Math.min(20, Math.floor(t.slot / 60)));
    (byHour[h] = byHour[h] || []).push(t);
  }
  const hours = XHOURS.length ? XHOURS : Array.from({ length: 12 }, (_, i) => ({ h: 8 + i, label: "", why: "" }));
  const nowH = Math.floor(now / 60);
  const cmp = I.useMemo(() => xCompare(XQ, seed), [seed]);
  const people = new Set(day.touches.map((t) => t.lead.id)).size;
  const pr = xProgress(day, now);
  const order = xWorkOrder(pr.views, now);
  const next = order.find((v) => xIsDue(v.current, now)) || order[0] || null;
  return /* @__PURE__ */ I.createElement("section", { className: "view active x-plan" }, /* @__PURE__ */ I.createElement("div", { className: "page-head" }, /* @__PURE__ */ I.createElement("div", null, /* @__PURE__ */ I.createElement("h1", null, "The whole day, planned."), /* @__PURE__ */ I.createElement("div", { className: "greeting" }, day.touches.length, " touches for ", people, " people \xB7 ", mix.call, " calls \xB7 ", mix.text, " texts \xB7 ", mix.email, " emails. Different people get different channels, at different hours, in a different order.")), /* @__PURE__ */ I.createElement("div", { className: "x-head-side" }, /* @__PURE__ */ I.createElement(XCompliance, { day }))), /* @__PURE__ */ I.createElement("div", { className: "x-plan-grid" }, /* @__PURE__ */ I.createElement("div", { className: "x-plan-main-col" }, /* @__PURE__ */ I.createElement("div", { className: "card x-progress" }, /* @__PURE__ */ I.createElement("div", { className: "card-head" }, /* @__PURE__ */ I.createElement("span", { className: "title" }, "Plan vs done"), /* @__PURE__ */ I.createElement("span", { className: "count" }, pr.doneNow, " done \xB7 ", pr.dueNow, " planned by now \xB7 ", pr.plan.length, " today")), /* @__PURE__ */ I.createElement("div", { className: "x-progress-body" }, /* @__PURE__ */ I.createElement(XStatusLine, { pr, next, now, onOpen: (id) => xSet({ view: "queue", open: id }) }), /* @__PURE__ */ I.createElement("div", { className: "x-chart-title" }, "Through the day", /* @__PURE__ */ I.createElement("span", null, "touches done against the plan; the gap is how far behind or ahead ", /* @__PURE__ */ I.createElement(XRefs, { ids: ["T33", "T28"] }))), /* @__PURE__ */ I.createElement(XBurnUp, { pr, now }), /* @__PURE__ */ I.createElement("div", { className: "x-chart-title" }, "Hour by hour", /* @__PURE__ */ I.createElement("span", null, "planned and done in each hour, like a lean production board ", /* @__PURE__ */ I.createElement(XRefs, { ids: ["T22", "T32"] }))), /* @__PURE__ */ I.createElement(XHourBars, { pr, now }))), /* @__PURE__ */ I.createElement("div", { className: "card x-timeline" }, /* @__PURE__ */ I.createElement("div", { className: "card-head" }, /* @__PURE__ */ I.createElement("span", { className: "title" }, "Today, hour by hour"), /* @__PURE__ */ I.createElement("span", { className: "count" }, "now ", xFmt(now))), rightNow.length > 0 && /* @__PURE__ */ I.createElement("div", { className: "x-hour is-now x-hour-right-now" }, /* @__PURE__ */ I.createElement("div", { className: "x-hour-head" }, /* @__PURE__ */ I.createElement("span", { className: "x-hour-time mono" }, "Now"), /* @__PURE__ */ I.createElement("span", { className: "x-hour-label" }, "New leads: the first call, inside a minute"), /* @__PURE__ */ I.createElement("span", { className: "x-hour-why" }, XWIN.now.why, ". ", /* @__PURE__ */ I.createElement(XRefs, { ids: [XWIN.now.ref] }))), rightNow.slice().sort((a, b) => xFreshKey(a.lead, now) - xFreshKey(b.lead, now)).map((t) => /* @__PURE__ */ I.createElement(XPlanRow, { key: t.id, t, now }))), hours.map((hr) => {
    const rows = (byHour[hr.h] || []).slice().sort((a, b) => a.slot - b.slot);
    const isNow = nowH === hr.h;
    if ((hr.h >= 18 || hr.h < 9) && !rows.length) return null;
    return /* @__PURE__ */ I.createElement("div", { key: hr.h, className: "x-hour" + (rows.length ? "" : " is-empty") + (isNow ? " is-now" : "") }, /* @__PURE__ */ I.createElement("div", { className: "x-hour-head" }, /* @__PURE__ */ I.createElement("span", { className: "x-hour-time mono" }, xFmt(hr.h * 60)), /* @__PURE__ */ I.createElement("span", { className: "x-hour-label" }, hr.label, isNow && /* @__PURE__ */ I.createElement("span", { className: "x-now-tag" }, "now")), /* @__PURE__ */ I.createElement("span", { className: "x-hour-why" }, hr.why, " ", hr.ref && /* @__PURE__ */ I.createElement(XRefs, { ids: [].concat(hr.ref) }))), rows.map((t) => /* @__PURE__ */ I.createElement(XPlanRow, { key: t.id, t, now })));
  }), tomorrow.length > 0 && /* @__PURE__ */ I.createElement("div", { className: "x-hour is-now" }, /* @__PURE__ */ I.createElement("div", { className: "x-hour-head" }, /* @__PURE__ */ I.createElement("span", { className: "x-hour-time mono" }, "9:00 AM"), /* @__PURE__ */ I.createElement("span", { className: "x-hour-label" }, "Tomorrow, first thing"), /* @__PURE__ */ I.createElement("span", { className: "x-hour-why" }, "After 8 pm, calls and texts wait for the morning; email can still go out. ", /* @__PURE__ */ I.createElement(XRefs, { ids: ["T7"] }))), tomorrow.map((t) => /* @__PURE__ */ I.createElement(XPlanRow, { key: t.id, t, now }))), /* @__PURE__ */ I.createElement("div", { className: "x-queue-foot" }, /* @__PURE__ */ I.createElement("span", null, "This is the same plan the Action queue runs. Change the clock, a lead's style or its consent, and the step, channel and hour move with it.")))), /* @__PURE__ */ I.createElement("div", { className: "x-side x-plan-side" }, /* @__PURE__ */ I.createElement(XRhythm, { day, now }), /* @__PURE__ */ I.createElement("div", { className: "card x-commit" }, /* @__PURE__ */ I.createElement("div", { className: "card-head" }, /* @__PURE__ */ I.createElement("span", { className: "title" }, "This week's two commitments"), /* @__PURE__ */ I.createElement("span", { className: "count" }, "if-then")), /* @__PURE__ */ I.createElement("ol", { className: "x-rules" }, /* @__PURE__ */ I.createElement("li", null, /* @__PURE__ */ I.createElement("div", { className: "x-rule-t" }, "If a new lead lands while I'm on a call, then I call it within five minutes of hanging up.")), /* @__PURE__ */ I.createElement("li", null, /* @__PURE__ */ I.createElement("div", { className: "x-rule-t" }, "If a quoted lead hasn't answered by day 3, then I call at 4 pm with their style's question."))), /* @__PURE__ */ I.createElement("div", { className: "x-commit-foot" }, `Set in the weekly WIG session, written as "if X, then I'll do Y at a time." Demo examples. `, /* @__PURE__ */ I.createElement(XRefs, { ids: ["T35"] }))), /* @__PURE__ */ I.createElement("div", { className: "card x-strategy" }, /* @__PURE__ */ I.createElement("div", { className: "card-head" }, /* @__PURE__ */ I.createElement("span", { className: "title" }, "The strategy"), /* @__PURE__ */ I.createElement("span", { className: "count" }, "every lead type")), /* @__PURE__ */ I.createElement("div", { className: "x-strategy-body" }, /* @__PURE__ */ I.createElement(XCadence, { keys: XSTRAT_FWD, lo: 0, hi: 22, zoom: true, ticks: [1, 5, 10, 15, 22], title: "From the first touch", sub: "Day 0 opens up to show the minutes: call now, email at 20, call at 30\u201360 and 1\u20132 hours" }), /* @__PURE__ */ I.createElement(XCadence, { keys: XSTRAT_BACK, lo: -60, hi: 10, ticks: [-60, -45, -30, -21, -14, -7, 0, 10], title: "Around their date", sub: "Days before and after the renewal date or the anniversary" }), /* @__PURE__ */ I.createElement("div", { className: "x-strategy-note" }, "Same pace for every communication style; the style changes the words. Texts only once they've talked to you."))), /* @__PURE__ */ I.createElement("div", { className: "card" }, /* @__PURE__ */ I.createElement("div", { className: "card-head" }, /* @__PURE__ */ I.createElement("span", { className: "title" }, "The formula"), /* @__PURE__ */ I.createElement("span", { className: "count" }, XRULES.length, " rules")), /* @__PURE__ */ I.createElement("ol", { className: "x-rules" }, XRULES.map((r, i) => /* @__PURE__ */ I.createElement("li", { key: i }, /* @__PURE__ */ I.createElement("div", { className: "x-rule-k" }, r.k), /* @__PURE__ */ I.createElement("div", { className: "x-rule-t" }, r.t, " ", /* @__PURE__ */ I.createElement(XRefs, { ids: r.ref })))))), /* @__PURE__ */ I.createElement("div", { className: "card x-vs" }, /* @__PURE__ */ I.createElement("div", { className: "card-head" }, /* @__PURE__ */ I.createElement("span", { className: "title" }, "The plan vs. the usual day"), /* @__PURE__ */ I.createElement("button", { className: "btn ghost x-vs-shuffle", onClick: () => setSeed((x) => x + 1) }, "Run another usual day")), /* @__PURE__ */ I.createElement("div", { className: "x-vs-body" }, /* @__PURE__ */ I.createElement("div", { className: "x-vs-head" }, /* @__PURE__ */ I.createElement("span", null), /* @__PURE__ */ I.createElement("span", null, "Usual day"), /* @__PURE__ */ I.createElement("span", null, "Hakobian plan")), cmp.map((r, i) => /* @__PURE__ */ I.createElement("div", { key: i, className: "x-vs-row" }, /* @__PURE__ */ I.createElement("div", { className: "x-vs-lever" }, r.k), /* @__PURE__ */ I.createElement("div", { className: "x-vs-guess" }, r.usual), /* @__PURE__ */ I.createElement("div", { className: "x-vs-hak" }, r.plan), /* @__PURE__ */ I.createElement("div", { className: "x-vs-ev" }, r.why, ". ", /* @__PURE__ */ I.createElement(XRefs, { ids: r.ref })))), /* @__PURE__ */ I.createElement("div", { className: "x-vs-note" }, "Same 20 people, same day. The usual day is a model of a team member without a plan: starts at 9:15, works the list in whatever order it sits, checks the lead inbox every two hours, picks a channel out of habit (6 calls, 2\u20133 emails, 1\u20132 texts in 10), sends one template, stops after about two tries. These are process numbers, not results, and this usual day is generous: a secret shop of 25 insurers found 1.45 call attempts per lead and 2.3 days to a first call. Whether the plan closes more households is what the test below measures."))), /* @__PURE__ */ I.createElement("div", { className: "card x-test" }, /* @__PURE__ */ I.createElement("div", { className: "card-head" }, /* @__PURE__ */ I.createElement("span", { className: "title" }, "How to prove it"), /* @__PURE__ */ I.createElement("span", { className: "count" }, "the test")), /* @__PURE__ */ I.createElement("ol", { className: "x-rules x-test-steps" }, XTEST.map((t, i) => /* @__PURE__ */ I.createElement("li", { key: i }, /* @__PURE__ */ I.createElement("div", { className: "x-rule-t" }, t)))), /* @__PURE__ */ I.createElement(XTestCalc, null)), XDESIGN.length > 0 && /* @__PURE__ */ I.createElement("div", { className: "card x-design" }, /* @__PURE__ */ I.createElement("div", { className: "card-head" }, /* @__PURE__ */ I.createElement("span", { className: "title" }, "Built to need no training"), /* @__PURE__ */ I.createElement("span", { className: "count" }, XDESIGN.length, " rules")), /* @__PURE__ */ I.createElement("ol", { className: "x-rules x-design-rules" }, XDESIGN.map((r, i) => /* @__PURE__ */ I.createElement("li", { key: i }, /* @__PURE__ */ I.createElement("div", { className: "x-rule-k" }, r.k), /* @__PURE__ */ I.createElement("div", { className: "x-rule-t" }, r.t, " ", /* @__PURE__ */ I.createElement(XRefs, { ids: r.ref })))))), /* @__PURE__ */ I.createElement("div", { className: "card x-sources" }, /* @__PURE__ */ I.createElement("div", { className: "card-head" }, /* @__PURE__ */ I.createElement("span", { className: "title" }, "What the tags mean"), /* @__PURE__ */ I.createElement("span", { className: "count" }, Object.keys(XREF).length, " sources")), /* @__PURE__ */ I.createElement("ul", { className: "x-source-list" }, Object.values(XREF).map((r) => /* @__PURE__ */ I.createElement("li", { key: r.k }, /* @__PURE__ */ I.createElement("span", { className: "x-ref" }, r.k), /* @__PURE__ */ I.createElement("span", null, r.s))))))));
}
function XNowBar() {
  useXS();
  const [, setTick] = I.useState(0);
  I.useEffect(() => {
    const t2 = setInterval(() => setTick((x) => x + 1), 1e3);
    return () => clearInterval(t2);
  }, []);
  const now = xClock();
  const views = xLeadViews(xBuildDay(XQ, now));
  const order = xWorkOrder(views, now);
  const v = order[0];
  const go = (id) => {
    if (XS.home === "workflow") {
      xSet({ view: "workflow", open: id, focus: false, wfLast: null, wfScroll: id });
      if (XNav.go) XNav.go("today");
      return;
    }
    xSet({ view: "queue", open: id, focus: false });
    if (XNav.go) XNav.go("today");
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (e) {
    }
  };
  if (!v) return /* @__PURE__ */ I.createElement("button", { className: "x-nowbar is-clear", onClick: () => go(null) }, /* @__PURE__ */ I.createElement("span", { className: "x-nowbar-k" }, "Done"), /* @__PURE__ */ I.createElement("span", { className: "x-nowbar-name" }, "All ", XQ.length, " touched today"));
  const t = v.current, due = xIsDue(t, now), st = xStatusOf(t, now);
  return /* @__PURE__ */ I.createElement("button", { className: `x-nowbar x-nowbar-${t.ch}${due ? " is-due" : ""}`, onClick: () => go(v.lead.id), "aria-label": `${due ? "Now" : "Next"}: ${XCH[t.ch]} ${v.lead.name}, ${st.text}` }, /* @__PURE__ */ I.createElement("span", { className: "x-nowbar-dot", "aria-hidden": "true" }), /* @__PURE__ */ I.createElement("span", { className: "x-nowbar-k" }, due ? "Now" : "Next"), /* @__PURE__ */ I.createElement("span", { className: "x-nowbar-ch" }, XCH[t.ch]), /* @__PURE__ */ I.createElement("span", { className: "x-nowbar-name" }, v.lead.name), /* @__PURE__ */ I.createElement("span", { className: "x-nowbar-t mono" }, st.text), /* @__PURE__ */ I.createElement("span", { className: "x-nowbar-go", "aria-hidden": "true" }, "\u203A"));
}
function XBrandTagline() {
  return /* @__PURE__ */ I.createElement("div", { className: "brand-tagline" }, "An agent's experience ", /* @__PURE__ */ I.createElement("span", { className: "amp" }, "&"), " judgment, at every team member's fingertips.");
}
function XDemoDrawer({ persona, onPersonaChange }) {
  const s = useXS();
  const open = !!s.demoOpen;
  const ref = I.useRef(null);
  I.useEffect(() => {
    if (!open) return;
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) xSet({ demoOpen: false });
    };
    const onKey = (e) => {
      if (e.key === "Escape") xSet({ demoOpen: false });
    };
    document.addEventListener("pointerdown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);
  return /* @__PURE__ */ I.createElement("div", { className: "x-demo" + (open ? " is-open" : ""), ref }, /* @__PURE__ */ I.createElement("button", { className: "x-demo-btn", "aria-expanded": open, "aria-controls": "x-demo-panel", onClick: () => xSet({ demoOpen: !open }), title: "Demo controls: persona, clock, views" }, /* @__PURE__ */ I.createElement("span", { className: "x-demo-dot", "aria-hidden": "true" }), "Demo", open ? " \xD7" : ""), open && /* @__PURE__ */ I.createElement("div", { className: "x-demo-panel", id: "x-demo-panel", role: "region", "aria-label": "Demo controls" }, /* @__PURE__ */ I.createElement("div", { className: "x-demo-row" }, /* @__PURE__ */ I.createElement("span", { className: "x-viewbar-label" }, "Acting as"), /* @__PURE__ */ I.createElement("div", { className: "x-seg", role: "group", "aria-label": "Acting persona" }, ["Alex", "Maya"].map((n) => /* @__PURE__ */ I.createElement("button", { key: n, className: persona === n ? "active" : "", "aria-pressed": persona === n, onClick: () => onPersonaChange(n) }, n, n === "Alex" ? " \xB7 Agent" : " \xB7 Producer")))), /* @__PURE__ */ I.createElement("div", { className: "x-demo-row x-clockbar" }, /* @__PURE__ */ I.createElement("span", { className: "x-viewbar-label" }, "Clock"), /* @__PURE__ */ I.createElement("div", { className: "x-seg", role: "group", "aria-label": "Demo clock" }, XCLOCKS.map(([l, v]) => /* @__PURE__ */ I.createElement("button", { key: l, className: s.clock === v ? "active" : "", "aria-pressed": s.clock === v, onClick: () => xSetClock(v) }, l)))), /* @__PURE__ */ I.createElement("div", { className: "x-demo-row x-viewbar" }, /* @__PURE__ */ I.createElement("span", { className: "x-viewbar-label" }, "Today view"), /* @__PURE__ */ I.createElement("div", { className: "x-seg", role: "group", "aria-label": "Today view" }, [...XVIEWS, ["plan", "Day plan"]].map(([k, l]) => /* @__PURE__ */ I.createElement("button", { key: k, className: s.view === k ? "active" : "", "aria-pressed": s.view === k, onClick: () => {
    xSet(k === "plan" ? { view: k, demoOpen: false } : { view: k, home: k, classicWork: false, demoOpen: false });
    if (XNav.go) XNav.go("today");
  } }, l)))), /* @__PURE__ */ I.createElement("div", { className: "x-demo-row x-statebar" }, /* @__PURE__ */ I.createElement("span", { className: "x-viewbar-label" }, "State rules"), /* @__PURE__ */ I.createElement("div", { className: "x-seg", role: "group", "aria-label": "Agency state" }, Object.keys(XSTATE).map((k) => /* @__PURE__ */ I.createElement("button", { key: k, className: s.state === k ? "active" : "", "aria-pressed": s.state === k, onClick: () => xSet({ state: k }), title: XSTATE[k].note }, k))), /* @__PURE__ */ I.createElement("span", { className: "x-demo-hint" }, xState().cap ? `${xState().label}: ${xState().cap} calls per person in 24 h` : `${xState().label}: no attempt cap`)), /* @__PURE__ */ I.createElement("div", { className: "x-demo-row" }, /* @__PURE__ */ I.createElement("span", { className: "x-viewbar-label" }, "Coaching"), /* @__PURE__ */ I.createElement("div", { className: "x-seg", role: "group", "aria-label": "Coaching" }, [[true, "On"], [false, "Off"]].map(([v, l]) => /* @__PURE__ */ I.createElement("button", { key: l, className: s.coach === v ? "active" : "", "aria-pressed": s.coach === v, onClick: () => xSetCoach(v) }, l))), /* @__PURE__ */ I.createElement("button", { className: "btn ghost x-demo-reset", onClick: () => xStartOver() }, "Start the day over")), /* @__PURE__ */ I.createElement("div", { className: "x-demo-note" }, "These controls exist for the demonstration only; a team member's screen opens on today's plan with none of them.")));
}
function xClassicLead(name) {
  return XQ.find((l) => l.name === name) || XCOOL.find((l) => l.name === name) || null;
}
function XClassicExtras({ name }) {
  const lead = xClassicLead(name);
  if (!lead) return null;
  return /* @__PURE__ */ I.createElement(I.Fragment, null, lead.consent && lead.consent.stop && /* @__PURE__ */ I.createElement("span", { className: "lz lz-danger x-lz-stop", title: lead.consent.basis }, "Texted STOP ", lead.consent.stop), /* @__PURE__ */ I.createElement("span", { className: "x-tag x-src-tag", title: "Where this person comes from in the agency's system" }, xSource(lead)));
}
function xClassicOpen(name) {
  const lead = xClassicLead(name);
  if (!lead || !XQ.includes(lead)) return;
  xSet({ open: lead.id, classicWork: true });
}
const XVIEWS = [["workflow", "Workflow"], ["classic", "Classic"], ["queue", "Action queue"]];
function XViewSwitch({ view }) {
  return /* @__PURE__ */ I.createElement("div", { className: "x-seg x-viewswitch", role: "group", "aria-label": "Today view" }, XVIEWS.map(([k, l]) => /* @__PURE__ */ I.createElement("button", { key: k, className: view === k ? "active" : "", "aria-pressed": view === k, onClick: () => xSet({ view: k, home: k, classicWork: false }) }, l)));
}
function XClassicWork({ views, order, now, persona }) {
  const s = useXS();
  const open = s.open != null ? s.open : order[0] ? order[0].lead.id : null;
  const v = views.find((x) => x.lead.id === open) || null;
  const show = !!s.classicWork && v && v.current;
  if (!show) return null;
  const close = () => xSet({ classicWork: false });
  const row = v.current.ch === "call" ? /* @__PURE__ */ I.createElement(XRow, { v, now, isOpen: true, persona, onToggle: () => {
  }, onAct: (k) => {
    xAct(v, k, order);
  }, onUndo: () => xUndo(v) }) : /* @__PURE__ */ I.createElement(XMsgRow, { v, now, isOpen: true, persona, onToggle: () => {
  }, onAct: (k) => {
    xAct(v, k, order);
  }, onUndo: () => xUndo(v) });
  return /* @__PURE__ */ I.createElement("div", { className: "x-cwork", role: "dialog", "aria-label": `Work card: ${v.lead.name}` }, /* @__PURE__ */ I.createElement("div", { className: "x-cwork-head" }, /* @__PURE__ */ I.createElement("span", { className: "x-viewbar-label" }, "The next five minutes"), /* @__PURE__ */ I.createElement("button", { className: "x-cwork-close", onClick: close, "aria-label": "Close" }, "\xD7")), /* @__PURE__ */ I.createElement("div", { className: "x-cwork-body" }, row), /* @__PURE__ */ I.createElement("div", { className: "x-cwork-foot" }, /* @__PURE__ */ I.createElement("span", null, "Same card as the queue: the words, the timer, the outcome. Tap any name on the board to open theirs.")));
}
function XClassic({ persona }) {
  const s = useXS();
  XS.persona = persona;
  if (!XS.seeded) {
    XS.seeded = true;
    if (!XFRESH) xSeedUpTo(XS.clock, true);
  }
  const now = xClock();
  const day = xBuildDay(XQ, now);
  const pr = xProgress(day, now);
  const views = pr.views;
  const order = xWorkOrder(views, now);
  const F = Ef.funnel;
  const score = xScore(s.done);
  const next = order.find((v) => xIsDue(v.current, now)) || order[0] || null;
  const fresh = !Object.keys(s.done).length;
  const mix = { call: 0, text: 0, email: 0 };
  for (const t of pr.plan) mix[t.ch]++;
  const start = () => {
    xSet({ open: next ? next.lead.id : null, classicWork: true });
  };
  const onBoardClick = (e) => {
    const row = e.target.closest(".today-grid .row");
    if (!row) return;
    const nameEl = row.querySelector(".name");
    if (nameEl) xClassicOpen(nameEl.textContent.trim());
  };
  return /* @__PURE__ */ I.createElement("section", { className: "view active x-today x-lean x-classic" + (s.classicWork ? " has-work" : "") }, /* @__PURE__ */ I.createElement("div", { className: "x-top" }, /* @__PURE__ */ I.createElement("div", { className: "x-top-left" }, /* @__PURE__ */ I.createElement("h1", null, Gm(Math.floor(now / 60)), ", ", /* @__PURE__ */ I.createElement("span", null, persona), "."), /* @__PURE__ */ I.createElement(XStatusLine, { pr, next, now, onOpen: (id) => xSet({ open: id, classicWork: true }) })), /* @__PURE__ */ I.createElement("div", { className: "x-top-right" }, /* @__PURE__ */ I.createElement(XCompliance, { day }), /* @__PURE__ */ I.createElement(XViewSwitch, { view: "classic" }), /* @__PURE__ */ I.createElement("button", { className: "x-planlink", onClick: () => xSet({ view: "plan" }), title: "The whole day, hour by hour" }, "Day plan \u2192"))), /* @__PURE__ */ I.createElement("div", { className: "x-topgrid x-topgrid-classic" }, /* @__PURE__ */ I.createElement("div", { className: "x-topright" }, /* @__PURE__ */ I.createElement(XDayStrip, { pr, now, mix, clock: s.clock }), /* @__PURE__ */ I.createElement(XScoreboard, { pr, score, F, bump: s.bump, onStart: start, fresh, pro: xProCount(day), cool: xCoolCount() }))), /* @__PURE__ */ I.createElement("div", { className: "x-classic-grid", onClick: onBoardClick }, /* @__PURE__ */ I.createElement("div", { className: "x-classic-board" }, /* @__PURE__ */ I.createElement(Uf, { persona })), /* @__PURE__ */ I.createElement(XClassicWork, { views, order, now, persona })));
}
const XWF_FOLD_MS = 1021;
function xTbTime(min, full) {
  const m = (Math.round(min) % 1440 + 1440) % 1440, h = Math.floor(m / 60), mm = m % 60;
  const hh = String((h + 11) % 12 + 1), sub = h >= 12 ? "PM" : "AM", hm = `${hh}:${String(mm).padStart(2, "0")}`;
  if (full) return { label: hm, sub };
  return mm ? { label: hm, sub: "" } : { label: hh, sub };
}
function xTbWindow(t, d) {
  if (d && d.k === "scheduled") return [d.when != null ? Math.min(d.when, d.t) : XDAY.open, d.t];
  if (!t || t.tomorrow) return null;
  if (t.ch !== "call") return [Math.min(XDAY.open, t.slot), t.slot];
  if (t.booked) return [t.slot - 60, t.slot];
  if (t.wk === "now" && t.lead.seen != null) {
    const l = xLanded(t.lead);
    return [l, l + 5];
  }
  const W = XWIN[t.wk];
  if (W && W.rel && t.p && t.p.anchor != null) return [t.p.anchor + W.rel[0], t.p.anchor + W.rel[1]];
  if (W && W.lo != null) return [W.lo, W.hi];
  return [XDAY.open, XDAY.close];
}
function xTbFrac(win, now) {
  if (!win) return 0;
  const [lo, hi] = win;
  if (hi <= lo) return now >= hi ? 1 : 0;
  return Math.max(0, Math.min(1, (now - lo) / (hi - lo)));
}
function xWFWhy(t) {
  if (!t) return "";
  if (t.booked && !t.late) return "They picked this time. Be early.";
  if (t.tomorrow) return "After 8 pm, calls and texts wait for the morning.";
  const w = XWIN[t.wk];
  if (!w || !w.why) return "";
  const parts = w.why.split(/;\s|, and |:\s/);
  let s = parts[0];
  if (s.length < 21 && parts[1]) s += ": " + parts[1].split(/, with /)[0];
  return s.replace(/\.$/, "") + ".";
}
function xWFWaitWords(reason) {
  if (!reason) return "waits";
  if (/Do Not Call/.test(reason)) return "waits: Do Not Call";
  if (/^No \w+ consent/.test(reason)) return "waits: no OK on file";
  if (reason === XSTYLE.noTextFirst) return "waits: after the first conversation";
  return "waits";
}
function xWFPending(v, now) {
  let pend = null;
  for (const t of v.doneTs) {
    const d = XS.done[t.id];
    if (d && d.k === "scheduled" && d.t > now) pend = t;
  }
  return pend;
}
function xWFInfo(v, now, full) {
  const pend = xWFPending(v, now), t = v.current;
  if (pend && (!t || !xIsDue(t, now))) {
    const d = XS.done[pend.id], tm = xTbTime(d.t, full);
    return {
      mode: "approved",
      t: pend,
      ch: pend.ch,
      sort: d.t,
      label: tm.label,
      sub: tm.sub,
      frac: xTbFrac(xTbWindow(pend, d), now),
      state: "approved",
      title: `${XCH[pend.ch]} \xB7 approved \xB7 sends ${xFmt(d.t)}`,
      step: `Approved \xB7 ${xFmt(d.t)}`,
      stepTitle: `Approved${d.by ? ` by ${d.by}` : ""} at ${xFmt(d.when != null ? d.when : now)}; it sends by itself at ${xFmt(d.t)}`
    };
  }
  if (t) {
    const due = xIsDue(t, now), msg = t.ch !== "call", st = xStatusOf(t, now);
    const tm = t.tomorrow ? { label: full ? "9:00" : "9", sub: "AM" } : xTbTime(t.slot, full);
    const state = t.blocked ? "blocked" : due ? "due" : msg ? "ready" : "planned";
    const now1 = t.wk === "now" && t.lead.seen != null;
    const when = t.tomorrow ? "tomorrow 9:00 AM" : now1 ? "now" : xFmt(t.slot);
    let step;
    if (t.blocked) step = `${XCH[t.ch]} \xB7 ${xWFWaitWords(t.chReason)}`;
    else if (msg) step = due ? `${XCH[t.ch]} \xB7 ${st.text.toLowerCase()}` : `${XCH[t.ch]} \xB7 sends ${when}`;
    else if (!due) step = `Call \xB7 ${when}${t.booked ? " \xB7 booked" : ""}`;
    else if (now1) step = `Call \xB7 now \xB7 ${st.text}`;
    else step = /^Due since/.test(st.text) ? `Call \xB7 ${st.text.toLowerCase()}` : `Call \xB7 ${when} \xB7 due now`;
    const words = t.blocked ? `blocked: ${t.chReason || "this step waits"}` : due ? "due now" : msg ? "ready to check" : "planned";
    return {
      mode: "live",
      t,
      ch: t.ch,
      due,
      sort: t.tomorrow ? 1e4 + t.slot : t.slot,
      label: tm.label,
      sub: tm.sub,
      frac: t.blocked ? 0 : xTbFrac(xTbWindow(t, null), now),
      state,
      title: `${XCH[t.ch]} \xB7 ${msg && !t.blocked && !now1 ? "sends " : ""}${when} \xB7 ${words}`,
      step,
      stepTitle: t.blocked ? t.chReason : `${t.step.what} \xB7 ${xTouchWhy(t)}`,
      badge: state === "ready" ? "Check" : null,
      btn: msg ? "Check" : "Call"
    };
  }
  if (v.last) {
    const d = XS.done[v.last.id], at = d.k === "scheduled" ? d.t : d.when != null ? d.when : d.t;
    const what = d.k === "scheduled" ? "Sent" : XOUT[d.k] || "Done";
    return {
      mode: "done",
      t: v.last,
      ch: v.last.ch,
      sort: at,
      label: "",
      sub: "",
      frac: 0,
      state: "done",
      title: `${XCH[v.last.ch]} \xB7 done \xB7 ${what} ${xFmt(at)}`,
      step: `${what} \xB7 ${xFmt(at)}`,
      stepTitle: xOutcomeText(v)
    };
  }
  return { mode: "none", t: null, ch: "call", sort: 2e4, label: "", sub: "", frac: 0, state: "planned", title: "Nothing due today", step: "Nothing due today" };
}
function xWFCoolInfo(l) {
  const ch = xCoolChannel(l), d = XS.cool[l.id];
  if (d != null) return { mode: "done", ch, label: "", sub: "", frac: 0, state: "done", title: `${XCH[ch]} \xB7 done ${xFmt(d)}`, step: `Done \xB7 ${xFmt(d)}` };
  return { mode: "cool", ch, label: "open", sub: "", frac: 0, state: "planned", title: `${XCH[ch]} \xB7 any open minute \xB7 planned`, step: `${XCH[ch]} \xB7 any open minute`, btn: ch === "call" ? "Call" : "Check" };
}
function xWFTimeline(v, now) {
  const out = [], lead = v.lead;
  if (v.last) {
    const d = XS.done[v.last.id], pending = d.k === "scheduled" && d.t > now, at = d.k === "scheduled" ? d.t : d.when != null ? d.when : d.t;
    const tm = xTbTime(at, false);
    out.push({
      k: "Done",
      ch: v.last.ch,
      state: pending ? "approved" : "done",
      label: tm.label,
      sub: tm.sub,
      frac: pending ? xTbFrac(xTbWindow(v.last, d), now) : 0,
      words: `${pending ? "Approved, sends" : d.k === "scheduled" ? "Sent" : XOUT[d.k]} \xB7 ${xFmt(at)}`,
      title: `Done today \xB7 ${XCH[v.last.ch]} \xB7 ${v.last.step.what}`
    });
  } else if ((lead.done || 0) > 0) {
    const s = XSRC[lead.source].steps.find((x) => x.n === lead.done);
    if (s) out.push({ k: "Done", ch: s.ch[0], state: "done", label: "", sub: "", frac: 0, words: `Step ${s.n} \xB7 ${s.what}`, title: `Done before today \xB7 step ${s.n}: ${s.what}` });
  }
  const t = v.current;
  if (t) {
    const i = xWFInfo({ ...v, doneTs: [] }, now, false);
    out.push({ k: "Now", ch: t.ch, state: i.state, label: i.label, sub: i.sub, frac: i.frac, words: `${i.step} \xB7 ${t.step.what}`, title: i.title });
    const later = v.ts.filter((x) => !XS.done[x.id] && x.id !== t.id && (x.tomorrow - t.tomorrow || x.slot - t.slot) >= 0);
    if (later[0]) {
      const x = later[0], tm = x.tomorrow ? { label: "9", sub: "AM" } : xTbTime(x.slot, false);
      out.push({
        k: "Next",
        ch: x.ch,
        state: x.blocked ? "blocked" : "planned",
        label: tm.label,
        sub: tm.sub,
        frac: 0,
        words: `${XCH[x.ch]} \xB7 ${x.tomorrow ? "tomorrow 9:00 AM" : xFmt(x.slot)} \xB7 ${x.step.what}`,
        title: `${XCH[x.ch]} \xB7 ${x.label} \xB7 planned`
      });
      return out;
    }
  }
  if (v.p && v.p.next) {
    const s = v.p.next, back = lead.source === "XD" || lead.source === "RI", dd = s.dayS;
    const label = back ? dd < 0 ? `X\u2212${-dd}` : `X+${dd}` : `D${dd}`;
    const ch = xPickChannel(s, lead, v.p.contacted).ch;
    out.push({ k: "Next", ch, state: "planned", label, sub: "", frac: 0, words: xNextLabel(v.p).replace(/^Next: /, ""), title: `${XCH[ch]} \xB7 ${xNextLabel(v.p)}` });
  }
  return out;
}
function XWFTimeline({ v, now }) {
  const items = xWFTimeline(v, now);
  if (!items.length) return null;
  return /* @__PURE__ */ I.createElement("ol", { className: "x-wf-tl", "aria-label": "This lead's timeline: done, now, next" }, items.map((it) => /* @__PURE__ */ I.createElement("li", { key: it.k, className: "x-wf-tl-" + it.k.toLowerCase() }, /* @__PURE__ */ I.createElement(XTimeBox, { h: 21, ch: it.ch, label: it.label, sub: it.sub, frac: it.frac, state: it.state, title: it.title }), /* @__PURE__ */ I.createElement("div", { className: "x-wf-tl-text" }, /* @__PURE__ */ I.createElement("div", { className: "x-wf-tl-k" }, it.k), /* @__PURE__ */ I.createElement("div", { className: "x-wf-tl-t" }, it.words)))));
}
function xWFFacts(s, lead, key) {
  const first = xFirst(lead.name).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = String(s).split(new RegExp(`(\\$\\d[\\d,]*(?:\\/mo\\.?)?|\\b${first}\\b|\\[[^\\]]+\\])`, "g"));
  return parts.map((p, i) => i % 2 ? /* @__PURE__ */ I.createElement("mark", { key: key + "-" + i, className: /^\[/.test(p) ? "x-fill" : "" }, p) : p);
}
function XWFDraft({ body, lead, email }) {
  const [hover, setHover] = I.useState(0);
  const parts = xSplit(body, email, lead.scenario, lead.style);
  return /* @__PURE__ */ I.createElement("div", { className: "x-msg-body x-marked x-wf-draft", onMouseLeave: () => setHover(0) }, parts.map((p, i) => p.k ? /* @__PURE__ */ I.createElement("span", { key: i, className: `x-mv x-mv-${p.k}${hover === p.k ? " is-hot" : ""}`, title: XMOVE_NAMES[p.k - 1], onMouseEnter: () => setHover(p.k) }, /* @__PURE__ */ I.createElement("span", { className: `x-badge x-badge-${p.k} x-mv-n`, "data-n": p.k, "aria-hidden": "true" }), xWFFacts(p.s, lead, i)) : /* @__PURE__ */ I.createElement(I.Fragment, { key: i }, xWFFacts(p.s, lead, i))));
}
function XWFMsgCard({ v, now, persona, onAct }) {
  const t = v.current, lead = v.lead, ch = t.ch;
  const [edit, setEdit] = I.useState(false);
  const [text, setText] = I.useState(null);
  const msg = xMessage(lead, ch, persona);
  const okText = !!lead.consent.sms, okEmail = !!lead.consent.email;
  const noConsent = ch === "text" && !okText || ch === "email" && !okEmail;
  const blocked = noConsent || t.blocked;
  const k = xOuts(ch, t)[0];
  const sendsAt = k === "scheduled" ? xFmt(t.slot) : xFmt(now);
  const cell = XMOVES[lead.scenario] && XMOVES[lead.scenario][lead.style];
  const body = text != null ? text : msg ? msg.body : "";
  return /* @__PURE__ */ I.createElement("div", { className: "x-wf-compose" }, blocked && /* @__PURE__ */ I.createElement("div", { className: "x-wf-blocked", role: "note" }, /* @__PURE__ */ I.createElement("span", null, /* @__PURE__ */ I.createElement("b", null, "This step waits."), " ", noConsent ? `No ${ch} consent on file` : t.chReason || "The system stopped it", ". Pick another channel:"), /* @__PURE__ */ I.createElement("div", { className: "x-seg x-chan", role: "group", "aria-label": "Channel" }, ["call", "text", "email"].map((c) => {
    const dis = c === "text" && !okText || c === "email" && !okEmail;
    return /* @__PURE__ */ I.createElement("button", { key: c, className: ch === c ? "active" : "", "aria-pressed": ch === c, disabled: dis, title: dis ? `No ${c} consent on file` : void 0, onClick: () => xSet((s) => ({ chan: { ...s.chan, [t.id]: c } })) }, XCH[c]);
  }))), msg && /* @__PURE__ */ I.createElement("div", { className: "x-msg x-wf-msg" }, ch === "email" && /* @__PURE__ */ I.createElement("div", { className: "x-msg-subject" }, msg.subject), edit ? /* @__PURE__ */ I.createElement("textarea", { className: "x-wf-edit", value: body, onChange: (e) => setText(e.target.value), rows: ch === "email" ? 10 : 4, "aria-label": "Edit the draft" }) : /* @__PURE__ */ I.createElement(XWFDraft, { body, lead, email: ch === "email" }), /* @__PURE__ */ I.createElement("div", { className: "x-msg-foot" }, /* @__PURE__ */ I.createElement("span", { className: "x-msg-note" }, "Check: ", xFacts(lead, ch)), /* @__PURE__ */ I.createElement("span", { className: "x-msg-note" }, ch === "text" ? `${Zm(body + cf).len} characters with the opt-out line` : "Signature and license line are added on send"))), cell && /* @__PURE__ */ I.createElement("div", { className: "x-wf-coach" }, /* @__PURE__ */ I.createElement("span", { className: "x-wf-coach-k" }, "Why this draft \xB7 Hakobian Strategic Coaching:"), " ", XESSENCE[lead.style], " ", cell.a.why), /* @__PURE__ */ I.createElement(XWFTimeline, { v, now }), /* @__PURE__ */ I.createElement("div", { className: "x-wf-acts" }, /* @__PURE__ */ I.createElement("button", { className: "btn primary x-wf-approve", disabled: blocked || !msg, onClick: () => onAct(k) }, "Approve \xB7 sends ", sendsAt), /* @__PURE__ */ I.createElement("button", { className: "btn x-wf-editbtn", "aria-pressed": edit, onClick: () => setEdit(!edit) }, edit ? "Done editing" : "Edit"), text != null && !edit && /* @__PURE__ */ I.createElement("span", { className: "x-override" }, "changed by you"), /* @__PURE__ */ I.createElement("button", { className: "btn ghost x-skip", onClick: () => onAct("skip") }, "Skip")));
}
function XWFLife({ v }) {
  const [open, setOpen] = I.useState(false);
  return /* @__PURE__ */ I.createElement(I.Fragment, null, /* @__PURE__ */ I.createElement("div", { className: "x-wf-lh" }, /* @__PURE__ */ I.createElement(XLifeChip, { lead: v.lead, v, open, onToggle: () => setOpen(!open) })), open && /* @__PURE__ */ I.createElement(XLeadLife, { lead: v.lead, v, onClose: () => setOpen(false) }));
}
function XWFCard({ v, info, now, persona, onAct, onUndo }) {
  if (info.mode === "approved") {
    const d = XS.done[info.t.id];
    return /* @__PURE__ */ I.createElement("div", { className: "x-wf-card" }, /* @__PURE__ */ I.createElement("div", { className: "x-wf-note" }, /* @__PURE__ */ I.createElement(Lozenge, { appearance: "success" }, "Approved"), d.by ? ` by ${d.by}` : "", " at ", xFmt(d.when != null ? d.when : now), ". It sends by itself at ", xFmt(d.t), ", and the send records who approved it."), /* @__PURE__ */ I.createElement(XWFTimeline, { v, now }), /* @__PURE__ */ I.createElement("div", { className: "x-wf-acts" }, /* @__PURE__ */ I.createElement("button", { className: "btn", onClick: onUndo }, "Undo the approval")));
  }
  if (!v.current) return null;
  return v.current.ch === "call" ? /* @__PURE__ */ I.createElement("div", { className: "x-wf-card x-wf-callcard" }, /* @__PURE__ */ I.createElement(XWFLife, { v }), /* @__PURE__ */ I.createElement(XWFTimeline, { v, now }), /* @__PURE__ */ I.createElement(XDo, { v, persona, onAct })) : /* @__PURE__ */ I.createElement("div", { className: "x-wf-card x-wf-msgcard" }, /* @__PURE__ */ I.createElement(XWFLife, { v }), /* @__PURE__ */ I.createElement(XWFMsgCard, { key: v.current.id, v, now, persona, onAct }));
}
function XWFCoolCard({ l, ch, onDone, onClose }) {
  return /* @__PURE__ */ I.createElement("div", { className: "x-wf-card x-wf-coolcard" }, /* @__PURE__ */ I.createElement("div", { className: "x-wf-note" }, l.why), /* @__PURE__ */ I.createElement("div", { className: "x-call x-wf-say" }, /* @__PURE__ */ I.createElement("div", { className: "x-say-k" }, ch === "call" ? `Say it \xB7 dial ${l.phone}` : `${XCH[ch]} \xB7 one line`), /* @__PURE__ */ I.createElement("div", { className: "x-say-t" }, xFillSay(l.say, l, XS.persona || "Alex"))), /* @__PURE__ */ I.createElement("div", { className: "x-wf-acts" }, /* @__PURE__ */ I.createElement("button", { className: "btn primary", onClick: onDone }, "Mark done \xB7 5 min"), /* @__PURE__ */ I.createElement("button", { className: "btn ghost x-skip", onClick: onClose }, "Close")));
}
function XWFRowLine({ lead, v, info, isOpen, onToggle, onUndo }) {
  const clickable = info.mode === "live" || info.mode === "approved" || info.mode === "cool";
  const btn = info.mode === "live" || info.mode === "cool" ? /* @__PURE__ */ I.createElement("button", { className: "btn x-wf-btn" + (isOpen ? " primary" : ""), "aria-expanded": isOpen, onClick: (e) => {
    e.stopPropagation();
    onToggle();
  } }, info.btn) : info.mode === "approved" || info.mode === "done" ? /* @__PURE__ */ I.createElement("button", { className: "btn x-wf-btn x-wf-undo", onClick: (e) => {
    e.stopPropagation();
    onUndo();
  } }, "Undo") : /* @__PURE__ */ I.createElement("span", { className: "x-wf-btn" });
  return /* @__PURE__ */ I.createElement("div", { className: "x-wf-row", onClick: clickable ? onToggle : void 0 }, /* @__PURE__ */ I.createElement(XTimeBox, { h: 21, ch: info.ch, label: info.label, sub: info.sub, frac: info.frac, state: info.state, title: info.title, badge: info.badge }), /* @__PURE__ */ I.createElement("div", { className: "x-wf-who" }, /* @__PURE__ */ I.createElement("span", { className: "x-name" }, lead.name), /* @__PURE__ */ I.createElement(XStyleLz, { style: lead.style })), /* @__PURE__ */ I.createElement("div", { className: "x-wf-step" + (info.due ? " is-due" : ""), title: info.stepTitle || info.title }, info.step), /* @__PURE__ */ I.createElement(XMarks, { lead, v }), btn);
}
function XWFItem({ v, info, now, persona, isOpen, extra, onToggle, onAct, onUndo }) {
  return /* @__PURE__ */ I.createElement("div", { className: "x-wf-item" + (isOpen ? " is-open" : "") + (info.mode === "done" ? " is-done" : "") + (info.mode === "approved" ? " is-approved" : "") + (extra || ""), "data-lead": v.lead.id }, /* @__PURE__ */ I.createElement(XWFRowLine, { lead: v.lead, v, info, isOpen, onToggle, onUndo }), isOpen && /* @__PURE__ */ I.createElement(XWFCard, { v, info, now, persona, onAct, onUndo }));
}
function xWFGo(id) {
  xSet({ open: id, wfLast: null, wfScroll: id });
}
function XWFNow({ v, now, last }) {
  const lastV = last ? XQ.find((l) => l.id === last.id) || null : null;
  const [lhFor, setLhFor] = I.useState(null);
  if (!v) {
    return /* @__PURE__ */ I.createElement("div", { className: "card x-wf-now" }, /* @__PURE__ */ I.createElement("div", { className: "card-head" }, /* @__PURE__ */ I.createElement("span", { className: "title" }, "Now"), /* @__PURE__ */ I.createElement("span", { className: "count" }, "all done")), /* @__PURE__ */ I.createElement("div", { className: "x-wf-empty" }, "All ", XQ.length, " touched today. The cooler leads are there for any open minute."));
  }
  const t = v.current, info = xWFInfo(v, now, true), due = xIsDue(t, now), g = XQ_GROUPS.find((x) => x.k === v.group);
  return /* @__PURE__ */ I.createElement("div", { className: "card x-wf-now", "aria-live": "polite" }, /* @__PURE__ */ I.createElement("div", { className: "card-head" }, /* @__PURE__ */ I.createElement("span", { className: "title" }, "Now"), /* @__PURE__ */ I.createElement("span", { className: "count" }, due ? "due now" : `next at ${t.tomorrow ? "9:00 AM" : xFmt(t.slot)}`)), /* @__PURE__ */ I.createElement("div", { className: "x-wf-hero" }, lastV && /* @__PURE__ */ I.createElement("div", { className: "x-wf-hero-last" }, /* @__PURE__ */ I.createElement("span", { className: "x-check" }, "\u2713"), " ", lastV.name, " \xB7 ", last.k === "scheduled" ? "Approved" : XOUT[last.k] || "Done", ". Next up:"), /* @__PURE__ */ I.createElement(XTimeBox, { h: 55, ch: info.ch, label: info.label, sub: info.sub, frac: info.frac, state: info.state, title: info.title }), /* @__PURE__ */ I.createElement("div", { className: "x-wf-hero-text" }, /* @__PURE__ */ I.createElement("div", { className: "x-wf-hero-name" }, v.lead.name), /* @__PURE__ */ I.createElement("div", { className: "x-wf-hero-chips" }, /* @__PURE__ */ I.createElement(XStyleLz, { style: v.lead.style }), g && /* @__PURE__ */ I.createElement("span", { className: "x-tag" }, g.tag), /* @__PURE__ */ I.createElement(XLifeChip, { lead: v.lead, v, open: lhFor === v.lead.id, onToggle: () => setLhFor(lhFor === v.lead.id ? null : v.lead.id) })), /* @__PURE__ */ I.createElement("div", { className: "x-wf-hero-step" }, info.step), /* @__PURE__ */ I.createElement("div", { className: "x-wf-hero-why" }, xWFWhy(t)), /* @__PURE__ */ I.createElement("button", { className: "btn primary x-wf-hero-btn" + (lastV ? " is-next" : ""), onClick: () => xWFGo(v.lead.id) }, lastV ? "Next \u2192" : info.btn))), lhFor === v.lead.id && /* @__PURE__ */ I.createElement(XLeadLife, { lead: v.lead, v, onClose: () => setLhFor(null) }));
}
function XWFFirst({ views, now }) {
  const firsts = views.filter((v) => v.current && v.lead.seen != null && v.lead.day === 0 && v.current.wk === "now").sort((a, b) => xFreshKey(a.lead, now) - xFreshKey(b.lead, now));
  return /* @__PURE__ */ I.createElement("div", { className: "card x-wf-first" }, /* @__PURE__ */ I.createElement("div", { className: "card-head" }, /* @__PURE__ */ I.createElement("span", { className: "title" }, "Needs first touch"), /* @__PURE__ */ I.createElement("span", { className: "count" }, firsts.length ? `${firsts.length} waiting` : "none")), firsts.length ? firsts.map((v) => {
    const t = v.current, landed = xLanded(v.lead), tm = xTbTime(t.slot, false), st = xStatusOf(t, now), w = Math.max(0, Math.round(now - landed));
    return /* @__PURE__ */ I.createElement("div", { key: v.lead.id, className: "x-wf-mini", onClick: () => xWFGo(v.lead.id) }, /* @__PURE__ */ I.createElement(XTimeBox, { h: 21, ch: "call", label: tm.label, sub: tm.sub, frac: xTbFrac([landed, landed + 5], now), state: "due", title: `Call \xB7 landed ${xFmt(landed)} \xB7 ${w} min ago \xB7 due now` }), /* @__PURE__ */ I.createElement("div", { className: "x-wf-mini-t" }, /* @__PURE__ */ I.createElement("span", { className: "x-name" }, v.lead.name), /* @__PURE__ */ I.createElement("span", { className: "x-wf-mini-sub" }, "Landed ", xFmt(landed), " \xB7 ", st.text)), /* @__PURE__ */ I.createElement("button", { className: "btn x-wf-btn", onClick: (e) => {
      e.stopPropagation();
      xWFGo(v.lead.id);
    } }, "Call"));
  }) : /* @__PURE__ */ I.createElement("div", { className: "x-wf-empty" }, "None waiting \xB7 a new lead gets its first call inside a minute."));
}
function XWFSoon({ views, now }) {
  const near = (l) => (l.source === "XD" || l.source === "RI") && l.day >= -3 && l.day <= 0;
  const list = views.filter((v) => v.current && (v.lead.at || near(v.lead))).sort((a, b) => a.current.tomorrow - b.current.tomorrow || a.current.slot - b.current.slot);
  return /* @__PURE__ */ I.createElement("div", { className: "card x-wf-soon" }, /* @__PURE__ */ I.createElement("div", { className: "card-head" }, /* @__PURE__ */ I.createElement("span", { className: "title" }, "Coming up"), /* @__PURE__ */ I.createElement("span", { className: "count" }, "next 3 days")), list.length ? /* @__PURE__ */ I.createElement("div", { className: "x-wf-soon-list" }, list.map((v) => {
    const t = v.current, tm = t.tomorrow ? { label: "9:00", sub: "AM" } : xTbTime(t.slot, true), due = xIsDue(t, now);
    const kind = v.lead.at ? /^(Booked|Callback)\b/.test(v.lead.reason) ? v.lead.reason : `Booked \xB7 ${v.lead.reason}` : v.lead.day === 0 ? `Renews today \xB7 ${t.step.what}` : `Renews in ${-v.lead.day} days \xB7 ${t.step.what}`;
    return /* @__PURE__ */ I.createElement("button", { key: v.lead.id, className: "x-wf-mini x-wf-soon-row", onClick: () => xWFGo(v.lead.id) }, /* @__PURE__ */ I.createElement(XTimeBox, { h: 34, ch: t.ch, label: tm.label, sub: tm.sub, frac: xTbFrac(xTbWindow(t, null), now), state: t.blocked ? "blocked" : due ? "due" : "planned", title: `${XCH[t.ch]} \xB7 ${t.tomorrow ? "tomorrow 9:00 AM" : xFmt(t.slot)} \xB7 ${due ? "due now" : "planned"}` }), /* @__PURE__ */ I.createElement("span", { className: "x-wf-mini-t" }, /* @__PURE__ */ I.createElement("span", { className: "x-name" }, v.lead.name), /* @__PURE__ */ I.createElement("span", { className: "x-wf-mini-sub", title: kind }, XCH[t.ch], " \xB7 ", t.tomorrow ? "tomorrow 9:00 AM" : xFmt(t.slot), due ? " \xB7 due now" : "", " \xB7 ", kind)));
  })) : /* @__PURE__ */ I.createElement("div", { className: "x-wf-empty" }, "Nothing booked or renewing in the next three days."));
}
function XWorkflow({ persona }) {
  const s = useXS();
  const [, bump] = I.useState(0);
  const prevIds = I.useRef([]);
  XS.persona = persona;
  if (!XS.seeded) {
    XS.seeded = true;
    if (!XFRESH) xSeedUpTo(XS.clock, true);
  }
  const now = xClock();
  const day = xBuildDay(XQ, now);
  const pr = xProgress(day, now);
  const views = pr.views;
  const order = xWorkOrder(views, now);
  const next = order.find((v) => xIsDue(v.current, now)) || order[0] || null;
  const handled = views.filter((v) => !v.current && v.doneTs.length);
  const coolDone = XCOOL.filter((l) => s.cool[l.id] != null).length;
  const wins = handled.length + coolDone;
  const open = s.open;
  const info = {};
  for (const v of views) info[v.lead.id] = xWFInfo(v, now, false);
  const byId = {};
  for (const v of views) byId[v.lead.id] = v;
  const t0 = Date.now(), strike = s.wfStrike || {};
  const striking = (id) => strike[id] != null && t0 - strike[id] < XWF_FOLD_MS;
  const dueIds = order.filter((v) => xIsDue(v.current, now) && info[v.lead.id].mode === "live").map((v) => v.lead.id);
  const restIds = views.filter((v) => !dueIds.includes(v.lead.id) && info[v.lead.id].mode !== "done").sort((a, b) => info[a.lead.id].sort - info[b.lead.id].sort).map((v) => v.lead.id);
  const mainIds = [...dueIds, ...restIds];
  for (const v of views) {
    const id = v.lead.id;
    if (info[id].mode !== "done" || !striking(id)) continue;
    const at = prevIds.current.indexOf(id);
    mainIds.splice(at < 0 ? mainIds.length : Math.min(at, mainIds.length), 0, id);
  }
  const doneIds = views.filter((v) => info[v.lead.id].mode === "done" && !striking(v.lead.id)).sort((a, b) => info[b.lead.id].sort - info[a.lead.id].sort).map((v) => v.lead.id);
  I.useEffect(() => {
    prevIds.current = mainIds;
  });
  I.useEffect(() => {
    const id = XS.wfScroll;
    if (!id) return;
    XS.wfScroll = null;
    const el = document.querySelector(`.x-wf [data-lead="${id}"]`);
    if (!el) return;
    let calm = false;
    try {
      calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch (e) {
    }
    const r = el.getBoundingClientRect();
    if (r.top < 89 || r.top > window.innerHeight * 0.618) el.scrollIntoView({ block: "start", behavior: calm ? "auto" : "smooth" });
  });
  const act = (v, k) => {
    if (k !== "skip") {
      xSet((st) => ({ wfStrike: { ...st.wfStrike || {}, [v.lead.id]: Date.now() }, wfLast: { id: v.lead.id, k, at: Date.now() } }));
      setTimeout(() => bump((x) => x + 1), 34);
      setTimeout(() => bump((x) => x + 1), XWF_FOLD_MS + 13);
    }
    xAct(v, k, order);
  };
  const toggle = (id) => xSet({ open: open === id ? "" : id, wfLast: null });
  const item = (id, extra) => {
    const v = byId[id];
    return /* @__PURE__ */ I.createElement(
      XWFItem,
      {
        key: id,
        v,
        info: info[id],
        now,
        persona,
        isOpen: open === id && info[id].mode !== "done",
        extra,
        onToggle: () => toggle(id),
        onAct: (k) => act(v, k),
        onUndo: () => xUndo(v)
      }
    );
  };
  const coolToggle = (id) => xSet((st) => {
    const cool = { ...st.cool };
    if (cool[id] != null) delete cool[id];
    else cool[id] = xClock();
    return { cool, open: st.open === id ? "" : st.open };
  });
  const nextT = next && next.current;
  const nextWhen = nextT ? nextT.wk === "now" && next.lead.seen != null ? "now" : xIsDue(nextT, now) ? "due now" : nextT.tomorrow ? "tomorrow 9:00 AM" : `at ${xFmt(nextT.slot)}` : "";
  return /* @__PURE__ */ I.createElement("section", { className: "view active x-today x-wf" }, /* @__PURE__ */ I.createElement("div", { className: "x-wf-line" }, /* @__PURE__ */ I.createElement("div", { className: "x-wf-line-l" }, /* @__PURE__ */ I.createElement("span", { className: "x-wf-clock", title: "Demo clock" }, xFmt(now)), /* @__PURE__ */ I.createElement(XStatusLine, { pr, next, now, onOpen: xWFGo }), next && /* @__PURE__ */ I.createElement("span", { className: "x-wf-next" }, "Next: ", /* @__PURE__ */ I.createElement("b", null, XCH[nextT.ch], " ", next.lead.name), " \xB7 ", nextWhen, /* @__PURE__ */ I.createElement("button", { className: "x-wf-open", onClick: () => xWFGo(next.lead.id) }, "Open"))), /* @__PURE__ */ I.createElement("div", { className: "x-wf-line-r" }, /* @__PURE__ */ I.createElement(XCompliance, { day }), /* @__PURE__ */ I.createElement(XViewSwitch, { view: "workflow" }), /* @__PURE__ */ I.createElement("button", { className: "x-planlink", onClick: () => xSet({ view: "plan" }), title: "The whole day, hour by hour" }, "Day plan \u2192"))), /* @__PURE__ */ I.createElement("div", { className: "x-wf-grid" }, /* @__PURE__ */ I.createElement("div", { className: "card x-wf-list" }, /* @__PURE__ */ I.createElement("div", { className: "card-head" }, /* @__PURE__ */ I.createElement("span", { className: "title" }, "Today's prospects"), /* @__PURE__ */ I.createElement("span", { className: "count" }, XQ.length + XCOOL.length, " today \xB7 ", wins, " small win", wins === 1 ? "" : "s")), /* @__PURE__ */ I.createElement("div", { className: "x-wf-rows" }, mainIds.map((id) => {
    if (info[id].mode === "done" && striking(id)) return item(id, " row-done-anim" + (t0 - strike[id] > 30 ? " is-fold" : ""));
    return item(id);
  })), /* @__PURE__ */ I.createElement("details", { className: "x-later x-cool x-wf-fold x-wf-cool" }, /* @__PURE__ */ I.createElement("summary", null, XCOOL.length, " cooler leads \xB7 open time", coolDone ? ` \xB7 ${coolDone} done` : ""), XCOOL.map((l) => {
    const ci = xWFCoolInfo(l), isOpen = open === l.id && ci.mode === "cool";
    return /* @__PURE__ */ I.createElement("div", { key: l.id, className: "x-wf-item x-wf-coolitem" + (isOpen ? " is-open" : "") + (ci.mode === "done" ? " is-done" : ""), "data-lead": l.id }, /* @__PURE__ */ I.createElement(XWFRowLine, { lead: l, v: null, info: ci, isOpen, onToggle: () => toggle(l.id), onUndo: () => coolToggle(l.id) }), isOpen && /* @__PURE__ */ I.createElement(XWFCoolCard, { l, ch: ci.ch, onDone: () => coolToggle(l.id), onClose: () => toggle(l.id) }));
  })), doneIds.length > 0 && /* @__PURE__ */ I.createElement("details", { className: "x-later x-wf-fold x-wf-done" }, /* @__PURE__ */ I.createElement("summary", null, "Done today (", doneIds.length, ")"), doneIds.map((id) => item(id)))), /* @__PURE__ */ I.createElement(XWFNow, { v: next, now, last: s.wfLast }), /* @__PURE__ */ I.createElement(XWFFirst, { views, now }), /* @__PURE__ */ I.createElement(XWFSoon, { views, now })));
}
function xLook(views, order, now, handled, score) {
  const firsts = views.filter((v) => v.current && v.lead.seen != null && v.lead.day === 0 && v.current.wk === "now").sort((a, b) => xFreshKey(a.lead, now) - xFreshKey(b.lead, now));
  const calls = order.filter((v) => v.current && v.current.ch === "call" && !v.current.blocked && !firsts.includes(v));
  const msgs = order.filter((v) => v.current && v.current.ch !== "call" && !v.current.blocked);
  const callsDone = views.filter((v) => v.doneTs.some((d) => d.ch === "call")).length;
  const wins = handled.slice().sort((a, b) => (XS.done[b.last.id].at || 0) - (XS.done[a.last.id].at || 0));
  return [
    { k: "first", title: "Needs first touch", n: firsts.length, of: null, sub: firsts.length ? `oldest ${Math.max(...firsts.map((v) => Math.max(0, Math.round(now - xLanded(v.lead)))))} min` : "none waiting", names: firsts.slice(0, 3).map((v) => ({ id: v.lead.id, t: v.lead.name, s: `${Math.max(0, Math.round(now - xLanded(v.lead)))} min` })), tone: firsts.some((v) => now - xLanded(v.lead) > 5) ? "late" : firsts.length ? "now" : "quiet", empty: "Every new lead has had its first call." },
    { k: "calls", title: "Calls today", n: callsDone, of: callsDone + calls.length, sub: calls.length ? `next: ${xFmt(calls[0].current.slot)}` : "all done", names: calls.slice(0, 3).map((v) => ({ id: v.lead.id, t: v.lead.name, s: xIsDue(v.current, now) ? "due now" : xFmt(v.current.slot) })), tone: calls.some((v) => xIsDue(v.current, now)) ? "now" : "quiet", empty: "No calls left today." },
    { k: "msgs", title: "Messages to check", n: msgs.length, of: null, sub: msgs.length ? `${msgs.filter((v) => v.current.ch === "text").length} texts \xB7 ${msgs.filter((v) => v.current.ch === "email").length} emails \xB7 work any time` : "all sent", names: msgs.slice(0, 3).map((v) => ({ id: v.lead.id, t: v.lead.name, s: XCH[v.current.ch].toLowerCase() })), tone: msgs.some((v) => xIsDue(v.current, now)) ? "now" : "quiet", empty: "Every message is checked." },
    { k: "wins", title: "Small wins", n: wins.length, of: XQ.length, sub: `${score.quotes} quote${score.quotes === 1 ? "" : "s"}${score.hh ? ` \xB7 ${score.hh} household${score.hh === 1 ? "" : "s"} protected` : ""}`, names: wins.slice(0, 3).map((v) => ({ id: v.lead.id, t: v.lead.name, s: xOutcomeShort(v) })), tone: wins.length ? "win" : "quiet", empty: "The first one comes with the first call." }
  ];
}
function xOutcomeShort(v) {
  const d = XS.done[v.last.id];
  if (!d) return "done";
  if (d.k === "signed") return "signed";
  if (d.k === "quoted") return "quoted";
  if (d.k === "talked") return "talked";
  if (d.k === "notnow") return "not now";
  if (d.k === "sent" || d.k === "scheduled") return "sent";
  return XOUT[d.k] ? XOUT[d.k].toLowerCase() : "done";
}
function XLook({ views, order, now, handled, score, onOpen }) {
  const q = xLook(views, order, now, handled, score);
  return /* @__PURE__ */ I.createElement("div", { className: "x-look", role: "group", "aria-label": "Today's look" }, q.map((c) => /* @__PURE__ */ I.createElement("div", { key: c.k, className: `x-look-q is-${c.tone}` }, /* @__PURE__ */ I.createElement("div", { className: "x-look-head" }, /* @__PURE__ */ I.createElement("span", { className: "x-look-title" }, c.title), /* @__PURE__ */ I.createElement("span", { className: "x-look-n" }, /* @__PURE__ */ I.createElement("b", null, c.n), c.of != null ? /* @__PURE__ */ I.createElement("small", null, "/", c.of) : null)), /* @__PURE__ */ I.createElement("div", { className: "x-look-sub" }, c.sub), c.names.length ? /* @__PURE__ */ I.createElement("ul", { className: "x-look-list" }, c.names.map((p) => /* @__PURE__ */ I.createElement("li", { key: p.id }, /* @__PURE__ */ I.createElement("button", { className: "x-look-name", onClick: () => onOpen(p.id) }, p.t), /* @__PURE__ */ I.createElement("span", { className: "x-look-when" }, p.s)))) : /* @__PURE__ */ I.createElement("div", { className: "x-look-empty" }, c.empty))));
}
Object.assign(XREF, {
  T1: { k: "T1", s: "Speed to the first call. Within an hour, a web lead was about 7\xD7 likelier to qualify than after an hour, and 60\xD7 likelier than after a day (HBR 2011 audit and 1.25M leads). A first call inside one minute: +391% conversion (Velocify, 3.5M leads). Observational: trust the direction, not the multiplier. \xB7 Vendor data" },
  T2: { k: "T2", s: "Day one, minute by minute: email at about 20 minutes, a second call at 30\u201360 minutes, a third at 1\u20132 hours. Emailed leads were 16% likelier to be reached by phone (Velocify contact-strategy data; never tested against other schedules). \xB7 Vendor data" },
  T3: { k: "T3", s: "Six calls, five emails. 93% of eventual buyers were reached by the sixth call; calls on days 0, 0, 0, 1, 5 and 15, emails on days 0, 4, 8, 14 and 22. More than five emails before a conversation cut conversion 36% (Velocify, 3.5M leads). \xB7 Vendor data" },
  T4: { k: "T4", s: "The hour matters least: the best and worst calling hours differ by about 2.6 contact points (about +7%), against about +110% from a full six-call sequence (Velocify). \xB7 Vendor data" },
  T5: { k: "T5", s: "Calling windows: 10\u201311 am and 4\u20136 pm, with midday (12\u20133 pm) the weakest; Wednesday best, Friday worst (call-platform data, mostly office lines; MIT/InsideSales, 2007). \xB7 Vendor data" },
  T6: { k: "T6", s: "Referrals: referred customers left about 18% less often and were worth more (Schmitt, Skiera & Van den Bulte, Journal of Marketing, 2011). Same day, naming who sent them. \xB7 Peer-reviewed" },
  T7: { k: "T7", s: "Washington: no commercial text to a Washington cell number without clear, affirmative consent in advance, with no exception for people who asked for a quote; $100 a text since June 11, 2026 (RCW 19.190.060, .070 and .040; HB 2274). Sales calls 8 am\u20138 pm, name yourself within 30 seconds, honor do-not-call for a year (RCW 80.36.390). \xB7 Law" },
  T8: { k: "T8", s: "Texts: replies peak near noon, with a small 3\u20134 pm bump in financial services; early-morning texts get fewer replies (35M lead texts, 2025). \xB7 Vendor data" },
  T9: { k: "T9", s: "Email: Tuesday to Thursday 8\u201310 am, plus a 5\u20137 pm window for consumers; Saturday worst. Best and worst days differ by about 1.2 open-rate points, and 88.5% of replies arrive within 24 hours (email-platform data). \xB7 Vendor data" },
  T10: { k: "T10", s: "Text after the first conversation, not before. In a 2,010-person randomized trial a live call beat a letter (31.8% vs 23.7%) and a text alone did worse than the letter (16.9%) (Coronado et al., 2018). Texting before phone contact cut reach 39%; texting after contact lifted conversion 112.6% (Velocify). \xB7 Peer-reviewed and vendor data" },
  T11: { k: "T11", s: "Style: adapting to the buyer tracks with sales performance (r = .27 across 268 studies and 79,747 salespeople; Verbeke et al., 2011). Matched messages raised purchases up to 50%; mismatched ones converted at about half the matched rate (Matz et al., 2017, 3.7M people). No study tests pacing by style. \xB7 Peer-reviewed" },
  T12: { k: "T12", s: "Renewals: shoppers tend to renew within 30 days of the renewal notice; 45% of switchers moved for $100 or less; people who quoted but stayed re-shop at about twice the rate within six months (LexisNexis; J.D. Power). The exact windows are inferences. \xB7 Industry data" },
  T13: { k: "T13", s: "Win-back: price leavers came back most often and stayed longest; bundles won the most back but kept them the shortest; service fixes won fewer, longer-staying customers (Kumar, Bhagwat & Zhang, Journal of Marketing, 2015; about 53,000 customers). \xB7 Peer-reviewed" },
  T14: { k: "T14", s: "Voicemail: across 300M calls, one or two voicemails doubled email replies, and three or more pushed replies below leaving none (Gong). None on the first call, about 15 seconds on the second, one more under 30 seconds later. \xB7 Vendor data" },
  T15: { k: "T15", s: "Why structure pays: 70% of marketing leads were never followed up (461 reps at four firms; Sabnis et al., 2013). A 2014 secret shop of 25 insurers found 2.3 days to the first call, 1.45 call attempts, and 39% never called. After six calls and five emails, a short burst again at two weeks to 45 days (InsideSales). \xB7 Peer-reviewed and vendor data" },
  T16: { k: "T16", s: "Defaults: across 58 studies and 73,675 people, defaults moved choices with d = 0.68 (Jachimowicz et al., 2019); automatic 401(k) enrollment took participation from 37% to about 86% (Madrian & Shea, 2001). \xB7 Peer-reviewed" },
  T17: { k: "T17", s: "No tours: in a 70-person test, tutorials left task success unchanged (91% vs 94%) and made the same tasks feel harder (Nielsen Norman Group). Apple's guidance: people should understand an app by using it. \xB7 Guidance" },
  T18: { k: "T18", s: "Pause points: the WHO 19-item checklist, read at three pauses that already existed, was followed by deaths falling from 1.5% to 0.8% in eight hospitals (Haynes et al., 2009). Mandated across 101 Ontario hospitals with self-reported ticks, it changed nothing: count actions, not ticks. \xB7 Peer-reviewed" },
  T19: { k: "T19", s: "Guidance inside the work: suggested replies raised support agents' resolutions per hour 14%, and 34% for novices (5,179 agents; Brynjolfsson, Li & Raymond). Voice-directed picking cut errors 61%. UPS took its routing software to about 55,000 drivers by letting it set the next stop, moving to a new center only after two weeks of better results. \xB7 Peer-reviewed" },
  T20: { k: "T20", s: "Block the error: an interface that blocked error states (the IBM 'training wheels' study) sped learning; the control group spent almost a quarter of its time recovering from errors. \xB7 Peer-reviewed" },
  T21: { k: "T21", s: "Touch and reading: targets at least 44 \xD7 44 px and never under 24; contrast at least 4.5:1; status never shown by color alone; reading lines around 55\u201370 characters (WCAG 2.2; Apple guidelines; Dyson, 2004). \xB7 Standards" },
  T22: { k: "T22", s: "Standard work: every task specified by content, sequence, timing and outcome, with a built-in test, so a step done late or out of order is 'immediately apparent' (Spear & Bowen, 'Decoding the DNA of the Toyota Production System,' HBR 1999). No study measures a 5- or 10-second rule; treat it as an acceptance test for the screen. \xB7 Practitioner" },
  T23: { k: "T23", s: "Jidoka and the andon cord: the machine stops itself when something is abnormal and a person is called to that one spot; normal work flows without attention (Toyota Production System). People under-report problems, so the system flags them from its own events (Tucker & Spear, 2006). \xB7 Company and peer-reviewed" },
  T24: { k: "T24", s: "Automation bias: a review of 74 studies found reviewers over-trust good automation more under workload and time pressure; showing the facts behind a suggestion and making the reviewer accountable reduced it (Goddard, Roudsari & Wyatt, JAMIA 2012). In a field experiment with 181 recruiters, better AI drew less effort and lower accuracy, mostly from the experienced ones (Dell'Acqua). \xB7 Peer-reviewed and working paper" },
  T25: { k: "T25", s: "Batch like work, in the order the system sets: grouping similar tasks raised productivity in a bank's loan processing (Staats & Gino, Management Science 2012); in 2.4M radiology reads, choosing your own order (easy first) lowered productivity (Ibanez et al., Management Science 2018). \xB7 Peer-reviewed" },
  T26: { k: "T26", s: "Short daily huddles: a review of 24 studies found unit-level huddles positive, though most were uncontrolled before-and-after studies (Franklin et al., BMJ Quality & Safety 2020). Daily review of the numbers was part of the management bundle that raised output in a randomized trial in Indian textile plants (Bloom et al.). \xB7 Peer-reviewed" },
  T27: { k: "T27", s: "Done early, left late: people try harder when they look at whichever is smaller, what's done or what's left. Early in the day show what's done; past halfway, show what's left (Koo & Fishbach, Journal of Consumer Research 2012). \xB7 Peer-reviewed" },
  T28: { k: "T28", s: "Watching progress works: across 138 randomized studies (19,951 people), prompting people to track progress raised goal attainment, d = 0.40, and more when progress was physically recorded or shared (Harkin et al., Psychological Bulletin 2016). So a person's tap counts the touch, not the send. \xB7 Peer-reviewed" },
  T29: { k: "T29", s: "Feedback can backfire: across 607 effects, feedback helped on average (d = .41) but more than a third of interventions lowered performance, mostly when it pointed at the person instead of the task (Kluger & DeNisi, Psychological Bulletin 1996). So every number here points at the next task. \xB7 Peer-reviewed" },
  T30: { k: "T30", s: "No rankings: in a three-year randomized trial with commissioned salespeople, removing a private sales ranking raised sales; the drop came from people who learned they were behind and eased off (Barankay). Team totals and each person against their own plan instead. \xB7 Field experiment" },
  T31: { k: "T31", s: "Help for newer people, less for experienced ones: across 60 studies, novices learned more with more guidance (d = 0.51) and experienced people learned more with less (d = \u22120.43) (expertise-reversal meta-analysis, 2025). Hence the Coaching switch. AI suggestions lifted novice support agents 34%, experienced ones barely (Brynjolfsson, Li & Raymond). \xB7 Peer-reviewed" },
  T32: { k: "T32", s: "Charts read at a glance: simple bars were read correctly in about a quarter of a second; ring-style radial charts took about 1.5 seconds (Blascheck et al., IEEE 2019). Up to about four items are counted at a glance, so small counts show as squares. \xB7 Peer-reviewed" },
  T33: { k: "T33", s: "Burn-up, not burn-down: when the plan grows or shrinks during the day, a burn-up shows it; a burn-down hides it and can make someone look behind only because the list grew. The plan line follows the hour-by-hour plan, not a straight line (agile and lean practice; Few's bullet graph). \xB7 Practitioner" },
  T34: { k: "T34", s: "One line of reflection: across 10 studies (4,340 people), a few minutes of reflecting on what worked improved later performance, most of all early in the learning curve (Di Stefano, Gino, Pisano & Staats, Harvard Business School). \xB7 Working paper" },
  T36: { k: "T36", s: "Reviewing good automation: people with a reliable aid caught 65% of the problems it missed, against 97% without it; a 'please verify' prompt and a second reviewer didn't help (Skitka et al., NASA studies). Being accountable for the approval did (Mosier et al., 1996). Approve all is for routine template messages; anything about life insurance is checked one at a time. \xB7 Peer-reviewed" },
  T37: { k: "T37", s: "Evidence, not a badge: regulated review records name the reviewer, the item, the date and the action, and 'merely opening a communication is not sufficient review' (FINRA Rule 3110). Sites with a trust seal were more than twice as likely to be untrustworthy (Edelman, 2009), so the check opens to its records. Opt-outs must be honored within 10 business days, with at most one confirmation text (47 CFR 64.1200). \xB7 Rules and peer-reviewed" },
  T35: { k: "T35", s: "If-then plans: across 94 tests, plans written as 'if X happens, then I'll do Y' raised goal attainment with d = .65 (Gollwitzer & Sheeran, Advances in Experimental Social Psychology 2006). \xB7 Peer-reviewed" }
});
Object.assign(XWIN, {
  now: { label: "Right now", why: "The first call inside a minute, five at most: speed is the strongest lever in the lead-response data", ref: "T1" },
  m20: { rel: [20, 30], label: "~20 min after the first call", why: "An email about 20 minutes after the first call: emailed leads were likelier to be reached by phone", ref: "T2" },
  m45: { rel: [30, 60], label: "30\u201360 min after", why: "Second call 30\u201360 minutes after the first", ref: "T2" },
  m90: { rel: [60, 120], label: "1\u20132 h after", why: "Third call one to two hours after the first: three tries on day one is the floor", ref: "T2" },
  soon: { label: "Today, first open slot", why: "Same day, and name who sent them in the first sentence", ref: "T6" },
  // a 9-to-5 day with lunch off: emails at 9, calls and texts until noon, messages after lunch, calls 3–5.
  // The evidence's 4–6 pm calling window is traded for a day that ends at 5; the hour is worth 2.6 points at most.
  email: { lo: 9 * 60, hi: 10 * 60, label: "9\u201310 am", why: "Email reads best 8\u201310 am on weekdays; the morning's emails go out at 9, after the huddle", ref: "T9" },
  call: { lo: 10 * 60, hi: 12 * 60, label: "10 am\u2013noon", why: "10\u201311 am is one of the two best calling windows, and the best and worst hours differ by only about 2.6 points, so the morning's calls run to noon", ref: "T5" },
  text: { lo: 10 * 60, hi: 12 * 60, label: "10 am\u2013noon", why: "Text replies peak near noon", ref: "T8" },
  textpm: { lo: 13 * 60, hi: 15 * 60, label: "1\u20133 pm", why: "After lunch: texts are read within minutes at any hour, with a small 3\u20134 pm bump in financial services", ref: "T8" },
  emailpm: { lo: 13 * 60, hi: 15 * 60, label: "1\u20133 pm", why: "Sent after lunch, it is waiting when they read email at 5\u20137 pm", ref: "T9" },
  reach: { lo: 15 * 60, hi: 17 * 60, label: "3\u20135 pm", why: "4\u20136 pm is the strongest calling window; the afternoon's calls run 3\u20135 so the day ends at 5", ref: "T5" },
  open: { label: "First open slot", why: "The good windows were full, so this is the first open slot; the hour matters least", ref: "T4" }
});
Object.assign(XSTYLE, {
  story: {
    spacing: 1,
    pref: ["call", "email", "text"],
    edge: "late",
    ref: "T11",
    short: "Storytellers: voice first, warm and personal",
    why: { call: "Storyteller: voice first (style rule)", email: "Storyteller: a warm, personal email (style rule)", text: "Storyteller: a short, warm text (style rule)" }
  },
  asker: {
    spacing: 1,
    pref: ["email", "call", "text"],
    edge: "early",
    ref: "T11",
    short: "Questioners: lead with the numbers and invite their questions",
    why: { email: "Questioner: the numbers in writing, with one to three questions in the body (style rule)", call: "Questioner: a call to answer their questions (style rule)", text: "Questioner: a short text that points to the numbers (style rule)" }
  },
  doer: {
    spacing: 1,
    pref: ["text", "call", "email"],
    edge: "early",
    ref: "T11",
    short: "Doers: short, the price and one set time",
    why: { text: "Doer: a short text, now that they've okayed texts (style rule)", call: "Doer: a short call with the price and one set time (style rule)", email: "Doer: a short email with the price and one set time (style rule)" }
  },
  thinker: {
    spacing: 1,
    pref: ["email", "text", "call"],
    edge: "late",
    ref: "T11",
    short: "Thinkers: something to reread, no pressure",
    why: { email: "Thinker: a side-by-side by email to reread (style rule)", text: "Thinker: a short text, no pressure (style rule)", call: "Thinker: a calm call, no hype (style rule)" }
  },
  noTextFirst: "No text before the first conversation: most states need their written OK in advance, and a text alone did worse than a letter in a randomized trial"
});
XRULES.push(...[
  { k: "1\u201320\u201360, then 6-5-3 in 22", t: "A new internet lead: call inside a minute (five at most), email the quote at 20 minutes, call again at 30\u201360 minutes and once more by two hours. Then six calls and five emails over about 22 days, and at most three texts, only after they've talked to you and okayed texts. Then a short burst again at about 45 days. A default built from the largest lead datasets, not a proven formula; the test below is how it gets proven.", ref: ["T1", "T2", "T3", "T15"] },
  { k: "Lead type starts the clock", t: "Referral: same day, naming who sent them, the same six calls and five emails. X-date: 60 and 45 days out, then through the 30 days after the renewal notice. Rate increase: before the notice lands. Life event: within days, three touches. Win-back: three weeks before the anniversary, then the quote. Quoted, no decision: within 24 hours, then at three and six months.", ref: ["T6", "T12", "T13"] },
  { k: "Style changes the words, never the pace", t: "All four styles get the same cadence. Style changes the words, the length, the ask, and which channel carries the substance: a side-by-side email for a Thinker, logistics by text for a Doer once texts are okayed, voice first for a Storyteller, the numbers in writing for a Questioner. A wrong style guess about halves the response, so the style is set on a clear signal: what they said, how and how fast they reply.", ref: ["T11"] },
  { k: "Speed, then persistence, then the hour", t: "The best and worst hours differ by about 2.6 contact points; the full six-call sequence is worth about +110%. So the hour is set last and never delays a first call. Later touches fit a 9-to-5 day: emails at 9, calls and texts 10 to noon, lunch off, texts and emails 1\u20133, calls 3\u20135. The evidence's 4\u20136 pm calling window is traded for a day that ends at 5; a new lead still gets its first call inside a minute, lunch or not.", ref: ["T4", "T5", "T8", "T9"] },
  { k: "Consent and the law set the walls", t: "Most states: written consent before any marketing text, and asking for a quote is not that consent; calls and texts 8 am\u20138 pm their time; a Do Not Call number is not called. Texts only after the first conversation. State overlays (Washington's $100 a text, the three-calls-a-day cap in Maryland, Florida and Oklahoma) are settings on top; the plan is built for the majority and never bent to one state.", ref: ["T7", "T10"] },
  { k: "Two voicemails at most", t: "None on the first call to a new lead. About 15 seconds on the second; one more, under 30 seconds, on a later call. Customers can always get one.", ref: ["T14"] },
  { k: "Priority sets the order", t: "New leads inside their first five minutes (freshest first), then booked calls, then X-dates within three days, then today's referrals, then the day's due steps, then renewals and win-backs. The queue is this order; the Now bar is its first line.", ref: ["T1", "T12"] }
]);
XHOURS.push(...[
  { h: 8, label: "Before opening: nothing planned", why: "The office opens at 9; a lead that lands early gets its call at 9:00 sharp. Calls are legal from 8 am", ref: ["T1", "T7"] },
  { h: 9, label: "Huddle, then emails", why: "90 seconds at 9: the plan is already set. Then the morning's emails; a new lead gets its first call inside a minute at any hour", ref: ["T26", "T9", "T1"] },
  { h: 10, label: "Calls and texts", why: "10\u201311 am is a calling window; text replies build toward noon", ref: ["T5", "T8"] },
  { h: 11, label: "Calls and texts until noon", why: XWIN.call.why, ref: ["T5", "T4"] },
  { h: 12, label: "Lunch", why: "Nothing planned over lunch; a new lead still gets its first call inside a minute", ref: "T1" },
  { h: 13, label: "Texts and afternoon emails", why: "Calls connect worst from noon to 3 pm, so the first hours after lunch carry the messages and the five-minute work", ref: ["T5", "T4"] },
  { h: 14, label: "Texts, emails, booked calls", why: XWIN.emailpm.why, ref: "T9" },
  { h: 15, label: "Calls", why: "Text replies get a small 3\u20134 pm bump; the afternoon's calls start at 3", ref: ["T8", "T5"] },
  { h: 16, label: "Calls until 5", why: XWIN.reach.why, ref: "T5" },
  { h: 17, label: "Wrap-up: one line on what worked", why: "The plan ends at 5; a few minutes of reflection improved later performance", ref: "T34" },
  { h: 18, label: "Evening: nothing planned", why: "Calls and texts are legal until 8 pm; the plan keeps them inside the day", ref: "T7" },
  { h: 19, label: "Last legal hour for calls and texts", why: "Most states: calls and texts 8 am\u20138 pm their time", ref: "T7" },
  { h: 20, label: "After 8 pm: email only", why: "Calls and texts wait for 8 am; email can still go out", ref: "T7" }
]);
XTEST.push(...[
  "Before the test, log two to four weeks of the usual follow-up. If it already makes about five attempts with first calls inside five minutes, expect a point or less; if it averages two attempts, three to five points is plausible.",
  "A coin flip for each lead when it is created, logged before anyone touches it, balanced within each team member, lead type and week. Flipping team members instead doesn't work: with five of them, only an 11\u201324-point lift would show.",
  "Only plan leads enter this queue; the others get the team's usual follow-up. Every touch in both groups is logged, so the report shows the real difference in attempts per lead and minutes to the first call.",
  "The measure: household bound within 45 days of the lead (X-date + 30 days for X-dates), counted by the group each lead was assigned to. Also watched: STOP and complaint rates, 90-day cancellations, premium per household.",
  "Size: 686 leads per group to see 10% \u2192 15% with 80% power, about 14 weeks at 20 a day plus the 45 days: about five months for one agency. A 5% relative lift (10% \u2192 10.5%) needs 57,763 per group: about 12 weeks across 100 agencies, 23 years for one.",
  "The plan is written down before the first coin flip; the result is read once, at the end, with its 95% interval. Customer data stays in the agency's and carrier's own systems, under lead IDs."
]);
XDESIGN.push(...[
  { k: "One line says what needs you", t: "The top line of Today is the whole status: done, planned by now, and the next touch with its button. Read it in a glance and act; the 10-second goal is an acceptance test, not a proven threshold.", ref: ["T22", "T19"] },
  { k: "Normal is quiet; exceptions get their own lane", t: "Lanes in a fixed order: Needs a decision, Your calls, Messages to check. A lead the system stopped sits at the top with the reason in plain words; everything on plan looks calm.", ref: ["T22", "T23"] },
  { k: "It stops itself and says why", t: "No text without consent on file, no call or text after 8 pm, nothing to a Do Not Call number. A locked button says why; the compliance check at the top shows what was checked, how and when, and opens to the 20 consent records.", ref: ["T23", "T20", "T7", "T37"] },
  { k: "Check the facts, then approve", t: "Each drafted message shows the facts it was built from (name, quote, consent) with those parts marked. Approve sends it at its hour; at a pause point, one button approves the routine ones, and life-insurance messages are checked one at a time. Every send records who approved it and when.", ref: ["T24", "T36"] },
  { k: "Like work together, in the system's order", t: "Calls in one lane, messages in another, both in the order the plan sets. Choosing easy-first lowers output in large field data.", ref: ["T25"] },
  { k: "Few things open at once", t: "Each lane shows what's due and the next three; the rest of the day folds away until it's due.", ref: ["T25", "T32"] },
  { k: "Stuck? One tap", t: "The help button names the person it goes to and marks the card until they answer, like pulling the andon cord.", ref: ["T23"] },
  { k: "Process first, results after", t: "The scoreboard puts the work you control (touches, calls, life talks, referrals asked) ahead of the results (quotes, apps, households). Apps and households show week to date, because a day's count is too small to read.", ref: ["T28", "T29"] },
  { k: "Done early, left late", t: "Under halfway, each meter shows what's done; past halfway, what's left. Each person on the list is one square that fills when their touch is done.", ref: ["T27", "T32"] },
  { k: "Your plan, not a ranking", t: "Everyone sees team totals and their own plan. No leaderboard; a private ranking cut sales in a randomized trial.", ref: ["T30"] },
  { k: "Coaching on or off", t: "Newer team members see the tips and the why on every touch; experienced ones switch them off and keep the same layout and buttons.", ref: ["T31"] },
  { k: "It starts set up, with no tour", t: "The plan, the hours and the words are preset; a change is kept and marked \u201Cchanged by you.\u201D The guidance is in the work, not in a tutorial.", ref: ["T16", "T17"] },
  { k: "Three pause points", t: "Start (the huddle), midday, wrap-up: each under 90 seconds. Two if-then commitments for the week; one line on what worked at the end of the day.", ref: ["T18", "T26", "T35", "T34"] },
  { k: "Counted by a tap, not ticked", t: "A touch counts when a person sends, approves or logs it. In the live version the call, text and email logs confirm it.", ref: ["T28", "T18"] },
  { k: "Undo, big targets, words with color", t: "Anything reversible happens at once, with Undo. Buttons at least 44 px on touch screens; status always in words as well as color.", ref: ["T21"] },
  { k: "One person at a time", t: "Roll out to one team member, and move to the next after two weeks of better numbers, with a local champion to ask.", ref: ["T19"] },
  { k: "Craft", t: "Type and spacing step by the golden ratio (1.618), motion runs on Fibonacci timings, and the lettering is kerned with true ligatures. A finish choice, not a usability claim.", ref: [] }
]);
const XCHWIN = { call: ["call", "reach"], text: ["text"], email: ["email", "emailpm"] };
function ey(){const[e,t]=I.useState("Alex"),[n,r]=I.useState("today"),xNavReady=(XNav.go=r,0),s=l=>{t(l),l!=="Alex"&&n==="manager"&&r("today")},[i,a]=Kf();return i?o.jsxs(o.Fragment,{children:[o.jsx(Xf,{}),o.jsx(Ym,{persona:e,onPersonaChange:s}),o.jsx(Um,{active:n,onChange:r,persona:e}),o.jsxs("main",{children:[n==="today"&&o.jsx(XToday,{persona:e}),n==="compose"&&o.jsx(pf,{persona:e}),n==="coach"&&o.jsx(If,{persona:e}),n==="retention"&&o.jsx(Bf,{persona:e}),n==="triggers"&&o.jsx(Qf,{persona:e}),n==="referrals"&&o.jsx(qf,{persona:e}),n==="manager"&&e==="Alex"&&o.jsx(Mf,{persona:e}),n==="discovery"&&o.jsx(jf,{})]}),o.jsxs("footer",{children:[o.jsx("div",{className:"built"}),o.jsx("div",{className:"demo-tag",children:"Demo prototype"})]}),o.jsx(PrincipleBand,{}),o.jsx(Zf,{})]}):o.jsx(Jf,{onAccept:a})}Ao.createRoot(document.getElementById("root")).render(o.jsx(Pd.StrictMode,{children:o.jsx(ey,{})}));
