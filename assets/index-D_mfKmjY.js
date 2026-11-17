(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function Qg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var th={exports:{}},Va={},nh={exports:{}},Ct={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Am;function O_(){if(Am)return Ct;Am=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),S=Symbol.iterator;function _(U){return U===null||typeof U!="object"?null:(U=S&&U[S]||U["@@iterator"],typeof U=="function"?U:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,b={};function y(U,J,Ce){this.props=U,this.context=J,this.refs=b,this.updater=Ce||x}y.prototype.isReactComponent={},y.prototype.setState=function(U,J){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,J,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function M(){}M.prototype=y.prototype;function N(U,J,Ce){this.props=U,this.context=J,this.refs=b,this.updater=Ce||x}var L=N.prototype=new M;L.constructor=N,T(L,y.prototype),L.isPureReactComponent=!0;var C=Array.isArray,F=Object.prototype.hasOwnProperty,D={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function R(U,J,Ce){var Q,_e={},Me=null,He=null;if(J!=null)for(Q in J.ref!==void 0&&(He=J.ref),J.key!==void 0&&(Me=""+J.key),J)F.call(J,Q)&&!E.hasOwnProperty(Q)&&(_e[Q]=J[Q]);var Se=arguments.length-2;if(Se===1)_e.children=Ce;else if(1<Se){for(var Ge=Array(Se),yt=0;yt<Se;yt++)Ge[yt]=arguments[yt+2];_e.children=Ge}if(U&&U.defaultProps)for(Q in Se=U.defaultProps,Se)_e[Q]===void 0&&(_e[Q]=Se[Q]);return{$$typeof:s,type:U,key:Me,ref:He,props:_e,_owner:D.current}}function X(U,J){return{$$typeof:s,type:U.type,key:J,ref:U.ref,props:U.props,_owner:U._owner}}function O(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function G(U){var J={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ce){return J[Ce]})}var Z=/\/+/g;function se(U,J){return typeof U=="object"&&U!==null&&U.key!=null?G(""+U.key):J.toString(36)}function k(U,J,Ce,Q,_e){var Me=typeof U;(Me==="undefined"||Me==="boolean")&&(U=null);var He=!1;if(U===null)He=!0;else switch(Me){case"string":case"number":He=!0;break;case"object":switch(U.$$typeof){case s:case e:He=!0}}if(He)return He=U,_e=_e(He),U=Q===""?"."+se(He,0):Q,C(_e)?(Ce="",U!=null&&(Ce=U.replace(Z,"$&/")+"/"),k(_e,J,Ce,"",function(yt){return yt})):_e!=null&&(O(_e)&&(_e=X(_e,Ce+(!_e.key||He&&He.key===_e.key?"":(""+_e.key).replace(Z,"$&/")+"/")+U)),J.push(_e)),1;if(He=0,Q=Q===""?".":Q+":",C(U))for(var Se=0;Se<U.length;Se++){Me=U[Se];var Ge=Q+se(Me,Se);He+=k(Me,J,Ce,Ge,_e)}else if(Ge=_(U),typeof Ge=="function")for(U=Ge.call(U),Se=0;!(Me=U.next()).done;)Me=Me.value,Ge=Q+se(Me,Se++),He+=k(Me,J,Ce,Ge,_e);else if(Me==="object")throw J=String(U),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return He}function ne(U,J,Ce){if(U==null)return U;var Q=[],_e=0;return k(U,Q,"","",function(Me){return J.call(Ce,Me,_e++)}),Q}function le(U){if(U._status===-1){var J=U._result;J=J(),J.then(function(Ce){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ce)},function(Ce){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ce)}),U._status===-1&&(U._status=0,U._result=J)}if(U._status===1)return U._result.default;throw U._result}var K={current:null},te={transition:null},q={ReactCurrentDispatcher:K,ReactCurrentBatchConfig:te,ReactCurrentOwner:D};function Y(){throw Error("act(...) is not supported in production builds of React.")}return Ct.Children={map:ne,forEach:function(U,J,Ce){ne(U,function(){J.apply(this,arguments)},Ce)},count:function(U){var J=0;return ne(U,function(){J++}),J},toArray:function(U){return ne(U,function(J){return J})||[]},only:function(U){if(!O(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},Ct.Component=y,Ct.Fragment=t,Ct.Profiler=a,Ct.PureComponent=N,Ct.StrictMode=r,Ct.Suspense=f,Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,Ct.act=Y,Ct.cloneElement=function(U,J,Ce){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Q=T({},U.props),_e=U.key,Me=U.ref,He=U._owner;if(J!=null){if(J.ref!==void 0&&(Me=J.ref,He=D.current),J.key!==void 0&&(_e=""+J.key),U.type&&U.type.defaultProps)var Se=U.type.defaultProps;for(Ge in J)F.call(J,Ge)&&!E.hasOwnProperty(Ge)&&(Q[Ge]=J[Ge]===void 0&&Se!==void 0?Se[Ge]:J[Ge])}var Ge=arguments.length-2;if(Ge===1)Q.children=Ce;else if(1<Ge){Se=Array(Ge);for(var yt=0;yt<Ge;yt++)Se[yt]=arguments[yt+2];Q.children=Se}return{$$typeof:s,type:U.type,key:_e,ref:Me,props:Q,_owner:He}},Ct.createContext=function(U){return U={$$typeof:c,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},Ct.createElement=R,Ct.createFactory=function(U){var J=R.bind(null,U);return J.type=U,J},Ct.createRef=function(){return{current:null}},Ct.forwardRef=function(U){return{$$typeof:h,render:U}},Ct.isValidElement=O,Ct.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:le}},Ct.memo=function(U,J){return{$$typeof:p,type:U,compare:J===void 0?null:J}},Ct.startTransition=function(U){var J=te.transition;te.transition={};try{U()}finally{te.transition=J}},Ct.unstable_act=Y,Ct.useCallback=function(U,J){return K.current.useCallback(U,J)},Ct.useContext=function(U){return K.current.useContext(U)},Ct.useDebugValue=function(){},Ct.useDeferredValue=function(U){return K.current.useDeferredValue(U)},Ct.useEffect=function(U,J){return K.current.useEffect(U,J)},Ct.useId=function(){return K.current.useId()},Ct.useImperativeHandle=function(U,J,Ce){return K.current.useImperativeHandle(U,J,Ce)},Ct.useInsertionEffect=function(U,J){return K.current.useInsertionEffect(U,J)},Ct.useLayoutEffect=function(U,J){return K.current.useLayoutEffect(U,J)},Ct.useMemo=function(U,J){return K.current.useMemo(U,J)},Ct.useReducer=function(U,J,Ce){return K.current.useReducer(U,J,Ce)},Ct.useRef=function(U){return K.current.useRef(U)},Ct.useState=function(U){return K.current.useState(U)},Ct.useSyncExternalStore=function(U,J,Ce){return K.current.useSyncExternalStore(U,J,Ce)},Ct.useTransition=function(){return K.current.useTransition()},Ct.version="18.3.1",Ct}var bm;function Fd(){return bm||(bm=1,nh.exports=O_()),nh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rm;function k_(){if(Rm)return Va;Rm=1;var s=Fd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(h,f,p){var g,S={},_=null,x=null;p!==void 0&&(_=""+p),f.key!==void 0&&(_=""+f.key),f.ref!==void 0&&(x=f.ref);for(g in f)r.call(f,g)&&!l.hasOwnProperty(g)&&(S[g]=f[g]);if(h&&h.defaultProps)for(g in f=h.defaultProps,f)S[g]===void 0&&(S[g]=f[g]);return{$$typeof:e,type:h,key:_,ref:x,props:S,_owner:a.current}}return Va.Fragment=t,Va.jsx=c,Va.jsxs=c,Va}var Cm;function B_(){return Cm||(Cm=1,th.exports=k_()),th.exports}var v=B_(),Ut=Fd();const z_=Qg(Ut);var Ml={},ih={exports:{}},Yn={},rh={exports:{}},sh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pm;function H_(){return Pm||(Pm=1,(function(s){function e(te,q){var Y=te.length;te.push(q);e:for(;0<Y;){var U=Y-1>>>1,J=te[U];if(0<a(J,q))te[U]=q,te[Y]=J,Y=U;else break e}}function t(te){return te.length===0?null:te[0]}function r(te){if(te.length===0)return null;var q=te[0],Y=te.pop();if(Y!==q){te[0]=Y;e:for(var U=0,J=te.length,Ce=J>>>1;U<Ce;){var Q=2*(U+1)-1,_e=te[Q],Me=Q+1,He=te[Me];if(0>a(_e,Y))Me<J&&0>a(He,_e)?(te[U]=He,te[Me]=Y,U=Me):(te[U]=_e,te[Q]=Y,U=Q);else if(Me<J&&0>a(He,Y))te[U]=He,te[Me]=Y,U=Me;else break e}}return q}function a(te,q){var Y=te.sortIndex-q.sortIndex;return Y!==0?Y:te.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,h=c.now();s.unstable_now=function(){return c.now()-h}}var f=[],p=[],g=1,S=null,_=3,x=!1,T=!1,b=!1,y=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(te){for(var q=t(p);q!==null;){if(q.callback===null)r(p);else if(q.startTime<=te)r(p),q.sortIndex=q.expirationTime,e(f,q);else break;q=t(p)}}function C(te){if(b=!1,L(te),!T)if(t(f)!==null)T=!0,le(F);else{var q=t(p);q!==null&&K(C,q.startTime-te)}}function F(te,q){T=!1,b&&(b=!1,M(R),R=-1),x=!0;var Y=_;try{for(L(q),S=t(f);S!==null&&(!(S.expirationTime>q)||te&&!G());){var U=S.callback;if(typeof U=="function"){S.callback=null,_=S.priorityLevel;var J=U(S.expirationTime<=q);q=s.unstable_now(),typeof J=="function"?S.callback=J:S===t(f)&&r(f),L(q)}else r(f);S=t(f)}if(S!==null)var Ce=!0;else{var Q=t(p);Q!==null&&K(C,Q.startTime-q),Ce=!1}return Ce}finally{S=null,_=Y,x=!1}}var D=!1,E=null,R=-1,X=5,O=-1;function G(){return!(s.unstable_now()-O<X)}function Z(){if(E!==null){var te=s.unstable_now();O=te;var q=!0;try{q=E(!0,te)}finally{q?se():(D=!1,E=null)}}else D=!1}var se;if(typeof N=="function")se=function(){N(Z)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,ne=k.port2;k.port1.onmessage=Z,se=function(){ne.postMessage(null)}}else se=function(){y(Z,0)};function le(te){E=te,D||(D=!0,se())}function K(te,q){R=y(function(){te(s.unstable_now())},q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(te){te.callback=null},s.unstable_continueExecution=function(){T||x||(T=!0,le(F))},s.unstable_forceFrameRate=function(te){0>te||125<te?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<te?Math.floor(1e3/te):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return t(f)},s.unstable_next=function(te){switch(_){case 1:case 2:case 3:var q=3;break;default:q=_}var Y=_;_=q;try{return te()}finally{_=Y}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(te,q){switch(te){case 1:case 2:case 3:case 4:case 5:break;default:te=3}var Y=_;_=te;try{return q()}finally{_=Y}},s.unstable_scheduleCallback=function(te,q,Y){var U=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?U+Y:U):Y=U,te){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=Y+J,te={id:g++,callback:q,priorityLevel:te,startTime:Y,expirationTime:J,sortIndex:-1},Y>U?(te.sortIndex=Y,e(p,te),t(f)===null&&te===t(p)&&(b?(M(R),R=-1):b=!0,K(C,Y-U))):(te.sortIndex=J,e(f,te),T||x||(T=!0,le(F))),te},s.unstable_shouldYield=G,s.unstable_wrapCallback=function(te){var q=_;return function(){var Y=_;_=q;try{return te.apply(this,arguments)}finally{_=Y}}}})(sh)),sh}var Nm;function G_(){return Nm||(Nm=1,rh.exports=H_()),rh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm;function V_(){if(Lm)return Yn;Lm=1;var s=Fd(),e=G_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},S={};function _(n){return f.call(S,n)?!0:f.call(g,n)?!1:p.test(n)?S[n]=!0:(g[n]=!0,!1)}function x(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function T(n,i,o,u){if(i===null||typeof i>"u"||x(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function b(n,i,o,u,d,m,A){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=A}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new b(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new b(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new b(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new b(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new b(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new b(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new b(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new b(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new b(n,5,!1,n.toLowerCase(),null,!1,!1)});var M=/[\-:]([a-z])/g;function N(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(M,N);y[i]=new b(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(M,N);y[i]=new b(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(M,N);y[i]=new b(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new b(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new b(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,i,o,u){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,o,d,u)&&(o=null),u||d===null?_(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,u=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,F=Symbol.for("react.element"),D=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),G=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),ne=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),K=Symbol.for("react.offscreen"),te=Symbol.iterator;function q(n){return n===null||typeof n!="object"?null:(n=te&&n[te]||n["@@iterator"],typeof n=="function"?n:null)}var Y=Object.assign,U;function J(n){if(U===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+n}var Ce=!1;function Q(n,i){if(!n||Ce)return"";Ce=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(de){var u=de}Reflect.construct(n,[],i)}else{try{i.call()}catch(de){u=de}n.call(i.prototype)}else{try{throw Error()}catch(de){u=de}n()}}catch(de){if(de&&u&&typeof de.stack=="string"){for(var d=de.stack.split(`
`),m=u.stack.split(`
`),A=d.length-1,B=m.length-1;1<=A&&0<=B&&d[A]!==m[B];)B--;for(;1<=A&&0<=B;A--,B--)if(d[A]!==m[B]){if(A!==1||B!==1)do if(A--,B--,0>B||d[A]!==m[B]){var j=`
`+d[A].replace(" at new "," at ");return n.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",n.displayName)),j}while(1<=A&&0<=B);break}}}finally{Ce=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?J(n):""}function _e(n){switch(n.tag){case 5:return J(n.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return n=Q(n.type,!1),n;case 11:return n=Q(n.type.render,!1),n;case 1:return n=Q(n.type,!0),n;default:return""}}function Me(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case E:return"Fragment";case D:return"Portal";case X:return"Profiler";case R:return"StrictMode";case se:return"Suspense";case k:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case G:return(n.displayName||"Context")+".Consumer";case O:return(n._context.displayName||"Context")+".Provider";case Z:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ne:return i=n.displayName||null,i!==null?i:Me(n.type)||"Memo";case le:i=n._payload,n=n._init;try{return Me(n(i))}catch{}}return null}function He(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(i);case 8:return i===R?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Se(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ge(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function yt(n){var i=Ge(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,m=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(A){u=""+A,m.call(this,A)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(A){u=""+A},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ee(n){n._valueTracker||(n._valueTracker=yt(n))}function Ee(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=Ge(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function je(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ce(n,i){var o=i.checked;return Y({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function ye(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=Se(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function xe(n,i){i=i.checked,i!=null&&L(n,"checked",i,!1)}function Ne(n,i){xe(n,i);var o=Se(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?st(n,i.type,o):i.hasOwnProperty("defaultValue")&&st(n,i.type,Se(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function we(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function st(n,i,o){(i!=="number"||je(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Ye=Array.isArray;function Ze(n,i,o,u){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&u&&(n[o].defaultSelected=!0)}else{for(o=""+Se(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function dt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return Y({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Mt(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(Ye(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:Se(o)}}function V(n,i){var o=Se(i.value),u=Se(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function Lt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ft(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pt(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ft(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ie,Vt=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ie=Ie||document.createElement("div"),Ie.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ie.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function it(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var ot={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},I=["Webkit","ms","Moz","O"];Object.keys(ot).forEach(function(n){I.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),ot[i]=ot[n]})});function w(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||ot.hasOwnProperty(n)&&ot[n]?(""+i).trim():i+"px"}function re(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,d=w(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,d):n[o]=d}}var be=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ve(n,i){if(i){if(be[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Le(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ke=null;function pe(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var me=null,Ue=null,z=null;function ge(n){if(n=Ra(n)){if(typeof me!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Oo(i),me(n.stateNode,n.type,i))}}function fe(n){Ue?z?z.push(n):z=[n]:Ue=n}function ze(){if(Ue){var n=Ue,i=z;if(z=Ue=null,ge(n),i)for(n=0;n<i.length;n++)ge(i[n])}}function De(n,i){return n(i)}function Be(){}var lt=!1;function Et(n,i,o){if(lt)return n(i,o);lt=!0;try{return De(n,i,o)}finally{lt=!1,(Ue!==null||z!==null)&&(Be(),ze())}}function Re(n,i){var o=n.stateNode;if(o===null)return null;var u=Oo(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var ht=!1;if(h)try{var _t={};Object.defineProperty(_t,"passive",{get:function(){ht=!0}}),window.addEventListener("test",_t,_t),window.removeEventListener("test",_t,_t)}catch{ht=!1}function qe(n,i,o,u,d,m,A,B,j){var de=Array.prototype.slice.call(arguments,3);try{i.apply(o,de)}catch(Ae){this.onError(Ae)}}var Dt=!1,nn=null,Jn=!1,us=null,la={onError:function(n){Dt=!0,nn=n}};function wc(n,i,o,u,d,m,A,B,j){Dt=!1,nn=null,qe.apply(la,arguments)}function _o(n,i,o,u,d,m,A,B,j){if(wc.apply(this,arguments),Dt){if(Dt){var de=nn;Dt=!1,nn=null}else throw Error(t(198));Jn||(Jn=!0,us=de)}}function bi(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function Ri(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function hs(n){if(bi(n)!==n)throw Error(t(188))}function xo(n){var i=n.alternate;if(!i){if(i=bi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return hs(d),n;if(m===u)return hs(d),i;m=m.sibling}throw Error(t(188))}if(o.return!==u.return)o=d,u=m;else{for(var A=!1,B=d.child;B;){if(B===o){A=!0,o=d,u=m;break}if(B===u){A=!0,u=d,o=m;break}B=B.sibling}if(!A){for(B=m.child;B;){if(B===o){A=!0,o=m,u=d;break}if(B===u){A=!0,u=m,o=d;break}B=B.sibling}if(!A)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function ca(n){return n=xo(n),n!==null?zr(n):null}function zr(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=zr(n);if(i!==null)return i;n=n.sibling}return null}var ua=e.unstable_scheduleCallback,ha=e.unstable_cancelCallback,Hr=e.unstable_shouldYield,Ac=e.unstable_requestPaint,Jt=e.unstable_now,yo=e.unstable_getCurrentPriorityLevel,da=e.unstable_ImmediatePriority,So=e.unstable_UserBlockingPriority,ds=e.unstable_NormalPriority,Mo=e.unstable_LowPriority,P=e.unstable_IdlePriority,W=null,ue=null;function ae(n){if(ue&&typeof ue.onCommitFiberRoot=="function")try{ue.onCommitFiberRoot(W,n,void 0,(n.current.flags&128)===128)}catch{}}var ie=Math.clz32?Math.clz32:Ve,We=Math.log,Je=Math.LN2;function Ve(n){return n>>>=0,n===0?32:31-(We(n)/Je|0)|0}var Xe=64,et=4194304;function gt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Tt(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,d=n.suspendedLanes,m=n.pingedLanes,A=o&268435455;if(A!==0){var B=A&~d;B!==0?u=gt(B):(m&=A,m!==0&&(u=gt(m)))}else A=o&~d,A!==0?u=gt(A):m!==0&&(u=gt(m));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-ie(i),d=1<<o,u|=n[o],i&=~d;return u}function tt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rt(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var A=31-ie(m),B=1<<A,j=d[A];j===-1?((B&o)===0||(B&u)!==0)&&(d[A]=tt(B,i)):j<=i&&(n.expiredLanes|=B),m&=~B}}function Qt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Wt(){var n=Xe;return Xe<<=1,(Xe&4194240)===0&&(Xe=64),n}function zt(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function ln(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ie(i),n[i]=o}function nt(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-ie(o),m=1<<d;i[d]=0,u[d]=-1,n[d]=-1,o&=~m}}function pn(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-ie(o),d=1<<u;d&i|n[u]&i&&(n[u]|=i),o&=~d}}var ct=0;function Ci(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var mn,cr,mi,Pi,Nt,un=!1,Pn=[],kt=null,Xt=null,Sn=null,ur=new Map,fa=new Map,hr=[],sv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cf(n,i){switch(n){case"focusin":case"focusout":kt=null;break;case"dragenter":case"dragleave":Xt=null;break;case"mouseover":case"mouseout":Sn=null;break;case"pointerover":case"pointerout":ur.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":fa.delete(i.pointerId)}}function pa(n,i,o,u,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Ra(i),i!==null&&cr(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function av(n,i,o,u,d){switch(i){case"focusin":return kt=pa(kt,n,i,o,u,d),!0;case"dragenter":return Xt=pa(Xt,n,i,o,u,d),!0;case"mouseover":return Sn=pa(Sn,n,i,o,u,d),!0;case"pointerover":var m=d.pointerId;return ur.set(m,pa(ur.get(m)||null,n,i,o,u,d)),!0;case"gotpointercapture":return m=d.pointerId,fa.set(m,pa(fa.get(m)||null,n,i,o,u,d)),!0}return!1}function uf(n){var i=Gr(n.target);if(i!==null){var o=bi(i);if(o!==null){if(i=o.tag,i===13){if(i=Ri(o),i!==null){n.blockedOn=i,Nt(n.priority,function(){mi(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Eo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=Rc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);ke=u,o.target.dispatchEvent(u),ke=null}else return i=Ra(o),i!==null&&cr(i),n.blockedOn=o,!1;i.shift()}return!0}function hf(n,i,o){Eo(n)&&o.delete(i)}function ov(){un=!1,kt!==null&&Eo(kt)&&(kt=null),Xt!==null&&Eo(Xt)&&(Xt=null),Sn!==null&&Eo(Sn)&&(Sn=null),ur.forEach(hf),fa.forEach(hf)}function ma(n,i){n.blockedOn===i&&(n.blockedOn=null,un||(un=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ov)))}function ga(n){function i(d){return ma(d,n)}if(0<Pn.length){ma(Pn[0],n);for(var o=1;o<Pn.length;o++){var u=Pn[o];u.blockedOn===n&&(u.blockedOn=null)}}for(kt!==null&&ma(kt,n),Xt!==null&&ma(Xt,n),Sn!==null&&ma(Sn,n),ur.forEach(i),fa.forEach(i),o=0;o<hr.length;o++)u=hr[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<hr.length&&(o=hr[0],o.blockedOn===null);)uf(o),o.blockedOn===null&&hr.shift()}var fs=C.ReactCurrentBatchConfig,To=!0;function lv(n,i,o,u){var d=ct,m=fs.transition;fs.transition=null;try{ct=1,bc(n,i,o,u)}finally{ct=d,fs.transition=m}}function cv(n,i,o,u){var d=ct,m=fs.transition;fs.transition=null;try{ct=4,bc(n,i,o,u)}finally{ct=d,fs.transition=m}}function bc(n,i,o,u){if(To){var d=Rc(n,i,o,u);if(d===null)jc(n,i,u,wo,o),cf(n,u);else if(av(d,n,i,o,u))u.stopPropagation();else if(cf(n,u),i&4&&-1<sv.indexOf(n)){for(;d!==null;){var m=Ra(d);if(m!==null&&mn(m),m=Rc(n,i,o,u),m===null&&jc(n,i,u,wo,o),m===d)break;d=m}d!==null&&u.stopPropagation()}else jc(n,i,u,null,o)}}var wo=null;function Rc(n,i,o,u){if(wo=null,n=pe(u),n=Gr(n),n!==null)if(i=bi(n),i===null)n=null;else if(o=i.tag,o===13){if(n=Ri(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return wo=n,null}function df(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yo()){case da:return 1;case So:return 4;case ds:case Mo:return 16;case P:return 536870912;default:return 16}default:return 16}}var dr=null,Cc=null,Ao=null;function ff(){if(Ao)return Ao;var n,i=Cc,o=i.length,u,d="value"in dr?dr.value:dr.textContent,m=d.length;for(n=0;n<o&&i[n]===d[n];n++);var A=o-n;for(u=1;u<=A&&i[o-u]===d[m-u];u++);return Ao=d.slice(n,1<u?1-u:void 0)}function bo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ro(){return!0}function pf(){return!1}function Qn(n){function i(o,u,d,m,A){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=m,this.target=A,this.currentTarget=null;for(var B in n)n.hasOwnProperty(B)&&(o=n[B],this[B]=o?o(m):m[B]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ro:pf,this.isPropagationStopped=pf,this}return Y(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ro)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ro)},persist:function(){},isPersistent:Ro}),i}var ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pc=Qn(ps),va=Y({},ps,{view:0,detail:0}),uv=Qn(va),Nc,Lc,_a,Co=Y({},va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ic,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==_a&&(_a&&n.type==="mousemove"?(Nc=n.screenX-_a.screenX,Lc=n.screenY-_a.screenY):Lc=Nc=0,_a=n),Nc)},movementY:function(n){return"movementY"in n?n.movementY:Lc}}),mf=Qn(Co),hv=Y({},Co,{dataTransfer:0}),dv=Qn(hv),fv=Y({},va,{relatedTarget:0}),Dc=Qn(fv),pv=Y({},ps,{animationName:0,elapsedTime:0,pseudoElement:0}),mv=Qn(pv),gv=Y({},ps,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),vv=Qn(gv),_v=Y({},ps,{data:0}),gf=Qn(_v),xv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Sv[n])?!!i[n]:!1}function Ic(){return Mv}var Ev=Y({},va,{key:function(n){if(n.key){var i=xv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=bo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?yv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ic,charCode:function(n){return n.type==="keypress"?bo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?bo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Tv=Qn(Ev),wv=Y({},Co,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vf=Qn(wv),Av=Y({},va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ic}),bv=Qn(Av),Rv=Y({},ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cv=Qn(Rv),Pv=Y({},Co,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Nv=Qn(Pv),Lv=[9,13,27,32],Uc=h&&"CompositionEvent"in window,xa=null;h&&"documentMode"in document&&(xa=document.documentMode);var Dv=h&&"TextEvent"in window&&!xa,_f=h&&(!Uc||xa&&8<xa&&11>=xa),xf=" ",yf=!1;function Sf(n,i){switch(n){case"keyup":return Lv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ms=!1;function Iv(n,i){switch(n){case"compositionend":return Mf(i);case"keypress":return i.which!==32?null:(yf=!0,xf);case"textInput":return n=i.data,n===xf&&yf?null:n;default:return null}}function Uv(n,i){if(ms)return n==="compositionend"||!Uc&&Sf(n,i)?(n=ff(),Ao=Cc=dr=null,ms=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _f&&i.locale!=="ko"?null:i.data;default:return null}}var Fv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ef(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Fv[n.type]:i==="textarea"}function Tf(n,i,o,u){fe(u),i=Io(i,"onChange"),0<i.length&&(o=new Pc("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var ya=null,Sa=null;function Ov(n){Gf(n,0)}function Po(n){var i=ys(n);if(Ee(i))return n}function kv(n,i){if(n==="change")return i}var wf=!1;if(h){var Fc;if(h){var Oc="oninput"in document;if(!Oc){var Af=document.createElement("div");Af.setAttribute("oninput","return;"),Oc=typeof Af.oninput=="function"}Fc=Oc}else Fc=!1;wf=Fc&&(!document.documentMode||9<document.documentMode)}function bf(){ya&&(ya.detachEvent("onpropertychange",Rf),Sa=ya=null)}function Rf(n){if(n.propertyName==="value"&&Po(Sa)){var i=[];Tf(i,Sa,n,pe(n)),Et(Ov,i)}}function Bv(n,i,o){n==="focusin"?(bf(),ya=i,Sa=o,ya.attachEvent("onpropertychange",Rf)):n==="focusout"&&bf()}function zv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Po(Sa)}function Hv(n,i){if(n==="click")return Po(i)}function Gv(n,i){if(n==="input"||n==="change")return Po(i)}function Vv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var gi=typeof Object.is=="function"?Object.is:Vv;function Ma(n,i){if(gi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!f.call(i,d)||!gi(n[d],i[d]))return!1}return!0}function Cf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Pf(n,i){var o=Cf(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Cf(o)}}function Nf(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Nf(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Lf(){for(var n=window,i=je();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=je(n.document)}return i}function kc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Wv(n){var i=Lf(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Nf(o.ownerDocument.documentElement,o)){if(u!==null&&kc(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,m=Math.min(u.start,d);u=u.end===void 0?m:Math.min(u.end,d),!n.extend&&m>u&&(d=u,u=m,m=d),d=Pf(o,m);var A=Pf(o,u);d&&A&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==A.node||n.focusOffset!==A.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>u?(n.addRange(i),n.extend(A.node,A.offset)):(i.setEnd(A.node,A.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var jv=h&&"documentMode"in document&&11>=document.documentMode,gs=null,Bc=null,Ea=null,zc=!1;function Df(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;zc||gs==null||gs!==je(u)||(u=gs,"selectionStart"in u&&kc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Ea&&Ma(Ea,u)||(Ea=u,u=Io(Bc,"onSelect"),0<u.length&&(i=new Pc("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=gs)))}function No(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var vs={animationend:No("Animation","AnimationEnd"),animationiteration:No("Animation","AnimationIteration"),animationstart:No("Animation","AnimationStart"),transitionend:No("Transition","TransitionEnd")},Hc={},If={};h&&(If=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function Lo(n){if(Hc[n])return Hc[n];if(!vs[n])return n;var i=vs[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in If)return Hc[n]=i[o];return n}var Uf=Lo("animationend"),Ff=Lo("animationiteration"),Of=Lo("animationstart"),kf=Lo("transitionend"),Bf=new Map,zf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fr(n,i){Bf.set(n,i),l(i,[n])}for(var Gc=0;Gc<zf.length;Gc++){var Vc=zf[Gc],Xv=Vc.toLowerCase(),qv=Vc[0].toUpperCase()+Vc.slice(1);fr(Xv,"on"+qv)}fr(Uf,"onAnimationEnd"),fr(Ff,"onAnimationIteration"),fr(Of,"onAnimationStart"),fr("dblclick","onDoubleClick"),fr("focusin","onFocus"),fr("focusout","onBlur"),fr(kf,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ta));function Hf(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,_o(u,i,void 0,n),n.currentTarget=null}function Gf(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],d=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var A=u.length-1;0<=A;A--){var B=u[A],j=B.instance,de=B.currentTarget;if(B=B.listener,j!==m&&d.isPropagationStopped())break e;Hf(d,B,de),m=j}else for(A=0;A<u.length;A++){if(B=u[A],j=B.instance,de=B.currentTarget,B=B.listener,j!==m&&d.isPropagationStopped())break e;Hf(d,B,de),m=j}}}if(Jn)throw n=us,Jn=!1,us=null,n}function $t(n,i){var o=i[Zc];o===void 0&&(o=i[Zc]=new Set);var u=n+"__bubble";o.has(u)||(Vf(i,n,2,!1),o.add(u))}function Wc(n,i,o){var u=0;i&&(u|=4),Vf(o,n,u,i)}var Do="_reactListening"+Math.random().toString(36).slice(2);function wa(n){if(!n[Do]){n[Do]=!0,r.forEach(function(o){o!=="selectionchange"&&(Yv.has(o)||Wc(o,!1,n),Wc(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Do]||(i[Do]=!0,Wc("selectionchange",!1,i))}}function Vf(n,i,o,u){switch(df(i)){case 1:var d=lv;break;case 4:d=cv;break;default:d=bc}o=d.bind(null,i,o,n),d=void 0,!ht||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function jc(n,i,o,u,d){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var A=u.tag;if(A===3||A===4){var B=u.stateNode.containerInfo;if(B===d||B.nodeType===8&&B.parentNode===d)break;if(A===4)for(A=u.return;A!==null;){var j=A.tag;if((j===3||j===4)&&(j=A.stateNode.containerInfo,j===d||j.nodeType===8&&j.parentNode===d))return;A=A.return}for(;B!==null;){if(A=Gr(B),A===null)return;if(j=A.tag,j===5||j===6){u=m=A;continue e}B=B.parentNode}}u=u.return}Et(function(){var de=m,Ae=pe(o),Pe=[];e:{var Te=Bf.get(n);if(Te!==void 0){var Ke=Pc,rt=n;switch(n){case"keypress":if(bo(o)===0)break e;case"keydown":case"keyup":Ke=Tv;break;case"focusin":rt="focus",Ke=Dc;break;case"focusout":rt="blur",Ke=Dc;break;case"beforeblur":case"afterblur":Ke=Dc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ke=mf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ke=dv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ke=bv;break;case Uf:case Ff:case Of:Ke=mv;break;case kf:Ke=Cv;break;case"scroll":Ke=uv;break;case"wheel":Ke=Nv;break;case"copy":case"cut":case"paste":Ke=vv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ke=vf}var at=(i&4)!==0,hn=!at&&n==="scroll",oe=at?Te!==null?Te+"Capture":null:Te;at=[];for(var $=de,he;$!==null;){he=$;var Oe=he.stateNode;if(he.tag===5&&Oe!==null&&(he=Oe,oe!==null&&(Oe=Re($,oe),Oe!=null&&at.push(Aa($,Oe,he)))),hn)break;$=$.return}0<at.length&&(Te=new Ke(Te,rt,null,o,Ae),Pe.push({event:Te,listeners:at}))}}if((i&7)===0){e:{if(Te=n==="mouseover"||n==="pointerover",Ke=n==="mouseout"||n==="pointerout",Te&&o!==ke&&(rt=o.relatedTarget||o.fromElement)&&(Gr(rt)||rt[Xi]))break e;if((Ke||Te)&&(Te=Ae.window===Ae?Ae:(Te=Ae.ownerDocument)?Te.defaultView||Te.parentWindow:window,Ke?(rt=o.relatedTarget||o.toElement,Ke=de,rt=rt?Gr(rt):null,rt!==null&&(hn=bi(rt),rt!==hn||rt.tag!==5&&rt.tag!==6)&&(rt=null)):(Ke=null,rt=de),Ke!==rt)){if(at=mf,Oe="onMouseLeave",oe="onMouseEnter",$="mouse",(n==="pointerout"||n==="pointerover")&&(at=vf,Oe="onPointerLeave",oe="onPointerEnter",$="pointer"),hn=Ke==null?Te:ys(Ke),he=rt==null?Te:ys(rt),Te=new at(Oe,$+"leave",Ke,o,Ae),Te.target=hn,Te.relatedTarget=he,Oe=null,Gr(Ae)===de&&(at=new at(oe,$+"enter",rt,o,Ae),at.target=he,at.relatedTarget=hn,Oe=at),hn=Oe,Ke&&rt)t:{for(at=Ke,oe=rt,$=0,he=at;he;he=_s(he))$++;for(he=0,Oe=oe;Oe;Oe=_s(Oe))he++;for(;0<$-he;)at=_s(at),$--;for(;0<he-$;)oe=_s(oe),he--;for(;$--;){if(at===oe||oe!==null&&at===oe.alternate)break t;at=_s(at),oe=_s(oe)}at=null}else at=null;Ke!==null&&Wf(Pe,Te,Ke,at,!1),rt!==null&&hn!==null&&Wf(Pe,hn,rt,at,!0)}}e:{if(Te=de?ys(de):window,Ke=Te.nodeName&&Te.nodeName.toLowerCase(),Ke==="select"||Ke==="input"&&Te.type==="file")var ut=kv;else if(Ef(Te))if(wf)ut=Gv;else{ut=zv;var pt=Bv}else(Ke=Te.nodeName)&&Ke.toLowerCase()==="input"&&(Te.type==="checkbox"||Te.type==="radio")&&(ut=Hv);if(ut&&(ut=ut(n,de))){Tf(Pe,ut,o,Ae);break e}pt&&pt(n,Te,de),n==="focusout"&&(pt=Te._wrapperState)&&pt.controlled&&Te.type==="number"&&st(Te,"number",Te.value)}switch(pt=de?ys(de):window,n){case"focusin":(Ef(pt)||pt.contentEditable==="true")&&(gs=pt,Bc=de,Ea=null);break;case"focusout":Ea=Bc=gs=null;break;case"mousedown":zc=!0;break;case"contextmenu":case"mouseup":case"dragend":zc=!1,Df(Pe,o,Ae);break;case"selectionchange":if(jv)break;case"keydown":case"keyup":Df(Pe,o,Ae)}var mt;if(Uc)e:{switch(n){case"compositionstart":var xt="onCompositionStart";break e;case"compositionend":xt="onCompositionEnd";break e;case"compositionupdate":xt="onCompositionUpdate";break e}xt=void 0}else ms?Sf(n,o)&&(xt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(xt="onCompositionStart");xt&&(_f&&o.locale!=="ko"&&(ms||xt!=="onCompositionStart"?xt==="onCompositionEnd"&&ms&&(mt=ff()):(dr=Ae,Cc="value"in dr?dr.value:dr.textContent,ms=!0)),pt=Io(de,xt),0<pt.length&&(xt=new gf(xt,n,null,o,Ae),Pe.push({event:xt,listeners:pt}),mt?xt.data=mt:(mt=Mf(o),mt!==null&&(xt.data=mt)))),(mt=Dv?Iv(n,o):Uv(n,o))&&(de=Io(de,"onBeforeInput"),0<de.length&&(Ae=new gf("onBeforeInput","beforeinput",null,o,Ae),Pe.push({event:Ae,listeners:de}),Ae.data=mt))}Gf(Pe,i)})}function Aa(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Io(n,i){for(var o=i+"Capture",u=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=Re(n,o),m!=null&&u.unshift(Aa(n,m,d)),m=Re(n,i),m!=null&&u.push(Aa(n,m,d))),n=n.return}return u}function _s(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Wf(n,i,o,u,d){for(var m=i._reactName,A=[];o!==null&&o!==u;){var B=o,j=B.alternate,de=B.stateNode;if(j!==null&&j===u)break;B.tag===5&&de!==null&&(B=de,d?(j=Re(o,m),j!=null&&A.unshift(Aa(o,j,B))):d||(j=Re(o,m),j!=null&&A.push(Aa(o,j,B)))),o=o.return}A.length!==0&&n.push({event:i,listeners:A})}var $v=/\r\n?/g,Kv=/\u0000|\uFFFD/g;function jf(n){return(typeof n=="string"?n:""+n).replace($v,`
`).replace(Kv,"")}function Uo(n,i,o){if(i=jf(i),jf(n)!==i&&o)throw Error(t(425))}function Fo(){}var Xc=null,qc=null;function Yc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var $c=typeof setTimeout=="function"?setTimeout:void 0,Zv=typeof clearTimeout=="function"?clearTimeout:void 0,Xf=typeof Promise=="function"?Promise:void 0,Jv=typeof queueMicrotask=="function"?queueMicrotask:typeof Xf<"u"?function(n){return Xf.resolve(null).then(n).catch(Qv)}:$c;function Qv(n){setTimeout(function(){throw n})}function Kc(n,i){var o=i,u=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(u===0){n.removeChild(d),ga(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=d}while(o);ga(i)}function pr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function qf(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var xs=Math.random().toString(36).slice(2),Ni="__reactFiber$"+xs,ba="__reactProps$"+xs,Xi="__reactContainer$"+xs,Zc="__reactEvents$"+xs,e_="__reactListeners$"+xs,t_="__reactHandles$"+xs;function Gr(n){var i=n[Ni];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Xi]||o[Ni]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=qf(n);n!==null;){if(o=n[Ni])return o;n=qf(n)}return i}n=o,o=n.parentNode}return null}function Ra(n){return n=n[Ni]||n[Xi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ys(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Oo(n){return n[ba]||null}var Jc=[],Ss=-1;function mr(n){return{current:n}}function Kt(n){0>Ss||(n.current=Jc[Ss],Jc[Ss]=null,Ss--)}function qt(n,i){Ss++,Jc[Ss]=n.current,n.current=i}var gr={},Nn=mr(gr),Vn=mr(!1),Vr=gr;function Ms(n,i){var o=n.type.contextTypes;if(!o)return gr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in o)d[m]=i[m];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Wn(n){return n=n.childContextTypes,n!=null}function ko(){Kt(Vn),Kt(Nn)}function Yf(n,i,o){if(Nn.current!==gr)throw Error(t(168));qt(Nn,i),qt(Vn,o)}function $f(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,He(n)||"Unknown",d));return Y({},o,u)}function Bo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||gr,Vr=Nn.current,qt(Nn,n),qt(Vn,Vn.current),!0}function Kf(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=$f(n,i,Vr),u.__reactInternalMemoizedMergedChildContext=n,Kt(Vn),Kt(Nn),qt(Nn,n)):Kt(Vn),qt(Vn,o)}var qi=null,zo=!1,Qc=!1;function Zf(n){qi===null?qi=[n]:qi.push(n)}function n_(n){zo=!0,Zf(n)}function vr(){if(!Qc&&qi!==null){Qc=!0;var n=0,i=ct;try{var o=qi;for(ct=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}qi=null,zo=!1}catch(d){throw qi!==null&&(qi=qi.slice(n+1)),ua(da,vr),d}finally{ct=i,Qc=!1}}return null}var Es=[],Ts=0,Ho=null,Go=0,ai=[],oi=0,Wr=null,Yi=1,$i="";function jr(n,i){Es[Ts++]=Go,Es[Ts++]=Ho,Ho=n,Go=i}function Jf(n,i,o){ai[oi++]=Yi,ai[oi++]=$i,ai[oi++]=Wr,Wr=n;var u=Yi;n=$i;var d=32-ie(u)-1;u&=~(1<<d),o+=1;var m=32-ie(i)+d;if(30<m){var A=d-d%5;m=(u&(1<<A)-1).toString(32),u>>=A,d-=A,Yi=1<<32-ie(i)+d|o<<d|u,$i=m+n}else Yi=1<<m|o<<d|u,$i=n}function eu(n){n.return!==null&&(jr(n,1),Jf(n,1,0))}function tu(n){for(;n===Ho;)Ho=Es[--Ts],Es[Ts]=null,Go=Es[--Ts],Es[Ts]=null;for(;n===Wr;)Wr=ai[--oi],ai[oi]=null,$i=ai[--oi],ai[oi]=null,Yi=ai[--oi],ai[oi]=null}var ei=null,ti=null,en=!1,vi=null;function Qf(n,i){var o=hi(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function ep(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,ei=n,ti=pr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,ei=n,ti=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Wr!==null?{id:Yi,overflow:$i}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=hi(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,ei=n,ti=null,!0):!1;default:return!1}}function nu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function iu(n){if(en){var i=ti;if(i){var o=i;if(!ep(n,i)){if(nu(n))throw Error(t(418));i=pr(o.nextSibling);var u=ei;i&&ep(n,i)?Qf(u,o):(n.flags=n.flags&-4097|2,en=!1,ei=n)}}else{if(nu(n))throw Error(t(418));n.flags=n.flags&-4097|2,en=!1,ei=n}}}function tp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ei=n}function Vo(n){if(n!==ei)return!1;if(!en)return tp(n),en=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Yc(n.type,n.memoizedProps)),i&&(i=ti)){if(nu(n))throw np(),Error(t(418));for(;i;)Qf(n,i),i=pr(i.nextSibling)}if(tp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){ti=pr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}ti=null}}else ti=ei?pr(n.stateNode.nextSibling):null;return!0}function np(){for(var n=ti;n;)n=pr(n.nextSibling)}function ws(){ti=ei=null,en=!1}function ru(n){vi===null?vi=[n]:vi.push(n)}var i_=C.ReactCurrentBatchConfig;function Ca(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var d=u,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(A){var B=d.refs;A===null?delete B[m]:B[m]=A},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Wo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function ip(n){var i=n._init;return i(n._payload)}function rp(n){function i(oe,$){if(n){var he=oe.deletions;he===null?(oe.deletions=[$],oe.flags|=16):he.push($)}}function o(oe,$){if(!n)return null;for(;$!==null;)i(oe,$),$=$.sibling;return null}function u(oe,$){for(oe=new Map;$!==null;)$.key!==null?oe.set($.key,$):oe.set($.index,$),$=$.sibling;return oe}function d(oe,$){return oe=wr(oe,$),oe.index=0,oe.sibling=null,oe}function m(oe,$,he){return oe.index=he,n?(he=oe.alternate,he!==null?(he=he.index,he<$?(oe.flags|=2,$):he):(oe.flags|=2,$)):(oe.flags|=1048576,$)}function A(oe){return n&&oe.alternate===null&&(oe.flags|=2),oe}function B(oe,$,he,Oe){return $===null||$.tag!==6?($=$u(he,oe.mode,Oe),$.return=oe,$):($=d($,he),$.return=oe,$)}function j(oe,$,he,Oe){var ut=he.type;return ut===E?Ae(oe,$,he.props.children,Oe,he.key):$!==null&&($.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===le&&ip(ut)===$.type)?(Oe=d($,he.props),Oe.ref=Ca(oe,$,he),Oe.return=oe,Oe):(Oe=pl(he.type,he.key,he.props,null,oe.mode,Oe),Oe.ref=Ca(oe,$,he),Oe.return=oe,Oe)}function de(oe,$,he,Oe){return $===null||$.tag!==4||$.stateNode.containerInfo!==he.containerInfo||$.stateNode.implementation!==he.implementation?($=Ku(he,oe.mode,Oe),$.return=oe,$):($=d($,he.children||[]),$.return=oe,$)}function Ae(oe,$,he,Oe,ut){return $===null||$.tag!==7?($=Qr(he,oe.mode,Oe,ut),$.return=oe,$):($=d($,he),$.return=oe,$)}function Pe(oe,$,he){if(typeof $=="string"&&$!==""||typeof $=="number")return $=$u(""+$,oe.mode,he),$.return=oe,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case F:return he=pl($.type,$.key,$.props,null,oe.mode,he),he.ref=Ca(oe,null,$),he.return=oe,he;case D:return $=Ku($,oe.mode,he),$.return=oe,$;case le:var Oe=$._init;return Pe(oe,Oe($._payload),he)}if(Ye($)||q($))return $=Qr($,oe.mode,he,null),$.return=oe,$;Wo(oe,$)}return null}function Te(oe,$,he,Oe){var ut=$!==null?$.key:null;if(typeof he=="string"&&he!==""||typeof he=="number")return ut!==null?null:B(oe,$,""+he,Oe);if(typeof he=="object"&&he!==null){switch(he.$$typeof){case F:return he.key===ut?j(oe,$,he,Oe):null;case D:return he.key===ut?de(oe,$,he,Oe):null;case le:return ut=he._init,Te(oe,$,ut(he._payload),Oe)}if(Ye(he)||q(he))return ut!==null?null:Ae(oe,$,he,Oe,null);Wo(oe,he)}return null}function Ke(oe,$,he,Oe,ut){if(typeof Oe=="string"&&Oe!==""||typeof Oe=="number")return oe=oe.get(he)||null,B($,oe,""+Oe,ut);if(typeof Oe=="object"&&Oe!==null){switch(Oe.$$typeof){case F:return oe=oe.get(Oe.key===null?he:Oe.key)||null,j($,oe,Oe,ut);case D:return oe=oe.get(Oe.key===null?he:Oe.key)||null,de($,oe,Oe,ut);case le:var pt=Oe._init;return Ke(oe,$,he,pt(Oe._payload),ut)}if(Ye(Oe)||q(Oe))return oe=oe.get(he)||null,Ae($,oe,Oe,ut,null);Wo($,Oe)}return null}function rt(oe,$,he,Oe){for(var ut=null,pt=null,mt=$,xt=$=0,Tn=null;mt!==null&&xt<he.length;xt++){mt.index>xt?(Tn=mt,mt=null):Tn=mt.sibling;var Bt=Te(oe,mt,he[xt],Oe);if(Bt===null){mt===null&&(mt=Tn);break}n&&mt&&Bt.alternate===null&&i(oe,mt),$=m(Bt,$,xt),pt===null?ut=Bt:pt.sibling=Bt,pt=Bt,mt=Tn}if(xt===he.length)return o(oe,mt),en&&jr(oe,xt),ut;if(mt===null){for(;xt<he.length;xt++)mt=Pe(oe,he[xt],Oe),mt!==null&&($=m(mt,$,xt),pt===null?ut=mt:pt.sibling=mt,pt=mt);return en&&jr(oe,xt),ut}for(mt=u(oe,mt);xt<he.length;xt++)Tn=Ke(mt,oe,xt,he[xt],Oe),Tn!==null&&(n&&Tn.alternate!==null&&mt.delete(Tn.key===null?xt:Tn.key),$=m(Tn,$,xt),pt===null?ut=Tn:pt.sibling=Tn,pt=Tn);return n&&mt.forEach(function(Ar){return i(oe,Ar)}),en&&jr(oe,xt),ut}function at(oe,$,he,Oe){var ut=q(he);if(typeof ut!="function")throw Error(t(150));if(he=ut.call(he),he==null)throw Error(t(151));for(var pt=ut=null,mt=$,xt=$=0,Tn=null,Bt=he.next();mt!==null&&!Bt.done;xt++,Bt=he.next()){mt.index>xt?(Tn=mt,mt=null):Tn=mt.sibling;var Ar=Te(oe,mt,Bt.value,Oe);if(Ar===null){mt===null&&(mt=Tn);break}n&&mt&&Ar.alternate===null&&i(oe,mt),$=m(Ar,$,xt),pt===null?ut=Ar:pt.sibling=Ar,pt=Ar,mt=Tn}if(Bt.done)return o(oe,mt),en&&jr(oe,xt),ut;if(mt===null){for(;!Bt.done;xt++,Bt=he.next())Bt=Pe(oe,Bt.value,Oe),Bt!==null&&($=m(Bt,$,xt),pt===null?ut=Bt:pt.sibling=Bt,pt=Bt);return en&&jr(oe,xt),ut}for(mt=u(oe,mt);!Bt.done;xt++,Bt=he.next())Bt=Ke(mt,oe,xt,Bt.value,Oe),Bt!==null&&(n&&Bt.alternate!==null&&mt.delete(Bt.key===null?xt:Bt.key),$=m(Bt,$,xt),pt===null?ut=Bt:pt.sibling=Bt,pt=Bt);return n&&mt.forEach(function(F_){return i(oe,F_)}),en&&jr(oe,xt),ut}function hn(oe,$,he,Oe){if(typeof he=="object"&&he!==null&&he.type===E&&he.key===null&&(he=he.props.children),typeof he=="object"&&he!==null){switch(he.$$typeof){case F:e:{for(var ut=he.key,pt=$;pt!==null;){if(pt.key===ut){if(ut=he.type,ut===E){if(pt.tag===7){o(oe,pt.sibling),$=d(pt,he.props.children),$.return=oe,oe=$;break e}}else if(pt.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===le&&ip(ut)===pt.type){o(oe,pt.sibling),$=d(pt,he.props),$.ref=Ca(oe,pt,he),$.return=oe,oe=$;break e}o(oe,pt);break}else i(oe,pt);pt=pt.sibling}he.type===E?($=Qr(he.props.children,oe.mode,Oe,he.key),$.return=oe,oe=$):(Oe=pl(he.type,he.key,he.props,null,oe.mode,Oe),Oe.ref=Ca(oe,$,he),Oe.return=oe,oe=Oe)}return A(oe);case D:e:{for(pt=he.key;$!==null;){if($.key===pt)if($.tag===4&&$.stateNode.containerInfo===he.containerInfo&&$.stateNode.implementation===he.implementation){o(oe,$.sibling),$=d($,he.children||[]),$.return=oe,oe=$;break e}else{o(oe,$);break}else i(oe,$);$=$.sibling}$=Ku(he,oe.mode,Oe),$.return=oe,oe=$}return A(oe);case le:return pt=he._init,hn(oe,$,pt(he._payload),Oe)}if(Ye(he))return rt(oe,$,he,Oe);if(q(he))return at(oe,$,he,Oe);Wo(oe,he)}return typeof he=="string"&&he!==""||typeof he=="number"?(he=""+he,$!==null&&$.tag===6?(o(oe,$.sibling),$=d($,he),$.return=oe,oe=$):(o(oe,$),$=$u(he,oe.mode,Oe),$.return=oe,oe=$),A(oe)):o(oe,$)}return hn}var As=rp(!0),sp=rp(!1),jo=mr(null),Xo=null,bs=null,su=null;function au(){su=bs=Xo=null}function ou(n){var i=jo.current;Kt(jo),n._currentValue=i}function lu(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function Rs(n,i){Xo=n,su=bs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(jn=!0),n.firstContext=null)}function li(n){var i=n._currentValue;if(su!==n)if(n={context:n,memoizedValue:i,next:null},bs===null){if(Xo===null)throw Error(t(308));bs=n,Xo.dependencies={lanes:0,firstContext:n}}else bs=bs.next=n;return i}var Xr=null;function cu(n){Xr===null?Xr=[n]:Xr.push(n)}function ap(n,i,o,u){var d=i.interleaved;return d===null?(o.next=o,cu(i)):(o.next=d.next,d.next=o),i.interleaved=o,Ki(n,u)}function Ki(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var _r=!1;function uu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function op(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Zi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function xr(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Ft&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Ki(n,o)}return d=u.interleaved,d===null?(i.next=i,cu(u)):(i.next=d.next,d.next=i),u.interleaved=i,Ki(n,o)}function qo(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,pn(n,o)}}function lp(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var A={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?d=m=A:m=m.next=A,o=o.next}while(o!==null);m===null?d=m=i:m=m.next=i}else d=m=i;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Yo(n,i,o,u){var d=n.updateQueue;_r=!1;var m=d.firstBaseUpdate,A=d.lastBaseUpdate,B=d.shared.pending;if(B!==null){d.shared.pending=null;var j=B,de=j.next;j.next=null,A===null?m=de:A.next=de,A=j;var Ae=n.alternate;Ae!==null&&(Ae=Ae.updateQueue,B=Ae.lastBaseUpdate,B!==A&&(B===null?Ae.firstBaseUpdate=de:B.next=de,Ae.lastBaseUpdate=j))}if(m!==null){var Pe=d.baseState;A=0,Ae=de=j=null,B=m;do{var Te=B.lane,Ke=B.eventTime;if((u&Te)===Te){Ae!==null&&(Ae=Ae.next={eventTime:Ke,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var rt=n,at=B;switch(Te=i,Ke=o,at.tag){case 1:if(rt=at.payload,typeof rt=="function"){Pe=rt.call(Ke,Pe,Te);break e}Pe=rt;break e;case 3:rt.flags=rt.flags&-65537|128;case 0:if(rt=at.payload,Te=typeof rt=="function"?rt.call(Ke,Pe,Te):rt,Te==null)break e;Pe=Y({},Pe,Te);break e;case 2:_r=!0}}B.callback!==null&&B.lane!==0&&(n.flags|=64,Te=d.effects,Te===null?d.effects=[B]:Te.push(B))}else Ke={eventTime:Ke,lane:Te,tag:B.tag,payload:B.payload,callback:B.callback,next:null},Ae===null?(de=Ae=Ke,j=Pe):Ae=Ae.next=Ke,A|=Te;if(B=B.next,B===null){if(B=d.shared.pending,B===null)break;Te=B,B=Te.next,Te.next=null,d.lastBaseUpdate=Te,d.shared.pending=null}}while(!0);if(Ae===null&&(j=Pe),d.baseState=j,d.firstBaseUpdate=de,d.lastBaseUpdate=Ae,i=d.shared.interleaved,i!==null){d=i;do A|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);$r|=A,n.lanes=A,n.memoizedState=Pe}}function cp(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=o,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var Pa={},Li=mr(Pa),Na=mr(Pa),La=mr(Pa);function qr(n){if(n===Pa)throw Error(t(174));return n}function hu(n,i){switch(qt(La,i),qt(Na,n),qt(Li,Pa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Pt(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Pt(i,n)}Kt(Li),qt(Li,i)}function Cs(){Kt(Li),Kt(Na),Kt(La)}function up(n){qr(La.current);var i=qr(Li.current),o=Pt(i,n.type);i!==o&&(qt(Na,n),qt(Li,o))}function du(n){Na.current===n&&(Kt(Li),Kt(Na))}var rn=mr(0);function $o(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var fu=[];function pu(){for(var n=0;n<fu.length;n++)fu[n]._workInProgressVersionPrimary=null;fu.length=0}var Ko=C.ReactCurrentDispatcher,mu=C.ReactCurrentBatchConfig,Yr=0,sn=null,gn=null,Mn=null,Zo=!1,Da=!1,Ia=0,r_=0;function Ln(){throw Error(t(321))}function gu(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!gi(n[o],i[o]))return!1;return!0}function vu(n,i,o,u,d,m){if(Yr=m,sn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ko.current=n===null||n.memoizedState===null?l_:c_,n=o(u,d),Da){m=0;do{if(Da=!1,Ia=0,25<=m)throw Error(t(301));m+=1,Mn=gn=null,i.updateQueue=null,Ko.current=u_,n=o(u,d)}while(Da)}if(Ko.current=el,i=gn!==null&&gn.next!==null,Yr=0,Mn=gn=sn=null,Zo=!1,i)throw Error(t(300));return n}function _u(){var n=Ia!==0;return Ia=0,n}function Di(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mn===null?sn.memoizedState=Mn=n:Mn=Mn.next=n,Mn}function ci(){if(gn===null){var n=sn.alternate;n=n!==null?n.memoizedState:null}else n=gn.next;var i=Mn===null?sn.memoizedState:Mn.next;if(i!==null)Mn=i,gn=n;else{if(n===null)throw Error(t(310));gn=n,n={memoizedState:gn.memoizedState,baseState:gn.baseState,baseQueue:gn.baseQueue,queue:gn.queue,next:null},Mn===null?sn.memoizedState=Mn=n:Mn=Mn.next=n}return Mn}function Ua(n,i){return typeof i=="function"?i(n):i}function xu(n){var i=ci(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=gn,d=u.baseQueue,m=o.pending;if(m!==null){if(d!==null){var A=d.next;d.next=m.next,m.next=A}u.baseQueue=d=m,o.pending=null}if(d!==null){m=d.next,u=u.baseState;var B=A=null,j=null,de=m;do{var Ae=de.lane;if((Yr&Ae)===Ae)j!==null&&(j=j.next={lane:0,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null}),u=de.hasEagerState?de.eagerState:n(u,de.action);else{var Pe={lane:Ae,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null};j===null?(B=j=Pe,A=u):j=j.next=Pe,sn.lanes|=Ae,$r|=Ae}de=de.next}while(de!==null&&de!==m);j===null?A=u:j.next=B,gi(u,i.memoizedState)||(jn=!0),i.memoizedState=u,i.baseState=A,i.baseQueue=j,o.lastRenderedState=u}if(n=o.interleaved,n!==null){d=n;do m=d.lane,sn.lanes|=m,$r|=m,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function yu(n){var i=ci(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,d=o.pending,m=i.memoizedState;if(d!==null){o.pending=null;var A=d=d.next;do m=n(m,A.action),A=A.next;while(A!==d);gi(m,i.memoizedState)||(jn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,u]}function hp(){}function dp(n,i){var o=sn,u=ci(),d=i(),m=!gi(u.memoizedState,d);if(m&&(u.memoizedState=d,jn=!0),u=u.queue,Su(mp.bind(null,o,u,n),[n]),u.getSnapshot!==i||m||Mn!==null&&Mn.memoizedState.tag&1){if(o.flags|=2048,Fa(9,pp.bind(null,o,u,d,i),void 0,null),En===null)throw Error(t(349));(Yr&30)!==0||fp(o,i,d)}return d}function fp(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=sn.updateQueue,i===null?(i={lastEffect:null,stores:null},sn.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function pp(n,i,o,u){i.value=o,i.getSnapshot=u,gp(i)&&vp(n)}function mp(n,i,o){return o(function(){gp(i)&&vp(n)})}function gp(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!gi(n,o)}catch{return!0}}function vp(n){var i=Ki(n,1);i!==null&&Si(i,n,1,-1)}function _p(n){var i=Di();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:n},i.queue=n,n=n.dispatch=o_.bind(null,sn,n),[i.memoizedState,n]}function Fa(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=sn.updateQueue,i===null?(i={lastEffect:null,stores:null},sn.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function xp(){return ci().memoizedState}function Jo(n,i,o,u){var d=Di();sn.flags|=n,d.memoizedState=Fa(1|i,o,void 0,u===void 0?null:u)}function Qo(n,i,o,u){var d=ci();u=u===void 0?null:u;var m=void 0;if(gn!==null){var A=gn.memoizedState;if(m=A.destroy,u!==null&&gu(u,A.deps)){d.memoizedState=Fa(i,o,m,u);return}}sn.flags|=n,d.memoizedState=Fa(1|i,o,m,u)}function yp(n,i){return Jo(8390656,8,n,i)}function Su(n,i){return Qo(2048,8,n,i)}function Sp(n,i){return Qo(4,2,n,i)}function Mp(n,i){return Qo(4,4,n,i)}function Ep(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Tp(n,i,o){return o=o!=null?o.concat([n]):null,Qo(4,4,Ep.bind(null,i,n),o)}function Mu(){}function wp(n,i){var o=ci();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&gu(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function Ap(n,i){var o=ci();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&gu(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function bp(n,i,o){return(Yr&21)===0?(n.baseState&&(n.baseState=!1,jn=!0),n.memoizedState=o):(gi(o,i)||(o=Wt(),sn.lanes|=o,$r|=o,n.baseState=!0),i)}function s_(n,i){var o=ct;ct=o!==0&&4>o?o:4,n(!0);var u=mu.transition;mu.transition={};try{n(!1),i()}finally{ct=o,mu.transition=u}}function Rp(){return ci().memoizedState}function a_(n,i,o){var u=Er(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Cp(n))Pp(i,o);else if(o=ap(n,i,o,u),o!==null){var d=zn();Si(o,n,u,d),Np(o,i,u)}}function o_(n,i,o){var u=Er(n),d={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Cp(n))Pp(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var A=i.lastRenderedState,B=m(A,o);if(d.hasEagerState=!0,d.eagerState=B,gi(B,A)){var j=i.interleaved;j===null?(d.next=d,cu(i)):(d.next=j.next,j.next=d),i.interleaved=d;return}}catch{}finally{}o=ap(n,i,d,u),o!==null&&(d=zn(),Si(o,n,u,d),Np(o,i,u))}}function Cp(n){var i=n.alternate;return n===sn||i!==null&&i===sn}function Pp(n,i){Da=Zo=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Np(n,i,o){if((o&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,pn(n,o)}}var el={readContext:li,useCallback:Ln,useContext:Ln,useEffect:Ln,useImperativeHandle:Ln,useInsertionEffect:Ln,useLayoutEffect:Ln,useMemo:Ln,useReducer:Ln,useRef:Ln,useState:Ln,useDebugValue:Ln,useDeferredValue:Ln,useTransition:Ln,useMutableSource:Ln,useSyncExternalStore:Ln,useId:Ln,unstable_isNewReconciler:!1},l_={readContext:li,useCallback:function(n,i){return Di().memoizedState=[n,i===void 0?null:i],n},useContext:li,useEffect:yp,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Jo(4194308,4,Ep.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Jo(4194308,4,n,i)},useInsertionEffect:function(n,i){return Jo(4,2,n,i)},useMemo:function(n,i){var o=Di();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=Di();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=a_.bind(null,sn,n),[u.memoizedState,n]},useRef:function(n){var i=Di();return n={current:n},i.memoizedState=n},useState:_p,useDebugValue:Mu,useDeferredValue:function(n){return Di().memoizedState=n},useTransition:function(){var n=_p(!1),i=n[0];return n=s_.bind(null,n[1]),Di().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=sn,d=Di();if(en){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),En===null)throw Error(t(349));(Yr&30)!==0||fp(u,i,o)}d.memoizedState=o;var m={value:o,getSnapshot:i};return d.queue=m,yp(mp.bind(null,u,m,n),[n]),u.flags|=2048,Fa(9,pp.bind(null,u,m,o,i),void 0,null),o},useId:function(){var n=Di(),i=En.identifierPrefix;if(en){var o=$i,u=Yi;o=(u&~(1<<32-ie(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=Ia++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=r_++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},c_={readContext:li,useCallback:wp,useContext:li,useEffect:Su,useImperativeHandle:Tp,useInsertionEffect:Sp,useLayoutEffect:Mp,useMemo:Ap,useReducer:xu,useRef:xp,useState:function(){return xu(Ua)},useDebugValue:Mu,useDeferredValue:function(n){var i=ci();return bp(i,gn.memoizedState,n)},useTransition:function(){var n=xu(Ua)[0],i=ci().memoizedState;return[n,i]},useMutableSource:hp,useSyncExternalStore:dp,useId:Rp,unstable_isNewReconciler:!1},u_={readContext:li,useCallback:wp,useContext:li,useEffect:Su,useImperativeHandle:Tp,useInsertionEffect:Sp,useLayoutEffect:Mp,useMemo:Ap,useReducer:yu,useRef:xp,useState:function(){return yu(Ua)},useDebugValue:Mu,useDeferredValue:function(n){var i=ci();return gn===null?i.memoizedState=n:bp(i,gn.memoizedState,n)},useTransition:function(){var n=yu(Ua)[0],i=ci().memoizedState;return[n,i]},useMutableSource:hp,useSyncExternalStore:dp,useId:Rp,unstable_isNewReconciler:!1};function _i(n,i){if(n&&n.defaultProps){i=Y({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function Eu(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:Y({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var tl={isMounted:function(n){return(n=n._reactInternals)?bi(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=zn(),d=Er(n),m=Zi(u,d);m.payload=i,o!=null&&(m.callback=o),i=xr(n,m,d),i!==null&&(Si(i,n,d,u),qo(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=zn(),d=Er(n),m=Zi(u,d);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=xr(n,m,d),i!==null&&(Si(i,n,d,u),qo(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=zn(),u=Er(n),d=Zi(o,u);d.tag=2,i!=null&&(d.callback=i),i=xr(n,d,u),i!==null&&(Si(i,n,u,o),qo(i,n,u))}};function Lp(n,i,o,u,d,m,A){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,A):i.prototype&&i.prototype.isPureReactComponent?!Ma(o,u)||!Ma(d,m):!0}function Dp(n,i,o){var u=!1,d=gr,m=i.contextType;return typeof m=="object"&&m!==null?m=li(m):(d=Wn(i)?Vr:Nn.current,u=i.contextTypes,m=(u=u!=null)?Ms(n,d):gr),i=new i(o,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=tl,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function Ip(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&tl.enqueueReplaceState(i,i.state,null)}function Tu(n,i,o,u){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},uu(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=li(m):(m=Wn(i)?Vr:Nn.current,d.context=Ms(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Eu(n,i,m,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&tl.enqueueReplaceState(d,d.state,null),Yo(n,o,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Ps(n,i){try{var o="",u=i;do o+=_e(u),u=u.return;while(u);var d=o}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function wu(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function Au(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var h_=typeof WeakMap=="function"?WeakMap:Map;function Up(n,i,o){o=Zi(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){ll||(ll=!0,Hu=u),Au(n,i)},o}function Fp(n,i,o){o=Zi(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;o.payload=function(){return u(d)},o.callback=function(){Au(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){Au(n,i),typeof u!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var A=i.stack;this.componentDidCatch(i.value,{componentStack:A!==null?A:""})}),o}function Op(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new h_;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(o)||(d.add(o),n=w_.bind(null,n,i,o),i.then(n,n))}function kp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Bp(n,i,o,u,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Zi(-1,1),i.tag=2,xr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var d_=C.ReactCurrentOwner,jn=!1;function Bn(n,i,o,u){i.child=n===null?sp(i,null,o,u):As(i,n.child,o,u)}function zp(n,i,o,u,d){o=o.render;var m=i.ref;return Rs(i,d),u=vu(n,i,o,u,m,d),o=_u(),n!==null&&!jn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Ji(n,i,d)):(en&&o&&eu(i),i.flags|=1,Bn(n,i,u,d),i.child)}function Hp(n,i,o,u,d){if(n===null){var m=o.type;return typeof m=="function"&&!Yu(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,Gp(n,i,m,u,d)):(n=pl(o.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var A=m.memoizedProps;if(o=o.compare,o=o!==null?o:Ma,o(A,u)&&n.ref===i.ref)return Ji(n,i,d)}return i.flags|=1,n=wr(m,u),n.ref=i.ref,n.return=i,i.child=n}function Gp(n,i,o,u,d){if(n!==null){var m=n.memoizedProps;if(Ma(m,u)&&n.ref===i.ref)if(jn=!1,i.pendingProps=u=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(jn=!0);else return i.lanes=n.lanes,Ji(n,i,d)}return bu(n,i,o,u,d)}function Vp(n,i,o){var u=i.pendingProps,d=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},qt(Ls,ni),ni|=o;else{if((o&1073741824)===0)return n=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,qt(Ls,ni),ni|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:o,qt(Ls,ni),ni|=u}else m!==null?(u=m.baseLanes|o,i.memoizedState=null):u=o,qt(Ls,ni),ni|=u;return Bn(n,i,d,o),i.child}function Wp(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function bu(n,i,o,u,d){var m=Wn(o)?Vr:Nn.current;return m=Ms(i,m),Rs(i,d),o=vu(n,i,o,u,m,d),u=_u(),n!==null&&!jn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Ji(n,i,d)):(en&&u&&eu(i),i.flags|=1,Bn(n,i,o,d),i.child)}function jp(n,i,o,u,d){if(Wn(o)){var m=!0;Bo(i)}else m=!1;if(Rs(i,d),i.stateNode===null)il(n,i),Dp(i,o,u),Tu(i,o,u,d),u=!0;else if(n===null){var A=i.stateNode,B=i.memoizedProps;A.props=B;var j=A.context,de=o.contextType;typeof de=="object"&&de!==null?de=li(de):(de=Wn(o)?Vr:Nn.current,de=Ms(i,de));var Ae=o.getDerivedStateFromProps,Pe=typeof Ae=="function"||typeof A.getSnapshotBeforeUpdate=="function";Pe||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(B!==u||j!==de)&&Ip(i,A,u,de),_r=!1;var Te=i.memoizedState;A.state=Te,Yo(i,u,A,d),j=i.memoizedState,B!==u||Te!==j||Vn.current||_r?(typeof Ae=="function"&&(Eu(i,o,Ae,u),j=i.memoizedState),(B=_r||Lp(i,o,B,u,Te,j,de))?(Pe||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(i.flags|=4194308)):(typeof A.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=j),A.props=u,A.state=j,A.context=de,u=B):(typeof A.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{A=i.stateNode,op(n,i),B=i.memoizedProps,de=i.type===i.elementType?B:_i(i.type,B),A.props=de,Pe=i.pendingProps,Te=A.context,j=o.contextType,typeof j=="object"&&j!==null?j=li(j):(j=Wn(o)?Vr:Nn.current,j=Ms(i,j));var Ke=o.getDerivedStateFromProps;(Ae=typeof Ke=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(B!==Pe||Te!==j)&&Ip(i,A,u,j),_r=!1,Te=i.memoizedState,A.state=Te,Yo(i,u,A,d);var rt=i.memoizedState;B!==Pe||Te!==rt||Vn.current||_r?(typeof Ke=="function"&&(Eu(i,o,Ke,u),rt=i.memoizedState),(de=_r||Lp(i,o,de,u,Te,rt,j)||!1)?(Ae||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(u,rt,j),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(u,rt,j)),typeof A.componentDidUpdate=="function"&&(i.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof A.componentDidUpdate!="function"||B===n.memoizedProps&&Te===n.memoizedState||(i.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&Te===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=rt),A.props=u,A.state=rt,A.context=j,u=de):(typeof A.componentDidUpdate!="function"||B===n.memoizedProps&&Te===n.memoizedState||(i.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&Te===n.memoizedState||(i.flags|=1024),u=!1)}return Ru(n,i,o,u,m,d)}function Ru(n,i,o,u,d,m){Wp(n,i);var A=(i.flags&128)!==0;if(!u&&!A)return d&&Kf(i,o,!1),Ji(n,i,m);u=i.stateNode,d_.current=i;var B=A&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&A?(i.child=As(i,n.child,null,m),i.child=As(i,null,B,m)):Bn(n,i,B,m),i.memoizedState=u.state,d&&Kf(i,o,!0),i.child}function Xp(n){var i=n.stateNode;i.pendingContext?Yf(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Yf(n,i.context,!1),hu(n,i.containerInfo)}function qp(n,i,o,u,d){return ws(),ru(d),i.flags|=256,Bn(n,i,o,u),i.child}var Cu={dehydrated:null,treeContext:null,retryLane:0};function Pu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Yp(n,i,o){var u=i.pendingProps,d=rn.current,m=!1,A=(i.flags&128)!==0,B;if((B=A)||(B=n!==null&&n.memoizedState===null?!1:(d&2)!==0),B?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),qt(rn,d&1),n===null)return iu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(A=u.children,n=u.fallback,m?(u=i.mode,m=i.child,A={mode:"hidden",children:A},(u&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=A):m=ml(A,u,0,null),n=Qr(n,u,o,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=Pu(o),i.memoizedState=Cu,n):Nu(i,A));if(d=n.memoizedState,d!==null&&(B=d.dehydrated,B!==null))return f_(n,i,A,u,B,d,o);if(m){m=u.fallback,A=i.mode,d=n.child,B=d.sibling;var j={mode:"hidden",children:u.children};return(A&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=j,i.deletions=null):(u=wr(d,j),u.subtreeFlags=d.subtreeFlags&14680064),B!==null?m=wr(B,m):(m=Qr(m,A,o,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,A=n.child.memoizedState,A=A===null?Pu(o):{baseLanes:A.baseLanes|o,cachePool:null,transitions:A.transitions},m.memoizedState=A,m.childLanes=n.childLanes&~o,i.memoizedState=Cu,u}return m=n.child,n=m.sibling,u=wr(m,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function Nu(n,i){return i=ml({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function nl(n,i,o,u){return u!==null&&ru(u),As(i,n.child,null,o),n=Nu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function f_(n,i,o,u,d,m,A){if(o)return i.flags&256?(i.flags&=-257,u=wu(Error(t(422))),nl(n,i,A,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=u.fallback,d=i.mode,u=ml({mode:"visible",children:u.children},d,0,null),m=Qr(m,d,A,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,(i.mode&1)!==0&&As(i,n.child,null,A),i.child.memoizedState=Pu(A),i.memoizedState=Cu,m);if((i.mode&1)===0)return nl(n,i,A,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var B=u.dgst;return u=B,m=Error(t(419)),u=wu(m,u,void 0),nl(n,i,A,u)}if(B=(A&n.childLanes)!==0,jn||B){if(u=En,u!==null){switch(A&-A){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|A))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Ki(n,d),Si(u,n,d,-1))}return qu(),u=wu(Error(t(421))),nl(n,i,A,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=A_.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,ti=pr(d.nextSibling),ei=i,en=!0,vi=null,n!==null&&(ai[oi++]=Yi,ai[oi++]=$i,ai[oi++]=Wr,Yi=n.id,$i=n.overflow,Wr=i),i=Nu(i,u.children),i.flags|=4096,i)}function $p(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),lu(n.return,i,o)}function Lu(n,i,o,u,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=d)}function Kp(n,i,o){var u=i.pendingProps,d=u.revealOrder,m=u.tail;if(Bn(n,i,u.children,o),u=rn.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&$p(n,o,i);else if(n.tag===19)$p(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(qt(rn,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&$o(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),Lu(i,!1,d,o,m);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&$o(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}Lu(i,!0,o,null,m);break;case"together":Lu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function il(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Ji(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),$r|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=wr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=wr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function p_(n,i,o){switch(i.tag){case 3:Xp(i),ws();break;case 5:up(i);break;case 1:Wn(i.type)&&Bo(i);break;case 4:hu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;qt(jo,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(qt(rn,rn.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Yp(n,i,o):(qt(rn,rn.current&1),n=Ji(n,i,o),n!==null?n.sibling:null);qt(rn,rn.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(n.flags&128)!==0){if(u)return Kp(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),qt(rn,rn.current),u)break;return null;case 22:case 23:return i.lanes=0,Vp(n,i,o)}return Ji(n,i,o)}var Zp,Du,Jp,Qp;Zp=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Du=function(){},Jp=function(n,i,o,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,qr(Li.current);var m=null;switch(o){case"input":d=ce(n,d),u=ce(n,u),m=[];break;case"select":d=Y({},d,{value:void 0}),u=Y({},u,{value:void 0}),m=[];break;case"textarea":d=dt(n,d),u=dt(n,u),m=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Fo)}ve(o,u);var A;o=null;for(de in d)if(!u.hasOwnProperty(de)&&d.hasOwnProperty(de)&&d[de]!=null)if(de==="style"){var B=d[de];for(A in B)B.hasOwnProperty(A)&&(o||(o={}),o[A]="")}else de!=="dangerouslySetInnerHTML"&&de!=="children"&&de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&de!=="autoFocus"&&(a.hasOwnProperty(de)?m||(m=[]):(m=m||[]).push(de,null));for(de in u){var j=u[de];if(B=d!=null?d[de]:void 0,u.hasOwnProperty(de)&&j!==B&&(j!=null||B!=null))if(de==="style")if(B){for(A in B)!B.hasOwnProperty(A)||j&&j.hasOwnProperty(A)||(o||(o={}),o[A]="");for(A in j)j.hasOwnProperty(A)&&B[A]!==j[A]&&(o||(o={}),o[A]=j[A])}else o||(m||(m=[]),m.push(de,o)),o=j;else de==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,B=B?B.__html:void 0,j!=null&&B!==j&&(m=m||[]).push(de,j)):de==="children"?typeof j!="string"&&typeof j!="number"||(m=m||[]).push(de,""+j):de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&(a.hasOwnProperty(de)?(j!=null&&de==="onScroll"&&$t("scroll",n),m||B===j||(m=[])):(m=m||[]).push(de,j))}o&&(m=m||[]).push("style",o);var de=m;(i.updateQueue=de)&&(i.flags|=4)}},Qp=function(n,i,o,u){o!==u&&(i.flags|=4)};function Oa(n,i){if(!en)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Dn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function m_(n,i,o){var u=i.pendingProps;switch(tu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dn(i),null;case 1:return Wn(i.type)&&ko(),Dn(i),null;case 3:return u=i.stateNode,Cs(),Kt(Vn),Kt(Nn),pu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Vo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,vi!==null&&(Wu(vi),vi=null))),Du(n,i),Dn(i),null;case 5:du(i);var d=qr(La.current);if(o=i.type,n!==null&&i.stateNode!=null)Jp(n,i,o,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return Dn(i),null}if(n=qr(Li.current),Vo(i)){u=i.stateNode,o=i.type;var m=i.memoizedProps;switch(u[Ni]=i,u[ba]=m,n=(i.mode&1)!==0,o){case"dialog":$t("cancel",u),$t("close",u);break;case"iframe":case"object":case"embed":$t("load",u);break;case"video":case"audio":for(d=0;d<Ta.length;d++)$t(Ta[d],u);break;case"source":$t("error",u);break;case"img":case"image":case"link":$t("error",u),$t("load",u);break;case"details":$t("toggle",u);break;case"input":ye(u,m),$t("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},$t("invalid",u);break;case"textarea":Mt(u,m),$t("invalid",u)}ve(o,m),d=null;for(var A in m)if(m.hasOwnProperty(A)){var B=m[A];A==="children"?typeof B=="string"?u.textContent!==B&&(m.suppressHydrationWarning!==!0&&Uo(u.textContent,B,n),d=["children",B]):typeof B=="number"&&u.textContent!==""+B&&(m.suppressHydrationWarning!==!0&&Uo(u.textContent,B,n),d=["children",""+B]):a.hasOwnProperty(A)&&B!=null&&A==="onScroll"&&$t("scroll",u)}switch(o){case"input":ee(u),we(u,m,!0);break;case"textarea":ee(u),Lt(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=Fo)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{A=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ft(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=A.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=A.createElement(o,{is:u.is}):(n=A.createElement(o),o==="select"&&(A=n,u.multiple?A.multiple=!0:u.size&&(A.size=u.size))):n=A.createElementNS(n,o),n[Ni]=i,n[ba]=u,Zp(n,i,!1,!1),i.stateNode=n;e:{switch(A=Le(o,u),o){case"dialog":$t("cancel",n),$t("close",n),d=u;break;case"iframe":case"object":case"embed":$t("load",n),d=u;break;case"video":case"audio":for(d=0;d<Ta.length;d++)$t(Ta[d],n);d=u;break;case"source":$t("error",n),d=u;break;case"img":case"image":case"link":$t("error",n),$t("load",n),d=u;break;case"details":$t("toggle",n),d=u;break;case"input":ye(n,u),d=ce(n,u),$t("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=Y({},u,{value:void 0}),$t("invalid",n);break;case"textarea":Mt(n,u),d=dt(n,u),$t("invalid",n);break;default:d=u}ve(o,d),B=d;for(m in B)if(B.hasOwnProperty(m)){var j=B[m];m==="style"?re(n,j):m==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,j!=null&&Vt(n,j)):m==="children"?typeof j=="string"?(o!=="textarea"||j!=="")&&it(n,j):typeof j=="number"&&it(n,""+j):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?j!=null&&m==="onScroll"&&$t("scroll",n):j!=null&&L(n,m,j,A))}switch(o){case"input":ee(n),we(n,u,!1);break;case"textarea":ee(n),Lt(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Se(u.value));break;case"select":n.multiple=!!u.multiple,m=u.value,m!=null?Ze(n,!!u.multiple,m,!1):u.defaultValue!=null&&Ze(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Fo)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Dn(i),null;case 6:if(n&&i.stateNode!=null)Qp(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=qr(La.current),qr(Li.current),Vo(i)){if(u=i.stateNode,o=i.memoizedProps,u[Ni]=i,(m=u.nodeValue!==o)&&(n=ei,n!==null))switch(n.tag){case 3:Uo(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Uo(u.nodeValue,o,(n.mode&1)!==0)}m&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[Ni]=i,i.stateNode=u}return Dn(i),null;case 13:if(Kt(rn),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(en&&ti!==null&&(i.mode&1)!==0&&(i.flags&128)===0)np(),ws(),i.flags|=98560,m=!1;else if(m=Vo(i),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Ni]=i}else ws(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Dn(i),m=!1}else vi!==null&&(Wu(vi),vi=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(rn.current&1)!==0?vn===0&&(vn=3):qu())),i.updateQueue!==null&&(i.flags|=4),Dn(i),null);case 4:return Cs(),Du(n,i),n===null&&wa(i.stateNode.containerInfo),Dn(i),null;case 10:return ou(i.type._context),Dn(i),null;case 17:return Wn(i.type)&&ko(),Dn(i),null;case 19:if(Kt(rn),m=i.memoizedState,m===null)return Dn(i),null;if(u=(i.flags&128)!==0,A=m.rendering,A===null)if(u)Oa(m,!1);else{if(vn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(A=$o(n),A!==null){for(i.flags|=128,Oa(m,!1),u=A.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)m=o,n=u,m.flags&=14680066,A=m.alternate,A===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=A.childLanes,m.lanes=A.lanes,m.child=A.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=A.memoizedProps,m.memoizedState=A.memoizedState,m.updateQueue=A.updateQueue,m.type=A.type,n=A.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return qt(rn,rn.current&1|2),i.child}n=n.sibling}m.tail!==null&&Jt()>Ds&&(i.flags|=128,u=!0,Oa(m,!1),i.lanes=4194304)}else{if(!u)if(n=$o(A),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Oa(m,!0),m.tail===null&&m.tailMode==="hidden"&&!A.alternate&&!en)return Dn(i),null}else 2*Jt()-m.renderingStartTime>Ds&&o!==1073741824&&(i.flags|=128,u=!0,Oa(m,!1),i.lanes=4194304);m.isBackwards?(A.sibling=i.child,i.child=A):(o=m.last,o!==null?o.sibling=A:i.child=A,m.last=A)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Jt(),i.sibling=null,o=rn.current,qt(rn,u?o&1|2:o&1),i):(Dn(i),null);case 22:case 23:return Xu(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(ni&1073741824)!==0&&(Dn(i),i.subtreeFlags&6&&(i.flags|=8192)):Dn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function g_(n,i){switch(tu(i),i.tag){case 1:return Wn(i.type)&&ko(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Cs(),Kt(Vn),Kt(Nn),pu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return du(i),null;case 13:if(Kt(rn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ws()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Kt(rn),null;case 4:return Cs(),null;case 10:return ou(i.type._context),null;case 22:case 23:return Xu(),null;case 24:return null;default:return null}}var rl=!1,In=!1,v_=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function Ns(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){cn(n,i,u)}else o.current=null}function Iu(n,i,o){try{o()}catch(u){cn(n,i,u)}}var em=!1;function __(n,i){if(Xc=To,n=Lf(),kc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var A=0,B=-1,j=-1,de=0,Ae=0,Pe=n,Te=null;t:for(;;){for(var Ke;Pe!==o||d!==0&&Pe.nodeType!==3||(B=A+d),Pe!==m||u!==0&&Pe.nodeType!==3||(j=A+u),Pe.nodeType===3&&(A+=Pe.nodeValue.length),(Ke=Pe.firstChild)!==null;)Te=Pe,Pe=Ke;for(;;){if(Pe===n)break t;if(Te===o&&++de===d&&(B=A),Te===m&&++Ae===u&&(j=A),(Ke=Pe.nextSibling)!==null)break;Pe=Te,Te=Pe.parentNode}Pe=Ke}o=B===-1||j===-1?null:{start:B,end:j}}else o=null}o=o||{start:0,end:0}}else o=null;for(qc={focusedElem:n,selectionRange:o},To=!1,Qe=i;Qe!==null;)if(i=Qe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Qe=n;else for(;Qe!==null;){i=Qe;try{var rt=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(rt!==null){var at=rt.memoizedProps,hn=rt.memoizedState,oe=i.stateNode,$=oe.getSnapshotBeforeUpdate(i.elementType===i.type?at:_i(i.type,at),hn);oe.__reactInternalSnapshotBeforeUpdate=$}break;case 3:var he=i.stateNode.containerInfo;he.nodeType===1?he.textContent="":he.nodeType===9&&he.documentElement&&he.removeChild(he.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Oe){cn(i,i.return,Oe)}if(n=i.sibling,n!==null){n.return=i.return,Qe=n;break}Qe=i.return}return rt=em,em=!1,rt}function ka(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&Iu(i,o,m)}d=d.next}while(d!==u)}}function sl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function Uu(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function tm(n){var i=n.alternate;i!==null&&(n.alternate=null,tm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ni],delete i[ba],delete i[Zc],delete i[e_],delete i[t_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function nm(n){return n.tag===5||n.tag===3||n.tag===4}function im(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||nm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Fu(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Fo));else if(u!==4&&(n=n.child,n!==null))for(Fu(n,i,o),n=n.sibling;n!==null;)Fu(n,i,o),n=n.sibling}function Ou(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Ou(n,i,o),n=n.sibling;n!==null;)Ou(n,i,o),n=n.sibling}var bn=null,xi=!1;function yr(n,i,o){for(o=o.child;o!==null;)rm(n,i,o),o=o.sibling}function rm(n,i,o){if(ue&&typeof ue.onCommitFiberUnmount=="function")try{ue.onCommitFiberUnmount(W,o)}catch{}switch(o.tag){case 5:In||Ns(o,i);case 6:var u=bn,d=xi;bn=null,yr(n,i,o),bn=u,xi=d,bn!==null&&(xi?(n=bn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):bn.removeChild(o.stateNode));break;case 18:bn!==null&&(xi?(n=bn,o=o.stateNode,n.nodeType===8?Kc(n.parentNode,o):n.nodeType===1&&Kc(n,o),ga(n)):Kc(bn,o.stateNode));break;case 4:u=bn,d=xi,bn=o.stateNode.containerInfo,xi=!0,yr(n,i,o),bn=u,xi=d;break;case 0:case 11:case 14:case 15:if(!In&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var m=d,A=m.destroy;m=m.tag,A!==void 0&&((m&2)!==0||(m&4)!==0)&&Iu(o,i,A),d=d.next}while(d!==u)}yr(n,i,o);break;case 1:if(!In&&(Ns(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(B){cn(o,i,B)}yr(n,i,o);break;case 21:yr(n,i,o);break;case 22:o.mode&1?(In=(u=In)||o.memoizedState!==null,yr(n,i,o),In=u):yr(n,i,o);break;default:yr(n,i,o)}}function sm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new v_),i.forEach(function(u){var d=b_.bind(null,n,u);o.has(u)||(o.add(u),u.then(d,d))})}}function yi(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];try{var m=n,A=i,B=A;e:for(;B!==null;){switch(B.tag){case 5:bn=B.stateNode,xi=!1;break e;case 3:bn=B.stateNode.containerInfo,xi=!0;break e;case 4:bn=B.stateNode.containerInfo,xi=!0;break e}B=B.return}if(bn===null)throw Error(t(160));rm(m,A,d),bn=null,xi=!1;var j=d.alternate;j!==null&&(j.return=null),d.return=null}catch(de){cn(d,i,de)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)am(i,n),i=i.sibling}function am(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(yi(i,n),Ii(n),u&4){try{ka(3,n,n.return),sl(3,n)}catch(at){cn(n,n.return,at)}try{ka(5,n,n.return)}catch(at){cn(n,n.return,at)}}break;case 1:yi(i,n),Ii(n),u&512&&o!==null&&Ns(o,o.return);break;case 5:if(yi(i,n),Ii(n),u&512&&o!==null&&Ns(o,o.return),n.flags&32){var d=n.stateNode;try{it(d,"")}catch(at){cn(n,n.return,at)}}if(u&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,A=o!==null?o.memoizedProps:m,B=n.type,j=n.updateQueue;if(n.updateQueue=null,j!==null)try{B==="input"&&m.type==="radio"&&m.name!=null&&xe(d,m),Le(B,A);var de=Le(B,m);for(A=0;A<j.length;A+=2){var Ae=j[A],Pe=j[A+1];Ae==="style"?re(d,Pe):Ae==="dangerouslySetInnerHTML"?Vt(d,Pe):Ae==="children"?it(d,Pe):L(d,Ae,Pe,de)}switch(B){case"input":Ne(d,m);break;case"textarea":V(d,m);break;case"select":var Te=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var Ke=m.value;Ke!=null?Ze(d,!!m.multiple,Ke,!1):Te!==!!m.multiple&&(m.defaultValue!=null?Ze(d,!!m.multiple,m.defaultValue,!0):Ze(d,!!m.multiple,m.multiple?[]:"",!1))}d[ba]=m}catch(at){cn(n,n.return,at)}}break;case 6:if(yi(i,n),Ii(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(at){cn(n,n.return,at)}}break;case 3:if(yi(i,n),Ii(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{ga(i.containerInfo)}catch(at){cn(n,n.return,at)}break;case 4:yi(i,n),Ii(n);break;case 13:yi(i,n),Ii(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(zu=Jt())),u&4&&sm(n);break;case 22:if(Ae=o!==null&&o.memoizedState!==null,n.mode&1?(In=(de=In)||Ae,yi(i,n),In=de):yi(i,n),Ii(n),u&8192){if(de=n.memoizedState!==null,(n.stateNode.isHidden=de)&&!Ae&&(n.mode&1)!==0)for(Qe=n,Ae=n.child;Ae!==null;){for(Pe=Qe=Ae;Qe!==null;){switch(Te=Qe,Ke=Te.child,Te.tag){case 0:case 11:case 14:case 15:ka(4,Te,Te.return);break;case 1:Ns(Te,Te.return);var rt=Te.stateNode;if(typeof rt.componentWillUnmount=="function"){u=Te,o=Te.return;try{i=u,rt.props=i.memoizedProps,rt.state=i.memoizedState,rt.componentWillUnmount()}catch(at){cn(u,o,at)}}break;case 5:Ns(Te,Te.return);break;case 22:if(Te.memoizedState!==null){cm(Pe);continue}}Ke!==null?(Ke.return=Te,Qe=Ke):cm(Pe)}Ae=Ae.sibling}e:for(Ae=null,Pe=n;;){if(Pe.tag===5){if(Ae===null){Ae=Pe;try{d=Pe.stateNode,de?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(B=Pe.stateNode,j=Pe.memoizedProps.style,A=j!=null&&j.hasOwnProperty("display")?j.display:null,B.style.display=w("display",A))}catch(at){cn(n,n.return,at)}}}else if(Pe.tag===6){if(Ae===null)try{Pe.stateNode.nodeValue=de?"":Pe.memoizedProps}catch(at){cn(n,n.return,at)}}else if((Pe.tag!==22&&Pe.tag!==23||Pe.memoizedState===null||Pe===n)&&Pe.child!==null){Pe.child.return=Pe,Pe=Pe.child;continue}if(Pe===n)break e;for(;Pe.sibling===null;){if(Pe.return===null||Pe.return===n)break e;Ae===Pe&&(Ae=null),Pe=Pe.return}Ae===Pe&&(Ae=null),Pe.sibling.return=Pe.return,Pe=Pe.sibling}}break;case 19:yi(i,n),Ii(n),u&4&&sm(n);break;case 21:break;default:yi(i,n),Ii(n)}}function Ii(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(nm(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(it(d,""),u.flags&=-33);var m=im(n);Ou(n,m,d);break;case 3:case 4:var A=u.stateNode.containerInfo,B=im(n);Fu(n,B,A);break;default:throw Error(t(161))}}catch(j){cn(n,n.return,j)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function x_(n,i,o){Qe=n,om(n)}function om(n,i,o){for(var u=(n.mode&1)!==0;Qe!==null;){var d=Qe,m=d.child;if(d.tag===22&&u){var A=d.memoizedState!==null||rl;if(!A){var B=d.alternate,j=B!==null&&B.memoizedState!==null||In;B=rl;var de=In;if(rl=A,(In=j)&&!de)for(Qe=d;Qe!==null;)A=Qe,j=A.child,A.tag===22&&A.memoizedState!==null?um(d):j!==null?(j.return=A,Qe=j):um(d);for(;m!==null;)Qe=m,om(m),m=m.sibling;Qe=d,rl=B,In=de}lm(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,Qe=m):lm(n)}}function lm(n){for(;Qe!==null;){var i=Qe;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:In||sl(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!In)if(o===null)u.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:_i(i.type,o.memoizedProps);u.componentDidUpdate(d,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&cp(i,m,u);break;case 3:var A=i.updateQueue;if(A!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}cp(i,A,o)}break;case 5:var B=i.stateNode;if(o===null&&i.flags&4){o=B;var j=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":j.autoFocus&&o.focus();break;case"img":j.src&&(o.src=j.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var de=i.alternate;if(de!==null){var Ae=de.memoizedState;if(Ae!==null){var Pe=Ae.dehydrated;Pe!==null&&ga(Pe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}In||i.flags&512&&Uu(i)}catch(Te){cn(i,i.return,Te)}}if(i===n){Qe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Qe=o;break}Qe=i.return}}function cm(n){for(;Qe!==null;){var i=Qe;if(i===n){Qe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Qe=o;break}Qe=i.return}}function um(n){for(;Qe!==null;){var i=Qe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{sl(4,i)}catch(j){cn(i,o,j)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(j){cn(i,d,j)}}var m=i.return;try{Uu(i)}catch(j){cn(i,m,j)}break;case 5:var A=i.return;try{Uu(i)}catch(j){cn(i,A,j)}}}catch(j){cn(i,i.return,j)}if(i===n){Qe=null;break}var B=i.sibling;if(B!==null){B.return=i.return,Qe=B;break}Qe=i.return}}var y_=Math.ceil,al=C.ReactCurrentDispatcher,ku=C.ReactCurrentOwner,ui=C.ReactCurrentBatchConfig,Ft=0,En=null,dn=null,Rn=0,ni=0,Ls=mr(0),vn=0,Ba=null,$r=0,ol=0,Bu=0,za=null,Xn=null,zu=0,Ds=1/0,Qi=null,ll=!1,Hu=null,Sr=null,cl=!1,Mr=null,ul=0,Ha=0,Gu=null,hl=-1,dl=0;function zn(){return(Ft&6)!==0?Jt():hl!==-1?hl:hl=Jt()}function Er(n){return(n.mode&1)===0?1:(Ft&2)!==0&&Rn!==0?Rn&-Rn:i_.transition!==null?(dl===0&&(dl=Wt()),dl):(n=ct,n!==0||(n=window.event,n=n===void 0?16:df(n.type)),n)}function Si(n,i,o,u){if(50<Ha)throw Ha=0,Gu=null,Error(t(185));ln(n,o,u),((Ft&2)===0||n!==En)&&(n===En&&((Ft&2)===0&&(ol|=o),vn===4&&Tr(n,Rn)),qn(n,u),o===1&&Ft===0&&(i.mode&1)===0&&(Ds=Jt()+500,zo&&vr()))}function qn(n,i){var o=n.callbackNode;Rt(n,i);var u=Tt(n,n===En?Rn:0);if(u===0)o!==null&&ha(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&ha(o),i===1)n.tag===0?n_(dm.bind(null,n)):Zf(dm.bind(null,n)),Jv(function(){(Ft&6)===0&&vr()}),o=null;else{switch(Ci(u)){case 1:o=da;break;case 4:o=So;break;case 16:o=ds;break;case 536870912:o=P;break;default:o=ds}o=ym(o,hm.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function hm(n,i){if(hl=-1,dl=0,(Ft&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Is()&&n.callbackNode!==o)return null;var u=Tt(n,n===En?Rn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=fl(n,u);else{i=u;var d=Ft;Ft|=2;var m=pm();(En!==n||Rn!==i)&&(Qi=null,Ds=Jt()+500,Zr(n,i));do try{E_();break}catch(B){fm(n,B)}while(!0);au(),al.current=m,Ft=d,dn!==null?i=0:(En=null,Rn=0,i=vn)}if(i!==0){if(i===2&&(d=Qt(n),d!==0&&(u=d,i=Vu(n,d))),i===1)throw o=Ba,Zr(n,0),Tr(n,u),qn(n,Jt()),o;if(i===6)Tr(n,u);else{if(d=n.current.alternate,(u&30)===0&&!S_(d)&&(i=fl(n,u),i===2&&(m=Qt(n),m!==0&&(u=m,i=Vu(n,m))),i===1))throw o=Ba,Zr(n,0),Tr(n,u),qn(n,Jt()),o;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Jr(n,Xn,Qi);break;case 3:if(Tr(n,u),(u&130023424)===u&&(i=zu+500-Jt(),10<i)){if(Tt(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){zn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=$c(Jr.bind(null,n,Xn,Qi),i);break}Jr(n,Xn,Qi);break;case 4:if(Tr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var A=31-ie(u);m=1<<A,A=i[A],A>d&&(d=A),u&=~m}if(u=d,u=Jt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*y_(u/1960))-u,10<u){n.timeoutHandle=$c(Jr.bind(null,n,Xn,Qi),u);break}Jr(n,Xn,Qi);break;case 5:Jr(n,Xn,Qi);break;default:throw Error(t(329))}}}return qn(n,Jt()),n.callbackNode===o?hm.bind(null,n):null}function Vu(n,i){var o=za;return n.current.memoizedState.isDehydrated&&(Zr(n,i).flags|=256),n=fl(n,i),n!==2&&(i=Xn,Xn=o,i!==null&&Wu(i)),n}function Wu(n){Xn===null?Xn=n:Xn.push.apply(Xn,n)}function S_(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var d=o[u],m=d.getSnapshot;d=d.value;try{if(!gi(m(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Tr(n,i){for(i&=~Bu,i&=~ol,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-ie(i),u=1<<o;n[o]=-1,i&=~u}}function dm(n){if((Ft&6)!==0)throw Error(t(327));Is();var i=Tt(n,0);if((i&1)===0)return qn(n,Jt()),null;var o=fl(n,i);if(n.tag!==0&&o===2){var u=Qt(n);u!==0&&(i=u,o=Vu(n,u))}if(o===1)throw o=Ba,Zr(n,0),Tr(n,i),qn(n,Jt()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Jr(n,Xn,Qi),qn(n,Jt()),null}function ju(n,i){var o=Ft;Ft|=1;try{return n(i)}finally{Ft=o,Ft===0&&(Ds=Jt()+500,zo&&vr())}}function Kr(n){Mr!==null&&Mr.tag===0&&(Ft&6)===0&&Is();var i=Ft;Ft|=1;var o=ui.transition,u=ct;try{if(ui.transition=null,ct=1,n)return n()}finally{ct=u,ui.transition=o,Ft=i,(Ft&6)===0&&vr()}}function Xu(){ni=Ls.current,Kt(Ls)}function Zr(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,Zv(o)),dn!==null)for(o=dn.return;o!==null;){var u=o;switch(tu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&ko();break;case 3:Cs(),Kt(Vn),Kt(Nn),pu();break;case 5:du(u);break;case 4:Cs();break;case 13:Kt(rn);break;case 19:Kt(rn);break;case 10:ou(u.type._context);break;case 22:case 23:Xu()}o=o.return}if(En=n,dn=n=wr(n.current,null),Rn=ni=i,vn=0,Ba=null,Bu=ol=$r=0,Xn=za=null,Xr!==null){for(i=0;i<Xr.length;i++)if(o=Xr[i],u=o.interleaved,u!==null){o.interleaved=null;var d=u.next,m=o.pending;if(m!==null){var A=m.next;m.next=d,u.next=A}o.pending=u}Xr=null}return n}function fm(n,i){do{var o=dn;try{if(au(),Ko.current=el,Zo){for(var u=sn.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Zo=!1}if(Yr=0,Mn=gn=sn=null,Da=!1,Ia=0,ku.current=null,o===null||o.return===null){vn=1,Ba=i,dn=null;break}e:{var m=n,A=o.return,B=o,j=i;if(i=Rn,B.flags|=32768,j!==null&&typeof j=="object"&&typeof j.then=="function"){var de=j,Ae=B,Pe=Ae.tag;if((Ae.mode&1)===0&&(Pe===0||Pe===11||Pe===15)){var Te=Ae.alternate;Te?(Ae.updateQueue=Te.updateQueue,Ae.memoizedState=Te.memoizedState,Ae.lanes=Te.lanes):(Ae.updateQueue=null,Ae.memoizedState=null)}var Ke=kp(A);if(Ke!==null){Ke.flags&=-257,Bp(Ke,A,B,m,i),Ke.mode&1&&Op(m,de,i),i=Ke,j=de;var rt=i.updateQueue;if(rt===null){var at=new Set;at.add(j),i.updateQueue=at}else rt.add(j);break e}else{if((i&1)===0){Op(m,de,i),qu();break e}j=Error(t(426))}}else if(en&&B.mode&1){var hn=kp(A);if(hn!==null){(hn.flags&65536)===0&&(hn.flags|=256),Bp(hn,A,B,m,i),ru(Ps(j,B));break e}}m=j=Ps(j,B),vn!==4&&(vn=2),za===null?za=[m]:za.push(m),m=A;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var oe=Up(m,j,i);lp(m,oe);break e;case 1:B=j;var $=m.type,he=m.stateNode;if((m.flags&128)===0&&(typeof $.getDerivedStateFromError=="function"||he!==null&&typeof he.componentDidCatch=="function"&&(Sr===null||!Sr.has(he)))){m.flags|=65536,i&=-i,m.lanes|=i;var Oe=Fp(m,B,i);lp(m,Oe);break e}}m=m.return}while(m!==null)}gm(o)}catch(ut){i=ut,dn===o&&o!==null&&(dn=o=o.return);continue}break}while(!0)}function pm(){var n=al.current;return al.current=el,n===null?el:n}function qu(){(vn===0||vn===3||vn===2)&&(vn=4),En===null||($r&268435455)===0&&(ol&268435455)===0||Tr(En,Rn)}function fl(n,i){var o=Ft;Ft|=2;var u=pm();(En!==n||Rn!==i)&&(Qi=null,Zr(n,i));do try{M_();break}catch(d){fm(n,d)}while(!0);if(au(),Ft=o,al.current=u,dn!==null)throw Error(t(261));return En=null,Rn=0,vn}function M_(){for(;dn!==null;)mm(dn)}function E_(){for(;dn!==null&&!Hr();)mm(dn)}function mm(n){var i=xm(n.alternate,n,ni);n.memoizedProps=n.pendingProps,i===null?gm(n):dn=i,ku.current=null}function gm(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=m_(o,i,ni),o!==null){dn=o;return}}else{if(o=g_(o,i),o!==null){o.flags&=32767,dn=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{vn=6,dn=null;return}}if(i=i.sibling,i!==null){dn=i;return}dn=i=n}while(i!==null);vn===0&&(vn=5)}function Jr(n,i,o){var u=ct,d=ui.transition;try{ui.transition=null,ct=1,T_(n,i,o,u)}finally{ui.transition=d,ct=u}return null}function T_(n,i,o,u){do Is();while(Mr!==null);if((Ft&6)!==0)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=o.lanes|o.childLanes;if(nt(n,m),n===En&&(dn=En=null,Rn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||cl||(cl=!0,ym(ds,function(){return Is(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=ui.transition,ui.transition=null;var A=ct;ct=1;var B=Ft;Ft|=4,ku.current=null,__(n,o),am(o,n),Wv(qc),To=!!Xc,qc=Xc=null,n.current=o,x_(o),Ac(),Ft=B,ct=A,ui.transition=m}else n.current=o;if(cl&&(cl=!1,Mr=n,ul=d),m=n.pendingLanes,m===0&&(Sr=null),ae(o.stateNode),qn(n,Jt()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],u(d.value,{componentStack:d.stack,digest:d.digest});if(ll)throw ll=!1,n=Hu,Hu=null,n;return(ul&1)!==0&&n.tag!==0&&Is(),m=n.pendingLanes,(m&1)!==0?n===Gu?Ha++:(Ha=0,Gu=n):Ha=0,vr(),null}function Is(){if(Mr!==null){var n=Ci(ul),i=ui.transition,o=ct;try{if(ui.transition=null,ct=16>n?16:n,Mr===null)var u=!1;else{if(n=Mr,Mr=null,ul=0,(Ft&6)!==0)throw Error(t(331));var d=Ft;for(Ft|=4,Qe=n.current;Qe!==null;){var m=Qe,A=m.child;if((Qe.flags&16)!==0){var B=m.deletions;if(B!==null){for(var j=0;j<B.length;j++){var de=B[j];for(Qe=de;Qe!==null;){var Ae=Qe;switch(Ae.tag){case 0:case 11:case 15:ka(8,Ae,m)}var Pe=Ae.child;if(Pe!==null)Pe.return=Ae,Qe=Pe;else for(;Qe!==null;){Ae=Qe;var Te=Ae.sibling,Ke=Ae.return;if(tm(Ae),Ae===de){Qe=null;break}if(Te!==null){Te.return=Ke,Qe=Te;break}Qe=Ke}}}var rt=m.alternate;if(rt!==null){var at=rt.child;if(at!==null){rt.child=null;do{var hn=at.sibling;at.sibling=null,at=hn}while(at!==null)}}Qe=m}}if((m.subtreeFlags&2064)!==0&&A!==null)A.return=m,Qe=A;else e:for(;Qe!==null;){if(m=Qe,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:ka(9,m,m.return)}var oe=m.sibling;if(oe!==null){oe.return=m.return,Qe=oe;break e}Qe=m.return}}var $=n.current;for(Qe=$;Qe!==null;){A=Qe;var he=A.child;if((A.subtreeFlags&2064)!==0&&he!==null)he.return=A,Qe=he;else e:for(A=$;Qe!==null;){if(B=Qe,(B.flags&2048)!==0)try{switch(B.tag){case 0:case 11:case 15:sl(9,B)}}catch(ut){cn(B,B.return,ut)}if(B===A){Qe=null;break e}var Oe=B.sibling;if(Oe!==null){Oe.return=B.return,Qe=Oe;break e}Qe=B.return}}if(Ft=d,vr(),ue&&typeof ue.onPostCommitFiberRoot=="function")try{ue.onPostCommitFiberRoot(W,n)}catch{}u=!0}return u}finally{ct=o,ui.transition=i}}return!1}function vm(n,i,o){i=Ps(o,i),i=Up(n,i,1),n=xr(n,i,1),i=zn(),n!==null&&(ln(n,1,i),qn(n,i))}function cn(n,i,o){if(n.tag===3)vm(n,n,o);else for(;i!==null;){if(i.tag===3){vm(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Sr===null||!Sr.has(u))){n=Ps(o,n),n=Fp(i,n,1),i=xr(i,n,1),n=zn(),i!==null&&(ln(i,1,n),qn(i,n));break}}i=i.return}}function w_(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=zn(),n.pingedLanes|=n.suspendedLanes&o,En===n&&(Rn&o)===o&&(vn===4||vn===3&&(Rn&130023424)===Rn&&500>Jt()-zu?Zr(n,0):Bu|=o),qn(n,i)}function _m(n,i){i===0&&((n.mode&1)===0?i=1:(i=et,et<<=1,(et&130023424)===0&&(et=4194304)));var o=zn();n=Ki(n,i),n!==null&&(ln(n,i,o),qn(n,o))}function A_(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),_m(n,o)}function b_(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),_m(n,o)}var xm;xm=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Vn.current)jn=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return jn=!1,p_(n,i,o);jn=(n.flags&131072)!==0}else jn=!1,en&&(i.flags&1048576)!==0&&Jf(i,Go,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;il(n,i),n=i.pendingProps;var d=Ms(i,Nn.current);Rs(i,o),d=vu(null,i,u,n,d,o);var m=_u();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Wn(u)?(m=!0,Bo(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,uu(i),d.updater=tl,i.stateNode=d,d._reactInternals=i,Tu(i,u,n,o),i=Ru(null,i,u,!0,m,o)):(i.tag=0,en&&m&&eu(i),Bn(null,i,d,o),i=i.child),i;case 16:u=i.elementType;e:{switch(il(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=C_(u),n=_i(u,n),d){case 0:i=bu(null,i,u,n,o);break e;case 1:i=jp(null,i,u,n,o);break e;case 11:i=zp(null,i,u,n,o);break e;case 14:i=Hp(null,i,u,_i(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:_i(u,d),bu(n,i,u,d,o);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:_i(u,d),jp(n,i,u,d,o);case 3:e:{if(Xp(i),n===null)throw Error(t(387));u=i.pendingProps,m=i.memoizedState,d=m.element,op(n,i),Yo(i,u,null,o);var A=i.memoizedState;if(u=A.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Ps(Error(t(423)),i),i=qp(n,i,u,o,d);break e}else if(u!==d){d=Ps(Error(t(424)),i),i=qp(n,i,u,o,d);break e}else for(ti=pr(i.stateNode.containerInfo.firstChild),ei=i,en=!0,vi=null,o=sp(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ws(),u===d){i=Ji(n,i,o);break e}Bn(n,i,u,o)}i=i.child}return i;case 5:return up(i),n===null&&iu(i),u=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,A=d.children,Yc(u,d)?A=null:m!==null&&Yc(u,m)&&(i.flags|=32),Wp(n,i),Bn(n,i,A,o),i.child;case 6:return n===null&&iu(i),null;case 13:return Yp(n,i,o);case 4:return hu(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=As(i,null,u,o):Bn(n,i,u,o),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:_i(u,d),zp(n,i,u,d,o);case 7:return Bn(n,i,i.pendingProps,o),i.child;case 8:return Bn(n,i,i.pendingProps.children,o),i.child;case 12:return Bn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,m=i.memoizedProps,A=d.value,qt(jo,u._currentValue),u._currentValue=A,m!==null)if(gi(m.value,A)){if(m.children===d.children&&!Vn.current){i=Ji(n,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var B=m.dependencies;if(B!==null){A=m.child;for(var j=B.firstContext;j!==null;){if(j.context===u){if(m.tag===1){j=Zi(-1,o&-o),j.tag=2;var de=m.updateQueue;if(de!==null){de=de.shared;var Ae=de.pending;Ae===null?j.next=j:(j.next=Ae.next,Ae.next=j),de.pending=j}}m.lanes|=o,j=m.alternate,j!==null&&(j.lanes|=o),lu(m.return,o,i),B.lanes|=o;break}j=j.next}}else if(m.tag===10)A=m.type===i.type?null:m.child;else if(m.tag===18){if(A=m.return,A===null)throw Error(t(341));A.lanes|=o,B=A.alternate,B!==null&&(B.lanes|=o),lu(A,o,i),A=m.sibling}else A=m.child;if(A!==null)A.return=m;else for(A=m;A!==null;){if(A===i){A=null;break}if(m=A.sibling,m!==null){m.return=A.return,A=m;break}A=A.return}m=A}Bn(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,Rs(i,o),d=li(d),u=u(d),i.flags|=1,Bn(n,i,u,o),i.child;case 14:return u=i.type,d=_i(u,i.pendingProps),d=_i(u.type,d),Hp(n,i,u,d,o);case 15:return Gp(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:_i(u,d),il(n,i),i.tag=1,Wn(u)?(n=!0,Bo(i)):n=!1,Rs(i,o),Dp(i,u,d),Tu(i,u,d,o),Ru(null,i,u,!0,n,o);case 19:return Kp(n,i,o);case 22:return Vp(n,i,o)}throw Error(t(156,i.tag))};function ym(n,i){return ua(n,i)}function R_(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(n,i,o,u){return new R_(n,i,o,u)}function Yu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function C_(n){if(typeof n=="function")return Yu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Z)return 11;if(n===ne)return 14}return 2}function wr(n,i){var o=n.alternate;return o===null?(o=hi(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function pl(n,i,o,u,d,m){var A=2;if(u=n,typeof n=="function")Yu(n)&&(A=1);else if(typeof n=="string")A=5;else e:switch(n){case E:return Qr(o.children,d,m,i);case R:A=8,d|=8;break;case X:return n=hi(12,o,i,d|2),n.elementType=X,n.lanes=m,n;case se:return n=hi(13,o,i,d),n.elementType=se,n.lanes=m,n;case k:return n=hi(19,o,i,d),n.elementType=k,n.lanes=m,n;case K:return ml(o,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case O:A=10;break e;case G:A=9;break e;case Z:A=11;break e;case ne:A=14;break e;case le:A=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=hi(A,o,i,d),i.elementType=n,i.type=u,i.lanes=m,i}function Qr(n,i,o,u){return n=hi(7,n,u,i),n.lanes=o,n}function ml(n,i,o,u){return n=hi(22,n,u,i),n.elementType=K,n.lanes=o,n.stateNode={isHidden:!1},n}function $u(n,i,o){return n=hi(6,n,null,i),n.lanes=o,n}function Ku(n,i,o){return i=hi(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function P_(n,i,o,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zt(0),this.expirationTimes=zt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zt(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Zu(n,i,o,u,d,m,A,B,j){return n=new P_(n,i,o,B,j),i===1?(i=1,m===!0&&(i|=8)):i=0,m=hi(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},uu(m),n}function N_(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function Sm(n){if(!n)return gr;n=n._reactInternals;e:{if(bi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Wn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Wn(o))return $f(n,o,i)}return i}function Mm(n,i,o,u,d,m,A,B,j){return n=Zu(o,u,!0,n,d,m,A,B,j),n.context=Sm(null),o=n.current,u=zn(),d=Er(o),m=Zi(u,d),m.callback=i??null,xr(o,m,d),n.current.lanes=d,ln(n,d,u),qn(n,u),n}function gl(n,i,o,u){var d=i.current,m=zn(),A=Er(d);return o=Sm(o),i.context===null?i.context=o:i.pendingContext=o,i=Zi(m,A),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=xr(d,i,A),n!==null&&(Si(n,d,A,m),qo(n,d,A)),A}function vl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Em(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Ju(n,i){Em(n,i),(n=n.alternate)&&Em(n,i)}function L_(){return null}var Tm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Qu(n){this._internalRoot=n}_l.prototype.render=Qu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));gl(n,i,null,null)},_l.prototype.unmount=Qu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Kr(function(){gl(null,n,null,null)}),i[Xi]=null}};function _l(n){this._internalRoot=n}_l.prototype.unstable_scheduleHydration=function(n){if(n){var i=Pi();n={blockedOn:null,target:n,priority:i};for(var o=0;o<hr.length&&i!==0&&i<hr[o].priority;o++);hr.splice(o,0,n),o===0&&uf(n)}};function eh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function xl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function wm(){}function D_(n,i,o,u,d){if(d){if(typeof u=="function"){var m=u;u=function(){var de=vl(A);m.call(de)}}var A=Mm(i,u,n,0,null,!1,!1,"",wm);return n._reactRootContainer=A,n[Xi]=A.current,wa(n.nodeType===8?n.parentNode:n),Kr(),A}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var B=u;u=function(){var de=vl(j);B.call(de)}}var j=Zu(n,0,!1,null,null,!1,!1,"",wm);return n._reactRootContainer=j,n[Xi]=j.current,wa(n.nodeType===8?n.parentNode:n),Kr(function(){gl(i,j,o,u)}),j}function yl(n,i,o,u,d){var m=o._reactRootContainer;if(m){var A=m;if(typeof d=="function"){var B=d;d=function(){var j=vl(A);B.call(j)}}gl(i,A,n,d)}else A=D_(o,i,n,d,u);return vl(A)}mn=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=gt(i.pendingLanes);o!==0&&(pn(i,o|1),qn(i,Jt()),(Ft&6)===0&&(Ds=Jt()+500,vr()))}break;case 13:Kr(function(){var u=Ki(n,1);if(u!==null){var d=zn();Si(u,n,1,d)}}),Ju(n,1)}},cr=function(n){if(n.tag===13){var i=Ki(n,134217728);if(i!==null){var o=zn();Si(i,n,134217728,o)}Ju(n,134217728)}},mi=function(n){if(n.tag===13){var i=Er(n),o=Ki(n,i);if(o!==null){var u=zn();Si(o,n,i,u)}Ju(n,i)}},Pi=function(){return ct},Nt=function(n,i){var o=ct;try{return ct=n,i()}finally{ct=o}},me=function(n,i,o){switch(i){case"input":if(Ne(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var d=Oo(u);if(!d)throw Error(t(90));Ee(u),Ne(u,d)}}}break;case"textarea":V(n,o);break;case"select":i=o.value,i!=null&&Ze(n,!!o.multiple,i,!1)}},De=ju,Be=Kr;var I_={usingClientEntryPoint:!1,Events:[Ra,ys,Oo,fe,ze,ju]},Ga={findFiberByHostInstance:Gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},U_={bundleType:Ga.bundleType,version:Ga.version,rendererPackageName:Ga.rendererPackageName,rendererConfig:Ga.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ca(n),n===null?null:n.stateNode},findFiberByHostInstance:Ga.findFiberByHostInstance||L_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sl.isDisabled&&Sl.supportsFiber)try{W=Sl.inject(U_),ue=Sl}catch{}}return Yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I_,Yn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!eh(i))throw Error(t(200));return N_(n,i,null,o)},Yn.createRoot=function(n,i){if(!eh(n))throw Error(t(299));var o=!1,u="",d=Tm;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Zu(n,1,!1,null,null,o,!1,u,d),n[Xi]=i.current,wa(n.nodeType===8?n.parentNode:n),new Qu(i)},Yn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ca(i),n=n===null?null:n.stateNode,n},Yn.flushSync=function(n){return Kr(n)},Yn.hydrate=function(n,i,o){if(!xl(i))throw Error(t(200));return yl(null,n,i,!0,o)},Yn.hydrateRoot=function(n,i,o){if(!eh(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,d=!1,m="",A=Tm;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(A=o.onRecoverableError)),i=Mm(i,null,n,1,o??null,d,!1,m,A),n[Xi]=i.current,wa(n),u)for(n=0;n<u.length;n++)o=u[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new _l(i)},Yn.render=function(n,i,o){if(!xl(i))throw Error(t(200));return yl(null,n,i,!1,o)},Yn.unmountComponentAtNode=function(n){if(!xl(n))throw Error(t(40));return n._reactRootContainer?(Kr(function(){yl(null,null,n,!1,function(){n._reactRootContainer=null,n[Xi]=null})}),!0):!1},Yn.unstable_batchedUpdates=ju,Yn.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!xl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return yl(n,i,o,!1,u)},Yn.version="18.3.1-next-f1338f8080-20240426",Yn}var Dm;function W_(){if(Dm)return ih.exports;Dm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),ih.exports=V_(),ih.exports}var Im;function j_(){if(Im)return Ml;Im=1;var s=W_();return Ml.createRoot=s.createRoot,Ml.hydrateRoot=s.hydrateRoot,Ml}var X_=j_();const q_=Qg(X_);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),e0=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=Ut.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:a="",children:l,iconNode:c,...h},f)=>Ut.createElement("svg",{ref:f,...$_,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:e0("lucide",a),...h},[...c.map(([p,g])=>Ut.createElement(p,g)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=(s,e)=>{const t=Ut.forwardRef(({className:r,...a},l)=>Ut.createElement(K_,{ref:l,iconNode:e,className:e0(`lucide-${Y_(s)}`,r),...a}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=tn("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_=tn("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc=tn("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Us=tn("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=tn("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wa=tn("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=tn("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_=tn("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=tn("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=tn("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=tn("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=tn("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=tn("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=tn("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=tn("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=tn("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=tn("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=tn("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=tn("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=tn("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tl=tn("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=tn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=tn("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=tn("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Od="187",Zs={ROTATE:0,DOLLY:1,PAN:2},$s={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},lx=0,Bm=1,cx=2,tc=1,i0=2,Ja=3,ss=0,Zn=1,Bi=2,Js=0,to=1,zm=2,Hm=3,Gm=4,ux=5,Ys=100,hx=101,dx=102,fx=103,px=104,mx=200,gx=201,vx=202,_x=203,r0=204,s0=205,xx=206,yx=207,Sx=208,Mx=209,Ex=210,Tx=211,wx=212,Ax=213,bx=214,Gh=0,Vh=1,Wh=2,ao=3,jh=4,Xh=5,qh=6,Yh=7,a0=0,Rx=1,Cx=2,or=0,o0=1,l0=2,c0=3,u0=4,h0=5,d0=6,f0=7,p0=300,ea=301,oo=302,oh=303,lh=304,$h=1e3,ar=1001,Kh=1002,Cn=1003,Px=1004,wl=1005,Kn=1006,ch=1007,Dr=1008,si=1009,m0=1010,g0=1011,lo=1012,kd=1013,Vi=1014,zi=1015,Wi=1016,Bd=1017,zd=1018,ta=1020,v0=35902,_0=35899,x0=1021,y0=1022,Hi=1023,Fr=1026,Ir=1027,S0=1028,Hd=1029,as=1030,Gd=1031,Vd=1033,nc=33776,ic=33777,rc=33778,sc=33779,Zh=35840,Jh=35841,Qh=35842,ed=35843,td=36196,nd=37492,id=37496,rd=37488,sd=37489,cc=37490,ad=37491,od=37808,ld=37809,cd=37810,ud=37811,hd=37812,dd=37813,fd=37814,pd=37815,md=37816,gd=37817,vd=37818,_d=37819,xd=37820,yd=37821,Sd=36492,Md=36494,Ed=36495,Td=36283,wd=36284,uc=36285,Ad=36286,Nx=3200,bd=0,Lx=1,Lr="",fi="srgb",hc="srgb-linear",dc="linear",jt="srgb",uh=7680,Dx=519,Ix=512,Ux=513,Fx=514,M0=515,Ox=516,kx=517,E0=518,T0=519,Bx=35044,Vm="300 es",Ai=2e3,co=2001;function zx(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function fc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Hx(){const s=fc("canvas");return s.style.display="block",s}const Wm={};function jm(...s){const e="THREE."+s.shift();console.log(e,...s)}function w0(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function vt(...s){s=w0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ot(...s){s=w0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function ac(...s){const e=s.join(" ");e in Wm||(Wm[e]=!0,vt(...s))}function Gx(s,e,t){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const Vx={[Gh]:Gh,[Wh]:qh,[jh]:jh,[ao]:Xh,[Vh]:Vh,[qh]:Wh,[Yh]:Yh,[Xh]:ao};class Br{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],no=Math.PI/180,Rd=180/Math.PI;function sa(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[t&63|128]+Un[t>>8&255]+"-"+Un[t>>16&255]+Un[t>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function At(s,e,t){return Math.max(e,Math.min(t,s))}function Wx(s,e){return(s%e+e)%e}function hh(s,e,t){return(1-t)*s+t*e}function jx(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Wd(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Xx(s,e){if(e.constructor===Float32Array)return s;const t=Wd(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function qx(s,e){if(e.constructor===Float32Array)return s;const t=Wd(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const Yx={DEG2RAD:no},sf=class sf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(At(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(At(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*a+e.x,this.y=l*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};sf.prototype.isVector2=!0;let Fe=sf;class Or{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,c,h){let f=r[a+0],p=r[a+1],g=r[a+2],S=r[a+3],_=l[c+0],x=l[c+1],T=l[c+2],b=l[c+3];if(S!==b||f!==_||p!==x||g!==T){let y=f*_+p*x+g*T+S*b;y<0&&(_=-_,x=-x,T=-T,b=-b,y=-y);let M=1-h;if(y<.9995){const N=Math.acos(y),L=Math.sin(N);M=Math.sin(M*N)/L,h=Math.sin(h*N)/L,f=f*M+_*h,p=p*M+x*h,g=g*M+T*h,S=S*M+b*h}else{f=f*M+_*h,p=p*M+x*h,g=g*M+T*h,S=S*M+b*h;const N=1/Math.sqrt(f*f+p*p+g*g+S*S);f*=N,p*=N,g*=N,S*=N}}e[t]=f,e[t+1]=p,e[t+2]=g,e[t+3]=S}static multiplyQuaternionsFlat(e,t,r,a,l,c){const h=r[a],f=r[a+1],p=r[a+2],g=r[a+3],S=l[c],_=l[c+1],x=l[c+2],T=l[c+3];return e[t]=h*T+g*S+f*x-p*_,e[t+1]=f*T+g*_+p*S-h*x,e[t+2]=p*T+g*x+h*_-f*S,e[t+3]=g*T-h*S-f*_-p*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,c=e._order,h=Math.cos,f=Math.sin,p=h(r/2),g=h(a/2),S=h(l/2),_=f(r/2),x=f(a/2),T=f(l/2);switch(c){case"XYZ":this._x=_*g*S+p*x*T,this._y=p*x*S-_*g*T,this._z=p*g*T+_*x*S,this._w=p*g*S-_*x*T;break;case"YXZ":this._x=_*g*S+p*x*T,this._y=p*x*S-_*g*T,this._z=p*g*T-_*x*S,this._w=p*g*S+_*x*T;break;case"ZXY":this._x=_*g*S-p*x*T,this._y=p*x*S+_*g*T,this._z=p*g*T+_*x*S,this._w=p*g*S-_*x*T;break;case"ZYX":this._x=_*g*S-p*x*T,this._y=p*x*S+_*g*T,this._z=p*g*T-_*x*S,this._w=p*g*S+_*x*T;break;case"YZX":this._x=_*g*S+p*x*T,this._y=p*x*S+_*g*T,this._z=p*g*T-_*x*S,this._w=p*g*S-_*x*T;break;case"XZY":this._x=_*g*S-p*x*T,this._y=p*x*S-_*g*T,this._z=p*g*T+_*x*S,this._w=p*g*S+_*x*T;break;default:vt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],c=t[1],h=t[5],f=t[9],p=t[2],g=t[6],S=t[10],_=r+h+S;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(g-f)*x,this._y=(l-p)*x,this._z=(c-a)*x}else if(r>h&&r>S){const x=2*Math.sqrt(1+r-h-S);this._w=(g-f)/x,this._x=.25*x,this._y=(a+c)/x,this._z=(l+p)/x}else if(h>S){const x=2*Math.sqrt(1+h-r-S);this._w=(l-p)/x,this._x=(a+c)/x,this._y=.25*x,this._z=(f+g)/x}else{const x=2*Math.sqrt(1+S-r-h);this._w=(c-a)/x,this._x=(l+p)/x,this._y=(f+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,c=e._w,h=t._x,f=t._y,p=t._z,g=t._w;return this._x=r*g+c*h+a*p-l*f,this._y=a*g+c*f+l*h-r*p,this._z=l*g+c*p+r*f-a*h,this._w=c*g-r*h-a*f-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,a=e._y,l=e._z,c=e._w,h=this.dot(e);h<0&&(r=-r,a=-a,l=-l,c=-c,h=-h);let f=1-t;if(h<.9995){const p=Math.acos(h),g=Math.sin(p);f=Math.sin(f*p)/g,t=Math.sin(t*p)/g,this._x=this._x*f+r*t,this._y=this._y*f+a*t,this._z=this._z*f+l*t,this._w=this._w*f+c*t,this._onChangeCallback()}else this._x=this._x*f+r*t,this._y=this._y*f+a*t,this._z=this._z*f+l*t,this._w=this._w*f+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const af=class af{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,c=e.y,h=e.z,f=e.w,p=2*(c*a-h*r),g=2*(h*t-l*a),S=2*(l*r-c*t);return this.x=t+f*p+c*S-h*g,this.y=r+f*g+h*p-l*S,this.z=a+f*S+l*g-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(At(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,c=t.x,h=t.y,f=t.z;return this.x=a*f-l*h,this.y=l*c-r*f,this.z=r*h-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return dh.copy(this).projectOnVector(e),this.sub(dh)}reflect(e){return this.sub(dh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(At(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};af.prototype.isVector3=!0;let H=af;const dh=new H,Xm=new Or,of=class of{constructor(e,t,r,a,l,c,h,f,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,c,h,f,p)}set(e,t,r,a,l,c,h,f,p){const g=this.elements;return g[0]=e,g[1]=a,g[2]=h,g[3]=t,g[4]=l,g[5]=f,g[6]=r,g[7]=c,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,c=r[0],h=r[3],f=r[6],p=r[1],g=r[4],S=r[7],_=r[2],x=r[5],T=r[8],b=a[0],y=a[3],M=a[6],N=a[1],L=a[4],C=a[7],F=a[2],D=a[5],E=a[8];return l[0]=c*b+h*N+f*F,l[3]=c*y+h*L+f*D,l[6]=c*M+h*C+f*E,l[1]=p*b+g*N+S*F,l[4]=p*y+g*L+S*D,l[7]=p*M+g*C+S*E,l[2]=_*b+x*N+T*F,l[5]=_*y+x*L+T*D,l[8]=_*M+x*C+T*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],h=e[5],f=e[6],p=e[7],g=e[8];return t*c*g-t*h*p-r*l*g+r*h*f+a*l*p-a*c*f}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],h=e[5],f=e[6],p=e[7],g=e[8],S=g*c-h*p,_=h*f-g*l,x=p*l-c*f,T=t*S+r*_+a*x;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/T;return e[0]=S*b,e[1]=(a*p-g*r)*b,e[2]=(h*r-a*c)*b,e[3]=_*b,e[4]=(g*t-a*f)*b,e[5]=(a*l-h*t)*b,e[6]=x*b,e[7]=(r*f-p*t)*b,e[8]=(c*t-r*l)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,c,h){const f=Math.cos(l),p=Math.sin(l);return this.set(r*f,r*p,-r*(f*c+p*h)+c+e,-a*p,a*f,-a*(-p*c+f*h)+h+t,0,0,1),this}scale(e,t){return ac("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fh.makeScale(e,t)),this}rotate(e){return ac("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fh.makeRotation(-e)),this}translate(e,t){return ac("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};of.prototype.isMatrix3=!0;let St=of;const fh=new St,qm=new St().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ym=new St().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $x(){const s={enabled:!0,workingColorSpace:hc,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===jt&&(a.r=lr(a.r),a.g=lr(a.g),a.b=lr(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===jt&&(a.r=Qs(a.r),a.g=Qs(a.g),a.b=Qs(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Lr?dc:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[c].fromXYZ).multiply(this.spaces[l].toXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[hc]:{primaries:e,whitePoint:r,transfer:dc,toXYZ:qm,fromXYZ:Ym,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:e,whitePoint:r,transfer:jt,toXYZ:qm,fromXYZ:Ym,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),s}const It=$x();function lr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Qs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Fs;class Kx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Fs===void 0&&(Fs=fc("canvas")),Fs.width=e.width,Fs.height=e.height;const a=Fs.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=Fs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=lr(l[c]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(lr(t[r]/255)*255):t[r]=lr(t[r]);return{data:t,width:e.width,height:e.height}}else return vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zx=0;class jd{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Zx++}),this.uuid=sa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,h=a.length;c<h;c++)a[c].isDataTexture?l.push(ph(a[c].image)):l.push(ph(a[c]))}else l=ph(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function ph(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Kx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(vt("Texture: Unable to serialize Texture."),{})}let Jx=0;const mh=new H;class Gn extends Br{constructor(e=Gn.DEFAULT_IMAGE,t=Gn.DEFAULT_MAPPING,r=ar,a=ar,l=Kn,c=Dr,h=Hi,f=si,p=Gn.DEFAULT_ANISOTROPY,g=Lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jx++}),this.uuid=sa(),this.name="",this.source=new jd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=f,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new St,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(mh).x}get height(){return this.source.getSize(mh).y}get depth(){return this.source.getSize(mh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){vt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){vt(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==p0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $h:e.x=e.x-Math.floor(e.x);break;case ar:e.x=e.x<0?0:1;break;case Kh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $h:e.y=e.y-Math.floor(e.y);break;case ar:e.y=e.y<0?0:1;break;case Kh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=p0;Gn.DEFAULT_ANISOTROPY=1;const lf=class lf{constructor(e=0,t=0,r=0,a=1){this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const f=e.elements,p=f[0],g=f[4],S=f[8],_=f[1],x=f[5],T=f[9],b=f[2],y=f[6],M=f[10];if(Math.abs(g-_)<.01&&Math.abs(S-b)<.01&&Math.abs(T-y)<.01){if(Math.abs(g+_)<.1&&Math.abs(S+b)<.1&&Math.abs(T+y)<.1&&Math.abs(p+x+M-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(p+1)/2,C=(x+1)/2,F=(M+1)/2,D=(g+_)/4,E=(S+b)/4,R=(T+y)/4;return L>C&&L>F?L<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(L),a=D/r,l=E/r):C>F?C<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(C),r=D/a,l=R/a):F<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(F),r=E/l,a=R/l),this.set(r,a,l,t),this}let N=Math.sqrt((y-T)*(y-T)+(S-b)*(S-b)+(_-g)*(_-g));return Math.abs(N)<.001&&(N=1),this.x=(y-T)/N,this.y=(S-b)/N,this.z=(_-g)/N,this.w=Math.acos((p+x+M-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this.w=At(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this.w=At(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(At(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};lf.prototype.isVector4=!0;let an=lf;class Qx extends Br{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new an(0,0,e,t),this.scissorTest=!1,this.viewport=new an(0,0,e,t),this.textures=[];const a=r.count;for(let l=0;l<a;l++)this.textures[l]=new Gn({width:e,height:t,depth:r.depth}),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Kn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new jd(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends Qx{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class A0 extends Gn{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ey extends Gn{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const yc=class yc{constructor(e,t,r,a,l,c,h,f,p,g,S,_,x,T,b,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,c,h,f,p,g,S,_,x,T,b,y)}set(e,t,r,a,l,c,h,f,p,g,S,_,x,T,b,y){const M=this.elements;return M[0]=e,M[4]=t,M[8]=r,M[12]=a,M[1]=l,M[5]=c,M[9]=h,M[13]=f,M[2]=p,M[6]=g,M[10]=S,M[14]=_,M[3]=x,M[7]=T,M[11]=b,M[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,a=1/Os.setFromMatrixColumn(e,0).length(),l=1/Os.setFromMatrixColumn(e,1).length(),c=1/Os.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,c=Math.cos(r),h=Math.sin(r),f=Math.cos(a),p=Math.sin(a),g=Math.cos(l),S=Math.sin(l);if(e.order==="XYZ"){const _=c*g,x=c*S,T=h*g,b=h*S;t[0]=f*g,t[4]=-f*S,t[8]=p,t[1]=x+T*p,t[5]=_-b*p,t[9]=-h*f,t[2]=b-_*p,t[6]=T+x*p,t[10]=c*f}else if(e.order==="YXZ"){const _=f*g,x=f*S,T=p*g,b=p*S;t[0]=_+b*h,t[4]=T*h-x,t[8]=c*p,t[1]=c*S,t[5]=c*g,t[9]=-h,t[2]=x*h-T,t[6]=b+_*h,t[10]=c*f}else if(e.order==="ZXY"){const _=f*g,x=f*S,T=p*g,b=p*S;t[0]=_-b*h,t[4]=-c*S,t[8]=T+x*h,t[1]=x+T*h,t[5]=c*g,t[9]=b-_*h,t[2]=-c*p,t[6]=h,t[10]=c*f}else if(e.order==="ZYX"){const _=c*g,x=c*S,T=h*g,b=h*S;t[0]=f*g,t[4]=T*p-x,t[8]=_*p+b,t[1]=f*S,t[5]=b*p+_,t[9]=x*p-T,t[2]=-p,t[6]=h*f,t[10]=c*f}else if(e.order==="YZX"){const _=c*f,x=c*p,T=h*f,b=h*p;t[0]=f*g,t[4]=b-_*S,t[8]=T*S+x,t[1]=S,t[5]=c*g,t[9]=-h*g,t[2]=-p*g,t[6]=x*S+T,t[10]=_-b*S}else if(e.order==="XZY"){const _=c*f,x=c*p,T=h*f,b=h*p;t[0]=f*g,t[4]=-S,t[8]=p*g,t[1]=_*S+b,t[5]=c*g,t[9]=x*S-T,t[2]=T*S-x,t[6]=h*g,t[10]=b*S+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ty,e,ny)}lookAt(e,t,r){const a=this.elements;return ii.subVectors(e,t),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),br.crossVectors(r,ii),br.lengthSq()===0&&(Math.abs(r.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),br.crossVectors(r,ii)),br.normalize(),Al.crossVectors(ii,br),a[0]=br.x,a[4]=Al.x,a[8]=ii.x,a[1]=br.y,a[5]=Al.y,a[9]=ii.y,a[2]=br.z,a[6]=Al.z,a[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,c=r[0],h=r[4],f=r[8],p=r[12],g=r[1],S=r[5],_=r[9],x=r[13],T=r[2],b=r[6],y=r[10],M=r[14],N=r[3],L=r[7],C=r[11],F=r[15],D=a[0],E=a[4],R=a[8],X=a[12],O=a[1],G=a[5],Z=a[9],se=a[13],k=a[2],ne=a[6],le=a[10],K=a[14],te=a[3],q=a[7],Y=a[11],U=a[15];return l[0]=c*D+h*O+f*k+p*te,l[4]=c*E+h*G+f*ne+p*q,l[8]=c*R+h*Z+f*le+p*Y,l[12]=c*X+h*se+f*K+p*U,l[1]=g*D+S*O+_*k+x*te,l[5]=g*E+S*G+_*ne+x*q,l[9]=g*R+S*Z+_*le+x*Y,l[13]=g*X+S*se+_*K+x*U,l[2]=T*D+b*O+y*k+M*te,l[6]=T*E+b*G+y*ne+M*q,l[10]=T*R+b*Z+y*le+M*Y,l[14]=T*X+b*se+y*K+M*U,l[3]=N*D+L*O+C*k+F*te,l[7]=N*E+L*G+C*ne+F*q,l[11]=N*R+L*Z+C*le+F*Y,l[15]=N*X+L*se+C*K+F*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],c=e[1],h=e[5],f=e[9],p=e[13],g=e[2],S=e[6],_=e[10],x=e[14],T=e[3],b=e[7],y=e[11],M=e[15],N=f*x-p*_,L=h*x-p*S,C=h*_-f*S,F=c*x-p*g,D=c*_-f*g,E=c*S-h*g;return t*(b*N-y*L+M*C)-r*(T*N-y*F+M*D)+a*(T*L-b*F+M*E)-l*(T*C-b*D+y*E)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[1],c=e[5],h=e[9],f=e[2],p=e[6],g=e[10];return t*(c*g-h*p)-r*(l*g-h*f)+a*(l*p-c*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],h=e[5],f=e[6],p=e[7],g=e[8],S=e[9],_=e[10],x=e[11],T=e[12],b=e[13],y=e[14],M=e[15],N=t*h-r*c,L=t*f-a*c,C=t*p-l*c,F=r*f-a*h,D=r*p-l*h,E=a*p-l*f,R=g*b-S*T,X=g*y-_*T,O=g*M-x*T,G=S*y-_*b,Z=S*M-x*b,se=_*M-x*y,k=N*se-L*Z+C*G+F*O-D*X+E*R;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ne=1/k;return e[0]=(h*se-f*Z+p*G)*ne,e[1]=(a*Z-r*se-l*G)*ne,e[2]=(b*E-y*D+M*F)*ne,e[3]=(_*D-S*E-x*F)*ne,e[4]=(f*O-c*se-p*X)*ne,e[5]=(t*se-a*O+l*X)*ne,e[6]=(y*C-T*E-M*L)*ne,e[7]=(g*E-_*C+x*L)*ne,e[8]=(c*Z-h*O+p*R)*ne,e[9]=(r*O-t*Z-l*R)*ne,e[10]=(T*D-b*C+M*N)*ne,e[11]=(S*C-g*D-x*N)*ne,e[12]=(h*X-c*G-f*R)*ne,e[13]=(t*G-r*X+a*R)*ne,e[14]=(b*L-T*F-y*N)*ne,e[15]=(g*F-S*L+_*N)*ne,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,c=e.x,h=e.y,f=e.z,p=l*c,g=l*h;return this.set(p*c+r,p*h-a*f,p*f+a*h,0,p*h+a*f,g*h+r,g*f-a*c,0,p*f-a*h,g*f+a*c,l*f*f+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,c){return this.set(1,r,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,c=t._y,h=t._z,f=t._w,p=l+l,g=c+c,S=h+h,_=l*p,x=l*g,T=l*S,b=c*g,y=c*S,M=h*S,N=f*p,L=f*g,C=f*S,F=r.x,D=r.y,E=r.z;return a[0]=(1-(b+M))*F,a[1]=(x+C)*F,a[2]=(T-L)*F,a[3]=0,a[4]=(x-C)*D,a[5]=(1-(_+M))*D,a[6]=(y+N)*D,a[7]=0,a[8]=(T+L)*E,a[9]=(y-N)*E,a[10]=(1-(_+b))*E,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let c=Os.set(a[0],a[1],a[2]).length();const h=Os.set(a[4],a[5],a[6]).length(),f=Os.set(a[8],a[9],a[10]).length();l<0&&(c=-c),Mi.copy(this);const p=1/c,g=1/h,S=1/f;return Mi.elements[0]*=p,Mi.elements[1]*=p,Mi.elements[2]*=p,Mi.elements[4]*=g,Mi.elements[5]*=g,Mi.elements[6]*=g,Mi.elements[8]*=S,Mi.elements[9]*=S,Mi.elements[10]*=S,t.setFromRotationMatrix(Mi),r.x=c,r.y=h,r.z=f,this}makePerspective(e,t,r,a,l,c,h=Ai,f=!1){const p=this.elements,g=2*l/(t-e),S=2*l/(r-a),_=(t+e)/(t-e),x=(r+a)/(r-a);let T,b;if(f)T=l/(c-l),b=c*l/(c-l);else if(h===Ai)T=-(c+l)/(c-l),b=-2*c*l/(c-l);else if(h===co)T=-c/(c-l),b=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=S,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,a,l,c,h=Ai,f=!1){const p=this.elements,g=2/(t-e),S=2/(r-a),_=-(t+e)/(t-e),x=-(r+a)/(r-a);let T,b;if(f)T=1/(c-l),b=c/(c-l);else if(h===Ai)T=-2/(c-l),b=-(c+l)/(c-l);else if(h===co)T=-1/(c-l),b=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=S,p[9]=0,p[13]=x,p[2]=0,p[6]=0,p[10]=T,p[14]=b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};yc.prototype.isMatrix4=!0;let Yt=yc;const Os=new H,Mi=new Yt,ty=new H(0,0,0),ny=new H(1,1,1),br=new H,Al=new H,ii=new H,$m=new Yt,Km=new Or;class kr{constructor(e=0,t=0,r=0,a=kr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],c=a[4],h=a[8],f=a[1],p=a[5],g=a[9],S=a[2],_=a[6],x=a[10];switch(t){case"XYZ":this._y=Math.asin(At(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-At(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(f,p)):(this._y=Math.atan2(-S,l),this._z=0);break;case"ZXY":this._x=Math.asin(At(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-S,x),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-At(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(At(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-S,l)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-At(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(h,l)):(this._x=Math.atan2(-g,x),this._y=0);break;default:vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return $m.makeRotationFromQuaternion(e),this.setFromRotationMatrix($m,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Km.setFromEuler(this),this.setFromQuaternion(Km,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kr.DEFAULT_ORDER="XYZ";class Xd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let iy=0;const Zm=new H,ks=new Or,er=new Yt,bl=new H,Xa=new H,ry=new H,sy=new Or,Jm=new H(1,0,0),Qm=new H(0,1,0),eg=new H(0,0,1),tg={type:"added"},ay={type:"removed"},Bs={type:"childadded",child:null},gh={type:"childremoved",child:null};class An extends Br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iy++}),this.uuid=sa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const e=new H,t=new kr,r=new Or,a=new H(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Yt},normalMatrix:{value:new St}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(Jm,e)}rotateY(e){return this.rotateOnAxis(Qm,e)}rotateZ(e){return this.rotateOnAxis(eg,e)}translateOnAxis(e,t){return Zm.copy(e).applyQuaternion(this.quaternion),this.position.add(Zm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jm,e)}translateY(e){return this.translateOnAxis(Qm,e)}translateZ(e){return this.translateOnAxis(eg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(er.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?bl.copy(e):bl.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Xa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?er.lookAt(Xa,bl,this.up):er.lookAt(bl,Xa,this.up),this.quaternion.setFromRotationMatrix(er),a&&(er.extractRotation(a.matrixWorld),ks.setFromRotationMatrix(er),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tg),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null):Ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ay),gh.child=e,this.dispatchEvent(gh),gh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),er.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),er.multiply(e.parent.matrixWorld)),e.applyMatrix4(er),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tg),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xa,e,ry),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xa,sy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,a=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*a,l[13]+=r-l[1]*t-l[5]*r-l[9]*a,l[14]+=a-l[2]*t-l[6]*r-l[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(h=>({...h})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(h,f){return h[f.uuid]===void 0&&(h[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const f=h.shapes;if(Array.isArray(f))for(let p=0,g=f.length;p<g;p++){const S=f[p];l(e.shapes,S)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let f=0,p=this.material.length;f<p;f++)h.push(l(e.materials,this.material[f]));a.material=h}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let h=0;h<this.children.length;h++)a.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let h=0;h<this.animations.length;h++){const f=this.animations[h];a.animations.push(l(e.animations,f))}}if(t){const h=c(e.geometries),f=c(e.materials),p=c(e.textures),g=c(e.images),S=c(e.shapes),_=c(e.skeletons),x=c(e.animations),T=c(e.nodes);h.length>0&&(r.geometries=h),f.length>0&&(r.materials=f),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),S.length>0&&(r.shapes=S),_.length>0&&(r.skeletons=_),x.length>0&&(r.animations=x),T.length>0&&(r.nodes=T)}return r.object=a,r;function c(h){const f=[];for(const p in h){const g=h[p];delete g.metadata,f.push(g)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}An.DEFAULT_UP=new H(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ur extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const oy={type:"move"};class vh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ur,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ur,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ur,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,c=null;const h=this._targetRay,f=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const b of e.hand.values()){const y=t.getJointPose(b,r),M=this._getHandJoint(p,b);y!==null&&(M.matrix.fromArray(y.transform.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=y.radius),M.visible=y!==null}const g=p.joints["index-finger-tip"],S=p.joints["thumb-tip"],_=g.position.distanceTo(S.position),x=.02,T=.005;p.inputState.pinching&&_>x+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=x-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(oy)))}return h!==null&&(h.visible=a!==null),f!==null&&(f.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Ur;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const b0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rr={h:0,s:0,l:0},Rl={h:0,s:0,l:0};function _h(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class bt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.colorSpaceToWorking(this,t),this}setRGB(e,t,r,a=It.workingColorSpace){return this.r=e,this.g=t,this.b=r,It.colorSpaceToWorking(this,a),this}setHSL(e,t,r,a=It.workingColorSpace){if(e=Wx(e,1),t=At(t,0,1),r=At(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=_h(c,l,e+1/3),this.g=_h(c,l,e),this.b=_h(c,l,e-1/3)}return It.colorSpaceToWorking(this,a),this}setStyle(e,t=fi){function r(l){l!==void 0&&parseFloat(l)<1&&vt("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],h=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(h))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(h))return r(l[4]),this.setRGB(Math.min(100,parseFloat(l[1]))/100,Math.min(100,parseFloat(l[2]))/100,Math.min(100,parseFloat(l[3]))/100,t);break;case"hsl":case"hsla":if(l=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(h))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:vt("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);vt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fi){const r=b0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):vt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}copyLinearToSRGB(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return It.workingToColorSpace(Fn.copy(this),e),Math.round(At(Fn.r*255,0,255))*65536+Math.round(At(Fn.g*255,0,255))*256+Math.round(At(Fn.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.workingToColorSpace(Fn.copy(this),t);const r=Fn.r,a=Fn.g,l=Fn.b,c=Math.max(r,a,l),h=Math.min(r,a,l);let f,p;const g=(h+c)/2;if(h===c)f=0,p=0;else{const S=c-h;switch(p=g<=.5?S/(c+h):S/(2-c-h),c){case r:f=(a-l)/S+(a<l?6:0);break;case a:f=(l-r)/S+2;break;case l:f=(r-a)/S+4;break}f/=6}return e.h=f,e.s=p,e.l=g,e}getRGB(e,t=It.workingColorSpace){return It.workingToColorSpace(Fn.copy(this),t),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=fi){It.workingToColorSpace(Fn.copy(this),e);const t=Fn.r,r=Fn.g,a=Fn.b;return e!==fi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(Rr),this.setHSL(Rr.h+e,Rr.s+t,Rr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Rr),e.getHSL(Rl);const r=hh(Rr.h,Rl.h,t),a=hh(Rr.s,Rl.s,t),l=hh(Rr.l,Rl.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new bt;bt.NAMES=b0;class qd{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new bt(e),this.density=t}clone(){return new qd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ly extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kr,this.environmentIntensity=1,this.environmentRotation=new kr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ei=new H,tr=new H,xh=new H,nr=new H,zs=new H,Hs=new H,ng=new H,yh=new H,Sh=new H,Mh=new H,Eh=new an,Th=new an,wh=new an;class pi{constructor(e=new H,t=new H,r=new H){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),Ei.subVectors(e,t),a.cross(Ei);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){Ei.subVectors(a,t),tr.subVectors(r,t),xh.subVectors(e,t);const c=Ei.dot(Ei),h=Ei.dot(tr),f=Ei.dot(xh),p=tr.dot(tr),g=tr.dot(xh),S=c*p-h*h;if(S===0)return l.set(0,0,0),null;const _=1/S,x=(p*f-h*g)*_,T=(c*g-h*f)*_;return l.set(1-x-T,T,x)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,nr)===null?!1:nr.x>=0&&nr.y>=0&&nr.x+nr.y<=1}static getInterpolation(e,t,r,a,l,c,h,f){return this.getBarycoord(e,t,r,a,nr)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,nr.x),f.addScaledVector(c,nr.y),f.addScaledVector(h,nr.z),f)}static getInterpolatedAttribute(e,t,r,a,l,c){return Eh.setScalar(0),Th.setScalar(0),wh.setScalar(0),Eh.fromBufferAttribute(e,t),Th.fromBufferAttribute(e,r),wh.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Eh,l.x),c.addScaledVector(Th,l.y),c.addScaledVector(wh,l.z),c}static isFrontFacing(e,t,r,a){return Ei.subVectors(r,t),tr.subVectors(e,t),Ei.cross(tr).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ei.subVectors(this.c,this.b),tr.subVectors(this.a,this.b),Ei.cross(tr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return pi.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let c,h;zs.subVectors(a,r),Hs.subVectors(l,r),yh.subVectors(e,r);const f=zs.dot(yh),p=Hs.dot(yh);if(f<=0&&p<=0)return t.copy(r);Sh.subVectors(e,a);const g=zs.dot(Sh),S=Hs.dot(Sh);if(g>=0&&S<=g)return t.copy(a);const _=f*S-g*p;if(_<=0&&f>=0&&g<=0&&f-g>0)return c=f/(f-g),t.copy(r).addScaledVector(zs,c);Mh.subVectors(e,l);const x=zs.dot(Mh),T=Hs.dot(Mh);if(T>=0&&x<=T)return t.copy(l);const b=x*p-f*T;if(b<=0&&p>=0&&T<=0)return h=p/(p-T),t.copy(r).addScaledVector(Hs,h);const y=g*T-x*S;if(y<=0&&S-g>=0&&x-T>=0)return ng.subVectors(l,a),h=(S-g)/(S-g+(x-T)),t.copy(a).addScaledVector(ng,h);const M=1/(y+b+_);return c=b*M,h=_*M,t.copy(r).addScaledVector(zs,c).addScaledVector(Hs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class mo{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let c=0,h=l.count;c<h;c++)e.isMesh===!0?e.getVertexPosition(c,Ti):Ti.fromBufferAttribute(l,c),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Cl.copy(r.boundingBox)),Cl.applyMatrix4(e.matrixWorld),this.union(Cl)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qa),Pl.subVectors(this.max,qa),Gs.subVectors(e.a,qa),Vs.subVectors(e.b,qa),Ws.subVectors(e.c,qa),Cr.subVectors(Vs,Gs),Pr.subVectors(Ws,Vs),es.subVectors(Gs,Ws);let t=[0,-Cr.z,Cr.y,0,-Pr.z,Pr.y,0,-es.z,es.y,Cr.z,0,-Cr.x,Pr.z,0,-Pr.x,es.z,0,-es.x,-Cr.y,Cr.x,0,-Pr.y,Pr.x,0,-es.y,es.x,0];return!Ah(t,Gs,Vs,Ws,Pl)||(t=[1,0,0,0,1,0,0,0,1],!Ah(t,Gs,Vs,Ws,Pl))?!1:(Nl.crossVectors(Cr,Pr),t=[Nl.x,Nl.y,Nl.z],Ah(t,Gs,Vs,Ws,Pl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ir[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ir[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ir[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ir[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ir[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ir[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ir[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ir[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ir),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ir=[new H,new H,new H,new H,new H,new H,new H,new H],Ti=new H,Cl=new mo,Gs=new H,Vs=new H,Ws=new H,Cr=new H,Pr=new H,es=new H,qa=new H,Pl=new H,Nl=new H,ts=new H;function Ah(s,e,t,r,a){for(let l=0,c=s.length-3;l<=c;l+=3){ts.fromArray(s,l);const h=a.x*Math.abs(ts.x)+a.y*Math.abs(ts.y)+a.z*Math.abs(ts.z),f=e.dot(ts),p=t.dot(ts),g=r.dot(ts);if(Math.max(-Math.max(f,p,g),Math.min(f,p,g))>h)return!1}return!0}const fn=new H,Ll=new Fe;let cy=0;class rs extends Br{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Bx,this.updateRanges=[],this.gpuType=zi,this.version=0,this._normalizationScale=e!==void 0?Wd(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Ll.fromBufferAttribute(this,t),Ll.applyMatrix3(e),this.setXY(t,Ll.x,Ll.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix3(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),a=this._normalize(a)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),a=this._normalize(a),l=this._normalize(l)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Xx(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):qx(e,this.array)}}class R0 extends rs{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class C0 extends rs{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Gt extends rs{constructor(e,t,r){super(new Float32Array(e),t,r)}}const uy=new mo,Ya=new H,bh=new H;class Sc{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):uy.setFromPoints(e).getCenter(r);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ya.subVectors(e,this.center);const t=Ya.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(Ya,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ya.copy(e.center).add(bh)),this.expandByPoint(Ya.copy(e.center).sub(bh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let hy=0;const di=new Yt,Rh=new An,js=new H,ri=new mo,$a=new mo,wn=new H;class kn extends Br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=sa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zx(e)?C0:R0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new St().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,t,r){return di.makeTranslation(e,t,r),this.applyMatrix4(di),this}scale(e,t,r){return di.makeScale(e,t,r),this.applyMatrix4(di),this}lookAt(e){return Rh.lookAt(e),Rh.updateMatrix(),this.applyMatrix4(Rh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Gt(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];ri.setFromBufferAttribute(l),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const r=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const h=t[l];$a.setFromBufferAttribute(h),this.morphTargetsRelative?(wn.addVectors(ri.min,$a.min),ri.expandByPoint(wn),wn.addVectors(ri.max,$a.max),ri.expandByPoint(wn)):(ri.expandByPoint($a.min),ri.expandByPoint($a.max))}ri.getCenter(r);let a=0;for(let l=0,c=e.count;l<c;l++)wn.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(wn));if(t)for(let l=0,c=t.length;l<c;l++){const h=t[l],f=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)wn.fromBufferAttribute(h,p),f&&(js.fromBufferAttribute(e,p),wn.add(js)),a=Math.max(a,r.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==r.count)&&(c=new rs(new Float32Array(4*r.count),4),this.setAttribute("tangent",c));const h=[],f=[],p=new Uint8Array(r.count);for(let X=0;X<r.count;X++)h[X]=new H,f[X]=new H;const g=new H,S=new H,_=new H,x=new Fe,T=new Fe,b=new Fe,y=new H,M=new H;function N(X,O,G){p[X]=p[O]=p[G]=1,g.fromBufferAttribute(r,X),S.fromBufferAttribute(r,O),_.fromBufferAttribute(r,G),x.fromBufferAttribute(l,X),T.fromBufferAttribute(l,O),b.fromBufferAttribute(l,G),S.sub(g),_.sub(g),T.sub(x),b.sub(x);const Z=1/(T.x*b.y-b.x*T.y);isFinite(Z)&&(y.copy(S).multiplyScalar(b.y).addScaledVector(_,-T.y).multiplyScalar(Z),M.copy(_).multiplyScalar(T.x).addScaledVector(S,-b.x).multiplyScalar(Z),h[X].add(y),h[O].add(y),h[G].add(y),f[X].add(M),f[O].add(M),f[G].add(M))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let X=0,O=L.length;X<O;++X){const G=L[X],Z=G.start,se=G.count;for(let k=Z,ne=Z+se;k<ne;k+=3)N(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const C=new H,F=new H,D=new H,E=new H;function R(X){D.fromBufferAttribute(a,X),E.copy(D);const O=h[X];C.copy(O),C.sub(D.multiplyScalar(D.dot(O))).normalize(),F.crossVectors(E,O);const Z=F.dot(f[X])<0?-1:1;c.setXYZW(X,C.x,C.y,C.z,Z)}for(let X=0,O=r.count;X<O;++X)p[X]&&R(X);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new rs(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let _=0,x=r.count;_<x;_++)r.setXYZ(_,0,0,0);const a=new H,l=new H,c=new H,h=new H,f=new H,p=new H,g=new H,S=new H;if(e)for(let _=0,x=e.count;_<x;_+=3){const T=e.getX(_+0),b=e.getX(_+1),y=e.getX(_+2);a.fromBufferAttribute(t,T),l.fromBufferAttribute(t,b),c.fromBufferAttribute(t,y),g.subVectors(c,l),S.subVectors(a,l),g.cross(S),h.fromBufferAttribute(r,T),f.fromBufferAttribute(r,b),p.fromBufferAttribute(r,y),h.add(g),f.add(g),p.add(g),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(b,f.x,f.y,f.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let _=0,x=t.count;_<x;_+=3)a.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),c.fromBufferAttribute(t,_+2),g.subVectors(c,l),S.subVectors(a,l),g.cross(S),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)wn.fromBufferAttribute(e,t),wn.normalize(),e.setXYZ(t,wn.x,wn.y,wn.z)}toNonIndexed(){function e(h,f){const p=h.array,g=h.itemSize,S=h.normalized,_=new p.constructor(f.length*g);let x=0,T=0;for(let b=0,y=f.length;b<y;b++){h.isInterleavedBufferAttribute?x=f[b]*h.data.stride+h.offset:x=f[b]*g;for(let M=0;M<g;M++)_[T++]=p[x++]}return new rs(_,g,S)}if(this.index===null)return vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kn,r=this.index.array,a=this.attributes;for(const h in a){const f=a[h],p=e(f,r);t.setAttribute(h,p)}const l=this.morphAttributes;for(const h in l){const f=[],p=l[h];for(let g=0,S=p.length;g<S;g++){const _=p[g],x=e(_,r);f.push(x)}t.morphAttributes[h]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let h=0,f=c.length;h<f;h++){const p=c[h];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const f=this.parameters;for(const p in f)f[p]!==void 0&&(e[p]=f[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const f in r){const p=r[f];e.data.attributes[f]=p.toJSON(e.data)}const a={};let l=!1;for(const f in this.morphAttributes){const p=this.morphAttributes[f],g=[];for(let S=0,_=p.length;S<_;S++){const x=p[S];g.push(x.toJSON(e.data))}g.length>0&&(a[f]=g,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const p in a){const g=a[p];this.setAttribute(p,g.clone(t))}const l=e.morphAttributes;for(const p in l){const g=[],S=l[p];for(let _=0,x=S.length;_<x;_++)g.push(S[_].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,g=c.length;p<g;p++){const S=c[p];this.addGroup(S.start,S.count,S.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ch=new H,dy=new H,fy=new St;class sr{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=Ch.subVectors(r,t).cross(dy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const a=e.delta(Ch),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||fy.getNormalMatrix(e),a=this.coplanarPoint(Ch).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let py=0;class aa extends Br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=sa(),this.name="",this.type="Material",this.blending=to,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=r0,this.blendDst=s0,this.blendEquation=Ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=uh,this.stencilZFail=uh,this.stencilZPass=uh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){vt(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){vt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector2&&r&&r.isVector2||a&&a.isEuler&&r&&r.isEuler||a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(r.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(r.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(r.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(r.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const c=[];for(const h in l){const f=l[h];delete f.metadata,c.push(f)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new bt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new sr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Fe().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Fe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const rr=new H,Ph=new H,Dl=new H,Il=new H;class Mc{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=rr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rr.copy(this.origin).addScaledVector(this.direction,t),rr.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){Ph.copy(e).add(t).multiplyScalar(.5),Dl.copy(t).sub(e).normalize(),Il.copy(this.origin).sub(Ph);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Dl),h=Il.dot(this.direction),f=-Il.dot(Dl),p=Il.lengthSq(),g=Math.abs(1-c*c);let S,_,x,T;if(g>0)if(S=c*f-h,_=c*h-f,T=l*g,S>=0)if(_>=-T)if(_<=T){const b=1/g;S*=b,_*=b,x=S*(S+c*_+2*h)+_*(c*S+_+2*f)+p}else _=l,S=Math.max(0,-(c*_+h)),x=-S*S+_*(_+2*f)+p;else _=-l,S=Math.max(0,-(c*_+h)),x=-S*S+_*(_+2*f)+p;else _<=-T?(S=Math.max(0,-(-c*l+h)),_=S>0?-l:Math.min(Math.max(-l,-f),l),x=-S*S+_*(_+2*f)+p):_<=T?(S=0,_=Math.min(Math.max(-l,-f),l),x=_*(_+2*f)+p):(S=Math.max(0,-(c*l+h)),_=S>0?l:Math.min(Math.max(-l,-f),l),x=-S*S+_*(_+2*f)+p);else _=c>0?-l:l,S=Math.max(0,-(c*_+h)),x=-S*S+_*(_+2*f)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,S),a&&a.copy(Ph).addScaledVector(Dl,_),x}intersectSphere(e,t){if(e.radius<0)return null;rr.subVectors(e.center,this.origin);const r=rr.dot(this.direction),a=rr.dot(rr)-r*r,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),h=r-c,f=r+c;return f<0?null:h<0?this.at(f,t):this.at(h,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,c,h,f;const p=1/this.direction.x,g=1/this.direction.y,S=1/this.direction.z,_=this.origin;return p>=0?(r=(e.min.x-_.x)*p,a=(e.max.x-_.x)*p):(r=(e.max.x-_.x)*p,a=(e.min.x-_.x)*p),g>=0?(l=(e.min.y-_.y)*g,c=(e.max.y-_.y)*g):(l=(e.max.y-_.y)*g,c=(e.min.y-_.y)*g),r>c||l>a||((l>r||isNaN(r))&&(r=l),(c<a||isNaN(a))&&(a=c),S>=0?(h=(e.min.z-_.z)*S,f=(e.max.z-_.z)*S):(h=(e.max.z-_.z)*S,f=(e.min.z-_.z)*S),r>f||h>a)||((h>r||r!==r)&&(r=h),(f<a||a!==a)&&(a=f),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,rr)!==null}intersectTriangle(e,t,r,a,l){const c=this.origin,h=this.direction,f=h.x,p=h.y,g=h.z,S=e.x-c.x,_=e.y-c.y,x=e.z-c.z,T=t.x-c.x,b=t.y-c.y,y=t.z-c.z,M=r.x-c.x,N=r.y-c.y,L=r.z-c.z,C=Math.abs(f),F=Math.abs(p),D=Math.abs(g);let E,R,X,O,G,Z,se,k,ne,le,K,te;if(C>=F&&C>=D?(X=f,Z=S,ne=T,te=M,f>=0?(E=p,R=g,O=_,G=x,se=b,k=y,le=N,K=L):(E=g,R=p,O=x,G=_,se=y,k=b,le=L,K=N)):F>=D?(X=p,Z=_,ne=b,te=N,p>=0?(E=g,R=f,O=x,G=S,se=y,k=T,le=L,K=M):(E=f,R=g,O=S,G=x,se=T,k=y,le=M,K=L)):(X=g,Z=x,ne=y,te=L,g>=0?(E=f,R=p,O=S,G=_,se=T,k=b,le=M,K=N):(E=p,R=f,O=_,G=S,se=b,k=T,le=N,K=M)),X===0)return null;const q=E/X,Y=R/X,U=1/X,J=O-q*Z,Ce=G-Y*Z,Q=se-q*ne,_e=k-Y*ne,Me=le-q*te,He=K-Y*te,Se=Me*_e-He*Q,Ge=J*He-Ce*Me,yt=Q*Ce-_e*J;if(a){if(Se<0||Ge<0||yt<0)return null}else if((Se<0||Ge<0||yt<0)&&(Se>0||Ge>0||yt>0))return null;const ee=Se+Ge+yt;if(ee===0)return null;const Ee=U*(Se*Z+Ge*ne+yt*te);return(ee>0?Ee<0:Ee>0)?null:this.at(Ee/ee,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Cd extends aa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kr,this.combine=a0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ig=new Yt,ns=new Mc,Ul=new Sc,rg=new H,Fl=new H,Ol=new H,kl=new H,Nh=new H,Bl=new H,sg=new H,zl=new H;class Zt extends An{constructor(e=new kn,t=new Cd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const h=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const h=this.morphTargetInfluences;if(l&&h){Bl.set(0,0,0);for(let f=0,p=l.length;f<p;f++){const g=h[f],S=l[f];g!==0&&(Nh.fromBufferAttribute(S,e),c?Bl.addScaledVector(Nh,g):Bl.addScaledVector(Nh.sub(t),g))}t.add(Bl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ul.copy(r.boundingSphere),Ul.applyMatrix4(l),ns.copy(e.ray).recast(e.near),!(Ul.containsPoint(ns.origin)===!1&&(ns.intersectSphere(Ul,rg)===null||ns.origin.distanceToSquared(rg)>(e.far-e.near)**2))&&(ig.copy(l).invert(),ns.copy(e.ray).applyMatrix4(ig),!(r.boundingBox!==null&&ns.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ns)))}_computeIntersections(e,t,r){let a;const l=this.geometry,c=this.material,h=l.index,f=l.attributes.position,p=l.attributes.uv,g=l.attributes.uv1,S=l.attributes.normal,_=l.groups,x=l.drawRange;if(h!==null)if(Array.isArray(c))for(let T=0,b=_.length;T<b;T++){const y=_[T],M=c[y.materialIndex],N=Math.max(y.start,x.start),L=Math.min(h.count,Math.min(y.start+y.count,x.start+x.count));for(let C=N,F=L;C<F;C+=3){const D=h.getX(C),E=h.getX(C+1),R=h.getX(C+2);a=Hl(this,M,e,r,p,g,S,D,E,R),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const T=Math.max(0,x.start),b=Math.min(h.count,x.start+x.count);for(let y=T,M=b;y<M;y+=3){const N=h.getX(y),L=h.getX(y+1),C=h.getX(y+2);a=Hl(this,c,e,r,p,g,S,N,L,C),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(f!==void 0)if(Array.isArray(c))for(let T=0,b=_.length;T<b;T++){const y=_[T],M=c[y.materialIndex],N=Math.max(y.start,x.start),L=Math.min(f.count,Math.min(y.start+y.count,x.start+x.count));for(let C=N,F=L;C<F;C+=3){const D=C,E=C+1,R=C+2;a=Hl(this,M,e,r,p,g,S,D,E,R),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const T=Math.max(0,x.start),b=Math.min(f.count,x.start+x.count);for(let y=T,M=b;y<M;y+=3){const N=y,L=y+1,C=y+2;a=Hl(this,c,e,r,p,g,S,N,L,C),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function my(s,e,t,r,a,l,c,h){let f;if(e.side===Zn?f=r.intersectTriangle(c,l,a,!0,h):f=r.intersectTriangle(a,l,c,e.side===ss,h),f===null)return null;zl.copy(h),zl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(zl);return p<t.near||p>t.far?null:{distance:p,point:zl.clone(),object:s}}function Hl(s,e,t,r,a,l,c,h,f,p){s.getVertexPosition(h,Fl),s.getVertexPosition(f,Ol),s.getVertexPosition(p,kl);const g=my(s,e,t,r,Fl,Ol,kl,sg);if(g){const S=new H;pi.getBarycoord(sg,Fl,Ol,kl,S),a&&(g.uv=pi.getInterpolatedAttribute(a,h,f,p,S,new Fe)),l&&(g.uv1=pi.getInterpolatedAttribute(l,h,f,p,S,new Fe)),c&&(g.normal=pi.getInterpolatedAttribute(c,h,f,p,S,new H),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const _={a:h,b:f,c:p,normal:new H,materialIndex:0};pi.getNormal(Fl,Ol,kl,_.normal),g.face=_,g.barycoord=S}return g}class gy extends Gn{constructor(e=null,t=1,r=1,a,l,c,h,f,p=Cn,g=Cn,S,_){super(null,c,h,f,p,g,a,l,S,_),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const is=new Sc,vy=new Fe(.5,.5),Gl=new H;class uo{constructor(e=new sr,t=new sr,r=new sr,a=new sr,l=new sr,c=new sr){this.planes=[e,t,r,a,l,c]}set(e,t,r,a,l,c){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(r),h[3].copy(a),h[4].copy(l),h[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ai,r=!1){const a=this.planes,l=e.elements,c=l[0],h=l[1],f=l[2],p=l[3],g=l[4],S=l[5],_=l[6],x=l[7],T=l[8],b=l[9],y=l[10],M=l[11],N=l[12],L=l[13],C=l[14],F=l[15];if(a[0].setComponents(p-c,x-g,M-T,F-N).normalize(),a[1].setComponents(p+c,x+g,M+T,F+N).normalize(),a[2].setComponents(p+h,x+S,M+b,F+L).normalize(),a[3].setComponents(p-h,x-S,M-b,F-L).normalize(),r)a[4].setComponents(f,_,y,C).normalize(),a[5].setComponents(p-f,x-_,M-y,F-C).normalize();else if(a[4].setComponents(p-f,x-_,M-y,F-C).normalize(),t===Ai)a[5].setComponents(p+f,x+_,M+y,F+C).normalize();else if(t===co)a[5].setComponents(f,_,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(e){is.center.set(0,0,0);const t=vy.distanceTo(e.center);return is.radius=.7071067811865476+t,is.applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(Gl.x=a.normal.x>0?e.max.x:e.min.x,Gl.y=a.normal.y>0?e.max.y:e.min.y,Gl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Gl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const ag=new Yt;class Yd{constructor(){this.coordinateSystem=Ai,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,r=this._frustums;for(let a=0;a<t.length;a++){const l=t[a];ag.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse),r[a]===void 0&&(r[a]=new uo),r[a].setFromProjectionMatrix(ag,l.coordinateSystem,l.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,r=e._frustums;for(let a=0;a<e._count;a++)t[a]===void 0&&(t[a]=new uo),t[a].copy(r[a]);return this._count=e._count,this}clone(){return new Yd().copy(this)}}class pc extends aa{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mc=new H,gc=new H,og=new Yt,Ka=new Mc,Vl=new Sc,Lh=new H,lg=new H;class _y extends An{constructor(e=new kn,t=new pc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let a=1,l=t.count;a<l;a++)mc.fromBufferAttribute(t,a-1),gc.fromBufferAttribute(t,a),r[a]=r[a-1],r[a]+=mc.distanceTo(gc);e.setAttribute("lineDistance",new Gt(r,1))}else vt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Vl.copy(r.boundingSphere),Vl.applyMatrix4(a),Vl.radius+=l,e.ray.intersectsSphere(Vl)===!1)return;og.copy(a).invert(),Ka.copy(e.ray).applyMatrix4(og);const h=l/((this.scale.x+this.scale.y+this.scale.z)/3),f=h*h,p=this.isLineSegments?2:1,g=r.index,_=r.attributes.position;if(g!==null){const x=Math.max(0,c.start),T=Math.min(g.count,c.start+c.count);for(let b=x,y=T-1;b<y;b+=p){const M=g.getX(b),N=g.getX(b+1),L=Wl(this,e,Ka,f,M,N,b);L&&t.push(L)}if(this.isLineLoop){const b=g.getX(T-1),y=g.getX(x),M=Wl(this,e,Ka,f,b,y,T-1);M&&t.push(M)}}else{const x=Math.max(0,c.start),T=Math.min(_.count,c.start+c.count);for(let b=x,y=T-1;b<y;b+=p){const M=Wl(this,e,Ka,f,b,b+1,b);M&&t.push(M)}if(this.isLineLoop){const b=Wl(this,e,Ka,f,T-1,x,T-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const h=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}}function Wl(s,e,t,r,a,l,c){const h=s.geometry.attributes.position;if(mc.fromBufferAttribute(h,a),gc.fromBufferAttribute(h,l),t.distanceSqToSegment(mc,gc,Lh,lg)>r)return;Lh.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(Lh);if(!(p<e.near||p>e.far))return{distance:p,point:lg.clone().applyMatrix4(s.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:s}}const cg=new H,ug=new H;class Pd extends _y{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let a=0,l=t.count;a<l;a+=2)cg.fromBufferAttribute(t,a),ug.fromBufferAttribute(t,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+cg.distanceTo(ug);e.setAttribute("lineDistance",new Gt(r,1))}else vt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class P0 extends Gn{constructor(e=[],t=ea,r,a,l,c,h,f,p,g){super(e,t,r,a,l,c,h,f,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class na extends Gn{constructor(e,t,r=Vi,a,l,c,h=Cn,f=Cn,p,g=Fr,S=1){if(g!==Fr&&g!==Ir)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:S};super(_,a,l,c,h,f,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class N0 extends na{constructor(e,t=Vi,r=ea,a,l,c=Cn,h=Cn,f,p=Fr){const g={width:e,height:e,depth:1},S=[g,g,g,g,g,g];super(e,e,t,r,a,l,c,h,f,p),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class L0 extends Gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class os extends kn{constructor(e=1,t=1,r=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:c};const h=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const f=[],p=[],g=[],S=[];let _=0,x=0;T("z","y","x",-1,-1,r,t,e,c,l,0),T("z","y","x",1,-1,r,t,-e,c,l,1),T("x","z","y",1,1,e,r,t,a,c,2),T("x","z","y",1,-1,e,r,-t,a,c,3),T("x","y","z",1,-1,e,t,r,a,l,4),T("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(f),this.setAttribute("position",new Gt(p,3)),this.setAttribute("normal",new Gt(g,3)),this.setAttribute("uv",new Gt(S,2));function T(b,y,M,N,L,C,F,D,E,R,X){const O=C/E,G=F/R,Z=C/2,se=F/2,k=D/2,ne=E+1,le=R+1;let K=0,te=0;const q=new H;for(let Y=0;Y<le;Y++){const U=Y*G-se;for(let J=0;J<ne;J++){const Ce=J*O-Z;q[b]=Ce*N,q[y]=U*L,q[M]=k,p.push(q.x,q.y,q.z),q[b]=0,q[y]=0,q[M]=D>0?1:-1,g.push(q.x,q.y,q.z),S.push(J/E),S.push(1-Y/R),K+=1}}for(let Y=0;Y<R;Y++)for(let U=0;U<E;U++){const J=_+U+ne*Y,Ce=_+U+ne*(Y+1),Q=_+(U+1)+ne*(Y+1),_e=_+(U+1)+ne*Y;f.push(J,Ce,_e),f.push(Ce,Q,_e),te+=6}h.addGroup(x,te,X),x+=te,_+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new os(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Oi extends kn{constructor(e=1,t=1,r=1,a=32,l=1,c=!1,h=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:a,heightSegments:l,openEnded:c,thetaStart:h,thetaLength:f};const p=this;a=Math.floor(a),l=Math.floor(l);const g=[],S=[],_=[],x=[];let T=0;const b=[],y=r/2;let M=0;N(),c===!1&&(e>0&&L(!0),t>0&&L(!1)),this.setIndex(g),this.setAttribute("position",new Gt(S,3)),this.setAttribute("normal",new Gt(_,3)),this.setAttribute("uv",new Gt(x,2));function N(){const C=new H,F=new H;let D=0;const E=(t-e)/r;for(let R=0;R<=l;R++){const X=[],O=R/l,G=O*(t-e)+e;for(let Z=0;Z<=a;Z++){const se=Z/a,k=se*f+h,ne=Math.sin(k),le=Math.cos(k);F.x=G*ne,F.y=-O*r+y,F.z=G*le,S.push(F.x,F.y,F.z),C.set(ne,E,le).normalize(),_.push(C.x,C.y,C.z),x.push(se,1-O),X.push(T++)}b.push(X)}for(let R=0;R<a;R++)for(let X=0;X<l;X++){const O=b[X][R],G=b[X+1][R],Z=b[X+1][R+1],se=b[X][R+1];(e>0||X!==0)&&(g.push(O,G,se),D+=3),(t>0||X!==l-1)&&(g.push(G,Z,se),D+=3)}p.addGroup(M,D,0),M+=D}function L(C){const F=T,D=new Fe,E=new H;let R=0;const X=C===!0?e:t,O=C===!0?1:-1;for(let Z=1;Z<=a;Z++)S.push(0,y*O,0),_.push(0,O,0),x.push(.5,.5),T++;const G=T;for(let Z=0;Z<=a;Z++){const k=Z/a*f+h,ne=Math.cos(k),le=Math.sin(k);E.x=X*le,E.y=y*O,E.z=X*ne,S.push(E.x,E.y,E.z),_.push(0,O,0),D.x=ne*.5+.5,D.y=le*.5*O+.5,x.push(D.x,D.y),T++}for(let Z=0;Z<a;Z++){const se=F+Z,k=G+Z;C===!0?g.push(k,k+1,se):g.push(k+1,k,se),R+=3}p.addGroup(M,R,C===!0?1:2),M+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $d extends Oi{constructor(e=1,t=1,r=32,a=1,l=!1,c=0,h=Math.PI*2){super(0,e,t,r,a,l,c,h),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:a,openEnded:l,thetaStart:c,thetaLength:h}}static fromJSON(e){return new $d(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const jl=new H,Xl=new H,Dh=new H,ql=new pi;class hg extends kn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const a=Math.pow(10,4),l=Math.cos(no*t),c=e.getIndex(),h=e.getAttribute("position"),f=c?c.count:h.count,p=[0,0,0],g=["a","b","c"],S=new Array(3),_=new Map,x=[];for(let T=0;T<f;T+=3){c?(p[0]=c.getX(T),p[1]=c.getX(T+1),p[2]=c.getX(T+2)):(p[0]=T,p[1]=T+1,p[2]=T+2);const{a:b,b:y,c:M}=ql;if(b.fromBufferAttribute(h,p[0]),y.fromBufferAttribute(h,p[1]),M.fromBufferAttribute(h,p[2]),ql.getNormal(Dh),S[0]=`${Math.round(b.x*a)},${Math.round(b.y*a)},${Math.round(b.z*a)}`,S[1]=`${Math.round(y.x*a)},${Math.round(y.y*a)},${Math.round(y.z*a)}`,S[2]=`${Math.round(M.x*a)},${Math.round(M.y*a)},${Math.round(M.z*a)}`,!(S[0]===S[1]||S[1]===S[2]||S[2]===S[0]))for(let N=0;N<3;N++){const L=(N+1)%3,C=S[N],F=S[L],D=ql[g[N]],E=ql[g[L]],R=`${C}_${F}`,X=`${F}_${C}`,O=_.get(X);O?(Dh.dot(O.normal)<=l&&(x.push(D.x,D.y,D.z),x.push(E.x,E.y,E.z)),_.set(X,null)):_.has(R)||_.set(R,{index0:p[N],index1:p[L],normal:Dh.clone()})}}for(const T of _.values())if(T){const{index0:b,index1:y}=T;jl.fromBufferAttribute(h,b),Xl.fromBufferAttribute(h,y),x.push(jl.x,jl.y,jl.z),x.push(Xl.x,Xl.y,Xl.z)}this.setAttribute("position",new Gt(x,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ji{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){vt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,a=this.getPoint(0),l=0;t.push(0);for(let c=1;c<=e;c++)r=this.getPoint(c/e),l+=r.distanceTo(a),t.push(l),a=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let a=0;const l=r.length;let c;t?c=t:c=e*r[l-1];let h=0,f=l-1,p;for(;h<=f;)if(a=Math.floor(h+(f-h)/2),p=r[a]-c,p<0)h=a+1;else if(p>0)f=a-1;else{f=a;break}if(a=f,r[a]===c)return a/(l-1);const g=r[a],_=r[a+1]-g,x=(c-g)/_;return(a+x)/(l-1)}getTangent(e,t){let a=e-1e-4,l=e+1e-4;a<0&&(a=0),l>1&&(l=1);const c=this.getPoint(a),h=this.getPoint(l),f=t||(c.isVector2?new Fe:new H);return f.copy(h).sub(c).normalize(),f}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new H,a=[],l=[],c=[],h=new H,f=new Yt;for(let x=0;x<=e;x++){const T=x/e;a[x]=this.getTangentAt(T,new H)}l[0]=new H,c[0]=new H;let p=Number.MAX_VALUE;const g=Math.abs(a[0].x),S=Math.abs(a[0].y),_=Math.abs(a[0].z);g<=p&&(p=g,r.set(1,0,0)),S<=p&&(p=S,r.set(0,1,0)),_<=p&&r.set(0,0,1),h.crossVectors(a[0],r).normalize(),l[0].crossVectors(a[0],h),c[0].crossVectors(a[0],l[0]);for(let x=1;x<=e;x++){if(l[x]=l[x-1].clone(),c[x]=c[x-1].clone(),h.crossVectors(a[x-1],a[x]),h.length()>Number.EPSILON){h.normalize();const T=Math.acos(At(a[x-1].dot(a[x]),-1,1));l[x].applyMatrix4(f.makeRotationAxis(h,T))}c[x].crossVectors(a[x],l[x])}if(t===!0){let x=Math.acos(At(l[0].dot(l[e]),-1,1));x/=e,a[0].dot(h.crossVectors(l[0],l[e]))>0&&(x=-x);for(let T=1;T<=e;T++)l[T].applyMatrix4(f.makeRotationAxis(a[T],x*T)),c[T].crossVectors(a[T],l[T])}return{tangents:a,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class Kd extends ji{constructor(e=0,t=0,r=1,a=1,l=0,c=Math.PI*2,h=!1,f=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=a,this.aStartAngle=l,this.aEndAngle=c,this.aClockwise=h,this.aRotation=f}getPoint(e,t=new Fe){const r=t,a=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const c=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=a;for(;l>a;)l-=a;l<Number.EPSILON&&(c?l=0:l=a),this.aClockwise===!0&&!c&&(l===a?l=-a:l=l-a);const h=this.aStartAngle+e*l;let f=this.aX+this.xRadius*Math.cos(h),p=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const g=Math.cos(this.aRotation),S=Math.sin(this.aRotation),_=f-this.aX,x=p-this.aY;f=_*g-x*S+this.aX,p=_*S+x*g+this.aY}return r.set(f,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class xy extends Kd{constructor(e,t,r,a,l,c){super(e,t,r,r,a,l,c),this.isArcCurve=!0,this.type="ArcCurve"}}function Zd(){let s=0,e=0,t=0,r=0;function a(l,c,h,f){s=l,e=h,t=-3*l+3*c-2*h-f,r=2*l-2*c+h+f}return{initCatmullRom:function(l,c,h,f,p){a(c,h,p*(h-l),p*(f-c))},initNonuniformCatmullRom:function(l,c,h,f,p,g,S){let _=(c-l)/p-(h-l)/(p+g)+(h-c)/g,x=(h-c)/g-(f-c)/(g+S)+(f-h)/S;_*=g,x*=g,a(c,h,_,x)},calc:function(l){const c=l*l,h=c*l;return s+e*l+t*c+r*h}}}const dg=new H,fg=new H,Ih=new Zd,Uh=new Zd,Fh=new Zd;class D0 extends ji{constructor(e=[],t=!1,r="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=a}getPoint(e,t=new H){const r=t,a=this.points,l=a.length,c=(l-(this.closed?0:1))*e;let h=Math.floor(c),f=c-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/l)+1)*l:f===0&&h===l-1&&(h=l-2,f=1);let p,g;this.closed||h>0?p=a[(h-1)%l]:(fg.subVectors(a[0],a[1]).add(a[0]),p=fg);const S=a[h%l],_=a[(h+1)%l];if(this.closed||h+2<l?g=a[(h+2)%l]:(dg.subVectors(a[l-1],a[l-2]).add(a[l-1]),g=dg),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let T=Math.pow(p.distanceToSquared(S),x),b=Math.pow(S.distanceToSquared(_),x),y=Math.pow(_.distanceToSquared(g),x);b<1e-4&&(b=1),T<1e-4&&(T=b),y<1e-4&&(y=b),Ih.initNonuniformCatmullRom(p.x,S.x,_.x,g.x,T,b,y),Uh.initNonuniformCatmullRom(p.y,S.y,_.y,g.y,T,b,y),Fh.initNonuniformCatmullRom(p.z,S.z,_.z,g.z,T,b,y)}else this.curveType==="catmullrom"&&(Ih.initCatmullRom(p.x,S.x,_.x,g.x,this.tension),Uh.initCatmullRom(p.y,S.y,_.y,g.y,this.tension),Fh.initCatmullRom(p.z,S.z,_.z,g.z,this.tension));return r.set(Ih.calc(f),Uh.calc(f),Fh.calc(f)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(new H().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function pg(s,e,t,r,a){const l=(r-e)*.5,c=(a-t)*.5,h=s*s,f=s*h;return(2*t-2*r+l+c)*f+(-3*t+3*r-2*l-c)*h+l*s+t}function yy(s,e){const t=1-s;return t*t*e}function Sy(s,e){return 2*(1-s)*s*e}function My(s,e){return s*s*e}function io(s,e,t,r){return yy(s,e)+Sy(s,t)+My(s,r)}function Ey(s,e){const t=1-s;return t*t*t*e}function Ty(s,e){const t=1-s;return 3*t*t*s*e}function wy(s,e){return 3*(1-s)*s*s*e}function Ay(s,e){return s*s*s*e}function ro(s,e,t,r,a){return Ey(s,e)+Ty(s,t)+wy(s,r)+Ay(s,a)}class I0 extends ji{constructor(e=new Fe,t=new Fe,r=new Fe,a=new Fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=a}getPoint(e,t=new Fe){const r=t,a=this.v0,l=this.v1,c=this.v2,h=this.v3;return r.set(ro(e,a.x,l.x,c.x,h.x),ro(e,a.y,l.y,c.y,h.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class by extends ji{constructor(e=new H,t=new H,r=new H,a=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=a}getPoint(e,t=new H){const r=t,a=this.v0,l=this.v1,c=this.v2,h=this.v3;return r.set(ro(e,a.x,l.x,c.x,h.x),ro(e,a.y,l.y,c.y,h.y),ro(e,a.z,l.z,c.z,h.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class U0 extends ji{constructor(e=new Fe,t=new Fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Fe){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ry extends ji{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class F0 extends ji{constructor(e=new Fe,t=new Fe,r=new Fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Fe){const r=t,a=this.v0,l=this.v1,c=this.v2;return r.set(io(e,a.x,l.x,c.x),io(e,a.y,l.y,c.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class O0 extends ji{constructor(e=new H,t=new H,r=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new H){const r=t,a=this.v0,l=this.v1,c=this.v2;return r.set(io(e,a.x,l.x,c.x),io(e,a.y,l.y,c.y),io(e,a.z,l.z,c.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class k0 extends ji{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Fe){const r=t,a=this.points,l=(a.length-1)*e,c=Math.floor(l),h=l-c,f=a[c===0?c:c-1],p=a[c],g=a[c>a.length-2?a.length-1:c+1],S=a[c>a.length-3?a.length-1:c+2];return r.set(pg(h,f.x,p.x,g.x,S.x),pg(h,f.y,p.y,g.y,S.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(new Fe().fromArray(a))}return this}}var vc=Object.freeze({__proto__:null,ArcCurve:xy,CatmullRomCurve3:D0,CubicBezierCurve:I0,CubicBezierCurve3:by,EllipseCurve:Kd,LineCurve:U0,LineCurve3:Ry,QuadraticBezierCurve:F0,QuadraticBezierCurve3:O0,SplineCurve:k0});class Cy extends ji{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vc[r](t,e))}return this}getPoint(e,t){const r=e*this.getLength(),a=this.getCurveLengths();let l=0;for(;l<a.length;){if(a[l]>=r){const c=a[l]-r,h=this.curves[l],f=h.getLength(),p=f===0?0:1-c/f;return h.getPointAt(p,t)}l++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let r=0,a=this.curves.length;r<a;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let r;for(let a=0,l=this.curves;a<l.length;a++){const c=l[a],h=c.isEllipseCurve?e*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?e*c.points.length:e,f=c.getPoints(h);for(let p=0;p<f.length;p++){const g=f[p];r&&r.equals(g)||(t.push(g),r=g)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const a=e.curves[t];this.curves.push(a.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){const a=this.curves[t];e.curves.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const a=e.curves[t];this.curves.push(new vc[a.type]().fromJSON(a))}return this.cacheLengths=null,this}}class mg extends Cy{constructor(e){super(),this.type="Path",this.currentPoint=new Fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const r=new U0(this.currentPoint.clone(),new Fe(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,a){const l=new F0(this.currentPoint.clone(),new Fe(e,t),new Fe(r,a));return this.curves.push(l),this.currentPoint.set(r,a),this}bezierCurveTo(e,t,r,a,l,c){const h=new I0(this.currentPoint.clone(),new Fe(e,t),new Fe(r,a),new Fe(l,c));return this.curves.push(h),this.currentPoint.set(l,c),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),r=new k0(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,a,l,c){const h=this.currentPoint.x,f=this.currentPoint.y;return this.absarc(e+h,t+f,r,a,l,c),this}absarc(e,t,r,a,l,c){return this.absellipse(e,t,r,r,a,l,c),this}ellipse(e,t,r,a,l,c,h,f){const p=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(e+p,t+g,r,a,l,c,h,f),this}absellipse(e,t,r,a,l,c,h,f){const p=new Kd(e,t,r,a,l,c,h,f);if(this.curves.length>0){const S=p.getPoint(0);S.equals(this.currentPoint)||this.lineTo(S.x,S.y)}this.curves.push(p);const g=p.getPoint(1);return this.currentPoint.copy(g),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class B0 extends mg{constructor(e){super(e),this.uuid=sa(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let r=0,a=this.holes.length;r<a;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const a=e.holes[t];this.holes.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){const a=this.holes[t];e.holes.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const a=e.holes[t];this.holes.push(new mg().fromJSON(a))}return this}}function Py(s,e,t=2){const r=e&&e.length,a=r?e[0]*t:s.length;let l=z0(s,0,a,t,!0);const c=[];if(!l||l.next===l.prev)return c;let h,f,p;if(r&&(l=Uy(s,e,l,t)),s.length>80*t){h=s[0],f=s[1];let g=h,S=f;for(let _=t;_<a;_+=t){const x=s[_],T=s[_+1];x<h&&(h=x),T<f&&(f=T),x>g&&(g=x),T>S&&(S=T)}p=Math.max(g-h,S-f),p=p!==0?32767/p:0}return ho(l,c,t,h,f,p,0),c}function z0(s,e,t,r,a){let l;if(a===Xy(s,e,t,r)>0)for(let c=e;c<t;c+=r)l=gg(c/r|0,s[c],s[c+1],l);else for(let c=t-r;c>=e;c-=r)l=gg(c/r|0,s[c],s[c+1],l);return l&&ia(l,l.next)&&(po(l),l=l.next),l}function ls(s,e){if(!s)return s;e||(e=s);let t=s,r;do if(r=!1,!t.steiner&&(ia(t,t.next)||on(t.prev,t,t.next)===0)){if(po(t),t=e=t.prev,t===t.next)break;r=!0}else t=t.next;while(r||t!==e);return e}function ho(s,e,t,r,a,l,c){if(!s)return;!c&&l&&zy(s,r,a,l);let h=s;for(;s.prev!==s.next;){const f=s.prev,p=s.next;if(l?Ly(s,r,a,l):Ny(s)){e.push(f.i,s.i,p.i),po(s),s=p.next,h=p.next;continue}if(s=p,s===h){c?c===1?(s=Dy(ls(s),e),ho(s,e,t,r,a,l,2)):c===2&&Iy(s,e,t,r,a,l):ho(ls(s),e,t,r,a,l,1);break}}}function Ny(s){const e=s.prev,t=s,r=s.next;if(on(e,t,r)>=0)return!1;const a=e.x,l=t.x,c=r.x,h=e.y,f=t.y,p=r.y,g=Math.min(a,l,c),S=Math.min(h,f,p),_=Math.max(a,l,c),x=Math.max(h,f,p);let T=r.next;for(;T!==e;){if(T.x>=g&&T.x<=_&&T.y>=S&&T.y<=x&&Qa(a,h,l,f,c,p,T.x,T.y)&&on(T.prev,T,T.next)>=0)return!1;T=T.next}return!0}function Ly(s,e,t,r){const a=s.prev,l=s,c=s.next;if(on(a,l,c)>=0)return!1;const h=a.x,f=l.x,p=c.x,g=a.y,S=l.y,_=c.y,x=Math.min(h,f,p),T=Math.min(g,S,_),b=Math.max(h,f,p),y=Math.max(g,S,_),M=Nd(x,T,e,t,r),N=Nd(b,y,e,t,r);let L=s.prevZ,C=s.nextZ;for(;L&&L.z>=M&&C&&C.z<=N;){if(L.x>=x&&L.x<=b&&L.y>=T&&L.y<=y&&L!==a&&L!==c&&Qa(h,g,f,S,p,_,L.x,L.y)&&on(L.prev,L,L.next)>=0||(L=L.prevZ,C.x>=x&&C.x<=b&&C.y>=T&&C.y<=y&&C!==a&&C!==c&&Qa(h,g,f,S,p,_,C.x,C.y)&&on(C.prev,C,C.next)>=0))return!1;C=C.nextZ}for(;L&&L.z>=M;){if(L.x>=x&&L.x<=b&&L.y>=T&&L.y<=y&&L!==a&&L!==c&&Qa(h,g,f,S,p,_,L.x,L.y)&&on(L.prev,L,L.next)>=0)return!1;L=L.prevZ}for(;C&&C.z<=N;){if(C.x>=x&&C.x<=b&&C.y>=T&&C.y<=y&&C!==a&&C!==c&&Qa(h,g,f,S,p,_,C.x,C.y)&&on(C.prev,C,C.next)>=0)return!1;C=C.nextZ}return!0}function Dy(s,e){let t=s;do{const r=t.prev,a=t.next.next;!ia(r,a)&&G0(r,t,t.next,a)&&fo(r,a)&&fo(a,r)&&(e.push(r.i,t.i,a.i),po(t),po(t.next),t=s=a),t=t.next}while(t!==s);return ls(t)}function Iy(s,e,t,r,a,l){let c=s;do{let h=c.next.next;for(;h!==c.prev;){if(c.i!==h.i&&Vy(c,h)){let f=V0(c,h);c=ls(c,c.next),f=ls(f,f.next),ho(c,e,t,r,a,l,0),ho(f,e,t,r,a,l,0);return}h=h.next}c=c.next}while(c!==s)}function Uy(s,e,t,r){const a=[];for(let l=0,c=e.length;l<c;l++){const h=e[l]*r,f=l<c-1?e[l+1]*r:s.length,p=z0(s,h,f,r,!1);p===p.next&&(p.steiner=!0),a.push(Gy(p))}a.sort(Fy);for(let l=0;l<a.length;l++)t=Oy(a[l],t);return t}function Fy(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const r=(s.next.y-s.y)/(s.next.x-s.x),a=(e.next.y-e.y)/(e.next.x-e.x);t=r-a}return t}function Oy(s,e){const t=ky(s,e);if(!t)return e;const r=V0(t,s);return ls(r,r.next),ls(t,t.next)}function ky(s,e){let t=e;const r=s.x,a=s.y;let l=-1/0,c;if(ia(s,t))return t;do{if(ia(s,t.next))return t.next;if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const S=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(S<=r&&S>l&&(l=S,c=t.x<t.next.x?t:t.next,S===r))return c}t=t.next}while(t!==e);if(!c)return null;const h=c,f=c.x,p=c.y;let g=1/0;t=c;do{if(r>=t.x&&t.x>=f&&r!==t.x&&H0(a<p?r:l,a,f,p,a<p?l:r,a,t.x,t.y)){const S=Math.abs(a-t.y)/(r-t.x);fo(t,s)&&(S<g||S===g&&(t.x>c.x||t.x===c.x&&By(c,t)))&&(c=t,g=S)}t=t.next}while(t!==h);return c}function By(s,e){return on(s.prev,s,e.prev)<0&&on(e.next,s,s.next)<0}function zy(s,e,t,r){let a=s;do a.z===0&&(a.z=Nd(a.x,a.y,e,t,r)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==s);a.prevZ.nextZ=null,a.prevZ=null,Hy(a)}function Hy(s){let e,t=1;do{let r=s,a;s=null;let l=null;for(e=0;r;){e++;let c=r,h=0;for(let p=0;p<t&&(h++,c=c.nextZ,!!c);p++);let f=t;for(;h>0||f>0&&c;)h!==0&&(f===0||!c||r.z<=c.z)?(a=r,r=r.nextZ,h--):(a=c,c=c.nextZ,f--),l?l.nextZ=a:s=a,a.prevZ=l,l=a;r=c}l.nextZ=null,t*=2}while(e>1);return s}function Nd(s,e,t,r,a){return s=(s-t)*a|0,e=(e-r)*a|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Gy(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function H0(s,e,t,r,a,l,c,h){return(a-c)*(e-h)>=(s-c)*(l-h)&&(s-c)*(r-h)>=(t-c)*(e-h)&&(t-c)*(l-h)>=(a-c)*(r-h)}function Qa(s,e,t,r,a,l,c,h){return!(s===c&&e===h)&&H0(s,e,t,r,a,l,c,h)}function Vy(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Wy(s,e)&&(fo(s,e)&&fo(e,s)&&jy(s,e)&&(on(s.prev,s,e.prev)||on(s,e.prev,e))||ia(s,e)&&on(s.prev,s,s.next)>0&&on(e.prev,e,e.next)>0)}function on(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function ia(s,e){return s.x===e.x&&s.y===e.y}function G0(s,e,t,r){const a=$l(on(s,e,t)),l=$l(on(s,e,r)),c=$l(on(t,r,s)),h=$l(on(t,r,e));return!!(a!==l&&c!==h||a===0&&Yl(s,t,e)||l===0&&Yl(s,r,e)||c===0&&Yl(t,s,r)||h===0&&Yl(t,e,r))}function Yl(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function $l(s){return s>0?1:s<0?-1:0}function Wy(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&G0(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function fo(s,e){return on(s.prev,s,s.next)<0?on(s,e,s.next)>=0&&on(s,s.prev,e)>=0:on(s,e,s.prev)<0||on(s,s.next,e)<0}function jy(s,e){let t=s,r=!1;const a=(s.x+e.x)/2,l=(s.y+e.y)/2;do t.y>l!=t.next.y>l&&t.next.y!==t.y&&a<(t.next.x-t.x)*(l-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next;while(t!==s);return r}function V0(s,e){const t=Ld(s.i,s.x,s.y),r=Ld(e.i,e.x,e.y),a=s.next,l=e.prev;return s.next=e,e.prev=s,t.next=a,a.prev=t,r.next=t,t.prev=r,l.next=r,r.prev=l,r}function gg(s,e,t,r){const a=Ld(s,e,t);return r?(a.next=r.next,a.prev=r,r.next.prev=a,r.next=a):(a.prev=a,a.next=a),a}function po(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ld(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Xy(s,e,t,r){let a=0;for(let l=e,c=t-r;l<t;l+=r)a+=(s[c]-s[l])*(s[l+1]+s[c+1]),c=l;return a}class qy{static triangulate(e,t,r=2){return Py(e,t,r)}}class Ks{static area(e){const t=e.length;let r=0;for(let a=t-1,l=0;l<t;a=l++)r+=e[a].x*e[l].y-e[l].x*e[a].y;return r*.5}static isClockWise(e){return Ks.area(e)<0}static triangulateShape(e,t){const r=[],a=[],l=[];vg(e),_g(r,e);let c=e.length;t.forEach(vg);for(let f=0;f<t.length;f++)a.push(c),c+=t[f].length,_g(r,t[f]);const h=qy.triangulate(r,a);for(let f=0;f<h.length;f+=3)l.push(h.slice(f,f+3));return l}}function vg(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function _g(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Jd extends kn{constructor(e=new B0([new Fe(.5,.5),new Fe(-.5,.5),new Fe(-.5,-.5),new Fe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const r=this,a=[],l=[];for(let h=0,f=e.length;h<f;h++){const p=e[h];c(p)}this.setAttribute("position",new Gt(a,3)),this.setAttribute("uv",new Gt(l,2)),this.computeVertexNormals();function c(h){const f=[],p=t.curveSegments!==void 0?t.curveSegments:12,g=t.steps!==void 0?t.steps:1,S=t.depth!==void 0?t.depth:1;let _=t.bevelEnabled!==void 0?t.bevelEnabled:!0,x=t.bevelThickness!==void 0?t.bevelThickness:.2,T=t.bevelSize!==void 0?t.bevelSize:x-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,y=t.bevelSegments!==void 0?t.bevelSegments:3;const M=t.extrudePath,N=t.UVGenerator!==void 0?t.UVGenerator:Yy;let L,C=!1,F,D,E,R;if(M){L=M.getSpacedPoints(g),C=!0,_=!1;const ce=M.isCatmullRomCurve3?M.closed:!1;F=M.computeFrenetFrames(g,ce),D=new H,E=new H,R=new H}_||(y=0,x=0,T=0,b=0);const X=h.extractPoints(p);let O=X.shape;const G=X.holes;if(!Ks.isClockWise(O)){O=O.reverse();for(let ce=0,ye=G.length;ce<ye;ce++){const xe=G[ce];Ks.isClockWise(xe)&&(G[ce]=xe.reverse())}}function se(ce){const xe=10000000000000001e-36;let Ne=ce[0];for(let we=1;we<=ce.length;we++){const st=we%ce.length,Ye=ce[st],Ze=Ye.x-Ne.x,dt=Ye.y-Ne.y,Mt=Ze*Ze+dt*dt,V=Math.max(Math.abs(Ye.x),Math.abs(Ye.y),Math.abs(Ne.x),Math.abs(Ne.y)),Lt=xe*V*V;if(Mt<=Lt){ce.splice(st,1),we--;continue}Ne=Ye}}se(O),G.forEach(se);const k=G.length,ne=O;for(let ce=0;ce<k;ce++){const ye=G[ce];O=O.concat(ye)}function le(ce,ye,xe){return ye||Ot("ExtrudeGeometry: vec does not exist"),ce.clone().addScaledVector(ye,xe)}const K=O.length;function te(ce,ye,xe){let Ne,we,st;const Ye=ce.x-ye.x,Ze=ce.y-ye.y,dt=xe.x-ce.x,Mt=xe.y-ce.y,V=Ye*Ye+Ze*Ze,Lt=Ye*Mt-Ze*dt;if(Math.abs(Lt)>Number.EPSILON){const ft=Math.sqrt(V),Pt=Math.sqrt(dt*dt+Mt*Mt),Ie=ye.x-Ze/ft,Vt=ye.y+Ye/ft,it=xe.x-Mt/Pt,ot=xe.y+dt/Pt,I=((it-Ie)*Mt-(ot-Vt)*dt)/(Ye*Mt-Ze*dt);Ne=Ie+Ye*I-ce.x,we=Vt+Ze*I-ce.y;const w=Ne*Ne+we*we;if(w<=2)return new Fe(Ne,we);st=Math.sqrt(w/2)}else{let ft=!1;Ye>Number.EPSILON?dt>Number.EPSILON&&(ft=!0):Ye<-Number.EPSILON?dt<-Number.EPSILON&&(ft=!0):Math.sign(Ze)===Math.sign(Mt)&&(ft=!0),ft?(Ne=-Ze,we=Ye,st=Math.sqrt(V)):(Ne=Ye,we=Ze,st=Math.sqrt(V/2))}return new Fe(Ne/st,we/st)}const q=[];for(let ce=0,ye=ne.length,xe=ye-1,Ne=ce+1;ce<ye;ce++,xe++,Ne++)xe===ye&&(xe=0),Ne===ye&&(Ne=0),q[ce]=te(ne[ce],ne[xe],ne[Ne]);const Y=[];let U,J=q.concat();for(let ce=0,ye=k;ce<ye;ce++){const xe=G[ce];U=[];for(let Ne=0,we=xe.length,st=we-1,Ye=Ne+1;Ne<we;Ne++,st++,Ye++)st===we&&(st=0),Ye===we&&(Ye=0),U[Ne]=te(xe[Ne],xe[st],xe[Ye]);Y.push(U),J=J.concat(U)}let Ce;if(y===0)Ce=Ks.triangulateShape(ne,G);else{const ce=[],ye=[];for(let xe=0;xe<y;xe++){const Ne=xe/y,we=x*Math.cos(Ne*Math.PI/2),st=T*Math.sin(Ne*Math.PI/2)+b;for(let Ye=0,Ze=ne.length;Ye<Ze;Ye++){const dt=le(ne[Ye],q[Ye],st);Ge(dt.x,dt.y,-we),Ne===0&&ce.push(dt)}for(let Ye=0,Ze=k;Ye<Ze;Ye++){const dt=G[Ye];U=Y[Ye];const Mt=[];for(let V=0,Lt=dt.length;V<Lt;V++){const ft=le(dt[V],U[V],st);Ge(ft.x,ft.y,-we),Ne===0&&Mt.push(ft)}Ne===0&&ye.push(Mt)}}Ce=Ks.triangulateShape(ce,ye)}const Q=Ce.length,_e=T+b;for(let ce=0;ce<K;ce++){const ye=_?le(O[ce],J[ce],_e):O[ce];C?(E.copy(F.normals[0]).multiplyScalar(ye.x),D.copy(F.binormals[0]).multiplyScalar(ye.y),R.copy(L[0]).add(E).add(D),Ge(R.x,R.y,R.z)):Ge(ye.x,ye.y,0)}for(let ce=1;ce<=g;ce++)for(let ye=0;ye<K;ye++){const xe=_?le(O[ye],J[ye],_e):O[ye];C?(E.copy(F.normals[ce]).multiplyScalar(xe.x),D.copy(F.binormals[ce]).multiplyScalar(xe.y),R.copy(L[ce]).add(E).add(D),Ge(R.x,R.y,R.z)):Ge(xe.x,xe.y,S/g*ce)}for(let ce=y-1;ce>=0;ce--){const ye=ce/y,xe=x*Math.cos(ye*Math.PI/2),Ne=T*Math.sin(ye*Math.PI/2)+b;for(let we=0,st=ne.length;we<st;we++){const Ye=le(ne[we],q[we],Ne);Ge(Ye.x,Ye.y,S+xe)}for(let we=0,st=G.length;we<st;we++){const Ye=G[we];U=Y[we];for(let Ze=0,dt=Ye.length;Ze<dt;Ze++){const Mt=le(Ye[Ze],U[Ze],Ne);C?Ge(Mt.x,Mt.y+L[g-1].y,L[g-1].x+xe):Ge(Mt.x,Mt.y,S+xe)}}}Me(),He();function Me(){const ce=a.length/3;if(_){let ye=0,xe=K*ye;for(let Ne=0;Ne<Q;Ne++){const we=Ce[Ne];yt(we[2]+xe,we[1]+xe,we[0]+xe)}ye=g+y*2,xe=K*ye;for(let Ne=0;Ne<Q;Ne++){const we=Ce[Ne];yt(we[0]+xe,we[1]+xe,we[2]+xe)}}else{for(let ye=0;ye<Q;ye++){const xe=Ce[ye];yt(xe[2],xe[1],xe[0])}for(let ye=0;ye<Q;ye++){const xe=Ce[ye];yt(xe[0]+K*g,xe[1]+K*g,xe[2]+K*g)}}r.addGroup(ce,a.length/3-ce,0)}function He(){const ce=a.length/3;let ye=0;Se(ne,ye),ye+=ne.length;for(let xe=0,Ne=G.length;xe<Ne;xe++){const we=G[xe];Se(we,ye),ye+=we.length}r.addGroup(ce,a.length/3-ce,1)}function Se(ce,ye){let xe=ce.length;for(;--xe>=0;){const Ne=xe;let we=xe-1;we<0&&(we=ce.length-1);for(let st=0,Ye=g+y*2;st<Ye;st++){const Ze=K*st,dt=K*(st+1),Mt=ye+Ne+Ze,V=ye+we+Ze,Lt=ye+we+dt,ft=ye+Ne+dt;ee(Mt,V,Lt,ft)}}}function Ge(ce,ye,xe){f.push(ce),f.push(ye),f.push(xe)}function yt(ce,ye,xe){Ee(ce),Ee(ye),Ee(xe);const Ne=a.length/3,we=N.generateTopUV(r,a,Ne-3,Ne-2,Ne-1);je(we[0]),je(we[1]),je(we[2])}function ee(ce,ye,xe,Ne){Ee(ce),Ee(ye),Ee(Ne),Ee(ye),Ee(xe),Ee(Ne);const we=a.length/3,st=N.generateSideWallUV(r,a,we-6,we-3,we-2,we-1);je(st[0]),je(st[1]),je(st[3]),je(st[1]),je(st[2]),je(st[3])}function Ee(ce){a.push(f[ce*3+0]),a.push(f[ce*3+1]),a.push(f[ce*3+2])}function je(ce){l.push(ce.x),l.push(ce.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,r=this.parameters.options;return $y(t,r,e)}static fromJSON(e,t){const r=[];for(let l=0,c=e.shapes.length;l<c;l++){const h=t[e.shapes[l]];r.push(h)}const a=e.options.extrudePath;return a!==void 0&&(e.options.extrudePath=new vc[a.type]().fromJSON(a)),new Jd(r,e.options)}}const Yy={generateTopUV:function(s,e,t,r,a){const l=e[t*3],c=e[t*3+1],h=e[r*3],f=e[r*3+1],p=e[a*3],g=e[a*3+1];return[new Fe(l,c),new Fe(h,f),new Fe(p,g)]},generateSideWallUV:function(s,e,t,r,a,l){const c=e[t*3],h=e[t*3+1],f=e[t*3+2],p=e[r*3],g=e[r*3+1],S=e[r*3+2],_=e[a*3],x=e[a*3+1],T=e[a*3+2],b=e[l*3],y=e[l*3+1],M=e[l*3+2];return Math.abs(h-g)<Math.abs(c-p)?[new Fe(c,1-f),new Fe(p,1-S),new Fe(_,1-T),new Fe(b,1-M)]:[new Fe(h,1-f),new Fe(g,1-S),new Fe(x,1-T),new Fe(y,1-M)]}};function $y(s,e,t){if(t.shapes=[],Array.isArray(s))for(let r=0,a=s.length;r<a;r++){const l=s[r];t.shapes.push(l.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class go extends kn{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,c=t/2,h=Math.floor(r),f=Math.floor(a),p=h+1,g=f+1,S=e/h,_=t/f,x=[],T=[],b=[],y=[];for(let M=0;M<g;M++){const N=M*_-c;for(let L=0;L<p;L++){const C=L*S-l;T.push(C,-N,0),b.push(0,0,1),y.push(L/h),y.push(1-M/f)}}for(let M=0;M<f;M++)for(let N=0;N<h;N++){const L=N+p*M,C=N+p*(M+1),F=N+1+p*(M+1),D=N+1+p*M;x.push(L,C,D),x.push(C,F,D)}this.setIndex(x),this.setAttribute("position",new Gt(T,3)),this.setAttribute("normal",new Gt(b,3)),this.setAttribute("uv",new Gt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new go(e.width,e.height,e.widthSegments,e.heightSegments)}}class Qd extends kn{constructor(e=.5,t=1,r=32,a=1,l=0,c=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:a,thetaStart:l,thetaLength:c},r=Math.max(3,r),a=Math.max(1,a);const h=[],f=[],p=[],g=[];let S=e;const _=(t-e)/a,x=new H,T=new Fe;for(let b=0;b<=a;b++){for(let y=0;y<=r;y++){const M=l+y/r*c;x.x=S*Math.cos(M),x.y=S*Math.sin(M),f.push(x.x,x.y,x.z),p.push(0,0,1),T.x=(x.x/t+1)/2,T.y=(x.y/t+1)/2,g.push(T.x,T.y)}S+=_}for(let b=0;b<a;b++){const y=b*(r+1);for(let M=0;M<r;M++){const N=M+y,L=N,C=N+r+1,F=N+r+2,D=N+1;h.push(L,C,D),h.push(C,F,D)}}this.setIndex(h),this.setAttribute("position",new Gt(f,3)),this.setAttribute("normal",new Gt(p,3)),this.setAttribute("uv",new Gt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qd(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class so extends kn{constructor(e=1,t=32,r=16,a=0,l=Math.PI*2,c=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:a,phiLength:l,thetaStart:c,thetaLength:h},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const f=Math.min(c+h,Math.PI);let p=0;const g=[],S=new H,_=new H,x=[],T=[],b=[],y=[];for(let M=0;M<=r;M++){const N=[],L=M/r,C=c+L*h,F=e*Math.cos(C),D=Math.sqrt(e*e-F*F);let E=0;M===0&&c===0?E=.5/t:M===r&&f===Math.PI&&(E=-.5/t);for(let R=0;R<=t;R++){const X=R/t,O=a+X*l;S.x=-D*Math.cos(O),S.y=F,S.z=D*Math.sin(O),T.push(S.x,S.y,S.z),_.copy(S).normalize(),b.push(_.x,_.y,_.z),y.push(X+E,1-L),N.push(p++)}g.push(N)}for(let M=0;M<r;M++)for(let N=0;N<t;N++){const L=g[M][N+1],C=g[M][N],F=g[M+1][N],D=g[M+1][N+1];(M!==0||c>0)&&x.push(L,C,D),(M!==r-1||f<Math.PI)&&x.push(C,F,D)}this.setIndex(x),this.setAttribute("position",new Gt(T,3)),this.setAttribute("normal",new Gt(b,3)),this.setAttribute("uv",new Gt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new so(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ef extends kn{constructor(e=1,t=.4,r=12,a=48,l=Math.PI*2,c=0,h=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:a,arc:l,thetaStart:c,thetaLength:h},r=Math.floor(r),a=Math.floor(a);const f=[],p=[],g=[],S=[],_=new H,x=new H,T=new H;for(let b=0;b<=r;b++){const y=c+b/r*h;for(let M=0;M<=a;M++){const N=M/a*l;x.x=(e+t*Math.cos(y))*Math.cos(N),x.y=(e+t*Math.cos(y))*Math.sin(N),x.z=t*Math.sin(y),p.push(x.x,x.y,x.z),_.x=e*Math.cos(N),_.y=e*Math.sin(N),T.subVectors(x,_).normalize(),g.push(T.x,T.y,T.z),S.push(M/a),S.push(b/r)}}for(let b=1;b<=r;b++)for(let y=1;y<=a;y++){const M=(a+1)*b+y-1,N=(a+1)*(b-1)+y-1,L=(a+1)*(b-1)+y,C=(a+1)*b+y;f.push(M,N,C),f.push(N,L,C)}this.setIndex(f),this.setAttribute("position",new Gt(p,3)),this.setAttribute("normal",new Gt(g,3)),this.setAttribute("uv",new Gt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ef(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class _c extends kn{constructor(e=new O0(new H(-1,-1,0),new H(-1,1,0),new H(1,1,0)),t=64,r=1,a=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:a,closed:l};const c=e.computeFrenetFrames(t,l);this.tangents=c.tangents,this.normals=c.normals,this.binormals=c.binormals;const h=new H,f=new H,p=new Fe;let g=new H;const S=[],_=[],x=[],T=[];b(),this.setIndex(T),this.setAttribute("position",new Gt(S,3)),this.setAttribute("normal",new Gt(_,3)),this.setAttribute("uv",new Gt(x,2));function b(){for(let L=0;L<t;L++)y(L);y(l===!1?t:0),N(),M()}function y(L){g=e.getPointAt(L/t,g);const C=c.normals[L],F=c.binormals[L];for(let D=0;D<=a;D++){const E=D/a*Math.PI*2,R=Math.sin(E),X=-Math.cos(E);f.x=X*C.x+R*F.x,f.y=X*C.y+R*F.y,f.z=X*C.z+R*F.z,f.normalize(),_.push(f.x,f.y,f.z),h.x=g.x+r*f.x,h.y=g.y+r*f.y,h.z=g.z+r*f.z,S.push(h.x,h.y,h.z)}}function M(){for(let L=1;L<=t;L++)for(let C=1;C<=a;C++){const F=(a+1)*(L-1)+(C-1),D=(a+1)*L+(C-1),E=(a+1)*L+C,R=(a+1)*(L-1)+C;T.push(F,D,R),T.push(D,E,R)}}function N(){for(let L=0;L<=t;L++)for(let C=0;C<=a;C++)p.x=L/t,p.y=C/a,x.push(p.x,p.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new _c(new vc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function ra(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];if(xg(a))a.isRenderTargetTexture?(vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone();else if(Array.isArray(a))if(xg(a[0])){const l=[];for(let c=0,h=a.length;c<h;c++)l[c]=a[c].clone();e[t][r]=l}else e[t][r]=a.slice();else e[t][r]=a}}return e}function Hn(s){const e={};for(let t=0;t<s.length;t++){const r=ra(s[t]);for(const a in r)e[a]=r[a]}return e}function xg(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Ky(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function W0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:It.workingColorSpace}const Zy={clone:ra,merge:Hn};var Jy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cs extends aa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jy,this.fragmentShader=Qy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ra(e.uniforms),this.uniformsGroups=Ky(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const a=e.uniforms[r];switch(this.uniforms[r]={},a.type){case"t":this.uniforms[r].value=t[a.value]||null;break;case"c":this.uniforms[r].value=new bt().setHex(a.value);break;case"v2":this.uniforms[r].value=new Fe().fromArray(a.value);break;case"v3":this.uniforms[r].value=new H().fromArray(a.value);break;case"v4":this.uniforms[r].value=new an().fromArray(a.value);break;case"m3":this.uniforms[r].value=new St().fromArray(a.value);break;case"m4":this.uniforms[r].value=new Yt().fromArray(a.value);break;default:this.uniforms[r].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class eS extends cs{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class On extends aa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bd,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tS extends aa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nS extends aa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class tf extends An{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class iS extends tf{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.groundColor=new bt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Oh=new Yt,yg=new H,Sg=new H;class rS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.mapType=si,this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uo,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;yg.setFromMatrixPosition(e.matrixWorld),t.position.copy(yg),Sg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sg),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,a){Oh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(Oh,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,c=a?a.z/l.x:1,h=a?a.w/l.y:1,f=a?a.x/l.x:0,p=a?a.y/l.y:0;e.coordinateSystem===co||e.reversedDepth?t.set(.5*c,0,0,.5*c+f,0,.5*h,0,.5*h+p,0,0,1,0,0,0,0,1):t.set(.5*c,0,0,.5*c+f,0,.5*h,0,.5*h+p,0,0,.5,.5,0,0,0,1),t.multiply(Oh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Kl=new H,Zl=new Or,Ui=new H;class j0 extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=Ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Kl,Zl,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kl,Zl,Ui.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(Kl,Zl,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kl,Zl,Ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Nr=new H,Mg=new Fe,Eg=new Fe;class wi extends j0{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Rd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(no*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rd*2*Math.atan(Math.tan(no*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z),Nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z)}getViewSize(e,t){return this.getViewBounds(e,Mg,Eg),t.subVectors(Eg,Mg)}setViewOffset(e,t,r,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(no*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,p=c.fullHeight;l+=c.offsetX*a/f,t-=c.offsetY*r/p,a*=c.width/f,r*=c.height/p}const h=this.filmOffset;h!==0&&(l+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class X0 extends j0{constructor(e=-1,t=1,r=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,c=r+e,h=a+t,f=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,h-=g*this.view.offsetY,f=h-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,h,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class sS extends rS{constructor(){super(new X0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tg extends tf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new sS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class aS extends tf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Xs=-90,qs=1;class Dd extends An{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new wi(Xs,qs,e,t);a.layers=this.layers,this.add(a);const l=new wi(Xs,qs,e,t);l.layers=this.layers,this.add(l);const c=new wi(Xs,qs,e,t);c.layers=this.layers,this.add(c);const h=new wi(Xs,qs,e,t);h.layers=this.layers,this.add(h);const f=new wi(Xs,qs,e,t);f.layers=this.layers,this.add(f);const p=new wi(Xs,qs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,c,h,f]=t;for(const p of t)this.remove(p);if(e===Ai)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===co)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,h,f,p,g]=this.children,S=e.getRenderTarget(),_=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.mipmapsAutoUpdate;r.texture.mipmapsAutoUpdate=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,3,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,4,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.mipmapsAutoUpdate=b,e.setRenderTarget(r,5,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(S,_,x),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class oS extends wi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const wg=new Yt;class lS{constructor(e,t,r=0,a=1/0){this.ray=new Mc(e,t),this.near=r,this.far=a,this.camera=null,this.layers=new Xd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ot("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return wg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wg),this}intersectObject(e,t=!0,r=[]){return Id(e,this,r,t),r.sort(Ag),r}intersectObjects(e,t=!0,r=[]){for(let a=0,l=e.length;a<l;a++)Id(e[a],this,r,t);return r.sort(Ag),r}}function Ag(s,e){return s.distance-e.distance}function Id(s,e,t,r){let a=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(a=!1),a===!0&&r===!0){const l=s.children;for(let c=0,h=l.length;c<h;c++)Id(l[c],e,t,!0)}}class bg{constructor(e=1,t=0,r=0){this.radius=e,this.phi=t,this.theta=r}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=At(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(At(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class cS extends Pd{constructor(e=10,t=10,r=4473924,a=8947848){r=new bt(r),a=new bt(a);const l=t/2,c=e/t,h=e/2,f=[],p=[];for(let _=0,x=0,T=-h;_<=t;_++,T+=c){f.push(-h,0,T,h,0,T),f.push(T,0,-h,T,0,h);const b=_===l?r:a;b.toArray(p,x),x+=3,b.toArray(p,x),x+=3,b.toArray(p,x),x+=3,b.toArray(p,x),x+=3}const g=new kn;g.setAttribute("position",new Gt(f,3)),g.setAttribute("color",new Gt(p,3));const S=new pc({vertexColors:!0,toneMapped:!1});super(g,S),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class uS extends Br{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Rg(s,e,t,r){const a=hS(r);switch(t){case x0:return s*e;case S0:return s*e/a.components*a.byteLength;case Hd:return s*e/a.components*a.byteLength;case as:return s*e*2/a.components*a.byteLength;case Gd:return s*e*2/a.components*a.byteLength;case y0:return s*e*3/a.components*a.byteLength;case Hi:return s*e*4/a.components*a.byteLength;case Vd:return s*e*4/a.components*a.byteLength;case nc:case ic:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case rc:case sc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Jh:case ed:return Math.max(s,16)*Math.max(e,8)/4;case Zh:case Qh:return Math.max(s,8)*Math.max(e,8)/2;case td:case nd:case rd:case sd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case id:case cc:case ad:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case od:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ld:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case cd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ud:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case hd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case dd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case fd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case pd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case md:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case gd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case vd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case _d:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case xd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case yd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Sd:case Md:case Ed:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Td:case wd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case uc:case Ad:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hS(s){switch(s){case si:case m0:return{byteLength:1,components:1};case lo:case g0:case Wi:return{byteLength:2,components:1};case Bd:case zd:return{byteLength:2,components:4};case Vi:case kd:case zi:return{byteLength:4,components:1};case v0:case _0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Od}}));typeof window<"u"&&(window.__THREE__?vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Od);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function q0(){let s=null,e=!1,t=null,r=null;function a(l,c){r=s.requestAnimationFrame(a),t(l,c)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function dS(s){const e=new WeakMap;function t(h,f){const p=h.array,g=h.usage,S=p.byteLength,_=s.createBuffer();s.bindBuffer(f,_),s.bufferData(f,p,g),h.onUploadCallback();let x;if(p instanceof Float32Array)x=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)x=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?x=s.HALF_FLOAT:x=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=s.SHORT;else if(p instanceof Uint32Array)x=s.UNSIGNED_INT;else if(p instanceof Int32Array)x=s.INT;else if(p instanceof Int8Array)x=s.BYTE;else if(p instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:S}}function r(h,f,p){const g=f.array,S=f.updateRanges;if(s.bindBuffer(p,h),S.length===0)s.bufferSubData(p,0,g);else{S.sort((x,T)=>x.start-T.start);let _=0;for(let x=1;x<S.length;x++){const T=S[_],b=S[x];b.start<=T.start+T.count+1?T.count=Math.max(T.count,b.start+b.count-T.start):(++_,S[_]=b)}S.length=_+1;for(let x=0,T=S.length;x<T;x++){const b=S[x];s.bufferSubData(p,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}f.clearUpdateRanges()}f.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function l(h){h.isInterleavedBufferAttribute&&(h=h.data);const f=e.get(h);f&&(s.deleteBuffer(f.buffer),e.delete(h))}function c(h,f){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,t(h,f));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,f),p.version=h.version}}return{get:a,remove:l,update:c}}var fS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pS=`#ifdef USE_ALPHAHASH
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
#endif`,mS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_S=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xS=`#ifdef USE_AOMAP
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
#endif`,yS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,SS=`#ifdef USE_BATCHING
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
#endif`,MS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ES=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,TS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,AS=`#ifdef USE_IRIDESCENCE
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
#endif`,bS=`#ifdef USE_BUMPMAP
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
#endif`,RS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,CS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,PS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,DS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,IS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,US=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,FS=`#define PI 3.141592653589793
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
} // validated`,OS=`vec3 transformedNormal = objectNormal;
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
#endif`,kS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,BS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,GS="gl_FragColor = linearToOutputTexel( gl_FragColor );",VS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,WS=`#ifdef USE_ENVMAP
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
#endif`,jS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,XS=`#ifdef USE_ENVMAP
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
#endif`,qS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,YS=`#ifdef USE_ENVMAP
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
#endif`,$S=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,KS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ZS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,JS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,QS=`#ifdef USE_GRADIENTMAP
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
}`,eM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,rM=`#ifdef USE_ENVMAP
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
#endif`,sM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cM=`PhysicalMaterial material;
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
#endif`,uM=`uniform sampler2D dfgLUT;
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
}`,hM=`
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
#endif`,dM=`#if defined( RE_IndirectDiffuse )
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
#endif`,fM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pM=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,mM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_M=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,SM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,MM=`#if defined( USE_POINTS_UV )
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
#endif`,EM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,TM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AM=`#if defined( USE_MORPHCOLORS )
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
#endif`,bM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RM=`#ifdef USE_MORPHTARGETS
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
#endif`,CM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,NM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,LM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,UM=`#ifdef USE_NORMALMAP
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
#endif`,FM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,BM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,HM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,GM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,VM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$M=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,KM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ZM=`float getShadowMask() {
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
}`,JM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QM=`#ifdef USE_SKINNING
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
#endif`,e1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,t1=`#ifdef USE_SKINNING
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
#endif`,n1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,r1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,s1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,a1=`#ifdef USE_TRANSMISSION
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
#endif`,o1=`#ifdef USE_TRANSMISSION
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
#endif`,l1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const d1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f1=`uniform sampler2D t2D;
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
}`,p1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m1=`uniform float backgroundBlurriness;
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
}`,g1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_1=`#include <common>
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
}`,x1=`#if DEPTH_PACKING == 3200
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
}`,y1=`#define DISTANCE
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
}`,S1=`#define DISTANCE
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
}`,M1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,E1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T1=`uniform float scale;
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
}`,w1=`uniform vec3 diffuse;
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
}`,A1=`#include <common>
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
}`,b1=`uniform vec3 diffuse;
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
}`,R1=`#define LAMBERT
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
}`,C1=`#define LAMBERT
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
}`,P1=`#define MATCAP
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
}`,N1=`#define MATCAP
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
}`,L1=`#define NORMAL
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
}`,D1=`#define NORMAL
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
}`,I1=`#define PHONG
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
}`,U1=`#define PHONG
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
}`,F1=`#define STANDARD
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
}`,O1=`#define STANDARD
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
}`,k1=`#define TOON
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
}`,B1=`#define TOON
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
}`,z1=`uniform float size;
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
}`,H1=`uniform vec3 diffuse;
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
}`,G1=`#include <common>
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
}`,V1=`uniform vec3 color;
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
}`,W1=`uniform float rotation;
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
}`,j1=`uniform vec3 diffuse;
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
}`,wt={alphahash_fragment:fS,alphahash_pars_fragment:pS,alphamap_fragment:mS,alphamap_pars_fragment:gS,alphatest_fragment:vS,alphatest_pars_fragment:_S,aomap_fragment:xS,aomap_pars_fragment:yS,batching_pars_vertex:SS,batching_vertex:MS,begin_vertex:ES,beginnormal_vertex:TS,bsdfs:wS,iridescence_fragment:AS,bumpmap_pars_fragment:bS,clipping_planes_fragment:RS,clipping_planes_pars_fragment:CS,clipping_planes_pars_vertex:PS,clipping_planes_vertex:NS,color_fragment:LS,color_pars_fragment:DS,color_pars_vertex:IS,color_vertex:US,common:FS,defaultnormal_vertex:OS,displacementmap_pars_vertex:kS,displacementmap_vertex:BS,emissivemap_fragment:zS,emissivemap_pars_fragment:HS,colorspace_fragment:GS,colorspace_pars_fragment:VS,envmap_fragment:WS,envmap_common_pars_fragment:jS,envmap_pars_fragment:XS,envmap_pars_vertex:qS,envmap_physical_pars_fragment:rM,envmap_vertex:YS,fog_vertex:$S,fog_pars_vertex:KS,fog_fragment:ZS,fog_pars_fragment:JS,gradientmap_pars_fragment:QS,lightmap_pars_fragment:eM,lights_lambert_fragment:tM,lights_lambert_pars_fragment:nM,lights_pars_begin:iM,lights_toon_fragment:sM,lights_toon_pars_fragment:aM,lights_phong_fragment:oM,lights_phong_pars_fragment:lM,lights_physical_fragment:cM,lights_physical_pars_fragment:uM,lights_fragment_begin:hM,lights_fragment_maps:dM,lights_fragment_end:fM,lightprobes_pars_fragment:pM,logdepthbuf_fragment:mM,logdepthbuf_pars_fragment:gM,logdepthbuf_pars_vertex:vM,logdepthbuf_vertex:_M,map_fragment:xM,map_pars_fragment:yM,map_particle_fragment:SM,map_particle_pars_fragment:MM,metalnessmap_fragment:EM,metalnessmap_pars_fragment:TM,morphinstance_vertex:wM,morphcolor_vertex:AM,morphnormal_vertex:bM,morphtarget_pars_vertex:RM,morphtarget_vertex:CM,normal_fragment_begin:PM,normal_fragment_maps:NM,normal_pars_fragment:LM,normal_pars_vertex:DM,normal_vertex:IM,normalmap_pars_fragment:UM,clearcoat_normal_fragment_begin:FM,clearcoat_normal_fragment_maps:OM,clearcoat_pars_fragment:kM,iridescence_pars_fragment:BM,opaque_fragment:zM,packing:HM,premultiplied_alpha_fragment:GM,project_vertex:VM,dithering_fragment:WM,dithering_pars_fragment:jM,roughnessmap_fragment:XM,roughnessmap_pars_fragment:qM,shadowmap_pars_fragment:YM,shadowmap_pars_vertex:$M,shadowmap_vertex:KM,shadowmask_pars_fragment:ZM,skinbase_vertex:JM,skinning_pars_vertex:QM,skinning_vertex:e1,skinnormal_vertex:t1,specularmap_fragment:n1,specularmap_pars_fragment:i1,tonemapping_fragment:r1,tonemapping_pars_fragment:s1,transmission_fragment:a1,transmission_pars_fragment:o1,uv_pars_fragment:l1,uv_pars_vertex:c1,uv_vertex:u1,worldpos_vertex:h1,background_vert:d1,background_frag:f1,backgroundCube_vert:p1,backgroundCube_frag:m1,cube_vert:g1,cube_frag:v1,depth_vert:_1,depth_frag:x1,distance_vert:y1,distance_frag:S1,equirect_vert:M1,equirect_frag:E1,linedashed_vert:T1,linedashed_frag:w1,meshbasic_vert:A1,meshbasic_frag:b1,meshlambert_vert:R1,meshlambert_frag:C1,meshmatcap_vert:P1,meshmatcap_frag:N1,meshnormal_vert:L1,meshnormal_frag:D1,meshphong_vert:I1,meshphong_frag:U1,meshphysical_vert:F1,meshphysical_frag:O1,meshtoon_vert:k1,meshtoon_frag:B1,points_vert:z1,points_frag:H1,shadow_vert:G1,shadow_frag:V1,sprite_vert:W1,sprite_frag:j1},$e={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new St}},envmap:{envMap:{value:null},envMapRotation:{value:new St},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new St}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new St}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new St},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new St},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new St},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new St}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new St}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new St}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0},uvTransform:{value:new St}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}}},ki={basic:{uniforms:Hn([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:Hn([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new bt(0)},envMapIntensity:{value:1}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:Hn([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:Hn([$e.common,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.roughnessmap,$e.metalnessmap,$e.fog,$e.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:Hn([$e.common,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.gradientmap,$e.fog,$e.lights,{emissive:{value:new bt(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:Hn([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:Hn([$e.points,$e.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:Hn([$e.common,$e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:Hn([$e.common,$e.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:Hn([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:Hn([$e.sprite,$e.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new St},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new St}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distance:{uniforms:Hn([$e.common,$e.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distance_vert,fragmentShader:wt.distance_frag},shadow:{uniforms:Hn([$e.lights,$e.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};ki.physical={uniforms:Hn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new St},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new St},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new St},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new St},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new St},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new St},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new St},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new St},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new St},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new St},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new St},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new St},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new St}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};const Jl={r:0,b:0,g:0},X1=new Yt,Y0=new St;Y0.set(-1,0,0,0,1,0,0,0,1);function q1(s,e,t,r,a,l){const c=new bt(0);let h=a===!0?0:1,f,p,g=null,S=0,_=null;function x(N){let L=N.isScene===!0?N.background:null;if(L&&L.isTexture){const C=N.backgroundBlurriness>0;L=e.get(L,C)}return L}function T(N){let L=!1;const C=x(N);C===null?y(c,h):C&&C.isColor&&(y(C,1),L=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?t.buffers.color.setClear(0,0,0,1,l):F==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||L)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function b(N,L){const C=x(L);C&&C.isCubeTexture?(p===void 0&&(p=new Zt(new os(1,1,1),new cs({name:"BackgroundCubeMaterial",uniforms:ra(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(F,D,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=C,p.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(X1.makeRotationFromEuler(L.backgroundRotation)).transpose(),C.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Y0),p.material.toneMapped=It.getTransfer(C.colorSpace)!==jt,(g!==C||S!==C.version||_!==s.toneMapping)&&(p.material.needsUpdate=!0,g=C,S=C.version,_=s.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null)):C&&C.isTexture&&(f===void 0&&(f=new Zt(new go(2,2),new cs({name:"BackgroundMaterial",uniforms:ra(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=C,f.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,f.material.toneMapped=It.getTransfer(C.colorSpace)!==jt,C.matrixAutoUpdate===!0&&C.updateMatrix(),f.material.uniforms.uvTransform.value.copy(C.matrix),(g!==C||S!==C.version||_!==s.toneMapping)&&(f.material.needsUpdate=!0,g=C,S=C.version,_=s.toneMapping),f.layers.enableAll(),N.unshift(f,f.geometry,f.material,0,0,null))}function y(N,L){N.getRGB(Jl,W0(s)),t.buffers.color.setClear(Jl.r,Jl.g,Jl.b,L,l)}function M(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return c},setClearColor:function(N,L=1){c.set(N),h=L,y(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(N){h=N,y(c,h)},render:T,addToRenderList:b,dispose:M}}function Y1(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=_(null);let l=a,c=!1;function h(G,Z,se,k,ne){let le=!1;const K=S(G,k,se,Z);l!==K&&(l=K,p(l.object)),le=x(G,k,se,ne),le&&T(G,k,se,ne),ne!==null&&e.update(ne,s.ELEMENT_ARRAY_BUFFER),(le||c)&&(c=!1,C(G,Z,se,k),ne!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function f(){return s.createVertexArray()}function p(G){return s.bindVertexArray(G)}function g(G){return s.deleteVertexArray(G)}function S(G,Z,se,k){const ne=k.wireframe===!0;let le=r[Z.id];le===void 0&&(le={},r[Z.id]=le);const K=G.isInstancedMesh===!0?G.id:0;let te=le[K];te===void 0&&(te={},le[K]=te);let q=te[se.id];q===void 0&&(q={},te[se.id]=q);let Y=q[ne];return Y===void 0&&(Y=_(f()),q[ne]=Y),Y}function _(G){const Z=[],se=[],k=[];for(let ne=0;ne<t;ne++)Z[ne]=0,se[ne]=0,k[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:se,attributeDivisors:k,object:G,attributes:{},index:null}}function x(G,Z,se,k){const ne=l.attributes,le=Z.attributes;let K=0;const te=se.getAttributes();for(const q in te)if(te[q].location>=0){const U=ne[q];let J=le[q];if(J===void 0&&(q==="instanceMatrix"&&G.instanceMatrix&&(J=G.instanceMatrix),q==="instanceColor"&&G.instanceColor&&(J=G.instanceColor)),U===void 0||U.attribute!==J||J&&U.data!==J.data)return!0;K++}return l.attributesNum!==K||l.index!==k}function T(G,Z,se,k){const ne={},le=Z.attributes;let K=0;const te=se.getAttributes();for(const q in te)if(te[q].location>=0){let U=le[q];U===void 0&&(q==="instanceMatrix"&&G.instanceMatrix&&(U=G.instanceMatrix),q==="instanceColor"&&G.instanceColor&&(U=G.instanceColor));const J={};J.attribute=U,U&&U.data&&(J.data=U.data),ne[q]=J,K++}l.attributes=ne,l.attributesNum=K,l.index=k}function b(){const G=l.newAttributes;for(let Z=0,se=G.length;Z<se;Z++)G[Z]=0}function y(G){M(G,0)}function M(G,Z){const se=l.newAttributes,k=l.enabledAttributes,ne=l.attributeDivisors;se[G]=1,k[G]===0&&(s.enableVertexAttribArray(G),k[G]=1),ne[G]!==Z&&(s.vertexAttribDivisor(G,Z),ne[G]=Z)}function N(){const G=l.newAttributes,Z=l.enabledAttributes;for(let se=0,k=Z.length;se<k;se++)Z[se]!==G[se]&&(s.disableVertexAttribArray(se),Z[se]=0)}function L(G,Z,se,k,ne,le,K){K===!0?s.vertexAttribIPointer(G,Z,se,ne,le):s.vertexAttribPointer(G,Z,se,k,ne,le)}function C(G,Z,se,k){b();const ne=k.attributes,le=se.getAttributes(),K=Z.defaultAttributeValues;for(const te in le){const q=le[te];if(q.location>=0){let Y=ne[te];if(Y===void 0&&(te==="instanceMatrix"&&G.instanceMatrix&&(Y=G.instanceMatrix),te==="instanceColor"&&G.instanceColor&&(Y=G.instanceColor)),Y!==void 0){const U=Y.normalized,J=Y.itemSize,Ce=e.get(Y);if(Ce===void 0)continue;const Q=Ce.buffer,_e=Ce.type,Me=Ce.bytesPerElement,He=_e===s.INT||_e===s.UNSIGNED_INT||Y.gpuType===kd;if(Y.isInterleavedBufferAttribute){const Se=Y.data,Ge=Se.isInterleavedBuffer===!0?Se.stride:Se.itemSize,yt=Y.offset;if(Se.isInstancedInterleavedBuffer||Se.isInstancedBufferAttribute){for(let ee=0;ee<q.locationSize;ee++)M(q.location+ee,Se.meshPerAttribute);G.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let ee=0;ee<q.locationSize;ee++)y(q.location+ee);s.bindBuffer(s.ARRAY_BUFFER,Q);for(let ee=0;ee<q.locationSize;ee++)L(q.location+ee,J/q.locationSize,_e,U,Ge*Me,(yt+J/q.locationSize*ee)*Me,He)}else{if(Y.isInstancedBufferAttribute){for(let Se=0;Se<q.locationSize;Se++)M(q.location+Se,Y.meshPerAttribute);G.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Se=0;Se<q.locationSize;Se++)y(q.location+Se);s.bindBuffer(s.ARRAY_BUFFER,Q);for(let Se=0;Se<q.locationSize;Se++)L(q.location+Se,J/q.locationSize,_e,U,J*Me,J/q.locationSize*Se*Me,He)}}else if(K!==void 0){const U=K[te];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(q.location,U);break;case 3:s.vertexAttrib3fv(q.location,U);break;case 4:s.vertexAttrib4fv(q.location,U);break;default:s.vertexAttrib1fv(q.location,U)}}}}N()}function F(){X();for(const G in r){const Z=r[G];for(const se in Z){const k=Z[se];for(const ne in k){const le=k[ne];for(const K in le)g(le[K].object),delete le[K];delete k[ne]}}delete r[G]}}function D(G){if(r[G.id]===void 0)return;const Z=r[G.id];for(const se in Z){const k=Z[se];for(const ne in k){const le=k[ne];for(const K in le)g(le[K].object),delete le[K];delete k[ne]}}delete r[G.id]}function E(G){for(const Z in r){const se=r[Z];for(const k in se){const ne=se[k];if(ne[G.id]===void 0)continue;const le=ne[G.id];for(const K in le)g(le[K].object),delete le[K];delete ne[G.id]}}}function R(G){for(const Z in r){const se=r[Z],k=G.isInstancedMesh===!0?G.id:0,ne=se[k];if(ne!==void 0){for(const le in ne){const K=ne[le];for(const te in K)g(K[te].object),delete K[te];delete ne[le]}delete se[k],Object.keys(se).length===0&&delete r[Z]}}}function X(){O(),c=!0,l!==a&&(l=a,p(l.object))}function O(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:h,reset:X,resetDefaultState:O,dispose:F,releaseStatesOfGeometry:D,releaseStatesOfObject:R,releaseStatesOfProgram:E,initAttributes:b,enableAttribute:y,disableUnusedAttributes:N}}function $1(s,e,t){let r;function a(f){r=f}function l(f,p){s.drawArrays(r,f,p),t.update(p,r,1)}function c(f,p,g){g!==0&&(s.drawArraysInstanced(r,f,p,g),t.update(p,r,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,f,0,p,0,g);let _=0;for(let x=0;x<g;x++)_+=p[x];t.update(_,r,1)}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function K1(s,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(E){return!(E!==Hi&&r.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(E){const R=E===Wi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==si&&E!==zi&&!R&&r.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function f(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const g=f(p);g!==p&&(vt("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const S=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),_=t.logarithmicDepthBuffer===!0&&S===!1;t.reversedDepthBuffer===!0&&S===!1&&vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&S===!0&&vt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const x=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),M=s.getParameter(s.MAX_VERTEX_ATTRIBS),N=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),F=s.getParameter(s.MAX_SAMPLES),D=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:S,maxTextures:x,maxVertexTextures:T,maxTextureSize:b,maxCubemapSize:y,maxAttributes:M,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:C,maxSamples:F,samples:D}}function Z1(s){const e=this;let t=null,r=0,a=!1,l=!1;const c=new sr,h=new St,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(S,_){const x=S.length!==0||_||r!==0||a;return a=_,r=S.length,x},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(S,_){t=g(S,_,0)},this.setState=function(S,_,x){const T=S.clippingPlanes,b=S.clipIntersection,y=S.clipShadows,M=s.get(S);if(!a||T===null||T.length===0||l&&!y)l?g(null):p();else{const N=l?0:r,L=N*4;let C=M.clippingState||null;f.value=C,C=g(T,_,L,x);for(let F=0;F!==L;++F)C[F]=t[F];M.clippingState=C,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=N}};function p(){f.value!==t&&(f.value=t,f.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(S,_,x,T){const b=S!==null?S.length:0;let y=null;if(b!==0){if(y=f.value,T!==!0||y===null){const M=x+b*4,N=_.matrixWorldInverse;h.getNormalMatrix(N),(y===null||y.length<M)&&(y=new Float32Array(M));for(let L=0,C=x;L!==b;++L,C+=4)c.copy(S[L]).applyMatrix4(N,h),c.normal.toArray(y,C),y[C+3]=c.constant}f.value=y,f.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,y}}class nf extends Gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new P0(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new os(5,5,5),l=new cs({name:"CubemapFromEquirect",uniforms:ra(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Zn,blending:Js});l.uniforms.tEquirect.value=t;const c=new Zt(a,l),h=t.minFilter;return t.minFilter===Dr&&(t.minFilter=Kn),new Dd(1,10,this).update(e,c),t.minFilter=h,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,a=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,a);e.setRenderTarget(l)}}const Cg=256,J1=3,Q1=20,$0=256,K0=16,eE=3,tE=new H,nE=new bt;class xc{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Dd(1,10,null),this._boxMesh=new Zt(new os(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,r=.1,a=100,l={}){const{size:c=256,position:h=tE}=l,f=this._renderer;this._setSize(c);const p=this._allocateTarget(),g=this._getSourceTarget(!0);t>0&&(g.texture.mipmapsAutoUpdate=!1);const S=f.autoClear,_=f.autoClearColor,x=f.autoClearDepth,T=f.autoClearStencil,b=e.background;f.autoClear=!0,f.autoClearColor=!0,f.autoClearDepth=!0,f.autoClearStencil=!0,b===null&&(e.background=f.getClearColor(nE));const y=new Dd(r,a,g);return y.position.copy(h),y.update(f,e),f.autoClear=S,f.autoClearColor=_,f.autoClearDepth=x,f.autoClearStencil=T,e.background=b,t>0&&(g.texture.mipmapsAutoUpdate=!0,this._blur(p,t)),this._applyPMREM(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ng(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Cg,jx(e))}_fromTexture(e,t){e.mapping===ea||e.mapping===oo?this._setSize(e.image.length===0?Cg:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const r=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(r),r}_allocateTarget(){const e=this._cubeSize,t=Pg(e,!1,!1),r=Math.log2(e)-J1;for(let a=0;a<=r;a++)t.texture.mipmaps.push({width:e>>a,height:e>>a});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==t||e&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=Pg(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,r){const a=this._boxMesh,l=this._cubeCamera;a.material=r,l.renderTarget=e,l.activeMipmapLevel=t;const c=e.width>>t;e.viewport.set(0,0,c,c),l.update(this._renderer,a),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ea||e.mapping===oo?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lg()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ng()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=iE(),this._integrationMaterial=rE());const t=this._cubeSize,r=e.texture.mipmaps.length-1,a=this._ggxMaterial.uniforms;a.envMap.value=this._sourceTarget.texture;const l=this._integrationMaterial.uniforms;l.envMap.value=this._sourceTarget.texture,l.sourceLod.value=Math.log2(t/K0);for(let c=0;c<=r;c++){const h=xc.lodToRoughness(c,r);if(c>r-eE)l.roughness.value=h,this._renderCube(e,c,this._integrationMaterial);else{const f=h>0?Math.log2(t)+.5*Math.log2(6/($0*Math.pow(h,4)))+.5:0;a.roughness.value=h,a.lodBias.value=f,this._renderCube(e,c,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=sE());const r=this._blurMaterial,a=r.uniforms,l=this._sourceTarget;a.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,a.envMap.value=l.texture,this._renderCube(e,0,r),a.envMap.value=e.texture,this._renderCube(l,0,r)}}function Pg(s,e,t){return new nf(s,{minFilter:Dr,generateMipmaps:e,type:Wi,colorSpace:hc,depthBuffer:t})}function vo(s,e,t){return new cs({name:s,uniforms:e,vertexShader:wt.cube_vert,fragmentShader:t,side:Zn,blending:Js,depthTest:!1,depthWrite:!1})}function iE(){return vo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${$0}u

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
	`)}function rE(){return vo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:K0}},`

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
	`)}function sE(){return vo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Q1}
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
	`)}function Ng(){return vo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Lg(){return vo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function aE(s){let e=new WeakMap,t=new WeakMap,r=null;function a(_,x=!1){return _==null?null:x?c(_):l(_)}function l(_){if(_&&_.isTexture){const x=_.mapping;if(x===oh||x===lh)if(e.has(_)){const T=e.get(_).texture;return h(T,_.mapping)}else{const T=_.image;if(T&&T.height>0){const b=new nf(T.height);return b.fromEquirectangularTexture(s,_),e.set(_,b),_.addEventListener("dispose",p),h(b.texture,_.mapping)}else return null}}return _}function c(_){if(_&&_.isTexture&&_.isPMREMTexture!==!0){const x=_.mapping,T=x===oh||x===lh,b=x===ea||x===oo;if(T||b){let y=t.get(_);const M=y!==void 0?y.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==M)return r===null&&(r=new xc(s)),y=T?r.fromEquirectangular(_,y):r.fromCubemap(_,y),y.texture.pmremVersion=_.pmremVersion,t.set(_,y),y.texture;if(y!==void 0)return y.texture;{const N=_.image;return T&&N&&N.height>0||b&&N&&f(N)?(r===null&&(r=new xc(s)),y=T?r.fromEquirectangular(_):r.fromCubemap(_),y.texture.pmremVersion=_.pmremVersion,t.set(_,y),_.addEventListener("dispose",g),y.texture):null}}}return _}function h(_,x){return x===oh?_.mapping=ea:x===lh&&(_.mapping=oo),_}function f(_){let x=0;const T=6;for(let b=0;b<T;b++)_[b]!==void 0&&x++;return x===T}function p(_){const x=_.target;x.removeEventListener("dispose",p);const T=e.get(x);T!==void 0&&(e.delete(x),T.dispose())}function g(_){const x=_.target;x.removeEventListener("dispose",g);const T=t.get(x);T!==void 0&&(t.delete(x),T.dispose())}function S(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:S}}function oE(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const a=s.getExtension(r);return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&ac("WebGLRenderer: "+r+" extension not supported."),a}}}function lE(s,e,t,r){const a={},l=new WeakMap,c=new FinalizationRegistry(T=>delete a[T]);function h(T){f(T.target)}function f(T){T.index!==null&&e.remove(T.index);for(const y in T.attributes)e.remove(T.attributes[y]);T.removeEventListener("dispose",h),delete a[T.id],c.unregister(T);const b=l.get(T);b&&(e.remove(b),l.delete(T)),r.releaseStatesOfGeometry(T),T.isInstancedBufferGeometry===!0&&delete T._maxInstanceCount,t.memory.geometries--}function p(T,b){return a[b.id]!==void 0||(b.addEventListener("dispose",h),a[b.id]=new WeakRef(b),c.register(b,b.id,b),t.memory.geometries++),b}function g(T){const b=T.attributes;for(const y in b)e.update(b[y],s.ARRAY_BUFFER)}function S(T){const b=T.index,y=T.attributes.position;let M=0;if(y===void 0)return;const N=b!==null?b.array.length:y.array.length/3-1,L=y.count>=65535?C0:R0,C=new L(Math.ceil(N/3)*6,1),F=C.array;if(b!==null){const E=b.array;M=b.version;for(let R=0,X=0;R<N;R+=3){const O=E[R+0],G=E[R+1],Z=E[R+2];F[X++]=O,F[X++]=G,F[X++]=G,F[X++]=Z,F[X++]=Z,F[X++]=O}}else{M=y.version;for(let E=0,R=0;E<N;E+=3){const X=E+0,O=E+1,G=E+2;F[R++]=X,F[R++]=O,F[R++]=O,F[R++]=G,F[R++]=G,F[R++]=X}}C.version=M;const D=l.get(T);D&&e.remove(D),l.set(T,C)}function _(T){const b=l.get(T);if(b){const y=T.index;y!==null&&b.version<y.version&&S(T)}else S(T);return l.get(T)}function x(){for(const T in a){const b=a[T].deref();b!==void 0&&f(b)}}return{get:p,update:g,getWireframeAttribute:_,dispose:x}}function cE(s,e,t){let r;function a(S){r=S}let l,c;function h(S){l=S.type,c=S.bytesPerElement}function f(S,_){s.drawElements(r,_,l,S*c),t.update(_,r,1)}function p(S,_,x){x!==0&&(s.drawElementsInstanced(r,_,l,S*c,x),t.update(_,r,x))}function g(S,_,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,_,0,l,S,0,x);let b=0;for(let y=0;y<x;y++)b+=_[y];t.update(b,r,1)}this.setMode=a,this.setIndex=h,this.render=f,this.renderInstances=p,this.renderMultiDraw=g}function uE(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,h){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=h*(l/3);break;case s.LINES:t.lines+=h*(l/2);break;case s.LINE_STRIP:t.lines+=h*(l-1);break;case s.LINE_LOOP:t.lines+=h*l;break;case s.POINTS:t.points+=h*l;break;default:Ot("WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function hE(s,e,t){const r=new WeakMap,a=new an;function l(c,h,f){const p=c.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,S=g!==void 0?g.length:0;let _=r.get(h);if(_===void 0||_.count!==S){let O=function(){R.dispose(),r.delete(h),h.removeEventListener("dispose",O)};var x=O;_!==void 0&&_.texture.dispose();const T=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],N=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let C=0;T===!0&&(C=1),b===!0&&(C=2),y===!0&&(C=3);let F=h.attributes.position.count*C,D=1;F>e.maxTextureSize&&(D=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const E=new Float32Array(F*D*4*S),R=new A0(E,F,D,S);R.type=zi,R.needsUpdate=!0;const X=C*4;for(let G=0;G<S;G++){const Z=M[G],se=N[G],k=L[G],ne=F*D*4*G;for(let le=0;le<Z.count;le++){const K=le*X;T===!0&&(a.fromBufferAttribute(Z,le),E[ne+K+0]=a.x,E[ne+K+1]=a.y,E[ne+K+2]=a.z,E[ne+K+3]=0),b===!0&&(a.fromBufferAttribute(se,le),E[ne+K+4]=a.x,E[ne+K+5]=a.y,E[ne+K+6]=a.z,E[ne+K+7]=0),y===!0&&(a.fromBufferAttribute(k,le),E[ne+K+8]=a.x,E[ne+K+9]=a.y,E[ne+K+10]=a.z,E[ne+K+11]=k.itemSize===4?a.w:1)}}_={count:S,texture:R,size:new Fe(F,D)},r.set(h,_),h.addEventListener("dispose",O)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let T=0;for(let y=0;y<p.length;y++)T+=p[y];const b=h.morphTargetsRelative?1:1-T;f.getUniforms().setValue(s,"morphTargetBaseInfluence",b),f.getUniforms().setValue(s,"morphTargetInfluences",p)}f.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:l}}function dE(s,e,t,r,a){let l=new WeakMap;function c(p){const g=a.render.frame,S=p.geometry,_=e.get(p,S);if(l.get(_)!==g&&(e.update(_),l.set(_,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),l.get(p)!==g&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,g))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==g&&(x.update(),l.set(x,g))}return _}function h(){l=new WeakMap}function f(p){const g=p.target;g.removeEventListener("dispose",f),r.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:c,dispose:h}}const fE={[o0]:"LINEAR_TONE_MAPPING",[l0]:"REINHARD_TONE_MAPPING",[c0]:"CINEON_TONE_MAPPING",[u0]:"ACES_FILMIC_TONE_MAPPING",[d0]:"AGX_TONE_MAPPING",[f0]:"NEUTRAL_TONE_MAPPING",[h0]:"CUSTOM_TONE_MAPPING"};function pE(s,e,t,r,a,l){const c=new Gi(e,t,{type:s,depthBuffer:a,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,f=null,p=null;const g=new kn;g.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),g.setAttribute("uv",new Gt([0,2,0,0,2,0],2));const S=new eS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new Zt(g,S),x=new X0(-1,1,1,-1,0,1);let T=null,b=null,y=!1,M,N=null,L=[],C=!1;this.setSize=function(F,D){c.setSize(F,D),h!==null&&h.setSize(F,D),f!==null&&f.setSize(F,D);for(let E=0;E<L.length;E++){const R=L[E];R.setSize&&R.setSize(F,D)}},this.setEffects=function(F){L=F,C=L.length>0&&L[0].isRenderPass===!0;const D=c.width,E=c.height;L.length>0&&h===null&&(h=new Gi(D,E,{type:Wi,depthBuffer:!1,stencilBuffer:!1}),f=new Gi(D,E,{type:Wi,depthBuffer:!1,stencilBuffer:!1}));const R=a===!0&&L.some(X=>X.needsDepthTexture===!0);R!==(c.depthTexture!==null)&&(R===!0&&p===null&&(p=new na(D,E),l===!0&&(p.format=Ir,p.type=ta)),c.dispose(),c.depthTexture=R?p:null,c.resolveDepthBuffer=R,c.storeMultisampledDepthBuffer=R);for(let X=0;X<L.length;X++){const O=L[X];O.setSize&&O.setSize(D,E),R&&O.needsDepthTexture===!0&&O.setDepthTexture&&O.setDepthTexture(p)}},this.begin=function(F,D){if(y||F.toneMapping===or&&L.length===0)return!1;if(N=D,D!==null){const E=D.width,R=D.height;(c.width!==E||c.height!==R)&&this.setSize(E,R)}return C===!1&&F.setRenderTarget(c),M=F.toneMapping,F.toneMapping=or,!0},this.hasRenderPass=function(){return C},this.end=function(F,D){F.toneMapping=M,y=!0;let E=c,R=h;for(let X=0;X<L.length;X++){const O=L[X];O.enabled!==!1&&(O.render(F,R,E,D),O.needsSwap!==!1&&(E=R,R=R===h?f:h))}if(T!==F.outputColorSpace||b!==F.toneMapping){T=F.outputColorSpace,b=F.toneMapping,S.defines={},It.getTransfer(T)===jt&&(S.defines.SRGB_TRANSFER="");const X=fE[b];X&&(S.defines[X]=""),S.needsUpdate=!0}S.uniforms.tDiffuse.value=E.texture,F.setRenderTarget(N),F.render(_,x),N=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),h!==null&&h.dispose(),f!==null&&f.dispose(),g.dispose(),S.dispose()}}const Z0=new Gn,J0=new na(1,1),Q0=new N0(1),ev=new A0,tv=new ey,nv=new P0,Dg=[],Ig=[],Ug=new Float32Array(16),Fg=new Float32Array(9),Og=new Float32Array(4);function oa(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=Dg[a];if(l===void 0&&(l=new Float32Array(a),Dg[a]=l),e!==0){r.toArray(l,0);for(let c=1,h=0;c!==e;++c)h+=t,s[c].toArray(l,h)}return l}function xn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function yn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Ec(s,e){let t=Ig[e];t===void 0&&(t=new Int32Array(e),Ig[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function mE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function gE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;s.uniform2fv(this.addr,e),yn(t,e)}}function vE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xn(t,e))return;s.uniform3fv(this.addr,e),yn(t,e)}}function _E(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;s.uniform4fv(this.addr,e),yn(t,e)}}function xE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(xn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),yn(t,e)}else{if(xn(t,r))return;Og.set(r),s.uniformMatrix2fv(this.addr,!1,Og),yn(t,r)}}function yE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(xn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),yn(t,e)}else{if(xn(t,r))return;Fg.set(r),s.uniformMatrix3fv(this.addr,!1,Fg),yn(t,r)}}function SE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(xn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),yn(t,e)}else{if(xn(t,r))return;Ug.set(r),s.uniformMatrix4fv(this.addr,!1,Ug),yn(t,r)}}function ME(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function EE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;s.uniform2iv(this.addr,e),yn(t,e)}}function TE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;s.uniform3iv(this.addr,e),yn(t,e)}}function wE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;s.uniform4iv(this.addr,e),yn(t,e)}}function AE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function bE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;s.uniform2uiv(this.addr,e),yn(t,e)}}function RE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;s.uniform3uiv(this.addr,e),yn(t,e)}}function CE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;s.uniform4uiv(this.addr,e),yn(t,e)}}function Tc(s){return s.version===0&&(s.compareFunction=T0,s.needsUpdate=!0),s}function PE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?l=Tc(J0):l=Z0,t.setTexture2D(e||l,a)}function NE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||tv,a)}function LE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_CUBE_SHADOW?l=Tc(Q0):l=nv,t.setTextureCube(e||l,a)}function DE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||ev,a)}function IE(s){switch(s){case 5126:return mE;case 35664:return gE;case 35665:return vE;case 35666:return _E;case 35674:return xE;case 35675:return yE;case 35676:return SE;case 5124:case 35670:return ME;case 35667:case 35671:return EE;case 35668:case 35672:return TE;case 35669:case 35673:return wE;case 5125:return AE;case 36294:return bE;case 36295:return RE;case 36296:return CE;case 35678:case 36198:case 36298:case 36306:case 35682:return PE;case 35679:case 36299:case 36307:return NE;case 35680:case 36300:case 36308:case 36293:return LE;case 36289:case 36303:case 36311:case 36292:return DE}}function UE(s,e){s.uniform1fv(this.addr,e)}function FE(s,e){const t=oa(e,this.size,2);s.uniform2fv(this.addr,t)}function OE(s,e){const t=oa(e,this.size,3);s.uniform3fv(this.addr,t)}function kE(s,e){const t=oa(e,this.size,4);s.uniform4fv(this.addr,t)}function BE(s,e){const t=oa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function zE(s,e){const t=oa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function HE(s,e){const t=oa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function GE(s,e){s.uniform1iv(this.addr,e)}function VE(s,e){s.uniform2iv(this.addr,e)}function WE(s,e){s.uniform3iv(this.addr,e)}function jE(s,e){s.uniform4iv(this.addr,e)}function XE(s,e){s.uniform1uiv(this.addr,e)}function qE(s,e){s.uniform2uiv(this.addr,e)}function YE(s,e){s.uniform3uiv(this.addr,e)}function $E(s,e){s.uniform4uiv(this.addr,e)}function KE(s,e,t){const r=this.cache,a=e.length,l=Ec(t,a);xn(r,l)||(s.uniform1iv(this.addr,l),yn(r,l));let c;this.type===s.SAMPLER_2D_SHADOW?c=Tc(J0):c=Z0;for(let h=0;h!==a;++h)t.setTexture2D(e[h]||c,l[h])}function ZE(s,e,t){const r=this.cache,a=e.length,l=Ec(t,a);xn(r,l)||(s.uniform1iv(this.addr,l),yn(r,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||tv,l[c])}function JE(s,e,t){const r=this.cache,a=e.length,l=Ec(t,a);xn(r,l)||(s.uniform1iv(this.addr,l),yn(r,l));let c;this.type===s.SAMPLER_CUBE_SHADOW?c=Tc(Q0):c=nv;for(let h=0;h!==a;++h)t.setTextureCube(e[h]||c,l[h])}function QE(s,e,t){const r=this.cache,a=e.length,l=Ec(t,a);xn(r,l)||(s.uniform1iv(this.addr,l),yn(r,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||ev,l[c])}function eT(s){switch(s){case 5126:return UE;case 35664:return FE;case 35665:return OE;case 35666:return kE;case 35674:return BE;case 35675:return zE;case 35676:return HE;case 5124:case 35670:return GE;case 35667:case 35671:return VE;case 35668:case 35672:return WE;case 35669:case 35673:return jE;case 5125:return XE;case 36294:return qE;case 36295:return YE;case 36296:return $E;case 35678:case 36198:case 36298:case 36306:case 35682:return KE;case 35679:case 36299:case 36307:return ZE;case 35680:case 36300:case 36308:case 36293:return JE;case 36289:case 36303:case 36311:case 36292:return QE}}class tT{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=IE(t.type)}}class nT{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eT(t.type)}}class iT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const h=a[l];h.setValue(e,t[h.id],r)}}}const kh=/(\w+)(\])?(\[|\.)?/g;function kg(s,e){s.seq.push(e),s.map[e.id]=e}function rT(s,e,t){const r=s.name,a=r.length;for(kh.lastIndex=0;;){const l=kh.exec(r),c=kh.lastIndex;let h=l[1];const f=l[2]==="]",p=l[3];if(f&&(h=h|0),p===void 0||p==="["&&c+2===a){kg(t,p===void 0?new tT(h,s,e):new nT(h,s,e));break}else{let S=t.map[h];S===void 0&&(S=new iT(h),kg(t,S)),t=S}}}class oc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const h=e.getActiveUniform(t,c),f=e.getUniformLocation(t,h.name);rT(h,f,this)}const a=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(c):l.push(c);a.length>0&&(this.seq=a.concat(l))}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,c=t.length;l!==c;++l){const h=t[l],f=r[h.id];f.needsUpdate!==!1&&h.setValue(e,f.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&r.push(c)}return r}}function Bg(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const sT=37297;let aT=0;function oT(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const h=c+1;r.push(`${h===e?">":" "} ${h}: ${t[c]}`)}return r.join(`
`)}const zg=new St;function lT(s){It._getMatrix(zg,It.workingColorSpace,s);const e=`mat3( ${zg.elements.map(t=>t.toFixed(4))} )`;switch(It.getTransfer(s)){case dc:return[e,"LinearTransferOETF"];case jt:return[e,"sRGBTransferOETF"];default:return vt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Hg(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+oT(s.getShaderSource(e),h)}else return l}function cT(s,e){const t=lT(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const uT={[o0]:"Linear",[l0]:"Reinhard",[c0]:"Cineon",[u0]:"ACESFilmic",[d0]:"AgX",[f0]:"Neutral",[h0]:"Custom"};function hT(s,e){const t=uT[e];return t===void 0?(vt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ql=new H;function dT(){It.getLuminanceCoefficients(Ql);const s=Ql.x.toFixed(4),e=Ql.y.toFixed(4),t=Ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(eo).join(`
`)}function pT(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function mT(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),c=l.name;let h=1;l.type===s.FLOAT_MAT2&&(h=2),l.type===s.FLOAT_MAT3&&(h=3),l.type===s.FLOAT_MAT4&&(h=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:h}}return t}function eo(s){return s!==""}function Gg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Vg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ud(s){return s.replace(gT,vT)}function vT(s,e){const t=wt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Ud(t)}const _T=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wg(s){return s.replace(_T,xT)}function xT(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function jg(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const yT={[tc]:"SHADOWMAP_TYPE_PCF",[Ja]:"SHADOWMAP_TYPE_VSM"};function ST(s){return yT[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const MT={[oo]:"ENVMAP_MODE_REFRACTION"};function ET(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":MT[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const TT={[a0]:"ENVMAP_BLENDING_MULTIPLY",[Rx]:"ENVMAP_BLENDING_MIX",[Cx]:"ENVMAP_BLENDING_ADD"};function wT(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":TT[s.combine]||"ENVMAP_BLENDING_NONE"}function AT(s,e,t,r){const a=s.getContext(),l=t.defines;let c=t.vertexShader,h=t.fragmentShader;const f=ST(t),p=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",g=ET(t),S=wT(t),_=fT(t),x=pT(l),T=a.createProgram();let b,y,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(eo).join(`
`),b.length>0&&(b+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(eo).join(`
`),y.length>0&&(y+=`
`)):(b=[jg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(eo).join(`
`),y=[jg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+S:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==or?"#define TONE_MAPPING":"",t.toneMapping!==or?wt.tonemapping_pars_fragment:"",t.toneMapping!==or?hT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,cT("linearToOutputTexel",t.outputColorSpace),dT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(eo).join(`
`)),c=Ud(c),c=Gg(c,t),c=Vg(c,t),h=Ud(h),h=Gg(h,t),h=Vg(h,t),c=Wg(c),h=Wg(h),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,b=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,y=["#define varying in",t.glslVersion===Vm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const N=M+b+c,L=M+y+h,C=Bg(a,a.VERTEX_SHADER,N),F=Bg(a,a.FRAGMENT_SHADER,L);a.attachShader(T,C),a.attachShader(T,F),t.index0AttributeName!==void 0?a.bindAttribLocation(T,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function D(O){if(s.debug.checkShaderErrors){const G=a.getProgramInfoLog(T)||"",Z=a.getShaderInfoLog(C)||"",se=a.getShaderInfoLog(F)||"",k=G.trim(),ne=Z.trim(),le=se.trim();let K=!0,te=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,T,C,F);else{const q=Hg(a,C,"vertex"),Y=Hg(a,F,"fragment");Ot("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+k+`
`+q+`
`+Y)}else k!==""?vt("WebGLProgram: Program Info Log:",k):(ne===""||le==="")&&(te=!1);te&&(O.diagnostics={runnable:K,programLog:k,vertexShader:{log:ne,prefix:b},fragmentShader:{log:le,prefix:y}})}a.deleteShader(C),a.deleteShader(F),E=new oc(a,T),R=mT(a,T)}let E;this.getUniforms=function(){return E===void 0&&D(this),E};let R;this.getAttributes=function(){return R===void 0&&D(this),R};let X=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=a.getProgramParameter(T,sT)),X},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=aT++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=C,this.fragmentShader=F,this}let bT=0;class RT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new CT(e),t.set(e,r)),r}}class CT{constructor(e){this.id=bT++,this.code=e,this.usedTimes=0}}function PT(s){return s===as||s===cc||s===uc}function NT(s,e,t,r,a,l){const c=new Xd,h=new RT,f=new Set,p=[],g=new Map,S=r.logarithmicDepthBuffer,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return f.add(E),E===0?"uv":`uv${E}`}function T(E,R,X,O,G,Z){const se=O.fog,k=G.geometry,ne=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?O.environment:null,le=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,K=e.get(E.envMap||ne,le),te=_[E.type];let q=r.precision;E.precision!==null&&(q=r.getMaxPrecision(E.precision),q!==E.precision&&vt("WebGLProgram.getParameters:",E.precision,"not supported, using",q,"instead."));const Y=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,U=Y!==void 0?Y.length:0;let J=0;k.morphAttributes.position!==void 0&&(J=1),k.morphAttributes.normal!==void 0&&(J=2),k.morphAttributes.color!==void 0&&(J=3);let Ce,Q,_e,Me;if(te){const qe=ki[te];Ce=qe.vertexShader,Q=qe.fragmentShader}else{Ce=E.vertexShader,Q=E.fragmentShader;const qe=h.getVertexShaderStage(E),Dt=h.getFragmentShaderStage(E);h.update(E,qe,Dt),_e=qe.id,Me=Dt.id}const He=s.getRenderTarget(),Se=s.state.buffers.depth.getReversed(),Ge=G.isInstancedMesh===!0,yt=G.isBatchedMesh===!0,ee=!!E.map,Ee=!!E.matcap,je=!!K,ce=je&&K.isPMREMTexture===!0,ye=!!E.aoMap,xe=!!E.lightMap,Ne=!!E.bumpMap&&E.wireframe===!1,we=!!E.normalMap,st=!!E.displacementMap,Ye=!!E.emissiveMap,Ze=!!E.metalnessMap,dt=!!E.roughnessMap,Mt=E.anisotropy>0,V=E.clearcoat>0,Lt=E.diffuseRoughness>0,ft=E.dispersion>0,Pt=E.retroreflectivity>0,Ie=E.iridescence>0,Vt=E.sheen>0,it=E.transmission>0,ot=Mt&&!!E.anisotropyMap,I=V&&!!E.clearcoatMap,w=V&&!!E.clearcoatNormalMap,re=V&&!!E.clearcoatRoughnessMap,be=Lt&&!!E.diffuseRoughnessMap,ve=Ie&&!!E.iridescenceMap,Le=Ie&&!!E.iridescenceThicknessMap,ke=Vt&&!!E.sheenColorMap,pe=Vt&&!!E.sheenRoughnessMap,me=!!E.specularMap,Ue=!!E.specularColorMap,z=!!E.specularIntensityMap,ge=it&&!!E.transmissionMap,fe=it&&!!E.thicknessMap,ze=!!E.gradientMap,De=!!E.alphaMap,Be=E.alphaTest>0,lt=!!E.alphaHash,Et=!!E.extensions;let Re=or;E.toneMapped&&(He===null||He.isXRRenderTarget===!0)&&(Re=s.toneMapping);const ht=ce?K.isCompressedCubeTexture?K.image[0].mipmaps:K.mipmaps:null,_t={shaderID:te,shaderType:E.type,shaderName:E.name,vertexShader:Ce,fragmentShader:Q,defines:E.defines,customVertexShaderID:_e,customFragmentShaderID:Me,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:q,batching:yt,batchingColor:yt&&G._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&G.instanceColor!==null,instancingMorph:Ge&&G.morphTexture!==null,outputColorSpace:He===null?s.outputColorSpace:He.isXRRenderTarget===!0?He.texture.colorSpace:It.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:ee,matcap:Ee,envMap:je,envMapMode:je&&K.mapping,envMapPMREM:ce,envMapMaxLod:ce?ht.length-1:null,envMapSize:ce?ht[0].width:null,aoMap:ye,lightMap:xe,bumpMap:Ne,normalMap:we,displacementMap:st,emissiveMap:Ye,normalMapObjectSpace:we&&E.normalMapType===Lx,normalMapTangentSpace:we&&E.normalMapType===bd,packedNormalMap:we&&E.normalMapType===bd&&PT(E.normalMap.format),metalnessMap:Ze,roughnessMap:dt,anisotropy:Mt,anisotropyMap:ot,clearcoat:V,clearcoatMap:I,clearcoatNormalMap:w,clearcoatRoughnessMap:re,diffuseRoughness:Lt,diffuseRoughnessMap:be,dispersion:ft,retroreflection:Pt,iridescence:Ie,iridescenceMap:ve,iridescenceThicknessMap:Le,sheen:Vt,sheenColorMap:ke,sheenRoughnessMap:pe,specularMap:me,specularColorMap:Ue,specularIntensityMap:z,transmission:it,transmissionMap:ge,thicknessMap:fe,gradientMap:ze,opaque:E.transparent===!1&&E.blending===to&&E.alphaToCoverage===!1,alphaMap:De,alphaTest:Be,alphaHash:lt,combine:E.combine,mapUv:ee&&x(E.map.channel),aoMapUv:ye&&x(E.aoMap.channel),lightMapUv:xe&&x(E.lightMap.channel),bumpMapUv:Ne&&x(E.bumpMap.channel),normalMapUv:we&&x(E.normalMap.channel),displacementMapUv:st&&x(E.displacementMap.channel),emissiveMapUv:Ye&&x(E.emissiveMap.channel),metalnessMapUv:Ze&&x(E.metalnessMap.channel),roughnessMapUv:dt&&x(E.roughnessMap.channel),anisotropyMapUv:ot&&x(E.anisotropyMap.channel),clearcoatMapUv:I&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:w&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&x(E.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:be&&x(E.diffuseRoughnessMap.channel),iridescenceMapUv:ve&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:pe&&x(E.sheenRoughnessMap.channel),specularMapUv:me&&x(E.specularMap.channel),specularColorMapUv:Ue&&x(E.specularColorMap.channel),specularIntensityMapUv:z&&x(E.specularIntensityMap.channel),transmissionMapUv:ge&&x(E.transmissionMap.channel),thicknessMapUv:fe&&x(E.thicknessMap.channel),alphaMapUv:De&&x(E.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(we||Mt),vertexNormals:!!k.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!k.attributes.uv&&(ee||De),fog:!!se,useFog:E.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||k.attributes.normal===void 0&&we===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Se,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:J,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:Z.filter(qe=>qe.texture!==null).length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&X.length>0,shadowMapType:s.shadowMap.type,toneMapping:Re,decodeVideoTexture:ee&&E.map.isVideoTexture===!0&&It.getTransfer(E.map.colorSpace)===jt,decodeVideoTextureEmissive:Ye&&E.emissiveMap.isVideoTexture===!0&&It.getTransfer(E.emissiveMap.colorSpace)===jt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Bi,flipSided:E.side===Zn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Et&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&E.extensions.multiDraw===!0||yt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return _t.vertexUv1s=f.has(1),_t.vertexUv2s=f.has(2),_t.vertexUv3s=f.has(3),f.clear(),_t}function b(E){const R=[];if(E.shaderID?R.push(E.shaderID):(R.push(E.customVertexShaderID),R.push(E.customFragmentShaderID)),E.defines!==void 0)for(const X in E.defines)R.push(X),R.push(E.defines[X]);return E.isRawShaderMaterial===!1&&(y(R,E),M(R,E),R.push(s.outputColorSpace)),R.push(E.customProgramCacheKey),R.join()}function y(E,R){E.push(R.precision),E.push(R.outputColorSpace),E.push(R.envMapMode),E.push(R.envMapPMREM),E.push(R.envMapMaxLod),E.push(R.envMapSize),E.push(R.mapUv),E.push(R.alphaMapUv),E.push(R.lightMapUv),E.push(R.aoMapUv),E.push(R.bumpMapUv),E.push(R.normalMapUv),E.push(R.displacementMapUv),E.push(R.emissiveMapUv),E.push(R.metalnessMapUv),E.push(R.roughnessMapUv),E.push(R.anisotropyMapUv),E.push(R.clearcoatMapUv),E.push(R.clearcoatNormalMapUv),E.push(R.clearcoatRoughnessMapUv),E.push(R.diffuseRoughnessMapUv),E.push(R.iridescenceMapUv),E.push(R.iridescenceThicknessMapUv),E.push(R.sheenColorMapUv),E.push(R.sheenRoughnessMapUv),E.push(R.specularMapUv),E.push(R.specularColorMapUv),E.push(R.specularIntensityMapUv),E.push(R.transmissionMapUv),E.push(R.thicknessMapUv),E.push(R.combine),E.push(R.fogExp2),E.push(R.sizeAttenuation),E.push(R.morphTargetsCount),E.push(R.numSunLights),E.push(R.numDirLights),E.push(R.numPointLights),E.push(R.numSpotLights),E.push(R.numSpotLightMaps),E.push(R.numHemiLights),E.push(R.numRectAreaLights),E.push(R.numSunLightShadows),E.push(R.numDirLightShadows),E.push(R.numPointLightShadows),E.push(R.numSpotLightShadows),E.push(R.numSpotLightShadowsWithMaps),E.push(R.numLightProbes),E.push(R.numLightProbeGrids),E.push(R.shadowMapType),E.push(R.toneMapping),E.push(R.numClippingPlanes),E.push(R.numClipIntersection),E.push(R.depthPacking)}function M(E,R){c.disableAll(),R.instancing&&c.enable(0),R.instancingColor&&c.enable(1),R.instancingMorph&&c.enable(2),R.matcap&&c.enable(3),R.envMap&&c.enable(4),R.normalMapObjectSpace&&c.enable(5),R.normalMapTangentSpace&&c.enable(6),R.clearcoat&&c.enable(7),R.iridescence&&c.enable(8),R.alphaTest&&c.enable(9),R.vertexColors&&c.enable(10),R.vertexAlphas&&c.enable(11),R.vertexUv1s&&c.enable(12),R.vertexUv2s&&c.enable(13),R.vertexUv3s&&c.enable(14),R.vertexTangents&&c.enable(15),R.anisotropy&&c.enable(16),R.alphaHash&&c.enable(17),R.batching&&c.enable(18),R.dispersion&&c.enable(19),R.retroreflection&&c.enable(24),R.diffuseRoughness&&c.enable(25),R.batchingColor&&c.enable(20),R.gradientMap&&c.enable(21),R.packedNormalMap&&c.enable(22),R.vertexNormals&&c.enable(23),E.push(c.mask),c.disableAll(),R.fog&&c.enable(0),R.useFog&&c.enable(1),R.flatShading&&c.enable(2),R.logarithmicDepthBuffer&&c.enable(3),R.reversedDepthBuffer&&c.enable(4),R.skinning&&c.enable(5),R.morphTargets&&c.enable(6),R.morphNormals&&c.enable(7),R.morphColors&&c.enable(8),R.premultipliedAlpha&&c.enable(9),R.shadowMapEnabled&&c.enable(10),R.doubleSided&&c.enable(11),R.flipSided&&c.enable(12),R.useDepthPacking&&c.enable(13),R.dithering&&c.enable(14),R.transmission&&c.enable(15),R.sheen&&c.enable(16),R.opaque&&c.enable(17),R.pointsUvs&&c.enable(18),R.decodeVideoTexture&&c.enable(19),R.decodeVideoTextureEmissive&&c.enable(20),R.alphaToCoverage&&c.enable(21),R.numLightProbeGrids>0&&c.enable(22),R.hasPositionAttribute&&c.enable(23),E.push(c.mask)}function N(E){const R=_[E.type];let X;if(R){const O=ki[R];X=Zy.clone(O.uniforms)}else X=E.uniforms;return X}function L(E,R){let X=g.get(R);return X!==void 0?++X.usedTimes:(X=new AT(s,R,E,a),p.push(X),g.set(R,X)),X}function C(E){if(--E.usedTimes===0){const R=p.indexOf(E);p[R]=p[p.length-1],p.pop(),g.delete(E.cacheKey),E.destroy()}}function F(E){h.remove(E)}function D(){h.dispose()}return{getParameters:T,getProgramCacheKey:b,getUniforms:N,acquireProgram:L,releaseProgram:C,releaseShaderCache:F,programs:p,dispose:D}}function LT(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let h=s.get(c);return h===void 0&&(h={},s.set(c,h)),h}function r(c){s.delete(c)}function a(c,h,f){s.get(c)[h]=f}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function DT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Xg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function qg(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function c(_){let x=0;return _.isInstancedMesh&&(x+=2),_.isSkinnedMesh&&(x+=1),x}function h(_,x,T,b,y,M){let N=s[e];return N===void 0?(N={id:_.id,object:_,geometry:x,material:T,materialVariant:c(_),groupOrder:b,renderOrder:_.renderOrder,z:y,group:M},s[e]=N):(N.id=_.id,N.object=_,N.geometry=x,N.material=T,N.materialVariant=c(_),N.groupOrder=b,N.renderOrder=_.renderOrder,N.z=y,N.group=M),e++,N}function f(_,x,T,b,y,M,N){N.reversedDepth===!0&&(y=-y);const L=h(_,x,T,b,y,M);T.transmission>0?r.push(L):T.transparent===!0?a.push(L):t.push(L)}function p(_,x,T,b,y,M){const N=h(_,x,T,b,y,M);T.transmission>0?r.unshift(N):T.transparent===!0?a.unshift(N):t.unshift(N)}function g(_,x){t.length>1&&t.sort(_||DT),r.length>1&&r.sort(x||Xg),a.length>1&&a.sort(x||Xg)}function S(){for(let _=e,x=s.length;_<x;_++){const T=s[_];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:f,unshift:p,finish:S,sort:g}}function IT(){let s=new WeakMap;function e(r,a){const l=s.get(r);let c;return l===void 0?(c=new qg,s.set(r,[c])):a>=l.length?(c=new qg,l.push(c)):c=l[a],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function UT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new H,color:new bt};break;case"SpotLight":t={position:new H,direction:new H,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":t={color:new bt,position:new H,halfWidth:new H,halfHeight:new H};break}return s[e.id]=t,t}}}function FT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let OT=0;function kT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function BT(s){const e=new UT,t=FT(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new H);const a=new H,l=new Yt,c=new Yt;function h(p){let g=0,S=0,_=0;for(let Z=0;Z<9;Z++)r.probe[Z].set(0,0,0);let x=0,T=0,b=0,y=0,M=0,N=0,L=0,C=0,F=0,D=0,E=0,R=0,X=0,O=0;p.sort(kT);for(let Z=0,se=p.length;Z<se;Z++){const k=p[Z],ne=k.color,le=k.intensity,K=k.distance;let te=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===as?te=k.shadow.map.texture:te=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)g+=ne.r*le,S+=ne.g*le,_+=ne.b*le;else if(k.isLightProbe){for(let q=0;q<9;q++)r.probe[q].addScaledVector(k.sh.coefficients[q],le);O++}else if(k.isSunLight){const q=e.get(k);if(q.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const Y=k.shadow,U=t.get(k);U.shadowIntensity=Y.intensity,U.shadowBias=Y.bias,U.shadowNormalBias=Y.normalBias,U.shadowRadius=Y.radius,U.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),r.sunShadow[T]=U,r.sunShadowMap[T]=te;const J=Y.getViewportCount();for(let Ce=0;Ce<J;Ce++)r.sunShadowMatrix[b+Ce]=Y.getMatrix(Ce),r.sunShadowCascade[b+Ce]=Y._cascadeData[Ce];b+=J,T++}r.sun[x]=q,x++}else if(k.isDirectionalLight){const q=e.get(k);if(q.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const Y=k.shadow,U=t.get(k);U.shadowIntensity=Y.intensity,U.shadowBias=Y.bias,U.shadowNormalBias=Y.normalBias,U.shadowRadius=Y.radius,U.shadowMapSize=Y.mapSize,r.directionalShadow[y]=U,r.directionalShadowMap[y]=te,r.directionalShadowMatrix[y]=k.shadow.matrix,F++}r.directional[y]=q,y++}else if(k.isSpotLight){const q=e.get(k);q.position.setFromMatrixPosition(k.matrixWorld),q.color.copy(ne).multiplyScalar(le),q.distance=K,q.coneCos=Math.cos(k.angle),q.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),q.decay=k.decay,r.spot[N]=q;const Y=k.shadow;if(k.map&&(r.spotLightMap[R]=k.map,R++,Y.updateMatrices(k),k.castShadow&&X++),r.spotLightMatrix[N]=Y.matrix,k.castShadow){const U=t.get(k);U.shadowIntensity=Y.intensity,U.shadowBias=Y.bias,U.shadowNormalBias=Y.normalBias,U.shadowRadius=Y.radius,U.shadowMapSize=Y.mapSize,r.spotShadow[N]=U,r.spotShadowMap[N]=te,E++}N++}else if(k.isRectAreaLight){const q=e.get(k);q.color.copy(ne).multiplyScalar(le),q.halfWidth.set(k.width*.5,0,0),q.halfHeight.set(0,k.height*.5,0),r.rectArea[L]=q,L++}else if(k.isPointLight){const q=e.get(k);if(q.color.copy(k.color).multiplyScalar(k.intensity),q.distance=k.distance,q.decay=k.decay,k.castShadow){const Y=k.shadow,U=t.get(k);U.shadowIntensity=Y.intensity,U.shadowBias=Y.bias,U.shadowNormalBias=Y.normalBias,U.shadowRadius=Y.radius,U.shadowMapSize=Y.mapSize,U.shadowCameraNear=Y.camera.near,U.shadowCameraFar=Y.camera.far,r.pointShadow[M]=U,r.pointShadowMap[M]=te,r.pointShadowMatrix[M]=k.shadow.matrix,D++}r.point[M]=q,M++}else if(k.isHemisphereLight){const q=e.get(k);q.skyColor.copy(k.color).multiplyScalar(le),q.groundColor.copy(k.groundColor).multiplyScalar(le),r.hemi[C]=q,C++}}L>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=$e.LTC_FLOAT_1,r.rectAreaLTC2=$e.LTC_FLOAT_2):(r.rectAreaLTC1=$e.LTC_HALF_1,r.rectAreaLTC2=$e.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=S,r.ambient[2]=_;const G=r.hash;(G.sunLength!==x||G.directionalLength!==y||G.pointLength!==M||G.spotLength!==N||G.rectAreaLength!==L||G.hemiLength!==C||G.numSunShadows!==T||G.numDirectionalShadows!==F||G.numPointShadows!==D||G.numSpotShadows!==E||G.numSpotMaps!==R||G.numLightProbes!==O)&&(r.sun.length=x,r.directional.length=y,r.spot.length=N,r.rectArea.length=L,r.point.length=M,r.hemi.length=C,r.sunShadow.length=T,r.sunShadowMap.length=T,r.sunShadowMatrix.length=b,r.sunShadowCascade.length=b,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.directionalShadowMatrix.length=F,r.pointShadow.length=D,r.pointShadowMap.length=D,r.pointShadowMatrix.length=D,r.spotShadow.length=E,r.spotShadowMap.length=E,r.spotLightMatrix.length=E+R-X,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=X,r.numLightProbes=O,G.sunLength=x,G.directionalLength=y,G.pointLength=M,G.spotLength=N,G.rectAreaLength=L,G.hemiLength=C,G.numSunShadows=T,G.numDirectionalShadows=F,G.numPointShadows=D,G.numSpotShadows=E,G.numSpotMaps=R,G.numLightProbes=O,r.version=OT++)}function f(p,g){let S=0,_=0,x=0,T=0,b=0,y=0;const M=g.matrixWorldInverse;for(let N=0,L=p.length;N<L;N++){const C=p[N];if(C.isSunLight){const F=r.sun[S];F.direction.setFromMatrixPosition(C.matrixWorld),F.direction.transformDirection(M),S++}else if(C.isDirectionalLight){const F=r.directional[_];F.direction.setFromMatrixPosition(C.matrixWorld),a.setFromMatrixPosition(C.target.matrixWorld),F.direction.sub(a),F.direction.transformDirection(M),_++}else if(C.isSpotLight){const F=r.spot[T];F.position.setFromMatrixPosition(C.matrixWorld),F.position.applyMatrix4(M),F.direction.setFromMatrixPosition(C.matrixWorld),a.setFromMatrixPosition(C.target.matrixWorld),F.direction.sub(a),F.direction.transformDirection(M),T++}else if(C.isRectAreaLight){const F=r.rectArea[b];F.position.setFromMatrixPosition(C.matrixWorld),F.position.applyMatrix4(M),c.identity(),l.copy(C.matrixWorld),l.premultiply(M),c.extractRotation(l),F.halfWidth.set(C.width*.5,0,0),F.halfHeight.set(0,C.height*.5,0),F.halfWidth.applyMatrix4(c),F.halfHeight.applyMatrix4(c),b++}else if(C.isPointLight){const F=r.point[x];F.position.setFromMatrixPosition(C.matrixWorld),F.position.applyMatrix4(M),x++}else if(C.isHemisphereLight){const F=r.hemi[y];F.direction.setFromMatrixPosition(C.matrixWorld),F.direction.transformDirection(M),y++}}}return{setup:h,setupView:f,state:r}}function Yg(s){const e=new BT(s),t=[],r=[],a=[];function l(S){g.camera=S,t.length=0,r.length=0,a.length=0}function c(S){S.isLightProbeGrid?a.push(S):t.push(S)}function h(S){r.push(S)}function f(){e.setup(t),a.sort((S,_)=>S.priority-_.priority||S.id-_.id)}function p(S){e.setupView(t,S)}const g={lightsArray:t,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:g,setupLights:f,setupLightsView:p,pushLight:c,pushShadow:h}}function zT(s){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let h;return c===void 0?(h=new Yg(s),e.set(a,[h])):l>=c.length?(h=new Yg(s),c.push(h)):h=c[l],h}function r(){e=new WeakMap}return{get:t,dispose:r}}const HT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GT=`uniform sampler2D shadow_pass;
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
}`,VT=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],WT=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],$g=new Yt,Za=new H,Bh=new H;function jT(s,e,t){let r=new uo;const a=new Fe,l=new Fe,c=new an,h=new tS,f=new nS,p={},g=t.maxTextureSize,S={[ss]:Zn,[Zn]:ss,[Bi]:Bi},_=new cs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:HT,fragmentShader:GT}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const T=new kn;T.setAttribute("position",new rs(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Zt(T,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tc;let M=this.type;this.render=function(D,E,R){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||D.length===0)return;this.type===i0&&(vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=tc);const X=s.getRenderTarget(),O=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),Z=s.state;Z.setBlending(Js),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const se=M!==this.type;se&&E.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(ne=>ne.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,ne=D.length;k<ne;k++){const le=D[k],K=le.shadow;if(K===void 0){vt("WebGLShadowMap:",le,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;a.copy(K.mapSize);const te=K.getFrameExtents();a.multiply(te),l.copy(K.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(l.x=Math.floor(g/te.x),a.x=l.x*te.x,K.mapSize.x=l.x),a.y>g&&(l.y=Math.floor(g/te.y),a.y=l.y*te.y,K.mapSize.y=l.y));const q=s.state.buffers.depth.getReversed();if(K.camera._reversedDepth=q,K.map===null||se===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===Ja){if(le.isPointLight){vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new Gi(a.x,a.y,{format:as,type:Wi,minFilter:Kn,magFilter:Kn,generateMipmaps:!1}),K.map.texture.name=le.name+".shadowMap",K.map.depthTexture=new na(a.x,a.y,zi),K.map.depthTexture.name=le.name+".shadowMapDepth",K.map.depthTexture.format=Fr,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Cn,K.map.depthTexture.magFilter=Cn}else le.isPointLight?(K.map=new nf(a.x),K.map.depthTexture=new N0(a.x,Vi)):(K.map=new Gi(a.x,a.y),K.map.depthTexture=new na(a.x,a.y,Vi)),K.map.depthTexture.name=le.name+".shadowMap",K.map.depthTexture.format=Fr,this.type===tc?(K.map.depthTexture.compareFunction=q?E0:M0,K.map.depthTexture.minFilter=Kn,K.map.depthTexture.magFilter=Kn):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Cn,K.map.depthTexture.magFilter=Cn);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==a.x||K.map.height!==a.y)&&K.map.setSize(a.x,a.y);const Y=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();le.isPointLight!==!0&&K.updateMatrices(le,R);const U=(K.camera.layers.mask&4294967294)!==0?K.camera.layers:R.layers;for(let J=0;J<Y;J++){const Ce=K.getCamera(J);if(le.isPointLight){const Q=K.camera,_e=K.matrix,Me=le.distance||Q.far;Me!==Q.far&&(Q.far=Me,Q.updateProjectionMatrix()),Za.setFromMatrixPosition(le.matrixWorld),Q.position.copy(Za),Bh.copy(Q.position),Bh.add(VT[J]),Q.up.copy(WT[J]),Q.lookAt(Bh),Q.updateMatrixWorld(),_e.makeTranslation(-Za.x,-Za.y,-Za.z),$g.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),K._frustum.setFromProjectionMatrix($g,Q.coordinateSystem,Q.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)s.setRenderTarget(K.map,J),s.clear();else{J===0&&(s.setRenderTarget(K.map),s.clear());const Q=K.getViewport(J);c.set(l.x*Q.x,l.y*Q.y,l.x*Q.z,l.y*Q.w),Z.viewport(c)}r=K.getFrustum(J),C(E,R,Ce,le,U,this.type)}K.isPointLightShadow!==!0&&this.type===Ja&&N(K,R),K.needsUpdate=!1}M=this.type,y.needsUpdate=!1,s.setRenderTarget(X,O,G)};function N(D,E){const R=e.update(b);_.defines.VSM_SAMPLES!==D.blurSamples&&(_.defines.VSM_SAMPLES=D.blurSamples,x.defines.VSM_SAMPLES=D.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),D.mapPass===null?D.mapPass=new Gi(a.x,a.y,{format:as,type:Wi}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),_.uniforms.shadow_pass.value=D.map.depthTexture,_.uniforms.resolution.value.set(D.map.width,D.map.height),_.uniforms.radius.value=D.radius,s.setRenderTarget(D.mapPass),s.clear(),s.renderBufferDirect(E,null,R,_,b,null),x.uniforms.shadow_pass.value=D.mapPass.texture,x.uniforms.resolution.value.set(D.map.width,D.map.height),x.uniforms.radius.value=D.radius,s.setRenderTarget(D.map),s.clear(),s.renderBufferDirect(E,null,R,x,b,null)}function L(D,E,R,X){let O=null;const G=R.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(G!==void 0)O=G;else if(O=R.isPointLight===!0?f:h,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const Z=O.uuid,se=E.uuid;let k=p[Z];k===void 0&&(k={},p[Z]=k);let ne=k[se];ne===void 0&&(ne=O.clone(),k[se]=ne,E.addEventListener("dispose",F)),O=ne}if(O.visible=E.visible,O.wireframe=E.wireframe,X===Ja?O.side=E.shadowSide!==null?E.shadowSide:E.side:O.side=E.shadowSide!==null?E.shadowSide:S[E.side],O.alphaMap=E.alphaMap,O.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,O.map=E.map,O.clipShadows=E.clipShadows,O.clippingPlanes=E.clippingPlanes,O.clipIntersection=E.clipIntersection,O.displacementMap=E.displacementMap,O.displacementScale=E.displacementScale,O.displacementBias=E.displacementBias,O.wireframeLinewidth=E.wireframeLinewidth,O.linewidth=E.linewidth,R.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const Z=s.properties.get(O);Z.light=R}return O}function C(D,E,R,X,O,G){if(D.visible===!1)return;if(D.layers.test(O)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&G===Ja)&&(!D.frustumCulled||D.intersectsFrustum(r))){D.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,D.matrixWorld);const k=e.update(D),ne=D.material;if(Array.isArray(ne)){const le=k.groups;for(let K=0,te=le.length;K<te;K++){const q=le[K],Y=ne[q.materialIndex];if(Y&&Y.visible){const U=L(D,Y,X,G);D.onBeforeShadow(s,D,E,R,k,U,q),s.renderBufferDirect(R,null,k,U,D,q),D.onAfterShadow(s,D,E,R,k,U,q)}}}else if(ne.visible){const le=L(D,ne,X,G);D.onBeforeShadow(s,D,E,R,k,le,null),s.renderBufferDirect(R,null,k,le,D,null),D.onAfterShadow(s,D,E,R,k,le,null)}}const se=D.children;for(let k=0,ne=se.length;k<ne;k++)C(se[k],E,R,X,O,G)}function F(D){D.target.removeEventListener("dispose",F);for(const R in p){const X=p[R],O=D.target.uuid;O in X&&(X[O].dispose(),delete X[O])}}}function XT(s,e){function t(){let z=!1;const ge=new an;let fe=null;const ze=new an(0,0,0,0);return{setMask:function(De){fe!==De&&!z&&(s.colorMask(De,De,De,De),fe=De)},setLocked:function(De){z=De},setClear:function(De,Be,lt,Et,Re){Re===!0&&(De*=Et,Be*=Et,lt*=Et),ge.set(De,Be,lt,Et),ze.equals(ge)===!1&&(s.clearColor(De,Be,lt,Et),ze.copy(ge))},reset:function(){z=!1,fe=null,ze.set(-1,0,0,0)}}}function r(){let z=!1,ge=!1,fe=null,ze=null,De=null;return{setReversed:function(Be){if(ge!==Be){const lt=e.get("EXT_clip_control");Be?lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.ZERO_TO_ONE_EXT):lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.NEGATIVE_ONE_TO_ONE_EXT),ge=Be;const Et=De;De=null,this.setClear(Et)}},getReversed:function(){return ge},setTest:function(Be){Be?Se(s.DEPTH_TEST):Ge(s.DEPTH_TEST)},setMask:function(Be){fe!==Be&&!z&&(s.depthMask(Be),fe=Be)},setFunc:function(Be){if(ge&&(Be=Vx[Be]),ze!==Be){switch(Be){case Gh:s.depthFunc(s.NEVER);break;case Vh:s.depthFunc(s.ALWAYS);break;case Wh:s.depthFunc(s.LESS);break;case ao:s.depthFunc(s.LEQUAL);break;case jh:s.depthFunc(s.EQUAL);break;case Xh:s.depthFunc(s.GEQUAL);break;case qh:s.depthFunc(s.GREATER);break;case Yh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ze=Be}},setLocked:function(Be){z=Be},setClear:function(Be){De!==Be&&(De=Be,ge&&(Be=1-Be),s.clearDepth(Be))},reset:function(){z=!1,fe=null,ze=null,De=null,ge=!1}}}function a(){let z=!1,ge=null,fe=null,ze=null,De=null,Be=null,lt=null,Et=null,Re=null;return{setTest:function(ht){z||(ht?Se(s.STENCIL_TEST):Ge(s.STENCIL_TEST))},setMask:function(ht){ge!==ht&&!z&&(s.stencilMask(ht),ge=ht)},setFunc:function(ht,_t,qe){(fe!==ht||ze!==_t||De!==qe)&&(s.stencilFunc(ht,_t,qe),fe=ht,ze=_t,De=qe)},setOp:function(ht,_t,qe){(Be!==ht||lt!==_t||Et!==qe)&&(s.stencilOp(ht,_t,qe),Be=ht,lt=_t,Et=qe)},setLocked:function(ht){z=ht},setClear:function(ht){Re!==ht&&(s.clearStencil(ht),Re=ht)},reset:function(){z=!1,ge=null,fe=null,ze=null,De=null,Be=null,lt=null,Et=null,Re=null}}}const l=new t,c=new r,h=new a;let f={};const p=new WeakMap;let g={},S={},_={},x=new WeakMap,T=[],b=null,y=!1,M=null,N=null,L=null,C=null,F=null,D=null,E=null,R=new bt(0,0,0),X=0,O=!1,G=null,Z=null,se=null,k=null,ne=null;const le=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,te=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(q)[1]),K=te>=1):q.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),K=te>=2);let Y=null,U={};const J=s.getParameter(s.SCISSOR_BOX),Ce=s.getParameter(s.VIEWPORT),Q=new an().fromArray(J),_e=new an().fromArray(Ce);function Me(z,ge,fe,ze){const De=new Uint8Array(4),Be=s.createTexture();s.bindTexture(z,Be),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let lt=0;lt<fe;lt++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(ge,0,s.RGBA,1,1,ze,0,s.RGBA,s.UNSIGNED_BYTE,De):s.texImage2D(ge+lt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,De);return Be}const He={};He[s.TEXTURE_2D]=Me(s.TEXTURE_2D,s.TEXTURE_2D,1),He[s.TEXTURE_CUBE_MAP]=Me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),He[s.TEXTURE_2D_ARRAY]=Me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),He[s.TEXTURE_3D]=Me(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),h.setClear(0),Se(s.DEPTH_TEST),c.setFunc(ao),Ne(!1),we(Bm),Se(s.CULL_FACE),ye(Js);function Se(z){g[z]!==!0&&(s.enable(z),g[z]=!0)}function Ge(z){g[z]!==!1&&(s.disable(z),g[z]=!1)}function yt(z,ge){return _[z]!==ge?(s.bindFramebuffer(z,ge),_[z]=ge,z===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=ge),z===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=ge),!0):!1}function ee(z,ge){let fe=T,ze=!1;if(z){fe=x.get(ge),fe===void 0&&(fe=[],x.set(ge,fe));const De=z.textures;if(fe.length!==De.length||fe[0]!==s.COLOR_ATTACHMENT0){for(let Be=0,lt=De.length;Be<lt;Be++)fe[Be]=s.COLOR_ATTACHMENT0+Be;fe.length=De.length,ze=!0}}else fe[0]!==s.BACK&&(fe[0]=s.BACK,ze=!0);ze&&s.drawBuffers(fe)}function Ee(z){return b!==z?(s.useProgram(z),b=z,!0):!1}const je={[Ys]:s.FUNC_ADD,[hx]:s.FUNC_SUBTRACT,[dx]:s.FUNC_REVERSE_SUBTRACT};je[fx]=s.MIN,je[px]=s.MAX;const ce={[mx]:s.ZERO,[gx]:s.ONE,[vx]:s.SRC_COLOR,[r0]:s.SRC_ALPHA,[Ex]:s.SRC_ALPHA_SATURATE,[Sx]:s.DST_COLOR,[xx]:s.DST_ALPHA,[_x]:s.ONE_MINUS_SRC_COLOR,[s0]:s.ONE_MINUS_SRC_ALPHA,[Mx]:s.ONE_MINUS_DST_COLOR,[yx]:s.ONE_MINUS_DST_ALPHA,[Tx]:s.CONSTANT_COLOR,[wx]:s.ONE_MINUS_CONSTANT_COLOR,[Ax]:s.CONSTANT_ALPHA,[bx]:s.ONE_MINUS_CONSTANT_ALPHA};function ye(z,ge,fe,ze,De,Be,lt,Et,Re,ht){if(z===Js){y===!0&&(Ge(s.BLEND),y=!1);return}if(y===!1&&(Se(s.BLEND),y=!0),z!==ux){if(z!==M||ht!==O){if((N!==Ys||F!==Ys)&&(s.blendEquation(s.FUNC_ADD),N=Ys,F=Ys),ht)switch(z){case to:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zm:s.blendFunc(s.ONE,s.ONE);break;case Hm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ot("WebGLState: Invalid blending: ",z);break}else switch(z){case to:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Hm:Ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gm:Ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ot("WebGLState: Invalid blending: ",z);break}L=null,C=null,D=null,E=null,R.set(0,0,0),X=0,M=z,O=ht}return}De=De||ge,Be=Be||fe,lt=lt||ze,(ge!==N||De!==F)&&(s.blendEquationSeparate(je[ge],je[De]),N=ge,F=De),(fe!==L||ze!==C||Be!==D||lt!==E)&&(s.blendFuncSeparate(ce[fe],ce[ze],ce[Be],ce[lt]),L=fe,C=ze,D=Be,E=lt),(Et.equals(R)===!1||Re!==X)&&(s.blendColor(Et.r,Et.g,Et.b,Re),R.copy(Et),X=Re),M=z,O=!1}function xe(z,ge){z.side===Bi?Ge(s.CULL_FACE):Se(s.CULL_FACE);let fe=z.side===Zn;ge&&(fe=!fe),Ne(fe),z.blending===to&&z.transparent===!1?ye(Js):ye(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),c.setFunc(z.depthFunc),c.setTest(z.depthTest),c.setMask(z.depthWrite),l.setMask(z.colorWrite);const ze=z.stencilWrite;h.setTest(ze),ze&&(h.setMask(z.stencilWriteMask),h.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),h.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ye(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Se(s.SAMPLE_ALPHA_TO_COVERAGE):Ge(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(z){G!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),G=z)}function we(z){z!==lx?(Se(s.CULL_FACE),z!==Z&&(z===Bm?s.cullFace(s.BACK):z===cx?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ge(s.CULL_FACE),Z=z}function st(z){z!==se&&(K&&s.lineWidth(z),se=z)}function Ye(z,ge,fe){z?(Se(s.POLYGON_OFFSET_FILL),(k!==ge||ne!==fe)&&(k=ge,ne=fe,c.getReversed()&&(ge=-ge,fe=-fe),s.polygonOffset(ge,fe))):Ge(s.POLYGON_OFFSET_FILL)}function Ze(z){z?Se(s.SCISSOR_TEST):Ge(s.SCISSOR_TEST)}function dt(z){z===void 0&&(z=s.TEXTURE0+le-1),Y!==z&&(s.activeTexture(z),Y=z)}function Mt(z,ge,fe){fe===void 0&&(Y===null?fe=s.TEXTURE0+le-1:fe=Y);let ze=U[fe];ze===void 0&&(ze={type:void 0,texture:void 0},U[fe]=ze),(ze.type!==z||ze.texture!==ge)&&(Y!==fe&&(s.activeTexture(fe),Y=fe),s.bindTexture(z,ge||He[z]),ze.type=z,ze.texture=ge)}function V(){const z=U[Y];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Lt(){try{s.compressedTexImage2D(...arguments)}catch(z){Ot("WebGLState:",z)}}function ft(){try{s.compressedTexImage3D(...arguments)}catch(z){Ot("WebGLState:",z)}}function Pt(){try{s.texSubImage2D(...arguments)}catch(z){Ot("WebGLState:",z)}}function Ie(){try{s.texSubImage3D(...arguments)}catch(z){Ot("WebGLState:",z)}}function Vt(){try{s.compressedTexSubImage2D(...arguments)}catch(z){Ot("WebGLState:",z)}}function it(){try{s.compressedTexSubImage3D(...arguments)}catch(z){Ot("WebGLState:",z)}}function ot(){try{s.texStorage2D(...arguments)}catch(z){Ot("WebGLState:",z)}}function I(){try{s.texStorage3D(...arguments)}catch(z){Ot("WebGLState:",z)}}function w(){try{s.texImage2D(...arguments)}catch(z){Ot("WebGLState:",z)}}function re(){try{s.texImage3D(...arguments)}catch(z){Ot("WebGLState:",z)}}function be(z){return S[z]!==void 0?S[z]:s.getParameter(z)}function ve(z,ge){S[z]!==ge&&(s.pixelStorei(z,ge),S[z]=ge)}function Le(z){Q.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),Q.copy(z))}function ke(z){_e.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),_e.copy(z))}function pe(z,ge){let fe=p.get(ge);fe===void 0&&(fe=new WeakMap,p.set(ge,fe));let ze=fe.get(z);ze===void 0&&(ze=s.getUniformBlockIndex(ge,z.name),s.uniformBlockBinding(ge,ze,ze),fe.set(z,ze))}function me(z,ge,fe){const De=p.get(ge).get(z);f[De]!==fe&&(s.bindBufferBase(s.UNIFORM_BUFFER,De,fe),f[De]=fe)}function Ue(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),g={},S={},Y=null,U={},_={},f={},x=new WeakMap,T=[],b=null,y=!1,M=null,N=null,L=null,C=null,F=null,D=null,E=null,R=new bt(0,0,0),X=0,O=!1,G=null,Z=null,se=null,k=null,ne=null,Q.set(0,0,s.canvas.width,s.canvas.height),_e.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),h.reset()}return{buffers:{color:l,depth:c,stencil:h},enable:Se,disable:Ge,bindFramebuffer:yt,drawBuffers:ee,useProgram:Ee,setBlending:ye,setMaterial:xe,setFlipSided:Ne,setCullFace:we,setLineWidth:st,setPolygonOffset:Ye,setScissorTest:Ze,activeTexture:dt,bindTexture:Mt,unbindTexture:V,compressedTexImage2D:Lt,compressedTexImage3D:ft,texImage2D:w,texImage3D:re,pixelStorei:ve,getParameter:be,updateUBOMapping:pe,uniformBlockBinding:me,texStorage2D:ot,texStorage3D:I,texSubImage2D:Pt,texSubImage3D:Ie,compressedTexSubImage2D:Vt,compressedTexSubImage3D:it,scissor:Le,viewport:ke,reset:Ue}}function qT(s,e,t,r,a,l,c){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Fe,g=new WeakMap,S=new Set;let _;const x=new WeakMap,T=new Set,b=new FinalizationRegistry(I=>T.delete(I));let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(I,w){return y?new OffscreenCanvas(I,w):fc("canvas")}function N(I,w,re){let be=1;const ve=ot(I);if((ve.width>re||ve.height>re)&&(be=re/Math.max(ve.width,ve.height)),be<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Le=Math.floor(be*ve.width),ke=Math.floor(be*ve.height);_===void 0&&(_=M(Le,ke));const pe=w?M(Le,ke):_;return pe.width=Le,pe.height=ke,pe.getContext("2d").drawImage(I,0,0,Le,ke),vt("WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+Le+"x"+ke+")."),pe}else return"data"in I&&vt("WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),I;return I}function L(I){return I.generateMipmaps}function C(I){s.generateMipmap(I)}function F(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(I,w,re,be,ve,Le=!1){if(I!==null){if(s[I]!==void 0)return s[I];vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ke;be&&(ke=e.get("EXT_texture_norm16"),ke||vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=w;if(w===s.RED&&(re===s.FLOAT&&(pe=s.R32F),re===s.HALF_FLOAT&&(pe=s.R16F),re===s.UNSIGNED_BYTE&&(pe=s.R8),re===s.UNSIGNED_SHORT&&ke&&(pe=ke.R16_EXT),re===s.SHORT&&ke&&(pe=ke.R16_SNORM_EXT)),w===s.RED_INTEGER&&(re===s.UNSIGNED_BYTE&&(pe=s.R8UI),re===s.UNSIGNED_SHORT&&(pe=s.R16UI),re===s.UNSIGNED_INT&&(pe=s.R32UI),re===s.BYTE&&(pe=s.R8I),re===s.SHORT&&(pe=s.R16I),re===s.INT&&(pe=s.R32I)),w===s.RG&&(re===s.FLOAT&&(pe=s.RG32F),re===s.HALF_FLOAT&&(pe=s.RG16F),re===s.UNSIGNED_BYTE&&(pe=s.RG8),re===s.UNSIGNED_SHORT&&ke&&(pe=ke.RG16_EXT),re===s.SHORT&&ke&&(pe=ke.RG16_SNORM_EXT)),w===s.RG_INTEGER&&(re===s.UNSIGNED_BYTE&&(pe=s.RG8UI),re===s.UNSIGNED_SHORT&&(pe=s.RG16UI),re===s.UNSIGNED_INT&&(pe=s.RG32UI),re===s.BYTE&&(pe=s.RG8I),re===s.SHORT&&(pe=s.RG16I),re===s.INT&&(pe=s.RG32I)),w===s.RGB_INTEGER&&(re===s.UNSIGNED_BYTE&&(pe=s.RGB8UI),re===s.UNSIGNED_SHORT&&(pe=s.RGB16UI),re===s.UNSIGNED_INT&&(pe=s.RGB32UI),re===s.BYTE&&(pe=s.RGB8I),re===s.SHORT&&(pe=s.RGB16I),re===s.INT&&(pe=s.RGB32I)),w===s.RGBA_INTEGER&&(re===s.UNSIGNED_BYTE&&(pe=s.RGBA8UI),re===s.UNSIGNED_SHORT&&(pe=s.RGBA16UI),re===s.UNSIGNED_INT&&(pe=s.RGBA32UI),re===s.BYTE&&(pe=s.RGBA8I),re===s.SHORT&&(pe=s.RGBA16I),re===s.INT&&(pe=s.RGBA32I)),w===s.RGB&&(re===s.UNSIGNED_SHORT&&ke&&(pe=ke.RGB16_EXT),re===s.SHORT&&ke&&(pe=ke.RGB16_SNORM_EXT),re===s.UNSIGNED_INT_5_9_9_9_REV&&(pe=s.RGB9_E5),re===s.UNSIGNED_INT_10F_11F_11F_REV&&(pe=s.R11F_G11F_B10F)),w===s.RGBA){const me=Le?dc:It.getTransfer(ve);re===s.FLOAT&&(pe=s.RGBA32F),re===s.HALF_FLOAT&&(pe=s.RGBA16F),re===s.UNSIGNED_BYTE&&(pe=me===jt?s.SRGB8_ALPHA8:s.RGBA8),re===s.UNSIGNED_SHORT&&ke&&(pe=ke.RGBA16_EXT),re===s.SHORT&&ke&&(pe=ke.RGBA16_SNORM_EXT),re===s.UNSIGNED_SHORT_4_4_4_4&&(pe=s.RGBA4),re===s.UNSIGNED_SHORT_5_5_5_1&&(pe=s.RGB5_A1)}return(pe===s.R16F||pe===s.R32F||pe===s.RG16F||pe===s.RG32F||pe===s.RGBA16F||pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function E(I,w){let re;return I?w===null||w===Vi||w===ta?re=s.DEPTH24_STENCIL8:w===zi?re=s.DEPTH32F_STENCIL8:w===lo&&(re=s.DEPTH24_STENCIL8,vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Vi||w===ta?re=s.DEPTH_COMPONENT24:w===zi?re=s.DEPTH_COMPONENT32F:w===lo&&(re=s.DEPTH_COMPONENT16),re}function R(I,w){return L(I)===!0||I.isFramebufferTexture&&I.minFilter!==Cn&&I.minFilter!==Kn?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function X(I){const w=new WeakRef(I);r.get(I).__ref=w,T.add(w),b.register(I,w,w)}function O(I){const w=r.get(I).__ref;w!==void 0&&(T.delete(w),b.unregister(w))}function G(I){se(I.target)}function Z(I){k(I.target)}function se(I){I.removeEventListener("dispose",G),O(I),le(I),I.isVideoTexture&&g.delete(I),I.isHTMLTexture&&S.delete(I)}function k(I){I.removeEventListener("dispose",Z),O(I),te(I)}function ne(){for(const I of T){const w=I.deref();w!==void 0&&(w.isRenderTarget===!0?k(w):se(w))}T.clear(),S.clear()}function le(I){const w=r.get(I);if(w.__webglInit===void 0)return;const re=I.source,be=x.get(re);if(be){const ve=be[w.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&K(I),Object.keys(be).length===0&&x.delete(re)}r.remove(I)}function K(I){const w=r.get(I);s.deleteTexture(w.__webglTexture);const re=I.source,be=x.get(re);delete be[w.__cacheKey],c.memory.textures--}function te(I){const w=r.get(I);w.__depthDisposeCallback&&w.__depthDisposeCallback();const re=I.depthTexture;if(re&&re.renderTarget===I&&se(re),I.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(w.__webglFramebuffer[ve]))for(let Le=0;Le<w.__webglFramebuffer[ve].length;Le++)s.deleteFramebuffer(w.__webglFramebuffer[ve][Le]);else s.deleteFramebuffer(w.__webglFramebuffer[ve]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[ve])}else{if(Array.isArray(w.__webglFramebuffer))for(let ve=0;ve<w.__webglFramebuffer.length;ve++)s.deleteFramebuffer(w.__webglFramebuffer[ve]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ve=0;ve<w.__webglColorRenderbuffer.length;ve++)w.__webglColorRenderbuffer[ve]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[ve]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const be=I.textures;for(let ve=0,Le=be.length;ve<Le;ve++){const ke=r.get(be[ve]);ke.__webglTexture&&(s.deleteTexture(ke.__webglTexture),c.memory.textures--),r.remove(be[ve])}r.remove(I)}let q=0;function Y(){q=0}function U(){return q}function J(I){q=I}function Ce(){const I=q;return I>=a.maxTextures&&vt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+a.maxTextures),q+=1,I}function Q(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.mipmapsAutoUpdate),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function _e(I,w){const re=r.get(I);if(I.isVideoTexture&&Vt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&re.__version!==I.version){const be=I.image;if(be===null)vt("WebGLRenderer: Texture marked for update but no image data found.");else if(be.complete===!1)vt("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(re,I,w);return}}else I.isExternalTexture&&(re.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,re.__webglTexture,s.TEXTURE0+w)}function Me(I,w){const re=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&re.__version!==I.version){xe(re,I,w);return}else I.isExternalTexture&&(re.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,re.__webglTexture,s.TEXTURE0+w)}function He(I,w){const re=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&re.__version!==I.version){xe(re,I,w);return}t.bindTexture(s.TEXTURE_3D,re.__webglTexture,s.TEXTURE0+w)}function Se(I,w){const re=r.get(I);if(I.version>0&&re.__version!==I.version){Ne(re,I,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture,s.TEXTURE0+w)}const Ge={[$h]:s.REPEAT,[ar]:s.CLAMP_TO_EDGE,[Kh]:s.MIRRORED_REPEAT},yt={[Cn]:s.NEAREST,[Px]:s.NEAREST_MIPMAP_NEAREST,[wl]:s.NEAREST_MIPMAP_LINEAR,[Kn]:s.LINEAR,[ch]:s.LINEAR_MIPMAP_NEAREST,[Dr]:s.LINEAR_MIPMAP_LINEAR},ee={[Ix]:s.NEVER,[T0]:s.ALWAYS,[Ux]:s.LESS,[M0]:s.LEQUAL,[Fx]:s.EQUAL,[E0]:s.GEQUAL,[Ox]:s.GREATER,[kx]:s.NOTEQUAL};function Ee(I,w){if(w.type===zi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Kn||w.magFilter===ch||w.magFilter===wl||w.magFilter===Dr||w.minFilter===Kn||w.minFilter===ch||w.minFilter===wl||w.minFilter===Dr)&&vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,Ge[w.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,Ge[w.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,Ge[w.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,yt[w.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,yt[w.minFilter]),w.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,ee[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Cn||w.minFilter!==wl&&w.minFilter!==Dr||w.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const re=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function je(I,w){let re=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",G),X(w));const be=w.source;let ve=x.get(be);ve===void 0&&(ve={},x.set(be,ve));const Le=Q(w);if(Le!==I.__cacheKey){ve[Le]===void 0&&(ve[Le]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,re=!0),ve[Le].usedTimes++;const ke=ve[I.__cacheKey];ke!==void 0&&(ve[I.__cacheKey].usedTimes--,ke.usedTimes===0&&K(w)),I.__cacheKey=Le,I.__webglTexture=ve[Le].texture}return re}function ce(I,w,re){return Math.floor(Math.floor(I/re)/w)}function ye(I,w,re,be){const Le=I.updateRanges;if(Le.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,re,be,w.data);else{Le.sort((z,ge)=>z.start-ge.start);let ke=0;for(let z=1;z<Le.length;z++){const ge=Le[ke],fe=Le[z],ze=ge.start+ge.count,De=ce(fe.start,w.width,4),Be=ce(ge.start,w.width,4);fe.start<=ze+1&&De===Be&&ce(fe.start+fe.count-1,w.width,4)===De?ge.count=Math.max(ge.count,fe.start+fe.count-ge.start):(++ke,Le[ke]=fe)}Le.length=ke+1;const pe=t.getParameter(s.UNPACK_ROW_LENGTH),me=t.getParameter(s.UNPACK_SKIP_PIXELS),Ue=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let z=0,ge=Le.length;z<ge;z++){const fe=Le[z],ze=Math.floor(fe.start/4),De=Math.ceil(fe.count/4),Be=ze%w.width,lt=Math.floor(ze/w.width),Et=De,Re=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Be),t.pixelStorei(s.UNPACK_SKIP_ROWS,lt),t.texSubImage2D(s.TEXTURE_2D,0,Be,lt,Et,Re,re,be,w.data)}I.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,pe),t.pixelStorei(s.UNPACK_SKIP_PIXELS,me),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ue)}}function xe(I,w,re){let be=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(be=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(be=s.TEXTURE_3D);const ve=je(I,w),Le=w.source;t.bindTexture(be,I.__webglTexture,s.TEXTURE0+re);const ke=r.get(Le);if(Le.version!==ke.__version||ve===!0){if(t.activeTexture(s.TEXTURE0+re),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const Re=It.getPrimaries(It.workingColorSpace),ht=w.colorSpace===Lr?null:It.getPrimaries(w.colorSpace),_t=w.colorSpace===Lr||Re===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t)}t.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment);let me=N(w.image,!1,a.maxTextureSize);me=it(w,me);const Ue=l.convert(w.format,w.colorSpace),z=l.convert(w.type);let ge=D(w.internalFormat,Ue,z,w.normalized,w.colorSpace,w.isVideoTexture);Ee(be,w);let fe;const ze=w.mipmaps,De=w.isVideoTexture!==!0,Be=ke.__version===void 0||ve===!0,lt=Le.dataReady,Et=R(w,me);if(w.isDepthTexture)ge=E(w.format===Ir,w.type),Be&&(De?t.texStorage2D(s.TEXTURE_2D,1,ge,me.width,me.height):t.texImage2D(s.TEXTURE_2D,0,ge,me.width,me.height,0,Ue,z,null));else if(w.isDataTexture)if(ze.length>0){De&&Be&&t.texStorage2D(s.TEXTURE_2D,Et,ge,ze[0].width,ze[0].height);for(let Re=0,ht=ze.length;Re<ht;Re++)fe=ze[Re],De?lt&&t.texSubImage2D(s.TEXTURE_2D,Re,0,0,fe.width,fe.height,Ue,z,fe.data):t.texImage2D(s.TEXTURE_2D,Re,ge,fe.width,fe.height,0,Ue,z,fe.data);w.generateMipmaps=!1}else De?(Be&&t.texStorage2D(s.TEXTURE_2D,Et,ge,me.width,me.height),lt&&ye(w,me,Ue,z)):t.texImage2D(s.TEXTURE_2D,0,ge,me.width,me.height,0,Ue,z,me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){De&&Be&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Et,ge,ze[0].width,ze[0].height,me.depth);for(let Re=0,ht=ze.length;Re<ht;Re++)if(fe=ze[Re],w.format!==Hi)if(Ue!==null)if(De){if(lt)if(w.layerUpdates.size>0){const _t=Rg(fe.width,fe.height,w.format,w.type);for(const qe of w.layerUpdates){const Dt=fe.data.subarray(qe*_t/fe.data.BYTES_PER_ELEMENT,(qe+1)*_t/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Re,0,0,qe,fe.width,fe.height,1,Ue,Dt)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Re,0,0,0,fe.width,fe.height,me.depth,Ue,fe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Re,ge,fe.width,fe.height,me.depth,0,fe.data,0,0);else vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?lt&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Re,0,0,0,fe.width,fe.height,me.depth,Ue,z,fe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Re,ge,fe.width,fe.height,me.depth,0,Ue,z,fe.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{De&&Be&&t.texStorage2D(s.TEXTURE_2D,Et,ge,ze[0].width,ze[0].height);for(let Re=0,ht=ze.length;Re<ht;Re++)fe=ze[Re],w.format!==Hi?Ue!==null?De?lt&&t.compressedTexSubImage2D(s.TEXTURE_2D,Re,0,0,fe.width,fe.height,Ue,fe.data):t.compressedTexImage2D(s.TEXTURE_2D,Re,ge,fe.width,fe.height,0,fe.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?lt&&t.texSubImage2D(s.TEXTURE_2D,Re,0,0,fe.width,fe.height,Ue,z,fe.data):t.texImage2D(s.TEXTURE_2D,Re,ge,fe.width,fe.height,0,Ue,z,fe.data)}else if(w.isDataArrayTexture)if(De){if(Be&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Et,ge,me.width,me.height,me.depth),lt)if(w.layerUpdates.size>0){const Re=Rg(me.width,me.height,w.format,w.type);for(const ht of w.layerUpdates){const _t=me.data.subarray(ht*Re/me.data.BYTES_PER_ELEMENT,(ht+1)*Re/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ht,me.width,me.height,1,Ue,z,_t)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ue,z,me.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ge,me.width,me.height,me.depth,0,Ue,z,me.data);else if(w.isData3DTexture)De?(Be&&t.texStorage3D(s.TEXTURE_3D,Et,ge,me.width,me.height,me.depth),lt&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ue,z,me.data)):t.texImage3D(s.TEXTURE_3D,0,ge,me.width,me.height,me.depth,0,Ue,z,me.data);else if(w.isFramebufferTexture){if(Be)if(De)t.texStorage2D(s.TEXTURE_2D,Et,ge,me.width,me.height);else{let Re=me.width,ht=me.height;for(let _t=0;_t<Et;_t++)t.texImage2D(s.TEXTURE_2D,_t,ge,Re,ht,0,Ue,z,null),Re>>=1,ht>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in s){const Re=s.canvas;if(Re.hasAttribute("layoutsubtree")||Re.setAttribute("layoutsubtree","true"),me.parentNode!==Re){Re.appendChild(me),S.add(w),Re.onpaint=ht=>{const _t=ht.changedElements;for(const qe of S)_t.includes(qe.image)&&(qe.needsUpdate=!0)},Re.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,me);else{const _t=s.RGBA,qe=s.RGBA,Dt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,_t,qe,Dt,me)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ze.length>0){if(De&&Be){const Re=ot(ze[0]);t.texStorage2D(s.TEXTURE_2D,Et,ge,Re.width,Re.height)}for(let Re=0,ht=ze.length;Re<ht;Re++)fe=ze[Re],De?lt&&t.texSubImage2D(s.TEXTURE_2D,Re,0,0,Ue,z,fe):t.texImage2D(s.TEXTURE_2D,Re,ge,Ue,z,fe);w.generateMipmaps=!1}else if(De){if(Be){const Re=ot(me);t.texStorage2D(s.TEXTURE_2D,Et,ge,Re.width,Re.height)}lt&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ue,z,me)}else t.texImage2D(s.TEXTURE_2D,0,ge,Ue,z,me);L(w)&&w.mipmapsAutoUpdate===!0&&C(be),ke.__version=Le.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function Ne(I,w,re){if(w.image.length!==6)return;const be=je(I,w),ve=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+re);const Le=r.get(ve);if(ve.version!==Le.__version||be===!0){t.activeTexture(s.TEXTURE0+re);const ke=It.getPrimaries(It.workingColorSpace),pe=w.colorSpace===Lr?null:It.getPrimaries(w.colorSpace),me=w.colorSpace===Lr||ke===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ue=w.isCompressedTexture||w.image[0].isCompressedTexture,z=w.image[0]&&w.image[0].isDataTexture,ge=[];for(let qe=0;qe<6;qe++)!Ue&&!z?ge[qe]=N(w.image[qe],!0,a.maxCubemapSize):ge[qe]=z?w.image[qe].image:w.image[qe],ge[qe]=it(w,ge[qe]);const fe=ge[0],ze=l.convert(w.format,w.colorSpace),De=l.convert(w.type);let Be=D(w.internalFormat,ze,De,w.normalized,w.colorSpace);const lt=w.isVideoTexture!==!0,Et=Le.__version===void 0||be===!0,Re=ve.dataReady;let ht=R(w,fe);Ee(s.TEXTURE_CUBE_MAP,w);let _t;if(w.isDepthTexture){if(Be=E(w.format===Ir,w.type),Et)if(lt)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,Be,fe.width,fe.height);else for(let qe=0;qe<6;qe++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+qe,0,Be,fe.width,fe.height,0,ze,De,null)}else if(Ue){lt&&Et&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ht,Be,fe.width,fe.height);for(let qe=0;qe<6;qe++){_t=ge[qe].mipmaps;for(let Dt=0;Dt<_t.length;Dt++){const nn=_t[Dt];w.format!==Hi?ze!==null?lt?Re&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+qe,Dt,0,0,nn.width,nn.height,ze,nn.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+qe,Dt,Be,nn.width,nn.height,0,nn.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):lt?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+qe,Dt,0,0,nn.width,nn.height,ze,De,nn.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+qe,Dt,Be,nn.width,nn.height,0,ze,De,nn.data)}}}else{if(_t=w.mipmaps,lt&&Et){_t.length>0&&ht++;const qe=ot(ge[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ht,Be,qe.width,qe.height)}for(let qe=0;qe<6;qe++)if(z){lt?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+qe,0,0,0,ge[qe].width,ge[qe].height,ze,De,ge[qe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+qe,0,Be,ge[qe].width,ge[qe].height,0,ze,De,ge[qe].data);for(let Dt=0;Dt<_t.length;Dt++){const Jn=_t[Dt].image[qe].image;lt?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+qe,Dt+1,0,0,Jn.width,Jn.height,ze,De,Jn.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+qe,Dt+1,Be,Jn.width,Jn.height,0,ze,De,Jn.data)}}else{lt?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+qe,0,0,0,ze,De,ge[qe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+qe,0,Be,ze,De,ge[qe]);for(let Dt=0;Dt<_t.length;Dt++){const nn=_t[Dt];lt?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+qe,Dt+1,0,0,ze,De,nn.image[qe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+qe,Dt+1,Be,ze,De,nn.image[qe])}}}L(w)&&w.mipmapsAutoUpdate===!0&&C(s.TEXTURE_CUBE_MAP),Le.__version=ve.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function we(I,w,re,be,ve,Le){const ke=l.convert(re.format,re.colorSpace),pe=l.convert(re.type),me=D(re.internalFormat,ke,pe,re.normalized,re.colorSpace),Ue=r.get(w),z=r.get(re);if(z.__renderTarget=w,!Ue.__hasExternalTextures){const ge=Math.max(1,w.width>>Le),fe=Math.max(1,w.height>>Le);ve===s.TEXTURE_3D||ve===s.TEXTURE_2D_ARRAY?t.texImage3D(ve,Le,me,ge,fe,w.depth,0,ke,pe,null):t.texImage2D(ve,Le,me,ge,fe,0,ke,pe,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),Ie(w)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,be,ve,z.__webglTexture,0,Pt(w)):(ve===s.TEXTURE_2D||ve>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,be,ve,z.__webglTexture,Le),t.bindFramebuffer(s.FRAMEBUFFER,null)}function st(I,w,re){if(s.bindRenderbuffer(s.RENDERBUFFER,I),w.depthBuffer){const be=w.depthTexture,ve=be&&be.isDepthTexture?be.type:null,Le=E(w.stencilBuffer,ve),ke=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ie(w)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pt(w),Le,w.width,w.height):re?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt(w),Le,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Le,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ke,s.RENDERBUFFER,I)}else{const be=w.textures;for(let ve=0;ve<be.length;ve++){const Le=be[ve],ke=l.convert(Le.format,Le.colorSpace),pe=l.convert(Le.type),me=D(Le.internalFormat,ke,pe,Le.normalized,Le.colorSpace);Ie(w)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pt(w),me,w.width,w.height):re?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt(w),me,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,me,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ye(I,w,re){const be=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ve=r.get(w.depthTexture);ve.__renderTarget=w;const Le=be?w.depthTexture.image[0]:w.depthTexture.image;(!ve.__webglTexture||Le.width!==w.width||Le.height!==w.height)&&(Le.width=w.width,Le.height=w.height,w.depthTexture.needsUpdate=!0),be?Se(w.depthTexture,0):_e(w.depthTexture,0);const ke=ve.__webglTexture,pe=Pt(w),me=be?s.TEXTURE_CUBE_MAP_POSITIVE_X+re:s.TEXTURE_2D,Ue=w.depthTexture.format===Ir?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(w.depthTexture.format===Fr)Ie(w)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ue,me,ke,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,Ue,me,ke,0);else if(w.depthTexture.format===Ir)Ie(w)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ue,me,ke,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,Ue,me,ke,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ze(I){const w=r.get(I),re=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){const be=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),be){const ve=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,be.removeEventListener("dispose",ve)};be.addEventListener("dispose",ve),w.__depthDisposeCallback=ve}w.__boundDepthTexture=be}if(I.depthTexture&&!w.__autoAllocateDepthBuffer)if(re)for(let be=0;be<6;be++)Ye(w.__webglFramebuffer[be],I,be);else I.texture.mipmaps.length>0?Ye(w.__webglFramebuffer[0],I,0):Ye(w.__webglFramebuffer,I,0);else if(re){w.__webglDepthbuffer=[];for(let be=0;be<6;be++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[be]),w.__webglDepthbuffer[be]===void 0)w.__webglDepthbuffer[be]=s.createRenderbuffer(),st(w.__webglDepthbuffer[be],I,!1);else{const ve=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=w.__webglDepthbuffer[be];s.bindRenderbuffer(s.RENDERBUFFER,Le),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,Le)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),st(w.__webglDepthbuffer,I,!1);else{const ve=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Le),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,Le)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function dt(I,w,re){const be=r.get(I);w!==void 0&&we(be.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),re!==void 0&&Ze(I)}function Mt(I){const w=I.texture,re=r.get(I),be=r.get(w);I.addEventListener("dispose",Z),X(I);const ve=I.textures,Le=I.isWebGLCubeRenderTarget===!0,ke=ve.length>1;if(ke||(be.__webglTexture===void 0&&(be.__webglTexture=s.createTexture()),be.__version=w.version,c.memory.textures++),Le){re.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(w.mipmaps.length>0){re.__webglFramebuffer[pe]=[];for(let me=0;me<w.mipmaps.length;me++)re.__webglFramebuffer[pe][me]=s.createFramebuffer()}else re.__webglFramebuffer[pe]=s.createFramebuffer()}else{if(w.mipmaps.length>0){re.__webglFramebuffer=[];for(let pe=0;pe<w.mipmaps.length;pe++)re.__webglFramebuffer[pe]=s.createFramebuffer()}else re.__webglFramebuffer=s.createFramebuffer();if(ke)for(let pe=0,me=ve.length;pe<me;pe++){const Ue=r.get(ve[pe]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=s.createTexture(),c.memory.textures++)}if(I.samples>0&&Ie(I)===!1){re.__webglMultisampledFramebuffer=s.createFramebuffer(),re.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let pe=0;pe<ve.length;pe++){const me=ve[pe];re.__webglColorRenderbuffer[pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,re.__webglColorRenderbuffer[pe]);const Ue=l.convert(me.format,me.colorSpace),z=l.convert(me.type),ge=D(me.internalFormat,Ue,z,me.normalized,me.colorSpace,I.isXRRenderTarget===!0),fe=Pt(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,ge,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,re.__webglColorRenderbuffer[pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(re.__webglDepthRenderbuffer=s.createRenderbuffer(),st(re.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Le){t.bindTexture(s.TEXTURE_CUBE_MAP,be.__webglTexture),Ee(s.TEXTURE_CUBE_MAP,w);for(let pe=0;pe<6;pe++)if(w.mipmaps.length>0)for(let me=0;me<w.mipmaps.length;me++)we(re.__webglFramebuffer[pe][me],I,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,me);else we(re.__webglFramebuffer[pe],I,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);L(w)?C(s.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}else if(ke){for(let pe=0,me=ve.length;pe<me;pe++){const Ue=ve[pe],z=r.get(Ue);let ge=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ge=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ge,z.__webglTexture),Ee(ge,Ue),we(re.__webglFramebuffer,I,Ue,s.COLOR_ATTACHMENT0+pe,ge,0),L(Ue)&&C(ge)}t.unbindTexture()}else{let pe=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(pe=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(pe,be.__webglTexture),Ee(pe,w),w.mipmaps.length>0)for(let me=0;me<w.mipmaps.length;me++)we(re.__webglFramebuffer[me],I,w,s.COLOR_ATTACHMENT0,pe,me);else we(re.__webglFramebuffer,I,w,s.COLOR_ATTACHMENT0,pe,0);L(w)?C(pe):w.mipmaps.length>0&&s.texParameteri(pe,s.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&Ze(I)}function V(I){const w=I.textures;for(let re=0,be=w.length;re<be;re++){const ve=w[re];if(L(ve)&&ve.mipmapsAutoUpdate===!0){const Le=F(I),ke=r.get(ve).__webglTexture;t.bindTexture(Le,ke),C(Le),t.unbindTexture()}}}const Lt=[];function ft(I){if(I.samples>0){if(Ie(I)===!1){const w=I.textures,re=I.width,be=I.height;let ve=s.COLOR_BUFFER_BIT;const Le=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ke=r.get(I),pe=w.length>1;if(pe)for(let Ue=0;Ue<w.length;Ue++)t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let Ue=0;Ue<w.length;Ue++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ve|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ve|=s.STENCIL_BUFFER_BIT)),pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ke.__webglColorRenderbuffer[Ue]);const z=r.get(w[Ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,z,0)}s.blitFramebuffer(0,0,re,be,0,0,re,be,ve,s.NEAREST),f===!0&&(Lt.length=0,Lt.push(s.COLOR_ATTACHMENT0+Ue),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&Lt.push(Le),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Lt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pe)for(let Ue=0;Ue<w.length;Ue++){t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,ke.__webglColorRenderbuffer[Ue]);const z=r.get(w[Ue]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,z,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&f){const w=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Pt(I){return Math.min(a.maxSamples,I.samples)}function Ie(I){const w=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Vt(I){const w=c.render.frame;g.get(I)!==w&&(g.set(I,w),I.update())}function it(I,w){const re=I.colorSpace,be=I.format,ve=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||re!==hc&&re!==Lr&&(It.getTransfer(re)===jt?(be!==Hi||ve!==si)&&vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ot("WebGLTextures: Unsupported texture color space:",re)),w}function ot(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=Ce,this.resetTextureUnits=Y,this.getTextureUnits=U,this.setTextureUnits=J,this.setTexture2D=_e,this.setTexture2DArray=Me,this.setTexture3D=He,this.setTextureCube=Se,this.rebindTextures=dt,this.setupRenderTarget=Mt,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Ie,this.dispose=ne}function YT(s,e){function t(r,a=Lr){let l;const c=It.getTransfer(a);if(r===si)return s.UNSIGNED_BYTE;if(r===Bd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===zd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===v0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===_0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===m0)return s.BYTE;if(r===g0)return s.SHORT;if(r===lo)return s.UNSIGNED_SHORT;if(r===kd)return s.INT;if(r===Vi)return s.UNSIGNED_INT;if(r===zi)return s.FLOAT;if(r===Wi)return s.HALF_FLOAT;if(r===x0)return s.ALPHA;if(r===y0)return s.RGB;if(r===Hi)return s.RGBA;if(r===Fr)return s.DEPTH_COMPONENT;if(r===Ir)return s.DEPTH_STENCIL;if(r===S0)return s.RED;if(r===Hd)return s.RED_INTEGER;if(r===as)return s.RG;if(r===Gd)return s.RG_INTEGER;if(r===Vd)return s.RGBA_INTEGER;if(r===nc||r===ic||r===rc||r===sc)if(c===jt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===nc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ic)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===rc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===sc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===nc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ic)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===rc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===sc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Zh||r===Jh||r===Qh||r===ed)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Zh)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Jh)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Qh)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ed)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===td||r===nd||r===id||r===rd||r===sd||r===cc||r===ad)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===td||r===nd)return c===jt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===id)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===rd)return l.COMPRESSED_R11_EAC;if(r===sd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===cc)return l.COMPRESSED_RG11_EAC;if(r===ad)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===od||r===ld||r===cd||r===ud||r===hd||r===dd||r===fd||r===pd||r===md||r===gd||r===vd||r===_d||r===xd||r===yd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===od)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ld)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===cd)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ud)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===hd)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===dd)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===fd)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===pd)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===md)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===gd)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===vd)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===_d)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===xd)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===yd)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Sd||r===Md||r===Ed)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Sd)return c===jt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Md)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ed)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Td||r===wd||r===uc||r===Ad)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Td)return l.COMPRESSED_RED_RGTC1_EXT;if(r===wd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===uc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ad)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ta?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const $T=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KT=`
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

}`;class ZT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new L0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new cs({vertexShader:$T,fragmentShader:KT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Zt(new go(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JT extends Br{constructor(e,t){super();const r=this;let a=null,l=1,c=null,h="local-floor",f=1,p=null,g=null,S=null,_=null,x=null,T=null;const b=typeof XRWebGLBinding<"u",y=new ZT,M={},N=t.getContextAttributes();let L=null,C=null;const F=[],D=[],E=new Fe;let R=null,X=null;const O=new wi;O.viewport=new an;const G=new wi;G.viewport=new an;const Z=[O,G],se=new oS;let k=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let _e=F[Q];return _e===void 0&&(_e=new vh,F[Q]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(Q){let _e=F[Q];return _e===void 0&&(_e=new vh,F[Q]=_e),_e.getGripSpace()},this.getHand=function(Q){let _e=F[Q];return _e===void 0&&(_e=new vh,F[Q]=_e),_e.getHandSpace()};function le(Q){const _e=D.indexOf(Q.inputSource);if(_e===-1)return;const Me=F[_e];Me!==void 0&&(Me.update(Q.inputSource,Q.frame,p||c),Me.dispatchEvent({type:Q.type,data:Q.inputSource}))}function K(){a.removeEventListener("select",le),a.removeEventListener("selectstart",le),a.removeEventListener("selectend",le),a.removeEventListener("squeeze",le),a.removeEventListener("squeezestart",le),a.removeEventListener("squeezeend",le),a.removeEventListener("end",K),a.removeEventListener("inputsourceschange",te);for(let Q=0;Q<F.length;Q++){const _e=D[Q];_e!==null&&(D[Q]=null,F[Q].disconnect(_e))}k=null,ne=null,y.reset();for(const Q in M)delete M[Q];if(e.setRenderTarget(L),x=null,_=null,S=null,a=null,C=null,Ce.stop(),r.isPresenting=!1,e.setPixelRatio(R),e.setSize(E.width,E.height,!1),X!==null){const Q=X.camera;Q.fov=X.fov,Q.zoom=X.zoom,Q.updateProjectionMatrix(),X=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){l=Q,r.isPresenting===!0&&vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){h=Q,r.isPresenting===!0&&vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return S===null&&b&&(S=new XRWebGLBinding(a,t)),S},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(Q){if(a=Q,a!==null){if(L=e.getRenderTarget(),a.addEventListener("select",le),a.addEventListener("selectstart",le),a.addEventListener("selectend",le),a.addEventListener("squeeze",le),a.addEventListener("squeezestart",le),a.addEventListener("squeezeend",le),a.addEventListener("end",K),a.addEventListener("inputsourceschange",te),N.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(E),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,He=null,Se=null;N.depth&&(Se=N.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=N.stencil?Ir:Fr,He=N.stencil?ta:Vi);const Ge={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:l};S=this.getBinding(),_=S.createProjectionLayer(Ge),a.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),C=new Gi(_.textureWidth,_.textureHeight,{format:Hi,type:si,depthTexture:new na(_.textureWidth,_.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{const Me={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(a,t,Me),a.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),C=new Gi(x.framebufferWidth,x.framebufferHeight,{format:Hi,type:si,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(f),p=null,c=await a.requestReferenceSpace(h),Ce.setContext(a),Ce.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function te(Q){for(let _e=0;_e<Q.removed.length;_e++){const Me=Q.removed[_e],He=D.indexOf(Me);He>=0&&(D[He]=null,F[He].disconnect(Me))}for(let _e=0;_e<Q.added.length;_e++){const Me=Q.added[_e];let He=D.indexOf(Me);if(He===-1){for(let Ge=0;Ge<F.length;Ge++)if(Ge>=D.length){D.push(Me),He=Ge;break}else if(D[Ge]===null){D[Ge]=Me,He=Ge;break}if(He===-1)break}const Se=F[He];Se&&Se.connect(Me)}}function q(Q,_e){_e===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(_e.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(a===null)return;let _e=Q.near,Me=Q.far;y.texture!==null&&(y.depthNear>0&&(_e=y.depthNear),y.depthFar>0&&(Me=y.depthFar)),se.near=G.near=O.near=_e,se.far=G.far=O.far=Me,(k!==se.near||ne!==se.far)&&(a.updateRenderState({depthNear:se.near,depthFar:se.far}),k=se.near,ne=se.far),se.layers.mask=Q.layers.mask|6,O.layers.mask=se.layers.mask&-5,G.layers.mask=se.layers.mask&-3;const He=Q.parent,Se=se.cameras;q(se,He);for(let Ge=0;Ge<Se.length;Ge++)q(Se[Ge],He);se.projectionMatrix.copy(O.projectionMatrix),se.projectionMatrixInverse.copy(O.projectionMatrixInverse),X===null&&Q.isPerspectiveCamera&&(X={camera:Q,fov:Q.fov,zoom:Q.zoom}),Y(Q,se,He)};function Y(Q,_e,Me){Me===null?Q.matrix.copy(_e.matrixWorld):(Q.matrix.copy(Me.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(_e.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(_e.projectionMatrix),Q.projectionMatrixInverse.copy(_e.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Rd*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return se},this.getFoveation=function(){if(!(_===null&&x===null))return f},this.setFoveation=function(Q){f=Q,_!==null&&(_.fixedFoveation=Q),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=Q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(se)},this.getCameraTexture=function(Q){return M[Q]};let U=null;function J(Q,_e){if(g=_e.getViewerPose(p||c),T=_e,g!==null){const Me=g.views;x!==null&&(e.setRenderTargetFramebuffer(C,x.framebuffer),e.setRenderTarget(C));let He=!1;Me.length!==se.cameras.length&&(se.cameras.length=0,He=!0);for(let ee=0;ee<Me.length;ee++){const Ee=Me[ee];let je=null;if(x!==null)je=x.getViewport(Ee);else{const ye=S.getViewSubImage(_,Ee);je=ye.viewport,ee===0&&(e.setRenderTargetTextures(C,ye.colorTexture,ye.depthStencilTexture),e.setRenderTarget(C))}let ce=Z[ee];ce===void 0&&(ce=new wi,ce.layers.enable(ee),ce.viewport=new an,Z[ee]=ce),ce.matrix.fromArray(Ee.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(Ee.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(je.x,je.y,je.width,je.height),ee===0&&(se.matrix.copy(ce.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale)),He===!0&&se.cameras.push(ce)}const Se=a.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&b){S=r.getBinding();const ee=S.getDepthInformation(Me[0]);ee&&ee.isValid&&ee.texture&&y.init(ee,a.renderState)}if(Se&&Se.includes("camera-access")&&b){e.state.unbindTexture(),S=r.getBinding();for(let ee=0;ee<Me.length;ee++){const Ee=Me[ee].camera;if(Ee){let je=M[Ee];je||(je=new L0,M[Ee]=je);const ce=S.getCameraImage(Ee);je.sourceTexture=ce}}}}for(let Me=0;Me<F.length;Me++){const He=D[Me],Se=F[Me];He!==null&&Se!==void 0&&Se.update(He,_e,p||c)}U&&U(Q,_e),_e.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:_e}),T=null}const Ce=new q0;Ce.setAnimationLoop(J),this.setAnimationLoop=function(Q){U=Q},this.dispose=function(){}}}const QT=new Yt,iv=new St;iv.set(-1,0,0,0,1,0,0,0,1);function ew(s,e){function t(y,M){y.matrixAutoUpdate===!0&&y.updateMatrix(),M.value.copy(y.matrix)}function r(y,M){M.color.getRGB(y.fogColor.value,W0(s)),M.isFog?(y.fogNear.value=M.near,y.fogFar.value=M.far):M.isFogExp2&&(y.fogDensity.value=M.density)}function a(y,M,N,L,C){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?l(y,M):M.isMeshLambertMaterial?(l(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(l(y,M),S(y,M)):M.isMeshPhongMaterial?(l(y,M),g(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(l(y,M),_(y,M),M.isMeshPhysicalMaterial&&x(y,M,C)):M.isMeshMatcapMaterial?(l(y,M),T(y,M)):M.isMeshDepthMaterial?l(y,M):M.isMeshDistanceMaterial?(l(y,M),b(y,M)):M.isMeshNormalMaterial?l(y,M):M.isLineBasicMaterial?(c(y,M),M.isLineDashedMaterial&&h(y,M)):M.isPointsMaterial?f(y,M,N,L):M.isSpriteMaterial?p(y,M):M.isShadowMaterial?(y.color.value.copy(M.color),y.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function l(y,M){y.opacity.value=M.opacity,M.color&&y.diffuse.value.copy(M.color),M.emissive&&y.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(y.map.value=M.map,t(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,t(M.alphaMap,y.alphaMapTransform)),M.bumpMap&&(y.bumpMap.value=M.bumpMap,t(M.bumpMap,y.bumpMapTransform),y.bumpScale.value=M.bumpScale,M.side===Zn&&(y.bumpScale.value*=-1)),M.normalMap&&(y.normalMap.value=M.normalMap,t(M.normalMap,y.normalMapTransform),y.normalScale.value.copy(M.normalScale),M.side===Zn&&y.normalScale.value.negate()),M.displacementMap&&(y.displacementMap.value=M.displacementMap,t(M.displacementMap,y.displacementMapTransform),y.displacementScale.value=M.displacementScale,y.displacementBias.value=M.displacementBias),M.emissiveMap&&(y.emissiveMap.value=M.emissiveMap,t(M.emissiveMap,y.emissiveMapTransform)),M.specularMap&&(y.specularMap.value=M.specularMap,t(M.specularMap,y.specularMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest);const N=e.get(M),L=N.envMap,C=N.envMapRotation;L&&(y.envMap.value=L,y.envMapRotation.value.setFromMatrix4(QT.makeRotationFromEuler(C)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(iv),y.reflectivity.value=M.reflectivity,y.ior.value=M.ior,y.refractionRatio.value=M.refractionRatio),M.lightMap&&(y.lightMap.value=M.lightMap,y.lightMapIntensity.value=M.lightMapIntensity,t(M.lightMap,y.lightMapTransform)),M.aoMap&&(y.aoMap.value=M.aoMap,y.aoMapIntensity.value=M.aoMapIntensity,t(M.aoMap,y.aoMapTransform))}function c(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,M.map&&(y.map.value=M.map,t(M.map,y.mapTransform))}function h(y,M){y.dashSize.value=M.dashSize,y.totalSize.value=M.dashSize+M.gapSize,y.scale.value=M.scale}function f(y,M,N,L){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.size.value=M.size*N,y.scale.value=L*.5,M.map&&(y.map.value=M.map,t(M.map,y.uvTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,t(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function p(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.rotation.value=M.rotation,M.map&&(y.map.value=M.map,t(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,t(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function g(y,M){y.specular.value.copy(M.specular),y.shininess.value=Math.max(M.shininess,1e-4)}function S(y,M){M.gradientMap&&(y.gradientMap.value=M.gradientMap)}function _(y,M){y.metalness.value=M.metalness,M.metalnessMap&&(y.metalnessMap.value=M.metalnessMap,t(M.metalnessMap,y.metalnessMapTransform)),y.roughness.value=M.roughness,M.roughnessMap&&(y.roughnessMap.value=M.roughnessMap,t(M.roughnessMap,y.roughnessMapTransform)),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)}function x(y,M,N){y.ior.value=M.ior,M.diffuseRoughness>0&&(y.diffuseRoughness.value=M.diffuseRoughness,M.diffuseRoughnessMap&&(y.diffuseRoughnessMap.value=M.diffuseRoughnessMap,t(M.diffuseRoughnessMap,y.diffuseRoughnessMapTransform))),M.sheen>0&&(y.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),y.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(y.sheenColorMap.value=M.sheenColorMap,t(M.sheenColorMap,y.sheenColorMapTransform)),M.sheenRoughnessMap&&(y.sheenRoughnessMap.value=M.sheenRoughnessMap,t(M.sheenRoughnessMap,y.sheenRoughnessMapTransform))),M.clearcoat>0&&(y.clearcoat.value=M.clearcoat,y.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(y.clearcoatMap.value=M.clearcoatMap,t(M.clearcoatMap,y.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,t(M.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(y.clearcoatNormalMap.value=M.clearcoatNormalMap,t(M.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===Zn&&y.clearcoatNormalScale.value.negate())),M.dispersion>0&&(y.dispersion.value=M.dispersion),M.retroreflectivity>0&&(y.retroreflectivity.value=M.retroreflectivity),M.iridescence>0&&(y.iridescence.value=M.iridescence,y.iridescenceIOR.value=M.iridescenceIOR,y.iridescenceThicknessMinimum.value=M.iridescenceThicknessMinimum,y.iridescenceThicknessMaximum.value=M.iridescenceThicknessMaximum,M.iridescenceMap&&(y.iridescenceMap.value=M.iridescenceMap,t(M.iridescenceMap,y.iridescenceMapTransform)),M.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=M.iridescenceThicknessMap,t(M.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),M.transmission>0&&(y.transmission.value=M.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),M.transmissionMap&&(y.transmissionMap.value=M.transmissionMap,t(M.transmissionMap,y.transmissionMapTransform)),y.thickness.value=M.thickness,M.thicknessMap&&(y.thicknessMap.value=M.thicknessMap,t(M.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=M.attenuationDistance,y.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(y.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(y.anisotropyMap.value=M.anisotropyMap,t(M.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=M.specularIntensity,y.specularColor.value.copy(M.specularColor),M.specularColorMap&&(y.specularColorMap.value=M.specularColorMap,t(M.specularColorMap,y.specularColorMapTransform)),M.specularIntensityMap&&(y.specularIntensityMap.value=M.specularIntensityMap,t(M.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,M){M.matcap&&(y.matcap.value=M.matcap)}function b(y,M){const N=e.get(M).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function tw(s,e,t,r){let a={},l={};function c(N,L){const C=L.program;r.uniformBlockBinding(N,C,a[N.id])}function h(N,L){let C=a[N.id];C===void 0&&(T(N),C=f(N),a[N.id]=C,N.addEventListener("dispose",y));const F=L.program;r.updateUBOMapping(N,F);const D=e.render.frame;l[N.id]!==D&&(p(N),l[N.id]=D)}function f(N){const L=s.createBuffer(),C=N.__size,F=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,C,F),s.bindBuffer(s.UNIFORM_BUFFER,null),L}function p(N){const L=a[N.id],C=N.uniforms,F=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let D=0,E=C.length;D<E;D++){const R=C[D];if(Array.isArray(R))for(let X=0,O=R.length;X<O;X++)g(R[X],D,X,F);else g(R,D,0,F)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function g(N,L,C,F){if(_(N,L,C,F)===!0){const D=N.__offset,E=N.value;if(Array.isArray(E)){let R=0;for(let X=0;X<E.length;X++){const O=E[X],G=b(O,!0);S(O,N.__data,R),R+=G.storage/Float32Array.BYTES_PER_ELEMENT}}else S(E,N.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,D,N.__data)}}function S(N,L,C){typeof N=="number"||typeof N=="boolean"?L[C]=N:N.isMatrix3?(L[C]=N.elements[0],L[C+1]=N.elements[1],L[C+2]=N.elements[2],L[C+3]=0,L[C+4]=N.elements[3],L[C+5]=N.elements[4],L[C+6]=N.elements[5],L[C+7]=0,L[C+8]=N.elements[6],L[C+9]=N.elements[7],L[C+10]=N.elements[8],L[C+11]=0):ArrayBuffer.isView(N)?L.set(N.subarray(0,L.length-C),C):N.toArray(L,C)}function _(N,L,C,F){const D=N.value,E=L+"_"+C;if(Array.isArray(D)){F[E]===void 0&&(F[E]=[]);const R=F[E];let X=!1;for(let O=0;O<D.length;O++)x(D[O],R,O)===!0&&(X=!0);return X}return x(D,F,E)}function x(N,L,C){if(L[C]===void 0)return typeof N=="number"||typeof N=="boolean"?L[C]=N:ArrayBuffer.isView(N)?L[C]=N.slice():L[C]=N.clone(),!0;{const F=L[C];if(typeof N=="number"||typeof N=="boolean"){if(F!==N)return L[C]=N,!0}else{if(ArrayBuffer.isView(N))return!0;if(F.equals(N)===!1)return F.copy(N),!0}}return!1}function T(N){const L=N.uniforms;let C=0;const F=16;for(let E=0,R=L.length;E<R;E++){const X=Array.isArray(L[E])?L[E]:[L[E]];for(let O=0,G=X.length;O<G;O++){const Z=X[O],se=Array.isArray(Z.value)?Z.value:[Z.value],k=Array.isArray(L[E])||Array.isArray(Z.value);let ne=C;for(let K=0,te=se.length;K<te;K++){const q=se[K],Y=b(q,k),U=C%F,J=U%Y.boundary,Ce=U+J;C+=J,Ce!==0&&F-Ce<Y.storage&&(C+=F-Ce),K===0&&(ne=C),C+=Y.storage}const le=Z.type==="int"?Int32Array:Z.type==="uint"?Uint32Array:Float32Array;Z.__data=new le((C-ne)/Float32Array.BYTES_PER_ELEMENT),Z.__offset=ne}}const D=C%F;return D>0&&(C+=F-D),N.__size=C,N.__cache={},this}function b(N,L){const C={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(C.boundary=4,C.storage=4):N.isVector2?(C.boundary=8,C.storage=8):N.isVector3||N.isColor?(C.boundary=16,C.storage=12):N.isVector4?(C.boundary=16,C.storage=16):N.isMatrix3?(C.boundary=16,C.storage=48):N.isMatrix4?(C.boundary=16,C.storage=64):N.isTexture?vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(N)?(C.boundary=16,C.storage=N.byteLength):vt("WebGLRenderer: Unsupported uniform value type.",N),L===!0&&(C.boundary=16,C.storage=Math.ceil(C.storage/16)*16),C}function y(N){const L=N.target;L.removeEventListener("dispose",y),s.deleteBuffer(a[L.id]),delete a[L.id],delete l[L.id]}function M(){for(const N in a)s.deleteBuffer(a[N]);a={},l={}}return{bind:c,update:h,dispose:M}}const nw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fi=null;function iw(){return Fi===null&&(Fi=new gy(nw,16,16,as,Wi),Fi.name="DFG_LUT",Fi.minFilter=Kn,Fi.magFilter=Kn,Fi.wrapS=ar,Fi.wrapT=ar,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}class rw{constructor(e={}){const{canvas:t=Hx(),context:r=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:h=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:_=!1,outputBufferType:x=si}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=c;const b=x,y=new Set([Vd,Gd,Hd]),M=new Set([si,Vi,lo,ta,Bd,zd]),N=new Uint32Array(4),L=new Int32Array(4),C={textures:[],min:[],max:[],resolution:[]};let F=null,D=null;const E=[],R=[];let X=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=or,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let G=!1,Z=null,se=null,k=null,ne=null;this._outputColorSpace=fi;let le=0,K=0,te=null,q=-1,Y=null;const U=new an,J=new an;let Ce=null;const Q=new bt(0);let _e=0,Me=t.width,He=t.height,Se=1,Ge=null,yt=null;const ee=new an(0,0,Me,He),Ee=new an(0,0,Me,He);let je=!1;const ce=new uo,ye=new Yd;let xe=!1,Ne=!1;const we=new Yt,st=new H,Ye=new an,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function Mt(){return te===null?Se:1}let V=r;function Lt(P,W){return t.getContext(P,W)}let ft,Pt,Ie,Vt,it,ot,I,w,re,be,ve,Le,ke,pe,me,Ue,z,ge,fe,ze,De,Be,lt;try{const P={alpha:!0,depth:a,stencil:l,antialias:h,premultipliedAlpha:f,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:S};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Od}`),t.addEventListener("webglcontextlost",ht,!1),t.addEventListener("webglcontextrestored",_t,!1),t.addEventListener("webglcontextcreationerror",qe,!1),V===null){const W="webgl2";if(V=Lt(W,P),V===null)throw Lt(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Et()}catch(P){throw t.removeEventListener("webglcontextlost",ht,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",qe,!1),Ot("WebGLRenderer: "+P.message),P}function Et(){ft=new oE(V),ft.init(),De=new YT(V,ft),Pt=new K1(V,ft,e,De),Ie=new XT(V,ft),Pt.reversedDepthBuffer&&_&&Ie.buffers.depth.setReversed(!0),se=V.createFramebuffer(),k=V.createFramebuffer(),ne=V.createFramebuffer(),Vt=new uE(V),it=new LT,ot=new qT(V,ft,Ie,it,Pt,De,Vt),I=new aE(O),w=new dS(V),Be=new Y1(V,w),re=new lE(V,w,Vt,Be),be=new dE(V,re,w,Be,Vt),ge=new hE(V,Pt,ot),me=new Z1(it),ve=new NT(O,I,ft,Pt,Be,me),Le=new ew(O,it),ke=new IT,pe=new zT(ft),z=new q1(O,I,Ie,be,T,f),Ue=new jT(O,be,Pt),lt=new tw(V,Vt,Pt,Ie),fe=new $1(V,ft,Vt),ze=new cE(V,ft,Vt),Vt.programs=ve.programs,O.capabilities=Pt,O.extensions=ft,O.properties=it,O.renderLists=ke,O.shadowMap=Ue,O.state=Ie,O.info=Vt}b!==si&&(X=new pE(b,t.width,t.height,h,a,l));const Re=new JT(O,V);this.xr=Re,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const P=ft.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=ft.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(P){P!==void 0&&(Se=P,this.setSize(Me,He,!1))},this.getSize=function(P){return P.set(Me,He)},this.setSize=function(P,W,ue=!0){if(Re.isPresenting){vt("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=P,He=W,t.width=Math.floor(P*Se),t.height=Math.floor(W*Se),ue===!0&&(t.style.width=P+"px",t.style.height=W+"px"),X!==null&&X.setSize(t.width,t.height),this.setViewport(0,0,P,W)},this.getDrawingBufferSize=function(P){return P.set(Me*Se,He*Se).floor()},this.setDrawingBufferSize=function(P,W,ue){Me=P,He=W,Se=ue,t.width=Math.floor(P*ue),t.height=Math.floor(W*ue),this.setViewport(0,0,P,W)},this.setEffects=function(P){if(b===si){Ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let W=0;W<P.length;W++)if(P[W].isOutputPass===!0){vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}X.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(U)},this.getViewport=function(P){return P.copy(ee)},this.setViewport=function(P,W,ue,ae){P.isVector4?ee.set(P.x,P.y,P.z,P.w):ee.set(P,W,ue,ae),Ie.viewport(U.copy(ee).multiplyScalar(Mt()).round())},this.getScissor=function(P){return P.copy(Ee)},this.setScissor=function(P,W,ue,ae){P.isVector4?Ee.set(P.x,P.y,P.z,P.w):Ee.set(P,W,ue,ae),Ie.scissor(J.copy(Ee).multiplyScalar(Mt()).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(P){Ie.setScissorTest(je=P)},this.setOpaqueSort=function(P){Ge=P},this.setTransparentSort=function(P){yt=P},this.getClearColor=function(P){return P.copy(z.getClearColor())},this.setClearColor=function(){z.setClearColor(...arguments)},this.getClearAlpha=function(){return z.getClearAlpha()},this.setClearAlpha=function(){z.setClearAlpha(...arguments)},this.clear=function(P=!0,W=!0,ue=!0){let ae=0;if(P){let ie=!1;if(te!==null){const We=te.texture.format;ie=y.has(We)}if(ie){const We=te.texture.type,Je=M.has(We),Ve=z.getClearColor(),Xe=z.getClearAlpha(),et=Ve.r,gt=Ve.g,Tt=Ve.b;Je?(N[0]=et,N[1]=gt,N[2]=Tt,N[3]=Xe,V.clearBufferuiv(V.COLOR,0,N)):(L[0]=et,L[1]=gt,L[2]=Tt,L[3]=Xe,V.clearBufferiv(V.COLOR,0,L))}else ae|=V.COLOR_BUFFER_BIT}W&&(ae|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(ae|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&V.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),Z=P},this.dispose=function(){t.removeEventListener("webglcontextlost",ht,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",qe,!1),z.dispose(),ke.dispose(),pe.dispose(),ot.dispose(),it.dispose(),I.dispose(),be.dispose(),re.dispose(),Be.dispose(),lt.dispose(),ve.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",_o),Re.removeEventListener("sessionend",bi),Ri.stop()};function ht(P){P.preventDefault(),jm("WebGLRenderer: Context Lost."),G=!0}function _t(){jm("WebGLRenderer: Context Restored."),G=!1;const P=Vt.autoReset,W=Ue.enabled,ue=Ue.autoUpdate,ae=Ue.needsUpdate,ie=Ue.type;Et(),Vt.autoReset=P,Ue.enabled=W,Ue.autoUpdate=ue,Ue.needsUpdate=ae,Ue.type=ie}function qe(P){Ot("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Dt(P){const W=P.target;W.removeEventListener("dispose",Dt),nn(W)}function nn(P){Jn(P),it.remove(P)}function Jn(P){const W=it.get(P).programs;W!==void 0&&(W.forEach(function(ue){ve.releaseProgram(ue)}),P.isShaderMaterial&&ve.releaseShaderCache(P))}this.renderBufferDirect=function(P,W,ue,ae,ie,We){W===null&&(W=Ze);const Je=ie.isMesh&&ie.matrixWorld.determinantAffine()<0,Ve=da(P,W,ue,ae,ie);Ie.setMaterial(ae,Je);let Xe=ue.index,et=1;if(ae.wireframe===!0){if(Xe=re.getWireframeAttribute(ue),Xe===void 0)return;et=2}const gt=ue.drawRange,Tt=ue.attributes.position;let tt=gt.start*et,Rt=(gt.start+gt.count)*et;We!==null&&(tt=Math.max(tt,We.start*et),Rt=Math.min(Rt,(We.start+We.count)*et)),Xe!==null?(tt=Math.max(tt,0),Rt=Math.min(Rt,Xe.count)):Tt!=null&&(tt=Math.max(tt,0),Rt=Math.min(Rt,Tt.count));const Qt=Rt-tt;if(Qt<0||Qt===1/0)return;Be.setup(ie,ae,Ve,ue,Xe);let Wt,zt=fe;if(Xe!==null&&(Wt=w.get(Xe),zt=ze,zt.setIndex(Wt)),ie.isMesh)ae.wireframe===!0?(Ie.setLineWidth(ae.wireframeLinewidth*Mt()),zt.setMode(V.LINES)):zt.setMode(V.TRIANGLES);else if(ie.isLine){let ln=ae.linewidth;ln===void 0&&(ln=1),Ie.setLineWidth(ln*Mt()),ie.isLineSegments?zt.setMode(V.LINES):ie.isLineLoop?zt.setMode(V.LINE_LOOP):zt.setMode(V.LINE_STRIP)}else ie.isPoints?zt.setMode(V.POINTS):ie.isSprite&&zt.setMode(V.TRIANGLES);if(ie.isBatchedMesh)if(ft.get("WEBGL_multi_draw"))zt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const ln=ie._multiDrawStarts,nt=ie._multiDrawCounts,pn=ie._multiDrawCount,ct=Xe?w.get(Xe).bytesPerElement:1,Ci=it.get(ae).currentProgram.getUniforms();for(let mn=0;mn<pn;mn++)Ci.setValue(V,"_gl_DrawID",mn),zt.render(ln[mn]/ct,nt[mn])}else if(ie.isInstancedMesh)zt.renderInstances(tt,Qt,ie.count);else if(ue.isInstancedBufferGeometry){const ln=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,nt=Math.min(ue.instanceCount,ln);zt.renderInstances(tt,Qt,nt)}else zt.render(tt,Qt)};function us(P,W,ue,ae){Z!==null&&P.isNodeMaterial&&Z.setObject(ae,P),xe===!0&&me.setState(P,ue,!1),P.transparent===!0&&P.side===Bi&&P.forceSinglePass===!1?(P.side=Zn,P.needsUpdate=!0,Hr(P,W,ae),P.side=ss,P.needsUpdate=!0,Hr(P,W,ae),P.side=Bi):Hr(P,W,ae)}this.compile=function(P,W,ue=null){ue===null&&(ue=P),Z!==null&&Z.renderStart(P,W,ue),D=pe.get(ue),D.init(W),R.push(D),ue.traverseVisible(function(ie){ie.isLight&&ie.layers.test(W.layers)&&(D.pushLight(ie),ie.castShadow&&D.pushShadow(ie))}),P!==ue&&P.traverseVisible(function(ie){ie.isLight&&ie.layers.test(W.layers)&&(D.pushLight(ie),ie.castShadow&&D.pushShadow(ie))}),D.setupLights(),Z!==null&&Z.updateLights(D.state.lightsArray),Ne=this.localClippingEnabled,xe=me.init(this.clippingPlanes,Ne),xe===!0&&me.setGlobalState(this.clippingPlanes,W),Z!==null&&Ue.render(D.state.shadowsArray,ue,W);const ae=new Set;return P.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const We=ie.material;if(We)if(Array.isArray(We))for(let Je=0;Je<We.length;Je++){const Ve=We[Je];us(Ve,ue,W,ie),ae.add(Ve)}else us(We,ue,W,ie),ae.add(We)}),D=R.pop(),Z!==null&&Z.renderEnd(),ae},this.compileAsync=function(P,W,ue=null){const ae=this.compile(P,W,ue);return new Promise(ie=>{function We(){if(ae.forEach(function(Je){const Xe=it.get(Je).currentProgram;(Xe===void 0||Xe.isReady())&&ae.delete(Je)}),ae.size===0){ie(P);return}setTimeout(We,10)}ft.get("KHR_parallel_shader_compile")!==null?We():setTimeout(We,10)})};let la=null;function wc(P){la&&la(P)}function _o(){Ri.stop()}function bi(){Ri.start()}const Ri=new q0;Ri.setAnimationLoop(wc),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(P){la=P,Re.setAnimationLoop(P),P===null?Ri.stop():Ri.start()},Re.addEventListener("sessionstart",_o),Re.addEventListener("sessionend",bi),this.render=function(P,W){if(W!==void 0&&W.isCamera!==!0){Ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;Z!==null&&Z.renderStart(P,W);const ue=Re.enabled===!0&&Re.isPresenting===!0,ae=X!==null&&(te===null||ue)&&X.begin(O,te);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(X===null||X.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(W),W=Re.getCamera()),P.isScene===!0&&P.onBeforeRender(O,P,W,te),D=pe.get(P,R.length),D.init(W),D.state.textureUnits=ot.getTextureUnits(),R.push(D),we.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),W.isArrayCamera?ye.setFromArrayCamera(W):ce.setFromProjectionMatrix(we,Ai,W.reversedDepth),Ne=this.localClippingEnabled,xe=me.init(this.clippingPlanes,Ne),F=ke.get(P,E.length),F.init(),E.push(F),this.info.render.frame++,Re.enabled===!0&&Re.isPresenting===!0){const Je=O.xr.getDepthSensingMesh();Je!==null&&hs(Je,W,-1/0,O.sortObjects)}hs(P,W,0,O.sortObjects),F.finish(),Z!==null&&Z.updateLights(D.state.lightsArray),O.sortObjects===!0&&F.sort(Ge,yt),dt=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,dt&&z.addToRenderList(F,P),this.info.autoReset===!0&&this.info.reset(),xe===!0&&me.beginShadows();const ie=D.state.shadowsArray;if(Ue.render(ie,P,W),xe===!0&&me.endShadows(),(ae&&X.hasRenderPass())===!1){const Je=F.opaque,Ve=F.transmissive;if(D.setupLights(),W.isArrayCamera){const Xe=W.cameras;if(Ve.length>0)for(let et=0,gt=Xe.length;et<gt;et++){const Tt=Xe[et];ca(Je,Ve,P,Tt)}dt&&z.render(P);for(let et=0,gt=Xe.length;et<gt;et++){const Tt=Xe[et];xo(F,P,Tt,Tt.viewport)}}else Ve.length>0&&ca(Je,Ve,P,W),dt&&z.render(P),xo(F,P,W)}te!==null&&K===0&&(ot.updateMultisampleRenderTarget(te),ot.updateRenderTargetMipmap(te)),ae&&X.end(O),P.isScene===!0&&P.onAfterRender(O,P,W),Be.resetDefaultState(),q=-1,Y=null,R.pop(),R.length>0?(D=R[R.length-1],ot.setTextureUnits(D.state.textureUnits),xe===!0&&me.setGlobalState(O.clippingPlanes,D.state.camera)):D=null,E.pop(),E.length>0?F=E[E.length-1]:F=null,Z!==null&&Z.renderEnd()};function hs(P,W,ue,ae){if(P.visible===!1)return;if(P.layers.test(W.layers)){if(P.isGroup)ue=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(W);else if(P.isLight)D.pushLight(P),P.castShadow&&D.pushShadow(P);else if(P.isSprite){const Je=W.isArrayCamera?ye:ce;if(!P.frustumCulled||P.intersectsFrustum(Je)){ae&&Ye.setFromMatrixPosition(P.matrixWorld).applyMatrix4(we);const Ve=be.update(P),Xe=P.material;Xe.visible&&F.push(P,Ve,Xe,ue,Ye.z,null,W)}}else if(P.isMesh||P.isLine||P.isPoints){const Je=W.isArrayCamera?ye:ce;if(!P.frustumCulled||P.intersectsFrustum(Je)){const Ve=be.update(P),Xe=P.material;if(ae&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ye.copy(P.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),Ye.copy(Ve.boundingSphere.center)),Ye.applyMatrix4(P.matrixWorld).applyMatrix4(we)),Array.isArray(Xe)){const et=Ve.groups;for(let gt=0,Tt=et.length;gt<Tt;gt++){const tt=et[gt],Rt=Xe[tt.materialIndex];Rt&&Rt.visible&&F.push(P,Ve,Rt,ue,Ye.z,tt,W)}}else Xe.visible&&F.push(P,Ve,Xe,ue,Ye.z,null,W)}}}const We=P.children;for(let Je=0,Ve=We.length;Je<Ve;Je++)hs(We[Je],W,ue,ae)}function xo(P,W,ue,ae){const{opaque:ie,transmissive:We,transparent:Je}=P;D.setupLightsView(ue),xe===!0&&me.setGlobalState(O.clippingPlanes,ue),ae&&Ie.viewport(U.copy(ae)),ie.length>0&&zr(ie,W,ue),We.length>0&&zr(We,W,ue),Je.length>0&&zr(Je,W,ue),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function ca(P,W,ue,ae){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[ae.id]===void 0){const tt=ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[ae.id]=new Gi(1,1,{generateMipmaps:!0,type:tt?Wi:si,minFilter:Dr,samples:Math.max(4,Pt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:It.workingColorSpace})}const We=D.state.transmissionRenderTarget[ae.id],Je=ae.viewport||U;We.setSize(Je.z*O.transmissionResolutionScale,Je.w*O.transmissionResolutionScale);const Ve=O.getRenderTarget(),Xe=O.getActiveCubeFace(),et=O.getActiveMipmapLevel();O.setRenderTarget(We),O.getClearColor(Q),_e=O.getClearAlpha(),_e<1&&O.setClearColor(16777215,.5),O.clear(),dt&&z.render(ue);const gt=O.toneMapping;O.toneMapping=or;const Tt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),D.setupLightsView(ae),xe===!0&&me.setGlobalState(O.clippingPlanes,ae),zr(P,ue,ae),ot.updateMultisampleRenderTarget(We),ot.updateRenderTargetMipmap(We),ft.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let Rt=0,Qt=W.length;Rt<Qt;Rt++){const Wt=W[Rt],{object:zt,geometry:ln,material:nt,group:pn}=Wt;if(nt.side===Bi&&zt.layers.test(ae.layers)){const ct=nt.side;nt.side=Zn,nt.needsUpdate=!0,ua(zt,ue,ae,ln,nt,pn),nt.side=ct,nt.needsUpdate=!0,tt=!0}}tt===!0&&(ot.updateMultisampleRenderTarget(We),ot.updateRenderTargetMipmap(We))}O.setRenderTarget(Ve,Xe,et),O.setClearColor(Q,_e),Tt!==void 0&&(ae.viewport=Tt),O.toneMapping=gt}function zr(P,W,ue){const ae=W.isScene===!0?W.overrideMaterial:null;for(let ie=0,We=P.length;ie<We;ie++){const Je=P[ie],{object:Ve,geometry:Xe,group:et}=Je;let gt=Je.material;gt.allowOverride===!0&&ae!==null&&(gt=ae),Ve.layers.test(ue.layers)&&ua(Ve,W,ue,Xe,gt,et)}}function ua(P,W,ue,ae,ie,We){Z!==null&&ie.isNodeMaterial&&Z.setObject(P,ie),P.onBeforeRender(O,W,ue,ae,ie,We),P.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ie.onBeforeRender(O,W,ue,ae,P,We),ie.transparent===!0&&ie.side===Bi&&ie.forceSinglePass===!1?(ie.side=Zn,ie.needsUpdate=!0,O.renderBufferDirect(ue,W,ae,ie,P,We),ie.side=ss,ie.needsUpdate=!0,O.renderBufferDirect(ue,W,ae,ie,P,We),ie.side=Bi):O.renderBufferDirect(ue,W,ae,ie,P,We),P.onAfterRender(O,W,ue,ae,ie,We)}function ha(P){let W=0;for(const ue of P)ue.texture!==null&&W++;return W}function Hr(P,W,ue){W.isScene!==!0&&(W=Ze);const ae=it.get(P),ie=D.state.lights,We=D.state.shadowsArray,Je=ie.state.version,Ve=ve.getParameters(P,ie.state,We,W,ue,D.state.lightProbeGridArray),Xe=ve.getProgramCacheKey(Ve);let et=ae.programs;ae.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?W.environment:null,ae.fog=W.fog;const gt=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;ae.envMap=I.get(P.envMap||ae.environment,gt),ae.envMapRotation=ae.environment!==null&&P.envMap===null?W.environmentRotation:P.envMapRotation,et===void 0&&(P.addEventListener("dispose",Dt),et=new Map,ae.programs=et,ae.programVariants=new Map);let Tt=et.get(Xe);if(Tt!==void 0){if(ae.currentProgram===Tt&&ae.lightsStateVersion===Je)return yo(P,Ve),Tt}else Ve.uniforms=ve.getUniforms(P),Z!==null&&P.isNodeMaterial&&Z.build(P,ue,Ve),P.onBeforeCompile(Ve,O),Tt=ve.acquireProgram(Ve,Xe),et.set(Xe,Tt),ae.uniforms=Ve.uniforms;const tt=ae.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(tt.clippingPlanes=me.uniform),yo(P,Ve),ae.needsLights=ds(P),ae.lightsStateVersion=Je,ae.needsLights&&(tt.ambientLightColor.value=ie.state.ambient,tt.lightProbe.value=ie.state.probe,tt.sunLights.value=ie.state.sun,tt.sunLightShadows.value=ie.state.sunShadow,tt.directionalLights.value=ie.state.directional,tt.directionalLightShadows.value=ie.state.directionalShadow,tt.spotLights.value=ie.state.spot,tt.spotLightShadows.value=ie.state.spotShadow,tt.rectAreaLights.value=ie.state.rectArea,tt.ltc_1.value=ie.state.rectAreaLTC1,tt.ltc_2.value=ie.state.rectAreaLTC2,tt.pointLights.value=ie.state.point,tt.pointLightShadows.value=ie.state.pointShadow,tt.hemisphereLights.value=ie.state.hemi,tt.sunShadowMatrix.value=ie.state.sunShadowMatrix,tt.sunShadowCascade.value=ie.state.sunShadowCascade,tt.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,tt.spotLightMatrix.value=ie.state.spotLightMatrix,tt.spotLightMap.value=ie.state.spotLightMap,tt.pointShadowMatrix.value=ie.state.pointShadowMatrix),ae.numLightProbeGrids=ha(D.state.lightProbeGridArray),ae.currentProgram=Tt,ae.uniformsList=null,Tt}function Ac(P,W,ue,ae,ie){const We=it.get(P),Je=We.currentProgram.id+","+ae+","+ie;let Ve=We.programVariants.get(Je);return Ve===void 0?(Ve=Hr(P,W,ue),We.programVariants.set(Je,Ve)):(We.currentProgram=Ve,We.uniformsList=null,We.outputColorSpace=ae,We.toneMapping=ie),Ve}function Jt(P){if(P.uniformsList===null){const W=P.currentProgram.getUniforms();P.uniformsList=oc.seqWithValue(W.seq,P.uniforms)}return P.uniformsList}function yo(P,W){const ue=it.get(P);ue.outputColorSpace=W.outputColorSpace,ue.batching=W.batching,ue.batchingColor=W.batchingColor,ue.instancing=W.instancing,ue.instancingColor=W.instancingColor,ue.instancingMorph=W.instancingMorph,ue.skinning=W.skinning,ue.morphTargets=W.morphTargets,ue.morphNormals=W.morphNormals,ue.morphColors=W.morphColors,ue.morphTargetsCount=W.morphTargetsCount,ue.numClippingPlanes=W.numClippingPlanes,ue.numIntersection=W.numClipIntersection,ue.vertexAlphas=W.vertexAlphas,ue.vertexTangents=W.vertexTangents,ue.toneMapping=W.toneMapping}function da(P,W,ue,ae,ie){W.isScene!==!0&&(W=Ze),ot.resetTextureUnits();const We=W.fog,Je=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?W.environment:null,Ve=te===null?O.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:It.workingColorSpace,Xe=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,et=I.get(ae.envMap||Je,Xe),gt=ae.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,Tt=!!ue.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),tt=!!ue.morphAttributes.position,Rt=!!ue.morphAttributes.normal,Qt=!!ue.morphAttributes.color;let Wt=or;ae.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Wt=O.toneMapping);const zt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,ln=zt!==void 0?zt.length:0,nt=it.get(ae),pn=D.state.lights;if(xe===!0&&(Ne===!0||P!==Y)){const kt=P===Y&&ae.id===q;me.setState(ae,P,kt)}let ct=!1,Ci=!1;ae.version===nt.__version?nt.needsLights&&nt.lightsStateVersion!==pn.state.version||ie.isBatchedMesh&&nt.batching===!1||!ie.isBatchedMesh&&nt.batching===!0||ie.isBatchedMesh&&nt.batchingColor===!0&&ie._colorsTexture===null||ie.isBatchedMesh&&nt.batchingColor===!1&&ie._colorsTexture!==null||ie.isInstancedMesh&&nt.instancing===!1||!ie.isInstancedMesh&&nt.instancing===!0||ie.isSkinnedMesh&&nt.skinning===!1||!ie.isSkinnedMesh&&nt.skinning===!0||ie.isInstancedMesh&&nt.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&nt.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&nt.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&nt.instancingMorph===!1&&ie.morphTexture!==null||nt.envMap!==et||ae.fog===!0&&nt.fog!==We||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==me.numPlanes||nt.numIntersection!==me.numIntersection)||nt.vertexAlphas!==gt||nt.vertexTangents!==Tt||nt.morphTargets!==tt||nt.morphNormals!==Rt||nt.morphColors!==Qt||nt.morphTargetsCount!==ln||nt.numLightProbeGrids!==ha(D.state.lightProbeGridArray)?ct=!0:(nt.outputColorSpace!==Ve||nt.toneMapping!==Wt)&&(Ci=!0):(ct=!0,nt.__version=ae.version);let mn=nt.currentProgram;(ct===!0||Ci===!0)&&(mn=Ci===!0?Ac(ae,W,ie,Ve,Wt):Hr(ae,W,ie),Z&&ae.isNodeMaterial&&Z.onUpdateProgram(ae,mn,nt));let cr=!1,mi=!1,Pi=!1;const Nt=mn.getUniforms(),un=nt.uniforms;if(Ie.useProgram(mn.program)&&(cr=!0,mi=!0,Pi=!0),ae.id!==q&&(q=ae.id,mi=!0),cr||Y!==P){Ie.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Nt.setValue(V,"projectionMatrix",P.projectionMatrix),Nt.setValue(V,"viewMatrix",P.matrixWorldInverse);const Xt=Nt.map.cameraPosition;Xt!==void 0&&Xt.setValue(V,st.setFromMatrixPosition(P.matrixWorld)),Pt.logarithmicDepthBuffer&&Nt.setValue(V,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Nt.setValue(V,"isOrthographic",P.isOrthographicCamera===!0),Y!==P&&(Y=P,mi=!0,Pi=!0)}if(nt.needsLights&&(pn.state.sunShadowMap.length>0&&Nt.setValue(V,"sunShadowMap",pn.state.sunShadowMap,ot),pn.state.directionalShadowMap.length>0&&Nt.setValue(V,"directionalShadowMap",pn.state.directionalShadowMap,ot),pn.state.spotShadowMap.length>0&&Nt.setValue(V,"spotShadowMap",pn.state.spotShadowMap,ot),pn.state.pointShadowMap.length>0&&Nt.setValue(V,"pointShadowMap",pn.state.pointShadowMap,ot)),ie.isSkinnedMesh){Nt.setOptional(V,ie,"bindMatrix"),Nt.setOptional(V,ie,"bindMatrixInverse");const kt=ie.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),Nt.setValue(V,"boneTexture",kt.boneTexture,ot))}ie.isBatchedMesh&&(Nt.setOptional(V,ie,"batchingTexture"),Nt.setValue(V,"batchingTexture",ie._matricesTexture,ot),Nt.setOptional(V,ie,"batchingIdTexture"),Nt.setValue(V,"batchingIdTexture",ie._indirectTexture,ot),Nt.setOptional(V,ie,"batchingColorTexture"),ie._colorsTexture!==null&&Nt.setValue(V,"batchingColorTexture",ie._colorsTexture,ot));const Pn=ue.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&ge.update(ie,ue,mn),(mi||nt.receiveShadow!==ie.receiveShadow)&&(nt.receiveShadow=ie.receiveShadow,Nt.setValue(V,"receiveShadow",ie.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&W.environment!==null&&(un.envMapIntensity.value=W.environmentIntensity),un.dfgLUT!==void 0&&(un.dfgLUT.value=iw()),mi){if(Nt.setValue(V,"toneMappingExposure",O.toneMappingExposure),nt.needsLights&&So(un,Pi),We&&ae.fog===!0&&Le.refreshFogUniforms(un,We),Le.refreshMaterialUniforms(un,ae,Se,He,D.state.transmissionRenderTarget[P.id]),nt.needsLights&&nt.numLightProbeGrids>0){const kt=C;let Xt=0;for(const Sn of D.state.lightProbeGridArray)Sn.texture!==null&&(kt.textures[Xt]=Sn.texture,kt.min[Xt]=Sn.boundingBox.min,kt.max[Xt]=Sn.boundingBox.max,kt.resolution[Xt]=Sn.resolution,Xt++);for(const Sn in kt)kt[Sn].length=Xt;un.probesSH.value=kt.textures,un.probesMin.value=kt.min,un.probesMax.value=kt.max,un.probesResolution.value=kt.resolution}oc.upload(V,Jt(nt),un,ot)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(oc.upload(V,Jt(nt),un,ot),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Nt.setValue(V,"center",ie.center),Nt.setValue(V,"modelViewMatrix",ie.modelViewMatrix),Nt.setValue(V,"normalMatrix",ie.normalMatrix),Nt.setValue(V,"modelMatrix",ie.matrixWorld),ae.uniformsGroups!==void 0){const kt=ae.uniformsGroups;for(let Xt=0,Sn=kt.length;Xt<Sn;Xt++){const ur=kt[Xt];lt.update(ur,mn),lt.bind(ur,mn)}}return mn}function So(P,W){P.ambientLightColor.needsUpdate=W,P.lightProbe.needsUpdate=W,P.sunLights.needsUpdate=W,P.sunLightShadows.needsUpdate=W,P.directionalLights.needsUpdate=W,P.directionalLightShadows.needsUpdate=W,P.pointLights.needsUpdate=W,P.pointLightShadows.needsUpdate=W,P.spotLights.needsUpdate=W,P.spotLightShadows.needsUpdate=W,P.rectAreaLights.needsUpdate=W,P.hemisphereLights.needsUpdate=W}function ds(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return le},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(P,W,ue){const ae=it.get(P);ae.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),it.get(P.texture).__webglTexture=W,it.get(P.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:ue,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,W){const ue=it.get(P);ue.__webglFramebuffer=W,ue.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(P,W=0,ue=0){te=P,le=W,K=ue;let ae=null,ie=!1,We=!1;if(P){const Ve=it.get(P);if(Ve.__useDefaultFramebuffer!==void 0){Ie.bindFramebuffer(V.FRAMEBUFFER,Ve.__webglFramebuffer),U.copy(P.viewport),J.copy(P.scissor),Ce=P.scissorTest,Ie.viewport(U),Ie.scissor(J),Ie.setScissorTest(Ce),q=-1;return}else if(Ve.__webglFramebuffer===void 0)ot.setupRenderTarget(P);else if(Ve.__hasExternalTextures)ot.rebindTextures(P,it.get(P.texture).__webglTexture,it.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const gt=P.depthTexture;if(Ve.__boundDepthTexture!==gt){if(gt!==null&&it.has(gt)&&(P.width!==gt.image.width||P.height!==gt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(P)}}const Xe=P.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(We=!0);const et=it.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(et[W])?ae=et[W][ue]:ae=et[W],ie=!0):P.samples>0&&ot.useMultisampledRTT(P)===!1?ae=it.get(P).__webglMultisampledFramebuffer:Array.isArray(et)?ae=et[ue]:ae=et,U.copy(P.viewport),J.copy(P.scissor),Ce=P.scissorTest}else U.copy(ee).multiplyScalar(Se).floor(),J.copy(Ee).multiplyScalar(Se).floor(),Ce=je;if(ue!==0&&(ae=se),Ie.bindFramebuffer(V.FRAMEBUFFER,ae)&&Ie.drawBuffers(P,ae),Ie.viewport(U),Ie.scissor(J),Ie.setScissorTest(Ce),ie){const Ve=it.get(P.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ve.__webglTexture,ue)}else if(We){const Ve=W;for(let Xe=0;Xe<P.textures.length;Xe++){const et=it.get(P.textures[Xe]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Xe,et.__webglTexture,ue,Ve)}}else if(P!==null&&ue!==0){const Ve=it.get(P.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ve.__webglTexture,ue)}q=-1};function Mo(P){const W=it.get(P);return(W.__readFormat!==P.format||W.__readType!==P.type)&&(W.__readFormat=P.format,W.__readType=P.type,W.__formatReadable=Pt.textureFormatReadable(P.format),W.__typeReadable=Pt.textureTypeReadable(P.type)),W}this.readRenderTargetPixels=function(P,W,ue,ae,ie,We,Je,Ve=0){if(!(P&&P.isWebGLRenderTarget)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=it.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Je!==void 0&&(Xe=Xe[Je],Array.isArray(Xe)&&(Xe=Xe[0])),Xe){Ie.bindFramebuffer(V.FRAMEBUFFER,Xe);try{const et=P.textures[Ve],gt=et.format,Tt=et.type;P.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ve);const tt=Mo(et);if(tt.__formatReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(tt.__typeReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=P.width-ae&&ue>=0&&ue<=P.height-ie&&V.readPixels(W,ue,ae,ie,De.convert(gt),De.convert(Tt),We)}finally{const et=te!==null?it.get(te).__webglFramebuffer:null;Ie.bindFramebuffer(V.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(P,W,ue,ae,ie,We,Je,Ve=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=it.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Je!==void 0&&(Xe=Xe[Je],Array.isArray(Xe)&&(Xe=Xe[0])),Xe)if(W>=0&&W<=P.width-ae&&ue>=0&&ue<=P.height-ie){Ie.bindFramebuffer(V.FRAMEBUFFER,Xe);const et=P.textures[Ve],gt=et.format,Tt=et.type;P.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ve);const tt=Mo(et);if(tt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(tt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Rt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Rt),V.bufferData(V.PIXEL_PACK_BUFFER,We.byteLength,V.STREAM_READ),V.readPixels(W,ue,ae,ie,De.convert(gt),De.convert(Tt),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);const Qt=te!==null?it.get(te).__webglFramebuffer:null;Ie.bindFramebuffer(V.FRAMEBUFFER,Qt);const Wt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Gx(V,Wt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Rt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,We),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(Rt),V.deleteSync(Wt),We}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,W=null,ue=0){const ae=Math.pow(2,-ue),ie=Math.floor(P.image.width*ae),We=Math.floor(P.image.height*ae),Je=W!==null?W.x:0,Ve=W!==null?W.y:0;ot.setTexture2D(P,0),V.copyTexSubImage2D(V.TEXTURE_2D,ue,0,0,Je,Ve,ie,We),Ie.unbindTexture()},this.copyTextureToTexture=function(P,W,ue=null,ae=null,ie=0,We=0){let Je,Ve,Xe,et,gt,Tt,tt,Rt,Qt;const Wt=P.isCompressedTexture?P.mipmaps[We]:P.image;if(ue!==null)Je=ue.max.x-ue.min.x,Ve=ue.max.y-ue.min.y,Xe=ue.isBox3?ue.max.z-ue.min.z:1,et=ue.min.x,gt=ue.min.y,Tt=ue.isBox3?ue.min.z:0;else{const Nt=Math.pow(2,-ie);Je=Math.floor(Wt.width*Nt),Ve=Math.floor(Wt.height*Nt),P.isDataArrayTexture?Xe=Wt.depth:P.isData3DTexture?Xe=Math.floor(Wt.depth*Nt):Xe=1,et=0,gt=0,Tt=0}ae!==null?(tt=ae.x,Rt=ae.y,Qt=ae.z):(tt=0,Rt=0,Qt=0);const zt=De.convert(W.format),ln=De.convert(W.type);let nt;W.isData3DTexture?(ot.setTexture3D(W,0),nt=V.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(ot.setTexture2DArray(W,0),nt=V.TEXTURE_2D_ARRAY):(ot.setTexture2D(W,0),nt=V.TEXTURE_2D),Ie.activeTexture(V.TEXTURE0),Ie.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,W.flipY),Ie.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),Ie.pixelStorei(V.UNPACK_ALIGNMENT,W.unpackAlignment);const pn=Ie.getParameter(V.UNPACK_ROW_LENGTH),ct=Ie.getParameter(V.UNPACK_IMAGE_HEIGHT),Ci=Ie.getParameter(V.UNPACK_SKIP_PIXELS),mn=Ie.getParameter(V.UNPACK_SKIP_ROWS),cr=Ie.getParameter(V.UNPACK_SKIP_IMAGES);Ie.pixelStorei(V.UNPACK_ROW_LENGTH,Wt.width),Ie.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Wt.height),Ie.pixelStorei(V.UNPACK_SKIP_PIXELS,et),Ie.pixelStorei(V.UNPACK_SKIP_ROWS,gt),Ie.pixelStorei(V.UNPACK_SKIP_IMAGES,Tt);const mi=P.isDataArrayTexture||P.isData3DTexture,Pi=W.isDataArrayTexture||W.isData3DTexture;if(P.isDepthTexture){const Nt=it.get(P),un=it.get(W),Pn=it.get(Nt.__renderTarget),kt=it.get(un.__renderTarget);Ie.bindFramebuffer(V.READ_FRAMEBUFFER,Pn.__webglFramebuffer),Ie.bindFramebuffer(V.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let Xt=0;Xt<Xe;Xt++)mi&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,it.get(P).__webglTexture,ie,Tt+Xt),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,it.get(W).__webglTexture,We,Qt+Xt)),V.blitFramebuffer(et,gt,et+Je,gt+Ve,tt,Rt,tt+Je,Rt+Ve,V.DEPTH_BUFFER_BIT,V.NEAREST);Ie.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(ie!==0||P.isRenderTargetTexture||it.has(P)){const Nt=it.get(P),un=it.get(W);Ie.bindFramebuffer(V.READ_FRAMEBUFFER,k),Ie.bindFramebuffer(V.DRAW_FRAMEBUFFER,ne);for(let Pn=0;Pn<Xe;Pn++)mi?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Nt.__webglTexture,ie,Tt+Pn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Nt.__webglTexture,ie),Pi?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,un.__webglTexture,We,Qt+Pn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,un.__webglTexture,We),ie!==0?V.blitFramebuffer(et,gt,et+Je,gt+Ve,tt,Rt,tt+Je,Rt+Ve,V.COLOR_BUFFER_BIT,V.NEAREST):Pi?V.copyTexSubImage3D(nt,We,tt,Rt,Qt+Pn,et,gt,Je,Ve):V.copyTexSubImage2D(nt,We,tt,Rt,et,gt,Je,Ve);Ie.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Pi?P.isDataTexture||P.isData3DTexture?V.texSubImage3D(nt,We,tt,Rt,Qt,Je,Ve,Xe,zt,ln,Wt.data):W.isCompressedArrayTexture?V.compressedTexSubImage3D(nt,We,tt,Rt,Qt,Je,Ve,Xe,zt,Wt.data):V.texSubImage3D(nt,We,tt,Rt,Qt,Je,Ve,Xe,zt,ln,Wt):P.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,We,tt,Rt,Je,Ve,zt,ln,Wt.data):P.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,We,tt,Rt,Wt.width,Wt.height,zt,Wt.data):V.texSubImage2D(V.TEXTURE_2D,We,tt,Rt,Je,Ve,zt,ln,Wt);Ie.pixelStorei(V.UNPACK_ROW_LENGTH,pn),Ie.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ct),Ie.pixelStorei(V.UNPACK_SKIP_PIXELS,Ci),Ie.pixelStorei(V.UNPACK_SKIP_ROWS,mn),Ie.pixelStorei(V.UNPACK_SKIP_IMAGES,cr),We===0&&W.generateMipmaps===!0&&W.mipmapsAutoUpdate===!0&&V.generateMipmap(nt),Ie.unbindTexture()},this.initRenderTarget=function(P){it.get(P).__webglFramebuffer===void 0&&ot.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?ot.setTextureCube(P,0):P.isData3DTexture?ot.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?ot.setTexture2DArray(P,0):ot.setTexture2D(P,0),Ie.unbindTexture()},this.resetState=function(){le=0,K=0,te=null,Ie.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=It._getDrawingBufferColorSpace(e),t.unpackColorSpace=It._getUnpackColorSpace()}}const Kg={type:"change"},rf={type:"start"},rv={type:"end"},ec=new Mc,Zg=new sr,sw=Math.cos(70*Yx.DEG2RAD),_n=new H,$n=2*Math.PI,Ht={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},zh=1e-6;class aw extends uS{constructor(e,t=null){super(e,t),this.state=Ht.NONE,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zs.ROTATE,MIDDLE:Zs.DOLLY,RIGHT:Zs.PAN},this.touches={ONE:$s.ROTATE,TWO:$s.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new Or,this._lastTargetPosition=new H,this._quat=new Or().setFromUnitVectors(e.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new bg,this._sphericalDelta=new bg,this._scale=1,this._panOffset=new H,this._rotateStart=new Fe,this._rotateEnd=new Fe,this._rotateDelta=new Fe,this._panStart=new Fe,this._panEnd=new Fe,this._panDelta=new Fe,this._dollyStart=new Fe,this._dollyEnd=new Fe,this._dollyDelta=new Fe,this._dollyDirection=new H,this._mouse=new Fe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=lw.bind(this),this._onPointerDown=ow.bind(this),this._onPointerUp=cw.bind(this),this._onContextMenu=gw.bind(this),this._onMouseWheel=dw.bind(this),this._onKeyDown=fw.bind(this),this._onTouchStart=pw.bind(this),this._onTouchMove=mw.bind(this),this._onMouseDown=uw.bind(this),this._onMouseMove=hw.bind(this),this._interceptControlDown=vw.bind(this),this._interceptControlUp=_w.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Ht.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Kg),this.update(),this.state=Ht.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;_n.copy(t).sub(this.target),_n.applyQuaternion(this._quat),this._spherical.setFromVector3(_n),this.autoRotate&&this.state===Ht.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(r)&&isFinite(a)&&(r<-Math.PI?r+=$n:r>Math.PI&&(r-=$n),a<-Math.PI?a+=$n:a>Math.PI&&(a-=$n),r<=a?this._spherical.theta=Math.max(r,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+a)/2?Math.max(r,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=c!=this._spherical.radius}if(_n.setFromSpherical(this._spherical),_n.applyQuaternion(this._quatInverse),t.copy(this.target).add(_n),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const h=_n.length();c=this._clampDistance(h*this._scale);const f=h-c;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),l=!!f}else if(this.object.isOrthographicCamera){const h=new H(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=f!==this.object.zoom;const p=new H(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(h),this.object.updateMatrixWorld(),c=_n.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(ec.origin.copy(this.object.position),ec.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ec.direction))<sw?this.object.lookAt(this.target):(Zg.setFromNormalAndCoplanarPoint(this.object.up,this.target),ec.intersectPlane(Zg,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>zh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>zh||this._lastTargetPosition.distanceToSquared(this.target)>zh?(this.dispatchEvent(Kg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?$n/60*this.autoRotateSpeed*e:$n/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){_n.setFromMatrixColumn(t,0),_n.multiplyScalar(-e),this._panOffset.add(_n)}_panUp(e,t){this.screenSpacePanning===!0?_n.setFromMatrixColumn(t,1):(_n.setFromMatrixColumn(t,0),_n.crossVectors(this.object.up,_n)),_n.multiplyScalar(e),this._panOffset.add(_n)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;_n.copy(a).sub(this.target);let l=_n.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),a=e-r.left,l=t-r.top,c=r.width,h=r.height;this._mouse.x=a/c*2-1,this._mouse.y=-(l/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft($n*this._rotateDelta.x/t.clientHeight),this._rotateUp($n*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp($n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-$n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft($n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-$n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(r,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(r,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(r*r+a*a);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),a=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(a,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft($n*this._rotateDelta.x/t.clientHeight),this._rotateUp($n*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(r,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(r*r+a*a);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,h=(e.pageY+t.y)*.5;this._updateZoomParameters(c,h)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Fe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function ow(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function lw(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function cw(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(rv),this.state=Ht.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function uw(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Zs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Ht.DOLLY;break;case Zs.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ht.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ht.ROTATE}break;case Zs.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ht.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ht.PAN}break;default:this.state=Ht.NONE}this.state!==Ht.NONE&&this.dispatchEvent(rf)}function hw(s){switch(this.state){case Ht.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Ht.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Ht.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function dw(s){this.enabled===!1||this.enableZoom===!1||this.state!==Ht.NONE||(s.preventDefault(),this.dispatchEvent(rf),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(rv))}function fw(s){this.enabled!==!1&&this._handleKeyDown(s)}function pw(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case $s.ROTATE:if(this.enableRotate===!1){this.state=Ht.NONE;break}this._handleTouchStartRotate(s),this.state=Ht.TOUCH_ROTATE;break;case $s.PAN:if(this.enablePan===!1){this.state=Ht.NONE;break}this._handleTouchStartPan(s),this.state=Ht.TOUCH_PAN;break;default:this.state=Ht.NONE}break;case 2:switch(this.touches.TWO){case $s.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Ht.TOUCH_DOLLY_PAN;break;case $s.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Ht.TOUCH_DOLLY_ROTATE;break;default:this.state=Ht.NONE}break;default:this.state=Ht.NONE}this.state!==Ht.NONE&&this.dispatchEvent(rf)}function mw(s){switch(this._trackPointer(s),this.state){case Ht.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Ht.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Ht.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Ht.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Ht.NONE}}function gw(s){this.enabled!==!1&&s.preventDefault()}function vw(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function _w(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Jg({theme:s="dark",heatmap:e="pressure",assetsLayer:t={pipes:!0,valves:!0,tanks:!0,sensors:!0,contour:!0},isolatedPipe:r=!1,simTime:a=14,currentSim:l={label:"14:00 - Giờ bình thường",flow:145.8,pressure:3.24},compact:c=!1,onSelectAsset:h}){const f=Ut.useRef(null),p=Ut.useRef(null),g=Ut.useRef(null),S=Ut.useRef(null),_=Ut.useRef(null),x=Ut.useRef(null),T=Ut.useRef([]),b=Ut.useRef([]),[y,M]=Ut.useState(null);Ut.useEffect(()=>{const C=f.current;if(!C)return;const F=C.clientWidth||900,D=C.clientHeight||580,E=new ly;S.current=E;const R=s==="dark";E.background=new bt(R?792880:16317180),E.fog=new qd(R?792880:15857145,.0018);const X=new wi(45,F/D,1,1e3);X.position.set(130,120,160),g.current=X;const O=new rw({antialias:!0,alpha:!0,powerPreference:"high-performance"});O.setSize(F,D),O.setPixelRatio(Math.min(window.devicePixelRatio,2)),O.shadowMap.enabled=!0,O.shadowMap.type=i0,_.current=O,C.innerHTML="",C.appendChild(O.domElement);const G=new aw(X,O.domElement);G.enableDamping=!0,G.dampingFactor=.06,G.maxPolarAngle=Math.PI/2-.05,G.minDistance=25,G.maxDistance=450,G.target.set(0,12,0),p.current=G;const Z=new aS(R?12248829:16777215,R?1.35:1.15);E.add(Z);const se=new Tg(16777215,R?2:2.2);se.position.set(100,200,110),se.castShadow=!0,se.shadow.mapSize.width=2048,se.shadow.mapSize.height=2048,se.shadow.camera.near=10,se.shadow.camera.far=500,se.shadow.camera.left=-150,se.shadow.camera.right=150,se.shadow.camera.top=150,se.shadow.camera.bottom=-150,E.add(se);const k=new Tg(R?3718648:165063,R?1.2:.6);k.position.set(-120,80,-100),E.add(k);const ne=new iS(R?3718648:16777215,R?988970:9741240,R?.75:.85);E.add(ne);const le=new cS(320,32,R?165063:4674921,R?1981066:9741240);le.position.y=0,E.add(le);const K=new go(100,140),te=new On({color:R?165063:959977,roughness:.1,metalness:.7,transparent:!0,opacity:R?.85:.75}),q=new Zt(K,te);q.rotation.x=-Math.PI/2,q.position.set(100,.2,0),q.receiveShadow=!0,E.add(q),b.current=[];const Y=(ee,Ee,je,ce,ye,xe)=>{const Ne=new B0;ee.forEach(([Lt,ft],Pt)=>{Pt===0?Ne.moveTo(Lt,ft):Ne.lineTo(Lt,ft)}),Ne.closePath();const we={depth:Ee,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.6,bevelThickness:.6},st=new Jd(Ne,we);st.rotateX(Math.PI/2);const Ye=new On({color:je,transparent:!0,opacity:R?.45:.65,roughness:R?.2:.1,metalness:R?.3:.1,emissive:R?je:0,emissiveIntensity:R?.25:0}),Ze=new Zt(st,Ye);Ze.position.y=0,Ze.castShadow=!0,Ze.receiveShadow=!0,Ze.userData={name:ce,id:ye,type:"DMA",data:xe};const dt=new hg(st),Mt=R?je===3900150?6333946:je===1096065?3462041:16498468:je===3900150?1920728:je===1096065?292951:11817737,V=new Pd(dt,new pc({color:Mt,linewidth:2.5}));return Ze.add(V),E.add(Ze),b.current.push(Ze),Ze};Y([[-80,-20],[-25,-20],[-15,60],[-70,60]],6,3900150,"DMA 1 - Khu Biệt Thự Phía Nam","DMA-01",{name:"DMA 1 - Khu Biệt Thự Phía Nam",id:"DMA-01",type:"Phân Vùng Thủy Lực (DMA)",status:"Vận hành tối ưu",pressure:`${(l.pressure-.1).toFixed(2)} bar`,flow:`${(l.flow*.33).toFixed(1)} m³/h`,elevation:"+15.0m ASL",households:"320 hộ dân",nrw:"11.8%",headloss:"0.14 m/km",material:"Ductile Iron & HDPE",dma:"DMA 1"}),Y([[-15,-25],[55,-25],[65,55],[-5,55]],10,1096065,"DMA 2 - Cụm Trung Tâm & Công Viên","DMA-02",{name:"DMA 2 - Cụm Trung Tâm & Công Viên",id:"DMA-02",type:"Phân Vùng Thủy Lực (DMA)",status:r?"Đã cô lập qua PRV-02":"Ổn định",pressure:r?"2.35 bar (Giảm tải)":`${l.pressure.toFixed(2)} bar`,flow:r?"22.0 m³/h":`${(l.flow*.43).toFixed(1)} m³/h`,elevation:"+22.0m ASL",households:"450 hộ dân",nrw:"13.2%",headloss:"0.19 m/km",material:"Ductile Iron D150-D200",dma:"DMA 2"}),Y([[-40,-85],[50,-85],[55,-35],[-30,-35]],18,16096779,"DMA 3 - Khu Biệt Thự Ven Hồ","DMA-03",{name:"DMA 3 - Khu Biệt Thự Ven Hồ",id:"DMA-03",type:"Phân Vùng Thủy Lực (DMA)",status:"Áp lực cao (Cần giám sát)",pressure:`${(l.pressure+.2).toFixed(2)} bar`,flow:`${(l.flow*.24).toFixed(1)} m³/h`,elevation:"+45.0m ASL (Đỉnh đồi)",households:"280 hộ dân",nrw:"10.5%",headloss:"0.22 m/km",material:"HDPE D110-D160",dma:"DMA 3"});const U=new Ur;E.add(U),T.current=[];const J=(ee,Ee,je,ce,ye,xe,Ne)=>{const we=new D0(ee),st=new _c(we,50,Ee,16,!1),Ye=new On({color:je,roughness:.18,metalness:.35,transparent:!0,opacity:R?.52:.65,wireframe:!1,depthWrite:!0}),Ze=new Zt(st,Ye);Ze.castShadow=!0,Ze.receiveShadow=!0,Ze.userData={name:ce,id:ye,type:"Pipe",data:Ne},U.add(Ze),b.current.push(Ze);const dt=new _c(we,50,Ee*.72,12,!1),Mt=new Cd({color:R?165063:3718648,transparent:!0,opacity:R?.35:.45}),V=new Zt(dt,Mt);if(U.add(V),xe){const Lt=ye==="PIPE-MAIN-01"?16:ye==="PIPE-HILL-02"?14:9,ft=new so(Ee*1.75,14,14),Pt=new $d(Ee*1.55,Ee*3.2,12),Ie=new On({color:R?3718648:165063,emissive:R?65535:959977,emissiveIntensity:R?3.6:2.4,roughness:.1,metalness:.2}),Vt=new On({color:R?8246268:223649,emissive:R?3718648:165063,emissiveIntensity:R?3.2:2.2,roughness:.1,metalness:.3}),it=[];for(let ot=0;ot<Lt;ot++){const I=ot%2===1,w=new Zt(I?Pt:ft,I?Vt:Ie);w.renderOrder=99,E.add(w),it.push({mesh:w,curve:we,t:ot/Lt,speed:ye==="PIPE-HILL-02"?.0055:ye==="PIPE-MAIN-01"?.005:.0045,isArrow:I,pulseScale:!0})}T.current.push(...it)}return Ze};if(t.pipes&&(J([new H(-105,5,10),new H(-55,7,10),new H(-20,7.5,10),new H(20,11,10),new H(65,11,10)],1.8,165063,"Tuyến Ống Truyền Tải Chính D200","PIPE-MAIN-01",!0,{name:"Tuyến Ống Truyền Tải Chính D200",id:"PIPE-MAIN-01",type:"Ống Truyền Tải Thủy Lực",status:"Tối ưu (Vận tốc 1.15 m/s)",diameter:"DN200",material:"Gang Dẻo (Ductile Iron K9)",length:"1,850 m",flow:`${l.flow.toFixed(1)} m³/h`,pressure:`${l.pressure.toFixed(2)} bar`,elevation:"+12.5m -> +22.0m",headloss:"0.16 m/km",dma:"Liên vùng (Đầu mối -> DMA 1 -> DMA 2)"}),J([new H(-20,7.5,10),new H(-15,10,-25),new H(5,13,-65),new H(32,17,-95)],1.4,959977,"Tuyến Ống Đẩy Đồi Cao D150","PIPE-HILL-02",!0,{name:"Tuyến Ống Đẩy Đồi Cao D150",id:"PIPE-HILL-02",type:"Ống Đẩy Trạm Bơm Lên Đài Nước",status:"Vận hành liên tục",diameter:"DN150",material:"Gang Dẻo (Ductile Iron)",length:"1,120 m",flow:"42.0 m³/h",pressure:"3.45 bar",elevation:"+15.0m -> +45.0m (Leo dốc)",headloss:"0.24 m/km",dma:"DMA 3"}),J([new H(20,11,10),new H(20,11,35),new H(20,11,48)],1.2,r?6583435:1096065,"Tuyến Nhánh Phân Phối DMA 2","PIPE-BRANCH-03",!r,{name:"Tuyến Nhánh Phân Phối DMA 2",id:"PIPE-BRANCH-03",type:"Ống Phân Phối D150",status:r?"Đã cô lập (Ngắt dòng qua PRV-02)":"Hoạt động bình thường",diameter:"DN150",material:"Nhựa HDPE PE100",length:"750 m",flow:r?"0.0 m³/h":"62.4 m³/h",pressure:r?"2.10 bar":"3.20 bar",elevation:"+22.0m ASL",headloss:r?"0.00 m/km":"0.18 m/km",dma:"DMA 2"})),t.tanks){const ee=new Ur;ee.position.set(-105,0,10);const Ee=new os(16,8,14),je=new On({color:R?988970:14870768,roughness:.4}),ce=new Zt(Ee,je);ce.position.y=4,ee.add(ce);const ye=new Oi(4,4,10,16),xe=new On({color:165063,metalness:.7,roughness:.2}),Ne=new Zt(ye,xe);Ne.rotation.x=Math.PI/2,Ne.position.set(0,7,0),ee.add(Ne),ee.userData={name:"Trạm Bơm Tăng Áp Tổng P1",id:"PUMP-01",type:"Trạm Bơm Thủy Lực Đầu Mối",data:{name:"Trạm Bơm Tăng Áp Tổng P1",id:"PUMP-01",type:"Trạm Bơm Thủy Lực Đầu Mối",status:"Hoạt động 100% (2 tổ máy)",pressure:"3.82 bar",flow:`${l.flow.toFixed(1)} m³/h`,power:"45 kW (Biến tần VFD)",elevation:"+12.5m ASL",rpm:"1,480 RPM",head:"42.0 m cột nước",dma:"Khu Đầu Mối Nhà Máy Nước"}},E.add(ee),b.current.push(ce,Ne);const we=new Ur;we.position.set(32,0,-95);const st=new Oi(24,35,16,32),Ye=new On({color:R?1516884:6583435,roughness:.6,metalness:.2}),Ze=new Zt(st,Ye);Ze.position.y=8,Ze.receiveShadow=!0,we.add(Ze);const dt=new hg(st),Mt=new Pd(dt,new pc({color:R?3718648:3359061,linewidth:1.5}));Ze.add(Mt);const V=new Oi(17,17,2.5,32),Lt=new On({color:R?3359061:13358561,roughness:.4,metalness:.3}),ft=new Zt(V,Lt);ft.position.y=17.25,ft.receiveShadow=!0,ft.castShadow=!0,we.add(ft);const Pt=new Oi(.8,.8,10,8),Ie=new On({color:R?9741240:4674921,metalness:.8,roughness:.2});[[-5.5,-5.5],[5.5,-5.5],[-5.5,5.5],[5.5,5.5]].forEach(([ke,pe])=>{const me=new Zt(Pt,Ie);me.position.set(ke,23.5,pe),me.castShadow=!0,we.add(me)});const Vt=new Oi(1.6,1.6,12,16),it=new On({color:959977,metalness:.6,roughness:.3}),ot=new Zt(Vt,it);ot.position.set(0,22.5,0),we.add(ot);const I=new Oi(10.5,10.5,14,32),w=new On({color:165063,metalness:.6,roughness:.2}),re=new Zt(I,w);re.position.y=35.5,re.castShadow=!0,we.add(re);const be=new so(10.5,32,16,0,Math.PI*2,0,Math.PI/2),ve=new On({color:R?3718648:14742270,metalness:.4,roughness:.25}),Le=new Zt(be,ve);Le.position.y=42.5,Le.castShadow=!0,we.add(Le),we.userData={name:"Đài Nước Điều Áp Đồi Cao T1",id:"TANK-01",type:"Bể Chứa & Đài Nước Tự Chảy",data:{name:"Đài Nước Điều Áp Đồi Cao T1",id:"TANK-01",type:"Bể Chứa & Đài Nước Tự Chảy",status:"78% Dung Tích (3,900 m³)",capacity:"5,000 m³",level:"18.4 m (Cột nước đài)",elevation:"+45.0m ASL (Đỉnh đồi)",inflow:"42.0 m³/h",outflow:"38.5 m³/h",pressure:"4.10 bar (Áp lực tự chảy)",material:"Bê tông cốt thép dự ứng lực",dma:"DMA 3 - Ven Hồ"}},E.add(we),b.current.push(re,Le,ft)}if(t.valves){const ee=(Ee,je,ce,ye,xe)=>{const Ne=new Ur;Ne.position.copy(Ee);const we=new os(4,4,4),st=new On({color:ye?14427686:16096779,metalness:.6,roughness:.3}),Ye=new Zt(we,st);Ne.add(Ye);const Ze=new Oi(.8,.8,4,8),dt=new On({color:14251782}),Mt=new Zt(Ze,dt);Mt.position.y=3,Ne.add(Mt);const V=new ef(1.6,.4,8,16),Lt=new Zt(V,dt);return Lt.rotation.x=Math.PI/2,Lt.position.y=5,Ne.add(Lt),Ne.userData={name:je,id:ce,type:"PRV",data:xe},E.add(Ne),b.current.push(Ye),Ne};ee(new H(-20,8.5,10),"Van Giảm Áp Thủy Lực PRV-01","PRV-01",!1,{name:"Van Giảm Áp Thủy Lực PRV-01",id:"PRV-01",type:"Van Thủy Lực Tự Động",status:"Đang điều tiết (Mở 72%)",diameter:"DN150",inletPressure:"3.82 bar",outletPressure:"3.12 bar",flow:"48.2 m³/h",elevation:"+18.0m ASL",material:"Gang Cầu FCD",dma:"DMA 1"}),ee(new H(20,12,10),"Van Giảm Áp Thủy Lực PRV-02","PRV-02",r,{name:"Van Giảm Áp Thủy Lực PRV-02",id:"PRV-02",type:"Van Thủy Lực Tự Động",status:r?"ĐÃ ĐÓNG CÔ LẬP (MÔ PHỎNG)":"Đang điều tiết (Mở 85%)",diameter:"DN200",inletPressure:"3.82 bar",outletPressure:r?"0.00 bar":"3.22 bar",flow:r?"0.0 m³/h":"62.4 m³/h",elevation:"+21.5m ASL",material:"Gang Cầu FCD",dma:"DMA 2"})}const Ce=[];if(t.sensors){const ee=(Ee,je,ce,ye,xe)=>{const Ne=new so(2,16,16),we=new On({color:je,emissive:je,emissiveIntensity:.6}),st=new Zt(Ne,we);st.position.copy(Ee),E.add(st);const Ye=new Qd(2.2,3.2,24),Ze=new Cd({color:je,side:Bi,transparent:!0,opacity:.8}),dt=new Zt(Ye,Ze);dt.rotation.x=Math.PI/2,dt.position.copy(Ee),E.add(dt),Ce.push({ring:dt,scale:1}),st.userData={name:ce,id:ye,type:"Sensor",data:xe},b.current.push(st)};ee(new H(-45,8.5,10),165063,"Cảm Biến Áp Lực IoT SN-01","SN-01",{name:"Cảm Biến Áp Lực IoT SN-01",id:"SN-01",type:"Cảm Biến Áp Lực 0-10 bar",status:"Bình thường",pressure:"3.12 bar",elevation:"+17.2m ASL",battery:"94%",dma:"DMA 1"}),ee(new H(20,12,48),15680580,"Cảm Biến Sụt Áp & Điểm Rò Rỉ SN-02","SN-02",{name:"Cảm Biến Sụt Áp & Điểm Rò Rỉ SN-02",id:"SN-02",type:"Cảm Biến Cảnh Báo Sụt Áp",status:"Cảnh báo sụt áp cục bộ (2.1 bar)",pressure:"2.10 bar",elevation:"+20.5m ASL",battery:"88%",dma:"DMA 2"})}const Q=new lS,_e=new Fe,Me=ee=>{var ce,ye;const Ee=O.domElement.getBoundingClientRect();_e.x=(ee.clientX-Ee.left)/Ee.width*2-1,_e.y=-((ee.clientY-Ee.top)/Ee.height)*2+1,Q.setFromCamera(_e,X);const je=Q.intersectObjects(b.current,!0);if(je.length>0){let xe=je[0].object;for(;xe&&!((ce=xe.userData)!=null&&ce.data)&&xe.parent;)xe=xe.parent;xe&&((ye=xe.userData)!=null&&ye.data)&&h&&h(xe.userData.data)}},He=ee=>{var ce,ye;const Ee=O.domElement.getBoundingClientRect();_e.x=(ee.clientX-Ee.left)/Ee.width*2-1,_e.y=-((ee.clientY-Ee.top)/Ee.height)*2+1,Q.setFromCamera(_e,X);const je=Q.intersectObjects(b.current,!0);if(je.length>0){let xe=je[0].object;for(;xe&&!((ce=xe.userData)!=null&&ce.name)&&xe.parent;)xe=xe.parent;if(xe&&((ye=xe.userData)!=null&&ye.name)){O.domElement.style.cursor="pointer",M(xe.userData.name);return}}O.domElement.style.cursor="grab",M(null)};O.domElement.addEventListener("pointerdown",Me),O.domElement.addEventListener("pointermove",He);const Se=new H(0,1,0),Ge=()=>{x.current=requestAnimationFrame(Ge);const ee=Date.now();T.current.forEach(Ee=>{Ee.t=(Ee.t+Ee.speed)%1;const je=Ee.curve.getPointAt(Ee.t);if(je){if(Ee.mesh.position.copy(je),Ee.isArrow){const ce=Ee.curve.getTangentAt(Ee.t);ce&&Ee.mesh.quaternion.setFromUnitVectors(Se,ce.normalize())}if(Ee.pulseScale){const ce=1+.18*Math.sin(ee*.007+Ee.t*Math.PI*6);Ee.mesh.scale.set(ce,ce,ce)}}}),Ce.forEach(Ee=>{Ee.scale+=.02,Ee.scale>3&&(Ee.scale=1),Ee.ring.scale.set(Ee.scale,Ee.scale,Ee.scale),Ee.ring.material.opacity=Math.max(0,1-Ee.scale/3)}),G.update(),O.render(E,X)};Ge();const yt=()=>{if(!C)return;const ee=C.clientWidth,Ee=C.clientHeight;X.aspect=ee/Ee,X.updateProjectionMatrix(),O.setSize(ee,Ee)};return window.addEventListener("resize",yt),()=>{window.removeEventListener("resize",yt),O.domElement&&(O.domElement.removeEventListener("pointerdown",Me),O.domElement.removeEventListener("pointermove",He)),x.current&&cancelAnimationFrame(x.current),_.current&&_.current.dispose(),T.current.forEach(ee=>E.remove(ee.mesh))}},[s,e,t,r,a]);const N=C=>{const F=g.current,D=p.current;!F||!D||(C==="iso"?(F.position.set(130,120,160),D.target.set(0,12,0)):C==="top"?(F.position.set(0,240,.1),D.target.set(0,0,0)):C==="hill"?(F.position.set(-25,60,-170),D.target.set(32,28,-95)):C==="pump"&&(F.position.set(-140,35,40),D.target.set(-105,5,10)),D.update())},L=C=>{const F=g.current,D=p.current;if(!F||!D)return;const E=new H;F.getWorldDirection(E),F.position.addScaledVector(E,C*25),D.update()};return v.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",minHeight:c?"440px":"580px",overflow:"hidden"},children:[v.jsx("div",{ref:f,style:{width:"100%",height:"100%",minHeight:c?"440px":"580px"}}),v.jsxs("div",{style:{position:"absolute",top:"14px",right:"14px",display:"flex",flexDirection:"column",gap:"6px",zIndex:30},children:[v.jsxs("div",{className:"qatium-hud-pill-group",style:{flexDirection:c?"row":"column",padding:"4px",gap:"4px"},children:[v.jsxs("button",{className:"qatium-hud-btn",onClick:()=>N("iso"),title:"Góc 3D Phối cảnh tiêu chuẩn (Isometric)",style:{padding:"5px 8px"},children:[v.jsx(lc,{size:13}),v.jsx("span",{children:c?"3D":"3D Isometric"})]}),v.jsxs("button",{className:"qatium-hud-btn",onClick:()=>N("top"),title:"Góc nhìn thẳng từ trên xuống (2D Top-Down)",style:{padding:"5px 8px"},children:[v.jsx(t0,{size:13}),v.jsx("span",{children:c?"2D":"Mặt bằng 2D"})]}),!c&&v.jsxs(v.Fragment,{children:[v.jsxs("button",{className:"qatium-hud-btn",onClick:()=>N("hill"),title:"Góc cận cảnh Đài Nước Đồi Cao T1",style:{padding:"6px 10px",width:"100%",justifyContent:"flex-start"},children:[v.jsx(Um,{size:14}),v.jsx("span",{children:"Đài Nước T1"})]}),v.jsxs("button",{className:"qatium-hud-btn",onClick:()=>N("pump"),title:"Góc cận cảnh Trạm Bơm P1",style:{padding:"6px 10px",width:"100%",justifyContent:"flex-start"},children:[v.jsx(Um,{size:14}),v.jsx("span",{children:"Trạm Bơm P1"})]})]})]}),v.jsxs("div",{className:"qatium-hud-pill-group",style:{display:"flex",justifyContent:"space-between",padding:"4px"},children:[v.jsx("button",{className:"qatium-hud-btn",onClick:()=>L(1),title:"Phóng to",style:{padding:"5px 7px"},children:v.jsx(ax,{size:13})}),v.jsx("button",{className:"qatium-hud-btn",onClick:()=>L(-1),title:"Thu nhỏ",style:{padding:"5px 7px"},children:v.jsx(ox,{size:13})}),v.jsx("button",{className:"qatium-hud-btn",onClick:()=>N("iso"),title:"Đặt lại camera",style:{padding:"5px 7px"},children:v.jsx(n0,{size:13})})]})]}),v.jsxs("div",{style:{position:"absolute",bottom:c?"14px":"80px",left:"16px",pointerEvents:"none",display:"flex",flexDirection:"column",gap:"4px",zIndex:30},children:[y&&v.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.92)",color:"#38bdf8",padding:"5px 10px",borderRadius:"6px",fontSize:"11.5px",fontWeight:"600",border:"1px solid rgba(56, 189, 248, 0.4)",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.3)",display:"inline-flex",alignItems:"center",gap:"6px"},children:[v.jsx(lc,{size:12}),v.jsx("span",{children:c?y:`Bấm để kiểm tra: ${y}`})]}),!c&&v.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.75)",color:"#cbd5e1",padding:"4px 10px",borderRadius:"4px",fontSize:"11px",backdropFilter:"blur(4px)",border:"1px solid rgba(255, 255, 255, 0.1)"},children:["🖱️ ",v.jsx("b",{children:"Xoay 360°:"})," Kéo chuột trái · ",v.jsx("b",{children:"Di chuyển:"})," Kéo chuột phải · ",v.jsx("b",{children:"Thu/Phóng:"})," Cuộn chuột"]})]})]})}function xw(){const[s,e]=Ut.useState("overview"),[t,r]=Ut.useState("DMA 2"),[a,l]=Ut.useState("24h"),[c,h]=Ut.useState(null),[f,p]=Ut.useState({pipes:!0,valves:!0,sensors:!0}),[g,S]=Ut.useState(""),[_,x]=Ut.useState([{id:1,type:"Áp lực cao bất thường",location:"Trạm bơm Phân khu 3 (DMA 3)",time:"14:22",status:"High Pressure",severity:"danger",handled:!1},{id:2,type:"Nghi vấn rò rỉ đêm (MNF)",location:"Tuyến ống chính Zone A (DMA 1)",time:"13:50",status:"Leak Suspected",severity:"warning",handled:!1},{id:3,type:"Sụt áp cục bộ",location:"Khu biệt thự BT2 - Cụm B (DMA 2)",time:"12:15",status:"Low Pressure",severity:"warning",handled:!0},{id:4,type:"Độ đục vượt chuẩn nhẹ (NTU)",location:"Cửa xả Bể chứa ngầm Splendora",time:"10:04",status:"Water Quality",severity:"info",handled:!1}]),[T,b]=Ut.useState(!1),[y,M]=Ut.useState(null),[N,L]=Ut.useState("3d"),[C,F]=Ut.useState("dark"),[D,E]=Ut.useState("pressure"),[R,X]=Ut.useState({pipes:!0,valves:!0,tanks:!0,sensors:!0,contour:!0}),[O,G]=Ut.useState(14),[Z,se]=Ut.useState(!1),[k,ne]=Ut.useState(null),[le,K]=Ut.useState(!1);Ut.useEffect(()=>{let ee;return Z&&(ee=setInterval(()=>{G(Ee=>(Ee+1)%24)},1400)),()=>clearInterval(ee)},[Z]);const q=(ee=>ee>=2&&ee<=4?{label:"03:00 - Đêm (MNF Rò rỉ)",flow:58.4,pressure:3.72,status:"Cảnh báo rò rỉ đêm",nrw:"16.2%"}:ee>=6&&ee<=8?{label:"07:30 - Cao điểm sáng",flow:168.2,pressure:3.05,status:"Phụ tải tăng cao",nrw:"11.8%"}:ee>=18&&ee<=20?{label:"19:00 - Cao điểm tối",flow:174.5,pressure:2.92,status:"Phụ tải sinh hoạt",nrw:"12.1%"}:{label:`${ee<10?"0"+ee:ee}:00 - Giờ bình thường`,flow:145.8,pressure:3.24,status:"Vận hành ổn định",nrw:"12.5%"})(O),Y=ee=>{M(ee),setTimeout(()=>M(null),3e3)},U=ee=>{x(Ee=>Ee.map(je=>{if(je.id===ee){const ce=!je.handled;return Y(ce?`Đã điều động kỹ thuật viên xử lý: ${je.type}`:`Đã hoàn tác trạng thái sự cố: ${je.type}`),{...je,handled:ce}}return je}))},J=(ee="water_management_report.csv")=>{const je=encodeURI(`data:text/csv;charset=utf-8,\uFEFFDiem Do,Phan Khu,Luu Luong (m3/h),Ap Luc (bar),Trang Thai
FM-01 (Dau vao Tong),Nha May Nuoc,145.8,3.8,Toi uu
PRV-02 (Giam ap),DMA 1,48.2,3.1,On dinh
PRV-03 (Giam ap),DMA 2,62.4,3.2,On dinh
FM-04 (Dong ho DMA),DMA 3,35.2,3.4,Canh bao Ap cao
SN-05 (Cam bien diem cut),DMA 2,0.0,2.1,Sut ap cuc bo
FM-06 (Ho Dieu Hoa),Splendora,18.5,2.9,Dang khoa
`),ce=document.createElement("a");ce.setAttribute("href",je),ce.setAttribute("download",ee),document.body.appendChild(ce),ce.click(),document.body.removeChild(ce),Y(`Đã xuất và tải về: ${ee}`)},Ce=()=>{window.print()},Q={"DMA 1":{name:"DMA 1 - Khu Biệt Thự Phía Nam",flow:"48.2 m³/h",pressure:"3.1 bar",households:320,nrw:"11.8%",status:"Bình thường"},"DMA 2":{name:"DMA 2 - Cụm Trung Tâm & Công Viên",flow:"62.4 m³/h",pressure:"3.2 bar",households:450,nrw:"13.2%",status:"Ổn định"},"DMA 3":{name:"DMA 3 - Khu Biệt Thự Ven Hồ",flow:"35.2 m³/h",pressure:"3.4 bar",households:280,nrw:"10.5%",status:"Cảnh báo áp lực"}},Me={"24h":{title:"Lưu Lượng Thủy Lực 24 Giờ (m³/h)",subtitle:"So sánh Lưu lượng Thực tế vs Đường Trung bình Baseline",points:[{label:"00h",actual:68,baseline:65,alert:!1},{label:"02h",actual:74,baseline:60,alert:!0,note:"MNF vượt chuẩn (+14 m³/h)"},{label:"04h",actual:62,baseline:60,alert:!1},{label:"06h",actual:110,baseline:105,alert:!1},{label:"08h",actual:172,baseline:160,alert:!0,note:"Đỉnh cao điểm sáng"},{label:"10h",actual:130,baseline:132,alert:!1},{label:"12h",actual:142,baseline:140,alert:!1},{label:"14h",actual:145.8,baseline:138,alert:!1},{label:"16h",actual:138,baseline:135,alert:!1},{label:"18h",actual:165,baseline:162,alert:!1},{label:"20h",actual:152,baseline:150,alert:!1},{label:"22h",actual:98,baseline:95,alert:!1}]},"7d":{title:"Lưu Lượng Thủy Lực 7 Ngày Qua (m³/ngày)",subtitle:"Xu hướng cấp nước theo ngày trong tuần",points:[{label:"Thứ 2",actual:3250,baseline:3200,alert:!1},{label:"Thứ 3",actual:3310,baseline:3220,alert:!1},{label:"Thứ 4",actual:3480,baseline:3250,alert:!0,note:"Tăng vọt giữa tuần (+7%)"},{label:"Thứ 5",actual:3290,baseline:3240,alert:!1},{label:"Thứ 6",actual:3380,baseline:3300,alert:!1},{label:"Thứ 7",actual:3620,baseline:3550,alert:!1},{label:"CN",actual:3590,baseline:3500,alert:!1}]},"30d":{title:"Lưu Lượng Thủy Lực 30 Ngày (m³/ngày)",subtitle:"Đường biến thiên chu kỳ tháng",points:[{label:"Tuần 1",actual:23100,baseline:22800,alert:!1},{label:"Tuần 2",actual:24500,baseline:23e3,alert:!0,note:"Đợt nắng nóng tăng tiêu thụ"},{label:"Tuần 3",actual:23200,baseline:22900,alert:!1},{label:"Tuần 4",actual:22800,baseline:22700,alert:!1}]}}[a],He=Math.max(...Me.points.map(ee=>Math.max(ee.actual,ee.baseline)))*1.15,Se=Math.min(...Me.points.map(ee=>Math.min(ee.actual,ee.baseline)))*.85,Ge=ee=>180-(ee-Se)/(He-Se)*160+10,yt=ee=>{const je=620/(Me.points.length-1);return Me.points.map((ce,ye)=>`${ye*je+40},${Ge(ce[ee])}`).join(" L ")};return v.jsxs("div",{className:"app-layout",children:[T&&v.jsx("div",{className:"sidebar-backdrop",onClick:()=>b(!1)}),v.jsxs("aside",{className:`app-sidebar ${T?"mobile-open":""}`,children:[v.jsxs("div",{className:"sidebar-header",children:[v.jsx("div",{className:"logo-badge",children:v.jsx(Wa,{size:22})}),v.jsxs("div",{children:[v.jsx("div",{className:"logo-title",children:"Smart Water"}),v.jsx("div",{className:"logo-sub",children:"IoT SCADA"})]})]}),v.jsxs("nav",{className:"sidebar-nav",children:[v.jsx("div",{className:"nav-label",children:"Nghiệp Vụ"}),v.jsxs("button",{className:`nav-item ${s==="overview"?"active":""}`,onClick:()=>{e("overview"),b(!1)},children:[v.jsx(El,{size:18}),v.jsx("span",{children:"1. Tổng quan"})]}),v.jsxs("button",{className:`nav-item ${s==="gis"?"active":""}`,onClick:()=>{e("gis"),b(!1)},children:[v.jsx(t0,{size:18}),v.jsx("span",{children:"2. Mạng GIS"})]}),v.jsxs("button",{className:`nav-item ${s==="telemetry"?"active":""}`,onClick:()=>{e("telemetry"),b(!1)},children:[v.jsx(ja,{size:18}),v.jsx("span",{children:"3. Áp & Lưu lượng"})]}),v.jsxs("button",{className:`nav-item ${s==="leaks"?"active":""}`,onClick:()=>{e("leaks"),b(!1)},children:[v.jsx(Tl,{size:18}),v.jsx("span",{children:"4. Thất thoát (NRW)"})]}),v.jsxs("button",{className:`nav-item ${s==="quality"?"active":""}`,onClick:()=>{e("quality"),b(!1)},children:[v.jsx(Wa,{size:18}),v.jsx("span",{children:"5. Chất lượng nước"})]}),v.jsx("div",{className:"nav-label",style:{marginTop:"16px"},children:"Báo Cáo"}),v.jsxs("button",{className:`nav-item ${s==="reports"?"active":""}`,onClick:()=>{e("reports"),b(!1)},children:[v.jsx(ah,{size:18}),v.jsx("span",{children:"6. Kiểm toán nước"})]})]}),v.jsxs("div",{className:"sidebar-footer",children:[v.jsxs("div",{className:"system-status",children:[v.jsx("span",{className:"status-dot"}),v.jsx("span",{children:"Trực tuyến: 48 node"})]}),v.jsx(ix,{size:14,color:"#94a3b8",style:{cursor:"pointer"},onClick:()=>Y("Đã đồng bộ lại 48 node")})]})]}),v.jsxs("div",{className:"main-wrapper",children:[v.jsxs("header",{className:"top-header",children:[v.jsxs("div",{className:"header-left-group",children:[v.jsx("button",{className:"mobile-menu-btn",onClick:()=>b(!T),"aria-label":"Toggle navigation menu",children:T?v.jsx(km,{size:20}):v.jsx(ex,{size:20})}),v.jsxs("div",{className:"header-search",children:[v.jsx(rx,{size:16}),v.jsx("input",{type:"text",placeholder:"Tìm trạm, DMA, cảm biến...",value:g,onChange:ee=>S(ee.target.value)})]})]}),v.jsxs("div",{className:"header-actions",children:[v.jsxs("button",{className:"action-btn",onClick:()=>J("Bao_Cao_Van_Hanh_Ngay.csv"),title:"Xuất báo cáo CSV",children:[v.jsx(ah,{size:15}),v.jsx("span",{children:"Xuất báo cáo"})]}),v.jsxs("button",{className:"action-btn",style:{position:"relative"},onClick:()=>Y("Cảnh báo: 1 sự cố áp cao tại DMA 3"),"aria-label":"Thông báo sự cố",title:"Xem thông báo",children:[v.jsx(Z_,{size:16}),v.jsx("span",{style:{position:"absolute",top:"6px",right:"8px",width:"7px",height:"7px",background:"#ef4444",borderRadius:"50%"}})]}),v.jsxs("div",{className:"user-profile",title:"Tài khoản kỹ sư",children:[v.jsx("div",{className:"user-avatar",children:"AD"}),v.jsxs("div",{className:"user-info",children:[v.jsx("span",{className:"user-name",children:"Kỹ sư trực"}),v.jsx("span",{className:"user-role",children:"Vận hành"})]})]})]})]}),v.jsxs("main",{className:"content-container",children:[s==="overview"&&v.jsxs(v.Fragment,{children:[v.jsxs("div",{className:"page-title-row",children:[v.jsxs("div",{children:[v.jsx("h1",{className:"page-title",children:"Giám sát Cấp nước"}),v.jsx("p",{className:"page-subtitle",children:"Áp lực, lưu lượng 3 DMA và thất thoát thời gian thực"})]}),v.jsx("div",{style:{display:"flex",gap:"8px"},children:v.jsxs("span",{className:"metric-badge badge-success",children:[v.jsx(Us,{size:13}),v.jsx("span",{children:"Trạm bơm chính: 100%"})]})})]}),v.jsxs("div",{className:"metrics-grid",children:[v.jsxs("div",{className:"metric-card",children:[v.jsxs("div",{className:"metric-header",children:[v.jsx("span",{children:"Lưu lượng cấp"}),v.jsx("div",{className:"metric-icon-wrap",style:{background:"#e0f2fe",color:"#0284c7"},children:v.jsx(Wa,{size:18})})]}),v.jsxs("div",{className:"metric-body",children:[v.jsx("span",{className:"metric-value",children:"145.8"}),v.jsx("span",{className:"metric-unit",children:"m³/h"})]}),v.jsx("div",{children:v.jsx("span",{className:"metric-badge badge-success",children:"↑ 3.2% định mức giờ"})})]}),v.jsxs("div",{className:"metric-card",children:[v.jsxs("div",{className:"metric-header",children:[v.jsx("span",{children:"Áp lực trung bình"}),v.jsx("div",{className:"metric-icon-wrap",style:{background:"#ecfdf5",color:"#10b981"},children:v.jsx(ja,{size:18})})]}),v.jsxs("div",{className:"metric-body",children:[v.jsx("span",{className:"metric-value",children:"3.2"}),v.jsx("span",{className:"metric-unit",children:"bar"})]}),v.jsx("div",{children:v.jsx("span",{className:"metric-badge badge-info",children:"Tối ưu: 2.8 - 3.5 bar"})})]}),v.jsxs("div",{className:"metric-card",children:[v.jsxs("div",{className:"metric-header",children:[v.jsx("span",{children:"Thất thoát (NRW)"}),v.jsx("div",{className:"metric-icon-wrap",style:{background:"#fef3c7",color:"#d97706"},children:v.jsx(Om,{size:18})})]}),v.jsx("div",{className:"metric-body",children:v.jsx("span",{className:"metric-value",children:"12.5%"})}),v.jsx("div",{children:v.jsx("span",{className:"metric-badge badge-success",children:"↓ 1.1% theo tuần"})})]}),v.jsxs("div",{className:"metric-card",children:[v.jsxs("div",{className:"metric-header",children:[v.jsx("span",{children:"Cảnh báo"}),v.jsx("div",{className:"metric-icon-wrap",style:{background:"#fee2e2",color:"#ef4444"},children:v.jsx(Tl,{size:18})})]}),v.jsxs("div",{className:"metric-body",children:[v.jsx("span",{className:"metric-value",style:{color:"#ef4444"},children:_.filter(ee=>!ee.handled).length}),v.jsx("span",{className:"metric-unit",children:"sự cố"})]}),v.jsx("div",{children:v.jsx("span",{className:"metric-badge badge-danger",children:"1 nghi vấn đêm"})})]})]}),v.jsxs("div",{className:"dashboard-main-grid",children:[v.jsxs("div",{className:"panel-card",children:[v.jsxs("div",{className:"panel-card-header",children:[v.jsxs("div",{className:"panel-card-title",children:[v.jsx(Q_,{size:17,color:"#0284c7"}),v.jsx("span",{children:"Sơ đồ phân vùng DMA"})]}),v.jsxs("div",{className:"panel-card-actions",children:[v.jsxs("div",{className:"qatium-hud-pill-group",style:{padding:"2px"},children:[v.jsx("button",{className:`qatium-hud-btn ${C==="dark"?"active":""}`,onClick:()=>F("dark"),style:{padding:"4px 8px",fontSize:"11.5px"},title:"Chế độ Digital Twin (Tối)",children:"Tối"}),v.jsx("button",{className:`qatium-hud-btn ${C==="light"?"active":""}`,onClick:()=>F("light"),style:{padding:"4px 8px",fontSize:"11.5px"},title:"Chế độ SCADA (Sáng)",children:"Sáng"})]}),v.jsx("button",{className:"btn-sm btn-secondary",onClick:()=>e("gis"),children:"Mở GIS →"})]})]}),v.jsxs("div",{className:`map-canvas-container ${C==="dark"?"dark-theme":"light-theme"}`,style:{minHeight:"440px",height:"440px",position:"relative"},children:[v.jsx(Jg,{theme:C,heatmap:D,assetsLayer:R,isolatedPipe:le,simTime:O,currentSim:q,compact:!0,onSelectAsset:ee=>{ee.dma&&(ee.dma.includes("DMA 1")||ee.dma==="DMA 1")?r("DMA 1"):ee.dma&&(ee.dma.includes("DMA 2")||ee.dma==="DMA 2")?r("DMA 2"):ee.dma&&(ee.dma.includes("DMA 3")||ee.dma==="DMA 3")&&r("DMA 3")}}),v.jsxs("div",{className:"map-overlay-badge",style:{zIndex:25,pointerEvents:"auto"},children:[v.jsx("div",{className:"map-overlay-title",children:Q[t].name}),v.jsxs("div",{className:"map-overlay-sub",children:["Lưu lượng: ",v.jsx("b",{children:Q[t].flow})," · Áp: ",v.jsx("b",{children:Q[t].pressure})," · NRW: ",v.jsx("b",{children:Q[t].nrw})]})]})]})]}),v.jsxs("div",{className:"panel-card",children:[v.jsxs("div",{className:"panel-card-header",children:[v.jsxs("div",{children:[v.jsxs("div",{className:"panel-card-title",children:[v.jsx(El,{size:17,color:"#0284c7"}),v.jsx("span",{children:"Thủy lực 24h & Cảnh báo"})]}),v.jsx("span",{style:{fontSize:"12px",color:"#64748b"},children:Me.subtitle})]}),v.jsxs("div",{className:"timeframe-group",children:[v.jsx("button",{className:`timeframe-btn ${a==="24h"?"active":""}`,onClick:()=>l("24h"),children:"24 Giờ"}),v.jsx("button",{className:`timeframe-btn ${a==="7d"?"active":""}`,onClick:()=>l("7d"),children:"7 Ngày"}),v.jsx("button",{className:`timeframe-btn ${a==="30d"?"active":""}`,onClick:()=>l("30d"),children:"30 Ngày"})]})]}),v.jsxs("div",{className:"line-chart-wrapper",children:[v.jsxs("div",{className:"line-chart-legend",children:[v.jsxs("div",{className:"legend-line-item",children:[v.jsx("div",{className:"line-sample-actual"}),v.jsx("span",{children:"Thực tế"})]}),v.jsxs("div",{className:"legend-line-item",children:[v.jsx("div",{className:"line-sample-baseline"}),v.jsx("span",{children:"Baseline"})]}),v.jsxs("div",{className:"legend-line-item",children:[v.jsx("div",{className:"line-sample-alert"}),v.jsx("span",{children:"Lệch chuẩn"})]})]}),v.jsxs("div",{style:{position:"relative",width:"100%",height:"220px",background:"#ffffff"},children:[v.jsxs("svg",{viewBox:"0 0 700 220",style:{width:"100%",height:"100%"},children:[v.jsx("line",{x1:"40",y1:"30",x2:"680",y2:"30",stroke:"#f1f5f9",strokeWidth:"1"}),v.jsx("line",{x1:"40",y1:"80",x2:"680",y2:"80",stroke:"#f1f5f9",strokeWidth:"1"}),v.jsx("line",{x1:"40",y1:"130",x2:"680",y2:"130",stroke:"#f1f5f9",strokeWidth:"1"}),v.jsx("line",{x1:"40",y1:"180",x2:"680",y2:"180",stroke:"#e2e8f0",strokeWidth:"1.5"}),v.jsx("path",{d:`M ${yt("baseline")}`,fill:"none",stroke:"#94a3b8",strokeWidth:"2.5",strokeDasharray:"6,5"}),v.jsx("path",{d:`M ${yt("actual")}`,fill:"none",stroke:"#0284c7",strokeWidth:"3.5",strokeLinecap:"round",strokeLinejoin:"round"}),Me.points.map((ee,Ee)=>{const ce=620/(Me.points.length-1),ye=Ee*ce+40,xe=Ge(ee.actual);return v.jsxs("g",{children:[ee.alert&&v.jsx("circle",{cx:ye,cy:xe,r:"9",fill:"rgba(239, 68, 68, 0.25)",stroke:"#ef4444",strokeWidth:"1.5"}),v.jsx("circle",{cx:ye,cy:xe,r:ee.alert?"5":"4",fill:ee.alert?"#ef4444":"#0284c7",stroke:"#ffffff",strokeWidth:"2",style:{cursor:"pointer"},onMouseEnter:()=>h(ee),onMouseLeave:()=>h(null)}),v.jsx("text",{x:ye,y:"202",textAnchor:"middle",fontSize:"11",fill:"#64748b",fontFamily:"var(--font-mono)",children:ee.label})]},Ee)})]}),c&&v.jsxs("div",{style:{position:"absolute",top:"10px",right:"20px",background:"#0f172a",color:"#ffffff",padding:"8px 12px",borderRadius:"8px",fontSize:"12px",boxShadow:"0 4px 12px rgba(0,0,0,0.15)",zIndex:10},children:[v.jsxs("div",{style:{fontWeight:"700",marginBottom:"2px"},children:["Thời điểm: ",c.label]}),v.jsxs("div",{children:["Thực tế: ",v.jsxs("b",{style:{color:"#38bdf8"},children:[c.actual," m³/h"]})]}),v.jsxs("div",{children:["Trung bình: ",v.jsxs("b",{children:[c.baseline," m³/h"]})]}),c.note&&v.jsxs("div",{style:{color:"#f87171",marginTop:"4px",fontWeight:"600"},children:["⚠ ",c.note]})]})]}),v.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"12px",color:"#64748b",borderTop:"1px solid #f1f5f9",paddingTop:"10px"},children:[v.jsxs("span",{children:["MNF đêm: ",v.jsx("b",{children:"65 m³/h"})," (Nguy cơ: ",">"," 70 m³/h)"]}),v.jsxs("span",{children:["Hệ số an toàn: ",v.jsx("b",{children:"1.15"})]})]})]})]})]}),v.jsxs("div",{className:"panel-card",children:[v.jsxs("div",{className:"panel-card-header",children:[v.jsxs("div",{className:"panel-card-title",children:[v.jsx(sx,{size:17,color:"#ef4444"}),v.jsx("span",{children:"Nhật ký sự cố SCADA"})]}),v.jsx("div",{className:"panel-card-actions",children:v.jsx("span",{className:"metric-badge badge-warning",children:"Chờ xử lý"})})]}),v.jsx("div",{className:"data-table-wrapper",children:v.jsxs("table",{className:"custom-table",children:[v.jsx("thead",{children:v.jsxs("tr",{children:[v.jsx("th",{children:"Mức độ"}),v.jsx("th",{children:"Sự cố"}),v.jsx("th",{children:"Vị trí"}),v.jsx("th",{children:"Giờ"}),v.jsx("th",{children:"Trạng thái"}),v.jsx("th",{children:"Thao tác"})]})}),v.jsx("tbody",{children:_.map(ee=>v.jsxs("tr",{children:[v.jsx("td",{children:v.jsx("span",{className:`metric-badge ${ee.severity==="danger"?"badge-danger":ee.severity==="warning"?"badge-warning":"badge-info"}`,children:ee.status})}),v.jsx("td",{style:{fontWeight:"600"},children:ee.type}),v.jsx("td",{children:ee.location}),v.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:ee.time}),v.jsx("td",{children:ee.handled?v.jsxs("span",{style:{color:"#10b981",fontWeight:"600",display:"flex",alignItems:"center",gap:"4px"},children:[v.jsx(Us,{size:14})," Đã nhận"]}):v.jsx("span",{style:{color:"#ef4444",fontWeight:"600"},children:"Chưa xử lý"})}),v.jsx("td",{children:v.jsx("button",{className:`btn-sm ${ee.handled?"btn-secondary":"btn-primary"}`,onClick:()=>U(ee.id),children:ee.handled?"Hoàn tác":"Điều động"})})]},ee.id))})]})})]})]}),s==="gis"&&v.jsxs("div",{className:"panel-card",style:{position:"relative"},children:[v.jsxs("div",{className:"panel-card-header",children:[v.jsxs("div",{children:[v.jsxs("div",{className:"panel-card-title",children:[v.jsx(lc,{size:18,color:"#0284c7"}),v.jsx("span",{children:"Mạng 3D Digital Twin (GIS Thủy lực)"})]}),v.jsx("span",{style:{fontSize:"12px",color:"#64748b"},children:"Không gian 3D địa hình, mô phỏng thủy lực thời gian thực và quản lý tài sản theo chuẩn Qatium"})]}),v.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[v.jsxs("button",{className:`btn-sm ${le?"btn-primary":"btn-secondary"}`,onClick:()=>{K(!le),Y(le?"Đã mở lại van PRV-02, mạng lưới trở lại bình thường.":"Mô phỏng: Đã đóng van PRV-02! Khu vực DMA 2 đang chạy nguồn dự phòng.")},title:"Mô phỏng đóng ngắt sự cố",children:[v.jsx(Fm,{size:13}),v.jsx("span",{children:le?"Mở van PRV-02":"Mô phỏng đóng van PRV-02"})]}),v.jsxs("button",{className:"btn-sm btn-secondary",onClick:()=>J("Mo_Hinh_Mang_3D_GIS.csv"),children:[v.jsx(ah,{size:13}),v.jsx("span",{children:"Xuất GIS"})]})]})]}),v.jsxs("div",{className:`map-canvas-container ${C==="dark"?"dark-theme":"light-theme"}`,style:{minHeight:"620px"},children:[v.jsxs("div",{className:"qatium-hud-top",style:{maxWidth:"620px"},children:[v.jsxs("div",{className:"qatium-hud-pill-group",children:[v.jsx("button",{className:`qatium-hud-btn ${C==="dark"?"active":""}`,onClick:()=>F("dark"),children:v.jsx("span",{children:"Digital Twin (Tối)"})}),v.jsx("button",{className:`qatium-hud-btn ${C==="light"?"active":""}`,onClick:()=>F("light"),children:v.jsx("span",{children:"SCADA (Sáng)"})})]}),v.jsxs("div",{className:"qatium-hud-pill-group",children:[v.jsxs("button",{className:`qatium-hud-btn ${D==="pressure"?"active":""}`,onClick:()=>E("pressure"),children:[v.jsx(ja,{size:13}),v.jsx("span",{children:"Áp lực (bar)"})]}),v.jsxs("button",{className:`qatium-hud-btn ${D==="flow"?"active":""}`,onClick:()=>E("flow"),children:[v.jsx(Wa,{size:13}),v.jsx("span",{children:"Lưu lượng (m³/h)"})]})]}),v.jsxs("div",{className:"qatium-hud-pill-group",children:[v.jsx("button",{className:`qatium-hud-btn ${R.pipes?"active":""}`,onClick:()=>X(ee=>({...ee,pipes:!ee.pipes})),children:v.jsx("span",{children:"Ống 3D"})}),v.jsx("button",{className:`qatium-hud-btn ${R.valves?"active":""}`,onClick:()=>X(ee=>({...ee,valves:!ee.valves})),children:v.jsx("span",{children:"Van PRV"})}),v.jsx("button",{className:`qatium-hud-btn ${R.tanks?"active":""}`,onClick:()=>X(ee=>({...ee,tanks:!ee.tanks})),children:v.jsx("span",{children:"Đài nước & Bơm"})}),v.jsx("button",{className:`qatium-hud-btn ${R.sensors?"active":""}`,onClick:()=>X(ee=>({...ee,sensors:!ee.sensors})),children:v.jsx("span",{children:"Cảm biến"})})]})]}),v.jsx(Jg,{theme:C,heatmap:D,assetsLayer:R,isolatedPipe:le,simTime:O,currentSim:q,onSelectAsset:ee=>ne(ee)}),k&&v.jsxs("div",{className:"qatium-inspector-drawer",children:[v.jsxs("div",{className:"inspector-header",children:[v.jsxs("div",{className:"inspector-title",children:[v.jsx(lc,{size:16,color:"#0284c7"}),v.jsx("span",{children:k.name})]}),v.jsx("button",{className:"inspector-close-btn",onClick:()=>ne(null),"aria-label":"Đóng thanh thông tin",children:v.jsx(km,{size:16})})]}),v.jsxs("div",{className:"inspector-body",children:[v.jsxs("div",{children:[v.jsxs("span",{className:"metric-badge badge-info",style:{marginBottom:"6px"},children:["Mã ID: ",k.id]}),v.jsx("div",{style:{fontSize:"12px",color:"#64748b"},children:k.type})]}),v.jsxs("div",{className:"inspector-grid",children:[v.jsxs("div",{className:"inspector-metric-box",children:[v.jsx("span",{className:"inspector-metric-label",children:"Áp Lực SCADA"}),v.jsx("span",{className:"inspector-metric-val",children:k.pressure||k.inletPressure||"N/A"})]}),v.jsxs("div",{className:"inspector-metric-box",children:[v.jsx("span",{className:"inspector-metric-label",children:"Lưu Lượng Cấp"}),v.jsx("span",{className:"inspector-metric-val",children:k.flow||"N/A"})]}),v.jsxs("div",{className:"inspector-metric-box",children:[v.jsx("span",{className:"inspector-metric-label",children:"Cao Độ Z"}),v.jsx("span",{className:"inspector-metric-val",children:k.elevation||"+0.0m"})]}),v.jsxs("div",{className:"inspector-metric-box",children:[v.jsx("span",{className:"inspector-metric-label",children:"Tổn Thất / Cột Áp"}),v.jsx("span",{className:"inspector-metric-val",children:k.headloss||k.head||k.level||"Tối ưu"})]})]}),v.jsxs("div",{style:{fontSize:"12.5px",display:"flex",flexDirection:"column",gap:"6px",borderTop:"1px solid var(--border-light)",paddingTop:"10px"},children:[v.jsxs("div",{children:[v.jsx("b",{children:"Trạng thái:"})," ",v.jsx("span",{style:{color:k.status.includes("Cảnh báo")||k.status.includes("ĐÓNG")?"#dc2626":"#16a34a"},children:k.status})]}),k.material&&v.jsxs("div",{children:[v.jsx("b",{children:"Vật liệu:"})," ",k.material]}),k.diameter&&v.jsxs("div",{children:[v.jsx("b",{children:"Đường kính danh định:"})," ",k.diameter]}),k.households&&v.jsxs("div",{children:[v.jsx("b",{children:"Quy mô phụ tải:"})," ",k.households]}),k.power&&v.jsxs("div",{children:[v.jsx("b",{children:"Công suất truyền động:"})," ",k.power]}),v.jsxs("div",{children:[v.jsx("b",{children:"Khu vực phụ trách:"})," ",k.dma]})]}),v.jsxs("div",{className:"inspector-actions",children:[k.id==="PRV-02"&&v.jsxs("button",{className:"btn-sm btn-primary",onClick:()=>{K(!le),Y(le?"Đã mở lại van PRV-02!":"Đã đóng van PRV-02!")},children:[v.jsx(Fm,{size:13}),v.jsx("span",{children:le?"Mở lại van PRV-02":"Mô phỏng đóng ngắt (Shutdown)"})]}),v.jsxs("button",{className:"btn-sm btn-secondary",onClick:()=>Y(`Đang trích xuất đồ thị áp lực 24h cho ${k.id}...`),children:[v.jsx(El,{size:13}),v.jsx("span",{children:"Đồ thị áp lực 24h"})]}),v.jsxs("button",{className:"btn-sm btn-secondary",onClick:()=>Y(`Đã tạo lệnh điều động kỹ sư kiểm tra ${k.id}`),children:[v.jsx(Us,{size:13}),v.jsx("span",{children:"Tạo phiếu bảo trì"})]})]})]})]}),v.jsxs("div",{className:"qatium-timeline-bar",children:[v.jsx("button",{className:"timeline-play-btn",onClick:()=>{se(!Z),Y(Z?"Đã tạm dừng mô phỏng 24h":"Đang chạy mô phỏng biến thiên thủy lực 24h...")},title:Z?"Tạm dừng mô phỏng":"Chạy mô phỏng 24h",children:Z?v.jsx(tx,{size:16}):v.jsx(nx,{size:16,style:{marginLeft:"2px"}})}),v.jsxs("div",{className:"timeline-time-info",children:[v.jsx("span",{className:"timeline-clock",children:q.label}),v.jsxs("span",{className:"timeline-desc",children:["Q = ",v.jsxs("b",{children:[q.flow," m³/h"]})," · P = ",v.jsxs("b",{children:[q.pressure," bar"]})]})]}),v.jsx("div",{className:"timeline-slider-wrap",children:v.jsx("input",{type:"range",min:"0",max:"23",value:O,onChange:ee=>G(parseInt(ee.target.value,10)),className:"timeline-slider",title:"Kéo để tua nhanh dòng thời gian mô phỏng"})}),v.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexShrink:0},children:[v.jsx("span",{className:`metric-badge ${O>=2&&O<=4?"badge-danger":O>=6&&O<=8||O>=18&&O<=20?"badge-warning":"badge-success"}`,children:q.status}),v.jsx("button",{className:"btn-sm btn-secondary",onClick:()=>G(14),title:"Đặt lại giờ mặc định",children:v.jsx(n0,{size:12})})]})]})]})]}),s==="telemetry"&&v.jsxs("div",{className:"panel-card",children:[v.jsxs("div",{className:"panel-card-header",children:[v.jsxs("div",{children:[v.jsxs("div",{className:"panel-card-title",children:[v.jsx(ja,{size:18,color:"#0284c7"}),v.jsx("span",{children:"Dữ liệu Áp & Lưu lượng"})]}),v.jsx("span",{style:{fontSize:"12px",color:"#64748b"},children:"6 điểm quan trắc tự động (SCADA)"})]}),v.jsx("button",{className:"btn-sm btn-primary",onClick:()=>J("Du_Lieu_Telemetry_6_Diem_Do.csv"),children:"Xuất Excel"})]}),v.jsx("div",{className:"data-table-wrapper",children:v.jsxs("table",{className:"custom-table",children:[v.jsx("thead",{children:v.jsxs("tr",{children:[v.jsx("th",{children:"Điểm đo"}),v.jsx("th",{children:"Khu vực"}),v.jsx("th",{children:"Lưu lượng"}),v.jsx("th",{children:"Áp lực (bar)"}),v.jsx("th",{children:"Dải chuẩn"}),v.jsx("th",{children:"Chênh lệch"}),v.jsx("th",{children:"Trạng thái"})]})}),v.jsx("tbody",{children:[{node:"FM-01 / Trạm bơm P1",zone:"Đầu nguồn cấp",flow:"145.8 m³/h",press:"4.2 bar",range:"3.8 - 4.5 bar",delta:"+0.1 bar",status:"Tối ưu",tag:"badge-success"},{node:"PRV-02 / Cổng vào DMA 1",zone:"DMA 1 (Phía Nam)",flow:"48.2 m³/h",press:"3.1 bar",range:"2.8 - 3.4 bar",delta:"-0.2 bar",status:"Ổn định",tag:"badge-info"},{node:"PRV-03 / Trục chính DMA 2",zone:"DMA 2 (Trung Tâm)",flow:"62.4 m³/h",press:"3.2 bar",range:"2.8 - 3.5 bar",delta:"+0.0 bar",status:"Ổn định",tag:"badge-info"},{node:"FM-04 / Điểm cao DMA 3",zone:"DMA 3 (Ven Hồ)",flow:"35.2 m³/h",press:"3.4 bar",range:"2.5 - 3.2 bar",delta:"+0.4 bar",status:"Cảnh báo Áp cao",tag:"badge-warning"},{node:"SN-05 / Cụm biệt thự BT2",zone:"DMA 2",flow:"18.4 m³/h",press:"2.4 bar",range:"2.8 - 3.4 bar",delta:"-0.5 bar",status:"Sụt áp cục bộ",tag:"badge-danger"},{node:"FM-06 / Tuyến xả cặn",zone:"Bể ngầm",flow:"0.0 m³/h",press:"3.0 bar",range:"2.8 - 3.5 bar",delta:"0.0 bar",status:"Đang khóa",tag:"badge-info"}].map((ee,Ee)=>v.jsxs("tr",{children:[v.jsx("td",{style:{fontWeight:"700"},children:ee.node}),v.jsx("td",{children:ee.zone}),v.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:ee.flow}),v.jsx("td",{style:{fontWeight:"700",color:"#0284c7"},children:ee.press}),v.jsx("td",{style:{color:"#64748b"},children:ee.range}),v.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:ee.delta}),v.jsx("td",{children:v.jsx("span",{className:`metric-badge ${ee.tag}`,children:ee.status})})]},Ee))})]})})]}),s==="leaks"&&v.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[v.jsxs("div",{className:"metrics-grid",children:[v.jsxs("div",{className:"metric-card",children:[v.jsxs("div",{className:"metric-header",children:[v.jsx("span",{children:"Lưu lượng đêm (MNF)"}),v.jsx(Om,{size:18,color:"#d97706"})]}),v.jsxs("div",{className:"metric-body",children:[v.jsx("span",{className:"metric-value",children:"65.2"}),v.jsx("span",{className:"metric-unit",children:"m³/h"})]}),v.jsx("span",{className:"metric-badge badge-warning",children:"Khung 02:00 - 04:00"})]}),v.jsxs("div",{className:"metric-card",children:[v.jsxs("div",{className:"metric-header",children:[v.jsx("span",{children:"Tỷ lệ thất thoát"}),v.jsx(Tl,{size:18,color:"#ef4444"})]}),v.jsx("div",{className:"metric-body",children:v.jsx("span",{className:"metric-value",style:{color:"#ef4444"},children:"12.5%"})}),v.jsx("span",{className:"metric-badge badge-danger",children:"~18.2 m³/h rò rỉ"})]}),v.jsxs("div",{className:"metric-card",children:[v.jsxs("div",{className:"metric-header",children:[v.jsx("span",{children:"Nghi vấn rò rỉ"}),v.jsx(Us,{size:18,color:"#10b981"})]}),v.jsxs("div",{className:"metric-body",children:[v.jsx("span",{className:"metric-value",children:"2"}),v.jsx("span",{className:"metric-unit",children:"tuyến ống"})]}),v.jsx("span",{className:"metric-badge badge-info",children:"Cần dò sóng âm"})]})]}),v.jsxs("div",{className:"panel-card",children:[v.jsx("div",{className:"panel-card-header",children:v.jsxs("div",{className:"panel-card-title",children:[v.jsx(Tl,{size:17,color:"#d97706"}),v.jsx("span",{children:"Xếp hạng thất thoát theo DMA"})]})}),v.jsx("div",{className:"data-table-wrapper",children:v.jsxs("table",{className:"custom-table",children:[v.jsx("thead",{children:v.jsxs("tr",{children:[v.jsx("th",{children:"Vùng DMA"}),v.jsx("th",{children:"Hộ dân"}),v.jsx("th",{children:"Lưu lượng cấp"}),v.jsx("th",{children:"Lưu lượng đêm"}),v.jsx("th",{children:"Tỷ lệ NRW"}),v.jsx("th",{children:"Mức ưu tiên"})]})}),v.jsxs("tbody",{children:[v.jsxs("tr",{children:[v.jsx("td",{style:{fontWeight:"700"},children:"DMA 2 (Trung Tâm)"}),v.jsx("td",{children:"450 Hộ"}),v.jsx("td",{children:"62.4 m³/h"}),v.jsx("td",{children:"28.5 m³/h"}),v.jsx("td",{style:{fontWeight:"700",color:"#ef4444"},children:"13.2%"}),v.jsx("td",{children:v.jsx("span",{className:"metric-badge badge-danger",children:"Rất Cao (Khẩn)"})})]}),v.jsxs("tr",{children:[v.jsx("td",{style:{fontWeight:"700"},children:"DMA 1 (Phía Nam)"}),v.jsx("td",{children:"320 Hộ"}),v.jsx("td",{children:"48.2 m³/h"}),v.jsx("td",{children:"21.0 m³/h"}),v.jsx("td",{style:{fontWeight:"700",color:"#f59e0b"},children:"11.8%"}),v.jsx("td",{children:v.jsx("span",{className:"metric-badge badge-warning",children:"Trung Bình"})})]}),v.jsxs("tr",{children:[v.jsx("td",{style:{fontWeight:"700"},children:"DMA 3 (Ven Hồ)"}),v.jsx("td",{children:"280 Hộ"}),v.jsx("td",{children:"35.2 m³/h"}),v.jsx("td",{children:"15.7 m³/h"}),v.jsx("td",{style:{fontWeight:"700",color:"#10b981"},children:"10.5%"}),v.jsx("td",{children:v.jsx("span",{className:"metric-badge badge-success",children:"Thấp (Tốt)"})})]})]})]})})]})]}),s==="quality"&&v.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[v.jsxs("div",{className:"metrics-grid",children:[v.jsxs("div",{className:"metric-card",children:[v.jsxs("div",{className:"metric-header",children:[v.jsx("span",{children:"Độ đục (Turbidity)"}),v.jsx(Wa,{size:18,color:"#0284c7"})]}),v.jsxs("div",{className:"metric-body",children:[v.jsx("span",{className:"metric-value",children:"0.85"}),v.jsx("span",{className:"metric-unit",children:"NTU"})]}),v.jsx("span",{className:"metric-badge badge-success",children:"Chuẩn QCVN (< 2.0 NTU)"})]}),v.jsxs("div",{className:"metric-card",children:[v.jsxs("div",{className:"metric-header",children:[v.jsx("span",{children:"Clo dư (Chlorine)"}),v.jsx(Us,{size:18,color:"#10b981"})]}),v.jsxs("div",{className:"metric-body",children:[v.jsx("span",{className:"metric-value",children:"0.42"}),v.jsx("span",{className:"metric-unit",children:"mg/L"})]}),v.jsx("span",{className:"metric-badge badge-success",children:"Ngưỡng chuẩn (0.2 - 1.0 mg/L)"})]}),v.jsxs("div",{className:"metric-card",children:[v.jsxs("div",{className:"metric-header",children:[v.jsx("span",{children:"Độ pH"}),v.jsx(El,{size:18,color:"#0284c7"})]}),v.jsx("div",{className:"metric-body",children:v.jsx("span",{className:"metric-value",children:"7.35"})}),v.jsx("span",{className:"metric-badge badge-info",children:"Chuẩn (6.5 - 8.5)"})]}),v.jsxs("div",{className:"metric-card",children:[v.jsxs("div",{className:"metric-header",children:[v.jsx("span",{children:"Chất rắn tan (TDS)"}),v.jsx(ja,{size:18,color:"#64748b"})]}),v.jsxs("div",{className:"metric-body",children:[v.jsx("span",{className:"metric-value",children:"128"}),v.jsx("span",{className:"metric-unit",children:"ppm"})]}),v.jsx("span",{className:"metric-badge badge-success",children:"An toàn (< 1000 ppm)"})]})]}),v.jsxs("div",{className:"panel-card",style:{padding:"20px"},children:[v.jsx("h3",{style:{fontSize:"15px",fontWeight:"700",marginBottom:"8px"},children:"Quan trắc chất lượng định kỳ"}),v.jsx("p",{style:{fontSize:"13px",color:"#64748b",lineHeight:"1.6"},children:"Cảm biến đa chỉ tiêu tại trạm tổng và 3 DMA. Chu kỳ đo 15 phút/lần, tự xả cặn khi độ đục > 2.5 NTU."})]})]}),s==="reports"&&v.jsxs("div",{className:"panel-card",children:[v.jsxs("div",{className:"panel-card-header",children:[v.jsxs("div",{children:[v.jsxs("div",{className:"panel-card-title",children:[v.jsx(J_,{size:18,color:"#0284c7"}),v.jsx("span",{children:"Cân bằng nước & Kiểm toán IWA"})]}),v.jsx("span",{style:{fontSize:"12px",color:"#64748b"},children:"Tiêu chuẩn Quốc tế IWA"})]}),v.jsxs("div",{style:{display:"flex",gap:"8px"},children:[v.jsx("button",{className:"btn-sm btn-secondary",onClick:Ce,title:"In hoặc lưu PDF",children:"In PDF"}),v.jsx("button",{className:"btn-sm btn-primary",onClick:()=>J("Bao_Cao_Can_Bang_Nuoc_IWA.csv"),title:"Tải file CSV",children:"Tải CSV"})]})]}),v.jsx("div",{className:"data-table-wrapper",children:v.jsxs("table",{className:"custom-table",children:[v.jsx("thead",{children:v.jsxs("tr",{children:[v.jsx("th",{children:"Hạng mục"}),v.jsx("th",{children:"Khối lượng (m³)"}),v.jsx("th",{children:"Tỷ trọng (%)"}),v.jsx("th",{children:"Doanh thu / Thiệt hại"}),v.jsx("th",{children:"Đánh giá"})]})}),v.jsxs("tbody",{children:[v.jsxs("tr",{children:[v.jsx("td",{style:{fontWeight:"700"},children:"1. Tổng cấp mạng lưới (SIV)"}),v.jsx("td",{style:{fontFamily:"var(--font-mono)",fontWeight:"700"},children:"105,400 m³"}),v.jsx("td",{children:"100.0%"}),v.jsx("td",{children:"Đầu vào nhà máy"}),v.jsx("td",{children:v.jsx("span",{className:"metric-badge badge-info",children:"Chuẩn đo đạc"})})]}),v.jsxs("tr",{children:[v.jsx("td",{style:{paddingLeft:"32px",color:"#047857"},children:"1.1. Tiêu thụ có doanh thu"}),v.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:"92,225 m³"}),v.jsx("td",{children:"87.5%"}),v.jsx("td",{children:"Thu tiền cư dân"}),v.jsx("td",{children:v.jsx("span",{className:"metric-badge badge-success",children:"Đạt chỉ tiêu"})})]}),v.jsxs("tr",{children:[v.jsx("td",{style:{paddingLeft:"32px",color:"#b91c1c"},children:"1.2. Thất thoát không doanh thu (NRW)"}),v.jsx("td",{style:{fontFamily:"var(--font-mono)",fontWeight:"700"},children:"13,175 m³"}),v.jsx("td",{children:"12.5%"}),v.jsx("td",{children:"Thiệt hại: ~105.4 tr VNĐ"}),v.jsx("td",{children:v.jsx("span",{className:"metric-badge badge-danger",children:"Cần giảm < 10%"})})]}),v.jsxs("tr",{children:[v.jsx("td",{style:{paddingLeft:"48px",color:"#64748b"},children:"- Thất thoát vật lý (Rò rỉ ống ngầm)"}),v.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:"9,800 m³"}),v.jsx("td",{children:"9.3%"}),v.jsx("td",{children:"Chảy ngầm trong đất"}),v.jsx("td",{children:"Tập trung sửa chữa DMA 2"})]}),v.jsxs("tr",{children:[v.jsx("td",{style:{paddingLeft:"48px",color:"#64748b"},children:"- Thất thoát thương mại (Sai số, gian lận)"}),v.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:"3,375 m³"}),v.jsx("td",{children:"3.2%"}),v.jsx("td",{children:"Sai số đo đếm"}),v.jsx("td",{children:"Hiệu chuẩn đồng hồ định kỳ"})]})]})]})})]})]})]}),y&&v.jsxs("div",{className:"toast-notification",children:[v.jsx(Us,{size:18,color:"#10b981"}),v.jsx("span",{children:y})]})]})}console.log("[SWMS] Initializing Smart Water Management UI...");const Hh=document.getElementById("root");if(Hh)try{q_.createRoot(Hh).render(v.jsx(z_.StrictMode,{children:v.jsx(xw,{})})),console.log("[SWMS] App successfully mounted to DOM.")}catch(s){console.error("[SWMS] Fatal mount error:",s),Hh.innerHTML=`
      <div style="padding: 24px; background: #fee2e2; color: #991b1b; font-family: monospace; border-radius: 8px; margin: 20px;">
        <h2>Lỗi Render Giao Diện React:</h2>
        <pre>${s.stack||s.message}</pre>
      </div>
    `}
