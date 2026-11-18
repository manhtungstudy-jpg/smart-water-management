(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Z0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var oh={exports:{}},to={},lh={exports:{}},Ct={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm;function R_(){if(Cm)return Ct;Cm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),M=Symbol.iterator;function v(U){return U===null||typeof U!="object"?null:(U=M&&U[M]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,R={};function y(U,se,Oe){this.props=U,this.context=se,this.refs=R,this.updater=Oe||S}y.prototype.isReactComponent={},y.prototype.setState=function(U,se){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,se,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function x(){}x.prototype=y.prototype;function D(U,se,Oe){this.props=U,this.context=se,this.refs=R,this.updater=Oe||S}var F=D.prototype=new x;F.constructor=D,w(F,y.prototype),F.isPureReactComponent=!0;var P=Array.isArray,O=Object.prototype.hasOwnProperty,I={current:null},T={key:!0,ref:!0,__self:!0,__source:!0};function E(U,se,Oe){var ce,we={},Ce=null,He=null;if(se!=null)for(ce in se.ref!==void 0&&(He=se.ref),se.key!==void 0&&(Ce=""+se.key),se)O.call(se,ce)&&!T.hasOwnProperty(ce)&&(we[ce]=se[ce]);var Ae=arguments.length-2;if(Ae===1)we.children=Oe;else if(1<Ae){for(var Ke=Array(Ae),it=0;it<Ae;it++)Ke[it]=arguments[it+2];we.children=Ke}if(U&&U.defaultProps)for(ce in Ae=U.defaultProps,Ae)we[ce]===void 0&&(we[ce]=Ae[ce]);return{$$typeof:s,type:U,key:Ce,ref:He,props:we,_owner:I.current}}function Y(U,se){return{$$typeof:s,type:U.type,key:se,ref:U.ref,props:U.props,_owner:U._owner}}function B(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function V(U){var se={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Oe){return se[Oe]})}var $=/\/+/g;function te(U,se){return typeof U=="object"&&U!==null&&U.key!=null?V(""+U.key):se.toString(36)}function H(U,se,Oe,ce,we){var Ce=typeof U;(Ce==="undefined"||Ce==="boolean")&&(U=null);var He=!1;if(U===null)He=!0;else switch(Ce){case"string":case"number":He=!0;break;case"object":switch(U.$$typeof){case s:case e:He=!0}}if(He)return He=U,we=we(He),U=ce===""?"."+te(He,0):ce,P(we)?(Oe="",U!=null&&(Oe=U.replace($,"$&/")+"/"),H(we,se,Oe,"",function(it){return it})):we!=null&&(B(we)&&(we=Y(we,Oe+(!we.key||He&&He.key===we.key?"":(""+we.key).replace($,"$&/")+"/")+U)),se.push(we)),1;if(He=0,ce=ce===""?".":ce+":",P(U))for(var Ae=0;Ae<U.length;Ae++){Ce=U[Ae];var Ke=ce+te(Ce,Ae);He+=H(Ce,se,Oe,Ke,we)}else if(Ke=v(U),typeof Ke=="function")for(U=Ke.call(U),Ae=0;!(Ce=U.next()).done;)Ce=Ce.value,Ke=ce+te(Ce,Ae++),He+=H(Ce,se,Oe,Ke,we);else if(Ce==="object")throw se=String(U),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.");return He}function he(U,se,Oe){if(U==null)return U;var ce=[],we=0;return H(U,ce,"","",function(Ce){return se.call(Oe,Ce,we++)}),ce}function le(U){if(U._status===-1){var se=U._result;se=se(),se.then(function(Oe){(U._status===0||U._status===-1)&&(U._status=1,U._result=Oe)},function(Oe){(U._status===0||U._status===-1)&&(U._status=2,U._result=Oe)}),U._status===-1&&(U._status=0,U._result=se)}if(U._status===1)return U._result.default;throw U._result}var ee={current:null},ne={transition:null},J={ReactCurrentDispatcher:ee,ReactCurrentBatchConfig:ne,ReactCurrentOwner:I};function Q(){throw Error("act(...) is not supported in production builds of React.")}return Ct.Children={map:he,forEach:function(U,se,Oe){he(U,function(){se.apply(this,arguments)},Oe)},count:function(U){var se=0;return he(U,function(){se++}),se},toArray:function(U){return he(U,function(se){return se})||[]},only:function(U){if(!B(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},Ct.Component=y,Ct.Fragment=t,Ct.Profiler=o,Ct.PureComponent=D,Ct.StrictMode=r,Ct.Suspense=f,Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J,Ct.act=Q,Ct.cloneElement=function(U,se,Oe){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var ce=w({},U.props),we=U.key,Ce=U.ref,He=U._owner;if(se!=null){if(se.ref!==void 0&&(Ce=se.ref,He=I.current),se.key!==void 0&&(we=""+se.key),U.type&&U.type.defaultProps)var Ae=U.type.defaultProps;for(Ke in se)O.call(se,Ke)&&!T.hasOwnProperty(Ke)&&(ce[Ke]=se[Ke]===void 0&&Ae!==void 0?Ae[Ke]:se[Ke])}var Ke=arguments.length-2;if(Ke===1)ce.children=Oe;else if(1<Ke){Ae=Array(Ke);for(var it=0;it<Ke;it++)Ae[it]=arguments[it+2];ce.children=Ae}return{$$typeof:s,type:U.type,key:we,ref:Ce,props:ce,_owner:He}},Ct.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},Ct.createElement=E,Ct.createFactory=function(U){var se=E.bind(null,U);return se.type=U,se},Ct.createRef=function(){return{current:null}},Ct.forwardRef=function(U){return{$$typeof:d,render:U}},Ct.isValidElement=B,Ct.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:le}},Ct.memo=function(U,se){return{$$typeof:p,type:U,compare:se===void 0?null:se}},Ct.startTransition=function(U){var se=ne.transition;ne.transition={};try{U()}finally{ne.transition=se}},Ct.unstable_act=Q,Ct.useCallback=function(U,se){return ee.current.useCallback(U,se)},Ct.useContext=function(U){return ee.current.useContext(U)},Ct.useDebugValue=function(){},Ct.useDeferredValue=function(U){return ee.current.useDeferredValue(U)},Ct.useEffect=function(U,se){return ee.current.useEffect(U,se)},Ct.useId=function(){return ee.current.useId()},Ct.useImperativeHandle=function(U,se,Oe){return ee.current.useImperativeHandle(U,se,Oe)},Ct.useInsertionEffect=function(U,se){return ee.current.useInsertionEffect(U,se)},Ct.useLayoutEffect=function(U,se){return ee.current.useLayoutEffect(U,se)},Ct.useMemo=function(U,se){return ee.current.useMemo(U,se)},Ct.useReducer=function(U,se,Oe){return ee.current.useReducer(U,se,Oe)},Ct.useRef=function(U){return ee.current.useRef(U)},Ct.useState=function(U){return ee.current.useState(U)},Ct.useSyncExternalStore=function(U,se,Oe){return ee.current.useSyncExternalStore(U,se,Oe)},Ct.useTransition=function(){return ee.current.useTransition()},Ct.version="18.3.1",Ct}var bm;function Hd(){return bm||(bm=1,lh.exports=R_()),lh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rm;function N_(){if(Rm)return to;Rm=1;var s=Hd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,p){var _,M={},v=null,S=null;p!==void 0&&(v=""+p),f.key!==void 0&&(v=""+f.key),f.ref!==void 0&&(S=f.ref);for(_ in f)r.call(f,_)&&!l.hasOwnProperty(_)&&(M[_]=f[_]);if(d&&d.defaultProps)for(_ in f=d.defaultProps,f)M[_]===void 0&&(M[_]=f[_]);return{$$typeof:e,type:d,key:v,ref:S,props:M,_owner:o.current}}return to.Fragment=t,to.jsx=u,to.jsxs=u,to}var Nm;function P_(){return Nm||(Nm=1,oh.exports=N_()),oh.exports}var g=P_(),Rt=Hd();const D_=Z0(Rt);var bl={},ch={exports:{}},hi={},uh={exports:{}},hh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pm;function L_(){return Pm||(Pm=1,(function(s){function e(ne,J){var Q=ne.length;ne.push(J);e:for(;0<Q;){var U=Q-1>>>1,se=ne[U];if(0<o(se,J))ne[U]=J,ne[Q]=se,Q=U;else break e}}function t(ne){return ne.length===0?null:ne[0]}function r(ne){if(ne.length===0)return null;var J=ne[0],Q=ne.pop();if(Q!==J){ne[0]=Q;e:for(var U=0,se=ne.length,Oe=se>>>1;U<Oe;){var ce=2*(U+1)-1,we=ne[ce],Ce=ce+1,He=ne[Ce];if(0>o(we,Q))Ce<se&&0>o(He,we)?(ne[U]=He,ne[Ce]=Q,U=Ce):(ne[U]=we,ne[ce]=Q,U=ce);else if(Ce<se&&0>o(He,Q))ne[U]=He,ne[Ce]=Q,U=Ce;else break e}}return J}function o(ne,J){var Q=ne.sortIndex-J.sortIndex;return Q!==0?Q:ne.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var f=[],p=[],_=1,M=null,v=3,S=!1,w=!1,R=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(ne){for(var J=t(p);J!==null;){if(J.callback===null)r(p);else if(J.startTime<=ne)r(p),J.sortIndex=J.expirationTime,e(f,J);else break;J=t(p)}}function P(ne){if(R=!1,F(ne),!w)if(t(f)!==null)w=!0,le(O);else{var J=t(p);J!==null&&ee(P,J.startTime-ne)}}function O(ne,J){w=!1,R&&(R=!1,x(E),E=-1),S=!0;var Q=v;try{for(F(J),M=t(f);M!==null&&(!(M.expirationTime>J)||ne&&!V());){var U=M.callback;if(typeof U=="function"){M.callback=null,v=M.priorityLevel;var se=U(M.expirationTime<=J);J=s.unstable_now(),typeof se=="function"?M.callback=se:M===t(f)&&r(f),F(J)}else r(f);M=t(f)}if(M!==null)var Oe=!0;else{var ce=t(p);ce!==null&&ee(P,ce.startTime-J),Oe=!1}return Oe}finally{M=null,v=Q,S=!1}}var I=!1,T=null,E=-1,Y=5,B=-1;function V(){return!(s.unstable_now()-B<Y)}function $(){if(T!==null){var ne=s.unstable_now();B=ne;var J=!0;try{J=T(!0,ne)}finally{J?te():(I=!1,T=null)}}else I=!1}var te;if(typeof D=="function")te=function(){D($)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,he=H.port2;H.port1.onmessage=$,te=function(){he.postMessage(null)}}else te=function(){y($,0)};function le(ne){T=ne,I||(I=!0,te())}function ee(ne,J){E=y(function(){ne(s.unstable_now())},J)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(ne){ne.callback=null},s.unstable_continueExecution=function(){w||S||(w=!0,le(O))},s.unstable_forceFrameRate=function(ne){0>ne||125<ne?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<ne?Math.floor(1e3/ne):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_getFirstCallbackNode=function(){return t(f)},s.unstable_next=function(ne){switch(v){case 1:case 2:case 3:var J=3;break;default:J=v}var Q=v;v=J;try{return ne()}finally{v=Q}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(ne,J){switch(ne){case 1:case 2:case 3:case 4:case 5:break;default:ne=3}var Q=v;v=ne;try{return J()}finally{v=Q}},s.unstable_scheduleCallback=function(ne,J,Q){var U=s.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?U+Q:U):Q=U,ne){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=Q+se,ne={id:_++,callback:J,priorityLevel:ne,startTime:Q,expirationTime:se,sortIndex:-1},Q>U?(ne.sortIndex=Q,e(p,ne),t(f)===null&&ne===t(p)&&(R?(x(E),E=-1):R=!0,ee(P,Q-U))):(ne.sortIndex=se,e(f,ne),w||S||(w=!0,le(O))),ne},s.unstable_shouldYield=V,s.unstable_wrapCallback=function(ne){var J=v;return function(){var Q=v;v=J;try{return ne.apply(this,arguments)}finally{v=Q}}}})(hh)),hh}var Dm;function I_(){return Dm||(Dm=1,uh.exports=L_()),uh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm;function U_(){if(Lm)return hi;Lm=1;var s=Hd(),e=I_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},M={};function v(n){return f.call(M,n)?!0:f.call(_,n)?!1:p.test(n)?M[n]=!0:(_[n]=!0,!1)}function S(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,i,a,c){if(i===null||typeof i>"u"||S(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(n,i,a,c,h,m,C){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=C}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new R(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new R(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new R(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new R(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new R(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new R(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new R(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new R(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new R(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(x,D);y[i]=new R(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(x,D);y[i]=new R(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(x,D);y[i]=new R(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new R(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new R(n,1,!1,n.toLowerCase(),null,!0,!0)});function F(n,i,a,c){var h=y.hasOwnProperty(i)?y[i]:null;(h!==null?h.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,a,h,c)&&(a=null),c||h===null?v(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,c=h.attributeNamespace,a===null?n.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,O=Symbol.for("react.element"),I=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),V=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),ee=Symbol.for("react.offscreen"),ne=Symbol.iterator;function J(n){return n===null||typeof n!="object"?null:(n=ne&&n[ne]||n["@@iterator"],typeof n=="function"?n:null)}var Q=Object.assign,U;function se(n){if(U===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+n}var Oe=!1;function ce(n,i){if(!n||Oe)return"";Oe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(pe){var c=pe}Reflect.construct(n,[],i)}else{try{i.call()}catch(pe){c=pe}n.call(i.prototype)}else{try{throw Error()}catch(pe){c=pe}n()}}catch(pe){if(pe&&c&&typeof pe.stack=="string"){for(var h=pe.stack.split(`
`),m=c.stack.split(`
`),C=h.length-1,k=m.length-1;1<=C&&0<=k&&h[C]!==m[k];)k--;for(;1<=C&&0<=k;C--,k--)if(h[C]!==m[k]){if(C!==1||k!==1)do if(C--,k--,0>k||h[C]!==m[k]){var X=`
`+h[C].replace(" at new "," at ");return n.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",n.displayName)),X}while(1<=C&&0<=k);break}}}finally{Oe=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?se(n):""}function we(n){switch(n.tag){case 5:return se(n.type);case 16:return se("Lazy");case 13:return se("Suspense");case 19:return se("SuspenseList");case 0:case 2:case 15:return n=ce(n.type,!1),n;case 11:return n=ce(n.type.render,!1),n;case 1:return n=ce(n.type,!0),n;default:return""}}function Ce(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case T:return"Fragment";case I:return"Portal";case Y:return"Profiler";case E:return"StrictMode";case te:return"Suspense";case H:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Consumer";case B:return(n._context.displayName||"Context")+".Provider";case $:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case he:return i=n.displayName||null,i!==null?i:Ce(n.type)||"Memo";case le:i=n._payload,n=n._init;try{return Ce(n(i))}catch{}}return null}function He(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ce(i);case 8:return i===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ae(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ke(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function it(n){var i=Ke(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(C){c=""+C,m.call(this,C)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(C){c=""+C},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function lt(n){n._valueTracker||(n._valueTracker=it(n))}function ot(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ke(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function bt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function gt(n,i){var a=i.checked;return Q({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function nn(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Ae(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function jt(n,i){i=i.checked,i!=null&&F(n,"checked",i,!1)}function cn(n,i){jt(n,i);var a=Ae(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Sn(n,i.type,a):i.hasOwnProperty("defaultValue")&&Sn(n,i.type,Ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Lt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Sn(n,i,a){(i!=="number"||bt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var kt=Array.isArray;function Zt(n,i,a,c){if(n=n.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=i.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Ae(a),i=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function Mt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return Q({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Xt(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(kt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Ae(a)}}function j(n,i){var a=Ae(i.value),c=Ae(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function _t(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function re(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function be(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?re(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ge,Ye=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,h){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ge=ge||document.createElement("div"),ge.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ge.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Te(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var We={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},L=["Webkit","ms","Moz","O"];Object.keys(We).forEach(function(n){L.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),We[i]=We[n]})});function b(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||We.hasOwnProperty(n)&&We[n]?(""+i).trim():i+"px"}function K(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,h=b(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,h):n[a]=h}}var _e=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ee(n,i){if(i){if(_e[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function De(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fe=null;function ve(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var xe=null,Ie=null,z=null;function ye(n){if(n=za(n)){if(typeof xe!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Go(i),xe(n.stateNode,n.type,i))}}function G(n){Ie?z?z.push(n):z=[n]:Ie=n}function q(){if(Ie){var n=Ie,i=z;if(z=Ie=null,ye(n),i)for(n=0;n<i.length;n++)ye(i[n])}}function Se(n,i){return n(i)}function ue(){}var Me=!1;function Ve(n,i,a){if(Me)return n(i,a);Me=!0;try{return Se(n,i,a)}finally{Me=!1,(Ie!==null||z!==null)&&(ue(),q())}}function me(n,i){var a=n.stateNode;if(a===null)return null;var c=Go(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Ue=!1;if(d)try{var Qe={};Object.defineProperty(Qe,"passive",{get:function(){Ue=!0}}),window.addEventListener("test",Qe,Qe),window.removeEventListener("test",Qe,Qe)}catch{Ue=!1}function Pe(n,i,a,c,h,m,C,k,X){var pe=Array.prototype.slice.call(arguments,3);try{i.apply(a,pe)}catch(Ne){this.onError(Ne)}}var ct=!1,xt=null,wt=!1,ft=null,Nt={onError:function(n){ct=!0,xt=n}};function Pn(n,i,a,c,h,m,C,k,X){ct=!1,xt=null,Pe.apply(Nt,arguments)}function Bt(n,i,a,c,h,m,C,k,X){if(Pn.apply(this,arguments),ct){if(ct){var pe=xt;ct=!1,xt=null}else throw Error(t(198));wt||(wt=!0,ft=pe)}}function Qt(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function zt(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function vn(n){if(Qt(n)!==n)throw Error(t(188))}function ri(n){var i=n.alternate;if(!i){if(i=Qt(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var h=a.return;if(h===null)break;var m=h.alternate;if(m===null){if(c=h.return,c!==null){a=c;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===a)return vn(h),n;if(m===c)return vn(h),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=h,c=m;else{for(var C=!1,k=h.child;k;){if(k===a){C=!0,a=h,c=m;break}if(k===c){C=!0,c=h,a=m;break}k=k.sibling}if(!C){for(k=m.child;k;){if(k===a){C=!0,a=m,c=h;break}if(k===c){C=!0,c=m,a=h;break}k=k.sibling}if(!C)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Dn(n){return n=ri(n),n!==null?Mn(n):null}function Mn(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Mn(n);if(i!==null)return i;n=n.sibling}return null}var _n=e.unstable_scheduleCallback,rn=e.unstable_cancelCallback,si=e.unstable_shouldYield,Mi=e.unstable_requestPaint,It=e.unstable_now,ji=e.unstable_getCurrentPriorityLevel,Vn=e.unstable_ImmediatePriority,Rr=e.unstable_UserBlockingPriority,Xi=e.unstable_NormalPriority,or=e.unstable_LowPriority,N=e.unstable_IdlePriority,W=null,de=null;function ae(n){if(de&&typeof de.onCommitFiberRoot=="function")try{de.onCommitFiberRoot(W,n,void 0,(n.current.flags&128)===128)}catch{}}var ie=Math.clz32?Math.clz32:Be,ze=Math.log,$e=Math.LN2;function Be(n){return n>>>=0,n===0?32:31-(ze(n)/$e|0)|0}var Ge=64,Je=4194304;function dt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function yt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,h=n.suspendedLanes,m=n.pingedLanes,C=a&268435455;if(C!==0){var k=C&~h;k!==0?c=dt(k):(m&=C,m!==0&&(c=dt(m)))}else C=a&~h,C!==0?c=dt(C):m!==0&&(c=dt(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&h)===0&&(h=c&-c,m=i&-i,h>=m||h===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-ie(i),h=1<<a,c|=n[a],i&=~h;return c}function et(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function At(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,m=n.pendingLanes;0<m;){var C=31-ie(m),k=1<<C,X=h[C];X===-1?((k&a)===0||(k&c)!==0)&&(h[C]=et(k,i)):X<=i&&(n.expiredLanes|=k),m&=~k}}function on(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Kt(){var n=Ge;return Ge<<=1,(Ge&4194240)===0&&(Ge=64),n}function Gt(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function fn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ie(i),n[i]=a}function tt(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-ie(a),m=1<<h;i[h]=0,c[h]=-1,n[h]=-1,a&=~m}}function Tn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-ie(a),h=1<<c;h&i|n[c]&i&&(n[c]|=i),a&=~h}}var st=0;function Ki(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var En,Nr,Pi,Yi,Pt,mn=!1,Gn=[],Ht=null,Jt=null,Ln=null,Pr=new Map,wa=new Map,Dr=[],Zg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uf(n,i){switch(n){case"focusin":case"focusout":Ht=null;break;case"dragenter":case"dragleave":Jt=null;break;case"mouseover":case"mouseout":Ln=null;break;case"pointerover":case"pointerout":Pr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":wa.delete(i.pointerId)}}function Aa(n,i,a,c,h,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[h]},i!==null&&(i=za(i),i!==null&&Nr(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function Qg(n,i,a,c,h){switch(i){case"focusin":return Ht=Aa(Ht,n,i,a,c,h),!0;case"dragenter":return Jt=Aa(Jt,n,i,a,c,h),!0;case"mouseover":return Ln=Aa(Ln,n,i,a,c,h),!0;case"pointerover":var m=h.pointerId;return Pr.set(m,Aa(Pr.get(m)||null,n,i,a,c,h)),!0;case"gotpointercapture":return m=h.pointerId,wa.set(m,Aa(wa.get(m)||null,n,i,a,c,h)),!0}return!1}function hf(n){var i=ls(n.target);if(i!==null){var a=Qt(i);if(a!==null){if(i=a.tag,i===13){if(i=zt(a),i!==null){n.blockedOn=i,Pt(n.priority,function(){Pi(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ro(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Ic(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Fe=c,a.target.dispatchEvent(c),Fe=null}else return i=za(a),i!==null&&Nr(i),n.blockedOn=a,!1;i.shift()}return!0}function df(n,i,a){Ro(n)&&a.delete(i)}function Jg(){mn=!1,Ht!==null&&Ro(Ht)&&(Ht=null),Jt!==null&&Ro(Jt)&&(Jt=null),Ln!==null&&Ro(Ln)&&(Ln=null),Pr.forEach(df),wa.forEach(df)}function Ca(n,i){n.blockedOn===i&&(n.blockedOn=null,mn||(mn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Jg)))}function ba(n){function i(h){return Ca(h,n)}if(0<Gn.length){Ca(Gn[0],n);for(var a=1;a<Gn.length;a++){var c=Gn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Ht!==null&&Ca(Ht,n),Jt!==null&&Ca(Jt,n),Ln!==null&&Ca(Ln,n),Pr.forEach(i),wa.forEach(i),a=0;a<Dr.length;a++)c=Dr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Dr.length&&(a=Dr[0],a.blockedOn===null);)hf(a),a.blockedOn===null&&Dr.shift()}var Rs=P.ReactCurrentBatchConfig,No=!0;function ev(n,i,a,c){var h=st,m=Rs.transition;Rs.transition=null;try{st=1,Lc(n,i,a,c)}finally{st=h,Rs.transition=m}}function tv(n,i,a,c){var h=st,m=Rs.transition;Rs.transition=null;try{st=4,Lc(n,i,a,c)}finally{st=h,Rs.transition=m}}function Lc(n,i,a,c){if(No){var h=Ic(n,i,a,c);if(h===null)Zc(n,i,c,Po,a),uf(n,c);else if(Qg(h,n,i,a,c))c.stopPropagation();else if(uf(n,c),i&4&&-1<Zg.indexOf(n)){for(;h!==null;){var m=za(h);if(m!==null&&En(m),m=Ic(n,i,a,c),m===null&&Zc(n,i,c,Po,a),m===h)break;h=m}h!==null&&c.stopPropagation()}else Zc(n,i,c,null,a)}}var Po=null;function Ic(n,i,a,c){if(Po=null,n=ve(c),n=ls(n),n!==null)if(i=Qt(n),i===null)n=null;else if(a=i.tag,a===13){if(n=zt(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Po=n,null}function ff(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ji()){case Vn:return 1;case Rr:return 4;case Xi:case or:return 16;case N:return 536870912;default:return 16}default:return 16}}var Lr=null,Uc=null,Do=null;function pf(){if(Do)return Do;var n,i=Uc,a=i.length,c,h="value"in Lr?Lr.value:Lr.textContent,m=h.length;for(n=0;n<a&&i[n]===h[n];n++);var C=a-n;for(c=1;c<=C&&i[a-c]===h[m-c];c++);return Do=h.slice(n,1<c?1-c:void 0)}function Lo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Io(){return!0}function mf(){return!1}function pi(n){function i(a,c,h,m,C){this._reactName=a,this._targetInst=h,this.type=c,this.nativeEvent=m,this.target=C,this.currentTarget=null;for(var k in n)n.hasOwnProperty(k)&&(a=n[k],this[k]=a?a(m):m[k]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Io:mf,this.isPropagationStopped=mf,this}return Q(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Io)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Io)},persist:function(){},isPersistent:Io}),i}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Oc=pi(Ns),Ra=Q({},Ns,{view:0,detail:0}),nv=pi(Ra),Fc,kc,Na,Uo=Q({},Ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Na&&(Na&&n.type==="mousemove"?(Fc=n.screenX-Na.screenX,kc=n.screenY-Na.screenY):kc=Fc=0,Na=n),Fc)},movementY:function(n){return"movementY"in n?n.movementY:kc}}),gf=pi(Uo),iv=Q({},Uo,{dataTransfer:0}),rv=pi(iv),sv=Q({},Ra,{relatedTarget:0}),Bc=pi(sv),av=Q({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),ov=pi(av),lv=Q({},Ns,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),cv=pi(lv),uv=Q({},Ns,{data:0}),vf=pi(uv),hv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=fv[n])?!!i[n]:!1}function zc(){return pv}var mv=Q({},Ra,{key:function(n){if(n.key){var i=hv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Lo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?dv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zc,charCode:function(n){return n.type==="keypress"?Lo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Lo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),gv=pi(mv),vv=Q({},Uo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_f=pi(vv),_v=Q({},Ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zc}),xv=pi(_v),yv=Q({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sv=pi(yv),Mv=Q({},Uo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Tv=pi(Mv),Ev=[9,13,27,32],Hc=d&&"CompositionEvent"in window,Pa=null;d&&"documentMode"in document&&(Pa=document.documentMode);var wv=d&&"TextEvent"in window&&!Pa,xf=d&&(!Hc||Pa&&8<Pa&&11>=Pa),yf=" ",Sf=!1;function Mf(n,i){switch(n){case"keyup":return Ev.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ps=!1;function Av(n,i){switch(n){case"compositionend":return Tf(i);case"keypress":return i.which!==32?null:(Sf=!0,yf);case"textInput":return n=i.data,n===yf&&Sf?null:n;default:return null}}function Cv(n,i){if(Ps)return n==="compositionend"||!Hc&&Mf(n,i)?(n=pf(),Do=Uc=Lr=null,Ps=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return xf&&i.locale!=="ko"?null:i.data;default:return null}}var bv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ef(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!bv[n.type]:i==="textarea"}function wf(n,i,a,c){G(c),i=zo(i,"onChange"),0<i.length&&(a=new Oc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Da=null,La=null;function Rv(n){Gf(n,0)}function Oo(n){var i=Os(n);if(ot(i))return n}function Nv(n,i){if(n==="change")return i}var Af=!1;if(d){var Vc;if(d){var Gc="oninput"in document;if(!Gc){var Cf=document.createElement("div");Cf.setAttribute("oninput","return;"),Gc=typeof Cf.oninput=="function"}Vc=Gc}else Vc=!1;Af=Vc&&(!document.documentMode||9<document.documentMode)}function bf(){Da&&(Da.detachEvent("onpropertychange",Rf),La=Da=null)}function Rf(n){if(n.propertyName==="value"&&Oo(La)){var i=[];wf(i,La,n,ve(n)),Ve(Rv,i)}}function Pv(n,i,a){n==="focusin"?(bf(),Da=i,La=a,Da.attachEvent("onpropertychange",Rf)):n==="focusout"&&bf()}function Dv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Oo(La)}function Lv(n,i){if(n==="click")return Oo(i)}function Iv(n,i){if(n==="input"||n==="change")return Oo(i)}function Uv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Di=typeof Object.is=="function"?Object.is:Uv;function Ia(n,i){if(Di(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var h=a[c];if(!f.call(i,h)||!Di(n[h],i[h]))return!1}return!0}function Nf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Pf(n,i){var a=Nf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Nf(a)}}function Df(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Df(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Lf(){for(var n=window,i=bt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=bt(n.document)}return i}function Wc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Ov(n){var i=Lf(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Df(a.ownerDocument.documentElement,a)){if(c!==null&&Wc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,m=Math.min(c.start,h);c=c.end===void 0?m:Math.min(c.end,h),!n.extend&&m>c&&(h=c,c=m,m=h),h=Pf(a,m);var C=Pf(a,c);h&&C&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==C.node||n.focusOffset!==C.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(C.node,C.offset)):(i.setEnd(C.node,C.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Fv=d&&"documentMode"in document&&11>=document.documentMode,Ds=null,jc=null,Ua=null,Xc=!1;function If(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Xc||Ds==null||Ds!==bt(c)||(c=Ds,"selectionStart"in c&&Wc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ua&&Ia(Ua,c)||(Ua=c,c=zo(jc,"onSelect"),0<c.length&&(i=new Oc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Ds)))}function Fo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ls={animationend:Fo("Animation","AnimationEnd"),animationiteration:Fo("Animation","AnimationIteration"),animationstart:Fo("Animation","AnimationStart"),transitionend:Fo("Transition","TransitionEnd")},Kc={},Uf={};d&&(Uf=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function ko(n){if(Kc[n])return Kc[n];if(!Ls[n])return n;var i=Ls[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Uf)return Kc[n]=i[a];return n}var Of=ko("animationend"),Ff=ko("animationiteration"),kf=ko("animationstart"),Bf=ko("transitionend"),zf=new Map,Hf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(n,i){zf.set(n,i),l(i,[n])}for(var Yc=0;Yc<Hf.length;Yc++){var qc=Hf[Yc],kv=qc.toLowerCase(),Bv=qc[0].toUpperCase()+qc.slice(1);Ir(kv,"on"+Bv)}Ir(Of,"onAnimationEnd"),Ir(Ff,"onAnimationIteration"),Ir(kf,"onAnimationStart"),Ir("dblclick","onDoubleClick"),Ir("focusin","onFocus"),Ir("focusout","onBlur"),Ir(Bf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oa));function Vf(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Bt(c,i,void 0,n),n.currentTarget=null}function Gf(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],h=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var C=c.length-1;0<=C;C--){var k=c[C],X=k.instance,pe=k.currentTarget;if(k=k.listener,X!==m&&h.isPropagationStopped())break e;Vf(h,k,pe),m=X}else for(C=0;C<c.length;C++){if(k=c[C],X=k.instance,pe=k.currentTarget,k=k.listener,X!==m&&h.isPropagationStopped())break e;Vf(h,k,pe),m=X}}}if(wt)throw n=ft,wt=!1,ft=null,n}function sn(n,i){var a=i[iu];a===void 0&&(a=i[iu]=new Set);var c=n+"__bubble";a.has(c)||(Wf(i,n,2,!1),a.add(c))}function $c(n,i,a){var c=0;i&&(c|=4),Wf(a,n,c,i)}var Bo="_reactListening"+Math.random().toString(36).slice(2);function Fa(n){if(!n[Bo]){n[Bo]=!0,r.forEach(function(a){a!=="selectionchange"&&(zv.has(a)||$c(a,!1,n),$c(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Bo]||(i[Bo]=!0,$c("selectionchange",!1,i))}}function Wf(n,i,a,c){switch(ff(i)){case 1:var h=ev;break;case 4:h=tv;break;default:h=Lc}a=h.bind(null,i,a,n),h=void 0,!Ue||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(i,a,{capture:!0,passive:h}):n.addEventListener(i,a,!0):h!==void 0?n.addEventListener(i,a,{passive:h}):n.addEventListener(i,a,!1)}function Zc(n,i,a,c,h){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var C=c.tag;if(C===3||C===4){var k=c.stateNode.containerInfo;if(k===h||k.nodeType===8&&k.parentNode===h)break;if(C===4)for(C=c.return;C!==null;){var X=C.tag;if((X===3||X===4)&&(X=C.stateNode.containerInfo,X===h||X.nodeType===8&&X.parentNode===h))return;C=C.return}for(;k!==null;){if(C=ls(k),C===null)return;if(X=C.tag,X===5||X===6){c=m=C;continue e}k=k.parentNode}}c=c.return}Ve(function(){var pe=m,Ne=ve(a),Le=[];e:{var Re=zf.get(n);if(Re!==void 0){var qe=Oc,nt=n;switch(n){case"keypress":if(Lo(a)===0)break e;case"keydown":case"keyup":qe=gv;break;case"focusin":nt="focus",qe=Bc;break;case"focusout":nt="blur",qe=Bc;break;case"beforeblur":case"afterblur":qe=Bc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":qe=gf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":qe=rv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":qe=xv;break;case Of:case Ff:case kf:qe=ov;break;case Bf:qe=Sv;break;case"scroll":qe=nv;break;case"wheel":qe=Tv;break;case"copy":case"cut":case"paste":qe=cv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":qe=_f}var rt=(i&4)!==0,gn=!rt&&n==="scroll",oe=rt?Re!==null?Re+"Capture":null:Re;rt=[];for(var Z=pe,fe;Z!==null;){fe=Z;var ke=fe.stateNode;if(fe.tag===5&&ke!==null&&(fe=ke,oe!==null&&(ke=me(Z,oe),ke!=null&&rt.push(ka(Z,ke,fe)))),gn)break;Z=Z.return}0<rt.length&&(Re=new qe(Re,nt,null,a,Ne),Le.push({event:Re,listeners:rt}))}}if((i&7)===0){e:{if(Re=n==="mouseover"||n==="pointerover",qe=n==="mouseout"||n==="pointerout",Re&&a!==Fe&&(nt=a.relatedTarget||a.fromElement)&&(ls(nt)||nt[lr]))break e;if((qe||Re)&&(Re=Ne.window===Ne?Ne:(Re=Ne.ownerDocument)?Re.defaultView||Re.parentWindow:window,qe?(nt=a.relatedTarget||a.toElement,qe=pe,nt=nt?ls(nt):null,nt!==null&&(gn=Qt(nt),nt!==gn||nt.tag!==5&&nt.tag!==6)&&(nt=null)):(qe=null,nt=pe),qe!==nt)){if(rt=gf,ke="onMouseLeave",oe="onMouseEnter",Z="mouse",(n==="pointerout"||n==="pointerover")&&(rt=_f,ke="onPointerLeave",oe="onPointerEnter",Z="pointer"),gn=qe==null?Re:Os(qe),fe=nt==null?Re:Os(nt),Re=new rt(ke,Z+"leave",qe,a,Ne),Re.target=gn,Re.relatedTarget=fe,ke=null,ls(Ne)===pe&&(rt=new rt(oe,Z+"enter",nt,a,Ne),rt.target=fe,rt.relatedTarget=gn,ke=rt),gn=ke,qe&&nt)t:{for(rt=qe,oe=nt,Z=0,fe=rt;fe;fe=Is(fe))Z++;for(fe=0,ke=oe;ke;ke=Is(ke))fe++;for(;0<Z-fe;)rt=Is(rt),Z--;for(;0<fe-Z;)oe=Is(oe),fe--;for(;Z--;){if(rt===oe||oe!==null&&rt===oe.alternate)break t;rt=Is(rt),oe=Is(oe)}rt=null}else rt=null;qe!==null&&jf(Le,Re,qe,rt,!1),nt!==null&&gn!==null&&jf(Le,gn,nt,rt,!0)}}e:{if(Re=pe?Os(pe):window,qe=Re.nodeName&&Re.nodeName.toLowerCase(),qe==="select"||qe==="input"&&Re.type==="file")var at=Nv;else if(Ef(Re))if(Af)at=Iv;else{at=Dv;var ut=Pv}else(qe=Re.nodeName)&&qe.toLowerCase()==="input"&&(Re.type==="checkbox"||Re.type==="radio")&&(at=Lv);if(at&&(at=at(n,pe))){wf(Le,at,a,Ne);break e}ut&&ut(n,Re,pe),n==="focusout"&&(ut=Re._wrapperState)&&ut.controlled&&Re.type==="number"&&Sn(Re,"number",Re.value)}switch(ut=pe?Os(pe):window,n){case"focusin":(Ef(ut)||ut.contentEditable==="true")&&(Ds=ut,jc=pe,Ua=null);break;case"focusout":Ua=jc=Ds=null;break;case"mousedown":Xc=!0;break;case"contextmenu":case"mouseup":case"dragend":Xc=!1,If(Le,a,Ne);break;case"selectionchange":if(Fv)break;case"keydown":case"keyup":If(Le,a,Ne)}var ht;if(Hc)e:{switch(n){case"compositionstart":var mt="onCompositionStart";break e;case"compositionend":mt="onCompositionEnd";break e;case"compositionupdate":mt="onCompositionUpdate";break e}mt=void 0}else Ps?Mf(n,a)&&(mt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(mt="onCompositionStart");mt&&(xf&&a.locale!=="ko"&&(Ps||mt!=="onCompositionStart"?mt==="onCompositionEnd"&&Ps&&(ht=pf()):(Lr=Ne,Uc="value"in Lr?Lr.value:Lr.textContent,Ps=!0)),ut=zo(pe,mt),0<ut.length&&(mt=new vf(mt,n,null,a,Ne),Le.push({event:mt,listeners:ut}),ht?mt.data=ht:(ht=Tf(a),ht!==null&&(mt.data=ht)))),(ht=wv?Av(n,a):Cv(n,a))&&(pe=zo(pe,"onBeforeInput"),0<pe.length&&(Ne=new vf("onBeforeInput","beforeinput",null,a,Ne),Le.push({event:Ne,listeners:pe}),Ne.data=ht))}Gf(Le,i)})}function ka(n,i,a){return{instance:n,listener:i,currentTarget:a}}function zo(n,i){for(var a=i+"Capture",c=[];n!==null;){var h=n,m=h.stateNode;h.tag===5&&m!==null&&(h=m,m=me(n,a),m!=null&&c.unshift(ka(n,m,h)),m=me(n,i),m!=null&&c.push(ka(n,m,h))),n=n.return}return c}function Is(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function jf(n,i,a,c,h){for(var m=i._reactName,C=[];a!==null&&a!==c;){var k=a,X=k.alternate,pe=k.stateNode;if(X!==null&&X===c)break;k.tag===5&&pe!==null&&(k=pe,h?(X=me(a,m),X!=null&&C.unshift(ka(a,X,k))):h||(X=me(a,m),X!=null&&C.push(ka(a,X,k)))),a=a.return}C.length!==0&&n.push({event:i,listeners:C})}var Hv=/\r\n?/g,Vv=/\u0000|\uFFFD/g;function Xf(n){return(typeof n=="string"?n:""+n).replace(Hv,`
`).replace(Vv,"")}function Ho(n,i,a){if(i=Xf(i),Xf(n)!==i&&a)throw Error(t(425))}function Vo(){}var Qc=null,Jc=null;function eu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var tu=typeof setTimeout=="function"?setTimeout:void 0,Gv=typeof clearTimeout=="function"?clearTimeout:void 0,Kf=typeof Promise=="function"?Promise:void 0,Wv=typeof queueMicrotask=="function"?queueMicrotask:typeof Kf<"u"?function(n){return Kf.resolve(null).then(n).catch(jv)}:tu;function jv(n){setTimeout(function(){throw n})}function nu(n,i){var a=i,c=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(c===0){n.removeChild(h),ba(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=h}while(a);ba(i)}function Ur(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Yf(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Us=Math.random().toString(36).slice(2),qi="__reactFiber$"+Us,Ba="__reactProps$"+Us,lr="__reactContainer$"+Us,iu="__reactEvents$"+Us,Xv="__reactListeners$"+Us,Kv="__reactHandles$"+Us;function ls(n){var i=n[qi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[lr]||a[qi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Yf(n);n!==null;){if(a=n[qi])return a;n=Yf(n)}return i}n=a,a=n.parentNode}return null}function za(n){return n=n[qi]||n[lr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Os(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Go(n){return n[Ba]||null}var ru=[],Fs=-1;function Or(n){return{current:n}}function an(n){0>Fs||(n.current=ru[Fs],ru[Fs]=null,Fs--)}function tn(n,i){Fs++,ru[Fs]=n.current,n.current=i}var Fr={},Wn=Or(Fr),ai=Or(!1),cs=Fr;function ks(n,i){var a=n.type.contextTypes;if(!a)return Fr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var h={},m;for(m in a)h[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function oi(n){return n=n.childContextTypes,n!=null}function Wo(){an(ai),an(Wn)}function qf(n,i,a){if(Wn.current!==Fr)throw Error(t(168));tn(Wn,i),tn(ai,a)}function $f(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var h in c)if(!(h in i))throw Error(t(108,He(n)||"Unknown",h));return Q({},a,c)}function jo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Fr,cs=Wn.current,tn(Wn,n),tn(ai,ai.current),!0}function Zf(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=$f(n,i,cs),c.__reactInternalMemoizedMergedChildContext=n,an(ai),an(Wn),tn(Wn,n)):an(ai),tn(ai,a)}var cr=null,Xo=!1,su=!1;function Qf(n){cr===null?cr=[n]:cr.push(n)}function Yv(n){Xo=!0,Qf(n)}function kr(){if(!su&&cr!==null){su=!0;var n=0,i=st;try{var a=cr;for(st=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}cr=null,Xo=!1}catch(h){throw cr!==null&&(cr=cr.slice(n+1)),_n(Vn,kr),h}finally{st=i,su=!1}}return null}var Bs=[],zs=0,Ko=null,Yo=0,Ti=[],Ei=0,us=null,ur=1,hr="";function hs(n,i){Bs[zs++]=Yo,Bs[zs++]=Ko,Ko=n,Yo=i}function Jf(n,i,a){Ti[Ei++]=ur,Ti[Ei++]=hr,Ti[Ei++]=us,us=n;var c=ur;n=hr;var h=32-ie(c)-1;c&=~(1<<h),a+=1;var m=32-ie(i)+h;if(30<m){var C=h-h%5;m=(c&(1<<C)-1).toString(32),c>>=C,h-=C,ur=1<<32-ie(i)+h|a<<h|c,hr=m+n}else ur=1<<m|a<<h|c,hr=n}function au(n){n.return!==null&&(hs(n,1),Jf(n,1,0))}function ou(n){for(;n===Ko;)Ko=Bs[--zs],Bs[zs]=null,Yo=Bs[--zs],Bs[zs]=null;for(;n===us;)us=Ti[--Ei],Ti[Ei]=null,hr=Ti[--Ei],Ti[Ei]=null,ur=Ti[--Ei],Ti[Ei]=null}var mi=null,gi=null,ln=!1,Li=null;function ep(n,i){var a=bi(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function tp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,mi=n,gi=Ur(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,mi=n,gi=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=us!==null?{id:ur,overflow:hr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=bi(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,mi=n,gi=null,!0):!1;default:return!1}}function lu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function cu(n){if(ln){var i=gi;if(i){var a=i;if(!tp(n,i)){if(lu(n))throw Error(t(418));i=Ur(a.nextSibling);var c=mi;i&&tp(n,i)?ep(c,a):(n.flags=n.flags&-4097|2,ln=!1,mi=n)}}else{if(lu(n))throw Error(t(418));n.flags=n.flags&-4097|2,ln=!1,mi=n}}}function np(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;mi=n}function qo(n){if(n!==mi)return!1;if(!ln)return np(n),ln=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!eu(n.type,n.memoizedProps)),i&&(i=gi)){if(lu(n))throw ip(),Error(t(418));for(;i;)ep(n,i),i=Ur(i.nextSibling)}if(np(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){gi=Ur(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}gi=null}}else gi=mi?Ur(n.stateNode.nextSibling):null;return!0}function ip(){for(var n=gi;n;)n=Ur(n.nextSibling)}function Hs(){gi=mi=null,ln=!1}function uu(n){Li===null?Li=[n]:Li.push(n)}var qv=P.ReactCurrentBatchConfig;function Ha(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var h=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(C){var k=h.refs;C===null?delete k[m]:k[m]=C},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function $o(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function rp(n){var i=n._init;return i(n._payload)}function sp(n){function i(oe,Z){if(n){var fe=oe.deletions;fe===null?(oe.deletions=[Z],oe.flags|=16):fe.push(Z)}}function a(oe,Z){if(!n)return null;for(;Z!==null;)i(oe,Z),Z=Z.sibling;return null}function c(oe,Z){for(oe=new Map;Z!==null;)Z.key!==null?oe.set(Z.key,Z):oe.set(Z.index,Z),Z=Z.sibling;return oe}function h(oe,Z){return oe=Xr(oe,Z),oe.index=0,oe.sibling=null,oe}function m(oe,Z,fe){return oe.index=fe,n?(fe=oe.alternate,fe!==null?(fe=fe.index,fe<Z?(oe.flags|=2,Z):fe):(oe.flags|=2,Z)):(oe.flags|=1048576,Z)}function C(oe){return n&&oe.alternate===null&&(oe.flags|=2),oe}function k(oe,Z,fe,ke){return Z===null||Z.tag!==6?(Z=th(fe,oe.mode,ke),Z.return=oe,Z):(Z=h(Z,fe),Z.return=oe,Z)}function X(oe,Z,fe,ke){var at=fe.type;return at===T?Ne(oe,Z,fe.props.children,ke,fe.key):Z!==null&&(Z.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===le&&rp(at)===Z.type)?(ke=h(Z,fe.props),ke.ref=Ha(oe,Z,fe),ke.return=oe,ke):(ke=yl(fe.type,fe.key,fe.props,null,oe.mode,ke),ke.ref=Ha(oe,Z,fe),ke.return=oe,ke)}function pe(oe,Z,fe,ke){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==fe.containerInfo||Z.stateNode.implementation!==fe.implementation?(Z=nh(fe,oe.mode,ke),Z.return=oe,Z):(Z=h(Z,fe.children||[]),Z.return=oe,Z)}function Ne(oe,Z,fe,ke,at){return Z===null||Z.tag!==7?(Z=xs(fe,oe.mode,ke,at),Z.return=oe,Z):(Z=h(Z,fe),Z.return=oe,Z)}function Le(oe,Z,fe){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return Z=th(""+Z,oe.mode,fe),Z.return=oe,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case O:return fe=yl(Z.type,Z.key,Z.props,null,oe.mode,fe),fe.ref=Ha(oe,null,Z),fe.return=oe,fe;case I:return Z=nh(Z,oe.mode,fe),Z.return=oe,Z;case le:var ke=Z._init;return Le(oe,ke(Z._payload),fe)}if(kt(Z)||J(Z))return Z=xs(Z,oe.mode,fe,null),Z.return=oe,Z;$o(oe,Z)}return null}function Re(oe,Z,fe,ke){var at=Z!==null?Z.key:null;if(typeof fe=="string"&&fe!==""||typeof fe=="number")return at!==null?null:k(oe,Z,""+fe,ke);if(typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case O:return fe.key===at?X(oe,Z,fe,ke):null;case I:return fe.key===at?pe(oe,Z,fe,ke):null;case le:return at=fe._init,Re(oe,Z,at(fe._payload),ke)}if(kt(fe)||J(fe))return at!==null?null:Ne(oe,Z,fe,ke,null);$o(oe,fe)}return null}function qe(oe,Z,fe,ke,at){if(typeof ke=="string"&&ke!==""||typeof ke=="number")return oe=oe.get(fe)||null,k(Z,oe,""+ke,at);if(typeof ke=="object"&&ke!==null){switch(ke.$$typeof){case O:return oe=oe.get(ke.key===null?fe:ke.key)||null,X(Z,oe,ke,at);case I:return oe=oe.get(ke.key===null?fe:ke.key)||null,pe(Z,oe,ke,at);case le:var ut=ke._init;return qe(oe,Z,fe,ut(ke._payload),at)}if(kt(ke)||J(ke))return oe=oe.get(fe)||null,Ne(Z,oe,ke,at,null);$o(Z,ke)}return null}function nt(oe,Z,fe,ke){for(var at=null,ut=null,ht=Z,mt=Z=0,On=null;ht!==null&&mt<fe.length;mt++){ht.index>mt?(On=ht,ht=null):On=ht.sibling;var Vt=Re(oe,ht,fe[mt],ke);if(Vt===null){ht===null&&(ht=On);break}n&&ht&&Vt.alternate===null&&i(oe,ht),Z=m(Vt,Z,mt),ut===null?at=Vt:ut.sibling=Vt,ut=Vt,ht=On}if(mt===fe.length)return a(oe,ht),ln&&hs(oe,mt),at;if(ht===null){for(;mt<fe.length;mt++)ht=Le(oe,fe[mt],ke),ht!==null&&(Z=m(ht,Z,mt),ut===null?at=ht:ut.sibling=ht,ut=ht);return ln&&hs(oe,mt),at}for(ht=c(oe,ht);mt<fe.length;mt++)On=qe(ht,oe,mt,fe[mt],ke),On!==null&&(n&&On.alternate!==null&&ht.delete(On.key===null?mt:On.key),Z=m(On,Z,mt),ut===null?at=On:ut.sibling=On,ut=On);return n&&ht.forEach(function(Kr){return i(oe,Kr)}),ln&&hs(oe,mt),at}function rt(oe,Z,fe,ke){var at=J(fe);if(typeof at!="function")throw Error(t(150));if(fe=at.call(fe),fe==null)throw Error(t(151));for(var ut=at=null,ht=Z,mt=Z=0,On=null,Vt=fe.next();ht!==null&&!Vt.done;mt++,Vt=fe.next()){ht.index>mt?(On=ht,ht=null):On=ht.sibling;var Kr=Re(oe,ht,Vt.value,ke);if(Kr===null){ht===null&&(ht=On);break}n&&ht&&Kr.alternate===null&&i(oe,ht),Z=m(Kr,Z,mt),ut===null?at=Kr:ut.sibling=Kr,ut=Kr,ht=On}if(Vt.done)return a(oe,ht),ln&&hs(oe,mt),at;if(ht===null){for(;!Vt.done;mt++,Vt=fe.next())Vt=Le(oe,Vt.value,ke),Vt!==null&&(Z=m(Vt,Z,mt),ut===null?at=Vt:ut.sibling=Vt,ut=Vt);return ln&&hs(oe,mt),at}for(ht=c(oe,ht);!Vt.done;mt++,Vt=fe.next())Vt=qe(ht,oe,mt,Vt.value,ke),Vt!==null&&(n&&Vt.alternate!==null&&ht.delete(Vt.key===null?mt:Vt.key),Z=m(Vt,Z,mt),ut===null?at=Vt:ut.sibling=Vt,ut=Vt);return n&&ht.forEach(function(b_){return i(oe,b_)}),ln&&hs(oe,mt),at}function gn(oe,Z,fe,ke){if(typeof fe=="object"&&fe!==null&&fe.type===T&&fe.key===null&&(fe=fe.props.children),typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case O:e:{for(var at=fe.key,ut=Z;ut!==null;){if(ut.key===at){if(at=fe.type,at===T){if(ut.tag===7){a(oe,ut.sibling),Z=h(ut,fe.props.children),Z.return=oe,oe=Z;break e}}else if(ut.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===le&&rp(at)===ut.type){a(oe,ut.sibling),Z=h(ut,fe.props),Z.ref=Ha(oe,ut,fe),Z.return=oe,oe=Z;break e}a(oe,ut);break}else i(oe,ut);ut=ut.sibling}fe.type===T?(Z=xs(fe.props.children,oe.mode,ke,fe.key),Z.return=oe,oe=Z):(ke=yl(fe.type,fe.key,fe.props,null,oe.mode,ke),ke.ref=Ha(oe,Z,fe),ke.return=oe,oe=ke)}return C(oe);case I:e:{for(ut=fe.key;Z!==null;){if(Z.key===ut)if(Z.tag===4&&Z.stateNode.containerInfo===fe.containerInfo&&Z.stateNode.implementation===fe.implementation){a(oe,Z.sibling),Z=h(Z,fe.children||[]),Z.return=oe,oe=Z;break e}else{a(oe,Z);break}else i(oe,Z);Z=Z.sibling}Z=nh(fe,oe.mode,ke),Z.return=oe,oe=Z}return C(oe);case le:return ut=fe._init,gn(oe,Z,ut(fe._payload),ke)}if(kt(fe))return nt(oe,Z,fe,ke);if(J(fe))return rt(oe,Z,fe,ke);$o(oe,fe)}return typeof fe=="string"&&fe!==""||typeof fe=="number"?(fe=""+fe,Z!==null&&Z.tag===6?(a(oe,Z.sibling),Z=h(Z,fe),Z.return=oe,oe=Z):(a(oe,Z),Z=th(fe,oe.mode,ke),Z.return=oe,oe=Z),C(oe)):a(oe,Z)}return gn}var Vs=sp(!0),ap=sp(!1),Zo=Or(null),Qo=null,Gs=null,hu=null;function du(){hu=Gs=Qo=null}function fu(n){var i=Zo.current;an(Zo),n._currentValue=i}function pu(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Ws(n,i){Qo=n,hu=Gs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(li=!0),n.firstContext=null)}function wi(n){var i=n._currentValue;if(hu!==n)if(n={context:n,memoizedValue:i,next:null},Gs===null){if(Qo===null)throw Error(t(308));Gs=n,Qo.dependencies={lanes:0,firstContext:n}}else Gs=Gs.next=n;return i}var ds=null;function mu(n){ds===null?ds=[n]:ds.push(n)}function op(n,i,a,c){var h=i.interleaved;return h===null?(a.next=a,mu(i)):(a.next=h.next,h.next=a),i.interleaved=a,dr(n,c)}function dr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Br=!1;function gu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function fr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function zr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ut&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,dr(n,a)}return h=c.interleaved,h===null?(i.next=i,mu(c)):(i.next=h.next,h.next=i),c.interleaved=i,dr(n,a)}function Jo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Tn(n,a)}}function cp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var h=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var C={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?h=m=C:m=m.next=C,a=a.next}while(a!==null);m===null?h=m=i:m=m.next=i}else h=m=i;a={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function el(n,i,a,c){var h=n.updateQueue;Br=!1;var m=h.firstBaseUpdate,C=h.lastBaseUpdate,k=h.shared.pending;if(k!==null){h.shared.pending=null;var X=k,pe=X.next;X.next=null,C===null?m=pe:C.next=pe,C=X;var Ne=n.alternate;Ne!==null&&(Ne=Ne.updateQueue,k=Ne.lastBaseUpdate,k!==C&&(k===null?Ne.firstBaseUpdate=pe:k.next=pe,Ne.lastBaseUpdate=X))}if(m!==null){var Le=h.baseState;C=0,Ne=pe=X=null,k=m;do{var Re=k.lane,qe=k.eventTime;if((c&Re)===Re){Ne!==null&&(Ne=Ne.next={eventTime:qe,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var nt=n,rt=k;switch(Re=i,qe=a,rt.tag){case 1:if(nt=rt.payload,typeof nt=="function"){Le=nt.call(qe,Le,Re);break e}Le=nt;break e;case 3:nt.flags=nt.flags&-65537|128;case 0:if(nt=rt.payload,Re=typeof nt=="function"?nt.call(qe,Le,Re):nt,Re==null)break e;Le=Q({},Le,Re);break e;case 2:Br=!0}}k.callback!==null&&k.lane!==0&&(n.flags|=64,Re=h.effects,Re===null?h.effects=[k]:Re.push(k))}else qe={eventTime:qe,lane:Re,tag:k.tag,payload:k.payload,callback:k.callback,next:null},Ne===null?(pe=Ne=qe,X=Le):Ne=Ne.next=qe,C|=Re;if(k=k.next,k===null){if(k=h.shared.pending,k===null)break;Re=k,k=Re.next,Re.next=null,h.lastBaseUpdate=Re,h.shared.pending=null}}while(!0);if(Ne===null&&(X=Le),h.baseState=X,h.firstBaseUpdate=pe,h.lastBaseUpdate=Ne,i=h.shared.interleaved,i!==null){h=i;do C|=h.lane,h=h.next;while(h!==i)}else m===null&&(h.shared.lanes=0);ms|=C,n.lanes=C,n.memoizedState=Le}}function up(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],h=c.callback;if(h!==null){if(c.callback=null,c=a,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var Va={},$i=Or(Va),Ga=Or(Va),Wa=Or(Va);function fs(n){if(n===Va)throw Error(t(174));return n}function vu(n,i){switch(tn(Wa,i),tn(Ga,n),tn($i,Va),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:be(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=be(i,n)}an($i),tn($i,i)}function js(){an($i),an(Ga),an(Wa)}function hp(n){fs(Wa.current);var i=fs($i.current),a=be(i,n.type);i!==a&&(tn(Ga,n),tn($i,a))}function _u(n){Ga.current===n&&(an($i),an(Ga))}var un=Or(0);function tl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var xu=[];function yu(){for(var n=0;n<xu.length;n++)xu[n]._workInProgressVersionPrimary=null;xu.length=0}var nl=P.ReactCurrentDispatcher,Su=P.ReactCurrentBatchConfig,ps=0,hn=null,wn=null,In=null,il=!1,ja=!1,Xa=0,$v=0;function jn(){throw Error(t(321))}function Mu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Di(n[a],i[a]))return!1;return!0}function Tu(n,i,a,c,h,m){if(ps=m,hn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,nl.current=n===null||n.memoizedState===null?e_:t_,n=a(c,h),ja){m=0;do{if(ja=!1,Xa=0,25<=m)throw Error(t(301));m+=1,In=wn=null,i.updateQueue=null,nl.current=n_,n=a(c,h)}while(ja)}if(nl.current=al,i=wn!==null&&wn.next!==null,ps=0,In=wn=hn=null,il=!1,i)throw Error(t(300));return n}function Eu(){var n=Xa!==0;return Xa=0,n}function Zi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return In===null?hn.memoizedState=In=n:In=In.next=n,In}function Ai(){if(wn===null){var n=hn.alternate;n=n!==null?n.memoizedState:null}else n=wn.next;var i=In===null?hn.memoizedState:In.next;if(i!==null)In=i,wn=n;else{if(n===null)throw Error(t(310));wn=n,n={memoizedState:wn.memoizedState,baseState:wn.baseState,baseQueue:wn.baseQueue,queue:wn.queue,next:null},In===null?hn.memoizedState=In=n:In=In.next=n}return In}function Ka(n,i){return typeof i=="function"?i(n):i}function wu(n){var i=Ai(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=wn,h=c.baseQueue,m=a.pending;if(m!==null){if(h!==null){var C=h.next;h.next=m.next,m.next=C}c.baseQueue=h=m,a.pending=null}if(h!==null){m=h.next,c=c.baseState;var k=C=null,X=null,pe=m;do{var Ne=pe.lane;if((ps&Ne)===Ne)X!==null&&(X=X.next={lane:0,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null}),c=pe.hasEagerState?pe.eagerState:n(c,pe.action);else{var Le={lane:Ne,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null};X===null?(k=X=Le,C=c):X=X.next=Le,hn.lanes|=Ne,ms|=Ne}pe=pe.next}while(pe!==null&&pe!==m);X===null?C=c:X.next=k,Di(c,i.memoizedState)||(li=!0),i.memoizedState=c,i.baseState=C,i.baseQueue=X,a.lastRenderedState=c}if(n=a.interleaved,n!==null){h=n;do m=h.lane,hn.lanes|=m,ms|=m,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Au(n){var i=Ai(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,h=a.pending,m=i.memoizedState;if(h!==null){a.pending=null;var C=h=h.next;do m=n(m,C.action),C=C.next;while(C!==h);Di(m,i.memoizedState)||(li=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function dp(){}function fp(n,i){var a=hn,c=Ai(),h=i(),m=!Di(c.memoizedState,h);if(m&&(c.memoizedState=h,li=!0),c=c.queue,Cu(gp.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||In!==null&&In.memoizedState.tag&1){if(a.flags|=2048,Ya(9,mp.bind(null,a,c,h,i),void 0,null),Un===null)throw Error(t(349));(ps&30)!==0||pp(a,i,h)}return h}function pp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=hn.updateQueue,i===null?(i={lastEffect:null,stores:null},hn.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function mp(n,i,a,c){i.value=a,i.getSnapshot=c,vp(i)&&_p(n)}function gp(n,i,a){return a(function(){vp(i)&&_p(n)})}function vp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Di(n,a)}catch{return!0}}function _p(n){var i=dr(n,1);i!==null&&Fi(i,n,1,-1)}function xp(n){var i=Zi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ka,lastRenderedState:n},i.queue=n,n=n.dispatch=Jv.bind(null,hn,n),[i.memoizedState,n]}function Ya(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=hn.updateQueue,i===null?(i={lastEffect:null,stores:null},hn.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function yp(){return Ai().memoizedState}function rl(n,i,a,c){var h=Zi();hn.flags|=n,h.memoizedState=Ya(1|i,a,void 0,c===void 0?null:c)}function sl(n,i,a,c){var h=Ai();c=c===void 0?null:c;var m=void 0;if(wn!==null){var C=wn.memoizedState;if(m=C.destroy,c!==null&&Mu(c,C.deps)){h.memoizedState=Ya(i,a,m,c);return}}hn.flags|=n,h.memoizedState=Ya(1|i,a,m,c)}function Sp(n,i){return rl(8390656,8,n,i)}function Cu(n,i){return sl(2048,8,n,i)}function Mp(n,i){return sl(4,2,n,i)}function Tp(n,i){return sl(4,4,n,i)}function Ep(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function wp(n,i,a){return a=a!=null?a.concat([n]):null,sl(4,4,Ep.bind(null,i,n),a)}function bu(){}function Ap(n,i){var a=Ai();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Mu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Cp(n,i){var a=Ai();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Mu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function bp(n,i,a){return(ps&21)===0?(n.baseState&&(n.baseState=!1,li=!0),n.memoizedState=a):(Di(a,i)||(a=Kt(),hn.lanes|=a,ms|=a,n.baseState=!0),i)}function Zv(n,i){var a=st;st=a!==0&&4>a?a:4,n(!0);var c=Su.transition;Su.transition={};try{n(!1),i()}finally{st=a,Su.transition=c}}function Rp(){return Ai().memoizedState}function Qv(n,i,a){var c=Wr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Np(n))Pp(i,a);else if(a=op(n,i,a,c),a!==null){var h=ei();Fi(a,n,c,h),Dp(a,i,c)}}function Jv(n,i,a){var c=Wr(n),h={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Np(n))Pp(i,h);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var C=i.lastRenderedState,k=m(C,a);if(h.hasEagerState=!0,h.eagerState=k,Di(k,C)){var X=i.interleaved;X===null?(h.next=h,mu(i)):(h.next=X.next,X.next=h),i.interleaved=h;return}}catch{}finally{}a=op(n,i,h,c),a!==null&&(h=ei(),Fi(a,n,c,h),Dp(a,i,c))}}function Np(n){var i=n.alternate;return n===hn||i!==null&&i===hn}function Pp(n,i){ja=il=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Dp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Tn(n,a)}}var al={readContext:wi,useCallback:jn,useContext:jn,useEffect:jn,useImperativeHandle:jn,useInsertionEffect:jn,useLayoutEffect:jn,useMemo:jn,useReducer:jn,useRef:jn,useState:jn,useDebugValue:jn,useDeferredValue:jn,useTransition:jn,useMutableSource:jn,useSyncExternalStore:jn,useId:jn,unstable_isNewReconciler:!1},e_={readContext:wi,useCallback:function(n,i){return Zi().memoizedState=[n,i===void 0?null:i],n},useContext:wi,useEffect:Sp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,rl(4194308,4,Ep.bind(null,i,n),a)},useLayoutEffect:function(n,i){return rl(4194308,4,n,i)},useInsertionEffect:function(n,i){return rl(4,2,n,i)},useMemo:function(n,i){var a=Zi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Zi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Qv.bind(null,hn,n),[c.memoizedState,n]},useRef:function(n){var i=Zi();return n={current:n},i.memoizedState=n},useState:xp,useDebugValue:bu,useDeferredValue:function(n){return Zi().memoizedState=n},useTransition:function(){var n=xp(!1),i=n[0];return n=Zv.bind(null,n[1]),Zi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=hn,h=Zi();if(ln){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Un===null)throw Error(t(349));(ps&30)!==0||pp(c,i,a)}h.memoizedState=a;var m={value:a,getSnapshot:i};return h.queue=m,Sp(gp.bind(null,c,m,n),[n]),c.flags|=2048,Ya(9,mp.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=Zi(),i=Un.identifierPrefix;if(ln){var a=hr,c=ur;a=(c&~(1<<32-ie(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Xa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=$v++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},t_={readContext:wi,useCallback:Ap,useContext:wi,useEffect:Cu,useImperativeHandle:wp,useInsertionEffect:Mp,useLayoutEffect:Tp,useMemo:Cp,useReducer:wu,useRef:yp,useState:function(){return wu(Ka)},useDebugValue:bu,useDeferredValue:function(n){var i=Ai();return bp(i,wn.memoizedState,n)},useTransition:function(){var n=wu(Ka)[0],i=Ai().memoizedState;return[n,i]},useMutableSource:dp,useSyncExternalStore:fp,useId:Rp,unstable_isNewReconciler:!1},n_={readContext:wi,useCallback:Ap,useContext:wi,useEffect:Cu,useImperativeHandle:wp,useInsertionEffect:Mp,useLayoutEffect:Tp,useMemo:Cp,useReducer:Au,useRef:yp,useState:function(){return Au(Ka)},useDebugValue:bu,useDeferredValue:function(n){var i=Ai();return wn===null?i.memoizedState=n:bp(i,wn.memoizedState,n)},useTransition:function(){var n=Au(Ka)[0],i=Ai().memoizedState;return[n,i]},useMutableSource:dp,useSyncExternalStore:fp,useId:Rp,unstable_isNewReconciler:!1};function Ii(n,i){if(n&&n.defaultProps){i=Q({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Ru(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:Q({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var ol={isMounted:function(n){return(n=n._reactInternals)?Qt(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=ei(),h=Wr(n),m=fr(c,h);m.payload=i,a!=null&&(m.callback=a),i=zr(n,m,h),i!==null&&(Fi(i,n,h,c),Jo(i,n,h))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=ei(),h=Wr(n),m=fr(c,h);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=zr(n,m,h),i!==null&&(Fi(i,n,h,c),Jo(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=ei(),c=Wr(n),h=fr(a,c);h.tag=2,i!=null&&(h.callback=i),i=zr(n,h,c),i!==null&&(Fi(i,n,c,a),Jo(i,n,c))}};function Lp(n,i,a,c,h,m,C){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,C):i.prototype&&i.prototype.isPureReactComponent?!Ia(a,c)||!Ia(h,m):!0}function Ip(n,i,a){var c=!1,h=Fr,m=i.contextType;return typeof m=="object"&&m!==null?m=wi(m):(h=oi(i)?cs:Wn.current,c=i.contextTypes,m=(c=c!=null)?ks(n,h):Fr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ol,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=m),i}function Up(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&ol.enqueueReplaceState(i,i.state,null)}function Nu(n,i,a,c){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},gu(n);var m=i.contextType;typeof m=="object"&&m!==null?h.context=wi(m):(m=oi(i)?cs:Wn.current,h.context=ks(n,m)),h.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Ru(n,i,m,a),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&ol.enqueueReplaceState(h,h.state,null),el(n,a,h,c),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Xs(n,i){try{var a="",c=i;do a+=we(c),c=c.return;while(c);var h=a}catch(m){h=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:h,digest:null}}function Pu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Du(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var i_=typeof WeakMap=="function"?WeakMap:Map;function Op(n,i,a){a=fr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){pl||(pl=!0,Ku=c),Du(n,i)},a}function Fp(n,i,a){a=fr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var h=i.value;a.payload=function(){return c(h)},a.callback=function(){Du(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Du(n,i),typeof c!="function"&&(Vr===null?Vr=new Set([this]):Vr.add(this));var C=i.stack;this.componentDidCatch(i.value,{componentStack:C!==null?C:""})}),a}function kp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new i_;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(a)||(h.add(a),n=v_.bind(null,n,i,a),i.then(n,n))}function Bp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function zp(n,i,a,c,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=fr(-1,1),i.tag=2,zr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var r_=P.ReactCurrentOwner,li=!1;function Jn(n,i,a,c){i.child=n===null?ap(i,null,a,c):Vs(i,n.child,a,c)}function Hp(n,i,a,c,h){a=a.render;var m=i.ref;return Ws(i,h),c=Tu(n,i,a,c,m,h),a=Eu(),n!==null&&!li?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,pr(n,i,h)):(ln&&a&&au(i),i.flags|=1,Jn(n,i,c,h),i.child)}function Vp(n,i,a,c,h){if(n===null){var m=a.type;return typeof m=="function"&&!eh(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,Gp(n,i,m,c,h)):(n=yl(a.type,null,c,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&h)===0){var C=m.memoizedProps;if(a=a.compare,a=a!==null?a:Ia,a(C,c)&&n.ref===i.ref)return pr(n,i,h)}return i.flags|=1,n=Xr(m,c),n.ref=i.ref,n.return=i,i.child=n}function Gp(n,i,a,c,h){if(n!==null){var m=n.memoizedProps;if(Ia(m,c)&&n.ref===i.ref)if(li=!1,i.pendingProps=c=m,(n.lanes&h)!==0)(n.flags&131072)!==0&&(li=!0);else return i.lanes=n.lanes,pr(n,i,h)}return Lu(n,i,a,c,h)}function Wp(n,i,a){var c=i.pendingProps,h=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},tn(Ys,vi),vi|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,tn(Ys,vi),vi|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,tn(Ys,vi),vi|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,tn(Ys,vi),vi|=c;return Jn(n,i,h,a),i.child}function jp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Lu(n,i,a,c,h){var m=oi(a)?cs:Wn.current;return m=ks(i,m),Ws(i,h),a=Tu(n,i,a,c,m,h),c=Eu(),n!==null&&!li?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,pr(n,i,h)):(ln&&c&&au(i),i.flags|=1,Jn(n,i,a,h),i.child)}function Xp(n,i,a,c,h){if(oi(a)){var m=!0;jo(i)}else m=!1;if(Ws(i,h),i.stateNode===null)cl(n,i),Ip(i,a,c),Nu(i,a,c,h),c=!0;else if(n===null){var C=i.stateNode,k=i.memoizedProps;C.props=k;var X=C.context,pe=a.contextType;typeof pe=="object"&&pe!==null?pe=wi(pe):(pe=oi(a)?cs:Wn.current,pe=ks(i,pe));var Ne=a.getDerivedStateFromProps,Le=typeof Ne=="function"||typeof C.getSnapshotBeforeUpdate=="function";Le||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(k!==c||X!==pe)&&Up(i,C,c,pe),Br=!1;var Re=i.memoizedState;C.state=Re,el(i,c,C,h),X=i.memoizedState,k!==c||Re!==X||ai.current||Br?(typeof Ne=="function"&&(Ru(i,a,Ne,c),X=i.memoizedState),(k=Br||Lp(i,a,k,c,Re,X,pe))?(Le||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount()),typeof C.componentDidMount=="function"&&(i.flags|=4194308)):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=X),C.props=c,C.state=X,C.context=pe,c=k):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{C=i.stateNode,lp(n,i),k=i.memoizedProps,pe=i.type===i.elementType?k:Ii(i.type,k),C.props=pe,Le=i.pendingProps,Re=C.context,X=a.contextType,typeof X=="object"&&X!==null?X=wi(X):(X=oi(a)?cs:Wn.current,X=ks(i,X));var qe=a.getDerivedStateFromProps;(Ne=typeof qe=="function"||typeof C.getSnapshotBeforeUpdate=="function")||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(k!==Le||Re!==X)&&Up(i,C,c,X),Br=!1,Re=i.memoizedState,C.state=Re,el(i,c,C,h);var nt=i.memoizedState;k!==Le||Re!==nt||ai.current||Br?(typeof qe=="function"&&(Ru(i,a,qe,c),nt=i.memoizedState),(pe=Br||Lp(i,a,pe,c,Re,nt,X)||!1)?(Ne||typeof C.UNSAFE_componentWillUpdate!="function"&&typeof C.componentWillUpdate!="function"||(typeof C.componentWillUpdate=="function"&&C.componentWillUpdate(c,nt,X),typeof C.UNSAFE_componentWillUpdate=="function"&&C.UNSAFE_componentWillUpdate(c,nt,X)),typeof C.componentDidUpdate=="function"&&(i.flags|=4),typeof C.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof C.componentDidUpdate!="function"||k===n.memoizedProps&&Re===n.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&Re===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=nt),C.props=c,C.state=nt,C.context=X,c=pe):(typeof C.componentDidUpdate!="function"||k===n.memoizedProps&&Re===n.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&Re===n.memoizedState||(i.flags|=1024),c=!1)}return Iu(n,i,a,c,m,h)}function Iu(n,i,a,c,h,m){jp(n,i);var C=(i.flags&128)!==0;if(!c&&!C)return h&&Zf(i,a,!1),pr(n,i,m);c=i.stateNode,r_.current=i;var k=C&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&C?(i.child=Vs(i,n.child,null,m),i.child=Vs(i,null,k,m)):Jn(n,i,k,m),i.memoizedState=c.state,h&&Zf(i,a,!0),i.child}function Kp(n){var i=n.stateNode;i.pendingContext?qf(n,i.pendingContext,i.pendingContext!==i.context):i.context&&qf(n,i.context,!1),vu(n,i.containerInfo)}function Yp(n,i,a,c,h){return Hs(),uu(h),i.flags|=256,Jn(n,i,a,c),i.child}var Uu={dehydrated:null,treeContext:null,retryLane:0};function Ou(n){return{baseLanes:n,cachePool:null,transitions:null}}function qp(n,i,a){var c=i.pendingProps,h=un.current,m=!1,C=(i.flags&128)!==0,k;if((k=C)||(k=n!==null&&n.memoizedState===null?!1:(h&2)!==0),k?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),tn(un,h&1),n===null)return cu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(C=c.children,n=c.fallback,m?(c=i.mode,m=i.child,C={mode:"hidden",children:C},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=C):m=Sl(C,c,0,null),n=xs(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=Ou(a),i.memoizedState=Uu,n):Fu(i,C));if(h=n.memoizedState,h!==null&&(k=h.dehydrated,k!==null))return s_(n,i,C,c,k,h,a);if(m){m=c.fallback,C=i.mode,h=n.child,k=h.sibling;var X={mode:"hidden",children:c.children};return(C&1)===0&&i.child!==h?(c=i.child,c.childLanes=0,c.pendingProps=X,i.deletions=null):(c=Xr(h,X),c.subtreeFlags=h.subtreeFlags&14680064),k!==null?m=Xr(k,m):(m=xs(m,C,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,C=n.child.memoizedState,C=C===null?Ou(a):{baseLanes:C.baseLanes|a,cachePool:null,transitions:C.transitions},m.memoizedState=C,m.childLanes=n.childLanes&~a,i.memoizedState=Uu,c}return m=n.child,n=m.sibling,c=Xr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Fu(n,i){return i=Sl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function ll(n,i,a,c){return c!==null&&uu(c),Vs(i,n.child,null,a),n=Fu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function s_(n,i,a,c,h,m,C){if(a)return i.flags&256?(i.flags&=-257,c=Pu(Error(t(422))),ll(n,i,C,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,h=i.mode,c=Sl({mode:"visible",children:c.children},h,0,null),m=xs(m,h,C,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&Vs(i,n.child,null,C),i.child.memoizedState=Ou(C),i.memoizedState=Uu,m);if((i.mode&1)===0)return ll(n,i,C,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var k=c.dgst;return c=k,m=Error(t(419)),c=Pu(m,c,void 0),ll(n,i,C,c)}if(k=(C&n.childLanes)!==0,li||k){if(c=Un,c!==null){switch(C&-C){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|C))!==0?0:h,h!==0&&h!==m.retryLane&&(m.retryLane=h,dr(n,h),Fi(c,n,h,-1))}return Ju(),c=Pu(Error(t(421))),ll(n,i,C,c)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=__.bind(null,n),h._reactRetry=i,null):(n=m.treeContext,gi=Ur(h.nextSibling),mi=i,ln=!0,Li=null,n!==null&&(Ti[Ei++]=ur,Ti[Ei++]=hr,Ti[Ei++]=us,ur=n.id,hr=n.overflow,us=i),i=Fu(i,c.children),i.flags|=4096,i)}function $p(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),pu(n.return,i,a)}function ku(n,i,a,c,h){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:h}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=h)}function Zp(n,i,a){var c=i.pendingProps,h=c.revealOrder,m=c.tail;if(Jn(n,i,c.children,a),c=un.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&$p(n,a,i);else if(n.tag===19)$p(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(tn(un,c),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)n=a.alternate,n!==null&&tl(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),ku(i,!1,h,a,m);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&tl(n)===null){i.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}ku(i,!0,a,null,m);break;case"together":ku(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function cl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function pr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),ms|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Xr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Xr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function a_(n,i,a){switch(i.tag){case 3:Kp(i),Hs();break;case 5:hp(i);break;case 1:oi(i.type)&&jo(i);break;case 4:vu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,h=i.memoizedProps.value;tn(Zo,c._currentValue),c._currentValue=h;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(tn(un,un.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?qp(n,i,a):(tn(un,un.current&1),n=pr(n,i,a),n!==null?n.sibling:null);tn(un,un.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Zp(n,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),tn(un,un.current),c)break;return null;case 22:case 23:return i.lanes=0,Wp(n,i,a)}return pr(n,i,a)}var Qp,Bu,Jp,em;Qp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Bu=function(){},Jp=function(n,i,a,c){var h=n.memoizedProps;if(h!==c){n=i.stateNode,fs($i.current);var m=null;switch(a){case"input":h=gt(n,h),c=gt(n,c),m=[];break;case"select":h=Q({},h,{value:void 0}),c=Q({},c,{value:void 0}),m=[];break;case"textarea":h=Mt(n,h),c=Mt(n,c),m=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Vo)}Ee(a,c);var C;a=null;for(pe in h)if(!c.hasOwnProperty(pe)&&h.hasOwnProperty(pe)&&h[pe]!=null)if(pe==="style"){var k=h[pe];for(C in k)k.hasOwnProperty(C)&&(a||(a={}),a[C]="")}else pe!=="dangerouslySetInnerHTML"&&pe!=="children"&&pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&pe!=="autoFocus"&&(o.hasOwnProperty(pe)?m||(m=[]):(m=m||[]).push(pe,null));for(pe in c){var X=c[pe];if(k=h!=null?h[pe]:void 0,c.hasOwnProperty(pe)&&X!==k&&(X!=null||k!=null))if(pe==="style")if(k){for(C in k)!k.hasOwnProperty(C)||X&&X.hasOwnProperty(C)||(a||(a={}),a[C]="");for(C in X)X.hasOwnProperty(C)&&k[C]!==X[C]&&(a||(a={}),a[C]=X[C])}else a||(m||(m=[]),m.push(pe,a)),a=X;else pe==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,k=k?k.__html:void 0,X!=null&&k!==X&&(m=m||[]).push(pe,X)):pe==="children"?typeof X!="string"&&typeof X!="number"||(m=m||[]).push(pe,""+X):pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&(o.hasOwnProperty(pe)?(X!=null&&pe==="onScroll"&&sn("scroll",n),m||k===X||(m=[])):(m=m||[]).push(pe,X))}a&&(m=m||[]).push("style",a);var pe=m;(i.updateQueue=pe)&&(i.flags|=4)}},em=function(n,i,a,c){a!==c&&(i.flags|=4)};function qa(n,i){if(!ln)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Xn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function o_(n,i,a){var c=i.pendingProps;switch(ou(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xn(i),null;case 1:return oi(i.type)&&Wo(),Xn(i),null;case 3:return c=i.stateNode,js(),an(ai),an(Wn),yu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(qo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Li!==null&&($u(Li),Li=null))),Bu(n,i),Xn(i),null;case 5:_u(i);var h=fs(Wa.current);if(a=i.type,n!==null&&i.stateNode!=null)Jp(n,i,a,c,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Xn(i),null}if(n=fs($i.current),qo(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[qi]=i,c[Ba]=m,n=(i.mode&1)!==0,a){case"dialog":sn("cancel",c),sn("close",c);break;case"iframe":case"object":case"embed":sn("load",c);break;case"video":case"audio":for(h=0;h<Oa.length;h++)sn(Oa[h],c);break;case"source":sn("error",c);break;case"img":case"image":case"link":sn("error",c),sn("load",c);break;case"details":sn("toggle",c);break;case"input":nn(c,m),sn("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},sn("invalid",c);break;case"textarea":Xt(c,m),sn("invalid",c)}Ee(a,m),h=null;for(var C in m)if(m.hasOwnProperty(C)){var k=m[C];C==="children"?typeof k=="string"?c.textContent!==k&&(m.suppressHydrationWarning!==!0&&Ho(c.textContent,k,n),h=["children",k]):typeof k=="number"&&c.textContent!==""+k&&(m.suppressHydrationWarning!==!0&&Ho(c.textContent,k,n),h=["children",""+k]):o.hasOwnProperty(C)&&k!=null&&C==="onScroll"&&sn("scroll",c)}switch(a){case"input":lt(c),Lt(c,m,!0);break;case"textarea":lt(c),_t(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Vo)}c=h,i.updateQueue=c,c!==null&&(i.flags|=4)}else{C=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=re(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=C.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=C.createElement(a,{is:c.is}):(n=C.createElement(a),a==="select"&&(C=n,c.multiple?C.multiple=!0:c.size&&(C.size=c.size))):n=C.createElementNS(n,a),n[qi]=i,n[Ba]=c,Qp(n,i,!1,!1),i.stateNode=n;e:{switch(C=De(a,c),a){case"dialog":sn("cancel",n),sn("close",n),h=c;break;case"iframe":case"object":case"embed":sn("load",n),h=c;break;case"video":case"audio":for(h=0;h<Oa.length;h++)sn(Oa[h],n);h=c;break;case"source":sn("error",n),h=c;break;case"img":case"image":case"link":sn("error",n),sn("load",n),h=c;break;case"details":sn("toggle",n),h=c;break;case"input":nn(n,c),h=gt(n,c),sn("invalid",n);break;case"option":h=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},h=Q({},c,{value:void 0}),sn("invalid",n);break;case"textarea":Xt(n,c),h=Mt(n,c),sn("invalid",n);break;default:h=c}Ee(a,h),k=h;for(m in k)if(k.hasOwnProperty(m)){var X=k[m];m==="style"?K(n,X):m==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,X!=null&&Ye(n,X)):m==="children"?typeof X=="string"?(a!=="textarea"||X!=="")&&Te(n,X):typeof X=="number"&&Te(n,""+X):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?X!=null&&m==="onScroll"&&sn("scroll",n):X!=null&&F(n,m,X,C))}switch(a){case"input":lt(n),Lt(n,c,!1);break;case"textarea":lt(n),_t(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Ae(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?Zt(n,!!c.multiple,m,!1):c.defaultValue!=null&&Zt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Vo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Xn(i),null;case 6:if(n&&i.stateNode!=null)em(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=fs(Wa.current),fs($i.current),qo(i)){if(c=i.stateNode,a=i.memoizedProps,c[qi]=i,(m=c.nodeValue!==a)&&(n=mi,n!==null))switch(n.tag){case 3:Ho(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ho(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[qi]=i,i.stateNode=c}return Xn(i),null;case 13:if(an(un),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(ln&&gi!==null&&(i.mode&1)!==0&&(i.flags&128)===0)ip(),Hs(),i.flags|=98560,m=!1;else if(m=qo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[qi]=i}else Hs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Xn(i),m=!1}else Li!==null&&($u(Li),Li=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(un.current&1)!==0?An===0&&(An=3):Ju())),i.updateQueue!==null&&(i.flags|=4),Xn(i),null);case 4:return js(),Bu(n,i),n===null&&Fa(i.stateNode.containerInfo),Xn(i),null;case 10:return fu(i.type._context),Xn(i),null;case 17:return oi(i.type)&&Wo(),Xn(i),null;case 19:if(an(un),m=i.memoizedState,m===null)return Xn(i),null;if(c=(i.flags&128)!==0,C=m.rendering,C===null)if(c)qa(m,!1);else{if(An!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(C=tl(n),C!==null){for(i.flags|=128,qa(m,!1),c=C.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,C=m.alternate,C===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=C.childLanes,m.lanes=C.lanes,m.child=C.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=C.memoizedProps,m.memoizedState=C.memoizedState,m.updateQueue=C.updateQueue,m.type=C.type,n=C.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return tn(un,un.current&1|2),i.child}n=n.sibling}m.tail!==null&&It()>qs&&(i.flags|=128,c=!0,qa(m,!1),i.lanes=4194304)}else{if(!c)if(n=tl(C),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),qa(m,!0),m.tail===null&&m.tailMode==="hidden"&&!C.alternate&&!ln)return Xn(i),null}else 2*It()-m.renderingStartTime>qs&&a!==1073741824&&(i.flags|=128,c=!0,qa(m,!1),i.lanes=4194304);m.isBackwards?(C.sibling=i.child,i.child=C):(a=m.last,a!==null?a.sibling=C:i.child=C,m.last=C)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=It(),i.sibling=null,a=un.current,tn(un,c?a&1|2:a&1),i):(Xn(i),null);case 22:case 23:return Qu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(vi&1073741824)!==0&&(Xn(i),i.subtreeFlags&6&&(i.flags|=8192)):Xn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function l_(n,i){switch(ou(i),i.tag){case 1:return oi(i.type)&&Wo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return js(),an(ai),an(Wn),yu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return _u(i),null;case 13:if(an(un),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Hs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return an(un),null;case 4:return js(),null;case 10:return fu(i.type._context),null;case 22:case 23:return Qu(),null;case 24:return null;default:return null}}var ul=!1,Kn=!1,c_=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function Ks(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){pn(n,i,c)}else a.current=null}function zu(n,i,a){try{a()}catch(c){pn(n,i,c)}}var tm=!1;function u_(n,i){if(Qc=No,n=Lf(),Wc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var h=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var C=0,k=-1,X=-1,pe=0,Ne=0,Le=n,Re=null;t:for(;;){for(var qe;Le!==a||h!==0&&Le.nodeType!==3||(k=C+h),Le!==m||c!==0&&Le.nodeType!==3||(X=C+c),Le.nodeType===3&&(C+=Le.nodeValue.length),(qe=Le.firstChild)!==null;)Re=Le,Le=qe;for(;;){if(Le===n)break t;if(Re===a&&++pe===h&&(k=C),Re===m&&++Ne===c&&(X=C),(qe=Le.nextSibling)!==null)break;Le=Re,Re=Le.parentNode}Le=qe}a=k===-1||X===-1?null:{start:k,end:X}}else a=null}a=a||{start:0,end:0}}else a=null;for(Jc={focusedElem:n,selectionRange:a},No=!1,Ze=i;Ze!==null;)if(i=Ze,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ze=n;else for(;Ze!==null;){i=Ze;try{var nt=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(nt!==null){var rt=nt.memoizedProps,gn=nt.memoizedState,oe=i.stateNode,Z=oe.getSnapshotBeforeUpdate(i.elementType===i.type?rt:Ii(i.type,rt),gn);oe.__reactInternalSnapshotBeforeUpdate=Z}break;case 3:var fe=i.stateNode.containerInfo;fe.nodeType===1?fe.textContent="":fe.nodeType===9&&fe.documentElement&&fe.removeChild(fe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ke){pn(i,i.return,ke)}if(n=i.sibling,n!==null){n.return=i.return,Ze=n;break}Ze=i.return}return nt=tm,tm=!1,nt}function $a(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&n)===n){var m=h.destroy;h.destroy=void 0,m!==void 0&&zu(i,a,m)}h=h.next}while(h!==c)}}function hl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Hu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function nm(n){var i=n.alternate;i!==null&&(n.alternate=null,nm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[qi],delete i[Ba],delete i[iu],delete i[Xv],delete i[Kv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function im(n){return n.tag===5||n.tag===3||n.tag===4}function rm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||im(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Vu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Vo));else if(c!==4&&(n=n.child,n!==null))for(Vu(n,i,a),n=n.sibling;n!==null;)Vu(n,i,a),n=n.sibling}function Gu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Gu(n,i,a),n=n.sibling;n!==null;)Gu(n,i,a),n=n.sibling}var Bn=null,Ui=!1;function Hr(n,i,a){for(a=a.child;a!==null;)sm(n,i,a),a=a.sibling}function sm(n,i,a){if(de&&typeof de.onCommitFiberUnmount=="function")try{de.onCommitFiberUnmount(W,a)}catch{}switch(a.tag){case 5:Kn||Ks(a,i);case 6:var c=Bn,h=Ui;Bn=null,Hr(n,i,a),Bn=c,Ui=h,Bn!==null&&(Ui?(n=Bn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Bn.removeChild(a.stateNode));break;case 18:Bn!==null&&(Ui?(n=Bn,a=a.stateNode,n.nodeType===8?nu(n.parentNode,a):n.nodeType===1&&nu(n,a),ba(n)):nu(Bn,a.stateNode));break;case 4:c=Bn,h=Ui,Bn=a.stateNode.containerInfo,Ui=!0,Hr(n,i,a),Bn=c,Ui=h;break;case 0:case 11:case 14:case 15:if(!Kn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var m=h,C=m.destroy;m=m.tag,C!==void 0&&((m&2)!==0||(m&4)!==0)&&zu(a,i,C),h=h.next}while(h!==c)}Hr(n,i,a);break;case 1:if(!Kn&&(Ks(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(k){pn(a,i,k)}Hr(n,i,a);break;case 21:Hr(n,i,a);break;case 22:a.mode&1?(Kn=(c=Kn)||a.memoizedState!==null,Hr(n,i,a),Kn=c):Hr(n,i,a);break;default:Hr(n,i,a)}}function am(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new c_),i.forEach(function(c){var h=x_.bind(null,n,c);a.has(c)||(a.add(c),c.then(h,h))})}}function Oi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var h=a[c];try{var m=n,C=i,k=C;e:for(;k!==null;){switch(k.tag){case 5:Bn=k.stateNode,Ui=!1;break e;case 3:Bn=k.stateNode.containerInfo,Ui=!0;break e;case 4:Bn=k.stateNode.containerInfo,Ui=!0;break e}k=k.return}if(Bn===null)throw Error(t(160));sm(m,C,h),Bn=null,Ui=!1;var X=h.alternate;X!==null&&(X.return=null),h.return=null}catch(pe){pn(h,i,pe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)om(i,n),i=i.sibling}function om(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Oi(i,n),Qi(n),c&4){try{$a(3,n,n.return),hl(3,n)}catch(rt){pn(n,n.return,rt)}try{$a(5,n,n.return)}catch(rt){pn(n,n.return,rt)}}break;case 1:Oi(i,n),Qi(n),c&512&&a!==null&&Ks(a,a.return);break;case 5:if(Oi(i,n),Qi(n),c&512&&a!==null&&Ks(a,a.return),n.flags&32){var h=n.stateNode;try{Te(h,"")}catch(rt){pn(n,n.return,rt)}}if(c&4&&(h=n.stateNode,h!=null)){var m=n.memoizedProps,C=a!==null?a.memoizedProps:m,k=n.type,X=n.updateQueue;if(n.updateQueue=null,X!==null)try{k==="input"&&m.type==="radio"&&m.name!=null&&jt(h,m),De(k,C);var pe=De(k,m);for(C=0;C<X.length;C+=2){var Ne=X[C],Le=X[C+1];Ne==="style"?K(h,Le):Ne==="dangerouslySetInnerHTML"?Ye(h,Le):Ne==="children"?Te(h,Le):F(h,Ne,Le,pe)}switch(k){case"input":cn(h,m);break;case"textarea":j(h,m);break;case"select":var Re=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!m.multiple;var qe=m.value;qe!=null?Zt(h,!!m.multiple,qe,!1):Re!==!!m.multiple&&(m.defaultValue!=null?Zt(h,!!m.multiple,m.defaultValue,!0):Zt(h,!!m.multiple,m.multiple?[]:"",!1))}h[Ba]=m}catch(rt){pn(n,n.return,rt)}}break;case 6:if(Oi(i,n),Qi(n),c&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,m=n.memoizedProps;try{h.nodeValue=m}catch(rt){pn(n,n.return,rt)}}break;case 3:if(Oi(i,n),Qi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ba(i.containerInfo)}catch(rt){pn(n,n.return,rt)}break;case 4:Oi(i,n),Qi(n);break;case 13:Oi(i,n),Qi(n),h=n.child,h.flags&8192&&(m=h.memoizedState!==null,h.stateNode.isHidden=m,!m||h.alternate!==null&&h.alternate.memoizedState!==null||(Xu=It())),c&4&&am(n);break;case 22:if(Ne=a!==null&&a.memoizedState!==null,n.mode&1?(Kn=(pe=Kn)||Ne,Oi(i,n),Kn=pe):Oi(i,n),Qi(n),c&8192){if(pe=n.memoizedState!==null,(n.stateNode.isHidden=pe)&&!Ne&&(n.mode&1)!==0)for(Ze=n,Ne=n.child;Ne!==null;){for(Le=Ze=Ne;Ze!==null;){switch(Re=Ze,qe=Re.child,Re.tag){case 0:case 11:case 14:case 15:$a(4,Re,Re.return);break;case 1:Ks(Re,Re.return);var nt=Re.stateNode;if(typeof nt.componentWillUnmount=="function"){c=Re,a=Re.return;try{i=c,nt.props=i.memoizedProps,nt.state=i.memoizedState,nt.componentWillUnmount()}catch(rt){pn(c,a,rt)}}break;case 5:Ks(Re,Re.return);break;case 22:if(Re.memoizedState!==null){um(Le);continue}}qe!==null?(qe.return=Re,Ze=qe):um(Le)}Ne=Ne.sibling}e:for(Ne=null,Le=n;;){if(Le.tag===5){if(Ne===null){Ne=Le;try{h=Le.stateNode,pe?(m=h.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(k=Le.stateNode,X=Le.memoizedProps.style,C=X!=null&&X.hasOwnProperty("display")?X.display:null,k.style.display=b("display",C))}catch(rt){pn(n,n.return,rt)}}}else if(Le.tag===6){if(Ne===null)try{Le.stateNode.nodeValue=pe?"":Le.memoizedProps}catch(rt){pn(n,n.return,rt)}}else if((Le.tag!==22&&Le.tag!==23||Le.memoizedState===null||Le===n)&&Le.child!==null){Le.child.return=Le,Le=Le.child;continue}if(Le===n)break e;for(;Le.sibling===null;){if(Le.return===null||Le.return===n)break e;Ne===Le&&(Ne=null),Le=Le.return}Ne===Le&&(Ne=null),Le.sibling.return=Le.return,Le=Le.sibling}}break;case 19:Oi(i,n),Qi(n),c&4&&am(n);break;case 21:break;default:Oi(i,n),Qi(n)}}function Qi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(im(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(Te(h,""),c.flags&=-33);var m=rm(n);Gu(n,m,h);break;case 3:case 4:var C=c.stateNode.containerInfo,k=rm(n);Vu(n,k,C);break;default:throw Error(t(161))}}catch(X){pn(n,n.return,X)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function h_(n,i,a){Ze=n,lm(n)}function lm(n,i,a){for(var c=(n.mode&1)!==0;Ze!==null;){var h=Ze,m=h.child;if(h.tag===22&&c){var C=h.memoizedState!==null||ul;if(!C){var k=h.alternate,X=k!==null&&k.memoizedState!==null||Kn;k=ul;var pe=Kn;if(ul=C,(Kn=X)&&!pe)for(Ze=h;Ze!==null;)C=Ze,X=C.child,C.tag===22&&C.memoizedState!==null?hm(h):X!==null?(X.return=C,Ze=X):hm(h);for(;m!==null;)Ze=m,lm(m),m=m.sibling;Ze=h,ul=k,Kn=pe}cm(n)}else(h.subtreeFlags&8772)!==0&&m!==null?(m.return=h,Ze=m):cm(n)}}function cm(n){for(;Ze!==null;){var i=Ze;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Kn||hl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Kn)if(a===null)c.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:Ii(i.type,a.memoizedProps);c.componentDidUpdate(h,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&up(i,m,c);break;case 3:var C=i.updateQueue;if(C!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}up(i,C,a)}break;case 5:var k=i.stateNode;if(a===null&&i.flags&4){a=k;var X=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":X.autoFocus&&a.focus();break;case"img":X.src&&(a.src=X.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var pe=i.alternate;if(pe!==null){var Ne=pe.memoizedState;if(Ne!==null){var Le=Ne.dehydrated;Le!==null&&ba(Le)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Kn||i.flags&512&&Hu(i)}catch(Re){pn(i,i.return,Re)}}if(i===n){Ze=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ze=a;break}Ze=i.return}}function um(n){for(;Ze!==null;){var i=Ze;if(i===n){Ze=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ze=a;break}Ze=i.return}}function hm(n){for(;Ze!==null;){var i=Ze;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{hl(4,i)}catch(X){pn(i,a,X)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var h=i.return;try{c.componentDidMount()}catch(X){pn(i,h,X)}}var m=i.return;try{Hu(i)}catch(X){pn(i,m,X)}break;case 5:var C=i.return;try{Hu(i)}catch(X){pn(i,C,X)}}}catch(X){pn(i,i.return,X)}if(i===n){Ze=null;break}var k=i.sibling;if(k!==null){k.return=i.return,Ze=k;break}Ze=i.return}}var d_=Math.ceil,dl=P.ReactCurrentDispatcher,Wu=P.ReactCurrentOwner,Ci=P.ReactCurrentBatchConfig,Ut=0,Un=null,xn=null,zn=0,vi=0,Ys=Or(0),An=0,Za=null,ms=0,fl=0,ju=0,Qa=null,ci=null,Xu=0,qs=1/0,mr=null,pl=!1,Ku=null,Vr=null,ml=!1,Gr=null,gl=0,Ja=0,Yu=null,vl=-1,_l=0;function ei(){return(Ut&6)!==0?It():vl!==-1?vl:vl=It()}function Wr(n){return(n.mode&1)===0?1:(Ut&2)!==0&&zn!==0?zn&-zn:qv.transition!==null?(_l===0&&(_l=Kt()),_l):(n=st,n!==0||(n=window.event,n=n===void 0?16:ff(n.type)),n)}function Fi(n,i,a,c){if(50<Ja)throw Ja=0,Yu=null,Error(t(185));fn(n,a,c),((Ut&2)===0||n!==Un)&&(n===Un&&((Ut&2)===0&&(fl|=a),An===4&&jr(n,zn)),ui(n,c),a===1&&Ut===0&&(i.mode&1)===0&&(qs=It()+500,Xo&&kr()))}function ui(n,i){var a=n.callbackNode;At(n,i);var c=yt(n,n===Un?zn:0);if(c===0)a!==null&&rn(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&rn(a),i===1)n.tag===0?Yv(fm.bind(null,n)):Qf(fm.bind(null,n)),Wv(function(){(Ut&6)===0&&kr()}),a=null;else{switch(Ki(c)){case 1:a=Vn;break;case 4:a=Rr;break;case 16:a=Xi;break;case 536870912:a=N;break;default:a=Xi}a=Sm(a,dm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function dm(n,i){if(vl=-1,_l=0,(Ut&6)!==0)throw Error(t(327));var a=n.callbackNode;if($s()&&n.callbackNode!==a)return null;var c=yt(n,n===Un?zn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=xl(n,c);else{i=c;var h=Ut;Ut|=2;var m=mm();(Un!==n||zn!==i)&&(mr=null,qs=It()+500,vs(n,i));do try{m_();break}catch(k){pm(n,k)}while(!0);du(),dl.current=m,Ut=h,xn!==null?i=0:(Un=null,zn=0,i=An)}if(i!==0){if(i===2&&(h=on(n),h!==0&&(c=h,i=qu(n,h))),i===1)throw a=Za,vs(n,0),jr(n,c),ui(n,It()),a;if(i===6)jr(n,c);else{if(h=n.current.alternate,(c&30)===0&&!f_(h)&&(i=xl(n,c),i===2&&(m=on(n),m!==0&&(c=m,i=qu(n,m))),i===1))throw a=Za,vs(n,0),jr(n,c),ui(n,It()),a;switch(n.finishedWork=h,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:_s(n,ci,mr);break;case 3:if(jr(n,c),(c&130023424)===c&&(i=Xu+500-It(),10<i)){if(yt(n,0)!==0)break;if(h=n.suspendedLanes,(h&c)!==c){ei(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=tu(_s.bind(null,n,ci,mr),i);break}_s(n,ci,mr);break;case 4:if(jr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,h=-1;0<c;){var C=31-ie(c);m=1<<C,C=i[C],C>h&&(h=C),c&=~m}if(c=h,c=It()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*d_(c/1960))-c,10<c){n.timeoutHandle=tu(_s.bind(null,n,ci,mr),c);break}_s(n,ci,mr);break;case 5:_s(n,ci,mr);break;default:throw Error(t(329))}}}return ui(n,It()),n.callbackNode===a?dm.bind(null,n):null}function qu(n,i){var a=Qa;return n.current.memoizedState.isDehydrated&&(vs(n,i).flags|=256),n=xl(n,i),n!==2&&(i=ci,ci=a,i!==null&&$u(i)),n}function $u(n){ci===null?ci=n:ci.push.apply(ci,n)}function f_(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var h=a[c],m=h.getSnapshot;h=h.value;try{if(!Di(m(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function jr(n,i){for(i&=~ju,i&=~fl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-ie(i),c=1<<a;n[a]=-1,i&=~c}}function fm(n){if((Ut&6)!==0)throw Error(t(327));$s();var i=yt(n,0);if((i&1)===0)return ui(n,It()),null;var a=xl(n,i);if(n.tag!==0&&a===2){var c=on(n);c!==0&&(i=c,a=qu(n,c))}if(a===1)throw a=Za,vs(n,0),jr(n,i),ui(n,It()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,_s(n,ci,mr),ui(n,It()),null}function Zu(n,i){var a=Ut;Ut|=1;try{return n(i)}finally{Ut=a,Ut===0&&(qs=It()+500,Xo&&kr())}}function gs(n){Gr!==null&&Gr.tag===0&&(Ut&6)===0&&$s();var i=Ut;Ut|=1;var a=Ci.transition,c=st;try{if(Ci.transition=null,st=1,n)return n()}finally{st=c,Ci.transition=a,Ut=i,(Ut&6)===0&&kr()}}function Qu(){vi=Ys.current,an(Ys)}function vs(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Gv(a)),xn!==null)for(a=xn.return;a!==null;){var c=a;switch(ou(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Wo();break;case 3:js(),an(ai),an(Wn),yu();break;case 5:_u(c);break;case 4:js();break;case 13:an(un);break;case 19:an(un);break;case 10:fu(c.type._context);break;case 22:case 23:Qu()}a=a.return}if(Un=n,xn=n=Xr(n.current,null),zn=vi=i,An=0,Za=null,ju=fl=ms=0,ci=Qa=null,ds!==null){for(i=0;i<ds.length;i++)if(a=ds[i],c=a.interleaved,c!==null){a.interleaved=null;var h=c.next,m=a.pending;if(m!==null){var C=m.next;m.next=h,c.next=C}a.pending=c}ds=null}return n}function pm(n,i){do{var a=xn;try{if(du(),nl.current=al,il){for(var c=hn.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}il=!1}if(ps=0,In=wn=hn=null,ja=!1,Xa=0,Wu.current=null,a===null||a.return===null){An=1,Za=i,xn=null;break}e:{var m=n,C=a.return,k=a,X=i;if(i=zn,k.flags|=32768,X!==null&&typeof X=="object"&&typeof X.then=="function"){var pe=X,Ne=k,Le=Ne.tag;if((Ne.mode&1)===0&&(Le===0||Le===11||Le===15)){var Re=Ne.alternate;Re?(Ne.updateQueue=Re.updateQueue,Ne.memoizedState=Re.memoizedState,Ne.lanes=Re.lanes):(Ne.updateQueue=null,Ne.memoizedState=null)}var qe=Bp(C);if(qe!==null){qe.flags&=-257,zp(qe,C,k,m,i),qe.mode&1&&kp(m,pe,i),i=qe,X=pe;var nt=i.updateQueue;if(nt===null){var rt=new Set;rt.add(X),i.updateQueue=rt}else nt.add(X);break e}else{if((i&1)===0){kp(m,pe,i),Ju();break e}X=Error(t(426))}}else if(ln&&k.mode&1){var gn=Bp(C);if(gn!==null){(gn.flags&65536)===0&&(gn.flags|=256),zp(gn,C,k,m,i),uu(Xs(X,k));break e}}m=X=Xs(X,k),An!==4&&(An=2),Qa===null?Qa=[m]:Qa.push(m),m=C;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var oe=Op(m,X,i);cp(m,oe);break e;case 1:k=X;var Z=m.type,fe=m.stateNode;if((m.flags&128)===0&&(typeof Z.getDerivedStateFromError=="function"||fe!==null&&typeof fe.componentDidCatch=="function"&&(Vr===null||!Vr.has(fe)))){m.flags|=65536,i&=-i,m.lanes|=i;var ke=Fp(m,k,i);cp(m,ke);break e}}m=m.return}while(m!==null)}vm(a)}catch(at){i=at,xn===a&&a!==null&&(xn=a=a.return);continue}break}while(!0)}function mm(){var n=dl.current;return dl.current=al,n===null?al:n}function Ju(){(An===0||An===3||An===2)&&(An=4),Un===null||(ms&268435455)===0&&(fl&268435455)===0||jr(Un,zn)}function xl(n,i){var a=Ut;Ut|=2;var c=mm();(Un!==n||zn!==i)&&(mr=null,vs(n,i));do try{p_();break}catch(h){pm(n,h)}while(!0);if(du(),Ut=a,dl.current=c,xn!==null)throw Error(t(261));return Un=null,zn=0,An}function p_(){for(;xn!==null;)gm(xn)}function m_(){for(;xn!==null&&!si();)gm(xn)}function gm(n){var i=ym(n.alternate,n,vi);n.memoizedProps=n.pendingProps,i===null?vm(n):xn=i,Wu.current=null}function vm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=o_(a,i,vi),a!==null){xn=a;return}}else{if(a=l_(a,i),a!==null){a.flags&=32767,xn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{An=6,xn=null;return}}if(i=i.sibling,i!==null){xn=i;return}xn=i=n}while(i!==null);An===0&&(An=5)}function _s(n,i,a){var c=st,h=Ci.transition;try{Ci.transition=null,st=1,g_(n,i,a,c)}finally{Ci.transition=h,st=c}return null}function g_(n,i,a,c){do $s();while(Gr!==null);if((Ut&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(tt(n,m),n===Un&&(xn=Un=null,zn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ml||(ml=!0,Sm(Xi,function(){return $s(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Ci.transition,Ci.transition=null;var C=st;st=1;var k=Ut;Ut|=4,Wu.current=null,u_(n,a),om(a,n),Ov(Jc),No=!!Qc,Jc=Qc=null,n.current=a,h_(a),Mi(),Ut=k,st=C,Ci.transition=m}else n.current=a;if(ml&&(ml=!1,Gr=n,gl=h),m=n.pendingLanes,m===0&&(Vr=null),ae(a.stateNode),ui(n,It()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)h=i[a],c(h.value,{componentStack:h.stack,digest:h.digest});if(pl)throw pl=!1,n=Ku,Ku=null,n;return(gl&1)!==0&&n.tag!==0&&$s(),m=n.pendingLanes,(m&1)!==0?n===Yu?Ja++:(Ja=0,Yu=n):Ja=0,kr(),null}function $s(){if(Gr!==null){var n=Ki(gl),i=Ci.transition,a=st;try{if(Ci.transition=null,st=16>n?16:n,Gr===null)var c=!1;else{if(n=Gr,Gr=null,gl=0,(Ut&6)!==0)throw Error(t(331));var h=Ut;for(Ut|=4,Ze=n.current;Ze!==null;){var m=Ze,C=m.child;if((Ze.flags&16)!==0){var k=m.deletions;if(k!==null){for(var X=0;X<k.length;X++){var pe=k[X];for(Ze=pe;Ze!==null;){var Ne=Ze;switch(Ne.tag){case 0:case 11:case 15:$a(8,Ne,m)}var Le=Ne.child;if(Le!==null)Le.return=Ne,Ze=Le;else for(;Ze!==null;){Ne=Ze;var Re=Ne.sibling,qe=Ne.return;if(nm(Ne),Ne===pe){Ze=null;break}if(Re!==null){Re.return=qe,Ze=Re;break}Ze=qe}}}var nt=m.alternate;if(nt!==null){var rt=nt.child;if(rt!==null){nt.child=null;do{var gn=rt.sibling;rt.sibling=null,rt=gn}while(rt!==null)}}Ze=m}}if((m.subtreeFlags&2064)!==0&&C!==null)C.return=m,Ze=C;else e:for(;Ze!==null;){if(m=Ze,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:$a(9,m,m.return)}var oe=m.sibling;if(oe!==null){oe.return=m.return,Ze=oe;break e}Ze=m.return}}var Z=n.current;for(Ze=Z;Ze!==null;){C=Ze;var fe=C.child;if((C.subtreeFlags&2064)!==0&&fe!==null)fe.return=C,Ze=fe;else e:for(C=Z;Ze!==null;){if(k=Ze,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:hl(9,k)}}catch(at){pn(k,k.return,at)}if(k===C){Ze=null;break e}var ke=k.sibling;if(ke!==null){ke.return=k.return,Ze=ke;break e}Ze=k.return}}if(Ut=h,kr(),de&&typeof de.onPostCommitFiberRoot=="function")try{de.onPostCommitFiberRoot(W,n)}catch{}c=!0}return c}finally{st=a,Ci.transition=i}}return!1}function _m(n,i,a){i=Xs(a,i),i=Op(n,i,1),n=zr(n,i,1),i=ei(),n!==null&&(fn(n,1,i),ui(n,i))}function pn(n,i,a){if(n.tag===3)_m(n,n,a);else for(;i!==null;){if(i.tag===3){_m(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Vr===null||!Vr.has(c))){n=Xs(a,n),n=Fp(i,n,1),i=zr(i,n,1),n=ei(),i!==null&&(fn(i,1,n),ui(i,n));break}}i=i.return}}function v_(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=ei(),n.pingedLanes|=n.suspendedLanes&a,Un===n&&(zn&a)===a&&(An===4||An===3&&(zn&130023424)===zn&&500>It()-Xu?vs(n,0):ju|=a),ui(n,i)}function xm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Je,Je<<=1,(Je&130023424)===0&&(Je=4194304)));var a=ei();n=dr(n,i),n!==null&&(fn(n,i,a),ui(n,a))}function __(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),xm(n,a)}function x_(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),xm(n,a)}var ym;ym=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||ai.current)li=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return li=!1,a_(n,i,a);li=(n.flags&131072)!==0}else li=!1,ln&&(i.flags&1048576)!==0&&Jf(i,Yo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;cl(n,i),n=i.pendingProps;var h=ks(i,Wn.current);Ws(i,a),h=Tu(null,i,c,n,h,a);var m=Eu();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,oi(c)?(m=!0,jo(i)):m=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,gu(i),h.updater=ol,i.stateNode=h,h._reactInternals=i,Nu(i,c,n,a),i=Iu(null,i,c,!0,m,a)):(i.tag=0,ln&&m&&au(i),Jn(null,i,h,a),i=i.child),i;case 16:c=i.elementType;e:{switch(cl(n,i),n=i.pendingProps,h=c._init,c=h(c._payload),i.type=c,h=i.tag=S_(c),n=Ii(c,n),h){case 0:i=Lu(null,i,c,n,a);break e;case 1:i=Xp(null,i,c,n,a);break e;case 11:i=Hp(null,i,c,n,a);break e;case 14:i=Vp(null,i,c,Ii(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Ii(c,h),Lu(n,i,c,h,a);case 1:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Ii(c,h),Xp(n,i,c,h,a);case 3:e:{if(Kp(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,h=m.element,lp(n,i),el(i,c,null,a);var C=i.memoizedState;if(c=C.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:C.cache,pendingSuspenseBoundaries:C.pendingSuspenseBoundaries,transitions:C.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){h=Xs(Error(t(423)),i),i=Yp(n,i,c,a,h);break e}else if(c!==h){h=Xs(Error(t(424)),i),i=Yp(n,i,c,a,h);break e}else for(gi=Ur(i.stateNode.containerInfo.firstChild),mi=i,ln=!0,Li=null,a=ap(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Hs(),c===h){i=pr(n,i,a);break e}Jn(n,i,c,a)}i=i.child}return i;case 5:return hp(i),n===null&&cu(i),c=i.type,h=i.pendingProps,m=n!==null?n.memoizedProps:null,C=h.children,eu(c,h)?C=null:m!==null&&eu(c,m)&&(i.flags|=32),jp(n,i),Jn(n,i,C,a),i.child;case 6:return n===null&&cu(i),null;case 13:return qp(n,i,a);case 4:return vu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Vs(i,null,c,a):Jn(n,i,c,a),i.child;case 11:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Ii(c,h),Hp(n,i,c,h,a);case 7:return Jn(n,i,i.pendingProps,a),i.child;case 8:return Jn(n,i,i.pendingProps.children,a),i.child;case 12:return Jn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,h=i.pendingProps,m=i.memoizedProps,C=h.value,tn(Zo,c._currentValue),c._currentValue=C,m!==null)if(Di(m.value,C)){if(m.children===h.children&&!ai.current){i=pr(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var k=m.dependencies;if(k!==null){C=m.child;for(var X=k.firstContext;X!==null;){if(X.context===c){if(m.tag===1){X=fr(-1,a&-a),X.tag=2;var pe=m.updateQueue;if(pe!==null){pe=pe.shared;var Ne=pe.pending;Ne===null?X.next=X:(X.next=Ne.next,Ne.next=X),pe.pending=X}}m.lanes|=a,X=m.alternate,X!==null&&(X.lanes|=a),pu(m.return,a,i),k.lanes|=a;break}X=X.next}}else if(m.tag===10)C=m.type===i.type?null:m.child;else if(m.tag===18){if(C=m.return,C===null)throw Error(t(341));C.lanes|=a,k=C.alternate,k!==null&&(k.lanes|=a),pu(C,a,i),C=m.sibling}else C=m.child;if(C!==null)C.return=m;else for(C=m;C!==null;){if(C===i){C=null;break}if(m=C.sibling,m!==null){m.return=C.return,C=m;break}C=C.return}m=C}Jn(n,i,h.children,a),i=i.child}return i;case 9:return h=i.type,c=i.pendingProps.children,Ws(i,a),h=wi(h),c=c(h),i.flags|=1,Jn(n,i,c,a),i.child;case 14:return c=i.type,h=Ii(c,i.pendingProps),h=Ii(c.type,h),Vp(n,i,c,h,a);case 15:return Gp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Ii(c,h),cl(n,i),i.tag=1,oi(c)?(n=!0,jo(i)):n=!1,Ws(i,a),Ip(i,c,h),Nu(i,c,h,a),Iu(null,i,c,!0,n,a);case 19:return Zp(n,i,a);case 22:return Wp(n,i,a)}throw Error(t(156,i.tag))};function Sm(n,i){return _n(n,i)}function y_(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bi(n,i,a,c){return new y_(n,i,a,c)}function eh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function S_(n){if(typeof n=="function")return eh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===$)return 11;if(n===he)return 14}return 2}function Xr(n,i){var a=n.alternate;return a===null?(a=bi(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function yl(n,i,a,c,h,m){var C=2;if(c=n,typeof n=="function")eh(n)&&(C=1);else if(typeof n=="string")C=5;else e:switch(n){case T:return xs(a.children,h,m,i);case E:C=8,h|=8;break;case Y:return n=bi(12,a,i,h|2),n.elementType=Y,n.lanes=m,n;case te:return n=bi(13,a,i,h),n.elementType=te,n.lanes=m,n;case H:return n=bi(19,a,i,h),n.elementType=H,n.lanes=m,n;case ee:return Sl(a,h,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case B:C=10;break e;case V:C=9;break e;case $:C=11;break e;case he:C=14;break e;case le:C=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=bi(C,a,i,h),i.elementType=n,i.type=c,i.lanes=m,i}function xs(n,i,a,c){return n=bi(7,n,c,i),n.lanes=a,n}function Sl(n,i,a,c){return n=bi(22,n,c,i),n.elementType=ee,n.lanes=a,n.stateNode={isHidden:!1},n}function th(n,i,a){return n=bi(6,n,null,i),n.lanes=a,n}function nh(n,i,a){return i=bi(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function M_(n,i,a,c,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gt(0),this.expirationTimes=Gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gt(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function ih(n,i,a,c,h,m,C,k,X){return n=new M_(n,i,a,k,X),i===1?(i=1,m===!0&&(i|=8)):i=0,m=bi(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},gu(m),n}function T_(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Mm(n){if(!n)return Fr;n=n._reactInternals;e:{if(Qt(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(oi(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(oi(a))return $f(n,a,i)}return i}function Tm(n,i,a,c,h,m,C,k,X){return n=ih(a,c,!0,n,h,m,C,k,X),n.context=Mm(null),a=n.current,c=ei(),h=Wr(a),m=fr(c,h),m.callback=i??null,zr(a,m,h),n.current.lanes=h,fn(n,h,c),ui(n,c),n}function Ml(n,i,a,c){var h=i.current,m=ei(),C=Wr(h);return a=Mm(a),i.context===null?i.context=a:i.pendingContext=a,i=fr(m,C),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=zr(h,i,C),n!==null&&(Fi(n,h,C,m),Jo(n,h,C)),C}function Tl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Em(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function rh(n,i){Em(n,i),(n=n.alternate)&&Em(n,i)}function E_(){return null}var wm=typeof reportError=="function"?reportError:function(n){console.error(n)};function sh(n){this._internalRoot=n}El.prototype.render=sh.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Ml(n,i,null,null)},El.prototype.unmount=sh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;gs(function(){Ml(null,n,null,null)}),i[lr]=null}};function El(n){this._internalRoot=n}El.prototype.unstable_scheduleHydration=function(n){if(n){var i=Yi();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Dr.length&&i!==0&&i<Dr[a].priority;a++);Dr.splice(a,0,n),a===0&&hf(n)}};function ah(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function wl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Am(){}function w_(n,i,a,c,h){if(h){if(typeof c=="function"){var m=c;c=function(){var pe=Tl(C);m.call(pe)}}var C=Tm(i,c,n,0,null,!1,!1,"",Am);return n._reactRootContainer=C,n[lr]=C.current,Fa(n.nodeType===8?n.parentNode:n),gs(),C}for(;h=n.lastChild;)n.removeChild(h);if(typeof c=="function"){var k=c;c=function(){var pe=Tl(X);k.call(pe)}}var X=ih(n,0,!1,null,null,!1,!1,"",Am);return n._reactRootContainer=X,n[lr]=X.current,Fa(n.nodeType===8?n.parentNode:n),gs(function(){Ml(i,X,a,c)}),X}function Al(n,i,a,c,h){var m=a._reactRootContainer;if(m){var C=m;if(typeof h=="function"){var k=h;h=function(){var X=Tl(C);k.call(X)}}Ml(i,C,n,h)}else C=w_(a,i,n,h,c);return Tl(C)}En=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=dt(i.pendingLanes);a!==0&&(Tn(i,a|1),ui(i,It()),(Ut&6)===0&&(qs=It()+500,kr()))}break;case 13:gs(function(){var c=dr(n,1);if(c!==null){var h=ei();Fi(c,n,1,h)}}),rh(n,1)}},Nr=function(n){if(n.tag===13){var i=dr(n,134217728);if(i!==null){var a=ei();Fi(i,n,134217728,a)}rh(n,134217728)}},Pi=function(n){if(n.tag===13){var i=Wr(n),a=dr(n,i);if(a!==null){var c=ei();Fi(a,n,i,c)}rh(n,i)}},Yi=function(){return st},Pt=function(n,i){var a=st;try{return st=n,i()}finally{st=a}},xe=function(n,i,a){switch(i){case"input":if(cn(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var h=Go(c);if(!h)throw Error(t(90));ot(c),cn(c,h)}}}break;case"textarea":j(n,a);break;case"select":i=a.value,i!=null&&Zt(n,!!a.multiple,i,!1)}},Se=Zu,ue=gs;var A_={usingClientEntryPoint:!1,Events:[za,Os,Go,G,q,Zu]},eo={findFiberByHostInstance:ls,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},C_={bundleType:eo.bundleType,version:eo.version,rendererPackageName:eo.rendererPackageName,rendererConfig:eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Dn(n),n===null?null:n.stateNode},findFiberByHostInstance:eo.findFiberByHostInstance||E_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cl.isDisabled&&Cl.supportsFiber)try{W=Cl.inject(C_),de=Cl}catch{}}return hi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A_,hi.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ah(i))throw Error(t(200));return T_(n,i,null,a)},hi.createRoot=function(n,i){if(!ah(n))throw Error(t(299));var a=!1,c="",h=wm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=ih(n,1,!1,null,null,a,!1,c,h),n[lr]=i.current,Fa(n.nodeType===8?n.parentNode:n),new sh(i)},hi.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Dn(i),n=n===null?null:n.stateNode,n},hi.flushSync=function(n){return gs(n)},hi.hydrate=function(n,i,a){if(!wl(i))throw Error(t(200));return Al(null,n,i,!0,a)},hi.hydrateRoot=function(n,i,a){if(!ah(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,h=!1,m="",C=wm;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(C=a.onRecoverableError)),i=Tm(i,null,n,1,a??null,h,!1,m,C),n[lr]=i.current,Fa(n),c)for(n=0;n<c.length;n++)a=c[n],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new El(i)},hi.render=function(n,i,a){if(!wl(i))throw Error(t(200));return Al(null,n,i,!1,a)},hi.unmountComponentAtNode=function(n){if(!wl(n))throw Error(t(40));return n._reactRootContainer?(gs(function(){Al(null,null,n,!1,function(){n._reactRootContainer=null,n[lr]=null})}),!0):!1},hi.unstable_batchedUpdates=Zu,hi.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!wl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Al(n,i,a,!1,c)},hi.version="18.3.1-next-f1338f8080-20240426",hi}var Im;function O_(){if(Im)return ch.exports;Im=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),ch.exports=U_(),ch.exports}var Um;function F_(){if(Um)return bl;Um=1;var s=O_();return bl.createRoot=s.createRoot,bl.hydrateRoot=s.hydrateRoot,bl}var k_=F_();const B_=Z0(k_);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Q0=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var H_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_=Rt.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...d},f)=>Rt.createElement("svg",{ref:f,...H_,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:Q0("lucide",o),...d},[...u.map(([p,_])=>Rt.createElement(p,_)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=(s,e)=>{const t=Rt.forwardRef(({className:r,...o},l)=>Rt.createElement(V_,{ref:l,iconNode:e,className:Q0(`lucide-${z_(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=$t("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=$t("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=$t("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=$t("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=$t("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const io=$t("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_=$t("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=$t("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=$t("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=$t("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=$t("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nl=$t("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=$t("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=$t("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=$t("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_=$t("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=$t("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_=$t("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=$t("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=$t("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=$t("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=$t("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=$t("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=$t("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=$t("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=$t("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=$t("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=$t("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vd="187",va={ROTATE:0,DOLLY:1,PAN:2},ma={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sx=0,km=1,ax=2,lc=1,eg=2,go=3,Es=0,fi=1,Gi=2,_a=0,_o=1,Bm=2,zm=3,Hm=4,ox=5,fa=100,lx=101,cx=102,ux=103,hx=104,dx=200,fx=201,px=202,mx=203,tg=204,ng=205,gx=206,vx=207,_x=208,xx=209,yx=210,Sx=211,Mx=212,Tx=213,Ex=214,qh=0,$h=1,Zh=2,Mo=3,Qh=4,Jh=5,ed=6,td=7,ig=0,wx=1,Ax=2,Ar=0,rg=1,sg=2,ag=3,Gd=4,og=5,lg=6,cg=7,ug=300,ya=301,To=302,fh=303,ph=304,nd=1e3,Er=1001,id=1002,Hn=1003,Cx=1004,Pl=1005,ii=1006,mh=1007,ts=1008,yi=1009,hg=1010,dg=1011,Eo=1012,Wd=1013,sr=1014,nr=1015,ar=1016,jd=1017,Xd=1018,Sa=1020,fg=35902,pg=35899,mg=1021,gg=1022,ir=1023,rs=1026,ns=1027,vg=1028,Kd=1029,ws=1030,Yd=1031,qd=1033,cc=33776,uc=33777,hc=33778,dc=33779,rd=35840,sd=35841,ad=35842,od=35843,ld=36196,cd=37492,ud=37496,hd=37488,dd=37489,mc=37490,fd=37491,pd=37808,md=37809,gd=37810,vd=37811,_d=37812,xd=37813,yd=37814,Sd=37815,Md=37816,Td=37817,Ed=37818,wd=37819,Ad=37820,Cd=37821,bd=36492,Rd=36494,Nd=36495,Pd=36283,Dd=36284,gc=36285,Ld=36286,bx=3200,Id=0,Rx=1,es="",Ni="srgb",vc="srgb-linear",_c="linear",Yt="srgb",gh=7680,Nx=519,Px=512,Dx=513,Lx=514,_g=515,Ix=516,Ux=517,xg=518,yg=519,Sg=35044,Vm="300 es",Wi=2e3,wo=2001;function Ox(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function xc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Fx(){const s=xc("canvas");return s.style.display="block",s}const Gm={};function yc(...s){const e="THREE."+s.shift();console.log(e,...s)}function Mg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function pt(...s){s=Mg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ft(...s){s=Mg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function fc(...s){const e=s.join(" ");e in Gm||(Gm[e]=!0,pt(...s))}function kx(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const Bx={[qh]:qh,[Zh]:ed,[Qh]:Qh,[Mo]:Jh,[$h]:$h,[ed]:Zh,[td]:td,[Jh]:Mo};class os{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xo=Math.PI/180,Ud=180/Math.PI;function Cs(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Yn[s&255]+Yn[s>>8&255]+Yn[s>>16&255]+Yn[s>>24&255]+"-"+Yn[e&255]+Yn[e>>8&255]+"-"+Yn[e>>16&15|64]+Yn[e>>24&255]+"-"+Yn[t&63|128]+Yn[t>>8&255]+"-"+Yn[t>>16&255]+Yn[t>>24&255]+Yn[r&255]+Yn[r>>8&255]+Yn[r>>16&255]+Yn[r>>24&255]).toLowerCase()}function Tt(s,e,t){return Math.max(e,Math.min(t,s))}function zx(s,e){return(s%e+e)%e}function vh(s,e,t){return(1-t)*s+t*e}function Hx(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function bc(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Tg(s,e){if(e.constructor===Float32Array)return s;const t=bc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function Eg(s,e){if(e.constructor===Float32Array)return s;const t=bc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const Vx={DEG2RAD:xo},af=class af{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Tt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};af.prototype.isVector2=!0;let Xe=af;class ss{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,d){let f=r[o+0],p=r[o+1],_=r[o+2],M=r[o+3],v=l[u+0],S=l[u+1],w=l[u+2],R=l[u+3];if(M!==R||f!==v||p!==S||_!==w){let y=f*v+p*S+_*w+M*R;y<0&&(v=-v,S=-S,w=-w,R=-R,y=-y);let x=1-d;if(y<.9995){const D=Math.acos(y),F=Math.sin(D);x=Math.sin(x*D)/F,d=Math.sin(d*D)/F,f=f*x+v*d,p=p*x+S*d,_=_*x+w*d,M=M*x+R*d}else{f=f*x+v*d,p=p*x+S*d,_=_*x+w*d,M=M*x+R*d;const D=1/Math.sqrt(f*f+p*p+_*_+M*M);f*=D,p*=D,_*=D,M*=D}}e[t]=f,e[t+1]=p,e[t+2]=_,e[t+3]=M}static multiplyQuaternionsFlat(e,t,r,o,l,u){const d=r[o],f=r[o+1],p=r[o+2],_=r[o+3],M=l[u],v=l[u+1],S=l[u+2],w=l[u+3];return e[t]=d*w+_*M+f*S-p*v,e[t+1]=f*w+_*v+p*M-d*S,e[t+2]=p*w+_*S+d*v-f*M,e[t+3]=_*w-d*M-f*v-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,d=Math.cos,f=Math.sin,p=d(r/2),_=d(o/2),M=d(l/2),v=f(r/2),S=f(o/2),w=f(l/2);switch(u){case"XYZ":this._x=v*_*M+p*S*w,this._y=p*S*M-v*_*w,this._z=p*_*w+v*S*M,this._w=p*_*M-v*S*w;break;case"YXZ":this._x=v*_*M+p*S*w,this._y=p*S*M-v*_*w,this._z=p*_*w-v*S*M,this._w=p*_*M+v*S*w;break;case"ZXY":this._x=v*_*M-p*S*w,this._y=p*S*M+v*_*w,this._z=p*_*w+v*S*M,this._w=p*_*M-v*S*w;break;case"ZYX":this._x=v*_*M-p*S*w,this._y=p*S*M+v*_*w,this._z=p*_*w-v*S*M,this._w=p*_*M+v*S*w;break;case"YZX":this._x=v*_*M+p*S*w,this._y=p*S*M+v*_*w,this._z=p*_*w-v*S*M,this._w=p*_*M-v*S*w;break;case"XZY":this._x=v*_*M-p*S*w,this._y=p*S*M-v*_*w,this._z=p*_*w+v*S*M,this._w=p*_*M+v*S*w;break;default:pt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],d=t[5],f=t[9],p=t[2],_=t[6],M=t[10],v=r+d+M;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(_-f)*S,this._y=(l-p)*S,this._z=(u-o)*S}else if(r>d&&r>M){const S=2*Math.sqrt(1+r-d-M);this._w=(_-f)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+p)/S}else if(d>M){const S=2*Math.sqrt(1+d-r-M);this._w=(l-p)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(f+_)/S}else{const S=2*Math.sqrt(1+M-r-d);this._w=(u-o)/S,this._x=(l+p)/S,this._y=(f+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,d=t._x,f=t._y,p=t._z,_=t._w;return this._x=r*_+u*d+o*p-l*f,this._y=o*_+u*f+l*d-r*p,this._z=l*_+u*p+r*f-o*d,this._w=u*_-r*d-o*f-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,l=-l,u=-u,d=-d);let f=1-t;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);f=Math.sin(f*p)/_,t=Math.sin(t*p)/_,this._x=this._x*f+r*t,this._y=this._y*f+o*t,this._z=this._z*f+l*t,this._w=this._w*f+u*t,this._onChangeCallback()}else this._x=this._x*f+r*t,this._y=this._y*f+o*t,this._z=this._z*f+l*t,this._w=this._w*f+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const of=class of{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,d=e.z,f=e.w,p=2*(u*o-d*r),_=2*(d*t-l*o),M=2*(l*r-u*t);return this.x=t+f*p+u*M-d*_,this.y=r+f*_+d*p-l*M,this.z=o+f*M+l*_-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,d=t.y,f=t.z;return this.x=o*f-l*d,this.y=l*u-r*f,this.z=r*d-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return _h.copy(this).projectOnVector(e),this.sub(_h)}reflect(e){return this.sub(_h.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Tt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};of.prototype.isVector3=!0;let A=of;const _h=new A,Wm=new ss,lf=class lf{constructor(e,t,r,o,l,u,d,f,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,f,p)}set(e,t,r,o,l,u,d,f,p){const _=this.elements;return _[0]=e,_[1]=o,_[2]=d,_[3]=t,_[4]=l,_[5]=f,_[6]=r,_[7]=u,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[3],f=r[6],p=r[1],_=r[4],M=r[7],v=r[2],S=r[5],w=r[8],R=o[0],y=o[3],x=o[6],D=o[1],F=o[4],P=o[7],O=o[2],I=o[5],T=o[8];return l[0]=u*R+d*D+f*O,l[3]=u*y+d*F+f*I,l[6]=u*x+d*P+f*T,l[1]=p*R+_*D+M*O,l[4]=p*y+_*F+M*I,l[7]=p*x+_*P+M*T,l[2]=v*R+S*D+w*O,l[5]=v*y+S*F+w*I,l[8]=v*x+S*P+w*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],f=e[6],p=e[7],_=e[8];return t*u*_-t*d*p-r*l*_+r*d*f+o*l*p-o*u*f}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],f=e[6],p=e[7],_=e[8],M=_*u-d*p,v=d*f-_*l,S=p*l-u*f,w=t*M+r*v+o*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=M*R,e[1]=(o*p-_*r)*R,e[2]=(d*r-o*u)*R,e[3]=v*R,e[4]=(_*t-o*f)*R,e[5]=(o*l-d*t)*R,e[6]=S*R,e[7]=(r*f-p*t)*R,e[8]=(u*t-r*l)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,d){const f=Math.cos(l),p=Math.sin(l);return this.set(r*f,r*p,-r*(f*u+p*d)+u+e,-o*p,o*f,-o*(-p*u+f*d)+d+t,0,0,1),this}scale(e,t){return fc("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xh.makeScale(e,t)),this}rotate(e){return fc("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xh.makeRotation(-e)),this}translate(e,t){return fc("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};lf.prototype.isMatrix3=!0;let vt=lf;const xh=new vt,jm=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xm=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gx(){const s={enabled:!0,workingColorSpace:vc,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Yt&&(o.r=Cr(o.r),o.g=Cr(o.g),o.b=Cr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Yt&&(o.r=xa(o.r),o.g=xa(o.g),o.b=xa(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===es?_c:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[u].fromXYZ).multiply(this.spaces[l].toXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[vc]:{primaries:e,whitePoint:r,transfer:_c,toXYZ:jm,fromXYZ:Xm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ni},outputColorSpaceConfig:{drawingBufferColorSpace:Ni}},[Ni]:{primaries:e,whitePoint:r,transfer:Yt,toXYZ:jm,fromXYZ:Xm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ni}}}),s}const Dt=Gx();function Cr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function xa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Zs;class Wx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Zs===void 0&&(Zs=xc("canvas")),Zs.width=e.width,Zs.height=e.height;const o=Zs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Zs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=Cr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Cr(t[r]/255)*255):t[r]=Cr(t[r]);return{data:t,width:e.width,height:e.height}}else return pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jx=0;class $d{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:jx++}),this.uuid=Cs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?l.push(yh(o[u].image)):l.push(yh(o[u]))}else l=yh(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function yh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Wx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(pt("Texture: Unable to serialize Texture."),{})}let Xx=0;const Sh=new A;class Zn extends os{constructor(e=Zn.DEFAULT_IMAGE,t=Zn.DEFAULT_MAPPING,r=Er,o=Er,l=ii,u=ts,d=ir,f=yi,p=Zn.DEFAULT_ANISOTROPY,_=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=Cs(),this.name="",this.source=new $d(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Sh).x}get height(){return this.source.getSize(Sh).y}get depth(){return this.source.getSize(Sh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){pt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){pt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ug)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nd:e.x=e.x-Math.floor(e.x);break;case Er:e.x=e.x<0?0:1;break;case id:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nd:e.y=e.y-Math.floor(e.y);break;case Er:e.y=e.y<0?0:1;break;case id:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=ug;Zn.DEFAULT_ANISOTROPY=1;const cf=class cf{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const f=e.elements,p=f[0],_=f[4],M=f[8],v=f[1],S=f[5],w=f[9],R=f[2],y=f[6],x=f[10];if(Math.abs(_-v)<.01&&Math.abs(M-R)<.01&&Math.abs(w-y)<.01){if(Math.abs(_+v)<.1&&Math.abs(M+R)<.1&&Math.abs(w+y)<.1&&Math.abs(p+S+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const F=(p+1)/2,P=(S+1)/2,O=(x+1)/2,I=(_+v)/4,T=(M+R)/4,E=(w+y)/4;return F>P&&F>O?F<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(F),o=I/r,l=T/r):P>O?P<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(P),r=I/o,l=E/o):O<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(O),r=T/l,o=E/l),this.set(r,o,l,t),this}let D=Math.sqrt((y-w)*(y-w)+(M-R)*(M-R)+(v-_)*(v-_));return Math.abs(D)<.001&&(D=1),this.x=(y-w)/D,this.y=(M-R)/D,this.z=(v-_)/D,this.w=Math.acos((p+S+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this.w=Tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this.w=Tt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};cf.prototype.isVector4=!0;let dn=cf;class Kx extends os{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new dn(0,0,e,t),this.scissorTest=!1,this.viewport=new dn(0,0,e,t),this.textures=[];const o=r.count;for(let l=0;l<o;l++)this.textures[l]=new Zn({width:e,height:t,depth:r.depth}),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:ii,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new $d(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rr extends Kx{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class wg extends Zn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yx extends Zn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Cc=class Cc{constructor(e,t,r,o,l,u,d,f,p,_,M,v,S,w,R,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,f,p,_,M,v,S,w,R,y)}set(e,t,r,o,l,u,d,f,p,_,M,v,S,w,R,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=r,x[12]=o,x[1]=l,x[5]=u,x[9]=d,x[13]=f,x[2]=p,x[6]=_,x[10]=M,x[14]=v,x[3]=S,x[7]=w,x[11]=R,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Cc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Qs.setFromMatrixColumn(e,0).length(),l=1/Qs.setFromMatrixColumn(e,1).length(),u=1/Qs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),f=Math.cos(o),p=Math.sin(o),_=Math.cos(l),M=Math.sin(l);if(e.order==="XYZ"){const v=u*_,S=u*M,w=d*_,R=d*M;t[0]=f*_,t[4]=-f*M,t[8]=p,t[1]=S+w*p,t[5]=v-R*p,t[9]=-d*f,t[2]=R-v*p,t[6]=w+S*p,t[10]=u*f}else if(e.order==="YXZ"){const v=f*_,S=f*M,w=p*_,R=p*M;t[0]=v+R*d,t[4]=w*d-S,t[8]=u*p,t[1]=u*M,t[5]=u*_,t[9]=-d,t[2]=S*d-w,t[6]=R+v*d,t[10]=u*f}else if(e.order==="ZXY"){const v=f*_,S=f*M,w=p*_,R=p*M;t[0]=v-R*d,t[4]=-u*M,t[8]=w+S*d,t[1]=S+w*d,t[5]=u*_,t[9]=R-v*d,t[2]=-u*p,t[6]=d,t[10]=u*f}else if(e.order==="ZYX"){const v=u*_,S=u*M,w=d*_,R=d*M;t[0]=f*_,t[4]=w*p-S,t[8]=v*p+R,t[1]=f*M,t[5]=R*p+v,t[9]=S*p-w,t[2]=-p,t[6]=d*f,t[10]=u*f}else if(e.order==="YZX"){const v=u*f,S=u*p,w=d*f,R=d*p;t[0]=f*_,t[4]=R-v*M,t[8]=w*M+S,t[1]=M,t[5]=u*_,t[9]=-d*_,t[2]=-p*_,t[6]=S*M+w,t[10]=v-R*M}else if(e.order==="XZY"){const v=u*f,S=u*p,w=d*f,R=d*p;t[0]=f*_,t[4]=-M,t[8]=p*_,t[1]=v*M+R,t[5]=u*_,t[9]=S*M-w,t[2]=w*M-S,t[6]=d*_,t[10]=R*M+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qx,e,$x)}lookAt(e,t,r){const o=this.elements;return _i.subVectors(e,t),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),Yr.crossVectors(r,_i),Yr.lengthSq()===0&&(Math.abs(r.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),Yr.crossVectors(r,_i)),Yr.normalize(),Dl.crossVectors(_i,Yr),o[0]=Yr.x,o[4]=Dl.x,o[8]=_i.x,o[1]=Yr.y,o[5]=Dl.y,o[9]=_i.y,o[2]=Yr.z,o[6]=Dl.z,o[10]=_i.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[4],f=r[8],p=r[12],_=r[1],M=r[5],v=r[9],S=r[13],w=r[2],R=r[6],y=r[10],x=r[14],D=r[3],F=r[7],P=r[11],O=r[15],I=o[0],T=o[4],E=o[8],Y=o[12],B=o[1],V=o[5],$=o[9],te=o[13],H=o[2],he=o[6],le=o[10],ee=o[14],ne=o[3],J=o[7],Q=o[11],U=o[15];return l[0]=u*I+d*B+f*H+p*ne,l[4]=u*T+d*V+f*he+p*J,l[8]=u*E+d*$+f*le+p*Q,l[12]=u*Y+d*te+f*ee+p*U,l[1]=_*I+M*B+v*H+S*ne,l[5]=_*T+M*V+v*he+S*J,l[9]=_*E+M*$+v*le+S*Q,l[13]=_*Y+M*te+v*ee+S*U,l[2]=w*I+R*B+y*H+x*ne,l[6]=w*T+R*V+y*he+x*J,l[10]=w*E+R*$+y*le+x*Q,l[14]=w*Y+R*te+y*ee+x*U,l[3]=D*I+F*B+P*H+O*ne,l[7]=D*T+F*V+P*he+O*J,l[11]=D*E+F*$+P*le+O*Q,l[15]=D*Y+F*te+P*ee+O*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],d=e[5],f=e[9],p=e[13],_=e[2],M=e[6],v=e[10],S=e[14],w=e[3],R=e[7],y=e[11],x=e[15],D=f*S-p*v,F=d*S-p*M,P=d*v-f*M,O=u*S-p*_,I=u*v-f*_,T=u*M-d*_;return t*(R*D-y*F+x*P)-r*(w*D-y*O+x*I)+o*(w*F-R*O+x*T)-l*(w*P-R*I+y*T)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[1],u=e[5],d=e[9],f=e[2],p=e[6],_=e[10];return t*(u*_-d*p)-r*(l*_-d*f)+o*(l*p-u*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],f=e[6],p=e[7],_=e[8],M=e[9],v=e[10],S=e[11],w=e[12],R=e[13],y=e[14],x=e[15],D=t*d-r*u,F=t*f-o*u,P=t*p-l*u,O=r*f-o*d,I=r*p-l*d,T=o*p-l*f,E=_*R-M*w,Y=_*y-v*w,B=_*x-S*w,V=M*y-v*R,$=M*x-S*R,te=v*x-S*y,H=D*te-F*$+P*V+O*B-I*Y+T*E;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const he=1/H;return e[0]=(d*te-f*$+p*V)*he,e[1]=(o*$-r*te-l*V)*he,e[2]=(R*T-y*I+x*O)*he,e[3]=(v*I-M*T-S*O)*he,e[4]=(f*B-u*te-p*Y)*he,e[5]=(t*te-o*B+l*Y)*he,e[6]=(y*P-w*T-x*F)*he,e[7]=(_*T-v*P+S*F)*he,e[8]=(u*$-d*B+p*E)*he,e[9]=(r*B-t*$-l*E)*he,e[10]=(w*I-R*P+x*D)*he,e[11]=(M*P-_*I-S*D)*he,e[12]=(d*Y-u*V-f*E)*he,e[13]=(t*V-r*Y+o*E)*he,e[14]=(R*F-w*O-y*D)*he,e[15]=(_*O-M*F+v*D)*he,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,d=e.y,f=e.z,p=l*u,_=l*d;return this.set(p*u+r,p*d-o*f,p*f+o*d,0,p*d+o*f,_*d+r,_*f-o*u,0,p*f-o*d,_*f+o*u,l*f*f+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,d=t._z,f=t._w,p=l+l,_=u+u,M=d+d,v=l*p,S=l*_,w=l*M,R=u*_,y=u*M,x=d*M,D=f*p,F=f*_,P=f*M,O=r.x,I=r.y,T=r.z;return o[0]=(1-(R+x))*O,o[1]=(S+P)*O,o[2]=(w-F)*O,o[3]=0,o[4]=(S-P)*I,o[5]=(1-(v+x))*I,o[6]=(y+D)*I,o[7]=0,o[8]=(w+F)*T,o[9]=(y-D)*T,o[10]=(1-(v+R))*T,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let u=Qs.set(o[0],o[1],o[2]).length();const d=Qs.set(o[4],o[5],o[6]).length(),f=Qs.set(o[8],o[9],o[10]).length();l<0&&(u=-u),ki.copy(this);const p=1/u,_=1/d,M=1/f;return ki.elements[0]*=p,ki.elements[1]*=p,ki.elements[2]*=p,ki.elements[4]*=_,ki.elements[5]*=_,ki.elements[6]*=_,ki.elements[8]*=M,ki.elements[9]*=M,ki.elements[10]*=M,t.setFromRotationMatrix(ki),r.x=u,r.y=d,r.z=f,this}makePerspective(e,t,r,o,l,u,d=Wi,f=!1){const p=this.elements,_=2*l/(t-e),M=2*l/(r-o),v=(t+e)/(t-e),S=(r+o)/(r-o);let w,R;if(f)w=l/(u-l),R=u*l/(u-l);else if(d===Wi)w=-(u+l)/(u-l),R=-2*u*l/(u-l);else if(d===wo)w=-u/(u-l),R=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=M,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=w,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,l,u,d=Wi,f=!1){const p=this.elements,_=2/(t-e),M=2/(r-o),v=-(t+e)/(t-e),S=-(r+o)/(r-o);let w,R;if(f)w=1/(u-l),R=u/(u-l);else if(d===Wi)w=-2/(u-l),R=-(u+l)/(u-l);else if(d===wo)w=-1/(u-l),R=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=M,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=w,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};Cc.prototype.isMatrix4=!0;let en=Cc;const Qs=new A,ki=new en,qx=new A(0,0,0),$x=new A(1,1,1),Yr=new A,Dl=new A,_i=new A,Km=new en,Ym=new ss;class as{constructor(e=0,t=0,r=0,o=as.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],d=o[8],f=o[1],p=o[5],_=o[9],M=o[2],v=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(Tt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(f,p)):(this._y=Math.atan2(-M,l),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-M,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-Tt(M,-1,1)),Math.abs(M)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-M,l)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-_,S),this._y=0);break;default:pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Km.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Km,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ym.setFromEuler(this),this.setFromQuaternion(Ym,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}as.DEFAULT_ORDER="XYZ";class Zd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zx=0;const qm=new A,Js=new ss,_r=new en,Ll=new A,so=new A,Qx=new A,Jx=new ss,$m=new A(1,0,0),Zm=new A(0,1,0),Qm=new A(0,0,1),Jm={type:"added"},e1={type:"removed"},ea={type:"childadded",child:null},Mh={type:"childremoved",child:null};class bn extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zx++}),this.uuid=Cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const e=new A,t=new as,r=new ss,o=new A(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new en},normalMatrix:{value:new vt}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.multiply(Js),this}rotateOnWorldAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.premultiply(Js),this}rotateX(e){return this.rotateOnAxis($m,e)}rotateY(e){return this.rotateOnAxis(Zm,e)}rotateZ(e){return this.rotateOnAxis(Qm,e)}translateOnAxis(e,t){return qm.copy(e).applyQuaternion(this.quaternion),this.position.add(qm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($m,e)}translateY(e){return this.translateOnAxis(Zm,e)}translateZ(e){return this.translateOnAxis(Qm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_r.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Ll.copy(e):Ll.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),so.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_r.lookAt(so,Ll,this.up):_r.lookAt(Ll,so,this.up),this.quaternion.setFromRotationMatrix(_r),o&&(_r.extractRotation(o.matrixWorld),Js.setFromRotationMatrix(_r),this.quaternion.premultiply(Js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jm),ea.child=e,this.dispatchEvent(ea),ea.child=null):Ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(e1),Mh.child=e,this.dispatchEvent(Mh),Mh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_r.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_r.multiply(e.parent.matrixWorld)),e.applyMatrix4(_r),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jm),ea.child=e,this.dispatchEvent(ea),ea.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,e,Qx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,Jx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(d,f){return d[f.uuid]===void 0&&(d[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const f=d.shapes;if(Array.isArray(f))for(let p=0,_=f.length;p<_;p++){const M=f[p];l(e.shapes,M)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let f=0,p=this.material.length;f<p;f++)d.push(l(e.materials,this.material[f]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const f=this.animations[d];o.animations.push(l(e.animations,f))}}if(t){const d=u(e.geometries),f=u(e.materials),p=u(e.textures),_=u(e.images),M=u(e.shapes),v=u(e.skeletons),S=u(e.animations),w=u(e.nodes);d.length>0&&(r.geometries=d),f.length>0&&(r.materials=f),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),M.length>0&&(r.shapes=M),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),w.length>0&&(r.nodes=w)}return r.object=o,r;function u(d){const f=[];for(const p in d){const _=d[p];delete _.metadata,f.push(_)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}bn.DEFAULT_UP=new A(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class $n extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const t1={type:"move"};class Th{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const d=this._targetRay,f=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const R of e.hand.values()){const y=t.getJointPose(R,r),x=this._getHandJoint(p,R);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const _=p.joints["index-finger-tip"],M=p.joints["thumb-tip"],v=_.position.distanceTo(M.position),S=.02,w=.005;p.inputState.pinching&&v>S+w?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=S-w&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(t1)))}return d!==null&&(d.visible=o!==null),f!==null&&(f.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new $n;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Ag={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qr={h:0,s:0,l:0},Il={h:0,s:0,l:0};function Eh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Et{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Dt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Dt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Dt.workingColorSpace){if(e=zx(e,1),t=Tt(t,0,1),r=Tt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=Eh(u,l,e+1/3),this.g=Eh(u,l,e),this.b=Eh(u,l,e-1/3)}return Dt.colorSpaceToWorking(this,o),this}setStyle(e,t=Ni){function r(l){l!==void 0&&parseFloat(l)<1&&pt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseFloat(l[1]))/100,Math.min(100,parseFloat(l[2]))/100,Math.min(100,parseFloat(l[3]))/100,t);break;case"hsl":case"hsla":if(l=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:pt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);pt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ni){const r=Ag[e.toLowerCase()];return r!==void 0?this.setHex(r,t):pt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cr(e.r),this.g=Cr(e.g),this.b=Cr(e.b),this}copyLinearToSRGB(e){return this.r=xa(e.r),this.g=xa(e.g),this.b=xa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ni){return Dt.workingToColorSpace(qn.copy(this),e),Math.round(Tt(qn.r*255,0,255))*65536+Math.round(Tt(qn.g*255,0,255))*256+Math.round(Tt(qn.b*255,0,255))}getHexString(e=Ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Dt.workingColorSpace){Dt.workingToColorSpace(qn.copy(this),t);const r=qn.r,o=qn.g,l=qn.b,u=Math.max(r,o,l),d=Math.min(r,o,l);let f,p;const _=(d+u)/2;if(d===u)f=0,p=0;else{const M=u-d;switch(p=_<=.5?M/(u+d):M/(2-u-d),u){case r:f=(o-l)/M+(o<l?6:0);break;case o:f=(l-r)/M+2;break;case l:f=(r-o)/M+4;break}f/=6}return e.h=f,e.s=p,e.l=_,e}getRGB(e,t=Dt.workingColorSpace){return Dt.workingToColorSpace(qn.copy(this),t),e.r=qn.r,e.g=qn.g,e.b=qn.b,e}getStyle(e=Ni){Dt.workingToColorSpace(qn.copy(this),e);const t=qn.r,r=qn.g,o=qn.b;return e!==Ni?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(qr),this.setHSL(qr.h+e,qr.s+t,qr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(qr),e.getHSL(Il);const r=vh(qr.h,Il.h,t),o=vh(qr.s,Il.s,t),l=vh(qr.l,Il.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qn=new Et;Et.NAMES=Ag;class n1 extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new as,this.environmentIntensity=1,this.environmentRotation=new as,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Bi=new A,xr=new A,wh=new A,yr=new A,ta=new A,na=new A,e0=new A,Ah=new A,Ch=new A,bh=new A,Rh=new dn,Nh=new dn,Ph=new dn;class Si{constructor(e=new A,t=new A,r=new A){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Bi.subVectors(e,t),o.cross(Bi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Bi.subVectors(o,t),xr.subVectors(r,t),wh.subVectors(e,t);const u=Bi.dot(Bi),d=Bi.dot(xr),f=Bi.dot(wh),p=xr.dot(xr),_=xr.dot(wh),M=u*p-d*d;if(M===0)return l.set(0,0,0),null;const v=1/M,S=(p*f-d*_)*v,w=(u*_-d*f)*v;return l.set(1-S-w,w,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,yr)===null?!1:yr.x>=0&&yr.y>=0&&yr.x+yr.y<=1}static getInterpolation(e,t,r,o,l,u,d,f){return this.getBarycoord(e,t,r,o,yr)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,yr.x),f.addScaledVector(u,yr.y),f.addScaledVector(d,yr.z),f)}static getInterpolatedAttribute(e,t,r,o,l,u){return Rh.setScalar(0),Nh.setScalar(0),Ph.setScalar(0),Rh.fromBufferAttribute(e,t),Nh.fromBufferAttribute(e,r),Ph.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Rh,l.x),u.addScaledVector(Nh,l.y),u.addScaledVector(Ph,l.z),u}static isFrontFacing(e,t,r,o){return Bi.subVectors(r,t),xr.subVectors(e,t),Bi.cross(xr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bi.subVectors(this.c,this.b),xr.subVectors(this.a,this.b),Bi.cross(xr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Si.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Si.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,d;ta.subVectors(o,r),na.subVectors(l,r),Ah.subVectors(e,r);const f=ta.dot(Ah),p=na.dot(Ah);if(f<=0&&p<=0)return t.copy(r);Ch.subVectors(e,o);const _=ta.dot(Ch),M=na.dot(Ch);if(_>=0&&M<=_)return t.copy(o);const v=f*M-_*p;if(v<=0&&f>=0&&_<=0&&f-_>0)return u=f/(f-_),t.copy(r).addScaledVector(ta,u);bh.subVectors(e,l);const S=ta.dot(bh),w=na.dot(bh);if(w>=0&&S<=w)return t.copy(l);const R=S*p-f*w;if(R<=0&&p>=0&&w<=0)return d=p/(p-w),t.copy(r).addScaledVector(na,d);const y=_*w-S*M;if(y<=0&&M-_>=0&&S-w>=0)return e0.subVectors(l,o),d=(M-_)/(M-_+(S-w)),t.copy(o).addScaledVector(e0,d);const x=1/(y+R+v);return u=R*x,d=v*x,t.copy(r).addScaledVector(ta,u).addScaledVector(na,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Co{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,zi):zi.fromBufferAttribute(l,u),zi.applyMatrix4(e.matrixWorld),this.expandByPoint(zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ul.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ul.copy(r.boundingBox)),Ul.applyMatrix4(e.matrixWorld),this.union(Ul)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ao),Ol.subVectors(this.max,ao),ia.subVectors(e.a,ao),ra.subVectors(e.b,ao),sa.subVectors(e.c,ao),$r.subVectors(ra,ia),Zr.subVectors(sa,ra),ys.subVectors(ia,sa);let t=[0,-$r.z,$r.y,0,-Zr.z,Zr.y,0,-ys.z,ys.y,$r.z,0,-$r.x,Zr.z,0,-Zr.x,ys.z,0,-ys.x,-$r.y,$r.x,0,-Zr.y,Zr.x,0,-ys.y,ys.x,0];return!Dh(t,ia,ra,sa,Ol)||(t=[1,0,0,0,1,0,0,0,1],!Dh(t,ia,ra,sa,Ol))?!1:(Fl.crossVectors($r,Zr),t=[Fl.x,Fl.y,Fl.z],Dh(t,ia,ra,sa,Ol))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Sr=[new A,new A,new A,new A,new A,new A,new A,new A],zi=new A,Ul=new Co,ia=new A,ra=new A,sa=new A,$r=new A,Zr=new A,ys=new A,ao=new A,Ol=new A,Fl=new A,Ss=new A;function Dh(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){Ss.fromArray(s,l);const d=o.x*Math.abs(Ss.x)+o.y*Math.abs(Ss.y)+o.z*Math.abs(Ss.z),f=e.dot(Ss),p=t.dot(Ss),_=r.dot(Ss);if(Math.max(-Math.max(f,p,_),Math.min(f,p,_))>d)return!1}return!0}const yn=new A,kl=new Xe;let i1=0;class is extends os{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:i1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Sg,this.updateRanges=[],this.gpuType=nr,this.version=0,this._normalizationScale=e!==void 0?bc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)kl.fromBufferAttribute(this,t),kl.applyMatrix3(e),this.setXY(t,kl.x,kl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix3(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o),l=this._normalize(l)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Tg(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Eg(e,this.array)}}class Cg extends is{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class bg extends is{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class qt extends is{constructor(e,t,r){super(new Float32Array(e),t,r)}}const r1=new Co,oo=new A,Lh=new A;class Rc{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):r1.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oo.subVectors(e,this.center);const t=oo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(oo,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oo.copy(e.center).add(Lh)),this.expandByPoint(oo.copy(e.center).sub(Lh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let s1=0;const Ri=new en,Ih=new bn,aa=new A,xi=new Co,lo=new Co,Fn=new A;class Qn extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:s1++}),this.uuid=Cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ox(e)?bg:Cg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new vt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ri.makeRotationFromQuaternion(e),this.applyMatrix4(Ri),this}rotateX(e){return Ri.makeRotationX(e),this.applyMatrix4(Ri),this}rotateY(e){return Ri.makeRotationY(e),this.applyMatrix4(Ri),this}rotateZ(e){return Ri.makeRotationZ(e),this.applyMatrix4(Ri),this}translate(e,t,r){return Ri.makeTranslation(e,t,r),this.applyMatrix4(Ri),this}scale(e,t,r){return Ri.makeScale(e,t,r),this.applyMatrix4(Ri),this}lookAt(e){return Ih.lookAt(e),Ih.updateMatrix(),this.applyMatrix4(Ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(aa).negate(),this.translate(aa.x,aa.y,aa.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new qt(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Co);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];xi.setFromBufferAttribute(l),this.morphTargetsRelative?(Fn.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(Fn),Fn.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(Fn)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){const r=this.boundingSphere.center;if(xi.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];lo.setFromBufferAttribute(d),this.morphTargetsRelative?(Fn.addVectors(xi.min,lo.min),xi.expandByPoint(Fn),Fn.addVectors(xi.max,lo.max),xi.expandByPoint(Fn)):(xi.expandByPoint(lo.min),xi.expandByPoint(lo.max))}xi.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)Fn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(Fn));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],f=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)Fn.fromBufferAttribute(d,p),f&&(aa.fromBufferAttribute(e,p),Fn.add(aa)),o=Math.max(o,r.distanceToSquared(Fn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new is(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const d=[],f=[],p=new Uint8Array(r.count);for(let Y=0;Y<r.count;Y++)d[Y]=new A,f[Y]=new A;const _=new A,M=new A,v=new A,S=new Xe,w=new Xe,R=new Xe,y=new A,x=new A;function D(Y,B,V){p[Y]=p[B]=p[V]=1,_.fromBufferAttribute(r,Y),M.fromBufferAttribute(r,B),v.fromBufferAttribute(r,V),S.fromBufferAttribute(l,Y),w.fromBufferAttribute(l,B),R.fromBufferAttribute(l,V),M.sub(_),v.sub(_),w.sub(S),R.sub(S);const $=1/(w.x*R.y-R.x*w.y);isFinite($)&&(y.copy(M).multiplyScalar(R.y).addScaledVector(v,-w.y).multiplyScalar($),x.copy(v).multiplyScalar(w.x).addScaledVector(M,-R.x).multiplyScalar($),d[Y].add(y),d[B].add(y),d[V].add(y),f[Y].add(x),f[B].add(x),f[V].add(x))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let Y=0,B=F.length;Y<B;++Y){const V=F[Y],$=V.start,te=V.count;for(let H=$,he=$+te;H<he;H+=3)D(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const P=new A,O=new A,I=new A,T=new A;function E(Y){I.fromBufferAttribute(o,Y),T.copy(I);const B=d[Y];P.copy(B),P.sub(I.multiplyScalar(I.dot(B))).normalize(),O.crossVectors(T,B);const $=O.dot(f[Y])<0?-1:1;u.setXYZW(Y,P.x,P.y,P.z,$)}for(let Y=0,B=r.count;Y<B;++Y)p[Y]&&E(Y);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new is(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const o=new A,l=new A,u=new A,d=new A,f=new A,p=new A,_=new A,M=new A;if(e)for(let v=0,S=e.count;v<S;v+=3){const w=e.getX(v+0),R=e.getX(v+1),y=e.getX(v+2);o.fromBufferAttribute(t,w),l.fromBufferAttribute(t,R),u.fromBufferAttribute(t,y),_.subVectors(u,l),M.subVectors(o,l),_.cross(M),d.fromBufferAttribute(r,w),f.fromBufferAttribute(r,R),p.fromBufferAttribute(r,y),d.add(_),f.add(_),p.add(_),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(R,f.x,f.y,f.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let v=0,S=t.count;v<S;v+=3)o.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),_.subVectors(u,l),M.subVectors(o,l),_.cross(M),r.setXYZ(v+0,_.x,_.y,_.z),r.setXYZ(v+1,_.x,_.y,_.z),r.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Fn.fromBufferAttribute(e,t),Fn.normalize(),e.setXYZ(t,Fn.x,Fn.y,Fn.z)}toNonIndexed(){function e(d,f){const p=d.array,_=d.itemSize,M=d.normalized,v=new p.constructor(f.length*_);let S=0,w=0;for(let R=0,y=f.length;R<y;R++){d.isInterleavedBufferAttribute?S=f[R]*d.data.stride+d.offset:S=f[R]*_;for(let x=0;x<_;x++)v[w++]=p[S++]}return new is(v,_,M)}if(this.index===null)return pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qn,r=this.index.array,o=this.attributes;for(const d in o){const f=o[d],p=e(f,r);t.setAttribute(d,p)}const l=this.morphAttributes;for(const d in l){const f=[],p=l[d];for(let _=0,M=p.length;_<M;_++){const v=p[_],S=e(v,r);f.push(S)}t.morphAttributes[d]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,f=u.length;d<f;d++){const p=u[d];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const f=this.parameters;for(const p in f)f[p]!==void 0&&(e[p]=f[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const f in r){const p=r[f];e.data.attributes[f]=p.toJSON(e.data)}const o={};let l=!1;for(const f in this.morphAttributes){const p=this.morphAttributes[f],_=[];for(let M=0,v=p.length;M<v;M++){const S=p[M];_.push(S.toJSON(e.data))}_.length>0&&(o[f]=_,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const _=o[p];this.setAttribute(p,_.clone(t))}const l=e.morphAttributes;for(const p in l){const _=[],M=l[p];for(let v=0,S=M.length;v<S;v++)_.push(M[v].clone(t));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,_=u.length;p<_;p++){const M=u[p];this.addGroup(M.start,M.count,M.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class a1{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Sg,this.updateRanges=[],this.version=0,this.uuid=Cs()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let o=0,l=this.stride;o<l;o++)this.array[e+o]=t.array[r+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=t0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const r=new this.array.constructor(e.arrayBuffers[t]),o=new this.constructor(r,this.stride);return o.setUsage(this.usage),o}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=t0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const r={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return r.usage=this.usage,r}}function t0(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Cs()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}const ti=new A;class Sc{constructor(e,t,r,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=o,this._normalizationScale=e!==void 0?bc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)ti.fromBufferAttribute(this,t),ti.applyMatrix4(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)ti.fromBufferAttribute(this,t),ti.applyNormalMatrix(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)ti.fromBufferAttribute(this,t),ti.transformDirection(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o),l=this._normalize(l)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this.data.array[e+3]=l,this}clone(e){if(e===void 0){yc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return new is(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Sc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){yc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Tg(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Eg(e,this.data.array)}}const Uh=new A,o1=new A,l1=new vt;class Tr{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Uh.subVectors(r,t).cross(o1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(Uh),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||l1.getNormalMatrix(e),o=this.coplanarPoint(Uh).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let c1=0;class bs extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:c1++}),this.uuid=Cs(),this.name="",this.type="Material",this.blending=_o,this.side=Es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tg,this.blendDst=ng,this.blendEquation=fa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=Mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gh,this.stencilZFail=gh,this.stencilZPass=gh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){pt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){pt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(r.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(r.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(r.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(r.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const d in l){const f=l[d];delete f.metadata,u.push(f)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Tr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Xe().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Od extends bs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let oa;const co=new A,la=new A,ca=new A,ua=new Xe,uo=new Xe,Rg=new en,Bl=new A,ho=new A,zl=new A,n0=new Xe,Oh=new Xe,i0=new Xe;class r0 extends bn{constructor(e=new Od){if(super(),this.isSprite=!0,this.type="Sprite",oa===void 0){oa=new Qn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new a1(t,5);oa.setIndex([0,1,2,0,2,3]),oa.setAttribute("position",new Sc(r,3,0,!1)),oa.setAttribute("uv",new Sc(r,2,3,!1))}this.geometry=oa,this.material=e,this.center=new Xe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ft('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),la.setFromMatrixScale(this.matrixWorld),Rg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ca.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&la.multiplyScalar(-ca.z);const r=this.material.rotation;let o,l;r!==0&&(l=Math.cos(r),o=Math.sin(r));const u=this.center;Hl(Bl.set(-.5,-.5,0),ca,u,la,o,l),Hl(ho.set(.5,-.5,0),ca,u,la,o,l),Hl(zl.set(.5,.5,0),ca,u,la,o,l),n0.set(0,0),Oh.set(1,0),i0.set(1,1);let d=e.ray.intersectTriangle(Bl,ho,zl,!1,co);if(d===null&&(Hl(ho.set(-.5,.5,0),ca,u,la,o,l),Oh.set(0,1),d=e.ray.intersectTriangle(Bl,zl,ho,!1,co),d===null))return;const f=e.ray.origin.distanceTo(co);f<e.near||f>e.far||t.push({distance:f,point:co.clone(),uv:Si.getInterpolation(co,Bl,ho,zl,n0,Oh,i0,new Xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){const t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function Hl(s,e,t,r,o,l){ua.subVectors(s,t).addScalar(.5).multiply(r),o!==void 0?(uo.x=l*ua.x-o*ua.y,uo.y=o*ua.x+l*ua.y):uo.copy(ua),s.copy(e),s.x+=uo.x,s.y+=uo.y,s.applyMatrix4(Rg)}const Mr=new A,Fh=new A,Vl=new A,Gl=new A;class Nc{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mr.copy(this.origin).addScaledVector(this.direction,t),Mr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Fh.copy(e).add(t).multiplyScalar(.5),Vl.copy(t).sub(e).normalize(),Gl.copy(this.origin).sub(Fh);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Vl),d=Gl.dot(this.direction),f=-Gl.dot(Vl),p=Gl.lengthSq(),_=Math.abs(1-u*u);let M,v,S,w;if(_>0)if(M=u*f-d,v=u*d-f,w=l*_,M>=0)if(v>=-w)if(v<=w){const R=1/_;M*=R,v*=R,S=M*(M+u*v+2*d)+v*(u*M+v+2*f)+p}else v=l,M=Math.max(0,-(u*v+d)),S=-M*M+v*(v+2*f)+p;else v=-l,M=Math.max(0,-(u*v+d)),S=-M*M+v*(v+2*f)+p;else v<=-w?(M=Math.max(0,-(-u*l+d)),v=M>0?-l:Math.min(Math.max(-l,-f),l),S=-M*M+v*(v+2*f)+p):v<=w?(M=0,v=Math.min(Math.max(-l,-f),l),S=v*(v+2*f)+p):(M=Math.max(0,-(u*l+d)),v=M>0?l:Math.min(Math.max(-l,-f),l),S=-M*M+v*(v+2*f)+p);else v=u>0?-l:l,M=Math.max(0,-(u*v+d)),S=-M*M+v*(v+2*f)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,M),o&&o.copy(Fh).addScaledVector(Vl,v),S}intersectSphere(e,t){if(e.radius<0)return null;Mr.subVectors(e.center,this.origin);const r=Mr.dot(this.direction),o=Mr.dot(Mr)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),d=r-u,f=r+u;return f<0?null:d<0?this.at(f,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,d,f;const p=1/this.direction.x,_=1/this.direction.y,M=1/this.direction.z,v=this.origin;return p>=0?(r=(e.min.x-v.x)*p,o=(e.max.x-v.x)*p):(r=(e.max.x-v.x)*p,o=(e.min.x-v.x)*p),_>=0?(l=(e.min.y-v.y)*_,u=(e.max.y-v.y)*_):(l=(e.max.y-v.y)*_,u=(e.min.y-v.y)*_),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),M>=0?(d=(e.min.z-v.z)*M,f=(e.max.z-v.z)*M):(d=(e.max.z-v.z)*M,f=(e.min.z-v.z)*M),r>f||d>o)||((d>r||r!==r)&&(r=d),(f<o||o!==o)&&(o=f),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Mr)!==null}intersectTriangle(e,t,r,o,l){const u=this.origin,d=this.direction,f=d.x,p=d.y,_=d.z,M=e.x-u.x,v=e.y-u.y,S=e.z-u.z,w=t.x-u.x,R=t.y-u.y,y=t.z-u.z,x=r.x-u.x,D=r.y-u.y,F=r.z-u.z,P=Math.abs(f),O=Math.abs(p),I=Math.abs(_);let T,E,Y,B,V,$,te,H,he,le,ee,ne;if(P>=O&&P>=I?(Y=f,$=M,he=w,ne=x,f>=0?(T=p,E=_,B=v,V=S,te=R,H=y,le=D,ee=F):(T=_,E=p,B=S,V=v,te=y,H=R,le=F,ee=D)):O>=I?(Y=p,$=v,he=R,ne=D,p>=0?(T=_,E=f,B=S,V=M,te=y,H=w,le=F,ee=x):(T=f,E=_,B=M,V=S,te=w,H=y,le=x,ee=F)):(Y=_,$=S,he=y,ne=F,_>=0?(T=f,E=p,B=M,V=v,te=w,H=R,le=x,ee=D):(T=p,E=f,B=v,V=M,te=R,H=w,le=D,ee=x)),Y===0)return null;const J=T/Y,Q=E/Y,U=1/Y,se=B-J*$,Oe=V-Q*$,ce=te-J*he,we=H-Q*he,Ce=le-J*ne,He=ee-Q*ne,Ae=Ce*we-He*ce,Ke=se*He-Oe*Ce,it=ce*Oe-we*se;if(o){if(Ae<0||Ke<0||it<0)return null}else if((Ae<0||Ke<0||it<0)&&(Ae>0||Ke>0||it>0))return null;const lt=Ae+Ke+it;if(lt===0)return null;const ot=U*(Ae*$+Ke*he+it*ne);return(lt>0?ot<0:ot>0)?null:this.at(ot/lt,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pa extends bs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new as,this.combine=ig,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const s0=new en,Ms=new Nc,Wl=new Rc,a0=new A,jl=new A,Xl=new A,Kl=new A,kh=new A,Yl=new A,o0=new A,ql=new A;class Ot extends bn{constructor(e=new Qn,t=new pa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){Yl.set(0,0,0);for(let f=0,p=l.length;f<p;f++){const _=d[f],M=l[f];_!==0&&(kh.fromBufferAttribute(M,e),u?Yl.addScaledVector(kh,_):Yl.addScaledVector(kh.sub(t),_))}t.add(Yl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Wl.copy(r.boundingSphere),Wl.applyMatrix4(l),Ms.copy(e.ray).recast(e.near),!(Wl.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere(Wl,a0)===null||Ms.origin.distanceToSquared(a0)>(e.far-e.near)**2))&&(s0.copy(l).invert(),Ms.copy(e.ray).applyMatrix4(s0),!(r.boundingBox!==null&&Ms.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Ms)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,d=l.index,f=l.attributes.position,p=l.attributes.uv,_=l.attributes.uv1,M=l.attributes.normal,v=l.groups,S=l.drawRange;if(d!==null)if(Array.isArray(u))for(let w=0,R=v.length;w<R;w++){const y=v[w],x=u[y.materialIndex],D=Math.max(y.start,S.start),F=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let P=D,O=F;P<O;P+=3){const I=d.getX(P),T=d.getX(P+1),E=d.getX(P+2);o=$l(this,x,e,r,p,_,M,I,T,E),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const w=Math.max(0,S.start),R=Math.min(d.count,S.start+S.count);for(let y=w,x=R;y<x;y+=3){const D=d.getX(y),F=d.getX(y+1),P=d.getX(y+2);o=$l(this,u,e,r,p,_,M,D,F,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(u))for(let w=0,R=v.length;w<R;w++){const y=v[w],x=u[y.materialIndex],D=Math.max(y.start,S.start),F=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let P=D,O=F;P<O;P+=3){const I=P,T=P+1,E=P+2;o=$l(this,x,e,r,p,_,M,I,T,E),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const w=Math.max(0,S.start),R=Math.min(f.count,S.start+S.count);for(let y=w,x=R;y<x;y+=3){const D=y,F=y+1,P=y+2;o=$l(this,u,e,r,p,_,M,D,F,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function u1(s,e,t,r,o,l,u,d){let f;if(e.side===fi?f=r.intersectTriangle(u,l,o,!0,d):f=r.intersectTriangle(o,l,u,e.side===Es,d),f===null)return null;ql.copy(d),ql.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(ql);return p<t.near||p>t.far?null:{distance:p,point:ql.clone(),object:s}}function $l(s,e,t,r,o,l,u,d,f,p){s.getVertexPosition(d,jl),s.getVertexPosition(f,Xl),s.getVertexPosition(p,Kl);const _=u1(s,e,t,r,jl,Xl,Kl,o0);if(_){const M=new A;Si.getBarycoord(o0,jl,Xl,Kl,M),o&&(_.uv=Si.getInterpolatedAttribute(o,d,f,p,M,new Xe)),l&&(_.uv1=Si.getInterpolatedAttribute(l,d,f,p,M,new Xe)),u&&(_.normal=Si.getInterpolatedAttribute(u,d,f,p,M,new A),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const v={a:d,b:f,c:p,normal:new A,materialIndex:0};Si.getNormal(jl,Xl,Kl,v.normal),_.face=v,_.barycoord=M}return _}class h1 extends Zn{constructor(e=null,t=1,r=1,o,l,u,d,f,p=Hn,_=Hn,M,v){super(null,u,d,f,p,_,o,l,M,v),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ts=new Rc,d1=new Xe(.5,.5),Zl=new A;class Ao{constructor(e=new Tr,t=new Tr,r=new Tr,o=new Tr,l=new Tr,u=new Tr){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(o),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Wi,r=!1){const o=this.planes,l=e.elements,u=l[0],d=l[1],f=l[2],p=l[3],_=l[4],M=l[5],v=l[6],S=l[7],w=l[8],R=l[9],y=l[10],x=l[11],D=l[12],F=l[13],P=l[14],O=l[15];if(o[0].setComponents(p-u,S-_,x-w,O-D).normalize(),o[1].setComponents(p+u,S+_,x+w,O+D).normalize(),o[2].setComponents(p+d,S+M,x+R,O+F).normalize(),o[3].setComponents(p-d,S-M,x-R,O-F).normalize(),r)o[4].setComponents(f,v,y,P).normalize(),o[5].setComponents(p-f,S-v,x-y,O-P).normalize();else if(o[4].setComponents(p-f,S-v,x-y,O-P).normalize(),t===Wi)o[5].setComponents(p+f,S+v,x+y,O+P).normalize();else if(t===wo)o[5].setComponents(f,v,y,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(e){Ts.center.set(0,0,0);const t=d1.distanceTo(e.center);return Ts.radius=.7071067811865476+t,Ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Zl.x=o.normal.x>0?e.max.x:e.min.x,Zl.y=o.normal.y>0?e.max.y:e.min.y,Zl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Zl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const l0=new en;class Qd{constructor(){this.coordinateSystem=Wi,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,r=this._frustums;for(let o=0;o<t.length;o++){const l=t[o];l0.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse),r[o]===void 0&&(r[o]=new Ao),r[o].setFromProjectionMatrix(l0,l.coordinateSystem,l.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,r=e._frustums;for(let o=0;o<e._count;o++)t[o]===void 0&&(t[o]=new Ao),t[o].copy(r[o]);return this._count=e._count,this}clone(){return new Qd().copy(this)}}class Mc extends bs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Tc=new A,Ec=new A,c0=new en,fo=new Nc,Ql=new Rc,Bh=new A,u0=new A;class f1 extends bn{constructor(e=new Qn,t=new Mc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)Tc.fromBufferAttribute(t,o-1),Ec.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=Tc.distanceTo(Ec);e.setAttribute("lineDistance",new qt(r,1))}else pt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ql.copy(r.boundingSphere),Ql.applyMatrix4(o),Ql.radius+=l,e.ray.intersectsSphere(Ql)===!1)return;c0.copy(o).invert(),fo.copy(e.ray).applyMatrix4(c0);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),f=d*d,p=this.isLineSegments?2:1,_=r.index,v=r.attributes.position;if(_!==null){const S=Math.max(0,u.start),w=Math.min(_.count,u.start+u.count);for(let R=S,y=w-1;R<y;R+=p){const x=_.getX(R),D=_.getX(R+1),F=Jl(this,e,fo,f,x,D,R);F&&t.push(F)}if(this.isLineLoop){const R=_.getX(w-1),y=_.getX(S),x=Jl(this,e,fo,f,R,y,w-1);x&&t.push(x)}}else{const S=Math.max(0,u.start),w=Math.min(v.count,u.start+u.count);for(let R=S,y=w-1;R<y;R+=p){const x=Jl(this,e,fo,f,R,R+1,R);x&&t.push(x)}if(this.isLineLoop){const R=Jl(this,e,fo,f,w-1,S,w-1);R&&t.push(R)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Jl(s,e,t,r,o,l,u){const d=s.geometry.attributes.position;if(Tc.fromBufferAttribute(d,o),Ec.fromBufferAttribute(d,l),t.distanceSqToSegment(Tc,Ec,Bh,u0)>r)return;Bh.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(Bh);if(!(p<e.near||p>e.far))return{distance:p,point:u0.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}const h0=new A,d0=new A;class Fd extends f1{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)h0.fromBufferAttribute(t,o),d0.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+h0.distanceTo(d0);e.setAttribute("lineDistance",new qt(r,1))}else pt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ng extends Zn{constructor(e=[],t=ya,r,o,l,u,d,f,p,_){super(e,t,r,o,l,u,d,f,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class f0 extends Zn{constructor(e,t,r,o,l,u,d,f,p){super(e,t,r,o,l,u,d,f,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ma extends Zn{constructor(e,t,r=sr,o,l,u,d=Hn,f=Hn,p,_=rs,M=1){if(_!==rs&&_!==ns)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:M};super(v,o,l,u,d,f,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $d(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Pg extends Ma{constructor(e,t=sr,r=ya,o,l,u=Hn,d=Hn,f,p=rs){const _={width:e,height:e,depth:1},M=[_,_,_,_,_,_];super(e,e,t,r,o,l,u,d,f,p),this.image=M,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Dg extends Zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class wr extends Qn{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const d=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const f=[],p=[],_=[],M=[];let v=0,S=0;w("z","y","x",-1,-1,r,t,e,u,l,0),w("z","y","x",1,-1,r,t,-e,u,l,1),w("x","z","y",1,1,e,r,t,o,u,2),w("x","z","y",1,-1,e,r,-t,o,u,3),w("x","y","z",1,-1,e,t,r,o,l,4),w("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(f),this.setAttribute("position",new qt(p,3)),this.setAttribute("normal",new qt(_,3)),this.setAttribute("uv",new qt(M,2));function w(R,y,x,D,F,P,O,I,T,E,Y){const B=P/T,V=O/E,$=P/2,te=O/2,H=I/2,he=T+1,le=E+1;let ee=0,ne=0;const J=new A;for(let Q=0;Q<le;Q++){const U=Q*V-te;for(let se=0;se<he;se++){const Oe=se*B-$;J[R]=Oe*D,J[y]=U*F,J[x]=H,p.push(J.x,J.y,J.z),J[R]=0,J[y]=0,J[x]=I>0?1:-1,_.push(J.x,J.y,J.z),M.push(se/T),M.push(1-Q/E),ee+=1}}for(let Q=0;Q<E;Q++)for(let U=0;U<T;U++){const se=v+U+he*Q,Oe=v+U+he*(Q+1),ce=v+(U+1)+he*(Q+1),we=v+(U+1)+he*Q;f.push(se,Oe,we),f.push(Oe,ce,we),ne+=6}d.addGroup(S,ne,Y),S+=ne,v+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Jr extends Qn{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,d=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:d,thetaLength:f};const p=this;o=Math.floor(o),l=Math.floor(l);const _=[],M=[],v=[],S=[];let w=0;const R=[],y=r/2;let x=0;D(),u===!1&&(e>0&&F(!0),t>0&&F(!1)),this.setIndex(_),this.setAttribute("position",new qt(M,3)),this.setAttribute("normal",new qt(v,3)),this.setAttribute("uv",new qt(S,2));function D(){const P=new A,O=new A;let I=0;const T=(t-e)/r;for(let E=0;E<=l;E++){const Y=[],B=E/l,V=B*(t-e)+e;for(let $=0;$<=o;$++){const te=$/o,H=te*f+d,he=Math.sin(H),le=Math.cos(H);O.x=V*he,O.y=-B*r+y,O.z=V*le,M.push(O.x,O.y,O.z),P.set(he,T,le).normalize(),v.push(P.x,P.y,P.z),S.push(te,1-B),Y.push(w++)}R.push(Y)}for(let E=0;E<o;E++)for(let Y=0;Y<l;Y++){const B=R[Y][E],V=R[Y+1][E],$=R[Y+1][E+1],te=R[Y][E+1];(e>0||Y!==0)&&(_.push(B,V,te),I+=3),(t>0||Y!==l-1)&&(_.push(V,$,te),I+=3)}p.addGroup(x,I,0),x+=I}function F(P){const O=w,I=new Xe,T=new A;let E=0;const Y=P===!0?e:t,B=P===!0?1:-1;for(let $=1;$<=o;$++)M.push(0,y*B,0),v.push(0,B,0),S.push(.5,.5),w++;const V=w;for(let $=0;$<=o;$++){const H=$/o*f+d,he=Math.cos(H),le=Math.sin(H);T.x=Y*le,T.y=y*B,T.z=Y*he,M.push(T.x,T.y,T.z),v.push(0,B,0),I.x=he*.5+.5,I.y=le*.5*B+.5,S.push(I.x,I.y),w++}for(let $=0;$<o;$++){const te=O+$,H=V+$;P===!0?_.push(H,H+1,te):_.push(H+1,H,te),E+=3}p.addGroup(x,E,P===!0?1:2),x+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const ec=new A,tc=new A,zh=new A,nc=new Si;class p0 extends Qn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const o=Math.pow(10,4),l=Math.cos(xo*t),u=e.getIndex(),d=e.getAttribute("position"),f=u?u.count:d.count,p=[0,0,0],_=["a","b","c"],M=new Array(3),v=new Map,S=[];for(let w=0;w<f;w+=3){u?(p[0]=u.getX(w),p[1]=u.getX(w+1),p[2]=u.getX(w+2)):(p[0]=w,p[1]=w+1,p[2]=w+2);const{a:R,b:y,c:x}=nc;if(R.fromBufferAttribute(d,p[0]),y.fromBufferAttribute(d,p[1]),x.fromBufferAttribute(d,p[2]),nc.getNormal(zh),M[0]=`${Math.round(R.x*o)},${Math.round(R.y*o)},${Math.round(R.z*o)}`,M[1]=`${Math.round(y.x*o)},${Math.round(y.y*o)},${Math.round(y.z*o)}`,M[2]=`${Math.round(x.x*o)},${Math.round(x.y*o)},${Math.round(x.z*o)}`,!(M[0]===M[1]||M[1]===M[2]||M[2]===M[0]))for(let D=0;D<3;D++){const F=(D+1)%3,P=M[D],O=M[F],I=nc[_[D]],T=nc[_[F]],E=`${P}_${O}`,Y=`${O}_${P}`,B=v.get(Y);B?(zh.dot(B.normal)<=l&&(S.push(I.x,I.y,I.z),S.push(T.x,T.y,T.z)),v.set(Y,null)):v.has(E)||v.set(E,{index0:p[D],index1:p[F],normal:zh.clone()})}}for(const w of v.values())if(w){const{index0:R,index1:y}=w;ec.fromBufferAttribute(d,R),tc.fromBufferAttribute(d,y),S.push(ec.x,ec.y,ec.z),S.push(tc.x,tc.y,tc.z)}this.setAttribute("position",new qt(S,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class br{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){pt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let o=0;const l=r.length;let u;t?u=t:u=e*r[l-1];let d=0,f=l-1,p;for(;d<=f;)if(o=Math.floor(d+(f-d)/2),p=r[o]-u,p<0)d=o+1;else if(p>0)f=o-1;else{f=o;break}if(o=f,r[o]===u)return o/(l-1);const _=r[o],v=r[o+1]-_,S=(u-_)/v;return(o+S)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const u=this.getPoint(o),d=this.getPoint(l),f=t||(u.isVector2?new Xe:new A);return f.copy(d).sub(u).normalize(),f}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new A,o=[],l=[],u=[],d=new A,f=new en;for(let S=0;S<=e;S++){const w=S/e;o[S]=this.getTangentAt(w,new A)}l[0]=new A,u[0]=new A;let p=Number.MAX_VALUE;const _=Math.abs(o[0].x),M=Math.abs(o[0].y),v=Math.abs(o[0].z);_<=p&&(p=_,r.set(1,0,0)),M<=p&&(p=M,r.set(0,1,0)),v<=p&&r.set(0,0,1),d.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],d),u[0].crossVectors(o[0],l[0]);for(let S=1;S<=e;S++){if(l[S]=l[S-1].clone(),u[S]=u[S-1].clone(),d.crossVectors(o[S-1],o[S]),d.length()>Number.EPSILON){d.normalize();const w=Math.acos(Tt(o[S-1].dot(o[S]),-1,1));l[S].applyMatrix4(f.makeRotationAxis(d,w))}u[S].crossVectors(o[S],l[S])}if(t===!0){let S=Math.acos(Tt(l[0].dot(l[e]),-1,1));S/=e,o[0].dot(d.crossVectors(l[0],l[e]))>0&&(S=-S);for(let w=1;w<=e;w++)l[w].applyMatrix4(f.makeRotationAxis(o[w],S*w)),u[w].crossVectors(o[w],l[w])}return{tangents:o,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class Lg extends br{constructor(e=0,t=0,r=1,o=1,l=0,u=Math.PI*2,d=!1,f=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=d,this.aRotation=f}getPoint(e,t=new Xe){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(u?l=0:l=o),this.aClockwise===!0&&!u&&(l===o?l=-o:l=l-o);const d=this.aStartAngle+e*l;let f=this.aX+this.xRadius*Math.cos(d),p=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const _=Math.cos(this.aRotation),M=Math.sin(this.aRotation),v=f-this.aX,S=p-this.aY;f=v*_-S*M+this.aX,p=v*M+S*_+this.aY}return r.set(f,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class p1 extends Lg{constructor(e,t,r,o,l,u){super(e,t,r,r,o,l,u),this.isArcCurve=!0,this.type="ArcCurve"}}function Jd(){let s=0,e=0,t=0,r=0;function o(l,u,d,f){s=l,e=d,t=-3*l+3*u-2*d-f,r=2*l-2*u+d+f}return{initCatmullRom:function(l,u,d,f,p){o(u,d,p*(d-l),p*(f-u))},initNonuniformCatmullRom:function(l,u,d,f,p,_,M){let v=(u-l)/p-(d-l)/(p+_)+(d-u)/_,S=(d-u)/_-(f-u)/(_+M)+(f-d)/M;v*=_,S*=_,o(u,d,v,S)},calc:function(l){const u=l*l,d=u*l;return s+e*l+t*u+r*d}}}const m0=new A,g0=new A,Hh=new Jd,Vh=new Jd,Gh=new Jd;class Ig extends br{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new A){const r=t,o=this.points,l=o.length,u=(l-(this.closed?0:1))*e;let d=Math.floor(u),f=u-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/l)+1)*l:f===0&&d===l-1&&(d=l-2,f=1);let p,_;this.closed||d>0?p=o[(d-1)%l]:(g0.subVectors(o[0],o[1]).add(o[0]),p=g0);const M=o[d%l],v=o[(d+1)%l];if(this.closed||d+2<l?_=o[(d+2)%l]:(m0.subVectors(o[l-1],o[l-2]).add(o[l-1]),_=m0),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let w=Math.pow(p.distanceToSquared(M),S),R=Math.pow(M.distanceToSquared(v),S),y=Math.pow(v.distanceToSquared(_),S);R<1e-4&&(R=1),w<1e-4&&(w=R),y<1e-4&&(y=R),Hh.initNonuniformCatmullRom(p.x,M.x,v.x,_.x,w,R,y),Vh.initNonuniformCatmullRom(p.y,M.y,v.y,_.y,w,R,y),Gh.initNonuniformCatmullRom(p.z,M.z,v.z,_.z,w,R,y)}else this.curveType==="catmullrom"&&(Hh.initCatmullRom(p.x,M.x,v.x,_.x,this.tension),Vh.initCatmullRom(p.y,M.y,v.y,_.y,this.tension),Gh.initCatmullRom(p.z,M.z,v.z,_.z,this.tension));return r.set(Hh.calc(f),Vh.calc(f),Gh.calc(f)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new A().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function v0(s,e,t,r,o){const l=(r-e)*.5,u=(o-t)*.5,d=s*s,f=s*d;return(2*t-2*r+l+u)*f+(-3*t+3*r-2*l-u)*d+l*s+t}function m1(s,e){const t=1-s;return t*t*e}function g1(s,e){return 2*(1-s)*s*e}function v1(s,e){return s*s*e}function yo(s,e,t,r){return m1(s,e)+g1(s,t)+v1(s,r)}function _1(s,e){const t=1-s;return t*t*t*e}function x1(s,e){const t=1-s;return 3*t*t*s*e}function y1(s,e){return 3*(1-s)*s*s*e}function S1(s,e){return s*s*s*e}function So(s,e,t,r,o){return _1(s,e)+x1(s,t)+y1(s,r)+S1(s,o)}class M1 extends br{constructor(e=new Xe,t=new Xe,r=new Xe,o=new Xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new Xe){const r=t,o=this.v0,l=this.v1,u=this.v2,d=this.v3;return r.set(So(e,o.x,l.x,u.x,d.x),So(e,o.y,l.y,u.y,d.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class T1 extends br{constructor(e=new A,t=new A,r=new A,o=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new A){const r=t,o=this.v0,l=this.v1,u=this.v2,d=this.v3;return r.set(So(e,o.x,l.x,u.x,d.x),So(e,o.y,l.y,u.y,d.y),So(e,o.z,l.z,u.z,d.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class E1 extends br{constructor(e=new Xe,t=new Xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Xe){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class w1 extends br{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class A1 extends br{constructor(e=new Xe,t=new Xe,r=new Xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Xe){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(yo(e,o.x,l.x,u.x),yo(e,o.y,l.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ug extends br{constructor(e=new A,t=new A,r=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new A){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(yo(e,o.x,l.x,u.x),yo(e,o.y,l.y,u.y),yo(e,o.z,l.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class C1 extends br{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Xe){const r=t,o=this.points,l=(o.length-1)*e,u=Math.floor(l),d=l-u,f=o[u===0?u:u-1],p=o[u],_=o[u>o.length-2?o.length-1:u+1],M=o[u>o.length-3?o.length-1:u+2];return r.set(v0(d,f.x,p.x,_.x,M.x),v0(d,f.y,p.y,_.y,M.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new Xe().fromArray(o))}return this}}var b1=Object.freeze({__proto__:null,ArcCurve:p1,CatmullRomCurve3:Ig,CubicBezierCurve:M1,CubicBezierCurve3:T1,EllipseCurve:Lg,LineCurve:E1,LineCurve3:w1,QuadraticBezierCurve:A1,QuadraticBezierCurve3:Ug,SplineCurve:C1});class Hi extends Qn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,d=Math.floor(r),f=Math.floor(o),p=d+1,_=f+1,M=e/d,v=t/f,S=[],w=[],R=[],y=[];for(let x=0;x<_;x++){const D=x*v-u;for(let F=0;F<p;F++){const P=F*M-l;w.push(P,-D,0),R.push(0,0,1),y.push(F/d),y.push(1-x/f)}}for(let x=0;x<f;x++)for(let D=0;D<d;D++){const F=D+p*x,P=D+p*(x+1),O=D+1+p*(x+1),I=D+1+p*x;S.push(F,P,I),S.push(P,O,I)}this.setIndex(S),this.setAttribute("position",new qt(w,3)),this.setAttribute("normal",new qt(R,3)),this.setAttribute("uv",new qt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hi(e.width,e.height,e.widthSegments,e.heightSegments)}}class wc extends Qn{constructor(e=.5,t=1,r=32,o=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:o,thetaStart:l,thetaLength:u},r=Math.max(3,r),o=Math.max(1,o);const d=[],f=[],p=[],_=[];let M=e;const v=(t-e)/o,S=new A,w=new Xe;for(let R=0;R<=o;R++){for(let y=0;y<=r;y++){const x=l+y/r*u;S.x=M*Math.cos(x),S.y=M*Math.sin(x),f.push(S.x,S.y,S.z),p.push(0,0,1),w.x=(S.x/t+1)/2,w.y=(S.y/t+1)/2,_.push(w.x,w.y)}M+=v}for(let R=0;R<o;R++){const y=R*(r+1);for(let x=0;x<r;x++){const D=x+y,F=D,P=D+r+1,O=D+r+2,I=D+1;d.push(F,P,I),d.push(P,O,I)}}this.setIndex(d),this.setAttribute("position",new qt(f,3)),this.setAttribute("normal",new qt(p,3)),this.setAttribute("uv",new qt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ga extends Qn{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const f=Math.min(u+d,Math.PI);let p=0;const _=[],M=new A,v=new A,S=[],w=[],R=[],y=[];for(let x=0;x<=r;x++){const D=[],F=x/r,P=u+F*d,O=e*Math.cos(P),I=Math.sqrt(e*e-O*O);let T=0;x===0&&u===0?T=.5/t:x===r&&f===Math.PI&&(T=-.5/t);for(let E=0;E<=t;E++){const Y=E/t,B=o+Y*l;M.x=-I*Math.cos(B),M.y=O,M.z=I*Math.sin(B),w.push(M.x,M.y,M.z),v.copy(M).normalize(),R.push(v.x,v.y,v.z),y.push(Y+T,1-F),D.push(p++)}_.push(D)}for(let x=0;x<r;x++)for(let D=0;D<t;D++){const F=_[x][D+1],P=_[x][D],O=_[x+1][D],I=_[x+1][D+1];(x!==0||u>0)&&S.push(F,P,I),(x!==r-1||f<Math.PI)&&S.push(P,O,I)}this.setIndex(S),this.setAttribute("position",new qt(w,3)),this.setAttribute("normal",new qt(R,3)),this.setAttribute("uv",new qt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ga(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ef extends Qn{constructor(e=1,t=.4,r=12,o=48,l=Math.PI*2,u=0,d=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:l,thetaStart:u,thetaLength:d},r=Math.floor(r),o=Math.floor(o);const f=[],p=[],_=[],M=[],v=new A,S=new A,w=new A;for(let R=0;R<=r;R++){const y=u+R/r*d;for(let x=0;x<=o;x++){const D=x/o*l;S.x=(e+t*Math.cos(y))*Math.cos(D),S.y=(e+t*Math.cos(y))*Math.sin(D),S.z=t*Math.sin(y),p.push(S.x,S.y,S.z),v.x=e*Math.cos(D),v.y=e*Math.sin(D),w.subVectors(S,v).normalize(),_.push(w.x,w.y,w.z),M.push(x/o),M.push(R/r)}}for(let R=1;R<=r;R++)for(let y=1;y<=o;y++){const x=(o+1)*R+y-1,D=(o+1)*(R-1)+y-1,F=(o+1)*(R-1)+y,P=(o+1)*R+y;f.push(x,D,P),f.push(D,F,P)}this.setIndex(f),this.setAttribute("position",new qt(p,3)),this.setAttribute("normal",new qt(_,3)),this.setAttribute("uv",new qt(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ef(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class tf extends Qn{constructor(e=new Ug(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),t=64,r=1,o=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:o,closed:l};const u=e.computeFrenetFrames(t,l);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const d=new A,f=new A,p=new Xe;let _=new A;const M=[],v=[],S=[],w=[];R(),this.setIndex(w),this.setAttribute("position",new qt(M,3)),this.setAttribute("normal",new qt(v,3)),this.setAttribute("uv",new qt(S,2));function R(){for(let F=0;F<t;F++)y(F);y(l===!1?t:0),D(),x()}function y(F){_=e.getPointAt(F/t,_);const P=u.normals[F],O=u.binormals[F];for(let I=0;I<=o;I++){const T=I/o*Math.PI*2,E=Math.sin(T),Y=-Math.cos(T);f.x=Y*P.x+E*O.x,f.y=Y*P.y+E*O.y,f.z=Y*P.z+E*O.z,f.normalize(),v.push(f.x,f.y,f.z),d.x=_.x+r*f.x,d.y=_.y+r*f.y,d.z=_.z+r*f.z,M.push(d.x,d.y,d.z)}}function x(){for(let F=1;F<=t;F++)for(let P=1;P<=o;P++){const O=(o+1)*(F-1)+(P-1),I=(o+1)*F+(P-1),T=(o+1)*F+P,E=(o+1)*(F-1)+P;w.push(O,I,E),w.push(I,T,E)}}function D(){for(let F=0;F<=t;F++)for(let P=0;P<=o;P++)p.x=F/t,p.y=P/o,S.push(p.x,p.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new tf(new b1[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Ta(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(_0(o))o.isRenderTargetTexture?(pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(_0(o[0])){const l=[];for(let u=0,d=o.length;u<d;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function ni(s){const e={};for(let t=0;t<s.length;t++){const r=Ta(s[t]);for(const o in r)e[o]=r[o]}return e}function _0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function R1(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Og(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Dt.workingColorSpace}const N1={clone:Ta,merge:ni};var P1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,D1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class As extends bs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=P1,this.fragmentShader=D1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ta(e.uniforms),this.uniformsGroups=R1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new Et().setHex(o.value);break;case"v2":this.uniforms[r].value=new Xe().fromArray(o.value);break;case"v3":this.uniforms[r].value=new A().fromArray(o.value);break;case"v4":this.uniforms[r].value=new dn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new vt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new en().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class L1 extends As{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class kn extends bs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Id,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new as,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class I1 extends bs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class U1 extends bs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class nf extends bn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class O1 extends nf{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Wh=new en,x0=new A,y0=new A;class F1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=yi,this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ao,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new dn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;x0.setFromMatrixPosition(e.matrixWorld),t.position.copy(x0),y0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(y0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,o){Wh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(Wh,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,u=o?o.z/l.x:1,d=o?o.w/l.y:1,f=o?o.x/l.x:0,p=o?o.y/l.y:0;e.coordinateSystem===wo||e.reversedDepth?t.set(.5*u,0,0,.5*u+f,0,.5*d,0,.5*d+p,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+f,0,.5*d,0,.5*d+p,0,0,.5,.5,0,0,0,1),t.multiply(Wh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ic=new A,rc=new ss,Ji=new A;class Fg extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ic,rc,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ic,rc,Ji.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(ic,rc,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ic,rc,Ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Qr=new A,S0=new Xe,M0=new Xe;class Vi extends Fg{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ud*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ud*2*Math.atan(Math.tan(xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Qr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qr.x,Qr.y).multiplyScalar(-e/Qr.z),Qr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Qr.x,Qr.y).multiplyScalar(-e/Qr.z)}getViewSize(e,t){return this.getViewBounds(e,S0,M0),t.subVectors(M0,S0)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xo*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/f,t-=u.offsetY*r/p,o*=u.width/f,r*=u.height/p}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class kg extends Fg{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,d-=_*this.view.offsetY,f=d-_*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class k1 extends F1{constructor(){super(new kg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class B1 extends nf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.shadow=new k1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class z1 extends nf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ha=-90,da=1;class kd extends bn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Vi(ha,da,e,t);o.layers=this.layers,this.add(o);const l=new Vi(ha,da,e,t);l.layers=this.layers,this.add(l);const u=new Vi(ha,da,e,t);u.layers=this.layers,this.add(u);const d=new Vi(ha,da,e,t);d.layers=this.layers,this.add(d);const f=new Vi(ha,da,e,t);f.layers=this.layers,this.add(f);const p=new Vi(ha,da,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,d,f]=t;for(const p of t)this.remove(p);if(e===Wi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===wo)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,f,p,_]=this.children,M=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.mipmapsAutoUpdate;r.texture.mipmapsAutoUpdate=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.mipmapsAutoUpdate=R,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,_),e.setRenderTarget(M,v,S),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class H1 extends Vi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const T0=new en;class V1{constructor(e,t,r=0,o=1/0){this.ray=new Nc(e,t),this.near=r,this.far=o,this.camera=null,this.layers=new Zd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ft("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return T0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(T0),this}intersectObject(e,t=!0,r=[]){return Bd(e,this,r,t),r.sort(E0),r}intersectObjects(e,t=!0,r=[]){for(let o=0,l=e.length;o<l;o++)Bd(e[o],this,r,t);return r.sort(E0),r}}function E0(s,e){return s.distance-e.distance}function Bd(s,e,t,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(o=!1),o===!0&&r===!0){const l=s.children;for(let u=0,d=l.length;u<d;u++)Bd(l[u],e,t,!0)}}class w0{constructor(e=1,t=0,r=0){this.radius=e,this.phi=t,this.theta=r}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Tt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class G1 extends Fd{constructor(e=10,t=10,r=4473924,o=8947848){r=new Et(r),o=new Et(o);const l=t/2,u=e/t,d=e/2,f=[],p=[];for(let v=0,S=0,w=-d;v<=t;v++,w+=u){f.push(-d,0,w,d,0,w),f.push(w,0,-d,w,0,d);const R=v===l?r:o;R.toArray(p,S),S+=3,R.toArray(p,S),S+=3,R.toArray(p,S),S+=3,R.toArray(p,S),S+=3}const _=new Qn;_.setAttribute("position",new qt(f,3)),_.setAttribute("color",new qt(p,3));const M=new Mc({vertexColors:!0,toneMapped:!1});super(_,M),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class W1 extends os{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function A0(s,e,t,r){const o=j1(r);switch(t){case mg:return s*e;case vg:return s*e/o.components*o.byteLength;case Kd:return s*e/o.components*o.byteLength;case ws:return s*e*2/o.components*o.byteLength;case Yd:return s*e*2/o.components*o.byteLength;case gg:return s*e*3/o.components*o.byteLength;case ir:return s*e*4/o.components*o.byteLength;case qd:return s*e*4/o.components*o.byteLength;case cc:case uc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case hc:case dc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sd:case od:return Math.max(s,16)*Math.max(e,8)/4;case rd:case ad:return Math.max(s,8)*Math.max(e,8)/2;case ld:case cd:case hd:case dd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ud:case mc:case fd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case pd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case md:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case gd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case vd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case _d:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case xd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case yd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Sd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Md:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Td:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ed:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case wd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ad:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Cd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case bd:case Rd:case Nd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Pd:case Dd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case gc:case Ld:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function j1(s){switch(s){case yi:case hg:return{byteLength:1,components:1};case Eo:case dg:case ar:return{byteLength:2,components:1};case jd:case Xd:return{byteLength:2,components:4};case sr:case Wd:case nr:return{byteLength:4,components:1};case fg:case pg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vd}}));typeof window<"u"&&(window.__THREE__?pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Bg(){let s=null,e=!1,t=null,r=null;function o(l,u){r=s.requestAnimationFrame(o),t(l,u)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function X1(s){const e=new WeakMap;function t(d,f){const p=d.array,_=d.usage,M=p.byteLength,v=s.createBuffer();s.bindBuffer(f,v),s.bufferData(f,p,_),d.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:M}}function r(d,f,p){const _=f.array,M=f.updateRanges;if(s.bindBuffer(p,d),M.length===0)s.bufferSubData(p,0,_);else{M.sort((S,w)=>S.start-w.start);let v=0;for(let S=1;S<M.length;S++){const w=M[v],R=M[S];R.start<=w.start+w.count+1?w.count=Math.max(w.count,R.start+R.count-w.start):(++v,M[v]=R)}M.length=v+1;for(let S=0,w=M.length;S<w;S++){const R=M[S];s.bufferSubData(p,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}f.clearUpdateRanges()}f.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const f=e.get(d);f&&(s.deleteBuffer(f.buffer),e.delete(d))}function u(d,f){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,t(d,f));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,f),p.version=d.version}}return{get:o,remove:l,update:u}}var K1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Y1=`#ifdef USE_ALPHAHASH
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
#endif`,q1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Q1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,J1=`#ifdef USE_AOMAP
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
#endif`,ey=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ty=`#ifdef USE_BATCHING
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
#endif`,ny=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ry=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ay=`#ifdef USE_IRIDESCENCE
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
#endif`,oy=`#ifdef USE_BUMPMAP
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
#endif`,ly=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,fy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,py=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,my=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,gy=`#define PI 3.141592653589793
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
} // validated`,vy=`vec3 transformedNormal = objectNormal;
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
#endif`,_y=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,My="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ty=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ey=`#ifdef USE_ENVMAP
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
#endif`,wy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Ay=`#ifdef USE_ENVMAP
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
#endif`,Cy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,by=`#ifdef USE_ENVMAP
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
#endif`,Ry=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ny=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Py=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ly=`#ifdef USE_GRADIENTMAP
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
}`,Iy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Oy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ky=`#ifdef USE_ENVMAP
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
#endif`,By=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gy=`PhysicalMaterial material;
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
#endif`,Wy=`uniform sampler2D dfgLUT;
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
}`,jy=`
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
#endif`,Xy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ky=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yy=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,qy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$y=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nS=`#if defined( USE_POINTS_UV )
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
#endif`,iS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,aS=`#if defined( USE_MORPHCOLORS )
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
#endif`,oS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lS=`#ifdef USE_MORPHTARGETS
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
#endif`,cS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,mS=`#ifdef USE_NORMALMAP
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
#endif`,gS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_S=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,SS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,MS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,TS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ES=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,CS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,RS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,NS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,PS=`float getShadowMask() {
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
}`,DS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LS=`#ifdef USE_SKINNING
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
#endif`,IS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,US=`#ifdef USE_SKINNING
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
#endif`,OS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,BS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zS=`#ifdef USE_TRANSMISSION
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
#endif`,HS=`#ifdef USE_TRANSMISSION
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
#endif`,VS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,KS=`uniform sampler2D t2D;
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
}`,YS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qS=`uniform float backgroundBlurriness;
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
}`,$S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QS=`#include <common>
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
}`,JS=`#if DEPTH_PACKING == 3200
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
}`,eM=`#define DISTANCE
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
}`,tM=`#define DISTANCE
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
}`,nM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rM=`uniform float scale;
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
}`,sM=`uniform vec3 diffuse;
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
}`,aM=`#include <common>
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
}`,oM=`uniform vec3 diffuse;
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
}`,lM=`#define LAMBERT
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
}`,cM=`#define LAMBERT
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
}`,uM=`#define MATCAP
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
}`,hM=`#define MATCAP
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
}`,dM=`#define NORMAL
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
}`,fM=`#define NORMAL
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
}`,pM=`#define PHONG
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
}`,mM=`#define PHONG
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
}`,gM=`#define STANDARD
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
}`,vM=`#define STANDARD
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
}`,_M=`#define TOON
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
}`,xM=`#define TOON
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
}`,yM=`uniform float size;
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
}`,SM=`uniform vec3 diffuse;
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
}`,MM=`#include <common>
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
}`,TM=`uniform vec3 color;
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
}`,EM=`uniform float rotation;
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
}`,wM=`uniform vec3 diffuse;
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
}`,St={alphahash_fragment:K1,alphahash_pars_fragment:Y1,alphamap_fragment:q1,alphamap_pars_fragment:$1,alphatest_fragment:Z1,alphatest_pars_fragment:Q1,aomap_fragment:J1,aomap_pars_fragment:ey,batching_pars_vertex:ty,batching_vertex:ny,begin_vertex:iy,beginnormal_vertex:ry,bsdfs:sy,iridescence_fragment:ay,bumpmap_pars_fragment:oy,clipping_planes_fragment:ly,clipping_planes_pars_fragment:cy,clipping_planes_pars_vertex:uy,clipping_planes_vertex:hy,color_fragment:dy,color_pars_fragment:fy,color_pars_vertex:py,color_vertex:my,common:gy,defaultnormal_vertex:vy,displacementmap_pars_vertex:_y,displacementmap_vertex:xy,emissivemap_fragment:yy,emissivemap_pars_fragment:Sy,colorspace_fragment:My,colorspace_pars_fragment:Ty,envmap_fragment:Ey,envmap_common_pars_fragment:wy,envmap_pars_fragment:Ay,envmap_pars_vertex:Cy,envmap_physical_pars_fragment:ky,envmap_vertex:by,fog_vertex:Ry,fog_pars_vertex:Ny,fog_fragment:Py,fog_pars_fragment:Dy,gradientmap_pars_fragment:Ly,lightmap_pars_fragment:Iy,lights_lambert_fragment:Uy,lights_lambert_pars_fragment:Oy,lights_pars_begin:Fy,lights_toon_fragment:By,lights_toon_pars_fragment:zy,lights_phong_fragment:Hy,lights_phong_pars_fragment:Vy,lights_physical_fragment:Gy,lights_physical_pars_fragment:Wy,lights_fragment_begin:jy,lights_fragment_maps:Xy,lights_fragment_end:Ky,lightprobes_pars_fragment:Yy,logdepthbuf_fragment:qy,logdepthbuf_pars_fragment:$y,logdepthbuf_pars_vertex:Zy,logdepthbuf_vertex:Qy,map_fragment:Jy,map_pars_fragment:eS,map_particle_fragment:tS,map_particle_pars_fragment:nS,metalnessmap_fragment:iS,metalnessmap_pars_fragment:rS,morphinstance_vertex:sS,morphcolor_vertex:aS,morphnormal_vertex:oS,morphtarget_pars_vertex:lS,morphtarget_vertex:cS,normal_fragment_begin:uS,normal_fragment_maps:hS,normal_pars_fragment:dS,normal_pars_vertex:fS,normal_vertex:pS,normalmap_pars_fragment:mS,clearcoat_normal_fragment_begin:gS,clearcoat_normal_fragment_maps:vS,clearcoat_pars_fragment:_S,iridescence_pars_fragment:xS,opaque_fragment:yS,packing:SS,premultiplied_alpha_fragment:MS,project_vertex:TS,dithering_fragment:ES,dithering_pars_fragment:wS,roughnessmap_fragment:AS,roughnessmap_pars_fragment:CS,shadowmap_pars_fragment:bS,shadowmap_pars_vertex:RS,shadowmap_vertex:NS,shadowmask_pars_fragment:PS,skinbase_vertex:DS,skinning_pars_vertex:LS,skinning_vertex:IS,skinnormal_vertex:US,specularmap_fragment:OS,specularmap_pars_fragment:FS,tonemapping_fragment:kS,tonemapping_pars_fragment:BS,transmission_fragment:zS,transmission_pars_fragment:HS,uv_pars_fragment:VS,uv_pars_vertex:GS,uv_vertex:WS,worldpos_vertex:jS,background_vert:XS,background_frag:KS,backgroundCube_vert:YS,backgroundCube_frag:qS,cube_vert:$S,cube_frag:ZS,depth_vert:QS,depth_frag:JS,distance_vert:eM,distance_frag:tM,equirect_vert:nM,equirect_frag:iM,linedashed_vert:rM,linedashed_frag:sM,meshbasic_vert:aM,meshbasic_frag:oM,meshlambert_vert:lM,meshlambert_frag:cM,meshmatcap_vert:uM,meshmatcap_frag:hM,meshnormal_vert:dM,meshnormal_frag:fM,meshphong_vert:pM,meshphong_frag:mM,meshphysical_vert:gM,meshphysical_frag:vM,meshtoon_vert:_M,meshtoon_frag:xM,points_vert:yM,points_frag:SM,shadow_vert:MM,shadow_frag:TM,sprite_vert:EM,sprite_frag:wM},je={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},tr={basic:{uniforms:ni([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:ni([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new Et(0)},envMapIntensity:{value:1}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:ni([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:ni([je.common,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.roughnessmap,je.metalnessmap,je.fog,je.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:ni([je.common,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.gradientmap,je.fog,je.lights,{emissive:{value:new Et(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:ni([je.common,je.bumpmap,je.normalmap,je.displacementmap,je.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:ni([je.points,je.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:ni([je.common,je.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:ni([je.common,je.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:ni([je.common,je.bumpmap,je.normalmap,je.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:ni([je.sprite,je.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distance:{uniforms:ni([je.common,je.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distance_vert,fragmentShader:St.distance_frag},shadow:{uniforms:ni([je.lights,je.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};tr.physical={uniforms:ni([tr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new vt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};const sc={r:0,b:0,g:0},AM=new en,zg=new vt;zg.set(-1,0,0,0,1,0,0,0,1);function CM(s,e,t,r,o,l){const u=new Et(0);let d=o===!0?0:1,f,p,_=null,M=0,v=null;function S(D){let F=D.isScene===!0?D.background:null;if(F&&F.isTexture){const P=D.backgroundBlurriness>0;F=e.get(F,P)}return F}function w(D){let F=!1;const P=S(D);P===null?y(u,d):P&&P.isColor&&(y(P,1),F=!0);const O=s.xr.getEnvironmentBlendMode();O==="additive"?t.buffers.color.setClear(0,0,0,1,l):O==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||F)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function R(D,F){const P=S(F);P&&P.isCubeTexture?(p===void 0&&(p=new Ot(new wr(1,1,1),new As({name:"BackgroundCubeMaterial",uniforms:Ta(tr.backgroundCube.uniforms),vertexShader:tr.backgroundCube.vertexShader,fragmentShader:tr.backgroundCube.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(O,I,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=P,p.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(AM.makeRotationFromEuler(F.backgroundRotation)).transpose(),P.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(zg),p.material.toneMapped=Dt.getTransfer(P.colorSpace)!==Yt,(_!==P||M!==P.version||v!==s.toneMapping)&&(p.material.needsUpdate=!0,_=P,M=P.version,v=s.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null)):P&&P.isTexture&&(f===void 0&&(f=new Ot(new Hi(2,2),new As({name:"BackgroundMaterial",uniforms:Ta(tr.background.uniforms),vertexShader:tr.background.vertexShader,fragmentShader:tr.background.fragmentShader,side:Es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=P,f.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,f.material.toneMapped=Dt.getTransfer(P.colorSpace)!==Yt,P.matrixAutoUpdate===!0&&P.updateMatrix(),f.material.uniforms.uvTransform.value.copy(P.matrix),(_!==P||M!==P.version||v!==s.toneMapping)&&(f.material.needsUpdate=!0,_=P,M=P.version,v=s.toneMapping),f.layers.enableAll(),D.unshift(f,f.geometry,f.material,0,0,null))}function y(D,F){D.getRGB(sc,Og(s)),t.buffers.color.setClear(sc.r,sc.g,sc.b,F,l)}function x(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return u},setClearColor:function(D,F=1){u.set(D),d=F,y(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(D){d=D,y(u,d)},render:w,addToRenderList:R,dispose:x}}function bM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=v(null);let l=o,u=!1;function d(V,$,te,H,he){let le=!1;const ee=M(V,H,te,$);l!==ee&&(l=ee,p(l.object)),le=S(V,H,te,he),le&&w(V,H,te,he),he!==null&&e.update(he,s.ELEMENT_ARRAY_BUFFER),(le||u)&&(u=!1,P(V,$,te,H),he!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(he).buffer))}function f(){return s.createVertexArray()}function p(V){return s.bindVertexArray(V)}function _(V){return s.deleteVertexArray(V)}function M(V,$,te,H){const he=H.wireframe===!0;let le=r[$.id];le===void 0&&(le={},r[$.id]=le);const ee=V.isInstancedMesh===!0?V.id:0;let ne=le[ee];ne===void 0&&(ne={},le[ee]=ne);let J=ne[te.id];J===void 0&&(J={},ne[te.id]=J);let Q=J[he];return Q===void 0&&(Q=v(f()),J[he]=Q),Q}function v(V){const $=[],te=[],H=[];for(let he=0;he<t;he++)$[he]=0,te[he]=0,H[he]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:te,attributeDivisors:H,object:V,attributes:{},index:null}}function S(V,$,te,H){const he=l.attributes,le=$.attributes;let ee=0;const ne=te.getAttributes();for(const J in ne)if(ne[J].location>=0){const U=he[J];let se=le[J];if(se===void 0&&(J==="instanceMatrix"&&V.instanceMatrix&&(se=V.instanceMatrix),J==="instanceColor"&&V.instanceColor&&(se=V.instanceColor)),U===void 0||U.attribute!==se||se&&U.data!==se.data)return!0;ee++}return l.attributesNum!==ee||l.index!==H}function w(V,$,te,H){const he={},le=$.attributes;let ee=0;const ne=te.getAttributes();for(const J in ne)if(ne[J].location>=0){let U=le[J];U===void 0&&(J==="instanceMatrix"&&V.instanceMatrix&&(U=V.instanceMatrix),J==="instanceColor"&&V.instanceColor&&(U=V.instanceColor));const se={};se.attribute=U,U&&U.data&&(se.data=U.data),he[J]=se,ee++}l.attributes=he,l.attributesNum=ee,l.index=H}function R(){const V=l.newAttributes;for(let $=0,te=V.length;$<te;$++)V[$]=0}function y(V){x(V,0)}function x(V,$){const te=l.newAttributes,H=l.enabledAttributes,he=l.attributeDivisors;te[V]=1,H[V]===0&&(s.enableVertexAttribArray(V),H[V]=1),he[V]!==$&&(s.vertexAttribDivisor(V,$),he[V]=$)}function D(){const V=l.newAttributes,$=l.enabledAttributes;for(let te=0,H=$.length;te<H;te++)$[te]!==V[te]&&(s.disableVertexAttribArray(te),$[te]=0)}function F(V,$,te,H,he,le,ee){ee===!0?s.vertexAttribIPointer(V,$,te,he,le):s.vertexAttribPointer(V,$,te,H,he,le)}function P(V,$,te,H){R();const he=H.attributes,le=te.getAttributes(),ee=$.defaultAttributeValues;for(const ne in le){const J=le[ne];if(J.location>=0){let Q=he[ne];if(Q===void 0&&(ne==="instanceMatrix"&&V.instanceMatrix&&(Q=V.instanceMatrix),ne==="instanceColor"&&V.instanceColor&&(Q=V.instanceColor)),Q!==void 0){const U=Q.normalized,se=Q.itemSize,Oe=e.get(Q);if(Oe===void 0)continue;const ce=Oe.buffer,we=Oe.type,Ce=Oe.bytesPerElement,He=we===s.INT||we===s.UNSIGNED_INT||Q.gpuType===Wd;if(Q.isInterleavedBufferAttribute){const Ae=Q.data,Ke=Ae.isInterleavedBuffer===!0?Ae.stride:Ae.itemSize,it=Q.offset;if(Ae.isInstancedInterleavedBuffer||Ae.isInstancedBufferAttribute){for(let lt=0;lt<J.locationSize;lt++)x(J.location+lt,Ae.meshPerAttribute);V.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let lt=0;lt<J.locationSize;lt++)y(J.location+lt);s.bindBuffer(s.ARRAY_BUFFER,ce);for(let lt=0;lt<J.locationSize;lt++)F(J.location+lt,se/J.locationSize,we,U,Ke*Ce,(it+se/J.locationSize*lt)*Ce,He)}else{if(Q.isInstancedBufferAttribute){for(let Ae=0;Ae<J.locationSize;Ae++)x(J.location+Ae,Q.meshPerAttribute);V.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Ae=0;Ae<J.locationSize;Ae++)y(J.location+Ae);s.bindBuffer(s.ARRAY_BUFFER,ce);for(let Ae=0;Ae<J.locationSize;Ae++)F(J.location+Ae,se/J.locationSize,we,U,se*Ce,se/J.locationSize*Ae*Ce,He)}}else if(ee!==void 0){const U=ee[ne];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(J.location,U);break;case 3:s.vertexAttrib3fv(J.location,U);break;case 4:s.vertexAttrib4fv(J.location,U);break;default:s.vertexAttrib1fv(J.location,U)}}}}D()}function O(){Y();for(const V in r){const $=r[V];for(const te in $){const H=$[te];for(const he in H){const le=H[he];for(const ee in le)_(le[ee].object),delete le[ee];delete H[he]}}delete r[V]}}function I(V){if(r[V.id]===void 0)return;const $=r[V.id];for(const te in $){const H=$[te];for(const he in H){const le=H[he];for(const ee in le)_(le[ee].object),delete le[ee];delete H[he]}}delete r[V.id]}function T(V){for(const $ in r){const te=r[$];for(const H in te){const he=te[H];if(he[V.id]===void 0)continue;const le=he[V.id];for(const ee in le)_(le[ee].object),delete le[ee];delete he[V.id]}}}function E(V){for(const $ in r){const te=r[$],H=V.isInstancedMesh===!0?V.id:0,he=te[H];if(he!==void 0){for(const le in he){const ee=he[le];for(const ne in ee)_(ee[ne].object),delete ee[ne];delete he[le]}delete te[H],Object.keys(te).length===0&&delete r[$]}}}function Y(){B(),u=!0,l!==o&&(l=o,p(l.object))}function B(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:B,dispose:O,releaseStatesOfGeometry:I,releaseStatesOfObject:E,releaseStatesOfProgram:T,initAttributes:R,enableAttribute:y,disableUnusedAttributes:D}}function RM(s,e,t){let r;function o(f){r=f}function l(f,p){s.drawArrays(r,f,p),t.update(p,r,1)}function u(f,p,_){_!==0&&(s.drawArraysInstanced(r,f,p,_),t.update(p,r,_))}function d(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,f,0,p,0,_);let v=0;for(let S=0;S<_;S++)v+=p[S];t.update(v,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d}function NM(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(T){return!(T!==ir&&r.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(T){const E=T===ar&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==yi&&T!==nr&&!E&&r.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function f(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const _=f(p);_!==p&&(pt("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const M=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),v=t.logarithmicDepthBuffer===!0&&M===!1;t.reversedDepthBuffer===!0&&M===!1&&pt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&M===!0&&pt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),F=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),O=s.getParameter(s.MAX_SAMPLES),I=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:M,maxTextures:S,maxVertexTextures:w,maxTextureSize:R,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:D,maxVaryings:F,maxFragmentUniforms:P,maxSamples:O,samples:I}}function PM(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Tr,d=new vt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(M,v){const S=M.length!==0||v||r!==0||o;return o=v,r=M.length,S},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(M,v){t=_(M,v,0)},this.setState=function(M,v,S){const w=M.clippingPlanes,R=M.clipIntersection,y=M.clipShadows,x=s.get(M);if(!o||w===null||w.length===0||l&&!y)l?_(null):p();else{const D=l?0:r,F=D*4;let P=x.clippingState||null;f.value=P,P=_(w,v,F,S);for(let O=0;O!==F;++O)P[O]=t[O];x.clippingState=P,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=D}};function p(){f.value!==t&&(f.value=t,f.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(M,v,S,w){const R=M!==null?M.length:0;let y=null;if(R!==0){if(y=f.value,w!==!0||y===null){const x=S+R*4,D=v.matrixWorldInverse;d.getNormalMatrix(D),(y===null||y.length<x)&&(y=new Float32Array(x));for(let F=0,P=S;F!==R;++F,P+=4)u.copy(M[F]).applyMatrix4(D,d),u.normal.toArray(y,P),y[P+3]=u.constant}f.value=y,f.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}class rf extends rr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Ng(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new wr(5,5,5),l=new As({name:"CubemapFromEquirect",uniforms:Ta(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:fi,blending:_a});l.uniforms.tEquirect.value=t;const u=new Ot(o,l),d=t.minFilter;return t.minFilter===ts&&(t.minFilter=ii),new kd(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}const C0=256,DM=3,LM=20,Hg=256,Vg=16,IM=3,UM=new A,OM=new Et;class Ac{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new kd(1,10,null),this._boxMesh=new Ot(new wr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:d=UM}=l,f=this._renderer;this._setSize(u);const p=this._allocateTarget(),_=this._getSourceTarget(!0);t>0&&(_.texture.mipmapsAutoUpdate=!1);const M=f.autoClear,v=f.autoClearColor,S=f.autoClearDepth,w=f.autoClearStencil,R=e.background;f.autoClear=!0,f.autoClearColor=!0,f.autoClearDepth=!0,f.autoClearStencil=!0,R===null&&(e.background=f.getClearColor(OM));const y=new kd(r,o,_);return y.position.copy(d),y.update(f,e),f.autoClear=M,f.autoClearColor=v,f.autoClearDepth=S,f.autoClearStencil=w,e.background=R,t>0&&(_.texture.mipmapsAutoUpdate=!0,this._blur(p,t)),this._applyPMREM(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=N0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=R0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(C0,Hx(e))}_fromTexture(e,t){e.mapping===ya||e.mapping===To?this._setSize(e.image.length===0?C0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const r=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(r),r}_allocateTarget(){const e=this._cubeSize,t=b0(e,!1,!1),r=Math.log2(e)-DM;for(let o=0;o<=r;o++)t.texture.mipmaps.push({width:e>>o,height:e>>o});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==t||e&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=b0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,r){const o=this._boxMesh,l=this._cubeCamera;o.material=r,l.renderTarget=e,l.activeMipmapLevel=t;const u=e.width>>t;e.viewport.set(0,0,u,u),l.update(this._renderer,o),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ya||e.mapping===To?(this._cubemapMaterial===null&&(this._cubemapMaterial=N0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=R0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=FM(),this._integrationMaterial=kM());const t=this._cubeSize,r=e.texture.mipmaps.length-1,o=this._ggxMaterial.uniforms;o.envMap.value=this._sourceTarget.texture;const l=this._integrationMaterial.uniforms;l.envMap.value=this._sourceTarget.texture,l.sourceLod.value=Math.log2(t/Vg);for(let u=0;u<=r;u++){const d=Ac.lodToRoughness(u,r);if(u>r-IM)l.roughness.value=d,this._renderCube(e,u,this._integrationMaterial);else{const f=d>0?Math.log2(t)+.5*Math.log2(6/(Hg*Math.pow(d,4)))+.5:0;o.roughness.value=d,o.lodBias.value=f,this._renderCube(e,u,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=BM());const r=this._blurMaterial,o=r.uniforms,l=this._sourceTarget;o.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,o.envMap.value=l.texture,this._renderCube(e,0,r),o.envMap.value=e.texture,this._renderCube(l,0,r)}}function b0(s,e,t){return new rf(s,{minFilter:ts,generateMipmaps:e,type:ar,colorSpace:vc,depthBuffer:t})}function bo(s,e,t){return new As({name:s,uniforms:e,vertexShader:St.cube_vert,fragmentShader:t,side:fi,blending:_a,depthTest:!1,depthWrite:!1})}function FM(){return bo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Hg}u

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
	`)}function kM(){return bo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Vg}},`

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
	`)}function BM(){return bo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${LM}
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
	`)}function R0(){return bo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function N0(){return bo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function zM(s){let e=new WeakMap,t=new WeakMap,r=null;function o(v,S=!1){return v==null?null:S?u(v):l(v)}function l(v){if(v&&v.isTexture){const S=v.mapping;if(S===fh||S===ph)if(e.has(v)){const w=e.get(v).texture;return d(w,v.mapping)}else{const w=v.image;if(w&&w.height>0){const R=new rf(w.height);return R.fromEquirectangularTexture(s,v),e.set(v,R),v.addEventListener("dispose",p),d(R.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture&&v.isPMREMTexture!==!0){const S=v.mapping,w=S===fh||S===ph,R=S===ya||S===To;if(w||R){let y=t.get(v);const x=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==x)return r===null&&(r=new Ac(s)),y=w?r.fromEquirectangular(v,y):r.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,t.set(v,y),y.texture;if(y!==void 0)return y.texture;{const D=v.image;return w&&D&&D.height>0||R&&D&&f(D)?(r===null&&(r=new Ac(s)),y=w?r.fromEquirectangular(v):r.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,t.set(v,y),v.addEventListener("dispose",_),y.texture):null}}}return v}function d(v,S){return S===fh?v.mapping=ya:S===ph&&(v.mapping=To),v}function f(v){let S=0;const w=6;for(let R=0;R<w;R++)v[R]!==void 0&&S++;return S===w}function p(v){const S=v.target;S.removeEventListener("dispose",p);const w=e.get(S);w!==void 0&&(e.delete(S),w.dispose())}function _(v){const S=v.target;S.removeEventListener("dispose",_);const w=t.get(S);w!==void 0&&(t.delete(S),w.dispose())}function M(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:M}}function HM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&fc("WebGLRenderer: "+r+" extension not supported."),o}}}function VM(s,e,t,r){const o={},l=new WeakMap,u=new FinalizationRegistry(w=>delete o[w]);function d(w){f(w.target)}function f(w){w.index!==null&&e.remove(w.index);for(const y in w.attributes)e.remove(w.attributes[y]);w.removeEventListener("dispose",d),delete o[w.id],u.unregister(w);const R=l.get(w);R&&(e.remove(R),l.delete(w)),r.releaseStatesOfGeometry(w),w.isInstancedBufferGeometry===!0&&delete w._maxInstanceCount,t.memory.geometries--}function p(w,R){return o[R.id]!==void 0||(R.addEventListener("dispose",d),o[R.id]=new WeakRef(R),u.register(R,R.id,R),t.memory.geometries++),R}function _(w){const R=w.attributes;for(const y in R)e.update(R[y],s.ARRAY_BUFFER)}function M(w){const R=w.index,y=w.attributes.position;let x=0;if(y===void 0)return;const D=R!==null?R.array.length:y.array.length/3-1,F=y.count>=65535?bg:Cg,P=new F(Math.ceil(D/3)*6,1),O=P.array;if(R!==null){const T=R.array;x=R.version;for(let E=0,Y=0;E<D;E+=3){const B=T[E+0],V=T[E+1],$=T[E+2];O[Y++]=B,O[Y++]=V,O[Y++]=V,O[Y++]=$,O[Y++]=$,O[Y++]=B}}else{x=y.version;for(let T=0,E=0;T<D;T+=3){const Y=T+0,B=T+1,V=T+2;O[E++]=Y,O[E++]=B,O[E++]=B,O[E++]=V,O[E++]=V,O[E++]=Y}}P.version=x;const I=l.get(w);I&&e.remove(I),l.set(w,P)}function v(w){const R=l.get(w);if(R){const y=w.index;y!==null&&R.version<y.version&&M(w)}else M(w);return l.get(w)}function S(){for(const w in o){const R=o[w].deref();R!==void 0&&f(R)}}return{get:p,update:_,getWireframeAttribute:v,dispose:S}}function GM(s,e,t){let r;function o(M){r=M}let l,u;function d(M){l=M.type,u=M.bytesPerElement}function f(M,v){s.drawElements(r,v,l,M*u),t.update(v,r,1)}function p(M,v,S){S!==0&&(s.drawElementsInstanced(r,v,l,M*u,S),t.update(v,r,S))}function _(M,v,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,l,M,0,S);let R=0;for(let y=0;y<S;y++)R+=v[y];t.update(R,r,1)}this.setMode=o,this.setIndex=d,this.render=f,this.renderInstances=p,this.renderMultiDraw=_}function WM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=d*(l/3);break;case s.LINES:t.lines+=d*(l/2);break;case s.LINE_STRIP:t.lines+=d*(l-1);break;case s.LINE_LOOP:t.lines+=d*l;break;case s.POINTS:t.points+=d*l;break;default:Ft("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function jM(s,e,t){const r=new WeakMap,o=new dn;function l(u,d,f){const p=u.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,M=_!==void 0?_.length:0;let v=r.get(d);if(v===void 0||v.count!==M){let B=function(){E.dispose(),r.delete(d),d.removeEventListener("dispose",B)};var S=B;v!==void 0&&v.texture.dispose();const w=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],F=d.morphAttributes.color||[];let P=0;w===!0&&(P=1),R===!0&&(P=2),y===!0&&(P=3);let O=d.attributes.position.count*P,I=1;O>e.maxTextureSize&&(I=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const T=new Float32Array(O*I*4*M),E=new wg(T,O,I,M);E.type=nr,E.needsUpdate=!0;const Y=P*4;for(let V=0;V<M;V++){const $=x[V],te=D[V],H=F[V],he=O*I*4*V;for(let le=0;le<$.count;le++){const ee=le*Y;w===!0&&(o.fromBufferAttribute($,le),T[he+ee+0]=o.x,T[he+ee+1]=o.y,T[he+ee+2]=o.z,T[he+ee+3]=0),R===!0&&(o.fromBufferAttribute(te,le),T[he+ee+4]=o.x,T[he+ee+5]=o.y,T[he+ee+6]=o.z,T[he+ee+7]=0),y===!0&&(o.fromBufferAttribute(H,le),T[he+ee+8]=o.x,T[he+ee+9]=o.y,T[he+ee+10]=o.z,T[he+ee+11]=H.itemSize===4?o.w:1)}}v={count:M,texture:E,size:new Xe(O,I)},r.set(d,v),d.addEventListener("dispose",B)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let w=0;for(let y=0;y<p.length;y++)w+=p[y];const R=d.morphTargetsRelative?1:1-w;f.getUniforms().setValue(s,"morphTargetBaseInfluence",R),f.getUniforms().setValue(s,"morphTargetInfluences",p)}f.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:l}}function XM(s,e,t,r,o){let l=new WeakMap;function u(p){const _=o.render.frame,M=p.geometry,v=e.get(p,M);if(l.get(v)!==_&&(e.update(v),l.set(v,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),l.get(p)!==_&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,_))),p.isSkinnedMesh){const S=p.skeleton;l.get(S)!==_&&(S.update(),l.set(S,_))}return v}function d(){l=new WeakMap}function f(p){const _=p.target;_.removeEventListener("dispose",f),r.releaseStatesOfObject(_),t.remove(_.instanceMatrix),_.instanceColor!==null&&t.remove(_.instanceColor)}return{update:u,dispose:d}}const KM={[rg]:"LINEAR_TONE_MAPPING",[sg]:"REINHARD_TONE_MAPPING",[ag]:"CINEON_TONE_MAPPING",[Gd]:"ACES_FILMIC_TONE_MAPPING",[lg]:"AGX_TONE_MAPPING",[cg]:"NEUTRAL_TONE_MAPPING",[og]:"CUSTOM_TONE_MAPPING"};function YM(s,e,t,r,o,l){const u=new rr(e,t,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,f=null,p=null;const _=new Qn;_.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),_.setAttribute("uv",new qt([0,2,0,0,2,0],2));const M=new L1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new Ot(_,M),S=new kg(-1,1,1,-1,0,1);let w=null,R=null,y=!1,x,D=null,F=[],P=!1;this.setSize=function(O,I){u.setSize(O,I),d!==null&&d.setSize(O,I),f!==null&&f.setSize(O,I);for(let T=0;T<F.length;T++){const E=F[T];E.setSize&&E.setSize(O,I)}},this.setEffects=function(O){F=O,P=F.length>0&&F[0].isRenderPass===!0;const I=u.width,T=u.height;F.length>0&&d===null&&(d=new rr(I,T,{type:ar,depthBuffer:!1,stencilBuffer:!1}),f=new rr(I,T,{type:ar,depthBuffer:!1,stencilBuffer:!1}));const E=o===!0&&F.some(Y=>Y.needsDepthTexture===!0);E!==(u.depthTexture!==null)&&(E===!0&&p===null&&(p=new Ma(I,T),l===!0&&(p.format=ns,p.type=Sa)),u.dispose(),u.depthTexture=E?p:null,u.resolveDepthBuffer=E,u.storeMultisampledDepthBuffer=E);for(let Y=0;Y<F.length;Y++){const B=F[Y];B.setSize&&B.setSize(I,T),E&&B.needsDepthTexture===!0&&B.setDepthTexture&&B.setDepthTexture(p)}},this.begin=function(O,I){if(y||O.toneMapping===Ar&&F.length===0)return!1;if(D=I,I!==null){const T=I.width,E=I.height;(u.width!==T||u.height!==E)&&this.setSize(T,E)}return P===!1&&O.setRenderTarget(u),x=O.toneMapping,O.toneMapping=Ar,!0},this.hasRenderPass=function(){return P},this.end=function(O,I){O.toneMapping=x,y=!0;let T=u,E=d;for(let Y=0;Y<F.length;Y++){const B=F[Y];B.enabled!==!1&&(B.render(O,E,T,I),B.needsSwap!==!1&&(T=E,E=E===d?f:d))}if(w!==O.outputColorSpace||R!==O.toneMapping){w=O.outputColorSpace,R=O.toneMapping,M.defines={},Dt.getTransfer(w)===Yt&&(M.defines.SRGB_TRANSFER="");const Y=KM[R];Y&&(M.defines[Y]=""),M.needsUpdate=!0}M.uniforms.tDiffuse.value=T.texture,O.setRenderTarget(D),O.render(v,S),D=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){u.dispose(),d!==null&&d.dispose(),f!==null&&f.dispose(),_.dispose(),M.dispose()}}const Gg=new Zn,Wg=new Ma(1,1),jg=new Pg(1),Xg=new wg,Kg=new Yx,Yg=new Ng,P0=[],D0=[],L0=new Float32Array(16),I0=new Float32Array(9),U0=new Float32Array(4);function Ea(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=P0[o];if(l===void 0&&(l=new Float32Array(o),P0[o]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,s[u].toArray(l,d)}return l}function Rn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function Nn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Pc(s,e){let t=D0[e];t===void 0&&(t=new Int32Array(e),D0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function qM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function $M(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;s.uniform2fv(this.addr,e),Nn(t,e)}}function ZM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rn(t,e))return;s.uniform3fv(this.addr,e),Nn(t,e)}}function QM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;s.uniform4fv(this.addr,e),Nn(t,e)}}function JM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Rn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Nn(t,e)}else{if(Rn(t,r))return;U0.set(r),s.uniformMatrix2fv(this.addr,!1,U0),Nn(t,r)}}function eT(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Rn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Nn(t,e)}else{if(Rn(t,r))return;I0.set(r),s.uniformMatrix3fv(this.addr,!1,I0),Nn(t,r)}}function tT(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Rn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Nn(t,e)}else{if(Rn(t,r))return;L0.set(r),s.uniformMatrix4fv(this.addr,!1,L0),Nn(t,r)}}function nT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function iT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;s.uniform2iv(this.addr,e),Nn(t,e)}}function rT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rn(t,e))return;s.uniform3iv(this.addr,e),Nn(t,e)}}function sT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;s.uniform4iv(this.addr,e),Nn(t,e)}}function aT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function oT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;s.uniform2uiv(this.addr,e),Nn(t,e)}}function lT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rn(t,e))return;s.uniform3uiv(this.addr,e),Nn(t,e)}}function cT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;s.uniform4uiv(this.addr,e),Nn(t,e)}}function Dc(s){return s.version===0&&(s.compareFunction=yg,s.needsUpdate=!0),s}function uT(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?l=Dc(Wg):l=Gg,t.setTexture2D(e||l,o)}function hT(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Kg,o)}function dT(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_CUBE_SHADOW?l=Dc(jg):l=Yg,t.setTextureCube(e||l,o)}function fT(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Xg,o)}function pT(s){switch(s){case 5126:return qM;case 35664:return $M;case 35665:return ZM;case 35666:return QM;case 35674:return JM;case 35675:return eT;case 35676:return tT;case 5124:case 35670:return nT;case 35667:case 35671:return iT;case 35668:case 35672:return rT;case 35669:case 35673:return sT;case 5125:return aT;case 36294:return oT;case 36295:return lT;case 36296:return cT;case 35678:case 36198:case 36298:case 36306:case 35682:return uT;case 35679:case 36299:case 36307:return hT;case 35680:case 36300:case 36308:case 36293:return dT;case 36289:case 36303:case 36311:case 36292:return fT}}function mT(s,e){s.uniform1fv(this.addr,e)}function gT(s,e){const t=Ea(e,this.size,2);s.uniform2fv(this.addr,t)}function vT(s,e){const t=Ea(e,this.size,3);s.uniform3fv(this.addr,t)}function _T(s,e){const t=Ea(e,this.size,4);s.uniform4fv(this.addr,t)}function xT(s,e){const t=Ea(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function yT(s,e){const t=Ea(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function ST(s,e){const t=Ea(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function MT(s,e){s.uniform1iv(this.addr,e)}function TT(s,e){s.uniform2iv(this.addr,e)}function ET(s,e){s.uniform3iv(this.addr,e)}function wT(s,e){s.uniform4iv(this.addr,e)}function AT(s,e){s.uniform1uiv(this.addr,e)}function CT(s,e){s.uniform2uiv(this.addr,e)}function bT(s,e){s.uniform3uiv(this.addr,e)}function RT(s,e){s.uniform4uiv(this.addr,e)}function NT(s,e,t){const r=this.cache,o=e.length,l=Pc(t,o);Rn(r,l)||(s.uniform1iv(this.addr,l),Nn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=Dc(Wg):u=Gg;for(let d=0;d!==o;++d)t.setTexture2D(e[d]||u,l[d])}function PT(s,e,t){const r=this.cache,o=e.length,l=Pc(t,o);Rn(r,l)||(s.uniform1iv(this.addr,l),Nn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Kg,l[u])}function DT(s,e,t){const r=this.cache,o=e.length,l=Pc(t,o);Rn(r,l)||(s.uniform1iv(this.addr,l),Nn(r,l));let u;this.type===s.SAMPLER_CUBE_SHADOW?u=Dc(jg):u=Yg;for(let d=0;d!==o;++d)t.setTextureCube(e[d]||u,l[d])}function LT(s,e,t){const r=this.cache,o=e.length,l=Pc(t,o);Rn(r,l)||(s.uniform1iv(this.addr,l),Nn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Xg,l[u])}function IT(s){switch(s){case 5126:return mT;case 35664:return gT;case 35665:return vT;case 35666:return _T;case 35674:return xT;case 35675:return yT;case 35676:return ST;case 5124:case 35670:return MT;case 35667:case 35671:return TT;case 35668:case 35672:return ET;case 35669:case 35673:return wT;case 5125:return AT;case 36294:return CT;case 36295:return bT;case 36296:return RT;case 35678:case 36198:case 36298:case 36306:case 35682:return NT;case 35679:case 36299:case 36307:return PT;case 35680:case 36300:case 36308:case 36293:return DT;case 36289:case 36303:case 36311:case 36292:return LT}}class UT{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=pT(t.type)}}class OT{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=IT(t.type)}}class FT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const d=o[l];d.setValue(e,t[d.id],r)}}}const jh=/(\w+)(\])?(\[|\.)?/g;function O0(s,e){s.seq.push(e),s.map[e.id]=e}function kT(s,e,t){const r=s.name,o=r.length;for(jh.lastIndex=0;;){const l=jh.exec(r),u=jh.lastIndex;let d=l[1];const f=l[2]==="]",p=l[3];if(f&&(d=d|0),p===void 0||p==="["&&u+2===o){O0(t,p===void 0?new UT(d,s,e):new OT(d,s,e));break}else{let M=t.map[d];M===void 0&&(M=new FT(d),O0(t,M)),t=M}}}class pc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(t,u),f=e.getUniformLocation(t,d.name);kT(d,f,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const d=t[l],f=r[d.id];f.needsUpdate!==!1&&d.setValue(e,f.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function F0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const BT=37297;let zT=0;function HT(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return r.join(`
`)}const k0=new vt;function VT(s){Dt._getMatrix(k0,Dt.workingColorSpace,s);const e=`mat3( ${k0.elements.map(t=>t.toFixed(4))} )`;switch(Dt.getTransfer(s)){case _c:return[e,"LinearTransferOETF"];case Yt:return[e,"sRGBTransferOETF"];default:return pt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function B0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+HT(s.getShaderSource(e),d)}else return l}function GT(s,e){const t=VT(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const WT={[rg]:"Linear",[sg]:"Reinhard",[ag]:"Cineon",[Gd]:"ACESFilmic",[lg]:"AgX",[cg]:"Neutral",[og]:"Custom"};function jT(s,e){const t=WT[e];return t===void 0?(pt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ac=new A;function XT(){Dt.getLuminanceCoefficients(ac);const s=ac.x.toFixed(4),e=ac.y.toFixed(4),t=ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vo).join(`
`)}function YT(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function qT(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return t}function vo(s){return s!==""}function z0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function H0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $T=/^[ \t]*#include +<([\w\d./]+)>/gm;function zd(s){return s.replace($T,ZT)}function ZT(s,e){const t=St[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return zd(t)}const QT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function V0(s){return s.replace(QT,JT)}function JT(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function G0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const eE={[lc]:"SHADOWMAP_TYPE_PCF",[go]:"SHADOWMAP_TYPE_VSM"};function tE(s){return eE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const nE={[To]:"ENVMAP_MODE_REFRACTION"};function iE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":nE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const rE={[ig]:"ENVMAP_BLENDING_MULTIPLY",[wx]:"ENVMAP_BLENDING_MIX",[Ax]:"ENVMAP_BLENDING_ADD"};function sE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":rE[s.combine]||"ENVMAP_BLENDING_NONE"}function aE(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const f=tE(t),p=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",_=iE(t),M=sE(t),v=KT(t),S=YT(l),w=o.createProgram();let R,y,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(R=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(vo).join(`
`),R.length>0&&(R+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(vo).join(`
`),y.length>0&&(y+=`
`)):(R=[G0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vo).join(`
`),y=[G0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",t.envMap?"#define "+M:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ar?"#define TONE_MAPPING":"",t.toneMapping!==Ar?St.tonemapping_pars_fragment:"",t.toneMapping!==Ar?jT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,GT("linearToOutputTexel",t.outputColorSpace),XT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vo).join(`
`)),u=zd(u),u=z0(u,t),u=H0(u,t),d=zd(d),d=z0(d,t),d=H0(d,t),u=V0(u),d=V0(d),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,R=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+R,y=["#define varying in",t.glslVersion===Vm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const D=x+R+u,F=x+y+d,P=F0(o,o.VERTEX_SHADER,D),O=F0(o,o.FRAGMENT_SHADER,F);o.attachShader(w,P),o.attachShader(w,O),t.index0AttributeName!==void 0?o.bindAttribLocation(w,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function I(B){if(s.debug.checkShaderErrors){const V=o.getProgramInfoLog(w)||"",$=o.getShaderInfoLog(P)||"",te=o.getShaderInfoLog(O)||"",H=V.trim(),he=$.trim(),le=te.trim();let ee=!0,ne=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(ee=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,w,P,O);else{const J=B0(o,P,"vertex"),Q=B0(o,O,"fragment");Ft("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+H+`
`+J+`
`+Q)}else H!==""?pt("WebGLProgram: Program Info Log:",H):(he===""||le==="")&&(ne=!1);ne&&(B.diagnostics={runnable:ee,programLog:H,vertexShader:{log:he,prefix:R},fragmentShader:{log:le,prefix:y}})}o.deleteShader(P),o.deleteShader(O),T=new pc(o,w),E=qT(o,w)}let T;this.getUniforms=function(){return T===void 0&&I(this),T};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let Y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=o.getProgramParameter(w,BT)),Y},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zT++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=P,this.fragmentShader=O,this}let oE=0;class lE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new cE(e),t.set(e,r)),r}}class cE{constructor(e){this.id=oE++,this.code=e,this.usedTimes=0}}function uE(s){return s===ws||s===mc||s===gc}function hE(s,e,t,r,o,l){const u=new Zd,d=new lE,f=new Set,p=[],_=new Map,M=r.logarithmicDepthBuffer,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(T){return f.add(T),T===0?"uv":`uv${T}`}function w(T,E,Y,B,V,$){const te=B.fog,H=V.geometry,he=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?B.environment:null,le=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,ee=e.get(T.envMap||he,le),ne=v[T.type];let J=r.precision;T.precision!==null&&(J=r.getMaxPrecision(T.precision),J!==T.precision&&pt("WebGLProgram.getParameters:",T.precision,"not supported, using",J,"instead."));const Q=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,U=Q!==void 0?Q.length:0;let se=0;H.morphAttributes.position!==void 0&&(se=1),H.morphAttributes.normal!==void 0&&(se=2),H.morphAttributes.color!==void 0&&(se=3);let Oe,ce,we,Ce;if(ne){const Pe=tr[ne];Oe=Pe.vertexShader,ce=Pe.fragmentShader}else{Oe=T.vertexShader,ce=T.fragmentShader;const Pe=d.getVertexShaderStage(T),ct=d.getFragmentShaderStage(T);d.update(T,Pe,ct),we=Pe.id,Ce=ct.id}const He=s.getRenderTarget(),Ae=s.state.buffers.depth.getReversed(),Ke=V.isInstancedMesh===!0,it=V.isBatchedMesh===!0,lt=!!T.map,ot=!!T.matcap,bt=!!ee,gt=bt&&ee.isPMREMTexture===!0,nn=!!T.aoMap,jt=!!T.lightMap,cn=!!T.bumpMap&&T.wireframe===!1,Lt=!!T.normalMap,Sn=!!T.displacementMap,kt=!!T.emissiveMap,Zt=!!T.metalnessMap,Mt=!!T.roughnessMap,Xt=T.anisotropy>0,j=T.clearcoat>0,_t=T.diffuseRoughness>0,re=T.dispersion>0,be=T.retroreflectivity>0,ge=T.iridescence>0,Ye=T.sheen>0,Te=T.transmission>0,We=Xt&&!!T.anisotropyMap,L=j&&!!T.clearcoatMap,b=j&&!!T.clearcoatNormalMap,K=j&&!!T.clearcoatRoughnessMap,_e=_t&&!!T.diffuseRoughnessMap,Ee=ge&&!!T.iridescenceMap,De=ge&&!!T.iridescenceThicknessMap,Fe=Ye&&!!T.sheenColorMap,ve=Ye&&!!T.sheenRoughnessMap,xe=!!T.specularMap,Ie=!!T.specularColorMap,z=!!T.specularIntensityMap,ye=Te&&!!T.transmissionMap,G=Te&&!!T.thicknessMap,q=!!T.gradientMap,Se=!!T.alphaMap,ue=T.alphaTest>0,Me=!!T.alphaHash,Ve=!!T.extensions;let me=Ar;T.toneMapped&&(He===null||He.isXRRenderTarget===!0)&&(me=s.toneMapping);const Ue=gt?ee.isCompressedCubeTexture?ee.image[0].mipmaps:ee.mipmaps:null,Qe={shaderID:ne,shaderType:T.type,shaderName:T.name,vertexShader:Oe,fragmentShader:ce,defines:T.defines,customVertexShaderID:we,customFragmentShaderID:Ce,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:J,batching:it,batchingColor:it&&V._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&V.instanceColor!==null,instancingMorph:Ke&&V.morphTexture!==null,outputColorSpace:He===null?s.outputColorSpace:He.isXRRenderTarget===!0?He.texture.colorSpace:Dt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:lt,matcap:ot,envMap:bt,envMapMode:bt&&ee.mapping,envMapPMREM:gt,envMapMaxLod:gt?Ue.length-1:null,envMapSize:gt?Ue[0].width:null,aoMap:nn,lightMap:jt,bumpMap:cn,normalMap:Lt,displacementMap:Sn,emissiveMap:kt,normalMapObjectSpace:Lt&&T.normalMapType===Rx,normalMapTangentSpace:Lt&&T.normalMapType===Id,packedNormalMap:Lt&&T.normalMapType===Id&&uE(T.normalMap.format),metalnessMap:Zt,roughnessMap:Mt,anisotropy:Xt,anisotropyMap:We,clearcoat:j,clearcoatMap:L,clearcoatNormalMap:b,clearcoatRoughnessMap:K,diffuseRoughness:_t,diffuseRoughnessMap:_e,dispersion:re,retroreflection:be,iridescence:ge,iridescenceMap:Ee,iridescenceThicknessMap:De,sheen:Ye,sheenColorMap:Fe,sheenRoughnessMap:ve,specularMap:xe,specularColorMap:Ie,specularIntensityMap:z,transmission:Te,transmissionMap:ye,thicknessMap:G,gradientMap:q,opaque:T.transparent===!1&&T.blending===_o&&T.alphaToCoverage===!1,alphaMap:Se,alphaTest:ue,alphaHash:Me,combine:T.combine,mapUv:lt&&S(T.map.channel),aoMapUv:nn&&S(T.aoMap.channel),lightMapUv:jt&&S(T.lightMap.channel),bumpMapUv:cn&&S(T.bumpMap.channel),normalMapUv:Lt&&S(T.normalMap.channel),displacementMapUv:Sn&&S(T.displacementMap.channel),emissiveMapUv:kt&&S(T.emissiveMap.channel),metalnessMapUv:Zt&&S(T.metalnessMap.channel),roughnessMapUv:Mt&&S(T.roughnessMap.channel),anisotropyMapUv:We&&S(T.anisotropyMap.channel),clearcoatMapUv:L&&S(T.clearcoatMap.channel),clearcoatNormalMapUv:b&&S(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&S(T.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:_e&&S(T.diffuseRoughnessMap.channel),iridescenceMapUv:Ee&&S(T.iridescenceMap.channel),iridescenceThicknessMapUv:De&&S(T.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&S(T.sheenColorMap.channel),sheenRoughnessMapUv:ve&&S(T.sheenRoughnessMap.channel),specularMapUv:xe&&S(T.specularMap.channel),specularColorMapUv:Ie&&S(T.specularColorMap.channel),specularIntensityMapUv:z&&S(T.specularIntensityMap.channel),transmissionMapUv:ye&&S(T.transmissionMap.channel),thicknessMapUv:G&&S(T.thicknessMap.channel),alphaMapUv:Se&&S(T.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Lt||Xt),vertexNormals:!!H.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!H.attributes.uv&&(lt||Se),fog:!!te,useFog:T.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||H.attributes.normal===void 0&&Lt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:M,reversedDepthBuffer:Ae,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:se,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:$.filter(Pe=>Pe.texture!==null).length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&Y.length>0,shadowMapType:s.shadowMap.type,toneMapping:me,decodeVideoTexture:lt&&T.map.isVideoTexture===!0&&Dt.getTransfer(T.map.colorSpace)===Yt,decodeVideoTextureEmissive:kt&&T.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(T.emissiveMap.colorSpace)===Yt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Gi,flipSided:T.side===fi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ve&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&T.extensions.multiDraw===!0||it)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Qe.vertexUv1s=f.has(1),Qe.vertexUv2s=f.has(2),Qe.vertexUv3s=f.has(3),f.clear(),Qe}function R(T){const E=[];if(T.shaderID?E.push(T.shaderID):(E.push(T.customVertexShaderID),E.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Y in T.defines)E.push(Y),E.push(T.defines[Y]);return T.isRawShaderMaterial===!1&&(y(E,T),x(E,T),E.push(s.outputColorSpace)),E.push(T.customProgramCacheKey),E.join()}function y(T,E){T.push(E.precision),T.push(E.outputColorSpace),T.push(E.envMapMode),T.push(E.envMapPMREM),T.push(E.envMapMaxLod),T.push(E.envMapSize),T.push(E.mapUv),T.push(E.alphaMapUv),T.push(E.lightMapUv),T.push(E.aoMapUv),T.push(E.bumpMapUv),T.push(E.normalMapUv),T.push(E.displacementMapUv),T.push(E.emissiveMapUv),T.push(E.metalnessMapUv),T.push(E.roughnessMapUv),T.push(E.anisotropyMapUv),T.push(E.clearcoatMapUv),T.push(E.clearcoatNormalMapUv),T.push(E.clearcoatRoughnessMapUv),T.push(E.diffuseRoughnessMapUv),T.push(E.iridescenceMapUv),T.push(E.iridescenceThicknessMapUv),T.push(E.sheenColorMapUv),T.push(E.sheenRoughnessMapUv),T.push(E.specularMapUv),T.push(E.specularColorMapUv),T.push(E.specularIntensityMapUv),T.push(E.transmissionMapUv),T.push(E.thicknessMapUv),T.push(E.combine),T.push(E.fogExp2),T.push(E.sizeAttenuation),T.push(E.morphTargetsCount),T.push(E.numSunLights),T.push(E.numDirLights),T.push(E.numPointLights),T.push(E.numSpotLights),T.push(E.numSpotLightMaps),T.push(E.numHemiLights),T.push(E.numRectAreaLights),T.push(E.numSunLightShadows),T.push(E.numDirLightShadows),T.push(E.numPointLightShadows),T.push(E.numSpotLightShadows),T.push(E.numSpotLightShadowsWithMaps),T.push(E.numLightProbes),T.push(E.numLightProbeGrids),T.push(E.shadowMapType),T.push(E.toneMapping),T.push(E.numClippingPlanes),T.push(E.numClipIntersection),T.push(E.depthPacking)}function x(T,E){u.disableAll(),E.instancing&&u.enable(0),E.instancingColor&&u.enable(1),E.instancingMorph&&u.enable(2),E.matcap&&u.enable(3),E.envMap&&u.enable(4),E.normalMapObjectSpace&&u.enable(5),E.normalMapTangentSpace&&u.enable(6),E.clearcoat&&u.enable(7),E.iridescence&&u.enable(8),E.alphaTest&&u.enable(9),E.vertexColors&&u.enable(10),E.vertexAlphas&&u.enable(11),E.vertexUv1s&&u.enable(12),E.vertexUv2s&&u.enable(13),E.vertexUv3s&&u.enable(14),E.vertexTangents&&u.enable(15),E.anisotropy&&u.enable(16),E.alphaHash&&u.enable(17),E.batching&&u.enable(18),E.dispersion&&u.enable(19),E.retroreflection&&u.enable(24),E.diffuseRoughness&&u.enable(25),E.batchingColor&&u.enable(20),E.gradientMap&&u.enable(21),E.packedNormalMap&&u.enable(22),E.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),E.fog&&u.enable(0),E.useFog&&u.enable(1),E.flatShading&&u.enable(2),E.logarithmicDepthBuffer&&u.enable(3),E.reversedDepthBuffer&&u.enable(4),E.skinning&&u.enable(5),E.morphTargets&&u.enable(6),E.morphNormals&&u.enable(7),E.morphColors&&u.enable(8),E.premultipliedAlpha&&u.enable(9),E.shadowMapEnabled&&u.enable(10),E.doubleSided&&u.enable(11),E.flipSided&&u.enable(12),E.useDepthPacking&&u.enable(13),E.dithering&&u.enable(14),E.transmission&&u.enable(15),E.sheen&&u.enable(16),E.opaque&&u.enable(17),E.pointsUvs&&u.enable(18),E.decodeVideoTexture&&u.enable(19),E.decodeVideoTextureEmissive&&u.enable(20),E.alphaToCoverage&&u.enable(21),E.numLightProbeGrids>0&&u.enable(22),E.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function D(T){const E=v[T.type];let Y;if(E){const B=tr[E];Y=N1.clone(B.uniforms)}else Y=T.uniforms;return Y}function F(T,E){let Y=_.get(E);return Y!==void 0?++Y.usedTimes:(Y=new aE(s,E,T,o),p.push(Y),_.set(E,Y)),Y}function P(T){if(--T.usedTimes===0){const E=p.indexOf(T);p[E]=p[p.length-1],p.pop(),_.delete(T.cacheKey),T.destroy()}}function O(T){d.remove(T)}function I(){d.dispose()}return{getParameters:w,getProgramCacheKey:R,getUniforms:D,acquireProgram:F,releaseProgram:P,releaseShaderCache:O,programs:p,dispose:I}}function dE(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function o(u,d,f){s.get(u)[d]=f}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function fE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function W0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function j0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(v){let S=0;return v.isInstancedMesh&&(S+=2),v.isSkinnedMesh&&(S+=1),S}function d(v,S,w,R,y,x){let D=s[e];return D===void 0?(D={id:v.id,object:v,geometry:S,material:w,materialVariant:u(v),groupOrder:R,renderOrder:v.renderOrder,z:y,group:x},s[e]=D):(D.id=v.id,D.object=v,D.geometry=S,D.material=w,D.materialVariant=u(v),D.groupOrder=R,D.renderOrder=v.renderOrder,D.z=y,D.group=x),e++,D}function f(v,S,w,R,y,x,D){D.reversedDepth===!0&&(y=-y);const F=d(v,S,w,R,y,x);w.transmission>0?r.push(F):w.transparent===!0?o.push(F):t.push(F)}function p(v,S,w,R,y,x){const D=d(v,S,w,R,y,x);w.transmission>0?r.unshift(D):w.transparent===!0?o.unshift(D):t.unshift(D)}function _(v,S){t.length>1&&t.sort(v||fE),r.length>1&&r.sort(S||W0),o.length>1&&o.sort(S||W0)}function M(){for(let v=e,S=s.length;v<S;v++){const w=s[v];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:f,unshift:p,finish:M,sort:_}}function pE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new j0,s.set(r,[u])):o>=l.length?(u=new j0,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function mE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new A,color:new Et};break;case"SpotLight":t={position:new A,direction:new A,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":t={color:new Et,position:new A,halfWidth:new A,halfHeight:new A};break}return s[e.id]=t,t}}}function gE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let vE=0;function _E(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function xE(s){const e=new mE,t=gE(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new A);const o=new A,l=new en,u=new en;function d(p){let _=0,M=0,v=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let S=0,w=0,R=0,y=0,x=0,D=0,F=0,P=0,O=0,I=0,T=0,E=0,Y=0,B=0;p.sort(_E);for(let $=0,te=p.length;$<te;$++){const H=p[$],he=H.color,le=H.intensity,ee=H.distance;let ne=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===ws?ne=H.shadow.map.texture:ne=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)_+=he.r*le,M+=he.g*le,v+=he.b*le;else if(H.isLightProbe){for(let J=0;J<9;J++)r.probe[J].addScaledVector(H.sh.coefficients[J],le);B++}else if(H.isSunLight){const J=e.get(H);if(J.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Q=H.shadow,U=t.get(H);U.shadowIntensity=Q.intensity,U.shadowBias=Q.bias,U.shadowNormalBias=Q.normalBias,U.shadowRadius=Q.radius,U.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),r.sunShadow[w]=U,r.sunShadowMap[w]=ne;const se=Q.getViewportCount();for(let Oe=0;Oe<se;Oe++)r.sunShadowMatrix[R+Oe]=Q.getMatrix(Oe),r.sunShadowCascade[R+Oe]=Q._cascadeData[Oe];R+=se,w++}r.sun[S]=J,S++}else if(H.isDirectionalLight){const J=e.get(H);if(J.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Q=H.shadow,U=t.get(H);U.shadowIntensity=Q.intensity,U.shadowBias=Q.bias,U.shadowNormalBias=Q.normalBias,U.shadowRadius=Q.radius,U.shadowMapSize=Q.mapSize,r.directionalShadow[y]=U,r.directionalShadowMap[y]=ne,r.directionalShadowMatrix[y]=H.shadow.matrix,O++}r.directional[y]=J,y++}else if(H.isSpotLight){const J=e.get(H);J.position.setFromMatrixPosition(H.matrixWorld),J.color.copy(he).multiplyScalar(le),J.distance=ee,J.coneCos=Math.cos(H.angle),J.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),J.decay=H.decay,r.spot[D]=J;const Q=H.shadow;if(H.map&&(r.spotLightMap[E]=H.map,E++,Q.updateMatrices(H),H.castShadow&&Y++),r.spotLightMatrix[D]=Q.matrix,H.castShadow){const U=t.get(H);U.shadowIntensity=Q.intensity,U.shadowBias=Q.bias,U.shadowNormalBias=Q.normalBias,U.shadowRadius=Q.radius,U.shadowMapSize=Q.mapSize,r.spotShadow[D]=U,r.spotShadowMap[D]=ne,T++}D++}else if(H.isRectAreaLight){const J=e.get(H);J.color.copy(he).multiplyScalar(le),J.halfWidth.set(H.width*.5,0,0),J.halfHeight.set(0,H.height*.5,0),r.rectArea[F]=J,F++}else if(H.isPointLight){const J=e.get(H);if(J.color.copy(H.color).multiplyScalar(H.intensity),J.distance=H.distance,J.decay=H.decay,H.castShadow){const Q=H.shadow,U=t.get(H);U.shadowIntensity=Q.intensity,U.shadowBias=Q.bias,U.shadowNormalBias=Q.normalBias,U.shadowRadius=Q.radius,U.shadowMapSize=Q.mapSize,U.shadowCameraNear=Q.camera.near,U.shadowCameraFar=Q.camera.far,r.pointShadow[x]=U,r.pointShadowMap[x]=ne,r.pointShadowMatrix[x]=H.shadow.matrix,I++}r.point[x]=J,x++}else if(H.isHemisphereLight){const J=e.get(H);J.skyColor.copy(H.color).multiplyScalar(le),J.groundColor.copy(H.groundColor).multiplyScalar(le),r.hemi[P]=J,P++}}F>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=je.LTC_FLOAT_1,r.rectAreaLTC2=je.LTC_FLOAT_2):(r.rectAreaLTC1=je.LTC_HALF_1,r.rectAreaLTC2=je.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=M,r.ambient[2]=v;const V=r.hash;(V.sunLength!==S||V.directionalLength!==y||V.pointLength!==x||V.spotLength!==D||V.rectAreaLength!==F||V.hemiLength!==P||V.numSunShadows!==w||V.numDirectionalShadows!==O||V.numPointShadows!==I||V.numSpotShadows!==T||V.numSpotMaps!==E||V.numLightProbes!==B)&&(r.sun.length=S,r.directional.length=y,r.spot.length=D,r.rectArea.length=F,r.point.length=x,r.hemi.length=P,r.sunShadow.length=w,r.sunShadowMap.length=w,r.sunShadowMatrix.length=R,r.sunShadowCascade.length=R,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.directionalShadowMatrix.length=O,r.pointShadow.length=I,r.pointShadowMap.length=I,r.pointShadowMatrix.length=I,r.spotShadow.length=T,r.spotShadowMap.length=T,r.spotLightMatrix.length=T+E-Y,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=Y,r.numLightProbes=B,V.sunLength=S,V.directionalLength=y,V.pointLength=x,V.spotLength=D,V.rectAreaLength=F,V.hemiLength=P,V.numSunShadows=w,V.numDirectionalShadows=O,V.numPointShadows=I,V.numSpotShadows=T,V.numSpotMaps=E,V.numLightProbes=B,r.version=vE++)}function f(p,_){let M=0,v=0,S=0,w=0,R=0,y=0;const x=_.matrixWorldInverse;for(let D=0,F=p.length;D<F;D++){const P=p[D];if(P.isSunLight){const O=r.sun[M];O.direction.setFromMatrixPosition(P.matrixWorld),O.direction.transformDirection(x),M++}else if(P.isDirectionalLight){const O=r.directional[v];O.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),O.direction.sub(o),O.direction.transformDirection(x),v++}else if(P.isSpotLight){const O=r.spot[w];O.position.setFromMatrixPosition(P.matrixWorld),O.position.applyMatrix4(x),O.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),O.direction.sub(o),O.direction.transformDirection(x),w++}else if(P.isRectAreaLight){const O=r.rectArea[R];O.position.setFromMatrixPosition(P.matrixWorld),O.position.applyMatrix4(x),u.identity(),l.copy(P.matrixWorld),l.premultiply(x),u.extractRotation(l),O.halfWidth.set(P.width*.5,0,0),O.halfHeight.set(0,P.height*.5,0),O.halfWidth.applyMatrix4(u),O.halfHeight.applyMatrix4(u),R++}else if(P.isPointLight){const O=r.point[S];O.position.setFromMatrixPosition(P.matrixWorld),O.position.applyMatrix4(x),S++}else if(P.isHemisphereLight){const O=r.hemi[y];O.direction.setFromMatrixPosition(P.matrixWorld),O.direction.transformDirection(x),y++}}}return{setup:d,setupView:f,state:r}}function X0(s){const e=new xE(s),t=[],r=[],o=[];function l(M){_.camera=M,t.length=0,r.length=0,o.length=0}function u(M){M.isLightProbeGrid?o.push(M):t.push(M)}function d(M){r.push(M)}function f(){e.setup(t),o.sort((M,v)=>M.priority-v.priority||M.id-v.id)}function p(M){e.setupView(t,M)}const _={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:_,setupLights:f,setupLightsView:p,pushLight:u,pushShadow:d}}function yE(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let d;return u===void 0?(d=new X0(s),e.set(o,[d])):l>=u.length?(d=new X0(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const SE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ME=`uniform sampler2D shadow_pass;
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
}`,TE=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],EE=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],K0=new en,po=new A,Xh=new A;function wE(s,e,t){let r=new Ao;const o=new Xe,l=new Xe,u=new dn,d=new I1,f=new U1,p={},_=t.maxTextureSize,M={[Es]:fi,[fi]:Es,[Gi]:Gi},v=new As({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:SE,fragmentShader:ME}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const w=new Qn;w.setAttribute("position",new is(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Ot(w,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lc;let x=this.type;this.render=function(I,T,E){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;this.type===eg&&(pt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=lc);const Y=s.getRenderTarget(),B=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),$=s.state;$.setBlending(_a),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const te=x!==this.type;te&&T.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(he=>he.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,he=I.length;H<he;H++){const le=I[H],ee=le.shadow;if(ee===void 0){pt("WebGLShadowMap:",le,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;o.copy(ee.mapSize);const ne=ee.getFrameExtents();o.multiply(ne),l.copy(ee.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(l.x=Math.floor(_/ne.x),o.x=l.x*ne.x,ee.mapSize.x=l.x),o.y>_&&(l.y=Math.floor(_/ne.y),o.y=l.y*ne.y,ee.mapSize.y=l.y));const J=s.state.buffers.depth.getReversed();if(ee.camera._reversedDepth=J,ee.map===null||te===!0){if(ee.map!==null&&(ee.map.depthTexture!==null&&(ee.map.depthTexture.dispose(),ee.map.depthTexture=null),ee.map.dispose()),this.type===go){if(le.isPointLight){pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ee.map=new rr(o.x,o.y,{format:ws,type:ar,minFilter:ii,magFilter:ii,generateMipmaps:!1}),ee.map.texture.name=le.name+".shadowMap",ee.map.depthTexture=new Ma(o.x,o.y,nr),ee.map.depthTexture.name=le.name+".shadowMapDepth",ee.map.depthTexture.format=rs,ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=Hn,ee.map.depthTexture.magFilter=Hn}else le.isPointLight?(ee.map=new rf(o.x),ee.map.depthTexture=new Pg(o.x,sr)):(ee.map=new rr(o.x,o.y),ee.map.depthTexture=new Ma(o.x,o.y,sr)),ee.map.depthTexture.name=le.name+".shadowMap",ee.map.depthTexture.format=rs,this.type===lc?(ee.map.depthTexture.compareFunction=J?xg:_g,ee.map.depthTexture.minFilter=ii,ee.map.depthTexture.magFilter=ii):(ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=Hn,ee.map.depthTexture.magFilter=Hn);ee.camera.updateProjectionMatrix()}ee.map.isWebGLCubeRenderTarget!==!0&&(ee.map.width!==o.x||ee.map.height!==o.y)&&ee.map.setSize(o.x,o.y);const Q=ee.map.isWebGLCubeRenderTarget?6:ee.getViewportCount();le.isPointLight!==!0&&ee.updateMatrices(le,E);const U=(ee.camera.layers.mask&4294967294)!==0?ee.camera.layers:E.layers;for(let se=0;se<Q;se++){const Oe=ee.getCamera(se);if(le.isPointLight){const ce=ee.camera,we=ee.matrix,Ce=le.distance||ce.far;Ce!==ce.far&&(ce.far=Ce,ce.updateProjectionMatrix()),po.setFromMatrixPosition(le.matrixWorld),ce.position.copy(po),Xh.copy(ce.position),Xh.add(TE[se]),ce.up.copy(EE[se]),ce.lookAt(Xh),ce.updateMatrixWorld(),we.makeTranslation(-po.x,-po.y,-po.z),K0.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),ee._frustum.setFromProjectionMatrix(K0,ce.coordinateSystem,ce.reversedDepth)}if(ee.map.isWebGLCubeRenderTarget)s.setRenderTarget(ee.map,se),s.clear();else{se===0&&(s.setRenderTarget(ee.map),s.clear());const ce=ee.getViewport(se);u.set(l.x*ce.x,l.y*ce.y,l.x*ce.z,l.y*ce.w),$.viewport(u)}r=ee.getFrustum(se),P(T,E,Oe,le,U,this.type)}ee.isPointLightShadow!==!0&&this.type===go&&D(ee,E),ee.needsUpdate=!1}x=this.type,y.needsUpdate=!1,s.setRenderTarget(Y,B,V)};function D(I,T){const E=e.update(R);v.defines.VSM_SAMPLES!==I.blurSamples&&(v.defines.VSM_SAMPLES=I.blurSamples,S.defines.VSM_SAMPLES=I.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),I.mapPass===null?I.mapPass=new rr(o.x,o.y,{format:ws,type:ar}):(I.mapPass.width!==I.map.width||I.mapPass.height!==I.map.height)&&I.mapPass.setSize(I.map.width,I.map.height),v.uniforms.shadow_pass.value=I.map.depthTexture,v.uniforms.resolution.value.set(I.map.width,I.map.height),v.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(T,null,E,v,R,null),S.uniforms.shadow_pass.value=I.mapPass.texture,S.uniforms.resolution.value.set(I.map.width,I.map.height),S.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(T,null,E,S,R,null)}function F(I,T,E,Y){let B=null;const V=E.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(V!==void 0)B=V;else if(B=E.isPointLight===!0?f:d,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const $=B.uuid,te=T.uuid;let H=p[$];H===void 0&&(H={},p[$]=H);let he=H[te];he===void 0&&(he=B.clone(),H[te]=he,T.addEventListener("dispose",O)),B=he}if(B.visible=T.visible,B.wireframe=T.wireframe,Y===go?B.side=T.shadowSide!==null?T.shadowSide:T.side:B.side=T.shadowSide!==null?T.shadowSide:M[T.side],B.alphaMap=T.alphaMap,B.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,B.map=T.map,B.clipShadows=T.clipShadows,B.clippingPlanes=T.clippingPlanes,B.clipIntersection=T.clipIntersection,B.displacementMap=T.displacementMap,B.displacementScale=T.displacementScale,B.displacementBias=T.displacementBias,B.wireframeLinewidth=T.wireframeLinewidth,B.linewidth=T.linewidth,E.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const $=s.properties.get(B);$.light=E}return B}function P(I,T,E,Y,B,V){if(I.visible===!1)return;if(I.layers.test(B)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&V===go)&&(!I.frustumCulled||I.intersectsFrustum(r))){I.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,I.matrixWorld);const H=e.update(I),he=I.material;if(Array.isArray(he)){const le=H.groups;for(let ee=0,ne=le.length;ee<ne;ee++){const J=le[ee],Q=he[J.materialIndex];if(Q&&Q.visible){const U=F(I,Q,Y,V);I.onBeforeShadow(s,I,T,E,H,U,J),s.renderBufferDirect(E,null,H,U,I,J),I.onAfterShadow(s,I,T,E,H,U,J)}}}else if(he.visible){const le=F(I,he,Y,V);I.onBeforeShadow(s,I,T,E,H,le,null),s.renderBufferDirect(E,null,H,le,I,null),I.onAfterShadow(s,I,T,E,H,le,null)}}const te=I.children;for(let H=0,he=te.length;H<he;H++)P(te[H],T,E,Y,B,V)}function O(I){I.target.removeEventListener("dispose",O);for(const E in p){const Y=p[E],B=I.target.uuid;B in Y&&(Y[B].dispose(),delete Y[B])}}}function AE(s,e){function t(){let z=!1;const ye=new dn;let G=null;const q=new dn(0,0,0,0);return{setMask:function(Se){G!==Se&&!z&&(s.colorMask(Se,Se,Se,Se),G=Se)},setLocked:function(Se){z=Se},setClear:function(Se,ue,Me,Ve,me){me===!0&&(Se*=Ve,ue*=Ve,Me*=Ve),ye.set(Se,ue,Me,Ve),q.equals(ye)===!1&&(s.clearColor(Se,ue,Me,Ve),q.copy(ye))},reset:function(){z=!1,G=null,q.set(-1,0,0,0)}}}function r(){let z=!1,ye=!1,G=null,q=null,Se=null;return{setReversed:function(ue){if(ye!==ue){const Me=e.get("EXT_clip_control");ue?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),ye=ue;const Ve=Se;Se=null,this.setClear(Ve)}},getReversed:function(){return ye},setTest:function(ue){ue?Ae(s.DEPTH_TEST):Ke(s.DEPTH_TEST)},setMask:function(ue){G!==ue&&!z&&(s.depthMask(ue),G=ue)},setFunc:function(ue){if(ye&&(ue=Bx[ue]),q!==ue){switch(ue){case qh:s.depthFunc(s.NEVER);break;case $h:s.depthFunc(s.ALWAYS);break;case Zh:s.depthFunc(s.LESS);break;case Mo:s.depthFunc(s.LEQUAL);break;case Qh:s.depthFunc(s.EQUAL);break;case Jh:s.depthFunc(s.GEQUAL);break;case ed:s.depthFunc(s.GREATER);break;case td:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}q=ue}},setLocked:function(ue){z=ue},setClear:function(ue){Se!==ue&&(Se=ue,ye&&(ue=1-ue),s.clearDepth(ue))},reset:function(){z=!1,G=null,q=null,Se=null,ye=!1}}}function o(){let z=!1,ye=null,G=null,q=null,Se=null,ue=null,Me=null,Ve=null,me=null;return{setTest:function(Ue){z||(Ue?Ae(s.STENCIL_TEST):Ke(s.STENCIL_TEST))},setMask:function(Ue){ye!==Ue&&!z&&(s.stencilMask(Ue),ye=Ue)},setFunc:function(Ue,Qe,Pe){(G!==Ue||q!==Qe||Se!==Pe)&&(s.stencilFunc(Ue,Qe,Pe),G=Ue,q=Qe,Se=Pe)},setOp:function(Ue,Qe,Pe){(ue!==Ue||Me!==Qe||Ve!==Pe)&&(s.stencilOp(Ue,Qe,Pe),ue=Ue,Me=Qe,Ve=Pe)},setLocked:function(Ue){z=Ue},setClear:function(Ue){me!==Ue&&(s.clearStencil(Ue),me=Ue)},reset:function(){z=!1,ye=null,G=null,q=null,Se=null,ue=null,Me=null,Ve=null,me=null}}}const l=new t,u=new r,d=new o;let f={};const p=new WeakMap;let _={},M={},v={},S=new WeakMap,w=[],R=null,y=!1,x=null,D=null,F=null,P=null,O=null,I=null,T=null,E=new Et(0,0,0),Y=0,B=!1,V=null,$=null,te=null,H=null,he=null;const le=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,ne=0;const J=s.getParameter(s.VERSION);J.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(J)[1]),ee=ne>=1):J.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),ee=ne>=2);let Q=null,U={};const se=s.getParameter(s.SCISSOR_BOX),Oe=s.getParameter(s.VIEWPORT),ce=new dn().fromArray(se),we=new dn().fromArray(Oe);function Ce(z,ye,G,q){const Se=new Uint8Array(4),ue=s.createTexture();s.bindTexture(z,ue),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Me=0;Me<G;Me++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(ye,0,s.RGBA,1,1,q,0,s.RGBA,s.UNSIGNED_BYTE,Se):s.texImage2D(ye+Me,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Se);return ue}const He={};He[s.TEXTURE_2D]=Ce(s.TEXTURE_2D,s.TEXTURE_2D,1),He[s.TEXTURE_CUBE_MAP]=Ce(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),He[s.TEXTURE_2D_ARRAY]=Ce(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),He[s.TEXTURE_3D]=Ce(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),Ae(s.DEPTH_TEST),u.setFunc(Mo),cn(!1),Lt(km),Ae(s.CULL_FACE),nn(_a);function Ae(z){_[z]!==!0&&(s.enable(z),_[z]=!0)}function Ke(z){_[z]!==!1&&(s.disable(z),_[z]=!1)}function it(z,ye){return v[z]!==ye?(s.bindFramebuffer(z,ye),v[z]=ye,z===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=ye),z===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=ye),!0):!1}function lt(z,ye){let G=w,q=!1;if(z){G=S.get(ye),G===void 0&&(G=[],S.set(ye,G));const Se=z.textures;if(G.length!==Se.length||G[0]!==s.COLOR_ATTACHMENT0){for(let ue=0,Me=Se.length;ue<Me;ue++)G[ue]=s.COLOR_ATTACHMENT0+ue;G.length=Se.length,q=!0}}else G[0]!==s.BACK&&(G[0]=s.BACK,q=!0);q&&s.drawBuffers(G)}function ot(z){return R!==z?(s.useProgram(z),R=z,!0):!1}const bt={[fa]:s.FUNC_ADD,[lx]:s.FUNC_SUBTRACT,[cx]:s.FUNC_REVERSE_SUBTRACT};bt[ux]=s.MIN,bt[hx]=s.MAX;const gt={[dx]:s.ZERO,[fx]:s.ONE,[px]:s.SRC_COLOR,[tg]:s.SRC_ALPHA,[yx]:s.SRC_ALPHA_SATURATE,[_x]:s.DST_COLOR,[gx]:s.DST_ALPHA,[mx]:s.ONE_MINUS_SRC_COLOR,[ng]:s.ONE_MINUS_SRC_ALPHA,[xx]:s.ONE_MINUS_DST_COLOR,[vx]:s.ONE_MINUS_DST_ALPHA,[Sx]:s.CONSTANT_COLOR,[Mx]:s.ONE_MINUS_CONSTANT_COLOR,[Tx]:s.CONSTANT_ALPHA,[Ex]:s.ONE_MINUS_CONSTANT_ALPHA};function nn(z,ye,G,q,Se,ue,Me,Ve,me,Ue){if(z===_a){y===!0&&(Ke(s.BLEND),y=!1);return}if(y===!1&&(Ae(s.BLEND),y=!0),z!==ox){if(z!==x||Ue!==B){if((D!==fa||O!==fa)&&(s.blendEquation(s.FUNC_ADD),D=fa,O=fa),Ue)switch(z){case _o:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bm:s.blendFunc(s.ONE,s.ONE);break;case zm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ft("WebGLState: Invalid blending: ",z);break}else switch(z){case _o:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case zm:Ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hm:Ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ft("WebGLState: Invalid blending: ",z);break}F=null,P=null,I=null,T=null,E.set(0,0,0),Y=0,x=z,B=Ue}return}Se=Se||ye,ue=ue||G,Me=Me||q,(ye!==D||Se!==O)&&(s.blendEquationSeparate(bt[ye],bt[Se]),D=ye,O=Se),(G!==F||q!==P||ue!==I||Me!==T)&&(s.blendFuncSeparate(gt[G],gt[q],gt[ue],gt[Me]),F=G,P=q,I=ue,T=Me),(Ve.equals(E)===!1||me!==Y)&&(s.blendColor(Ve.r,Ve.g,Ve.b,me),E.copy(Ve),Y=me),x=z,B=!1}function jt(z,ye){z.side===Gi?Ke(s.CULL_FACE):Ae(s.CULL_FACE);let G=z.side===fi;ye&&(G=!G),cn(G),z.blending===_o&&z.transparent===!1?nn(_a):nn(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),u.setFunc(z.depthFunc),u.setTest(z.depthTest),u.setMask(z.depthWrite),l.setMask(z.colorWrite);const q=z.stencilWrite;d.setTest(q),q&&(d.setMask(z.stencilWriteMask),d.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),d.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),kt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Ae(s.SAMPLE_ALPHA_TO_COVERAGE):Ke(s.SAMPLE_ALPHA_TO_COVERAGE)}function cn(z){V!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),V=z)}function Lt(z){z!==sx?(Ae(s.CULL_FACE),z!==$&&(z===km?s.cullFace(s.BACK):z===ax?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ke(s.CULL_FACE),$=z}function Sn(z){z!==te&&(ee&&s.lineWidth(z),te=z)}function kt(z,ye,G){z?(Ae(s.POLYGON_OFFSET_FILL),(H!==ye||he!==G)&&(H=ye,he=G,u.getReversed()&&(ye=-ye,G=-G),s.polygonOffset(ye,G))):Ke(s.POLYGON_OFFSET_FILL)}function Zt(z){z?Ae(s.SCISSOR_TEST):Ke(s.SCISSOR_TEST)}function Mt(z){z===void 0&&(z=s.TEXTURE0+le-1),Q!==z&&(s.activeTexture(z),Q=z)}function Xt(z,ye,G){G===void 0&&(Q===null?G=s.TEXTURE0+le-1:G=Q);let q=U[G];q===void 0&&(q={type:void 0,texture:void 0},U[G]=q),(q.type!==z||q.texture!==ye)&&(Q!==G&&(s.activeTexture(G),Q=G),s.bindTexture(z,ye||He[z]),q.type=z,q.texture=ye)}function j(){const z=U[Q];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function _t(){try{s.compressedTexImage2D(...arguments)}catch(z){Ft("WebGLState:",z)}}function re(){try{s.compressedTexImage3D(...arguments)}catch(z){Ft("WebGLState:",z)}}function be(){try{s.texSubImage2D(...arguments)}catch(z){Ft("WebGLState:",z)}}function ge(){try{s.texSubImage3D(...arguments)}catch(z){Ft("WebGLState:",z)}}function Ye(){try{s.compressedTexSubImage2D(...arguments)}catch(z){Ft("WebGLState:",z)}}function Te(){try{s.compressedTexSubImage3D(...arguments)}catch(z){Ft("WebGLState:",z)}}function We(){try{s.texStorage2D(...arguments)}catch(z){Ft("WebGLState:",z)}}function L(){try{s.texStorage3D(...arguments)}catch(z){Ft("WebGLState:",z)}}function b(){try{s.texImage2D(...arguments)}catch(z){Ft("WebGLState:",z)}}function K(){try{s.texImage3D(...arguments)}catch(z){Ft("WebGLState:",z)}}function _e(z){return M[z]!==void 0?M[z]:s.getParameter(z)}function Ee(z,ye){M[z]!==ye&&(s.pixelStorei(z,ye),M[z]=ye)}function De(z){ce.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),ce.copy(z))}function Fe(z){we.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),we.copy(z))}function ve(z,ye){let G=p.get(ye);G===void 0&&(G=new WeakMap,p.set(ye,G));let q=G.get(z);q===void 0&&(q=s.getUniformBlockIndex(ye,z.name),s.uniformBlockBinding(ye,q,q),G.set(z,q))}function xe(z,ye,G){const Se=p.get(ye).get(z);f[Se]!==G&&(s.bindBufferBase(s.UNIFORM_BUFFER,Se,G),f[Se]=G)}function Ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),_={},M={},Q=null,U={},v={},f={},S=new WeakMap,w=[],R=null,y=!1,x=null,D=null,F=null,P=null,O=null,I=null,T=null,E=new Et(0,0,0),Y=0,B=!1,V=null,$=null,te=null,H=null,he=null,ce.set(0,0,s.canvas.width,s.canvas.height),we.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:Ae,disable:Ke,bindFramebuffer:it,drawBuffers:lt,useProgram:ot,setBlending:nn,setMaterial:jt,setFlipSided:cn,setCullFace:Lt,setLineWidth:Sn,setPolygonOffset:kt,setScissorTest:Zt,activeTexture:Mt,bindTexture:Xt,unbindTexture:j,compressedTexImage2D:_t,compressedTexImage3D:re,texImage2D:b,texImage3D:K,pixelStorei:Ee,getParameter:_e,updateUBOMapping:ve,uniformBlockBinding:xe,texStorage2D:We,texStorage3D:L,texSubImage2D:be,texSubImage3D:ge,compressedTexSubImage2D:Ye,compressedTexSubImage3D:Te,scissor:De,viewport:Fe,reset:Ie}}function CE(s,e,t,r,o,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Xe,_=new WeakMap,M=new Set;let v;const S=new WeakMap,w=new Set,R=new FinalizationRegistry(L=>w.delete(L));let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,b){return y?new OffscreenCanvas(L,b):xc("canvas")}function D(L,b,K){let _e=1;const Ee=We(L);if((Ee.width>K||Ee.height>K)&&(_e=K/Math.max(Ee.width,Ee.height)),_e<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const De=Math.floor(_e*Ee.width),Fe=Math.floor(_e*Ee.height);v===void 0&&(v=x(De,Fe));const ve=b?x(De,Fe):v;return ve.width=De,ve.height=Fe,ve.getContext("2d").drawImage(L,0,0,De,Fe),pt("WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+De+"x"+Fe+")."),ve}else return"data"in L&&pt("WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),L;return L}function F(L){return L.generateMipmaps}function P(L){s.generateMipmap(L)}function O(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function I(L,b,K,_e,Ee,De=!1){if(L!==null){if(s[L]!==void 0)return s[L];pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Fe;_e&&(Fe=e.get("EXT_texture_norm16"),Fe||pt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ve=b;if(b===s.RED&&(K===s.FLOAT&&(ve=s.R32F),K===s.HALF_FLOAT&&(ve=s.R16F),K===s.UNSIGNED_BYTE&&(ve=s.R8),K===s.UNSIGNED_SHORT&&Fe&&(ve=Fe.R16_EXT),K===s.SHORT&&Fe&&(ve=Fe.R16_SNORM_EXT)),b===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(ve=s.R8UI),K===s.UNSIGNED_SHORT&&(ve=s.R16UI),K===s.UNSIGNED_INT&&(ve=s.R32UI),K===s.BYTE&&(ve=s.R8I),K===s.SHORT&&(ve=s.R16I),K===s.INT&&(ve=s.R32I)),b===s.RG&&(K===s.FLOAT&&(ve=s.RG32F),K===s.HALF_FLOAT&&(ve=s.RG16F),K===s.UNSIGNED_BYTE&&(ve=s.RG8),K===s.UNSIGNED_SHORT&&Fe&&(ve=Fe.RG16_EXT),K===s.SHORT&&Fe&&(ve=Fe.RG16_SNORM_EXT)),b===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(ve=s.RG8UI),K===s.UNSIGNED_SHORT&&(ve=s.RG16UI),K===s.UNSIGNED_INT&&(ve=s.RG32UI),K===s.BYTE&&(ve=s.RG8I),K===s.SHORT&&(ve=s.RG16I),K===s.INT&&(ve=s.RG32I)),b===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(ve=s.RGB8UI),K===s.UNSIGNED_SHORT&&(ve=s.RGB16UI),K===s.UNSIGNED_INT&&(ve=s.RGB32UI),K===s.BYTE&&(ve=s.RGB8I),K===s.SHORT&&(ve=s.RGB16I),K===s.INT&&(ve=s.RGB32I)),b===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(ve=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(ve=s.RGBA16UI),K===s.UNSIGNED_INT&&(ve=s.RGBA32UI),K===s.BYTE&&(ve=s.RGBA8I),K===s.SHORT&&(ve=s.RGBA16I),K===s.INT&&(ve=s.RGBA32I)),b===s.RGB&&(K===s.UNSIGNED_SHORT&&Fe&&(ve=Fe.RGB16_EXT),K===s.SHORT&&Fe&&(ve=Fe.RGB16_SNORM_EXT),K===s.UNSIGNED_INT_5_9_9_9_REV&&(ve=s.RGB9_E5),K===s.UNSIGNED_INT_10F_11F_11F_REV&&(ve=s.R11F_G11F_B10F)),b===s.RGBA){const xe=De?_c:Dt.getTransfer(Ee);K===s.FLOAT&&(ve=s.RGBA32F),K===s.HALF_FLOAT&&(ve=s.RGBA16F),K===s.UNSIGNED_BYTE&&(ve=xe===Yt?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT&&Fe&&(ve=Fe.RGBA16_EXT),K===s.SHORT&&Fe&&(ve=Fe.RGBA16_SNORM_EXT),K===s.UNSIGNED_SHORT_4_4_4_4&&(ve=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(ve=s.RGB5_A1)}return(ve===s.R16F||ve===s.R32F||ve===s.RG16F||ve===s.RG32F||ve===s.RGBA16F||ve===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ve}function T(L,b){let K;return L?b===null||b===sr||b===Sa?K=s.DEPTH24_STENCIL8:b===nr?K=s.DEPTH32F_STENCIL8:b===Eo&&(K=s.DEPTH24_STENCIL8,pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===sr||b===Sa?K=s.DEPTH_COMPONENT24:b===nr?K=s.DEPTH_COMPONENT32F:b===Eo&&(K=s.DEPTH_COMPONENT16),K}function E(L,b){return F(L)===!0||L.isFramebufferTexture&&L.minFilter!==Hn&&L.minFilter!==ii?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function Y(L){const b=new WeakRef(L);r.get(L).__ref=b,w.add(b),R.register(L,b,b)}function B(L){const b=r.get(L).__ref;b!==void 0&&(w.delete(b),R.unregister(b))}function V(L){te(L.target)}function $(L){H(L.target)}function te(L){L.removeEventListener("dispose",V),B(L),le(L),L.isVideoTexture&&_.delete(L),L.isHTMLTexture&&M.delete(L)}function H(L){L.removeEventListener("dispose",$),B(L),ne(L)}function he(){for(const L of w){const b=L.deref();b!==void 0&&(b.isRenderTarget===!0?H(b):te(b))}w.clear(),M.clear()}function le(L){const b=r.get(L);if(b.__webglInit===void 0)return;const K=L.source,_e=S.get(K);if(_e){const Ee=_e[b.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&ee(L),Object.keys(_e).length===0&&S.delete(K)}r.remove(L)}function ee(L){const b=r.get(L);s.deleteTexture(b.__webglTexture);const K=L.source,_e=S.get(K);delete _e[b.__cacheKey],u.memory.textures--}function ne(L){const b=r.get(L);b.__depthDisposeCallback&&b.__depthDisposeCallback();const K=L.depthTexture;if(K&&K.renderTarget===L&&te(K),L.isWebGLCubeRenderTarget)for(let Ee=0;Ee<6;Ee++){if(Array.isArray(b.__webglFramebuffer[Ee]))for(let De=0;De<b.__webglFramebuffer[Ee].length;De++)s.deleteFramebuffer(b.__webglFramebuffer[Ee][De]);else s.deleteFramebuffer(b.__webglFramebuffer[Ee]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[Ee])}else{if(Array.isArray(b.__webglFramebuffer))for(let Ee=0;Ee<b.__webglFramebuffer.length;Ee++)s.deleteFramebuffer(b.__webglFramebuffer[Ee]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Ee=0;Ee<b.__webglColorRenderbuffer.length;Ee++)b.__webglColorRenderbuffer[Ee]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[Ee]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const _e=L.textures;for(let Ee=0,De=_e.length;Ee<De;Ee++){const Fe=r.get(_e[Ee]);Fe.__webglTexture&&(s.deleteTexture(Fe.__webglTexture),u.memory.textures--),r.remove(_e[Ee])}r.remove(L)}let J=0;function Q(){J=0}function U(){return J}function se(L){J=L}function Oe(){const L=J;return L>=o.maxTextures&&pt("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+o.maxTextures),J+=1,L}function ce(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.mipmapsAutoUpdate),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function we(L,b){const K=r.get(L);if(L.isVideoTexture&&Ye(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&K.__version!==L.version){const _e=L.image;if(_e===null)pt("WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)pt("WebGLRenderer: Texture marked for update but image is incomplete");else{jt(K,L,b);return}}else L.isExternalTexture&&(K.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+b)}function Ce(L,b){const K=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){jt(K,L,b);return}else L.isExternalTexture&&(K.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+b)}function He(L,b){const K=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){jt(K,L,b);return}t.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+b)}function Ae(L,b){const K=r.get(L);if(L.version>0&&K.__version!==L.version){cn(K,L,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+b)}const Ke={[nd]:s.REPEAT,[Er]:s.CLAMP_TO_EDGE,[id]:s.MIRRORED_REPEAT},it={[Hn]:s.NEAREST,[Cx]:s.NEAREST_MIPMAP_NEAREST,[Pl]:s.NEAREST_MIPMAP_LINEAR,[ii]:s.LINEAR,[mh]:s.LINEAR_MIPMAP_NEAREST,[ts]:s.LINEAR_MIPMAP_LINEAR},lt={[Px]:s.NEVER,[yg]:s.ALWAYS,[Dx]:s.LESS,[_g]:s.LEQUAL,[Lx]:s.EQUAL,[xg]:s.GEQUAL,[Ix]:s.GREATER,[Ux]:s.NOTEQUAL};function ot(L,b){if(b.type===nr&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===ii||b.magFilter===mh||b.magFilter===Pl||b.magFilter===ts||b.minFilter===ii||b.minFilter===mh||b.minFilter===Pl||b.minFilter===ts)&&pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,Ke[b.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,Ke[b.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,Ke[b.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,it[b.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,it[b.minFilter]),b.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,lt[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Hn||b.minFilter!==Pl&&b.minFilter!==ts||b.type===nr&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function bt(L,b){let K=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",V),Y(b));const _e=b.source;let Ee=S.get(_e);Ee===void 0&&(Ee={},S.set(_e,Ee));const De=ce(b);if(De!==L.__cacheKey){Ee[De]===void 0&&(Ee[De]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,K=!0),Ee[De].usedTimes++;const Fe=Ee[L.__cacheKey];Fe!==void 0&&(Ee[L.__cacheKey].usedTimes--,Fe.usedTimes===0&&ee(b)),L.__cacheKey=De,L.__webglTexture=Ee[De].texture}return K}function gt(L,b,K){return Math.floor(Math.floor(L/K)/b)}function nn(L,b,K,_e){const De=L.updateRanges;if(De.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,K,_e,b.data);else{De.sort((z,ye)=>z.start-ye.start);let Fe=0;for(let z=1;z<De.length;z++){const ye=De[Fe],G=De[z],q=ye.start+ye.count,Se=gt(G.start,b.width,4),ue=gt(ye.start,b.width,4);G.start<=q+1&&Se===ue&&gt(G.start+G.count-1,b.width,4)===Se?ye.count=Math.max(ye.count,G.start+G.count-ye.start):(++Fe,De[Fe]=G)}De.length=Fe+1;const ve=t.getParameter(s.UNPACK_ROW_LENGTH),xe=t.getParameter(s.UNPACK_SKIP_PIXELS),Ie=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let z=0,ye=De.length;z<ye;z++){const G=De[z],q=Math.floor(G.start/4),Se=Math.ceil(G.count/4),ue=q%b.width,Me=Math.floor(q/b.width),Ve=Se,me=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(s.UNPACK_SKIP_ROWS,Me),t.texSubImage2D(s.TEXTURE_2D,0,ue,Me,Ve,me,K,_e,b.data)}L.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ve),t.pixelStorei(s.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ie)}}function jt(L,b,K){let _e=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(_e=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(_e=s.TEXTURE_3D);const Ee=bt(L,b),De=b.source;t.bindTexture(_e,L.__webglTexture,s.TEXTURE0+K);const Fe=r.get(De);if(De.version!==Fe.__version||Ee===!0){if(t.activeTexture(s.TEXTURE0+K),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const me=Dt.getPrimaries(Dt.workingColorSpace),Ue=b.colorSpace===es?null:Dt.getPrimaries(b.colorSpace),Qe=b.colorSpace===es||me===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe)}t.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let xe=D(b.image,!1,o.maxTextureSize);xe=Te(b,xe);const Ie=l.convert(b.format,b.colorSpace),z=l.convert(b.type);let ye=I(b.internalFormat,Ie,z,b.normalized,b.colorSpace,b.isVideoTexture);ot(_e,b);let G;const q=b.mipmaps,Se=b.isVideoTexture!==!0,ue=Fe.__version===void 0||Ee===!0,Me=De.dataReady,Ve=E(b,xe);if(b.isDepthTexture)ye=T(b.format===ns,b.type),ue&&(Se?t.texStorage2D(s.TEXTURE_2D,1,ye,xe.width,xe.height):t.texImage2D(s.TEXTURE_2D,0,ye,xe.width,xe.height,0,Ie,z,null));else if(b.isDataTexture)if(q.length>0){Se&&ue&&t.texStorage2D(s.TEXTURE_2D,Ve,ye,q[0].width,q[0].height);for(let me=0,Ue=q.length;me<Ue;me++)G=q[me],Se?Me&&t.texSubImage2D(s.TEXTURE_2D,me,0,0,G.width,G.height,Ie,z,G.data):t.texImage2D(s.TEXTURE_2D,me,ye,G.width,G.height,0,Ie,z,G.data);b.generateMipmaps=!1}else Se?(ue&&t.texStorage2D(s.TEXTURE_2D,Ve,ye,xe.width,xe.height),Me&&nn(b,xe,Ie,z)):t.texImage2D(s.TEXTURE_2D,0,ye,xe.width,xe.height,0,Ie,z,xe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Se&&ue&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ve,ye,q[0].width,q[0].height,xe.depth);for(let me=0,Ue=q.length;me<Ue;me++)if(G=q[me],b.format!==ir)if(Ie!==null)if(Se){if(Me)if(b.layerUpdates.size>0){const Qe=A0(G.width,G.height,b.format,b.type);for(const Pe of b.layerUpdates){const ct=G.data.subarray(Pe*Qe/G.data.BYTES_PER_ELEMENT,(Pe+1)*Qe/G.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,Pe,G.width,G.height,1,Ie,ct)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,G.width,G.height,xe.depth,Ie,G.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,me,ye,G.width,G.height,xe.depth,0,G.data,0,0);else pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Se?Me&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,G.width,G.height,xe.depth,Ie,z,G.data):t.texImage3D(s.TEXTURE_2D_ARRAY,me,ye,G.width,G.height,xe.depth,0,Ie,z,G.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{Se&&ue&&t.texStorage2D(s.TEXTURE_2D,Ve,ye,q[0].width,q[0].height);for(let me=0,Ue=q.length;me<Ue;me++)G=q[me],b.format!==ir?Ie!==null?Se?Me&&t.compressedTexSubImage2D(s.TEXTURE_2D,me,0,0,G.width,G.height,Ie,G.data):t.compressedTexImage2D(s.TEXTURE_2D,me,ye,G.width,G.height,0,G.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?Me&&t.texSubImage2D(s.TEXTURE_2D,me,0,0,G.width,G.height,Ie,z,G.data):t.texImage2D(s.TEXTURE_2D,me,ye,G.width,G.height,0,Ie,z,G.data)}else if(b.isDataArrayTexture)if(Se){if(ue&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ve,ye,xe.width,xe.height,xe.depth),Me)if(b.layerUpdates.size>0){const me=A0(xe.width,xe.height,b.format,b.type);for(const Ue of b.layerUpdates){const Qe=xe.data.subarray(Ue*me/xe.data.BYTES_PER_ELEMENT,(Ue+1)*me/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ue,xe.width,xe.height,1,Ie,z,Qe)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Ie,z,xe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ye,xe.width,xe.height,xe.depth,0,Ie,z,xe.data);else if(b.isData3DTexture)Se?(ue&&t.texStorage3D(s.TEXTURE_3D,Ve,ye,xe.width,xe.height,xe.depth),Me&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Ie,z,xe.data)):t.texImage3D(s.TEXTURE_3D,0,ye,xe.width,xe.height,xe.depth,0,Ie,z,xe.data);else if(b.isFramebufferTexture){if(ue)if(Se)t.texStorage2D(s.TEXTURE_2D,Ve,ye,xe.width,xe.height);else{let me=xe.width,Ue=xe.height;for(let Qe=0;Qe<Ve;Qe++)t.texImage2D(s.TEXTURE_2D,Qe,ye,me,Ue,0,Ie,z,null),me>>=1,Ue>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){const me=s.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),xe.parentNode!==me){me.appendChild(xe),M.add(b),me.onpaint=Ue=>{const Qe=Ue.changedElements;for(const Pe of M)Qe.includes(Pe.image)&&(Pe.needsUpdate=!0)},me.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,xe);else{const Qe=s.RGBA,Pe=s.RGBA,ct=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Qe,Pe,ct,xe)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(q.length>0){if(Se&&ue){const me=We(q[0]);t.texStorage2D(s.TEXTURE_2D,Ve,ye,me.width,me.height)}for(let me=0,Ue=q.length;me<Ue;me++)G=q[me],Se?Me&&t.texSubImage2D(s.TEXTURE_2D,me,0,0,Ie,z,G):t.texImage2D(s.TEXTURE_2D,me,ye,Ie,z,G);b.generateMipmaps=!1}else if(Se){if(ue){const me=We(xe);t.texStorage2D(s.TEXTURE_2D,Ve,ye,me.width,me.height)}Me&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ie,z,xe)}else t.texImage2D(s.TEXTURE_2D,0,ye,Ie,z,xe);F(b)&&b.mipmapsAutoUpdate===!0&&P(_e),Fe.__version=De.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function cn(L,b,K){if(b.image.length!==6)return;const _e=bt(L,b),Ee=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+K);const De=r.get(Ee);if(Ee.version!==De.__version||_e===!0){t.activeTexture(s.TEXTURE0+K);const Fe=Dt.getPrimaries(Dt.workingColorSpace),ve=b.colorSpace===es?null:Dt.getPrimaries(b.colorSpace),xe=b.colorSpace===es||Fe===ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ie=b.isCompressedTexture||b.image[0].isCompressedTexture,z=b.image[0]&&b.image[0].isDataTexture,ye=[];for(let Pe=0;Pe<6;Pe++)!Ie&&!z?ye[Pe]=D(b.image[Pe],!0,o.maxCubemapSize):ye[Pe]=z?b.image[Pe].image:b.image[Pe],ye[Pe]=Te(b,ye[Pe]);const G=ye[0],q=l.convert(b.format,b.colorSpace),Se=l.convert(b.type);let ue=I(b.internalFormat,q,Se,b.normalized,b.colorSpace);const Me=b.isVideoTexture!==!0,Ve=De.__version===void 0||_e===!0,me=Ee.dataReady;let Ue=E(b,G);ot(s.TEXTURE_CUBE_MAP,b);let Qe;if(b.isDepthTexture){if(ue=T(b.format===ns,b.type),Ve)if(Me)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,ue,G.width,G.height);else for(let Pe=0;Pe<6;Pe++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,ue,G.width,G.height,0,q,Se,null)}else if(Ie){Me&&Ve&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,ue,G.width,G.height);for(let Pe=0;Pe<6;Pe++){Qe=ye[Pe].mipmaps;for(let ct=0;ct<Qe.length;ct++){const xt=Qe[ct];b.format!==ir?q!==null?Me?me&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,ct,0,0,xt.width,xt.height,q,xt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,ct,ue,xt.width,xt.height,0,xt.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Me?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,ct,0,0,xt.width,xt.height,q,Se,xt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,ct,ue,xt.width,xt.height,0,q,Se,xt.data)}}}else{if(Qe=b.mipmaps,Me&&Ve){Qe.length>0&&Ue++;const Pe=We(ye[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,ue,Pe.width,Pe.height)}for(let Pe=0;Pe<6;Pe++)if(z){Me?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,ye[Pe].width,ye[Pe].height,q,Se,ye[Pe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,ue,ye[Pe].width,ye[Pe].height,0,q,Se,ye[Pe].data);for(let ct=0;ct<Qe.length;ct++){const wt=Qe[ct].image[Pe].image;Me?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,ct+1,0,0,wt.width,wt.height,q,Se,wt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,ct+1,ue,wt.width,wt.height,0,q,Se,wt.data)}}else{Me?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,q,Se,ye[Pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,ue,q,Se,ye[Pe]);for(let ct=0;ct<Qe.length;ct++){const xt=Qe[ct];Me?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,ct+1,0,0,q,Se,xt.image[Pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,ct+1,ue,q,Se,xt.image[Pe])}}}F(b)&&b.mipmapsAutoUpdate===!0&&P(s.TEXTURE_CUBE_MAP),De.__version=Ee.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Lt(L,b,K,_e,Ee,De){const Fe=l.convert(K.format,K.colorSpace),ve=l.convert(K.type),xe=I(K.internalFormat,Fe,ve,K.normalized,K.colorSpace),Ie=r.get(b),z=r.get(K);if(z.__renderTarget=b,!Ie.__hasExternalTextures){const ye=Math.max(1,b.width>>De),G=Math.max(1,b.height>>De);Ee===s.TEXTURE_3D||Ee===s.TEXTURE_2D_ARRAY?t.texImage3D(Ee,De,xe,ye,G,b.depth,0,Fe,ve,null):t.texImage2D(Ee,De,xe,ye,G,0,Fe,ve,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),ge(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,Ee,z.__webglTexture,0,be(b)):(Ee===s.TEXTURE_2D||Ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,_e,Ee,z.__webglTexture,De),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Sn(L,b,K){if(s.bindRenderbuffer(s.RENDERBUFFER,L),b.depthBuffer){const _e=b.depthTexture,Ee=_e&&_e.isDepthTexture?_e.type:null,De=T(b.stencilBuffer,Ee),Fe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ge(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be(b),De,b.width,b.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,be(b),De,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,De,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Fe,s.RENDERBUFFER,L)}else{const _e=b.textures;for(let Ee=0;Ee<_e.length;Ee++){const De=_e[Ee],Fe=l.convert(De.format,De.colorSpace),ve=l.convert(De.type),xe=I(De.internalFormat,Fe,ve,De.normalized,De.colorSpace);ge(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be(b),xe,b.width,b.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,be(b),xe,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,xe,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function kt(L,b,K){const _e=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Ee=r.get(b.depthTexture);Ee.__renderTarget=b;const De=_e?b.depthTexture.image[0]:b.depthTexture.image;(!Ee.__webglTexture||De.width!==b.width||De.height!==b.height)&&(De.width=b.width,De.height=b.height,b.depthTexture.needsUpdate=!0),_e?Ae(b.depthTexture,0):we(b.depthTexture,0);const Fe=Ee.__webglTexture,ve=be(b),xe=_e?s.TEXTURE_CUBE_MAP_POSITIVE_X+K:s.TEXTURE_2D,Ie=b.depthTexture.format===ns?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===rs)ge(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ie,xe,Fe,0,ve):s.framebufferTexture2D(s.FRAMEBUFFER,Ie,xe,Fe,0);else if(b.depthTexture.format===ns)ge(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ie,xe,Fe,0,ve):s.framebufferTexture2D(s.FRAMEBUFFER,Ie,xe,Fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Zt(L){const b=r.get(L),K=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const _e=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),_e){const Ee=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,_e.removeEventListener("dispose",Ee)};_e.addEventListener("dispose",Ee),b.__depthDisposeCallback=Ee}b.__boundDepthTexture=_e}if(L.depthTexture&&!b.__autoAllocateDepthBuffer)if(K)for(let _e=0;_e<6;_e++)kt(b.__webglFramebuffer[_e],L,_e);else L.texture.mipmaps.length>0?kt(b.__webglFramebuffer[0],L,0):kt(b.__webglFramebuffer,L,0);else if(K){b.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[_e]),b.__webglDepthbuffer[_e]===void 0)b.__webglDepthbuffer[_e]=s.createRenderbuffer(),Sn(b.__webglDepthbuffer[_e],L,!1);else{const Ee=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,De=b.__webglDepthbuffer[_e];s.bindRenderbuffer(s.RENDERBUFFER,De),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ee,s.RENDERBUFFER,De)}}else if(L.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Sn(b.__webglDepthbuffer,L,!1);else{const Ee=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,De=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,De),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ee,s.RENDERBUFFER,De)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Mt(L,b,K){const _e=r.get(L);b!==void 0&&Lt(_e.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&Zt(L)}function Xt(L){const b=L.texture,K=r.get(L),_e=r.get(b);L.addEventListener("dispose",$),Y(L);const Ee=L.textures,De=L.isWebGLCubeRenderTarget===!0,Fe=Ee.length>1;if(Fe||(_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture()),_e.__version=b.version,u.memory.textures++),De){K.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(b.mipmaps.length>0){K.__webglFramebuffer[ve]=[];for(let xe=0;xe<b.mipmaps.length;xe++)K.__webglFramebuffer[ve][xe]=s.createFramebuffer()}else K.__webglFramebuffer[ve]=s.createFramebuffer()}else{if(b.mipmaps.length>0){K.__webglFramebuffer=[];for(let ve=0;ve<b.mipmaps.length;ve++)K.__webglFramebuffer[ve]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(Fe)for(let ve=0,xe=Ee.length;ve<xe;ve++){const Ie=r.get(Ee[ve]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=s.createTexture(),u.memory.textures++)}if(L.samples>0&&ge(L)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ve=0;ve<Ee.length;ve++){const xe=Ee[ve];K.__webglColorRenderbuffer[ve]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[ve]);const Ie=l.convert(xe.format,xe.colorSpace),z=l.convert(xe.type),ye=I(xe.internalFormat,Ie,z,xe.normalized,xe.colorSpace,L.isXRRenderTarget===!0),G=be(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,G,ye,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,K.__webglColorRenderbuffer[ve])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),Sn(K.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(De){t.bindTexture(s.TEXTURE_CUBE_MAP,_e.__webglTexture),ot(s.TEXTURE_CUBE_MAP,b);for(let ve=0;ve<6;ve++)if(b.mipmaps.length>0)for(let xe=0;xe<b.mipmaps.length;xe++)Lt(K.__webglFramebuffer[ve][xe],L,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,xe);else Lt(K.__webglFramebuffer[ve],L,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);F(b)?P(s.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}else if(Fe){for(let ve=0,xe=Ee.length;ve<xe;ve++){const Ie=Ee[ve],z=r.get(Ie);let ye=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ye=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ye,z.__webglTexture),ot(ye,Ie),Lt(K.__webglFramebuffer,L,Ie,s.COLOR_ATTACHMENT0+ve,ye,0),F(Ie)&&P(ye)}t.unbindTexture()}else{let ve=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ve=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ve,_e.__webglTexture),ot(ve,b),b.mipmaps.length>0)for(let xe=0;xe<b.mipmaps.length;xe++)Lt(K.__webglFramebuffer[xe],L,b,s.COLOR_ATTACHMENT0,ve,xe);else Lt(K.__webglFramebuffer,L,b,s.COLOR_ATTACHMENT0,ve,0);F(b)?P(ve):b.mipmaps.length>0&&s.texParameteri(ve,s.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}L.depthBuffer&&Zt(L)}function j(L){const b=L.textures;for(let K=0,_e=b.length;K<_e;K++){const Ee=b[K];if(F(Ee)&&Ee.mipmapsAutoUpdate===!0){const De=O(L),Fe=r.get(Ee).__webglTexture;t.bindTexture(De,Fe),P(De),t.unbindTexture()}}}const _t=[];function re(L){if(L.samples>0){if(ge(L)===!1){const b=L.textures,K=L.width,_e=L.height;let Ee=s.COLOR_BUFFER_BIT;const De=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Fe=r.get(L),ve=b.length>1;if(ve)for(let Ie=0;Ie<b.length;Ie++)t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Ie=0;Ie<b.length;Ie++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Ee|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Ee|=s.STENCIL_BUFFER_BIT)),ve){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Fe.__webglColorRenderbuffer[Ie]);const z=r.get(b[Ie]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,z,0)}s.blitFramebuffer(0,0,K,_e,0,0,K,_e,Ee,s.NEAREST),f===!0&&(_t.length=0,_t.push(s.COLOR_ATTACHMENT0+Ie),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&_t.push(De),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,_t))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ve)for(let Ie=0;Ie<b.length;Ie++){t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,Fe.__webglColorRenderbuffer[Ie]);const z=r.get(b[Ie]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,z,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&f){const b=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function be(L){return Math.min(o.maxSamples,L.samples)}function ge(L){const b=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ye(L){const b=u.render.frame;_.get(L)!==b&&(_.set(L,b),L.update())}function Te(L,b){const K=L.colorSpace,_e=L.format,Ee=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||K!==vc&&K!==es&&(Dt.getTransfer(K)===Yt?(_e!==ir||Ee!==yi)&&pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ft("WebGLTextures: Unsupported texture color space:",K)),b}function We(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=Oe,this.resetTextureUnits=Q,this.getTextureUnits=U,this.setTextureUnits=se,this.setTexture2D=we,this.setTexture2DArray=Ce,this.setTexture3D=He,this.setTextureCube=Ae,this.rebindTextures=Mt,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=Zt,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=ge,this.dispose=he}function bE(s,e){function t(r,o=es){let l;const u=Dt.getTransfer(o);if(r===yi)return s.UNSIGNED_BYTE;if(r===jd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Xd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===fg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===pg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===hg)return s.BYTE;if(r===dg)return s.SHORT;if(r===Eo)return s.UNSIGNED_SHORT;if(r===Wd)return s.INT;if(r===sr)return s.UNSIGNED_INT;if(r===nr)return s.FLOAT;if(r===ar)return s.HALF_FLOAT;if(r===mg)return s.ALPHA;if(r===gg)return s.RGB;if(r===ir)return s.RGBA;if(r===rs)return s.DEPTH_COMPONENT;if(r===ns)return s.DEPTH_STENCIL;if(r===vg)return s.RED;if(r===Kd)return s.RED_INTEGER;if(r===ws)return s.RG;if(r===Yd)return s.RG_INTEGER;if(r===qd)return s.RGBA_INTEGER;if(r===cc||r===uc||r===hc||r===dc)if(u===Yt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===cc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===uc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===hc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===dc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===cc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===uc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===hc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===dc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===rd||r===sd||r===ad||r===od)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===rd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===sd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ad)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===od)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ld||r===cd||r===ud||r===hd||r===dd||r===mc||r===fd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===ld||r===cd)return u===Yt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===ud)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===hd)return l.COMPRESSED_R11_EAC;if(r===dd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===mc)return l.COMPRESSED_RG11_EAC;if(r===fd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===pd||r===md||r===gd||r===vd||r===_d||r===xd||r===yd||r===Sd||r===Md||r===Td||r===Ed||r===wd||r===Ad||r===Cd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===pd)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===md)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===gd)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===vd)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===_d)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===xd)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===yd)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Sd)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Md)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Td)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ed)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===wd)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ad)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Cd)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===bd||r===Rd||r===Nd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===bd)return u===Yt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Rd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Nd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Pd||r===Dd||r===gc||r===Ld)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Pd)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Dd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===gc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ld)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Sa?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const RE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,NE=`
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

}`;class PE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Dg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new As({vertexShader:RE,fragmentShader:NE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ot(new Hi(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DE extends os{constructor(e,t){super();const r=this;let o=null,l=1,u=null,d="local-floor",f=1,p=null,_=null,M=null,v=null,S=null,w=null;const R=typeof XRWebGLBinding<"u",y=new PE,x={},D=t.getContextAttributes();let F=null,P=null;const O=[],I=[],T=new Xe;let E=null,Y=null;const B=new Vi;B.viewport=new dn;const V=new Vi;V.viewport=new dn;const $=[B,V],te=new H1;let H=null,he=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let we=O[ce];return we===void 0&&(we=new Th,O[ce]=we),we.getTargetRaySpace()},this.getControllerGrip=function(ce){let we=O[ce];return we===void 0&&(we=new Th,O[ce]=we),we.getGripSpace()},this.getHand=function(ce){let we=O[ce];return we===void 0&&(we=new Th,O[ce]=we),we.getHandSpace()};function le(ce){const we=I.indexOf(ce.inputSource);if(we===-1)return;const Ce=O[we];Ce!==void 0&&(Ce.update(ce.inputSource,ce.frame,p||u),Ce.dispatchEvent({type:ce.type,data:ce.inputSource}))}function ee(){o.removeEventListener("select",le),o.removeEventListener("selectstart",le),o.removeEventListener("selectend",le),o.removeEventListener("squeeze",le),o.removeEventListener("squeezestart",le),o.removeEventListener("squeezeend",le),o.removeEventListener("end",ee),o.removeEventListener("inputsourceschange",ne);for(let ce=0;ce<O.length;ce++){const we=I[ce];we!==null&&(I[ce]=null,O[ce].disconnect(we))}H=null,he=null,y.reset();for(const ce in x)delete x[ce];if(e.setRenderTarget(F),S=null,v=null,M=null,o=null,P=null,Oe.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(T.width,T.height,!1),Y!==null){const ce=Y.camera;ce.fov=Y.fov,ce.zoom=Y.zoom,ce.updateProjectionMatrix(),Y=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ce){l=ce,r.isPresenting===!0&&pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){d=ce,r.isPresenting===!0&&pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(ce){p=ce},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return M===null&&R&&(M=new XRWebGLBinding(o,t)),M},this.getFrame=function(){return w},this.getSession=function(){return o},this.setSession=async function(ce){if(o=ce,o!==null){if(F=e.getRenderTarget(),o.addEventListener("select",le),o.addEventListener("selectstart",le),o.addEventListener("selectend",le),o.addEventListener("squeeze",le),o.addEventListener("squeezestart",le),o.addEventListener("squeezeend",le),o.addEventListener("end",ee),o.addEventListener("inputsourceschange",ne),D.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(T),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,He=null,Ae=null;D.depth&&(Ae=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ce=D.stencil?ns:rs,He=D.stencil?Sa:sr);const Ke={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:l};M=this.getBinding(),v=M.createProjectionLayer(Ke),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),P=new rr(v.textureWidth,v.textureHeight,{format:ir,type:yi,depthTexture:new Ma(v.textureWidth,v.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{const Ce={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,Ce),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),P=new rr(S.framebufferWidth,S.framebufferHeight,{format:ir,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1,storeMultisampledDepthBuffer:S.ignoreDepthValues===!1,storeMultisampledStencilBuffer:S.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(f),p=null,u=await o.requestReferenceSpace(d),Oe.setContext(o),Oe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ne(ce){for(let we=0;we<ce.removed.length;we++){const Ce=ce.removed[we],He=I.indexOf(Ce);He>=0&&(I[He]=null,O[He].disconnect(Ce))}for(let we=0;we<ce.added.length;we++){const Ce=ce.added[we];let He=I.indexOf(Ce);if(He===-1){for(let Ke=0;Ke<O.length;Ke++)if(Ke>=I.length){I.push(Ce),He=Ke;break}else if(I[Ke]===null){I[Ke]=Ce,He=Ke;break}if(He===-1)break}const Ae=O[He];Ae&&Ae.connect(Ce)}}function J(ce,we){we===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(we.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(o===null)return;let we=ce.near,Ce=ce.far;y.texture!==null&&(y.depthNear>0&&(we=y.depthNear),y.depthFar>0&&(Ce=y.depthFar)),te.near=V.near=B.near=we,te.far=V.far=B.far=Ce,(H!==te.near||he!==te.far)&&(o.updateRenderState({depthNear:te.near,depthFar:te.far}),H=te.near,he=te.far),te.layers.mask=ce.layers.mask|6,B.layers.mask=te.layers.mask&-5,V.layers.mask=te.layers.mask&-3;const He=ce.parent,Ae=te.cameras;J(te,He);for(let Ke=0;Ke<Ae.length;Ke++)J(Ae[Ke],He);te.projectionMatrix.copy(B.projectionMatrix),te.projectionMatrixInverse.copy(B.projectionMatrixInverse),Y===null&&ce.isPerspectiveCamera&&(Y={camera:ce,fov:ce.fov,zoom:ce.zoom}),Q(ce,te,He)};function Q(ce,we,Ce){Ce===null?ce.matrix.copy(we.matrixWorld):(ce.matrix.copy(Ce.matrixWorld),ce.matrix.invert(),ce.matrix.multiply(we.matrixWorld)),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.updateMatrixWorld(!0),ce.projectionMatrix.copy(we.projectionMatrix),ce.projectionMatrixInverse.copy(we.projectionMatrixInverse),ce.isPerspectiveCamera&&(ce.fov=Ud*2*Math.atan(1/ce.projectionMatrix.elements[5]),ce.zoom=1)}this.getCamera=function(){return te},this.getFoveation=function(){if(!(v===null&&S===null))return f},this.setFoveation=function(ce){f=ce,v!==null&&(v.fixedFoveation=ce),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ce)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(te)},this.getCameraTexture=function(ce){return x[ce]};let U=null;function se(ce,we){if(_=we.getViewerPose(p||u),w=we,_!==null){const Ce=_.views;S!==null&&(e.setRenderTargetFramebuffer(P,S.framebuffer),e.setRenderTarget(P));let He=!1;Ce.length!==te.cameras.length&&(te.cameras.length=0,He=!0);for(let lt=0;lt<Ce.length;lt++){const ot=Ce[lt];let bt=null;if(S!==null)bt=S.getViewport(ot);else{const nn=M.getViewSubImage(v,ot);bt=nn.viewport,lt===0&&(e.setRenderTargetTextures(P,nn.colorTexture,nn.depthStencilTexture),e.setRenderTarget(P))}let gt=$[lt];gt===void 0&&(gt=new Vi,gt.layers.enable(lt),gt.viewport=new dn,$[lt]=gt),gt.matrix.fromArray(ot.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(ot.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(bt.x,bt.y,bt.width,bt.height),lt===0&&(te.matrix.copy(gt.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale)),He===!0&&te.cameras.push(gt)}const Ae=o.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){M=r.getBinding();const lt=M.getDepthInformation(Ce[0]);lt&&lt.isValid&&lt.texture&&y.init(lt,o.renderState)}if(Ae&&Ae.includes("camera-access")&&R){e.state.unbindTexture(),M=r.getBinding();for(let lt=0;lt<Ce.length;lt++){const ot=Ce[lt].camera;if(ot){let bt=x[ot];bt||(bt=new Dg,x[ot]=bt);const gt=M.getCameraImage(ot);bt.sourceTexture=gt}}}}for(let Ce=0;Ce<O.length;Ce++){const He=I[Ce],Ae=O[Ce];He!==null&&Ae!==void 0&&Ae.update(He,we,p||u)}U&&U(ce,we),we.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:we}),w=null}const Oe=new Bg;Oe.setAnimationLoop(se),this.setAnimationLoop=function(ce){U=ce},this.dispose=function(){}}}const LE=new en,qg=new vt;qg.set(-1,0,0,0,1,0,0,0,1);function IE(s,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,Og(s)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function o(y,x,D,F,P){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?l(y,x):x.isMeshLambertMaterial?(l(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(l(y,x),M(y,x)):x.isMeshPhongMaterial?(l(y,x),_(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(l(y,x),v(y,x),x.isMeshPhysicalMaterial&&S(y,x,P)):x.isMeshMatcapMaterial?(l(y,x),w(y,x)):x.isMeshDepthMaterial?l(y,x):x.isMeshDistanceMaterial?(l(y,x),R(y,x)):x.isMeshNormalMaterial?l(y,x):x.isLineBasicMaterial?(u(y,x),x.isLineDashedMaterial&&d(y,x)):x.isPointsMaterial?f(y,x,D,F):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===fi&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===fi&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const D=e.get(x),F=D.envMap,P=D.envMapRotation;F&&(y.envMap.value=F,y.envMapRotation.value.setFromMatrix4(LE.makeRotationFromEuler(P)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(qg),y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function u(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function d(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function f(y,x,D,F){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*D,y.scale.value=F*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function _(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function M(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function v(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,D){y.ior.value=x.ior,x.diffuseRoughness>0&&(y.diffuseRoughness.value=x.diffuseRoughness,x.diffuseRoughnessMap&&(y.diffuseRoughnessMap.value=x.diffuseRoughnessMap,t(x.diffuseRoughnessMap,y.diffuseRoughnessMapTransform))),x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===fi&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.retroreflectivity>0&&(y.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessMinimum,y.iridescenceThicknessMaximum.value=x.iridescenceThicknessMaximum,x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function w(y,x){x.matcap&&(y.matcap.value=x.matcap)}function R(y,x){const D=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function UE(s,e,t,r){let o={},l={};function u(D,F){const P=F.program;r.uniformBlockBinding(D,P,o[D.id])}function d(D,F){let P=o[D.id];P===void 0&&(w(D),P=f(D),o[D.id]=P,D.addEventListener("dispose",y));const O=F.program;r.updateUBOMapping(D,O);const I=e.render.frame;l[D.id]!==I&&(p(D),l[D.id]=I)}function f(D){const F=s.createBuffer(),P=D.__size,O=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,F),s.bufferData(s.UNIFORM_BUFFER,P,O),s.bindBuffer(s.UNIFORM_BUFFER,null),F}function p(D){const F=o[D.id],P=D.uniforms,O=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,F);for(let I=0,T=P.length;I<T;I++){const E=P[I];if(Array.isArray(E))for(let Y=0,B=E.length;Y<B;Y++)_(E[Y],I,Y,O);else _(E,I,0,O)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function _(D,F,P,O){if(v(D,F,P,O)===!0){const I=D.__offset,T=D.value;if(Array.isArray(T)){let E=0;for(let Y=0;Y<T.length;Y++){const B=T[Y],V=R(B,!0);M(B,D.__data,E),E+=V.storage/Float32Array.BYTES_PER_ELEMENT}}else M(T,D.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,I,D.__data)}}function M(D,F,P){typeof D=="number"||typeof D=="boolean"?F[P]=D:D.isMatrix3?(F[P]=D.elements[0],F[P+1]=D.elements[1],F[P+2]=D.elements[2],F[P+3]=0,F[P+4]=D.elements[3],F[P+5]=D.elements[4],F[P+6]=D.elements[5],F[P+7]=0,F[P+8]=D.elements[6],F[P+9]=D.elements[7],F[P+10]=D.elements[8],F[P+11]=0):ArrayBuffer.isView(D)?F.set(D.subarray(0,F.length-P),P):D.toArray(F,P)}function v(D,F,P,O){const I=D.value,T=F+"_"+P;if(Array.isArray(I)){O[T]===void 0&&(O[T]=[]);const E=O[T];let Y=!1;for(let B=0;B<I.length;B++)S(I[B],E,B)===!0&&(Y=!0);return Y}return S(I,O,T)}function S(D,F,P){if(F[P]===void 0)return typeof D=="number"||typeof D=="boolean"?F[P]=D:ArrayBuffer.isView(D)?F[P]=D.slice():F[P]=D.clone(),!0;{const O=F[P];if(typeof D=="number"||typeof D=="boolean"){if(O!==D)return F[P]=D,!0}else{if(ArrayBuffer.isView(D))return!0;if(O.equals(D)===!1)return O.copy(D),!0}}return!1}function w(D){const F=D.uniforms;let P=0;const O=16;for(let T=0,E=F.length;T<E;T++){const Y=Array.isArray(F[T])?F[T]:[F[T]];for(let B=0,V=Y.length;B<V;B++){const $=Y[B],te=Array.isArray($.value)?$.value:[$.value],H=Array.isArray(F[T])||Array.isArray($.value);let he=P;for(let ee=0,ne=te.length;ee<ne;ee++){const J=te[ee],Q=R(J,H),U=P%O,se=U%Q.boundary,Oe=U+se;P+=se,Oe!==0&&O-Oe<Q.storage&&(P+=O-Oe),ee===0&&(he=P),P+=Q.storage}const le=$.type==="int"?Int32Array:$.type==="uint"?Uint32Array:Float32Array;$.__data=new le((P-he)/Float32Array.BYTES_PER_ELEMENT),$.__offset=he}}const I=P%O;return I>0&&(P+=O-I),D.__size=P,D.__cache={},this}function R(D,F){const P={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(P.boundary=4,P.storage=4):D.isVector2?(P.boundary=8,P.storage=8):D.isVector3||D.isColor?(P.boundary=16,P.storage=12):D.isVector4?(P.boundary=16,P.storage=16):D.isMatrix3?(P.boundary=16,P.storage=48):D.isMatrix4?(P.boundary=16,P.storage=64):D.isTexture?pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(D)?(P.boundary=16,P.storage=D.byteLength):pt("WebGLRenderer: Unsupported uniform value type.",D),F===!0&&(P.boundary=16,P.storage=Math.ceil(P.storage/16)*16),P}function y(D){const F=D.target;F.removeEventListener("dispose",y),s.deleteBuffer(o[F.id]),delete o[F.id],delete l[F.id]}function x(){for(const D in o)s.deleteBuffer(o[D]);o={},l={}}return{bind:u,update:d,dispose:x}}const OE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let er=null;function FE(){return er===null&&(er=new h1(OE,16,16,ws,ar),er.name="DFG_LUT",er.minFilter=ii,er.magFilter=ii,er.wrapS=Er,er.wrapT=Er,er.generateMipmaps=!1,er.needsUpdate=!0),er}class kE{constructor(e={}){const{canvas:t=Fx(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:M=!1,reversedDepthBuffer:v=!1,outputBufferType:S=yi}=e;this.isWebGLRenderer=!0;let w;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=r.getContextAttributes().alpha}else w=u;const R=S,y=new Set([qd,Yd,Kd]),x=new Set([yi,sr,Eo,Sa,jd,Xd]),D=new Uint32Array(4),F=new Int32Array(4),P={textures:[],min:[],max:[],resolution:[]};let O=null,I=null;const T=[],E=[];let Y=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ar,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let V=!1,$=null,te=null,H=null,he=null;this._outputColorSpace=Ni;let le=0,ee=0,ne=null,J=-1,Q=null;const U=new dn,se=new dn;let Oe=null;const ce=new Et(0);let we=0,Ce=t.width,He=t.height,Ae=1,Ke=null,it=null;const lt=new dn(0,0,Ce,He),ot=new dn(0,0,Ce,He);let bt=!1;const gt=new Ao,nn=new Qd;let jt=!1,cn=!1;const Lt=new en,Sn=new A,kt=new dn,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Mt=!1;function Xt(){return ne===null?Ae:1}let j=r;function _t(N,W){return t.getContext(N,W)}let re,be,ge,Ye,Te,We,L,b,K,_e,Ee,De,Fe,ve,xe,Ie,z,ye,G,q,Se,ue,Me;try{const N={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:f,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:M};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vd}`),t.addEventListener("webglcontextlost",Ue,!1),t.addEventListener("webglcontextrestored",Qe,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),j===null){const W="webgl2";if(j=_t(W,N),j===null)throw _t(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ve()}catch(N){throw t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),Ft("WebGLRenderer: "+N.message),N}function Ve(){re=new HM(j),re.init(),Se=new bE(j,re),be=new NM(j,re,e,Se),ge=new AE(j,re),be.reversedDepthBuffer&&v&&ge.buffers.depth.setReversed(!0),te=j.createFramebuffer(),H=j.createFramebuffer(),he=j.createFramebuffer(),Ye=new WM(j),Te=new dE,We=new CE(j,re,ge,Te,be,Se,Ye),L=new zM(B),b=new X1(j),ue=new bM(j,b),K=new VM(j,b,Ye,ue),_e=new XM(j,K,b,ue,Ye),ye=new jM(j,be,We),xe=new PM(Te),Ee=new hE(B,L,re,be,ue,xe),De=new IE(B,Te),Fe=new pE,ve=new yE(re),z=new CM(B,L,ge,_e,w,f),Ie=new wE(B,_e,be),Me=new UE(j,Ye,be,ge),G=new RM(j,re,Ye),q=new GM(j,re,Ye),Ye.programs=Ee.programs,B.capabilities=be,B.extensions=re,B.properties=Te,B.renderLists=Fe,B.shadowMap=Ie,B.state=ge,B.info=Ye}R!==yi&&(Y=new YM(R,t.width,t.height,d,o,l));const me=new DE(B,j);this.xr=me,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const N=re.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=re.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return Ae},this.setPixelRatio=function(N){N!==void 0&&(Ae=N,this.setSize(Ce,He,!1))},this.getSize=function(N){return N.set(Ce,He)},this.setSize=function(N,W,de=!0){if(me.isPresenting){pt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ce=N,He=W,t.width=Math.floor(N*Ae),t.height=Math.floor(W*Ae),de===!0&&(t.style.width=N+"px",t.style.height=W+"px"),Y!==null&&Y.setSize(t.width,t.height),this.setViewport(0,0,N,W)},this.getDrawingBufferSize=function(N){return N.set(Ce*Ae,He*Ae).floor()},this.setDrawingBufferSize=function(N,W,de){Ce=N,He=W,Ae=de,t.width=Math.floor(N*de),t.height=Math.floor(W*de),this.setViewport(0,0,N,W)},this.setEffects=function(N){if(R===yi){Ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let W=0;W<N.length;W++)if(N[W].isOutputPass===!0){pt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Y.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(U)},this.getViewport=function(N){return N.copy(lt)},this.setViewport=function(N,W,de,ae){N.isVector4?lt.set(N.x,N.y,N.z,N.w):lt.set(N,W,de,ae),ge.viewport(U.copy(lt).multiplyScalar(Xt()).round())},this.getScissor=function(N){return N.copy(ot)},this.setScissor=function(N,W,de,ae){N.isVector4?ot.set(N.x,N.y,N.z,N.w):ot.set(N,W,de,ae),ge.scissor(se.copy(ot).multiplyScalar(Xt()).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(N){ge.setScissorTest(bt=N)},this.setOpaqueSort=function(N){Ke=N},this.setTransparentSort=function(N){it=N},this.getClearColor=function(N){return N.copy(z.getClearColor())},this.setClearColor=function(){z.setClearColor(...arguments)},this.getClearAlpha=function(){return z.getClearAlpha()},this.setClearAlpha=function(){z.setClearAlpha(...arguments)},this.clear=function(N=!0,W=!0,de=!0){let ae=0;if(N){let ie=!1;if(ne!==null){const ze=ne.texture.format;ie=y.has(ze)}if(ie){const ze=ne.texture.type,$e=x.has(ze),Be=z.getClearColor(),Ge=z.getClearAlpha(),Je=Be.r,dt=Be.g,yt=Be.b;$e?(D[0]=Je,D[1]=dt,D[2]=yt,D[3]=Ge,j.clearBufferuiv(j.COLOR,0,D)):(F[0]=Je,F[1]=dt,F[2]=yt,F[3]=Ge,j.clearBufferiv(j.COLOR,0,F))}else ae|=j.COLOR_BUFFER_BIT}W&&(ae|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),de&&(ae|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&j.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),$=N},this.dispose=function(){t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),z.dispose(),Fe.dispose(),ve.dispose(),We.dispose(),Te.dispose(),L.dispose(),_e.dispose(),K.dispose(),ue.dispose(),Me.dispose(),Ee.dispose(),me.dispose(),me.removeEventListener("sessionstart",Bt),me.removeEventListener("sessionend",Qt),zt.stop()};function Ue(N){N.preventDefault(),yc("WebGLRenderer: Context Lost."),V=!0}function Qe(){yc("WebGLRenderer: Context Restored."),V=!1;const N=Ye.autoReset,W=Ie.enabled,de=Ie.autoUpdate,ae=Ie.needsUpdate,ie=Ie.type;Ve(),Ye.autoReset=N,Ie.enabled=W,Ie.autoUpdate=de,Ie.needsUpdate=ae,Ie.type=ie}function Pe(N){Ft("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function ct(N){const W=N.target;W.removeEventListener("dispose",ct),xt(W)}function xt(N){wt(N),Te.remove(N)}function wt(N){const W=Te.get(N).programs;W!==void 0&&(W.forEach(function(de){Ee.releaseProgram(de)}),N.isShaderMaterial&&Ee.releaseShaderCache(N))}this.renderBufferDirect=function(N,W,de,ae,ie,ze){W===null&&(W=Zt);const $e=ie.isMesh&&ie.matrixWorld.determinantAffine()<0,Be=Vn(N,W,de,ae,ie);ge.setMaterial(ae,$e);let Ge=de.index,Je=1;if(ae.wireframe===!0){if(Ge=K.getWireframeAttribute(de),Ge===void 0)return;Je=2}const dt=de.drawRange,yt=de.attributes.position;let et=dt.start*Je,At=(dt.start+dt.count)*Je;ze!==null&&(et=Math.max(et,ze.start*Je),At=Math.min(At,(ze.start+ze.count)*Je)),Ge!==null?(et=Math.max(et,0),At=Math.min(At,Ge.count)):yt!=null&&(et=Math.max(et,0),At=Math.min(At,yt.count));const on=At-et;if(on<0||on===1/0)return;ue.setup(ie,ae,Be,de,Ge);let Kt,Gt=G;if(Ge!==null&&(Kt=b.get(Ge),Gt=q,Gt.setIndex(Kt)),ie.isMesh)ae.wireframe===!0?(ge.setLineWidth(ae.wireframeLinewidth*Xt()),Gt.setMode(j.LINES)):Gt.setMode(j.TRIANGLES);else if(ie.isLine){let fn=ae.linewidth;fn===void 0&&(fn=1),ge.setLineWidth(fn*Xt()),ie.isLineSegments?Gt.setMode(j.LINES):ie.isLineLoop?Gt.setMode(j.LINE_LOOP):Gt.setMode(j.LINE_STRIP)}else ie.isPoints?Gt.setMode(j.POINTS):ie.isSprite&&Gt.setMode(j.TRIANGLES);if(ie.isBatchedMesh)if(re.get("WEBGL_multi_draw"))Gt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const fn=ie._multiDrawStarts,tt=ie._multiDrawCounts,Tn=ie._multiDrawCount,st=Ge?b.get(Ge).bytesPerElement:1,Ki=Te.get(ae).currentProgram.getUniforms();for(let En=0;En<Tn;En++)Ki.setValue(j,"_gl_DrawID",En),Gt.render(fn[En]/st,tt[En])}else if(ie.isInstancedMesh)Gt.renderInstances(et,on,ie.count);else if(de.isInstancedBufferGeometry){const fn=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,tt=Math.min(de.instanceCount,fn);Gt.renderInstances(et,on,tt)}else Gt.render(et,on)};function ft(N,W,de,ae){$!==null&&N.isNodeMaterial&&$.setObject(ae,N),jt===!0&&xe.setState(N,de,!1),N.transparent===!0&&N.side===Gi&&N.forceSinglePass===!1?(N.side=fi,N.needsUpdate=!0,si(N,W,ae),N.side=Es,N.needsUpdate=!0,si(N,W,ae),N.side=Gi):si(N,W,ae)}this.compile=function(N,W,de=null){de===null&&(de=N),$!==null&&$.renderStart(N,W,de),I=ve.get(de),I.init(W),E.push(I),de.traverseVisible(function(ie){ie.isLight&&ie.layers.test(W.layers)&&(I.pushLight(ie),ie.castShadow&&I.pushShadow(ie))}),N!==de&&N.traverseVisible(function(ie){ie.isLight&&ie.layers.test(W.layers)&&(I.pushLight(ie),ie.castShadow&&I.pushShadow(ie))}),I.setupLights(),$!==null&&$.updateLights(I.state.lightsArray),cn=this.localClippingEnabled,jt=xe.init(this.clippingPlanes,cn),jt===!0&&xe.setGlobalState(this.clippingPlanes,W),$!==null&&Ie.render(I.state.shadowsArray,de,W);const ae=new Set;return N.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const ze=ie.material;if(ze)if(Array.isArray(ze))for(let $e=0;$e<ze.length;$e++){const Be=ze[$e];ft(Be,de,W,ie),ae.add(Be)}else ft(ze,de,W,ie),ae.add(ze)}),I=E.pop(),$!==null&&$.renderEnd(),ae},this.compileAsync=function(N,W,de=null){const ae=this.compile(N,W,de);return new Promise(ie=>{function ze(){if(ae.forEach(function($e){const Ge=Te.get($e).currentProgram;(Ge===void 0||Ge.isReady())&&ae.delete($e)}),ae.size===0){ie(N);return}setTimeout(ze,10)}re.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let Nt=null;function Pn(N){Nt&&Nt(N)}function Bt(){zt.stop()}function Qt(){zt.start()}const zt=new Bg;zt.setAnimationLoop(Pn),typeof self<"u"&&zt.setContext(self),this.setAnimationLoop=function(N){Nt=N,me.setAnimationLoop(N),N===null?zt.stop():zt.start()},me.addEventListener("sessionstart",Bt),me.addEventListener("sessionend",Qt),this.render=function(N,W){if(W!==void 0&&W.isCamera!==!0){Ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;$!==null&&$.renderStart(N,W);const de=me.enabled===!0&&me.isPresenting===!0,ae=Y!==null&&(ne===null||de)&&Y.begin(B,ne);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(Y===null||Y.isCompositing()===!1)&&(me.cameraAutoUpdate===!0&&me.updateCamera(W),W=me.getCamera()),N.isScene===!0&&N.onBeforeRender(B,N,W,ne),I=ve.get(N,E.length),I.init(W),I.state.textureUnits=We.getTextureUnits(),E.push(I),Lt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),W.isArrayCamera?nn.setFromArrayCamera(W):gt.setFromProjectionMatrix(Lt,Wi,W.reversedDepth),cn=this.localClippingEnabled,jt=xe.init(this.clippingPlanes,cn),O=Fe.get(N,T.length),O.init(),T.push(O),this.info.render.frame++,me.enabled===!0&&me.isPresenting===!0){const $e=B.xr.getDepthSensingMesh();$e!==null&&vn($e,W,-1/0,B.sortObjects)}vn(N,W,0,B.sortObjects),O.finish(),$!==null&&$.updateLights(I.state.lightsArray),B.sortObjects===!0&&O.sort(Ke,it),Mt=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,Mt&&z.addToRenderList(O,N),this.info.autoReset===!0&&this.info.reset(),jt===!0&&xe.beginShadows();const ie=I.state.shadowsArray;if(Ie.render(ie,N,W),jt===!0&&xe.endShadows(),(ae&&Y.hasRenderPass())===!1){const $e=O.opaque,Be=O.transmissive;if(I.setupLights(),W.isArrayCamera){const Ge=W.cameras;if(Be.length>0)for(let Je=0,dt=Ge.length;Je<dt;Je++){const yt=Ge[Je];Dn($e,Be,N,yt)}Mt&&z.render(N);for(let Je=0,dt=Ge.length;Je<dt;Je++){const yt=Ge[Je];ri(O,N,yt,yt.viewport)}}else Be.length>0&&Dn($e,Be,N,W),Mt&&z.render(N),ri(O,N,W)}ne!==null&&ee===0&&(We.updateMultisampleRenderTarget(ne),We.updateRenderTargetMipmap(ne)),ae&&Y.end(B),N.isScene===!0&&N.onAfterRender(B,N,W),ue.resetDefaultState(),J=-1,Q=null,E.pop(),E.length>0?(I=E[E.length-1],We.setTextureUnits(I.state.textureUnits),jt===!0&&xe.setGlobalState(B.clippingPlanes,I.state.camera)):I=null,T.pop(),T.length>0?O=T[T.length-1]:O=null,$!==null&&$.renderEnd()};function vn(N,W,de,ae){if(N.visible===!1)return;if(N.layers.test(W.layers)){if(N.isGroup)de=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(W);else if(N.isLight)I.pushLight(N),N.castShadow&&I.pushShadow(N);else if(N.isSprite){const $e=W.isArrayCamera?nn:gt;if(!N.frustumCulled||N.intersectsFrustum($e)){ae&&kt.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Lt);const Be=_e.update(N),Ge=N.material;Ge.visible&&O.push(N,Be,Ge,de,kt.z,null,W)}}else if(N.isMesh||N.isLine||N.isPoints){const $e=W.isArrayCamera?nn:gt;if(!N.frustumCulled||N.intersectsFrustum($e)){const Be=_e.update(N),Ge=N.material;if(ae&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),kt.copy(N.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),kt.copy(Be.boundingSphere.center)),kt.applyMatrix4(N.matrixWorld).applyMatrix4(Lt)),Array.isArray(Ge)){const Je=Be.groups;for(let dt=0,yt=Je.length;dt<yt;dt++){const et=Je[dt],At=Ge[et.materialIndex];At&&At.visible&&O.push(N,Be,At,de,kt.z,et,W)}}else Ge.visible&&O.push(N,Be,Ge,de,kt.z,null,W)}}}const ze=N.children;for(let $e=0,Be=ze.length;$e<Be;$e++)vn(ze[$e],W,de,ae)}function ri(N,W,de,ae){const{opaque:ie,transmissive:ze,transparent:$e}=N;I.setupLightsView(de),jt===!0&&xe.setGlobalState(B.clippingPlanes,de),ae&&ge.viewport(U.copy(ae)),ie.length>0&&Mn(ie,W,de),ze.length>0&&Mn(ze,W,de),$e.length>0&&Mn($e,W,de),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Dn(N,W,de,ae){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[ae.id]===void 0){const et=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[ae.id]=new rr(1,1,{generateMipmaps:!0,type:et?ar:yi,minFilter:ts,samples:Math.max(4,be.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Dt.workingColorSpace})}const ze=I.state.transmissionRenderTarget[ae.id],$e=ae.viewport||U;ze.setSize($e.z*B.transmissionResolutionScale,$e.w*B.transmissionResolutionScale);const Be=B.getRenderTarget(),Ge=B.getActiveCubeFace(),Je=B.getActiveMipmapLevel();B.setRenderTarget(ze),B.getClearColor(ce),we=B.getClearAlpha(),we<1&&B.setClearColor(16777215,.5),B.clear(),Mt&&z.render(de);const dt=B.toneMapping;B.toneMapping=Ar;const yt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),I.setupLightsView(ae),jt===!0&&xe.setGlobalState(B.clippingPlanes,ae),Mn(N,de,ae),We.updateMultisampleRenderTarget(ze),We.updateRenderTargetMipmap(ze),re.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let At=0,on=W.length;At<on;At++){const Kt=W[At],{object:Gt,geometry:fn,material:tt,group:Tn}=Kt;if(tt.side===Gi&&Gt.layers.test(ae.layers)){const st=tt.side;tt.side=fi,tt.needsUpdate=!0,_n(Gt,de,ae,fn,tt,Tn),tt.side=st,tt.needsUpdate=!0,et=!0}}et===!0&&(We.updateMultisampleRenderTarget(ze),We.updateRenderTargetMipmap(ze))}B.setRenderTarget(Be,Ge,Je),B.setClearColor(ce,we),yt!==void 0&&(ae.viewport=yt),B.toneMapping=dt}function Mn(N,W,de){const ae=W.isScene===!0?W.overrideMaterial:null;for(let ie=0,ze=N.length;ie<ze;ie++){const $e=N[ie],{object:Be,geometry:Ge,group:Je}=$e;let dt=$e.material;dt.allowOverride===!0&&ae!==null&&(dt=ae),Be.layers.test(de.layers)&&_n(Be,W,de,Ge,dt,Je)}}function _n(N,W,de,ae,ie,ze){$!==null&&ie.isNodeMaterial&&$.setObject(N,ie),N.onBeforeRender(B,W,de,ae,ie,ze),N.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),ie.onBeforeRender(B,W,de,ae,N,ze),ie.transparent===!0&&ie.side===Gi&&ie.forceSinglePass===!1?(ie.side=fi,ie.needsUpdate=!0,B.renderBufferDirect(de,W,ae,ie,N,ze),ie.side=Es,ie.needsUpdate=!0,B.renderBufferDirect(de,W,ae,ie,N,ze),ie.side=Gi):B.renderBufferDirect(de,W,ae,ie,N,ze),N.onAfterRender(B,W,de,ae,ie,ze)}function rn(N){let W=0;for(const de of N)de.texture!==null&&W++;return W}function si(N,W,de){W.isScene!==!0&&(W=Zt);const ae=Te.get(N),ie=I.state.lights,ze=I.state.shadowsArray,$e=ie.state.version,Be=Ee.getParameters(N,ie.state,ze,W,de,I.state.lightProbeGridArray),Ge=Ee.getProgramCacheKey(Be);let Je=ae.programs;ae.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?W.environment:null,ae.fog=W.fog;const dt=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;ae.envMap=L.get(N.envMap||ae.environment,dt),ae.envMapRotation=ae.environment!==null&&N.envMap===null?W.environmentRotation:N.envMapRotation,Je===void 0&&(N.addEventListener("dispose",ct),Je=new Map,ae.programs=Je,ae.programVariants=new Map);let yt=Je.get(Ge);if(yt!==void 0){if(ae.currentProgram===yt&&ae.lightsStateVersion===$e)return ji(N,Be),yt}else Be.uniforms=Ee.getUniforms(N),$!==null&&N.isNodeMaterial&&$.build(N,de,Be),N.onBeforeCompile(Be,B),yt=Ee.acquireProgram(Be,Ge),Je.set(Ge,yt),ae.uniforms=Be.uniforms;const et=ae.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(et.clippingPlanes=xe.uniform),ji(N,Be),ae.needsLights=Xi(N),ae.lightsStateVersion=$e,ae.needsLights&&(et.ambientLightColor.value=ie.state.ambient,et.lightProbe.value=ie.state.probe,et.sunLights.value=ie.state.sun,et.sunLightShadows.value=ie.state.sunShadow,et.directionalLights.value=ie.state.directional,et.directionalLightShadows.value=ie.state.directionalShadow,et.spotLights.value=ie.state.spot,et.spotLightShadows.value=ie.state.spotShadow,et.rectAreaLights.value=ie.state.rectArea,et.ltc_1.value=ie.state.rectAreaLTC1,et.ltc_2.value=ie.state.rectAreaLTC2,et.pointLights.value=ie.state.point,et.pointLightShadows.value=ie.state.pointShadow,et.hemisphereLights.value=ie.state.hemi,et.sunShadowMatrix.value=ie.state.sunShadowMatrix,et.sunShadowCascade.value=ie.state.sunShadowCascade,et.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,et.spotLightMatrix.value=ie.state.spotLightMatrix,et.spotLightMap.value=ie.state.spotLightMap,et.pointShadowMatrix.value=ie.state.pointShadowMatrix),ae.numLightProbeGrids=rn(I.state.lightProbeGridArray),ae.currentProgram=yt,ae.uniformsList=null,yt}function Mi(N,W,de,ae,ie){const ze=Te.get(N),$e=ze.currentProgram.id+","+ae+","+ie;let Be=ze.programVariants.get($e);return Be===void 0?(Be=si(N,W,de),ze.programVariants.set($e,Be)):(ze.currentProgram=Be,ze.uniformsList=null,ze.outputColorSpace=ae,ze.toneMapping=ie),Be}function It(N){if(N.uniformsList===null){const W=N.currentProgram.getUniforms();N.uniformsList=pc.seqWithValue(W.seq,N.uniforms)}return N.uniformsList}function ji(N,W){const de=Te.get(N);de.outputColorSpace=W.outputColorSpace,de.batching=W.batching,de.batchingColor=W.batchingColor,de.instancing=W.instancing,de.instancingColor=W.instancingColor,de.instancingMorph=W.instancingMorph,de.skinning=W.skinning,de.morphTargets=W.morphTargets,de.morphNormals=W.morphNormals,de.morphColors=W.morphColors,de.morphTargetsCount=W.morphTargetsCount,de.numClippingPlanes=W.numClippingPlanes,de.numIntersection=W.numClipIntersection,de.vertexAlphas=W.vertexAlphas,de.vertexTangents=W.vertexTangents,de.toneMapping=W.toneMapping}function Vn(N,W,de,ae,ie){W.isScene!==!0&&(W=Zt),We.resetTextureUnits();const ze=W.fog,$e=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?W.environment:null,Be=ne===null?B.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Dt.workingColorSpace,Ge=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,Je=L.get(ae.envMap||$e,Ge),dt=ae.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,yt=!!de.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),et=!!de.morphAttributes.position,At=!!de.morphAttributes.normal,on=!!de.morphAttributes.color;let Kt=Ar;ae.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Kt=B.toneMapping);const Gt=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,fn=Gt!==void 0?Gt.length:0,tt=Te.get(ae),Tn=I.state.lights;if(jt===!0&&(cn===!0||N!==Q)){const Ht=N===Q&&ae.id===J;xe.setState(ae,N,Ht)}let st=!1,Ki=!1;ae.version===tt.__version?tt.needsLights&&tt.lightsStateVersion!==Tn.state.version||ie.isBatchedMesh&&tt.batching===!1||!ie.isBatchedMesh&&tt.batching===!0||ie.isBatchedMesh&&tt.batchingColor===!0&&ie._colorsTexture===null||ie.isBatchedMesh&&tt.batchingColor===!1&&ie._colorsTexture!==null||ie.isInstancedMesh&&tt.instancing===!1||!ie.isInstancedMesh&&tt.instancing===!0||ie.isSkinnedMesh&&tt.skinning===!1||!ie.isSkinnedMesh&&tt.skinning===!0||ie.isInstancedMesh&&tt.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&tt.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&tt.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&tt.instancingMorph===!1&&ie.morphTexture!==null||tt.envMap!==Je||ae.fog===!0&&tt.fog!==ze||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==xe.numPlanes||tt.numIntersection!==xe.numIntersection)||tt.vertexAlphas!==dt||tt.vertexTangents!==yt||tt.morphTargets!==et||tt.morphNormals!==At||tt.morphColors!==on||tt.morphTargetsCount!==fn||tt.numLightProbeGrids!==rn(I.state.lightProbeGridArray)?st=!0:(tt.outputColorSpace!==Be||tt.toneMapping!==Kt)&&(Ki=!0):(st=!0,tt.__version=ae.version);let En=tt.currentProgram;(st===!0||Ki===!0)&&(En=Ki===!0?Mi(ae,W,ie,Be,Kt):si(ae,W,ie),$&&ae.isNodeMaterial&&$.onUpdateProgram(ae,En,tt));let Nr=!1,Pi=!1,Yi=!1;const Pt=En.getUniforms(),mn=tt.uniforms;if(ge.useProgram(En.program)&&(Nr=!0,Pi=!0,Yi=!0),ae.id!==J&&(J=ae.id,Pi=!0),Nr||Q!==N){ge.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),Pt.setValue(j,"projectionMatrix",N.projectionMatrix),Pt.setValue(j,"viewMatrix",N.matrixWorldInverse);const Jt=Pt.map.cameraPosition;Jt!==void 0&&Jt.setValue(j,Sn.setFromMatrixPosition(N.matrixWorld)),be.logarithmicDepthBuffer&&Pt.setValue(j,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Pt.setValue(j,"isOrthographic",N.isOrthographicCamera===!0),Q!==N&&(Q=N,Pi=!0,Yi=!0)}if(tt.needsLights&&(Tn.state.sunShadowMap.length>0&&Pt.setValue(j,"sunShadowMap",Tn.state.sunShadowMap,We),Tn.state.directionalShadowMap.length>0&&Pt.setValue(j,"directionalShadowMap",Tn.state.directionalShadowMap,We),Tn.state.spotShadowMap.length>0&&Pt.setValue(j,"spotShadowMap",Tn.state.spotShadowMap,We),Tn.state.pointShadowMap.length>0&&Pt.setValue(j,"pointShadowMap",Tn.state.pointShadowMap,We)),ie.isSkinnedMesh){Pt.setOptional(j,ie,"bindMatrix"),Pt.setOptional(j,ie,"bindMatrixInverse");const Ht=ie.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),Pt.setValue(j,"boneTexture",Ht.boneTexture,We))}ie.isBatchedMesh&&(Pt.setOptional(j,ie,"batchingTexture"),Pt.setValue(j,"batchingTexture",ie._matricesTexture,We),Pt.setOptional(j,ie,"batchingIdTexture"),Pt.setValue(j,"batchingIdTexture",ie._indirectTexture,We),Pt.setOptional(j,ie,"batchingColorTexture"),ie._colorsTexture!==null&&Pt.setValue(j,"batchingColorTexture",ie._colorsTexture,We));const Gn=de.morphAttributes;if((Gn.position!==void 0||Gn.normal!==void 0||Gn.color!==void 0)&&ye.update(ie,de,En),(Pi||tt.receiveShadow!==ie.receiveShadow)&&(tt.receiveShadow=ie.receiveShadow,Pt.setValue(j,"receiveShadow",ie.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&W.environment!==null&&(mn.envMapIntensity.value=W.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=FE()),Pi){if(Pt.setValue(j,"toneMappingExposure",B.toneMappingExposure),tt.needsLights&&Rr(mn,Yi),ze&&ae.fog===!0&&De.refreshFogUniforms(mn,ze),De.refreshMaterialUniforms(mn,ae,Ae,He,I.state.transmissionRenderTarget[N.id]),tt.needsLights&&tt.numLightProbeGrids>0){const Ht=P;let Jt=0;for(const Ln of I.state.lightProbeGridArray)Ln.texture!==null&&(Ht.textures[Jt]=Ln.texture,Ht.min[Jt]=Ln.boundingBox.min,Ht.max[Jt]=Ln.boundingBox.max,Ht.resolution[Jt]=Ln.resolution,Jt++);for(const Ln in Ht)Ht[Ln].length=Jt;mn.probesSH.value=Ht.textures,mn.probesMin.value=Ht.min,mn.probesMax.value=Ht.max,mn.probesResolution.value=Ht.resolution}pc.upload(j,It(tt),mn,We)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(pc.upload(j,It(tt),mn,We),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Pt.setValue(j,"center",ie.center),Pt.setValue(j,"modelViewMatrix",ie.modelViewMatrix),Pt.setValue(j,"normalMatrix",ie.normalMatrix),Pt.setValue(j,"modelMatrix",ie.matrixWorld),ae.uniformsGroups!==void 0){const Ht=ae.uniformsGroups;for(let Jt=0,Ln=Ht.length;Jt<Ln;Jt++){const Pr=Ht[Jt];Me.update(Pr,En),Me.bind(Pr,En)}}return En}function Rr(N,W){N.ambientLightColor.needsUpdate=W,N.lightProbe.needsUpdate=W,N.sunLights.needsUpdate=W,N.sunLightShadows.needsUpdate=W,N.directionalLights.needsUpdate=W,N.directionalLightShadows.needsUpdate=W,N.pointLights.needsUpdate=W,N.pointLightShadows.needsUpdate=W,N.spotLights.needsUpdate=W,N.spotLightShadows.needsUpdate=W,N.rectAreaLights.needsUpdate=W,N.hemisphereLights.needsUpdate=W}function Xi(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return le},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(N,W,de){const ae=Te.get(N);ae.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),Te.get(N.texture).__webglTexture=W,Te.get(N.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:de,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,W){const de=Te.get(N);de.__webglFramebuffer=W,de.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(N,W=0,de=0){ne=N,le=W,ee=de;let ae=null,ie=!1,ze=!1;if(N){const Be=Te.get(N);if(Be.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(j.FRAMEBUFFER,Be.__webglFramebuffer),U.copy(N.viewport),se.copy(N.scissor),Oe=N.scissorTest,ge.viewport(U),ge.scissor(se),ge.setScissorTest(Oe),J=-1;return}else if(Be.__webglFramebuffer===void 0)We.setupRenderTarget(N);else if(Be.__hasExternalTextures)We.rebindTextures(N,Te.get(N.texture).__webglTexture,Te.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const dt=N.depthTexture;if(Be.__boundDepthTexture!==dt){if(dt!==null&&Te.has(dt)&&(N.width!==dt.image.width||N.height!==dt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");We.setupDepthRenderbuffer(N)}}const Ge=N.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(ze=!0);const Je=Te.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Je[W])?ae=Je[W][de]:ae=Je[W],ie=!0):N.samples>0&&We.useMultisampledRTT(N)===!1?ae=Te.get(N).__webglMultisampledFramebuffer:Array.isArray(Je)?ae=Je[de]:ae=Je,U.copy(N.viewport),se.copy(N.scissor),Oe=N.scissorTest}else U.copy(lt).multiplyScalar(Ae).floor(),se.copy(ot).multiplyScalar(Ae).floor(),Oe=bt;if(de!==0&&(ae=te),ge.bindFramebuffer(j.FRAMEBUFFER,ae)&&ge.drawBuffers(N,ae),ge.viewport(U),ge.scissor(se),ge.setScissorTest(Oe),ie){const Be=Te.get(N.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+W,Be.__webglTexture,de)}else if(ze){const Be=W;for(let Ge=0;Ge<N.textures.length;Ge++){const Je=Te.get(N.textures[Ge]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+Ge,Je.__webglTexture,de,Be)}}else if(N!==null&&de!==0){const Be=Te.get(N.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Be.__webglTexture,de)}J=-1};function or(N){const W=Te.get(N);return(W.__readFormat!==N.format||W.__readType!==N.type)&&(W.__readFormat=N.format,W.__readType=N.type,W.__formatReadable=be.textureFormatReadable(N.format),W.__typeReadable=be.textureTypeReadable(N.type)),W}this.readRenderTargetPixels=function(N,W,de,ae,ie,ze,$e,Be=0){if(!(N&&N.isWebGLRenderTarget)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Te.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&$e!==void 0&&(Ge=Ge[$e],Array.isArray(Ge)&&(Ge=Ge[0])),Ge){ge.bindFramebuffer(j.FRAMEBUFFER,Ge);try{const Je=N.textures[Be],dt=Je.format,yt=Je.type;N.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Be);const et=or(Je);if(et.__formatReadable===!1){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(et.__typeReadable===!1){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=N.width-ae&&de>=0&&de<=N.height-ie&&j.readPixels(W,de,ae,ie,Se.convert(dt),Se.convert(yt),ze)}finally{const Je=ne!==null?Te.get(ne).__webglFramebuffer:null;ge.bindFramebuffer(j.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(N,W,de,ae,ie,ze,$e,Be=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=Te.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&$e!==void 0&&(Ge=Ge[$e],Array.isArray(Ge)&&(Ge=Ge[0])),Ge)if(W>=0&&W<=N.width-ae&&de>=0&&de<=N.height-ie){ge.bindFramebuffer(j.FRAMEBUFFER,Ge);const Je=N.textures[Be],dt=Je.format,yt=Je.type;N.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Be);const et=or(Je);if(et.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(et.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const At=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,At),j.bufferData(j.PIXEL_PACK_BUFFER,ze.byteLength,j.STREAM_READ),j.readPixels(W,de,ae,ie,Se.convert(dt),Se.convert(yt),0),j.bindBuffer(j.PIXEL_PACK_BUFFER,null);const on=ne!==null?Te.get(ne).__webglFramebuffer:null;ge.bindFramebuffer(j.FRAMEBUFFER,on);const Kt=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await kx(j,Kt,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,At),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,ze),j.bindBuffer(j.PIXEL_PACK_BUFFER,null),j.deleteBuffer(At),j.deleteSync(Kt),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,W=null,de=0){const ae=Math.pow(2,-de),ie=Math.floor(N.image.width*ae),ze=Math.floor(N.image.height*ae),$e=W!==null?W.x:0,Be=W!==null?W.y:0;We.setTexture2D(N,0),j.copyTexSubImage2D(j.TEXTURE_2D,de,0,0,$e,Be,ie,ze),ge.unbindTexture()},this.copyTextureToTexture=function(N,W,de=null,ae=null,ie=0,ze=0){let $e,Be,Ge,Je,dt,yt,et,At,on;const Kt=N.isCompressedTexture?N.mipmaps[ze]:N.image;if(de!==null)$e=de.max.x-de.min.x,Be=de.max.y-de.min.y,Ge=de.isBox3?de.max.z-de.min.z:1,Je=de.min.x,dt=de.min.y,yt=de.isBox3?de.min.z:0;else{const Pt=Math.pow(2,-ie);$e=Math.floor(Kt.width*Pt),Be=Math.floor(Kt.height*Pt),N.isDataArrayTexture?Ge=Kt.depth:N.isData3DTexture?Ge=Math.floor(Kt.depth*Pt):Ge=1,Je=0,dt=0,yt=0}ae!==null?(et=ae.x,At=ae.y,on=ae.z):(et=0,At=0,on=0);const Gt=Se.convert(W.format),fn=Se.convert(W.type);let tt;W.isData3DTexture?(We.setTexture3D(W,0),tt=j.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(We.setTexture2DArray(W,0),tt=j.TEXTURE_2D_ARRAY):(We.setTexture2D(W,0),tt=j.TEXTURE_2D),ge.activeTexture(j.TEXTURE0),ge.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,W.flipY),ge.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),ge.pixelStorei(j.UNPACK_ALIGNMENT,W.unpackAlignment);const Tn=ge.getParameter(j.UNPACK_ROW_LENGTH),st=ge.getParameter(j.UNPACK_IMAGE_HEIGHT),Ki=ge.getParameter(j.UNPACK_SKIP_PIXELS),En=ge.getParameter(j.UNPACK_SKIP_ROWS),Nr=ge.getParameter(j.UNPACK_SKIP_IMAGES);ge.pixelStorei(j.UNPACK_ROW_LENGTH,Kt.width),ge.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Kt.height),ge.pixelStorei(j.UNPACK_SKIP_PIXELS,Je),ge.pixelStorei(j.UNPACK_SKIP_ROWS,dt),ge.pixelStorei(j.UNPACK_SKIP_IMAGES,yt);const Pi=N.isDataArrayTexture||N.isData3DTexture,Yi=W.isDataArrayTexture||W.isData3DTexture;if(N.isDepthTexture){const Pt=Te.get(N),mn=Te.get(W),Gn=Te.get(Pt.__renderTarget),Ht=Te.get(mn.__renderTarget);ge.bindFramebuffer(j.READ_FRAMEBUFFER,Gn.__webglFramebuffer),ge.bindFramebuffer(j.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let Jt=0;Jt<Ge;Jt++)Pi&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Te.get(N).__webglTexture,ie,yt+Jt),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Te.get(W).__webglTexture,ze,on+Jt)),j.blitFramebuffer(Je,dt,Je+$e,dt+Be,et,At,et+$e,At+Be,j.DEPTH_BUFFER_BIT,j.NEAREST);ge.bindFramebuffer(j.READ_FRAMEBUFFER,null),ge.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(ie!==0||N.isRenderTargetTexture||Te.has(N)){const Pt=Te.get(N),mn=Te.get(W);ge.bindFramebuffer(j.READ_FRAMEBUFFER,H),ge.bindFramebuffer(j.DRAW_FRAMEBUFFER,he);for(let Gn=0;Gn<Ge;Gn++)Pi?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Pt.__webglTexture,ie,yt+Gn):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Pt.__webglTexture,ie),Yi?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,mn.__webglTexture,ze,on+Gn):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,mn.__webglTexture,ze),ie!==0?j.blitFramebuffer(Je,dt,Je+$e,dt+Be,et,At,et+$e,At+Be,j.COLOR_BUFFER_BIT,j.NEAREST):Yi?j.copyTexSubImage3D(tt,ze,et,At,on+Gn,Je,dt,$e,Be):j.copyTexSubImage2D(tt,ze,et,At,Je,dt,$e,Be);ge.bindFramebuffer(j.READ_FRAMEBUFFER,null),ge.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Yi?N.isDataTexture||N.isData3DTexture?j.texSubImage3D(tt,ze,et,At,on,$e,Be,Ge,Gt,fn,Kt.data):W.isCompressedArrayTexture?j.compressedTexSubImage3D(tt,ze,et,At,on,$e,Be,Ge,Gt,Kt.data):j.texSubImage3D(tt,ze,et,At,on,$e,Be,Ge,Gt,fn,Kt):N.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,ze,et,At,$e,Be,Gt,fn,Kt.data):N.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,ze,et,At,Kt.width,Kt.height,Gt,Kt.data):j.texSubImage2D(j.TEXTURE_2D,ze,et,At,$e,Be,Gt,fn,Kt);ge.pixelStorei(j.UNPACK_ROW_LENGTH,Tn),ge.pixelStorei(j.UNPACK_IMAGE_HEIGHT,st),ge.pixelStorei(j.UNPACK_SKIP_PIXELS,Ki),ge.pixelStorei(j.UNPACK_SKIP_ROWS,En),ge.pixelStorei(j.UNPACK_SKIP_IMAGES,Nr),ze===0&&W.generateMipmaps===!0&&W.mipmapsAutoUpdate===!0&&j.generateMipmap(tt),ge.unbindTexture()},this.initRenderTarget=function(N){Te.get(N).__webglFramebuffer===void 0&&We.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?We.setTextureCube(N,0):N.isData3DTexture?We.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?We.setTexture2DArray(N,0):We.setTexture2D(N,0),ge.unbindTexture()},this.resetState=function(){le=0,ee=0,ne=null,ge.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Dt._getUnpackColorSpace()}}const Y0={type:"change"},sf={type:"start"},$g={type:"end"},oc=new Nc,q0=new Tr,BE=Math.cos(70*Vx.DEG2RAD),Cn=new A,di=2*Math.PI,Wt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Kh=1e-6;class zE extends W1{constructor(e,t=null){super(e,t),this.state=Wt.NONE,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:va.ROTATE,MIDDLE:va.DOLLY,RIGHT:va.PAN},this.touches={ONE:ma.ROTATE,TWO:ma.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new ss,this._lastTargetPosition=new A,this._quat=new ss().setFromUnitVectors(e.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new w0,this._sphericalDelta=new w0,this._scale=1,this._panOffset=new A,this._rotateStart=new Xe,this._rotateEnd=new Xe,this._rotateDelta=new Xe,this._panStart=new Xe,this._panEnd=new Xe,this._panDelta=new Xe,this._dollyStart=new Xe,this._dollyEnd=new Xe,this._dollyDelta=new Xe,this._dollyDirection=new A,this._mouse=new Xe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=VE.bind(this),this._onPointerDown=HE.bind(this),this._onPointerUp=GE.bind(this),this._onContextMenu=$E.bind(this),this._onMouseWheel=XE.bind(this),this._onKeyDown=KE.bind(this),this._onTouchStart=YE.bind(this),this._onTouchMove=qE.bind(this),this._onMouseDown=WE.bind(this),this._onMouseMove=jE.bind(this),this._interceptControlDown=ZE.bind(this),this._interceptControlUp=QE.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Wt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Y0),this.update(),this.state=Wt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Cn.copy(t).sub(this.target),Cn.applyQuaternion(this._quat),this._spherical.setFromVector3(Cn),this.autoRotate&&this.state===Wt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=di:r>Math.PI&&(r-=di),o<-Math.PI?o+=di:o>Math.PI&&(o-=di),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(Cn.setFromSpherical(this._spherical),Cn.applyQuaternion(this._quatInverse),t.copy(this.target).add(Cn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const d=Cn.length();u=this._clampDistance(d*this._scale);const f=d-u;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),l=!!f}else if(this.object.isOrthographicCamera){const d=new A(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=f!==this.object.zoom;const p=new A(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),u=Cn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(oc.origin.copy(this.object.position),oc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(oc.direction))<BE?this.object.lookAt(this.target):(q0.setFromNormalAndCoplanarPoint(this.object.up,this.target),oc.intersectPlane(q0,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>Kh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Kh||this._lastTargetPosition.distanceToSquared(this.target)>Kh?(this.dispatchEvent(Y0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?di/60*this.autoRotateSpeed*e:di/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Cn.setFromMatrixColumn(t,0),Cn.multiplyScalar(-e),this._panOffset.add(Cn)}_panUp(e,t){this.screenSpacePanning===!0?Cn.setFromMatrixColumn(t,1):(Cn.setFromMatrixColumn(t,0),Cn.crossVectors(this.object.up,Cn)),Cn.multiplyScalar(e),this._panOffset.add(Cn)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;Cn.copy(o).sub(this.target);let l=Cn.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=e-r.left,l=t-r.top,u=r.width,d=r.height;this._mouse.x=o/u*2-1,this._mouse.y=-(l/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(di*this._rotateDelta.x/t.clientHeight),this._rotateUp(di*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(di*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-di*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(di*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-di*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(r,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),o=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(o,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(di*this._rotateDelta.x/t.clientHeight),this._rotateUp(di*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,d=(e.pageY+t.y)*.5;this._updateZoomParameters(u,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Xe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function HE(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function VE(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function GE(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent($g),this.state=Wt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function WE(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case va.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Wt.DOLLY;break;case va.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Wt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Wt.ROTATE}break;case va.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Wt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Wt.PAN}break;default:this.state=Wt.NONE}this.state!==Wt.NONE&&this.dispatchEvent(sf)}function jE(s){switch(this.state){case Wt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Wt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Wt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function XE(s){this.enabled===!1||this.enableZoom===!1||this.state!==Wt.NONE||(s.preventDefault(),this.dispatchEvent(sf),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent($g))}function KE(s){this.enabled!==!1&&this._handleKeyDown(s)}function YE(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ma.ROTATE:if(this.enableRotate===!1){this.state=Wt.NONE;break}this._handleTouchStartRotate(s),this.state=Wt.TOUCH_ROTATE;break;case ma.PAN:if(this.enablePan===!1){this.state=Wt.NONE;break}this._handleTouchStartPan(s),this.state=Wt.TOUCH_PAN;break;default:this.state=Wt.NONE}break;case 2:switch(this.touches.TWO){case ma.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Wt.TOUCH_DOLLY_PAN;break;case ma.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Wt.TOUCH_DOLLY_ROTATE;break;default:this.state=Wt.NONE}break;default:this.state=Wt.NONE}this.state!==Wt.NONE&&this.dispatchEvent(sf)}function qE(s){switch(this._trackPointer(s),this.state){case Wt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Wt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Wt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Wt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Wt.NONE}}function $E(s){this.enabled!==!1&&s.preventDefault()}function ZE(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function QE(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function $0({theme:s="dark",heatmap:e="pressure",assetsLayer:t={pipes:!0,pipesPrimary:!0,pipesSecondary:!0,pipesTertiary:!0,pipesService:!0,buildings:!0,hydrants:!0,streetLabels:!0,valves:!0,tanks:!0,sensors:!0,contour:!0},closedValves:r={},onToggleValve:o,simTime:l=14,currentSim:u={label:"14:00 - Giờ bình thường",flow:12580,pressure:3.32},compact:d=!1,viewMode:f="3d",onSelectAsset:p}){const _=Rt.useRef(null),M=Rt.useRef(null),v=Rt.useRef(null),S=Rt.useRef(null),w=Rt.useRef(null),R=Rt.useRef(null),y=Rt.useRef([]),x=Rt.useRef([]),[D,F]=Rt.useState(null),P=Object.entries(r).filter(([O,I])=>I);return Rt.useEffect(()=>{const O=_.current;if(!O)return;const I=O.clientWidth||900,T=O.clientHeight||560,E=s==="dark",Y=f==="xray",B=f==="2d",V=new n1;M.current=V,V.background=new Et(E?792880:16317180),V.fog=null;const $=new Vi(B?36:42,I/T,2,8500);B?$.position.set(0,2200,.1):$.position.set(780,720,880),v.current=$;const te=new kE({antialias:!0,alpha:!1,powerPreference:"high-performance"});for(te.setSize(I,T),te.setPixelRatio(Math.min(window.devicePixelRatio,2)),te.shadowMap.enabled=!0,te.shadowMap.type=eg,te.toneMapping=Gd,te.toneMappingExposure=E?1.35:1.05,w.current=te;O.firstChild;)O.removeChild(O.firstChild);O.appendChild(te.domElement);const H=new zE($,te.domElement);H.enableDamping=!0,H.dampingFactor=.06,H.maxPolarAngle=B?.05:Math.PI/2-.03,H.minDistance=25,H.maxDistance=3400,H.target.set(0,B?0:15,0),S.current=H;const he=new z1(E?6333946:16777215,E?1.25:1.1);V.add(he);const le=new B1(16776688,E?2.45:1.5);le.position.set(650,950,550),le.castShadow=!0,le.shadow.mapSize.width=2048,le.shadow.mapSize.height=2048,le.shadow.camera.near=100,le.shadow.camera.far=3200;const ee=1250;le.shadow.camera.left=-ee,le.shadow.camera.right=ee,le.shadow.camera.top=ee,le.shadow.camera.bottom=-ee,le.shadow.bias=-3e-4,V.add(le);const ne=new O1(E?3718648:14742270,E?988970:9741240,E?.85:.45);V.add(ne),x.current=[],y.current=[];const J=new Hi(2600,2600),Q=new kn({color:E?463136:14870768,roughness:.9,metalness:.08}),U=new Ot(J,Q);U.rotation.x=-Math.PI/2,U.position.y=-.2,U.receiveShadow=!0,V.add(U);const se=new G1(2600,130,E?165063:13358561,E?992324:14870768);se.position.y=.02,V.add(se);const Oe=new wc(1240,1248,64),ce=new pa({color:E?165063:959977,side:Gi,transparent:!0,opacity:.35}),we=new Ot(Oe,ce);we.rotation.x=-Math.PI/2,we.position.y=.04,V.add(we);const Ce=new $n;V.add(Ce);const He=new kn({color:E?1318446:4674921,roughness:.65,metalness:.15}),Ae=new kn({color:E?1976635:9741240,roughness:.8});new pa({color:16096779});const Ke=new pa({color:E?9741240:16777215}),it=(G,q,Se,ue,Me=!0,Ve="Đường đô thị",me=!0)=>{const Ue=new Hi(Se,ue),Qe=new Ot(Ue,He);Qe.rotation.x=-Math.PI/2,Qe.position.set(G,.05,q),Me||(Qe.rotation.z=Math.PI/2),Qe.receiveShadow=!0,Ce.add(Qe);const Pe=Se>=24?4:2.5,ct=new Hi(Pe,ue),xt=new Ot(ct,Ae);xt.rotation.x=-Math.PI/2,Me?xt.position.set(G-Se/2-Pe/2,.1,q):(xt.rotation.z=Math.PI/2,xt.position.set(G,.1,q-Se/2-Pe/2)),Ce.add(xt);const wt=new Ot(ct,Ae);wt.rotation.x=-Math.PI/2,Me?wt.position.set(G+Se/2+Pe/2,.1,q):(wt.rotation.z=Math.PI/2,wt.position.set(G,.1,q+Se/2+Pe/2)),Ce.add(wt);const ft=Math.floor(ue/24);for(let Nt=0;Nt<ft;Nt++){const Pn=new Hi(.5,6),Bt=new Ot(Pn,Ke);Bt.rotation.x=-Math.PI/2,Me?Bt.position.set(G,.08,q-ue/2+Nt*24+12):(Bt.rotation.z=Math.PI/2,Bt.position.set(G-ue/2+Nt*24+12,.08,q)),Ce.add(Bt)}};it(0,0,24,2400,!0,"Đường Hoàng Đạo Thúy",!0),it(0,180,28,2500,!1,"Đường Lê Văn Lương",!0),it(0,-180,30,2500,!1,"Đường Trần Duy Hưng",!0),it(-440,0,40,2500,!0,"Đường Phạm Hùng - Khuất Duy Tiến (Vành Đai 3)",!0),it(-160,0,22,2400,!0,"Đường Hoàng Minh Giám",!0),it(-700,40,44,1400,!1,"Đại Lộ Thăng Long",!0),it(340,0,22,2400,!0,"Phố Trung Kính",!0),it(140,0,16,2200,!0,"Phố Nguyễn Thị Định",!1),it(240,220,18,1400,!0,"Phố Vũ Trọng Phụng",!0),it(290,240,18,1400,!0,"Phố Nguyễn Tuân",!0),it(0,0,18,2400,!1,"Đường Nguyễn Thị Thập",!1),it(0,90,16,2200,!1,"Phố Hoàng Ngân",!1),it(0,-90,16,2e3,!1,"Phố Đỗ Quang",!1),it(0,240,16,2200,!1,"Phố Quan Nhân",!1),it(0,290,16,2e3,!1,"Phố Nhân Hòa & Chính Kinh",!1),it(0,350,22,2400,!1,"Đường Ngụy Như Kon Tum",!0),it(0,430,18,2200,!1,"Đường Nguyễn Huy Tưởng",!1),it(0,-340,24,2400,!1,"Đường Nguyễn Chánh / Vũ Phạm Hàm",!0),it(0,-260,18,1800,!1,"Đường Mạc Thái Tổ",!1),it(0,-220,18,1800,!1,"Đường Mạc Thái Tông",!1),it(-200,-460,24,2e3,!1,"Đường Mễ Trì",!0),it(-200,-540,26,2e3,!1,"Đường Dương Đình Nghệ",!0);const lt=new $n;V.add(lt);const ot=(G,q,Se=50,ue=12.5,Me=!0)=>{if(!t.streetLabels)return null;const me=document.createElement("canvas").getContext("2d"),Ue=Me?30:26;me.font=`bold ${Ue}px -apple-system, BlinkMacSystemFont, "Plus Jakarta Sans", Roboto, sans-serif`;const Pe=me.measureText(G).width,ct=Math.max(512,Math.ceil(Pe+170)),xt=128,wt=document.createElement("canvas");wt.width=ct,wt.height=xt;const ft=wt.getContext("2d"),Nt=26,Pn=10,Bt=12,Qt=ct-20,zt=104;ft.beginPath(),ft.roundRect(Pn,Bt,Qt,zt,Nt),ft.closePath(),ft.fillStyle=E?"rgba(10, 18, 34, 0.95)":"rgba(255, 255, 255, 0.96)",ft.fill(),ft.lineWidth=Me?5:3.5,ft.strokeStyle=Me?E?"#38bdf8":"#0284c7":E?"#64748b":"#94a3b8",ft.stroke(),ft.fillStyle=Me?"#0284c7":"#475569",ft.beginPath(),ft.arc(68,64,28,0,Math.PI*2),ft.fill(),ft.fillStyle="#ffffff",ft.font='bold 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',ft.textAlign="center",ft.textBaseline="middle",ft.fillText(Me?"ĐT":"HN",68,64),ft.fillStyle=E?"#ffffff":"#0f172a",ft.font=`bold ${Ue}px -apple-system, BlinkMacSystemFont, "Plus Jakarta Sans", Roboto, sans-serif`,ft.textAlign="left",ft.textBaseline="middle",ft.fillText(G,114,64);const vn=new f0(wt);vn.minFilter=ii;const ri=new Od({map:vn,transparent:!0,depthTest:!1}),Dn=new r0(ri);Dn.position.set(q[0],q[1]+16,q[2]);const Mn=ct/512*Se;return Dn.scale.set(Mn,ue,1),lt.add(Dn),Dn};ot("ĐƯỜNG HOÀNG ĐẠO THÚY",[0,10,-50],55,13.5,!0),ot("ĐƯỜNG LÊ VĂN LƯƠNG",[120,10,180],52,13,!0),ot("ĐƯỜNG TRẦN DUY HƯNG",[120,10,-180],52,13,!0),ot("ĐƯỜNG PHẠM HÙNG (VÀNH ĐAI 3)",[-440,10,-80],65,16,!0),ot("ĐƯỜNG HOÀNG MINH GIÁM",[-160,10,80],55,13.5,!0),ot("ĐẠI LỘ THĂNG LONG",[-720,10,40],56,14,!0),ot("ĐƯỜNG NGUYỄN THỊ THẬP",[-80,10,0],48,12,!1),ot("PHỐ NGUYỄN THỊ ĐỊNH",[140,10,-70],48,12,!1),ot("PHỐ HOÀNG NGÂN",[60,10,90],44,11,!1),ot("PHỐ ĐỖ QUANG",[60,10,-90],44,11,!1),ot("PHỐ VŨ TRỌNG PHỤNG",[240,10,240],46,11.5,!1),ot("PHỐ NGUYỄN TUÂN",[290,10,290],46,11.5,!1),ot("ĐƯỜNG NGỤY NHƯ KON TUM",[140,10,350],52,13,!1),ot("PHỐ TRUNG KÍNH",[340,10,50],46,11.5,!1),ot("KEANGNAM LANDMARK 72 (350M)",[-540,16,-320],68,17,!0),ot("TRUNG TÂM HỘI NGHỊ QUỐC GIA (NCC)",[-440,14,120],68,17,!0),ot("VINHOMES D'CAPITALE & BIG C",[-220,12,-180],62,15.5,!0),ot("HỒ ĐIỀU HÒA NHÂN CHÍNH (8.2 HA)",[-260,10,95],58,14.5,!0);const bt=new kn({color:E?536393:223649,roughness:.1,metalness:.8,transparent:!0,opacity:E?.88:.75}),gt=new kn({color:E?413243:1467700,roughness:.9}),nn=new Hi(160,140),jt=new Ot(nn,bt);jt.rotation.x=-Math.PI/2,jt.position.set(-260,.25,95),jt.receiveShadow=!0,V.add(jt);const cn=new Hi(168,148),Lt=new Ot(cn,gt);Lt.rotation.x=-Math.PI/2,Lt.position.set(-260,.2,95),V.add(Lt);const Sn=new Hi(220,150),kt=new Ot(Sn,bt);kt.rotation.x=-Math.PI/2,kt.position.set(-540,.25,120),kt.receiveShadow=!0,V.add(kt);const Zt=new $n;V.add(Zt);const Mt=!!r["VALVE-01"],Xt=!!r["VALVE-02"],j=!!r["VALVE-03"],_t=!!r["VALVE-04"],re=!!r["VALVE-05"],be=!!r["VALVE-06"],ge=!!r["VALVE-07"],Ye=!!r["VALVE-08"],Te=({pos:G=[0,0,0],size:q=[16,40,16],color:Se=3718648,name:ue,id:Me,floors:Ve,households:me,demandFlow:Ue,intakePressure:Qe,connectionPipe:Pe,cisternCapacity:ct,meterId:xt,dma:wt,hasAntenna:ft=!1,isCutOff:Nt=!1,cutOffValveName:Pn=""})=>{if(!t.buildings)return null;const Bt=new $n;Bt.position.set(G[0],0,G[2]);const[Qt,zt,vn]=q,ri=Nt?15680580:Se,Dn=new wr(Qt,zt,vn),Mn=new kn({color:Y?165063:ri,metalness:Y?.05:Nt?.2:.42,roughness:Y?.1:.22,transparent:!0,opacity:Y?.12:Nt?.75:E?.92:.94,depthWrite:!Y,emissive:Nt?10033947:Y?165063:E?ri:0,emissiveIntensity:Nt?.45:Y?.04:.18}),_n=new Ot(Dn,Mn);_n.position.y=zt/2,_n.castShadow=!Y,_n.receiveShadow=!Y,Bt.add(_n);const rn=new p0(Dn),si=new Fd(rn,new Mc({color:Nt?16557477:E?8246268:165063,linewidth:Y?1:Nt?2.5:1.5,transparent:Y,opacity:Y?.28:1}));if(_n.add(si),ft){const It=new Jr(.3,.5,20,8),ji=new kn({color:14870768,metalness:.85}),Vn=new Ot(It,ji);Vn.position.set(0,zt+12,0),Bt.add(Vn);const Rr=new ga(1.2,8,8),Xi=new pa({color:Nt?16096779:15680580}),or=new Ot(Rr,Xi);or.position.set(0,zt+22,0),Bt.add(or)}const Mi={name:ue,id:Me,type:"Công Trình & Tòa Nhà Đô Thị",status:Nt?`⚠️ ĐÃ CẮT NƯỚC CỤC BỘ (Do đóng chốt khóa: ${Pn})`:"Cấp nước liên tục 24/7 (Đạt chuẩn QCVN 01-1:2018/BXD)",floors:`${Ve} tầng`,households:me||"500 căn hộ",flow:Nt?"0.0 m³/h (Mất áp)":Ue||"45.0 m³/h",pressure:Nt?"0.00 bar (MẤT NƯỚC)":Qe||"3.25 bar",elevation:"+17.2m ASL",connectionPipe:Pe||"DN65 HDPE",cisternCapacity:ct||"800 m³",meterId:xt||`AMR-${Me}`,dma:wt||"DMA THNC-02",isCutOff:Nt,cutOffValveName:Pn};return Bt.userData={name:ue,id:Me,type:"Building",data:Mi},_n.userData=Bt.userData,x.current.push(_n),Zt.add(Bt),Bt},We=({center:G,size:q,rows:Se=2,cols:ue=6,heightRange:Me=[15,22],zoneId:Ve,isCutOff:me,cutOffValveName:Ue,blockName:Qe="Khu Nhà Phố Liền Kề",dma:Pe="DMA THNC-02"})=>{if(!t.buildings)return;const[ct,xt]=G,[wt,ft]=q,Nt=wt/ue,Pn=ft/Se,Bt=new $n;for(let Qt=0;Qt<Se;Qt++)for(let zt=0;zt<ue;zt++){const vn=ct-wt/2+(zt+.5)*Nt,ri=xt-ft/2+(Qt+.5)*Pn,Dn=(Math.sin(vn*12.9898+ri*78.233)*43758.5453%1+1)%1,Mn=Me[0]+Dn*(Me[1]-Me[0]),_n=Nt*.88,rn=Pn*.86,si=new wr(_n,Mn,rn),Mi=E?[3359061,1976635,4674921,988970,223649]:[15857145,14870768,13358561,9741240,12573694],It=Math.floor(Dn*Mi.length)%Mi.length,ji=new kn({color:Y?165063:me?15680580:Mi[It],roughness:Y?.1:.5,metalness:Y?.05:.1,transparent:!0,opacity:Y?.08:me?.75:1,depthWrite:!Y,emissive:me?10033947:E?Y?165063:Mi[It]:0,emissiveIntensity:me?.3:E?Y?.02:.12:0}),Vn=new Ot(si,ji);Vn.position.set(vn,Mn/2,ri),Vn.castShadow=!0,Vn.receiveShadow=!0;const Rr=new p0(si),Xi=new Fd(Rr,new Mc({color:me?16557477:E?3718648:6583435,linewidth:1}));Vn.add(Xi);const or={name:`${Qe} (Lô ${Qt+1}-${zt+1})`,id:`HOUSE-${Ve}-${Qt+1}-${zt+1}`,type:"Nhà Phố / Shophouse Phân Lô",status:me?`⚠️ MẤT NƯỚC (Do đóng van: ${Ue})`:"Cấp nước ổn định",floors:`${Math.round(Mn/3.6)} tầng`,households:"1 hộ gia đình + mặt bằng kinh doanh",flow:me?"0.0 m³/h":"0.45 m³/h",pressure:me?"0.00 bar":"3.22 bar",elevation:"+16.5m ASL",connectionPipe:"DN32 HDPE",cisternCapacity:"2.5 m³ bồn Inox",meterId:`AMR-H-${Ve}-${Qt+1}${zt+1}`,dma:Pe,isCutOff:me,cutOffValveName:Ue};Vn.userData={name:`${Qe} (Lô ${Qt+1}-${zt+1})`,id:`HOUSE-${Ve}-${Qt+1}-${zt+1}`,type:"Building",data:or},x.current.push(Vn),Bt.add(Vn)}Zt.add(Bt)};Te({pos:[-540,0,-320],size:[48,165,48],color:E?165063:223649,name:"Keangnam Hanoi Landmark 72 (350m - 72 Tầng)",id:"BLDG-KEANGNAM-72",floors:72,households:"Khách sạn InterContinental + 200,000m² VP",demandFlow:"142.0 m³/h",intakePressure:"3.42 bar",connectionPipe:"DN150 Gang cầu K9 kép",cisternCapacity:"4,500 m³",meterId:"AMR-KEANGNAM-MAIN",dma:"DMA Phía Tây",hasAntenna:!0,isCutOff:be,cutOffValveName:"Van V-KNG-06"}),Te({pos:[-590,0,-320],size:[32,105,32],color:E?223649:165063,name:"Tháp Căn Hộ Keangnam A (48 Tầng)",id:"BLDG-KEANGNAM-A",floors:48,households:"460 căn hộ cao cấp",demandFlow:"48.0 m³/h",intakePressure:"3.38 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,200 m³",meterId:"AMR-KEANGNAM-TOWER-A",dma:"DMA Phía Tây",isCutOff:be,cutOffValveName:"Van V-KNG-06"}),Te({pos:[-490,0,-320],size:[32,105,32],color:E?223649:165063,name:"Tháp Căn Hộ Keangnam B (48 Tầng)",id:"BLDG-KEANGNAM-B",floors:48,households:"460 căn hộ cao cấp",demandFlow:"48.0 m³/h",intakePressure:"3.38 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,200 m³",meterId:"AMR-KEANGNAM-TOWER-B",dma:"DMA Phía Tây",isCutOff:be,cutOffValveName:"Van V-KNG-06"}),Te({pos:[-460,0,-220],size:[30,80,26],color:E?165063:223649,name:"Tòa Tháp Handico Tower (33 Tầng)",id:"BLDG-HANDICO",floors:33,households:"Trụ sở Tổng Công ty Handico",demandFlow:"32.0 m³/h",intakePressure:"3.35 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"800 m³",meterId:"AMR-HANDICO",dma:"DMA Phía Tây",isCutOff:be,cutOffValveName:"Van V-KNG-06"}),Te({pos:[-460,0,-170],size:[28,68,24],color:E?165063:223649,name:"Tòa Tháp CEO Tower (27 Tầng)",id:"BLDG-CEO",floors:27,households:"Tổ hợp Văn phòng CEO Group",demandFlow:"28.0 m³/h",intakePressure:"3.32 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"700 m³",meterId:"AMR-CEO",dma:"DMA Phía Tây",isCutOff:be,cutOffValveName:"Van V-KNG-06"}),Te({pos:[-440,0,-110],size:[56,42,56],color:E?1096065:366185,name:"Bảo Tàng Hà Nội (Kim Tự Tháp Ngược)",id:"BLDG-MUSEUM",floors:4,households:"Bảo tàng Quốc gia & Khu triển lãm 5 ha",demandFlow:"24.0 m³/h",intakePressure:"3.32 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"600 m³",meterId:"AMR-MUSEUM",dma:"DMA Phía Tây",isCutOff:be,cutOffValveName:"Van V-KNG-06"}),Te({pos:[-440,0,140],size:[85,36,75],color:E?14251782:11817737,name:"Trung Tâm Hội Nghị Quốc Gia (NCC - 64 ha)",id:"BLDG-NCC",floors:5,households:"Hội trường 3,800 chỗ + Khuôn viên cảnh quan",demandFlow:"85.0 m³/h",intakePressure:"3.35 bar",connectionPipe:"DN100 HDPE kép từ Đại lộ Thăng Long",cisternCapacity:"2,500 m³",meterId:"AMR-NCC-MAIN",dma:"DMA Hội Nghị Quốc Gia"}),Te({pos:[-280,0,-180],size:[70,24,60],color:E?16096779:14251782,name:"Đại Siêu Thị Big C Thăng Long (GO!)",id:"BLDG-BIG-C",floors:3,households:"Trung tâm mua sắm bán lẻ 12,000m²",demandFlow:"65.0 m³/h",intakePressure:"3.28 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,500 m³",meterId:"AMR-BIGC-01",dma:"DMA THNC-01",isCutOff:re,cutOffValveName:"Van V-DCP-05"}),[-230,-190,-150].forEach((G,q)=>{Te({pos:[G,0,-220],size:[26,95+q*4,26],color:E?165063:223649,name:`Tổ Hợp Vinhomes D'Capitale C${q+1} (${40+q} Tầng)`,id:`BLDG-DCAPITALE-${q+1}`,floors:40+q,households:"520 căn hộ cao cấp",demandFlow:"52.0 m³/h",intakePressure:"3.30 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,400 m³",meterId:`AMR-DCAPITALE-C${q+1}`,dma:"DMA THNC-01",isCutOff:re,cutOffValveName:"Van V-DCP-05"}),Te({pos:[G,0,-260],size:[26,92+q*4,26],color:E?223649:165063,name:`Tổ Hợp Vinhomes D'Capitale C${q+4} (${39+q} Tầng)`,id:`BLDG-DCAPITALE-${q+4}`,floors:39+q,households:"500 căn hộ cao cấp",demandFlow:"50.0 m³/h",intakePressure:"3.30 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,350 m³",meterId:`AMR-DCAPITALE-C${q+4}`,dma:"DMA THNC-01",isCutOff:re,cutOffValveName:"Van V-DCP-05"})}),Te({pos:[-360,0,40],size:[32,98,30],color:E?165063:223649,name:"Tháp Thăng Long Number One A (40 Tầng)",id:"BLDG-TL-NO1-A",floors:40,households:"540 căn hộ xanh",demandFlow:"54.0 m³/h",intakePressure:"3.32 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,500 m³",meterId:"AMR-TL-NO1-A",dma:"DMA THNC-01",isCutOff:re,cutOffValveName:"Van V-DCP-05"}),Te({pos:[-360,0,85],size:[32,98,30],color:E?165063:223649,name:"Tháp Thăng Long Number One B (40 Tầng)",id:"BLDG-TL-NO1-B",floors:40,households:"540 căn hộ xanh",demandFlow:"54.0 m³/h",intakePressure:"3.32 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,500 m³",meterId:"AMR-TL-NO1-B",dma:"DMA THNC-01",isCutOff:re,cutOffValveName:"Van V-DCP-05"}),Te({pos:[-380,0,-30],size:[28,76,26],color:E?223649:165063,name:"Tòa Tháp Viglacera Tower (30 Tầng)",id:"BLDG-VIGLACERA",floors:30,households:"Trụ sở Tổng Công ty Viglacera",demandFlow:"30.0 m³/h",intakePressure:"3.30 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"800 m³",meterId:"AMR-VIGLACERA",dma:"DMA THNC-01",isCutOff:re,cutOffValveName:"Van V-DCP-05"}),Te({pos:[65,0,-215],size:[38,72,32],color:E?14251782:11817737,name:"Tổ Hợp Charmvit Tower & Grand Plaza",id:"BLDG-CHARMVIT",floors:27,households:"540 phòng KS 5 sao & 45,000m² VP Đại sứ quán Hàn Quốc",demandFlow:"58.0 m³/h",intakePressure:"3.25 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,800 m³",meterId:"AMR-CHARMVIT-PLAZA",dma:"DMA THNC-01",isCutOff:_t,cutOffValveName:"Van V-TDN-04"}),[-20,20,60].forEach((G,q)=>{Te({pos:[G,0,-140],size:[24,72,22],color:E?165063:223649,name:`Tòa Căn Hộ Cao Cấp N04-${String.fromCharCode(65+q)} (29 Tầng)`,id:`BLDG-N04-${String.fromCharCode(65+q)}`,floors:29,households:"360 căn hộ cao cấp",demandFlow:"36.0 m³/h",intakePressure:"3.26 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"950 m³",meterId:`AMR-N04-${String.fromCharCode(65+q)}`,dma:"DMA THNC-01",isCutOff:_t,cutOffValveName:"Van V-TDN-04"})}),Te({pos:[40,0,-85],size:[28,85,26],color:E?223649:165063,name:"Tòa Tháp N05-29T1 Hoàng Đạo Thúy (34 Tầng)",id:"BLDG-N05-34T1",floors:34,households:"480 căn hộ",demandFlow:"48.0 m³/h",intakePressure:"3.24 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,200 m³",meterId:"AMR-N05-34T1",dma:"DMA THNC-01",isCutOff:_t,cutOffValveName:"Van V-TDN-04"}),Te({pos:[80,0,-85],size:[28,85,26],color:E?223649:165063,name:"Tòa Tháp N05-29T2 Hoàng Đạo Thúy (34 Tầng)",id:"BLDG-N05-34T2",floors:34,households:"480 căn hộ",demandFlow:"48.0 m³/h",intakePressure:"3.24 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,200 m³",meterId:"AMR-N05-34T2",dma:"DMA THNC-01",isCutOff:_t,cutOffValveName:"Van V-TDN-04"}),Te({pos:[25,0,20],size:[26,82,26],color:E?165063:223649,name:"Tòa Tháp Biểu Tượng 34T Hoàng Đạo Thúy",id:"BLDG-34T-HDT",floors:34,households:"650 căn hộ (~2,600 cư dân)",demandFlow:"58.0 m³/h",intakePressure:"3.25 bar",connectionPipe:"DN80 HDPE nối từ trục D600",cisternCapacity:"1,500 m³",meterId:"AMR-34T-MAIN",dma:"DMA THNC-02",hasAntenna:!0,isCutOff:Mt,cutOffValveName:"Van V-HDT-01"}),Te({pos:[-35,0,30],size:[20,58,18],color:E?223649:165063,name:"Tòa Chung Cư 24T1 Hoàng Đạo Thúy",id:"BLDG-24T1",floors:24,households:"280 căn hộ",demandFlow:"28.0 m³/h",intakePressure:"3.22 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"800 m³",meterId:"AMR-24T1",dma:"DMA THNC-02",isCutOff:Mt,cutOffValveName:"Van V-HDT-01"}),Te({pos:[-35,0,-30],size:[20,58,18],color:E?223649:165063,name:"Tòa Chung Cư 24T2 Hoàng Đạo Thúy",id:"BLDG-24T2",floors:24,households:"280 căn hộ",demandFlow:"28.0 m³/h",intakePressure:"3.22 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"800 m³",meterId:"AMR-24T2",dma:"DMA THNC-02",isCutOff:Mt,cutOffValveName:"Van V-HDT-01"}),Te({pos:[-75,0,0],size:[20,58,18],color:E?223649:165063,name:"Tòa Chung Cư 24T3 Hoàng Đạo Thúy",id:"BLDG-24T3",floors:24,households:"280 căn hộ",demandFlow:"28.0 m³/h",intakePressure:"3.22 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"800 m³",meterId:"AMR-24T3",dma:"DMA THNC-02",isCutOff:Mt,cutOffValveName:"Van V-HDT-01"}),[75,115,155].forEach((G,q)=>{Te({pos:[42,0,G],size:[18,44,16],color:E?959977:165063,name:`Tòa Chung Cư 17T${q+1} Hoàng Đạo Thúy`,id:`BLDG-17T${q+1}`,floors:17,households:"180 căn hộ",demandFlow:"18.0 m³/h",intakePressure:"3.20 bar",connectionPipe:"DN50 HDPE",cisternCapacity:"500 m³",meterId:`AMR-17T${q+1}`,dma:"DMA THNC-02",isCutOff:Mt,cutOffValveName:"Van V-HDT-01"}),Te({pos:[-35,0,G],size:[18,44,16],color:E?959977:165063,name:`Tòa Chung Cư 17T${q+4} Hoàng Đạo Thúy`,id:`BLDG-17T${q+4}`,floors:17,households:"180 căn hộ",demandFlow:"18.0 m³/h",intakePressure:"3.20 bar",connectionPipe:"DN50 HDPE",cisternCapacity:"500 m³",meterId:`AMR-17T${q+4}`,dma:"DMA THNC-02",isCutOff:Mt,cutOffValveName:"Van V-HDT-01"})}),Te({pos:[35,0,155],size:[30,95,30],color:E?165063:481669,name:"Tòa Tháp Diamond Flower Tower (36 Tầng - 176m)",id:"BLDG-DIAMOND-FLOWER",floors:36,households:"380 căn hộ + 35,000m² VP hạng A",demandFlow:"48.0 m³/h",intakePressure:"3.28 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,600 m³",meterId:"AMR-DIAMOND-01",dma:"DMA THNC-02",hasAntenna:!0,isCutOff:j,cutOffValveName:"Van V-LVL-03"}),Te({pos:[80,0,155],size:[26,72,24],color:E?223649:165063,name:"Tổ Hợp Chung Cư Star City Lê Văn Lương (27 Tầng)",id:"BLDG-STAR-CITY",floors:27,households:"420 căn hộ cao cấp",demandFlow:"42.0 m³/h",intakePressure:"3.25 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,100 m³",meterId:"AMR-STAR-CITY",dma:"DMA THNC-02",isCutOff:j,cutOffValveName:"Van V-LVL-03"}),Te({pos:[130,0,155],size:[28,72,26],color:E?165063:223649,name:"Tòa Tháp The Golden Palm (27 Tầng)",id:"BLDG-GOLDEN-PALM",floors:27,households:"400 căn hộ",demandFlow:"40.0 m³/h",intakePressure:"3.24 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"1,000 m³",meterId:"AMR-GOLDEN-PALM",dma:"DMA THNC-02",isCutOff:j,cutOffValveName:"Van V-LVL-03"}),Te({pos:[-60,0,155],size:[28,86,26],color:E?165063:223649,name:"Tòa Tháp HUD Tower A (32 Tầng)",id:"BLDG-HUD-TOWER-A",floors:32,households:"Trụ sở Tổng Công ty Đầu tư Phát triển Nhà HUD",demandFlow:"36.0 m³/h",intakePressure:"3.26 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,200 m³",meterId:"AMR-HUD-A",dma:"DMA THNC-02",isCutOff:j,cutOffValveName:"Van V-LVL-03"}),Te({pos:[-100,0,155],size:[26,74,24],color:E?223649:165063,name:"Tòa Tháp HUD Tower B (27 Tầng)",id:"BLDG-HUD-TOWER-B",floors:27,households:"Văn phòng thương mại & tài chính",demandFlow:"30.0 m³/h",intakePressure:"3.26 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"900 m³",meterId:"AMR-HUD-B",dma:"DMA THNC-02",isCutOff:j,cutOffValveName:"Van V-LVL-03"}),Te({pos:[180,0,155],size:[28,70,24],color:E?223649:165063,name:"Hội Sở MB Grand Tower (25 Tầng)",id:"BLDG-MB-TOWER",floors:25,households:"Hội sở Ngân hàng TMCP Quân Đội",demandFlow:"26.0 m³/h",intakePressure:"3.24 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"750 m³",meterId:"AMR-MB-TOWER",dma:"DMA THNC-02",isCutOff:j,cutOffValveName:"Van V-LVL-03"}),[-150,-110].forEach((G,q)=>{Te({pos:[G,0,45],size:[32,65,34],color:E?14251782:11817737,name:`Mandarin Garden Block ${String.fromCharCode(65+q)} (29 Tầng)`,id:`BLDG-MANDARIN-${String.fromCharCode(65+q)}`,floors:29,households:"260 căn hộ cao cấp",demandFlow:"26.0 m³/h",intakePressure:"3.22 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"850 m³",meterId:`AMR-MANDARIN-${String.fromCharCode(65+q)}`,dma:"DMA THNC-03",isCutOff:Xt,cutOffValveName:"Van V-HMG-02"}),Te({pos:[G,0,-5],size:[32,65,34],color:E?14251782:11817737,name:`Mandarin Garden Block ${String.fromCharCode(67+q)} (29 Tầng)`,id:`BLDG-MANDARIN-${String.fromCharCode(67+q)}`,floors:29,households:"260 căn hộ cao cấp",demandFlow:"26.0 m³/h",intakePressure:"3.22 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"850 m³",meterId:`AMR-MANDARIN-${String.fromCharCode(67+q)}`,dma:"DMA THNC-03",isCutOff:Xt,cutOffValveName:"Van V-HMG-02"})}),Te({pos:[-135,0,-95],size:[52,24,40],color:E?1096065:366185,name:"Trường THPT Chuyên Hà Nội - Amsterdam",id:"BLDG-AMS",floors:5,households:"3,200 học sinh & giáo viên",demandFlow:"32.0 m³/h",intakePressure:"3.24 bar",connectionPipe:"DN50 HDPE",cisternCapacity:"500 m³",meterId:"AMR-AMS-SCHOOL",dma:"DMA THNC-03",isCutOff:Xt,cutOffValveName:"Van V-HMG-02"}),[160,200].forEach((G,q)=>{Te({pos:[G,0,270],size:[32,74,28],color:E?165063:223649,name:`Tổ Hợp Hapulico Complex Block ${String.fromCharCode(65+q)} (31 Tầng)`,id:`BLDG-HAPULICO-${String.fromCharCode(65+q)}`,floors:31,households:"380 căn hộ",demandFlow:"38.0 m³/h",intakePressure:"3.18 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,100 m³",meterId:`AMR-HAPULICO-${String.fromCharCode(65+q)}`,dma:"DMA THNC-03",isCutOff:ge,cutOffValveName:"Van V-HAP-07"}),Te({pos:[G,0,310],size:[32,74,28],color:E?223649:165063,name:`Tổ Hợp Hapulico Complex Block ${String.fromCharCode(67+q)} (31 Tầng)`,id:`BLDG-HAPULICO-${String.fromCharCode(67+q)}`,floors:31,households:"380 căn hộ",demandFlow:"38.0 m³/h",intakePressure:"3.18 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,100 m³",meterId:`AMR-HAPULICO-${String.fromCharCode(67+q)}`,dma:"DMA THNC-03",isCutOff:ge,cutOffValveName:"Van V-HAP-07"})}),Te({pos:[110,0,270],size:[30,68,28],color:E?165063:223649,name:"Tổ Hợp Chung Cư Golden West (27 Tầng)",id:"BLDG-GOLDEN-WEST",floors:27,households:"350 căn hộ",demandFlow:"35.0 m³/h",intakePressure:"3.18 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"900 m³",meterId:"AMR-GOLDEN-WEST",dma:"DMA THNC-03",isCutOff:ge,cutOffValveName:"Van V-HAP-07"}),Te({pos:[250,0,340],size:[30,85,28],color:E?165063:223649,name:"Tổ Hợp Imperia Garden Tháp A (35 Tầng)",id:"BLDG-IMPERIA-A",floors:35,households:"450 căn hộ cao cấp",demandFlow:"45.0 m³/h",intakePressure:"3.16 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,300 m³",meterId:"AMR-IMPERIA-A",dma:"DMA THNC-03",isCutOff:ge,cutOffValveName:"Van V-HAP-07"}),Te({pos:[290,0,340],size:[30,85,28],color:E?223649:165063,name:"Tổ Hợp Imperia Garden Tháp B (35 Tầng)",id:"BLDG-IMPERIA-B",floors:35,households:"450 căn hộ cao cấp",demandFlow:"45.0 m³/h",intakePressure:"3.16 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,300 m³",meterId:"AMR-IMPERIA-B",dma:"DMA THNC-03",isCutOff:ge,cutOffValveName:"Van V-HAP-07"});const L=new $n;for(let G=0;G<4;G++)for(let q=0;q<4;q++){const Se=65+G*16,ue=-30+q*18,Me=new wr(10,14,10),Ve=new kn({color:Ye?15680580:E?6583435:9741240,roughness:.5}),me=new Ot(Me,Ve);me.position.set(Se,7,ue),me.castShadow=!0,L.add(me)}L.userData={name:"Khu Biệt Thự & Liền Kề BT1 - BT6",id:"BLDG-VILLAS",type:"Khu Biệt Thự Thấp Tầng",data:{name:"Khu Biệt Thự & Liền Kề BT1 - BT6",id:"BLDG-VILLAS",type:"Khu Biệt Thự Thấp Tầng",status:Ye?"⚠️ MẤT NƯỚC DO KHÓA VAN V-NTT-08":"Cấp nước ổn định",floors:"3.5 tầng",households:"150 căn biệt thự",flow:Ye?"0.0 m³/h":"22.5 m³/h",pressure:Ye?"0.00 bar":"3.18 bar",elevation:"+16.5m ASL",connectionPipe:"DN40 - DN50 HDPE",cisternCapacity:"15 m³ / biệt thự",meterId:"Cụm đồng hồ cơ sở Class C",dma:"DMA THNC-02",isCutOff:Ye,cutOffValveName:"Van V-NTT-08"}},L.children.forEach(G=>{G.userData=L.userData,x.current.push(G)}),Zt.add(L),Te({pos:[110,0,35],size:[36,18,30],color:E?1096065:366185,name:"Trường Liên Cấp Tiểu Học & THCS Ngôi Sao Hà Nội",id:"BLDG-NGOI-SAO",floors:5,households:"2,200 học sinh & CBGV",demandFlow:"24.0 m³/h",intakePressure:"3.20 bar",connectionPipe:"DN50 HDPE",cisternCapacity:"400 m³",meterId:"AMR-NGOI-SAO",dma:"DMA THNC-02",isCutOff:Ye,cutOffValveName:"Van V-NTT-08"}),We({center:[75,45],size:[110,60],rows:2,cols:8,heightRange:[15,21],zoneId:"HN-NTT",isCutOff:Ye,cutOffValveName:"Van V-NTT-08",blockName:"Phố Hoàng Ngân - Nhà Phố Liền Kề"}),We({center:[75,135],size:[110,60],rows:2,cols:8,heightRange:[16,24],zoneId:"HN-LVL",isCutOff:j,cutOffValveName:"Van V-LVL-03",blockName:"Phố Hoàng Ngân - Shophouse Lê Văn Lương"}),We({center:[75,-45],size:[110,60],rows:2,cols:8,heightRange:[16,22],zoneId:"DQ-NTT",isCutOff:_t,cutOffValveName:"Van V-TDN-04",blockName:"Phố Đỗ Quang - Dãy Nhà Phố Ẩm Thực"}),We({center:[75,-135],size:[110,60],rows:2,cols:8,heightRange:[16,24],zoneId:"DQ-TDH",isCutOff:_t,cutOffValveName:"Van V-TDN-04",blockName:"Phố Đỗ Quang - Shophouse Chuyên Gia"}),We({center:[200,45],size:[95,60],rows:2,cols:6,heightRange:[15,22],zoneId:"NTD-HN",isCutOff:Ye,cutOffValveName:"Van V-NTT-08",blockName:"Phố Nguyễn Thị Định - Dãy Nhà Phố Thương Mại"}),We({center:[200,135],size:[95,60],rows:2,cols:6,heightRange:[16,24],zoneId:"NTD-LVL",isCutOff:j,cutOffValveName:"Van V-LVL-03",blockName:"Phố Nguyễn Thị Định - Shophouse Dịch Vụ"}),We({center:[120,215],size:[170,40],rows:2,cols:10,heightRange:[14,20],zoneId:"QN-01",isCutOff:Ye,cutOffValveName:"Van V-NTT-08",blockName:"Khu Dân Cư Phố Quan Nhân"}),We({center:[120,265],size:[170,40],rows:2,cols:10,heightRange:[14,20],zoneId:"NH-01",isCutOff:ge,cutOffValveName:"Van V-HAP-07",blockName:"Khu Dân Cư Phố Nhân Hòa & Chính Kinh"}),We({center:[230,310],size:[110,50],rows:2,cols:8,heightRange:[15,22],zoneId:"VTP-NNKT",isCutOff:ge,cutOffValveName:"Van V-HAP-07",blockName:"Phố Vũ Trọng Phụng - Shophouse Chợ Thuốc"}),We({center:[290,390],size:[110,55],rows:2,cols:8,heightRange:[16,24],zoneId:"NT-NHT",isCutOff:ge,cutOffValveName:"Van V-HAP-07",blockName:"Phố Nguyễn Tuân - Dãy Nhà Liền Kề"}),We({center:[-80,50],size:[100,55],rows:2,cols:7,heightRange:[15,22],zoneId:"34T-IN",isCutOff:Mt,cutOffValveName:"Van V-HDT-01",blockName:"Khu Nhà Phố Nội Khu Hoàng Đạo Thúy"}),We({center:[-80,-45],size:[100,55],rows:2,cols:7,heightRange:[15,22],zoneId:"24T-IN",isCutOff:Mt,cutOffValveName:"Van V-HDT-01",blockName:"Khu Liền Kề Cụm 24T Hoàng Đạo Thúy"}),We({center:[-240,250],size:[130,80],rows:3,cols:8,heightRange:[15,22],zoneId:"HNC-KDT",isCutOff:re,cutOffValveName:"Van V-DCP-05",blockName:"Khu Đô Thị Ven Hồ Điều Hòa Nhân Chính"}),We({center:[-320,340],size:[130,70],rows:2,cols:8,heightRange:[14,20],zoneId:"KDT-S",isCutOff:re,cutOffValveName:"Van V-DCP-05",blockName:"Khu Dân Cư Nam Khuất Duy Tiến"}),We({center:[-300,-380],size:[160,65],rows:2,cols:10,heightRange:[15,22],zoneId:"MTH-01",isCutOff:be,cutOffValveName:"Van V-KNG-06",blockName:"Khu Đô Thị Mễ Trì Hạ - Sudico"}),We({center:[-480,-450],size:[130,55],rows:2,cols:8,heightRange:[14,20],zoneId:"MT-W",isCutOff:be,cutOffValveName:"Van V-KNG-06",blockName:"Khu Liền Kề Phía Tây Mễ Trì"}),We({center:[240,-260],size:[140,65],rows:2,cols:9,heightRange:[15,22],zoneId:"TH-TY1",isCutOff:_t,cutOffValveName:"Van V-TDN-04",blockName:"Khu Đô Thị Trung Yên - Mạc Thái Tổ"}),We({center:[240,-330],size:[140,55],rows:2,cols:9,heightRange:[15,22],zoneId:"TH-TY2",isCutOff:_t,cutOffValveName:"Van V-TDN-04",blockName:"Khu Phân Lô Phố Vũ Phạm Hàm"}),Te({pos:[-660,0,150],size:[64,34,64],color:E?165063:223649,name:"Bảo Tàng Hà Nội (Hanoi Museum - Kim tự tháp ngược)",id:"BLDG-BTHN",floors:4,households:"Công trình văn hóa trọng điểm quốc gia (54.000m²)",demandFlow:"45.0 m³/h",intakePressure:"3.18 bar",connectionPipe:"DN100 Gang dẻo",cisternCapacity:"1,200 m³",meterId:"AMR-BTHN-01",dma:"DMA Hội Nghị Quốc Gia"}),Te({pos:[-840,0,180],size:[85,32,55],color:E?165063:959977,name:"Khách Sạn 5 Sao Quốc Tế JW Marriott Hanoi",id:"BLDG-JWM",floors:9,households:"450 phòng khách sạn 5 sao cao cấp & Trung tâm hội nghị",demandFlow:"75.0 m³/h",intakePressure:"3.15 bar",connectionPipe:"DN125 Gang dẻo",cisternCapacity:"2,500 m³",meterId:"AMR-JWM-01",dma:"DMA Mễ Trì"}),Te({pos:[-620,0,260],size:[55,20,55],color:165063,name:"Cung Triển Lãm Kiến Trúc Quy Hoạch Quốc Gia (NECC)",id:"BLDG-NECC",floors:3,households:"Trung tâm triển lãm quy hoạch & kiến trúc Thủ đô",demandFlow:"30.0 m³/h",intakePressure:"3.22 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"800 m³",meterId:"AMR-NECC-01",dma:"DMA Hội Nghị Quốc Gia"}),Te({pos:[-520,0,-430],size:[36,115,36],color:E?165063:223649,name:"Tháp Văn Phòng Handico Tower (33 Tầng - Phạm Hùng)",id:"BLDG-HANDICO",floors:33,households:"40.000m² văn phòng Hạng A",demandFlow:"48.0 m³/h",intakePressure:"3.20 bar",connectionPipe:"DN100 Gang dẻo",cisternCapacity:"1,600 m³",meterId:"AMR-HANDICO-01",dma:"DMA Keangnam"}),Te({pos:[-520,0,-490],size:[32,95,32],color:E?165063:223649,name:"Tháp CEO Tower (27 Tầng - Trụ sở Tập đoàn CEO)",id:"BLDG-CEO",floors:27,households:"28.000m² sàn văn phòng",demandFlow:"38.0 m³/h",intakePressure:"3.25 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,200 m³",meterId:"AMR-CEO-01",dma:"DMA Keangnam"}),[-760,-820,-880].forEach((G,q)=>{Te({pos:[G,0,-420],size:[42,90,42],color:E?165063:223649,name:`Tổ Hợp Căn Hộ Cao Cấp The Manor Mỹ Đình - Tháp ${String.fromCharCode(65+q)} (26T)`,id:`BLDG-MANOR-${q+1}`,floors:26,households:"420 căn hộ cao cấp & Khu phố thương mại Paris",demandFlow:"42.0 m³/h",intakePressure:"3.12 bar",connectionPipe:"DN100 HDPE",cisternCapacity:"1,400 m³",meterId:`AMR-MANOR-0${q+1}`,dma:"DMA Mễ Trì"})}),Te({pos:[480,0,-220],size:[70,32,50],color:165063,name:"Trường Đại Học Lao Động - Xã Hội (Giảng Đường A & B)",id:"BLDG-DHLDXH",floors:8,households:"Khuôn viên đào tạo 15.000 sinh viên & Cán bộ giảng viên",demandFlow:"60.0 m³/h",intakePressure:"3.22 bar",connectionPipe:"DN100 Gang dẻo",cisternCapacity:"1,800 m³",meterId:"AMR-DHLDXH-01",dma:"DMA Trung Hòa"}),Te({pos:[640,0,-240],size:[60,30,45],color:165063,name:"Trường Đại Học Phòng Cháy Chữa Cháy (Bộ Công An)",id:"BLDG-DHPCCC",floors:7,households:"Khu huấn luyện & Đào tạo chuyên gia PCCC",demandFlow:"40.0 m³/h",intakePressure:"3.30 bar",connectionPipe:"DN100 Gang dẻo",cisternCapacity:"1,500 m³",meterId:"AMR-DHPCCC-01",dma:"DMA Trung Hòa"}),Te({pos:[680,0,-420],size:[40,145,40],color:E?165063:223649,name:"Tổ Hợp Chung Cư & Khách Sạn Golden Park Tower (45 Tầng)",id:"BLDG-GOLDEN-PARK",floors:45,households:"410 căn hộ cao cấp & 240 phòng khách sạn 4 sao",demandFlow:"55.0 m³/h",intakePressure:"3.10 bar",connectionPipe:"DN125 Gang dẻo",cisternCapacity:"2,000 m³",meterId:"AMR-GP-01",dma:"DMA Yên Hòa"}),[420,480].forEach((G,q)=>{Te({pos:[G,0,-360],size:[38,98,38],color:E?165063:223649,name:`Tổ Hợp Home City Trung Kính - Tháp V${q+1} (30 Tầng)`,id:`BLDG-HOME-CITY-${q+1}`,floors:30,households:"600 căn hộ dân cư & Trung tâm thương mại",demandFlow:"46.0 m³/h",intakePressure:"3.18 bar",connectionPipe:"DN100 HDPE",cisternCapacity:"1,600 m³",meterId:`AMR-HC-0${q+1}`,dma:"DMA Trung Kính"})}),Te({pos:[-240,0,40],size:[60,22,35],color:E?165063:223649,name:"THPT Chuyên Hà Nội - Amsterdam (Nhà A: Khối Giảng Đường)",id:"BLDG-AMS-A",floors:5,households:"Khuôn viên đào tạo 3.000 học sinh năng khiếu",demandFlow:"35.0 m³/h",intakePressure:"3.25 bar",connectionPipe:"DN100 Gang dẻo",cisternCapacity:"1,000 m³",meterId:"AMR-AMS-01",dma:"DMA Hoàng Minh Giám"}),Te({pos:[-300,0,30],size:[50,18,45],color:E?165063:959977,name:"THPT Chuyên Hà Nội - Amsterdam (Nhà B: Khu Thể Thao & Bể Bơi Ngầm)",id:"BLDG-AMS-B",floors:3,households:"Bể bơi tiêu chuẩn thi đấu & Sân bóng đá",demandFlow:"40.0 m³/h",intakePressure:"3.20 bar",connectionPipe:"DN100 Gang dẻo",cisternCapacity:"1,500 m³",meterId:"AMR-AMS-02",dma:"DMA Hoàng Minh Giám"}),[160,230,300,370].forEach((G,q)=>{Te({pos:[G,0,-480],size:[36,82,36],color:E?165063:223649,name:`KĐT Nam Trung Yên - Tòa B${q+1} (25 Tầng)`,id:`BLDG-NTY-${q+1}`,floors:25,households:"450 căn hộ tái định cư kiểu mẫu",demandFlow:"42.0 m³/h",intakePressure:"3.18 bar",connectionPipe:"DN100 HDPE",cisternCapacity:"1,400 m³",meterId:`AMR-NTY-0${q+1}`,dma:"DMA Yên Hòa"}),Te({pos:[G,0,-560],size:[38,75,38],color:E?165063:223649,name:`Chung Cư Yên Hòa Park View - Tháp A${q+1} (22 Tầng)`,id:`BLDG-YENHOA-${q+1}`,floors:22,households:"380 căn hộ",demandFlow:"36.0 m³/h",intakePressure:"3.20 bar",connectionPipe:"DN100 HDPE",cisternCapacity:"1,200 m³",meterId:`AMR-YH-0${q+1}`,dma:"DMA Yên Hòa"})}),Te({pos:[460,0,-80],size:[55,38,45],color:165063,name:"Bệnh Viện Đa Khoa Quốc Tế Thu Cúc (Trần Duy Hưng)",id:"BLDG-THUCUC",floors:10,households:"Khu khám chữa bệnh & Cấp cứu 24/7 (300 giường bệnh)",demandFlow:"55.0 m³/h",intakePressure:"3.32 bar",connectionPipe:"DN100 Gang dẻo",cisternCapacity:"1,600 m³",meterId:"AMR-THUCUC-01",dma:"DMA Trung Hòa"}),Te({pos:[580,0,100],size:[65,32,50],color:165063,name:"Bệnh Viện Y Học Cổ Truyền Quân Đội (Phân Viện Trung Hòa)",id:"BLDG-YHCT",floors:8,households:"Cơ sở điều trị & Điều dưỡng 450 giường bệnh",demandFlow:"48.0 m³/h",intakePressure:"3.26 bar",connectionPipe:"DN100 Gang dẻo",cisternCapacity:"1,500 m³",meterId:"AMR-YHCT-01",dma:"DMA Nhân Chính"}),[240,310].forEach((G,q)=>{Te({pos:[G,0,480],size:[40,115,40],color:E?165063:223649,name:`Tổ Hợp Chung Cư Imperia Garden - Tháp ${String.fromCharCode(65+q)} (35 Tầng)`,id:`BLDG-IMPERIA-${q+1}`,floors:35,households:"800 căn hộ cao cấp & Vườn trên không",demandFlow:"72.0 m³/h",intakePressure:"3.12 bar",connectionPipe:"DN125 Gang dẻo",cisternCapacity:"2,600 m³",meterId:`AMR-IMP-0${q+1}`,dma:"DMA Thanh Xuân"})}),Te({pos:[180,0,420],size:[42,92,42],color:E?165063:223649,name:"Tổ Hợp Chung Cư Golden West (27 Tầng - Lê Văn Thiêm)",id:"BLDG-GOLDEN-WEST",floors:27,households:"650 căn hộ & 3 tầng hầm thương mại",demandFlow:"58.0 m³/h",intakePressure:"3.16 bar",connectionPipe:"DN100 Gang dẻo",cisternCapacity:"1,800 m³",meterId:"AMR-GW-01",dma:"DMA Thanh Xuân"}),Te({pos:[-380,0,-260],size:[45,105,45],color:E?165063:223649,name:"Tòa Nhà Viện Dầu Khí Việt Nam - VPI Tower (30 Tầng - Trung Kính)",id:"BLDG-VPI",floors:30,households:"Trụ sở nghiên cứu & Văn phòng Tập đoàn PVN (45.000m²)",demandFlow:"52.0 m³/h",intakePressure:"3.22 bar",connectionPipe:"DN100 Gang dẻo",cisternCapacity:"1,900 m³",meterId:"AMR-VPI-01",dma:"DMA Trung Kính"}),We({center:[360,-80],size:[100,40],rows:2,cols:8,heightRange:[14,20],cutOffValveName:"Van V-TDN-04",blockName:"Khu Dân Cư Phố Trung Kính - Trần Duy Hưng"}),We({center:[460,180],size:[80,40],rows:2,cols:6,heightRange:[14,20],cutOffValveName:"Van V-LVL-03",blockName:"Khu Phân Lô Phố Vũ Trọng Phụng Mở Rộng"}),We({center:[-360,-100],size:[70,40],rows:2,cols:5,heightRange:[12,18],cutOffValveName:"Van V-DCP-05",blockName:"Khu Liền Kề Biệt Thự Mễ Trì Hạ"}),We({center:[100,-420],size:[90,40],rows:2,cols:7,heightRange:[14,20],cutOffValveName:"Van V-TDN-04",blockName:"Khu Đô Thị Phố Hạ Yên"}),[720,780].forEach((G,q)=>{[480,560].forEach((Se,ue)=>{Te({pos:[G,0,Se],size:[44,118,44],color:E?165063:223649,name:`Đại Đô Thị Vinhomes Royal City - Tháp R${q*2+ue+1} (35T)`,id:`BLDG-ROYAL-${q*2+ue+1}`,floors:35,households:"1.200 căn hộ cao cấp & TTTM Vincom Mega Mall",demandFlow:"95.0 m³/h",intakePressure:"3.08 bar",connectionPipe:"DN150 Gang dẻo",cisternCapacity:"4,500 m³",meterId:`AMR-ROYAL-0${q*2+ue+1}`,dma:"DMA Thượng Đình"})})}),Te({pos:[540,0,620],size:[42,92,42],color:E?165063:223649,name:"Tổ Hợp Chung Cư Golden Land Building (27 Tầng - Nguyễn Trãi)",id:"BLDG-GOLDEN-LAND",floors:27,households:"720 căn hộ & Khu thương mại dịch vụ",demandFlow:"52.0 m³/h",intakePressure:"3.14 bar",connectionPipe:"DN100 Gang dẻo",cisternCapacity:"1,800 m³",meterId:"AMR-GL-01",dma:"DMA Thanh Xuân"});const b=new $n;V.add(b);const K=(G,q,Se,ue,Me,Ve,me,Ue)=>{var Nt;if(me===1&&!t.pipesPrimary||me===2&&!t.pipesSecondary||me===3&&!t.pipesTertiary||me===4&&!t.pipesService||!t.pipes)return null;const Qe=me===1?165063:me===2?16347926:me===3?15381256:(Nt=Ue==null?void 0:Ue.status)!=null&&Nt.includes("CẮT")?6583435:15381256,Pe=Ve?Qe:4674921,ct=new Ig(G),xt=new tf(ct,64,q,14,!1),wt=new kn({color:Pe,roughness:.2,metalness:.2,emissive:Ve?Pe:0,emissiveIntensity:Ve?E?.65:.45:0}),ft=new Ot(xt,wt);if(ft.castShadow=!1,ft.receiveShadow=!1,ft.userData={name:ue,id:Me,type:"Pipe",data:Ue},b.add(ft),x.current.push(ft),Ve){const Pn=me===1?20:me===2?12:me===3?8:4,Bt=new ga(q*1.35,12,12),Qt=new kn({color:16777215,emissive:me===1?61695:me===2?16486972:16707722,emissiveIntensity:1.5,roughness:.1});for(let zt=0;zt<Pn;zt++){const vn=new Ot(Bt,Qt);V.add(vn),y.current.push({mesh:vn,curve:ct,t:zt/Pn,speed:me===1?.0022:me===2?.0017:.0012})}}return ft};K([new A(-1200,1.4,40),new A(-700,1.4,40),new A(-440,1.4,40)],1.6,E?165063:223649,"Trục Truyền Dẫn Cấp 1 D800 Đại Lộ Thăng Long","PIPE-TRUNK-DLTL-D800",!0,1,{name:"Trục Truyền Dẫn Cấp 1 D800 Đại Lộ Thăng Long",id:"PIPE-TRUNK-DLTL-D800",tier:"Cấp 1 (Transmission D800)",status:"Đang truyền dẫn công suất lớn (NMN Sông Đà)",diameter:"DN800 Gang Dẻo K9",flow:"4,850.0 m³/h",pressure:"3.85 bar",dma:"Trục Truyền Dẫn Liên Vùng"}),K([new A(-440,1.4,-1100),new A(-440,1.4,-400),new A(-440,1.4,40),new A(-440,1.4,600),new A(-440,1.4,1100)],1.6,E?165063:223649,"Trục Truyền Dẫn Cấp 1 D800 Phạm Hùng - Vành Đai 3","PIPE-TRUNK-PH-D800",!0,1,{name:"Trục Truyền Dẫn Cấp 1 D800 Phạm Hùng - Vành Đai 3",id:"PIPE-TRUNK-PH-D800",tier:"Cấp 1 (Transmission D800)",status:"Vận hành tối ưu",diameter:"DN800 Gang Dẻo K9",flow:"4,200.0 m³/h",pressure:"3.75 bar",dma:"Trục Truyền Dẫn Liên Vùng"}),K([new A(-440,1.4,180),new A(-160,1.4,180),new A(0,1.4,180),new A(340,1.4,180),new A(650,1.4,180)],1.4,E?165063:223649,"Trục Truyền Dẫn Cấp 1 D600 Lê Văn Lương","PIPE-TRUNK-LVL-D600",!0,1,{name:"Trục Truyền Dẫn Cấp 1 D600 Lê Văn Lương",id:"PIPE-TRUNK-LVL-D600",tier:"Cấp 1 (Transmission D600)",status:"Cấp nguồn chính DMA THNC-02 & THNC-03",diameter:"DN600 Gang Dẻo K9",flow:"3,250.0 m³/h",pressure:"3.45 bar",dma:"DMA THNC-02"}),K([new A(-440,1.4,-180),new A(-160,1.4,-180),new A(0,1.4,-180),new A(340,1.4,-180),new A(650,1.4,-180)],1.4,E?165063:223649,"Trục Truyền Dẫn Cấp 1 D600 Trần Duy Hưng","PIPE-TRUNK-TDH-D600",!0,1,{name:"Trục Truyền Dẫn Cấp 1 D600 Trần Duy Hưng",id:"PIPE-TRUNK-TDH-D600",tier:"Cấp 1 (Transmission D600)",status:"Cấp nguồn chính DMA THNC-01",diameter:"DN600 Gang Dẻo K9",flow:"3,400.0 m³/h",pressure:"3.50 bar",dma:"DMA THNC-01"}),K([new A(0,1.4,-180),new A(0,1.4,0),new A(0,1.4,180),new A(0,1.4,350)],1.4,E?165063:223649,"Trục Truyền Dẫn Cấp 1 D600 Hoàng Đạo Thúy","PIPE-TRUNK-HDT-D600",!0,1,{name:"Trục Truyền Dẫn Cấp 1 D600 Hoàng Đạo Thúy",id:"PIPE-TRUNK-HDT-D600",tier:"Cấp 1 (Transmission D600)",status:"Trục xương sống KĐT Trung Hòa - Nhân Chính",diameter:"DN600 Gang Dẻo K9",flow:"2,900.0 m³/h",pressure:"3.38 bar",dma:"DMA THNC-02"}),K([new A(340,1.4,-450),new A(340,1.4,-180),new A(340,1.4,180),new A(340,1.4,450)],1.4,E?165063:223649,"Trục Truyền Dẫn Cấp 1 D600 Trung Kính","PIPE-TRUNK-TK-D600",!0,1,{name:"Trục Truyền Dẫn Cấp 1 D600 Trung Kính",id:"PIPE-TRUNK-TK-D600",tier:"Cấp 1 (Transmission D600)",status:"Cấp nước phía Đông quận",diameter:"DN600 Gang Dẻo",flow:"2,400.0 m³/h",pressure:"3.35 bar",dma:"DMA Phía Đông"}),K([new A(-160,1.2,0),new A(-75,1.2,0),new A(0,1.2,0),new A(75,1.2,0),new A(140,1.2,0),new A(340,1.2,0)],1.1,E?959977:165063,"Tuyến Phân Phối Cấp 2 D300 Nguyễn Thị Thập","PIPE-DIST-NTT-D300",!Ye,2,{name:"Tuyến Phân Phối Cấp 2 D300 Nguyễn Thị Thập",id:"PIPE-DIST-NTT-D300",tier:"Cấp 2 (Distribution D300)",status:Ye?"ĐÃ CẮT NƯỚC QUA VAN V-NTT-08":"Bình thường",diameter:"DN300 HDPE PE100",flow:Ye?"0.0 m³/h":"880 m³/h",pressure:Ye?"0.00 bar":"3.25 bar",dma:"DMA THNC-02"}),K([new A(-160,1.2,350),new A(-160,1.2,180),new A(-160,1.2,0),new A(-160,1.2,-95),new A(-160,1.2,-180)],1,E?959977:165063,"Tuyến Phân Phối Cấp 2 D250 Hoàng Minh Giám","PIPE-DIST-HMG-D250",!Xt,2,{name:"Tuyến Phân Phối Cấp 2 D250 Hoàng Minh Giám",id:"PIPE-DIST-HMG-D250",tier:"Cấp 2 (Distribution D250)",status:Xt?"ĐÃ CẮT NƯỚC QUA VAN V-HMG-02":"Bình thường",diameter:"DN250 HDPE PE100",flow:Xt?"0.0 m³/h":"750 m³/h",pressure:Xt?"0.00 bar":"3.24 bar",dma:"DMA THNC-03"}),K([new A(140,1.2,-180),new A(140,1.2,-90),new A(140,1.2,0),new A(140,1.2,180)],1,E?959977:165063,"Tuyến Phân Phối Cấp 2 D250 Nguyễn Thị Định","PIPE-DIST-NTD-D250",!_t,2,{name:"Tuyến Phân Phối Cấp 2 D250 Nguyễn Thị Định",id:"PIPE-DIST-NTD-D250",tier:"Cấp 2 (Distribution D250)",status:_t?"ĐÃ CẮT NƯỚC QUA VAN V-TDN-04":"Bình thường",diameter:"DN250 HDPE",flow:_t?"0.0 m³/h":"620 m³/h",pressure:_t?"0.00 bar":"3.22 bar",dma:"DMA THNC-01"}),K([new A(-160,1.2,350),new A(0,1.2,350),new A(160,1.2,350),new A(240,1.2,350),new A(340,1.2,350)],1.1,E?959977:165063,"Tuyến Phân Phối Cấp 2 D300 Ngụy Như Kon Tum","PIPE-DIST-NNKT-D300",!ge,2,{name:"Tuyến Phân Phối Cấp 2 D300 Ngụy Như Kon Tum",id:"PIPE-DIST-NNKT-D300",tier:"Cấp 2 (Distribution D300)",status:ge?"ĐÃ CẮT NƯỚC QUA VAN V-HAP-07":"Bình thường",diameter:"DN300 HDPE",flow:ge?"0.0 m³/h":"820 m³/h",pressure:ge?"0.00 bar":"3.18 bar",dma:"DMA THNC-03"}),K([new A(240,1.2,180),new A(240,1.2,270),new A(240,1.2,350)],1,E?959977:165063,"Tuyến Phân Phối Cấp 2 D250 Vũ Trọng Phụng","PIPE-DIST-VTP-D250",!ge,2,{name:"Tuyến Phân Phối Cấp 2 D250 Vũ Trọng Phụng",id:"PIPE-DIST-VTP-D250",tier:"Cấp 2 (Distribution D250)",status:ge?"ĐÃ CẮT NƯỚC QUA VAN V-HAP-07":"Bình thường",diameter:"DN250 HDPE",flow:ge?"0.0 m³/h":"540 m³/h",pressure:ge?"0.00 bar":"3.16 bar",dma:"DMA THNC-03"}),K([new A(-440,1.2,-180),new A(-280,1.2,-180),new A(-190,1.2,-180),new A(-160,1.2,-180)],1.1,E?959977:165063,"Tuyến Phân Phối Cấp 2 D300 Ven Vinhomes D'Capitale","PIPE-DIST-DCP-D300",!re,2,{name:"Tuyến Phân Phối Cấp 2 D300 Ven Vinhomes D'Capitale",id:"PIPE-DIST-DCP-D300",tier:"Cấp 2 (Distribution D300)",status:re?"ĐÃ CẮT NƯỚC QUA VAN V-DCP-05":"Bình thường",diameter:"DN300 HDPE",flow:re?"0.0 m³/h":"960 m³/h",pressure:re?"0.00 bar":"3.30 bar",dma:"DMA THNC-01"}),K([new A(-440,1.2,-320),new A(-540,1.2,-320),new A(-540,1.2,-460),new A(-440,1.2,-460)],1.1,E?959977:165063,"Tuyến Phân Phối Cấp 2 D300 Mạch Vòng Keangnam & Mễ Trì","PIPE-DIST-KNG-D300",!be,2,{name:"Tuyến Phân Phối Cấp 2 D300 Keangnam & Mễ Trì",id:"PIPE-DIST-KNG-D300",tier:"Cấp 2 (Distribution D300)",status:be?"ĐÃ CẮT NƯỚC QUA VAN V-KNG-06":"Bình thường",diameter:"DN300 HDPE",flow:be?"0.0 m³/h":"1,120 m³/h",pressure:be?"0.00 bar":"3.38 bar",dma:"DMA Phía Tây"}),K([new A(0,1,90),new A(75,1,90),new A(140,1,90),new A(200,1,90)],.85,E?1357990:889992,"Tuyến Nhánh Cấp 3 D150 Phố Hoàng Ngân","PIPE-STREET-HN-D150",!Ye,3,{name:"Tuyến Nhánh Cấp 3 D150 Phố Hoàng Ngân",id:"PIPE-STREET-HN-D150",tier:"Cấp 3 (Reticulation D150)",status:Ye?"ĐÃ CẮT NƯỚC":"Ổn định",diameter:"DN150",flow:Ye?"0.0 m³/h":"180 m³/h",dma:"DMA THNC-02"}),K([new A(0,1,-90),new A(75,1,-90),new A(140,1,-90),new A(200,1,-90)],.85,E?1357990:889992,"Tuyến Nhánh Cấp 3 D150 Phố Đỗ Quang","PIPE-STREET-DQ-D150",!_t,3,{name:"Tuyến Nhánh Cấp 3 D150 Phố Đỗ Quang",id:"PIPE-STREET-DQ-D150",tier:"Cấp 3 (Reticulation D150)",status:_t?"ĐÃ CẮT NƯỚC":"Ổn định",diameter:"DN150",flow:_t?"0.0 m³/h":"175 m³/h",dma:"DMA THNC-01"}),K([new A(0,1,240),new A(120,1,240),new A(240,1,240)],.8,E?1357990:889992,"Tuyến Nhánh Cấp 3 D125 Phố Quan Nhân","PIPE-STREET-QN-D125",!Ye,3,{name:"Tuyến Nhánh Cấp 3 D125 Phố Quan Nhân",id:"PIPE-STREET-QN-D125",tier:"Cấp 3 (Reticulation D125)",status:Ye?"ĐÃ CẮT NƯỚC":"Ổn định",diameter:"DN125",flow:Ye?"0.0 m³/h":"140 m³/h",dma:"DMA THNC-02"}),K([new A(0,1,290),new A(120,1,290),new A(240,1,290)],.8,E?1357990:889992,"Tuyến Nhánh Cấp 3 D125 Phố Nhân Hòa","PIPE-STREET-NH-D125",!ge,3,{name:"Tuyến Nhánh Cấp 3 D125 Phố Nhân Hòa",id:"PIPE-STREET-NH-D125",tier:"Cấp 3 (Reticulation D125)",status:ge?"ĐÃ CẮT NƯỚC":"Ổn định",diameter:"DN125",flow:ge?"0.0 m³/h":"150 m³/h",dma:"DMA THNC-03"}),K([new A(0,1,20),new A(25,1,20),new A(42,1,75),new A(42,1,155)],.8,E?1357990:889992,"Tuyến Nhánh Cấp 3 D150 Ngõ Nội Khu 34T & 17T","PIPE-STREET-17T-D150",!Mt,3,{name:"Tuyến Nhánh Cấp 3 D150 Ngõ Nội Khu 34T & 17T",id:"PIPE-STREET-17T-D150",tier:"Cấp 3 (Reticulation D150)",status:Mt?"ĐÃ CẮT NƯỚC":"Ổn định",diameter:"DN150",flow:Mt?"0.0 m³/h":"195 m³/h",dma:"DMA THNC-02"}),K([new A(0,1,20),new A(-35,1,20),new A(-35,1,-30),new A(-75,1,0)],.8,E?1357990:889992,"Tuyến Nhánh Cấp 3 D125 Ngõ Nội Khu Cụm 24T","PIPE-STREET-24T-D125",!Mt,3,{name:"Tuyến Nhánh Cấp 3 D125 Ngõ Nội Khu Cụm 24T",id:"PIPE-STREET-24T-D125",tier:"Cấp 3 (Reticulation D125)",status:Mt?"ĐÃ CẮT NƯỚC":"Ổn định",diameter:"DN125",flow:Mt?"0.0 m³/h":"160 m³/h",dma:"DMA THNC-02"}),K([new A(0,1,-85),new A(40,1,-85),new A(80,1,-85),new A(60,1,-140)],.8,E?1357990:889992,"Tuyến Nhánh Cấp 3 D150 Nội Khu Cụm N04/N05","PIPE-STREET-N04N05-D150",!_t,3,{name:"Tuyến Nhánh Cấp 3 D150 Nội Khu N04/N05",id:"PIPE-STREET-N04N05-D150",tier:"Cấp 3 (Reticulation D150)",status:_t?"ĐÃ CẮT NƯỚC":"Ổn định",diameter:"DN150",flow:_t?"0.0 m³/h":"210 m³/h",dma:"DMA THNC-01"});const _e=(G,q,Se,ue,Me,Ve)=>{const me=new A((G.x+q.x)/2,.8,(G.z+q.z)/2);K([G,me,q],.55,Ve?6583435:E?16498468:14251782,`Ống Đấu Nối Cấp 4 ${Se} -> ${ue}`,`PIPE-SRV-${Me}`,!Ve,4,{name:`Ống Đấu Nối Cấp 4 ${Se} -> ${ue}`,id:`PIPE-SRV-${Me}`,tier:"Cấp 4 (Service Connection)",status:Ve?"ĐÃ CẮT DÒNG (KHÓA VAN)":"Cấp nước trực tiếp bể ngầm",diameter:Se,pressure:Ve?"0.00 bar":"3.25 bar",flow:Ve?"0.0 m³/h":"Theo định mức AMR"})};_e(new A(0,1.1,20),new A(25,1.1,20),"DN80","Tháp 34T","34T",Mt),_e(new A(0,1.1,30),new A(-35,1.1,30),"DN65","Chung cư 24T1","24T1",Mt),_e(new A(0,1.1,-30),new A(-35,1.1,-30),"DN65","Chung cư 24T2","24T2",Mt),_e(new A(42,1.1,75),new A(42,1.1,75),"DN50","Chung cư 17T1","17T1",Mt),_e(new A(0,1.1,155),new A(35,1.1,155),"DN80","Diamond Flower","DIAMOND",j),_e(new A(50,1.1,155),new A(80,1.1,155),"DN80","Star City","STAR-CITY",j),_e(new A(100,1.1,155),new A(130,1.1,155),"DN65","The Golden Palm","GOLDEN-PALM",j),_e(new A(0,1.1,155),new A(-60,1.1,155),"DN80","HUD Tower A","HUD-A",j),_e(new A(-60,1.1,155),new A(-100,1.1,155),"DN65","HUD Tower B","HUD-B",j),_e(new A(140,1.1,155),new A(180,1.1,155),"DN65","MB Grand Tower","MB-TOWER",j),_e(new A(0,1.1,-180),new A(65,1.1,-215),"DN80","Charmvit Tower","CHARMVIT",_t),_e(new A(40,1.1,-85),new A(40,1.1,-85),"DN80","N05-34T1","N05-1",_t),_e(new A(80,1.1,-85),new A(80,1.1,-85),"DN80","N05-34T2","N05-2",_t),_e(new A(-160,1.1,45),new A(-150,1.1,45),"DN65","Mandarin Block A","MANDARIN-A",Xt),_e(new A(-160,1.1,-5),new A(-150,1.1,-5),"DN65","Mandarin Block C","MANDARIN-C",Xt),_e(new A(-160,1.1,-95),new A(-135,1.1,-95),"DN50","THPT Amsterdam","AMS",Xt),_e(new A(-440,1.1,-320),new A(-540,1.1,-320),"DN150","Keangnam 72","KEANGNAM-72",be),_e(new A(-540,1.1,-320),new A(-590,1.1,-320),"DN80","Keangnam Tháp A","KEANGNAM-A",be),_e(new A(-540,1.1,-320),new A(-490,1.1,-320),"DN80","Keangnam Tháp B","KEANGNAM-B",be),_e(new A(-440,1.1,-220),new A(-460,1.1,-220),"DN65","Handico Tower","HANDICO",be),_e(new A(-440,1.1,-170),new A(-460,1.1,-170),"DN65","CEO Tower","CEO",be),_e(new A(-440,1.1,-110),new A(-440,1.1,-110),"DN65","Bảo Tàng Hà Nội","MUSEUM",be),_e(new A(-440,1.1,140),new A(-440,1.1,140),"DN100","Hội Nghị Quốc Gia NCC","NCC",!1),_e(new A(-280,1.1,-180),new A(-280,1.1,-180),"DN80","Big C Thăng Long","BIGC",re),_e(new A(-230,1.1,-220),new A(-230,1.1,-220),"DN80","D'Capitale C1","DCP-C1",re),_e(new A(-190,1.1,-220),new A(-190,1.1,-220),"DN80","D'Capitale C2","DCP-C2",re),_e(new A(-440,1.1,40),new A(-360,1.1,40),"DN80","Thăng Long Number One A","TL-NO1-A",re),_e(new A(-360,1.1,40),new A(-360,1.1,85),"DN80","Thăng Long Number One B","TL-NO1-B",re),_e(new A(240,1.1,270),new A(200,1.1,270),"DN80","Hapulico Complex A","HAP-A",ge),_e(new A(240,1.1,270),new A(110,1.1,270),"DN65","Golden West","GOLDEN-WEST",ge),_e(new A(240,1.1,340),new A(250,1.1,340),"DN80","Imperia Garden A","IMP-A",ge),_e(new A(240,1.1,340),new A(290,1.1,340),"DN80","Imperia Garden B","IMP-B",ge),_e(new A(75,1.1,0),new A(75,1.1,-10),"DN50","Biệt Thự BT1-BT6","VILLAS",Ye),_e(new A(75,1.1,35),new A(110,1.1,35),"DN50","Trường Ngôi Sao Hà Nội","NGOI-SAO",Ye),K([new A(0,1.2,-260),new A(160,1.2,-480),new A(370,1.2,-480),new A(370,1.2,-580)],1.1,16347926,"Tuyến Phân Phối Cấp 2 D300 Mạc Thái Tổ - Nam Trung Yên","PIPE-DIST-NTY-D300",!0,2,{name:"Tuyến Phân Phối Cấp 2 D300 Nam Trung Yên",tier:"Cấp 2 (D300)",flow:"1,450 m³/h",status:"Ổn định"}),K([new A(0,1.2,350),new A(180,1.2,420),new A(310,1.2,480)],1.1,16347926,"Tuyến Phân Phối Cấp 2 D300 Lê Văn Thiêm - Imperia Garden","PIPE-DIST-IMP-D300",!0,2,{name:"Tuyến Phân Phối Cấp 2 D300 Imperia Garden",tier:"Cấp 2 (D300)",flow:"1,680 m³/h",status:"Ổn định"}),K([new A(-160,1.2,-180),new A(-380,1.2,-260),new A(-440,1.2,-260)],1.1,16347926,"Tuyến Phân Phối Cấp 2 D300 VPI Tower & Trần Duy Hưng","PIPE-DIST-VPI-D300",!0,2,{name:"Tuyến Phân Phối Cấp 2 D300 VPI Tower",tier:"Cấp 2 (D300)",flow:"1,150 m³/h",status:"Ổn định"}),K([new A(-240,1,0),new A(-240,1,40)],.65,15381256,"Nhánh Cấp 3 D100 -> THPT Chuyên Amsterdam","PIPE-SRV-AMS",!0,3,{name:"Nhánh D100 -> THPT Amsterdam",tier:"Cấp 3 (D100)",status:"Ổn định"}),K([new A(460,1,-40),new A(460,1,-80)],.65,15381256,"Nhánh Cấp 3 D100 -> Bệnh Viện Thu Cúc","PIPE-SRV-THUCUC",!0,3,{name:"Nhánh D100 -> Bệnh Viện Thu Cúc",tier:"Cấp 3 (D100)",status:"Ổn định"}),K([new A(580,1,50),new A(580,1,100)],.65,15381256,"Nhánh Cấp 3 D100 -> Viện Y Học Cổ Truyền","PIPE-SRV-YHCT",!0,3,{name:"Nhánh D100 -> Viện YHCT Quân Đội",tier:"Cấp 3 (D100)",status:"Ổn định"}),K([new A(310,1,440),new A(310,1,480)],.65,15381256,"Nhánh Cấp 3 D125 -> Imperia Garden","PIPE-SRV-IMP",!0,3,{name:"Nhánh D125 -> Imperia Garden",tier:"Cấp 3 (D125)",status:"Ổn định"}),K([new A(180,1,380),new A(180,1,420)],.65,15381256,"Nhánh Cấp 3 D100 -> Golden West","PIPE-SRV-GW",!0,3,{name:"Nhánh D100 -> Golden West",tier:"Cấp 3 (D100)",status:"Ổn định"}),K([new A(-380,1,-220),new A(-380,1,-260)],.65,15381256,"Nhánh Cấp 3 D100 -> VPI Tower","PIPE-SRV-VPI",!0,3,{name:"Nhánh D100 -> VPI Tower",tier:"Cấp 3 (D100)",status:"Ổn định"}),K([new A(-1240,1.4,40),new A(-850,1.4,40),new A(-700,1.4,40)],1.6,165063,"Trục Truyền Dẫn Cấp 1 D800 Nguồn NMN Sông Đà Phía Tây","PIPE-TRUNK-WEST-D800",!0,1,{name:"Trục Truyền Dẫn Cấp 1 D800 Nguồn NMN Sông Đà",tier:"Cấp 1 (D800)",flow:"5,200 m³/h",status:"Vận hành tối ưu"}),K([new A(-440,1.4,-1200),new A(-440,1.4,-700),new A(-440,1.4,-400)],1.6,165063,"Trục Cấp 1 D800 Vành Đai 3 Phía Bắc (Cầu Giấy)","PIPE-TRUNK-VD3-NORTH",!0,1,{name:"Trục Cấp 1 D800 Vành Đai 3 Phía Bắc",tier:"Cấp 1 (D800)",flow:"4,600 m³/h",status:"Ổn định"}),K([new A(-440,1.4,600),new A(-440,1.4,950),new A(-440,1.4,1200)],1.6,165063,"Trục Cấp 1 D800 Khuất Duy Tiến Phía Nam (Thanh Xuân)","PIPE-TRUNK-VD3-SOUTH",!0,1,{name:"Trục Cấp 1 D800 Khuất Duy Tiến Phía Nam",tier:"Cấp 1 (D800)",flow:"4,100 m³/h",status:"Ổn định"}),K([new A(-440,1.2,140),new A(-660,1.2,140),new A(-840,1.2,180),new A(-840,1.2,40)],1.1,16347926,"Tuyến Phân Phối Cấp 2 D300 Mạch Vòng JW Marriott & Bảo Tàng HN","PIPE-DIST-JWM-D300",!0,2,{name:"Tuyến Phân Phối Cấp 2 D300 Mạch Vòng JW Marriott",tier:"Cấp 2 (D300)",flow:"1,250 m³/h",status:"Ổn định"}),K([new A(-440,1.2,-420),new A(-760,1.2,-420),new A(-880,1.2,-420)],1.1,16347926,"Tuyến Phân Phối Cấp 2 D300 The Manor Mỹ Đình","PIPE-DIST-MANOR-D300",!0,2,{name:"Tuyến Phân Phối Cấp 2 D300 The Manor Mỹ Đình",tier:"Cấp 2 (D300)",flow:"1,100 m³/h",status:"Ổn định"}),K([new A(340,1.2,-220),new A(480,1.2,-220),new A(680,1.2,-240),new A(680,1.2,-420)],1.1,16347926,"Tuyến Phân Phối Cấp 2 D300 ĐH LĐ-XH & Golden Park Tower","PIPE-DIST-NE-D300",!0,2,{name:"Tuyến Phân Phối Cấp 2 D300 ĐH LĐ-XH & Golden Park",tier:"Cấp 2 (D300)",flow:"1,380 m³/h",status:"Ổn định"}),K([new A(340,1.2,350),new A(540,1.2,520),new A(760,1.2,520),new A(760,1.2,620)],1.1,16347926,"Tuyến Phân Phối Cấp 2 D300 Mạch Vòng Royal City & Nguyễn Trãi","PIPE-DIST-ROYAL-D300",!0,2,{name:"Tuyến Phân Phối Cấp 2 D300 Royal City",tier:"Cấp 2 (D300)",flow:"2,150 m³/h",status:"Ổn định"}),K([new A(-660,1,140),new A(-660,1,150)],.65,15381256,"Nhánh Cấp 3 D100 -> Bảo Tàng Hà Nội","PIPE-SRV-BTHN",!0,3,{name:"Nhánh Cấp 3 D100 -> Bảo Tàng Hà Nội",tier:"Cấp 3 (D100)",status:"Ổn định"}),K([new A(-840,1,140),new A(-840,1,180)],.65,15381256,"Nhánh Cấp 3 D125 -> Khách Sạn JW Marriott","PIPE-SRV-JWM",!0,3,{name:"Nhánh Cấp 3 D125 -> Khách Sạn JW Marriott",tier:"Cấp 3 (D125)",status:"Ổn định"}),K([new A(-520,1,-420),new A(-520,1,-430)],.65,15381256,"Nhánh Cấp 3 D100 -> Tháp Handico Tower","PIPE-SRV-HANDICO",!0,3,{name:"Nhánh Cấp 3 D100 -> Tháp Handico Tower",tier:"Cấp 3 (D100)",status:"Ổn định"}),K([new A(480,1,-200),new A(480,1,-220)],.65,15381256,"Nhánh Cấp 3 D100 -> Trường ĐH Lao Động - Xã Hội","PIPE-SRV-DHLDXH",!0,3,{name:"Nhánh Cấp 3 D100 -> ĐH Lao Động Xã Hội",tier:"Cấp 3 (D100)",status:"Ổn định"}),K([new A(760,1,500),new A(760,1,520)],.65,15381256,"Nhánh Cấp 3 D150 -> Đại Đô Thị Royal City","PIPE-SRV-ROYAL",!0,3,{name:"Nhánh Cấp 3 D150 -> Đại Đô Thị Royal City",tier:"Cấp 3 (D150)",status:"Ổn định"});const Ee=new $n;V.add(Ee);const De=(G,q,Se,ue,Me,Ve,me)=>{if(!t.valves)return null;const Ue=new $n;Ue.position.set(G[0],0,G[2]);const Qe=new Jr(2.4,2.7,.6,16),Pe=new kn({color:ue?4524554:413243,roughness:.6}),ct=new Ot(Qe,Pe);ct.position.y=.3,Ue.add(ct);const xt=new wc(2.6,3.6,24),wt=new pa({color:ue?15680580:1096065,side:Gi}),ft=new Ot(xt,wt);ft.rotation.x=-Math.PI/2,ft.position.y=.15,Ue.add(ft);const Nt=new wr(3.6,3.6,3.6),Pn=new kn({color:ue?14427686:1483594,metalness:.7,roughness:.25,emissive:ue?10033947:417606,emissiveIntensity:.35}),Bt=new Ot(Nt,Pn);Bt.position.y=2.4,Bt.castShadow=!0,Ue.add(Bt);const Qt=new Jr(.5,.5,2.5,12),zt=new kn({color:9741240,metalness:.8}),vn=new Ot(Qt,zt);vn.position.y=4.5,Ue.add(vn);const ri=new ef(2,.45,12,24),Dn=new kn({color:ue?16096779:3718648,metalness:.75,roughness:.2}),Mn=new Ot(ri,Dn);Mn.rotation.x=ue?0:Math.PI/2,Mn.position.y=5.8,Ue.add(Mn);const _n=document.createElement("canvas");_n.width=540,_n.height=100;const rn=_n.getContext("2d");rn.fillStyle=ue?"#fee2e2":"#fde047",rn.beginPath(),rn.roundRect(8,8,524,84,18),rn.fill(),rn.strokeStyle=ue?"#dc2626":"#15803d",rn.lineWidth=6,rn.stroke(),rn.strokeStyle=ue?"#b91c1c":"#166534",rn.lineWidth=1.5,rn.strokeRect(14,14,512,72),rn.fillStyle="#000000",rn.font='900 25px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',rn.textAlign="center",rn.textBaseline="middle",rn.fillText(ue?`🔒 ${Se}: ĐÃ ĐÓNG (CẮT NƯỚC)`:`🔓 ${Se}: ĐANG MỞ (HOẠT ĐỘNG)`,270,50);const si=new f0(_n),Mi=new Od({map:si,transparent:!0,depthTest:!1}),It=new r0(Mi);It.position.set(0,12,0),It.scale.set(38,7,1),Ue.add(It);const ji={name:q,id:Se,type:"Chốt Khóa Nước Phân Đoạn (Smart Isolation Valve)",status:ue?"🔒 ĐÃ ĐÓNG (CÔ LẬP & CẮT NƯỚC CỤC BỘ)":"🔓 ĐANG MỞ (Cấp nước bình thường)",isClosed:ue,zoneDescription:Me,affectedBuildings:Ve,householdsAffected:me,pressure:ue?"0.00 bar (Cửa xả)":"3.30 bar (Ổn định)",diameter:"DN300 - DN500 Gang Cầu FCD",material:"Van Cổng Tín Hiệu Điện Tử (Flanged Resilient Gate Valve)"};return Ue.userData={name:q,id:Se,type:"SmartValve",data:ji},Bt.userData=Ue.userData,x.current.push(Bt),Ee.add(Ue),Ue};if(De([0,2.5,20],"Chốt Khóa V-HDT-01 (Hoàng Đạo Thúy - Tháp 34T)","VALVE-01",Mt,"Cụm Lõi Đô Thị Hoàng Đạo Thúy & 24T1-24T3","Tháp Biểu Tượng 34T, Cụm 24T1, 24T2, 24T3, Dãy 17T1-17T6 và dãy nhà phố nội khu","1,120 hộ dân (~4,500 cư dân)"),De([-160,2.5,25],"Chốt Khóa V-HMG-02 (Hoàng Minh Giám - Mandarin)","VALVE-02",Xt,"Phân Khu Trường Học & Chung Cư Cao Cấp Hoàng Minh Giám","Tổ Hợp Mandarin Garden (4 Tháp A, B, C, D) & Trường THPT Chuyên Hà Nội - Amsterdam","1,008 căn hộ + 3,200 học sinh & GV"),De([0,2.5,155],"Chốt Khóa V-LVL-03 (Lê Văn Lương - Diamond Flower)","VALVE-03",j,"Nút Giao Lê Văn Lương - Hoàng Đạo Thúy","Diamond Flower Tower (36T), Star City, The Golden Palm, Cụm HUD Tower A & B, MB Grand Tower","850 hộ dân & 35,000m² văn phòng tài chính"),De([0,2.5,-180],"Chốt Khóa V-TDN-04 (Trần Duy Hưng - Charmvit Tower)","VALVE-04",_t,"Phân Khu Khách Sạn & Ngoại Giao Trần Duy Hưng","Tổ hợp Charmvit Tower, Khách sạn Grand Plaza, Cụm Chung Cư N04 (3 tháp) & N05 (2 tháp 34T)","920 căn hộ & 540 phòng khách sạn 5 sao"),De([-280,2.5,-180],"Chốt Khóa V-DCP-05 (Vinhomes D'Capitale & Big C)","VALVE-05",re,"Cửa Ngõ Phía Nam Trần Duy Hưng - Khuất Duy Tiến","Tổ Hợp 6 Tòa Tháp Vinhomes D'Capitale, Siêu Thị Big C Thăng Long, 2 Tháp Thăng Long Number One","3,000 căn hộ cao cấp & TTTM Big C Thăng Long"),De([-440,2.5,-320],"Chốt Khóa V-KNG-06 (Keangnam Landmark 72 & Phạm Hùng)","VALVE-06",be,"Trung Tâm Tài Chính Phía Tây Hà Nội","Keangnam Hanoi Landmark 72 (350m), 2 Tháp Căn Hộ Đôi Keangnam 48T, Handico Tower, CEO Tower, Bảo tàng HN","922 căn hộ Penthouse, TTTM Lotte & Trụ sở Tập đoàn"),De([180,2.5,270],"Chốt Khóa V-HAP-07 (Ngụy Như Kon Tum - Hapulico)","VALVE-07",ge,"Phân Khu Dân Cư Ngụy Như Kon Tum - Vũ Trọng Phụng","Tổ hợp Hapulico Complex (4 Block), Chung Cư Golden West, Imperia Garden (2 Tháp 35T), Shophouse Chợ Thuốc","1,200 căn hộ & Chợ Dược Phẩm miền Bắc"),De([75,2.5,0],"Chốt Khóa V-NTT-08 (Nguyễn Thị Thập - Khu Biệt Thự)","VALVE-08",Ye,"Khu Đô Thị Thấp Tầng Nguyễn Thị Thập","150 Biệt thự Liền kề BT1 - BT6, Trường Liên cấp Ngôi Sao, 50 Shophouse mặt phố Nguyễn Thị Thập","150 căn biệt thự & 2,200 học sinh"),t.hydrants){const G=new $n;V.add(G);const q=(ue,Me,Ve,me)=>{const Ue=new $n;Ue.position.set(ue[0],0,ue[2]);const Qe=new Jr(.7,.8,1.2,12),Pe=new kn({color:14427686,metalness:.6,roughness:.25,emissive:10033947,emissiveIntensity:.35}),ct=new Ot(Qe,Pe);ct.position.y=.6,Ue.add(ct);const xt=new Jr(.55,.55,2.2,12),wt=new Ot(xt,Pe);wt.position.y=2,Ue.add(wt);const ft=new ga(.65,12,12),Nt=new Ot(ft,Pe);Nt.position.y=3.1,Ue.add(Nt),Ue.userData={name:Me,id:Ve,type:"Trụ Cứu Hỏa PCCC",data:{name:Me,id:Ve,type:"Trụ Cứu Hỏa Đô Thị (TCVN 6379:1998)",status:"Sẵn sàng cấp nước chữa cháy 24/7 (Đạt QCVN 06:2022/BXD)",flow:"35.0 L/s (Lưu lượng danh định)",pressure:"3.35 bar (Cột áp tĩnh)",elevation:"+16.8m ASL",diameter:"Họng cấp DN100 + 2 họng phụ DN65",households:"Bán kính bảo vệ PCCC: 150m",dma:me}},wt.userData=Ue.userData,x.current.push(wt),G.add(Ue)};[...[-300,-220,-140,-60,20,100,180,260].map((ue,Me)=>({pos:[14,0,ue],id:`HYD-HDT-${Me+1}`,road:"Đường Hoàng Đạo Thúy"})),...[-380,-300,-220,-140,-60,20,100,180,260,340].map((ue,Me)=>({pos:[ue,0,194],id:`HYD-LVL-${Me+1}`,road:"Đường Lê Văn Lương"})),...[-380,-300,-220,-140,-60,20,100,180,260,340].map((ue,Me)=>({pos:[ue,0,-196],id:`HYD-TDH-${Me+1}`,road:"Đường Trần Duy Hưng"})),...[-500,-420,-340,-260,-180,-100,-20,60,140,220,300,380].map((ue,Me)=>({pos:[-422,0,ue],id:`HYD-VD3-${Me+1}`,road:"Đường Phạm Hùng - Khuất Duy Tiến"})),...[-200,-130,-60,10,80,150,220,290].map((ue,Me)=>({pos:[-148,0,ue],id:`HYD-HMG-${Me+1}`,road:"Đường Hoàng Minh Giám"})),...[-140,-80,-20,40,100,160,220,280].map((ue,Me)=>({pos:[ue,0,12],id:`HYD-NTT-${Me+1}`,road:"Đường Nguyễn Thị Thập"})),...[-120,-60,0,60,120,180,240,300].map((ue,Me)=>({pos:[ue,0,362],id:`HYD-NNKT-${Me+1}`,road:"Đường Ngụy Như Kon Tum"})),...[-280,-200,-120,-40,40,120,200,280].map((ue,Me)=>({pos:[352,0,ue],id:`HYD-TK-${Me+1}`,road:"Phố Trung Kính"})),...[190,230,270,310,350,390].map((ue,Me)=>({pos:[248,0,ue],id:`HYD-VTP-${Me+1}`,road:"Phố Vũ Trọng Phụng"}))].forEach(ue=>q(ue.pos,`Trụ Cứu Hỏa ${ue.id}`,ue.id,ue.road))}if(t.tanks){const G=new $n;G.position.set(-350,0,220);const q=new Jr(8,12,38,16),Se=new kn({color:E?1976635:6583435,roughness:.7}),ue=new Ot(q,Se);ue.position.y=19,ue.castShadow=!0,G.add(ue);const Me=new ga(18,24,20),Ve=new kn({color:E?165063:223649,metalness:.6,roughness:.2,emissive:E?223649:165063,emissiveIntensity:.25}),me=new Ot(Me,Ve);me.position.y=44,me.castShadow=!0,G.add(me),G.userData={name:"Đài Nước & Trạm Bơm Tăng Áp Sông Đà (KĐT Nhân Chính)",id:"PUMP-STATION-MAIN",type:"Trạm Bơm & Đài Nước Tăng Áp",data:{name:"Đài Nước Điều Áp & Trạm Bơm Tăng Áp Sông Đà",id:"PUMP-STATION-MAIN",type:"Đài Nước Cân Bằng Thủy Lực & Trạm Bơm Tăng Áp",status:"Hoạt động liên tục (3/3 tổ máy biến tần)",flow:`${u.flow.toFixed(1)} m³/h`,pressure:`${u.pressure.toFixed(2)} bar (Áp lực xuất trạm)`,level:"14.2m / 16.0m (Dung tích 8,000 m³)",elevation:"+35.0m ASL",power:"3 x 160 kW Biến tần ABB",dma:"Toàn KĐT Trung Hòa - Nhân Chính"}},me.userData=G.userData,x.current.push(me),V.add(G)}const Fe=new V1,ve=new Xe,xe=G=>{var ue;const q=te.domElement.getBoundingClientRect();ve.x=(G.clientX-q.left)/q.width*2-1,ve.y=-((G.clientY-q.top)/q.height)*2+1,Fe.setFromCamera(ve,$);const Se=Fe.intersectObjects(x.current,!0);if(Se.length>0){let Me=Se[0].object;for(;Me&&!((ue=Me.userData)!=null&&ue.data)&&Me.parent;)Me=Me.parent;Me&&Me.userData&&(Me.userData.type==="SmartValve"&&o&&o(Me.userData.id),p&&Me.userData.data&&p(Me.userData.data))}},Ie=G=>{var ue,Me;const q=te.domElement.getBoundingClientRect();ve.x=(G.clientX-q.left)/q.width*2-1,ve.y=-((G.clientY-q.top)/q.height)*2+1,Fe.setFromCamera(ve,$);const Se=Fe.intersectObjects(x.current,!0);if(Se.length>0){let Ve=Se[0].object;for(;Ve&&!((ue=Ve.userData)!=null&&ue.name)&&Ve.parent;)Ve=Ve.parent;if(Ve&&((Me=Ve.userData)!=null&&Me.name)){te.domElement.style.cursor="pointer",F(Ve.userData.name);return}}te.domElement.style.cursor="grab",F(null)};te.domElement.addEventListener("pointerdown",xe),te.domElement.addEventListener("pointermove",Ie);const z=()=>{R.current=requestAnimationFrame(z),y.current.forEach(G=>{G.t=(G.t+G.speed)%1;const q=G.curve.getPointAt(G.t);q&&G.mesh.position.copy(q)}),H.update(),te.render(V,$)};z();const ye=()=>{if(!O)return;const G=O.clientWidth,q=O.clientHeight;$.aspect=G/q,$.updateProjectionMatrix(),te.setSize(G,q)};return window.addEventListener("resize",ye),()=>{window.removeEventListener("resize",ye),te.domElement&&(te.domElement.removeEventListener("pointerdown",xe),te.domElement.removeEventListener("pointermove",Ie)),R.current&&cancelAnimationFrame(R.current),w.current&&w.current.dispose(),y.current.forEach(G=>V.remove(G.mesh))}},[s,e,t,r,l,f]),g.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",minHeight:d?"440px":"560px"},children:[g.jsx("div",{ref:_,style:{width:"100%",height:"100%",outline:"none"}}),P.length>0&&g.jsxs("div",{style:{position:"absolute",top:"14px",left:"50%",transform:"translateX(-50%)",background:"rgba(220, 38, 38, 0.95)",color:"#ffffff",padding:"8px 18px",borderRadius:"8px",display:"flex",alignItems:"center",gap:"10px",zIndex:50,fontSize:"13px",fontWeight:"600",backdropFilter:"blur(6px)",animation:"pulse 2s infinite"},children:[g.jsx(mo,{size:18,color:"#fef08a"}),g.jsxs("span",{children:["⚠️ ĐANG CÔ LẬP CẮT NƯỚC: ",P.length," chốt khóa đang ĐÓNG. Click vào chốt van màu đỏ để mở lại nước!"]})]}),g.jsx("div",{style:{position:"absolute",bottom:d?"14px":"80px",left:"16px",pointerEvents:"none",display:"flex",flexDirection:"column",gap:"4px",zIndex:30},children:D&&g.jsxs("div",{style:{background:"rgba(11, 18, 33, 0.95)",color:"#38bdf8",padding:"7px 14px",borderRadius:"6px",fontSize:"12.5px",fontWeight:"600",border:"1px solid rgba(56, 189, 248, 0.5)",boxShadow:"0 6px 16px rgba(0, 0, 0, 0.4)",display:"inline-flex",alignItems:"center",gap:"8px"},children:[g.jsx(J0,{size:14}),g.jsx("span",{children:D})]})})]})}function JE(){var cn,Lt,Sn,kt,Zt,Mt,Xt,j,_t;const[s,e]=Rt.useState("gis"),[t,r]=Rt.useState("DMA 2"),[o,l]=Rt.useState("24h"),[u,d]=Rt.useState(null),[f,p]=Rt.useState({pipes:!0,valves:!0,sensors:!0}),[_,M]=Rt.useState(""),[v,S]=Rt.useState([{id:1,type:"Áp lực cao bất thường",location:"Trạm bơm Phân khu 3 (DMA 3)",time:"14:22",status:"High Pressure",severity:"danger",handled:!1},{id:2,type:"Nghi vấn rò rỉ đêm (MNF)",location:"Tuyến ống chính Zone A (DMA 1)",time:"13:50",status:"Leak Suspected",severity:"warning",handled:!1},{id:3,type:"Sụt áp cục bộ",location:"Khu biệt thự BT2 - Cụm B (DMA 2)",time:"12:15",status:"Low Pressure",severity:"warning",handled:!0},{id:4,type:"Độ đục vượt chuẩn nhẹ (NTU)",location:"Cửa xả Bể chứa ngầm Splendora",time:"10:04",status:"Water Quality",severity:"info",handled:!1}]),[w,R]=Rt.useState(!1),[y,x]=Rt.useState(null),[D,F]=Rt.useState("3d"),[P,O]=Rt.useState(null);Rt.useEffect(()=>{const re=be=>{be.target.closest(".qatium-dropdown-container")||O(null)};return document.addEventListener("pointerdown",re),()=>document.removeEventListener("pointerdown",re)},[]);const[I,T]=Rt.useState("dark"),[E,Y]=Rt.useState("pressure"),[B,V]=Rt.useState({pipes:!0,pipesPrimary:!0,pipesSecondary:!0,pipesService:!0,valves:!0,sensors:!0,hydrants:!0,tanks:!0,buildings:!0,streetLabels:!0,contour:!0}),[$,te]=Rt.useState(14),[H,he]=Rt.useState(!1),[le,ee]=Rt.useState(null),[ne,J]=Rt.useState(!1),[Q,U]=Rt.useState({"VALVE-01":!1,"VALVE-02":!1,"VALVE-03":!1,"VALVE-04":!1,"VALVE-05":!1,"VALVE-06":!1,"VALVE-07":!1,"VALVE-08":!1,"VALVE-09":!1,"VALVE-10":!1,"VALVE-11":!1,"VALVE-12":!1}),se={"VALVE-01":{name:"VALVE-01",location:"Nút Hoàng Đạo Thúy - NMN Sông Đà",type:"D500 Tuyến cấp 1",note:"Phân đoạn trục chính truyền dẫn"},"VALVE-02":{name:"VALVE-02",location:"Trần Duy Hưng - Big C Thăng Long",type:"D400 Tuyến cấp 1/2",note:"Điều tiết phân vùng siêu thị & KĐT Đông Nam"},"VALVE-03":{name:"VALVE-03",location:"Nút Nguyễn Thị Định - Lê Văn Lương",type:"D300 Mạch vòng cấp 2",note:"Phân phối phân khu Trung Hòa"},"VALVE-04":{name:"VALVE-04",location:"Khu Chung cư 34T & Diamond Flower",type:"D250 Cấp 2/3",note:"Cô lập áp lực cao tầng tổ hợp 34T"},"VALVE-05":{name:"VALVE-05",location:"Cụm Shophouse Phố Hoàng Ngân",type:"D200 Mạch nhánh cấp 3",note:"Đấu nối dịch vụ khu phố ẩm thực"},"VALVE-06":{name:"VALVE-06",location:"Khu Biệt thự BT Cụm B & Nhà hát",type:"D150 Nhánh cấp 3",note:"Điều áp nhánh biệt thự vườn"},"VALVE-07":{name:"VALVE-07",location:"Trung tâm Hội nghị Quốc gia (NCC)",type:"D350 Tuyến cấp 2",note:"Đảm bảo an ninh cấp nước trọng điểm ngoại giao"},"VALVE-08":{name:"VALVE-08",location:"Nút KĐT Trung Hòa - Nhân Chính",type:"D300 Phân đoạn",note:"Cô lập mô phỏng cắt nước vùng trung tâm"},"VALVE-09":{name:"VALVE-09",location:"THPT Chuyên Hà Nội - Amsterdam",type:"D200 Nhánh cấp 3",note:"Cấp nước khu giảng đường & bể bơi ngầm"},"VALVE-10":{name:"VALVE-10",location:"KĐT Nam Trung Yên - Yên Hòa",type:"D300 Mạch vòng cấp 2",note:"Tuyến cấp nước chung cư cao tầng Nam Trung Yên"},"VALVE-11":{name:"VALVE-11",location:"Bệnh viện Thu Cúc & BV Quân Đội",type:"D250 Tuyến ưu tiên cấp 2",note:"Van khẩn cấp đảm bảo y tế không gián đoạn"},"VALVE-12":{name:"VALVE-12",location:"Imperia Garden & Golden West",type:"D300 Tuyến cấp 2",note:"Phân phối cụm chung cư 35T Lê Văn Thiêm"}},Oe=re=>{U(be=>{const ge={...be,[re]:!be[re]},Ye=ge[re];return x(Ye?`⚠️ Đã ĐÓNG ${re}: Cô lập dòng nước tại phân đoạn này.`:`💧 Đã MỞ ${re}: Khôi phục dòng chảy thủy lực.`),setTimeout(()=>x(null),3e3),ge})};Rt.useEffect(()=>{let re;return H&&(re=setInterval(()=>{te(be=>(be+1)%24)},1400)),()=>clearInterval(re)},[H]);const we=(re=>re>=2&&re<=4?{label:"03:00 - Đêm (MNF Rò rỉ)",flow:58.4,pressure:3.72,status:"Cảnh báo rò rỉ đêm",nrw:"16.2%"}:re>=6&&re<=8?{label:"07:30 - Cao điểm sáng",flow:168.2,pressure:3.05,status:"Phụ tải tăng cao",nrw:"11.8%"}:re>=18&&re<=20?{label:"19:00 - Cao điểm tối",flow:174.5,pressure:2.92,status:"Phụ tải sinh hoạt",nrw:"12.1%"}:{label:`${re<10?"0"+re:re}:00 - Giờ bình thường`,flow:145.8,pressure:3.24,status:"Vận hành ổn định",nrw:"12.5%"})($),Ce=re=>{x(re),setTimeout(()=>x(null),3e3)},He=re=>{S(be=>be.map(ge=>{if(ge.id===re){const Ye=!ge.handled;return Ce(Ye?`Đã điều động kỹ thuật viên xử lý: ${ge.type}`:`Đã hoàn tác trạng thái sự cố: ${ge.type}`),{...ge,handled:Ye}}return ge}))},Ae=(re="water_management_report.csv")=>{const ge=encodeURI(`data:text/csv;charset=utf-8,\uFEFFDiem Do,Phan Khu,Luu Luong (m3/h),Ap Luc (bar),Trang Thai
FM-01 (Dau vao Tong),Nha May Nuoc,145.8,3.8,Toi uu
PRV-02 (Giam ap),DMA 1,48.2,3.1,On dinh
PRV-03 (Giam ap),DMA 2,62.4,3.2,On dinh
FM-04 (Dong ho DMA),DMA 3,35.2,3.4,Canh bao Ap cao
SN-05 (Cam bien diem cut),DMA 2,0.0,2.1,Sut ap cuc bo
FM-06 (Ho Dieu Hoa),Splendora,18.5,2.9,Dang khoa
`),Ye=document.createElement("a");Ye.setAttribute("href",ge),Ye.setAttribute("download",re),document.body.appendChild(Ye),Ye.click(),document.body.removeChild(Ye),Ce(`Đã xuất và tải về: ${re}`)},Ke=()=>{window.print()},it={"DMA 1":{name:"DMA 1 - Khu Biệt Thự Phía Nam",flow:"48.2 m³/h",pressure:"3.1 bar",households:320,nrw:"11.8%",status:"Bình thường"},"DMA 2":{name:"DMA 2 - Cụm Trung Tâm & Công Viên",flow:"62.4 m³/h",pressure:"3.2 bar",households:450,nrw:"13.2%",status:"Ổn định"},"DMA 3":{name:"DMA 3 - Khu Biệt Thự Ven Hồ",flow:"35.2 m³/h",pressure:"3.4 bar",households:280,nrw:"10.5%",status:"Cảnh báo áp lực"}},ot={"24h":{title:"Lưu Lượng Thủy Lực 24 Giờ (m³/h)",subtitle:"So sánh Lưu lượng Thực tế vs Đường Trung bình Baseline",points:[{label:"00h",actual:68,baseline:65,alert:!1},{label:"02h",actual:74,baseline:60,alert:!0,note:"MNF vượt chuẩn (+14 m³/h)"},{label:"04h",actual:62,baseline:60,alert:!1},{label:"06h",actual:110,baseline:105,alert:!1},{label:"08h",actual:172,baseline:160,alert:!0,note:"Đỉnh cao điểm sáng"},{label:"10h",actual:130,baseline:132,alert:!1},{label:"12h",actual:142,baseline:140,alert:!1},{label:"14h",actual:145.8,baseline:138,alert:!1},{label:"16h",actual:138,baseline:135,alert:!1},{label:"18h",actual:165,baseline:162,alert:!1},{label:"20h",actual:152,baseline:150,alert:!1},{label:"22h",actual:98,baseline:95,alert:!1}]},"7d":{title:"Lưu Lượng Thủy Lực 7 Ngày Qua (m³/ngày)",subtitle:"Xu hướng cấp nước theo ngày trong tuần",points:[{label:"Thứ 2",actual:3250,baseline:3200,alert:!1},{label:"Thứ 3",actual:3310,baseline:3220,alert:!1},{label:"Thứ 4",actual:3480,baseline:3250,alert:!0,note:"Tăng vọt giữa tuần (+7%)"},{label:"Thứ 5",actual:3290,baseline:3240,alert:!1},{label:"Thứ 6",actual:3380,baseline:3300,alert:!1},{label:"Thứ 7",actual:3620,baseline:3550,alert:!1},{label:"CN",actual:3590,baseline:3500,alert:!1}]},"30d":{title:"Lưu Lượng Thủy Lực 30 Ngày (m³/ngày)",subtitle:"Đường biến thiên chu kỳ tháng",points:[{label:"Tuần 1",actual:23100,baseline:22800,alert:!1},{label:"Tuần 2",actual:24500,baseline:23e3,alert:!0,note:"Đợt nắng nóng tăng tiêu thụ"},{label:"Tuần 3",actual:23200,baseline:22900,alert:!1},{label:"Tuần 4",actual:22800,baseline:22700,alert:!1}]}}[o],bt=Math.max(...ot.points.map(re=>Math.max(re.actual,re.baseline)))*1.15,gt=Math.min(...ot.points.map(re=>Math.min(re.actual,re.baseline)))*.85,nn=re=>180-(re-gt)/(bt-gt)*160+10,jt=re=>{const ge=620/(ot.points.length-1);return ot.points.map((Ye,Te)=>`${Te*ge+40},${nn(Ye[re])}`).join(" L ")};return g.jsxs("div",{className:"app-layout",children:[w&&g.jsx("div",{className:"sidebar-backdrop",onClick:()=>R(!1)}),g.jsxs("aside",{className:`app-sidebar ${w?"mobile-open":""}`,children:[g.jsxs("div",{className:"sidebar-header",children:[g.jsx("div",{className:"logo-badge",children:g.jsx(ro,{size:22})}),g.jsxs("div",{children:[g.jsx("div",{className:"logo-title",children:"Smart Water"}),g.jsx("div",{className:"logo-sub",children:"IoT SCADA"})]})]}),g.jsxs("nav",{className:"sidebar-nav",children:[g.jsx("div",{className:"nav-label",children:"Nghiệp Vụ"}),g.jsxs("button",{className:`nav-item ${s==="overview"?"active":""}`,onClick:()=>{e("overview"),R(!1)},children:[g.jsx(Rl,{size:18}),g.jsx("span",{children:"1. Tổng quan"})]}),g.jsxs("button",{className:`nav-item ${s==="gis"?"active":""}`,onClick:()=>{e("gis"),R(!1)},children:[g.jsx(Y_,{size:18}),g.jsx("span",{children:"2. Mạng GIS"})]}),g.jsxs("button",{className:`nav-item ${s==="telemetry"?"active":""}`,onClick:()=>{e("telemetry"),R(!1)},children:[g.jsx(Nl,{size:18}),g.jsx("span",{children:"3. Áp & Lưu lượng"})]}),g.jsxs("button",{className:`nav-item ${s==="leaks"?"active":""}`,onClick:()=>{e("leaks"),R(!1)},children:[g.jsx(mo,{size:18}),g.jsx("span",{children:"4. Thất thoát (NRW)"})]}),g.jsxs("button",{className:`nav-item ${s==="quality"?"active":""}`,onClick:()=>{e("quality"),R(!1)},children:[g.jsx(ro,{size:18}),g.jsx("span",{children:"5. Chất lượng nước"})]}),g.jsx("div",{className:"nav-label",style:{marginTop:"16px"},children:"Báo Cáo"}),g.jsxs("button",{className:`nav-item ${s==="reports"?"active":""}`,onClick:()=>{e("reports"),R(!1)},children:[g.jsx(dh,{size:18}),g.jsx("span",{children:"6. Kiểm toán nước"})]})]}),g.jsxs("div",{className:"sidebar-footer",children:[g.jsxs("div",{className:"system-status",children:[g.jsx("span",{className:"status-dot"}),g.jsx("span",{children:"Trực tuyến: 48 node"})]}),g.jsx(J_,{size:14,color:"#94a3b8",style:{cursor:"pointer"},onClick:()=>Ce("Đã đồng bộ lại 48 node")})]})]}),g.jsxs("div",{className:"main-wrapper",children:[g.jsxs("header",{className:"top-header",children:[g.jsxs("div",{className:"header-left-group",children:[g.jsx("button",{className:"mobile-menu-btn",onClick:()=>R(!w),"aria-label":"Toggle navigation menu",children:w?g.jsx(Fm,{size:20}):g.jsx($_,{size:20})}),g.jsxs("div",{className:"header-search",children:[g.jsx(tx,{size:16}),g.jsx("input",{type:"text",placeholder:"Tìm trạm, DMA, cảm biến...",value:_,onChange:re=>M(re.target.value)})]})]}),g.jsxs("div",{className:"header-actions",children:[g.jsxs("button",{className:"action-btn",onClick:()=>Ae("Bao_Cao_Van_Hanh_Ngay.csv"),title:"Xuất báo cáo CSV",children:[g.jsx(dh,{size:15}),g.jsx("span",{children:"Xuất báo cáo"})]}),g.jsxs("button",{className:"action-btn",style:{position:"relative"},onClick:()=>Ce("Cảnh báo: 1 sự cố áp cao tại DMA 3"),"aria-label":"Thông báo sự cố",title:"Xem thông báo",children:[g.jsx(G_,{size:16}),g.jsx("span",{style:{position:"absolute",top:"6px",right:"8px",width:"7px",height:"7px",background:"#ef4444",borderRadius:"50%"}})]}),g.jsxs("div",{className:"user-profile",title:"Tài khoản kỹ sư",children:[g.jsx("div",{className:"user-avatar",children:"AD"}),g.jsxs("div",{className:"user-info",children:[g.jsx("span",{className:"user-name",children:"Kỹ sư trực"}),g.jsx("span",{className:"user-role",children:"Vận hành"})]})]})]})]}),g.jsxs("main",{className:"content-container",children:[s==="overview"&&g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"page-title-row",children:[g.jsxs("div",{children:[g.jsx("h1",{className:"page-title",children:"Giám sát Cấp nước"}),g.jsx("p",{className:"page-subtitle",children:"Áp lực, lưu lượng 3 DMA và thất thoát thời gian thực"})]}),g.jsx("div",{style:{display:"flex",gap:"8px"},children:g.jsxs("span",{className:"metric-badge badge-success",children:[g.jsx(io,{size:13}),g.jsx("span",{children:"Trạm bơm chính: 100%"})]})})]}),g.jsxs("div",{className:"metrics-grid",children:[g.jsxs("div",{className:"metric-card",children:[g.jsxs("div",{className:"metric-header",children:[g.jsx("span",{children:"Lưu lượng cấp"}),g.jsx("div",{className:"metric-icon-wrap",style:{background:"#e0f2fe",color:"#0284c7"},children:g.jsx(ro,{size:18})})]}),g.jsxs("div",{className:"metric-body",children:[g.jsx("span",{className:"metric-value",children:"145.8"}),g.jsx("span",{className:"metric-unit",children:"m³/h"})]}),g.jsx("div",{children:g.jsx("span",{className:"metric-badge badge-success",children:"↑ 3.2% định mức giờ"})})]}),g.jsxs("div",{className:"metric-card",children:[g.jsxs("div",{className:"metric-header",children:[g.jsx("span",{children:"Áp lực trung bình"}),g.jsx("div",{className:"metric-icon-wrap",style:{background:"#ecfdf5",color:"#10b981"},children:g.jsx(Nl,{size:18})})]}),g.jsxs("div",{className:"metric-body",children:[g.jsx("span",{className:"metric-value",children:"3.2"}),g.jsx("span",{className:"metric-unit",children:"bar"})]}),g.jsx("div",{children:g.jsx("span",{className:"metric-badge badge-info",children:"Tối ưu: 2.8 - 3.5 bar"})})]}),g.jsxs("div",{className:"metric-card",children:[g.jsxs("div",{className:"metric-header",children:[g.jsx("span",{children:"Thất thoát (NRW)"}),g.jsx("div",{className:"metric-icon-wrap",style:{background:"#fef3c7",color:"#d97706"},children:g.jsx(Om,{size:18})})]}),g.jsx("div",{className:"metric-body",children:g.jsx("span",{className:"metric-value",children:"12.5%"})}),g.jsx("div",{children:g.jsx("span",{className:"metric-badge badge-success",children:"↓ 1.1% theo tuần"})})]}),g.jsxs("div",{className:"metric-card",children:[g.jsxs("div",{className:"metric-header",children:[g.jsx("span",{children:"Cảnh báo"}),g.jsx("div",{className:"metric-icon-wrap",style:{background:"#fee2e2",color:"#ef4444"},children:g.jsx(mo,{size:18})})]}),g.jsxs("div",{className:"metric-body",children:[g.jsx("span",{className:"metric-value",style:{color:"#ef4444"},children:v.filter(re=>!re.handled).length}),g.jsx("span",{className:"metric-unit",children:"sự cố"})]}),g.jsx("div",{children:g.jsx("span",{className:"metric-badge badge-danger",children:"1 nghi vấn đêm"})})]})]}),g.jsxs("div",{className:"dashboard-main-grid",children:[g.jsxs("div",{className:"panel-card",children:[g.jsxs("div",{className:"panel-card-header",children:[g.jsxs("div",{className:"panel-card-title",children:[g.jsx(q_,{size:17,color:"#0284c7"}),g.jsx("span",{children:"Sơ đồ phân vùng DMA"})]}),g.jsxs("div",{className:"panel-card-actions",children:[g.jsxs("div",{className:"qatium-hud-pill-group",style:{padding:"2px"},children:[g.jsx("button",{className:`qatium-hud-btn ${I==="dark"?"active":""}`,onClick:()=>T("dark"),style:{padding:"4px 8px",fontSize:"11.5px"},title:"Chế độ Digital Twin (Tối)",children:"Tối"}),g.jsx("button",{className:`qatium-hud-btn ${I==="light"?"active":""}`,onClick:()=>T("light"),style:{padding:"4px 8px",fontSize:"11.5px"},title:"Chế độ SCADA (Sáng)",children:"Sáng"})]}),g.jsx("button",{className:"btn-sm btn-secondary",onClick:()=>e("gis"),children:"Mở GIS →"})]})]}),g.jsxs("div",{className:`map-canvas-container ${I==="dark"?"dark-theme":"light-theme"}`,style:{minHeight:"440px",height:"440px",position:"relative"},children:[g.jsx($0,{theme:I,heatmap:E,assetsLayer:B,isolatedPipe:ne,simTime:$,currentSim:we,compact:!0,onSelectAsset:re=>{re.dma&&(re.dma.includes("DMA 1")||re.dma==="DMA 1")?r("DMA 1"):re.dma&&(re.dma.includes("DMA 2")||re.dma==="DMA 2")?r("DMA 2"):re.dma&&(re.dma.includes("DMA 3")||re.dma==="DMA 3")&&r("DMA 3")}}),g.jsxs("div",{className:"map-overlay-badge",style:{zIndex:25,pointerEvents:"auto"},children:[g.jsx("div",{className:"map-overlay-title",children:it[t].name}),g.jsxs("div",{className:"map-overlay-sub",children:["Lưu lượng: ",g.jsx("b",{children:it[t].flow})," · Áp: ",g.jsx("b",{children:it[t].pressure})," · NRW: ",g.jsx("b",{children:it[t].nrw})]})]})]})]}),g.jsxs("div",{className:"panel-card",children:[g.jsxs("div",{className:"panel-card-header",children:[g.jsxs("div",{children:[g.jsxs("div",{className:"panel-card-title",children:[g.jsx(Rl,{size:17,color:"#0284c7"}),g.jsx("span",{children:"Thủy lực 24h & Cảnh báo"})]}),g.jsx("span",{style:{fontSize:"12px",color:"#64748b"},children:ot.subtitle})]}),g.jsxs("div",{className:"timeframe-group",children:[g.jsx("button",{className:`timeframe-btn ${o==="24h"?"active":""}`,onClick:()=>l("24h"),children:"24 Giờ"}),g.jsx("button",{className:`timeframe-btn ${o==="7d"?"active":""}`,onClick:()=>l("7d"),children:"7 Ngày"}),g.jsx("button",{className:`timeframe-btn ${o==="30d"?"active":""}`,onClick:()=>l("30d"),children:"30 Ngày"})]})]}),g.jsxs("div",{className:"line-chart-wrapper",children:[g.jsxs("div",{className:"line-chart-legend",children:[g.jsxs("div",{className:"legend-line-item",children:[g.jsx("div",{className:"line-sample-actual"}),g.jsx("span",{children:"Thực tế"})]}),g.jsxs("div",{className:"legend-line-item",children:[g.jsx("div",{className:"line-sample-baseline"}),g.jsx("span",{children:"Baseline"})]}),g.jsxs("div",{className:"legend-line-item",children:[g.jsx("div",{className:"line-sample-alert"}),g.jsx("span",{children:"Lệch chuẩn"})]})]}),g.jsxs("div",{style:{position:"relative",width:"100%",height:"220px",background:"#ffffff"},children:[g.jsxs("svg",{viewBox:"0 0 700 220",style:{width:"100%",height:"100%"},children:[g.jsx("line",{x1:"40",y1:"30",x2:"680",y2:"30",stroke:"#f1f5f9",strokeWidth:"1"}),g.jsx("line",{x1:"40",y1:"80",x2:"680",y2:"80",stroke:"#f1f5f9",strokeWidth:"1"}),g.jsx("line",{x1:"40",y1:"130",x2:"680",y2:"130",stroke:"#f1f5f9",strokeWidth:"1"}),g.jsx("line",{x1:"40",y1:"180",x2:"680",y2:"180",stroke:"#e2e8f0",strokeWidth:"1.5"}),g.jsx("path",{d:`M ${jt("baseline")}`,fill:"none",stroke:"#94a3b8",strokeWidth:"2.5",strokeDasharray:"6,5"}),g.jsx("path",{d:`M ${jt("actual")}`,fill:"none",stroke:"#0284c7",strokeWidth:"3.5",strokeLinecap:"round",strokeLinejoin:"round"}),ot.points.map((re,be)=>{const Ye=620/(ot.points.length-1),Te=be*Ye+40,We=nn(re.actual);return g.jsxs("g",{children:[re.alert&&g.jsx("circle",{cx:Te,cy:We,r:"9",fill:"rgba(239, 68, 68, 0.25)",stroke:"#ef4444",strokeWidth:"1.5"}),g.jsx("circle",{cx:Te,cy:We,r:re.alert?"5":"4",fill:re.alert?"#ef4444":"#0284c7",stroke:"#ffffff",strokeWidth:"2",style:{cursor:"pointer"},onMouseEnter:()=>d(re),onMouseLeave:()=>d(null)}),g.jsx("text",{x:Te,y:"202",textAnchor:"middle",fontSize:"11",fill:"#64748b",fontFamily:"var(--font-mono)",children:re.label})]},be)})]}),u&&g.jsxs("div",{style:{position:"absolute",top:"10px",right:"20px",background:"#0f172a",color:"#ffffff",padding:"8px 12px",borderRadius:"8px",fontSize:"12px",boxShadow:"0 4px 12px rgba(0,0,0,0.15)",zIndex:10},children:[g.jsxs("div",{style:{fontWeight:"700",marginBottom:"2px"},children:["Thời điểm: ",u.label]}),g.jsxs("div",{children:["Thực tế: ",g.jsxs("b",{style:{color:"#38bdf8"},children:[u.actual," m³/h"]})]}),g.jsxs("div",{children:["Trung bình: ",g.jsxs("b",{children:[u.baseline," m³/h"]})]}),u.note&&g.jsxs("div",{style:{color:"#f87171",marginTop:"4px",fontWeight:"600"},children:["⚠ ",u.note]})]})]}),g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"12px",color:"#64748b",borderTop:"1px solid #f1f5f9",paddingTop:"10px"},children:[g.jsxs("span",{children:["MNF đêm: ",g.jsx("b",{children:"65 m³/h"})," (Nguy cơ: ",">"," 70 m³/h)"]}),g.jsxs("span",{children:["Hệ số an toàn: ",g.jsx("b",{children:"1.15"})]})]})]})]})]}),g.jsxs("div",{className:"panel-card",children:[g.jsxs("div",{className:"panel-card-header",children:[g.jsxs("div",{className:"panel-card-title",children:[g.jsx(nx,{size:17,color:"#ef4444"}),g.jsx("span",{children:"Nhật ký sự cố SCADA"})]}),g.jsx("div",{className:"panel-card-actions",children:g.jsx("span",{className:"metric-badge badge-warning",children:"Chờ xử lý"})})]}),g.jsx("div",{className:"data-table-wrapper",children:g.jsxs("table",{className:"custom-table",children:[g.jsx("thead",{children:g.jsxs("tr",{children:[g.jsx("th",{children:"Mức độ"}),g.jsx("th",{children:"Sự cố"}),g.jsx("th",{children:"Vị trí"}),g.jsx("th",{children:"Giờ"}),g.jsx("th",{children:"Trạng thái"}),g.jsx("th",{children:"Thao tác"})]})}),g.jsx("tbody",{children:v.map(re=>g.jsxs("tr",{children:[g.jsx("td",{children:g.jsx("span",{className:`metric-badge ${re.severity==="danger"?"badge-danger":re.severity==="warning"?"badge-warning":"badge-info"}`,children:re.status})}),g.jsx("td",{style:{fontWeight:"600"},children:re.type}),g.jsx("td",{children:re.location}),g.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:re.time}),g.jsx("td",{children:re.handled?g.jsxs("span",{style:{color:"#10b981",fontWeight:"600",display:"flex",alignItems:"center",gap:"4px"},children:[g.jsx(io,{size:14})," Đã nhận"]}):g.jsx("span",{style:{color:"#ef4444",fontWeight:"600"},children:"Chưa xử lý"})}),g.jsx("td",{children:g.jsx("button",{className:`btn-sm ${re.handled?"btn-secondary":"btn-primary"}`,onClick:()=>He(re.id),children:re.handled?"Hoàn tác":"Điều động"})})]},re.id))})]})})]})]}),s==="gis"&&g.jsx("div",{className:"panel-card gis-full-screen-card",style:{position:"relative"},children:g.jsxs("div",{className:"map-canvas-container dark-theme",style:{width:"100%",height:"100%",position:"relative"},children:[g.jsxs("div",{style:{position:"absolute",top:"14px",left:"14px",zIndex:35,display:"flex",flexWrap:"wrap",gap:"8px",alignItems:"center",pointerEvents:"auto"},children:[g.jsxs("div",{className:"qatium-dropdown-container",style:{position:"relative"},children:[g.jsx("div",{className:"qatium-hud-pill-group",children:g.jsxs("button",{className:`qatium-hud-btn ${P==="mode"?"active":""}`,onClick:()=>O(P==="mode"?null:"mode"),style:{whiteSpace:"nowrap",display:"flex",alignItems:"center",gap:"6px",fontWeight:600},title:"Chế độ hiển thị không gian 3D, 2D GIS hoặc X-Ray trong suốt",children:[g.jsx(j_,{size:13,color:"#38bdf8"}),g.jsxs("span",{children:["Chế độ: ",D==="3d"?"3D":D==="2d"?"2D":"X-Ray"]}),g.jsx(no,{size:12,style:{transform:P==="mode"?"rotate(180deg)":"none",transition:"transform 0.2s"}})]})}),P==="mode"&&g.jsxs("div",{style:{position:"absolute",top:"calc(100% + 6px)",left:0,minWidth:"240px",background:"rgba(11, 20, 38, 0.98)",backdropFilter:"blur(16px)",border:"1px solid rgba(56, 189, 248, 0.35)",borderRadius:"8px",boxShadow:"0 12px 30px -4px rgba(0, 0, 0, 0.8), 0 0 15px rgba(2, 132, 199, 0.25)",padding:"6px",zIndex:100},children:[g.jsx("div",{style:{padding:"6px 10px",fontSize:"11px",fontWeight:700,color:"#38bdf8",textTransform:"uppercase",letterSpacing:"0.05em",borderBottom:"1px solid rgba(255,255,255,0.08)",marginBottom:"4px"},children:"Góc Nhìn & Không Gian"}),[{id:"3d",label:"3D (Digital Twin)",desc:"Không gian 3D lập phương đô thị thực tế"},{id:"2d",label:"2D (Mặt phẳng GIS)",desc:"Góc nhìn trực diện từ trên xuống (Top-down)"},{id:"xray",label:"X-Ray (Trong suốt công trình)",desc:"Làm trong suốt công trình để nhìn rõ toàn bộ mạng ống ngầm"}].map(re=>g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 10px",borderRadius:"6px",cursor:"pointer",background:D===re.id?"rgba(2, 132, 199, 0.2)":"transparent",color:D===re.id?"#38bdf8":"#cbd5e1",transition:"all 0.15s ease"},onClick:()=>{F(re.id),O(null)},children:[g.jsx("span",{style:{fontSize:"14px"},children:D===re.id?"●":"○"}),g.jsxs("div",{children:[g.jsx("div",{style:{fontSize:"12.5px",fontWeight:600},children:re.label}),g.jsx("div",{style:{fontSize:"10.5px",color:"#94a3b8"},children:re.desc})]})]},re.id))]})]}),g.jsxs("div",{className:"qatium-dropdown-container",style:{position:"relative"},children:[g.jsx("div",{className:"qatium-hud-pill-group",children:g.jsxs("button",{className:`qatium-hud-btn ${P==="pipes"?"active":""}`,onClick:()=>O(P==="pipes"?null:"pipes"),style:{whiteSpace:"nowrap",display:"flex",alignItems:"center",gap:"6px",fontWeight:600},title:"Bật/tắt hiển thị các cấp mạng lưới đường ống nước",children:[g.jsx(ro,{size:13,color:"#0284c7"}),g.jsxs("span",{children:["Đường ống (",[B.pipesPrimary,B.pipesSecondary,B.pipesService].filter(Boolean).length,"/3)"]}),g.jsx(no,{size:12,style:{transform:P==="pipes"?"rotate(180deg)":"none",transition:"transform 0.2s"}})]})}),P==="pipes"&&g.jsxs("div",{style:{position:"absolute",top:"calc(100% + 6px)",left:0,minWidth:"270px",background:"rgba(11, 20, 38, 0.98)",backdropFilter:"blur(16px)",border:"1px solid rgba(56, 189, 248, 0.35)",borderRadius:"8px",boxShadow:"0 12px 30px -4px rgba(0, 0, 0, 0.8), 0 0 15px rgba(2, 132, 199, 0.25)",padding:"6px",zIndex:100},children:[g.jsx("div",{style:{padding:"6px 10px",fontSize:"11px",fontWeight:700,color:"#38bdf8",textTransform:"uppercase",letterSpacing:"0.05em",borderBottom:"1px solid rgba(255,255,255,0.08)",marginBottom:"4px"},children:"Mạng Lưới Đường Ống"}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 10px",borderRadius:"6px",cursor:"pointer",color:B.pipesPrimary?"#ffffff":"#94a3b8"},onClick:re=>{re.stopPropagation(),V(be=>({...be,pipesPrimary:!be.pipesPrimary}))},children:[B.pipesPrimary?g.jsx(gr,{size:15,color:"#0284c7"}):g.jsx(vr,{size:15,color:"#64748b"}),g.jsxs("div",{style:{flex:1},children:[g.jsx("div",{style:{fontSize:"12.5px",fontWeight:600,color:"#0284c7"},children:"Cấp 1 (D500 - D800)"}),g.jsx("div",{style:{fontSize:"11px",color:"#94a3b8"},children:"Tuyến truyền dẫn chính từ NMN Sông Đà"})]})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 10px",borderRadius:"6px",cursor:"pointer",color:B.pipesSecondary?"#ffffff":"#94a3b8"},onClick:re=>{re.stopPropagation(),V(be=>({...be,pipesSecondary:!be.pipesSecondary}))},children:[B.pipesSecondary?g.jsx(gr,{size:15,color:"#f97316"}):g.jsx(vr,{size:15,color:"#64748b"}),g.jsxs("div",{style:{flex:1},children:[g.jsx("div",{style:{fontSize:"12.5px",fontWeight:600,color:"#f97316"},children:"Cấp 2 (D200 - D300)"}),g.jsx("div",{style:{fontSize:"11px",color:"#94a3b8"},children:"Mạch vòng phân phối liên phường"})]})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 10px",borderRadius:"6px",cursor:"pointer",color:B.pipesService?"#ffffff":"#94a3b8"},onClick:re=>{re.stopPropagation(),V(be=>({...be,pipesService:!be.pipesService}))},children:[B.pipesService?g.jsx(gr,{size:15,color:"#eab308"}):g.jsx(vr,{size:15,color:"#64748b"}),g.jsxs("div",{style:{flex:1},children:[g.jsx("div",{style:{fontSize:"12.5px",fontWeight:600,color:"#eab308"},children:"Cấp 3 (Đấu Nối Tòa Nhà)"}),g.jsx("div",{style:{fontSize:"11px",color:"#94a3b8"},children:"Nhánh dịch vụ dẫn vào chân công trình"})]})]})]})]}),g.jsxs("div",{className:"qatium-dropdown-container",style:{position:"relative"},children:[g.jsx("div",{className:"qatium-hud-pill-group",children:g.jsxs("button",{className:`qatium-hud-btn ${P==="devices"?"active":""}`,onClick:()=>O(P==="devices"?null:"devices"),style:{whiteSpace:"nowrap",display:"flex",alignItems:"center",gap:"6px",fontWeight:600},title:"Bật/tắt các loại thiết bị mạng lưới & quan trắc",children:[g.jsx(ix,{size:13,color:"#38bdf8"}),g.jsxs("span",{children:["Thiết bị (",[B.valves,B.sensors,B.hydrants,B.tanks].filter(Boolean).length,"/4)"]}),g.jsx(no,{size:12,style:{transform:P==="devices"?"rotate(180deg)":"none",transition:"transform 0.2s"}})]})}),P==="devices"&&g.jsxs("div",{style:{position:"absolute",top:"calc(100% + 6px)",left:0,minWidth:"230px",background:"rgba(11, 20, 38, 0.98)",backdropFilter:"blur(16px)",border:"1px solid rgba(56, 189, 248, 0.35)",borderRadius:"8px",boxShadow:"0 12px 30px -4px rgba(0, 0, 0, 0.8), 0 0 15px rgba(2, 132, 199, 0.25)",padding:"6px",zIndex:100},children:[g.jsx("div",{style:{padding:"6px 10px",fontSize:"11px",fontWeight:700,color:"#38bdf8",textTransform:"uppercase",letterSpacing:"0.05em",borderBottom:"1px solid rgba(255,255,255,0.08)",marginBottom:"4px"},children:"Thiết bị & Quan trắc SCADA"}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 10px",borderRadius:"6px",cursor:"pointer",color:B.valves?"#ffffff":"#94a3b8"},onClick:re=>{re.stopPropagation(),V(be=>({...be,valves:!be.valves}))},children:[B.valves?g.jsx(gr,{size:15,color:"#38bdf8"}):g.jsx(vr,{size:15,color:"#64748b"}),g.jsx("span",{style:{fontSize:"12.5px",fontWeight:600},children:"Van PRV & Chốt cách ly"})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 10px",borderRadius:"6px",cursor:"pointer",color:B.sensors?"#ffffff":"#94a3b8"},onClick:re=>{re.stopPropagation(),V(be=>({...be,sensors:!be.sensors}))},children:[B.sensors?g.jsx(gr,{size:15,color:"#38bdf8"}):g.jsx(vr,{size:15,color:"#64748b"}),g.jsx("span",{style:{fontSize:"12.5px",fontWeight:600},children:"Cảm biến áp & lưu lượng"})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 10px",borderRadius:"6px",cursor:"pointer",color:B.hydrants?"#ffffff":"#94a3b8"},onClick:re=>{re.stopPropagation(),V(be=>({...be,hydrants:!be.hydrants}))},children:[B.hydrants?g.jsx(gr,{size:15,color:"#ef4444"}):g.jsx(vr,{size:15,color:"#64748b"}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[g.jsx(K_,{size:13,color:"#ef4444"}),g.jsx("span",{style:{fontSize:"12.5px",fontWeight:600},children:"Trụ PCCC (38 trụ)"})]})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 10px",borderRadius:"6px",cursor:"pointer",color:B.tanks?"#ffffff":"#94a3b8"},onClick:re=>{re.stopPropagation(),V(be=>({...be,tanks:!be.tanks}))},children:[B.tanks?g.jsx(gr,{size:15,color:"#38bdf8"}):g.jsx(vr,{size:15,color:"#64748b"}),g.jsx("span",{style:{fontSize:"12.5px",fontWeight:600},children:"Đài nước & Trạm Bơm"})]})]})]}),g.jsxs("div",{className:"qatium-dropdown-container",style:{position:"relative"},children:[g.jsx("div",{className:"qatium-hud-pill-group",children:g.jsxs("button",{className:`qatium-hud-btn ${P==="buildings"?"active":""}`,onClick:()=>O(P==="buildings"?null:"buildings"),style:{whiteSpace:"nowrap",display:"flex",alignItems:"center",gap:"6px",fontWeight:600},title:"Bật/tắt hiển thị khối nhà 3D và nhãn tên đường",children:[g.jsx(W_,{size:13,color:"#38bdf8"}),g.jsxs("span",{children:["Công trình (",[B.buildings,B.streetLabels].filter(Boolean).length,"/2)"]}),g.jsx(no,{size:12,style:{transform:P==="buildings"?"rotate(180deg)":"none",transition:"transform 0.2s"}})]})}),P==="buildings"&&g.jsxs("div",{style:{position:"absolute",top:"calc(100% + 6px)",left:0,minWidth:"220px",background:"rgba(11, 20, 38, 0.98)",backdropFilter:"blur(16px)",border:"1px solid rgba(56, 189, 248, 0.35)",borderRadius:"8px",boxShadow:"0 12px 30px -4px rgba(0, 0, 0, 0.8), 0 0 15px rgba(2, 132, 199, 0.25)",padding:"6px",zIndex:100},children:[g.jsx("div",{style:{padding:"6px 10px",fontSize:"11px",fontWeight:700,color:"#38bdf8",textTransform:"uppercase",letterSpacing:"0.05em",borderBottom:"1px solid rgba(255,255,255,0.08)",marginBottom:"4px"},children:"Địa hình & Kiến trúc"}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 10px",borderRadius:"6px",cursor:"pointer",color:B.buildings?"#ffffff":"#94a3b8"},onClick:re=>{re.stopPropagation(),V(be=>({...be,buildings:!be.buildings}))},children:[B.buildings?g.jsx(gr,{size:15,color:"#38bdf8"}):g.jsx(vr,{size:15,color:"#64748b"}),g.jsx("span",{style:{fontSize:"12.5px",fontWeight:600},children:"Khối Nhà 3D"})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 10px",borderRadius:"6px",cursor:"pointer",color:B.streetLabels?"#ffffff":"#94a3b8"},onClick:re=>{re.stopPropagation(),V(be=>({...be,streetLabels:!be.streetLabels}))},children:[B.streetLabels?g.jsx(gr,{size:15,color:"#38bdf8"}):g.jsx(vr,{size:15,color:"#64748b"}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[g.jsx(rx,{size:13,color:"#38bdf8"}),g.jsx("span",{style:{fontSize:"12.5px",fontWeight:600},children:"Tên đường (Maps)"})]})]})]})]}),g.jsxs("div",{className:"qatium-dropdown-container",style:{position:"relative"},children:[g.jsx("div",{className:"qatium-hud-pill-group",children:g.jsxs("button",{className:`qatium-hud-btn ${P==="valves"?"active":""}`,onClick:()=>O(P==="valves"?null:"valves"),style:{whiteSpace:"nowrap",display:"flex",alignItems:"center",gap:"7px",fontWeight:700,fontSize:"12px",color:Object.values(Q).some(Boolean)?"#fca5a5":"#86efac"},title:"Bảng điều khiển & giám sát toàn bộ các chốt van phân đoạn mạng lưới",children:[g.jsx("span",{style:{fontSize:"13px",lineHeight:1},children:Object.values(Q).some(Boolean)?"🔴":"🟢"}),g.jsxs("span",{children:["Chốt Van ",Object.values(Q).filter(Boolean).length>0?`(${Object.values(Q).filter(Boolean).length} ĐÃ ĐÓNG ⚠️)`:`(Tất cả ${Object.keys(Q).length} MỞ)`]}),g.jsx(no,{size:12,style:{transform:P==="valves"?"rotate(180deg)":"none",transition:"transform 0.2s"}})]})}),P==="valves"&&g.jsxs("div",{style:{position:"absolute",top:"calc(100% + 6px)",left:0,minWidth:"350px",background:"rgba(11, 20, 38, 0.98)",backdropFilter:"blur(16px)",border:"1px solid rgba(56, 189, 248, 0.35)",borderRadius:"8px",boxShadow:"0 12px 30px -4px rgba(0, 0, 0, 0.8), 0 0 15px rgba(2, 132, 199, 0.25)",padding:"8px",zIndex:100,maxHeight:"440px",overflowY:"auto"},children:[g.jsxs("div",{style:{padding:"6px 10px",fontSize:"11px",fontWeight:700,color:"#38bdf8",textTransform:"uppercase",letterSpacing:"0.05em",borderBottom:"1px solid rgba(255,255,255,0.08)",marginBottom:"6px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[g.jsx("span",{children:"Điều Khiển Chốt Van Cô Lập"}),g.jsxs("span",{style:{color:"#94a3b8",fontSize:"10.5px"},children:[Object.keys(Q).length," vị trí"]})]}),Object.entries(se).map(([re,be])=>{var Ye;const ge=Q[re];return g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px",padding:"8px 10px",borderRadius:"6px",background:ge?"rgba(239, 68, 68, 0.15)":"rgba(255, 255, 255, 0.03)",border:ge?"1px solid rgba(239, 68, 68, 0.45)":"1px solid rgba(255, 255, 255, 0.06)",marginBottom:"5px",cursor:"pointer",transition:"all 0.15s ease"},onClick:()=>Oe(re),title:`Click để ${ge?"MỞ lại":"ĐÓNG"} ${re}`,children:[g.jsxs("div",{style:{flex:1,minWidth:0},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[g.jsx("span",{style:{fontSize:"13px"},children:ge?"🔒":"🔓"}),g.jsx("span",{style:{fontSize:"12px",fontWeight:700,color:ge?"#f87171":"#f8fafc"},children:re}),g.jsx("span",{style:{fontSize:"11px",color:"#cbd5e1"},children:((Ye=be.name.split("(")[1])==null?void 0:Ye.replace(")",""))||be.name})]}),g.jsx("div",{style:{fontSize:"10.5px",color:ge?"#fca5a5":"#64748b",marginTop:"2px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:ge?`⚠️ CẮT NƯỚC: ${be.affected}`:be.zone})]}),g.jsx("span",{style:{padding:"3px 8px",borderRadius:"4px",fontSize:"11px",fontWeight:700,background:ge?"#ef4444":"#10b981",color:"#ffffff",flexShrink:0},children:ge?"ĐÃ ĐÓNG":"MỞ"})]},re)})]})]}),g.jsx("div",{className:"qatium-hud-pill-group",children:g.jsxs("button",{className:"qatium-hud-btn",onClick:()=>Ae("Mo_Hinh_Mang_3D_GIS.csv"),title:"Xuất cơ sở dữ liệu GIS thủy lực",style:{padding:"6px 12px"},children:[g.jsx(dh,{size:13,color:"#38bdf8"}),g.jsx("span",{children:"Xuất GIS"})]})})]}),g.jsx($0,{theme:I,heatmap:E,viewMode:D,assetsLayer:B,isolatedPipe:ne,closedValves:Q,onToggleValve:Oe,simTime:$,currentSim:we,onSelectAsset:re=>ee(re)}),le&&g.jsxs("div",{className:"qatium-inspector-drawer",children:[g.jsxs("div",{className:"inspector-header",children:[g.jsxs("div",{className:"inspector-title",children:[g.jsx(J0,{size:16,color:"#0284c7"}),g.jsx("span",{children:le.name})]}),g.jsx("button",{className:"inspector-close",onClick:()=>ee(null),"aria-label":"Đóng bảng tra cứu",children:g.jsx(Fm,{size:15})})]}),g.jsxs("div",{className:"inspector-body",children:[g.jsxs("div",{className:"inspector-section",children:[g.jsx("div",{className:"inspector-section-title",children:"THÔNG SỐ THỦY LỰC REAL-TIME"}),g.jsxs("div",{className:"inspector-grid",children:[g.jsxs("div",{className:"inspector-item",children:[g.jsx("span",{className:"inspector-label",children:"Trạng thái"}),g.jsx("span",{className:"inspector-val highlight-val",children:((cn=le.data)==null?void 0:cn.status)||"Bình thường"})]}),g.jsxs("div",{className:"inspector-item",children:[g.jsx("span",{className:"inspector-label",children:"Áp lực P"}),g.jsx("span",{className:"inspector-val",children:((Lt=le.data)==null?void 0:Lt.intakePressure)||((Sn=le.data)==null?void 0:Sn.pressure)||we.pressure+" bar"})]}),g.jsxs("div",{className:"inspector-item",children:[g.jsx("span",{className:"inspector-label",children:"Lưu lượng Q"}),g.jsx("span",{className:"inspector-val",children:((kt=le.data)==null?void 0:kt.demandFlow)||((Zt=le.data)==null?void 0:Zt.flow)||"45.0 m³/h"})]}),g.jsxs("div",{className:"inspector-item",children:[g.jsx("span",{className:"inspector-label",children:"DMA Quản lý"}),g.jsx("span",{className:"inspector-val",children:((Mt=le.data)==null?void 0:Mt.dma)||"DMA THNC-02"})]})]})]}),le.type==="SmartValve"&&g.jsxs("div",{className:"inspector-section",style:{background:"rgba(2, 132, 199, 0.08)",padding:"12px",borderRadius:"8px",border:"1px solid rgba(56, 189, 248, 0.25)"},children:[g.jsx("div",{className:"inspector-section-title",style:{color:"#38bdf8"},children:"ĐIỀU KHIỂN CHỐT KHÓA NƯỚC"}),g.jsx("p",{style:{fontSize:"12px",color:"#cbd5e1",lineHeight:"1.5",margin:"4px 0 10px"},children:(Xt=le.data)==null?void 0:Xt.zoneDescription}),g.jsx("button",{className:`btn-sm ${(j=le.data)!=null&&j.isClosed?"btn-primary":"btn-danger"}`,onClick:()=>Oe(le.id),style:{width:"100%",justifyContent:"center",padding:"9px 12px",fontWeight:"bold"},children:(_t=le.data)!=null&&_t.isClosed?"🔓 MỞ LẠI CHỐT KHÓA NƯỚC":"🔒 ĐÓNG CHỐT VAN (CÔ LẬP SỰ CỐ)"})]})]})]}),g.jsxs("div",{className:"qatium-timeline-bar",style:{padding:"8px 16px",display:"flex",alignItems:"center",gap:"14px",background:"rgba(11, 20, 38, 0.95)",backdropFilter:"blur(16px)",border:"1px solid rgba(56, 189, 248, 0.28)",borderRadius:"10px",boxShadow:"0 8px 30px rgba(0, 0, 0, 0.65)"},children:[g.jsx("button",{className:"timeline-play-btn",onClick:()=>{he(!H),Ce(H?"Đã tạm dừng mô phỏng 24h":"Đang chạy mô phỏng biến thiên thủy lực 24h...")},title:H?"Tạm dừng mô phỏng":"Chạy mô phỏng biến thiên 24h",style:{width:"36px",height:"36px",borderRadius:"50%",background:H?"#0284c7":"#0369a1",border:"none",color:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",flexShrink:0,boxShadow:"0 0 12px rgba(2, 132, 199, 0.45)"},children:H?g.jsx(Z_,{size:16}):g.jsx(Q_,{size:16,style:{marginLeft:"2px"}})}),g.jsxs("div",{style:{display:"flex",flexDirection:"column",minWidth:"180px",flexShrink:0},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[g.jsx(Rl,{size:13,color:"#38bdf8"}),g.jsx("span",{style:{fontSize:"13px",fontWeight:700,color:"#f8fafc",letterSpacing:"0.02em"},children:we.label})]}),g.jsxs("div",{style:{fontSize:"11px",color:"#94a3b8",marginTop:"2px",display:"flex",gap:"8px"},children:[g.jsxs("span",{children:["Q = ",g.jsxs("b",{style:{color:"#38bdf8"},children:[we.flow," m³/h"]})]}),g.jsx("span",{children:"·"}),g.jsxs("span",{children:["P = ",g.jsxs("b",{style:{color:"#f59e0b"},children:[we.pressure," bar"]})]})]})]}),g.jsx("div",{style:{flex:1,position:"relative",height:"46px",display:"flex",alignItems:"center"},children:g.jsxs("svg",{viewBox:"0 0 460 44",style:{width:"100%",height:"100%",overflow:"visible",cursor:"pointer"},onClick:re=>{const be=re.currentTarget.getBoundingClientRect(),ge=re.clientX-be.left,Ye=Math.max(0,Math.min(1,ge/be.width)),Te=Math.round(Ye*23);te(Te)},children:[g.jsx("defs",{children:g.jsxs("linearGradient",{id:"flowGrad24",x1:"0",y1:"0",x2:"0",y2:"1",children:[g.jsx("stop",{offset:"0%",stopColor:"#0284c7",stopOpacity:"0.45"}),g.jsx("stop",{offset:"100%",stopColor:"#0284c7",stopOpacity:"0.02"})]})}),g.jsx("path",{d:"M 10 38 L 10 30 Q 50 36 70 36 T 130 18 T 190 24 T 270 23 T 350 12 T 410 26 T 450 34 L 450 38 Z",fill:"url(#flowGrad24)"}),g.jsx("path",{d:"M 10 30 Q 50 36 70 36 T 130 18 T 190 24 T 270 23 T 350 12 T 410 26 T 450 34",fill:"none",stroke:"#0284c7",strokeWidth:"2.2"}),g.jsx("path",{d:"M 10 16 Q 50 12 70 11 T 130 26 T 190 22 T 270 23 T 350 32 T 410 21 T 450 14",fill:"none",stroke:"#f59e0b",strokeWidth:"1.6",strokeDasharray:"3 3",opacity:"0.85"}),Array.from({length:24}).map((re,be)=>{const ge=10+be/23*440,Ye=be===$;return g.jsxs("g",{children:[g.jsx("line",{x1:ge,y1:8,x2:ge,y2:38,stroke:Ye?"#38bdf8":"rgba(255,255,255,0.08)",strokeWidth:Ye?2:1}),be%3===0&&g.jsxs("text",{x:ge,y:43,textAnchor:"middle",fontSize:"8.5",fill:Ye?"#38bdf8":"#64748b",fontWeight:Ye?"bold":"normal",children:[be,"h"]})]},be)}),(()=>{const re=10+$/23*440;return g.jsxs("g",{children:[g.jsx("line",{x1:re,y1:2,x2:re,y2:38,stroke:"#38bdf8",strokeWidth:"2.5"}),g.jsx("circle",{cx:re,cy:6,r:"4",fill:"#38bdf8",stroke:"#ffffff",strokeWidth:"1.5"})]})})()]})}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexShrink:0},children:[g.jsx("span",{className:`metric-badge ${$>=2&&$<=4?"badge-danger":$>=6&&$<=8||$>=18&&$<=20?"badge-warning":"badge-success"}`,style:{fontSize:"11px",padding:"4px 8px"},children:we.status}),g.jsx("button",{className:"btn-sm btn-secondary",onClick:()=>te(14),title:"Đặt lại giờ mặc định (14:00)",style:{padding:"6px"},children:g.jsx(ex,{size:13})})]})]})]})}),s==="telemetry"&&g.jsxs("div",{className:"panel-card",children:[g.jsxs("div",{className:"panel-card-header",children:[g.jsxs("div",{children:[g.jsxs("div",{className:"panel-card-title",children:[g.jsx(Nl,{size:18,color:"#0284c7"}),g.jsx("span",{children:"Dữ liệu Áp & Lưu lượng"})]}),g.jsx("span",{style:{fontSize:"12px",color:"#64748b"},children:"6 điểm quan trắc tự động (SCADA)"})]}),g.jsx("button",{className:"btn-sm btn-primary",onClick:()=>Ae("Du_Lieu_Telemetry_6_Diem_Do.csv"),children:"Xuất Excel"})]}),g.jsx("div",{className:"data-table-wrapper",children:g.jsxs("table",{className:"custom-table",children:[g.jsx("thead",{children:g.jsxs("tr",{children:[g.jsx("th",{children:"Điểm đo"}),g.jsx("th",{children:"Khu vực"}),g.jsx("th",{children:"Lưu lượng"}),g.jsx("th",{children:"Áp lực (bar)"}),g.jsx("th",{children:"Dải chuẩn"}),g.jsx("th",{children:"Chênh lệch"}),g.jsx("th",{children:"Trạng thái"})]})}),g.jsx("tbody",{children:[{node:"FM-01 / Trạm bơm P1",zone:"Đầu nguồn cấp",flow:"145.8 m³/h",press:"4.2 bar",range:"3.8 - 4.5 bar",delta:"+0.1 bar",status:"Tối ưu",tag:"badge-success"},{node:"PRV-02 / Cổng vào DMA 1",zone:"DMA 1 (Phía Nam)",flow:"48.2 m³/h",press:"3.1 bar",range:"2.8 - 3.4 bar",delta:"-0.2 bar",status:"Ổn định",tag:"badge-info"},{node:"PRV-03 / Trục chính DMA 2",zone:"DMA 2 (Trung Tâm)",flow:"62.4 m³/h",press:"3.2 bar",range:"2.8 - 3.5 bar",delta:"+0.0 bar",status:"Ổn định",tag:"badge-info"},{node:"FM-04 / Điểm cao DMA 3",zone:"DMA 3 (Ven Hồ)",flow:"35.2 m³/h",press:"3.4 bar",range:"2.5 - 3.2 bar",delta:"+0.4 bar",status:"Cảnh báo Áp cao",tag:"badge-warning"},{node:"SN-05 / Cụm biệt thự BT2",zone:"DMA 2",flow:"18.4 m³/h",press:"2.4 bar",range:"2.8 - 3.4 bar",delta:"-0.5 bar",status:"Sụt áp cục bộ",tag:"badge-danger"},{node:"FM-06 / Tuyến xả cặn",zone:"Bể ngầm",flow:"0.0 m³/h",press:"3.0 bar",range:"2.8 - 3.5 bar",delta:"0.0 bar",status:"Đang khóa",tag:"badge-info"}].map((re,be)=>g.jsxs("tr",{children:[g.jsx("td",{style:{fontWeight:"700"},children:re.node}),g.jsx("td",{children:re.zone}),g.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:re.flow}),g.jsx("td",{style:{fontWeight:"700",color:"#0284c7"},children:re.press}),g.jsx("td",{style:{color:"#64748b"},children:re.range}),g.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:re.delta}),g.jsx("td",{children:g.jsx("span",{className:`metric-badge ${re.tag}`,children:re.status})})]},be))})]})})]}),s==="leaks"&&g.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[g.jsxs("div",{className:"metrics-grid",children:[g.jsxs("div",{className:"metric-card",children:[g.jsxs("div",{className:"metric-header",children:[g.jsx("span",{children:"Lưu lượng đêm (MNF)"}),g.jsx(Om,{size:18,color:"#d97706"})]}),g.jsxs("div",{className:"metric-body",children:[g.jsx("span",{className:"metric-value",children:"65.2"}),g.jsx("span",{className:"metric-unit",children:"m³/h"})]}),g.jsx("span",{className:"metric-badge badge-warning",children:"Khung 02:00 - 04:00"})]}),g.jsxs("div",{className:"metric-card",children:[g.jsxs("div",{className:"metric-header",children:[g.jsx("span",{children:"Tỷ lệ thất thoát"}),g.jsx(mo,{size:18,color:"#ef4444"})]}),g.jsx("div",{className:"metric-body",children:g.jsx("span",{className:"metric-value",style:{color:"#ef4444"},children:"12.5%"})}),g.jsx("span",{className:"metric-badge badge-danger",children:"~18.2 m³/h rò rỉ"})]}),g.jsxs("div",{className:"metric-card",children:[g.jsxs("div",{className:"metric-header",children:[g.jsx("span",{children:"Nghi vấn rò rỉ"}),g.jsx(io,{size:18,color:"#10b981"})]}),g.jsxs("div",{className:"metric-body",children:[g.jsx("span",{className:"metric-value",children:"2"}),g.jsx("span",{className:"metric-unit",children:"tuyến ống"})]}),g.jsx("span",{className:"metric-badge badge-info",children:"Cần dò sóng âm"})]})]}),g.jsxs("div",{className:"panel-card",children:[g.jsx("div",{className:"panel-card-header",children:g.jsxs("div",{className:"panel-card-title",children:[g.jsx(mo,{size:17,color:"#d97706"}),g.jsx("span",{children:"Xếp hạng thất thoát theo DMA"})]})}),g.jsx("div",{className:"data-table-wrapper",children:g.jsxs("table",{className:"custom-table",children:[g.jsx("thead",{children:g.jsxs("tr",{children:[g.jsx("th",{children:"Vùng DMA"}),g.jsx("th",{children:"Hộ dân"}),g.jsx("th",{children:"Lưu lượng cấp"}),g.jsx("th",{children:"Lưu lượng đêm"}),g.jsx("th",{children:"Tỷ lệ NRW"}),g.jsx("th",{children:"Mức ưu tiên"})]})}),g.jsxs("tbody",{children:[g.jsxs("tr",{children:[g.jsx("td",{style:{fontWeight:"700"},children:"DMA 2 (Trung Tâm)"}),g.jsx("td",{children:"450 Hộ"}),g.jsx("td",{children:"62.4 m³/h"}),g.jsx("td",{children:"28.5 m³/h"}),g.jsx("td",{style:{fontWeight:"700",color:"#ef4444"},children:"13.2%"}),g.jsx("td",{children:g.jsx("span",{className:"metric-badge badge-danger",children:"Rất Cao (Khẩn)"})})]}),g.jsxs("tr",{children:[g.jsx("td",{style:{fontWeight:"700"},children:"DMA 1 (Phía Nam)"}),g.jsx("td",{children:"320 Hộ"}),g.jsx("td",{children:"48.2 m³/h"}),g.jsx("td",{children:"21.0 m³/h"}),g.jsx("td",{style:{fontWeight:"700",color:"#f59e0b"},children:"11.8%"}),g.jsx("td",{children:g.jsx("span",{className:"metric-badge badge-warning",children:"Trung Bình"})})]}),g.jsxs("tr",{children:[g.jsx("td",{style:{fontWeight:"700"},children:"DMA 3 (Ven Hồ)"}),g.jsx("td",{children:"280 Hộ"}),g.jsx("td",{children:"35.2 m³/h"}),g.jsx("td",{children:"15.7 m³/h"}),g.jsx("td",{style:{fontWeight:"700",color:"#10b981"},children:"10.5%"}),g.jsx("td",{children:g.jsx("span",{className:"metric-badge badge-success",children:"Thấp (Tốt)"})})]})]})]})})]})]}),s==="quality"&&g.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[g.jsxs("div",{className:"metrics-grid",children:[g.jsxs("div",{className:"metric-card",children:[g.jsxs("div",{className:"metric-header",children:[g.jsx("span",{children:"Độ đục (Turbidity)"}),g.jsx(ro,{size:18,color:"#0284c7"})]}),g.jsxs("div",{className:"metric-body",children:[g.jsx("span",{className:"metric-value",children:"0.85"}),g.jsx("span",{className:"metric-unit",children:"NTU"})]}),g.jsx("span",{className:"metric-badge badge-success",children:"Chuẩn QCVN (< 2.0 NTU)"})]}),g.jsxs("div",{className:"metric-card",children:[g.jsxs("div",{className:"metric-header",children:[g.jsx("span",{children:"Clo dư (Chlorine)"}),g.jsx(io,{size:18,color:"#10b981"})]}),g.jsxs("div",{className:"metric-body",children:[g.jsx("span",{className:"metric-value",children:"0.42"}),g.jsx("span",{className:"metric-unit",children:"mg/L"})]}),g.jsx("span",{className:"metric-badge badge-success",children:"Ngưỡng chuẩn (0.2 - 1.0 mg/L)"})]}),g.jsxs("div",{className:"metric-card",children:[g.jsxs("div",{className:"metric-header",children:[g.jsx("span",{children:"Độ pH"}),g.jsx(Rl,{size:18,color:"#0284c7"})]}),g.jsx("div",{className:"metric-body",children:g.jsx("span",{className:"metric-value",children:"7.35"})}),g.jsx("span",{className:"metric-badge badge-info",children:"Chuẩn (6.5 - 8.5)"})]}),g.jsxs("div",{className:"metric-card",children:[g.jsxs("div",{className:"metric-header",children:[g.jsx("span",{children:"Chất rắn tan (TDS)"}),g.jsx(Nl,{size:18,color:"#64748b"})]}),g.jsxs("div",{className:"metric-body",children:[g.jsx("span",{className:"metric-value",children:"128"}),g.jsx("span",{className:"metric-unit",children:"ppm"})]}),g.jsx("span",{className:"metric-badge badge-success",children:"An toàn (< 1000 ppm)"})]})]}),g.jsxs("div",{className:"panel-card",style:{padding:"20px"},children:[g.jsx("h3",{style:{fontSize:"15px",fontWeight:"700",marginBottom:"8px"},children:"Quan trắc chất lượng định kỳ"}),g.jsx("p",{style:{fontSize:"13px",color:"#64748b",lineHeight:"1.6"},children:"Cảm biến đa chỉ tiêu tại trạm tổng và 3 DMA. Chu kỳ đo 15 phút/lần, tự xả cặn khi độ đục > 2.5 NTU."})]})]}),s==="reports"&&g.jsxs("div",{className:"panel-card",children:[g.jsxs("div",{className:"panel-card-header",children:[g.jsxs("div",{children:[g.jsxs("div",{className:"panel-card-title",children:[g.jsx(X_,{size:18,color:"#0284c7"}),g.jsx("span",{children:"Cân bằng nước & Kiểm toán IWA"})]}),g.jsx("span",{style:{fontSize:"12px",color:"#64748b"},children:"Tiêu chuẩn Quốc tế IWA"})]}),g.jsxs("div",{style:{display:"flex",gap:"8px"},children:[g.jsx("button",{className:"btn-sm btn-secondary",onClick:Ke,title:"In hoặc lưu PDF",children:"In PDF"}),g.jsx("button",{className:"btn-sm btn-primary",onClick:()=>Ae("Bao_Cao_Can_Bang_Nuoc_IWA.csv"),title:"Tải file CSV",children:"Tải CSV"})]})]}),g.jsx("div",{className:"data-table-wrapper",children:g.jsxs("table",{className:"custom-table",children:[g.jsx("thead",{children:g.jsxs("tr",{children:[g.jsx("th",{children:"Hạng mục"}),g.jsx("th",{children:"Khối lượng (m³)"}),g.jsx("th",{children:"Tỷ trọng (%)"}),g.jsx("th",{children:"Doanh thu / Thiệt hại"}),g.jsx("th",{children:"Đánh giá"})]})}),g.jsxs("tbody",{children:[g.jsxs("tr",{children:[g.jsx("td",{style:{fontWeight:"700"},children:"1. Tổng cấp mạng lưới (SIV)"}),g.jsx("td",{style:{fontFamily:"var(--font-mono)",fontWeight:"700"},children:"105,400 m³"}),g.jsx("td",{children:"100.0%"}),g.jsx("td",{children:"Đầu vào nhà máy"}),g.jsx("td",{children:g.jsx("span",{className:"metric-badge badge-info",children:"Chuẩn đo đạc"})})]}),g.jsxs("tr",{children:[g.jsx("td",{style:{paddingLeft:"32px",color:"#047857"},children:"1.1. Tiêu thụ có doanh thu"}),g.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:"92,225 m³"}),g.jsx("td",{children:"87.5%"}),g.jsx("td",{children:"Thu tiền cư dân"}),g.jsx("td",{children:g.jsx("span",{className:"metric-badge badge-success",children:"Đạt chỉ tiêu"})})]}),g.jsxs("tr",{children:[g.jsx("td",{style:{paddingLeft:"32px",color:"#b91c1c"},children:"1.2. Thất thoát không doanh thu (NRW)"}),g.jsx("td",{style:{fontFamily:"var(--font-mono)",fontWeight:"700"},children:"13,175 m³"}),g.jsx("td",{children:"12.5%"}),g.jsx("td",{children:"Thiệt hại: ~105.4 tr VNĐ"}),g.jsx("td",{children:g.jsx("span",{className:"metric-badge badge-danger",children:"Cần giảm < 10%"})})]}),g.jsxs("tr",{children:[g.jsx("td",{style:{paddingLeft:"48px",color:"#64748b"},children:"- Thất thoát vật lý (Rò rỉ ống ngầm)"}),g.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:"9,800 m³"}),g.jsx("td",{children:"9.3%"}),g.jsx("td",{children:"Chảy ngầm trong đất"}),g.jsx("td",{children:"Tập trung sửa chữa DMA 2"})]}),g.jsxs("tr",{children:[g.jsx("td",{style:{paddingLeft:"48px",color:"#64748b"},children:"- Thất thoát thương mại (Sai số, gian lận)"}),g.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:"3,375 m³"}),g.jsx("td",{children:"3.2%"}),g.jsx("td",{children:"Sai số đo đếm"}),g.jsx("td",{children:"Hiệu chuẩn đồng hồ định kỳ"})]})]})]})})]})]})]}),y&&g.jsxs("div",{className:"toast-notification",children:[g.jsx(io,{size:18,color:"#10b981"}),g.jsx("span",{children:y})]})]})}console.log("[SWMS] Initializing Smart Water Management UI...");const Yh=document.getElementById("root");if(Yh)try{B_.createRoot(Yh).render(g.jsx(D_.StrictMode,{children:g.jsx(JE,{})})),console.log("[SWMS] App successfully mounted to DOM.")}catch(s){console.error("[SWMS] Fatal mount error:",s),Yh.innerHTML=`
      <div style="padding: 24px; background: #fee2e2; color: #991b1b; font-family: monospace; border-radius: 8px; margin: 20px;">
        <h2>Lỗi Render Giao Diện React:</h2>
        <pre>${s.stack||s.message}</pre>
      </div>
    `}
