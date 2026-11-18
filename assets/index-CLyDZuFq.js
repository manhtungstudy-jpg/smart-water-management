(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function J0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var lh={exports:{}},io={},ch={exports:{}},Lt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nm;function D_(){if(Nm)return Lt;Nm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),M=Symbol.iterator;function _(O){return O===null||typeof O!="object"?null:(O=M&&O[M]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,R={};function v(O,ie,Ie){this.props=O,this.context=ie,this.refs=R,this.updater=Ie||S}v.prototype.isReactComponent={},v.prototype.setState=function(O,ie){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ie,"setState")},v.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function y(){}y.prototype=v.prototype;function D(O,ie,Ie){this.props=O,this.context=ie,this.refs=R,this.updater=Ie||S}var k=D.prototype=new y;k.constructor=D,E(k,v.prototype),k.isPureReactComponent=!0;var P=Array.isArray,B=Object.prototype.hasOwnProperty,I={current:null},T={key:!0,ref:!0,__self:!0,__source:!0};function A(O,ie,Ie){var ae,Ce={},be=null,Ge=null;if(ie!=null)for(ae in ie.ref!==void 0&&(Ge=ie.ref),ie.key!==void 0&&(be=""+ie.key),ie)B.call(ie,ae)&&!T.hasOwnProperty(ae)&&(Ce[ae]=ie[ae]);var we=arguments.length-2;if(we===1)Ce.children=Ie;else if(1<we){for(var Ve=Array(we),Dt=0;Dt<we;Dt++)Ve[Dt]=arguments[Dt+2];Ce.children=Ve}if(O&&O.defaultProps)for(ae in we=O.defaultProps,we)Ce[ae]===void 0&&(Ce[ae]=we[ae]);return{$$typeof:s,type:O,key:be,ref:Ge,props:Ce,_owner:I.current}}function U(O,ie){return{$$typeof:s,type:O.type,key:ie,ref:O.ref,props:O.props,_owner:O._owner}}function H(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function K(O){var ie={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Ie){return ie[Ie]})}var Q=/\/+/g;function he(O,ie){return typeof O=="object"&&O!==null&&O.key!=null?K(""+O.key):ie.toString(36)}function F(O,ie,Ie,ae,Ce){var be=typeof O;(be==="undefined"||be==="boolean")&&(O=null);var Ge=!1;if(O===null)Ge=!0;else switch(be){case"string":case"number":Ge=!0;break;case"object":switch(O.$$typeof){case s:case e:Ge=!0}}if(Ge)return Ge=O,Ce=Ce(Ge),O=ae===""?"."+he(Ge,0):ae,P(Ce)?(Ie="",O!=null&&(Ie=O.replace(Q,"$&/")+"/"),F(Ce,ie,Ie,"",function(Dt){return Dt})):Ce!=null&&(H(Ce)&&(Ce=U(Ce,Ie+(!Ce.key||Ge&&Ge.key===Ce.key?"":(""+Ce.key).replace(Q,"$&/")+"/")+O)),ie.push(Ce)),1;if(Ge=0,ae=ae===""?".":ae+":",P(O))for(var we=0;we<O.length;we++){be=O[we];var Ve=ae+he(be,we);Ge+=F(be,ie,Ie,Ve,Ce)}else if(Ve=_(O),typeof Ve=="function")for(O=Ve.call(O),we=0;!(be=O.next()).done;)be=be.value,Ve=ae+he(be,we++),Ge+=F(be,ie,Ie,Ve,Ce);else if(be==="object")throw ie=String(O),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return Ge}function J(O,ie,Ie){if(O==null)return O;var ae=[],Ce=0;return F(O,ae,"","",function(be){return ie.call(Ie,be,Ce++)}),ae}function ue(O){if(O._status===-1){var ie=O._result;ie=ie(),ie.then(function(Ie){(O._status===0||O._status===-1)&&(O._status=1,O._result=Ie)},function(Ie){(O._status===0||O._status===-1)&&(O._status=2,O._result=Ie)}),O._status===-1&&(O._status=0,O._result=ie)}if(O._status===1)return O._result.default;throw O._result}var ee={current:null},Z={transition:null},q={ReactCurrentDispatcher:ee,ReactCurrentBatchConfig:Z,ReactCurrentOwner:I};function $(){throw Error("act(...) is not supported in production builds of React.")}return Lt.Children={map:J,forEach:function(O,ie,Ie){J(O,function(){ie.apply(this,arguments)},Ie)},count:function(O){var ie=0;return J(O,function(){ie++}),ie},toArray:function(O){return J(O,function(ie){return ie})||[]},only:function(O){if(!H(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Lt.Component=v,Lt.Fragment=t,Lt.Profiler=o,Lt.PureComponent=D,Lt.StrictMode=r,Lt.Suspense=p,Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,Lt.act=$,Lt.cloneElement=function(O,ie,Ie){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var ae=E({},O.props),Ce=O.key,be=O.ref,Ge=O._owner;if(ie!=null){if(ie.ref!==void 0&&(be=ie.ref,Ge=I.current),ie.key!==void 0&&(Ce=""+ie.key),O.type&&O.type.defaultProps)var we=O.type.defaultProps;for(Ve in ie)B.call(ie,Ve)&&!T.hasOwnProperty(Ve)&&(ae[Ve]=ie[Ve]===void 0&&we!==void 0?we[Ve]:ie[Ve])}var Ve=arguments.length-2;if(Ve===1)ae.children=Ie;else if(1<Ve){we=Array(Ve);for(var Dt=0;Dt<Ve;Dt++)we[Dt]=arguments[Dt+2];ae.children=we}return{$$typeof:s,type:O.type,key:Ce,ref:be,props:ae,_owner:Ge}},Lt.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},Lt.createElement=A,Lt.createFactory=function(O){var ie=A.bind(null,O);return ie.type=O,ie},Lt.createRef=function(){return{current:null}},Lt.forwardRef=function(O){return{$$typeof:d,render:O}},Lt.isValidElement=H,Lt.lazy=function(O){return{$$typeof:x,_payload:{_status:-1,_result:O},_init:ue}},Lt.memo=function(O,ie){return{$$typeof:m,type:O,compare:ie===void 0?null:ie}},Lt.startTransition=function(O){var ie=Z.transition;Z.transition={};try{O()}finally{Z.transition=ie}},Lt.unstable_act=$,Lt.useCallback=function(O,ie){return ee.current.useCallback(O,ie)},Lt.useContext=function(O){return ee.current.useContext(O)},Lt.useDebugValue=function(){},Lt.useDeferredValue=function(O){return ee.current.useDeferredValue(O)},Lt.useEffect=function(O,ie){return ee.current.useEffect(O,ie)},Lt.useId=function(){return ee.current.useId()},Lt.useImperativeHandle=function(O,ie,Ie){return ee.current.useImperativeHandle(O,ie,Ie)},Lt.useInsertionEffect=function(O,ie){return ee.current.useInsertionEffect(O,ie)},Lt.useLayoutEffect=function(O,ie){return ee.current.useLayoutEffect(O,ie)},Lt.useMemo=function(O,ie){return ee.current.useMemo(O,ie)},Lt.useReducer=function(O,ie,Ie){return ee.current.useReducer(O,ie,Ie)},Lt.useRef=function(O){return ee.current.useRef(O)},Lt.useState=function(O){return ee.current.useState(O)},Lt.useSyncExternalStore=function(O,ie,Ie){return ee.current.useSyncExternalStore(O,ie,Ie)},Lt.useTransition=function(){return ee.current.useTransition()},Lt.version="18.3.1",Lt}var Rm;function Vd(){return Rm||(Rm=1,ch.exports=D_()),ch.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pm;function L_(){if(Pm)return io;Pm=1;var s=Vd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,p,m){var x,M={},_=null,S=null;m!==void 0&&(_=""+m),p.key!==void 0&&(_=""+p.key),p.ref!==void 0&&(S=p.ref);for(x in p)r.call(p,x)&&!l.hasOwnProperty(x)&&(M[x]=p[x]);if(d&&d.defaultProps)for(x in p=d.defaultProps,p)M[x]===void 0&&(M[x]=p[x]);return{$$typeof:e,type:d,key:_,ref:S,props:M,_owner:o.current}}return io.Fragment=t,io.jsx=u,io.jsxs=u,io}var Dm;function I_(){return Dm||(Dm=1,lh.exports=L_()),lh.exports}var f=I_(),It=Vd();const U_=J0(It);var Al={},uh={exports:{}},fi={},hh={exports:{}},dh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm;function O_(){return Lm||(Lm=1,(function(s){function e(Z,q){var $=Z.length;Z.push(q);e:for(;0<$;){var O=$-1>>>1,ie=Z[O];if(0<o(ie,q))Z[O]=q,Z[$]=ie,$=O;else break e}}function t(Z){return Z.length===0?null:Z[0]}function r(Z){if(Z.length===0)return null;var q=Z[0],$=Z.pop();if($!==q){Z[0]=$;e:for(var O=0,ie=Z.length,Ie=ie>>>1;O<Ie;){var ae=2*(O+1)-1,Ce=Z[ae],be=ae+1,Ge=Z[be];if(0>o(Ce,$))be<ie&&0>o(Ge,Ce)?(Z[O]=Ge,Z[be]=$,O=be):(Z[O]=Ce,Z[ae]=$,O=ae);else if(be<ie&&0>o(Ge,$))Z[O]=Ge,Z[be]=$,O=be;else break e}}return q}function o(Z,q){var $=Z.sortIndex-q.sortIndex;return $!==0?$:Z.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var p=[],m=[],x=1,M=null,_=3,S=!1,E=!1,R=!1,v=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(Z){for(var q=t(m);q!==null;){if(q.callback===null)r(m);else if(q.startTime<=Z)r(m),q.sortIndex=q.expirationTime,e(p,q);else break;q=t(m)}}function P(Z){if(R=!1,k(Z),!E)if(t(p)!==null)E=!0,ue(B);else{var q=t(m);q!==null&&ee(P,q.startTime-Z)}}function B(Z,q){E=!1,R&&(R=!1,y(A),A=-1),S=!0;var $=_;try{for(k(q),M=t(p);M!==null&&(!(M.expirationTime>q)||Z&&!K());){var O=M.callback;if(typeof O=="function"){M.callback=null,_=M.priorityLevel;var ie=O(M.expirationTime<=q);q=s.unstable_now(),typeof ie=="function"?M.callback=ie:M===t(p)&&r(p),k(q)}else r(p);M=t(p)}if(M!==null)var Ie=!0;else{var ae=t(m);ae!==null&&ee(P,ae.startTime-q),Ie=!1}return Ie}finally{M=null,_=$,S=!1}}var I=!1,T=null,A=-1,U=5,H=-1;function K(){return!(s.unstable_now()-H<U)}function Q(){if(T!==null){var Z=s.unstable_now();H=Z;var q=!0;try{q=T(!0,Z)}finally{q?he():(I=!1,T=null)}}else I=!1}var he;if(typeof D=="function")he=function(){D(Q)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,J=F.port2;F.port1.onmessage=Q,he=function(){J.postMessage(null)}}else he=function(){v(Q,0)};function ue(Z){T=Z,I||(I=!0,he())}function ee(Z,q){A=v(function(){Z(s.unstable_now())},q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Z){Z.callback=null},s.unstable_continueExecution=function(){E||S||(E=!0,ue(B))},s.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<Z?Math.floor(1e3/Z):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return t(p)},s.unstable_next=function(Z){switch(_){case 1:case 2:case 3:var q=3;break;default:q=_}var $=_;_=q;try{return Z()}finally{_=$}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Z,q){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var $=_;_=Z;try{return q()}finally{_=$}},s.unstable_scheduleCallback=function(Z,q,$){var O=s.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?O+$:O):$=O,Z){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=$+ie,Z={id:x++,callback:q,priorityLevel:Z,startTime:$,expirationTime:ie,sortIndex:-1},$>O?(Z.sortIndex=$,e(m,Z),t(p)===null&&Z===t(m)&&(R?(y(A),A=-1):R=!0,ee(P,$-O))):(Z.sortIndex=ie,e(p,Z),E||S||(E=!0,ue(B))),Z},s.unstable_shouldYield=K,s.unstable_wrapCallback=function(Z){var q=_;return function(){var $=_;_=q;try{return Z.apply(this,arguments)}finally{_=$}}}})(dh)),dh}var Im;function F_(){return Im||(Im=1,hh.exports=O_()),hh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Um;function k_(){if(Um)return fi;Um=1;var s=Vd(),e=F_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},M={};function _(n){return p.call(M,n)?!0:p.call(x,n)?!1:m.test(n)?M[n]=!0:(x[n]=!0,!1)}function S(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,c){if(i===null||typeof i>"u"||S(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(n,i,a,c,h,g,C){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=C}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){v[n]=new R(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];v[i]=new R(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){v[n]=new R(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){v[n]=new R(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){v[n]=new R(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){v[n]=new R(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){v[n]=new R(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){v[n]=new R(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){v[n]=new R(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(y,D);v[i]=new R(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(y,D);v[i]=new R(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(y,D);v[i]=new R(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){v[n]=new R(n,1,!1,n.toLowerCase(),null,!1,!1)}),v.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){v[n]=new R(n,1,!1,n.toLowerCase(),null,!0,!0)});function k(n,i,a,c){var h=v.hasOwnProperty(i)?v[i]:null;(h!==null?h.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,h,c)&&(a=null),c||h===null?_(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,c=h.attributeNamespace,a===null?n.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,B=Symbol.for("react.element"),I=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),H=Symbol.for("react.provider"),K=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),he=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),ee=Symbol.for("react.offscreen"),Z=Symbol.iterator;function q(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var $=Object.assign,O;function ie(n){if(O===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+n}var Ie=!1;function ae(n,i){if(!n||Ie)return"";Ie=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(me){var c=me}Reflect.construct(n,[],i)}else{try{i.call()}catch(me){c=me}n.call(i.prototype)}else{try{throw Error()}catch(me){c=me}n()}}catch(me){if(me&&c&&typeof me.stack=="string"){for(var h=me.stack.split(`
`),g=c.stack.split(`
`),C=h.length-1,z=g.length-1;1<=C&&0<=z&&h[C]!==g[z];)z--;for(;1<=C&&0<=z;C--,z--)if(h[C]!==g[z]){if(C!==1||z!==1)do if(C--,z--,0>z||h[C]!==g[z]){var W=`
`+h[C].replace(" at new "," at ");return n.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",n.displayName)),W}while(1<=C&&0<=z);break}}}finally{Ie=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ie(n):""}function Ce(n){switch(n.tag){case 5:return ie(n.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return n=ae(n.type,!1),n;case 11:return n=ae(n.type.render,!1),n;case 1:return n=ae(n.type,!0),n;default:return""}}function be(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case T:return"Fragment";case I:return"Portal";case U:return"Profiler";case A:return"StrictMode";case he:return"Suspense";case F:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case K:return(n.displayName||"Context")+".Consumer";case H:return(n._context.displayName||"Context")+".Provider";case Q:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case J:return i=n.displayName||null,i!==null?i:be(n.type)||"Memo";case ue:i=n._payload,n=n._init;try{return be(n(i))}catch{}}return null}function Ge(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return be(i);case 8:return i===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function we(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ve(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Dt(n){var i=Ve(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(C){c=""+C,g.call(this,C)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(C){c=""+C},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function it(n){n._valueTracker||(n._valueTracker=Dt(n))}function Mt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ve(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Rt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function xt(n,i){var a=i.checked;return $({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function $t(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=we(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ln(n,i){i=i.checked,i!=null&&k(n,"checked",i,!1)}function yt(n,i){ln(n,i);var a=we(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Ot(n,i.type,a):i.hasOwnProperty("defaultValue")&&Ot(n,i.type,we(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function jt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Ot(n,i,a){(i!=="number"||Rt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var de=Array.isArray;function St(n,i,a,c){if(n=n.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=i.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&c&&(n[a].defaultSelected=!0)}else{for(a=""+we(a),i=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function wt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return $({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Ht(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(de(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:we(a)}}function j(n,i){var a=we(i.value),c=we(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function gn(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function mt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ct(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?mt(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Pe,vt=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,h){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Pe=Pe||document.createElement("div"),Pe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Pe.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function je(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var $e={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},L=["Webkit","ms","Moz","O"];Object.keys($e).forEach(function(n){L.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),$e[i]=$e[n]})});function w(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||$e.hasOwnProperty(n)&&$e[n]?(""+i).trim():i+"px"}function X(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,h=w(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,h):n[a]=h}}var Ee=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Se(n,i){if(i){if(Ee[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Oe(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ae=null;function re(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var xe=null,De=null,V=null;function _e(n){if(n=Va(n)){if(typeof xe!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Vo(i),xe(n.stateNode,n.type,i))}}function ve(n){De?V?V.push(n):V=[n]:De=n}function Be(){if(De){var n=De,i=V;if(V=De=null,_e(n),i)for(n=0;n<i.length;n++)_e(i[n])}}function Ue(n,i){return n(i)}function ke(){}var le=!1;function pe(n,i,a){if(le)return n(i,a);le=!0;try{return Ue(n,i,a)}finally{le=!1,(De!==null||V!==null)&&(ke(),Be())}}function fe(n,i){var a=n.stateNode;if(a===null)return null;var c=Vo(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var ge=!1;if(d)try{var Te={};Object.defineProperty(Te,"passive",{get:function(){ge=!0}}),window.addEventListener("test",Te,Te),window.removeEventListener("test",Te,Te)}catch{ge=!1}function ye(n,i,a,c,h,g,C,z,W){var me=Array.prototype.slice.call(arguments,3);try{i.apply(a,me)}catch(Re){this.onError(Re)}}var Me=!1,Xe=null,qe=!1,dt=null,Ft={onError:function(n){Me=!0,Xe=n}};function At(n,i,a,c,h,g,C,z,W){Me=!1,Xe=null,ye.apply(Ft,arguments)}function Qt(n,i,a,c,h,g,C,z,W){if(At.apply(this,arguments),Me){if(Me){var me=Xe;Me=!1,Xe=null}else throw Error(t(198));qe||(qe=!0,dt=me)}}function Vt(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function ct(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function cn(n){if(Vt(n)!==n)throw Error(t(188))}function Tt(n){var i=n.alternate;if(!i){if(i=Vt(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var h=a.return;if(h===null)break;var g=h.alternate;if(g===null){if(c=h.return,c!==null){a=c;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===a)return cn(h),n;if(g===c)return cn(h),i;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=h,c=g;else{for(var C=!1,z=h.child;z;){if(z===a){C=!0,a=h,c=g;break}if(z===c){C=!0,c=h,a=g;break}z=z.sibling}if(!C){for(z=g.child;z;){if(z===a){C=!0,a=g,c=h;break}if(z===c){C=!0,c=g,a=h;break}z=z.sibling}if(!C)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Jt(n){return n=Tt(n),n!==null?Zt(n):null}function Zt(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Zt(n);if(i!==null)return i;n=n.sibling}return null}var On=e.unstable_scheduleCallback,En=e.unstable_cancelCallback,Gn=e.unstable_shouldYield,gi=e.unstable_requestPaint,kt=e.unstable_now,en=e.unstable_getCurrentPriorityLevel,ti=e.unstable_ImmediatePriority,wi=e.unstable_UserBlockingPriority,wn=e.unstable_NormalPriority,Oi=e.unstable_LowPriority,b=e.unstable_IdlePriority,G=null,se=null;function ne(n){if(se&&typeof se.onCommitFiberRoot=="function")try{se.onCommitFiberRoot(G,n,void 0,(n.current.flags&128)===128)}catch{}}var te=Math.clz32?Math.clz32:Fe,He=Math.log,Ze=Math.LN2;function Fe(n){return n>>>=0,n===0?32:31-(He(n)/Ze|0)|0}var We=64,Je=4194304;function lt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function pt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,h=n.suspendedLanes,g=n.pingedLanes,C=a&268435455;if(C!==0){var z=C&~h;z!==0?c=lt(z):(g&=C,g!==0&&(c=lt(g)))}else C=a&~h,C!==0?c=lt(C):g!==0&&(c=lt(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&h)===0&&(h=c&-c,g=i&-i,h>=g||h===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-te(i),h=1<<a,c|=n[a],i&=~h;return c}function et(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bt(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,g=n.pendingLanes;0<g;){var C=31-te(g),z=1<<C,W=h[C];W===-1?((z&a)===0||(z&c)!==0)&&(h[C]=et(z,i)):W<=i&&(n.expiredLanes|=z),g&=~z}}function pn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function tn(){var n=We;return We<<=1,(We&4194240)===0&&(We=64),n}function Yt(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function yn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-te(i),n[i]=a}function nt(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-te(a),g=1<<h;i[h]=0,c[h]=-1,n[h]=-1,a&=~g}}function bn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-te(a),h=1<<c;h&i|n[c]&i&&(n[c]|=i),a&=~h}}var at=0;function $i(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Nn,Nr,Fi,Zi,Bt,Mn=!1,Kn=[],Xt=null,rn=null,Fn=null,Rr=new Map,Aa=new Map,Pr=[],ev="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function df(n,i){switch(n){case"focusin":case"focusout":Xt=null;break;case"dragenter":case"dragleave":rn=null;break;case"mouseover":case"mouseout":Fn=null;break;case"pointerover":case"pointerout":Rr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Aa.delete(i.pointerId)}}function ba(n,i,a,c,h,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[h]},i!==null&&(i=Va(i),i!==null&&Nr(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function tv(n,i,a,c,h){switch(i){case"focusin":return Xt=ba(Xt,n,i,a,c,h),!0;case"dragenter":return rn=ba(rn,n,i,a,c,h),!0;case"mouseover":return Fn=ba(Fn,n,i,a,c,h),!0;case"pointerover":var g=h.pointerId;return Rr.set(g,ba(Rr.get(g)||null,n,i,a,c,h)),!0;case"gotpointercapture":return g=h.pointerId,Aa.set(g,ba(Aa.get(g)||null,n,i,a,c,h)),!0}return!1}function ff(n){var i=as(n.target);if(i!==null){var a=Vt(i);if(a!==null){if(i=a.tag,i===13){if(i=ct(a),i!==null){n.blockedOn=i,Bt(n.priority,function(){Fi(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function bo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Uc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ae=c,a.target.dispatchEvent(c),Ae=null}else return i=Va(a),i!==null&&Nr(i),n.blockedOn=a,!1;i.shift()}return!0}function pf(n,i,a){bo(n)&&a.delete(i)}function nv(){Mn=!1,Xt!==null&&bo(Xt)&&(Xt=null),rn!==null&&bo(rn)&&(rn=null),Fn!==null&&bo(Fn)&&(Fn=null),Rr.forEach(pf),Aa.forEach(pf)}function Na(n,i){n.blockedOn===i&&(n.blockedOn=null,Mn||(Mn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,nv)))}function Ra(n){function i(h){return Na(h,n)}if(0<Kn.length){Na(Kn[0],n);for(var a=1;a<Kn.length;a++){var c=Kn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Xt!==null&&Na(Xt,n),rn!==null&&Na(rn,n),Fn!==null&&Na(Fn,n),Rr.forEach(i),Aa.forEach(i),a=0;a<Pr.length;a++)c=Pr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Pr.length&&(a=Pr[0],a.blockedOn===null);)ff(a),a.blockedOn===null&&Pr.shift()}var Rs=P.ReactCurrentBatchConfig,No=!0;function iv(n,i,a,c){var h=at,g=Rs.transition;Rs.transition=null;try{at=1,Ic(n,i,a,c)}finally{at=h,Rs.transition=g}}function rv(n,i,a,c){var h=at,g=Rs.transition;Rs.transition=null;try{at=4,Ic(n,i,a,c)}finally{at=h,Rs.transition=g}}function Ic(n,i,a,c){if(No){var h=Uc(n,i,a,c);if(h===null)Qc(n,i,c,Ro,a),df(n,c);else if(tv(h,n,i,a,c))c.stopPropagation();else if(df(n,c),i&4&&-1<ev.indexOf(n)){for(;h!==null;){var g=Va(h);if(g!==null&&Nn(g),g=Uc(n,i,a,c),g===null&&Qc(n,i,c,Ro,a),g===h)break;h=g}h!==null&&c.stopPropagation()}else Qc(n,i,c,null,a)}}var Ro=null;function Uc(n,i,a,c){if(Ro=null,n=re(c),n=as(n),n!==null)if(i=Vt(n),i===null)n=null;else if(a=i.tag,a===13){if(n=ct(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Ro=n,null}function mf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(en()){case ti:return 1;case wi:return 4;case wn:case Oi:return 16;case b:return 536870912;default:return 16}default:return 16}}var Dr=null,Oc=null,Po=null;function gf(){if(Po)return Po;var n,i=Oc,a=i.length,c,h="value"in Dr?Dr.value:Dr.textContent,g=h.length;for(n=0;n<a&&i[n]===h[n];n++);var C=a-n;for(c=1;c<=C&&i[a-c]===h[g-c];c++);return Po=h.slice(n,1<c?1-c:void 0)}function Do(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Lo(){return!0}function vf(){return!1}function vi(n){function i(a,c,h,g,C){this._reactName=a,this._targetInst=h,this.type=c,this.nativeEvent=g,this.target=C,this.currentTarget=null;for(var z in n)n.hasOwnProperty(z)&&(a=n[z],this[z]=a?a(g):g[z]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Lo:vf,this.isPropagationStopped=vf,this}return $(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Lo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Lo)},persist:function(){},isPersistent:Lo}),i}var Ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fc=vi(Ps),Pa=$({},Ps,{view:0,detail:0}),sv=vi(Pa),kc,Bc,Da,Io=$({},Pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Da&&(Da&&n.type==="mousemove"?(kc=n.screenX-Da.screenX,Bc=n.screenY-Da.screenY):Bc=kc=0,Da=n),kc)},movementY:function(n){return"movementY"in n?n.movementY:Bc}}),_f=vi(Io),av=$({},Io,{dataTransfer:0}),ov=vi(av),lv=$({},Pa,{relatedTarget:0}),zc=vi(lv),cv=$({},Ps,{animationName:0,elapsedTime:0,pseudoElement:0}),uv=vi(cv),hv=$({},Ps,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),dv=vi(hv),fv=$({},Ps,{data:0}),xf=vi(fv),pv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=gv[n])?!!i[n]:!1}function Hc(){return vv}var _v=$({},Pa,{key:function(n){if(n.key){var i=pv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Do(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?mv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hc,charCode:function(n){return n.type==="keypress"?Do(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Do(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),xv=vi(_v),yv=$({},Io,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yf=vi(yv),Sv=$({},Pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hc}),Mv=vi(Sv),Tv=$({},Ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ev=vi(Tv),wv=$({},Io,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Cv=vi(wv),Av=[9,13,27,32],Vc=d&&"CompositionEvent"in window,La=null;d&&"documentMode"in document&&(La=document.documentMode);var bv=d&&"TextEvent"in window&&!La,Sf=d&&(!Vc||La&&8<La&&11>=La),Mf=" ",Tf=!1;function Ef(n,i){switch(n){case"keyup":return Av.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ds=!1;function Nv(n,i){switch(n){case"compositionend":return wf(i);case"keypress":return i.which!==32?null:(Tf=!0,Mf);case"textInput":return n=i.data,n===Mf&&Tf?null:n;default:return null}}function Rv(n,i){if(Ds)return n==="compositionend"||!Vc&&Ef(n,i)?(n=gf(),Po=Oc=Dr=null,Ds=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Sf&&i.locale!=="ko"?null:i.data;default:return null}}var Pv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Pv[n.type]:i==="textarea"}function Af(n,i,a,c){ve(c),i=Bo(i,"onChange"),0<i.length&&(a=new Fc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Ia=null,Ua=null;function Dv(n){jf(n,0)}function Uo(n){var i=Fs(n);if(Mt(i))return n}function Lv(n,i){if(n==="change")return i}var bf=!1;if(d){var Gc;if(d){var Wc="oninput"in document;if(!Wc){var Nf=document.createElement("div");Nf.setAttribute("oninput","return;"),Wc=typeof Nf.oninput=="function"}Gc=Wc}else Gc=!1;bf=Gc&&(!document.documentMode||9<document.documentMode)}function Rf(){Ia&&(Ia.detachEvent("onpropertychange",Pf),Ua=Ia=null)}function Pf(n){if(n.propertyName==="value"&&Uo(Ua)){var i=[];Af(i,Ua,n,re(n)),pe(Dv,i)}}function Iv(n,i,a){n==="focusin"?(Rf(),Ia=i,Ua=a,Ia.attachEvent("onpropertychange",Pf)):n==="focusout"&&Rf()}function Uv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Uo(Ua)}function Ov(n,i){if(n==="click")return Uo(i)}function Fv(n,i){if(n==="input"||n==="change")return Uo(i)}function kv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ki=typeof Object.is=="function"?Object.is:kv;function Oa(n,i){if(ki(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var h=a[c];if(!p.call(i,h)||!ki(n[h],i[h]))return!1}return!0}function Df(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Lf(n,i){var a=Df(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Df(a)}}function If(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?If(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Uf(){for(var n=window,i=Rt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Rt(n.document)}return i}function jc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Bv(n){var i=Uf(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&If(a.ownerDocument.documentElement,a)){if(c!==null&&jc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,g=Math.min(c.start,h);c=c.end===void 0?g:Math.min(c.end,h),!n.extend&&g>c&&(h=c,c=g,g=h),h=Lf(a,g);var C=Lf(a,c);h&&C&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==C.node||n.focusOffset!==C.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(C.node,C.offset)):(i.setEnd(C.node,C.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var zv=d&&"documentMode"in document&&11>=document.documentMode,Ls=null,Xc=null,Fa=null,Kc=!1;function Of(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Kc||Ls==null||Ls!==Rt(c)||(c=Ls,"selectionStart"in c&&jc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Fa&&Oa(Fa,c)||(Fa=c,c=Bo(Xc,"onSelect"),0<c.length&&(i=new Fc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Ls)))}function Oo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Is={animationend:Oo("Animation","AnimationEnd"),animationiteration:Oo("Animation","AnimationIteration"),animationstart:Oo("Animation","AnimationStart"),transitionend:Oo("Transition","TransitionEnd")},Yc={},Ff={};d&&(Ff=document.createElement("div").style,"AnimationEvent"in window||(delete Is.animationend.animation,delete Is.animationiteration.animation,delete Is.animationstart.animation),"TransitionEvent"in window||delete Is.transitionend.transition);function Fo(n){if(Yc[n])return Yc[n];if(!Is[n])return n;var i=Is[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Ff)return Yc[n]=i[a];return n}var kf=Fo("animationend"),Bf=Fo("animationiteration"),zf=Fo("animationstart"),Hf=Fo("transitionend"),Vf=new Map,Gf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(n,i){Vf.set(n,i),l(i,[n])}for(var qc=0;qc<Gf.length;qc++){var $c=Gf[qc],Hv=$c.toLowerCase(),Vv=$c[0].toUpperCase()+$c.slice(1);Lr(Hv,"on"+Vv)}Lr(kf,"onAnimationEnd"),Lr(Bf,"onAnimationIteration"),Lr(zf,"onAnimationStart"),Lr("dblclick","onDoubleClick"),Lr("focusin","onFocus"),Lr("focusout","onBlur"),Lr(Hf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ka="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ka));function Wf(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Qt(c,i,void 0,n),n.currentTarget=null}function jf(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],h=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var C=c.length-1;0<=C;C--){var z=c[C],W=z.instance,me=z.currentTarget;if(z=z.listener,W!==g&&h.isPropagationStopped())break e;Wf(h,z,me),g=W}else for(C=0;C<c.length;C++){if(z=c[C],W=z.instance,me=z.currentTarget,z=z.listener,W!==g&&h.isPropagationStopped())break e;Wf(h,z,me),g=W}}}if(qe)throw n=dt,qe=!1,dt=null,n}function hn(n,i){var a=i[ru];a===void 0&&(a=i[ru]=new Set);var c=n+"__bubble";a.has(c)||(Xf(i,n,2,!1),a.add(c))}function Zc(n,i,a){var c=0;i&&(c|=4),Xf(a,n,c,i)}var ko="_reactListening"+Math.random().toString(36).slice(2);function Ba(n){if(!n[ko]){n[ko]=!0,r.forEach(function(a){a!=="selectionchange"&&(Gv.has(a)||Zc(a,!1,n),Zc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[ko]||(i[ko]=!0,Zc("selectionchange",!1,i))}}function Xf(n,i,a,c){switch(mf(i)){case 1:var h=iv;break;case 4:h=rv;break;default:h=Ic}a=h.bind(null,i,a,n),h=void 0,!ge||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(i,a,{capture:!0,passive:h}):n.addEventListener(i,a,!0):h!==void 0?n.addEventListener(i,a,{passive:h}):n.addEventListener(i,a,!1)}function Qc(n,i,a,c,h){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var C=c.tag;if(C===3||C===4){var z=c.stateNode.containerInfo;if(z===h||z.nodeType===8&&z.parentNode===h)break;if(C===4)for(C=c.return;C!==null;){var W=C.tag;if((W===3||W===4)&&(W=C.stateNode.containerInfo,W===h||W.nodeType===8&&W.parentNode===h))return;C=C.return}for(;z!==null;){if(C=as(z),C===null)return;if(W=C.tag,W===5||W===6){c=g=C;continue e}z=z.parentNode}}c=c.return}pe(function(){var me=g,Re=re(a),Le=[];e:{var Ne=Vf.get(n);if(Ne!==void 0){var Qe=Fc,rt=n;switch(n){case"keypress":if(Do(a)===0)break e;case"keydown":case"keyup":Qe=xv;break;case"focusin":rt="focus",Qe=zc;break;case"focusout":rt="blur",Qe=zc;break;case"beforeblur":case"afterblur":Qe=zc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Qe=_f;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Qe=ov;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Qe=Mv;break;case kf:case Bf:case zf:Qe=uv;break;case Hf:Qe=Ev;break;case"scroll":Qe=sv;break;case"wheel":Qe=Cv;break;case"copy":case"cut":case"paste":Qe=dv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Qe=yf}var st=(i&4)!==0,Tn=!st&&n==="scroll",oe=st?Ne!==null?Ne+"Capture":null:Ne;st=[];for(var Y=me,ce;Y!==null;){ce=Y;var ze=ce.stateNode;if(ce.tag===5&&ze!==null&&(ce=ze,oe!==null&&(ze=fe(Y,oe),ze!=null&&st.push(za(Y,ze,ce)))),Tn)break;Y=Y.return}0<st.length&&(Ne=new Qe(Ne,rt,null,a,Re),Le.push({event:Ne,listeners:st}))}}if((i&7)===0){e:{if(Ne=n==="mouseover"||n==="pointerover",Qe=n==="mouseout"||n==="pointerout",Ne&&a!==Ae&&(rt=a.relatedTarget||a.fromElement)&&(as(rt)||rt[hr]))break e;if((Qe||Ne)&&(Ne=Re.window===Re?Re:(Ne=Re.ownerDocument)?Ne.defaultView||Ne.parentWindow:window,Qe?(rt=a.relatedTarget||a.toElement,Qe=me,rt=rt?as(rt):null,rt!==null&&(Tn=Vt(rt),rt!==Tn||rt.tag!==5&&rt.tag!==6)&&(rt=null)):(Qe=null,rt=me),Qe!==rt)){if(st=_f,ze="onMouseLeave",oe="onMouseEnter",Y="mouse",(n==="pointerout"||n==="pointerover")&&(st=yf,ze="onPointerLeave",oe="onPointerEnter",Y="pointer"),Tn=Qe==null?Ne:Fs(Qe),ce=rt==null?Ne:Fs(rt),Ne=new st(ze,Y+"leave",Qe,a,Re),Ne.target=Tn,Ne.relatedTarget=ce,ze=null,as(Re)===me&&(st=new st(oe,Y+"enter",rt,a,Re),st.target=ce,st.relatedTarget=Tn,ze=st),Tn=ze,Qe&&rt)t:{for(st=Qe,oe=rt,Y=0,ce=st;ce;ce=Us(ce))Y++;for(ce=0,ze=oe;ze;ze=Us(ze))ce++;for(;0<Y-ce;)st=Us(st),Y--;for(;0<ce-Y;)oe=Us(oe),ce--;for(;Y--;){if(st===oe||oe!==null&&st===oe.alternate)break t;st=Us(st),oe=Us(oe)}st=null}else st=null;Qe!==null&&Kf(Le,Ne,Qe,st,!1),rt!==null&&Tn!==null&&Kf(Le,Tn,rt,st,!0)}}e:{if(Ne=me?Fs(me):window,Qe=Ne.nodeName&&Ne.nodeName.toLowerCase(),Qe==="select"||Qe==="input"&&Ne.type==="file")var ot=Lv;else if(Cf(Ne))if(bf)ot=Fv;else{ot=Uv;var ut=Iv}else(Qe=Ne.nodeName)&&Qe.toLowerCase()==="input"&&(Ne.type==="checkbox"||Ne.type==="radio")&&(ot=Ov);if(ot&&(ot=ot(n,me))){Af(Le,ot,a,Re);break e}ut&&ut(n,Ne,me),n==="focusout"&&(ut=Ne._wrapperState)&&ut.controlled&&Ne.type==="number"&&Ot(Ne,"number",Ne.value)}switch(ut=me?Fs(me):window,n){case"focusin":(Cf(ut)||ut.contentEditable==="true")&&(Ls=ut,Xc=me,Fa=null);break;case"focusout":Fa=Xc=Ls=null;break;case"mousedown":Kc=!0;break;case"contextmenu":case"mouseup":case"dragend":Kc=!1,Of(Le,a,Re);break;case"selectionchange":if(zv)break;case"keydown":case"keyup":Of(Le,a,Re)}var ht;if(Vc)e:{switch(n){case"compositionstart":var gt="onCompositionStart";break e;case"compositionend":gt="onCompositionEnd";break e;case"compositionupdate":gt="onCompositionUpdate";break e}gt=void 0}else Ds?Ef(n,a)&&(gt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(gt="onCompositionStart");gt&&(Sf&&a.locale!=="ko"&&(Ds||gt!=="onCompositionStart"?gt==="onCompositionEnd"&&Ds&&(ht=gf()):(Dr=Re,Oc="value"in Dr?Dr.value:Dr.textContent,Ds=!0)),ut=Bo(me,gt),0<ut.length&&(gt=new xf(gt,n,null,a,Re),Le.push({event:gt,listeners:ut}),ht?gt.data=ht:(ht=wf(a),ht!==null&&(gt.data=ht)))),(ht=bv?Nv(n,a):Rv(n,a))&&(me=Bo(me,"onBeforeInput"),0<me.length&&(Re=new xf("onBeforeInput","beforeinput",null,a,Re),Le.push({event:Re,listeners:me}),Re.data=ht))}jf(Le,i)})}function za(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Bo(n,i){for(var a=i+"Capture",c=[];n!==null;){var h=n,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=fe(n,a),g!=null&&c.unshift(za(n,g,h)),g=fe(n,i),g!=null&&c.push(za(n,g,h))),n=n.return}return c}function Us(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Kf(n,i,a,c,h){for(var g=i._reactName,C=[];a!==null&&a!==c;){var z=a,W=z.alternate,me=z.stateNode;if(W!==null&&W===c)break;z.tag===5&&me!==null&&(z=me,h?(W=fe(a,g),W!=null&&C.unshift(za(a,W,z))):h||(W=fe(a,g),W!=null&&C.push(za(a,W,z)))),a=a.return}C.length!==0&&n.push({event:i,listeners:C})}var Wv=/\r\n?/g,jv=/\u0000|\uFFFD/g;function Yf(n){return(typeof n=="string"?n:""+n).replace(Wv,`
`).replace(jv,"")}function zo(n,i,a){if(i=Yf(i),Yf(n)!==i&&a)throw Error(t(425))}function Ho(){}var Jc=null,eu=null;function tu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var nu=typeof setTimeout=="function"?setTimeout:void 0,Xv=typeof clearTimeout=="function"?clearTimeout:void 0,qf=typeof Promise=="function"?Promise:void 0,Kv=typeof queueMicrotask=="function"?queueMicrotask:typeof qf<"u"?function(n){return qf.resolve(null).then(n).catch(Yv)}:nu;function Yv(n){setTimeout(function(){throw n})}function iu(n,i){var a=i,c=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(c===0){n.removeChild(h),Ra(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=h}while(a);Ra(i)}function Ir(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function $f(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Os=Math.random().toString(36).slice(2),Qi="__reactFiber$"+Os,Ha="__reactProps$"+Os,hr="__reactContainer$"+Os,ru="__reactEvents$"+Os,qv="__reactListeners$"+Os,$v="__reactHandles$"+Os;function as(n){var i=n[Qi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[hr]||a[Qi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=$f(n);n!==null;){if(a=n[Qi])return a;n=$f(n)}return i}n=a,a=n.parentNode}return null}function Va(n){return n=n[Qi]||n[hr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Fs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Vo(n){return n[Ha]||null}var su=[],ks=-1;function Ur(n){return{current:n}}function dn(n){0>ks||(n.current=su[ks],su[ks]=null,ks--)}function un(n,i){ks++,su[ks]=n.current,n.current=i}var Or={},Yn=Ur(Or),li=Ur(!1),os=Or;function Bs(n,i){var a=n.type.contextTypes;if(!a)return Or;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in a)h[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function ci(n){return n=n.childContextTypes,n!=null}function Go(){dn(li),dn(Yn)}function Zf(n,i,a){if(Yn.current!==Or)throw Error(t(168));un(Yn,i),un(li,a)}function Qf(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var h in c)if(!(h in i))throw Error(t(108,Ge(n)||"Unknown",h));return $({},a,c)}function Wo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Or,os=Yn.current,un(Yn,n),un(li,li.current),!0}function Jf(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Qf(n,i,os),c.__reactInternalMemoizedMergedChildContext=n,dn(li),dn(Yn),un(Yn,n)):dn(li),un(li,a)}var dr=null,jo=!1,au=!1;function ep(n){dr===null?dr=[n]:dr.push(n)}function Zv(n){jo=!0,ep(n)}function Fr(){if(!au&&dr!==null){au=!0;var n=0,i=at;try{var a=dr;for(at=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}dr=null,jo=!1}catch(h){throw dr!==null&&(dr=dr.slice(n+1)),On(ti,Fr),h}finally{at=i,au=!1}}return null}var zs=[],Hs=0,Xo=null,Ko=0,Ci=[],Ai=0,ls=null,fr=1,pr="";function cs(n,i){zs[Hs++]=Ko,zs[Hs++]=Xo,Xo=n,Ko=i}function tp(n,i,a){Ci[Ai++]=fr,Ci[Ai++]=pr,Ci[Ai++]=ls,ls=n;var c=fr;n=pr;var h=32-te(c)-1;c&=~(1<<h),a+=1;var g=32-te(i)+h;if(30<g){var C=h-h%5;g=(c&(1<<C)-1).toString(32),c>>=C,h-=C,fr=1<<32-te(i)+h|a<<h|c,pr=g+n}else fr=1<<g|a<<h|c,pr=n}function ou(n){n.return!==null&&(cs(n,1),tp(n,1,0))}function lu(n){for(;n===Xo;)Xo=zs[--Hs],zs[Hs]=null,Ko=zs[--Hs],zs[Hs]=null;for(;n===ls;)ls=Ci[--Ai],Ci[Ai]=null,pr=Ci[--Ai],Ci[Ai]=null,fr=Ci[--Ai],Ci[Ai]=null}var _i=null,xi=null,mn=!1,Bi=null;function np(n,i){var a=Pi(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function ip(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,_i=n,xi=Ir(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,_i=n,xi=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=ls!==null?{id:fr,overflow:pr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Pi(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,_i=n,xi=null,!0):!1;default:return!1}}function cu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function uu(n){if(mn){var i=xi;if(i){var a=i;if(!ip(n,i)){if(cu(n))throw Error(t(418));i=Ir(a.nextSibling);var c=_i;i&&ip(n,i)?np(c,a):(n.flags=n.flags&-4097|2,mn=!1,_i=n)}}else{if(cu(n))throw Error(t(418));n.flags=n.flags&-4097|2,mn=!1,_i=n}}}function rp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;_i=n}function Yo(n){if(n!==_i)return!1;if(!mn)return rp(n),mn=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!tu(n.type,n.memoizedProps)),i&&(i=xi)){if(cu(n))throw sp(),Error(t(418));for(;i;)np(n,i),i=Ir(i.nextSibling)}if(rp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){xi=Ir(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}xi=null}}else xi=_i?Ir(n.stateNode.nextSibling):null;return!0}function sp(){for(var n=xi;n;)n=Ir(n.nextSibling)}function Vs(){xi=_i=null,mn=!1}function hu(n){Bi===null?Bi=[n]:Bi.push(n)}var Qv=P.ReactCurrentBatchConfig;function Ga(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var h=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(C){var z=h.refs;C===null?delete z[g]:z[g]=C},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function qo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function ap(n){var i=n._init;return i(n._payload)}function op(n){function i(oe,Y){if(n){var ce=oe.deletions;ce===null?(oe.deletions=[Y],oe.flags|=16):ce.push(Y)}}function a(oe,Y){if(!n)return null;for(;Y!==null;)i(oe,Y),Y=Y.sibling;return null}function c(oe,Y){for(oe=new Map;Y!==null;)Y.key!==null?oe.set(Y.key,Y):oe.set(Y.index,Y),Y=Y.sibling;return oe}function h(oe,Y){return oe=jr(oe,Y),oe.index=0,oe.sibling=null,oe}function g(oe,Y,ce){return oe.index=ce,n?(ce=oe.alternate,ce!==null?(ce=ce.index,ce<Y?(oe.flags|=2,Y):ce):(oe.flags|=2,Y)):(oe.flags|=1048576,Y)}function C(oe){return n&&oe.alternate===null&&(oe.flags|=2),oe}function z(oe,Y,ce,ze){return Y===null||Y.tag!==6?(Y=nh(ce,oe.mode,ze),Y.return=oe,Y):(Y=h(Y,ce),Y.return=oe,Y)}function W(oe,Y,ce,ze){var ot=ce.type;return ot===T?Re(oe,Y,ce.props.children,ze,ce.key):Y!==null&&(Y.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===ue&&ap(ot)===Y.type)?(ze=h(Y,ce.props),ze.ref=Ga(oe,Y,ce),ze.return=oe,ze):(ze=xl(ce.type,ce.key,ce.props,null,oe.mode,ze),ze.ref=Ga(oe,Y,ce),ze.return=oe,ze)}function me(oe,Y,ce,ze){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==ce.containerInfo||Y.stateNode.implementation!==ce.implementation?(Y=ih(ce,oe.mode,ze),Y.return=oe,Y):(Y=h(Y,ce.children||[]),Y.return=oe,Y)}function Re(oe,Y,ce,ze,ot){return Y===null||Y.tag!==7?(Y=vs(ce,oe.mode,ze,ot),Y.return=oe,Y):(Y=h(Y,ce),Y.return=oe,Y)}function Le(oe,Y,ce){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Y=nh(""+Y,oe.mode,ce),Y.return=oe,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case B:return ce=xl(Y.type,Y.key,Y.props,null,oe.mode,ce),ce.ref=Ga(oe,null,Y),ce.return=oe,ce;case I:return Y=ih(Y,oe.mode,ce),Y.return=oe,Y;case ue:var ze=Y._init;return Le(oe,ze(Y._payload),ce)}if(de(Y)||q(Y))return Y=vs(Y,oe.mode,ce,null),Y.return=oe,Y;qo(oe,Y)}return null}function Ne(oe,Y,ce,ze){var ot=Y!==null?Y.key:null;if(typeof ce=="string"&&ce!==""||typeof ce=="number")return ot!==null?null:z(oe,Y,""+ce,ze);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case B:return ce.key===ot?W(oe,Y,ce,ze):null;case I:return ce.key===ot?me(oe,Y,ce,ze):null;case ue:return ot=ce._init,Ne(oe,Y,ot(ce._payload),ze)}if(de(ce)||q(ce))return ot!==null?null:Re(oe,Y,ce,ze,null);qo(oe,ce)}return null}function Qe(oe,Y,ce,ze,ot){if(typeof ze=="string"&&ze!==""||typeof ze=="number")return oe=oe.get(ce)||null,z(Y,oe,""+ze,ot);if(typeof ze=="object"&&ze!==null){switch(ze.$$typeof){case B:return oe=oe.get(ze.key===null?ce:ze.key)||null,W(Y,oe,ze,ot);case I:return oe=oe.get(ze.key===null?ce:ze.key)||null,me(Y,oe,ze,ot);case ue:var ut=ze._init;return Qe(oe,Y,ce,ut(ze._payload),ot)}if(de(ze)||q(ze))return oe=oe.get(ce)||null,Re(Y,oe,ze,ot,null);qo(Y,ze)}return null}function rt(oe,Y,ce,ze){for(var ot=null,ut=null,ht=Y,gt=Y=0,zn=null;ht!==null&&gt<ce.length;gt++){ht.index>gt?(zn=ht,ht=null):zn=ht.sibling;var Kt=Ne(oe,ht,ce[gt],ze);if(Kt===null){ht===null&&(ht=zn);break}n&&ht&&Kt.alternate===null&&i(oe,ht),Y=g(Kt,Y,gt),ut===null?ot=Kt:ut.sibling=Kt,ut=Kt,ht=zn}if(gt===ce.length)return a(oe,ht),mn&&cs(oe,gt),ot;if(ht===null){for(;gt<ce.length;gt++)ht=Le(oe,ce[gt],ze),ht!==null&&(Y=g(ht,Y,gt),ut===null?ot=ht:ut.sibling=ht,ut=ht);return mn&&cs(oe,gt),ot}for(ht=c(oe,ht);gt<ce.length;gt++)zn=Qe(ht,oe,gt,ce[gt],ze),zn!==null&&(n&&zn.alternate!==null&&ht.delete(zn.key===null?gt:zn.key),Y=g(zn,Y,gt),ut===null?ot=zn:ut.sibling=zn,ut=zn);return n&&ht.forEach(function(Xr){return i(oe,Xr)}),mn&&cs(oe,gt),ot}function st(oe,Y,ce,ze){var ot=q(ce);if(typeof ot!="function")throw Error(t(150));if(ce=ot.call(ce),ce==null)throw Error(t(151));for(var ut=ot=null,ht=Y,gt=Y=0,zn=null,Kt=ce.next();ht!==null&&!Kt.done;gt++,Kt=ce.next()){ht.index>gt?(zn=ht,ht=null):zn=ht.sibling;var Xr=Ne(oe,ht,Kt.value,ze);if(Xr===null){ht===null&&(ht=zn);break}n&&ht&&Xr.alternate===null&&i(oe,ht),Y=g(Xr,Y,gt),ut===null?ot=Xr:ut.sibling=Xr,ut=Xr,ht=zn}if(Kt.done)return a(oe,ht),mn&&cs(oe,gt),ot;if(ht===null){for(;!Kt.done;gt++,Kt=ce.next())Kt=Le(oe,Kt.value,ze),Kt!==null&&(Y=g(Kt,Y,gt),ut===null?ot=Kt:ut.sibling=Kt,ut=Kt);return mn&&cs(oe,gt),ot}for(ht=c(oe,ht);!Kt.done;gt++,Kt=ce.next())Kt=Qe(ht,oe,gt,Kt.value,ze),Kt!==null&&(n&&Kt.alternate!==null&&ht.delete(Kt.key===null?gt:Kt.key),Y=g(Kt,Y,gt),ut===null?ot=Kt:ut.sibling=Kt,ut=Kt);return n&&ht.forEach(function(P_){return i(oe,P_)}),mn&&cs(oe,gt),ot}function Tn(oe,Y,ce,ze){if(typeof ce=="object"&&ce!==null&&ce.type===T&&ce.key===null&&(ce=ce.props.children),typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case B:e:{for(var ot=ce.key,ut=Y;ut!==null;){if(ut.key===ot){if(ot=ce.type,ot===T){if(ut.tag===7){a(oe,ut.sibling),Y=h(ut,ce.props.children),Y.return=oe,oe=Y;break e}}else if(ut.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===ue&&ap(ot)===ut.type){a(oe,ut.sibling),Y=h(ut,ce.props),Y.ref=Ga(oe,ut,ce),Y.return=oe,oe=Y;break e}a(oe,ut);break}else i(oe,ut);ut=ut.sibling}ce.type===T?(Y=vs(ce.props.children,oe.mode,ze,ce.key),Y.return=oe,oe=Y):(ze=xl(ce.type,ce.key,ce.props,null,oe.mode,ze),ze.ref=Ga(oe,Y,ce),ze.return=oe,oe=ze)}return C(oe);case I:e:{for(ut=ce.key;Y!==null;){if(Y.key===ut)if(Y.tag===4&&Y.stateNode.containerInfo===ce.containerInfo&&Y.stateNode.implementation===ce.implementation){a(oe,Y.sibling),Y=h(Y,ce.children||[]),Y.return=oe,oe=Y;break e}else{a(oe,Y);break}else i(oe,Y);Y=Y.sibling}Y=ih(ce,oe.mode,ze),Y.return=oe,oe=Y}return C(oe);case ue:return ut=ce._init,Tn(oe,Y,ut(ce._payload),ze)}if(de(ce))return rt(oe,Y,ce,ze);if(q(ce))return st(oe,Y,ce,ze);qo(oe,ce)}return typeof ce=="string"&&ce!==""||typeof ce=="number"?(ce=""+ce,Y!==null&&Y.tag===6?(a(oe,Y.sibling),Y=h(Y,ce),Y.return=oe,oe=Y):(a(oe,Y),Y=nh(ce,oe.mode,ze),Y.return=oe,oe=Y),C(oe)):a(oe,Y)}return Tn}var Gs=op(!0),lp=op(!1),$o=Ur(null),Zo=null,Ws=null,du=null;function fu(){du=Ws=Zo=null}function pu(n){var i=$o.current;dn($o),n._currentValue=i}function mu(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function js(n,i){Zo=n,du=Ws=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(ui=!0),n.firstContext=null)}function bi(n){var i=n._currentValue;if(du!==n)if(n={context:n,memoizedValue:i,next:null},Ws===null){if(Zo===null)throw Error(t(308));Ws=n,Zo.dependencies={lanes:0,firstContext:n}}else Ws=Ws.next=n;return i}var us=null;function gu(n){us===null?us=[n]:us.push(n)}function cp(n,i,a,c){var h=i.interleaved;return h===null?(a.next=a,gu(i)):(a.next=h.next,h.next=a),i.interleaved=a,mr(n,c)}function mr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var kr=!1;function vu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function up(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function gr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Br(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Gt&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,mr(n,a)}return h=c.interleaved,h===null?(i.next=i,gu(c)):(i.next=h.next,h.next=i),c.interleaved=i,mr(n,a)}function Qo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,bn(n,a)}}function hp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var h=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var C={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?h=g=C:g=g.next=C,a=a.next}while(a!==null);g===null?h=g=i:g=g.next=i}else h=g=i;a={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Jo(n,i,a,c){var h=n.updateQueue;kr=!1;var g=h.firstBaseUpdate,C=h.lastBaseUpdate,z=h.shared.pending;if(z!==null){h.shared.pending=null;var W=z,me=W.next;W.next=null,C===null?g=me:C.next=me,C=W;var Re=n.alternate;Re!==null&&(Re=Re.updateQueue,z=Re.lastBaseUpdate,z!==C&&(z===null?Re.firstBaseUpdate=me:z.next=me,Re.lastBaseUpdate=W))}if(g!==null){var Le=h.baseState;C=0,Re=me=W=null,z=g;do{var Ne=z.lane,Qe=z.eventTime;if((c&Ne)===Ne){Re!==null&&(Re=Re.next={eventTime:Qe,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var rt=n,st=z;switch(Ne=i,Qe=a,st.tag){case 1:if(rt=st.payload,typeof rt=="function"){Le=rt.call(Qe,Le,Ne);break e}Le=rt;break e;case 3:rt.flags=rt.flags&-65537|128;case 0:if(rt=st.payload,Ne=typeof rt=="function"?rt.call(Qe,Le,Ne):rt,Ne==null)break e;Le=$({},Le,Ne);break e;case 2:kr=!0}}z.callback!==null&&z.lane!==0&&(n.flags|=64,Ne=h.effects,Ne===null?h.effects=[z]:Ne.push(z))}else Qe={eventTime:Qe,lane:Ne,tag:z.tag,payload:z.payload,callback:z.callback,next:null},Re===null?(me=Re=Qe,W=Le):Re=Re.next=Qe,C|=Ne;if(z=z.next,z===null){if(z=h.shared.pending,z===null)break;Ne=z,z=Ne.next,Ne.next=null,h.lastBaseUpdate=Ne,h.shared.pending=null}}while(!0);if(Re===null&&(W=Le),h.baseState=W,h.firstBaseUpdate=me,h.lastBaseUpdate=Re,i=h.shared.interleaved,i!==null){h=i;do C|=h.lane,h=h.next;while(h!==i)}else g===null&&(h.shared.lanes=0);fs|=C,n.lanes=C,n.memoizedState=Le}}function dp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],h=c.callback;if(h!==null){if(c.callback=null,c=a,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var Wa={},Ji=Ur(Wa),ja=Ur(Wa),Xa=Ur(Wa);function hs(n){if(n===Wa)throw Error(t(174));return n}function _u(n,i){switch(un(Xa,i),un(ja,n),un(Ji,Wa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ct(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Ct(i,n)}dn(Ji),un(Ji,i)}function Xs(){dn(Ji),dn(ja),dn(Xa)}function fp(n){hs(Xa.current);var i=hs(Ji.current),a=Ct(i,n.type);i!==a&&(un(ja,n),un(Ji,a))}function xu(n){ja.current===n&&(dn(Ji),dn(ja))}var vn=Ur(0);function el(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var yu=[];function Su(){for(var n=0;n<yu.length;n++)yu[n]._workInProgressVersionPrimary=null;yu.length=0}var tl=P.ReactCurrentDispatcher,Mu=P.ReactCurrentBatchConfig,ds=0,_n=null,Rn=null,kn=null,nl=!1,Ka=!1,Ya=0,Jv=0;function qn(){throw Error(t(321))}function Tu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!ki(n[a],i[a]))return!1;return!0}function Eu(n,i,a,c,h,g){if(ds=g,_n=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,tl.current=n===null||n.memoizedState===null?i_:r_,n=a(c,h),Ka){g=0;do{if(Ka=!1,Ya=0,25<=g)throw Error(t(301));g+=1,kn=Rn=null,i.updateQueue=null,tl.current=s_,n=a(c,h)}while(Ka)}if(tl.current=sl,i=Rn!==null&&Rn.next!==null,ds=0,kn=Rn=_n=null,nl=!1,i)throw Error(t(300));return n}function wu(){var n=Ya!==0;return Ya=0,n}function er(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kn===null?_n.memoizedState=kn=n:kn=kn.next=n,kn}function Ni(){if(Rn===null){var n=_n.alternate;n=n!==null?n.memoizedState:null}else n=Rn.next;var i=kn===null?_n.memoizedState:kn.next;if(i!==null)kn=i,Rn=n;else{if(n===null)throw Error(t(310));Rn=n,n={memoizedState:Rn.memoizedState,baseState:Rn.baseState,baseQueue:Rn.baseQueue,queue:Rn.queue,next:null},kn===null?_n.memoizedState=kn=n:kn=kn.next=n}return kn}function qa(n,i){return typeof i=="function"?i(n):i}function Cu(n){var i=Ni(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=Rn,h=c.baseQueue,g=a.pending;if(g!==null){if(h!==null){var C=h.next;h.next=g.next,g.next=C}c.baseQueue=h=g,a.pending=null}if(h!==null){g=h.next,c=c.baseState;var z=C=null,W=null,me=g;do{var Re=me.lane;if((ds&Re)===Re)W!==null&&(W=W.next={lane:0,action:me.action,hasEagerState:me.hasEagerState,eagerState:me.eagerState,next:null}),c=me.hasEagerState?me.eagerState:n(c,me.action);else{var Le={lane:Re,action:me.action,hasEagerState:me.hasEagerState,eagerState:me.eagerState,next:null};W===null?(z=W=Le,C=c):W=W.next=Le,_n.lanes|=Re,fs|=Re}me=me.next}while(me!==null&&me!==g);W===null?C=c:W.next=z,ki(c,i.memoizedState)||(ui=!0),i.memoizedState=c,i.baseState=C,i.baseQueue=W,a.lastRenderedState=c}if(n=a.interleaved,n!==null){h=n;do g=h.lane,_n.lanes|=g,fs|=g,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Au(n){var i=Ni(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,h=a.pending,g=i.memoizedState;if(h!==null){a.pending=null;var C=h=h.next;do g=n(g,C.action),C=C.next;while(C!==h);ki(g,i.memoizedState)||(ui=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function pp(){}function mp(n,i){var a=_n,c=Ni(),h=i(),g=!ki(c.memoizedState,h);if(g&&(c.memoizedState=h,ui=!0),c=c.queue,bu(_p.bind(null,a,c,n),[n]),c.getSnapshot!==i||g||kn!==null&&kn.memoizedState.tag&1){if(a.flags|=2048,$a(9,vp.bind(null,a,c,h,i),void 0,null),Bn===null)throw Error(t(349));(ds&30)!==0||gp(a,i,h)}return h}function gp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=_n.updateQueue,i===null?(i={lastEffect:null,stores:null},_n.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function vp(n,i,a,c){i.value=a,i.getSnapshot=c,xp(i)&&yp(n)}function _p(n,i,a){return a(function(){xp(i)&&yp(n)})}function xp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!ki(n,a)}catch{return!0}}function yp(n){var i=mr(n,1);i!==null&&Gi(i,n,1,-1)}function Sp(n){var i=er();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:n},i.queue=n,n=n.dispatch=n_.bind(null,_n,n),[i.memoizedState,n]}function $a(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=_n.updateQueue,i===null?(i={lastEffect:null,stores:null},_n.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Mp(){return Ni().memoizedState}function il(n,i,a,c){var h=er();_n.flags|=n,h.memoizedState=$a(1|i,a,void 0,c===void 0?null:c)}function rl(n,i,a,c){var h=Ni();c=c===void 0?null:c;var g=void 0;if(Rn!==null){var C=Rn.memoizedState;if(g=C.destroy,c!==null&&Tu(c,C.deps)){h.memoizedState=$a(i,a,g,c);return}}_n.flags|=n,h.memoizedState=$a(1|i,a,g,c)}function Tp(n,i){return il(8390656,8,n,i)}function bu(n,i){return rl(2048,8,n,i)}function Ep(n,i){return rl(4,2,n,i)}function wp(n,i){return rl(4,4,n,i)}function Cp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Ap(n,i,a){return a=a!=null?a.concat([n]):null,rl(4,4,Cp.bind(null,i,n),a)}function Nu(){}function bp(n,i){var a=Ni();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Tu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Np(n,i){var a=Ni();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Tu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Rp(n,i,a){return(ds&21)===0?(n.baseState&&(n.baseState=!1,ui=!0),n.memoizedState=a):(ki(a,i)||(a=tn(),_n.lanes|=a,fs|=a,n.baseState=!0),i)}function e_(n,i){var a=at;at=a!==0&&4>a?a:4,n(!0);var c=Mu.transition;Mu.transition={};try{n(!1),i()}finally{at=a,Mu.transition=c}}function Pp(){return Ni().memoizedState}function t_(n,i,a){var c=Gr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Dp(n))Lp(i,a);else if(a=cp(n,i,a,c),a!==null){var h=ii();Gi(a,n,c,h),Ip(a,i,c)}}function n_(n,i,a){var c=Gr(n),h={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Dp(n))Lp(i,h);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var C=i.lastRenderedState,z=g(C,a);if(h.hasEagerState=!0,h.eagerState=z,ki(z,C)){var W=i.interleaved;W===null?(h.next=h,gu(i)):(h.next=W.next,W.next=h),i.interleaved=h;return}}catch{}finally{}a=cp(n,i,h,c),a!==null&&(h=ii(),Gi(a,n,c,h),Ip(a,i,c))}}function Dp(n){var i=n.alternate;return n===_n||i!==null&&i===_n}function Lp(n,i){Ka=nl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Ip(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,bn(n,a)}}var sl={readContext:bi,useCallback:qn,useContext:qn,useEffect:qn,useImperativeHandle:qn,useInsertionEffect:qn,useLayoutEffect:qn,useMemo:qn,useReducer:qn,useRef:qn,useState:qn,useDebugValue:qn,useDeferredValue:qn,useTransition:qn,useMutableSource:qn,useSyncExternalStore:qn,useId:qn,unstable_isNewReconciler:!1},i_={readContext:bi,useCallback:function(n,i){return er().memoizedState=[n,i===void 0?null:i],n},useContext:bi,useEffect:Tp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,il(4194308,4,Cp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return il(4194308,4,n,i)},useInsertionEffect:function(n,i){return il(4,2,n,i)},useMemo:function(n,i){var a=er();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=er();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=t_.bind(null,_n,n),[c.memoizedState,n]},useRef:function(n){var i=er();return n={current:n},i.memoizedState=n},useState:Sp,useDebugValue:Nu,useDeferredValue:function(n){return er().memoizedState=n},useTransition:function(){var n=Sp(!1),i=n[0];return n=e_.bind(null,n[1]),er().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=_n,h=er();if(mn){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Bn===null)throw Error(t(349));(ds&30)!==0||gp(c,i,a)}h.memoizedState=a;var g={value:a,getSnapshot:i};return h.queue=g,Tp(_p.bind(null,c,g,n),[n]),c.flags|=2048,$a(9,vp.bind(null,c,g,a,i),void 0,null),a},useId:function(){var n=er(),i=Bn.identifierPrefix;if(mn){var a=pr,c=fr;a=(c&~(1<<32-te(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ya++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Jv++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},r_={readContext:bi,useCallback:bp,useContext:bi,useEffect:bu,useImperativeHandle:Ap,useInsertionEffect:Ep,useLayoutEffect:wp,useMemo:Np,useReducer:Cu,useRef:Mp,useState:function(){return Cu(qa)},useDebugValue:Nu,useDeferredValue:function(n){var i=Ni();return Rp(i,Rn.memoizedState,n)},useTransition:function(){var n=Cu(qa)[0],i=Ni().memoizedState;return[n,i]},useMutableSource:pp,useSyncExternalStore:mp,useId:Pp,unstable_isNewReconciler:!1},s_={readContext:bi,useCallback:bp,useContext:bi,useEffect:bu,useImperativeHandle:Ap,useInsertionEffect:Ep,useLayoutEffect:wp,useMemo:Np,useReducer:Au,useRef:Mp,useState:function(){return Au(qa)},useDebugValue:Nu,useDeferredValue:function(n){var i=Ni();return Rn===null?i.memoizedState=n:Rp(i,Rn.memoizedState,n)},useTransition:function(){var n=Au(qa)[0],i=Ni().memoizedState;return[n,i]},useMutableSource:pp,useSyncExternalStore:mp,useId:Pp,unstable_isNewReconciler:!1};function zi(n,i){if(n&&n.defaultProps){i=$({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Ru(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:$({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var al={isMounted:function(n){return(n=n._reactInternals)?Vt(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=ii(),h=Gr(n),g=gr(c,h);g.payload=i,a!=null&&(g.callback=a),i=Br(n,g,h),i!==null&&(Gi(i,n,h,c),Qo(i,n,h))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=ii(),h=Gr(n),g=gr(c,h);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=Br(n,g,h),i!==null&&(Gi(i,n,h,c),Qo(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=ii(),c=Gr(n),h=gr(a,c);h.tag=2,i!=null&&(h.callback=i),i=Br(n,h,c),i!==null&&(Gi(i,n,c,a),Qo(i,n,c))}};function Up(n,i,a,c,h,g,C){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,C):i.prototype&&i.prototype.isPureReactComponent?!Oa(a,c)||!Oa(h,g):!0}function Op(n,i,a){var c=!1,h=Or,g=i.contextType;return typeof g=="object"&&g!==null?g=bi(g):(h=ci(i)?os:Yn.current,c=i.contextTypes,g=(c=c!=null)?Bs(n,h):Or),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=al,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=g),i}function Fp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&al.enqueueReplaceState(i,i.state,null)}function Pu(n,i,a,c){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},vu(n);var g=i.contextType;typeof g=="object"&&g!==null?h.context=bi(g):(g=ci(i)?os:Yn.current,h.context=Bs(n,g)),h.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Ru(n,i,g,a),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&al.enqueueReplaceState(h,h.state,null),Jo(n,a,h,c),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Ks(n,i){try{var a="",c=i;do a+=Ce(c),c=c.return;while(c);var h=a}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:h,digest:null}}function Du(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Lu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var a_=typeof WeakMap=="function"?WeakMap:Map;function kp(n,i,a){a=gr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){fl||(fl=!0,Yu=c),Lu(n,i)},a}function Bp(n,i,a){a=gr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var h=i.value;a.payload=function(){return c(h)},a.callback=function(){Lu(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Lu(n,i),typeof c!="function"&&(Hr===null?Hr=new Set([this]):Hr.add(this));var C=i.stack;this.componentDidCatch(i.value,{componentStack:C!==null?C:""})}),a}function zp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new a_;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(a)||(h.add(a),n=y_.bind(null,n,i,a),i.then(n,n))}function Hp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Vp(n,i,a,c,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=gr(-1,1),i.tag=2,Br(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var o_=P.ReactCurrentOwner,ui=!1;function ni(n,i,a,c){i.child=n===null?lp(i,null,a,c):Gs(i,n.child,a,c)}function Gp(n,i,a,c,h){a=a.render;var g=i.ref;return js(i,h),c=Eu(n,i,a,c,g,h),a=wu(),n!==null&&!ui?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,vr(n,i,h)):(mn&&a&&ou(i),i.flags|=1,ni(n,i,c,h),i.child)}function Wp(n,i,a,c,h){if(n===null){var g=a.type;return typeof g=="function"&&!th(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,jp(n,i,g,c,h)):(n=xl(a.type,null,c,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&h)===0){var C=g.memoizedProps;if(a=a.compare,a=a!==null?a:Oa,a(C,c)&&n.ref===i.ref)return vr(n,i,h)}return i.flags|=1,n=jr(g,c),n.ref=i.ref,n.return=i,i.child=n}function jp(n,i,a,c,h){if(n!==null){var g=n.memoizedProps;if(Oa(g,c)&&n.ref===i.ref)if(ui=!1,i.pendingProps=c=g,(n.lanes&h)!==0)(n.flags&131072)!==0&&(ui=!0);else return i.lanes=n.lanes,vr(n,i,h)}return Iu(n,i,a,c,h)}function Xp(n,i,a){var c=i.pendingProps,h=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},un(qs,yi),yi|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,un(qs,yi),yi|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,un(qs,yi),yi|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,un(qs,yi),yi|=c;return ni(n,i,h,a),i.child}function Kp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Iu(n,i,a,c,h){var g=ci(a)?os:Yn.current;return g=Bs(i,g),js(i,h),a=Eu(n,i,a,c,g,h),c=wu(),n!==null&&!ui?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,vr(n,i,h)):(mn&&c&&ou(i),i.flags|=1,ni(n,i,a,h),i.child)}function Yp(n,i,a,c,h){if(ci(a)){var g=!0;Wo(i)}else g=!1;if(js(i,h),i.stateNode===null)ll(n,i),Op(i,a,c),Pu(i,a,c,h),c=!0;else if(n===null){var C=i.stateNode,z=i.memoizedProps;C.props=z;var W=C.context,me=a.contextType;typeof me=="object"&&me!==null?me=bi(me):(me=ci(a)?os:Yn.current,me=Bs(i,me));var Re=a.getDerivedStateFromProps,Le=typeof Re=="function"||typeof C.getSnapshotBeforeUpdate=="function";Le||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(z!==c||W!==me)&&Fp(i,C,c,me),kr=!1;var Ne=i.memoizedState;C.state=Ne,Jo(i,c,C,h),W=i.memoizedState,z!==c||Ne!==W||li.current||kr?(typeof Re=="function"&&(Ru(i,a,Re,c),W=i.memoizedState),(z=kr||Up(i,a,z,c,Ne,W,me))?(Le||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount()),typeof C.componentDidMount=="function"&&(i.flags|=4194308)):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=W),C.props=c,C.state=W,C.context=me,c=z):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{C=i.stateNode,up(n,i),z=i.memoizedProps,me=i.type===i.elementType?z:zi(i.type,z),C.props=me,Le=i.pendingProps,Ne=C.context,W=a.contextType,typeof W=="object"&&W!==null?W=bi(W):(W=ci(a)?os:Yn.current,W=Bs(i,W));var Qe=a.getDerivedStateFromProps;(Re=typeof Qe=="function"||typeof C.getSnapshotBeforeUpdate=="function")||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(z!==Le||Ne!==W)&&Fp(i,C,c,W),kr=!1,Ne=i.memoizedState,C.state=Ne,Jo(i,c,C,h);var rt=i.memoizedState;z!==Le||Ne!==rt||li.current||kr?(typeof Qe=="function"&&(Ru(i,a,Qe,c),rt=i.memoizedState),(me=kr||Up(i,a,me,c,Ne,rt,W)||!1)?(Re||typeof C.UNSAFE_componentWillUpdate!="function"&&typeof C.componentWillUpdate!="function"||(typeof C.componentWillUpdate=="function"&&C.componentWillUpdate(c,rt,W),typeof C.UNSAFE_componentWillUpdate=="function"&&C.UNSAFE_componentWillUpdate(c,rt,W)),typeof C.componentDidUpdate=="function"&&(i.flags|=4),typeof C.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof C.componentDidUpdate!="function"||z===n.memoizedProps&&Ne===n.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&Ne===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=rt),C.props=c,C.state=rt,C.context=W,c=me):(typeof C.componentDidUpdate!="function"||z===n.memoizedProps&&Ne===n.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&Ne===n.memoizedState||(i.flags|=1024),c=!1)}return Uu(n,i,a,c,g,h)}function Uu(n,i,a,c,h,g){Kp(n,i);var C=(i.flags&128)!==0;if(!c&&!C)return h&&Jf(i,a,!1),vr(n,i,g);c=i.stateNode,o_.current=i;var z=C&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&C?(i.child=Gs(i,n.child,null,g),i.child=Gs(i,null,z,g)):ni(n,i,z,g),i.memoizedState=c.state,h&&Jf(i,a,!0),i.child}function qp(n){var i=n.stateNode;i.pendingContext?Zf(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Zf(n,i.context,!1),_u(n,i.containerInfo)}function $p(n,i,a,c,h){return Vs(),hu(h),i.flags|=256,ni(n,i,a,c),i.child}var Ou={dehydrated:null,treeContext:null,retryLane:0};function Fu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Zp(n,i,a){var c=i.pendingProps,h=vn.current,g=!1,C=(i.flags&128)!==0,z;if((z=C)||(z=n!==null&&n.memoizedState===null?!1:(h&2)!==0),z?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),un(vn,h&1),n===null)return uu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(C=c.children,n=c.fallback,g?(c=i.mode,g=i.child,C={mode:"hidden",children:C},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=C):g=yl(C,c,0,null),n=vs(n,c,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=Fu(a),i.memoizedState=Ou,n):ku(i,C));if(h=n.memoizedState,h!==null&&(z=h.dehydrated,z!==null))return l_(n,i,C,c,z,h,a);if(g){g=c.fallback,C=i.mode,h=n.child,z=h.sibling;var W={mode:"hidden",children:c.children};return(C&1)===0&&i.child!==h?(c=i.child,c.childLanes=0,c.pendingProps=W,i.deletions=null):(c=jr(h,W),c.subtreeFlags=h.subtreeFlags&14680064),z!==null?g=jr(z,g):(g=vs(g,C,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,C=n.child.memoizedState,C=C===null?Fu(a):{baseLanes:C.baseLanes|a,cachePool:null,transitions:C.transitions},g.memoizedState=C,g.childLanes=n.childLanes&~a,i.memoizedState=Ou,c}return g=n.child,n=g.sibling,c=jr(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function ku(n,i){return i=yl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function ol(n,i,a,c){return c!==null&&hu(c),Gs(i,n.child,null,a),n=ku(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function l_(n,i,a,c,h,g,C){if(a)return i.flags&256?(i.flags&=-257,c=Du(Error(t(422))),ol(n,i,C,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,h=i.mode,c=yl({mode:"visible",children:c.children},h,0,null),g=vs(g,h,C,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&Gs(i,n.child,null,C),i.child.memoizedState=Fu(C),i.memoizedState=Ou,g);if((i.mode&1)===0)return ol(n,i,C,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var z=c.dgst;return c=z,g=Error(t(419)),c=Du(g,c,void 0),ol(n,i,C,c)}if(z=(C&n.childLanes)!==0,ui||z){if(c=Bn,c!==null){switch(C&-C){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|C))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,mr(n,h),Gi(c,n,h,-1))}return eh(),c=Du(Error(t(421))),ol(n,i,C,c)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=S_.bind(null,n),h._reactRetry=i,null):(n=g.treeContext,xi=Ir(h.nextSibling),_i=i,mn=!0,Bi=null,n!==null&&(Ci[Ai++]=fr,Ci[Ai++]=pr,Ci[Ai++]=ls,fr=n.id,pr=n.overflow,ls=i),i=ku(i,c.children),i.flags|=4096,i)}function Qp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),mu(n.return,i,a)}function Bu(n,i,a,c,h){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:h}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=h)}function Jp(n,i,a){var c=i.pendingProps,h=c.revealOrder,g=c.tail;if(ni(n,i,c.children,a),c=vn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Qp(n,a,i);else if(n.tag===19)Qp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(un(vn,c),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)n=a.alternate,n!==null&&el(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Bu(i,!1,h,a,g);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&el(n)===null){i.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}Bu(i,!0,a,null,g);break;case"together":Bu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ll(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function vr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),fs|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=jr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=jr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function c_(n,i,a){switch(i.tag){case 3:qp(i),Vs();break;case 5:fp(i);break;case 1:ci(i.type)&&Wo(i);break;case 4:_u(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,h=i.memoizedProps.value;un($o,c._currentValue),c._currentValue=h;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(un(vn,vn.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Zp(n,i,a):(un(vn,vn.current&1),n=vr(n,i,a),n!==null?n.sibling:null);un(vn,vn.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Jp(n,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),un(vn,vn.current),c)break;return null;case 22:case 23:return i.lanes=0,Xp(n,i,a)}return vr(n,i,a)}var em,zu,tm,nm;em=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},zu=function(){},tm=function(n,i,a,c){var h=n.memoizedProps;if(h!==c){n=i.stateNode,hs(Ji.current);var g=null;switch(a){case"input":h=xt(n,h),c=xt(n,c),g=[];break;case"select":h=$({},h,{value:void 0}),c=$({},c,{value:void 0}),g=[];break;case"textarea":h=wt(n,h),c=wt(n,c),g=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ho)}Se(a,c);var C;a=null;for(me in h)if(!c.hasOwnProperty(me)&&h.hasOwnProperty(me)&&h[me]!=null)if(me==="style"){var z=h[me];for(C in z)z.hasOwnProperty(C)&&(a||(a={}),a[C]="")}else me!=="dangerouslySetInnerHTML"&&me!=="children"&&me!=="suppressContentEditableWarning"&&me!=="suppressHydrationWarning"&&me!=="autoFocus"&&(o.hasOwnProperty(me)?g||(g=[]):(g=g||[]).push(me,null));for(me in c){var W=c[me];if(z=h!=null?h[me]:void 0,c.hasOwnProperty(me)&&W!==z&&(W!=null||z!=null))if(me==="style")if(z){for(C in z)!z.hasOwnProperty(C)||W&&W.hasOwnProperty(C)||(a||(a={}),a[C]="");for(C in W)W.hasOwnProperty(C)&&z[C]!==W[C]&&(a||(a={}),a[C]=W[C])}else a||(g||(g=[]),g.push(me,a)),a=W;else me==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,z=z?z.__html:void 0,W!=null&&z!==W&&(g=g||[]).push(me,W)):me==="children"?typeof W!="string"&&typeof W!="number"||(g=g||[]).push(me,""+W):me!=="suppressContentEditableWarning"&&me!=="suppressHydrationWarning"&&(o.hasOwnProperty(me)?(W!=null&&me==="onScroll"&&hn("scroll",n),g||z===W||(g=[])):(g=g||[]).push(me,W))}a&&(g=g||[]).push("style",a);var me=g;(i.updateQueue=me)&&(i.flags|=4)}},nm=function(n,i,a,c){a!==c&&(i.flags|=4)};function Za(n,i){if(!mn)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function $n(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function u_(n,i,a){var c=i.pendingProps;switch(lu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $n(i),null;case 1:return ci(i.type)&&Go(),$n(i),null;case 3:return c=i.stateNode,Xs(),dn(li),dn(Yn),Su(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Yo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Bi!==null&&(Zu(Bi),Bi=null))),zu(n,i),$n(i),null;case 5:xu(i);var h=hs(Xa.current);if(a=i.type,n!==null&&i.stateNode!=null)tm(n,i,a,c,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return $n(i),null}if(n=hs(Ji.current),Yo(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[Qi]=i,c[Ha]=g,n=(i.mode&1)!==0,a){case"dialog":hn("cancel",c),hn("close",c);break;case"iframe":case"object":case"embed":hn("load",c);break;case"video":case"audio":for(h=0;h<ka.length;h++)hn(ka[h],c);break;case"source":hn("error",c);break;case"img":case"image":case"link":hn("error",c),hn("load",c);break;case"details":hn("toggle",c);break;case"input":$t(c,g),hn("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},hn("invalid",c);break;case"textarea":Ht(c,g),hn("invalid",c)}Se(a,g),h=null;for(var C in g)if(g.hasOwnProperty(C)){var z=g[C];C==="children"?typeof z=="string"?c.textContent!==z&&(g.suppressHydrationWarning!==!0&&zo(c.textContent,z,n),h=["children",z]):typeof z=="number"&&c.textContent!==""+z&&(g.suppressHydrationWarning!==!0&&zo(c.textContent,z,n),h=["children",""+z]):o.hasOwnProperty(C)&&z!=null&&C==="onScroll"&&hn("scroll",c)}switch(a){case"input":it(c),jt(c,g,!0);break;case"textarea":it(c),gn(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Ho)}c=h,i.updateQueue=c,c!==null&&(i.flags|=4)}else{C=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=mt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=C.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=C.createElement(a,{is:c.is}):(n=C.createElement(a),a==="select"&&(C=n,c.multiple?C.multiple=!0:c.size&&(C.size=c.size))):n=C.createElementNS(n,a),n[Qi]=i,n[Ha]=c,em(n,i,!1,!1),i.stateNode=n;e:{switch(C=Oe(a,c),a){case"dialog":hn("cancel",n),hn("close",n),h=c;break;case"iframe":case"object":case"embed":hn("load",n),h=c;break;case"video":case"audio":for(h=0;h<ka.length;h++)hn(ka[h],n);h=c;break;case"source":hn("error",n),h=c;break;case"img":case"image":case"link":hn("error",n),hn("load",n),h=c;break;case"details":hn("toggle",n),h=c;break;case"input":$t(n,c),h=xt(n,c),hn("invalid",n);break;case"option":h=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},h=$({},c,{value:void 0}),hn("invalid",n);break;case"textarea":Ht(n,c),h=wt(n,c),hn("invalid",n);break;default:h=c}Se(a,h),z=h;for(g in z)if(z.hasOwnProperty(g)){var W=z[g];g==="style"?X(n,W):g==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,W!=null&&vt(n,W)):g==="children"?typeof W=="string"?(a!=="textarea"||W!=="")&&je(n,W):typeof W=="number"&&je(n,""+W):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?W!=null&&g==="onScroll"&&hn("scroll",n):W!=null&&k(n,g,W,C))}switch(a){case"input":it(n),jt(n,c,!1);break;case"textarea":it(n),gn(n);break;case"option":c.value!=null&&n.setAttribute("value",""+we(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?St(n,!!c.multiple,g,!1):c.defaultValue!=null&&St(n,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Ho)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return $n(i),null;case 6:if(n&&i.stateNode!=null)nm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=hs(Xa.current),hs(Ji.current),Yo(i)){if(c=i.stateNode,a=i.memoizedProps,c[Qi]=i,(g=c.nodeValue!==a)&&(n=_i,n!==null))switch(n.tag){case 3:zo(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&zo(c.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Qi]=i,i.stateNode=c}return $n(i),null;case 13:if(dn(vn),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(mn&&xi!==null&&(i.mode&1)!==0&&(i.flags&128)===0)sp(),Vs(),i.flags|=98560,g=!1;else if(g=Yo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Qi]=i}else Vs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;$n(i),g=!1}else Bi!==null&&(Zu(Bi),Bi=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(vn.current&1)!==0?Pn===0&&(Pn=3):eh())),i.updateQueue!==null&&(i.flags|=4),$n(i),null);case 4:return Xs(),zu(n,i),n===null&&Ba(i.stateNode.containerInfo),$n(i),null;case 10:return pu(i.type._context),$n(i),null;case 17:return ci(i.type)&&Go(),$n(i),null;case 19:if(dn(vn),g=i.memoizedState,g===null)return $n(i),null;if(c=(i.flags&128)!==0,C=g.rendering,C===null)if(c)Za(g,!1);else{if(Pn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(C=el(n),C!==null){for(i.flags|=128,Za(g,!1),c=C.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,n=c,g.flags&=14680066,C=g.alternate,C===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=C.childLanes,g.lanes=C.lanes,g.child=C.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=C.memoizedProps,g.memoizedState=C.memoizedState,g.updateQueue=C.updateQueue,g.type=C.type,n=C.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return un(vn,vn.current&1|2),i.child}n=n.sibling}g.tail!==null&&kt()>$s&&(i.flags|=128,c=!0,Za(g,!1),i.lanes=4194304)}else{if(!c)if(n=el(C),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Za(g,!0),g.tail===null&&g.tailMode==="hidden"&&!C.alternate&&!mn)return $n(i),null}else 2*kt()-g.renderingStartTime>$s&&a!==1073741824&&(i.flags|=128,c=!0,Za(g,!1),i.lanes=4194304);g.isBackwards?(C.sibling=i.child,i.child=C):(a=g.last,a!==null?a.sibling=C:i.child=C,g.last=C)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=kt(),i.sibling=null,a=vn.current,un(vn,c?a&1|2:a&1),i):($n(i),null);case 22:case 23:return Ju(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(yi&1073741824)!==0&&($n(i),i.subtreeFlags&6&&(i.flags|=8192)):$n(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function h_(n,i){switch(lu(i),i.tag){case 1:return ci(i.type)&&Go(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Xs(),dn(li),dn(Yn),Su(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return xu(i),null;case 13:if(dn(vn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Vs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return dn(vn),null;case 4:return Xs(),null;case 10:return pu(i.type._context),null;case 22:case 23:return Ju(),null;case 24:return null;default:return null}}var cl=!1,Zn=!1,d_=typeof WeakSet=="function"?WeakSet:Set,tt=null;function Ys(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Sn(n,i,c)}else a.current=null}function Hu(n,i,a){try{a()}catch(c){Sn(n,i,c)}}var im=!1;function f_(n,i){if(Jc=No,n=Uf(),jc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var h=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var C=0,z=-1,W=-1,me=0,Re=0,Le=n,Ne=null;t:for(;;){for(var Qe;Le!==a||h!==0&&Le.nodeType!==3||(z=C+h),Le!==g||c!==0&&Le.nodeType!==3||(W=C+c),Le.nodeType===3&&(C+=Le.nodeValue.length),(Qe=Le.firstChild)!==null;)Ne=Le,Le=Qe;for(;;){if(Le===n)break t;if(Ne===a&&++me===h&&(z=C),Ne===g&&++Re===c&&(W=C),(Qe=Le.nextSibling)!==null)break;Le=Ne,Ne=Le.parentNode}Le=Qe}a=z===-1||W===-1?null:{start:z,end:W}}else a=null}a=a||{start:0,end:0}}else a=null;for(eu={focusedElem:n,selectionRange:a},No=!1,tt=i;tt!==null;)if(i=tt,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,tt=n;else for(;tt!==null;){i=tt;try{var rt=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(rt!==null){var st=rt.memoizedProps,Tn=rt.memoizedState,oe=i.stateNode,Y=oe.getSnapshotBeforeUpdate(i.elementType===i.type?st:zi(i.type,st),Tn);oe.__reactInternalSnapshotBeforeUpdate=Y}break;case 3:var ce=i.stateNode.containerInfo;ce.nodeType===1?ce.textContent="":ce.nodeType===9&&ce.documentElement&&ce.removeChild(ce.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ze){Sn(i,i.return,ze)}if(n=i.sibling,n!==null){n.return=i.return,tt=n;break}tt=i.return}return rt=im,im=!1,rt}function Qa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&n)===n){var g=h.destroy;h.destroy=void 0,g!==void 0&&Hu(i,a,g)}h=h.next}while(h!==c)}}function ul(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Vu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function rm(n){var i=n.alternate;i!==null&&(n.alternate=null,rm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Qi],delete i[Ha],delete i[ru],delete i[qv],delete i[$v])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function sm(n){return n.tag===5||n.tag===3||n.tag===4}function am(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||sm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Gu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Ho));else if(c!==4&&(n=n.child,n!==null))for(Gu(n,i,a),n=n.sibling;n!==null;)Gu(n,i,a),n=n.sibling}function Wu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Wu(n,i,a),n=n.sibling;n!==null;)Wu(n,i,a),n=n.sibling}var Wn=null,Hi=!1;function zr(n,i,a){for(a=a.child;a!==null;)om(n,i,a),a=a.sibling}function om(n,i,a){if(se&&typeof se.onCommitFiberUnmount=="function")try{se.onCommitFiberUnmount(G,a)}catch{}switch(a.tag){case 5:Zn||Ys(a,i);case 6:var c=Wn,h=Hi;Wn=null,zr(n,i,a),Wn=c,Hi=h,Wn!==null&&(Hi?(n=Wn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Wn.removeChild(a.stateNode));break;case 18:Wn!==null&&(Hi?(n=Wn,a=a.stateNode,n.nodeType===8?iu(n.parentNode,a):n.nodeType===1&&iu(n,a),Ra(n)):iu(Wn,a.stateNode));break;case 4:c=Wn,h=Hi,Wn=a.stateNode.containerInfo,Hi=!0,zr(n,i,a),Wn=c,Hi=h;break;case 0:case 11:case 14:case 15:if(!Zn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var g=h,C=g.destroy;g=g.tag,C!==void 0&&((g&2)!==0||(g&4)!==0)&&Hu(a,i,C),h=h.next}while(h!==c)}zr(n,i,a);break;case 1:if(!Zn&&(Ys(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(z){Sn(a,i,z)}zr(n,i,a);break;case 21:zr(n,i,a);break;case 22:a.mode&1?(Zn=(c=Zn)||a.memoizedState!==null,zr(n,i,a),Zn=c):zr(n,i,a);break;default:zr(n,i,a)}}function lm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new d_),i.forEach(function(c){var h=M_.bind(null,n,c);a.has(c)||(a.add(c),c.then(h,h))})}}function Vi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var h=a[c];try{var g=n,C=i,z=C;e:for(;z!==null;){switch(z.tag){case 5:Wn=z.stateNode,Hi=!1;break e;case 3:Wn=z.stateNode.containerInfo,Hi=!0;break e;case 4:Wn=z.stateNode.containerInfo,Hi=!0;break e}z=z.return}if(Wn===null)throw Error(t(160));om(g,C,h),Wn=null,Hi=!1;var W=h.alternate;W!==null&&(W.return=null),h.return=null}catch(me){Sn(h,i,me)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)cm(i,n),i=i.sibling}function cm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Vi(i,n),tr(n),c&4){try{Qa(3,n,n.return),ul(3,n)}catch(st){Sn(n,n.return,st)}try{Qa(5,n,n.return)}catch(st){Sn(n,n.return,st)}}break;case 1:Vi(i,n),tr(n),c&512&&a!==null&&Ys(a,a.return);break;case 5:if(Vi(i,n),tr(n),c&512&&a!==null&&Ys(a,a.return),n.flags&32){var h=n.stateNode;try{je(h,"")}catch(st){Sn(n,n.return,st)}}if(c&4&&(h=n.stateNode,h!=null)){var g=n.memoizedProps,C=a!==null?a.memoizedProps:g,z=n.type,W=n.updateQueue;if(n.updateQueue=null,W!==null)try{z==="input"&&g.type==="radio"&&g.name!=null&&ln(h,g),Oe(z,C);var me=Oe(z,g);for(C=0;C<W.length;C+=2){var Re=W[C],Le=W[C+1];Re==="style"?X(h,Le):Re==="dangerouslySetInnerHTML"?vt(h,Le):Re==="children"?je(h,Le):k(h,Re,Le,me)}switch(z){case"input":yt(h,g);break;case"textarea":j(h,g);break;case"select":var Ne=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var Qe=g.value;Qe!=null?St(h,!!g.multiple,Qe,!1):Ne!==!!g.multiple&&(g.defaultValue!=null?St(h,!!g.multiple,g.defaultValue,!0):St(h,!!g.multiple,g.multiple?[]:"",!1))}h[Ha]=g}catch(st){Sn(n,n.return,st)}}break;case 6:if(Vi(i,n),tr(n),c&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,g=n.memoizedProps;try{h.nodeValue=g}catch(st){Sn(n,n.return,st)}}break;case 3:if(Vi(i,n),tr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Ra(i.containerInfo)}catch(st){Sn(n,n.return,st)}break;case 4:Vi(i,n),tr(n);break;case 13:Vi(i,n),tr(n),h=n.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(Ku=kt())),c&4&&lm(n);break;case 22:if(Re=a!==null&&a.memoizedState!==null,n.mode&1?(Zn=(me=Zn)||Re,Vi(i,n),Zn=me):Vi(i,n),tr(n),c&8192){if(me=n.memoizedState!==null,(n.stateNode.isHidden=me)&&!Re&&(n.mode&1)!==0)for(tt=n,Re=n.child;Re!==null;){for(Le=tt=Re;tt!==null;){switch(Ne=tt,Qe=Ne.child,Ne.tag){case 0:case 11:case 14:case 15:Qa(4,Ne,Ne.return);break;case 1:Ys(Ne,Ne.return);var rt=Ne.stateNode;if(typeof rt.componentWillUnmount=="function"){c=Ne,a=Ne.return;try{i=c,rt.props=i.memoizedProps,rt.state=i.memoizedState,rt.componentWillUnmount()}catch(st){Sn(c,a,st)}}break;case 5:Ys(Ne,Ne.return);break;case 22:if(Ne.memoizedState!==null){dm(Le);continue}}Qe!==null?(Qe.return=Ne,tt=Qe):dm(Le)}Re=Re.sibling}e:for(Re=null,Le=n;;){if(Le.tag===5){if(Re===null){Re=Le;try{h=Le.stateNode,me?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(z=Le.stateNode,W=Le.memoizedProps.style,C=W!=null&&W.hasOwnProperty("display")?W.display:null,z.style.display=w("display",C))}catch(st){Sn(n,n.return,st)}}}else if(Le.tag===6){if(Re===null)try{Le.stateNode.nodeValue=me?"":Le.memoizedProps}catch(st){Sn(n,n.return,st)}}else if((Le.tag!==22&&Le.tag!==23||Le.memoizedState===null||Le===n)&&Le.child!==null){Le.child.return=Le,Le=Le.child;continue}if(Le===n)break e;for(;Le.sibling===null;){if(Le.return===null||Le.return===n)break e;Re===Le&&(Re=null),Le=Le.return}Re===Le&&(Re=null),Le.sibling.return=Le.return,Le=Le.sibling}}break;case 19:Vi(i,n),tr(n),c&4&&lm(n);break;case 21:break;default:Vi(i,n),tr(n)}}function tr(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(sm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(je(h,""),c.flags&=-33);var g=am(n);Wu(n,g,h);break;case 3:case 4:var C=c.stateNode.containerInfo,z=am(n);Gu(n,z,C);break;default:throw Error(t(161))}}catch(W){Sn(n,n.return,W)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function p_(n,i,a){tt=n,um(n)}function um(n,i,a){for(var c=(n.mode&1)!==0;tt!==null;){var h=tt,g=h.child;if(h.tag===22&&c){var C=h.memoizedState!==null||cl;if(!C){var z=h.alternate,W=z!==null&&z.memoizedState!==null||Zn;z=cl;var me=Zn;if(cl=C,(Zn=W)&&!me)for(tt=h;tt!==null;)C=tt,W=C.child,C.tag===22&&C.memoizedState!==null?fm(h):W!==null?(W.return=C,tt=W):fm(h);for(;g!==null;)tt=g,um(g),g=g.sibling;tt=h,cl=z,Zn=me}hm(n)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,tt=g):hm(n)}}function hm(n){for(;tt!==null;){var i=tt;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Zn||ul(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Zn)if(a===null)c.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:zi(i.type,a.memoizedProps);c.componentDidUpdate(h,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&dp(i,g,c);break;case 3:var C=i.updateQueue;if(C!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}dp(i,C,a)}break;case 5:var z=i.stateNode;if(a===null&&i.flags&4){a=z;var W=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":W.autoFocus&&a.focus();break;case"img":W.src&&(a.src=W.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var me=i.alternate;if(me!==null){var Re=me.memoizedState;if(Re!==null){var Le=Re.dehydrated;Le!==null&&Ra(Le)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Zn||i.flags&512&&Vu(i)}catch(Ne){Sn(i,i.return,Ne)}}if(i===n){tt=null;break}if(a=i.sibling,a!==null){a.return=i.return,tt=a;break}tt=i.return}}function dm(n){for(;tt!==null;){var i=tt;if(i===n){tt=null;break}var a=i.sibling;if(a!==null){a.return=i.return,tt=a;break}tt=i.return}}function fm(n){for(;tt!==null;){var i=tt;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{ul(4,i)}catch(W){Sn(i,a,W)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var h=i.return;try{c.componentDidMount()}catch(W){Sn(i,h,W)}}var g=i.return;try{Vu(i)}catch(W){Sn(i,g,W)}break;case 5:var C=i.return;try{Vu(i)}catch(W){Sn(i,C,W)}}}catch(W){Sn(i,i.return,W)}if(i===n){tt=null;break}var z=i.sibling;if(z!==null){z.return=i.return,tt=z;break}tt=i.return}}var m_=Math.ceil,hl=P.ReactCurrentDispatcher,ju=P.ReactCurrentOwner,Ri=P.ReactCurrentBatchConfig,Gt=0,Bn=null,Cn=null,jn=0,yi=0,qs=Ur(0),Pn=0,Ja=null,fs=0,dl=0,Xu=0,eo=null,hi=null,Ku=0,$s=1/0,_r=null,fl=!1,Yu=null,Hr=null,pl=!1,Vr=null,ml=0,to=0,qu=null,gl=-1,vl=0;function ii(){return(Gt&6)!==0?kt():gl!==-1?gl:gl=kt()}function Gr(n){return(n.mode&1)===0?1:(Gt&2)!==0&&jn!==0?jn&-jn:Qv.transition!==null?(vl===0&&(vl=tn()),vl):(n=at,n!==0||(n=window.event,n=n===void 0?16:mf(n.type)),n)}function Gi(n,i,a,c){if(50<to)throw to=0,qu=null,Error(t(185));yn(n,a,c),((Gt&2)===0||n!==Bn)&&(n===Bn&&((Gt&2)===0&&(dl|=a),Pn===4&&Wr(n,jn)),di(n,c),a===1&&Gt===0&&(i.mode&1)===0&&($s=kt()+500,jo&&Fr()))}function di(n,i){var a=n.callbackNode;bt(n,i);var c=pt(n,n===Bn?jn:0);if(c===0)a!==null&&En(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&En(a),i===1)n.tag===0?Zv(mm.bind(null,n)):ep(mm.bind(null,n)),Kv(function(){(Gt&6)===0&&Fr()}),a=null;else{switch($i(c)){case 1:a=ti;break;case 4:a=wi;break;case 16:a=wn;break;case 536870912:a=b;break;default:a=wn}a=Tm(a,pm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function pm(n,i){if(gl=-1,vl=0,(Gt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Zs()&&n.callbackNode!==a)return null;var c=pt(n,n===Bn?jn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=_l(n,c);else{i=c;var h=Gt;Gt|=2;var g=vm();(Bn!==n||jn!==i)&&(_r=null,$s=kt()+500,ms(n,i));do try{__();break}catch(z){gm(n,z)}while(!0);fu(),hl.current=g,Gt=h,Cn!==null?i=0:(Bn=null,jn=0,i=Pn)}if(i!==0){if(i===2&&(h=pn(n),h!==0&&(c=h,i=$u(n,h))),i===1)throw a=Ja,ms(n,0),Wr(n,c),di(n,kt()),a;if(i===6)Wr(n,c);else{if(h=n.current.alternate,(c&30)===0&&!g_(h)&&(i=_l(n,c),i===2&&(g=pn(n),g!==0&&(c=g,i=$u(n,g))),i===1))throw a=Ja,ms(n,0),Wr(n,c),di(n,kt()),a;switch(n.finishedWork=h,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:gs(n,hi,_r);break;case 3:if(Wr(n,c),(c&130023424)===c&&(i=Ku+500-kt(),10<i)){if(pt(n,0)!==0)break;if(h=n.suspendedLanes,(h&c)!==c){ii(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=nu(gs.bind(null,n,hi,_r),i);break}gs(n,hi,_r);break;case 4:if(Wr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,h=-1;0<c;){var C=31-te(c);g=1<<C,C=i[C],C>h&&(h=C),c&=~g}if(c=h,c=kt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*m_(c/1960))-c,10<c){n.timeoutHandle=nu(gs.bind(null,n,hi,_r),c);break}gs(n,hi,_r);break;case 5:gs(n,hi,_r);break;default:throw Error(t(329))}}}return di(n,kt()),n.callbackNode===a?pm.bind(null,n):null}function $u(n,i){var a=eo;return n.current.memoizedState.isDehydrated&&(ms(n,i).flags|=256),n=_l(n,i),n!==2&&(i=hi,hi=a,i!==null&&Zu(i)),n}function Zu(n){hi===null?hi=n:hi.push.apply(hi,n)}function g_(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var h=a[c],g=h.getSnapshot;h=h.value;try{if(!ki(g(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Wr(n,i){for(i&=~Xu,i&=~dl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-te(i),c=1<<a;n[a]=-1,i&=~c}}function mm(n){if((Gt&6)!==0)throw Error(t(327));Zs();var i=pt(n,0);if((i&1)===0)return di(n,kt()),null;var a=_l(n,i);if(n.tag!==0&&a===2){var c=pn(n);c!==0&&(i=c,a=$u(n,c))}if(a===1)throw a=Ja,ms(n,0),Wr(n,i),di(n,kt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,gs(n,hi,_r),di(n,kt()),null}function Qu(n,i){var a=Gt;Gt|=1;try{return n(i)}finally{Gt=a,Gt===0&&($s=kt()+500,jo&&Fr())}}function ps(n){Vr!==null&&Vr.tag===0&&(Gt&6)===0&&Zs();var i=Gt;Gt|=1;var a=Ri.transition,c=at;try{if(Ri.transition=null,at=1,n)return n()}finally{at=c,Ri.transition=a,Gt=i,(Gt&6)===0&&Fr()}}function Ju(){yi=qs.current,dn(qs)}function ms(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Xv(a)),Cn!==null)for(a=Cn.return;a!==null;){var c=a;switch(lu(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Go();break;case 3:Xs(),dn(li),dn(Yn),Su();break;case 5:xu(c);break;case 4:Xs();break;case 13:dn(vn);break;case 19:dn(vn);break;case 10:pu(c.type._context);break;case 22:case 23:Ju()}a=a.return}if(Bn=n,Cn=n=jr(n.current,null),jn=yi=i,Pn=0,Ja=null,Xu=dl=fs=0,hi=eo=null,us!==null){for(i=0;i<us.length;i++)if(a=us[i],c=a.interleaved,c!==null){a.interleaved=null;var h=c.next,g=a.pending;if(g!==null){var C=g.next;g.next=h,c.next=C}a.pending=c}us=null}return n}function gm(n,i){do{var a=Cn;try{if(fu(),tl.current=sl,nl){for(var c=_n.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}nl=!1}if(ds=0,kn=Rn=_n=null,Ka=!1,Ya=0,ju.current=null,a===null||a.return===null){Pn=1,Ja=i,Cn=null;break}e:{var g=n,C=a.return,z=a,W=i;if(i=jn,z.flags|=32768,W!==null&&typeof W=="object"&&typeof W.then=="function"){var me=W,Re=z,Le=Re.tag;if((Re.mode&1)===0&&(Le===0||Le===11||Le===15)){var Ne=Re.alternate;Ne?(Re.updateQueue=Ne.updateQueue,Re.memoizedState=Ne.memoizedState,Re.lanes=Ne.lanes):(Re.updateQueue=null,Re.memoizedState=null)}var Qe=Hp(C);if(Qe!==null){Qe.flags&=-257,Vp(Qe,C,z,g,i),Qe.mode&1&&zp(g,me,i),i=Qe,W=me;var rt=i.updateQueue;if(rt===null){var st=new Set;st.add(W),i.updateQueue=st}else rt.add(W);break e}else{if((i&1)===0){zp(g,me,i),eh();break e}W=Error(t(426))}}else if(mn&&z.mode&1){var Tn=Hp(C);if(Tn!==null){(Tn.flags&65536)===0&&(Tn.flags|=256),Vp(Tn,C,z,g,i),hu(Ks(W,z));break e}}g=W=Ks(W,z),Pn!==4&&(Pn=2),eo===null?eo=[g]:eo.push(g),g=C;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var oe=kp(g,W,i);hp(g,oe);break e;case 1:z=W;var Y=g.type,ce=g.stateNode;if((g.flags&128)===0&&(typeof Y.getDerivedStateFromError=="function"||ce!==null&&typeof ce.componentDidCatch=="function"&&(Hr===null||!Hr.has(ce)))){g.flags|=65536,i&=-i,g.lanes|=i;var ze=Bp(g,z,i);hp(g,ze);break e}}g=g.return}while(g!==null)}xm(a)}catch(ot){i=ot,Cn===a&&a!==null&&(Cn=a=a.return);continue}break}while(!0)}function vm(){var n=hl.current;return hl.current=sl,n===null?sl:n}function eh(){(Pn===0||Pn===3||Pn===2)&&(Pn=4),Bn===null||(fs&268435455)===0&&(dl&268435455)===0||Wr(Bn,jn)}function _l(n,i){var a=Gt;Gt|=2;var c=vm();(Bn!==n||jn!==i)&&(_r=null,ms(n,i));do try{v_();break}catch(h){gm(n,h)}while(!0);if(fu(),Gt=a,hl.current=c,Cn!==null)throw Error(t(261));return Bn=null,jn=0,Pn}function v_(){for(;Cn!==null;)_m(Cn)}function __(){for(;Cn!==null&&!Gn();)_m(Cn)}function _m(n){var i=Mm(n.alternate,n,yi);n.memoizedProps=n.pendingProps,i===null?xm(n):Cn=i,ju.current=null}function xm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=u_(a,i,yi),a!==null){Cn=a;return}}else{if(a=h_(a,i),a!==null){a.flags&=32767,Cn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Pn=6,Cn=null;return}}if(i=i.sibling,i!==null){Cn=i;return}Cn=i=n}while(i!==null);Pn===0&&(Pn=5)}function gs(n,i,a){var c=at,h=Ri.transition;try{Ri.transition=null,at=1,x_(n,i,a,c)}finally{Ri.transition=h,at=c}return null}function x_(n,i,a,c){do Zs();while(Vr!==null);if((Gt&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(nt(n,g),n===Bn&&(Cn=Bn=null,jn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||pl||(pl=!0,Tm(wn,function(){return Zs(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=Ri.transition,Ri.transition=null;var C=at;at=1;var z=Gt;Gt|=4,ju.current=null,f_(n,a),cm(a,n),Bv(eu),No=!!Jc,eu=Jc=null,n.current=a,p_(a),gi(),Gt=z,at=C,Ri.transition=g}else n.current=a;if(pl&&(pl=!1,Vr=n,ml=h),g=n.pendingLanes,g===0&&(Hr=null),ne(a.stateNode),di(n,kt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)h=i[a],c(h.value,{componentStack:h.stack,digest:h.digest});if(fl)throw fl=!1,n=Yu,Yu=null,n;return(ml&1)!==0&&n.tag!==0&&Zs(),g=n.pendingLanes,(g&1)!==0?n===qu?to++:(to=0,qu=n):to=0,Fr(),null}function Zs(){if(Vr!==null){var n=$i(ml),i=Ri.transition,a=at;try{if(Ri.transition=null,at=16>n?16:n,Vr===null)var c=!1;else{if(n=Vr,Vr=null,ml=0,(Gt&6)!==0)throw Error(t(331));var h=Gt;for(Gt|=4,tt=n.current;tt!==null;){var g=tt,C=g.child;if((tt.flags&16)!==0){var z=g.deletions;if(z!==null){for(var W=0;W<z.length;W++){var me=z[W];for(tt=me;tt!==null;){var Re=tt;switch(Re.tag){case 0:case 11:case 15:Qa(8,Re,g)}var Le=Re.child;if(Le!==null)Le.return=Re,tt=Le;else for(;tt!==null;){Re=tt;var Ne=Re.sibling,Qe=Re.return;if(rm(Re),Re===me){tt=null;break}if(Ne!==null){Ne.return=Qe,tt=Ne;break}tt=Qe}}}var rt=g.alternate;if(rt!==null){var st=rt.child;if(st!==null){rt.child=null;do{var Tn=st.sibling;st.sibling=null,st=Tn}while(st!==null)}}tt=g}}if((g.subtreeFlags&2064)!==0&&C!==null)C.return=g,tt=C;else e:for(;tt!==null;){if(g=tt,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Qa(9,g,g.return)}var oe=g.sibling;if(oe!==null){oe.return=g.return,tt=oe;break e}tt=g.return}}var Y=n.current;for(tt=Y;tt!==null;){C=tt;var ce=C.child;if((C.subtreeFlags&2064)!==0&&ce!==null)ce.return=C,tt=ce;else e:for(C=Y;tt!==null;){if(z=tt,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:ul(9,z)}}catch(ot){Sn(z,z.return,ot)}if(z===C){tt=null;break e}var ze=z.sibling;if(ze!==null){ze.return=z.return,tt=ze;break e}tt=z.return}}if(Gt=h,Fr(),se&&typeof se.onPostCommitFiberRoot=="function")try{se.onPostCommitFiberRoot(G,n)}catch{}c=!0}return c}finally{at=a,Ri.transition=i}}return!1}function ym(n,i,a){i=Ks(a,i),i=kp(n,i,1),n=Br(n,i,1),i=ii(),n!==null&&(yn(n,1,i),di(n,i))}function Sn(n,i,a){if(n.tag===3)ym(n,n,a);else for(;i!==null;){if(i.tag===3){ym(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Hr===null||!Hr.has(c))){n=Ks(a,n),n=Bp(i,n,1),i=Br(i,n,1),n=ii(),i!==null&&(yn(i,1,n),di(i,n));break}}i=i.return}}function y_(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=ii(),n.pingedLanes|=n.suspendedLanes&a,Bn===n&&(jn&a)===a&&(Pn===4||Pn===3&&(jn&130023424)===jn&&500>kt()-Ku?ms(n,0):Xu|=a),di(n,i)}function Sm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Je,Je<<=1,(Je&130023424)===0&&(Je=4194304)));var a=ii();n=mr(n,i),n!==null&&(yn(n,i,a),di(n,a))}function S_(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Sm(n,a)}function M_(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Sm(n,a)}var Mm;Mm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||li.current)ui=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return ui=!1,c_(n,i,a);ui=(n.flags&131072)!==0}else ui=!1,mn&&(i.flags&1048576)!==0&&tp(i,Ko,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;ll(n,i),n=i.pendingProps;var h=Bs(i,Yn.current);js(i,a),h=Eu(null,i,c,n,h,a);var g=wu();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ci(c)?(g=!0,Wo(i)):g=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,vu(i),h.updater=al,i.stateNode=h,h._reactInternals=i,Pu(i,c,n,a),i=Uu(null,i,c,!0,g,a)):(i.tag=0,mn&&g&&ou(i),ni(null,i,h,a),i=i.child),i;case 16:c=i.elementType;e:{switch(ll(n,i),n=i.pendingProps,h=c._init,c=h(c._payload),i.type=c,h=i.tag=E_(c),n=zi(c,n),h){case 0:i=Iu(null,i,c,n,a);break e;case 1:i=Yp(null,i,c,n,a);break e;case 11:i=Gp(null,i,c,n,a);break e;case 14:i=Wp(null,i,c,zi(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:zi(c,h),Iu(n,i,c,h,a);case 1:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:zi(c,h),Yp(n,i,c,h,a);case 3:e:{if(qp(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,h=g.element,up(n,i),Jo(i,c,null,a);var C=i.memoizedState;if(c=C.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:C.cache,pendingSuspenseBoundaries:C.pendingSuspenseBoundaries,transitions:C.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){h=Ks(Error(t(423)),i),i=$p(n,i,c,a,h);break e}else if(c!==h){h=Ks(Error(t(424)),i),i=$p(n,i,c,a,h);break e}else for(xi=Ir(i.stateNode.containerInfo.firstChild),_i=i,mn=!0,Bi=null,a=lp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Vs(),c===h){i=vr(n,i,a);break e}ni(n,i,c,a)}i=i.child}return i;case 5:return fp(i),n===null&&uu(i),c=i.type,h=i.pendingProps,g=n!==null?n.memoizedProps:null,C=h.children,tu(c,h)?C=null:g!==null&&tu(c,g)&&(i.flags|=32),Kp(n,i),ni(n,i,C,a),i.child;case 6:return n===null&&uu(i),null;case 13:return Zp(n,i,a);case 4:return _u(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Gs(i,null,c,a):ni(n,i,c,a),i.child;case 11:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:zi(c,h),Gp(n,i,c,h,a);case 7:return ni(n,i,i.pendingProps,a),i.child;case 8:return ni(n,i,i.pendingProps.children,a),i.child;case 12:return ni(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,h=i.pendingProps,g=i.memoizedProps,C=h.value,un($o,c._currentValue),c._currentValue=C,g!==null)if(ki(g.value,C)){if(g.children===h.children&&!li.current){i=vr(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var z=g.dependencies;if(z!==null){C=g.child;for(var W=z.firstContext;W!==null;){if(W.context===c){if(g.tag===1){W=gr(-1,a&-a),W.tag=2;var me=g.updateQueue;if(me!==null){me=me.shared;var Re=me.pending;Re===null?W.next=W:(W.next=Re.next,Re.next=W),me.pending=W}}g.lanes|=a,W=g.alternate,W!==null&&(W.lanes|=a),mu(g.return,a,i),z.lanes|=a;break}W=W.next}}else if(g.tag===10)C=g.type===i.type?null:g.child;else if(g.tag===18){if(C=g.return,C===null)throw Error(t(341));C.lanes|=a,z=C.alternate,z!==null&&(z.lanes|=a),mu(C,a,i),C=g.sibling}else C=g.child;if(C!==null)C.return=g;else for(C=g;C!==null;){if(C===i){C=null;break}if(g=C.sibling,g!==null){g.return=C.return,C=g;break}C=C.return}g=C}ni(n,i,h.children,a),i=i.child}return i;case 9:return h=i.type,c=i.pendingProps.children,js(i,a),h=bi(h),c=c(h),i.flags|=1,ni(n,i,c,a),i.child;case 14:return c=i.type,h=zi(c,i.pendingProps),h=zi(c.type,h),Wp(n,i,c,h,a);case 15:return jp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:zi(c,h),ll(n,i),i.tag=1,ci(c)?(n=!0,Wo(i)):n=!1,js(i,a),Op(i,c,h),Pu(i,c,h,a),Uu(null,i,c,!0,n,a);case 19:return Jp(n,i,a);case 22:return Xp(n,i,a)}throw Error(t(156,i.tag))};function Tm(n,i){return On(n,i)}function T_(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pi(n,i,a,c){return new T_(n,i,a,c)}function th(n){return n=n.prototype,!(!n||!n.isReactComponent)}function E_(n){if(typeof n=="function")return th(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Q)return 11;if(n===J)return 14}return 2}function jr(n,i){var a=n.alternate;return a===null?(a=Pi(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function xl(n,i,a,c,h,g){var C=2;if(c=n,typeof n=="function")th(n)&&(C=1);else if(typeof n=="string")C=5;else e:switch(n){case T:return vs(a.children,h,g,i);case A:C=8,h|=8;break;case U:return n=Pi(12,a,i,h|2),n.elementType=U,n.lanes=g,n;case he:return n=Pi(13,a,i,h),n.elementType=he,n.lanes=g,n;case F:return n=Pi(19,a,i,h),n.elementType=F,n.lanes=g,n;case ee:return yl(a,h,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case H:C=10;break e;case K:C=9;break e;case Q:C=11;break e;case J:C=14;break e;case ue:C=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Pi(C,a,i,h),i.elementType=n,i.type=c,i.lanes=g,i}function vs(n,i,a,c){return n=Pi(7,n,c,i),n.lanes=a,n}function yl(n,i,a,c){return n=Pi(22,n,c,i),n.elementType=ee,n.lanes=a,n.stateNode={isHidden:!1},n}function nh(n,i,a){return n=Pi(6,n,null,i),n.lanes=a,n}function ih(n,i,a){return i=Pi(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function w_(n,i,a,c,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yt(0),this.expirationTimes=Yt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yt(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function rh(n,i,a,c,h,g,C,z,W){return n=new w_(n,i,a,z,W),i===1?(i=1,g===!0&&(i|=8)):i=0,g=Pi(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},vu(g),n}function C_(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Em(n){if(!n)return Or;n=n._reactInternals;e:{if(Vt(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ci(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(ci(a))return Qf(n,a,i)}return i}function wm(n,i,a,c,h,g,C,z,W){return n=rh(a,c,!0,n,h,g,C,z,W),n.context=Em(null),a=n.current,c=ii(),h=Gr(a),g=gr(c,h),g.callback=i??null,Br(a,g,h),n.current.lanes=h,yn(n,h,c),di(n,c),n}function Sl(n,i,a,c){var h=i.current,g=ii(),C=Gr(h);return a=Em(a),i.context===null?i.context=a:i.pendingContext=a,i=gr(g,C),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Br(h,i,C),n!==null&&(Gi(n,h,C,g),Qo(n,h,C)),C}function Ml(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Cm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function sh(n,i){Cm(n,i),(n=n.alternate)&&Cm(n,i)}function A_(){return null}var Am=typeof reportError=="function"?reportError:function(n){console.error(n)};function ah(n){this._internalRoot=n}Tl.prototype.render=ah.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Sl(n,i,null,null)},Tl.prototype.unmount=ah.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;ps(function(){Sl(null,n,null,null)}),i[hr]=null}};function Tl(n){this._internalRoot=n}Tl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Zi();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Pr.length&&i!==0&&i<Pr[a].priority;a++);Pr.splice(a,0,n),a===0&&ff(n)}};function oh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function El(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function bm(){}function b_(n,i,a,c,h){if(h){if(typeof c=="function"){var g=c;c=function(){var me=Ml(C);g.call(me)}}var C=wm(i,c,n,0,null,!1,!1,"",bm);return n._reactRootContainer=C,n[hr]=C.current,Ba(n.nodeType===8?n.parentNode:n),ps(),C}for(;h=n.lastChild;)n.removeChild(h);if(typeof c=="function"){var z=c;c=function(){var me=Ml(W);z.call(me)}}var W=rh(n,0,!1,null,null,!1,!1,"",bm);return n._reactRootContainer=W,n[hr]=W.current,Ba(n.nodeType===8?n.parentNode:n),ps(function(){Sl(i,W,a,c)}),W}function wl(n,i,a,c,h){var g=a._reactRootContainer;if(g){var C=g;if(typeof h=="function"){var z=h;h=function(){var W=Ml(C);z.call(W)}}Sl(i,C,n,h)}else C=b_(a,i,n,h,c);return Ml(C)}Nn=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=lt(i.pendingLanes);a!==0&&(bn(i,a|1),di(i,kt()),(Gt&6)===0&&($s=kt()+500,Fr()))}break;case 13:ps(function(){var c=mr(n,1);if(c!==null){var h=ii();Gi(c,n,1,h)}}),sh(n,1)}},Nr=function(n){if(n.tag===13){var i=mr(n,134217728);if(i!==null){var a=ii();Gi(i,n,134217728,a)}sh(n,134217728)}},Fi=function(n){if(n.tag===13){var i=Gr(n),a=mr(n,i);if(a!==null){var c=ii();Gi(a,n,i,c)}sh(n,i)}},Zi=function(){return at},Bt=function(n,i){var a=at;try{return at=n,i()}finally{at=a}},xe=function(n,i,a){switch(i){case"input":if(yt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var h=Vo(c);if(!h)throw Error(t(90));Mt(c),yt(c,h)}}}break;case"textarea":j(n,a);break;case"select":i=a.value,i!=null&&St(n,!!a.multiple,i,!1)}},Ue=Qu,ke=ps;var N_={usingClientEntryPoint:!1,Events:[Va,Fs,Vo,ve,Be,Qu]},no={findFiberByHostInstance:as,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},R_={bundleType:no.bundleType,version:no.version,rendererPackageName:no.rendererPackageName,rendererConfig:no.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Jt(n),n===null?null:n.stateNode},findFiberByHostInstance:no.findFiberByHostInstance||A_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cl.isDisabled&&Cl.supportsFiber)try{G=Cl.inject(R_),se=Cl}catch{}}return fi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N_,fi.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!oh(i))throw Error(t(200));return C_(n,i,null,a)},fi.createRoot=function(n,i){if(!oh(n))throw Error(t(299));var a=!1,c="",h=Am;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=rh(n,1,!1,null,null,a,!1,c,h),n[hr]=i.current,Ba(n.nodeType===8?n.parentNode:n),new ah(i)},fi.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Jt(i),n=n===null?null:n.stateNode,n},fi.flushSync=function(n){return ps(n)},fi.hydrate=function(n,i,a){if(!El(i))throw Error(t(200));return wl(null,n,i,!0,a)},fi.hydrateRoot=function(n,i,a){if(!oh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,h=!1,g="",C=Am;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(C=a.onRecoverableError)),i=wm(i,null,n,1,a??null,h,!1,g,C),n[hr]=i.current,Ba(n),c)for(n=0;n<c.length;n++)a=c[n],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new Tl(i)},fi.render=function(n,i,a){if(!El(i))throw Error(t(200));return wl(null,n,i,!1,a)},fi.unmountComponentAtNode=function(n){if(!El(n))throw Error(t(40));return n._reactRootContainer?(ps(function(){wl(null,null,n,!1,function(){n._reactRootContainer=null,n[hr]=null})}),!0):!1},fi.unstable_batchedUpdates=Qu,fi.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!El(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return wl(n,i,a,!1,c)},fi.version="18.3.1-next-f1338f8080-20240426",fi}var Om;function B_(){if(Om)return uh.exports;Om=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),uh.exports=k_(),uh.exports}var Fm;function z_(){if(Fm)return Al;Fm=1;var s=B_();return Al.createRoot=s.createRoot,Al.hydrateRoot=s.hydrateRoot,Al}var H_=z_();const V_=J0(H_);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),eg=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var W_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_=It.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...d},p)=>It.createElement("svg",{ref:p,...W_,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:eg("lucide",o),...d},[...u.map(([m,x])=>It.createElement(m,x)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=(s,e)=>{const t=It.forwardRef(({className:r,...o},l)=>It.createElement(j_,{ref:l,iconNode:e,className:eg(`lucide-${G_(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=on("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=on("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=on("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _s=on("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=on("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qs=on("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Js=on("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=on("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=on("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=on("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=on("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=on("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=on("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_=on("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=on("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_=on("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=on("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=on("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=on("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=on("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nl=on("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=on("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=on("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=on("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=on("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=on("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=on("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gd="187",xa={ROTATE:0,DOLLY:1,PAN:2},_a={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ax=0,zm=1,ox=2,oc=1,ig=2,mo=3,ws=0,mi=1,Yi=2,ya=0,vo=1,Hm=2,Vm=3,Gm=4,lx=5,ga=100,cx=101,ux=102,hx=103,dx=104,fx=200,px=201,mx=202,gx=203,rg=204,sg=205,vx=206,_x=207,xx=208,yx=209,Sx=210,Mx=211,Tx=212,Ex=213,wx=214,$h=0,Zh=1,Qh=2,So=3,Jh=4,ed=5,td=6,nd=7,ag=0,Cx=1,Ax=2,Cr=0,og=1,lg=2,cg=3,Wd=4,ug=5,hg=6,dg=7,fg=300,Ma=301,Mo=302,lc=303,ph=304,id=1e3,wr=1001,rd=1002,Xn=1003,bx=1004,Rl=1005,ai=1006,mh=1007,Jr=1008,Ti=1009,pg=1010,mg=1011,To=1012,jd=1013,cr=1014,ar=1015,ur=1016,Xd=1017,Kd=1018,Ta=1020,gg=35902,vg=35899,_g=1021,xg=1022,or=1023,ns=1026,es=1027,yg=1028,Yd=1029,Cs=1030,qd=1031,$d=1033,cc=33776,uc=33777,hc=33778,dc=33779,sd=35840,ad=35841,od=35842,ld=35843,cd=36196,ud=37492,hd=37496,dd=37488,fd=37489,gc=37490,pd=37491,md=37808,gd=37809,vd=37810,_d=37811,xd=37812,yd=37813,Sd=37814,Md=37815,Td=37816,Ed=37817,wd=37818,Cd=37819,Ad=37820,bd=37821,Nd=36492,Rd=36494,Pd=36495,Dd=36283,Ld=36284,vc=36285,Id=36286,Nx=3200,Ud=0,Rx=1,Qr="",Ui="srgb",_c="srgb-linear",xc="linear",nn="srgb",gh=7680,Px=519,Dx=512,Lx=513,Ix=514,Sg=515,Ux=516,Ox=517,Mg=518,Tg=519,Eg=35044,Wm="300 es",qi=2e3,Eo=2001;function Fx(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function yc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function kx(){const s=yc("canvas");return s.style.display="block",s}const jm={};function Sc(...s){const e="THREE."+s.shift();console.log(e,...s)}function wg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ft(...s){s=wg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Wt(...s){s=wg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function fc(...s){const e=s.join(" ");e in jm||(jm[e]=!0,ft(...s))}function Bx(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const zx={[$h]:$h,[Qh]:td,[Jh]:Jh,[So]:ed,[Zh]:Zh,[td]:Qh,[nd]:nd,[ed]:So};class ss{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_o=Math.PI/180,Od=180/Math.PI;function bs(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Qn[s&255]+Qn[s>>8&255]+Qn[s>>16&255]+Qn[s>>24&255]+"-"+Qn[e&255]+Qn[e>>8&255]+"-"+Qn[e>>16&15|64]+Qn[e>>24&255]+"-"+Qn[t&63|128]+Qn[t>>8&255]+"-"+Qn[t>>16&255]+Qn[t>>24&255]+Qn[r&255]+Qn[r>>8&255]+Qn[r>>16&255]+Qn[r>>24&255]).toLowerCase()}function Pt(s,e,t){return Math.max(e,Math.min(t,s))}function Hx(s,e){return(s%e+e)%e}function vh(s,e,t){return(1-t)*s+t*e}function Vx(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Nc(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Cg(s,e){if(e.constructor===Float32Array)return s;const t=Nc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function Ag(s,e){if(e.constructor===Float32Array)return s;const t=Nc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const Gx={DEG2RAD:_o},lf=class lf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Pt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Pt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};lf.prototype.isVector2=!0;let Ye=lf;class is{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,d){let p=r[o+0],m=r[o+1],x=r[o+2],M=r[o+3],_=l[u+0],S=l[u+1],E=l[u+2],R=l[u+3];if(M!==R||p!==_||m!==S||x!==E){let v=p*_+m*S+x*E+M*R;v<0&&(_=-_,S=-S,E=-E,R=-R,v=-v);let y=1-d;if(v<.9995){const D=Math.acos(v),k=Math.sin(D);y=Math.sin(y*D)/k,d=Math.sin(d*D)/k,p=p*y+_*d,m=m*y+S*d,x=x*y+E*d,M=M*y+R*d}else{p=p*y+_*d,m=m*y+S*d,x=x*y+E*d,M=M*y+R*d;const D=1/Math.sqrt(p*p+m*m+x*x+M*M);p*=D,m*=D,x*=D,M*=D}}e[t]=p,e[t+1]=m,e[t+2]=x,e[t+3]=M}static multiplyQuaternionsFlat(e,t,r,o,l,u){const d=r[o],p=r[o+1],m=r[o+2],x=r[o+3],M=l[u],_=l[u+1],S=l[u+2],E=l[u+3];return e[t]=d*E+x*M+p*S-m*_,e[t+1]=p*E+x*_+m*M-d*S,e[t+2]=m*E+x*S+d*_-p*M,e[t+3]=x*E-d*M-p*_-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,d=Math.cos,p=Math.sin,m=d(r/2),x=d(o/2),M=d(l/2),_=p(r/2),S=p(o/2),E=p(l/2);switch(u){case"XYZ":this._x=_*x*M+m*S*E,this._y=m*S*M-_*x*E,this._z=m*x*E+_*S*M,this._w=m*x*M-_*S*E;break;case"YXZ":this._x=_*x*M+m*S*E,this._y=m*S*M-_*x*E,this._z=m*x*E-_*S*M,this._w=m*x*M+_*S*E;break;case"ZXY":this._x=_*x*M-m*S*E,this._y=m*S*M+_*x*E,this._z=m*x*E+_*S*M,this._w=m*x*M-_*S*E;break;case"ZYX":this._x=_*x*M-m*S*E,this._y=m*S*M+_*x*E,this._z=m*x*E-_*S*M,this._w=m*x*M+_*S*E;break;case"YZX":this._x=_*x*M+m*S*E,this._y=m*S*M+_*x*E,this._z=m*x*E-_*S*M,this._w=m*x*M-_*S*E;break;case"XZY":this._x=_*x*M-m*S*E,this._y=m*S*M-_*x*E,this._z=m*x*E+_*S*M,this._w=m*x*M+_*S*E;break;default:ft("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],d=t[5],p=t[9],m=t[2],x=t[6],M=t[10],_=r+d+M;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(x-p)*S,this._y=(l-m)*S,this._z=(u-o)*S}else if(r>d&&r>M){const S=2*Math.sqrt(1+r-d-M);this._w=(x-p)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+m)/S}else if(d>M){const S=2*Math.sqrt(1+d-r-M);this._w=(l-m)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(p+x)/S}else{const S=2*Math.sqrt(1+M-r-d);this._w=(u-o)/S,this._x=(l+m)/S,this._y=(p+x)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,d=t._x,p=t._y,m=t._z,x=t._w;return this._x=r*x+u*d+o*m-l*p,this._y=o*x+u*p+l*d-r*m,this._z=l*x+u*m+r*p-o*d,this._w=u*x-r*d-o*p-l*m,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,l=-l,u=-u,d=-d);let p=1-t;if(d<.9995){const m=Math.acos(d),x=Math.sin(m);p=Math.sin(p*m)/x,t=Math.sin(t*m)/x,this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+u*t,this._onChangeCallback()}else this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const cf=class cf{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,d=e.z,p=e.w,m=2*(u*o-d*r),x=2*(d*t-l*o),M=2*(l*r-u*t);return this.x=t+p*m+u*M-d*x,this.y=r+p*x+d*m-l*M,this.z=o+p*M+l*x-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Pt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,d=t.y,p=t.z;return this.x=o*p-l*d,this.y=l*u-r*p,this.z=r*d-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return _h.copy(this).projectOnVector(e),this.sub(_h)}reflect(e){return this.sub(_h.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Pt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};cf.prototype.isVector3=!0;let N=cf;const _h=new N,Xm=new is,uf=class uf{constructor(e,t,r,o,l,u,d,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,p,m)}set(e,t,r,o,l,u,d,p,m){const x=this.elements;return x[0]=e,x[1]=o,x[2]=d,x[3]=t,x[4]=l,x[5]=p,x[6]=r,x[7]=u,x[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[3],p=r[6],m=r[1],x=r[4],M=r[7],_=r[2],S=r[5],E=r[8],R=o[0],v=o[3],y=o[6],D=o[1],k=o[4],P=o[7],B=o[2],I=o[5],T=o[8];return l[0]=u*R+d*D+p*B,l[3]=u*v+d*k+p*I,l[6]=u*y+d*P+p*T,l[1]=m*R+x*D+M*B,l[4]=m*v+x*k+M*I,l[7]=m*y+x*P+M*T,l[2]=_*R+S*D+E*B,l[5]=_*v+S*k+E*I,l[8]=_*y+S*P+E*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],p=e[6],m=e[7],x=e[8];return t*u*x-t*d*m-r*l*x+r*d*p+o*l*m-o*u*p}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],p=e[6],m=e[7],x=e[8],M=x*u-d*m,_=d*p-x*l,S=m*l-u*p,E=t*M+r*_+o*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=M*R,e[1]=(o*m-x*r)*R,e[2]=(d*r-o*u)*R,e[3]=_*R,e[4]=(x*t-o*p)*R,e[5]=(o*l-d*t)*R,e[6]=S*R,e[7]=(r*p-m*t)*R,e[8]=(u*t-r*l)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,d){const p=Math.cos(l),m=Math.sin(l);return this.set(r*p,r*m,-r*(p*u+m*d)+u+e,-o*m,o*p,-o*(-m*u+p*d)+d+t,0,0,1),this}scale(e,t){return fc("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xh.makeScale(e,t)),this}rotate(e){return fc("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xh.makeRotation(-e)),this}translate(e,t){return fc("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};uf.prototype.isMatrix3=!0;let _t=uf;const xh=new _t,Km=new _t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ym=new _t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wx(){const s={enabled:!0,workingColorSpace:_c,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===nn&&(o.r=Ar(o.r),o.g=Ar(o.g),o.b=Ar(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===nn&&(o.r=Sa(o.r),o.g=Sa(o.g),o.b=Sa(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Qr?xc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[u].fromXYZ).multiply(this.spaces[l].toXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[_c]:{primaries:e,whitePoint:r,transfer:xc,toXYZ:Km,fromXYZ:Ym,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ui},outputColorSpaceConfig:{drawingBufferColorSpace:Ui}},[Ui]:{primaries:e,whitePoint:r,transfer:nn,toXYZ:Km,fromXYZ:Ym,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ui}}}),s}const zt=Wx();function Ar(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Sa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ea;class jx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ea===void 0&&(ea=yc("canvas")),ea.width=e.width,ea.height=e.height;const o=ea.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=ea}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=yc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=Ar(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Ar(t[r]/255)*255):t[r]=Ar(t[r]);return{data:t,width:e.width,height:e.height}}else return ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xx=0;class Zd{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=bs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?l.push(yh(o[u].image)):l.push(yh(o[u]))}else l=yh(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function yh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?jx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ft("Texture: Unable to serialize Texture."),{})}let Kx=0;const Sh=new N;class ei extends ss{constructor(e=ei.DEFAULT_IMAGE,t=ei.DEFAULT_MAPPING,r=wr,o=wr,l=ai,u=Jr,d=or,p=Ti,m=ei.DEFAULT_ANISOTROPY,x=Qr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kx++}),this.uuid=bs(),this.name="",this.source=new Zd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Sh).x}get height(){return this.source.getSize(Sh).y}get depth(){return this.source.getSize(Sh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){ft(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ft(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case id:e.x=e.x-Math.floor(e.x);break;case wr:e.x=e.x<0?0:1;break;case rd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case id:e.y=e.y-Math.floor(e.y);break;case wr:e.y=e.y<0?0:1;break;case rd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=fg;ei.DEFAULT_ANISOTROPY=1;const hf=class hf{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const p=e.elements,m=p[0],x=p[4],M=p[8],_=p[1],S=p[5],E=p[9],R=p[2],v=p[6],y=p[10];if(Math.abs(x-_)<.01&&Math.abs(M-R)<.01&&Math.abs(E-v)<.01){if(Math.abs(x+_)<.1&&Math.abs(M+R)<.1&&Math.abs(E+v)<.1&&Math.abs(m+S+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const k=(m+1)/2,P=(S+1)/2,B=(y+1)/2,I=(x+_)/4,T=(M+R)/4,A=(E+v)/4;return k>P&&k>B?k<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(k),o=I/r,l=T/r):P>B?P<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(P),r=I/o,l=A/o):B<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(B),r=T/l,o=A/l),this.set(r,o,l,t),this}let D=Math.sqrt((v-E)*(v-E)+(M-R)*(M-R)+(_-x)*(_-x));return Math.abs(D)<.001&&(D=1),this.x=(v-E)/D,this.y=(M-R)/D,this.z=(_-x)/D,this.w=Math.acos((m+S+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this.w=Pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this.w=Pt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Pt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};hf.prototype.isVector4=!0;let xn=hf;class Yx extends ss{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new xn(0,0,e,t),this.scissorTest=!1,this.viewport=new xn(0,0,e,t),this.textures=[];const o=r.count;for(let l=0;l<o;l++)this.textures[l]=new ei({width:e,height:t,depth:r.depth}),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:ai,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Zd(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class lr extends Yx{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class bg extends ei{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qx extends ei{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const bc=class bc{constructor(e,t,r,o,l,u,d,p,m,x,M,_,S,E,R,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,p,m,x,M,_,S,E,R,v)}set(e,t,r,o,l,u,d,p,m,x,M,_,S,E,R,v){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=o,y[1]=l,y[5]=u,y[9]=d,y[13]=p,y[2]=m,y[6]=x,y[10]=M,y[14]=_,y[3]=S,y[7]=E,y[11]=R,y[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/ta.setFromMatrixColumn(e,0).length(),l=1/ta.setFromMatrixColumn(e,1).length(),u=1/ta.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),p=Math.cos(o),m=Math.sin(o),x=Math.cos(l),M=Math.sin(l);if(e.order==="XYZ"){const _=u*x,S=u*M,E=d*x,R=d*M;t[0]=p*x,t[4]=-p*M,t[8]=m,t[1]=S+E*m,t[5]=_-R*m,t[9]=-d*p,t[2]=R-_*m,t[6]=E+S*m,t[10]=u*p}else if(e.order==="YXZ"){const _=p*x,S=p*M,E=m*x,R=m*M;t[0]=_+R*d,t[4]=E*d-S,t[8]=u*m,t[1]=u*M,t[5]=u*x,t[9]=-d,t[2]=S*d-E,t[6]=R+_*d,t[10]=u*p}else if(e.order==="ZXY"){const _=p*x,S=p*M,E=m*x,R=m*M;t[0]=_-R*d,t[4]=-u*M,t[8]=E+S*d,t[1]=S+E*d,t[5]=u*x,t[9]=R-_*d,t[2]=-u*m,t[6]=d,t[10]=u*p}else if(e.order==="ZYX"){const _=u*x,S=u*M,E=d*x,R=d*M;t[0]=p*x,t[4]=E*m-S,t[8]=_*m+R,t[1]=p*M,t[5]=R*m+_,t[9]=S*m-E,t[2]=-m,t[6]=d*p,t[10]=u*p}else if(e.order==="YZX"){const _=u*p,S=u*m,E=d*p,R=d*m;t[0]=p*x,t[4]=R-_*M,t[8]=E*M+S,t[1]=M,t[5]=u*x,t[9]=-d*x,t[2]=-m*x,t[6]=S*M+E,t[10]=_-R*M}else if(e.order==="XZY"){const _=u*p,S=u*m,E=d*p,R=d*m;t[0]=p*x,t[4]=-M,t[8]=m*x,t[1]=_*M+R,t[5]=u*x,t[9]=S*M-E,t[2]=E*M-S,t[6]=d*x,t[10]=R*M+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($x,e,Zx)}lookAt(e,t,r){const o=this.elements;return Si.subVectors(e,t),Si.lengthSq()===0&&(Si.z=1),Si.normalize(),Kr.crossVectors(r,Si),Kr.lengthSq()===0&&(Math.abs(r.z)===1?Si.x+=1e-4:Si.z+=1e-4,Si.normalize(),Kr.crossVectors(r,Si)),Kr.normalize(),Pl.crossVectors(Si,Kr),o[0]=Kr.x,o[4]=Pl.x,o[8]=Si.x,o[1]=Kr.y,o[5]=Pl.y,o[9]=Si.y,o[2]=Kr.z,o[6]=Pl.z,o[10]=Si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[4],p=r[8],m=r[12],x=r[1],M=r[5],_=r[9],S=r[13],E=r[2],R=r[6],v=r[10],y=r[14],D=r[3],k=r[7],P=r[11],B=r[15],I=o[0],T=o[4],A=o[8],U=o[12],H=o[1],K=o[5],Q=o[9],he=o[13],F=o[2],J=o[6],ue=o[10],ee=o[14],Z=o[3],q=o[7],$=o[11],O=o[15];return l[0]=u*I+d*H+p*F+m*Z,l[4]=u*T+d*K+p*J+m*q,l[8]=u*A+d*Q+p*ue+m*$,l[12]=u*U+d*he+p*ee+m*O,l[1]=x*I+M*H+_*F+S*Z,l[5]=x*T+M*K+_*J+S*q,l[9]=x*A+M*Q+_*ue+S*$,l[13]=x*U+M*he+_*ee+S*O,l[2]=E*I+R*H+v*F+y*Z,l[6]=E*T+R*K+v*J+y*q,l[10]=E*A+R*Q+v*ue+y*$,l[14]=E*U+R*he+v*ee+y*O,l[3]=D*I+k*H+P*F+B*Z,l[7]=D*T+k*K+P*J+B*q,l[11]=D*A+k*Q+P*ue+B*$,l[15]=D*U+k*he+P*ee+B*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],d=e[5],p=e[9],m=e[13],x=e[2],M=e[6],_=e[10],S=e[14],E=e[3],R=e[7],v=e[11],y=e[15],D=p*S-m*_,k=d*S-m*M,P=d*_-p*M,B=u*S-m*x,I=u*_-p*x,T=u*M-d*x;return t*(R*D-v*k+y*P)-r*(E*D-v*B+y*I)+o*(E*k-R*B+y*T)-l*(E*P-R*I+v*T)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[1],u=e[5],d=e[9],p=e[2],m=e[6],x=e[10];return t*(u*x-d*m)-r*(l*x-d*p)+o*(l*m-u*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],p=e[6],m=e[7],x=e[8],M=e[9],_=e[10],S=e[11],E=e[12],R=e[13],v=e[14],y=e[15],D=t*d-r*u,k=t*p-o*u,P=t*m-l*u,B=r*p-o*d,I=r*m-l*d,T=o*m-l*p,A=x*R-M*E,U=x*v-_*E,H=x*y-S*E,K=M*v-_*R,Q=M*y-S*R,he=_*y-S*v,F=D*he-k*Q+P*K+B*H-I*U+T*A;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/F;return e[0]=(d*he-p*Q+m*K)*J,e[1]=(o*Q-r*he-l*K)*J,e[2]=(R*T-v*I+y*B)*J,e[3]=(_*I-M*T-S*B)*J,e[4]=(p*H-u*he-m*U)*J,e[5]=(t*he-o*H+l*U)*J,e[6]=(v*P-E*T-y*k)*J,e[7]=(x*T-_*P+S*k)*J,e[8]=(u*Q-d*H+m*A)*J,e[9]=(r*H-t*Q-l*A)*J,e[10]=(E*I-R*P+y*D)*J,e[11]=(M*P-x*I-S*D)*J,e[12]=(d*U-u*K-p*A)*J,e[13]=(t*K-r*U+o*A)*J,e[14]=(R*k-E*B-v*D)*J,e[15]=(x*B-M*k+_*D)*J,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,d=e.y,p=e.z,m=l*u,x=l*d;return this.set(m*u+r,m*d-o*p,m*p+o*d,0,m*d+o*p,x*d+r,x*p-o*u,0,m*p-o*d,x*p+o*u,l*p*p+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,d=t._z,p=t._w,m=l+l,x=u+u,M=d+d,_=l*m,S=l*x,E=l*M,R=u*x,v=u*M,y=d*M,D=p*m,k=p*x,P=p*M,B=r.x,I=r.y,T=r.z;return o[0]=(1-(R+y))*B,o[1]=(S+P)*B,o[2]=(E-k)*B,o[3]=0,o[4]=(S-P)*I,o[5]=(1-(_+y))*I,o[6]=(v+D)*I,o[7]=0,o[8]=(E+k)*T,o[9]=(v-D)*T,o[10]=(1-(_+R))*T,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let u=ta.set(o[0],o[1],o[2]).length();const d=ta.set(o[4],o[5],o[6]).length(),p=ta.set(o[8],o[9],o[10]).length();l<0&&(u=-u),Wi.copy(this);const m=1/u,x=1/d,M=1/p;return Wi.elements[0]*=m,Wi.elements[1]*=m,Wi.elements[2]*=m,Wi.elements[4]*=x,Wi.elements[5]*=x,Wi.elements[6]*=x,Wi.elements[8]*=M,Wi.elements[9]*=M,Wi.elements[10]*=M,t.setFromRotationMatrix(Wi),r.x=u,r.y=d,r.z=p,this}makePerspective(e,t,r,o,l,u,d=qi,p=!1){const m=this.elements,x=2*l/(t-e),M=2*l/(r-o),_=(t+e)/(t-e),S=(r+o)/(r-o);let E,R;if(p)E=l/(u-l),R=u*l/(u-l);else if(d===qi)E=-(u+l)/(u-l),R=-2*u*l/(u-l);else if(d===Eo)E=-u/(u-l),R=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=x,m[4]=0,m[8]=_,m[12]=0,m[1]=0,m[5]=M,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=E,m[14]=R,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,r,o,l,u,d=qi,p=!1){const m=this.elements,x=2/(t-e),M=2/(r-o),_=-(t+e)/(t-e),S=-(r+o)/(r-o);let E,R;if(p)E=1/(u-l),R=u/(u-l);else if(d===qi)E=-2/(u-l),R=-(u+l)/(u-l);else if(d===Eo)E=-1/(u-l),R=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=x,m[4]=0,m[8]=0,m[12]=_,m[1]=0,m[5]=M,m[9]=0,m[13]=S,m[2]=0,m[6]=0,m[10]=E,m[14]=R,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};bc.prototype.isMatrix4=!0;let sn=bc;const ta=new N,Wi=new sn,$x=new N(0,0,0),Zx=new N(1,1,1),Kr=new N,Pl=new N,Si=new N,qm=new sn,$m=new is;class rs{constructor(e=0,t=0,r=0,o=rs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],d=o[8],p=o[1],m=o[5],x=o[9],M=o[2],_=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(Pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(_,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-M,l),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-M,S),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Pt(M,-1,1)),Math.abs(M)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(Pt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,m),this._y=Math.atan2(-M,l)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,m),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-x,S),this._y=0);break;default:ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return qm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $m.setFromEuler(this),this.setFromQuaternion($m,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rs.DEFAULT_ORDER="XYZ";class Qd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qx=0;const Zm=new N,na=new is,xr=new sn,Dl=new N,so=new N,Jx=new N,ey=new is,Qm=new N(1,0,0),Jm=new N(0,1,0),e0=new N(0,0,1),t0={type:"added"},ty={type:"removed"},ia={type:"childadded",child:null},Mh={type:"childremoved",child:null};class Ln extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qx++}),this.uuid=bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const e=new N,t=new rs,r=new is,o=new N(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new sn},normalMatrix:{value:new _t}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return na.setFromAxisAngle(e,t),this.quaternion.multiply(na),this}rotateOnWorldAxis(e,t){return na.setFromAxisAngle(e,t),this.quaternion.premultiply(na),this}rotateX(e){return this.rotateOnAxis(Qm,e)}rotateY(e){return this.rotateOnAxis(Jm,e)}rotateZ(e){return this.rotateOnAxis(e0,e)}translateOnAxis(e,t){return Zm.copy(e).applyQuaternion(this.quaternion),this.position.add(Zm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qm,e)}translateY(e){return this.translateOnAxis(Jm,e)}translateZ(e){return this.translateOnAxis(e0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Dl.copy(e):Dl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),so.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xr.lookAt(so,Dl,this.up):xr.lookAt(Dl,so,this.up),this.quaternion.setFromRotationMatrix(xr),o&&(xr.extractRotation(o.matrixWorld),na.setFromRotationMatrix(xr),this.quaternion.premultiply(na.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Wt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(t0),ia.child=e,this.dispatchEvent(ia),ia.child=null):Wt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ty),Mh.child=e,this.dispatchEvent(Mh),Mh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xr.multiply(e.parent.matrixWorld)),e.applyMatrix4(xr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(t0),ia.child=e,this.dispatchEvent(ia),ia.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,e,Jx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,ey,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,x=p.length;m<x;m++){const M=p[m];l(e.shapes,M)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(l(e.materials,this.material[p]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];o.animations.push(l(e.animations,p))}}if(t){const d=u(e.geometries),p=u(e.materials),m=u(e.textures),x=u(e.images),M=u(e.shapes),_=u(e.skeletons),S=u(e.animations),E=u(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),x.length>0&&(r.images=x),M.length>0&&(r.shapes=M),_.length>0&&(r.skeletons=_),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=o,r;function u(d){const p=[];for(const m in d){const x=d[m];delete x.metadata,p.push(x)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ln.DEFAULT_UP=new N(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Vn extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ny={type:"move"};class Th{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const R of e.hand.values()){const v=t.getJointPose(R,r),y=this._getHandJoint(m,R);v!==null&&(y.matrix.fromArray(v.transform.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=v.radius),y.visible=v!==null}const x=m.joints["index-finger-tip"],M=m.joints["thumb-tip"],_=x.position.distanceTo(M.position),S=.02,E=.005;m.inputState.pinching&&_>S+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&_<=S-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(ny)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Vn;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Ng={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yr={h:0,s:0,l:0},Ll={h:0,s:0,l:0};function Eh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ut{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=zt.workingColorSpace){return this.r=e,this.g=t,this.b=r,zt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=zt.workingColorSpace){if(e=Hx(e,1),t=Pt(t,0,1),r=Pt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=Eh(u,l,e+1/3),this.g=Eh(u,l,e),this.b=Eh(u,l,e-1/3)}return zt.colorSpaceToWorking(this,o),this}setStyle(e,t=Ui){function r(l){l!==void 0&&parseFloat(l)<1&&ft("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseFloat(l[1]))/100,Math.min(100,parseFloat(l[2]))/100,Math.min(100,parseFloat(l[3]))/100,t);break;case"hsl":case"hsla":if(l=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:ft("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);ft("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ui){const r=Ng[e.toLowerCase()];return r!==void 0?this.setHex(r,t):ft("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ar(e.r),this.g=Ar(e.g),this.b=Ar(e.b),this}copyLinearToSRGB(e){return this.r=Sa(e.r),this.g=Sa(e.g),this.b=Sa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ui){return zt.workingToColorSpace(Jn.copy(this),e),Math.round(Pt(Jn.r*255,0,255))*65536+Math.round(Pt(Jn.g*255,0,255))*256+Math.round(Pt(Jn.b*255,0,255))}getHexString(e=Ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=zt.workingColorSpace){zt.workingToColorSpace(Jn.copy(this),t);const r=Jn.r,o=Jn.g,l=Jn.b,u=Math.max(r,o,l),d=Math.min(r,o,l);let p,m;const x=(d+u)/2;if(d===u)p=0,m=0;else{const M=u-d;switch(m=x<=.5?M/(u+d):M/(2-u-d),u){case r:p=(o-l)/M+(o<l?6:0);break;case o:p=(l-r)/M+2;break;case l:p=(r-o)/M+4;break}p/=6}return e.h=p,e.s=m,e.l=x,e}getRGB(e,t=zt.workingColorSpace){return zt.workingToColorSpace(Jn.copy(this),t),e.r=Jn.r,e.g=Jn.g,e.b=Jn.b,e}getStyle(e=Ui){zt.workingToColorSpace(Jn.copy(this),e);const t=Jn.r,r=Jn.g,o=Jn.b;return e!==Ui?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Yr),this.setHSL(Yr.h+e,Yr.s+t,Yr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Yr),e.getHSL(Ll);const r=vh(Yr.h,Ll.h,t),o=vh(Yr.s,Ll.s,t),l=vh(Yr.l,Ll.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jn=new Ut;Ut.NAMES=Ng;class Jd{constructor(e,t=1,r=1e3){this.isFog=!0,this.name="",this.color=new Ut(e),this.near=t,this.far=r}clone(){return new Jd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class iy extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rs,this.environmentIntensity=1,this.environmentRotation=new rs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ji=new N,yr=new N,wh=new N,Sr=new N,ra=new N,sa=new N,n0=new N,Ch=new N,Ah=new N,bh=new N,Nh=new xn,Rh=new xn,Ph=new xn;class Ei{constructor(e=new N,t=new N,r=new N){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),ji.subVectors(e,t),o.cross(ji);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){ji.subVectors(o,t),yr.subVectors(r,t),wh.subVectors(e,t);const u=ji.dot(ji),d=ji.dot(yr),p=ji.dot(wh),m=yr.dot(yr),x=yr.dot(wh),M=u*m-d*d;if(M===0)return l.set(0,0,0),null;const _=1/M,S=(m*p-d*x)*_,E=(u*x-d*p)*_;return l.set(1-S-E,E,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Sr)===null?!1:Sr.x>=0&&Sr.y>=0&&Sr.x+Sr.y<=1}static getInterpolation(e,t,r,o,l,u,d,p){return this.getBarycoord(e,t,r,o,Sr)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Sr.x),p.addScaledVector(u,Sr.y),p.addScaledVector(d,Sr.z),p)}static getInterpolatedAttribute(e,t,r,o,l,u){return Nh.setScalar(0),Rh.setScalar(0),Ph.setScalar(0),Nh.fromBufferAttribute(e,t),Rh.fromBufferAttribute(e,r),Ph.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Nh,l.x),u.addScaledVector(Rh,l.y),u.addScaledVector(Ph,l.z),u}static isFrontFacing(e,t,r,o){return ji.subVectors(r,t),yr.subVectors(e,t),ji.cross(yr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ji.subVectors(this.c,this.b),yr.subVectors(this.a,this.b),ji.cross(yr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Ei.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,d;ra.subVectors(o,r),sa.subVectors(l,r),Ch.subVectors(e,r);const p=ra.dot(Ch),m=sa.dot(Ch);if(p<=0&&m<=0)return t.copy(r);Ah.subVectors(e,o);const x=ra.dot(Ah),M=sa.dot(Ah);if(x>=0&&M<=x)return t.copy(o);const _=p*M-x*m;if(_<=0&&p>=0&&x<=0&&p-x>0)return u=p/(p-x),t.copy(r).addScaledVector(ra,u);bh.subVectors(e,l);const S=ra.dot(bh),E=sa.dot(bh);if(E>=0&&S<=E)return t.copy(l);const R=S*m-p*E;if(R<=0&&m>=0&&E<=0)return d=m/(m-E),t.copy(r).addScaledVector(sa,d);const v=x*E-S*M;if(v<=0&&M-x>=0&&S-E>=0)return n0.subVectors(l,o),d=(M-x)/(M-x+(S-E)),t.copy(o).addScaledVector(n0,d);const y=1/(v+R+_);return u=R*y,d=_*y,t.copy(r).addScaledVector(ra,u).addScaledVector(sa,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Co{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,Xi):Xi.fromBufferAttribute(l,u),Xi.applyMatrix4(e.matrixWorld),this.expandByPoint(Xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Il.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Il.copy(r.boundingBox)),Il.applyMatrix4(e.matrixWorld),this.union(Il)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xi),Xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ao),Ul.subVectors(this.max,ao),aa.subVectors(e.a,ao),oa.subVectors(e.b,ao),la.subVectors(e.c,ao),qr.subVectors(oa,aa),$r.subVectors(la,oa),xs.subVectors(aa,la);let t=[0,-qr.z,qr.y,0,-$r.z,$r.y,0,-xs.z,xs.y,qr.z,0,-qr.x,$r.z,0,-$r.x,xs.z,0,-xs.x,-qr.y,qr.x,0,-$r.y,$r.x,0,-xs.y,xs.x,0];return!Dh(t,aa,oa,la,Ul)||(t=[1,0,0,0,1,0,0,0,1],!Dh(t,aa,oa,la,Ul))?!1:(Ol.crossVectors(qr,$r),t=[Ol.x,Ol.y,Ol.z],Dh(t,aa,oa,la,Ul))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mr=[new N,new N,new N,new N,new N,new N,new N,new N],Xi=new N,Il=new Co,aa=new N,oa=new N,la=new N,qr=new N,$r=new N,xs=new N,ao=new N,Ul=new N,Ol=new N,ys=new N;function Dh(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){ys.fromArray(s,l);const d=o.x*Math.abs(ys.x)+o.y*Math.abs(ys.y)+o.z*Math.abs(ys.z),p=e.dot(ys),m=t.dot(ys),x=r.dot(ys);if(Math.max(-Math.max(p,m,x),Math.min(p,m,x))>d)return!1}return!0}const An=new N,Fl=new Ye;let ry=0;class ts extends ss{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ry++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Eg,this.updateRanges=[],this.gpuType=ar,this.version=0,this._normalizationScale=e!==void 0?Nc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Fl.fromBufferAttribute(this,t),Fl.applyMatrix3(e),this.setXY(t,Fl.x,Fl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)An.fromBufferAttribute(this,t),An.applyMatrix3(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o),l=this._normalize(l)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Cg(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ag(e,this.array)}}class Rg extends ts{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Pg extends ts{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class an extends ts{constructor(e,t,r){super(new Float32Array(e),t,r)}}const sy=new Co,oo=new N,Lh=new N;class Rc{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):sy.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oo.subVectors(e,this.center);const t=oo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(oo,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oo.copy(e.center).add(Lh)),this.expandByPoint(oo.copy(e.center).sub(Lh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ay=0;const Di=new sn,Ih=new Ln,ca=new N,Mi=new Co,lo=new Co,Hn=new N;class oi extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=bs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fx(e)?Pg:Rg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new _t().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Di.makeRotationFromQuaternion(e),this.applyMatrix4(Di),this}rotateX(e){return Di.makeRotationX(e),this.applyMatrix4(Di),this}rotateY(e){return Di.makeRotationY(e),this.applyMatrix4(Di),this}rotateZ(e){return Di.makeRotationZ(e),this.applyMatrix4(Di),this}translate(e,t,r){return Di.makeTranslation(e,t,r),this.applyMatrix4(Di),this}scale(e,t,r){return Di.makeScale(e,t,r),this.applyMatrix4(Di),this}lookAt(e){return Ih.lookAt(e),Ih.updateMatrix(),this.applyMatrix4(Ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ca).negate(),this.translate(ca.x,ca.y,ca.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new an(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Co);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Mi.setFromBufferAttribute(l),this.morphTargetsRelative?(Hn.addVectors(this.boundingBox.min,Mi.min),this.boundingBox.expandByPoint(Hn),Hn.addVectors(this.boundingBox.max,Mi.max),this.boundingBox.expandByPoint(Hn)):(this.boundingBox.expandByPoint(Mi.min),this.boundingBox.expandByPoint(Mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const r=this.boundingSphere.center;if(Mi.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];lo.setFromBufferAttribute(d),this.morphTargetsRelative?(Hn.addVectors(Mi.min,lo.min),Mi.expandByPoint(Hn),Hn.addVectors(Mi.max,lo.max),Mi.expandByPoint(Hn)):(Mi.expandByPoint(lo.min),Mi.expandByPoint(lo.max))}Mi.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)Hn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(Hn));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],p=this.morphTargetsRelative;for(let m=0,x=d.count;m<x;m++)Hn.fromBufferAttribute(d,m),p&&(ca.fromBufferAttribute(e,m),Hn.add(ca)),o=Math.max(o,r.distanceToSquared(Hn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new ts(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const d=[],p=[],m=new Uint8Array(r.count);for(let U=0;U<r.count;U++)d[U]=new N,p[U]=new N;const x=new N,M=new N,_=new N,S=new Ye,E=new Ye,R=new Ye,v=new N,y=new N;function D(U,H,K){m[U]=m[H]=m[K]=1,x.fromBufferAttribute(r,U),M.fromBufferAttribute(r,H),_.fromBufferAttribute(r,K),S.fromBufferAttribute(l,U),E.fromBufferAttribute(l,H),R.fromBufferAttribute(l,K),M.sub(x),_.sub(x),E.sub(S),R.sub(S);const Q=1/(E.x*R.y-R.x*E.y);isFinite(Q)&&(v.copy(M).multiplyScalar(R.y).addScaledVector(_,-E.y).multiplyScalar(Q),y.copy(_).multiplyScalar(E.x).addScaledVector(M,-R.x).multiplyScalar(Q),d[U].add(v),d[H].add(v),d[K].add(v),p[U].add(y),p[H].add(y),p[K].add(y))}let k=this.groups;k.length===0&&(k=[{start:0,count:e.count}]);for(let U=0,H=k.length;U<H;++U){const K=k[U],Q=K.start,he=K.count;for(let F=Q,J=Q+he;F<J;F+=3)D(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const P=new N,B=new N,I=new N,T=new N;function A(U){I.fromBufferAttribute(o,U),T.copy(I);const H=d[U];P.copy(H),P.sub(I.multiplyScalar(I.dot(H))).normalize(),B.crossVectors(T,H);const Q=B.dot(p[U])<0?-1:1;u.setXYZW(U,P.x,P.y,P.z,Q)}for(let U=0,H=r.count;U<H;++U)m[U]&&A(U);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new ts(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let _=0,S=r.count;_<S;_++)r.setXYZ(_,0,0,0);const o=new N,l=new N,u=new N,d=new N,p=new N,m=new N,x=new N,M=new N;if(e)for(let _=0,S=e.count;_<S;_+=3){const E=e.getX(_+0),R=e.getX(_+1),v=e.getX(_+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,R),u.fromBufferAttribute(t,v),x.subVectors(u,l),M.subVectors(o,l),x.cross(M),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,v),d.add(x),p.add(x),m.add(x),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(v,m.x,m.y,m.z)}else for(let _=0,S=t.count;_<S;_+=3)o.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),x.subVectors(u,l),M.subVectors(o,l),x.cross(M),r.setXYZ(_+0,x.x,x.y,x.z),r.setXYZ(_+1,x.x,x.y,x.z),r.setXYZ(_+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Hn.fromBufferAttribute(e,t),Hn.normalize(),e.setXYZ(t,Hn.x,Hn.y,Hn.z)}toNonIndexed(){function e(d,p){const m=d.array,x=d.itemSize,M=d.normalized,_=new m.constructor(p.length*x);let S=0,E=0;for(let R=0,v=p.length;R<v;R++){d.isInterleavedBufferAttribute?S=p[R]*d.data.stride+d.offset:S=p[R]*x;for(let y=0;y<x;y++)_[E++]=m[S++]}return new ts(_,x,M)}if(this.index===null)return ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new oi,r=this.index.array,o=this.attributes;for(const d in o){const p=o[d],m=e(p,r);t.setAttribute(d,m)}const l=this.morphAttributes;for(const d in l){const p=[],m=l[d];for(let x=0,M=m.length;x<M;x++){const _=m[x],S=e(_,r);p.push(S)}t.morphAttributes[d]=p}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,p=u.length;d<p;d++){const m=u[d];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],x=[];for(let M=0,_=m.length;M<_;M++){const S=m[M];x.push(S.toJSON(e.data))}x.length>0&&(o[p]=x,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const x=o[m];this.setAttribute(m,x.clone(t))}const l=e.morphAttributes;for(const m in l){const x=[],M=l[m];for(let _=0,S=M.length;_<S;_++)x.push(M[_].clone(t));this.morphAttributes[m]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,x=u.length;m<x;m++){const M=u[m];this.addGroup(M.start,M.count,M.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oy{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Eg,this.updateRanges=[],this.version=0,this.uuid=bs()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let o=0,l=this.stride;o<l;o++)this.array[e+o]=t.array[r+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=i0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const r=new this.array.constructor(e.arrayBuffers[t]),o=new this.constructor(r,this.stride);return o.setUsage(this.usage),o}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=i0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const r={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return r.usage=this.usage,r}}function i0(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=bs()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}const ri=new N;class Mc{constructor(e,t,r,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=o,this._normalizationScale=e!==void 0?Nc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)ri.fromBufferAttribute(this,t),ri.applyMatrix4(e),this.setXYZ(t,ri.x,ri.y,ri.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)ri.fromBufferAttribute(this,t),ri.applyNormalMatrix(e),this.setXYZ(t,ri.x,ri.y,ri.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)ri.fromBufferAttribute(this,t),ri.transformDirection(e),this.setXYZ(t,ri.x,ri.y,ri.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o),l=this._normalize(l)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this.data.array[e+3]=l,this}clone(e){if(e===void 0){Sc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return new ts(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Mc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Sc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Cg(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ag(e,this.data.array)}}const Uh=new N,ly=new N,cy=new _t;class Er{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Uh.subVectors(r,t).cross(ly.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(Uh),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||cy.getNormalMatrix(e),o=this.coplanarPoint(Uh).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let uy=0;class Ns extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=bs(),this.name="",this.type="Material",this.blending=vo,this.side=ws,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rg,this.blendDst=sg,this.blendEquation=ga,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Px,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gh,this.stencilZFail=gh,this.stencilZPass=gh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){ft(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ft(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(r.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(r.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(r.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(r.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const d in l){const p=l[d];delete p.metadata,u.push(p)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ut().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Er().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Ye().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ye().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Fd extends Ns{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ua;const co=new N,ha=new N,da=new N,fa=new Ye,uo=new Ye,Dg=new sn,kl=new N,ho=new N,Bl=new N,r0=new Ye,Oh=new Ye,s0=new Ye;class a0 extends Ln{constructor(e=new Fd){if(super(),this.isSprite=!0,this.type="Sprite",ua===void 0){ua=new oi;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new oy(t,5);ua.setIndex([0,1,2,0,2,3]),ua.setAttribute("position",new Mc(r,3,0,!1)),ua.setAttribute("uv",new Mc(r,2,3,!1))}this.geometry=ua,this.material=e,this.center=new Ye(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Wt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ha.setFromMatrixScale(this.matrixWorld),Dg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),da.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ha.multiplyScalar(-da.z);const r=this.material.rotation;let o,l;r!==0&&(l=Math.cos(r),o=Math.sin(r));const u=this.center;zl(kl.set(-.5,-.5,0),da,u,ha,o,l),zl(ho.set(.5,-.5,0),da,u,ha,o,l),zl(Bl.set(.5,.5,0),da,u,ha,o,l),r0.set(0,0),Oh.set(1,0),s0.set(1,1);let d=e.ray.intersectTriangle(kl,ho,Bl,!1,co);if(d===null&&(zl(ho.set(-.5,.5,0),da,u,ha,o,l),Oh.set(0,1),d=e.ray.intersectTriangle(kl,Bl,ho,!1,co),d===null))return;const p=e.ray.origin.distanceTo(co);p<e.near||p>e.far||t.push({distance:p,point:co.clone(),uv:Ei.getInterpolation(co,kl,ho,Bl,r0,Oh,s0,new Ye),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){const t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function zl(s,e,t,r,o,l){fa.subVectors(s,t).addScalar(.5).multiply(r),o!==void 0?(uo.x=l*fa.x-o*fa.y,uo.y=o*fa.x+l*fa.y):uo.copy(fa),s.copy(e),s.x+=uo.x,s.y+=uo.y,s.applyMatrix4(Dg)}const Tr=new N,Fh=new N,Hl=new N,Vl=new N;class Pc{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Tr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tr.copy(this.origin).addScaledVector(this.direction,t),Tr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Fh.copy(e).add(t).multiplyScalar(.5),Hl.copy(t).sub(e).normalize(),Vl.copy(this.origin).sub(Fh);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Hl),d=Vl.dot(this.direction),p=-Vl.dot(Hl),m=Vl.lengthSq(),x=Math.abs(1-u*u);let M,_,S,E;if(x>0)if(M=u*p-d,_=u*d-p,E=l*x,M>=0)if(_>=-E)if(_<=E){const R=1/x;M*=R,_*=R,S=M*(M+u*_+2*d)+_*(u*M+_+2*p)+m}else _=l,M=Math.max(0,-(u*_+d)),S=-M*M+_*(_+2*p)+m;else _=-l,M=Math.max(0,-(u*_+d)),S=-M*M+_*(_+2*p)+m;else _<=-E?(M=Math.max(0,-(-u*l+d)),_=M>0?-l:Math.min(Math.max(-l,-p),l),S=-M*M+_*(_+2*p)+m):_<=E?(M=0,_=Math.min(Math.max(-l,-p),l),S=_*(_+2*p)+m):(M=Math.max(0,-(u*l+d)),_=M>0?l:Math.min(Math.max(-l,-p),l),S=-M*M+_*(_+2*p)+m);else _=u>0?-l:l,M=Math.max(0,-(u*_+d)),S=-M*M+_*(_+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,M),o&&o.copy(Fh).addScaledVector(Hl,_),S}intersectSphere(e,t){if(e.radius<0)return null;Tr.subVectors(e.center,this.origin);const r=Tr.dot(this.direction),o=Tr.dot(Tr)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),d=r-u,p=r+u;return p<0?null:d<0?this.at(p,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,d,p;const m=1/this.direction.x,x=1/this.direction.y,M=1/this.direction.z,_=this.origin;return m>=0?(r=(e.min.x-_.x)*m,o=(e.max.x-_.x)*m):(r=(e.max.x-_.x)*m,o=(e.min.x-_.x)*m),x>=0?(l=(e.min.y-_.y)*x,u=(e.max.y-_.y)*x):(l=(e.max.y-_.y)*x,u=(e.min.y-_.y)*x),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),M>=0?(d=(e.min.z-_.z)*M,p=(e.max.z-_.z)*M):(d=(e.max.z-_.z)*M,p=(e.min.z-_.z)*M),r>p||d>o)||((d>r||r!==r)&&(r=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Tr)!==null}intersectTriangle(e,t,r,o,l){const u=this.origin,d=this.direction,p=d.x,m=d.y,x=d.z,M=e.x-u.x,_=e.y-u.y,S=e.z-u.z,E=t.x-u.x,R=t.y-u.y,v=t.z-u.z,y=r.x-u.x,D=r.y-u.y,k=r.z-u.z,P=Math.abs(p),B=Math.abs(m),I=Math.abs(x);let T,A,U,H,K,Q,he,F,J,ue,ee,Z;if(P>=B&&P>=I?(U=p,Q=M,J=E,Z=y,p>=0?(T=m,A=x,H=_,K=S,he=R,F=v,ue=D,ee=k):(T=x,A=m,H=S,K=_,he=v,F=R,ue=k,ee=D)):B>=I?(U=m,Q=_,J=R,Z=D,m>=0?(T=x,A=p,H=S,K=M,he=v,F=E,ue=k,ee=y):(T=p,A=x,H=M,K=S,he=E,F=v,ue=y,ee=k)):(U=x,Q=S,J=v,Z=k,x>=0?(T=p,A=m,H=M,K=_,he=E,F=R,ue=y,ee=D):(T=m,A=p,H=_,K=M,he=R,F=E,ue=D,ee=y)),U===0)return null;const q=T/U,$=A/U,O=1/U,ie=H-q*Q,Ie=K-$*Q,ae=he-q*J,Ce=F-$*J,be=ue-q*Z,Ge=ee-$*Z,we=be*Ce-Ge*ae,Ve=ie*Ge-Ie*be,Dt=ae*Ie-Ce*ie;if(o){if(we<0||Ve<0||Dt<0)return null}else if((we<0||Ve<0||Dt<0)&&(we>0||Ve>0||Dt>0))return null;const it=we+Ve+Dt;if(it===0)return null;const Mt=O*(we*Q+Ve*J+Dt*Z);return(it>0?Mt<0:Mt>0)?null:this.at(Mt/it,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class va extends Ns{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rs,this.combine=ag,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const o0=new sn,Ss=new Pc,Gl=new Rc,l0=new N,Wl=new N,jl=new N,Xl=new N,kh=new N,Kl=new N,c0=new N,Yl=new N;class Et extends Ln{constructor(e=new oi,t=new va){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){Kl.set(0,0,0);for(let p=0,m=l.length;p<m;p++){const x=d[p],M=l[p];x!==0&&(kh.fromBufferAttribute(M,e),u?Kl.addScaledVector(kh,x):Kl.addScaledVector(kh.sub(t),x))}t.add(Kl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Gl.copy(r.boundingSphere),Gl.applyMatrix4(l),Ss.copy(e.ray).recast(e.near),!(Gl.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(Gl,l0)===null||Ss.origin.distanceToSquared(l0)>(e.far-e.near)**2))&&(o0.copy(l).invert(),Ss.copy(e.ray).applyMatrix4(o0),!(r.boundingBox!==null&&Ss.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Ss)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,d=l.index,p=l.attributes.position,m=l.attributes.uv,x=l.attributes.uv1,M=l.attributes.normal,_=l.groups,S=l.drawRange;if(d!==null)if(Array.isArray(u))for(let E=0,R=_.length;E<R;E++){const v=_[E],y=u[v.materialIndex],D=Math.max(v.start,S.start),k=Math.min(d.count,Math.min(v.start+v.count,S.start+S.count));for(let P=D,B=k;P<B;P+=3){const I=d.getX(P),T=d.getX(P+1),A=d.getX(P+2);o=ql(this,y,e,r,m,x,M,I,T,A),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const E=Math.max(0,S.start),R=Math.min(d.count,S.start+S.count);for(let v=E,y=R;v<y;v+=3){const D=d.getX(v),k=d.getX(v+1),P=d.getX(v+2);o=ql(this,u,e,r,m,x,M,D,k,P),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let E=0,R=_.length;E<R;E++){const v=_[E],y=u[v.materialIndex],D=Math.max(v.start,S.start),k=Math.min(p.count,Math.min(v.start+v.count,S.start+S.count));for(let P=D,B=k;P<B;P+=3){const I=P,T=P+1,A=P+2;o=ql(this,y,e,r,m,x,M,I,T,A),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const E=Math.max(0,S.start),R=Math.min(p.count,S.start+S.count);for(let v=E,y=R;v<y;v+=3){const D=v,k=v+1,P=v+2;o=ql(this,u,e,r,m,x,M,D,k,P),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}}}function hy(s,e,t,r,o,l,u,d){let p;if(e.side===mi?p=r.intersectTriangle(u,l,o,!0,d):p=r.intersectTriangle(o,l,u,e.side===ws,d),p===null)return null;Yl.copy(d),Yl.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(Yl);return m<t.near||m>t.far?null:{distance:m,point:Yl.clone(),object:s}}function ql(s,e,t,r,o,l,u,d,p,m){s.getVertexPosition(d,Wl),s.getVertexPosition(p,jl),s.getVertexPosition(m,Xl);const x=hy(s,e,t,r,Wl,jl,Xl,c0);if(x){const M=new N;Ei.getBarycoord(c0,Wl,jl,Xl,M),o&&(x.uv=Ei.getInterpolatedAttribute(o,d,p,m,M,new Ye)),l&&(x.uv1=Ei.getInterpolatedAttribute(l,d,p,m,M,new Ye)),u&&(x.normal=Ei.getInterpolatedAttribute(u,d,p,m,M,new N),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const _={a:d,b:p,c:m,normal:new N,materialIndex:0};Ei.getNormal(Wl,jl,Xl,_.normal),x.face=_,x.barycoord=M}return x}class dy extends ei{constructor(e=null,t=1,r=1,o,l,u,d,p,m=Xn,x=Xn,M,_){super(null,u,d,p,m,x,o,l,M,_),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ms=new Rc,fy=new Ye(.5,.5),$l=new N;class wo{constructor(e=new Er,t=new Er,r=new Er,o=new Er,l=new Er,u=new Er){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(o),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=qi,r=!1){const o=this.planes,l=e.elements,u=l[0],d=l[1],p=l[2],m=l[3],x=l[4],M=l[5],_=l[6],S=l[7],E=l[8],R=l[9],v=l[10],y=l[11],D=l[12],k=l[13],P=l[14],B=l[15];if(o[0].setComponents(m-u,S-x,y-E,B-D).normalize(),o[1].setComponents(m+u,S+x,y+E,B+D).normalize(),o[2].setComponents(m+d,S+M,y+R,B+k).normalize(),o[3].setComponents(m-d,S-M,y-R,B-k).normalize(),r)o[4].setComponents(p,_,v,P).normalize(),o[5].setComponents(m-p,S-_,y-v,B-P).normalize();else if(o[4].setComponents(m-p,S-_,y-v,B-P).normalize(),t===qi)o[5].setComponents(m+p,S+_,y+v,B+P).normalize();else if(t===Eo)o[5].setComponents(p,_,v,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(e){Ms.center.set(0,0,0);const t=fy.distanceTo(e.center);return Ms.radius=.7071067811865476+t,Ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if($l.x=o.normal.x>0?e.max.x:e.min.x,$l.y=o.normal.y>0?e.max.y:e.min.y,$l.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint($l)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const u0=new sn;class ef{constructor(){this.coordinateSystem=qi,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,r=this._frustums;for(let o=0;o<t.length;o++){const l=t[o];u0.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse),r[o]===void 0&&(r[o]=new wo),r[o].setFromProjectionMatrix(u0,l.coordinateSystem,l.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,r=e._frustums;for(let o=0;o<e._count;o++)t[o]===void 0&&(t[o]=new wo),t[o].copy(r[o]);return this._count=e._count,this}clone(){return new ef().copy(this)}}class kd extends Ns{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Tc=new N,Ec=new N,h0=new sn,fo=new Pc,Zl=new Rc,Bh=new N,d0=new N;class py extends Ln{constructor(e=new oi,t=new kd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)Tc.fromBufferAttribute(t,o-1),Ec.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=Tc.distanceTo(Ec);e.setAttribute("lineDistance",new an(r,1))}else ft("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Zl.copy(r.boundingSphere),Zl.applyMatrix4(o),Zl.radius+=l,e.ray.intersectsSphere(Zl)===!1)return;h0.copy(o).invert(),fo.copy(e.ray).applyMatrix4(h0);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,x=r.index,_=r.attributes.position;if(x!==null){const S=Math.max(0,u.start),E=Math.min(x.count,u.start+u.count);for(let R=S,v=E-1;R<v;R+=m){const y=x.getX(R),D=x.getX(R+1),k=Ql(this,e,fo,p,y,D,R);k&&t.push(k)}if(this.isLineLoop){const R=x.getX(E-1),v=x.getX(S),y=Ql(this,e,fo,p,R,v,E-1);y&&t.push(y)}}else{const S=Math.max(0,u.start),E=Math.min(_.count,u.start+u.count);for(let R=S,v=E-1;R<v;R+=m){const y=Ql(this,e,fo,p,R,R+1,R);y&&t.push(y)}if(this.isLineLoop){const R=Ql(this,e,fo,p,E-1,S,E-1);R&&t.push(R)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Ql(s,e,t,r,o,l,u){const d=s.geometry.attributes.position;if(Tc.fromBufferAttribute(d,o),Ec.fromBufferAttribute(d,l),t.distanceSqToSegment(Tc,Ec,Bh,d0)>r)return;Bh.applyMatrix4(s.matrixWorld);const m=e.ray.origin.distanceTo(Bh);if(!(m<e.near||m>e.far))return{distance:m,point:d0.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}const f0=new N,p0=new N;class m0 extends py{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)f0.fromBufferAttribute(t,o),p0.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+f0.distanceTo(p0);e.setAttribute("lineDistance",new an(r,1))}else ft("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Lg extends ei{constructor(e=[],t=Ma,r,o,l,u,d,p,m,x){super(e,t,r,o,l,u,d,p,m,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zh extends ei{constructor(e,t,r,o,l,u,d,p,m){super(e,t,r,o,l,u,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ea extends ei{constructor(e,t,r=cr,o,l,u,d=Xn,p=Xn,m,x=ns,M=1){if(x!==ns&&x!==es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:M};super(_,o,l,u,d,p,x,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Ig extends Ea{constructor(e,t=cr,r=Ma,o,l,u=Xn,d=Xn,p,m=ns){const x={width:e,height:e,depth:1},M=[x,x,x,x,x,x];super(e,e,t,r,o,l,u,d,p,m),this.image=M,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ug extends ei{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class sr extends oi{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const d=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const p=[],m=[],x=[],M=[];let _=0,S=0;E("z","y","x",-1,-1,r,t,e,u,l,0),E("z","y","x",1,-1,r,t,-e,u,l,1),E("x","z","y",1,1,e,r,t,o,u,2),E("x","z","y",1,-1,e,r,-t,o,u,3),E("x","y","z",1,-1,e,t,r,o,l,4),E("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(p),this.setAttribute("position",new an(m,3)),this.setAttribute("normal",new an(x,3)),this.setAttribute("uv",new an(M,2));function E(R,v,y,D,k,P,B,I,T,A,U){const H=P/T,K=B/A,Q=P/2,he=B/2,F=I/2,J=T+1,ue=A+1;let ee=0,Z=0;const q=new N;for(let $=0;$<ue;$++){const O=$*K-he;for(let ie=0;ie<J;ie++){const Ie=ie*H-Q;q[R]=Ie*D,q[v]=O*k,q[y]=F,m.push(q.x,q.y,q.z),q[R]=0,q[v]=0,q[y]=I>0?1:-1,x.push(q.x,q.y,q.z),M.push(ie/T),M.push(1-$/A),ee+=1}}for(let $=0;$<A;$++)for(let O=0;O<T;O++){const ie=_+O+J*$,Ie=_+O+J*($+1),ae=_+(O+1)+J*($+1),Ce=_+(O+1)+J*$;p.push(ie,Ie,Ce),p.push(Ie,ae,Ce),Z+=6}d.addGroup(S,Z,U),S+=Z,_+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Li extends oi{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:d,thetaLength:p};const m=this;o=Math.floor(o),l=Math.floor(l);const x=[],M=[],_=[],S=[];let E=0;const R=[],v=r/2;let y=0;D(),u===!1&&(e>0&&k(!0),t>0&&k(!1)),this.setIndex(x),this.setAttribute("position",new an(M,3)),this.setAttribute("normal",new an(_,3)),this.setAttribute("uv",new an(S,2));function D(){const P=new N,B=new N;let I=0;const T=(t-e)/r;for(let A=0;A<=l;A++){const U=[],H=A/l,K=H*(t-e)+e;for(let Q=0;Q<=o;Q++){const he=Q/o,F=he*p+d,J=Math.sin(F),ue=Math.cos(F);B.x=K*J,B.y=-H*r+v,B.z=K*ue,M.push(B.x,B.y,B.z),P.set(J,T,ue).normalize(),_.push(P.x,P.y,P.z),S.push(he,1-H),U.push(E++)}R.push(U)}for(let A=0;A<o;A++)for(let U=0;U<l;U++){const H=R[U][A],K=R[U+1][A],Q=R[U+1][A+1],he=R[U][A+1];(e>0||U!==0)&&(x.push(H,K,he),I+=3),(t>0||U!==l-1)&&(x.push(K,Q,he),I+=3)}m.addGroup(y,I,0),y+=I}function k(P){const B=E,I=new Ye,T=new N;let A=0;const U=P===!0?e:t,H=P===!0?1:-1;for(let Q=1;Q<=o;Q++)M.push(0,v*H,0),_.push(0,H,0),S.push(.5,.5),E++;const K=E;for(let Q=0;Q<=o;Q++){const F=Q/o*p+d,J=Math.cos(F),ue=Math.sin(F);T.x=U*ue,T.y=v*H,T.z=U*J,M.push(T.x,T.y,T.z),_.push(0,H,0),I.x=J*.5+.5,I.y=ue*.5*H+.5,S.push(I.x,I.y),E++}for(let Q=0;Q<o;Q++){const he=B+Q,F=K+Q;P===!0?x.push(F,F+1,he):x.push(F+1,F,he),A+=3}m.addGroup(y,A,P===!0?1:2),y+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Li(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wc extends Li{constructor(e=1,t=1,r=32,o=1,l=!1,u=0,d=Math.PI*2){super(0,e,t,r,o,l,u,d),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:d}}static fromJSON(e){return new wc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Jl=new N,ec=new N,Hh=new N,tc=new Ei;class g0 extends oi{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const o=Math.pow(10,4),l=Math.cos(_o*t),u=e.getIndex(),d=e.getAttribute("position"),p=u?u.count:d.count,m=[0,0,0],x=["a","b","c"],M=new Array(3),_=new Map,S=[];for(let E=0;E<p;E+=3){u?(m[0]=u.getX(E),m[1]=u.getX(E+1),m[2]=u.getX(E+2)):(m[0]=E,m[1]=E+1,m[2]=E+2);const{a:R,b:v,c:y}=tc;if(R.fromBufferAttribute(d,m[0]),v.fromBufferAttribute(d,m[1]),y.fromBufferAttribute(d,m[2]),tc.getNormal(Hh),M[0]=`${Math.round(R.x*o)},${Math.round(R.y*o)},${Math.round(R.z*o)}`,M[1]=`${Math.round(v.x*o)},${Math.round(v.y*o)},${Math.round(v.z*o)}`,M[2]=`${Math.round(y.x*o)},${Math.round(y.y*o)},${Math.round(y.z*o)}`,!(M[0]===M[1]||M[1]===M[2]||M[2]===M[0]))for(let D=0;D<3;D++){const k=(D+1)%3,P=M[D],B=M[k],I=tc[x[D]],T=tc[x[k]],A=`${P}_${B}`,U=`${B}_${P}`,H=_.get(U);H?(Hh.dot(H.normal)<=l&&(S.push(I.x,I.y,I.z),S.push(T.x,T.y,T.z)),_.set(U,null)):_.has(A)||_.set(A,{index0:m[D],index1:m[k],normal:Hh.clone()})}}for(const E of _.values())if(E){const{index0:R,index1:v}=E;Jl.fromBufferAttribute(d,R),ec.fromBufferAttribute(d,v),S.push(Jl.x,Jl.y,Jl.z),S.push(ec.x,ec.y,ec.z)}this.setAttribute("position",new an(S,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class br{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ft("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let o=0;const l=r.length;let u;t?u=t:u=e*r[l-1];let d=0,p=l-1,m;for(;d<=p;)if(o=Math.floor(d+(p-d)/2),m=r[o]-u,m<0)d=o+1;else if(m>0)p=o-1;else{p=o;break}if(o=p,r[o]===u)return o/(l-1);const x=r[o],_=r[o+1]-x,S=(u-x)/_;return(o+S)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const u=this.getPoint(o),d=this.getPoint(l),p=t||(u.isVector2?new Ye:new N);return p.copy(d).sub(u).normalize(),p}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new N,o=[],l=[],u=[],d=new N,p=new sn;for(let S=0;S<=e;S++){const E=S/e;o[S]=this.getTangentAt(E,new N)}l[0]=new N,u[0]=new N;let m=Number.MAX_VALUE;const x=Math.abs(o[0].x),M=Math.abs(o[0].y),_=Math.abs(o[0].z);x<=m&&(m=x,r.set(1,0,0)),M<=m&&(m=M,r.set(0,1,0)),_<=m&&r.set(0,0,1),d.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],d),u[0].crossVectors(o[0],l[0]);for(let S=1;S<=e;S++){if(l[S]=l[S-1].clone(),u[S]=u[S-1].clone(),d.crossVectors(o[S-1],o[S]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(Pt(o[S-1].dot(o[S]),-1,1));l[S].applyMatrix4(p.makeRotationAxis(d,E))}u[S].crossVectors(o[S],l[S])}if(t===!0){let S=Math.acos(Pt(l[0].dot(l[e]),-1,1));S/=e,o[0].dot(d.crossVectors(l[0],l[e]))>0&&(S=-S);for(let E=1;E<=e;E++)l[E].applyMatrix4(p.makeRotationAxis(o[E],S*E)),u[E].crossVectors(o[E],l[E])}return{tangents:o,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class Og extends br{constructor(e=0,t=0,r=1,o=1,l=0,u=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=d,this.aRotation=p}getPoint(e,t=new Ye){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(u?l=0:l=o),this.aClockwise===!0&&!u&&(l===o?l=-o:l=l-o);const d=this.aStartAngle+e*l;let p=this.aX+this.xRadius*Math.cos(d),m=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const x=Math.cos(this.aRotation),M=Math.sin(this.aRotation),_=p-this.aX,S=m-this.aY;p=_*x-S*M+this.aX,m=_*M+S*x+this.aY}return r.set(p,m)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class my extends Og{constructor(e,t,r,o,l,u){super(e,t,r,r,o,l,u),this.isArcCurve=!0,this.type="ArcCurve"}}function tf(){let s=0,e=0,t=0,r=0;function o(l,u,d,p){s=l,e=d,t=-3*l+3*u-2*d-p,r=2*l-2*u+d+p}return{initCatmullRom:function(l,u,d,p,m){o(u,d,m*(d-l),m*(p-u))},initNonuniformCatmullRom:function(l,u,d,p,m,x,M){let _=(u-l)/m-(d-l)/(m+x)+(d-u)/x,S=(d-u)/x-(p-u)/(x+M)+(p-d)/M;_*=x,S*=x,o(u,d,_,S)},calc:function(l){const u=l*l,d=u*l;return s+e*l+t*u+r*d}}}const v0=new N,_0=new N,Vh=new tf,Gh=new tf,Wh=new tf;class Fg extends br{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new N){const r=t,o=this.points,l=o.length,u=(l-(this.closed?0:1))*e;let d=Math.floor(u),p=u-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/l)+1)*l:p===0&&d===l-1&&(d=l-2,p=1);let m,x;this.closed||d>0?m=o[(d-1)%l]:(_0.subVectors(o[0],o[1]).add(o[0]),m=_0);const M=o[d%l],_=o[(d+1)%l];if(this.closed||d+2<l?x=o[(d+2)%l]:(v0.subVectors(o[l-1],o[l-2]).add(o[l-1]),x=v0),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(M),S),R=Math.pow(M.distanceToSquared(_),S),v=Math.pow(_.distanceToSquared(x),S);R<1e-4&&(R=1),E<1e-4&&(E=R),v<1e-4&&(v=R),Vh.initNonuniformCatmullRom(m.x,M.x,_.x,x.x,E,R,v),Gh.initNonuniformCatmullRom(m.y,M.y,_.y,x.y,E,R,v),Wh.initNonuniformCatmullRom(m.z,M.z,_.z,x.z,E,R,v)}else this.curveType==="catmullrom"&&(Vh.initCatmullRom(m.x,M.x,_.x,x.x,this.tension),Gh.initCatmullRom(m.y,M.y,_.y,x.y,this.tension),Wh.initCatmullRom(m.z,M.z,_.z,x.z,this.tension));return r.set(Vh.calc(p),Gh.calc(p),Wh.calc(p)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new N().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function x0(s,e,t,r,o){const l=(r-e)*.5,u=(o-t)*.5,d=s*s,p=s*d;return(2*t-2*r+l+u)*p+(-3*t+3*r-2*l-u)*d+l*s+t}function gy(s,e){const t=1-s;return t*t*e}function vy(s,e){return 2*(1-s)*s*e}function _y(s,e){return s*s*e}function xo(s,e,t,r){return gy(s,e)+vy(s,t)+_y(s,r)}function xy(s,e){const t=1-s;return t*t*t*e}function yy(s,e){const t=1-s;return 3*t*t*s*e}function Sy(s,e){return 3*(1-s)*s*s*e}function My(s,e){return s*s*s*e}function yo(s,e,t,r,o){return xy(s,e)+yy(s,t)+Sy(s,r)+My(s,o)}class Ty extends br{constructor(e=new Ye,t=new Ye,r=new Ye,o=new Ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new Ye){const r=t,o=this.v0,l=this.v1,u=this.v2,d=this.v3;return r.set(yo(e,o.x,l.x,u.x,d.x),yo(e,o.y,l.y,u.y,d.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ey extends br{constructor(e=new N,t=new N,r=new N,o=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new N){const r=t,o=this.v0,l=this.v1,u=this.v2,d=this.v3;return r.set(yo(e,o.x,l.x,u.x,d.x),yo(e,o.y,l.y,u.y,d.y),yo(e,o.z,l.z,u.z,d.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class wy extends br{constructor(e=new Ye,t=new Ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ye){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ye){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cy extends br{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ay extends br{constructor(e=new Ye,t=new Ye,r=new Ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Ye){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(xo(e,o.x,l.x,u.x),xo(e,o.y,l.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kg extends br{constructor(e=new N,t=new N,r=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new N){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(xo(e,o.x,l.x,u.x),xo(e,o.y,l.y,u.y),xo(e,o.z,l.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class by extends br{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ye){const r=t,o=this.points,l=(o.length-1)*e,u=Math.floor(l),d=l-u,p=o[u===0?u:u-1],m=o[u],x=o[u>o.length-2?o.length-1:u+1],M=o[u>o.length-3?o.length-1:u+2];return r.set(x0(d,p.x,m.x,x.x,M.x),x0(d,p.y,m.y,x.y,M.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new Ye().fromArray(o))}return this}}var Ny=Object.freeze({__proto__:null,ArcCurve:my,CatmullRomCurve3:Fg,CubicBezierCurve:Ty,CubicBezierCurve3:Ey,EllipseCurve:Og,LineCurve:wy,LineCurve3:Cy,QuadraticBezierCurve:Ay,QuadraticBezierCurve3:kg,SplineCurve:by});class Ii extends oi{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,d=Math.floor(r),p=Math.floor(o),m=d+1,x=p+1,M=e/d,_=t/p,S=[],E=[],R=[],v=[];for(let y=0;y<x;y++){const D=y*_-u;for(let k=0;k<m;k++){const P=k*M-l;E.push(P,-D,0),R.push(0,0,1),v.push(k/d),v.push(1-y/p)}}for(let y=0;y<p;y++)for(let D=0;D<d;D++){const k=D+m*y,P=D+m*(y+1),B=D+1+m*(y+1),I=D+1+m*y;S.push(k,P,I),S.push(P,B,I)}this.setIndex(S),this.setAttribute("position",new an(E,3)),this.setAttribute("normal",new an(R,3)),this.setAttribute("uv",new an(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ii(e.width,e.height,e.widthSegments,e.heightSegments)}}class Cc extends oi{constructor(e=.5,t=1,r=32,o=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:o,thetaStart:l,thetaLength:u},r=Math.max(3,r),o=Math.max(1,o);const d=[],p=[],m=[],x=[];let M=e;const _=(t-e)/o,S=new N,E=new Ye;for(let R=0;R<=o;R++){for(let v=0;v<=r;v++){const y=l+v/r*u;S.x=M*Math.cos(y),S.y=M*Math.sin(y),p.push(S.x,S.y,S.z),m.push(0,0,1),E.x=(S.x/t+1)/2,E.y=(S.y/t+1)/2,x.push(E.x,E.y)}M+=_}for(let R=0;R<o;R++){const v=R*(r+1);for(let y=0;y<r;y++){const D=y+v,k=D,P=D+r+1,B=D+r+2,I=D+1;d.push(k,P,I),d.push(P,B,I)}}this.setIndex(d),this.setAttribute("position",new an(p,3)),this.setAttribute("normal",new an(m,3)),this.setAttribute("uv",new an(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Es extends oi{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const p=Math.min(u+d,Math.PI);let m=0;const x=[],M=new N,_=new N,S=[],E=[],R=[],v=[];for(let y=0;y<=r;y++){const D=[],k=y/r,P=u+k*d,B=e*Math.cos(P),I=Math.sqrt(e*e-B*B);let T=0;y===0&&u===0?T=.5/t:y===r&&p===Math.PI&&(T=-.5/t);for(let A=0;A<=t;A++){const U=A/t,H=o+U*l;M.x=-I*Math.cos(H),M.y=B,M.z=I*Math.sin(H),E.push(M.x,M.y,M.z),_.copy(M).normalize(),R.push(_.x,_.y,_.z),v.push(U+T,1-k),D.push(m++)}x.push(D)}for(let y=0;y<r;y++)for(let D=0;D<t;D++){const k=x[y][D+1],P=x[y][D],B=x[y+1][D],I=x[y+1][D+1];(y!==0||u>0)&&S.push(k,P,I),(y!==r-1||p<Math.PI)&&S.push(P,B,I)}this.setIndex(S),this.setAttribute("position",new an(E,3)),this.setAttribute("normal",new an(R,3)),this.setAttribute("uv",new an(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Es(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class nf extends oi{constructor(e=1,t=.4,r=12,o=48,l=Math.PI*2,u=0,d=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:l,thetaStart:u,thetaLength:d},r=Math.floor(r),o=Math.floor(o);const p=[],m=[],x=[],M=[],_=new N,S=new N,E=new N;for(let R=0;R<=r;R++){const v=u+R/r*d;for(let y=0;y<=o;y++){const D=y/o*l;S.x=(e+t*Math.cos(v))*Math.cos(D),S.y=(e+t*Math.cos(v))*Math.sin(D),S.z=t*Math.sin(v),m.push(S.x,S.y,S.z),_.x=e*Math.cos(D),_.y=e*Math.sin(D),E.subVectors(S,_).normalize(),x.push(E.x,E.y,E.z),M.push(y/o),M.push(R/r)}}for(let R=1;R<=r;R++)for(let v=1;v<=o;v++){const y=(o+1)*R+v-1,D=(o+1)*(R-1)+v-1,k=(o+1)*(R-1)+v,P=(o+1)*R+v;p.push(y,D,P),p.push(D,k,P)}this.setIndex(p),this.setAttribute("position",new an(m,3)),this.setAttribute("normal",new an(x,3)),this.setAttribute("uv",new an(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nf(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class rf extends oi{constructor(e=new kg(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),t=64,r=1,o=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:o,closed:l};const u=e.computeFrenetFrames(t,l);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const d=new N,p=new N,m=new Ye;let x=new N;const M=[],_=[],S=[],E=[];R(),this.setIndex(E),this.setAttribute("position",new an(M,3)),this.setAttribute("normal",new an(_,3)),this.setAttribute("uv",new an(S,2));function R(){for(let k=0;k<t;k++)v(k);v(l===!1?t:0),D(),y()}function v(k){x=e.getPointAt(k/t,x);const P=u.normals[k],B=u.binormals[k];for(let I=0;I<=o;I++){const T=I/o*Math.PI*2,A=Math.sin(T),U=-Math.cos(T);p.x=U*P.x+A*B.x,p.y=U*P.y+A*B.y,p.z=U*P.z+A*B.z,p.normalize(),_.push(p.x,p.y,p.z),d.x=x.x+r*p.x,d.y=x.y+r*p.y,d.z=x.z+r*p.z,M.push(d.x,d.y,d.z)}}function y(){for(let k=1;k<=t;k++)for(let P=1;P<=o;P++){const B=(o+1)*(k-1)+(P-1),I=(o+1)*k+(P-1),T=(o+1)*k+P,A=(o+1)*(k-1)+P;E.push(B,I,A),E.push(I,T,A)}}function D(){for(let k=0;k<=t;k++)for(let P=0;P<=o;P++)m.x=k/t,m.y=P/o,S.push(m.x,m.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new rf(new Ny[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function wa(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(y0(o))o.isRenderTargetTexture?(ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(y0(o[0])){const l=[];for(let u=0,d=o.length;u<d;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function si(s){const e={};for(let t=0;t<s.length;t++){const r=wa(s[t]);for(const o in r)e[o]=r[o]}return e}function y0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Ry(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Bg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:zt.workingColorSpace}const Py={clone:wa,merge:si};var Dy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ly=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class As extends Ns{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dy,this.fragmentShader=Ly,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wa(e.uniforms),this.uniformsGroups=Ry(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new Ut().setHex(o.value);break;case"v2":this.uniforms[r].value=new Ye().fromArray(o.value);break;case"v3":this.uniforms[r].value=new N().fromArray(o.value);break;case"v4":this.uniforms[r].value=new xn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new _t().fromArray(o.value);break;case"m4":this.uniforms[r].value=new sn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Iy extends As{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class fn extends Ns{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ud,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Uy extends Ns{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Oy extends Ns{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class sf extends Ln{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Fy extends sf{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const jh=new sn,S0=new N,M0=new N;class ky{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.mapType=Ti,this.map=null,this.mapPass=null,this.matrix=new sn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wo,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new xn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;S0.setFromMatrixPosition(e.matrixWorld),t.position.copy(S0),M0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(M0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,o){jh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(jh,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,u=o?o.z/l.x:1,d=o?o.w/l.y:1,p=o?o.x/l.x:0,m=o?o.y/l.y:0;e.coordinateSystem===Eo||e.reversedDepth?t.set(.5*u,0,0,.5*u+p,0,.5*d,0,.5*d+m,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+p,0,.5*d,0,.5*d+m,0,0,.5,.5,0,0,0,1),t.multiply(jh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const nc=new N,ic=new is,nr=new N;class zg extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(nc,ic,nr),nr.x===1&&nr.y===1&&nr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nc,ic,nr.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(nc,ic,nr),nr.x===1&&nr.y===1&&nr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nc,ic,nr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Zr=new N,T0=new Ye,E0=new Ye;class Ki extends zg{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Od*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Od*2*Math.atan(Math.tan(_o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Zr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zr.x,Zr.y).multiplyScalar(-e/Zr.z),Zr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Zr.x,Zr.y).multiplyScalar(-e/Zr.z)}getViewSize(e,t){return this.getViewBounds(e,T0,E0),t.subVectors(E0,T0)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_o*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,m=u.fullHeight;l+=u.offsetX*o/p,t-=u.offsetY*r/m,o*=u.width/p,r*=u.height/m}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Hg extends zg{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,d-=x*this.view.offsetY,p=d-x*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class By extends ky{constructor(){super(new Hg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zy extends sf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new By}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Hy extends sf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const pa=-90,ma=1;class Bd extends Ln{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ki(pa,ma,e,t);o.layers=this.layers,this.add(o);const l=new Ki(pa,ma,e,t);l.layers=this.layers,this.add(l);const u=new Ki(pa,ma,e,t);u.layers=this.layers,this.add(u);const d=new Ki(pa,ma,e,t);d.layers=this.layers,this.add(d);const p=new Ki(pa,ma,e,t);p.layers=this.layers,this.add(p);const m=new Ki(pa,ma,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,d,p]=t;for(const m of t)this.remove(m);if(e===qi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Eo)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,p,m,x]=this.children,M=e.getRenderTarget(),_=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.mipmapsAutoUpdate;r.texture.mipmapsAutoUpdate=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,3,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(r,4,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),r.texture.mipmapsAutoUpdate=R,e.setRenderTarget(r,5,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,x),e.setRenderTarget(M,_,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Vy extends Ki{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const w0=new sn;class Gy{constructor(e,t,r=0,o=1/0){this.ray=new Pc(e,t),this.near=r,this.far=o,this.camera=null,this.layers=new Qd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Wt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return w0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(w0),this}intersectObject(e,t=!0,r=[]){return zd(e,this,r,t),r.sort(C0),r}intersectObjects(e,t=!0,r=[]){for(let o=0,l=e.length;o<l;o++)zd(e[o],this,r,t);return r.sort(C0),r}}function C0(s,e){return s.distance-e.distance}function zd(s,e,t,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(o=!1),o===!0&&r===!0){const l=s.children;for(let u=0,d=l.length;u<d;u++)zd(l[u],e,t,!0)}}class A0{constructor(e=1,t=0,r=0){this.radius=e,this.phi=t,this.theta=r}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Pt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Wy extends ss{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function b0(s,e,t,r){const o=jy(r);switch(t){case _g:return s*e;case yg:return s*e/o.components*o.byteLength;case Yd:return s*e/o.components*o.byteLength;case Cs:return s*e*2/o.components*o.byteLength;case qd:return s*e*2/o.components*o.byteLength;case xg:return s*e*3/o.components*o.byteLength;case or:return s*e*4/o.components*o.byteLength;case $d:return s*e*4/o.components*o.byteLength;case cc:case uc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case hc:case dc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ad:case ld:return Math.max(s,16)*Math.max(e,8)/4;case sd:case od:return Math.max(s,8)*Math.max(e,8)/2;case cd:case ud:case dd:case fd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case hd:case gc:case pd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case md:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case gd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case vd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case _d:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case xd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case yd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Sd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Md:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Td:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ed:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case wd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Cd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ad:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case bd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Nd:case Rd:case Pd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Dd:case Ld:return Math.ceil(s/4)*Math.ceil(e/4)*8;case vc:case Id:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jy(s){switch(s){case Ti:case pg:return{byteLength:1,components:1};case To:case mg:case ur:return{byteLength:2,components:1};case Xd:case Kd:return{byteLength:2,components:4};case cr:case jd:case ar:return{byteLength:4,components:1};case gg:case vg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gd}}));typeof window<"u"&&(window.__THREE__?ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Vg(){let s=null,e=!1,t=null,r=null;function o(l,u){r=s.requestAnimationFrame(o),t(l,u)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Xy(s){const e=new WeakMap;function t(d,p){const m=d.array,x=d.usage,M=m.byteLength,_=s.createBuffer();s.bindBuffer(p,_),s.bufferData(p,m,x),d.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)S=s.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:_,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:M}}function r(d,p,m){const x=p.array,M=p.updateRanges;if(s.bindBuffer(m,d),M.length===0)s.bufferSubData(m,0,x);else{M.sort((S,E)=>S.start-E.start);let _=0;for(let S=1;S<M.length;S++){const E=M[_],R=M[S];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++_,M[_]=R)}M.length=_+1;for(let S=0,E=M.length;S<E;S++){const R=M[S];s.bufferSubData(m,R.start*x.BYTES_PER_ELEMENT,x,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function u(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,t(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:o,remove:l,update:u}}var Ky=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yy=`#ifdef USE_ALPHAHASH
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
#endif`,qy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$y=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jy=`#ifdef USE_AOMAP
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
#endif`,e1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,t1=`#ifdef USE_BATCHING
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
#endif`,n1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,i1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,r1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,s1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,a1=`#ifdef USE_IRIDESCENCE
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
#endif`,o1=`#ifdef USE_BUMPMAP
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
#endif`,l1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,c1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,u1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,h1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,d1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,f1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,p1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,m1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,g1=`#define PI 3.141592653589793
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
} // validated`,v1=`vec3 transformedNormal = objectNormal;
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
#endif`,_1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,x1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,y1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,S1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,M1="gl_FragColor = linearToOutputTexel( gl_FragColor );",T1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,E1=`#ifdef USE_ENVMAP
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
#endif`,w1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,C1=`#ifdef USE_ENVMAP
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
#endif`,A1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,b1=`#ifdef USE_ENVMAP
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
#endif`,N1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,R1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,P1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,D1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,L1=`#ifdef USE_GRADIENTMAP
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
}`,I1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,U1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,O1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,F1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,k1=`#ifdef USE_ENVMAP
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
#endif`,B1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,z1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,H1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,V1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,G1=`PhysicalMaterial material;
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
#endif`,W1=`uniform sampler2D dfgLUT;
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
}`,j1=`
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
#endif`,X1=`#if defined( RE_IndirectDiffuse )
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
#endif`,K1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Y1=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,q1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,J1=`#ifdef USE_MAP
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
#endif`,CS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,AS=`#ifdef USE_ROUGHNESSMAP
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
#endif`,NS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,RS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
}`,Nt={alphahash_fragment:Ky,alphahash_pars_fragment:Yy,alphamap_fragment:qy,alphamap_pars_fragment:$y,alphatest_fragment:Zy,alphatest_pars_fragment:Qy,aomap_fragment:Jy,aomap_pars_fragment:e1,batching_pars_vertex:t1,batching_vertex:n1,begin_vertex:i1,beginnormal_vertex:r1,bsdfs:s1,iridescence_fragment:a1,bumpmap_pars_fragment:o1,clipping_planes_fragment:l1,clipping_planes_pars_fragment:c1,clipping_planes_pars_vertex:u1,clipping_planes_vertex:h1,color_fragment:d1,color_pars_fragment:f1,color_pars_vertex:p1,color_vertex:m1,common:g1,defaultnormal_vertex:v1,displacementmap_pars_vertex:_1,displacementmap_vertex:x1,emissivemap_fragment:y1,emissivemap_pars_fragment:S1,colorspace_fragment:M1,colorspace_pars_fragment:T1,envmap_fragment:E1,envmap_common_pars_fragment:w1,envmap_pars_fragment:C1,envmap_pars_vertex:A1,envmap_physical_pars_fragment:k1,envmap_vertex:b1,fog_vertex:N1,fog_pars_vertex:R1,fog_fragment:P1,fog_pars_fragment:D1,gradientmap_pars_fragment:L1,lightmap_pars_fragment:I1,lights_lambert_fragment:U1,lights_lambert_pars_fragment:O1,lights_pars_begin:F1,lights_toon_fragment:B1,lights_toon_pars_fragment:z1,lights_phong_fragment:H1,lights_phong_pars_fragment:V1,lights_physical_fragment:G1,lights_physical_pars_fragment:W1,lights_fragment_begin:j1,lights_fragment_maps:X1,lights_fragment_end:K1,lightprobes_pars_fragment:Y1,logdepthbuf_fragment:q1,logdepthbuf_pars_fragment:$1,logdepthbuf_pars_vertex:Z1,logdepthbuf_vertex:Q1,map_fragment:J1,map_pars_fragment:eS,map_particle_fragment:tS,map_particle_pars_fragment:nS,metalnessmap_fragment:iS,metalnessmap_pars_fragment:rS,morphinstance_vertex:sS,morphcolor_vertex:aS,morphnormal_vertex:oS,morphtarget_pars_vertex:lS,morphtarget_vertex:cS,normal_fragment_begin:uS,normal_fragment_maps:hS,normal_pars_fragment:dS,normal_pars_vertex:fS,normal_vertex:pS,normalmap_pars_fragment:mS,clearcoat_normal_fragment_begin:gS,clearcoat_normal_fragment_maps:vS,clearcoat_pars_fragment:_S,iridescence_pars_fragment:xS,opaque_fragment:yS,packing:SS,premultiplied_alpha_fragment:MS,project_vertex:TS,dithering_fragment:ES,dithering_pars_fragment:wS,roughnessmap_fragment:CS,roughnessmap_pars_fragment:AS,shadowmap_pars_fragment:bS,shadowmap_pars_vertex:NS,shadowmap_vertex:RS,shadowmask_pars_fragment:PS,skinbase_vertex:DS,skinning_pars_vertex:LS,skinning_vertex:IS,skinnormal_vertex:US,specularmap_fragment:OS,specularmap_pars_fragment:FS,tonemapping_fragment:kS,tonemapping_pars_fragment:BS,transmission_fragment:zS,transmission_pars_fragment:HS,uv_pars_fragment:VS,uv_pars_vertex:GS,uv_vertex:WS,worldpos_vertex:jS,background_vert:XS,background_frag:KS,backgroundCube_vert:YS,backgroundCube_frag:qS,cube_vert:$S,cube_frag:ZS,depth_vert:QS,depth_frag:JS,distance_vert:eM,distance_frag:tM,equirect_vert:nM,equirect_frag:iM,linedashed_vert:rM,linedashed_frag:sM,meshbasic_vert:aM,meshbasic_frag:oM,meshlambert_vert:lM,meshlambert_frag:cM,meshmatcap_vert:uM,meshmatcap_frag:hM,meshnormal_vert:dM,meshnormal_frag:fM,meshphong_vert:pM,meshphong_frag:mM,meshphysical_vert:gM,meshphysical_frag:vM,meshtoon_vert:_M,meshtoon_frag:xM,points_vert:yM,points_frag:SM,shadow_vert:MM,shadow_frag:TM,sprite_vert:EM,sprite_frag:wM},Ke={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},rr={basic:{uniforms:si([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:si([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new Ut(0)},envMapIntensity:{value:1}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:si([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:si([Ke.common,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.roughnessmap,Ke.metalnessmap,Ke.fog,Ke.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:si([Ke.common,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.gradientmap,Ke.fog,Ke.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:si([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:si([Ke.points,Ke.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:si([Ke.common,Ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:si([Ke.common,Ke.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:si([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:si([Ke.sprite,Ke.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distance:{uniforms:si([Ke.common,Ke.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distance_vert,fragmentShader:Nt.distance_frag},shadow:{uniforms:si([Ke.lights,Ke.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};rr.physical={uniforms:si([rr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new _t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const rc={r:0,b:0,g:0},CM=new sn,Gg=new _t;Gg.set(-1,0,0,0,1,0,0,0,1);function AM(s,e,t,r,o,l){const u=new Ut(0);let d=o===!0?0:1,p,m,x=null,M=0,_=null;function S(D){let k=D.isScene===!0?D.background:null;if(k&&k.isTexture){const P=D.backgroundBlurriness>0;k=e.get(k,P)}return k}function E(D){let k=!1;const P=S(D);P===null?v(u,d):P&&P.isColor&&(v(P,1),k=!0);const B=s.xr.getEnvironmentBlendMode();B==="additive"?t.buffers.color.setClear(0,0,0,1,l):B==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||k)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function R(D,k){const P=S(k);P&&P.isCubeTexture?(m===void 0&&(m=new Et(new sr(1,1,1),new As({name:"BackgroundCubeMaterial",uniforms:wa(rr.backgroundCube.uniforms),vertexShader:rr.backgroundCube.vertexShader,fragmentShader:rr.backgroundCube.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(B,I,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=P,m.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(CM.makeRotationFromEuler(k.backgroundRotation)).transpose(),P.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(Gg),m.material.toneMapped=zt.getTransfer(P.colorSpace)!==nn,(x!==P||M!==P.version||_!==s.toneMapping)&&(m.material.needsUpdate=!0,x=P,M=P.version,_=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new Et(new Ii(2,2),new As({name:"BackgroundMaterial",uniforms:wa(rr.background.uniforms),vertexShader:rr.background.vertexShader,fragmentShader:rr.background.fragmentShader,side:ws,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,p.material.toneMapped=zt.getTransfer(P.colorSpace)!==nn,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(x!==P||M!==P.version||_!==s.toneMapping)&&(p.material.needsUpdate=!0,x=P,M=P.version,_=s.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function v(D,k){D.getRGB(rc,Bg(s)),t.buffers.color.setClear(rc.r,rc.g,rc.b,k,l)}function y(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return u},setClearColor:function(D,k=1){u.set(D),d=k,v(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(D){d=D,v(u,d)},render:E,addToRenderList:R,dispose:y}}function bM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=_(null);let l=o,u=!1;function d(K,Q,he,F,J){let ue=!1;const ee=M(K,F,he,Q);l!==ee&&(l=ee,m(l.object)),ue=S(K,F,he,J),ue&&E(K,F,he,J),J!==null&&e.update(J,s.ELEMENT_ARRAY_BUFFER),(ue||u)&&(u=!1,P(K,Q,he,F),J!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function p(){return s.createVertexArray()}function m(K){return s.bindVertexArray(K)}function x(K){return s.deleteVertexArray(K)}function M(K,Q,he,F){const J=F.wireframe===!0;let ue=r[Q.id];ue===void 0&&(ue={},r[Q.id]=ue);const ee=K.isInstancedMesh===!0?K.id:0;let Z=ue[ee];Z===void 0&&(Z={},ue[ee]=Z);let q=Z[he.id];q===void 0&&(q={},Z[he.id]=q);let $=q[J];return $===void 0&&($=_(p()),q[J]=$),$}function _(K){const Q=[],he=[],F=[];for(let J=0;J<t;J++)Q[J]=0,he[J]=0,F[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:he,attributeDivisors:F,object:K,attributes:{},index:null}}function S(K,Q,he,F){const J=l.attributes,ue=Q.attributes;let ee=0;const Z=he.getAttributes();for(const q in Z)if(Z[q].location>=0){const O=J[q];let ie=ue[q];if(ie===void 0&&(q==="instanceMatrix"&&K.instanceMatrix&&(ie=K.instanceMatrix),q==="instanceColor"&&K.instanceColor&&(ie=K.instanceColor)),O===void 0||O.attribute!==ie||ie&&O.data!==ie.data)return!0;ee++}return l.attributesNum!==ee||l.index!==F}function E(K,Q,he,F){const J={},ue=Q.attributes;let ee=0;const Z=he.getAttributes();for(const q in Z)if(Z[q].location>=0){let O=ue[q];O===void 0&&(q==="instanceMatrix"&&K.instanceMatrix&&(O=K.instanceMatrix),q==="instanceColor"&&K.instanceColor&&(O=K.instanceColor));const ie={};ie.attribute=O,O&&O.data&&(ie.data=O.data),J[q]=ie,ee++}l.attributes=J,l.attributesNum=ee,l.index=F}function R(){const K=l.newAttributes;for(let Q=0,he=K.length;Q<he;Q++)K[Q]=0}function v(K){y(K,0)}function y(K,Q){const he=l.newAttributes,F=l.enabledAttributes,J=l.attributeDivisors;he[K]=1,F[K]===0&&(s.enableVertexAttribArray(K),F[K]=1),J[K]!==Q&&(s.vertexAttribDivisor(K,Q),J[K]=Q)}function D(){const K=l.newAttributes,Q=l.enabledAttributes;for(let he=0,F=Q.length;he<F;he++)Q[he]!==K[he]&&(s.disableVertexAttribArray(he),Q[he]=0)}function k(K,Q,he,F,J,ue,ee){ee===!0?s.vertexAttribIPointer(K,Q,he,J,ue):s.vertexAttribPointer(K,Q,he,F,J,ue)}function P(K,Q,he,F){R();const J=F.attributes,ue=he.getAttributes(),ee=Q.defaultAttributeValues;for(const Z in ue){const q=ue[Z];if(q.location>=0){let $=J[Z];if($===void 0&&(Z==="instanceMatrix"&&K.instanceMatrix&&($=K.instanceMatrix),Z==="instanceColor"&&K.instanceColor&&($=K.instanceColor)),$!==void 0){const O=$.normalized,ie=$.itemSize,Ie=e.get($);if(Ie===void 0)continue;const ae=Ie.buffer,Ce=Ie.type,be=Ie.bytesPerElement,Ge=Ce===s.INT||Ce===s.UNSIGNED_INT||$.gpuType===jd;if($.isInterleavedBufferAttribute){const we=$.data,Ve=we.isInterleavedBuffer===!0?we.stride:we.itemSize,Dt=$.offset;if(we.isInstancedInterleavedBuffer||we.isInstancedBufferAttribute){for(let it=0;it<q.locationSize;it++)y(q.location+it,we.meshPerAttribute);K.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let it=0;it<q.locationSize;it++)v(q.location+it);s.bindBuffer(s.ARRAY_BUFFER,ae);for(let it=0;it<q.locationSize;it++)k(q.location+it,ie/q.locationSize,Ce,O,Ve*be,(Dt+ie/q.locationSize*it)*be,Ge)}else{if($.isInstancedBufferAttribute){for(let we=0;we<q.locationSize;we++)y(q.location+we,$.meshPerAttribute);K.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let we=0;we<q.locationSize;we++)v(q.location+we);s.bindBuffer(s.ARRAY_BUFFER,ae);for(let we=0;we<q.locationSize;we++)k(q.location+we,ie/q.locationSize,Ce,O,ie*be,ie/q.locationSize*we*be,Ge)}}else if(ee!==void 0){const O=ee[Z];if(O!==void 0)switch(O.length){case 2:s.vertexAttrib2fv(q.location,O);break;case 3:s.vertexAttrib3fv(q.location,O);break;case 4:s.vertexAttrib4fv(q.location,O);break;default:s.vertexAttrib1fv(q.location,O)}}}}D()}function B(){U();for(const K in r){const Q=r[K];for(const he in Q){const F=Q[he];for(const J in F){const ue=F[J];for(const ee in ue)x(ue[ee].object),delete ue[ee];delete F[J]}}delete r[K]}}function I(K){if(r[K.id]===void 0)return;const Q=r[K.id];for(const he in Q){const F=Q[he];for(const J in F){const ue=F[J];for(const ee in ue)x(ue[ee].object),delete ue[ee];delete F[J]}}delete r[K.id]}function T(K){for(const Q in r){const he=r[Q];for(const F in he){const J=he[F];if(J[K.id]===void 0)continue;const ue=J[K.id];for(const ee in ue)x(ue[ee].object),delete ue[ee];delete J[K.id]}}}function A(K){for(const Q in r){const he=r[Q],F=K.isInstancedMesh===!0?K.id:0,J=he[F];if(J!==void 0){for(const ue in J){const ee=J[ue];for(const Z in ee)x(ee[Z].object),delete ee[Z];delete J[ue]}delete he[F],Object.keys(he).length===0&&delete r[Q]}}}function U(){H(),u=!0,l!==o&&(l=o,m(l.object))}function H(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:U,resetDefaultState:H,dispose:B,releaseStatesOfGeometry:I,releaseStatesOfObject:A,releaseStatesOfProgram:T,initAttributes:R,enableAttribute:v,disableUnusedAttributes:D}}function NM(s,e,t){let r;function o(p){r=p}function l(p,m){s.drawArrays(r,p,m),t.update(m,r,1)}function u(p,m,x){x!==0&&(s.drawArraysInstanced(r,p,m,x),t.update(m,r,x))}function d(p,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,x);let _=0;for(let S=0;S<x;S++)_+=m[S];t.update(_,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d}function RM(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(T){return!(T!==or&&r.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(T){const A=T===ur&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Ti&&T!==ar&&!A&&r.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function p(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const x=p(m);x!==m&&(ft("WebGLRenderer:",m,"not supported, using",x,"instead."),m=x);const M=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),_=t.logarithmicDepthBuffer===!0&&M===!1;t.reversedDepthBuffer===!0&&M===!1&&ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&M===!0&&ft("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),k=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),B=s.getParameter(s.MAX_SAMPLES),I=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:_,reversedDepthBuffer:M,maxTextures:S,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:v,maxAttributes:y,maxVertexUniforms:D,maxVaryings:k,maxFragmentUniforms:P,maxSamples:B,samples:I}}function PM(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Er,d=new _t,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(M,_){const S=M.length!==0||_||r!==0||o;return o=_,r=M.length,S},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(M,_){t=x(M,_,0)},this.setState=function(M,_,S){const E=M.clippingPlanes,R=M.clipIntersection,v=M.clipShadows,y=s.get(M);if(!o||E===null||E.length===0||l&&!v)l?x(null):m();else{const D=l?0:r,k=D*4;let P=y.clippingState||null;p.value=P,P=x(E,_,k,S);for(let B=0;B!==k;++B)P[B]=t[B];y.clippingState=P,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=D}};function m(){p.value!==t&&(p.value=t,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(M,_,S,E){const R=M!==null?M.length:0;let v=null;if(R!==0){if(v=p.value,E!==!0||v===null){const y=S+R*4,D=_.matrixWorldInverse;d.getNormalMatrix(D),(v===null||v.length<y)&&(v=new Float32Array(y));for(let k=0,P=S;k!==R;++k,P+=4)u.copy(M[k]).applyMatrix4(D,d),u.normal.toArray(v,P),v[P+3]=u.constant}p.value=v,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,v}}class af extends lr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Lg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new sr(5,5,5),l=new As({name:"CubemapFromEquirect",uniforms:wa(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:mi,blending:ya});l.uniforms.tEquirect.value=t;const u=new Et(o,l),d=t.minFilter;return t.minFilter===Jr&&(t.minFilter=ai),new Bd(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}const N0=256,DM=3,LM=20,Wg=256,jg=16,IM=3,UM=new N,OM=new Ut;class Ac{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Bd(1,10,null),this._boxMesh=new Et(new sr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:d=UM}=l,p=this._renderer;this._setSize(u);const m=this._allocateTarget(),x=this._getSourceTarget(!0);t>0&&(x.texture.mipmapsAutoUpdate=!1);const M=p.autoClear,_=p.autoClearColor,S=p.autoClearDepth,E=p.autoClearStencil,R=e.background;p.autoClear=!0,p.autoClearColor=!0,p.autoClearDepth=!0,p.autoClearStencil=!0,R===null&&(e.background=p.getClearColor(OM));const v=new Bd(r,o,x);return v.position.copy(d),v.update(p,e),p.autoClear=M,p.autoClearColor=_,p.autoClearDepth=S,p.autoClearStencil=E,e.background=R,t>0&&(x.texture.mipmapsAutoUpdate=!0,this._blur(m,t)),this._applyPMREM(m),m}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=D0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=P0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(N0,Vx(e))}_fromTexture(e,t){e.mapping===Ma||e.mapping===Mo?this._setSize(e.image.length===0?N0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const r=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(r),r}_allocateTarget(){const e=this._cubeSize,t=R0(e,!1,!1),r=Math.log2(e)-DM;for(let o=0;o<=r;o++)t.texture.mipmaps.push({width:e>>o,height:e>>o});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==t||e&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=R0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,r){const o=this._boxMesh,l=this._cubeCamera;o.material=r,l.renderTarget=e,l.activeMipmapLevel=t;const u=e.width>>t;e.viewport.set(0,0,u,u),l.update(this._renderer,o),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ma||e.mapping===Mo?(this._cubemapMaterial===null&&(this._cubemapMaterial=D0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=P0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=FM(),this._integrationMaterial=kM());const t=this._cubeSize,r=e.texture.mipmaps.length-1,o=this._ggxMaterial.uniforms;o.envMap.value=this._sourceTarget.texture;const l=this._integrationMaterial.uniforms;l.envMap.value=this._sourceTarget.texture,l.sourceLod.value=Math.log2(t/jg);for(let u=0;u<=r;u++){const d=Ac.lodToRoughness(u,r);if(u>r-IM)l.roughness.value=d,this._renderCube(e,u,this._integrationMaterial);else{const p=d>0?Math.log2(t)+.5*Math.log2(6/(Wg*Math.pow(d,4)))+.5:0;o.roughness.value=d,o.lodBias.value=p,this._renderCube(e,u,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=BM());const r=this._blurMaterial,o=r.uniforms,l=this._sourceTarget;o.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,o.envMap.value=l.texture,this._renderCube(e,0,r),o.envMap.value=e.texture,this._renderCube(l,0,r)}}function R0(s,e,t){return new af(s,{minFilter:Jr,generateMipmaps:e,type:ur,colorSpace:_c,depthBuffer:t})}function Ao(s,e,t){return new As({name:s,uniforms:e,vertexShader:Nt.cube_vert,fragmentShader:t,side:mi,blending:ya,depthTest:!1,depthWrite:!1})}function FM(){return Ao("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

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
	`)}function kM(){return Ao("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:jg}},`

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
	`)}function BM(){return Ao("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

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
	`)}function P0(){return Ao("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function D0(){return Ao("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function zM(s){let e=new WeakMap,t=new WeakMap,r=null;function o(_,S=!1){return _==null?null:S?u(_):l(_)}function l(_){if(_&&_.isTexture){const S=_.mapping;if(S===lc||S===ph)if(e.has(_)){const E=e.get(_).texture;return d(E,_.mapping)}else{const E=_.image;if(E&&E.height>0){const R=new af(E.height);return R.fromEquirectangularTexture(s,_),e.set(_,R),_.addEventListener("dispose",m),d(R.texture,_.mapping)}else return null}}return _}function u(_){if(_&&_.isTexture&&_.isPMREMTexture!==!0){const S=_.mapping,E=S===lc||S===ph,R=S===Ma||S===Mo;if(E||R){let v=t.get(_);const y=v!==void 0?v.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==y)return r===null&&(r=new Ac(s)),v=E?r.fromEquirectangular(_,v):r.fromCubemap(_,v),v.texture.pmremVersion=_.pmremVersion,t.set(_,v),v.texture;if(v!==void 0)return v.texture;{const D=_.image;return E&&D&&D.height>0||R&&D&&p(D)?(r===null&&(r=new Ac(s)),v=E?r.fromEquirectangular(_):r.fromCubemap(_),v.texture.pmremVersion=_.pmremVersion,t.set(_,v),_.addEventListener("dispose",x),v.texture):null}}}return _}function d(_,S){return S===lc?_.mapping=Ma:S===ph&&(_.mapping=Mo),_}function p(_){let S=0;const E=6;for(let R=0;R<E;R++)_[R]!==void 0&&S++;return S===E}function m(_){const S=_.target;S.removeEventListener("dispose",m);const E=e.get(S);E!==void 0&&(e.delete(S),E.dispose())}function x(_){const S=_.target;S.removeEventListener("dispose",x);const E=t.get(S);E!==void 0&&(t.delete(S),E.dispose())}function M(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:M}}function HM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&fc("WebGLRenderer: "+r+" extension not supported."),o}}}function VM(s,e,t,r){const o={},l=new WeakMap,u=new FinalizationRegistry(E=>delete o[E]);function d(E){p(E.target)}function p(E){E.index!==null&&e.remove(E.index);for(const v in E.attributes)e.remove(E.attributes[v]);E.removeEventListener("dispose",d),delete o[E.id],u.unregister(E);const R=l.get(E);R&&(e.remove(R),l.delete(E)),r.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0&&delete E._maxInstanceCount,t.memory.geometries--}function m(E,R){return o[R.id]!==void 0||(R.addEventListener("dispose",d),o[R.id]=new WeakRef(R),u.register(R,R.id,R),t.memory.geometries++),R}function x(E){const R=E.attributes;for(const v in R)e.update(R[v],s.ARRAY_BUFFER)}function M(E){const R=E.index,v=E.attributes.position;let y=0;if(v===void 0)return;const D=R!==null?R.array.length:v.array.length/3-1,k=v.count>=65535?Pg:Rg,P=new k(Math.ceil(D/3)*6,1),B=P.array;if(R!==null){const T=R.array;y=R.version;for(let A=0,U=0;A<D;A+=3){const H=T[A+0],K=T[A+1],Q=T[A+2];B[U++]=H,B[U++]=K,B[U++]=K,B[U++]=Q,B[U++]=Q,B[U++]=H}}else{y=v.version;for(let T=0,A=0;T<D;T+=3){const U=T+0,H=T+1,K=T+2;B[A++]=U,B[A++]=H,B[A++]=H,B[A++]=K,B[A++]=K,B[A++]=U}}P.version=y;const I=l.get(E);I&&e.remove(I),l.set(E,P)}function _(E){const R=l.get(E);if(R){const v=E.index;v!==null&&R.version<v.version&&M(E)}else M(E);return l.get(E)}function S(){for(const E in o){const R=o[E].deref();R!==void 0&&p(R)}}return{get:m,update:x,getWireframeAttribute:_,dispose:S}}function GM(s,e,t){let r;function o(M){r=M}let l,u;function d(M){l=M.type,u=M.bytesPerElement}function p(M,_){s.drawElements(r,_,l,M*u),t.update(_,r,1)}function m(M,_,S){S!==0&&(s.drawElementsInstanced(r,_,l,M*u,S),t.update(_,r,S))}function x(M,_,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,_,0,l,M,0,S);let R=0;for(let v=0;v<S;v++)R+=_[v];t.update(R,r,1)}this.setMode=o,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=x}function WM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=d*(l/3);break;case s.LINES:t.lines+=d*(l/2);break;case s.LINE_STRIP:t.lines+=d*(l-1);break;case s.LINE_LOOP:t.lines+=d*l;break;case s.POINTS:t.points+=d*l;break;default:Wt("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function jM(s,e,t){const r=new WeakMap,o=new xn;function l(u,d,p){const m=u.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,M=x!==void 0?x.length:0;let _=r.get(d);if(_===void 0||_.count!==M){let H=function(){A.dispose(),r.delete(d),d.removeEventListener("dispose",H)};var S=H;_!==void 0&&_.texture.dispose();const E=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,v=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],k=d.morphAttributes.color||[];let P=0;E===!0&&(P=1),R===!0&&(P=2),v===!0&&(P=3);let B=d.attributes.position.count*P,I=1;B>e.maxTextureSize&&(I=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const T=new Float32Array(B*I*4*M),A=new bg(T,B,I,M);A.type=ar,A.needsUpdate=!0;const U=P*4;for(let K=0;K<M;K++){const Q=y[K],he=D[K],F=k[K],J=B*I*4*K;for(let ue=0;ue<Q.count;ue++){const ee=ue*U;E===!0&&(o.fromBufferAttribute(Q,ue),T[J+ee+0]=o.x,T[J+ee+1]=o.y,T[J+ee+2]=o.z,T[J+ee+3]=0),R===!0&&(o.fromBufferAttribute(he,ue),T[J+ee+4]=o.x,T[J+ee+5]=o.y,T[J+ee+6]=o.z,T[J+ee+7]=0),v===!0&&(o.fromBufferAttribute(F,ue),T[J+ee+8]=o.x,T[J+ee+9]=o.y,T[J+ee+10]=o.z,T[J+ee+11]=F.itemSize===4?o.w:1)}}_={count:M,texture:A,size:new Ye(B,I)},r.set(d,_),d.addEventListener("dispose",H)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let E=0;for(let v=0;v<m.length;v++)E+=m[v];const R=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(s,"morphTargetBaseInfluence",R),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:l}}function XM(s,e,t,r,o){let l=new WeakMap;function u(m){const x=o.render.frame,M=m.geometry,_=e.get(m,M);if(l.get(_)!==x&&(e.update(_),l.set(_,x)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),l.get(m)!==x&&(t.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&t.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,x))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==x&&(S.update(),l.set(S,x))}return _}function d(){l=new WeakMap}function p(m){const x=m.target;x.removeEventListener("dispose",p),r.releaseStatesOfObject(x),t.remove(x.instanceMatrix),x.instanceColor!==null&&t.remove(x.instanceColor)}return{update:u,dispose:d}}const KM={[og]:"LINEAR_TONE_MAPPING",[lg]:"REINHARD_TONE_MAPPING",[cg]:"CINEON_TONE_MAPPING",[Wd]:"ACES_FILMIC_TONE_MAPPING",[hg]:"AGX_TONE_MAPPING",[dg]:"NEUTRAL_TONE_MAPPING",[ug]:"CUSTOM_TONE_MAPPING"};function YM(s,e,t,r,o,l){const u=new lr(e,t,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,p=null,m=null;const x=new oi;x.setAttribute("position",new an([-1,3,0,-1,-1,0,3,-1,0],3)),x.setAttribute("uv",new an([0,2,0,0,2,0],2));const M=new Iy({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new Et(x,M),S=new Hg(-1,1,1,-1,0,1);let E=null,R=null,v=!1,y,D=null,k=[],P=!1;this.setSize=function(B,I){u.setSize(B,I),d!==null&&d.setSize(B,I),p!==null&&p.setSize(B,I);for(let T=0;T<k.length;T++){const A=k[T];A.setSize&&A.setSize(B,I)}},this.setEffects=function(B){k=B,P=k.length>0&&k[0].isRenderPass===!0;const I=u.width,T=u.height;k.length>0&&d===null&&(d=new lr(I,T,{type:ur,depthBuffer:!1,stencilBuffer:!1}),p=new lr(I,T,{type:ur,depthBuffer:!1,stencilBuffer:!1}));const A=o===!0&&k.some(U=>U.needsDepthTexture===!0);A!==(u.depthTexture!==null)&&(A===!0&&m===null&&(m=new Ea(I,T),l===!0&&(m.format=es,m.type=Ta)),u.dispose(),u.depthTexture=A?m:null,u.resolveDepthBuffer=A,u.storeMultisampledDepthBuffer=A);for(let U=0;U<k.length;U++){const H=k[U];H.setSize&&H.setSize(I,T),A&&H.needsDepthTexture===!0&&H.setDepthTexture&&H.setDepthTexture(m)}},this.begin=function(B,I){if(v||B.toneMapping===Cr&&k.length===0)return!1;if(D=I,I!==null){const T=I.width,A=I.height;(u.width!==T||u.height!==A)&&this.setSize(T,A)}return P===!1&&B.setRenderTarget(u),y=B.toneMapping,B.toneMapping=Cr,!0},this.hasRenderPass=function(){return P},this.end=function(B,I){B.toneMapping=y,v=!0;let T=u,A=d;for(let U=0;U<k.length;U++){const H=k[U];H.enabled!==!1&&(H.render(B,A,T,I),H.needsSwap!==!1&&(T=A,A=A===d?p:d))}if(E!==B.outputColorSpace||R!==B.toneMapping){E=B.outputColorSpace,R=B.toneMapping,M.defines={},zt.getTransfer(E)===nn&&(M.defines.SRGB_TRANSFER="");const U=KM[R];U&&(M.defines[U]=""),M.needsUpdate=!0}M.uniforms.tDiffuse.value=T.texture,B.setRenderTarget(D),B.render(_,S),D=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){u.dispose(),d!==null&&d.dispose(),p!==null&&p.dispose(),x.dispose(),M.dispose()}}const Xg=new ei,Kg=new Ea(1,1),Yg=new Ig(1),qg=new bg,$g=new qx,Zg=new Lg,L0=[],I0=[],U0=new Float32Array(16),O0=new Float32Array(9),F0=new Float32Array(4);function Ca(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=L0[o];if(l===void 0&&(l=new Float32Array(o),L0[o]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,s[u].toArray(l,d)}return l}function In(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function Un(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Dc(s,e){let t=I0[e];t===void 0&&(t=new Int32Array(e),I0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function qM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function $M(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(In(t,e))return;s.uniform2fv(this.addr,e),Un(t,e)}}function ZM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(In(t,e))return;s.uniform3fv(this.addr,e),Un(t,e)}}function QM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(In(t,e))return;s.uniform4fv(this.addr,e),Un(t,e)}}function JM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(In(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Un(t,e)}else{if(In(t,r))return;F0.set(r),s.uniformMatrix2fv(this.addr,!1,F0),Un(t,r)}}function eT(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(In(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Un(t,e)}else{if(In(t,r))return;O0.set(r),s.uniformMatrix3fv(this.addr,!1,O0),Un(t,r)}}function tT(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(In(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Un(t,e)}else{if(In(t,r))return;U0.set(r),s.uniformMatrix4fv(this.addr,!1,U0),Un(t,r)}}function nT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function iT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(In(t,e))return;s.uniform2iv(this.addr,e),Un(t,e)}}function rT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(In(t,e))return;s.uniform3iv(this.addr,e),Un(t,e)}}function sT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(In(t,e))return;s.uniform4iv(this.addr,e),Un(t,e)}}function aT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function oT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(In(t,e))return;s.uniform2uiv(this.addr,e),Un(t,e)}}function lT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(In(t,e))return;s.uniform3uiv(this.addr,e),Un(t,e)}}function cT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(In(t,e))return;s.uniform4uiv(this.addr,e),Un(t,e)}}function Lc(s){return s.version===0&&(s.compareFunction=Tg,s.needsUpdate=!0),s}function uT(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?l=Lc(Kg):l=Xg,t.setTexture2D(e||l,o)}function hT(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||$g,o)}function dT(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_CUBE_SHADOW?l=Lc(Yg):l=Zg,t.setTextureCube(e||l,o)}function fT(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||qg,o)}function pT(s){switch(s){case 5126:return qM;case 35664:return $M;case 35665:return ZM;case 35666:return QM;case 35674:return JM;case 35675:return eT;case 35676:return tT;case 5124:case 35670:return nT;case 35667:case 35671:return iT;case 35668:case 35672:return rT;case 35669:case 35673:return sT;case 5125:return aT;case 36294:return oT;case 36295:return lT;case 36296:return cT;case 35678:case 36198:case 36298:case 36306:case 35682:return uT;case 35679:case 36299:case 36307:return hT;case 35680:case 36300:case 36308:case 36293:return dT;case 36289:case 36303:case 36311:case 36292:return fT}}function mT(s,e){s.uniform1fv(this.addr,e)}function gT(s,e){const t=Ca(e,this.size,2);s.uniform2fv(this.addr,t)}function vT(s,e){const t=Ca(e,this.size,3);s.uniform3fv(this.addr,t)}function _T(s,e){const t=Ca(e,this.size,4);s.uniform4fv(this.addr,t)}function xT(s,e){const t=Ca(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function yT(s,e){const t=Ca(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function ST(s,e){const t=Ca(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function MT(s,e){s.uniform1iv(this.addr,e)}function TT(s,e){s.uniform2iv(this.addr,e)}function ET(s,e){s.uniform3iv(this.addr,e)}function wT(s,e){s.uniform4iv(this.addr,e)}function CT(s,e){s.uniform1uiv(this.addr,e)}function AT(s,e){s.uniform2uiv(this.addr,e)}function bT(s,e){s.uniform3uiv(this.addr,e)}function NT(s,e){s.uniform4uiv(this.addr,e)}function RT(s,e,t){const r=this.cache,o=e.length,l=Dc(t,o);In(r,l)||(s.uniform1iv(this.addr,l),Un(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=Lc(Kg):u=Xg;for(let d=0;d!==o;++d)t.setTexture2D(e[d]||u,l[d])}function PT(s,e,t){const r=this.cache,o=e.length,l=Dc(t,o);In(r,l)||(s.uniform1iv(this.addr,l),Un(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||$g,l[u])}function DT(s,e,t){const r=this.cache,o=e.length,l=Dc(t,o);In(r,l)||(s.uniform1iv(this.addr,l),Un(r,l));let u;this.type===s.SAMPLER_CUBE_SHADOW?u=Lc(Yg):u=Zg;for(let d=0;d!==o;++d)t.setTextureCube(e[d]||u,l[d])}function LT(s,e,t){const r=this.cache,o=e.length,l=Dc(t,o);In(r,l)||(s.uniform1iv(this.addr,l),Un(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||qg,l[u])}function IT(s){switch(s){case 5126:return mT;case 35664:return gT;case 35665:return vT;case 35666:return _T;case 35674:return xT;case 35675:return yT;case 35676:return ST;case 5124:case 35670:return MT;case 35667:case 35671:return TT;case 35668:case 35672:return ET;case 35669:case 35673:return wT;case 5125:return CT;case 36294:return AT;case 36295:return bT;case 36296:return NT;case 35678:case 36198:case 36298:case 36306:case 35682:return RT;case 35679:case 36299:case 36307:return PT;case 35680:case 36300:case 36308:case 36293:return DT;case 36289:case 36303:case 36311:case 36292:return LT}}class UT{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=pT(t.type)}}class OT{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=IT(t.type)}}class FT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const d=o[l];d.setValue(e,t[d.id],r)}}}const Xh=/(\w+)(\])?(\[|\.)?/g;function k0(s,e){s.seq.push(e),s.map[e.id]=e}function kT(s,e,t){const r=s.name,o=r.length;for(Xh.lastIndex=0;;){const l=Xh.exec(r),u=Xh.lastIndex;let d=l[1];const p=l[2]==="]",m=l[3];if(p&&(d=d|0),m===void 0||m==="["&&u+2===o){k0(t,m===void 0?new UT(d,s,e):new OT(d,s,e));break}else{let M=t.map[d];M===void 0&&(M=new FT(d),k0(t,M)),t=M}}}class pc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(t,u),p=e.getUniformLocation(t,d.name);kT(d,p,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const d=t[l],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function B0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const BT=37297;let zT=0;function HT(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return r.join(`
`)}const z0=new _t;function VT(s){zt._getMatrix(z0,zt.workingColorSpace,s);const e=`mat3( ${z0.elements.map(t=>t.toFixed(4))} )`;switch(zt.getTransfer(s)){case xc:return[e,"LinearTransferOETF"];case nn:return[e,"sRGBTransferOETF"];default:return ft("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function H0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+HT(s.getShaderSource(e),d)}else return l}function GT(s,e){const t=VT(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const WT={[og]:"Linear",[lg]:"Reinhard",[cg]:"Cineon",[Wd]:"ACESFilmic",[hg]:"AgX",[dg]:"Neutral",[ug]:"Custom"};function jT(s,e){const t=WT[e];return t===void 0?(ft("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const sc=new N;function XT(){zt.getLuminanceCoefficients(sc);const s=sc.x.toFixed(4),e=sc.y.toFixed(4),t=sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(go).join(`
`)}function YT(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function qT(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return t}function go(s){return s!==""}function V0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function G0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $T=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hd(s){return s.replace($T,ZT)}function ZT(s,e){const t=Nt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Hd(t)}const QT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function W0(s){return s.replace(QT,JT)}function JT(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function j0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const eE={[oc]:"SHADOWMAP_TYPE_PCF",[mo]:"SHADOWMAP_TYPE_VSM"};function tE(s){return eE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const nE={[Mo]:"ENVMAP_MODE_REFRACTION"};function iE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":nE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const rE={[ag]:"ENVMAP_BLENDING_MULTIPLY",[Cx]:"ENVMAP_BLENDING_MIX",[Ax]:"ENVMAP_BLENDING_ADD"};function sE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":rE[s.combine]||"ENVMAP_BLENDING_NONE"}function aE(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const p=tE(t),m=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",x=iE(t),M=sE(t),_=KT(t),S=YT(l),E=o.createProgram();let R,v,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(R=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(go).join(`
`),R.length>0&&(R+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(go).join(`
`),v.length>0&&(v+=`
`)):(R=[j0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+x:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(go).join(`
`),v=[j0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+x:"",t.envMap?"#define "+M:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cr?"#define TONE_MAPPING":"",t.toneMapping!==Cr?Nt.tonemapping_pars_fragment:"",t.toneMapping!==Cr?jT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,GT("linearToOutputTexel",t.outputColorSpace),XT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(go).join(`
`)),u=Hd(u),u=V0(u,t),u=G0(u,t),d=Hd(d),d=V0(d,t),d=G0(d,t),u=W0(u),d=W0(d),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,R=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+R,v=["#define varying in",t.glslVersion===Wm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const D=y+R+u,k=y+v+d,P=B0(o,o.VERTEX_SHADER,D),B=B0(o,o.FRAGMENT_SHADER,k);o.attachShader(E,P),o.attachShader(E,B),t.index0AttributeName!==void 0?o.bindAttribLocation(E,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function I(H){if(s.debug.checkShaderErrors){const K=o.getProgramInfoLog(E)||"",Q=o.getShaderInfoLog(P)||"",he=o.getShaderInfoLog(B)||"",F=K.trim(),J=Q.trim(),ue=he.trim();let ee=!0,Z=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(ee=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,E,P,B);else{const q=H0(o,P,"vertex"),$=H0(o,B,"fragment");Wt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+F+`
`+q+`
`+$)}else F!==""?ft("WebGLProgram: Program Info Log:",F):(J===""||ue==="")&&(Z=!1);Z&&(H.diagnostics={runnable:ee,programLog:F,vertexShader:{log:J,prefix:R},fragmentShader:{log:ue,prefix:v}})}o.deleteShader(P),o.deleteShader(B),T=new pc(o,E),A=qT(o,E)}let T;this.getUniforms=function(){return T===void 0&&I(this),T};let A;this.getAttributes=function(){return A===void 0&&I(this),A};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=o.getProgramParameter(E,BT)),U},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zT++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=P,this.fragmentShader=B,this}let oE=0;class lE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new cE(e),t.set(e,r)),r}}class cE{constructor(e){this.id=oE++,this.code=e,this.usedTimes=0}}function uE(s){return s===Cs||s===gc||s===vc}function hE(s,e,t,r,o,l){const u=new Qd,d=new lE,p=new Set,m=[],x=new Map,M=r.logarithmicDepthBuffer,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(T){return p.add(T),T===0?"uv":`uv${T}`}function E(T,A,U,H,K,Q){const he=H.fog,F=K.geometry,J=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?H.environment:null,ue=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,ee=e.get(T.envMap||J,ue),Z=_[T.type];let q=r.precision;T.precision!==null&&(q=r.getMaxPrecision(T.precision),q!==T.precision&&ft("WebGLProgram.getParameters:",T.precision,"not supported, using",q,"instead."));const $=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,O=$!==void 0?$.length:0;let ie=0;F.morphAttributes.position!==void 0&&(ie=1),F.morphAttributes.normal!==void 0&&(ie=2),F.morphAttributes.color!==void 0&&(ie=3);let Ie,ae,Ce,be;if(Z){const ye=rr[Z];Ie=ye.vertexShader,ae=ye.fragmentShader}else{Ie=T.vertexShader,ae=T.fragmentShader;const ye=d.getVertexShaderStage(T),Me=d.getFragmentShaderStage(T);d.update(T,ye,Me),Ce=ye.id,be=Me.id}const Ge=s.getRenderTarget(),we=s.state.buffers.depth.getReversed(),Ve=K.isInstancedMesh===!0,Dt=K.isBatchedMesh===!0,it=!!T.map,Mt=!!T.matcap,Rt=!!ee,xt=Rt&&ee.isPMREMTexture===!0,$t=!!T.aoMap,ln=!!T.lightMap,yt=!!T.bumpMap&&T.wireframe===!1,jt=!!T.normalMap,Ot=!!T.displacementMap,de=!!T.emissiveMap,St=!!T.metalnessMap,wt=!!T.roughnessMap,Ht=T.anisotropy>0,j=T.clearcoat>0,gn=T.diffuseRoughness>0,mt=T.dispersion>0,Ct=T.retroreflectivity>0,Pe=T.iridescence>0,vt=T.sheen>0,je=T.transmission>0,$e=Ht&&!!T.anisotropyMap,L=j&&!!T.clearcoatMap,w=j&&!!T.clearcoatNormalMap,X=j&&!!T.clearcoatRoughnessMap,Ee=gn&&!!T.diffuseRoughnessMap,Se=Pe&&!!T.iridescenceMap,Oe=Pe&&!!T.iridescenceThicknessMap,Ae=vt&&!!T.sheenColorMap,re=vt&&!!T.sheenRoughnessMap,xe=!!T.specularMap,De=!!T.specularColorMap,V=!!T.specularIntensityMap,_e=je&&!!T.transmissionMap,ve=je&&!!T.thicknessMap,Be=!!T.gradientMap,Ue=!!T.alphaMap,ke=T.alphaTest>0,le=!!T.alphaHash,pe=!!T.extensions;let fe=Cr;T.toneMapped&&(Ge===null||Ge.isXRRenderTarget===!0)&&(fe=s.toneMapping);const ge=xt?ee.isCompressedCubeTexture?ee.image[0].mipmaps:ee.mipmaps:null,Te={shaderID:Z,shaderType:T.type,shaderName:T.name,vertexShader:Ie,fragmentShader:ae,defines:T.defines,customVertexShaderID:Ce,customFragmentShaderID:be,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:q,batching:Dt,batchingColor:Dt&&K._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&K.instanceColor!==null,instancingMorph:Ve&&K.morphTexture!==null,outputColorSpace:Ge===null?s.outputColorSpace:Ge.isXRRenderTarget===!0?Ge.texture.colorSpace:zt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:it,matcap:Mt,envMap:Rt,envMapMode:Rt&&ee.mapping,envMapPMREM:xt,envMapMaxLod:xt?ge.length-1:null,envMapSize:xt?ge[0].width:null,aoMap:$t,lightMap:ln,bumpMap:yt,normalMap:jt,displacementMap:Ot,emissiveMap:de,normalMapObjectSpace:jt&&T.normalMapType===Rx,normalMapTangentSpace:jt&&T.normalMapType===Ud,packedNormalMap:jt&&T.normalMapType===Ud&&uE(T.normalMap.format),metalnessMap:St,roughnessMap:wt,anisotropy:Ht,anisotropyMap:$e,clearcoat:j,clearcoatMap:L,clearcoatNormalMap:w,clearcoatRoughnessMap:X,diffuseRoughness:gn,diffuseRoughnessMap:Ee,dispersion:mt,retroreflection:Ct,iridescence:Pe,iridescenceMap:Se,iridescenceThicknessMap:Oe,sheen:vt,sheenColorMap:Ae,sheenRoughnessMap:re,specularMap:xe,specularColorMap:De,specularIntensityMap:V,transmission:je,transmissionMap:_e,thicknessMap:ve,gradientMap:Be,opaque:T.transparent===!1&&T.blending===vo&&T.alphaToCoverage===!1,alphaMap:Ue,alphaTest:ke,alphaHash:le,combine:T.combine,mapUv:it&&S(T.map.channel),aoMapUv:$t&&S(T.aoMap.channel),lightMapUv:ln&&S(T.lightMap.channel),bumpMapUv:yt&&S(T.bumpMap.channel),normalMapUv:jt&&S(T.normalMap.channel),displacementMapUv:Ot&&S(T.displacementMap.channel),emissiveMapUv:de&&S(T.emissiveMap.channel),metalnessMapUv:St&&S(T.metalnessMap.channel),roughnessMapUv:wt&&S(T.roughnessMap.channel),anisotropyMapUv:$e&&S(T.anisotropyMap.channel),clearcoatMapUv:L&&S(T.clearcoatMap.channel),clearcoatNormalMapUv:w&&S(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&S(T.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Ee&&S(T.diffuseRoughnessMap.channel),iridescenceMapUv:Se&&S(T.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&S(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&S(T.sheenColorMap.channel),sheenRoughnessMapUv:re&&S(T.sheenRoughnessMap.channel),specularMapUv:xe&&S(T.specularMap.channel),specularColorMapUv:De&&S(T.specularColorMap.channel),specularIntensityMapUv:V&&S(T.specularIntensityMap.channel),transmissionMapUv:_e&&S(T.transmissionMap.channel),thicknessMapUv:ve&&S(T.thicknessMap.channel),alphaMapUv:Ue&&S(T.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(jt||Ht),vertexNormals:!!F.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!F.attributes.uv&&(it||Ue),fog:!!he,useFog:T.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||F.attributes.normal===void 0&&jt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:M,reversedDepthBuffer:we,skinning:K.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:ie,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:Q.filter(ye=>ye.texture!==null).length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:fe,decodeVideoTexture:it&&T.map.isVideoTexture===!0&&zt.getTransfer(T.map.colorSpace)===nn,decodeVideoTextureEmissive:de&&T.emissiveMap.isVideoTexture===!0&&zt.getTransfer(T.emissiveMap.colorSpace)===nn,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Yi,flipSided:T.side===mi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:pe&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&T.extensions.multiDraw===!0||Dt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Te.vertexUv1s=p.has(1),Te.vertexUv2s=p.has(2),Te.vertexUv3s=p.has(3),p.clear(),Te}function R(T){const A=[];if(T.shaderID?A.push(T.shaderID):(A.push(T.customVertexShaderID),A.push(T.customFragmentShaderID)),T.defines!==void 0)for(const U in T.defines)A.push(U),A.push(T.defines[U]);return T.isRawShaderMaterial===!1&&(v(A,T),y(A,T),A.push(s.outputColorSpace)),A.push(T.customProgramCacheKey),A.join()}function v(T,A){T.push(A.precision),T.push(A.outputColorSpace),T.push(A.envMapMode),T.push(A.envMapPMREM),T.push(A.envMapMaxLod),T.push(A.envMapSize),T.push(A.mapUv),T.push(A.alphaMapUv),T.push(A.lightMapUv),T.push(A.aoMapUv),T.push(A.bumpMapUv),T.push(A.normalMapUv),T.push(A.displacementMapUv),T.push(A.emissiveMapUv),T.push(A.metalnessMapUv),T.push(A.roughnessMapUv),T.push(A.anisotropyMapUv),T.push(A.clearcoatMapUv),T.push(A.clearcoatNormalMapUv),T.push(A.clearcoatRoughnessMapUv),T.push(A.diffuseRoughnessMapUv),T.push(A.iridescenceMapUv),T.push(A.iridescenceThicknessMapUv),T.push(A.sheenColorMapUv),T.push(A.sheenRoughnessMapUv),T.push(A.specularMapUv),T.push(A.specularColorMapUv),T.push(A.specularIntensityMapUv),T.push(A.transmissionMapUv),T.push(A.thicknessMapUv),T.push(A.combine),T.push(A.fogExp2),T.push(A.sizeAttenuation),T.push(A.morphTargetsCount),T.push(A.numSunLights),T.push(A.numDirLights),T.push(A.numPointLights),T.push(A.numSpotLights),T.push(A.numSpotLightMaps),T.push(A.numHemiLights),T.push(A.numRectAreaLights),T.push(A.numSunLightShadows),T.push(A.numDirLightShadows),T.push(A.numPointLightShadows),T.push(A.numSpotLightShadows),T.push(A.numSpotLightShadowsWithMaps),T.push(A.numLightProbes),T.push(A.numLightProbeGrids),T.push(A.shadowMapType),T.push(A.toneMapping),T.push(A.numClippingPlanes),T.push(A.numClipIntersection),T.push(A.depthPacking)}function y(T,A){u.disableAll(),A.instancing&&u.enable(0),A.instancingColor&&u.enable(1),A.instancingMorph&&u.enable(2),A.matcap&&u.enable(3),A.envMap&&u.enable(4),A.normalMapObjectSpace&&u.enable(5),A.normalMapTangentSpace&&u.enable(6),A.clearcoat&&u.enable(7),A.iridescence&&u.enable(8),A.alphaTest&&u.enable(9),A.vertexColors&&u.enable(10),A.vertexAlphas&&u.enable(11),A.vertexUv1s&&u.enable(12),A.vertexUv2s&&u.enable(13),A.vertexUv3s&&u.enable(14),A.vertexTangents&&u.enable(15),A.anisotropy&&u.enable(16),A.alphaHash&&u.enable(17),A.batching&&u.enable(18),A.dispersion&&u.enable(19),A.retroreflection&&u.enable(24),A.diffuseRoughness&&u.enable(25),A.batchingColor&&u.enable(20),A.gradientMap&&u.enable(21),A.packedNormalMap&&u.enable(22),A.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),A.fog&&u.enable(0),A.useFog&&u.enable(1),A.flatShading&&u.enable(2),A.logarithmicDepthBuffer&&u.enable(3),A.reversedDepthBuffer&&u.enable(4),A.skinning&&u.enable(5),A.morphTargets&&u.enable(6),A.morphNormals&&u.enable(7),A.morphColors&&u.enable(8),A.premultipliedAlpha&&u.enable(9),A.shadowMapEnabled&&u.enable(10),A.doubleSided&&u.enable(11),A.flipSided&&u.enable(12),A.useDepthPacking&&u.enable(13),A.dithering&&u.enable(14),A.transmission&&u.enable(15),A.sheen&&u.enable(16),A.opaque&&u.enable(17),A.pointsUvs&&u.enable(18),A.decodeVideoTexture&&u.enable(19),A.decodeVideoTextureEmissive&&u.enable(20),A.alphaToCoverage&&u.enable(21),A.numLightProbeGrids>0&&u.enable(22),A.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function D(T){const A=_[T.type];let U;if(A){const H=rr[A];U=Py.clone(H.uniforms)}else U=T.uniforms;return U}function k(T,A){let U=x.get(A);return U!==void 0?++U.usedTimes:(U=new aE(s,A,T,o),m.push(U),x.set(A,U)),U}function P(T){if(--T.usedTimes===0){const A=m.indexOf(T);m[A]=m[m.length-1],m.pop(),x.delete(T.cacheKey),T.destroy()}}function B(T){d.remove(T)}function I(){d.dispose()}return{getParameters:E,getProgramCacheKey:R,getUniforms:D,acquireProgram:k,releaseProgram:P,releaseShaderCache:B,programs:m,dispose:I}}function dE(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function o(u,d,p){s.get(u)[d]=p}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function fE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function X0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function K0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(_){let S=0;return _.isInstancedMesh&&(S+=2),_.isSkinnedMesh&&(S+=1),S}function d(_,S,E,R,v,y){let D=s[e];return D===void 0?(D={id:_.id,object:_,geometry:S,material:E,materialVariant:u(_),groupOrder:R,renderOrder:_.renderOrder,z:v,group:y},s[e]=D):(D.id=_.id,D.object=_,D.geometry=S,D.material=E,D.materialVariant=u(_),D.groupOrder=R,D.renderOrder=_.renderOrder,D.z=v,D.group=y),e++,D}function p(_,S,E,R,v,y,D){D.reversedDepth===!0&&(v=-v);const k=d(_,S,E,R,v,y);E.transmission>0?r.push(k):E.transparent===!0?o.push(k):t.push(k)}function m(_,S,E,R,v,y){const D=d(_,S,E,R,v,y);E.transmission>0?r.unshift(D):E.transparent===!0?o.unshift(D):t.unshift(D)}function x(_,S){t.length>1&&t.sort(_||fE),r.length>1&&r.sort(S||X0),o.length>1&&o.sort(S||X0)}function M(){for(let _=e,S=s.length;_<S;_++){const E=s[_];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:p,unshift:m,finish:M,sort:x}}function pE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new K0,s.set(r,[u])):o>=l.length?(u=new K0,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function mE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new N,color:new Ut};break;case"SpotLight":t={position:new N,direction:new N,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":t={color:new Ut,position:new N,halfWidth:new N,halfHeight:new N};break}return s[e.id]=t,t}}}function gE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let vE=0;function _E(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function xE(s){const e=new mE,t=gE(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new N);const o=new N,l=new sn,u=new sn;function d(m){let x=0,M=0,_=0;for(let Q=0;Q<9;Q++)r.probe[Q].set(0,0,0);let S=0,E=0,R=0,v=0,y=0,D=0,k=0,P=0,B=0,I=0,T=0,A=0,U=0,H=0;m.sort(_E);for(let Q=0,he=m.length;Q<he;Q++){const F=m[Q],J=F.color,ue=F.intensity,ee=F.distance;let Z=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Cs?Z=F.shadow.map.texture:Z=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)x+=J.r*ue,M+=J.g*ue,_+=J.b*ue;else if(F.isLightProbe){for(let q=0;q<9;q++)r.probe[q].addScaledVector(F.sh.coefficients[q],ue);H++}else if(F.isSunLight){const q=e.get(F);if(q.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const $=F.shadow,O=t.get(F);O.shadowIntensity=$.intensity,O.shadowBias=$.bias,O.shadowNormalBias=$.normalBias,O.shadowRadius=$.radius,O.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),r.sunShadow[E]=O,r.sunShadowMap[E]=Z;const ie=$.getViewportCount();for(let Ie=0;Ie<ie;Ie++)r.sunShadowMatrix[R+Ie]=$.getMatrix(Ie),r.sunShadowCascade[R+Ie]=$._cascadeData[Ie];R+=ie,E++}r.sun[S]=q,S++}else if(F.isDirectionalLight){const q=e.get(F);if(q.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const $=F.shadow,O=t.get(F);O.shadowIntensity=$.intensity,O.shadowBias=$.bias,O.shadowNormalBias=$.normalBias,O.shadowRadius=$.radius,O.shadowMapSize=$.mapSize,r.directionalShadow[v]=O,r.directionalShadowMap[v]=Z,r.directionalShadowMatrix[v]=F.shadow.matrix,B++}r.directional[v]=q,v++}else if(F.isSpotLight){const q=e.get(F);q.position.setFromMatrixPosition(F.matrixWorld),q.color.copy(J).multiplyScalar(ue),q.distance=ee,q.coneCos=Math.cos(F.angle),q.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),q.decay=F.decay,r.spot[D]=q;const $=F.shadow;if(F.map&&(r.spotLightMap[A]=F.map,A++,$.updateMatrices(F),F.castShadow&&U++),r.spotLightMatrix[D]=$.matrix,F.castShadow){const O=t.get(F);O.shadowIntensity=$.intensity,O.shadowBias=$.bias,O.shadowNormalBias=$.normalBias,O.shadowRadius=$.radius,O.shadowMapSize=$.mapSize,r.spotShadow[D]=O,r.spotShadowMap[D]=Z,T++}D++}else if(F.isRectAreaLight){const q=e.get(F);q.color.copy(J).multiplyScalar(ue),q.halfWidth.set(F.width*.5,0,0),q.halfHeight.set(0,F.height*.5,0),r.rectArea[k]=q,k++}else if(F.isPointLight){const q=e.get(F);if(q.color.copy(F.color).multiplyScalar(F.intensity),q.distance=F.distance,q.decay=F.decay,F.castShadow){const $=F.shadow,O=t.get(F);O.shadowIntensity=$.intensity,O.shadowBias=$.bias,O.shadowNormalBias=$.normalBias,O.shadowRadius=$.radius,O.shadowMapSize=$.mapSize,O.shadowCameraNear=$.camera.near,O.shadowCameraFar=$.camera.far,r.pointShadow[y]=O,r.pointShadowMap[y]=Z,r.pointShadowMatrix[y]=F.shadow.matrix,I++}r.point[y]=q,y++}else if(F.isHemisphereLight){const q=e.get(F);q.skyColor.copy(F.color).multiplyScalar(ue),q.groundColor.copy(F.groundColor).multiplyScalar(ue),r.hemi[P]=q,P++}}k>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ke.LTC_FLOAT_1,r.rectAreaLTC2=Ke.LTC_FLOAT_2):(r.rectAreaLTC1=Ke.LTC_HALF_1,r.rectAreaLTC2=Ke.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=M,r.ambient[2]=_;const K=r.hash;(K.sunLength!==S||K.directionalLength!==v||K.pointLength!==y||K.spotLength!==D||K.rectAreaLength!==k||K.hemiLength!==P||K.numSunShadows!==E||K.numDirectionalShadows!==B||K.numPointShadows!==I||K.numSpotShadows!==T||K.numSpotMaps!==A||K.numLightProbes!==H)&&(r.sun.length=S,r.directional.length=v,r.spot.length=D,r.rectArea.length=k,r.point.length=y,r.hemi.length=P,r.sunShadow.length=E,r.sunShadowMap.length=E,r.sunShadowMatrix.length=R,r.sunShadowCascade.length=R,r.directionalShadow.length=B,r.directionalShadowMap.length=B,r.directionalShadowMatrix.length=B,r.pointShadow.length=I,r.pointShadowMap.length=I,r.pointShadowMatrix.length=I,r.spotShadow.length=T,r.spotShadowMap.length=T,r.spotLightMatrix.length=T+A-U,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=H,K.sunLength=S,K.directionalLength=v,K.pointLength=y,K.spotLength=D,K.rectAreaLength=k,K.hemiLength=P,K.numSunShadows=E,K.numDirectionalShadows=B,K.numPointShadows=I,K.numSpotShadows=T,K.numSpotMaps=A,K.numLightProbes=H,r.version=vE++)}function p(m,x){let M=0,_=0,S=0,E=0,R=0,v=0;const y=x.matrixWorldInverse;for(let D=0,k=m.length;D<k;D++){const P=m[D];if(P.isSunLight){const B=r.sun[M];B.direction.setFromMatrixPosition(P.matrixWorld),B.direction.transformDirection(y),M++}else if(P.isDirectionalLight){const B=r.directional[_];B.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),B.direction.sub(o),B.direction.transformDirection(y),_++}else if(P.isSpotLight){const B=r.spot[E];B.position.setFromMatrixPosition(P.matrixWorld),B.position.applyMatrix4(y),B.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),B.direction.sub(o),B.direction.transformDirection(y),E++}else if(P.isRectAreaLight){const B=r.rectArea[R];B.position.setFromMatrixPosition(P.matrixWorld),B.position.applyMatrix4(y),u.identity(),l.copy(P.matrixWorld),l.premultiply(y),u.extractRotation(l),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),B.halfWidth.applyMatrix4(u),B.halfHeight.applyMatrix4(u),R++}else if(P.isPointLight){const B=r.point[S];B.position.setFromMatrixPosition(P.matrixWorld),B.position.applyMatrix4(y),S++}else if(P.isHemisphereLight){const B=r.hemi[v];B.direction.setFromMatrixPosition(P.matrixWorld),B.direction.transformDirection(y),v++}}}return{setup:d,setupView:p,state:r}}function Y0(s){const e=new xE(s),t=[],r=[],o=[];function l(M){x.camera=M,t.length=0,r.length=0,o.length=0}function u(M){M.isLightProbeGrid?o.push(M):t.push(M)}function d(M){r.push(M)}function p(){e.setup(t),o.sort((M,_)=>M.priority-_.priority||M.id-_.id)}function m(M){e.setupView(t,M)}const x={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:x,setupLights:p,setupLightsView:m,pushLight:u,pushShadow:d}}function yE(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let d;return u===void 0?(d=new Y0(s),e.set(o,[d])):l>=u.length?(d=new Y0(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const SE=`void main() {
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
}`,TE=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],EE=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],q0=new sn,po=new N,Kh=new N;function wE(s,e,t){let r=new wo;const o=new Ye,l=new Ye,u=new xn,d=new Uy,p=new Oy,m={},x=t.maxTextureSize,M={[ws]:mi,[mi]:ws,[Yi]:Yi},_=new As({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:SE,fragmentShader:ME}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const E=new oi;E.setAttribute("position",new ts(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Et(E,_),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oc;let y=this.type;this.render=function(I,T,A){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||I.length===0)return;this.type===ig&&(ft("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=oc);const U=s.getRenderTarget(),H=s.getActiveCubeFace(),K=s.getActiveMipmapLevel(),Q=s.state;Q.setBlending(ya),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const he=y!==this.type;he&&T.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(J=>J.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,J=I.length;F<J;F++){const ue=I[F],ee=ue.shadow;if(ee===void 0){ft("WebGLShadowMap:",ue,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;o.copy(ee.mapSize);const Z=ee.getFrameExtents();o.multiply(Z),l.copy(ee.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(l.x=Math.floor(x/Z.x),o.x=l.x*Z.x,ee.mapSize.x=l.x),o.y>x&&(l.y=Math.floor(x/Z.y),o.y=l.y*Z.y,ee.mapSize.y=l.y));const q=s.state.buffers.depth.getReversed();if(ee.camera._reversedDepth=q,ee.map===null||he===!0){if(ee.map!==null&&(ee.map.depthTexture!==null&&(ee.map.depthTexture.dispose(),ee.map.depthTexture=null),ee.map.dispose()),this.type===mo){if(ue.isPointLight){ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ee.map=new lr(o.x,o.y,{format:Cs,type:ur,minFilter:ai,magFilter:ai,generateMipmaps:!1}),ee.map.texture.name=ue.name+".shadowMap",ee.map.depthTexture=new Ea(o.x,o.y,ar),ee.map.depthTexture.name=ue.name+".shadowMapDepth",ee.map.depthTexture.format=ns,ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=Xn,ee.map.depthTexture.magFilter=Xn}else ue.isPointLight?(ee.map=new af(o.x),ee.map.depthTexture=new Ig(o.x,cr)):(ee.map=new lr(o.x,o.y),ee.map.depthTexture=new Ea(o.x,o.y,cr)),ee.map.depthTexture.name=ue.name+".shadowMap",ee.map.depthTexture.format=ns,this.type===oc?(ee.map.depthTexture.compareFunction=q?Mg:Sg,ee.map.depthTexture.minFilter=ai,ee.map.depthTexture.magFilter=ai):(ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=Xn,ee.map.depthTexture.magFilter=Xn);ee.camera.updateProjectionMatrix()}ee.map.isWebGLCubeRenderTarget!==!0&&(ee.map.width!==o.x||ee.map.height!==o.y)&&ee.map.setSize(o.x,o.y);const $=ee.map.isWebGLCubeRenderTarget?6:ee.getViewportCount();ue.isPointLight!==!0&&ee.updateMatrices(ue,A);const O=(ee.camera.layers.mask&4294967294)!==0?ee.camera.layers:A.layers;for(let ie=0;ie<$;ie++){const Ie=ee.getCamera(ie);if(ue.isPointLight){const ae=ee.camera,Ce=ee.matrix,be=ue.distance||ae.far;be!==ae.far&&(ae.far=be,ae.updateProjectionMatrix()),po.setFromMatrixPosition(ue.matrixWorld),ae.position.copy(po),Kh.copy(ae.position),Kh.add(TE[ie]),ae.up.copy(EE[ie]),ae.lookAt(Kh),ae.updateMatrixWorld(),Ce.makeTranslation(-po.x,-po.y,-po.z),q0.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),ee._frustum.setFromProjectionMatrix(q0,ae.coordinateSystem,ae.reversedDepth)}if(ee.map.isWebGLCubeRenderTarget)s.setRenderTarget(ee.map,ie),s.clear();else{ie===0&&(s.setRenderTarget(ee.map),s.clear());const ae=ee.getViewport(ie);u.set(l.x*ae.x,l.y*ae.y,l.x*ae.z,l.y*ae.w),Q.viewport(u)}r=ee.getFrustum(ie),P(T,A,Ie,ue,O,this.type)}ee.isPointLightShadow!==!0&&this.type===mo&&D(ee,A),ee.needsUpdate=!1}y=this.type,v.needsUpdate=!1,s.setRenderTarget(U,H,K)};function D(I,T){const A=e.update(R);_.defines.VSM_SAMPLES!==I.blurSamples&&(_.defines.VSM_SAMPLES=I.blurSamples,S.defines.VSM_SAMPLES=I.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),I.mapPass===null?I.mapPass=new lr(o.x,o.y,{format:Cs,type:ur}):(I.mapPass.width!==I.map.width||I.mapPass.height!==I.map.height)&&I.mapPass.setSize(I.map.width,I.map.height),_.uniforms.shadow_pass.value=I.map.depthTexture,_.uniforms.resolution.value.set(I.map.width,I.map.height),_.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(T,null,A,_,R,null),S.uniforms.shadow_pass.value=I.mapPass.texture,S.uniforms.resolution.value.set(I.map.width,I.map.height),S.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(T,null,A,S,R,null)}function k(I,T,A,U){let H=null;const K=A.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(K!==void 0)H=K;else if(H=A.isPointLight===!0?p:d,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const Q=H.uuid,he=T.uuid;let F=m[Q];F===void 0&&(F={},m[Q]=F);let J=F[he];J===void 0&&(J=H.clone(),F[he]=J,T.addEventListener("dispose",B)),H=J}if(H.visible=T.visible,H.wireframe=T.wireframe,U===mo?H.side=T.shadowSide!==null?T.shadowSide:T.side:H.side=T.shadowSide!==null?T.shadowSide:M[T.side],H.alphaMap=T.alphaMap,H.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,H.map=T.map,H.clipShadows=T.clipShadows,H.clippingPlanes=T.clippingPlanes,H.clipIntersection=T.clipIntersection,H.displacementMap=T.displacementMap,H.displacementScale=T.displacementScale,H.displacementBias=T.displacementBias,H.wireframeLinewidth=T.wireframeLinewidth,H.linewidth=T.linewidth,A.isPointLight===!0&&H.isMeshDistanceMaterial===!0){const Q=s.properties.get(H);Q.light=A}return H}function P(I,T,A,U,H,K){if(I.visible===!1)return;if(I.layers.test(H)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&K===mo)&&(!I.frustumCulled||I.intersectsFrustum(r))){I.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,I.matrixWorld);const F=e.update(I),J=I.material;if(Array.isArray(J)){const ue=F.groups;for(let ee=0,Z=ue.length;ee<Z;ee++){const q=ue[ee],$=J[q.materialIndex];if($&&$.visible){const O=k(I,$,U,K);I.onBeforeShadow(s,I,T,A,F,O,q),s.renderBufferDirect(A,null,F,O,I,q),I.onAfterShadow(s,I,T,A,F,O,q)}}}else if(J.visible){const ue=k(I,J,U,K);I.onBeforeShadow(s,I,T,A,F,ue,null),s.renderBufferDirect(A,null,F,ue,I,null),I.onAfterShadow(s,I,T,A,F,ue,null)}}const he=I.children;for(let F=0,J=he.length;F<J;F++)P(he[F],T,A,U,H,K)}function B(I){I.target.removeEventListener("dispose",B);for(const A in m){const U=m[A],H=I.target.uuid;H in U&&(U[H].dispose(),delete U[H])}}}function CE(s,e){function t(){let V=!1;const _e=new xn;let ve=null;const Be=new xn(0,0,0,0);return{setMask:function(Ue){ve!==Ue&&!V&&(s.colorMask(Ue,Ue,Ue,Ue),ve=Ue)},setLocked:function(Ue){V=Ue},setClear:function(Ue,ke,le,pe,fe){fe===!0&&(Ue*=pe,ke*=pe,le*=pe),_e.set(Ue,ke,le,pe),Be.equals(_e)===!1&&(s.clearColor(Ue,ke,le,pe),Be.copy(_e))},reset:function(){V=!1,ve=null,Be.set(-1,0,0,0)}}}function r(){let V=!1,_e=!1,ve=null,Be=null,Ue=null;return{setReversed:function(ke){if(_e!==ke){const le=e.get("EXT_clip_control");ke?le.clipControlEXT(le.LOWER_LEFT_EXT,le.ZERO_TO_ONE_EXT):le.clipControlEXT(le.LOWER_LEFT_EXT,le.NEGATIVE_ONE_TO_ONE_EXT),_e=ke;const pe=Ue;Ue=null,this.setClear(pe)}},getReversed:function(){return _e},setTest:function(ke){ke?we(s.DEPTH_TEST):Ve(s.DEPTH_TEST)},setMask:function(ke){ve!==ke&&!V&&(s.depthMask(ke),ve=ke)},setFunc:function(ke){if(_e&&(ke=zx[ke]),Be!==ke){switch(ke){case $h:s.depthFunc(s.NEVER);break;case Zh:s.depthFunc(s.ALWAYS);break;case Qh:s.depthFunc(s.LESS);break;case So:s.depthFunc(s.LEQUAL);break;case Jh:s.depthFunc(s.EQUAL);break;case ed:s.depthFunc(s.GEQUAL);break;case td:s.depthFunc(s.GREATER);break;case nd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Be=ke}},setLocked:function(ke){V=ke},setClear:function(ke){Ue!==ke&&(Ue=ke,_e&&(ke=1-ke),s.clearDepth(ke))},reset:function(){V=!1,ve=null,Be=null,Ue=null,_e=!1}}}function o(){let V=!1,_e=null,ve=null,Be=null,Ue=null,ke=null,le=null,pe=null,fe=null;return{setTest:function(ge){V||(ge?we(s.STENCIL_TEST):Ve(s.STENCIL_TEST))},setMask:function(ge){_e!==ge&&!V&&(s.stencilMask(ge),_e=ge)},setFunc:function(ge,Te,ye){(ve!==ge||Be!==Te||Ue!==ye)&&(s.stencilFunc(ge,Te,ye),ve=ge,Be=Te,Ue=ye)},setOp:function(ge,Te,ye){(ke!==ge||le!==Te||pe!==ye)&&(s.stencilOp(ge,Te,ye),ke=ge,le=Te,pe=ye)},setLocked:function(ge){V=ge},setClear:function(ge){fe!==ge&&(s.clearStencil(ge),fe=ge)},reset:function(){V=!1,_e=null,ve=null,Be=null,Ue=null,ke=null,le=null,pe=null,fe=null}}}const l=new t,u=new r,d=new o;let p={};const m=new WeakMap;let x={},M={},_={},S=new WeakMap,E=[],R=null,v=!1,y=null,D=null,k=null,P=null,B=null,I=null,T=null,A=new Ut(0,0,0),U=0,H=!1,K=null,Q=null,he=null,F=null,J=null;const ue=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,Z=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(q)[1]),ee=Z>=1):q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),ee=Z>=2);let $=null,O={};const ie=s.getParameter(s.SCISSOR_BOX),Ie=s.getParameter(s.VIEWPORT),ae=new xn().fromArray(ie),Ce=new xn().fromArray(Ie);function be(V,_e,ve,Be){const Ue=new Uint8Array(4),ke=s.createTexture();s.bindTexture(V,ke),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let le=0;le<ve;le++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(_e,0,s.RGBA,1,1,Be,0,s.RGBA,s.UNSIGNED_BYTE,Ue):s.texImage2D(_e+le,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ue);return ke}const Ge={};Ge[s.TEXTURE_2D]=be(s.TEXTURE_2D,s.TEXTURE_2D,1),Ge[s.TEXTURE_CUBE_MAP]=be(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ge[s.TEXTURE_2D_ARRAY]=be(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ge[s.TEXTURE_3D]=be(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),we(s.DEPTH_TEST),u.setFunc(So),yt(!1),jt(zm),we(s.CULL_FACE),$t(ya);function we(V){x[V]!==!0&&(s.enable(V),x[V]=!0)}function Ve(V){x[V]!==!1&&(s.disable(V),x[V]=!1)}function Dt(V,_e){return _[V]!==_e?(s.bindFramebuffer(V,_e),_[V]=_e,V===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=_e),V===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=_e),!0):!1}function it(V,_e){let ve=E,Be=!1;if(V){ve=S.get(_e),ve===void 0&&(ve=[],S.set(_e,ve));const Ue=V.textures;if(ve.length!==Ue.length||ve[0]!==s.COLOR_ATTACHMENT0){for(let ke=0,le=Ue.length;ke<le;ke++)ve[ke]=s.COLOR_ATTACHMENT0+ke;ve.length=Ue.length,Be=!0}}else ve[0]!==s.BACK&&(ve[0]=s.BACK,Be=!0);Be&&s.drawBuffers(ve)}function Mt(V){return R!==V?(s.useProgram(V),R=V,!0):!1}const Rt={[ga]:s.FUNC_ADD,[cx]:s.FUNC_SUBTRACT,[ux]:s.FUNC_REVERSE_SUBTRACT};Rt[hx]=s.MIN,Rt[dx]=s.MAX;const xt={[fx]:s.ZERO,[px]:s.ONE,[mx]:s.SRC_COLOR,[rg]:s.SRC_ALPHA,[Sx]:s.SRC_ALPHA_SATURATE,[xx]:s.DST_COLOR,[vx]:s.DST_ALPHA,[gx]:s.ONE_MINUS_SRC_COLOR,[sg]:s.ONE_MINUS_SRC_ALPHA,[yx]:s.ONE_MINUS_DST_COLOR,[_x]:s.ONE_MINUS_DST_ALPHA,[Mx]:s.CONSTANT_COLOR,[Tx]:s.ONE_MINUS_CONSTANT_COLOR,[Ex]:s.CONSTANT_ALPHA,[wx]:s.ONE_MINUS_CONSTANT_ALPHA};function $t(V,_e,ve,Be,Ue,ke,le,pe,fe,ge){if(V===ya){v===!0&&(Ve(s.BLEND),v=!1);return}if(v===!1&&(we(s.BLEND),v=!0),V!==lx){if(V!==y||ge!==H){if((D!==ga||B!==ga)&&(s.blendEquation(s.FUNC_ADD),D=ga,B=ga),ge)switch(V){case vo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Hm:s.blendFunc(s.ONE,s.ONE);break;case Vm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Wt("WebGLState: Invalid blending: ",V);break}else switch(V){case vo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Hm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Vm:Wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gm:Wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Wt("WebGLState: Invalid blending: ",V);break}k=null,P=null,I=null,T=null,A.set(0,0,0),U=0,y=V,H=ge}return}Ue=Ue||_e,ke=ke||ve,le=le||Be,(_e!==D||Ue!==B)&&(s.blendEquationSeparate(Rt[_e],Rt[Ue]),D=_e,B=Ue),(ve!==k||Be!==P||ke!==I||le!==T)&&(s.blendFuncSeparate(xt[ve],xt[Be],xt[ke],xt[le]),k=ve,P=Be,I=ke,T=le),(pe.equals(A)===!1||fe!==U)&&(s.blendColor(pe.r,pe.g,pe.b,fe),A.copy(pe),U=fe),y=V,H=!1}function ln(V,_e){V.side===Yi?Ve(s.CULL_FACE):we(s.CULL_FACE);let ve=V.side===mi;_e&&(ve=!ve),yt(ve),V.blending===vo&&V.transparent===!1?$t(ya):$t(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),u.setFunc(V.depthFunc),u.setTest(V.depthTest),u.setMask(V.depthWrite),l.setMask(V.colorWrite);const Be=V.stencilWrite;d.setTest(Be),Be&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),de(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?we(s.SAMPLE_ALPHA_TO_COVERAGE):Ve(s.SAMPLE_ALPHA_TO_COVERAGE)}function yt(V){K!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),K=V)}function jt(V){V!==ax?(we(s.CULL_FACE),V!==Q&&(V===zm?s.cullFace(s.BACK):V===ox?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ve(s.CULL_FACE),Q=V}function Ot(V){V!==he&&(ee&&s.lineWidth(V),he=V)}function de(V,_e,ve){V?(we(s.POLYGON_OFFSET_FILL),(F!==_e||J!==ve)&&(F=_e,J=ve,u.getReversed()&&(_e=-_e,ve=-ve),s.polygonOffset(_e,ve))):Ve(s.POLYGON_OFFSET_FILL)}function St(V){V?we(s.SCISSOR_TEST):Ve(s.SCISSOR_TEST)}function wt(V){V===void 0&&(V=s.TEXTURE0+ue-1),$!==V&&(s.activeTexture(V),$=V)}function Ht(V,_e,ve){ve===void 0&&($===null?ve=s.TEXTURE0+ue-1:ve=$);let Be=O[ve];Be===void 0&&(Be={type:void 0,texture:void 0},O[ve]=Be),(Be.type!==V||Be.texture!==_e)&&($!==ve&&(s.activeTexture(ve),$=ve),s.bindTexture(V,_e||Ge[V]),Be.type=V,Be.texture=_e)}function j(){const V=O[$];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function gn(){try{s.compressedTexImage2D(...arguments)}catch(V){Wt("WebGLState:",V)}}function mt(){try{s.compressedTexImage3D(...arguments)}catch(V){Wt("WebGLState:",V)}}function Ct(){try{s.texSubImage2D(...arguments)}catch(V){Wt("WebGLState:",V)}}function Pe(){try{s.texSubImage3D(...arguments)}catch(V){Wt("WebGLState:",V)}}function vt(){try{s.compressedTexSubImage2D(...arguments)}catch(V){Wt("WebGLState:",V)}}function je(){try{s.compressedTexSubImage3D(...arguments)}catch(V){Wt("WebGLState:",V)}}function $e(){try{s.texStorage2D(...arguments)}catch(V){Wt("WebGLState:",V)}}function L(){try{s.texStorage3D(...arguments)}catch(V){Wt("WebGLState:",V)}}function w(){try{s.texImage2D(...arguments)}catch(V){Wt("WebGLState:",V)}}function X(){try{s.texImage3D(...arguments)}catch(V){Wt("WebGLState:",V)}}function Ee(V){return M[V]!==void 0?M[V]:s.getParameter(V)}function Se(V,_e){M[V]!==_e&&(s.pixelStorei(V,_e),M[V]=_e)}function Oe(V){ae.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),ae.copy(V))}function Ae(V){Ce.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),Ce.copy(V))}function re(V,_e){let ve=m.get(_e);ve===void 0&&(ve=new WeakMap,m.set(_e,ve));let Be=ve.get(V);Be===void 0&&(Be=s.getUniformBlockIndex(_e,V.name),s.uniformBlockBinding(_e,Be,Be),ve.set(V,Be))}function xe(V,_e,ve){const Ue=m.get(_e).get(V);p[Ue]!==ve&&(s.bindBufferBase(s.UNIFORM_BUFFER,Ue,ve),p[Ue]=ve)}function De(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),x={},M={},$=null,O={},_={},p={},S=new WeakMap,E=[],R=null,v=!1,y=null,D=null,k=null,P=null,B=null,I=null,T=null,A=new Ut(0,0,0),U=0,H=!1,K=null,Q=null,he=null,F=null,J=null,ae.set(0,0,s.canvas.width,s.canvas.height),Ce.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:we,disable:Ve,bindFramebuffer:Dt,drawBuffers:it,useProgram:Mt,setBlending:$t,setMaterial:ln,setFlipSided:yt,setCullFace:jt,setLineWidth:Ot,setPolygonOffset:de,setScissorTest:St,activeTexture:wt,bindTexture:Ht,unbindTexture:j,compressedTexImage2D:gn,compressedTexImage3D:mt,texImage2D:w,texImage3D:X,pixelStorei:Se,getParameter:Ee,updateUBOMapping:re,uniformBlockBinding:xe,texStorage2D:$e,texStorage3D:L,texSubImage2D:Ct,texSubImage3D:Pe,compressedTexSubImage2D:vt,compressedTexSubImage3D:je,scissor:Oe,viewport:Ae,reset:De}}function AE(s,e,t,r,o,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Ye,x=new WeakMap,M=new Set;let _;const S=new WeakMap,E=new Set,R=new FinalizationRegistry(L=>E.delete(L));let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(L,w){return v?new OffscreenCanvas(L,w):yc("canvas")}function D(L,w,X){let Ee=1;const Se=$e(L);if((Se.width>X||Se.height>X)&&(Ee=X/Math.max(Se.width,Se.height)),Ee<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Oe=Math.floor(Ee*Se.width),Ae=Math.floor(Ee*Se.height);_===void 0&&(_=y(Oe,Ae));const re=w?y(Oe,Ae):_;return re.width=Oe,re.height=Ae,re.getContext("2d").drawImage(L,0,0,Oe,Ae),ft("WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+Oe+"x"+Ae+")."),re}else return"data"in L&&ft("WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),L;return L}function k(L){return L.generateMipmaps}function P(L){s.generateMipmap(L)}function B(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function I(L,w,X,Ee,Se,Oe=!1){if(L!==null){if(s[L]!==void 0)return s[L];ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Ae;Ee&&(Ae=e.get("EXT_texture_norm16"),Ae||ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let re=w;if(w===s.RED&&(X===s.FLOAT&&(re=s.R32F),X===s.HALF_FLOAT&&(re=s.R16F),X===s.UNSIGNED_BYTE&&(re=s.R8),X===s.UNSIGNED_SHORT&&Ae&&(re=Ae.R16_EXT),X===s.SHORT&&Ae&&(re=Ae.R16_SNORM_EXT)),w===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(re=s.R8UI),X===s.UNSIGNED_SHORT&&(re=s.R16UI),X===s.UNSIGNED_INT&&(re=s.R32UI),X===s.BYTE&&(re=s.R8I),X===s.SHORT&&(re=s.R16I),X===s.INT&&(re=s.R32I)),w===s.RG&&(X===s.FLOAT&&(re=s.RG32F),X===s.HALF_FLOAT&&(re=s.RG16F),X===s.UNSIGNED_BYTE&&(re=s.RG8),X===s.UNSIGNED_SHORT&&Ae&&(re=Ae.RG16_EXT),X===s.SHORT&&Ae&&(re=Ae.RG16_SNORM_EXT)),w===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(re=s.RG8UI),X===s.UNSIGNED_SHORT&&(re=s.RG16UI),X===s.UNSIGNED_INT&&(re=s.RG32UI),X===s.BYTE&&(re=s.RG8I),X===s.SHORT&&(re=s.RG16I),X===s.INT&&(re=s.RG32I)),w===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&(re=s.RGB8UI),X===s.UNSIGNED_SHORT&&(re=s.RGB16UI),X===s.UNSIGNED_INT&&(re=s.RGB32UI),X===s.BYTE&&(re=s.RGB8I),X===s.SHORT&&(re=s.RGB16I),X===s.INT&&(re=s.RGB32I)),w===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&(re=s.RGBA8UI),X===s.UNSIGNED_SHORT&&(re=s.RGBA16UI),X===s.UNSIGNED_INT&&(re=s.RGBA32UI),X===s.BYTE&&(re=s.RGBA8I),X===s.SHORT&&(re=s.RGBA16I),X===s.INT&&(re=s.RGBA32I)),w===s.RGB&&(X===s.UNSIGNED_SHORT&&Ae&&(re=Ae.RGB16_EXT),X===s.SHORT&&Ae&&(re=Ae.RGB16_SNORM_EXT),X===s.UNSIGNED_INT_5_9_9_9_REV&&(re=s.RGB9_E5),X===s.UNSIGNED_INT_10F_11F_11F_REV&&(re=s.R11F_G11F_B10F)),w===s.RGBA){const xe=Oe?xc:zt.getTransfer(Se);X===s.FLOAT&&(re=s.RGBA32F),X===s.HALF_FLOAT&&(re=s.RGBA16F),X===s.UNSIGNED_BYTE&&(re=xe===nn?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT&&Ae&&(re=Ae.RGBA16_EXT),X===s.SHORT&&Ae&&(re=Ae.RGBA16_SNORM_EXT),X===s.UNSIGNED_SHORT_4_4_4_4&&(re=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(re=s.RGB5_A1)}return(re===s.R16F||re===s.R32F||re===s.RG16F||re===s.RG32F||re===s.RGBA16F||re===s.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function T(L,w){let X;return L?w===null||w===cr||w===Ta?X=s.DEPTH24_STENCIL8:w===ar?X=s.DEPTH32F_STENCIL8:w===To&&(X=s.DEPTH24_STENCIL8,ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===cr||w===Ta?X=s.DEPTH_COMPONENT24:w===ar?X=s.DEPTH_COMPONENT32F:w===To&&(X=s.DEPTH_COMPONENT16),X}function A(L,w){return k(L)===!0||L.isFramebufferTexture&&L.minFilter!==Xn&&L.minFilter!==ai?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function U(L){const w=new WeakRef(L);r.get(L).__ref=w,E.add(w),R.register(L,w,w)}function H(L){const w=r.get(L).__ref;w!==void 0&&(E.delete(w),R.unregister(w))}function K(L){he(L.target)}function Q(L){F(L.target)}function he(L){L.removeEventListener("dispose",K),H(L),ue(L),L.isVideoTexture&&x.delete(L),L.isHTMLTexture&&M.delete(L)}function F(L){L.removeEventListener("dispose",Q),H(L),Z(L)}function J(){for(const L of E){const w=L.deref();w!==void 0&&(w.isRenderTarget===!0?F(w):he(w))}E.clear(),M.clear()}function ue(L){const w=r.get(L);if(w.__webglInit===void 0)return;const X=L.source,Ee=S.get(X);if(Ee){const Se=Ee[w.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&ee(L),Object.keys(Ee).length===0&&S.delete(X)}r.remove(L)}function ee(L){const w=r.get(L);s.deleteTexture(w.__webglTexture);const X=L.source,Ee=S.get(X);delete Ee[w.__cacheKey],u.memory.textures--}function Z(L){const w=r.get(L);w.__depthDisposeCallback&&w.__depthDisposeCallback();const X=L.depthTexture;if(X&&X.renderTarget===L&&he(X),L.isWebGLCubeRenderTarget)for(let Se=0;Se<6;Se++){if(Array.isArray(w.__webglFramebuffer[Se]))for(let Oe=0;Oe<w.__webglFramebuffer[Se].length;Oe++)s.deleteFramebuffer(w.__webglFramebuffer[Se][Oe]);else s.deleteFramebuffer(w.__webglFramebuffer[Se]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[Se])}else{if(Array.isArray(w.__webglFramebuffer))for(let Se=0;Se<w.__webglFramebuffer.length;Se++)s.deleteFramebuffer(w.__webglFramebuffer[Se]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Se=0;Se<w.__webglColorRenderbuffer.length;Se++)w.__webglColorRenderbuffer[Se]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[Se]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Ee=L.textures;for(let Se=0,Oe=Ee.length;Se<Oe;Se++){const Ae=r.get(Ee[Se]);Ae.__webglTexture&&(s.deleteTexture(Ae.__webglTexture),u.memory.textures--),r.remove(Ee[Se])}r.remove(L)}let q=0;function $(){q=0}function O(){return q}function ie(L){q=L}function Ie(){const L=q;return L>=o.maxTextures&&ft("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+o.maxTextures),q+=1,L}function ae(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.mipmapsAutoUpdate),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function Ce(L,w){const X=r.get(L);if(L.isVideoTexture&&vt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&X.__version!==L.version){const Ee=L.image;if(Ee===null)ft("WebGLRenderer: Texture marked for update but no image data found.");else if(Ee.complete===!1)ft("WebGLRenderer: Texture marked for update but image is incomplete");else{ln(X,L,w);return}}else L.isExternalTexture&&(X.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+w)}function be(L,w){const X=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){ln(X,L,w);return}else L.isExternalTexture&&(X.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+w)}function Ge(L,w){const X=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){ln(X,L,w);return}t.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+w)}function we(L,w){const X=r.get(L);if(L.version>0&&X.__version!==L.version){yt(X,L,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+w)}const Ve={[id]:s.REPEAT,[wr]:s.CLAMP_TO_EDGE,[rd]:s.MIRRORED_REPEAT},Dt={[Xn]:s.NEAREST,[bx]:s.NEAREST_MIPMAP_NEAREST,[Rl]:s.NEAREST_MIPMAP_LINEAR,[ai]:s.LINEAR,[mh]:s.LINEAR_MIPMAP_NEAREST,[Jr]:s.LINEAR_MIPMAP_LINEAR},it={[Dx]:s.NEVER,[Tg]:s.ALWAYS,[Lx]:s.LESS,[Sg]:s.LEQUAL,[Ix]:s.EQUAL,[Mg]:s.GEQUAL,[Ux]:s.GREATER,[Ox]:s.NOTEQUAL};function Mt(L,w){if(w.type===ar&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===ai||w.magFilter===mh||w.magFilter===Rl||w.magFilter===Jr||w.minFilter===ai||w.minFilter===mh||w.minFilter===Rl||w.minFilter===Jr)&&ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,Ve[w.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,Ve[w.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,Ve[w.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,Dt[w.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,Dt[w.minFilter]),w.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,it[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Xn||w.minFilter!==Rl&&w.minFilter!==Jr||w.type===ar&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function Rt(L,w){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",K),U(w));const Ee=w.source;let Se=S.get(Ee);Se===void 0&&(Se={},S.set(Ee,Se));const Oe=ae(w);if(Oe!==L.__cacheKey){Se[Oe]===void 0&&(Se[Oe]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,X=!0),Se[Oe].usedTimes++;const Ae=Se[L.__cacheKey];Ae!==void 0&&(Se[L.__cacheKey].usedTimes--,Ae.usedTimes===0&&ee(w)),L.__cacheKey=Oe,L.__webglTexture=Se[Oe].texture}return X}function xt(L,w,X){return Math.floor(Math.floor(L/X)/w)}function $t(L,w,X,Ee){const Oe=L.updateRanges;if(Oe.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,X,Ee,w.data);else{Oe.sort((V,_e)=>V.start-_e.start);let Ae=0;for(let V=1;V<Oe.length;V++){const _e=Oe[Ae],ve=Oe[V],Be=_e.start+_e.count,Ue=xt(ve.start,w.width,4),ke=xt(_e.start,w.width,4);ve.start<=Be+1&&Ue===ke&&xt(ve.start+ve.count-1,w.width,4)===Ue?_e.count=Math.max(_e.count,ve.start+ve.count-_e.start):(++Ae,Oe[Ae]=ve)}Oe.length=Ae+1;const re=t.getParameter(s.UNPACK_ROW_LENGTH),xe=t.getParameter(s.UNPACK_SKIP_PIXELS),De=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let V=0,_e=Oe.length;V<_e;V++){const ve=Oe[V],Be=Math.floor(ve.start/4),Ue=Math.ceil(ve.count/4),ke=Be%w.width,le=Math.floor(Be/w.width),pe=Ue,fe=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,ke),t.pixelStorei(s.UNPACK_SKIP_ROWS,le),t.texSubImage2D(s.TEXTURE_2D,0,ke,le,pe,fe,X,Ee,w.data)}L.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,re),t.pixelStorei(s.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(s.UNPACK_SKIP_ROWS,De)}}function ln(L,w,X){let Ee=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Ee=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Ee=s.TEXTURE_3D);const Se=Rt(L,w),Oe=w.source;t.bindTexture(Ee,L.__webglTexture,s.TEXTURE0+X);const Ae=r.get(Oe);if(Oe.version!==Ae.__version||Se===!0){if(t.activeTexture(s.TEXTURE0+X),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const fe=zt.getPrimaries(zt.workingColorSpace),ge=w.colorSpace===Qr?null:zt.getPrimaries(w.colorSpace),Te=w.colorSpace===Qr||fe===ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te)}t.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment);let xe=D(w.image,!1,o.maxTextureSize);xe=je(w,xe);const De=l.convert(w.format,w.colorSpace),V=l.convert(w.type);let _e=I(w.internalFormat,De,V,w.normalized,w.colorSpace,w.isVideoTexture);Mt(Ee,w);let ve;const Be=w.mipmaps,Ue=w.isVideoTexture!==!0,ke=Ae.__version===void 0||Se===!0,le=Oe.dataReady,pe=A(w,xe);if(w.isDepthTexture)_e=T(w.format===es,w.type),ke&&(Ue?t.texStorage2D(s.TEXTURE_2D,1,_e,xe.width,xe.height):t.texImage2D(s.TEXTURE_2D,0,_e,xe.width,xe.height,0,De,V,null));else if(w.isDataTexture)if(Be.length>0){Ue&&ke&&t.texStorage2D(s.TEXTURE_2D,pe,_e,Be[0].width,Be[0].height);for(let fe=0,ge=Be.length;fe<ge;fe++)ve=Be[fe],Ue?le&&t.texSubImage2D(s.TEXTURE_2D,fe,0,0,ve.width,ve.height,De,V,ve.data):t.texImage2D(s.TEXTURE_2D,fe,_e,ve.width,ve.height,0,De,V,ve.data);w.generateMipmaps=!1}else Ue?(ke&&t.texStorage2D(s.TEXTURE_2D,pe,_e,xe.width,xe.height),le&&$t(w,xe,De,V)):t.texImage2D(s.TEXTURE_2D,0,_e,xe.width,xe.height,0,De,V,xe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ue&&ke&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pe,_e,Be[0].width,Be[0].height,xe.depth);for(let fe=0,ge=Be.length;fe<ge;fe++)if(ve=Be[fe],w.format!==or)if(De!==null)if(Ue){if(le)if(w.layerUpdates.size>0){const Te=b0(ve.width,ve.height,w.format,w.type);for(const ye of w.layerUpdates){const Me=ve.data.subarray(ye*Te/ve.data.BYTES_PER_ELEMENT,(ye+1)*Te/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,ye,ve.width,ve.height,1,De,Me)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,ve.width,ve.height,xe.depth,De,ve.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,fe,_e,ve.width,ve.height,xe.depth,0,ve.data,0,0);else ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?le&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,ve.width,ve.height,xe.depth,De,V,ve.data):t.texImage3D(s.TEXTURE_2D_ARRAY,fe,_e,ve.width,ve.height,xe.depth,0,De,V,ve.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{Ue&&ke&&t.texStorage2D(s.TEXTURE_2D,pe,_e,Be[0].width,Be[0].height);for(let fe=0,ge=Be.length;fe<ge;fe++)ve=Be[fe],w.format!==or?De!==null?Ue?le&&t.compressedTexSubImage2D(s.TEXTURE_2D,fe,0,0,ve.width,ve.height,De,ve.data):t.compressedTexImage2D(s.TEXTURE_2D,fe,_e,ve.width,ve.height,0,ve.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?le&&t.texSubImage2D(s.TEXTURE_2D,fe,0,0,ve.width,ve.height,De,V,ve.data):t.texImage2D(s.TEXTURE_2D,fe,_e,ve.width,ve.height,0,De,V,ve.data)}else if(w.isDataArrayTexture)if(Ue){if(ke&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pe,_e,xe.width,xe.height,xe.depth),le)if(w.layerUpdates.size>0){const fe=b0(xe.width,xe.height,w.format,w.type);for(const ge of w.layerUpdates){const Te=xe.data.subarray(ge*fe/xe.data.BYTES_PER_ELEMENT,(ge+1)*fe/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ge,xe.width,xe.height,1,De,V,Te)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,De,V,xe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,_e,xe.width,xe.height,xe.depth,0,De,V,xe.data);else if(w.isData3DTexture)Ue?(ke&&t.texStorage3D(s.TEXTURE_3D,pe,_e,xe.width,xe.height,xe.depth),le&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,De,V,xe.data)):t.texImage3D(s.TEXTURE_3D,0,_e,xe.width,xe.height,xe.depth,0,De,V,xe.data);else if(w.isFramebufferTexture){if(ke)if(Ue)t.texStorage2D(s.TEXTURE_2D,pe,_e,xe.width,xe.height);else{let fe=xe.width,ge=xe.height;for(let Te=0;Te<pe;Te++)t.texImage2D(s.TEXTURE_2D,Te,_e,fe,ge,0,De,V,null),fe>>=1,ge>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in s){const fe=s.canvas;if(fe.hasAttribute("layoutsubtree")||fe.setAttribute("layoutsubtree","true"),xe.parentNode!==fe){fe.appendChild(xe),M.add(w),fe.onpaint=ge=>{const Te=ge.changedElements;for(const ye of M)Te.includes(ye.image)&&(ye.needsUpdate=!0)},fe.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,xe);else{const Te=s.RGBA,ye=s.RGBA,Me=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Te,ye,Me,xe)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Be.length>0){if(Ue&&ke){const fe=$e(Be[0]);t.texStorage2D(s.TEXTURE_2D,pe,_e,fe.width,fe.height)}for(let fe=0,ge=Be.length;fe<ge;fe++)ve=Be[fe],Ue?le&&t.texSubImage2D(s.TEXTURE_2D,fe,0,0,De,V,ve):t.texImage2D(s.TEXTURE_2D,fe,_e,De,V,ve);w.generateMipmaps=!1}else if(Ue){if(ke){const fe=$e(xe);t.texStorage2D(s.TEXTURE_2D,pe,_e,fe.width,fe.height)}le&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,De,V,xe)}else t.texImage2D(s.TEXTURE_2D,0,_e,De,V,xe);k(w)&&w.mipmapsAutoUpdate===!0&&P(Ee),Ae.__version=Oe.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function yt(L,w,X){if(w.image.length!==6)return;const Ee=Rt(L,w),Se=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+X);const Oe=r.get(Se);if(Se.version!==Oe.__version||Ee===!0){t.activeTexture(s.TEXTURE0+X);const Ae=zt.getPrimaries(zt.workingColorSpace),re=w.colorSpace===Qr?null:zt.getPrimaries(w.colorSpace),xe=w.colorSpace===Qr||Ae===re?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const De=w.isCompressedTexture||w.image[0].isCompressedTexture,V=w.image[0]&&w.image[0].isDataTexture,_e=[];for(let ye=0;ye<6;ye++)!De&&!V?_e[ye]=D(w.image[ye],!0,o.maxCubemapSize):_e[ye]=V?w.image[ye].image:w.image[ye],_e[ye]=je(w,_e[ye]);const ve=_e[0],Be=l.convert(w.format,w.colorSpace),Ue=l.convert(w.type);let ke=I(w.internalFormat,Be,Ue,w.normalized,w.colorSpace);const le=w.isVideoTexture!==!0,pe=Oe.__version===void 0||Ee===!0,fe=Se.dataReady;let ge=A(w,ve);Mt(s.TEXTURE_CUBE_MAP,w);let Te;if(w.isDepthTexture){if(ke=T(w.format===es,w.type),pe)if(le)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,ke,ve.width,ve.height);else for(let ye=0;ye<6;ye++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ke,ve.width,ve.height,0,Be,Ue,null)}else if(De){le&&pe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,ke,ve.width,ve.height);for(let ye=0;ye<6;ye++){Te=_e[ye].mipmaps;for(let Me=0;Me<Te.length;Me++){const Xe=Te[Me];w.format!==or?Be!==null?le?fe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Me,0,0,Xe.width,Xe.height,Be,Xe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Me,ke,Xe.width,Xe.height,0,Xe.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):le?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Me,0,0,Xe.width,Xe.height,Be,Ue,Xe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Me,ke,Xe.width,Xe.height,0,Be,Ue,Xe.data)}}}else{if(Te=w.mipmaps,le&&pe){Te.length>0&&ge++;const ye=$e(_e[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,ke,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(V){le?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,_e[ye].width,_e[ye].height,Be,Ue,_e[ye].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ke,_e[ye].width,_e[ye].height,0,Be,Ue,_e[ye].data);for(let Me=0;Me<Te.length;Me++){const qe=Te[Me].image[ye].image;le?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Me+1,0,0,qe.width,qe.height,Be,Ue,qe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Me+1,ke,qe.width,qe.height,0,Be,Ue,qe.data)}}else{le?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Be,Ue,_e[ye]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ke,Be,Ue,_e[ye]);for(let Me=0;Me<Te.length;Me++){const Xe=Te[Me];le?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Me+1,0,0,Be,Ue,Xe.image[ye]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Me+1,ke,Be,Ue,Xe.image[ye])}}}k(w)&&w.mipmapsAutoUpdate===!0&&P(s.TEXTURE_CUBE_MAP),Oe.__version=Se.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function jt(L,w,X,Ee,Se,Oe){const Ae=l.convert(X.format,X.colorSpace),re=l.convert(X.type),xe=I(X.internalFormat,Ae,re,X.normalized,X.colorSpace),De=r.get(w),V=r.get(X);if(V.__renderTarget=w,!De.__hasExternalTextures){const _e=Math.max(1,w.width>>Oe),ve=Math.max(1,w.height>>Oe);Se===s.TEXTURE_3D||Se===s.TEXTURE_2D_ARRAY?t.texImage3D(Se,Oe,xe,_e,ve,w.depth,0,Ae,re,null):t.texImage2D(Se,Oe,xe,_e,ve,0,Ae,re,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),Pe(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ee,Se,V.__webglTexture,0,Ct(w)):(Se===s.TEXTURE_2D||Se>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Ee,Se,V.__webglTexture,Oe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ot(L,w,X){if(s.bindRenderbuffer(s.RENDERBUFFER,L),w.depthBuffer){const Ee=w.depthTexture,Se=Ee&&Ee.isDepthTexture?Ee.type:null,Oe=T(w.stencilBuffer,Se),Ae=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Pe(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct(w),Oe,w.width,w.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct(w),Oe,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Oe,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ae,s.RENDERBUFFER,L)}else{const Ee=w.textures;for(let Se=0;Se<Ee.length;Se++){const Oe=Ee[Se],Ae=l.convert(Oe.format,Oe.colorSpace),re=l.convert(Oe.type),xe=I(Oe.internalFormat,Ae,re,Oe.normalized,Oe.colorSpace);Pe(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct(w),xe,w.width,w.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct(w),xe,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,xe,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function de(L,w,X){const Ee=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Se=r.get(w.depthTexture);Se.__renderTarget=w;const Oe=Ee?w.depthTexture.image[0]:w.depthTexture.image;(!Se.__webglTexture||Oe.width!==w.width||Oe.height!==w.height)&&(Oe.width=w.width,Oe.height=w.height,w.depthTexture.needsUpdate=!0),Ee?we(w.depthTexture,0):Ce(w.depthTexture,0);const Ae=Se.__webglTexture,re=Ct(w),xe=Ee?s.TEXTURE_CUBE_MAP_POSITIVE_X+X:s.TEXTURE_2D,De=w.depthTexture.format===es?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(w.depthTexture.format===ns)Pe(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,De,xe,Ae,0,re):s.framebufferTexture2D(s.FRAMEBUFFER,De,xe,Ae,0);else if(w.depthTexture.format===es)Pe(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,De,xe,Ae,0,re):s.framebufferTexture2D(s.FRAMEBUFFER,De,xe,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function St(L){const w=r.get(L),X=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const Ee=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Ee){const Se=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Ee.removeEventListener("dispose",Se)};Ee.addEventListener("dispose",Se),w.__depthDisposeCallback=Se}w.__boundDepthTexture=Ee}if(L.depthTexture&&!w.__autoAllocateDepthBuffer)if(X)for(let Ee=0;Ee<6;Ee++)de(w.__webglFramebuffer[Ee],L,Ee);else L.texture.mipmaps.length>0?de(w.__webglFramebuffer[0],L,0):de(w.__webglFramebuffer,L,0);else if(X){w.__webglDepthbuffer=[];for(let Ee=0;Ee<6;Ee++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[Ee]),w.__webglDepthbuffer[Ee]===void 0)w.__webglDepthbuffer[Ee]=s.createRenderbuffer(),Ot(w.__webglDepthbuffer[Ee],L,!1);else{const Se=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Oe=w.__webglDepthbuffer[Ee];s.bindRenderbuffer(s.RENDERBUFFER,Oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,Oe)}}else if(L.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),Ot(w.__webglDepthbuffer,L,!1);else{const Se=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Oe=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,Oe)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function wt(L,w,X){const Ee=r.get(L);w!==void 0&&jt(Ee.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&St(L)}function Ht(L){const w=L.texture,X=r.get(L),Ee=r.get(w);L.addEventListener("dispose",Q),U(L);const Se=L.textures,Oe=L.isWebGLCubeRenderTarget===!0,Ae=Se.length>1;if(Ae||(Ee.__webglTexture===void 0&&(Ee.__webglTexture=s.createTexture()),Ee.__version=w.version,u.memory.textures++),Oe){X.__webglFramebuffer=[];for(let re=0;re<6;re++)if(w.mipmaps.length>0){X.__webglFramebuffer[re]=[];for(let xe=0;xe<w.mipmaps.length;xe++)X.__webglFramebuffer[re][xe]=s.createFramebuffer()}else X.__webglFramebuffer[re]=s.createFramebuffer()}else{if(w.mipmaps.length>0){X.__webglFramebuffer=[];for(let re=0;re<w.mipmaps.length;re++)X.__webglFramebuffer[re]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(Ae)for(let re=0,xe=Se.length;re<xe;re++){const De=r.get(Se[re]);De.__webglTexture===void 0&&(De.__webglTexture=s.createTexture(),u.memory.textures++)}if(L.samples>0&&Pe(L)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let re=0;re<Se.length;re++){const xe=Se[re];X.__webglColorRenderbuffer[re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[re]);const De=l.convert(xe.format,xe.colorSpace),V=l.convert(xe.type),_e=I(xe.internalFormat,De,V,xe.normalized,xe.colorSpace,L.isXRRenderTarget===!0),ve=Ct(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,_e,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.RENDERBUFFER,X.__webglColorRenderbuffer[re])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),Ot(X.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Oe){t.bindTexture(s.TEXTURE_CUBE_MAP,Ee.__webglTexture),Mt(s.TEXTURE_CUBE_MAP,w);for(let re=0;re<6;re++)if(w.mipmaps.length>0)for(let xe=0;xe<w.mipmaps.length;xe++)jt(X.__webglFramebuffer[re][xe],L,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,xe);else jt(X.__webglFramebuffer[re],L,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);k(w)?P(s.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}else if(Ae){for(let re=0,xe=Se.length;re<xe;re++){const De=Se[re],V=r.get(De);let _e=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(_e=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(_e,V.__webglTexture),Mt(_e,De),jt(X.__webglFramebuffer,L,De,s.COLOR_ATTACHMENT0+re,_e,0),k(De)&&P(_e)}t.unbindTexture()}else{let re=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(re=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(re,Ee.__webglTexture),Mt(re,w),w.mipmaps.length>0)for(let xe=0;xe<w.mipmaps.length;xe++)jt(X.__webglFramebuffer[xe],L,w,s.COLOR_ATTACHMENT0,re,xe);else jt(X.__webglFramebuffer,L,w,s.COLOR_ATTACHMENT0,re,0);k(w)?P(re):w.mipmaps.length>0&&s.texParameteri(re,s.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}L.depthBuffer&&St(L)}function j(L){const w=L.textures;for(let X=0,Ee=w.length;X<Ee;X++){const Se=w[X];if(k(Se)&&Se.mipmapsAutoUpdate===!0){const Oe=B(L),Ae=r.get(Se).__webglTexture;t.bindTexture(Oe,Ae),P(Oe),t.unbindTexture()}}}const gn=[];function mt(L){if(L.samples>0){if(Pe(L)===!1){const w=L.textures,X=L.width,Ee=L.height;let Se=s.COLOR_BUFFER_BIT;const Oe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=r.get(L),re=w.length>1;if(re)for(let De=0;De<w.length;De++)t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let De=0;De<w.length;De++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Se|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Se|=s.STENCIL_BUFFER_BIT)),re){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[De]);const V=r.get(w[De]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,V,0)}s.blitFramebuffer(0,0,X,Ee,0,0,X,Ee,Se,s.NEAREST),p===!0&&(gn.length=0,gn.push(s.COLOR_ATTACHMENT0+De),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&gn.push(Oe),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,gn))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),re)for(let De=0;De<w.length;De++){t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[De]);const V=r.get(w[De]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.TEXTURE_2D,V,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&p){const w=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Ct(L){return Math.min(o.maxSamples,L.samples)}function Pe(L){const w=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function vt(L){const w=u.render.frame;x.get(L)!==w&&(x.set(L,w),L.update())}function je(L,w){const X=L.colorSpace,Ee=L.format,Se=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||X!==_c&&X!==Qr&&(zt.getTransfer(X)===nn?(Ee!==or||Se!==Ti)&&ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Wt("WebGLTextures: Unsupported texture color space:",X)),w}function $e(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=Ie,this.resetTextureUnits=$,this.getTextureUnits=O,this.setTextureUnits=ie,this.setTexture2D=Ce,this.setTexture2DArray=be,this.setTexture3D=Ge,this.setTextureCube=we,this.rebindTextures=wt,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=jt,this.useMultisampledRTT=Pe,this.dispose=J}function bE(s,e){function t(r,o=Qr){let l;const u=zt.getTransfer(o);if(r===Ti)return s.UNSIGNED_BYTE;if(r===Xd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Kd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===gg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===vg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===pg)return s.BYTE;if(r===mg)return s.SHORT;if(r===To)return s.UNSIGNED_SHORT;if(r===jd)return s.INT;if(r===cr)return s.UNSIGNED_INT;if(r===ar)return s.FLOAT;if(r===ur)return s.HALF_FLOAT;if(r===_g)return s.ALPHA;if(r===xg)return s.RGB;if(r===or)return s.RGBA;if(r===ns)return s.DEPTH_COMPONENT;if(r===es)return s.DEPTH_STENCIL;if(r===yg)return s.RED;if(r===Yd)return s.RED_INTEGER;if(r===Cs)return s.RG;if(r===qd)return s.RG_INTEGER;if(r===$d)return s.RGBA_INTEGER;if(r===cc||r===uc||r===hc||r===dc)if(u===nn)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===cc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===uc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===hc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===dc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===cc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===uc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===hc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===dc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===sd||r===ad||r===od||r===ld)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===sd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ad)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===od)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ld)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===cd||r===ud||r===hd||r===dd||r===fd||r===gc||r===pd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===cd||r===ud)return u===nn?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===hd)return u===nn?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===dd)return l.COMPRESSED_R11_EAC;if(r===fd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===gc)return l.COMPRESSED_RG11_EAC;if(r===pd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===md||r===gd||r===vd||r===_d||r===xd||r===yd||r===Sd||r===Md||r===Td||r===Ed||r===wd||r===Cd||r===Ad||r===bd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===md)return u===nn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===gd)return u===nn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===vd)return u===nn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===_d)return u===nn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===xd)return u===nn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===yd)return u===nn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Sd)return u===nn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Md)return u===nn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Td)return u===nn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ed)return u===nn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===wd)return u===nn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Cd)return u===nn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ad)return u===nn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===bd)return u===nn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Nd||r===Rd||r===Pd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Nd)return u===nn?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Rd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Pd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Dd||r===Ld||r===vc||r===Id)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Dd)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Ld)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===vc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Id)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ta?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const NE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RE=`
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

}`;class PE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Ug(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new As({vertexShader:NE,fragmentShader:RE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Et(new Ii(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DE extends ss{constructor(e,t){super();const r=this;let o=null,l=1,u=null,d="local-floor",p=1,m=null,x=null,M=null,_=null,S=null,E=null;const R=typeof XRWebGLBinding<"u",v=new PE,y={},D=t.getContextAttributes();let k=null,P=null;const B=[],I=[],T=new Ye;let A=null,U=null;const H=new Ki;H.viewport=new xn;const K=new Ki;K.viewport=new xn;const Q=[H,K],he=new Vy;let F=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let Ce=B[ae];return Ce===void 0&&(Ce=new Th,B[ae]=Ce),Ce.getTargetRaySpace()},this.getControllerGrip=function(ae){let Ce=B[ae];return Ce===void 0&&(Ce=new Th,B[ae]=Ce),Ce.getGripSpace()},this.getHand=function(ae){let Ce=B[ae];return Ce===void 0&&(Ce=new Th,B[ae]=Ce),Ce.getHandSpace()};function ue(ae){const Ce=I.indexOf(ae.inputSource);if(Ce===-1)return;const be=B[Ce];be!==void 0&&(be.update(ae.inputSource,ae.frame,m||u),be.dispatchEvent({type:ae.type,data:ae.inputSource}))}function ee(){o.removeEventListener("select",ue),o.removeEventListener("selectstart",ue),o.removeEventListener("selectend",ue),o.removeEventListener("squeeze",ue),o.removeEventListener("squeezestart",ue),o.removeEventListener("squeezeend",ue),o.removeEventListener("end",ee),o.removeEventListener("inputsourceschange",Z);for(let ae=0;ae<B.length;ae++){const Ce=I[ae];Ce!==null&&(I[ae]=null,B[ae].disconnect(Ce))}F=null,J=null,v.reset();for(const ae in y)delete y[ae];if(e.setRenderTarget(k),S=null,_=null,M=null,o=null,P=null,Ie.stop(),r.isPresenting=!1,e.setPixelRatio(A),e.setSize(T.width,T.height,!1),U!==null){const ae=U.camera;ae.fov=U.fov,ae.zoom=U.zoom,ae.updateProjectionMatrix(),U=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){l=ae,r.isPresenting===!0&&ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){d=ae,r.isPresenting===!0&&ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(ae){m=ae},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return M===null&&R&&(M=new XRWebGLBinding(o,t)),M},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(ae){if(o=ae,o!==null){if(k=e.getRenderTarget(),o.addEventListener("select",ue),o.addEventListener("selectstart",ue),o.addEventListener("selectend",ue),o.addEventListener("squeeze",ue),o.addEventListener("squeezestart",ue),o.addEventListener("squeezeend",ue),o.addEventListener("end",ee),o.addEventListener("inputsourceschange",Z),D.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(T),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Ge=null,we=null;D.depth&&(we=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=D.stencil?es:ns,Ge=D.stencil?Ta:cr);const Ve={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:l};M=this.getBinding(),_=M.createProjectionLayer(Ve),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),P=new lr(_.textureWidth,_.textureHeight,{format:or,type:Ti,depthTexture:new Ea(_.textureWidth,_.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{const be={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,be),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),P=new lr(S.framebufferWidth,S.framebufferHeight,{format:or,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1,storeMultisampledDepthBuffer:S.ignoreDepthValues===!1,storeMultisampledStencilBuffer:S.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,u=await o.requestReferenceSpace(d),Ie.setContext(o),Ie.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Z(ae){for(let Ce=0;Ce<ae.removed.length;Ce++){const be=ae.removed[Ce],Ge=I.indexOf(be);Ge>=0&&(I[Ge]=null,B[Ge].disconnect(be))}for(let Ce=0;Ce<ae.added.length;Ce++){const be=ae.added[Ce];let Ge=I.indexOf(be);if(Ge===-1){for(let Ve=0;Ve<B.length;Ve++)if(Ve>=I.length){I.push(be),Ge=Ve;break}else if(I[Ve]===null){I[Ve]=be,Ge=Ve;break}if(Ge===-1)break}const we=B[Ge];we&&we.connect(be)}}function q(ae,Ce){Ce===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(Ce.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(o===null)return;let Ce=ae.near,be=ae.far;v.texture!==null&&(v.depthNear>0&&(Ce=v.depthNear),v.depthFar>0&&(be=v.depthFar)),he.near=K.near=H.near=Ce,he.far=K.far=H.far=be,(F!==he.near||J!==he.far)&&(o.updateRenderState({depthNear:he.near,depthFar:he.far}),F=he.near,J=he.far),he.layers.mask=ae.layers.mask|6,H.layers.mask=he.layers.mask&-5,K.layers.mask=he.layers.mask&-3;const Ge=ae.parent,we=he.cameras;q(he,Ge);for(let Ve=0;Ve<we.length;Ve++)q(we[Ve],Ge);he.projectionMatrix.copy(H.projectionMatrix),he.projectionMatrixInverse.copy(H.projectionMatrixInverse),U===null&&ae.isPerspectiveCamera&&(U={camera:ae,fov:ae.fov,zoom:ae.zoom}),$(ae,he,Ge)};function $(ae,Ce,be){be===null?ae.matrix.copy(Ce.matrixWorld):(ae.matrix.copy(be.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(Ce.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(Ce.projectionMatrix),ae.projectionMatrixInverse.copy(Ce.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Od*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return he},this.getFoveation=function(){if(!(_===null&&S===null))return p},this.setFoveation=function(ae){p=ae,_!==null&&(_.fixedFoveation=ae),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ae)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(he)},this.getCameraTexture=function(ae){return y[ae]};let O=null;function ie(ae,Ce){if(x=Ce.getViewerPose(m||u),E=Ce,x!==null){const be=x.views;S!==null&&(e.setRenderTargetFramebuffer(P,S.framebuffer),e.setRenderTarget(P));let Ge=!1;be.length!==he.cameras.length&&(he.cameras.length=0,Ge=!0);for(let it=0;it<be.length;it++){const Mt=be[it];let Rt=null;if(S!==null)Rt=S.getViewport(Mt);else{const $t=M.getViewSubImage(_,Mt);Rt=$t.viewport,it===0&&(e.setRenderTargetTextures(P,$t.colorTexture,$t.depthStencilTexture),e.setRenderTarget(P))}let xt=Q[it];xt===void 0&&(xt=new Ki,xt.layers.enable(it),xt.viewport=new xn,Q[it]=xt),xt.matrix.fromArray(Mt.transform.matrix),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.projectionMatrix.fromArray(Mt.projectionMatrix),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert(),xt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),it===0&&(he.matrix.copy(xt.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale)),Ge===!0&&he.cameras.push(xt)}const we=o.enabledFeatures;if(we&&we.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){M=r.getBinding();const it=M.getDepthInformation(be[0]);it&&it.isValid&&it.texture&&v.init(it,o.renderState)}if(we&&we.includes("camera-access")&&R){e.state.unbindTexture(),M=r.getBinding();for(let it=0;it<be.length;it++){const Mt=be[it].camera;if(Mt){let Rt=y[Mt];Rt||(Rt=new Ug,y[Mt]=Rt);const xt=M.getCameraImage(Mt);Rt.sourceTexture=xt}}}}for(let be=0;be<B.length;be++){const Ge=I[be],we=B[be];Ge!==null&&we!==void 0&&we.update(Ge,Ce,m||u)}O&&O(ae,Ce),Ce.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Ce}),E=null}const Ie=new Vg;Ie.setAnimationLoop(ie),this.setAnimationLoop=function(ae){O=ae},this.dispose=function(){}}}const LE=new sn,Qg=new _t;Qg.set(-1,0,0,0,1,0,0,0,1);function IE(s,e){function t(v,y){v.matrixAutoUpdate===!0&&v.updateMatrix(),y.value.copy(v.matrix)}function r(v,y){y.color.getRGB(v.fogColor.value,Bg(s)),y.isFog?(v.fogNear.value=y.near,v.fogFar.value=y.far):y.isFogExp2&&(v.fogDensity.value=y.density)}function o(v,y,D,k,P){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?l(v,y):y.isMeshLambertMaterial?(l(v,y),y.envMap&&(v.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(l(v,y),M(v,y)):y.isMeshPhongMaterial?(l(v,y),x(v,y),y.envMap&&(v.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(l(v,y),_(v,y),y.isMeshPhysicalMaterial&&S(v,y,P)):y.isMeshMatcapMaterial?(l(v,y),E(v,y)):y.isMeshDepthMaterial?l(v,y):y.isMeshDistanceMaterial?(l(v,y),R(v,y)):y.isMeshNormalMaterial?l(v,y):y.isLineBasicMaterial?(u(v,y),y.isLineDashedMaterial&&d(v,y)):y.isPointsMaterial?p(v,y,D,k):y.isSpriteMaterial?m(v,y):y.isShadowMaterial?(v.color.value.copy(y.color),v.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(v,y){v.opacity.value=y.opacity,y.color&&v.diffuse.value.copy(y.color),y.emissive&&v.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(v.map.value=y.map,t(y.map,v.mapTransform)),y.alphaMap&&(v.alphaMap.value=y.alphaMap,t(y.alphaMap,v.alphaMapTransform)),y.bumpMap&&(v.bumpMap.value=y.bumpMap,t(y.bumpMap,v.bumpMapTransform),v.bumpScale.value=y.bumpScale,y.side===mi&&(v.bumpScale.value*=-1)),y.normalMap&&(v.normalMap.value=y.normalMap,t(y.normalMap,v.normalMapTransform),v.normalScale.value.copy(y.normalScale),y.side===mi&&v.normalScale.value.negate()),y.displacementMap&&(v.displacementMap.value=y.displacementMap,t(y.displacementMap,v.displacementMapTransform),v.displacementScale.value=y.displacementScale,v.displacementBias.value=y.displacementBias),y.emissiveMap&&(v.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,v.emissiveMapTransform)),y.specularMap&&(v.specularMap.value=y.specularMap,t(y.specularMap,v.specularMapTransform)),y.alphaTest>0&&(v.alphaTest.value=y.alphaTest);const D=e.get(y),k=D.envMap,P=D.envMapRotation;k&&(v.envMap.value=k,v.envMapRotation.value.setFromMatrix4(LE.makeRotationFromEuler(P)).transpose(),k.isCubeTexture&&k.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(Qg),v.reflectivity.value=y.reflectivity,v.ior.value=y.ior,v.refractionRatio.value=y.refractionRatio),y.lightMap&&(v.lightMap.value=y.lightMap,v.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,v.lightMapTransform)),y.aoMap&&(v.aoMap.value=y.aoMap,v.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,v.aoMapTransform))}function u(v,y){v.diffuse.value.copy(y.color),v.opacity.value=y.opacity,y.map&&(v.map.value=y.map,t(y.map,v.mapTransform))}function d(v,y){v.dashSize.value=y.dashSize,v.totalSize.value=y.dashSize+y.gapSize,v.scale.value=y.scale}function p(v,y,D,k){v.diffuse.value.copy(y.color),v.opacity.value=y.opacity,v.size.value=y.size*D,v.scale.value=k*.5,y.map&&(v.map.value=y.map,t(y.map,v.uvTransform)),y.alphaMap&&(v.alphaMap.value=y.alphaMap,t(y.alphaMap,v.alphaMapTransform)),y.alphaTest>0&&(v.alphaTest.value=y.alphaTest)}function m(v,y){v.diffuse.value.copy(y.color),v.opacity.value=y.opacity,v.rotation.value=y.rotation,y.map&&(v.map.value=y.map,t(y.map,v.mapTransform)),y.alphaMap&&(v.alphaMap.value=y.alphaMap,t(y.alphaMap,v.alphaMapTransform)),y.alphaTest>0&&(v.alphaTest.value=y.alphaTest)}function x(v,y){v.specular.value.copy(y.specular),v.shininess.value=Math.max(y.shininess,1e-4)}function M(v,y){y.gradientMap&&(v.gradientMap.value=y.gradientMap)}function _(v,y){v.metalness.value=y.metalness,y.metalnessMap&&(v.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,v.metalnessMapTransform)),v.roughness.value=y.roughness,y.roughnessMap&&(v.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,v.roughnessMapTransform)),y.envMap&&(v.envMapIntensity.value=y.envMapIntensity)}function S(v,y,D){v.ior.value=y.ior,y.diffuseRoughness>0&&(v.diffuseRoughness.value=y.diffuseRoughness,y.diffuseRoughnessMap&&(v.diffuseRoughnessMap.value=y.diffuseRoughnessMap,t(y.diffuseRoughnessMap,v.diffuseRoughnessMapTransform))),y.sheen>0&&(v.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),v.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(v.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,v.sheenColorMapTransform)),y.sheenRoughnessMap&&(v.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,v.sheenRoughnessMapTransform))),y.clearcoat>0&&(v.clearcoat.value=y.clearcoat,v.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(v.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,v.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(v.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===mi&&v.clearcoatNormalScale.value.negate())),y.dispersion>0&&(v.dispersion.value=y.dispersion),y.retroreflectivity>0&&(v.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(v.iridescence.value=y.iridescence,v.iridescenceIOR.value=y.iridescenceIOR,v.iridescenceThicknessMinimum.value=y.iridescenceThicknessMinimum,v.iridescenceThicknessMaximum.value=y.iridescenceThicknessMaximum,y.iridescenceMap&&(v.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,v.iridescenceMapTransform)),y.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),y.transmission>0&&(v.transmission.value=y.transmission,v.transmissionSamplerMap.value=D.texture,v.transmissionSamplerSize.value.set(D.width,D.height),y.transmissionMap&&(v.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,v.transmissionMapTransform)),v.thickness.value=y.thickness,y.thicknessMap&&(v.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=y.attenuationDistance,v.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(v.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(v.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=y.specularIntensity,v.specularColor.value.copy(y.specularColor),y.specularColorMap&&(v.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,v.specularColorMapTransform)),y.specularIntensityMap&&(v.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,v.specularIntensityMapTransform))}function E(v,y){y.matcap&&(v.matcap.value=y.matcap)}function R(v,y){const D=e.get(y).light;v.referencePosition.value.setFromMatrixPosition(D.matrixWorld),v.nearDistance.value=D.shadow.camera.near,v.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function UE(s,e,t,r){let o={},l={};function u(D,k){const P=k.program;r.uniformBlockBinding(D,P,o[D.id])}function d(D,k){let P=o[D.id];P===void 0&&(E(D),P=p(D),o[D.id]=P,D.addEventListener("dispose",v));const B=k.program;r.updateUBOMapping(D,B);const I=e.render.frame;l[D.id]!==I&&(m(D),l[D.id]=I)}function p(D){const k=s.createBuffer(),P=D.__size,B=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,k),s.bufferData(s.UNIFORM_BUFFER,P,B),s.bindBuffer(s.UNIFORM_BUFFER,null),k}function m(D){const k=o[D.id],P=D.uniforms,B=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,k);for(let I=0,T=P.length;I<T;I++){const A=P[I];if(Array.isArray(A))for(let U=0,H=A.length;U<H;U++)x(A[U],I,U,B);else x(A,I,0,B)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(D,k,P,B){if(_(D,k,P,B)===!0){const I=D.__offset,T=D.value;if(Array.isArray(T)){let A=0;for(let U=0;U<T.length;U++){const H=T[U],K=R(H,!0);M(H,D.__data,A),A+=K.storage/Float32Array.BYTES_PER_ELEMENT}}else M(T,D.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,I,D.__data)}}function M(D,k,P){typeof D=="number"||typeof D=="boolean"?k[P]=D:D.isMatrix3?(k[P]=D.elements[0],k[P+1]=D.elements[1],k[P+2]=D.elements[2],k[P+3]=0,k[P+4]=D.elements[3],k[P+5]=D.elements[4],k[P+6]=D.elements[5],k[P+7]=0,k[P+8]=D.elements[6],k[P+9]=D.elements[7],k[P+10]=D.elements[8],k[P+11]=0):ArrayBuffer.isView(D)?k.set(D.subarray(0,k.length-P),P):D.toArray(k,P)}function _(D,k,P,B){const I=D.value,T=k+"_"+P;if(Array.isArray(I)){B[T]===void 0&&(B[T]=[]);const A=B[T];let U=!1;for(let H=0;H<I.length;H++)S(I[H],A,H)===!0&&(U=!0);return U}return S(I,B,T)}function S(D,k,P){if(k[P]===void 0)return typeof D=="number"||typeof D=="boolean"?k[P]=D:ArrayBuffer.isView(D)?k[P]=D.slice():k[P]=D.clone(),!0;{const B=k[P];if(typeof D=="number"||typeof D=="boolean"){if(B!==D)return k[P]=D,!0}else{if(ArrayBuffer.isView(D))return!0;if(B.equals(D)===!1)return B.copy(D),!0}}return!1}function E(D){const k=D.uniforms;let P=0;const B=16;for(let T=0,A=k.length;T<A;T++){const U=Array.isArray(k[T])?k[T]:[k[T]];for(let H=0,K=U.length;H<K;H++){const Q=U[H],he=Array.isArray(Q.value)?Q.value:[Q.value],F=Array.isArray(k[T])||Array.isArray(Q.value);let J=P;for(let ee=0,Z=he.length;ee<Z;ee++){const q=he[ee],$=R(q,F),O=P%B,ie=O%$.boundary,Ie=O+ie;P+=ie,Ie!==0&&B-Ie<$.storage&&(P+=B-Ie),ee===0&&(J=P),P+=$.storage}const ue=Q.type==="int"?Int32Array:Q.type==="uint"?Uint32Array:Float32Array;Q.__data=new ue((P-J)/Float32Array.BYTES_PER_ELEMENT),Q.__offset=J}}const I=P%B;return I>0&&(P+=B-I),D.__size=P,D.__cache={},this}function R(D,k){const P={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(P.boundary=4,P.storage=4):D.isVector2?(P.boundary=8,P.storage=8):D.isVector3||D.isColor?(P.boundary=16,P.storage=12):D.isVector4?(P.boundary=16,P.storage=16):D.isMatrix3?(P.boundary=16,P.storage=48):D.isMatrix4?(P.boundary=16,P.storage=64):D.isTexture?ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(D)?(P.boundary=16,P.storage=D.byteLength):ft("WebGLRenderer: Unsupported uniform value type.",D),k===!0&&(P.boundary=16,P.storage=Math.ceil(P.storage/16)*16),P}function v(D){const k=D.target;k.removeEventListener("dispose",v),s.deleteBuffer(o[k.id]),delete o[k.id],delete l[k.id]}function y(){for(const D in o)s.deleteBuffer(o[D]);o={},l={}}return{bind:u,update:d,dispose:y}}const OE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ir=null;function FE(){return ir===null&&(ir=new dy(OE,16,16,Cs,ur),ir.name="DFG_LUT",ir.minFilter=ai,ir.magFilter=ai,ir.wrapS=wr,ir.wrapT=wr,ir.generateMipmaps=!1,ir.needsUpdate=!0),ir}class kE{constructor(e={}){const{canvas:t=kx(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:M=!1,reversedDepthBuffer:_=!1,outputBufferType:S=Ti}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=u;const R=S,v=new Set([$d,qd,Yd]),y=new Set([Ti,cr,To,Ta,Xd,Kd]),D=new Uint32Array(4),k=new Int32Array(4),P={textures:[],min:[],max:[],resolution:[]};let B=null,I=null;const T=[],A=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const H=this;let K=!1,Q=null,he=null,F=null,J=null;this._outputColorSpace=Ui;let ue=0,ee=0,Z=null,q=-1,$=null;const O=new xn,ie=new xn;let Ie=null;const ae=new Ut(0);let Ce=0,be=t.width,Ge=t.height,we=1,Ve=null,Dt=null;const it=new xn(0,0,be,Ge),Mt=new xn(0,0,be,Ge);let Rt=!1;const xt=new wo,$t=new ef;let ln=!1,yt=!1;const jt=new sn,Ot=new N,de=new xn,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let wt=!1;function Ht(){return Z===null?we:1}let j=r;function gn(b,G){return t.getContext(b,G)}let mt,Ct,Pe,vt,je,$e,L,w,X,Ee,Se,Oe,Ae,re,xe,De,V,_e,ve,Be,Ue,ke,le;try{const b={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:x,failIfMajorPerformanceCaveat:M};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gd}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",ye,!1),j===null){const G="webgl2";if(j=gn(G,b),j===null)throw gn(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}pe()}catch(b){throw t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),Wt("WebGLRenderer: "+b.message),b}function pe(){mt=new HM(j),mt.init(),Ue=new bE(j,mt),Ct=new RM(j,mt,e,Ue),Pe=new CE(j,mt),Ct.reversedDepthBuffer&&_&&Pe.buffers.depth.setReversed(!0),he=j.createFramebuffer(),F=j.createFramebuffer(),J=j.createFramebuffer(),vt=new WM(j),je=new dE,$e=new AE(j,mt,Pe,je,Ct,Ue,vt),L=new zM(H),w=new Xy(j),ke=new bM(j,w),X=new VM(j,w,vt,ke),Ee=new XM(j,X,w,ke,vt),_e=new jM(j,Ct,$e),xe=new PM(je),Se=new hE(H,L,mt,Ct,ke,xe),Oe=new IE(H,je),Ae=new pE,re=new yE(mt),V=new AM(H,L,Pe,Ee,E,p),De=new wE(H,Ee,Ct),le=new UE(j,vt,Ct,Pe),ve=new NM(j,mt,vt),Be=new GM(j,mt,vt),vt.programs=Se.programs,H.capabilities=Ct,H.extensions=mt,H.properties=je,H.renderLists=Ae,H.shadowMap=De,H.state=Pe,H.info=vt}R!==Ti&&(U=new YM(R,t.width,t.height,d,o,l));const fe=new DE(H,j);this.xr=fe,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const b=mt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=mt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return we},this.setPixelRatio=function(b){b!==void 0&&(we=b,this.setSize(be,Ge,!1))},this.getSize=function(b){return b.set(be,Ge)},this.setSize=function(b,G,se=!0){if(fe.isPresenting){ft("WebGLRenderer: Can't change size while VR device is presenting.");return}be=b,Ge=G,t.width=Math.floor(b*we),t.height=Math.floor(G*we),se===!0&&(t.style.width=b+"px",t.style.height=G+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,b,G)},this.getDrawingBufferSize=function(b){return b.set(be*we,Ge*we).floor()},this.setDrawingBufferSize=function(b,G,se){be=b,Ge=G,we=se,t.width=Math.floor(b*se),t.height=Math.floor(G*se),this.setViewport(0,0,b,G)},this.setEffects=function(b){if(R===Ti){Wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let G=0;G<b.length;G++)if(b[G].isOutputPass===!0){ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(O)},this.getViewport=function(b){return b.copy(it)},this.setViewport=function(b,G,se,ne){b.isVector4?it.set(b.x,b.y,b.z,b.w):it.set(b,G,se,ne),Pe.viewport(O.copy(it).multiplyScalar(Ht()).round())},this.getScissor=function(b){return b.copy(Mt)},this.setScissor=function(b,G,se,ne){b.isVector4?Mt.set(b.x,b.y,b.z,b.w):Mt.set(b,G,se,ne),Pe.scissor(ie.copy(Mt).multiplyScalar(Ht()).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(b){Pe.setScissorTest(Rt=b)},this.setOpaqueSort=function(b){Ve=b},this.setTransparentSort=function(b){Dt=b},this.getClearColor=function(b){return b.copy(V.getClearColor())},this.setClearColor=function(){V.setClearColor(...arguments)},this.getClearAlpha=function(){return V.getClearAlpha()},this.setClearAlpha=function(){V.setClearAlpha(...arguments)},this.clear=function(b=!0,G=!0,se=!0){let ne=0;if(b){let te=!1;if(Z!==null){const He=Z.texture.format;te=v.has(He)}if(te){const He=Z.texture.type,Ze=y.has(He),Fe=V.getClearColor(),We=V.getClearAlpha(),Je=Fe.r,lt=Fe.g,pt=Fe.b;Ze?(D[0]=Je,D[1]=lt,D[2]=pt,D[3]=We,j.clearBufferuiv(j.COLOR,0,D)):(k[0]=Je,k[1]=lt,k[2]=pt,k[3]=We,j.clearBufferiv(j.COLOR,0,k))}else ne|=j.COLOR_BUFFER_BIT}G&&(ne|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(ne|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&j.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),Q=b},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),V.dispose(),Ae.dispose(),re.dispose(),$e.dispose(),je.dispose(),L.dispose(),Ee.dispose(),X.dispose(),ke.dispose(),le.dispose(),Se.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Qt),fe.removeEventListener("sessionend",Vt),ct.stop()};function ge(b){b.preventDefault(),Sc("WebGLRenderer: Context Lost."),K=!0}function Te(){Sc("WebGLRenderer: Context Restored."),K=!1;const b=vt.autoReset,G=De.enabled,se=De.autoUpdate,ne=De.needsUpdate,te=De.type;pe(),vt.autoReset=b,De.enabled=G,De.autoUpdate=se,De.needsUpdate=ne,De.type=te}function ye(b){Wt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Me(b){const G=b.target;G.removeEventListener("dispose",Me),Xe(G)}function Xe(b){qe(b),je.remove(b)}function qe(b){const G=je.get(b).programs;G!==void 0&&(G.forEach(function(se){Se.releaseProgram(se)}),b.isShaderMaterial&&Se.releaseShaderCache(b))}this.renderBufferDirect=function(b,G,se,ne,te,He){G===null&&(G=St);const Ze=te.isMesh&&te.matrixWorld.determinantAffine()<0,Fe=ti(b,G,se,ne,te);Pe.setMaterial(ne,Ze);let We=se.index,Je=1;if(ne.wireframe===!0){if(We=X.getWireframeAttribute(se),We===void 0)return;Je=2}const lt=se.drawRange,pt=se.attributes.position;let et=lt.start*Je,bt=(lt.start+lt.count)*Je;He!==null&&(et=Math.max(et,He.start*Je),bt=Math.min(bt,(He.start+He.count)*Je)),We!==null?(et=Math.max(et,0),bt=Math.min(bt,We.count)):pt!=null&&(et=Math.max(et,0),bt=Math.min(bt,pt.count));const pn=bt-et;if(pn<0||pn===1/0)return;ke.setup(te,ne,Fe,se,We);let tn,Yt=ve;if(We!==null&&(tn=w.get(We),Yt=Be,Yt.setIndex(tn)),te.isMesh)ne.wireframe===!0?(Pe.setLineWidth(ne.wireframeLinewidth*Ht()),Yt.setMode(j.LINES)):Yt.setMode(j.TRIANGLES);else if(te.isLine){let yn=ne.linewidth;yn===void 0&&(yn=1),Pe.setLineWidth(yn*Ht()),te.isLineSegments?Yt.setMode(j.LINES):te.isLineLoop?Yt.setMode(j.LINE_LOOP):Yt.setMode(j.LINE_STRIP)}else te.isPoints?Yt.setMode(j.POINTS):te.isSprite&&Yt.setMode(j.TRIANGLES);if(te.isBatchedMesh)if(mt.get("WEBGL_multi_draw"))Yt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const yn=te._multiDrawStarts,nt=te._multiDrawCounts,bn=te._multiDrawCount,at=We?w.get(We).bytesPerElement:1,$i=je.get(ne).currentProgram.getUniforms();for(let Nn=0;Nn<bn;Nn++)$i.setValue(j,"_gl_DrawID",Nn),Yt.render(yn[Nn]/at,nt[Nn])}else if(te.isInstancedMesh)Yt.renderInstances(et,pn,te.count);else if(se.isInstancedBufferGeometry){const yn=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,nt=Math.min(se.instanceCount,yn);Yt.renderInstances(et,pn,nt)}else Yt.render(et,pn)};function dt(b,G,se,ne){Q!==null&&b.isNodeMaterial&&Q.setObject(ne,b),ln===!0&&xe.setState(b,se,!1),b.transparent===!0&&b.side===Yi&&b.forceSinglePass===!1?(b.side=mi,b.needsUpdate=!0,Gn(b,G,ne),b.side=ws,b.needsUpdate=!0,Gn(b,G,ne),b.side=Yi):Gn(b,G,ne)}this.compile=function(b,G,se=null){se===null&&(se=b),Q!==null&&Q.renderStart(b,G,se),I=re.get(se),I.init(G),A.push(I),se.traverseVisible(function(te){te.isLight&&te.layers.test(G.layers)&&(I.pushLight(te),te.castShadow&&I.pushShadow(te))}),b!==se&&b.traverseVisible(function(te){te.isLight&&te.layers.test(G.layers)&&(I.pushLight(te),te.castShadow&&I.pushShadow(te))}),I.setupLights(),Q!==null&&Q.updateLights(I.state.lightsArray),yt=this.localClippingEnabled,ln=xe.init(this.clippingPlanes,yt),ln===!0&&xe.setGlobalState(this.clippingPlanes,G),Q!==null&&De.render(I.state.shadowsArray,se,G);const ne=new Set;return b.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const He=te.material;if(He)if(Array.isArray(He))for(let Ze=0;Ze<He.length;Ze++){const Fe=He[Ze];dt(Fe,se,G,te),ne.add(Fe)}else dt(He,se,G,te),ne.add(He)}),I=A.pop(),Q!==null&&Q.renderEnd(),ne},this.compileAsync=function(b,G,se=null){const ne=this.compile(b,G,se);return new Promise(te=>{function He(){if(ne.forEach(function(Ze){const We=je.get(Ze).currentProgram;(We===void 0||We.isReady())&&ne.delete(Ze)}),ne.size===0){te(b);return}setTimeout(He,10)}mt.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let Ft=null;function At(b){Ft&&Ft(b)}function Qt(){ct.stop()}function Vt(){ct.start()}const ct=new Vg;ct.setAnimationLoop(At),typeof self<"u"&&ct.setContext(self),this.setAnimationLoop=function(b){Ft=b,fe.setAnimationLoop(b),b===null?ct.stop():ct.start()},fe.addEventListener("sessionstart",Qt),fe.addEventListener("sessionend",Vt),this.render=function(b,G){if(G!==void 0&&G.isCamera!==!0){Wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(K===!0)return;Q!==null&&Q.renderStart(b,G);const se=fe.enabled===!0&&fe.isPresenting===!0,ne=U!==null&&(Z===null||se)&&U.begin(H,Z);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(G),G=fe.getCamera()),b.isScene===!0&&b.onBeforeRender(H,b,G,Z),I=re.get(b,A.length),I.init(G),I.state.textureUnits=$e.getTextureUnits(),A.push(I),jt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),G.isArrayCamera?$t.setFromArrayCamera(G):xt.setFromProjectionMatrix(jt,qi,G.reversedDepth),yt=this.localClippingEnabled,ln=xe.init(this.clippingPlanes,yt),B=Ae.get(b,T.length),B.init(),T.push(B),this.info.render.frame++,fe.enabled===!0&&fe.isPresenting===!0){const Ze=H.xr.getDepthSensingMesh();Ze!==null&&cn(Ze,G,-1/0,H.sortObjects)}cn(b,G,0,H.sortObjects),B.finish(),Q!==null&&Q.updateLights(I.state.lightsArray),H.sortObjects===!0&&B.sort(Ve,Dt),wt=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,wt&&V.addToRenderList(B,b),this.info.autoReset===!0&&this.info.reset(),ln===!0&&xe.beginShadows();const te=I.state.shadowsArray;if(De.render(te,b,G),ln===!0&&xe.endShadows(),(ne&&U.hasRenderPass())===!1){const Ze=B.opaque,Fe=B.transmissive;if(I.setupLights(),G.isArrayCamera){const We=G.cameras;if(Fe.length>0)for(let Je=0,lt=We.length;Je<lt;Je++){const pt=We[Je];Jt(Ze,Fe,b,pt)}wt&&V.render(b);for(let Je=0,lt=We.length;Je<lt;Je++){const pt=We[Je];Tt(B,b,pt,pt.viewport)}}else Fe.length>0&&Jt(Ze,Fe,b,G),wt&&V.render(b),Tt(B,b,G)}Z!==null&&ee===0&&($e.updateMultisampleRenderTarget(Z),$e.updateRenderTargetMipmap(Z)),ne&&U.end(H),b.isScene===!0&&b.onAfterRender(H,b,G),ke.resetDefaultState(),q=-1,$=null,A.pop(),A.length>0?(I=A[A.length-1],$e.setTextureUnits(I.state.textureUnits),ln===!0&&xe.setGlobalState(H.clippingPlanes,I.state.camera)):I=null,T.pop(),T.length>0?B=T[T.length-1]:B=null,Q!==null&&Q.renderEnd()};function cn(b,G,se,ne){if(b.visible===!1)return;if(b.layers.test(G.layers)){if(b.isGroup)se=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(G);else if(b.isLight)I.pushLight(b),b.castShadow&&I.pushShadow(b);else if(b.isSprite){const Ze=G.isArrayCamera?$t:xt;if(!b.frustumCulled||b.intersectsFrustum(Ze)){ne&&de.setFromMatrixPosition(b.matrixWorld).applyMatrix4(jt);const Fe=Ee.update(b),We=b.material;We.visible&&B.push(b,Fe,We,se,de.z,null,G)}}else if(b.isMesh||b.isLine||b.isPoints){const Ze=G.isArrayCamera?$t:xt;if(!b.frustumCulled||b.intersectsFrustum(Ze)){const Fe=Ee.update(b),We=b.material;if(ne&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),de.copy(b.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),de.copy(Fe.boundingSphere.center)),de.applyMatrix4(b.matrixWorld).applyMatrix4(jt)),Array.isArray(We)){const Je=Fe.groups;for(let lt=0,pt=Je.length;lt<pt;lt++){const et=Je[lt],bt=We[et.materialIndex];bt&&bt.visible&&B.push(b,Fe,bt,se,de.z,et,G)}}else We.visible&&B.push(b,Fe,We,se,de.z,null,G)}}}const He=b.children;for(let Ze=0,Fe=He.length;Ze<Fe;Ze++)cn(He[Ze],G,se,ne)}function Tt(b,G,se,ne){const{opaque:te,transmissive:He,transparent:Ze}=b;I.setupLightsView(se),ln===!0&&xe.setGlobalState(H.clippingPlanes,se),ne&&Pe.viewport(O.copy(ne)),te.length>0&&Zt(te,G,se),He.length>0&&Zt(He,G,se),Ze.length>0&&Zt(Ze,G,se),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function Jt(b,G,se,ne){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[ne.id]===void 0){const et=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[ne.id]=new lr(1,1,{generateMipmaps:!0,type:et?ur:Ti,minFilter:Jr,samples:Math.max(4,Ct.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:zt.workingColorSpace})}const He=I.state.transmissionRenderTarget[ne.id],Ze=ne.viewport||O;He.setSize(Ze.z*H.transmissionResolutionScale,Ze.w*H.transmissionResolutionScale);const Fe=H.getRenderTarget(),We=H.getActiveCubeFace(),Je=H.getActiveMipmapLevel();H.setRenderTarget(He),H.getClearColor(ae),Ce=H.getClearAlpha(),Ce<1&&H.setClearColor(16777215,.5),H.clear(),wt&&V.render(se);const lt=H.toneMapping;H.toneMapping=Cr;const pt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),I.setupLightsView(ne),ln===!0&&xe.setGlobalState(H.clippingPlanes,ne),Zt(b,se,ne),$e.updateMultisampleRenderTarget(He),$e.updateRenderTargetMipmap(He),mt.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let bt=0,pn=G.length;bt<pn;bt++){const tn=G[bt],{object:Yt,geometry:yn,material:nt,group:bn}=tn;if(nt.side===Yi&&Yt.layers.test(ne.layers)){const at=nt.side;nt.side=mi,nt.needsUpdate=!0,On(Yt,se,ne,yn,nt,bn),nt.side=at,nt.needsUpdate=!0,et=!0}}et===!0&&($e.updateMultisampleRenderTarget(He),$e.updateRenderTargetMipmap(He))}H.setRenderTarget(Fe,We,Je),H.setClearColor(ae,Ce),pt!==void 0&&(ne.viewport=pt),H.toneMapping=lt}function Zt(b,G,se){const ne=G.isScene===!0?G.overrideMaterial:null;for(let te=0,He=b.length;te<He;te++){const Ze=b[te],{object:Fe,geometry:We,group:Je}=Ze;let lt=Ze.material;lt.allowOverride===!0&&ne!==null&&(lt=ne),Fe.layers.test(se.layers)&&On(Fe,G,se,We,lt,Je)}}function On(b,G,se,ne,te,He){Q!==null&&te.isNodeMaterial&&Q.setObject(b,te),b.onBeforeRender(H,G,se,ne,te,He),b.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),te.onBeforeRender(H,G,se,ne,b,He),te.transparent===!0&&te.side===Yi&&te.forceSinglePass===!1?(te.side=mi,te.needsUpdate=!0,H.renderBufferDirect(se,G,ne,te,b,He),te.side=ws,te.needsUpdate=!0,H.renderBufferDirect(se,G,ne,te,b,He),te.side=Yi):H.renderBufferDirect(se,G,ne,te,b,He),b.onAfterRender(H,G,se,ne,te,He)}function En(b){let G=0;for(const se of b)se.texture!==null&&G++;return G}function Gn(b,G,se){G.isScene!==!0&&(G=St);const ne=je.get(b),te=I.state.lights,He=I.state.shadowsArray,Ze=te.state.version,Fe=Se.getParameters(b,te.state,He,G,se,I.state.lightProbeGridArray),We=Se.getProgramCacheKey(Fe);let Je=ne.programs;ne.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?G.environment:null,ne.fog=G.fog;const lt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;ne.envMap=L.get(b.envMap||ne.environment,lt),ne.envMapRotation=ne.environment!==null&&b.envMap===null?G.environmentRotation:b.envMapRotation,Je===void 0&&(b.addEventListener("dispose",Me),Je=new Map,ne.programs=Je,ne.programVariants=new Map);let pt=Je.get(We);if(pt!==void 0){if(ne.currentProgram===pt&&ne.lightsStateVersion===Ze)return en(b,Fe),pt}else Fe.uniforms=Se.getUniforms(b),Q!==null&&b.isNodeMaterial&&Q.build(b,se,Fe),b.onBeforeCompile(Fe,H),pt=Se.acquireProgram(Fe,We),Je.set(We,pt),ne.uniforms=Fe.uniforms;const et=ne.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(et.clippingPlanes=xe.uniform),en(b,Fe),ne.needsLights=wn(b),ne.lightsStateVersion=Ze,ne.needsLights&&(et.ambientLightColor.value=te.state.ambient,et.lightProbe.value=te.state.probe,et.sunLights.value=te.state.sun,et.sunLightShadows.value=te.state.sunShadow,et.directionalLights.value=te.state.directional,et.directionalLightShadows.value=te.state.directionalShadow,et.spotLights.value=te.state.spot,et.spotLightShadows.value=te.state.spotShadow,et.rectAreaLights.value=te.state.rectArea,et.ltc_1.value=te.state.rectAreaLTC1,et.ltc_2.value=te.state.rectAreaLTC2,et.pointLights.value=te.state.point,et.pointLightShadows.value=te.state.pointShadow,et.hemisphereLights.value=te.state.hemi,et.sunShadowMatrix.value=te.state.sunShadowMatrix,et.sunShadowCascade.value=te.state.sunShadowCascade,et.directionalShadowMatrix.value=te.state.directionalShadowMatrix,et.spotLightMatrix.value=te.state.spotLightMatrix,et.spotLightMap.value=te.state.spotLightMap,et.pointShadowMatrix.value=te.state.pointShadowMatrix),ne.numLightProbeGrids=En(I.state.lightProbeGridArray),ne.currentProgram=pt,ne.uniformsList=null,pt}function gi(b,G,se,ne,te){const He=je.get(b),Ze=He.currentProgram.id+","+ne+","+te;let Fe=He.programVariants.get(Ze);return Fe===void 0?(Fe=Gn(b,G,se),He.programVariants.set(Ze,Fe)):(He.currentProgram=Fe,He.uniformsList=null,He.outputColorSpace=ne,He.toneMapping=te),Fe}function kt(b){if(b.uniformsList===null){const G=b.currentProgram.getUniforms();b.uniformsList=pc.seqWithValue(G.seq,b.uniforms)}return b.uniformsList}function en(b,G){const se=je.get(b);se.outputColorSpace=G.outputColorSpace,se.batching=G.batching,se.batchingColor=G.batchingColor,se.instancing=G.instancing,se.instancingColor=G.instancingColor,se.instancingMorph=G.instancingMorph,se.skinning=G.skinning,se.morphTargets=G.morphTargets,se.morphNormals=G.morphNormals,se.morphColors=G.morphColors,se.morphTargetsCount=G.morphTargetsCount,se.numClippingPlanes=G.numClippingPlanes,se.numIntersection=G.numClipIntersection,se.vertexAlphas=G.vertexAlphas,se.vertexTangents=G.vertexTangents,se.toneMapping=G.toneMapping}function ti(b,G,se,ne,te){G.isScene!==!0&&(G=St),$e.resetTextureUnits();const He=G.fog,Ze=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?G.environment:null,Fe=Z===null?H.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:zt.workingColorSpace,We=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Je=L.get(ne.envMap||Ze,We),lt=ne.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pt=!!se.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),et=!!se.morphAttributes.position,bt=!!se.morphAttributes.normal,pn=!!se.morphAttributes.color;let tn=Cr;ne.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(tn=H.toneMapping);const Yt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,yn=Yt!==void 0?Yt.length:0,nt=je.get(ne),bn=I.state.lights;if(ln===!0&&(yt===!0||b!==$)){const Xt=b===$&&ne.id===q;xe.setState(ne,b,Xt)}let at=!1,$i=!1;ne.version===nt.__version?nt.needsLights&&nt.lightsStateVersion!==bn.state.version||te.isBatchedMesh&&nt.batching===!1||!te.isBatchedMesh&&nt.batching===!0||te.isBatchedMesh&&nt.batchingColor===!0&&te._colorsTexture===null||te.isBatchedMesh&&nt.batchingColor===!1&&te._colorsTexture!==null||te.isInstancedMesh&&nt.instancing===!1||!te.isInstancedMesh&&nt.instancing===!0||te.isSkinnedMesh&&nt.skinning===!1||!te.isSkinnedMesh&&nt.skinning===!0||te.isInstancedMesh&&nt.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&nt.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&nt.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&nt.instancingMorph===!1&&te.morphTexture!==null||nt.envMap!==Je||ne.fog===!0&&nt.fog!==He||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==xe.numPlanes||nt.numIntersection!==xe.numIntersection)||nt.vertexAlphas!==lt||nt.vertexTangents!==pt||nt.morphTargets!==et||nt.morphNormals!==bt||nt.morphColors!==pn||nt.morphTargetsCount!==yn||nt.numLightProbeGrids!==En(I.state.lightProbeGridArray)?at=!0:(nt.outputColorSpace!==Fe||nt.toneMapping!==tn)&&($i=!0):(at=!0,nt.__version=ne.version);let Nn=nt.currentProgram;(at===!0||$i===!0)&&(Nn=$i===!0?gi(ne,G,te,Fe,tn):Gn(ne,G,te),Q&&ne.isNodeMaterial&&Q.onUpdateProgram(ne,Nn,nt));let Nr=!1,Fi=!1,Zi=!1;const Bt=Nn.getUniforms(),Mn=nt.uniforms;if(Pe.useProgram(Nn.program)&&(Nr=!0,Fi=!0,Zi=!0),ne.id!==q&&(q=ne.id,Fi=!0),Nr||$!==b){Pe.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Bt.setValue(j,"projectionMatrix",b.projectionMatrix),Bt.setValue(j,"viewMatrix",b.matrixWorldInverse);const rn=Bt.map.cameraPosition;rn!==void 0&&rn.setValue(j,Ot.setFromMatrixPosition(b.matrixWorld)),Ct.logarithmicDepthBuffer&&Bt.setValue(j,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Bt.setValue(j,"isOrthographic",b.isOrthographicCamera===!0),$!==b&&($=b,Fi=!0,Zi=!0)}if(nt.needsLights&&(bn.state.sunShadowMap.length>0&&Bt.setValue(j,"sunShadowMap",bn.state.sunShadowMap,$e),bn.state.directionalShadowMap.length>0&&Bt.setValue(j,"directionalShadowMap",bn.state.directionalShadowMap,$e),bn.state.spotShadowMap.length>0&&Bt.setValue(j,"spotShadowMap",bn.state.spotShadowMap,$e),bn.state.pointShadowMap.length>0&&Bt.setValue(j,"pointShadowMap",bn.state.pointShadowMap,$e)),te.isSkinnedMesh){Bt.setOptional(j,te,"bindMatrix"),Bt.setOptional(j,te,"bindMatrixInverse");const Xt=te.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),Bt.setValue(j,"boneTexture",Xt.boneTexture,$e))}te.isBatchedMesh&&(Bt.setOptional(j,te,"batchingTexture"),Bt.setValue(j,"batchingTexture",te._matricesTexture,$e),Bt.setOptional(j,te,"batchingIdTexture"),Bt.setValue(j,"batchingIdTexture",te._indirectTexture,$e),Bt.setOptional(j,te,"batchingColorTexture"),te._colorsTexture!==null&&Bt.setValue(j,"batchingColorTexture",te._colorsTexture,$e));const Kn=se.morphAttributes;if((Kn.position!==void 0||Kn.normal!==void 0||Kn.color!==void 0)&&_e.update(te,se,Nn),(Fi||nt.receiveShadow!==te.receiveShadow)&&(nt.receiveShadow=te.receiveShadow,Bt.setValue(j,"receiveShadow",te.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&G.environment!==null&&(Mn.envMapIntensity.value=G.environmentIntensity),Mn.dfgLUT!==void 0&&(Mn.dfgLUT.value=FE()),Fi){if(Bt.setValue(j,"toneMappingExposure",H.toneMappingExposure),nt.needsLights&&wi(Mn,Zi),He&&ne.fog===!0&&Oe.refreshFogUniforms(Mn,He),Oe.refreshMaterialUniforms(Mn,ne,we,Ge,I.state.transmissionRenderTarget[b.id]),nt.needsLights&&nt.numLightProbeGrids>0){const Xt=P;let rn=0;for(const Fn of I.state.lightProbeGridArray)Fn.texture!==null&&(Xt.textures[rn]=Fn.texture,Xt.min[rn]=Fn.boundingBox.min,Xt.max[rn]=Fn.boundingBox.max,Xt.resolution[rn]=Fn.resolution,rn++);for(const Fn in Xt)Xt[Fn].length=rn;Mn.probesSH.value=Xt.textures,Mn.probesMin.value=Xt.min,Mn.probesMax.value=Xt.max,Mn.probesResolution.value=Xt.resolution}pc.upload(j,kt(nt),Mn,$e)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(pc.upload(j,kt(nt),Mn,$e),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Bt.setValue(j,"center",te.center),Bt.setValue(j,"modelViewMatrix",te.modelViewMatrix),Bt.setValue(j,"normalMatrix",te.normalMatrix),Bt.setValue(j,"modelMatrix",te.matrixWorld),ne.uniformsGroups!==void 0){const Xt=ne.uniformsGroups;for(let rn=0,Fn=Xt.length;rn<Fn;rn++){const Rr=Xt[rn];le.update(Rr,Nn),le.bind(Rr,Nn)}}return Nn}function wi(b,G){b.ambientLightColor.needsUpdate=G,b.lightProbe.needsUpdate=G,b.sunLights.needsUpdate=G,b.sunLightShadows.needsUpdate=G,b.directionalLights.needsUpdate=G,b.directionalLightShadows.needsUpdate=G,b.pointLights.needsUpdate=G,b.pointLightShadows.needsUpdate=G,b.spotLights.needsUpdate=G,b.spotLightShadows.needsUpdate=G,b.rectAreaLights.needsUpdate=G,b.hemisphereLights.needsUpdate=G}function wn(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(b,G,se){const ne=je.get(b);ne.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),je.get(b.texture).__webglTexture=G,je.get(b.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:se,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,G){const se=je.get(b);se.__webglFramebuffer=G,se.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(b,G=0,se=0){Z=b,ue=G,ee=se;let ne=null,te=!1,He=!1;if(b){const Fe=je.get(b);if(Fe.__useDefaultFramebuffer!==void 0){Pe.bindFramebuffer(j.FRAMEBUFFER,Fe.__webglFramebuffer),O.copy(b.viewport),ie.copy(b.scissor),Ie=b.scissorTest,Pe.viewport(O),Pe.scissor(ie),Pe.setScissorTest(Ie),q=-1;return}else if(Fe.__webglFramebuffer===void 0)$e.setupRenderTarget(b);else if(Fe.__hasExternalTextures)$e.rebindTextures(b,je.get(b.texture).__webglTexture,je.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const lt=b.depthTexture;if(Fe.__boundDepthTexture!==lt){if(lt!==null&&je.has(lt)&&(b.width!==lt.image.width||b.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$e.setupDepthRenderbuffer(b)}}const We=b.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(He=!0);const Je=je.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Je[G])?ne=Je[G][se]:ne=Je[G],te=!0):b.samples>0&&$e.useMultisampledRTT(b)===!1?ne=je.get(b).__webglMultisampledFramebuffer:Array.isArray(Je)?ne=Je[se]:ne=Je,O.copy(b.viewport),ie.copy(b.scissor),Ie=b.scissorTest}else O.copy(it).multiplyScalar(we).floor(),ie.copy(Mt).multiplyScalar(we).floor(),Ie=Rt;if(se!==0&&(ne=he),Pe.bindFramebuffer(j.FRAMEBUFFER,ne)&&Pe.drawBuffers(b,ne),Pe.viewport(O),Pe.scissor(ie),Pe.setScissorTest(Ie),te){const Fe=je.get(b.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+G,Fe.__webglTexture,se)}else if(He){const Fe=G;for(let We=0;We<b.textures.length;We++){const Je=je.get(b.textures[We]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+We,Je.__webglTexture,se,Fe)}}else if(b!==null&&se!==0){const Fe=je.get(b.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Fe.__webglTexture,se)}q=-1};function Oi(b){const G=je.get(b);return(G.__readFormat!==b.format||G.__readType!==b.type)&&(G.__readFormat=b.format,G.__readType=b.type,G.__formatReadable=Ct.textureFormatReadable(b.format),G.__typeReadable=Ct.textureTypeReadable(b.type)),G}this.readRenderTargetPixels=function(b,G,se,ne,te,He,Ze,Fe=0){if(!(b&&b.isWebGLRenderTarget)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=je.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ze!==void 0&&(We=We[Ze],Array.isArray(We)&&(We=We[0])),We){Pe.bindFramebuffer(j.FRAMEBUFFER,We);try{const Je=b.textures[Fe],lt=Je.format,pt=Je.type;b.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Fe);const et=Oi(Je);if(et.__formatReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(et.__typeReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=b.width-ne&&se>=0&&se<=b.height-te&&j.readPixels(G,se,ne,te,Ue.convert(lt),Ue.convert(pt),He)}finally{const Je=Z!==null?je.get(Z).__webglFramebuffer:null;Pe.bindFramebuffer(j.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(b,G,se,ne,te,He,Ze,Fe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=je.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ze!==void 0&&(We=We[Ze],Array.isArray(We)&&(We=We[0])),We)if(G>=0&&G<=b.width-ne&&se>=0&&se<=b.height-te){Pe.bindFramebuffer(j.FRAMEBUFFER,We);const Je=b.textures[Fe],lt=Je.format,pt=Je.type;b.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Fe);const et=Oi(Je);if(et.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(et.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const bt=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,bt),j.bufferData(j.PIXEL_PACK_BUFFER,He.byteLength,j.STREAM_READ),j.readPixels(G,se,ne,te,Ue.convert(lt),Ue.convert(pt),0),j.bindBuffer(j.PIXEL_PACK_BUFFER,null);const pn=Z!==null?je.get(Z).__webglFramebuffer:null;Pe.bindFramebuffer(j.FRAMEBUFFER,pn);const tn=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await Bx(j,tn,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,bt),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,He),j.bindBuffer(j.PIXEL_PACK_BUFFER,null),j.deleteBuffer(bt),j.deleteSync(tn),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,G=null,se=0){const ne=Math.pow(2,-se),te=Math.floor(b.image.width*ne),He=Math.floor(b.image.height*ne),Ze=G!==null?G.x:0,Fe=G!==null?G.y:0;$e.setTexture2D(b,0),j.copyTexSubImage2D(j.TEXTURE_2D,se,0,0,Ze,Fe,te,He),Pe.unbindTexture()},this.copyTextureToTexture=function(b,G,se=null,ne=null,te=0,He=0){let Ze,Fe,We,Je,lt,pt,et,bt,pn;const tn=b.isCompressedTexture?b.mipmaps[He]:b.image;if(se!==null)Ze=se.max.x-se.min.x,Fe=se.max.y-se.min.y,We=se.isBox3?se.max.z-se.min.z:1,Je=se.min.x,lt=se.min.y,pt=se.isBox3?se.min.z:0;else{const Bt=Math.pow(2,-te);Ze=Math.floor(tn.width*Bt),Fe=Math.floor(tn.height*Bt),b.isDataArrayTexture?We=tn.depth:b.isData3DTexture?We=Math.floor(tn.depth*Bt):We=1,Je=0,lt=0,pt=0}ne!==null?(et=ne.x,bt=ne.y,pn=ne.z):(et=0,bt=0,pn=0);const Yt=Ue.convert(G.format),yn=Ue.convert(G.type);let nt;G.isData3DTexture?($e.setTexture3D(G,0),nt=j.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?($e.setTexture2DArray(G,0),nt=j.TEXTURE_2D_ARRAY):($e.setTexture2D(G,0),nt=j.TEXTURE_2D),Pe.activeTexture(j.TEXTURE0),Pe.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,G.flipY),Pe.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),Pe.pixelStorei(j.UNPACK_ALIGNMENT,G.unpackAlignment);const bn=Pe.getParameter(j.UNPACK_ROW_LENGTH),at=Pe.getParameter(j.UNPACK_IMAGE_HEIGHT),$i=Pe.getParameter(j.UNPACK_SKIP_PIXELS),Nn=Pe.getParameter(j.UNPACK_SKIP_ROWS),Nr=Pe.getParameter(j.UNPACK_SKIP_IMAGES);Pe.pixelStorei(j.UNPACK_ROW_LENGTH,tn.width),Pe.pixelStorei(j.UNPACK_IMAGE_HEIGHT,tn.height),Pe.pixelStorei(j.UNPACK_SKIP_PIXELS,Je),Pe.pixelStorei(j.UNPACK_SKIP_ROWS,lt),Pe.pixelStorei(j.UNPACK_SKIP_IMAGES,pt);const Fi=b.isDataArrayTexture||b.isData3DTexture,Zi=G.isDataArrayTexture||G.isData3DTexture;if(b.isDepthTexture){const Bt=je.get(b),Mn=je.get(G),Kn=je.get(Bt.__renderTarget),Xt=je.get(Mn.__renderTarget);Pe.bindFramebuffer(j.READ_FRAMEBUFFER,Kn.__webglFramebuffer),Pe.bindFramebuffer(j.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let rn=0;rn<We;rn++)Fi&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,je.get(b).__webglTexture,te,pt+rn),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,je.get(G).__webglTexture,He,pn+rn)),j.blitFramebuffer(Je,lt,Je+Ze,lt+Fe,et,bt,et+Ze,bt+Fe,j.DEPTH_BUFFER_BIT,j.NEAREST);Pe.bindFramebuffer(j.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(te!==0||b.isRenderTargetTexture||je.has(b)){const Bt=je.get(b),Mn=je.get(G);Pe.bindFramebuffer(j.READ_FRAMEBUFFER,F),Pe.bindFramebuffer(j.DRAW_FRAMEBUFFER,J);for(let Kn=0;Kn<We;Kn++)Fi?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Bt.__webglTexture,te,pt+Kn):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Bt.__webglTexture,te),Zi?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Mn.__webglTexture,He,pn+Kn):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Mn.__webglTexture,He),te!==0?j.blitFramebuffer(Je,lt,Je+Ze,lt+Fe,et,bt,et+Ze,bt+Fe,j.COLOR_BUFFER_BIT,j.NEAREST):Zi?j.copyTexSubImage3D(nt,He,et,bt,pn+Kn,Je,lt,Ze,Fe):j.copyTexSubImage2D(nt,He,et,bt,Je,lt,Ze,Fe);Pe.bindFramebuffer(j.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Zi?b.isDataTexture||b.isData3DTexture?j.texSubImage3D(nt,He,et,bt,pn,Ze,Fe,We,Yt,yn,tn.data):G.isCompressedArrayTexture?j.compressedTexSubImage3D(nt,He,et,bt,pn,Ze,Fe,We,Yt,tn.data):j.texSubImage3D(nt,He,et,bt,pn,Ze,Fe,We,Yt,yn,tn):b.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,He,et,bt,Ze,Fe,Yt,yn,tn.data):b.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,He,et,bt,tn.width,tn.height,Yt,tn.data):j.texSubImage2D(j.TEXTURE_2D,He,et,bt,Ze,Fe,Yt,yn,tn);Pe.pixelStorei(j.UNPACK_ROW_LENGTH,bn),Pe.pixelStorei(j.UNPACK_IMAGE_HEIGHT,at),Pe.pixelStorei(j.UNPACK_SKIP_PIXELS,$i),Pe.pixelStorei(j.UNPACK_SKIP_ROWS,Nn),Pe.pixelStorei(j.UNPACK_SKIP_IMAGES,Nr),He===0&&G.generateMipmaps===!0&&G.mipmapsAutoUpdate===!0&&j.generateMipmap(nt),Pe.unbindTexture()},this.initRenderTarget=function(b){je.get(b).__webglFramebuffer===void 0&&$e.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?$e.setTextureCube(b,0):b.isData3DTexture?$e.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?$e.setTexture2DArray(b,0):$e.setTexture2D(b,0),Pe.unbindTexture()},this.resetState=function(){ue=0,ee=0,Z=null,Pe.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=zt._getDrawingBufferColorSpace(e),t.unpackColorSpace=zt._getUnpackColorSpace()}}const $0={type:"change"},of={type:"start"},Jg={type:"end"},ac=new Pc,Z0=new Er,BE=Math.cos(70*Gx.DEG2RAD),Dn=new N,pi=2*Math.PI,qt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Yh=1e-6;class zE extends Wy{constructor(e,t=null){super(e,t),this.state=qt.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xa.ROTATE,MIDDLE:xa.DOLLY,RIGHT:xa.PAN},this.touches={ONE:_a.ROTATE,TWO:_a.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new is,this._lastTargetPosition=new N,this._quat=new is().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new A0,this._sphericalDelta=new A0,this._scale=1,this._panOffset=new N,this._rotateStart=new Ye,this._rotateEnd=new Ye,this._rotateDelta=new Ye,this._panStart=new Ye,this._panEnd=new Ye,this._panDelta=new Ye,this._dollyStart=new Ye,this._dollyEnd=new Ye,this._dollyDelta=new Ye,this._dollyDirection=new N,this._mouse=new Ye,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=VE.bind(this),this._onPointerDown=HE.bind(this),this._onPointerUp=GE.bind(this),this._onContextMenu=$E.bind(this),this._onMouseWheel=XE.bind(this),this._onKeyDown=KE.bind(this),this._onTouchStart=YE.bind(this),this._onTouchMove=qE.bind(this),this._onMouseDown=WE.bind(this),this._onMouseMove=jE.bind(this),this._interceptControlDown=ZE.bind(this),this._interceptControlUp=QE.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=qt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent($0),this.update(),this.state=qt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Dn.copy(t).sub(this.target),Dn.applyQuaternion(this._quat),this._spherical.setFromVector3(Dn),this.autoRotate&&this.state===qt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=pi:r>Math.PI&&(r-=pi),o<-Math.PI?o+=pi:o>Math.PI&&(o-=pi),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(Dn.setFromSpherical(this._spherical),Dn.applyQuaternion(this._quatInverse),t.copy(this.target).add(Dn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const d=Dn.length();u=this._clampDistance(d*this._scale);const p=d-u;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),l=!!p}else if(this.object.isOrthographicCamera){const d=new N(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=p!==this.object.zoom;const m=new N(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(d),this.object.updateMatrixWorld(),u=Dn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(ac.origin.copy(this.object.position),ac.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ac.direction))<BE?this.object.lookAt(this.target):(Z0.setFromNormalAndCoplanarPoint(this.object.up,this.target),ac.intersectPlane(Z0,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>Yh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Yh||this._lastTargetPosition.distanceToSquared(this.target)>Yh?(this.dispatchEvent($0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?pi/60*this.autoRotateSpeed*e:pi/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Dn.setFromMatrixColumn(t,0),Dn.multiplyScalar(-e),this._panOffset.add(Dn)}_panUp(e,t){this.screenSpacePanning===!0?Dn.setFromMatrixColumn(t,1):(Dn.setFromMatrixColumn(t,0),Dn.crossVectors(this.object.up,Dn)),Dn.multiplyScalar(e),this._panOffset.add(Dn)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;Dn.copy(o).sub(this.target);let l=Dn.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=e-r.left,l=t-r.top,u=r.width,d=r.height;this._mouse.x=o/u*2-1,this._mouse.y=-(l/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(pi*this._rotateDelta.x/t.clientHeight),this._rotateUp(pi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(pi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-pi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(pi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-pi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(r,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),o=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(o,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(pi*this._rotateDelta.x/t.clientHeight),this._rotateUp(pi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,d=(e.pageY+t.y)*.5;this._updateZoomParameters(u,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ye,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function HE(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function VE(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function GE(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Jg),this.state=qt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function WE(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case xa.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=qt.DOLLY;break;case xa.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=qt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=qt.ROTATE}break;case xa.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=qt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=qt.PAN}break;default:this.state=qt.NONE}this.state!==qt.NONE&&this.dispatchEvent(of)}function jE(s){switch(this.state){case qt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case qt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case qt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function XE(s){this.enabled===!1||this.enableZoom===!1||this.state!==qt.NONE||(s.preventDefault(),this.dispatchEvent(of),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Jg))}function KE(s){this.enabled!==!1&&this._handleKeyDown(s)}function YE(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case _a.ROTATE:if(this.enableRotate===!1){this.state=qt.NONE;break}this._handleTouchStartRotate(s),this.state=qt.TOUCH_ROTATE;break;case _a.PAN:if(this.enablePan===!1){this.state=qt.NONE;break}this._handleTouchStartPan(s),this.state=qt.TOUCH_PAN;break;default:this.state=qt.NONE}break;case 2:switch(this.touches.TWO){case _a.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=qt.TOUCH_DOLLY_PAN;break;case _a.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=qt.TOUCH_DOLLY_ROTATE;break;default:this.state=qt.NONE}break;default:this.state=qt.NONE}this.state!==qt.NONE&&this.dispatchEvent(of)}function qE(s){switch(this._trackPointer(s),this.state){case qt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case qt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case qt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case qt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=qt.NONE}}function $E(s){this.enabled!==!1&&s.preventDefault()}function ZE(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function QE(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Q0({theme:s="dark",heatmap:e="pressure",assetsLayer:t={pipes:!0,pipesPrimary:!0,pipesSecondary:!0,pipesTertiary:!0,pipesService:!0,buildings:!0,hydrants:!0,streetLabels:!0,valves:!0,tanks:!0,sensors:!0,contour:!0},closedValves:r={},onToggleValve:o,simTime:l=14,currentSim:u={label:"14:00 - Giờ bình thường",flow:12580,pressure:3.32},compact:d=!1,onSelectAsset:p}){const m=It.useRef(null),x=It.useRef(null),M=It.useRef(null),_=It.useRef(null),S=It.useRef(null),E=It.useRef(null),R=It.useRef([]),v=It.useRef([]),[y,D]=It.useState(null),k=Object.entries(r).filter(([I,T])=>T);It.useEffect(()=>{const I=m.current;if(!I)return;const T=I.clientWidth||900,A=I.clientHeight||560,U=s==="dark",H=new iy;x.current=H;const Q=(()=>{const le=document.createElement("canvas");le.width=2048,le.height=1024;const pe=le.getContext("2d"),fe=pe.createLinearGradient(0,0,0,le.height);fe.addColorStop(0,"#1d4ed8"),fe.addColorStop(.22,"#3b82f6"),fe.addColorStop(.48,"#93c5fd"),fe.addColorStop(.68,"#bfdbfe"),fe.addColorStop(.8,"#e0f2fe"),fe.addColorStop(.92,"#f0f9ff"),fe.addColorStop(1,"#cbd5e1"),pe.fillStyle=fe,pe.fillRect(0,0,le.width,le.height);const ge=(ye,Me,Xe,qe,dt)=>{pe.save(),pe.beginPath(),pe.ellipse(ye,Me,Xe,qe,0,0,Math.PI*2),pe.fillStyle=`rgba(255, 255, 255, ${dt})`,pe.filter="blur(10px)",pe.fill(),pe.restore()};for(let ye=0;ye<4;ye++){const Me=le.height*(.64+ye*.06),Xe=.25+ye*.16;for(let qe=0;qe<48;qe++){const dt=qe/48*le.width+Math.sin(qe*3.1)*35,Ft=65+Math.sin(qe*4.7)*40,At=18+Math.cos(qe*2.3)*10;ge(dt,Me+Math.sin(qe*1.8)*12,Ft,At,Xe)}}const Te=new zh(le);return Te.mapping=lc,Te})();H.background=Q,H.environment=Q;const he=14412542;H.fog=new Jd(he,1400,5600);const F=new Ki(42,T/A,2,8500);F.position.set(780,720,880),M.current=F;const J=new kE({antialias:!0,alpha:!1,powerPreference:"high-performance"});for(J.setSize(T,A),J.setPixelRatio(Math.min(window.devicePixelRatio,2)),J.shadowMap.enabled=!0,J.shadowMap.type=ig,J.toneMapping=Wd,J.toneMappingExposure=U?1.15:1,S.current=J;I.firstChild;)I.removeChild(I.firstChild);I.appendChild(J.domElement);const ue=new zE(F,J.domElement);ue.enableDamping=!0,ue.dampingFactor=.06,ue.maxPolarAngle=Math.PI/2-.03,ue.minDistance=25,ue.maxDistance=3400,ue.target.set(0,15,0),_.current=ue;const ee=new Hy(12248829,.95);H.add(ee);const Z=new zy(16776176,1.65);Z.position.set(650,950,550),Z.castShadow=!0,Z.shadow.mapSize.width=2048,Z.shadow.mapSize.height=2048,Z.shadow.camera.near=100,Z.shadow.camera.far=3200;const q=1250;Z.shadow.camera.left=-q,Z.shadow.camera.right=q,Z.shadow.camera.top=q,Z.shadow.camera.bottom=-q,Z.shadow.bias=-3e-4,H.add(Z);const $=new Fy(3718648,14870768,.6);H.add($),v.current=[],R.current=[];const O=new Ii(14e3,14e3),ie=new fn({color:U?659744:15857145,roughness:.98,metalness:.02}),Ie=new Et(O,ie);Ie.rotation.x=-Math.PI/2,Ie.position.y=-.3,Ie.receiveShadow=!0,H.add(Ie);const ae=new Ii(2600,2600),Ce=new fn({color:U?988970:16317180,roughness:.92,metalness:.02}),be=new Et(ae,Ce);be.rotation.x=-Math.PI/2,be.position.y=-.2,be.receiveShadow=!0,H.add(be);const Ge=new Vn,we=new fn({color:16777215,roughness:.95,metalness:.02,transparent:!0,opacity:.76,emissive:15792639,emissiveIntensity:.2});for(let le=0;le<36;le++){const pe=le/36*Math.PI*2,fe=2400+Math.sin(le*3.7)*700,ge=Math.cos(pe)*fe,Te=Math.sin(pe)*fe,ye=260+Math.cos(le*2.5)*90,Me=new Vn;Me.position.set(ge,ye,Te);const Xe=4;for(let qe=0;qe<Xe;qe++){const dt=70+Math.sin(qe*2.1)*30,Ft=new Es(dt,10,8),At=new Et(Ft,we);At.position.set((qe-Xe/2)*60,Math.sin(qe*1.5)*16,Math.cos(qe*1.5)*28),At.scale.set(1.4,.55,1),Me.add(At)}Ge.add(Me)}H.add(Ge);const Ve=new Cc(1240,1248,64),Dt=new va({color:U?165063:959977,side:Yi,transparent:!0,opacity:.35}),it=new Et(Ve,Dt);it.rotation.x=-Math.PI/2,it.position.y=.04,H.add(it);const Mt=new Vn;H.add(Mt);const Rt=new fn({color:U?1976635:16777215,roughness:.45,metalness:.05}),xt=new fn({color:U?988970:14870768,roughness:.75}),$t=new va({color:16096779}),ln=new va({color:U?9741240:16777215}),yt=(le,pe,fe,ge,Te=!0,ye="Đường đô thị",Me=!0)=>{const Xe=new Ii(fe,ge),qe=new Et(Xe,Rt);qe.rotation.x=-Math.PI/2,qe.position.set(le,.05,pe),Te||(qe.rotation.z=Math.PI/2),qe.receiveShadow=!0,Mt.add(qe);const dt=fe>=24?4:2.5,Ft=new Ii(dt,ge),At=new Et(Ft,xt);At.rotation.x=-Math.PI/2,Te?At.position.set(le-fe/2-dt/2,.1,pe):(At.rotation.z=Math.PI/2,At.position.set(le,.1,pe-fe/2-dt/2)),Mt.add(At);const Qt=new Et(Ft,xt);if(Qt.rotation.x=-Math.PI/2,Te?Qt.position.set(le+fe/2+dt/2,.1,pe):(Qt.rotation.z=Math.PI/2,Qt.position.set(le,.1,pe+fe/2+dt/2)),Mt.add(Qt),Me&&fe>=20){const Vt=new Ii(2.2,ge),ct=new Et(Vt,$t);ct.rotation.x=-Math.PI/2,Te||(ct.rotation.z=Math.PI/2),ct.position.set(le,.08,pe),Mt.add(ct)}else{const Vt=Math.floor(ge/18);for(let ct=0;ct<Vt;ct++){const cn=new Ii(.6,6),Tt=new Et(cn,ln);Tt.rotation.x=-Math.PI/2,Te?Tt.position.set(le,.08,pe-ge/2+ct*18+9):(Tt.rotation.z=Math.PI/2,Tt.position.set(le-ge/2+ct*18+9,.08,pe)),Mt.add(Tt)}}};yt(0,0,24,2400,!0,"Đường Hoàng Đạo Thúy",!0),yt(0,180,28,2500,!1,"Đường Lê Văn Lương",!0),yt(0,-180,30,2500,!1,"Đường Trần Duy Hưng",!0),yt(-440,0,40,2500,!0,"Đường Phạm Hùng - Khuất Duy Tiến (Vành Đai 3)",!0),yt(-160,0,22,2400,!0,"Đường Hoàng Minh Giám",!0),yt(-700,40,44,1400,!1,"Đại Lộ Thăng Long",!0),yt(340,0,22,2400,!0,"Phố Trung Kính",!0),yt(140,0,16,2200,!0,"Phố Nguyễn Thị Định",!1),yt(240,220,18,1400,!0,"Phố Vũ Trọng Phụng",!0),yt(290,240,18,1400,!0,"Phố Nguyễn Tuân",!0),yt(0,0,18,2400,!1,"Đường Nguyễn Thị Thập",!1),yt(0,90,16,2200,!1,"Phố Hoàng Ngân",!1),yt(0,-90,16,2e3,!1,"Phố Đỗ Quang",!1),yt(0,240,16,2200,!1,"Phố Quan Nhân",!1),yt(0,290,16,2e3,!1,"Phố Nhân Hòa & Chính Kinh",!1),yt(0,350,22,2400,!1,"Đường Ngụy Như Kon Tum",!0),yt(0,430,18,2200,!1,"Đường Nguyễn Huy Tưởng",!1),yt(0,-340,24,2400,!1,"Đường Nguyễn Chánh / Vũ Phạm Hàm",!0),yt(0,-260,18,1800,!1,"Đường Mạc Thái Tổ",!1),yt(0,-220,18,1800,!1,"Đường Mạc Thái Tông",!1),yt(-200,-460,24,2e3,!1,"Đường Mễ Trì",!0),yt(-200,-540,26,2e3,!1,"Đường Dương Đình Nghệ",!0);const jt=new Vn;H.add(jt);const Ot=(le,pe,fe=160,ge=42,Te=!0)=>{if(!t.streetLabels)return null;const ye=document.createElement("canvas");ye.width=1024,ye.height=256;const Me=ye.getContext("2d"),Xe=48,qe=16,dt=16,Ft=992,At=224;Me.shadowColor="rgba(0, 0, 0, 0.35)",Me.shadowBlur=18,Me.shadowOffsetX=0,Me.shadowOffsetY=6,Me.beginPath(),Me.moveTo(qe+Xe,dt),Me.lineTo(qe+Ft-Xe,dt),Me.quadraticCurveTo(qe+Ft,dt,qe+Ft,dt+Xe),Me.lineTo(qe+Ft,dt+At-Xe),Me.quadraticCurveTo(qe+Ft,dt+At,qe+Ft-Xe,dt+At),Me.lineTo(qe+Xe,dt+At),Me.quadraticCurveTo(qe,dt+At,qe,dt+At-Xe),Me.lineTo(qe,dt+Xe),Me.quadraticCurveTo(qe,dt,qe+Xe,dt),Me.closePath(),Me.fillStyle=U?"#0f172a":"#ffffff",Me.fill(),Me.shadowColor="transparent",Me.lineWidth=Te?8:5,Me.strokeStyle=Te?U?"#38bdf8":"#1d4ed8":U?"#475569":"#cbd5e1",Me.stroke();const Qt=72,Vt=128,ct=48;Me.beginPath(),Me.arc(Qt,Vt,ct,0,Math.PI*2),Me.fillStyle=Te?le.includes("KEANGNAM")||le.includes("NCC")||le.includes("THÁP")||le.includes("DIAMOND")?"#7c3aed":"#1d4ed8":"#d97706",Me.fill(),Me.fillStyle="#ffffff",Me.font='bold 36px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',Me.textAlign="center",Me.textBaseline="middle",Me.fillText(Te?le.includes("KEANGNAM")||le.includes("34T")?"⭐":"ĐT":"HN",Qt,Vt),Me.fillStyle=U?"#f8fafc":"#0f172a",Me.font=`bold ${Te?"54px":"46px"} -apple-system, BlinkMacSystemFont, "Plus Jakarta Sans", Roboto, sans-serif`,Me.textAlign="left",Me.textBaseline="middle",Me.fillText(le,142,Vt);const cn=new zh(ye);cn.minFilter=ai;const Tt=new Fd({map:cn,transparent:!0,depthTest:!1}),Jt=new a0(Tt);return Jt.position.set(pe[0],pe[1]+48,pe[2]),Jt.scale.set(fe,ge,1),jt.add(Jt),Jt};Ot("ĐƯỜNG HOÀNG ĐẠO THÚY",[0,10,-50],55,13.5,!0),Ot("ĐƯỜNG LÊ VĂN LƯƠNG",[120,10,180],52,13,!0),Ot("ĐƯỜNG TRẦN DUY HƯNG",[120,10,-180],52,13,!0),Ot("ĐƯỜNG PHẠM HÙNG (VÀNH ĐAI 3)",[-440,10,-80],65,16,!0),Ot("ĐƯỜNG HOÀNG MINH GIÁM",[-160,10,80],55,13.5,!0),Ot("ĐẠI LỘ THĂNG LONG",[-720,10,40],56,14,!0),Ot("ĐƯỜNG NGUYỄN THỊ THẬP",[-80,10,0],48,12,!1),Ot("PHỐ NGUYỄN THỊ ĐỊNH",[140,10,-70],48,12,!1),Ot("PHỐ HOÀNG NGÂN",[60,10,90],44,11,!1),Ot("PHỐ ĐỖ QUANG",[60,10,-90],44,11,!1),Ot("PHỐ VŨ TRỌNG PHỤNG",[240,10,240],46,11.5,!1),Ot("PHỐ NGUYỄN TUÂN",[290,10,290],46,11.5,!1),Ot("ĐƯỜNG NGỤY NHƯ KON TUM",[140,10,350],52,13,!1),Ot("PHỐ TRUNG KÍNH",[340,10,50],46,11.5,!1),Ot("KEANGNAM LANDMARK 72 (350M)",[-540,16,-320],68,17,!0),Ot("TRUNG TÂM HỘI NGHỊ QUỐC GIA (NCC)",[-440,14,120],68,17,!0),Ot("VINHOMES D'CAPITALE & BIG C",[-220,12,-180],62,15.5,!0),Ot("HỒ ĐIỀU HÒA NHÂN CHÍNH (8.2 HA)",[-260,10,95],58,14.5,!0);const de=new fn({color:U?165063:959977,roughness:.05,metalness:.85,transparent:!0,opacity:U?.92:.82}),St=new Ii(160,140),wt=new Et(St,de);wt.rotation.x=-Math.PI/2,wt.position.set(-260,.25,95),wt.receiveShadow=!0,H.add(wt);const Ht=new Ii(220,150),j=new Et(Ht,de);j.rotation.x=-Math.PI/2,j.position.set(-540,.25,120),j.receiveShadow=!0,H.add(j);const gn=new Vn;H.add(gn);const mt=!!r["VALVE-01"],Ct=!!r["VALVE-02"],Pe=!!r["VALVE-03"],vt=!!r["VALVE-04"],je=!!r["VALVE-05"],$e=!!r["VALVE-06"],L=!!r["VALVE-07"],w=!!r["VALVE-08"],X=({pos:le=[0,0,0],size:pe=[16,40,16],color:fe=16777215,name:ge,id:Te,floors:ye,households:Me,demandFlow:Xe,intakePressure:qe,connectionPipe:dt,cisternCapacity:Ft,meterId:At,dma:Qt,hasAntenna:Vt=!1,isCutOff:ct=!1,cutOffValveName:cn=""})=>{if(!t.buildings)return null;const Tt=new Vn;Tt.position.set(le[0],0,le[2]);const[Jt,Zt,On]=pe;let En=U?1976635:16777215;!U&&ge&&(ge.includes("Keangnam")||ge.includes("Diamond Flower")||ge.includes("Charmvit")||ge.includes("MB")?En=15857145:(ge.includes("Mandarin")||ge.includes("D'Capitale")||ge.includes("Hapulico")||ge.includes("34T"))&&(En=16317180));const Gn=ct?15680580:En,gi=new sr(Jt,Zt,On),kt=new fn({color:Gn,metalness:ct?.2:.25,roughness:ct?.3:.35,transparent:ct,opacity:ct?.8:1,emissive:ct?10033947:0,emissiveIntensity:ct?.45:0}),en=new Et(gi,kt);en.position.y=Zt/2,en.castShadow=!0,en.receiveShadow=!0,Tt.add(en);const ti=new g0(gi),wi=new m0(ti,new kd({color:ct?14427686:U?3359061:13358561,linewidth:ct?2.5:1}));en.add(wi);const wn=Math.max(2,Zt*.04),Oi=new sr(Jt*.96,wn,On*.96),b=new fn({color:ct?8330525:U?988970:3359061,roughness:.5}),G=new Et(Oi,b);G.position.set(0,Zt+wn/2,0),Tt.add(G);const se=new Li(Jt*.18,Jt*.18,5,16),ne=new fn({color:ct?15680580:14870768,metalness:.9,roughness:.15}),te=new Et(se,ne);if(te.position.set(0,Zt+wn+2.5,0),Tt.add(te),Vt){const Ze=new Li(.3,.5,20,8),Fe=new fn({color:9741240,metalness:.85}),We=new Et(Ze,Fe);We.position.set(0,Zt+wn+12,0),Tt.add(We);const Je=new Es(1.4,8,8),lt=new va({color:ct?16096779:15680580}),pt=new Et(Je,lt);pt.position.set(0,Zt+wn+22,0),Tt.add(pt)}const He={name:ge,id:Te,type:"Công Trình & Tòa Nhà Đô Thị",status:ct?`⚠️ ĐÃ CẮT NƯỚC CỤC BỘ (Do đóng chốt khóa: ${cn})`:"Cấp nước liên tục 24/7 (Đạt chuẩn QCVN 01-1:2018/BXD)",floors:`${ye} tầng`,households:Me||"500 căn hộ",flow:ct?"0.0 m³/h (Mất áp)":Xe||"45.0 m³/h",pressure:ct?"0.00 bar (MẤT NƯỚC)":qe||"3.25 bar",elevation:"+17.2m ASL",connectionPipe:dt||"DN65 HDPE",cisternCapacity:Ft||"800 m³",meterId:At||`AMR-${Te}`,dma:Qt||"DMA THNC-02",isCutOff:ct,cutOffValveName:cn};return Tt.userData={name:ge,id:Te,type:"Building",data:He},en.userData=Tt.userData,v.current.push(en),gn.add(Tt),Tt},Ee=({center:le,size:pe,rows:fe=2,cols:ge=6,heightRange:Te=[15,22],zoneId:ye,isCutOff:Me,cutOffValveName:Xe,blockName:qe="Khu Nhà Phố Liền Kề",dma:dt="DMA THNC-02"})=>{if(!t.buildings)return;const[Ft,At]=le,[Qt,Vt]=pe,ct=Qt/ge,cn=Vt/fe,Tt=new Vn;for(let Jt=0;Jt<fe;Jt++)for(let Zt=0;Zt<ge;Zt++){const On=Ft-Qt/2+(Zt+.5)*ct,En=At-Vt/2+(Jt+.5)*cn,Gn=(Math.sin(On*12.9898+En*78.233)*43758.5453%1+1)%1,gi=Te[0]+Gn*(Te[1]-Te[0]),kt=gi*.75,en=Math.max(3.8,Math.min(ct,cn)*.42),ti=ct*.9,wi=cn*.88,wn=U?[1976635,3359061,1976635]:[16776171,16708551,16448249,16777215],Oi=Math.floor(Gn*wn.length)%wn.length,b=new sr(ti,kt,wi),G=new fn({color:Me?15680580:wn[Oi],roughness:.65,metalness:.05,transparent:Me,opacity:Me?.75:1,emissive:Me?10033947:0,emissiveIntensity:Me?.35:0}),se=new Et(b,G);se.position.set(On,kt/2,En),se.castShadow=!0,se.receiveShadow=!0,Tt.add(se);const ne=new wc(Math.max(ti,wi)*.72,en,4),te=[12730636,12131356,14251782,15357964],He=U?10033947:te[Oi%te.length],Ze=new fn({color:Me?15680580:He,roughness:.55,metalness:.1}),Fe=new Et(ne,Ze);Fe.rotation.y=Math.PI/4,Fe.position.set(On,kt+en/2,En),Fe.castShadow=!0,Tt.add(Fe);const We=new Li(ti*.16,ti*.16,2.4,12),Je=new fn({color:14870768,metalness:.9,roughness:.15}),lt=new Et(We,Je);if(lt.position.set(On+ti*.22,kt+en*.7,En+wi*.22),Tt.add(lt),Me){const et=new g0(b),bt=new m0(et,new kd({color:14427686,linewidth:2}));se.add(bt)}const pt={name:`${qe} (Lô ${Jt+1}-${Zt+1})`,id:`HOUSE-${ye}-${Jt+1}-${Zt+1}`,type:"Nhà Phố / Shophouse Phân Lô",status:Me?`⚠️ MẤT NƯỚC (Do đóng van: ${Xe})`:"Cấp nước ổn định",floors:`${Math.round(gi/3.6)} tầng`,households:"1 hộ gia đình + mặt bằng kinh doanh",flow:Me?"0.0 m³/h":"0.45 m³/h",pressure:Me?"0.00 bar":"3.18 bar",connectionPipe:"DN32 HDPE",cisternCapacity:"2.5 m³ (Bồn inox áp mái)",meterId:`MTR-${ye}-${Jt+1}-${Zt+1}`,dma:dt,isCutOff:Me,cutOffValveName:Xe};se.userData={name:pt.name,id:pt.id,type:"Building",data:pt},v.current.push(se)}gn.add(Tt)};X({pos:[-540,0,-320],size:[48,165,48],color:U?165063:223649,name:"Keangnam Hanoi Landmark 72 (350m - 72 Tầng)",id:"BLDG-KEANGNAM-72",floors:72,households:"Khách sạn InterContinental + 200,000m² VP",demandFlow:"142.0 m³/h",intakePressure:"3.42 bar",connectionPipe:"DN150 Gang cầu K9 kép",cisternCapacity:"4,500 m³",meterId:"AMR-KEANGNAM-MAIN",dma:"DMA Phía Tây",hasAntenna:!0,isCutOff:$e,cutOffValveName:"Van V-KNG-06"}),X({pos:[-590,0,-320],size:[32,105,32],color:U?223649:165063,name:"Tháp Căn Hộ Keangnam A (48 Tầng)",id:"BLDG-KEANGNAM-A",floors:48,households:"460 căn hộ cao cấp",demandFlow:"48.0 m³/h",intakePressure:"3.38 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,200 m³",meterId:"AMR-KEANGNAM-TOWER-A",dma:"DMA Phía Tây",isCutOff:$e,cutOffValveName:"Van V-KNG-06"}),X({pos:[-490,0,-320],size:[32,105,32],color:U?223649:165063,name:"Tháp Căn Hộ Keangnam B (48 Tầng)",id:"BLDG-KEANGNAM-B",floors:48,households:"460 căn hộ cao cấp",demandFlow:"48.0 m³/h",intakePressure:"3.38 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,200 m³",meterId:"AMR-KEANGNAM-TOWER-B",dma:"DMA Phía Tây",isCutOff:$e,cutOffValveName:"Van V-KNG-06"}),X({pos:[-460,0,-220],size:[30,80,26],color:U?165063:223649,name:"Tòa Tháp Handico Tower (33 Tầng)",id:"BLDG-HANDICO",floors:33,households:"Trụ sở Tổng Công ty Handico",demandFlow:"32.0 m³/h",intakePressure:"3.35 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"800 m³",meterId:"AMR-HANDICO",dma:"DMA Phía Tây",isCutOff:$e,cutOffValveName:"Van V-KNG-06"}),X({pos:[-460,0,-170],size:[28,68,24],color:U?165063:223649,name:"Tòa Tháp CEO Tower (27 Tầng)",id:"BLDG-CEO",floors:27,households:"Tổ hợp Văn phòng CEO Group",demandFlow:"28.0 m³/h",intakePressure:"3.32 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"700 m³",meterId:"AMR-CEO",dma:"DMA Phía Tây",isCutOff:$e,cutOffValveName:"Van V-KNG-06"}),X({pos:[-440,0,-110],size:[56,42,56],color:U?1096065:366185,name:"Bảo Tàng Hà Nội (Kim Tự Tháp Ngược)",id:"BLDG-MUSEUM",floors:4,households:"Bảo tàng Quốc gia & Khu triển lãm 5 ha",demandFlow:"24.0 m³/h",intakePressure:"3.32 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"600 m³",meterId:"AMR-MUSEUM",dma:"DMA Phía Tây",isCutOff:$e,cutOffValveName:"Van V-KNG-06"}),X({pos:[-440,0,140],size:[85,36,75],color:U?14251782:11817737,name:"Trung Tâm Hội Nghị Quốc Gia (NCC - 64 ha)",id:"BLDG-NCC",floors:5,households:"Hội trường 3,800 chỗ + Khuôn viên cảnh quan",demandFlow:"85.0 m³/h",intakePressure:"3.35 bar",connectionPipe:"DN100 HDPE kép từ Đại lộ Thăng Long",cisternCapacity:"2,500 m³",meterId:"AMR-NCC-MAIN",dma:"DMA Hội Nghị Quốc Gia"}),X({pos:[-280,0,-180],size:[70,24,60],color:U?14427686:12131356,name:"Đại Siêu Thị Big C Thăng Long (GO!)",id:"BLDG-BIG-C",floors:3,households:"Trung tâm mua sắm bán lẻ 12,000m²",demandFlow:"65.0 m³/h",intakePressure:"3.28 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,500 m³",meterId:"AMR-BIGC-01",dma:"DMA THNC-01",isCutOff:je,cutOffValveName:"Van V-DCP-05"}),[-230,-190,-150].forEach((le,pe)=>{X({pos:[le,0,-220],size:[26,95+pe*4,26],color:U?165063:223649,name:`Tổ Hợp Vinhomes D'Capitale C${pe+1} (${40+pe} Tầng)`,id:`BLDG-DCAPITALE-${pe+1}`,floors:40+pe,households:"520 căn hộ cao cấp",demandFlow:"52.0 m³/h",intakePressure:"3.30 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,400 m³",meterId:`AMR-DCAPITALE-C${pe+1}`,dma:"DMA THNC-01",isCutOff:je,cutOffValveName:"Van V-DCP-05"}),X({pos:[le,0,-260],size:[26,92+pe*4,26],color:U?223649:165063,name:`Tổ Hợp Vinhomes D'Capitale C${pe+4} (${39+pe} Tầng)`,id:`BLDG-DCAPITALE-${pe+4}`,floors:39+pe,households:"500 căn hộ cao cấp",demandFlow:"50.0 m³/h",intakePressure:"3.30 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,350 m³",meterId:`AMR-DCAPITALE-C${pe+4}`,dma:"DMA THNC-01",isCutOff:je,cutOffValveName:"Van V-DCP-05"})}),X({pos:[-360,0,40],size:[32,98,30],color:U?165063:223649,name:"Tháp Thăng Long Number One A (40 Tầng)",id:"BLDG-TL-NO1-A",floors:40,households:"540 căn hộ xanh",demandFlow:"54.0 m³/h",intakePressure:"3.32 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,500 m³",meterId:"AMR-TL-NO1-A",dma:"DMA THNC-01",isCutOff:je,cutOffValveName:"Van V-DCP-05"}),X({pos:[-360,0,85],size:[32,98,30],color:U?165063:223649,name:"Tháp Thăng Long Number One B (40 Tầng)",id:"BLDG-TL-NO1-B",floors:40,households:"540 căn hộ xanh",demandFlow:"54.0 m³/h",intakePressure:"3.32 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,500 m³",meterId:"AMR-TL-NO1-B",dma:"DMA THNC-01",isCutOff:je,cutOffValveName:"Van V-DCP-05"}),X({pos:[-380,0,-30],size:[28,76,26],color:U?223649:165063,name:"Tòa Tháp Viglacera Tower (30 Tầng)",id:"BLDG-VIGLACERA",floors:30,households:"Trụ sở Tổng Công ty Viglacera",demandFlow:"30.0 m³/h",intakePressure:"3.30 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"800 m³",meterId:"AMR-VIGLACERA",dma:"DMA THNC-01",isCutOff:je,cutOffValveName:"Van V-DCP-05"}),X({pos:[65,0,-215],size:[38,72,32],color:U?14251782:11817737,name:"Tổ Hợp Charmvit Tower & Grand Plaza",id:"BLDG-CHARMVIT",floors:27,households:"540 phòng KS 5 sao & 45,000m² VP Đại sứ quán Hàn Quốc",demandFlow:"58.0 m³/h",intakePressure:"3.25 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,800 m³",meterId:"AMR-CHARMVIT-PLAZA",dma:"DMA THNC-01",isCutOff:vt,cutOffValveName:"Van V-TDN-04"}),[-20,20,60].forEach((le,pe)=>{X({pos:[le,0,-140],size:[24,72,22],color:U?165063:223649,name:`Tòa Căn Hộ Cao Cấp N04-${String.fromCharCode(65+pe)} (29 Tầng)`,id:`BLDG-N04-${String.fromCharCode(65+pe)}`,floors:29,households:"360 căn hộ cao cấp",demandFlow:"36.0 m³/h",intakePressure:"3.26 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"950 m³",meterId:`AMR-N04-${String.fromCharCode(65+pe)}`,dma:"DMA THNC-01",isCutOff:vt,cutOffValveName:"Van V-TDN-04"})}),X({pos:[40,0,-85],size:[28,85,26],color:U?223649:165063,name:"Tòa Tháp N05-29T1 Hoàng Đạo Thúy (34 Tầng)",id:"BLDG-N05-34T1",floors:34,households:"480 căn hộ",demandFlow:"48.0 m³/h",intakePressure:"3.24 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,200 m³",meterId:"AMR-N05-34T1",dma:"DMA THNC-01",isCutOff:vt,cutOffValveName:"Van V-TDN-04"}),X({pos:[80,0,-85],size:[28,85,26],color:U?223649:165063,name:"Tòa Tháp N05-29T2 Hoàng Đạo Thúy (34 Tầng)",id:"BLDG-N05-34T2",floors:34,households:"480 căn hộ",demandFlow:"48.0 m³/h",intakePressure:"3.24 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,200 m³",meterId:"AMR-N05-34T2",dma:"DMA THNC-01",isCutOff:vt,cutOffValveName:"Van V-TDN-04"}),X({pos:[25,0,20],size:[26,82,26],color:U?165063:223649,name:"Tòa Tháp Biểu Tượng 34T Hoàng Đạo Thúy",id:"BLDG-34T-HDT",floors:34,households:"650 căn hộ (~2,600 cư dân)",demandFlow:"58.0 m³/h",intakePressure:"3.25 bar",connectionPipe:"DN80 HDPE nối từ trục D600",cisternCapacity:"1,500 m³",meterId:"AMR-34T-MAIN",dma:"DMA THNC-02",hasAntenna:!0,isCutOff:mt,cutOffValveName:"Van V-HDT-01"}),X({pos:[-35,0,30],size:[20,58,18],color:U?223649:165063,name:"Tòa Chung Cư 24T1 Hoàng Đạo Thúy",id:"BLDG-24T1",floors:24,households:"280 căn hộ",demandFlow:"28.0 m³/h",intakePressure:"3.22 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"800 m³",meterId:"AMR-24T1",dma:"DMA THNC-02",isCutOff:mt,cutOffValveName:"Van V-HDT-01"}),X({pos:[-35,0,-30],size:[20,58,18],color:U?223649:165063,name:"Tòa Chung Cư 24T2 Hoàng Đạo Thúy",id:"BLDG-24T2",floors:24,households:"280 căn hộ",demandFlow:"28.0 m³/h",intakePressure:"3.22 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"800 m³",meterId:"AMR-24T2",dma:"DMA THNC-02",isCutOff:mt,cutOffValveName:"Van V-HDT-01"}),X({pos:[-75,0,0],size:[20,58,18],color:U?223649:165063,name:"Tòa Chung Cư 24T3 Hoàng Đạo Thúy",id:"BLDG-24T3",floors:24,households:"280 căn hộ",demandFlow:"28.0 m³/h",intakePressure:"3.22 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"800 m³",meterId:"AMR-24T3",dma:"DMA THNC-02",isCutOff:mt,cutOffValveName:"Van V-HDT-01"}),[75,115,155].forEach((le,pe)=>{X({pos:[42,0,le],size:[18,44,16],color:U?959977:165063,name:`Tòa Chung Cư 17T${pe+1} Hoàng Đạo Thúy`,id:`BLDG-17T${pe+1}`,floors:17,households:"180 căn hộ",demandFlow:"18.0 m³/h",intakePressure:"3.20 bar",connectionPipe:"DN50 HDPE",cisternCapacity:"500 m³",meterId:`AMR-17T${pe+1}`,dma:"DMA THNC-02",isCutOff:mt,cutOffValveName:"Van V-HDT-01"}),X({pos:[-35,0,le],size:[18,44,16],color:U?959977:165063,name:`Tòa Chung Cư 17T${pe+4} Hoàng Đạo Thúy`,id:`BLDG-17T${pe+4}`,floors:17,households:"180 căn hộ",demandFlow:"18.0 m³/h",intakePressure:"3.20 bar",connectionPipe:"DN50 HDPE",cisternCapacity:"500 m³",meterId:`AMR-17T${pe+4}`,dma:"DMA THNC-02",isCutOff:mt,cutOffValveName:"Van V-HDT-01"})}),X({pos:[35,0,155],size:[30,95,30],color:U?165063:481669,name:"Tòa Tháp Diamond Flower Tower (36 Tầng - 176m)",id:"BLDG-DIAMOND-FLOWER",floors:36,households:"380 căn hộ + 35,000m² VP hạng A",demandFlow:"48.0 m³/h",intakePressure:"3.28 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,600 m³",meterId:"AMR-DIAMOND-01",dma:"DMA THNC-02",hasAntenna:!0,isCutOff:Pe,cutOffValveName:"Van V-LVL-03"}),X({pos:[80,0,155],size:[26,72,24],color:U?223649:165063,name:"Tổ Hợp Chung Cư Star City Lê Văn Lương (27 Tầng)",id:"BLDG-STAR-CITY",floors:27,households:"420 căn hộ cao cấp",demandFlow:"42.0 m³/h",intakePressure:"3.25 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,100 m³",meterId:"AMR-STAR-CITY",dma:"DMA THNC-02",isCutOff:Pe,cutOffValveName:"Van V-LVL-03"}),X({pos:[130,0,155],size:[28,72,26],color:U?165063:223649,name:"Tòa Tháp The Golden Palm (27 Tầng)",id:"BLDG-GOLDEN-PALM",floors:27,households:"400 căn hộ",demandFlow:"40.0 m³/h",intakePressure:"3.24 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"1,000 m³",meterId:"AMR-GOLDEN-PALM",dma:"DMA THNC-02",isCutOff:Pe,cutOffValveName:"Van V-LVL-03"}),X({pos:[-60,0,155],size:[28,86,26],color:U?165063:223649,name:"Tòa Tháp HUD Tower A (32 Tầng)",id:"BLDG-HUD-TOWER-A",floors:32,households:"Trụ sở Tổng Công ty Đầu tư Phát triển Nhà HUD",demandFlow:"36.0 m³/h",intakePressure:"3.26 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,200 m³",meterId:"AMR-HUD-A",dma:"DMA THNC-02",isCutOff:Pe,cutOffValveName:"Van V-LVL-03"}),X({pos:[-100,0,155],size:[26,74,24],color:U?223649:165063,name:"Tòa Tháp HUD Tower B (27 Tầng)",id:"BLDG-HUD-TOWER-B",floors:27,households:"Văn phòng thương mại & tài chính",demandFlow:"30.0 m³/h",intakePressure:"3.26 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"900 m³",meterId:"AMR-HUD-B",dma:"DMA THNC-02",isCutOff:Pe,cutOffValveName:"Van V-LVL-03"}),X({pos:[180,0,155],size:[28,70,24],color:U?223649:165063,name:"Hội Sở MB Grand Tower (25 Tầng)",id:"BLDG-MB-TOWER",floors:25,households:"Hội sở Ngân hàng TMCP Quân Đội",demandFlow:"26.0 m³/h",intakePressure:"3.24 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"750 m³",meterId:"AMR-MB-TOWER",dma:"DMA THNC-02",isCutOff:Pe,cutOffValveName:"Van V-LVL-03"}),[-150,-110].forEach((le,pe)=>{X({pos:[le,0,45],size:[32,65,34],color:U?14251782:11817737,name:`Mandarin Garden Block ${String.fromCharCode(65+pe)} (29 Tầng)`,id:`BLDG-MANDARIN-${String.fromCharCode(65+pe)}`,floors:29,households:"260 căn hộ cao cấp",demandFlow:"26.0 m³/h",intakePressure:"3.22 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"850 m³",meterId:`AMR-MANDARIN-${String.fromCharCode(65+pe)}`,dma:"DMA THNC-03",isCutOff:Ct,cutOffValveName:"Van V-HMG-02"}),X({pos:[le,0,-5],size:[32,65,34],color:U?14251782:11817737,name:`Mandarin Garden Block ${String.fromCharCode(67+pe)} (29 Tầng)`,id:`BLDG-MANDARIN-${String.fromCharCode(67+pe)}`,floors:29,households:"260 căn hộ cao cấp",demandFlow:"26.0 m³/h",intakePressure:"3.22 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"850 m³",meterId:`AMR-MANDARIN-${String.fromCharCode(67+pe)}`,dma:"DMA THNC-03",isCutOff:Ct,cutOffValveName:"Van V-HMG-02"})}),X({pos:[-135,0,-95],size:[52,24,40],color:U?1096065:366185,name:"Trường THPT Chuyên Hà Nội - Amsterdam",id:"BLDG-AMS",floors:5,households:"3,200 học sinh & giáo viên",demandFlow:"32.0 m³/h",intakePressure:"3.24 bar",connectionPipe:"DN50 HDPE",cisternCapacity:"500 m³",meterId:"AMR-AMS-SCHOOL",dma:"DMA THNC-03",isCutOff:Ct,cutOffValveName:"Van V-HMG-02"}),[160,200].forEach((le,pe)=>{X({pos:[le,0,270],size:[32,74,28],color:U?165063:223649,name:`Tổ Hợp Hapulico Complex Block ${String.fromCharCode(65+pe)} (31 Tầng)`,id:`BLDG-HAPULICO-${String.fromCharCode(65+pe)}`,floors:31,households:"380 căn hộ",demandFlow:"38.0 m³/h",intakePressure:"3.18 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,100 m³",meterId:`AMR-HAPULICO-${String.fromCharCode(65+pe)}`,dma:"DMA THNC-03",isCutOff:L,cutOffValveName:"Van V-HAP-07"}),X({pos:[le,0,310],size:[32,74,28],color:U?223649:165063,name:`Tổ Hợp Hapulico Complex Block ${String.fromCharCode(67+pe)} (31 Tầng)`,id:`BLDG-HAPULICO-${String.fromCharCode(67+pe)}`,floors:31,households:"380 căn hộ",demandFlow:"38.0 m³/h",intakePressure:"3.18 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,100 m³",meterId:`AMR-HAPULICO-${String.fromCharCode(67+pe)}`,dma:"DMA THNC-03",isCutOff:L,cutOffValveName:"Van V-HAP-07"})}),X({pos:[110,0,270],size:[30,68,28],color:U?165063:223649,name:"Tổ Hợp Chung Cư Golden West (27 Tầng)",id:"BLDG-GOLDEN-WEST",floors:27,households:"350 căn hộ",demandFlow:"35.0 m³/h",intakePressure:"3.18 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"900 m³",meterId:"AMR-GOLDEN-WEST",dma:"DMA THNC-03",isCutOff:L,cutOffValveName:"Van V-HAP-07"}),X({pos:[250,0,340],size:[30,85,28],color:U?165063:223649,name:"Tổ Hợp Imperia Garden Tháp A (35 Tầng)",id:"BLDG-IMPERIA-A",floors:35,households:"450 căn hộ cao cấp",demandFlow:"45.0 m³/h",intakePressure:"3.16 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,300 m³",meterId:"AMR-IMPERIA-A",dma:"DMA THNC-03",isCutOff:L,cutOffValveName:"Van V-HAP-07"}),X({pos:[290,0,340],size:[30,85,28],color:U?223649:165063,name:"Tổ Hợp Imperia Garden Tháp B (35 Tầng)",id:"BLDG-IMPERIA-B",floors:35,households:"450 căn hộ cao cấp",demandFlow:"45.0 m³/h",intakePressure:"3.16 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,300 m³",meterId:"AMR-IMPERIA-B",dma:"DMA THNC-03",isCutOff:L,cutOffValveName:"Van V-HAP-07"});const Se=new Vn;for(let le=0;le<4;le++)for(let pe=0;pe<4;pe++){const fe=65+le*22,ge=-30+pe*22,Te=10,ye=5.5,Me=new sr(14,Te,14),Xe=new fn({color:w?15680580:U?3359061:16776171,roughness:.65,metalness:.05}),qe=new Et(Me,Xe);qe.position.set(fe,Te/2,ge),qe.castShadow=!0,Se.add(qe);const dt=new wc(12,ye,4),Ft=new fn({color:w?14427686:U?10033947:12730636,roughness:.55}),At=new Et(dt,Ft);At.rotation.y=Math.PI/4,At.position.set(fe,Te+ye/2,ge),At.castShadow=!0,Se.add(At);const Qt=new Li(2,2,2.2,12),Vt=new fn({color:14870768,metalness:.9,roughness:.15}),ct=new Et(Qt,Vt);ct.position.set(fe+3.5,Te+ye*.7,ge+3.5),Se.add(ct);const cn={name:`Biệt Thự Vườn BT${pe+1}-${le+1} (Nguyễn Thị Thập)`,id:`BLDG-VILLA-${pe+1}-${le+1}`,type:"Biệt Thự Đơn Lập Cao Cấp",status:w?"⚠️ MẤT NƯỚC DO KHÓA VAN V-NTT-08":"Cấp nước ổn định",floors:"3.5 tầng + Áp mái",households:"1 hộ gia đình",flow:w?"0.0 m³/h":"1.2 m³/h",pressure:w?"0.00 bar":"3.18 bar",elevation:"+16.5m ASL",connectionPipe:"DN50 HDPE",cisternCapacity:"15 m³ / biệt thự",meterId:`MTR-VILLA-${pe+1}-${le+1}`,dma:"DMA THNC-02",isCutOff:w,cutOffValveName:"Van V-NTT-08"};qe.userData={name:cn.name,id:cn.id,type:"Building",data:cn},v.current.push(qe)}Se.userData={name:"Khu Biệt Thự & Liền Kề BT1 - BT6 (Nguyễn Thị Thập)",id:"BLDG-VILLAS",type:"Khu Biệt Thự Thấp Tầng",data:{name:"Khu Biệt Thự & Liền Kề BT1 - BT6 (Nguyễn Thị Thập)",id:"BLDG-VILLAS",type:"Khu Biệt Thự Thấp Tầng",status:w?"⚠️ MẤT NƯỚC DO KHÓA VAN V-NTT-08":"Cấp nước ổn định",floors:"3.5 tầng",households:"150 căn biệt thự",flow:w?"0.0 m³/h":"22.5 m³/h",pressure:w?"0.00 bar":"3.18 bar",elevation:"+16.5m ASL",connectionPipe:"DN40 - DN50 HDPE",cisternCapacity:"15 m³ / biệt thự",meterId:"Cụm đồng hồ cơ sở Class C",dma:"DMA THNC-02",isCutOff:w,cutOffValveName:"Van V-NTT-08"}},gn.add(Se),X({pos:[110,0,35],size:[36,18,30],color:U?1096065:366185,name:"Trường Liên Cấp Tiểu Học & THCS Ngôi Sao Hà Nội",id:"BLDG-NGOI-SAO",floors:5,households:"2,200 học sinh & CBGV",demandFlow:"24.0 m³/h",intakePressure:"3.20 bar",connectionPipe:"DN50 HDPE",cisternCapacity:"400 m³",meterId:"AMR-NGOI-SAO",dma:"DMA THNC-02",isCutOff:w,cutOffValveName:"Van V-NTT-08"}),Ee({center:[75,45],size:[110,60],rows:2,cols:8,heightRange:[15,21],zoneId:"HN-NTT",isCutOff:w,cutOffValveName:"Van V-NTT-08",blockName:"Phố Hoàng Ngân - Nhà Phố Liền Kề"}),Ee({center:[75,135],size:[110,60],rows:2,cols:8,heightRange:[16,24],zoneId:"HN-LVL",isCutOff:Pe,cutOffValveName:"Van V-LVL-03",blockName:"Phố Hoàng Ngân - Shophouse Lê Văn Lương"}),Ee({center:[75,-45],size:[110,60],rows:2,cols:8,heightRange:[16,22],zoneId:"DQ-NTT",isCutOff:vt,cutOffValveName:"Van V-TDN-04",blockName:"Phố Đỗ Quang - Dãy Nhà Phố Ẩm Thực"}),Ee({center:[75,-135],size:[110,60],rows:2,cols:8,heightRange:[16,24],zoneId:"DQ-TDH",isCutOff:vt,cutOffValveName:"Van V-TDN-04",blockName:"Phố Đỗ Quang - Shophouse Chuyên Gia"}),Ee({center:[200,45],size:[95,60],rows:2,cols:6,heightRange:[15,22],zoneId:"NTD-HN",isCutOff:w,cutOffValveName:"Van V-NTT-08",blockName:"Phố Nguyễn Thị Định - Dãy Nhà Phố Thương Mại"}),Ee({center:[200,135],size:[95,60],rows:2,cols:6,heightRange:[16,24],zoneId:"NTD-LVL",isCutOff:Pe,cutOffValveName:"Van V-LVL-03",blockName:"Phố Nguyễn Thị Định - Shophouse Dịch Vụ"}),Ee({center:[120,215],size:[170,40],rows:2,cols:10,heightRange:[14,20],zoneId:"QN-01",isCutOff:w,cutOffValveName:"Van V-NTT-08",blockName:"Khu Dân Cư Phố Quan Nhân"}),Ee({center:[120,265],size:[170,40],rows:2,cols:10,heightRange:[14,20],zoneId:"NH-01",isCutOff:L,cutOffValveName:"Van V-HAP-07",blockName:"Khu Dân Cư Phố Nhân Hòa & Chính Kinh"}),Ee({center:[230,310],size:[110,50],rows:2,cols:8,heightRange:[15,22],zoneId:"VTP-NNKT",isCutOff:L,cutOffValveName:"Van V-HAP-07",blockName:"Phố Vũ Trọng Phụng - Shophouse Chợ Thuốc"}),Ee({center:[290,390],size:[110,55],rows:2,cols:8,heightRange:[16,24],zoneId:"NT-NHT",isCutOff:L,cutOffValveName:"Van V-HAP-07",blockName:"Phố Nguyễn Tuân - Dãy Nhà Liền Kề"}),Ee({center:[-80,50],size:[100,55],rows:2,cols:7,heightRange:[15,22],zoneId:"34T-IN",isCutOff:mt,cutOffValveName:"Van V-HDT-01",blockName:"Khu Nhà Phố Nội Khu Hoàng Đạo Thúy"}),Ee({center:[-80,-45],size:[100,55],rows:2,cols:7,heightRange:[15,22],zoneId:"24T-IN",isCutOff:mt,cutOffValveName:"Van V-HDT-01",blockName:"Khu Liền Kề Cụm 24T Hoàng Đạo Thúy"}),Ee({center:[-240,250],size:[130,80],rows:3,cols:8,heightRange:[15,22],zoneId:"HNC-KDT",isCutOff:je,cutOffValveName:"Van V-DCP-05",blockName:"Khu Đô Thị Ven Hồ Điều Hòa Nhân Chính"}),Ee({center:[-320,340],size:[130,70],rows:2,cols:8,heightRange:[14,20],zoneId:"KDT-S",isCutOff:je,cutOffValveName:"Van V-DCP-05",blockName:"Khu Dân Cư Nam Khuất Duy Tiến"}),Ee({center:[-300,-380],size:[160,65],rows:2,cols:10,heightRange:[15,22],zoneId:"MTH-01",isCutOff:$e,cutOffValveName:"Van V-KNG-06",blockName:"Khu Đô Thị Mễ Trì Hạ - Sudico"}),Ee({center:[-480,-450],size:[130,55],rows:2,cols:8,heightRange:[14,20],zoneId:"MT-W",isCutOff:$e,cutOffValveName:"Van V-KNG-06",blockName:"Khu Liền Kề Phía Tây Mễ Trì"}),Ee({center:[240,-260],size:[140,65],rows:2,cols:9,heightRange:[15,22],zoneId:"TH-TY1",isCutOff:vt,cutOffValveName:"Van V-TDN-04",blockName:"Khu Đô Thị Trung Yên - Mạc Thái Tổ"}),Ee({center:[240,-330],size:[140,55],rows:2,cols:9,heightRange:[15,22],zoneId:"TH-TY2",isCutOff:vt,cutOffValveName:"Van V-TDN-04",blockName:"Khu Phân Lô Phố Vũ Phạm Hàm"});const Oe=new Vn;H.add(Oe);const Ae=(le,pe,fe,ge,Te,ye,Me,Xe)=>{if(Me===1&&!t.pipesPrimary||Me===2&&!t.pipesSecondary||Me===3&&!t.pipesTertiary||Me===4&&!t.pipesService||!t.pipes)return null;let qe=pe*2.2,dt=fe,Ft=fe,At=.85;Me===1?(qe=4.2,dt=1920728,Ft=2450411,At=.95):Me===2?(qe=2.8,dt=440020,Ft=561586,At=.85):(Me===3||Me===4)&&(qe=1.8,dt=16096779,Ft=14251782,At=.85);const Qt=le.map(Jt=>{const Zt=Jt.clone();return Zt.y=Math.max(Zt.y,Me===1?3.6:Me===2?2.8:2.2),Zt}),Vt=new Fg(Qt),ct=new rf(Vt,64,qe,16,!1),cn=new fn({color:ye?dt:6583435,roughness:.2,metalness:.45,emissive:ye?Ft:0,emissiveIntensity:ye?At:0}),Tt=new Et(ct,cn);if(Tt.castShadow=!0,Tt.receiveShadow=!0,Tt.userData={name:ge,id:Te,type:"Pipe",data:Xe},Oe.add(Tt),v.current.push(Tt),ye){const Jt=Me===1?20:Me===2?14:Me===3?8:5,Zt=new Es(qe*1.55,12,12),On=new fn({color:16777215,emissive:3718648,emissiveIntensity:1.6,roughness:.1});for(let En=0;En<Jt;En++){const Gn=new Et(Zt,On);H.add(Gn),R.current.push({mesh:Gn,curve:Vt,t:En/Jt,speed:Me===1?.0024:Me===2?.0018:.0013})}}return Tt};Ae([new N(-1200,2,40),new N(-700,2,40),new N(-440,2,40)],1.6,U?165063:223649,"Trục Truyền Dẫn Cấp 1 D800 Đại Lộ Thăng Long","PIPE-TRUNK-DLTL-D800",!0,1,{name:"Trục Truyền Dẫn Cấp 1 D800 Đại Lộ Thăng Long",id:"PIPE-TRUNK-DLTL-D800",tier:"Cấp 1 (Transmission D800)",status:"Đang truyền dẫn công suất lớn (NMN Sông Đà)",diameter:"DN800 Gang Dẻo K9",flow:"4,850.0 m³/h",pressure:"3.85 bar",dma:"Trục Truyền Dẫn Liên Vùng"}),Ae([new N(-440,2,-1100),new N(-440,2,-400),new N(-440,2,40),new N(-440,2,600),new N(-440,2,1100)],1.6,U?165063:223649,"Trục Truyền Dẫn Cấp 1 D800 Phạm Hùng - Vành Đai 3","PIPE-TRUNK-PH-D800",!0,1,{name:"Trục Truyền Dẫn Cấp 1 D800 Phạm Hùng - Vành Đai 3",id:"PIPE-TRUNK-PH-D800",tier:"Cấp 1 (Transmission D800)",status:"Vận hành tối ưu",diameter:"DN800 Gang Dẻo K9",flow:"4,200.0 m³/h",pressure:"3.75 bar",dma:"Trục Truyền Dẫn Liên Vùng"}),Ae([new N(-440,2,180),new N(-160,2,180),new N(0,2,180),new N(340,2,180),new N(650,2,180)],1.4,U?165063:223649,"Trục Truyền Dẫn Cấp 1 D600 Lê Văn Lương","PIPE-TRUNK-LVL-D600",!0,1,{name:"Trục Truyền Dẫn Cấp 1 D600 Lê Văn Lương",id:"PIPE-TRUNK-LVL-D600",tier:"Cấp 1 (Transmission D600)",status:"Cấp nguồn chính DMA THNC-02 & THNC-03",diameter:"DN600 Gang Dẻo K9",flow:"3,250.0 m³/h",pressure:"3.45 bar",dma:"DMA THNC-02"}),Ae([new N(-440,2,-180),new N(-160,2,-180),new N(0,2,-180),new N(340,2,-180),new N(650,2,-180)],1.4,U?165063:223649,"Trục Truyền Dẫn Cấp 1 D600 Trần Duy Hưng","PIPE-TRUNK-TDH-D600",!0,1,{name:"Trục Truyền Dẫn Cấp 1 D600 Trần Duy Hưng",id:"PIPE-TRUNK-TDH-D600",tier:"Cấp 1 (Transmission D600)",status:"Cấp nguồn chính DMA THNC-01",diameter:"DN600 Gang Dẻo K9",flow:"3,400.0 m³/h",pressure:"3.50 bar",dma:"DMA THNC-01"}),Ae([new N(0,2,-180),new N(0,2,0),new N(0,2,180),new N(0,2,350)],1.4,U?165063:223649,"Trục Truyền Dẫn Cấp 1 D600 Hoàng Đạo Thúy","PIPE-TRUNK-HDT-D600",!0,1,{name:"Trục Truyền Dẫn Cấp 1 D600 Hoàng Đạo Thúy",id:"PIPE-TRUNK-HDT-D600",tier:"Cấp 1 (Transmission D600)",status:"Trục xương sống KĐT Trung Hòa - Nhân Chính",diameter:"DN600 Gang Dẻo K9",flow:"2,900.0 m³/h",pressure:"3.38 bar",dma:"DMA THNC-02"}),Ae([new N(340,2,-450),new N(340,2,-180),new N(340,2,180),new N(340,2,450)],1.4,U?165063:223649,"Trục Truyền Dẫn Cấp 1 D600 Trung Kính","PIPE-TRUNK-TK-D600",!0,1,{name:"Trục Truyền Dẫn Cấp 1 D600 Trung Kính",id:"PIPE-TRUNK-TK-D600",tier:"Cấp 1 (Transmission D600)",status:"Cấp nước phía Đông quận",diameter:"DN600 Gang Dẻo",flow:"2,400.0 m³/h",pressure:"3.35 bar",dma:"DMA Phía Đông"}),Ae([new N(-160,1.7,0),new N(-75,1.7,0),new N(0,1.7,0),new N(75,1.7,0),new N(140,1.7,0),new N(340,1.7,0)],1.1,U?959977:165063,"Tuyến Phân Phối Cấp 2 D300 Nguyễn Thị Thập","PIPE-DIST-NTT-D300",!w,2,{name:"Tuyến Phân Phối Cấp 2 D300 Nguyễn Thị Thập",id:"PIPE-DIST-NTT-D300",tier:"Cấp 2 (Distribution D300)",status:w?"ĐÃ CẮT NƯỚC QUA VAN V-NTT-08":"Bình thường",diameter:"DN300 HDPE PE100",flow:w?"0.0 m³/h":"880 m³/h",pressure:w?"0.00 bar":"3.25 bar",dma:"DMA THNC-02"}),Ae([new N(-160,1.7,350),new N(-160,1.7,180),new N(-160,1.7,0),new N(-160,1.7,-95),new N(-160,1.7,-180)],1,U?959977:165063,"Tuyến Phân Phối Cấp 2 D250 Hoàng Minh Giám","PIPE-DIST-HMG-D250",!Ct,2,{name:"Tuyến Phân Phối Cấp 2 D250 Hoàng Minh Giám",id:"PIPE-DIST-HMG-D250",tier:"Cấp 2 (Distribution D250)",status:Ct?"ĐÃ CẮT NƯỚC QUA VAN V-HMG-02":"Bình thường",diameter:"DN250 HDPE PE100",flow:Ct?"0.0 m³/h":"750 m³/h",pressure:Ct?"0.00 bar":"3.24 bar",dma:"DMA THNC-03"}),Ae([new N(140,1.7,-180),new N(140,1.7,-90),new N(140,1.7,0),new N(140,1.7,180)],1,U?959977:165063,"Tuyến Phân Phối Cấp 2 D250 Nguyễn Thị Định","PIPE-DIST-NTD-D250",!vt,2,{name:"Tuyến Phân Phối Cấp 2 D250 Nguyễn Thị Định",id:"PIPE-DIST-NTD-D250",tier:"Cấp 2 (Distribution D250)",status:vt?"ĐÃ CẮT NƯỚC QUA VAN V-TDN-04":"Bình thường",diameter:"DN250 HDPE",flow:vt?"0.0 m³/h":"620 m³/h",pressure:vt?"0.00 bar":"3.22 bar",dma:"DMA THNC-01"}),Ae([new N(-160,1.7,350),new N(0,1.7,350),new N(160,1.7,350),new N(240,1.7,350),new N(340,1.7,350)],1.1,U?959977:165063,"Tuyến Phân Phối Cấp 2 D300 Ngụy Như Kon Tum","PIPE-DIST-NNKT-D300",!L,2,{name:"Tuyến Phân Phối Cấp 2 D300 Ngụy Như Kon Tum",id:"PIPE-DIST-NNKT-D300",tier:"Cấp 2 (Distribution D300)",status:L?"ĐÃ CẮT NƯỚC QUA VAN V-HAP-07":"Bình thường",diameter:"DN300 HDPE",flow:L?"0.0 m³/h":"820 m³/h",pressure:L?"0.00 bar":"3.18 bar",dma:"DMA THNC-03"}),Ae([new N(240,1.7,180),new N(240,1.7,270),new N(240,1.7,350)],1,U?959977:165063,"Tuyến Phân Phối Cấp 2 D250 Vũ Trọng Phụng","PIPE-DIST-VTP-D250",!L,2,{name:"Tuyến Phân Phối Cấp 2 D250 Vũ Trọng Phụng",id:"PIPE-DIST-VTP-D250",tier:"Cấp 2 (Distribution D250)",status:L?"ĐÃ CẮT NƯỚC QUA VAN V-HAP-07":"Bình thường",diameter:"DN250 HDPE",flow:L?"0.0 m³/h":"540 m³/h",pressure:L?"0.00 bar":"3.16 bar",dma:"DMA THNC-03"}),Ae([new N(-440,1.7,-180),new N(-280,1.7,-180),new N(-190,1.7,-180),new N(-160,1.7,-180)],1.1,U?959977:165063,"Tuyến Phân Phối Cấp 2 D300 Ven Vinhomes D'Capitale","PIPE-DIST-DCP-D300",!je,2,{name:"Tuyến Phân Phối Cấp 2 D300 Ven Vinhomes D'Capitale",id:"PIPE-DIST-DCP-D300",tier:"Cấp 2 (Distribution D300)",status:je?"ĐÃ CẮT NƯỚC QUA VAN V-DCP-05":"Bình thường",diameter:"DN300 HDPE",flow:je?"0.0 m³/h":"960 m³/h",pressure:je?"0.00 bar":"3.30 bar",dma:"DMA THNC-01"}),Ae([new N(-440,1.7,-320),new N(-540,1.7,-320),new N(-540,1.7,-460),new N(-440,1.7,-460)],1.1,U?959977:165063,"Tuyến Phân Phối Cấp 2 D300 Mạch Vòng Keangnam & Mễ Trì","PIPE-DIST-KNG-D300",!$e,2,{name:"Tuyến Phân Phối Cấp 2 D300 Keangnam & Mễ Trì",id:"PIPE-DIST-KNG-D300",tier:"Cấp 2 (Distribution D300)",status:$e?"ĐÃ CẮT NƯỚC QUA VAN V-KNG-06":"Bình thường",diameter:"DN300 HDPE",flow:$e?"0.0 m³/h":"1,120 m³/h",pressure:$e?"0.00 bar":"3.38 bar",dma:"DMA Phía Tây"}),Ae([new N(0,1.5,90),new N(75,1.5,90),new N(140,1.5,90),new N(200,1.5,90)],.85,U?1357990:889992,"Tuyến Nhánh Cấp 3 D150 Phố Hoàng Ngân","PIPE-STREET-HN-D150",!w,3,{name:"Tuyến Nhánh Cấp 3 D150 Phố Hoàng Ngân",id:"PIPE-STREET-HN-D150",tier:"Cấp 3 (Reticulation D150)",status:w?"ĐÃ CẮT NƯỚC":"Ổn định",diameter:"DN150",flow:w?"0.0 m³/h":"180 m³/h",dma:"DMA THNC-02"}),Ae([new N(0,1.5,-90),new N(75,1.5,-90),new N(140,1.5,-90),new N(200,1.5,-90)],.85,U?1357990:889992,"Tuyến Nhánh Cấp 3 D150 Phố Đỗ Quang","PIPE-STREET-DQ-D150",!vt,3,{name:"Tuyến Nhánh Cấp 3 D150 Phố Đỗ Quang",id:"PIPE-STREET-DQ-D150",tier:"Cấp 3 (Reticulation D150)",status:vt?"ĐÃ CẮT NƯỚC":"Ổn định",diameter:"DN150",flow:vt?"0.0 m³/h":"175 m³/h",dma:"DMA THNC-01"}),Ae([new N(0,1.5,240),new N(120,1.5,240),new N(240,1.5,240)],.8,U?1357990:889992,"Tuyến Nhánh Cấp 3 D125 Phố Quan Nhân","PIPE-STREET-QN-D125",!w,3,{name:"Tuyến Nhánh Cấp 3 D125 Phố Quan Nhân",id:"PIPE-STREET-QN-D125",tier:"Cấp 3 (Reticulation D125)",status:w?"ĐÃ CẮT NƯỚC":"Ổn định",diameter:"DN125",flow:w?"0.0 m³/h":"140 m³/h",dma:"DMA THNC-02"}),Ae([new N(0,1.5,290),new N(120,1.5,290),new N(240,1.5,290)],.8,U?1357990:889992,"Tuyến Nhánh Cấp 3 D125 Phố Nhân Hòa","PIPE-STREET-NH-D125",!L,3,{name:"Tuyến Nhánh Cấp 3 D125 Phố Nhân Hòa",id:"PIPE-STREET-NH-D125",tier:"Cấp 3 (Reticulation D125)",status:L?"ĐÃ CẮT NƯỚC":"Ổn định",diameter:"DN125",flow:L?"0.0 m³/h":"150 m³/h",dma:"DMA THNC-03"}),Ae([new N(0,1.5,20),new N(25,1.5,20),new N(42,1.5,75),new N(42,1.5,155)],.8,U?1357990:889992,"Tuyến Nhánh Cấp 3 D150 Ngõ Nội Khu 34T & 17T","PIPE-STREET-17T-D150",!mt,3,{name:"Tuyến Nhánh Cấp 3 D150 Ngõ Nội Khu 34T & 17T",id:"PIPE-STREET-17T-D150",tier:"Cấp 3 (Reticulation D150)",status:mt?"ĐÃ CẮT NƯỚC":"Ổn định",diameter:"DN150",flow:mt?"0.0 m³/h":"195 m³/h",dma:"DMA THNC-02"}),Ae([new N(0,1.5,20),new N(-35,1.5,20),new N(-35,1.5,-30),new N(-75,1.5,0)],.8,U?1357990:889992,"Tuyến Nhánh Cấp 3 D125 Ngõ Nội Khu Cụm 24T","PIPE-STREET-24T-D125",!mt,3,{name:"Tuyến Nhánh Cấp 3 D125 Ngõ Nội Khu Cụm 24T",id:"PIPE-STREET-24T-D125",tier:"Cấp 3 (Reticulation D125)",status:mt?"ĐÃ CẮT NƯỚC":"Ổn định",diameter:"DN125",flow:mt?"0.0 m³/h":"160 m³/h",dma:"DMA THNC-02"}),Ae([new N(0,1.5,-85),new N(40,1.5,-85),new N(80,1.5,-85),new N(60,1.5,-140)],.8,U?1357990:889992,"Tuyến Nhánh Cấp 3 D150 Nội Khu Cụm N04/N05","PIPE-STREET-N04N05-D150",!vt,3,{name:"Tuyến Nhánh Cấp 3 D150 Nội Khu N04/N05",id:"PIPE-STREET-N04N05-D150",tier:"Cấp 3 (Reticulation D150)",status:vt?"ĐÃ CẮT NƯỚC":"Ổn định",diameter:"DN150",flow:vt?"0.0 m³/h":"210 m³/h",dma:"DMA THNC-01"});const re=(le,pe,fe,ge,Te,ye)=>{const Me=new N(le.x,2.2,le.z),Xe=new N(pe.x,2.2,pe.z),qe=new N((Me.x+Xe.x)/2,2.4,(Me.z+Xe.z)/2);Ae([Me,qe,Xe],1.6,ye?6583435:16096779,`Ống Đấu Nối Cấp 4 ${fe} -> ${ge}`,`PIPE-SRV-${Te}`,!ye,4,{name:`Ống Đấu Nối Cấp 4 ${fe} -> ${ge}`,id:`PIPE-SRV-${Te}`,tier:"Cấp 4 (Service Connection)",status:ye?"ĐÃ CẮT DÒNG (KHÓA VAN)":"Cấp nước trực tiếp bể ngầm",diameter:fe,material:"HDPE PE100 PN16",supplyTo:ge,pressure:ye?"0.00 bar":"3.25 bar",flow:ye?"0.0 m³/h":"45.0 m³/h"})};re(new N(0,1.1,20),new N(25,1.1,20),"DN80","Tháp 34T","34T",mt),re(new N(0,1.1,30),new N(-35,1.1,30),"DN65","Chung cư 24T1","24T1",mt),re(new N(0,1.1,-30),new N(-35,1.1,-30),"DN65","Chung cư 24T2","24T2",mt),re(new N(42,1.1,75),new N(42,1.1,75),"DN50","Chung cư 17T1","17T1",mt),re(new N(0,1.1,155),new N(35,1.1,155),"DN80","Diamond Flower","DIAMOND",Pe),re(new N(50,1.1,155),new N(80,1.1,155),"DN80","Star City","STAR-CITY",Pe),re(new N(100,1.1,155),new N(130,1.1,155),"DN65","The Golden Palm","GOLDEN-PALM",Pe),re(new N(0,1.1,155),new N(-60,1.1,155),"DN80","HUD Tower A","HUD-A",Pe),re(new N(-60,1.1,155),new N(-100,1.1,155),"DN65","HUD Tower B","HUD-B",Pe),re(new N(140,1.1,155),new N(180,1.1,155),"DN65","MB Grand Tower","MB-TOWER",Pe),re(new N(0,1.1,-180),new N(65,1.1,-215),"DN80","Charmvit Tower","CHARMVIT",vt),re(new N(40,1.1,-85),new N(40,1.1,-85),"DN80","N05-34T1","N05-1",vt),re(new N(80,1.1,-85),new N(80,1.1,-85),"DN80","N05-34T2","N05-2",vt),re(new N(-160,1.1,45),new N(-150,1.1,45),"DN65","Mandarin Block A","MANDARIN-A",Ct),re(new N(-160,1.1,-5),new N(-150,1.1,-5),"DN65","Mandarin Block C","MANDARIN-C",Ct),re(new N(-160,1.1,-95),new N(-135,1.1,-95),"DN50","THPT Amsterdam","AMS",Ct),re(new N(-440,1.1,-320),new N(-540,1.1,-320),"DN150","Keangnam 72","KEANGNAM-72",$e),re(new N(-540,1.1,-320),new N(-590,1.1,-320),"DN80","Keangnam Tháp A","KEANGNAM-A",$e),re(new N(-540,1.1,-320),new N(-490,1.1,-320),"DN80","Keangnam Tháp B","KEANGNAM-B",$e),re(new N(-440,1.1,-220),new N(-460,1.1,-220),"DN65","Handico Tower","HANDICO",$e),re(new N(-440,1.1,-170),new N(-460,1.1,-170),"DN65","CEO Tower","CEO",$e),re(new N(-440,1.1,-110),new N(-440,1.1,-110),"DN65","Bảo Tàng Hà Nội","MUSEUM",$e),re(new N(-440,1.1,140),new N(-440,1.1,140),"DN100","Hội Nghị Quốc Gia NCC","NCC",!1),re(new N(-280,1.1,-180),new N(-280,1.1,-180),"DN80","Big C Thăng Long","BIGC",je),re(new N(-230,1.1,-220),new N(-230,1.1,-220),"DN80","D'Capitale C1","DCP-C1",je),re(new N(-190,1.1,-220),new N(-190,1.1,-220),"DN80","D'Capitale C2","DCP-C2",je),re(new N(-440,1.1,40),new N(-360,1.1,40),"DN80","Thăng Long Number One A","TL-NO1-A",je),re(new N(-360,1.1,40),new N(-360,1.1,85),"DN80","Thăng Long Number One B","TL-NO1-B",je),re(new N(240,1.1,270),new N(200,1.1,270),"DN80","Hapulico Complex A","HAP-A",L),re(new N(240,1.1,270),new N(110,1.1,270),"DN65","Golden West","GOLDEN-WEST",L),re(new N(240,1.1,340),new N(250,1.1,340),"DN80","Imperia Garden A","IMP-A",L),re(new N(240,1.1,340),new N(290,1.1,340),"DN80","Imperia Garden B","IMP-B",L),re(new N(75,1.1,0),new N(75,1.1,-10),"DN50","Biệt Thự BT1-BT6","VILLAS",w),re(new N(75,1.1,35),new N(110,1.1,35),"DN50","Trường Ngôi Sao Hà Nội","NGOI-SAO",w);const xe=new Vn;H.add(xe);const De=(le,pe,fe,ge,Te,ye,Me)=>{if(!t.valves)return null;const Xe=new Vn;Xe.position.set(le[0],0,le[2]);const qe=new Li(2.4,2.7,.6,16),dt=new fn({color:ge?4524554:413243,roughness:.6}),Ft=new Et(qe,dt);Ft.position.y=.3,Xe.add(Ft);const At=new Cc(2.6,3.6,24),Qt=new va({color:ge?15680580:1096065,side:Yi}),Vt=new Et(At,Qt);Vt.rotation.x=-Math.PI/2,Vt.position.y=.15,Xe.add(Vt);const ct=new sr(3.6,3.6,3.6),cn=new fn({color:ge?14427686:1483594,metalness:.7,roughness:.25,emissive:ge?10033947:417606,emissiveIntensity:.35}),Tt=new Et(ct,cn);Tt.position.y=2.4,Tt.castShadow=!0,Xe.add(Tt);const Jt=new Li(.5,.5,2.5,12),Zt=new fn({color:9741240,metalness:.8}),On=new Et(Jt,Zt);On.position.y=4.5,Xe.add(On);const En=new nf(2,.45,12,24),Gn=new fn({color:ge?16096779:3718648,metalness:.75,roughness:.2}),gi=new Et(En,Gn);gi.rotation.x=ge?0:Math.PI/2,gi.position.y=5.8,Xe.add(gi);const kt=document.createElement("canvas");kt.width=384,kt.height=96;const en=kt.getContext("2d");en.fillStyle=ge?"#dc2626":"#16a34a",en.beginPath(),en.roundRect(8,8,368,80,20),en.fill(),en.strokeStyle="#ffffff",en.lineWidth=4,en.stroke(),en.fillStyle="#ffffff",en.font="bold 28px -apple-system, sans-serif",en.textAlign="center",en.textBaseline="middle",en.fillText(ge?`🔒 ${fe}: ĐÃ ĐÓNG (CẮT NƯỚC)`:`🔓 ${fe}: ĐANG MỞ (CLICK KHÓA)`,192,48);const ti=new zh(kt),wi=new Fd({map:ti,transparent:!0,depthTest:!1}),wn=new a0(wi);wn.position.set(0,11,0),wn.scale.set(28,7,1),Xe.add(wn);const Oi={name:pe,id:fe,type:"Chốt Khóa Nước Phân Đoạn (Smart Isolation Valve)",status:ge?"🔒 ĐÃ ĐÓNG (CÔ LẬP & CẮT NƯỚC CỤC BỘ)":"🔓 ĐANG MỞ (Cấp nước bình thường)",isClosed:ge,zoneDescription:Te,affectedBuildings:ye,householdsAffected:Me,pressure:ge?"0.00 bar (Cửa xả)":"3.30 bar (Ổn định)",diameter:"DN300 - DN500 Gang Cầu FCD",material:"Van Cổng Tín Hiệu Điện Tử (Flanged Resilient Gate Valve)"};return Xe.userData={name:pe,id:fe,type:"SmartValve",data:Oi},Tt.userData=Xe.userData,v.current.push(Tt),xe.add(Xe),Xe};if(De([0,2.5,20],"Chốt Khóa V-HDT-01 (Hoàng Đạo Thúy - Tháp 34T)","VALVE-01",mt,"Cụm Lõi Đô Thị Hoàng Đạo Thúy & 24T1-24T3","Tháp Biểu Tượng 34T, Cụm 24T1, 24T2, 24T3, Dãy 17T1-17T6 và dãy nhà phố nội khu","1,120 hộ dân (~4,500 cư dân)"),De([-160,2.5,25],"Chốt Khóa V-HMG-02 (Hoàng Minh Giám - Mandarin)","VALVE-02",Ct,"Phân Khu Trường Học & Chung Cư Cao Cấp Hoàng Minh Giám","Tổ Hợp Mandarin Garden (4 Tháp A, B, C, D) & Trường THPT Chuyên Hà Nội - Amsterdam","1,008 căn hộ + 3,200 học sinh & GV"),De([0,2.5,155],"Chốt Khóa V-LVL-03 (Lê Văn Lương - Diamond Flower)","VALVE-03",Pe,"Nút Giao Lê Văn Lương - Hoàng Đạo Thúy","Diamond Flower Tower (36T), Star City, The Golden Palm, Cụm HUD Tower A & B, MB Grand Tower","850 hộ dân & 35,000m² văn phòng tài chính"),De([0,2.5,-180],"Chốt Khóa V-TDN-04 (Trần Duy Hưng - Charmvit Tower)","VALVE-04",vt,"Phân Khu Khách Sạn & Ngoại Giao Trần Duy Hưng","Tổ hợp Charmvit Tower, Khách sạn Grand Plaza, Cụm Chung Cư N04 (3 tháp) & N05 (2 tháp 34T)","920 căn hộ & 540 phòng khách sạn 5 sao"),De([-280,2.5,-180],"Chốt Khóa V-DCP-05 (Vinhomes D'Capitale & Big C)","VALVE-05",je,"Cửa Ngõ Phía Nam Trần Duy Hưng - Khuất Duy Tiến","Tổ Hợp 6 Tòa Tháp Vinhomes D'Capitale, Siêu Thị Big C Thăng Long, 2 Tháp Thăng Long Number One","3,000 căn hộ cao cấp & TTTM Big C Thăng Long"),De([-440,2.5,-320],"Chốt Khóa V-KNG-06 (Keangnam Landmark 72 & Phạm Hùng)","VALVE-06",$e,"Trung Tâm Tài Chính Phía Tây Hà Nội","Keangnam Hanoi Landmark 72 (350m), 2 Tháp Căn Hộ Đôi Keangnam 48T, Handico Tower, CEO Tower, Bảo tàng HN","922 căn hộ Penthouse, TTTM Lotte & Trụ sở Tập đoàn"),De([180,2.5,270],"Chốt Khóa V-HAP-07 (Ngụy Như Kon Tum - Hapulico)","VALVE-07",L,"Phân Khu Dân Cư Ngụy Như Kon Tum - Vũ Trọng Phụng","Tổ hợp Hapulico Complex (4 Block), Chung Cư Golden West, Imperia Garden (2 Tháp 35T), Shophouse Chợ Thuốc","1,200 căn hộ & Chợ Dược Phẩm miền Bắc"),De([75,2.5,0],"Chốt Khóa V-NTT-08 (Nguyễn Thị Thập - Khu Biệt Thự)","VALVE-08",w,"Khu Đô Thị Thấp Tầng Nguyễn Thị Thập","150 Biệt thự Liền kề BT1 - BT6, Trường Liên cấp Ngôi Sao, 50 Shophouse mặt phố Nguyễn Thị Thập","150 căn biệt thự & 2,200 học sinh"),t.hydrants){const le=new Vn;H.add(le);const pe=(ge,Te,ye,Me)=>{const Xe=new Vn;Xe.position.set(ge[0],0,ge[2]);const qe=new Li(.7,.8,1.7,12),dt=new fn({color:14427686,metalness:.6,roughness:.25,emissive:10033947,emissiveIntensity:.35}),Ft=new Et(qe,dt);Ft.position.y=.6,Xe.add(Ft);const At=new Li(.55,.55,2.2,12),Qt=new Et(At,dt);Qt.position.y=2,Xe.add(Qt);const Vt=new Es(.65,12,12),ct=new Et(Vt,dt);ct.position.y=3.1,Xe.add(ct),Xe.userData={name:Te,id:ye,type:"Trụ Cứu Hỏa PCCC",data:{name:Te,id:ye,type:"Trụ Cứu Hỏa Đô Thị (TCVN 6379:1998)",status:"Sẵn sàng cấp nước chữa cháy 24/7 (Đạt QCVN 06:2022/BXD)",flow:"35.0 L/s (Lưu lượng danh định)",pressure:"3.35 bar (Cột áp tĩnh)",elevation:"+16.8m ASL",diameter:"Họng cấp DN100 + 2 họng phụ DN65",households:"Bán kính bảo vệ PCCC: 150m",dma:Me}},Qt.userData=Xe.userData,v.current.push(Qt),le.add(Xe)};[...[-300,-220,-140,-60,20,100,180,260].map((ge,Te)=>({pos:[14,0,ge],id:`HYD-HDT-${Te+1}`,road:"Đường Hoàng Đạo Thúy"})),...[-380,-300,-220,-140,-60,20,100,180,260,340].map((ge,Te)=>({pos:[ge,0,194],id:`HYD-LVL-${Te+1}`,road:"Đường Lê Văn Lương"})),...[-380,-300,-220,-140,-60,20,100,180,260,340].map((ge,Te)=>({pos:[ge,0,-196],id:`HYD-TDH-${Te+1}`,road:"Đường Trần Duy Hưng"})),...[-500,-420,-340,-260,-180,-100,-20,60,140,220,300,380].map((ge,Te)=>({pos:[-422,0,ge],id:`HYD-VD3-${Te+1}`,road:"Đường Phạm Hùng - Khuất Duy Tiến"})),...[-200,-130,-60,10,80,150,220,290].map((ge,Te)=>({pos:[-148,0,ge],id:`HYD-HMG-${Te+1}`,road:"Đường Hoàng Minh Giám"})),...[-140,-80,-20,40,100,160,220,280].map((ge,Te)=>({pos:[ge,0,12],id:`HYD-NTT-${Te+1}`,road:"Đường Nguyễn Thị Thập"})),...[-120,-60,0,60,120,180,240,300].map((ge,Te)=>({pos:[ge,0,362],id:`HYD-NNKT-${Te+1}`,road:"Đường Ngụy Như Kon Tum"})),...[-280,-200,-120,-40,40,120,200,280].map((ge,Te)=>({pos:[352,0,ge],id:`HYD-TK-${Te+1}`,road:"Phố Trung Kính"})),...[190,230,270,310,350,390].map((ge,Te)=>({pos:[248,0,ge],id:`HYD-VTP-${Te+1}`,road:"Phố Vũ Trọng Phụng"}))].forEach(ge=>pe(ge.pos,`Trụ Cứu Hỏa ${ge.id}`,ge.id,ge.road))}if(t.tanks){const le=new Vn;le.position.set(-350,0,220);const pe=new Li(8,12,38,16),fe=new fn({color:U?1976635:6583435,roughness:.7}),ge=new Et(pe,fe);ge.position.y=19,ge.castShadow=!0,le.add(ge);const Te=new Es(18,24,20),ye=new fn({color:U?165063:223649,metalness:.6,roughness:.2,emissive:U?223649:165063,emissiveIntensity:.25}),Me=new Et(Te,ye);Me.position.y=44,Me.castShadow=!0,le.add(Me),le.userData={name:"Đài Nước & Trạm Bơm Tăng Áp Sông Đà (KĐT Nhân Chính)",id:"PUMP-STATION-MAIN",type:"Trạm Bơm & Đài Nước Tăng Áp",data:{name:"Đài Nước Điều Áp & Trạm Bơm Tăng Áp Sông Đà",id:"PUMP-STATION-MAIN",type:"Đài Nước Cân Bằng Thủy Lực & Trạm Bơm Tăng Áp",status:"Hoạt động liên tục (3/3 tổ máy biến tần)",flow:`${u.flow.toFixed(1)} m³/h`,pressure:`${u.pressure.toFixed(2)} bar (Áp lực xuất trạm)`,level:"14.2m / 16.0m (Dung tích 8,000 m³)",elevation:"+35.0m ASL",power:"3 x 160 kW Biến tần ABB",dma:"Toàn KĐT Trung Hòa - Nhân Chính"}},Me.userData=le.userData,v.current.push(Me),H.add(le)}const V=new Gy,_e=new Ye,ve=le=>{var ge;const pe=J.domElement.getBoundingClientRect();_e.x=(le.clientX-pe.left)/pe.width*2-1,_e.y=-((le.clientY-pe.top)/pe.height)*2+1,V.setFromCamera(_e,F);const fe=V.intersectObjects(v.current,!0);if(fe.length>0){let Te=fe[0].object;for(;Te&&!((ge=Te.userData)!=null&&ge.data)&&Te.parent;)Te=Te.parent;Te&&Te.userData&&(Te.userData.type==="SmartValve"&&o&&o(Te.userData.id),p&&Te.userData.data&&p(Te.userData.data))}},Be=le=>{var ge,Te;const pe=J.domElement.getBoundingClientRect();_e.x=(le.clientX-pe.left)/pe.width*2-1,_e.y=-((le.clientY-pe.top)/pe.height)*2+1,V.setFromCamera(_e,F);const fe=V.intersectObjects(v.current,!0);if(fe.length>0){let ye=fe[0].object;for(;ye&&!((ge=ye.userData)!=null&&ge.name)&&ye.parent;)ye=ye.parent;if(ye&&((Te=ye.userData)!=null&&Te.name)){J.domElement.style.cursor="pointer",D(ye.userData.name);return}}J.domElement.style.cursor="grab",D(null)};J.domElement.addEventListener("pointerdown",ve),J.domElement.addEventListener("pointermove",Be);const Ue=()=>{E.current=requestAnimationFrame(Ue),R.current.forEach(le=>{le.t=(le.t+le.speed)%1;const pe=le.curve.getPointAt(le.t);pe&&le.mesh.position.copy(pe)}),Ge.rotation.y+=15e-5,ue.update(),J.render(H,F)};Ue();const ke=()=>{if(!I)return;const le=I.clientWidth,pe=I.clientHeight;F.aspect=le/pe,F.updateProjectionMatrix(),J.setSize(le,pe)};return window.addEventListener("resize",ke),()=>{window.removeEventListener("resize",ke),J.domElement&&(J.domElement.removeEventListener("pointerdown",ve),J.domElement.removeEventListener("pointermove",Be)),E.current&&cancelAnimationFrame(E.current),S.current&&S.current.dispose(),R.current.forEach(le=>H.remove(le.mesh))}},[s,e,t,r,l]);const P=I=>{const T=M.current,A=_.current;!T||!A||(I==="iso"?(T.position.set(780,720,880),A.target.set(0,20,0)):I==="top"?(T.position.set(0,1750,.1),A.target.set(0,0,0)):I==="keangnam"?(T.position.set(-360,280,-160),A.target.set(-540,110,-320)):I==="ncc"?(T.position.set(-260,240,320),A.target.set(-440,30,140)):I==="diamond"?(T.position.set(180,160,280),A.target.set(35,60,155)):I==="34t"?(T.position.set(130,120,110),A.target.set(25,45,20)):I==="dcapitale"?(T.position.set(-70,180,-70),A.target.set(-230,60,-220)):I==="hapulico"&&(T.position.set(340,160,420),A.target.set(180,50,270)),A.update())},B=I=>{const T=M.current,A=_.current;if(!T||!A)return;const U=new N().subVectors(A.target,T.position).normalize();T.position.addScaledVector(U,I*90),A.update()};return f.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",minHeight:d?"440px":"560px"},children:[f.jsx("div",{ref:m,style:{width:"100%",height:"100%",outline:"none"}}),k.length>0&&f.jsxs("div",{style:{position:"absolute",top:"14px",left:"50%",transform:"translateX(-50%)",background:"rgba(220, 38, 38, 0.95)",color:"#ffffff",padding:"8px 18px",borderRadius:"8px",display:"flex",alignItems:"center",gap:"10px",zIndex:50,fontSize:"13px",fontWeight:"600",backdropFilter:"blur(6px)",animation:"pulse 2s infinite"},children:[f.jsx(Ts,{size:18,color:"#fef08a"}),f.jsxs("span",{children:["⚠️ ĐANG CÔ LẬP CẮT NƯỚC: ",k.length," chốt khóa đang ĐÓNG. Click vào chốt van màu đỏ để mở lại nước!"]})]}),f.jsxs("div",{style:{position:"absolute",top:"14px",right:"14px",display:"flex",flexDirection:"column",gap:"6px",zIndex:30},children:[f.jsxs("div",{className:"qatium-hud-pill-group",style:{flexDirection:d?"row":"column",padding:"4px",gap:"4px"},children:[f.jsxs("button",{className:"qatium-hud-btn",onClick:()=>P("iso"),title:"Góc 3D Toàn cảnh quận quy mô 2.5km (Isometric 25X)",style:{padding:"5px 8px"},children:[f.jsx(mc,{size:13}),f.jsx("span",{children:d?"3D":"Toàn cảnh 25X"})]}),f.jsxs("button",{className:"qatium-hud-btn",onClick:()=>P("top"),title:"Bản đồ quy hoạch GIS 2D nhìn thẳng từ trên xuống",style:{padding:"5px 8px"},children:[f.jsx(tg,{size:13}),f.jsx("span",{children:d?"2D":"Bản đồ GIS 2D"})]}),!d&&f.jsxs(f.Fragment,{children:[f.jsxs("button",{className:"qatium-hud-btn",onClick:()=>P("keangnam"),title:"Cận cảnh Keangnam Landmark 72 (350m)",style:{padding:"6px 10px",width:"100%",justifyContent:"flex-start"},children:[f.jsx(Js,{size:14}),f.jsx("span",{children:"Keangnam 72"})]}),f.jsxs("button",{className:"qatium-hud-btn",onClick:()=>P("ncc"),title:"Cận cảnh Trung tâm Hội nghị Quốc gia NCC",style:{padding:"6px 10px",width:"100%",justifyContent:"flex-start"},children:[f.jsx(Js,{size:14}),f.jsx("span",{children:"Hội Nghị QG (NCC)"})]}),f.jsxs("button",{className:"qatium-hud-btn",onClick:()=>P("diamond"),title:"Cận cảnh Diamond Flower Tower (36T)",style:{padding:"6px 10px",width:"100%",justifyContent:"flex-start"},children:[f.jsx(Js,{size:14}),f.jsx("span",{children:"Diamond Flower"})]}),f.jsxs("button",{className:"qatium-hud-btn",onClick:()=>P("34t"),title:"Cận cảnh Tháp 34T & Chốt van V-01",style:{padding:"6px 10px",width:"100%",justifyContent:"flex-start"},children:[f.jsx(Js,{size:14}),f.jsx("span",{children:"Tháp 34T & V-01"})]}),f.jsxs("button",{className:"qatium-hud-btn",onClick:()=>P("dcapitale"),title:"Cận cảnh Vinhomes D'Capitale & Big C",style:{padding:"6px 10px",width:"100%",justifyContent:"flex-start"},children:[f.jsx(Js,{size:14}),f.jsx("span",{children:"D'Capitale & Big C"})]}),f.jsxs("button",{className:"qatium-hud-btn",onClick:()=>P("hapulico"),title:"Cận cảnh Hapulico Complex & Vũ Trọng Phụng",style:{padding:"6px 10px",width:"100%",justifyContent:"flex-start"},children:[f.jsx(Js,{size:14}),f.jsx("span",{children:"Hapulico Complex"})]})]})]}),f.jsxs("div",{className:"qatium-hud-pill-group",style:{display:"flex",justifyContent:"space-between",padding:"4px"},children:[f.jsx("button",{className:"qatium-hud-btn",onClick:()=>B(1),title:"Phóng to",style:{padding:"5px 7px"},children:f.jsx(rx,{size:13})}),f.jsx("button",{className:"qatium-hud-btn",onClick:()=>B(-1),title:"Thu nhỏ",style:{padding:"5px 7px"},children:f.jsx(sx,{size:13})}),f.jsx("button",{className:"qatium-hud-btn",onClick:()=>P("iso"),title:"Đặt lại camera",style:{padding:"5px 7px"},children:f.jsx(ng,{size:13})})]})]}),f.jsxs("div",{style:{position:"absolute",bottom:d?"14px":"80px",left:"16px",pointerEvents:"none",display:"flex",flexDirection:"column",gap:"4px",zIndex:30},children:[y&&f.jsxs("div",{style:{background:"rgba(11, 18, 33, 0.95)",color:"#38bdf8",padding:"7px 14px",borderRadius:"6px",fontSize:"12.5px",fontWeight:"600",border:"1px solid rgba(56, 189, 248, 0.5)",boxShadow:"0 6px 16px rgba(0, 0, 0, 0.4)",display:"inline-flex",alignItems:"center",gap:"8px"},children:[f.jsx(mc,{size:14}),f.jsx("span",{children:y})]}),!d&&f.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.85)",color:"#94a3b8",padding:"5px 12px",borderRadius:"6px",fontSize:"11px",maxWidth:"460px",backdropFilter:"blur(5px)",border:"1px solid rgba(255, 255, 255, 0.12)"},children:["🖱️ ",f.jsx("b",{children:"Click Chốt Van:"})," Đóng / Mở cắt nước mô phỏng · ",f.jsx("b",{children:"Click Tòa Nhà / Nhà Phố / Trụ PCCC:"})," Tra cứu thông số · ",f.jsx("b",{children:"Kéo chuột:"})," Xoay 360°"]})]})]})}function JE(){const[s,e]=It.useState("overview"),[t,r]=It.useState("DMA THNC-02"),[o,l]=It.useState("24h"),[u,d]=It.useState(null),[p,m]=It.useState({pipes:!0,valves:!0,sensors:!0}),[x,M]=It.useState(""),[_,S]=It.useState([{id:1,type:"Áp lực cao đầu nguồn",location:"Trạm bơm Tăng áp Trung tâm (Lê Văn Lương)",time:"14:22",status:"High Pressure",severity:"danger",handled:!1},{id:2,type:"Nghi vấn rò rỉ đêm (MNF)",location:"Tuyến ống D200 Hoàng Minh Giám (DMA THNC-03)",time:"13:50",status:"Leak Suspected",severity:"warning",handled:!1},{id:3,type:"Cảnh báo sụt áp cục bộ",location:"Nhánh D150 cấp cụm 17T1 - 17T4 Hoàng Đạo Thúy",time:"12:15",status:"Low Pressure",severity:"warning",handled:!0},{id:4,type:"Độ đục vượt chuẩn nhẹ (NTU)",location:"Hố đồng hồ tổng Mandarin Garden",time:"10:04",status:"Water Quality",severity:"info",handled:!1}]),[E,R]=It.useState(!1),[v,y]=It.useState(null),[D,k]=It.useState("3d"),[P,B]=It.useState("light"),[I,T]=It.useState("pressure"),[A,U]=It.useState({pipes:!0,pipesPrimary:!0,pipesSecondary:!0,pipesService:!0,buildings:!0,hydrants:!0,streetLabels:!0,valves:!0,tanks:!0,sensors:!0,contour:!0}),[H,K]=It.useState(14),[Q,he]=It.useState(!1),[F,J]=It.useState(null),[ue,ee]=It.useState(!1),[Z,q]=It.useState(!1),[$,O]=It.useState(null),ie=()=>{q(!0),O(null),Ve("📡 Đang phát sóng âm phân tích tương quan tại các giếng van DMA THNC-02..."),setTimeout(()=>{q(!1),O({location:"Km 0+320 đường Hoàng Đạo Thúy (Đối diện sảnh 17T3)",depth:"1.25 m dưới mặt đường",pipe:"Ống gang dẻo D200 PN16 (Tuyến phân phối số 02)",lossRate:"11.8 m³/h (áp 3.2 bar)",confidence:"96.4%",frequency:"840 Hz (Sóng âm biến dạng rò ngầm)",recommendedAction:"Khóa cục bộ chốt van phụ và điều động đội cơ động đào thăm dò định vị vệt nứt."}),Ve("🎯 Đã định vị chính xác vị trí rò rỉ ngầm tại Hoàng Đạo Thúy!")},1200)},[Ie,ae]=It.useState({"VALVE-01":!1,"VALVE-02":!1,"VALVE-03":!1,"VALVE-04":!1,"VALVE-05":!1,"VALVE-06":!1,"VALVE-07":!1,"VALVE-08":!1}),Ce={"VALVE-01":{name:"Chốt Khóa V-HDT-01 (Hoàng Đạo Thúy - Tháp 34T)",zone:"Cụm Lõi Đô Thị Hoàng Đạo Thúy & 24T1-24T2",affected:"Tháp Biểu Tượng 34T, Cụm 24T1, 24T2",households:"1.120 hộ dân (~4.500 cư dân)"},"VALVE-02":{name:"Chốt Khóa V-HMG-02 (Hoàng Minh Giám - Mandarin)",zone:"Phân Khu Trường Học & Chung Cư Hoàng Minh Giám",affected:"Mandarin Garden (4 Tháp) & THPT Chuyên Hà Nội - Amsterdam",households:"1.008 căn hộ + 3.200 học sinh"},"VALVE-03":{name:"Chốt Khóa V-LVL-03 (Lê Văn Lương - Diamond Flower)",zone:"Nút Giao Lê Văn Lương - Hoàng Đạo Thúy",affected:"Diamond Flower Tower (36T) & Chung cư Star City",households:"850 hộ dân & 35.000m² văn phòng"},"VALVE-04":{name:"Chốt Khóa V-TDN-04 (Trần Duy Hưng - Charmvit Tower)",zone:"Phân Khu Khách Sạn & Ngoại Giao Trần Duy Hưng",affected:"Tổ hợp Charmvit Tower, Grand Plaza & Cụm N04/N05",households:"920 căn hộ & 500 phòng khách sạn 5 sao"},"VALVE-05":{name:"Chốt Khóa V-DCP-05 (Vinhomes D'Capitale & Big C)",zone:"Cửa Ngõ Phía Nam Trần Duy Hưng - Khuất Duy Tiến",affected:"Tổ hợp 6 Tòa Tháp D'Capitale & Siêu Thị Big C Thăng Long",households:"3.000 căn hộ cao cấp & TTTM Big C"},"VALVE-06":{name:"Chốt Khóa V-KNG-06 (Keangnam Landmark 72 & Phạm Hùng)",zone:"Trung Tâm Tài Chính Phía Tây Hà Nội",affected:"Keangnam Hanoi Landmark 72 (350m, 72 tầng) & Bảo tàng Hà Nội",households:"922 căn hộ Penthouse, TTTM Lotte & Trụ sở Tập đoàn"},"VALVE-07":{name:"Chốt Khóa V-HAP-07 (Ngụy Như Kon Tum - Hapulico)",zone:"Phân Khu Dân Cư Ngụy Như Kon Tum - Vũ Trọng Phụng",affected:"Tổ hợp Hapulico Complex & Chung Cư Golden West",households:"1.200 căn hộ & Chợ Dược Phẩm miền Bắc"},"VALVE-08":{name:"Chốt Khóa V-NTT-08 (Nguyễn Thị Thập - Khu Biệt Thự)",zone:"Khu Đô Thị Thấp Tầng Nguyễn Thị Thập",affected:"150 Biệt thự Liền kề BT1 - BT6 & Trường Liên cấp Ngôi Sao",households:"150 căn biệt thự & 2.200 học sinh"}},be=de=>{ae(St=>{const wt=!St[de],Ht=Ce[de]||{name:de,affected:de};return Ve(wt?`🔒 ĐÃ KHÓA ${de}: Cô lập cắt nước toàn bộ [${Ht.affected}]!`:`🔓 ĐÃ MỞ ${de}: Khôi phục cấp nước ổn định cho [${Ht.affected}]!`),J(j=>j&&(j.id===de||j.id===Ht.name)?{...j,status:wt?"🔒 ĐÃ ĐÓNG (CÔ LẬP & CẮT NƯỚC CỤC BỘ)":"🔓 ĐANG MỞ (Cấp nước bình thường)",isClosed:wt,pressure:wt?"0.00 bar (Cửa xả)":"3.30 bar (Ổn định)"}:j),{...St,[de]:wt}})};It.useEffect(()=>{let de;return Q&&(de=setInterval(()=>{K(St=>(St+1)%24)},1400)),()=>clearInterval(de)},[Q]);const we=(de=>de>=2&&de<=4?{label:"03:00 - Đêm (MNF Rò rỉ)",flow:1420.5,pressure:3.78,status:"Cảnh báo rò rỉ đêm",nrw:"14.8%"}:de>=6&&de<=8?{label:"07:30 - Cao điểm sáng",flow:4280,pressure:3.12,status:"Phụ tải tăng cao",nrw:"10.2%"}:de>=18&&de<=20?{label:"19:00 - Cao điểm tối",flow:4650,pressure:2.98,status:"Phụ tải sinh hoạt cực đại",nrw:"10.6%"}:{label:`${de<10?"0"+de:de}:00 - Giờ bình thường`,flow:3850.4,pressure:3.28,status:"Vận hành ổn định",nrw:"10.8%"})(H),Ve=de=>{y(de),setTimeout(()=>y(null),3e3)},Dt=de=>{S(St=>St.map(wt=>{if(wt.id===de){const Ht=!wt.handled;return Ve(Ht?`Đã điều động kỹ thuật viên xử lý: ${wt.type}`:`Đã hoàn tác trạng thái sự cố: ${wt.type}`),{...wt,handled:Ht}}return wt}))},it=(de="water_management_report.csv")=>{const wt=encodeURI(`data:text/csv;charset=utf-8,\uFEFFDiem Do,Phan Khu,Luu Luong (m3/h),Ap Luc (bar),Trang Thai
PUMP-THNC-MAIN (Dau vao Le Van Luong),Tram Bom Tong,3850.4,3.88,Toi uu
PIPE-TRUNK-HDT-D500 (Truc Hoang Dao Thuy),Lien Vung,3850.4,3.28,Hoat dong tot
BLDG-34T-HDT (Thap 34T Hoang Dao Thuy),DMA THNC-02,48.5,3.25,On dinh
BLDG-DIAMOND-FLOWER (Diamond Flower Tower 36T),DMA THNC-03,72.0,3.38,On dinh
BLDG-CHARMVIT (Charmvit Tower Tran Duy Hung),DMA THNC-01,65.4,3.32,On dinh
BLDG-MANDARIN (Mandarin Garden),DMA THNC-03,68.5,3.20,On dinh
FH-HDT-01 (Tru Cuu Hoa 34T),Hoang Dao Thuy,108.0,3.25,San sang 100%
PRV-01 (Giam ap Tran Duy Hung),DMA THNC-01,680.0,3.32,Dieu tiet tot
PRV-02 (Giam ap Hoang Minh Giam),DMA THNC-03,410.0,3.22,Canh bao MNF dem
`),Ht=document.createElement("a");Ht.setAttribute("href",wt),Ht.setAttribute("download",de),document.body.appendChild(Ht),Ht.click(),document.body.removeChild(Ht),Ve(`Đã xuất và tải về: ${de}`)},Mt=()=>{window.print()},Rt={"DMA THNC-01":{name:"DMA THNC-01 - Khu Bắc Trần Duy Hưng (N01-N05 & Charmvit)",flow:"1,120.0 m³/h",pressure:"3.35 bar",households:"18,500 hộ & 45 VP",nrw:"10.5%",status:"Bình thường"},"DMA THNC-02":{name:"DMA THNC-02 - Khu Trung Tâm Hoàng Đạo Thúy (34T & Diamond Flower)",flow:"1,680.5 m³/h",pressure:"3.28 bar",households:"24,200 hộ + 2 Tháp",nrw:"11.2%",status:"Ổn định"},"DMA THNC-03":{name:"DMA THNC-03 - Khu Nam Lê Văn Lương & Mandarin Garden",flow:"1,050.0 m³/h",pressure:"3.22 bar",households:"22,000 hộ + THPT Ams",nrw:"11.8%",status:"Giám sát áp lực PCCC"}},$t={"24h":{title:"Lưu Lượng Thủy Lực 24 Giờ (m³/h)",subtitle:"So sánh Lưu lượng Thực tế vs Đường Trung bình Baseline",points:[{label:"00h",actual:68,baseline:65,alert:!1},{label:"02h",actual:74,baseline:60,alert:!0,note:"MNF vượt chuẩn (+14 m³/h)"},{label:"04h",actual:62,baseline:60,alert:!1},{label:"06h",actual:110,baseline:105,alert:!1},{label:"08h",actual:172,baseline:160,alert:!0,note:"Đỉnh cao điểm sáng"},{label:"10h",actual:130,baseline:132,alert:!1},{label:"12h",actual:142,baseline:140,alert:!1},{label:"14h",actual:145.8,baseline:138,alert:!1},{label:"16h",actual:138,baseline:135,alert:!1},{label:"18h",actual:165,baseline:162,alert:!1},{label:"20h",actual:152,baseline:150,alert:!1},{label:"22h",actual:98,baseline:95,alert:!1}]},"7d":{title:"Lưu Lượng Thủy Lực 7 Ngày Qua (m³/ngày)",subtitle:"Xu hướng cấp nước theo ngày trong tuần",points:[{label:"Thứ 2",actual:3250,baseline:3200,alert:!1},{label:"Thứ 3",actual:3310,baseline:3220,alert:!1},{label:"Thứ 4",actual:3480,baseline:3250,alert:!0,note:"Tăng vọt giữa tuần (+7%)"},{label:"Thứ 5",actual:3290,baseline:3240,alert:!1},{label:"Thứ 6",actual:3380,baseline:3300,alert:!1},{label:"Thứ 7",actual:3620,baseline:3550,alert:!1},{label:"CN",actual:3590,baseline:3500,alert:!1}]},"30d":{title:"Lưu Lượng Thủy Lực 30 Ngày (m³/ngày)",subtitle:"Đường biến thiên chu kỳ tháng",points:[{label:"Tuần 1",actual:23100,baseline:22800,alert:!1},{label:"Tuần 2",actual:24500,baseline:23e3,alert:!0,note:"Đợt nắng nóng tăng tiêu thụ"},{label:"Tuần 3",actual:23200,baseline:22900,alert:!1},{label:"Tuần 4",actual:22800,baseline:22700,alert:!1}]}}[o],ln=Math.max(...$t.points.map(de=>Math.max(de.actual,de.baseline)))*1.15,yt=Math.min(...$t.points.map(de=>Math.min(de.actual,de.baseline)))*.85,jt=de=>180-(de-yt)/(ln-yt)*160+10,Ot=de=>{const wt=620/($t.points.length-1);return $t.points.map((Ht,j)=>`${j*wt+40},${jt(Ht[de])}`).join(" L ")};return f.jsxs("div",{className:"app-layout",children:[E&&f.jsx("div",{className:"sidebar-backdrop",onClick:()=>R(!1)}),f.jsxs("aside",{className:`app-sidebar ${E?"mobile-open":""}`,children:[f.jsxs("div",{className:"sidebar-header",children:[f.jsx("div",{className:"logo-badge",children:f.jsx(Qs,{size:22})}),f.jsxs("div",{children:[f.jsx("div",{className:"logo-title",children:"Smart Water SCADA"}),f.jsx("div",{className:"logo-sub",children:"KĐT Trung Hòa – Nhân Chính"})]})]}),f.jsxs("nav",{className:"sidebar-nav",children:[f.jsx("div",{className:"nav-label",children:"Nghiệp Vụ"}),f.jsxs("button",{className:`nav-item ${s==="overview"?"active":""}`,onClick:()=>{e("overview"),R(!1)},children:[f.jsx(bl,{size:18}),f.jsx("span",{children:"1. Tổng quan"})]}),f.jsxs("button",{className:`nav-item ${s==="gis"?"active":""}`,onClick:()=>{e("gis"),R(!1)},children:[f.jsx(tg,{size:18}),f.jsx("span",{children:"2. Mạng GIS"})]}),f.jsxs("button",{className:`nav-item ${s==="telemetry"?"active":""}`,onClick:()=>{e("telemetry"),R(!1)},children:[f.jsx(ro,{size:18}),f.jsx("span",{children:"3. Áp & Lưu lượng"})]}),f.jsxs("button",{className:`nav-item ${s==="leaks"?"active":""}`,onClick:()=>{e("leaks"),R(!1)},children:[f.jsx(Ts,{size:18}),f.jsx("span",{children:"4. Thất thoát (NRW)"})]}),f.jsxs("button",{className:`nav-item ${s==="quality"?"active":""}`,onClick:()=>{e("quality"),R(!1)},children:[f.jsx(Qs,{size:18}),f.jsx("span",{children:"5. Chất lượng nước"})]}),f.jsx("div",{className:"nav-label",style:{marginTop:"16px"},children:"Báo Cáo"}),f.jsxs("button",{className:`nav-item ${s==="reports"?"active":""}`,onClick:()=>{e("reports"),R(!1)},children:[f.jsx(fh,{size:18}),f.jsx("span",{children:"6. Kiểm toán nước"})]})]}),f.jsxs("div",{className:"sidebar-footer",children:[f.jsxs("div",{className:"system-status",children:[f.jsx("span",{className:"status-dot"}),f.jsx("span",{children:"Trực tuyến: 512 node · 38 trụ PCCC"})]}),f.jsx(ex,{size:14,color:"#94a3b8",style:{cursor:"pointer"},onClick:()=>Ve("Đã đồng bộ lại 512 node IoT & 38 trụ cứu hỏa PCCC KĐT Trung Hòa - Nhân Chính")})]})]}),f.jsxs("div",{className:"main-wrapper",children:[f.jsxs("header",{className:"top-header",children:[f.jsxs("div",{className:"header-left-group",children:[f.jsx("button",{className:"mobile-menu-btn",onClick:()=>R(!E),"aria-label":"Toggle navigation menu",children:E?f.jsx(Bm,{size:20}):f.jsx($_,{size:20})}),f.jsxs("div",{className:"header-search",children:[f.jsx(tx,{size:16}),f.jsx("input",{type:"text",placeholder:"Tìm trạm, DMA, cảm biến...",value:x,onChange:de=>M(de.target.value)})]})]}),f.jsxs("div",{className:"header-actions",children:[f.jsxs("button",{className:"action-btn",onClick:()=>it("Bao_Cao_Van_Hanh_Ngay.csv"),title:"Xuất báo cáo CSV",children:[f.jsx(fh,{size:15}),f.jsx("span",{children:"Xuất báo cáo"})]}),f.jsxs("button",{className:"action-btn",style:{position:"relative"},onClick:()=>Ve("Cảnh báo: 1 sự cố áp cao tại DMA 3"),"aria-label":"Thông báo sự cố",title:"Xem thông báo",children:[f.jsx(X_,{size:16}),f.jsx("span",{style:{position:"absolute",top:"6px",right:"8px",width:"7px",height:"7px",background:"#ef4444",borderRadius:"50%"}})]}),f.jsxs("div",{className:"user-profile",title:"Tài khoản kỹ sư",children:[f.jsx("div",{className:"user-avatar",children:"AD"}),f.jsxs("div",{className:"user-info",children:[f.jsx("span",{className:"user-name",children:"Kỹ sư trực"}),f.jsx("span",{className:"user-role",children:"Vận hành"})]})]})]})]}),f.jsxs("main",{className:"content-container",children:[s==="overview"&&f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"page-title-row",children:[f.jsxs("div",{children:[f.jsx("h1",{className:"page-title",children:"Giám sát Cấp nước KĐT Trung Hòa – Nhân Chính"}),f.jsx("p",{className:"page-subtitle",children:"Mạng lưới 3 cấp: Truyền dẫn D500, Phân phối D200 và Tuyến dịch vụ đấu nối công trình"})]}),f.jsx("div",{style:{display:"flex",gap:"8px"},children:f.jsxs("span",{className:"metric-badge badge-success",children:[f.jsx(_s,{size:13}),f.jsx("span",{children:"Trạm bơm Lê Văn Lương: 100%"})]})})]}),f.jsxs("div",{className:"metrics-grid",children:[f.jsxs("div",{className:"metric-card",children:[f.jsxs("div",{className:"metric-header",children:[f.jsx("span",{children:"Lưu lượng cấp toàn KĐT"}),f.jsx("div",{className:"metric-icon-wrap",style:{background:"#e0f2fe",color:"#0284c7"},children:f.jsx(Qs,{size:18})})]}),f.jsxs("div",{className:"metric-body",children:[f.jsx("span",{className:"metric-value",children:we.flow.toFixed(1)}),f.jsx("span",{className:"metric-unit",children:"m³/h"})]}),f.jsx("div",{children:f.jsx("span",{className:"metric-badge badge-success",children:"↑ 3.2% định mức giờ"})})]}),f.jsxs("div",{className:"metric-card",children:[f.jsxs("div",{className:"metric-header",children:[f.jsx("span",{children:"Áp lực trung bình"}),f.jsx("div",{className:"metric-icon-wrap",style:{background:"#ecfdf5",color:"#10b981"},children:f.jsx(ro,{size:18})})]}),f.jsxs("div",{className:"metric-body",children:[f.jsx("span",{className:"metric-value",children:we.pressure.toFixed(2)}),f.jsx("span",{className:"metric-unit",children:"bar"})]}),f.jsx("div",{children:f.jsx("span",{className:"metric-badge badge-info",children:"Tối ưu: 2.8 - 3.5 bar"})})]}),f.jsxs("div",{className:"metric-card",children:[f.jsxs("div",{className:"metric-header",children:[f.jsx("span",{children:"Thất thoát (NRW)"}),f.jsx("div",{className:"metric-icon-wrap",style:{background:"#fef3c7",color:"#d97706"},children:f.jsx(km,{size:18})})]}),f.jsx("div",{className:"metric-body",children:f.jsx("span",{className:"metric-value",children:we.nrw})}),f.jsx("div",{children:f.jsx("span",{className:"metric-badge badge-success",children:"↓ 0.8% theo tuần"})})]}),f.jsxs("div",{className:"metric-card",children:[f.jsxs("div",{className:"metric-header",children:[f.jsx("span",{children:"Cảnh báo"}),f.jsx("div",{className:"metric-icon-wrap",style:{background:"#fee2e2",color:"#ef4444"},children:f.jsx(Ts,{size:18})})]}),f.jsxs("div",{className:"metric-body",children:[f.jsx("span",{className:"metric-value",style:{color:"#ef4444"},children:_.filter(de=>!de.handled).length}),f.jsx("span",{className:"metric-unit",children:"sự cố"})]}),f.jsx("div",{children:f.jsx("span",{className:"metric-badge badge-danger",children:"1 nghi vấn rò rỉ đêm"})})]})]}),f.jsxs("div",{className:"dashboard-main-grid",children:[f.jsxs("div",{className:"panel-card",children:[f.jsxs("div",{className:"panel-card-header",children:[f.jsxs("div",{className:"panel-card-title",children:[f.jsx(q_,{size:17,color:"#0284c7"}),f.jsx("span",{children:"Sơ đồ phân vùng DMA"})]}),f.jsxs("div",{className:"panel-card-actions",children:[f.jsxs("div",{className:"qatium-hud-pill-group",style:{padding:"2px"},children:[f.jsx("button",{className:`qatium-hud-btn ${P==="light"?"active":""}`,onClick:()=>B("light"),style:{padding:"4px 8px",fontSize:"11.5px"},title:"Chế độ Google Maps (Mây trời 3D)",children:"Google Maps 3D"}),f.jsx("button",{className:`qatium-hud-btn ${P==="dark"?"active":""}`,onClick:()=>B("dark"),style:{padding:"4px 8px",fontSize:"11.5px"},title:"Chế độ Bản Đồ Đêm",children:"Đêm"})]}),f.jsx("button",{className:"btn-sm btn-secondary",onClick:()=>e("gis"),children:"Mở GIS →"})]})]}),f.jsxs("div",{className:`map-canvas-container ${P==="dark"?"dark-theme":"light-theme"}`,style:{minHeight:"440px",height:"440px",position:"relative"},children:[f.jsx(Q0,{theme:P,heatmap:I,assetsLayer:A,isolatedPipe:ue,closedValves:Ie,onToggleValve:be,simTime:H,currentSim:we,compact:!0,onSelectAsset:de=>{J(de),de.dma&&(de.dma.includes("THNC-01")||de.dma.includes("DMA 1"))?r("DMA THNC-01"):de.dma&&(de.dma.includes("THNC-02")||de.dma.includes("DMA 2"))?r("DMA THNC-02"):de.dma&&(de.dma.includes("THNC-03")||de.dma.includes("DMA 3"))&&r("DMA THNC-03")}}),f.jsxs("div",{className:"map-overlay-badge",style:{zIndex:25,pointerEvents:"auto"},children:[f.jsx("div",{className:"map-overlay-title",children:Rt[t].name}),f.jsxs("div",{className:"map-overlay-sub",children:["Lưu lượng: ",f.jsx("b",{children:Rt[t].flow})," · Áp: ",f.jsx("b",{children:Rt[t].pressure})," · NRW: ",f.jsx("b",{children:Rt[t].nrw})]})]})]})]}),f.jsxs("div",{className:"panel-card",children:[f.jsxs("div",{className:"panel-card-header",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"panel-card-title",children:[f.jsx(bl,{size:17,color:"#0284c7"}),f.jsx("span",{children:"Thủy lực 24h & Cảnh báo"})]}),f.jsx("span",{style:{fontSize:"12px",color:"#64748b"},children:$t.subtitle})]}),f.jsxs("div",{className:"timeframe-group",children:[f.jsx("button",{className:`timeframe-btn ${o==="24h"?"active":""}`,onClick:()=>l("24h"),children:"24 Giờ"}),f.jsx("button",{className:`timeframe-btn ${o==="7d"?"active":""}`,onClick:()=>l("7d"),children:"7 Ngày"}),f.jsx("button",{className:`timeframe-btn ${o==="30d"?"active":""}`,onClick:()=>l("30d"),children:"30 Ngày"})]})]}),f.jsxs("div",{className:"line-chart-wrapper",children:[f.jsxs("div",{className:"line-chart-legend",children:[f.jsxs("div",{className:"legend-line-item",children:[f.jsx("div",{className:"line-sample-actual"}),f.jsx("span",{children:"Thực tế"})]}),f.jsxs("div",{className:"legend-line-item",children:[f.jsx("div",{className:"line-sample-baseline"}),f.jsx("span",{children:"Baseline"})]}),f.jsxs("div",{className:"legend-line-item",children:[f.jsx("div",{className:"line-sample-alert"}),f.jsx("span",{children:"Lệch chuẩn"})]})]}),f.jsxs("div",{style:{position:"relative",width:"100%",height:"220px",background:"#ffffff"},children:[f.jsxs("svg",{viewBox:"0 0 700 220",style:{width:"100%",height:"100%"},children:[f.jsx("line",{x1:"40",y1:"30",x2:"680",y2:"30",stroke:"#f1f5f9",strokeWidth:"1"}),f.jsx("line",{x1:"40",y1:"80",x2:"680",y2:"80",stroke:"#f1f5f9",strokeWidth:"1"}),f.jsx("line",{x1:"40",y1:"130",x2:"680",y2:"130",stroke:"#f1f5f9",strokeWidth:"1"}),f.jsx("line",{x1:"40",y1:"180",x2:"680",y2:"180",stroke:"#e2e8f0",strokeWidth:"1.5"}),f.jsx("path",{d:`M ${Ot("baseline")}`,fill:"none",stroke:"#94a3b8",strokeWidth:"2.5",strokeDasharray:"6,5"}),f.jsx("path",{d:`M ${Ot("actual")}`,fill:"none",stroke:"#0284c7",strokeWidth:"3.5",strokeLinecap:"round",strokeLinejoin:"round"}),$t.points.map((de,St)=>{const Ht=620/($t.points.length-1),j=St*Ht+40,gn=jt(de.actual);return f.jsxs("g",{children:[de.alert&&f.jsx("circle",{cx:j,cy:gn,r:"9",fill:"rgba(239, 68, 68, 0.25)",stroke:"#ef4444",strokeWidth:"1.5"}),f.jsx("circle",{cx:j,cy:gn,r:de.alert?"5":"4",fill:de.alert?"#ef4444":"#0284c7",stroke:"#ffffff",strokeWidth:"2",style:{cursor:"pointer"},onMouseEnter:()=>d(de),onMouseLeave:()=>d(null)}),f.jsx("text",{x:j,y:"202",textAnchor:"middle",fontSize:"11",fill:"#64748b",fontFamily:"var(--font-mono)",children:de.label})]},St)})]}),u&&f.jsxs("div",{style:{position:"absolute",top:"10px",right:"20px",background:"#0f172a",color:"#ffffff",padding:"8px 12px",borderRadius:"8px",fontSize:"12px",boxShadow:"0 4px 12px rgba(0,0,0,0.15)",zIndex:10},children:[f.jsxs("div",{style:{fontWeight:"700",marginBottom:"2px"},children:["Thời điểm: ",u.label]}),f.jsxs("div",{children:["Thực tế: ",f.jsxs("b",{style:{color:"#38bdf8"},children:[u.actual," m³/h"]})]}),f.jsxs("div",{children:["Trung bình: ",f.jsxs("b",{children:[u.baseline," m³/h"]})]}),u.note&&f.jsxs("div",{style:{color:"#f87171",marginTop:"4px",fontWeight:"600"},children:["⚠ ",u.note]})]})]}),f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"8px",fontSize:"12px",color:"#64748b",borderTop:"1px solid #f1f5f9",paddingTop:"10px"},children:[f.jsxs("span",{children:["MNF đêm định mức: ",f.jsx("b",{children:"65 m³/h"})," (Ngưỡng cảnh báo: ",">"," 70 m³/h)"]}),f.jsxs("span",{children:["Hệ số an toàn mạng lưới: ",f.jsx("b",{style:{color:"#16a34a"},children:"1.15 (Đạt chuẩn)"})]})]})]})]})]}),f.jsxs("div",{className:"panel-card",children:[f.jsxs("div",{className:"panel-card-header",children:[f.jsxs("div",{className:"panel-card-title",children:[f.jsx(nx,{size:17,color:"#ef4444"}),f.jsx("span",{children:"Nhật ký sự cố SCADA"})]}),f.jsx("div",{className:"panel-card-actions",children:f.jsx("span",{className:"metric-badge badge-warning",children:"Chờ xử lý"})})]}),f.jsx("div",{className:"data-table-wrapper",children:f.jsxs("table",{className:"custom-table",children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{children:"Mức độ"}),f.jsx("th",{children:"Sự cố"}),f.jsx("th",{children:"Vị trí"}),f.jsx("th",{children:"Giờ"}),f.jsx("th",{children:"Trạng thái"}),f.jsx("th",{children:"Thao tác"})]})}),f.jsx("tbody",{children:_.map(de=>f.jsxs("tr",{children:[f.jsx("td",{children:f.jsx("span",{className:`metric-badge ${de.severity==="danger"?"badge-danger":de.severity==="warning"?"badge-warning":"badge-info"}`,children:de.status})}),f.jsx("td",{style:{fontWeight:"600"},children:de.type}),f.jsx("td",{children:de.location}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:de.time}),f.jsx("td",{children:de.handled?f.jsxs("span",{style:{color:"#10b981",fontWeight:"600",display:"flex",alignItems:"center",gap:"4px"},children:[f.jsx(_s,{size:14})," Đã nhận"]}):f.jsx("span",{style:{color:"#ef4444",fontWeight:"600"},children:"Chưa xử lý"})}),f.jsx("td",{children:f.jsx("button",{className:`btn-sm ${de.handled?"btn-secondary":"btn-primary"}`,onClick:()=>Dt(de.id),children:de.handled?"Hoàn tác":"Điều động"})})]},de.id))})]})})]})]}),s==="gis"&&f.jsxs("div",{className:"panel-card",style:{position:"relative"},children:[f.jsxs("div",{className:"panel-card-header",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"panel-card-title",children:[f.jsx(mc,{size:18,color:"#0284c7"}),f.jsx("span",{children:"Mạng 3D Digital Twin (GIS Thủy lực)"})]}),f.jsx("span",{style:{fontSize:"12px",color:"#64748b"},children:"Không gian 3D địa hình, mô phỏng thủy lực thời gian thực và quản lý tài sản theo chuẩn Qatium"})]}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[f.jsxs("button",{className:`btn-sm ${ue?"btn-primary":"btn-secondary"}`,onClick:()=>{ee(!ue),Ve(ue?"Đã mở lại van PRV-02, mạng lưới trở lại bình thường.":"Mô phỏng: Đã đóng van PRV-02! Khu vực DMA 2 đang chạy nguồn dự phòng.")},title:"Mô phỏng đóng ngắt sự cố",children:[f.jsx(Nl,{size:13}),f.jsx("span",{children:ue?"Mở van PRV-02":"Mô phỏng đóng van PRV-02"})]}),f.jsxs("button",{className:"btn-sm btn-secondary",onClick:()=>it("Mo_Hinh_Mang_3D_GIS.csv"),children:[f.jsx(fh,{size:13}),f.jsx("span",{children:"Xuất GIS"})]})]})]}),f.jsxs("div",{className:`map-canvas-container ${P==="dark"?"dark-theme":"light-theme"}`,style:{minHeight:"640px",position:"relative"},children:[f.jsxs("div",{style:{position:"absolute",top:"14px",left:"14px",zIndex:25,display:"flex",flexDirection:"column",gap:"8px",maxWidth:"calc(100% - 220px)",pointerEvents:"auto"},children:[f.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",alignItems:"center"},children:[f.jsxs("div",{className:"qatium-hud-pill-group",style:{background:"rgba(255, 255, 255, 0.95)",boxShadow:"0 2px 8px rgba(0,0,0,0.08)"},children:[f.jsx("button",{className:`qatium-hud-btn ${P==="light"?"active":""}`,onClick:()=>B("light"),style:{padding:"5px 10px",fontSize:"12px",fontWeight:600,background:P==="light"?"#0f172a":"transparent",color:P==="light"?"#ffffff":"#475569"},children:f.jsx("span",{children:"Google Maps 3D"})}),f.jsx("button",{className:`qatium-hud-btn ${P==="dark"?"active":""}`,onClick:()=>B("dark"),style:{padding:"5px 10px",fontSize:"12px",fontWeight:600,background:P==="dark"?"#0f172a":"transparent",color:P==="dark"?"#ffffff":"#475569"},children:f.jsx("span",{children:"Bản Đồ Đêm"})})]}),f.jsxs("div",{className:"qatium-hud-pill-group",style:{background:"rgba(255, 255, 255, 0.95)",boxShadow:"0 2px 8px rgba(0,0,0,0.08)"},children:[f.jsxs("button",{className:`qatium-hud-btn ${I==="pressure"?"active":""}`,onClick:()=>T("pressure"),style:{padding:"5px 10px",fontSize:"12px",fontWeight:600,background:I==="pressure"?"#0284c7":"transparent",color:I==="pressure"?"#ffffff":"#475569"},children:[f.jsx(ro,{size:13}),f.jsx("span",{children:"Áp lực"})]}),f.jsxs("button",{className:`qatium-hud-btn ${I==="flow"?"active":""}`,onClick:()=>T("flow"),style:{padding:"5px 10px",fontSize:"12px",fontWeight:600,background:I==="flow"?"#ea580c":"transparent",color:I==="flow"?"#ffffff":"#475569"},children:[f.jsx(Qs,{size:13}),f.jsx("span",{children:"Lưu lượng"})]})]}),f.jsxs("div",{className:"qatium-hud-pill-group",style:{background:"rgba(255, 255, 255, 0.92)",boxShadow:"0 2px 8px rgba(0,0,0,0.08)"},children:[f.jsxs("div",{style:{padding:"4px 8px",fontSize:"11.5px",fontWeight:600,color:"#0284c7",display:"flex",alignItems:"center",gap:"4px"},children:[f.jsx(Nl,{size:13}),f.jsx("span",{children:"Chốt Van:"})]}),["VALVE-01","VALVE-02","VALVE-03","VALVE-04","VALVE-05","VALVE-06","VALVE-07","VALVE-08"].map(de=>{const St=!!Ie[de];return f.jsxs("button",{onClick:()=>be(de),title:`Click để ${St?"MỞ lại":"ĐÓNG"} chốt van ${de}`,style:{padding:"4px 7px",fontSize:"11px",fontWeight:700,borderRadius:"4px",border:"none",background:St?"#dc2626":"transparent",color:St?"#ffffff":"#64748b",cursor:"pointer",transition:"all 0.15s ease"},children:[de.replace("VALVE-","V"),": ",St?"🔒":"🔓"]},de)})]})]}),f.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",alignItems:"center"},children:[f.jsx("button",{className:`qatium-hud-btn ${A.pipesPrimary?"active":""}`,onClick:()=>U(de=>({...de,pipesPrimary:!de.pipesPrimary})),style:{padding:"4px 10px",fontSize:"11px",fontWeight:600,background:A.pipesPrimary?"#1d4ed8":"#ffffff",color:A.pipesPrimary?"#ffffff":"#1e3a8a",border:A.pipesPrimary?"1px solid #1e40af":"1px solid #bfdbfe",borderRadius:"6px",boxShadow:"0 1px 3px rgba(0,0,0,0.08)"},children:f.jsx("span",{children:"Trục Cấp 1 (D500)"})}),f.jsx("button",{className:`qatium-hud-btn ${A.pipesSecondary?"active":""}`,onClick:()=>U(de=>({...de,pipesSecondary:!de.pipesSecondary})),style:{padding:"4px 10px",fontSize:"11px",fontWeight:600,background:A.pipesSecondary?"#0891b2":"#ffffff",color:A.pipesSecondary?"#ffffff":"#155e75",border:A.pipesSecondary?"1px solid #0e7490":"1px solid #a5f3fc",borderRadius:"6px",boxShadow:"0 1px 3px rgba(0,0,0,0.08)"},children:f.jsx("span",{children:"Mạch Vòng Cấp 2 (D200)"})}),f.jsx("button",{className:`qatium-hud-btn ${A.pipesService?"active":""}`,onClick:()=>U(de=>({...de,pipesService:!de.pipesService})),style:{padding:"4px 10px",fontSize:"11px",fontWeight:600,background:A.pipesService?"#d97706":"#ffffff",color:A.pipesService?"#ffffff":"#92400e",border:A.pipesService?"1px solid #b45309":"1px solid #fde68a",borderRadius:"6px",boxShadow:"0 1px 3px rgba(0,0,0,0.08)"},children:f.jsx("span",{children:"Đấu Nối Cấp 3/4 (D100/50)"})}),f.jsx("button",{className:`qatium-hud-btn ${A.buildings?"active":""}`,onClick:()=>U(de=>({...de,buildings:!de.buildings})),style:{padding:"4px 10px",fontSize:"11px",fontWeight:600,background:A.buildings?"#475569":"#ffffff",color:A.buildings?"#ffffff":"#334155",border:A.buildings?"1px solid #334155":"1px solid #cbd5e1",borderRadius:"6px",boxShadow:"0 1px 3px rgba(0,0,0,0.08)"},children:f.jsx("span",{children:"Khối Nhà 3D"})}),f.jsxs("button",{className:`qatium-hud-btn ${A.hydrants?"active":""}`,onClick:()=>U(de=>({...de,hydrants:!de.hydrants})),style:{padding:"4px 10px",fontSize:"11px",fontWeight:600,background:A.hydrants?"#dc2626":"#ffffff",color:A.hydrants?"#ffffff":"#b91c1c",border:A.hydrants?"1px solid #b91c1c":"1px solid #fecaca",borderRadius:"6px",boxShadow:"0 1px 3px rgba(0,0,0,0.08)"},children:[f.jsx(Y_,{size:12,color:A.hydrants?"#ffffff":"#dc2626",style:{marginRight:"3px"}}),f.jsx("span",{children:"Trụ PCCC"})]}),f.jsxs("button",{className:`qatium-hud-btn ${A.streetLabels?"active":""}`,onClick:()=>U(de=>({...de,streetLabels:!de.streetLabels})),style:{padding:"4px 10px",fontSize:"11px",fontWeight:600,background:A.streetLabels?"#7c3aed":"#ffffff",color:A.streetLabels?"#ffffff":"#5b21b6",border:A.streetLabels?"1px solid #6d28d9":"1px solid #ddd6fe",borderRadius:"6px",boxShadow:"0 1px 3px rgba(0,0,0,0.08)"},children:[f.jsx(ix,{size:12,style:{marginRight:"3px"}}),f.jsx("span",{children:"Tên Đường"})]}),f.jsx("button",{className:`qatium-hud-btn ${A.tanks?"active":""}`,onClick:()=>U(de=>({...de,tanks:!de.tanks})),style:{padding:"4px 10px",fontSize:"11px",fontWeight:600,background:A.tanks?"#059669":"#ffffff",color:A.tanks?"#ffffff":"#065f46",border:A.tanks?"1px solid #047857":"1px solid #a7f3d0",borderRadius:"6px",boxShadow:"0 1px 3px rgba(0,0,0,0.08)"},children:f.jsx("span",{children:"Trạm Bơm & Bể"})})]})]}),f.jsx(Q0,{theme:P,heatmap:I,assetsLayer:A,isolatedPipe:ue,closedValves:Ie,onToggleValve:be,simTime:H,currentSim:we,onSelectAsset:de=>J(de)}),F&&f.jsxs("div",{className:"qatium-inspector-drawer",children:[f.jsxs("div",{className:"inspector-header",children:[f.jsxs("div",{className:"inspector-title",children:[f.jsx(mc,{size:16,color:"#0284c7"}),f.jsx("span",{children:F.name})]}),f.jsx("button",{className:"inspector-close-btn",onClick:()=>J(null),"aria-label":"Đóng thanh thông tin",children:f.jsx(Bm,{size:16})})]}),f.jsxs("div",{className:"inspector-body",children:[f.jsxs("div",{children:[f.jsxs("span",{className:"metric-badge badge-info",style:{marginBottom:"6px"},children:["Mã ID: ",F.id]}),f.jsx("div",{style:{fontSize:"12px",color:"#64748b"},children:F.type})]}),F.isCutOff&&f.jsxs("div",{style:{padding:"10px",borderRadius:"6px",background:"rgba(239, 68, 68, 0.15)",border:"1px solid #ef4444",color:"#dc2626",marginTop:"6px"},children:[f.jsxs("div",{style:{fontWeight:700,fontSize:"12.5px",display:"flex",alignItems:"center",gap:"6px"},children:[f.jsx(Ts,{size:15,color:"#dc2626"}),f.jsx("span",{children:"CÔNG TRÌNH ĐANG BỊ CẮT NƯỚC!"})]}),f.jsxs("div",{style:{fontSize:"11.5px",marginTop:"4px",color:"#991b1b"},children:["Chốt van ",f.jsx("b",{children:F.cutOffValveName||"phân đoạn"})," đang bị đóng để cô lập sự cố. Áp lực cấp nước đo được: ",f.jsx("b",{children:"0.00 bar"}),"."]})]}),F.zoneDescription&&f.jsxs("div",{style:{marginTop:"6px",padding:"10px",borderRadius:"6px",background:"rgba(239, 68, 68, 0.1)",border:"1px solid rgba(239, 68, 68, 0.3)"},children:[f.jsxs("div",{style:{color:"#dc2626",fontWeight:700,fontSize:"12px",display:"flex",alignItems:"center",gap:"5px"},children:[f.jsx(Ts,{size:14}),f.jsx("span",{children:"PHẠM VI ẢNH HƯỞNG KHI KHÓA VAN:"})]}),f.jsxs("div",{style:{fontSize:"12px",marginTop:"4px"},children:[f.jsx("b",{children:"Khu vực:"})," ",F.zoneDescription]}),f.jsxs("div",{style:{fontSize:"12px"},children:[f.jsx("b",{children:"Công trình:"})," ",F.affectedBuildings]}),f.jsxs("div",{style:{fontSize:"12px"},children:[f.jsx("b",{children:"Số hộ dân mất nước:"})," ",f.jsx("span",{style:{color:"#dc2626",fontWeight:700},children:F.householdsAffected})]})]}),f.jsxs("div",{className:"inspector-grid",children:[f.jsxs("div",{className:"inspector-metric-box",children:[f.jsx("span",{className:"inspector-metric-label",children:"Áp Lực SCADA"}),f.jsx("span",{className:"inspector-metric-val",children:F.pressure||F.inletPressure||"N/A"})]}),f.jsxs("div",{className:"inspector-metric-box",children:[f.jsx("span",{className:"inspector-metric-label",children:"Lưu Lượng Cấp"}),f.jsx("span",{className:"inspector-metric-val",children:F.flow||"N/A"})]}),f.jsxs("div",{className:"inspector-metric-box",children:[f.jsx("span",{className:"inspector-metric-label",children:"Cao Độ Z"}),f.jsx("span",{className:"inspector-metric-val",children:F.elevation||"+0.0m"})]}),f.jsxs("div",{className:"inspector-metric-box",children:[f.jsx("span",{className:"inspector-metric-label",children:"Tổn Thất / Cột Áp"}),f.jsx("span",{className:"inspector-metric-val",children:F.headloss||F.head||F.level||"Tối ưu"})]})]}),f.jsxs("div",{style:{fontSize:"12.5px",display:"flex",flexDirection:"column",gap:"6px",borderTop:"1px solid var(--border-light)",paddingTop:"10px"},children:[f.jsxs("div",{children:[f.jsx("b",{children:"Trạng thái:"})," ",f.jsx("span",{style:{color:F.status.includes("Cảnh báo")||F.status.includes("ĐÓNG")?"#dc2626":"#16a34a"},children:F.status})]}),F.tier&&f.jsxs("div",{children:[f.jsx("b",{children:"Cấp kỹ thuật:"})," ",f.jsx("span",{style:{color:"#0284c7",fontWeight:600},children:F.tier})]}),F.floors&&f.jsxs("div",{children:[f.jsx("b",{children:"Quy mô tầng:"})," ",F.floors]}),F.connectionPipe&&f.jsxs("div",{children:[f.jsx("b",{children:"Ống dịch vụ đấu nối:"})," ",f.jsx("span",{style:{color:"#d97706",fontWeight:600},children:F.connectionPipe})]}),F.cisternCapacity&&f.jsxs("div",{children:[f.jsx("b",{children:"Bể chứa ngầm tòa nhà:"})," ",F.cisternCapacity]}),F.meterId&&f.jsxs("div",{children:[f.jsx("b",{children:"Đồng hồ điện từ AMR:"})," ",F.meterId]}),F.material&&f.jsxs("div",{children:[f.jsx("b",{children:"Vật liệu:"})," ",F.material]}),F.diameter&&f.jsxs("div",{children:[f.jsx("b",{children:"Đường kính danh định:"})," ",F.diameter]}),F.households&&f.jsxs("div",{children:[f.jsx("b",{children:"Quy mô phụ tải:"})," ",F.households]}),F.power&&f.jsxs("div",{children:[f.jsx("b",{children:"Công suất truyền động:"})," ",F.power]}),f.jsxs("div",{children:[f.jsx("b",{children:"Khu vực phụ trách:"})," ",F.dma]})]}),f.jsxs("div",{className:"inspector-actions",children:[F.id&&F.id.startsWith("VALVE-")&&f.jsxs("button",{className:"btn-sm",style:{background:Ie[F.id]?"#16a34a":"#dc2626",color:"#ffffff",fontWeight:700,padding:"8px 12px",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",borderRadius:"6px",border:"none",cursor:"pointer"},onClick:()=>be(F.id),children:[f.jsx(Nl,{size:14}),f.jsx("span",{children:Ie[F.id]?`🔓 MỞ LẠI CHỐT ${F.id} (CẤP LẠI NƯỚC)`:`🔒 ĐÓNG CHỐT ${F.id} (CÔ LẬP CẮT NƯỚC)`})]}),F.id==="PRV-02"&&f.jsxs("button",{className:"btn-sm btn-primary",onClick:()=>{ee(!ue),Ve(ue?"Đã mở lại van PRV-02!":"Đã đóng van PRV-02!")},children:[f.jsx(Nl,{size:13}),f.jsx("span",{children:ue?"Mở lại van PRV-02":"Mô phỏng đóng ngắt (Shutdown)"})]}),f.jsxs("button",{className:"btn-sm btn-secondary",onClick:()=>Ve(`Đang trích xuất đồ thị áp lực 24h cho ${F.id}...`),children:[f.jsx(bl,{size:13}),f.jsx("span",{children:"Đồ thị áp lực 24h"})]}),f.jsxs("button",{className:"btn-sm btn-secondary",onClick:()=>Ve(`Đã tạo lệnh điều động kỹ sư kiểm tra ${F.id}`),children:[f.jsx(_s,{size:13}),f.jsx("span",{children:"Tạo phiếu bảo trì"})]})]})]})]}),f.jsxs("div",{className:"qatium-timeline-bar",children:[f.jsx("button",{className:"timeline-play-btn",onClick:()=>{he(!Q),Ve(Q?"Đã tạm dừng mô phỏng 24h":"Đang chạy mô phỏng biến thiên thủy lực 24h...")},title:Q?"Tạm dừng mô phỏng":"Chạy mô phỏng 24h",children:Q?f.jsx(Z_,{size:16}):f.jsx(Q_,{size:16,style:{marginLeft:"2px"}})}),f.jsxs("div",{className:"timeline-time-info",children:[f.jsx("span",{className:"timeline-clock",children:we.label}),f.jsxs("span",{className:"timeline-desc",children:["Q = ",f.jsxs("b",{children:[we.flow," m³/h"]})," · P = ",f.jsxs("b",{children:[we.pressure," bar"]})]})]}),f.jsx("div",{className:"timeline-slider-wrap",children:f.jsx("input",{type:"range",min:"0",max:"23",value:H,onChange:de=>K(parseInt(de.target.value,10)),className:"timeline-slider",title:"Kéo để tua nhanh dòng thời gian mô phỏng"})}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexShrink:0},children:[f.jsx("span",{className:`metric-badge ${H>=2&&H<=4?"badge-danger":H>=6&&H<=8||H>=18&&H<=20?"badge-warning":"badge-success"}`,children:we.status}),f.jsx("button",{className:"btn-sm btn-secondary",onClick:()=>K(14),title:"Đặt lại giờ mặc định",children:f.jsx(ng,{size:12})})]})]})]})]}),s==="telemetry"&&f.jsxs("div",{className:"panel-card",children:[f.jsxs("div",{className:"panel-card-header",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"panel-card-title",children:[f.jsx(ro,{size:18,color:"#0284c7"}),f.jsx("span",{children:"Dữ liệu Áp & Lưu lượng"})]}),f.jsx("span",{style:{fontSize:"12px",color:"#64748b"},children:"6 điểm quan trắc tự động (SCADA)"})]}),f.jsx("button",{className:"btn-sm btn-primary",onClick:()=>it("Du_Lieu_Telemetry_6_Diem_Do.csv"),children:"Xuất Excel"})]}),f.jsx("div",{className:"data-table-wrapper",children:f.jsxs("table",{className:"custom-table",children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{children:"Điểm đo"}),f.jsx("th",{children:"Khu vực"}),f.jsx("th",{children:"Lưu lượng"}),f.jsx("th",{children:"Áp lực (bar)"}),f.jsx("th",{children:"Dải chuẩn"}),f.jsx("th",{children:"Chênh lệch"}),f.jsx("th",{children:"Trạng thái"})]})}),f.jsx("tbody",{children:[{node:"FM-01 / Trạm bơm Tăng áp Trung tâm",zone:"Đầu nguồn cấp Lê Văn Lương",flow:"450.8 m³/h",press:"4.2 bar",range:"3.8 - 4.5 bar",delta:"+0.1 bar",status:"Tối ưu",tag:"badge-success"},{node:"PRV-02 / Cổng vào DMA THNC-01",zone:"Hoàng Minh Giám - Amsterdam",flow:"128.2 m³/h",press:"3.1 bar",range:"2.8 - 3.4 bar",delta:"-0.2 bar",status:"Ổn định",tag:"badge-info"},{node:"PRV-03 / Trục chính DMA THNC-02",zone:"Hoàng Đạo Thúy - Tháp 34T",flow:"185.4 m³/h",press:"3.2 bar",range:"2.8 - 3.5 bar",delta:"+0.0 bar",status:"Ổn định",tag:"badge-info"},{node:"FM-04 / Điểm cao DMA THNC-03",zone:"Charmvit & Grand Plaza",flow:"142.2 m³/h",press:"3.4 bar",range:"2.5 - 3.2 bar",delta:"+0.4 bar",status:"Cảnh báo Áp cao",tag:"badge-warning"},{node:"SN-05 / Cụm cư dân 17T1 - 17T4",zone:"DMA THNC-02 (Hoàng Đạo Thúy)",flow:"48.4 m³/h",press:"2.4 bar",range:"2.8 - 3.4 bar",delta:"-0.5 bar",status:"Sụt áp cục bộ",tag:"badge-danger"},{node:"FM-06 / Tuyến xả cặn Hố van Big C",zone:"Khuất Duy Tiến - D'Capitale",flow:"0.0 m³/h",press:"3.0 bar",range:"2.8 - 3.5 bar",delta:"0.0 bar",status:"Đang khóa",tag:"badge-info"}].map((de,St)=>f.jsxs("tr",{children:[f.jsx("td",{style:{fontWeight:"700"},children:de.node}),f.jsx("td",{children:de.zone}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:de.flow}),f.jsx("td",{style:{fontWeight:"700",color:"#0284c7"},children:de.press}),f.jsx("td",{style:{color:"#64748b"},children:de.range}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:de.delta}),f.jsx("td",{children:f.jsx("span",{className:`metric-badge ${de.tag}`,children:de.status})})]},St))})]})})]}),s==="leaks"&&f.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[f.jsxs("div",{className:"metrics-grid",children:[f.jsxs("div",{className:"metric-card",children:[f.jsxs("div",{className:"metric-header",children:[f.jsx("span",{children:"Lưu lượng đêm (MNF)"}),f.jsx(km,{size:18,color:"#d97706"})]}),f.jsxs("div",{className:"metric-body",children:[f.jsx("span",{className:"metric-value",children:"65.2"}),f.jsx("span",{className:"metric-unit",children:"m³/h"})]}),f.jsx("span",{className:"metric-badge badge-warning",children:"Khung 02:00 - 04:00"})]}),f.jsxs("div",{className:"metric-card",children:[f.jsxs("div",{className:"metric-header",children:[f.jsx("span",{children:"Tỷ lệ thất thoát"}),f.jsx(Ts,{size:18,color:"#ef4444"})]}),f.jsx("div",{className:"metric-body",children:f.jsx("span",{className:"metric-value",style:{color:"#ef4444"},children:"12.5%"})}),f.jsx("span",{className:"metric-badge badge-danger",children:"~18.2 m³/h rò rỉ"})]}),f.jsxs("div",{className:"metric-card",children:[f.jsxs("div",{className:"metric-header",children:[f.jsx("span",{children:"Nghi vấn rò rỉ"}),f.jsx(_s,{size:18,color:"#10b981"})]}),f.jsxs("div",{className:"metric-body",children:[f.jsx("span",{className:"metric-value",children:"2"}),f.jsx("span",{className:"metric-unit",children:"tuyến ống"})]}),f.jsx("span",{className:"metric-badge badge-info",children:"Cần dò sóng âm"})]})]}),f.jsxs("div",{className:"panel-card",children:[f.jsxs("div",{className:"panel-card-header",children:[f.jsxs("div",{className:"panel-card-title",children:[f.jsx(Ts,{size:17,color:"#d97706"}),f.jsx("span",{children:"Xếp hạng thất thoát theo Phân vùng DMA (KĐT Trung Hòa – Nhân Chính)"})]}),f.jsxs("button",{className:"btn-sm btn-primary",disabled:Z,onClick:ie,style:{display:"flex",alignItems:"center",gap:"6px"},children:[f.jsx(J_,{size:14,className:Z?"animate-spin":""}),f.jsx("span",{children:Z?"Đang phân tích tương quan âm...":"Chạy Dò Sóng Âm Tương Quan"})]})]}),f.jsx("div",{className:"data-table-wrapper",children:f.jsxs("table",{className:"custom-table",children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{children:"Vùng DMA"}),f.jsx("th",{children:"Quy mô phụ tải"}),f.jsx("th",{children:"Lưu lượng cấp TB"}),f.jsx("th",{children:"Lưu lượng đêm (MNF)"}),f.jsx("th",{children:"Tỷ lệ NRW"}),f.jsx("th",{children:"Mức ưu tiên xử lý"})]})}),f.jsxs("tbody",{children:[f.jsxs("tr",{children:[f.jsx("td",{style:{fontWeight:"700"},children:"DMA THNC-02 (Lõi Hoàng Đạo Thúy & Tháp 34T)"}),f.jsx("td",{children:"4.200 Căn hộ (~18.000 dân)"}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:"185.4 m³/h"}),f.jsx("td",{style:{fontFamily:"var(--font-mono)",color:"#ef4444",fontWeight:700},children:"42.5 m³/h"}),f.jsx("td",{style:{fontWeight:"700",color:"#ef4444"},children:"13.2%"}),f.jsx("td",{children:f.jsx("span",{className:"metric-badge badge-danger",children:"Rất Cao (Khẩn cấp)"})})]}),f.jsxs("tr",{children:[f.jsx("td",{style:{fontWeight:"700"},children:"DMA THNC-01 (Hoàng Minh Giám - Cụm Amsterdam)"}),f.jsx("td",{children:"3.100 Căn hộ + Trường học"}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:"128.2 m³/h"}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:"26.0 m³/h"}),f.jsx("td",{style:{fontWeight:"700",color:"#f59e0b"},children:"11.8%"}),f.jsx("td",{children:f.jsx("span",{className:"metric-badge badge-warning",children:"Trung Bình"})})]}),f.jsxs("tr",{children:[f.jsx("td",{style:{fontWeight:"700"},children:"DMA THNC-03 (Trần Duy Hưng - Charmvit Tower)"}),f.jsx("td",{children:"2.800 Căn hộ & Khách sạn"}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:"142.2 m³/h"}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:"19.5 m³/h"}),f.jsx("td",{style:{fontWeight:"700",color:"#10b981"},children:"10.5%"}),f.jsx("td",{children:f.jsx("span",{className:"metric-badge badge-success",children:"Thấp (Tốt)"})})]})]})]})}),$&&f.jsxs("div",{style:{marginTop:"16px",padding:"16px",background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:"8px"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#15803d",fontWeight:700,fontSize:"14px"},children:[f.jsx(_s,{size:18}),f.jsx("span",{children:"KẾT QUẢ ĐỊNH VỊ RÒ RỈ BẰNG THUẬT TOÁN TƯƠNG QUAN ÂM HỌC (ACOUSTIC CORRELATION)"})]}),f.jsxs("span",{className:"metric-badge badge-success",children:["Độ tin cậy: ",$.confidence]})]}),f.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"10px",fontSize:"12.5px",marginTop:"10px"},children:[f.jsxs("div",{children:[f.jsx("b",{children:"Tọa độ định vị:"})," ",f.jsx("span",{style:{color:"#0f172a"},children:$.location})]}),f.jsxs("div",{children:[f.jsx("b",{children:"Độ sâu chôn ống:"})," ",f.jsx("span",{style:{color:"#0f172a"},children:$.depth})]}),f.jsxs("div",{children:[f.jsx("b",{children:"Cỡ & Vật liệu ống:"})," ",f.jsx("span",{style:{color:"#0284c7",fontWeight:600},children:$.pipe})]}),f.jsxs("div",{children:[f.jsx("b",{children:"Lưu lượng thất thoát ước tính:"})," ",f.jsx("span",{style:{color:"#dc2626",fontWeight:700},children:$.lossRate})]}),f.jsxs("div",{children:[f.jsx("b",{children:"Phổ tần số rung động:"})," ",f.jsx("span",{style:{fontFamily:"var(--font-mono)"},children:$.frequency})]}),f.jsxs("div",{children:[f.jsx("b",{children:"Đề xuất xử lý:"})," ",f.jsx("span",{style:{color:"#d97706",fontWeight:600},children:$.recommendedAction})]})]})]})]})]}),s==="quality"&&f.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[f.jsxs("div",{className:"metrics-grid",children:[f.jsxs("div",{className:"metric-card",children:[f.jsxs("div",{className:"metric-header",children:[f.jsx("span",{children:"Độ đục (Turbidity)"}),f.jsx(Qs,{size:18,color:"#0284c7"})]}),f.jsxs("div",{className:"metric-body",children:[f.jsx("span",{className:"metric-value",children:"0.85"}),f.jsx("span",{className:"metric-unit",children:"NTU"})]}),f.jsx("span",{className:"metric-badge badge-success",children:"Chuẩn QCVN (< 2.0 NTU)"})]}),f.jsxs("div",{className:"metric-card",children:[f.jsxs("div",{className:"metric-header",children:[f.jsx("span",{children:"Clo dư (Chlorine)"}),f.jsx(_s,{size:18,color:"#10b981"})]}),f.jsxs("div",{className:"metric-body",children:[f.jsx("span",{className:"metric-value",children:"0.42"}),f.jsx("span",{className:"metric-unit",children:"mg/L"})]}),f.jsx("span",{className:"metric-badge badge-success",children:"Ngưỡng chuẩn (0.2 - 1.0 mg/L)"})]}),f.jsxs("div",{className:"metric-card",children:[f.jsxs("div",{className:"metric-header",children:[f.jsx("span",{children:"Độ pH"}),f.jsx(bl,{size:18,color:"#0284c7"})]}),f.jsx("div",{className:"metric-body",children:f.jsx("span",{className:"metric-value",children:"7.35"})}),f.jsx("span",{className:"metric-badge badge-info",children:"Chuẩn (6.5 - 8.5)"})]}),f.jsxs("div",{className:"metric-card",children:[f.jsxs("div",{className:"metric-header",children:[f.jsx("span",{children:"Chất rắn tan (TDS)"}),f.jsx(ro,{size:18,color:"#64748b"})]}),f.jsxs("div",{className:"metric-body",children:[f.jsx("span",{className:"metric-value",children:"128"}),f.jsx("span",{className:"metric-unit",children:"ppm"})]}),f.jsx("span",{className:"metric-badge badge-success",children:"An toàn (< 1000 ppm)"})]})]}),f.jsxs("div",{className:"panel-card",children:[f.jsxs("div",{className:"panel-card-header",children:[f.jsxs("div",{className:"panel-card-title",children:[f.jsx(Qs,{size:17,color:"#0284c7"}),f.jsx("span",{children:"Trạm Quan Trắc Đa Chỉ Tiêu Thời Gian Thực (QCVN 01-1:2018/BYT)"})]}),f.jsx("button",{className:"btn-sm btn-primary",onClick:()=>it("Chat_Luong_Nuoc_QCVN_THNC.csv"),children:"Xuất Báo Cáo"})]}),f.jsx("div",{className:"data-table-wrapper",children:f.jsxs("table",{className:"custom-table",children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{children:"Trạm quan trắc"}),f.jsx("th",{children:"Vị trí đấu nối"}),f.jsx("th",{children:"Độ đục (NTU)"}),f.jsx("th",{children:"Clo dư (mg/L)"}),f.jsx("th",{children:"pH"}),f.jsx("th",{children:"TDS (ppm)"}),f.jsx("th",{children:"Van xả cặn tự động"}),f.jsx("th",{children:"Đánh giá chuẩn"})]})}),f.jsx("tbody",{children:[{station:"WQ-01 / Trạm Bơm Tăng Áp",loc:"Đầu nguồn cấp Lê Văn Lương",ntu:"0.62 NTU",cl:"0.55 mg/L",ph:"7.40",tds:"115 ppm",flush:"Đóng (Bình thường)",status:"Đạt chuẩn A",badge:"badge-success"},{station:"WQ-02 / Hố Đồng Hồ Mandarin",loc:"Cụm THPT Amsterdam - Hoàng Minh Giám",ntu:"1.45 NTU",cl:"0.38 mg/L",ph:"7.30",tds:"132 ppm",flush:"Đang xả đáy chu kỳ",status:"Cảnh báo nhẹ",badge:"badge-warning"},{station:"WQ-03 / Trạm Thứ Cấp Tháp 34T",loc:"Lõi Đô Thị Hoàng Đạo Thúy",ntu:"0.80 NTU",cl:"0.42 mg/L",ph:"7.35",tds:"124 ppm",flush:"Đóng (Bình thường)",status:"Đạt chuẩn A",badge:"badge-success"},{station:"WQ-04 / Trạm Tổ Hợp Charmvit",loc:"Cửa ngõ Trần Duy Hưng",ntu:"0.74 NTU",cl:"0.40 mg/L",ph:"7.38",tds:"128 ppm",flush:"Đóng (Bình thường)",status:"Đạt chuẩn A",badge:"badge-success"}].map((de,St)=>f.jsxs("tr",{children:[f.jsx("td",{style:{fontWeight:700},children:de.station}),f.jsx("td",{children:de.loc}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:de.ntu}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:de.cl}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:de.ph}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:de.tds}),f.jsx("td",{style:{fontSize:"12px"},children:de.flush}),f.jsx("td",{children:f.jsx("span",{className:`metric-badge ${de.badge}`,children:de.status})})]},St))})]})})]}),f.jsxs("div",{className:"panel-card",style:{padding:"20px"},children:[f.jsx("h3",{style:{fontSize:"15px",fontWeight:"700",marginBottom:"8px"},children:"Cơ chế Giám sát Chất lượng Nước Tự Động Toàn KĐT"}),f.jsx("p",{style:{fontSize:"13px",color:"#64748b",lineHeight:"1.6"},children:"Mạng lưới quan trắc online tích hợp hệ thống IoT đa thông số (Multi-parameter Probe) đo đạc liên tục 15 phút/lần truyền về trung tâm SCADA qua mạng 4G/NB-IoT. Khi chỉ số độ đục vượt 2.0 NTU hoặc Clo dư dưới 0.2 mg/L, van xả cặn tự động (Auto Flushing Valve) tại hố xả cuối tuyến sẽ kích hoạt xả nước tồn đọng trong 5 phút và gửi cảnh báo tức thì tới kỹ sư vận hành."})]})]}),s==="reports"&&f.jsxs("div",{className:"panel-card",children:[f.jsxs("div",{className:"panel-card-header",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"panel-card-title",children:[f.jsx(K_,{size:18,color:"#0284c7"}),f.jsx("span",{children:"Cân bằng nước & Kiểm toán IWA"})]}),f.jsx("span",{style:{fontSize:"12px",color:"#64748b"},children:"Tiêu chuẩn Quốc tế IWA"})]}),f.jsxs("div",{style:{display:"flex",gap:"8px"},children:[f.jsx("button",{className:"btn-sm btn-secondary",onClick:Mt,title:"In hoặc lưu PDF",children:"In PDF"}),f.jsx("button",{className:"btn-sm btn-primary",onClick:()=>it("Bao_Cao_Can_Bang_Nuoc_IWA.csv"),title:"Tải file CSV",children:"Tải CSV"})]})]}),f.jsx("div",{className:"data-table-wrapper",children:f.jsxs("table",{className:"custom-table",children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{children:"Hạng mục"}),f.jsx("th",{children:"Khối lượng (m³)"}),f.jsx("th",{children:"Tỷ trọng (%)"}),f.jsx("th",{children:"Doanh thu / Thiệt hại"}),f.jsx("th",{children:"Đánh giá"})]})}),f.jsxs("tbody",{children:[f.jsxs("tr",{children:[f.jsx("td",{style:{fontWeight:"700"},children:"1. Tổng cấp mạng lưới SIV (Toàn KĐT Trung Hòa - Nhân Chính)"}),f.jsx("td",{style:{fontFamily:"var(--font-mono)",fontWeight:"700"},children:"380,000 m³"}),f.jsx("td",{children:"100.0%"}),f.jsx("td",{children:"Trạm bơm Tăng áp Lê Văn Lương"}),f.jsx("td",{children:f.jsx("span",{className:"metric-badge badge-info",children:"Chuẩn đo đạc"})})]}),f.jsxs("tr",{children:[f.jsx("td",{style:{paddingLeft:"32px",color:"#047857"},children:"1.1. Tiêu thụ có doanh thu (Billed Consumption)"}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:"332,500 m³"}),f.jsx("td",{children:"87.5%"}),f.jsx("td",{children:"Thu tiền cư dân (~3.32 tỷ VNĐ)"}),f.jsx("td",{children:f.jsx("span",{className:"metric-badge badge-success",children:"Đạt chỉ tiêu"})})]}),f.jsxs("tr",{children:[f.jsx("td",{style:{paddingLeft:"32px",color:"#b91c1c"},children:"1.2. Thất thoát không doanh thu (NRW)"}),f.jsx("td",{style:{fontFamily:"var(--font-mono)",fontWeight:"700"},children:"47,500 m³"}),f.jsx("td",{children:"12.5%"}),f.jsx("td",{children:"Thiệt hại: ~475.0 tr VNĐ/tháng"}),f.jsx("td",{children:f.jsx("span",{className:"metric-badge badge-danger",children:"Cần giảm < 10%"})})]}),f.jsxs("tr",{children:[f.jsx("td",{style:{paddingLeft:"48px",color:"#64748b"},children:"- Thất thoát vật lý (Rò rỉ ống ngầm phân phối)"}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:"35,340 m³"}),f.jsx("td",{children:"9.3%"}),f.jsx("td",{children:"Chảy ngầm trong đất"}),f.jsx("td",{children:"Trọng tâm xử lý: Tuyến Hoàng Đạo Thúy (DMA THNC-02)"})]}),f.jsxs("tr",{children:[f.jsx("td",{style:{paddingLeft:"48px",color:"#64748b"},children:"- Thất thoát thương mại (Sai số đồng hồ, gian lận)"}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:"12,160 m³"}),f.jsx("td",{children:"3.2%"}),f.jsx("td",{children:"Sai số cơ khí sau 5 năm"}),f.jsx("td",{children:"Thay thế đồng hồ điện từ AMR định kỳ"})]})]})]})})]})]})]}),v&&f.jsxs("div",{className:"toast-notification",children:[f.jsx(_s,{size:18,color:"#10b981"}),f.jsx("span",{children:v})]})]})}console.log("[SWMS] Initializing Smart Water Management UI...");const qh=document.getElementById("root");if(qh)try{V_.createRoot(qh).render(f.jsx(U_.StrictMode,{children:f.jsx(JE,{})})),console.log("[SWMS] App successfully mounted to DOM.")}catch(s){console.error("[SWMS] Fatal mount error:",s),qh.innerHTML=`
      <div style="padding: 24px; background: #fee2e2; color: #991b1b; font-family: monospace; border-radius: 8px; margin: 20px;">
        <h2>Lỗi Render Giao Diện React:</h2>
        <pre>${s.stack||s.message}</pre>
      </div>
    `}
