(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function tg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var ch={exports:{}},ro={},uh={exports:{}},Nt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pm;function D_(){if(Pm)return Nt;Pm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),M=Symbol.iterator;function v(U){return U===null||typeof U!="object"?null:(U=M&&U[M]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,N={};function y(U,ie,Oe){this.props=U,this.context=ie,this.refs=N,this.updater=Oe||S}y.prototype.isReactComponent={},y.prototype.setState=function(U,ie){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ie,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function x(){}x.prototype=y.prototype;function P(U,ie,Oe){this.props=U,this.context=ie,this.refs=N,this.updater=Oe||S}var F=P.prototype=new x;F.constructor=P,w(F,y.prototype),F.isPureReactComponent=!0;var D=Array.isArray,O=Object.prototype.hasOwnProperty,I={current:null},T={key:!0,ref:!0,__self:!0,__source:!0};function E(U,ie,Oe){var le,Te={},be=null,He=null;if(ie!=null)for(le in ie.ref!==void 0&&(He=ie.ref),ie.key!==void 0&&(be=""+ie.key),ie)O.call(ie,le)&&!T.hasOwnProperty(le)&&(Te[le]=ie[le]);var Ee=arguments.length-2;if(Ee===1)Te.children=Oe;else if(1<Ee){for(var Ke=Array(Ee),Ze=0;Ze<Ee;Ze++)Ke[Ze]=arguments[Ze+2];Te.children=Ke}if(U&&U.defaultProps)for(le in Ee=U.defaultProps,Ee)Te[le]===void 0&&(Te[le]=Ee[le]);return{$$typeof:s,type:U,key:be,ref:He,props:Te,_owner:I.current}}function K(U,ie){return{$$typeof:s,type:U.type,key:ie,ref:U.ref,props:U.props,_owner:U._owner}}function B(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function G(U){var ie={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Oe){return ie[Oe]})}var $=/\/+/g;function re(U,ie){return typeof U=="object"&&U!==null&&U.key!=null?G(""+U.key):ie.toString(36)}function H(U,ie,Oe,le,Te){var be=typeof U;(be==="undefined"||be==="boolean")&&(U=null);var He=!1;if(U===null)He=!0;else switch(be){case"string":case"number":He=!0;break;case"object":switch(U.$$typeof){case s:case e:He=!0}}if(He)return He=U,Te=Te(He),U=le===""?"."+re(He,0):le,D(Te)?(Oe="",U!=null&&(Oe=U.replace($,"$&/")+"/"),H(Te,ie,Oe,"",function(Ze){return Ze})):Te!=null&&(B(Te)&&(Te=K(Te,Oe+(!Te.key||He&&He.key===Te.key?"":(""+Te.key).replace($,"$&/")+"/")+U)),ie.push(Te)),1;if(He=0,le=le===""?".":le+":",D(U))for(var Ee=0;Ee<U.length;Ee++){be=U[Ee];var Ke=le+re(be,Ee);He+=H(be,ie,Oe,Ke,Te)}else if(Ke=v(U),typeof Ke=="function")for(U=Ke.call(U),Ee=0;!(be=U.next()).done;)be=be.value,Ke=le+re(be,Ee++),He+=H(be,ie,Oe,Ke,Te);else if(be==="object")throw ie=String(U),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return He}function de(U,ie,Oe){if(U==null)return U;var le=[],Te=0;return H(U,le,"","",function(be){return ie.call(Oe,be,Te++)}),le}function Y(U){if(U._status===-1){var ie=U._result;ie=ie(),ie.then(function(Oe){(U._status===0||U._status===-1)&&(U._status=1,U._result=Oe)},function(Oe){(U._status===0||U._status===-1)&&(U._status=2,U._result=Oe)}),U._status===-1&&(U._status=0,U._result=ie)}if(U._status===1)return U._result.default;throw U._result}var ee={current:null},ne={transition:null},Q={ReactCurrentDispatcher:ee,ReactCurrentBatchConfig:ne,ReactCurrentOwner:I};function te(){throw Error("act(...) is not supported in production builds of React.")}return Nt.Children={map:de,forEach:function(U,ie,Oe){de(U,function(){ie.apply(this,arguments)},Oe)},count:function(U){var ie=0;return de(U,function(){ie++}),ie},toArray:function(U){return de(U,function(ie){return ie})||[]},only:function(U){if(!B(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},Nt.Component=y,Nt.Fragment=t,Nt.Profiler=o,Nt.PureComponent=P,Nt.StrictMode=r,Nt.Suspense=p,Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,Nt.act=te,Nt.cloneElement=function(U,ie,Oe){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var le=w({},U.props),Te=U.key,be=U.ref,He=U._owner;if(ie!=null){if(ie.ref!==void 0&&(be=ie.ref,He=I.current),ie.key!==void 0&&(Te=""+ie.key),U.type&&U.type.defaultProps)var Ee=U.type.defaultProps;for(Ke in ie)O.call(ie,Ke)&&!T.hasOwnProperty(Ke)&&(le[Ke]=ie[Ke]===void 0&&Ee!==void 0?Ee[Ke]:ie[Ke])}var Ke=arguments.length-2;if(Ke===1)le.children=Oe;else if(1<Ke){Ee=Array(Ke);for(var Ze=0;Ze<Ke;Ze++)Ee[Ze]=arguments[Ze+2];le.children=Ee}return{$$typeof:s,type:U.type,key:Te,ref:be,props:le,_owner:He}},Nt.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},Nt.createElement=E,Nt.createFactory=function(U){var ie=E.bind(null,U);return ie.type=U,ie},Nt.createRef=function(){return{current:null}},Nt.forwardRef=function(U){return{$$typeof:d,render:U}},Nt.isValidElement=B,Nt.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:Y}},Nt.memo=function(U,ie){return{$$typeof:m,type:U,compare:ie===void 0?null:ie}},Nt.startTransition=function(U){var ie=ne.transition;ne.transition={};try{U()}finally{ne.transition=ie}},Nt.unstable_act=te,Nt.useCallback=function(U,ie){return ee.current.useCallback(U,ie)},Nt.useContext=function(U){return ee.current.useContext(U)},Nt.useDebugValue=function(){},Nt.useDeferredValue=function(U){return ee.current.useDeferredValue(U)},Nt.useEffect=function(U,ie){return ee.current.useEffect(U,ie)},Nt.useId=function(){return ee.current.useId()},Nt.useImperativeHandle=function(U,ie,Oe){return ee.current.useImperativeHandle(U,ie,Oe)},Nt.useInsertionEffect=function(U,ie){return ee.current.useInsertionEffect(U,ie)},Nt.useLayoutEffect=function(U,ie){return ee.current.useLayoutEffect(U,ie)},Nt.useMemo=function(U,ie){return ee.current.useMemo(U,ie)},Nt.useReducer=function(U,ie,Oe){return ee.current.useReducer(U,ie,Oe)},Nt.useRef=function(U){return ee.current.useRef(U)},Nt.useState=function(U){return ee.current.useState(U)},Nt.useSyncExternalStore=function(U,ie,Oe){return ee.current.useSyncExternalStore(U,ie,Oe)},Nt.useTransition=function(){return ee.current.useTransition()},Nt.version="18.3.1",Nt}var Dm;function jd(){return Dm||(Dm=1,uh.exports=D_()),uh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm;function L_(){if(Lm)return ro;Lm=1;var s=jd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,p,m){var _,M={},v=null,S=null;m!==void 0&&(v=""+m),p.key!==void 0&&(v=""+p.key),p.ref!==void 0&&(S=p.ref);for(_ in p)r.call(p,_)&&!l.hasOwnProperty(_)&&(M[_]=p[_]);if(d&&d.defaultProps)for(_ in p=d.defaultProps,p)M[_]===void 0&&(M[_]=p[_]);return{$$typeof:e,type:d,key:v,ref:S,props:M,_owner:o.current}}return ro.Fragment=t,ro.jsx=u,ro.jsxs=u,ro}var Im;function I_(){return Im||(Im=1,ch.exports=L_()),ch.exports}var f=I_(),wt=jd();const U_=tg(wt);var bl={},hh={exports:{}},ci={},dh={exports:{}},fh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Um;function O_(){return Um||(Um=1,(function(s){function e(ne,Q){var te=ne.length;ne.push(Q);e:for(;0<te;){var U=te-1>>>1,ie=ne[U];if(0<o(ie,Q))ne[U]=Q,ne[te]=ie,te=U;else break e}}function t(ne){return ne.length===0?null:ne[0]}function r(ne){if(ne.length===0)return null;var Q=ne[0],te=ne.pop();if(te!==Q){ne[0]=te;e:for(var U=0,ie=ne.length,Oe=ie>>>1;U<Oe;){var le=2*(U+1)-1,Te=ne[le],be=le+1,He=ne[be];if(0>o(Te,te))be<ie&&0>o(He,Te)?(ne[U]=He,ne[be]=te,U=be):(ne[U]=Te,ne[le]=te,U=le);else if(be<ie&&0>o(He,te))ne[U]=He,ne[be]=te,U=be;else break e}}return Q}function o(ne,Q){var te=ne.sortIndex-Q.sortIndex;return te!==0?te:ne.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var p=[],m=[],_=1,M=null,v=3,S=!1,w=!1,N=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(ne){for(var Q=t(m);Q!==null;){if(Q.callback===null)r(m);else if(Q.startTime<=ne)r(m),Q.sortIndex=Q.expirationTime,e(p,Q);else break;Q=t(m)}}function D(ne){if(N=!1,F(ne),!w)if(t(p)!==null)w=!0,Y(O);else{var Q=t(m);Q!==null&&ee(D,Q.startTime-ne)}}function O(ne,Q){w=!1,N&&(N=!1,x(E),E=-1),S=!0;var te=v;try{for(F(Q),M=t(p);M!==null&&(!(M.expirationTime>Q)||ne&&!G());){var U=M.callback;if(typeof U=="function"){M.callback=null,v=M.priorityLevel;var ie=U(M.expirationTime<=Q);Q=s.unstable_now(),typeof ie=="function"?M.callback=ie:M===t(p)&&r(p),F(Q)}else r(p);M=t(p)}if(M!==null)var Oe=!0;else{var le=t(m);le!==null&&ee(D,le.startTime-Q),Oe=!1}return Oe}finally{M=null,v=te,S=!1}}var I=!1,T=null,E=-1,K=5,B=-1;function G(){return!(s.unstable_now()-B<K)}function $(){if(T!==null){var ne=s.unstable_now();B=ne;var Q=!0;try{Q=T(!0,ne)}finally{Q?re():(I=!1,T=null)}}else I=!1}var re;if(typeof P=="function")re=function(){P($)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,de=H.port2;H.port1.onmessage=$,re=function(){de.postMessage(null)}}else re=function(){y($,0)};function Y(ne){T=ne,I||(I=!0,re())}function ee(ne,Q){E=y(function(){ne(s.unstable_now())},Q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(ne){ne.callback=null},s.unstable_continueExecution=function(){w||S||(w=!0,Y(O))},s.unstable_forceFrameRate=function(ne){0>ne||125<ne?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<ne?Math.floor(1e3/ne):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_getFirstCallbackNode=function(){return t(p)},s.unstable_next=function(ne){switch(v){case 1:case 2:case 3:var Q=3;break;default:Q=v}var te=v;v=Q;try{return ne()}finally{v=te}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(ne,Q){switch(ne){case 1:case 2:case 3:case 4:case 5:break;default:ne=3}var te=v;v=ne;try{return Q()}finally{v=te}},s.unstable_scheduleCallback=function(ne,Q,te){var U=s.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?U+te:U):te=U,ne){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=te+ie,ne={id:_++,callback:Q,priorityLevel:ne,startTime:te,expirationTime:ie,sortIndex:-1},te>U?(ne.sortIndex=te,e(m,ne),t(p)===null&&ne===t(m)&&(N?(x(E),E=-1):N=!0,ee(D,te-U))):(ne.sortIndex=ie,e(p,ne),w||S||(w=!0,Y(O))),ne},s.unstable_shouldYield=G,s.unstable_wrapCallback=function(ne){var Q=v;return function(){var te=v;v=Q;try{return ne.apply(this,arguments)}finally{v=te}}}})(fh)),fh}var Om;function F_(){return Om||(Om=1,dh.exports=O_()),dh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fm;function k_(){if(Fm)return ci;Fm=1;var s=jd(),e=F_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},M={};function v(n){return p.call(M,n)?!0:p.call(_,n)?!1:m.test(n)?M[n]=!0:(_[n]=!0,!1)}function S(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,i,a,c){if(i===null||typeof i>"u"||S(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function N(n,i,a,c,h,g,A){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=A}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new N(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new N(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new N(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new N(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new N(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new N(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new N(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new N(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new N(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function P(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(x,P);y[i]=new N(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(x,P);y[i]=new N(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(x,P);y[i]=new N(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new N(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new N("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new N(n,1,!1,n.toLowerCase(),null,!0,!0)});function F(n,i,a,c){var h=y.hasOwnProperty(i)?y[i]:null;(h!==null?h.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,a,h,c)&&(a=null),c||h===null?v(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,c=h.attributeNamespace,a===null?n.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var D=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,O=Symbol.for("react.element"),I=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),G=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),de=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),ee=Symbol.for("react.offscreen"),ne=Symbol.iterator;function Q(n){return n===null||typeof n!="object"?null:(n=ne&&n[ne]||n["@@iterator"],typeof n=="function"?n:null)}var te=Object.assign,U;function ie(n){if(U===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+n}var Oe=!1;function le(n,i){if(!n||Oe)return"";Oe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(me){var c=me}Reflect.construct(n,[],i)}else{try{i.call()}catch(me){c=me}n.call(i.prototype)}else{try{throw Error()}catch(me){c=me}n()}}catch(me){if(me&&c&&typeof me.stack=="string"){for(var h=me.stack.split(`
`),g=c.stack.split(`
`),A=h.length-1,k=g.length-1;1<=A&&0<=k&&h[A]!==g[k];)k--;for(;1<=A&&0<=k;A--,k--)if(h[A]!==g[k]){if(A!==1||k!==1)do if(A--,k--,0>k||h[A]!==g[k]){var X=`
`+h[A].replace(" at new "," at ");return n.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",n.displayName)),X}while(1<=A&&0<=k);break}}}finally{Oe=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ie(n):""}function Te(n){switch(n.tag){case 5:return ie(n.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return n=le(n.type,!1),n;case 11:return n=le(n.type.render,!1),n;case 1:return n=le(n.type,!0),n;default:return""}}function be(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case T:return"Fragment";case I:return"Portal";case K:return"Profiler";case E:return"StrictMode";case re:return"Suspense";case H:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case G:return(n.displayName||"Context")+".Consumer";case B:return(n._context.displayName||"Context")+".Provider";case $:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case de:return i=n.displayName||null,i!==null?i:be(n.type)||"Memo";case Y:i=n._payload,n=n._init;try{return be(n(i))}catch{}}return null}function He(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return be(i);case 8:return i===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ee(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ke(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(n){var i=Ke(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(A){c=""+A,g.call(this,A)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(A){c=""+A},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Ye(n){n._valueTracker||(n._valueTracker=Ze(n))}function ut(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ke(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function St(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function yt(n,i){var a=i.checked;return te({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Qt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Ee(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function qt(n,i){i=i.checked,i!=null&&F(n,"checked",i,!1)}function $t(n,i){qt(n,i);var a=Ee(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?yn(n,i.type,a):i.hasOwnProperty("defaultValue")&&yn(n,i.type,Ee(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ft(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function yn(n,i,a){(i!=="number"||St(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var kt=Array.isArray;function Jt(n,i,a,c){if(n=n.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=i.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Ee(a),i=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function he(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return te({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Ve(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(kt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Ee(a)}}function V(n,i){var a=Ee(i.value),c=Ee(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function rt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ot(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ft(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ot(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ce,_t=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,h){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ce.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ae(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var qe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},L=["Webkit","ms","Moz","O"];Object.keys(qe).forEach(function(n){L.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),qe[i]=qe[n]})});function b(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||qe.hasOwnProperty(n)&&qe[n]?(""+i).trim():i+"px"}function q(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,h=b(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,h):n[a]=h}}var ve=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Me(n,i){if(i){if(ve[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function De(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ue=null;function ge(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var _e=null,Ie=null,z=null;function xe(n){if(n=Ga(n)){if(typeof _e!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Go(i),_e(n.stateNode,n.type,i))}}function W(n){Ie?z?z.push(n):z=[n]:Ie=n}function J(){if(Ie){var n=Ie,i=z;if(z=Ie=null,xe(n),i)for(n=0;n<i.length;n++)xe(i[n])}}function ye(n,i){return n(i)}function ue(){}var Se=!1;function ke(n,i,a){if(Se)return n(i,a);Se=!0;try{return ye(n,i,a)}finally{Se=!1,(Ie!==null||z!==null)&&(ue(),J())}}function se(n,i){var a=n.stateNode;if(a===null)return null;var c=Go(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Pe=!1;if(d)try{var Ge={};Object.defineProperty(Ge,"passive",{get:function(){Pe=!0}}),window.addEventListener("test",Ge,Ge),window.removeEventListener("test",Ge,Ge)}catch{Pe=!1}function we(n,i,a,c,h,g,A,k,X){var me=Array.prototype.slice.call(arguments,3);try{i.apply(a,me)}catch(Re){this.onError(Re)}}var ct=!1,vt=null,Rt=!1,Zt=null,Et={onError:function(n){ct=!0,vt=n}};function zn(n,i,a,c,h,g,A,k,X){ct=!1,vt=null,we.apply(Et,arguments)}function Gt(n,i,a,c,h,g,A,k,X){if(zn.apply(this,arguments),ct){if(ct){var me=vt;ct=!1,vt=null}else throw Error(t(198));Rt||(Rt=!0,Zt=me)}}function rn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Wt(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Un(n){if(rn(n)!==n)throw Error(t(188))}function Si(n){var i=n.alternate;if(!i){if(i=rn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var h=a.return;if(h===null)break;var g=h.alternate;if(g===null){if(c=h.return,c!==null){a=c;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===a)return Un(h),n;if(g===c)return Un(h),i;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=h,c=g;else{for(var A=!1,k=h.child;k;){if(k===a){A=!0,a=h,c=g;break}if(k===c){A=!0,c=h,a=g;break}k=k.sibling}if(!A){for(k=g.child;k;){if(k===a){A=!0,a=g,c=h;break}if(k===c){A=!0,c=g,a=h;break}k=k.sibling}if(!A)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function di(n){return n=Si(n),n!==null?On(n):null}function On(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=On(n);if(i!==null)return i;n=n.sibling}return null}var vn=e.unstable_scheduleCallback,sn=e.unstable_cancelCallback,ii=e.unstable_shouldYield,Mi=e.unstable_requestPaint,Lt=e.unstable_now,ji=e.unstable_getCurrentPriorityLevel,Hn=e.unstable_ImmediatePriority,Nr=e.unstable_UserBlockingPriority,Xi=e.unstable_NormalPriority,or=e.unstable_LowPriority,R=e.unstable_IdlePriority,j=null,fe=null;function oe(n){if(fe&&typeof fe.onCommitFiberRoot=="function")try{fe.onCommitFiberRoot(j,n,void 0,(n.current.flags&128)===128)}catch{}}var ae=Math.clz32?Math.clz32:Be,ze=Math.log,Qe=Math.LN2;function Be(n){return n>>>=0,n===0?32:31-(ze(n)/Qe|0)|0}var We=64,et=4194304;function pt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Mt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,h=n.suspendedLanes,g=n.pingedLanes,A=a&268435455;if(A!==0){var k=A&~h;k!==0?c=pt(k):(g&=A,g!==0&&(c=pt(g)))}else A=a&~h,A!==0?c=pt(A):g!==0&&(c=pt(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&h)===0&&(h=c&-c,g=i&-i,h>=g||h===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-ae(i),h=1<<a,c|=n[a],i&=~h;return c}function tt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bt(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,g=n.pendingLanes;0<g;){var A=31-ae(g),k=1<<A,X=h[A];X===-1?((k&a)===0||(k&c)!==0)&&(h[A]=tt(k,i)):X<=i&&(n.expiredLanes|=k),g&=~k}}function ln(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Xt(){var n=We;return We<<=1,(We&4194240)===0&&(We=64),n}function Ht(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function fn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ae(i),n[i]=a}function nt(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-ae(a),g=1<<h;i[h]=0,c[h]=-1,n[h]=-1,a&=~g}}function Sn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-ae(a),h=1<<c;h&i|n[c]&i&&(n[c]|=i),a&=~h}}var at=0;function Ki(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Mn,Rr,Pi,Yi,Pt,mn=!1,Vn=[],Bt=null,en=null,Nn=null,Pr=new Map,ba=new Map,Dr=[],ev="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pf(n,i){switch(n){case"focusin":case"focusout":Bt=null;break;case"dragenter":case"dragleave":en=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":Pr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ba.delete(i.pointerId)}}function Na(n,i,a,c,h,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[h]},i!==null&&(i=Ga(i),i!==null&&Rr(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function tv(n,i,a,c,h){switch(i){case"focusin":return Bt=Na(Bt,n,i,a,c,h),!0;case"dragenter":return en=Na(en,n,i,a,c,h),!0;case"mouseover":return Nn=Na(Nn,n,i,a,c,h),!0;case"pointerover":var g=h.pointerId;return Pr.set(g,Na(Pr.get(g)||null,n,i,a,c,h)),!0;case"gotpointercapture":return g=h.pointerId,ba.set(g,Na(ba.get(g)||null,n,i,a,c,h)),!0}return!1}function mf(n){var i=ls(n.target);if(i!==null){var a=rn(i);if(a!==null){if(i=a.tag,i===13){if(i=Wt(a),i!==null){n.blockedOn=i,Pt(n.priority,function(){Pi(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function No(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Oc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ue=c,a.target.dispatchEvent(c),Ue=null}else return i=Ga(a),i!==null&&Rr(i),n.blockedOn=a,!1;i.shift()}return!0}function gf(n,i,a){No(n)&&a.delete(i)}function nv(){mn=!1,Bt!==null&&No(Bt)&&(Bt=null),en!==null&&No(en)&&(en=null),Nn!==null&&No(Nn)&&(Nn=null),Pr.forEach(gf),ba.forEach(gf)}function Ra(n,i){n.blockedOn===i&&(n.blockedOn=null,mn||(mn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,nv)))}function Pa(n){function i(h){return Ra(h,n)}if(0<Vn.length){Ra(Vn[0],n);for(var a=1;a<Vn.length;a++){var c=Vn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Bt!==null&&Ra(Bt,n),en!==null&&Ra(en,n),Nn!==null&&Ra(Nn,n),Pr.forEach(i),ba.forEach(i),a=0;a<Dr.length;a++)c=Dr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Dr.length&&(a=Dr[0],a.blockedOn===null);)mf(a),a.blockedOn===null&&Dr.shift()}var Ps=D.ReactCurrentBatchConfig,Ro=!0;function iv(n,i,a,c){var h=at,g=Ps.transition;Ps.transition=null;try{at=1,Uc(n,i,a,c)}finally{at=h,Ps.transition=g}}function rv(n,i,a,c){var h=at,g=Ps.transition;Ps.transition=null;try{at=4,Uc(n,i,a,c)}finally{at=h,Ps.transition=g}}function Uc(n,i,a,c){if(Ro){var h=Oc(n,i,a,c);if(h===null)Jc(n,i,c,Po,a),pf(n,c);else if(tv(h,n,i,a,c))c.stopPropagation();else if(pf(n,c),i&4&&-1<ev.indexOf(n)){for(;h!==null;){var g=Ga(h);if(g!==null&&Mn(g),g=Oc(n,i,a,c),g===null&&Jc(n,i,c,Po,a),g===h)break;h=g}h!==null&&c.stopPropagation()}else Jc(n,i,c,null,a)}}var Po=null;function Oc(n,i,a,c){if(Po=null,n=ge(c),n=ls(n),n!==null)if(i=rn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Wt(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Po=n,null}function vf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ji()){case Hn:return 1;case Nr:return 4;case Xi:case or:return 16;case R:return 536870912;default:return 16}default:return 16}}var Lr=null,Fc=null,Do=null;function _f(){if(Do)return Do;var n,i=Fc,a=i.length,c,h="value"in Lr?Lr.value:Lr.textContent,g=h.length;for(n=0;n<a&&i[n]===h[n];n++);var A=a-n;for(c=1;c<=A&&i[a-c]===h[g-c];c++);return Do=h.slice(n,1<c?1-c:void 0)}function Lo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Io(){return!0}function xf(){return!1}function fi(n){function i(a,c,h,g,A){this._reactName=a,this._targetInst=h,this.type=c,this.nativeEvent=g,this.target=A,this.currentTarget=null;for(var k in n)n.hasOwnProperty(k)&&(a=n[k],this[k]=a?a(g):g[k]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Io:xf,this.isPropagationStopped=xf,this}return te(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Io)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Io)},persist:function(){},isPersistent:Io}),i}var Ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kc=fi(Ds),Da=te({},Ds,{view:0,detail:0}),sv=fi(Da),Bc,zc,La,Uo=te({},Da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==La&&(La&&n.type==="mousemove"?(Bc=n.screenX-La.screenX,zc=n.screenY-La.screenY):zc=Bc=0,La=n),Bc)},movementY:function(n){return"movementY"in n?n.movementY:zc}}),yf=fi(Uo),av=te({},Uo,{dataTransfer:0}),ov=fi(av),lv=te({},Da,{relatedTarget:0}),Hc=fi(lv),cv=te({},Ds,{animationName:0,elapsedTime:0,pseudoElement:0}),uv=fi(cv),hv=te({},Ds,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),dv=fi(hv),fv=te({},Ds,{data:0}),Sf=fi(fv),pv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=gv[n])?!!i[n]:!1}function Vc(){return vv}var _v=te({},Da,{key:function(n){if(n.key){var i=pv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Lo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?mv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vc,charCode:function(n){return n.type==="keypress"?Lo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Lo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),xv=fi(_v),yv=te({},Uo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mf=fi(yv),Sv=te({},Da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vc}),Mv=fi(Sv),Tv=te({},Ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ev=fi(Tv),wv=te({},Uo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Cv=fi(wv),Av=[9,13,27,32],Gc=d&&"CompositionEvent"in window,Ia=null;d&&"documentMode"in document&&(Ia=document.documentMode);var bv=d&&"TextEvent"in window&&!Ia,Tf=d&&(!Gc||Ia&&8<Ia&&11>=Ia),Ef=" ",wf=!1;function Cf(n,i){switch(n){case"keyup":return Av.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Af(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ls=!1;function Nv(n,i){switch(n){case"compositionend":return Af(i);case"keypress":return i.which!==32?null:(wf=!0,Ef);case"textInput":return n=i.data,n===Ef&&wf?null:n;default:return null}}function Rv(n,i){if(Ls)return n==="compositionend"||!Gc&&Cf(n,i)?(n=_f(),Do=Fc=Lr=null,Ls=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Tf&&i.locale!=="ko"?null:i.data;default:return null}}var Pv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Pv[n.type]:i==="textarea"}function Nf(n,i,a,c){W(c),i=zo(i,"onChange"),0<i.length&&(a=new kc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Ua=null,Oa=null;function Dv(n){Kf(n,0)}function Oo(n){var i=ks(n);if(ut(i))return n}function Lv(n,i){if(n==="change")return i}var Rf=!1;if(d){var Wc;if(d){var jc="oninput"in document;if(!jc){var Pf=document.createElement("div");Pf.setAttribute("oninput","return;"),jc=typeof Pf.oninput=="function"}Wc=jc}else Wc=!1;Rf=Wc&&(!document.documentMode||9<document.documentMode)}function Df(){Ua&&(Ua.detachEvent("onpropertychange",Lf),Oa=Ua=null)}function Lf(n){if(n.propertyName==="value"&&Oo(Oa)){var i=[];Nf(i,Oa,n,ge(n)),ke(Dv,i)}}function Iv(n,i,a){n==="focusin"?(Df(),Ua=i,Oa=a,Ua.attachEvent("onpropertychange",Lf)):n==="focusout"&&Df()}function Uv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Oo(Oa)}function Ov(n,i){if(n==="click")return Oo(i)}function Fv(n,i){if(n==="input"||n==="change")return Oo(i)}function kv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Di=typeof Object.is=="function"?Object.is:kv;function Fa(n,i){if(Di(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var h=a[c];if(!p.call(i,h)||!Di(n[h],i[h]))return!1}return!0}function If(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Uf(n,i){var a=If(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=If(a)}}function Of(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Of(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Ff(){for(var n=window,i=St();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=St(n.document)}return i}function Xc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Bv(n){var i=Ff(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Of(a.ownerDocument.documentElement,a)){if(c!==null&&Xc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,g=Math.min(c.start,h);c=c.end===void 0?g:Math.min(c.end,h),!n.extend&&g>c&&(h=c,c=g,g=h),h=Uf(a,g);var A=Uf(a,c);h&&A&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==A.node||n.focusOffset!==A.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(A.node,A.offset)):(i.setEnd(A.node,A.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var zv=d&&"documentMode"in document&&11>=document.documentMode,Is=null,Kc=null,ka=null,Yc=!1;function kf(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Yc||Is==null||Is!==St(c)||(c=Is,"selectionStart"in c&&Xc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ka&&Fa(ka,c)||(ka=c,c=zo(Kc,"onSelect"),0<c.length&&(i=new kc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Is)))}function Fo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Us={animationend:Fo("Animation","AnimationEnd"),animationiteration:Fo("Animation","AnimationIteration"),animationstart:Fo("Animation","AnimationStart"),transitionend:Fo("Transition","TransitionEnd")},qc={},Bf={};d&&(Bf=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function ko(n){if(qc[n])return qc[n];if(!Us[n])return n;var i=Us[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Bf)return qc[n]=i[a];return n}var zf=ko("animationend"),Hf=ko("animationiteration"),Vf=ko("animationstart"),Gf=ko("transitionend"),Wf=new Map,jf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(n,i){Wf.set(n,i),l(i,[n])}for(var $c=0;$c<jf.length;$c++){var Zc=jf[$c],Hv=Zc.toLowerCase(),Vv=Zc[0].toUpperCase()+Zc.slice(1);Ir(Hv,"on"+Vv)}Ir(zf,"onAnimationEnd"),Ir(Hf,"onAnimationIteration"),Ir(Vf,"onAnimationStart"),Ir("dblclick","onDoubleClick"),Ir("focusin","onFocus"),Ir("focusout","onBlur"),Ir(Gf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ba="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ba));function Xf(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Gt(c,i,void 0,n),n.currentTarget=null}function Kf(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],h=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var A=c.length-1;0<=A;A--){var k=c[A],X=k.instance,me=k.currentTarget;if(k=k.listener,X!==g&&h.isPropagationStopped())break e;Xf(h,k,me),g=X}else for(A=0;A<c.length;A++){if(k=c[A],X=k.instance,me=k.currentTarget,k=k.listener,X!==g&&h.isPropagationStopped())break e;Xf(h,k,me),g=X}}}if(Rt)throw n=Zt,Rt=!1,Zt=null,n}function an(n,i){var a=i[su];a===void 0&&(a=i[su]=new Set);var c=n+"__bubble";a.has(c)||(Yf(i,n,2,!1),a.add(c))}function Qc(n,i,a){var c=0;i&&(c|=4),Yf(a,n,c,i)}var Bo="_reactListening"+Math.random().toString(36).slice(2);function za(n){if(!n[Bo]){n[Bo]=!0,r.forEach(function(a){a!=="selectionchange"&&(Gv.has(a)||Qc(a,!1,n),Qc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Bo]||(i[Bo]=!0,Qc("selectionchange",!1,i))}}function Yf(n,i,a,c){switch(vf(i)){case 1:var h=iv;break;case 4:h=rv;break;default:h=Uc}a=h.bind(null,i,a,n),h=void 0,!Pe||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(i,a,{capture:!0,passive:h}):n.addEventListener(i,a,!0):h!==void 0?n.addEventListener(i,a,{passive:h}):n.addEventListener(i,a,!1)}function Jc(n,i,a,c,h){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var A=c.tag;if(A===3||A===4){var k=c.stateNode.containerInfo;if(k===h||k.nodeType===8&&k.parentNode===h)break;if(A===4)for(A=c.return;A!==null;){var X=A.tag;if((X===3||X===4)&&(X=A.stateNode.containerInfo,X===h||X.nodeType===8&&X.parentNode===h))return;A=A.return}for(;k!==null;){if(A=ls(k),A===null)return;if(X=A.tag,X===5||X===6){c=g=A;continue e}k=k.parentNode}}c=c.return}ke(function(){var me=g,Re=ge(a),Le=[];e:{var Ne=Wf.get(n);if(Ne!==void 0){var $e=kc,it=n;switch(n){case"keypress":if(Lo(a)===0)break e;case"keydown":case"keyup":$e=xv;break;case"focusin":it="focus",$e=Hc;break;case"focusout":it="blur",$e=Hc;break;case"beforeblur":case"afterblur":$e=Hc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$e=yf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$e=ov;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$e=Mv;break;case zf:case Hf:case Vf:$e=uv;break;case Gf:$e=Ev;break;case"scroll":$e=sv;break;case"wheel":$e=Cv;break;case"copy":case"cut":case"paste":$e=dv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$e=Mf}var st=(i&4)!==0,gn=!st&&n==="scroll",ce=st?Ne!==null?Ne+"Capture":null:Ne;st=[];for(var Z=me,pe;Z!==null;){pe=Z;var Fe=pe.stateNode;if(pe.tag===5&&Fe!==null&&(pe=Fe,ce!==null&&(Fe=se(Z,ce),Fe!=null&&st.push(Ha(Z,Fe,pe)))),gn)break;Z=Z.return}0<st.length&&(Ne=new $e(Ne,it,null,a,Re),Le.push({event:Ne,listeners:st}))}}if((i&7)===0){e:{if(Ne=n==="mouseover"||n==="pointerover",$e=n==="mouseout"||n==="pointerout",Ne&&a!==Ue&&(it=a.relatedTarget||a.fromElement)&&(ls(it)||it[lr]))break e;if(($e||Ne)&&(Ne=Re.window===Re?Re:(Ne=Re.ownerDocument)?Ne.defaultView||Ne.parentWindow:window,$e?(it=a.relatedTarget||a.toElement,$e=me,it=it?ls(it):null,it!==null&&(gn=rn(it),it!==gn||it.tag!==5&&it.tag!==6)&&(it=null)):($e=null,it=me),$e!==it)){if(st=yf,Fe="onMouseLeave",ce="onMouseEnter",Z="mouse",(n==="pointerout"||n==="pointerover")&&(st=Mf,Fe="onPointerLeave",ce="onPointerEnter",Z="pointer"),gn=$e==null?Ne:ks($e),pe=it==null?Ne:ks(it),Ne=new st(Fe,Z+"leave",$e,a,Re),Ne.target=gn,Ne.relatedTarget=pe,Fe=null,ls(Re)===me&&(st=new st(ce,Z+"enter",it,a,Re),st.target=pe,st.relatedTarget=gn,Fe=st),gn=Fe,$e&&it)t:{for(st=$e,ce=it,Z=0,pe=st;pe;pe=Os(pe))Z++;for(pe=0,Fe=ce;Fe;Fe=Os(Fe))pe++;for(;0<Z-pe;)st=Os(st),Z--;for(;0<pe-Z;)ce=Os(ce),pe--;for(;Z--;){if(st===ce||ce!==null&&st===ce.alternate)break t;st=Os(st),ce=Os(ce)}st=null}else st=null;$e!==null&&qf(Le,Ne,$e,st,!1),it!==null&&gn!==null&&qf(Le,gn,it,st,!0)}}e:{if(Ne=me?ks(me):window,$e=Ne.nodeName&&Ne.nodeName.toLowerCase(),$e==="select"||$e==="input"&&Ne.type==="file")var lt=Lv;else if(bf(Ne))if(Rf)lt=Fv;else{lt=Uv;var ht=Iv}else($e=Ne.nodeName)&&$e.toLowerCase()==="input"&&(Ne.type==="checkbox"||Ne.type==="radio")&&(lt=Ov);if(lt&&(lt=lt(n,me))){Nf(Le,lt,a,Re);break e}ht&&ht(n,Ne,me),n==="focusout"&&(ht=Ne._wrapperState)&&ht.controlled&&Ne.type==="number"&&yn(Ne,"number",Ne.value)}switch(ht=me?ks(me):window,n){case"focusin":(bf(ht)||ht.contentEditable==="true")&&(Is=ht,Kc=me,ka=null);break;case"focusout":ka=Kc=Is=null;break;case"mousedown":Yc=!0;break;case"contextmenu":case"mouseup":case"dragend":Yc=!1,kf(Le,a,Re);break;case"selectionchange":if(zv)break;case"keydown":case"keyup":kf(Le,a,Re)}var dt;if(Gc)e:{switch(n){case"compositionstart":var gt="onCompositionStart";break e;case"compositionend":gt="onCompositionEnd";break e;case"compositionupdate":gt="onCompositionUpdate";break e}gt=void 0}else Ls?Cf(n,a)&&(gt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(gt="onCompositionStart");gt&&(Tf&&a.locale!=="ko"&&(Ls||gt!=="onCompositionStart"?gt==="onCompositionEnd"&&Ls&&(dt=_f()):(Lr=Re,Fc="value"in Lr?Lr.value:Lr.textContent,Ls=!0)),ht=zo(me,gt),0<ht.length&&(gt=new Sf(gt,n,null,a,Re),Le.push({event:gt,listeners:ht}),dt?gt.data=dt:(dt=Af(a),dt!==null&&(gt.data=dt)))),(dt=bv?Nv(n,a):Rv(n,a))&&(me=zo(me,"onBeforeInput"),0<me.length&&(Re=new Sf("onBeforeInput","beforeinput",null,a,Re),Le.push({event:Re,listeners:me}),Re.data=dt))}Kf(Le,i)})}function Ha(n,i,a){return{instance:n,listener:i,currentTarget:a}}function zo(n,i){for(var a=i+"Capture",c=[];n!==null;){var h=n,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=se(n,a),g!=null&&c.unshift(Ha(n,g,h)),g=se(n,i),g!=null&&c.push(Ha(n,g,h))),n=n.return}return c}function Os(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function qf(n,i,a,c,h){for(var g=i._reactName,A=[];a!==null&&a!==c;){var k=a,X=k.alternate,me=k.stateNode;if(X!==null&&X===c)break;k.tag===5&&me!==null&&(k=me,h?(X=se(a,g),X!=null&&A.unshift(Ha(a,X,k))):h||(X=se(a,g),X!=null&&A.push(Ha(a,X,k)))),a=a.return}A.length!==0&&n.push({event:i,listeners:A})}var Wv=/\r\n?/g,jv=/\u0000|\uFFFD/g;function $f(n){return(typeof n=="string"?n:""+n).replace(Wv,`
`).replace(jv,"")}function Ho(n,i,a){if(i=$f(i),$f(n)!==i&&a)throw Error(t(425))}function Vo(){}var eu=null,tu=null;function nu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var iu=typeof setTimeout=="function"?setTimeout:void 0,Xv=typeof clearTimeout=="function"?clearTimeout:void 0,Zf=typeof Promise=="function"?Promise:void 0,Kv=typeof queueMicrotask=="function"?queueMicrotask:typeof Zf<"u"?function(n){return Zf.resolve(null).then(n).catch(Yv)}:iu;function Yv(n){setTimeout(function(){throw n})}function ru(n,i){var a=i,c=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(c===0){n.removeChild(h),Pa(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=h}while(a);Pa(i)}function Ur(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Qf(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Fs=Math.random().toString(36).slice(2),qi="__reactFiber$"+Fs,Va="__reactProps$"+Fs,lr="__reactContainer$"+Fs,su="__reactEvents$"+Fs,qv="__reactListeners$"+Fs,$v="__reactHandles$"+Fs;function ls(n){var i=n[qi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[lr]||a[qi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Qf(n);n!==null;){if(a=n[qi])return a;n=Qf(n)}return i}n=a,a=n.parentNode}return null}function Ga(n){return n=n[qi]||n[lr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ks(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Go(n){return n[Va]||null}var au=[],Bs=-1;function Or(n){return{current:n}}function on(n){0>Bs||(n.current=au[Bs],au[Bs]=null,Bs--)}function nn(n,i){Bs++,au[Bs]=n.current,n.current=i}var Fr={},Gn=Or(Fr),ri=Or(!1),cs=Fr;function zs(n,i){var a=n.type.contextTypes;if(!a)return Fr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in a)h[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function si(n){return n=n.childContextTypes,n!=null}function Wo(){on(ri),on(Gn)}function Jf(n,i,a){if(Gn.current!==Fr)throw Error(t(168));nn(Gn,i),nn(ri,a)}function ep(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var h in c)if(!(h in i))throw Error(t(108,He(n)||"Unknown",h));return te({},a,c)}function jo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Fr,cs=Gn.current,nn(Gn,n),nn(ri,ri.current),!0}function tp(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=ep(n,i,cs),c.__reactInternalMemoizedMergedChildContext=n,on(ri),on(Gn),nn(Gn,n)):on(ri),nn(ri,a)}var cr=null,Xo=!1,ou=!1;function np(n){cr===null?cr=[n]:cr.push(n)}function Zv(n){Xo=!0,np(n)}function kr(){if(!ou&&cr!==null){ou=!0;var n=0,i=at;try{var a=cr;for(at=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}cr=null,Xo=!1}catch(h){throw cr!==null&&(cr=cr.slice(n+1)),vn(Hn,kr),h}finally{at=i,ou=!1}}return null}var Hs=[],Vs=0,Ko=null,Yo=0,Ti=[],Ei=0,us=null,ur=1,hr="";function hs(n,i){Hs[Vs++]=Yo,Hs[Vs++]=Ko,Ko=n,Yo=i}function ip(n,i,a){Ti[Ei++]=ur,Ti[Ei++]=hr,Ti[Ei++]=us,us=n;var c=ur;n=hr;var h=32-ae(c)-1;c&=~(1<<h),a+=1;var g=32-ae(i)+h;if(30<g){var A=h-h%5;g=(c&(1<<A)-1).toString(32),c>>=A,h-=A,ur=1<<32-ae(i)+h|a<<h|c,hr=g+n}else ur=1<<g|a<<h|c,hr=n}function lu(n){n.return!==null&&(hs(n,1),ip(n,1,0))}function cu(n){for(;n===Ko;)Ko=Hs[--Vs],Hs[Vs]=null,Yo=Hs[--Vs],Hs[Vs]=null;for(;n===us;)us=Ti[--Ei],Ti[Ei]=null,hr=Ti[--Ei],Ti[Ei]=null,ur=Ti[--Ei],Ti[Ei]=null}var pi=null,mi=null,cn=!1,Li=null;function rp(n,i){var a=bi(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function sp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,pi=n,mi=Ur(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,pi=n,mi=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=us!==null?{id:ur,overflow:hr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=bi(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,pi=n,mi=null,!0):!1;default:return!1}}function uu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function hu(n){if(cn){var i=mi;if(i){var a=i;if(!sp(n,i)){if(uu(n))throw Error(t(418));i=Ur(a.nextSibling);var c=pi;i&&sp(n,i)?rp(c,a):(n.flags=n.flags&-4097|2,cn=!1,pi=n)}}else{if(uu(n))throw Error(t(418));n.flags=n.flags&-4097|2,cn=!1,pi=n}}}function ap(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;pi=n}function qo(n){if(n!==pi)return!1;if(!cn)return ap(n),cn=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!nu(n.type,n.memoizedProps)),i&&(i=mi)){if(uu(n))throw op(),Error(t(418));for(;i;)rp(n,i),i=Ur(i.nextSibling)}if(ap(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){mi=Ur(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}mi=null}}else mi=pi?Ur(n.stateNode.nextSibling):null;return!0}function op(){for(var n=mi;n;)n=Ur(n.nextSibling)}function Gs(){mi=pi=null,cn=!1}function du(n){Li===null?Li=[n]:Li.push(n)}var Qv=D.ReactCurrentBatchConfig;function Wa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var h=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(A){var k=h.refs;A===null?delete k[g]:k[g]=A},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function $o(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function lp(n){var i=n._init;return i(n._payload)}function cp(n){function i(ce,Z){if(n){var pe=ce.deletions;pe===null?(ce.deletions=[Z],ce.flags|=16):pe.push(Z)}}function a(ce,Z){if(!n)return null;for(;Z!==null;)i(ce,Z),Z=Z.sibling;return null}function c(ce,Z){for(ce=new Map;Z!==null;)Z.key!==null?ce.set(Z.key,Z):ce.set(Z.index,Z),Z=Z.sibling;return ce}function h(ce,Z){return ce=Xr(ce,Z),ce.index=0,ce.sibling=null,ce}function g(ce,Z,pe){return ce.index=pe,n?(pe=ce.alternate,pe!==null?(pe=pe.index,pe<Z?(ce.flags|=2,Z):pe):(ce.flags|=2,Z)):(ce.flags|=1048576,Z)}function A(ce){return n&&ce.alternate===null&&(ce.flags|=2),ce}function k(ce,Z,pe,Fe){return Z===null||Z.tag!==6?(Z=ih(pe,ce.mode,Fe),Z.return=ce,Z):(Z=h(Z,pe),Z.return=ce,Z)}function X(ce,Z,pe,Fe){var lt=pe.type;return lt===T?Re(ce,Z,pe.props.children,Fe,pe.key):Z!==null&&(Z.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===Y&&lp(lt)===Z.type)?(Fe=h(Z,pe.props),Fe.ref=Wa(ce,Z,pe),Fe.return=ce,Fe):(Fe=yl(pe.type,pe.key,pe.props,null,ce.mode,Fe),Fe.ref=Wa(ce,Z,pe),Fe.return=ce,Fe)}function me(ce,Z,pe,Fe){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==pe.containerInfo||Z.stateNode.implementation!==pe.implementation?(Z=rh(pe,ce.mode,Fe),Z.return=ce,Z):(Z=h(Z,pe.children||[]),Z.return=ce,Z)}function Re(ce,Z,pe,Fe,lt){return Z===null||Z.tag!==7?(Z=xs(pe,ce.mode,Fe,lt),Z.return=ce,Z):(Z=h(Z,pe),Z.return=ce,Z)}function Le(ce,Z,pe){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return Z=ih(""+Z,ce.mode,pe),Z.return=ce,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case O:return pe=yl(Z.type,Z.key,Z.props,null,ce.mode,pe),pe.ref=Wa(ce,null,Z),pe.return=ce,pe;case I:return Z=rh(Z,ce.mode,pe),Z.return=ce,Z;case Y:var Fe=Z._init;return Le(ce,Fe(Z._payload),pe)}if(kt(Z)||Q(Z))return Z=xs(Z,ce.mode,pe,null),Z.return=ce,Z;$o(ce,Z)}return null}function Ne(ce,Z,pe,Fe){var lt=Z!==null?Z.key:null;if(typeof pe=="string"&&pe!==""||typeof pe=="number")return lt!==null?null:k(ce,Z,""+pe,Fe);if(typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case O:return pe.key===lt?X(ce,Z,pe,Fe):null;case I:return pe.key===lt?me(ce,Z,pe,Fe):null;case Y:return lt=pe._init,Ne(ce,Z,lt(pe._payload),Fe)}if(kt(pe)||Q(pe))return lt!==null?null:Re(ce,Z,pe,Fe,null);$o(ce,pe)}return null}function $e(ce,Z,pe,Fe,lt){if(typeof Fe=="string"&&Fe!==""||typeof Fe=="number")return ce=ce.get(pe)||null,k(Z,ce,""+Fe,lt);if(typeof Fe=="object"&&Fe!==null){switch(Fe.$$typeof){case O:return ce=ce.get(Fe.key===null?pe:Fe.key)||null,X(Z,ce,Fe,lt);case I:return ce=ce.get(Fe.key===null?pe:Fe.key)||null,me(Z,ce,Fe,lt);case Y:var ht=Fe._init;return $e(ce,Z,pe,ht(Fe._payload),lt)}if(kt(Fe)||Q(Fe))return ce=ce.get(pe)||null,Re(Z,ce,Fe,lt,null);$o(Z,Fe)}return null}function it(ce,Z,pe,Fe){for(var lt=null,ht=null,dt=Z,gt=Z=0,Dn=null;dt!==null&&gt<pe.length;gt++){dt.index>gt?(Dn=dt,dt=null):Dn=dt.sibling;var zt=Ne(ce,dt,pe[gt],Fe);if(zt===null){dt===null&&(dt=Dn);break}n&&dt&&zt.alternate===null&&i(ce,dt),Z=g(zt,Z,gt),ht===null?lt=zt:ht.sibling=zt,ht=zt,dt=Dn}if(gt===pe.length)return a(ce,dt),cn&&hs(ce,gt),lt;if(dt===null){for(;gt<pe.length;gt++)dt=Le(ce,pe[gt],Fe),dt!==null&&(Z=g(dt,Z,gt),ht===null?lt=dt:ht.sibling=dt,ht=dt);return cn&&hs(ce,gt),lt}for(dt=c(ce,dt);gt<pe.length;gt++)Dn=$e(dt,ce,gt,pe[gt],Fe),Dn!==null&&(n&&Dn.alternate!==null&&dt.delete(Dn.key===null?gt:Dn.key),Z=g(Dn,Z,gt),ht===null?lt=Dn:ht.sibling=Dn,ht=Dn);return n&&dt.forEach(function(Kr){return i(ce,Kr)}),cn&&hs(ce,gt),lt}function st(ce,Z,pe,Fe){var lt=Q(pe);if(typeof lt!="function")throw Error(t(150));if(pe=lt.call(pe),pe==null)throw Error(t(151));for(var ht=lt=null,dt=Z,gt=Z=0,Dn=null,zt=pe.next();dt!==null&&!zt.done;gt++,zt=pe.next()){dt.index>gt?(Dn=dt,dt=null):Dn=dt.sibling;var Kr=Ne(ce,dt,zt.value,Fe);if(Kr===null){dt===null&&(dt=Dn);break}n&&dt&&Kr.alternate===null&&i(ce,dt),Z=g(Kr,Z,gt),ht===null?lt=Kr:ht.sibling=Kr,ht=Kr,dt=Dn}if(zt.done)return a(ce,dt),cn&&hs(ce,gt),lt;if(dt===null){for(;!zt.done;gt++,zt=pe.next())zt=Le(ce,zt.value,Fe),zt!==null&&(Z=g(zt,Z,gt),ht===null?lt=zt:ht.sibling=zt,ht=zt);return cn&&hs(ce,gt),lt}for(dt=c(ce,dt);!zt.done;gt++,zt=pe.next())zt=$e(dt,ce,gt,zt.value,Fe),zt!==null&&(n&&zt.alternate!==null&&dt.delete(zt.key===null?gt:zt.key),Z=g(zt,Z,gt),ht===null?lt=zt:ht.sibling=zt,ht=zt);return n&&dt.forEach(function(P_){return i(ce,P_)}),cn&&hs(ce,gt),lt}function gn(ce,Z,pe,Fe){if(typeof pe=="object"&&pe!==null&&pe.type===T&&pe.key===null&&(pe=pe.props.children),typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case O:e:{for(var lt=pe.key,ht=Z;ht!==null;){if(ht.key===lt){if(lt=pe.type,lt===T){if(ht.tag===7){a(ce,ht.sibling),Z=h(ht,pe.props.children),Z.return=ce,ce=Z;break e}}else if(ht.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===Y&&lp(lt)===ht.type){a(ce,ht.sibling),Z=h(ht,pe.props),Z.ref=Wa(ce,ht,pe),Z.return=ce,ce=Z;break e}a(ce,ht);break}else i(ce,ht);ht=ht.sibling}pe.type===T?(Z=xs(pe.props.children,ce.mode,Fe,pe.key),Z.return=ce,ce=Z):(Fe=yl(pe.type,pe.key,pe.props,null,ce.mode,Fe),Fe.ref=Wa(ce,Z,pe),Fe.return=ce,ce=Fe)}return A(ce);case I:e:{for(ht=pe.key;Z!==null;){if(Z.key===ht)if(Z.tag===4&&Z.stateNode.containerInfo===pe.containerInfo&&Z.stateNode.implementation===pe.implementation){a(ce,Z.sibling),Z=h(Z,pe.children||[]),Z.return=ce,ce=Z;break e}else{a(ce,Z);break}else i(ce,Z);Z=Z.sibling}Z=rh(pe,ce.mode,Fe),Z.return=ce,ce=Z}return A(ce);case Y:return ht=pe._init,gn(ce,Z,ht(pe._payload),Fe)}if(kt(pe))return it(ce,Z,pe,Fe);if(Q(pe))return st(ce,Z,pe,Fe);$o(ce,pe)}return typeof pe=="string"&&pe!==""||typeof pe=="number"?(pe=""+pe,Z!==null&&Z.tag===6?(a(ce,Z.sibling),Z=h(Z,pe),Z.return=ce,ce=Z):(a(ce,Z),Z=ih(pe,ce.mode,Fe),Z.return=ce,ce=Z),A(ce)):a(ce,Z)}return gn}var Ws=cp(!0),up=cp(!1),Zo=Or(null),Qo=null,js=null,fu=null;function pu(){fu=js=Qo=null}function mu(n){var i=Zo.current;on(Zo),n._currentValue=i}function gu(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Xs(n,i){Qo=n,fu=js=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(ai=!0),n.firstContext=null)}function wi(n){var i=n._currentValue;if(fu!==n)if(n={context:n,memoizedValue:i,next:null},js===null){if(Qo===null)throw Error(t(308));js=n,Qo.dependencies={lanes:0,firstContext:n}}else js=js.next=n;return i}var ds=null;function vu(n){ds===null?ds=[n]:ds.push(n)}function hp(n,i,a,c){var h=i.interleaved;return h===null?(a.next=a,vu(i)):(a.next=h.next,h.next=a),i.interleaved=a,dr(n,c)}function dr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Br=!1;function _u(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function fr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function zr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(It&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,dr(n,a)}return h=c.interleaved,h===null?(i.next=i,vu(c)):(i.next=h.next,h.next=i),c.interleaved=i,dr(n,a)}function Jo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Sn(n,a)}}function fp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var h=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var A={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?h=g=A:g=g.next=A,a=a.next}while(a!==null);g===null?h=g=i:g=g.next=i}else h=g=i;a={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function el(n,i,a,c){var h=n.updateQueue;Br=!1;var g=h.firstBaseUpdate,A=h.lastBaseUpdate,k=h.shared.pending;if(k!==null){h.shared.pending=null;var X=k,me=X.next;X.next=null,A===null?g=me:A.next=me,A=X;var Re=n.alternate;Re!==null&&(Re=Re.updateQueue,k=Re.lastBaseUpdate,k!==A&&(k===null?Re.firstBaseUpdate=me:k.next=me,Re.lastBaseUpdate=X))}if(g!==null){var Le=h.baseState;A=0,Re=me=X=null,k=g;do{var Ne=k.lane,$e=k.eventTime;if((c&Ne)===Ne){Re!==null&&(Re=Re.next={eventTime:$e,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var it=n,st=k;switch(Ne=i,$e=a,st.tag){case 1:if(it=st.payload,typeof it=="function"){Le=it.call($e,Le,Ne);break e}Le=it;break e;case 3:it.flags=it.flags&-65537|128;case 0:if(it=st.payload,Ne=typeof it=="function"?it.call($e,Le,Ne):it,Ne==null)break e;Le=te({},Le,Ne);break e;case 2:Br=!0}}k.callback!==null&&k.lane!==0&&(n.flags|=64,Ne=h.effects,Ne===null?h.effects=[k]:Ne.push(k))}else $e={eventTime:$e,lane:Ne,tag:k.tag,payload:k.payload,callback:k.callback,next:null},Re===null?(me=Re=$e,X=Le):Re=Re.next=$e,A|=Ne;if(k=k.next,k===null){if(k=h.shared.pending,k===null)break;Ne=k,k=Ne.next,Ne.next=null,h.lastBaseUpdate=Ne,h.shared.pending=null}}while(!0);if(Re===null&&(X=Le),h.baseState=X,h.firstBaseUpdate=me,h.lastBaseUpdate=Re,i=h.shared.interleaved,i!==null){h=i;do A|=h.lane,h=h.next;while(h!==i)}else g===null&&(h.shared.lanes=0);ms|=A,n.lanes=A,n.memoizedState=Le}}function pp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],h=c.callback;if(h!==null){if(c.callback=null,c=a,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var ja={},$i=Or(ja),Xa=Or(ja),Ka=Or(ja);function fs(n){if(n===ja)throw Error(t(174));return n}function xu(n,i){switch(nn(Ka,i),nn(Xa,n),nn($i,ja),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ft(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ft(i,n)}on($i),nn($i,i)}function Ks(){on($i),on(Xa),on(Ka)}function mp(n){fs(Ka.current);var i=fs($i.current),a=ft(i,n.type);i!==a&&(nn(Xa,n),nn($i,a))}function yu(n){Xa.current===n&&(on($i),on(Xa))}var un=Or(0);function tl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Su=[];function Mu(){for(var n=0;n<Su.length;n++)Su[n]._workInProgressVersionPrimary=null;Su.length=0}var nl=D.ReactCurrentDispatcher,Tu=D.ReactCurrentBatchConfig,ps=0,hn=null,Tn=null,Rn=null,il=!1,Ya=!1,qa=0,Jv=0;function Wn(){throw Error(t(321))}function Eu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Di(n[a],i[a]))return!1;return!0}function wu(n,i,a,c,h,g){if(ps=g,hn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,nl.current=n===null||n.memoizedState===null?i_:r_,n=a(c,h),Ya){g=0;do{if(Ya=!1,qa=0,25<=g)throw Error(t(301));g+=1,Rn=Tn=null,i.updateQueue=null,nl.current=s_,n=a(c,h)}while(Ya)}if(nl.current=al,i=Tn!==null&&Tn.next!==null,ps=0,Rn=Tn=hn=null,il=!1,i)throw Error(t(300));return n}function Cu(){var n=qa!==0;return qa=0,n}function Zi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rn===null?hn.memoizedState=Rn=n:Rn=Rn.next=n,Rn}function Ci(){if(Tn===null){var n=hn.alternate;n=n!==null?n.memoizedState:null}else n=Tn.next;var i=Rn===null?hn.memoizedState:Rn.next;if(i!==null)Rn=i,Tn=n;else{if(n===null)throw Error(t(310));Tn=n,n={memoizedState:Tn.memoizedState,baseState:Tn.baseState,baseQueue:Tn.baseQueue,queue:Tn.queue,next:null},Rn===null?hn.memoizedState=Rn=n:Rn=Rn.next=n}return Rn}function $a(n,i){return typeof i=="function"?i(n):i}function Au(n){var i=Ci(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=Tn,h=c.baseQueue,g=a.pending;if(g!==null){if(h!==null){var A=h.next;h.next=g.next,g.next=A}c.baseQueue=h=g,a.pending=null}if(h!==null){g=h.next,c=c.baseState;var k=A=null,X=null,me=g;do{var Re=me.lane;if((ps&Re)===Re)X!==null&&(X=X.next={lane:0,action:me.action,hasEagerState:me.hasEagerState,eagerState:me.eagerState,next:null}),c=me.hasEagerState?me.eagerState:n(c,me.action);else{var Le={lane:Re,action:me.action,hasEagerState:me.hasEagerState,eagerState:me.eagerState,next:null};X===null?(k=X=Le,A=c):X=X.next=Le,hn.lanes|=Re,ms|=Re}me=me.next}while(me!==null&&me!==g);X===null?A=c:X.next=k,Di(c,i.memoizedState)||(ai=!0),i.memoizedState=c,i.baseState=A,i.baseQueue=X,a.lastRenderedState=c}if(n=a.interleaved,n!==null){h=n;do g=h.lane,hn.lanes|=g,ms|=g,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function bu(n){var i=Ci(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,h=a.pending,g=i.memoizedState;if(h!==null){a.pending=null;var A=h=h.next;do g=n(g,A.action),A=A.next;while(A!==h);Di(g,i.memoizedState)||(ai=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function gp(){}function vp(n,i){var a=hn,c=Ci(),h=i(),g=!Di(c.memoizedState,h);if(g&&(c.memoizedState=h,ai=!0),c=c.queue,Nu(yp.bind(null,a,c,n),[n]),c.getSnapshot!==i||g||Rn!==null&&Rn.memoizedState.tag&1){if(a.flags|=2048,Za(9,xp.bind(null,a,c,h,i),void 0,null),Pn===null)throw Error(t(349));(ps&30)!==0||_p(a,i,h)}return h}function _p(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=hn.updateQueue,i===null?(i={lastEffect:null,stores:null},hn.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function xp(n,i,a,c){i.value=a,i.getSnapshot=c,Sp(i)&&Mp(n)}function yp(n,i,a){return a(function(){Sp(i)&&Mp(n)})}function Sp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Di(n,a)}catch{return!0}}function Mp(n){var i=dr(n,1);i!==null&&Fi(i,n,1,-1)}function Tp(n){var i=Zi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:n},i.queue=n,n=n.dispatch=n_.bind(null,hn,n),[i.memoizedState,n]}function Za(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=hn.updateQueue,i===null?(i={lastEffect:null,stores:null},hn.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Ep(){return Ci().memoizedState}function rl(n,i,a,c){var h=Zi();hn.flags|=n,h.memoizedState=Za(1|i,a,void 0,c===void 0?null:c)}function sl(n,i,a,c){var h=Ci();c=c===void 0?null:c;var g=void 0;if(Tn!==null){var A=Tn.memoizedState;if(g=A.destroy,c!==null&&Eu(c,A.deps)){h.memoizedState=Za(i,a,g,c);return}}hn.flags|=n,h.memoizedState=Za(1|i,a,g,c)}function wp(n,i){return rl(8390656,8,n,i)}function Nu(n,i){return sl(2048,8,n,i)}function Cp(n,i){return sl(4,2,n,i)}function Ap(n,i){return sl(4,4,n,i)}function bp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Np(n,i,a){return a=a!=null?a.concat([n]):null,sl(4,4,bp.bind(null,i,n),a)}function Ru(){}function Rp(n,i){var a=Ci();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Eu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Pp(n,i){var a=Ci();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Eu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Dp(n,i,a){return(ps&21)===0?(n.baseState&&(n.baseState=!1,ai=!0),n.memoizedState=a):(Di(a,i)||(a=Xt(),hn.lanes|=a,ms|=a,n.baseState=!0),i)}function e_(n,i){var a=at;at=a!==0&&4>a?a:4,n(!0);var c=Tu.transition;Tu.transition={};try{n(!1),i()}finally{at=a,Tu.transition=c}}function Lp(){return Ci().memoizedState}function t_(n,i,a){var c=Wr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Ip(n))Up(i,a);else if(a=hp(n,i,a,c),a!==null){var h=Jn();Fi(a,n,c,h),Op(a,i,c)}}function n_(n,i,a){var c=Wr(n),h={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ip(n))Up(i,h);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var A=i.lastRenderedState,k=g(A,a);if(h.hasEagerState=!0,h.eagerState=k,Di(k,A)){var X=i.interleaved;X===null?(h.next=h,vu(i)):(h.next=X.next,X.next=h),i.interleaved=h;return}}catch{}finally{}a=hp(n,i,h,c),a!==null&&(h=Jn(),Fi(a,n,c,h),Op(a,i,c))}}function Ip(n){var i=n.alternate;return n===hn||i!==null&&i===hn}function Up(n,i){Ya=il=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Op(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Sn(n,a)}}var al={readContext:wi,useCallback:Wn,useContext:Wn,useEffect:Wn,useImperativeHandle:Wn,useInsertionEffect:Wn,useLayoutEffect:Wn,useMemo:Wn,useReducer:Wn,useRef:Wn,useState:Wn,useDebugValue:Wn,useDeferredValue:Wn,useTransition:Wn,useMutableSource:Wn,useSyncExternalStore:Wn,useId:Wn,unstable_isNewReconciler:!1},i_={readContext:wi,useCallback:function(n,i){return Zi().memoizedState=[n,i===void 0?null:i],n},useContext:wi,useEffect:wp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,rl(4194308,4,bp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return rl(4194308,4,n,i)},useInsertionEffect:function(n,i){return rl(4,2,n,i)},useMemo:function(n,i){var a=Zi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Zi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=t_.bind(null,hn,n),[c.memoizedState,n]},useRef:function(n){var i=Zi();return n={current:n},i.memoizedState=n},useState:Tp,useDebugValue:Ru,useDeferredValue:function(n){return Zi().memoizedState=n},useTransition:function(){var n=Tp(!1),i=n[0];return n=e_.bind(null,n[1]),Zi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=hn,h=Zi();if(cn){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Pn===null)throw Error(t(349));(ps&30)!==0||_p(c,i,a)}h.memoizedState=a;var g={value:a,getSnapshot:i};return h.queue=g,wp(yp.bind(null,c,g,n),[n]),c.flags|=2048,Za(9,xp.bind(null,c,g,a,i),void 0,null),a},useId:function(){var n=Zi(),i=Pn.identifierPrefix;if(cn){var a=hr,c=ur;a=(c&~(1<<32-ae(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=qa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Jv++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},r_={readContext:wi,useCallback:Rp,useContext:wi,useEffect:Nu,useImperativeHandle:Np,useInsertionEffect:Cp,useLayoutEffect:Ap,useMemo:Pp,useReducer:Au,useRef:Ep,useState:function(){return Au($a)},useDebugValue:Ru,useDeferredValue:function(n){var i=Ci();return Dp(i,Tn.memoizedState,n)},useTransition:function(){var n=Au($a)[0],i=Ci().memoizedState;return[n,i]},useMutableSource:gp,useSyncExternalStore:vp,useId:Lp,unstable_isNewReconciler:!1},s_={readContext:wi,useCallback:Rp,useContext:wi,useEffect:Nu,useImperativeHandle:Np,useInsertionEffect:Cp,useLayoutEffect:Ap,useMemo:Pp,useReducer:bu,useRef:Ep,useState:function(){return bu($a)},useDebugValue:Ru,useDeferredValue:function(n){var i=Ci();return Tn===null?i.memoizedState=n:Dp(i,Tn.memoizedState,n)},useTransition:function(){var n=bu($a)[0],i=Ci().memoizedState;return[n,i]},useMutableSource:gp,useSyncExternalStore:vp,useId:Lp,unstable_isNewReconciler:!1};function Ii(n,i){if(n&&n.defaultProps){i=te({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Pu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:te({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var ol={isMounted:function(n){return(n=n._reactInternals)?rn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Jn(),h=Wr(n),g=fr(c,h);g.payload=i,a!=null&&(g.callback=a),i=zr(n,g,h),i!==null&&(Fi(i,n,h,c),Jo(i,n,h))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Jn(),h=Wr(n),g=fr(c,h);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=zr(n,g,h),i!==null&&(Fi(i,n,h,c),Jo(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Jn(),c=Wr(n),h=fr(a,c);h.tag=2,i!=null&&(h.callback=i),i=zr(n,h,c),i!==null&&(Fi(i,n,c,a),Jo(i,n,c))}};function Fp(n,i,a,c,h,g,A){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,A):i.prototype&&i.prototype.isPureReactComponent?!Fa(a,c)||!Fa(h,g):!0}function kp(n,i,a){var c=!1,h=Fr,g=i.contextType;return typeof g=="object"&&g!==null?g=wi(g):(h=si(i)?cs:Gn.current,c=i.contextTypes,g=(c=c!=null)?zs(n,h):Fr),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ol,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=g),i}function Bp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&ol.enqueueReplaceState(i,i.state,null)}function Du(n,i,a,c){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},_u(n);var g=i.contextType;typeof g=="object"&&g!==null?h.context=wi(g):(g=si(i)?cs:Gn.current,h.context=zs(n,g)),h.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Pu(n,i,g,a),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&ol.enqueueReplaceState(h,h.state,null),el(n,a,h,c),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Ys(n,i){try{var a="",c=i;do a+=Te(c),c=c.return;while(c);var h=a}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:h,digest:null}}function Lu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Iu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var a_=typeof WeakMap=="function"?WeakMap:Map;function zp(n,i,a){a=fr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){pl||(pl=!0,qu=c),Iu(n,i)},a}function Hp(n,i,a){a=fr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var h=i.value;a.payload=function(){return c(h)},a.callback=function(){Iu(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Iu(n,i),typeof c!="function"&&(Vr===null?Vr=new Set([this]):Vr.add(this));var A=i.stack;this.componentDidCatch(i.value,{componentStack:A!==null?A:""})}),a}function Vp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new a_;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(a)||(h.add(a),n=y_.bind(null,n,i,a),i.then(n,n))}function Gp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Wp(n,i,a,c,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=fr(-1,1),i.tag=2,zr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var o_=D.ReactCurrentOwner,ai=!1;function Qn(n,i,a,c){i.child=n===null?up(i,null,a,c):Ws(i,n.child,a,c)}function jp(n,i,a,c,h){a=a.render;var g=i.ref;return Xs(i,h),c=wu(n,i,a,c,g,h),a=Cu(),n!==null&&!ai?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,pr(n,i,h)):(cn&&a&&lu(i),i.flags|=1,Qn(n,i,c,h),i.child)}function Xp(n,i,a,c,h){if(n===null){var g=a.type;return typeof g=="function"&&!nh(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,Kp(n,i,g,c,h)):(n=yl(a.type,null,c,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&h)===0){var A=g.memoizedProps;if(a=a.compare,a=a!==null?a:Fa,a(A,c)&&n.ref===i.ref)return pr(n,i,h)}return i.flags|=1,n=Xr(g,c),n.ref=i.ref,n.return=i,i.child=n}function Kp(n,i,a,c,h){if(n!==null){var g=n.memoizedProps;if(Fa(g,c)&&n.ref===i.ref)if(ai=!1,i.pendingProps=c=g,(n.lanes&h)!==0)(n.flags&131072)!==0&&(ai=!0);else return i.lanes=n.lanes,pr(n,i,h)}return Uu(n,i,a,c,h)}function Yp(n,i,a){var c=i.pendingProps,h=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},nn($s,gi),gi|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,nn($s,gi),gi|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,nn($s,gi),gi|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,nn($s,gi),gi|=c;return Qn(n,i,h,a),i.child}function qp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Uu(n,i,a,c,h){var g=si(a)?cs:Gn.current;return g=zs(i,g),Xs(i,h),a=wu(n,i,a,c,g,h),c=Cu(),n!==null&&!ai?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,pr(n,i,h)):(cn&&c&&lu(i),i.flags|=1,Qn(n,i,a,h),i.child)}function $p(n,i,a,c,h){if(si(a)){var g=!0;jo(i)}else g=!1;if(Xs(i,h),i.stateNode===null)cl(n,i),kp(i,a,c),Du(i,a,c,h),c=!0;else if(n===null){var A=i.stateNode,k=i.memoizedProps;A.props=k;var X=A.context,me=a.contextType;typeof me=="object"&&me!==null?me=wi(me):(me=si(a)?cs:Gn.current,me=zs(i,me));var Re=a.getDerivedStateFromProps,Le=typeof Re=="function"||typeof A.getSnapshotBeforeUpdate=="function";Le||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(k!==c||X!==me)&&Bp(i,A,c,me),Br=!1;var Ne=i.memoizedState;A.state=Ne,el(i,c,A,h),X=i.memoizedState,k!==c||Ne!==X||ri.current||Br?(typeof Re=="function"&&(Pu(i,a,Re,c),X=i.memoizedState),(k=Br||Fp(i,a,k,c,Ne,X,me))?(Le||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(i.flags|=4194308)):(typeof A.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=X),A.props=c,A.state=X,A.context=me,c=k):(typeof A.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{A=i.stateNode,dp(n,i),k=i.memoizedProps,me=i.type===i.elementType?k:Ii(i.type,k),A.props=me,Le=i.pendingProps,Ne=A.context,X=a.contextType,typeof X=="object"&&X!==null?X=wi(X):(X=si(a)?cs:Gn.current,X=zs(i,X));var $e=a.getDerivedStateFromProps;(Re=typeof $e=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(k!==Le||Ne!==X)&&Bp(i,A,c,X),Br=!1,Ne=i.memoizedState,A.state=Ne,el(i,c,A,h);var it=i.memoizedState;k!==Le||Ne!==it||ri.current||Br?(typeof $e=="function"&&(Pu(i,a,$e,c),it=i.memoizedState),(me=Br||Fp(i,a,me,c,Ne,it,X)||!1)?(Re||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(c,it,X),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(c,it,X)),typeof A.componentDidUpdate=="function"&&(i.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof A.componentDidUpdate!="function"||k===n.memoizedProps&&Ne===n.memoizedState||(i.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&Ne===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=it),A.props=c,A.state=it,A.context=X,c=me):(typeof A.componentDidUpdate!="function"||k===n.memoizedProps&&Ne===n.memoizedState||(i.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&Ne===n.memoizedState||(i.flags|=1024),c=!1)}return Ou(n,i,a,c,g,h)}function Ou(n,i,a,c,h,g){qp(n,i);var A=(i.flags&128)!==0;if(!c&&!A)return h&&tp(i,a,!1),pr(n,i,g);c=i.stateNode,o_.current=i;var k=A&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&A?(i.child=Ws(i,n.child,null,g),i.child=Ws(i,null,k,g)):Qn(n,i,k,g),i.memoizedState=c.state,h&&tp(i,a,!0),i.child}function Zp(n){var i=n.stateNode;i.pendingContext?Jf(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Jf(n,i.context,!1),xu(n,i.containerInfo)}function Qp(n,i,a,c,h){return Gs(),du(h),i.flags|=256,Qn(n,i,a,c),i.child}var Fu={dehydrated:null,treeContext:null,retryLane:0};function ku(n){return{baseLanes:n,cachePool:null,transitions:null}}function Jp(n,i,a){var c=i.pendingProps,h=un.current,g=!1,A=(i.flags&128)!==0,k;if((k=A)||(k=n!==null&&n.memoizedState===null?!1:(h&2)!==0),k?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),nn(un,h&1),n===null)return hu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(A=c.children,n=c.fallback,g?(c=i.mode,g=i.child,A={mode:"hidden",children:A},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=A):g=Sl(A,c,0,null),n=xs(n,c,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=ku(a),i.memoizedState=Fu,n):Bu(i,A));if(h=n.memoizedState,h!==null&&(k=h.dehydrated,k!==null))return l_(n,i,A,c,k,h,a);if(g){g=c.fallback,A=i.mode,h=n.child,k=h.sibling;var X={mode:"hidden",children:c.children};return(A&1)===0&&i.child!==h?(c=i.child,c.childLanes=0,c.pendingProps=X,i.deletions=null):(c=Xr(h,X),c.subtreeFlags=h.subtreeFlags&14680064),k!==null?g=Xr(k,g):(g=xs(g,A,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,A=n.child.memoizedState,A=A===null?ku(a):{baseLanes:A.baseLanes|a,cachePool:null,transitions:A.transitions},g.memoizedState=A,g.childLanes=n.childLanes&~a,i.memoizedState=Fu,c}return g=n.child,n=g.sibling,c=Xr(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Bu(n,i){return i=Sl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function ll(n,i,a,c){return c!==null&&du(c),Ws(i,n.child,null,a),n=Bu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function l_(n,i,a,c,h,g,A){if(a)return i.flags&256?(i.flags&=-257,c=Lu(Error(t(422))),ll(n,i,A,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,h=i.mode,c=Sl({mode:"visible",children:c.children},h,0,null),g=xs(g,h,A,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&Ws(i,n.child,null,A),i.child.memoizedState=ku(A),i.memoizedState=Fu,g);if((i.mode&1)===0)return ll(n,i,A,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var k=c.dgst;return c=k,g=Error(t(419)),c=Lu(g,c,void 0),ll(n,i,A,c)}if(k=(A&n.childLanes)!==0,ai||k){if(c=Pn,c!==null){switch(A&-A){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|A))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,dr(n,h),Fi(c,n,h,-1))}return th(),c=Lu(Error(t(421))),ll(n,i,A,c)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=S_.bind(null,n),h._reactRetry=i,null):(n=g.treeContext,mi=Ur(h.nextSibling),pi=i,cn=!0,Li=null,n!==null&&(Ti[Ei++]=ur,Ti[Ei++]=hr,Ti[Ei++]=us,ur=n.id,hr=n.overflow,us=i),i=Bu(i,c.children),i.flags|=4096,i)}function em(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),gu(n.return,i,a)}function zu(n,i,a,c,h){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:h}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=h)}function tm(n,i,a){var c=i.pendingProps,h=c.revealOrder,g=c.tail;if(Qn(n,i,c.children,a),c=un.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&em(n,a,i);else if(n.tag===19)em(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(nn(un,c),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)n=a.alternate,n!==null&&tl(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),zu(i,!1,h,a,g);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&tl(n)===null){i.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}zu(i,!0,a,null,g);break;case"together":zu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function cl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function pr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),ms|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Xr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Xr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function c_(n,i,a){switch(i.tag){case 3:Zp(i),Gs();break;case 5:mp(i);break;case 1:si(i.type)&&jo(i);break;case 4:xu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,h=i.memoizedProps.value;nn(Zo,c._currentValue),c._currentValue=h;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(nn(un,un.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Jp(n,i,a):(nn(un,un.current&1),n=pr(n,i,a),n!==null?n.sibling:null);nn(un,un.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return tm(n,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),nn(un,un.current),c)break;return null;case 22:case 23:return i.lanes=0,Yp(n,i,a)}return pr(n,i,a)}var nm,Hu,im,rm;nm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Hu=function(){},im=function(n,i,a,c){var h=n.memoizedProps;if(h!==c){n=i.stateNode,fs($i.current);var g=null;switch(a){case"input":h=yt(n,h),c=yt(n,c),g=[];break;case"select":h=te({},h,{value:void 0}),c=te({},c,{value:void 0}),g=[];break;case"textarea":h=he(n,h),c=he(n,c),g=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Vo)}Me(a,c);var A;a=null;for(me in h)if(!c.hasOwnProperty(me)&&h.hasOwnProperty(me)&&h[me]!=null)if(me==="style"){var k=h[me];for(A in k)k.hasOwnProperty(A)&&(a||(a={}),a[A]="")}else me!=="dangerouslySetInnerHTML"&&me!=="children"&&me!=="suppressContentEditableWarning"&&me!=="suppressHydrationWarning"&&me!=="autoFocus"&&(o.hasOwnProperty(me)?g||(g=[]):(g=g||[]).push(me,null));for(me in c){var X=c[me];if(k=h!=null?h[me]:void 0,c.hasOwnProperty(me)&&X!==k&&(X!=null||k!=null))if(me==="style")if(k){for(A in k)!k.hasOwnProperty(A)||X&&X.hasOwnProperty(A)||(a||(a={}),a[A]="");for(A in X)X.hasOwnProperty(A)&&k[A]!==X[A]&&(a||(a={}),a[A]=X[A])}else a||(g||(g=[]),g.push(me,a)),a=X;else me==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,k=k?k.__html:void 0,X!=null&&k!==X&&(g=g||[]).push(me,X)):me==="children"?typeof X!="string"&&typeof X!="number"||(g=g||[]).push(me,""+X):me!=="suppressContentEditableWarning"&&me!=="suppressHydrationWarning"&&(o.hasOwnProperty(me)?(X!=null&&me==="onScroll"&&an("scroll",n),g||k===X||(g=[])):(g=g||[]).push(me,X))}a&&(g=g||[]).push("style",a);var me=g;(i.updateQueue=me)&&(i.flags|=4)}},rm=function(n,i,a,c){a!==c&&(i.flags|=4)};function Qa(n,i){if(!cn)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function jn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function u_(n,i,a){var c=i.pendingProps;switch(cu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jn(i),null;case 1:return si(i.type)&&Wo(),jn(i),null;case 3:return c=i.stateNode,Ks(),on(ri),on(Gn),Mu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(qo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Li!==null&&(Qu(Li),Li=null))),Hu(n,i),jn(i),null;case 5:yu(i);var h=fs(Ka.current);if(a=i.type,n!==null&&i.stateNode!=null)im(n,i,a,c,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return jn(i),null}if(n=fs($i.current),qo(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[qi]=i,c[Va]=g,n=(i.mode&1)!==0,a){case"dialog":an("cancel",c),an("close",c);break;case"iframe":case"object":case"embed":an("load",c);break;case"video":case"audio":for(h=0;h<Ba.length;h++)an(Ba[h],c);break;case"source":an("error",c);break;case"img":case"image":case"link":an("error",c),an("load",c);break;case"details":an("toggle",c);break;case"input":Qt(c,g),an("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},an("invalid",c);break;case"textarea":Ve(c,g),an("invalid",c)}Me(a,g),h=null;for(var A in g)if(g.hasOwnProperty(A)){var k=g[A];A==="children"?typeof k=="string"?c.textContent!==k&&(g.suppressHydrationWarning!==!0&&Ho(c.textContent,k,n),h=["children",k]):typeof k=="number"&&c.textContent!==""+k&&(g.suppressHydrationWarning!==!0&&Ho(c.textContent,k,n),h=["children",""+k]):o.hasOwnProperty(A)&&k!=null&&A==="onScroll"&&an("scroll",c)}switch(a){case"input":Ye(c),Ft(c,g,!0);break;case"textarea":Ye(c),rt(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Vo)}c=h,i.updateQueue=c,c!==null&&(i.flags|=4)}else{A=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ot(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=A.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=A.createElement(a,{is:c.is}):(n=A.createElement(a),a==="select"&&(A=n,c.multiple?A.multiple=!0:c.size&&(A.size=c.size))):n=A.createElementNS(n,a),n[qi]=i,n[Va]=c,nm(n,i,!1,!1),i.stateNode=n;e:{switch(A=De(a,c),a){case"dialog":an("cancel",n),an("close",n),h=c;break;case"iframe":case"object":case"embed":an("load",n),h=c;break;case"video":case"audio":for(h=0;h<Ba.length;h++)an(Ba[h],n);h=c;break;case"source":an("error",n),h=c;break;case"img":case"image":case"link":an("error",n),an("load",n),h=c;break;case"details":an("toggle",n),h=c;break;case"input":Qt(n,c),h=yt(n,c),an("invalid",n);break;case"option":h=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},h=te({},c,{value:void 0}),an("invalid",n);break;case"textarea":Ve(n,c),h=he(n,c),an("invalid",n);break;default:h=c}Me(a,h),k=h;for(g in k)if(k.hasOwnProperty(g)){var X=k[g];g==="style"?q(n,X):g==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,X!=null&&_t(n,X)):g==="children"?typeof X=="string"?(a!=="textarea"||X!=="")&&Ae(n,X):typeof X=="number"&&Ae(n,""+X):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?X!=null&&g==="onScroll"&&an("scroll",n):X!=null&&F(n,g,X,A))}switch(a){case"input":Ye(n),Ft(n,c,!1);break;case"textarea":Ye(n),rt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Ee(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?Jt(n,!!c.multiple,g,!1):c.defaultValue!=null&&Jt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Vo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return jn(i),null;case 6:if(n&&i.stateNode!=null)rm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=fs(Ka.current),fs($i.current),qo(i)){if(c=i.stateNode,a=i.memoizedProps,c[qi]=i,(g=c.nodeValue!==a)&&(n=pi,n!==null))switch(n.tag){case 3:Ho(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ho(c.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[qi]=i,i.stateNode=c}return jn(i),null;case 13:if(on(un),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(cn&&mi!==null&&(i.mode&1)!==0&&(i.flags&128)===0)op(),Gs(),i.flags|=98560,g=!1;else if(g=qo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[qi]=i}else Gs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;jn(i),g=!1}else Li!==null&&(Qu(Li),Li=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(un.current&1)!==0?En===0&&(En=3):th())),i.updateQueue!==null&&(i.flags|=4),jn(i),null);case 4:return Ks(),Hu(n,i),n===null&&za(i.stateNode.containerInfo),jn(i),null;case 10:return mu(i.type._context),jn(i),null;case 17:return si(i.type)&&Wo(),jn(i),null;case 19:if(on(un),g=i.memoizedState,g===null)return jn(i),null;if(c=(i.flags&128)!==0,A=g.rendering,A===null)if(c)Qa(g,!1);else{if(En!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(A=tl(n),A!==null){for(i.flags|=128,Qa(g,!1),c=A.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,n=c,g.flags&=14680066,A=g.alternate,A===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=A.childLanes,g.lanes=A.lanes,g.child=A.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=A.memoizedProps,g.memoizedState=A.memoizedState,g.updateQueue=A.updateQueue,g.type=A.type,n=A.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return nn(un,un.current&1|2),i.child}n=n.sibling}g.tail!==null&&Lt()>Zs&&(i.flags|=128,c=!0,Qa(g,!1),i.lanes=4194304)}else{if(!c)if(n=tl(A),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Qa(g,!0),g.tail===null&&g.tailMode==="hidden"&&!A.alternate&&!cn)return jn(i),null}else 2*Lt()-g.renderingStartTime>Zs&&a!==1073741824&&(i.flags|=128,c=!0,Qa(g,!1),i.lanes=4194304);g.isBackwards?(A.sibling=i.child,i.child=A):(a=g.last,a!==null?a.sibling=A:i.child=A,g.last=A)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Lt(),i.sibling=null,a=un.current,nn(un,c?a&1|2:a&1),i):(jn(i),null);case 22:case 23:return eh(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(gi&1073741824)!==0&&(jn(i),i.subtreeFlags&6&&(i.flags|=8192)):jn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function h_(n,i){switch(cu(i),i.tag){case 1:return si(i.type)&&Wo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ks(),on(ri),on(Gn),Mu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return yu(i),null;case 13:if(on(un),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Gs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return on(un),null;case 4:return Ks(),null;case 10:return mu(i.type._context),null;case 22:case 23:return eh(),null;case 24:return null;default:return null}}var ul=!1,Xn=!1,d_=typeof WeakSet=="function"?WeakSet:Set,Je=null;function qs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){pn(n,i,c)}else a.current=null}function Vu(n,i,a){try{a()}catch(c){pn(n,i,c)}}var sm=!1;function f_(n,i){if(eu=Ro,n=Ff(),Xc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var h=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var A=0,k=-1,X=-1,me=0,Re=0,Le=n,Ne=null;t:for(;;){for(var $e;Le!==a||h!==0&&Le.nodeType!==3||(k=A+h),Le!==g||c!==0&&Le.nodeType!==3||(X=A+c),Le.nodeType===3&&(A+=Le.nodeValue.length),($e=Le.firstChild)!==null;)Ne=Le,Le=$e;for(;;){if(Le===n)break t;if(Ne===a&&++me===h&&(k=A),Ne===g&&++Re===c&&(X=A),($e=Le.nextSibling)!==null)break;Le=Ne,Ne=Le.parentNode}Le=$e}a=k===-1||X===-1?null:{start:k,end:X}}else a=null}a=a||{start:0,end:0}}else a=null;for(tu={focusedElem:n,selectionRange:a},Ro=!1,Je=i;Je!==null;)if(i=Je,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Je=n;else for(;Je!==null;){i=Je;try{var it=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(it!==null){var st=it.memoizedProps,gn=it.memoizedState,ce=i.stateNode,Z=ce.getSnapshotBeforeUpdate(i.elementType===i.type?st:Ii(i.type,st),gn);ce.__reactInternalSnapshotBeforeUpdate=Z}break;case 3:var pe=i.stateNode.containerInfo;pe.nodeType===1?pe.textContent="":pe.nodeType===9&&pe.documentElement&&pe.removeChild(pe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Fe){pn(i,i.return,Fe)}if(n=i.sibling,n!==null){n.return=i.return,Je=n;break}Je=i.return}return it=sm,sm=!1,it}function Ja(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&n)===n){var g=h.destroy;h.destroy=void 0,g!==void 0&&Vu(i,a,g)}h=h.next}while(h!==c)}}function hl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Gu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function am(n){var i=n.alternate;i!==null&&(n.alternate=null,am(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[qi],delete i[Va],delete i[su],delete i[qv],delete i[$v])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function om(n){return n.tag===5||n.tag===3||n.tag===4}function lm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||om(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Wu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Vo));else if(c!==4&&(n=n.child,n!==null))for(Wu(n,i,a),n=n.sibling;n!==null;)Wu(n,i,a),n=n.sibling}function ju(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(ju(n,i,a),n=n.sibling;n!==null;)ju(n,i,a),n=n.sibling}var Fn=null,Ui=!1;function Hr(n,i,a){for(a=a.child;a!==null;)cm(n,i,a),a=a.sibling}function cm(n,i,a){if(fe&&typeof fe.onCommitFiberUnmount=="function")try{fe.onCommitFiberUnmount(j,a)}catch{}switch(a.tag){case 5:Xn||qs(a,i);case 6:var c=Fn,h=Ui;Fn=null,Hr(n,i,a),Fn=c,Ui=h,Fn!==null&&(Ui?(n=Fn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Fn.removeChild(a.stateNode));break;case 18:Fn!==null&&(Ui?(n=Fn,a=a.stateNode,n.nodeType===8?ru(n.parentNode,a):n.nodeType===1&&ru(n,a),Pa(n)):ru(Fn,a.stateNode));break;case 4:c=Fn,h=Ui,Fn=a.stateNode.containerInfo,Ui=!0,Hr(n,i,a),Fn=c,Ui=h;break;case 0:case 11:case 14:case 15:if(!Xn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var g=h,A=g.destroy;g=g.tag,A!==void 0&&((g&2)!==0||(g&4)!==0)&&Vu(a,i,A),h=h.next}while(h!==c)}Hr(n,i,a);break;case 1:if(!Xn&&(qs(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(k){pn(a,i,k)}Hr(n,i,a);break;case 21:Hr(n,i,a);break;case 22:a.mode&1?(Xn=(c=Xn)||a.memoizedState!==null,Hr(n,i,a),Xn=c):Hr(n,i,a);break;default:Hr(n,i,a)}}function um(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new d_),i.forEach(function(c){var h=M_.bind(null,n,c);a.has(c)||(a.add(c),c.then(h,h))})}}function Oi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var h=a[c];try{var g=n,A=i,k=A;e:for(;k!==null;){switch(k.tag){case 5:Fn=k.stateNode,Ui=!1;break e;case 3:Fn=k.stateNode.containerInfo,Ui=!0;break e;case 4:Fn=k.stateNode.containerInfo,Ui=!0;break e}k=k.return}if(Fn===null)throw Error(t(160));cm(g,A,h),Fn=null,Ui=!1;var X=h.alternate;X!==null&&(X.return=null),h.return=null}catch(me){pn(h,i,me)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)hm(i,n),i=i.sibling}function hm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Oi(i,n),Qi(n),c&4){try{Ja(3,n,n.return),hl(3,n)}catch(st){pn(n,n.return,st)}try{Ja(5,n,n.return)}catch(st){pn(n,n.return,st)}}break;case 1:Oi(i,n),Qi(n),c&512&&a!==null&&qs(a,a.return);break;case 5:if(Oi(i,n),Qi(n),c&512&&a!==null&&qs(a,a.return),n.flags&32){var h=n.stateNode;try{Ae(h,"")}catch(st){pn(n,n.return,st)}}if(c&4&&(h=n.stateNode,h!=null)){var g=n.memoizedProps,A=a!==null?a.memoizedProps:g,k=n.type,X=n.updateQueue;if(n.updateQueue=null,X!==null)try{k==="input"&&g.type==="radio"&&g.name!=null&&qt(h,g),De(k,A);var me=De(k,g);for(A=0;A<X.length;A+=2){var Re=X[A],Le=X[A+1];Re==="style"?q(h,Le):Re==="dangerouslySetInnerHTML"?_t(h,Le):Re==="children"?Ae(h,Le):F(h,Re,Le,me)}switch(k){case"input":$t(h,g);break;case"textarea":V(h,g);break;case"select":var Ne=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var $e=g.value;$e!=null?Jt(h,!!g.multiple,$e,!1):Ne!==!!g.multiple&&(g.defaultValue!=null?Jt(h,!!g.multiple,g.defaultValue,!0):Jt(h,!!g.multiple,g.multiple?[]:"",!1))}h[Va]=g}catch(st){pn(n,n.return,st)}}break;case 6:if(Oi(i,n),Qi(n),c&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,g=n.memoizedProps;try{h.nodeValue=g}catch(st){pn(n,n.return,st)}}break;case 3:if(Oi(i,n),Qi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Pa(i.containerInfo)}catch(st){pn(n,n.return,st)}break;case 4:Oi(i,n),Qi(n);break;case 13:Oi(i,n),Qi(n),h=n.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(Yu=Lt())),c&4&&um(n);break;case 22:if(Re=a!==null&&a.memoizedState!==null,n.mode&1?(Xn=(me=Xn)||Re,Oi(i,n),Xn=me):Oi(i,n),Qi(n),c&8192){if(me=n.memoizedState!==null,(n.stateNode.isHidden=me)&&!Re&&(n.mode&1)!==0)for(Je=n,Re=n.child;Re!==null;){for(Le=Je=Re;Je!==null;){switch(Ne=Je,$e=Ne.child,Ne.tag){case 0:case 11:case 14:case 15:Ja(4,Ne,Ne.return);break;case 1:qs(Ne,Ne.return);var it=Ne.stateNode;if(typeof it.componentWillUnmount=="function"){c=Ne,a=Ne.return;try{i=c,it.props=i.memoizedProps,it.state=i.memoizedState,it.componentWillUnmount()}catch(st){pn(c,a,st)}}break;case 5:qs(Ne,Ne.return);break;case 22:if(Ne.memoizedState!==null){pm(Le);continue}}$e!==null?($e.return=Ne,Je=$e):pm(Le)}Re=Re.sibling}e:for(Re=null,Le=n;;){if(Le.tag===5){if(Re===null){Re=Le;try{h=Le.stateNode,me?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(k=Le.stateNode,X=Le.memoizedProps.style,A=X!=null&&X.hasOwnProperty("display")?X.display:null,k.style.display=b("display",A))}catch(st){pn(n,n.return,st)}}}else if(Le.tag===6){if(Re===null)try{Le.stateNode.nodeValue=me?"":Le.memoizedProps}catch(st){pn(n,n.return,st)}}else if((Le.tag!==22&&Le.tag!==23||Le.memoizedState===null||Le===n)&&Le.child!==null){Le.child.return=Le,Le=Le.child;continue}if(Le===n)break e;for(;Le.sibling===null;){if(Le.return===null||Le.return===n)break e;Re===Le&&(Re=null),Le=Le.return}Re===Le&&(Re=null),Le.sibling.return=Le.return,Le=Le.sibling}}break;case 19:Oi(i,n),Qi(n),c&4&&um(n);break;case 21:break;default:Oi(i,n),Qi(n)}}function Qi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(om(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(Ae(h,""),c.flags&=-33);var g=lm(n);ju(n,g,h);break;case 3:case 4:var A=c.stateNode.containerInfo,k=lm(n);Wu(n,k,A);break;default:throw Error(t(161))}}catch(X){pn(n,n.return,X)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function p_(n,i,a){Je=n,dm(n)}function dm(n,i,a){for(var c=(n.mode&1)!==0;Je!==null;){var h=Je,g=h.child;if(h.tag===22&&c){var A=h.memoizedState!==null||ul;if(!A){var k=h.alternate,X=k!==null&&k.memoizedState!==null||Xn;k=ul;var me=Xn;if(ul=A,(Xn=X)&&!me)for(Je=h;Je!==null;)A=Je,X=A.child,A.tag===22&&A.memoizedState!==null?mm(h):X!==null?(X.return=A,Je=X):mm(h);for(;g!==null;)Je=g,dm(g),g=g.sibling;Je=h,ul=k,Xn=me}fm(n)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,Je=g):fm(n)}}function fm(n){for(;Je!==null;){var i=Je;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Xn||hl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Xn)if(a===null)c.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:Ii(i.type,a.memoizedProps);c.componentDidUpdate(h,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&pp(i,g,c);break;case 3:var A=i.updateQueue;if(A!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}pp(i,A,a)}break;case 5:var k=i.stateNode;if(a===null&&i.flags&4){a=k;var X=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":X.autoFocus&&a.focus();break;case"img":X.src&&(a.src=X.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var me=i.alternate;if(me!==null){var Re=me.memoizedState;if(Re!==null){var Le=Re.dehydrated;Le!==null&&Pa(Le)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Xn||i.flags&512&&Gu(i)}catch(Ne){pn(i,i.return,Ne)}}if(i===n){Je=null;break}if(a=i.sibling,a!==null){a.return=i.return,Je=a;break}Je=i.return}}function pm(n){for(;Je!==null;){var i=Je;if(i===n){Je=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Je=a;break}Je=i.return}}function mm(n){for(;Je!==null;){var i=Je;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{hl(4,i)}catch(X){pn(i,a,X)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var h=i.return;try{c.componentDidMount()}catch(X){pn(i,h,X)}}var g=i.return;try{Gu(i)}catch(X){pn(i,g,X)}break;case 5:var A=i.return;try{Gu(i)}catch(X){pn(i,A,X)}}}catch(X){pn(i,i.return,X)}if(i===n){Je=null;break}var k=i.sibling;if(k!==null){k.return=i.return,Je=k;break}Je=i.return}}var m_=Math.ceil,dl=D.ReactCurrentDispatcher,Xu=D.ReactCurrentOwner,Ai=D.ReactCurrentBatchConfig,It=0,Pn=null,_n=null,kn=0,gi=0,$s=Or(0),En=0,eo=null,ms=0,fl=0,Ku=0,to=null,oi=null,Yu=0,Zs=1/0,mr=null,pl=!1,qu=null,Vr=null,ml=!1,Gr=null,gl=0,no=0,$u=null,vl=-1,_l=0;function Jn(){return(It&6)!==0?Lt():vl!==-1?vl:vl=Lt()}function Wr(n){return(n.mode&1)===0?1:(It&2)!==0&&kn!==0?kn&-kn:Qv.transition!==null?(_l===0&&(_l=Xt()),_l):(n=at,n!==0||(n=window.event,n=n===void 0?16:vf(n.type)),n)}function Fi(n,i,a,c){if(50<no)throw no=0,$u=null,Error(t(185));fn(n,a,c),((It&2)===0||n!==Pn)&&(n===Pn&&((It&2)===0&&(fl|=a),En===4&&jr(n,kn)),li(n,c),a===1&&It===0&&(i.mode&1)===0&&(Zs=Lt()+500,Xo&&kr()))}function li(n,i){var a=n.callbackNode;bt(n,i);var c=Mt(n,n===Pn?kn:0);if(c===0)a!==null&&sn(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&sn(a),i===1)n.tag===0?Zv(vm.bind(null,n)):np(vm.bind(null,n)),Kv(function(){(It&6)===0&&kr()}),a=null;else{switch(Ki(c)){case 1:a=Hn;break;case 4:a=Nr;break;case 16:a=Xi;break;case 536870912:a=R;break;default:a=Xi}a=wm(a,gm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function gm(n,i){if(vl=-1,_l=0,(It&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Qs()&&n.callbackNode!==a)return null;var c=Mt(n,n===Pn?kn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=xl(n,c);else{i=c;var h=It;It|=2;var g=xm();(Pn!==n||kn!==i)&&(mr=null,Zs=Lt()+500,vs(n,i));do try{__();break}catch(k){_m(n,k)}while(!0);pu(),dl.current=g,It=h,_n!==null?i=0:(Pn=null,kn=0,i=En)}if(i!==0){if(i===2&&(h=ln(n),h!==0&&(c=h,i=Zu(n,h))),i===1)throw a=eo,vs(n,0),jr(n,c),li(n,Lt()),a;if(i===6)jr(n,c);else{if(h=n.current.alternate,(c&30)===0&&!g_(h)&&(i=xl(n,c),i===2&&(g=ln(n),g!==0&&(c=g,i=Zu(n,g))),i===1))throw a=eo,vs(n,0),jr(n,c),li(n,Lt()),a;switch(n.finishedWork=h,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:_s(n,oi,mr);break;case 3:if(jr(n,c),(c&130023424)===c&&(i=Yu+500-Lt(),10<i)){if(Mt(n,0)!==0)break;if(h=n.suspendedLanes,(h&c)!==c){Jn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=iu(_s.bind(null,n,oi,mr),i);break}_s(n,oi,mr);break;case 4:if(jr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,h=-1;0<c;){var A=31-ae(c);g=1<<A,A=i[A],A>h&&(h=A),c&=~g}if(c=h,c=Lt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*m_(c/1960))-c,10<c){n.timeoutHandle=iu(_s.bind(null,n,oi,mr),c);break}_s(n,oi,mr);break;case 5:_s(n,oi,mr);break;default:throw Error(t(329))}}}return li(n,Lt()),n.callbackNode===a?gm.bind(null,n):null}function Zu(n,i){var a=to;return n.current.memoizedState.isDehydrated&&(vs(n,i).flags|=256),n=xl(n,i),n!==2&&(i=oi,oi=a,i!==null&&Qu(i)),n}function Qu(n){oi===null?oi=n:oi.push.apply(oi,n)}function g_(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var h=a[c],g=h.getSnapshot;h=h.value;try{if(!Di(g(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function jr(n,i){for(i&=~Ku,i&=~fl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-ae(i),c=1<<a;n[a]=-1,i&=~c}}function vm(n){if((It&6)!==0)throw Error(t(327));Qs();var i=Mt(n,0);if((i&1)===0)return li(n,Lt()),null;var a=xl(n,i);if(n.tag!==0&&a===2){var c=ln(n);c!==0&&(i=c,a=Zu(n,c))}if(a===1)throw a=eo,vs(n,0),jr(n,i),li(n,Lt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,_s(n,oi,mr),li(n,Lt()),null}function Ju(n,i){var a=It;It|=1;try{return n(i)}finally{It=a,It===0&&(Zs=Lt()+500,Xo&&kr())}}function gs(n){Gr!==null&&Gr.tag===0&&(It&6)===0&&Qs();var i=It;It|=1;var a=Ai.transition,c=at;try{if(Ai.transition=null,at=1,n)return n()}finally{at=c,Ai.transition=a,It=i,(It&6)===0&&kr()}}function eh(){gi=$s.current,on($s)}function vs(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Xv(a)),_n!==null)for(a=_n.return;a!==null;){var c=a;switch(cu(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Wo();break;case 3:Ks(),on(ri),on(Gn),Mu();break;case 5:yu(c);break;case 4:Ks();break;case 13:on(un);break;case 19:on(un);break;case 10:mu(c.type._context);break;case 22:case 23:eh()}a=a.return}if(Pn=n,_n=n=Xr(n.current,null),kn=gi=i,En=0,eo=null,Ku=fl=ms=0,oi=to=null,ds!==null){for(i=0;i<ds.length;i++)if(a=ds[i],c=a.interleaved,c!==null){a.interleaved=null;var h=c.next,g=a.pending;if(g!==null){var A=g.next;g.next=h,c.next=A}a.pending=c}ds=null}return n}function _m(n,i){do{var a=_n;try{if(pu(),nl.current=al,il){for(var c=hn.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}il=!1}if(ps=0,Rn=Tn=hn=null,Ya=!1,qa=0,Xu.current=null,a===null||a.return===null){En=1,eo=i,_n=null;break}e:{var g=n,A=a.return,k=a,X=i;if(i=kn,k.flags|=32768,X!==null&&typeof X=="object"&&typeof X.then=="function"){var me=X,Re=k,Le=Re.tag;if((Re.mode&1)===0&&(Le===0||Le===11||Le===15)){var Ne=Re.alternate;Ne?(Re.updateQueue=Ne.updateQueue,Re.memoizedState=Ne.memoizedState,Re.lanes=Ne.lanes):(Re.updateQueue=null,Re.memoizedState=null)}var $e=Gp(A);if($e!==null){$e.flags&=-257,Wp($e,A,k,g,i),$e.mode&1&&Vp(g,me,i),i=$e,X=me;var it=i.updateQueue;if(it===null){var st=new Set;st.add(X),i.updateQueue=st}else it.add(X);break e}else{if((i&1)===0){Vp(g,me,i),th();break e}X=Error(t(426))}}else if(cn&&k.mode&1){var gn=Gp(A);if(gn!==null){(gn.flags&65536)===0&&(gn.flags|=256),Wp(gn,A,k,g,i),du(Ys(X,k));break e}}g=X=Ys(X,k),En!==4&&(En=2),to===null?to=[g]:to.push(g),g=A;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var ce=zp(g,X,i);fp(g,ce);break e;case 1:k=X;var Z=g.type,pe=g.stateNode;if((g.flags&128)===0&&(typeof Z.getDerivedStateFromError=="function"||pe!==null&&typeof pe.componentDidCatch=="function"&&(Vr===null||!Vr.has(pe)))){g.flags|=65536,i&=-i,g.lanes|=i;var Fe=Hp(g,k,i);fp(g,Fe);break e}}g=g.return}while(g!==null)}Sm(a)}catch(lt){i=lt,_n===a&&a!==null&&(_n=a=a.return);continue}break}while(!0)}function xm(){var n=dl.current;return dl.current=al,n===null?al:n}function th(){(En===0||En===3||En===2)&&(En=4),Pn===null||(ms&268435455)===0&&(fl&268435455)===0||jr(Pn,kn)}function xl(n,i){var a=It;It|=2;var c=xm();(Pn!==n||kn!==i)&&(mr=null,vs(n,i));do try{v_();break}catch(h){_m(n,h)}while(!0);if(pu(),It=a,dl.current=c,_n!==null)throw Error(t(261));return Pn=null,kn=0,En}function v_(){for(;_n!==null;)ym(_n)}function __(){for(;_n!==null&&!ii();)ym(_n)}function ym(n){var i=Em(n.alternate,n,gi);n.memoizedProps=n.pendingProps,i===null?Sm(n):_n=i,Xu.current=null}function Sm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=u_(a,i,gi),a!==null){_n=a;return}}else{if(a=h_(a,i),a!==null){a.flags&=32767,_n=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{En=6,_n=null;return}}if(i=i.sibling,i!==null){_n=i;return}_n=i=n}while(i!==null);En===0&&(En=5)}function _s(n,i,a){var c=at,h=Ai.transition;try{Ai.transition=null,at=1,x_(n,i,a,c)}finally{Ai.transition=h,at=c}return null}function x_(n,i,a,c){do Qs();while(Gr!==null);if((It&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(nt(n,g),n===Pn&&(_n=Pn=null,kn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ml||(ml=!0,wm(Xi,function(){return Qs(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=Ai.transition,Ai.transition=null;var A=at;at=1;var k=It;It|=4,Xu.current=null,f_(n,a),hm(a,n),Bv(tu),Ro=!!eu,tu=eu=null,n.current=a,p_(a),Mi(),It=k,at=A,Ai.transition=g}else n.current=a;if(ml&&(ml=!1,Gr=n,gl=h),g=n.pendingLanes,g===0&&(Vr=null),oe(a.stateNode),li(n,Lt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)h=i[a],c(h.value,{componentStack:h.stack,digest:h.digest});if(pl)throw pl=!1,n=qu,qu=null,n;return(gl&1)!==0&&n.tag!==0&&Qs(),g=n.pendingLanes,(g&1)!==0?n===$u?no++:(no=0,$u=n):no=0,kr(),null}function Qs(){if(Gr!==null){var n=Ki(gl),i=Ai.transition,a=at;try{if(Ai.transition=null,at=16>n?16:n,Gr===null)var c=!1;else{if(n=Gr,Gr=null,gl=0,(It&6)!==0)throw Error(t(331));var h=It;for(It|=4,Je=n.current;Je!==null;){var g=Je,A=g.child;if((Je.flags&16)!==0){var k=g.deletions;if(k!==null){for(var X=0;X<k.length;X++){var me=k[X];for(Je=me;Je!==null;){var Re=Je;switch(Re.tag){case 0:case 11:case 15:Ja(8,Re,g)}var Le=Re.child;if(Le!==null)Le.return=Re,Je=Le;else for(;Je!==null;){Re=Je;var Ne=Re.sibling,$e=Re.return;if(am(Re),Re===me){Je=null;break}if(Ne!==null){Ne.return=$e,Je=Ne;break}Je=$e}}}var it=g.alternate;if(it!==null){var st=it.child;if(st!==null){it.child=null;do{var gn=st.sibling;st.sibling=null,st=gn}while(st!==null)}}Je=g}}if((g.subtreeFlags&2064)!==0&&A!==null)A.return=g,Je=A;else e:for(;Je!==null;){if(g=Je,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Ja(9,g,g.return)}var ce=g.sibling;if(ce!==null){ce.return=g.return,Je=ce;break e}Je=g.return}}var Z=n.current;for(Je=Z;Je!==null;){A=Je;var pe=A.child;if((A.subtreeFlags&2064)!==0&&pe!==null)pe.return=A,Je=pe;else e:for(A=Z;Je!==null;){if(k=Je,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:hl(9,k)}}catch(lt){pn(k,k.return,lt)}if(k===A){Je=null;break e}var Fe=k.sibling;if(Fe!==null){Fe.return=k.return,Je=Fe;break e}Je=k.return}}if(It=h,kr(),fe&&typeof fe.onPostCommitFiberRoot=="function")try{fe.onPostCommitFiberRoot(j,n)}catch{}c=!0}return c}finally{at=a,Ai.transition=i}}return!1}function Mm(n,i,a){i=Ys(a,i),i=zp(n,i,1),n=zr(n,i,1),i=Jn(),n!==null&&(fn(n,1,i),li(n,i))}function pn(n,i,a){if(n.tag===3)Mm(n,n,a);else for(;i!==null;){if(i.tag===3){Mm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Vr===null||!Vr.has(c))){n=Ys(a,n),n=Hp(i,n,1),i=zr(i,n,1),n=Jn(),i!==null&&(fn(i,1,n),li(i,n));break}}i=i.return}}function y_(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Jn(),n.pingedLanes|=n.suspendedLanes&a,Pn===n&&(kn&a)===a&&(En===4||En===3&&(kn&130023424)===kn&&500>Lt()-Yu?vs(n,0):Ku|=a),li(n,i)}function Tm(n,i){i===0&&((n.mode&1)===0?i=1:(i=et,et<<=1,(et&130023424)===0&&(et=4194304)));var a=Jn();n=dr(n,i),n!==null&&(fn(n,i,a),li(n,a))}function S_(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Tm(n,a)}function M_(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Tm(n,a)}var Em;Em=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||ri.current)ai=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return ai=!1,c_(n,i,a);ai=(n.flags&131072)!==0}else ai=!1,cn&&(i.flags&1048576)!==0&&ip(i,Yo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;cl(n,i),n=i.pendingProps;var h=zs(i,Gn.current);Xs(i,a),h=wu(null,i,c,n,h,a);var g=Cu();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,si(c)?(g=!0,jo(i)):g=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,_u(i),h.updater=ol,i.stateNode=h,h._reactInternals=i,Du(i,c,n,a),i=Ou(null,i,c,!0,g,a)):(i.tag=0,cn&&g&&lu(i),Qn(null,i,h,a),i=i.child),i;case 16:c=i.elementType;e:{switch(cl(n,i),n=i.pendingProps,h=c._init,c=h(c._payload),i.type=c,h=i.tag=E_(c),n=Ii(c,n),h){case 0:i=Uu(null,i,c,n,a);break e;case 1:i=$p(null,i,c,n,a);break e;case 11:i=jp(null,i,c,n,a);break e;case 14:i=Xp(null,i,c,Ii(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Ii(c,h),Uu(n,i,c,h,a);case 1:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Ii(c,h),$p(n,i,c,h,a);case 3:e:{if(Zp(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,h=g.element,dp(n,i),el(i,c,null,a);var A=i.memoizedState;if(c=A.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){h=Ys(Error(t(423)),i),i=Qp(n,i,c,a,h);break e}else if(c!==h){h=Ys(Error(t(424)),i),i=Qp(n,i,c,a,h);break e}else for(mi=Ur(i.stateNode.containerInfo.firstChild),pi=i,cn=!0,Li=null,a=up(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Gs(),c===h){i=pr(n,i,a);break e}Qn(n,i,c,a)}i=i.child}return i;case 5:return mp(i),n===null&&hu(i),c=i.type,h=i.pendingProps,g=n!==null?n.memoizedProps:null,A=h.children,nu(c,h)?A=null:g!==null&&nu(c,g)&&(i.flags|=32),qp(n,i),Qn(n,i,A,a),i.child;case 6:return n===null&&hu(i),null;case 13:return Jp(n,i,a);case 4:return xu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Ws(i,null,c,a):Qn(n,i,c,a),i.child;case 11:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Ii(c,h),jp(n,i,c,h,a);case 7:return Qn(n,i,i.pendingProps,a),i.child;case 8:return Qn(n,i,i.pendingProps.children,a),i.child;case 12:return Qn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,h=i.pendingProps,g=i.memoizedProps,A=h.value,nn(Zo,c._currentValue),c._currentValue=A,g!==null)if(Di(g.value,A)){if(g.children===h.children&&!ri.current){i=pr(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var k=g.dependencies;if(k!==null){A=g.child;for(var X=k.firstContext;X!==null;){if(X.context===c){if(g.tag===1){X=fr(-1,a&-a),X.tag=2;var me=g.updateQueue;if(me!==null){me=me.shared;var Re=me.pending;Re===null?X.next=X:(X.next=Re.next,Re.next=X),me.pending=X}}g.lanes|=a,X=g.alternate,X!==null&&(X.lanes|=a),gu(g.return,a,i),k.lanes|=a;break}X=X.next}}else if(g.tag===10)A=g.type===i.type?null:g.child;else if(g.tag===18){if(A=g.return,A===null)throw Error(t(341));A.lanes|=a,k=A.alternate,k!==null&&(k.lanes|=a),gu(A,a,i),A=g.sibling}else A=g.child;if(A!==null)A.return=g;else for(A=g;A!==null;){if(A===i){A=null;break}if(g=A.sibling,g!==null){g.return=A.return,A=g;break}A=A.return}g=A}Qn(n,i,h.children,a),i=i.child}return i;case 9:return h=i.type,c=i.pendingProps.children,Xs(i,a),h=wi(h),c=c(h),i.flags|=1,Qn(n,i,c,a),i.child;case 14:return c=i.type,h=Ii(c,i.pendingProps),h=Ii(c.type,h),Xp(n,i,c,h,a);case 15:return Kp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Ii(c,h),cl(n,i),i.tag=1,si(c)?(n=!0,jo(i)):n=!1,Xs(i,a),kp(i,c,h),Du(i,c,h,a),Ou(null,i,c,!0,n,a);case 19:return tm(n,i,a);case 22:return Yp(n,i,a)}throw Error(t(156,i.tag))};function wm(n,i){return vn(n,i)}function T_(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bi(n,i,a,c){return new T_(n,i,a,c)}function nh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function E_(n){if(typeof n=="function")return nh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===$)return 11;if(n===de)return 14}return 2}function Xr(n,i){var a=n.alternate;return a===null?(a=bi(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function yl(n,i,a,c,h,g){var A=2;if(c=n,typeof n=="function")nh(n)&&(A=1);else if(typeof n=="string")A=5;else e:switch(n){case T:return xs(a.children,h,g,i);case E:A=8,h|=8;break;case K:return n=bi(12,a,i,h|2),n.elementType=K,n.lanes=g,n;case re:return n=bi(13,a,i,h),n.elementType=re,n.lanes=g,n;case H:return n=bi(19,a,i,h),n.elementType=H,n.lanes=g,n;case ee:return Sl(a,h,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case B:A=10;break e;case G:A=9;break e;case $:A=11;break e;case de:A=14;break e;case Y:A=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=bi(A,a,i,h),i.elementType=n,i.type=c,i.lanes=g,i}function xs(n,i,a,c){return n=bi(7,n,c,i),n.lanes=a,n}function Sl(n,i,a,c){return n=bi(22,n,c,i),n.elementType=ee,n.lanes=a,n.stateNode={isHidden:!1},n}function ih(n,i,a){return n=bi(6,n,null,i),n.lanes=a,n}function rh(n,i,a){return i=bi(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function w_(n,i,a,c,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ht(0),this.expirationTimes=Ht(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ht(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function sh(n,i,a,c,h,g,A,k,X){return n=new w_(n,i,a,k,X),i===1?(i=1,g===!0&&(i|=8)):i=0,g=bi(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},_u(g),n}function C_(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Cm(n){if(!n)return Fr;n=n._reactInternals;e:{if(rn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(si(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(si(a))return ep(n,a,i)}return i}function Am(n,i,a,c,h,g,A,k,X){return n=sh(a,c,!0,n,h,g,A,k,X),n.context=Cm(null),a=n.current,c=Jn(),h=Wr(a),g=fr(c,h),g.callback=i??null,zr(a,g,h),n.current.lanes=h,fn(n,h,c),li(n,c),n}function Ml(n,i,a,c){var h=i.current,g=Jn(),A=Wr(h);return a=Cm(a),i.context===null?i.context=a:i.pendingContext=a,i=fr(g,A),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=zr(h,i,A),n!==null&&(Fi(n,h,A,g),Jo(n,h,A)),A}function Tl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function bm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function ah(n,i){bm(n,i),(n=n.alternate)&&bm(n,i)}function A_(){return null}var Nm=typeof reportError=="function"?reportError:function(n){console.error(n)};function oh(n){this._internalRoot=n}El.prototype.render=oh.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Ml(n,i,null,null)},El.prototype.unmount=oh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;gs(function(){Ml(null,n,null,null)}),i[lr]=null}};function El(n){this._internalRoot=n}El.prototype.unstable_scheduleHydration=function(n){if(n){var i=Yi();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Dr.length&&i!==0&&i<Dr[a].priority;a++);Dr.splice(a,0,n),a===0&&mf(n)}};function lh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function wl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Rm(){}function b_(n,i,a,c,h){if(h){if(typeof c=="function"){var g=c;c=function(){var me=Tl(A);g.call(me)}}var A=Am(i,c,n,0,null,!1,!1,"",Rm);return n._reactRootContainer=A,n[lr]=A.current,za(n.nodeType===8?n.parentNode:n),gs(),A}for(;h=n.lastChild;)n.removeChild(h);if(typeof c=="function"){var k=c;c=function(){var me=Tl(X);k.call(me)}}var X=sh(n,0,!1,null,null,!1,!1,"",Rm);return n._reactRootContainer=X,n[lr]=X.current,za(n.nodeType===8?n.parentNode:n),gs(function(){Ml(i,X,a,c)}),X}function Cl(n,i,a,c,h){var g=a._reactRootContainer;if(g){var A=g;if(typeof h=="function"){var k=h;h=function(){var X=Tl(A);k.call(X)}}Ml(i,A,n,h)}else A=b_(a,i,n,h,c);return Tl(A)}Mn=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=pt(i.pendingLanes);a!==0&&(Sn(i,a|1),li(i,Lt()),(It&6)===0&&(Zs=Lt()+500,kr()))}break;case 13:gs(function(){var c=dr(n,1);if(c!==null){var h=Jn();Fi(c,n,1,h)}}),ah(n,1)}},Rr=function(n){if(n.tag===13){var i=dr(n,134217728);if(i!==null){var a=Jn();Fi(i,n,134217728,a)}ah(n,134217728)}},Pi=function(n){if(n.tag===13){var i=Wr(n),a=dr(n,i);if(a!==null){var c=Jn();Fi(a,n,i,c)}ah(n,i)}},Yi=function(){return at},Pt=function(n,i){var a=at;try{return at=n,i()}finally{at=a}},_e=function(n,i,a){switch(i){case"input":if($t(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var h=Go(c);if(!h)throw Error(t(90));ut(c),$t(c,h)}}}break;case"textarea":V(n,a);break;case"select":i=a.value,i!=null&&Jt(n,!!a.multiple,i,!1)}},ye=Ju,ue=gs;var N_={usingClientEntryPoint:!1,Events:[Ga,ks,Go,W,J,Ju]},io={findFiberByHostInstance:ls,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},R_={bundleType:io.bundleType,version:io.version,rendererPackageName:io.rendererPackageName,rendererConfig:io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=di(n),n===null?null:n.stateNode},findFiberByHostInstance:io.findFiberByHostInstance||A_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Al.isDisabled&&Al.supportsFiber)try{j=Al.inject(R_),fe=Al}catch{}}return ci.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N_,ci.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lh(i))throw Error(t(200));return C_(n,i,null,a)},ci.createRoot=function(n,i){if(!lh(n))throw Error(t(299));var a=!1,c="",h=Nm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=sh(n,1,!1,null,null,a,!1,c,h),n[lr]=i.current,za(n.nodeType===8?n.parentNode:n),new oh(i)},ci.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=di(i),n=n===null?null:n.stateNode,n},ci.flushSync=function(n){return gs(n)},ci.hydrate=function(n,i,a){if(!wl(i))throw Error(t(200));return Cl(null,n,i,!0,a)},ci.hydrateRoot=function(n,i,a){if(!lh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,h=!1,g="",A=Nm;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(A=a.onRecoverableError)),i=Am(i,null,n,1,a??null,h,!1,g,A),n[lr]=i.current,za(n),c)for(n=0;n<c.length;n++)a=c[n],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new El(i)},ci.render=function(n,i,a){if(!wl(i))throw Error(t(200));return Cl(null,n,i,!1,a)},ci.unmountComponentAtNode=function(n){if(!wl(n))throw Error(t(40));return n._reactRootContainer?(gs(function(){Cl(null,null,n,!1,function(){n._reactRootContainer=null,n[lr]=null})}),!0):!1},ci.unstable_batchedUpdates=Ju,ci.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!wl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Cl(n,i,a,!1,c)},ci.version="18.3.1-next-f1338f8080-20240426",ci}var km;function B_(){if(km)return hh.exports;km=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),hh.exports=k_(),hh.exports}var Bm;function z_(){if(Bm)return bl;Bm=1;var s=B_();return bl.createRoot=s.createRoot,bl.hydrateRoot=s.hydrateRoot,bl}var H_=z_();const V_=tg(H_);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ng=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var W_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_=wt.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...d},p)=>wt.createElement("svg",{ref:p,...W_,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:ng("lucide",o),...d},[...u.map(([m,_])=>wt.createElement(m,_)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=(s,e)=>{const t=wt.forwardRef(({className:r,...o},l)=>wt.createElement(j_,{ref:l,iconNode:e,className:ng(`lucide-${G_(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const so=jt("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=jt("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=jt("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nl=jt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=jt("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=jt("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=jt("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=jt("Disc",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=jt("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Js=jt("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=jt("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=jt("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=jt("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=jt("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_=jt("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=jt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_=jt("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=jt("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=jt("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=jt("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=jt("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=jt("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=jt("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pl=jt("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=jt("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=jt("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=jt("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=jt("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws=jt("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=jt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xd="187",ya={ROTATE:0,DOLLY:1,PAN:2},_a={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ox=0,Vm=1,lx=2,uc=1,ig=2,go=3,Cs=0,hi=1,Gi=2,Sa=0,_o=1,Gm=2,Wm=3,jm=4,cx=5,ga=100,ux=101,hx=102,dx=103,fx=104,px=200,mx=201,gx=202,vx=203,rg=204,sg=205,_x=206,xx=207,yx=208,Sx=209,Mx=210,Tx=211,Ex=212,wx=213,Cx=214,Jh=0,ed=1,td=2,Mo=3,nd=4,id=5,rd=6,sd=7,ag=0,Ax=1,bx=2,Cr=0,og=1,lg=2,cg=3,Kd=4,ug=5,hg=6,dg=7,fg=300,Ta=301,To=302,vh=303,_h=304,ad=1e3,Er=1001,od=1002,Bn=1003,Nx=1004,Dl=1005,ni=1006,xh=1007,ts=1008,xi=1009,pg=1010,mg=1011,Eo=1012,Yd=1013,sr=1014,nr=1015,ar=1016,qd=1017,$d=1018,Ea=1020,gg=35902,vg=35899,_g=1021,xg=1022,ir=1023,rs=1026,ns=1027,yg=1028,Zd=1029,As=1030,Qd=1031,Jd=1033,hc=33776,dc=33777,fc=33778,pc=33779,ld=35840,cd=35841,ud=35842,hd=35843,dd=36196,fd=37492,pd=37496,md=37488,gd=37489,vc=37490,vd=37491,_d=37808,xd=37809,yd=37810,Sd=37811,Md=37812,Td=37813,Ed=37814,wd=37815,Cd=37816,Ad=37817,bd=37818,Nd=37819,Rd=37820,Pd=37821,Dd=36492,Ld=36494,Id=36495,Ud=36283,Od=36284,_c=36285,Fd=36286,Rx=3200,kd=0,Px=1,es="",Ri="srgb",xc="srgb-linear",yc="linear",Kt="srgb",yh=7680,Dx=519,Lx=512,Ix=513,Ux=514,Sg=515,Ox=516,Fx=517,Mg=518,Tg=519,Eg=35044,Xm="300 es",Wi=2e3,wo=2001;function kx(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Sc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Bx(){const s=Sc("canvas");return s.style.display="block",s}const Km={};function Mc(...s){const e="THREE."+s.shift();console.log(e,...s)}function wg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function mt(...s){s=wg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ot(...s){s=wg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function mc(...s){const e=s.join(" ");e in Km||(Km[e]=!0,mt(...s))}function zx(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const Hx={[Jh]:Jh,[td]:rd,[nd]:nd,[Mo]:id,[ed]:ed,[rd]:td,[sd]:sd,[id]:Mo};class os{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xo=Math.PI/180,Bd=180/Math.PI;function Ns(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Kn[s&255]+Kn[s>>8&255]+Kn[s>>16&255]+Kn[s>>24&255]+"-"+Kn[e&255]+Kn[e>>8&255]+"-"+Kn[e>>16&15|64]+Kn[e>>24&255]+"-"+Kn[t&63|128]+Kn[t>>8&255]+"-"+Kn[t>>16&255]+Kn[t>>24&255]+Kn[r&255]+Kn[r>>8&255]+Kn[r>>16&255]+Kn[r>>24&255]).toLowerCase()}function Ct(s,e,t){return Math.max(e,Math.min(t,s))}function Vx(s,e){return(s%e+e)%e}function Sh(s,e,t){return(1-t)*s+t*e}function Gx(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Rc(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Cg(s,e){if(e.constructor===Float32Array)return s;const t=Rc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function Ag(s,e){if(e.constructor===Float32Array)return s;const t=Rc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const Wx={DEG2RAD:xo},uf=class uf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ct(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ct(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};uf.prototype.isVector2=!0;let Xe=uf;class ss{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,d){let p=r[o+0],m=r[o+1],_=r[o+2],M=r[o+3],v=l[u+0],S=l[u+1],w=l[u+2],N=l[u+3];if(M!==N||p!==v||m!==S||_!==w){let y=p*v+m*S+_*w+M*N;y<0&&(v=-v,S=-S,w=-w,N=-N,y=-y);let x=1-d;if(y<.9995){const P=Math.acos(y),F=Math.sin(P);x=Math.sin(x*P)/F,d=Math.sin(d*P)/F,p=p*x+v*d,m=m*x+S*d,_=_*x+w*d,M=M*x+N*d}else{p=p*x+v*d,m=m*x+S*d,_=_*x+w*d,M=M*x+N*d;const P=1/Math.sqrt(p*p+m*m+_*_+M*M);p*=P,m*=P,_*=P,M*=P}}e[t]=p,e[t+1]=m,e[t+2]=_,e[t+3]=M}static multiplyQuaternionsFlat(e,t,r,o,l,u){const d=r[o],p=r[o+1],m=r[o+2],_=r[o+3],M=l[u],v=l[u+1],S=l[u+2],w=l[u+3];return e[t]=d*w+_*M+p*S-m*v,e[t+1]=p*w+_*v+m*M-d*S,e[t+2]=m*w+_*S+d*v-p*M,e[t+3]=_*w-d*M-p*v-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,d=Math.cos,p=Math.sin,m=d(r/2),_=d(o/2),M=d(l/2),v=p(r/2),S=p(o/2),w=p(l/2);switch(u){case"XYZ":this._x=v*_*M+m*S*w,this._y=m*S*M-v*_*w,this._z=m*_*w+v*S*M,this._w=m*_*M-v*S*w;break;case"YXZ":this._x=v*_*M+m*S*w,this._y=m*S*M-v*_*w,this._z=m*_*w-v*S*M,this._w=m*_*M+v*S*w;break;case"ZXY":this._x=v*_*M-m*S*w,this._y=m*S*M+v*_*w,this._z=m*_*w+v*S*M,this._w=m*_*M-v*S*w;break;case"ZYX":this._x=v*_*M-m*S*w,this._y=m*S*M+v*_*w,this._z=m*_*w-v*S*M,this._w=m*_*M+v*S*w;break;case"YZX":this._x=v*_*M+m*S*w,this._y=m*S*M+v*_*w,this._z=m*_*w-v*S*M,this._w=m*_*M-v*S*w;break;case"XZY":this._x=v*_*M-m*S*w,this._y=m*S*M-v*_*w,this._z=m*_*w+v*S*M,this._w=m*_*M+v*S*w;break;default:mt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],d=t[5],p=t[9],m=t[2],_=t[6],M=t[10],v=r+d+M;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(_-p)*S,this._y=(l-m)*S,this._z=(u-o)*S}else if(r>d&&r>M){const S=2*Math.sqrt(1+r-d-M);this._w=(_-p)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+m)/S}else if(d>M){const S=2*Math.sqrt(1+d-r-M);this._w=(l-m)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+M-r-d);this._w=(u-o)/S,this._x=(l+m)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,d=t._x,p=t._y,m=t._z,_=t._w;return this._x=r*_+u*d+o*m-l*p,this._y=o*_+u*p+l*d-r*m,this._z=l*_+u*m+r*p-o*d,this._w=u*_-r*d-o*p-l*m,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,l=-l,u=-u,d=-d);let p=1-t;if(d<.9995){const m=Math.acos(d),_=Math.sin(m);p=Math.sin(p*m)/_,t=Math.sin(t*m)/_,this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+u*t,this._onChangeCallback()}else this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const hf=class hf{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ym.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ym.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,d=e.z,p=e.w,m=2*(u*o-d*r),_=2*(d*t-l*o),M=2*(l*r-u*t);return this.x=t+p*m+u*M-d*_,this.y=r+p*_+d*m-l*M,this.z=o+p*M+l*_-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ct(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,d=t.y,p=t.z;return this.x=o*p-l*d,this.y=l*u-r*p,this.z=r*d-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Mh.copy(this).projectOnVector(e),this.sub(Mh)}reflect(e){return this.sub(Mh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ct(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};hf.prototype.isVector3=!0;let C=hf;const Mh=new C,Ym=new ss,df=class df{constructor(e,t,r,o,l,u,d,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,p,m)}set(e,t,r,o,l,u,d,p,m){const _=this.elements;return _[0]=e,_[1]=o,_[2]=d,_[3]=t,_[4]=l,_[5]=p,_[6]=r,_[7]=u,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[3],p=r[6],m=r[1],_=r[4],M=r[7],v=r[2],S=r[5],w=r[8],N=o[0],y=o[3],x=o[6],P=o[1],F=o[4],D=o[7],O=o[2],I=o[5],T=o[8];return l[0]=u*N+d*P+p*O,l[3]=u*y+d*F+p*I,l[6]=u*x+d*D+p*T,l[1]=m*N+_*P+M*O,l[4]=m*y+_*F+M*I,l[7]=m*x+_*D+M*T,l[2]=v*N+S*P+w*O,l[5]=v*y+S*F+w*I,l[8]=v*x+S*D+w*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],p=e[6],m=e[7],_=e[8];return t*u*_-t*d*m-r*l*_+r*d*p+o*l*m-o*u*p}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],p=e[6],m=e[7],_=e[8],M=_*u-d*m,v=d*p-_*l,S=m*l-u*p,w=t*M+r*v+o*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const N=1/w;return e[0]=M*N,e[1]=(o*m-_*r)*N,e[2]=(d*r-o*u)*N,e[3]=v*N,e[4]=(_*t-o*p)*N,e[5]=(o*l-d*t)*N,e[6]=S*N,e[7]=(r*p-m*t)*N,e[8]=(u*t-r*l)*N,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,d){const p=Math.cos(l),m=Math.sin(l);return this.set(r*p,r*m,-r*(p*u+m*d)+u+e,-o*m,o*p,-o*(-m*u+p*d)+d+t,0,0,1),this}scale(e,t){return mc("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Th.makeScale(e,t)),this}rotate(e){return mc("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Th.makeRotation(-e)),this}translate(e,t){return mc("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Th.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};df.prototype.isMatrix3=!0;let xt=df;const Th=new xt,qm=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$m=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jx(){const s={enabled:!0,workingColorSpace:xc,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Kt&&(o.r=Ar(o.r),o.g=Ar(o.g),o.b=Ar(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Kt&&(o.r=Ma(o.r),o.g=Ma(o.g),o.b=Ma(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===es?yc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[u].fromXYZ).multiply(this.spaces[l].toXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[xc]:{primaries:e,whitePoint:r,transfer:yc,toXYZ:qm,fromXYZ:$m,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ri},outputColorSpaceConfig:{drawingBufferColorSpace:Ri}},[Ri]:{primaries:e,whitePoint:r,transfer:Kt,toXYZ:qm,fromXYZ:$m,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ri}}}),s}const Dt=jx();function Ar(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ma(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ea;class Xx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ea===void 0&&(ea=Sc("canvas")),ea.width=e.width,ea.height=e.height;const o=ea.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=ea}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Sc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=Ar(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Ar(t[r]/255)*255):t[r]=Ar(t[r]);return{data:t,width:e.width,height:e.height}}else return mt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Kx=0;class ef{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Kx++}),this.uuid=Ns(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?l.push(Eh(o[u].image)):l.push(Eh(o[u]))}else l=Eh(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Eh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Xx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(mt("Texture: Unable to serialize Texture."),{})}let Yx=0;const wh=new C;class $n extends os{constructor(e=$n.DEFAULT_IMAGE,t=$n.DEFAULT_MAPPING,r=Er,o=Er,l=ni,u=ts,d=ir,p=xi,m=$n.DEFAULT_ANISOTROPY,_=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yx++}),this.uuid=Ns(),this.name="",this.source=new ef(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(wh).x}get height(){return this.source.getSize(wh).y}get depth(){return this.source.getSize(wh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){mt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){mt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ad:e.x=e.x-Math.floor(e.x);break;case Er:e.x=e.x<0?0:1;break;case od:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ad:e.y=e.y-Math.floor(e.y);break;case Er:e.y=e.y<0?0:1;break;case od:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$n.DEFAULT_IMAGE=null;$n.DEFAULT_MAPPING=fg;$n.DEFAULT_ANISOTROPY=1;const ff=class ff{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const p=e.elements,m=p[0],_=p[4],M=p[8],v=p[1],S=p[5],w=p[9],N=p[2],y=p[6],x=p[10];if(Math.abs(_-v)<.01&&Math.abs(M-N)<.01&&Math.abs(w-y)<.01){if(Math.abs(_+v)<.1&&Math.abs(M+N)<.1&&Math.abs(w+y)<.1&&Math.abs(m+S+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const F=(m+1)/2,D=(S+1)/2,O=(x+1)/2,I=(_+v)/4,T=(M+N)/4,E=(w+y)/4;return F>D&&F>O?F<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(F),o=I/r,l=T/r):D>O?D<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(D),r=I/o,l=E/o):O<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(O),r=T/l,o=E/l),this.set(r,o,l,t),this}let P=Math.sqrt((y-w)*(y-w)+(M-N)*(M-N)+(v-_)*(v-_));return Math.abs(P)<.001&&(P=1),this.x=(y-w)/P,this.y=(M-N)/P,this.z=(v-_)/P,this.w=Math.acos((m+S+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this.w=Ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this.w=Ct(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ct(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ff.prototype.isVector4=!0;let dn=ff;class qx extends os{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ni,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new dn(0,0,e,t),this.scissorTest=!1,this.viewport=new dn(0,0,e,t),this.textures=[];const o=r.count;for(let l=0;l<o;l++)this.textures[l]=new $n({width:e,height:t,depth:r.depth}),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:ni,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new ef(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rr extends qx{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class bg extends $n{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $x extends $n{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Nc=class Nc{constructor(e,t,r,o,l,u,d,p,m,_,M,v,S,w,N,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,p,m,_,M,v,S,w,N,y)}set(e,t,r,o,l,u,d,p,m,_,M,v,S,w,N,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=r,x[12]=o,x[1]=l,x[5]=u,x[9]=d,x[13]=p,x[2]=m,x[6]=_,x[10]=M,x[14]=v,x[3]=S,x[7]=w,x[11]=N,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/ta.setFromMatrixColumn(e,0).length(),l=1/ta.setFromMatrixColumn(e,1).length(),u=1/ta.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),p=Math.cos(o),m=Math.sin(o),_=Math.cos(l),M=Math.sin(l);if(e.order==="XYZ"){const v=u*_,S=u*M,w=d*_,N=d*M;t[0]=p*_,t[4]=-p*M,t[8]=m,t[1]=S+w*m,t[5]=v-N*m,t[9]=-d*p,t[2]=N-v*m,t[6]=w+S*m,t[10]=u*p}else if(e.order==="YXZ"){const v=p*_,S=p*M,w=m*_,N=m*M;t[0]=v+N*d,t[4]=w*d-S,t[8]=u*m,t[1]=u*M,t[5]=u*_,t[9]=-d,t[2]=S*d-w,t[6]=N+v*d,t[10]=u*p}else if(e.order==="ZXY"){const v=p*_,S=p*M,w=m*_,N=m*M;t[0]=v-N*d,t[4]=-u*M,t[8]=w+S*d,t[1]=S+w*d,t[5]=u*_,t[9]=N-v*d,t[2]=-u*m,t[6]=d,t[10]=u*p}else if(e.order==="ZYX"){const v=u*_,S=u*M,w=d*_,N=d*M;t[0]=p*_,t[4]=w*m-S,t[8]=v*m+N,t[1]=p*M,t[5]=N*m+v,t[9]=S*m-w,t[2]=-m,t[6]=d*p,t[10]=u*p}else if(e.order==="YZX"){const v=u*p,S=u*m,w=d*p,N=d*m;t[0]=p*_,t[4]=N-v*M,t[8]=w*M+S,t[1]=M,t[5]=u*_,t[9]=-d*_,t[2]=-m*_,t[6]=S*M+w,t[10]=v-N*M}else if(e.order==="XZY"){const v=u*p,S=u*m,w=d*p,N=d*m;t[0]=p*_,t[4]=-M,t[8]=m*_,t[1]=v*M+N,t[5]=u*_,t[9]=S*M-w,t[2]=w*M-S,t[6]=d*_,t[10]=N*M+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zx,e,Qx)}lookAt(e,t,r){const o=this.elements;return vi.subVectors(e,t),vi.lengthSq()===0&&(vi.z=1),vi.normalize(),Yr.crossVectors(r,vi),Yr.lengthSq()===0&&(Math.abs(r.z)===1?vi.x+=1e-4:vi.z+=1e-4,vi.normalize(),Yr.crossVectors(r,vi)),Yr.normalize(),Ll.crossVectors(vi,Yr),o[0]=Yr.x,o[4]=Ll.x,o[8]=vi.x,o[1]=Yr.y,o[5]=Ll.y,o[9]=vi.y,o[2]=Yr.z,o[6]=Ll.z,o[10]=vi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[4],p=r[8],m=r[12],_=r[1],M=r[5],v=r[9],S=r[13],w=r[2],N=r[6],y=r[10],x=r[14],P=r[3],F=r[7],D=r[11],O=r[15],I=o[0],T=o[4],E=o[8],K=o[12],B=o[1],G=o[5],$=o[9],re=o[13],H=o[2],de=o[6],Y=o[10],ee=o[14],ne=o[3],Q=o[7],te=o[11],U=o[15];return l[0]=u*I+d*B+p*H+m*ne,l[4]=u*T+d*G+p*de+m*Q,l[8]=u*E+d*$+p*Y+m*te,l[12]=u*K+d*re+p*ee+m*U,l[1]=_*I+M*B+v*H+S*ne,l[5]=_*T+M*G+v*de+S*Q,l[9]=_*E+M*$+v*Y+S*te,l[13]=_*K+M*re+v*ee+S*U,l[2]=w*I+N*B+y*H+x*ne,l[6]=w*T+N*G+y*de+x*Q,l[10]=w*E+N*$+y*Y+x*te,l[14]=w*K+N*re+y*ee+x*U,l[3]=P*I+F*B+D*H+O*ne,l[7]=P*T+F*G+D*de+O*Q,l[11]=P*E+F*$+D*Y+O*te,l[15]=P*K+F*re+D*ee+O*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],d=e[5],p=e[9],m=e[13],_=e[2],M=e[6],v=e[10],S=e[14],w=e[3],N=e[7],y=e[11],x=e[15],P=p*S-m*v,F=d*S-m*M,D=d*v-p*M,O=u*S-m*_,I=u*v-p*_,T=u*M-d*_;return t*(N*P-y*F+x*D)-r*(w*P-y*O+x*I)+o*(w*F-N*O+x*T)-l*(w*D-N*I+y*T)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[1],u=e[5],d=e[9],p=e[2],m=e[6],_=e[10];return t*(u*_-d*m)-r*(l*_-d*p)+o*(l*m-u*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],p=e[6],m=e[7],_=e[8],M=e[9],v=e[10],S=e[11],w=e[12],N=e[13],y=e[14],x=e[15],P=t*d-r*u,F=t*p-o*u,D=t*m-l*u,O=r*p-o*d,I=r*m-l*d,T=o*m-l*p,E=_*N-M*w,K=_*y-v*w,B=_*x-S*w,G=M*y-v*N,$=M*x-S*N,re=v*x-S*y,H=P*re-F*$+D*G+O*B-I*K+T*E;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const de=1/H;return e[0]=(d*re-p*$+m*G)*de,e[1]=(o*$-r*re-l*G)*de,e[2]=(N*T-y*I+x*O)*de,e[3]=(v*I-M*T-S*O)*de,e[4]=(p*B-u*re-m*K)*de,e[5]=(t*re-o*B+l*K)*de,e[6]=(y*D-w*T-x*F)*de,e[7]=(_*T-v*D+S*F)*de,e[8]=(u*$-d*B+m*E)*de,e[9]=(r*B-t*$-l*E)*de,e[10]=(w*I-N*D+x*P)*de,e[11]=(M*D-_*I-S*P)*de,e[12]=(d*K-u*G-p*E)*de,e[13]=(t*G-r*K+o*E)*de,e[14]=(N*F-w*O-y*P)*de,e[15]=(_*O-M*F+v*P)*de,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,d=e.y,p=e.z,m=l*u,_=l*d;return this.set(m*u+r,m*d-o*p,m*p+o*d,0,m*d+o*p,_*d+r,_*p-o*u,0,m*p-o*d,_*p+o*u,l*p*p+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,d=t._z,p=t._w,m=l+l,_=u+u,M=d+d,v=l*m,S=l*_,w=l*M,N=u*_,y=u*M,x=d*M,P=p*m,F=p*_,D=p*M,O=r.x,I=r.y,T=r.z;return o[0]=(1-(N+x))*O,o[1]=(S+D)*O,o[2]=(w-F)*O,o[3]=0,o[4]=(S-D)*I,o[5]=(1-(v+x))*I,o[6]=(y+P)*I,o[7]=0,o[8]=(w+F)*T,o[9]=(y-P)*T,o[10]=(1-(v+N))*T,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let u=ta.set(o[0],o[1],o[2]).length();const d=ta.set(o[4],o[5],o[6]).length(),p=ta.set(o[8],o[9],o[10]).length();l<0&&(u=-u),ki.copy(this);const m=1/u,_=1/d,M=1/p;return ki.elements[0]*=m,ki.elements[1]*=m,ki.elements[2]*=m,ki.elements[4]*=_,ki.elements[5]*=_,ki.elements[6]*=_,ki.elements[8]*=M,ki.elements[9]*=M,ki.elements[10]*=M,t.setFromRotationMatrix(ki),r.x=u,r.y=d,r.z=p,this}makePerspective(e,t,r,o,l,u,d=Wi,p=!1){const m=this.elements,_=2*l/(t-e),M=2*l/(r-o),v=(t+e)/(t-e),S=(r+o)/(r-o);let w,N;if(p)w=l/(u-l),N=u*l/(u-l);else if(d===Wi)w=-(u+l)/(u-l),N=-2*u*l/(u-l);else if(d===wo)w=-u/(u-l),N=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=_,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=M,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=w,m[14]=N,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,r,o,l,u,d=Wi,p=!1){const m=this.elements,_=2/(t-e),M=2/(r-o),v=-(t+e)/(t-e),S=-(r+o)/(r-o);let w,N;if(p)w=1/(u-l),N=u/(u-l);else if(d===Wi)w=-2/(u-l),N=-(u+l)/(u-l);else if(d===wo)w=-1/(u-l),N=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=_,m[4]=0,m[8]=0,m[12]=v,m[1]=0,m[5]=M,m[9]=0,m[13]=S,m[2]=0,m[6]=0,m[10]=w,m[14]=N,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};Nc.prototype.isMatrix4=!0;let tn=Nc;const ta=new C,ki=new tn,Zx=new C(0,0,0),Qx=new C(1,1,1),Yr=new C,Ll=new C,vi=new C,Zm=new tn,Qm=new ss;class as{constructor(e=0,t=0,r=0,o=as.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],d=o[8],p=o[1],m=o[5],_=o[9],M=o[2],v=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(Ct(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-M,l),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-M,S),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Ct(M,-1,1)),Math.abs(M)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(Ct(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-M,l)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-_,S),this._y=0);break;default:mt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Zm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qm.setFromEuler(this),this.setFromQuaternion(Qm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}as.DEFAULT_ORDER="XYZ";class tf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Jx=0;const Jm=new C,na=new ss,_r=new tn,Il=new C,ao=new C,ey=new C,ty=new ss,e0=new C(1,0,0),t0=new C(0,1,0),n0=new C(0,0,1),i0={type:"added"},ny={type:"removed"},ia={type:"childadded",child:null},Ch={type:"childremoved",child:null};class Cn extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jx++}),this.uuid=Ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();const e=new C,t=new as,r=new ss,o=new C(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new tn},normalMatrix:{value:new xt}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return na.setFromAxisAngle(e,t),this.quaternion.multiply(na),this}rotateOnWorldAxis(e,t){return na.setFromAxisAngle(e,t),this.quaternion.premultiply(na),this}rotateX(e){return this.rotateOnAxis(e0,e)}rotateY(e){return this.rotateOnAxis(t0,e)}rotateZ(e){return this.rotateOnAxis(n0,e)}translateOnAxis(e,t){return Jm.copy(e).applyQuaternion(this.quaternion),this.position.add(Jm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(e0,e)}translateY(e){return this.translateOnAxis(t0,e)}translateZ(e){return this.translateOnAxis(n0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_r.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Il.copy(e):Il.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_r.lookAt(ao,Il,this.up):_r.lookAt(Il,ao,this.up),this.quaternion.setFromRotationMatrix(_r),o&&(_r.extractRotation(o.matrixWorld),na.setFromRotationMatrix(_r),this.quaternion.premultiply(na.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(i0),ia.child=e,this.dispatchEvent(ia),ia.child=null):Ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ny),Ch.child=e,this.dispatchEvent(Ch),Ch.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_r.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_r.multiply(e.parent.matrixWorld)),e.applyMatrix4(_r),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(i0),ia.child=e,this.dispatchEvent(ia),ia.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,e,ey),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,ty,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const M=p[m];l(e.shapes,M)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(l(e.materials,this.material[p]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];o.animations.push(l(e.animations,p))}}if(t){const d=u(e.geometries),p=u(e.materials),m=u(e.textures),_=u(e.images),M=u(e.shapes),v=u(e.skeletons),S=u(e.animations),w=u(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),M.length>0&&(r.shapes=M),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),w.length>0&&(r.nodes=w)}return r.object=o,r;function u(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Cn.DEFAULT_UP=new C(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class qn extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iy={type:"move"};class Ah{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const N of e.hand.values()){const y=t.getJointPose(N,r),x=this._getHandJoint(m,N);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const _=m.joints["index-finger-tip"],M=m.joints["thumb-tip"],v=_.position.distanceTo(M.position),S=.02,w=.005;m.inputState.pinching&&v>S+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&v<=S-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(iy)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new qn;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Ng={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qr={h:0,s:0,l:0},Ul={h:0,s:0,l:0};function bh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class At{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Dt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Dt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Dt.workingColorSpace){if(e=Vx(e,1),t=Ct(t,0,1),r=Ct(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=bh(u,l,e+1/3),this.g=bh(u,l,e),this.b=bh(u,l,e-1/3)}return Dt.colorSpaceToWorking(this,o),this}setStyle(e,t=Ri){function r(l){l!==void 0&&parseFloat(l)<1&&mt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseFloat(l[1]))/100,Math.min(100,parseFloat(l[2]))/100,Math.min(100,parseFloat(l[3]))/100,t);break;case"hsl":case"hsla":if(l=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:mt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);mt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ri){const r=Ng[e.toLowerCase()];return r!==void 0?this.setHex(r,t):mt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ar(e.r),this.g=Ar(e.g),this.b=Ar(e.b),this}copyLinearToSRGB(e){return this.r=Ma(e.r),this.g=Ma(e.g),this.b=Ma(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ri){return Dt.workingToColorSpace(Yn.copy(this),e),Math.round(Ct(Yn.r*255,0,255))*65536+Math.round(Ct(Yn.g*255,0,255))*256+Math.round(Ct(Yn.b*255,0,255))}getHexString(e=Ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Dt.workingColorSpace){Dt.workingToColorSpace(Yn.copy(this),t);const r=Yn.r,o=Yn.g,l=Yn.b,u=Math.max(r,o,l),d=Math.min(r,o,l);let p,m;const _=(d+u)/2;if(d===u)p=0,m=0;else{const M=u-d;switch(m=_<=.5?M/(u+d):M/(2-u-d),u){case r:p=(o-l)/M+(o<l?6:0);break;case o:p=(l-r)/M+2;break;case l:p=(r-o)/M+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,t=Dt.workingColorSpace){return Dt.workingToColorSpace(Yn.copy(this),t),e.r=Yn.r,e.g=Yn.g,e.b=Yn.b,e}getStyle(e=Ri){Dt.workingToColorSpace(Yn.copy(this),e);const t=Yn.r,r=Yn.g,o=Yn.b;return e!==Ri?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(qr),this.setHSL(qr.h+e,qr.s+t,qr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(qr),e.getHSL(Ul);const r=Sh(qr.h,Ul.h,t),o=Sh(qr.s,Ul.s,t),l=Sh(qr.l,Ul.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yn=new At;At.NAMES=Ng;class ry extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new as,this.environmentIntensity=1,this.environmentRotation=new as,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Bi=new C,xr=new C,Nh=new C,yr=new C,ra=new C,sa=new C,r0=new C,Rh=new C,Ph=new C,Dh=new C,Lh=new dn,Ih=new dn,Uh=new dn;class yi{constructor(e=new C,t=new C,r=new C){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Bi.subVectors(e,t),o.cross(Bi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Bi.subVectors(o,t),xr.subVectors(r,t),Nh.subVectors(e,t);const u=Bi.dot(Bi),d=Bi.dot(xr),p=Bi.dot(Nh),m=xr.dot(xr),_=xr.dot(Nh),M=u*m-d*d;if(M===0)return l.set(0,0,0),null;const v=1/M,S=(m*p-d*_)*v,w=(u*_-d*p)*v;return l.set(1-S-w,w,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,yr)===null?!1:yr.x>=0&&yr.y>=0&&yr.x+yr.y<=1}static getInterpolation(e,t,r,o,l,u,d,p){return this.getBarycoord(e,t,r,o,yr)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,yr.x),p.addScaledVector(u,yr.y),p.addScaledVector(d,yr.z),p)}static getInterpolatedAttribute(e,t,r,o,l,u){return Lh.setScalar(0),Ih.setScalar(0),Uh.setScalar(0),Lh.fromBufferAttribute(e,t),Ih.fromBufferAttribute(e,r),Uh.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Lh,l.x),u.addScaledVector(Ih,l.y),u.addScaledVector(Uh,l.z),u}static isFrontFacing(e,t,r,o){return Bi.subVectors(r,t),xr.subVectors(e,t),Bi.cross(xr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bi.subVectors(this.c,this.b),xr.subVectors(this.a,this.b),Bi.cross(xr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return yi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,d;ra.subVectors(o,r),sa.subVectors(l,r),Rh.subVectors(e,r);const p=ra.dot(Rh),m=sa.dot(Rh);if(p<=0&&m<=0)return t.copy(r);Ph.subVectors(e,o);const _=ra.dot(Ph),M=sa.dot(Ph);if(_>=0&&M<=_)return t.copy(o);const v=p*M-_*m;if(v<=0&&p>=0&&_<=0&&p-_>0)return u=p/(p-_),t.copy(r).addScaledVector(ra,u);Dh.subVectors(e,l);const S=ra.dot(Dh),w=sa.dot(Dh);if(w>=0&&S<=w)return t.copy(l);const N=S*m-p*w;if(N<=0&&m>=0&&w<=0)return d=m/(m-w),t.copy(r).addScaledVector(sa,d);const y=_*w-S*M;if(y<=0&&M-_>=0&&S-w>=0)return r0.subVectors(l,o),d=(M-_)/(M-_+(S-w)),t.copy(o).addScaledVector(r0,d);const x=1/(y+N+v);return u=N*x,d=v*x,t.copy(r).addScaledVector(ra,u).addScaledVector(sa,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ao{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,zi):zi.fromBufferAttribute(l,u),zi.applyMatrix4(e.matrixWorld),this.expandByPoint(zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ol.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ol.copy(r.boundingBox)),Ol.applyMatrix4(e.matrixWorld),this.union(Ol)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oo),Fl.subVectors(this.max,oo),aa.subVectors(e.a,oo),oa.subVectors(e.b,oo),la.subVectors(e.c,oo),$r.subVectors(oa,aa),Zr.subVectors(la,oa),Ss.subVectors(aa,la);let t=[0,-$r.z,$r.y,0,-Zr.z,Zr.y,0,-Ss.z,Ss.y,$r.z,0,-$r.x,Zr.z,0,-Zr.x,Ss.z,0,-Ss.x,-$r.y,$r.x,0,-Zr.y,Zr.x,0,-Ss.y,Ss.x,0];return!Oh(t,aa,oa,la,Fl)||(t=[1,0,0,0,1,0,0,0,1],!Oh(t,aa,oa,la,Fl))?!1:(kl.crossVectors($r,Zr),t=[kl.x,kl.y,kl.z],Oh(t,aa,oa,la,Fl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Sr=[new C,new C,new C,new C,new C,new C,new C,new C],zi=new C,Ol=new Ao,aa=new C,oa=new C,la=new C,$r=new C,Zr=new C,Ss=new C,oo=new C,Fl=new C,kl=new C,Ms=new C;function Oh(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){Ms.fromArray(s,l);const d=o.x*Math.abs(Ms.x)+o.y*Math.abs(Ms.y)+o.z*Math.abs(Ms.z),p=e.dot(Ms),m=t.dot(Ms),_=r.dot(Ms);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const xn=new C,Bl=new Xe;let sy=0;class is extends os{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Eg,this.updateRanges=[],this.gpuType=nr,this.version=0,this._normalizationScale=e!==void 0?Rc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Bl.fromBufferAttribute(this,t),Bl.applyMatrix3(e),this.setXY(t,Bl.x,Bl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix3(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o),l=this._normalize(l)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Cg(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ag(e,this.array)}}class Rg extends is{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Pg extends is{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Yt extends is{constructor(e,t,r){super(new Float32Array(e),t,r)}}const ay=new Ao,lo=new C,Fh=new C;class Pc{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):ay.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lo.subVectors(e,this.center);const t=lo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(lo,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lo.copy(e.center).add(Fh)),this.expandByPoint(lo.copy(e.center).sub(Fh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let oy=0;const Ni=new tn,kh=new Cn,ca=new C,_i=new Ao,co=new Ao,Ln=new C;class Zn extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oy++}),this.uuid=Ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kx(e)?Pg:Rg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new xt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ni.makeRotationFromQuaternion(e),this.applyMatrix4(Ni),this}rotateX(e){return Ni.makeRotationX(e),this.applyMatrix4(Ni),this}rotateY(e){return Ni.makeRotationY(e),this.applyMatrix4(Ni),this}rotateZ(e){return Ni.makeRotationZ(e),this.applyMatrix4(Ni),this}translate(e,t,r){return Ni.makeTranslation(e,t,r),this.applyMatrix4(Ni),this}scale(e,t,r){return Ni.makeScale(e,t,r),this.applyMatrix4(Ni),this}lookAt(e){return kh.lookAt(e),kh.updateMatrix(),this.applyMatrix4(kh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ca).negate(),this.translate(ca.x,ca.y,ca.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Yt(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&mt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ao);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];_i.setFromBufferAttribute(l),this.morphTargetsRelative?(Ln.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(Ln),Ln.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(Ln)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const r=this.boundingSphere.center;if(_i.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];co.setFromBufferAttribute(d),this.morphTargetsRelative?(Ln.addVectors(_i.min,co.min),_i.expandByPoint(Ln),Ln.addVectors(_i.max,co.max),_i.expandByPoint(Ln)):(_i.expandByPoint(co.min),_i.expandByPoint(co.max))}_i.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)Ln.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(Ln));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)Ln.fromBufferAttribute(d,m),p&&(ca.fromBufferAttribute(e,m),Ln.add(ca)),o=Math.max(o,r.distanceToSquared(Ln))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new is(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const d=[],p=[],m=new Uint8Array(r.count);for(let K=0;K<r.count;K++)d[K]=new C,p[K]=new C;const _=new C,M=new C,v=new C,S=new Xe,w=new Xe,N=new Xe,y=new C,x=new C;function P(K,B,G){m[K]=m[B]=m[G]=1,_.fromBufferAttribute(r,K),M.fromBufferAttribute(r,B),v.fromBufferAttribute(r,G),S.fromBufferAttribute(l,K),w.fromBufferAttribute(l,B),N.fromBufferAttribute(l,G),M.sub(_),v.sub(_),w.sub(S),N.sub(S);const $=1/(w.x*N.y-N.x*w.y);isFinite($)&&(y.copy(M).multiplyScalar(N.y).addScaledVector(v,-w.y).multiplyScalar($),x.copy(v).multiplyScalar(w.x).addScaledVector(M,-N.x).multiplyScalar($),d[K].add(y),d[B].add(y),d[G].add(y),p[K].add(x),p[B].add(x),p[G].add(x))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let K=0,B=F.length;K<B;++K){const G=F[K],$=G.start,re=G.count;for(let H=$,de=$+re;H<de;H+=3)P(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const D=new C,O=new C,I=new C,T=new C;function E(K){I.fromBufferAttribute(o,K),T.copy(I);const B=d[K];D.copy(B),D.sub(I.multiplyScalar(I.dot(B))).normalize(),O.crossVectors(T,B);const $=O.dot(p[K])<0?-1:1;u.setXYZW(K,D.x,D.y,D.z,$)}for(let K=0,B=r.count;K<B;++K)m[K]&&E(K);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new is(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const o=new C,l=new C,u=new C,d=new C,p=new C,m=new C,_=new C,M=new C;if(e)for(let v=0,S=e.count;v<S;v+=3){const w=e.getX(v+0),N=e.getX(v+1),y=e.getX(v+2);o.fromBufferAttribute(t,w),l.fromBufferAttribute(t,N),u.fromBufferAttribute(t,y),_.subVectors(u,l),M.subVectors(o,l),_.cross(M),d.fromBufferAttribute(r,w),p.fromBufferAttribute(r,N),m.fromBufferAttribute(r,y),d.add(_),p.add(_),m.add(_),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(N,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let v=0,S=t.count;v<S;v+=3)o.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),_.subVectors(u,l),M.subVectors(o,l),_.cross(M),r.setXYZ(v+0,_.x,_.y,_.z),r.setXYZ(v+1,_.x,_.y,_.z),r.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Ln.fromBufferAttribute(e,t),Ln.normalize(),e.setXYZ(t,Ln.x,Ln.y,Ln.z)}toNonIndexed(){function e(d,p){const m=d.array,_=d.itemSize,M=d.normalized,v=new m.constructor(p.length*_);let S=0,w=0;for(let N=0,y=p.length;N<y;N++){d.isInterleavedBufferAttribute?S=p[N]*d.data.stride+d.offset:S=p[N]*_;for(let x=0;x<_;x++)v[w++]=m[S++]}return new is(v,_,M)}if(this.index===null)return mt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zn,r=this.index.array,o=this.attributes;for(const d in o){const p=o[d],m=e(p,r);t.setAttribute(d,m)}const l=this.morphAttributes;for(const d in l){const p=[],m=l[d];for(let _=0,M=m.length;_<M;_++){const v=m[_],S=e(v,r);p.push(S)}t.morphAttributes[d]=p}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,p=u.length;d<p;d++){const m=u[d];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let M=0,v=m.length;M<v;M++){const S=m[M];_.push(S.toJSON(e.data))}_.length>0&&(o[p]=_,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const _=o[m];this.setAttribute(m,_.clone(t))}const l=e.morphAttributes;for(const m in l){const _=[],M=l[m];for(let v=0,S=M.length;v<S;v++)_.push(M[v].clone(t));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,_=u.length;m<_;m++){const M=u[m];this.addGroup(M.start,M.count,M.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ly{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Eg,this.updateRanges=[],this.version=0,this.uuid=Ns()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let o=0,l=this.stride;o<l;o++)this.array[e+o]=t.array[r+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=s0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const r=new this.array.constructor(e.arrayBuffers[t]),o=new this.constructor(r,this.stride);return o.setUsage(this.usage),o}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=s0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const r={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return r.usage=this.usage,r}}function s0(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Ns()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}const ei=new C;class Tc{constructor(e,t,r,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=o,this._normalizationScale=e!==void 0?Rc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)ei.fromBufferAttribute(this,t),ei.applyMatrix4(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)ei.fromBufferAttribute(this,t),ei.applyNormalMatrix(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)ei.fromBufferAttribute(this,t),ei.transformDirection(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o),l=this._normalize(l)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this.data.array[e+3]=l,this}clone(e){if(e===void 0){Mc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return new is(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Tc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Mc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Cg(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ag(e,this.data.array)}}const Bh=new C,cy=new C,uy=new xt;class Tr{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Bh.subVectors(r,t).cross(cy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(Bh),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||uy.getNormalMatrix(e),o=this.coplanarPoint(Bh).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let hy=0;class Rs extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=Ns(),this.name="",this.type="Material",this.blending=_o,this.side=Cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rg,this.blendDst=sg,this.blendEquation=ga,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yh,this.stencilZFail=yh,this.stencilZPass=yh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){mt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){mt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(r.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(r.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(r.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(r.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const d in l){const p=l[d];delete p.metadata,u.push(p)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new At().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Tr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Xe().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class zd extends Rs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ua;const uo=new C,ha=new C,da=new C,fa=new Xe,ho=new Xe,Dg=new tn,zl=new C,fo=new C,Hl=new C,a0=new Xe,zh=new Xe,o0=new Xe;class l0 extends Cn{constructor(e=new zd){if(super(),this.isSprite=!0,this.type="Sprite",ua===void 0){ua=new Zn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new ly(t,5);ua.setIndex([0,1,2,0,2,3]),ua.setAttribute("position",new Tc(r,3,0,!1)),ua.setAttribute("uv",new Tc(r,2,3,!1))}this.geometry=ua,this.material=e,this.center=new Xe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ot('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ha.setFromMatrixScale(this.matrixWorld),Dg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),da.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ha.multiplyScalar(-da.z);const r=this.material.rotation;let o,l;r!==0&&(l=Math.cos(r),o=Math.sin(r));const u=this.center;Vl(zl.set(-.5,-.5,0),da,u,ha,o,l),Vl(fo.set(.5,-.5,0),da,u,ha,o,l),Vl(Hl.set(.5,.5,0),da,u,ha,o,l),a0.set(0,0),zh.set(1,0),o0.set(1,1);let d=e.ray.intersectTriangle(zl,fo,Hl,!1,uo);if(d===null&&(Vl(fo.set(-.5,.5,0),da,u,ha,o,l),zh.set(0,1),d=e.ray.intersectTriangle(zl,Hl,fo,!1,uo),d===null))return;const p=e.ray.origin.distanceTo(uo);p<e.near||p>e.far||t.push({distance:p,point:uo.clone(),uv:yi.getInterpolation(uo,zl,fo,Hl,a0,zh,o0,new Xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){const t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function Vl(s,e,t,r,o,l){fa.subVectors(s,t).addScalar(.5).multiply(r),o!==void 0?(ho.x=l*fa.x-o*fa.y,ho.y=o*fa.x+l*fa.y):ho.copy(fa),s.copy(e),s.x+=ho.x,s.y+=ho.y,s.applyMatrix4(Dg)}const Mr=new C,Hh=new C,Gl=new C,Wl=new C;class Dc{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mr.copy(this.origin).addScaledVector(this.direction,t),Mr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Hh.copy(e).add(t).multiplyScalar(.5),Gl.copy(t).sub(e).normalize(),Wl.copy(this.origin).sub(Hh);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Gl),d=Wl.dot(this.direction),p=-Wl.dot(Gl),m=Wl.lengthSq(),_=Math.abs(1-u*u);let M,v,S,w;if(_>0)if(M=u*p-d,v=u*d-p,w=l*_,M>=0)if(v>=-w)if(v<=w){const N=1/_;M*=N,v*=N,S=M*(M+u*v+2*d)+v*(u*M+v+2*p)+m}else v=l,M=Math.max(0,-(u*v+d)),S=-M*M+v*(v+2*p)+m;else v=-l,M=Math.max(0,-(u*v+d)),S=-M*M+v*(v+2*p)+m;else v<=-w?(M=Math.max(0,-(-u*l+d)),v=M>0?-l:Math.min(Math.max(-l,-p),l),S=-M*M+v*(v+2*p)+m):v<=w?(M=0,v=Math.min(Math.max(-l,-p),l),S=v*(v+2*p)+m):(M=Math.max(0,-(u*l+d)),v=M>0?l:Math.min(Math.max(-l,-p),l),S=-M*M+v*(v+2*p)+m);else v=u>0?-l:l,M=Math.max(0,-(u*v+d)),S=-M*M+v*(v+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,M),o&&o.copy(Hh).addScaledVector(Gl,v),S}intersectSphere(e,t){if(e.radius<0)return null;Mr.subVectors(e.center,this.origin);const r=Mr.dot(this.direction),o=Mr.dot(Mr)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),d=r-u,p=r+u;return p<0?null:d<0?this.at(p,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,d,p;const m=1/this.direction.x,_=1/this.direction.y,M=1/this.direction.z,v=this.origin;return m>=0?(r=(e.min.x-v.x)*m,o=(e.max.x-v.x)*m):(r=(e.max.x-v.x)*m,o=(e.min.x-v.x)*m),_>=0?(l=(e.min.y-v.y)*_,u=(e.max.y-v.y)*_):(l=(e.max.y-v.y)*_,u=(e.min.y-v.y)*_),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),M>=0?(d=(e.min.z-v.z)*M,p=(e.max.z-v.z)*M):(d=(e.max.z-v.z)*M,p=(e.min.z-v.z)*M),r>p||d>o)||((d>r||r!==r)&&(r=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Mr)!==null}intersectTriangle(e,t,r,o,l){const u=this.origin,d=this.direction,p=d.x,m=d.y,_=d.z,M=e.x-u.x,v=e.y-u.y,S=e.z-u.z,w=t.x-u.x,N=t.y-u.y,y=t.z-u.z,x=r.x-u.x,P=r.y-u.y,F=r.z-u.z,D=Math.abs(p),O=Math.abs(m),I=Math.abs(_);let T,E,K,B,G,$,re,H,de,Y,ee,ne;if(D>=O&&D>=I?(K=p,$=M,de=w,ne=x,p>=0?(T=m,E=_,B=v,G=S,re=N,H=y,Y=P,ee=F):(T=_,E=m,B=S,G=v,re=y,H=N,Y=F,ee=P)):O>=I?(K=m,$=v,de=N,ne=P,m>=0?(T=_,E=p,B=S,G=M,re=y,H=w,Y=F,ee=x):(T=p,E=_,B=M,G=S,re=w,H=y,Y=x,ee=F)):(K=_,$=S,de=y,ne=F,_>=0?(T=p,E=m,B=M,G=v,re=w,H=N,Y=x,ee=P):(T=m,E=p,B=v,G=M,re=N,H=w,Y=P,ee=x)),K===0)return null;const Q=T/K,te=E/K,U=1/K,ie=B-Q*$,Oe=G-te*$,le=re-Q*de,Te=H-te*de,be=Y-Q*ne,He=ee-te*ne,Ee=be*Te-He*le,Ke=ie*He-Oe*be,Ze=le*Oe-Te*ie;if(o){if(Ee<0||Ke<0||Ze<0)return null}else if((Ee<0||Ke<0||Ze<0)&&(Ee>0||Ke>0||Ze>0))return null;const Ye=Ee+Ke+Ze;if(Ye===0)return null;const ut=U*(Ee*$+Ke*de+Ze*ne);return(Ye>0?ut<0:ut>0)?null:this.at(ut/Ye,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class va extends Rs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new as,this.combine=ag,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const c0=new tn,Ts=new Dc,jl=new Pc,u0=new C,Xl=new C,Kl=new C,Yl=new C,Vh=new C,ql=new C,h0=new C,$l=new C;class Ut extends Cn{constructor(e=new Zn,t=new va){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){ql.set(0,0,0);for(let p=0,m=l.length;p<m;p++){const _=d[p],M=l[p];_!==0&&(Vh.fromBufferAttribute(M,e),u?ql.addScaledVector(Vh,_):ql.addScaledVector(Vh.sub(t),_))}t.add(ql)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),jl.copy(r.boundingSphere),jl.applyMatrix4(l),Ts.copy(e.ray).recast(e.near),!(jl.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(jl,u0)===null||Ts.origin.distanceToSquared(u0)>(e.far-e.near)**2))&&(c0.copy(l).invert(),Ts.copy(e.ray).applyMatrix4(c0),!(r.boundingBox!==null&&Ts.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Ts)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,d=l.index,p=l.attributes.position,m=l.attributes.uv,_=l.attributes.uv1,M=l.attributes.normal,v=l.groups,S=l.drawRange;if(d!==null)if(Array.isArray(u))for(let w=0,N=v.length;w<N;w++){const y=v[w],x=u[y.materialIndex],P=Math.max(y.start,S.start),F=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let D=P,O=F;D<O;D+=3){const I=d.getX(D),T=d.getX(D+1),E=d.getX(D+2);o=Zl(this,x,e,r,m,_,M,I,T,E),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const w=Math.max(0,S.start),N=Math.min(d.count,S.start+S.count);for(let y=w,x=N;y<x;y+=3){const P=d.getX(y),F=d.getX(y+1),D=d.getX(y+2);o=Zl(this,u,e,r,m,_,M,P,F,D),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let w=0,N=v.length;w<N;w++){const y=v[w],x=u[y.materialIndex],P=Math.max(y.start,S.start),F=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let D=P,O=F;D<O;D+=3){const I=D,T=D+1,E=D+2;o=Zl(this,x,e,r,m,_,M,I,T,E),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const w=Math.max(0,S.start),N=Math.min(p.count,S.start+S.count);for(let y=w,x=N;y<x;y+=3){const P=y,F=y+1,D=y+2;o=Zl(this,u,e,r,m,_,M,P,F,D),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function dy(s,e,t,r,o,l,u,d){let p;if(e.side===hi?p=r.intersectTriangle(u,l,o,!0,d):p=r.intersectTriangle(o,l,u,e.side===Cs,d),p===null)return null;$l.copy(d),$l.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo($l);return m<t.near||m>t.far?null:{distance:m,point:$l.clone(),object:s}}function Zl(s,e,t,r,o,l,u,d,p,m){s.getVertexPosition(d,Xl),s.getVertexPosition(p,Kl),s.getVertexPosition(m,Yl);const _=dy(s,e,t,r,Xl,Kl,Yl,h0);if(_){const M=new C;yi.getBarycoord(h0,Xl,Kl,Yl,M),o&&(_.uv=yi.getInterpolatedAttribute(o,d,p,m,M,new Xe)),l&&(_.uv1=yi.getInterpolatedAttribute(l,d,p,m,M,new Xe)),u&&(_.normal=yi.getInterpolatedAttribute(u,d,p,m,M,new C),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const v={a:d,b:p,c:m,normal:new C,materialIndex:0};yi.getNormal(Xl,Kl,Yl,v.normal),_.face=v,_.barycoord=M}return _}class fy extends $n{constructor(e=null,t=1,r=1,o,l,u,d,p,m=Bn,_=Bn,M,v){super(null,u,d,p,m,_,o,l,M,v),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Es=new Pc,py=new Xe(.5,.5),Ql=new C;class Co{constructor(e=new Tr,t=new Tr,r=new Tr,o=new Tr,l=new Tr,u=new Tr){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(o),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Wi,r=!1){const o=this.planes,l=e.elements,u=l[0],d=l[1],p=l[2],m=l[3],_=l[4],M=l[5],v=l[6],S=l[7],w=l[8],N=l[9],y=l[10],x=l[11],P=l[12],F=l[13],D=l[14],O=l[15];if(o[0].setComponents(m-u,S-_,x-w,O-P).normalize(),o[1].setComponents(m+u,S+_,x+w,O+P).normalize(),o[2].setComponents(m+d,S+M,x+N,O+F).normalize(),o[3].setComponents(m-d,S-M,x-N,O-F).normalize(),r)o[4].setComponents(p,v,y,D).normalize(),o[5].setComponents(m-p,S-v,x-y,O-D).normalize();else if(o[4].setComponents(m-p,S-v,x-y,O-D).normalize(),t===Wi)o[5].setComponents(m+p,S+v,x+y,O+D).normalize();else if(t===wo)o[5].setComponents(p,v,y,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(e){Es.center.set(0,0,0);const t=py.distanceTo(e.center);return Es.radius=.7071067811865476+t,Es.applyMatrix4(e.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Ql.x=o.normal.x>0?e.max.x:e.min.x,Ql.y=o.normal.y>0?e.max.y:e.min.y,Ql.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ql)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const d0=new tn;class nf{constructor(){this.coordinateSystem=Wi,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,r=this._frustums;for(let o=0;o<t.length;o++){const l=t[o];d0.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse),r[o]===void 0&&(r[o]=new Co),r[o].setFromProjectionMatrix(d0,l.coordinateSystem,l.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,r=e._frustums;for(let o=0;o<e._count;o++)t[o]===void 0&&(t[o]=new Co),t[o].copy(r[o]);return this._count=e._count,this}clone(){return new nf().copy(this)}}class Ec extends Rs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new At(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wc=new C,Cc=new C,f0=new tn,po=new Dc,Jl=new Pc,Gh=new C,p0=new C;class my extends Cn{constructor(e=new Zn,t=new Ec){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)wc.fromBufferAttribute(t,o-1),Cc.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=wc.distanceTo(Cc);e.setAttribute("lineDistance",new Yt(r,1))}else mt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Jl.copy(r.boundingSphere),Jl.applyMatrix4(o),Jl.radius+=l,e.ray.intersectsSphere(Jl)===!1)return;f0.copy(o).invert(),po.copy(e.ray).applyMatrix4(f0);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,_=r.index,v=r.attributes.position;if(_!==null){const S=Math.max(0,u.start),w=Math.min(_.count,u.start+u.count);for(let N=S,y=w-1;N<y;N+=m){const x=_.getX(N),P=_.getX(N+1),F=ec(this,e,po,p,x,P,N);F&&t.push(F)}if(this.isLineLoop){const N=_.getX(w-1),y=_.getX(S),x=ec(this,e,po,p,N,y,w-1);x&&t.push(x)}}else{const S=Math.max(0,u.start),w=Math.min(v.count,u.start+u.count);for(let N=S,y=w-1;N<y;N+=m){const x=ec(this,e,po,p,N,N+1,N);x&&t.push(x)}if(this.isLineLoop){const N=ec(this,e,po,p,w-1,S,w-1);N&&t.push(N)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function ec(s,e,t,r,o,l,u){const d=s.geometry.attributes.position;if(wc.fromBufferAttribute(d,o),Cc.fromBufferAttribute(d,l),t.distanceSqToSegment(wc,Cc,Gh,p0)>r)return;Gh.applyMatrix4(s.matrixWorld);const m=e.ray.origin.distanceTo(Gh);if(!(m<e.near||m>e.far))return{distance:m,point:p0.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}const m0=new C,g0=new C;class Hd extends my{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)m0.fromBufferAttribute(t,o),g0.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+m0.distanceTo(g0);e.setAttribute("lineDistance",new Yt(r,1))}else mt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Lg extends $n{constructor(e=[],t=Ta,r,o,l,u,d,p,m,_){super(e,t,r,o,l,u,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class v0 extends $n{constructor(e,t,r,o,l,u,d,p,m){super(e,t,r,o,l,u,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wa extends $n{constructor(e,t,r=sr,o,l,u,d=Bn,p=Bn,m,_=rs,M=1){if(_!==rs&&_!==ns)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:M};super(v,o,l,u,d,p,_,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ef(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Ig extends wa{constructor(e,t=sr,r=Ta,o,l,u=Bn,d=Bn,p,m=rs){const _={width:e,height:e,depth:1},M=[_,_,_,_,_,_];super(e,e,t,r,o,l,u,d,p,m),this.image=M,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ug extends $n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class wr extends Zn{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const d=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const p=[],m=[],_=[],M=[];let v=0,S=0;w("z","y","x",-1,-1,r,t,e,u,l,0),w("z","y","x",1,-1,r,t,-e,u,l,1),w("x","z","y",1,1,e,r,t,o,u,2),w("x","z","y",1,-1,e,r,-t,o,u,3),w("x","y","z",1,-1,e,t,r,o,l,4),w("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(p),this.setAttribute("position",new Yt(m,3)),this.setAttribute("normal",new Yt(_,3)),this.setAttribute("uv",new Yt(M,2));function w(N,y,x,P,F,D,O,I,T,E,K){const B=D/T,G=O/E,$=D/2,re=O/2,H=I/2,de=T+1,Y=E+1;let ee=0,ne=0;const Q=new C;for(let te=0;te<Y;te++){const U=te*G-re;for(let ie=0;ie<de;ie++){const Oe=ie*B-$;Q[N]=Oe*P,Q[y]=U*F,Q[x]=H,m.push(Q.x,Q.y,Q.z),Q[N]=0,Q[y]=0,Q[x]=I>0?1:-1,_.push(Q.x,Q.y,Q.z),M.push(ie/T),M.push(1-te/E),ee+=1}}for(let te=0;te<E;te++)for(let U=0;U<T;U++){const ie=v+U+de*te,Oe=v+U+de*(te+1),le=v+(U+1)+de*(te+1),Te=v+(U+1)+de*te;p.push(ie,Oe,Te),p.push(Oe,le,Te),ne+=6}d.addGroup(S,ne,K),S+=ne,v+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Jr extends Zn{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:d,thetaLength:p};const m=this;o=Math.floor(o),l=Math.floor(l);const _=[],M=[],v=[],S=[];let w=0;const N=[],y=r/2;let x=0;P(),u===!1&&(e>0&&F(!0),t>0&&F(!1)),this.setIndex(_),this.setAttribute("position",new Yt(M,3)),this.setAttribute("normal",new Yt(v,3)),this.setAttribute("uv",new Yt(S,2));function P(){const D=new C,O=new C;let I=0;const T=(t-e)/r;for(let E=0;E<=l;E++){const K=[],B=E/l,G=B*(t-e)+e;for(let $=0;$<=o;$++){const re=$/o,H=re*p+d,de=Math.sin(H),Y=Math.cos(H);O.x=G*de,O.y=-B*r+y,O.z=G*Y,M.push(O.x,O.y,O.z),D.set(de,T,Y).normalize(),v.push(D.x,D.y,D.z),S.push(re,1-B),K.push(w++)}N.push(K)}for(let E=0;E<o;E++)for(let K=0;K<l;K++){const B=N[K][E],G=N[K+1][E],$=N[K+1][E+1],re=N[K][E+1];(e>0||K!==0)&&(_.push(B,G,re),I+=3),(t>0||K!==l-1)&&(_.push(G,$,re),I+=3)}m.addGroup(x,I,0),x+=I}function F(D){const O=w,I=new Xe,T=new C;let E=0;const K=D===!0?e:t,B=D===!0?1:-1;for(let $=1;$<=o;$++)M.push(0,y*B,0),v.push(0,B,0),S.push(.5,.5),w++;const G=w;for(let $=0;$<=o;$++){const H=$/o*p+d,de=Math.cos(H),Y=Math.sin(H);T.x=K*Y,T.y=y*B,T.z=K*de,M.push(T.x,T.y,T.z),v.push(0,B,0),I.x=de*.5+.5,I.y=Y*.5*B+.5,S.push(I.x,I.y),w++}for(let $=0;$<o;$++){const re=O+$,H=G+$;D===!0?_.push(H,H+1,re):_.push(H+1,H,re),E+=3}m.addGroup(x,E,D===!0?1:2),x+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const tc=new C,nc=new C,Wh=new C,ic=new yi;class _0 extends Zn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const o=Math.pow(10,4),l=Math.cos(xo*t),u=e.getIndex(),d=e.getAttribute("position"),p=u?u.count:d.count,m=[0,0,0],_=["a","b","c"],M=new Array(3),v=new Map,S=[];for(let w=0;w<p;w+=3){u?(m[0]=u.getX(w),m[1]=u.getX(w+1),m[2]=u.getX(w+2)):(m[0]=w,m[1]=w+1,m[2]=w+2);const{a:N,b:y,c:x}=ic;if(N.fromBufferAttribute(d,m[0]),y.fromBufferAttribute(d,m[1]),x.fromBufferAttribute(d,m[2]),ic.getNormal(Wh),M[0]=`${Math.round(N.x*o)},${Math.round(N.y*o)},${Math.round(N.z*o)}`,M[1]=`${Math.round(y.x*o)},${Math.round(y.y*o)},${Math.round(y.z*o)}`,M[2]=`${Math.round(x.x*o)},${Math.round(x.y*o)},${Math.round(x.z*o)}`,!(M[0]===M[1]||M[1]===M[2]||M[2]===M[0]))for(let P=0;P<3;P++){const F=(P+1)%3,D=M[P],O=M[F],I=ic[_[P]],T=ic[_[F]],E=`${D}_${O}`,K=`${O}_${D}`,B=v.get(K);B?(Wh.dot(B.normal)<=l&&(S.push(I.x,I.y,I.z),S.push(T.x,T.y,T.z)),v.set(K,null)):v.has(E)||v.set(E,{index0:m[P],index1:m[F],normal:Wh.clone()})}}for(const w of v.values())if(w){const{index0:N,index1:y}=w;tc.fromBufferAttribute(d,N),nc.fromBufferAttribute(d,y),S.push(tc.x,tc.y,tc.z),S.push(nc.x,nc.y,nc.z)}this.setAttribute("position",new Yt(S,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class br{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){mt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let o=0;const l=r.length;let u;t?u=t:u=e*r[l-1];let d=0,p=l-1,m;for(;d<=p;)if(o=Math.floor(d+(p-d)/2),m=r[o]-u,m<0)d=o+1;else if(m>0)p=o-1;else{p=o;break}if(o=p,r[o]===u)return o/(l-1);const _=r[o],v=r[o+1]-_,S=(u-_)/v;return(o+S)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const u=this.getPoint(o),d=this.getPoint(l),p=t||(u.isVector2?new Xe:new C);return p.copy(d).sub(u).normalize(),p}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new C,o=[],l=[],u=[],d=new C,p=new tn;for(let S=0;S<=e;S++){const w=S/e;o[S]=this.getTangentAt(w,new C)}l[0]=new C,u[0]=new C;let m=Number.MAX_VALUE;const _=Math.abs(o[0].x),M=Math.abs(o[0].y),v=Math.abs(o[0].z);_<=m&&(m=_,r.set(1,0,0)),M<=m&&(m=M,r.set(0,1,0)),v<=m&&r.set(0,0,1),d.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],d),u[0].crossVectors(o[0],l[0]);for(let S=1;S<=e;S++){if(l[S]=l[S-1].clone(),u[S]=u[S-1].clone(),d.crossVectors(o[S-1],o[S]),d.length()>Number.EPSILON){d.normalize();const w=Math.acos(Ct(o[S-1].dot(o[S]),-1,1));l[S].applyMatrix4(p.makeRotationAxis(d,w))}u[S].crossVectors(o[S],l[S])}if(t===!0){let S=Math.acos(Ct(l[0].dot(l[e]),-1,1));S/=e,o[0].dot(d.crossVectors(l[0],l[e]))>0&&(S=-S);for(let w=1;w<=e;w++)l[w].applyMatrix4(p.makeRotationAxis(o[w],S*w)),u[w].crossVectors(o[w],l[w])}return{tangents:o,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class Og extends br{constructor(e=0,t=0,r=1,o=1,l=0,u=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=d,this.aRotation=p}getPoint(e,t=new Xe){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(u?l=0:l=o),this.aClockwise===!0&&!u&&(l===o?l=-o:l=l-o);const d=this.aStartAngle+e*l;let p=this.aX+this.xRadius*Math.cos(d),m=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const _=Math.cos(this.aRotation),M=Math.sin(this.aRotation),v=p-this.aX,S=m-this.aY;p=v*_-S*M+this.aX,m=v*M+S*_+this.aY}return r.set(p,m)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class gy extends Og{constructor(e,t,r,o,l,u){super(e,t,r,r,o,l,u),this.isArcCurve=!0,this.type="ArcCurve"}}function rf(){let s=0,e=0,t=0,r=0;function o(l,u,d,p){s=l,e=d,t=-3*l+3*u-2*d-p,r=2*l-2*u+d+p}return{initCatmullRom:function(l,u,d,p,m){o(u,d,m*(d-l),m*(p-u))},initNonuniformCatmullRom:function(l,u,d,p,m,_,M){let v=(u-l)/m-(d-l)/(m+_)+(d-u)/_,S=(d-u)/_-(p-u)/(_+M)+(p-d)/M;v*=_,S*=_,o(u,d,v,S)},calc:function(l){const u=l*l,d=u*l;return s+e*l+t*u+r*d}}}const x0=new C,y0=new C,jh=new rf,Xh=new rf,Kh=new rf;class Fg extends br{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new C){const r=t,o=this.points,l=o.length,u=(l-(this.closed?0:1))*e;let d=Math.floor(u),p=u-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/l)+1)*l:p===0&&d===l-1&&(d=l-2,p=1);let m,_;this.closed||d>0?m=o[(d-1)%l]:(y0.subVectors(o[0],o[1]).add(o[0]),m=y0);const M=o[d%l],v=o[(d+1)%l];if(this.closed||d+2<l?_=o[(d+2)%l]:(x0.subVectors(o[l-1],o[l-2]).add(o[l-1]),_=x0),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let w=Math.pow(m.distanceToSquared(M),S),N=Math.pow(M.distanceToSquared(v),S),y=Math.pow(v.distanceToSquared(_),S);N<1e-4&&(N=1),w<1e-4&&(w=N),y<1e-4&&(y=N),jh.initNonuniformCatmullRom(m.x,M.x,v.x,_.x,w,N,y),Xh.initNonuniformCatmullRom(m.y,M.y,v.y,_.y,w,N,y),Kh.initNonuniformCatmullRom(m.z,M.z,v.z,_.z,w,N,y)}else this.curveType==="catmullrom"&&(jh.initCatmullRom(m.x,M.x,v.x,_.x,this.tension),Xh.initCatmullRom(m.y,M.y,v.y,_.y,this.tension),Kh.initCatmullRom(m.z,M.z,v.z,_.z,this.tension));return r.set(jh.calc(p),Xh.calc(p),Kh.calc(p)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new C().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function S0(s,e,t,r,o){const l=(r-e)*.5,u=(o-t)*.5,d=s*s,p=s*d;return(2*t-2*r+l+u)*p+(-3*t+3*r-2*l-u)*d+l*s+t}function vy(s,e){const t=1-s;return t*t*e}function _y(s,e){return 2*(1-s)*s*e}function xy(s,e){return s*s*e}function yo(s,e,t,r){return vy(s,e)+_y(s,t)+xy(s,r)}function yy(s,e){const t=1-s;return t*t*t*e}function Sy(s,e){const t=1-s;return 3*t*t*s*e}function My(s,e){return 3*(1-s)*s*s*e}function Ty(s,e){return s*s*s*e}function So(s,e,t,r,o){return yy(s,e)+Sy(s,t)+My(s,r)+Ty(s,o)}class Ey extends br{constructor(e=new Xe,t=new Xe,r=new Xe,o=new Xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new Xe){const r=t,o=this.v0,l=this.v1,u=this.v2,d=this.v3;return r.set(So(e,o.x,l.x,u.x,d.x),So(e,o.y,l.y,u.y,d.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class wy extends br{constructor(e=new C,t=new C,r=new C,o=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new C){const r=t,o=this.v0,l=this.v1,u=this.v2,d=this.v3;return r.set(So(e,o.x,l.x,u.x,d.x),So(e,o.y,l.y,u.y,d.y),So(e,o.z,l.z,u.z,d.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Cy extends br{constructor(e=new Xe,t=new Xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Xe){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ay extends br{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class by extends br{constructor(e=new Xe,t=new Xe,r=new Xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Xe){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(yo(e,o.x,l.x,u.x),yo(e,o.y,l.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kg extends br{constructor(e=new C,t=new C,r=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new C){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(yo(e,o.x,l.x,u.x),yo(e,o.y,l.y,u.y),yo(e,o.z,l.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ny extends br{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Xe){const r=t,o=this.points,l=(o.length-1)*e,u=Math.floor(l),d=l-u,p=o[u===0?u:u-1],m=o[u],_=o[u>o.length-2?o.length-1:u+1],M=o[u>o.length-3?o.length-1:u+2];return r.set(S0(d,p.x,m.x,_.x,M.x),S0(d,p.y,m.y,_.y,M.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new Xe().fromArray(o))}return this}}var Ry=Object.freeze({__proto__:null,ArcCurve:gy,CatmullRomCurve3:Fg,CubicBezierCurve:Ey,CubicBezierCurve3:wy,EllipseCurve:Og,LineCurve:Cy,LineCurve3:Ay,QuadraticBezierCurve:by,QuadraticBezierCurve3:kg,SplineCurve:Ny});class Hi extends Zn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,d=Math.floor(r),p=Math.floor(o),m=d+1,_=p+1,M=e/d,v=t/p,S=[],w=[],N=[],y=[];for(let x=0;x<_;x++){const P=x*v-u;for(let F=0;F<m;F++){const D=F*M-l;w.push(D,-P,0),N.push(0,0,1),y.push(F/d),y.push(1-x/p)}}for(let x=0;x<p;x++)for(let P=0;P<d;P++){const F=P+m*x,D=P+m*(x+1),O=P+1+m*(x+1),I=P+1+m*x;S.push(F,D,I),S.push(D,O,I)}this.setIndex(S),this.setAttribute("position",new Yt(w,3)),this.setAttribute("normal",new Yt(N,3)),this.setAttribute("uv",new Yt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ac extends Zn{constructor(e=.5,t=1,r=32,o=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:o,thetaStart:l,thetaLength:u},r=Math.max(3,r),o=Math.max(1,o);const d=[],p=[],m=[],_=[];let M=e;const v=(t-e)/o,S=new C,w=new Xe;for(let N=0;N<=o;N++){for(let y=0;y<=r;y++){const x=l+y/r*u;S.x=M*Math.cos(x),S.y=M*Math.sin(x),p.push(S.x,S.y,S.z),m.push(0,0,1),w.x=(S.x/t+1)/2,w.y=(S.y/t+1)/2,_.push(w.x,w.y)}M+=v}for(let N=0;N<o;N++){const y=N*(r+1);for(let x=0;x<r;x++){const P=x+y,F=P,D=P+r+1,O=P+r+2,I=P+1;d.push(F,D,I),d.push(D,O,I)}}this.setIndex(d),this.setAttribute("position",new Yt(p,3)),this.setAttribute("normal",new Yt(m,3)),this.setAttribute("uv",new Yt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ac(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class xa extends Zn{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const p=Math.min(u+d,Math.PI);let m=0;const _=[],M=new C,v=new C,S=[],w=[],N=[],y=[];for(let x=0;x<=r;x++){const P=[],F=x/r,D=u+F*d,O=e*Math.cos(D),I=Math.sqrt(e*e-O*O);let T=0;x===0&&u===0?T=.5/t:x===r&&p===Math.PI&&(T=-.5/t);for(let E=0;E<=t;E++){const K=E/t,B=o+K*l;M.x=-I*Math.cos(B),M.y=O,M.z=I*Math.sin(B),w.push(M.x,M.y,M.z),v.copy(M).normalize(),N.push(v.x,v.y,v.z),y.push(K+T,1-F),P.push(m++)}_.push(P)}for(let x=0;x<r;x++)for(let P=0;P<t;P++){const F=_[x][P+1],D=_[x][P],O=_[x+1][P],I=_[x+1][P+1];(x!==0||u>0)&&S.push(F,D,I),(x!==r-1||p<Math.PI)&&S.push(D,O,I)}this.setIndex(S),this.setAttribute("position",new Yt(w,3)),this.setAttribute("normal",new Yt(N,3)),this.setAttribute("uv",new Yt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class sf extends Zn{constructor(e=1,t=.4,r=12,o=48,l=Math.PI*2,u=0,d=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:l,thetaStart:u,thetaLength:d},r=Math.floor(r),o=Math.floor(o);const p=[],m=[],_=[],M=[],v=new C,S=new C,w=new C;for(let N=0;N<=r;N++){const y=u+N/r*d;for(let x=0;x<=o;x++){const P=x/o*l;S.x=(e+t*Math.cos(y))*Math.cos(P),S.y=(e+t*Math.cos(y))*Math.sin(P),S.z=t*Math.sin(y),m.push(S.x,S.y,S.z),v.x=e*Math.cos(P),v.y=e*Math.sin(P),w.subVectors(S,v).normalize(),_.push(w.x,w.y,w.z),M.push(x/o),M.push(N/r)}}for(let N=1;N<=r;N++)for(let y=1;y<=o;y++){const x=(o+1)*N+y-1,P=(o+1)*(N-1)+y-1,F=(o+1)*(N-1)+y,D=(o+1)*N+y;p.push(x,P,D),p.push(P,F,D)}this.setIndex(p),this.setAttribute("position",new Yt(m,3)),this.setAttribute("normal",new Yt(_,3)),this.setAttribute("uv",new Yt(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sf(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class af extends Zn{constructor(e=new kg(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,r=1,o=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:o,closed:l};const u=e.computeFrenetFrames(t,l);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const d=new C,p=new C,m=new Xe;let _=new C;const M=[],v=[],S=[],w=[];N(),this.setIndex(w),this.setAttribute("position",new Yt(M,3)),this.setAttribute("normal",new Yt(v,3)),this.setAttribute("uv",new Yt(S,2));function N(){for(let F=0;F<t;F++)y(F);y(l===!1?t:0),P(),x()}function y(F){_=e.getPointAt(F/t,_);const D=u.normals[F],O=u.binormals[F];for(let I=0;I<=o;I++){const T=I/o*Math.PI*2,E=Math.sin(T),K=-Math.cos(T);p.x=K*D.x+E*O.x,p.y=K*D.y+E*O.y,p.z=K*D.z+E*O.z,p.normalize(),v.push(p.x,p.y,p.z),d.x=_.x+r*p.x,d.y=_.y+r*p.y,d.z=_.z+r*p.z,M.push(d.x,d.y,d.z)}}function x(){for(let F=1;F<=t;F++)for(let D=1;D<=o;D++){const O=(o+1)*(F-1)+(D-1),I=(o+1)*F+(D-1),T=(o+1)*F+D,E=(o+1)*(F-1)+D;w.push(O,I,E),w.push(I,T,E)}}function P(){for(let F=0;F<=t;F++)for(let D=0;D<=o;D++)m.x=F/t,m.y=D/o,S.push(m.x,m.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new af(new Ry[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Ca(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(M0(o))o.isRenderTargetTexture?(mt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(M0(o[0])){const l=[];for(let u=0,d=o.length;u<d;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function ti(s){const e={};for(let t=0;t<s.length;t++){const r=Ca(s[t]);for(const o in r)e[o]=r[o]}return e}function M0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Py(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Bg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Dt.workingColorSpace}const Dy={clone:Ca,merge:ti};var Ly=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Iy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bs extends Rs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ly,this.fragmentShader=Iy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ca(e.uniforms),this.uniformsGroups=Py(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new At().setHex(o.value);break;case"v2":this.uniforms[r].value=new Xe().fromArray(o.value);break;case"v3":this.uniforms[r].value=new C().fromArray(o.value);break;case"v4":this.uniforms[r].value=new dn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new xt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new tn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Uy extends bs{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class In extends Rs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kd,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new as,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Oy extends Rs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fy extends Rs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class of extends Cn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new At(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class ky extends of{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Yh=new tn,T0=new C,E0=new C;class By{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=xi,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Co,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new dn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;T0.setFromMatrixPosition(e.matrixWorld),t.position.copy(T0),E0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(E0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,o){Yh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(Yh,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,u=o?o.z/l.x:1,d=o?o.w/l.y:1,p=o?o.x/l.x:0,m=o?o.y/l.y:0;e.coordinateSystem===wo||e.reversedDepth?t.set(.5*u,0,0,.5*u+p,0,.5*d,0,.5*d+m,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+p,0,.5*d,0,.5*d+m,0,0,.5,.5,0,0,0,1),t.multiply(Yh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const rc=new C,sc=new ss,Ji=new C;class zg extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(rc,sc,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(rc,sc,Ji.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(rc,sc,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(rc,sc,Ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Qr=new C,w0=new Xe,C0=new Xe;class Vi extends zg{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bd*2*Math.atan(Math.tan(xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Qr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qr.x,Qr.y).multiplyScalar(-e/Qr.z),Qr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Qr.x,Qr.y).multiplyScalar(-e/Qr.z)}getViewSize(e,t){return this.getViewBounds(e,w0,C0),t.subVectors(C0,w0)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xo*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,m=u.fullHeight;l+=u.offsetX*o/p,t-=u.offsetY*r/m,o*=u.width/p,r*=u.height/m}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Hg extends zg{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class zy extends By{constructor(){super(new Hg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hy extends of{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.target=new Cn,this.shadow=new zy}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Vy extends of{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const pa=-90,ma=1;class Vd extends Cn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Vi(pa,ma,e,t);o.layers=this.layers,this.add(o);const l=new Vi(pa,ma,e,t);l.layers=this.layers,this.add(l);const u=new Vi(pa,ma,e,t);u.layers=this.layers,this.add(u);const d=new Vi(pa,ma,e,t);d.layers=this.layers,this.add(d);const p=new Vi(pa,ma,e,t);p.layers=this.layers,this.add(p);const m=new Vi(pa,ma,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,d,p]=t;for(const m of t)this.remove(m);if(e===Wi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===wo)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,p,m,_]=this.children,M=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const N=r.texture.mipmapsAutoUpdate;r.texture.mipmapsAutoUpdate=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),r.texture.mipmapsAutoUpdate=N,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,_),e.setRenderTarget(M,v,S),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class Gy extends Vi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const A0=new tn;class Wy{constructor(e,t,r=0,o=1/0){this.ray=new Dc(e,t),this.near=r,this.far=o,this.camera=null,this.layers=new tf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ot("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return A0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(A0),this}intersectObject(e,t=!0,r=[]){return Gd(e,this,r,t),r.sort(b0),r}intersectObjects(e,t=!0,r=[]){for(let o=0,l=e.length;o<l;o++)Gd(e[o],this,r,t);return r.sort(b0),r}}function b0(s,e){return s.distance-e.distance}function Gd(s,e,t,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(o=!1),o===!0&&r===!0){const l=s.children;for(let u=0,d=l.length;u<d;u++)Gd(l[u],e,t,!0)}}class N0{constructor(e=1,t=0,r=0){this.radius=e,this.phi=t,this.theta=r}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ct(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class jy extends Hd{constructor(e=10,t=10,r=4473924,o=8947848){r=new At(r),o=new At(o);const l=t/2,u=e/t,d=e/2,p=[],m=[];for(let v=0,S=0,w=-d;v<=t;v++,w+=u){p.push(-d,0,w,d,0,w),p.push(w,0,-d,w,0,d);const N=v===l?r:o;N.toArray(m,S),S+=3,N.toArray(m,S),S+=3,N.toArray(m,S),S+=3,N.toArray(m,S),S+=3}const _=new Zn;_.setAttribute("position",new Yt(p,3)),_.setAttribute("color",new Yt(m,3));const M=new Ec({vertexColors:!0,toneMapped:!1});super(_,M),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class Xy extends os{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function R0(s,e,t,r){const o=Ky(r);switch(t){case _g:return s*e;case yg:return s*e/o.components*o.byteLength;case Zd:return s*e/o.components*o.byteLength;case As:return s*e*2/o.components*o.byteLength;case Qd:return s*e*2/o.components*o.byteLength;case xg:return s*e*3/o.components*o.byteLength;case ir:return s*e*4/o.components*o.byteLength;case Jd:return s*e*4/o.components*o.byteLength;case hc:case dc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case fc:case pc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case cd:case hd:return Math.max(s,16)*Math.max(e,8)/4;case ld:case ud:return Math.max(s,8)*Math.max(e,8)/2;case dd:case fd:case md:case gd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case pd:case vc:case vd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case _d:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case xd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case yd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Sd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Md:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Td:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ed:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case wd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Cd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ad:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case bd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Nd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Rd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Pd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Dd:case Ld:case Id:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ud:case Od:return Math.ceil(s/4)*Math.ceil(e/4)*8;case _c:case Fd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ky(s){switch(s){case xi:case pg:return{byteLength:1,components:1};case Eo:case mg:case ar:return{byteLength:2,components:1};case qd:case $d:return{byteLength:2,components:4};case sr:case Yd:case nr:return{byteLength:4,components:1};case gg:case vg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xd}}));typeof window<"u"&&(window.__THREE__?mt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Vg(){let s=null,e=!1,t=null,r=null;function o(l,u){r=s.requestAnimationFrame(o),t(l,u)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Yy(s){const e=new WeakMap;function t(d,p){const m=d.array,_=d.usage,M=m.byteLength,v=s.createBuffer();s.bindBuffer(p,v),s.bufferData(p,m,_),d.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)S=s.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:M}}function r(d,p,m){const _=p.array,M=p.updateRanges;if(s.bindBuffer(m,d),M.length===0)s.bufferSubData(m,0,_);else{M.sort((S,w)=>S.start-w.start);let v=0;for(let S=1;S<M.length;S++){const w=M[v],N=M[S];N.start<=w.start+w.count+1?w.count=Math.max(w.count,N.start+N.count-w.start):(++v,M[v]=N)}M.length=v+1;for(let S=0,w=M.length;S<w;S++){const N=M[S];s.bufferSubData(m,N.start*_.BYTES_PER_ELEMENT,_,N.start,N.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function u(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,t(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:o,remove:l,update:u}}var qy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$y=`#ifdef USE_ALPHAHASH
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
#endif`,Zy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,e1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,t1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,n1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,i1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,r1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,s1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,a1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,o1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,l1=`#ifdef USE_IRIDESCENCE
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
#endif`,c1=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,u1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,h1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,d1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,f1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,p1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,m1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,g1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,v1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,_1=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,x1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,y1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,S1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,M1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,T1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,E1="gl_FragColor = linearToOutputTexel( gl_FragColor );",w1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,C1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,A1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,b1=`#ifdef USE_ENVMAP
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
#endif`,N1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,R1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,P1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,D1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,L1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,I1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,U1=`#ifdef USE_GRADIENTMAP
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
}`,O1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,F1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,k1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,B1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif
#include <lightprobes_pars_fragment>`,z1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,H1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,V1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,G1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,W1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,j1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,X1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,K1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Y1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,q1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$1=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Z1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Q1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rS=`#if defined( USE_POINTS_UV )
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
#endif`,sS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lS=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,vS=`#ifdef USE_NORMALMAP
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
#endif`,_S=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,SS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,MS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,TS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ES=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,CS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,AS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,NS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,RS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,PS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,DS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,LS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,IS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,US=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,OS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FS=`#ifdef USE_SKINNING
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
#endif`,kS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,BS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HS=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,VS=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,GS=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,WS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,jS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,XS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,KS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const YS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qS=`uniform sampler2D t2D;
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
}`,$S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZS=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,tM=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,iM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,rM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aM=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oM=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lM=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,cM=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,uM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,hM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,dM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,fM=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,pM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,mM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,vM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,_M=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,xM=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,SM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,MM=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,TM=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,EM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,wM=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,CM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,AM=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Tt={alphahash_fragment:qy,alphahash_pars_fragment:$y,alphamap_fragment:Zy,alphamap_pars_fragment:Qy,alphatest_fragment:Jy,alphatest_pars_fragment:e1,aomap_fragment:t1,aomap_pars_fragment:n1,batching_pars_vertex:i1,batching_vertex:r1,begin_vertex:s1,beginnormal_vertex:a1,bsdfs:o1,iridescence_fragment:l1,bumpmap_pars_fragment:c1,clipping_planes_fragment:u1,clipping_planes_pars_fragment:h1,clipping_planes_pars_vertex:d1,clipping_planes_vertex:f1,color_fragment:p1,color_pars_fragment:m1,color_pars_vertex:g1,color_vertex:v1,common:_1,defaultnormal_vertex:x1,displacementmap_pars_vertex:y1,displacementmap_vertex:S1,emissivemap_fragment:M1,emissivemap_pars_fragment:T1,colorspace_fragment:E1,colorspace_pars_fragment:w1,envmap_fragment:C1,envmap_common_pars_fragment:A1,envmap_pars_fragment:b1,envmap_pars_vertex:N1,envmap_physical_pars_fragment:z1,envmap_vertex:R1,fog_vertex:P1,fog_pars_vertex:D1,fog_fragment:L1,fog_pars_fragment:I1,gradientmap_pars_fragment:U1,lightmap_pars_fragment:O1,lights_lambert_fragment:F1,lights_lambert_pars_fragment:k1,lights_pars_begin:B1,lights_toon_fragment:H1,lights_toon_pars_fragment:V1,lights_phong_fragment:G1,lights_phong_pars_fragment:W1,lights_physical_fragment:j1,lights_physical_pars_fragment:X1,lights_fragment_begin:K1,lights_fragment_maps:Y1,lights_fragment_end:q1,lightprobes_pars_fragment:$1,logdepthbuf_fragment:Z1,logdepthbuf_pars_fragment:Q1,logdepthbuf_pars_vertex:J1,logdepthbuf_vertex:eS,map_fragment:tS,map_pars_fragment:nS,map_particle_fragment:iS,map_particle_pars_fragment:rS,metalnessmap_fragment:sS,metalnessmap_pars_fragment:aS,morphinstance_vertex:oS,morphcolor_vertex:lS,morphnormal_vertex:cS,morphtarget_pars_vertex:uS,morphtarget_vertex:hS,normal_fragment_begin:dS,normal_fragment_maps:fS,normal_pars_fragment:pS,normal_pars_vertex:mS,normal_vertex:gS,normalmap_pars_fragment:vS,clearcoat_normal_fragment_begin:_S,clearcoat_normal_fragment_maps:xS,clearcoat_pars_fragment:yS,iridescence_pars_fragment:SS,opaque_fragment:MS,packing:TS,premultiplied_alpha_fragment:ES,project_vertex:wS,dithering_fragment:CS,dithering_pars_fragment:AS,roughnessmap_fragment:bS,roughnessmap_pars_fragment:NS,shadowmap_pars_fragment:RS,shadowmap_pars_vertex:PS,shadowmap_vertex:DS,shadowmask_pars_fragment:LS,skinbase_vertex:IS,skinning_pars_vertex:US,skinning_vertex:OS,skinnormal_vertex:FS,specularmap_fragment:kS,specularmap_pars_fragment:BS,tonemapping_fragment:zS,tonemapping_pars_fragment:HS,transmission_fragment:VS,transmission_pars_fragment:GS,uv_pars_fragment:WS,uv_pars_vertex:jS,uv_vertex:XS,worldpos_vertex:KS,background_vert:YS,background_frag:qS,backgroundCube_vert:$S,backgroundCube_frag:ZS,cube_vert:QS,cube_frag:JS,depth_vert:eM,depth_frag:tM,distance_vert:nM,distance_frag:iM,equirect_vert:rM,equirect_frag:sM,linedashed_vert:aM,linedashed_frag:oM,meshbasic_vert:lM,meshbasic_frag:cM,meshlambert_vert:uM,meshlambert_frag:hM,meshmatcap_vert:dM,meshmatcap_frag:fM,meshnormal_vert:pM,meshnormal_frag:mM,meshphong_vert:gM,meshphong_frag:vM,meshphysical_vert:_M,meshphysical_frag:xM,meshtoon_vert:yM,meshtoon_frag:SM,points_vert:MM,points_frag:TM,shadow_vert:EM,shadow_frag:wM,sprite_vert:CM,sprite_frag:AM},je={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},tr={basic:{uniforms:ti([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:ti([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new At(0)},envMapIntensity:{value:1}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:ti([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:ti([je.common,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.roughnessmap,je.metalnessmap,je.fog,je.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:ti([je.common,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.gradientmap,je.fog,je.lights,{emissive:{value:new At(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:ti([je.common,je.bumpmap,je.normalmap,je.displacementmap,je.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:ti([je.points,je.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:ti([je.common,je.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:ti([je.common,je.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:ti([je.common,je.bumpmap,je.normalmap,je.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:ti([je.sprite,je.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distance:{uniforms:ti([je.common,je.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distance_vert,fragmentShader:Tt.distance_frag},shadow:{uniforms:ti([je.lights,je.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};tr.physical={uniforms:ti([tr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};const ac={r:0,b:0,g:0},bM=new tn,Gg=new xt;Gg.set(-1,0,0,0,1,0,0,0,1);function NM(s,e,t,r,o,l){const u=new At(0);let d=o===!0?0:1,p,m,_=null,M=0,v=null;function S(P){let F=P.isScene===!0?P.background:null;if(F&&F.isTexture){const D=P.backgroundBlurriness>0;F=e.get(F,D)}return F}function w(P){let F=!1;const D=S(P);D===null?y(u,d):D&&D.isColor&&(y(D,1),F=!0);const O=s.xr.getEnvironmentBlendMode();O==="additive"?t.buffers.color.setClear(0,0,0,1,l):O==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||F)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function N(P,F){const D=S(F);D&&D.isCubeTexture?(m===void 0&&(m=new Ut(new wr(1,1,1),new bs({name:"BackgroundCubeMaterial",uniforms:Ca(tr.backgroundCube.uniforms),vertexShader:tr.backgroundCube.vertexShader,fragmentShader:tr.backgroundCube.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(O,I,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=D,m.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(bM.makeRotationFromEuler(F.backgroundRotation)).transpose(),D.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(Gg),m.material.toneMapped=Dt.getTransfer(D.colorSpace)!==Kt,(_!==D||M!==D.version||v!==s.toneMapping)&&(m.material.needsUpdate=!0,_=D,M=D.version,v=s.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null)):D&&D.isTexture&&(p===void 0&&(p=new Ut(new Hi(2,2),new bs({name:"BackgroundMaterial",uniforms:Ca(tr.background.uniforms),vertexShader:tr.background.vertexShader,fragmentShader:tr.background.fragmentShader,side:Cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=D,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.toneMapped=Dt.getTransfer(D.colorSpace)!==Kt,D.matrixAutoUpdate===!0&&D.updateMatrix(),p.material.uniforms.uvTransform.value.copy(D.matrix),(_!==D||M!==D.version||v!==s.toneMapping)&&(p.material.needsUpdate=!0,_=D,M=D.version,v=s.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function y(P,F){P.getRGB(ac,Bg(s)),t.buffers.color.setClear(ac.r,ac.g,ac.b,F,l)}function x(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return u},setClearColor:function(P,F=1){u.set(P),d=F,y(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(P){d=P,y(u,d)},render:w,addToRenderList:N,dispose:x}}function RM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=v(null);let l=o,u=!1;function d(G,$,re,H,de){let Y=!1;const ee=M(G,H,re,$);l!==ee&&(l=ee,m(l.object)),Y=S(G,H,re,de),Y&&w(G,H,re,de),de!==null&&e.update(de,s.ELEMENT_ARRAY_BUFFER),(Y||u)&&(u=!1,D(G,$,re,H),de!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function p(){return s.createVertexArray()}function m(G){return s.bindVertexArray(G)}function _(G){return s.deleteVertexArray(G)}function M(G,$,re,H){const de=H.wireframe===!0;let Y=r[$.id];Y===void 0&&(Y={},r[$.id]=Y);const ee=G.isInstancedMesh===!0?G.id:0;let ne=Y[ee];ne===void 0&&(ne={},Y[ee]=ne);let Q=ne[re.id];Q===void 0&&(Q={},ne[re.id]=Q);let te=Q[de];return te===void 0&&(te=v(p()),Q[de]=te),te}function v(G){const $=[],re=[],H=[];for(let de=0;de<t;de++)$[de]=0,re[de]=0,H[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:re,attributeDivisors:H,object:G,attributes:{},index:null}}function S(G,$,re,H){const de=l.attributes,Y=$.attributes;let ee=0;const ne=re.getAttributes();for(const Q in ne)if(ne[Q].location>=0){const U=de[Q];let ie=Y[Q];if(ie===void 0&&(Q==="instanceMatrix"&&G.instanceMatrix&&(ie=G.instanceMatrix),Q==="instanceColor"&&G.instanceColor&&(ie=G.instanceColor)),U===void 0||U.attribute!==ie||ie&&U.data!==ie.data)return!0;ee++}return l.attributesNum!==ee||l.index!==H}function w(G,$,re,H){const de={},Y=$.attributes;let ee=0;const ne=re.getAttributes();for(const Q in ne)if(ne[Q].location>=0){let U=Y[Q];U===void 0&&(Q==="instanceMatrix"&&G.instanceMatrix&&(U=G.instanceMatrix),Q==="instanceColor"&&G.instanceColor&&(U=G.instanceColor));const ie={};ie.attribute=U,U&&U.data&&(ie.data=U.data),de[Q]=ie,ee++}l.attributes=de,l.attributesNum=ee,l.index=H}function N(){const G=l.newAttributes;for(let $=0,re=G.length;$<re;$++)G[$]=0}function y(G){x(G,0)}function x(G,$){const re=l.newAttributes,H=l.enabledAttributes,de=l.attributeDivisors;re[G]=1,H[G]===0&&(s.enableVertexAttribArray(G),H[G]=1),de[G]!==$&&(s.vertexAttribDivisor(G,$),de[G]=$)}function P(){const G=l.newAttributes,$=l.enabledAttributes;for(let re=0,H=$.length;re<H;re++)$[re]!==G[re]&&(s.disableVertexAttribArray(re),$[re]=0)}function F(G,$,re,H,de,Y,ee){ee===!0?s.vertexAttribIPointer(G,$,re,de,Y):s.vertexAttribPointer(G,$,re,H,de,Y)}function D(G,$,re,H){N();const de=H.attributes,Y=re.getAttributes(),ee=$.defaultAttributeValues;for(const ne in Y){const Q=Y[ne];if(Q.location>=0){let te=de[ne];if(te===void 0&&(ne==="instanceMatrix"&&G.instanceMatrix&&(te=G.instanceMatrix),ne==="instanceColor"&&G.instanceColor&&(te=G.instanceColor)),te!==void 0){const U=te.normalized,ie=te.itemSize,Oe=e.get(te);if(Oe===void 0)continue;const le=Oe.buffer,Te=Oe.type,be=Oe.bytesPerElement,He=Te===s.INT||Te===s.UNSIGNED_INT||te.gpuType===Yd;if(te.isInterleavedBufferAttribute){const Ee=te.data,Ke=Ee.isInterleavedBuffer===!0?Ee.stride:Ee.itemSize,Ze=te.offset;if(Ee.isInstancedInterleavedBuffer||Ee.isInstancedBufferAttribute){for(let Ye=0;Ye<Q.locationSize;Ye++)x(Q.location+Ye,Ee.meshPerAttribute);G.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Ye=0;Ye<Q.locationSize;Ye++)y(Q.location+Ye);s.bindBuffer(s.ARRAY_BUFFER,le);for(let Ye=0;Ye<Q.locationSize;Ye++)F(Q.location+Ye,ie/Q.locationSize,Te,U,Ke*be,(Ze+ie/Q.locationSize*Ye)*be,He)}else{if(te.isInstancedBufferAttribute){for(let Ee=0;Ee<Q.locationSize;Ee++)x(Q.location+Ee,te.meshPerAttribute);G.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Ee=0;Ee<Q.locationSize;Ee++)y(Q.location+Ee);s.bindBuffer(s.ARRAY_BUFFER,le);for(let Ee=0;Ee<Q.locationSize;Ee++)F(Q.location+Ee,ie/Q.locationSize,Te,U,ie*be,ie/Q.locationSize*Ee*be,He)}}else if(ee!==void 0){const U=ee[ne];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(Q.location,U);break;case 3:s.vertexAttrib3fv(Q.location,U);break;case 4:s.vertexAttrib4fv(Q.location,U);break;default:s.vertexAttrib1fv(Q.location,U)}}}}P()}function O(){K();for(const G in r){const $=r[G];for(const re in $){const H=$[re];for(const de in H){const Y=H[de];for(const ee in Y)_(Y[ee].object),delete Y[ee];delete H[de]}}delete r[G]}}function I(G){if(r[G.id]===void 0)return;const $=r[G.id];for(const re in $){const H=$[re];for(const de in H){const Y=H[de];for(const ee in Y)_(Y[ee].object),delete Y[ee];delete H[de]}}delete r[G.id]}function T(G){for(const $ in r){const re=r[$];for(const H in re){const de=re[H];if(de[G.id]===void 0)continue;const Y=de[G.id];for(const ee in Y)_(Y[ee].object),delete Y[ee];delete de[G.id]}}}function E(G){for(const $ in r){const re=r[$],H=G.isInstancedMesh===!0?G.id:0,de=re[H];if(de!==void 0){for(const Y in de){const ee=de[Y];for(const ne in ee)_(ee[ne].object),delete ee[ne];delete de[Y]}delete re[H],Object.keys(re).length===0&&delete r[$]}}}function K(){B(),u=!0,l!==o&&(l=o,m(l.object))}function B(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:K,resetDefaultState:B,dispose:O,releaseStatesOfGeometry:I,releaseStatesOfObject:E,releaseStatesOfProgram:T,initAttributes:N,enableAttribute:y,disableUnusedAttributes:P}}function PM(s,e,t){let r;function o(p){r=p}function l(p,m){s.drawArrays(r,p,m),t.update(m,r,1)}function u(p,m,_){_!==0&&(s.drawArraysInstanced(r,p,m,_),t.update(m,r,_))}function d(p,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,_);let v=0;for(let S=0;S<_;S++)v+=m[S];t.update(v,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d}function DM(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(T){return!(T!==ir&&r.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(T){const E=T===ar&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==xi&&T!==nr&&!E&&r.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function p(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const _=p(m);_!==m&&(mt("WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const M=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),v=t.logarithmicDepthBuffer===!0&&M===!1;t.reversedDepthBuffer===!0&&M===!1&&mt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&M===!0&&mt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),P=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),F=s.getParameter(s.MAX_VARYING_VECTORS),D=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),O=s.getParameter(s.MAX_SAMPLES),I=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reversedDepthBuffer:M,maxTextures:S,maxVertexTextures:w,maxTextureSize:N,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:P,maxVaryings:F,maxFragmentUniforms:D,maxSamples:O,samples:I}}function LM(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Tr,d=new xt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(M,v){const S=M.length!==0||v||r!==0||o;return o=v,r=M.length,S},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(M,v){t=_(M,v,0)},this.setState=function(M,v,S){const w=M.clippingPlanes,N=M.clipIntersection,y=M.clipShadows,x=s.get(M);if(!o||w===null||w.length===0||l&&!y)l?_(null):m();else{const P=l?0:r,F=P*4;let D=x.clippingState||null;p.value=D,D=_(w,v,F,S);for(let O=0;O!==F;++O)D[O]=t[O];x.clippingState=D,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=P}};function m(){p.value!==t&&(p.value=t,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(M,v,S,w){const N=M!==null?M.length:0;let y=null;if(N!==0){if(y=p.value,w!==!0||y===null){const x=S+N*4,P=v.matrixWorldInverse;d.getNormalMatrix(P),(y===null||y.length<x)&&(y=new Float32Array(x));for(let F=0,D=S;F!==N;++F,D+=4)u.copy(M[F]).applyMatrix4(P,d),u.normal.toArray(y,D),y[D+3]=u.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=N,e.numIntersection=0,y}}class lf extends rr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Lg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new wr(5,5,5),l=new bs({name:"CubemapFromEquirect",uniforms:Ca(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:hi,blending:Sa});l.uniforms.tEquirect.value=t;const u=new Ut(o,l),d=t.minFilter;return t.minFilter===ts&&(t.minFilter=ni),new Vd(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}const P0=256,IM=3,UM=20,Wg=256,jg=16,OM=3,FM=new C,kM=new At;class bc{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Vd(1,10,null),this._boxMesh=new Ut(new wr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:d=FM}=l,p=this._renderer;this._setSize(u);const m=this._allocateTarget(),_=this._getSourceTarget(!0);t>0&&(_.texture.mipmapsAutoUpdate=!1);const M=p.autoClear,v=p.autoClearColor,S=p.autoClearDepth,w=p.autoClearStencil,N=e.background;p.autoClear=!0,p.autoClearColor=!0,p.autoClearDepth=!0,p.autoClearStencil=!0,N===null&&(e.background=p.getClearColor(kM));const y=new Vd(r,o,_);return y.position.copy(d),y.update(p,e),p.autoClear=M,p.autoClearColor=v,p.autoClearDepth=S,p.autoClearStencil=w,e.background=N,t>0&&(_.texture.mipmapsAutoUpdate=!0,this._blur(m,t)),this._applyPMREM(m),m}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=I0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=L0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(P0,Gx(e))}_fromTexture(e,t){e.mapping===Ta||e.mapping===To?this._setSize(e.image.length===0?P0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const r=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(r),r}_allocateTarget(){const e=this._cubeSize,t=D0(e,!1,!1),r=Math.log2(e)-IM;for(let o=0;o<=r;o++)t.texture.mipmaps.push({width:e>>o,height:e>>o});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==t||e&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=D0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,r){const o=this._boxMesh,l=this._cubeCamera;o.material=r,l.renderTarget=e,l.activeMipmapLevel=t;const u=e.width>>t;e.viewport.set(0,0,u,u),l.update(this._renderer,o),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ta||e.mapping===To?(this._cubemapMaterial===null&&(this._cubemapMaterial=I0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=L0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=BM(),this._integrationMaterial=zM());const t=this._cubeSize,r=e.texture.mipmaps.length-1,o=this._ggxMaterial.uniforms;o.envMap.value=this._sourceTarget.texture;const l=this._integrationMaterial.uniforms;l.envMap.value=this._sourceTarget.texture,l.sourceLod.value=Math.log2(t/jg);for(let u=0;u<=r;u++){const d=bc.lodToRoughness(u,r);if(u>r-OM)l.roughness.value=d,this._renderCube(e,u,this._integrationMaterial);else{const p=d>0?Math.log2(t)+.5*Math.log2(6/(Wg*Math.pow(d,4)))+.5:0;o.roughness.value=d,o.lodBias.value=p,this._renderCube(e,u,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=HM());const r=this._blurMaterial,o=r.uniforms,l=this._sourceTarget;o.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,o.envMap.value=l.texture,this._renderCube(e,0,r),o.envMap.value=e.texture,this._renderCube(l,0,r)}}function D0(s,e,t){return new lf(s,{minFilter:ts,generateMipmaps:e,type:ar,colorSpace:xc,depthBuffer:t})}function bo(s,e,t){return new bs({name:s,uniforms:e,vertexShader:Tt.cube_vert,fragmentShader:t,side:hi,blending:Sa,depthTest:!1,depthWrite:!1})}function BM(){return bo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Wg}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function zM(){return bo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:jg}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function HM(){return bo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${UM}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function L0(){return bo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function I0(){return bo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function VM(s){let e=new WeakMap,t=new WeakMap,r=null;function o(v,S=!1){return v==null?null:S?u(v):l(v)}function l(v){if(v&&v.isTexture){const S=v.mapping;if(S===vh||S===_h)if(e.has(v)){const w=e.get(v).texture;return d(w,v.mapping)}else{const w=v.image;if(w&&w.height>0){const N=new lf(w.height);return N.fromEquirectangularTexture(s,v),e.set(v,N),v.addEventListener("dispose",m),d(N.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture&&v.isPMREMTexture!==!0){const S=v.mapping,w=S===vh||S===_h,N=S===Ta||S===To;if(w||N){let y=t.get(v);const x=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==x)return r===null&&(r=new bc(s)),y=w?r.fromEquirectangular(v,y):r.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,t.set(v,y),y.texture;if(y!==void 0)return y.texture;{const P=v.image;return w&&P&&P.height>0||N&&P&&p(P)?(r===null&&(r=new bc(s)),y=w?r.fromEquirectangular(v):r.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,t.set(v,y),v.addEventListener("dispose",_),y.texture):null}}}return v}function d(v,S){return S===vh?v.mapping=Ta:S===_h&&(v.mapping=To),v}function p(v){let S=0;const w=6;for(let N=0;N<w;N++)v[N]!==void 0&&S++;return S===w}function m(v){const S=v.target;S.removeEventListener("dispose",m);const w=e.get(S);w!==void 0&&(e.delete(S),w.dispose())}function _(v){const S=v.target;S.removeEventListener("dispose",_);const w=t.get(S);w!==void 0&&(t.delete(S),w.dispose())}function M(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:M}}function GM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&mc("WebGLRenderer: "+r+" extension not supported."),o}}}function WM(s,e,t,r){const o={},l=new WeakMap,u=new FinalizationRegistry(w=>delete o[w]);function d(w){p(w.target)}function p(w){w.index!==null&&e.remove(w.index);for(const y in w.attributes)e.remove(w.attributes[y]);w.removeEventListener("dispose",d),delete o[w.id],u.unregister(w);const N=l.get(w);N&&(e.remove(N),l.delete(w)),r.releaseStatesOfGeometry(w),w.isInstancedBufferGeometry===!0&&delete w._maxInstanceCount,t.memory.geometries--}function m(w,N){return o[N.id]!==void 0||(N.addEventListener("dispose",d),o[N.id]=new WeakRef(N),u.register(N,N.id,N),t.memory.geometries++),N}function _(w){const N=w.attributes;for(const y in N)e.update(N[y],s.ARRAY_BUFFER)}function M(w){const N=w.index,y=w.attributes.position;let x=0;if(y===void 0)return;const P=N!==null?N.array.length:y.array.length/3-1,F=y.count>=65535?Pg:Rg,D=new F(Math.ceil(P/3)*6,1),O=D.array;if(N!==null){const T=N.array;x=N.version;for(let E=0,K=0;E<P;E+=3){const B=T[E+0],G=T[E+1],$=T[E+2];O[K++]=B,O[K++]=G,O[K++]=G,O[K++]=$,O[K++]=$,O[K++]=B}}else{x=y.version;for(let T=0,E=0;T<P;T+=3){const K=T+0,B=T+1,G=T+2;O[E++]=K,O[E++]=B,O[E++]=B,O[E++]=G,O[E++]=G,O[E++]=K}}D.version=x;const I=l.get(w);I&&e.remove(I),l.set(w,D)}function v(w){const N=l.get(w);if(N){const y=w.index;y!==null&&N.version<y.version&&M(w)}else M(w);return l.get(w)}function S(){for(const w in o){const N=o[w].deref();N!==void 0&&p(N)}}return{get:m,update:_,getWireframeAttribute:v,dispose:S}}function jM(s,e,t){let r;function o(M){r=M}let l,u;function d(M){l=M.type,u=M.bytesPerElement}function p(M,v){s.drawElements(r,v,l,M*u),t.update(v,r,1)}function m(M,v,S){S!==0&&(s.drawElementsInstanced(r,v,l,M*u,S),t.update(v,r,S))}function _(M,v,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,l,M,0,S);let N=0;for(let y=0;y<S;y++)N+=v[y];t.update(N,r,1)}this.setMode=o,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_}function XM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=d*(l/3);break;case s.LINES:t.lines+=d*(l/2);break;case s.LINE_STRIP:t.lines+=d*(l-1);break;case s.LINE_LOOP:t.lines+=d*l;break;case s.POINTS:t.points+=d*l;break;default:Ot("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function KM(s,e,t){const r=new WeakMap,o=new dn;function l(u,d,p){const m=u.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,M=_!==void 0?_.length:0;let v=r.get(d);if(v===void 0||v.count!==M){let B=function(){E.dispose(),r.delete(d),d.removeEventListener("dispose",B)};var S=B;v!==void 0&&v.texture.dispose();const w=d.morphAttributes.position!==void 0,N=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],F=d.morphAttributes.color||[];let D=0;w===!0&&(D=1),N===!0&&(D=2),y===!0&&(D=3);let O=d.attributes.position.count*D,I=1;O>e.maxTextureSize&&(I=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const T=new Float32Array(O*I*4*M),E=new bg(T,O,I,M);E.type=nr,E.needsUpdate=!0;const K=D*4;for(let G=0;G<M;G++){const $=x[G],re=P[G],H=F[G],de=O*I*4*G;for(let Y=0;Y<$.count;Y++){const ee=Y*K;w===!0&&(o.fromBufferAttribute($,Y),T[de+ee+0]=o.x,T[de+ee+1]=o.y,T[de+ee+2]=o.z,T[de+ee+3]=0),N===!0&&(o.fromBufferAttribute(re,Y),T[de+ee+4]=o.x,T[de+ee+5]=o.y,T[de+ee+6]=o.z,T[de+ee+7]=0),y===!0&&(o.fromBufferAttribute(H,Y),T[de+ee+8]=o.x,T[de+ee+9]=o.y,T[de+ee+10]=o.z,T[de+ee+11]=H.itemSize===4?o.w:1)}}v={count:M,texture:E,size:new Xe(O,I)},r.set(d,v),d.addEventListener("dispose",B)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let w=0;for(let y=0;y<m.length;y++)w+=m[y];const N=d.morphTargetsRelative?1:1-w;p.getUniforms().setValue(s,"morphTargetBaseInfluence",N),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:l}}function YM(s,e,t,r,o){let l=new WeakMap;function u(m){const _=o.render.frame,M=m.geometry,v=e.get(m,M);if(l.get(v)!==_&&(e.update(v),l.set(v,_)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),l.get(m)!==_&&(t.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&t.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,_))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==_&&(S.update(),l.set(S,_))}return v}function d(){l=new WeakMap}function p(m){const _=m.target;_.removeEventListener("dispose",p),r.releaseStatesOfObject(_),t.remove(_.instanceMatrix),_.instanceColor!==null&&t.remove(_.instanceColor)}return{update:u,dispose:d}}const qM={[og]:"LINEAR_TONE_MAPPING",[lg]:"REINHARD_TONE_MAPPING",[cg]:"CINEON_TONE_MAPPING",[Kd]:"ACES_FILMIC_TONE_MAPPING",[hg]:"AGX_TONE_MAPPING",[dg]:"NEUTRAL_TONE_MAPPING",[ug]:"CUSTOM_TONE_MAPPING"};function $M(s,e,t,r,o,l){const u=new rr(e,t,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,p=null,m=null;const _=new Zn;_.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),_.setAttribute("uv",new Yt([0,2,0,0,2,0],2));const M=new Uy({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),v=new Ut(_,M),S=new Hg(-1,1,1,-1,0,1);let w=null,N=null,y=!1,x,P=null,F=[],D=!1;this.setSize=function(O,I){u.setSize(O,I),d!==null&&d.setSize(O,I),p!==null&&p.setSize(O,I);for(let T=0;T<F.length;T++){const E=F[T];E.setSize&&E.setSize(O,I)}},this.setEffects=function(O){F=O,D=F.length>0&&F[0].isRenderPass===!0;const I=u.width,T=u.height;F.length>0&&d===null&&(d=new rr(I,T,{type:ar,depthBuffer:!1,stencilBuffer:!1}),p=new rr(I,T,{type:ar,depthBuffer:!1,stencilBuffer:!1}));const E=o===!0&&F.some(K=>K.needsDepthTexture===!0);E!==(u.depthTexture!==null)&&(E===!0&&m===null&&(m=new wa(I,T),l===!0&&(m.format=ns,m.type=Ea)),u.dispose(),u.depthTexture=E?m:null,u.resolveDepthBuffer=E,u.storeMultisampledDepthBuffer=E);for(let K=0;K<F.length;K++){const B=F[K];B.setSize&&B.setSize(I,T),E&&B.needsDepthTexture===!0&&B.setDepthTexture&&B.setDepthTexture(m)}},this.begin=function(O,I){if(y||O.toneMapping===Cr&&F.length===0)return!1;if(P=I,I!==null){const T=I.width,E=I.height;(u.width!==T||u.height!==E)&&this.setSize(T,E)}return D===!1&&O.setRenderTarget(u),x=O.toneMapping,O.toneMapping=Cr,!0},this.hasRenderPass=function(){return D},this.end=function(O,I){O.toneMapping=x,y=!0;let T=u,E=d;for(let K=0;K<F.length;K++){const B=F[K];B.enabled!==!1&&(B.render(O,E,T,I),B.needsSwap!==!1&&(T=E,E=E===d?p:d))}if(w!==O.outputColorSpace||N!==O.toneMapping){w=O.outputColorSpace,N=O.toneMapping,M.defines={},Dt.getTransfer(w)===Kt&&(M.defines.SRGB_TRANSFER="");const K=qM[N];K&&(M.defines[K]=""),M.needsUpdate=!0}M.uniforms.tDiffuse.value=T.texture,O.setRenderTarget(P),O.render(v,S),P=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){u.dispose(),d!==null&&d.dispose(),p!==null&&p.dispose(),_.dispose(),M.dispose()}}const Xg=new $n,Kg=new wa(1,1),Yg=new Ig(1),qg=new bg,$g=new $x,Zg=new Lg,U0=[],O0=[],F0=new Float32Array(16),k0=new Float32Array(9),B0=new Float32Array(4);function Aa(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=U0[o];if(l===void 0&&(l=new Float32Array(o),U0[o]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,s[u].toArray(l,d)}return l}function An(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function bn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Lc(s,e){let t=O0[e];t===void 0&&(t=new Int32Array(e),O0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function ZM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function QM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(An(t,e))return;s.uniform2fv(this.addr,e),bn(t,e)}}function JM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(An(t,e))return;s.uniform3fv(this.addr,e),bn(t,e)}}function eT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(An(t,e))return;s.uniform4fv(this.addr,e),bn(t,e)}}function tT(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(An(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),bn(t,e)}else{if(An(t,r))return;B0.set(r),s.uniformMatrix2fv(this.addr,!1,B0),bn(t,r)}}function nT(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(An(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),bn(t,e)}else{if(An(t,r))return;k0.set(r),s.uniformMatrix3fv(this.addr,!1,k0),bn(t,r)}}function iT(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(An(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),bn(t,e)}else{if(An(t,r))return;F0.set(r),s.uniformMatrix4fv(this.addr,!1,F0),bn(t,r)}}function rT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function sT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(An(t,e))return;s.uniform2iv(this.addr,e),bn(t,e)}}function aT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(An(t,e))return;s.uniform3iv(this.addr,e),bn(t,e)}}function oT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(An(t,e))return;s.uniform4iv(this.addr,e),bn(t,e)}}function lT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function cT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(An(t,e))return;s.uniform2uiv(this.addr,e),bn(t,e)}}function uT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(An(t,e))return;s.uniform3uiv(this.addr,e),bn(t,e)}}function hT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(An(t,e))return;s.uniform4uiv(this.addr,e),bn(t,e)}}function Ic(s){return s.version===0&&(s.compareFunction=Tg,s.needsUpdate=!0),s}function dT(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?l=Ic(Kg):l=Xg,t.setTexture2D(e||l,o)}function fT(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||$g,o)}function pT(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_CUBE_SHADOW?l=Ic(Yg):l=Zg,t.setTextureCube(e||l,o)}function mT(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||qg,o)}function gT(s){switch(s){case 5126:return ZM;case 35664:return QM;case 35665:return JM;case 35666:return eT;case 35674:return tT;case 35675:return nT;case 35676:return iT;case 5124:case 35670:return rT;case 35667:case 35671:return sT;case 35668:case 35672:return aT;case 35669:case 35673:return oT;case 5125:return lT;case 36294:return cT;case 36295:return uT;case 36296:return hT;case 35678:case 36198:case 36298:case 36306:case 35682:return dT;case 35679:case 36299:case 36307:return fT;case 35680:case 36300:case 36308:case 36293:return pT;case 36289:case 36303:case 36311:case 36292:return mT}}function vT(s,e){s.uniform1fv(this.addr,e)}function _T(s,e){const t=Aa(e,this.size,2);s.uniform2fv(this.addr,t)}function xT(s,e){const t=Aa(e,this.size,3);s.uniform3fv(this.addr,t)}function yT(s,e){const t=Aa(e,this.size,4);s.uniform4fv(this.addr,t)}function ST(s,e){const t=Aa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function MT(s,e){const t=Aa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function TT(s,e){const t=Aa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function ET(s,e){s.uniform1iv(this.addr,e)}function wT(s,e){s.uniform2iv(this.addr,e)}function CT(s,e){s.uniform3iv(this.addr,e)}function AT(s,e){s.uniform4iv(this.addr,e)}function bT(s,e){s.uniform1uiv(this.addr,e)}function NT(s,e){s.uniform2uiv(this.addr,e)}function RT(s,e){s.uniform3uiv(this.addr,e)}function PT(s,e){s.uniform4uiv(this.addr,e)}function DT(s,e,t){const r=this.cache,o=e.length,l=Lc(t,o);An(r,l)||(s.uniform1iv(this.addr,l),bn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=Ic(Kg):u=Xg;for(let d=0;d!==o;++d)t.setTexture2D(e[d]||u,l[d])}function LT(s,e,t){const r=this.cache,o=e.length,l=Lc(t,o);An(r,l)||(s.uniform1iv(this.addr,l),bn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||$g,l[u])}function IT(s,e,t){const r=this.cache,o=e.length,l=Lc(t,o);An(r,l)||(s.uniform1iv(this.addr,l),bn(r,l));let u;this.type===s.SAMPLER_CUBE_SHADOW?u=Ic(Yg):u=Zg;for(let d=0;d!==o;++d)t.setTextureCube(e[d]||u,l[d])}function UT(s,e,t){const r=this.cache,o=e.length,l=Lc(t,o);An(r,l)||(s.uniform1iv(this.addr,l),bn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||qg,l[u])}function OT(s){switch(s){case 5126:return vT;case 35664:return _T;case 35665:return xT;case 35666:return yT;case 35674:return ST;case 35675:return MT;case 35676:return TT;case 5124:case 35670:return ET;case 35667:case 35671:return wT;case 35668:case 35672:return CT;case 35669:case 35673:return AT;case 5125:return bT;case 36294:return NT;case 36295:return RT;case 36296:return PT;case 35678:case 36198:case 36298:case 36306:case 35682:return DT;case 35679:case 36299:case 36307:return LT;case 35680:case 36300:case 36308:case 36293:return IT;case 36289:case 36303:case 36311:case 36292:return UT}}class FT{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=gT(t.type)}}class kT{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=OT(t.type)}}class BT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const d=o[l];d.setValue(e,t[d.id],r)}}}const qh=/(\w+)(\])?(\[|\.)?/g;function z0(s,e){s.seq.push(e),s.map[e.id]=e}function zT(s,e,t){const r=s.name,o=r.length;for(qh.lastIndex=0;;){const l=qh.exec(r),u=qh.lastIndex;let d=l[1];const p=l[2]==="]",m=l[3];if(p&&(d=d|0),m===void 0||m==="["&&u+2===o){z0(t,m===void 0?new FT(d,s,e):new kT(d,s,e));break}else{let M=t.map[d];M===void 0&&(M=new BT(d),z0(t,M)),t=M}}}class gc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(t,u),p=e.getUniformLocation(t,d.name);zT(d,p,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const d=t[l],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function H0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const HT=37297;let VT=0;function GT(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return r.join(`
`)}const V0=new xt;function WT(s){Dt._getMatrix(V0,Dt.workingColorSpace,s);const e=`mat3( ${V0.elements.map(t=>t.toFixed(4))} )`;switch(Dt.getTransfer(s)){case yc:return[e,"LinearTransferOETF"];case Kt:return[e,"sRGBTransferOETF"];default:return mt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function G0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+GT(s.getShaderSource(e),d)}else return l}function jT(s,e){const t=WT(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const XT={[og]:"Linear",[lg]:"Reinhard",[cg]:"Cineon",[Kd]:"ACESFilmic",[hg]:"AgX",[dg]:"Neutral",[ug]:"Custom"};function KT(s,e){const t=XT[e];return t===void 0?(mt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const oc=new C;function YT(){Dt.getLuminanceCoefficients(oc);const s=oc.x.toFixed(4),e=oc.y.toFixed(4),t=oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vo).join(`
`)}function $T(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function ZT(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return t}function vo(s){return s!==""}function W0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function j0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wd(s){return s.replace(QT,JT)}function JT(s,e){const t=Tt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Wd(t)}const eE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function X0(s){return s.replace(eE,tE)}function tE(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function K0(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const nE={[uc]:"SHADOWMAP_TYPE_PCF",[go]:"SHADOWMAP_TYPE_VSM"};function iE(s){return nE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const rE={[To]:"ENVMAP_MODE_REFRACTION"};function sE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":rE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const aE={[ag]:"ENVMAP_BLENDING_MULTIPLY",[Ax]:"ENVMAP_BLENDING_MIX",[bx]:"ENVMAP_BLENDING_ADD"};function oE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":aE[s.combine]||"ENVMAP_BLENDING_NONE"}function lE(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const p=iE(t),m=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",_=sE(t),M=oE(t),v=qT(t),S=$T(l),w=o.createProgram();let N,y,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(N=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(vo).join(`
`),N.length>0&&(N+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(vo).join(`
`),y.length>0&&(y+=`
`)):(N=[K0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vo).join(`
`),y=[K0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",t.envMap?"#define "+M:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cr?"#define TONE_MAPPING":"",t.toneMapping!==Cr?Tt.tonemapping_pars_fragment:"",t.toneMapping!==Cr?KT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,jT("linearToOutputTexel",t.outputColorSpace),YT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vo).join(`
`)),u=Wd(u),u=W0(u,t),u=j0(u,t),d=Wd(d),d=W0(d,t),d=j0(d,t),u=X0(u),d=X0(d),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,N=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+N,y=["#define varying in",t.glslVersion===Xm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const P=x+N+u,F=x+y+d,D=H0(o,o.VERTEX_SHADER,P),O=H0(o,o.FRAGMENT_SHADER,F);o.attachShader(w,D),o.attachShader(w,O),t.index0AttributeName!==void 0?o.bindAttribLocation(w,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function I(B){if(s.debug.checkShaderErrors){const G=o.getProgramInfoLog(w)||"",$=o.getShaderInfoLog(D)||"",re=o.getShaderInfoLog(O)||"",H=G.trim(),de=$.trim(),Y=re.trim();let ee=!0,ne=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(ee=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,w,D,O);else{const Q=G0(o,D,"vertex"),te=G0(o,O,"fragment");Ot("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+H+`
`+Q+`
`+te)}else H!==""?mt("WebGLProgram: Program Info Log:",H):(de===""||Y==="")&&(ne=!1);ne&&(B.diagnostics={runnable:ee,programLog:H,vertexShader:{log:de,prefix:N},fragmentShader:{log:Y,prefix:y}})}o.deleteShader(D),o.deleteShader(O),T=new gc(o,w),E=ZT(o,w)}let T;this.getUniforms=function(){return T===void 0&&I(this),T};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let K=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return K===!1&&(K=o.getProgramParameter(w,HT)),K},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=VT++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=D,this.fragmentShader=O,this}let cE=0;class uE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new hE(e),t.set(e,r)),r}}class hE{constructor(e){this.id=cE++,this.code=e,this.usedTimes=0}}function dE(s){return s===As||s===vc||s===_c}function fE(s,e,t,r,o,l){const u=new tf,d=new uE,p=new Set,m=[],_=new Map,M=r.logarithmicDepthBuffer,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(T){return p.add(T),T===0?"uv":`uv${T}`}function w(T,E,K,B,G,$){const re=B.fog,H=G.geometry,de=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?B.environment:null,Y=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,ee=e.get(T.envMap||de,Y),ne=v[T.type];let Q=r.precision;T.precision!==null&&(Q=r.getMaxPrecision(T.precision),Q!==T.precision&&mt("WebGLProgram.getParameters:",T.precision,"not supported, using",Q,"instead."));const te=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,U=te!==void 0?te.length:0;let ie=0;H.morphAttributes.position!==void 0&&(ie=1),H.morphAttributes.normal!==void 0&&(ie=2),H.morphAttributes.color!==void 0&&(ie=3);let Oe,le,Te,be;if(ne){const we=tr[ne];Oe=we.vertexShader,le=we.fragmentShader}else{Oe=T.vertexShader,le=T.fragmentShader;const we=d.getVertexShaderStage(T),ct=d.getFragmentShaderStage(T);d.update(T,we,ct),Te=we.id,be=ct.id}const He=s.getRenderTarget(),Ee=s.state.buffers.depth.getReversed(),Ke=G.isInstancedMesh===!0,Ze=G.isBatchedMesh===!0,Ye=!!T.map,ut=!!T.matcap,St=!!ee,yt=St&&ee.isPMREMTexture===!0,Qt=!!T.aoMap,qt=!!T.lightMap,$t=!!T.bumpMap&&T.wireframe===!1,Ft=!!T.normalMap,yn=!!T.displacementMap,kt=!!T.emissiveMap,Jt=!!T.metalnessMap,he=!!T.roughnessMap,Ve=T.anisotropy>0,V=T.clearcoat>0,rt=T.diffuseRoughness>0,ot=T.dispersion>0,ft=T.retroreflectivity>0,Ce=T.iridescence>0,_t=T.sheen>0,Ae=T.transmission>0,qe=Ve&&!!T.anisotropyMap,L=V&&!!T.clearcoatMap,b=V&&!!T.clearcoatNormalMap,q=V&&!!T.clearcoatRoughnessMap,ve=rt&&!!T.diffuseRoughnessMap,Me=Ce&&!!T.iridescenceMap,De=Ce&&!!T.iridescenceThicknessMap,Ue=_t&&!!T.sheenColorMap,ge=_t&&!!T.sheenRoughnessMap,_e=!!T.specularMap,Ie=!!T.specularColorMap,z=!!T.specularIntensityMap,xe=Ae&&!!T.transmissionMap,W=Ae&&!!T.thicknessMap,J=!!T.gradientMap,ye=!!T.alphaMap,ue=T.alphaTest>0,Se=!!T.alphaHash,ke=!!T.extensions;let se=Cr;T.toneMapped&&(He===null||He.isXRRenderTarget===!0)&&(se=s.toneMapping);const Pe=yt?ee.isCompressedCubeTexture?ee.image[0].mipmaps:ee.mipmaps:null,Ge={shaderID:ne,shaderType:T.type,shaderName:T.name,vertexShader:Oe,fragmentShader:le,defines:T.defines,customVertexShaderID:Te,customFragmentShaderID:be,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:Q,batching:Ze,batchingColor:Ze&&G._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&G.instanceColor!==null,instancingMorph:Ke&&G.morphTexture!==null,outputColorSpace:He===null?s.outputColorSpace:He.isXRRenderTarget===!0?He.texture.colorSpace:Dt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Ye,matcap:ut,envMap:St,envMapMode:St&&ee.mapping,envMapPMREM:yt,envMapMaxLod:yt?Pe.length-1:null,envMapSize:yt?Pe[0].width:null,aoMap:Qt,lightMap:qt,bumpMap:$t,normalMap:Ft,displacementMap:yn,emissiveMap:kt,normalMapObjectSpace:Ft&&T.normalMapType===Px,normalMapTangentSpace:Ft&&T.normalMapType===kd,packedNormalMap:Ft&&T.normalMapType===kd&&dE(T.normalMap.format),metalnessMap:Jt,roughnessMap:he,anisotropy:Ve,anisotropyMap:qe,clearcoat:V,clearcoatMap:L,clearcoatNormalMap:b,clearcoatRoughnessMap:q,diffuseRoughness:rt,diffuseRoughnessMap:ve,dispersion:ot,retroreflection:ft,iridescence:Ce,iridescenceMap:Me,iridescenceThicknessMap:De,sheen:_t,sheenColorMap:Ue,sheenRoughnessMap:ge,specularMap:_e,specularColorMap:Ie,specularIntensityMap:z,transmission:Ae,transmissionMap:xe,thicknessMap:W,gradientMap:J,opaque:T.transparent===!1&&T.blending===_o&&T.alphaToCoverage===!1,alphaMap:ye,alphaTest:ue,alphaHash:Se,combine:T.combine,mapUv:Ye&&S(T.map.channel),aoMapUv:Qt&&S(T.aoMap.channel),lightMapUv:qt&&S(T.lightMap.channel),bumpMapUv:$t&&S(T.bumpMap.channel),normalMapUv:Ft&&S(T.normalMap.channel),displacementMapUv:yn&&S(T.displacementMap.channel),emissiveMapUv:kt&&S(T.emissiveMap.channel),metalnessMapUv:Jt&&S(T.metalnessMap.channel),roughnessMapUv:he&&S(T.roughnessMap.channel),anisotropyMapUv:qe&&S(T.anisotropyMap.channel),clearcoatMapUv:L&&S(T.clearcoatMap.channel),clearcoatNormalMapUv:b&&S(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&S(T.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ve&&S(T.diffuseRoughnessMap.channel),iridescenceMapUv:Me&&S(T.iridescenceMap.channel),iridescenceThicknessMapUv:De&&S(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&S(T.sheenColorMap.channel),sheenRoughnessMapUv:ge&&S(T.sheenRoughnessMap.channel),specularMapUv:_e&&S(T.specularMap.channel),specularColorMapUv:Ie&&S(T.specularColorMap.channel),specularIntensityMapUv:z&&S(T.specularIntensityMap.channel),transmissionMapUv:xe&&S(T.transmissionMap.channel),thicknessMapUv:W&&S(T.thicknessMap.channel),alphaMapUv:ye&&S(T.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ft||Ve),vertexNormals:!!H.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!H.attributes.uv&&(Ye||ye),fog:!!re,useFog:T.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||H.attributes.normal===void 0&&Ft===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:M,reversedDepthBuffer:Ee,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ie,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:$.filter(we=>we.texture!==null).length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&K.length>0,shadowMapType:s.shadowMap.type,toneMapping:se,decodeVideoTexture:Ye&&T.map.isVideoTexture===!0&&Dt.getTransfer(T.map.colorSpace)===Kt,decodeVideoTextureEmissive:kt&&T.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(T.emissiveMap.colorSpace)===Kt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Gi,flipSided:T.side===hi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:ke&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&T.extensions.multiDraw===!0||Ze)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ge.vertexUv1s=p.has(1),Ge.vertexUv2s=p.has(2),Ge.vertexUv3s=p.has(3),p.clear(),Ge}function N(T){const E=[];if(T.shaderID?E.push(T.shaderID):(E.push(T.customVertexShaderID),E.push(T.customFragmentShaderID)),T.defines!==void 0)for(const K in T.defines)E.push(K),E.push(T.defines[K]);return T.isRawShaderMaterial===!1&&(y(E,T),x(E,T),E.push(s.outputColorSpace)),E.push(T.customProgramCacheKey),E.join()}function y(T,E){T.push(E.precision),T.push(E.outputColorSpace),T.push(E.envMapMode),T.push(E.envMapPMREM),T.push(E.envMapMaxLod),T.push(E.envMapSize),T.push(E.mapUv),T.push(E.alphaMapUv),T.push(E.lightMapUv),T.push(E.aoMapUv),T.push(E.bumpMapUv),T.push(E.normalMapUv),T.push(E.displacementMapUv),T.push(E.emissiveMapUv),T.push(E.metalnessMapUv),T.push(E.roughnessMapUv),T.push(E.anisotropyMapUv),T.push(E.clearcoatMapUv),T.push(E.clearcoatNormalMapUv),T.push(E.clearcoatRoughnessMapUv),T.push(E.diffuseRoughnessMapUv),T.push(E.iridescenceMapUv),T.push(E.iridescenceThicknessMapUv),T.push(E.sheenColorMapUv),T.push(E.sheenRoughnessMapUv),T.push(E.specularMapUv),T.push(E.specularColorMapUv),T.push(E.specularIntensityMapUv),T.push(E.transmissionMapUv),T.push(E.thicknessMapUv),T.push(E.combine),T.push(E.fogExp2),T.push(E.sizeAttenuation),T.push(E.morphTargetsCount),T.push(E.numSunLights),T.push(E.numDirLights),T.push(E.numPointLights),T.push(E.numSpotLights),T.push(E.numSpotLightMaps),T.push(E.numHemiLights),T.push(E.numRectAreaLights),T.push(E.numSunLightShadows),T.push(E.numDirLightShadows),T.push(E.numPointLightShadows),T.push(E.numSpotLightShadows),T.push(E.numSpotLightShadowsWithMaps),T.push(E.numLightProbes),T.push(E.numLightProbeGrids),T.push(E.shadowMapType),T.push(E.toneMapping),T.push(E.numClippingPlanes),T.push(E.numClipIntersection),T.push(E.depthPacking)}function x(T,E){u.disableAll(),E.instancing&&u.enable(0),E.instancingColor&&u.enable(1),E.instancingMorph&&u.enable(2),E.matcap&&u.enable(3),E.envMap&&u.enable(4),E.normalMapObjectSpace&&u.enable(5),E.normalMapTangentSpace&&u.enable(6),E.clearcoat&&u.enable(7),E.iridescence&&u.enable(8),E.alphaTest&&u.enable(9),E.vertexColors&&u.enable(10),E.vertexAlphas&&u.enable(11),E.vertexUv1s&&u.enable(12),E.vertexUv2s&&u.enable(13),E.vertexUv3s&&u.enable(14),E.vertexTangents&&u.enable(15),E.anisotropy&&u.enable(16),E.alphaHash&&u.enable(17),E.batching&&u.enable(18),E.dispersion&&u.enable(19),E.retroreflection&&u.enable(24),E.diffuseRoughness&&u.enable(25),E.batchingColor&&u.enable(20),E.gradientMap&&u.enable(21),E.packedNormalMap&&u.enable(22),E.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),E.fog&&u.enable(0),E.useFog&&u.enable(1),E.flatShading&&u.enable(2),E.logarithmicDepthBuffer&&u.enable(3),E.reversedDepthBuffer&&u.enable(4),E.skinning&&u.enable(5),E.morphTargets&&u.enable(6),E.morphNormals&&u.enable(7),E.morphColors&&u.enable(8),E.premultipliedAlpha&&u.enable(9),E.shadowMapEnabled&&u.enable(10),E.doubleSided&&u.enable(11),E.flipSided&&u.enable(12),E.useDepthPacking&&u.enable(13),E.dithering&&u.enable(14),E.transmission&&u.enable(15),E.sheen&&u.enable(16),E.opaque&&u.enable(17),E.pointsUvs&&u.enable(18),E.decodeVideoTexture&&u.enable(19),E.decodeVideoTextureEmissive&&u.enable(20),E.alphaToCoverage&&u.enable(21),E.numLightProbeGrids>0&&u.enable(22),E.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function P(T){const E=v[T.type];let K;if(E){const B=tr[E];K=Dy.clone(B.uniforms)}else K=T.uniforms;return K}function F(T,E){let K=_.get(E);return K!==void 0?++K.usedTimes:(K=new lE(s,E,T,o),m.push(K),_.set(E,K)),K}function D(T){if(--T.usedTimes===0){const E=m.indexOf(T);m[E]=m[m.length-1],m.pop(),_.delete(T.cacheKey),T.destroy()}}function O(T){d.remove(T)}function I(){d.dispose()}return{getParameters:w,getProgramCacheKey:N,getUniforms:P,acquireProgram:F,releaseProgram:D,releaseShaderCache:O,programs:m,dispose:I}}function pE(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function o(u,d,p){s.get(u)[d]=p}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function mE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Y0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function q0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(v){let S=0;return v.isInstancedMesh&&(S+=2),v.isSkinnedMesh&&(S+=1),S}function d(v,S,w,N,y,x){let P=s[e];return P===void 0?(P={id:v.id,object:v,geometry:S,material:w,materialVariant:u(v),groupOrder:N,renderOrder:v.renderOrder,z:y,group:x},s[e]=P):(P.id=v.id,P.object=v,P.geometry=S,P.material=w,P.materialVariant=u(v),P.groupOrder=N,P.renderOrder=v.renderOrder,P.z=y,P.group=x),e++,P}function p(v,S,w,N,y,x,P){P.reversedDepth===!0&&(y=-y);const F=d(v,S,w,N,y,x);w.transmission>0?r.push(F):w.transparent===!0?o.push(F):t.push(F)}function m(v,S,w,N,y,x){const P=d(v,S,w,N,y,x);w.transmission>0?r.unshift(P):w.transparent===!0?o.unshift(P):t.unshift(P)}function _(v,S){t.length>1&&t.sort(v||mE),r.length>1&&r.sort(S||Y0),o.length>1&&o.sort(S||Y0)}function M(){for(let v=e,S=s.length;v<S;v++){const w=s[v];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:p,unshift:m,finish:M,sort:_}}function gE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new q0,s.set(r,[u])):o>=l.length?(u=new q0,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function vE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new C,color:new At};break;case"SpotLight":t={position:new C,direction:new C,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new At,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new At,groundColor:new At};break;case"RectAreaLight":t={color:new At,position:new C,halfWidth:new C,halfHeight:new C};break}return s[e.id]=t,t}}}function _E(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let xE=0;function yE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function SE(s){const e=new vE,t=_E(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new C);const o=new C,l=new tn,u=new tn;function d(m){let _=0,M=0,v=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let S=0,w=0,N=0,y=0,x=0,P=0,F=0,D=0,O=0,I=0,T=0,E=0,K=0,B=0;m.sort(yE);for(let $=0,re=m.length;$<re;$++){const H=m[$],de=H.color,Y=H.intensity,ee=H.distance;let ne=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===As?ne=H.shadow.map.texture:ne=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)_+=de.r*Y,M+=de.g*Y,v+=de.b*Y;else if(H.isLightProbe){for(let Q=0;Q<9;Q++)r.probe[Q].addScaledVector(H.sh.coefficients[Q],Y);B++}else if(H.isSunLight){const Q=e.get(H);if(Q.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const te=H.shadow,U=t.get(H);U.shadowIntensity=te.intensity,U.shadowBias=te.bias,U.shadowNormalBias=te.normalBias,U.shadowRadius=te.radius,U.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),r.sunShadow[w]=U,r.sunShadowMap[w]=ne;const ie=te.getViewportCount();for(let Oe=0;Oe<ie;Oe++)r.sunShadowMatrix[N+Oe]=te.getMatrix(Oe),r.sunShadowCascade[N+Oe]=te._cascadeData[Oe];N+=ie,w++}r.sun[S]=Q,S++}else if(H.isDirectionalLight){const Q=e.get(H);if(Q.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const te=H.shadow,U=t.get(H);U.shadowIntensity=te.intensity,U.shadowBias=te.bias,U.shadowNormalBias=te.normalBias,U.shadowRadius=te.radius,U.shadowMapSize=te.mapSize,r.directionalShadow[y]=U,r.directionalShadowMap[y]=ne,r.directionalShadowMatrix[y]=H.shadow.matrix,O++}r.directional[y]=Q,y++}else if(H.isSpotLight){const Q=e.get(H);Q.position.setFromMatrixPosition(H.matrixWorld),Q.color.copy(de).multiplyScalar(Y),Q.distance=ee,Q.coneCos=Math.cos(H.angle),Q.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),Q.decay=H.decay,r.spot[P]=Q;const te=H.shadow;if(H.map&&(r.spotLightMap[E]=H.map,E++,te.updateMatrices(H),H.castShadow&&K++),r.spotLightMatrix[P]=te.matrix,H.castShadow){const U=t.get(H);U.shadowIntensity=te.intensity,U.shadowBias=te.bias,U.shadowNormalBias=te.normalBias,U.shadowRadius=te.radius,U.shadowMapSize=te.mapSize,r.spotShadow[P]=U,r.spotShadowMap[P]=ne,T++}P++}else if(H.isRectAreaLight){const Q=e.get(H);Q.color.copy(de).multiplyScalar(Y),Q.halfWidth.set(H.width*.5,0,0),Q.halfHeight.set(0,H.height*.5,0),r.rectArea[F]=Q,F++}else if(H.isPointLight){const Q=e.get(H);if(Q.color.copy(H.color).multiplyScalar(H.intensity),Q.distance=H.distance,Q.decay=H.decay,H.castShadow){const te=H.shadow,U=t.get(H);U.shadowIntensity=te.intensity,U.shadowBias=te.bias,U.shadowNormalBias=te.normalBias,U.shadowRadius=te.radius,U.shadowMapSize=te.mapSize,U.shadowCameraNear=te.camera.near,U.shadowCameraFar=te.camera.far,r.pointShadow[x]=U,r.pointShadowMap[x]=ne,r.pointShadowMatrix[x]=H.shadow.matrix,I++}r.point[x]=Q,x++}else if(H.isHemisphereLight){const Q=e.get(H);Q.skyColor.copy(H.color).multiplyScalar(Y),Q.groundColor.copy(H.groundColor).multiplyScalar(Y),r.hemi[D]=Q,D++}}F>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=je.LTC_FLOAT_1,r.rectAreaLTC2=je.LTC_FLOAT_2):(r.rectAreaLTC1=je.LTC_HALF_1,r.rectAreaLTC2=je.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=M,r.ambient[2]=v;const G=r.hash;(G.sunLength!==S||G.directionalLength!==y||G.pointLength!==x||G.spotLength!==P||G.rectAreaLength!==F||G.hemiLength!==D||G.numSunShadows!==w||G.numDirectionalShadows!==O||G.numPointShadows!==I||G.numSpotShadows!==T||G.numSpotMaps!==E||G.numLightProbes!==B)&&(r.sun.length=S,r.directional.length=y,r.spot.length=P,r.rectArea.length=F,r.point.length=x,r.hemi.length=D,r.sunShadow.length=w,r.sunShadowMap.length=w,r.sunShadowMatrix.length=N,r.sunShadowCascade.length=N,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.directionalShadowMatrix.length=O,r.pointShadow.length=I,r.pointShadowMap.length=I,r.pointShadowMatrix.length=I,r.spotShadow.length=T,r.spotShadowMap.length=T,r.spotLightMatrix.length=T+E-K,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=K,r.numLightProbes=B,G.sunLength=S,G.directionalLength=y,G.pointLength=x,G.spotLength=P,G.rectAreaLength=F,G.hemiLength=D,G.numSunShadows=w,G.numDirectionalShadows=O,G.numPointShadows=I,G.numSpotShadows=T,G.numSpotMaps=E,G.numLightProbes=B,r.version=xE++)}function p(m,_){let M=0,v=0,S=0,w=0,N=0,y=0;const x=_.matrixWorldInverse;for(let P=0,F=m.length;P<F;P++){const D=m[P];if(D.isSunLight){const O=r.sun[M];O.direction.setFromMatrixPosition(D.matrixWorld),O.direction.transformDirection(x),M++}else if(D.isDirectionalLight){const O=r.directional[v];O.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),O.direction.sub(o),O.direction.transformDirection(x),v++}else if(D.isSpotLight){const O=r.spot[w];O.position.setFromMatrixPosition(D.matrixWorld),O.position.applyMatrix4(x),O.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),O.direction.sub(o),O.direction.transformDirection(x),w++}else if(D.isRectAreaLight){const O=r.rectArea[N];O.position.setFromMatrixPosition(D.matrixWorld),O.position.applyMatrix4(x),u.identity(),l.copy(D.matrixWorld),l.premultiply(x),u.extractRotation(l),O.halfWidth.set(D.width*.5,0,0),O.halfHeight.set(0,D.height*.5,0),O.halfWidth.applyMatrix4(u),O.halfHeight.applyMatrix4(u),N++}else if(D.isPointLight){const O=r.point[S];O.position.setFromMatrixPosition(D.matrixWorld),O.position.applyMatrix4(x),S++}else if(D.isHemisphereLight){const O=r.hemi[y];O.direction.setFromMatrixPosition(D.matrixWorld),O.direction.transformDirection(x),y++}}}return{setup:d,setupView:p,state:r}}function $0(s){const e=new SE(s),t=[],r=[],o=[];function l(M){_.camera=M,t.length=0,r.length=0,o.length=0}function u(M){M.isLightProbeGrid?o.push(M):t.push(M)}function d(M){r.push(M)}function p(){e.setup(t),o.sort((M,v)=>M.priority-v.priority||M.id-v.id)}function m(M){e.setupView(t,M)}const _={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:_,setupLights:p,setupLightsView:m,pushLight:u,pushShadow:d}}function ME(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let d;return u===void 0?(d=new $0(s),e.set(o,[d])):l>=u.length?(d=new $0(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const TE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,wE=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],CE=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Z0=new tn,mo=new C,$h=new C;function AE(s,e,t){let r=new Co;const o=new Xe,l=new Xe,u=new dn,d=new Oy,p=new Fy,m={},_=t.maxTextureSize,M={[Cs]:hi,[hi]:Cs,[Gi]:Gi},v=new bs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:TE,fragmentShader:EE}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const w=new Zn;w.setAttribute("position",new is(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const N=new Ut(w,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uc;let x=this.type;this.render=function(I,T,E){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;this.type===ig&&(mt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=uc);const K=s.getRenderTarget(),B=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),$=s.state;$.setBlending(Sa),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const re=x!==this.type;re&&T.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(de=>de.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,de=I.length;H<de;H++){const Y=I[H],ee=Y.shadow;if(ee===void 0){mt("WebGLShadowMap:",Y,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;o.copy(ee.mapSize);const ne=ee.getFrameExtents();o.multiply(ne),l.copy(ee.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(l.x=Math.floor(_/ne.x),o.x=l.x*ne.x,ee.mapSize.x=l.x),o.y>_&&(l.y=Math.floor(_/ne.y),o.y=l.y*ne.y,ee.mapSize.y=l.y));const Q=s.state.buffers.depth.getReversed();if(ee.camera._reversedDepth=Q,ee.map===null||re===!0){if(ee.map!==null&&(ee.map.depthTexture!==null&&(ee.map.depthTexture.dispose(),ee.map.depthTexture=null),ee.map.dispose()),this.type===go){if(Y.isPointLight){mt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ee.map=new rr(o.x,o.y,{format:As,type:ar,minFilter:ni,magFilter:ni,generateMipmaps:!1}),ee.map.texture.name=Y.name+".shadowMap",ee.map.depthTexture=new wa(o.x,o.y,nr),ee.map.depthTexture.name=Y.name+".shadowMapDepth",ee.map.depthTexture.format=rs,ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=Bn,ee.map.depthTexture.magFilter=Bn}else Y.isPointLight?(ee.map=new lf(o.x),ee.map.depthTexture=new Ig(o.x,sr)):(ee.map=new rr(o.x,o.y),ee.map.depthTexture=new wa(o.x,o.y,sr)),ee.map.depthTexture.name=Y.name+".shadowMap",ee.map.depthTexture.format=rs,this.type===uc?(ee.map.depthTexture.compareFunction=Q?Mg:Sg,ee.map.depthTexture.minFilter=ni,ee.map.depthTexture.magFilter=ni):(ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=Bn,ee.map.depthTexture.magFilter=Bn);ee.camera.updateProjectionMatrix()}ee.map.isWebGLCubeRenderTarget!==!0&&(ee.map.width!==o.x||ee.map.height!==o.y)&&ee.map.setSize(o.x,o.y);const te=ee.map.isWebGLCubeRenderTarget?6:ee.getViewportCount();Y.isPointLight!==!0&&ee.updateMatrices(Y,E);const U=(ee.camera.layers.mask&4294967294)!==0?ee.camera.layers:E.layers;for(let ie=0;ie<te;ie++){const Oe=ee.getCamera(ie);if(Y.isPointLight){const le=ee.camera,Te=ee.matrix,be=Y.distance||le.far;be!==le.far&&(le.far=be,le.updateProjectionMatrix()),mo.setFromMatrixPosition(Y.matrixWorld),le.position.copy(mo),$h.copy(le.position),$h.add(wE[ie]),le.up.copy(CE[ie]),le.lookAt($h),le.updateMatrixWorld(),Te.makeTranslation(-mo.x,-mo.y,-mo.z),Z0.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),ee._frustum.setFromProjectionMatrix(Z0,le.coordinateSystem,le.reversedDepth)}if(ee.map.isWebGLCubeRenderTarget)s.setRenderTarget(ee.map,ie),s.clear();else{ie===0&&(s.setRenderTarget(ee.map),s.clear());const le=ee.getViewport(ie);u.set(l.x*le.x,l.y*le.y,l.x*le.z,l.y*le.w),$.viewport(u)}r=ee.getFrustum(ie),D(T,E,Oe,Y,U,this.type)}ee.isPointLightShadow!==!0&&this.type===go&&P(ee,E),ee.needsUpdate=!1}x=this.type,y.needsUpdate=!1,s.setRenderTarget(K,B,G)};function P(I,T){const E=e.update(N);v.defines.VSM_SAMPLES!==I.blurSamples&&(v.defines.VSM_SAMPLES=I.blurSamples,S.defines.VSM_SAMPLES=I.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),I.mapPass===null?I.mapPass=new rr(o.x,o.y,{format:As,type:ar}):(I.mapPass.width!==I.map.width||I.mapPass.height!==I.map.height)&&I.mapPass.setSize(I.map.width,I.map.height),v.uniforms.shadow_pass.value=I.map.depthTexture,v.uniforms.resolution.value.set(I.map.width,I.map.height),v.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(T,null,E,v,N,null),S.uniforms.shadow_pass.value=I.mapPass.texture,S.uniforms.resolution.value.set(I.map.width,I.map.height),S.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(T,null,E,S,N,null)}function F(I,T,E,K){let B=null;const G=E.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(G!==void 0)B=G;else if(B=E.isPointLight===!0?p:d,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const $=B.uuid,re=T.uuid;let H=m[$];H===void 0&&(H={},m[$]=H);let de=H[re];de===void 0&&(de=B.clone(),H[re]=de,T.addEventListener("dispose",O)),B=de}if(B.visible=T.visible,B.wireframe=T.wireframe,K===go?B.side=T.shadowSide!==null?T.shadowSide:T.side:B.side=T.shadowSide!==null?T.shadowSide:M[T.side],B.alphaMap=T.alphaMap,B.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,B.map=T.map,B.clipShadows=T.clipShadows,B.clippingPlanes=T.clippingPlanes,B.clipIntersection=T.clipIntersection,B.displacementMap=T.displacementMap,B.displacementScale=T.displacementScale,B.displacementBias=T.displacementBias,B.wireframeLinewidth=T.wireframeLinewidth,B.linewidth=T.linewidth,E.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const $=s.properties.get(B);$.light=E}return B}function D(I,T,E,K,B,G){if(I.visible===!1)return;if(I.layers.test(B)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&G===go)&&(!I.frustumCulled||I.intersectsFrustum(r))){I.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,I.matrixWorld);const H=e.update(I),de=I.material;if(Array.isArray(de)){const Y=H.groups;for(let ee=0,ne=Y.length;ee<ne;ee++){const Q=Y[ee],te=de[Q.materialIndex];if(te&&te.visible){const U=F(I,te,K,G);I.onBeforeShadow(s,I,T,E,H,U,Q),s.renderBufferDirect(E,null,H,U,I,Q),I.onAfterShadow(s,I,T,E,H,U,Q)}}}else if(de.visible){const Y=F(I,de,K,G);I.onBeforeShadow(s,I,T,E,H,Y,null),s.renderBufferDirect(E,null,H,Y,I,null),I.onAfterShadow(s,I,T,E,H,Y,null)}}const re=I.children;for(let H=0,de=re.length;H<de;H++)D(re[H],T,E,K,B,G)}function O(I){I.target.removeEventListener("dispose",O);for(const E in m){const K=m[E],B=I.target.uuid;B in K&&(K[B].dispose(),delete K[B])}}}function bE(s,e){function t(){let z=!1;const xe=new dn;let W=null;const J=new dn(0,0,0,0);return{setMask:function(ye){W!==ye&&!z&&(s.colorMask(ye,ye,ye,ye),W=ye)},setLocked:function(ye){z=ye},setClear:function(ye,ue,Se,ke,se){se===!0&&(ye*=ke,ue*=ke,Se*=ke),xe.set(ye,ue,Se,ke),J.equals(xe)===!1&&(s.clearColor(ye,ue,Se,ke),J.copy(xe))},reset:function(){z=!1,W=null,J.set(-1,0,0,0)}}}function r(){let z=!1,xe=!1,W=null,J=null,ye=null;return{setReversed:function(ue){if(xe!==ue){const Se=e.get("EXT_clip_control");ue?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),xe=ue;const ke=ye;ye=null,this.setClear(ke)}},getReversed:function(){return xe},setTest:function(ue){ue?Ee(s.DEPTH_TEST):Ke(s.DEPTH_TEST)},setMask:function(ue){W!==ue&&!z&&(s.depthMask(ue),W=ue)},setFunc:function(ue){if(xe&&(ue=Hx[ue]),J!==ue){switch(ue){case Jh:s.depthFunc(s.NEVER);break;case ed:s.depthFunc(s.ALWAYS);break;case td:s.depthFunc(s.LESS);break;case Mo:s.depthFunc(s.LEQUAL);break;case nd:s.depthFunc(s.EQUAL);break;case id:s.depthFunc(s.GEQUAL);break;case rd:s.depthFunc(s.GREATER);break;case sd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=ue}},setLocked:function(ue){z=ue},setClear:function(ue){ye!==ue&&(ye=ue,xe&&(ue=1-ue),s.clearDepth(ue))},reset:function(){z=!1,W=null,J=null,ye=null,xe=!1}}}function o(){let z=!1,xe=null,W=null,J=null,ye=null,ue=null,Se=null,ke=null,se=null;return{setTest:function(Pe){z||(Pe?Ee(s.STENCIL_TEST):Ke(s.STENCIL_TEST))},setMask:function(Pe){xe!==Pe&&!z&&(s.stencilMask(Pe),xe=Pe)},setFunc:function(Pe,Ge,we){(W!==Pe||J!==Ge||ye!==we)&&(s.stencilFunc(Pe,Ge,we),W=Pe,J=Ge,ye=we)},setOp:function(Pe,Ge,we){(ue!==Pe||Se!==Ge||ke!==we)&&(s.stencilOp(Pe,Ge,we),ue=Pe,Se=Ge,ke=we)},setLocked:function(Pe){z=Pe},setClear:function(Pe){se!==Pe&&(s.clearStencil(Pe),se=Pe)},reset:function(){z=!1,xe=null,W=null,J=null,ye=null,ue=null,Se=null,ke=null,se=null}}}const l=new t,u=new r,d=new o;let p={};const m=new WeakMap;let _={},M={},v={},S=new WeakMap,w=[],N=null,y=!1,x=null,P=null,F=null,D=null,O=null,I=null,T=null,E=new At(0,0,0),K=0,B=!1,G=null,$=null,re=null,H=null,de=null;const Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,ne=0;const Q=s.getParameter(s.VERSION);Q.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(Q)[1]),ee=ne>=1):Q.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),ee=ne>=2);let te=null,U={};const ie=s.getParameter(s.SCISSOR_BOX),Oe=s.getParameter(s.VIEWPORT),le=new dn().fromArray(ie),Te=new dn().fromArray(Oe);function be(z,xe,W,J){const ye=new Uint8Array(4),ue=s.createTexture();s.bindTexture(z,ue),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Se=0;Se<W;Se++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(xe,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,ye):s.texImage2D(xe+Se,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ye);return ue}const He={};He[s.TEXTURE_2D]=be(s.TEXTURE_2D,s.TEXTURE_2D,1),He[s.TEXTURE_CUBE_MAP]=be(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),He[s.TEXTURE_2D_ARRAY]=be(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),He[s.TEXTURE_3D]=be(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),Ee(s.DEPTH_TEST),u.setFunc(Mo),$t(!1),Ft(Vm),Ee(s.CULL_FACE),Qt(Sa);function Ee(z){_[z]!==!0&&(s.enable(z),_[z]=!0)}function Ke(z){_[z]!==!1&&(s.disable(z),_[z]=!1)}function Ze(z,xe){return v[z]!==xe?(s.bindFramebuffer(z,xe),v[z]=xe,z===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=xe),z===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=xe),!0):!1}function Ye(z,xe){let W=w,J=!1;if(z){W=S.get(xe),W===void 0&&(W=[],S.set(xe,W));const ye=z.textures;if(W.length!==ye.length||W[0]!==s.COLOR_ATTACHMENT0){for(let ue=0,Se=ye.length;ue<Se;ue++)W[ue]=s.COLOR_ATTACHMENT0+ue;W.length=ye.length,J=!0}}else W[0]!==s.BACK&&(W[0]=s.BACK,J=!0);J&&s.drawBuffers(W)}function ut(z){return N!==z?(s.useProgram(z),N=z,!0):!1}const St={[ga]:s.FUNC_ADD,[ux]:s.FUNC_SUBTRACT,[hx]:s.FUNC_REVERSE_SUBTRACT};St[dx]=s.MIN,St[fx]=s.MAX;const yt={[px]:s.ZERO,[mx]:s.ONE,[gx]:s.SRC_COLOR,[rg]:s.SRC_ALPHA,[Mx]:s.SRC_ALPHA_SATURATE,[yx]:s.DST_COLOR,[_x]:s.DST_ALPHA,[vx]:s.ONE_MINUS_SRC_COLOR,[sg]:s.ONE_MINUS_SRC_ALPHA,[Sx]:s.ONE_MINUS_DST_COLOR,[xx]:s.ONE_MINUS_DST_ALPHA,[Tx]:s.CONSTANT_COLOR,[Ex]:s.ONE_MINUS_CONSTANT_COLOR,[wx]:s.CONSTANT_ALPHA,[Cx]:s.ONE_MINUS_CONSTANT_ALPHA};function Qt(z,xe,W,J,ye,ue,Se,ke,se,Pe){if(z===Sa){y===!0&&(Ke(s.BLEND),y=!1);return}if(y===!1&&(Ee(s.BLEND),y=!0),z!==cx){if(z!==x||Pe!==B){if((P!==ga||O!==ga)&&(s.blendEquation(s.FUNC_ADD),P=ga,O=ga),Pe)switch(z){case _o:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Gm:s.blendFunc(s.ONE,s.ONE);break;case Wm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ot("WebGLState: Invalid blending: ",z);break}else switch(z){case _o:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Gm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Wm:Ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jm:Ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ot("WebGLState: Invalid blending: ",z);break}F=null,D=null,I=null,T=null,E.set(0,0,0),K=0,x=z,B=Pe}return}ye=ye||xe,ue=ue||W,Se=Se||J,(xe!==P||ye!==O)&&(s.blendEquationSeparate(St[xe],St[ye]),P=xe,O=ye),(W!==F||J!==D||ue!==I||Se!==T)&&(s.blendFuncSeparate(yt[W],yt[J],yt[ue],yt[Se]),F=W,D=J,I=ue,T=Se),(ke.equals(E)===!1||se!==K)&&(s.blendColor(ke.r,ke.g,ke.b,se),E.copy(ke),K=se),x=z,B=!1}function qt(z,xe){z.side===Gi?Ke(s.CULL_FACE):Ee(s.CULL_FACE);let W=z.side===hi;xe&&(W=!W),$t(W),z.blending===_o&&z.transparent===!1?Qt(Sa):Qt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),u.setFunc(z.depthFunc),u.setTest(z.depthTest),u.setMask(z.depthWrite),l.setMask(z.colorWrite);const J=z.stencilWrite;d.setTest(J),J&&(d.setMask(z.stencilWriteMask),d.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),d.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),kt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Ee(s.SAMPLE_ALPHA_TO_COVERAGE):Ke(s.SAMPLE_ALPHA_TO_COVERAGE)}function $t(z){G!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),G=z)}function Ft(z){z!==ox?(Ee(s.CULL_FACE),z!==$&&(z===Vm?s.cullFace(s.BACK):z===lx?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ke(s.CULL_FACE),$=z}function yn(z){z!==re&&(ee&&s.lineWidth(z),re=z)}function kt(z,xe,W){z?(Ee(s.POLYGON_OFFSET_FILL),(H!==xe||de!==W)&&(H=xe,de=W,u.getReversed()&&(xe=-xe,W=-W),s.polygonOffset(xe,W))):Ke(s.POLYGON_OFFSET_FILL)}function Jt(z){z?Ee(s.SCISSOR_TEST):Ke(s.SCISSOR_TEST)}function he(z){z===void 0&&(z=s.TEXTURE0+Y-1),te!==z&&(s.activeTexture(z),te=z)}function Ve(z,xe,W){W===void 0&&(te===null?W=s.TEXTURE0+Y-1:W=te);let J=U[W];J===void 0&&(J={type:void 0,texture:void 0},U[W]=J),(J.type!==z||J.texture!==xe)&&(te!==W&&(s.activeTexture(W),te=W),s.bindTexture(z,xe||He[z]),J.type=z,J.texture=xe)}function V(){const z=U[te];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function rt(){try{s.compressedTexImage2D(...arguments)}catch(z){Ot("WebGLState:",z)}}function ot(){try{s.compressedTexImage3D(...arguments)}catch(z){Ot("WebGLState:",z)}}function ft(){try{s.texSubImage2D(...arguments)}catch(z){Ot("WebGLState:",z)}}function Ce(){try{s.texSubImage3D(...arguments)}catch(z){Ot("WebGLState:",z)}}function _t(){try{s.compressedTexSubImage2D(...arguments)}catch(z){Ot("WebGLState:",z)}}function Ae(){try{s.compressedTexSubImage3D(...arguments)}catch(z){Ot("WebGLState:",z)}}function qe(){try{s.texStorage2D(...arguments)}catch(z){Ot("WebGLState:",z)}}function L(){try{s.texStorage3D(...arguments)}catch(z){Ot("WebGLState:",z)}}function b(){try{s.texImage2D(...arguments)}catch(z){Ot("WebGLState:",z)}}function q(){try{s.texImage3D(...arguments)}catch(z){Ot("WebGLState:",z)}}function ve(z){return M[z]!==void 0?M[z]:s.getParameter(z)}function Me(z,xe){M[z]!==xe&&(s.pixelStorei(z,xe),M[z]=xe)}function De(z){le.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),le.copy(z))}function Ue(z){Te.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),Te.copy(z))}function ge(z,xe){let W=m.get(xe);W===void 0&&(W=new WeakMap,m.set(xe,W));let J=W.get(z);J===void 0&&(J=s.getUniformBlockIndex(xe,z.name),s.uniformBlockBinding(xe,J,J),W.set(z,J))}function _e(z,xe,W){const ye=m.get(xe).get(z);p[ye]!==W&&(s.bindBufferBase(s.UNIFORM_BUFFER,ye,W),p[ye]=W)}function Ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),_={},M={},te=null,U={},v={},p={},S=new WeakMap,w=[],N=null,y=!1,x=null,P=null,F=null,D=null,O=null,I=null,T=null,E=new At(0,0,0),K=0,B=!1,G=null,$=null,re=null,H=null,de=null,le.set(0,0,s.canvas.width,s.canvas.height),Te.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:Ee,disable:Ke,bindFramebuffer:Ze,drawBuffers:Ye,useProgram:ut,setBlending:Qt,setMaterial:qt,setFlipSided:$t,setCullFace:Ft,setLineWidth:yn,setPolygonOffset:kt,setScissorTest:Jt,activeTexture:he,bindTexture:Ve,unbindTexture:V,compressedTexImage2D:rt,compressedTexImage3D:ot,texImage2D:b,texImage3D:q,pixelStorei:Me,getParameter:ve,updateUBOMapping:ge,uniformBlockBinding:_e,texStorage2D:qe,texStorage3D:L,texSubImage2D:ft,texSubImage3D:Ce,compressedTexSubImage2D:_t,compressedTexSubImage3D:Ae,scissor:De,viewport:Ue,reset:Ie}}function NE(s,e,t,r,o,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Xe,_=new WeakMap,M=new Set;let v;const S=new WeakMap,w=new Set,N=new FinalizationRegistry(L=>w.delete(L));let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,b){return y?new OffscreenCanvas(L,b):Sc("canvas")}function P(L,b,q){let ve=1;const Me=qe(L);if((Me.width>q||Me.height>q)&&(ve=q/Math.max(Me.width,Me.height)),ve<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const De=Math.floor(ve*Me.width),Ue=Math.floor(ve*Me.height);v===void 0&&(v=x(De,Ue));const ge=b?x(De,Ue):v;return ge.width=De,ge.height=Ue,ge.getContext("2d").drawImage(L,0,0,De,Ue),mt("WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+De+"x"+Ue+")."),ge}else return"data"in L&&mt("WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),L;return L}function F(L){return L.generateMipmaps}function D(L){s.generateMipmap(L)}function O(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function I(L,b,q,ve,Me,De=!1){if(L!==null){if(s[L]!==void 0)return s[L];mt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Ue;ve&&(Ue=e.get("EXT_texture_norm16"),Ue||mt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ge=b;if(b===s.RED&&(q===s.FLOAT&&(ge=s.R32F),q===s.HALF_FLOAT&&(ge=s.R16F),q===s.UNSIGNED_BYTE&&(ge=s.R8),q===s.UNSIGNED_SHORT&&Ue&&(ge=Ue.R16_EXT),q===s.SHORT&&Ue&&(ge=Ue.R16_SNORM_EXT)),b===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(ge=s.R8UI),q===s.UNSIGNED_SHORT&&(ge=s.R16UI),q===s.UNSIGNED_INT&&(ge=s.R32UI),q===s.BYTE&&(ge=s.R8I),q===s.SHORT&&(ge=s.R16I),q===s.INT&&(ge=s.R32I)),b===s.RG&&(q===s.FLOAT&&(ge=s.RG32F),q===s.HALF_FLOAT&&(ge=s.RG16F),q===s.UNSIGNED_BYTE&&(ge=s.RG8),q===s.UNSIGNED_SHORT&&Ue&&(ge=Ue.RG16_EXT),q===s.SHORT&&Ue&&(ge=Ue.RG16_SNORM_EXT)),b===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(ge=s.RG8UI),q===s.UNSIGNED_SHORT&&(ge=s.RG16UI),q===s.UNSIGNED_INT&&(ge=s.RG32UI),q===s.BYTE&&(ge=s.RG8I),q===s.SHORT&&(ge=s.RG16I),q===s.INT&&(ge=s.RG32I)),b===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(ge=s.RGB8UI),q===s.UNSIGNED_SHORT&&(ge=s.RGB16UI),q===s.UNSIGNED_INT&&(ge=s.RGB32UI),q===s.BYTE&&(ge=s.RGB8I),q===s.SHORT&&(ge=s.RGB16I),q===s.INT&&(ge=s.RGB32I)),b===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(ge=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(ge=s.RGBA16UI),q===s.UNSIGNED_INT&&(ge=s.RGBA32UI),q===s.BYTE&&(ge=s.RGBA8I),q===s.SHORT&&(ge=s.RGBA16I),q===s.INT&&(ge=s.RGBA32I)),b===s.RGB&&(q===s.UNSIGNED_SHORT&&Ue&&(ge=Ue.RGB16_EXT),q===s.SHORT&&Ue&&(ge=Ue.RGB16_SNORM_EXT),q===s.UNSIGNED_INT_5_9_9_9_REV&&(ge=s.RGB9_E5),q===s.UNSIGNED_INT_10F_11F_11F_REV&&(ge=s.R11F_G11F_B10F)),b===s.RGBA){const _e=De?yc:Dt.getTransfer(Me);q===s.FLOAT&&(ge=s.RGBA32F),q===s.HALF_FLOAT&&(ge=s.RGBA16F),q===s.UNSIGNED_BYTE&&(ge=_e===Kt?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT&&Ue&&(ge=Ue.RGBA16_EXT),q===s.SHORT&&Ue&&(ge=Ue.RGBA16_SNORM_EXT),q===s.UNSIGNED_SHORT_4_4_4_4&&(ge=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(ge=s.RGB5_A1)}return(ge===s.R16F||ge===s.R32F||ge===s.RG16F||ge===s.RG32F||ge===s.RGBA16F||ge===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function T(L,b){let q;return L?b===null||b===sr||b===Ea?q=s.DEPTH24_STENCIL8:b===nr?q=s.DEPTH32F_STENCIL8:b===Eo&&(q=s.DEPTH24_STENCIL8,mt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===sr||b===Ea?q=s.DEPTH_COMPONENT24:b===nr?q=s.DEPTH_COMPONENT32F:b===Eo&&(q=s.DEPTH_COMPONENT16),q}function E(L,b){return F(L)===!0||L.isFramebufferTexture&&L.minFilter!==Bn&&L.minFilter!==ni?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function K(L){const b=new WeakRef(L);r.get(L).__ref=b,w.add(b),N.register(L,b,b)}function B(L){const b=r.get(L).__ref;b!==void 0&&(w.delete(b),N.unregister(b))}function G(L){re(L.target)}function $(L){H(L.target)}function re(L){L.removeEventListener("dispose",G),B(L),Y(L),L.isVideoTexture&&_.delete(L),L.isHTMLTexture&&M.delete(L)}function H(L){L.removeEventListener("dispose",$),B(L),ne(L)}function de(){for(const L of w){const b=L.deref();b!==void 0&&(b.isRenderTarget===!0?H(b):re(b))}w.clear(),M.clear()}function Y(L){const b=r.get(L);if(b.__webglInit===void 0)return;const q=L.source,ve=S.get(q);if(ve){const Me=ve[b.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&ee(L),Object.keys(ve).length===0&&S.delete(q)}r.remove(L)}function ee(L){const b=r.get(L);s.deleteTexture(b.__webglTexture);const q=L.source,ve=S.get(q);delete ve[b.__cacheKey],u.memory.textures--}function ne(L){const b=r.get(L);b.__depthDisposeCallback&&b.__depthDisposeCallback();const q=L.depthTexture;if(q&&q.renderTarget===L&&re(q),L.isWebGLCubeRenderTarget)for(let Me=0;Me<6;Me++){if(Array.isArray(b.__webglFramebuffer[Me]))for(let De=0;De<b.__webglFramebuffer[Me].length;De++)s.deleteFramebuffer(b.__webglFramebuffer[Me][De]);else s.deleteFramebuffer(b.__webglFramebuffer[Me]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[Me])}else{if(Array.isArray(b.__webglFramebuffer))for(let Me=0;Me<b.__webglFramebuffer.length;Me++)s.deleteFramebuffer(b.__webglFramebuffer[Me]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Me=0;Me<b.__webglColorRenderbuffer.length;Me++)b.__webglColorRenderbuffer[Me]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[Me]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const ve=L.textures;for(let Me=0,De=ve.length;Me<De;Me++){const Ue=r.get(ve[Me]);Ue.__webglTexture&&(s.deleteTexture(Ue.__webglTexture),u.memory.textures--),r.remove(ve[Me])}r.remove(L)}let Q=0;function te(){Q=0}function U(){return Q}function ie(L){Q=L}function Oe(){const L=Q;return L>=o.maxTextures&&mt("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+o.maxTextures),Q+=1,L}function le(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.mipmapsAutoUpdate),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function Te(L,b){const q=r.get(L);if(L.isVideoTexture&&_t(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&q.__version!==L.version){const ve=L.image;if(ve===null)mt("WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)mt("WebGLRenderer: Texture marked for update but image is incomplete");else{qt(q,L,b);return}}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+b)}function be(L,b){const q=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){qt(q,L,b);return}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+b)}function He(L,b){const q=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){qt(q,L,b);return}t.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+b)}function Ee(L,b){const q=r.get(L);if(L.version>0&&q.__version!==L.version){$t(q,L,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+b)}const Ke={[ad]:s.REPEAT,[Er]:s.CLAMP_TO_EDGE,[od]:s.MIRRORED_REPEAT},Ze={[Bn]:s.NEAREST,[Nx]:s.NEAREST_MIPMAP_NEAREST,[Dl]:s.NEAREST_MIPMAP_LINEAR,[ni]:s.LINEAR,[xh]:s.LINEAR_MIPMAP_NEAREST,[ts]:s.LINEAR_MIPMAP_LINEAR},Ye={[Lx]:s.NEVER,[Tg]:s.ALWAYS,[Ix]:s.LESS,[Sg]:s.LEQUAL,[Ux]:s.EQUAL,[Mg]:s.GEQUAL,[Ox]:s.GREATER,[Fx]:s.NOTEQUAL};function ut(L,b){if(b.type===nr&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===ni||b.magFilter===xh||b.magFilter===Dl||b.magFilter===ts||b.minFilter===ni||b.minFilter===xh||b.minFilter===Dl||b.minFilter===ts)&&mt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,Ke[b.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,Ke[b.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,Ke[b.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,Ze[b.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,Ze[b.minFilter]),b.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,Ye[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Bn||b.minFilter!==Dl&&b.minFilter!==ts||b.type===nr&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function St(L,b){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",G),K(b));const ve=b.source;let Me=S.get(ve);Me===void 0&&(Me={},S.set(ve,Me));const De=le(b);if(De!==L.__cacheKey){Me[De]===void 0&&(Me[De]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,q=!0),Me[De].usedTimes++;const Ue=Me[L.__cacheKey];Ue!==void 0&&(Me[L.__cacheKey].usedTimes--,Ue.usedTimes===0&&ee(b)),L.__cacheKey=De,L.__webglTexture=Me[De].texture}return q}function yt(L,b,q){return Math.floor(Math.floor(L/q)/b)}function Qt(L,b,q,ve){const De=L.updateRanges;if(De.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,q,ve,b.data);else{De.sort((z,xe)=>z.start-xe.start);let Ue=0;for(let z=1;z<De.length;z++){const xe=De[Ue],W=De[z],J=xe.start+xe.count,ye=yt(W.start,b.width,4),ue=yt(xe.start,b.width,4);W.start<=J+1&&ye===ue&&yt(W.start+W.count-1,b.width,4)===ye?xe.count=Math.max(xe.count,W.start+W.count-xe.start):(++Ue,De[Ue]=W)}De.length=Ue+1;const ge=t.getParameter(s.UNPACK_ROW_LENGTH),_e=t.getParameter(s.UNPACK_SKIP_PIXELS),Ie=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let z=0,xe=De.length;z<xe;z++){const W=De[z],J=Math.floor(W.start/4),ye=Math.ceil(W.count/4),ue=J%b.width,Se=Math.floor(J/b.width),ke=ye,se=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(s.UNPACK_SKIP_ROWS,Se),t.texSubImage2D(s.TEXTURE_2D,0,ue,Se,ke,se,q,ve,b.data)}L.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ge),t.pixelStorei(s.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ie)}}function qt(L,b,q){let ve=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ve=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ve=s.TEXTURE_3D);const Me=St(L,b),De=b.source;t.bindTexture(ve,L.__webglTexture,s.TEXTURE0+q);const Ue=r.get(De);if(De.version!==Ue.__version||Me===!0){if(t.activeTexture(s.TEXTURE0+q),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const se=Dt.getPrimaries(Dt.workingColorSpace),Pe=b.colorSpace===es?null:Dt.getPrimaries(b.colorSpace),Ge=b.colorSpace===es||se===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge)}t.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let _e=P(b.image,!1,o.maxTextureSize);_e=Ae(b,_e);const Ie=l.convert(b.format,b.colorSpace),z=l.convert(b.type);let xe=I(b.internalFormat,Ie,z,b.normalized,b.colorSpace,b.isVideoTexture);ut(ve,b);let W;const J=b.mipmaps,ye=b.isVideoTexture!==!0,ue=Ue.__version===void 0||Me===!0,Se=De.dataReady,ke=E(b,_e);if(b.isDepthTexture)xe=T(b.format===ns,b.type),ue&&(ye?t.texStorage2D(s.TEXTURE_2D,1,xe,_e.width,_e.height):t.texImage2D(s.TEXTURE_2D,0,xe,_e.width,_e.height,0,Ie,z,null));else if(b.isDataTexture)if(J.length>0){ye&&ue&&t.texStorage2D(s.TEXTURE_2D,ke,xe,J[0].width,J[0].height);for(let se=0,Pe=J.length;se<Pe;se++)W=J[se],ye?Se&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,W.width,W.height,Ie,z,W.data):t.texImage2D(s.TEXTURE_2D,se,xe,W.width,W.height,0,Ie,z,W.data);b.generateMipmaps=!1}else ye?(ue&&t.texStorage2D(s.TEXTURE_2D,ke,xe,_e.width,_e.height),Se&&Qt(b,_e,Ie,z)):t.texImage2D(s.TEXTURE_2D,0,xe,_e.width,_e.height,0,Ie,z,_e.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ye&&ue&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ke,xe,J[0].width,J[0].height,_e.depth);for(let se=0,Pe=J.length;se<Pe;se++)if(W=J[se],b.format!==ir)if(Ie!==null)if(ye){if(Se)if(b.layerUpdates.size>0){const Ge=R0(W.width,W.height,b.format,b.type);for(const we of b.layerUpdates){const ct=W.data.subarray(we*Ge/W.data.BYTES_PER_ELEMENT,(we+1)*Ge/W.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,we,W.width,W.height,1,Ie,ct)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,W.width,W.height,_e.depth,Ie,W.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,se,xe,W.width,W.height,_e.depth,0,W.data,0,0);else mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ye?Se&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,W.width,W.height,_e.depth,Ie,z,W.data):t.texImage3D(s.TEXTURE_2D_ARRAY,se,xe,W.width,W.height,_e.depth,0,Ie,z,W.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{ye&&ue&&t.texStorage2D(s.TEXTURE_2D,ke,xe,J[0].width,J[0].height);for(let se=0,Pe=J.length;se<Pe;se++)W=J[se],b.format!==ir?Ie!==null?ye?Se&&t.compressedTexSubImage2D(s.TEXTURE_2D,se,0,0,W.width,W.height,Ie,W.data):t.compressedTexImage2D(s.TEXTURE_2D,se,xe,W.width,W.height,0,W.data):mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?Se&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,W.width,W.height,Ie,z,W.data):t.texImage2D(s.TEXTURE_2D,se,xe,W.width,W.height,0,Ie,z,W.data)}else if(b.isDataArrayTexture)if(ye){if(ue&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ke,xe,_e.width,_e.height,_e.depth),Se)if(b.layerUpdates.size>0){const se=R0(_e.width,_e.height,b.format,b.type);for(const Pe of b.layerUpdates){const Ge=_e.data.subarray(Pe*se/_e.data.BYTES_PER_ELEMENT,(Pe+1)*se/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Pe,_e.width,_e.height,1,Ie,z,Ge)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ie,z,_e.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,xe,_e.width,_e.height,_e.depth,0,Ie,z,_e.data);else if(b.isData3DTexture)ye?(ue&&t.texStorage3D(s.TEXTURE_3D,ke,xe,_e.width,_e.height,_e.depth),Se&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ie,z,_e.data)):t.texImage3D(s.TEXTURE_3D,0,xe,_e.width,_e.height,_e.depth,0,Ie,z,_e.data);else if(b.isFramebufferTexture){if(ue)if(ye)t.texStorage2D(s.TEXTURE_2D,ke,xe,_e.width,_e.height);else{let se=_e.width,Pe=_e.height;for(let Ge=0;Ge<ke;Ge++)t.texImage2D(s.TEXTURE_2D,Ge,xe,se,Pe,0,Ie,z,null),se>>=1,Pe>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){const se=s.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),_e.parentNode!==se){se.appendChild(_e),M.add(b),se.onpaint=Pe=>{const Ge=Pe.changedElements;for(const we of M)Ge.includes(we.image)&&(we.needsUpdate=!0)},se.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,_e);else{const Ge=s.RGBA,we=s.RGBA,ct=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ge,we,ct,_e)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(J.length>0){if(ye&&ue){const se=qe(J[0]);t.texStorage2D(s.TEXTURE_2D,ke,xe,se.width,se.height)}for(let se=0,Pe=J.length;se<Pe;se++)W=J[se],ye?Se&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,Ie,z,W):t.texImage2D(s.TEXTURE_2D,se,xe,Ie,z,W);b.generateMipmaps=!1}else if(ye){if(ue){const se=qe(_e);t.texStorage2D(s.TEXTURE_2D,ke,xe,se.width,se.height)}Se&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ie,z,_e)}else t.texImage2D(s.TEXTURE_2D,0,xe,Ie,z,_e);F(b)&&b.mipmapsAutoUpdate===!0&&D(ve),Ue.__version=De.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function $t(L,b,q){if(b.image.length!==6)return;const ve=St(L,b),Me=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+q);const De=r.get(Me);if(Me.version!==De.__version||ve===!0){t.activeTexture(s.TEXTURE0+q);const Ue=Dt.getPrimaries(Dt.workingColorSpace),ge=b.colorSpace===es?null:Dt.getPrimaries(b.colorSpace),_e=b.colorSpace===es||Ue===ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ie=b.isCompressedTexture||b.image[0].isCompressedTexture,z=b.image[0]&&b.image[0].isDataTexture,xe=[];for(let we=0;we<6;we++)!Ie&&!z?xe[we]=P(b.image[we],!0,o.maxCubemapSize):xe[we]=z?b.image[we].image:b.image[we],xe[we]=Ae(b,xe[we]);const W=xe[0],J=l.convert(b.format,b.colorSpace),ye=l.convert(b.type);let ue=I(b.internalFormat,J,ye,b.normalized,b.colorSpace);const Se=b.isVideoTexture!==!0,ke=De.__version===void 0||ve===!0,se=Me.dataReady;let Pe=E(b,W);ut(s.TEXTURE_CUBE_MAP,b);let Ge;if(b.isDepthTexture){if(ue=T(b.format===ns,b.type),ke)if(Se)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,ue,W.width,W.height);else for(let we=0;we<6;we++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,ue,W.width,W.height,0,J,ye,null)}else if(Ie){Se&&ke&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,ue,W.width,W.height);for(let we=0;we<6;we++){Ge=xe[we].mipmaps;for(let ct=0;ct<Ge.length;ct++){const vt=Ge[ct];b.format!==ir?J!==null?Se?se&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,ct,0,0,vt.width,vt.height,J,vt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,ct,ue,vt.width,vt.height,0,vt.data):mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Se?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,ct,0,0,vt.width,vt.height,J,ye,vt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,ct,ue,vt.width,vt.height,0,J,ye,vt.data)}}}else{if(Ge=b.mipmaps,Se&&ke){Ge.length>0&&Pe++;const we=qe(xe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,ue,we.width,we.height)}for(let we=0;we<6;we++)if(z){Se?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,xe[we].width,xe[we].height,J,ye,xe[we].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,ue,xe[we].width,xe[we].height,0,J,ye,xe[we].data);for(let ct=0;ct<Ge.length;ct++){const Rt=Ge[ct].image[we].image;Se?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,ct+1,0,0,Rt.width,Rt.height,J,ye,Rt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,ct+1,ue,Rt.width,Rt.height,0,J,ye,Rt.data)}}else{Se?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,J,ye,xe[we]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,ue,J,ye,xe[we]);for(let ct=0;ct<Ge.length;ct++){const vt=Ge[ct];Se?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,ct+1,0,0,J,ye,vt.image[we]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,ct+1,ue,J,ye,vt.image[we])}}}F(b)&&b.mipmapsAutoUpdate===!0&&D(s.TEXTURE_CUBE_MAP),De.__version=Me.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Ft(L,b,q,ve,Me,De){const Ue=l.convert(q.format,q.colorSpace),ge=l.convert(q.type),_e=I(q.internalFormat,Ue,ge,q.normalized,q.colorSpace),Ie=r.get(b),z=r.get(q);if(z.__renderTarget=b,!Ie.__hasExternalTextures){const xe=Math.max(1,b.width>>De),W=Math.max(1,b.height>>De);Me===s.TEXTURE_3D||Me===s.TEXTURE_2D_ARRAY?t.texImage3D(Me,De,_e,xe,W,b.depth,0,Ue,ge,null):t.texImage2D(Me,De,_e,xe,W,0,Ue,ge,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),Ce(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,Me,z.__webglTexture,0,ft(b)):(Me===s.TEXTURE_2D||Me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ve,Me,z.__webglTexture,De),t.bindFramebuffer(s.FRAMEBUFFER,null)}function yn(L,b,q){if(s.bindRenderbuffer(s.RENDERBUFFER,L),b.depthBuffer){const ve=b.depthTexture,Me=ve&&ve.isDepthTexture?ve.type:null,De=T(b.stencilBuffer,Me),Ue=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ce(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft(b),De,b.width,b.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft(b),De,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,De,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ue,s.RENDERBUFFER,L)}else{const ve=b.textures;for(let Me=0;Me<ve.length;Me++){const De=ve[Me],Ue=l.convert(De.format,De.colorSpace),ge=l.convert(De.type),_e=I(De.internalFormat,Ue,ge,De.normalized,De.colorSpace);Ce(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft(b),_e,b.width,b.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft(b),_e,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,_e,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function kt(L,b,q){const ve=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Me=r.get(b.depthTexture);Me.__renderTarget=b;const De=ve?b.depthTexture.image[0]:b.depthTexture.image;(!Me.__webglTexture||De.width!==b.width||De.height!==b.height)&&(De.width=b.width,De.height=b.height,b.depthTexture.needsUpdate=!0),ve?Ee(b.depthTexture,0):Te(b.depthTexture,0);const Ue=Me.__webglTexture,ge=ft(b),_e=ve?s.TEXTURE_CUBE_MAP_POSITIVE_X+q:s.TEXTURE_2D,Ie=b.depthTexture.format===ns?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===rs)Ce(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ie,_e,Ue,0,ge):s.framebufferTexture2D(s.FRAMEBUFFER,Ie,_e,Ue,0);else if(b.depthTexture.format===ns)Ce(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ie,_e,Ue,0,ge):s.framebufferTexture2D(s.FRAMEBUFFER,Ie,_e,Ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Jt(L){const b=r.get(L),q=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const ve=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ve){const Me=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ve.removeEventListener("dispose",Me)};ve.addEventListener("dispose",Me),b.__depthDisposeCallback=Me}b.__boundDepthTexture=ve}if(L.depthTexture&&!b.__autoAllocateDepthBuffer)if(q)for(let ve=0;ve<6;ve++)kt(b.__webglFramebuffer[ve],L,ve);else L.texture.mipmaps.length>0?kt(b.__webglFramebuffer[0],L,0):kt(b.__webglFramebuffer,L,0);else if(q){b.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[ve]),b.__webglDepthbuffer[ve]===void 0)b.__webglDepthbuffer[ve]=s.createRenderbuffer(),yn(b.__webglDepthbuffer[ve],L,!1);else{const Me=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,De=b.__webglDepthbuffer[ve];s.bindRenderbuffer(s.RENDERBUFFER,De),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,De)}}else if(L.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),yn(b.__webglDepthbuffer,L,!1);else{const Me=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,De=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,De),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,De)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function he(L,b,q){const ve=r.get(L);b!==void 0&&Ft(ve.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&Jt(L)}function Ve(L){const b=L.texture,q=r.get(L),ve=r.get(b);L.addEventListener("dispose",$),K(L);const Me=L.textures,De=L.isWebGLCubeRenderTarget===!0,Ue=Me.length>1;if(Ue||(ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture()),ve.__version=b.version,u.memory.textures++),De){q.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(b.mipmaps.length>0){q.__webglFramebuffer[ge]=[];for(let _e=0;_e<b.mipmaps.length;_e++)q.__webglFramebuffer[ge][_e]=s.createFramebuffer()}else q.__webglFramebuffer[ge]=s.createFramebuffer()}else{if(b.mipmaps.length>0){q.__webglFramebuffer=[];for(let ge=0;ge<b.mipmaps.length;ge++)q.__webglFramebuffer[ge]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(Ue)for(let ge=0,_e=Me.length;ge<_e;ge++){const Ie=r.get(Me[ge]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=s.createTexture(),u.memory.textures++)}if(L.samples>0&&Ce(L)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ge=0;ge<Me.length;ge++){const _e=Me[ge];q.__webglColorRenderbuffer[ge]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[ge]);const Ie=l.convert(_e.format,_e.colorSpace),z=l.convert(_e.type),xe=I(_e.internalFormat,Ie,z,_e.normalized,_e.colorSpace,L.isXRRenderTarget===!0),W=ft(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,W,xe,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,q.__webglColorRenderbuffer[ge])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),yn(q.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(De){t.bindTexture(s.TEXTURE_CUBE_MAP,ve.__webglTexture),ut(s.TEXTURE_CUBE_MAP,b);for(let ge=0;ge<6;ge++)if(b.mipmaps.length>0)for(let _e=0;_e<b.mipmaps.length;_e++)Ft(q.__webglFramebuffer[ge][_e],L,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,_e);else Ft(q.__webglFramebuffer[ge],L,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);F(b)?D(s.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}else if(Ue){for(let ge=0,_e=Me.length;ge<_e;ge++){const Ie=Me[ge],z=r.get(Ie);let xe=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(xe=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(xe,z.__webglTexture),ut(xe,Ie),Ft(q.__webglFramebuffer,L,Ie,s.COLOR_ATTACHMENT0+ge,xe,0),F(Ie)&&D(xe)}t.unbindTexture()}else{let ge=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ge=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ge,ve.__webglTexture),ut(ge,b),b.mipmaps.length>0)for(let _e=0;_e<b.mipmaps.length;_e++)Ft(q.__webglFramebuffer[_e],L,b,s.COLOR_ATTACHMENT0,ge,_e);else Ft(q.__webglFramebuffer,L,b,s.COLOR_ATTACHMENT0,ge,0);F(b)?D(ge):b.mipmaps.length>0&&s.texParameteri(ge,s.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}L.depthBuffer&&Jt(L)}function V(L){const b=L.textures;for(let q=0,ve=b.length;q<ve;q++){const Me=b[q];if(F(Me)&&Me.mipmapsAutoUpdate===!0){const De=O(L),Ue=r.get(Me).__webglTexture;t.bindTexture(De,Ue),D(De),t.unbindTexture()}}}const rt=[];function ot(L){if(L.samples>0){if(Ce(L)===!1){const b=L.textures,q=L.width,ve=L.height;let Me=s.COLOR_BUFFER_BIT;const De=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ue=r.get(L),ge=b.length>1;if(ge)for(let Ie=0;Ie<b.length;Ie++)t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Ie=0;Ie<b.length;Ie++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Me|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Me|=s.STENCIL_BUFFER_BIT)),ge){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ie]);const z=r.get(b[Ie]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,z,0)}s.blitFramebuffer(0,0,q,ve,0,0,q,ve,Me,s.NEAREST),p===!0&&(rt.length=0,rt.push(s.COLOR_ATTACHMENT0+Ie),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&rt.push(De),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,rt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ge)for(let Ie=0;Ie<b.length;Ie++){t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ie]);const z=r.get(b[Ie]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,z,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&p){const b=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function ft(L){return Math.min(o.maxSamples,L.samples)}function Ce(L){const b=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function _t(L){const b=u.render.frame;_.get(L)!==b&&(_.set(L,b),L.update())}function Ae(L,b){const q=L.colorSpace,ve=L.format,Me=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==xc&&q!==es&&(Dt.getTransfer(q)===Kt?(ve!==ir||Me!==xi)&&mt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ot("WebGLTextures: Unsupported texture color space:",q)),b}function qe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=Oe,this.resetTextureUnits=te,this.getTextureUnits=U,this.setTextureUnits=ie,this.setTexture2D=Te,this.setTexture2DArray=be,this.setTexture3D=He,this.setTextureCube=Ee,this.rebindTextures=he,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=Ft,this.useMultisampledRTT=Ce,this.dispose=de}function RE(s,e){function t(r,o=es){let l;const u=Dt.getTransfer(o);if(r===xi)return s.UNSIGNED_BYTE;if(r===qd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===$d)return s.UNSIGNED_SHORT_5_5_5_1;if(r===gg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===vg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===pg)return s.BYTE;if(r===mg)return s.SHORT;if(r===Eo)return s.UNSIGNED_SHORT;if(r===Yd)return s.INT;if(r===sr)return s.UNSIGNED_INT;if(r===nr)return s.FLOAT;if(r===ar)return s.HALF_FLOAT;if(r===_g)return s.ALPHA;if(r===xg)return s.RGB;if(r===ir)return s.RGBA;if(r===rs)return s.DEPTH_COMPONENT;if(r===ns)return s.DEPTH_STENCIL;if(r===yg)return s.RED;if(r===Zd)return s.RED_INTEGER;if(r===As)return s.RG;if(r===Qd)return s.RG_INTEGER;if(r===Jd)return s.RGBA_INTEGER;if(r===hc||r===dc||r===fc||r===pc)if(u===Kt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===hc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===dc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===fc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===pc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===hc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===dc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===fc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===pc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ld||r===cd||r===ud||r===hd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===ld)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===cd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ud)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===hd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===dd||r===fd||r===pd||r===md||r===gd||r===vc||r===vd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===dd||r===fd)return u===Kt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===pd)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===md)return l.COMPRESSED_R11_EAC;if(r===gd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===vc)return l.COMPRESSED_RG11_EAC;if(r===vd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===_d||r===xd||r===yd||r===Sd||r===Md||r===Td||r===Ed||r===wd||r===Cd||r===Ad||r===bd||r===Nd||r===Rd||r===Pd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===_d)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===xd)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===yd)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Sd)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Md)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Td)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ed)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===wd)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Cd)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ad)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===bd)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Nd)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Rd)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Pd)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Dd||r===Ld||r===Id)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Dd)return u===Kt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ld)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Id)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ud||r===Od||r===_c||r===Fd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Ud)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Od)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===_c)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Fd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ea?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const PE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class LE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Ug(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new bs({vertexShader:PE,fragmentShader:DE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ut(new Hi(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class IE extends os{constructor(e,t){super();const r=this;let o=null,l=1,u=null,d="local-floor",p=1,m=null,_=null,M=null,v=null,S=null,w=null;const N=typeof XRWebGLBinding<"u",y=new LE,x={},P=t.getContextAttributes();let F=null,D=null;const O=[],I=[],T=new Xe;let E=null,K=null;const B=new Vi;B.viewport=new dn;const G=new Vi;G.viewport=new dn;const $=[B,G],re=new Gy;let H=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let Te=O[le];return Te===void 0&&(Te=new Ah,O[le]=Te),Te.getTargetRaySpace()},this.getControllerGrip=function(le){let Te=O[le];return Te===void 0&&(Te=new Ah,O[le]=Te),Te.getGripSpace()},this.getHand=function(le){let Te=O[le];return Te===void 0&&(Te=new Ah,O[le]=Te),Te.getHandSpace()};function Y(le){const Te=I.indexOf(le.inputSource);if(Te===-1)return;const be=O[Te];be!==void 0&&(be.update(le.inputSource,le.frame,m||u),be.dispatchEvent({type:le.type,data:le.inputSource}))}function ee(){o.removeEventListener("select",Y),o.removeEventListener("selectstart",Y),o.removeEventListener("selectend",Y),o.removeEventListener("squeeze",Y),o.removeEventListener("squeezestart",Y),o.removeEventListener("squeezeend",Y),o.removeEventListener("end",ee),o.removeEventListener("inputsourceschange",ne);for(let le=0;le<O.length;le++){const Te=I[le];Te!==null&&(I[le]=null,O[le].disconnect(Te))}H=null,de=null,y.reset();for(const le in x)delete x[le];if(e.setRenderTarget(F),S=null,v=null,M=null,o=null,D=null,Oe.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(T.width,T.height,!1),K!==null){const le=K.camera;le.fov=K.fov,le.zoom=K.zoom,le.updateProjectionMatrix(),K=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){l=le,r.isPresenting===!0&&mt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){d=le,r.isPresenting===!0&&mt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(le){m=le},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return M===null&&N&&(M=new XRWebGLBinding(o,t)),M},this.getFrame=function(){return w},this.getSession=function(){return o},this.setSession=async function(le){if(o=le,o!==null){if(F=e.getRenderTarget(),o.addEventListener("select",Y),o.addEventListener("selectstart",Y),o.addEventListener("selectend",Y),o.addEventListener("squeeze",Y),o.addEventListener("squeezestart",Y),o.addEventListener("squeezeend",Y),o.addEventListener("end",ee),o.addEventListener("inputsourceschange",ne),P.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(T),N&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,He=null,Ee=null;P.depth&&(Ee=P.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=P.stencil?ns:rs,He=P.stencil?Ea:sr);const Ke={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:l};M=this.getBinding(),v=M.createProjectionLayer(Ke),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),D=new rr(v.textureWidth,v.textureHeight,{format:ir,type:xi,depthTexture:new wa(v.textureWidth,v.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{const be={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,be),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new rr(S.framebufferWidth,S.framebufferHeight,{format:ir,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1,storeMultisampledDepthBuffer:S.ignoreDepthValues===!1,storeMultisampledStencilBuffer:S.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(p),m=null,u=await o.requestReferenceSpace(d),Oe.setContext(o),Oe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ne(le){for(let Te=0;Te<le.removed.length;Te++){const be=le.removed[Te],He=I.indexOf(be);He>=0&&(I[He]=null,O[He].disconnect(be))}for(let Te=0;Te<le.added.length;Te++){const be=le.added[Te];let He=I.indexOf(be);if(He===-1){for(let Ke=0;Ke<O.length;Ke++)if(Ke>=I.length){I.push(be),He=Ke;break}else if(I[Ke]===null){I[Ke]=be,He=Ke;break}if(He===-1)break}const Ee=O[He];Ee&&Ee.connect(be)}}function Q(le,Te){Te===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(Te.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(o===null)return;let Te=le.near,be=le.far;y.texture!==null&&(y.depthNear>0&&(Te=y.depthNear),y.depthFar>0&&(be=y.depthFar)),re.near=G.near=B.near=Te,re.far=G.far=B.far=be,(H!==re.near||de!==re.far)&&(o.updateRenderState({depthNear:re.near,depthFar:re.far}),H=re.near,de=re.far),re.layers.mask=le.layers.mask|6,B.layers.mask=re.layers.mask&-5,G.layers.mask=re.layers.mask&-3;const He=le.parent,Ee=re.cameras;Q(re,He);for(let Ke=0;Ke<Ee.length;Ke++)Q(Ee[Ke],He);re.projectionMatrix.copy(B.projectionMatrix),re.projectionMatrixInverse.copy(B.projectionMatrixInverse),K===null&&le.isPerspectiveCamera&&(K={camera:le,fov:le.fov,zoom:le.zoom}),te(le,re,He)};function te(le,Te,be){be===null?le.matrix.copy(Te.matrixWorld):(le.matrix.copy(be.matrixWorld),le.matrix.invert(),le.matrix.multiply(Te.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(Te.projectionMatrix),le.projectionMatrixInverse.copy(Te.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=Bd*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return re},this.getFoveation=function(){if(!(v===null&&S===null))return p},this.setFoveation=function(le){p=le,v!==null&&(v.fixedFoveation=le),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=le)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(re)},this.getCameraTexture=function(le){return x[le]};let U=null;function ie(le,Te){if(_=Te.getViewerPose(m||u),w=Te,_!==null){const be=_.views;S!==null&&(e.setRenderTargetFramebuffer(D,S.framebuffer),e.setRenderTarget(D));let He=!1;be.length!==re.cameras.length&&(re.cameras.length=0,He=!0);for(let Ye=0;Ye<be.length;Ye++){const ut=be[Ye];let St=null;if(S!==null)St=S.getViewport(ut);else{const Qt=M.getViewSubImage(v,ut);St=Qt.viewport,Ye===0&&(e.setRenderTargetTextures(D,Qt.colorTexture,Qt.depthStencilTexture),e.setRenderTarget(D))}let yt=$[Ye];yt===void 0&&(yt=new Vi,yt.layers.enable(Ye),yt.viewport=new dn,$[Ye]=yt),yt.matrix.fromArray(ut.transform.matrix),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.projectionMatrix.fromArray(ut.projectionMatrix),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert(),yt.viewport.set(St.x,St.y,St.width,St.height),Ye===0&&(re.matrix.copy(yt.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale)),He===!0&&re.cameras.push(yt)}const Ee=o.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&N){M=r.getBinding();const Ye=M.getDepthInformation(be[0]);Ye&&Ye.isValid&&Ye.texture&&y.init(Ye,o.renderState)}if(Ee&&Ee.includes("camera-access")&&N){e.state.unbindTexture(),M=r.getBinding();for(let Ye=0;Ye<be.length;Ye++){const ut=be[Ye].camera;if(ut){let St=x[ut];St||(St=new Ug,x[ut]=St);const yt=M.getCameraImage(ut);St.sourceTexture=yt}}}}for(let be=0;be<O.length;be++){const He=I[be],Ee=O[be];He!==null&&Ee!==void 0&&Ee.update(He,Te,m||u)}U&&U(le,Te),Te.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Te}),w=null}const Oe=new Vg;Oe.setAnimationLoop(ie),this.setAnimationLoop=function(le){U=le},this.dispose=function(){}}}const UE=new tn,Qg=new xt;Qg.set(-1,0,0,0,1,0,0,0,1);function OE(s,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,Bg(s)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function o(y,x,P,F,D){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?l(y,x):x.isMeshLambertMaterial?(l(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(l(y,x),M(y,x)):x.isMeshPhongMaterial?(l(y,x),_(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(l(y,x),v(y,x),x.isMeshPhysicalMaterial&&S(y,x,D)):x.isMeshMatcapMaterial?(l(y,x),w(y,x)):x.isMeshDepthMaterial?l(y,x):x.isMeshDistanceMaterial?(l(y,x),N(y,x)):x.isMeshNormalMaterial?l(y,x):x.isLineBasicMaterial?(u(y,x),x.isLineDashedMaterial&&d(y,x)):x.isPointsMaterial?p(y,x,P,F):x.isSpriteMaterial?m(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===hi&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===hi&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const P=e.get(x),F=P.envMap,D=P.envMapRotation;F&&(y.envMap.value=F,y.envMapRotation.value.setFromMatrix4(UE.makeRotationFromEuler(D)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Qg),y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function u(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function d(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function p(y,x,P,F){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*P,y.scale.value=F*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function m(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function _(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function M(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function v(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,P){y.ior.value=x.ior,x.diffuseRoughness>0&&(y.diffuseRoughness.value=x.diffuseRoughness,x.diffuseRoughnessMap&&(y.diffuseRoughnessMap.value=x.diffuseRoughnessMap,t(x.diffuseRoughnessMap,y.diffuseRoughnessMapTransform))),x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===hi&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.retroreflectivity>0&&(y.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessMinimum,y.iridescenceThicknessMaximum.value=x.iridescenceThicknessMaximum,x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function w(y,x){x.matcap&&(y.matcap.value=x.matcap)}function N(y,x){const P=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function FE(s,e,t,r){let o={},l={};function u(P,F){const D=F.program;r.uniformBlockBinding(P,D,o[P.id])}function d(P,F){let D=o[P.id];D===void 0&&(w(P),D=p(P),o[P.id]=D,P.addEventListener("dispose",y));const O=F.program;r.updateUBOMapping(P,O);const I=e.render.frame;l[P.id]!==I&&(m(P),l[P.id]=I)}function p(P){const F=s.createBuffer(),D=P.__size,O=P.usage;return s.bindBuffer(s.UNIFORM_BUFFER,F),s.bufferData(s.UNIFORM_BUFFER,D,O),s.bindBuffer(s.UNIFORM_BUFFER,null),F}function m(P){const F=o[P.id],D=P.uniforms,O=P.__cache;s.bindBuffer(s.UNIFORM_BUFFER,F);for(let I=0,T=D.length;I<T;I++){const E=D[I];if(Array.isArray(E))for(let K=0,B=E.length;K<B;K++)_(E[K],I,K,O);else _(E,I,0,O)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function _(P,F,D,O){if(v(P,F,D,O)===!0){const I=P.__offset,T=P.value;if(Array.isArray(T)){let E=0;for(let K=0;K<T.length;K++){const B=T[K],G=N(B,!0);M(B,P.__data,E),E+=G.storage/Float32Array.BYTES_PER_ELEMENT}}else M(T,P.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,I,P.__data)}}function M(P,F,D){typeof P=="number"||typeof P=="boolean"?F[D]=P:P.isMatrix3?(F[D]=P.elements[0],F[D+1]=P.elements[1],F[D+2]=P.elements[2],F[D+3]=0,F[D+4]=P.elements[3],F[D+5]=P.elements[4],F[D+6]=P.elements[5],F[D+7]=0,F[D+8]=P.elements[6],F[D+9]=P.elements[7],F[D+10]=P.elements[8],F[D+11]=0):ArrayBuffer.isView(P)?F.set(P.subarray(0,F.length-D),D):P.toArray(F,D)}function v(P,F,D,O){const I=P.value,T=F+"_"+D;if(Array.isArray(I)){O[T]===void 0&&(O[T]=[]);const E=O[T];let K=!1;for(let B=0;B<I.length;B++)S(I[B],E,B)===!0&&(K=!0);return K}return S(I,O,T)}function S(P,F,D){if(F[D]===void 0)return typeof P=="number"||typeof P=="boolean"?F[D]=P:ArrayBuffer.isView(P)?F[D]=P.slice():F[D]=P.clone(),!0;{const O=F[D];if(typeof P=="number"||typeof P=="boolean"){if(O!==P)return F[D]=P,!0}else{if(ArrayBuffer.isView(P))return!0;if(O.equals(P)===!1)return O.copy(P),!0}}return!1}function w(P){const F=P.uniforms;let D=0;const O=16;for(let T=0,E=F.length;T<E;T++){const K=Array.isArray(F[T])?F[T]:[F[T]];for(let B=0,G=K.length;B<G;B++){const $=K[B],re=Array.isArray($.value)?$.value:[$.value],H=Array.isArray(F[T])||Array.isArray($.value);let de=D;for(let ee=0,ne=re.length;ee<ne;ee++){const Q=re[ee],te=N(Q,H),U=D%O,ie=U%te.boundary,Oe=U+ie;D+=ie,Oe!==0&&O-Oe<te.storage&&(D+=O-Oe),ee===0&&(de=D),D+=te.storage}const Y=$.type==="int"?Int32Array:$.type==="uint"?Uint32Array:Float32Array;$.__data=new Y((D-de)/Float32Array.BYTES_PER_ELEMENT),$.__offset=de}}const I=D%O;return I>0&&(D+=O-I),P.__size=D,P.__cache={},this}function N(P,F){const D={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(D.boundary=4,D.storage=4):P.isVector2?(D.boundary=8,D.storage=8):P.isVector3||P.isColor?(D.boundary=16,D.storage=12):P.isVector4?(D.boundary=16,D.storage=16):P.isMatrix3?(D.boundary=16,D.storage=48):P.isMatrix4?(D.boundary=16,D.storage=64):P.isTexture?mt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(P)?(D.boundary=16,D.storage=P.byteLength):mt("WebGLRenderer: Unsupported uniform value type.",P),F===!0&&(D.boundary=16,D.storage=Math.ceil(D.storage/16)*16),D}function y(P){const F=P.target;F.removeEventListener("dispose",y),s.deleteBuffer(o[F.id]),delete o[F.id],delete l[F.id]}function x(){for(const P in o)s.deleteBuffer(o[P]);o={},l={}}return{bind:u,update:d,dispose:x}}const kE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let er=null;function BE(){return er===null&&(er=new fy(kE,16,16,As,ar),er.name="DFG_LUT",er.minFilter=ni,er.magFilter=ni,er.wrapS=Er,er.wrapT=Er,er.generateMipmaps=!1,er.needsUpdate=!0),er}class zE{constructor(e={}){const{canvas:t=Bx(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:M=!1,reversedDepthBuffer:v=!1,outputBufferType:S=xi}=e;this.isWebGLRenderer=!0;let w;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=r.getContextAttributes().alpha}else w=u;const N=S,y=new Set([Jd,Qd,Zd]),x=new Set([xi,sr,Eo,Ea,qd,$d]),P=new Uint32Array(4),F=new Int32Array(4),D={textures:[],min:[],max:[],resolution:[]};let O=null,I=null;const T=[],E=[];let K=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let G=!1,$=null,re=null,H=null,de=null;this._outputColorSpace=Ri;let Y=0,ee=0,ne=null,Q=-1,te=null;const U=new dn,ie=new dn;let Oe=null;const le=new At(0);let Te=0,be=t.width,He=t.height,Ee=1,Ke=null,Ze=null;const Ye=new dn(0,0,be,He),ut=new dn(0,0,be,He);let St=!1;const yt=new Co,Qt=new nf;let qt=!1,$t=!1;const Ft=new tn,yn=new C,kt=new dn,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function Ve(){return ne===null?Ee:1}let V=r;function rt(R,j){return t.getContext(R,j)}let ot,ft,Ce,_t,Ae,qe,L,b,q,ve,Me,De,Ue,ge,_e,Ie,z,xe,W,J,ye,ue,Se;try{const R={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:M};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xd}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",Ge,!1),t.addEventListener("webglcontextcreationerror",we,!1),V===null){const j="webgl2";if(V=rt(j,R),V===null)throw rt(j)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ke()}catch(R){throw t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",Ge,!1),t.removeEventListener("webglcontextcreationerror",we,!1),Ot("WebGLRenderer: "+R.message),R}function ke(){ot=new GM(V),ot.init(),ye=new RE(V,ot),ft=new DM(V,ot,e,ye),Ce=new bE(V,ot),ft.reversedDepthBuffer&&v&&Ce.buffers.depth.setReversed(!0),re=V.createFramebuffer(),H=V.createFramebuffer(),de=V.createFramebuffer(),_t=new XM(V),Ae=new pE,qe=new NE(V,ot,Ce,Ae,ft,ye,_t),L=new VM(B),b=new Yy(V),ue=new RM(V,b),q=new WM(V,b,_t,ue),ve=new YM(V,q,b,ue,_t),xe=new KM(V,ft,qe),_e=new LM(Ae),Me=new fE(B,L,ot,ft,ue,_e),De=new OE(B,Ae),Ue=new gE,ge=new ME(ot),z=new NM(B,L,Ce,ve,w,p),Ie=new AE(B,ve,ft),Se=new FE(V,_t,ft,Ce),W=new PM(V,ot,_t),J=new jM(V,ot,_t),_t.programs=Me.programs,B.capabilities=ft,B.extensions=ot,B.properties=Ae,B.renderLists=Ue,B.shadowMap=Ie,B.state=Ce,B.info=_t}N!==xi&&(K=new $M(N,t.width,t.height,d,o,l));const se=new IE(B,V);this.xr=se,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=ot.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ot.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(R){R!==void 0&&(Ee=R,this.setSize(be,He,!1))},this.getSize=function(R){return R.set(be,He)},this.setSize=function(R,j,fe=!0){if(se.isPresenting){mt("WebGLRenderer: Can't change size while VR device is presenting.");return}be=R,He=j,t.width=Math.floor(R*Ee),t.height=Math.floor(j*Ee),fe===!0&&(t.style.width=R+"px",t.style.height=j+"px"),K!==null&&K.setSize(t.width,t.height),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(be*Ee,He*Ee).floor()},this.setDrawingBufferSize=function(R,j,fe){be=R,He=j,Ee=fe,t.width=Math.floor(R*fe),t.height=Math.floor(j*fe),this.setViewport(0,0,R,j)},this.setEffects=function(R){if(N===xi){Ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let j=0;j<R.length;j++)if(R[j].isOutputPass===!0){mt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}K.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(U)},this.getViewport=function(R){return R.copy(Ye)},this.setViewport=function(R,j,fe,oe){R.isVector4?Ye.set(R.x,R.y,R.z,R.w):Ye.set(R,j,fe,oe),Ce.viewport(U.copy(Ye).multiplyScalar(Ve()).round())},this.getScissor=function(R){return R.copy(ut)},this.setScissor=function(R,j,fe,oe){R.isVector4?ut.set(R.x,R.y,R.z,R.w):ut.set(R,j,fe,oe),Ce.scissor(ie.copy(ut).multiplyScalar(Ve()).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(R){Ce.setScissorTest(St=R)},this.setOpaqueSort=function(R){Ke=R},this.setTransparentSort=function(R){Ze=R},this.getClearColor=function(R){return R.copy(z.getClearColor())},this.setClearColor=function(){z.setClearColor(...arguments)},this.getClearAlpha=function(){return z.getClearAlpha()},this.setClearAlpha=function(){z.setClearAlpha(...arguments)},this.clear=function(R=!0,j=!0,fe=!0){let oe=0;if(R){let ae=!1;if(ne!==null){const ze=ne.texture.format;ae=y.has(ze)}if(ae){const ze=ne.texture.type,Qe=x.has(ze),Be=z.getClearColor(),We=z.getClearAlpha(),et=Be.r,pt=Be.g,Mt=Be.b;Qe?(P[0]=et,P[1]=pt,P[2]=Mt,P[3]=We,V.clearBufferuiv(V.COLOR,0,P)):(F[0]=et,F[1]=pt,F[2]=Mt,F[3]=We,V.clearBufferiv(V.COLOR,0,F))}else oe|=V.COLOR_BUFFER_BIT}j&&(oe|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),fe&&(oe|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),oe!==0&&V.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),$=R},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",Ge,!1),t.removeEventListener("webglcontextcreationerror",we,!1),z.dispose(),Ue.dispose(),ge.dispose(),qe.dispose(),Ae.dispose(),L.dispose(),ve.dispose(),q.dispose(),ue.dispose(),Se.dispose(),Me.dispose(),se.dispose(),se.removeEventListener("sessionstart",Gt),se.removeEventListener("sessionend",rn),Wt.stop()};function Pe(R){R.preventDefault(),Mc("WebGLRenderer: Context Lost."),G=!0}function Ge(){Mc("WebGLRenderer: Context Restored."),G=!1;const R=_t.autoReset,j=Ie.enabled,fe=Ie.autoUpdate,oe=Ie.needsUpdate,ae=Ie.type;ke(),_t.autoReset=R,Ie.enabled=j,Ie.autoUpdate=fe,Ie.needsUpdate=oe,Ie.type=ae}function we(R){Ot("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ct(R){const j=R.target;j.removeEventListener("dispose",ct),vt(j)}function vt(R){Rt(R),Ae.remove(R)}function Rt(R){const j=Ae.get(R).programs;j!==void 0&&(j.forEach(function(fe){Me.releaseProgram(fe)}),R.isShaderMaterial&&Me.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,fe,oe,ae,ze){j===null&&(j=Jt);const Qe=ae.isMesh&&ae.matrixWorld.determinantAffine()<0,Be=Hn(R,j,fe,oe,ae);Ce.setMaterial(oe,Qe);let We=fe.index,et=1;if(oe.wireframe===!0){if(We=q.getWireframeAttribute(fe),We===void 0)return;et=2}const pt=fe.drawRange,Mt=fe.attributes.position;let tt=pt.start*et,bt=(pt.start+pt.count)*et;ze!==null&&(tt=Math.max(tt,ze.start*et),bt=Math.min(bt,(ze.start+ze.count)*et)),We!==null?(tt=Math.max(tt,0),bt=Math.min(bt,We.count)):Mt!=null&&(tt=Math.max(tt,0),bt=Math.min(bt,Mt.count));const ln=bt-tt;if(ln<0||ln===1/0)return;ue.setup(ae,oe,Be,fe,We);let Xt,Ht=W;if(We!==null&&(Xt=b.get(We),Ht=J,Ht.setIndex(Xt)),ae.isMesh)oe.wireframe===!0?(Ce.setLineWidth(oe.wireframeLinewidth*Ve()),Ht.setMode(V.LINES)):Ht.setMode(V.TRIANGLES);else if(ae.isLine){let fn=oe.linewidth;fn===void 0&&(fn=1),Ce.setLineWidth(fn*Ve()),ae.isLineSegments?Ht.setMode(V.LINES):ae.isLineLoop?Ht.setMode(V.LINE_LOOP):Ht.setMode(V.LINE_STRIP)}else ae.isPoints?Ht.setMode(V.POINTS):ae.isSprite&&Ht.setMode(V.TRIANGLES);if(ae.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))Ht.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const fn=ae._multiDrawStarts,nt=ae._multiDrawCounts,Sn=ae._multiDrawCount,at=We?b.get(We).bytesPerElement:1,Ki=Ae.get(oe).currentProgram.getUniforms();for(let Mn=0;Mn<Sn;Mn++)Ki.setValue(V,"_gl_DrawID",Mn),Ht.render(fn[Mn]/at,nt[Mn])}else if(ae.isInstancedMesh)Ht.renderInstances(tt,ln,ae.count);else if(fe.isInstancedBufferGeometry){const fn=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,nt=Math.min(fe.instanceCount,fn);Ht.renderInstances(tt,ln,nt)}else Ht.render(tt,ln)};function Zt(R,j,fe,oe){$!==null&&R.isNodeMaterial&&$.setObject(oe,R),qt===!0&&_e.setState(R,fe,!1),R.transparent===!0&&R.side===Gi&&R.forceSinglePass===!1?(R.side=hi,R.needsUpdate=!0,ii(R,j,oe),R.side=Cs,R.needsUpdate=!0,ii(R,j,oe),R.side=Gi):ii(R,j,oe)}this.compile=function(R,j,fe=null){fe===null&&(fe=R),$!==null&&$.renderStart(R,j,fe),I=ge.get(fe),I.init(j),E.push(I),fe.traverseVisible(function(ae){ae.isLight&&ae.layers.test(j.layers)&&(I.pushLight(ae),ae.castShadow&&I.pushShadow(ae))}),R!==fe&&R.traverseVisible(function(ae){ae.isLight&&ae.layers.test(j.layers)&&(I.pushLight(ae),ae.castShadow&&I.pushShadow(ae))}),I.setupLights(),$!==null&&$.updateLights(I.state.lightsArray),$t=this.localClippingEnabled,qt=_e.init(this.clippingPlanes,$t),qt===!0&&_e.setGlobalState(this.clippingPlanes,j),$!==null&&Ie.render(I.state.shadowsArray,fe,j);const oe=new Set;return R.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;const ze=ae.material;if(ze)if(Array.isArray(ze))for(let Qe=0;Qe<ze.length;Qe++){const Be=ze[Qe];Zt(Be,fe,j,ae),oe.add(Be)}else Zt(ze,fe,j,ae),oe.add(ze)}),I=E.pop(),$!==null&&$.renderEnd(),oe},this.compileAsync=function(R,j,fe=null){const oe=this.compile(R,j,fe);return new Promise(ae=>{function ze(){if(oe.forEach(function(Qe){const We=Ae.get(Qe).currentProgram;(We===void 0||We.isReady())&&oe.delete(Qe)}),oe.size===0){ae(R);return}setTimeout(ze,10)}ot.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let Et=null;function zn(R){Et&&Et(R)}function Gt(){Wt.stop()}function rn(){Wt.start()}const Wt=new Vg;Wt.setAnimationLoop(zn),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(R){Et=R,se.setAnimationLoop(R),R===null?Wt.stop():Wt.start()},se.addEventListener("sessionstart",Gt),se.addEventListener("sessionend",rn),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){Ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;$!==null&&$.renderStart(R,j);const fe=se.enabled===!0&&se.isPresenting===!0,oe=K!==null&&(ne===null||fe)&&K.begin(B,ne);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(K===null||K.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(j),j=se.getCamera()),R.isScene===!0&&R.onBeforeRender(B,R,j,ne),I=ge.get(R,E.length),I.init(j),I.state.textureUnits=qe.getTextureUnits(),E.push(I),Ft.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),j.isArrayCamera?Qt.setFromArrayCamera(j):yt.setFromProjectionMatrix(Ft,Wi,j.reversedDepth),$t=this.localClippingEnabled,qt=_e.init(this.clippingPlanes,$t),O=Ue.get(R,T.length),O.init(),T.push(O),this.info.render.frame++,se.enabled===!0&&se.isPresenting===!0){const Qe=B.xr.getDepthSensingMesh();Qe!==null&&Un(Qe,j,-1/0,B.sortObjects)}Un(R,j,0,B.sortObjects),O.finish(),$!==null&&$.updateLights(I.state.lightsArray),B.sortObjects===!0&&O.sort(Ke,Ze),he=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,he&&z.addToRenderList(O,R),this.info.autoReset===!0&&this.info.reset(),qt===!0&&_e.beginShadows();const ae=I.state.shadowsArray;if(Ie.render(ae,R,j),qt===!0&&_e.endShadows(),(oe&&K.hasRenderPass())===!1){const Qe=O.opaque,Be=O.transmissive;if(I.setupLights(),j.isArrayCamera){const We=j.cameras;if(Be.length>0)for(let et=0,pt=We.length;et<pt;et++){const Mt=We[et];di(Qe,Be,R,Mt)}he&&z.render(R);for(let et=0,pt=We.length;et<pt;et++){const Mt=We[et];Si(O,R,Mt,Mt.viewport)}}else Be.length>0&&di(Qe,Be,R,j),he&&z.render(R),Si(O,R,j)}ne!==null&&ee===0&&(qe.updateMultisampleRenderTarget(ne),qe.updateRenderTargetMipmap(ne)),oe&&K.end(B),R.isScene===!0&&R.onAfterRender(B,R,j),ue.resetDefaultState(),Q=-1,te=null,E.pop(),E.length>0?(I=E[E.length-1],qe.setTextureUnits(I.state.textureUnits),qt===!0&&_e.setGlobalState(B.clippingPlanes,I.state.camera)):I=null,T.pop(),T.length>0?O=T[T.length-1]:O=null,$!==null&&$.renderEnd()};function Un(R,j,fe,oe){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)fe=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)I.pushLight(R),R.castShadow&&I.pushShadow(R);else if(R.isSprite){const Qe=j.isArrayCamera?Qt:yt;if(!R.frustumCulled||R.intersectsFrustum(Qe)){oe&&kt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ft);const Be=ve.update(R),We=R.material;We.visible&&O.push(R,Be,We,fe,kt.z,null,j)}}else if(R.isMesh||R.isLine||R.isPoints){const Qe=j.isArrayCamera?Qt:yt;if(!R.frustumCulled||R.intersectsFrustum(Qe)){const Be=ve.update(R),We=R.material;if(oe&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),kt.copy(R.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),kt.copy(Be.boundingSphere.center)),kt.applyMatrix4(R.matrixWorld).applyMatrix4(Ft)),Array.isArray(We)){const et=Be.groups;for(let pt=0,Mt=et.length;pt<Mt;pt++){const tt=et[pt],bt=We[tt.materialIndex];bt&&bt.visible&&O.push(R,Be,bt,fe,kt.z,tt,j)}}else We.visible&&O.push(R,Be,We,fe,kt.z,null,j)}}}const ze=R.children;for(let Qe=0,Be=ze.length;Qe<Be;Qe++)Un(ze[Qe],j,fe,oe)}function Si(R,j,fe,oe){const{opaque:ae,transmissive:ze,transparent:Qe}=R;I.setupLightsView(fe),qt===!0&&_e.setGlobalState(B.clippingPlanes,fe),oe&&Ce.viewport(U.copy(oe)),ae.length>0&&On(ae,j,fe),ze.length>0&&On(ze,j,fe),Qe.length>0&&On(Qe,j,fe),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function di(R,j,fe,oe){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[oe.id]===void 0){const tt=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[oe.id]=new rr(1,1,{generateMipmaps:!0,type:tt?ar:xi,minFilter:ts,samples:Math.max(4,ft.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Dt.workingColorSpace})}const ze=I.state.transmissionRenderTarget[oe.id],Qe=oe.viewport||U;ze.setSize(Qe.z*B.transmissionResolutionScale,Qe.w*B.transmissionResolutionScale);const Be=B.getRenderTarget(),We=B.getActiveCubeFace(),et=B.getActiveMipmapLevel();B.setRenderTarget(ze),B.getClearColor(le),Te=B.getClearAlpha(),Te<1&&B.setClearColor(16777215,.5),B.clear(),he&&z.render(fe);const pt=B.toneMapping;B.toneMapping=Cr;const Mt=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),I.setupLightsView(oe),qt===!0&&_e.setGlobalState(B.clippingPlanes,oe),On(R,fe,oe),qe.updateMultisampleRenderTarget(ze),qe.updateRenderTargetMipmap(ze),ot.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let bt=0,ln=j.length;bt<ln;bt++){const Xt=j[bt],{object:Ht,geometry:fn,material:nt,group:Sn}=Xt;if(nt.side===Gi&&Ht.layers.test(oe.layers)){const at=nt.side;nt.side=hi,nt.needsUpdate=!0,vn(Ht,fe,oe,fn,nt,Sn),nt.side=at,nt.needsUpdate=!0,tt=!0}}tt===!0&&(qe.updateMultisampleRenderTarget(ze),qe.updateRenderTargetMipmap(ze))}B.setRenderTarget(Be,We,et),B.setClearColor(le,Te),Mt!==void 0&&(oe.viewport=Mt),B.toneMapping=pt}function On(R,j,fe){const oe=j.isScene===!0?j.overrideMaterial:null;for(let ae=0,ze=R.length;ae<ze;ae++){const Qe=R[ae],{object:Be,geometry:We,group:et}=Qe;let pt=Qe.material;pt.allowOverride===!0&&oe!==null&&(pt=oe),Be.layers.test(fe.layers)&&vn(Be,j,fe,We,pt,et)}}function vn(R,j,fe,oe,ae,ze){$!==null&&ae.isNodeMaterial&&$.setObject(R,ae),R.onBeforeRender(B,j,fe,oe,ae,ze),R.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ae.onBeforeRender(B,j,fe,oe,R,ze),ae.transparent===!0&&ae.side===Gi&&ae.forceSinglePass===!1?(ae.side=hi,ae.needsUpdate=!0,B.renderBufferDirect(fe,j,oe,ae,R,ze),ae.side=Cs,ae.needsUpdate=!0,B.renderBufferDirect(fe,j,oe,ae,R,ze),ae.side=Gi):B.renderBufferDirect(fe,j,oe,ae,R,ze),R.onAfterRender(B,j,fe,oe,ae,ze)}function sn(R){let j=0;for(const fe of R)fe.texture!==null&&j++;return j}function ii(R,j,fe){j.isScene!==!0&&(j=Jt);const oe=Ae.get(R),ae=I.state.lights,ze=I.state.shadowsArray,Qe=ae.state.version,Be=Me.getParameters(R,ae.state,ze,j,fe,I.state.lightProbeGridArray),We=Me.getProgramCacheKey(Be);let et=oe.programs;oe.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?j.environment:null,oe.fog=j.fog;const pt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;oe.envMap=L.get(R.envMap||oe.environment,pt),oe.envMapRotation=oe.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,et===void 0&&(R.addEventListener("dispose",ct),et=new Map,oe.programs=et,oe.programVariants=new Map);let Mt=et.get(We);if(Mt!==void 0){if(oe.currentProgram===Mt&&oe.lightsStateVersion===Qe)return ji(R,Be),Mt}else Be.uniforms=Me.getUniforms(R),$!==null&&R.isNodeMaterial&&$.build(R,fe,Be),R.onBeforeCompile(Be,B),Mt=Me.acquireProgram(Be,We),et.set(We,Mt),oe.uniforms=Be.uniforms;const tt=oe.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(tt.clippingPlanes=_e.uniform),ji(R,Be),oe.needsLights=Xi(R),oe.lightsStateVersion=Qe,oe.needsLights&&(tt.ambientLightColor.value=ae.state.ambient,tt.lightProbe.value=ae.state.probe,tt.sunLights.value=ae.state.sun,tt.sunLightShadows.value=ae.state.sunShadow,tt.directionalLights.value=ae.state.directional,tt.directionalLightShadows.value=ae.state.directionalShadow,tt.spotLights.value=ae.state.spot,tt.spotLightShadows.value=ae.state.spotShadow,tt.rectAreaLights.value=ae.state.rectArea,tt.ltc_1.value=ae.state.rectAreaLTC1,tt.ltc_2.value=ae.state.rectAreaLTC2,tt.pointLights.value=ae.state.point,tt.pointLightShadows.value=ae.state.pointShadow,tt.hemisphereLights.value=ae.state.hemi,tt.sunShadowMatrix.value=ae.state.sunShadowMatrix,tt.sunShadowCascade.value=ae.state.sunShadowCascade,tt.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,tt.spotLightMatrix.value=ae.state.spotLightMatrix,tt.spotLightMap.value=ae.state.spotLightMap,tt.pointShadowMatrix.value=ae.state.pointShadowMatrix),oe.numLightProbeGrids=sn(I.state.lightProbeGridArray),oe.currentProgram=Mt,oe.uniformsList=null,Mt}function Mi(R,j,fe,oe,ae){const ze=Ae.get(R),Qe=ze.currentProgram.id+","+oe+","+ae;let Be=ze.programVariants.get(Qe);return Be===void 0?(Be=ii(R,j,fe),ze.programVariants.set(Qe,Be)):(ze.currentProgram=Be,ze.uniformsList=null,ze.outputColorSpace=oe,ze.toneMapping=ae),Be}function Lt(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=gc.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function ji(R,j){const fe=Ae.get(R);fe.outputColorSpace=j.outputColorSpace,fe.batching=j.batching,fe.batchingColor=j.batchingColor,fe.instancing=j.instancing,fe.instancingColor=j.instancingColor,fe.instancingMorph=j.instancingMorph,fe.skinning=j.skinning,fe.morphTargets=j.morphTargets,fe.morphNormals=j.morphNormals,fe.morphColors=j.morphColors,fe.morphTargetsCount=j.morphTargetsCount,fe.numClippingPlanes=j.numClippingPlanes,fe.numIntersection=j.numClipIntersection,fe.vertexAlphas=j.vertexAlphas,fe.vertexTangents=j.vertexTangents,fe.toneMapping=j.toneMapping}function Hn(R,j,fe,oe,ae){j.isScene!==!0&&(j=Jt),qe.resetTextureUnits();const ze=j.fog,Qe=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial?j.environment:null,Be=ne===null?B.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Dt.workingColorSpace,We=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial&&!oe.envMap||oe.isMeshPhongMaterial&&!oe.envMap,et=L.get(oe.envMap||Qe,We),pt=oe.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,Mt=!!fe.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),tt=!!fe.morphAttributes.position,bt=!!fe.morphAttributes.normal,ln=!!fe.morphAttributes.color;let Xt=Cr;oe.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Xt=B.toneMapping);const Ht=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,fn=Ht!==void 0?Ht.length:0,nt=Ae.get(oe),Sn=I.state.lights;if(qt===!0&&($t===!0||R!==te)){const Bt=R===te&&oe.id===Q;_e.setState(oe,R,Bt)}let at=!1,Ki=!1;oe.version===nt.__version?nt.needsLights&&nt.lightsStateVersion!==Sn.state.version||ae.isBatchedMesh&&nt.batching===!1||!ae.isBatchedMesh&&nt.batching===!0||ae.isBatchedMesh&&nt.batchingColor===!0&&ae._colorsTexture===null||ae.isBatchedMesh&&nt.batchingColor===!1&&ae._colorsTexture!==null||ae.isInstancedMesh&&nt.instancing===!1||!ae.isInstancedMesh&&nt.instancing===!0||ae.isSkinnedMesh&&nt.skinning===!1||!ae.isSkinnedMesh&&nt.skinning===!0||ae.isInstancedMesh&&nt.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&nt.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&nt.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&nt.instancingMorph===!1&&ae.morphTexture!==null||nt.envMap!==et||oe.fog===!0&&nt.fog!==ze||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==_e.numPlanes||nt.numIntersection!==_e.numIntersection)||nt.vertexAlphas!==pt||nt.vertexTangents!==Mt||nt.morphTargets!==tt||nt.morphNormals!==bt||nt.morphColors!==ln||nt.morphTargetsCount!==fn||nt.numLightProbeGrids!==sn(I.state.lightProbeGridArray)?at=!0:(nt.outputColorSpace!==Be||nt.toneMapping!==Xt)&&(Ki=!0):(at=!0,nt.__version=oe.version);let Mn=nt.currentProgram;(at===!0||Ki===!0)&&(Mn=Ki===!0?Mi(oe,j,ae,Be,Xt):ii(oe,j,ae),$&&oe.isNodeMaterial&&$.onUpdateProgram(oe,Mn,nt));let Rr=!1,Pi=!1,Yi=!1;const Pt=Mn.getUniforms(),mn=nt.uniforms;if(Ce.useProgram(Mn.program)&&(Rr=!0,Pi=!0,Yi=!0),oe.id!==Q&&(Q=oe.id,Pi=!0),Rr||te!==R){Ce.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Pt.setValue(V,"projectionMatrix",R.projectionMatrix),Pt.setValue(V,"viewMatrix",R.matrixWorldInverse);const en=Pt.map.cameraPosition;en!==void 0&&en.setValue(V,yn.setFromMatrixPosition(R.matrixWorld)),ft.logarithmicDepthBuffer&&Pt.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Pt.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),te!==R&&(te=R,Pi=!0,Yi=!0)}if(nt.needsLights&&(Sn.state.sunShadowMap.length>0&&Pt.setValue(V,"sunShadowMap",Sn.state.sunShadowMap,qe),Sn.state.directionalShadowMap.length>0&&Pt.setValue(V,"directionalShadowMap",Sn.state.directionalShadowMap,qe),Sn.state.spotShadowMap.length>0&&Pt.setValue(V,"spotShadowMap",Sn.state.spotShadowMap,qe),Sn.state.pointShadowMap.length>0&&Pt.setValue(V,"pointShadowMap",Sn.state.pointShadowMap,qe)),ae.isSkinnedMesh){Pt.setOptional(V,ae,"bindMatrix"),Pt.setOptional(V,ae,"bindMatrixInverse");const Bt=ae.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),Pt.setValue(V,"boneTexture",Bt.boneTexture,qe))}ae.isBatchedMesh&&(Pt.setOptional(V,ae,"batchingTexture"),Pt.setValue(V,"batchingTexture",ae._matricesTexture,qe),Pt.setOptional(V,ae,"batchingIdTexture"),Pt.setValue(V,"batchingIdTexture",ae._indirectTexture,qe),Pt.setOptional(V,ae,"batchingColorTexture"),ae._colorsTexture!==null&&Pt.setValue(V,"batchingColorTexture",ae._colorsTexture,qe));const Vn=fe.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&xe.update(ae,fe,Mn),(Pi||nt.receiveShadow!==ae.receiveShadow)&&(nt.receiveShadow=ae.receiveShadow,Pt.setValue(V,"receiveShadow",ae.receiveShadow)),(oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial)&&oe.envMap===null&&j.environment!==null&&(mn.envMapIntensity.value=j.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=BE()),Pi){if(Pt.setValue(V,"toneMappingExposure",B.toneMappingExposure),nt.needsLights&&Nr(mn,Yi),ze&&oe.fog===!0&&De.refreshFogUniforms(mn,ze),De.refreshMaterialUniforms(mn,oe,Ee,He,I.state.transmissionRenderTarget[R.id]),nt.needsLights&&nt.numLightProbeGrids>0){const Bt=D;let en=0;for(const Nn of I.state.lightProbeGridArray)Nn.texture!==null&&(Bt.textures[en]=Nn.texture,Bt.min[en]=Nn.boundingBox.min,Bt.max[en]=Nn.boundingBox.max,Bt.resolution[en]=Nn.resolution,en++);for(const Nn in Bt)Bt[Nn].length=en;mn.probesSH.value=Bt.textures,mn.probesMin.value=Bt.min,mn.probesMax.value=Bt.max,mn.probesResolution.value=Bt.resolution}gc.upload(V,Lt(nt),mn,qe)}if(oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(gc.upload(V,Lt(nt),mn,qe),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Pt.setValue(V,"center",ae.center),Pt.setValue(V,"modelViewMatrix",ae.modelViewMatrix),Pt.setValue(V,"normalMatrix",ae.normalMatrix),Pt.setValue(V,"modelMatrix",ae.matrixWorld),oe.uniformsGroups!==void 0){const Bt=oe.uniformsGroups;for(let en=0,Nn=Bt.length;en<Nn;en++){const Pr=Bt[en];Se.update(Pr,Mn),Se.bind(Pr,Mn)}}return Mn}function Nr(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.sunLights.needsUpdate=j,R.sunLightShadows.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function Xi(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(R,j,fe){const oe=Ae.get(R);oe.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),Ae.get(R.texture).__webglTexture=j,Ae.get(R.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:fe,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,j){const fe=Ae.get(R);fe.__webglFramebuffer=j,fe.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(R,j=0,fe=0){ne=R,Y=j,ee=fe;let oe=null,ae=!1,ze=!1;if(R){const Be=Ae.get(R);if(Be.__useDefaultFramebuffer!==void 0){Ce.bindFramebuffer(V.FRAMEBUFFER,Be.__webglFramebuffer),U.copy(R.viewport),ie.copy(R.scissor),Oe=R.scissorTest,Ce.viewport(U),Ce.scissor(ie),Ce.setScissorTest(Oe),Q=-1;return}else if(Be.__webglFramebuffer===void 0)qe.setupRenderTarget(R);else if(Be.__hasExternalTextures)qe.rebindTextures(R,Ae.get(R.texture).__webglTexture,Ae.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const pt=R.depthTexture;if(Be.__boundDepthTexture!==pt){if(pt!==null&&Ae.has(pt)&&(R.width!==pt.image.width||R.height!==pt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");qe.setupDepthRenderbuffer(R)}}const We=R.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(ze=!0);const et=Ae.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(et[j])?oe=et[j][fe]:oe=et[j],ae=!0):R.samples>0&&qe.useMultisampledRTT(R)===!1?oe=Ae.get(R).__webglMultisampledFramebuffer:Array.isArray(et)?oe=et[fe]:oe=et,U.copy(R.viewport),ie.copy(R.scissor),Oe=R.scissorTest}else U.copy(Ye).multiplyScalar(Ee).floor(),ie.copy(ut).multiplyScalar(Ee).floor(),Oe=St;if(fe!==0&&(oe=re),Ce.bindFramebuffer(V.FRAMEBUFFER,oe)&&Ce.drawBuffers(R,oe),Ce.viewport(U),Ce.scissor(ie),Ce.setScissorTest(Oe),ae){const Be=Ae.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+j,Be.__webglTexture,fe)}else if(ze){const Be=j;for(let We=0;We<R.textures.length;We++){const et=Ae.get(R.textures[We]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+We,et.__webglTexture,fe,Be)}}else if(R!==null&&fe!==0){const Be=Ae.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Be.__webglTexture,fe)}Q=-1};function or(R){const j=Ae.get(R);return(j.__readFormat!==R.format||j.__readType!==R.type)&&(j.__readFormat=R.format,j.__readType=R.type,j.__formatReadable=ft.textureFormatReadable(R.format),j.__typeReadable=ft.textureTypeReadable(R.type)),j}this.readRenderTargetPixels=function(R,j,fe,oe,ae,ze,Qe,Be=0){if(!(R&&R.isWebGLRenderTarget)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=Ae.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Qe!==void 0&&(We=We[Qe],Array.isArray(We)&&(We=We[0])),We){Ce.bindFramebuffer(V.FRAMEBUFFER,We);try{const et=R.textures[Be],pt=et.format,Mt=et.type;R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Be);const tt=or(et);if(tt.__formatReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(tt.__typeReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-oe&&fe>=0&&fe<=R.height-ae&&V.readPixels(j,fe,oe,ae,ye.convert(pt),ye.convert(Mt),ze)}finally{const et=ne!==null?Ae.get(ne).__webglFramebuffer:null;Ce.bindFramebuffer(V.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(R,j,fe,oe,ae,ze,Qe,Be=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=Ae.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Qe!==void 0&&(We=We[Qe],Array.isArray(We)&&(We=We[0])),We)if(j>=0&&j<=R.width-oe&&fe>=0&&fe<=R.height-ae){Ce.bindFramebuffer(V.FRAMEBUFFER,We);const et=R.textures[Be],pt=et.format,Mt=et.type;R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Be);const tt=or(et);if(tt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(tt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const bt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,bt),V.bufferData(V.PIXEL_PACK_BUFFER,ze.byteLength,V.STREAM_READ),V.readPixels(j,fe,oe,ae,ye.convert(pt),ye.convert(Mt),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);const ln=ne!==null?Ae.get(ne).__webglFramebuffer:null;Ce.bindFramebuffer(V.FRAMEBUFFER,ln);const Xt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await zx(V,Xt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,bt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,ze),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(bt),V.deleteSync(Xt),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,j=null,fe=0){const oe=Math.pow(2,-fe),ae=Math.floor(R.image.width*oe),ze=Math.floor(R.image.height*oe),Qe=j!==null?j.x:0,Be=j!==null?j.y:0;qe.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,fe,0,0,Qe,Be,ae,ze),Ce.unbindTexture()},this.copyTextureToTexture=function(R,j,fe=null,oe=null,ae=0,ze=0){let Qe,Be,We,et,pt,Mt,tt,bt,ln;const Xt=R.isCompressedTexture?R.mipmaps[ze]:R.image;if(fe!==null)Qe=fe.max.x-fe.min.x,Be=fe.max.y-fe.min.y,We=fe.isBox3?fe.max.z-fe.min.z:1,et=fe.min.x,pt=fe.min.y,Mt=fe.isBox3?fe.min.z:0;else{const Pt=Math.pow(2,-ae);Qe=Math.floor(Xt.width*Pt),Be=Math.floor(Xt.height*Pt),R.isDataArrayTexture?We=Xt.depth:R.isData3DTexture?We=Math.floor(Xt.depth*Pt):We=1,et=0,pt=0,Mt=0}oe!==null?(tt=oe.x,bt=oe.y,ln=oe.z):(tt=0,bt=0,ln=0);const Ht=ye.convert(j.format),fn=ye.convert(j.type);let nt;j.isData3DTexture?(qe.setTexture3D(j,0),nt=V.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(qe.setTexture2DArray(j,0),nt=V.TEXTURE_2D_ARRAY):(qe.setTexture2D(j,0),nt=V.TEXTURE_2D),Ce.activeTexture(V.TEXTURE0),Ce.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),Ce.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),Ce.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment);const Sn=Ce.getParameter(V.UNPACK_ROW_LENGTH),at=Ce.getParameter(V.UNPACK_IMAGE_HEIGHT),Ki=Ce.getParameter(V.UNPACK_SKIP_PIXELS),Mn=Ce.getParameter(V.UNPACK_SKIP_ROWS),Rr=Ce.getParameter(V.UNPACK_SKIP_IMAGES);Ce.pixelStorei(V.UNPACK_ROW_LENGTH,Xt.width),Ce.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Xt.height),Ce.pixelStorei(V.UNPACK_SKIP_PIXELS,et),Ce.pixelStorei(V.UNPACK_SKIP_ROWS,pt),Ce.pixelStorei(V.UNPACK_SKIP_IMAGES,Mt);const Pi=R.isDataArrayTexture||R.isData3DTexture,Yi=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){const Pt=Ae.get(R),mn=Ae.get(j),Vn=Ae.get(Pt.__renderTarget),Bt=Ae.get(mn.__renderTarget);Ce.bindFramebuffer(V.READ_FRAMEBUFFER,Vn.__webglFramebuffer),Ce.bindFramebuffer(V.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let en=0;en<We;en++)Pi&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ae.get(R).__webglTexture,ae,Mt+en),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ae.get(j).__webglTexture,ze,ln+en)),V.blitFramebuffer(et,pt,et+Qe,pt+Be,tt,bt,tt+Qe,bt+Be,V.DEPTH_BUFFER_BIT,V.NEAREST);Ce.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(ae!==0||R.isRenderTargetTexture||Ae.has(R)){const Pt=Ae.get(R),mn=Ae.get(j);Ce.bindFramebuffer(V.READ_FRAMEBUFFER,H),Ce.bindFramebuffer(V.DRAW_FRAMEBUFFER,de);for(let Vn=0;Vn<We;Vn++)Pi?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Pt.__webglTexture,ae,Mt+Vn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Pt.__webglTexture,ae),Yi?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,mn.__webglTexture,ze,ln+Vn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,mn.__webglTexture,ze),ae!==0?V.blitFramebuffer(et,pt,et+Qe,pt+Be,tt,bt,tt+Qe,bt+Be,V.COLOR_BUFFER_BIT,V.NEAREST):Yi?V.copyTexSubImage3D(nt,ze,tt,bt,ln+Vn,et,pt,Qe,Be):V.copyTexSubImage2D(nt,ze,tt,bt,et,pt,Qe,Be);Ce.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Yi?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(nt,ze,tt,bt,ln,Qe,Be,We,Ht,fn,Xt.data):j.isCompressedArrayTexture?V.compressedTexSubImage3D(nt,ze,tt,bt,ln,Qe,Be,We,Ht,Xt.data):V.texSubImage3D(nt,ze,tt,bt,ln,Qe,Be,We,Ht,fn,Xt):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,ze,tt,bt,Qe,Be,Ht,fn,Xt.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,ze,tt,bt,Xt.width,Xt.height,Ht,Xt.data):V.texSubImage2D(V.TEXTURE_2D,ze,tt,bt,Qe,Be,Ht,fn,Xt);Ce.pixelStorei(V.UNPACK_ROW_LENGTH,Sn),Ce.pixelStorei(V.UNPACK_IMAGE_HEIGHT,at),Ce.pixelStorei(V.UNPACK_SKIP_PIXELS,Ki),Ce.pixelStorei(V.UNPACK_SKIP_ROWS,Mn),Ce.pixelStorei(V.UNPACK_SKIP_IMAGES,Rr),ze===0&&j.generateMipmaps===!0&&j.mipmapsAutoUpdate===!0&&V.generateMipmap(nt),Ce.unbindTexture()},this.initRenderTarget=function(R){Ae.get(R).__webglFramebuffer===void 0&&qe.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?qe.setTextureCube(R,0):R.isData3DTexture?qe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?qe.setTexture2DArray(R,0):qe.setTexture2D(R,0),Ce.unbindTexture()},this.resetState=function(){Y=0,ee=0,ne=null,Ce.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Dt._getUnpackColorSpace()}}const Q0={type:"change"},cf={type:"start"},Jg={type:"end"},lc=new Dc,J0=new Tr,HE=Math.cos(70*Wx.DEG2RAD),wn=new C,ui=2*Math.PI,Vt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Zh=1e-6;class VE extends Xy{constructor(e,t=null){super(e,t),this.state=Vt.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ya.ROTATE,MIDDLE:ya.DOLLY,RIGHT:ya.PAN},this.touches={ONE:_a.ROTATE,TWO:_a.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new ss,this._lastTargetPosition=new C,this._quat=new ss().setFromUnitVectors(e.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new N0,this._sphericalDelta=new N0,this._scale=1,this._panOffset=new C,this._rotateStart=new Xe,this._rotateEnd=new Xe,this._rotateDelta=new Xe,this._panStart=new Xe,this._panEnd=new Xe,this._panDelta=new Xe,this._dollyStart=new Xe,this._dollyEnd=new Xe,this._dollyDelta=new Xe,this._dollyDirection=new C,this._mouse=new Xe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=WE.bind(this),this._onPointerDown=GE.bind(this),this._onPointerUp=jE.bind(this),this._onContextMenu=QE.bind(this),this._onMouseWheel=YE.bind(this),this._onKeyDown=qE.bind(this),this._onTouchStart=$E.bind(this),this._onTouchMove=ZE.bind(this),this._onMouseDown=XE.bind(this),this._onMouseMove=KE.bind(this),this._interceptControlDown=JE.bind(this),this._interceptControlUp=e2.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Vt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Q0),this.update(),this.state=Vt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;wn.copy(t).sub(this.target),wn.applyQuaternion(this._quat),this._spherical.setFromVector3(wn),this.autoRotate&&this.state===Vt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=ui:r>Math.PI&&(r-=ui),o<-Math.PI?o+=ui:o>Math.PI&&(o-=ui),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(wn.setFromSpherical(this._spherical),wn.applyQuaternion(this._quatInverse),t.copy(this.target).add(wn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const d=wn.length();u=this._clampDistance(d*this._scale);const p=d-u;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),l=!!p}else if(this.object.isOrthographicCamera){const d=new C(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=p!==this.object.zoom;const m=new C(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(d),this.object.updateMatrixWorld(),u=wn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(lc.origin.copy(this.object.position),lc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(lc.direction))<HE?this.object.lookAt(this.target):(J0.setFromNormalAndCoplanarPoint(this.object.up,this.target),lc.intersectPlane(J0,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>Zh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Zh||this._lastTargetPosition.distanceToSquared(this.target)>Zh?(this.dispatchEvent(Q0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ui/60*this.autoRotateSpeed*e:ui/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){wn.setFromMatrixColumn(t,0),wn.multiplyScalar(-e),this._panOffset.add(wn)}_panUp(e,t){this.screenSpacePanning===!0?wn.setFromMatrixColumn(t,1):(wn.setFromMatrixColumn(t,0),wn.crossVectors(this.object.up,wn)),wn.multiplyScalar(e),this._panOffset.add(wn)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;wn.copy(o).sub(this.target);let l=wn.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=e-r.left,l=t-r.top,u=r.width,d=r.height;this._mouse.x=o/u*2-1,this._mouse.y=-(l/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ui*this._rotateDelta.x/t.clientHeight),this._rotateUp(ui*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(r,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),o=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(o,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ui*this._rotateDelta.x/t.clientHeight),this._rotateUp(ui*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,d=(e.pageY+t.y)*.5;this._updateZoomParameters(u,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Xe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function GE(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function WE(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function jE(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Jg),this.state=Vt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function XE(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ya.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Vt.DOLLY;break;case ya.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Vt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Vt.ROTATE}break;case ya.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Vt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Vt.PAN}break;default:this.state=Vt.NONE}this.state!==Vt.NONE&&this.dispatchEvent(cf)}function KE(s){switch(this.state){case Vt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Vt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Vt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function YE(s){this.enabled===!1||this.enableZoom===!1||this.state!==Vt.NONE||(s.preventDefault(),this.dispatchEvent(cf),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Jg))}function qE(s){this.enabled!==!1&&this._handleKeyDown(s)}function $E(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case _a.ROTATE:if(this.enableRotate===!1){this.state=Vt.NONE;break}this._handleTouchStartRotate(s),this.state=Vt.TOUCH_ROTATE;break;case _a.PAN:if(this.enablePan===!1){this.state=Vt.NONE;break}this._handleTouchStartPan(s),this.state=Vt.TOUCH_PAN;break;default:this.state=Vt.NONE}break;case 2:switch(this.touches.TWO){case _a.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Vt.TOUCH_DOLLY_PAN;break;case _a.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Vt.TOUCH_DOLLY_ROTATE;break;default:this.state=Vt.NONE}break;default:this.state=Vt.NONE}this.state!==Vt.NONE&&this.dispatchEvent(cf)}function ZE(s){switch(this._trackPointer(s),this.state){case Vt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Vt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Vt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Vt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Vt.NONE}}function QE(s){this.enabled!==!1&&s.preventDefault()}function JE(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function e2(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function eg({theme:s="dark",heatmap:e="pressure",assetsLayer:t={pipes:!0,pipesPrimary:!0,pipesSecondary:!0,pipesTertiary:!0,pipesService:!0,buildings:!0,hydrants:!0,streetLabels:!0,valves:!0,tanks:!0,sensors:!0,contour:!0},closedValves:r={},onToggleValve:o,simTime:l=14,currentSim:u={label:"14:00 - Giờ bình thường",flow:12580,pressure:3.32},compact:d=!1,viewMode:p="3d",onSelectAsset:m}){const _=wt.useRef(null),M=wt.useRef(null),v=wt.useRef(null),S=wt.useRef(null),w=wt.useRef(null),N=wt.useRef(null),y=wt.useRef([]),x=wt.useRef([]),[P,F]=wt.useState(null),D=Object.entries(r).filter(([O,I])=>I);return wt.useEffect(()=>{const O=_.current;if(!O)return;const I=O.clientWidth||900,T=O.clientHeight||560,E=s==="dark",K=p==="xray",B=p==="2d",G=new ry;M.current=G,G.background=new At(E?792880:16317180),G.fog=null;const $=new Vi(B?36:42,I/T,2,8500);B?$.position.set(0,2200,.1):$.position.set(780,720,880),v.current=$;const re=new zE({antialias:!0,alpha:!1,powerPreference:"high-performance"});for(re.setSize(I,T),re.setPixelRatio(Math.min(window.devicePixelRatio,2)),re.shadowMap.enabled=!0,re.shadowMap.type=ig,re.toneMapping=Kd,re.toneMappingExposure=E?1.35:1.05,w.current=re;O.firstChild;)O.removeChild(O.firstChild);O.appendChild(re.domElement);const H=new VE($,re.domElement);H.enableDamping=!0,H.dampingFactor=.06,H.maxPolarAngle=B?.05:Math.PI/2-.03,H.minDistance=25,H.maxDistance=3400,H.target.set(0,B?0:15,0),S.current=H;const de=new Vy(E?6333946:16777215,E?1.25:1.1);G.add(de);const Y=new Hy(16776688,E?2.45:1.5);Y.position.set(650,950,550),Y.castShadow=!0,Y.shadow.mapSize.width=2048,Y.shadow.mapSize.height=2048,Y.shadow.camera.near=100,Y.shadow.camera.far=3200;const ee=1250;Y.shadow.camera.left=-ee,Y.shadow.camera.right=ee,Y.shadow.camera.top=ee,Y.shadow.camera.bottom=-ee,Y.shadow.bias=-3e-4,G.add(Y);const ne=new ky(E?3718648:14742270,E?988970:9741240,E?.85:.45);G.add(ne),x.current=[],y.current=[];const Q=new Hi(2600,2600),te=new In({color:E?463136:14870768,roughness:.9,metalness:.08}),U=new Ut(Q,te);U.rotation.x=-Math.PI/2,U.position.y=-.2,U.receiveShadow=!0,G.add(U);const ie=new jy(2600,130,E?165063:13358561,E?992324:14870768);ie.position.y=.02,G.add(ie);const Oe=new Ac(1240,1248,64),le=new va({color:E?165063:959977,side:Gi,transparent:!0,opacity:.35}),Te=new Ut(Oe,le);Te.rotation.x=-Math.PI/2,Te.position.y=.04,G.add(Te);const be=new qn;G.add(be);const He=new In({color:E?1318446:4674921,roughness:.65,metalness:.15}),Ee=new In({color:E?1976635:9741240,roughness:.8});new va({color:16096779});const Ke=new va({color:E?9741240:16777215}),Ze=(W,J,ye,ue,Se=!0,ke="Đường đô thị",se=!0)=>{const Pe=new Hi(ye,ue),Ge=new Ut(Pe,He);Ge.rotation.x=-Math.PI/2,Ge.position.set(W,.05,J),Se||(Ge.rotation.z=Math.PI/2),Ge.receiveShadow=!0,be.add(Ge);const we=ye>=24?4:2.5,ct=new Hi(we,ue),vt=new Ut(ct,Ee);vt.rotation.x=-Math.PI/2,Se?vt.position.set(W-ye/2-we/2,.1,J):(vt.rotation.z=Math.PI/2,vt.position.set(W,.1,J-ye/2-we/2)),be.add(vt);const Rt=new Ut(ct,Ee);Rt.rotation.x=-Math.PI/2,Se?Rt.position.set(W+ye/2+we/2,.1,J):(Rt.rotation.z=Math.PI/2,Rt.position.set(W,.1,J+ye/2+we/2)),be.add(Rt);const Zt=Math.floor(ue/24);for(let Et=0;Et<Zt;Et++){const zn=new Hi(.5,6),Gt=new Ut(zn,Ke);Gt.rotation.x=-Math.PI/2,Se?Gt.position.set(W,.08,J-ue/2+Et*24+12):(Gt.rotation.z=Math.PI/2,Gt.position.set(W-ue/2+Et*24+12,.08,J)),be.add(Gt)}};Ze(0,0,24,2400,!0,"Đường Hoàng Đạo Thúy",!0),Ze(0,180,28,2500,!1,"Đường Lê Văn Lương",!0),Ze(0,-180,30,2500,!1,"Đường Trần Duy Hưng",!0),Ze(-440,0,40,2500,!0,"Đường Phạm Hùng - Khuất Duy Tiến (Vành Đai 3)",!0),Ze(-160,0,22,2400,!0,"Đường Hoàng Minh Giám",!0),Ze(-700,40,44,1400,!1,"Đại Lộ Thăng Long",!0),Ze(340,0,22,2400,!0,"Phố Trung Kính",!0),Ze(140,0,16,2200,!0,"Phố Nguyễn Thị Định",!1),Ze(240,220,18,1400,!0,"Phố Vũ Trọng Phụng",!0),Ze(290,240,18,1400,!0,"Phố Nguyễn Tuân",!0),Ze(0,0,18,2400,!1,"Đường Nguyễn Thị Thập",!1),Ze(0,90,16,2200,!1,"Phố Hoàng Ngân",!1),Ze(0,-90,16,2e3,!1,"Phố Đỗ Quang",!1),Ze(0,240,16,2200,!1,"Phố Quan Nhân",!1),Ze(0,290,16,2e3,!1,"Phố Nhân Hòa & Chính Kinh",!1),Ze(0,350,22,2400,!1,"Đường Ngụy Như Kon Tum",!0),Ze(0,430,18,2200,!1,"Đường Nguyễn Huy Tưởng",!1),Ze(0,-340,24,2400,!1,"Đường Nguyễn Chánh / Vũ Phạm Hàm",!0),Ze(0,-260,18,1800,!1,"Đường Mạc Thái Tổ",!1),Ze(0,-220,18,1800,!1,"Đường Mạc Thái Tông",!1),Ze(-200,-460,24,2e3,!1,"Đường Mễ Trì",!0),Ze(-200,-540,26,2e3,!1,"Đường Dương Đình Nghệ",!0);const Ye=new qn;G.add(Ye);const ut=(W,J,ye=50,ue=12.5,Se=!0)=>{if(!t.streetLabels)return null;const ke=document.createElement("canvas");ke.width=512,ke.height=128;const se=ke.getContext("2d"),Pe=26,Ge=10,we=12,ct=492,vt=104;se.beginPath(),se.moveTo(Ge+Pe,we),se.lineTo(Ge+ct-Pe,we),se.quadraticCurveTo(Ge+ct,we,Ge+ct,we+Pe),se.lineTo(Ge+ct,we+vt-Pe),se.quadraticCurveTo(Ge+ct,we+vt,Ge+ct-Pe,we+vt),se.lineTo(Ge+Pe,we+vt),se.quadraticCurveTo(Ge,we+vt,Ge,we+vt-Pe),se.lineTo(Ge,we+Pe),se.quadraticCurveTo(Ge,we,Ge+Pe,we),se.closePath(),se.fillStyle=E?"rgba(10, 18, 34, 0.95)":"rgba(255, 255, 255, 0.96)",se.fill(),se.lineWidth=Se?5:3.5,se.strokeStyle=Se?E?"#38bdf8":"#0284c7":E?"#64748b":"#94a3b8",se.stroke(),se.fillStyle=Se?"#0284c7":"#475569",se.beginPath(),se.arc(68,64,28,0,Math.PI*2),se.fill(),se.fillStyle="#ffffff",se.font='bold 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',se.textAlign="center",se.textBaseline="middle",se.fillText(Se?"ĐT":"HN",68,64),se.fillStyle=E?"#ffffff":"#0f172a",se.font=`bold ${Se?"32px":"28px"} -apple-system, BlinkMacSystemFont, "Plus Jakarta Sans", Roboto, sans-serif`,se.textAlign="left",se.fillText(W,114,64);const Rt=new v0(ke);Rt.minFilter=ni;const Zt=new zd({map:Rt,transparent:!0,depthTest:!1}),Et=new l0(Zt);return Et.position.set(J[0],J[1]+16,J[2]),Et.scale.set(ye,ue,1),Ye.add(Et),Et};ut("ĐƯỜNG HOÀNG ĐẠO THÚY",[0,10,-50],55,13.5,!0),ut("ĐƯỜNG LÊ VĂN LƯƠNG",[120,10,180],52,13,!0),ut("ĐƯỜNG TRẦN DUY HƯNG",[120,10,-180],52,13,!0),ut("ĐƯỜNG PHẠM HÙNG (VÀNH ĐAI 3)",[-440,10,-80],65,16,!0),ut("ĐƯỜNG HOÀNG MINH GIÁM",[-160,10,80],55,13.5,!0),ut("ĐẠI LỘ THĂNG LONG",[-720,10,40],56,14,!0),ut("ĐƯỜNG NGUYỄN THỊ THẬP",[-80,10,0],48,12,!1),ut("PHỐ NGUYỄN THỊ ĐỊNH",[140,10,-70],48,12,!1),ut("PHỐ HOÀNG NGÂN",[60,10,90],44,11,!1),ut("PHỐ ĐỖ QUANG",[60,10,-90],44,11,!1),ut("PHỐ VŨ TRỌNG PHỤNG",[240,10,240],46,11.5,!1),ut("PHỐ NGUYỄN TUÂN",[290,10,290],46,11.5,!1),ut("ĐƯỜNG NGỤY NHƯ KON TUM",[140,10,350],52,13,!1),ut("PHỐ TRUNG KÍNH",[340,10,50],46,11.5,!1),ut("KEANGNAM LANDMARK 72 (350M)",[-540,16,-320],68,17,!0),ut("TRUNG TÂM HỘI NGHỊ QUỐC GIA (NCC)",[-440,14,120],68,17,!0),ut("VINHOMES D'CAPITALE & BIG C",[-220,12,-180],62,15.5,!0),ut("HỒ ĐIỀU HÒA NHÂN CHÍNH (8.2 HA)",[-260,10,95],58,14.5,!0);const St=new In({color:E?536393:223649,roughness:.1,metalness:.8,transparent:!0,opacity:E?.88:.75}),yt=new In({color:E?413243:1467700,roughness:.9}),Qt=new Hi(160,140),qt=new Ut(Qt,St);qt.rotation.x=-Math.PI/2,qt.position.set(-260,.25,95),qt.receiveShadow=!0,G.add(qt);const $t=new Hi(168,148),Ft=new Ut($t,yt);Ft.rotation.x=-Math.PI/2,Ft.position.set(-260,.2,95),G.add(Ft);const yn=new Hi(220,150),kt=new Ut(yn,St);kt.rotation.x=-Math.PI/2,kt.position.set(-540,.25,120),kt.receiveShadow=!0,G.add(kt);const Jt=new qn;G.add(Jt);const he=!!r["VALVE-01"],Ve=!!r["VALVE-02"],V=!!r["VALVE-03"],rt=!!r["VALVE-04"],ot=!!r["VALVE-05"],ft=!!r["VALVE-06"],Ce=!!r["VALVE-07"],_t=!!r["VALVE-08"],Ae=({pos:W=[0,0,0],size:J=[16,40,16],color:ye=3718648,name:ue,id:Se,floors:ke,households:se,demandFlow:Pe,intakePressure:Ge,connectionPipe:we,cisternCapacity:ct,meterId:vt,dma:Rt,hasAntenna:Zt=!1,isCutOff:Et=!1,cutOffValveName:zn=""})=>{if(!t.buildings)return null;const Gt=new qn;Gt.position.set(W[0],0,W[2]);const[rn,Wt,Un]=J,Si=Et?15680580:ye,di=new wr(rn,Wt,Un),On=new In({color:K?165063:Si,metalness:K?.05:Et?.2:.42,roughness:K?.1:.22,transparent:!0,opacity:K?.12:Et?.75:E?.92:.94,depthWrite:!K,emissive:Et?10033947:K?165063:E?Si:0,emissiveIntensity:Et?.45:K?.04:.18}),vn=new Ut(di,On);vn.position.y=Wt/2,vn.castShadow=!K,vn.receiveShadow=!K,Gt.add(vn);const sn=new _0(di),ii=new Hd(sn,new Ec({color:Et?16557477:E?8246268:165063,linewidth:K?1:Et?2.5:1.5,transparent:K,opacity:K?.28:1}));if(vn.add(ii),Zt){const Lt=new Jr(.3,.5,20,8),ji=new In({color:14870768,metalness:.85}),Hn=new Ut(Lt,ji);Hn.position.set(0,Wt+12,0),Gt.add(Hn);const Nr=new xa(1.2,8,8),Xi=new va({color:Et?16096779:15680580}),or=new Ut(Nr,Xi);or.position.set(0,Wt+22,0),Gt.add(or)}const Mi={name:ue,id:Se,type:"Công Trình & Tòa Nhà Đô Thị",status:Et?`⚠️ ĐÃ CẮT NƯỚC CỤC BỘ (Do đóng chốt khóa: ${zn})`:"Cấp nước liên tục 24/7 (Đạt chuẩn QCVN 01-1:2018/BXD)",floors:`${ke} tầng`,households:se||"500 căn hộ",flow:Et?"0.0 m³/h (Mất áp)":Pe||"45.0 m³/h",pressure:Et?"0.00 bar (MẤT NƯỚC)":Ge||"3.25 bar",elevation:"+17.2m ASL",connectionPipe:we||"DN65 HDPE",cisternCapacity:ct||"800 m³",meterId:vt||`AMR-${Se}`,dma:Rt||"DMA THNC-02",isCutOff:Et,cutOffValveName:zn};return Gt.userData={name:ue,id:Se,type:"Building",data:Mi},vn.userData=Gt.userData,x.current.push(vn),Jt.add(Gt),Gt},qe=({center:W,size:J,rows:ye=2,cols:ue=6,heightRange:Se=[15,22],zoneId:ke,isCutOff:se,cutOffValveName:Pe,blockName:Ge="Khu Nhà Phố Liền Kề",dma:we="DMA THNC-02"})=>{if(!t.buildings)return;const[ct,vt]=W,[Rt,Zt]=J,Et=Rt/ue,zn=Zt/ye,Gt=new qn;for(let rn=0;rn<ye;rn++)for(let Wt=0;Wt<ue;Wt++){const Un=ct-Rt/2+(Wt+.5)*Et,Si=vt-Zt/2+(rn+.5)*zn,di=(Math.sin(Un*12.9898+Si*78.233)*43758.5453%1+1)%1,On=Se[0]+di*(Se[1]-Se[0]),vn=Et*.88,sn=zn*.86,ii=new wr(vn,On,sn),Mi=E?[3359061,1976635,4674921,988970,223649]:[15857145,14870768,13358561,9741240,12573694],Lt=Math.floor(di*Mi.length)%Mi.length,ji=new In({color:K?165063:se?15680580:Mi[Lt],roughness:K?.1:.5,metalness:K?.05:.1,transparent:!0,opacity:K?.08:se?.75:1,depthWrite:!K,emissive:se?10033947:E?K?165063:Mi[Lt]:0,emissiveIntensity:se?.3:E?K?.02:.12:0}),Hn=new Ut(ii,ji);Hn.position.set(Un,On/2,Si),Hn.castShadow=!0,Hn.receiveShadow=!0;const Nr=new _0(ii),Xi=new Hd(Nr,new Ec({color:se?16557477:E?3718648:6583435,linewidth:1}));Hn.add(Xi);const or={name:`${Ge} (Lô ${rn+1}-${Wt+1})`,id:`HOUSE-${ke}-${rn+1}-${Wt+1}`,type:"Nhà Phố / Shophouse Phân Lô",status:se?`⚠️ MẤT NƯỚC (Do đóng van: ${Pe})`:"Cấp nước ổn định",floors:`${Math.round(On/3.6)} tầng`,households:"1 hộ gia đình + mặt bằng kinh doanh",flow:se?"0.0 m³/h":"0.45 m³/h",pressure:se?"0.00 bar":"3.22 bar",elevation:"+16.5m ASL",connectionPipe:"DN32 HDPE",cisternCapacity:"2.5 m³ bồn Inox",meterId:`AMR-H-${ke}-${rn+1}${Wt+1}`,dma:we,isCutOff:se,cutOffValveName:Pe};Hn.userData={name:`${Ge} (Lô ${rn+1}-${Wt+1})`,id:`HOUSE-${ke}-${rn+1}-${Wt+1}`,type:"Building",data:or},x.current.push(Hn),Gt.add(Hn)}Jt.add(Gt)};Ae({pos:[-540,0,-320],size:[48,165,48],color:E?165063:223649,name:"Keangnam Hanoi Landmark 72 (350m - 72 Tầng)",id:"BLDG-KEANGNAM-72",floors:72,households:"Khách sạn InterContinental + 200,000m² VP",demandFlow:"142.0 m³/h",intakePressure:"3.42 bar",connectionPipe:"DN150 Gang cầu K9 kép",cisternCapacity:"4,500 m³",meterId:"AMR-KEANGNAM-MAIN",dma:"DMA Phía Tây",hasAntenna:!0,isCutOff:ft,cutOffValveName:"Van V-KNG-06"}),Ae({pos:[-590,0,-320],size:[32,105,32],color:E?223649:165063,name:"Tháp Căn Hộ Keangnam A (48 Tầng)",id:"BLDG-KEANGNAM-A",floors:48,households:"460 căn hộ cao cấp",demandFlow:"48.0 m³/h",intakePressure:"3.38 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,200 m³",meterId:"AMR-KEANGNAM-TOWER-A",dma:"DMA Phía Tây",isCutOff:ft,cutOffValveName:"Van V-KNG-06"}),Ae({pos:[-490,0,-320],size:[32,105,32],color:E?223649:165063,name:"Tháp Căn Hộ Keangnam B (48 Tầng)",id:"BLDG-KEANGNAM-B",floors:48,households:"460 căn hộ cao cấp",demandFlow:"48.0 m³/h",intakePressure:"3.38 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,200 m³",meterId:"AMR-KEANGNAM-TOWER-B",dma:"DMA Phía Tây",isCutOff:ft,cutOffValveName:"Van V-KNG-06"}),Ae({pos:[-460,0,-220],size:[30,80,26],color:E?165063:223649,name:"Tòa Tháp Handico Tower (33 Tầng)",id:"BLDG-HANDICO",floors:33,households:"Trụ sở Tổng Công ty Handico",demandFlow:"32.0 m³/h",intakePressure:"3.35 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"800 m³",meterId:"AMR-HANDICO",dma:"DMA Phía Tây",isCutOff:ft,cutOffValveName:"Van V-KNG-06"}),Ae({pos:[-460,0,-170],size:[28,68,24],color:E?165063:223649,name:"Tòa Tháp CEO Tower (27 Tầng)",id:"BLDG-CEO",floors:27,households:"Tổ hợp Văn phòng CEO Group",demandFlow:"28.0 m³/h",intakePressure:"3.32 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"700 m³",meterId:"AMR-CEO",dma:"DMA Phía Tây",isCutOff:ft,cutOffValveName:"Van V-KNG-06"}),Ae({pos:[-440,0,-110],size:[56,42,56],color:E?1096065:366185,name:"Bảo Tàng Hà Nội (Kim Tự Tháp Ngược)",id:"BLDG-MUSEUM",floors:4,households:"Bảo tàng Quốc gia & Khu triển lãm 5 ha",demandFlow:"24.0 m³/h",intakePressure:"3.32 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"600 m³",meterId:"AMR-MUSEUM",dma:"DMA Phía Tây",isCutOff:ft,cutOffValveName:"Van V-KNG-06"}),Ae({pos:[-440,0,140],size:[85,36,75],color:E?14251782:11817737,name:"Trung Tâm Hội Nghị Quốc Gia (NCC - 64 ha)",id:"BLDG-NCC",floors:5,households:"Hội trường 3,800 chỗ + Khuôn viên cảnh quan",demandFlow:"85.0 m³/h",intakePressure:"3.35 bar",connectionPipe:"DN100 HDPE kép từ Đại lộ Thăng Long",cisternCapacity:"2,500 m³",meterId:"AMR-NCC-MAIN",dma:"DMA Hội Nghị Quốc Gia"}),Ae({pos:[-280,0,-180],size:[70,24,60],color:E?16096779:14251782,name:"Đại Siêu Thị Big C Thăng Long (GO!)",id:"BLDG-BIG-C",floors:3,households:"Trung tâm mua sắm bán lẻ 12,000m²",demandFlow:"65.0 m³/h",intakePressure:"3.28 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,500 m³",meterId:"AMR-BIGC-01",dma:"DMA THNC-01",isCutOff:ot,cutOffValveName:"Van V-DCP-05"}),[-230,-190,-150].forEach((W,J)=>{Ae({pos:[W,0,-220],size:[26,95+J*4,26],color:E?165063:223649,name:`Tổ Hợp Vinhomes D'Capitale C${J+1} (${40+J} Tầng)`,id:`BLDG-DCAPITALE-${J+1}`,floors:40+J,households:"520 căn hộ cao cấp",demandFlow:"52.0 m³/h",intakePressure:"3.30 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,400 m³",meterId:`AMR-DCAPITALE-C${J+1}`,dma:"DMA THNC-01",isCutOff:ot,cutOffValveName:"Van V-DCP-05"}),Ae({pos:[W,0,-260],size:[26,92+J*4,26],color:E?223649:165063,name:`Tổ Hợp Vinhomes D'Capitale C${J+4} (${39+J} Tầng)`,id:`BLDG-DCAPITALE-${J+4}`,floors:39+J,households:"500 căn hộ cao cấp",demandFlow:"50.0 m³/h",intakePressure:"3.30 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,350 m³",meterId:`AMR-DCAPITALE-C${J+4}`,dma:"DMA THNC-01",isCutOff:ot,cutOffValveName:"Van V-DCP-05"})}),Ae({pos:[-360,0,40],size:[32,98,30],color:E?165063:223649,name:"Tháp Thăng Long Number One A (40 Tầng)",id:"BLDG-TL-NO1-A",floors:40,households:"540 căn hộ xanh",demandFlow:"54.0 m³/h",intakePressure:"3.32 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,500 m³",meterId:"AMR-TL-NO1-A",dma:"DMA THNC-01",isCutOff:ot,cutOffValveName:"Van V-DCP-05"}),Ae({pos:[-360,0,85],size:[32,98,30],color:E?165063:223649,name:"Tháp Thăng Long Number One B (40 Tầng)",id:"BLDG-TL-NO1-B",floors:40,households:"540 căn hộ xanh",demandFlow:"54.0 m³/h",intakePressure:"3.32 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,500 m³",meterId:"AMR-TL-NO1-B",dma:"DMA THNC-01",isCutOff:ot,cutOffValveName:"Van V-DCP-05"}),Ae({pos:[-380,0,-30],size:[28,76,26],color:E?223649:165063,name:"Tòa Tháp Viglacera Tower (30 Tầng)",id:"BLDG-VIGLACERA",floors:30,households:"Trụ sở Tổng Công ty Viglacera",demandFlow:"30.0 m³/h",intakePressure:"3.30 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"800 m³",meterId:"AMR-VIGLACERA",dma:"DMA THNC-01",isCutOff:ot,cutOffValveName:"Van V-DCP-05"}),Ae({pos:[65,0,-215],size:[38,72,32],color:E?14251782:11817737,name:"Tổ Hợp Charmvit Tower & Grand Plaza",id:"BLDG-CHARMVIT",floors:27,households:"540 phòng KS 5 sao & 45,000m² VP Đại sứ quán Hàn Quốc",demandFlow:"58.0 m³/h",intakePressure:"3.25 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,800 m³",meterId:"AMR-CHARMVIT-PLAZA",dma:"DMA THNC-01",isCutOff:rt,cutOffValveName:"Van V-TDN-04"}),[-20,20,60].forEach((W,J)=>{Ae({pos:[W,0,-140],size:[24,72,22],color:E?165063:223649,name:`Tòa Căn Hộ Cao Cấp N04-${String.fromCharCode(65+J)} (29 Tầng)`,id:`BLDG-N04-${String.fromCharCode(65+J)}`,floors:29,households:"360 căn hộ cao cấp",demandFlow:"36.0 m³/h",intakePressure:"3.26 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"950 m³",meterId:`AMR-N04-${String.fromCharCode(65+J)}`,dma:"DMA THNC-01",isCutOff:rt,cutOffValveName:"Van V-TDN-04"})}),Ae({pos:[40,0,-85],size:[28,85,26],color:E?223649:165063,name:"Tòa Tháp N05-29T1 Hoàng Đạo Thúy (34 Tầng)",id:"BLDG-N05-34T1",floors:34,households:"480 căn hộ",demandFlow:"48.0 m³/h",intakePressure:"3.24 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,200 m³",meterId:"AMR-N05-34T1",dma:"DMA THNC-01",isCutOff:rt,cutOffValveName:"Van V-TDN-04"}),Ae({pos:[80,0,-85],size:[28,85,26],color:E?223649:165063,name:"Tòa Tháp N05-29T2 Hoàng Đạo Thúy (34 Tầng)",id:"BLDG-N05-34T2",floors:34,households:"480 căn hộ",demandFlow:"48.0 m³/h",intakePressure:"3.24 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,200 m³",meterId:"AMR-N05-34T2",dma:"DMA THNC-01",isCutOff:rt,cutOffValveName:"Van V-TDN-04"}),Ae({pos:[25,0,20],size:[26,82,26],color:E?165063:223649,name:"Tòa Tháp Biểu Tượng 34T Hoàng Đạo Thúy",id:"BLDG-34T-HDT",floors:34,households:"650 căn hộ (~2,600 cư dân)",demandFlow:"58.0 m³/h",intakePressure:"3.25 bar",connectionPipe:"DN80 HDPE nối từ trục D600",cisternCapacity:"1,500 m³",meterId:"AMR-34T-MAIN",dma:"DMA THNC-02",hasAntenna:!0,isCutOff:he,cutOffValveName:"Van V-HDT-01"}),Ae({pos:[-35,0,30],size:[20,58,18],color:E?223649:165063,name:"Tòa Chung Cư 24T1 Hoàng Đạo Thúy",id:"BLDG-24T1",floors:24,households:"280 căn hộ",demandFlow:"28.0 m³/h",intakePressure:"3.22 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"800 m³",meterId:"AMR-24T1",dma:"DMA THNC-02",isCutOff:he,cutOffValveName:"Van V-HDT-01"}),Ae({pos:[-35,0,-30],size:[20,58,18],color:E?223649:165063,name:"Tòa Chung Cư 24T2 Hoàng Đạo Thúy",id:"BLDG-24T2",floors:24,households:"280 căn hộ",demandFlow:"28.0 m³/h",intakePressure:"3.22 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"800 m³",meterId:"AMR-24T2",dma:"DMA THNC-02",isCutOff:he,cutOffValveName:"Van V-HDT-01"}),Ae({pos:[-75,0,0],size:[20,58,18],color:E?223649:165063,name:"Tòa Chung Cư 24T3 Hoàng Đạo Thúy",id:"BLDG-24T3",floors:24,households:"280 căn hộ",demandFlow:"28.0 m³/h",intakePressure:"3.22 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"800 m³",meterId:"AMR-24T3",dma:"DMA THNC-02",isCutOff:he,cutOffValveName:"Van V-HDT-01"}),[75,115,155].forEach((W,J)=>{Ae({pos:[42,0,W],size:[18,44,16],color:E?959977:165063,name:`Tòa Chung Cư 17T${J+1} Hoàng Đạo Thúy`,id:`BLDG-17T${J+1}`,floors:17,households:"180 căn hộ",demandFlow:"18.0 m³/h",intakePressure:"3.20 bar",connectionPipe:"DN50 HDPE",cisternCapacity:"500 m³",meterId:`AMR-17T${J+1}`,dma:"DMA THNC-02",isCutOff:he,cutOffValveName:"Van V-HDT-01"}),Ae({pos:[-35,0,W],size:[18,44,16],color:E?959977:165063,name:`Tòa Chung Cư 17T${J+4} Hoàng Đạo Thúy`,id:`BLDG-17T${J+4}`,floors:17,households:"180 căn hộ",demandFlow:"18.0 m³/h",intakePressure:"3.20 bar",connectionPipe:"DN50 HDPE",cisternCapacity:"500 m³",meterId:`AMR-17T${J+4}`,dma:"DMA THNC-02",isCutOff:he,cutOffValveName:"Van V-HDT-01"})}),Ae({pos:[35,0,155],size:[30,95,30],color:E?165063:481669,name:"Tòa Tháp Diamond Flower Tower (36 Tầng - 176m)",id:"BLDG-DIAMOND-FLOWER",floors:36,households:"380 căn hộ + 35,000m² VP hạng A",demandFlow:"48.0 m³/h",intakePressure:"3.28 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,600 m³",meterId:"AMR-DIAMOND-01",dma:"DMA THNC-02",hasAntenna:!0,isCutOff:V,cutOffValveName:"Van V-LVL-03"}),Ae({pos:[80,0,155],size:[26,72,24],color:E?223649:165063,name:"Tổ Hợp Chung Cư Star City Lê Văn Lương (27 Tầng)",id:"BLDG-STAR-CITY",floors:27,households:"420 căn hộ cao cấp",demandFlow:"42.0 m³/h",intakePressure:"3.25 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,100 m³",meterId:"AMR-STAR-CITY",dma:"DMA THNC-02",isCutOff:V,cutOffValveName:"Van V-LVL-03"}),Ae({pos:[130,0,155],size:[28,72,26],color:E?165063:223649,name:"Tòa Tháp The Golden Palm (27 Tầng)",id:"BLDG-GOLDEN-PALM",floors:27,households:"400 căn hộ",demandFlow:"40.0 m³/h",intakePressure:"3.24 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"1,000 m³",meterId:"AMR-GOLDEN-PALM",dma:"DMA THNC-02",isCutOff:V,cutOffValveName:"Van V-LVL-03"}),Ae({pos:[-60,0,155],size:[28,86,26],color:E?165063:223649,name:"Tòa Tháp HUD Tower A (32 Tầng)",id:"BLDG-HUD-TOWER-A",floors:32,households:"Trụ sở Tổng Công ty Đầu tư Phát triển Nhà HUD",demandFlow:"36.0 m³/h",intakePressure:"3.26 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,200 m³",meterId:"AMR-HUD-A",dma:"DMA THNC-02",isCutOff:V,cutOffValveName:"Van V-LVL-03"}),Ae({pos:[-100,0,155],size:[26,74,24],color:E?223649:165063,name:"Tòa Tháp HUD Tower B (27 Tầng)",id:"BLDG-HUD-TOWER-B",floors:27,households:"Văn phòng thương mại & tài chính",demandFlow:"30.0 m³/h",intakePressure:"3.26 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"900 m³",meterId:"AMR-HUD-B",dma:"DMA THNC-02",isCutOff:V,cutOffValveName:"Van V-LVL-03"}),Ae({pos:[180,0,155],size:[28,70,24],color:E?223649:165063,name:"Hội Sở MB Grand Tower (25 Tầng)",id:"BLDG-MB-TOWER",floors:25,households:"Hội sở Ngân hàng TMCP Quân Đội",demandFlow:"26.0 m³/h",intakePressure:"3.24 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"750 m³",meterId:"AMR-MB-TOWER",dma:"DMA THNC-02",isCutOff:V,cutOffValveName:"Van V-LVL-03"}),[-150,-110].forEach((W,J)=>{Ae({pos:[W,0,45],size:[32,65,34],color:E?14251782:11817737,name:`Mandarin Garden Block ${String.fromCharCode(65+J)} (29 Tầng)`,id:`BLDG-MANDARIN-${String.fromCharCode(65+J)}`,floors:29,households:"260 căn hộ cao cấp",demandFlow:"26.0 m³/h",intakePressure:"3.22 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"850 m³",meterId:`AMR-MANDARIN-${String.fromCharCode(65+J)}`,dma:"DMA THNC-03",isCutOff:Ve,cutOffValveName:"Van V-HMG-02"}),Ae({pos:[W,0,-5],size:[32,65,34],color:E?14251782:11817737,name:`Mandarin Garden Block ${String.fromCharCode(67+J)} (29 Tầng)`,id:`BLDG-MANDARIN-${String.fromCharCode(67+J)}`,floors:29,households:"260 căn hộ cao cấp",demandFlow:"26.0 m³/h",intakePressure:"3.22 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"850 m³",meterId:`AMR-MANDARIN-${String.fromCharCode(67+J)}`,dma:"DMA THNC-03",isCutOff:Ve,cutOffValveName:"Van V-HMG-02"})}),Ae({pos:[-135,0,-95],size:[52,24,40],color:E?1096065:366185,name:"Trường THPT Chuyên Hà Nội - Amsterdam",id:"BLDG-AMS",floors:5,households:"3,200 học sinh & giáo viên",demandFlow:"32.0 m³/h",intakePressure:"3.24 bar",connectionPipe:"DN50 HDPE",cisternCapacity:"500 m³",meterId:"AMR-AMS-SCHOOL",dma:"DMA THNC-03",isCutOff:Ve,cutOffValveName:"Van V-HMG-02"}),[160,200].forEach((W,J)=>{Ae({pos:[W,0,270],size:[32,74,28],color:E?165063:223649,name:`Tổ Hợp Hapulico Complex Block ${String.fromCharCode(65+J)} (31 Tầng)`,id:`BLDG-HAPULICO-${String.fromCharCode(65+J)}`,floors:31,households:"380 căn hộ",demandFlow:"38.0 m³/h",intakePressure:"3.18 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,100 m³",meterId:`AMR-HAPULICO-${String.fromCharCode(65+J)}`,dma:"DMA THNC-03",isCutOff:Ce,cutOffValveName:"Van V-HAP-07"}),Ae({pos:[W,0,310],size:[32,74,28],color:E?223649:165063,name:`Tổ Hợp Hapulico Complex Block ${String.fromCharCode(67+J)} (31 Tầng)`,id:`BLDG-HAPULICO-${String.fromCharCode(67+J)}`,floors:31,households:"380 căn hộ",demandFlow:"38.0 m³/h",intakePressure:"3.18 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,100 m³",meterId:`AMR-HAPULICO-${String.fromCharCode(67+J)}`,dma:"DMA THNC-03",isCutOff:Ce,cutOffValveName:"Van V-HAP-07"})}),Ae({pos:[110,0,270],size:[30,68,28],color:E?165063:223649,name:"Tổ Hợp Chung Cư Golden West (27 Tầng)",id:"BLDG-GOLDEN-WEST",floors:27,households:"350 căn hộ",demandFlow:"35.0 m³/h",intakePressure:"3.18 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"900 m³",meterId:"AMR-GOLDEN-WEST",dma:"DMA THNC-03",isCutOff:Ce,cutOffValveName:"Van V-HAP-07"}),Ae({pos:[250,0,340],size:[30,85,28],color:E?165063:223649,name:"Tổ Hợp Imperia Garden Tháp A (35 Tầng)",id:"BLDG-IMPERIA-A",floors:35,households:"450 căn hộ cao cấp",demandFlow:"45.0 m³/h",intakePressure:"3.16 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,300 m³",meterId:"AMR-IMPERIA-A",dma:"DMA THNC-03",isCutOff:Ce,cutOffValveName:"Van V-HAP-07"}),Ae({pos:[290,0,340],size:[30,85,28],color:E?223649:165063,name:"Tổ Hợp Imperia Garden Tháp B (35 Tầng)",id:"BLDG-IMPERIA-B",floors:35,households:"450 căn hộ cao cấp",demandFlow:"45.0 m³/h",intakePressure:"3.16 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,300 m³",meterId:"AMR-IMPERIA-B",dma:"DMA THNC-03",isCutOff:Ce,cutOffValveName:"Van V-HAP-07"});const L=new qn;for(let W=0;W<4;W++)for(let J=0;J<4;J++){const ye=65+W*16,ue=-30+J*18,Se=new wr(10,14,10),ke=new In({color:_t?15680580:E?6583435:9741240,roughness:.5}),se=new Ut(Se,ke);se.position.set(ye,7,ue),se.castShadow=!0,L.add(se)}L.userData={name:"Khu Biệt Thự & Liền Kề BT1 - BT6",id:"BLDG-VILLAS",type:"Khu Biệt Thự Thấp Tầng",data:{name:"Khu Biệt Thự & Liền Kề BT1 - BT6",id:"BLDG-VILLAS",type:"Khu Biệt Thự Thấp Tầng",status:_t?"⚠️ MẤT NƯỚC DO KHÓA VAN V-NTT-08":"Cấp nước ổn định",floors:"3.5 tầng",households:"150 căn biệt thự",flow:_t?"0.0 m³/h":"22.5 m³/h",pressure:_t?"0.00 bar":"3.18 bar",elevation:"+16.5m ASL",connectionPipe:"DN40 - DN50 HDPE",cisternCapacity:"15 m³ / biệt thự",meterId:"Cụm đồng hồ cơ sở Class C",dma:"DMA THNC-02",isCutOff:_t,cutOffValveName:"Van V-NTT-08"}},L.children.forEach(W=>{W.userData=L.userData,x.current.push(W)}),Jt.add(L),Ae({pos:[110,0,35],size:[36,18,30],color:E?1096065:366185,name:"Trường Liên Cấp Tiểu Học & THCS Ngôi Sao Hà Nội",id:"BLDG-NGOI-SAO",floors:5,households:"2,200 học sinh & CBGV",demandFlow:"24.0 m³/h",intakePressure:"3.20 bar",connectionPipe:"DN50 HDPE",cisternCapacity:"400 m³",meterId:"AMR-NGOI-SAO",dma:"DMA THNC-02",isCutOff:_t,cutOffValveName:"Van V-NTT-08"}),qe({center:[75,45],size:[110,60],rows:2,cols:8,heightRange:[15,21],zoneId:"HN-NTT",isCutOff:_t,cutOffValveName:"Van V-NTT-08",blockName:"Phố Hoàng Ngân - Nhà Phố Liền Kề"}),qe({center:[75,135],size:[110,60],rows:2,cols:8,heightRange:[16,24],zoneId:"HN-LVL",isCutOff:V,cutOffValveName:"Van V-LVL-03",blockName:"Phố Hoàng Ngân - Shophouse Lê Văn Lương"}),qe({center:[75,-45],size:[110,60],rows:2,cols:8,heightRange:[16,22],zoneId:"DQ-NTT",isCutOff:rt,cutOffValveName:"Van V-TDN-04",blockName:"Phố Đỗ Quang - Dãy Nhà Phố Ẩm Thực"}),qe({center:[75,-135],size:[110,60],rows:2,cols:8,heightRange:[16,24],zoneId:"DQ-TDH",isCutOff:rt,cutOffValveName:"Van V-TDN-04",blockName:"Phố Đỗ Quang - Shophouse Chuyên Gia"}),qe({center:[200,45],size:[95,60],rows:2,cols:6,heightRange:[15,22],zoneId:"NTD-HN",isCutOff:_t,cutOffValveName:"Van V-NTT-08",blockName:"Phố Nguyễn Thị Định - Dãy Nhà Phố Thương Mại"}),qe({center:[200,135],size:[95,60],rows:2,cols:6,heightRange:[16,24],zoneId:"NTD-LVL",isCutOff:V,cutOffValveName:"Van V-LVL-03",blockName:"Phố Nguyễn Thị Định - Shophouse Dịch Vụ"}),qe({center:[120,215],size:[170,40],rows:2,cols:10,heightRange:[14,20],zoneId:"QN-01",isCutOff:_t,cutOffValveName:"Van V-NTT-08",blockName:"Khu Dân Cư Phố Quan Nhân"}),qe({center:[120,265],size:[170,40],rows:2,cols:10,heightRange:[14,20],zoneId:"NH-01",isCutOff:Ce,cutOffValveName:"Van V-HAP-07",blockName:"Khu Dân Cư Phố Nhân Hòa & Chính Kinh"}),qe({center:[230,310],size:[110,50],rows:2,cols:8,heightRange:[15,22],zoneId:"VTP-NNKT",isCutOff:Ce,cutOffValveName:"Van V-HAP-07",blockName:"Phố Vũ Trọng Phụng - Shophouse Chợ Thuốc"}),qe({center:[290,390],size:[110,55],rows:2,cols:8,heightRange:[16,24],zoneId:"NT-NHT",isCutOff:Ce,cutOffValveName:"Van V-HAP-07",blockName:"Phố Nguyễn Tuân - Dãy Nhà Liền Kề"}),qe({center:[-80,50],size:[100,55],rows:2,cols:7,heightRange:[15,22],zoneId:"34T-IN",isCutOff:he,cutOffValveName:"Van V-HDT-01",blockName:"Khu Nhà Phố Nội Khu Hoàng Đạo Thúy"}),qe({center:[-80,-45],size:[100,55],rows:2,cols:7,heightRange:[15,22],zoneId:"24T-IN",isCutOff:he,cutOffValveName:"Van V-HDT-01",blockName:"Khu Liền Kề Cụm 24T Hoàng Đạo Thúy"}),qe({center:[-240,250],size:[130,80],rows:3,cols:8,heightRange:[15,22],zoneId:"HNC-KDT",isCutOff:ot,cutOffValveName:"Van V-DCP-05",blockName:"Khu Đô Thị Ven Hồ Điều Hòa Nhân Chính"}),qe({center:[-320,340],size:[130,70],rows:2,cols:8,heightRange:[14,20],zoneId:"KDT-S",isCutOff:ot,cutOffValveName:"Van V-DCP-05",blockName:"Khu Dân Cư Nam Khuất Duy Tiến"}),qe({center:[-300,-380],size:[160,65],rows:2,cols:10,heightRange:[15,22],zoneId:"MTH-01",isCutOff:ft,cutOffValveName:"Van V-KNG-06",blockName:"Khu Đô Thị Mễ Trì Hạ - Sudico"}),qe({center:[-480,-450],size:[130,55],rows:2,cols:8,heightRange:[14,20],zoneId:"MT-W",isCutOff:ft,cutOffValveName:"Van V-KNG-06",blockName:"Khu Liền Kề Phía Tây Mễ Trì"}),qe({center:[240,-260],size:[140,65],rows:2,cols:9,heightRange:[15,22],zoneId:"TH-TY1",isCutOff:rt,cutOffValveName:"Van V-TDN-04",blockName:"Khu Đô Thị Trung Yên - Mạc Thái Tổ"}),qe({center:[240,-330],size:[140,55],rows:2,cols:9,heightRange:[15,22],zoneId:"TH-TY2",isCutOff:rt,cutOffValveName:"Van V-TDN-04",blockName:"Khu Phân Lô Phố Vũ Phạm Hàm"}),Ae({pos:[-660,0,150],size:[64,34,64],color:E?165063:223649,name:"Bảo Tàng Hà Nội (Hanoi Museum - Kim tự tháp ngược)",id:"BLDG-BTHN",floors:4,households:"Công trình văn hóa trọng điểm quốc gia (54.000m²)",demandFlow:"45.0 m³/h",intakePressure:"3.18 bar",connectionPipe:"DN100 Gang dẻo",cisternCapacity:"1,200 m³",meterId:"AMR-BTHN-01",dma:"DMA Hội Nghị Quốc Gia"}),Ae({pos:[-840,0,180],size:[85,32,55],color:E?165063:959977,name:"Khách Sạn 5 Sao Quốc Tế JW Marriott Hanoi",id:"BLDG-JWM",floors:9,households:"450 phòng khách sạn 5 sao cao cấp & Trung tâm hội nghị",demandFlow:"75.0 m³/h",intakePressure:"3.15 bar",connectionPipe:"DN125 Gang dẻo",cisternCapacity:"2,500 m³",meterId:"AMR-JWM-01",dma:"DMA Mễ Trì"}),Ae({pos:[-620,0,260],size:[55,20,55],color:165063,name:"Cung Triển Lãm Kiến Trúc Quy Hoạch Quốc Gia (NECC)",id:"BLDG-NECC",floors:3,households:"Trung tâm triển lãm quy hoạch & kiến trúc Thủ đô",demandFlow:"30.0 m³/h",intakePressure:"3.22 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"800 m³",meterId:"AMR-NECC-01",dma:"DMA Hội Nghị Quốc Gia"}),Ae({pos:[-520,0,-430],size:[36,115,36],color:E?165063:223649,name:"Tháp Văn Phòng Handico Tower (33 Tầng - Phạm Hùng)",id:"BLDG-HANDICO",floors:33,households:"40.000m² văn phòng Hạng A",demandFlow:"48.0 m³/h",intakePressure:"3.20 bar",connectionPipe:"DN100 Gang dẻo",cisternCapacity:"1,600 m³",meterId:"AMR-HANDICO-01",dma:"DMA Keangnam"}),Ae({pos:[-520,0,-490],size:[32,95,32],color:E?165063:223649,name:"Tháp CEO Tower (27 Tầng - Trụ sở Tập đoàn CEO)",id:"BLDG-CEO",floors:27,households:"28.000m² sàn văn phòng",demandFlow:"38.0 m³/h",intakePressure:"3.25 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,200 m³",meterId:"AMR-CEO-01",dma:"DMA Keangnam"}),[-760,-820,-880].forEach((W,J)=>{Ae({pos:[W,0,-420],size:[42,90,42],color:E?165063:223649,name:`Tổ Hợp Căn Hộ Cao Cấp The Manor Mỹ Đình - Tháp ${String.fromCharCode(65+J)} (26T)`,id:`BLDG-MANOR-${J+1}`,floors:26,households:"420 căn hộ cao cấp & Khu phố thương mại Paris",demandFlow:"42.0 m³/h",intakePressure:"3.12 bar",connectionPipe:"DN100 HDPE",cisternCapacity:"1,400 m³",meterId:`AMR-MANOR-0${J+1}`,dma:"DMA Mễ Trì"})}),Ae({pos:[480,0,-220],size:[70,32,50],color:165063,name:"Trường Đại Học Lao Động - Xã Hội (Giảng Đường A & B)",id:"BLDG-DHLDXH",floors:8,households:"Khuôn viên đào tạo 15.000 sinh viên & Cán bộ giảng viên",demandFlow:"60.0 m³/h",intakePressure:"3.22 bar",connectionPipe:"DN100 Gang dẻo",cisternCapacity:"1,800 m³",meterId:"AMR-DHLDXH-01",dma:"DMA Trung Hòa"}),Ae({pos:[640,0,-240],size:[60,30,45],color:165063,name:"Trường Đại Học Phòng Cháy Chữa Cháy (Bộ Công An)",id:"BLDG-DHPCCC",floors:7,households:"Khu huấn luyện & Đào tạo chuyên gia PCCC",demandFlow:"40.0 m³/h",intakePressure:"3.30 bar",connectionPipe:"DN100 Gang dẻo",cisternCapacity:"1,500 m³",meterId:"AMR-DHPCCC-01",dma:"DMA Trung Hòa"}),Ae({pos:[680,0,-420],size:[40,145,40],color:E?165063:223649,name:"Tổ Hợp Chung Cư & Khách Sạn Golden Park Tower (45 Tầng)",id:"BLDG-GOLDEN-PARK",floors:45,households:"410 căn hộ cao cấp & 240 phòng khách sạn 4 sao",demandFlow:"55.0 m³/h",intakePressure:"3.10 bar",connectionPipe:"DN125 Gang dẻo",cisternCapacity:"2,000 m³",meterId:"AMR-GP-01",dma:"DMA Yên Hòa"}),[420,480].forEach((W,J)=>{Ae({pos:[W,0,-360],size:[38,98,38],color:E?165063:223649,name:`Tổ Hợp Home City Trung Kính - Tháp V${J+1} (30 Tầng)`,id:`BLDG-HOME-CITY-${J+1}`,floors:30,households:"600 căn hộ dân cư & Trung tâm thương mại",demandFlow:"46.0 m³/h",intakePressure:"3.18 bar",connectionPipe:"DN100 HDPE",cisternCapacity:"1,600 m³",meterId:`AMR-HC-0${J+1}`,dma:"DMA Trung Kính"})}),[720,780].forEach((W,J)=>{[480,560].forEach((ye,ue)=>{Ae({pos:[W,0,ye],size:[44,118,44],color:E?165063:223649,name:`Đại Đô Thị Vinhomes Royal City - Tháp R${J*2+ue+1} (35T)`,id:`BLDG-ROYAL-${J*2+ue+1}`,floors:35,households:"1.200 căn hộ cao cấp & TTTM Vincom Mega Mall",demandFlow:"95.0 m³/h",intakePressure:"3.08 bar",connectionPipe:"DN150 Gang dẻo",cisternCapacity:"4,500 m³",meterId:`AMR-ROYAL-0${J*2+ue+1}`,dma:"DMA Thượng Đình"})})}),Ae({pos:[540,0,620],size:[42,92,42],color:E?165063:223649,name:"Tổ Hợp Chung Cư Golden Land Building (27 Tầng - Nguyễn Trãi)",id:"BLDG-GOLDEN-LAND",floors:27,households:"720 căn hộ & Khu thương mại dịch vụ",demandFlow:"52.0 m³/h",intakePressure:"3.14 bar",connectionPipe:"DN100 Gang dẻo",cisternCapacity:"1,800 m³",meterId:"AMR-GL-01",dma:"DMA Thanh Xuân"});const b=new qn;G.add(b);const q=(W,J,ye,ue,Se,ke,se,Pe)=>{var Et;if(se===1&&!t.pipesPrimary||se===2&&!t.pipesSecondary||se===3&&!t.pipesTertiary||se===4&&!t.pipesService||!t.pipes)return null;const Ge=se===1?165063:se===2?16347926:se===3?15381256:(Et=Pe==null?void 0:Pe.status)!=null&&Et.includes("CẮT")?6583435:15381256,we=ke?Ge:4674921,ct=new Fg(W),vt=new af(ct,64,J,14,!1),Rt=new In({color:we,roughness:.2,metalness:.2,emissive:ke?we:0,emissiveIntensity:ke?E?.65:.45:0}),Zt=new Ut(vt,Rt);if(Zt.castShadow=!1,Zt.receiveShadow=!1,Zt.userData={name:ue,id:Se,type:"Pipe",data:Pe},b.add(Zt),x.current.push(Zt),ke){const zn=se===1?20:se===2?12:se===3?8:4,Gt=new xa(J*1.35,12,12),rn=new In({color:16777215,emissive:se===1?61695:se===2?16486972:16707722,emissiveIntensity:1.5,roughness:.1});for(let Wt=0;Wt<zn;Wt++){const Un=new Ut(Gt,rn);G.add(Un),y.current.push({mesh:Un,curve:ct,t:Wt/zn,speed:se===1?.0022:se===2?.0017:.0012})}}return Zt};q([new C(-1200,1.4,40),new C(-700,1.4,40),new C(-440,1.4,40)],1.6,E?165063:223649,"Trục Truyền Dẫn Cấp 1 D800 Đại Lộ Thăng Long","PIPE-TRUNK-DLTL-D800",!0,1,{name:"Trục Truyền Dẫn Cấp 1 D800 Đại Lộ Thăng Long",id:"PIPE-TRUNK-DLTL-D800",tier:"Cấp 1 (Transmission D800)",status:"Đang truyền dẫn công suất lớn (NMN Sông Đà)",diameter:"DN800 Gang Dẻo K9",flow:"4,850.0 m³/h",pressure:"3.85 bar",dma:"Trục Truyền Dẫn Liên Vùng"}),q([new C(-440,1.4,-1100),new C(-440,1.4,-400),new C(-440,1.4,40),new C(-440,1.4,600),new C(-440,1.4,1100)],1.6,E?165063:223649,"Trục Truyền Dẫn Cấp 1 D800 Phạm Hùng - Vành Đai 3","PIPE-TRUNK-PH-D800",!0,1,{name:"Trục Truyền Dẫn Cấp 1 D800 Phạm Hùng - Vành Đai 3",id:"PIPE-TRUNK-PH-D800",tier:"Cấp 1 (Transmission D800)",status:"Vận hành tối ưu",diameter:"DN800 Gang Dẻo K9",flow:"4,200.0 m³/h",pressure:"3.75 bar",dma:"Trục Truyền Dẫn Liên Vùng"}),q([new C(-440,1.4,180),new C(-160,1.4,180),new C(0,1.4,180),new C(340,1.4,180),new C(650,1.4,180)],1.4,E?165063:223649,"Trục Truyền Dẫn Cấp 1 D600 Lê Văn Lương","PIPE-TRUNK-LVL-D600",!0,1,{name:"Trục Truyền Dẫn Cấp 1 D600 Lê Văn Lương",id:"PIPE-TRUNK-LVL-D600",tier:"Cấp 1 (Transmission D600)",status:"Cấp nguồn chính DMA THNC-02 & THNC-03",diameter:"DN600 Gang Dẻo K9",flow:"3,250.0 m³/h",pressure:"3.45 bar",dma:"DMA THNC-02"}),q([new C(-440,1.4,-180),new C(-160,1.4,-180),new C(0,1.4,-180),new C(340,1.4,-180),new C(650,1.4,-180)],1.4,E?165063:223649,"Trục Truyền Dẫn Cấp 1 D600 Trần Duy Hưng","PIPE-TRUNK-TDH-D600",!0,1,{name:"Trục Truyền Dẫn Cấp 1 D600 Trần Duy Hưng",id:"PIPE-TRUNK-TDH-D600",tier:"Cấp 1 (Transmission D600)",status:"Cấp nguồn chính DMA THNC-01",diameter:"DN600 Gang Dẻo K9",flow:"3,400.0 m³/h",pressure:"3.50 bar",dma:"DMA THNC-01"}),q([new C(0,1.4,-180),new C(0,1.4,0),new C(0,1.4,180),new C(0,1.4,350)],1.4,E?165063:223649,"Trục Truyền Dẫn Cấp 1 D600 Hoàng Đạo Thúy","PIPE-TRUNK-HDT-D600",!0,1,{name:"Trục Truyền Dẫn Cấp 1 D600 Hoàng Đạo Thúy",id:"PIPE-TRUNK-HDT-D600",tier:"Cấp 1 (Transmission D600)",status:"Trục xương sống KĐT Trung Hòa - Nhân Chính",diameter:"DN600 Gang Dẻo K9",flow:"2,900.0 m³/h",pressure:"3.38 bar",dma:"DMA THNC-02"}),q([new C(340,1.4,-450),new C(340,1.4,-180),new C(340,1.4,180),new C(340,1.4,450)],1.4,E?165063:223649,"Trục Truyền Dẫn Cấp 1 D600 Trung Kính","PIPE-TRUNK-TK-D600",!0,1,{name:"Trục Truyền Dẫn Cấp 1 D600 Trung Kính",id:"PIPE-TRUNK-TK-D600",tier:"Cấp 1 (Transmission D600)",status:"Cấp nước phía Đông quận",diameter:"DN600 Gang Dẻo",flow:"2,400.0 m³/h",pressure:"3.35 bar",dma:"DMA Phía Đông"}),q([new C(-160,1.2,0),new C(-75,1.2,0),new C(0,1.2,0),new C(75,1.2,0),new C(140,1.2,0),new C(340,1.2,0)],1.1,E?959977:165063,"Tuyến Phân Phối Cấp 2 D300 Nguyễn Thị Thập","PIPE-DIST-NTT-D300",!_t,2,{name:"Tuyến Phân Phối Cấp 2 D300 Nguyễn Thị Thập",id:"PIPE-DIST-NTT-D300",tier:"Cấp 2 (Distribution D300)",status:_t?"ĐÃ CẮT NƯỚC QUA VAN V-NTT-08":"Bình thường",diameter:"DN300 HDPE PE100",flow:_t?"0.0 m³/h":"880 m³/h",pressure:_t?"0.00 bar":"3.25 bar",dma:"DMA THNC-02"}),q([new C(-160,1.2,350),new C(-160,1.2,180),new C(-160,1.2,0),new C(-160,1.2,-95),new C(-160,1.2,-180)],1,E?959977:165063,"Tuyến Phân Phối Cấp 2 D250 Hoàng Minh Giám","PIPE-DIST-HMG-D250",!Ve,2,{name:"Tuyến Phân Phối Cấp 2 D250 Hoàng Minh Giám",id:"PIPE-DIST-HMG-D250",tier:"Cấp 2 (Distribution D250)",status:Ve?"ĐÃ CẮT NƯỚC QUA VAN V-HMG-02":"Bình thường",diameter:"DN250 HDPE PE100",flow:Ve?"0.0 m³/h":"750 m³/h",pressure:Ve?"0.00 bar":"3.24 bar",dma:"DMA THNC-03"}),q([new C(140,1.2,-180),new C(140,1.2,-90),new C(140,1.2,0),new C(140,1.2,180)],1,E?959977:165063,"Tuyến Phân Phối Cấp 2 D250 Nguyễn Thị Định","PIPE-DIST-NTD-D250",!rt,2,{name:"Tuyến Phân Phối Cấp 2 D250 Nguyễn Thị Định",id:"PIPE-DIST-NTD-D250",tier:"Cấp 2 (Distribution D250)",status:rt?"ĐÃ CẮT NƯỚC QUA VAN V-TDN-04":"Bình thường",diameter:"DN250 HDPE",flow:rt?"0.0 m³/h":"620 m³/h",pressure:rt?"0.00 bar":"3.22 bar",dma:"DMA THNC-01"}),q([new C(-160,1.2,350),new C(0,1.2,350),new C(160,1.2,350),new C(240,1.2,350),new C(340,1.2,350)],1.1,E?959977:165063,"Tuyến Phân Phối Cấp 2 D300 Ngụy Như Kon Tum","PIPE-DIST-NNKT-D300",!Ce,2,{name:"Tuyến Phân Phối Cấp 2 D300 Ngụy Như Kon Tum",id:"PIPE-DIST-NNKT-D300",tier:"Cấp 2 (Distribution D300)",status:Ce?"ĐÃ CẮT NƯỚC QUA VAN V-HAP-07":"Bình thường",diameter:"DN300 HDPE",flow:Ce?"0.0 m³/h":"820 m³/h",pressure:Ce?"0.00 bar":"3.18 bar",dma:"DMA THNC-03"}),q([new C(240,1.2,180),new C(240,1.2,270),new C(240,1.2,350)],1,E?959977:165063,"Tuyến Phân Phối Cấp 2 D250 Vũ Trọng Phụng","PIPE-DIST-VTP-D250",!Ce,2,{name:"Tuyến Phân Phối Cấp 2 D250 Vũ Trọng Phụng",id:"PIPE-DIST-VTP-D250",tier:"Cấp 2 (Distribution D250)",status:Ce?"ĐÃ CẮT NƯỚC QUA VAN V-HAP-07":"Bình thường",diameter:"DN250 HDPE",flow:Ce?"0.0 m³/h":"540 m³/h",pressure:Ce?"0.00 bar":"3.16 bar",dma:"DMA THNC-03"}),q([new C(-440,1.2,-180),new C(-280,1.2,-180),new C(-190,1.2,-180),new C(-160,1.2,-180)],1.1,E?959977:165063,"Tuyến Phân Phối Cấp 2 D300 Ven Vinhomes D'Capitale","PIPE-DIST-DCP-D300",!ot,2,{name:"Tuyến Phân Phối Cấp 2 D300 Ven Vinhomes D'Capitale",id:"PIPE-DIST-DCP-D300",tier:"Cấp 2 (Distribution D300)",status:ot?"ĐÃ CẮT NƯỚC QUA VAN V-DCP-05":"Bình thường",diameter:"DN300 HDPE",flow:ot?"0.0 m³/h":"960 m³/h",pressure:ot?"0.00 bar":"3.30 bar",dma:"DMA THNC-01"}),q([new C(-440,1.2,-320),new C(-540,1.2,-320),new C(-540,1.2,-460),new C(-440,1.2,-460)],1.1,E?959977:165063,"Tuyến Phân Phối Cấp 2 D300 Mạch Vòng Keangnam & Mễ Trì","PIPE-DIST-KNG-D300",!ft,2,{name:"Tuyến Phân Phối Cấp 2 D300 Keangnam & Mễ Trì",id:"PIPE-DIST-KNG-D300",tier:"Cấp 2 (Distribution D300)",status:ft?"ĐÃ CẮT NƯỚC QUA VAN V-KNG-06":"Bình thường",diameter:"DN300 HDPE",flow:ft?"0.0 m³/h":"1,120 m³/h",pressure:ft?"0.00 bar":"3.38 bar",dma:"DMA Phía Tây"}),q([new C(0,1,90),new C(75,1,90),new C(140,1,90),new C(200,1,90)],.85,E?1357990:889992,"Tuyến Nhánh Cấp 3 D150 Phố Hoàng Ngân","PIPE-STREET-HN-D150",!_t,3,{name:"Tuyến Nhánh Cấp 3 D150 Phố Hoàng Ngân",id:"PIPE-STREET-HN-D150",tier:"Cấp 3 (Reticulation D150)",status:_t?"ĐÃ CẮT NƯỚC":"Ổn định",diameter:"DN150",flow:_t?"0.0 m³/h":"180 m³/h",dma:"DMA THNC-02"}),q([new C(0,1,-90),new C(75,1,-90),new C(140,1,-90),new C(200,1,-90)],.85,E?1357990:889992,"Tuyến Nhánh Cấp 3 D150 Phố Đỗ Quang","PIPE-STREET-DQ-D150",!rt,3,{name:"Tuyến Nhánh Cấp 3 D150 Phố Đỗ Quang",id:"PIPE-STREET-DQ-D150",tier:"Cấp 3 (Reticulation D150)",status:rt?"ĐÃ CẮT NƯỚC":"Ổn định",diameter:"DN150",flow:rt?"0.0 m³/h":"175 m³/h",dma:"DMA THNC-01"}),q([new C(0,1,240),new C(120,1,240),new C(240,1,240)],.8,E?1357990:889992,"Tuyến Nhánh Cấp 3 D125 Phố Quan Nhân","PIPE-STREET-QN-D125",!_t,3,{name:"Tuyến Nhánh Cấp 3 D125 Phố Quan Nhân",id:"PIPE-STREET-QN-D125",tier:"Cấp 3 (Reticulation D125)",status:_t?"ĐÃ CẮT NƯỚC":"Ổn định",diameter:"DN125",flow:_t?"0.0 m³/h":"140 m³/h",dma:"DMA THNC-02"}),q([new C(0,1,290),new C(120,1,290),new C(240,1,290)],.8,E?1357990:889992,"Tuyến Nhánh Cấp 3 D125 Phố Nhân Hòa","PIPE-STREET-NH-D125",!Ce,3,{name:"Tuyến Nhánh Cấp 3 D125 Phố Nhân Hòa",id:"PIPE-STREET-NH-D125",tier:"Cấp 3 (Reticulation D125)",status:Ce?"ĐÃ CẮT NƯỚC":"Ổn định",diameter:"DN125",flow:Ce?"0.0 m³/h":"150 m³/h",dma:"DMA THNC-03"}),q([new C(0,1,20),new C(25,1,20),new C(42,1,75),new C(42,1,155)],.8,E?1357990:889992,"Tuyến Nhánh Cấp 3 D150 Ngõ Nội Khu 34T & 17T","PIPE-STREET-17T-D150",!he,3,{name:"Tuyến Nhánh Cấp 3 D150 Ngõ Nội Khu 34T & 17T",id:"PIPE-STREET-17T-D150",tier:"Cấp 3 (Reticulation D150)",status:he?"ĐÃ CẮT NƯỚC":"Ổn định",diameter:"DN150",flow:he?"0.0 m³/h":"195 m³/h",dma:"DMA THNC-02"}),q([new C(0,1,20),new C(-35,1,20),new C(-35,1,-30),new C(-75,1,0)],.8,E?1357990:889992,"Tuyến Nhánh Cấp 3 D125 Ngõ Nội Khu Cụm 24T","PIPE-STREET-24T-D125",!he,3,{name:"Tuyến Nhánh Cấp 3 D125 Ngõ Nội Khu Cụm 24T",id:"PIPE-STREET-24T-D125",tier:"Cấp 3 (Reticulation D125)",status:he?"ĐÃ CẮT NƯỚC":"Ổn định",diameter:"DN125",flow:he?"0.0 m³/h":"160 m³/h",dma:"DMA THNC-02"}),q([new C(0,1,-85),new C(40,1,-85),new C(80,1,-85),new C(60,1,-140)],.8,E?1357990:889992,"Tuyến Nhánh Cấp 3 D150 Nội Khu Cụm N04/N05","PIPE-STREET-N04N05-D150",!rt,3,{name:"Tuyến Nhánh Cấp 3 D150 Nội Khu N04/N05",id:"PIPE-STREET-N04N05-D150",tier:"Cấp 3 (Reticulation D150)",status:rt?"ĐÃ CẮT NƯỚC":"Ổn định",diameter:"DN150",flow:rt?"0.0 m³/h":"210 m³/h",dma:"DMA THNC-01"});const ve=(W,J,ye,ue,Se,ke)=>{const se=new C((W.x+J.x)/2,.8,(W.z+J.z)/2);q([W,se,J],.55,ke?6583435:E?16498468:14251782,`Ống Đấu Nối Cấp 4 ${ye} -> ${ue}`,`PIPE-SRV-${Se}`,!ke,4,{name:`Ống Đấu Nối Cấp 4 ${ye} -> ${ue}`,id:`PIPE-SRV-${Se}`,tier:"Cấp 4 (Service Connection)",status:ke?"ĐÃ CẮT DÒNG (KHÓA VAN)":"Cấp nước trực tiếp bể ngầm",diameter:ye,pressure:ke?"0.00 bar":"3.25 bar",flow:ke?"0.0 m³/h":"Theo định mức AMR"})};ve(new C(0,1.1,20),new C(25,1.1,20),"DN80","Tháp 34T","34T",he),ve(new C(0,1.1,30),new C(-35,1.1,30),"DN65","Chung cư 24T1","24T1",he),ve(new C(0,1.1,-30),new C(-35,1.1,-30),"DN65","Chung cư 24T2","24T2",he),ve(new C(42,1.1,75),new C(42,1.1,75),"DN50","Chung cư 17T1","17T1",he),ve(new C(0,1.1,155),new C(35,1.1,155),"DN80","Diamond Flower","DIAMOND",V),ve(new C(50,1.1,155),new C(80,1.1,155),"DN80","Star City","STAR-CITY",V),ve(new C(100,1.1,155),new C(130,1.1,155),"DN65","The Golden Palm","GOLDEN-PALM",V),ve(new C(0,1.1,155),new C(-60,1.1,155),"DN80","HUD Tower A","HUD-A",V),ve(new C(-60,1.1,155),new C(-100,1.1,155),"DN65","HUD Tower B","HUD-B",V),ve(new C(140,1.1,155),new C(180,1.1,155),"DN65","MB Grand Tower","MB-TOWER",V),ve(new C(0,1.1,-180),new C(65,1.1,-215),"DN80","Charmvit Tower","CHARMVIT",rt),ve(new C(40,1.1,-85),new C(40,1.1,-85),"DN80","N05-34T1","N05-1",rt),ve(new C(80,1.1,-85),new C(80,1.1,-85),"DN80","N05-34T2","N05-2",rt),ve(new C(-160,1.1,45),new C(-150,1.1,45),"DN65","Mandarin Block A","MANDARIN-A",Ve),ve(new C(-160,1.1,-5),new C(-150,1.1,-5),"DN65","Mandarin Block C","MANDARIN-C",Ve),ve(new C(-160,1.1,-95),new C(-135,1.1,-95),"DN50","THPT Amsterdam","AMS",Ve),ve(new C(-440,1.1,-320),new C(-540,1.1,-320),"DN150","Keangnam 72","KEANGNAM-72",ft),ve(new C(-540,1.1,-320),new C(-590,1.1,-320),"DN80","Keangnam Tháp A","KEANGNAM-A",ft),ve(new C(-540,1.1,-320),new C(-490,1.1,-320),"DN80","Keangnam Tháp B","KEANGNAM-B",ft),ve(new C(-440,1.1,-220),new C(-460,1.1,-220),"DN65","Handico Tower","HANDICO",ft),ve(new C(-440,1.1,-170),new C(-460,1.1,-170),"DN65","CEO Tower","CEO",ft),ve(new C(-440,1.1,-110),new C(-440,1.1,-110),"DN65","Bảo Tàng Hà Nội","MUSEUM",ft),ve(new C(-440,1.1,140),new C(-440,1.1,140),"DN100","Hội Nghị Quốc Gia NCC","NCC",!1),ve(new C(-280,1.1,-180),new C(-280,1.1,-180),"DN80","Big C Thăng Long","BIGC",ot),ve(new C(-230,1.1,-220),new C(-230,1.1,-220),"DN80","D'Capitale C1","DCP-C1",ot),ve(new C(-190,1.1,-220),new C(-190,1.1,-220),"DN80","D'Capitale C2","DCP-C2",ot),ve(new C(-440,1.1,40),new C(-360,1.1,40),"DN80","Thăng Long Number One A","TL-NO1-A",ot),ve(new C(-360,1.1,40),new C(-360,1.1,85),"DN80","Thăng Long Number One B","TL-NO1-B",ot),ve(new C(240,1.1,270),new C(200,1.1,270),"DN80","Hapulico Complex A","HAP-A",Ce),ve(new C(240,1.1,270),new C(110,1.1,270),"DN65","Golden West","GOLDEN-WEST",Ce),ve(new C(240,1.1,340),new C(250,1.1,340),"DN80","Imperia Garden A","IMP-A",Ce),ve(new C(240,1.1,340),new C(290,1.1,340),"DN80","Imperia Garden B","IMP-B",Ce),ve(new C(75,1.1,0),new C(75,1.1,-10),"DN50","Biệt Thự BT1-BT6","VILLAS",_t),ve(new C(75,1.1,35),new C(110,1.1,35),"DN50","Trường Ngôi Sao Hà Nội","NGOI-SAO",_t),q([new C(-1240,1.4,40),new C(-850,1.4,40),new C(-700,1.4,40)],1.6,165063,"Trục Truyền Dẫn Cấp 1 D800 Nguồn NMN Sông Đà Phía Tây","PIPE-TRUNK-WEST-D800",!0,1,{name:"Trục Truyền Dẫn Cấp 1 D800 Nguồn NMN Sông Đà",tier:"Cấp 1 (D800)",flow:"5,200 m³/h",status:"Vận hành tối ưu"}),q([new C(-440,1.4,-1200),new C(-440,1.4,-700),new C(-440,1.4,-400)],1.6,165063,"Trục Cấp 1 D800 Vành Đai 3 Phía Bắc (Cầu Giấy)","PIPE-TRUNK-VD3-NORTH",!0,1,{name:"Trục Cấp 1 D800 Vành Đai 3 Phía Bắc",tier:"Cấp 1 (D800)",flow:"4,600 m³/h",status:"Ổn định"}),q([new C(-440,1.4,600),new C(-440,1.4,950),new C(-440,1.4,1200)],1.6,165063,"Trục Cấp 1 D800 Khuất Duy Tiến Phía Nam (Thanh Xuân)","PIPE-TRUNK-VD3-SOUTH",!0,1,{name:"Trục Cấp 1 D800 Khuất Duy Tiến Phía Nam",tier:"Cấp 1 (D800)",flow:"4,100 m³/h",status:"Ổn định"}),q([new C(-440,1.2,140),new C(-660,1.2,140),new C(-840,1.2,180),new C(-840,1.2,40)],1.1,16347926,"Tuyến Phân Phối Cấp 2 D300 Mạch Vòng JW Marriott & Bảo Tàng HN","PIPE-DIST-JWM-D300",!0,2,{name:"Tuyến Phân Phối Cấp 2 D300 Mạch Vòng JW Marriott",tier:"Cấp 2 (D300)",flow:"1,250 m³/h",status:"Ổn định"}),q([new C(-440,1.2,-420),new C(-760,1.2,-420),new C(-880,1.2,-420)],1.1,16347926,"Tuyến Phân Phối Cấp 2 D300 The Manor Mỹ Đình","PIPE-DIST-MANOR-D300",!0,2,{name:"Tuyến Phân Phối Cấp 2 D300 The Manor Mỹ Đình",tier:"Cấp 2 (D300)",flow:"1,100 m³/h",status:"Ổn định"}),q([new C(340,1.2,-220),new C(480,1.2,-220),new C(680,1.2,-240),new C(680,1.2,-420)],1.1,16347926,"Tuyến Phân Phối Cấp 2 D300 ĐH LĐ-XH & Golden Park Tower","PIPE-DIST-NE-D300",!0,2,{name:"Tuyến Phân Phối Cấp 2 D300 ĐH LĐ-XH & Golden Park",tier:"Cấp 2 (D300)",flow:"1,380 m³/h",status:"Ổn định"}),q([new C(340,1.2,350),new C(540,1.2,520),new C(760,1.2,520),new C(760,1.2,620)],1.1,16347926,"Tuyến Phân Phối Cấp 2 D300 Mạch Vòng Royal City & Nguyễn Trãi","PIPE-DIST-ROYAL-D300",!0,2,{name:"Tuyến Phân Phối Cấp 2 D300 Royal City",tier:"Cấp 2 (D300)",flow:"2,150 m³/h",status:"Ổn định"}),q([new C(-660,1,140),new C(-660,1,150)],.65,15381256,"Nhánh Cấp 3 D100 -> Bảo Tàng Hà Nội","PIPE-SRV-BTHN",!0,3,{name:"Nhánh Cấp 3 D100 -> Bảo Tàng Hà Nội",tier:"Cấp 3 (D100)",status:"Ổn định"}),q([new C(-840,1,140),new C(-840,1,180)],.65,15381256,"Nhánh Cấp 3 D125 -> Khách Sạn JW Marriott","PIPE-SRV-JWM",!0,3,{name:"Nhánh Cấp 3 D125 -> Khách Sạn JW Marriott",tier:"Cấp 3 (D125)",status:"Ổn định"}),q([new C(-520,1,-420),new C(-520,1,-430)],.65,15381256,"Nhánh Cấp 3 D100 -> Tháp Handico Tower","PIPE-SRV-HANDICO",!0,3,{name:"Nhánh Cấp 3 D100 -> Tháp Handico Tower",tier:"Cấp 3 (D100)",status:"Ổn định"}),q([new C(480,1,-200),new C(480,1,-220)],.65,15381256,"Nhánh Cấp 3 D100 -> Trường ĐH Lao Động - Xã Hội","PIPE-SRV-DHLDXH",!0,3,{name:"Nhánh Cấp 3 D100 -> ĐH Lao Động Xã Hội",tier:"Cấp 3 (D100)",status:"Ổn định"}),q([new C(760,1,500),new C(760,1,520)],.65,15381256,"Nhánh Cấp 3 D150 -> Đại Đô Thị Royal City","PIPE-SRV-ROYAL",!0,3,{name:"Nhánh Cấp 3 D150 -> Đại Đô Thị Royal City",tier:"Cấp 3 (D150)",status:"Ổn định"});const Me=new qn;G.add(Me);const De=(W,J,ye,ue,Se,ke,se)=>{if(!t.valves)return null;const Pe=new qn;Pe.position.set(W[0],0,W[2]);const Ge=new Jr(2.4,2.7,.6,16),we=new In({color:ue?4524554:413243,roughness:.6}),ct=new Ut(Ge,we);ct.position.y=.3,Pe.add(ct);const vt=new Ac(2.6,3.6,24),Rt=new va({color:ue?15680580:1096065,side:Gi}),Zt=new Ut(vt,Rt);Zt.rotation.x=-Math.PI/2,Zt.position.y=.15,Pe.add(Zt);const Et=new wr(3.6,3.6,3.6),zn=new In({color:ue?14427686:1483594,metalness:.7,roughness:.25,emissive:ue?10033947:417606,emissiveIntensity:.35}),Gt=new Ut(Et,zn);Gt.position.y=2.4,Gt.castShadow=!0,Pe.add(Gt);const rn=new Jr(.5,.5,2.5,12),Wt=new In({color:9741240,metalness:.8}),Un=new Ut(rn,Wt);Un.position.y=4.5,Pe.add(Un);const Si=new sf(2,.45,12,24),di=new In({color:ue?16096779:3718648,metalness:.75,roughness:.2}),On=new Ut(Si,di);On.rotation.x=ue?0:Math.PI/2,On.position.y=5.8,Pe.add(On);const vn=document.createElement("canvas");vn.width=540,vn.height=100;const sn=vn.getContext("2d");sn.fillStyle=ue?"#fee2e2":"#fef08a",sn.beginPath(),sn.roundRect(8,8,524,84,18),sn.fill(),sn.strokeStyle=ue?"#dc2626":"#15803d",sn.lineWidth=6,sn.stroke(),sn.strokeStyle=ue?"#b91c1c":"#166534",sn.lineWidth=1.5,sn.strokeRect(14,14,512,72),sn.fillStyle="#0f172a",sn.font='bold 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',sn.textAlign="center",sn.textBaseline="middle",sn.fillText(ue?`🔒 ${ye}: ĐÃ ĐÓNG (CẮT NƯỚC)`:`🔓 ${ye}: ĐANG MỞ (HOẠT ĐỘNG)`,270,50);const ii=new v0(vn),Mi=new zd({map:ii,transparent:!0,depthTest:!1}),Lt=new l0(Mi);Lt.position.set(0,12,0),Lt.scale.set(38,7,1),Pe.add(Lt);const ji={name:J,id:ye,type:"Chốt Khóa Nước Phân Đoạn (Smart Isolation Valve)",status:ue?"🔒 ĐÃ ĐÓNG (CÔ LẬP & CẮT NƯỚC CỤC BỘ)":"🔓 ĐANG MỞ (Cấp nước bình thường)",isClosed:ue,zoneDescription:Se,affectedBuildings:ke,householdsAffected:se,pressure:ue?"0.00 bar (Cửa xả)":"3.30 bar (Ổn định)",diameter:"DN300 - DN500 Gang Cầu FCD",material:"Van Cổng Tín Hiệu Điện Tử (Flanged Resilient Gate Valve)"};return Pe.userData={name:J,id:ye,type:"SmartValve",data:ji},Gt.userData=Pe.userData,x.current.push(Gt),Me.add(Pe),Pe};if(De([0,2.5,20],"Chốt Khóa V-HDT-01 (Hoàng Đạo Thúy - Tháp 34T)","VALVE-01",he,"Cụm Lõi Đô Thị Hoàng Đạo Thúy & 24T1-24T3","Tháp Biểu Tượng 34T, Cụm 24T1, 24T2, 24T3, Dãy 17T1-17T6 và dãy nhà phố nội khu","1,120 hộ dân (~4,500 cư dân)"),De([-160,2.5,25],"Chốt Khóa V-HMG-02 (Hoàng Minh Giám - Mandarin)","VALVE-02",Ve,"Phân Khu Trường Học & Chung Cư Cao Cấp Hoàng Minh Giám","Tổ Hợp Mandarin Garden (4 Tháp A, B, C, D) & Trường THPT Chuyên Hà Nội - Amsterdam","1,008 căn hộ + 3,200 học sinh & GV"),De([0,2.5,155],"Chốt Khóa V-LVL-03 (Lê Văn Lương - Diamond Flower)","VALVE-03",V,"Nút Giao Lê Văn Lương - Hoàng Đạo Thúy","Diamond Flower Tower (36T), Star City, The Golden Palm, Cụm HUD Tower A & B, MB Grand Tower","850 hộ dân & 35,000m² văn phòng tài chính"),De([0,2.5,-180],"Chốt Khóa V-TDN-04 (Trần Duy Hưng - Charmvit Tower)","VALVE-04",rt,"Phân Khu Khách Sạn & Ngoại Giao Trần Duy Hưng","Tổ hợp Charmvit Tower, Khách sạn Grand Plaza, Cụm Chung Cư N04 (3 tháp) & N05 (2 tháp 34T)","920 căn hộ & 540 phòng khách sạn 5 sao"),De([-280,2.5,-180],"Chốt Khóa V-DCP-05 (Vinhomes D'Capitale & Big C)","VALVE-05",ot,"Cửa Ngõ Phía Nam Trần Duy Hưng - Khuất Duy Tiến","Tổ Hợp 6 Tòa Tháp Vinhomes D'Capitale, Siêu Thị Big C Thăng Long, 2 Tháp Thăng Long Number One","3,000 căn hộ cao cấp & TTTM Big C Thăng Long"),De([-440,2.5,-320],"Chốt Khóa V-KNG-06 (Keangnam Landmark 72 & Phạm Hùng)","VALVE-06",ft,"Trung Tâm Tài Chính Phía Tây Hà Nội","Keangnam Hanoi Landmark 72 (350m), 2 Tháp Căn Hộ Đôi Keangnam 48T, Handico Tower, CEO Tower, Bảo tàng HN","922 căn hộ Penthouse, TTTM Lotte & Trụ sở Tập đoàn"),De([180,2.5,270],"Chốt Khóa V-HAP-07 (Ngụy Như Kon Tum - Hapulico)","VALVE-07",Ce,"Phân Khu Dân Cư Ngụy Như Kon Tum - Vũ Trọng Phụng","Tổ hợp Hapulico Complex (4 Block), Chung Cư Golden West, Imperia Garden (2 Tháp 35T), Shophouse Chợ Thuốc","1,200 căn hộ & Chợ Dược Phẩm miền Bắc"),De([75,2.5,0],"Chốt Khóa V-NTT-08 (Nguyễn Thị Thập - Khu Biệt Thự)","VALVE-08",_t,"Khu Đô Thị Thấp Tầng Nguyễn Thị Thập","150 Biệt thự Liền kề BT1 - BT6, Trường Liên cấp Ngôi Sao, 50 Shophouse mặt phố Nguyễn Thị Thập","150 căn biệt thự & 2,200 học sinh"),t.hydrants){const W=new qn;G.add(W);const J=(ue,Se,ke,se)=>{const Pe=new qn;Pe.position.set(ue[0],0,ue[2]);const Ge=new Jr(.7,.8,1.2,12),we=new In({color:14427686,metalness:.6,roughness:.25,emissive:10033947,emissiveIntensity:.35}),ct=new Ut(Ge,we);ct.position.y=.6,Pe.add(ct);const vt=new Jr(.55,.55,2.2,12),Rt=new Ut(vt,we);Rt.position.y=2,Pe.add(Rt);const Zt=new xa(.65,12,12),Et=new Ut(Zt,we);Et.position.y=3.1,Pe.add(Et),Pe.userData={name:Se,id:ke,type:"Trụ Cứu Hỏa PCCC",data:{name:Se,id:ke,type:"Trụ Cứu Hỏa Đô Thị (TCVN 6379:1998)",status:"Sẵn sàng cấp nước chữa cháy 24/7 (Đạt QCVN 06:2022/BXD)",flow:"35.0 L/s (Lưu lượng danh định)",pressure:"3.35 bar (Cột áp tĩnh)",elevation:"+16.8m ASL",diameter:"Họng cấp DN100 + 2 họng phụ DN65",households:"Bán kính bảo vệ PCCC: 150m",dma:se}},Rt.userData=Pe.userData,x.current.push(Rt),W.add(Pe)};[...[-300,-220,-140,-60,20,100,180,260].map((ue,Se)=>({pos:[14,0,ue],id:`HYD-HDT-${Se+1}`,road:"Đường Hoàng Đạo Thúy"})),...[-380,-300,-220,-140,-60,20,100,180,260,340].map((ue,Se)=>({pos:[ue,0,194],id:`HYD-LVL-${Se+1}`,road:"Đường Lê Văn Lương"})),...[-380,-300,-220,-140,-60,20,100,180,260,340].map((ue,Se)=>({pos:[ue,0,-196],id:`HYD-TDH-${Se+1}`,road:"Đường Trần Duy Hưng"})),...[-500,-420,-340,-260,-180,-100,-20,60,140,220,300,380].map((ue,Se)=>({pos:[-422,0,ue],id:`HYD-VD3-${Se+1}`,road:"Đường Phạm Hùng - Khuất Duy Tiến"})),...[-200,-130,-60,10,80,150,220,290].map((ue,Se)=>({pos:[-148,0,ue],id:`HYD-HMG-${Se+1}`,road:"Đường Hoàng Minh Giám"})),...[-140,-80,-20,40,100,160,220,280].map((ue,Se)=>({pos:[ue,0,12],id:`HYD-NTT-${Se+1}`,road:"Đường Nguyễn Thị Thập"})),...[-120,-60,0,60,120,180,240,300].map((ue,Se)=>({pos:[ue,0,362],id:`HYD-NNKT-${Se+1}`,road:"Đường Ngụy Như Kon Tum"})),...[-280,-200,-120,-40,40,120,200,280].map((ue,Se)=>({pos:[352,0,ue],id:`HYD-TK-${Se+1}`,road:"Phố Trung Kính"})),...[190,230,270,310,350,390].map((ue,Se)=>({pos:[248,0,ue],id:`HYD-VTP-${Se+1}`,road:"Phố Vũ Trọng Phụng"}))].forEach(ue=>J(ue.pos,`Trụ Cứu Hỏa ${ue.id}`,ue.id,ue.road))}if(t.tanks){const W=new qn;W.position.set(-350,0,220);const J=new Jr(8,12,38,16),ye=new In({color:E?1976635:6583435,roughness:.7}),ue=new Ut(J,ye);ue.position.y=19,ue.castShadow=!0,W.add(ue);const Se=new xa(18,24,20),ke=new In({color:E?165063:223649,metalness:.6,roughness:.2,emissive:E?223649:165063,emissiveIntensity:.25}),se=new Ut(Se,ke);se.position.y=44,se.castShadow=!0,W.add(se),W.userData={name:"Đài Nước & Trạm Bơm Tăng Áp Sông Đà (KĐT Nhân Chính)",id:"PUMP-STATION-MAIN",type:"Trạm Bơm & Đài Nước Tăng Áp",data:{name:"Đài Nước Điều Áp & Trạm Bơm Tăng Áp Sông Đà",id:"PUMP-STATION-MAIN",type:"Đài Nước Cân Bằng Thủy Lực & Trạm Bơm Tăng Áp",status:"Hoạt động liên tục (3/3 tổ máy biến tần)",flow:`${u.flow.toFixed(1)} m³/h`,pressure:`${u.pressure.toFixed(2)} bar (Áp lực xuất trạm)`,level:"14.2m / 16.0m (Dung tích 8,000 m³)",elevation:"+35.0m ASL",power:"3 x 160 kW Biến tần ABB",dma:"Toàn KĐT Trung Hòa - Nhân Chính"}},se.userData=W.userData,x.current.push(se),G.add(W)}const Ue=new Wy,ge=new Xe,_e=W=>{var ue;const J=re.domElement.getBoundingClientRect();ge.x=(W.clientX-J.left)/J.width*2-1,ge.y=-((W.clientY-J.top)/J.height)*2+1,Ue.setFromCamera(ge,$);const ye=Ue.intersectObjects(x.current,!0);if(ye.length>0){let Se=ye[0].object;for(;Se&&!((ue=Se.userData)!=null&&ue.data)&&Se.parent;)Se=Se.parent;Se&&Se.userData&&(Se.userData.type==="SmartValve"&&o&&o(Se.userData.id),m&&Se.userData.data&&m(Se.userData.data))}},Ie=W=>{var ue,Se;const J=re.domElement.getBoundingClientRect();ge.x=(W.clientX-J.left)/J.width*2-1,ge.y=-((W.clientY-J.top)/J.height)*2+1,Ue.setFromCamera(ge,$);const ye=Ue.intersectObjects(x.current,!0);if(ye.length>0){let ke=ye[0].object;for(;ke&&!((ue=ke.userData)!=null&&ue.name)&&ke.parent;)ke=ke.parent;if(ke&&((Se=ke.userData)!=null&&Se.name)){re.domElement.style.cursor="pointer",F(ke.userData.name);return}}re.domElement.style.cursor="grab",F(null)};re.domElement.addEventListener("pointerdown",_e),re.domElement.addEventListener("pointermove",Ie);const z=()=>{N.current=requestAnimationFrame(z),y.current.forEach(W=>{W.t=(W.t+W.speed)%1;const J=W.curve.getPointAt(W.t);J&&W.mesh.position.copy(J)}),H.update(),re.render(G,$)};z();const xe=()=>{if(!O)return;const W=O.clientWidth,J=O.clientHeight;$.aspect=W/J,$.updateProjectionMatrix(),re.setSize(W,J)};return window.addEventListener("resize",xe),()=>{window.removeEventListener("resize",xe),re.domElement&&(re.domElement.removeEventListener("pointerdown",_e),re.domElement.removeEventListener("pointermove",Ie)),N.current&&cancelAnimationFrame(N.current),w.current&&w.current.dispose(),y.current.forEach(W=>G.remove(W.mesh))}},[s,e,t,r,l,p]),f.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",minHeight:d?"440px":"560px"},children:[f.jsx("div",{ref:_,style:{width:"100%",height:"100%",outline:"none"}}),D.length>0&&f.jsxs("div",{style:{position:"absolute",top:"14px",left:"50%",transform:"translateX(-50%)",background:"rgba(220, 38, 38, 0.95)",color:"#ffffff",padding:"8px 18px",borderRadius:"8px",display:"flex",alignItems:"center",gap:"10px",zIndex:50,fontSize:"13px",fontWeight:"600",backdropFilter:"blur(6px)",animation:"pulse 2s infinite"},children:[f.jsx(ws,{size:18,color:"#fef08a"}),f.jsxs("span",{children:["⚠️ ĐANG CÔ LẬP CẮT NƯỚC: ",D.length," chốt khóa đang ĐÓNG. Click vào chốt van màu đỏ để mở lại nước!"]})]}),f.jsx("div",{style:{position:"absolute",bottom:d?"14px":"80px",left:"16px",pointerEvents:"none",display:"flex",flexDirection:"column",gap:"4px",zIndex:30},children:P&&f.jsxs("div",{style:{background:"rgba(11, 18, 33, 0.95)",color:"#38bdf8",padding:"7px 14px",borderRadius:"6px",fontSize:"12.5px",fontWeight:"600",border:"1px solid rgba(56, 189, 248, 0.5)",boxShadow:"0 6px 16px rgba(0, 0, 0, 0.4)",display:"inline-flex",alignItems:"center",gap:"8px"},children:[f.jsx(cc,{size:14}),f.jsx("span",{children:P})]})})]})}function t2(){const[s,e]=wt.useState("overview"),[t,r]=wt.useState("DMA THNC-02"),[o,l]=wt.useState("24h"),[u,d]=wt.useState(null),[p,m]=wt.useState({pipes:!0,valves:!0,sensors:!0}),[_,M]=wt.useState(""),[v,S]=wt.useState([{id:1,type:"Áp lực cao đầu nguồn",location:"Trạm bơm Tăng áp Trung tâm (Lê Văn Lương)",time:"14:22",status:"High Pressure",severity:"danger",handled:!1},{id:2,type:"Nghi vấn rò rỉ đêm (MNF)",location:"Tuyến ống D200 Hoàng Minh Giám (DMA THNC-03)",time:"13:50",status:"Leak Suspected",severity:"warning",handled:!1},{id:3,type:"Cảnh báo sụt áp cục bộ",location:"Nhánh D150 cấp cụm 17T1 - 17T4 Hoàng Đạo Thúy",time:"12:15",status:"Low Pressure",severity:"warning",handled:!0},{id:4,type:"Độ đục vượt chuẩn nhẹ (NTU)",location:"Hố đồng hồ tổng Mandarin Garden",time:"10:04",status:"Water Quality",severity:"info",handled:!1}]),[w,N]=wt.useState(!1),[y,x]=wt.useState(null),[P,F]=wt.useState("3d"),[D,O]=wt.useState(null);wt.useEffect(()=>{const he=Ve=>{Ve.target.closest(".qatium-dropdown-container")||O(null)};return document.addEventListener("pointerdown",he),()=>document.removeEventListener("pointerdown",he)},[]);const[I,T]=wt.useState("dark"),[E,K]=wt.useState("pressure"),[B,G]=wt.useState({pipes:!0,pipesPrimary:!0,pipesSecondary:!0,pipesService:!0,buildings:!0,hydrants:!0,streetLabels:!0,valves:!0,tanks:!0,sensors:!0,contour:!0}),[$,re]=wt.useState(14),[H,de]=wt.useState(!1),[Y,ee]=wt.useState(null),[ne,Q]=wt.useState(!1),[te,U]=wt.useState(!1),[ie,Oe]=wt.useState(null),le=()=>{U(!0),Oe(null),Ye("📡 Đang phát sóng âm phân tích tương quan tại các giếng van DMA THNC-02..."),setTimeout(()=>{U(!1),Oe({location:"Km 0+320 đường Hoàng Đạo Thúy (Đối diện sảnh 17T3)",depth:"1.25 m dưới mặt đường",pipe:"Ống gang dẻo D200 PN16 (Tuyến phân phối số 02)",lossRate:"11.8 m³/h (áp 3.2 bar)",confidence:"96.4%",frequency:"840 Hz (Sóng âm biến dạng rò ngầm)",recommendedAction:"Khóa cục bộ chốt van phụ và điều động đội cơ động đào thăm dò định vị vệt nứt."}),Ye("🎯 Đã định vị chính xác vị trí rò rỉ ngầm tại Hoàng Đạo Thúy!")},1200)},[Te,be]=wt.useState({"VALVE-01":!1,"VALVE-02":!1,"VALVE-03":!1,"VALVE-04":!1,"VALVE-05":!1,"VALVE-06":!1,"VALVE-07":!1,"VALVE-08":!1}),He={"VALVE-01":{name:"Chốt Khóa V-HDT-01 (Hoàng Đạo Thúy - Tháp 34T)",zone:"Cụm Lõi Đô Thị Hoàng Đạo Thúy & 24T1-24T2",affected:"Tháp Biểu Tượng 34T, Cụm 24T1, 24T2",households:"1.120 hộ dân (~4.500 cư dân)"},"VALVE-02":{name:"Chốt Khóa V-HMG-02 (Hoàng Minh Giám - Mandarin)",zone:"Phân Khu Trường Học & Chung Cư Hoàng Minh Giám",affected:"Mandarin Garden (4 Tháp) & THPT Chuyên Hà Nội - Amsterdam",households:"1.008 căn hộ + 3.200 học sinh"},"VALVE-03":{name:"Chốt Khóa V-LVL-03 (Lê Văn Lương - Diamond Flower)",zone:"Nút Giao Lê Văn Lương - Hoàng Đạo Thúy",affected:"Diamond Flower Tower (36T) & Chung cư Star City",households:"850 hộ dân & 35.000m² văn phòng"},"VALVE-04":{name:"Chốt Khóa V-TDN-04 (Trần Duy Hưng - Charmvit Tower)",zone:"Phân Khu Khách Sạn & Ngoại Giao Trần Duy Hưng",affected:"Tổ hợp Charmvit Tower, Grand Plaza & Cụm N04/N05",households:"920 căn hộ & 500 phòng khách sạn 5 sao"},"VALVE-05":{name:"Chốt Khóa V-DCP-05 (Vinhomes D'Capitale & Big C)",zone:"Cửa Ngõ Phía Nam Trần Duy Hưng - Khuất Duy Tiến",affected:"Tổ hợp 6 Tòa Tháp D'Capitale & Siêu Thị Big C Thăng Long",households:"3.000 căn hộ cao cấp & TTTM Big C"},"VALVE-06":{name:"Chốt Khóa V-KNG-06 (Keangnam Landmark 72 & Phạm Hùng)",zone:"Trung Tâm Tài Chính Phía Tây Hà Nội",affected:"Keangnam Hanoi Landmark 72 (350m, 72 tầng) & Bảo tàng Hà Nội",households:"922 căn hộ Penthouse, TTTM Lotte & Trụ sở Tập đoàn"},"VALVE-07":{name:"Chốt Khóa V-HAP-07 (Ngụy Như Kon Tum - Hapulico)",zone:"Phân Khu Dân Cư Ngụy Như Kon Tum - Vũ Trọng Phụng",affected:"Tổ hợp Hapulico Complex & Chung Cư Golden West",households:"1.200 căn hộ & Chợ Dược Phẩm miền Bắc"},"VALVE-08":{name:"Chốt Khóa V-NTT-08 (Nguyễn Thị Thập - Khu Biệt Thự)",zone:"Khu Đô Thị Thấp Tầng Nguyễn Thị Thập",affected:"150 Biệt thự Liền kề BT1 - BT6 & Trường Liên cấp Ngôi Sao",households:"150 căn biệt thự & 2.200 học sinh"}},Ee=he=>{be(Ve=>{const V=!Ve[he],rt=He[he]||{name:he,affected:he};return Ye(V?`🔒 ĐÃ KHÓA ${he}: Cô lập cắt nước toàn bộ [${rt.affected}]!`:`🔓 ĐÃ MỞ ${he}: Khôi phục cấp nước ổn định cho [${rt.affected}]!`),ee(ot=>ot&&(ot.id===he||ot.id===rt.name)?{...ot,status:V?"🔒 ĐÃ ĐÓNG (CÔ LẬP & CẮT NƯỚC CỤC BỘ)":"🔓 ĐANG MỞ (Cấp nước bình thường)",isClosed:V,pressure:V?"0.00 bar (Cửa xả)":"3.30 bar (Ổn định)"}:ot),{...Ve,[he]:V}})};wt.useEffect(()=>{let he;return H&&(he=setInterval(()=>{re(Ve=>(Ve+1)%24)},1400)),()=>clearInterval(he)},[H]);const Ze=(he=>he>=2&&he<=4?{label:"03:00 - Đêm (MNF Rò rỉ)",flow:1420.5,pressure:3.78,status:"Cảnh báo rò rỉ đêm",nrw:"14.8%"}:he>=6&&he<=8?{label:"07:30 - Cao điểm sáng",flow:4280,pressure:3.12,status:"Phụ tải tăng cao",nrw:"10.2%"}:he>=18&&he<=20?{label:"19:00 - Cao điểm tối",flow:4650,pressure:2.98,status:"Phụ tải sinh hoạt cực đại",nrw:"10.6%"}:{label:`${he<10?"0"+he:he}:00 - Giờ bình thường`,flow:3850.4,pressure:3.28,status:"Vận hành ổn định",nrw:"10.8%"})($),Ye=he=>{x(he),setTimeout(()=>x(null),3e3)},ut=he=>{S(Ve=>Ve.map(V=>{if(V.id===he){const rt=!V.handled;return Ye(rt?`Đã điều động kỹ thuật viên xử lý: ${V.type}`:`Đã hoàn tác trạng thái sự cố: ${V.type}`),{...V,handled:rt}}return V}))},St=(he="water_management_report.csv")=>{const V=encodeURI(`data:text/csv;charset=utf-8,\uFEFFDiem Do,Phan Khu,Luu Luong (m3/h),Ap Luc (bar),Trang Thai
PUMP-THNC-MAIN (Dau vao Le Van Luong),Tram Bom Tong,3850.4,3.88,Toi uu
PIPE-TRUNK-HDT-D500 (Truc Hoang Dao Thuy),Lien Vung,3850.4,3.28,Hoat dong tot
BLDG-34T-HDT (Thap 34T Hoang Dao Thuy),DMA THNC-02,48.5,3.25,On dinh
BLDG-DIAMOND-FLOWER (Diamond Flower Tower 36T),DMA THNC-03,72.0,3.38,On dinh
BLDG-CHARMVIT (Charmvit Tower Tran Duy Hung),DMA THNC-01,65.4,3.32,On dinh
BLDG-MANDARIN (Mandarin Garden),DMA THNC-03,68.5,3.20,On dinh
FH-HDT-01 (Tru Cuu Hoa 34T),Hoang Dao Thuy,108.0,3.25,San sang 100%
PRV-01 (Giam ap Tran Duy Hung),DMA THNC-01,680.0,3.32,Dieu tiet tot
PRV-02 (Giam ap Hoang Minh Giam),DMA THNC-03,410.0,3.22,Canh bao MNF dem
`),rt=document.createElement("a");rt.setAttribute("href",V),rt.setAttribute("download",he),document.body.appendChild(rt),rt.click(),document.body.removeChild(rt),Ye(`Đã xuất và tải về: ${he}`)},yt=()=>{window.print()},Qt={"DMA THNC-01":{name:"DMA THNC-01 - Khu Bắc Trần Duy Hưng (N01-N05 & Charmvit)",flow:"1,120.0 m³/h",pressure:"3.35 bar",households:"18,500 hộ & 45 VP",nrw:"10.5%",status:"Bình thường"},"DMA THNC-02":{name:"DMA THNC-02 - Khu Trung Tâm Hoàng Đạo Thúy (34T & Diamond Flower)",flow:"1,680.5 m³/h",pressure:"3.28 bar",households:"24,200 hộ + 2 Tháp",nrw:"11.2%",status:"Ổn định"},"DMA THNC-03":{name:"DMA THNC-03 - Khu Nam Lê Văn Lương & Mandarin Garden",flow:"1,050.0 m³/h",pressure:"3.22 bar",households:"22,000 hộ + THPT Ams",nrw:"11.8%",status:"Giám sát áp lực PCCC"}},$t={"24h":{title:"Lưu Lượng Thủy Lực 24 Giờ (m³/h)",subtitle:"So sánh Lưu lượng Thực tế vs Đường Trung bình Baseline",points:[{label:"00h",actual:68,baseline:65,alert:!1},{label:"02h",actual:74,baseline:60,alert:!0,note:"MNF vượt chuẩn (+14 m³/h)"},{label:"04h",actual:62,baseline:60,alert:!1},{label:"06h",actual:110,baseline:105,alert:!1},{label:"08h",actual:172,baseline:160,alert:!0,note:"Đỉnh cao điểm sáng"},{label:"10h",actual:130,baseline:132,alert:!1},{label:"12h",actual:142,baseline:140,alert:!1},{label:"14h",actual:145.8,baseline:138,alert:!1},{label:"16h",actual:138,baseline:135,alert:!1},{label:"18h",actual:165,baseline:162,alert:!1},{label:"20h",actual:152,baseline:150,alert:!1},{label:"22h",actual:98,baseline:95,alert:!1}]},"7d":{title:"Lưu Lượng Thủy Lực 7 Ngày Qua (m³/ngày)",subtitle:"Xu hướng cấp nước theo ngày trong tuần",points:[{label:"Thứ 2",actual:3250,baseline:3200,alert:!1},{label:"Thứ 3",actual:3310,baseline:3220,alert:!1},{label:"Thứ 4",actual:3480,baseline:3250,alert:!0,note:"Tăng vọt giữa tuần (+7%)"},{label:"Thứ 5",actual:3290,baseline:3240,alert:!1},{label:"Thứ 6",actual:3380,baseline:3300,alert:!1},{label:"Thứ 7",actual:3620,baseline:3550,alert:!1},{label:"CN",actual:3590,baseline:3500,alert:!1}]},"30d":{title:"Lưu Lượng Thủy Lực 30 Ngày (m³/ngày)",subtitle:"Đường biến thiên chu kỳ tháng",points:[{label:"Tuần 1",actual:23100,baseline:22800,alert:!1},{label:"Tuần 2",actual:24500,baseline:23e3,alert:!0,note:"Đợt nắng nóng tăng tiêu thụ"},{label:"Tuần 3",actual:23200,baseline:22900,alert:!1},{label:"Tuần 4",actual:22800,baseline:22700,alert:!1}]}}[o],Ft=Math.max(...$t.points.map(he=>Math.max(he.actual,he.baseline)))*1.15,yn=Math.min(...$t.points.map(he=>Math.min(he.actual,he.baseline)))*.85,kt=he=>180-(he-yn)/(Ft-yn)*160+10,Jt=he=>{const V=620/($t.points.length-1);return $t.points.map((rt,ot)=>`${ot*V+40},${kt(rt[he])}`).join(" L ")};return f.jsxs("div",{className:"app-layout",children:[w&&f.jsx("div",{className:"sidebar-backdrop",onClick:()=>N(!1)}),f.jsxs("aside",{className:`app-sidebar ${w?"mobile-open":""}`,children:[f.jsxs("div",{className:"sidebar-header",children:[f.jsx("div",{className:"logo-badge",children:f.jsx(Js,{size:22})}),f.jsxs("div",{children:[f.jsx("div",{className:"logo-title",children:"Smart Water SCADA"}),f.jsx("div",{className:"logo-sub",children:"KĐT Trung Hòa – Nhân Chính"})]})]}),f.jsxs("nav",{className:"sidebar-nav",children:[f.jsx("div",{className:"nav-label",children:"Nghiệp Vụ"}),f.jsxs("button",{className:`nav-item ${s==="overview"?"active":""}`,onClick:()=>{e("overview"),N(!1)},children:[f.jsx(so,{size:18}),f.jsx("span",{children:"1. Tổng quan"})]}),f.jsxs("button",{className:`nav-item ${s==="gis"?"active":""}`,onClick:()=>{e("gis"),N(!1)},children:[f.jsx($_,{size:18}),f.jsx("span",{children:"2. Mạng GIS"})]}),f.jsxs("button",{className:`nav-item ${s==="telemetry"?"active":""}`,onClick:()=>{e("telemetry"),N(!1)},children:[f.jsx(Rl,{size:18}),f.jsx("span",{children:"3. Áp & Lưu lượng"})]}),f.jsxs("button",{className:`nav-item ${s==="leaks"?"active":""}`,onClick:()=>{e("leaks"),N(!1)},children:[f.jsx(ws,{size:18}),f.jsx("span",{children:"4. Thất thoát (NRW)"})]}),f.jsxs("button",{className:`nav-item ${s==="quality"?"active":""}`,onClick:()=>{e("quality"),N(!1)},children:[f.jsx(Js,{size:18}),f.jsx("span",{children:"5. Chất lượng nước"})]}),f.jsx("div",{className:"nav-label",style:{marginTop:"16px"},children:"Báo Cáo"}),f.jsxs("button",{className:`nav-item ${s==="reports"?"active":""}`,onClick:()=>{e("reports"),N(!1)},children:[f.jsx(gh,{size:18}),f.jsx("span",{children:"6. Kiểm toán nước"})]})]}),f.jsxs("div",{className:"sidebar-footer",children:[f.jsxs("div",{className:"system-status",children:[f.jsx("span",{className:"status-dot"}),f.jsx("span",{children:"Trực tuyến: 512 node · 38 trụ PCCC"})]}),f.jsx(nx,{size:14,color:"#94a3b8",style:{cursor:"pointer"},onClick:()=>Ye("Đã đồng bộ lại 512 node IoT & 38 trụ cứu hỏa PCCC KĐT Trung Hòa - Nhân Chính")})]})]}),f.jsxs("div",{className:"main-wrapper",children:[f.jsxs("header",{className:"top-header",children:[f.jsxs("div",{className:"header-left-group",children:[f.jsx("button",{className:"mobile-menu-btn",onClick:()=>N(!w),"aria-label":"Toggle navigation menu",children:w?f.jsx(Hm,{size:20}):f.jsx(Q_,{size:20})}),f.jsxs("div",{className:"header-search",children:[f.jsx(rx,{size:16}),f.jsx("input",{type:"text",placeholder:"Tìm trạm, DMA, cảm biến...",value:_,onChange:he=>M(he.target.value)})]})]}),f.jsxs("div",{className:"header-actions",children:[f.jsxs("button",{className:"action-btn",onClick:()=>St("Bao_Cao_Van_Hanh_Ngay.csv"),title:"Xuất báo cáo CSV",children:[f.jsx(gh,{size:15}),f.jsx("span",{children:"Xuất báo cáo"})]}),f.jsxs("button",{className:"action-btn",style:{position:"relative"},onClick:()=>Ye("Cảnh báo: 1 sự cố áp cao tại DMA 3"),"aria-label":"Thông báo sự cố",title:"Xem thông báo",children:[f.jsx(X_,{size:16}),f.jsx("span",{style:{position:"absolute",top:"6px",right:"8px",width:"7px",height:"7px",background:"#ef4444",borderRadius:"50%"}})]}),f.jsxs("div",{className:"user-profile",title:"Tài khoản kỹ sư",children:[f.jsx("div",{className:"user-avatar",children:"AD"}),f.jsxs("div",{className:"user-info",children:[f.jsx("span",{className:"user-name",children:"Kỹ sư trực"}),f.jsx("span",{className:"user-role",children:"Vận hành"})]})]})]})]}),f.jsxs("main",{className:"content-container",children:[s==="overview"&&f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"page-title-row",children:[f.jsxs("div",{children:[f.jsx("h1",{className:"page-title",children:"Giám sát Cấp nước KĐT Trung Hòa – Nhân Chính"}),f.jsx("p",{className:"page-subtitle",children:"Mạng lưới 3 cấp: Truyền dẫn D500, Phân phối D200 và Tuyến dịch vụ đấu nối công trình"})]}),f.jsx("div",{style:{display:"flex",gap:"8px"},children:f.jsxs("span",{className:"metric-badge badge-success",children:[f.jsx(ys,{size:13}),f.jsx("span",{children:"Trạm bơm Lê Văn Lương: 100%"})]})})]}),f.jsxs("div",{className:"metrics-grid",children:[f.jsxs("div",{className:"metric-card",children:[f.jsxs("div",{className:"metric-header",children:[f.jsx("span",{children:"Lưu lượng cấp toàn KĐT"}),f.jsx("div",{className:"metric-icon-wrap",style:{background:"#e0f2fe",color:"#0284c7"},children:f.jsx(Js,{size:18})})]}),f.jsxs("div",{className:"metric-body",children:[f.jsx("span",{className:"metric-value",children:Ze.flow.toFixed(1)}),f.jsx("span",{className:"metric-unit",children:"m³/h"})]}),f.jsx("div",{children:f.jsx("span",{className:"metric-badge badge-success",children:"↑ 3.2% định mức giờ"})})]}),f.jsxs("div",{className:"metric-card",children:[f.jsxs("div",{className:"metric-header",children:[f.jsx("span",{children:"Áp lực trung bình"}),f.jsx("div",{className:"metric-icon-wrap",style:{background:"#ecfdf5",color:"#10b981"},children:f.jsx(Rl,{size:18})})]}),f.jsxs("div",{className:"metric-body",children:[f.jsx("span",{className:"metric-value",children:Ze.pressure.toFixed(2)}),f.jsx("span",{className:"metric-unit",children:"bar"})]}),f.jsx("div",{children:f.jsx("span",{className:"metric-badge badge-info",children:"Tối ưu: 2.8 - 3.5 bar"})})]}),f.jsxs("div",{className:"metric-card",children:[f.jsxs("div",{className:"metric-header",children:[f.jsx("span",{children:"Thất thoát (NRW)"}),f.jsx("div",{className:"metric-icon-wrap",style:{background:"#fef3c7",color:"#d97706"},children:f.jsx(zm,{size:18})})]}),f.jsx("div",{className:"metric-body",children:f.jsx("span",{className:"metric-value",children:Ze.nrw})}),f.jsx("div",{children:f.jsx("span",{className:"metric-badge badge-success",children:"↓ 0.8% theo tuần"})})]}),f.jsxs("div",{className:"metric-card",children:[f.jsxs("div",{className:"metric-header",children:[f.jsx("span",{children:"Cảnh báo"}),f.jsx("div",{className:"metric-icon-wrap",style:{background:"#fee2e2",color:"#ef4444"},children:f.jsx(ws,{size:18})})]}),f.jsxs("div",{className:"metric-body",children:[f.jsx("span",{className:"metric-value",style:{color:"#ef4444"},children:v.filter(he=>!he.handled).length}),f.jsx("span",{className:"metric-unit",children:"sự cố"})]}),f.jsx("div",{children:f.jsx("span",{className:"metric-badge badge-danger",children:"1 nghi vấn rò rỉ đêm"})})]})]}),f.jsxs("div",{className:"dashboard-main-grid",children:[f.jsxs("div",{className:"panel-card",children:[f.jsxs("div",{className:"panel-card-header",children:[f.jsxs("div",{className:"panel-card-title",children:[f.jsx(Z_,{size:17,color:"#0284c7"}),f.jsx("span",{children:"Sơ đồ phân vùng DMA"})]}),f.jsxs("div",{className:"panel-card-actions",children:[f.jsxs("div",{className:"qatium-hud-pill-group",style:{padding:"2px"},children:[f.jsx("button",{className:`qatium-hud-btn ${I==="light"?"active":""}`,onClick:()=>T("light"),style:{padding:"4px 8px",fontSize:"11.5px"},title:"Chế độ Google Maps (Mây trời 3D)",children:"Google Maps 3D"}),f.jsx("button",{className:`qatium-hud-btn ${I==="dark"?"active":""}`,onClick:()=>T("dark"),style:{padding:"4px 8px",fontSize:"11.5px"},title:"Chế độ Bản Đồ Đêm",children:"Đêm"})]}),f.jsx("button",{className:"btn-sm btn-secondary",onClick:()=>e("gis"),children:"Mở GIS →"})]})]}),f.jsxs("div",{className:`map-canvas-container ${I==="dark"?"dark-theme":"light-theme"}`,style:{minHeight:"440px",height:"440px",position:"relative"},children:[f.jsx(eg,{theme:I,heatmap:E,assetsLayer:B,isolatedPipe:ne,closedValves:Te,onToggleValve:Ee,simTime:$,currentSim:Ze,compact:!0,onSelectAsset:he=>{ee(he),he.dma&&(he.dma.includes("THNC-01")||he.dma.includes("DMA 1"))?r("DMA THNC-01"):he.dma&&(he.dma.includes("THNC-02")||he.dma.includes("DMA 2"))?r("DMA THNC-02"):he.dma&&(he.dma.includes("THNC-03")||he.dma.includes("DMA 3"))&&r("DMA THNC-03")}}),f.jsxs("div",{className:"map-overlay-badge",style:{zIndex:25,pointerEvents:"auto"},children:[f.jsx("div",{className:"map-overlay-title",children:Qt[t].name}),f.jsxs("div",{className:"map-overlay-sub",children:["Lưu lượng: ",f.jsx("b",{children:Qt[t].flow})," · Áp: ",f.jsx("b",{children:Qt[t].pressure})," · NRW: ",f.jsx("b",{children:Qt[t].nrw})]})]})]})]}),f.jsxs("div",{className:"panel-card",children:[f.jsxs("div",{className:"panel-card-header",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"panel-card-title",children:[f.jsx(so,{size:17,color:"#0284c7"}),f.jsx("span",{children:"Thủy lực 24h & Cảnh báo"})]}),f.jsx("span",{style:{fontSize:"12px",color:"#64748b"},children:$t.subtitle})]}),f.jsxs("div",{className:"timeframe-group",children:[f.jsx("button",{className:`timeframe-btn ${o==="24h"?"active":""}`,onClick:()=>l("24h"),children:"24 Giờ"}),f.jsx("button",{className:`timeframe-btn ${o==="7d"?"active":""}`,onClick:()=>l("7d"),children:"7 Ngày"}),f.jsx("button",{className:`timeframe-btn ${o==="30d"?"active":""}`,onClick:()=>l("30d"),children:"30 Ngày"})]})]}),f.jsxs("div",{className:"line-chart-wrapper",children:[f.jsxs("div",{className:"line-chart-legend",children:[f.jsxs("div",{className:"legend-line-item",children:[f.jsx("div",{className:"line-sample-actual"}),f.jsx("span",{children:"Thực tế"})]}),f.jsxs("div",{className:"legend-line-item",children:[f.jsx("div",{className:"line-sample-baseline"}),f.jsx("span",{children:"Baseline"})]}),f.jsxs("div",{className:"legend-line-item",children:[f.jsx("div",{className:"line-sample-alert"}),f.jsx("span",{children:"Lệch chuẩn"})]})]}),f.jsxs("div",{style:{position:"relative",width:"100%",height:"220px",background:"#ffffff"},children:[f.jsxs("svg",{viewBox:"0 0 700 220",style:{width:"100%",height:"100%"},children:[f.jsx("line",{x1:"40",y1:"30",x2:"680",y2:"30",stroke:"#f1f5f9",strokeWidth:"1"}),f.jsx("line",{x1:"40",y1:"80",x2:"680",y2:"80",stroke:"#f1f5f9",strokeWidth:"1"}),f.jsx("line",{x1:"40",y1:"130",x2:"680",y2:"130",stroke:"#f1f5f9",strokeWidth:"1"}),f.jsx("line",{x1:"40",y1:"180",x2:"680",y2:"180",stroke:"#e2e8f0",strokeWidth:"1.5"}),f.jsx("path",{d:`M ${Jt("baseline")}`,fill:"none",stroke:"#94a3b8",strokeWidth:"2.5",strokeDasharray:"6,5"}),f.jsx("path",{d:`M ${Jt("actual")}`,fill:"none",stroke:"#0284c7",strokeWidth:"3.5",strokeLinecap:"round",strokeLinejoin:"round"}),$t.points.map((he,Ve)=>{const rt=620/($t.points.length-1),ot=Ve*rt+40,ft=kt(he.actual);return f.jsxs("g",{children:[he.alert&&f.jsx("circle",{cx:ot,cy:ft,r:"9",fill:"rgba(239, 68, 68, 0.25)",stroke:"#ef4444",strokeWidth:"1.5"}),f.jsx("circle",{cx:ot,cy:ft,r:he.alert?"5":"4",fill:he.alert?"#ef4444":"#0284c7",stroke:"#ffffff",strokeWidth:"2",style:{cursor:"pointer"},onMouseEnter:()=>d(he),onMouseLeave:()=>d(null)}),f.jsx("text",{x:ot,y:"202",textAnchor:"middle",fontSize:"11",fill:"#64748b",fontFamily:"var(--font-mono)",children:he.label})]},Ve)})]}),u&&f.jsxs("div",{style:{position:"absolute",top:"10px",right:"20px",background:"#0f172a",color:"#ffffff",padding:"8px 12px",borderRadius:"8px",fontSize:"12px",boxShadow:"0 4px 12px rgba(0,0,0,0.15)",zIndex:10},children:[f.jsxs("div",{style:{fontWeight:"700",marginBottom:"2px"},children:["Thời điểm: ",u.label]}),f.jsxs("div",{children:["Thực tế: ",f.jsxs("b",{style:{color:"#38bdf8"},children:[u.actual," m³/h"]})]}),f.jsxs("div",{children:["Trung bình: ",f.jsxs("b",{children:[u.baseline," m³/h"]})]}),u.note&&f.jsxs("div",{style:{color:"#f87171",marginTop:"4px",fontWeight:"600"},children:["⚠ ",u.note]})]})]}),f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"8px",fontSize:"12px",color:"#64748b",borderTop:"1px solid #f1f5f9",paddingTop:"10px"},children:[f.jsxs("span",{children:["MNF đêm định mức: ",f.jsx("b",{children:"65 m³/h"})," (Ngưỡng cảnh báo: ",">"," 70 m³/h)"]}),f.jsxs("span",{children:["Hệ số an toàn mạng lưới: ",f.jsx("b",{style:{color:"#16a34a"},children:"1.15 (Đạt chuẩn)"})]})]})]})]})]}),f.jsxs("div",{className:"panel-card",children:[f.jsxs("div",{className:"panel-card-header",children:[f.jsxs("div",{className:"panel-card-title",children:[f.jsx(sx,{size:17,color:"#ef4444"}),f.jsx("span",{children:"Nhật ký sự cố SCADA"})]}),f.jsx("div",{className:"panel-card-actions",children:f.jsx("span",{className:"metric-badge badge-warning",children:"Chờ xử lý"})})]}),f.jsx("div",{className:"data-table-wrapper",children:f.jsxs("table",{className:"custom-table",children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{children:"Mức độ"}),f.jsx("th",{children:"Sự cố"}),f.jsx("th",{children:"Vị trí"}),f.jsx("th",{children:"Giờ"}),f.jsx("th",{children:"Trạng thái"}),f.jsx("th",{children:"Thao tác"})]})}),f.jsx("tbody",{children:v.map(he=>f.jsxs("tr",{children:[f.jsx("td",{children:f.jsx("span",{className:`metric-badge ${he.severity==="danger"?"badge-danger":he.severity==="warning"?"badge-warning":"badge-info"}`,children:he.status})}),f.jsx("td",{style:{fontWeight:"600"},children:he.type}),f.jsx("td",{children:he.location}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:he.time}),f.jsx("td",{children:he.handled?f.jsxs("span",{style:{color:"#10b981",fontWeight:"600",display:"flex",alignItems:"center",gap:"4px"},children:[f.jsx(ys,{size:14})," Đã nhận"]}):f.jsx("span",{style:{color:"#ef4444",fontWeight:"600"},children:"Chưa xử lý"})}),f.jsx("td",{children:f.jsx("button",{className:`btn-sm ${he.handled?"btn-secondary":"btn-primary"}`,onClick:()=>ut(he.id),children:he.handled?"Hoàn tác":"Điều động"})})]},he.id))})]})})]})]}),s==="gis"&&f.jsxs("div",{className:"panel-card",style:{position:"relative"},children:[f.jsxs("div",{className:"panel-card-header",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"panel-card-title",children:[f.jsx(cc,{size:18,color:"#0284c7"}),f.jsx("span",{children:"Mạng 3D Digital Twin (GIS Thủy lực)"})]}),f.jsx("span",{style:{fontSize:"12px",color:"#64748b"},children:"Không gian 3D địa hình, mô phỏng thủy lực thời gian thực và quản lý tài sản theo chuẩn Qatium"})]}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[f.jsxs("button",{className:`btn-sm ${ne?"btn-primary":"btn-secondary"}`,onClick:()=>{Q(!ne),Ye(ne?"Đã mở lại van PRV-02, mạng lưới trở lại bình thường.":"Mô phỏng: Đã đóng van PRV-02! Khu vực DMA 2 đang chạy nguồn dự phòng.")},title:"Mô phỏng đóng ngắt sự cố",children:[f.jsx(Pl,{size:13}),f.jsx("span",{children:ne?"Mở van PRV-02":"Mô phỏng đóng van PRV-02"})]}),f.jsxs("button",{className:"btn-sm btn-secondary",onClick:()=>St("Mo_Hinh_Mang_3D_GIS.csv"),children:[f.jsx(gh,{size:13}),f.jsx("span",{children:"Xuất GIS"})]})]})]}),f.jsxs("div",{className:`map-canvas-container ${I==="dark"?"dark-theme":"light-theme"}`,style:{minHeight:"640px",position:"relative"},children:[f.jsxs("div",{style:{position:"absolute",top:"14px",left:"14px",zIndex:35,display:"flex",flexWrap:"wrap",gap:"8px",alignItems:"center",pointerEvents:"auto"},children:[f.jsxs("div",{className:"qatium-dropdown-container",style:{position:"relative"},children:[f.jsx("div",{className:"qatium-hud-pill-group",children:f.jsxs("button",{className:`qatium-hud-btn ${D==="mode"||P!=="3d"?"active":""}`,onClick:()=>O(D==="mode"?null:"mode"),style:{whiteSpace:"nowrap",display:"flex",alignItems:"center",gap:"6px",fontWeight:600},title:"Chọn chế độ hiển thị không gian (2D, 3D, X-Ray)",children:[f.jsx(K_,{size:13,color:"#38bdf8"}),f.jsxs("span",{children:["Chế độ: ",f.jsx("span",{style:{color:P==="xray"?"#38bdf8":"#ffffff"},children:P==="3d"?"3D":P==="2d"?"2D":"X-Ray"})]}),f.jsx(Nl,{size:12,style:{transform:D==="mode"?"rotate(180deg)":"none",transition:"transform 0.2s"}})]})}),D==="mode"&&f.jsxs("div",{style:{position:"absolute",top:"calc(100% + 6px)",left:0,minWidth:"240px",background:"rgba(11, 20, 38, 0.96)",backdropFilter:"blur(14px)",border:"1px solid rgba(56, 189, 248, 0.35)",borderRadius:"8px",boxShadow:"0 12px 30px -4px rgba(0, 0, 0, 0.7), 0 0 15px rgba(2, 132, 199, 0.25)",padding:"6px",zIndex:100},children:[f.jsx("div",{style:{padding:"6px 10px",fontSize:"11px",fontWeight:700,color:"#38bdf8",textTransform:"uppercase",letterSpacing:"0.05em",borderBottom:"1px solid rgba(255,255,255,0.08)",marginBottom:"4px"},children:"Chế độ không gian"}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 10px",borderRadius:"6px",cursor:"pointer",background:P==="3d"?"rgba(2, 132, 199, 0.25)":"transparent",color:P==="3d"?"#38bdf8":"#cbd5e1",transition:"all 0.15s ease"},onClick:()=>{F("3d"),O(null)},children:[P==="3d"?f.jsx(mh,{size:14,color:"#38bdf8"}):f.jsx(ph,{size:14,color:"#64748b"}),f.jsxs("div",{children:[f.jsx("div",{style:{fontSize:"12.5px",fontWeight:600},children:"3D (Digital Twin)"}),f.jsx("div",{style:{fontSize:"11px",color:"#94a3b8"},children:"Phối cảnh không gian 3D chuẩn Qatium"})]})]}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 10px",borderRadius:"6px",cursor:"pointer",background:P==="2d"?"rgba(2, 132, 199, 0.25)":"transparent",color:P==="2d"?"#38bdf8":"#cbd5e1",transition:"all 0.15s ease"},onClick:()=>{F("2d"),O(null)},children:[P==="2d"?f.jsx(mh,{size:14,color:"#38bdf8"}):f.jsx(ph,{size:14,color:"#64748b"}),f.jsxs("div",{children:[f.jsx("div",{style:{fontSize:"12.5px",fontWeight:600},children:"2D (Mặt phẳng)"}),f.jsx("div",{style:{fontSize:"11px",color:"#94a3b8"},children:"Bản đồ quy hoạch nhìn từ trên xuống"})]})]}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 10px",borderRadius:"6px",cursor:"pointer",background:P==="xray"?"rgba(2, 132, 199, 0.25)":"transparent",color:P==="xray"?"#38bdf8":"#cbd5e1",transition:"all 0.15s ease"},onClick:()=>{F("xray"),O(null)},children:[P==="xray"?f.jsx(mh,{size:14,color:"#38bdf8"}):f.jsx(ph,{size:14,color:"#64748b"}),f.jsxs("div",{children:[f.jsx("div",{style:{fontSize:"12.5px",fontWeight:600,color:"#38bdf8"},children:"X-Ray (Trong suốt công trình)"}),f.jsx("div",{style:{fontSize:"11px",color:"#94a3b8"},children:"Làm trong suốt khối nhà để soi mạng ống ngầm"})]})]})]})]}),f.jsxs("div",{className:"qatium-dropdown-container",style:{position:"relative"},children:[f.jsx("div",{className:"qatium-hud-pill-group",children:f.jsxs("button",{className:`qatium-hud-btn ${D==="pipes"?"active":""}`,onClick:()=>O(D==="pipes"?null:"pipes"),style:{whiteSpace:"nowrap",display:"flex",alignItems:"center",gap:"6px",fontWeight:600},title:"Bật/tắt các cấp tuyến ống dẫn nước",children:[f.jsx(Js,{size:13,color:"#00f0ff"}),f.jsxs("span",{children:["Đường ống (",[B.pipesPrimary,B.pipesSecondary,B.pipesService].filter(Boolean).length,"/3)"]}),f.jsx(Nl,{size:12,style:{transform:D==="pipes"?"rotate(180deg)":"none",transition:"transform 0.2s"}})]})}),D==="pipes"&&f.jsxs("div",{style:{position:"absolute",top:"calc(100% + 6px)",left:0,minWidth:"240px",background:"rgba(11, 20, 38, 0.96)",backdropFilter:"blur(14px)",border:"1px solid rgba(56, 189, 248, 0.35)",borderRadius:"8px",boxShadow:"0 12px 30px -4px rgba(0, 0, 0, 0.7), 0 0 15px rgba(2, 132, 199, 0.25)",padding:"6px",zIndex:100},children:[f.jsx("div",{style:{padding:"6px 10px",fontSize:"11px",fontWeight:700,color:"#00f0ff",textTransform:"uppercase",letterSpacing:"0.05em",borderBottom:"1px solid rgba(255,255,255,0.08)",marginBottom:"4px"},children:"Mạng lưới đường ống"}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 10px",borderRadius:"6px",cursor:"pointer",color:B.pipesPrimary?"#ffffff":"#94a3b8",transition:"all 0.15s ease"},onClick:he=>{he.stopPropagation(),G(Ve=>({...Ve,pipesPrimary:!Ve.pipesPrimary}))},children:[B.pipesPrimary?f.jsx(gr,{size:15,color:"#0284c7"}):f.jsx(vr,{size:15,color:"#64748b"}),f.jsxs("div",{style:{flex:1},children:[f.jsx("div",{style:{fontSize:"12.5px",fontWeight:600},children:"Cấp 1 (D500 - D800)"}),f.jsx("div",{style:{fontSize:"11px",color:"#94a3b8"},children:"Tuyến truyền dẫn chính từ NMN Sông Đà"})]})]}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 10px",borderRadius:"6px",cursor:"pointer",color:B.pipesSecondary?"#ffffff":"#94a3b8",transition:"all 0.15s ease"},onClick:he=>{he.stopPropagation(),G(Ve=>({...Ve,pipesSecondary:!Ve.pipesSecondary}))},children:[B.pipesSecondary?f.jsx(gr,{size:15,color:"#f97316"}):f.jsx(vr,{size:15,color:"#64748b"}),f.jsxs("div",{style:{flex:1},children:[f.jsx("div",{style:{fontSize:"12.5px",fontWeight:600},children:"Cấp 2 (D200 - D300)"}),f.jsx("div",{style:{fontSize:"11px",color:"#94a3b8"},children:"Mạch vòng phân phối liên phường"})]})]}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 10px",borderRadius:"6px",cursor:"pointer",color:B.pipesService?"#ffffff":"#94a3b8",transition:"all 0.15s ease"},onClick:he=>{he.stopPropagation(),G(Ve=>({...Ve,pipesService:!Ve.pipesService}))},children:[B.pipesService?f.jsx(gr,{size:15,color:"#eab308"}):f.jsx(vr,{size:15,color:"#64748b"}),f.jsxs("div",{style:{flex:1},children:[f.jsx("div",{style:{fontSize:"12.5px",fontWeight:600},children:"Cấp 3 (Đấu Nối Tòa Nhà)"}),f.jsx("div",{style:{fontSize:"11px",color:"#94a3b8"},children:"Nhánh dịch vụ dẫn vào chân công trình"})]})]})]})]}),f.jsxs("div",{className:"qatium-dropdown-container",style:{position:"relative"},children:[f.jsx("div",{className:"qatium-hud-pill-group",children:f.jsxs("button",{className:`qatium-hud-btn ${D==="devices"?"active":""}`,onClick:()=>O(D==="devices"?null:"devices"),style:{whiteSpace:"nowrap",display:"flex",alignItems:"center",gap:"6px",fontWeight:600},title:"Bật/tắt các loại thiết bị mạng lưới & quan trắc",children:[f.jsx(Pl,{size:13,color:"#38bdf8"}),f.jsxs("span",{children:["Thiết bị (",[B.valves,B.sensors,B.hydrants,B.tanks].filter(Boolean).length,"/4)"]}),f.jsx(Nl,{size:12,style:{transform:D==="devices"?"rotate(180deg)":"none",transition:"transform 0.2s"}})]})}),D==="devices"&&f.jsxs("div",{style:{position:"absolute",top:"calc(100% + 6px)",left:0,minWidth:"230px",background:"rgba(11, 20, 38, 0.96)",backdropFilter:"blur(14px)",border:"1px solid rgba(56, 189, 248, 0.35)",borderRadius:"8px",boxShadow:"0 12px 30px -4px rgba(0, 0, 0, 0.7), 0 0 15px rgba(2, 132, 199, 0.25)",padding:"6px",zIndex:100},children:[f.jsx("div",{style:{padding:"6px 10px",fontSize:"11px",fontWeight:700,color:"#38bdf8",textTransform:"uppercase",letterSpacing:"0.05em",borderBottom:"1px solid rgba(255,255,255,0.08)",marginBottom:"4px"},children:"Thiết bị & Quan trắc SCADA"}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 10px",borderRadius:"6px",cursor:"pointer",color:B.valves?"#ffffff":"#94a3b8",transition:"all 0.15s ease"},onClick:he=>{he.stopPropagation(),G(Ve=>({...Ve,valves:!Ve.valves}))},children:[B.valves?f.jsx(gr,{size:15,color:"#38bdf8"}):f.jsx(vr,{size:15,color:"#64748b"}),f.jsx("span",{style:{fontSize:"12.5px",fontWeight:600},children:"Van PRV & Chốt cách ly"})]}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 10px",borderRadius:"6px",cursor:"pointer",color:B.sensors?"#ffffff":"#94a3b8",transition:"all 0.15s ease"},onClick:he=>{he.stopPropagation(),G(Ve=>({...Ve,sensors:!Ve.sensors}))},children:[B.sensors?f.jsx(gr,{size:15,color:"#38bdf8"}):f.jsx(vr,{size:15,color:"#64748b"}),f.jsx("span",{style:{fontSize:"12.5px",fontWeight:600},children:"Cảm biến áp & lưu lượng"})]}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 10px",borderRadius:"6px",cursor:"pointer",color:B.hydrants?"#ffffff":"#94a3b8",transition:"all 0.15s ease"},onClick:he=>{he.stopPropagation(),G(Ve=>({...Ve,hydrants:!Ve.hydrants}))},children:[B.hydrants?f.jsx(gr,{size:15,color:"#ef4444"}):f.jsx(vr,{size:15,color:"#64748b"}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[f.jsx(q_,{size:13,color:"#ef4444"}),f.jsx("span",{style:{fontSize:"12.5px",fontWeight:600},children:"Trụ PCCC (38 trụ)"})]})]}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 10px",borderRadius:"6px",cursor:"pointer",color:B.tanks?"#ffffff":"#94a3b8",transition:"all 0.15s ease"},onClick:he=>{he.stopPropagation(),G(Ve=>({...Ve,tanks:!Ve.tanks}))},children:[B.tanks?f.jsx(gr,{size:15,color:"#38bdf8"}):f.jsx(vr,{size:15,color:"#64748b"}),f.jsx("span",{style:{fontSize:"12.5px",fontWeight:600},children:"Đài nước & Trạm bơm"})]})]})]}),f.jsxs("div",{className:"qatium-dropdown-container",style:{position:"relative"},children:[f.jsx("div",{className:"qatium-hud-pill-group",children:f.jsxs("button",{className:`qatium-hud-btn ${D==="buildings"?"active":""}`,onClick:()=>O(D==="buildings"?null:"buildings"),style:{whiteSpace:"nowrap",display:"flex",alignItems:"center",gap:"6px",fontWeight:600},title:"Bật/tắt khối nhà 3D và tên đường",children:[f.jsx(cc,{size:13,color:"#38bdf8"}),f.jsxs("span",{children:["Công trình (",[B.buildings,B.streetLabels].filter(Boolean).length,"/2)"]}),f.jsx(Nl,{size:12,style:{transform:D==="buildings"?"rotate(180deg)":"none",transition:"transform 0.2s"}})]})}),D==="buildings"&&f.jsxs("div",{style:{position:"absolute",top:"calc(100% + 6px)",left:0,minWidth:"220px",background:"rgba(11, 20, 38, 0.96)",backdropFilter:"blur(14px)",border:"1px solid rgba(56, 189, 248, 0.35)",borderRadius:"8px",boxShadow:"0 12px 30px -4px rgba(0, 0, 0, 0.7), 0 0 15px rgba(2, 132, 199, 0.25)",padding:"6px",zIndex:100},children:[f.jsx("div",{style:{padding:"6px 10px",fontSize:"11px",fontWeight:700,color:"#38bdf8",textTransform:"uppercase",letterSpacing:"0.05em",borderBottom:"1px solid rgba(255,255,255,0.08)",marginBottom:"4px"},children:"Địa hình & Kiến trúc"}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 10px",borderRadius:"6px",cursor:"pointer",color:B.buildings?"#ffffff":"#94a3b8",transition:"all 0.15s ease"},onClick:he=>{he.stopPropagation(),G(Ve=>({...Ve,buildings:!Ve.buildings}))},children:[B.buildings?f.jsx(gr,{size:15,color:"#38bdf8"}):f.jsx(vr,{size:15,color:"#64748b"}),f.jsx("span",{style:{fontSize:"12.5px",fontWeight:600},children:"Khối Nhà 3D"})]}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 10px",borderRadius:"6px",cursor:"pointer",color:B.streetLabels?"#ffffff":"#94a3b8",transition:"all 0.15s ease"},onClick:he=>{he.stopPropagation(),G(Ve=>({...Ve,streetLabels:!Ve.streetLabels}))},children:[B.streetLabels?f.jsx(gr,{size:15,color:"#38bdf8"}):f.jsx(vr,{size:15,color:"#64748b"}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[f.jsx(ax,{size:13,color:"#38bdf8"}),f.jsx("span",{style:{fontSize:"12.5px",fontWeight:600},children:"Tên đường (Maps)"})]})]})]})]}),f.jsxs("div",{className:"qatium-hud-pill-group",style:{padding:"5px 12px",fontSize:"11.5px",fontWeight:600,display:"inline-flex",alignItems:"center",gap:"6px",cursor:"pointer",color:"#cbd5e1"},onClick:()=>Ee("VALVE-08"),title:"Click để mô phỏng đóng/mở chốt van VALVE-08",children:[f.jsx("span",{style:{color:Te["VALVE-08"]?"#ef4444":"#10b981",fontSize:"14px",lineHeight:1},children:"●"}),f.jsxs("span",{style:{color:"#ffffff",letterSpacing:"0.02em"},children:["VALVE-08: ",Te["VALVE-08"]?"ĐÃ ĐÓNG":"MỞ"]}),f.jsx("span",{style:{fontSize:"11px"},children:Te["VALVE-08"]?"🔒":"🔓"})]})]}),f.jsx(eg,{theme:I,heatmap:E,viewMode:P,assetsLayer:B,isolatedPipe:ne,closedValves:Te,onToggleValve:Ee,simTime:$,currentSim:Ze,onSelectAsset:he=>ee(he)}),Y&&f.jsxs("div",{className:"qatium-inspector-drawer",children:[f.jsxs("div",{className:"inspector-header",children:[f.jsxs("div",{className:"inspector-title",children:[f.jsx(cc,{size:16,color:"#0284c7"}),f.jsx("span",{children:Y.name})]}),f.jsx("button",{className:"inspector-close-btn",onClick:()=>ee(null),"aria-label":"Đóng thanh thông tin",children:f.jsx(Hm,{size:16})})]}),f.jsxs("div",{className:"inspector-body",children:[f.jsxs("div",{children:[f.jsxs("span",{className:"metric-badge badge-info",style:{marginBottom:"6px"},children:["Mã ID: ",Y.id]}),f.jsx("div",{style:{fontSize:"12px",color:"#64748b"},children:Y.type})]}),Y.isCutOff&&f.jsxs("div",{style:{padding:"10px",borderRadius:"6px",background:"rgba(239, 68, 68, 0.15)",border:"1px solid #ef4444",color:"#dc2626",marginTop:"6px"},children:[f.jsxs("div",{style:{fontWeight:700,fontSize:"12.5px",display:"flex",alignItems:"center",gap:"6px"},children:[f.jsx(ws,{size:15,color:"#dc2626"}),f.jsx("span",{children:"CÔNG TRÌNH ĐANG BỊ CẮT NƯỚC!"})]}),f.jsxs("div",{style:{fontSize:"11.5px",marginTop:"4px",color:"#991b1b"},children:["Chốt van ",f.jsx("b",{children:Y.cutOffValveName||"phân đoạn"})," đang bị đóng để cô lập sự cố. Áp lực cấp nước đo được: ",f.jsx("b",{children:"0.00 bar"}),"."]})]}),Y.zoneDescription&&f.jsxs("div",{style:{marginTop:"6px",padding:"10px",borderRadius:"6px",background:"rgba(239, 68, 68, 0.1)",border:"1px solid rgba(239, 68, 68, 0.3)"},children:[f.jsxs("div",{style:{color:"#dc2626",fontWeight:700,fontSize:"12px",display:"flex",alignItems:"center",gap:"5px"},children:[f.jsx(ws,{size:14}),f.jsx("span",{children:"PHẠM VI ẢNH HƯỞNG KHI KHÓA VAN:"})]}),f.jsxs("div",{style:{fontSize:"12px",marginTop:"4px"},children:[f.jsx("b",{children:"Khu vực:"})," ",Y.zoneDescription]}),f.jsxs("div",{style:{fontSize:"12px"},children:[f.jsx("b",{children:"Công trình:"})," ",Y.affectedBuildings]}),f.jsxs("div",{style:{fontSize:"12px"},children:[f.jsx("b",{children:"Số hộ dân mất nước:"})," ",f.jsx("span",{style:{color:"#dc2626",fontWeight:700},children:Y.householdsAffected})]})]}),f.jsxs("div",{className:"inspector-grid",children:[f.jsxs("div",{className:"inspector-metric-box",children:[f.jsx("span",{className:"inspector-metric-label",children:"Áp Lực SCADA"}),f.jsx("span",{className:"inspector-metric-val",children:Y.pressure||Y.inletPressure||"N/A"})]}),f.jsxs("div",{className:"inspector-metric-box",children:[f.jsx("span",{className:"inspector-metric-label",children:"Lưu Lượng Cấp"}),f.jsx("span",{className:"inspector-metric-val",children:Y.flow||"N/A"})]}),f.jsxs("div",{className:"inspector-metric-box",children:[f.jsx("span",{className:"inspector-metric-label",children:"Cao Độ Z"}),f.jsx("span",{className:"inspector-metric-val",children:Y.elevation||"+0.0m"})]}),f.jsxs("div",{className:"inspector-metric-box",children:[f.jsx("span",{className:"inspector-metric-label",children:"Tổn Thất / Cột Áp"}),f.jsx("span",{className:"inspector-metric-val",children:Y.headloss||Y.head||Y.level||"Tối ưu"})]})]}),f.jsxs("div",{style:{fontSize:"12.5px",display:"flex",flexDirection:"column",gap:"6px",borderTop:"1px solid var(--border-light)",paddingTop:"10px"},children:[f.jsxs("div",{children:[f.jsx("b",{children:"Trạng thái:"})," ",f.jsx("span",{style:{color:Y.status.includes("Cảnh báo")||Y.status.includes("ĐÓNG")?"#dc2626":"#16a34a"},children:Y.status})]}),Y.tier&&f.jsxs("div",{children:[f.jsx("b",{children:"Cấp kỹ thuật:"})," ",f.jsx("span",{style:{color:"#0284c7",fontWeight:600},children:Y.tier})]}),Y.floors&&f.jsxs("div",{children:[f.jsx("b",{children:"Quy mô tầng:"})," ",Y.floors]}),Y.connectionPipe&&f.jsxs("div",{children:[f.jsx("b",{children:"Ống dịch vụ đấu nối:"})," ",f.jsx("span",{style:{color:"#d97706",fontWeight:600},children:Y.connectionPipe})]}),Y.cisternCapacity&&f.jsxs("div",{children:[f.jsx("b",{children:"Bể chứa ngầm tòa nhà:"})," ",Y.cisternCapacity]}),Y.meterId&&f.jsxs("div",{children:[f.jsx("b",{children:"Đồng hồ điện từ AMR:"})," ",Y.meterId]}),Y.material&&f.jsxs("div",{children:[f.jsx("b",{children:"Vật liệu:"})," ",Y.material]}),Y.diameter&&f.jsxs("div",{children:[f.jsx("b",{children:"Đường kính danh định:"})," ",Y.diameter]}),Y.households&&f.jsxs("div",{children:[f.jsx("b",{children:"Quy mô phụ tải:"})," ",Y.households]}),Y.power&&f.jsxs("div",{children:[f.jsx("b",{children:"Công suất truyền động:"})," ",Y.power]}),f.jsxs("div",{children:[f.jsx("b",{children:"Khu vực phụ trách:"})," ",Y.dma]})]}),f.jsxs("div",{className:"inspector-actions",children:[Y.id&&Y.id.startsWith("VALVE-")&&f.jsxs("button",{className:"btn-sm",style:{background:Te[Y.id]?"#16a34a":"#dc2626",color:"#ffffff",fontWeight:700,padding:"8px 12px",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",borderRadius:"6px",border:"none",cursor:"pointer"},onClick:()=>Ee(Y.id),children:[f.jsx(Pl,{size:14}),f.jsx("span",{children:Te[Y.id]?`🔓 MỞ LẠI CHỐT ${Y.id} (CẤP LẠI NƯỚC)`:`🔒 ĐÓNG CHỐT ${Y.id} (CÔ LẬP CẮT NƯỚC)`})]}),Y.id==="PRV-02"&&f.jsxs("button",{className:"btn-sm btn-primary",onClick:()=>{Q(!ne),Ye(ne?"Đã mở lại van PRV-02!":"Đã đóng van PRV-02!")},children:[f.jsx(Pl,{size:13}),f.jsx("span",{children:ne?"Mở lại van PRV-02":"Mô phỏng đóng ngắt (Shutdown)"})]}),f.jsxs("button",{className:"btn-sm btn-secondary",onClick:()=>Ye(`Đang trích xuất đồ thị áp lực 24h cho ${Y.id}...`),children:[f.jsx(so,{size:13}),f.jsx("span",{children:"Đồ thị áp lực 24h"})]}),f.jsxs("button",{className:"btn-sm btn-secondary",onClick:()=>Ye(`Đã tạo lệnh điều động kỹ sư kiểm tra ${Y.id}`),children:[f.jsx(ys,{size:13}),f.jsx("span",{children:"Tạo phiếu bảo trì"})]})]})]})]}),f.jsxs("div",{className:"qatium-timeline-bar",style:{padding:"8px 16px",display:"flex",alignItems:"center",gap:"14px",background:"rgba(11, 20, 38, 0.95)",backdropFilter:"blur(16px)",border:"1px solid rgba(56, 189, 248, 0.28)",borderRadius:"10px",boxShadow:"0 8px 30px rgba(0, 0, 0, 0.65)"},children:[f.jsx("button",{className:"timeline-play-btn",onClick:()=>{de(!H),Ye(H?"Đã tạm dừng mô phỏng 24h":"Đang chạy mô phỏng biến thiên thủy lực 24h...")},title:H?"Tạm dừng mô phỏng":"Chạy mô phỏng biến thiên 24h",style:{width:"36px",height:"36px",borderRadius:"50%",background:H?"#0284c7":"#0369a1",border:"none",color:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",flexShrink:0,boxShadow:"0 0 12px rgba(2, 132, 199, 0.45)"},children:H?f.jsx(J_,{size:16}):f.jsx(ex,{size:16,style:{marginLeft:"2px"}})}),f.jsxs("div",{style:{display:"flex",flexDirection:"column",minWidth:"180px",flexShrink:0},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[f.jsx(so,{size:13,color:"#38bdf8"}),f.jsx("span",{style:{fontSize:"13px",fontWeight:700,color:"#f8fafc",letterSpacing:"0.02em"},children:Ze.label})]}),f.jsxs("div",{style:{fontSize:"11px",color:"#94a3b8",marginTop:"2px",display:"flex",gap:"8px"},children:[f.jsxs("span",{children:["Q = ",f.jsxs("b",{style:{color:"#38bdf8"},children:[Ze.flow," m³/h"]})]}),f.jsx("span",{children:"·"}),f.jsxs("span",{children:["P = ",f.jsxs("b",{style:{color:"#f59e0b"},children:[Ze.pressure," bar"]})]})]})]}),f.jsx("div",{style:{flex:1,position:"relative",height:"46px",display:"flex",alignItems:"center"},children:f.jsxs("svg",{viewBox:"0 0 460 44",style:{width:"100%",height:"100%",overflow:"visible",cursor:"pointer"},onClick:he=>{const Ve=he.currentTarget.getBoundingClientRect(),V=he.clientX-Ve.left,rt=Math.max(0,Math.min(1,V/Ve.width)),ot=Math.round(rt*23);re(ot)},children:[f.jsx("defs",{children:f.jsxs("linearGradient",{id:"flowGrad24",x1:"0",y1:"0",x2:"0",y2:"1",children:[f.jsx("stop",{offset:"0%",stopColor:"#0284c7",stopOpacity:"0.45"}),f.jsx("stop",{offset:"100%",stopColor:"#0284c7",stopOpacity:"0.02"})]})}),f.jsx("path",{d:"M 10 38 L 10 30 Q 50 36 70 36 T 130 18 T 190 24 T 270 23 T 350 12 T 410 26 T 450 34 L 450 38 Z",fill:"url(#flowGrad24)"}),f.jsx("path",{d:"M 10 30 Q 50 36 70 36 T 130 18 T 190 24 T 270 23 T 350 12 T 410 26 T 450 34",fill:"none",stroke:"#0284c7",strokeWidth:"2.2"}),f.jsx("path",{d:"M 10 16 Q 50 12 70 11 T 130 26 T 190 22 T 270 23 T 350 32 T 410 21 T 450 14",fill:"none",stroke:"#f59e0b",strokeWidth:"1.6",strokeDasharray:"3 3",opacity:"0.85"}),Array.from({length:24}).map((he,Ve)=>{const V=10+Ve/23*440,rt=Ve===$;return f.jsxs("g",{children:[f.jsx("line",{x1:V,y1:8,x2:V,y2:38,stroke:rt?"#38bdf8":"rgba(255,255,255,0.08)",strokeWidth:rt?2:1}),Ve%3===0&&f.jsxs("text",{x:V,y:43,textAnchor:"middle",fontSize:"8.5",fill:rt?"#38bdf8":"#64748b",fontWeight:rt?"bold":"normal",children:[Ve,"h"]})]},Ve)}),(()=>{const he=10+$/23*440;return f.jsxs("g",{children:[f.jsx("line",{x1:he,y1:2,x2:he,y2:38,stroke:"#38bdf8",strokeWidth:"2.5"}),f.jsx("circle",{cx:he,cy:6,r:"4",fill:"#38bdf8",stroke:"#ffffff",strokeWidth:"1.5"})]})})()]})}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexShrink:0},children:[f.jsx("span",{className:`metric-badge ${$>=2&&$<=4?"badge-danger":$>=6&&$<=8||$>=18&&$<=20?"badge-warning":"badge-success"}`,style:{fontSize:"11px",padding:"4px 8px"},children:Ze.status}),f.jsx("button",{className:"btn-sm btn-secondary",onClick:()=>re(14),title:"Đặt lại giờ mặc định (14:00)",style:{padding:"6px"},children:f.jsx(ix,{size:13})})]})]})]})]}),s==="telemetry"&&f.jsxs("div",{className:"panel-card",children:[f.jsxs("div",{className:"panel-card-header",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"panel-card-title",children:[f.jsx(Rl,{size:18,color:"#0284c7"}),f.jsx("span",{children:"Dữ liệu Áp & Lưu lượng"})]}),f.jsx("span",{style:{fontSize:"12px",color:"#64748b"},children:"6 điểm quan trắc tự động (SCADA)"})]}),f.jsx("button",{className:"btn-sm btn-primary",onClick:()=>St("Du_Lieu_Telemetry_6_Diem_Do.csv"),children:"Xuất Excel"})]}),f.jsx("div",{className:"data-table-wrapper",children:f.jsxs("table",{className:"custom-table",children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{children:"Điểm đo"}),f.jsx("th",{children:"Khu vực"}),f.jsx("th",{children:"Lưu lượng"}),f.jsx("th",{children:"Áp lực (bar)"}),f.jsx("th",{children:"Dải chuẩn"}),f.jsx("th",{children:"Chênh lệch"}),f.jsx("th",{children:"Trạng thái"})]})}),f.jsx("tbody",{children:[{node:"FM-01 / Trạm bơm Tăng áp Trung tâm",zone:"Đầu nguồn cấp Lê Văn Lương",flow:"450.8 m³/h",press:"4.2 bar",range:"3.8 - 4.5 bar",delta:"+0.1 bar",status:"Tối ưu",tag:"badge-success"},{node:"PRV-02 / Cổng vào DMA THNC-01",zone:"Hoàng Minh Giám - Amsterdam",flow:"128.2 m³/h",press:"3.1 bar",range:"2.8 - 3.4 bar",delta:"-0.2 bar",status:"Ổn định",tag:"badge-info"},{node:"PRV-03 / Trục chính DMA THNC-02",zone:"Hoàng Đạo Thúy - Tháp 34T",flow:"185.4 m³/h",press:"3.2 bar",range:"2.8 - 3.5 bar",delta:"+0.0 bar",status:"Ổn định",tag:"badge-info"},{node:"FM-04 / Điểm cao DMA THNC-03",zone:"Charmvit & Grand Plaza",flow:"142.2 m³/h",press:"3.4 bar",range:"2.5 - 3.2 bar",delta:"+0.4 bar",status:"Cảnh báo Áp cao",tag:"badge-warning"},{node:"SN-05 / Cụm cư dân 17T1 - 17T4",zone:"DMA THNC-02 (Hoàng Đạo Thúy)",flow:"48.4 m³/h",press:"2.4 bar",range:"2.8 - 3.4 bar",delta:"-0.5 bar",status:"Sụt áp cục bộ",tag:"badge-danger"},{node:"FM-06 / Tuyến xả cặn Hố van Big C",zone:"Khuất Duy Tiến - D'Capitale",flow:"0.0 m³/h",press:"3.0 bar",range:"2.8 - 3.5 bar",delta:"0.0 bar",status:"Đang khóa",tag:"badge-info"}].map((he,Ve)=>f.jsxs("tr",{children:[f.jsx("td",{style:{fontWeight:"700"},children:he.node}),f.jsx("td",{children:he.zone}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:he.flow}),f.jsx("td",{style:{fontWeight:"700",color:"#0284c7"},children:he.press}),f.jsx("td",{style:{color:"#64748b"},children:he.range}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:he.delta}),f.jsx("td",{children:f.jsx("span",{className:`metric-badge ${he.tag}`,children:he.status})})]},Ve))})]})})]}),s==="leaks"&&f.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[f.jsxs("div",{className:"metrics-grid",children:[f.jsxs("div",{className:"metric-card",children:[f.jsxs("div",{className:"metric-header",children:[f.jsx("span",{children:"Lưu lượng đêm (MNF)"}),f.jsx(zm,{size:18,color:"#d97706"})]}),f.jsxs("div",{className:"metric-body",children:[f.jsx("span",{className:"metric-value",children:"65.2"}),f.jsx("span",{className:"metric-unit",children:"m³/h"})]}),f.jsx("span",{className:"metric-badge badge-warning",children:"Khung 02:00 - 04:00"})]}),f.jsxs("div",{className:"metric-card",children:[f.jsxs("div",{className:"metric-header",children:[f.jsx("span",{children:"Tỷ lệ thất thoát"}),f.jsx(ws,{size:18,color:"#ef4444"})]}),f.jsx("div",{className:"metric-body",children:f.jsx("span",{className:"metric-value",style:{color:"#ef4444"},children:"12.5%"})}),f.jsx("span",{className:"metric-badge badge-danger",children:"~18.2 m³/h rò rỉ"})]}),f.jsxs("div",{className:"metric-card",children:[f.jsxs("div",{className:"metric-header",children:[f.jsx("span",{children:"Nghi vấn rò rỉ"}),f.jsx(ys,{size:18,color:"#10b981"})]}),f.jsxs("div",{className:"metric-body",children:[f.jsx("span",{className:"metric-value",children:"2"}),f.jsx("span",{className:"metric-unit",children:"tuyến ống"})]}),f.jsx("span",{className:"metric-badge badge-info",children:"Cần dò sóng âm"})]})]}),f.jsxs("div",{className:"panel-card",children:[f.jsxs("div",{className:"panel-card-header",children:[f.jsxs("div",{className:"panel-card-title",children:[f.jsx(ws,{size:17,color:"#d97706"}),f.jsx("span",{children:"Xếp hạng thất thoát theo Phân vùng DMA (KĐT Trung Hòa – Nhân Chính)"})]}),f.jsxs("button",{className:"btn-sm btn-primary",disabled:te,onClick:le,style:{display:"flex",alignItems:"center",gap:"6px"},children:[f.jsx(tx,{size:14,className:te?"animate-spin":""}),f.jsx("span",{children:te?"Đang phân tích tương quan âm...":"Chạy Dò Sóng Âm Tương Quan"})]})]}),f.jsx("div",{className:"data-table-wrapper",children:f.jsxs("table",{className:"custom-table",children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{children:"Vùng DMA"}),f.jsx("th",{children:"Quy mô phụ tải"}),f.jsx("th",{children:"Lưu lượng cấp TB"}),f.jsx("th",{children:"Lưu lượng đêm (MNF)"}),f.jsx("th",{children:"Tỷ lệ NRW"}),f.jsx("th",{children:"Mức ưu tiên xử lý"})]})}),f.jsxs("tbody",{children:[f.jsxs("tr",{children:[f.jsx("td",{style:{fontWeight:"700"},children:"DMA THNC-02 (Lõi Hoàng Đạo Thúy & Tháp 34T)"}),f.jsx("td",{children:"4.200 Căn hộ (~18.000 dân)"}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:"185.4 m³/h"}),f.jsx("td",{style:{fontFamily:"var(--font-mono)",color:"#ef4444",fontWeight:700},children:"42.5 m³/h"}),f.jsx("td",{style:{fontWeight:"700",color:"#ef4444"},children:"13.2%"}),f.jsx("td",{children:f.jsx("span",{className:"metric-badge badge-danger",children:"Rất Cao (Khẩn cấp)"})})]}),f.jsxs("tr",{children:[f.jsx("td",{style:{fontWeight:"700"},children:"DMA THNC-01 (Hoàng Minh Giám - Cụm Amsterdam)"}),f.jsx("td",{children:"3.100 Căn hộ + Trường học"}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:"128.2 m³/h"}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:"26.0 m³/h"}),f.jsx("td",{style:{fontWeight:"700",color:"#f59e0b"},children:"11.8%"}),f.jsx("td",{children:f.jsx("span",{className:"metric-badge badge-warning",children:"Trung Bình"})})]}),f.jsxs("tr",{children:[f.jsx("td",{style:{fontWeight:"700"},children:"DMA THNC-03 (Trần Duy Hưng - Charmvit Tower)"}),f.jsx("td",{children:"2.800 Căn hộ & Khách sạn"}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:"142.2 m³/h"}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:"19.5 m³/h"}),f.jsx("td",{style:{fontWeight:"700",color:"#10b981"},children:"10.5%"}),f.jsx("td",{children:f.jsx("span",{className:"metric-badge badge-success",children:"Thấp (Tốt)"})})]})]})]})}),ie&&f.jsxs("div",{style:{marginTop:"16px",padding:"16px",background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:"8px"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#15803d",fontWeight:700,fontSize:"14px"},children:[f.jsx(ys,{size:18}),f.jsx("span",{children:"KẾT QUẢ ĐỊNH VỊ RÒ RỈ BẰNG THUẬT TOÁN TƯƠNG QUAN ÂM HỌC (ACOUSTIC CORRELATION)"})]}),f.jsxs("span",{className:"metric-badge badge-success",children:["Độ tin cậy: ",ie.confidence]})]}),f.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"10px",fontSize:"12.5px",marginTop:"10px"},children:[f.jsxs("div",{children:[f.jsx("b",{children:"Tọa độ định vị:"})," ",f.jsx("span",{style:{color:"#0f172a"},children:ie.location})]}),f.jsxs("div",{children:[f.jsx("b",{children:"Độ sâu chôn ống:"})," ",f.jsx("span",{style:{color:"#0f172a"},children:ie.depth})]}),f.jsxs("div",{children:[f.jsx("b",{children:"Cỡ & Vật liệu ống:"})," ",f.jsx("span",{style:{color:"#0284c7",fontWeight:600},children:ie.pipe})]}),f.jsxs("div",{children:[f.jsx("b",{children:"Lưu lượng thất thoát ước tính:"})," ",f.jsx("span",{style:{color:"#dc2626",fontWeight:700},children:ie.lossRate})]}),f.jsxs("div",{children:[f.jsx("b",{children:"Phổ tần số rung động:"})," ",f.jsx("span",{style:{fontFamily:"var(--font-mono)"},children:ie.frequency})]}),f.jsxs("div",{children:[f.jsx("b",{children:"Đề xuất xử lý:"})," ",f.jsx("span",{style:{color:"#d97706",fontWeight:600},children:ie.recommendedAction})]})]})]})]})]}),s==="quality"&&f.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[f.jsxs("div",{className:"metrics-grid",children:[f.jsxs("div",{className:"metric-card",children:[f.jsxs("div",{className:"metric-header",children:[f.jsx("span",{children:"Độ đục (Turbidity)"}),f.jsx(Js,{size:18,color:"#0284c7"})]}),f.jsxs("div",{className:"metric-body",children:[f.jsx("span",{className:"metric-value",children:"0.85"}),f.jsx("span",{className:"metric-unit",children:"NTU"})]}),f.jsx("span",{className:"metric-badge badge-success",children:"Chuẩn QCVN (< 2.0 NTU)"})]}),f.jsxs("div",{className:"metric-card",children:[f.jsxs("div",{className:"metric-header",children:[f.jsx("span",{children:"Clo dư (Chlorine)"}),f.jsx(ys,{size:18,color:"#10b981"})]}),f.jsxs("div",{className:"metric-body",children:[f.jsx("span",{className:"metric-value",children:"0.42"}),f.jsx("span",{className:"metric-unit",children:"mg/L"})]}),f.jsx("span",{className:"metric-badge badge-success",children:"Ngưỡng chuẩn (0.2 - 1.0 mg/L)"})]}),f.jsxs("div",{className:"metric-card",children:[f.jsxs("div",{className:"metric-header",children:[f.jsx("span",{children:"Độ pH"}),f.jsx(so,{size:18,color:"#0284c7"})]}),f.jsx("div",{className:"metric-body",children:f.jsx("span",{className:"metric-value",children:"7.35"})}),f.jsx("span",{className:"metric-badge badge-info",children:"Chuẩn (6.5 - 8.5)"})]}),f.jsxs("div",{className:"metric-card",children:[f.jsxs("div",{className:"metric-header",children:[f.jsx("span",{children:"Chất rắn tan (TDS)"}),f.jsx(Rl,{size:18,color:"#64748b"})]}),f.jsxs("div",{className:"metric-body",children:[f.jsx("span",{className:"metric-value",children:"128"}),f.jsx("span",{className:"metric-unit",children:"ppm"})]}),f.jsx("span",{className:"metric-badge badge-success",children:"An toàn (< 1000 ppm)"})]})]}),f.jsxs("div",{className:"panel-card",children:[f.jsxs("div",{className:"panel-card-header",children:[f.jsxs("div",{className:"panel-card-title",children:[f.jsx(Js,{size:17,color:"#0284c7"}),f.jsx("span",{children:"Trạm Quan Trắc Đa Chỉ Tiêu Thời Gian Thực (QCVN 01-1:2018/BYT)"})]}),f.jsx("button",{className:"btn-sm btn-primary",onClick:()=>St("Chat_Luong_Nuoc_QCVN_THNC.csv"),children:"Xuất Báo Cáo"})]}),f.jsx("div",{className:"data-table-wrapper",children:f.jsxs("table",{className:"custom-table",children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{children:"Trạm quan trắc"}),f.jsx("th",{children:"Vị trí đấu nối"}),f.jsx("th",{children:"Độ đục (NTU)"}),f.jsx("th",{children:"Clo dư (mg/L)"}),f.jsx("th",{children:"pH"}),f.jsx("th",{children:"TDS (ppm)"}),f.jsx("th",{children:"Van xả cặn tự động"}),f.jsx("th",{children:"Đánh giá chuẩn"})]})}),f.jsx("tbody",{children:[{station:"WQ-01 / Trạm Bơm Tăng Áp",loc:"Đầu nguồn cấp Lê Văn Lương",ntu:"0.62 NTU",cl:"0.55 mg/L",ph:"7.40",tds:"115 ppm",flush:"Đóng (Bình thường)",status:"Đạt chuẩn A",badge:"badge-success"},{station:"WQ-02 / Hố Đồng Hồ Mandarin",loc:"Cụm THPT Amsterdam - Hoàng Minh Giám",ntu:"1.45 NTU",cl:"0.38 mg/L",ph:"7.30",tds:"132 ppm",flush:"Đang xả đáy chu kỳ",status:"Cảnh báo nhẹ",badge:"badge-warning"},{station:"WQ-03 / Trạm Thứ Cấp Tháp 34T",loc:"Lõi Đô Thị Hoàng Đạo Thúy",ntu:"0.80 NTU",cl:"0.42 mg/L",ph:"7.35",tds:"124 ppm",flush:"Đóng (Bình thường)",status:"Đạt chuẩn A",badge:"badge-success"},{station:"WQ-04 / Trạm Tổ Hợp Charmvit",loc:"Cửa ngõ Trần Duy Hưng",ntu:"0.74 NTU",cl:"0.40 mg/L",ph:"7.38",tds:"128 ppm",flush:"Đóng (Bình thường)",status:"Đạt chuẩn A",badge:"badge-success"}].map((he,Ve)=>f.jsxs("tr",{children:[f.jsx("td",{style:{fontWeight:700},children:he.station}),f.jsx("td",{children:he.loc}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:he.ntu}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:he.cl}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:he.ph}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:he.tds}),f.jsx("td",{style:{fontSize:"12px"},children:he.flush}),f.jsx("td",{children:f.jsx("span",{className:`metric-badge ${he.badge}`,children:he.status})})]},Ve))})]})})]}),f.jsxs("div",{className:"panel-card",style:{padding:"20px"},children:[f.jsx("h3",{style:{fontSize:"15px",fontWeight:"700",marginBottom:"8px"},children:"Cơ chế Giám sát Chất lượng Nước Tự Động Toàn KĐT"}),f.jsx("p",{style:{fontSize:"13px",color:"#64748b",lineHeight:"1.6"},children:"Mạng lưới quan trắc online tích hợp hệ thống IoT đa thông số (Multi-parameter Probe) đo đạc liên tục 15 phút/lần truyền về trung tâm SCADA qua mạng 4G/NB-IoT. Khi chỉ số độ đục vượt 2.0 NTU hoặc Clo dư dưới 0.2 mg/L, van xả cặn tự động (Auto Flushing Valve) tại hố xả cuối tuyến sẽ kích hoạt xả nước tồn đọng trong 5 phút và gửi cảnh báo tức thì tới kỹ sư vận hành."})]})]}),s==="reports"&&f.jsxs("div",{className:"panel-card",children:[f.jsxs("div",{className:"panel-card-header",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"panel-card-title",children:[f.jsx(Y_,{size:18,color:"#0284c7"}),f.jsx("span",{children:"Cân bằng nước & Kiểm toán IWA"})]}),f.jsx("span",{style:{fontSize:"12px",color:"#64748b"},children:"Tiêu chuẩn Quốc tế IWA"})]}),f.jsxs("div",{style:{display:"flex",gap:"8px"},children:[f.jsx("button",{className:"btn-sm btn-secondary",onClick:yt,title:"In hoặc lưu PDF",children:"In PDF"}),f.jsx("button",{className:"btn-sm btn-primary",onClick:()=>St("Bao_Cao_Can_Bang_Nuoc_IWA.csv"),title:"Tải file CSV",children:"Tải CSV"})]})]}),f.jsx("div",{className:"data-table-wrapper",children:f.jsxs("table",{className:"custom-table",children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{children:"Hạng mục"}),f.jsx("th",{children:"Khối lượng (m³)"}),f.jsx("th",{children:"Tỷ trọng (%)"}),f.jsx("th",{children:"Doanh thu / Thiệt hại"}),f.jsx("th",{children:"Đánh giá"})]})}),f.jsxs("tbody",{children:[f.jsxs("tr",{children:[f.jsx("td",{style:{fontWeight:"700"},children:"1. Tổng cấp mạng lưới SIV (Toàn KĐT Trung Hòa - Nhân Chính)"}),f.jsx("td",{style:{fontFamily:"var(--font-mono)",fontWeight:"700"},children:"380,000 m³"}),f.jsx("td",{children:"100.0%"}),f.jsx("td",{children:"Trạm bơm Tăng áp Lê Văn Lương"}),f.jsx("td",{children:f.jsx("span",{className:"metric-badge badge-info",children:"Chuẩn đo đạc"})})]}),f.jsxs("tr",{children:[f.jsx("td",{style:{paddingLeft:"32px",color:"#047857"},children:"1.1. Tiêu thụ có doanh thu (Billed Consumption)"}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:"332,500 m³"}),f.jsx("td",{children:"87.5%"}),f.jsx("td",{children:"Thu tiền cư dân (~3.32 tỷ VNĐ)"}),f.jsx("td",{children:f.jsx("span",{className:"metric-badge badge-success",children:"Đạt chỉ tiêu"})})]}),f.jsxs("tr",{children:[f.jsx("td",{style:{paddingLeft:"32px",color:"#b91c1c"},children:"1.2. Thất thoát không doanh thu (NRW)"}),f.jsx("td",{style:{fontFamily:"var(--font-mono)",fontWeight:"700"},children:"47,500 m³"}),f.jsx("td",{children:"12.5%"}),f.jsx("td",{children:"Thiệt hại: ~475.0 tr VNĐ/tháng"}),f.jsx("td",{children:f.jsx("span",{className:"metric-badge badge-danger",children:"Cần giảm < 10%"})})]}),f.jsxs("tr",{children:[f.jsx("td",{style:{paddingLeft:"48px",color:"#64748b"},children:"- Thất thoát vật lý (Rò rỉ ống ngầm phân phối)"}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:"35,340 m³"}),f.jsx("td",{children:"9.3%"}),f.jsx("td",{children:"Chảy ngầm trong đất"}),f.jsx("td",{children:"Trọng tâm xử lý: Tuyến Hoàng Đạo Thúy (DMA THNC-02)"})]}),f.jsxs("tr",{children:[f.jsx("td",{style:{paddingLeft:"48px",color:"#64748b"},children:"- Thất thoát thương mại (Sai số đồng hồ, gian lận)"}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:"12,160 m³"}),f.jsx("td",{children:"3.2%"}),f.jsx("td",{children:"Sai số cơ khí sau 5 năm"}),f.jsx("td",{children:"Thay thế đồng hồ điện từ AMR định kỳ"})]})]})]})})]})]})]}),y&&f.jsxs("div",{className:"toast-notification",children:[f.jsx(ys,{size:18,color:"#10b981"}),f.jsx("span",{children:y})]})]})}console.log("[SWMS] Initializing Smart Water Management UI...");const Qh=document.getElementById("root");if(Qh)try{V_.createRoot(Qh).render(f.jsx(U_.StrictMode,{children:f.jsx(t2,{})})),console.log("[SWMS] App successfully mounted to DOM.")}catch(s){console.error("[SWMS] Fatal mount error:",s),Qh.innerHTML=`
      <div style="padding: 24px; background: #fee2e2; color: #991b1b; font-family: monospace; border-radius: 8px; margin: 20px;">
        <h2>Lỗi Render Giao Diện React:</h2>
        <pre>${s.stack||s.message}</pre>
      </div>
    `}
