(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function q0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var sh={exports:{}},Ja={},ah={exports:{}},Rt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wm;function C_(){if(wm)return Rt;wm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),M=Symbol.iterator;function v(U){return U===null||typeof U!="object"?null:(U=M&&U[M]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,R={};function y(U,ie,Fe){this.props=U,this.context=ie,this.refs=R,this.updater=Fe||S}y.prototype.isReactComponent={},y.prototype.setState=function(U,ie){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ie,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function x(){}x.prototype=y.prototype;function D(U,ie,Fe){this.props=U,this.context=ie,this.refs=R,this.updater=Fe||S}var F=D.prototype=new x;F.constructor=D,w(F,y.prototype),F.isPureReactComponent=!0;var P=Array.isArray,O=Object.prototype.hasOwnProperty,I={current:null},T={key:!0,ref:!0,__self:!0,__source:!0};function E(U,ie,Fe){var se,we={},Ce=null,He=null;if(ie!=null)for(se in ie.ref!==void 0&&(He=ie.ref),ie.key!==void 0&&(Ce=""+ie.key),ie)O.call(ie,se)&&!T.hasOwnProperty(se)&&(we[se]=ie[se]);var Ee=arguments.length-2;if(Ee===1)we.children=Fe;else if(1<Ee){for(var Ke=Array(Ee),st=0;st<Ee;st++)Ke[st]=arguments[st+2];we.children=Ke}if(U&&U.defaultProps)for(se in Ee=U.defaultProps,Ee)we[se]===void 0&&(we[se]=Ee[se]);return{$$typeof:s,type:U,key:Ce,ref:He,props:we,_owner:I.current}}function Y(U,ie){return{$$typeof:s,type:U.type,key:ie,ref:U.ref,props:U.props,_owner:U._owner}}function B(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function G(U){var ie={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Fe){return ie[Fe]})}var $=/\/+/g;function te(U,ie){return typeof U=="object"&&U!==null&&U.key!=null?G(""+U.key):ie.toString(36)}function V(U,ie,Fe,se,we){var Ce=typeof U;(Ce==="undefined"||Ce==="boolean")&&(U=null);var He=!1;if(U===null)He=!0;else switch(Ce){case"string":case"number":He=!0;break;case"object":switch(U.$$typeof){case s:case e:He=!0}}if(He)return He=U,we=we(He),U=se===""?"."+te(He,0):se,P(we)?(Fe="",U!=null&&(Fe=U.replace($,"$&/")+"/"),V(we,ie,Fe,"",function(st){return st})):we!=null&&(B(we)&&(we=Y(we,Fe+(!we.key||He&&He.key===we.key?"":(""+we.key).replace($,"$&/")+"/")+U)),ie.push(we)),1;if(He=0,se=se===""?".":se+":",P(U))for(var Ee=0;Ee<U.length;Ee++){Ce=U[Ee];var Ke=se+te(Ce,Ee);He+=V(Ce,ie,Fe,Ke,we)}else if(Ke=v(U),typeof Ke=="function")for(U=Ke.call(U),Ee=0;!(Ce=U.next()).done;)Ce=Ce.value,Ke=se+te(Ce,Ee++),He+=V(Ce,ie,Fe,Ke,we);else if(Ce==="object")throw ie=String(U),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return He}function ue(U,ie,Fe){if(U==null)return U;var se=[],we=0;return V(U,se,"","",function(Ce){return ie.call(Fe,Ce,we++)}),se}function le(U){if(U._status===-1){var ie=U._result;ie=ie(),ie.then(function(Fe){(U._status===0||U._status===-1)&&(U._status=1,U._result=Fe)},function(Fe){(U._status===0||U._status===-1)&&(U._status=2,U._result=Fe)}),U._status===-1&&(U._status=0,U._result=ie)}if(U._status===1)return U._result.default;throw U._result}var J={current:null},ne={transition:null},Q={ReactCurrentDispatcher:J,ReactCurrentBatchConfig:ne,ReactCurrentOwner:I};function ee(){throw Error("act(...) is not supported in production builds of React.")}return Rt.Children={map:ue,forEach:function(U,ie,Fe){ue(U,function(){ie.apply(this,arguments)},Fe)},count:function(U){var ie=0;return ue(U,function(){ie++}),ie},toArray:function(U){return ue(U,function(ie){return ie})||[]},only:function(U){if(!B(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},Rt.Component=y,Rt.Fragment=t,Rt.Profiler=o,Rt.PureComponent=D,Rt.StrictMode=r,Rt.Suspense=f,Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,Rt.act=ee,Rt.cloneElement=function(U,ie,Fe){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var se=w({},U.props),we=U.key,Ce=U.ref,He=U._owner;if(ie!=null){if(ie.ref!==void 0&&(Ce=ie.ref,He=I.current),ie.key!==void 0&&(we=""+ie.key),U.type&&U.type.defaultProps)var Ee=U.type.defaultProps;for(Ke in ie)O.call(ie,Ke)&&!T.hasOwnProperty(Ke)&&(se[Ke]=ie[Ke]===void 0&&Ee!==void 0?Ee[Ke]:ie[Ke])}var Ke=arguments.length-2;if(Ke===1)se.children=Fe;else if(1<Ke){Ee=Array(Ke);for(var st=0;st<Ke;st++)Ee[st]=arguments[st+2];se.children=Ee}return{$$typeof:s,type:U.type,key:we,ref:Ce,props:se,_owner:He}},Rt.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},Rt.createElement=E,Rt.createFactory=function(U){var ie=E.bind(null,U);return ie.type=U,ie},Rt.createRef=function(){return{current:null}},Rt.forwardRef=function(U){return{$$typeof:d,render:U}},Rt.isValidElement=B,Rt.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:le}},Rt.memo=function(U,ie){return{$$typeof:p,type:U,compare:ie===void 0?null:ie}},Rt.startTransition=function(U){var ie=ne.transition;ne.transition={};try{U()}finally{ne.transition=ie}},Rt.unstable_act=ee,Rt.useCallback=function(U,ie){return J.current.useCallback(U,ie)},Rt.useContext=function(U){return J.current.useContext(U)},Rt.useDebugValue=function(){},Rt.useDeferredValue=function(U){return J.current.useDeferredValue(U)},Rt.useEffect=function(U,ie){return J.current.useEffect(U,ie)},Rt.useId=function(){return J.current.useId()},Rt.useImperativeHandle=function(U,ie,Fe){return J.current.useImperativeHandle(U,ie,Fe)},Rt.useInsertionEffect=function(U,ie){return J.current.useInsertionEffect(U,ie)},Rt.useLayoutEffect=function(U,ie){return J.current.useLayoutEffect(U,ie)},Rt.useMemo=function(U,ie){return J.current.useMemo(U,ie)},Rt.useReducer=function(U,ie,Fe){return J.current.useReducer(U,ie,Fe)},Rt.useRef=function(U){return J.current.useRef(U)},Rt.useState=function(U){return J.current.useState(U)},Rt.useSyncExternalStore=function(U,ie,Fe){return J.current.useSyncExternalStore(U,ie,Fe)},Rt.useTransition=function(){return J.current.useTransition()},Rt.version="18.3.1",Rt}var Am;function Bd(){return Am||(Am=1,ah.exports=C_()),ah.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm;function b_(){if(Cm)return Ja;Cm=1;var s=Bd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,p){var _,M={},v=null,S=null;p!==void 0&&(v=""+p),f.key!==void 0&&(v=""+f.key),f.ref!==void 0&&(S=f.ref);for(_ in f)r.call(f,_)&&!l.hasOwnProperty(_)&&(M[_]=f[_]);if(d&&d.defaultProps)for(_ in f=d.defaultProps,f)M[_]===void 0&&(M[_]=f[_]);return{$$typeof:e,type:d,key:v,ref:S,props:M,_owner:o.current}}return Ja.Fragment=t,Ja.jsx=u,Ja.jsxs=u,Ja}var bm;function R_(){return bm||(bm=1,sh.exports=b_()),sh.exports}var g=R_(),Dt=Bd();const N_=q0(Dt);var Al={},oh={exports:{}},hi={},lh={exports:{}},ch={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rm;function P_(){return Rm||(Rm=1,(function(s){function e(ne,Q){var ee=ne.length;ne.push(Q);e:for(;0<ee;){var U=ee-1>>>1,ie=ne[U];if(0<o(ie,Q))ne[U]=Q,ne[ee]=ie,ee=U;else break e}}function t(ne){return ne.length===0?null:ne[0]}function r(ne){if(ne.length===0)return null;var Q=ne[0],ee=ne.pop();if(ee!==Q){ne[0]=ee;e:for(var U=0,ie=ne.length,Fe=ie>>>1;U<Fe;){var se=2*(U+1)-1,we=ne[se],Ce=se+1,He=ne[Ce];if(0>o(we,ee))Ce<ie&&0>o(He,we)?(ne[U]=He,ne[Ce]=ee,U=Ce):(ne[U]=we,ne[se]=ee,U=se);else if(Ce<ie&&0>o(He,ee))ne[U]=He,ne[Ce]=ee,U=Ce;else break e}}return Q}function o(ne,Q){var ee=ne.sortIndex-Q.sortIndex;return ee!==0?ee:ne.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var f=[],p=[],_=1,M=null,v=3,S=!1,w=!1,R=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(ne){for(var Q=t(p);Q!==null;){if(Q.callback===null)r(p);else if(Q.startTime<=ne)r(p),Q.sortIndex=Q.expirationTime,e(f,Q);else break;Q=t(p)}}function P(ne){if(R=!1,F(ne),!w)if(t(f)!==null)w=!0,le(O);else{var Q=t(p);Q!==null&&J(P,Q.startTime-ne)}}function O(ne,Q){w=!1,R&&(R=!1,x(E),E=-1),S=!0;var ee=v;try{for(F(Q),M=t(f);M!==null&&(!(M.expirationTime>Q)||ne&&!G());){var U=M.callback;if(typeof U=="function"){M.callback=null,v=M.priorityLevel;var ie=U(M.expirationTime<=Q);Q=s.unstable_now(),typeof ie=="function"?M.callback=ie:M===t(f)&&r(f),F(Q)}else r(f);M=t(f)}if(M!==null)var Fe=!0;else{var se=t(p);se!==null&&J(P,se.startTime-Q),Fe=!1}return Fe}finally{M=null,v=ee,S=!1}}var I=!1,T=null,E=-1,Y=5,B=-1;function G(){return!(s.unstable_now()-B<Y)}function $(){if(T!==null){var ne=s.unstable_now();B=ne;var Q=!0;try{Q=T(!0,ne)}finally{Q?te():(I=!1,T=null)}}else I=!1}var te;if(typeof D=="function")te=function(){D($)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,ue=V.port2;V.port1.onmessage=$,te=function(){ue.postMessage(null)}}else te=function(){y($,0)};function le(ne){T=ne,I||(I=!0,te())}function J(ne,Q){E=y(function(){ne(s.unstable_now())},Q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(ne){ne.callback=null},s.unstable_continueExecution=function(){w||S||(w=!0,le(O))},s.unstable_forceFrameRate=function(ne){0>ne||125<ne?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<ne?Math.floor(1e3/ne):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_getFirstCallbackNode=function(){return t(f)},s.unstable_next=function(ne){switch(v){case 1:case 2:case 3:var Q=3;break;default:Q=v}var ee=v;v=Q;try{return ne()}finally{v=ee}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(ne,Q){switch(ne){case 1:case 2:case 3:case 4:case 5:break;default:ne=3}var ee=v;v=ne;try{return Q()}finally{v=ee}},s.unstable_scheduleCallback=function(ne,Q,ee){var U=s.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?U+ee:U):ee=U,ne){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=ee+ie,ne={id:_++,callback:Q,priorityLevel:ne,startTime:ee,expirationTime:ie,sortIndex:-1},ee>U?(ne.sortIndex=ee,e(p,ne),t(f)===null&&ne===t(p)&&(R?(x(E),E=-1):R=!0,J(P,ee-U))):(ne.sortIndex=ie,e(f,ne),w||S||(w=!0,le(O))),ne},s.unstable_shouldYield=G,s.unstable_wrapCallback=function(ne){var Q=v;return function(){var ee=v;v=Q;try{return ne.apply(this,arguments)}finally{v=ee}}}})(ch)),ch}var Nm;function D_(){return Nm||(Nm=1,lh.exports=P_()),lh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pm;function L_(){if(Pm)return hi;Pm=1;var s=Bd(),e=D_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},M={};function v(n){return f.call(M,n)?!0:f.call(_,n)?!1:p.test(n)?M[n]=!0:(_[n]=!0,!1)}function S(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,i,a,c){if(i===null||typeof i>"u"||S(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(n,i,a,c,h,m,C){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=C}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new R(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new R(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new R(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new R(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new R(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new R(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new R(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new R(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new R(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(x,D);y[i]=new R(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(x,D);y[i]=new R(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(x,D);y[i]=new R(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new R(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new R(n,1,!1,n.toLowerCase(),null,!0,!0)});function F(n,i,a,c){var h=y.hasOwnProperty(i)?y[i]:null;(h!==null?h.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,a,h,c)&&(a=null),c||h===null?v(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,c=h.attributeNamespace,a===null?n.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,O=Symbol.for("react.element"),I=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),G=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),ue=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),J=Symbol.for("react.offscreen"),ne=Symbol.iterator;function Q(n){return n===null||typeof n!="object"?null:(n=ne&&n[ne]||n["@@iterator"],typeof n=="function"?n:null)}var ee=Object.assign,U;function ie(n){if(U===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+n}var Fe=!1;function se(n,i){if(!n||Fe)return"";Fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(pe){var c=pe}Reflect.construct(n,[],i)}else{try{i.call()}catch(pe){c=pe}n.call(i.prototype)}else{try{throw Error()}catch(pe){c=pe}n()}}catch(pe){if(pe&&c&&typeof pe.stack=="string"){for(var h=pe.stack.split(`
`),m=c.stack.split(`
`),C=h.length-1,k=m.length-1;1<=C&&0<=k&&h[C]!==m[k];)k--;for(;1<=C&&0<=k;C--,k--)if(h[C]!==m[k]){if(C!==1||k!==1)do if(C--,k--,0>k||h[C]!==m[k]){var X=`
`+h[C].replace(" at new "," at ");return n.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",n.displayName)),X}while(1<=C&&0<=k);break}}}finally{Fe=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ie(n):""}function we(n){switch(n.tag){case 5:return ie(n.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return n=se(n.type,!1),n;case 11:return n=se(n.type.render,!1),n;case 1:return n=se(n.type,!0),n;default:return""}}function Ce(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case T:return"Fragment";case I:return"Portal";case Y:return"Profiler";case E:return"StrictMode";case te:return"Suspense";case V:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case G:return(n.displayName||"Context")+".Consumer";case B:return(n._context.displayName||"Context")+".Provider";case $:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ue:return i=n.displayName||null,i!==null?i:Ce(n.type)||"Memo";case le:i=n._payload,n=n._init;try{return Ce(n(i))}catch{}}return null}function He(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ce(i);case 8:return i===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ee(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ke(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function st(n){var i=Ke(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(C){c=""+C,m.call(this,C)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(C){c=""+C},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function at(n){n._valueTracker||(n._valueTracker=st(n))}function ct(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ke(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function At(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function _t(n,i){var a=i.checked;return ee({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function tn(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Ee(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Xt(n,i){i=i.checked,i!=null&&F(n,"checked",i,!1)}function ln(n,i){Xt(n,i);var a=Ee(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Sn(n,i.type,a):i.hasOwnProperty("defaultValue")&&Sn(n,i.type,Ee(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function It(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Sn(n,i,a){(i!=="number"||At(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Bt=Array.isArray;function $t(n,i,a,c){if(n=n.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=i.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Ee(a),i=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function fe(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ee({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ze(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Bt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Ee(a)}}function H(n,i){var a=Ee(i.value),c=Ee(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function it(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ut(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ft(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ut(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ae,xt=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,h){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ae.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Te(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var je={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},L=["Webkit","ms","Moz","O"];Object.keys(je).forEach(function(n){L.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),je[i]=je[n]})});function b(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||je.hasOwnProperty(n)&&je[n]?(""+i).trim():i+"px"}function K(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,h=b(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,h):n[a]=h}}var ve=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Me(n,i){if(i){if(ve[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Pe(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ue=null;function ge(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var _e=null,Le=null,z=null;function xe(n){if(n=ka(n)){if(typeof _e!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ho(i),_e(n.stateNode,n.type,i))}}function W(n){Le?z?z.push(n):z=[n]:Le=n}function q(){if(Le){var n=Le,i=z;if(z=Le=null,xe(n),i)for(n=0;n<i.length;n++)xe(i[n])}}function ye(n,i){return n(i)}function ce(){}var Se=!1;function Ve(n,i,a){if(Se)return n(i,a);Se=!0;try{return ye(n,i,a)}finally{Se=!1,(Le!==null||z!==null)&&(ce(),q())}}function me(n,i){var a=n.stateNode;if(a===null)return null;var c=Ho(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Ie=!1;if(d)try{var Ze={};Object.defineProperty(Ze,"passive",{get:function(){Ie=!0}}),window.addEventListener("test",Ze,Ze),window.removeEventListener("test",Ze,Ze)}catch{Ie=!1}function Ne(n,i,a,c,h,m,C,k,X){var pe=Array.prototype.slice.call(arguments,3);try{i.apply(a,pe)}catch(Re){this.onError(Re)}}var lt=!1,St=null,Ct=!1,mt=null,Nt={onError:function(n){lt=!0,St=n}};function Pn(n,i,a,c,h,m,C,k,X){lt=!1,St=null,Ne.apply(Nt,arguments)}function zt(n,i,a,c,h,m,C,k,X){if(Pn.apply(this,arguments),lt){if(lt){var pe=St;lt=!1,St=null}else throw Error(t(198));Ct||(Ct=!0,mt=pe)}}function Zt(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Ht(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function vn(n){if(Zt(n)!==n)throw Error(t(188))}function ri(n){var i=n.alternate;if(!i){if(i=Zt(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var h=a.return;if(h===null)break;var m=h.alternate;if(m===null){if(c=h.return,c!==null){a=c;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===a)return vn(h),n;if(m===c)return vn(h),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=h,c=m;else{for(var C=!1,k=h.child;k;){if(k===a){C=!0,a=h,c=m;break}if(k===c){C=!0,c=h,a=m;break}k=k.sibling}if(!C){for(k=m.child;k;){if(k===a){C=!0,a=m,c=h;break}if(k===c){C=!0,c=m,a=h;break}k=k.sibling}if(!C)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Dn(n){return n=ri(n),n!==null?Mn(n):null}function Mn(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Mn(n);if(i!==null)return i;n=n.sibling}return null}var _n=e.unstable_scheduleCallback,nn=e.unstable_cancelCallback,si=e.unstable_shouldYield,Mi=e.unstable_requestPaint,Ut=e.unstable_now,ji=e.unstable_getCurrentPriorityLevel,Vn=e.unstable_ImmediatePriority,Cr=e.unstable_UserBlockingPriority,Xi=e.unstable_NormalPriority,or=e.unstable_LowPriority,N=e.unstable_IdlePriority,j=null,he=null;function ae(n){if(he&&typeof he.onCommitFiberRoot=="function")try{he.onCommitFiberRoot(j,n,void 0,(n.current.flags&128)===128)}catch{}}var re=Math.clz32?Math.clz32:ke,Be=Math.log,qe=Math.LN2;function ke(n){return n>>>=0,n===0?32:31-(Be(n)/qe|0)|0}var Ge=64,Qe=4194304;function pt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Mt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,h=n.suspendedLanes,m=n.pingedLanes,C=a&268435455;if(C!==0){var k=C&~h;k!==0?c=pt(k):(m&=C,m!==0&&(c=pt(m)))}else C=a&~h,C!==0?c=pt(C):m!==0&&(c=pt(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&h)===0&&(h=c&-c,m=i&-i,h>=m||h===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-re(i),h=1<<a,c|=n[a],i&=~h;return c}function Je(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bt(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,m=n.pendingLanes;0<m;){var C=31-re(m),k=1<<C,X=h[C];X===-1?((k&a)===0||(k&c)!==0)&&(h[C]=Je(k,i)):X<=i&&(n.expiredLanes|=k),m&=~k}}function an(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Kt(){var n=Ge;return Ge<<=1,(Ge&4194240)===0&&(Ge=64),n}function Wt(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function fn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-re(i),n[i]=a}function et(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-re(a),m=1<<h;i[h]=0,c[h]=-1,n[h]=-1,a&=~m}}function Tn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-re(a),h=1<<c;h&i|n[c]&i&&(n[c]|=i),a&=~h}}var rt=0;function Ki(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var En,br,Pi,Yi,Pt,mn=!1,Gn=[],Vt=null,Qt=null,Ln=null,Rr=new Map,Ta=new Map,Nr=[],qg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lf(n,i){switch(n){case"focusin":case"focusout":Vt=null;break;case"dragenter":case"dragleave":Qt=null;break;case"mouseover":case"mouseout":Ln=null;break;case"pointerover":case"pointerout":Rr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ta.delete(i.pointerId)}}function Ea(n,i,a,c,h,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[h]},i!==null&&(i=ka(i),i!==null&&br(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function $g(n,i,a,c,h){switch(i){case"focusin":return Vt=Ea(Vt,n,i,a,c,h),!0;case"dragenter":return Qt=Ea(Qt,n,i,a,c,h),!0;case"mouseover":return Ln=Ea(Ln,n,i,a,c,h),!0;case"pointerover":var m=h.pointerId;return Rr.set(m,Ea(Rr.get(m)||null,n,i,a,c,h)),!0;case"gotpointercapture":return m=h.pointerId,Ta.set(m,Ea(Ta.get(m)||null,n,i,a,c,h)),!0}return!1}function cf(n){var i=as(n.target);if(i!==null){var a=Zt(i);if(a!==null){if(i=a.tag,i===13){if(i=Ht(a),i!==null){n.blockedOn=i,Pt(n.priority,function(){Pi(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Co(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Dc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ue=c,a.target.dispatchEvent(c),Ue=null}else return i=ka(a),i!==null&&br(i),n.blockedOn=a,!1;i.shift()}return!0}function uf(n,i,a){Co(n)&&a.delete(i)}function Zg(){mn=!1,Vt!==null&&Co(Vt)&&(Vt=null),Qt!==null&&Co(Qt)&&(Qt=null),Ln!==null&&Co(Ln)&&(Ln=null),Rr.forEach(uf),Ta.forEach(uf)}function wa(n,i){n.blockedOn===i&&(n.blockedOn=null,mn||(mn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Zg)))}function Aa(n){function i(h){return wa(h,n)}if(0<Gn.length){wa(Gn[0],n);for(var a=1;a<Gn.length;a++){var c=Gn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Vt!==null&&wa(Vt,n),Qt!==null&&wa(Qt,n),Ln!==null&&wa(Ln,n),Rr.forEach(i),Ta.forEach(i),a=0;a<Nr.length;a++)c=Nr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Nr.length&&(a=Nr[0],a.blockedOn===null);)cf(a),a.blockedOn===null&&Nr.shift()}var Cs=P.ReactCurrentBatchConfig,bo=!0;function Qg(n,i,a,c){var h=rt,m=Cs.transition;Cs.transition=null;try{rt=1,Pc(n,i,a,c)}finally{rt=h,Cs.transition=m}}function Jg(n,i,a,c){var h=rt,m=Cs.transition;Cs.transition=null;try{rt=4,Pc(n,i,a,c)}finally{rt=h,Cs.transition=m}}function Pc(n,i,a,c){if(bo){var h=Dc(n,i,a,c);if(h===null)qc(n,i,c,Ro,a),lf(n,c);else if($g(h,n,i,a,c))c.stopPropagation();else if(lf(n,c),i&4&&-1<qg.indexOf(n)){for(;h!==null;){var m=ka(h);if(m!==null&&En(m),m=Dc(n,i,a,c),m===null&&qc(n,i,c,Ro,a),m===h)break;h=m}h!==null&&c.stopPropagation()}else qc(n,i,c,null,a)}}var Ro=null;function Dc(n,i,a,c){if(Ro=null,n=ge(c),n=as(n),n!==null)if(i=Zt(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Ht(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Ro=n,null}function hf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ji()){case Vn:return 1;case Cr:return 4;case Xi:case or:return 16;case N:return 536870912;default:return 16}default:return 16}}var Pr=null,Lc=null,No=null;function df(){if(No)return No;var n,i=Lc,a=i.length,c,h="value"in Pr?Pr.value:Pr.textContent,m=h.length;for(n=0;n<a&&i[n]===h[n];n++);var C=a-n;for(c=1;c<=C&&i[a-c]===h[m-c];c++);return No=h.slice(n,1<c?1-c:void 0)}function Po(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Do(){return!0}function ff(){return!1}function pi(n){function i(a,c,h,m,C){this._reactName=a,this._targetInst=h,this.type=c,this.nativeEvent=m,this.target=C,this.currentTarget=null;for(var k in n)n.hasOwnProperty(k)&&(a=n[k],this[k]=a?a(m):m[k]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Do:ff,this.isPropagationStopped=ff,this}return ee(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Do)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Do)},persist:function(){},isPersistent:Do}),i}var bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ic=pi(bs),Ca=ee({},bs,{view:0,detail:0}),ev=pi(Ca),Uc,Oc,ba,Lo=ee({},Ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ba&&(ba&&n.type==="mousemove"?(Uc=n.screenX-ba.screenX,Oc=n.screenY-ba.screenY):Oc=Uc=0,ba=n),Uc)},movementY:function(n){return"movementY"in n?n.movementY:Oc}}),pf=pi(Lo),tv=ee({},Lo,{dataTransfer:0}),nv=pi(tv),iv=ee({},Ca,{relatedTarget:0}),Fc=pi(iv),rv=ee({},bs,{animationName:0,elapsedTime:0,pseudoElement:0}),sv=pi(rv),av=ee({},bs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),ov=pi(av),lv=ee({},bs,{data:0}),mf=pi(lv),cv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=hv[n])?!!i[n]:!1}function kc(){return dv}var fv=ee({},Ca,{key:function(n){if(n.key){var i=cv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Po(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?uv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kc,charCode:function(n){return n.type==="keypress"?Po(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Po(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),pv=pi(fv),mv=ee({},Lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gf=pi(mv),gv=ee({},Ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kc}),vv=pi(gv),_v=ee({},bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),xv=pi(_v),yv=ee({},Lo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Sv=pi(yv),Mv=[9,13,27,32],Bc=d&&"CompositionEvent"in window,Ra=null;d&&"documentMode"in document&&(Ra=document.documentMode);var Tv=d&&"TextEvent"in window&&!Ra,vf=d&&(!Bc||Ra&&8<Ra&&11>=Ra),_f=" ",xf=!1;function yf(n,i){switch(n){case"keyup":return Mv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Rs=!1;function Ev(n,i){switch(n){case"compositionend":return Sf(i);case"keypress":return i.which!==32?null:(xf=!0,_f);case"textInput":return n=i.data,n===_f&&xf?null:n;default:return null}}function wv(n,i){if(Rs)return n==="compositionend"||!Bc&&yf(n,i)?(n=df(),No=Lc=Pr=null,Rs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return vf&&i.locale!=="ko"?null:i.data;default:return null}}var Av={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Av[n.type]:i==="textarea"}function Tf(n,i,a,c){W(c),i=ko(i,"onChange"),0<i.length&&(a=new Ic("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Na=null,Pa=null;function Cv(n){Hf(n,0)}function Io(n){var i=Is(n);if(ct(i))return n}function bv(n,i){if(n==="change")return i}var Ef=!1;if(d){var zc;if(d){var Hc="oninput"in document;if(!Hc){var wf=document.createElement("div");wf.setAttribute("oninput","return;"),Hc=typeof wf.oninput=="function"}zc=Hc}else zc=!1;Ef=zc&&(!document.documentMode||9<document.documentMode)}function Af(){Na&&(Na.detachEvent("onpropertychange",Cf),Pa=Na=null)}function Cf(n){if(n.propertyName==="value"&&Io(Pa)){var i=[];Tf(i,Pa,n,ge(n)),Ve(Cv,i)}}function Rv(n,i,a){n==="focusin"?(Af(),Na=i,Pa=a,Na.attachEvent("onpropertychange",Cf)):n==="focusout"&&Af()}function Nv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Io(Pa)}function Pv(n,i){if(n==="click")return Io(i)}function Dv(n,i){if(n==="input"||n==="change")return Io(i)}function Lv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Di=typeof Object.is=="function"?Object.is:Lv;function Da(n,i){if(Di(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var h=a[c];if(!f.call(i,h)||!Di(n[h],i[h]))return!1}return!0}function bf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Rf(n,i){var a=bf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=bf(a)}}function Nf(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Nf(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Pf(){for(var n=window,i=At();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=At(n.document)}return i}function Vc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Iv(n){var i=Pf(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Nf(a.ownerDocument.documentElement,a)){if(c!==null&&Vc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,m=Math.min(c.start,h);c=c.end===void 0?m:Math.min(c.end,h),!n.extend&&m>c&&(h=c,c=m,m=h),h=Rf(a,m);var C=Rf(a,c);h&&C&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==C.node||n.focusOffset!==C.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(C.node,C.offset)):(i.setEnd(C.node,C.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Uv=d&&"documentMode"in document&&11>=document.documentMode,Ns=null,Gc=null,La=null,Wc=!1;function Df(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Wc||Ns==null||Ns!==At(c)||(c=Ns,"selectionStart"in c&&Vc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),La&&Da(La,c)||(La=c,c=ko(Gc,"onSelect"),0<c.length&&(i=new Ic("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Ns)))}function Uo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ps={animationend:Uo("Animation","AnimationEnd"),animationiteration:Uo("Animation","AnimationIteration"),animationstart:Uo("Animation","AnimationStart"),transitionend:Uo("Transition","TransitionEnd")},jc={},Lf={};d&&(Lf=document.createElement("div").style,"AnimationEvent"in window||(delete Ps.animationend.animation,delete Ps.animationiteration.animation,delete Ps.animationstart.animation),"TransitionEvent"in window||delete Ps.transitionend.transition);function Oo(n){if(jc[n])return jc[n];if(!Ps[n])return n;var i=Ps[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Lf)return jc[n]=i[a];return n}var If=Oo("animationend"),Uf=Oo("animationiteration"),Of=Oo("animationstart"),Ff=Oo("transitionend"),kf=new Map,Bf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dr(n,i){kf.set(n,i),l(i,[n])}for(var Xc=0;Xc<Bf.length;Xc++){var Kc=Bf[Xc],Ov=Kc.toLowerCase(),Fv=Kc[0].toUpperCase()+Kc.slice(1);Dr(Ov,"on"+Fv)}Dr(If,"onAnimationEnd"),Dr(Uf,"onAnimationIteration"),Dr(Of,"onAnimationStart"),Dr("dblclick","onDoubleClick"),Dr("focusin","onFocus"),Dr("focusout","onBlur"),Dr(Ff,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ia));function zf(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,zt(c,i,void 0,n),n.currentTarget=null}function Hf(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],h=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var C=c.length-1;0<=C;C--){var k=c[C],X=k.instance,pe=k.currentTarget;if(k=k.listener,X!==m&&h.isPropagationStopped())break e;zf(h,k,pe),m=X}else for(C=0;C<c.length;C++){if(k=c[C],X=k.instance,pe=k.currentTarget,k=k.listener,X!==m&&h.isPropagationStopped())break e;zf(h,k,pe),m=X}}}if(Ct)throw n=mt,Ct=!1,mt=null,n}function rn(n,i){var a=i[tu];a===void 0&&(a=i[tu]=new Set);var c=n+"__bubble";a.has(c)||(Vf(i,n,2,!1),a.add(c))}function Yc(n,i,a){var c=0;i&&(c|=4),Vf(a,n,c,i)}var Fo="_reactListening"+Math.random().toString(36).slice(2);function Ua(n){if(!n[Fo]){n[Fo]=!0,r.forEach(function(a){a!=="selectionchange"&&(kv.has(a)||Yc(a,!1,n),Yc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Fo]||(i[Fo]=!0,Yc("selectionchange",!1,i))}}function Vf(n,i,a,c){switch(hf(i)){case 1:var h=Qg;break;case 4:h=Jg;break;default:h=Pc}a=h.bind(null,i,a,n),h=void 0,!Ie||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(i,a,{capture:!0,passive:h}):n.addEventListener(i,a,!0):h!==void 0?n.addEventListener(i,a,{passive:h}):n.addEventListener(i,a,!1)}function qc(n,i,a,c,h){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var C=c.tag;if(C===3||C===4){var k=c.stateNode.containerInfo;if(k===h||k.nodeType===8&&k.parentNode===h)break;if(C===4)for(C=c.return;C!==null;){var X=C.tag;if((X===3||X===4)&&(X=C.stateNode.containerInfo,X===h||X.nodeType===8&&X.parentNode===h))return;C=C.return}for(;k!==null;){if(C=as(k),C===null)return;if(X=C.tag,X===5||X===6){c=m=C;continue e}k=k.parentNode}}c=c.return}Ve(function(){var pe=m,Re=ge(a),De=[];e:{var be=kf.get(n);if(be!==void 0){var Ye=Ic,tt=n;switch(n){case"keypress":if(Po(a)===0)break e;case"keydown":case"keyup":Ye=pv;break;case"focusin":tt="focus",Ye=Fc;break;case"focusout":tt="blur",Ye=Fc;break;case"beforeblur":case"afterblur":Ye=Fc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ye=pf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ye=nv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ye=vv;break;case If:case Uf:case Of:Ye=sv;break;case Ff:Ye=xv;break;case"scroll":Ye=ev;break;case"wheel":Ye=Sv;break;case"copy":case"cut":case"paste":Ye=ov;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ye=gf}var nt=(i&4)!==0,gn=!nt&&n==="scroll",oe=nt?be!==null?be+"Capture":null:be;nt=[];for(var Z=pe,de;Z!==null;){de=Z;var Oe=de.stateNode;if(de.tag===5&&Oe!==null&&(de=Oe,oe!==null&&(Oe=me(Z,oe),Oe!=null&&nt.push(Oa(Z,Oe,de)))),gn)break;Z=Z.return}0<nt.length&&(be=new Ye(be,tt,null,a,Re),De.push({event:be,listeners:nt}))}}if((i&7)===0){e:{if(be=n==="mouseover"||n==="pointerover",Ye=n==="mouseout"||n==="pointerout",be&&a!==Ue&&(tt=a.relatedTarget||a.fromElement)&&(as(tt)||tt[lr]))break e;if((Ye||be)&&(be=Re.window===Re?Re:(be=Re.ownerDocument)?be.defaultView||be.parentWindow:window,Ye?(tt=a.relatedTarget||a.toElement,Ye=pe,tt=tt?as(tt):null,tt!==null&&(gn=Zt(tt),tt!==gn||tt.tag!==5&&tt.tag!==6)&&(tt=null)):(Ye=null,tt=pe),Ye!==tt)){if(nt=pf,Oe="onMouseLeave",oe="onMouseEnter",Z="mouse",(n==="pointerout"||n==="pointerover")&&(nt=gf,Oe="onPointerLeave",oe="onPointerEnter",Z="pointer"),gn=Ye==null?be:Is(Ye),de=tt==null?be:Is(tt),be=new nt(Oe,Z+"leave",Ye,a,Re),be.target=gn,be.relatedTarget=de,Oe=null,as(Re)===pe&&(nt=new nt(oe,Z+"enter",tt,a,Re),nt.target=de,nt.relatedTarget=gn,Oe=nt),gn=Oe,Ye&&tt)t:{for(nt=Ye,oe=tt,Z=0,de=nt;de;de=Ds(de))Z++;for(de=0,Oe=oe;Oe;Oe=Ds(Oe))de++;for(;0<Z-de;)nt=Ds(nt),Z--;for(;0<de-Z;)oe=Ds(oe),de--;for(;Z--;){if(nt===oe||oe!==null&&nt===oe.alternate)break t;nt=Ds(nt),oe=Ds(oe)}nt=null}else nt=null;Ye!==null&&Gf(De,be,Ye,nt,!1),tt!==null&&gn!==null&&Gf(De,gn,tt,nt,!0)}}e:{if(be=pe?Is(pe):window,Ye=be.nodeName&&be.nodeName.toLowerCase(),Ye==="select"||Ye==="input"&&be.type==="file")var ot=bv;else if(Mf(be))if(Ef)ot=Dv;else{ot=Nv;var ht=Rv}else(Ye=be.nodeName)&&Ye.toLowerCase()==="input"&&(be.type==="checkbox"||be.type==="radio")&&(ot=Pv);if(ot&&(ot=ot(n,pe))){Tf(De,ot,a,Re);break e}ht&&ht(n,be,pe),n==="focusout"&&(ht=be._wrapperState)&&ht.controlled&&be.type==="number"&&Sn(be,"number",be.value)}switch(ht=pe?Is(pe):window,n){case"focusin":(Mf(ht)||ht.contentEditable==="true")&&(Ns=ht,Gc=pe,La=null);break;case"focusout":La=Gc=Ns=null;break;case"mousedown":Wc=!0;break;case"contextmenu":case"mouseup":case"dragend":Wc=!1,Df(De,a,Re);break;case"selectionchange":if(Uv)break;case"keydown":case"keyup":Df(De,a,Re)}var dt;if(Bc)e:{switch(n){case"compositionstart":var vt="onCompositionStart";break e;case"compositionend":vt="onCompositionEnd";break e;case"compositionupdate":vt="onCompositionUpdate";break e}vt=void 0}else Rs?yf(n,a)&&(vt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(vt="onCompositionStart");vt&&(vf&&a.locale!=="ko"&&(Rs||vt!=="onCompositionStart"?vt==="onCompositionEnd"&&Rs&&(dt=df()):(Pr=Re,Lc="value"in Pr?Pr.value:Pr.textContent,Rs=!0)),ht=ko(pe,vt),0<ht.length&&(vt=new mf(vt,n,null,a,Re),De.push({event:vt,listeners:ht}),dt?vt.data=dt:(dt=Sf(a),dt!==null&&(vt.data=dt)))),(dt=Tv?Ev(n,a):wv(n,a))&&(pe=ko(pe,"onBeforeInput"),0<pe.length&&(Re=new mf("onBeforeInput","beforeinput",null,a,Re),De.push({event:Re,listeners:pe}),Re.data=dt))}Hf(De,i)})}function Oa(n,i,a){return{instance:n,listener:i,currentTarget:a}}function ko(n,i){for(var a=i+"Capture",c=[];n!==null;){var h=n,m=h.stateNode;h.tag===5&&m!==null&&(h=m,m=me(n,a),m!=null&&c.unshift(Oa(n,m,h)),m=me(n,i),m!=null&&c.push(Oa(n,m,h))),n=n.return}return c}function Ds(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Gf(n,i,a,c,h){for(var m=i._reactName,C=[];a!==null&&a!==c;){var k=a,X=k.alternate,pe=k.stateNode;if(X!==null&&X===c)break;k.tag===5&&pe!==null&&(k=pe,h?(X=me(a,m),X!=null&&C.unshift(Oa(a,X,k))):h||(X=me(a,m),X!=null&&C.push(Oa(a,X,k)))),a=a.return}C.length!==0&&n.push({event:i,listeners:C})}var Bv=/\r\n?/g,zv=/\u0000|\uFFFD/g;function Wf(n){return(typeof n=="string"?n:""+n).replace(Bv,`
`).replace(zv,"")}function Bo(n,i,a){if(i=Wf(i),Wf(n)!==i&&a)throw Error(t(425))}function zo(){}var $c=null,Zc=null;function Qc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Jc=typeof setTimeout=="function"?setTimeout:void 0,Hv=typeof clearTimeout=="function"?clearTimeout:void 0,jf=typeof Promise=="function"?Promise:void 0,Vv=typeof queueMicrotask=="function"?queueMicrotask:typeof jf<"u"?function(n){return jf.resolve(null).then(n).catch(Gv)}:Jc;function Gv(n){setTimeout(function(){throw n})}function eu(n,i){var a=i,c=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(c===0){n.removeChild(h),Aa(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=h}while(a);Aa(i)}function Lr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Xf(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Ls=Math.random().toString(36).slice(2),qi="__reactFiber$"+Ls,Fa="__reactProps$"+Ls,lr="__reactContainer$"+Ls,tu="__reactEvents$"+Ls,Wv="__reactListeners$"+Ls,jv="__reactHandles$"+Ls;function as(n){var i=n[qi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[lr]||a[qi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Xf(n);n!==null;){if(a=n[qi])return a;n=Xf(n)}return i}n=a,a=n.parentNode}return null}function ka(n){return n=n[qi]||n[lr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Is(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ho(n){return n[Fa]||null}var nu=[],Us=-1;function Ir(n){return{current:n}}function sn(n){0>Us||(n.current=nu[Us],nu[Us]=null,Us--)}function en(n,i){Us++,nu[Us]=n.current,n.current=i}var Ur={},Wn=Ir(Ur),ai=Ir(!1),os=Ur;function Os(n,i){var a=n.type.contextTypes;if(!a)return Ur;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var h={},m;for(m in a)h[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function oi(n){return n=n.childContextTypes,n!=null}function Vo(){sn(ai),sn(Wn)}function Kf(n,i,a){if(Wn.current!==Ur)throw Error(t(168));en(Wn,i),en(ai,a)}function Yf(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var h in c)if(!(h in i))throw Error(t(108,He(n)||"Unknown",h));return ee({},a,c)}function Go(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ur,os=Wn.current,en(Wn,n),en(ai,ai.current),!0}function qf(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Yf(n,i,os),c.__reactInternalMemoizedMergedChildContext=n,sn(ai),sn(Wn),en(Wn,n)):sn(ai),en(ai,a)}var cr=null,Wo=!1,iu=!1;function $f(n){cr===null?cr=[n]:cr.push(n)}function Xv(n){Wo=!0,$f(n)}function Or(){if(!iu&&cr!==null){iu=!0;var n=0,i=rt;try{var a=cr;for(rt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}cr=null,Wo=!1}catch(h){throw cr!==null&&(cr=cr.slice(n+1)),_n(Vn,Or),h}finally{rt=i,iu=!1}}return null}var Fs=[],ks=0,jo=null,Xo=0,Ti=[],Ei=0,ls=null,ur=1,hr="";function cs(n,i){Fs[ks++]=Xo,Fs[ks++]=jo,jo=n,Xo=i}function Zf(n,i,a){Ti[Ei++]=ur,Ti[Ei++]=hr,Ti[Ei++]=ls,ls=n;var c=ur;n=hr;var h=32-re(c)-1;c&=~(1<<h),a+=1;var m=32-re(i)+h;if(30<m){var C=h-h%5;m=(c&(1<<C)-1).toString(32),c>>=C,h-=C,ur=1<<32-re(i)+h|a<<h|c,hr=m+n}else ur=1<<m|a<<h|c,hr=n}function ru(n){n.return!==null&&(cs(n,1),Zf(n,1,0))}function su(n){for(;n===jo;)jo=Fs[--ks],Fs[ks]=null,Xo=Fs[--ks],Fs[ks]=null;for(;n===ls;)ls=Ti[--Ei],Ti[Ei]=null,hr=Ti[--Ei],Ti[Ei]=null,ur=Ti[--Ei],Ti[Ei]=null}var mi=null,gi=null,on=!1,Li=null;function Qf(n,i){var a=bi(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Jf(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,mi=n,gi=Lr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,mi=n,gi=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=ls!==null?{id:ur,overflow:hr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=bi(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,mi=n,gi=null,!0):!1;default:return!1}}function au(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ou(n){if(on){var i=gi;if(i){var a=i;if(!Jf(n,i)){if(au(n))throw Error(t(418));i=Lr(a.nextSibling);var c=mi;i&&Jf(n,i)?Qf(c,a):(n.flags=n.flags&-4097|2,on=!1,mi=n)}}else{if(au(n))throw Error(t(418));n.flags=n.flags&-4097|2,on=!1,mi=n}}}function ep(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;mi=n}function Ko(n){if(n!==mi)return!1;if(!on)return ep(n),on=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Qc(n.type,n.memoizedProps)),i&&(i=gi)){if(au(n))throw tp(),Error(t(418));for(;i;)Qf(n,i),i=Lr(i.nextSibling)}if(ep(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){gi=Lr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}gi=null}}else gi=mi?Lr(n.stateNode.nextSibling):null;return!0}function tp(){for(var n=gi;n;)n=Lr(n.nextSibling)}function Bs(){gi=mi=null,on=!1}function lu(n){Li===null?Li=[n]:Li.push(n)}var Kv=P.ReactCurrentBatchConfig;function Ba(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var h=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(C){var k=h.refs;C===null?delete k[m]:k[m]=C},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Yo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function np(n){var i=n._init;return i(n._payload)}function ip(n){function i(oe,Z){if(n){var de=oe.deletions;de===null?(oe.deletions=[Z],oe.flags|=16):de.push(Z)}}function a(oe,Z){if(!n)return null;for(;Z!==null;)i(oe,Z),Z=Z.sibling;return null}function c(oe,Z){for(oe=new Map;Z!==null;)Z.key!==null?oe.set(Z.key,Z):oe.set(Z.index,Z),Z=Z.sibling;return oe}function h(oe,Z){return oe=Wr(oe,Z),oe.index=0,oe.sibling=null,oe}function m(oe,Z,de){return oe.index=de,n?(de=oe.alternate,de!==null?(de=de.index,de<Z?(oe.flags|=2,Z):de):(oe.flags|=2,Z)):(oe.flags|=1048576,Z)}function C(oe){return n&&oe.alternate===null&&(oe.flags|=2),oe}function k(oe,Z,de,Oe){return Z===null||Z.tag!==6?(Z=Ju(de,oe.mode,Oe),Z.return=oe,Z):(Z=h(Z,de),Z.return=oe,Z)}function X(oe,Z,de,Oe){var ot=de.type;return ot===T?Re(oe,Z,de.props.children,Oe,de.key):Z!==null&&(Z.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===le&&np(ot)===Z.type)?(Oe=h(Z,de.props),Oe.ref=Ba(oe,Z,de),Oe.return=oe,Oe):(Oe=_l(de.type,de.key,de.props,null,oe.mode,Oe),Oe.ref=Ba(oe,Z,de),Oe.return=oe,Oe)}function pe(oe,Z,de,Oe){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==de.containerInfo||Z.stateNode.implementation!==de.implementation?(Z=eh(de,oe.mode,Oe),Z.return=oe,Z):(Z=h(Z,de.children||[]),Z.return=oe,Z)}function Re(oe,Z,de,Oe,ot){return Z===null||Z.tag!==7?(Z=vs(de,oe.mode,Oe,ot),Z.return=oe,Z):(Z=h(Z,de),Z.return=oe,Z)}function De(oe,Z,de){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return Z=Ju(""+Z,oe.mode,de),Z.return=oe,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case O:return de=_l(Z.type,Z.key,Z.props,null,oe.mode,de),de.ref=Ba(oe,null,Z),de.return=oe,de;case I:return Z=eh(Z,oe.mode,de),Z.return=oe,Z;case le:var Oe=Z._init;return De(oe,Oe(Z._payload),de)}if(Bt(Z)||Q(Z))return Z=vs(Z,oe.mode,de,null),Z.return=oe,Z;Yo(oe,Z)}return null}function be(oe,Z,de,Oe){var ot=Z!==null?Z.key:null;if(typeof de=="string"&&de!==""||typeof de=="number")return ot!==null?null:k(oe,Z,""+de,Oe);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case O:return de.key===ot?X(oe,Z,de,Oe):null;case I:return de.key===ot?pe(oe,Z,de,Oe):null;case le:return ot=de._init,be(oe,Z,ot(de._payload),Oe)}if(Bt(de)||Q(de))return ot!==null?null:Re(oe,Z,de,Oe,null);Yo(oe,de)}return null}function Ye(oe,Z,de,Oe,ot){if(typeof Oe=="string"&&Oe!==""||typeof Oe=="number")return oe=oe.get(de)||null,k(Z,oe,""+Oe,ot);if(typeof Oe=="object"&&Oe!==null){switch(Oe.$$typeof){case O:return oe=oe.get(Oe.key===null?de:Oe.key)||null,X(Z,oe,Oe,ot);case I:return oe=oe.get(Oe.key===null?de:Oe.key)||null,pe(Z,oe,Oe,ot);case le:var ht=Oe._init;return Ye(oe,Z,de,ht(Oe._payload),ot)}if(Bt(Oe)||Q(Oe))return oe=oe.get(de)||null,Re(Z,oe,Oe,ot,null);Yo(Z,Oe)}return null}function tt(oe,Z,de,Oe){for(var ot=null,ht=null,dt=Z,vt=Z=0,On=null;dt!==null&&vt<de.length;vt++){dt.index>vt?(On=dt,dt=null):On=dt.sibling;var Gt=be(oe,dt,de[vt],Oe);if(Gt===null){dt===null&&(dt=On);break}n&&dt&&Gt.alternate===null&&i(oe,dt),Z=m(Gt,Z,vt),ht===null?ot=Gt:ht.sibling=Gt,ht=Gt,dt=On}if(vt===de.length)return a(oe,dt),on&&cs(oe,vt),ot;if(dt===null){for(;vt<de.length;vt++)dt=De(oe,de[vt],Oe),dt!==null&&(Z=m(dt,Z,vt),ht===null?ot=dt:ht.sibling=dt,ht=dt);return on&&cs(oe,vt),ot}for(dt=c(oe,dt);vt<de.length;vt++)On=Ye(dt,oe,vt,de[vt],Oe),On!==null&&(n&&On.alternate!==null&&dt.delete(On.key===null?vt:On.key),Z=m(On,Z,vt),ht===null?ot=On:ht.sibling=On,ht=On);return n&&dt.forEach(function(jr){return i(oe,jr)}),on&&cs(oe,vt),ot}function nt(oe,Z,de,Oe){var ot=Q(de);if(typeof ot!="function")throw Error(t(150));if(de=ot.call(de),de==null)throw Error(t(151));for(var ht=ot=null,dt=Z,vt=Z=0,On=null,Gt=de.next();dt!==null&&!Gt.done;vt++,Gt=de.next()){dt.index>vt?(On=dt,dt=null):On=dt.sibling;var jr=be(oe,dt,Gt.value,Oe);if(jr===null){dt===null&&(dt=On);break}n&&dt&&jr.alternate===null&&i(oe,dt),Z=m(jr,Z,vt),ht===null?ot=jr:ht.sibling=jr,ht=jr,dt=On}if(Gt.done)return a(oe,dt),on&&cs(oe,vt),ot;if(dt===null){for(;!Gt.done;vt++,Gt=de.next())Gt=De(oe,Gt.value,Oe),Gt!==null&&(Z=m(Gt,Z,vt),ht===null?ot=Gt:ht.sibling=Gt,ht=Gt);return on&&cs(oe,vt),ot}for(dt=c(oe,dt);!Gt.done;vt++,Gt=de.next())Gt=Ye(dt,oe,vt,Gt.value,Oe),Gt!==null&&(n&&Gt.alternate!==null&&dt.delete(Gt.key===null?vt:Gt.key),Z=m(Gt,Z,vt),ht===null?ot=Gt:ht.sibling=Gt,ht=Gt);return n&&dt.forEach(function(A_){return i(oe,A_)}),on&&cs(oe,vt),ot}function gn(oe,Z,de,Oe){if(typeof de=="object"&&de!==null&&de.type===T&&de.key===null&&(de=de.props.children),typeof de=="object"&&de!==null){switch(de.$$typeof){case O:e:{for(var ot=de.key,ht=Z;ht!==null;){if(ht.key===ot){if(ot=de.type,ot===T){if(ht.tag===7){a(oe,ht.sibling),Z=h(ht,de.props.children),Z.return=oe,oe=Z;break e}}else if(ht.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===le&&np(ot)===ht.type){a(oe,ht.sibling),Z=h(ht,de.props),Z.ref=Ba(oe,ht,de),Z.return=oe,oe=Z;break e}a(oe,ht);break}else i(oe,ht);ht=ht.sibling}de.type===T?(Z=vs(de.props.children,oe.mode,Oe,de.key),Z.return=oe,oe=Z):(Oe=_l(de.type,de.key,de.props,null,oe.mode,Oe),Oe.ref=Ba(oe,Z,de),Oe.return=oe,oe=Oe)}return C(oe);case I:e:{for(ht=de.key;Z!==null;){if(Z.key===ht)if(Z.tag===4&&Z.stateNode.containerInfo===de.containerInfo&&Z.stateNode.implementation===de.implementation){a(oe,Z.sibling),Z=h(Z,de.children||[]),Z.return=oe,oe=Z;break e}else{a(oe,Z);break}else i(oe,Z);Z=Z.sibling}Z=eh(de,oe.mode,Oe),Z.return=oe,oe=Z}return C(oe);case le:return ht=de._init,gn(oe,Z,ht(de._payload),Oe)}if(Bt(de))return tt(oe,Z,de,Oe);if(Q(de))return nt(oe,Z,de,Oe);Yo(oe,de)}return typeof de=="string"&&de!==""||typeof de=="number"?(de=""+de,Z!==null&&Z.tag===6?(a(oe,Z.sibling),Z=h(Z,de),Z.return=oe,oe=Z):(a(oe,Z),Z=Ju(de,oe.mode,Oe),Z.return=oe,oe=Z),C(oe)):a(oe,Z)}return gn}var zs=ip(!0),rp=ip(!1),qo=Ir(null),$o=null,Hs=null,cu=null;function uu(){cu=Hs=$o=null}function hu(n){var i=qo.current;sn(qo),n._currentValue=i}function du(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Vs(n,i){$o=n,cu=Hs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(li=!0),n.firstContext=null)}function wi(n){var i=n._currentValue;if(cu!==n)if(n={context:n,memoizedValue:i,next:null},Hs===null){if($o===null)throw Error(t(308));Hs=n,$o.dependencies={lanes:0,firstContext:n}}else Hs=Hs.next=n;return i}var us=null;function fu(n){us===null?us=[n]:us.push(n)}function sp(n,i,a,c){var h=i.interleaved;return h===null?(a.next=a,fu(i)):(a.next=h.next,h.next=a),i.interleaved=a,dr(n,c)}function dr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Fr=!1;function pu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ap(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function fr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function kr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ot&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,dr(n,a)}return h=c.interleaved,h===null?(i.next=i,fu(c)):(i.next=h.next,h.next=i),c.interleaved=i,dr(n,a)}function Zo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Tn(n,a)}}function op(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var h=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var C={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?h=m=C:m=m.next=C,a=a.next}while(a!==null);m===null?h=m=i:m=m.next=i}else h=m=i;a={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Qo(n,i,a,c){var h=n.updateQueue;Fr=!1;var m=h.firstBaseUpdate,C=h.lastBaseUpdate,k=h.shared.pending;if(k!==null){h.shared.pending=null;var X=k,pe=X.next;X.next=null,C===null?m=pe:C.next=pe,C=X;var Re=n.alternate;Re!==null&&(Re=Re.updateQueue,k=Re.lastBaseUpdate,k!==C&&(k===null?Re.firstBaseUpdate=pe:k.next=pe,Re.lastBaseUpdate=X))}if(m!==null){var De=h.baseState;C=0,Re=pe=X=null,k=m;do{var be=k.lane,Ye=k.eventTime;if((c&be)===be){Re!==null&&(Re=Re.next={eventTime:Ye,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var tt=n,nt=k;switch(be=i,Ye=a,nt.tag){case 1:if(tt=nt.payload,typeof tt=="function"){De=tt.call(Ye,De,be);break e}De=tt;break e;case 3:tt.flags=tt.flags&-65537|128;case 0:if(tt=nt.payload,be=typeof tt=="function"?tt.call(Ye,De,be):tt,be==null)break e;De=ee({},De,be);break e;case 2:Fr=!0}}k.callback!==null&&k.lane!==0&&(n.flags|=64,be=h.effects,be===null?h.effects=[k]:be.push(k))}else Ye={eventTime:Ye,lane:be,tag:k.tag,payload:k.payload,callback:k.callback,next:null},Re===null?(pe=Re=Ye,X=De):Re=Re.next=Ye,C|=be;if(k=k.next,k===null){if(k=h.shared.pending,k===null)break;be=k,k=be.next,be.next=null,h.lastBaseUpdate=be,h.shared.pending=null}}while(!0);if(Re===null&&(X=De),h.baseState=X,h.firstBaseUpdate=pe,h.lastBaseUpdate=Re,i=h.shared.interleaved,i!==null){h=i;do C|=h.lane,h=h.next;while(h!==i)}else m===null&&(h.shared.lanes=0);fs|=C,n.lanes=C,n.memoizedState=De}}function lp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],h=c.callback;if(h!==null){if(c.callback=null,c=a,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var za={},$i=Ir(za),Ha=Ir(za),Va=Ir(za);function hs(n){if(n===za)throw Error(t(174));return n}function mu(n,i){switch(en(Va,i),en(Ha,n),en($i,za),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ft(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ft(i,n)}sn($i),en($i,i)}function Gs(){sn($i),sn(Ha),sn(Va)}function cp(n){hs(Va.current);var i=hs($i.current),a=ft(i,n.type);i!==a&&(en(Ha,n),en($i,a))}function gu(n){Ha.current===n&&(sn($i),sn(Ha))}var cn=Ir(0);function Jo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var vu=[];function _u(){for(var n=0;n<vu.length;n++)vu[n]._workInProgressVersionPrimary=null;vu.length=0}var el=P.ReactCurrentDispatcher,xu=P.ReactCurrentBatchConfig,ds=0,un=null,wn=null,In=null,tl=!1,Ga=!1,Wa=0,Yv=0;function jn(){throw Error(t(321))}function yu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Di(n[a],i[a]))return!1;return!0}function Su(n,i,a,c,h,m){if(ds=m,un=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,el.current=n===null||n.memoizedState===null?Qv:Jv,n=a(c,h),Ga){m=0;do{if(Ga=!1,Wa=0,25<=m)throw Error(t(301));m+=1,In=wn=null,i.updateQueue=null,el.current=e_,n=a(c,h)}while(Ga)}if(el.current=rl,i=wn!==null&&wn.next!==null,ds=0,In=wn=un=null,tl=!1,i)throw Error(t(300));return n}function Mu(){var n=Wa!==0;return Wa=0,n}function Zi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return In===null?un.memoizedState=In=n:In=In.next=n,In}function Ai(){if(wn===null){var n=un.alternate;n=n!==null?n.memoizedState:null}else n=wn.next;var i=In===null?un.memoizedState:In.next;if(i!==null)In=i,wn=n;else{if(n===null)throw Error(t(310));wn=n,n={memoizedState:wn.memoizedState,baseState:wn.baseState,baseQueue:wn.baseQueue,queue:wn.queue,next:null},In===null?un.memoizedState=In=n:In=In.next=n}return In}function ja(n,i){return typeof i=="function"?i(n):i}function Tu(n){var i=Ai(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=wn,h=c.baseQueue,m=a.pending;if(m!==null){if(h!==null){var C=h.next;h.next=m.next,m.next=C}c.baseQueue=h=m,a.pending=null}if(h!==null){m=h.next,c=c.baseState;var k=C=null,X=null,pe=m;do{var Re=pe.lane;if((ds&Re)===Re)X!==null&&(X=X.next={lane:0,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null}),c=pe.hasEagerState?pe.eagerState:n(c,pe.action);else{var De={lane:Re,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null};X===null?(k=X=De,C=c):X=X.next=De,un.lanes|=Re,fs|=Re}pe=pe.next}while(pe!==null&&pe!==m);X===null?C=c:X.next=k,Di(c,i.memoizedState)||(li=!0),i.memoizedState=c,i.baseState=C,i.baseQueue=X,a.lastRenderedState=c}if(n=a.interleaved,n!==null){h=n;do m=h.lane,un.lanes|=m,fs|=m,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Eu(n){var i=Ai(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,h=a.pending,m=i.memoizedState;if(h!==null){a.pending=null;var C=h=h.next;do m=n(m,C.action),C=C.next;while(C!==h);Di(m,i.memoizedState)||(li=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function up(){}function hp(n,i){var a=un,c=Ai(),h=i(),m=!Di(c.memoizedState,h);if(m&&(c.memoizedState=h,li=!0),c=c.queue,wu(pp.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||In!==null&&In.memoizedState.tag&1){if(a.flags|=2048,Xa(9,fp.bind(null,a,c,h,i),void 0,null),Un===null)throw Error(t(349));(ds&30)!==0||dp(a,i,h)}return h}function dp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=un.updateQueue,i===null?(i={lastEffect:null,stores:null},un.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function fp(n,i,a,c){i.value=a,i.getSnapshot=c,mp(i)&&gp(n)}function pp(n,i,a){return a(function(){mp(i)&&gp(n)})}function mp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Di(n,a)}catch{return!0}}function gp(n){var i=dr(n,1);i!==null&&Fi(i,n,1,-1)}function vp(n){var i=Zi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:n},i.queue=n,n=n.dispatch=Zv.bind(null,un,n),[i.memoizedState,n]}function Xa(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=un.updateQueue,i===null?(i={lastEffect:null,stores:null},un.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function _p(){return Ai().memoizedState}function nl(n,i,a,c){var h=Zi();un.flags|=n,h.memoizedState=Xa(1|i,a,void 0,c===void 0?null:c)}function il(n,i,a,c){var h=Ai();c=c===void 0?null:c;var m=void 0;if(wn!==null){var C=wn.memoizedState;if(m=C.destroy,c!==null&&yu(c,C.deps)){h.memoizedState=Xa(i,a,m,c);return}}un.flags|=n,h.memoizedState=Xa(1|i,a,m,c)}function xp(n,i){return nl(8390656,8,n,i)}function wu(n,i){return il(2048,8,n,i)}function yp(n,i){return il(4,2,n,i)}function Sp(n,i){return il(4,4,n,i)}function Mp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Tp(n,i,a){return a=a!=null?a.concat([n]):null,il(4,4,Mp.bind(null,i,n),a)}function Au(){}function Ep(n,i){var a=Ai();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&yu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function wp(n,i){var a=Ai();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&yu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Ap(n,i,a){return(ds&21)===0?(n.baseState&&(n.baseState=!1,li=!0),n.memoizedState=a):(Di(a,i)||(a=Kt(),un.lanes|=a,fs|=a,n.baseState=!0),i)}function qv(n,i){var a=rt;rt=a!==0&&4>a?a:4,n(!0);var c=xu.transition;xu.transition={};try{n(!1),i()}finally{rt=a,xu.transition=c}}function Cp(){return Ai().memoizedState}function $v(n,i,a){var c=Vr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},bp(n))Rp(i,a);else if(a=sp(n,i,a,c),a!==null){var h=ei();Fi(a,n,c,h),Np(a,i,c)}}function Zv(n,i,a){var c=Vr(n),h={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(bp(n))Rp(i,h);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var C=i.lastRenderedState,k=m(C,a);if(h.hasEagerState=!0,h.eagerState=k,Di(k,C)){var X=i.interleaved;X===null?(h.next=h,fu(i)):(h.next=X.next,X.next=h),i.interleaved=h;return}}catch{}finally{}a=sp(n,i,h,c),a!==null&&(h=ei(),Fi(a,n,c,h),Np(a,i,c))}}function bp(n){var i=n.alternate;return n===un||i!==null&&i===un}function Rp(n,i){Ga=tl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Np(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Tn(n,a)}}var rl={readContext:wi,useCallback:jn,useContext:jn,useEffect:jn,useImperativeHandle:jn,useInsertionEffect:jn,useLayoutEffect:jn,useMemo:jn,useReducer:jn,useRef:jn,useState:jn,useDebugValue:jn,useDeferredValue:jn,useTransition:jn,useMutableSource:jn,useSyncExternalStore:jn,useId:jn,unstable_isNewReconciler:!1},Qv={readContext:wi,useCallback:function(n,i){return Zi().memoizedState=[n,i===void 0?null:i],n},useContext:wi,useEffect:xp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,nl(4194308,4,Mp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return nl(4194308,4,n,i)},useInsertionEffect:function(n,i){return nl(4,2,n,i)},useMemo:function(n,i){var a=Zi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Zi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=$v.bind(null,un,n),[c.memoizedState,n]},useRef:function(n){var i=Zi();return n={current:n},i.memoizedState=n},useState:vp,useDebugValue:Au,useDeferredValue:function(n){return Zi().memoizedState=n},useTransition:function(){var n=vp(!1),i=n[0];return n=qv.bind(null,n[1]),Zi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=un,h=Zi();if(on){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Un===null)throw Error(t(349));(ds&30)!==0||dp(c,i,a)}h.memoizedState=a;var m={value:a,getSnapshot:i};return h.queue=m,xp(pp.bind(null,c,m,n),[n]),c.flags|=2048,Xa(9,fp.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=Zi(),i=Un.identifierPrefix;if(on){var a=hr,c=ur;a=(c&~(1<<32-re(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Wa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Yv++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Jv={readContext:wi,useCallback:Ep,useContext:wi,useEffect:wu,useImperativeHandle:Tp,useInsertionEffect:yp,useLayoutEffect:Sp,useMemo:wp,useReducer:Tu,useRef:_p,useState:function(){return Tu(ja)},useDebugValue:Au,useDeferredValue:function(n){var i=Ai();return Ap(i,wn.memoizedState,n)},useTransition:function(){var n=Tu(ja)[0],i=Ai().memoizedState;return[n,i]},useMutableSource:up,useSyncExternalStore:hp,useId:Cp,unstable_isNewReconciler:!1},e_={readContext:wi,useCallback:Ep,useContext:wi,useEffect:wu,useImperativeHandle:Tp,useInsertionEffect:yp,useLayoutEffect:Sp,useMemo:wp,useReducer:Eu,useRef:_p,useState:function(){return Eu(ja)},useDebugValue:Au,useDeferredValue:function(n){var i=Ai();return wn===null?i.memoizedState=n:Ap(i,wn.memoizedState,n)},useTransition:function(){var n=Eu(ja)[0],i=Ai().memoizedState;return[n,i]},useMutableSource:up,useSyncExternalStore:hp,useId:Cp,unstable_isNewReconciler:!1};function Ii(n,i){if(n&&n.defaultProps){i=ee({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Cu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ee({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var sl={isMounted:function(n){return(n=n._reactInternals)?Zt(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=ei(),h=Vr(n),m=fr(c,h);m.payload=i,a!=null&&(m.callback=a),i=kr(n,m,h),i!==null&&(Fi(i,n,h,c),Zo(i,n,h))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=ei(),h=Vr(n),m=fr(c,h);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=kr(n,m,h),i!==null&&(Fi(i,n,h,c),Zo(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=ei(),c=Vr(n),h=fr(a,c);h.tag=2,i!=null&&(h.callback=i),i=kr(n,h,c),i!==null&&(Fi(i,n,c,a),Zo(i,n,c))}};function Pp(n,i,a,c,h,m,C){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,C):i.prototype&&i.prototype.isPureReactComponent?!Da(a,c)||!Da(h,m):!0}function Dp(n,i,a){var c=!1,h=Ur,m=i.contextType;return typeof m=="object"&&m!==null?m=wi(m):(h=oi(i)?os:Wn.current,c=i.contextTypes,m=(c=c!=null)?Os(n,h):Ur),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=sl,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=m),i}function Lp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&sl.enqueueReplaceState(i,i.state,null)}function bu(n,i,a,c){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},pu(n);var m=i.contextType;typeof m=="object"&&m!==null?h.context=wi(m):(m=oi(i)?os:Wn.current,h.context=Os(n,m)),h.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Cu(n,i,m,a),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&sl.enqueueReplaceState(h,h.state,null),Qo(n,a,h,c),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Ws(n,i){try{var a="",c=i;do a+=we(c),c=c.return;while(c);var h=a}catch(m){h=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:h,digest:null}}function Ru(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Nu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var t_=typeof WeakMap=="function"?WeakMap:Map;function Ip(n,i,a){a=fr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){dl||(dl=!0,ju=c),Nu(n,i)},a}function Up(n,i,a){a=fr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var h=i.value;a.payload=function(){return c(h)},a.callback=function(){Nu(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Nu(n,i),typeof c!="function"&&(zr===null?zr=new Set([this]):zr.add(this));var C=i.stack;this.componentDidCatch(i.value,{componentStack:C!==null?C:""})}),a}function Op(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new t_;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(a)||(h.add(a),n=m_.bind(null,n,i,a),i.then(n,n))}function Fp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function kp(n,i,a,c,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=fr(-1,1),i.tag=2,kr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var n_=P.ReactCurrentOwner,li=!1;function Jn(n,i,a,c){i.child=n===null?rp(i,null,a,c):zs(i,n.child,a,c)}function Bp(n,i,a,c,h){a=a.render;var m=i.ref;return Vs(i,h),c=Su(n,i,a,c,m,h),a=Mu(),n!==null&&!li?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,pr(n,i,h)):(on&&a&&ru(i),i.flags|=1,Jn(n,i,c,h),i.child)}function zp(n,i,a,c,h){if(n===null){var m=a.type;return typeof m=="function"&&!Qu(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,Hp(n,i,m,c,h)):(n=_l(a.type,null,c,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&h)===0){var C=m.memoizedProps;if(a=a.compare,a=a!==null?a:Da,a(C,c)&&n.ref===i.ref)return pr(n,i,h)}return i.flags|=1,n=Wr(m,c),n.ref=i.ref,n.return=i,i.child=n}function Hp(n,i,a,c,h){if(n!==null){var m=n.memoizedProps;if(Da(m,c)&&n.ref===i.ref)if(li=!1,i.pendingProps=c=m,(n.lanes&h)!==0)(n.flags&131072)!==0&&(li=!0);else return i.lanes=n.lanes,pr(n,i,h)}return Pu(n,i,a,c,h)}function Vp(n,i,a){var c=i.pendingProps,h=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},en(Xs,vi),vi|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,en(Xs,vi),vi|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,en(Xs,vi),vi|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,en(Xs,vi),vi|=c;return Jn(n,i,h,a),i.child}function Gp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Pu(n,i,a,c,h){var m=oi(a)?os:Wn.current;return m=Os(i,m),Vs(i,h),a=Su(n,i,a,c,m,h),c=Mu(),n!==null&&!li?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,pr(n,i,h)):(on&&c&&ru(i),i.flags|=1,Jn(n,i,a,h),i.child)}function Wp(n,i,a,c,h){if(oi(a)){var m=!0;Go(i)}else m=!1;if(Vs(i,h),i.stateNode===null)ol(n,i),Dp(i,a,c),bu(i,a,c,h),c=!0;else if(n===null){var C=i.stateNode,k=i.memoizedProps;C.props=k;var X=C.context,pe=a.contextType;typeof pe=="object"&&pe!==null?pe=wi(pe):(pe=oi(a)?os:Wn.current,pe=Os(i,pe));var Re=a.getDerivedStateFromProps,De=typeof Re=="function"||typeof C.getSnapshotBeforeUpdate=="function";De||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(k!==c||X!==pe)&&Lp(i,C,c,pe),Fr=!1;var be=i.memoizedState;C.state=be,Qo(i,c,C,h),X=i.memoizedState,k!==c||be!==X||ai.current||Fr?(typeof Re=="function"&&(Cu(i,a,Re,c),X=i.memoizedState),(k=Fr||Pp(i,a,k,c,be,X,pe))?(De||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount()),typeof C.componentDidMount=="function"&&(i.flags|=4194308)):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=X),C.props=c,C.state=X,C.context=pe,c=k):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{C=i.stateNode,ap(n,i),k=i.memoizedProps,pe=i.type===i.elementType?k:Ii(i.type,k),C.props=pe,De=i.pendingProps,be=C.context,X=a.contextType,typeof X=="object"&&X!==null?X=wi(X):(X=oi(a)?os:Wn.current,X=Os(i,X));var Ye=a.getDerivedStateFromProps;(Re=typeof Ye=="function"||typeof C.getSnapshotBeforeUpdate=="function")||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(k!==De||be!==X)&&Lp(i,C,c,X),Fr=!1,be=i.memoizedState,C.state=be,Qo(i,c,C,h);var tt=i.memoizedState;k!==De||be!==tt||ai.current||Fr?(typeof Ye=="function"&&(Cu(i,a,Ye,c),tt=i.memoizedState),(pe=Fr||Pp(i,a,pe,c,be,tt,X)||!1)?(Re||typeof C.UNSAFE_componentWillUpdate!="function"&&typeof C.componentWillUpdate!="function"||(typeof C.componentWillUpdate=="function"&&C.componentWillUpdate(c,tt,X),typeof C.UNSAFE_componentWillUpdate=="function"&&C.UNSAFE_componentWillUpdate(c,tt,X)),typeof C.componentDidUpdate=="function"&&(i.flags|=4),typeof C.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof C.componentDidUpdate!="function"||k===n.memoizedProps&&be===n.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&be===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=tt),C.props=c,C.state=tt,C.context=X,c=pe):(typeof C.componentDidUpdate!="function"||k===n.memoizedProps&&be===n.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&be===n.memoizedState||(i.flags|=1024),c=!1)}return Du(n,i,a,c,m,h)}function Du(n,i,a,c,h,m){Gp(n,i);var C=(i.flags&128)!==0;if(!c&&!C)return h&&qf(i,a,!1),pr(n,i,m);c=i.stateNode,n_.current=i;var k=C&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&C?(i.child=zs(i,n.child,null,m),i.child=zs(i,null,k,m)):Jn(n,i,k,m),i.memoizedState=c.state,h&&qf(i,a,!0),i.child}function jp(n){var i=n.stateNode;i.pendingContext?Kf(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Kf(n,i.context,!1),mu(n,i.containerInfo)}function Xp(n,i,a,c,h){return Bs(),lu(h),i.flags|=256,Jn(n,i,a,c),i.child}var Lu={dehydrated:null,treeContext:null,retryLane:0};function Iu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Kp(n,i,a){var c=i.pendingProps,h=cn.current,m=!1,C=(i.flags&128)!==0,k;if((k=C)||(k=n!==null&&n.memoizedState===null?!1:(h&2)!==0),k?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),en(cn,h&1),n===null)return ou(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(C=c.children,n=c.fallback,m?(c=i.mode,m=i.child,C={mode:"hidden",children:C},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=C):m=xl(C,c,0,null),n=vs(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=Iu(a),i.memoizedState=Lu,n):Uu(i,C));if(h=n.memoizedState,h!==null&&(k=h.dehydrated,k!==null))return i_(n,i,C,c,k,h,a);if(m){m=c.fallback,C=i.mode,h=n.child,k=h.sibling;var X={mode:"hidden",children:c.children};return(C&1)===0&&i.child!==h?(c=i.child,c.childLanes=0,c.pendingProps=X,i.deletions=null):(c=Wr(h,X),c.subtreeFlags=h.subtreeFlags&14680064),k!==null?m=Wr(k,m):(m=vs(m,C,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,C=n.child.memoizedState,C=C===null?Iu(a):{baseLanes:C.baseLanes|a,cachePool:null,transitions:C.transitions},m.memoizedState=C,m.childLanes=n.childLanes&~a,i.memoizedState=Lu,c}return m=n.child,n=m.sibling,c=Wr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Uu(n,i){return i=xl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function al(n,i,a,c){return c!==null&&lu(c),zs(i,n.child,null,a),n=Uu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function i_(n,i,a,c,h,m,C){if(a)return i.flags&256?(i.flags&=-257,c=Ru(Error(t(422))),al(n,i,C,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,h=i.mode,c=xl({mode:"visible",children:c.children},h,0,null),m=vs(m,h,C,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&zs(i,n.child,null,C),i.child.memoizedState=Iu(C),i.memoizedState=Lu,m);if((i.mode&1)===0)return al(n,i,C,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var k=c.dgst;return c=k,m=Error(t(419)),c=Ru(m,c,void 0),al(n,i,C,c)}if(k=(C&n.childLanes)!==0,li||k){if(c=Un,c!==null){switch(C&-C){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|C))!==0?0:h,h!==0&&h!==m.retryLane&&(m.retryLane=h,dr(n,h),Fi(c,n,h,-1))}return Zu(),c=Ru(Error(t(421))),al(n,i,C,c)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=g_.bind(null,n),h._reactRetry=i,null):(n=m.treeContext,gi=Lr(h.nextSibling),mi=i,on=!0,Li=null,n!==null&&(Ti[Ei++]=ur,Ti[Ei++]=hr,Ti[Ei++]=ls,ur=n.id,hr=n.overflow,ls=i),i=Uu(i,c.children),i.flags|=4096,i)}function Yp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),du(n.return,i,a)}function Ou(n,i,a,c,h){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:h}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=h)}function qp(n,i,a){var c=i.pendingProps,h=c.revealOrder,m=c.tail;if(Jn(n,i,c.children,a),c=cn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Yp(n,a,i);else if(n.tag===19)Yp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(en(cn,c),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)n=a.alternate,n!==null&&Jo(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Ou(i,!1,h,a,m);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&Jo(n)===null){i.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}Ou(i,!0,a,null,m);break;case"together":Ou(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ol(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function pr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),fs|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Wr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Wr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function r_(n,i,a){switch(i.tag){case 3:jp(i),Bs();break;case 5:cp(i);break;case 1:oi(i.type)&&Go(i);break;case 4:mu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,h=i.memoizedProps.value;en(qo,c._currentValue),c._currentValue=h;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(en(cn,cn.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Kp(n,i,a):(en(cn,cn.current&1),n=pr(n,i,a),n!==null?n.sibling:null);en(cn,cn.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return qp(n,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),en(cn,cn.current),c)break;return null;case 22:case 23:return i.lanes=0,Vp(n,i,a)}return pr(n,i,a)}var $p,Fu,Zp,Qp;$p=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Fu=function(){},Zp=function(n,i,a,c){var h=n.memoizedProps;if(h!==c){n=i.stateNode,hs($i.current);var m=null;switch(a){case"input":h=_t(n,h),c=_t(n,c),m=[];break;case"select":h=ee({},h,{value:void 0}),c=ee({},c,{value:void 0}),m=[];break;case"textarea":h=fe(n,h),c=fe(n,c),m=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=zo)}Me(a,c);var C;a=null;for(pe in h)if(!c.hasOwnProperty(pe)&&h.hasOwnProperty(pe)&&h[pe]!=null)if(pe==="style"){var k=h[pe];for(C in k)k.hasOwnProperty(C)&&(a||(a={}),a[C]="")}else pe!=="dangerouslySetInnerHTML"&&pe!=="children"&&pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&pe!=="autoFocus"&&(o.hasOwnProperty(pe)?m||(m=[]):(m=m||[]).push(pe,null));for(pe in c){var X=c[pe];if(k=h!=null?h[pe]:void 0,c.hasOwnProperty(pe)&&X!==k&&(X!=null||k!=null))if(pe==="style")if(k){for(C in k)!k.hasOwnProperty(C)||X&&X.hasOwnProperty(C)||(a||(a={}),a[C]="");for(C in X)X.hasOwnProperty(C)&&k[C]!==X[C]&&(a||(a={}),a[C]=X[C])}else a||(m||(m=[]),m.push(pe,a)),a=X;else pe==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,k=k?k.__html:void 0,X!=null&&k!==X&&(m=m||[]).push(pe,X)):pe==="children"?typeof X!="string"&&typeof X!="number"||(m=m||[]).push(pe,""+X):pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&(o.hasOwnProperty(pe)?(X!=null&&pe==="onScroll"&&rn("scroll",n),m||k===X||(m=[])):(m=m||[]).push(pe,X))}a&&(m=m||[]).push("style",a);var pe=m;(i.updateQueue=pe)&&(i.flags|=4)}},Qp=function(n,i,a,c){a!==c&&(i.flags|=4)};function Ka(n,i){if(!on)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Xn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function s_(n,i,a){var c=i.pendingProps;switch(su(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xn(i),null;case 1:return oi(i.type)&&Vo(),Xn(i),null;case 3:return c=i.stateNode,Gs(),sn(ai),sn(Wn),_u(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ko(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Li!==null&&(Yu(Li),Li=null))),Fu(n,i),Xn(i),null;case 5:gu(i);var h=hs(Va.current);if(a=i.type,n!==null&&i.stateNode!=null)Zp(n,i,a,c,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Xn(i),null}if(n=hs($i.current),Ko(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[qi]=i,c[Fa]=m,n=(i.mode&1)!==0,a){case"dialog":rn("cancel",c),rn("close",c);break;case"iframe":case"object":case"embed":rn("load",c);break;case"video":case"audio":for(h=0;h<Ia.length;h++)rn(Ia[h],c);break;case"source":rn("error",c);break;case"img":case"image":case"link":rn("error",c),rn("load",c);break;case"details":rn("toggle",c);break;case"input":tn(c,m),rn("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},rn("invalid",c);break;case"textarea":ze(c,m),rn("invalid",c)}Me(a,m),h=null;for(var C in m)if(m.hasOwnProperty(C)){var k=m[C];C==="children"?typeof k=="string"?c.textContent!==k&&(m.suppressHydrationWarning!==!0&&Bo(c.textContent,k,n),h=["children",k]):typeof k=="number"&&c.textContent!==""+k&&(m.suppressHydrationWarning!==!0&&Bo(c.textContent,k,n),h=["children",""+k]):o.hasOwnProperty(C)&&k!=null&&C==="onScroll"&&rn("scroll",c)}switch(a){case"input":at(c),It(c,m,!0);break;case"textarea":at(c),it(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=zo)}c=h,i.updateQueue=c,c!==null&&(i.flags|=4)}else{C=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ut(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=C.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=C.createElement(a,{is:c.is}):(n=C.createElement(a),a==="select"&&(C=n,c.multiple?C.multiple=!0:c.size&&(C.size=c.size))):n=C.createElementNS(n,a),n[qi]=i,n[Fa]=c,$p(n,i,!1,!1),i.stateNode=n;e:{switch(C=Pe(a,c),a){case"dialog":rn("cancel",n),rn("close",n),h=c;break;case"iframe":case"object":case"embed":rn("load",n),h=c;break;case"video":case"audio":for(h=0;h<Ia.length;h++)rn(Ia[h],n);h=c;break;case"source":rn("error",n),h=c;break;case"img":case"image":case"link":rn("error",n),rn("load",n),h=c;break;case"details":rn("toggle",n),h=c;break;case"input":tn(n,c),h=_t(n,c),rn("invalid",n);break;case"option":h=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},h=ee({},c,{value:void 0}),rn("invalid",n);break;case"textarea":ze(n,c),h=fe(n,c),rn("invalid",n);break;default:h=c}Me(a,h),k=h;for(m in k)if(k.hasOwnProperty(m)){var X=k[m];m==="style"?K(n,X):m==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,X!=null&&xt(n,X)):m==="children"?typeof X=="string"?(a!=="textarea"||X!=="")&&Te(n,X):typeof X=="number"&&Te(n,""+X):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?X!=null&&m==="onScroll"&&rn("scroll",n):X!=null&&F(n,m,X,C))}switch(a){case"input":at(n),It(n,c,!1);break;case"textarea":at(n),it(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Ee(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?$t(n,!!c.multiple,m,!1):c.defaultValue!=null&&$t(n,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=zo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Xn(i),null;case 6:if(n&&i.stateNode!=null)Qp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=hs(Va.current),hs($i.current),Ko(i)){if(c=i.stateNode,a=i.memoizedProps,c[qi]=i,(m=c.nodeValue!==a)&&(n=mi,n!==null))switch(n.tag){case 3:Bo(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Bo(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[qi]=i,i.stateNode=c}return Xn(i),null;case 13:if(sn(cn),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(on&&gi!==null&&(i.mode&1)!==0&&(i.flags&128)===0)tp(),Bs(),i.flags|=98560,m=!1;else if(m=Ko(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[qi]=i}else Bs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Xn(i),m=!1}else Li!==null&&(Yu(Li),Li=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(cn.current&1)!==0?An===0&&(An=3):Zu())),i.updateQueue!==null&&(i.flags|=4),Xn(i),null);case 4:return Gs(),Fu(n,i),n===null&&Ua(i.stateNode.containerInfo),Xn(i),null;case 10:return hu(i.type._context),Xn(i),null;case 17:return oi(i.type)&&Vo(),Xn(i),null;case 19:if(sn(cn),m=i.memoizedState,m===null)return Xn(i),null;if(c=(i.flags&128)!==0,C=m.rendering,C===null)if(c)Ka(m,!1);else{if(An!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(C=Jo(n),C!==null){for(i.flags|=128,Ka(m,!1),c=C.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,C=m.alternate,C===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=C.childLanes,m.lanes=C.lanes,m.child=C.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=C.memoizedProps,m.memoizedState=C.memoizedState,m.updateQueue=C.updateQueue,m.type=C.type,n=C.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return en(cn,cn.current&1|2),i.child}n=n.sibling}m.tail!==null&&Ut()>Ks&&(i.flags|=128,c=!0,Ka(m,!1),i.lanes=4194304)}else{if(!c)if(n=Jo(C),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ka(m,!0),m.tail===null&&m.tailMode==="hidden"&&!C.alternate&&!on)return Xn(i),null}else 2*Ut()-m.renderingStartTime>Ks&&a!==1073741824&&(i.flags|=128,c=!0,Ka(m,!1),i.lanes=4194304);m.isBackwards?(C.sibling=i.child,i.child=C):(a=m.last,a!==null?a.sibling=C:i.child=C,m.last=C)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Ut(),i.sibling=null,a=cn.current,en(cn,c?a&1|2:a&1),i):(Xn(i),null);case 22:case 23:return $u(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(vi&1073741824)!==0&&(Xn(i),i.subtreeFlags&6&&(i.flags|=8192)):Xn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function a_(n,i){switch(su(i),i.tag){case 1:return oi(i.type)&&Vo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Gs(),sn(ai),sn(Wn),_u(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return gu(i),null;case 13:if(sn(cn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Bs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return sn(cn),null;case 4:return Gs(),null;case 10:return hu(i.type._context),null;case 22:case 23:return $u(),null;case 24:return null;default:return null}}var ll=!1,Kn=!1,o_=typeof WeakSet=="function"?WeakSet:Set,$e=null;function js(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){pn(n,i,c)}else a.current=null}function ku(n,i,a){try{a()}catch(c){pn(n,i,c)}}var Jp=!1;function l_(n,i){if($c=bo,n=Pf(),Vc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var h=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var C=0,k=-1,X=-1,pe=0,Re=0,De=n,be=null;t:for(;;){for(var Ye;De!==a||h!==0&&De.nodeType!==3||(k=C+h),De!==m||c!==0&&De.nodeType!==3||(X=C+c),De.nodeType===3&&(C+=De.nodeValue.length),(Ye=De.firstChild)!==null;)be=De,De=Ye;for(;;){if(De===n)break t;if(be===a&&++pe===h&&(k=C),be===m&&++Re===c&&(X=C),(Ye=De.nextSibling)!==null)break;De=be,be=De.parentNode}De=Ye}a=k===-1||X===-1?null:{start:k,end:X}}else a=null}a=a||{start:0,end:0}}else a=null;for(Zc={focusedElem:n,selectionRange:a},bo=!1,$e=i;$e!==null;)if(i=$e,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,$e=n;else for(;$e!==null;){i=$e;try{var tt=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(tt!==null){var nt=tt.memoizedProps,gn=tt.memoizedState,oe=i.stateNode,Z=oe.getSnapshotBeforeUpdate(i.elementType===i.type?nt:Ii(i.type,nt),gn);oe.__reactInternalSnapshotBeforeUpdate=Z}break;case 3:var de=i.stateNode.containerInfo;de.nodeType===1?de.textContent="":de.nodeType===9&&de.documentElement&&de.removeChild(de.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Oe){pn(i,i.return,Oe)}if(n=i.sibling,n!==null){n.return=i.return,$e=n;break}$e=i.return}return tt=Jp,Jp=!1,tt}function Ya(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&n)===n){var m=h.destroy;h.destroy=void 0,m!==void 0&&ku(i,a,m)}h=h.next}while(h!==c)}}function cl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Bu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function em(n){var i=n.alternate;i!==null&&(n.alternate=null,em(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[qi],delete i[Fa],delete i[tu],delete i[Wv],delete i[jv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function tm(n){return n.tag===5||n.tag===3||n.tag===4}function nm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||tm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function zu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=zo));else if(c!==4&&(n=n.child,n!==null))for(zu(n,i,a),n=n.sibling;n!==null;)zu(n,i,a),n=n.sibling}function Hu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Hu(n,i,a),n=n.sibling;n!==null;)Hu(n,i,a),n=n.sibling}var Bn=null,Ui=!1;function Br(n,i,a){for(a=a.child;a!==null;)im(n,i,a),a=a.sibling}function im(n,i,a){if(he&&typeof he.onCommitFiberUnmount=="function")try{he.onCommitFiberUnmount(j,a)}catch{}switch(a.tag){case 5:Kn||js(a,i);case 6:var c=Bn,h=Ui;Bn=null,Br(n,i,a),Bn=c,Ui=h,Bn!==null&&(Ui?(n=Bn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Bn.removeChild(a.stateNode));break;case 18:Bn!==null&&(Ui?(n=Bn,a=a.stateNode,n.nodeType===8?eu(n.parentNode,a):n.nodeType===1&&eu(n,a),Aa(n)):eu(Bn,a.stateNode));break;case 4:c=Bn,h=Ui,Bn=a.stateNode.containerInfo,Ui=!0,Br(n,i,a),Bn=c,Ui=h;break;case 0:case 11:case 14:case 15:if(!Kn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var m=h,C=m.destroy;m=m.tag,C!==void 0&&((m&2)!==0||(m&4)!==0)&&ku(a,i,C),h=h.next}while(h!==c)}Br(n,i,a);break;case 1:if(!Kn&&(js(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(k){pn(a,i,k)}Br(n,i,a);break;case 21:Br(n,i,a);break;case 22:a.mode&1?(Kn=(c=Kn)||a.memoizedState!==null,Br(n,i,a),Kn=c):Br(n,i,a);break;default:Br(n,i,a)}}function rm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new o_),i.forEach(function(c){var h=v_.bind(null,n,c);a.has(c)||(a.add(c),c.then(h,h))})}}function Oi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var h=a[c];try{var m=n,C=i,k=C;e:for(;k!==null;){switch(k.tag){case 5:Bn=k.stateNode,Ui=!1;break e;case 3:Bn=k.stateNode.containerInfo,Ui=!0;break e;case 4:Bn=k.stateNode.containerInfo,Ui=!0;break e}k=k.return}if(Bn===null)throw Error(t(160));im(m,C,h),Bn=null,Ui=!1;var X=h.alternate;X!==null&&(X.return=null),h.return=null}catch(pe){pn(h,i,pe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)sm(i,n),i=i.sibling}function sm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Oi(i,n),Qi(n),c&4){try{Ya(3,n,n.return),cl(3,n)}catch(nt){pn(n,n.return,nt)}try{Ya(5,n,n.return)}catch(nt){pn(n,n.return,nt)}}break;case 1:Oi(i,n),Qi(n),c&512&&a!==null&&js(a,a.return);break;case 5:if(Oi(i,n),Qi(n),c&512&&a!==null&&js(a,a.return),n.flags&32){var h=n.stateNode;try{Te(h,"")}catch(nt){pn(n,n.return,nt)}}if(c&4&&(h=n.stateNode,h!=null)){var m=n.memoizedProps,C=a!==null?a.memoizedProps:m,k=n.type,X=n.updateQueue;if(n.updateQueue=null,X!==null)try{k==="input"&&m.type==="radio"&&m.name!=null&&Xt(h,m),Pe(k,C);var pe=Pe(k,m);for(C=0;C<X.length;C+=2){var Re=X[C],De=X[C+1];Re==="style"?K(h,De):Re==="dangerouslySetInnerHTML"?xt(h,De):Re==="children"?Te(h,De):F(h,Re,De,pe)}switch(k){case"input":ln(h,m);break;case"textarea":H(h,m);break;case"select":var be=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!m.multiple;var Ye=m.value;Ye!=null?$t(h,!!m.multiple,Ye,!1):be!==!!m.multiple&&(m.defaultValue!=null?$t(h,!!m.multiple,m.defaultValue,!0):$t(h,!!m.multiple,m.multiple?[]:"",!1))}h[Fa]=m}catch(nt){pn(n,n.return,nt)}}break;case 6:if(Oi(i,n),Qi(n),c&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,m=n.memoizedProps;try{h.nodeValue=m}catch(nt){pn(n,n.return,nt)}}break;case 3:if(Oi(i,n),Qi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Aa(i.containerInfo)}catch(nt){pn(n,n.return,nt)}break;case 4:Oi(i,n),Qi(n);break;case 13:Oi(i,n),Qi(n),h=n.child,h.flags&8192&&(m=h.memoizedState!==null,h.stateNode.isHidden=m,!m||h.alternate!==null&&h.alternate.memoizedState!==null||(Wu=Ut())),c&4&&rm(n);break;case 22:if(Re=a!==null&&a.memoizedState!==null,n.mode&1?(Kn=(pe=Kn)||Re,Oi(i,n),Kn=pe):Oi(i,n),Qi(n),c&8192){if(pe=n.memoizedState!==null,(n.stateNode.isHidden=pe)&&!Re&&(n.mode&1)!==0)for($e=n,Re=n.child;Re!==null;){for(De=$e=Re;$e!==null;){switch(be=$e,Ye=be.child,be.tag){case 0:case 11:case 14:case 15:Ya(4,be,be.return);break;case 1:js(be,be.return);var tt=be.stateNode;if(typeof tt.componentWillUnmount=="function"){c=be,a=be.return;try{i=c,tt.props=i.memoizedProps,tt.state=i.memoizedState,tt.componentWillUnmount()}catch(nt){pn(c,a,nt)}}break;case 5:js(be,be.return);break;case 22:if(be.memoizedState!==null){lm(De);continue}}Ye!==null?(Ye.return=be,$e=Ye):lm(De)}Re=Re.sibling}e:for(Re=null,De=n;;){if(De.tag===5){if(Re===null){Re=De;try{h=De.stateNode,pe?(m=h.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(k=De.stateNode,X=De.memoizedProps.style,C=X!=null&&X.hasOwnProperty("display")?X.display:null,k.style.display=b("display",C))}catch(nt){pn(n,n.return,nt)}}}else if(De.tag===6){if(Re===null)try{De.stateNode.nodeValue=pe?"":De.memoizedProps}catch(nt){pn(n,n.return,nt)}}else if((De.tag!==22&&De.tag!==23||De.memoizedState===null||De===n)&&De.child!==null){De.child.return=De,De=De.child;continue}if(De===n)break e;for(;De.sibling===null;){if(De.return===null||De.return===n)break e;Re===De&&(Re=null),De=De.return}Re===De&&(Re=null),De.sibling.return=De.return,De=De.sibling}}break;case 19:Oi(i,n),Qi(n),c&4&&rm(n);break;case 21:break;default:Oi(i,n),Qi(n)}}function Qi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(tm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(Te(h,""),c.flags&=-33);var m=nm(n);Hu(n,m,h);break;case 3:case 4:var C=c.stateNode.containerInfo,k=nm(n);zu(n,k,C);break;default:throw Error(t(161))}}catch(X){pn(n,n.return,X)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function c_(n,i,a){$e=n,am(n)}function am(n,i,a){for(var c=(n.mode&1)!==0;$e!==null;){var h=$e,m=h.child;if(h.tag===22&&c){var C=h.memoizedState!==null||ll;if(!C){var k=h.alternate,X=k!==null&&k.memoizedState!==null||Kn;k=ll;var pe=Kn;if(ll=C,(Kn=X)&&!pe)for($e=h;$e!==null;)C=$e,X=C.child,C.tag===22&&C.memoizedState!==null?cm(h):X!==null?(X.return=C,$e=X):cm(h);for(;m!==null;)$e=m,am(m),m=m.sibling;$e=h,ll=k,Kn=pe}om(n)}else(h.subtreeFlags&8772)!==0&&m!==null?(m.return=h,$e=m):om(n)}}function om(n){for(;$e!==null;){var i=$e;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Kn||cl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Kn)if(a===null)c.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:Ii(i.type,a.memoizedProps);c.componentDidUpdate(h,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&lp(i,m,c);break;case 3:var C=i.updateQueue;if(C!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}lp(i,C,a)}break;case 5:var k=i.stateNode;if(a===null&&i.flags&4){a=k;var X=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":X.autoFocus&&a.focus();break;case"img":X.src&&(a.src=X.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var pe=i.alternate;if(pe!==null){var Re=pe.memoizedState;if(Re!==null){var De=Re.dehydrated;De!==null&&Aa(De)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Kn||i.flags&512&&Bu(i)}catch(be){pn(i,i.return,be)}}if(i===n){$e=null;break}if(a=i.sibling,a!==null){a.return=i.return,$e=a;break}$e=i.return}}function lm(n){for(;$e!==null;){var i=$e;if(i===n){$e=null;break}var a=i.sibling;if(a!==null){a.return=i.return,$e=a;break}$e=i.return}}function cm(n){for(;$e!==null;){var i=$e;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{cl(4,i)}catch(X){pn(i,a,X)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var h=i.return;try{c.componentDidMount()}catch(X){pn(i,h,X)}}var m=i.return;try{Bu(i)}catch(X){pn(i,m,X)}break;case 5:var C=i.return;try{Bu(i)}catch(X){pn(i,C,X)}}}catch(X){pn(i,i.return,X)}if(i===n){$e=null;break}var k=i.sibling;if(k!==null){k.return=i.return,$e=k;break}$e=i.return}}var u_=Math.ceil,ul=P.ReactCurrentDispatcher,Vu=P.ReactCurrentOwner,Ci=P.ReactCurrentBatchConfig,Ot=0,Un=null,xn=null,zn=0,vi=0,Xs=Ir(0),An=0,qa=null,fs=0,hl=0,Gu=0,$a=null,ci=null,Wu=0,Ks=1/0,mr=null,dl=!1,ju=null,zr=null,fl=!1,Hr=null,pl=0,Za=0,Xu=null,ml=-1,gl=0;function ei(){return(Ot&6)!==0?Ut():ml!==-1?ml:ml=Ut()}function Vr(n){return(n.mode&1)===0?1:(Ot&2)!==0&&zn!==0?zn&-zn:Kv.transition!==null?(gl===0&&(gl=Kt()),gl):(n=rt,n!==0||(n=window.event,n=n===void 0?16:hf(n.type)),n)}function Fi(n,i,a,c){if(50<Za)throw Za=0,Xu=null,Error(t(185));fn(n,a,c),((Ot&2)===0||n!==Un)&&(n===Un&&((Ot&2)===0&&(hl|=a),An===4&&Gr(n,zn)),ui(n,c),a===1&&Ot===0&&(i.mode&1)===0&&(Ks=Ut()+500,Wo&&Or()))}function ui(n,i){var a=n.callbackNode;bt(n,i);var c=Mt(n,n===Un?zn:0);if(c===0)a!==null&&nn(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&nn(a),i===1)n.tag===0?Xv(hm.bind(null,n)):$f(hm.bind(null,n)),Vv(function(){(Ot&6)===0&&Or()}),a=null;else{switch(Ki(c)){case 1:a=Vn;break;case 4:a=Cr;break;case 16:a=Xi;break;case 536870912:a=N;break;default:a=Xi}a=xm(a,um.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function um(n,i){if(ml=-1,gl=0,(Ot&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Ys()&&n.callbackNode!==a)return null;var c=Mt(n,n===Un?zn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=vl(n,c);else{i=c;var h=Ot;Ot|=2;var m=fm();(Un!==n||zn!==i)&&(mr=null,Ks=Ut()+500,ms(n,i));do try{f_();break}catch(k){dm(n,k)}while(!0);uu(),ul.current=m,Ot=h,xn!==null?i=0:(Un=null,zn=0,i=An)}if(i!==0){if(i===2&&(h=an(n),h!==0&&(c=h,i=Ku(n,h))),i===1)throw a=qa,ms(n,0),Gr(n,c),ui(n,Ut()),a;if(i===6)Gr(n,c);else{if(h=n.current.alternate,(c&30)===0&&!h_(h)&&(i=vl(n,c),i===2&&(m=an(n),m!==0&&(c=m,i=Ku(n,m))),i===1))throw a=qa,ms(n,0),Gr(n,c),ui(n,Ut()),a;switch(n.finishedWork=h,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:gs(n,ci,mr);break;case 3:if(Gr(n,c),(c&130023424)===c&&(i=Wu+500-Ut(),10<i)){if(Mt(n,0)!==0)break;if(h=n.suspendedLanes,(h&c)!==c){ei(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=Jc(gs.bind(null,n,ci,mr),i);break}gs(n,ci,mr);break;case 4:if(Gr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,h=-1;0<c;){var C=31-re(c);m=1<<C,C=i[C],C>h&&(h=C),c&=~m}if(c=h,c=Ut()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*u_(c/1960))-c,10<c){n.timeoutHandle=Jc(gs.bind(null,n,ci,mr),c);break}gs(n,ci,mr);break;case 5:gs(n,ci,mr);break;default:throw Error(t(329))}}}return ui(n,Ut()),n.callbackNode===a?um.bind(null,n):null}function Ku(n,i){var a=$a;return n.current.memoizedState.isDehydrated&&(ms(n,i).flags|=256),n=vl(n,i),n!==2&&(i=ci,ci=a,i!==null&&Yu(i)),n}function Yu(n){ci===null?ci=n:ci.push.apply(ci,n)}function h_(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var h=a[c],m=h.getSnapshot;h=h.value;try{if(!Di(m(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Gr(n,i){for(i&=~Gu,i&=~hl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-re(i),c=1<<a;n[a]=-1,i&=~c}}function hm(n){if((Ot&6)!==0)throw Error(t(327));Ys();var i=Mt(n,0);if((i&1)===0)return ui(n,Ut()),null;var a=vl(n,i);if(n.tag!==0&&a===2){var c=an(n);c!==0&&(i=c,a=Ku(n,c))}if(a===1)throw a=qa,ms(n,0),Gr(n,i),ui(n,Ut()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,gs(n,ci,mr),ui(n,Ut()),null}function qu(n,i){var a=Ot;Ot|=1;try{return n(i)}finally{Ot=a,Ot===0&&(Ks=Ut()+500,Wo&&Or())}}function ps(n){Hr!==null&&Hr.tag===0&&(Ot&6)===0&&Ys();var i=Ot;Ot|=1;var a=Ci.transition,c=rt;try{if(Ci.transition=null,rt=1,n)return n()}finally{rt=c,Ci.transition=a,Ot=i,(Ot&6)===0&&Or()}}function $u(){vi=Xs.current,sn(Xs)}function ms(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Hv(a)),xn!==null)for(a=xn.return;a!==null;){var c=a;switch(su(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Vo();break;case 3:Gs(),sn(ai),sn(Wn),_u();break;case 5:gu(c);break;case 4:Gs();break;case 13:sn(cn);break;case 19:sn(cn);break;case 10:hu(c.type._context);break;case 22:case 23:$u()}a=a.return}if(Un=n,xn=n=Wr(n.current,null),zn=vi=i,An=0,qa=null,Gu=hl=fs=0,ci=$a=null,us!==null){for(i=0;i<us.length;i++)if(a=us[i],c=a.interleaved,c!==null){a.interleaved=null;var h=c.next,m=a.pending;if(m!==null){var C=m.next;m.next=h,c.next=C}a.pending=c}us=null}return n}function dm(n,i){do{var a=xn;try{if(uu(),el.current=rl,tl){for(var c=un.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}tl=!1}if(ds=0,In=wn=un=null,Ga=!1,Wa=0,Vu.current=null,a===null||a.return===null){An=1,qa=i,xn=null;break}e:{var m=n,C=a.return,k=a,X=i;if(i=zn,k.flags|=32768,X!==null&&typeof X=="object"&&typeof X.then=="function"){var pe=X,Re=k,De=Re.tag;if((Re.mode&1)===0&&(De===0||De===11||De===15)){var be=Re.alternate;be?(Re.updateQueue=be.updateQueue,Re.memoizedState=be.memoizedState,Re.lanes=be.lanes):(Re.updateQueue=null,Re.memoizedState=null)}var Ye=Fp(C);if(Ye!==null){Ye.flags&=-257,kp(Ye,C,k,m,i),Ye.mode&1&&Op(m,pe,i),i=Ye,X=pe;var tt=i.updateQueue;if(tt===null){var nt=new Set;nt.add(X),i.updateQueue=nt}else tt.add(X);break e}else{if((i&1)===0){Op(m,pe,i),Zu();break e}X=Error(t(426))}}else if(on&&k.mode&1){var gn=Fp(C);if(gn!==null){(gn.flags&65536)===0&&(gn.flags|=256),kp(gn,C,k,m,i),lu(Ws(X,k));break e}}m=X=Ws(X,k),An!==4&&(An=2),$a===null?$a=[m]:$a.push(m),m=C;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var oe=Ip(m,X,i);op(m,oe);break e;case 1:k=X;var Z=m.type,de=m.stateNode;if((m.flags&128)===0&&(typeof Z.getDerivedStateFromError=="function"||de!==null&&typeof de.componentDidCatch=="function"&&(zr===null||!zr.has(de)))){m.flags|=65536,i&=-i,m.lanes|=i;var Oe=Up(m,k,i);op(m,Oe);break e}}m=m.return}while(m!==null)}mm(a)}catch(ot){i=ot,xn===a&&a!==null&&(xn=a=a.return);continue}break}while(!0)}function fm(){var n=ul.current;return ul.current=rl,n===null?rl:n}function Zu(){(An===0||An===3||An===2)&&(An=4),Un===null||(fs&268435455)===0&&(hl&268435455)===0||Gr(Un,zn)}function vl(n,i){var a=Ot;Ot|=2;var c=fm();(Un!==n||zn!==i)&&(mr=null,ms(n,i));do try{d_();break}catch(h){dm(n,h)}while(!0);if(uu(),Ot=a,ul.current=c,xn!==null)throw Error(t(261));return Un=null,zn=0,An}function d_(){for(;xn!==null;)pm(xn)}function f_(){for(;xn!==null&&!si();)pm(xn)}function pm(n){var i=_m(n.alternate,n,vi);n.memoizedProps=n.pendingProps,i===null?mm(n):xn=i,Vu.current=null}function mm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=s_(a,i,vi),a!==null){xn=a;return}}else{if(a=a_(a,i),a!==null){a.flags&=32767,xn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{An=6,xn=null;return}}if(i=i.sibling,i!==null){xn=i;return}xn=i=n}while(i!==null);An===0&&(An=5)}function gs(n,i,a){var c=rt,h=Ci.transition;try{Ci.transition=null,rt=1,p_(n,i,a,c)}finally{Ci.transition=h,rt=c}return null}function p_(n,i,a,c){do Ys();while(Hr!==null);if((Ot&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(et(n,m),n===Un&&(xn=Un=null,zn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||fl||(fl=!0,xm(Xi,function(){return Ys(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Ci.transition,Ci.transition=null;var C=rt;rt=1;var k=Ot;Ot|=4,Vu.current=null,l_(n,a),sm(a,n),Iv(Zc),bo=!!$c,Zc=$c=null,n.current=a,c_(a),Mi(),Ot=k,rt=C,Ci.transition=m}else n.current=a;if(fl&&(fl=!1,Hr=n,pl=h),m=n.pendingLanes,m===0&&(zr=null),ae(a.stateNode),ui(n,Ut()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)h=i[a],c(h.value,{componentStack:h.stack,digest:h.digest});if(dl)throw dl=!1,n=ju,ju=null,n;return(pl&1)!==0&&n.tag!==0&&Ys(),m=n.pendingLanes,(m&1)!==0?n===Xu?Za++:(Za=0,Xu=n):Za=0,Or(),null}function Ys(){if(Hr!==null){var n=Ki(pl),i=Ci.transition,a=rt;try{if(Ci.transition=null,rt=16>n?16:n,Hr===null)var c=!1;else{if(n=Hr,Hr=null,pl=0,(Ot&6)!==0)throw Error(t(331));var h=Ot;for(Ot|=4,$e=n.current;$e!==null;){var m=$e,C=m.child;if(($e.flags&16)!==0){var k=m.deletions;if(k!==null){for(var X=0;X<k.length;X++){var pe=k[X];for($e=pe;$e!==null;){var Re=$e;switch(Re.tag){case 0:case 11:case 15:Ya(8,Re,m)}var De=Re.child;if(De!==null)De.return=Re,$e=De;else for(;$e!==null;){Re=$e;var be=Re.sibling,Ye=Re.return;if(em(Re),Re===pe){$e=null;break}if(be!==null){be.return=Ye,$e=be;break}$e=Ye}}}var tt=m.alternate;if(tt!==null){var nt=tt.child;if(nt!==null){tt.child=null;do{var gn=nt.sibling;nt.sibling=null,nt=gn}while(nt!==null)}}$e=m}}if((m.subtreeFlags&2064)!==0&&C!==null)C.return=m,$e=C;else e:for(;$e!==null;){if(m=$e,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Ya(9,m,m.return)}var oe=m.sibling;if(oe!==null){oe.return=m.return,$e=oe;break e}$e=m.return}}var Z=n.current;for($e=Z;$e!==null;){C=$e;var de=C.child;if((C.subtreeFlags&2064)!==0&&de!==null)de.return=C,$e=de;else e:for(C=Z;$e!==null;){if(k=$e,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:cl(9,k)}}catch(ot){pn(k,k.return,ot)}if(k===C){$e=null;break e}var Oe=k.sibling;if(Oe!==null){Oe.return=k.return,$e=Oe;break e}$e=k.return}}if(Ot=h,Or(),he&&typeof he.onPostCommitFiberRoot=="function")try{he.onPostCommitFiberRoot(j,n)}catch{}c=!0}return c}finally{rt=a,Ci.transition=i}}return!1}function gm(n,i,a){i=Ws(a,i),i=Ip(n,i,1),n=kr(n,i,1),i=ei(),n!==null&&(fn(n,1,i),ui(n,i))}function pn(n,i,a){if(n.tag===3)gm(n,n,a);else for(;i!==null;){if(i.tag===3){gm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(zr===null||!zr.has(c))){n=Ws(a,n),n=Up(i,n,1),i=kr(i,n,1),n=ei(),i!==null&&(fn(i,1,n),ui(i,n));break}}i=i.return}}function m_(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=ei(),n.pingedLanes|=n.suspendedLanes&a,Un===n&&(zn&a)===a&&(An===4||An===3&&(zn&130023424)===zn&&500>Ut()-Wu?ms(n,0):Gu|=a),ui(n,i)}function vm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Qe,Qe<<=1,(Qe&130023424)===0&&(Qe=4194304)));var a=ei();n=dr(n,i),n!==null&&(fn(n,i,a),ui(n,a))}function g_(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),vm(n,a)}function v_(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),vm(n,a)}var _m;_m=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||ai.current)li=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return li=!1,r_(n,i,a);li=(n.flags&131072)!==0}else li=!1,on&&(i.flags&1048576)!==0&&Zf(i,Xo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;ol(n,i),n=i.pendingProps;var h=Os(i,Wn.current);Vs(i,a),h=Su(null,i,c,n,h,a);var m=Mu();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,oi(c)?(m=!0,Go(i)):m=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,pu(i),h.updater=sl,i.stateNode=h,h._reactInternals=i,bu(i,c,n,a),i=Du(null,i,c,!0,m,a)):(i.tag=0,on&&m&&ru(i),Jn(null,i,h,a),i=i.child),i;case 16:c=i.elementType;e:{switch(ol(n,i),n=i.pendingProps,h=c._init,c=h(c._payload),i.type=c,h=i.tag=x_(c),n=Ii(c,n),h){case 0:i=Pu(null,i,c,n,a);break e;case 1:i=Wp(null,i,c,n,a);break e;case 11:i=Bp(null,i,c,n,a);break e;case 14:i=zp(null,i,c,Ii(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Ii(c,h),Pu(n,i,c,h,a);case 1:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Ii(c,h),Wp(n,i,c,h,a);case 3:e:{if(jp(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,h=m.element,ap(n,i),Qo(i,c,null,a);var C=i.memoizedState;if(c=C.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:C.cache,pendingSuspenseBoundaries:C.pendingSuspenseBoundaries,transitions:C.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){h=Ws(Error(t(423)),i),i=Xp(n,i,c,a,h);break e}else if(c!==h){h=Ws(Error(t(424)),i),i=Xp(n,i,c,a,h);break e}else for(gi=Lr(i.stateNode.containerInfo.firstChild),mi=i,on=!0,Li=null,a=rp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Bs(),c===h){i=pr(n,i,a);break e}Jn(n,i,c,a)}i=i.child}return i;case 5:return cp(i),n===null&&ou(i),c=i.type,h=i.pendingProps,m=n!==null?n.memoizedProps:null,C=h.children,Qc(c,h)?C=null:m!==null&&Qc(c,m)&&(i.flags|=32),Gp(n,i),Jn(n,i,C,a),i.child;case 6:return n===null&&ou(i),null;case 13:return Kp(n,i,a);case 4:return mu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=zs(i,null,c,a):Jn(n,i,c,a),i.child;case 11:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Ii(c,h),Bp(n,i,c,h,a);case 7:return Jn(n,i,i.pendingProps,a),i.child;case 8:return Jn(n,i,i.pendingProps.children,a),i.child;case 12:return Jn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,h=i.pendingProps,m=i.memoizedProps,C=h.value,en(qo,c._currentValue),c._currentValue=C,m!==null)if(Di(m.value,C)){if(m.children===h.children&&!ai.current){i=pr(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var k=m.dependencies;if(k!==null){C=m.child;for(var X=k.firstContext;X!==null;){if(X.context===c){if(m.tag===1){X=fr(-1,a&-a),X.tag=2;var pe=m.updateQueue;if(pe!==null){pe=pe.shared;var Re=pe.pending;Re===null?X.next=X:(X.next=Re.next,Re.next=X),pe.pending=X}}m.lanes|=a,X=m.alternate,X!==null&&(X.lanes|=a),du(m.return,a,i),k.lanes|=a;break}X=X.next}}else if(m.tag===10)C=m.type===i.type?null:m.child;else if(m.tag===18){if(C=m.return,C===null)throw Error(t(341));C.lanes|=a,k=C.alternate,k!==null&&(k.lanes|=a),du(C,a,i),C=m.sibling}else C=m.child;if(C!==null)C.return=m;else for(C=m;C!==null;){if(C===i){C=null;break}if(m=C.sibling,m!==null){m.return=C.return,C=m;break}C=C.return}m=C}Jn(n,i,h.children,a),i=i.child}return i;case 9:return h=i.type,c=i.pendingProps.children,Vs(i,a),h=wi(h),c=c(h),i.flags|=1,Jn(n,i,c,a),i.child;case 14:return c=i.type,h=Ii(c,i.pendingProps),h=Ii(c.type,h),zp(n,i,c,h,a);case 15:return Hp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Ii(c,h),ol(n,i),i.tag=1,oi(c)?(n=!0,Go(i)):n=!1,Vs(i,a),Dp(i,c,h),bu(i,c,h,a),Du(null,i,c,!0,n,a);case 19:return qp(n,i,a);case 22:return Vp(n,i,a)}throw Error(t(156,i.tag))};function xm(n,i){return _n(n,i)}function __(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bi(n,i,a,c){return new __(n,i,a,c)}function Qu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function x_(n){if(typeof n=="function")return Qu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===$)return 11;if(n===ue)return 14}return 2}function Wr(n,i){var a=n.alternate;return a===null?(a=bi(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function _l(n,i,a,c,h,m){var C=2;if(c=n,typeof n=="function")Qu(n)&&(C=1);else if(typeof n=="string")C=5;else e:switch(n){case T:return vs(a.children,h,m,i);case E:C=8,h|=8;break;case Y:return n=bi(12,a,i,h|2),n.elementType=Y,n.lanes=m,n;case te:return n=bi(13,a,i,h),n.elementType=te,n.lanes=m,n;case V:return n=bi(19,a,i,h),n.elementType=V,n.lanes=m,n;case J:return xl(a,h,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case B:C=10;break e;case G:C=9;break e;case $:C=11;break e;case ue:C=14;break e;case le:C=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=bi(C,a,i,h),i.elementType=n,i.type=c,i.lanes=m,i}function vs(n,i,a,c){return n=bi(7,n,c,i),n.lanes=a,n}function xl(n,i,a,c){return n=bi(22,n,c,i),n.elementType=J,n.lanes=a,n.stateNode={isHidden:!1},n}function Ju(n,i,a){return n=bi(6,n,null,i),n.lanes=a,n}function eh(n,i,a){return i=bi(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function y_(n,i,a,c,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wt(0),this.expirationTimes=Wt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wt(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function th(n,i,a,c,h,m,C,k,X){return n=new y_(n,i,a,k,X),i===1?(i=1,m===!0&&(i|=8)):i=0,m=bi(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},pu(m),n}function S_(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function ym(n){if(!n)return Ur;n=n._reactInternals;e:{if(Zt(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(oi(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(oi(a))return Yf(n,a,i)}return i}function Sm(n,i,a,c,h,m,C,k,X){return n=th(a,c,!0,n,h,m,C,k,X),n.context=ym(null),a=n.current,c=ei(),h=Vr(a),m=fr(c,h),m.callback=i??null,kr(a,m,h),n.current.lanes=h,fn(n,h,c),ui(n,c),n}function yl(n,i,a,c){var h=i.current,m=ei(),C=Vr(h);return a=ym(a),i.context===null?i.context=a:i.pendingContext=a,i=fr(m,C),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=kr(h,i,C),n!==null&&(Fi(n,h,C,m),Zo(n,h,C)),C}function Sl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Mm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function nh(n,i){Mm(n,i),(n=n.alternate)&&Mm(n,i)}function M_(){return null}var Tm=typeof reportError=="function"?reportError:function(n){console.error(n)};function ih(n){this._internalRoot=n}Ml.prototype.render=ih.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));yl(n,i,null,null)},Ml.prototype.unmount=ih.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;ps(function(){yl(null,n,null,null)}),i[lr]=null}};function Ml(n){this._internalRoot=n}Ml.prototype.unstable_scheduleHydration=function(n){if(n){var i=Yi();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Nr.length&&i!==0&&i<Nr[a].priority;a++);Nr.splice(a,0,n),a===0&&cf(n)}};function rh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Tl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Em(){}function T_(n,i,a,c,h){if(h){if(typeof c=="function"){var m=c;c=function(){var pe=Sl(C);m.call(pe)}}var C=Sm(i,c,n,0,null,!1,!1,"",Em);return n._reactRootContainer=C,n[lr]=C.current,Ua(n.nodeType===8?n.parentNode:n),ps(),C}for(;h=n.lastChild;)n.removeChild(h);if(typeof c=="function"){var k=c;c=function(){var pe=Sl(X);k.call(pe)}}var X=th(n,0,!1,null,null,!1,!1,"",Em);return n._reactRootContainer=X,n[lr]=X.current,Ua(n.nodeType===8?n.parentNode:n),ps(function(){yl(i,X,a,c)}),X}function El(n,i,a,c,h){var m=a._reactRootContainer;if(m){var C=m;if(typeof h=="function"){var k=h;h=function(){var X=Sl(C);k.call(X)}}yl(i,C,n,h)}else C=T_(a,i,n,h,c);return Sl(C)}En=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=pt(i.pendingLanes);a!==0&&(Tn(i,a|1),ui(i,Ut()),(Ot&6)===0&&(Ks=Ut()+500,Or()))}break;case 13:ps(function(){var c=dr(n,1);if(c!==null){var h=ei();Fi(c,n,1,h)}}),nh(n,1)}},br=function(n){if(n.tag===13){var i=dr(n,134217728);if(i!==null){var a=ei();Fi(i,n,134217728,a)}nh(n,134217728)}},Pi=function(n){if(n.tag===13){var i=Vr(n),a=dr(n,i);if(a!==null){var c=ei();Fi(a,n,i,c)}nh(n,i)}},Yi=function(){return rt},Pt=function(n,i){var a=rt;try{return rt=n,i()}finally{rt=a}},_e=function(n,i,a){switch(i){case"input":if(ln(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var h=Ho(c);if(!h)throw Error(t(90));ct(c),ln(c,h)}}}break;case"textarea":H(n,a);break;case"select":i=a.value,i!=null&&$t(n,!!a.multiple,i,!1)}},ye=qu,ce=ps;var E_={usingClientEntryPoint:!1,Events:[ka,Is,Ho,W,q,qu]},Qa={findFiberByHostInstance:as,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},w_={bundleType:Qa.bundleType,version:Qa.version,rendererPackageName:Qa.rendererPackageName,rendererConfig:Qa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Dn(n),n===null?null:n.stateNode},findFiberByHostInstance:Qa.findFiberByHostInstance||M_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wl.isDisabled&&wl.supportsFiber)try{j=wl.inject(w_),he=wl}catch{}}return hi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E_,hi.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rh(i))throw Error(t(200));return S_(n,i,null,a)},hi.createRoot=function(n,i){if(!rh(n))throw Error(t(299));var a=!1,c="",h=Tm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=th(n,1,!1,null,null,a,!1,c,h),n[lr]=i.current,Ua(n.nodeType===8?n.parentNode:n),new ih(i)},hi.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Dn(i),n=n===null?null:n.stateNode,n},hi.flushSync=function(n){return ps(n)},hi.hydrate=function(n,i,a){if(!Tl(i))throw Error(t(200));return El(null,n,i,!0,a)},hi.hydrateRoot=function(n,i,a){if(!rh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,h=!1,m="",C=Tm;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(C=a.onRecoverableError)),i=Sm(i,null,n,1,a??null,h,!1,m,C),n[lr]=i.current,Ua(n),c)for(n=0;n<c.length;n++)a=c[n],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new Ml(i)},hi.render=function(n,i,a){if(!Tl(i))throw Error(t(200));return El(null,n,i,!1,a)},hi.unmountComponentAtNode=function(n){if(!Tl(n))throw Error(t(40));return n._reactRootContainer?(ps(function(){El(null,null,n,!1,function(){n._reactRootContainer=null,n[lr]=null})}),!0):!1},hi.unstable_batchedUpdates=qu,hi.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Tl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return El(n,i,a,!1,c)},hi.version="18.3.1-next-f1338f8080-20240426",hi}var Dm;function I_(){if(Dm)return oh.exports;Dm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),oh.exports=L_(),oh.exports}var Lm;function U_(){if(Lm)return Al;Lm=1;var s=I_();return Al.createRoot=s.createRoot,Al.hydrateRoot=s.hydrateRoot,Al}var O_=U_();const F_=q0(O_);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),$0=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var B_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=Dt.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...d},f)=>Dt.createElement("svg",{ref:f,...B_,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:$0("lucide",o),...d},[...u.map(([p,_])=>Dt.createElement(p,_)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=(s,e)=>{const t=Dt.forwardRef(({className:r,...o},l)=>Dt.createElement(z_,{ref:l,iconNode:e,className:$0(`lucide-${k_(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=dn("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=dn("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=dn("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=dn("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const to=dn("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_=dn("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=dn("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=dn("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=dn("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=dn("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=dn("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_=dn("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=dn("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=dn("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=dn("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=dn("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=dn("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_=dn("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=dn("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_=dn("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=dn("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=dn("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=dn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zd="187",ma={ROTATE:0,DOLLY:1,PAN:2},fa={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ex=0,Om=1,tx=2,ac=1,Q0=2,po=3,Ms=0,fi=1,Gi=2,ga=0,go=1,Fm=2,km=3,Bm=4,nx=5,ha=100,ix=101,rx=102,sx=103,ax=104,ox=200,lx=201,cx=202,ux=203,J0=204,eg=205,hx=206,dx=207,fx=208,px=209,mx=210,gx=211,vx=212,_x=213,xx=214,Kh=0,Yh=1,qh=2,yo=3,$h=4,Zh=5,Qh=6,Jh=7,tg=0,yx=1,Sx=2,Er=0,ng=1,ig=2,rg=3,Hd=4,sg=5,ag=6,og=7,lg=300,_a=301,So=302,hh=303,dh=304,ed=1e3,Mr=1001,td=1002,Hn=1003,Mx=1004,Rl=1005,ii=1006,fh=1007,Jr=1008,yi=1009,cg=1010,ug=1011,Mo=1012,Vd=1013,sr=1014,nr=1015,ar=1016,Gd=1017,Wd=1018,xa=1020,hg=35902,dg=35899,fg=1021,pg=1022,ir=1023,ns=1026,es=1027,mg=1028,jd=1029,Ts=1030,Xd=1031,Kd=1033,oc=33776,lc=33777,cc=33778,uc=33779,nd=35840,id=35841,rd=35842,sd=35843,ad=36196,od=37492,ld=37496,cd=37488,ud=37489,fc=37490,hd=37491,dd=37808,fd=37809,pd=37810,md=37811,gd=37812,vd=37813,_d=37814,xd=37815,yd=37816,Sd=37817,Md=37818,Td=37819,Ed=37820,wd=37821,Ad=36492,Cd=36494,bd=36495,Rd=36283,Nd=36284,pc=36285,Pd=36286,Tx=3200,Dd=0,Ex=1,Qr="",Ni="srgb",mc="srgb-linear",gc="linear",Yt="srgb",ph=7680,wx=519,Ax=512,Cx=513,bx=514,gg=515,Rx=516,Nx=517,vg=518,_g=519,xg=35044,zm="300 es",Wi=2e3,To=2001;function Px(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function vc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Dx(){const s=vc("canvas");return s.style.display="block",s}const Hm={};function _c(...s){const e="THREE."+s.shift();console.log(e,...s)}function yg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function gt(...s){s=yg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function kt(...s){s=yg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function hc(...s){const e=s.join(" ");e in Hm||(Hm[e]=!0,gt(...s))}function Lx(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const Ix={[Kh]:Kh,[qh]:Qh,[$h]:$h,[yo]:Zh,[Yh]:Yh,[Qh]:qh,[Jh]:Jh,[Zh]:yo};class ss{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vo=Math.PI/180,Ld=180/Math.PI;function ws(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Yn[s&255]+Yn[s>>8&255]+Yn[s>>16&255]+Yn[s>>24&255]+"-"+Yn[e&255]+Yn[e>>8&255]+"-"+Yn[e>>16&15|64]+Yn[e>>24&255]+"-"+Yn[t&63|128]+Yn[t>>8&255]+"-"+Yn[t>>16&255]+Yn[t>>24&255]+Yn[r&255]+Yn[r>>8&255]+Yn[r>>16&255]+Yn[r>>24&255]).toLowerCase()}function Et(s,e,t){return Math.max(e,Math.min(t,s))}function Ux(s,e){return(s%e+e)%e}function mh(s,e,t){return(1-t)*s+t*e}function Ox(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ac(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Sg(s,e){if(e.constructor===Float32Array)return s;const t=Ac(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function Mg(s,e){if(e.constructor===Float32Array)return s;const t=Ac(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const Fx={DEG2RAD:vo},rf=class rf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};rf.prototype.isVector2=!0;let Xe=rf;class is{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,d){let f=r[o+0],p=r[o+1],_=r[o+2],M=r[o+3],v=l[u+0],S=l[u+1],w=l[u+2],R=l[u+3];if(M!==R||f!==v||p!==S||_!==w){let y=f*v+p*S+_*w+M*R;y<0&&(v=-v,S=-S,w=-w,R=-R,y=-y);let x=1-d;if(y<.9995){const D=Math.acos(y),F=Math.sin(D);x=Math.sin(x*D)/F,d=Math.sin(d*D)/F,f=f*x+v*d,p=p*x+S*d,_=_*x+w*d,M=M*x+R*d}else{f=f*x+v*d,p=p*x+S*d,_=_*x+w*d,M=M*x+R*d;const D=1/Math.sqrt(f*f+p*p+_*_+M*M);f*=D,p*=D,_*=D,M*=D}}e[t]=f,e[t+1]=p,e[t+2]=_,e[t+3]=M}static multiplyQuaternionsFlat(e,t,r,o,l,u){const d=r[o],f=r[o+1],p=r[o+2],_=r[o+3],M=l[u],v=l[u+1],S=l[u+2],w=l[u+3];return e[t]=d*w+_*M+f*S-p*v,e[t+1]=f*w+_*v+p*M-d*S,e[t+2]=p*w+_*S+d*v-f*M,e[t+3]=_*w-d*M-f*v-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,d=Math.cos,f=Math.sin,p=d(r/2),_=d(o/2),M=d(l/2),v=f(r/2),S=f(o/2),w=f(l/2);switch(u){case"XYZ":this._x=v*_*M+p*S*w,this._y=p*S*M-v*_*w,this._z=p*_*w+v*S*M,this._w=p*_*M-v*S*w;break;case"YXZ":this._x=v*_*M+p*S*w,this._y=p*S*M-v*_*w,this._z=p*_*w-v*S*M,this._w=p*_*M+v*S*w;break;case"ZXY":this._x=v*_*M-p*S*w,this._y=p*S*M+v*_*w,this._z=p*_*w+v*S*M,this._w=p*_*M-v*S*w;break;case"ZYX":this._x=v*_*M-p*S*w,this._y=p*S*M+v*_*w,this._z=p*_*w-v*S*M,this._w=p*_*M+v*S*w;break;case"YZX":this._x=v*_*M+p*S*w,this._y=p*S*M+v*_*w,this._z=p*_*w-v*S*M,this._w=p*_*M-v*S*w;break;case"XZY":this._x=v*_*M-p*S*w,this._y=p*S*M-v*_*w,this._z=p*_*w+v*S*M,this._w=p*_*M+v*S*w;break;default:gt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],d=t[5],f=t[9],p=t[2],_=t[6],M=t[10],v=r+d+M;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(_-f)*S,this._y=(l-p)*S,this._z=(u-o)*S}else if(r>d&&r>M){const S=2*Math.sqrt(1+r-d-M);this._w=(_-f)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+p)/S}else if(d>M){const S=2*Math.sqrt(1+d-r-M);this._w=(l-p)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(f+_)/S}else{const S=2*Math.sqrt(1+M-r-d);this._w=(u-o)/S,this._x=(l+p)/S,this._y=(f+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,d=t._x,f=t._y,p=t._z,_=t._w;return this._x=r*_+u*d+o*p-l*f,this._y=o*_+u*f+l*d-r*p,this._z=l*_+u*p+r*f-o*d,this._w=u*_-r*d-o*f-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,l=-l,u=-u,d=-d);let f=1-t;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);f=Math.sin(f*p)/_,t=Math.sin(t*p)/_,this._x=this._x*f+r*t,this._y=this._y*f+o*t,this._z=this._z*f+l*t,this._w=this._w*f+u*t,this._onChangeCallback()}else this._x=this._x*f+r*t,this._y=this._y*f+o*t,this._z=this._z*f+l*t,this._w=this._w*f+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const sf=class sf{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,d=e.z,f=e.w,p=2*(u*o-d*r),_=2*(d*t-l*o),M=2*(l*r-u*t);return this.x=t+f*p+u*M-d*_,this.y=r+f*_+d*p-l*M,this.z=o+f*M+l*_-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,d=t.y,f=t.z;return this.x=o*f-l*d,this.y=l*u-r*f,this.z=r*d-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return gh.copy(this).projectOnVector(e),this.sub(gh)}reflect(e){return this.sub(gh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};sf.prototype.isVector3=!0;let A=sf;const gh=new A,Vm=new is,af=class af{constructor(e,t,r,o,l,u,d,f,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,f,p)}set(e,t,r,o,l,u,d,f,p){const _=this.elements;return _[0]=e,_[1]=o,_[2]=d,_[3]=t,_[4]=l,_[5]=f,_[6]=r,_[7]=u,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[3],f=r[6],p=r[1],_=r[4],M=r[7],v=r[2],S=r[5],w=r[8],R=o[0],y=o[3],x=o[6],D=o[1],F=o[4],P=o[7],O=o[2],I=o[5],T=o[8];return l[0]=u*R+d*D+f*O,l[3]=u*y+d*F+f*I,l[6]=u*x+d*P+f*T,l[1]=p*R+_*D+M*O,l[4]=p*y+_*F+M*I,l[7]=p*x+_*P+M*T,l[2]=v*R+S*D+w*O,l[5]=v*y+S*F+w*I,l[8]=v*x+S*P+w*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],f=e[6],p=e[7],_=e[8];return t*u*_-t*d*p-r*l*_+r*d*f+o*l*p-o*u*f}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],f=e[6],p=e[7],_=e[8],M=_*u-d*p,v=d*f-_*l,S=p*l-u*f,w=t*M+r*v+o*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=M*R,e[1]=(o*p-_*r)*R,e[2]=(d*r-o*u)*R,e[3]=v*R,e[4]=(_*t-o*f)*R,e[5]=(o*l-d*t)*R,e[6]=S*R,e[7]=(r*f-p*t)*R,e[8]=(u*t-r*l)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,d){const f=Math.cos(l),p=Math.sin(l);return this.set(r*f,r*p,-r*(f*u+p*d)+u+e,-o*p,o*f,-o*(-p*u+f*d)+d+t,0,0,1),this}scale(e,t){return hc("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(vh.makeScale(e,t)),this}rotate(e){return hc("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(vh.makeRotation(-e)),this}translate(e,t){return hc("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(vh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};af.prototype.isMatrix3=!0;let yt=af;const vh=new yt,Gm=new yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wm=new yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kx(){const s={enabled:!0,workingColorSpace:mc,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Yt&&(o.r=wr(o.r),o.g=wr(o.g),o.b=wr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Yt&&(o.r=va(o.r),o.g=va(o.g),o.b=va(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Qr?gc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[u].fromXYZ).multiply(this.spaces[l].toXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[mc]:{primaries:e,whitePoint:r,transfer:gc,toXYZ:Gm,fromXYZ:Wm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ni},outputColorSpaceConfig:{drawingBufferColorSpace:Ni}},[Ni]:{primaries:e,whitePoint:r,transfer:Yt,toXYZ:Gm,fromXYZ:Wm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ni}}}),s}const Lt=kx();function wr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function va(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let qs;class Bx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{qs===void 0&&(qs=vc("canvas")),qs.width=e.width,qs.height=e.height;const o=qs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=qs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=wr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(wr(t[r]/255)*255):t[r]=wr(t[r]);return{data:t,width:e.width,height:e.height}}else return gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zx=0;class Yd{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:zx++}),this.uuid=ws(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?l.push(_h(o[u].image)):l.push(_h(o[u]))}else l=_h(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function _h(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Bx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(gt("Texture: Unable to serialize Texture."),{})}let Hx=0;const xh=new A;class Zn extends ss{constructor(e=Zn.DEFAULT_IMAGE,t=Zn.DEFAULT_MAPPING,r=Mr,o=Mr,l=ii,u=Jr,d=ir,f=yi,p=Zn.DEFAULT_ANISOTROPY,_=Qr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hx++}),this.uuid=ws(),this.name="",this.source=new Yd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(xh).x}get height(){return this.source.getSize(xh).y}get depth(){return this.source.getSize(xh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){gt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){gt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ed:e.x=e.x-Math.floor(e.x);break;case Mr:e.x=e.x<0?0:1;break;case td:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ed:e.y=e.y-Math.floor(e.y);break;case Mr:e.y=e.y<0?0:1;break;case td:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=lg;Zn.DEFAULT_ANISOTROPY=1;const of=class of{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const f=e.elements,p=f[0],_=f[4],M=f[8],v=f[1],S=f[5],w=f[9],R=f[2],y=f[6],x=f[10];if(Math.abs(_-v)<.01&&Math.abs(M-R)<.01&&Math.abs(w-y)<.01){if(Math.abs(_+v)<.1&&Math.abs(M+R)<.1&&Math.abs(w+y)<.1&&Math.abs(p+S+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const F=(p+1)/2,P=(S+1)/2,O=(x+1)/2,I=(_+v)/4,T=(M+R)/4,E=(w+y)/4;return F>P&&F>O?F<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(F),o=I/r,l=T/r):P>O?P<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(P),r=I/o,l=E/o):O<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(O),r=T/l,o=E/l),this.set(r,o,l,t),this}let D=Math.sqrt((y-w)*(y-w)+(M-R)*(M-R)+(v-_)*(v-_));return Math.abs(D)<.001&&(D=1),this.x=(y-w)/D,this.y=(M-R)/D,this.z=(v-_)/D,this.w=Math.acos((p+S+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this.w=Et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this.w=Et(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};of.prototype.isVector4=!0;let hn=of;class Vx extends ss{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new hn(0,0,e,t),this.scissorTest=!1,this.viewport=new hn(0,0,e,t),this.textures=[];const o=r.count;for(let l=0;l<o;l++)this.textures[l]=new Zn({width:e,height:t,depth:r.depth}),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:ii,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Yd(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rr extends Vx{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Tg extends Zn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gx extends Zn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const wc=class wc{constructor(e,t,r,o,l,u,d,f,p,_,M,v,S,w,R,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,f,p,_,M,v,S,w,R,y)}set(e,t,r,o,l,u,d,f,p,_,M,v,S,w,R,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=r,x[12]=o,x[1]=l,x[5]=u,x[9]=d,x[13]=f,x[2]=p,x[6]=_,x[10]=M,x[14]=v,x[3]=S,x[7]=w,x[11]=R,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/$s.setFromMatrixColumn(e,0).length(),l=1/$s.setFromMatrixColumn(e,1).length(),u=1/$s.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),f=Math.cos(o),p=Math.sin(o),_=Math.cos(l),M=Math.sin(l);if(e.order==="XYZ"){const v=u*_,S=u*M,w=d*_,R=d*M;t[0]=f*_,t[4]=-f*M,t[8]=p,t[1]=S+w*p,t[5]=v-R*p,t[9]=-d*f,t[2]=R-v*p,t[6]=w+S*p,t[10]=u*f}else if(e.order==="YXZ"){const v=f*_,S=f*M,w=p*_,R=p*M;t[0]=v+R*d,t[4]=w*d-S,t[8]=u*p,t[1]=u*M,t[5]=u*_,t[9]=-d,t[2]=S*d-w,t[6]=R+v*d,t[10]=u*f}else if(e.order==="ZXY"){const v=f*_,S=f*M,w=p*_,R=p*M;t[0]=v-R*d,t[4]=-u*M,t[8]=w+S*d,t[1]=S+w*d,t[5]=u*_,t[9]=R-v*d,t[2]=-u*p,t[6]=d,t[10]=u*f}else if(e.order==="ZYX"){const v=u*_,S=u*M,w=d*_,R=d*M;t[0]=f*_,t[4]=w*p-S,t[8]=v*p+R,t[1]=f*M,t[5]=R*p+v,t[9]=S*p-w,t[2]=-p,t[6]=d*f,t[10]=u*f}else if(e.order==="YZX"){const v=u*f,S=u*p,w=d*f,R=d*p;t[0]=f*_,t[4]=R-v*M,t[8]=w*M+S,t[1]=M,t[5]=u*_,t[9]=-d*_,t[2]=-p*_,t[6]=S*M+w,t[10]=v-R*M}else if(e.order==="XZY"){const v=u*f,S=u*p,w=d*f,R=d*p;t[0]=f*_,t[4]=-M,t[8]=p*_,t[1]=v*M+R,t[5]=u*_,t[9]=S*M-w,t[2]=w*M-S,t[6]=d*_,t[10]=R*M+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wx,e,jx)}lookAt(e,t,r){const o=this.elements;return _i.subVectors(e,t),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),Xr.crossVectors(r,_i),Xr.lengthSq()===0&&(Math.abs(r.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),Xr.crossVectors(r,_i)),Xr.normalize(),Nl.crossVectors(_i,Xr),o[0]=Xr.x,o[4]=Nl.x,o[8]=_i.x,o[1]=Xr.y,o[5]=Nl.y,o[9]=_i.y,o[2]=Xr.z,o[6]=Nl.z,o[10]=_i.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[4],f=r[8],p=r[12],_=r[1],M=r[5],v=r[9],S=r[13],w=r[2],R=r[6],y=r[10],x=r[14],D=r[3],F=r[7],P=r[11],O=r[15],I=o[0],T=o[4],E=o[8],Y=o[12],B=o[1],G=o[5],$=o[9],te=o[13],V=o[2],ue=o[6],le=o[10],J=o[14],ne=o[3],Q=o[7],ee=o[11],U=o[15];return l[0]=u*I+d*B+f*V+p*ne,l[4]=u*T+d*G+f*ue+p*Q,l[8]=u*E+d*$+f*le+p*ee,l[12]=u*Y+d*te+f*J+p*U,l[1]=_*I+M*B+v*V+S*ne,l[5]=_*T+M*G+v*ue+S*Q,l[9]=_*E+M*$+v*le+S*ee,l[13]=_*Y+M*te+v*J+S*U,l[2]=w*I+R*B+y*V+x*ne,l[6]=w*T+R*G+y*ue+x*Q,l[10]=w*E+R*$+y*le+x*ee,l[14]=w*Y+R*te+y*J+x*U,l[3]=D*I+F*B+P*V+O*ne,l[7]=D*T+F*G+P*ue+O*Q,l[11]=D*E+F*$+P*le+O*ee,l[15]=D*Y+F*te+P*J+O*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],d=e[5],f=e[9],p=e[13],_=e[2],M=e[6],v=e[10],S=e[14],w=e[3],R=e[7],y=e[11],x=e[15],D=f*S-p*v,F=d*S-p*M,P=d*v-f*M,O=u*S-p*_,I=u*v-f*_,T=u*M-d*_;return t*(R*D-y*F+x*P)-r*(w*D-y*O+x*I)+o*(w*F-R*O+x*T)-l*(w*P-R*I+y*T)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[1],u=e[5],d=e[9],f=e[2],p=e[6],_=e[10];return t*(u*_-d*p)-r*(l*_-d*f)+o*(l*p-u*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],f=e[6],p=e[7],_=e[8],M=e[9],v=e[10],S=e[11],w=e[12],R=e[13],y=e[14],x=e[15],D=t*d-r*u,F=t*f-o*u,P=t*p-l*u,O=r*f-o*d,I=r*p-l*d,T=o*p-l*f,E=_*R-M*w,Y=_*y-v*w,B=_*x-S*w,G=M*y-v*R,$=M*x-S*R,te=v*x-S*y,V=D*te-F*$+P*G+O*B-I*Y+T*E;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ue=1/V;return e[0]=(d*te-f*$+p*G)*ue,e[1]=(o*$-r*te-l*G)*ue,e[2]=(R*T-y*I+x*O)*ue,e[3]=(v*I-M*T-S*O)*ue,e[4]=(f*B-u*te-p*Y)*ue,e[5]=(t*te-o*B+l*Y)*ue,e[6]=(y*P-w*T-x*F)*ue,e[7]=(_*T-v*P+S*F)*ue,e[8]=(u*$-d*B+p*E)*ue,e[9]=(r*B-t*$-l*E)*ue,e[10]=(w*I-R*P+x*D)*ue,e[11]=(M*P-_*I-S*D)*ue,e[12]=(d*Y-u*G-f*E)*ue,e[13]=(t*G-r*Y+o*E)*ue,e[14]=(R*F-w*O-y*D)*ue,e[15]=(_*O-M*F+v*D)*ue,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,d=e.y,f=e.z,p=l*u,_=l*d;return this.set(p*u+r,p*d-o*f,p*f+o*d,0,p*d+o*f,_*d+r,_*f-o*u,0,p*f-o*d,_*f+o*u,l*f*f+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,d=t._z,f=t._w,p=l+l,_=u+u,M=d+d,v=l*p,S=l*_,w=l*M,R=u*_,y=u*M,x=d*M,D=f*p,F=f*_,P=f*M,O=r.x,I=r.y,T=r.z;return o[0]=(1-(R+x))*O,o[1]=(S+P)*O,o[2]=(w-F)*O,o[3]=0,o[4]=(S-P)*I,o[5]=(1-(v+x))*I,o[6]=(y+D)*I,o[7]=0,o[8]=(w+F)*T,o[9]=(y-D)*T,o[10]=(1-(v+R))*T,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let u=$s.set(o[0],o[1],o[2]).length();const d=$s.set(o[4],o[5],o[6]).length(),f=$s.set(o[8],o[9],o[10]).length();l<0&&(u=-u),ki.copy(this);const p=1/u,_=1/d,M=1/f;return ki.elements[0]*=p,ki.elements[1]*=p,ki.elements[2]*=p,ki.elements[4]*=_,ki.elements[5]*=_,ki.elements[6]*=_,ki.elements[8]*=M,ki.elements[9]*=M,ki.elements[10]*=M,t.setFromRotationMatrix(ki),r.x=u,r.y=d,r.z=f,this}makePerspective(e,t,r,o,l,u,d=Wi,f=!1){const p=this.elements,_=2*l/(t-e),M=2*l/(r-o),v=(t+e)/(t-e),S=(r+o)/(r-o);let w,R;if(f)w=l/(u-l),R=u*l/(u-l);else if(d===Wi)w=-(u+l)/(u-l),R=-2*u*l/(u-l);else if(d===To)w=-u/(u-l),R=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=M,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=w,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,l,u,d=Wi,f=!1){const p=this.elements,_=2/(t-e),M=2/(r-o),v=-(t+e)/(t-e),S=-(r+o)/(r-o);let w,R;if(f)w=1/(u-l),R=u/(u-l);else if(d===Wi)w=-2/(u-l),R=-(u+l)/(u-l);else if(d===To)w=-1/(u-l),R=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=M,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=w,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};wc.prototype.isMatrix4=!0;let Jt=wc;const $s=new A,ki=new Jt,Wx=new A(0,0,0),jx=new A(1,1,1),Xr=new A,Nl=new A,_i=new A,jm=new Jt,Xm=new is;class rs{constructor(e=0,t=0,r=0,o=rs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],d=o[8],f=o[1],p=o[5],_=o[9],M=o[2],v=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(f,p)):(this._y=Math.atan2(-M,l),this._z=0);break;case"ZXY":this._x=Math.asin(Et(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-M,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-Et(M,-1,1)),Math.abs(M)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-M,l)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-_,S),this._y=0);break;default:gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return jm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xm.setFromEuler(this),this.setFromQuaternion(Xm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rs.DEFAULT_ORDER="XYZ";class qd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xx=0;const Km=new A,Zs=new is,gr=new Jt,Pl=new A,io=new A,Kx=new A,Yx=new is,Ym=new A(1,0,0),qm=new A(0,1,0),$m=new A(0,0,1),Zm={type:"added"},qx={type:"removed"},Qs={type:"childadded",child:null},yh={type:"childremoved",child:null};class bn extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const e=new A,t=new rs,r=new is,o=new A(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Jt},normalMatrix:{value:new yt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.premultiply(Zs),this}rotateX(e){return this.rotateOnAxis(Ym,e)}rotateY(e){return this.rotateOnAxis(qm,e)}rotateZ(e){return this.rotateOnAxis($m,e)}translateOnAxis(e,t){return Km.copy(e).applyQuaternion(this.quaternion),this.position.add(Km.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ym,e)}translateY(e){return this.translateOnAxis(qm,e)}translateZ(e){return this.translateOnAxis($m,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Pl.copy(e):Pl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gr.lookAt(io,Pl,this.up):gr.lookAt(Pl,io,this.up),this.quaternion.setFromRotationMatrix(gr),o&&(gr.extractRotation(o.matrixWorld),Zs.setFromRotationMatrix(gr),this.quaternion.premultiply(Zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(kt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zm),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):kt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qx),yh.child=e,this.dispatchEvent(yh),yh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gr.multiply(e.parent.matrixWorld)),e.applyMatrix4(gr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zm),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,e,Kx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,Yx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(d,f){return d[f.uuid]===void 0&&(d[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const f=d.shapes;if(Array.isArray(f))for(let p=0,_=f.length;p<_;p++){const M=f[p];l(e.shapes,M)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let f=0,p=this.material.length;f<p;f++)d.push(l(e.materials,this.material[f]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const f=this.animations[d];o.animations.push(l(e.animations,f))}}if(t){const d=u(e.geometries),f=u(e.materials),p=u(e.textures),_=u(e.images),M=u(e.shapes),v=u(e.skeletons),S=u(e.animations),w=u(e.nodes);d.length>0&&(r.geometries=d),f.length>0&&(r.materials=f),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),M.length>0&&(r.shapes=M),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),w.length>0&&(r.nodes=w)}return r.object=o,r;function u(d){const f=[];for(const p in d){const _=d[p];delete _.metadata,f.push(_)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}bn.DEFAULT_UP=new A(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class $n extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $x={type:"move"};class Sh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const d=this._targetRay,f=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const R of e.hand.values()){const y=t.getJointPose(R,r),x=this._getHandJoint(p,R);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const _=p.joints["index-finger-tip"],M=p.joints["thumb-tip"],v=_.position.distanceTo(M.position),S=.02,w=.005;p.inputState.pinching&&v>S+w?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=S-w&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent($x)))}return d!==null&&(d.visible=o!==null),f!==null&&(f.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new $n;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Eg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kr={h:0,s:0,l:0},Dl={h:0,s:0,l:0};function Mh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class wt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Lt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Lt.workingColorSpace){if(e=Ux(e,1),t=Et(t,0,1),r=Et(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=Mh(u,l,e+1/3),this.g=Mh(u,l,e),this.b=Mh(u,l,e-1/3)}return Lt.colorSpaceToWorking(this,o),this}setStyle(e,t=Ni){function r(l){l!==void 0&&parseFloat(l)<1&&gt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseFloat(l[1]))/100,Math.min(100,parseFloat(l[2]))/100,Math.min(100,parseFloat(l[3]))/100,t);break;case"hsl":case"hsla":if(l=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:gt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);gt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ni){const r=Eg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):gt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}copyLinearToSRGB(e){return this.r=va(e.r),this.g=va(e.g),this.b=va(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ni){return Lt.workingToColorSpace(qn.copy(this),e),Math.round(Et(qn.r*255,0,255))*65536+Math.round(Et(qn.g*255,0,255))*256+Math.round(Et(qn.b*255,0,255))}getHexString(e=Ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.workingToColorSpace(qn.copy(this),t);const r=qn.r,o=qn.g,l=qn.b,u=Math.max(r,o,l),d=Math.min(r,o,l);let f,p;const _=(d+u)/2;if(d===u)f=0,p=0;else{const M=u-d;switch(p=_<=.5?M/(u+d):M/(2-u-d),u){case r:f=(o-l)/M+(o<l?6:0);break;case o:f=(l-r)/M+2;break;case l:f=(r-o)/M+4;break}f/=6}return e.h=f,e.s=p,e.l=_,e}getRGB(e,t=Lt.workingColorSpace){return Lt.workingToColorSpace(qn.copy(this),t),e.r=qn.r,e.g=qn.g,e.b=qn.b,e}getStyle(e=Ni){Lt.workingToColorSpace(qn.copy(this),e);const t=qn.r,r=qn.g,o=qn.b;return e!==Ni?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Kr),this.setHSL(Kr.h+e,Kr.s+t,Kr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Kr),e.getHSL(Dl);const r=mh(Kr.h,Dl.h,t),o=mh(Kr.s,Dl.s,t),l=mh(Kr.l,Dl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qn=new wt;wt.NAMES=Eg;class Zx extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rs,this.environmentIntensity=1,this.environmentRotation=new rs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Bi=new A,vr=new A,Th=new A,_r=new A,Js=new A,ea=new A,Qm=new A,Eh=new A,wh=new A,Ah=new A,Ch=new hn,bh=new hn,Rh=new hn;class Si{constructor(e=new A,t=new A,r=new A){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Bi.subVectors(e,t),o.cross(Bi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Bi.subVectors(o,t),vr.subVectors(r,t),Th.subVectors(e,t);const u=Bi.dot(Bi),d=Bi.dot(vr),f=Bi.dot(Th),p=vr.dot(vr),_=vr.dot(Th),M=u*p-d*d;if(M===0)return l.set(0,0,0),null;const v=1/M,S=(p*f-d*_)*v,w=(u*_-d*f)*v;return l.set(1-S-w,w,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,_r)===null?!1:_r.x>=0&&_r.y>=0&&_r.x+_r.y<=1}static getInterpolation(e,t,r,o,l,u,d,f){return this.getBarycoord(e,t,r,o,_r)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,_r.x),f.addScaledVector(u,_r.y),f.addScaledVector(d,_r.z),f)}static getInterpolatedAttribute(e,t,r,o,l,u){return Ch.setScalar(0),bh.setScalar(0),Rh.setScalar(0),Ch.fromBufferAttribute(e,t),bh.fromBufferAttribute(e,r),Rh.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Ch,l.x),u.addScaledVector(bh,l.y),u.addScaledVector(Rh,l.z),u}static isFrontFacing(e,t,r,o){return Bi.subVectors(r,t),vr.subVectors(e,t),Bi.cross(vr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bi.subVectors(this.c,this.b),vr.subVectors(this.a,this.b),Bi.cross(vr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Si.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Si.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,d;Js.subVectors(o,r),ea.subVectors(l,r),Eh.subVectors(e,r);const f=Js.dot(Eh),p=ea.dot(Eh);if(f<=0&&p<=0)return t.copy(r);wh.subVectors(e,o);const _=Js.dot(wh),M=ea.dot(wh);if(_>=0&&M<=_)return t.copy(o);const v=f*M-_*p;if(v<=0&&f>=0&&_<=0&&f-_>0)return u=f/(f-_),t.copy(r).addScaledVector(Js,u);Ah.subVectors(e,l);const S=Js.dot(Ah),w=ea.dot(Ah);if(w>=0&&S<=w)return t.copy(l);const R=S*p-f*w;if(R<=0&&p>=0&&w<=0)return d=p/(p-w),t.copy(r).addScaledVector(ea,d);const y=_*w-S*M;if(y<=0&&M-_>=0&&S-w>=0)return Qm.subVectors(l,o),d=(M-_)/(M-_+(S-w)),t.copy(o).addScaledVector(Qm,d);const x=1/(y+R+v);return u=R*x,d=v*x,t.copy(r).addScaledVector(Js,u).addScaledVector(ea,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class wo{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,zi):zi.fromBufferAttribute(l,u),zi.applyMatrix4(e.matrixWorld),this.expandByPoint(zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ll.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ll.copy(r.boundingBox)),Ll.applyMatrix4(e.matrixWorld),this.union(Ll)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ro),Il.subVectors(this.max,ro),ta.subVectors(e.a,ro),na.subVectors(e.b,ro),ia.subVectors(e.c,ro),Yr.subVectors(na,ta),qr.subVectors(ia,na),_s.subVectors(ta,ia);let t=[0,-Yr.z,Yr.y,0,-qr.z,qr.y,0,-_s.z,_s.y,Yr.z,0,-Yr.x,qr.z,0,-qr.x,_s.z,0,-_s.x,-Yr.y,Yr.x,0,-qr.y,qr.x,0,-_s.y,_s.x,0];return!Nh(t,ta,na,ia,Il)||(t=[1,0,0,0,1,0,0,0,1],!Nh(t,ta,na,ia,Il))?!1:(Ul.crossVectors(Yr,qr),t=[Ul.x,Ul.y,Ul.z],Nh(t,ta,na,ia,Il))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xr=[new A,new A,new A,new A,new A,new A,new A,new A],zi=new A,Ll=new wo,ta=new A,na=new A,ia=new A,Yr=new A,qr=new A,_s=new A,ro=new A,Il=new A,Ul=new A,xs=new A;function Nh(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){xs.fromArray(s,l);const d=o.x*Math.abs(xs.x)+o.y*Math.abs(xs.y)+o.z*Math.abs(xs.z),f=e.dot(xs),p=t.dot(xs),_=r.dot(xs);if(Math.max(-Math.max(f,p,_),Math.min(f,p,_))>d)return!1}return!0}const yn=new A,Ol=new Xe;let Qx=0;class ts extends ss{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=xg,this.updateRanges=[],this.gpuType=nr,this.version=0,this._normalizationScale=e!==void 0?Ac(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Ol.fromBufferAttribute(this,t),Ol.applyMatrix3(e),this.setXY(t,Ol.x,Ol.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix3(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o),l=this._normalize(l)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Sg(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Mg(e,this.array)}}class wg extends ts{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Ag extends ts{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class qt extends ts{constructor(e,t,r){super(new Float32Array(e),t,r)}}const Jx=new wo,so=new A,Ph=new A;class Cc{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Jx.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;so.subVectors(e,this.center);const t=so.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(so,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ph.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(so.copy(e.center).add(Ph)),this.expandByPoint(so.copy(e.center).sub(Ph))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let e1=0;const Ri=new Jt,Dh=new bn,ra=new A,xi=new wo,ao=new wo,Fn=new A;class Qn extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:e1++}),this.uuid=ws(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Px(e)?Ag:wg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new yt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ri.makeRotationFromQuaternion(e),this.applyMatrix4(Ri),this}rotateX(e){return Ri.makeRotationX(e),this.applyMatrix4(Ri),this}rotateY(e){return Ri.makeRotationY(e),this.applyMatrix4(Ri),this}rotateZ(e){return Ri.makeRotationZ(e),this.applyMatrix4(Ri),this}translate(e,t,r){return Ri.makeTranslation(e,t,r),this.applyMatrix4(Ri),this}scale(e,t,r){return Ri.makeScale(e,t,r),this.applyMatrix4(Ri),this}lookAt(e){return Dh.lookAt(e),Dh.updateMatrix(),this.applyMatrix4(Dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ra).negate(),this.translate(ra.x,ra.y,ra.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new qt(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];xi.setFromBufferAttribute(l),this.morphTargetsRelative?(Fn.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(Fn),Fn.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(Fn)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){const r=this.boundingSphere.center;if(xi.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];ao.setFromBufferAttribute(d),this.morphTargetsRelative?(Fn.addVectors(xi.min,ao.min),xi.expandByPoint(Fn),Fn.addVectors(xi.max,ao.max),xi.expandByPoint(Fn)):(xi.expandByPoint(ao.min),xi.expandByPoint(ao.max))}xi.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)Fn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(Fn));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],f=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)Fn.fromBufferAttribute(d,p),f&&(ra.fromBufferAttribute(e,p),Fn.add(ra)),o=Math.max(o,r.distanceToSquared(Fn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new ts(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const d=[],f=[],p=new Uint8Array(r.count);for(let Y=0;Y<r.count;Y++)d[Y]=new A,f[Y]=new A;const _=new A,M=new A,v=new A,S=new Xe,w=new Xe,R=new Xe,y=new A,x=new A;function D(Y,B,G){p[Y]=p[B]=p[G]=1,_.fromBufferAttribute(r,Y),M.fromBufferAttribute(r,B),v.fromBufferAttribute(r,G),S.fromBufferAttribute(l,Y),w.fromBufferAttribute(l,B),R.fromBufferAttribute(l,G),M.sub(_),v.sub(_),w.sub(S),R.sub(S);const $=1/(w.x*R.y-R.x*w.y);isFinite($)&&(y.copy(M).multiplyScalar(R.y).addScaledVector(v,-w.y).multiplyScalar($),x.copy(v).multiplyScalar(w.x).addScaledVector(M,-R.x).multiplyScalar($),d[Y].add(y),d[B].add(y),d[G].add(y),f[Y].add(x),f[B].add(x),f[G].add(x))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let Y=0,B=F.length;Y<B;++Y){const G=F[Y],$=G.start,te=G.count;for(let V=$,ue=$+te;V<ue;V+=3)D(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const P=new A,O=new A,I=new A,T=new A;function E(Y){I.fromBufferAttribute(o,Y),T.copy(I);const B=d[Y];P.copy(B),P.sub(I.multiplyScalar(I.dot(B))).normalize(),O.crossVectors(T,B);const $=O.dot(f[Y])<0?-1:1;u.setXYZW(Y,P.x,P.y,P.z,$)}for(let Y=0,B=r.count;Y<B;++Y)p[Y]&&E(Y);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new ts(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const o=new A,l=new A,u=new A,d=new A,f=new A,p=new A,_=new A,M=new A;if(e)for(let v=0,S=e.count;v<S;v+=3){const w=e.getX(v+0),R=e.getX(v+1),y=e.getX(v+2);o.fromBufferAttribute(t,w),l.fromBufferAttribute(t,R),u.fromBufferAttribute(t,y),_.subVectors(u,l),M.subVectors(o,l),_.cross(M),d.fromBufferAttribute(r,w),f.fromBufferAttribute(r,R),p.fromBufferAttribute(r,y),d.add(_),f.add(_),p.add(_),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(R,f.x,f.y,f.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let v=0,S=t.count;v<S;v+=3)o.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),_.subVectors(u,l),M.subVectors(o,l),_.cross(M),r.setXYZ(v+0,_.x,_.y,_.z),r.setXYZ(v+1,_.x,_.y,_.z),r.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Fn.fromBufferAttribute(e,t),Fn.normalize(),e.setXYZ(t,Fn.x,Fn.y,Fn.z)}toNonIndexed(){function e(d,f){const p=d.array,_=d.itemSize,M=d.normalized,v=new p.constructor(f.length*_);let S=0,w=0;for(let R=0,y=f.length;R<y;R++){d.isInterleavedBufferAttribute?S=f[R]*d.data.stride+d.offset:S=f[R]*_;for(let x=0;x<_;x++)v[w++]=p[S++]}return new ts(v,_,M)}if(this.index===null)return gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qn,r=this.index.array,o=this.attributes;for(const d in o){const f=o[d],p=e(f,r);t.setAttribute(d,p)}const l=this.morphAttributes;for(const d in l){const f=[],p=l[d];for(let _=0,M=p.length;_<M;_++){const v=p[_],S=e(v,r);f.push(S)}t.morphAttributes[d]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,f=u.length;d<f;d++){const p=u[d];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const f=this.parameters;for(const p in f)f[p]!==void 0&&(e[p]=f[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const f in r){const p=r[f];e.data.attributes[f]=p.toJSON(e.data)}const o={};let l=!1;for(const f in this.morphAttributes){const p=this.morphAttributes[f],_=[];for(let M=0,v=p.length;M<v;M++){const S=p[M];_.push(S.toJSON(e.data))}_.length>0&&(o[f]=_,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const _=o[p];this.setAttribute(p,_.clone(t))}const l=e.morphAttributes;for(const p in l){const _=[],M=l[p];for(let v=0,S=M.length;v<S;v++)_.push(M[v].clone(t));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,_=u.length;p<_;p++){const M=u[p];this.addGroup(M.start,M.count,M.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class t1{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=xg,this.updateRanges=[],this.version=0,this.uuid=ws()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let o=0,l=this.stride;o<l;o++)this.array[e+o]=t.array[r+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=Jm(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const r=new this.array.constructor(e.arrayBuffers[t]),o=new this.constructor(r,this.stride);return o.setUsage(this.usage),o}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=Jm(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const r={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return r.usage=this.usage,r}}function Jm(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=ws()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}const ti=new A;class xc{constructor(e,t,r,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=o,this._normalizationScale=e!==void 0?Ac(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)ti.fromBufferAttribute(this,t),ti.applyMatrix4(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)ti.fromBufferAttribute(this,t),ti.applyNormalMatrix(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)ti.fromBufferAttribute(this,t),ti.transformDirection(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o),l=this._normalize(l)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this.data.array[e+3]=l,this}clone(e){if(e===void 0){_c("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return new ts(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new xc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){_c("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Sg(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Mg(e,this.data.array)}}const Lh=new A,n1=new A,i1=new yt;class Sr{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Lh.subVectors(r,t).cross(n1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(Lh),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||i1.getNormalMatrix(e),o=this.coplanarPoint(Lh).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let r1=0;class As extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:r1++}),this.uuid=ws(),this.name="",this.type="Material",this.blending=go,this.side=Ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=J0,this.blendDst=eg,this.blendEquation=ha,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ph,this.stencilZFail=ph,this.stencilZPass=ph,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){gt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){gt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(r.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(r.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(r.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(r.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const d in l){const f=l[d];delete f.metadata,u.push(f)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new wt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Sr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Xe().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Id extends As{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let sa;const oo=new A,aa=new A,oa=new A,la=new Xe,lo=new Xe,Cg=new Jt,Fl=new A,co=new A,kl=new A,e0=new Xe,Ih=new Xe,t0=new Xe;class n0 extends bn{constructor(e=new Id){if(super(),this.isSprite=!0,this.type="Sprite",sa===void 0){sa=new Qn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new t1(t,5);sa.setIndex([0,1,2,0,2,3]),sa.setAttribute("position",new xc(r,3,0,!1)),sa.setAttribute("uv",new xc(r,2,3,!1))}this.geometry=sa,this.material=e,this.center=new Xe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&kt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),aa.setFromMatrixScale(this.matrixWorld),Cg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),oa.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&aa.multiplyScalar(-oa.z);const r=this.material.rotation;let o,l;r!==0&&(l=Math.cos(r),o=Math.sin(r));const u=this.center;Bl(Fl.set(-.5,-.5,0),oa,u,aa,o,l),Bl(co.set(.5,-.5,0),oa,u,aa,o,l),Bl(kl.set(.5,.5,0),oa,u,aa,o,l),e0.set(0,0),Ih.set(1,0),t0.set(1,1);let d=e.ray.intersectTriangle(Fl,co,kl,!1,oo);if(d===null&&(Bl(co.set(-.5,.5,0),oa,u,aa,o,l),Ih.set(0,1),d=e.ray.intersectTriangle(Fl,kl,co,!1,oo),d===null))return;const f=e.ray.origin.distanceTo(oo);f<e.near||f>e.far||t.push({distance:f,point:oo.clone(),uv:Si.getInterpolation(oo,Fl,co,kl,e0,Ih,t0,new Xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){const t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function Bl(s,e,t,r,o,l){la.subVectors(s,t).addScalar(.5).multiply(r),o!==void 0?(lo.x=l*la.x-o*la.y,lo.y=o*la.x+l*la.y):lo.copy(la),s.copy(e),s.x+=lo.x,s.y+=lo.y,s.applyMatrix4(Cg)}const yr=new A,Uh=new A,zl=new A,Hl=new A;class bc{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yr.copy(this.origin).addScaledVector(this.direction,t),yr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Uh.copy(e).add(t).multiplyScalar(.5),zl.copy(t).sub(e).normalize(),Hl.copy(this.origin).sub(Uh);const l=e.distanceTo(t)*.5,u=-this.direction.dot(zl),d=Hl.dot(this.direction),f=-Hl.dot(zl),p=Hl.lengthSq(),_=Math.abs(1-u*u);let M,v,S,w;if(_>0)if(M=u*f-d,v=u*d-f,w=l*_,M>=0)if(v>=-w)if(v<=w){const R=1/_;M*=R,v*=R,S=M*(M+u*v+2*d)+v*(u*M+v+2*f)+p}else v=l,M=Math.max(0,-(u*v+d)),S=-M*M+v*(v+2*f)+p;else v=-l,M=Math.max(0,-(u*v+d)),S=-M*M+v*(v+2*f)+p;else v<=-w?(M=Math.max(0,-(-u*l+d)),v=M>0?-l:Math.min(Math.max(-l,-f),l),S=-M*M+v*(v+2*f)+p):v<=w?(M=0,v=Math.min(Math.max(-l,-f),l),S=v*(v+2*f)+p):(M=Math.max(0,-(u*l+d)),v=M>0?l:Math.min(Math.max(-l,-f),l),S=-M*M+v*(v+2*f)+p);else v=u>0?-l:l,M=Math.max(0,-(u*v+d)),S=-M*M+v*(v+2*f)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,M),o&&o.copy(Uh).addScaledVector(zl,v),S}intersectSphere(e,t){if(e.radius<0)return null;yr.subVectors(e.center,this.origin);const r=yr.dot(this.direction),o=yr.dot(yr)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),d=r-u,f=r+u;return f<0?null:d<0?this.at(f,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,d,f;const p=1/this.direction.x,_=1/this.direction.y,M=1/this.direction.z,v=this.origin;return p>=0?(r=(e.min.x-v.x)*p,o=(e.max.x-v.x)*p):(r=(e.max.x-v.x)*p,o=(e.min.x-v.x)*p),_>=0?(l=(e.min.y-v.y)*_,u=(e.max.y-v.y)*_):(l=(e.max.y-v.y)*_,u=(e.min.y-v.y)*_),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),M>=0?(d=(e.min.z-v.z)*M,f=(e.max.z-v.z)*M):(d=(e.max.z-v.z)*M,f=(e.min.z-v.z)*M),r>f||d>o)||((d>r||r!==r)&&(r=d),(f<o||o!==o)&&(o=f),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,yr)!==null}intersectTriangle(e,t,r,o,l){const u=this.origin,d=this.direction,f=d.x,p=d.y,_=d.z,M=e.x-u.x,v=e.y-u.y,S=e.z-u.z,w=t.x-u.x,R=t.y-u.y,y=t.z-u.z,x=r.x-u.x,D=r.y-u.y,F=r.z-u.z,P=Math.abs(f),O=Math.abs(p),I=Math.abs(_);let T,E,Y,B,G,$,te,V,ue,le,J,ne;if(P>=O&&P>=I?(Y=f,$=M,ue=w,ne=x,f>=0?(T=p,E=_,B=v,G=S,te=R,V=y,le=D,J=F):(T=_,E=p,B=S,G=v,te=y,V=R,le=F,J=D)):O>=I?(Y=p,$=v,ue=R,ne=D,p>=0?(T=_,E=f,B=S,G=M,te=y,V=w,le=F,J=x):(T=f,E=_,B=M,G=S,te=w,V=y,le=x,J=F)):(Y=_,$=S,ue=y,ne=F,_>=0?(T=f,E=p,B=M,G=v,te=w,V=R,le=x,J=D):(T=p,E=f,B=v,G=M,te=R,V=w,le=D,J=x)),Y===0)return null;const Q=T/Y,ee=E/Y,U=1/Y,ie=B-Q*$,Fe=G-ee*$,se=te-Q*ue,we=V-ee*ue,Ce=le-Q*ne,He=J-ee*ne,Ee=Ce*we-He*se,Ke=ie*He-Fe*Ce,st=se*Fe-we*ie;if(o){if(Ee<0||Ke<0||st<0)return null}else if((Ee<0||Ke<0||st<0)&&(Ee>0||Ke>0||st>0))return null;const at=Ee+Ke+st;if(at===0)return null;const ct=U*(Ee*$+Ke*ue+st*ne);return(at>0?ct<0:ct>0)?null:this.at(ct/at,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class da extends As{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rs,this.combine=tg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const i0=new Jt,ys=new bc,Vl=new Cc,r0=new A,Gl=new A,Wl=new A,jl=new A,Oh=new A,Xl=new A,s0=new A,Kl=new A;class Ft extends bn{constructor(e=new Qn,t=new da){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){Xl.set(0,0,0);for(let f=0,p=l.length;f<p;f++){const _=d[f],M=l[f];_!==0&&(Oh.fromBufferAttribute(M,e),u?Xl.addScaledVector(Oh,_):Xl.addScaledVector(Oh.sub(t),_))}t.add(Xl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Vl.copy(r.boundingSphere),Vl.applyMatrix4(l),ys.copy(e.ray).recast(e.near),!(Vl.containsPoint(ys.origin)===!1&&(ys.intersectSphere(Vl,r0)===null||ys.origin.distanceToSquared(r0)>(e.far-e.near)**2))&&(i0.copy(l).invert(),ys.copy(e.ray).applyMatrix4(i0),!(r.boundingBox!==null&&ys.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ys)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,d=l.index,f=l.attributes.position,p=l.attributes.uv,_=l.attributes.uv1,M=l.attributes.normal,v=l.groups,S=l.drawRange;if(d!==null)if(Array.isArray(u))for(let w=0,R=v.length;w<R;w++){const y=v[w],x=u[y.materialIndex],D=Math.max(y.start,S.start),F=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let P=D,O=F;P<O;P+=3){const I=d.getX(P),T=d.getX(P+1),E=d.getX(P+2);o=Yl(this,x,e,r,p,_,M,I,T,E),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const w=Math.max(0,S.start),R=Math.min(d.count,S.start+S.count);for(let y=w,x=R;y<x;y+=3){const D=d.getX(y),F=d.getX(y+1),P=d.getX(y+2);o=Yl(this,u,e,r,p,_,M,D,F,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(u))for(let w=0,R=v.length;w<R;w++){const y=v[w],x=u[y.materialIndex],D=Math.max(y.start,S.start),F=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let P=D,O=F;P<O;P+=3){const I=P,T=P+1,E=P+2;o=Yl(this,x,e,r,p,_,M,I,T,E),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const w=Math.max(0,S.start),R=Math.min(f.count,S.start+S.count);for(let y=w,x=R;y<x;y+=3){const D=y,F=y+1,P=y+2;o=Yl(this,u,e,r,p,_,M,D,F,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function s1(s,e,t,r,o,l,u,d){let f;if(e.side===fi?f=r.intersectTriangle(u,l,o,!0,d):f=r.intersectTriangle(o,l,u,e.side===Ms,d),f===null)return null;Kl.copy(d),Kl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Kl);return p<t.near||p>t.far?null:{distance:p,point:Kl.clone(),object:s}}function Yl(s,e,t,r,o,l,u,d,f,p){s.getVertexPosition(d,Gl),s.getVertexPosition(f,Wl),s.getVertexPosition(p,jl);const _=s1(s,e,t,r,Gl,Wl,jl,s0);if(_){const M=new A;Si.getBarycoord(s0,Gl,Wl,jl,M),o&&(_.uv=Si.getInterpolatedAttribute(o,d,f,p,M,new Xe)),l&&(_.uv1=Si.getInterpolatedAttribute(l,d,f,p,M,new Xe)),u&&(_.normal=Si.getInterpolatedAttribute(u,d,f,p,M,new A),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const v={a:d,b:f,c:p,normal:new A,materialIndex:0};Si.getNormal(Gl,Wl,jl,v.normal),_.face=v,_.barycoord=M}return _}class a1 extends Zn{constructor(e=null,t=1,r=1,o,l,u,d,f,p=Hn,_=Hn,M,v){super(null,u,d,f,p,_,o,l,M,v),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ss=new Cc,o1=new Xe(.5,.5),ql=new A;class Eo{constructor(e=new Sr,t=new Sr,r=new Sr,o=new Sr,l=new Sr,u=new Sr){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(o),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Wi,r=!1){const o=this.planes,l=e.elements,u=l[0],d=l[1],f=l[2],p=l[3],_=l[4],M=l[5],v=l[6],S=l[7],w=l[8],R=l[9],y=l[10],x=l[11],D=l[12],F=l[13],P=l[14],O=l[15];if(o[0].setComponents(p-u,S-_,x-w,O-D).normalize(),o[1].setComponents(p+u,S+_,x+w,O+D).normalize(),o[2].setComponents(p+d,S+M,x+R,O+F).normalize(),o[3].setComponents(p-d,S-M,x-R,O-F).normalize(),r)o[4].setComponents(f,v,y,P).normalize(),o[5].setComponents(p-f,S-v,x-y,O-P).normalize();else if(o[4].setComponents(p-f,S-v,x-y,O-P).normalize(),t===Wi)o[5].setComponents(p+f,S+v,x+y,O+P).normalize();else if(t===To)o[5].setComponents(f,v,y,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(e){Ss.center.set(0,0,0);const t=o1.distanceTo(e.center);return Ss.radius=.7071067811865476+t,Ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(ql.x=o.normal.x>0?e.max.x:e.min.x,ql.y=o.normal.y>0?e.max.y:e.min.y,ql.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(ql)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const a0=new Jt;class $d{constructor(){this.coordinateSystem=Wi,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,r=this._frustums;for(let o=0;o<t.length;o++){const l=t[o];a0.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse),r[o]===void 0&&(r[o]=new Eo),r[o].setFromProjectionMatrix(a0,l.coordinateSystem,l.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,r=e._frustums;for(let o=0;o<e._count;o++)t[o]===void 0&&(t[o]=new Eo),t[o].copy(r[o]);return this._count=e._count,this}clone(){return new $d().copy(this)}}class yc extends As{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Sc=new A,Mc=new A,o0=new Jt,uo=new bc,$l=new Cc,Fh=new A,l0=new A;class l1 extends bn{constructor(e=new Qn,t=new yc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)Sc.fromBufferAttribute(t,o-1),Mc.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=Sc.distanceTo(Mc);e.setAttribute("lineDistance",new qt(r,1))}else gt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),$l.copy(r.boundingSphere),$l.applyMatrix4(o),$l.radius+=l,e.ray.intersectsSphere($l)===!1)return;o0.copy(o).invert(),uo.copy(e.ray).applyMatrix4(o0);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),f=d*d,p=this.isLineSegments?2:1,_=r.index,v=r.attributes.position;if(_!==null){const S=Math.max(0,u.start),w=Math.min(_.count,u.start+u.count);for(let R=S,y=w-1;R<y;R+=p){const x=_.getX(R),D=_.getX(R+1),F=Zl(this,e,uo,f,x,D,R);F&&t.push(F)}if(this.isLineLoop){const R=_.getX(w-1),y=_.getX(S),x=Zl(this,e,uo,f,R,y,w-1);x&&t.push(x)}}else{const S=Math.max(0,u.start),w=Math.min(v.count,u.start+u.count);for(let R=S,y=w-1;R<y;R+=p){const x=Zl(this,e,uo,f,R,R+1,R);x&&t.push(x)}if(this.isLineLoop){const R=Zl(this,e,uo,f,w-1,S,w-1);R&&t.push(R)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Zl(s,e,t,r,o,l,u){const d=s.geometry.attributes.position;if(Sc.fromBufferAttribute(d,o),Mc.fromBufferAttribute(d,l),t.distanceSqToSegment(Sc,Mc,Fh,l0)>r)return;Fh.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(Fh);if(!(p<e.near||p>e.far))return{distance:p,point:l0.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}const c0=new A,u0=new A;class Ud extends l1{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)c0.fromBufferAttribute(t,o),u0.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+c0.distanceTo(u0);e.setAttribute("lineDistance",new qt(r,1))}else gt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bg extends Zn{constructor(e=[],t=_a,r,o,l,u,d,f,p,_){super(e,t,r,o,l,u,d,f,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class h0 extends Zn{constructor(e,t,r,o,l,u,d,f,p){super(e,t,r,o,l,u,d,f,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ya extends Zn{constructor(e,t,r=sr,o,l,u,d=Hn,f=Hn,p,_=ns,M=1){if(_!==ns&&_!==es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:M};super(v,o,l,u,d,f,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Rg extends ya{constructor(e,t=sr,r=_a,o,l,u=Hn,d=Hn,f,p=ns){const _={width:e,height:e,depth:1},M=[_,_,_,_,_,_];super(e,e,t,r,o,l,u,d,f,p),this.image=M,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ng extends Zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Tr extends Qn{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const d=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const f=[],p=[],_=[],M=[];let v=0,S=0;w("z","y","x",-1,-1,r,t,e,u,l,0),w("z","y","x",1,-1,r,t,-e,u,l,1),w("x","z","y",1,1,e,r,t,o,u,2),w("x","z","y",1,-1,e,r,-t,o,u,3),w("x","y","z",1,-1,e,t,r,o,l,4),w("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(f),this.setAttribute("position",new qt(p,3)),this.setAttribute("normal",new qt(_,3)),this.setAttribute("uv",new qt(M,2));function w(R,y,x,D,F,P,O,I,T,E,Y){const B=P/T,G=O/E,$=P/2,te=O/2,V=I/2,ue=T+1,le=E+1;let J=0,ne=0;const Q=new A;for(let ee=0;ee<le;ee++){const U=ee*G-te;for(let ie=0;ie<ue;ie++){const Fe=ie*B-$;Q[R]=Fe*D,Q[y]=U*F,Q[x]=V,p.push(Q.x,Q.y,Q.z),Q[R]=0,Q[y]=0,Q[x]=I>0?1:-1,_.push(Q.x,Q.y,Q.z),M.push(ie/T),M.push(1-ee/E),J+=1}}for(let ee=0;ee<E;ee++)for(let U=0;U<T;U++){const ie=v+U+ue*ee,Fe=v+U+ue*(ee+1),se=v+(U+1)+ue*(ee+1),we=v+(U+1)+ue*ee;f.push(ie,Fe,we),f.push(Fe,se,we),ne+=6}d.addGroup(S,ne,Y),S+=ne,v+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Zr extends Qn{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,d=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:d,thetaLength:f};const p=this;o=Math.floor(o),l=Math.floor(l);const _=[],M=[],v=[],S=[];let w=0;const R=[],y=r/2;let x=0;D(),u===!1&&(e>0&&F(!0),t>0&&F(!1)),this.setIndex(_),this.setAttribute("position",new qt(M,3)),this.setAttribute("normal",new qt(v,3)),this.setAttribute("uv",new qt(S,2));function D(){const P=new A,O=new A;let I=0;const T=(t-e)/r;for(let E=0;E<=l;E++){const Y=[],B=E/l,G=B*(t-e)+e;for(let $=0;$<=o;$++){const te=$/o,V=te*f+d,ue=Math.sin(V),le=Math.cos(V);O.x=G*ue,O.y=-B*r+y,O.z=G*le,M.push(O.x,O.y,O.z),P.set(ue,T,le).normalize(),v.push(P.x,P.y,P.z),S.push(te,1-B),Y.push(w++)}R.push(Y)}for(let E=0;E<o;E++)for(let Y=0;Y<l;Y++){const B=R[Y][E],G=R[Y+1][E],$=R[Y+1][E+1],te=R[Y][E+1];(e>0||Y!==0)&&(_.push(B,G,te),I+=3),(t>0||Y!==l-1)&&(_.push(G,$,te),I+=3)}p.addGroup(x,I,0),x+=I}function F(P){const O=w,I=new Xe,T=new A;let E=0;const Y=P===!0?e:t,B=P===!0?1:-1;for(let $=1;$<=o;$++)M.push(0,y*B,0),v.push(0,B,0),S.push(.5,.5),w++;const G=w;for(let $=0;$<=o;$++){const V=$/o*f+d,ue=Math.cos(V),le=Math.sin(V);T.x=Y*le,T.y=y*B,T.z=Y*ue,M.push(T.x,T.y,T.z),v.push(0,B,0),I.x=ue*.5+.5,I.y=le*.5*B+.5,S.push(I.x,I.y),w++}for(let $=0;$<o;$++){const te=O+$,V=G+$;P===!0?_.push(V,V+1,te):_.push(V+1,V,te),E+=3}p.addGroup(x,E,P===!0?1:2),x+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Ql=new A,Jl=new A,kh=new A,ec=new Si;class d0 extends Qn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const o=Math.pow(10,4),l=Math.cos(vo*t),u=e.getIndex(),d=e.getAttribute("position"),f=u?u.count:d.count,p=[0,0,0],_=["a","b","c"],M=new Array(3),v=new Map,S=[];for(let w=0;w<f;w+=3){u?(p[0]=u.getX(w),p[1]=u.getX(w+1),p[2]=u.getX(w+2)):(p[0]=w,p[1]=w+1,p[2]=w+2);const{a:R,b:y,c:x}=ec;if(R.fromBufferAttribute(d,p[0]),y.fromBufferAttribute(d,p[1]),x.fromBufferAttribute(d,p[2]),ec.getNormal(kh),M[0]=`${Math.round(R.x*o)},${Math.round(R.y*o)},${Math.round(R.z*o)}`,M[1]=`${Math.round(y.x*o)},${Math.round(y.y*o)},${Math.round(y.z*o)}`,M[2]=`${Math.round(x.x*o)},${Math.round(x.y*o)},${Math.round(x.z*o)}`,!(M[0]===M[1]||M[1]===M[2]||M[2]===M[0]))for(let D=0;D<3;D++){const F=(D+1)%3,P=M[D],O=M[F],I=ec[_[D]],T=ec[_[F]],E=`${P}_${O}`,Y=`${O}_${P}`,B=v.get(Y);B?(kh.dot(B.normal)<=l&&(S.push(I.x,I.y,I.z),S.push(T.x,T.y,T.z)),v.set(Y,null)):v.has(E)||v.set(E,{index0:p[D],index1:p[F],normal:kh.clone()})}}for(const w of v.values())if(w){const{index0:R,index1:y}=w;Ql.fromBufferAttribute(d,R),Jl.fromBufferAttribute(d,y),S.push(Ql.x,Ql.y,Ql.z),S.push(Jl.x,Jl.y,Jl.z)}this.setAttribute("position",new qt(S,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ar{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){gt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let o=0;const l=r.length;let u;t?u=t:u=e*r[l-1];let d=0,f=l-1,p;for(;d<=f;)if(o=Math.floor(d+(f-d)/2),p=r[o]-u,p<0)d=o+1;else if(p>0)f=o-1;else{f=o;break}if(o=f,r[o]===u)return o/(l-1);const _=r[o],v=r[o+1]-_,S=(u-_)/v;return(o+S)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const u=this.getPoint(o),d=this.getPoint(l),f=t||(u.isVector2?new Xe:new A);return f.copy(d).sub(u).normalize(),f}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new A,o=[],l=[],u=[],d=new A,f=new Jt;for(let S=0;S<=e;S++){const w=S/e;o[S]=this.getTangentAt(w,new A)}l[0]=new A,u[0]=new A;let p=Number.MAX_VALUE;const _=Math.abs(o[0].x),M=Math.abs(o[0].y),v=Math.abs(o[0].z);_<=p&&(p=_,r.set(1,0,0)),M<=p&&(p=M,r.set(0,1,0)),v<=p&&r.set(0,0,1),d.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],d),u[0].crossVectors(o[0],l[0]);for(let S=1;S<=e;S++){if(l[S]=l[S-1].clone(),u[S]=u[S-1].clone(),d.crossVectors(o[S-1],o[S]),d.length()>Number.EPSILON){d.normalize();const w=Math.acos(Et(o[S-1].dot(o[S]),-1,1));l[S].applyMatrix4(f.makeRotationAxis(d,w))}u[S].crossVectors(o[S],l[S])}if(t===!0){let S=Math.acos(Et(l[0].dot(l[e]),-1,1));S/=e,o[0].dot(d.crossVectors(l[0],l[e]))>0&&(S=-S);for(let w=1;w<=e;w++)l[w].applyMatrix4(f.makeRotationAxis(o[w],S*w)),u[w].crossVectors(o[w],l[w])}return{tangents:o,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class Pg extends Ar{constructor(e=0,t=0,r=1,o=1,l=0,u=Math.PI*2,d=!1,f=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=d,this.aRotation=f}getPoint(e,t=new Xe){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(u?l=0:l=o),this.aClockwise===!0&&!u&&(l===o?l=-o:l=l-o);const d=this.aStartAngle+e*l;let f=this.aX+this.xRadius*Math.cos(d),p=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const _=Math.cos(this.aRotation),M=Math.sin(this.aRotation),v=f-this.aX,S=p-this.aY;f=v*_-S*M+this.aX,p=v*M+S*_+this.aY}return r.set(f,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class c1 extends Pg{constructor(e,t,r,o,l,u){super(e,t,r,r,o,l,u),this.isArcCurve=!0,this.type="ArcCurve"}}function Zd(){let s=0,e=0,t=0,r=0;function o(l,u,d,f){s=l,e=d,t=-3*l+3*u-2*d-f,r=2*l-2*u+d+f}return{initCatmullRom:function(l,u,d,f,p){o(u,d,p*(d-l),p*(f-u))},initNonuniformCatmullRom:function(l,u,d,f,p,_,M){let v=(u-l)/p-(d-l)/(p+_)+(d-u)/_,S=(d-u)/_-(f-u)/(_+M)+(f-d)/M;v*=_,S*=_,o(u,d,v,S)},calc:function(l){const u=l*l,d=u*l;return s+e*l+t*u+r*d}}}const f0=new A,p0=new A,Bh=new Zd,zh=new Zd,Hh=new Zd;class Dg extends Ar{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new A){const r=t,o=this.points,l=o.length,u=(l-(this.closed?0:1))*e;let d=Math.floor(u),f=u-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/l)+1)*l:f===0&&d===l-1&&(d=l-2,f=1);let p,_;this.closed||d>0?p=o[(d-1)%l]:(p0.subVectors(o[0],o[1]).add(o[0]),p=p0);const M=o[d%l],v=o[(d+1)%l];if(this.closed||d+2<l?_=o[(d+2)%l]:(f0.subVectors(o[l-1],o[l-2]).add(o[l-1]),_=f0),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let w=Math.pow(p.distanceToSquared(M),S),R=Math.pow(M.distanceToSquared(v),S),y=Math.pow(v.distanceToSquared(_),S);R<1e-4&&(R=1),w<1e-4&&(w=R),y<1e-4&&(y=R),Bh.initNonuniformCatmullRom(p.x,M.x,v.x,_.x,w,R,y),zh.initNonuniformCatmullRom(p.y,M.y,v.y,_.y,w,R,y),Hh.initNonuniformCatmullRom(p.z,M.z,v.z,_.z,w,R,y)}else this.curveType==="catmullrom"&&(Bh.initCatmullRom(p.x,M.x,v.x,_.x,this.tension),zh.initCatmullRom(p.y,M.y,v.y,_.y,this.tension),Hh.initCatmullRom(p.z,M.z,v.z,_.z,this.tension));return r.set(Bh.calc(f),zh.calc(f),Hh.calc(f)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new A().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function m0(s,e,t,r,o){const l=(r-e)*.5,u=(o-t)*.5,d=s*s,f=s*d;return(2*t-2*r+l+u)*f+(-3*t+3*r-2*l-u)*d+l*s+t}function u1(s,e){const t=1-s;return t*t*e}function h1(s,e){return 2*(1-s)*s*e}function d1(s,e){return s*s*e}function _o(s,e,t,r){return u1(s,e)+h1(s,t)+d1(s,r)}function f1(s,e){const t=1-s;return t*t*t*e}function p1(s,e){const t=1-s;return 3*t*t*s*e}function m1(s,e){return 3*(1-s)*s*s*e}function g1(s,e){return s*s*s*e}function xo(s,e,t,r,o){return f1(s,e)+p1(s,t)+m1(s,r)+g1(s,o)}class v1 extends Ar{constructor(e=new Xe,t=new Xe,r=new Xe,o=new Xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new Xe){const r=t,o=this.v0,l=this.v1,u=this.v2,d=this.v3;return r.set(xo(e,o.x,l.x,u.x,d.x),xo(e,o.y,l.y,u.y,d.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class _1 extends Ar{constructor(e=new A,t=new A,r=new A,o=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new A){const r=t,o=this.v0,l=this.v1,u=this.v2,d=this.v3;return r.set(xo(e,o.x,l.x,u.x,d.x),xo(e,o.y,l.y,u.y,d.y),xo(e,o.z,l.z,u.z,d.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class x1 extends Ar{constructor(e=new Xe,t=new Xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Xe){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class y1 extends Ar{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class S1 extends Ar{constructor(e=new Xe,t=new Xe,r=new Xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Xe){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(_o(e,o.x,l.x,u.x),_o(e,o.y,l.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Lg extends Ar{constructor(e=new A,t=new A,r=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new A){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(_o(e,o.x,l.x,u.x),_o(e,o.y,l.y,u.y),_o(e,o.z,l.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class M1 extends Ar{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Xe){const r=t,o=this.points,l=(o.length-1)*e,u=Math.floor(l),d=l-u,f=o[u===0?u:u-1],p=o[u],_=o[u>o.length-2?o.length-1:u+1],M=o[u>o.length-3?o.length-1:u+2];return r.set(m0(d,f.x,p.x,_.x,M.x),m0(d,f.y,p.y,_.y,M.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new Xe().fromArray(o))}return this}}var T1=Object.freeze({__proto__:null,ArcCurve:c1,CatmullRomCurve3:Dg,CubicBezierCurve:v1,CubicBezierCurve3:_1,EllipseCurve:Pg,LineCurve:x1,LineCurve3:y1,QuadraticBezierCurve:S1,QuadraticBezierCurve3:Lg,SplineCurve:M1});class Hi extends Qn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,d=Math.floor(r),f=Math.floor(o),p=d+1,_=f+1,M=e/d,v=t/f,S=[],w=[],R=[],y=[];for(let x=0;x<_;x++){const D=x*v-u;for(let F=0;F<p;F++){const P=F*M-l;w.push(P,-D,0),R.push(0,0,1),y.push(F/d),y.push(1-x/f)}}for(let x=0;x<f;x++)for(let D=0;D<d;D++){const F=D+p*x,P=D+p*(x+1),O=D+1+p*(x+1),I=D+1+p*x;S.push(F,P,I),S.push(P,O,I)}this.setIndex(S),this.setAttribute("position",new qt(w,3)),this.setAttribute("normal",new qt(R,3)),this.setAttribute("uv",new qt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Tc extends Qn{constructor(e=.5,t=1,r=32,o=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:o,thetaStart:l,thetaLength:u},r=Math.max(3,r),o=Math.max(1,o);const d=[],f=[],p=[],_=[];let M=e;const v=(t-e)/o,S=new A,w=new Xe;for(let R=0;R<=o;R++){for(let y=0;y<=r;y++){const x=l+y/r*u;S.x=M*Math.cos(x),S.y=M*Math.sin(x),f.push(S.x,S.y,S.z),p.push(0,0,1),w.x=(S.x/t+1)/2,w.y=(S.y/t+1)/2,_.push(w.x,w.y)}M+=v}for(let R=0;R<o;R++){const y=R*(r+1);for(let x=0;x<r;x++){const D=x+y,F=D,P=D+r+1,O=D+r+2,I=D+1;d.push(F,P,I),d.push(P,O,I)}}this.setIndex(d),this.setAttribute("position",new qt(f,3)),this.setAttribute("normal",new qt(p,3)),this.setAttribute("uv",new qt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class pa extends Qn{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const f=Math.min(u+d,Math.PI);let p=0;const _=[],M=new A,v=new A,S=[],w=[],R=[],y=[];for(let x=0;x<=r;x++){const D=[],F=x/r,P=u+F*d,O=e*Math.cos(P),I=Math.sqrt(e*e-O*O);let T=0;x===0&&u===0?T=.5/t:x===r&&f===Math.PI&&(T=-.5/t);for(let E=0;E<=t;E++){const Y=E/t,B=o+Y*l;M.x=-I*Math.cos(B),M.y=O,M.z=I*Math.sin(B),w.push(M.x,M.y,M.z),v.copy(M).normalize(),R.push(v.x,v.y,v.z),y.push(Y+T,1-F),D.push(p++)}_.push(D)}for(let x=0;x<r;x++)for(let D=0;D<t;D++){const F=_[x][D+1],P=_[x][D],O=_[x+1][D],I=_[x+1][D+1];(x!==0||u>0)&&S.push(F,P,I),(x!==r-1||f<Math.PI)&&S.push(P,O,I)}this.setIndex(S),this.setAttribute("position",new qt(w,3)),this.setAttribute("normal",new qt(R,3)),this.setAttribute("uv",new qt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Qd extends Qn{constructor(e=1,t=.4,r=12,o=48,l=Math.PI*2,u=0,d=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:l,thetaStart:u,thetaLength:d},r=Math.floor(r),o=Math.floor(o);const f=[],p=[],_=[],M=[],v=new A,S=new A,w=new A;for(let R=0;R<=r;R++){const y=u+R/r*d;for(let x=0;x<=o;x++){const D=x/o*l;S.x=(e+t*Math.cos(y))*Math.cos(D),S.y=(e+t*Math.cos(y))*Math.sin(D),S.z=t*Math.sin(y),p.push(S.x,S.y,S.z),v.x=e*Math.cos(D),v.y=e*Math.sin(D),w.subVectors(S,v).normalize(),_.push(w.x,w.y,w.z),M.push(x/o),M.push(R/r)}}for(let R=1;R<=r;R++)for(let y=1;y<=o;y++){const x=(o+1)*R+y-1,D=(o+1)*(R-1)+y-1,F=(o+1)*(R-1)+y,P=(o+1)*R+y;f.push(x,D,P),f.push(D,F,P)}this.setIndex(f),this.setAttribute("position",new qt(p,3)),this.setAttribute("normal",new qt(_,3)),this.setAttribute("uv",new qt(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class Jd extends Qn{constructor(e=new Lg(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),t=64,r=1,o=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:o,closed:l};const u=e.computeFrenetFrames(t,l);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const d=new A,f=new A,p=new Xe;let _=new A;const M=[],v=[],S=[],w=[];R(),this.setIndex(w),this.setAttribute("position",new qt(M,3)),this.setAttribute("normal",new qt(v,3)),this.setAttribute("uv",new qt(S,2));function R(){for(let F=0;F<t;F++)y(F);y(l===!1?t:0),D(),x()}function y(F){_=e.getPointAt(F/t,_);const P=u.normals[F],O=u.binormals[F];for(let I=0;I<=o;I++){const T=I/o*Math.PI*2,E=Math.sin(T),Y=-Math.cos(T);f.x=Y*P.x+E*O.x,f.y=Y*P.y+E*O.y,f.z=Y*P.z+E*O.z,f.normalize(),v.push(f.x,f.y,f.z),d.x=_.x+r*f.x,d.y=_.y+r*f.y,d.z=_.z+r*f.z,M.push(d.x,d.y,d.z)}}function x(){for(let F=1;F<=t;F++)for(let P=1;P<=o;P++){const O=(o+1)*(F-1)+(P-1),I=(o+1)*F+(P-1),T=(o+1)*F+P,E=(o+1)*(F-1)+P;w.push(O,I,E),w.push(I,T,E)}}function D(){for(let F=0;F<=t;F++)for(let P=0;P<=o;P++)p.x=F/t,p.y=P/o,S.push(p.x,p.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Jd(new T1[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Sa(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(g0(o))o.isRenderTargetTexture?(gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(g0(o[0])){const l=[];for(let u=0,d=o.length;u<d;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function ni(s){const e={};for(let t=0;t<s.length;t++){const r=Sa(s[t]);for(const o in r)e[o]=r[o]}return e}function g0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function E1(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ig(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const w1={clone:Sa,merge:ni};var A1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,C1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Es extends As{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=A1,this.fragmentShader=C1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Sa(e.uniforms),this.uniformsGroups=E1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new wt().setHex(o.value);break;case"v2":this.uniforms[r].value=new Xe().fromArray(o.value);break;case"v3":this.uniforms[r].value=new A().fromArray(o.value);break;case"v4":this.uniforms[r].value=new hn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new yt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new Jt().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class b1 extends Es{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class kn extends As{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dd,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class R1 extends As{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class N1 extends As{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ef extends bn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class P1 extends ef{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new wt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Vh=new Jt,v0=new A,_0=new A;class D1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=yi,this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Eo,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new hn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;v0.setFromMatrixPosition(e.matrixWorld),t.position.copy(v0),_0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,o){Vh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(Vh,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,u=o?o.z/l.x:1,d=o?o.w/l.y:1,f=o?o.x/l.x:0,p=o?o.y/l.y:0;e.coordinateSystem===To||e.reversedDepth?t.set(.5*u,0,0,.5*u+f,0,.5*d,0,.5*d+p,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+f,0,.5*d,0,.5*d+p,0,0,.5,.5,0,0,0,1),t.multiply(Vh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const tc=new A,nc=new is,Ji=new A;class Ug extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(tc,nc,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tc,nc,Ji.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(tc,nc,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tc,nc,Ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const $r=new A,x0=new Xe,y0=new Xe;class Vi extends Ug{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ld*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ld*2*Math.atan(Math.tan(vo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){$r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($r.x,$r.y).multiplyScalar(-e/$r.z),$r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set($r.x,$r.y).multiplyScalar(-e/$r.z)}getViewSize(e,t){return this.getViewBounds(e,x0,y0),t.subVectors(y0,x0)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vo*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/f,t-=u.offsetY*r/p,o*=u.width/f,r*=u.height/p}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Og extends Ug{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,d-=_*this.view.offsetY,f=d-_*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class L1 extends D1{constructor(){super(new Og(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class I1 extends ef{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.shadow=new L1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class U1 extends ef{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ca=-90,ua=1;class Od extends bn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Vi(ca,ua,e,t);o.layers=this.layers,this.add(o);const l=new Vi(ca,ua,e,t);l.layers=this.layers,this.add(l);const u=new Vi(ca,ua,e,t);u.layers=this.layers,this.add(u);const d=new Vi(ca,ua,e,t);d.layers=this.layers,this.add(d);const f=new Vi(ca,ua,e,t);f.layers=this.layers,this.add(f);const p=new Vi(ca,ua,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,d,f]=t;for(const p of t)this.remove(p);if(e===Wi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===To)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,f,p,_]=this.children,M=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.mipmapsAutoUpdate;r.texture.mipmapsAutoUpdate=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.mipmapsAutoUpdate=R,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,_),e.setRenderTarget(M,v,S),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class O1 extends Vi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const S0=new Jt;class F1{constructor(e,t,r=0,o=1/0){this.ray=new bc(e,t),this.near=r,this.far=o,this.camera=null,this.layers=new qd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):kt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return S0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(S0),this}intersectObject(e,t=!0,r=[]){return Fd(e,this,r,t),r.sort(M0),r}intersectObjects(e,t=!0,r=[]){for(let o=0,l=e.length;o<l;o++)Fd(e[o],this,r,t);return r.sort(M0),r}}function M0(s,e){return s.distance-e.distance}function Fd(s,e,t,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(o=!1),o===!0&&r===!0){const l=s.children;for(let u=0,d=l.length;u<d;u++)Fd(l[u],e,t,!0)}}class T0{constructor(e=1,t=0,r=0){this.radius=e,this.phi=t,this.theta=r}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Et(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class k1 extends Ud{constructor(e=10,t=10,r=4473924,o=8947848){r=new wt(r),o=new wt(o);const l=t/2,u=e/t,d=e/2,f=[],p=[];for(let v=0,S=0,w=-d;v<=t;v++,w+=u){f.push(-d,0,w,d,0,w),f.push(w,0,-d,w,0,d);const R=v===l?r:o;R.toArray(p,S),S+=3,R.toArray(p,S),S+=3,R.toArray(p,S),S+=3,R.toArray(p,S),S+=3}const _=new Qn;_.setAttribute("position",new qt(f,3)),_.setAttribute("color",new qt(p,3));const M=new yc({vertexColors:!0,toneMapped:!1});super(_,M),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class B1 extends ss{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function E0(s,e,t,r){const o=z1(r);switch(t){case fg:return s*e;case mg:return s*e/o.components*o.byteLength;case jd:return s*e/o.components*o.byteLength;case Ts:return s*e*2/o.components*o.byteLength;case Xd:return s*e*2/o.components*o.byteLength;case pg:return s*e*3/o.components*o.byteLength;case ir:return s*e*4/o.components*o.byteLength;case Kd:return s*e*4/o.components*o.byteLength;case oc:case lc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case cc:case uc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case id:case sd:return Math.max(s,16)*Math.max(e,8)/4;case nd:case rd:return Math.max(s,8)*Math.max(e,8)/2;case ad:case od:case cd:case ud:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ld:case fc:case hd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case dd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case fd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case pd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case md:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case gd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case vd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case _d:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case xd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case yd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Sd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Md:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Td:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ed:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case wd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ad:case Cd:case bd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Rd:case Nd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case pc:case Pd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function z1(s){switch(s){case yi:case cg:return{byteLength:1,components:1};case Mo:case ug:case ar:return{byteLength:2,components:1};case Gd:case Wd:return{byteLength:2,components:4};case sr:case Vd:case nr:return{byteLength:4,components:1};case hg:case dg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zd}}));typeof window<"u"&&(window.__THREE__?gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Fg(){let s=null,e=!1,t=null,r=null;function o(l,u){r=s.requestAnimationFrame(o),t(l,u)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function H1(s){const e=new WeakMap;function t(d,f){const p=d.array,_=d.usage,M=p.byteLength,v=s.createBuffer();s.bindBuffer(f,v),s.bufferData(f,p,_),d.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:M}}function r(d,f,p){const _=f.array,M=f.updateRanges;if(s.bindBuffer(p,d),M.length===0)s.bufferSubData(p,0,_);else{M.sort((S,w)=>S.start-w.start);let v=0;for(let S=1;S<M.length;S++){const w=M[v],R=M[S];R.start<=w.start+w.count+1?w.count=Math.max(w.count,R.start+R.count-w.start):(++v,M[v]=R)}M.length=v+1;for(let S=0,w=M.length;S<w;S++){const R=M[S];s.bufferSubData(p,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}f.clearUpdateRanges()}f.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const f=e.get(d);f&&(s.deleteBuffer(f.buffer),e.delete(d))}function u(d,f){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,t(d,f));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,f),p.version=d.version}}return{get:o,remove:l,update:u}}var V1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,G1=`#ifdef USE_ALPHAHASH
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
#endif`,W1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,j1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,K1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Y1=`#ifdef USE_AOMAP
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
#endif`,q1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$1=`#ifdef USE_BATCHING
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
#endif`,Z1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Q1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,J1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ey=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ty=`#ifdef USE_IRIDESCENCE
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
#endif`,ny=`#ifdef USE_BUMPMAP
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
#endif`,iy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ry=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ly=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,cy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,uy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,hy=`#define PI 3.141592653589793
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
} // validated`,dy=`vec3 transformedNormal = objectNormal;
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
#endif`,fy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,py=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,my=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vy="gl_FragColor = linearToOutputTexel( gl_FragColor );",_y=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xy=`#ifdef USE_ENVMAP
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
#endif`,yy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Sy=`#ifdef USE_ENVMAP
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
#endif`,My=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ty=`#ifdef USE_ENVMAP
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
#endif`,Ey=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ay=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,by=`#ifdef USE_GRADIENTMAP
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
}`,Ry=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ny=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Py=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ly=`#ifdef USE_ENVMAP
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
#endif`,Iy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Oy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ky=`PhysicalMaterial material;
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
#endif`,By=`uniform sampler2D dfgLUT;
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
}`,zy=`
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
#endif`,Hy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gy=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Wy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ky=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$y=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zy=`#if defined( USE_POINTS_UV )
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
#endif`,Qy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tS=`#if defined( USE_MORPHCOLORS )
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
#endif`,nS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iS=`#ifdef USE_MORPHTARGETS
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
#endif`,rS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,aS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,oS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,uS=`#ifdef USE_NORMALMAP
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
#endif`,hS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_S=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,TS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ES=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,AS=`float getShadowMask() {
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
}`,CS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bS=`#ifdef USE_SKINNING
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
#endif`,RS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NS=`#ifdef USE_SKINNING
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
#endif`,PS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,LS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,IS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,US=`#ifdef USE_TRANSMISSION
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
#endif`,OS=`#ifdef USE_TRANSMISSION
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
#endif`,FS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VS=`uniform sampler2D t2D;
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
}`,GS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WS=`uniform float backgroundBlurriness;
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
}`,jS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KS=`#include <common>
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
}`,YS=`#if DEPTH_PACKING == 3200
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
}`,qS=`#define DISTANCE
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
}`,$S=`#define DISTANCE
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
}`,ZS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JS=`uniform float scale;
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
}`,eM=`uniform vec3 diffuse;
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
}`,tM=`#include <common>
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
}`,nM=`uniform vec3 diffuse;
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
}`,iM=`#define LAMBERT
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
}`,rM=`#define LAMBERT
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
}`,sM=`#define MATCAP
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
}`,aM=`#define MATCAP
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
}`,oM=`#define NORMAL
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
}`,lM=`#define NORMAL
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
}`,cM=`#define PHONG
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
}`,uM=`#define PHONG
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
}`,hM=`#define STANDARD
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
}`,dM=`#define STANDARD
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
}`,fM=`#define TOON
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
}`,pM=`#define TOON
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
}`,mM=`uniform float size;
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
}`,gM=`uniform vec3 diffuse;
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
}`,vM=`#include <common>
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
}`,_M=`uniform vec3 color;
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
}`,xM=`uniform float rotation;
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
}`,yM=`uniform vec3 diffuse;
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
}`,Tt={alphahash_fragment:V1,alphahash_pars_fragment:G1,alphamap_fragment:W1,alphamap_pars_fragment:j1,alphatest_fragment:X1,alphatest_pars_fragment:K1,aomap_fragment:Y1,aomap_pars_fragment:q1,batching_pars_vertex:$1,batching_vertex:Z1,begin_vertex:Q1,beginnormal_vertex:J1,bsdfs:ey,iridescence_fragment:ty,bumpmap_pars_fragment:ny,clipping_planes_fragment:iy,clipping_planes_pars_fragment:ry,clipping_planes_pars_vertex:sy,clipping_planes_vertex:ay,color_fragment:oy,color_pars_fragment:ly,color_pars_vertex:cy,color_vertex:uy,common:hy,defaultnormal_vertex:dy,displacementmap_pars_vertex:fy,displacementmap_vertex:py,emissivemap_fragment:my,emissivemap_pars_fragment:gy,colorspace_fragment:vy,colorspace_pars_fragment:_y,envmap_fragment:xy,envmap_common_pars_fragment:yy,envmap_pars_fragment:Sy,envmap_pars_vertex:My,envmap_physical_pars_fragment:Ly,envmap_vertex:Ty,fog_vertex:Ey,fog_pars_vertex:wy,fog_fragment:Ay,fog_pars_fragment:Cy,gradientmap_pars_fragment:by,lightmap_pars_fragment:Ry,lights_lambert_fragment:Ny,lights_lambert_pars_fragment:Py,lights_pars_begin:Dy,lights_toon_fragment:Iy,lights_toon_pars_fragment:Uy,lights_phong_fragment:Oy,lights_phong_pars_fragment:Fy,lights_physical_fragment:ky,lights_physical_pars_fragment:By,lights_fragment_begin:zy,lights_fragment_maps:Hy,lights_fragment_end:Vy,lightprobes_pars_fragment:Gy,logdepthbuf_fragment:Wy,logdepthbuf_pars_fragment:jy,logdepthbuf_pars_vertex:Xy,logdepthbuf_vertex:Ky,map_fragment:Yy,map_pars_fragment:qy,map_particle_fragment:$y,map_particle_pars_fragment:Zy,metalnessmap_fragment:Qy,metalnessmap_pars_fragment:Jy,morphinstance_vertex:eS,morphcolor_vertex:tS,morphnormal_vertex:nS,morphtarget_pars_vertex:iS,morphtarget_vertex:rS,normal_fragment_begin:sS,normal_fragment_maps:aS,normal_pars_fragment:oS,normal_pars_vertex:lS,normal_vertex:cS,normalmap_pars_fragment:uS,clearcoat_normal_fragment_begin:hS,clearcoat_normal_fragment_maps:dS,clearcoat_pars_fragment:fS,iridescence_pars_fragment:pS,opaque_fragment:mS,packing:gS,premultiplied_alpha_fragment:vS,project_vertex:_S,dithering_fragment:xS,dithering_pars_fragment:yS,roughnessmap_fragment:SS,roughnessmap_pars_fragment:MS,shadowmap_pars_fragment:TS,shadowmap_pars_vertex:ES,shadowmap_vertex:wS,shadowmask_pars_fragment:AS,skinbase_vertex:CS,skinning_pars_vertex:bS,skinning_vertex:RS,skinnormal_vertex:NS,specularmap_fragment:PS,specularmap_pars_fragment:DS,tonemapping_fragment:LS,tonemapping_pars_fragment:IS,transmission_fragment:US,transmission_pars_fragment:OS,uv_pars_fragment:FS,uv_pars_vertex:kS,uv_vertex:BS,worldpos_vertex:zS,background_vert:HS,background_frag:VS,backgroundCube_vert:GS,backgroundCube_frag:WS,cube_vert:jS,cube_frag:XS,depth_vert:KS,depth_frag:YS,distance_vert:qS,distance_frag:$S,equirect_vert:ZS,equirect_frag:QS,linedashed_vert:JS,linedashed_frag:eM,meshbasic_vert:tM,meshbasic_frag:nM,meshlambert_vert:iM,meshlambert_frag:rM,meshmatcap_vert:sM,meshmatcap_frag:aM,meshnormal_vert:oM,meshnormal_frag:lM,meshphong_vert:cM,meshphong_frag:uM,meshphysical_vert:hM,meshphysical_frag:dM,meshtoon_vert:fM,meshtoon_frag:pM,points_vert:mM,points_frag:gM,shadow_vert:vM,shadow_frag:_M,sprite_vert:xM,sprite_frag:yM},We={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yt}},envmap:{envMap:{value:null},envMapRotation:{value:new yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yt},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}}},tr={basic:{uniforms:ni([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:ni([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new wt(0)},envMapIntensity:{value:1}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:ni([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:ni([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:ni([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new wt(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:ni([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:ni([We.points,We.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:ni([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:ni([We.common,We.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:ni([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:ni([We.sprite,We.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new yt}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distance:{uniforms:ni([We.common,We.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distance_vert,fragmentShader:Tt.distance_frag},shadow:{uniforms:ni([We.lights,We.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};tr.physical={uniforms:ni([tr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yt},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new yt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yt},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yt},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yt}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};const ic={r:0,b:0,g:0},SM=new Jt,kg=new yt;kg.set(-1,0,0,0,1,0,0,0,1);function MM(s,e,t,r,o,l){const u=new wt(0);let d=o===!0?0:1,f,p,_=null,M=0,v=null;function S(D){let F=D.isScene===!0?D.background:null;if(F&&F.isTexture){const P=D.backgroundBlurriness>0;F=e.get(F,P)}return F}function w(D){let F=!1;const P=S(D);P===null?y(u,d):P&&P.isColor&&(y(P,1),F=!0);const O=s.xr.getEnvironmentBlendMode();O==="additive"?t.buffers.color.setClear(0,0,0,1,l):O==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||F)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function R(D,F){const P=S(F);P&&P.isCubeTexture?(p===void 0&&(p=new Ft(new Tr(1,1,1),new Es({name:"BackgroundCubeMaterial",uniforms:Sa(tr.backgroundCube.uniforms),vertexShader:tr.backgroundCube.vertexShader,fragmentShader:tr.backgroundCube.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(O,I,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=P,p.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(SM.makeRotationFromEuler(F.backgroundRotation)).transpose(),P.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(kg),p.material.toneMapped=Lt.getTransfer(P.colorSpace)!==Yt,(_!==P||M!==P.version||v!==s.toneMapping)&&(p.material.needsUpdate=!0,_=P,M=P.version,v=s.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null)):P&&P.isTexture&&(f===void 0&&(f=new Ft(new Hi(2,2),new Es({name:"BackgroundMaterial",uniforms:Sa(tr.background.uniforms),vertexShader:tr.background.vertexShader,fragmentShader:tr.background.fragmentShader,side:Ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=P,f.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,f.material.toneMapped=Lt.getTransfer(P.colorSpace)!==Yt,P.matrixAutoUpdate===!0&&P.updateMatrix(),f.material.uniforms.uvTransform.value.copy(P.matrix),(_!==P||M!==P.version||v!==s.toneMapping)&&(f.material.needsUpdate=!0,_=P,M=P.version,v=s.toneMapping),f.layers.enableAll(),D.unshift(f,f.geometry,f.material,0,0,null))}function y(D,F){D.getRGB(ic,Ig(s)),t.buffers.color.setClear(ic.r,ic.g,ic.b,F,l)}function x(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return u},setClearColor:function(D,F=1){u.set(D),d=F,y(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(D){d=D,y(u,d)},render:w,addToRenderList:R,dispose:x}}function TM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=v(null);let l=o,u=!1;function d(G,$,te,V,ue){let le=!1;const J=M(G,V,te,$);l!==J&&(l=J,p(l.object)),le=S(G,V,te,ue),le&&w(G,V,te,ue),ue!==null&&e.update(ue,s.ELEMENT_ARRAY_BUFFER),(le||u)&&(u=!1,P(G,$,te,V),ue!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function f(){return s.createVertexArray()}function p(G){return s.bindVertexArray(G)}function _(G){return s.deleteVertexArray(G)}function M(G,$,te,V){const ue=V.wireframe===!0;let le=r[$.id];le===void 0&&(le={},r[$.id]=le);const J=G.isInstancedMesh===!0?G.id:0;let ne=le[J];ne===void 0&&(ne={},le[J]=ne);let Q=ne[te.id];Q===void 0&&(Q={},ne[te.id]=Q);let ee=Q[ue];return ee===void 0&&(ee=v(f()),Q[ue]=ee),ee}function v(G){const $=[],te=[],V=[];for(let ue=0;ue<t;ue++)$[ue]=0,te[ue]=0,V[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:te,attributeDivisors:V,object:G,attributes:{},index:null}}function S(G,$,te,V){const ue=l.attributes,le=$.attributes;let J=0;const ne=te.getAttributes();for(const Q in ne)if(ne[Q].location>=0){const U=ue[Q];let ie=le[Q];if(ie===void 0&&(Q==="instanceMatrix"&&G.instanceMatrix&&(ie=G.instanceMatrix),Q==="instanceColor"&&G.instanceColor&&(ie=G.instanceColor)),U===void 0||U.attribute!==ie||ie&&U.data!==ie.data)return!0;J++}return l.attributesNum!==J||l.index!==V}function w(G,$,te,V){const ue={},le=$.attributes;let J=0;const ne=te.getAttributes();for(const Q in ne)if(ne[Q].location>=0){let U=le[Q];U===void 0&&(Q==="instanceMatrix"&&G.instanceMatrix&&(U=G.instanceMatrix),Q==="instanceColor"&&G.instanceColor&&(U=G.instanceColor));const ie={};ie.attribute=U,U&&U.data&&(ie.data=U.data),ue[Q]=ie,J++}l.attributes=ue,l.attributesNum=J,l.index=V}function R(){const G=l.newAttributes;for(let $=0,te=G.length;$<te;$++)G[$]=0}function y(G){x(G,0)}function x(G,$){const te=l.newAttributes,V=l.enabledAttributes,ue=l.attributeDivisors;te[G]=1,V[G]===0&&(s.enableVertexAttribArray(G),V[G]=1),ue[G]!==$&&(s.vertexAttribDivisor(G,$),ue[G]=$)}function D(){const G=l.newAttributes,$=l.enabledAttributes;for(let te=0,V=$.length;te<V;te++)$[te]!==G[te]&&(s.disableVertexAttribArray(te),$[te]=0)}function F(G,$,te,V,ue,le,J){J===!0?s.vertexAttribIPointer(G,$,te,ue,le):s.vertexAttribPointer(G,$,te,V,ue,le)}function P(G,$,te,V){R();const ue=V.attributes,le=te.getAttributes(),J=$.defaultAttributeValues;for(const ne in le){const Q=le[ne];if(Q.location>=0){let ee=ue[ne];if(ee===void 0&&(ne==="instanceMatrix"&&G.instanceMatrix&&(ee=G.instanceMatrix),ne==="instanceColor"&&G.instanceColor&&(ee=G.instanceColor)),ee!==void 0){const U=ee.normalized,ie=ee.itemSize,Fe=e.get(ee);if(Fe===void 0)continue;const se=Fe.buffer,we=Fe.type,Ce=Fe.bytesPerElement,He=we===s.INT||we===s.UNSIGNED_INT||ee.gpuType===Vd;if(ee.isInterleavedBufferAttribute){const Ee=ee.data,Ke=Ee.isInterleavedBuffer===!0?Ee.stride:Ee.itemSize,st=ee.offset;if(Ee.isInstancedInterleavedBuffer||Ee.isInstancedBufferAttribute){for(let at=0;at<Q.locationSize;at++)x(Q.location+at,Ee.meshPerAttribute);G.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let at=0;at<Q.locationSize;at++)y(Q.location+at);s.bindBuffer(s.ARRAY_BUFFER,se);for(let at=0;at<Q.locationSize;at++)F(Q.location+at,ie/Q.locationSize,we,U,Ke*Ce,(st+ie/Q.locationSize*at)*Ce,He)}else{if(ee.isInstancedBufferAttribute){for(let Ee=0;Ee<Q.locationSize;Ee++)x(Q.location+Ee,ee.meshPerAttribute);G.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ee=0;Ee<Q.locationSize;Ee++)y(Q.location+Ee);s.bindBuffer(s.ARRAY_BUFFER,se);for(let Ee=0;Ee<Q.locationSize;Ee++)F(Q.location+Ee,ie/Q.locationSize,we,U,ie*Ce,ie/Q.locationSize*Ee*Ce,He)}}else if(J!==void 0){const U=J[ne];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(Q.location,U);break;case 3:s.vertexAttrib3fv(Q.location,U);break;case 4:s.vertexAttrib4fv(Q.location,U);break;default:s.vertexAttrib1fv(Q.location,U)}}}}D()}function O(){Y();for(const G in r){const $=r[G];for(const te in $){const V=$[te];for(const ue in V){const le=V[ue];for(const J in le)_(le[J].object),delete le[J];delete V[ue]}}delete r[G]}}function I(G){if(r[G.id]===void 0)return;const $=r[G.id];for(const te in $){const V=$[te];for(const ue in V){const le=V[ue];for(const J in le)_(le[J].object),delete le[J];delete V[ue]}}delete r[G.id]}function T(G){for(const $ in r){const te=r[$];for(const V in te){const ue=te[V];if(ue[G.id]===void 0)continue;const le=ue[G.id];for(const J in le)_(le[J].object),delete le[J];delete ue[G.id]}}}function E(G){for(const $ in r){const te=r[$],V=G.isInstancedMesh===!0?G.id:0,ue=te[V];if(ue!==void 0){for(const le in ue){const J=ue[le];for(const ne in J)_(J[ne].object),delete J[ne];delete ue[le]}delete te[V],Object.keys(te).length===0&&delete r[$]}}}function Y(){B(),u=!0,l!==o&&(l=o,p(l.object))}function B(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:B,dispose:O,releaseStatesOfGeometry:I,releaseStatesOfObject:E,releaseStatesOfProgram:T,initAttributes:R,enableAttribute:y,disableUnusedAttributes:D}}function EM(s,e,t){let r;function o(f){r=f}function l(f,p){s.drawArrays(r,f,p),t.update(p,r,1)}function u(f,p,_){_!==0&&(s.drawArraysInstanced(r,f,p,_),t.update(p,r,_))}function d(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,f,0,p,0,_);let v=0;for(let S=0;S<_;S++)v+=p[S];t.update(v,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d}function wM(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(T){return!(T!==ir&&r.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(T){const E=T===ar&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==yi&&T!==nr&&!E&&r.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function f(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const _=f(p);_!==p&&(gt("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const M=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),v=t.logarithmicDepthBuffer===!0&&M===!1;t.reversedDepthBuffer===!0&&M===!1&&gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&M===!0&&gt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),F=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),O=s.getParameter(s.MAX_SAMPLES),I=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:M,maxTextures:S,maxVertexTextures:w,maxTextureSize:R,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:D,maxVaryings:F,maxFragmentUniforms:P,maxSamples:O,samples:I}}function AM(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Sr,d=new yt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(M,v){const S=M.length!==0||v||r!==0||o;return o=v,r=M.length,S},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(M,v){t=_(M,v,0)},this.setState=function(M,v,S){const w=M.clippingPlanes,R=M.clipIntersection,y=M.clipShadows,x=s.get(M);if(!o||w===null||w.length===0||l&&!y)l?_(null):p();else{const D=l?0:r,F=D*4;let P=x.clippingState||null;f.value=P,P=_(w,v,F,S);for(let O=0;O!==F;++O)P[O]=t[O];x.clippingState=P,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=D}};function p(){f.value!==t&&(f.value=t,f.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(M,v,S,w){const R=M!==null?M.length:0;let y=null;if(R!==0){if(y=f.value,w!==!0||y===null){const x=S+R*4,D=v.matrixWorldInverse;d.getNormalMatrix(D),(y===null||y.length<x)&&(y=new Float32Array(x));for(let F=0,P=S;F!==R;++F,P+=4)u.copy(M[F]).applyMatrix4(D,d),u.normal.toArray(y,P),y[P+3]=u.constant}f.value=y,f.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}class tf extends rr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new bg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Tr(5,5,5),l=new Es({name:"CubemapFromEquirect",uniforms:Sa(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:fi,blending:ga});l.uniforms.tEquirect.value=t;const u=new Ft(o,l),d=t.minFilter;return t.minFilter===Jr&&(t.minFilter=ii),new Od(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}const w0=256,CM=3,bM=20,Bg=256,zg=16,RM=3,NM=new A,PM=new wt;class Ec{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Od(1,10,null),this._boxMesh=new Ft(new Tr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:d=NM}=l,f=this._renderer;this._setSize(u);const p=this._allocateTarget(),_=this._getSourceTarget(!0);t>0&&(_.texture.mipmapsAutoUpdate=!1);const M=f.autoClear,v=f.autoClearColor,S=f.autoClearDepth,w=f.autoClearStencil,R=e.background;f.autoClear=!0,f.autoClearColor=!0,f.autoClearDepth=!0,f.autoClearStencil=!0,R===null&&(e.background=f.getClearColor(PM));const y=new Od(r,o,_);return y.position.copy(d),y.update(f,e),f.autoClear=M,f.autoClearColor=v,f.autoClearDepth=S,f.autoClearStencil=w,e.background=R,t>0&&(_.texture.mipmapsAutoUpdate=!0,this._blur(p,t)),this._applyPMREM(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=b0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=C0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(w0,Ox(e))}_fromTexture(e,t){e.mapping===_a||e.mapping===So?this._setSize(e.image.length===0?w0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const r=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(r),r}_allocateTarget(){const e=this._cubeSize,t=A0(e,!1,!1),r=Math.log2(e)-CM;for(let o=0;o<=r;o++)t.texture.mipmaps.push({width:e>>o,height:e>>o});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==t||e&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=A0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,r){const o=this._boxMesh,l=this._cubeCamera;o.material=r,l.renderTarget=e,l.activeMipmapLevel=t;const u=e.width>>t;e.viewport.set(0,0,u,u),l.update(this._renderer,o),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===_a||e.mapping===So?(this._cubemapMaterial===null&&(this._cubemapMaterial=b0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=C0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=DM(),this._integrationMaterial=LM());const t=this._cubeSize,r=e.texture.mipmaps.length-1,o=this._ggxMaterial.uniforms;o.envMap.value=this._sourceTarget.texture;const l=this._integrationMaterial.uniforms;l.envMap.value=this._sourceTarget.texture,l.sourceLod.value=Math.log2(t/zg);for(let u=0;u<=r;u++){const d=Ec.lodToRoughness(u,r);if(u>r-RM)l.roughness.value=d,this._renderCube(e,u,this._integrationMaterial);else{const f=d>0?Math.log2(t)+.5*Math.log2(6/(Bg*Math.pow(d,4)))+.5:0;o.roughness.value=d,o.lodBias.value=f,this._renderCube(e,u,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=IM());const r=this._blurMaterial,o=r.uniforms,l=this._sourceTarget;o.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,o.envMap.value=l.texture,this._renderCube(e,0,r),o.envMap.value=e.texture,this._renderCube(l,0,r)}}function A0(s,e,t){return new tf(s,{minFilter:Jr,generateMipmaps:e,type:ar,colorSpace:mc,depthBuffer:t})}function Ao(s,e,t){return new Es({name:s,uniforms:e,vertexShader:Tt.cube_vert,fragmentShader:t,side:fi,blending:ga,depthTest:!1,depthWrite:!1})}function DM(){return Ao("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Bg}u

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
	`)}function LM(){return Ao("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:zg}},`

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
	`)}function IM(){return Ao("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${bM}
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
	`)}function C0(){return Ao("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function b0(){return Ao("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function UM(s){let e=new WeakMap,t=new WeakMap,r=null;function o(v,S=!1){return v==null?null:S?u(v):l(v)}function l(v){if(v&&v.isTexture){const S=v.mapping;if(S===hh||S===dh)if(e.has(v)){const w=e.get(v).texture;return d(w,v.mapping)}else{const w=v.image;if(w&&w.height>0){const R=new tf(w.height);return R.fromEquirectangularTexture(s,v),e.set(v,R),v.addEventListener("dispose",p),d(R.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture&&v.isPMREMTexture!==!0){const S=v.mapping,w=S===hh||S===dh,R=S===_a||S===So;if(w||R){let y=t.get(v);const x=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==x)return r===null&&(r=new Ec(s)),y=w?r.fromEquirectangular(v,y):r.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,t.set(v,y),y.texture;if(y!==void 0)return y.texture;{const D=v.image;return w&&D&&D.height>0||R&&D&&f(D)?(r===null&&(r=new Ec(s)),y=w?r.fromEquirectangular(v):r.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,t.set(v,y),v.addEventListener("dispose",_),y.texture):null}}}return v}function d(v,S){return S===hh?v.mapping=_a:S===dh&&(v.mapping=So),v}function f(v){let S=0;const w=6;for(let R=0;R<w;R++)v[R]!==void 0&&S++;return S===w}function p(v){const S=v.target;S.removeEventListener("dispose",p);const w=e.get(S);w!==void 0&&(e.delete(S),w.dispose())}function _(v){const S=v.target;S.removeEventListener("dispose",_);const w=t.get(S);w!==void 0&&(t.delete(S),w.dispose())}function M(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:M}}function OM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&hc("WebGLRenderer: "+r+" extension not supported."),o}}}function FM(s,e,t,r){const o={},l=new WeakMap,u=new FinalizationRegistry(w=>delete o[w]);function d(w){f(w.target)}function f(w){w.index!==null&&e.remove(w.index);for(const y in w.attributes)e.remove(w.attributes[y]);w.removeEventListener("dispose",d),delete o[w.id],u.unregister(w);const R=l.get(w);R&&(e.remove(R),l.delete(w)),r.releaseStatesOfGeometry(w),w.isInstancedBufferGeometry===!0&&delete w._maxInstanceCount,t.memory.geometries--}function p(w,R){return o[R.id]!==void 0||(R.addEventListener("dispose",d),o[R.id]=new WeakRef(R),u.register(R,R.id,R),t.memory.geometries++),R}function _(w){const R=w.attributes;for(const y in R)e.update(R[y],s.ARRAY_BUFFER)}function M(w){const R=w.index,y=w.attributes.position;let x=0;if(y===void 0)return;const D=R!==null?R.array.length:y.array.length/3-1,F=y.count>=65535?Ag:wg,P=new F(Math.ceil(D/3)*6,1),O=P.array;if(R!==null){const T=R.array;x=R.version;for(let E=0,Y=0;E<D;E+=3){const B=T[E+0],G=T[E+1],$=T[E+2];O[Y++]=B,O[Y++]=G,O[Y++]=G,O[Y++]=$,O[Y++]=$,O[Y++]=B}}else{x=y.version;for(let T=0,E=0;T<D;T+=3){const Y=T+0,B=T+1,G=T+2;O[E++]=Y,O[E++]=B,O[E++]=B,O[E++]=G,O[E++]=G,O[E++]=Y}}P.version=x;const I=l.get(w);I&&e.remove(I),l.set(w,P)}function v(w){const R=l.get(w);if(R){const y=w.index;y!==null&&R.version<y.version&&M(w)}else M(w);return l.get(w)}function S(){for(const w in o){const R=o[w].deref();R!==void 0&&f(R)}}return{get:p,update:_,getWireframeAttribute:v,dispose:S}}function kM(s,e,t){let r;function o(M){r=M}let l,u;function d(M){l=M.type,u=M.bytesPerElement}function f(M,v){s.drawElements(r,v,l,M*u),t.update(v,r,1)}function p(M,v,S){S!==0&&(s.drawElementsInstanced(r,v,l,M*u,S),t.update(v,r,S))}function _(M,v,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,l,M,0,S);let R=0;for(let y=0;y<S;y++)R+=v[y];t.update(R,r,1)}this.setMode=o,this.setIndex=d,this.render=f,this.renderInstances=p,this.renderMultiDraw=_}function BM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=d*(l/3);break;case s.LINES:t.lines+=d*(l/2);break;case s.LINE_STRIP:t.lines+=d*(l-1);break;case s.LINE_LOOP:t.lines+=d*l;break;case s.POINTS:t.points+=d*l;break;default:kt("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function zM(s,e,t){const r=new WeakMap,o=new hn;function l(u,d,f){const p=u.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,M=_!==void 0?_.length:0;let v=r.get(d);if(v===void 0||v.count!==M){let B=function(){E.dispose(),r.delete(d),d.removeEventListener("dispose",B)};var S=B;v!==void 0&&v.texture.dispose();const w=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],F=d.morphAttributes.color||[];let P=0;w===!0&&(P=1),R===!0&&(P=2),y===!0&&(P=3);let O=d.attributes.position.count*P,I=1;O>e.maxTextureSize&&(I=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const T=new Float32Array(O*I*4*M),E=new Tg(T,O,I,M);E.type=nr,E.needsUpdate=!0;const Y=P*4;for(let G=0;G<M;G++){const $=x[G],te=D[G],V=F[G],ue=O*I*4*G;for(let le=0;le<$.count;le++){const J=le*Y;w===!0&&(o.fromBufferAttribute($,le),T[ue+J+0]=o.x,T[ue+J+1]=o.y,T[ue+J+2]=o.z,T[ue+J+3]=0),R===!0&&(o.fromBufferAttribute(te,le),T[ue+J+4]=o.x,T[ue+J+5]=o.y,T[ue+J+6]=o.z,T[ue+J+7]=0),y===!0&&(o.fromBufferAttribute(V,le),T[ue+J+8]=o.x,T[ue+J+9]=o.y,T[ue+J+10]=o.z,T[ue+J+11]=V.itemSize===4?o.w:1)}}v={count:M,texture:E,size:new Xe(O,I)},r.set(d,v),d.addEventListener("dispose",B)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let w=0;for(let y=0;y<p.length;y++)w+=p[y];const R=d.morphTargetsRelative?1:1-w;f.getUniforms().setValue(s,"morphTargetBaseInfluence",R),f.getUniforms().setValue(s,"morphTargetInfluences",p)}f.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:l}}function HM(s,e,t,r,o){let l=new WeakMap;function u(p){const _=o.render.frame,M=p.geometry,v=e.get(p,M);if(l.get(v)!==_&&(e.update(v),l.set(v,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),l.get(p)!==_&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,_))),p.isSkinnedMesh){const S=p.skeleton;l.get(S)!==_&&(S.update(),l.set(S,_))}return v}function d(){l=new WeakMap}function f(p){const _=p.target;_.removeEventListener("dispose",f),r.releaseStatesOfObject(_),t.remove(_.instanceMatrix),_.instanceColor!==null&&t.remove(_.instanceColor)}return{update:u,dispose:d}}const VM={[ng]:"LINEAR_TONE_MAPPING",[ig]:"REINHARD_TONE_MAPPING",[rg]:"CINEON_TONE_MAPPING",[Hd]:"ACES_FILMIC_TONE_MAPPING",[ag]:"AGX_TONE_MAPPING",[og]:"NEUTRAL_TONE_MAPPING",[sg]:"CUSTOM_TONE_MAPPING"};function GM(s,e,t,r,o,l){const u=new rr(e,t,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,f=null,p=null;const _=new Qn;_.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),_.setAttribute("uv",new qt([0,2,0,0,2,0],2));const M=new b1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new Ft(_,M),S=new Og(-1,1,1,-1,0,1);let w=null,R=null,y=!1,x,D=null,F=[],P=!1;this.setSize=function(O,I){u.setSize(O,I),d!==null&&d.setSize(O,I),f!==null&&f.setSize(O,I);for(let T=0;T<F.length;T++){const E=F[T];E.setSize&&E.setSize(O,I)}},this.setEffects=function(O){F=O,P=F.length>0&&F[0].isRenderPass===!0;const I=u.width,T=u.height;F.length>0&&d===null&&(d=new rr(I,T,{type:ar,depthBuffer:!1,stencilBuffer:!1}),f=new rr(I,T,{type:ar,depthBuffer:!1,stencilBuffer:!1}));const E=o===!0&&F.some(Y=>Y.needsDepthTexture===!0);E!==(u.depthTexture!==null)&&(E===!0&&p===null&&(p=new ya(I,T),l===!0&&(p.format=es,p.type=xa)),u.dispose(),u.depthTexture=E?p:null,u.resolveDepthBuffer=E,u.storeMultisampledDepthBuffer=E);for(let Y=0;Y<F.length;Y++){const B=F[Y];B.setSize&&B.setSize(I,T),E&&B.needsDepthTexture===!0&&B.setDepthTexture&&B.setDepthTexture(p)}},this.begin=function(O,I){if(y||O.toneMapping===Er&&F.length===0)return!1;if(D=I,I!==null){const T=I.width,E=I.height;(u.width!==T||u.height!==E)&&this.setSize(T,E)}return P===!1&&O.setRenderTarget(u),x=O.toneMapping,O.toneMapping=Er,!0},this.hasRenderPass=function(){return P},this.end=function(O,I){O.toneMapping=x,y=!0;let T=u,E=d;for(let Y=0;Y<F.length;Y++){const B=F[Y];B.enabled!==!1&&(B.render(O,E,T,I),B.needsSwap!==!1&&(T=E,E=E===d?f:d))}if(w!==O.outputColorSpace||R!==O.toneMapping){w=O.outputColorSpace,R=O.toneMapping,M.defines={},Lt.getTransfer(w)===Yt&&(M.defines.SRGB_TRANSFER="");const Y=VM[R];Y&&(M.defines[Y]=""),M.needsUpdate=!0}M.uniforms.tDiffuse.value=T.texture,O.setRenderTarget(D),O.render(v,S),D=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){u.dispose(),d!==null&&d.dispose(),f!==null&&f.dispose(),_.dispose(),M.dispose()}}const Hg=new Zn,Vg=new ya(1,1),Gg=new Rg(1),Wg=new Tg,jg=new Gx,Xg=new bg,R0=[],N0=[],P0=new Float32Array(16),D0=new Float32Array(9),L0=new Float32Array(4);function Ma(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=R0[o];if(l===void 0&&(l=new Float32Array(o),R0[o]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,s[u].toArray(l,d)}return l}function Rn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function Nn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Rc(s,e){let t=N0[e];t===void 0&&(t=new Int32Array(e),N0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function WM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function jM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;s.uniform2fv(this.addr,e),Nn(t,e)}}function XM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rn(t,e))return;s.uniform3fv(this.addr,e),Nn(t,e)}}function KM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;s.uniform4fv(this.addr,e),Nn(t,e)}}function YM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Rn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Nn(t,e)}else{if(Rn(t,r))return;L0.set(r),s.uniformMatrix2fv(this.addr,!1,L0),Nn(t,r)}}function qM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Rn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Nn(t,e)}else{if(Rn(t,r))return;D0.set(r),s.uniformMatrix3fv(this.addr,!1,D0),Nn(t,r)}}function $M(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Rn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Nn(t,e)}else{if(Rn(t,r))return;P0.set(r),s.uniformMatrix4fv(this.addr,!1,P0),Nn(t,r)}}function ZM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function QM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;s.uniform2iv(this.addr,e),Nn(t,e)}}function JM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rn(t,e))return;s.uniform3iv(this.addr,e),Nn(t,e)}}function eT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;s.uniform4iv(this.addr,e),Nn(t,e)}}function tT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function nT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;s.uniform2uiv(this.addr,e),Nn(t,e)}}function iT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rn(t,e))return;s.uniform3uiv(this.addr,e),Nn(t,e)}}function rT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;s.uniform4uiv(this.addr,e),Nn(t,e)}}function Nc(s){return s.version===0&&(s.compareFunction=_g,s.needsUpdate=!0),s}function sT(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?l=Nc(Vg):l=Hg,t.setTexture2D(e||l,o)}function aT(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||jg,o)}function oT(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_CUBE_SHADOW?l=Nc(Gg):l=Xg,t.setTextureCube(e||l,o)}function lT(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Wg,o)}function cT(s){switch(s){case 5126:return WM;case 35664:return jM;case 35665:return XM;case 35666:return KM;case 35674:return YM;case 35675:return qM;case 35676:return $M;case 5124:case 35670:return ZM;case 35667:case 35671:return QM;case 35668:case 35672:return JM;case 35669:case 35673:return eT;case 5125:return tT;case 36294:return nT;case 36295:return iT;case 36296:return rT;case 35678:case 36198:case 36298:case 36306:case 35682:return sT;case 35679:case 36299:case 36307:return aT;case 35680:case 36300:case 36308:case 36293:return oT;case 36289:case 36303:case 36311:case 36292:return lT}}function uT(s,e){s.uniform1fv(this.addr,e)}function hT(s,e){const t=Ma(e,this.size,2);s.uniform2fv(this.addr,t)}function dT(s,e){const t=Ma(e,this.size,3);s.uniform3fv(this.addr,t)}function fT(s,e){const t=Ma(e,this.size,4);s.uniform4fv(this.addr,t)}function pT(s,e){const t=Ma(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function mT(s,e){const t=Ma(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function gT(s,e){const t=Ma(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function vT(s,e){s.uniform1iv(this.addr,e)}function _T(s,e){s.uniform2iv(this.addr,e)}function xT(s,e){s.uniform3iv(this.addr,e)}function yT(s,e){s.uniform4iv(this.addr,e)}function ST(s,e){s.uniform1uiv(this.addr,e)}function MT(s,e){s.uniform2uiv(this.addr,e)}function TT(s,e){s.uniform3uiv(this.addr,e)}function ET(s,e){s.uniform4uiv(this.addr,e)}function wT(s,e,t){const r=this.cache,o=e.length,l=Rc(t,o);Rn(r,l)||(s.uniform1iv(this.addr,l),Nn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=Nc(Vg):u=Hg;for(let d=0;d!==o;++d)t.setTexture2D(e[d]||u,l[d])}function AT(s,e,t){const r=this.cache,o=e.length,l=Rc(t,o);Rn(r,l)||(s.uniform1iv(this.addr,l),Nn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||jg,l[u])}function CT(s,e,t){const r=this.cache,o=e.length,l=Rc(t,o);Rn(r,l)||(s.uniform1iv(this.addr,l),Nn(r,l));let u;this.type===s.SAMPLER_CUBE_SHADOW?u=Nc(Gg):u=Xg;for(let d=0;d!==o;++d)t.setTextureCube(e[d]||u,l[d])}function bT(s,e,t){const r=this.cache,o=e.length,l=Rc(t,o);Rn(r,l)||(s.uniform1iv(this.addr,l),Nn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Wg,l[u])}function RT(s){switch(s){case 5126:return uT;case 35664:return hT;case 35665:return dT;case 35666:return fT;case 35674:return pT;case 35675:return mT;case 35676:return gT;case 5124:case 35670:return vT;case 35667:case 35671:return _T;case 35668:case 35672:return xT;case 35669:case 35673:return yT;case 5125:return ST;case 36294:return MT;case 36295:return TT;case 36296:return ET;case 35678:case 36198:case 36298:case 36306:case 35682:return wT;case 35679:case 36299:case 36307:return AT;case 35680:case 36300:case 36308:case 36293:return CT;case 36289:case 36303:case 36311:case 36292:return bT}}class NT{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=cT(t.type)}}class PT{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=RT(t.type)}}class DT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const d=o[l];d.setValue(e,t[d.id],r)}}}const Gh=/(\w+)(\])?(\[|\.)?/g;function I0(s,e){s.seq.push(e),s.map[e.id]=e}function LT(s,e,t){const r=s.name,o=r.length;for(Gh.lastIndex=0;;){const l=Gh.exec(r),u=Gh.lastIndex;let d=l[1];const f=l[2]==="]",p=l[3];if(f&&(d=d|0),p===void 0||p==="["&&u+2===o){I0(t,p===void 0?new NT(d,s,e):new PT(d,s,e));break}else{let M=t.map[d];M===void 0&&(M=new DT(d),I0(t,M)),t=M}}}class dc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(t,u),f=e.getUniformLocation(t,d.name);LT(d,f,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const d=t[l],f=r[d.id];f.needsUpdate!==!1&&d.setValue(e,f.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function U0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const IT=37297;let UT=0;function OT(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return r.join(`
`)}const O0=new yt;function FT(s){Lt._getMatrix(O0,Lt.workingColorSpace,s);const e=`mat3( ${O0.elements.map(t=>t.toFixed(4))} )`;switch(Lt.getTransfer(s)){case gc:return[e,"LinearTransferOETF"];case Yt:return[e,"sRGBTransferOETF"];default:return gt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function F0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+OT(s.getShaderSource(e),d)}else return l}function kT(s,e){const t=FT(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const BT={[ng]:"Linear",[ig]:"Reinhard",[rg]:"Cineon",[Hd]:"ACESFilmic",[ag]:"AgX",[og]:"Neutral",[sg]:"Custom"};function zT(s,e){const t=BT[e];return t===void 0?(gt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const rc=new A;function HT(){Lt.getLuminanceCoefficients(rc);const s=rc.x.toFixed(4),e=rc.y.toFixed(4),t=rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mo).join(`
`)}function GT(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function WT(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return t}function mo(s){return s!==""}function k0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function B0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jT=/^[ \t]*#include +<([\w\d./]+)>/gm;function kd(s){return s.replace(jT,XT)}function XT(s,e){const t=Tt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return kd(t)}const KT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function z0(s){return s.replace(KT,YT)}function YT(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function H0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const qT={[ac]:"SHADOWMAP_TYPE_PCF",[po]:"SHADOWMAP_TYPE_VSM"};function $T(s){return qT[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ZT={[So]:"ENVMAP_MODE_REFRACTION"};function QT(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":ZT[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const JT={[tg]:"ENVMAP_BLENDING_MULTIPLY",[yx]:"ENVMAP_BLENDING_MIX",[Sx]:"ENVMAP_BLENDING_ADD"};function eE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":JT[s.combine]||"ENVMAP_BLENDING_NONE"}function tE(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const f=$T(t),p=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",_=QT(t),M=eE(t),v=VT(t),S=GT(l),w=o.createProgram();let R,y,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(R=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(mo).join(`
`),R.length>0&&(R+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(mo).join(`
`),y.length>0&&(y+=`
`)):(R=[H0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mo).join(`
`),y=[H0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",t.envMap?"#define "+M:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Er?"#define TONE_MAPPING":"",t.toneMapping!==Er?Tt.tonemapping_pars_fragment:"",t.toneMapping!==Er?zT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,kT("linearToOutputTexel",t.outputColorSpace),HT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mo).join(`
`)),u=kd(u),u=k0(u,t),u=B0(u,t),d=kd(d),d=k0(d,t),d=B0(d,t),u=z0(u),d=z0(d),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,R=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+R,y=["#define varying in",t.glslVersion===zm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const D=x+R+u,F=x+y+d,P=U0(o,o.VERTEX_SHADER,D),O=U0(o,o.FRAGMENT_SHADER,F);o.attachShader(w,P),o.attachShader(w,O),t.index0AttributeName!==void 0?o.bindAttribLocation(w,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function I(B){if(s.debug.checkShaderErrors){const G=o.getProgramInfoLog(w)||"",$=o.getShaderInfoLog(P)||"",te=o.getShaderInfoLog(O)||"",V=G.trim(),ue=$.trim(),le=te.trim();let J=!0,ne=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,w,P,O);else{const Q=F0(o,P,"vertex"),ee=F0(o,O,"fragment");kt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+V+`
`+Q+`
`+ee)}else V!==""?gt("WebGLProgram: Program Info Log:",V):(ue===""||le==="")&&(ne=!1);ne&&(B.diagnostics={runnable:J,programLog:V,vertexShader:{log:ue,prefix:R},fragmentShader:{log:le,prefix:y}})}o.deleteShader(P),o.deleteShader(O),T=new dc(o,w),E=WT(o,w)}let T;this.getUniforms=function(){return T===void 0&&I(this),T};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let Y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=o.getProgramParameter(w,IT)),Y},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=UT++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=P,this.fragmentShader=O,this}let nE=0;class iE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new rE(e),t.set(e,r)),r}}class rE{constructor(e){this.id=nE++,this.code=e,this.usedTimes=0}}function sE(s){return s===Ts||s===fc||s===pc}function aE(s,e,t,r,o,l){const u=new qd,d=new iE,f=new Set,p=[],_=new Map,M=r.logarithmicDepthBuffer,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(T){return f.add(T),T===0?"uv":`uv${T}`}function w(T,E,Y,B,G,$){const te=B.fog,V=G.geometry,ue=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?B.environment:null,le=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,J=e.get(T.envMap||ue,le),ne=v[T.type];let Q=r.precision;T.precision!==null&&(Q=r.getMaxPrecision(T.precision),Q!==T.precision&&gt("WebGLProgram.getParameters:",T.precision,"not supported, using",Q,"instead."));const ee=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,U=ee!==void 0?ee.length:0;let ie=0;V.morphAttributes.position!==void 0&&(ie=1),V.morphAttributes.normal!==void 0&&(ie=2),V.morphAttributes.color!==void 0&&(ie=3);let Fe,se,we,Ce;if(ne){const Ne=tr[ne];Fe=Ne.vertexShader,se=Ne.fragmentShader}else{Fe=T.vertexShader,se=T.fragmentShader;const Ne=d.getVertexShaderStage(T),lt=d.getFragmentShaderStage(T);d.update(T,Ne,lt),we=Ne.id,Ce=lt.id}const He=s.getRenderTarget(),Ee=s.state.buffers.depth.getReversed(),Ke=G.isInstancedMesh===!0,st=G.isBatchedMesh===!0,at=!!T.map,ct=!!T.matcap,At=!!J,_t=At&&J.isPMREMTexture===!0,tn=!!T.aoMap,Xt=!!T.lightMap,ln=!!T.bumpMap&&T.wireframe===!1,It=!!T.normalMap,Sn=!!T.displacementMap,Bt=!!T.emissiveMap,$t=!!T.metalnessMap,fe=!!T.roughnessMap,ze=T.anisotropy>0,H=T.clearcoat>0,it=T.diffuseRoughness>0,ut=T.dispersion>0,ft=T.retroreflectivity>0,Ae=T.iridescence>0,xt=T.sheen>0,Te=T.transmission>0,je=ze&&!!T.anisotropyMap,L=H&&!!T.clearcoatMap,b=H&&!!T.clearcoatNormalMap,K=H&&!!T.clearcoatRoughnessMap,ve=it&&!!T.diffuseRoughnessMap,Me=Ae&&!!T.iridescenceMap,Pe=Ae&&!!T.iridescenceThicknessMap,Ue=xt&&!!T.sheenColorMap,ge=xt&&!!T.sheenRoughnessMap,_e=!!T.specularMap,Le=!!T.specularColorMap,z=!!T.specularIntensityMap,xe=Te&&!!T.transmissionMap,W=Te&&!!T.thicknessMap,q=!!T.gradientMap,ye=!!T.alphaMap,ce=T.alphaTest>0,Se=!!T.alphaHash,Ve=!!T.extensions;let me=Er;T.toneMapped&&(He===null||He.isXRRenderTarget===!0)&&(me=s.toneMapping);const Ie=_t?J.isCompressedCubeTexture?J.image[0].mipmaps:J.mipmaps:null,Ze={shaderID:ne,shaderType:T.type,shaderName:T.name,vertexShader:Fe,fragmentShader:se,defines:T.defines,customVertexShaderID:we,customFragmentShaderID:Ce,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:Q,batching:st,batchingColor:st&&G._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&G.instanceColor!==null,instancingMorph:Ke&&G.morphTexture!==null,outputColorSpace:He===null?s.outputColorSpace:He.isXRRenderTarget===!0?He.texture.colorSpace:Lt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:at,matcap:ct,envMap:At,envMapMode:At&&J.mapping,envMapPMREM:_t,envMapMaxLod:_t?Ie.length-1:null,envMapSize:_t?Ie[0].width:null,aoMap:tn,lightMap:Xt,bumpMap:ln,normalMap:It,displacementMap:Sn,emissiveMap:Bt,normalMapObjectSpace:It&&T.normalMapType===Ex,normalMapTangentSpace:It&&T.normalMapType===Dd,packedNormalMap:It&&T.normalMapType===Dd&&sE(T.normalMap.format),metalnessMap:$t,roughnessMap:fe,anisotropy:ze,anisotropyMap:je,clearcoat:H,clearcoatMap:L,clearcoatNormalMap:b,clearcoatRoughnessMap:K,diffuseRoughness:it,diffuseRoughnessMap:ve,dispersion:ut,retroreflection:ft,iridescence:Ae,iridescenceMap:Me,iridescenceThicknessMap:Pe,sheen:xt,sheenColorMap:Ue,sheenRoughnessMap:ge,specularMap:_e,specularColorMap:Le,specularIntensityMap:z,transmission:Te,transmissionMap:xe,thicknessMap:W,gradientMap:q,opaque:T.transparent===!1&&T.blending===go&&T.alphaToCoverage===!1,alphaMap:ye,alphaTest:ce,alphaHash:Se,combine:T.combine,mapUv:at&&S(T.map.channel),aoMapUv:tn&&S(T.aoMap.channel),lightMapUv:Xt&&S(T.lightMap.channel),bumpMapUv:ln&&S(T.bumpMap.channel),normalMapUv:It&&S(T.normalMap.channel),displacementMapUv:Sn&&S(T.displacementMap.channel),emissiveMapUv:Bt&&S(T.emissiveMap.channel),metalnessMapUv:$t&&S(T.metalnessMap.channel),roughnessMapUv:fe&&S(T.roughnessMap.channel),anisotropyMapUv:je&&S(T.anisotropyMap.channel),clearcoatMapUv:L&&S(T.clearcoatMap.channel),clearcoatNormalMapUv:b&&S(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&S(T.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ve&&S(T.diffuseRoughnessMap.channel),iridescenceMapUv:Me&&S(T.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&S(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&S(T.sheenColorMap.channel),sheenRoughnessMapUv:ge&&S(T.sheenRoughnessMap.channel),specularMapUv:_e&&S(T.specularMap.channel),specularColorMapUv:Le&&S(T.specularColorMap.channel),specularIntensityMapUv:z&&S(T.specularIntensityMap.channel),transmissionMapUv:xe&&S(T.transmissionMap.channel),thicknessMapUv:W&&S(T.thicknessMap.channel),alphaMapUv:ye&&S(T.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(It||ze),vertexNormals:!!V.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!V.attributes.uv&&(at||ye),fog:!!te,useFog:T.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||V.attributes.normal===void 0&&It===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:M,reversedDepthBuffer:Ee,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ie,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:$.filter(Ne=>Ne.texture!==null).length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&Y.length>0,shadowMapType:s.shadowMap.type,toneMapping:me,decodeVideoTexture:at&&T.map.isVideoTexture===!0&&Lt.getTransfer(T.map.colorSpace)===Yt,decodeVideoTextureEmissive:Bt&&T.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(T.emissiveMap.colorSpace)===Yt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Gi,flipSided:T.side===fi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ve&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&T.extensions.multiDraw===!0||st)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ze.vertexUv1s=f.has(1),Ze.vertexUv2s=f.has(2),Ze.vertexUv3s=f.has(3),f.clear(),Ze}function R(T){const E=[];if(T.shaderID?E.push(T.shaderID):(E.push(T.customVertexShaderID),E.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Y in T.defines)E.push(Y),E.push(T.defines[Y]);return T.isRawShaderMaterial===!1&&(y(E,T),x(E,T),E.push(s.outputColorSpace)),E.push(T.customProgramCacheKey),E.join()}function y(T,E){T.push(E.precision),T.push(E.outputColorSpace),T.push(E.envMapMode),T.push(E.envMapPMREM),T.push(E.envMapMaxLod),T.push(E.envMapSize),T.push(E.mapUv),T.push(E.alphaMapUv),T.push(E.lightMapUv),T.push(E.aoMapUv),T.push(E.bumpMapUv),T.push(E.normalMapUv),T.push(E.displacementMapUv),T.push(E.emissiveMapUv),T.push(E.metalnessMapUv),T.push(E.roughnessMapUv),T.push(E.anisotropyMapUv),T.push(E.clearcoatMapUv),T.push(E.clearcoatNormalMapUv),T.push(E.clearcoatRoughnessMapUv),T.push(E.diffuseRoughnessMapUv),T.push(E.iridescenceMapUv),T.push(E.iridescenceThicknessMapUv),T.push(E.sheenColorMapUv),T.push(E.sheenRoughnessMapUv),T.push(E.specularMapUv),T.push(E.specularColorMapUv),T.push(E.specularIntensityMapUv),T.push(E.transmissionMapUv),T.push(E.thicknessMapUv),T.push(E.combine),T.push(E.fogExp2),T.push(E.sizeAttenuation),T.push(E.morphTargetsCount),T.push(E.numSunLights),T.push(E.numDirLights),T.push(E.numPointLights),T.push(E.numSpotLights),T.push(E.numSpotLightMaps),T.push(E.numHemiLights),T.push(E.numRectAreaLights),T.push(E.numSunLightShadows),T.push(E.numDirLightShadows),T.push(E.numPointLightShadows),T.push(E.numSpotLightShadows),T.push(E.numSpotLightShadowsWithMaps),T.push(E.numLightProbes),T.push(E.numLightProbeGrids),T.push(E.shadowMapType),T.push(E.toneMapping),T.push(E.numClippingPlanes),T.push(E.numClipIntersection),T.push(E.depthPacking)}function x(T,E){u.disableAll(),E.instancing&&u.enable(0),E.instancingColor&&u.enable(1),E.instancingMorph&&u.enable(2),E.matcap&&u.enable(3),E.envMap&&u.enable(4),E.normalMapObjectSpace&&u.enable(5),E.normalMapTangentSpace&&u.enable(6),E.clearcoat&&u.enable(7),E.iridescence&&u.enable(8),E.alphaTest&&u.enable(9),E.vertexColors&&u.enable(10),E.vertexAlphas&&u.enable(11),E.vertexUv1s&&u.enable(12),E.vertexUv2s&&u.enable(13),E.vertexUv3s&&u.enable(14),E.vertexTangents&&u.enable(15),E.anisotropy&&u.enable(16),E.alphaHash&&u.enable(17),E.batching&&u.enable(18),E.dispersion&&u.enable(19),E.retroreflection&&u.enable(24),E.diffuseRoughness&&u.enable(25),E.batchingColor&&u.enable(20),E.gradientMap&&u.enable(21),E.packedNormalMap&&u.enable(22),E.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),E.fog&&u.enable(0),E.useFog&&u.enable(1),E.flatShading&&u.enable(2),E.logarithmicDepthBuffer&&u.enable(3),E.reversedDepthBuffer&&u.enable(4),E.skinning&&u.enable(5),E.morphTargets&&u.enable(6),E.morphNormals&&u.enable(7),E.morphColors&&u.enable(8),E.premultipliedAlpha&&u.enable(9),E.shadowMapEnabled&&u.enable(10),E.doubleSided&&u.enable(11),E.flipSided&&u.enable(12),E.useDepthPacking&&u.enable(13),E.dithering&&u.enable(14),E.transmission&&u.enable(15),E.sheen&&u.enable(16),E.opaque&&u.enable(17),E.pointsUvs&&u.enable(18),E.decodeVideoTexture&&u.enable(19),E.decodeVideoTextureEmissive&&u.enable(20),E.alphaToCoverage&&u.enable(21),E.numLightProbeGrids>0&&u.enable(22),E.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function D(T){const E=v[T.type];let Y;if(E){const B=tr[E];Y=w1.clone(B.uniforms)}else Y=T.uniforms;return Y}function F(T,E){let Y=_.get(E);return Y!==void 0?++Y.usedTimes:(Y=new tE(s,E,T,o),p.push(Y),_.set(E,Y)),Y}function P(T){if(--T.usedTimes===0){const E=p.indexOf(T);p[E]=p[p.length-1],p.pop(),_.delete(T.cacheKey),T.destroy()}}function O(T){d.remove(T)}function I(){d.dispose()}return{getParameters:w,getProgramCacheKey:R,getUniforms:D,acquireProgram:F,releaseProgram:P,releaseShaderCache:O,programs:p,dispose:I}}function oE(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function o(u,d,f){s.get(u)[d]=f}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function lE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function V0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function G0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(v){let S=0;return v.isInstancedMesh&&(S+=2),v.isSkinnedMesh&&(S+=1),S}function d(v,S,w,R,y,x){let D=s[e];return D===void 0?(D={id:v.id,object:v,geometry:S,material:w,materialVariant:u(v),groupOrder:R,renderOrder:v.renderOrder,z:y,group:x},s[e]=D):(D.id=v.id,D.object=v,D.geometry=S,D.material=w,D.materialVariant=u(v),D.groupOrder=R,D.renderOrder=v.renderOrder,D.z=y,D.group=x),e++,D}function f(v,S,w,R,y,x,D){D.reversedDepth===!0&&(y=-y);const F=d(v,S,w,R,y,x);w.transmission>0?r.push(F):w.transparent===!0?o.push(F):t.push(F)}function p(v,S,w,R,y,x){const D=d(v,S,w,R,y,x);w.transmission>0?r.unshift(D):w.transparent===!0?o.unshift(D):t.unshift(D)}function _(v,S){t.length>1&&t.sort(v||lE),r.length>1&&r.sort(S||V0),o.length>1&&o.sort(S||V0)}function M(){for(let v=e,S=s.length;v<S;v++){const w=s[v];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:f,unshift:p,finish:M,sort:_}}function cE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new G0,s.set(r,[u])):o>=l.length?(u=new G0,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function uE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new A,color:new wt};break;case"SpotLight":t={position:new A,direction:new A,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new wt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":t={color:new wt,position:new A,halfWidth:new A,halfHeight:new A};break}return s[e.id]=t,t}}}function hE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let dE=0;function fE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function pE(s){const e=new uE,t=hE(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new A);const o=new A,l=new Jt,u=new Jt;function d(p){let _=0,M=0,v=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let S=0,w=0,R=0,y=0,x=0,D=0,F=0,P=0,O=0,I=0,T=0,E=0,Y=0,B=0;p.sort(fE);for(let $=0,te=p.length;$<te;$++){const V=p[$],ue=V.color,le=V.intensity,J=V.distance;let ne=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Ts?ne=V.shadow.map.texture:ne=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)_+=ue.r*le,M+=ue.g*le,v+=ue.b*le;else if(V.isLightProbe){for(let Q=0;Q<9;Q++)r.probe[Q].addScaledVector(V.sh.coefficients[Q],le);B++}else if(V.isSunLight){const Q=e.get(V);if(Q.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const ee=V.shadow,U=t.get(V);U.shadowIntensity=ee.intensity,U.shadowBias=ee.bias,U.shadowNormalBias=ee.normalBias,U.shadowRadius=ee.radius,U.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),r.sunShadow[w]=U,r.sunShadowMap[w]=ne;const ie=ee.getViewportCount();for(let Fe=0;Fe<ie;Fe++)r.sunShadowMatrix[R+Fe]=ee.getMatrix(Fe),r.sunShadowCascade[R+Fe]=ee._cascadeData[Fe];R+=ie,w++}r.sun[S]=Q,S++}else if(V.isDirectionalLight){const Q=e.get(V);if(Q.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const ee=V.shadow,U=t.get(V);U.shadowIntensity=ee.intensity,U.shadowBias=ee.bias,U.shadowNormalBias=ee.normalBias,U.shadowRadius=ee.radius,U.shadowMapSize=ee.mapSize,r.directionalShadow[y]=U,r.directionalShadowMap[y]=ne,r.directionalShadowMatrix[y]=V.shadow.matrix,O++}r.directional[y]=Q,y++}else if(V.isSpotLight){const Q=e.get(V);Q.position.setFromMatrixPosition(V.matrixWorld),Q.color.copy(ue).multiplyScalar(le),Q.distance=J,Q.coneCos=Math.cos(V.angle),Q.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),Q.decay=V.decay,r.spot[D]=Q;const ee=V.shadow;if(V.map&&(r.spotLightMap[E]=V.map,E++,ee.updateMatrices(V),V.castShadow&&Y++),r.spotLightMatrix[D]=ee.matrix,V.castShadow){const U=t.get(V);U.shadowIntensity=ee.intensity,U.shadowBias=ee.bias,U.shadowNormalBias=ee.normalBias,U.shadowRadius=ee.radius,U.shadowMapSize=ee.mapSize,r.spotShadow[D]=U,r.spotShadowMap[D]=ne,T++}D++}else if(V.isRectAreaLight){const Q=e.get(V);Q.color.copy(ue).multiplyScalar(le),Q.halfWidth.set(V.width*.5,0,0),Q.halfHeight.set(0,V.height*.5,0),r.rectArea[F]=Q,F++}else if(V.isPointLight){const Q=e.get(V);if(Q.color.copy(V.color).multiplyScalar(V.intensity),Q.distance=V.distance,Q.decay=V.decay,V.castShadow){const ee=V.shadow,U=t.get(V);U.shadowIntensity=ee.intensity,U.shadowBias=ee.bias,U.shadowNormalBias=ee.normalBias,U.shadowRadius=ee.radius,U.shadowMapSize=ee.mapSize,U.shadowCameraNear=ee.camera.near,U.shadowCameraFar=ee.camera.far,r.pointShadow[x]=U,r.pointShadowMap[x]=ne,r.pointShadowMatrix[x]=V.shadow.matrix,I++}r.point[x]=Q,x++}else if(V.isHemisphereLight){const Q=e.get(V);Q.skyColor.copy(V.color).multiplyScalar(le),Q.groundColor.copy(V.groundColor).multiplyScalar(le),r.hemi[P]=Q,P++}}F>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=We.LTC_FLOAT_1,r.rectAreaLTC2=We.LTC_FLOAT_2):(r.rectAreaLTC1=We.LTC_HALF_1,r.rectAreaLTC2=We.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=M,r.ambient[2]=v;const G=r.hash;(G.sunLength!==S||G.directionalLength!==y||G.pointLength!==x||G.spotLength!==D||G.rectAreaLength!==F||G.hemiLength!==P||G.numSunShadows!==w||G.numDirectionalShadows!==O||G.numPointShadows!==I||G.numSpotShadows!==T||G.numSpotMaps!==E||G.numLightProbes!==B)&&(r.sun.length=S,r.directional.length=y,r.spot.length=D,r.rectArea.length=F,r.point.length=x,r.hemi.length=P,r.sunShadow.length=w,r.sunShadowMap.length=w,r.sunShadowMatrix.length=R,r.sunShadowCascade.length=R,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.directionalShadowMatrix.length=O,r.pointShadow.length=I,r.pointShadowMap.length=I,r.pointShadowMatrix.length=I,r.spotShadow.length=T,r.spotShadowMap.length=T,r.spotLightMatrix.length=T+E-Y,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=Y,r.numLightProbes=B,G.sunLength=S,G.directionalLength=y,G.pointLength=x,G.spotLength=D,G.rectAreaLength=F,G.hemiLength=P,G.numSunShadows=w,G.numDirectionalShadows=O,G.numPointShadows=I,G.numSpotShadows=T,G.numSpotMaps=E,G.numLightProbes=B,r.version=dE++)}function f(p,_){let M=0,v=0,S=0,w=0,R=0,y=0;const x=_.matrixWorldInverse;for(let D=0,F=p.length;D<F;D++){const P=p[D];if(P.isSunLight){const O=r.sun[M];O.direction.setFromMatrixPosition(P.matrixWorld),O.direction.transformDirection(x),M++}else if(P.isDirectionalLight){const O=r.directional[v];O.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),O.direction.sub(o),O.direction.transformDirection(x),v++}else if(P.isSpotLight){const O=r.spot[w];O.position.setFromMatrixPosition(P.matrixWorld),O.position.applyMatrix4(x),O.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),O.direction.sub(o),O.direction.transformDirection(x),w++}else if(P.isRectAreaLight){const O=r.rectArea[R];O.position.setFromMatrixPosition(P.matrixWorld),O.position.applyMatrix4(x),u.identity(),l.copy(P.matrixWorld),l.premultiply(x),u.extractRotation(l),O.halfWidth.set(P.width*.5,0,0),O.halfHeight.set(0,P.height*.5,0),O.halfWidth.applyMatrix4(u),O.halfHeight.applyMatrix4(u),R++}else if(P.isPointLight){const O=r.point[S];O.position.setFromMatrixPosition(P.matrixWorld),O.position.applyMatrix4(x),S++}else if(P.isHemisphereLight){const O=r.hemi[y];O.direction.setFromMatrixPosition(P.matrixWorld),O.direction.transformDirection(x),y++}}}return{setup:d,setupView:f,state:r}}function W0(s){const e=new pE(s),t=[],r=[],o=[];function l(M){_.camera=M,t.length=0,r.length=0,o.length=0}function u(M){M.isLightProbeGrid?o.push(M):t.push(M)}function d(M){r.push(M)}function f(){e.setup(t),o.sort((M,v)=>M.priority-v.priority||M.id-v.id)}function p(M){e.setupView(t,M)}const _={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:_,setupLights:f,setupLightsView:p,pushLight:u,pushShadow:d}}function mE(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let d;return u===void 0?(d=new W0(s),e.set(o,[d])):l>=u.length?(d=new W0(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const gE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vE=`uniform sampler2D shadow_pass;
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
}`,_E=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],xE=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],j0=new Jt,ho=new A,Wh=new A;function yE(s,e,t){let r=new Eo;const o=new Xe,l=new Xe,u=new hn,d=new R1,f=new N1,p={},_=t.maxTextureSize,M={[Ms]:fi,[fi]:Ms,[Gi]:Gi},v=new Es({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:gE,fragmentShader:vE}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const w=new Qn;w.setAttribute("position",new ts(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Ft(w,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ac;let x=this.type;this.render=function(I,T,E){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;this.type===Q0&&(gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ac);const Y=s.getRenderTarget(),B=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),$=s.state;$.setBlending(ga),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const te=x!==this.type;te&&T.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(ue=>ue.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,ue=I.length;V<ue;V++){const le=I[V],J=le.shadow;if(J===void 0){gt("WebGLShadowMap:",le,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;o.copy(J.mapSize);const ne=J.getFrameExtents();o.multiply(ne),l.copy(J.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(l.x=Math.floor(_/ne.x),o.x=l.x*ne.x,J.mapSize.x=l.x),o.y>_&&(l.y=Math.floor(_/ne.y),o.y=l.y*ne.y,J.mapSize.y=l.y));const Q=s.state.buffers.depth.getReversed();if(J.camera._reversedDepth=Q,J.map===null||te===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===po){if(le.isPointLight){gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new rr(o.x,o.y,{format:Ts,type:ar,minFilter:ii,magFilter:ii,generateMipmaps:!1}),J.map.texture.name=le.name+".shadowMap",J.map.depthTexture=new ya(o.x,o.y,nr),J.map.depthTexture.name=le.name+".shadowMapDepth",J.map.depthTexture.format=ns,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Hn,J.map.depthTexture.magFilter=Hn}else le.isPointLight?(J.map=new tf(o.x),J.map.depthTexture=new Rg(o.x,sr)):(J.map=new rr(o.x,o.y),J.map.depthTexture=new ya(o.x,o.y,sr)),J.map.depthTexture.name=le.name+".shadowMap",J.map.depthTexture.format=ns,this.type===ac?(J.map.depthTexture.compareFunction=Q?vg:gg,J.map.depthTexture.minFilter=ii,J.map.depthTexture.magFilter=ii):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Hn,J.map.depthTexture.magFilter=Hn);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==o.x||J.map.height!==o.y)&&J.map.setSize(o.x,o.y);const ee=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();le.isPointLight!==!0&&J.updateMatrices(le,E);const U=(J.camera.layers.mask&4294967294)!==0?J.camera.layers:E.layers;for(let ie=0;ie<ee;ie++){const Fe=J.getCamera(ie);if(le.isPointLight){const se=J.camera,we=J.matrix,Ce=le.distance||se.far;Ce!==se.far&&(se.far=Ce,se.updateProjectionMatrix()),ho.setFromMatrixPosition(le.matrixWorld),se.position.copy(ho),Wh.copy(se.position),Wh.add(_E[ie]),se.up.copy(xE[ie]),se.lookAt(Wh),se.updateMatrixWorld(),we.makeTranslation(-ho.x,-ho.y,-ho.z),j0.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),J._frustum.setFromProjectionMatrix(j0,se.coordinateSystem,se.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)s.setRenderTarget(J.map,ie),s.clear();else{ie===0&&(s.setRenderTarget(J.map),s.clear());const se=J.getViewport(ie);u.set(l.x*se.x,l.y*se.y,l.x*se.z,l.y*se.w),$.viewport(u)}r=J.getFrustum(ie),P(T,E,Fe,le,U,this.type)}J.isPointLightShadow!==!0&&this.type===po&&D(J,E),J.needsUpdate=!1}x=this.type,y.needsUpdate=!1,s.setRenderTarget(Y,B,G)};function D(I,T){const E=e.update(R);v.defines.VSM_SAMPLES!==I.blurSamples&&(v.defines.VSM_SAMPLES=I.blurSamples,S.defines.VSM_SAMPLES=I.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),I.mapPass===null?I.mapPass=new rr(o.x,o.y,{format:Ts,type:ar}):(I.mapPass.width!==I.map.width||I.mapPass.height!==I.map.height)&&I.mapPass.setSize(I.map.width,I.map.height),v.uniforms.shadow_pass.value=I.map.depthTexture,v.uniforms.resolution.value.set(I.map.width,I.map.height),v.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(T,null,E,v,R,null),S.uniforms.shadow_pass.value=I.mapPass.texture,S.uniforms.resolution.value.set(I.map.width,I.map.height),S.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(T,null,E,S,R,null)}function F(I,T,E,Y){let B=null;const G=E.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(G!==void 0)B=G;else if(B=E.isPointLight===!0?f:d,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const $=B.uuid,te=T.uuid;let V=p[$];V===void 0&&(V={},p[$]=V);let ue=V[te];ue===void 0&&(ue=B.clone(),V[te]=ue,T.addEventListener("dispose",O)),B=ue}if(B.visible=T.visible,B.wireframe=T.wireframe,Y===po?B.side=T.shadowSide!==null?T.shadowSide:T.side:B.side=T.shadowSide!==null?T.shadowSide:M[T.side],B.alphaMap=T.alphaMap,B.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,B.map=T.map,B.clipShadows=T.clipShadows,B.clippingPlanes=T.clippingPlanes,B.clipIntersection=T.clipIntersection,B.displacementMap=T.displacementMap,B.displacementScale=T.displacementScale,B.displacementBias=T.displacementBias,B.wireframeLinewidth=T.wireframeLinewidth,B.linewidth=T.linewidth,E.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const $=s.properties.get(B);$.light=E}return B}function P(I,T,E,Y,B,G){if(I.visible===!1)return;if(I.layers.test(B)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&G===po)&&(!I.frustumCulled||I.intersectsFrustum(r))){I.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,I.matrixWorld);const V=e.update(I),ue=I.material;if(Array.isArray(ue)){const le=V.groups;for(let J=0,ne=le.length;J<ne;J++){const Q=le[J],ee=ue[Q.materialIndex];if(ee&&ee.visible){const U=F(I,ee,Y,G);I.onBeforeShadow(s,I,T,E,V,U,Q),s.renderBufferDirect(E,null,V,U,I,Q),I.onAfterShadow(s,I,T,E,V,U,Q)}}}else if(ue.visible){const le=F(I,ue,Y,G);I.onBeforeShadow(s,I,T,E,V,le,null),s.renderBufferDirect(E,null,V,le,I,null),I.onAfterShadow(s,I,T,E,V,le,null)}}const te=I.children;for(let V=0,ue=te.length;V<ue;V++)P(te[V],T,E,Y,B,G)}function O(I){I.target.removeEventListener("dispose",O);for(const E in p){const Y=p[E],B=I.target.uuid;B in Y&&(Y[B].dispose(),delete Y[B])}}}function SE(s,e){function t(){let z=!1;const xe=new hn;let W=null;const q=new hn(0,0,0,0);return{setMask:function(ye){W!==ye&&!z&&(s.colorMask(ye,ye,ye,ye),W=ye)},setLocked:function(ye){z=ye},setClear:function(ye,ce,Se,Ve,me){me===!0&&(ye*=Ve,ce*=Ve,Se*=Ve),xe.set(ye,ce,Se,Ve),q.equals(xe)===!1&&(s.clearColor(ye,ce,Se,Ve),q.copy(xe))},reset:function(){z=!1,W=null,q.set(-1,0,0,0)}}}function r(){let z=!1,xe=!1,W=null,q=null,ye=null;return{setReversed:function(ce){if(xe!==ce){const Se=e.get("EXT_clip_control");ce?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),xe=ce;const Ve=ye;ye=null,this.setClear(Ve)}},getReversed:function(){return xe},setTest:function(ce){ce?Ee(s.DEPTH_TEST):Ke(s.DEPTH_TEST)},setMask:function(ce){W!==ce&&!z&&(s.depthMask(ce),W=ce)},setFunc:function(ce){if(xe&&(ce=Ix[ce]),q!==ce){switch(ce){case Kh:s.depthFunc(s.NEVER);break;case Yh:s.depthFunc(s.ALWAYS);break;case qh:s.depthFunc(s.LESS);break;case yo:s.depthFunc(s.LEQUAL);break;case $h:s.depthFunc(s.EQUAL);break;case Zh:s.depthFunc(s.GEQUAL);break;case Qh:s.depthFunc(s.GREATER);break;case Jh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}q=ce}},setLocked:function(ce){z=ce},setClear:function(ce){ye!==ce&&(ye=ce,xe&&(ce=1-ce),s.clearDepth(ce))},reset:function(){z=!1,W=null,q=null,ye=null,xe=!1}}}function o(){let z=!1,xe=null,W=null,q=null,ye=null,ce=null,Se=null,Ve=null,me=null;return{setTest:function(Ie){z||(Ie?Ee(s.STENCIL_TEST):Ke(s.STENCIL_TEST))},setMask:function(Ie){xe!==Ie&&!z&&(s.stencilMask(Ie),xe=Ie)},setFunc:function(Ie,Ze,Ne){(W!==Ie||q!==Ze||ye!==Ne)&&(s.stencilFunc(Ie,Ze,Ne),W=Ie,q=Ze,ye=Ne)},setOp:function(Ie,Ze,Ne){(ce!==Ie||Se!==Ze||Ve!==Ne)&&(s.stencilOp(Ie,Ze,Ne),ce=Ie,Se=Ze,Ve=Ne)},setLocked:function(Ie){z=Ie},setClear:function(Ie){me!==Ie&&(s.clearStencil(Ie),me=Ie)},reset:function(){z=!1,xe=null,W=null,q=null,ye=null,ce=null,Se=null,Ve=null,me=null}}}const l=new t,u=new r,d=new o;let f={};const p=new WeakMap;let _={},M={},v={},S=new WeakMap,w=[],R=null,y=!1,x=null,D=null,F=null,P=null,O=null,I=null,T=null,E=new wt(0,0,0),Y=0,B=!1,G=null,$=null,te=null,V=null,ue=null;const le=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,ne=0;const Q=s.getParameter(s.VERSION);Q.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(Q)[1]),J=ne>=1):Q.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),J=ne>=2);let ee=null,U={};const ie=s.getParameter(s.SCISSOR_BOX),Fe=s.getParameter(s.VIEWPORT),se=new hn().fromArray(ie),we=new hn().fromArray(Fe);function Ce(z,xe,W,q){const ye=new Uint8Array(4),ce=s.createTexture();s.bindTexture(z,ce),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Se=0;Se<W;Se++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(xe,0,s.RGBA,1,1,q,0,s.RGBA,s.UNSIGNED_BYTE,ye):s.texImage2D(xe+Se,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ye);return ce}const He={};He[s.TEXTURE_2D]=Ce(s.TEXTURE_2D,s.TEXTURE_2D,1),He[s.TEXTURE_CUBE_MAP]=Ce(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),He[s.TEXTURE_2D_ARRAY]=Ce(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),He[s.TEXTURE_3D]=Ce(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),Ee(s.DEPTH_TEST),u.setFunc(yo),ln(!1),It(Om),Ee(s.CULL_FACE),tn(ga);function Ee(z){_[z]!==!0&&(s.enable(z),_[z]=!0)}function Ke(z){_[z]!==!1&&(s.disable(z),_[z]=!1)}function st(z,xe){return v[z]!==xe?(s.bindFramebuffer(z,xe),v[z]=xe,z===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=xe),z===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=xe),!0):!1}function at(z,xe){let W=w,q=!1;if(z){W=S.get(xe),W===void 0&&(W=[],S.set(xe,W));const ye=z.textures;if(W.length!==ye.length||W[0]!==s.COLOR_ATTACHMENT0){for(let ce=0,Se=ye.length;ce<Se;ce++)W[ce]=s.COLOR_ATTACHMENT0+ce;W.length=ye.length,q=!0}}else W[0]!==s.BACK&&(W[0]=s.BACK,q=!0);q&&s.drawBuffers(W)}function ct(z){return R!==z?(s.useProgram(z),R=z,!0):!1}const At={[ha]:s.FUNC_ADD,[ix]:s.FUNC_SUBTRACT,[rx]:s.FUNC_REVERSE_SUBTRACT};At[sx]=s.MIN,At[ax]=s.MAX;const _t={[ox]:s.ZERO,[lx]:s.ONE,[cx]:s.SRC_COLOR,[J0]:s.SRC_ALPHA,[mx]:s.SRC_ALPHA_SATURATE,[fx]:s.DST_COLOR,[hx]:s.DST_ALPHA,[ux]:s.ONE_MINUS_SRC_COLOR,[eg]:s.ONE_MINUS_SRC_ALPHA,[px]:s.ONE_MINUS_DST_COLOR,[dx]:s.ONE_MINUS_DST_ALPHA,[gx]:s.CONSTANT_COLOR,[vx]:s.ONE_MINUS_CONSTANT_COLOR,[_x]:s.CONSTANT_ALPHA,[xx]:s.ONE_MINUS_CONSTANT_ALPHA};function tn(z,xe,W,q,ye,ce,Se,Ve,me,Ie){if(z===ga){y===!0&&(Ke(s.BLEND),y=!1);return}if(y===!1&&(Ee(s.BLEND),y=!0),z!==nx){if(z!==x||Ie!==B){if((D!==ha||O!==ha)&&(s.blendEquation(s.FUNC_ADD),D=ha,O=ha),Ie)switch(z){case go:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fm:s.blendFunc(s.ONE,s.ONE);break;case km:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Bm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:kt("WebGLState: Invalid blending: ",z);break}else switch(z){case go:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case km:kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bm:kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:kt("WebGLState: Invalid blending: ",z);break}F=null,P=null,I=null,T=null,E.set(0,0,0),Y=0,x=z,B=Ie}return}ye=ye||xe,ce=ce||W,Se=Se||q,(xe!==D||ye!==O)&&(s.blendEquationSeparate(At[xe],At[ye]),D=xe,O=ye),(W!==F||q!==P||ce!==I||Se!==T)&&(s.blendFuncSeparate(_t[W],_t[q],_t[ce],_t[Se]),F=W,P=q,I=ce,T=Se),(Ve.equals(E)===!1||me!==Y)&&(s.blendColor(Ve.r,Ve.g,Ve.b,me),E.copy(Ve),Y=me),x=z,B=!1}function Xt(z,xe){z.side===Gi?Ke(s.CULL_FACE):Ee(s.CULL_FACE);let W=z.side===fi;xe&&(W=!W),ln(W),z.blending===go&&z.transparent===!1?tn(ga):tn(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),u.setFunc(z.depthFunc),u.setTest(z.depthTest),u.setMask(z.depthWrite),l.setMask(z.colorWrite);const q=z.stencilWrite;d.setTest(q),q&&(d.setMask(z.stencilWriteMask),d.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),d.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Bt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Ee(s.SAMPLE_ALPHA_TO_COVERAGE):Ke(s.SAMPLE_ALPHA_TO_COVERAGE)}function ln(z){G!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),G=z)}function It(z){z!==ex?(Ee(s.CULL_FACE),z!==$&&(z===Om?s.cullFace(s.BACK):z===tx?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ke(s.CULL_FACE),$=z}function Sn(z){z!==te&&(J&&s.lineWidth(z),te=z)}function Bt(z,xe,W){z?(Ee(s.POLYGON_OFFSET_FILL),(V!==xe||ue!==W)&&(V=xe,ue=W,u.getReversed()&&(xe=-xe,W=-W),s.polygonOffset(xe,W))):Ke(s.POLYGON_OFFSET_FILL)}function $t(z){z?Ee(s.SCISSOR_TEST):Ke(s.SCISSOR_TEST)}function fe(z){z===void 0&&(z=s.TEXTURE0+le-1),ee!==z&&(s.activeTexture(z),ee=z)}function ze(z,xe,W){W===void 0&&(ee===null?W=s.TEXTURE0+le-1:W=ee);let q=U[W];q===void 0&&(q={type:void 0,texture:void 0},U[W]=q),(q.type!==z||q.texture!==xe)&&(ee!==W&&(s.activeTexture(W),ee=W),s.bindTexture(z,xe||He[z]),q.type=z,q.texture=xe)}function H(){const z=U[ee];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function it(){try{s.compressedTexImage2D(...arguments)}catch(z){kt("WebGLState:",z)}}function ut(){try{s.compressedTexImage3D(...arguments)}catch(z){kt("WebGLState:",z)}}function ft(){try{s.texSubImage2D(...arguments)}catch(z){kt("WebGLState:",z)}}function Ae(){try{s.texSubImage3D(...arguments)}catch(z){kt("WebGLState:",z)}}function xt(){try{s.compressedTexSubImage2D(...arguments)}catch(z){kt("WebGLState:",z)}}function Te(){try{s.compressedTexSubImage3D(...arguments)}catch(z){kt("WebGLState:",z)}}function je(){try{s.texStorage2D(...arguments)}catch(z){kt("WebGLState:",z)}}function L(){try{s.texStorage3D(...arguments)}catch(z){kt("WebGLState:",z)}}function b(){try{s.texImage2D(...arguments)}catch(z){kt("WebGLState:",z)}}function K(){try{s.texImage3D(...arguments)}catch(z){kt("WebGLState:",z)}}function ve(z){return M[z]!==void 0?M[z]:s.getParameter(z)}function Me(z,xe){M[z]!==xe&&(s.pixelStorei(z,xe),M[z]=xe)}function Pe(z){se.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),se.copy(z))}function Ue(z){we.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),we.copy(z))}function ge(z,xe){let W=p.get(xe);W===void 0&&(W=new WeakMap,p.set(xe,W));let q=W.get(z);q===void 0&&(q=s.getUniformBlockIndex(xe,z.name),s.uniformBlockBinding(xe,q,q),W.set(z,q))}function _e(z,xe,W){const ye=p.get(xe).get(z);f[ye]!==W&&(s.bindBufferBase(s.UNIFORM_BUFFER,ye,W),f[ye]=W)}function Le(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),_={},M={},ee=null,U={},v={},f={},S=new WeakMap,w=[],R=null,y=!1,x=null,D=null,F=null,P=null,O=null,I=null,T=null,E=new wt(0,0,0),Y=0,B=!1,G=null,$=null,te=null,V=null,ue=null,se.set(0,0,s.canvas.width,s.canvas.height),we.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:Ee,disable:Ke,bindFramebuffer:st,drawBuffers:at,useProgram:ct,setBlending:tn,setMaterial:Xt,setFlipSided:ln,setCullFace:It,setLineWidth:Sn,setPolygonOffset:Bt,setScissorTest:$t,activeTexture:fe,bindTexture:ze,unbindTexture:H,compressedTexImage2D:it,compressedTexImage3D:ut,texImage2D:b,texImage3D:K,pixelStorei:Me,getParameter:ve,updateUBOMapping:ge,uniformBlockBinding:_e,texStorage2D:je,texStorage3D:L,texSubImage2D:ft,texSubImage3D:Ae,compressedTexSubImage2D:xt,compressedTexSubImage3D:Te,scissor:Pe,viewport:Ue,reset:Le}}function ME(s,e,t,r,o,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Xe,_=new WeakMap,M=new Set;let v;const S=new WeakMap,w=new Set,R=new FinalizationRegistry(L=>w.delete(L));let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,b){return y?new OffscreenCanvas(L,b):vc("canvas")}function D(L,b,K){let ve=1;const Me=je(L);if((Me.width>K||Me.height>K)&&(ve=K/Math.max(Me.width,Me.height)),ve<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Pe=Math.floor(ve*Me.width),Ue=Math.floor(ve*Me.height);v===void 0&&(v=x(Pe,Ue));const ge=b?x(Pe,Ue):v;return ge.width=Pe,ge.height=Ue,ge.getContext("2d").drawImage(L,0,0,Pe,Ue),gt("WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+Pe+"x"+Ue+")."),ge}else return"data"in L&&gt("WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),L;return L}function F(L){return L.generateMipmaps}function P(L){s.generateMipmap(L)}function O(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function I(L,b,K,ve,Me,Pe=!1){if(L!==null){if(s[L]!==void 0)return s[L];gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Ue;ve&&(Ue=e.get("EXT_texture_norm16"),Ue||gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ge=b;if(b===s.RED&&(K===s.FLOAT&&(ge=s.R32F),K===s.HALF_FLOAT&&(ge=s.R16F),K===s.UNSIGNED_BYTE&&(ge=s.R8),K===s.UNSIGNED_SHORT&&Ue&&(ge=Ue.R16_EXT),K===s.SHORT&&Ue&&(ge=Ue.R16_SNORM_EXT)),b===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(ge=s.R8UI),K===s.UNSIGNED_SHORT&&(ge=s.R16UI),K===s.UNSIGNED_INT&&(ge=s.R32UI),K===s.BYTE&&(ge=s.R8I),K===s.SHORT&&(ge=s.R16I),K===s.INT&&(ge=s.R32I)),b===s.RG&&(K===s.FLOAT&&(ge=s.RG32F),K===s.HALF_FLOAT&&(ge=s.RG16F),K===s.UNSIGNED_BYTE&&(ge=s.RG8),K===s.UNSIGNED_SHORT&&Ue&&(ge=Ue.RG16_EXT),K===s.SHORT&&Ue&&(ge=Ue.RG16_SNORM_EXT)),b===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(ge=s.RG8UI),K===s.UNSIGNED_SHORT&&(ge=s.RG16UI),K===s.UNSIGNED_INT&&(ge=s.RG32UI),K===s.BYTE&&(ge=s.RG8I),K===s.SHORT&&(ge=s.RG16I),K===s.INT&&(ge=s.RG32I)),b===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(ge=s.RGB8UI),K===s.UNSIGNED_SHORT&&(ge=s.RGB16UI),K===s.UNSIGNED_INT&&(ge=s.RGB32UI),K===s.BYTE&&(ge=s.RGB8I),K===s.SHORT&&(ge=s.RGB16I),K===s.INT&&(ge=s.RGB32I)),b===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(ge=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(ge=s.RGBA16UI),K===s.UNSIGNED_INT&&(ge=s.RGBA32UI),K===s.BYTE&&(ge=s.RGBA8I),K===s.SHORT&&(ge=s.RGBA16I),K===s.INT&&(ge=s.RGBA32I)),b===s.RGB&&(K===s.UNSIGNED_SHORT&&Ue&&(ge=Ue.RGB16_EXT),K===s.SHORT&&Ue&&(ge=Ue.RGB16_SNORM_EXT),K===s.UNSIGNED_INT_5_9_9_9_REV&&(ge=s.RGB9_E5),K===s.UNSIGNED_INT_10F_11F_11F_REV&&(ge=s.R11F_G11F_B10F)),b===s.RGBA){const _e=Pe?gc:Lt.getTransfer(Me);K===s.FLOAT&&(ge=s.RGBA32F),K===s.HALF_FLOAT&&(ge=s.RGBA16F),K===s.UNSIGNED_BYTE&&(ge=_e===Yt?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT&&Ue&&(ge=Ue.RGBA16_EXT),K===s.SHORT&&Ue&&(ge=Ue.RGBA16_SNORM_EXT),K===s.UNSIGNED_SHORT_4_4_4_4&&(ge=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(ge=s.RGB5_A1)}return(ge===s.R16F||ge===s.R32F||ge===s.RG16F||ge===s.RG32F||ge===s.RGBA16F||ge===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function T(L,b){let K;return L?b===null||b===sr||b===xa?K=s.DEPTH24_STENCIL8:b===nr?K=s.DEPTH32F_STENCIL8:b===Mo&&(K=s.DEPTH24_STENCIL8,gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===sr||b===xa?K=s.DEPTH_COMPONENT24:b===nr?K=s.DEPTH_COMPONENT32F:b===Mo&&(K=s.DEPTH_COMPONENT16),K}function E(L,b){return F(L)===!0||L.isFramebufferTexture&&L.minFilter!==Hn&&L.minFilter!==ii?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function Y(L){const b=new WeakRef(L);r.get(L).__ref=b,w.add(b),R.register(L,b,b)}function B(L){const b=r.get(L).__ref;b!==void 0&&(w.delete(b),R.unregister(b))}function G(L){te(L.target)}function $(L){V(L.target)}function te(L){L.removeEventListener("dispose",G),B(L),le(L),L.isVideoTexture&&_.delete(L),L.isHTMLTexture&&M.delete(L)}function V(L){L.removeEventListener("dispose",$),B(L),ne(L)}function ue(){for(const L of w){const b=L.deref();b!==void 0&&(b.isRenderTarget===!0?V(b):te(b))}w.clear(),M.clear()}function le(L){const b=r.get(L);if(b.__webglInit===void 0)return;const K=L.source,ve=S.get(K);if(ve){const Me=ve[b.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&J(L),Object.keys(ve).length===0&&S.delete(K)}r.remove(L)}function J(L){const b=r.get(L);s.deleteTexture(b.__webglTexture);const K=L.source,ve=S.get(K);delete ve[b.__cacheKey],u.memory.textures--}function ne(L){const b=r.get(L);b.__depthDisposeCallback&&b.__depthDisposeCallback();const K=L.depthTexture;if(K&&K.renderTarget===L&&te(K),L.isWebGLCubeRenderTarget)for(let Me=0;Me<6;Me++){if(Array.isArray(b.__webglFramebuffer[Me]))for(let Pe=0;Pe<b.__webglFramebuffer[Me].length;Pe++)s.deleteFramebuffer(b.__webglFramebuffer[Me][Pe]);else s.deleteFramebuffer(b.__webglFramebuffer[Me]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[Me])}else{if(Array.isArray(b.__webglFramebuffer))for(let Me=0;Me<b.__webglFramebuffer.length;Me++)s.deleteFramebuffer(b.__webglFramebuffer[Me]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Me=0;Me<b.__webglColorRenderbuffer.length;Me++)b.__webglColorRenderbuffer[Me]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[Me]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const ve=L.textures;for(let Me=0,Pe=ve.length;Me<Pe;Me++){const Ue=r.get(ve[Me]);Ue.__webglTexture&&(s.deleteTexture(Ue.__webglTexture),u.memory.textures--),r.remove(ve[Me])}r.remove(L)}let Q=0;function ee(){Q=0}function U(){return Q}function ie(L){Q=L}function Fe(){const L=Q;return L>=o.maxTextures&&gt("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+o.maxTextures),Q+=1,L}function se(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.mipmapsAutoUpdate),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function we(L,b){const K=r.get(L);if(L.isVideoTexture&&xt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&K.__version!==L.version){const ve=L.image;if(ve===null)gt("WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)gt("WebGLRenderer: Texture marked for update but image is incomplete");else{Xt(K,L,b);return}}else L.isExternalTexture&&(K.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+b)}function Ce(L,b){const K=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){Xt(K,L,b);return}else L.isExternalTexture&&(K.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+b)}function He(L,b){const K=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){Xt(K,L,b);return}t.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+b)}function Ee(L,b){const K=r.get(L);if(L.version>0&&K.__version!==L.version){ln(K,L,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+b)}const Ke={[ed]:s.REPEAT,[Mr]:s.CLAMP_TO_EDGE,[td]:s.MIRRORED_REPEAT},st={[Hn]:s.NEAREST,[Mx]:s.NEAREST_MIPMAP_NEAREST,[Rl]:s.NEAREST_MIPMAP_LINEAR,[ii]:s.LINEAR,[fh]:s.LINEAR_MIPMAP_NEAREST,[Jr]:s.LINEAR_MIPMAP_LINEAR},at={[Ax]:s.NEVER,[_g]:s.ALWAYS,[Cx]:s.LESS,[gg]:s.LEQUAL,[bx]:s.EQUAL,[vg]:s.GEQUAL,[Rx]:s.GREATER,[Nx]:s.NOTEQUAL};function ct(L,b){if(b.type===nr&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===ii||b.magFilter===fh||b.magFilter===Rl||b.magFilter===Jr||b.minFilter===ii||b.minFilter===fh||b.minFilter===Rl||b.minFilter===Jr)&&gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,Ke[b.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,Ke[b.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,Ke[b.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,st[b.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,st[b.minFilter]),b.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,at[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Hn||b.minFilter!==Rl&&b.minFilter!==Jr||b.type===nr&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function At(L,b){let K=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",G),Y(b));const ve=b.source;let Me=S.get(ve);Me===void 0&&(Me={},S.set(ve,Me));const Pe=se(b);if(Pe!==L.__cacheKey){Me[Pe]===void 0&&(Me[Pe]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,K=!0),Me[Pe].usedTimes++;const Ue=Me[L.__cacheKey];Ue!==void 0&&(Me[L.__cacheKey].usedTimes--,Ue.usedTimes===0&&J(b)),L.__cacheKey=Pe,L.__webglTexture=Me[Pe].texture}return K}function _t(L,b,K){return Math.floor(Math.floor(L/K)/b)}function tn(L,b,K,ve){const Pe=L.updateRanges;if(Pe.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,K,ve,b.data);else{Pe.sort((z,xe)=>z.start-xe.start);let Ue=0;for(let z=1;z<Pe.length;z++){const xe=Pe[Ue],W=Pe[z],q=xe.start+xe.count,ye=_t(W.start,b.width,4),ce=_t(xe.start,b.width,4);W.start<=q+1&&ye===ce&&_t(W.start+W.count-1,b.width,4)===ye?xe.count=Math.max(xe.count,W.start+W.count-xe.start):(++Ue,Pe[Ue]=W)}Pe.length=Ue+1;const ge=t.getParameter(s.UNPACK_ROW_LENGTH),_e=t.getParameter(s.UNPACK_SKIP_PIXELS),Le=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let z=0,xe=Pe.length;z<xe;z++){const W=Pe[z],q=Math.floor(W.start/4),ye=Math.ceil(W.count/4),ce=q%b.width,Se=Math.floor(q/b.width),Ve=ye,me=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,ce),t.pixelStorei(s.UNPACK_SKIP_ROWS,Se),t.texSubImage2D(s.TEXTURE_2D,0,ce,Se,Ve,me,K,ve,b.data)}L.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ge),t.pixelStorei(s.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(s.UNPACK_SKIP_ROWS,Le)}}function Xt(L,b,K){let ve=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ve=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ve=s.TEXTURE_3D);const Me=At(L,b),Pe=b.source;t.bindTexture(ve,L.__webglTexture,s.TEXTURE0+K);const Ue=r.get(Pe);if(Pe.version!==Ue.__version||Me===!0){if(t.activeTexture(s.TEXTURE0+K),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const me=Lt.getPrimaries(Lt.workingColorSpace),Ie=b.colorSpace===Qr?null:Lt.getPrimaries(b.colorSpace),Ze=b.colorSpace===Qr||me===Ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze)}t.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let _e=D(b.image,!1,o.maxTextureSize);_e=Te(b,_e);const Le=l.convert(b.format,b.colorSpace),z=l.convert(b.type);let xe=I(b.internalFormat,Le,z,b.normalized,b.colorSpace,b.isVideoTexture);ct(ve,b);let W;const q=b.mipmaps,ye=b.isVideoTexture!==!0,ce=Ue.__version===void 0||Me===!0,Se=Pe.dataReady,Ve=E(b,_e);if(b.isDepthTexture)xe=T(b.format===es,b.type),ce&&(ye?t.texStorage2D(s.TEXTURE_2D,1,xe,_e.width,_e.height):t.texImage2D(s.TEXTURE_2D,0,xe,_e.width,_e.height,0,Le,z,null));else if(b.isDataTexture)if(q.length>0){ye&&ce&&t.texStorage2D(s.TEXTURE_2D,Ve,xe,q[0].width,q[0].height);for(let me=0,Ie=q.length;me<Ie;me++)W=q[me],ye?Se&&t.texSubImage2D(s.TEXTURE_2D,me,0,0,W.width,W.height,Le,z,W.data):t.texImage2D(s.TEXTURE_2D,me,xe,W.width,W.height,0,Le,z,W.data);b.generateMipmaps=!1}else ye?(ce&&t.texStorage2D(s.TEXTURE_2D,Ve,xe,_e.width,_e.height),Se&&tn(b,_e,Le,z)):t.texImage2D(s.TEXTURE_2D,0,xe,_e.width,_e.height,0,Le,z,_e.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ye&&ce&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ve,xe,q[0].width,q[0].height,_e.depth);for(let me=0,Ie=q.length;me<Ie;me++)if(W=q[me],b.format!==ir)if(Le!==null)if(ye){if(Se)if(b.layerUpdates.size>0){const Ze=E0(W.width,W.height,b.format,b.type);for(const Ne of b.layerUpdates){const lt=W.data.subarray(Ne*Ze/W.data.BYTES_PER_ELEMENT,(Ne+1)*Ze/W.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,Ne,W.width,W.height,1,Le,lt)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,W.width,W.height,_e.depth,Le,W.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,me,xe,W.width,W.height,_e.depth,0,W.data,0,0);else gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ye?Se&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,W.width,W.height,_e.depth,Le,z,W.data):t.texImage3D(s.TEXTURE_2D_ARRAY,me,xe,W.width,W.height,_e.depth,0,Le,z,W.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{ye&&ce&&t.texStorage2D(s.TEXTURE_2D,Ve,xe,q[0].width,q[0].height);for(let me=0,Ie=q.length;me<Ie;me++)W=q[me],b.format!==ir?Le!==null?ye?Se&&t.compressedTexSubImage2D(s.TEXTURE_2D,me,0,0,W.width,W.height,Le,W.data):t.compressedTexImage2D(s.TEXTURE_2D,me,xe,W.width,W.height,0,W.data):gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?Se&&t.texSubImage2D(s.TEXTURE_2D,me,0,0,W.width,W.height,Le,z,W.data):t.texImage2D(s.TEXTURE_2D,me,xe,W.width,W.height,0,Le,z,W.data)}else if(b.isDataArrayTexture)if(ye){if(ce&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ve,xe,_e.width,_e.height,_e.depth),Se)if(b.layerUpdates.size>0){const me=E0(_e.width,_e.height,b.format,b.type);for(const Ie of b.layerUpdates){const Ze=_e.data.subarray(Ie*me/_e.data.BYTES_PER_ELEMENT,(Ie+1)*me/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ie,_e.width,_e.height,1,Le,z,Ze)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Le,z,_e.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,xe,_e.width,_e.height,_e.depth,0,Le,z,_e.data);else if(b.isData3DTexture)ye?(ce&&t.texStorage3D(s.TEXTURE_3D,Ve,xe,_e.width,_e.height,_e.depth),Se&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Le,z,_e.data)):t.texImage3D(s.TEXTURE_3D,0,xe,_e.width,_e.height,_e.depth,0,Le,z,_e.data);else if(b.isFramebufferTexture){if(ce)if(ye)t.texStorage2D(s.TEXTURE_2D,Ve,xe,_e.width,_e.height);else{let me=_e.width,Ie=_e.height;for(let Ze=0;Ze<Ve;Ze++)t.texImage2D(s.TEXTURE_2D,Ze,xe,me,Ie,0,Le,z,null),me>>=1,Ie>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){const me=s.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),_e.parentNode!==me){me.appendChild(_e),M.add(b),me.onpaint=Ie=>{const Ze=Ie.changedElements;for(const Ne of M)Ze.includes(Ne.image)&&(Ne.needsUpdate=!0)},me.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,_e);else{const Ze=s.RGBA,Ne=s.RGBA,lt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ze,Ne,lt,_e)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(q.length>0){if(ye&&ce){const me=je(q[0]);t.texStorage2D(s.TEXTURE_2D,Ve,xe,me.width,me.height)}for(let me=0,Ie=q.length;me<Ie;me++)W=q[me],ye?Se&&t.texSubImage2D(s.TEXTURE_2D,me,0,0,Le,z,W):t.texImage2D(s.TEXTURE_2D,me,xe,Le,z,W);b.generateMipmaps=!1}else if(ye){if(ce){const me=je(_e);t.texStorage2D(s.TEXTURE_2D,Ve,xe,me.width,me.height)}Se&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Le,z,_e)}else t.texImage2D(s.TEXTURE_2D,0,xe,Le,z,_e);F(b)&&b.mipmapsAutoUpdate===!0&&P(ve),Ue.__version=Pe.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function ln(L,b,K){if(b.image.length!==6)return;const ve=At(L,b),Me=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+K);const Pe=r.get(Me);if(Me.version!==Pe.__version||ve===!0){t.activeTexture(s.TEXTURE0+K);const Ue=Lt.getPrimaries(Lt.workingColorSpace),ge=b.colorSpace===Qr?null:Lt.getPrimaries(b.colorSpace),_e=b.colorSpace===Qr||Ue===ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Le=b.isCompressedTexture||b.image[0].isCompressedTexture,z=b.image[0]&&b.image[0].isDataTexture,xe=[];for(let Ne=0;Ne<6;Ne++)!Le&&!z?xe[Ne]=D(b.image[Ne],!0,o.maxCubemapSize):xe[Ne]=z?b.image[Ne].image:b.image[Ne],xe[Ne]=Te(b,xe[Ne]);const W=xe[0],q=l.convert(b.format,b.colorSpace),ye=l.convert(b.type);let ce=I(b.internalFormat,q,ye,b.normalized,b.colorSpace);const Se=b.isVideoTexture!==!0,Ve=Pe.__version===void 0||ve===!0,me=Me.dataReady;let Ie=E(b,W);ct(s.TEXTURE_CUBE_MAP,b);let Ze;if(b.isDepthTexture){if(ce=T(b.format===es,b.type),Ve)if(Se)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,ce,W.width,W.height);else for(let Ne=0;Ne<6;Ne++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,ce,W.width,W.height,0,q,ye,null)}else if(Le){Se&&Ve&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,ce,W.width,W.height);for(let Ne=0;Ne<6;Ne++){Ze=xe[Ne].mipmaps;for(let lt=0;lt<Ze.length;lt++){const St=Ze[lt];b.format!==ir?q!==null?Se?me&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,lt,0,0,St.width,St.height,q,St.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,lt,ce,St.width,St.height,0,St.data):gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Se?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,lt,0,0,St.width,St.height,q,ye,St.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,lt,ce,St.width,St.height,0,q,ye,St.data)}}}else{if(Ze=b.mipmaps,Se&&Ve){Ze.length>0&&Ie++;const Ne=je(xe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,ce,Ne.width,Ne.height)}for(let Ne=0;Ne<6;Ne++)if(z){Se?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,xe[Ne].width,xe[Ne].height,q,ye,xe[Ne].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,ce,xe[Ne].width,xe[Ne].height,0,q,ye,xe[Ne].data);for(let lt=0;lt<Ze.length;lt++){const Ct=Ze[lt].image[Ne].image;Se?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,lt+1,0,0,Ct.width,Ct.height,q,ye,Ct.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,lt+1,ce,Ct.width,Ct.height,0,q,ye,Ct.data)}}else{Se?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,q,ye,xe[Ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,ce,q,ye,xe[Ne]);for(let lt=0;lt<Ze.length;lt++){const St=Ze[lt];Se?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,lt+1,0,0,q,ye,St.image[Ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,lt+1,ce,q,ye,St.image[Ne])}}}F(b)&&b.mipmapsAutoUpdate===!0&&P(s.TEXTURE_CUBE_MAP),Pe.__version=Me.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function It(L,b,K,ve,Me,Pe){const Ue=l.convert(K.format,K.colorSpace),ge=l.convert(K.type),_e=I(K.internalFormat,Ue,ge,K.normalized,K.colorSpace),Le=r.get(b),z=r.get(K);if(z.__renderTarget=b,!Le.__hasExternalTextures){const xe=Math.max(1,b.width>>Pe),W=Math.max(1,b.height>>Pe);Me===s.TEXTURE_3D||Me===s.TEXTURE_2D_ARRAY?t.texImage3D(Me,Pe,_e,xe,W,b.depth,0,Ue,ge,null):t.texImage2D(Me,Pe,_e,xe,W,0,Ue,ge,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),Ae(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,Me,z.__webglTexture,0,ft(b)):(Me===s.TEXTURE_2D||Me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ve,Me,z.__webglTexture,Pe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Sn(L,b,K){if(s.bindRenderbuffer(s.RENDERBUFFER,L),b.depthBuffer){const ve=b.depthTexture,Me=ve&&ve.isDepthTexture?ve.type:null,Pe=T(b.stencilBuffer,Me),Ue=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ae(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft(b),Pe,b.width,b.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft(b),Pe,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Pe,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ue,s.RENDERBUFFER,L)}else{const ve=b.textures;for(let Me=0;Me<ve.length;Me++){const Pe=ve[Me],Ue=l.convert(Pe.format,Pe.colorSpace),ge=l.convert(Pe.type),_e=I(Pe.internalFormat,Ue,ge,Pe.normalized,Pe.colorSpace);Ae(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft(b),_e,b.width,b.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft(b),_e,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,_e,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Bt(L,b,K){const ve=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Me=r.get(b.depthTexture);Me.__renderTarget=b;const Pe=ve?b.depthTexture.image[0]:b.depthTexture.image;(!Me.__webglTexture||Pe.width!==b.width||Pe.height!==b.height)&&(Pe.width=b.width,Pe.height=b.height,b.depthTexture.needsUpdate=!0),ve?Ee(b.depthTexture,0):we(b.depthTexture,0);const Ue=Me.__webglTexture,ge=ft(b),_e=ve?s.TEXTURE_CUBE_MAP_POSITIVE_X+K:s.TEXTURE_2D,Le=b.depthTexture.format===es?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===ns)Ae(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Le,_e,Ue,0,ge):s.framebufferTexture2D(s.FRAMEBUFFER,Le,_e,Ue,0);else if(b.depthTexture.format===es)Ae(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Le,_e,Ue,0,ge):s.framebufferTexture2D(s.FRAMEBUFFER,Le,_e,Ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $t(L){const b=r.get(L),K=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const ve=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ve){const Me=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ve.removeEventListener("dispose",Me)};ve.addEventListener("dispose",Me),b.__depthDisposeCallback=Me}b.__boundDepthTexture=ve}if(L.depthTexture&&!b.__autoAllocateDepthBuffer)if(K)for(let ve=0;ve<6;ve++)Bt(b.__webglFramebuffer[ve],L,ve);else L.texture.mipmaps.length>0?Bt(b.__webglFramebuffer[0],L,0):Bt(b.__webglFramebuffer,L,0);else if(K){b.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[ve]),b.__webglDepthbuffer[ve]===void 0)b.__webglDepthbuffer[ve]=s.createRenderbuffer(),Sn(b.__webglDepthbuffer[ve],L,!1);else{const Me=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=b.__webglDepthbuffer[ve];s.bindRenderbuffer(s.RENDERBUFFER,Pe),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,Pe)}}else if(L.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Sn(b.__webglDepthbuffer,L,!1);else{const Me=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Pe),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,Pe)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function fe(L,b,K){const ve=r.get(L);b!==void 0&&It(ve.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&$t(L)}function ze(L){const b=L.texture,K=r.get(L),ve=r.get(b);L.addEventListener("dispose",$),Y(L);const Me=L.textures,Pe=L.isWebGLCubeRenderTarget===!0,Ue=Me.length>1;if(Ue||(ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture()),ve.__version=b.version,u.memory.textures++),Pe){K.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(b.mipmaps.length>0){K.__webglFramebuffer[ge]=[];for(let _e=0;_e<b.mipmaps.length;_e++)K.__webglFramebuffer[ge][_e]=s.createFramebuffer()}else K.__webglFramebuffer[ge]=s.createFramebuffer()}else{if(b.mipmaps.length>0){K.__webglFramebuffer=[];for(let ge=0;ge<b.mipmaps.length;ge++)K.__webglFramebuffer[ge]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(Ue)for(let ge=0,_e=Me.length;ge<_e;ge++){const Le=r.get(Me[ge]);Le.__webglTexture===void 0&&(Le.__webglTexture=s.createTexture(),u.memory.textures++)}if(L.samples>0&&Ae(L)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ge=0;ge<Me.length;ge++){const _e=Me[ge];K.__webglColorRenderbuffer[ge]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[ge]);const Le=l.convert(_e.format,_e.colorSpace),z=l.convert(_e.type),xe=I(_e.internalFormat,Le,z,_e.normalized,_e.colorSpace,L.isXRRenderTarget===!0),W=ft(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,W,xe,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,K.__webglColorRenderbuffer[ge])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),Sn(K.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Pe){t.bindTexture(s.TEXTURE_CUBE_MAP,ve.__webglTexture),ct(s.TEXTURE_CUBE_MAP,b);for(let ge=0;ge<6;ge++)if(b.mipmaps.length>0)for(let _e=0;_e<b.mipmaps.length;_e++)It(K.__webglFramebuffer[ge][_e],L,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,_e);else It(K.__webglFramebuffer[ge],L,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);F(b)?P(s.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}else if(Ue){for(let ge=0,_e=Me.length;ge<_e;ge++){const Le=Me[ge],z=r.get(Le);let xe=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(xe=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(xe,z.__webglTexture),ct(xe,Le),It(K.__webglFramebuffer,L,Le,s.COLOR_ATTACHMENT0+ge,xe,0),F(Le)&&P(xe)}t.unbindTexture()}else{let ge=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ge=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ge,ve.__webglTexture),ct(ge,b),b.mipmaps.length>0)for(let _e=0;_e<b.mipmaps.length;_e++)It(K.__webglFramebuffer[_e],L,b,s.COLOR_ATTACHMENT0,ge,_e);else It(K.__webglFramebuffer,L,b,s.COLOR_ATTACHMENT0,ge,0);F(b)?P(ge):b.mipmaps.length>0&&s.texParameteri(ge,s.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}L.depthBuffer&&$t(L)}function H(L){const b=L.textures;for(let K=0,ve=b.length;K<ve;K++){const Me=b[K];if(F(Me)&&Me.mipmapsAutoUpdate===!0){const Pe=O(L),Ue=r.get(Me).__webglTexture;t.bindTexture(Pe,Ue),P(Pe),t.unbindTexture()}}}const it=[];function ut(L){if(L.samples>0){if(Ae(L)===!1){const b=L.textures,K=L.width,ve=L.height;let Me=s.COLOR_BUFFER_BIT;const Pe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ue=r.get(L),ge=b.length>1;if(ge)for(let Le=0;Le<b.length;Le++)t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Le=0;Le<b.length;Le++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Me|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Me|=s.STENCIL_BUFFER_BIT)),ge){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[Le]);const z=r.get(b[Le]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,z,0)}s.blitFramebuffer(0,0,K,ve,0,0,K,ve,Me,s.NEAREST),f===!0&&(it.length=0,it.push(s.COLOR_ATTACHMENT0+Le),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&it.push(Pe),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,it))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ge)for(let Le=0;Le<b.length;Le++){t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[Le]);const z=r.get(b[Le]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.TEXTURE_2D,z,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&f){const b=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function ft(L){return Math.min(o.maxSamples,L.samples)}function Ae(L){const b=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function xt(L){const b=u.render.frame;_.get(L)!==b&&(_.set(L,b),L.update())}function Te(L,b){const K=L.colorSpace,ve=L.format,Me=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||K!==mc&&K!==Qr&&(Lt.getTransfer(K)===Yt?(ve!==ir||Me!==yi)&&gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):kt("WebGLTextures: Unsupported texture color space:",K)),b}function je(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=Fe,this.resetTextureUnits=ee,this.getTextureUnits=U,this.setTextureUnits=ie,this.setTexture2D=we,this.setTexture2DArray=Ce,this.setTexture3D=He,this.setTextureCube=Ee,this.rebindTextures=fe,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=It,this.useMultisampledRTT=Ae,this.dispose=ue}function TE(s,e){function t(r,o=Qr){let l;const u=Lt.getTransfer(o);if(r===yi)return s.UNSIGNED_BYTE;if(r===Gd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Wd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===hg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===dg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===cg)return s.BYTE;if(r===ug)return s.SHORT;if(r===Mo)return s.UNSIGNED_SHORT;if(r===Vd)return s.INT;if(r===sr)return s.UNSIGNED_INT;if(r===nr)return s.FLOAT;if(r===ar)return s.HALF_FLOAT;if(r===fg)return s.ALPHA;if(r===pg)return s.RGB;if(r===ir)return s.RGBA;if(r===ns)return s.DEPTH_COMPONENT;if(r===es)return s.DEPTH_STENCIL;if(r===mg)return s.RED;if(r===jd)return s.RED_INTEGER;if(r===Ts)return s.RG;if(r===Xd)return s.RG_INTEGER;if(r===Kd)return s.RGBA_INTEGER;if(r===oc||r===lc||r===cc||r===uc)if(u===Yt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===oc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===lc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===cc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===uc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===oc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===lc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===cc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===uc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===nd||r===id||r===rd||r===sd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===nd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===id)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===rd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===sd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ad||r===od||r===ld||r===cd||r===ud||r===fc||r===hd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===ad||r===od)return u===Yt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===ld)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===cd)return l.COMPRESSED_R11_EAC;if(r===ud)return l.COMPRESSED_SIGNED_R11_EAC;if(r===fc)return l.COMPRESSED_RG11_EAC;if(r===hd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===dd||r===fd||r===pd||r===md||r===gd||r===vd||r===_d||r===xd||r===yd||r===Sd||r===Md||r===Td||r===Ed||r===wd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===dd)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===fd)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===pd)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===md)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===gd)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===vd)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===_d)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===xd)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===yd)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Sd)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Md)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Td)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ed)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===wd)return u===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ad||r===Cd||r===bd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Ad)return u===Yt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Cd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===bd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Rd||r===Nd||r===pc||r===Pd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Rd)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Nd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===pc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Pd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===xa?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const EE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wE=`
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

}`;class AE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Ng(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Es({vertexShader:EE,fragmentShader:wE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ft(new Hi(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class CE extends ss{constructor(e,t){super();const r=this;let o=null,l=1,u=null,d="local-floor",f=1,p=null,_=null,M=null,v=null,S=null,w=null;const R=typeof XRWebGLBinding<"u",y=new AE,x={},D=t.getContextAttributes();let F=null,P=null;const O=[],I=[],T=new Xe;let E=null,Y=null;const B=new Vi;B.viewport=new hn;const G=new Vi;G.viewport=new hn;const $=[B,G],te=new O1;let V=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let we=O[se];return we===void 0&&(we=new Sh,O[se]=we),we.getTargetRaySpace()},this.getControllerGrip=function(se){let we=O[se];return we===void 0&&(we=new Sh,O[se]=we),we.getGripSpace()},this.getHand=function(se){let we=O[se];return we===void 0&&(we=new Sh,O[se]=we),we.getHandSpace()};function le(se){const we=I.indexOf(se.inputSource);if(we===-1)return;const Ce=O[we];Ce!==void 0&&(Ce.update(se.inputSource,se.frame,p||u),Ce.dispatchEvent({type:se.type,data:se.inputSource}))}function J(){o.removeEventListener("select",le),o.removeEventListener("selectstart",le),o.removeEventListener("selectend",le),o.removeEventListener("squeeze",le),o.removeEventListener("squeezestart",le),o.removeEventListener("squeezeend",le),o.removeEventListener("end",J),o.removeEventListener("inputsourceschange",ne);for(let se=0;se<O.length;se++){const we=I[se];we!==null&&(I[se]=null,O[se].disconnect(we))}V=null,ue=null,y.reset();for(const se in x)delete x[se];if(e.setRenderTarget(F),S=null,v=null,M=null,o=null,P=null,Fe.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(T.width,T.height,!1),Y!==null){const se=Y.camera;se.fov=Y.fov,se.zoom=Y.zoom,se.updateProjectionMatrix(),Y=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){l=se,r.isPresenting===!0&&gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){d=se,r.isPresenting===!0&&gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(se){p=se},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return M===null&&R&&(M=new XRWebGLBinding(o,t)),M},this.getFrame=function(){return w},this.getSession=function(){return o},this.setSession=async function(se){if(o=se,o!==null){if(F=e.getRenderTarget(),o.addEventListener("select",le),o.addEventListener("selectstart",le),o.addEventListener("selectend",le),o.addEventListener("squeeze",le),o.addEventListener("squeezestart",le),o.addEventListener("squeezeend",le),o.addEventListener("end",J),o.addEventListener("inputsourceschange",ne),D.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(T),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,He=null,Ee=null;D.depth&&(Ee=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ce=D.stencil?es:ns,He=D.stencil?xa:sr);const Ke={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:l};M=this.getBinding(),v=M.createProjectionLayer(Ke),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),P=new rr(v.textureWidth,v.textureHeight,{format:ir,type:yi,depthTexture:new ya(v.textureWidth,v.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{const Ce={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,Ce),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),P=new rr(S.framebufferWidth,S.framebufferHeight,{format:ir,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1,storeMultisampledDepthBuffer:S.ignoreDepthValues===!1,storeMultisampledStencilBuffer:S.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(f),p=null,u=await o.requestReferenceSpace(d),Fe.setContext(o),Fe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ne(se){for(let we=0;we<se.removed.length;we++){const Ce=se.removed[we],He=I.indexOf(Ce);He>=0&&(I[He]=null,O[He].disconnect(Ce))}for(let we=0;we<se.added.length;we++){const Ce=se.added[we];let He=I.indexOf(Ce);if(He===-1){for(let Ke=0;Ke<O.length;Ke++)if(Ke>=I.length){I.push(Ce),He=Ke;break}else if(I[Ke]===null){I[Ke]=Ce,He=Ke;break}if(He===-1)break}const Ee=O[He];Ee&&Ee.connect(Ce)}}function Q(se,we){we===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(we.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(o===null)return;let we=se.near,Ce=se.far;y.texture!==null&&(y.depthNear>0&&(we=y.depthNear),y.depthFar>0&&(Ce=y.depthFar)),te.near=G.near=B.near=we,te.far=G.far=B.far=Ce,(V!==te.near||ue!==te.far)&&(o.updateRenderState({depthNear:te.near,depthFar:te.far}),V=te.near,ue=te.far),te.layers.mask=se.layers.mask|6,B.layers.mask=te.layers.mask&-5,G.layers.mask=te.layers.mask&-3;const He=se.parent,Ee=te.cameras;Q(te,He);for(let Ke=0;Ke<Ee.length;Ke++)Q(Ee[Ke],He);te.projectionMatrix.copy(B.projectionMatrix),te.projectionMatrixInverse.copy(B.projectionMatrixInverse),Y===null&&se.isPerspectiveCamera&&(Y={camera:se,fov:se.fov,zoom:se.zoom}),ee(se,te,He)};function ee(se,we,Ce){Ce===null?se.matrix.copy(we.matrixWorld):(se.matrix.copy(Ce.matrixWorld),se.matrix.invert(),se.matrix.multiply(we.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(we.projectionMatrix),se.projectionMatrixInverse.copy(we.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Ld*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return te},this.getFoveation=function(){if(!(v===null&&S===null))return f},this.setFoveation=function(se){f=se,v!==null&&(v.fixedFoveation=se),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=se)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(te)},this.getCameraTexture=function(se){return x[se]};let U=null;function ie(se,we){if(_=we.getViewerPose(p||u),w=we,_!==null){const Ce=_.views;S!==null&&(e.setRenderTargetFramebuffer(P,S.framebuffer),e.setRenderTarget(P));let He=!1;Ce.length!==te.cameras.length&&(te.cameras.length=0,He=!0);for(let at=0;at<Ce.length;at++){const ct=Ce[at];let At=null;if(S!==null)At=S.getViewport(ct);else{const tn=M.getViewSubImage(v,ct);At=tn.viewport,at===0&&(e.setRenderTargetTextures(P,tn.colorTexture,tn.depthStencilTexture),e.setRenderTarget(P))}let _t=$[at];_t===void 0&&(_t=new Vi,_t.layers.enable(at),_t.viewport=new hn,$[at]=_t),_t.matrix.fromArray(ct.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(ct.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(At.x,At.y,At.width,At.height),at===0&&(te.matrix.copy(_t.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale)),He===!0&&te.cameras.push(_t)}const Ee=o.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){M=r.getBinding();const at=M.getDepthInformation(Ce[0]);at&&at.isValid&&at.texture&&y.init(at,o.renderState)}if(Ee&&Ee.includes("camera-access")&&R){e.state.unbindTexture(),M=r.getBinding();for(let at=0;at<Ce.length;at++){const ct=Ce[at].camera;if(ct){let At=x[ct];At||(At=new Ng,x[ct]=At);const _t=M.getCameraImage(ct);At.sourceTexture=_t}}}}for(let Ce=0;Ce<O.length;Ce++){const He=I[Ce],Ee=O[Ce];He!==null&&Ee!==void 0&&Ee.update(He,we,p||u)}U&&U(se,we),we.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:we}),w=null}const Fe=new Fg;Fe.setAnimationLoop(ie),this.setAnimationLoop=function(se){U=se},this.dispose=function(){}}}const bE=new Jt,Kg=new yt;Kg.set(-1,0,0,0,1,0,0,0,1);function RE(s,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,Ig(s)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function o(y,x,D,F,P){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?l(y,x):x.isMeshLambertMaterial?(l(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(l(y,x),M(y,x)):x.isMeshPhongMaterial?(l(y,x),_(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(l(y,x),v(y,x),x.isMeshPhysicalMaterial&&S(y,x,P)):x.isMeshMatcapMaterial?(l(y,x),w(y,x)):x.isMeshDepthMaterial?l(y,x):x.isMeshDistanceMaterial?(l(y,x),R(y,x)):x.isMeshNormalMaterial?l(y,x):x.isLineBasicMaterial?(u(y,x),x.isLineDashedMaterial&&d(y,x)):x.isPointsMaterial?f(y,x,D,F):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===fi&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===fi&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const D=e.get(x),F=D.envMap,P=D.envMapRotation;F&&(y.envMap.value=F,y.envMapRotation.value.setFromMatrix4(bE.makeRotationFromEuler(P)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Kg),y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function u(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function d(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function f(y,x,D,F){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*D,y.scale.value=F*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function _(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function M(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function v(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,D){y.ior.value=x.ior,x.diffuseRoughness>0&&(y.diffuseRoughness.value=x.diffuseRoughness,x.diffuseRoughnessMap&&(y.diffuseRoughnessMap.value=x.diffuseRoughnessMap,t(x.diffuseRoughnessMap,y.diffuseRoughnessMapTransform))),x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===fi&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.retroreflectivity>0&&(y.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessMinimum,y.iridescenceThicknessMaximum.value=x.iridescenceThicknessMaximum,x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function w(y,x){x.matcap&&(y.matcap.value=x.matcap)}function R(y,x){const D=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function NE(s,e,t,r){let o={},l={};function u(D,F){const P=F.program;r.uniformBlockBinding(D,P,o[D.id])}function d(D,F){let P=o[D.id];P===void 0&&(w(D),P=f(D),o[D.id]=P,D.addEventListener("dispose",y));const O=F.program;r.updateUBOMapping(D,O);const I=e.render.frame;l[D.id]!==I&&(p(D),l[D.id]=I)}function f(D){const F=s.createBuffer(),P=D.__size,O=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,F),s.bufferData(s.UNIFORM_BUFFER,P,O),s.bindBuffer(s.UNIFORM_BUFFER,null),F}function p(D){const F=o[D.id],P=D.uniforms,O=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,F);for(let I=0,T=P.length;I<T;I++){const E=P[I];if(Array.isArray(E))for(let Y=0,B=E.length;Y<B;Y++)_(E[Y],I,Y,O);else _(E,I,0,O)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function _(D,F,P,O){if(v(D,F,P,O)===!0){const I=D.__offset,T=D.value;if(Array.isArray(T)){let E=0;for(let Y=0;Y<T.length;Y++){const B=T[Y],G=R(B,!0);M(B,D.__data,E),E+=G.storage/Float32Array.BYTES_PER_ELEMENT}}else M(T,D.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,I,D.__data)}}function M(D,F,P){typeof D=="number"||typeof D=="boolean"?F[P]=D:D.isMatrix3?(F[P]=D.elements[0],F[P+1]=D.elements[1],F[P+2]=D.elements[2],F[P+3]=0,F[P+4]=D.elements[3],F[P+5]=D.elements[4],F[P+6]=D.elements[5],F[P+7]=0,F[P+8]=D.elements[6],F[P+9]=D.elements[7],F[P+10]=D.elements[8],F[P+11]=0):ArrayBuffer.isView(D)?F.set(D.subarray(0,F.length-P),P):D.toArray(F,P)}function v(D,F,P,O){const I=D.value,T=F+"_"+P;if(Array.isArray(I)){O[T]===void 0&&(O[T]=[]);const E=O[T];let Y=!1;for(let B=0;B<I.length;B++)S(I[B],E,B)===!0&&(Y=!0);return Y}return S(I,O,T)}function S(D,F,P){if(F[P]===void 0)return typeof D=="number"||typeof D=="boolean"?F[P]=D:ArrayBuffer.isView(D)?F[P]=D.slice():F[P]=D.clone(),!0;{const O=F[P];if(typeof D=="number"||typeof D=="boolean"){if(O!==D)return F[P]=D,!0}else{if(ArrayBuffer.isView(D))return!0;if(O.equals(D)===!1)return O.copy(D),!0}}return!1}function w(D){const F=D.uniforms;let P=0;const O=16;for(let T=0,E=F.length;T<E;T++){const Y=Array.isArray(F[T])?F[T]:[F[T]];for(let B=0,G=Y.length;B<G;B++){const $=Y[B],te=Array.isArray($.value)?$.value:[$.value],V=Array.isArray(F[T])||Array.isArray($.value);let ue=P;for(let J=0,ne=te.length;J<ne;J++){const Q=te[J],ee=R(Q,V),U=P%O,ie=U%ee.boundary,Fe=U+ie;P+=ie,Fe!==0&&O-Fe<ee.storage&&(P+=O-Fe),J===0&&(ue=P),P+=ee.storage}const le=$.type==="int"?Int32Array:$.type==="uint"?Uint32Array:Float32Array;$.__data=new le((P-ue)/Float32Array.BYTES_PER_ELEMENT),$.__offset=ue}}const I=P%O;return I>0&&(P+=O-I),D.__size=P,D.__cache={},this}function R(D,F){const P={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(P.boundary=4,P.storage=4):D.isVector2?(P.boundary=8,P.storage=8):D.isVector3||D.isColor?(P.boundary=16,P.storage=12):D.isVector4?(P.boundary=16,P.storage=16):D.isMatrix3?(P.boundary=16,P.storage=48):D.isMatrix4?(P.boundary=16,P.storage=64):D.isTexture?gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(D)?(P.boundary=16,P.storage=D.byteLength):gt("WebGLRenderer: Unsupported uniform value type.",D),F===!0&&(P.boundary=16,P.storage=Math.ceil(P.storage/16)*16),P}function y(D){const F=D.target;F.removeEventListener("dispose",y),s.deleteBuffer(o[F.id]),delete o[F.id],delete l[F.id]}function x(){for(const D in o)s.deleteBuffer(o[D]);o={},l={}}return{bind:u,update:d,dispose:x}}const PE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let er=null;function DE(){return er===null&&(er=new a1(PE,16,16,Ts,ar),er.name="DFG_LUT",er.minFilter=ii,er.magFilter=ii,er.wrapS=Mr,er.wrapT=Mr,er.generateMipmaps=!1,er.needsUpdate=!0),er}class LE{constructor(e={}){const{canvas:t=Dx(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:M=!1,reversedDepthBuffer:v=!1,outputBufferType:S=yi}=e;this.isWebGLRenderer=!0;let w;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=r.getContextAttributes().alpha}else w=u;const R=S,y=new Set([Kd,Xd,jd]),x=new Set([yi,sr,Mo,xa,Gd,Wd]),D=new Uint32Array(4),F=new Int32Array(4),P={textures:[],min:[],max:[],resolution:[]};let O=null,I=null;const T=[],E=[];let Y=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Er,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let G=!1,$=null,te=null,V=null,ue=null;this._outputColorSpace=Ni;let le=0,J=0,ne=null,Q=-1,ee=null;const U=new hn,ie=new hn;let Fe=null;const se=new wt(0);let we=0,Ce=t.width,He=t.height,Ee=1,Ke=null,st=null;const at=new hn(0,0,Ce,He),ct=new hn(0,0,Ce,He);let At=!1;const _t=new Eo,tn=new $d;let Xt=!1,ln=!1;const It=new Jt,Sn=new A,Bt=new hn,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function ze(){return ne===null?Ee:1}let H=r;function it(N,j){return t.getContext(N,j)}let ut,ft,Ae,xt,Te,je,L,b,K,ve,Me,Pe,Ue,ge,_e,Le,z,xe,W,q,ye,ce,Se;try{const N={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:f,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:M};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zd}`),t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",Ze,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),H===null){const j="webgl2";if(H=it(j,N),H===null)throw it(j)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ve()}catch(N){throw t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",Ze,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),kt("WebGLRenderer: "+N.message),N}function Ve(){ut=new OM(H),ut.init(),ye=new TE(H,ut),ft=new wM(H,ut,e,ye),Ae=new SE(H,ut),ft.reversedDepthBuffer&&v&&Ae.buffers.depth.setReversed(!0),te=H.createFramebuffer(),V=H.createFramebuffer(),ue=H.createFramebuffer(),xt=new BM(H),Te=new oE,je=new ME(H,ut,Ae,Te,ft,ye,xt),L=new UM(B),b=new H1(H),ce=new TM(H,b),K=new FM(H,b,xt,ce),ve=new HM(H,K,b,ce,xt),xe=new zM(H,ft,je),_e=new AM(Te),Me=new aE(B,L,ut,ft,ce,_e),Pe=new RE(B,Te),Ue=new cE,ge=new mE(ut),z=new MM(B,L,Ae,ve,w,f),Le=new yE(B,ve,ft),Se=new NE(H,xt,ft,Ae),W=new EM(H,ut,xt),q=new kM(H,ut,xt),xt.programs=Me.programs,B.capabilities=ft,B.extensions=ut,B.properties=Te,B.renderLists=Ue,B.shadowMap=Le,B.state=Ae,B.info=xt}R!==yi&&(Y=new GM(R,t.width,t.height,d,o,l));const me=new CE(B,H);this.xr=me,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const N=ut.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=ut.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(N){N!==void 0&&(Ee=N,this.setSize(Ce,He,!1))},this.getSize=function(N){return N.set(Ce,He)},this.setSize=function(N,j,he=!0){if(me.isPresenting){gt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ce=N,He=j,t.width=Math.floor(N*Ee),t.height=Math.floor(j*Ee),he===!0&&(t.style.width=N+"px",t.style.height=j+"px"),Y!==null&&Y.setSize(t.width,t.height),this.setViewport(0,0,N,j)},this.getDrawingBufferSize=function(N){return N.set(Ce*Ee,He*Ee).floor()},this.setDrawingBufferSize=function(N,j,he){Ce=N,He=j,Ee=he,t.width=Math.floor(N*he),t.height=Math.floor(j*he),this.setViewport(0,0,N,j)},this.setEffects=function(N){if(R===yi){kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let j=0;j<N.length;j++)if(N[j].isOutputPass===!0){gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Y.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(U)},this.getViewport=function(N){return N.copy(at)},this.setViewport=function(N,j,he,ae){N.isVector4?at.set(N.x,N.y,N.z,N.w):at.set(N,j,he,ae),Ae.viewport(U.copy(at).multiplyScalar(ze()).round())},this.getScissor=function(N){return N.copy(ct)},this.setScissor=function(N,j,he,ae){N.isVector4?ct.set(N.x,N.y,N.z,N.w):ct.set(N,j,he,ae),Ae.scissor(ie.copy(ct).multiplyScalar(ze()).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(N){Ae.setScissorTest(At=N)},this.setOpaqueSort=function(N){Ke=N},this.setTransparentSort=function(N){st=N},this.getClearColor=function(N){return N.copy(z.getClearColor())},this.setClearColor=function(){z.setClearColor(...arguments)},this.getClearAlpha=function(){return z.getClearAlpha()},this.setClearAlpha=function(){z.setClearAlpha(...arguments)},this.clear=function(N=!0,j=!0,he=!0){let ae=0;if(N){let re=!1;if(ne!==null){const Be=ne.texture.format;re=y.has(Be)}if(re){const Be=ne.texture.type,qe=x.has(Be),ke=z.getClearColor(),Ge=z.getClearAlpha(),Qe=ke.r,pt=ke.g,Mt=ke.b;qe?(D[0]=Qe,D[1]=pt,D[2]=Mt,D[3]=Ge,H.clearBufferuiv(H.COLOR,0,D)):(F[0]=Qe,F[1]=pt,F[2]=Mt,F[3]=Ge,H.clearBufferiv(H.COLOR,0,F))}else ae|=H.COLOR_BUFFER_BIT}j&&(ae|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),he&&(ae|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&H.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),$=N},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",Ze,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),z.dispose(),Ue.dispose(),ge.dispose(),je.dispose(),Te.dispose(),L.dispose(),ve.dispose(),K.dispose(),ce.dispose(),Se.dispose(),Me.dispose(),me.dispose(),me.removeEventListener("sessionstart",zt),me.removeEventListener("sessionend",Zt),Ht.stop()};function Ie(N){N.preventDefault(),_c("WebGLRenderer: Context Lost."),G=!0}function Ze(){_c("WebGLRenderer: Context Restored."),G=!1;const N=xt.autoReset,j=Le.enabled,he=Le.autoUpdate,ae=Le.needsUpdate,re=Le.type;Ve(),xt.autoReset=N,Le.enabled=j,Le.autoUpdate=he,Le.needsUpdate=ae,Le.type=re}function Ne(N){kt("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function lt(N){const j=N.target;j.removeEventListener("dispose",lt),St(j)}function St(N){Ct(N),Te.remove(N)}function Ct(N){const j=Te.get(N).programs;j!==void 0&&(j.forEach(function(he){Me.releaseProgram(he)}),N.isShaderMaterial&&Me.releaseShaderCache(N))}this.renderBufferDirect=function(N,j,he,ae,re,Be){j===null&&(j=$t);const qe=re.isMesh&&re.matrixWorld.determinantAffine()<0,ke=Vn(N,j,he,ae,re);Ae.setMaterial(ae,qe);let Ge=he.index,Qe=1;if(ae.wireframe===!0){if(Ge=K.getWireframeAttribute(he),Ge===void 0)return;Qe=2}const pt=he.drawRange,Mt=he.attributes.position;let Je=pt.start*Qe,bt=(pt.start+pt.count)*Qe;Be!==null&&(Je=Math.max(Je,Be.start*Qe),bt=Math.min(bt,(Be.start+Be.count)*Qe)),Ge!==null?(Je=Math.max(Je,0),bt=Math.min(bt,Ge.count)):Mt!=null&&(Je=Math.max(Je,0),bt=Math.min(bt,Mt.count));const an=bt-Je;if(an<0||an===1/0)return;ce.setup(re,ae,ke,he,Ge);let Kt,Wt=W;if(Ge!==null&&(Kt=b.get(Ge),Wt=q,Wt.setIndex(Kt)),re.isMesh)ae.wireframe===!0?(Ae.setLineWidth(ae.wireframeLinewidth*ze()),Wt.setMode(H.LINES)):Wt.setMode(H.TRIANGLES);else if(re.isLine){let fn=ae.linewidth;fn===void 0&&(fn=1),Ae.setLineWidth(fn*ze()),re.isLineSegments?Wt.setMode(H.LINES):re.isLineLoop?Wt.setMode(H.LINE_LOOP):Wt.setMode(H.LINE_STRIP)}else re.isPoints?Wt.setMode(H.POINTS):re.isSprite&&Wt.setMode(H.TRIANGLES);if(re.isBatchedMesh)if(ut.get("WEBGL_multi_draw"))Wt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const fn=re._multiDrawStarts,et=re._multiDrawCounts,Tn=re._multiDrawCount,rt=Ge?b.get(Ge).bytesPerElement:1,Ki=Te.get(ae).currentProgram.getUniforms();for(let En=0;En<Tn;En++)Ki.setValue(H,"_gl_DrawID",En),Wt.render(fn[En]/rt,et[En])}else if(re.isInstancedMesh)Wt.renderInstances(Je,an,re.count);else if(he.isInstancedBufferGeometry){const fn=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,et=Math.min(he.instanceCount,fn);Wt.renderInstances(Je,an,et)}else Wt.render(Je,an)};function mt(N,j,he,ae){$!==null&&N.isNodeMaterial&&$.setObject(ae,N),Xt===!0&&_e.setState(N,he,!1),N.transparent===!0&&N.side===Gi&&N.forceSinglePass===!1?(N.side=fi,N.needsUpdate=!0,si(N,j,ae),N.side=Ms,N.needsUpdate=!0,si(N,j,ae),N.side=Gi):si(N,j,ae)}this.compile=function(N,j,he=null){he===null&&(he=N),$!==null&&$.renderStart(N,j,he),I=ge.get(he),I.init(j),E.push(I),he.traverseVisible(function(re){re.isLight&&re.layers.test(j.layers)&&(I.pushLight(re),re.castShadow&&I.pushShadow(re))}),N!==he&&N.traverseVisible(function(re){re.isLight&&re.layers.test(j.layers)&&(I.pushLight(re),re.castShadow&&I.pushShadow(re))}),I.setupLights(),$!==null&&$.updateLights(I.state.lightsArray),ln=this.localClippingEnabled,Xt=_e.init(this.clippingPlanes,ln),Xt===!0&&_e.setGlobalState(this.clippingPlanes,j),$!==null&&Le.render(I.state.shadowsArray,he,j);const ae=new Set;return N.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const Be=re.material;if(Be)if(Array.isArray(Be))for(let qe=0;qe<Be.length;qe++){const ke=Be[qe];mt(ke,he,j,re),ae.add(ke)}else mt(Be,he,j,re),ae.add(Be)}),I=E.pop(),$!==null&&$.renderEnd(),ae},this.compileAsync=function(N,j,he=null){const ae=this.compile(N,j,he);return new Promise(re=>{function Be(){if(ae.forEach(function(qe){const Ge=Te.get(qe).currentProgram;(Ge===void 0||Ge.isReady())&&ae.delete(qe)}),ae.size===0){re(N);return}setTimeout(Be,10)}ut.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let Nt=null;function Pn(N){Nt&&Nt(N)}function zt(){Ht.stop()}function Zt(){Ht.start()}const Ht=new Fg;Ht.setAnimationLoop(Pn),typeof self<"u"&&Ht.setContext(self),this.setAnimationLoop=function(N){Nt=N,me.setAnimationLoop(N),N===null?Ht.stop():Ht.start()},me.addEventListener("sessionstart",zt),me.addEventListener("sessionend",Zt),this.render=function(N,j){if(j!==void 0&&j.isCamera!==!0){kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;$!==null&&$.renderStart(N,j);const he=me.enabled===!0&&me.isPresenting===!0,ae=Y!==null&&(ne===null||he)&&Y.begin(B,ne);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(Y===null||Y.isCompositing()===!1)&&(me.cameraAutoUpdate===!0&&me.updateCamera(j),j=me.getCamera()),N.isScene===!0&&N.onBeforeRender(B,N,j,ne),I=ge.get(N,E.length),I.init(j),I.state.textureUnits=je.getTextureUnits(),E.push(I),It.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),j.isArrayCamera?tn.setFromArrayCamera(j):_t.setFromProjectionMatrix(It,Wi,j.reversedDepth),ln=this.localClippingEnabled,Xt=_e.init(this.clippingPlanes,ln),O=Ue.get(N,T.length),O.init(),T.push(O),this.info.render.frame++,me.enabled===!0&&me.isPresenting===!0){const qe=B.xr.getDepthSensingMesh();qe!==null&&vn(qe,j,-1/0,B.sortObjects)}vn(N,j,0,B.sortObjects),O.finish(),$!==null&&$.updateLights(I.state.lightsArray),B.sortObjects===!0&&O.sort(Ke,st),fe=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,fe&&z.addToRenderList(O,N),this.info.autoReset===!0&&this.info.reset(),Xt===!0&&_e.beginShadows();const re=I.state.shadowsArray;if(Le.render(re,N,j),Xt===!0&&_e.endShadows(),(ae&&Y.hasRenderPass())===!1){const qe=O.opaque,ke=O.transmissive;if(I.setupLights(),j.isArrayCamera){const Ge=j.cameras;if(ke.length>0)for(let Qe=0,pt=Ge.length;Qe<pt;Qe++){const Mt=Ge[Qe];Dn(qe,ke,N,Mt)}fe&&z.render(N);for(let Qe=0,pt=Ge.length;Qe<pt;Qe++){const Mt=Ge[Qe];ri(O,N,Mt,Mt.viewport)}}else ke.length>0&&Dn(qe,ke,N,j),fe&&z.render(N),ri(O,N,j)}ne!==null&&J===0&&(je.updateMultisampleRenderTarget(ne),je.updateRenderTargetMipmap(ne)),ae&&Y.end(B),N.isScene===!0&&N.onAfterRender(B,N,j),ce.resetDefaultState(),Q=-1,ee=null,E.pop(),E.length>0?(I=E[E.length-1],je.setTextureUnits(I.state.textureUnits),Xt===!0&&_e.setGlobalState(B.clippingPlanes,I.state.camera)):I=null,T.pop(),T.length>0?O=T[T.length-1]:O=null,$!==null&&$.renderEnd()};function vn(N,j,he,ae){if(N.visible===!1)return;if(N.layers.test(j.layers)){if(N.isGroup)he=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(j);else if(N.isLight)I.pushLight(N),N.castShadow&&I.pushShadow(N);else if(N.isSprite){const qe=j.isArrayCamera?tn:_t;if(!N.frustumCulled||N.intersectsFrustum(qe)){ae&&Bt.setFromMatrixPosition(N.matrixWorld).applyMatrix4(It);const ke=ve.update(N),Ge=N.material;Ge.visible&&O.push(N,ke,Ge,he,Bt.z,null,j)}}else if(N.isMesh||N.isLine||N.isPoints){const qe=j.isArrayCamera?tn:_t;if(!N.frustumCulled||N.intersectsFrustum(qe)){const ke=ve.update(N),Ge=N.material;if(ae&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Bt.copy(N.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),Bt.copy(ke.boundingSphere.center)),Bt.applyMatrix4(N.matrixWorld).applyMatrix4(It)),Array.isArray(Ge)){const Qe=ke.groups;for(let pt=0,Mt=Qe.length;pt<Mt;pt++){const Je=Qe[pt],bt=Ge[Je.materialIndex];bt&&bt.visible&&O.push(N,ke,bt,he,Bt.z,Je,j)}}else Ge.visible&&O.push(N,ke,Ge,he,Bt.z,null,j)}}}const Be=N.children;for(let qe=0,ke=Be.length;qe<ke;qe++)vn(Be[qe],j,he,ae)}function ri(N,j,he,ae){const{opaque:re,transmissive:Be,transparent:qe}=N;I.setupLightsView(he),Xt===!0&&_e.setGlobalState(B.clippingPlanes,he),ae&&Ae.viewport(U.copy(ae)),re.length>0&&Mn(re,j,he),Be.length>0&&Mn(Be,j,he),qe.length>0&&Mn(qe,j,he),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function Dn(N,j,he,ae){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[ae.id]===void 0){const Je=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[ae.id]=new rr(1,1,{generateMipmaps:!0,type:Je?ar:yi,minFilter:Jr,samples:Math.max(4,ft.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Lt.workingColorSpace})}const Be=I.state.transmissionRenderTarget[ae.id],qe=ae.viewport||U;Be.setSize(qe.z*B.transmissionResolutionScale,qe.w*B.transmissionResolutionScale);const ke=B.getRenderTarget(),Ge=B.getActiveCubeFace(),Qe=B.getActiveMipmapLevel();B.setRenderTarget(Be),B.getClearColor(se),we=B.getClearAlpha(),we<1&&B.setClearColor(16777215,.5),B.clear(),fe&&z.render(he);const pt=B.toneMapping;B.toneMapping=Er;const Mt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),I.setupLightsView(ae),Xt===!0&&_e.setGlobalState(B.clippingPlanes,ae),Mn(N,he,ae),je.updateMultisampleRenderTarget(Be),je.updateRenderTargetMipmap(Be),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let bt=0,an=j.length;bt<an;bt++){const Kt=j[bt],{object:Wt,geometry:fn,material:et,group:Tn}=Kt;if(et.side===Gi&&Wt.layers.test(ae.layers)){const rt=et.side;et.side=fi,et.needsUpdate=!0,_n(Wt,he,ae,fn,et,Tn),et.side=rt,et.needsUpdate=!0,Je=!0}}Je===!0&&(je.updateMultisampleRenderTarget(Be),je.updateRenderTargetMipmap(Be))}B.setRenderTarget(ke,Ge,Qe),B.setClearColor(se,we),Mt!==void 0&&(ae.viewport=Mt),B.toneMapping=pt}function Mn(N,j,he){const ae=j.isScene===!0?j.overrideMaterial:null;for(let re=0,Be=N.length;re<Be;re++){const qe=N[re],{object:ke,geometry:Ge,group:Qe}=qe;let pt=qe.material;pt.allowOverride===!0&&ae!==null&&(pt=ae),ke.layers.test(he.layers)&&_n(ke,j,he,Ge,pt,Qe)}}function _n(N,j,he,ae,re,Be){$!==null&&re.isNodeMaterial&&$.setObject(N,re),N.onBeforeRender(B,j,he,ae,re,Be),N.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),re.onBeforeRender(B,j,he,ae,N,Be),re.transparent===!0&&re.side===Gi&&re.forceSinglePass===!1?(re.side=fi,re.needsUpdate=!0,B.renderBufferDirect(he,j,ae,re,N,Be),re.side=Ms,re.needsUpdate=!0,B.renderBufferDirect(he,j,ae,re,N,Be),re.side=Gi):B.renderBufferDirect(he,j,ae,re,N,Be),N.onAfterRender(B,j,he,ae,re,Be)}function nn(N){let j=0;for(const he of N)he.texture!==null&&j++;return j}function si(N,j,he){j.isScene!==!0&&(j=$t);const ae=Te.get(N),re=I.state.lights,Be=I.state.shadowsArray,qe=re.state.version,ke=Me.getParameters(N,re.state,Be,j,he,I.state.lightProbeGridArray),Ge=Me.getProgramCacheKey(ke);let Qe=ae.programs;ae.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?j.environment:null,ae.fog=j.fog;const pt=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;ae.envMap=L.get(N.envMap||ae.environment,pt),ae.envMapRotation=ae.environment!==null&&N.envMap===null?j.environmentRotation:N.envMapRotation,Qe===void 0&&(N.addEventListener("dispose",lt),Qe=new Map,ae.programs=Qe,ae.programVariants=new Map);let Mt=Qe.get(Ge);if(Mt!==void 0){if(ae.currentProgram===Mt&&ae.lightsStateVersion===qe)return ji(N,ke),Mt}else ke.uniforms=Me.getUniforms(N),$!==null&&N.isNodeMaterial&&$.build(N,he,ke),N.onBeforeCompile(ke,B),Mt=Me.acquireProgram(ke,Ge),Qe.set(Ge,Mt),ae.uniforms=ke.uniforms;const Je=ae.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Je.clippingPlanes=_e.uniform),ji(N,ke),ae.needsLights=Xi(N),ae.lightsStateVersion=qe,ae.needsLights&&(Je.ambientLightColor.value=re.state.ambient,Je.lightProbe.value=re.state.probe,Je.sunLights.value=re.state.sun,Je.sunLightShadows.value=re.state.sunShadow,Je.directionalLights.value=re.state.directional,Je.directionalLightShadows.value=re.state.directionalShadow,Je.spotLights.value=re.state.spot,Je.spotLightShadows.value=re.state.spotShadow,Je.rectAreaLights.value=re.state.rectArea,Je.ltc_1.value=re.state.rectAreaLTC1,Je.ltc_2.value=re.state.rectAreaLTC2,Je.pointLights.value=re.state.point,Je.pointLightShadows.value=re.state.pointShadow,Je.hemisphereLights.value=re.state.hemi,Je.sunShadowMatrix.value=re.state.sunShadowMatrix,Je.sunShadowCascade.value=re.state.sunShadowCascade,Je.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Je.spotLightMatrix.value=re.state.spotLightMatrix,Je.spotLightMap.value=re.state.spotLightMap,Je.pointShadowMatrix.value=re.state.pointShadowMatrix),ae.numLightProbeGrids=nn(I.state.lightProbeGridArray),ae.currentProgram=Mt,ae.uniformsList=null,Mt}function Mi(N,j,he,ae,re){const Be=Te.get(N),qe=Be.currentProgram.id+","+ae+","+re;let ke=Be.programVariants.get(qe);return ke===void 0?(ke=si(N,j,he),Be.programVariants.set(qe,ke)):(Be.currentProgram=ke,Be.uniformsList=null,Be.outputColorSpace=ae,Be.toneMapping=re),ke}function Ut(N){if(N.uniformsList===null){const j=N.currentProgram.getUniforms();N.uniformsList=dc.seqWithValue(j.seq,N.uniforms)}return N.uniformsList}function ji(N,j){const he=Te.get(N);he.outputColorSpace=j.outputColorSpace,he.batching=j.batching,he.batchingColor=j.batchingColor,he.instancing=j.instancing,he.instancingColor=j.instancingColor,he.instancingMorph=j.instancingMorph,he.skinning=j.skinning,he.morphTargets=j.morphTargets,he.morphNormals=j.morphNormals,he.morphColors=j.morphColors,he.morphTargetsCount=j.morphTargetsCount,he.numClippingPlanes=j.numClippingPlanes,he.numIntersection=j.numClipIntersection,he.vertexAlphas=j.vertexAlphas,he.vertexTangents=j.vertexTangents,he.toneMapping=j.toneMapping}function Vn(N,j,he,ae,re){j.isScene!==!0&&(j=$t),je.resetTextureUnits();const Be=j.fog,qe=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?j.environment:null,ke=ne===null?B.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Lt.workingColorSpace,Ge=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,Qe=L.get(ae.envMap||qe,Ge),pt=ae.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,Mt=!!he.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Je=!!he.morphAttributes.position,bt=!!he.morphAttributes.normal,an=!!he.morphAttributes.color;let Kt=Er;ae.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Kt=B.toneMapping);const Wt=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,fn=Wt!==void 0?Wt.length:0,et=Te.get(ae),Tn=I.state.lights;if(Xt===!0&&(ln===!0||N!==ee)){const Vt=N===ee&&ae.id===Q;_e.setState(ae,N,Vt)}let rt=!1,Ki=!1;ae.version===et.__version?et.needsLights&&et.lightsStateVersion!==Tn.state.version||re.isBatchedMesh&&et.batching===!1||!re.isBatchedMesh&&et.batching===!0||re.isBatchedMesh&&et.batchingColor===!0&&re._colorsTexture===null||re.isBatchedMesh&&et.batchingColor===!1&&re._colorsTexture!==null||re.isInstancedMesh&&et.instancing===!1||!re.isInstancedMesh&&et.instancing===!0||re.isSkinnedMesh&&et.skinning===!1||!re.isSkinnedMesh&&et.skinning===!0||re.isInstancedMesh&&et.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&et.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&et.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&et.instancingMorph===!1&&re.morphTexture!==null||et.envMap!==Qe||ae.fog===!0&&et.fog!==Be||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==_e.numPlanes||et.numIntersection!==_e.numIntersection)||et.vertexAlphas!==pt||et.vertexTangents!==Mt||et.morphTargets!==Je||et.morphNormals!==bt||et.morphColors!==an||et.morphTargetsCount!==fn||et.numLightProbeGrids!==nn(I.state.lightProbeGridArray)?rt=!0:(et.outputColorSpace!==ke||et.toneMapping!==Kt)&&(Ki=!0):(rt=!0,et.__version=ae.version);let En=et.currentProgram;(rt===!0||Ki===!0)&&(En=Ki===!0?Mi(ae,j,re,ke,Kt):si(ae,j,re),$&&ae.isNodeMaterial&&$.onUpdateProgram(ae,En,et));let br=!1,Pi=!1,Yi=!1;const Pt=En.getUniforms(),mn=et.uniforms;if(Ae.useProgram(En.program)&&(br=!0,Pi=!0,Yi=!0),ae.id!==Q&&(Q=ae.id,Pi=!0),br||ee!==N){Ae.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),Pt.setValue(H,"projectionMatrix",N.projectionMatrix),Pt.setValue(H,"viewMatrix",N.matrixWorldInverse);const Qt=Pt.map.cameraPosition;Qt!==void 0&&Qt.setValue(H,Sn.setFromMatrixPosition(N.matrixWorld)),ft.logarithmicDepthBuffer&&Pt.setValue(H,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Pt.setValue(H,"isOrthographic",N.isOrthographicCamera===!0),ee!==N&&(ee=N,Pi=!0,Yi=!0)}if(et.needsLights&&(Tn.state.sunShadowMap.length>0&&Pt.setValue(H,"sunShadowMap",Tn.state.sunShadowMap,je),Tn.state.directionalShadowMap.length>0&&Pt.setValue(H,"directionalShadowMap",Tn.state.directionalShadowMap,je),Tn.state.spotShadowMap.length>0&&Pt.setValue(H,"spotShadowMap",Tn.state.spotShadowMap,je),Tn.state.pointShadowMap.length>0&&Pt.setValue(H,"pointShadowMap",Tn.state.pointShadowMap,je)),re.isSkinnedMesh){Pt.setOptional(H,re,"bindMatrix"),Pt.setOptional(H,re,"bindMatrixInverse");const Vt=re.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),Pt.setValue(H,"boneTexture",Vt.boneTexture,je))}re.isBatchedMesh&&(Pt.setOptional(H,re,"batchingTexture"),Pt.setValue(H,"batchingTexture",re._matricesTexture,je),Pt.setOptional(H,re,"batchingIdTexture"),Pt.setValue(H,"batchingIdTexture",re._indirectTexture,je),Pt.setOptional(H,re,"batchingColorTexture"),re._colorsTexture!==null&&Pt.setValue(H,"batchingColorTexture",re._colorsTexture,je));const Gn=he.morphAttributes;if((Gn.position!==void 0||Gn.normal!==void 0||Gn.color!==void 0)&&xe.update(re,he,En),(Pi||et.receiveShadow!==re.receiveShadow)&&(et.receiveShadow=re.receiveShadow,Pt.setValue(H,"receiveShadow",re.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&j.environment!==null&&(mn.envMapIntensity.value=j.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=DE()),Pi){if(Pt.setValue(H,"toneMappingExposure",B.toneMappingExposure),et.needsLights&&Cr(mn,Yi),Be&&ae.fog===!0&&Pe.refreshFogUniforms(mn,Be),Pe.refreshMaterialUniforms(mn,ae,Ee,He,I.state.transmissionRenderTarget[N.id]),et.needsLights&&et.numLightProbeGrids>0){const Vt=P;let Qt=0;for(const Ln of I.state.lightProbeGridArray)Ln.texture!==null&&(Vt.textures[Qt]=Ln.texture,Vt.min[Qt]=Ln.boundingBox.min,Vt.max[Qt]=Ln.boundingBox.max,Vt.resolution[Qt]=Ln.resolution,Qt++);for(const Ln in Vt)Vt[Ln].length=Qt;mn.probesSH.value=Vt.textures,mn.probesMin.value=Vt.min,mn.probesMax.value=Vt.max,mn.probesResolution.value=Vt.resolution}dc.upload(H,Ut(et),mn,je)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(dc.upload(H,Ut(et),mn,je),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Pt.setValue(H,"center",re.center),Pt.setValue(H,"modelViewMatrix",re.modelViewMatrix),Pt.setValue(H,"normalMatrix",re.normalMatrix),Pt.setValue(H,"modelMatrix",re.matrixWorld),ae.uniformsGroups!==void 0){const Vt=ae.uniformsGroups;for(let Qt=0,Ln=Vt.length;Qt<Ln;Qt++){const Rr=Vt[Qt];Se.update(Rr,En),Se.bind(Rr,En)}}return En}function Cr(N,j){N.ambientLightColor.needsUpdate=j,N.lightProbe.needsUpdate=j,N.sunLights.needsUpdate=j,N.sunLightShadows.needsUpdate=j,N.directionalLights.needsUpdate=j,N.directionalLightShadows.needsUpdate=j,N.pointLights.needsUpdate=j,N.pointLightShadows.needsUpdate=j,N.spotLights.needsUpdate=j,N.spotLightShadows.needsUpdate=j,N.rectAreaLights.needsUpdate=j,N.hemisphereLights.needsUpdate=j}function Xi(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return le},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(N,j,he){const ae=Te.get(N);ae.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),Te.get(N.texture).__webglTexture=j,Te.get(N.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:he,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,j){const he=Te.get(N);he.__webglFramebuffer=j,he.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(N,j=0,he=0){ne=N,le=j,J=he;let ae=null,re=!1,Be=!1;if(N){const ke=Te.get(N);if(ke.__useDefaultFramebuffer!==void 0){Ae.bindFramebuffer(H.FRAMEBUFFER,ke.__webglFramebuffer),U.copy(N.viewport),ie.copy(N.scissor),Fe=N.scissorTest,Ae.viewport(U),Ae.scissor(ie),Ae.setScissorTest(Fe),Q=-1;return}else if(ke.__webglFramebuffer===void 0)je.setupRenderTarget(N);else if(ke.__hasExternalTextures)je.rebindTextures(N,Te.get(N.texture).__webglTexture,Te.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const pt=N.depthTexture;if(ke.__boundDepthTexture!==pt){if(pt!==null&&Te.has(pt)&&(N.width!==pt.image.width||N.height!==pt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");je.setupDepthRenderbuffer(N)}}const Ge=N.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Be=!0);const Qe=Te.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Qe[j])?ae=Qe[j][he]:ae=Qe[j],re=!0):N.samples>0&&je.useMultisampledRTT(N)===!1?ae=Te.get(N).__webglMultisampledFramebuffer:Array.isArray(Qe)?ae=Qe[he]:ae=Qe,U.copy(N.viewport),ie.copy(N.scissor),Fe=N.scissorTest}else U.copy(at).multiplyScalar(Ee).floor(),ie.copy(ct).multiplyScalar(Ee).floor(),Fe=At;if(he!==0&&(ae=te),Ae.bindFramebuffer(H.FRAMEBUFFER,ae)&&Ae.drawBuffers(N,ae),Ae.viewport(U),Ae.scissor(ie),Ae.setScissorTest(Fe),re){const ke=Te.get(N.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+j,ke.__webglTexture,he)}else if(Be){const ke=j;for(let Ge=0;Ge<N.textures.length;Ge++){const Qe=Te.get(N.textures[Ge]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Ge,Qe.__webglTexture,he,ke)}}else if(N!==null&&he!==0){const ke=Te.get(N.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ke.__webglTexture,he)}Q=-1};function or(N){const j=Te.get(N);return(j.__readFormat!==N.format||j.__readType!==N.type)&&(j.__readFormat=N.format,j.__readType=N.type,j.__formatReadable=ft.textureFormatReadable(N.format),j.__typeReadable=ft.textureTypeReadable(N.type)),j}this.readRenderTargetPixels=function(N,j,he,ae,re,Be,qe,ke=0){if(!(N&&N.isWebGLRenderTarget)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Te.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&qe!==void 0&&(Ge=Ge[qe],Array.isArray(Ge)&&(Ge=Ge[0])),Ge){Ae.bindFramebuffer(H.FRAMEBUFFER,Ge);try{const Qe=N.textures[ke],pt=Qe.format,Mt=Qe.type;N.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+ke);const Je=or(Qe);if(Je.__formatReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Je.__typeReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=N.width-ae&&he>=0&&he<=N.height-re&&H.readPixels(j,he,ae,re,ye.convert(pt),ye.convert(Mt),Be)}finally{const Qe=ne!==null?Te.get(ne).__webglFramebuffer:null;Ae.bindFramebuffer(H.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(N,j,he,ae,re,Be,qe,ke=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=Te.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&qe!==void 0&&(Ge=Ge[qe],Array.isArray(Ge)&&(Ge=Ge[0])),Ge)if(j>=0&&j<=N.width-ae&&he>=0&&he<=N.height-re){Ae.bindFramebuffer(H.FRAMEBUFFER,Ge);const Qe=N.textures[ke],pt=Qe.format,Mt=Qe.type;N.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+ke);const Je=or(Qe);if(Je.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Je.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const bt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,bt),H.bufferData(H.PIXEL_PACK_BUFFER,Be.byteLength,H.STREAM_READ),H.readPixels(j,he,ae,re,ye.convert(pt),ye.convert(Mt),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);const an=ne!==null?Te.get(ne).__webglFramebuffer:null;Ae.bindFramebuffer(H.FRAMEBUFFER,an);const Kt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Lx(H,Kt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,bt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Be),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(bt),H.deleteSync(Kt),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,j=null,he=0){const ae=Math.pow(2,-he),re=Math.floor(N.image.width*ae),Be=Math.floor(N.image.height*ae),qe=j!==null?j.x:0,ke=j!==null?j.y:0;je.setTexture2D(N,0),H.copyTexSubImage2D(H.TEXTURE_2D,he,0,0,qe,ke,re,Be),Ae.unbindTexture()},this.copyTextureToTexture=function(N,j,he=null,ae=null,re=0,Be=0){let qe,ke,Ge,Qe,pt,Mt,Je,bt,an;const Kt=N.isCompressedTexture?N.mipmaps[Be]:N.image;if(he!==null)qe=he.max.x-he.min.x,ke=he.max.y-he.min.y,Ge=he.isBox3?he.max.z-he.min.z:1,Qe=he.min.x,pt=he.min.y,Mt=he.isBox3?he.min.z:0;else{const Pt=Math.pow(2,-re);qe=Math.floor(Kt.width*Pt),ke=Math.floor(Kt.height*Pt),N.isDataArrayTexture?Ge=Kt.depth:N.isData3DTexture?Ge=Math.floor(Kt.depth*Pt):Ge=1,Qe=0,pt=0,Mt=0}ae!==null?(Je=ae.x,bt=ae.y,an=ae.z):(Je=0,bt=0,an=0);const Wt=ye.convert(j.format),fn=ye.convert(j.type);let et;j.isData3DTexture?(je.setTexture3D(j,0),et=H.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(je.setTexture2DArray(j,0),et=H.TEXTURE_2D_ARRAY):(je.setTexture2D(j,0),et=H.TEXTURE_2D),Ae.activeTexture(H.TEXTURE0),Ae.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,j.flipY),Ae.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),Ae.pixelStorei(H.UNPACK_ALIGNMENT,j.unpackAlignment);const Tn=Ae.getParameter(H.UNPACK_ROW_LENGTH),rt=Ae.getParameter(H.UNPACK_IMAGE_HEIGHT),Ki=Ae.getParameter(H.UNPACK_SKIP_PIXELS),En=Ae.getParameter(H.UNPACK_SKIP_ROWS),br=Ae.getParameter(H.UNPACK_SKIP_IMAGES);Ae.pixelStorei(H.UNPACK_ROW_LENGTH,Kt.width),Ae.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Kt.height),Ae.pixelStorei(H.UNPACK_SKIP_PIXELS,Qe),Ae.pixelStorei(H.UNPACK_SKIP_ROWS,pt),Ae.pixelStorei(H.UNPACK_SKIP_IMAGES,Mt);const Pi=N.isDataArrayTexture||N.isData3DTexture,Yi=j.isDataArrayTexture||j.isData3DTexture;if(N.isDepthTexture){const Pt=Te.get(N),mn=Te.get(j),Gn=Te.get(Pt.__renderTarget),Vt=Te.get(mn.__renderTarget);Ae.bindFramebuffer(H.READ_FRAMEBUFFER,Gn.__webglFramebuffer),Ae.bindFramebuffer(H.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let Qt=0;Qt<Ge;Qt++)Pi&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Te.get(N).__webglTexture,re,Mt+Qt),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Te.get(j).__webglTexture,Be,an+Qt)),H.blitFramebuffer(Qe,pt,Qe+qe,pt+ke,Je,bt,Je+qe,bt+ke,H.DEPTH_BUFFER_BIT,H.NEAREST);Ae.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(re!==0||N.isRenderTargetTexture||Te.has(N)){const Pt=Te.get(N),mn=Te.get(j);Ae.bindFramebuffer(H.READ_FRAMEBUFFER,V),Ae.bindFramebuffer(H.DRAW_FRAMEBUFFER,ue);for(let Gn=0;Gn<Ge;Gn++)Pi?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Pt.__webglTexture,re,Mt+Gn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Pt.__webglTexture,re),Yi?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,mn.__webglTexture,Be,an+Gn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,mn.__webglTexture,Be),re!==0?H.blitFramebuffer(Qe,pt,Qe+qe,pt+ke,Je,bt,Je+qe,bt+ke,H.COLOR_BUFFER_BIT,H.NEAREST):Yi?H.copyTexSubImage3D(et,Be,Je,bt,an+Gn,Qe,pt,qe,ke):H.copyTexSubImage2D(et,Be,Je,bt,Qe,pt,qe,ke);Ae.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Yi?N.isDataTexture||N.isData3DTexture?H.texSubImage3D(et,Be,Je,bt,an,qe,ke,Ge,Wt,fn,Kt.data):j.isCompressedArrayTexture?H.compressedTexSubImage3D(et,Be,Je,bt,an,qe,ke,Ge,Wt,Kt.data):H.texSubImage3D(et,Be,Je,bt,an,qe,ke,Ge,Wt,fn,Kt):N.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Be,Je,bt,qe,ke,Wt,fn,Kt.data):N.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Be,Je,bt,Kt.width,Kt.height,Wt,Kt.data):H.texSubImage2D(H.TEXTURE_2D,Be,Je,bt,qe,ke,Wt,fn,Kt);Ae.pixelStorei(H.UNPACK_ROW_LENGTH,Tn),Ae.pixelStorei(H.UNPACK_IMAGE_HEIGHT,rt),Ae.pixelStorei(H.UNPACK_SKIP_PIXELS,Ki),Ae.pixelStorei(H.UNPACK_SKIP_ROWS,En),Ae.pixelStorei(H.UNPACK_SKIP_IMAGES,br),Be===0&&j.generateMipmaps===!0&&j.mipmapsAutoUpdate===!0&&H.generateMipmap(et),Ae.unbindTexture()},this.initRenderTarget=function(N){Te.get(N).__webglFramebuffer===void 0&&je.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?je.setTextureCube(N,0):N.isData3DTexture?je.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?je.setTexture2DArray(N,0):je.setTexture2D(N,0),Ae.unbindTexture()},this.resetState=function(){le=0,J=0,ne=null,Ae.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Lt._getUnpackColorSpace()}}const X0={type:"change"},nf={type:"start"},Yg={type:"end"},sc=new bc,K0=new Sr,IE=Math.cos(70*Fx.DEG2RAD),Cn=new A,di=2*Math.PI,jt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},jh=1e-6;class UE extends B1{constructor(e,t=null){super(e,t),this.state=jt.NONE,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ma.ROTATE,MIDDLE:ma.DOLLY,RIGHT:ma.PAN},this.touches={ONE:fa.ROTATE,TWO:fa.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new is,this._lastTargetPosition=new A,this._quat=new is().setFromUnitVectors(e.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new T0,this._sphericalDelta=new T0,this._scale=1,this._panOffset=new A,this._rotateStart=new Xe,this._rotateEnd=new Xe,this._rotateDelta=new Xe,this._panStart=new Xe,this._panEnd=new Xe,this._panDelta=new Xe,this._dollyStart=new Xe,this._dollyEnd=new Xe,this._dollyDelta=new Xe,this._dollyDirection=new A,this._mouse=new Xe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=FE.bind(this),this._onPointerDown=OE.bind(this),this._onPointerUp=kE.bind(this),this._onContextMenu=jE.bind(this),this._onMouseWheel=HE.bind(this),this._onKeyDown=VE.bind(this),this._onTouchStart=GE.bind(this),this._onTouchMove=WE.bind(this),this._onMouseDown=BE.bind(this),this._onMouseMove=zE.bind(this),this._interceptControlDown=XE.bind(this),this._interceptControlUp=KE.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=jt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(X0),this.update(),this.state=jt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Cn.copy(t).sub(this.target),Cn.applyQuaternion(this._quat),this._spherical.setFromVector3(Cn),this.autoRotate&&this.state===jt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=di:r>Math.PI&&(r-=di),o<-Math.PI?o+=di:o>Math.PI&&(o-=di),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(Cn.setFromSpherical(this._spherical),Cn.applyQuaternion(this._quatInverse),t.copy(this.target).add(Cn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const d=Cn.length();u=this._clampDistance(d*this._scale);const f=d-u;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),l=!!f}else if(this.object.isOrthographicCamera){const d=new A(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=f!==this.object.zoom;const p=new A(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),u=Cn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(sc.origin.copy(this.object.position),sc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(sc.direction))<IE?this.object.lookAt(this.target):(K0.setFromNormalAndCoplanarPoint(this.object.up,this.target),sc.intersectPlane(K0,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>jh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>jh||this._lastTargetPosition.distanceToSquared(this.target)>jh?(this.dispatchEvent(X0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?di/60*this.autoRotateSpeed*e:di/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Cn.setFromMatrixColumn(t,0),Cn.multiplyScalar(-e),this._panOffset.add(Cn)}_panUp(e,t){this.screenSpacePanning===!0?Cn.setFromMatrixColumn(t,1):(Cn.setFromMatrixColumn(t,0),Cn.crossVectors(this.object.up,Cn)),Cn.multiplyScalar(e),this._panOffset.add(Cn)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;Cn.copy(o).sub(this.target);let l=Cn.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=e-r.left,l=t-r.top,u=r.width,d=r.height;this._mouse.x=o/u*2-1,this._mouse.y=-(l/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(di*this._rotateDelta.x/t.clientHeight),this._rotateUp(di*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(di*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-di*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(di*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-di*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(r,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),o=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(o,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(di*this._rotateDelta.x/t.clientHeight),this._rotateUp(di*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,d=(e.pageY+t.y)*.5;this._updateZoomParameters(u,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Xe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function OE(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function FE(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function kE(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Yg),this.state=jt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function BE(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ma.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=jt.DOLLY;break;case ma.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=jt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=jt.ROTATE}break;case ma.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=jt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=jt.PAN}break;default:this.state=jt.NONE}this.state!==jt.NONE&&this.dispatchEvent(nf)}function zE(s){switch(this.state){case jt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case jt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case jt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function HE(s){this.enabled===!1||this.enableZoom===!1||this.state!==jt.NONE||(s.preventDefault(),this.dispatchEvent(nf),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Yg))}function VE(s){this.enabled!==!1&&this._handleKeyDown(s)}function GE(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case fa.ROTATE:if(this.enableRotate===!1){this.state=jt.NONE;break}this._handleTouchStartRotate(s),this.state=jt.TOUCH_ROTATE;break;case fa.PAN:if(this.enablePan===!1){this.state=jt.NONE;break}this._handleTouchStartPan(s),this.state=jt.TOUCH_PAN;break;default:this.state=jt.NONE}break;case 2:switch(this.touches.TWO){case fa.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=jt.TOUCH_DOLLY_PAN;break;case fa.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=jt.TOUCH_DOLLY_ROTATE;break;default:this.state=jt.NONE}break;default:this.state=jt.NONE}this.state!==jt.NONE&&this.dispatchEvent(nf)}function WE(s){switch(this._trackPointer(s),this.state){case jt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case jt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case jt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case jt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=jt.NONE}}function jE(s){this.enabled!==!1&&s.preventDefault()}function XE(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function KE(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Y0({theme:s="dark",heatmap:e="pressure",assetsLayer:t={pipes:!0,pipesPrimary:!0,pipesSecondary:!0,pipesTertiary:!0,pipesService:!0,buildings:!0,hydrants:!0,streetLabels:!0,valves:!0,tanks:!0,sensors:!0,contour:!0},closedValves:r={},onToggleValve:o,simTime:l=14,currentSim:u={label:"14:00 - Giờ bình thường",flow:12580,pressure:3.32},compact:d=!1,viewMode:f="3d",onSelectAsset:p}){const _=Dt.useRef(null),M=Dt.useRef(null),v=Dt.useRef(null),S=Dt.useRef(null),w=Dt.useRef(null),R=Dt.useRef(null),y=Dt.useRef([]),x=Dt.useRef([]),[D,F]=Dt.useState(null),P=Object.entries(r).filter(([O,I])=>I);return Dt.useEffect(()=>{const O=_.current;if(!O)return;const I=O.clientWidth||900,T=O.clientHeight||560,E=s==="dark",Y=f==="xray",B=f==="2d",G=new Zx;M.current=G,G.background=new wt(E?792880:16317180),G.fog=null;const $=new Vi(B?36:42,I/T,2,8500);B?$.position.set(0,2200,.1):$.position.set(780,720,880),v.current=$;const te=new LE({antialias:!0,alpha:!1,powerPreference:"high-performance"});for(te.setSize(I,T),te.setPixelRatio(Math.min(window.devicePixelRatio,2)),te.shadowMap.enabled=!0,te.shadowMap.type=Q0,te.toneMapping=Hd,te.toneMappingExposure=E?1.35:1.05,w.current=te;O.firstChild;)O.removeChild(O.firstChild);O.appendChild(te.domElement);const V=new UE($,te.domElement);V.enableDamping=!0,V.dampingFactor=.06,V.maxPolarAngle=B?.05:Math.PI/2-.03,V.minDistance=25,V.maxDistance=3400,V.target.set(0,B?0:15,0),S.current=V;const ue=new U1(E?6333946:16777215,E?1.25:1.1);G.add(ue);const le=new I1(16776688,E?2.45:1.5);le.position.set(650,950,550),le.castShadow=!0,le.shadow.mapSize.width=2048,le.shadow.mapSize.height=2048,le.shadow.camera.near=100,le.shadow.camera.far=3200;const J=1250;le.shadow.camera.left=-J,le.shadow.camera.right=J,le.shadow.camera.top=J,le.shadow.camera.bottom=-J,le.shadow.bias=-3e-4,G.add(le);const ne=new P1(E?3718648:14742270,E?988970:9741240,E?.85:.45);G.add(ne),x.current=[],y.current=[];const Q=new Hi(2600,2600),ee=new kn({color:E?463136:14870768,roughness:.9,metalness:.08}),U=new Ft(Q,ee);U.rotation.x=-Math.PI/2,U.position.y=-.2,U.receiveShadow=!0,G.add(U);const ie=new k1(2600,130,E?165063:13358561,E?992324:14870768);ie.position.y=.02,G.add(ie);const Fe=new Tc(1240,1248,64),se=new da({color:E?165063:959977,side:Gi,transparent:!0,opacity:.35}),we=new Ft(Fe,se);we.rotation.x=-Math.PI/2,we.position.y=.04,G.add(we);const Ce=new $n;G.add(Ce);const He=new kn({color:E?1318446:4674921,roughness:.65,metalness:.15}),Ee=new kn({color:E?1976635:9741240,roughness:.8});new da({color:16096779});const Ke=new da({color:E?9741240:16777215}),st=(W,q,ye,ce,Se=!0,Ve="Đường đô thị",me=!0)=>{const Ie=new Hi(ye,ce),Ze=new Ft(Ie,He);Ze.rotation.x=-Math.PI/2,Ze.position.set(W,.05,q),Se||(Ze.rotation.z=Math.PI/2),Ze.receiveShadow=!0,Ce.add(Ze);const Ne=ye>=24?4:2.5,lt=new Hi(Ne,ce),St=new Ft(lt,Ee);St.rotation.x=-Math.PI/2,Se?St.position.set(W-ye/2-Ne/2,.1,q):(St.rotation.z=Math.PI/2,St.position.set(W,.1,q-ye/2-Ne/2)),Ce.add(St);const Ct=new Ft(lt,Ee);Ct.rotation.x=-Math.PI/2,Se?Ct.position.set(W+ye/2+Ne/2,.1,q):(Ct.rotation.z=Math.PI/2,Ct.position.set(W,.1,q+ye/2+Ne/2)),Ce.add(Ct);const mt=Math.floor(ce/24);for(let Nt=0;Nt<mt;Nt++){const Pn=new Hi(.5,6),zt=new Ft(Pn,Ke);zt.rotation.x=-Math.PI/2,Se?zt.position.set(W,.08,q-ce/2+Nt*24+12):(zt.rotation.z=Math.PI/2,zt.position.set(W-ce/2+Nt*24+12,.08,q)),Ce.add(zt)}};st(0,0,24,2400,!0,"Đường Hoàng Đạo Thúy",!0),st(0,180,28,2500,!1,"Đường Lê Văn Lương",!0),st(0,-180,30,2500,!1,"Đường Trần Duy Hưng",!0),st(-440,0,40,2500,!0,"Đường Phạm Hùng - Khuất Duy Tiến (Vành Đai 3)",!0),st(-160,0,22,2400,!0,"Đường Hoàng Minh Giám",!0),st(-700,40,44,1400,!1,"Đại Lộ Thăng Long",!0),st(340,0,22,2400,!0,"Phố Trung Kính",!0),st(140,0,16,2200,!0,"Phố Nguyễn Thị Định",!1),st(240,220,18,1400,!0,"Phố Vũ Trọng Phụng",!0),st(290,240,18,1400,!0,"Phố Nguyễn Tuân",!0),st(0,0,18,2400,!1,"Đường Nguyễn Thị Thập",!1),st(0,90,16,2200,!1,"Phố Hoàng Ngân",!1),st(0,-90,16,2e3,!1,"Phố Đỗ Quang",!1),st(0,240,16,2200,!1,"Phố Quan Nhân",!1),st(0,290,16,2e3,!1,"Phố Nhân Hòa & Chính Kinh",!1),st(0,350,22,2400,!1,"Đường Ngụy Như Kon Tum",!0),st(0,430,18,2200,!1,"Đường Nguyễn Huy Tưởng",!1),st(0,-340,24,2400,!1,"Đường Nguyễn Chánh / Vũ Phạm Hàm",!0),st(0,-260,18,1800,!1,"Đường Mạc Thái Tổ",!1),st(0,-220,18,1800,!1,"Đường Mạc Thái Tông",!1),st(-200,-460,24,2e3,!1,"Đường Mễ Trì",!0),st(-200,-540,26,2e3,!1,"Đường Dương Đình Nghệ",!0);const at=new $n;G.add(at);const ct=(W,q,ye=50,ce=12.5,Se=!0)=>{if(!t.streetLabels)return null;const me=document.createElement("canvas").getContext("2d"),Ie=Se?30:26;me.font=`bold ${Ie}px -apple-system, BlinkMacSystemFont, "Plus Jakarta Sans", Roboto, sans-serif`;const Ne=me.measureText(W).width,lt=Math.max(512,Math.ceil(Ne+170)),St=128,Ct=document.createElement("canvas");Ct.width=lt,Ct.height=St;const mt=Ct.getContext("2d"),Nt=26,Pn=10,zt=12,Zt=lt-20,Ht=104;mt.beginPath(),mt.roundRect(Pn,zt,Zt,Ht,Nt),mt.closePath(),mt.fillStyle=E?"rgba(10, 18, 34, 0.95)":"rgba(255, 255, 255, 0.96)",mt.fill(),mt.lineWidth=Se?5:3.5,mt.strokeStyle=Se?E?"#38bdf8":"#0284c7":E?"#64748b":"#94a3b8",mt.stroke(),mt.fillStyle=Se?"#0284c7":"#475569",mt.beginPath(),mt.arc(68,64,28,0,Math.PI*2),mt.fill(),mt.fillStyle="#ffffff",mt.font='bold 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',mt.textAlign="center",mt.textBaseline="middle",mt.fillText(Se?"ĐT":"HN",68,64),mt.fillStyle=E?"#ffffff":"#0f172a",mt.font=`bold ${Ie}px -apple-system, BlinkMacSystemFont, "Plus Jakarta Sans", Roboto, sans-serif`,mt.textAlign="left",mt.textBaseline="middle",mt.fillText(W,114,64);const vn=new h0(Ct);vn.minFilter=ii;const ri=new Id({map:vn,transparent:!0,depthTest:!1}),Dn=new n0(ri);Dn.position.set(q[0],q[1]+16,q[2]);const Mn=lt/512*ye;return Dn.scale.set(Mn,ce,1),at.add(Dn),Dn};ct("ĐƯỜNG HOÀNG ĐẠO THÚY",[0,10,-50],55,13.5,!0),ct("ĐƯỜNG LÊ VĂN LƯƠNG",[120,10,180],52,13,!0),ct("ĐƯỜNG TRẦN DUY HƯNG",[120,10,-180],52,13,!0),ct("ĐƯỜNG PHẠM HÙNG (VÀNH ĐAI 3)",[-440,10,-80],65,16,!0),ct("ĐƯỜNG HOÀNG MINH GIÁM",[-160,10,80],55,13.5,!0),ct("ĐẠI LỘ THĂNG LONG",[-720,10,40],56,14,!0),ct("ĐƯỜNG NGUYỄN THỊ THẬP",[-80,10,0],48,12,!1),ct("PHỐ NGUYỄN THỊ ĐỊNH",[140,10,-70],48,12,!1),ct("PHỐ HOÀNG NGÂN",[60,10,90],44,11,!1),ct("PHỐ ĐỖ QUANG",[60,10,-90],44,11,!1),ct("PHỐ VŨ TRỌNG PHỤNG",[240,10,240],46,11.5,!1),ct("PHỐ NGUYỄN TUÂN",[290,10,290],46,11.5,!1),ct("ĐƯỜNG NGỤY NHƯ KON TUM",[140,10,350],52,13,!1),ct("PHỐ TRUNG KÍNH",[340,10,50],46,11.5,!1),ct("KEANGNAM LANDMARK 72 (350M)",[-540,16,-320],68,17,!0),ct("TRUNG TÂM HỘI NGHỊ QUỐC GIA (NCC)",[-440,14,120],68,17,!0),ct("VINHOMES D'CAPITALE & BIG C",[-220,12,-180],62,15.5,!0),ct("HỒ ĐIỀU HÒA NHÂN CHÍNH (8.2 HA)",[-260,10,95],58,14.5,!0);const At=new kn({color:E?536393:223649,roughness:.1,metalness:.8,transparent:!0,opacity:E?.88:.75}),_t=new kn({color:E?413243:1467700,roughness:.9}),tn=new Hi(160,140),Xt=new Ft(tn,At);Xt.rotation.x=-Math.PI/2,Xt.position.set(-260,.25,95),Xt.receiveShadow=!0,G.add(Xt);const ln=new Hi(168,148),It=new Ft(ln,_t);It.rotation.x=-Math.PI/2,It.position.set(-260,.2,95),G.add(It);const Sn=new Hi(220,150),Bt=new Ft(Sn,At);Bt.rotation.x=-Math.PI/2,Bt.position.set(-540,.25,120),Bt.receiveShadow=!0,G.add(Bt);const $t=new $n;G.add($t);const fe=!!r["VALVE-01"],ze=!!r["VALVE-02"],H=!!r["VALVE-03"],it=!!r["VALVE-04"],ut=!!r["VALVE-05"],ft=!!r["VALVE-06"],Ae=!!r["VALVE-07"],xt=!!r["VALVE-08"],Te=({pos:W=[0,0,0],size:q=[16,40,16],color:ye=3718648,name:ce,id:Se,floors:Ve,households:me,demandFlow:Ie,intakePressure:Ze,connectionPipe:Ne,cisternCapacity:lt,meterId:St,dma:Ct,hasAntenna:mt=!1,isCutOff:Nt=!1,cutOffValveName:Pn=""})=>{if(!t.buildings)return null;const zt=new $n;zt.position.set(W[0],0,W[2]);const[Zt,Ht,vn]=q,ri=Nt?15680580:ye,Dn=new Tr(Zt,Ht,vn),Mn=new kn({color:Y?165063:ri,metalness:Y?.05:Nt?.2:.42,roughness:Y?.1:.22,transparent:!0,opacity:Y?.12:Nt?.75:E?.92:.94,depthWrite:!Y,emissive:Nt?10033947:Y?165063:E?ri:0,emissiveIntensity:Nt?.45:Y?.04:.18}),_n=new Ft(Dn,Mn);_n.position.y=Ht/2,_n.castShadow=!Y,_n.receiveShadow=!Y,zt.add(_n);const nn=new d0(Dn),si=new Ud(nn,new yc({color:Nt?16557477:E?8246268:165063,linewidth:Y?1:Nt?2.5:1.5,transparent:Y,opacity:Y?.28:1}));if(_n.add(si),mt){const Ut=new Zr(.3,.5,20,8),ji=new kn({color:14870768,metalness:.85}),Vn=new Ft(Ut,ji);Vn.position.set(0,Ht+12,0),zt.add(Vn);const Cr=new pa(1.2,8,8),Xi=new da({color:Nt?16096779:15680580}),or=new Ft(Cr,Xi);or.position.set(0,Ht+22,0),zt.add(or)}const Mi={name:ce,id:Se,type:"Công Trình & Tòa Nhà Đô Thị",status:Nt?`⚠️ ĐÃ CẮT NƯỚC CỤC BỘ (Do đóng chốt khóa: ${Pn})`:"Cấp nước liên tục 24/7 (Đạt chuẩn QCVN 01-1:2018/BXD)",floors:`${Ve} tầng`,households:me||"500 căn hộ",flow:Nt?"0.0 m³/h (Mất áp)":Ie||"45.0 m³/h",pressure:Nt?"0.00 bar (MẤT NƯỚC)":Ze||"3.25 bar",elevation:"+17.2m ASL",connectionPipe:Ne||"DN65 HDPE",cisternCapacity:lt||"800 m³",meterId:St||`AMR-${Se}`,dma:Ct||"DMA THNC-02",isCutOff:Nt,cutOffValveName:Pn};return zt.userData={name:ce,id:Se,type:"Building",data:Mi},_n.userData=zt.userData,x.current.push(_n),$t.add(zt),zt},je=({center:W,size:q,rows:ye=2,cols:ce=6,heightRange:Se=[15,22],zoneId:Ve,isCutOff:me,cutOffValveName:Ie,blockName:Ze="Khu Nhà Phố Liền Kề",dma:Ne="DMA THNC-02"})=>{if(!t.buildings)return;const[lt,St]=W,[Ct,mt]=q,Nt=Ct/ce,Pn=mt/ye,zt=new $n;for(let Zt=0;Zt<ye;Zt++)for(let Ht=0;Ht<ce;Ht++){const vn=lt-Ct/2+(Ht+.5)*Nt,ri=St-mt/2+(Zt+.5)*Pn,Dn=(Math.sin(vn*12.9898+ri*78.233)*43758.5453%1+1)%1,Mn=Se[0]+Dn*(Se[1]-Se[0]),_n=Nt*.88,nn=Pn*.86,si=new Tr(_n,Mn,nn),Mi=E?[3359061,1976635,4674921,988970,223649]:[15857145,14870768,13358561,9741240,12573694],Ut=Math.floor(Dn*Mi.length)%Mi.length,ji=new kn({color:Y?165063:me?15680580:Mi[Ut],roughness:Y?.1:.5,metalness:Y?.05:.1,transparent:!0,opacity:Y?.08:me?.75:1,depthWrite:!Y,emissive:me?10033947:E?Y?165063:Mi[Ut]:0,emissiveIntensity:me?.3:E?Y?.02:.12:0}),Vn=new Ft(si,ji);Vn.position.set(vn,Mn/2,ri),Vn.castShadow=!0,Vn.receiveShadow=!0;const Cr=new d0(si),Xi=new Ud(Cr,new yc({color:me?16557477:E?3718648:6583435,linewidth:1}));Vn.add(Xi);const or={name:`${Ze} (Lô ${Zt+1}-${Ht+1})`,id:`HOUSE-${Ve}-${Zt+1}-${Ht+1}`,type:"Nhà Phố / Shophouse Phân Lô",status:me?`⚠️ MẤT NƯỚC (Do đóng van: ${Ie})`:"Cấp nước ổn định",floors:`${Math.round(Mn/3.6)} tầng`,households:"1 hộ gia đình + mặt bằng kinh doanh",flow:me?"0.0 m³/h":"0.45 m³/h",pressure:me?"0.00 bar":"3.22 bar",elevation:"+16.5m ASL",connectionPipe:"DN32 HDPE",cisternCapacity:"2.5 m³ bồn Inox",meterId:`AMR-H-${Ve}-${Zt+1}${Ht+1}`,dma:Ne,isCutOff:me,cutOffValveName:Ie};Vn.userData={name:`${Ze} (Lô ${Zt+1}-${Ht+1})`,id:`HOUSE-${Ve}-${Zt+1}-${Ht+1}`,type:"Building",data:or},x.current.push(Vn),zt.add(Vn)}$t.add(zt)};Te({pos:[-540,0,-320],size:[48,165,48],color:E?165063:223649,name:"Keangnam Hanoi Landmark 72 (350m - 72 Tầng)",id:"BLDG-KEANGNAM-72",floors:72,households:"Khách sạn InterContinental + 200,000m² VP",demandFlow:"142.0 m³/h",intakePressure:"3.42 bar",connectionPipe:"DN150 Gang cầu K9 kép",cisternCapacity:"4,500 m³",meterId:"AMR-KEANGNAM-MAIN",dma:"DMA Phía Tây",hasAntenna:!0,isCutOff:ft,cutOffValveName:"Van V-KNG-06"}),Te({pos:[-590,0,-320],size:[32,105,32],color:E?223649:165063,name:"Tháp Căn Hộ Keangnam A (48 Tầng)",id:"BLDG-KEANGNAM-A",floors:48,households:"460 căn hộ cao cấp",demandFlow:"48.0 m³/h",intakePressure:"3.38 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,200 m³",meterId:"AMR-KEANGNAM-TOWER-A",dma:"DMA Phía Tây",isCutOff:ft,cutOffValveName:"Van V-KNG-06"}),Te({pos:[-490,0,-320],size:[32,105,32],color:E?223649:165063,name:"Tháp Căn Hộ Keangnam B (48 Tầng)",id:"BLDG-KEANGNAM-B",floors:48,households:"460 căn hộ cao cấp",demandFlow:"48.0 m³/h",intakePressure:"3.38 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,200 m³",meterId:"AMR-KEANGNAM-TOWER-B",dma:"DMA Phía Tây",isCutOff:ft,cutOffValveName:"Van V-KNG-06"}),Te({pos:[-460,0,-220],size:[30,80,26],color:E?165063:223649,name:"Tòa Tháp Handico Tower (33 Tầng)",id:"BLDG-HANDICO",floors:33,households:"Trụ sở Tổng Công ty Handico",demandFlow:"32.0 m³/h",intakePressure:"3.35 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"800 m³",meterId:"AMR-HANDICO",dma:"DMA Phía Tây",isCutOff:ft,cutOffValveName:"Van V-KNG-06"}),Te({pos:[-460,0,-170],size:[28,68,24],color:E?165063:223649,name:"Tòa Tháp CEO Tower (27 Tầng)",id:"BLDG-CEO",floors:27,households:"Tổ hợp Văn phòng CEO Group",demandFlow:"28.0 m³/h",intakePressure:"3.32 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"700 m³",meterId:"AMR-CEO",dma:"DMA Phía Tây",isCutOff:ft,cutOffValveName:"Van V-KNG-06"}),Te({pos:[-440,0,-110],size:[56,42,56],color:E?1096065:366185,name:"Bảo Tàng Hà Nội (Kim Tự Tháp Ngược)",id:"BLDG-MUSEUM",floors:4,households:"Bảo tàng Quốc gia & Khu triển lãm 5 ha",demandFlow:"24.0 m³/h",intakePressure:"3.32 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"600 m³",meterId:"AMR-MUSEUM",dma:"DMA Phía Tây",isCutOff:ft,cutOffValveName:"Van V-KNG-06"}),Te({pos:[-440,0,140],size:[85,36,75],color:E?14251782:11817737,name:"Trung Tâm Hội Nghị Quốc Gia (NCC - 64 ha)",id:"BLDG-NCC",floors:5,households:"Hội trường 3,800 chỗ + Khuôn viên cảnh quan",demandFlow:"85.0 m³/h",intakePressure:"3.35 bar",connectionPipe:"DN100 HDPE kép từ Đại lộ Thăng Long",cisternCapacity:"2,500 m³",meterId:"AMR-NCC-MAIN",dma:"DMA Hội Nghị Quốc Gia"}),Te({pos:[-280,0,-180],size:[70,24,60],color:E?16096779:14251782,name:"Đại Siêu Thị Big C Thăng Long (GO!)",id:"BLDG-BIG-C",floors:3,households:"Trung tâm mua sắm bán lẻ 12,000m²",demandFlow:"65.0 m³/h",intakePressure:"3.28 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,500 m³",meterId:"AMR-BIGC-01",dma:"DMA THNC-01",isCutOff:ut,cutOffValveName:"Van V-DCP-05"}),[-230,-190,-150].forEach((W,q)=>{Te({pos:[W,0,-220],size:[26,95+q*4,26],color:E?165063:223649,name:`Tổ Hợp Vinhomes D'Capitale C${q+1} (${40+q} Tầng)`,id:`BLDG-DCAPITALE-${q+1}`,floors:40+q,households:"520 căn hộ cao cấp",demandFlow:"52.0 m³/h",intakePressure:"3.30 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,400 m³",meterId:`AMR-DCAPITALE-C${q+1}`,dma:"DMA THNC-01",isCutOff:ut,cutOffValveName:"Van V-DCP-05"}),Te({pos:[W,0,-260],size:[26,92+q*4,26],color:E?223649:165063,name:`Tổ Hợp Vinhomes D'Capitale C${q+4} (${39+q} Tầng)`,id:`BLDG-DCAPITALE-${q+4}`,floors:39+q,households:"500 căn hộ cao cấp",demandFlow:"50.0 m³/h",intakePressure:"3.30 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,350 m³",meterId:`AMR-DCAPITALE-C${q+4}`,dma:"DMA THNC-01",isCutOff:ut,cutOffValveName:"Van V-DCP-05"})}),Te({pos:[-360,0,40],size:[32,98,30],color:E?165063:223649,name:"Tháp Thăng Long Number One A (40 Tầng)",id:"BLDG-TL-NO1-A",floors:40,households:"540 căn hộ xanh",demandFlow:"54.0 m³/h",intakePressure:"3.32 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,500 m³",meterId:"AMR-TL-NO1-A",dma:"DMA THNC-01",isCutOff:ut,cutOffValveName:"Van V-DCP-05"}),Te({pos:[-360,0,85],size:[32,98,30],color:E?165063:223649,name:"Tháp Thăng Long Number One B (40 Tầng)",id:"BLDG-TL-NO1-B",floors:40,households:"540 căn hộ xanh",demandFlow:"54.0 m³/h",intakePressure:"3.32 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,500 m³",meterId:"AMR-TL-NO1-B",dma:"DMA THNC-01",isCutOff:ut,cutOffValveName:"Van V-DCP-05"}),Te({pos:[-380,0,-30],size:[28,76,26],color:E?223649:165063,name:"Tòa Tháp Viglacera Tower (30 Tầng)",id:"BLDG-VIGLACERA",floors:30,households:"Trụ sở Tổng Công ty Viglacera",demandFlow:"30.0 m³/h",intakePressure:"3.30 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"800 m³",meterId:"AMR-VIGLACERA",dma:"DMA THNC-01",isCutOff:ut,cutOffValveName:"Van V-DCP-05"}),Te({pos:[65,0,-215],size:[38,72,32],color:E?14251782:11817737,name:"Tổ Hợp Charmvit Tower & Grand Plaza",id:"BLDG-CHARMVIT",floors:27,households:"540 phòng KS 5 sao & 45,000m² VP Đại sứ quán Hàn Quốc",demandFlow:"58.0 m³/h",intakePressure:"3.25 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,800 m³",meterId:"AMR-CHARMVIT-PLAZA",dma:"DMA THNC-01",isCutOff:it,cutOffValveName:"Van V-TDN-04"}),[-20,20,60].forEach((W,q)=>{Te({pos:[W,0,-140],size:[24,72,22],color:E?165063:223649,name:`Tòa Căn Hộ Cao Cấp N04-${String.fromCharCode(65+q)} (29 Tầng)`,id:`BLDG-N04-${String.fromCharCode(65+q)}`,floors:29,households:"360 căn hộ cao cấp",demandFlow:"36.0 m³/h",intakePressure:"3.26 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"950 m³",meterId:`AMR-N04-${String.fromCharCode(65+q)}`,dma:"DMA THNC-01",isCutOff:it,cutOffValveName:"Van V-TDN-04"})}),Te({pos:[40,0,-85],size:[28,85,26],color:E?223649:165063,name:"Tòa Tháp N05-29T1 Hoàng Đạo Thúy (34 Tầng)",id:"BLDG-N05-34T1",floors:34,households:"480 căn hộ",demandFlow:"48.0 m³/h",intakePressure:"3.24 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,200 m³",meterId:"AMR-N05-34T1",dma:"DMA THNC-01",isCutOff:it,cutOffValveName:"Van V-TDN-04"}),Te({pos:[80,0,-85],size:[28,85,26],color:E?223649:165063,name:"Tòa Tháp N05-29T2 Hoàng Đạo Thúy (34 Tầng)",id:"BLDG-N05-34T2",floors:34,households:"480 căn hộ",demandFlow:"48.0 m³/h",intakePressure:"3.24 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,200 m³",meterId:"AMR-N05-34T2",dma:"DMA THNC-01",isCutOff:it,cutOffValveName:"Van V-TDN-04"}),Te({pos:[25,0,20],size:[26,82,26],color:E?165063:223649,name:"Tòa Tháp Biểu Tượng 34T Hoàng Đạo Thúy",id:"BLDG-34T-HDT",floors:34,households:"650 căn hộ (~2,600 cư dân)",demandFlow:"58.0 m³/h",intakePressure:"3.25 bar",connectionPipe:"DN80 HDPE nối từ trục D600",cisternCapacity:"1,500 m³",meterId:"AMR-34T-MAIN",dma:"DMA THNC-02",hasAntenna:!0,isCutOff:fe,cutOffValveName:"Van V-HDT-01"}),Te({pos:[-35,0,30],size:[20,58,18],color:E?223649:165063,name:"Tòa Chung Cư 24T1 Hoàng Đạo Thúy",id:"BLDG-24T1",floors:24,households:"280 căn hộ",demandFlow:"28.0 m³/h",intakePressure:"3.22 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"800 m³",meterId:"AMR-24T1",dma:"DMA THNC-02",isCutOff:fe,cutOffValveName:"Van V-HDT-01"}),Te({pos:[-35,0,-30],size:[20,58,18],color:E?223649:165063,name:"Tòa Chung Cư 24T2 Hoàng Đạo Thúy",id:"BLDG-24T2",floors:24,households:"280 căn hộ",demandFlow:"28.0 m³/h",intakePressure:"3.22 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"800 m³",meterId:"AMR-24T2",dma:"DMA THNC-02",isCutOff:fe,cutOffValveName:"Van V-HDT-01"}),Te({pos:[-75,0,0],size:[20,58,18],color:E?223649:165063,name:"Tòa Chung Cư 24T3 Hoàng Đạo Thúy",id:"BLDG-24T3",floors:24,households:"280 căn hộ",demandFlow:"28.0 m³/h",intakePressure:"3.22 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"800 m³",meterId:"AMR-24T3",dma:"DMA THNC-02",isCutOff:fe,cutOffValveName:"Van V-HDT-01"}),[75,115,155].forEach((W,q)=>{Te({pos:[42,0,W],size:[18,44,16],color:E?959977:165063,name:`Tòa Chung Cư 17T${q+1} Hoàng Đạo Thúy`,id:`BLDG-17T${q+1}`,floors:17,households:"180 căn hộ",demandFlow:"18.0 m³/h",intakePressure:"3.20 bar",connectionPipe:"DN50 HDPE",cisternCapacity:"500 m³",meterId:`AMR-17T${q+1}`,dma:"DMA THNC-02",isCutOff:fe,cutOffValveName:"Van V-HDT-01"}),Te({pos:[-35,0,W],size:[18,44,16],color:E?959977:165063,name:`Tòa Chung Cư 17T${q+4} Hoàng Đạo Thúy`,id:`BLDG-17T${q+4}`,floors:17,households:"180 căn hộ",demandFlow:"18.0 m³/h",intakePressure:"3.20 bar",connectionPipe:"DN50 HDPE",cisternCapacity:"500 m³",meterId:`AMR-17T${q+4}`,dma:"DMA THNC-02",isCutOff:fe,cutOffValveName:"Van V-HDT-01"})}),Te({pos:[35,0,155],size:[30,95,30],color:E?165063:481669,name:"Tòa Tháp Diamond Flower Tower (36 Tầng - 176m)",id:"BLDG-DIAMOND-FLOWER",floors:36,households:"380 căn hộ + 35,000m² VP hạng A",demandFlow:"48.0 m³/h",intakePressure:"3.28 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,600 m³",meterId:"AMR-DIAMOND-01",dma:"DMA THNC-02",hasAntenna:!0,isCutOff:H,cutOffValveName:"Van V-LVL-03"}),Te({pos:[80,0,155],size:[26,72,24],color:E?223649:165063,name:"Tổ Hợp Chung Cư Star City Lê Văn Lương (27 Tầng)",id:"BLDG-STAR-CITY",floors:27,households:"420 căn hộ cao cấp",demandFlow:"42.0 m³/h",intakePressure:"3.25 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,100 m³",meterId:"AMR-STAR-CITY",dma:"DMA THNC-02",isCutOff:H,cutOffValveName:"Van V-LVL-03"}),Te({pos:[130,0,155],size:[28,72,26],color:E?165063:223649,name:"Tòa Tháp The Golden Palm (27 Tầng)",id:"BLDG-GOLDEN-PALM",floors:27,households:"400 căn hộ",demandFlow:"40.0 m³/h",intakePressure:"3.24 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"1,000 m³",meterId:"AMR-GOLDEN-PALM",dma:"DMA THNC-02",isCutOff:H,cutOffValveName:"Van V-LVL-03"}),Te({pos:[-60,0,155],size:[28,86,26],color:E?165063:223649,name:"Tòa Tháp HUD Tower A (32 Tầng)",id:"BLDG-HUD-TOWER-A",floors:32,households:"Trụ sở Tổng Công ty Đầu tư Phát triển Nhà HUD",demandFlow:"36.0 m³/h",intakePressure:"3.26 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,200 m³",meterId:"AMR-HUD-A",dma:"DMA THNC-02",isCutOff:H,cutOffValveName:"Van V-LVL-03"}),Te({pos:[-100,0,155],size:[26,74,24],color:E?223649:165063,name:"Tòa Tháp HUD Tower B (27 Tầng)",id:"BLDG-HUD-TOWER-B",floors:27,households:"Văn phòng thương mại & tài chính",demandFlow:"30.0 m³/h",intakePressure:"3.26 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"900 m³",meterId:"AMR-HUD-B",dma:"DMA THNC-02",isCutOff:H,cutOffValveName:"Van V-LVL-03"}),Te({pos:[180,0,155],size:[28,70,24],color:E?223649:165063,name:"Hội Sở MB Grand Tower (25 Tầng)",id:"BLDG-MB-TOWER",floors:25,households:"Hội sở Ngân hàng TMCP Quân Đội",demandFlow:"26.0 m³/h",intakePressure:"3.24 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"750 m³",meterId:"AMR-MB-TOWER",dma:"DMA THNC-02",isCutOff:H,cutOffValveName:"Van V-LVL-03"}),[-150,-110].forEach((W,q)=>{Te({pos:[W,0,45],size:[32,65,34],color:E?14251782:11817737,name:`Mandarin Garden Block ${String.fromCharCode(65+q)} (29 Tầng)`,id:`BLDG-MANDARIN-${String.fromCharCode(65+q)}`,floors:29,households:"260 căn hộ cao cấp",demandFlow:"26.0 m³/h",intakePressure:"3.22 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"850 m³",meterId:`AMR-MANDARIN-${String.fromCharCode(65+q)}`,dma:"DMA THNC-03",isCutOff:ze,cutOffValveName:"Van V-HMG-02"}),Te({pos:[W,0,-5],size:[32,65,34],color:E?14251782:11817737,name:`Mandarin Garden Block ${String.fromCharCode(67+q)} (29 Tầng)`,id:`BLDG-MANDARIN-${String.fromCharCode(67+q)}`,floors:29,households:"260 căn hộ cao cấp",demandFlow:"26.0 m³/h",intakePressure:"3.22 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"850 m³",meterId:`AMR-MANDARIN-${String.fromCharCode(67+q)}`,dma:"DMA THNC-03",isCutOff:ze,cutOffValveName:"Van V-HMG-02"})}),Te({pos:[-135,0,-95],size:[52,24,40],color:E?1096065:366185,name:"Trường THPT Chuyên Hà Nội - Amsterdam",id:"BLDG-AMS",floors:5,households:"3,200 học sinh & giáo viên",demandFlow:"32.0 m³/h",intakePressure:"3.24 bar",connectionPipe:"DN50 HDPE",cisternCapacity:"500 m³",meterId:"AMR-AMS-SCHOOL",dma:"DMA THNC-03",isCutOff:ze,cutOffValveName:"Van V-HMG-02"}),[160,200].forEach((W,q)=>{Te({pos:[W,0,270],size:[32,74,28],color:E?165063:223649,name:`Tổ Hợp Hapulico Complex Block ${String.fromCharCode(65+q)} (31 Tầng)`,id:`BLDG-HAPULICO-${String.fromCharCode(65+q)}`,floors:31,households:"380 căn hộ",demandFlow:"38.0 m³/h",intakePressure:"3.18 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,100 m³",meterId:`AMR-HAPULICO-${String.fromCharCode(65+q)}`,dma:"DMA THNC-03",isCutOff:Ae,cutOffValveName:"Van V-HAP-07"}),Te({pos:[W,0,310],size:[32,74,28],color:E?223649:165063,name:`Tổ Hợp Hapulico Complex Block ${String.fromCharCode(67+q)} (31 Tầng)`,id:`BLDG-HAPULICO-${String.fromCharCode(67+q)}`,floors:31,households:"380 căn hộ",demandFlow:"38.0 m³/h",intakePressure:"3.18 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,100 m³",meterId:`AMR-HAPULICO-${String.fromCharCode(67+q)}`,dma:"DMA THNC-03",isCutOff:Ae,cutOffValveName:"Van V-HAP-07"})}),Te({pos:[110,0,270],size:[30,68,28],color:E?165063:223649,name:"Tổ Hợp Chung Cư Golden West (27 Tầng)",id:"BLDG-GOLDEN-WEST",floors:27,households:"350 căn hộ",demandFlow:"35.0 m³/h",intakePressure:"3.18 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"900 m³",meterId:"AMR-GOLDEN-WEST",dma:"DMA THNC-03",isCutOff:Ae,cutOffValveName:"Van V-HAP-07"}),Te({pos:[250,0,340],size:[30,85,28],color:E?165063:223649,name:"Tổ Hợp Imperia Garden Tháp A (35 Tầng)",id:"BLDG-IMPERIA-A",floors:35,households:"450 căn hộ cao cấp",demandFlow:"45.0 m³/h",intakePressure:"3.16 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,300 m³",meterId:"AMR-IMPERIA-A",dma:"DMA THNC-03",isCutOff:Ae,cutOffValveName:"Van V-HAP-07"}),Te({pos:[290,0,340],size:[30,85,28],color:E?223649:165063,name:"Tổ Hợp Imperia Garden Tháp B (35 Tầng)",id:"BLDG-IMPERIA-B",floors:35,households:"450 căn hộ cao cấp",demandFlow:"45.0 m³/h",intakePressure:"3.16 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,300 m³",meterId:"AMR-IMPERIA-B",dma:"DMA THNC-03",isCutOff:Ae,cutOffValveName:"Van V-HAP-07"});const L=new $n;for(let W=0;W<4;W++)for(let q=0;q<4;q++){const ye=65+W*16,ce=-30+q*18,Se=new Tr(10,14,10),Ve=new kn({color:xt?15680580:E?6583435:9741240,roughness:.5}),me=new Ft(Se,Ve);me.position.set(ye,7,ce),me.castShadow=!0,L.add(me)}L.userData={name:"Khu Biệt Thự & Liền Kề BT1 - BT6",id:"BLDG-VILLAS",type:"Khu Biệt Thự Thấp Tầng",data:{name:"Khu Biệt Thự & Liền Kề BT1 - BT6",id:"BLDG-VILLAS",type:"Khu Biệt Thự Thấp Tầng",status:xt?"⚠️ MẤT NƯỚC DO KHÓA VAN V-NTT-08":"Cấp nước ổn định",floors:"3.5 tầng",households:"150 căn biệt thự",flow:xt?"0.0 m³/h":"22.5 m³/h",pressure:xt?"0.00 bar":"3.18 bar",elevation:"+16.5m ASL",connectionPipe:"DN40 - DN50 HDPE",cisternCapacity:"15 m³ / biệt thự",meterId:"Cụm đồng hồ cơ sở Class C",dma:"DMA THNC-02",isCutOff:xt,cutOffValveName:"Van V-NTT-08"}},L.children.forEach(W=>{W.userData=L.userData,x.current.push(W)}),$t.add(L),Te({pos:[110,0,35],size:[36,18,30],color:E?1096065:366185,name:"Trường Liên Cấp Tiểu Học & THCS Ngôi Sao Hà Nội",id:"BLDG-NGOI-SAO",floors:5,households:"2,200 học sinh & CBGV",demandFlow:"24.0 m³/h",intakePressure:"3.20 bar",connectionPipe:"DN50 HDPE",cisternCapacity:"400 m³",meterId:"AMR-NGOI-SAO",dma:"DMA THNC-02",isCutOff:xt,cutOffValveName:"Van V-NTT-08"}),je({center:[75,45],size:[110,60],rows:2,cols:8,heightRange:[15,21],zoneId:"HN-NTT",isCutOff:xt,cutOffValveName:"Van V-NTT-08",blockName:"Phố Hoàng Ngân - Nhà Phố Liền Kề"}),je({center:[75,135],size:[110,60],rows:2,cols:8,heightRange:[16,24],zoneId:"HN-LVL",isCutOff:H,cutOffValveName:"Van V-LVL-03",blockName:"Phố Hoàng Ngân - Shophouse Lê Văn Lương"}),je({center:[75,-45],size:[110,60],rows:2,cols:8,heightRange:[16,22],zoneId:"DQ-NTT",isCutOff:it,cutOffValveName:"Van V-TDN-04",blockName:"Phố Đỗ Quang - Dãy Nhà Phố Ẩm Thực"}),je({center:[75,-135],size:[110,60],rows:2,cols:8,heightRange:[16,24],zoneId:"DQ-TDH",isCutOff:it,cutOffValveName:"Van V-TDN-04",blockName:"Phố Đỗ Quang - Shophouse Chuyên Gia"}),je({center:[200,45],size:[95,60],rows:2,cols:6,heightRange:[15,22],zoneId:"NTD-HN",isCutOff:xt,cutOffValveName:"Van V-NTT-08",blockName:"Phố Nguyễn Thị Định - Dãy Nhà Phố Thương Mại"}),je({center:[200,135],size:[95,60],rows:2,cols:6,heightRange:[16,24],zoneId:"NTD-LVL",isCutOff:H,cutOffValveName:"Van V-LVL-03",blockName:"Phố Nguyễn Thị Định - Shophouse Dịch Vụ"}),je({center:[120,215],size:[170,40],rows:2,cols:10,heightRange:[14,20],zoneId:"QN-01",isCutOff:xt,cutOffValveName:"Van V-NTT-08",blockName:"Khu Dân Cư Phố Quan Nhân"}),je({center:[120,265],size:[170,40],rows:2,cols:10,heightRange:[14,20],zoneId:"NH-01",isCutOff:Ae,cutOffValveName:"Van V-HAP-07",blockName:"Khu Dân Cư Phố Nhân Hòa & Chính Kinh"}),je({center:[230,310],size:[110,50],rows:2,cols:8,heightRange:[15,22],zoneId:"VTP-NNKT",isCutOff:Ae,cutOffValveName:"Van V-HAP-07",blockName:"Phố Vũ Trọng Phụng - Shophouse Chợ Thuốc"}),je({center:[290,390],size:[110,55],rows:2,cols:8,heightRange:[16,24],zoneId:"NT-NHT",isCutOff:Ae,cutOffValveName:"Van V-HAP-07",blockName:"Phố Nguyễn Tuân - Dãy Nhà Liền Kề"}),je({center:[-80,50],size:[100,55],rows:2,cols:7,heightRange:[15,22],zoneId:"34T-IN",isCutOff:fe,cutOffValveName:"Van V-HDT-01",blockName:"Khu Nhà Phố Nội Khu Hoàng Đạo Thúy"}),je({center:[-80,-45],size:[100,55],rows:2,cols:7,heightRange:[15,22],zoneId:"24T-IN",isCutOff:fe,cutOffValveName:"Van V-HDT-01",blockName:"Khu Liền Kề Cụm 24T Hoàng Đạo Thúy"}),je({center:[-240,250],size:[130,80],rows:3,cols:8,heightRange:[15,22],zoneId:"HNC-KDT",isCutOff:ut,cutOffValveName:"Van V-DCP-05",blockName:"Khu Đô Thị Ven Hồ Điều Hòa Nhân Chính"}),je({center:[-320,340],size:[130,70],rows:2,cols:8,heightRange:[14,20],zoneId:"KDT-S",isCutOff:ut,cutOffValveName:"Van V-DCP-05",blockName:"Khu Dân Cư Nam Khuất Duy Tiến"}),je({center:[-300,-380],size:[160,65],rows:2,cols:10,heightRange:[15,22],zoneId:"MTH-01",isCutOff:ft,cutOffValveName:"Van V-KNG-06",blockName:"Khu Đô Thị Mễ Trì Hạ - Sudico"}),je({center:[-480,-450],size:[130,55],rows:2,cols:8,heightRange:[14,20],zoneId:"MT-W",isCutOff:ft,cutOffValveName:"Van V-KNG-06",blockName:"Khu Liền Kề Phía Tây Mễ Trì"}),je({center:[240,-260],size:[140,65],rows:2,cols:9,heightRange:[15,22],zoneId:"TH-TY1",isCutOff:it,cutOffValveName:"Van V-TDN-04",blockName:"Khu Đô Thị Trung Yên - Mạc Thái Tổ"}),je({center:[240,-330],size:[140,55],rows:2,cols:9,heightRange:[15,22],zoneId:"TH-TY2",isCutOff:it,cutOffValveName:"Van V-TDN-04",blockName:"Khu Phân Lô Phố Vũ Phạm Hàm"}),Te({pos:[-660,0,150],size:[64,34,64],color:E?165063:223649,name:"Bảo Tàng Hà Nội (Hanoi Museum - Kim tự tháp ngược)",id:"BLDG-BTHN",floors:4,households:"Công trình văn hóa trọng điểm quốc gia (54.000m²)",demandFlow:"45.0 m³/h",intakePressure:"3.18 bar",connectionPipe:"DN100 Gang dẻo",cisternCapacity:"1,200 m³",meterId:"AMR-BTHN-01",dma:"DMA Hội Nghị Quốc Gia"}),Te({pos:[-840,0,180],size:[85,32,55],color:E?165063:959977,name:"Khách Sạn 5 Sao Quốc Tế JW Marriott Hanoi",id:"BLDG-JWM",floors:9,households:"450 phòng khách sạn 5 sao cao cấp & Trung tâm hội nghị",demandFlow:"75.0 m³/h",intakePressure:"3.15 bar",connectionPipe:"DN125 Gang dẻo",cisternCapacity:"2,500 m³",meterId:"AMR-JWM-01",dma:"DMA Mễ Trì"}),Te({pos:[-620,0,260],size:[55,20,55],color:165063,name:"Cung Triển Lãm Kiến Trúc Quy Hoạch Quốc Gia (NECC)",id:"BLDG-NECC",floors:3,households:"Trung tâm triển lãm quy hoạch & kiến trúc Thủ đô",demandFlow:"30.0 m³/h",intakePressure:"3.22 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"800 m³",meterId:"AMR-NECC-01",dma:"DMA Hội Nghị Quốc Gia"}),Te({pos:[-520,0,-430],size:[36,115,36],color:E?165063:223649,name:"Tháp Văn Phòng Handico Tower (33 Tầng - Phạm Hùng)",id:"BLDG-HANDICO",floors:33,households:"40.000m² văn phòng Hạng A",demandFlow:"48.0 m³/h",intakePressure:"3.20 bar",connectionPipe:"DN100 Gang dẻo",cisternCapacity:"1,600 m³",meterId:"AMR-HANDICO-01",dma:"DMA Keangnam"}),Te({pos:[-520,0,-490],size:[32,95,32],color:E?165063:223649,name:"Tháp CEO Tower (27 Tầng - Trụ sở Tập đoàn CEO)",id:"BLDG-CEO",floors:27,households:"28.000m² sàn văn phòng",demandFlow:"38.0 m³/h",intakePressure:"3.25 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,200 m³",meterId:"AMR-CEO-01",dma:"DMA Keangnam"}),[-760,-820,-880].forEach((W,q)=>{Te({pos:[W,0,-420],size:[42,90,42],color:E?165063:223649,name:`Tổ Hợp Căn Hộ Cao Cấp The Manor Mỹ Đình - Tháp ${String.fromCharCode(65+q)} (26T)`,id:`BLDG-MANOR-${q+1}`,floors:26,households:"420 căn hộ cao cấp & Khu phố thương mại Paris",demandFlow:"42.0 m³/h",intakePressure:"3.12 bar",connectionPipe:"DN100 HDPE",cisternCapacity:"1,400 m³",meterId:`AMR-MANOR-0${q+1}`,dma:"DMA Mễ Trì"})}),Te({pos:[480,0,-220],size:[70,32,50],color:165063,name:"Trường Đại Học Lao Động - Xã Hội (Giảng Đường A & B)",id:"BLDG-DHLDXH",floors:8,households:"Khuôn viên đào tạo 15.000 sinh viên & Cán bộ giảng viên",demandFlow:"60.0 m³/h",intakePressure:"3.22 bar",connectionPipe:"DN100 Gang dẻo",cisternCapacity:"1,800 m³",meterId:"AMR-DHLDXH-01",dma:"DMA Trung Hòa"}),Te({pos:[640,0,-240],size:[60,30,45],color:165063,name:"Trường Đại Học Phòng Cháy Chữa Cháy (Bộ Công An)",id:"BLDG-DHPCCC",floors:7,households:"Khu huấn luyện & Đào tạo chuyên gia PCCC",demandFlow:"40.0 m³/h",intakePressure:"3.30 bar",connectionPipe:"DN100 Gang dẻo",cisternCapacity:"1,500 m³",meterId:"AMR-DHPCCC-01",dma:"DMA Trung Hòa"}),Te({pos:[680,0,-420],size:[40,145,40],color:E?165063:223649,name:"Tổ Hợp Chung Cư & Khách Sạn Golden Park Tower (45 Tầng)",id:"BLDG-GOLDEN-PARK",floors:45,households:"410 căn hộ cao cấp & 240 phòng khách sạn 4 sao",demandFlow:"55.0 m³/h",intakePressure:"3.10 bar",connectionPipe:"DN125 Gang dẻo",cisternCapacity:"2,000 m³",meterId:"AMR-GP-01",dma:"DMA Yên Hòa"}),[420,480].forEach((W,q)=>{Te({pos:[W,0,-360],size:[38,98,38],color:E?165063:223649,name:`Tổ Hợp Home City Trung Kính - Tháp V${q+1} (30 Tầng)`,id:`BLDG-HOME-CITY-${q+1}`,floors:30,households:"600 căn hộ dân cư & Trung tâm thương mại",demandFlow:"46.0 m³/h",intakePressure:"3.18 bar",connectionPipe:"DN100 HDPE",cisternCapacity:"1,600 m³",meterId:`AMR-HC-0${q+1}`,dma:"DMA Trung Kính"})}),Te({pos:[-240,0,40],size:[60,22,35],color:E?165063:223649,name:"THPT Chuyên Hà Nội - Amsterdam (Nhà A: Khối Giảng Đường)",id:"BLDG-AMS-A",floors:5,households:"Khuôn viên đào tạo 3.000 học sinh năng khiếu",demandFlow:"35.0 m³/h",intakePressure:"3.25 bar",connectionPipe:"DN100 Gang dẻo",cisternCapacity:"1,000 m³",meterId:"AMR-AMS-01",dma:"DMA Hoàng Minh Giám"}),Te({pos:[-300,0,30],size:[50,18,45],color:E?165063:959977,name:"THPT Chuyên Hà Nội - Amsterdam (Nhà B: Khu Thể Thao & Bể Bơi Ngầm)",id:"BLDG-AMS-B",floors:3,households:"Bể bơi tiêu chuẩn thi đấu & Sân bóng đá",demandFlow:"40.0 m³/h",intakePressure:"3.20 bar",connectionPipe:"DN100 Gang dẻo",cisternCapacity:"1,500 m³",meterId:"AMR-AMS-02",dma:"DMA Hoàng Minh Giám"}),[160,230,300,370].forEach((W,q)=>{Te({pos:[W,0,-480],size:[36,82,36],color:E?165063:223649,name:`KĐT Nam Trung Yên - Tòa B${q+1} (25 Tầng)`,id:`BLDG-NTY-${q+1}`,floors:25,households:"450 căn hộ tái định cư kiểu mẫu",demandFlow:"42.0 m³/h",intakePressure:"3.18 bar",connectionPipe:"DN100 HDPE",cisternCapacity:"1,400 m³",meterId:`AMR-NTY-0${q+1}`,dma:"DMA Yên Hòa"}),Te({pos:[W,0,-560],size:[38,75,38],color:E?165063:223649,name:`Chung Cư Yên Hòa Park View - Tháp A${q+1} (22 Tầng)`,id:`BLDG-YENHOA-${q+1}`,floors:22,households:"380 căn hộ",demandFlow:"36.0 m³/h",intakePressure:"3.20 bar",connectionPipe:"DN100 HDPE",cisternCapacity:"1,200 m³",meterId:`AMR-YH-0${q+1}`,dma:"DMA Yên Hòa"})}),Te({pos:[460,0,-80],size:[55,38,45],color:165063,name:"Bệnh Viện Đa Khoa Quốc Tế Thu Cúc (Trần Duy Hưng)",id:"BLDG-THUCUC",floors:10,households:"Khu khám chữa bệnh & Cấp cứu 24/7 (300 giường bệnh)",demandFlow:"55.0 m³/h",intakePressure:"3.32 bar",connectionPipe:"DN100 Gang dẻo",cisternCapacity:"1,600 m³",meterId:"AMR-THUCUC-01",dma:"DMA Trung Hòa"}),Te({pos:[580,0,100],size:[65,32,50],color:165063,name:"Bệnh Viện Y Học Cổ Truyền Quân Đội (Phân Viện Trung Hòa)",id:"BLDG-YHCT",floors:8,households:"Cơ sở điều trị & Điều dưỡng 450 giường bệnh",demandFlow:"48.0 m³/h",intakePressure:"3.26 bar",connectionPipe:"DN100 Gang dẻo",cisternCapacity:"1,500 m³",meterId:"AMR-YHCT-01",dma:"DMA Nhân Chính"}),[240,310].forEach((W,q)=>{Te({pos:[W,0,480],size:[40,115,40],color:E?165063:223649,name:`Tổ Hợp Chung Cư Imperia Garden - Tháp ${String.fromCharCode(65+q)} (35 Tầng)`,id:`BLDG-IMPERIA-${q+1}`,floors:35,households:"800 căn hộ cao cấp & Vườn trên không",demandFlow:"72.0 m³/h",intakePressure:"3.12 bar",connectionPipe:"DN125 Gang dẻo",cisternCapacity:"2,600 m³",meterId:`AMR-IMP-0${q+1}`,dma:"DMA Thanh Xuân"})}),Te({pos:[180,0,420],size:[42,92,42],color:E?165063:223649,name:"Tổ Hợp Chung Cư Golden West (27 Tầng - Lê Văn Thiêm)",id:"BLDG-GOLDEN-WEST",floors:27,households:"650 căn hộ & 3 tầng hầm thương mại",demandFlow:"58.0 m³/h",intakePressure:"3.16 bar",connectionPipe:"DN100 Gang dẻo",cisternCapacity:"1,800 m³",meterId:"AMR-GW-01",dma:"DMA Thanh Xuân"}),Te({pos:[-380,0,-260],size:[45,105,45],color:E?165063:223649,name:"Tòa Nhà Viện Dầu Khí Việt Nam - VPI Tower (30 Tầng - Trung Kính)",id:"BLDG-VPI",floors:30,households:"Trụ sở nghiên cứu & Văn phòng Tập đoàn PVN (45.000m²)",demandFlow:"52.0 m³/h",intakePressure:"3.22 bar",connectionPipe:"DN100 Gang dẻo",cisternCapacity:"1,900 m³",meterId:"AMR-VPI-01",dma:"DMA Trung Kính"}),je({center:[360,-80],size:[100,40],rows:2,cols:8,heightRange:[14,20],cutOffValveName:"Van V-TDN-04",blockName:"Khu Dân Cư Phố Trung Kính - Trần Duy Hưng"}),je({center:[460,180],size:[80,40],rows:2,cols:6,heightRange:[14,20],cutOffValveName:"Van V-LVL-03",blockName:"Khu Phân Lô Phố Vũ Trọng Phụng Mở Rộng"}),je({center:[-360,-100],size:[70,40],rows:2,cols:5,heightRange:[12,18],cutOffValveName:"Van V-DCP-05",blockName:"Khu Liền Kề Biệt Thự Mễ Trì Hạ"}),je({center:[100,-420],size:[90,40],rows:2,cols:7,heightRange:[14,20],cutOffValveName:"Van V-TDN-04",blockName:"Khu Đô Thị Phố Hạ Yên"}),[720,780].forEach((W,q)=>{[480,560].forEach((ye,ce)=>{Te({pos:[W,0,ye],size:[44,118,44],color:E?165063:223649,name:`Đại Đô Thị Vinhomes Royal City - Tháp R${q*2+ce+1} (35T)`,id:`BLDG-ROYAL-${q*2+ce+1}`,floors:35,households:"1.200 căn hộ cao cấp & TTTM Vincom Mega Mall",demandFlow:"95.0 m³/h",intakePressure:"3.08 bar",connectionPipe:"DN150 Gang dẻo",cisternCapacity:"4,500 m³",meterId:`AMR-ROYAL-0${q*2+ce+1}`,dma:"DMA Thượng Đình"})})}),Te({pos:[540,0,620],size:[42,92,42],color:E?165063:223649,name:"Tổ Hợp Chung Cư Golden Land Building (27 Tầng - Nguyễn Trãi)",id:"BLDG-GOLDEN-LAND",floors:27,households:"720 căn hộ & Khu thương mại dịch vụ",demandFlow:"52.0 m³/h",intakePressure:"3.14 bar",connectionPipe:"DN100 Gang dẻo",cisternCapacity:"1,800 m³",meterId:"AMR-GL-01",dma:"DMA Thanh Xuân"});const b=new $n;G.add(b);const K=(W,q,ye,ce,Se,Ve,me,Ie)=>{var Nt;if(me===1&&!t.pipesPrimary||me===2&&!t.pipesSecondary||me===3&&!t.pipesTertiary||me===4&&!t.pipesService||!t.pipes)return null;const Ze=me===1?165063:me===2?16347926:me===3?15381256:(Nt=Ie==null?void 0:Ie.status)!=null&&Nt.includes("CẮT")?6583435:15381256,Ne=Ve?Ze:4674921,lt=new Dg(W),St=new Jd(lt,64,q,14,!1),Ct=new kn({color:Ne,roughness:.2,metalness:.2,emissive:Ve?Ne:0,emissiveIntensity:Ve?E?.65:.45:0}),mt=new Ft(St,Ct);if(mt.castShadow=!1,mt.receiveShadow=!1,mt.userData={name:ce,id:Se,type:"Pipe",data:Ie},b.add(mt),x.current.push(mt),Ve){const Pn=me===1?20:me===2?12:me===3?8:4,zt=new pa(q*1.35,12,12),Zt=new kn({color:16777215,emissive:me===1?61695:me===2?16486972:16707722,emissiveIntensity:1.5,roughness:.1});for(let Ht=0;Ht<Pn;Ht++){const vn=new Ft(zt,Zt);G.add(vn),y.current.push({mesh:vn,curve:lt,t:Ht/Pn,speed:me===1?.0022:me===2?.0017:.0012})}}return mt};K([new A(-1200,1.4,40),new A(-700,1.4,40),new A(-440,1.4,40)],1.6,E?165063:223649,"Trục Truyền Dẫn Cấp 1 D800 Đại Lộ Thăng Long","PIPE-TRUNK-DLTL-D800",!0,1,{name:"Trục Truyền Dẫn Cấp 1 D800 Đại Lộ Thăng Long",id:"PIPE-TRUNK-DLTL-D800",tier:"Cấp 1 (Transmission D800)",status:"Đang truyền dẫn công suất lớn (NMN Sông Đà)",diameter:"DN800 Gang Dẻo K9",flow:"4,850.0 m³/h",pressure:"3.85 bar",dma:"Trục Truyền Dẫn Liên Vùng"}),K([new A(-440,1.4,-1100),new A(-440,1.4,-400),new A(-440,1.4,40),new A(-440,1.4,600),new A(-440,1.4,1100)],1.6,E?165063:223649,"Trục Truyền Dẫn Cấp 1 D800 Phạm Hùng - Vành Đai 3","PIPE-TRUNK-PH-D800",!0,1,{name:"Trục Truyền Dẫn Cấp 1 D800 Phạm Hùng - Vành Đai 3",id:"PIPE-TRUNK-PH-D800",tier:"Cấp 1 (Transmission D800)",status:"Vận hành tối ưu",diameter:"DN800 Gang Dẻo K9",flow:"4,200.0 m³/h",pressure:"3.75 bar",dma:"Trục Truyền Dẫn Liên Vùng"}),K([new A(-440,1.4,180),new A(-160,1.4,180),new A(0,1.4,180),new A(340,1.4,180),new A(650,1.4,180)],1.4,E?165063:223649,"Trục Truyền Dẫn Cấp 1 D600 Lê Văn Lương","PIPE-TRUNK-LVL-D600",!0,1,{name:"Trục Truyền Dẫn Cấp 1 D600 Lê Văn Lương",id:"PIPE-TRUNK-LVL-D600",tier:"Cấp 1 (Transmission D600)",status:"Cấp nguồn chính DMA THNC-02 & THNC-03",diameter:"DN600 Gang Dẻo K9",flow:"3,250.0 m³/h",pressure:"3.45 bar",dma:"DMA THNC-02"}),K([new A(-440,1.4,-180),new A(-160,1.4,-180),new A(0,1.4,-180),new A(340,1.4,-180),new A(650,1.4,-180)],1.4,E?165063:223649,"Trục Truyền Dẫn Cấp 1 D600 Trần Duy Hưng","PIPE-TRUNK-TDH-D600",!0,1,{name:"Trục Truyền Dẫn Cấp 1 D600 Trần Duy Hưng",id:"PIPE-TRUNK-TDH-D600",tier:"Cấp 1 (Transmission D600)",status:"Cấp nguồn chính DMA THNC-01",diameter:"DN600 Gang Dẻo K9",flow:"3,400.0 m³/h",pressure:"3.50 bar",dma:"DMA THNC-01"}),K([new A(0,1.4,-180),new A(0,1.4,0),new A(0,1.4,180),new A(0,1.4,350)],1.4,E?165063:223649,"Trục Truyền Dẫn Cấp 1 D600 Hoàng Đạo Thúy","PIPE-TRUNK-HDT-D600",!0,1,{name:"Trục Truyền Dẫn Cấp 1 D600 Hoàng Đạo Thúy",id:"PIPE-TRUNK-HDT-D600",tier:"Cấp 1 (Transmission D600)",status:"Trục xương sống KĐT Trung Hòa - Nhân Chính",diameter:"DN600 Gang Dẻo K9",flow:"2,900.0 m³/h",pressure:"3.38 bar",dma:"DMA THNC-02"}),K([new A(340,1.4,-450),new A(340,1.4,-180),new A(340,1.4,180),new A(340,1.4,450)],1.4,E?165063:223649,"Trục Truyền Dẫn Cấp 1 D600 Trung Kính","PIPE-TRUNK-TK-D600",!0,1,{name:"Trục Truyền Dẫn Cấp 1 D600 Trung Kính",id:"PIPE-TRUNK-TK-D600",tier:"Cấp 1 (Transmission D600)",status:"Cấp nước phía Đông quận",diameter:"DN600 Gang Dẻo",flow:"2,400.0 m³/h",pressure:"3.35 bar",dma:"DMA Phía Đông"}),K([new A(-160,1.2,0),new A(-75,1.2,0),new A(0,1.2,0),new A(75,1.2,0),new A(140,1.2,0),new A(340,1.2,0)],1.1,E?959977:165063,"Tuyến Phân Phối Cấp 2 D300 Nguyễn Thị Thập","PIPE-DIST-NTT-D300",!xt,2,{name:"Tuyến Phân Phối Cấp 2 D300 Nguyễn Thị Thập",id:"PIPE-DIST-NTT-D300",tier:"Cấp 2 (Distribution D300)",status:xt?"ĐÃ CẮT NƯỚC QUA VAN V-NTT-08":"Bình thường",diameter:"DN300 HDPE PE100",flow:xt?"0.0 m³/h":"880 m³/h",pressure:xt?"0.00 bar":"3.25 bar",dma:"DMA THNC-02"}),K([new A(-160,1.2,350),new A(-160,1.2,180),new A(-160,1.2,0),new A(-160,1.2,-95),new A(-160,1.2,-180)],1,E?959977:165063,"Tuyến Phân Phối Cấp 2 D250 Hoàng Minh Giám","PIPE-DIST-HMG-D250",!ze,2,{name:"Tuyến Phân Phối Cấp 2 D250 Hoàng Minh Giám",id:"PIPE-DIST-HMG-D250",tier:"Cấp 2 (Distribution D250)",status:ze?"ĐÃ CẮT NƯỚC QUA VAN V-HMG-02":"Bình thường",diameter:"DN250 HDPE PE100",flow:ze?"0.0 m³/h":"750 m³/h",pressure:ze?"0.00 bar":"3.24 bar",dma:"DMA THNC-03"}),K([new A(140,1.2,-180),new A(140,1.2,-90),new A(140,1.2,0),new A(140,1.2,180)],1,E?959977:165063,"Tuyến Phân Phối Cấp 2 D250 Nguyễn Thị Định","PIPE-DIST-NTD-D250",!it,2,{name:"Tuyến Phân Phối Cấp 2 D250 Nguyễn Thị Định",id:"PIPE-DIST-NTD-D250",tier:"Cấp 2 (Distribution D250)",status:it?"ĐÃ CẮT NƯỚC QUA VAN V-TDN-04":"Bình thường",diameter:"DN250 HDPE",flow:it?"0.0 m³/h":"620 m³/h",pressure:it?"0.00 bar":"3.22 bar",dma:"DMA THNC-01"}),K([new A(-160,1.2,350),new A(0,1.2,350),new A(160,1.2,350),new A(240,1.2,350),new A(340,1.2,350)],1.1,E?959977:165063,"Tuyến Phân Phối Cấp 2 D300 Ngụy Như Kon Tum","PIPE-DIST-NNKT-D300",!Ae,2,{name:"Tuyến Phân Phối Cấp 2 D300 Ngụy Như Kon Tum",id:"PIPE-DIST-NNKT-D300",tier:"Cấp 2 (Distribution D300)",status:Ae?"ĐÃ CẮT NƯỚC QUA VAN V-HAP-07":"Bình thường",diameter:"DN300 HDPE",flow:Ae?"0.0 m³/h":"820 m³/h",pressure:Ae?"0.00 bar":"3.18 bar",dma:"DMA THNC-03"}),K([new A(240,1.2,180),new A(240,1.2,270),new A(240,1.2,350)],1,E?959977:165063,"Tuyến Phân Phối Cấp 2 D250 Vũ Trọng Phụng","PIPE-DIST-VTP-D250",!Ae,2,{name:"Tuyến Phân Phối Cấp 2 D250 Vũ Trọng Phụng",id:"PIPE-DIST-VTP-D250",tier:"Cấp 2 (Distribution D250)",status:Ae?"ĐÃ CẮT NƯỚC QUA VAN V-HAP-07":"Bình thường",diameter:"DN250 HDPE",flow:Ae?"0.0 m³/h":"540 m³/h",pressure:Ae?"0.00 bar":"3.16 bar",dma:"DMA THNC-03"}),K([new A(-440,1.2,-180),new A(-280,1.2,-180),new A(-190,1.2,-180),new A(-160,1.2,-180)],1.1,E?959977:165063,"Tuyến Phân Phối Cấp 2 D300 Ven Vinhomes D'Capitale","PIPE-DIST-DCP-D300",!ut,2,{name:"Tuyến Phân Phối Cấp 2 D300 Ven Vinhomes D'Capitale",id:"PIPE-DIST-DCP-D300",tier:"Cấp 2 (Distribution D300)",status:ut?"ĐÃ CẮT NƯỚC QUA VAN V-DCP-05":"Bình thường",diameter:"DN300 HDPE",flow:ut?"0.0 m³/h":"960 m³/h",pressure:ut?"0.00 bar":"3.30 bar",dma:"DMA THNC-01"}),K([new A(-440,1.2,-320),new A(-540,1.2,-320),new A(-540,1.2,-460),new A(-440,1.2,-460)],1.1,E?959977:165063,"Tuyến Phân Phối Cấp 2 D300 Mạch Vòng Keangnam & Mễ Trì","PIPE-DIST-KNG-D300",!ft,2,{name:"Tuyến Phân Phối Cấp 2 D300 Keangnam & Mễ Trì",id:"PIPE-DIST-KNG-D300",tier:"Cấp 2 (Distribution D300)",status:ft?"ĐÃ CẮT NƯỚC QUA VAN V-KNG-06":"Bình thường",diameter:"DN300 HDPE",flow:ft?"0.0 m³/h":"1,120 m³/h",pressure:ft?"0.00 bar":"3.38 bar",dma:"DMA Phía Tây"}),K([new A(0,1,90),new A(75,1,90),new A(140,1,90),new A(200,1,90)],.85,E?1357990:889992,"Tuyến Nhánh Cấp 3 D150 Phố Hoàng Ngân","PIPE-STREET-HN-D150",!xt,3,{name:"Tuyến Nhánh Cấp 3 D150 Phố Hoàng Ngân",id:"PIPE-STREET-HN-D150",tier:"Cấp 3 (Reticulation D150)",status:xt?"ĐÃ CẮT NƯỚC":"Ổn định",diameter:"DN150",flow:xt?"0.0 m³/h":"180 m³/h",dma:"DMA THNC-02"}),K([new A(0,1,-90),new A(75,1,-90),new A(140,1,-90),new A(200,1,-90)],.85,E?1357990:889992,"Tuyến Nhánh Cấp 3 D150 Phố Đỗ Quang","PIPE-STREET-DQ-D150",!it,3,{name:"Tuyến Nhánh Cấp 3 D150 Phố Đỗ Quang",id:"PIPE-STREET-DQ-D150",tier:"Cấp 3 (Reticulation D150)",status:it?"ĐÃ CẮT NƯỚC":"Ổn định",diameter:"DN150",flow:it?"0.0 m³/h":"175 m³/h",dma:"DMA THNC-01"}),K([new A(0,1,240),new A(120,1,240),new A(240,1,240)],.8,E?1357990:889992,"Tuyến Nhánh Cấp 3 D125 Phố Quan Nhân","PIPE-STREET-QN-D125",!xt,3,{name:"Tuyến Nhánh Cấp 3 D125 Phố Quan Nhân",id:"PIPE-STREET-QN-D125",tier:"Cấp 3 (Reticulation D125)",status:xt?"ĐÃ CẮT NƯỚC":"Ổn định",diameter:"DN125",flow:xt?"0.0 m³/h":"140 m³/h",dma:"DMA THNC-02"}),K([new A(0,1,290),new A(120,1,290),new A(240,1,290)],.8,E?1357990:889992,"Tuyến Nhánh Cấp 3 D125 Phố Nhân Hòa","PIPE-STREET-NH-D125",!Ae,3,{name:"Tuyến Nhánh Cấp 3 D125 Phố Nhân Hòa",id:"PIPE-STREET-NH-D125",tier:"Cấp 3 (Reticulation D125)",status:Ae?"ĐÃ CẮT NƯỚC":"Ổn định",diameter:"DN125",flow:Ae?"0.0 m³/h":"150 m³/h",dma:"DMA THNC-03"}),K([new A(0,1,20),new A(25,1,20),new A(42,1,75),new A(42,1,155)],.8,E?1357990:889992,"Tuyến Nhánh Cấp 3 D150 Ngõ Nội Khu 34T & 17T","PIPE-STREET-17T-D150",!fe,3,{name:"Tuyến Nhánh Cấp 3 D150 Ngõ Nội Khu 34T & 17T",id:"PIPE-STREET-17T-D150",tier:"Cấp 3 (Reticulation D150)",status:fe?"ĐÃ CẮT NƯỚC":"Ổn định",diameter:"DN150",flow:fe?"0.0 m³/h":"195 m³/h",dma:"DMA THNC-02"}),K([new A(0,1,20),new A(-35,1,20),new A(-35,1,-30),new A(-75,1,0)],.8,E?1357990:889992,"Tuyến Nhánh Cấp 3 D125 Ngõ Nội Khu Cụm 24T","PIPE-STREET-24T-D125",!fe,3,{name:"Tuyến Nhánh Cấp 3 D125 Ngõ Nội Khu Cụm 24T",id:"PIPE-STREET-24T-D125",tier:"Cấp 3 (Reticulation D125)",status:fe?"ĐÃ CẮT NƯỚC":"Ổn định",diameter:"DN125",flow:fe?"0.0 m³/h":"160 m³/h",dma:"DMA THNC-02"}),K([new A(0,1,-85),new A(40,1,-85),new A(80,1,-85),new A(60,1,-140)],.8,E?1357990:889992,"Tuyến Nhánh Cấp 3 D150 Nội Khu Cụm N04/N05","PIPE-STREET-N04N05-D150",!it,3,{name:"Tuyến Nhánh Cấp 3 D150 Nội Khu N04/N05",id:"PIPE-STREET-N04N05-D150",tier:"Cấp 3 (Reticulation D150)",status:it?"ĐÃ CẮT NƯỚC":"Ổn định",diameter:"DN150",flow:it?"0.0 m³/h":"210 m³/h",dma:"DMA THNC-01"});const ve=(W,q,ye,ce,Se,Ve)=>{const me=new A((W.x+q.x)/2,.8,(W.z+q.z)/2);K([W,me,q],.55,Ve?6583435:E?16498468:14251782,`Ống Đấu Nối Cấp 4 ${ye} -> ${ce}`,`PIPE-SRV-${Se}`,!Ve,4,{name:`Ống Đấu Nối Cấp 4 ${ye} -> ${ce}`,id:`PIPE-SRV-${Se}`,tier:"Cấp 4 (Service Connection)",status:Ve?"ĐÃ CẮT DÒNG (KHÓA VAN)":"Cấp nước trực tiếp bể ngầm",diameter:ye,pressure:Ve?"0.00 bar":"3.25 bar",flow:Ve?"0.0 m³/h":"Theo định mức AMR"})};ve(new A(0,1.1,20),new A(25,1.1,20),"DN80","Tháp 34T","34T",fe),ve(new A(0,1.1,30),new A(-35,1.1,30),"DN65","Chung cư 24T1","24T1",fe),ve(new A(0,1.1,-30),new A(-35,1.1,-30),"DN65","Chung cư 24T2","24T2",fe),ve(new A(42,1.1,75),new A(42,1.1,75),"DN50","Chung cư 17T1","17T1",fe),ve(new A(0,1.1,155),new A(35,1.1,155),"DN80","Diamond Flower","DIAMOND",H),ve(new A(50,1.1,155),new A(80,1.1,155),"DN80","Star City","STAR-CITY",H),ve(new A(100,1.1,155),new A(130,1.1,155),"DN65","The Golden Palm","GOLDEN-PALM",H),ve(new A(0,1.1,155),new A(-60,1.1,155),"DN80","HUD Tower A","HUD-A",H),ve(new A(-60,1.1,155),new A(-100,1.1,155),"DN65","HUD Tower B","HUD-B",H),ve(new A(140,1.1,155),new A(180,1.1,155),"DN65","MB Grand Tower","MB-TOWER",H),ve(new A(0,1.1,-180),new A(65,1.1,-215),"DN80","Charmvit Tower","CHARMVIT",it),ve(new A(40,1.1,-85),new A(40,1.1,-85),"DN80","N05-34T1","N05-1",it),ve(new A(80,1.1,-85),new A(80,1.1,-85),"DN80","N05-34T2","N05-2",it),ve(new A(-160,1.1,45),new A(-150,1.1,45),"DN65","Mandarin Block A","MANDARIN-A",ze),ve(new A(-160,1.1,-5),new A(-150,1.1,-5),"DN65","Mandarin Block C","MANDARIN-C",ze),ve(new A(-160,1.1,-95),new A(-135,1.1,-95),"DN50","THPT Amsterdam","AMS",ze),ve(new A(-440,1.1,-320),new A(-540,1.1,-320),"DN150","Keangnam 72","KEANGNAM-72",ft),ve(new A(-540,1.1,-320),new A(-590,1.1,-320),"DN80","Keangnam Tháp A","KEANGNAM-A",ft),ve(new A(-540,1.1,-320),new A(-490,1.1,-320),"DN80","Keangnam Tháp B","KEANGNAM-B",ft),ve(new A(-440,1.1,-220),new A(-460,1.1,-220),"DN65","Handico Tower","HANDICO",ft),ve(new A(-440,1.1,-170),new A(-460,1.1,-170),"DN65","CEO Tower","CEO",ft),ve(new A(-440,1.1,-110),new A(-440,1.1,-110),"DN65","Bảo Tàng Hà Nội","MUSEUM",ft),ve(new A(-440,1.1,140),new A(-440,1.1,140),"DN100","Hội Nghị Quốc Gia NCC","NCC",!1),ve(new A(-280,1.1,-180),new A(-280,1.1,-180),"DN80","Big C Thăng Long","BIGC",ut),ve(new A(-230,1.1,-220),new A(-230,1.1,-220),"DN80","D'Capitale C1","DCP-C1",ut),ve(new A(-190,1.1,-220),new A(-190,1.1,-220),"DN80","D'Capitale C2","DCP-C2",ut),ve(new A(-440,1.1,40),new A(-360,1.1,40),"DN80","Thăng Long Number One A","TL-NO1-A",ut),ve(new A(-360,1.1,40),new A(-360,1.1,85),"DN80","Thăng Long Number One B","TL-NO1-B",ut),ve(new A(240,1.1,270),new A(200,1.1,270),"DN80","Hapulico Complex A","HAP-A",Ae),ve(new A(240,1.1,270),new A(110,1.1,270),"DN65","Golden West","GOLDEN-WEST",Ae),ve(new A(240,1.1,340),new A(250,1.1,340),"DN80","Imperia Garden A","IMP-A",Ae),ve(new A(240,1.1,340),new A(290,1.1,340),"DN80","Imperia Garden B","IMP-B",Ae),ve(new A(75,1.1,0),new A(75,1.1,-10),"DN50","Biệt Thự BT1-BT6","VILLAS",xt),ve(new A(75,1.1,35),new A(110,1.1,35),"DN50","Trường Ngôi Sao Hà Nội","NGOI-SAO",xt),K([new A(0,1.2,-260),new A(160,1.2,-480),new A(370,1.2,-480),new A(370,1.2,-580)],1.1,16347926,"Tuyến Phân Phối Cấp 2 D300 Mạc Thái Tổ - Nam Trung Yên","PIPE-DIST-NTY-D300",!0,2,{name:"Tuyến Phân Phối Cấp 2 D300 Nam Trung Yên",tier:"Cấp 2 (D300)",flow:"1,450 m³/h",status:"Ổn định"}),K([new A(0,1.2,350),new A(180,1.2,420),new A(310,1.2,480)],1.1,16347926,"Tuyến Phân Phối Cấp 2 D300 Lê Văn Thiêm - Imperia Garden","PIPE-DIST-IMP-D300",!0,2,{name:"Tuyến Phân Phối Cấp 2 D300 Imperia Garden",tier:"Cấp 2 (D300)",flow:"1,680 m³/h",status:"Ổn định"}),K([new A(-160,1.2,-180),new A(-380,1.2,-260),new A(-440,1.2,-260)],1.1,16347926,"Tuyến Phân Phối Cấp 2 D300 VPI Tower & Trần Duy Hưng","PIPE-DIST-VPI-D300",!0,2,{name:"Tuyến Phân Phối Cấp 2 D300 VPI Tower",tier:"Cấp 2 (D300)",flow:"1,150 m³/h",status:"Ổn định"}),K([new A(-240,1,0),new A(-240,1,40)],.65,15381256,"Nhánh Cấp 3 D100 -> THPT Chuyên Amsterdam","PIPE-SRV-AMS",!0,3,{name:"Nhánh D100 -> THPT Amsterdam",tier:"Cấp 3 (D100)",status:"Ổn định"}),K([new A(460,1,-40),new A(460,1,-80)],.65,15381256,"Nhánh Cấp 3 D100 -> Bệnh Viện Thu Cúc","PIPE-SRV-THUCUC",!0,3,{name:"Nhánh D100 -> Bệnh Viện Thu Cúc",tier:"Cấp 3 (D100)",status:"Ổn định"}),K([new A(580,1,50),new A(580,1,100)],.65,15381256,"Nhánh Cấp 3 D100 -> Viện Y Học Cổ Truyền","PIPE-SRV-YHCT",!0,3,{name:"Nhánh D100 -> Viện YHCT Quân Đội",tier:"Cấp 3 (D100)",status:"Ổn định"}),K([new A(310,1,440),new A(310,1,480)],.65,15381256,"Nhánh Cấp 3 D125 -> Imperia Garden","PIPE-SRV-IMP",!0,3,{name:"Nhánh D125 -> Imperia Garden",tier:"Cấp 3 (D125)",status:"Ổn định"}),K([new A(180,1,380),new A(180,1,420)],.65,15381256,"Nhánh Cấp 3 D100 -> Golden West","PIPE-SRV-GW",!0,3,{name:"Nhánh D100 -> Golden West",tier:"Cấp 3 (D100)",status:"Ổn định"}),K([new A(-380,1,-220),new A(-380,1,-260)],.65,15381256,"Nhánh Cấp 3 D100 -> VPI Tower","PIPE-SRV-VPI",!0,3,{name:"Nhánh D100 -> VPI Tower",tier:"Cấp 3 (D100)",status:"Ổn định"}),K([new A(-1240,1.4,40),new A(-850,1.4,40),new A(-700,1.4,40)],1.6,165063,"Trục Truyền Dẫn Cấp 1 D800 Nguồn NMN Sông Đà Phía Tây","PIPE-TRUNK-WEST-D800",!0,1,{name:"Trục Truyền Dẫn Cấp 1 D800 Nguồn NMN Sông Đà",tier:"Cấp 1 (D800)",flow:"5,200 m³/h",status:"Vận hành tối ưu"}),K([new A(-440,1.4,-1200),new A(-440,1.4,-700),new A(-440,1.4,-400)],1.6,165063,"Trục Cấp 1 D800 Vành Đai 3 Phía Bắc (Cầu Giấy)","PIPE-TRUNK-VD3-NORTH",!0,1,{name:"Trục Cấp 1 D800 Vành Đai 3 Phía Bắc",tier:"Cấp 1 (D800)",flow:"4,600 m³/h",status:"Ổn định"}),K([new A(-440,1.4,600),new A(-440,1.4,950),new A(-440,1.4,1200)],1.6,165063,"Trục Cấp 1 D800 Khuất Duy Tiến Phía Nam (Thanh Xuân)","PIPE-TRUNK-VD3-SOUTH",!0,1,{name:"Trục Cấp 1 D800 Khuất Duy Tiến Phía Nam",tier:"Cấp 1 (D800)",flow:"4,100 m³/h",status:"Ổn định"}),K([new A(-440,1.2,140),new A(-660,1.2,140),new A(-840,1.2,180),new A(-840,1.2,40)],1.1,16347926,"Tuyến Phân Phối Cấp 2 D300 Mạch Vòng JW Marriott & Bảo Tàng HN","PIPE-DIST-JWM-D300",!0,2,{name:"Tuyến Phân Phối Cấp 2 D300 Mạch Vòng JW Marriott",tier:"Cấp 2 (D300)",flow:"1,250 m³/h",status:"Ổn định"}),K([new A(-440,1.2,-420),new A(-760,1.2,-420),new A(-880,1.2,-420)],1.1,16347926,"Tuyến Phân Phối Cấp 2 D300 The Manor Mỹ Đình","PIPE-DIST-MANOR-D300",!0,2,{name:"Tuyến Phân Phối Cấp 2 D300 The Manor Mỹ Đình",tier:"Cấp 2 (D300)",flow:"1,100 m³/h",status:"Ổn định"}),K([new A(340,1.2,-220),new A(480,1.2,-220),new A(680,1.2,-240),new A(680,1.2,-420)],1.1,16347926,"Tuyến Phân Phối Cấp 2 D300 ĐH LĐ-XH & Golden Park Tower","PIPE-DIST-NE-D300",!0,2,{name:"Tuyến Phân Phối Cấp 2 D300 ĐH LĐ-XH & Golden Park",tier:"Cấp 2 (D300)",flow:"1,380 m³/h",status:"Ổn định"}),K([new A(340,1.2,350),new A(540,1.2,520),new A(760,1.2,520),new A(760,1.2,620)],1.1,16347926,"Tuyến Phân Phối Cấp 2 D300 Mạch Vòng Royal City & Nguyễn Trãi","PIPE-DIST-ROYAL-D300",!0,2,{name:"Tuyến Phân Phối Cấp 2 D300 Royal City",tier:"Cấp 2 (D300)",flow:"2,150 m³/h",status:"Ổn định"}),K([new A(-660,1,140),new A(-660,1,150)],.65,15381256,"Nhánh Cấp 3 D100 -> Bảo Tàng Hà Nội","PIPE-SRV-BTHN",!0,3,{name:"Nhánh Cấp 3 D100 -> Bảo Tàng Hà Nội",tier:"Cấp 3 (D100)",status:"Ổn định"}),K([new A(-840,1,140),new A(-840,1,180)],.65,15381256,"Nhánh Cấp 3 D125 -> Khách Sạn JW Marriott","PIPE-SRV-JWM",!0,3,{name:"Nhánh Cấp 3 D125 -> Khách Sạn JW Marriott",tier:"Cấp 3 (D125)",status:"Ổn định"}),K([new A(-520,1,-420),new A(-520,1,-430)],.65,15381256,"Nhánh Cấp 3 D100 -> Tháp Handico Tower","PIPE-SRV-HANDICO",!0,3,{name:"Nhánh Cấp 3 D100 -> Tháp Handico Tower",tier:"Cấp 3 (D100)",status:"Ổn định"}),K([new A(480,1,-200),new A(480,1,-220)],.65,15381256,"Nhánh Cấp 3 D100 -> Trường ĐH Lao Động - Xã Hội","PIPE-SRV-DHLDXH",!0,3,{name:"Nhánh Cấp 3 D100 -> ĐH Lao Động Xã Hội",tier:"Cấp 3 (D100)",status:"Ổn định"}),K([new A(760,1,500),new A(760,1,520)],.65,15381256,"Nhánh Cấp 3 D150 -> Đại Đô Thị Royal City","PIPE-SRV-ROYAL",!0,3,{name:"Nhánh Cấp 3 D150 -> Đại Đô Thị Royal City",tier:"Cấp 3 (D150)",status:"Ổn định"});const Me=new $n;G.add(Me);const Pe=(W,q,ye,ce,Se,Ve,me)=>{if(!t.valves)return null;const Ie=new $n;Ie.position.set(W[0],0,W[2]);const Ze=new Zr(2.4,2.7,.6,16),Ne=new kn({color:ce?4524554:413243,roughness:.6}),lt=new Ft(Ze,Ne);lt.position.y=.3,Ie.add(lt);const St=new Tc(2.6,3.6,24),Ct=new da({color:ce?15680580:1096065,side:Gi}),mt=new Ft(St,Ct);mt.rotation.x=-Math.PI/2,mt.position.y=.15,Ie.add(mt);const Nt=new Tr(3.6,3.6,3.6),Pn=new kn({color:ce?14427686:1483594,metalness:.7,roughness:.25,emissive:ce?10033947:417606,emissiveIntensity:.35}),zt=new Ft(Nt,Pn);zt.position.y=2.4,zt.castShadow=!0,Ie.add(zt);const Zt=new Zr(.5,.5,2.5,12),Ht=new kn({color:9741240,metalness:.8}),vn=new Ft(Zt,Ht);vn.position.y=4.5,Ie.add(vn);const ri=new Qd(2,.45,12,24),Dn=new kn({color:ce?16096779:3718648,metalness:.75,roughness:.2}),Mn=new Ft(ri,Dn);Mn.rotation.x=ce?0:Math.PI/2,Mn.position.y=5.8,Ie.add(Mn);const _n=document.createElement("canvas");_n.width=540,_n.height=100;const nn=_n.getContext("2d");nn.fillStyle=ce?"#fee2e2":"#fde047",nn.beginPath(),nn.roundRect(8,8,524,84,18),nn.fill(),nn.strokeStyle=ce?"#dc2626":"#15803d",nn.lineWidth=6,nn.stroke(),nn.strokeStyle=ce?"#b91c1c":"#166534",nn.lineWidth=1.5,nn.strokeRect(14,14,512,72),nn.fillStyle="#000000",nn.font='900 25px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',nn.textAlign="center",nn.textBaseline="middle",nn.fillText(ce?`🔒 ${ye}: ĐÃ ĐÓNG (CẮT NƯỚC)`:`🔓 ${ye}: ĐANG MỞ (HOẠT ĐỘNG)`,270,50);const si=new h0(_n),Mi=new Id({map:si,transparent:!0,depthTest:!1}),Ut=new n0(Mi);Ut.position.set(0,12,0),Ut.scale.set(38,7,1),Ie.add(Ut);const ji={name:q,id:ye,type:"Chốt Khóa Nước Phân Đoạn (Smart Isolation Valve)",status:ce?"🔒 ĐÃ ĐÓNG (CÔ LẬP & CẮT NƯỚC CỤC BỘ)":"🔓 ĐANG MỞ (Cấp nước bình thường)",isClosed:ce,zoneDescription:Se,affectedBuildings:Ve,householdsAffected:me,pressure:ce?"0.00 bar (Cửa xả)":"3.30 bar (Ổn định)",diameter:"DN300 - DN500 Gang Cầu FCD",material:"Van Cổng Tín Hiệu Điện Tử (Flanged Resilient Gate Valve)"};return Ie.userData={name:q,id:ye,type:"SmartValve",data:ji},zt.userData=Ie.userData,x.current.push(zt),Me.add(Ie),Ie};if(Pe([0,2.5,20],"Chốt Khóa V-HDT-01 (Hoàng Đạo Thúy - Tháp 34T)","VALVE-01",fe,"Cụm Lõi Đô Thị Hoàng Đạo Thúy & 24T1-24T3","Tháp Biểu Tượng 34T, Cụm 24T1, 24T2, 24T3, Dãy 17T1-17T6 và dãy nhà phố nội khu","1,120 hộ dân (~4,500 cư dân)"),Pe([-160,2.5,25],"Chốt Khóa V-HMG-02 (Hoàng Minh Giám - Mandarin)","VALVE-02",ze,"Phân Khu Trường Học & Chung Cư Cao Cấp Hoàng Minh Giám","Tổ Hợp Mandarin Garden (4 Tháp A, B, C, D) & Trường THPT Chuyên Hà Nội - Amsterdam","1,008 căn hộ + 3,200 học sinh & GV"),Pe([0,2.5,155],"Chốt Khóa V-LVL-03 (Lê Văn Lương - Diamond Flower)","VALVE-03",H,"Nút Giao Lê Văn Lương - Hoàng Đạo Thúy","Diamond Flower Tower (36T), Star City, The Golden Palm, Cụm HUD Tower A & B, MB Grand Tower","850 hộ dân & 35,000m² văn phòng tài chính"),Pe([0,2.5,-180],"Chốt Khóa V-TDN-04 (Trần Duy Hưng - Charmvit Tower)","VALVE-04",it,"Phân Khu Khách Sạn & Ngoại Giao Trần Duy Hưng","Tổ hợp Charmvit Tower, Khách sạn Grand Plaza, Cụm Chung Cư N04 (3 tháp) & N05 (2 tháp 34T)","920 căn hộ & 540 phòng khách sạn 5 sao"),Pe([-280,2.5,-180],"Chốt Khóa V-DCP-05 (Vinhomes D'Capitale & Big C)","VALVE-05",ut,"Cửa Ngõ Phía Nam Trần Duy Hưng - Khuất Duy Tiến","Tổ Hợp 6 Tòa Tháp Vinhomes D'Capitale, Siêu Thị Big C Thăng Long, 2 Tháp Thăng Long Number One","3,000 căn hộ cao cấp & TTTM Big C Thăng Long"),Pe([-440,2.5,-320],"Chốt Khóa V-KNG-06 (Keangnam Landmark 72 & Phạm Hùng)","VALVE-06",ft,"Trung Tâm Tài Chính Phía Tây Hà Nội","Keangnam Hanoi Landmark 72 (350m), 2 Tháp Căn Hộ Đôi Keangnam 48T, Handico Tower, CEO Tower, Bảo tàng HN","922 căn hộ Penthouse, TTTM Lotte & Trụ sở Tập đoàn"),Pe([180,2.5,270],"Chốt Khóa V-HAP-07 (Ngụy Như Kon Tum - Hapulico)","VALVE-07",Ae,"Phân Khu Dân Cư Ngụy Như Kon Tum - Vũ Trọng Phụng","Tổ hợp Hapulico Complex (4 Block), Chung Cư Golden West, Imperia Garden (2 Tháp 35T), Shophouse Chợ Thuốc","1,200 căn hộ & Chợ Dược Phẩm miền Bắc"),Pe([75,2.5,0],"Chốt Khóa V-NTT-08 (Nguyễn Thị Thập - Khu Biệt Thự)","VALVE-08",xt,"Khu Đô Thị Thấp Tầng Nguyễn Thị Thập","150 Biệt thự Liền kề BT1 - BT6, Trường Liên cấp Ngôi Sao, 50 Shophouse mặt phố Nguyễn Thị Thập","150 căn biệt thự & 2,200 học sinh"),t.hydrants){const W=new $n;G.add(W);const q=(ce,Se,Ve,me)=>{const Ie=new $n;Ie.position.set(ce[0],0,ce[2]);const Ze=new Zr(.7,.8,1.2,12),Ne=new kn({color:14427686,metalness:.6,roughness:.25,emissive:10033947,emissiveIntensity:.35}),lt=new Ft(Ze,Ne);lt.position.y=.6,Ie.add(lt);const St=new Zr(.55,.55,2.2,12),Ct=new Ft(St,Ne);Ct.position.y=2,Ie.add(Ct);const mt=new pa(.65,12,12),Nt=new Ft(mt,Ne);Nt.position.y=3.1,Ie.add(Nt),Ie.userData={name:Se,id:Ve,type:"Trụ Cứu Hỏa PCCC",data:{name:Se,id:Ve,type:"Trụ Cứu Hỏa Đô Thị (TCVN 6379:1998)",status:"Sẵn sàng cấp nước chữa cháy 24/7 (Đạt QCVN 06:2022/BXD)",flow:"35.0 L/s (Lưu lượng danh định)",pressure:"3.35 bar (Cột áp tĩnh)",elevation:"+16.8m ASL",diameter:"Họng cấp DN100 + 2 họng phụ DN65",households:"Bán kính bảo vệ PCCC: 150m",dma:me}},Ct.userData=Ie.userData,x.current.push(Ct),W.add(Ie)};[...[-300,-220,-140,-60,20,100,180,260].map((ce,Se)=>({pos:[14,0,ce],id:`HYD-HDT-${Se+1}`,road:"Đường Hoàng Đạo Thúy"})),...[-380,-300,-220,-140,-60,20,100,180,260,340].map((ce,Se)=>({pos:[ce,0,194],id:`HYD-LVL-${Se+1}`,road:"Đường Lê Văn Lương"})),...[-380,-300,-220,-140,-60,20,100,180,260,340].map((ce,Se)=>({pos:[ce,0,-196],id:`HYD-TDH-${Se+1}`,road:"Đường Trần Duy Hưng"})),...[-500,-420,-340,-260,-180,-100,-20,60,140,220,300,380].map((ce,Se)=>({pos:[-422,0,ce],id:`HYD-VD3-${Se+1}`,road:"Đường Phạm Hùng - Khuất Duy Tiến"})),...[-200,-130,-60,10,80,150,220,290].map((ce,Se)=>({pos:[-148,0,ce],id:`HYD-HMG-${Se+1}`,road:"Đường Hoàng Minh Giám"})),...[-140,-80,-20,40,100,160,220,280].map((ce,Se)=>({pos:[ce,0,12],id:`HYD-NTT-${Se+1}`,road:"Đường Nguyễn Thị Thập"})),...[-120,-60,0,60,120,180,240,300].map((ce,Se)=>({pos:[ce,0,362],id:`HYD-NNKT-${Se+1}`,road:"Đường Ngụy Như Kon Tum"})),...[-280,-200,-120,-40,40,120,200,280].map((ce,Se)=>({pos:[352,0,ce],id:`HYD-TK-${Se+1}`,road:"Phố Trung Kính"})),...[190,230,270,310,350,390].map((ce,Se)=>({pos:[248,0,ce],id:`HYD-VTP-${Se+1}`,road:"Phố Vũ Trọng Phụng"}))].forEach(ce=>q(ce.pos,`Trụ Cứu Hỏa ${ce.id}`,ce.id,ce.road))}if(t.tanks){const W=new $n;W.position.set(-350,0,220);const q=new Zr(8,12,38,16),ye=new kn({color:E?1976635:6583435,roughness:.7}),ce=new Ft(q,ye);ce.position.y=19,ce.castShadow=!0,W.add(ce);const Se=new pa(18,24,20),Ve=new kn({color:E?165063:223649,metalness:.6,roughness:.2,emissive:E?223649:165063,emissiveIntensity:.25}),me=new Ft(Se,Ve);me.position.y=44,me.castShadow=!0,W.add(me),W.userData={name:"Đài Nước & Trạm Bơm Tăng Áp Sông Đà (KĐT Nhân Chính)",id:"PUMP-STATION-MAIN",type:"Trạm Bơm & Đài Nước Tăng Áp",data:{name:"Đài Nước Điều Áp & Trạm Bơm Tăng Áp Sông Đà",id:"PUMP-STATION-MAIN",type:"Đài Nước Cân Bằng Thủy Lực & Trạm Bơm Tăng Áp",status:"Hoạt động liên tục (3/3 tổ máy biến tần)",flow:`${u.flow.toFixed(1)} m³/h`,pressure:`${u.pressure.toFixed(2)} bar (Áp lực xuất trạm)`,level:"14.2m / 16.0m (Dung tích 8,000 m³)",elevation:"+35.0m ASL",power:"3 x 160 kW Biến tần ABB",dma:"Toàn KĐT Trung Hòa - Nhân Chính"}},me.userData=W.userData,x.current.push(me),G.add(W)}const Ue=new F1,ge=new Xe,_e=W=>{var ce;const q=te.domElement.getBoundingClientRect();ge.x=(W.clientX-q.left)/q.width*2-1,ge.y=-((W.clientY-q.top)/q.height)*2+1,Ue.setFromCamera(ge,$);const ye=Ue.intersectObjects(x.current,!0);if(ye.length>0){let Se=ye[0].object;for(;Se&&!((ce=Se.userData)!=null&&ce.data)&&Se.parent;)Se=Se.parent;Se&&Se.userData&&(Se.userData.type==="SmartValve"&&o&&o(Se.userData.id),p&&Se.userData.data&&p(Se.userData.data))}},Le=W=>{var ce,Se;const q=te.domElement.getBoundingClientRect();ge.x=(W.clientX-q.left)/q.width*2-1,ge.y=-((W.clientY-q.top)/q.height)*2+1,Ue.setFromCamera(ge,$);const ye=Ue.intersectObjects(x.current,!0);if(ye.length>0){let Ve=ye[0].object;for(;Ve&&!((ce=Ve.userData)!=null&&ce.name)&&Ve.parent;)Ve=Ve.parent;if(Ve&&((Se=Ve.userData)!=null&&Se.name)){te.domElement.style.cursor="pointer",F(Ve.userData.name);return}}te.domElement.style.cursor="grab",F(null)};te.domElement.addEventListener("pointerdown",_e),te.domElement.addEventListener("pointermove",Le);const z=()=>{R.current=requestAnimationFrame(z),y.current.forEach(W=>{W.t=(W.t+W.speed)%1;const q=W.curve.getPointAt(W.t);q&&W.mesh.position.copy(q)}),V.update(),te.render(G,$)};z();const xe=()=>{if(!O)return;const W=O.clientWidth,q=O.clientHeight;$.aspect=W/q,$.updateProjectionMatrix(),te.setSize(W,q)};return window.addEventListener("resize",xe),()=>{window.removeEventListener("resize",xe),te.domElement&&(te.domElement.removeEventListener("pointerdown",_e),te.domElement.removeEventListener("pointermove",Le)),R.current&&cancelAnimationFrame(R.current),w.current&&w.current.dispose(),y.current.forEach(W=>G.remove(W.mesh))}},[s,e,t,r,l,f]),g.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",minHeight:d?"440px":"560px"},children:[g.jsx("div",{ref:_,style:{width:"100%",height:"100%",outline:"none"}}),P.length>0&&g.jsxs("div",{style:{position:"absolute",top:"14px",left:"50%",transform:"translateX(-50%)",background:"rgba(220, 38, 38, 0.95)",color:"#ffffff",padding:"8px 18px",borderRadius:"8px",display:"flex",alignItems:"center",gap:"10px",zIndex:50,fontSize:"13px",fontWeight:"600",backdropFilter:"blur(6px)",animation:"pulse 2s infinite"},children:[g.jsx(fo,{size:18,color:"#fef08a"}),g.jsxs("span",{children:["⚠️ ĐANG CÔ LẬP CẮT NƯỚC: ",P.length," chốt khóa đang ĐÓNG. Click vào chốt van màu đỏ để mở lại nước!"]})]}),g.jsx("div",{style:{position:"absolute",bottom:d?"14px":"80px",left:"16px",pointerEvents:"none",display:"flex",flexDirection:"column",gap:"4px",zIndex:30},children:D&&g.jsxs("div",{style:{background:"rgba(11, 18, 33, 0.95)",color:"#38bdf8",padding:"7px 14px",borderRadius:"6px",fontSize:"12.5px",fontWeight:"600",border:"1px solid rgba(56, 189, 248, 0.5)",boxShadow:"0 6px 16px rgba(0, 0, 0, 0.4)",display:"inline-flex",alignItems:"center",gap:"8px"},children:[g.jsx(Z0,{size:14}),g.jsx("span",{children:D})]})})]})}function YE(){var At,_t,tn,Xt,ln,It,Sn,Bt,$t;const[s,e]=Dt.useState("overview"),[t,r]=Dt.useState("DMA 2"),[o,l]=Dt.useState("24h"),[u,d]=Dt.useState(null),[f,p]=Dt.useState({pipes:!0,valves:!0,sensors:!0}),[_,M]=Dt.useState(""),[v,S]=Dt.useState([{id:1,type:"Áp lực cao bất thường",location:"Trạm bơm Phân khu 3 (DMA 3)",time:"14:22",status:"High Pressure",severity:"danger",handled:!1},{id:2,type:"Nghi vấn rò rỉ đêm (MNF)",location:"Tuyến ống chính Zone A (DMA 1)",time:"13:50",status:"Leak Suspected",severity:"warning",handled:!1},{id:3,type:"Sụt áp cục bộ",location:"Khu biệt thự BT2 - Cụm B (DMA 2)",time:"12:15",status:"Low Pressure",severity:"warning",handled:!0},{id:4,type:"Độ đục vượt chuẩn nhẹ (NTU)",location:"Cửa xả Bể chứa ngầm Splendora",time:"10:04",status:"Water Quality",severity:"info",handled:!1}]),[w,R]=Dt.useState(!1),[y,x]=Dt.useState(null),[D,F]=Dt.useState("3d"),[P,O]=Dt.useState(null);Dt.useEffect(()=>{const fe=ze=>{ze.target.closest(".qatium-dropdown-container")||O(null)};return document.addEventListener("pointerdown",fe),()=>document.removeEventListener("pointerdown",fe)},[]);const[I,T]=Dt.useState("dark"),[E,Y]=Dt.useState("pressure"),[B,G]=Dt.useState({pipes:!0,valves:!0,tanks:!0,sensors:!0,contour:!0}),[$,te]=Dt.useState(14),[V,ue]=Dt.useState(!1),[le,J]=Dt.useState(null),[ne,Q]=Dt.useState(!1);Dt.useEffect(()=>{let fe;return V&&(fe=setInterval(()=>{te(ze=>(ze+1)%24)},1400)),()=>clearInterval(fe)},[V]);const U=(fe=>fe>=2&&fe<=4?{label:"03:00 - Đêm (MNF Rò rỉ)",flow:58.4,pressure:3.72,status:"Cảnh báo rò rỉ đêm",nrw:"16.2%"}:fe>=6&&fe<=8?{label:"07:30 - Cao điểm sáng",flow:168.2,pressure:3.05,status:"Phụ tải tăng cao",nrw:"11.8%"}:fe>=18&&fe<=20?{label:"19:00 - Cao điểm tối",flow:174.5,pressure:2.92,status:"Phụ tải sinh hoạt",nrw:"12.1%"}:{label:`${fe<10?"0"+fe:fe}:00 - Giờ bình thường`,flow:145.8,pressure:3.24,status:"Vận hành ổn định",nrw:"12.5%"})($),ie=fe=>{x(fe),setTimeout(()=>x(null),3e3)},Fe=fe=>{S(ze=>ze.map(H=>{if(H.id===fe){const it=!H.handled;return ie(it?`Đã điều động kỹ thuật viên xử lý: ${H.type}`:`Đã hoàn tác trạng thái sự cố: ${H.type}`),{...H,handled:it}}return H}))},se=(fe="water_management_report.csv")=>{const H=encodeURI(`data:text/csv;charset=utf-8,\uFEFFDiem Do,Phan Khu,Luu Luong (m3/h),Ap Luc (bar),Trang Thai
FM-01 (Dau vao Tong),Nha May Nuoc,145.8,3.8,Toi uu
PRV-02 (Giam ap),DMA 1,48.2,3.1,On dinh
PRV-03 (Giam ap),DMA 2,62.4,3.2,On dinh
FM-04 (Dong ho DMA),DMA 3,35.2,3.4,Canh bao Ap cao
SN-05 (Cam bien diem cut),DMA 2,0.0,2.1,Sut ap cuc bo
FM-06 (Ho Dieu Hoa),Splendora,18.5,2.9,Dang khoa
`),it=document.createElement("a");it.setAttribute("href",H),it.setAttribute("download",fe),document.body.appendChild(it),it.click(),document.body.removeChild(it),ie(`Đã xuất và tải về: ${fe}`)},we=()=>{window.print()},Ce={"DMA 1":{name:"DMA 1 - Khu Biệt Thự Phía Nam",flow:"48.2 m³/h",pressure:"3.1 bar",households:320,nrw:"11.8%",status:"Bình thường"},"DMA 2":{name:"DMA 2 - Cụm Trung Tâm & Công Viên",flow:"62.4 m³/h",pressure:"3.2 bar",households:450,nrw:"13.2%",status:"Ổn định"},"DMA 3":{name:"DMA 3 - Khu Biệt Thự Ven Hồ",flow:"35.2 m³/h",pressure:"3.4 bar",households:280,nrw:"10.5%",status:"Cảnh báo áp lực"}},Ee={"24h":{title:"Lưu Lượng Thủy Lực 24 Giờ (m³/h)",subtitle:"So sánh Lưu lượng Thực tế vs Đường Trung bình Baseline",points:[{label:"00h",actual:68,baseline:65,alert:!1},{label:"02h",actual:74,baseline:60,alert:!0,note:"MNF vượt chuẩn (+14 m³/h)"},{label:"04h",actual:62,baseline:60,alert:!1},{label:"06h",actual:110,baseline:105,alert:!1},{label:"08h",actual:172,baseline:160,alert:!0,note:"Đỉnh cao điểm sáng"},{label:"10h",actual:130,baseline:132,alert:!1},{label:"12h",actual:142,baseline:140,alert:!1},{label:"14h",actual:145.8,baseline:138,alert:!1},{label:"16h",actual:138,baseline:135,alert:!1},{label:"18h",actual:165,baseline:162,alert:!1},{label:"20h",actual:152,baseline:150,alert:!1},{label:"22h",actual:98,baseline:95,alert:!1}]},"7d":{title:"Lưu Lượng Thủy Lực 7 Ngày Qua (m³/ngày)",subtitle:"Xu hướng cấp nước theo ngày trong tuần",points:[{label:"Thứ 2",actual:3250,baseline:3200,alert:!1},{label:"Thứ 3",actual:3310,baseline:3220,alert:!1},{label:"Thứ 4",actual:3480,baseline:3250,alert:!0,note:"Tăng vọt giữa tuần (+7%)"},{label:"Thứ 5",actual:3290,baseline:3240,alert:!1},{label:"Thứ 6",actual:3380,baseline:3300,alert:!1},{label:"Thứ 7",actual:3620,baseline:3550,alert:!1},{label:"CN",actual:3590,baseline:3500,alert:!1}]},"30d":{title:"Lưu Lượng Thủy Lực 30 Ngày (m³/ngày)",subtitle:"Đường biến thiên chu kỳ tháng",points:[{label:"Tuần 1",actual:23100,baseline:22800,alert:!1},{label:"Tuần 2",actual:24500,baseline:23e3,alert:!0,note:"Đợt nắng nóng tăng tiêu thụ"},{label:"Tuần 3",actual:23200,baseline:22900,alert:!1},{label:"Tuần 4",actual:22800,baseline:22700,alert:!1}]}}[o],Ke=Math.max(...Ee.points.map(fe=>Math.max(fe.actual,fe.baseline)))*1.15,st=Math.min(...Ee.points.map(fe=>Math.min(fe.actual,fe.baseline)))*.85,at=fe=>180-(fe-st)/(Ke-st)*160+10,ct=fe=>{const H=620/(Ee.points.length-1);return Ee.points.map((it,ut)=>`${ut*H+40},${at(it[fe])}`).join(" L ")};return g.jsxs("div",{className:"app-layout",children:[w&&g.jsx("div",{className:"sidebar-backdrop",onClick:()=>R(!1)}),g.jsxs("aside",{className:`app-sidebar ${w?"mobile-open":""}`,children:[g.jsxs("div",{className:"sidebar-header",children:[g.jsx("div",{className:"logo-badge",children:g.jsx(no,{size:22})}),g.jsxs("div",{children:[g.jsx("div",{className:"logo-title",children:"Smart Water"}),g.jsx("div",{className:"logo-sub",children:"IoT SCADA"})]})]}),g.jsxs("nav",{className:"sidebar-nav",children:[g.jsx("div",{className:"nav-label",children:"Nghiệp Vụ"}),g.jsxs("button",{className:`nav-item ${s==="overview"?"active":""}`,onClick:()=>{e("overview"),R(!1)},children:[g.jsx(Cl,{size:18}),g.jsx("span",{children:"1. Tổng quan"})]}),g.jsxs("button",{className:`nav-item ${s==="gis"?"active":""}`,onClick:()=>{e("gis"),R(!1)},children:[g.jsx(W_,{size:18}),g.jsx("span",{children:"2. Mạng GIS"})]}),g.jsxs("button",{className:`nav-item ${s==="telemetry"?"active":""}`,onClick:()=>{e("telemetry"),R(!1)},children:[g.jsx(bl,{size:18}),g.jsx("span",{children:"3. Áp & Lưu lượng"})]}),g.jsxs("button",{className:`nav-item ${s==="leaks"?"active":""}`,onClick:()=>{e("leaks"),R(!1)},children:[g.jsx(fo,{size:18}),g.jsx("span",{children:"4. Thất thoát (NRW)"})]}),g.jsxs("button",{className:`nav-item ${s==="quality"?"active":""}`,onClick:()=>{e("quality"),R(!1)},children:[g.jsx(no,{size:18}),g.jsx("span",{children:"5. Chất lượng nước"})]}),g.jsx("div",{className:"nav-label",style:{marginTop:"16px"},children:"Báo Cáo"}),g.jsxs("button",{className:`nav-item ${s==="reports"?"active":""}`,onClick:()=>{e("reports"),R(!1)},children:[g.jsx(uh,{size:18}),g.jsx("span",{children:"6. Kiểm toán nước"})]})]}),g.jsxs("div",{className:"sidebar-footer",children:[g.jsxs("div",{className:"system-status",children:[g.jsx("span",{className:"status-dot"}),g.jsx("span",{children:"Trực tuyến: 48 node"})]}),g.jsx(q_,{size:14,color:"#94a3b8",style:{cursor:"pointer"},onClick:()=>ie("Đã đồng bộ lại 48 node")})]})]}),g.jsxs("div",{className:"main-wrapper",children:[g.jsxs("header",{className:"top-header",children:[g.jsxs("div",{className:"header-left-group",children:[g.jsx("button",{className:"mobile-menu-btn",onClick:()=>R(!w),"aria-label":"Toggle navigation menu",children:w?g.jsx(Um,{size:20}):g.jsx(X_,{size:20})}),g.jsxs("div",{className:"header-search",children:[g.jsx(Z_,{size:16}),g.jsx("input",{type:"text",placeholder:"Tìm trạm, DMA, cảm biến...",value:_,onChange:fe=>M(fe.target.value)})]})]}),g.jsxs("div",{className:"header-actions",children:[g.jsxs("button",{className:"action-btn",onClick:()=>se("Bao_Cao_Van_Hanh_Ngay.csv"),title:"Xuất báo cáo CSV",children:[g.jsx(uh,{size:15}),g.jsx("span",{children:"Xuất báo cáo"})]}),g.jsxs("button",{className:"action-btn",style:{position:"relative"},onClick:()=>ie("Cảnh báo: 1 sự cố áp cao tại DMA 3"),"aria-label":"Thông báo sự cố",title:"Xem thông báo",children:[g.jsx(H_,{size:16}),g.jsx("span",{style:{position:"absolute",top:"6px",right:"8px",width:"7px",height:"7px",background:"#ef4444",borderRadius:"50%"}})]}),g.jsxs("div",{className:"user-profile",title:"Tài khoản kỹ sư",children:[g.jsx("div",{className:"user-avatar",children:"AD"}),g.jsxs("div",{className:"user-info",children:[g.jsx("span",{className:"user-name",children:"Kỹ sư trực"}),g.jsx("span",{className:"user-role",children:"Vận hành"})]})]})]})]}),g.jsxs("main",{className:"content-container",children:[s==="overview"&&g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"page-title-row",children:[g.jsxs("div",{children:[g.jsx("h1",{className:"page-title",children:"Giám sát Cấp nước"}),g.jsx("p",{className:"page-subtitle",children:"Áp lực, lưu lượng 3 DMA và thất thoát thời gian thực"})]}),g.jsx("div",{style:{display:"flex",gap:"8px"},children:g.jsxs("span",{className:"metric-badge badge-success",children:[g.jsx(to,{size:13}),g.jsx("span",{children:"Trạm bơm chính: 100%"})]})})]}),g.jsxs("div",{className:"metrics-grid",children:[g.jsxs("div",{className:"metric-card",children:[g.jsxs("div",{className:"metric-header",children:[g.jsx("span",{children:"Lưu lượng cấp"}),g.jsx("div",{className:"metric-icon-wrap",style:{background:"#e0f2fe",color:"#0284c7"},children:g.jsx(no,{size:18})})]}),g.jsxs("div",{className:"metric-body",children:[g.jsx("span",{className:"metric-value",children:"145.8"}),g.jsx("span",{className:"metric-unit",children:"m³/h"})]}),g.jsx("div",{children:g.jsx("span",{className:"metric-badge badge-success",children:"↑ 3.2% định mức giờ"})})]}),g.jsxs("div",{className:"metric-card",children:[g.jsxs("div",{className:"metric-header",children:[g.jsx("span",{children:"Áp lực trung bình"}),g.jsx("div",{className:"metric-icon-wrap",style:{background:"#ecfdf5",color:"#10b981"},children:g.jsx(bl,{size:18})})]}),g.jsxs("div",{className:"metric-body",children:[g.jsx("span",{className:"metric-value",children:"3.2"}),g.jsx("span",{className:"metric-unit",children:"bar"})]}),g.jsx("div",{children:g.jsx("span",{className:"metric-badge badge-info",children:"Tối ưu: 2.8 - 3.5 bar"})})]}),g.jsxs("div",{className:"metric-card",children:[g.jsxs("div",{className:"metric-header",children:[g.jsx("span",{children:"Thất thoát (NRW)"}),g.jsx("div",{className:"metric-icon-wrap",style:{background:"#fef3c7",color:"#d97706"},children:g.jsx(Im,{size:18})})]}),g.jsx("div",{className:"metric-body",children:g.jsx("span",{className:"metric-value",children:"12.5%"})}),g.jsx("div",{children:g.jsx("span",{className:"metric-badge badge-success",children:"↓ 1.1% theo tuần"})})]}),g.jsxs("div",{className:"metric-card",children:[g.jsxs("div",{className:"metric-header",children:[g.jsx("span",{children:"Cảnh báo"}),g.jsx("div",{className:"metric-icon-wrap",style:{background:"#fee2e2",color:"#ef4444"},children:g.jsx(fo,{size:18})})]}),g.jsxs("div",{className:"metric-body",children:[g.jsx("span",{className:"metric-value",style:{color:"#ef4444"},children:v.filter(fe=>!fe.handled).length}),g.jsx("span",{className:"metric-unit",children:"sự cố"})]}),g.jsx("div",{children:g.jsx("span",{className:"metric-badge badge-danger",children:"1 nghi vấn đêm"})})]})]}),g.jsxs("div",{className:"dashboard-main-grid",children:[g.jsxs("div",{className:"panel-card",children:[g.jsxs("div",{className:"panel-card-header",children:[g.jsxs("div",{className:"panel-card-title",children:[g.jsx(j_,{size:17,color:"#0284c7"}),g.jsx("span",{children:"Sơ đồ phân vùng DMA"})]}),g.jsxs("div",{className:"panel-card-actions",children:[g.jsxs("div",{className:"qatium-hud-pill-group",style:{padding:"2px"},children:[g.jsx("button",{className:`qatium-hud-btn ${I==="dark"?"active":""}`,onClick:()=>T("dark"),style:{padding:"4px 8px",fontSize:"11.5px"},title:"Chế độ Digital Twin (Tối)",children:"Tối"}),g.jsx("button",{className:`qatium-hud-btn ${I==="light"?"active":""}`,onClick:()=>T("light"),style:{padding:"4px 8px",fontSize:"11.5px"},title:"Chế độ SCADA (Sáng)",children:"Sáng"})]}),g.jsx("button",{className:"btn-sm btn-secondary",onClick:()=>e("gis"),children:"Mở GIS →"})]})]}),g.jsxs("div",{className:`map-canvas-container ${I==="dark"?"dark-theme":"light-theme"}`,style:{minHeight:"440px",height:"440px",position:"relative"},children:[g.jsx(Y0,{theme:I,heatmap:E,assetsLayer:B,isolatedPipe:ne,simTime:$,currentSim:U,compact:!0,onSelectAsset:fe=>{fe.dma&&(fe.dma.includes("DMA 1")||fe.dma==="DMA 1")?r("DMA 1"):fe.dma&&(fe.dma.includes("DMA 2")||fe.dma==="DMA 2")?r("DMA 2"):fe.dma&&(fe.dma.includes("DMA 3")||fe.dma==="DMA 3")&&r("DMA 3")}}),g.jsxs("div",{className:"map-overlay-badge",style:{zIndex:25,pointerEvents:"auto"},children:[g.jsx("div",{className:"map-overlay-title",children:Ce[t].name}),g.jsxs("div",{className:"map-overlay-sub",children:["Lưu lượng: ",g.jsx("b",{children:Ce[t].flow})," · Áp: ",g.jsx("b",{children:Ce[t].pressure})," · NRW: ",g.jsx("b",{children:Ce[t].nrw})]})]})]})]}),g.jsxs("div",{className:"panel-card",children:[g.jsxs("div",{className:"panel-card-header",children:[g.jsxs("div",{children:[g.jsxs("div",{className:"panel-card-title",children:[g.jsx(Cl,{size:17,color:"#0284c7"}),g.jsx("span",{children:"Thủy lực 24h & Cảnh báo"})]}),g.jsx("span",{style:{fontSize:"12px",color:"#64748b"},children:Ee.subtitle})]}),g.jsxs("div",{className:"timeframe-group",children:[g.jsx("button",{className:`timeframe-btn ${o==="24h"?"active":""}`,onClick:()=>l("24h"),children:"24 Giờ"}),g.jsx("button",{className:`timeframe-btn ${o==="7d"?"active":""}`,onClick:()=>l("7d"),children:"7 Ngày"}),g.jsx("button",{className:`timeframe-btn ${o==="30d"?"active":""}`,onClick:()=>l("30d"),children:"30 Ngày"})]})]}),g.jsxs("div",{className:"line-chart-wrapper",children:[g.jsxs("div",{className:"line-chart-legend",children:[g.jsxs("div",{className:"legend-line-item",children:[g.jsx("div",{className:"line-sample-actual"}),g.jsx("span",{children:"Thực tế"})]}),g.jsxs("div",{className:"legend-line-item",children:[g.jsx("div",{className:"line-sample-baseline"}),g.jsx("span",{children:"Baseline"})]}),g.jsxs("div",{className:"legend-line-item",children:[g.jsx("div",{className:"line-sample-alert"}),g.jsx("span",{children:"Lệch chuẩn"})]})]}),g.jsxs("div",{style:{position:"relative",width:"100%",height:"220px",background:"#ffffff"},children:[g.jsxs("svg",{viewBox:"0 0 700 220",style:{width:"100%",height:"100%"},children:[g.jsx("line",{x1:"40",y1:"30",x2:"680",y2:"30",stroke:"#f1f5f9",strokeWidth:"1"}),g.jsx("line",{x1:"40",y1:"80",x2:"680",y2:"80",stroke:"#f1f5f9",strokeWidth:"1"}),g.jsx("line",{x1:"40",y1:"130",x2:"680",y2:"130",stroke:"#f1f5f9",strokeWidth:"1"}),g.jsx("line",{x1:"40",y1:"180",x2:"680",y2:"180",stroke:"#e2e8f0",strokeWidth:"1.5"}),g.jsx("path",{d:`M ${ct("baseline")}`,fill:"none",stroke:"#94a3b8",strokeWidth:"2.5",strokeDasharray:"6,5"}),g.jsx("path",{d:`M ${ct("actual")}`,fill:"none",stroke:"#0284c7",strokeWidth:"3.5",strokeLinecap:"round",strokeLinejoin:"round"}),Ee.points.map((fe,ze)=>{const it=620/(Ee.points.length-1),ut=ze*it+40,ft=at(fe.actual);return g.jsxs("g",{children:[fe.alert&&g.jsx("circle",{cx:ut,cy:ft,r:"9",fill:"rgba(239, 68, 68, 0.25)",stroke:"#ef4444",strokeWidth:"1.5"}),g.jsx("circle",{cx:ut,cy:ft,r:fe.alert?"5":"4",fill:fe.alert?"#ef4444":"#0284c7",stroke:"#ffffff",strokeWidth:"2",style:{cursor:"pointer"},onMouseEnter:()=>d(fe),onMouseLeave:()=>d(null)}),g.jsx("text",{x:ut,y:"202",textAnchor:"middle",fontSize:"11",fill:"#64748b",fontFamily:"var(--font-mono)",children:fe.label})]},ze)})]}),u&&g.jsxs("div",{style:{position:"absolute",top:"10px",right:"20px",background:"#0f172a",color:"#ffffff",padding:"8px 12px",borderRadius:"8px",fontSize:"12px",boxShadow:"0 4px 12px rgba(0,0,0,0.15)",zIndex:10},children:[g.jsxs("div",{style:{fontWeight:"700",marginBottom:"2px"},children:["Thời điểm: ",u.label]}),g.jsxs("div",{children:["Thực tế: ",g.jsxs("b",{style:{color:"#38bdf8"},children:[u.actual," m³/h"]})]}),g.jsxs("div",{children:["Trung bình: ",g.jsxs("b",{children:[u.baseline," m³/h"]})]}),u.note&&g.jsxs("div",{style:{color:"#f87171",marginTop:"4px",fontWeight:"600"},children:["⚠ ",u.note]})]})]}),g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"12px",color:"#64748b",borderTop:"1px solid #f1f5f9",paddingTop:"10px"},children:[g.jsxs("span",{children:["MNF đêm: ",g.jsx("b",{children:"65 m³/h"})," (Nguy cơ: ",">"," 70 m³/h)"]}),g.jsxs("span",{children:["Hệ số an toàn: ",g.jsx("b",{children:"1.15"})]})]})]})]})]}),g.jsxs("div",{className:"panel-card",children:[g.jsxs("div",{className:"panel-card-header",children:[g.jsxs("div",{className:"panel-card-title",children:[g.jsx(Q_,{size:17,color:"#ef4444"}),g.jsx("span",{children:"Nhật ký sự cố SCADA"})]}),g.jsx("div",{className:"panel-card-actions",children:g.jsx("span",{className:"metric-badge badge-warning",children:"Chờ xử lý"})})]}),g.jsx("div",{className:"data-table-wrapper",children:g.jsxs("table",{className:"custom-table",children:[g.jsx("thead",{children:g.jsxs("tr",{children:[g.jsx("th",{children:"Mức độ"}),g.jsx("th",{children:"Sự cố"}),g.jsx("th",{children:"Vị trí"}),g.jsx("th",{children:"Giờ"}),g.jsx("th",{children:"Trạng thái"}),g.jsx("th",{children:"Thao tác"})]})}),g.jsx("tbody",{children:v.map(fe=>g.jsxs("tr",{children:[g.jsx("td",{children:g.jsx("span",{className:`metric-badge ${fe.severity==="danger"?"badge-danger":fe.severity==="warning"?"badge-warning":"badge-info"}`,children:fe.status})}),g.jsx("td",{style:{fontWeight:"600"},children:fe.type}),g.jsx("td",{children:fe.location}),g.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:fe.time}),g.jsx("td",{children:fe.handled?g.jsxs("span",{style:{color:"#10b981",fontWeight:"600",display:"flex",alignItems:"center",gap:"4px"},children:[g.jsx(to,{size:14})," Đã nhận"]}):g.jsx("span",{style:{color:"#ef4444",fontWeight:"600"},children:"Chưa xử lý"})}),g.jsx("td",{children:g.jsx("button",{className:`btn-sm ${fe.handled?"btn-secondary":"btn-primary"}`,onClick:()=>Fe(fe.id),children:fe.handled?"Hoàn tác":"Điều động"})})]},fe.id))})]})})]})]}),s==="gis"&&g.jsx("div",{className:"panel-card gis-full-screen-card",style:{position:"relative"},children:g.jsxs("div",{className:"map-canvas-container dark-theme",style:{width:"100%",height:"100%",position:"relative"},children:[g.jsxs("div",{style:{position:"absolute",top:"14px",left:"14px",zIndex:35,display:"flex",flexWrap:"wrap",gap:"8px",alignItems:"center",pointerEvents:"auto"},children:[g.jsxs("div",{className:"qatium-dropdown-container",style:{position:"relative"},children:[g.jsx("div",{className:"qatium-hud-pill-group",children:g.jsxs("button",{className:`qatium-hud-btn ${P==="mode"?"active":""}`,onClick:()=>O(P==="mode"?null:"mode"),style:{whiteSpace:"nowrap",display:"flex",alignItems:"center",gap:"6px",fontWeight:600},title:"Chế độ hiển thị không gian 3D, 2D GIS hoặc X-Ray trong suốt",children:[g.jsx(V_,{size:13,color:"#38bdf8"}),g.jsxs("span",{children:["Chế độ: ",D==="3d"?"3D":D==="2d"?"2D":"X-Ray"]}),g.jsx(eo,{size:12,style:{transform:P==="mode"?"rotate(180deg)":"none",transition:"transform 0.2s"}})]})}),P==="mode"&&g.jsxs("div",{style:{position:"absolute",top:"calc(100% + 6px)",left:0,minWidth:"240px",background:"rgba(11, 20, 38, 0.98)",backdropFilter:"blur(16px)",border:"1px solid rgba(56, 189, 248, 0.35)",borderRadius:"8px",boxShadow:"0 12px 30px -4px rgba(0, 0, 0, 0.8), 0 0 15px rgba(2, 132, 199, 0.25)",padding:"6px",zIndex:100},children:[g.jsx("div",{style:{padding:"6px 10px",fontSize:"11px",fontWeight:700,color:"#38bdf8",textTransform:"uppercase",letterSpacing:"0.05em",borderBottom:"1px solid rgba(255,255,255,0.08)",marginBottom:"4px"},children:"Góc Nhìn & Không Gian"}),[{id:"3d",label:"3D (Digital Twin)",desc:"Không gian 3D lập phương đô thị thực tế"},{id:"2d",label:"2D (Mặt phẳng GIS)",desc:"Góc nhìn trực diện từ trên xuống (Top-down)"},{id:"xray",label:"X-Ray (Trong suốt công trình)",desc:"Làm trong suốt công trình để nhìn rõ toàn bộ mạng ống ngầm"}].map(fe=>g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 10px",borderRadius:"6px",cursor:"pointer",background:D===fe.id?"rgba(2, 132, 199, 0.2)":"transparent",color:D===fe.id?"#38bdf8":"#cbd5e1",transition:"all 0.15s ease"},onClick:()=>{F(fe.id),O(null)},children:[g.jsx("span",{style:{fontSize:"14px"},children:D===fe.id?"●":"○"}),g.jsxs("div",{children:[g.jsx("div",{style:{fontSize:"12.5px",fontWeight:600},children:fe.label}),g.jsx("div",{style:{fontSize:"10.5px",color:"#94a3b8"},children:fe.desc})]})]},fe.id))]})]}),g.jsxs("div",{className:"qatium-dropdown-container",style:{position:"relative"},children:[g.jsx("div",{className:"qatium-hud-pill-group",children:g.jsxs("button",{className:`qatium-hud-btn ${P==="pipes"?"active":""}`,onClick:()=>O(P==="pipes"?null:"pipes"),style:{whiteSpace:"nowrap",display:"flex",alignItems:"center",gap:"6px",fontWeight:600},title:"Bật/tắt hiển thị các cấp mạng lưới đường ống nước",children:[g.jsx(no,{size:13,color:"#0284c7"}),g.jsxs("span",{children:["Đường ống (",[B.pipesPrimary,B.pipesSecondary,B.pipesService].filter(Boolean).length,"/3)"]}),g.jsx(eo,{size:12,style:{transform:P==="pipes"?"rotate(180deg)":"none",transition:"transform 0.2s"}})]})}),P==="pipes"&&g.jsxs("div",{style:{position:"absolute",top:"calc(100% + 6px)",left:0,minWidth:"270px",background:"rgba(11, 20, 38, 0.98)",backdropFilter:"blur(16px)",border:"1px solid rgba(56, 189, 248, 0.35)",borderRadius:"8px",boxShadow:"0 12px 30px -4px rgba(0, 0, 0, 0.8), 0 0 15px rgba(2, 132, 199, 0.25)",padding:"6px",zIndex:100},children:[g.jsx("div",{style:{padding:"6px 10px",fontSize:"11px",fontWeight:700,color:"#38bdf8",textTransform:"uppercase",letterSpacing:"0.05em",borderBottom:"1px solid rgba(255,255,255,0.08)",marginBottom:"4px"},children:"Mạng Lưới Đường Ống"}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 10px",borderRadius:"6px",cursor:"pointer",color:B.pipesPrimary?"#ffffff":"#94a3b8"},onClick:fe=>{fe.stopPropagation(),G(ze=>({...ze,pipesPrimary:!ze.pipesPrimary}))},children:[B.pipesPrimary?g.jsx(CheckSquare,{size:15,color:"#0284c7"}):g.jsx(Square,{size:15,color:"#64748b"}),g.jsxs("div",{style:{flex:1},children:[g.jsx("div",{style:{fontSize:"12.5px",fontWeight:600,color:"#0284c7"},children:"Cấp 1 (D500 - D800)"}),g.jsx("div",{style:{fontSize:"11px",color:"#94a3b8"},children:"Tuyến truyền dẫn chính từ NMN Sông Đà"})]})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 10px",borderRadius:"6px",cursor:"pointer",color:B.pipesSecondary?"#ffffff":"#94a3b8"},onClick:fe=>{fe.stopPropagation(),G(ze=>({...ze,pipesSecondary:!ze.pipesSecondary}))},children:[B.pipesSecondary?g.jsx(CheckSquare,{size:15,color:"#f97316"}):g.jsx(Square,{size:15,color:"#64748b"}),g.jsxs("div",{style:{flex:1},children:[g.jsx("div",{style:{fontSize:"12.5px",fontWeight:600,color:"#f97316"},children:"Cấp 2 (D200 - D300)"}),g.jsx("div",{style:{fontSize:"11px",color:"#94a3b8"},children:"Mạch vòng phân phối liên phường"})]})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 10px",borderRadius:"6px",cursor:"pointer",color:B.pipesService?"#ffffff":"#94a3b8"},onClick:fe=>{fe.stopPropagation(),G(ze=>({...ze,pipesService:!ze.pipesService}))},children:[B.pipesService?g.jsx(CheckSquare,{size:15,color:"#eab308"}):g.jsx(Square,{size:15,color:"#64748b"}),g.jsxs("div",{style:{flex:1},children:[g.jsx("div",{style:{fontSize:"12.5px",fontWeight:600,color:"#eab308"},children:"Cấp 3 (Đấu Nối Tòa Nhà)"}),g.jsx("div",{style:{fontSize:"11px",color:"#94a3b8"},children:"Nhánh dịch vụ dẫn vào chân công trình"})]})]})]})]}),g.jsxs("div",{className:"qatium-dropdown-container",style:{position:"relative"},children:[g.jsx("div",{className:"qatium-hud-pill-group",children:g.jsxs("button",{className:`qatium-hud-btn ${P==="devices"?"active":""}`,onClick:()=>O(P==="devices"?null:"devices"),style:{whiteSpace:"nowrap",display:"flex",alignItems:"center",gap:"6px",fontWeight:600},title:"Bật/tắt các loại thiết bị mạng lưới & quan trắc",children:[g.jsx(J_,{size:13,color:"#38bdf8"}),g.jsxs("span",{children:["Thiết bị (",[B.valves,B.sensors,B.hydrants,B.tanks].filter(Boolean).length,"/4)"]}),g.jsx(eo,{size:12,style:{transform:P==="devices"?"rotate(180deg)":"none",transition:"transform 0.2s"}})]})}),P==="devices"&&g.jsxs("div",{style:{position:"absolute",top:"calc(100% + 6px)",left:0,minWidth:"230px",background:"rgba(11, 20, 38, 0.98)",backdropFilter:"blur(16px)",border:"1px solid rgba(56, 189, 248, 0.35)",borderRadius:"8px",boxShadow:"0 12px 30px -4px rgba(0, 0, 0, 0.8), 0 0 15px rgba(2, 132, 199, 0.25)",padding:"6px",zIndex:100},children:[g.jsx("div",{style:{padding:"6px 10px",fontSize:"11px",fontWeight:700,color:"#38bdf8",textTransform:"uppercase",letterSpacing:"0.05em",borderBottom:"1px solid rgba(255,255,255,0.08)",marginBottom:"4px"},children:"Thiết bị & Quan trắc SCADA"}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 10px",borderRadius:"6px",cursor:"pointer",color:B.valves?"#ffffff":"#94a3b8"},onClick:fe=>{fe.stopPropagation(),G(ze=>({...ze,valves:!ze.valves}))},children:[B.valves?g.jsx(CheckSquare,{size:15,color:"#38bdf8"}):g.jsx(Square,{size:15,color:"#64748b"}),g.jsx("span",{style:{fontSize:"12.5px",fontWeight:600},children:"Van PRV & Chốt cách ly"})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 10px",borderRadius:"6px",cursor:"pointer",color:B.sensors?"#ffffff":"#94a3b8"},onClick:fe=>{fe.stopPropagation(),G(ze=>({...ze,sensors:!ze.sensors}))},children:[B.sensors?g.jsx(CheckSquare,{size:15,color:"#38bdf8"}):g.jsx(Square,{size:15,color:"#64748b"}),g.jsx("span",{style:{fontSize:"12.5px",fontWeight:600},children:"Cảm biến áp & lưu lượng"})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 10px",borderRadius:"6px",cursor:"pointer",color:B.hydrants?"#ffffff":"#94a3b8"},onClick:fe=>{fe.stopPropagation(),G(ze=>({...ze,hydrants:!ze.hydrants}))},children:[B.hydrants?g.jsx(CheckSquare,{size:15,color:"#ef4444"}):g.jsx(Square,{size:15,color:"#64748b"}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[g.jsx(Flame,{size:13,color:"#ef4444"}),g.jsx("span",{style:{fontSize:"12.5px",fontWeight:600},children:"Trụ PCCC (38 trụ)"})]})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 10px",borderRadius:"6px",cursor:"pointer",color:B.tanks?"#ffffff":"#94a3b8"},onClick:fe=>{fe.stopPropagation(),G(ze=>({...ze,tanks:!ze.tanks}))},children:[B.tanks?g.jsx(CheckSquare,{size:15,color:"#38bdf8"}):g.jsx(Square,{size:15,color:"#64748b"}),g.jsx("span",{style:{fontSize:"12.5px",fontWeight:600},children:"Đài nước & Trạm Bơm"})]})]})]}),g.jsxs("div",{className:"qatium-dropdown-container",style:{position:"relative"},children:[g.jsx("div",{className:"qatium-hud-pill-group",children:g.jsxs("button",{className:`qatium-hud-btn ${P==="buildings"?"active":""}`,onClick:()=>O(P==="buildings"?null:"buildings"),style:{whiteSpace:"nowrap",display:"flex",alignItems:"center",gap:"6px",fontWeight:600},title:"Bật/tắt hiển thị khối nhà 3D và nhãn tên đường",children:[g.jsx(Building2,{size:13,color:"#38bdf8"}),g.jsxs("span",{children:["Công trình (",[B.buildings,B.streetLabels].filter(Boolean).length,"/2)"]}),g.jsx(eo,{size:12,style:{transform:P==="buildings"?"rotate(180deg)":"none",transition:"transform 0.2s"}})]})}),P==="buildings"&&g.jsxs("div",{style:{position:"absolute",top:"calc(100% + 6px)",left:0,minWidth:"220px",background:"rgba(11, 20, 38, 0.98)",backdropFilter:"blur(16px)",border:"1px solid rgba(56, 189, 248, 0.35)",borderRadius:"8px",boxShadow:"0 12px 30px -4px rgba(0, 0, 0, 0.8), 0 0 15px rgba(2, 132, 199, 0.25)",padding:"6px",zIndex:100},children:[g.jsx("div",{style:{padding:"6px 10px",fontSize:"11px",fontWeight:700,color:"#38bdf8",textTransform:"uppercase",letterSpacing:"0.05em",borderBottom:"1px solid rgba(255,255,255,0.08)",marginBottom:"4px"},children:"Địa hình & Kiến trúc"}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 10px",borderRadius:"6px",cursor:"pointer",color:B.buildings?"#ffffff":"#94a3b8"},onClick:fe=>{fe.stopPropagation(),G(ze=>({...ze,buildings:!ze.buildings}))},children:[B.buildings?g.jsx(CheckSquare,{size:15,color:"#38bdf8"}):g.jsx(Square,{size:15,color:"#64748b"}),g.jsx("span",{style:{fontSize:"12.5px",fontWeight:600},children:"Khối Nhà 3D"})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 10px",borderRadius:"6px",cursor:"pointer",color:B.streetLabels?"#ffffff":"#94a3b8"},onClick:fe=>{fe.stopPropagation(),G(ze=>({...ze,streetLabels:!ze.streetLabels}))},children:[B.streetLabels?g.jsx(CheckSquare,{size:15,color:"#38bdf8"}):g.jsx(Square,{size:15,color:"#64748b"}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[g.jsx(Tag,{size:13,color:"#38bdf8"}),g.jsx("span",{style:{fontSize:"12.5px",fontWeight:600},children:"Tên đường (Maps)"})]})]})]})]}),g.jsxs("div",{className:"qatium-dropdown-container",style:{position:"relative"},children:[g.jsx("div",{className:"qatium-hud-pill-group",children:g.jsxs("button",{className:`qatium-hud-btn ${P==="valves"?"active":""}`,onClick:()=>O(P==="valves"?null:"valves"),style:{whiteSpace:"nowrap",display:"flex",alignItems:"center",gap:"7px",fontWeight:700,fontSize:"12px",color:Object.values(closedValves).some(Boolean)?"#fca5a5":"#86efac"},title:"Bảng điều khiển & giám sát toàn bộ các chốt van phân đoạn mạng lưới",children:[g.jsx("span",{style:{fontSize:"13px",lineHeight:1},children:Object.values(closedValves).some(Boolean)?"🔴":"🟢"}),g.jsxs("span",{children:["Chốt Van ",Object.values(closedValves).filter(Boolean).length>0?`(${Object.values(closedValves).filter(Boolean).length} ĐÃ ĐÓNG ⚠️)`:`(Tất cả ${Object.keys(closedValves).length} MỞ)`]}),g.jsx(eo,{size:12,style:{transform:P==="valves"?"rotate(180deg)":"none",transition:"transform 0.2s"}})]})}),P==="valves"&&g.jsxs("div",{style:{position:"absolute",top:"calc(100% + 6px)",left:0,minWidth:"350px",background:"rgba(11, 20, 38, 0.98)",backdropFilter:"blur(16px)",border:"1px solid rgba(56, 189, 248, 0.35)",borderRadius:"8px",boxShadow:"0 12px 30px -4px rgba(0, 0, 0, 0.8), 0 0 15px rgba(2, 132, 199, 0.25)",padding:"8px",zIndex:100,maxHeight:"440px",overflowY:"auto"},children:[g.jsxs("div",{style:{padding:"6px 10px",fontSize:"11px",fontWeight:700,color:"#38bdf8",textTransform:"uppercase",letterSpacing:"0.05em",borderBottom:"1px solid rgba(255,255,255,0.08)",marginBottom:"6px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[g.jsx("span",{children:"Điều Khiển Chốt Van Cô Lập"}),g.jsxs("span",{style:{color:"#94a3b8",fontSize:"10.5px"},children:[Object.keys(closedValves).length," vị trí"]})]}),Object.entries(valveInfoMap).map(([fe,ze])=>{var it;const H=closedValves[fe];return g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px",padding:"8px 10px",borderRadius:"6px",background:H?"rgba(239, 68, 68, 0.15)":"rgba(255, 255, 255, 0.03)",border:H?"1px solid rgba(239, 68, 68, 0.45)":"1px solid rgba(255, 255, 255, 0.06)",marginBottom:"5px",cursor:"pointer",transition:"all 0.15s ease"},onClick:()=>handleToggleValve(fe),title:`Click để ${H?"MỞ lại":"ĐÓNG"} ${fe}`,children:[g.jsxs("div",{style:{flex:1,minWidth:0},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[g.jsx("span",{style:{fontSize:"13px"},children:H?"🔒":"🔓"}),g.jsx("span",{style:{fontSize:"12px",fontWeight:700,color:H?"#f87171":"#f8fafc"},children:fe}),g.jsx("span",{style:{fontSize:"11px",color:"#cbd5e1"},children:((it=ze.name.split("(")[1])==null?void 0:it.replace(")",""))||ze.name})]}),g.jsx("div",{style:{fontSize:"10.5px",color:H?"#fca5a5":"#64748b",marginTop:"2px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:H?`⚠️ CẮT NƯỚC: ${ze.affected}`:ze.zone})]}),g.jsx("span",{style:{padding:"3px 8px",borderRadius:"4px",fontSize:"11px",fontWeight:700,background:H?"#ef4444":"#10b981",color:"#ffffff",flexShrink:0},children:H?"ĐÃ ĐÓNG":"MỞ"})]},fe)})]})]}),g.jsx("div",{className:"qatium-hud-pill-group",children:g.jsxs("button",{className:"qatium-hud-btn",onClick:()=>se("Mo_Hinh_Mang_3D_GIS.csv"),title:"Xuất cơ sở dữ liệu GIS thủy lực",style:{padding:"6px 12px"},children:[g.jsx(uh,{size:13,color:"#38bdf8"}),g.jsx("span",{children:"Xuất GIS"})]})})]}),g.jsx(Y0,{theme:I,heatmap:E,viewMode:D,assetsLayer:B,isolatedPipe:ne,closedValves,onToggleValve:handleToggleValve,simTime:$,currentSim:U,onSelectAsset:fe=>J(fe)}),le&&g.jsxs("div",{className:"qatium-inspector-drawer",children:[g.jsxs("div",{className:"inspector-header",children:[g.jsxs("div",{className:"inspector-title",children:[g.jsx(Z0,{size:16,color:"#0284c7"}),g.jsx("span",{children:le.name})]}),g.jsx("button",{className:"inspector-close",onClick:()=>J(null),"aria-label":"Đóng bảng tra cứu",children:g.jsx(Um,{size:15})})]}),g.jsxs("div",{className:"inspector-body",children:[g.jsxs("div",{className:"inspector-section",children:[g.jsx("div",{className:"inspector-section-title",children:"THÔNG SỐ THỦY LỰC REAL-TIME"}),g.jsxs("div",{className:"inspector-grid",children:[g.jsxs("div",{className:"inspector-item",children:[g.jsx("span",{className:"inspector-label",children:"Trạng thái"}),g.jsx("span",{className:"inspector-val highlight-val",children:((At=le.data)==null?void 0:At.status)||"Bình thường"})]}),g.jsxs("div",{className:"inspector-item",children:[g.jsx("span",{className:"inspector-label",children:"Áp lực P"}),g.jsx("span",{className:"inspector-val",children:((_t=le.data)==null?void 0:_t.intakePressure)||((tn=le.data)==null?void 0:tn.pressure)||U.pressure+" bar"})]}),g.jsxs("div",{className:"inspector-item",children:[g.jsx("span",{className:"inspector-label",children:"Lưu lượng Q"}),g.jsx("span",{className:"inspector-val",children:((Xt=le.data)==null?void 0:Xt.demandFlow)||((ln=le.data)==null?void 0:ln.flow)||"45.0 m³/h"})]}),g.jsxs("div",{className:"inspector-item",children:[g.jsx("span",{className:"inspector-label",children:"DMA Quản lý"}),g.jsx("span",{className:"inspector-val",children:((It=le.data)==null?void 0:It.dma)||"DMA THNC-02"})]})]})]}),le.type==="SmartValve"&&g.jsxs("div",{className:"inspector-section",style:{background:"rgba(2, 132, 199, 0.08)",padding:"12px",borderRadius:"8px",border:"1px solid rgba(56, 189, 248, 0.25)"},children:[g.jsx("div",{className:"inspector-section-title",style:{color:"#38bdf8"},children:"ĐIỀU KHIỂN CHỐT KHÓA NƯỚC"}),g.jsx("p",{style:{fontSize:"12px",color:"#cbd5e1",lineHeight:"1.5",margin:"4px 0 10px"},children:(Sn=le.data)==null?void 0:Sn.zoneDescription}),g.jsx("button",{className:`btn-sm ${(Bt=le.data)!=null&&Bt.isClosed?"btn-primary":"btn-danger"}`,onClick:()=>handleToggleValve(le.id),style:{width:"100%",justifyContent:"center",padding:"9px 12px",fontWeight:"bold"},children:($t=le.data)!=null&&$t.isClosed?"🔓 MỞ LẠI CHỐT KHÓA NƯỚC":"🔒 ĐÓNG CHỐT VAN (CÔ LẬP SỰ CỐ)"})]})]})]}),g.jsxs("div",{className:"qatium-timeline-bar",style:{padding:"8px 16px",display:"flex",alignItems:"center",gap:"14px",background:"rgba(11, 20, 38, 0.95)",backdropFilter:"blur(16px)",border:"1px solid rgba(56, 189, 248, 0.28)",borderRadius:"10px",boxShadow:"0 8px 30px rgba(0, 0, 0, 0.65)"},children:[g.jsx("button",{className:"timeline-play-btn",onClick:()=>{ue(!V),ie(V?"Đã tạm dừng mô phỏng 24h":"Đang chạy mô phỏng biến thiên thủy lực 24h...")},title:V?"Tạm dừng mô phỏng":"Chạy mô phỏng biến thiên 24h",style:{width:"36px",height:"36px",borderRadius:"50%",background:V?"#0284c7":"#0369a1",border:"none",color:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",flexShrink:0,boxShadow:"0 0 12px rgba(2, 132, 199, 0.45)"},children:V?g.jsx(K_,{size:16}):g.jsx(Y_,{size:16,style:{marginLeft:"2px"}})}),g.jsxs("div",{style:{display:"flex",flexDirection:"column",minWidth:"180px",flexShrink:0},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[g.jsx(Cl,{size:13,color:"#38bdf8"}),g.jsx("span",{style:{fontSize:"13px",fontWeight:700,color:"#f8fafc",letterSpacing:"0.02em"},children:U.label})]}),g.jsxs("div",{style:{fontSize:"11px",color:"#94a3b8",marginTop:"2px",display:"flex",gap:"8px"},children:[g.jsxs("span",{children:["Q = ",g.jsxs("b",{style:{color:"#38bdf8"},children:[U.flow," m³/h"]})]}),g.jsx("span",{children:"·"}),g.jsxs("span",{children:["P = ",g.jsxs("b",{style:{color:"#f59e0b"},children:[U.pressure," bar"]})]})]})]}),g.jsx("div",{style:{flex:1,position:"relative",height:"46px",display:"flex",alignItems:"center"},children:g.jsxs("svg",{viewBox:"0 0 460 44",style:{width:"100%",height:"100%",overflow:"visible",cursor:"pointer"},onClick:fe=>{const ze=fe.currentTarget.getBoundingClientRect(),H=fe.clientX-ze.left,it=Math.max(0,Math.min(1,H/ze.width)),ut=Math.round(it*23);te(ut)},children:[g.jsx("defs",{children:g.jsxs("linearGradient",{id:"flowGrad24",x1:"0",y1:"0",x2:"0",y2:"1",children:[g.jsx("stop",{offset:"0%",stopColor:"#0284c7",stopOpacity:"0.45"}),g.jsx("stop",{offset:"100%",stopColor:"#0284c7",stopOpacity:"0.02"})]})}),g.jsx("path",{d:"M 10 38 L 10 30 Q 50 36 70 36 T 130 18 T 190 24 T 270 23 T 350 12 T 410 26 T 450 34 L 450 38 Z",fill:"url(#flowGrad24)"}),g.jsx("path",{d:"M 10 30 Q 50 36 70 36 T 130 18 T 190 24 T 270 23 T 350 12 T 410 26 T 450 34",fill:"none",stroke:"#0284c7",strokeWidth:"2.2"}),g.jsx("path",{d:"M 10 16 Q 50 12 70 11 T 130 26 T 190 22 T 270 23 T 350 32 T 410 21 T 450 14",fill:"none",stroke:"#f59e0b",strokeWidth:"1.6",strokeDasharray:"3 3",opacity:"0.85"}),Array.from({length:24}).map((fe,ze)=>{const H=10+ze/23*440,it=ze===$;return g.jsxs("g",{children:[g.jsx("line",{x1:H,y1:8,x2:H,y2:38,stroke:it?"#38bdf8":"rgba(255,255,255,0.08)",strokeWidth:it?2:1}),ze%3===0&&g.jsxs("text",{x:H,y:43,textAnchor:"middle",fontSize:"8.5",fill:it?"#38bdf8":"#64748b",fontWeight:it?"bold":"normal",children:[ze,"h"]})]},ze)}),(()=>{const fe=10+$/23*440;return g.jsxs("g",{children:[g.jsx("line",{x1:fe,y1:2,x2:fe,y2:38,stroke:"#38bdf8",strokeWidth:"2.5"}),g.jsx("circle",{cx:fe,cy:6,r:"4",fill:"#38bdf8",stroke:"#ffffff",strokeWidth:"1.5"})]})})()]})}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexShrink:0},children:[g.jsx("span",{className:`metric-badge ${$>=2&&$<=4?"badge-danger":$>=6&&$<=8||$>=18&&$<=20?"badge-warning":"badge-success"}`,style:{fontSize:"11px",padding:"4px 8px"},children:U.status}),g.jsx("button",{className:"btn-sm btn-secondary",onClick:()=>te(14),title:"Đặt lại giờ mặc định (14:00)",style:{padding:"6px"},children:g.jsx($_,{size:13})})]})]})]})}),s==="telemetry"&&g.jsxs("div",{className:"panel-card",children:[g.jsxs("div",{className:"panel-card-header",children:[g.jsxs("div",{children:[g.jsxs("div",{className:"panel-card-title",children:[g.jsx(bl,{size:18,color:"#0284c7"}),g.jsx("span",{children:"Dữ liệu Áp & Lưu lượng"})]}),g.jsx("span",{style:{fontSize:"12px",color:"#64748b"},children:"6 điểm quan trắc tự động (SCADA)"})]}),g.jsx("button",{className:"btn-sm btn-primary",onClick:()=>se("Du_Lieu_Telemetry_6_Diem_Do.csv"),children:"Xuất Excel"})]}),g.jsx("div",{className:"data-table-wrapper",children:g.jsxs("table",{className:"custom-table",children:[g.jsx("thead",{children:g.jsxs("tr",{children:[g.jsx("th",{children:"Điểm đo"}),g.jsx("th",{children:"Khu vực"}),g.jsx("th",{children:"Lưu lượng"}),g.jsx("th",{children:"Áp lực (bar)"}),g.jsx("th",{children:"Dải chuẩn"}),g.jsx("th",{children:"Chênh lệch"}),g.jsx("th",{children:"Trạng thái"})]})}),g.jsx("tbody",{children:[{node:"FM-01 / Trạm bơm P1",zone:"Đầu nguồn cấp",flow:"145.8 m³/h",press:"4.2 bar",range:"3.8 - 4.5 bar",delta:"+0.1 bar",status:"Tối ưu",tag:"badge-success"},{node:"PRV-02 / Cổng vào DMA 1",zone:"DMA 1 (Phía Nam)",flow:"48.2 m³/h",press:"3.1 bar",range:"2.8 - 3.4 bar",delta:"-0.2 bar",status:"Ổn định",tag:"badge-info"},{node:"PRV-03 / Trục chính DMA 2",zone:"DMA 2 (Trung Tâm)",flow:"62.4 m³/h",press:"3.2 bar",range:"2.8 - 3.5 bar",delta:"+0.0 bar",status:"Ổn định",tag:"badge-info"},{node:"FM-04 / Điểm cao DMA 3",zone:"DMA 3 (Ven Hồ)",flow:"35.2 m³/h",press:"3.4 bar",range:"2.5 - 3.2 bar",delta:"+0.4 bar",status:"Cảnh báo Áp cao",tag:"badge-warning"},{node:"SN-05 / Cụm biệt thự BT2",zone:"DMA 2",flow:"18.4 m³/h",press:"2.4 bar",range:"2.8 - 3.4 bar",delta:"-0.5 bar",status:"Sụt áp cục bộ",tag:"badge-danger"},{node:"FM-06 / Tuyến xả cặn",zone:"Bể ngầm",flow:"0.0 m³/h",press:"3.0 bar",range:"2.8 - 3.5 bar",delta:"0.0 bar",status:"Đang khóa",tag:"badge-info"}].map((fe,ze)=>g.jsxs("tr",{children:[g.jsx("td",{style:{fontWeight:"700"},children:fe.node}),g.jsx("td",{children:fe.zone}),g.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:fe.flow}),g.jsx("td",{style:{fontWeight:"700",color:"#0284c7"},children:fe.press}),g.jsx("td",{style:{color:"#64748b"},children:fe.range}),g.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:fe.delta}),g.jsx("td",{children:g.jsx("span",{className:`metric-badge ${fe.tag}`,children:fe.status})})]},ze))})]})})]}),s==="leaks"&&g.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[g.jsxs("div",{className:"metrics-grid",children:[g.jsxs("div",{className:"metric-card",children:[g.jsxs("div",{className:"metric-header",children:[g.jsx("span",{children:"Lưu lượng đêm (MNF)"}),g.jsx(Im,{size:18,color:"#d97706"})]}),g.jsxs("div",{className:"metric-body",children:[g.jsx("span",{className:"metric-value",children:"65.2"}),g.jsx("span",{className:"metric-unit",children:"m³/h"})]}),g.jsx("span",{className:"metric-badge badge-warning",children:"Khung 02:00 - 04:00"})]}),g.jsxs("div",{className:"metric-card",children:[g.jsxs("div",{className:"metric-header",children:[g.jsx("span",{children:"Tỷ lệ thất thoát"}),g.jsx(fo,{size:18,color:"#ef4444"})]}),g.jsx("div",{className:"metric-body",children:g.jsx("span",{className:"metric-value",style:{color:"#ef4444"},children:"12.5%"})}),g.jsx("span",{className:"metric-badge badge-danger",children:"~18.2 m³/h rò rỉ"})]}),g.jsxs("div",{className:"metric-card",children:[g.jsxs("div",{className:"metric-header",children:[g.jsx("span",{children:"Nghi vấn rò rỉ"}),g.jsx(to,{size:18,color:"#10b981"})]}),g.jsxs("div",{className:"metric-body",children:[g.jsx("span",{className:"metric-value",children:"2"}),g.jsx("span",{className:"metric-unit",children:"tuyến ống"})]}),g.jsx("span",{className:"metric-badge badge-info",children:"Cần dò sóng âm"})]})]}),g.jsxs("div",{className:"panel-card",children:[g.jsx("div",{className:"panel-card-header",children:g.jsxs("div",{className:"panel-card-title",children:[g.jsx(fo,{size:17,color:"#d97706"}),g.jsx("span",{children:"Xếp hạng thất thoát theo DMA"})]})}),g.jsx("div",{className:"data-table-wrapper",children:g.jsxs("table",{className:"custom-table",children:[g.jsx("thead",{children:g.jsxs("tr",{children:[g.jsx("th",{children:"Vùng DMA"}),g.jsx("th",{children:"Hộ dân"}),g.jsx("th",{children:"Lưu lượng cấp"}),g.jsx("th",{children:"Lưu lượng đêm"}),g.jsx("th",{children:"Tỷ lệ NRW"}),g.jsx("th",{children:"Mức ưu tiên"})]})}),g.jsxs("tbody",{children:[g.jsxs("tr",{children:[g.jsx("td",{style:{fontWeight:"700"},children:"DMA 2 (Trung Tâm)"}),g.jsx("td",{children:"450 Hộ"}),g.jsx("td",{children:"62.4 m³/h"}),g.jsx("td",{children:"28.5 m³/h"}),g.jsx("td",{style:{fontWeight:"700",color:"#ef4444"},children:"13.2%"}),g.jsx("td",{children:g.jsx("span",{className:"metric-badge badge-danger",children:"Rất Cao (Khẩn)"})})]}),g.jsxs("tr",{children:[g.jsx("td",{style:{fontWeight:"700"},children:"DMA 1 (Phía Nam)"}),g.jsx("td",{children:"320 Hộ"}),g.jsx("td",{children:"48.2 m³/h"}),g.jsx("td",{children:"21.0 m³/h"}),g.jsx("td",{style:{fontWeight:"700",color:"#f59e0b"},children:"11.8%"}),g.jsx("td",{children:g.jsx("span",{className:"metric-badge badge-warning",children:"Trung Bình"})})]}),g.jsxs("tr",{children:[g.jsx("td",{style:{fontWeight:"700"},children:"DMA 3 (Ven Hồ)"}),g.jsx("td",{children:"280 Hộ"}),g.jsx("td",{children:"35.2 m³/h"}),g.jsx("td",{children:"15.7 m³/h"}),g.jsx("td",{style:{fontWeight:"700",color:"#10b981"},children:"10.5%"}),g.jsx("td",{children:g.jsx("span",{className:"metric-badge badge-success",children:"Thấp (Tốt)"})})]})]})]})})]})]}),s==="quality"&&g.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[g.jsxs("div",{className:"metrics-grid",children:[g.jsxs("div",{className:"metric-card",children:[g.jsxs("div",{className:"metric-header",children:[g.jsx("span",{children:"Độ đục (Turbidity)"}),g.jsx(no,{size:18,color:"#0284c7"})]}),g.jsxs("div",{className:"metric-body",children:[g.jsx("span",{className:"metric-value",children:"0.85"}),g.jsx("span",{className:"metric-unit",children:"NTU"})]}),g.jsx("span",{className:"metric-badge badge-success",children:"Chuẩn QCVN (< 2.0 NTU)"})]}),g.jsxs("div",{className:"metric-card",children:[g.jsxs("div",{className:"metric-header",children:[g.jsx("span",{children:"Clo dư (Chlorine)"}),g.jsx(to,{size:18,color:"#10b981"})]}),g.jsxs("div",{className:"metric-body",children:[g.jsx("span",{className:"metric-value",children:"0.42"}),g.jsx("span",{className:"metric-unit",children:"mg/L"})]}),g.jsx("span",{className:"metric-badge badge-success",children:"Ngưỡng chuẩn (0.2 - 1.0 mg/L)"})]}),g.jsxs("div",{className:"metric-card",children:[g.jsxs("div",{className:"metric-header",children:[g.jsx("span",{children:"Độ pH"}),g.jsx(Cl,{size:18,color:"#0284c7"})]}),g.jsx("div",{className:"metric-body",children:g.jsx("span",{className:"metric-value",children:"7.35"})}),g.jsx("span",{className:"metric-badge badge-info",children:"Chuẩn (6.5 - 8.5)"})]}),g.jsxs("div",{className:"metric-card",children:[g.jsxs("div",{className:"metric-header",children:[g.jsx("span",{children:"Chất rắn tan (TDS)"}),g.jsx(bl,{size:18,color:"#64748b"})]}),g.jsxs("div",{className:"metric-body",children:[g.jsx("span",{className:"metric-value",children:"128"}),g.jsx("span",{className:"metric-unit",children:"ppm"})]}),g.jsx("span",{className:"metric-badge badge-success",children:"An toàn (< 1000 ppm)"})]})]}),g.jsxs("div",{className:"panel-card",style:{padding:"20px"},children:[g.jsx("h3",{style:{fontSize:"15px",fontWeight:"700",marginBottom:"8px"},children:"Quan trắc chất lượng định kỳ"}),g.jsx("p",{style:{fontSize:"13px",color:"#64748b",lineHeight:"1.6"},children:"Cảm biến đa chỉ tiêu tại trạm tổng và 3 DMA. Chu kỳ đo 15 phút/lần, tự xả cặn khi độ đục > 2.5 NTU."})]})]}),s==="reports"&&g.jsxs("div",{className:"panel-card",children:[g.jsxs("div",{className:"panel-card-header",children:[g.jsxs("div",{children:[g.jsxs("div",{className:"panel-card-title",children:[g.jsx(G_,{size:18,color:"#0284c7"}),g.jsx("span",{children:"Cân bằng nước & Kiểm toán IWA"})]}),g.jsx("span",{style:{fontSize:"12px",color:"#64748b"},children:"Tiêu chuẩn Quốc tế IWA"})]}),g.jsxs("div",{style:{display:"flex",gap:"8px"},children:[g.jsx("button",{className:"btn-sm btn-secondary",onClick:we,title:"In hoặc lưu PDF",children:"In PDF"}),g.jsx("button",{className:"btn-sm btn-primary",onClick:()=>se("Bao_Cao_Can_Bang_Nuoc_IWA.csv"),title:"Tải file CSV",children:"Tải CSV"})]})]}),g.jsx("div",{className:"data-table-wrapper",children:g.jsxs("table",{className:"custom-table",children:[g.jsx("thead",{children:g.jsxs("tr",{children:[g.jsx("th",{children:"Hạng mục"}),g.jsx("th",{children:"Khối lượng (m³)"}),g.jsx("th",{children:"Tỷ trọng (%)"}),g.jsx("th",{children:"Doanh thu / Thiệt hại"}),g.jsx("th",{children:"Đánh giá"})]})}),g.jsxs("tbody",{children:[g.jsxs("tr",{children:[g.jsx("td",{style:{fontWeight:"700"},children:"1. Tổng cấp mạng lưới (SIV)"}),g.jsx("td",{style:{fontFamily:"var(--font-mono)",fontWeight:"700"},children:"105,400 m³"}),g.jsx("td",{children:"100.0%"}),g.jsx("td",{children:"Đầu vào nhà máy"}),g.jsx("td",{children:g.jsx("span",{className:"metric-badge badge-info",children:"Chuẩn đo đạc"})})]}),g.jsxs("tr",{children:[g.jsx("td",{style:{paddingLeft:"32px",color:"#047857"},children:"1.1. Tiêu thụ có doanh thu"}),g.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:"92,225 m³"}),g.jsx("td",{children:"87.5%"}),g.jsx("td",{children:"Thu tiền cư dân"}),g.jsx("td",{children:g.jsx("span",{className:"metric-badge badge-success",children:"Đạt chỉ tiêu"})})]}),g.jsxs("tr",{children:[g.jsx("td",{style:{paddingLeft:"32px",color:"#b91c1c"},children:"1.2. Thất thoát không doanh thu (NRW)"}),g.jsx("td",{style:{fontFamily:"var(--font-mono)",fontWeight:"700"},children:"13,175 m³"}),g.jsx("td",{children:"12.5%"}),g.jsx("td",{children:"Thiệt hại: ~105.4 tr VNĐ"}),g.jsx("td",{children:g.jsx("span",{className:"metric-badge badge-danger",children:"Cần giảm < 10%"})})]}),g.jsxs("tr",{children:[g.jsx("td",{style:{paddingLeft:"48px",color:"#64748b"},children:"- Thất thoát vật lý (Rò rỉ ống ngầm)"}),g.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:"9,800 m³"}),g.jsx("td",{children:"9.3%"}),g.jsx("td",{children:"Chảy ngầm trong đất"}),g.jsx("td",{children:"Tập trung sửa chữa DMA 2"})]}),g.jsxs("tr",{children:[g.jsx("td",{style:{paddingLeft:"48px",color:"#64748b"},children:"- Thất thoát thương mại (Sai số, gian lận)"}),g.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:"3,375 m³"}),g.jsx("td",{children:"3.2%"}),g.jsx("td",{children:"Sai số đo đếm"}),g.jsx("td",{children:"Hiệu chuẩn đồng hồ định kỳ"})]})]})]})})]})]})]}),y&&g.jsxs("div",{className:"toast-notification",children:[g.jsx(to,{size:18,color:"#10b981"}),g.jsx("span",{children:y})]})]})}console.log("[SWMS] Initializing Smart Water Management UI...");const Xh=document.getElementById("root");if(Xh)try{F_.createRoot(Xh).render(g.jsx(N_.StrictMode,{children:g.jsx(YE,{})})),console.log("[SWMS] App successfully mounted to DOM.")}catch(s){console.error("[SWMS] Fatal mount error:",s),Xh.innerHTML=`
      <div style="padding: 24px; background: #fee2e2; color: #991b1b; font-family: monospace; border-radius: 8px; margin: 20px;">
        <h2>Lỗi Render Giao Diện React:</h2>
        <pre>${s.stack||s.message}</pre>
      </div>
    `}
